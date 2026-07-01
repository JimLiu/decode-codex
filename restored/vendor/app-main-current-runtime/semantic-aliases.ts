// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// Named app-main current runtime aliases recovered from the current producer.
export { GlobeIcon } from "../../icons/globe-icon";
export { FolderIcon, initFolderIconChunk } from "../../icons/folder-icon";
export { ClockIcon } from "../../icons/clock-icon";
export { CloudIcon, initCloudIconChunk } from "../../icons/cloud-icon";
export { DragIcon } from "../../icons/drag-icon";
export { LaptopIcon } from "../../icons/laptop-icon";
export { WarningIcon } from "../../icons/warning-icon";
export { FileSourceTab } from "../../review/file-source-tab";
export { PullRequestStatusTooltip } from "../../utils/pull-request-visual-state";
export {
  FastServiceTierIcon,
  initFastServiceTierIcon,
  initUltraFastServiceTierIcon,
  UltraFastServiceTierIcon,
} from "../../composer/service-tier-speed-icon";
export {
  hasSeenAppgenPublicationTermsDisclosureSignal,
  initAppgenPublicationTermsDisclosureRuntime,
} from "../../appgen/appgen-publication-terms-disclosure";
export { composeRefs } from "../../utils/compose-refs";
export { QueryClientProvider } from "../../runtime/query-client/react-query-context";
export { useQueries } from "../../runtime/query-client/react-query-hooks";
export { createToolErrorResult } from "../../runtime/tool-result-runtime";
export { OpenAiMcpCapabilityView } from "../../review/openai-mcp-capability-view";
export {
  useCloudEnvironmentsQuery,
  useReferralInviteMutation,
} from "../../runtime/codex-api";
export { LocalConversationGitActions } from "../../conversations/local-conversation-git-actions";
export {
  browserTabIdForConversation,
  deriveBrowserConversationId,
  getBrowserTabIdForPanelTab,
  isUncPath,
  isWindowsStyleAbsolutePath,
  terminalSessionSnapshotStore,
} from "../../conversations/fork-conversation-panel-state-deps";
export { serializeError } from "../../runtime/app-logger";
export {
  initSettingsControlRowChunk,
  SettingsControlRow,
} from "../../ui/settings-row";
export {
  CHATGPT_ADMIN_BILLING_ADD_CREDITS_URL,
  CHATGPT_ADMIN_URL,
  CHATGPT_ADMIN_USAGE_LIMITS_URL,
  CHATGPT_PRICING_HASH_URL,
  CHATGPT_PRICING_URL,
  initCodexLinksChunk,
  OPENAI_APPS_SDK_DOCS_URL,
} from "../../utils/links-bd-mmkun-d";
export { resolveSidePanelBrowserTabId } from "../../browser/browser-tab-id-resolution";
export { normalizeWorkspacePath } from "../../boundaries/src-l0hb/paths";
export { pinnedThreadsQuery } from "../../utils/pinned-threads-query";
export { setPinnedThreadsOrder } from "../../utils/set-pinned-thread";
export {
  declineConversationalOnboardingTask,
  getConversationalOnboardingWorkflowState,
  initConversationalOnboardingWorkflowStateChunk,
  resetConversationalOnboardingWorkflowState,
  selectConversationalOnboardingTask,
  setConversationalOnboardingPermissionStatus,
} from "../../onboarding/conversational-onboarding-workflow-state";
export { AutomationSchedulePicker } from "../../automations/automation-schedule-picker";
export {
  initMeasuredTextCollapseRuntimeChunk,
  useMeasuredTextCollapse,
} from "../../utils/use-measured-text-collapse";
export {
  getCommandExecutionText,
  initBrowserCommentAttachmentRuntime,
  initCommandExecutionTextRuntime,
} from "../../runtime/window-chrome-runtime";
export {
  initResolvedHighlightThemesChunk,
  initSharedHighlightThemeRegistryChunk,
  sharedHighlightThemeRegistry,
} from "../../utils/shared-highlight-themes";
export {
  composeEventHandlers,
  initComposeEventHandlersRuntime,
} from "../radix-event-helpers";
export { isComposerDictationTarget } from "../../composer/composer-dictation-focus";
export { initPrimaryRuntimeInstallStatusMessageChunk } from "../../runtime/primary-runtime-install-status-message";

export {
  $l as SidebarSection,
  Bn as ArchiveMenuItem,
  Cl as toggleThreadSidePanel,
  Ff as initThreadRowLayoutRuntimeChunk,
  Gd as ThreadRow,
  Gl as projectGroupRepositoryDataSignal,
  Hd as initThreadRowRuntimeChunk,
  Jd as ThreadRowHoverCard,
  Jl as ThreadRowTitle,
  Kd as ThreadRowMeta,
  Ac as areArraysEqual,
  Mr as initSidebarRowPrimitivesChunk,
  Nn as SidebarRowActionButton,
  Nr as SidebarRowContextMenu,
  Oi as SidebarRowOverflowMenu,
  Pf as initSidebarTaskRowRuntimeChunk,
  Pn as SidebarTaskRow,
  Ql as SidebarTaskRowActions,
  Qp as SidebarTaskRowTitle,
  Sl as initPullRequestStatusBadgeChunk,
  To as registerForkedConversation,
  Ud as ThreadRowPinAction,
  Wc as primeBrowserTabTransfers,
  Wc as transferForkedConversationBrowserTabs,
  Wd as ThreadRowUnreadState,
  Wl as SidebarListSection,
  Yd as ThreadRowHoverActions,
  Zu as AppShellOverlayOutlet,
  _l as openThreadBrowserSidePanelTabWithPendingState,
  al as SidebarRowMenuSeparator,
  bl as openThreadReviewSidePanelTab,
  cf as openThreadMcpAppSidePanelTab,
  cm as ThreadRowEnvironmentMeta,
  cp as ThreadRowTimestamp,
  dl as SidebarRowDragHandle,
  el as initOpenInBrowserRuntimeChunk,
  eu as SidebarRowUnreadDot,
  fl as getBrowserTabIdForSidePanelOpen,
  fr as normalizeFilesystemPathForDisplay,
  gl as openThreadBrowserSidePanelTab,
  gm as SidebarRowProjectLabel,
  go as associateBranchWithConversation,
  hl as openThreadBranchReviewSidePanelTab,
  hm as SidebarRowHostLabel,
  ho as forkConversationMessages,
  hp as useComposedRefs,
  ki as SidebarRowIcon,
  ml as openSessionSandboxSidePanel,
  mo as initForkConversationMessagesChunk,
  nf as liveMcpAppFrameSignal,
  nm as SidebarRowHoverCard,
  of as closeThreadMcpAppSidePanelTab,
  pl as initThreadSidePanelTabsChunk,
  pr as readProjectSignal,
  rl as SidebarRowKeyboardScope,
  sf as getThreadMcpAppSidePanelTabId,
  sl as SidebarRowShortcutScope,
  sm as SidebarRowContextMenuItem,
  ud as initExternalAgentImportStatusIconsChunk,
  vl as openThreadBrowserSidePanelTabWithoutAnimation,
  xl as openThreadTimelineSidePanel,
  xo as initForkConversationToastRuntime,
  yl as openThreadLastTurnReviewSidePanelTab,
  zn as SidebarRowRuntime,
} from "../app-main-current-cgnc-bundle";
