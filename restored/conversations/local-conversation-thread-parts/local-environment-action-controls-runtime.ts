// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Runtime dependencies collected for the local environment action controls.
export {
  initCommandMenuItemComponent,
  CommandMenuItem,
} from "../../ui/command-menu-item";
export {
  getWorkspaceRootDisplayName,
  initWorkspaceRootDisplayNameRuntime,
} from "../../workspace/workspace-root-display-name";
export {
  initConversationRemoteStateHelpers,
  initLocalEnvironmentSelectionRuntime,
  initMoreHorizontalIcon,
  initProfileGitSummaryRuntime,
  localEnvironmentActionShortcutSignal,
  LOCAL_ENVIRONMENT_ACTION_COMMAND_IDS,
  MoreHorizontalIcon,
  refreshWorktreeEnvironmentConfigValue,
  setActiveSettingsHost,
  useLocalEnvironmentSelectionState,
} from "../../runtime/local-environment-action-controls-runtime";
export {
  appLogger as logger,
  initAppLoggerRuntime,
} from "../../runtime/app-logger";
export { useScope, useScopedValue } from "../../runtime/app-scope-hooks";
export {
  appScopeRoot as appScope,
  initAppScopeSignalRuntime,
} from "../../runtime/app-scope-runtime";
export {
  initKeyboardModifierStateRuntime,
  useCommandRegistration,
} from "../../runtime/command-registration-runtime";
export {
  initConfigPathRuntime,
  normalizeConfigPath,
} from "../../runtime/config-path-runtime";
export {
  environmentTerminalControllerService,
  initEnvironmentTerminalRuntime,
} from "../../runtime/environment-terminal-runtime";
export {
  initGitBranchQueryRuntime,
  initGitQueryKeyHelpers,
  initHostWorkspaceQueries,
  initOsInfoQueryRuntime,
  useGitAvailabilityQuery,
} from "../../runtime/git-query-runtime";
export { useHostMutation } from "../../runtime/host-mutation-runtime";
export { initHostWorktreeContextRuntime } from "../../worktree/host-worktree-context";
export { useHostQuery } from "../../runtime/host-query-runtime";
export {
  initLocalConversationNavigationRuntime,
  useLocation,
  useNavigate,
} from "../local-conversation-route-runtime";
export {
  initLocalEnvironmentConfigRuntime,
  LOCAL_ENVIRONMENT_CONFIG_PATH_SETTING_KEY,
} from "../../runtime/local-environment-config-runtime";
export { initModalRuntime, openScopedModal } from "../../runtime/modal-runtime";
export {
  initOutputArtifactRuntime,
  normalizeWorkspacePath,
} from "../output-artifact-runtime";
export {
  initPathHelpersRuntime,
  joinPath,
} from "../../runtime/path-helpers-runtime";
export { createPersistedSignal } from "../../runtime/persisted-signal";
export { initPersistedSignalRuntime } from "../../runtime/persisted-signal-runtime";
export {
  initPlatformContentRuntime,
  initVscodeBridgeRuntime,
  PlatformContentGate,
} from "../../runtime/platform-content-runtime";
export {
  initSignalStateRuntime,
  useSignalState,
} from "../../runtime/signal-state-runtime";
export { useOsInfo } from "../../utils/use-os-info";
