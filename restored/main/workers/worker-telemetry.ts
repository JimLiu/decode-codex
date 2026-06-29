// Restored from ref/.vite/build/worker.js
// Worker telemetry setup, structured logging, and Datadog log sink wiring.

import { randomUUID } from "node:crypto";
import {
  formatStructuredLogDetails as formatStructuredLogFields,
  isLogLevelEnabled as shouldLogAtLevel,
  registerRootStructuredLogger as installStructuredLogger,
} from "../boundaries/shared-node-runtime.facade";
import { createFileBasedLogger } from "../logging/file-based-logger";
import type { LoggerSink } from "../logging/file-based-logger";

type WorkerTelemetryInitOptions = {
  appVersion?: string;
  buildFlavor?: string;
  buildNumber?: string | null;
  codexAppSessionId?: string;
};

type WorkerTelemetryUserMessage = {
  authMethod: string | null;
  userId?: string | null;
  email?: string | null;
  accountId?: string | null;
};

type WorkerTelemetryUserInfo = {
  authMethod: string;
  id?: string;
};

type DatadogLogSinkFailure = {
  reason?: string;
  status?: number;
  type?: string;
  [key: string]: unknown;
};

type WorkerTelemetryErrorReporter = {
  reportNonFatal(message: string, details: Record<string, unknown>): void;
};

type StructuredLogDetails = {
  safe?: Record<string, unknown>;
  sensitive?: Record<string, unknown>;
};

type StructuredLogLevel = "debug" | "error" | "info" | "trace" | "warning";

type WorkerTelemetrySinks = {
  datadog?: {
    setUserInfo(user: WorkerTelemetryUserInfo | null): void;
    log(
      level: StructuredLogLevel,
      message: string,
      safeDetails?: Record<string, unknown>,
    ): void;
    flushNow?(): void;
  };
  errorReporter?: WorkerTelemetryErrorReporter;
  fileLogger?: LoggerSink;
  sentry?: {
    setUser(
      authMethod: string | null,
      userId?: string | null,
      accountId?: string | null,
    ): void;
  };
};

type WorkerTelemetryOptions = {
  maxLogLevel?: string;
  sentryInitOptions: WorkerTelemetryInitOptions;
  sentryRewriteFramesRoot?: string;
  sinks?: WorkerTelemetrySinks;
  workerId: string;
};

type DatadogLogSinkOptions = {
  buildInfo: {
    buildNumber?: string | null;
    version?: string;
  };
  codexAppSessionId?: string;
  env?: string;
  fetchImpl?: typeof fetch;
  platform: NodeJS.Platform;
  reportFailure(failure: DatadogLogSinkFailure): void;
  source: "codex-desktop";
};

type DatadogLogEventContext = {
  buildInfo: DatadogLogSinkOptions["buildInfo"];
  codexAppSessionId?: string;
  env?: string;
  platform: NodeJS.Platform;
  source: "codex-desktop";
  userInfo: WorkerTelemetryUserInfo | null;
};

type DatadogBatch = {
  requestId: string;
  events: string[];
};

type DatadogLogBatcherOptions = {
  flushIntervalMs?: number;
  maxBatchBytes?: number;
  maxBatchSize?: number;
  onFlush(events: string[]): void;
};

export type WorkerTelemetryController = {
  readonly initMetadata: {
    buildInfo: {
      buildNumber?: string | null;
      version?: string;
    };
    codexAppSessionId?: string;
    env?: string;
    maxLogLevel?: string;
    platform: NodeJS.Platform;
    rewriteFramesRoot?: string;
    source: "codex-desktop";
    workerId: string;
  };
  getCurrentUser(): WorkerTelemetryUserInfo | null;
  reportDatadogLogSinkFailure(failure: DatadogLogSinkFailure): void;
  updateUser(
    message: WorkerTelemetryUserMessage,
  ): WorkerTelemetryUserInfo | null;
};

const DATADOG_INTAKE_URL = "https://chat.openai.com/ces/v1/telemetry/intake";
const DATADOG_API_KEY = "dummy-token";
const DATADOG_EVP_ORIGIN = "browser";
const DEFAULT_BATCH_FLUSH_INTERVAL_MS = 5_000;
const DEFAULT_BATCH_SIZE = 50;
const DEFAULT_BATCH_BYTES = 64 * 1024;
const INITIAL_DATADOG_RETRY_MS = 2_000;
const MAX_DATADOG_RETRY_MS = 30_000;
const MAX_DATADOG_RETRY_ATTEMPTS = 5;
let didReportDatadogDisabled = false;

