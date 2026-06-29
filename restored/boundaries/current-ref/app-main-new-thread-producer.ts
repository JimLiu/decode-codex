// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~bj5tp28r-Dcs9S3fj.js
// Explicit barrel for the bj5 app-main/new-thread producer aliases that have
// been split into semantic runtime modules.
import {
  c as getStatsigClientRaw,
  o as readStatsigGateValue,
} from "@statsig/js-client";

type StatsigExperimentClient = {
  getExperiment: (
    experimentName: string,
    options?: unknown,
  ) => {
    get: <TValue>(field: string, fallback: TValue) => TValue;
  };
};

export {
  appHostServices,
  connectAppHostServices,
  createPersistentSignal,
  getCachedConversationTurns,
  initAppHostServicesRuntimeChunk,
  initPersistentSignalRuntime,
  initProductEventRuntime,
  onboardingWizardAction,
} from "../../runtime/app-host-services-runtime";

export { THREAD_SIDE_PANEL_TAB } from "../../app-shell/thread-side-panel-tabs";

export {
  getGlobalStateValue,
  globalStateQueryRequestSignal,
  globalStateQuerySignal,
  initGlobalStateQueryRuntime,
  setGlobalStateValue,
} from "../../runtime/global-state-runtime";

export {
  bt as resumeStateSignal,
  conversationPermissionConfigSignal,
  Di as conversationTurnsByIdSignal,
  ft as pendingRequestSignal,
  hr as conversationCwdByIdSignal,
  ii as conversationIdsByHostIdSignal,
  Ln as usageSettingsSignal,
  lt as latestTurnIdSignal,
  latestTurnByConversationIdSignal,
  latestTurnByConversationIdSignal as conversationTitleByIdSignal,
  registeredAppServerHostIdsSignal,
  ut as latestTurnStatusSignal,
  workspaceRootOptionsQuery,
} from "../thread-context-inputs.facade";

export {
  isBrowserCommentAttachment,
  sendAppServerRequest,
} from "../use-host-config.facade";

export {
  featureGateSignal,
  initFeatureGateSignalRuntime,
  initStatsigFeatureGateRuntime,
  useStatsigGate,
  useStatsigGate as useFeatureGateValue,
  useStatsigLoading,
  useStatsigLayer,
} from "../../runtime/feature-gate-runtime";

export {
  createGitRootQueryOptions,
  createHostQueryOptions,
  getHostCacheKey,
  initConversationBranchOverrideRuntime,
  initGitRootQueryRuntime,
  setConversationBranchOverride,
  updateGitMetadataCache,
  useGitOperationQuery,
  useGlobalSettingValue,
} from "../../runtime/git-branch-switcher-runtime";

export {
  conversationCollaborationModeSignal,
  conversationHostIdSignal,
  hasConversationSignal,
  initConversationStateRuntime,
} from "../../runtime/conversation-state-runtime";

export {
  LAYERED_CONFIG_RESPONSE_QUERY_KEY as layeredConfigResponseQueryKey,
  MCP_SERVER_STATUS_QUERY_KEY as mcpServersStatusQueryKey,
  MCP_SERVERS_CONFIG_QUERY_KEY as mcpServerConfigQueryKey,
  USER_CONFIG_QUERY_KEY,
  userConfigQueryOptions,
} from "../../config/config-queries";

export {
  configRequirementsByHostAuthSignal,
  initOsInfoRuntimeChunk,
  osInfoQuerySignal,
  readHostConfigForHost,
  useOsInfoQuery,
} from "../../features/windows-sandbox";

export {
  initInvalidateQueriesAndBroadcastChunk,
  invalidateQueriesAndBroadcast,
} from "../../utils/invalidate-queries-and-broadcast";

export {
  createThreadHandoffOperationId,
  initThreadHandoffOperationIdsChunk,
  initThreadHandoffOperationUpdateChunk,
  produceThreadHandoffOperationUpdate,
} from "../../app-shell/thread-handoff-operations";

export { codexRequest, initCodexRequestRuntime } from "../../runtime/request";

export {
  initGlobalSettingsRuntime,
  persistGlobalSettingValue,
  primeGlobalSettingValue,
  readGlobalSetting,
  setGlobalSettingValue,
} from "../../runtime/project-hover-card-runtime";

export { currentRouteHostIdSignal } from "../../runtime/window-chrome-runtime";

export {
  getHostConfigKey,
  hostConfigByIdSignal,
  initHostConfigRuntime,
  initLocalHostConstantsRuntime,
  useHostConfigById,
} from "../../runtime/host-config-runtime";

export {
  initMotionSignalRuntime,
  initReducedMotionPreference,
  reducedMotionPreferenceSignal,
} from "../../utils/motion-signal-runtime";

export {
  formatShellCommand,
  initCommandMarkdownRuntime,
} from "../../runtime/conversation-markdown-runtime";

