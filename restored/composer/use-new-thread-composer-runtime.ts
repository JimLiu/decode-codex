// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// Runtime setup for NewThreadComposerBody: scope, execution target, rate-limit
// banners, background-thread rows, composer mode, and initial prefill effects.
import {
  useCallback,
  useEffect,
  useEffectEvent,
  useMemo,
  useState,
} from "react";

import {
  // --- core scope / editor / atom access ---
  appConnectClaimedFollowUpQuery,
  clsx,
  composerCwdOverrideAtom,
  composerDropTargetPortalContext,
  composerEnterBehaviorFamily,
  composerModeAtom,
  composerModeForScopeAtom,
  composerPrefillCwdAtom,
  composerScope,
  useAtomFamily,
  useAtomValue,
  useComposerController,
  useComposerLog,
  useNavigate,
  useProductLogger,
  useQueryClient,
  useRegisterCommand,
  useScopeStore,
  // --- conversation identity / execution target ---
  buildComposerAnalyticsId,
  composerCommentAttachmentsAtom,
  composerImageCommentDraftAtom,
  composerImageInputsAtom,
  composerMcpAppModelContextAtom,
  composerPastedTextAttachmentsAtom,
  composerSelectedTextAttachmentsAtom,
  extensionPageSelectionAtom,
  composerPullRequestChecksAtom,
  composerPullRequestMergeConflictAtom,
  composerFileAttachmentsAtom,
  composerAddedFilesAtom,
  hostConfigForHostId,
  isBackgroundThreadHydratedAtom,
  isFollowUpHydratedAtom,
  isHotkeyWindow,
  isRemoteConnection,
  localExecutionTargetForScope,
  openHotkeyWindowThread,
  openThreadPath,
  openTaskPath,
  resolveComposerExecutionTarget,
  resolveLocalExecutionRemoteHostId,
  useActiveConversationId,
  useActiveWorkspaceRoots,
  useAgentModeSettings,
  useCloudTaskCreation,
  useCloudTaskFollowUp,
  useFollowUpToConversation,
  useHostConfig,
  useLocation,
  useMcpManagerForHost,
  useRemoteConnections,
  useRemoteConnectivityStates,
  useSelectedRemoteProject,
  // --- attachments / context ---
  buildLocalContextIdeSnapshot,
  useAppshotCaptureTray,
  useComposerAttachmentActions,
  useComposerAttachmentSetters,
  useComposerFileAssetAttachment,
  useComposerMessageEditing,
  usePastedTextAttachmentHandlers,
  usePendingFileAttachments,
  removeAllImageComments,
  splitCommentAttachmentsBySurface,
  // --- suggestions / mentions ---
  ComposerContextFilesWatcher,
  useAtMentionAutocomplete,
  useComposerContextActions,
  useMentionActivationHandler,
  useSkillMentionAutocomplete,
  // --- submit orchestration ---
  buildCloudSubmitTask,
  buildSideChatDisplayTitle,
  clearGoalPromptAtomsRunner,
  formatComposerSubmitError,
  formatWorktreeSubmitError,
  parseGoalSubmit,
  performComposerSubmit,
  reportComposerSubmitError,
  resolveCloudTaskType,
  sendQueuedSteerMessage,
  splitCommentsForSubmit,
  submitDirectComment,
  useComposerPromptHistory,
  useComposerPrompts,
  // --- misc host / analytics ---
  buildContextualLeadingItems,
  hasSeenMultiAgentComposerBannerRunner,
  logComposerMessageSent,
  openComposerReferencedFile,
  requiredHooksFilter,
  saveThreadStartTarget,
  setComposerScopedField,
  showComposerToast,
  // --- rate-limit / banners / status ---
  useComposerRateLimitBanner,
  useMessageLimitEvent,
  // --- worktree / voice / layout ---
  useComposerDictation,
  useComposerLayoutMode,
  useSingleLineComposerMeasure,
  useStopTurnConfirmation,
  useWorktreeGitContext,
  registerComposerEnterKeymap,
  registerComposerEscapeHandler,
  registerComposerKeymap,
  registerSidebarToggleShortcut,
  isComposerDictationTarget,
  hasActiveMentionMenu,
  resolveEscapeAction,
  resolveComposerKeyAction,
  // --- background threads ---
  canStopBackgroundThread,
  collectStoppableBackgroundThreads,
  useBackgroundThreadRows,
  useBackgroundThreadTurnMap,
  currentTurnKeyForConversation,
  useInterruptThread,
  // --- composer mode / availability ---
  buildComposerModeAvailability,
  useComposerMode,
  useImageInputSupport,
  useIsQueueingEnabled,
  useWindowsSandboxSetup,
  useWindowsSandboxRequirement,
  // --- entrypoints / prefill ---
  buildNewThreadClientId,
  resolveComposerCwd,
  resolveComposerWorkspaceRoot,
  useProjectAssignment,
  useResolvedConfigPath,
  useSharedComposerPrefill,
  // --- additional deep internals ---
  cancelThreadGoal,
  dismissMessageLimitBanner,
  hydrateBackgroundThreads,
  isPromptDraftTextValue,
  openSideChat,
  projectAssignmentsQuery,
  resolveComposerMode,
  resolveCurrentRemoteCwd,
  resumeThreadGoal,
  submitFollowUpApproval,
  submitLocalApproval,
  useCloudAccess,
  useCodexHome,
  useComposerIntl,
  useComposerPlaceholder,
  useConversationPending,
  useGitRepoRoot,
  useHasPendingApproval,
  useIsElectronPlatform,
  useIsWorkspaceRequired,
  useIsWorktreePickerEnabled,
  useIsWorktreeSnapshotsEnabled,
  useOpenFileMutation,
  useQueuedFollowUps,
  useResolvedPendingApproval,
  // --- sub-components ---
  Composer,
  AddContextButton,
  AboveComposerSuggestionActions,
  AnnouncementBanner,
  AppshotCaptureControls,
  BackgroundSubagentsPanel,
  BlockedSubmitDialog,
  CloudModeIndicator,
  ComposerAttachmentPills,
  ComposerDropOverlay,
  ComposerFooterControls,
  ComposerInputField,
  ComposerStatusMenuRow,
  FirstBlockRateLimitBanner,
  GoalReplacementConfirmationDialog,
  GoalResumePromptDialog,
  HooksNeedingReviewBanner,
  PluginContextLoader,
  RateLimitBanner,
  SelectedTextAction,
  SelectedTextPortal,
  SideChatPrompt,
  ThreadGoalBanner,
  WindowsSandboxError,
  WindowsSandboxSetupBanner,
} from "../boundaries/onboarding-commons-externals.facade";

