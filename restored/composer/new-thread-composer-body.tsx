// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// NewThreadComposerBody — the shared composer body rendered inside a composer
// scope provider by HomeComposer and the new-thread panel surfaces.
//
// The body owns everything between the above-composer portals and the external
// footer: the ProseMirror editor, the attachment tray, the @mention/skill
// suggestion overlays, the above-composer banner stack (rate limit, host setup,
// thread goal, background subagents, hooks-needing-review), the approval-request
// surface for follow-ups, and the submit orchestration for local / worktree /
// cloud composer modes. The owning surface supplies collaboration-mode state and
// the submit/stop handlers via props; the body derives the execution target,
// builds the message context, and dispatches to the correct submit handler.
//
// This is a large aggregator component (~2,300 obfuscated lines in the source
// chunk). Its deep internals — the specialised composer hooks and banner/dialog
// sub-components — are imported here under semantic names. Where a concrete
// restored module already exists it is imported directly; the remainder resolve
// through the onboarding-commons externals facade.
import {
  useCallback,
  useEffect,
  useEffectEvent,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";

import type { NewThreadComposerBodyProps } from "./new-thread-composer-body-types";
import { NewThreadComposerBodyView } from "./new-thread-composer-body-view";
import { useNewThreadComposerKeyboard } from "./use-new-thread-composer-keyboard";
import { useNewThreadComposerRuntime } from "./use-new-thread-composer-runtime";
import { useNewThreadComposerSubmit } from "./use-new-thread-composer-submit";
import { AboveComposerPanel } from "./above-composer-panel-row";
import { AboveComposerSuggestions } from "./above-composer-suggestions";
import { ComposerExternalFooter } from "./composer-external-footer";
import { QueuedMessageList } from "./queued-message-list";
import { PendingRequestItemPanel } from "../requests/pending-request-item-panel";
import {
  // --- core scope / editor / atom access ---
  clsx,
  useAtomFamily,
  useAtomValue,
  useComposerController,
  useRegisterCommand,
  // --- conversation identity / execution target ---
  // --- attachments / context ---
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
  sendQueuedSteerMessage,
  useComposerPromptHistory,
  // --- misc host / analytics ---
  buildContextualLeadingItems,
  openComposerReferencedFile,
  requiredHooksFilter,
  saveThreadStartTarget,
  // --- rate-limit / banners / status ---
  // --- worktree / voice / layout ---
  useComposerDictation,
  useComposerLayoutMode,
  useSingleLineComposerMeasure,
  useStopTurnConfirmation,
  useWorktreeGitContext,
  registerComposerEnterKeymap,
  registerComposerEscapeHandler,
  isComposerDictationTarget,
  hasActiveMentionMenu,
  resolveEscapeAction,
  resolveComposerKeyAction,
  // --- background threads ---
  // --- composer mode / availability ---
  // --- entrypoints / prefill ---
  useResolvedConfigPath,
  // --- additional deep internals ---
  cancelThreadGoal,
  dismissMessageLimitBanner,
  openSideChat,
  resumeThreadGoal,
  submitFollowUpApproval,
  submitLocalApproval,
  useComposerPlaceholder,
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

export function NewThreadComposerBody({
  aboveComposerHeaderContent,
  belowComposerContent,
  activeCollaborationMode,
  browserConversationId,
  collaborationModes,
  serviceTier,
  setSelectedCollaborationMode,
  isResponseInProgress,
  showExternalFooter,
  hideArtifactPluginSuggestions,
  showPlanKeywordSuggestion,
  composerModeAvailability,
  placeholderText,
  composerLayoutMode,
  hotkeyWindowHomeFooterControls,
  homeRunLocationRemoteProject,
  defaultCwd,
  onSubmitLocal,
  onSubmitWorktree,
  onStop,
  isStopping,
  showWorkspaceDropdownInFooter,
  externalFooterVariant,
  surfaceClassName,
  showFooterBranchWhen,
  freeUpsellButton,
  onCreateSideConversation,
  hideRunLocationDropdownOverride,
  projectlessPrewarmReservation,
  localWorkspaceMaterialization,
}: NewThreadComposerBodyProps) {
  const {
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
    isSideConversation,
    setRestrictedSessionText,
    restrictedSessionText,
    enterBehavior,
    queuedFollowUps,
    prompts,
    priorConversation,
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
  } = useNewThreadComposerRuntime({
    activeCollaborationMode,
    browserConversationId,
    composerModeAvailability,
    defaultCwd,
    externalFooterVariant,
    homeRunLocationRemoteProject,
    isResponseInProgress,
    showExternalFooter,
  });

  // ── worktree git context, attachments, editing ──────────────────────────
  const { worktreeGitContextRoot, workspaceRootForSubmit } =
    useWorktreeGitContext({
      worktreeSourceCwd: worktreeExecutionCwd,
      worktreeRepoRoot: null,
    });
  const gitRootForStartingState =
    composerMode === "worktree" ? worktreeGitContextRoot : null;
  const workspaceRootForCurrentSubmit =
    composerMode === "worktree" ? workspaceRootForSubmit : resolvedCwd;
  const workspaceRootsForLocalExecution = useMemo(
    () =>
      isLocalModeOnRemoteHost
        ? [currentLocalExecutionCwd]
        : [workspaceRootForCurrentSubmit],
    [
      currentLocalExecutionCwd,
      isLocalModeOnRemoteHost,
      workspaceRootForCurrentSubmit,
    ],
  );
  const { resolvedConfigPath } = useResolvedConfigPath({
    hostId: executionTarget.hostId,
    workspaceRoot: composerMode === "worktree" ? worktreeExecutionCwd : null,
  });

  const [isDragActive, setIsDragActive] = useState(false);
  const [showDropOverlay, setShowDropOverlay] = useState(false);
  const [showShiftOverlay, setShowShiftOverlay] = useState(false);
  const [emptySubmitTooltipNonce, setEmptySubmitTooltipNonce] = useState(0);
  const {
    clearStopTurnConfirmation,
    confirmStopTurn,
    handleStop,
    isStopTurnConfirmationVisible,
  } = useStopTurnConfirmation({
    onStop,
    turnId:
      followUp?.type === "cloud"
        ? followUp.taskDetails.current_assistant_turn?.id
        : undefined,
  });
  const dragCounterRef = useRef(0);

  const {
    attachmentGenRef,
    canceledPendingFileAttachmentIdsRef,
    handleRemovePendingFileAttachment,
  } = usePendingFileAttachments({
    executionHostId,
    fileAttachments,
    setFileAttachments: (value: unknown) =>
      setComposerStateField("fileAttachments", value),
    setPendingFileAttachments: () => undefined,
    setPendingPastedTextAttachments: () => undefined,
    setPastedTextAttachments: (value: unknown) =>
      setComposerStateField("pastedTextAttachments", value),
  });
  const {
    handleRemoveFile,
    handleRemoveImage,
    handleRemoveAppshotContext,
    setAddedFiles,
    setFileAttachments,
    setPastedTextAttachments,
    setImageAttachments,
    setAppshotContexts,
  } = useComposerAttachmentSetters({ setComposerStateField });
  const {
    attachmentsContainerRef,
    clearPendingCaptures,
    getAnimationDestinationFrame,
    handleCaptureAttached,
    handleCaptureAnimationDuration,
    handleCaptureSettled,
    handleCaptureStarted,
    hasPendingCaptures,
    pendingCaptures,
  } = useAppshotCaptureTray({
    attachmentTrayGrowthDirection: followUp?.type === "local" ? "up" : "down",
    imageAttachmentCount: imageAttachments.length,
    appshotContextCount: 0,
  });
  const [pendingFileAttachments, setPendingFileAttachments] = useState<
    unknown[]
  >([]);
  const [pendingPastedTextAttachments, setPendingPastedTextAttachments] =
    useState<unknown[]>([]);
  const attachmentActions = useComposerAttachmentActions({
    attachmentGeneration: attachmentGenRef,
    canceledPendingFileAttachmentIds:
      canceledPendingFileAttachmentIdsRef.current,
    composerMode,
    executionHostConfig: executionHostConfigForMode,
    executionHostId,
    intl,
    notifyImageInputUnsupported,
    scope,
    setAddedFiles,
    setFileAttachments,
    setImageAttachments,
    setPendingFileAttachments,
    supportsImageInputs,
  });
  const addFileAssetAttachment = useComposerFileAssetAttachment({
    attachmentGenRef,
    canceledPendingFileAttachmentIds:
      canceledPendingFileAttachmentIdsRef.current,
    executionHostId,
    setFileAttachments,
    setPendingFileAttachments,
  });

  // ── prompt history / single-line measure / mentions ─────────────────────
  const editMostRecentMessage = useCallback(() => {
    const last = messages.at(-1);
    if (last == null) return false;
    handleEditMessage(last.id);
    return true;
  }, [messages]);
  const { appendPromptToHistory, resetHistorySelection } =
    useComposerPromptHistory(
      composerController,
      followUpConversationId ?? browserConversationId ?? null,
      editMostRecentMessage,
    );
  const {
    setSingleLineInputMeasureRef,
    setSingleLineTextMeasureRef,
    singleLineInputWidth,
    singleLineTextWidth,
  } = useSingleLineComposerMeasure();
  const [lockedLayout, setLockedLayout] = useState<string | null>(null);
  const atMentionAutocomplete = useAtMentionAutocomplete(composerController);
  const skillMentionAutocomplete =
    useSkillMentionAutocomplete(composerController);
  const contextualLeadingItems = useAtomValue(buildContextualLeadingItems);
  const mentionedThreadIds = useMemo(() => EMPTY_ARRAY as string[], []);
  const showContextSuggestions =
    atMentionAutocomplete.ui?.active === true ||
    skillMentionAutocomplete.ui?.active === true;

  // ── message content / layout flags ──────────────────────────────────────
  const hasText = useComposerController(composerController);
  const isAutoSingleLine = composerLayoutMode === "auto-single-line";
  const hasVisibleAttachments =
    commentAttachments.length > 0 ||
    fileAttachments.length > 0 ||
    imageAttachments.length > 0 ||
    pastedTextAttachments.length > 0 ||
    selectedTextAttachments.length > 0 ||
    pullRequestChecks.length > 0 ||
    imageCommentDraftComments.length > 0 ||
    mcpAppModelContextAttachments.length > 0 ||
    extensionPageSelection != null ||
    pullRequestMergeConflict != null ||
    priorConversation != null;
  const hasMessageContent = hasText || hasVisibleAttachments;
  const hasPendingAttachments =
    hasPendingCaptures ||
    pendingFileAttachments.length > 0 ||
    pendingPastedTextAttachments.length > 0;
  const layoutMode = useComposerLayoutMode({
    composerLayoutMode,
    hasVisibleAttachments,
    isEditorMultiline: isAutoSingleLine,
    isVoiceLayoutActive: false,
    lockedLayout,
    singleLineInputWidth,
    singleLineTextWidth,
  });

  // ── submit orchestration ────────────────────────────────────────────────
  const submitButtonMode =
    isResponseInProgress && !hasMessageContent ? "stop" : "submit";
  const {
    agentMode,
    cancelGoalReplacement,
    confirmGoalReplacement,
    goalReplacementConfirmation,
    isSubmitting,
    permissionOverrideThreadSettings,
    permissionsCwdOverride,
    permissionsHostId,
    submit,
    submitInitPrompt,
  } = useNewThreadComposerSubmit({
    activeConversationId,
    activeWorkspaceRoot,
    actions,
    addedFiles,
    analyticsConversationId,
    appendPromptToHistory,
    attachmentGenRef,
    clearPendingCaptures,
    clearStopTurnConfirmation,
    commentAttachments,
    composerController,
    composerMode,
    createCloudTask,
    currentLocalExecutionCwd,
    currentLocalExecutionHostId,
    currentRemoteCwd,
    directBrowserConversationId,
    executionHostId,
    fileAttachments,
    focusComposer,
    followUp,
    followUpCloudStartingState,
    followUpToCloudTask,
    homeRunLocationRemoteProject,
    imageAttachments,
    imageCommentDraft,
    imageCommentDraftComments,
    intl,
    isElectronPlatform,
    isLocalModeOnRemoteHost,
    isResponseInProgress,
    isWorktreeSnapshotsEnabled,
    localExecutionRemoteHostId,
    localWorkspaceMaterialization,
    location,
    mcpAppModelContextAttachments,
    mcpManagerHostId,
    mentionedThreadIds,
    navigate,
    onSubmitLocal,
    onSubmitWorktree,
    pastedTextAttachments,
    priorConversation,
    projectAssignments,
    prompts,
    pullRequestChecks,
    pullRequestMergeConflict,
    queryClient,
    remoteSshMessageAnalyticsContext,
    resetHistorySelection,
    resolvedConfigPath,
    resolvedCwd,
    scope,
    selectedModel,
    selectedRemoteProject,
    selectedTextAttachments,
    serviceTier,
    setComments,
    setComposerStateField,
    setPendingFileAttachments,
    setPendingPastedTextAttachments,
    setPriorConversation,
    submitButtonMode,
    threadGoal,
    worktreeExecutionCwd,
    worktreeExecutionHostId,
    workspaceRootForCurrentSubmit,
    workspaceRootsForLocalExecution,
  });

  // ── dictation / keymaps ─────────────────────────────────────────────────
  const { maybeSendQueuedSteerMessage, voiceControls } =
    useNewThreadComposerKeyboard({
      activeCollaborationMode,
      activeConversationId,
      actions,
      collaborationModes,
      composerController,
      confirmStopTurn,
      currentLocalExecutionHostId,
      enterBehavior,
      executionTarget,
      focusComposer,
      followUp,
      handleStop,
      hasApprovalSurface,
      hasMessageContent,
      isQueueingEnabled,
      isResponseInProgress,
      isStopTurnConfirmationVisible,
      messages,
      onSubmitLocal,
      setRestrictedSessionText,
      setSelectedCollaborationMode,
      submit,
    });

  // ── message editing / pasted text / drops ───────────────────────────────
  const {
    editingMessageId,
    handleDeleteMessage,
    handleEditMessage,
    handleEditedMessageSubmitted,
    handleSendNowMessage,
  } = useComposerMessageEditing({
    conversationId: activeConversationId,
    executionHostId: currentLocalExecutionHostId,
    focusComposer,
    incrementAttachmentGeneration: () => {
      attachmentGenRef.current += 1;
    },
    onSubmitLocal,
    queuedFollowUps,
    remoteSshMessageAnalyticsContext,
    setComments,
    setPriorConversation,
  });
  const {
    handlePastedText,
    handleRemoveFileAttachment,
    handleRemovePendingPastedTextAttachment,
    handleRemovePastedTextAttachment,
    handleShowPastedTextInTextField,
  } = usePastedTextAttachmentHandlers({
    canceledPendingFileAttachmentIds:
      canceledPendingFileAttachmentIdsRef.current,
    executionHostId,
    fileAttachments,
    conversationId: activeConversationId,
    pastedTextAttachments,
    setFileAttachments,
    setPastedTextAttachments,
    setPendingPastedTextAttachments,
  });
  const {
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
    handlePaste,
  } = useComposerContextActions({
    addImages: attachmentActions.addImages,
    directBrowserConversationId,
    dragCounterRef,
    dropTargetPortalTarget,
    isDragActive,
    setIsDragActive,
    setShowShiftOverlay,
  });

  // ── footer / placeholder / submit-button ────────────────────────────────
  const showRunLocationDropdownHome =
    externalFooterVariant === "home" && !hideRunLocationDropdownOverride;
  const hideRunLocationDropdown =
    isWorkspaceRootsLoading ||
    isSideConversation ||
    (workspaceRootForCurrentSubmit === "~" && !showRunLocationDropdownHome) ||
    (isProjectlessConversation && !showRunLocationDropdownHome) ||
    (hideRunLocationDropdownOverride && !showRunLocationDropdownHome);
  const externalFooterProps = {
    composerMode,
    setComposerMode,
    isResponseInProgress,
    worktreeEnvironmentHostId: executionTarget.hostId,
    worktreeEnvironmentWorkspaceRoot: worktreeExecutionCwd,
    localRemoteExecutionTarget: executionTarget,
    codexHome,
    variant: externalFooterVariant,
    showRuntimeControls: !isHotkeyWindowSurface,
    hideRunLocationDropdown,
    showWorkspaceDropdown: showWorkspaceDropdownInFooter && !isSideConversation,
    gitRootForStartingState,
    showFooterBranchWhen,
    freeUpsellButton,
    activeProjectIdOverride:
      externalFooterVariant === "home"
        ? (selectedRemoteProjectId ?? activeWorkspaceRoot)
        : undefined,
  };
  const hasQueuedMessages = messages.length > 0;
  const restrictedSessionSuggestion =
    restrictedSessionText != null && restrictedSessionText.length > 0;
  const hookScanCwd = scope.value.kind === "new" ? executionCwd : null;
  const { data: hookScanData } = useAtomFamily(requiredHooksFilter, {
    hostId: currentLocalExecutionHostId,
    cwd: hookScanCwd,
  });
  const hooksNeedingReview = hookScanData?.data
    .find((item: { cwd: string }) => item.cwd === hookScanCwd)
    ?.hooks.filter(requiredHooksFilter);
  const hooksNeedingReviewCount = hooksNeedingReview?.length ?? 0;
  const showHooksNeedingReview =
    scope.value.kind === "new" &&
    hooksNeedingReviewCount > 0 &&
    !hasMessageContent;
  const showAboveComposerTray =
    aboveComposerHeaderContent != null ||
    showWindowsSandboxBanner ||
    hasError ||
    showHooksNeedingReview ||
    restrictedSessionSuggestion ||
    hasQueuedMessages ||
    threadGoal != null;
  const hasAboveComposerTrayBorder =
    !followUp &&
    (showWindowsSandboxBanner || hasError) &&
    !restrictedSessionSuggestion &&
    !hasQueuedMessages &&
    threadGoal == null &&
    aboveComposerHeaderContent == null;
  const hasDropTargetPortal = dropTargetPortalTarget != null;
  const placeholder = useComposerPlaceholder({
    intl,
    followUpType: followUp?.type,
    composerMode,
    cloudStartingState: followUpCloudStartingState,
    isGoalModeActive: false,
    isPlanModeActive:
      (activeCollaborationMode as { mode?: string })?.mode === "plan",
    placeholderText,
  });
  const onSubmitButton = useCallback(() => {
    if (maybeSendQueuedSteerMessage()) return;
    if (submitButtonMode === "submit")
      void submit({ focusComposerAfterSubmit: true });
  }, [submitButtonMode]);
  useRegisterCommand("composer.submit", onSubmitButton, { enabled: true });

  const isSingleLine = layoutMode;
  const inputLayout = isSingleLine ? "single-line" : "multiline";
  const inputSpacing =
    hotkeyWindowHomeFooterControls == null ? "default" : "flush";
  const composerInput = (
    <Composer.Input
      ref={isSingleLine ? setSingleLineInputMeasureRef : null}
      layout={inputLayout}
      spacing={inputSpacing}
    >
      <ComposerInputField
        className={clsx(
          "text-base",
          !isSingleLine && "[&_.ProseMirror]:leading-5",
        )}
        isFocusComposerTarget
        singleLine={isSingleLine}
        minHeight={isSingleLine ? "1.25rem" : "2.75rem"}
        composerController={composerController}
        placeholder={placeholder}
        onMentionActivate={useMentionActivationHandler({
          scope,
          navigate,
          openFile: openFile.mutate,
          hostConfig: currentLocalExecutionHostConfig,
          hostId: currentLocalExecutionHostId,
          cwd: gitRepoRootForCwd,
        })}
        onSubmit={onSubmitButton}
      />
    </Composer.Input>
  );
  const addContextButton = (
    <AddContextButton
      active={atMentionAutocomplete.ui?.active === true}
      onOpen={() => {
        composerController.toggleContextSuggestions();
      }}
    />
  );

  const handleAddSelectedText = useCallback(
    (text: string) => {
      if (text.trim().length === 0) return;
      saveThreadStartTarget(scope, text);
      focusComposer();
    },
    [focusComposer, scope],
  );
  const openSelectedTextSideChat = useCallback(
    (prompt: unknown) => {
      if (onCreateSideConversation == null) return;
      void openSideChat({
        onCreateSideConversation,
        scope,
        prompt,
        intl,
      });
    },
    [intl, onCreateSideConversation, scope],
  );
  const selectedTextOpenSideChat =
    onCreateSideConversation != null ? openSelectedTextSideChat : undefined;

  return (
    <NewThreadComposerBodyView
      context={{
        AboveComposerPanel,
        AboveComposerSuggestionActions,
        AboveComposerSuggestions,
        AnnouncementBanner,
        AppshotCaptureControls,
        BackgroundSubagentsPanel,
        BlockedSubmitDialog,
        CloudModeIndicator,
        Composer,
        ComposerAttachmentPills,
        ComposerContextFilesWatcher,
        ComposerDropOverlay,
        ComposerExternalFooter,
        ComposerFooterControls,
        ComposerStatusMenuRow,
        FirstBlockRateLimitBanner,
        GoalReplacementConfirmationDialog,
        GoalResumePromptDialog,
        HooksNeedingReviewBanner,
        PendingRequestItemPanel,
        PluginContextLoader,
        QueuedMessageList,
        RateLimitBanner,
        SelectedTextAction,
        SelectedTextPortal,
        SideChatPrompt,
        ThreadGoalBanner,
        WindowsSandboxError,
        WindowsSandboxSetupBanner,
        aboveComposerHeaderContent,
        activeConversationId,
        activeMessageLimitBanner,
        actions,
        addContextButton,
        addFileAssetAttachment,
        addedFiles,
        agentMode,
        atMentionAutocomplete,
        attachmentGenRef,
        attachmentsContainerRef,
        backgroundRows,
        belowComposerContent,
        buildContextualLeadingItems,
        canStopAllBackgroundThreads,
        cancelGoalReplacement,
        cancelThreadGoal,
        clsx,
        commentAttachments,
        composerController,
        composerInput,
        composerLayoutMode,
        composerMode,
        composerModeSetting,
        confirmGoalReplacement,
        contextualLeadingItems,
        createPortal,
        currentLocalExecutionCwd,
        currentLocalExecutionHostId,
        dismissMessageLimitBanner,
        dropTargetPortalTarget,
        editingMessageId,
        emptySubmitTooltipNonce,
        executionCwd,
        executionHostId,
        extensionPageSelection,
        externalFooterProps,
        externalFooterVariant,
        fileAttachments,
        firstApproval,
        firstApprovalHostId,
        getAnimationDestinationFrame,
        gitRepoRootForCwd,
        goalReplacementConfirmation,
        handleAddSelectedText,
        handleCaptureAnimationDuration,
        handleCaptureAttached,
        handleCaptureSettled,
        handleCaptureStarted,
        handleDeleteMessage,
        handleDragEnter,
        handleDragLeave,
        handleDragOver,
        handleDrop,
        handleEditMessage,
        handlePaste,
        handleRemoveAppshotContext,
        handleRemoveFile,
        handleRemoveFileAttachment,
        handleRemoveImage,
        handleRemovePastedTextAttachment,
        handleRemovePendingFileAttachment,
        handleRemovePendingPastedTextAttachment,
        handleSendNowMessage,
        handleShowPastedTextInTextField,
        handleStop,
        hasAboveComposerTrayBorder,
        hasApprovalSurface,
        hasDropTargetPortal,
        hasError,
        hasFirstApproval,
        hasMessageContent,
        hasPendingApproval,
        hasQueuedMessages,
        hasText,
        hasVisibleAttachments,
        hideArtifactPluginSuggestions,
        hooksNeedingReview,
        hooksNeedingReviewCount,
        hotkeyWindowHomeFooterControls,
        imageCommentDraftComments,
        inputLayout,
        inputSpacing,
        isAutoSingleLine,
        isDragActive,
        isQueueingEnabled,
        isResponseInProgress,
        isSideConversation,
        isSingleLine,
        isStopTurnConfirmationVisible,
        isStopping,
        isSubmitting,
        isUsageBannerEnabled,
        mcpAppModelContextAttachments,
        mcpManagerHostId,
        mentionItems,
        mentionedThreadIds,
        messages,
        modelLimitName,
        modelLimitResetAt,
        onCreateSideConversation,
        openBackgroundThread,
        openComposerReferencedFile,
        openFile,
        openSideChat,
        pastedTextAttachments,
        pendingApproval,
        pendingApprovalKey,
        pendingCaptures,
        pendingFileAttachments,
        pendingPastedTextAttachments,
        pendingThreadGoal,
        permissionOverrideThreadSettings,
        permissionsCwdOverride,
        permissionsHostId,
        priorConversation,
        pullRequestChecks,
        pullRequestMergeConflict,
        rateLimit,
        rateLimitWarningThreshold,
        remoteProjectPin,
        removeAllImageComments,
        requirement,
        resolvedCwd,
        resumeThreadGoal,
        retry,
        savedWorkspaceRoot,
        scope,
        selectedTextAttachments,
        selectedTextOpenSideChat,
        setAppshotContexts,
        setComments,
        setComposerStateField,
        setIsStatusMenuOpen,
        setLockedLayout,
        setPriorConversation,
        setSelectedTextAttachments,
        setShowWindowsSandboxBanner,
        setSingleLineTextMeasureRef,
        showAboveComposerTray,
        showContextSuggestions,
        showCoreRateLimitUpsell,
        showDropOverlay,
        showFooter,
        showHooksNeedingReview,
        showModelLimitBanner,
        showPlanKeywordSuggestion,
        showShiftOverlay,
        showWindowsSandboxBanner,
        showWorkspaceUsageLimitBanner,
        skillMentionAutocomplete,
        splitCommentAttachmentsBySurface,
        stopAllBackgroundThreads,
        submit,
        submitButtonMode,
        submitFollowUpApproval,
        submitInitPrompt,
        submitLocalApproval,
        suggestionRoots,
        surfaceClassName,
        threadGoal,
        visibleImageAttachments,
        voiceControls,
      }}
    />
  );
}
