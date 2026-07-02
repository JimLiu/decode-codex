// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// Legacy app-main current bundle aliases that remain sourced from the current bundle.
export { areArraysEqual } from "../../utils/are-arrays-equal";
export { summarizeParsedDiffs } from "../../review/summarize-parsed-diffs";
export {
  getPullRequestMergeVisualState,
  getPullRequestVisualState,
} from "../../utils/pull-request-visual-state";
export {
  openReviewTabForConversation as openThreadLastTurnReviewSidePanelTab,
  openReviewTab as setThreadBrowserSidePanelExpanded,
} from "../../review/review-side-panel-tab-commands";
export {
  initUnifiedDiffIconChunk as initFileDiffLayoutRuntime,
  UnifiedDiffIcon,
} from "../../icons/unified-diff-icon";
export {
  initTrashIconChunk as initAppMainAttachmentRendererRuntime,
  TrashIcon,
} from "../../icons/trash-icon";
export {
  initMessageTextRendererRuntime,
  MessageTextRenderer,
} from "../../conversations/user-message-text";
export {
  shouldShowToolActivityForDetailLevel as SidebarRowIcon,
} from "../../conversations/tool-activity-detail-level";
export {
  buildAmbientSuggestionAppIndex as initThreadRowLayoutRuntimeChunk,
  normalizeAmbientSuggestionAppKey as initSidebarTaskRowRuntimeChunk,
} from "../../connectors/ambient-suggestion-apps";
export {
  initUseWorktreeBaseBranchQueryChunk as openThreadBrowserSidePanelTab,
  useWorktreeBaseBranchQuery as openThreadBrowserSidePanelTabWithPendingState,
} from "../../conversations/use-worktree-base-branch-query";
export {
  initWorktreeBranchSetupModalChunk as initThreadSidePanelTabsChunk,
} from "../../conversations/worktree-branch-setup-modal-runtime";
export {
  initReviewModeIconsRuntime,
  XcodeLicenseWarningIcon,
} from "../../icons/xcode-license-warning-icon";
export {
  ConversationalOnboardingTaskIcon as OnboardingStepView,
} from "../../onboarding/conversational-onboarding-task-icon";
export {
  SummaryPanelRow as openThreadBrowserSidePanelTabWithoutAnimation,
} from "../../utils/summary-panel-row";
export {
  primaryRuntimeInstallStatusMessage as registerForkedConversation,
} from "../../runtime/primary-runtime-install-status-message";
export {
  initReasoningEffortLabelChunk as normalizeFilesystemPathForDisplay,
  REASONING_EFFORT_LABELS as readProjectSignal,
} from "../../composer/reasoning-effort-label";
export {
  parseHttpsUrl as associateBranchWithConversation,
} from "../../conversations/parse-https-url";
export {
  useDictation as ThreadRowEnvironmentMeta,
} from "../../features/use-dictation/use-dictation";
export {
  cleanupDictationTranscript as SidebarRowHostLabel,
} from "../../utils/transcribe-audio";
export {
  isDeeplyDifferent as initSidebarRowPrimitivesChunk,
} from "../../utils/is-deeply-different";
export {
  normalizeThreadDetailLevel as ThreadRowTimestamp,
} from "../../utils/thread-detail-level";
export {
  initSettingsControlRowChunk as initSettingsRowRuntime,
} from "../../ui/settings-row";
export {
  initPullRequestStatusRuntimeChunk as initPullRequestStatusBadgeChunk,
} from "../../github/pull-request-status";
export {
  SplitDiffIcon as initOpenInBrowserRuntimeChunk,
} from "../../icons/split-diff-icon";
export {
  getMicrophoneInputStream as SidebarRowProjectLabel,
} from "../../utils/microphone-input";
export {
  BranchNameFieldHeader as getBrowserTabIdForSidePanelOpen,
} from "../../conversations/branch-name-field-header";
export {
  initGitApplyClipboardIconChunk as SidebarRowKeyboardScope,
} from "../../icons/git-apply-clipboard-icon";
export {
  initKeyboardLayoutMapChunk as ThreadRowHoverCard,
  setKeyboardLayoutMap as ThreadRowHoverActions,
} from "../../utils/keyboard-layout-map";
export {
  initUseHotkeyChunk as ThreadRowUnreadState,
  keyboardEventMatchesAccelerator as ThreadRow,
  useHotkey as ThreadRowMeta,
} from "../../utils/use-hotkey";
export {
  initReviewTabIconChunk as getThreadMcpAppSidePanelTabId,
} from "../../icons/review-tab-icon";
export {
  initBrowserProfileImportDialogLauncherChunk as initThreadRowRuntimeChunk,
  openBrowserProfileImportDialog as ThreadRowPinAction,
} from "../../browser/browser-profile-import-dialog-launcher";
export {
  cancelGitWorkflowAbortSignal as ThreadRowTitle,
} from "../../review/local-git-action-state";
export {
  initLocalGitActionsScopeChunk as SidebarListSection,
} from "../../review/local-git-actions-scope";
export {
  ActionPopoverPrimitives as openSessionSandboxSidePanel,
  initActionPopoverPrimitivesChunk as openThreadBranchReviewSidePanelTab,
} from "../../review/action-popover-primitives";
export {
  PullRequestButtonLabel as toggleThreadSidePanel,
} from "../../github/pull-request-button-label";
export {
  TwoPeopleShieldIcon as openThreadMcpAppSidePanelTab,
} from "../../icons/two-people-shield-icon";
export {
  NotePlusIcon as closeThreadMcpAppSidePanelTab,
} from "../../icons/note-plus-icon";
export {
  FolderOpenIcon as liveMcpAppFrameSignal,
} from "../../icons/folder-open-icon";
export {
  aggregateChangedFileSummary as SidebarSection,
  computeFileLineStats as SidebarTaskRowActions,
  initDiffSelectionSummaryChunk as SidebarRowUnreadDot,
} from "../../review/diff-selection-summary";

export {
  Ln as AutomationScheduleEditor,
  Vt as initFileDiffRuntime,
  Kt as RemoteConversationShell,
  kn as AutomationDraftActionForm,
  ou as FileDiff,
  su as initFileDiffSupportRuntime,
} from "../app-main-current-cgnc-bundle";

export {
  Bn as ArchiveMenuItem,
  Gl as projectGroupRepositoryDataSignal,
  Nn as SidebarRowActionButton,
  Nr as SidebarRowContextMenu,
  Oi as SidebarRowOverflowMenu,
  Pn as SidebarTaskRow,
  Qp as SidebarTaskRowTitle,
  Wc as primeBrowserTabTransfers,
  Wc as transferForkedConversationBrowserTabs,
  al as SidebarRowMenuSeparator,
  dl as SidebarRowDragHandle,
  ho as forkConversationMessages,
  hp as useComposedRefs,
  mo as initForkConversationMessagesChunk,
  nm as SidebarRowHoverCard,
  sl as SidebarRowShortcutScope,
  sm as SidebarRowContextMenuItem,
  ud as initExternalAgentImportStatusIconsChunk,
  xo as initForkConversationToastRuntime,
  zn as SidebarRowRuntime,
} from "../app-main-current-cgnc-bundle";
