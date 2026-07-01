// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// Dictation and keyboard handling for NewThreadComposerBody.
import { useEffect, useEffectEvent } from "react";

import {
  hasActiveMentionMenu,
  isComposerDictationTarget,
  registerComposerEnterKeymap,
  registerComposerEscapeHandler,
  resolveComposerKeyAction,
  resolveEscapeAction,
  sendQueuedSteerMessage,
  useComposerDictation,
} from "../boundaries/onboarding-commons-externals.facade";

export function useNewThreadComposerKeyboard(params: Record<string, any>) {
  const {
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
  } = params;

  const voiceControls = useComposerDictation({
    conversationId: activeConversationId,
    executionTargetCwd: executionTarget.cwd,
    executionTargetHostId: executionTarget.hostId,
    isComposerInputVisible: !hasApprovalSurface,
    getDictationSurroundingText: () => composerController.getText(),
    shouldHandleDictation: () =>
      isComposerDictationTarget({
        composerInput: composerController.view.dom,
        focusedElement: document.activeElement,
      }),
    onRestrictedSessionTextChange: setRestrictedSessionText,
  });
  const { abortDictation, isDictating } = voiceControls;
  registerComposerEscapeHandler(
    composerController.view.dom,
    (event: KeyboardEvent) => {
      if (event.key !== "Escape" || !document.hasFocus()) return;
      const action = resolveEscapeAction({
        isDictating,
        followUpType: followUp?.type,
        isResponseInProgress,
        isComposerFocused: composerController.view.hasFocus(),
        hasActiveMentionMenu: hasActiveMentionMenu(
          composerController.view.state,
        ),
        isStopTurnConfirmationVisible,
      });
      switch (action) {
        case "abort-dictation":
          event.preventDefault();
          abortDictation();
          return;
        case "focus-composer":
          focusComposer();
          return;
        case "confirm-stop-turn":
          event.preventDefault();
          confirmStopTurn();
          return;
        case "stop-turn":
          event.preventDefault();
          if (event.repeat) return;
          handleStop();
          focusComposer();
          return;
      }
    },
  );

  const maybeSendQueuedSteerMessage = (action?: string) => {
    if (
      followUp?.type !== "local" ||
      !isResponseInProgress ||
      hasMessageContent
    )
      return false;
    const messageId = messages[0]?.id;
    if (!messageId) return false;
    sendQueuedSteerMessage({
      conversationId: activeConversationId,
      executionHostId: currentLocalExecutionHostId,
      messageId,
      queuedMessages: messages,
      removeQueuedMessage: actions.remove,
      updateQueuedMessage: actions.update,
      onSubmitLocal,
    });
    focusComposer();
    return true;
  };
  const onEnterKey = useEffectEvent((event: KeyboardEvent) => {
    const cmd = event.metaKey || event.ctrlKey;
    let matches = false;
    switch (enterBehavior) {
      case "enter":
        matches = cmd && !event.shiftKey && !event.altKey;
        break;
      case "cmdIfMultiline":
      case "cmdAlways":
        matches = cmd && event.shiftKey && !event.altKey;
        break;
    }
    if (!matches || followUp?.type !== "local" || !isResponseInProgress)
      return false;
    event.preventDefault();
    const action = isQueueingEnabled ? "steer" : "queue";
    if (maybeSendQueuedSteerMessage(action)) return true;
    void submit({
      followUpSubmitAction: action,
      focusComposerAfterSubmit: true,
    });
    return true;
  });
  const onOtherKey = useEffectEvent((event: KeyboardEvent) =>
    resolveComposerKeyAction({
      event,
      isComposerFocused: composerController.view.hasFocus(),
      hasActiveMentionMenu: hasActiveMentionMenu(composerController.view.state),
      hasPlanMode: collaborationModes.some(
        (item) => (item as { mode: string }).mode === "plan",
      ),
      hasDefaultMode: collaborationModes.some(
        (item) => (item as { mode: string }).mode === "default",
      ),
      isPlanMode:
        (activeCollaborationMode as { mode?: string })?.mode === "plan",
      setSelectedMode: setSelectedCollaborationMode,
    }),
  );
  useEffect(
    () =>
      registerComposerEnterKeymap(composerController.view, {
        Backspace: onOtherKey,
        Enter: onEnterKey,
        Escape: onOtherKey,
        Tab: onOtherKey,
      }),
    [composerController],
  );

  return { maybeSendQueuedSteerMessage, voiceControls };
}