export function createWorkerTelemetryController({
  maxLogLevel,
  sentryInitOptions,
  sentryRewriteFramesRoot,
  sinks = {},
  workerId,
}: WorkerTelemetryOptions): WorkerTelemetryController {
  let currentUser: WorkerTelemetryUserInfo | null = null;
  const errorReporter = sinks.errorReporter ?? createConsoleErrorReporter();
  const datadog =
    sinks.datadog ??
    new DatadogLogSink({
      source: "codex-desktop",
      env: sentryInitOptions.buildFlavor,
      codexAppSessionId: sentryInitOptions.codexAppSessionId,
      platform: process.platform,
      buildInfo: {
        version: sentryInitOptions.appVersion,
        buildNumber: sentryInitOptions.buildNumber,
      },
      reportFailure: (failure) => {
        errorReporter.reportNonFatal("Datadog log sink failure", {
          kind: "datadog-log-sink-failure",
          tags: {
            failureType: failure.type,
            reason: failure.reason,
            workerId,
          },
          extra: { failure },
        });
      },
    });
  const fileLogger =
    sinks.fileLogger ??
    createFileBasedLogger({
      appSessionId: sentryInitOptions.codexAppSessionId ?? "unknown-session",
      nonFatalReporter: {
        reportNonFatal(error, details) {
          errorReporter.reportNonFatal(error.message, {
            kind: details.kind,
            extra: details.extra,
          });
        },
      },
    });

  installWorkerStructuredLogger({
    datadog,
    fileLogger,
    maxLogLevel,
  });

  return {
    initMetadata: {
      source: "codex-desktop",
      env: sentryInitOptions.buildFlavor,
      codexAppSessionId: sentryInitOptions.codexAppSessionId,
      platform: process.platform,
      buildInfo: {
        version: sentryInitOptions.appVersion,
        buildNumber: sentryInitOptions.buildNumber,
      },
      maxLogLevel,
      rewriteFramesRoot: sentryRewriteFramesRoot,
      workerId,
    },
    getCurrentUser() {
      return currentUser;
    },
    reportDatadogLogSinkFailure(failure) {
      errorReporter.reportNonFatal("Datadog log sink failure", {
        kind: "datadog-log-sink-failure",
        tags: {
          failureType: failure.type,
          reason: failure.reason,
          workerId,
        },
        extra: { failure },
      });
    },
    updateUser(message) {
      sinks.sentry?.setUser(
        message.authMethod,
        message.userId,
        message.accountId,
      );
      currentUser = createWorkerTelemetryUserInfo(message);
      datadog.setUserInfo(currentUser);
      return currentUser;
    },
  };
}

class DatadogLogBatcher {
  private buffer: string[] = [];
  private bufferBytes = 0;
  private flushTimeout: ReturnType<typeof setTimeout> | null = null;
  private readonly options: DatadogLogBatcherOptions;

  constructor(options: DatadogLogBatcherOptions) {
    this.options = options;
  }

  enqueue(event: string): void {
    this.buffer.push(event);
    this.bufferBytes += event.length;
    if (
      this.buffer.length >= (this.options.maxBatchSize ?? DEFAULT_BATCH_SIZE) ||
      this.bufferBytes >= (this.options.maxBatchBytes ?? DEFAULT_BATCH_BYTES)
    ) {
      this.flush();
      return;
    }
    this.scheduleFlush();
  }

  flushNow(): void {
    this.flush();
  }

  private scheduleFlush(): void {
    this.flushTimeout ??= setTimeout(() => {
      this.flush();
    }, this.options.flushIntervalMs ?? DEFAULT_BATCH_FLUSH_INTERVAL_MS);
  }

  private flush(): void {
    if (this.buffer.length === 0) {
      this.clearFlushTimeout();
      return;
    }
    const events = this.buffer.splice(0, this.buffer.length);
    this.bufferBytes = 0;
    this.clearFlushTimeout();
    this.options.onFlush(events);
  }

  private clearFlushTimeout(): void {
    if (this.flushTimeout != null) {
      clearTimeout(this.flushTimeout);
      this.flushTimeout = null;
    }
  }
}

class DatadogLogSink {
  private readonly batcher = new DatadogLogBatcher({
    onFlush: (events) => this.enqueueBatch(events),
  });
  private readonly fetchImpl: typeof fetch;
  private disabled = false;
  private inFlightSend: Promise<void> | null = null;
  private queue: DatadogBatch[] = [];
  private reportedDisabledReason = false;
  private retryAttempts = 0;
  private retryTimeout: ReturnType<typeof setTimeout> | null = null;
  private readonly options: DatadogLogSinkOptions;
  private userInfo: WorkerTelemetryUserInfo | null = null;

