// Restored from ref/.vite/build/file-based-logger-7hbAyAYH.js
// file-based-logger-7hbAyAYH chunk restored from the Codex Electron main bundle.
import * as fs from "node:fs";
import * as path from "node:path";
import * as workerThreads from "node:worker_threads";
import { resolveLogRootDir } from "./log-paths";
import type {
  FileLoggerOptions,
  FileLoggerRuntimeOptions,
  LoggerSink,
} from "./types";
const DEFAULT_SEGMENT_BYTES = 10 * 1024 * 1024;
const DEFAULT_SEGMENTS = 5;
const DEFAULT_PENDING_LINE_LIMIT = 10_000;
const DEFAULT_HIGH_WATER_MARK_BYTES = 1024 * 1024;
const DEFAULT_RETENTION_DAYS = 15;
let nextLoggerInstanceId = 0;
function padTwoDigits(value: number): string {
  return value.toString().padStart(2, "0");
}
function logDayDirectory(rootDir: string, timestamp: Date): string {
  return path.join(
    rootDir,
    timestamp.getUTCFullYear().toString(),
    padTwoDigits(timestamp.getUTCMonth() + 1),
    padTwoDigits(timestamp.getUTCDate()),
  );
}
function normalizePositiveOption(
  value: number,
  fallback: number,
  reportFailure: (error: Error, extra: Record<string, unknown>) => void,
  optionName: string,
): number {
  if (value > 0) return value;
  reportFailure(Error(`[file-logger] invalid ${optionName}`), {
    [optionName]: value,
  });
  return fallback;
}
function segmentFilePrefix(
  appSessionId: string,
  processId: number,
  threadId: number,
  instanceId: number,
  timestamp: Date,
): string {
  return `codex-desktop-${appSessionId}-${processId}-t${threadId}-i${instanceId}-${padTwoDigits(timestamp.getUTCHours())}${padTwoDigits(timestamp.getUTCMinutes())}${padTwoDigits(timestamp.getUTCSeconds())}`;
}
function allocateLoggerInstanceId(): number {
  nextLoggerInstanceId += 1;
  return nextLoggerInstanceId;
}
function pruneOldLogDirectories(
  rootDir: string,
  now: Date,
  retentionDays: number,
  reportFailure: (error: Error, extra: Record<string, unknown>) => void,
): void {
  try {
    const today = new Date(
      Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()),
    );
    const oldestKeptDay = new Date(today);
    oldestKeptDay.setUTCDate(oldestKeptDay.getUTCDate() - (retentionDays - 1));
    for (const yearName of fs.readdirSync(rootDir)) {
      if (!/^\d{4}$/.test(yearName)) continue;
      const year = Number(yearName);
      if (!Number.isFinite(year)) continue;
      const yearDir = path.join(rootDir, yearName);
      for (const monthName of fs.readdirSync(yearDir)) {
        if (!/^\d{2}$/.test(monthName)) continue;
        const month = Number(monthName);
        if (!Number.isFinite(month) || month < 1 || month > 12) continue;
        const monthDir = path.join(yearDir, monthName);
        for (const dayName of fs.readdirSync(monthDir)) {
          if (!/^\d{2}$/.test(dayName)) continue;
          const day = Number(dayName);
          if (!Number.isFinite(day) || day < 1 || day > 31) continue;
          const dayDate = new Date(Date.UTC(year, month - 1, day));
          if (dayDate < oldestKeptDay) {
            fs.rmSync(path.join(monthDir, dayName), {
              recursive: true,
              force: true,
            });
          }
        }
        if (fs.readdirSync(monthDir).length === 0) {
          fs.rmSync(monthDir, {
            recursive: true,
            force: true,
          });
        }
      }
      if (fs.readdirSync(yearDir).length === 0) {
        fs.rmSync(yearDir, {
          recursive: true,
          force: true,
        });
      }
    }
  } catch (error) {
    reportFailure(Error("[file-logger] failed to prune old logs"), {
      rootDir,
      retentionDays,
      error: error instanceof Error ? error.message : String(error),
    });
  }
}
function createFileBasedLogger(
  options: FileLoggerOptions,
  runtime: FileLoggerRuntimeOptions = {},
): LoggerSink {
  const reportFailure = (
    error: Error,
    extra: Record<string, unknown>,
  ): void => {
    options.nonFatalReporter.reportNonFatal(error, {
      kind: "file-based-logger",
      extra,
    });
  };
  const rootDir = options.rootDir ?? resolveLogRootDir();
  const processId = runtime.processId ?? process.pid;
  const threadId = runtime.threadId ?? workerThreads.threadId ?? 0;
  const instanceId = runtime.instanceId ?? allocateLoggerInstanceId();
  const appSessionId = options.appSessionId;
  const now = runtime.now ?? (() => new Date());
  const maxSegmentBytes = normalizePositiveOption(
    options.maxSegmentBytes ?? DEFAULT_SEGMENT_BYTES,
    DEFAULT_SEGMENT_BYTES,
    reportFailure,
    "maxSegmentBytes",
  );
  const maxSegments = normalizePositiveOption(
    options.maxSegments ?? DEFAULT_SEGMENTS,
    DEFAULT_SEGMENTS,
    reportFailure,
    "maxSegments",
  );
  const pendingLineLimit = normalizePositiveOption(
    options.pendingLineLimit ?? DEFAULT_PENDING_LINE_LIMIT,
    DEFAULT_PENDING_LINE_LIMIT,
    reportFailure,
    "pendingLineLimit",
  );
  const highWaterMark =
    options.highWaterMarkBytes ?? DEFAULT_HIGH_WATER_MARK_BYTES;
  const createStream =
    runtime.createStream ??
    ((file: string, streamHighWaterMark: number) =>
      fs.createWriteStream(file, {
        flags: "w",
        highWaterMark: streamHighWaterMark,
      }));
  const inertLogger: LoggerSink = {
    logLine: () => {},
  };
  try {
    let currentDate = now();
    let currentDir = logDayDirectory(rootDir, currentDate);
    fs.mkdirSync(currentDir, {
      recursive: true,
    });
    pruneOldLogDirectories(
      rootDir,
      currentDate,
      DEFAULT_RETENTION_DAYS,
      reportFailure,
    );
    let filePrefix = segmentFilePrefix(
      appSessionId,
      processId,
      threadId,
      instanceId,
      currentDate,
    );
    let streamFailed = false;
    let segmentIndex = 0;
    let segmentBytes = 0;
    let droppedLineCount = 0;
    let pendingLines: Array<{
      text: string;
      bytes: number;
    }> = [];
    let pendingCursor = 0;
    let isFlushing = false;
    const segmentPath = (index: number) =>
      path.join(currentDir, `${filePrefix}-${index}.log`);
    const reportStreamError = (error: unknown) => {
      streamFailed = true;
      reportFailure(Error("[file-logger] stream error"), {
        error: error instanceof Error ? error.message : String(error),
        rootDir,
        appSessionId,
        processId,
        threadId,
        instanceId,
      });
    };
    const attachStreamErrorHandler = (stream: fs.WriteStream) => {
      stream.on("error", reportStreamError);
      return stream;
    };
    let stream = attachStreamErrorHandler(
      createStream(segmentPath(segmentIndex), highWaterMark),
    );
    const rotateDayIfNeeded = () => {
      const nextDate = now();
      const nextDir = logDayDirectory(rootDir, nextDate);
      if (nextDir === currentDir) return;
      currentDate = nextDate;
      currentDir = nextDir;
      fs.mkdirSync(currentDir, {
        recursive: true,
      });
      filePrefix = segmentFilePrefix(
        appSessionId,
        processId,
        threadId,
        instanceId,
        currentDate,
      );
      stream.end();
      segmentIndex = 0;
      segmentBytes = 0;
      droppedLineCount = 0;
      stream = attachStreamErrorHandler(
        createStream(segmentPath(segmentIndex), highWaterMark),
      );
    };
    const rotateSegment = () => {
      stream.end();
      segmentIndex = (segmentIndex + 1) % maxSegments;
      segmentBytes = 0;
      stream = attachStreamErrorHandler(
        createStream(segmentPath(segmentIndex), highWaterMark),
      );
    };
    const enqueueDroppedLineNotice = () => {
      if (droppedLineCount === 0) return;
      const text = `[file-logger] dropped ${droppedLineCount} lines due to backpressure\n`;
      pendingLines.push({
        text,
        bytes: Buffer.byteLength(text),
      });
      droppedLineCount = 0;
    };
    const flushPendingLines = () => {
      if (streamFailed) {
        pendingLines = [];
        pendingCursor = 0;
        droppedLineCount = 0;
        return;
      }
      if (isFlushing) return;
      isFlushing = true;
      let waitingForDrain = false;
      try {
        for (;;) {
          if (pendingCursor >= pendingLines.length) enqueueDroppedLineNotice();
          if (pendingCursor >= pendingLines.length) break;
          const line = pendingLines[pendingCursor]!;
          if (segmentBytes + line.bytes > maxSegmentBytes) rotateSegment();
          const canContinue = stream.write(line.text);
          segmentBytes += line.bytes;
          pendingCursor += 1;
          if (!canContinue) {
            waitingForDrain = true;
            stream.once("drain", () => {
              isFlushing = false;
              flushPendingLines();
            });
            return;
          }
        }
        pendingLines = [];
        pendingCursor = 0;
      } catch (error) {
        reportFailure(Error("[file-logger] write failed"), {
          error: error instanceof Error ? error.message : String(error),
          rootDir,
          appSessionId,
          processId,
          threadId,
          instanceId,
          maxSegments,
          maxSegmentBytes,
          pendingLineLimit,
        });
        pendingLines = [];
        pendingCursor = 0;
      } finally {
        if (isFlushing && !waitingForDrain) isFlushing = false;
      }
    };
    return {
      logLine(line: string): void {
        if (streamFailed) return;
        try {
          if (!isFlushing && pendingLines.length === 0) rotateDayIfNeeded();
          const text = `${line}\n`;
          if (pendingLines.length - pendingCursor >= pendingLineLimit) {
            droppedLineCount += 1;
            return;
          }
          pendingLines.push({
            text,
            bytes: Buffer.byteLength(text),
          });
          flushPendingLines();
        } catch (error) {
          reportFailure(Error("[file-logger] logLine threw"), {
            error: error instanceof Error ? error.message : String(error),
            rootDir,
            appSessionId,
            processId,
            threadId,
            instanceId,
          });
        }
      },
    };
  } catch {
    reportFailure(Error("[file-logger] failed to initialize"), {
      rootDir,
      appSessionId,
      processId,
      threadId,
      instanceId,
    });
    return inertLogger;
  }
}
export { createFileBasedLogger };
