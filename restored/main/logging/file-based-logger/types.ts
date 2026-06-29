// Restored from ref/.vite/build/file-based-logger-7hbAyAYH.js
// file-based-logger-7hbAyAYH chunk restored from the Codex Electron main bundle.
export type Environment = NodeJS.ProcessEnv;
export type Platform = NodeJS.Platform | string;
export type NonFatalReporter = {
  reportNonFatal(
    error: Error,
    details: {
      kind: string;
      extra?: unknown;
    },
  ): void;
};
export type LoggerSink = {
  logLine(line: string): void;
};
export type BuildFlavorValue = string;
export type BuildFlavorApi = Record<string, unknown> & {
  Agent: BuildFlavorValue;
  Dev: BuildFlavorValue;
  Nightly: BuildFlavorValue;
  InternalAlpha: BuildFlavorValue;
  PublicBeta: BuildFlavorValue;
  Prod: BuildFlavorValue;
  help: string;
  isValid(value: string): boolean;
  parse(value: string | undefined): BuildFlavorValue | null;
  isInternal(value: BuildFlavorValue): boolean;
};
export type StructuredLogger = {
  debug(message: string, details?: unknown): void;
  info(message: string, details?: unknown): void;
  warning(message: string, details?: unknown): void;
};
export type LoggerFactory = (scope: string) => () => StructuredLogger;
export type PackageMetadataOptions<T> = {
  candidates?: string[];
  parse?: (value: string) => T | null;
};
export type WindowsStoreConfig = {
  storeProductId: string;
  storeUpdateManifestUrl: string;
};
export type WindowsUpdaterConfig =
  | {
      kind: "msix";
    }
  | ({
      kind: "store";
    } & WindowsStoreConfig);
export type FileLoggerOptions = {
  appSessionId: string;
  nonFatalReporter: NonFatalReporter;
  rootDir?: string;
  maxSegmentBytes?: number;
  maxSegments?: number;
  pendingLineLimit?: number;
  highWaterMarkBytes?: number;
};
export type FileLoggerRuntimeOptions = {
  processId?: number;
  threadId?: number;
  instanceId?: number;
  now?: () => Date;
  createStream?: (
    file: string,
    highWaterMark: number,
  ) => import("node:fs").WriteStream;
};
