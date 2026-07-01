// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// Submit orchestration for NewThreadComposerBody. The view-level component owns
// editor state and attachments; this hook resolves the target mode, builds the
// submit context, and exposes the small set of handlers needed by the surface.
import { useCallback, useState } from "react";

import type { ComposerSubmitTarget } from "./new-thread-composer-body-types";
import {
  buildCloudSubmitTask,
  buildLocalContextIdeSnapshot,
  buildSideChatDisplayTitle,
  clearGoalPromptAtomsRunner,
  composerPastedTextAttachmentsAtom,
  formatComposerSubmitError,
  formatWorktreeSubmitError,
  hasSeenMultiAgentComposerBannerRunner,
  isHotkeyWindow,
  logComposerMessageSent,
  openHotkeyWindowThread,
  openTaskPath,
  parseGoalSubmit,
  performComposerSubmit,
  reportComposerSubmitError,
  resolveCloudTaskType,
  resolveComposerExecutionTarget,
  resolveComposerMode,
  showComposerToast,
  splitCommentsForSubmit,
  submitDirectComment,
  useAgentModeSettings,
  useProjectAssignment,
} from "../boundaries/onboarding-commons-externals.facade";

const EMPTY_ARRAY: never[] = [];

export function useNewThreadComposerSubmit(params: Record<string, any>) {
  const {
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
  } = params;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [goalReplacementConfirmation, setGoalReplacementConfirmation] =
    useState<null | {
      draft: unknown;
      focusComposerAfterSubmit: boolean;
      followUpSubmitAction?: string;
    }>(null);

  const { hostId: permissionsHostId, cwdOverride: permissionsCwdOverride } =
    resolveComposerExecutionTarget({
      composerMode,
      followUpType: followUp?.type,
      localExecutionRemoteHostId,
      worktreeExecutionHostId:
        composerMode === "worktree" ? worktreeExecutionHostId : null,
      worktreeExecutionCwd,
      mcpManagerHostId,
      currentRemoteCwd,
    });
  const {
    agentMode,
    permissionProfileId,
    shouldSendPermissionOverrides,
    permissionOverrideThreadSettings,
  } = useAgentModeSettings({
    conversationId: activeConversationId,
    cwdOverride: permissionsCwdOverride,
    hostId: permissionsHostId,
  });
  const agentModeSettings = {
    agentMode,
    permissionProfileId,
    shouldSendPermissionOverrides,
  };
  const projectAssignment = useProjectAssignment({
    isExistingThread: activeConversationId != null,
    executionHostId: worktreeExecutionHostId,
    activeLocalProjectId: activeWorkspaceRoot,
    existingAssignment:
      activeConversationId == null
        ? undefined
        : projectAssignments?.[activeConversationId],
    homeRemoteProject: homeRunLocationRemoteProject ?? null,
    selectedRemoteProject,
  });

  const buildLocalContextForPrompt = async (
    promptRaw: unknown,
    collaborationMode: unknown,
    targetConversationId: string | null = activeConversationId,
    threadGoalDraft?: unknown,
  ) => {
    const ideContext = await buildLocalContextIdeSnapshot(
      true,
      false,
      workspaceRootForCurrentSubmit,
    );
    return {
      addedFiles,
      collaborationMode,
      prompt:
        threadGoalDraft == null
          ? splitCommentsForSubmit({
              comments: imageCommentDraftComments,
              prompt: promptRaw,
            })
          : promptRaw,
      ideContext: ideContext ?? null,
      imageAttachments: threadGoalDraft == null ? imageAttachments : [],
      imageCommentDraft: threadGoalDraft == null ? imageCommentDraft : null,
      appshotContexts: EMPTY_ARRAY,
      fileAttachments,
      pastedTextAttachments,
      inAppBrowserContext:
        submitDirectComment(
          scope,
          targetConversationId,
          directBrowserConversationId,
        ) ??
        (await buildSideChatDisplayTitle({
          conversationId: targetConversationId,
          scope,
        })),
      commentAttachments,
      mcpAppModelContextAttachments,
      selectedTextAttachments,
      pullRequestChecks,
      pullRequestMergeConflict,
      threadGoalDraft,
      priorConversation: priorConversation ?? undefined,
      workspaceRoots: [workspaceRootForCurrentSubmit],
    };
  };

  const clearComposerUi = ({
    discardFileAttachments = false,
    keepMode = false,
  } = {}) => {
    composerController.setText("");
    clearPendingCaptures();
    if (discardFileAttachments)
      clearGoalPromptAtomsRunner(
        executionHostId,
        fileAttachments,
        pastedTextAttachments,
      );
    setPendingFileAttachments([]);
    setPendingPastedTextAttachments([]);
    setComments(EMPTY_ARRAY);
    if (!keepMode) resolveComposerMode(scope, analyticsConversationId, null);
    setPriorConversation(null);
    attachmentGenRef.current += 1;
  };

  const logMessageSent = (messageType: unknown) => {
    logComposerMessageSent(scope, {
      mode: composerMode,
      imageCount: imageAttachments.length,
      commentAttachmentCount: commentAttachments.length,
      selectedTextAttachmentCount: selectedTextAttachments.length,
      hasPriorConversation: priorConversation != null,
      isFollowUp: followUp != null,
      isResponseInProgress,
      inProgressMessageType: messageType,
      serviceTier: serviceTier ?? "standard",
    });
  };

  const buildCloudSubmit = async (context: unknown) => {
    const result = await buildCloudSubmitTask({
      scope,
      context,
      createCloudTask: createCloudTask.mutateAsync,
      followUp,
      followUpToCloudTask: followUpToCloudTask.mutateAsync,
      isWorktreeSnapshotsEnabled,
      mcpManagerHostId,
      queryClient,
      selectedModel,
    });
    if (result.type === "created-task") {
      if (location.pathname === "/") hasSeenMultiAgentComposerBannerRunner();
      if (isHotkeyWindow()) {
        openHotkeyWindowThread({ path: openTaskPath(result.taskId) });
        return;
      }
      navigate(openTaskPath(result.taskId));
    }
  };

  const handleSubmitError = useCallback(
    (error: unknown) => {
      reportComposerSubmitError(error, {
        mode: composerMode,
        followUp: followUp?.type ?? "none",
        cwd: currentLocalExecutionCwd,
      });
      if (composerMode === "worktree") {
        showComposerToast(scope, formatWorktreeSubmitError(error, intl));
        return;
      }
      showComposerToast(
        scope,
        formatComposerSubmitError({ error, composerMode, intl }),
      );
    },
    [composerMode, currentLocalExecutionCwd, followUp?.type, intl, scope],
  );

  const submitTarget: ComposerSubmitTarget = (() => {
    switch (composerMode) {
      case "local":
        return {
          type: "local",
          cwd: currentLocalExecutionCwd,
          executionOptions: isLocalModeOnRemoteHost
            ? {
                hostId: currentLocalExecutionHostId,
                permissions: agentModeSettings,
                workspaceRoots: workspaceRootsForLocalExecution,
              }
            : undefined,
          submit: onSubmitLocal,
        };
      case "worktree":
        return {
          type: "worktree",
          cwd: workspaceRootForCurrentSubmit,
          startingState: followUpCloudStartingState,
          environmentConfigPath: resolvedConfigPath,
          executionOptions: {
            hostId: worktreeExecutionHostId,
            permissions: agentModeSettings,
            workspaceRoots: [worktreeExecutionCwd],
          },
          projectAssignment,
          submit: onSubmitWorktree,
        };
      case "cloud":
        return {
          type: "cloud",
          cloudTaskType: resolveCloudTaskType(
            followUp,
            threadGoal,
            followUpCloudStartingState,
          ),
          repo: null,
          submit: buildCloudSubmit,
        };
      default:
        return {
          type: "local",
          cwd: currentLocalExecutionCwd,
          executionOptions: undefined,
          submit: onSubmitLocal,
        };
    }
  })();

  const prepareGoalSubmit = async (options: {
    confirmedGoalReplacementDraft?: unknown;
    focusComposerAfterSubmit?: boolean;
    followUpSubmitAction?: string;
    promptRaw: unknown;
    skipGoalReplacementConfirmation?: boolean;
  }) => {
    const parsed = await parseGoalSubmit({
      confirmedGoalReplacementDraft: options.confirmedGoalReplacementDraft,
      getImageAttachments: () => imageAttachments,
      getPastedTextAttachments: () =>
        scope.get(composerPastedTextAttachmentsAtom),
      isGoalActionAvailable: false,
      isGoalModeActive: false,
      promptRaw: options.promptRaw,
    });
    if (parsed.status === "not-goal")
      return { status: "continue", draft: null };
    if (parsed.status === "empty") {
      setComposerStateField("pendingThreadGoalObjective", "");
      composerController.setText("");
      if (options.focusComposerAfterSubmit) focusComposer();
      return { status: "handled" };
    }
    return { status: "continue", draft: parsed.draft };
  };

  const submitComposer = async (options: Record<string, unknown> = {}) => {
    await performComposerSubmit({
      appendPromptToHistory,
      buildLocalContextForPrompt,
      clearComposerUi,
      clearStopTurnConfirmation,
      composerController,
      conversationId: activeConversationId,
      focusComposer,
      followUp,
      handleSubmitError,
      hostId: currentLocalExecutionHostId,
      isElectron: isElectronPlatform,
      isLocalModeOnRemoteHost,
      isResponseInProgress,
      isWorkspaceStatusUnavailable:
        localWorkspaceMaterialization === "unavailable",
      logMessageSent,
      mentionedThreadIds,
      prepareGoalSubmit,
      prompts,
      queuedMessageActions: actions,
      remoteSshMessageAnalyticsContext,
      resetHistorySelection,
      resolvedCwd,
      setIsSubmitting,
      submitButtonMode,
      submitTarget,
      options,
    });
  };
  const submit = useCallback(submitComposer, [submitComposer]);
  const submitInitPrompt = useCallback(
    async (promptRaw: unknown) => {
      await submit({
        focusComposerAfterSubmit: true,
        persistedPromptRawOverride: promptRaw,
        promptRawOverride: promptRaw,
        skipGoalSubmit: true,
      });
    },
    [submit],
  );

  const confirmGoalReplacement = useCallback(() => {
    if (goalReplacementConfirmation == null) return;
    const { draft, focusComposerAfterSubmit, followUpSubmitAction } =
      goalReplacementConfirmation;
    setGoalReplacementConfirmation(null);
    void submitComposer({
      confirmedGoalReplacementDraft: draft,
      focusComposerAfterSubmit,
      followUpSubmitAction,
      skipGoalReplacementConfirmation: true,
    });
  }, [goalReplacementConfirmation]);
  const cancelGoalReplacement = useCallback(
    () => setGoalReplacementConfirmation(null),
    [],
  );

  return {
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
  };
}
