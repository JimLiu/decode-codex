// Restored from ref/.vite/build/worker.js
// Git command execution helpers for worker-side request handlers.

import type { ReadableStream } from "node:stream/web";
import type {
  WorkerExecutionHostClient,
  WorkerExecutionHostProcess,
} from "./worker-execution-host-client";

export type GitCommandResult = {
  command: string[];
  success: boolean;
  code: number | null;
  signal: string | null;
  stdout: string;
  stderr: string;
  outputLimitExceeded: boolean;
};

export async function runGitCommand({
  allowedNonZeroExitCodes = [],
  args,
  cwd,
  env,
  host,
  maxOutputBytes,
  signal,
  timeoutMs,
  trim = true,
}: {
  allowedNonZeroExitCodes?: number[];
  args: string[];
  cwd: string;
  env?: Record<string, string | undefined>;
  host: WorkerExecutionHostClient;
  maxOutputBytes?: number;
  signal?: AbortSignal;
  timeoutMs?: number;
  trim?: boolean;
}): Promise<GitCommandResult> {
  const subcommand = args[0];
  const command = ["git", ...args];
  if (subcommand == null || subcommand.startsWith("-")) {
    return failedGitCommand(
      command,
      "Git command arguments must begin with a subcommand",
    );
  }
  if (signal?.aborted) {
    return failedGitCommand(command, "git process aborted");
  }

  let processHandle: WorkerExecutionHostProcess;
  try {
    processHandle = await host.spawn({
      args: [
        "git",
        "-c",
        `core.hooksPath=${await nullGitHooksPath(host)}`,
        ...args,
      ],
      cwd,
      env: {
        LC_MESSAGES: "C",
        LANGUAGE: "C",
        GIT_TERMINAL_PROMPT: "0",
        GIT_OPTIONAL_LOCKS: "0",
        ...env,
      },
      outputBytesCap: maxOutputBytes,
      signal,
      timeoutMs,
    });
  } catch (error) {
    return failedGitCommand(
      command,
      error instanceof Error ? error.message : "Failed to start git process",
    );
  }

  await processHandle.stdin.close().catch(() => {});
  let waitResult: unknown;
  let stdout: string;
  let stderr: string;
  try {
    [waitResult, stdout, stderr] = await Promise.all([
      processHandle.wait(),
      readStreamAsText(processHandle.stdout),
      readStreamAsText(processHandle.stderr),
    ]);
  } catch (error) {
    return failedGitCommand(
      command,
      error instanceof Error ? error.message : String(error),
    );
  }
  const exit = normalizeWaitResult(waitResult);
  const stdoutText = trim ? stdout.trim() : stdout;
  const stderrText = trim ? stderr.trim() : stderr;
  const outputLimitExceeded = isRecord(waitResult)
    ? waitResult.outputLimitExceeded === true
    : false;
  const success =
    !outputLimitExceeded &&
    exit.code != null &&
    (exit.code === 0 || allowedNonZeroExitCodes.includes(exit.code));

  return {
    command,
    success,
    code: exit.code,
    signal: exit.signal,
    stdout: stdoutText,
    stderr: stderrText,
    outputLimitExceeded,
  };
}

async function nullGitHooksPath(
  host: WorkerExecutionHostClient,
): Promise<"NUL" | "/dev/null"> {
  try {
    return (await host.platformFamily()) === "windows" ? "NUL" : "/dev/null";
  } catch {
    return "/dev/null";
  }
}

function failedGitCommand(command: string[], stderr: string): GitCommandResult {
  return {
    command,
    success: false,
    code: null,
    signal: null,
    stdout: "",
    stderr,
    outputLimitExceeded: false,
  };
}

function normalizeWaitResult(value: unknown): {
  code: number | null;
  signal: string | null;
} {
  if (!isRecord(value)) return { code: null, signal: null };
  return {
    code: typeof value.code === "number" ? value.code : null,
    signal: typeof value.signal === "string" ? value.signal : null,
  };
}

async function readStreamAsText(
  stream: ReadableStream<unknown>,
): Promise<string> {
  const chunks: Uint8Array[] = [];
  const reader = stream.getReader();
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      chunks.push(chunkToBytes(value));
    }
  } finally {
    reader.releaseLock();
  }
  return new TextDecoder().decode(concatBytes(chunks));
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

function concatBytes(chunks: Uint8Array[]): Uint8Array {
  const byteLength = chunks.reduce(
    (total, chunk) => total + chunk.byteLength,
    0,
  );
  const bytes = new Uint8Array(byteLength);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return bytes;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value != null;
}
