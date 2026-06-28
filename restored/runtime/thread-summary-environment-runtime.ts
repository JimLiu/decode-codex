// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Thread summary environment, remote handoff, terminal, and pull-request controls.
import {
  $i as getConversationRemoteState,
  Dd as initConversationRemoteStateHelpersRaw,
  Ds as openEnvironmentTerminalSession,
  Ec as initEnvironmentTerminalSessionHelpersRaw,
  Es as initWorkspaceRouteStateHelpersRaw,
  Gl as conversationDisplayTitleSignal,
  js as environmentTerminalControllerSignal,
  kc as diffStatsSignal,
  So as initWorkspaceRouteHelpersRaw,
  Wl as initConversationDisplayTitleSignalsRaw,
  wo as isCompactWindow,
} from "../vendor/projects-app-shared-runtime";
import {
  El as initSummaryPanelPullRequestControlsChunkRaw,
  Tl as SummaryPanelPullRequestControls,
} from "../vendor/profile-page-runtime";
import {
  CloudEnvironmentDropdown,
  initCloudEnvironmentDropdownChunk as initCloudEnvironmentDropdownChunkRaw,
  initLocalRemoteDropdownChunk as initLocalRemoteDropdownChunkRaw,
  initThreadHandoffSummaryHelpersChunk as initThreadHandoffHelpersChunkRaw,
  LocalRemoteDropdown,
  shouldShowThreadHandoffInSummary,
} from "../thread-summary/local-remote-dropdown";

export {
  CloudEnvironmentDropdown,
  conversationDisplayTitleSignal,
  diffStatsSignal,
  environmentTerminalControllerSignal,
  getConversationRemoteState,
  isCompactWindow,
  LocalRemoteDropdown,
  openEnvironmentTerminalSession,
  shouldShowThreadHandoffInSummary,
  SummaryPanelPullRequestControls,
};

export function initThreadSummaryEnvironmentRuntime(): void {
  initSummaryPanelPullRequestControlsChunkRaw();
  initEnvironmentTerminalSessionHelpersRaw();
  initWorkspaceRouteStateHelpersRaw();
  initCloudEnvironmentDropdownChunkRaw();
  initThreadHandoffHelpersChunkRaw();
  initLocalRemoteDropdownChunkRaw();
  initConversationRemoteStateHelpersRaw();
  initConversationDisplayTitleSignalsRaw();
  initWorkspaceRouteHelpersRaw();
}