export {
  initLocalConversationRouteRuntime as initRouteScopeRuntimeChunk,
  localConversationRouteScope as RouteScope,
} from "../../conversations/local-conversation-route-runtime";

export { terminalSessionSnapshotStore } from "../../conversations/fork-conversation-panel-state-deps";

export { sortBy } from "../../utils/sort-by";

export {
  useResolvedThemeVariant,
  useThemeVariantPreference,
} from "../../utils/use-resolved-theme-variant";

export {
  initWindowZoomContext as initWindowZoomRuntimeChunk,
  useWindowZoom,
} from "../../utils/window-zoom-context";

export {
  collectTurnFileArtifacts,
  isFileReferencePath,
  isResourcePathInsideProjectlessOutput,
  mapTurnStatusToOutputStatus,
  normalizeArtifactPathKey,
  resolveWorkspacePathFromCwd,
} from "../../conversations/output-artifact-runtime";

export {
  getReviewCommentAttachmentKeyValue,
  initPullRequestReviewCommentRuntime,
} from "../../conversations/pull-request-review-comment-runtime";

export {
  pullRequestActionEvent,
  pullRequestKindActionEvent,
  pullRequestViewedFromSidePanelEvent,
} from "../../runtime/pull-request-actions-runtime";

export { openFileOutcomeEvent } from "../../runtime/publication-terms-runtime";

export { encodeBase64Bytes, initBase64RuntimeChunk } from "../../utils/base64";

export {
  ArtifactAnnotationStartSource,
  ArtifactAnnotationSubmitMode,
  ArtifactAnnotationSubmitSource,
  ArtifactKind,
  artifactAnnotationCanceledEvent,
  artifactAnnotationSavedEvent,
  artifactAnnotationStartedEvent,
  artifactAnnotationSubmittedEvent,
  initArtifactAnalyticsEventDescriptors,
  initProductLoggerRuntime,
  logProductEvent,
} from "../../runtime/artifact-analytics-runtime";

export {
  ___productLoggerT as productLoggerAction,
  __productLoggerR as productLoggerSignal,
  _productLoggerJn as codexReferralInviteModalBackendErrorType,
  addCreditsQuantitySelectedEvent,
  autoTopUpActionEvent,
  codexThreadSwitchCompletedEvent,
  codexThreadSwitchKind,
  creditCheckoutOpenedEvent,
  creditPurchaseModalOpenedEvent,
  productLoggerQn as codexReferralInviteModalAction,
  productLoggerXn as codexReferralInviteModalEvent,
  productLoggerYn as codexReferralInviteModalErrorResponsibility,
} from "../../generated/product-logger";

export { useLocation, useNavigate } from "../../vendor/react-router";

export { Tooltip, initTooltipRuntimeChunk } from "../../ui/tooltip-b";

export { Button, initButtonComponentPrimitives } from "../../ui/button";

export { DialogContent, DialogPortal } from "../../ui/dialog-layout";

export {
  DismissableLayer,
  FocusScope,
  Portal,
  Presence,
  RemoveScroll,
} from "../../vendor/radix-primitives";

export {
  createContextScope,
  createWarningContext,
  hideOthers,
  useControllableState,
  useStableId,
} from "../../vendor/radix-helpers";

export { Spinner, initSpinnerComponent } from "../../ui/spinner";

export { initXIcon, XIcon } from "../../icons/x-icon";

export { CheckCircleIcon } from "../../icons/check-circle-icon";

export { ChevronRightIcon } from "../../icons/chevron-right-icon";

export {
  appgenPublicationTermsDisclosureSignal,
  getAppgenAnnouncementAudienceForAccount,
  hasSeenAppgenPublicationTermsDisclosure,
  hasSeenAppgenPublicationTermsDisclosureSignal,
  initAppgenPublicationTermsDisclosureRuntime,
  markAppgenPublicationTermsDisclosureSeen,
} from "../../appgen/appgen-announcement-modal";

export {
  initDiffPathRuntimeChunk,
  NULL_DIFF_PATH,
} from "../../utils/parse-diff";

export {
  parseDirectivesD as buildSentryErrorEvent,
  parseDirectivesE as mergeDirectiveSentryData,
  parseDirectivesK as registerDirectiveSentryCapture,
} from "../../utils/parse-directives";

export { baseIteratee } from "../../utils/markdown-to-search-text";

export { dismissTooltips } from "../../utils/tooltip-dismiss";

export {
  initUseStableCallback as initStableCallbackRuntimeChunk,
  useStableCallback,
} from "../../utils/use-stable-callback";

export { composeEventHandlers } from "../../vendor/radix-event-helpers";

export {
  createSlotComponent,
  normalizeFilesystemPathForDisplay,
  Primitive,
} from "../../vendor/app-main-current-runtime";

export {
  composeRefs,
  initComposeRefsChunk as initComposeRefsRuntime,
} from "../../utils/compose-refs";