  constructor(options: DatadogLogSinkOptions) {
    this.options = options;
    this.fetchImpl = options.fetchImpl ?? fetch;
  }

  setUserInfo(user: WorkerTelemetryUserInfo | null): void {
    this.userInfo = user;
  }

  log(
    level: StructuredLogLevel,
    message: string,
    safeDetails?: Record<string, unknown>,
  ): void {
    const event = createDatadogLogEvent(
      level,
      message,
      {
        buildInfo: this.options.buildInfo,
        userInfo: this.userInfo,
        codexAppSessionId: this.options.codexAppSessionId,
        source: this.options.source,
        env: this.options.env,
        platform: this.options.platform,
      },
      safeDetails,
    );
    this.batcher.enqueue(JSON.stringify(event));
  }

  flushNow(): void {
    this.batcher.flushNow();
    this.drainQueue();
  }

  private enqueueBatch(events: string[]): void {
    if (this.disabled || events.length === 0) return;
    this.queue.push({ requestId: randomUUID(), events });
    this.drainQueue();
  }

  private drainQueue(): void {
    if (this.disabled) {
      this.queue.length = 0;
      return;
    }
    if (this.inFlightSend != null || this.retryTimeout != null) return;
    const batch = this.queue[0];
    if (batch == null) return;
    const body = batch.events.join("\n");
    this.inFlightSend = (async () => {
      try {
        await this.send(body, batch.requestId);
        this.queue.shift();
        this.retryAttempts = 0;
      } catch {
        if (this.disabled) {
          this.queue.length = 0;
          return;
        }
        this.scheduleRetry();
      } finally {
        this.inFlightSend = null;
        this.drainQueue();
      }
    })();
  }

  private scheduleRetry(): void {
    if (this.retryTimeout != null) return;
    if (this.retryAttempts >= MAX_DATADOG_RETRY_ATTEMPTS) {
      this.queue.shift();
      this.retryAttempts = 0;
      this.drainQueue();
      return;
    }
    this.retryAttempts += 1;
    const delay = Math.min(
      MAX_DATADOG_RETRY_MS,
      INITIAL_DATADOG_RETRY_MS * 2 ** (this.retryAttempts - 1),
    );
    this.retryTimeout = setTimeout(() => {
      this.retryTimeout = null;
      this.drainQueue();
    }, delay);
  }

  private disableWithFailure(failure: DatadogLogSinkFailure): void {
    this.disabled = true;
    if (!this.reportedDisabledReason) {
      this.reportedDisabledReason = true;
      if (!didReportDatadogDisabled) {
        didReportDatadogDisabled = true;
        this.options.reportFailure(failure);
      }
    }
  }

  private async send(body: string, requestId: string): Promise<number> {
    const response = await this.fetchImpl(datadogForwardUrl(requestId), {
      method: "POST",
      headers: { "content-type": "text/plain", "x-request-id": requestId },
      body: Buffer.from(body),
    });
    if (!response.ok) {
      const responseBody = await response.text();
      if (response.status >= 400 && response.status < 500) {
        if (response.status === 401 || response.status === 403) {
          this.disableWithFailure({
            type: "disabled",
            reason: "invalid_client_token",
            status: response.status,
            body: responseBody,
          });
        }
        return response.status;
      }
      throw Error(`[datadog] non-2xx response (${response.status})`);
    }
    return response.status;
  }
}

function createDatadogLogEvent(
  level: StructuredLogLevel,
  message: string,
  context: DatadogLogEventContext,
  safeDetails?: Record<string, unknown>,
): Record<string, unknown> {
  const event: Record<string, unknown> = {
    message,
    status: datadogStatusForLevel(level),
    source: context.source,
    service: context.source,
    env: context.env,
    date: Date.now(),
    logger: { name: "app" },
    "codex.app_session_id": context.codexAppSessionId,
    platform: context.platform,
    usr: context.userInfo,
  };
  if (safeDetails != null) Object.assign(event, safeDetails);
  applyDatadogBuildInfo(event, context.buildInfo);
  return event;
}

function datadogStatusForLevel(level: StructuredLogLevel): string {
  switch (level) {
    case "trace":
    case "debug":
      return "debug";
    case "info":
      return "info";
    case "warning":
      return "warn";
    case "error":
      return "error";
  }
}

