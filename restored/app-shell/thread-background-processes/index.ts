// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~thread-app-shell-ch~ou5otpha-1Hh4BDD9.js
// Public barrel for thread side-panel registration and background process helpers.
export {
  BackgroundTerminalIcon,
  BackgroundTerminalSidePanelContent,
  createBackgroundTerminalSidePanelTab,
  initBackgroundTerminalIconChunk,
  initBackgroundTerminalSidePanelTabChunk,
  openBackgroundTerminalSidePanelTab,
} from "./background-terminal-tab";
export {
  commandTextMatches,
  normalizeCommandForMatching,
  normalizeExecutableName,
} from "./command-normalization";
export {
  conversationProcessRowsSignal,
  initActiveConversationProcessRowsChunk,
} from "./conversation-process-signal";
export {
  getProcessRuntimeAgeSeconds,
  initProcessMetricHelpersChunk,
  matchProcessMetrics,
  selectRunningProcessRows,
} from "./process-metrics";
export {
  collectConversationProcessRows,
  isSameProcessRow,
  mergeProcessRows,
  restoreRegisteredProcessRows,
} from "./process-rows";
export {
  clearStoppedPendingProcessRows,
  computerUsePictureInPictureAvailableSignal,
  computerUsePictureInPictureVisibleSignal,
  getPendingBackgroundProcessRow,
  getProcessRowSortTarget,
  hasComputerUsePictureInPictureSignal,
  initPendingBackgroundProcessRowsChunk,
  initThreadSummaryPanelSignalsChunk,
  insertPendingProcessRows,
  isPendingProcessRowExpired,
  pendingBackgroundProcessRowsSignal,
  prunePendingProcessRows,
  removePendingBackgroundProcessRow,
  setPendingBackgroundProcessRow,
} from "./pending-process-rows";
export {
  enabledThreadSidePanelTabsSignal,
  getRegisteredThreadSidePanelTabs,
  getThreadSidePanelTabId,
  getThreadSidePanelTabOrder,
  initThreadCommandMenuEntryRegistryChunk,
  initThreadSidePanelTabRegistryChunk,
  registerThreadSidePanelTab,
  threadCommandMenuEntriesSignal,
  threadSidePanelTabDefinitionsSignal,
  useRegisterThreadCommandMenuEntry,
} from "./side-panel-tabs";
export {
  initThreadAppShellSourcesChunk,
  initThreadNullRefChunk,
  ThreadAppShellSourceRegistration,
  useNullAppShellRef,
} from "./thread-app-shell-sources";
export type {
  AppScopeStore,
  BackgroundTerminalDescriptor,
  BackgroundTerminalIconProps,
  BackgroundTerminalSidePanelProps,
  BackgroundTerminalTabRequest,
  CommandExecutionItem,
  ConversationProcessRow,
  ConversationProcessSource,
  ConversationProcessStopAction,
  ConversationProcessThread,
  ConversationTurnSnapshot,
  PendingProcessRowState,
  PendingProcessRowStatus,
  ProcessMetric,
  ProcessRowWithMetrics,
  RegisteredConversationProcess,
  ThreadAppShellSourceRegistrationProps,
  ThreadSidePanelOpenOptions,
  ThreadSidePanelScope,
  ThreadSidePanelTabDefinition,
} from "./types";