export { arrayMove } from "../../vendor/dnd-kit-sortable";

export {
  initPathHelpersRuntime as initPathRuntimeChunk,
  joinPath,
} from "../../runtime/path-helpers-runtime";

export { getPathBasename } from "../../runtime/path-basename-runtime";

export { toastSignal } from "../../runtime/toast-runtime";

export { normalizeFilesystemPath } from "../rpc.facade";

export { isWindowsStyleAbsolutePath } from "../../conversations/fork-conversation-panel-state-deps";

export { isPathInCodexWorktree } from "../../vendor/worktree-path-runtime";

export { openInBrowserFromEvent } from "../../runtime/resource-open-runtime";

export { useStatsigClient } from "@statsig/react-bindings";

export {
  createLocalConversationRouteTarget as createLocalConversationRoute,
  getLocalConversationPath as routeToLocalConversation,
} from "../../conversations/local-conversation-route-runtime";

export { initNewThreadRouteContextChunk } from "../../composer/new-thread-route-context";

export { createConnectionProjectGroup } from "../../vendor/pull-request-thread-actions-runtime";

export {
  isArtifactAnnotationCommentAttachment,
  isPdfCommentAttachment,
  moveThreadIdBefore,
} from "../src-l0hb/runtime-helpers";

export { createLocalConversationPath } from "../src-l0hb/paths";

export {
  getSidebarThreadRoutePath,
  makeSidebarThreadKey as createSidebarThreadKey,
} from "../../threads/sidebar-thread-keys";

export {
  projectlessSidebarChatsFirstSignal as sidebarShowChatsFirstSignal,
  sidebarCollapsedGroupsSignal as sidebarCollapsedProjectGroupsSignal,
  sidebarSectionCollapsedSignal,
  sidebarThreadSortKeySignal as threadSortModeSignal,
} from "../../threads/sidebar-signals";

export {
  flatProjectSidebarModeSignal as sidebarInitialModeSignal,
  flatProjectSidebarPreferencesSignal as sidebarSortPreferenceSignal,
  flatProjectSidebarProjectSortModeSignal as projectSortModeSignal,
  initFlatProjectSidebarStateChunk as initSidebarSettingsRuntimeChunk,
  sidebarChatOrderSignal as sidebarManualThreadOrderSignal,
} from "../../sidebar/flat-project-sidebar-state";

export const getStatsigClient = getStatsigClientRaw;

export { readStatsigGateValue };

export function getStatsigExperiment(
  client: StatsigExperimentClient,
  experimentName: string,
  options?: unknown,
): ReturnType<StatsigExperimentClient["getExperiment"]> {
  return client.getExperiment(experimentName, options);
}

export function initAppServerRequestRuntime(): void {}

export function initConfigQueriesRuntime(): void {}

export function initRendererSentryDirectiveDataRuntimeChunk(): void {}

export function initReactRouterRuntimeChunk(): void {}

export function initSystemThemeVariantRuntimeChunk(): void {}

export function initTerminalSessionSnapshotStoreChunk(): void {}

export function initAriaHiddenRuntime(): void {}

export function initArchiveConversationRuntimeChunk(): void {}

export function initArchiveDialogRuntimeChunk(): void {}

export function initComposedRefsRuntime(): void {}

export function initComposerFooterStylesChunk(): void {}

export function initDialogDescriptionRuntimeChunk(): void {}

export function initDialogDismissableLayerRuntime(): void {}

export function initDialogFocusRuntime(): void {}

export function initDialogRuntimeChunk(): void {}

export function initDialogStyleRuntime(): void {}

export function initDialogStyleRuntimeChunk(): void {}

export function initDialogWarningsRuntime(): void {}

export function initDialogTriggerRuntimeChunk(): void {}

export function initDialogWarningsRuntimeChunk(): void {}

export function initDismissableLayerRuntime(): void {}

export function initFileTreeContextMenuRuntimeChunk(): void {}

export function initFocusScopeRuntime(): void {}

export function initForkConversationRequestRuntimeChunk(): void {}

export function initGlobalStateReaderRuntimeChunk(): void {}

export function initLatestTurnStatusRuntime(): void {}

export function initLocalEnvironmentQueryRuntimeChunk(): void {}

export function initPortalRuntime(): void {}

export function initPrimitiveRuntime(): void {}

export function initProjectGroupsRuntimeChunk(): void {}

export function initRecentConversationSortRuntimeChunk(): void {}

export function initReferralInviteAnalyticsRuntimeChunk(): void {}

export function initSidebarRecencyRuntimeChunk(): void {}

export function initSidebarTaskKeyRuntimeChunk(): void {}

export function initUsageSettingsAccessRuntimeChunk(): void {}

export function initUsageSettingsSignalChunk(): void {}

export function initWarningContextRuntime(): void {}