function applyDatadogBuildInfo(
  event: Record<string, unknown>,
  buildInfo: DatadogLogSinkOptions["buildInfo"],
): void {
  setIfPresent(event, "build_number", buildInfo.buildNumber);
  const version = normalizeAppVersion(buildInfo.version);
  setIfPresent(event, "version", version);
  setIfPresent(event, "app_version", version);
}

function normalizeAppVersion(version: string | undefined): string | null {
  if (version == null) return null;
  const match = /^(\d+\.\d+\.\d+)/.exec(version);
  return match?.[1] ?? version;
}

function setIfPresent(
  target: Record<string, unknown>,
  key: string,
  value: unknown,
): void {
  if (value != null) target[key] = value;
}

function datadogForwardUrl(requestId: string): string {
  const forwardPath = `/api/v2/logs?${new URLSearchParams({
    ddsource: "browser",
    "dd-api-key": DATADOG_API_KEY,
    "dd-evp-origin": DATADOG_EVP_ORIGIN,
    "dd-request-id": requestId,
  }).toString()}`;
  return `${DATADOG_INTAKE_URL}?ddforward=${encodeURIComponent(forwardPath)}`;
}

function installWorkerStructuredLogger({
  datadog,
  fileLogger,
  maxLogLevel,
}: {
  datadog: NonNullable<WorkerTelemetrySinks["datadog"]>;
  fileLogger: LoggerSink;
  maxLogLevel?: string;
}): void {
  const consoleSink = createConsoleSink();
  const logAtLevel =
    (level: StructuredLogLevel) =>
    (message: string, details?: StructuredLogDetails): void => {
      if (!shouldLogAtLevel(level, maxLogLevel ?? "trace")) return;
      const normalized = normalizeStructuredLogDetails(details);
      const mergedDetails = {
        ...normalized.safe,
        ...normalized.sensitive,
      };
      const formattedMessage =
        Object.keys(mergedDetails).length === 0
          ? message
          : `${message} ${formatStructuredLogFields(mergedDetails)}`;
      consoleSink(level, formattedMessage);
      fileLogger.logLine(
        `${new Date().toISOString()} ${level} ${formattedMessage}`,
      );
      datadog.log(level, message, normalized.safe);
    };
  const logger = {
    trace: logAtLevel("trace"),
    debug: logAtLevel("debug"),
    info: logAtLevel("info"),
    warning: logAtLevel("warning"),
    error: logAtLevel("error"),
    log(level: string, message: string, details?: StructuredLogDetails) {
      if (isStructuredLogLevel(level)) logAtLevel(level)(message, details);
    },
    dispose() {
      datadog.flushNow?.();
    },
  };
  installStructuredLogger(logger);
}

function normalizeStructuredLogDetails(
  details?: StructuredLogDetails,
): Required<StructuredLogDetails> {
  return {
    safe: details?.safe ?? {},
    sensitive: details?.sensitive ?? {},
  };
}

function createConsoleSink(): (
  level: StructuredLogLevel,
  message: string,
) => void {
  let disabled = false;
  return (level, message) => {
    if (disabled) return;
    try {
      switch (level) {
        case "error":
          console.error(message);
          break;
        case "warning":
          console.warn(message);
          break;
        case "info":
          console.info(message);
          break;
        case "debug":
          console.debug(message);
          break;
        case "trace":
          console.log(message);
          break;
      }
    } catch (error) {
      if (isConsolePipeError(error)) {
        disabled = true;
        return;
      }
      throw error;
    }
  };
}

function isConsolePipeError(error: unknown): boolean {
  return (
    typeof error === "object" &&
    error != null &&
    "code" in error &&
    (error.code === "EPIPE" ||
      error.code === "ERR_STREAM_DESTROYED" ||
      error.code === "EBADF")
  );
}

function createConsoleErrorReporter(): WorkerTelemetryErrorReporter {
  return {
    reportNonFatal(message, details) {
      try {
        console.error(message, details);
      } catch {}
    },
  };
}

function isStructuredLogLevel(value: string): value is StructuredLogLevel {
  return (
    value === "trace" ||
    value === "debug" ||
    value === "info" ||
    value === "warning" ||
    value === "error"
  );
}

function createWorkerTelemetryUserInfo(
  message: WorkerTelemetryUserMessage,
): WorkerTelemetryUserInfo | null {
  if (message.authMethod == null) return null;
  return {
    id: message.userId ?? undefined,
    authMethod: message.authMethod,
  };
}
