// Restored from ref/webview/assets/app-initial~app-main~agent-settings-D9wGrgBN.js
// Agent settings primary-runtime install, reset, and diagnostics helpers.
export {
  PRIMARY_RUNTIME_INSTALL_COMMAND_FEATURE_ID,
  PRIMARY_RUNTIME_SETTINGS_FEATURE_ID,
  formatPrimaryRuntimeDependenciesResetEvent,
  formatPrimaryRuntimeDiagnosticsEvent,
  formatPrimaryRuntimeDiagnosticsFailedEvent,
  initPrimaryRuntimeFeatureFlagsChunk,
  initPrimaryRuntimeInstallActionChunk,
  initPrimaryRuntimeInstallEventFormattersChunk,
  installPrimaryRuntime,
  isPrimaryRuntimeInstallAbortError,
} from "../primary-runtime-install-action";
export {
  cancelPrimaryRuntimeInstall,
  hasPendingPrimaryRuntimeInstall,
  requestPrimaryRuntimeInstall,
} from "../primary-runtime-install-state";

export function initPrimaryRuntimeInstallRequestStateChunk(): void {}
