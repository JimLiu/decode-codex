// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// Named app-main current runtime aliases recovered from the current producer.
// Flat boundary. Vendored app-main current runtime semantic alias barrel.
import { getThreadManagementToolHandlers } from "../../conversations/thread-management-tool-handlers";

export { GlobeIcon } from "../../icons/globe-icon";
export { AlertIcon, initAlertIconChunk } from "../../icons/alert-icon";
export { FolderIcon, initFolderIconChunk } from "../../icons/folder-icon";
export { ClockIcon, initClockIconChunk } from "../../icons/clock-icon";
export { CloudIcon, initCloudIconChunk } from "../../icons/cloud-icon";
export { DragIcon, initDragIconChunk } from "../../icons/drag-icon";
export { LaptopIcon, initLaptopIconChunk } from "../../icons/laptop-icon";
export { PinIcon, initPinIconChunk } from "../../icons/pin-icon";
export { UploadIcon } from "../../icons/upload-icon";
export { WarningIcon, initWarningIconChunk } from "../../icons/warning-icon";
export { FileSourceTab } from "../../review/file-source-tab";
export {
  initPullRequestStatusRuntimeChunk,
  PullRequestCheckStatusIcon,
  PullRequestStatusIcon,
} from "../../github/pull-request-status";
export {
  initPullRequestStatusTooltipChunk,
  PullRequestStatusTooltip,
} from "../../utils/pull-request-visual-state";
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
export { AppShellOverlayOutlet } from "../../app-shell/mcp-app-frame";
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
  initRequestUserInputAutoResolutionRuntime,
  requestUserInputAutoResolutionState,
} from "../../runtime/request-user-input-auto-resolution";
export {
  COMPLETE_CONVERSATIONAL_ONBOARDING_TASK_NAME,
  initConversationalOnboardingTaskOutputRuntime,
  initNavigateToCodexPageToolRuntime,
  initOpenInCodexToolRuntime,
  initRunAppActionInPrimaryWindowRuntime,
  NAVIGATE_TO_CODEX_PAGE_TOOL_NAME,
  OPEN_IN_CODEX_TOOL_NAME,
  runAppActionInPrimaryWindow,
} from "../../runtime/run-app-action-in-primary-window";
export {
  CONVERSATION_DETAIL_STEPS_COMMANDS,
  CONVERSATION_DETAIL_STEPS_PROSE,
  initConversationDetailModeRuntime,
  isConversationDetailModeProse,
  setConversationDetailMode,
  useConversationDetailMode,
} from "../../runtime/conversation-detail-runtime";
export {
  initSettingsControlRowChunk,
  SettingsControlRow,
} from "../../ui/settings-row";
export {
  filterProjectsForSettingsHost,
  getValidSettingsHostId,
  initSettingsHostContextRuntimeChunk,
  initSettingsHostProjectFilterChunk,
  setSettingsSelectedHostId,
  useSettingsHostContext,
} from "../../settings/settings-host-context";
export {
  BrowserOptionsMenuTriggerButton,
  initBrowserOptionsMenuTriggerButtonChunk,
} from "../../browser/browser-options-menu-trigger-button";
export {
  browserUseOriginStateQuery,
  initBrowserUseOriginStateQueriesChunk,
  useAddBrowserUseFileTransferOriginMutation,
  useAddBrowserUseOriginMutation,
  useBrowserUseFullCdpAccessEnabledMutation,
  useClearBrowserBrowsingDataMutation,
  useRemoveBrowserUseFileTransferOriginMutation,
  useRemoveBrowserUseOriginMutation,
  useUpdateBrowserUseApprovalModeMutation,
  useUpdateBrowserUseFileTransferApprovalModeMutation,
  useUpdateBrowserUseHistoryApprovalModeMutation,
  useUpdateBrowserUseOriginRulesMutation,
} from "../../browser/browser-use-origin-state-queries";
export {
  initBrowserUseSettingsVisibilityChunk,
  useBrowserUseSettingsVisibility,
} from "../../browser/browser-use-settings-visibility";
export {
  getBrowserSidebarTweaksState,
  initBrowserSidebarTweaksStateChunk,
} from "../../app-shell/thread-side-panel-active-signals";
export {
  initPullRequestFooterClassesChunk,
  pullRequestFooterClasses,
} from "../../composer/pull-request-footer-item/classes";
export { PullRequestFooterLabel } from "../../composer/pull-request-footer-item/label";
export {
  initPullRequestFooterLayoutChunk,
  PullRequestFooterRoot,
} from "../../composer/pull-request-footer-item/root";
export {
  initUseRecordingWaveformIconChunk,
  UseRecordingWaveformIcon,
} from "../../utils/use-recording-waveform";
export {
  initRegenerateIconChunk,
  RegenerateIcon,
} from "../../icons/regenerate-icon";
export { initStopIconChunk, StopIcon } from "../../icons/stop-icon";
export {
  CirclePlayIcon,
  initCirclePlayIconChunk,
} from "../../icons/play-circle";
export {
  ComposerContextButton,
  initComposerContextButtonChunk,
} from "../../features/use-dictation/context-button";
export {
  DictationButton,
  initDictationButtonChunk,
} from "../../features/use-dictation/dictation-button";
export {
  DictationRecordingFooter,
  initDictationRecordingFooterChunk,
} from "../../features/use-dictation/recording-footer";
export {
  initUseDictationRuntimeChunk,
  initUseDictationUiRuntimeChunk,
  useDictation,
  useDictationCore,
} from "../../features/use-dictation";
export {
  dictationStreamingUploadHeaderValue,
  initDictationTranscriptCleanupChunk,
  initDictationStreamingTranscriberRuntimeChunk,
  initDictationStreamingUploadHeaderChunk,
  initTranscribeAudioMultipartChunk,
  cleanupDictationTranscript,
  StreamingDictationTranscriber,
  transcribeAudio,
} from "../../utils/transcribe-audio";
export {
  getMicrophoneInputStream,
  initMicrophoneInputChunk,
} from "../../utils/microphone-input";
export {
  initUseRecordingWaveformChunk,
  useRecordingWaveform,
} from "../../utils/use-recording-waveform";
export {
  CHATGPT_ADMIN_BILLING_ADD_CREDITS_URL,
  CHATGPT_ADMIN_URL,
  CHATGPT_ADMIN_USAGE_LIMITS_URL,
  CODEX_AUTOMATIONS_DOCS_URL,
  CODEX_CHROME_EXTENSION_DOCS_URL,
  CODEX_CONFIG_DOCS_URL,
  CODEX_GLOBAL_AGENTS_GUIDANCE_DOCS_URL,
  CODEX_HOOKS_DOCS_URL,
  CODEX_IDE_DOCS_URL,
  CODEX_LOCAL_ENVIRONMENTS_DOCS_URL,
  CODEX_LOCKED_COMPUTER_USE_DOCS_URL,
  CODEX_MCP_DOCS_URL,
  CODEX_SANDBOXING_DOCS_URL,
  CODEX_SKILLS_DOCS_URL,
  CODEX_USAGE_CREDITS_MODAL_URL,
  CODEX_USAGE_URL,
  CHATGPT_PRICING_HASH_URL,
  CHATGPT_PRICING_URL,
  initCodexLinksChunk,
  OPENAI_APPS_SDK_DOCS_URL,
  OPENAI_PLUGINS_GITHUB_URL,
} from "../../utils/links-bd-mmkun-d";
export {
  browserProfileImportProfilesQuery,
  filterImportableBrowserProfiles,
  importBrowserProfile,
  initBrowserProfileImportQueryChunk,
} from "../../browser/browser-profile-import-query";
export { BROWSER_PROFILE_IMPORT_NUX_SEEN_STORAGE_KEY } from "../../browser/browser-profile-import-nux-state";
export { formatModelDisplayName } from "../../utils/format-model-display-name";
export {
  formatFallbackHookTitle,
  formatHookEventDescription,
  formatHookEventName,
  getHookPluginDisplayId,
  initHooksSettingsCopyChunk,
} from "../../settings/hooks-settings-copy";
export {
  buildHooksSettingsRoute,
  buildHooksSettingsRouteForHooks,
  initHooksSettingsRouteChunk,
  updateHooksSettingsSearchParams,
} from "../../settings/hooks-settings-route";
export { resolveSidePanelBrowserTabId } from "../../browser/browser-tab-id-resolution";
export { normalizeWorkspacePath } from "../../boundaries/src-l0hb/paths";
export { useCreateGitRepository } from "../../review/use-create-git-repository";
export {
  getMonthlySpendLimitUsage,
  hasCredits,
  hasRateLimitReached,
  isSpendControlBlockedByWorkspaceCap,
  isSpendControlNearWorkspaceCap,
  isWorkspaceCreditsExhausted,
  isWorkspaceSpendControlReached,
  shouldUseCreditsRateLimitDisplay,
} from "../../utils/rate-limit-status/account-status";
export {
  DAY_MINUTES,
  getLatestRateLimitResetAt,
  hasRateLimitWindow,
  initRateLimitStatusChunk,
  MONTH_MINUTES,
  parseUnixSeconds,
  remainingUsagePercent,
  secondsUntilUnixSeconds,
  selectRateLimitAlert,
  WEEK_MINUTES,
  YEAR_MINUTES,
} from "../../utils/rate-limit-status/windows";
export {
  formatDateAndTime,
  formatRateLimitWindowLabel,
  formatRemainingPercent,
  formatResetDate,
} from "../../utils/rate-limit-status/formatting";
export {
  formatAutomationScheduleSummary,
  formatScheduleConfigSummary,
  getAutomationAnalyticsProperties,
  getDefaultHeartbeatScheduleConfig,
  initAutomationScheduleConfigChunk,
  isAutomationScheduleConfigValid,
  serializeAutomationScheduleConfig,
} from "../../automation/automation-schedule";
export {
  areAutomationRecordsEqual,
  isAutomationRecordInSync,
  toAutomationRecordWithStatus,
} from "../../automations/automation-record-sync";
export { useImageAssetDownload } from "../../image-side-panel/use-image-asset-download";
export { openImagePreviewTab } from "../../image-side-panel/open-image-preview-tab";
export {
  applyBrowserCommentPopupShake,
  initBrowserCommentPopupShakeChunk,
} from "../../browser/browser-comment-popup-shake";
export { isCurrentLocationCodexPage } from "../../utils/is-codex-page-route";
export { remapDiffCommentsForHandoff } from "../../conversations/remap-diff-comments-for-handoff";
export { handleForkThread } from "../../conversations/thread-management-tool-handlers";
export { buildCodexAppToolNamespace } from "../../conversations/codex-app-tool-namespace";
const threadManagementToolHandlers = getThreadManagementToolHandlers();
export const handleCreateThread =
  threadManagementToolHandlers.handleCreateThread;
