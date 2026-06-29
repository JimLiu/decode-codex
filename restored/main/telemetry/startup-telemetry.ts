// Restored from ref/.vite/build/main-r5HnecX_.js
// Startup telemetry helpers for launch logging and phase timing.

type StructuredLogDetails = {
  safe?: Record<string, unknown>;
  sensitive?: Record<string, unknown>;
};

type StartupTraceLoggerBoundary = {
  trace(message: string, details: Required<StructuredLogDetails>): void;
};

type StartupInfoLoggerBoundary = {
  info(message: string, details: Required<StructuredLogDetails>): void;
};

type ErrorReporterBoundary = {
  reportNonFatal(error: unknown, details: Record<string, unknown>): void;
};

type DatadogLogSinkFailure = {
  reason?: string;
  type?: string;
  [key: string]: unknown;
};

type LaunchLogDetails = {
  agentRunId?: string | null;
  allowDebugMenu: boolean;
  allowDevtools: boolean;
  allowInspectElement: boolean;
  buildFlavor: string;
  enableSparkle: boolean;
  enableUpdater: boolean;
  nodeEnv?: string;
  packaged: boolean;
  platform: NodeJS.Platform | string;
};

type StartupTelemetryOptions = {
  errorReporter: ErrorReporterBoundary;
  rootLogger: StartupInfoLoggerBoundary;
  startedAtMs: number;
  startupLogger: StartupTraceLoggerBoundary;
};

export type StartupTelemetryHelpers = {
  logLaunch(details: LaunchLogDetails): void;
  reportDatadogLogSinkFailure(failure: DatadogLogSinkFailure): void;
  traceStartupPhase(
    message: string,
    phaseStartedAtMs: number,
    safeDetails?: Record<string, unknown>,
  ): void;
};

export function createStartupTelemetryHelpers({
  errorReporter,
  rootLogger,
  startedAtMs,
  startupLogger,
}: StartupTelemetryOptions): StartupTelemetryHelpers {
  return {
    logLaunch(details) {
      rootLogger.info("Launching app", {
        safe: {
          buildFlavor: details.buildFlavor,
          nodeEnv: details.nodeEnv,
          enableUpdater: details.enableUpdater,
          enableSparkle: details.enableSparkle,
          allowDevtools: details.allowDevtools,
          allowInspectElement: details.allowInspectElement,
          allowDebugMenu: details.allowDebugMenu,
          platform: details.platform,
          packaged: details.packaged,
          agentRunId: details.agentRunId ?? null,
        },
        sensitive: {},
      });
    },
    reportDatadogLogSinkFailure(failure) {
      errorReporter.reportNonFatal("Datadog log sink failure", {
        kind: "datadog-log-sink-failure",
        tags: {
          failureType: failure.type,
          reason: failure.reason,
        },
        extra: { failure },
      });
    },
    traceStartupPhase(message, phaseStartedAtMs, safeDetails = {}) {
      const now = Date.now();
      startupLogger.trace(message, {
        safe: {
          phaseElapsedMs: now - phaseStartedAtMs,
          startupElapsedMs: now - startedAtMs,
          ...safeDetails,
        },
        sensitive: {},
      });
    },
  };
}
