// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Runtime dependencies collected for the local environment action controls.
export {
  appLogger as logger,
  initAppLoggerRuntime,
} from "./app-logger";
export { useScope, useScopedValue } from "./app-scope-hooks";
export {
  appScopeRoot as appScope,
  initAppScopeSignalRuntime,
} from "./app-scope-runtime";
export {
  initKeyboardModifierStateRuntime,
  useCommandRegistration,
} from "./command-registration-runtime";
export {
  initConfigPathRuntime,
  normalizeConfigPath,
} from "./config-path-runtime";
export {
  environmentTerminalControllerService,
  initEnvironmentTerminalRuntime,
} from "./environment-terminal-runtime";
export {
  initGitBranchQueryRuntime,
  initGitQueryKeyHelpers,
  initHostWorkspaceQueries,
  initOsInfoQueryRuntime,
  useGitAvailabilityQuery,
} from "./git-query-runtime";
export { useHostMutation } from "./host-mutation-runtime";
export { initHostWorktreeContextRuntime } from "./host-worktree-context";
export { useHostQuery } from "./host-query-runtime";
export {
  initLocalConversationNavigationRuntime,
  useLocation,
  useNavigate,
} from "./local-conversation-route-runtime";
export {
  initLocalEnvironmentConfigRuntime,
  LOCAL_ENVIRONMENT_CONFIG_PATH_SETTING_KEY,
} from "./local-environment-config-runtime";
export { initModalRuntime, openScopedModal } from "./modal-runtime";
export {
  initOutputArtifactRuntime,
  normalizeWorkspacePath,
} from "./output-artifact-runtime";
export { initPathHelpersRuntime, joinPath } from "./path-helpers-runtime";
export { createPersistedSignal } from "./persisted-signal";
export { initPersistedSignalRuntime } from "./persisted-signal-runtime";
export {
  initPlatformContentRuntime,
  initVscodeBridgeRuntime,
  PlatformContentGate,
} from "./platform-content-runtime";
export { initSignalStateRuntime, useSignalState } from "./signal-state-runtime";
export { useOsInfo } from "../utils/use-os-info";