const EMPTY_ARRAY: never[] = [];

export function useNewThreadComposerRuntime(params: Record<string, any>) {
  const {
    activeCollaborationMode,
    browserConversationId,
    composerModeAvailability,
    defaultCwd,
    externalFooterVariant,
    homeRunLocationRemoteProject,
    isResponseInProgress,
    showExternalFooter,
  } = params;

  // ── scope, loggers, and follow-up identity ──────────────────────────────
  const scope = useScopeStore(composerScope);
  const productLogger = useProductLogger();
  const followUp = useAtomValue(isFollowUpHydratedAtom);
  const queryClient = useQueryClient();
  const dropTargetPortalTarget = useComposerLog(
    composerDropTargetPortalContext,
  );
  const createCloudTask = useCloudTaskCreation();
  const followUpToCloudTask = useCloudTaskFollowUp();
  const isSideConversation =
    scope.value.kind === "local" && scope.value.placement === "side";
  const activeConversationId = useActiveConversationId(scope);
  const mcpManager = useMcpManagerForHost(activeConversationId);
  useComposerLog(activeConversationId);

  const mcpManagerHostId = useAtomFamily(
    hostConfigForHostId,
    activeConversationId,
  );
  const localExecutionTarget =
    localExecutionTargetForScope(activeConversationId);
  const pinnedRemoteHostConfig = useHostConfig(
    homeRunLocationRemoteProject?.hostId ?? localExecutionTarget.hostId,
  );
  const isHomePinnedRemote =
    activeConversationId == null &&
    localExecutionTarget.hostId === "local" &&
    homeRunLocationRemoteProject != null;
  const executionTarget = isHomePinnedRemote
    ? {
        ...localExecutionTarget,
        cwd: homeRunLocationRemoteProject.remotePath,
        hostConfig: pinnedRemoteHostConfig,
        hostId: homeRunLocationRemoteProject.hostId,
      }
    : localExecutionTarget;
  const executionHostConfig = useHostConfig(executionTarget.hostId);

  // ── conversation id, browser bridging, banners ──────────────────────────
  const followUpConversationId = useFollowUpToConversation(followUp);
  const analyticsConversationId =
    followUpConversationId ??
    (() => {
      switch (scope.value.kind) {
        case "new":
          return buildNewThreadClientId({
            entrypoint: scope.value.entrypoint === "panel" ? "panel" : "home",
          });
        case "local":
          return scope.value.conversationId;
        case "cloud":
          return scope.value.taskId;
        case "other":
          return buildNewThreadClientId({ entrypoint: "home" });
      }
    })();
  const directBrowserConversationId =
    browserConversationId ?? followUpConversationId;
  const directBrowserTabId = buildComposerAnalyticsId(
    directBrowserConversationId,
  );

  const selectedModel = activeCollaborationMode?.settings?.model ?? null;
  const {
    isUsageBannerEnabled,
    modelLimitName,
    modelLimitResetAt,
    rateLimit,
    rateLimitWarningThreshold,
    showCoreRateLimitUpsell,
    showModelLimitBanner,
    showWorkspaceUsageLimitBanner,
  } = useComposerRateLimitBanner({ selectedModel });

  const localConversationCwd = useAtomFamily(
    composerCwdOverrideAtom,
    activeConversationId,
  );
  const composerModeSetting = useAtomFamily(
    composerModeForScopeAtom,
    activeConversationId,
  );
  const { isAppConnectCallbackClaimed } = useAtomValue(
    appConnectClaimedFollowUpQuery,
  );
  const pendingApproval = useResolvedPendingApproval();
  const pendingApprovalKey = buildComposerAnalyticsId(pendingApproval);
  const isProjectlessConversation =
    useAtomFamily(composerModeAtom, activeConversationId) === "projectless";
  const isHotkeyWindowSurface = isHotkeyWindow();
  const showFooter =
    (!isHotkeyWindowSurface || externalFooterVariant === "home") &&
    (showExternalFooter || (isSideConversation && isProjectlessConversation));
  const workspaceRootSetting = useAtomFamily(
    composerCwdOverrideAtom,
    activeConversationId,
  );
  const savedWorkspaceRoot =
    workspaceRootSetting === "~" ? null : workspaceRootSetting;

  // ── background threads / approvals ──────────────────────────────────────
  const isBackgroundThreadsEnabled = useIsQueueingEnabled();
  const backgroundTurns =
    useAtomFamily(
      isBackgroundThreadsEnabled ? activeConversationId : null,
      activeConversationId,
    ) ?? EMPTY_ARRAY;
  const conversationForRows = useMemo(
    () =>
      activeConversationId == null || !isBackgroundThreadsEnabled
        ? null
        : { turns: backgroundTurns },
    [activeConversationId, isBackgroundThreadsEnabled, backgroundTurns],
  );
  const { memberships, rows, mentionItems, firstApproval } =
    useBackgroundThreadRows({
      activeConversationId,
      conversation: conversationForRows,
      enabled: isBackgroundThreadsEnabled,
      manager: mcpManager,
    });
  const turnMap = useBackgroundThreadTurnMap({
    conversation: conversationForRows,
    memberships,
  });
  const currentTurnKey = currentTurnKeyForConversation(conversationForRows);
  const backgroundRows = rows.filter(
    (item: { conversationId: string }) =>
      turnMap.get(item.conversationId)?.parentTurnKey === currentTurnKey,
  );
  const hasFirstApproval = firstApproval != null;
  const firstApprovalHostId = useAtomFamily(
    hostConfigForHostId,
    firstApproval?.conversationId ?? null,
  );
  const hasPendingApproval = useHasPendingApproval(pendingApproval);
  const hasApprovalSurface =
    activeConversationId != null && (hasPendingApproval || hasFirstApproval);

  const [isStatusMenuOpen, setIsStatusMenuOpen] = useState(false);
  const isElectronPlatform = useIsElectronPlatform();
  const { isPending: isConversationPending } =
    useConversationPending(mcpManagerHostId);
  const cloudAccess = useCloudAccess();
  const canUseProjectlessThreads = !useIsWorkspaceRequired();
  const intl = useComposerIntl();
  const navigate = useNavigate();
  const location = useLocation();
  const remoteProjectPin = {
    conversationId: activeConversationId,
    hostId: mcpManagerHostId,
  };
  const messageLimitEvent = useMessageLimitEvent(remoteProjectPin);
  const firstBlockBanner = useAtomFamily(
    isFollowUpHydratedAtom,
    activeConversationId,
  );
  const firstBlockRateLimit =
    firstBlockBanner != null && activeConversationId != null
      ? {
          conversationId: activeConversationId,
          domain: firstBlockBanner.domain,
          eventId: -1,
          turnId: firstBlockBanner.turnId,
          variant: "first_block" as const,
        }
      : null;
  const activeMessageLimitBanner =
    messageLimitEvent.event != null &&
    messageLimitEvent.event.eventId !== messageLimitEvent.dismissedEventId
      ? messageLimitEvent.event
      : firstBlockRateLimit;
  const { state: locationState } = location;

  // ── image input support / dialogs ───────────────────────────────────────
  const isWorktreeSnapshotsEnabled = useIsWorktreeSnapshotsEnabled();
  const {
    imageInputUnsupportedReason,
    notifyImageInputUnsupported,
    supportsImageInputs,
  } = useImageInputSupport({
    scope,
    conversationId: activeConversationId,
    intl,
  });
  const [restrictedSessionText, setRestrictedSessionText] = useState<
    string | null
  >(null);
  const { interruptThread } = useInterruptThread();

  const getBackgroundConversation = (conversationId: string) =>
    scope.get(isBackgroundThreadHydratedAtom, conversationId)
      ? {
          turns:
            scope.get(composerModeForScopeAtom, conversationId) ?? EMPTY_ARRAY,
        }
      : null;

  async function openBackgroundThread(conversationId: string) {
    if (
      scope.get(isBackgroundThreadHydratedAtom, conversationId) ||
      (await hydrateBackgroundThreads({
        hostId: executionTarget.hostId,
        threadIds: [conversationId],
      }),
      scope.get(isBackgroundThreadHydratedAtom, conversationId))
    ) {
      if (isHotkeyWindow()) {
        openHotkeyWindowThread({ path: openThreadPath(conversationId) });
        return;
      }
      navigate(openThreadPath(conversationId));
    }
  }

  const rowsByConversationId = new Map(
    rows.map((item: { conversationId: string }) => [item.conversationId, item]),
  );
  const canStopAllBackgroundThreads = memberships.some(
    (item: { conversationId: string }) =>
      canStopBackgroundThread({
        conversationId: item.conversationId,
        rowsByConversationId,
        getConversation: getBackgroundConversation,
      }),
  );
  const stopAllBackgroundThreads = () => {
    for (const conversationId of collectStoppableBackgroundThreads({
      memberships,
      rowsByConversationId,
      getConversation: getBackgroundConversation,
    }))
      interruptThread({ conversationId });
  };

  // ── editor controller, execution mode, remote connections ───────────────
  const { isQueueingEnabled } = useIsQueueingEnabled();
  const enterBehavior = useComposerController(
    useAtomValue(composerEnterBehaviorFamily),
  );
  const threadGoal = useAtomFamily(
    composerModeForScopeAtom,
    activeConversationId,
  );
  const pendingThreadGoal = useAtomFamily(
    composerCwdOverrideAtom,
    activeConversationId,
  );
  const followUpCloudStartingState = useAtomFamily(
    composerModeAtom,
    activeConversationId,
  );
  const queuedFollowUps = useQueuedFollowUps(activeConversationId);
  const { messages, actions } = queuedFollowUps;
  const { data: workspaceRootsData, isLoading: isWorkspaceRootsLoading } =
    useAtomValue(useActiveWorkspaceRoots);
  const openFile = useOpenFileMutation("open-file");
  const activeWorkspaceRoot = workspaceRootsData?.roots?.[0] ?? null;
  const projectAssignments = useAtomValue(projectAssignmentsQuery);
  const { remoteConnections, selectedRemoteHostId } =
    useAtomValue(useRemoteConnections);
  const { selectedRemoteProject, selectedRemoteProjectId } =
    useSelectedRemoteProject();
  const codexHome = useCodexHome();

  const prefillPrompt = locationState?.prefillPrompt;
  const prefillPriorConversation =
    locationState?.prefillPriorConversation ?? null;
  const prefillAddedFiles = locationState?.prefillAddedFiles ?? null;
  const prefillCommentAttachments =
    locationState?.prefillCommentAttachments ?? null;
  const prefillCwd = locationState?.prefillCwd ?? null;
  const sharedPrefillCwd = useAtomValue(composerPrefillCwdAtom);
  const workspaceRoots = workspaceRootsData?.roots ?? EMPTY_ARRAY;

  const resolvedCwd = resolveComposerCwd({
    sharedPrefillCwd,
    locationPrefillCwd: prefillCwd,
    localConversationCwd,
    selectedRemoteProjectPath: selectedRemoteProject?.remotePath ?? null,
    defaultCwd,
    workspaceRoots,
    activeWorkspaceRoot,
    codexHome,
    canUseProjectlessThreads,
  });
  const isProjectlessComposerCwd = resolvedCwd === "~";
  const executionCwd =
    resolvedCwd === "/" || isProjectlessComposerCwd ? null : resolvedCwd;
  const { data: projectlessWorkspaceRootData } = useAtomValue(
    useActiveWorkspaceRoots,
    {
      enabled:
        canUseProjectlessThreads &&
        (isProjectlessComposerCwd || isProjectlessConversation) &&
        savedWorkspaceRoot == null,
    },
  );
  const projectlessWorkspaceRoot =
    savedWorkspaceRoot ?? projectlessWorkspaceRootData;
  const gitRepoRootForCwd =
    resolvedCwd === "/" || isProjectlessComposerCwd
      ? null
      : useGitRepoRoot(resolvedCwd);
  const suggestionRoots = useMemo(
    () =>
      resolveComposerWorkspaceRoot({
        isProjectlessComposerCwd,
        isProjectlessConversation,
        projectlessWorkspaceRoot,
        resolvedCwd,
        workspaceRootPaths: workspaceRoots,
      }),
    [
      isProjectlessComposerCwd,
      isProjectlessConversation,
      projectlessWorkspaceRoot,
      workspaceRoots,
      resolvedCwd,
    ],
  );
  const prompts = useComposerPrompts();
  const composerController = useComposerController(composerScope);
  registerComposerKeymap(composerController, !isSideConversation);
  registerSidebarToggleShortcut(composerController);

  // ── attachments state (scoped atoms) ────────────────────────────────────
  const imageAttachments = useAtomValue(composerImageInputsAtom);
  const commentAttachments = useAtomValue(composerCommentAttachmentsAtom);
  const selectedTextAttachments = useAtomValue(
    composerSelectedTextAttachmentsAtom,
  );
  const extensionPageSelection = useAtomValue(extensionPageSelectionAtom);
  const mcpAppModelContextAttachments = useAtomValue(
    composerMcpAppModelContextAtom,
  );
  const pullRequestChecks = useAtomValue(composerPullRequestChecksAtom);
  const pullRequestMergeConflict = useAtomValue(
    composerPullRequestMergeConflictAtom,
  );
  const imageCommentDraft = useAtomValue(composerImageCommentDraftAtom);
  const imageCommentDraftComments = imageCommentDraft?.comments ?? EMPTY_ARRAY;
  const visibleImageAttachments = imageAttachments.filter(
    (item: { id: string }) => item.id !== imageCommentDraft?.attachmentId,
  );
  const fileAttachments = useAtomValue(composerFileAttachmentsAtom);
  const pastedTextAttachments = useAtomValue(composerPastedTextAttachmentsAtom);
  const addedFiles = useAtomValue(composerAddedFilesAtom);

  const setComposerStateField = useCallback(
    (field: string, value: unknown) => {
      setComposerScopedField(scope, field, value);
    },
    [scope],
  );
  const setComposerMode = useCallback(
    (mode: unknown) =>
      resolveComposerMode(scope, analyticsConversationId, mode),
    [scope, analyticsConversationId],
  );
  const setComments = (comments: unknown) =>
    setComposerScopedField(scope, "commentAttachments", comments);
  const setSelectedTextAttachments = useCallback(
    (attachments: unknown) =>
      setComposerStateField("selectedTextAttachments", attachments),
    [setComposerStateField],
  );

  // ── composer mode availability ──────────────────────────────────────────
  const { access } = cloudAccess;
  const composerMode = useComposerMode({
    ...(composerModeAvailability ??
      buildComposerModeAvailability({
        canCreateBrowserDefaultHostThreads: false,
        hasBrowserLocalExecutionHost: false,
        hasComposerModeGitRepo: gitRepoRootForCwd != null,
        hasFollowUp: followUp != null,
        isBrowser: false,
        isComposerModeGitMetadataLoading: false,
        isResponseInProgress,
        isStatsigLoading: false,
        isWorktreeExecutionTargetLoading:
          executionTarget.cwd == null &&
          executionTarget.isActiveWorkspaceRootLoading,
        isWorktreePickerEnabled: useIsWorktreePickerEnabled(),
      })),
    composerMode: composerModeSetting,
    cloudAccess: access,
  });
  const remoteConnectivityStates =
    useRemoteConnectivityStates(remoteConnections);
  const localExecutionRemoteHostId = resolveLocalExecutionRemoteHostId({
    attachedRemoteHostId:
      followUpConversationId != null && mcpManagerHostId !== "local"
        ? mcpManagerHostId
        : null,
    browserRemoteHostId: null,
    followUpType: followUp?.type,
    forceDefaultHost: false,
    selectedRemoteProjectHostId:
      selectedRemoteProject?.hostId ??
      homeRunLocationRemoteProject?.hostId ??
      null,
  });
  const localExecutionRemoteHostConfig = useHostConfig(
    localExecutionRemoteHostId ?? "",
  );
  const currentRemoteCwd = resolveCurrentRemoteCwd({
    localExecutionRemoteHostId,
    selectedRemoteProject,
    homeRunLocationRemoteProject,
    mcpManagerHostId,
    localConversationCwd,
  });
  const isLocalModeOnRemoteHost =
    composerMode === "local" && localExecutionRemoteHostId != null;
  const isRemoteProjectExecution = localExecutionRemoteHostId != null;
  const currentLocalExecutionHostId =
    isLocalModeOnRemoteHost && localExecutionRemoteHostConfig != null
      ? localExecutionRemoteHostId
      : mcpManagerHostId;
  const currentLocalExecutionHostConfig = useHostConfig(
    currentLocalExecutionHostId,
  );
  const worktreeExecutionHostId =
    localExecutionRemoteHostConfig == null
      ? currentLocalExecutionHostId
      : executionTarget.hostId;
  const executionHostId =
    composerMode === "worktree"
      ? worktreeExecutionHostId
      : currentLocalExecutionHostId;
  const executionHostConfigForMode = useHostConfig(executionHostId);
  const currentLocalExecutionCwd =
    isLocalModeOnRemoteHost && currentRemoteCwd != null
      ? currentRemoteCwd
      : resolvedCwd;
  const worktreeExecutionCwd = executionTarget.cwd ?? resolvedCwd;

  // ── remote analytics context / windows sandbox ──────────────────────────
  const remoteSshMessageAnalyticsContext = {
    productLogger,
    connection:
      worktreeExecutionHostId == null
        ? null
        : (remoteConnections.find(
            (item: { hostId: string }) =>
              item.hostId === worktreeExecutionHostId &&
              isRemoteConnection(item),
          ) ?? null),
    connectionState: null,
    isFollowUp: followUp != null,
    error: null,
    threadId: activeConversationId,
  };
  const [showWindowsSandboxBanner, setShowWindowsSandboxBanner] =
    useWindowsSandboxSetup();
  const {
    hasError,
    isPending: isWindowsSandboxRequirementPending,
    requirement,
    retry,
  } = useWindowsSandboxRequirement({ enabled: false });

  // ── prefill / focus effects ─────────────────────────────────────────────
  const [focusComposerNonce, setFocusComposerNonce] = useState(
    locationState?.focusComposerNonce,
  );
  const [priorConversation, setPriorConversation] = useState(
    prefillPriorConversation,
  );
  const focusComposer = useCallback(() => {
    setFocusComposerNonce((nonce) => (nonce ?? 0) + 1);
  }, []);
  const { addFileDescriptorsAsMentions } = useComposerAttachmentActions({
    scope,
    intl,
    executionHostId,
    supportsImageInputs,
    notifyImageInputUnsupported,
  });
  const setCommentAttachments = (comments: unknown) => setComments(comments);
  const applyPrefill = useEffectEvent(() => {
    if (prefillPriorConversation)
      setPriorConversation(prefillPriorConversation);
    if (locationState?.focusComposerNonce != null)
      setFocusComposerNonce(locationState.focusComposerNonce);
    if (prefillPrompt && prefillPrompt !== composerController.getText())
      composerController.setPromptText(prefillPrompt);
    if (prefillAddedFiles != null && prefillAddedFiles.length > 0)
      addFileDescriptorsAsMentions(prefillAddedFiles);
    if (
      prefillCommentAttachments != null &&
      prefillCommentAttachments.length > 0
    )
      setCommentAttachments(prefillCommentAttachments);
  });
  useEffect(() => {
    applyPrefill();
  }, [
    prefillPrompt,
    prefillPriorConversation,
    prefillAddedFiles,
    prefillCommentAttachments,
    locationState?.focusComposerNonce,
  ]);

  const [sharedPrefill, clearSharedPrefill] =
    useSharedComposerPrefill("composer_prefill");
  const applySharedPrefill = useEffectEvent(() => {
    const comments = sharedPrefill?.commentAttachments;
    const hasText =
      sharedPrefill?.clearText === true ||
      (sharedPrefill?.text.length ?? 0) > 0;
    if (
      sharedPrefill == null ||
      (!hasText && (comments == null || comments.length === 0))
    )
      return;
    if (activeConversationId != null) return;
    if (sharedPrefill.cwd == null) scope.set(composerPrefillCwdAtom, null);
    else scope.set(composerPrefillCwdAtom, sharedPrefill.cwd);
    if (hasText) {
      if (isPromptDraftTextValue(sharedPrefill.text))
        composerController.setPromptText(sharedPrefill.text);
      else composerController.setText(sharedPrefill.text);
    }
    if (comments != null && comments.length > 0)
      setCommentAttachments(comments);
    composerController.focus();
    clearSharedPrefill(undefined);
  });
  useEffect(() => {
    applySharedPrefill();
  }, [sharedPrefill]);

  return {
    actions,
    activeConversationId,
    activeMessageLimitBanner,
    activeWorkspaceRoot,
    addedFiles,
    analyticsConversationId,
    backgroundRows,
    canStopAllBackgroundThreads,
    codexHome,
    commentAttachments,
    composerController,
    composerMode,
    composerModeSetting,
    createCloudTask,
    currentLocalExecutionCwd,
    currentLocalExecutionHostConfig,
    currentLocalExecutionHostId,
    currentRemoteCwd,
    directBrowserConversationId,
    dropTargetPortalTarget,
    executionCwd,
    executionHostConfigForMode,
    executionHostId,
    executionTarget,
    setRestrictedSessionText,
    restrictedSessionText,
    queuedFollowUps,
    prompts,
    priorConversation,
    isSideConversation,
    enterBehavior,
    extensionPageSelection,
    fileAttachments,
    firstApproval,
    firstApprovalHostId,
    followUp,
    followUpCloudStartingState,
    followUpConversationId,
    followUpToCloudTask,
    focusComposer,
    gitRepoRootForCwd,
    hasApprovalSurface,
    hasError,
    hasFirstApproval,
    hasPendingApproval,
    imageAttachments,
    imageCommentDraft,
    imageCommentDraftComments,
    intl,
    isElectronPlatform,
    isHotkeyWindowSurface,
    isLocalModeOnRemoteHost,
    isProjectlessConversation,
    isQueueingEnabled,
    isUsageBannerEnabled,
    isWorktreeSnapshotsEnabled,
    isWorkspaceRootsLoading,
    localExecutionRemoteHostId,
    location,
    mcpAppModelContextAttachments,
    mcpManagerHostId,
    mentionItems,
    messages,
    modelLimitName,
    modelLimitResetAt,
    navigate,
    notifyImageInputUnsupported,
    openBackgroundThread,
    openFile,
    pastedTextAttachments,
    pendingApproval,
    pendingApprovalKey,
    pendingThreadGoal,
    projectAssignments,
    pullRequestChecks,
    pullRequestMergeConflict,
    queryClient,
    rateLimit,
    rateLimitWarningThreshold,
    remoteProjectPin,
    remoteSshMessageAnalyticsContext,
    requirement,
    resolvedCwd,
    retry,
    savedWorkspaceRoot,
    scope,
    selectedModel,
    selectedRemoteProject,
    selectedRemoteProjectId,
    selectedTextAttachments,
    setComments,
    setComposerMode,
    setComposerStateField,
    setIsStatusMenuOpen,
    setPriorConversation,
    setSelectedTextAttachments,
    setShowWindowsSandboxBanner,
    showCoreRateLimitUpsell,
    showFooter,
    showModelLimitBanner,
    showWindowsSandboxBanner,
    showWorkspaceUsageLimitBanner,
    stopAllBackgroundThreads,
    suggestionRoots,
    supportsImageInputs,
    threadGoal,
    visibleImageAttachments,
    worktreeExecutionCwd,
    worktreeExecutionHostId,
  };
}
