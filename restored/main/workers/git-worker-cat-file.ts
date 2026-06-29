// Restored from ref/.vite/build/worker.js
// Git object and disk fallback file reader for worker cat-file requests.

import type { ReadableStream } from "node:stream/web";
import { runGitCommand } from "./git-worker-commands";
import { readStableMetadata } from "./git-worker-repo-queries";
import type { WorkerExecutionHostClient } from "./worker-execution-host-client";

type CatFileResult =
  | { type: "success"; lines: string[] }
  | {
      type: "error";
      error:
        | { type: "not-found" | "unknown" }
        | { type: "too-large"; limitBytes: number };
    };

const maxCatFileBytes = 5 * 1024 * 1024;
const noLazyFetchEnv = { GIT_NO_LAZY_FETCH: "1" };

export async function readCatFile({
  cwd,
  fallbackToDisk,
  host,
  oid,
  path,
  signal,
}: {
  cwd: string;
  fallbackToDisk: boolean;
  host: WorkerExecutionHostClient;
  oid: string | null;
  path: string;
  signal: AbortSignal;
}): Promise<CatFileResult> {
  try {
    const metadata = await readStableMetadata({ cwd, host, signal });
    if (metadata == null) return unknownCatFileError();

    const pathApi = await host.platformPath();
    const diskPath = pathApi.join(metadata.root, path);
    if (!isValidObjectIdCandidate(oid)) {
      return fallbackToDisk
        ? readDiskTextFile(diskPath, host)
        : notFoundCatFileError();
    }

    const gitObject = await readGitObjectLines(
      metadata.root,
      oid,
      host,
      signal,
    );
    return gitObject.type === "success" ||
      !fallbackToDisk ||
      gitObject.error.type !== "not-found"
      ? gitObject
      : readDiskTextFile(diskPath, host);
  } catch (error) {
    return isMissingPathError(error)
      ? notFoundCatFileError()
      : unknownCatFileError();
  }
}

async function readGitObjectLines(
  root: string,
  oid: string,
  host: WorkerExecutionHostClient,
  signal: AbortSignal,
): Promise<CatFileResult> {
  const sizeResult = await runGitCommand({
    args: ["cat-file", "-s", oid],
    cwd: root,
    env: noLazyFetchEnv,
    host,
    signal,
    timeoutMs: 30_000,
  });
  if (!sizeResult.success) {
    return catFileCommandError(sizeResult.code);
  }

  const byteLength = Number.parseInt(sizeResult.stdout, 10);
  if (!Number.isNaN(byteLength) && byteLength > maxCatFileBytes) {
    return tooLargeCatFileError();
  }

  const contentResult = await runGitCommand({
    args: ["cat-file", "-p", oid],
    cwd: root,
    env: noLazyFetchEnv,
    host,
    maxOutputBytes: maxCatFileBytes,
    signal,
    timeoutMs: 30_000,
    trim: false,
  });
  if (contentResult.outputLimitExceeded) return tooLargeCatFileError();
  return contentResult.success
    ? {
        type: "success",
        lines: splitLinesPreservingNewline(contentResult.stdout),
      }
    : catFileCommandError(contentResult.code);
}

async function readDiskTextFile(
  path: string,
  host: WorkerExecutionHostClient,
): Promise<CatFileResult> {
  const stat = await host.stat(path, { bypassCache: true });
  const size = typeof stat.size === "number" ? stat.size : null;
  if (size != null && size > maxCatFileBytes) return tooLargeCatFileError();

  const bytes = await readStreamBytes(
    await host.readFile(path),
    maxCatFileBytes + 1,
  );
  if (bytes.byteLength > maxCatFileBytes) return tooLargeCatFileError();
  return {
    type: "success",
    lines: splitLinesPreservingNewline(
      new TextDecoder("utf-8", { ignoreBOM: true }).decode(bytes),
    ),
  };
}

async function readStreamBytes(
  stream: ReadableStream<unknown>,
  limitBytes: number,
): Promise<Uint8Array> {
  const reader = stream.getReader();
  const chunks: Uint8Array[] = [];
  let byteLength = 0;
  try {
    while (byteLength < limitBytes) {
      const { done, value } = await reader.read();
      if (done) break;
      const chunk = chunkToBytes(value);
      const limitedChunk = chunk.subarray(0, limitBytes - byteLength);
      chunks.push(limitedChunk);
      byteLength += limitedChunk.byteLength;
    }
    if (byteLength === limitBytes) await reader.cancel().catch(() => {});
  } finally {
    reader.releaseLock();
  }
  return concatBytes(chunks, byteLength);
}

function splitLinesPreservingNewline(value: string): string[] {
  const lines = value.split(/(?<=\n)/);
  if (lines.length === 1 && lines[0] === "") return [];
  if (lines.at(-1) === "") lines.pop();
  return lines;
}

function chunkToBytes(chunk: unknown): Uint8Array {
  if (chunk instanceof Uint8Array) return chunk;
  if (Array.isArray(chunk)) return Uint8Array.from(chunk.map(Number));
  if (chunk instanceof ArrayBuffer) return new Uint8Array(chunk);
  if (ArrayBuffer.isView(chunk)) {
    return new Uint8Array(chunk.buffer, chunk.byteOffset, chunk.byteLength);
  }
  if (typeof chunk === "string") return new TextEncoder().encode(chunk);
  if (chunk == null) return new Uint8Array();
  return new TextEncoder().encode(String(chunk));
}

function concatBytes(chunks: Uint8Array[], byteLength: number): Uint8Array {
  const bytes = new Uint8Array(byteLength);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return bytes;
}

function isValidObjectIdCandidate(oid: string | null): oid is string {
  return oid != null && oid.length > 0 && !/^0+$/.test(oid);
}

function catFileCommandError(code: number | null): CatFileResult {
  return code === 128 ? notFoundCatFileError() : unknownCatFileError();
}

function notFoundCatFileError(): CatFileResult {
  return { type: "error", error: { type: "not-found" } };
}

function tooLargeCatFileError(): CatFileResult {
  return {
    type: "error",
    error: { type: "too-large", limitBytes: maxCatFileBytes },
  };
}

function unknownCatFileError(): CatFileResult {
  return { type: "error", error: { type: "unknown" } };
}

function isMissingPathError(error: unknown): boolean {
  if (!(error instanceof Error)) return false;
  return (
    ("code" in error && (error as { code?: unknown }).code === "ENOENT") ||
    isMissingPathText(error.message)
  );
}

function isMissingPathText(value: string): boolean {
  return (
    value.includes("ENOENT") ||
    value.includes("No such file") ||
    value.includes("cannot open") ||
    value.includes("not found")
  );
}
