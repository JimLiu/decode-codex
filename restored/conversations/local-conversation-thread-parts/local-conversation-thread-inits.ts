// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Initialization wiring for the local conversation public chunk.
import { once } from "../../runtime/commonjs-interop";
import { initButtonComponentPrimitives } from "../../ui/button";
import { initUseStableCallback } from "../../utils/use-stable-callback";
import { initWindowZoomContext } from "../../utils/window-zoom-context";
import { initAppLoggerRuntime } from "../../runtime/app-logger";
import { initAppScopeSignalRuntime } from "../../runtime/app-scope-runtime";
import { initAppServerRequestRuntime } from "../../runtime/app-server-request";
import { initComposerScopeRuntime } from "../../composer/composer-scope-runtime";
import { initConnectorAppsRuntime } from "../../runtime/connector-apps-runtime";
import { initConversationStateRuntime } from "../../runtime/conversation-state-runtime";
import {
  getChunkModuleExports,
  initAgentMentionMap,
  initMarkdownUtilityNoop,
  initThreadAuxiliaryRuntime,
  initThreadInternalStateRuntime,
} from "./conversation-thread-runtime";
import { initStatsigFeatureGateRuntime } from "../../runtime/feature-gate-runtime";
import { initHostConfigRuntime } from "../../runtime/host-config-runtime";
import { initHostWorktreeContextRuntime } from "../../worktree/host-worktree-context";
import { initLocalEnvironmentConfigRuntime } from "../../runtime/local-environment-config-runtime";
import {
  initConversationRouteSourceRuntime,
  initLocalConversationRouteRuntime,
  initToastSignalRuntime,
} from "../local-conversation-route-runtime";
import { initModalRuntime } from "../../runtime/modal-runtime";
import { initMotionSignalRuntime } from "../../utils/motion-signal-runtime";
import { initPathHelpersRuntime } from "../../runtime/path-helpers-runtime";
import { initPlatformContentRuntime } from "../../runtime/platform-content-runtime";
import { initSignalStateRuntime } from "../../runtime/signal-state-runtime";
import {
  initAppgenLibraryHotChunk,
  initAppgenLibraryRuntime,
  initConversationDisplayTitleSignalsRuntime,
  initConversationMarkdownCopyRuntime,
  initConversationReadStateRuntime,
  initConversationThreadHostRuntime,
  initLocalConversationArtifactsRuntime,
  initPlatformContentBridgeRuntime,
  initPlanSidePanelRuntime,
  initProfileComposerSupportRuntime,
  initProfileConversationSourceRuntime,
  initProfileHotkeyThreadRuntime,
  initProfileThreadRenderSupportRuntime,
  initProfileThreadSearchRuntime,
  initProjectSharedBaseRuntime,
  initProjectsActionRuntime,
  initSummaryPanelSourceHelpersRuntime,
  initThreadCommandRuntime,
  initThreadFindSupportRuntime,
  initThreadSidePanelSupportRuntime,
  initThreadSourceSupportRuntime,
  initThreadSummaryRouteRuntime,
  initWorkspaceRouteQueryRuntime,
  initWorkspaceRouteStateRuntime,
} from "./local-conversation-thread-init-runtime";
import { initMarkdownCopyHelpers } from "../conversation-copy";
import { initThreadSwitchTimingTrackerChunk } from "../../automation/heartbeat-automation-eligibility";
import { initLauncherHotkeyStateChunk } from "../../features/hotkey-window-state";
import { initScrollToBottomButtonChunk } from "../../threads/scroll-to-bottom-button";
import { initAutomationHistoryItemsChunk } from "../../utils/use-automation-history-items";
import { initThreadScrollControllerContextChunk } from "../../threads/thread-scroll-layout/scroll-controller-context";
import { initThreadOverflowMenuChunk } from "../../threads/thread-overflow-menu";
import {
  initBackgroundAgentThreadTab,
  initBackgroundAgentThreadTabs,
} from "./local-conversation-background-agent-thread-tab";
import { initConversationMarkdownRenderer } from "./local-conversation-markdown-renderer";
import { initLocalConversationSearchAdapterChunk } from "./local-conversation-search";
import { initConversationSearchUnitExtractor } from "./local-conversation-search-source";
import { initLocalConversationSummaryPanelSignals } from "./local-conversation-summary-panel-model";
import { initLocalConversationThreadRoute } from "./local-conversation-thread-route";
import { LocalConversationMainThread } from "./local-conversation-thread-entry-components";
import { initLocalConversationTurnSelectors } from "./local-conversation-turn-selectors";
import { initMarkConversationReadEffect } from "./local-conversation-read-state";
import { initPinnedSummaryPanelState } from "./pinned-summary-panel-layout";
import {
  initReviewSearchHighlighter,
  initThreadFindNavigationRail,
  initThreadFindNavigationRailNoopChunk,
} from "./review-search-highlights";
import { initThreadScrollStateSignal } from "./local-conversation-thread-scroll-state-signal";
import { initVisibleTurnGeneratedImagesCollector } from "./visible-turn-generated-images";
import { initWorktreeRestoreBannerChunk } from "./local-conversation-worktree-restore-banner";
import { initLocalConversationGitSummary } from "./local-conversation-summary-panel";
import { initLocalConversationThreadFrameChunk } from "./local-conversation-thread-frame";
import { initIntlRuntime } from "../../vendor/react-intl";