export const handleListProjects =
  threadManagementToolHandlers.handleListProjects;
export const handleListThreads = threadManagementToolHandlers.handleListThreads;
export const handleReadThread = threadManagementToolHandlers.handleReadThread;
export const handleSendMessageToThread =
  threadManagementToolHandlers.handleSendMessageToThread;
export const handleSetThreadArchived =
  threadManagementToolHandlers.handleSetThreadArchived;
export const handleSetThreadPinned =
  threadManagementToolHandlers.handleSetThreadPinned;
export const handleSetThreadTitle =
  threadManagementToolHandlers.handleSetThreadTitle;
export {
  CREATE_THREAD_TOOL_NAME,
  FORK_THREAD_TOOL_NAME,
  LIST_PROJECTS_TOOL_NAME,
  LIST_THREADS_TOOL_NAME,
  READ_THREAD_TOOL_NAME,
  SEND_MESSAGE_TO_THREAD_TOOL_NAME,
  SET_THREAD_ARCHIVED_TOOL_NAME,
  SET_THREAD_PINNED_TOOL_NAME,
  SET_THREAD_TITLE_TOOL_NAME,
} from "../../conversations/codex-app-tool-names";
export {
  openAutomationSuggestionTab,
  openAutomationTab,
} from "../../automations/automation-side-panel-tabs";
export {
  initThinkingShimmerChunk,
  ThinkingShimmer,
  ThinkingShimmerMessage,
} from "../../ui/thinking-shimmer";
export {
  DEFAULT_AUTOMATION_DRAFT,
  applyAutomationDraftModelDefaults,
  applyAutomationScheduleDraft,
  applyHeartbeatTargetThread,
  automationDirectiveResultAtom,
  automationDirectiveSeedAtom,
  createAutomationDraftFromAutomation,
  createAutomationDraftFromSeed,
  getAutomationDestinationOptions,
  getAutomationDraftDestination,
  getAutomationDraftRrule,
  initAutomationDraftRuntimeChunk,
  isAutomationDraftUsingDefaultCwd,
  isDefaultAutomationDraft,
  setAutomationDraftCwds,
  setAutomationDraftDestination,
  toAutomationCreatePayload,
  toAutomationUpdatePayload,
  validateAutomationDraft,
  formatAutomationNextRunLabel,
  initAutomationNextRunLabelChunk,
} from "../../automations/shared";
export {
  initPinnedThreadsQueryChunk,
  pinnedThreadsQuery,
} from "../../utils/pinned-threads-query";
export {
  initSetPinnedThreadRuntimeChunk,
  setPinnedThread,
  setPinnedThreadsOrder,
} from "../../utils/set-pinned-thread";
export { usePinnedThreadState } from "../../threads/thread-actions/pinning";
export {
  copyAppLink,
  copySessionId,
} from "../../threads/thread-actions/actions";
export {
  conversationalOnboardingWorkflowSignal,
  declineConversationalOnboardingTask,
  getConversationalOnboardingWorkflowState,
  initConversationalOnboardingWorkflowStateChunk,
  resetConversationalOnboardingWorkflowState,
  selectConversationalOnboardingRole,
  selectConversationalOnboardingTask,
  setConversationalOnboardingPermissionStatus,
} from "../../onboarding/conversational-onboarding-workflow-state";
export {
  conversationalOnboardingTaskActiveConversationSignal,
  conversationalOnboardingTaskIntroCompleteSignal,
  conversationalOnboardingTaskRequestVisibleSignal,
  conversationalOnboardingTaskScope,
  initConversationalOnboardingTaskScopeChunk,
  resetConversationalOnboardingTaskScope,
} from "../../onboarding/conversational-onboarding-task-scope";
export { conversationalOnboardingTaskDefinitions } from "../../onboarding/conversational-onboarding-task-definitions";
export {
  getConversationalOnboardingTaskOption,
  getConversationalOnboardingTaskPluginName,
  initConversationalOnboardingTaskRegistryChunk,
  isConversationalOnboardingMessagingTask,
} from "../../onboarding/conversational-onboarding-task-registry";
export {
  getAvailableConversationalOnboardingTasks,
  getConversationalOnboardingMessagingPluginNames,
  mapConversationalOnboardingTasksToAppPlugins,
} from "../../onboarding/conversational-onboarding-task-selection";
export {
  trackConversationalOnboardingExecutionCancelled,
  trackConversationalOnboardingExecutionCompletionMissing,
  trackConversationalOnboardingLifecycleCompleted,
  trackConversationalOnboardingLifecycleSkipped,
  trackConversationalOnboardingLifecycleStarted,
  trackConversationalOnboardingRoleSelected,
  trackConversationalOnboardingTaskSelected,
} from "../../onboarding/conversational-onboarding-analytics";
export { trackConversationalOnboardingAccessDenied } from "../../onboarding/conversational-onboarding-access-analytics";
export {
  appConnectionLinkQueryOptions,
  findConnectorAppByIdentifier,
  initConversationalOnboardingAppConnectionQueryChunk,
} from "../../connectors/apps-queries/onboarding-app-connection";
export { cancelActiveConversationalOnboardingForHost } from "../../onboarding/conversational-onboarding-cancel-for-host";
export {
  archiveConversationalOnboardingConversationsForHost,
  initConversationalOnboardingControllerChunk,
} from "../../onboarding/conversational-onboarding-controller";
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
  initMessageSquareIconChunk,
  MessageSquareIcon,
} from "../../composer/message-square-icon";
export {
  initPopoverAttachmentPillChunk,
  PopoverAttachmentPill,
} from "../../composer/popover-attachment-pill";
export {
  CommentAttachmentPill,
  initCommentAttachmentPillChunk,
} from "../../composer/comment-attachment-pill";
export {
  initSelectedTextAttachmentPillChunk,
  SelectedTextAttachmentPill,
  SelectedTextTooltip,
} from "../../composer/selected-text-attachment-pill";
export {
  ExternalSiteIcon,
  initExternalSiteIconChunk,
} from "../../icons/external-site-icon";
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
export {
  initMessageOrStringHelpersChunk,
  renderMessageOrString,
} from "../../composer/render-message-or-string";
export { formatMessageOrString } from "../../composer/format-message-or-string";
export {
  buildCreateConversationParams,
  initBuildCreateConversationParamsChunk,
} from "../../composer/build-create-conversation-params";
export {
  initOpenConfigInEditorChunk,
  openConfigInEditor,
} from "../../composer/open-config-in-editor";
export {
  initUserSavedConfigQueryChunk,
  userSavedConfigQueryOptions,
} from "../../config/user-saved-config-query";
export {
  initOpenConfigTomlButtonChunk,
  OpenConfigTomlButton,
} from "../../composer/open-config-toml-button";
export {
  DEFAULT_MODEL,
  initModelsAndReasoningEffortsChunk,
  isReasoningEffort,
} from "../../utils/models-and-reasoning-efforts";
export {
  enabledReasoningEffortsSetSignal,
  initEnabledReasoningEffortsChunk,
  setEnabledReasoningEffort,
} from "../../composer/enabled-reasoning-efforts";
export {
  initModelFilterConfigChunk,
  initModelListQueryChunk,
  isModelListQueryReady,
  modelFilterConfigSignal,
  parseModelFilterConfig,
  useModelFilterConfig,
  useModelListQuery,
} from "../../utils/model-queries";
export {
  findModelByName,
  initModelSettingsCoreChunk,
  SELECTABLE_REASONING_EFFORTS,
} from "../../composer/model-settings-core";
export { useModelSettings } from "../../composer/use-resolved-model-settings";
export {
  initUseModelSettingsControllerChunk,
  useModelSettingsController,
} from "../../composer/use-model-settings-controller";
export {
  initUseServiceTierChunk,
  useServiceTier,
} from "../../composer/use-service-tier";
export {
  initUseServiceTierSettingsChunk,
  useServiceTierSettings,
} from "../../composer/use-service-tier-settings";
export {
  findAmbientSuggestionApps,
  hasUnknownAmbientSuggestionAppIcon,
  initAmbientSuggestionAppsChunk,
  useAmbientSuggestionApps,
} from "../../connectors/ambient-suggestion-apps";
export {
  DocumentSearchIcon,
  initDocumentSearchIconChunk,
} from "../../icons/document-search-icon";
export {
  initWindowsTabsOpenSchemaChunk,
  windowsTabsOpenActionSchema,
} from "../../runtime/windows-tabs-open-schema";
export {
  areEquivalentLocales,
  DEFAULT_LOCALE,
  getLocaleLanguageDisplayName,
  getSupportedLocales,
  isEnglishLocale,
  loadLocaleMessages,
  normalizeLocale,
  resolveLocale,
} from "../../i18n/locale-resolver";
export { initPrimaryRuntimeInstallStatusMessageChunk } from "../../runtime/primary-runtime-install-status-message";
export {
  aboveComposerSuggestionDismissalsAtom,
  composerPromptHistorySignal,
  initComposerInteractionStateChunk,
  skipFullAccessConfirmSignal,
} from "../../composer/composer-interaction-state";
export {
  initCollaborationModeQueriesChunk,
  selectedHostCollaborationModesQuerySignal,
} from "../../collaboration/collaboration-mode-queries";
export {
  initUseCollaborationModeChunk,
  useCollaborationMode,
} from "../../collaboration/use-collaboration-mode";
export {
  initPermissionProfilesQueryChunk,
  selectAvailablePermissionProfiles,
} from "../../utils/use-permissions-mode/permission-profiles";
export {
  canUseWorkspaceWriteOnRequest,
  getAvailablePermissionModeState,
  getDetailLevelDefaultAgentMode,
  permissionProfileIdToAgentMode,
} from "../../utils/use-permissions-mode/mode-availability";
export {
  canAgentModeUseOverrides,
  getDefaultWorkspaceWriteMode,
  initPermissionModeSelectionChunk,
  resolveNextFallbackAgentMode,
  resolveNonFullAccessAgentMode,
  selectFallbackAgentMode,
  shouldWaitForPermissionModeSelection,
} from "../../utils/use-permissions-mode/mode-selection";
export { usePermissionsConfigData } from "../../utils/use-permissions-mode/config-data";
export {
  initUsePermissionsModeChunk,
  usePermissionsMode,
} from "../../utils/use-permissions-mode/use-permissions-mode";
export { usePreferredNonFullAccessMode } from "../../utils/use-permissions-mode/preferred-mode";
export {
  resetDraftPermissionModeState,
  setThreadPreferredNonFullAccessModeFromDefault,
} from "../../utils/use-permissions-mode/state";
export { setThreadArchivedTool } from "../../threads/thread-dynamic-tools/archive-thread-tool";
export {
  initThreadDynamicToolsChunk,
  readThreadTurnsTool,
} from "../../threads/thread-dynamic-tools/read-thread-turns-tool";
export {
  convertUnistTest,
  initMdastToMarkdownRuntimeChunk,
  initUnistUtilIsRuntimeChunk,
  initUnistUtilVisitParentsRuntimeChunk,
  mdastToMarkdownDefaultHandlers,
  visitUnistParents,
} from "../markdown-ast-runtime";
export * from "./semantic-legacy-aliases";
