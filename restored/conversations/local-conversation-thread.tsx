// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Public barrel for the local conversation thread feature chunk. The current chunk keeps the same public export aliases as the previous local-conversation-thread chunk; implementation lives in semantic local-conversation-thread-parts modules while producer imports are still being restored.
export { shouldShowInlineActivityForRightPanel } from "./local-conversation-thread-parts/inline-activity-panel";
export { formatBackgroundAgentDisplayName } from "./local-conversation-thread-parts/local-conversation-chrome-extension-header";
export {
  initBackgroundAgentThreadTab,
  initBackgroundAgentThreadTabs,
  openBackgroundAgentThreadTab,
} from "./local-conversation-thread-parts/local-conversation-background-agent-thread-tab";
export {
  initConversationMarkdownRenderer,
  renderLocalConversationMarkdownForTurns,
} from "./local-conversation-thread-parts/local-conversation-markdown-renderer";
export { isRecentLocalEnvironmentAction } from "./local-conversation-thread-parts/local-environment-recent-actions";
export {
  initLocalConversationTurnSelectors,
  localConversationVisibleTurnEntriesSignal,
} from "./local-conversation-thread-parts/local-conversation-turn-selectors";
export {
  initPinnedSummaryPanelState,
  pinnedSummaryPanelState,
  usePinnedSummaryPanelLayout,
} from "./local-conversation-thread-parts/pinned-summary-panel-layout";
export type { PinnedSummaryPanelLayoutStore } from "./local-conversation-thread-parts/pinned-summary-panel-layout";
export {
  initLocalConversationArtifactSignals,
  localConversationOutputArtifactsSignal,
} from "./local-conversation-thread-parts/local-conversation-artifact-signals";
export {
  initReviewSearchHighlighter,
  initThreadFindNavigationRail,
  ThreadFindNavigationRail,
  useReviewSearchHighlights,
} from "./local-conversation-thread-parts/review-search-highlights";
export {
  createLocalConversationSearchAdapter,
  initConversationSearchHelpers,
} from "./local-conversation-thread-parts/local-conversation-search";
export {
  initMarkConversationReadEffect,
  useMarkConversationReadOnVisibility,
} from "./local-conversation-thread-parts/local-conversation-read-state";
export { useResumeLocalConversation } from "./local-conversation-thread-parts/local-conversation-resume";
export {
  initLocalConversationSummaryPanelSignals,
  useLocalConversationSummaryPanelModel,
} from "./local-conversation-thread-parts/local-conversation-summary-panel-model";
export { LocalConversationMainThread } from "./local-conversation-thread-parts/local-conversation-thread-entry-components";
export {
  initLocalConversationGitSummary,
  initThreadSummaryPanelChrome,
  LocalConversationSummaryPanel,
  ThreadSummaryPanelChrome,
} from "./local-conversation-thread-parts/local-conversation-summary-panel";
export {
  initLocalConversationThreadRoute,
  LocalConversationSideChatThread,
  LocalConversationSummaryThread,
  LocalConversationThread,
} from "./local-conversation-thread-parts/local-conversation-thread-route";
export {
  initLocalConversationArtifacts,
  initLocalConversationThreadChunk,
  initLocalEnvironmentRecentActions,
  initThreadScrollState,
} from "./local-conversation-thread-parts/local-conversation-thread-inits";