let localEnvironmentRecentActionsModule: unknown;
let localConversationArtifactsModule: unknown;
let localConversationThreadModule: unknown;

export const initLocalEnvironmentRecentActions = once(() => {
  localEnvironmentRecentActionsModule = getChunkModuleExports();
  initPathHelpersRuntime();
  initHostWorktreeContextRuntime();
});

export const initLocalConversationArtifacts = once(() => {
  localConversationArtifactsModule = getChunkModuleExports();
  initMotionSignalRuntime();
  initAppScopeSignalRuntime();
  initProjectsActionRuntime();
  initLocalConversationArtifactsRuntime();
  initPinnedSummaryPanelState();
});

export const initThreadScrollState = once(() => {
  initAgentMentionMap();
});

export const initLocalConversationThreadChunk = once(() => {
  localConversationThreadModule = getChunkModuleExports();
  initMotionSignalRuntime();
  initSignalStateRuntime();
  initAppScopeSignalRuntime();
  initPathHelpersRuntime();
  initIntlRuntime();
  initLocalEnvironmentConfigRuntime();
  initProfileComposerSupportRuntime();
  initThreadInternalStateRuntime();
  initConversationStateRuntime();
  initAppServerRequestRuntime();
  initThreadAuxiliaryRuntime();
  initConversationThreadHostRuntime();
  initWindowZoomContext();
  initAutomationHistoryItemsChunk();
  initConversationReadStateRuntime();
  initProfileThreadSearchRuntime();
  initButtonComponentPrimitives();
  initConversationMarkdownCopyRuntime();
  initMarkdownCopyHelpers();
  initModalRuntime();
  initScrollToBottomButtonChunk();
  initToastSignalRuntime();
  initPlatformContentBridgeRuntime();
  initPlatformContentRuntime();
  initAppgenLibraryRuntime();
  initAppgenLibraryHotChunk();
  initPlanSidePanelRuntime();
  initWorkspaceRouteStateRuntime();
  initWorkspaceRouteQueryRuntime();
  initReviewSearchHighlighter();
  initThreadCommandRuntime();
  initLauncherHotkeyStateChunk();
  initProfileHotkeyThreadRuntime();
  initThreadSwitchTimingTrackerChunk();
  initConnectorAppsRuntime();
  initAppScopeSignalRuntime();
  initComposerScopeRuntime();
  initLocalConversationRouteRuntime();
  initHostConfigRuntime();
  initStatsigFeatureGateRuntime();
  initConversationRouteSourceRuntime();
  initLocalConversationThreadFrameChunk();
  initThreadSidePanelSupportRuntime();
  initThreadScrollControllerContextChunk();
  initThreadFindNavigationRail();
  initThreadFindNavigationRailNoopChunk();
  initSummaryPanelSourceHelpersRuntime();
  initLocalConversationGitSummary();
  initLocalConversationArtifacts();
  initLocalConversationSummaryPanelSignals();
  initAppLoggerRuntime();
  initUseStableCallback();
  initProfileThreadRenderSupportRuntime();
  initWorktreeRestoreBannerChunk();
  initConversationMarkdownRenderer();
  initThreadScrollState();
  initThreadSummaryRouteRuntime();
  initThreadSourceSupportRuntime();
  initProfileConversationSourceRuntime();
  initMarkdownUtilityNoop();
  initThreadFindSupportRuntime();
  initLocalConversationSearchAdapterChunk();
  initConversationSearchUnitExtractor();
  initLocalConversationTurnSelectors();
  initThreadScrollStateSignal();
  initVisibleTurnGeneratedImagesCollector();
  initBackgroundAgentThreadTab();
  initConversationDisplayTitleSignalsRuntime();
  initBackgroundAgentThreadTabs();
  initProjectSharedBaseRuntime();
  initThreadOverflowMenuChunk();
  initMarkConversationReadEffect();
  initLocalConversationThreadRoute();
  LocalConversationMainThread.initChunk();
});
