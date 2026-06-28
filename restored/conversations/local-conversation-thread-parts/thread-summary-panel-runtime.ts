// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Thread summary panel animation config and route-scoped signal helpers.
import {
  $i as initSummaryPanelAnimationConfig,
  NM as createPersistedScopedSignalRaw,
  Qi as threadSummaryPanelSectionTransition,
  bV as createScopedSignalRaw,
  jM as initScopedSignalRuntime,
} from "../../vendor/appg-thread-shared-runtime";
import {
  $c as openBrowserSummaryTab,
  Cd as pinnedSummaryPanelSpringTransition,
  Fr as installedMcpAppIdsSignal,
  Il as initProjectPanelStateRaw,
  Ir as setThreadSourceFrameState,
  Ja as initThreadSourceFrameStateChunkRaw,
  Jl as initProjectSourceOrMcpSignalsRaw,
  Mr as initRightPanelTabsRuntimeRaw,
  nu as initThreadSummaryPanelSignalsRuntimeRaw,
  Qc as openPullRequestReviewTab,
  id as rightPanelStateSignal,
  md as pinnedSummaryPanelPinnedSignal,
  nd as leftPanelStateSignal,
  Rl as hostConfigSignal,
  Rr as getThreadSourceFrameTabId,
  Sl as workspaceRouteStateSignal,
  Wl as initProjectDisplayWorkspaceSignalsRaw,
  wd as threadLayoutContext,
  Ya as showRightPanel,
  wl as currentWorkspaceRootSignal,
  yu as initWorkspaceRouteStateSignalsRaw,
} from "../../vendor/projects-app-shared-runtime";
import {
  At as initRestoredProcessRowsCollectorDependenciesRaw,
  Jn as PlanIcon,
  kt as formatCommandExecutionItemCommand,
  ls as initSummaryPanelSourceHelpersRaw,
  St as openPlanSidePanelTab,
  Xc as initEmptyPageStateChunkRaw,
  Yn as initBackgroundTaskSectionTitleChunkRaw,
  fl as initGlobalStateQueryHelpersChunkRaw,
  gt as initWorkspaceRouteStateSignalsChunkRaw,
  hc as openSideChatTabInRightPanel,
  ht as ProcessManagerIcon,
  ss as initThreadSummarySectionsSupportChunkRaw,
  xt as initThreadSummarySourceSupportChunkRaw,
  xl as initThreadSummaryPanelSignalsSupportChunkRaw,
  yc as initLocalConversationSummaryPanelSupportChunkRaw,
} from "../../vendor/profile-page-runtime";
import { backgroundAgentsSignal } from "../background-subagents-runtime";
import {
  initLocalConversationRouteRuntime,
  localConversationRouteScope,
} from "../local-conversation-route-runtime";

export {
  backgroundAgentsSignal,
  currentWorkspaceRootSignal,
  formatCommandExecutionItemCommand,
  getThreadSourceFrameTabId,
  hostConfigSignal,
  leftPanelStateSignal,
  installedMcpAppIdsSignal,
  openBrowserSummaryTab,
  openPlanSidePanelTab,
  openPullRequestReviewTab,
  openSideChatTabInRightPanel,
  pinnedSummaryPanelPinnedSignal,
  pinnedSummaryPanelSpringTransition,
  PlanIcon,
  ProcessManagerIcon,
  rightPanelStateSignal,
  setThreadSourceFrameState,
  showRightPanel,
  threadLayoutContext,
  threadSummaryPanelSectionTransition,
  workspaceRouteStateSignal,
};

export type ScopedSignalInitializer<TKey, TValue> = (key: TKey) => TValue;

export function createPersistedScopedSignal<TKey, TValue>(
  keyFactory: (key: TKey) => string,
  defaultValue: TValue,
): unknown {
  return createPersistedScopedSignalRaw(keyFactory, defaultValue);
}

export function createLocalConversationRouteScopedSignal<TKey, TValue>(
  initializer: ScopedSignalInitializer<TKey, TValue>,
): unknown {
  return createScopedSignalRaw(localConversationRouteScope, initializer);
}

export function initThreadSummaryPanelSectionRuntime(): void {
  initLocalConversationRouteRuntime();
  initSummaryPanelAnimationConfig();
  initScopedSignalRuntime();
}

export function initThreadSummaryPanelModelRuntime(): void {
  initThreadSummaryPanelSignalsRuntimeRaw();
  initWorkspaceRouteStateSignalsRaw();
  initProjectSourceOrMcpSignalsRaw();
  initProjectDisplayWorkspaceSignalsRaw();
  initProjectPanelStateRaw();
  initSummaryPanelSourceHelpersRaw();
  initRestoredProcessRowsCollectorDependenciesRaw();
}

export function initThreadSummaryPanelSectionsRuntime(): void {
  initProjectSourceOrMcpSignalsRaw();
  initProjectPanelStateRaw();
  initGlobalStateQueryHelpersChunkRaw();
  initRightPanelTabsRuntimeRaw();
  initThreadSummarySourceSupportChunkRaw();
  initProjectDisplayWorkspaceSignalsRaw();
  initThreadSummaryPanelSignalsSupportChunkRaw();
  initThreadSourceFrameStateChunkRaw();
  initEmptyPageStateChunkRaw();
  initThreadSummarySectionsSupportChunkRaw();
  initWorkspaceRouteStateSignalsChunkRaw();
  initLocalConversationSummaryPanelSupportChunkRaw();
  initBackgroundTaskSectionTitleChunkRaw();
}
