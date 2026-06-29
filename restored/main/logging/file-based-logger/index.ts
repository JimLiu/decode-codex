// Restored from ref/.vite/build/file-based-logger-7hbAyAYH.js
// file-based-logger-7hbAyAYH chunk restored from the Codex Electron main bundle.
import { shouldUseOwlAppShell } from "./app-shell";
import { BuildFlavor } from "./build-flavor";
import { createFileBasedLogger } from "./file-based-logger";
import { bundleIdentifierForBuildFlavor, resolveLogRootDir } from "./log-paths";
import { readPackageMetadataField } from "./package-metadata";
export {
  shouldUseOwlAppShell,
  BuildFlavor,
  resolveLogRootDir,
  readPackageMetadataField,
  bundleIdentifierForBuildFlavor,
  createFileBasedLogger,
};
export type {
  BuildFlavorApi,
  BuildFlavorValue,
  Environment,
  FileLoggerOptions,
  FileLoggerRuntimeOptions,
  LoggerSink,
  NonFatalReporter,
  Platform,
  WindowsStoreConfig,
  WindowsUpdaterConfig,
} from "./types";
