// Restored from ref/.vite/build/src-CoIhwwHr.js
// Buffered root logger and scoped structured logger helpers.
import { inspect } from "node:util";

export type StructuredLogDetails = {
  safe?: Record<string, unknown>;
  sensitive?: Record<string, unknown>;
};

export type StructuredLogger = {
  trace(message: string, details?: StructuredLogDetails): void;
  debug(message: string, details?: StructuredLogDetails): void;
  info(message: string, details?: StructuredLogDetails): void;
  warning(message: string, details?: StructuredLogDetails): void;
  error(message: string, details?: StructuredLogDetails): void;
  log(level: string, message: string, details?: StructuredLogDetails): void;
  dispose(): void;
};

function normalizeLogDetails(
  details?: StructuredLogDetails,
): Required<StructuredLogDetails> {
  return {
    safe: details?.safe ?? {},
    sensitive: details?.sensitive ?? {},
  };
}

class BufferedStructuredLogger implements StructuredLogger {
  private buffer: Array<{
    level: string;
    message: string;
    details: Required<StructuredLogDetails>;
  }> = [];
  private didDrop = false;
  maxBufferSize = 500;

  private push(
    level: string,
    message: string,
    details?: StructuredLogDetails,
  ): void {
    if (this.buffer.length >= this.maxBufferSize) {
      if (!this.didDrop) {
        this.didDrop = true;
        this.buffer.push({
          level: "warning",
          message:
            "Dropped buffered log message after maxBufferSize was reached",
          details: { safe: {}, sensitive: {} },
        });
      }
      return;
    }
    this.buffer.push({ level, message, details: normalizeLogDetails(details) });
  }

  trace(message: string, details?: StructuredLogDetails): void {
    this.push("trace", message, details);
  }
  debug(message: string, details?: StructuredLogDetails): void {
    this.push("debug", message, details);
  }
  info(message: string, details?: StructuredLogDetails): void {
    this.push("info", message, details);
  }
  warning(message: string, details?: StructuredLogDetails): void {
    this.push("warning", message, details);
  }
  error(message: string, details?: StructuredLogDetails): void {
    this.push("error", message, details);
  }
  log(level: string, message: string, details?: StructuredLogDetails): void {
    this.push(level, message, details);
  }
  flushTo(logger: StructuredLogger): void {
    for (const entry of this.buffer) {
      logger.log(entry.level, entry.message, entry.details);
    }
    this.buffer.length = 0;
  }
  dispose(): void {
    this.buffer.length = 0;
  }
}

let rootLogger: StructuredLogger = new BufferedStructuredLogger();
let loggerWasRegistered = false;

export function registerRootStructuredLogger(logger: StructuredLogger): void {
  if (
    loggerWasRegistered &&
    typeof process !== "undefined" &&
    process.env.NODE_ENV !== "test"
  ) {
    throw Error("Logger already set");
  }
  loggerWasRegistered = true;
  if (rootLogger instanceof BufferedStructuredLogger)
    rootLogger.flushTo(logger);
  rootLogger = logger;
}

export function getRootStructuredLogger(): StructuredLogger {
  return rootLogger;
}

export function formatStructuredLogDetails(
  details: Record<string, unknown>,
): string {
  const normalized: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(details)) {
    if (key === "error" && value instanceof Error) {
      normalized.errorName = value.name;
      normalized.errorMessage = value.message;
      normalized.errorStack = value.stack;
      if ("code" in value) normalized.errorCode = value.code;
      continue;
    }
    normalized[key] = value;
  }
  return Object.keys(normalized)
    .sort((left, right) => left.localeCompare(right))
    .map((key) => `${key}=${formatLogValue(normalized[key])}`)
    .join(" ");
}

function formatLogValue(value: unknown): string {
  if (typeof value === "string") {
    return value.length === 0 || /\s/.test(value)
      ? JSON.stringify(value)
      : value;
  }
  if (
    typeof value === "number" ||
    typeof value === "boolean" ||
    typeof value === "bigint"
  ) {
    return String(value);
  }
  if (value == null) return value === undefined ? "undefined" : "null";
  try {
    const json = JSON.stringify(value);
    if (json != null) return json;
  } catch {}
  return inspect(value);
}

export function createScopedStructuredLogger(scope: string): StructuredLogger {
  const prefix = `[${scope}] `;
  const write = (
    level: string,
    message: string,
    details?: StructuredLogDetails,
  ): void => {
    getRootStructuredLogger().log(
      level,
      `${prefix}${message}`,
      normalizeLogDetails(details),
    );
  };
  return {
    trace: (message, details) => write("trace", message, details),
    debug: (message, details) => write("debug", message, details),
    info: (message, details) => write("info", message, details),
    warning: (message, details) => write("warning", message, details),
    error: (message, details) => write("error", message, details),
    log: write,
    dispose: () => getRootStructuredLogger().dispose(),
  };
}

export function createLazyScopedStructuredLogger(
  scope: string,
): () => StructuredLogger {
  let logger: StructuredLogger | null = null;
  return () => {
    logger ??= createScopedStructuredLogger(scope);
    return logger;
  };
}

const logLevelRank: Record<string, number> = {
  error: 0,
  warning: 1,
  info: 2,
  debug: 3,
  trace: 4,
};

export function isLogLevelEnabled(level: string, maxLevel: string): boolean {
  return (logLevelRank[level] ?? 99) <= (logLevelRank[maxLevel] ?? 99);
}
