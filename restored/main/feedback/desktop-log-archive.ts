// Restored from ref/.vite/build/feedback-desktop-log-archive-ClZhaiVs.js
// feedback-desktop-log-archive-ClZhaiVs chunk restored from the Codex Electron main bundle.
import * as crypto from "node:crypto";
import * as fs from "node:fs/promises";
import * as os from "node:os";
import * as path from "node:path";
import { promisify } from "node:util";
import * as zlib from "node:zlib";
import * as sharedRuntime from "../boundaries/shared-node-runtime.facade";
import { resolveLogRootDir } from "../logging/file-based-logger";
type ArchiveAttachment = {
  name: string;
  contents: Buffer | Uint8Array;
};
type TarEntry = {
  name: string;
  contents: Buffer | Uint8Array;
  mtimeSeconds: number;
  mode: number;
};
type FeedbackLogArchive = {
  archiveId: string;
  archivePath: string;
};
type StructuredLogger = {
  warning(message: string, details?: unknown): void;
};
type LoggerFactory = (scope: string) => () => StructuredLogger;
const gzip = promisify(zlib.gzip);
const createScopedLogger =
  sharedRuntime.createLazyScopedStructuredLogger as LoggerFactory;
const logger = createScopedLogger("feedback-desktop-log-archive");
const TAR_BLOCK_BYTES = 512;
const TAR_END_BLOCKS = 2;
const activeArchiveDirs = new Map<string, string>();
async function createFeedbackDesktopLogArchive(
  now = new Date(),
  attachments: ArchiveAttachment[] = [],
): Promise<FeedbackLogArchive | null> {
  const day = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()),
  );
  const mtimeSeconds = Math.floor(now.getTime() / 1000);
  const logDir = logDirectoryForDay(resolveLogRootDir(), day);
  const logFiles = await listLogFiles(logDir);
  const entries: TarEntry[] = [
    ...(await Promise.all(
      logFiles.map(async (name) => ({
        name,
        contents: await fs.readFile(path.join(logDir, name)),
        mtimeSeconds,
        mode: 0o644,
      })),
    )),
    ...attachments.map(({ contents, name }) => ({
      contents,
      mode: 0o644,
      mtimeSeconds,
      name,
    })),
  ];
  if (entries.length === 0) return null;
  const archiveDir = await fs.mkdtemp(
    path.join(os.tmpdir(), "codex-feedback-desktop-log-archive-"),
  );
  const archivePath = path.join(
    archiveDir,
    `codex-desktop-app-logs-${formatArchiveDay(day)}.tar.gz`,
  );
  await fs.writeFile(archivePath, await gzip(createTarArchive(entries)));
  const archiveId = crypto.randomUUID();
  activeArchiveDirs.set(archiveId, archiveDir);
  return {
    archiveId,
    archivePath,
  };
}
async function removeFeedbackDesktopLogArchive(
  archiveId: string,
): Promise<boolean> {
  const archiveDir = activeArchiveDirs.get(archiveId);
  if (archiveDir == null) return false;
  activeArchiveDirs.delete(archiveId);
  try {
    await fs.rm(archiveDir, {
      force: true,
      recursive: true,
    });
    return true;
  } catch (error) {
    logger().warning("Failed to remove feedback desktop log archive.", {
      safe: {},
      sensitive: {
        archiveDir,
        error,
      },
    });
    return false;
  }
}
async function listLogFiles(logDir: string): Promise<string[]> {
  try {
    return (
      await fs.readdir(logDir, {
        withFileTypes: true,
      })
    )
      .filter((entry) => entry.isFile())
      .map((entry) => entry.name)
      .sort();
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw error;
  }
}
function createTarArchive(entries: TarEntry[]): Buffer {
  const chunks: Array<Buffer | Uint8Array> = [];
  for (const entry of entries) {
    const safeName = tarPath(entry.name);
    const header = Buffer.alloc(TAR_BLOCK_BYTES, 0);
    writeString(header, 0, 100, safeName);
    writeOctal(header, 100, 8, entry.mode);
    writeOctal(header, 108, 8, 0);
    writeOctal(header, 116, 8, 0);
    writeOctal(header, 124, 12, entry.contents.byteLength);
    writeOctal(header, 136, 12, entry.mtimeSeconds);
    header.fill(32, 148, 156);
    writeString(header, 156, 1, "0");
    writeString(header, 257, 6, "ustar");
    writeString(header, 263, 2, "00");
    writeChecksum(
      header,
      148,
      header.reduce((sum, byte) => sum + byte, 0),
    );
    chunks.push(header, entry.contents);
    const padding =
      (TAR_BLOCK_BYTES - (entry.contents.byteLength % TAR_BLOCK_BYTES)) %
      TAR_BLOCK_BYTES;
    if (padding > 0) chunks.push(Buffer.alloc(padding, 0));
  }
  chunks.push(Buffer.alloc(TAR_BLOCK_BYTES * TAR_END_BLOCKS, 0));
  return Buffer.concat(chunks);
}
function tarPath(name: string): string {
  const normalized = name.replace(/\\/g, "/").replace(/^\/+/, "");
  return normalized.length <= 100 ? normalized : normalized.slice(-100);
}
function writeString(
  target: Buffer,
  offset: number,
  length: number,
  value: string,
): void {
  const bytes = Buffer.from(value, "utf8");
  bytes.copy(target, offset, 0, Math.min(length, bytes.length));
}
function writeOctal(
  target: Buffer,
  offset: number,
  length: number,
  value: number,
): void {
  writeString(
    target,
    offset,
    length,
    `${value.toString(8).padStart(length - 1, "0")}\0`,
  );
}
function writeChecksum(target: Buffer, offset: number, checksum: number): void {
  writeString(target, offset, 8, `${checksum.toString(8).padStart(6, "0")}\0 `);
}
function logDirectoryForDay(rootDir: string, day: Date): string {
  return path.join(
    rootDir,
    day.getUTCFullYear().toString(),
    String(day.getUTCMonth() + 1).padStart(2, "0"),
    String(day.getUTCDate()).padStart(2, "0"),
  );
}
function formatArchiveDay(day: Date): string {
  return `${day.getUTCFullYear()}${String(day.getUTCMonth() + 1).padStart(2, "0")}${String(day.getUTCDate()).padStart(2, "0")}`;
}
export { removeFeedbackDesktopLogArchive, createFeedbackDesktopLogArchive };
