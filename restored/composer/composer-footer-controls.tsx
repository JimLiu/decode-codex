// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// Semantic ComposerFooterControls surface restored from the djo67r4n composer chunk.
import { useContext, useState, type ReactNode, type RefObject } from "react";

import {
  Composer,
  ComposerFooterModeControls,
  ComposerFooterRuntimeControls,
  ComposerPermissionsMenu,
  ComposerSubmitButton,
  CloudSubmitIcon,
  DictationButton,
  DictationRecordingIndicator,
  EasterEggSubmitIcon,
  KeyboardShortcutHint,
  SendArrowIcon,
  StopIcon,
  activeConversationIdSignal,
  composerFooterActiveContext,
  composerScopeAtom,
  isEasterEggPrompt,
  parseKeyboardShortcut,
  setAtomValue,
  settingsAtoms,
  useAtomStore,
  useComposerEditorController,
  useComposerEditorSelector,
  useConversationId,
  useIntl,
  usePublishSignalValue,
  useResizeObserverRef,
  useSettingValue,
} from "../boundaries/onboarding-commons-externals.facade";

type ComposerMode = "cloud" | (string & {});
type SubmitButtonMode = "submit" | "stop";
type ComposerEnterBehavior = "enter" | "cmdIfMultiline" | "cmdAlways";

interface ConversationScope {
  kind: string;
  placement?: string;
}

interface ComposerEditorSnapshot {
  view: { state: { doc: { childCount: number } } };
  hasText: () => boolean;
  getText: () => string;
}

interface ComposerVoiceControls {
  canRetryDictation: boolean;
  dictationShortcutLabel?: string;
  isDictating: boolean;
  isDictationButtonVisible: boolean;
  isDictationSupported: boolean;
  isTranscribing: boolean;
  isVoiceFooterVisible: boolean;
  recordingDurationMs: number;
  retryDictation: () => void;
  startDictation: () => void;
  stopDictation: () => void;
  restrictedSession: { thread: { phase: string } };
  waveformCanvasRef: RefObject<HTMLCanvasElement | null>;
}

export interface ComposerFooterControlsProps {
  addContextButton: ReactNode;
  composerMode: ComposerMode;
  composerInput: ReactNode;
  executionTargetHostId: string;
  isSingleLineLayout: boolean;
  hotkeyWindowHomeFooterControls: ReactNode;
  hasMessageContent: boolean;
  permissionsHostId: string;
  permissionsCwdOverride?: string | null;
  submitButtonMode: SubmitButtonMode;
  isStopTurnConfirmationVisible: boolean;
  isResponseInProgress: boolean;
  isQueueingEnabled: boolean;
  isSubmitting: boolean;
  isStopping: boolean;
  onStop: () => void;
  emptySubmitTooltipNonce: number;
  handleSubmit: (options?: Record<string, unknown>) => void;
  voiceControls: ComposerVoiceControls;
  // Extended footer controls that the multiline/goal surfaces drive. The
  // single-line new-thread consumer omits these (they default to inert).
  isAutoContextOn?: boolean;
  ideContextStatus?: string;
  hasGoal?: boolean;
  isEasterEggEnabled?: boolean;
  isAeonActive?: boolean;
  clearAeon?: () => void;
  onClearGoal?: () => void;
  canStopFromEscape?: boolean;
  submitBlockReason?: string | null;
  disabledReason?: ReactNode;
}

function resolveIsGoalActionAvailable(
  scope: ConversationScope,
  composerMode: ComposerMode,
): boolean {
  return (
    composerMode !== "cloud" &&
    !(scope.kind === "local" && scope.placement === "side")
  );
}

function getSecondarySubmitShortcut(
  enterBehavior: ComposerEnterBehavior,
): string | undefined {
  switch (enterBehavior) {
    case "enter":
      return "CmdOrCtrl+Enter";
    case "cmdIfMultiline":
    case "cmdAlways":
      return "CmdOrCtrl+Shift+Enter";
  }
}

export function ComposerFooterControls({
  addContextButton,
  composerMode,
  composerInput,
  executionTargetHostId,
  isSingleLineLayout,
  hotkeyWindowHomeFooterControls,
  isAutoContextOn,
  ideContextStatus,
  hasMessageContent,
  hasGoal,
  isEasterEggEnabled,
  isAeonActive = false,
  clearAeon,
  onClearGoal,
  permissionsHostId,
  permissionsCwdOverride,
  submitButtonMode,
  canStopFromEscape,
  isStopTurnConfirmationVisible,
  isResponseInProgress,
  isQueueingEnabled,
  isSubmitting,
  isStopping,
  onStop,
  submitBlockReason,
  disabledReason,
  emptySubmitTooltipNonce,
  handleSubmit,
  voiceControls,
}: ComposerFooterControlsProps) {
  const scopeStore = useAtomStore(composerScopeAtom);
  useContext(composerFooterActiveContext);
  const editorController = useComposerEditorController();
  const conversationId = useConversationId(scopeStore);
  const isGoalActionAvailable = resolveIsGoalActionAvailable(
    scopeStore.value,
    composerMode,
  );
  const handleAutoContextChange = (next: boolean) => {
    setAtomValue(scopeStore, next);
  };
  const isMultiline = useComposerEditorSelector(
    editorController,
    (editor: ComposerEditorSnapshot) => editor.view.state.doc.childCount > 1,
  );
  useComposerEditorSelector(
    editorController,
    (editor: ComposerEditorSnapshot) => editor.hasText(),
  );
  const hasEasterEggPrompt = useComposerEditorSelector(
    editorController,
    (editor: ComposerEditorSnapshot) => isEasterEggPrompt(editor.getText()),
  );
  const enterBehavior: ComposerEnterBehavior = useSettingValue(
    settingsAtoms.composerEnterBehavior,
  );
  const intl = useIntl();
  const {
    canRetryDictation,
    dictationShortcutLabel,
    isDictating,
    isDictationButtonVisible,
    isDictationSupported,
    isTranscribing,
    isVoiceFooterVisible,
    recordingDurationMs,
    retryDictation,
    startDictation,
    stopDictation,
    restrictedSession,
    waveformCanvasRef,
  } = voiceControls;

  const [containerWidth, setContainerWidth] = useState(0);
  const [columnGap, setColumnGap] = useState(0);
  const [actionsWidth, setActionsWidth] = useState(0);

  const footerControlsResizeRef = useResizeObserverRef(
    (entry: ResizeObserverEntry, element: Element) => {
      const { columnGap: measuredColumnGap, gap } =
        window.getComputedStyle(element);
      setContainerWidth(entry.contentRect.width);
      setColumnGap(
        Number.parseFloat(measuredColumnGap) || Number.parseFloat(gap) || 0,
      );
    },
  );
  const footerActionsResizeRef = useResizeObserverRef(
    (entry: ResizeObserverEntry) => {
      setActionsWidth(entry.contentRect.width);
    },
  );
  const availableWidth = Math.max(
    0,
    containerWidth - actionsWidth - (actionsWidth > 0 ? columnGap : 0),
  );

  let blockedReasonOpenNonce: number | null | undefined;
  if (submitBlockReason === "empty-message") {
    blockedReasonOpenNonce =
      emptySubmitTooltipNonce > 0 ? emptySubmitTooltipNonce : null;
  }

  let submitShortcutKey: string | undefined;
  switch (enterBehavior) {
    case "enter":
      submitShortcutKey = "Enter";
      break;
    case "cmdIfMultiline":
      submitShortcutKey = isMultiline ? "CmdOrCtrl+Enter" : "Enter";
      break;
    case "cmdAlways":
      submitShortcutKey = "CmdOrCtrl+Enter";
      break;
  }

  const primaryShortcut = parseKeyboardShortcut(submitShortcutKey);
  const secondaryShortcut = parseKeyboardShortcut(
    getSecondarySubmitShortcut(enterBehavior),
  );
  const queueLabel = intl.formatMessage({
    id: "composer.submitButtonTooltip.queue",
    defaultMessage: "Queue",
    description:
      "Tooltip for submit while a response is in progress and queue mode is enabled",
  });
  const steerLabel = intl.formatMessage({
    id: "composer.submitButtonTooltip.steer",
    defaultMessage: "Steer",
    description:
      "Tooltip for submit while a response is in progress and steer mode is enabled",
  });
  const primaryQueueLabel = isQueueingEnabled ? queueLabel : steerLabel;
  const secondaryQueueLabel = isQueueingEnabled ? steerLabel : queueLabel;

  usePublishSignalValue(activeConversationIdSignal, conversationId ?? null);

  const isEasterEggActive =
    Boolean(isEasterEggEnabled) &&
    composerMode !== "cloud" &&
    Boolean(hasEasterEggPrompt);
  let submitIcon = SendArrowIcon;
  if (composerMode === "cloud") {
    submitIcon = CloudSubmitIcon;
  } else if (isEasterEggActive) {
    submitIcon = EasterEggSubmitIcon;
  }

  const sendTooltip = intl.formatMessage({
    id: "composer.submitButtonTooltip.send",
    defaultMessage: "Send",
    description: "Tooltip for submit when no response is currently in progress",
  });
  const submitTooltip: ReactNode =
    submitButtonMode === "stop" ? (
      intl.formatMessage({
        id: "composer.submitButtonTooltip.stop",
        defaultMessage: "Stop",
        description: "Tooltip for the stop button when a response is streaming",
      })
    ) : isResponseInProgress ? (
      <div className="grid grid-cols-[auto_auto] items-center gap-x-2 gap-y-1">
        <span className="text-token-foreground">{primaryQueueLabel}</span>
        <span className="justify-self-end">
          <KeyboardShortcutHint keysLabel={primaryShortcut} />
        </span>
        <span className="text-token-foreground">{secondaryQueueLabel}</span>
        <span className="justify-self-end">
          <KeyboardShortcutHint keysLabel={secondaryShortcut} />
        </span>
      </div>
    ) : (
      sendTooltip
    );

  const submitButton =
    submitButtonMode === "stop" && !isAeonActive ? (
      <ComposerSubmitButton
        isSubmitting={isStopping}
        disabled={false}
        ariaLabel={
          typeof submitTooltip === "string" ? submitTooltip : undefined
        }
        Icon={StopIcon}
        keyboardShortcutLabel={
          isResponseInProgress && isStopTurnConfirmationVisible
            ? "Esc"
            : undefined
        }
        tooltipContent={submitTooltip}
        tooltipShortcut={
          !isResponseInProgress || !canStopFromEscape
            ? null
            : parseKeyboardShortcut("Esc")
        }
        onClick={() => {
          onStop();
        }}
      />
    ) : (
      <ComposerSubmitButton
        ariaLabel={submitButtonMode === "stop" ? sendTooltip : undefined}
        disabled={submitButtonMode === "stop"}
        isSubmitting={isSubmitting}
        blockedReason={disabledReason}
        blockedReasonOpenNonce={blockedReasonOpenNonce}
        fullBleedIcon={isEasterEggActive}
        Icon={submitIcon}
        tooltipContent={
          submitButtonMode === "stop" ? sendTooltip : submitTooltip
        }
        onClick={handleSubmit}
      />
    );

  const dictationRecordingFooter = (
    <DictationRecordingIndicator
      isTranscribing={isTranscribing}
      recordingDurationMs={recordingDurationMs}
      waveformCanvasRef={waveformCanvasRef}
      noBottomMargin={hotkeyWindowHomeFooterControls != null}
      stopDictation={stopDictation}
    />
  );

  const dictationButton = (
    <DictationButton
      isVisible={isDictationButtonVisible}
      disabled={
        !isDictationSupported || restrictedSession.thread.phase !== "inactive"
      }
      isTranscribing={isTranscribing}
      canRetryDictation={canRetryDictation}
      shortcutLabel={dictationShortcutLabel}
      retryDictation={retryDictation}
      startDictation={startDictation}
      stopDictation={stopDictation}
    />
  );

  const footerInlineControls = (
    <Composer.FooterInlineControls gap="normal">
      {addContextButton}
      {composerMode !== "cloud" && !isSingleLineLayout ? (
        <>
          <ComposerPermissionsMenu
            conversationId={conversationId}
            hostId={permissionsHostId}
            cwdOverride={permissionsCwdOverride}
          />
          <ComposerFooterModeControls
            hasGoal={hasGoal}
            isGoalActionAvailable={isGoalActionAvailable}
            isAeonActive={isAeonActive}
            clearAeon={clearAeon}
            onClearGoal={onClearGoal}
            showDivider
          />
        </>
      ) : null}
    </Composer.FooterInlineControls>
  );

  const footerBody = isVoiceFooterVisible ? null : isDictating ? (
    dictationRecordingFooter
  ) : (
    <Composer.Footer
      responsive
      spacing={hotkeyWindowHomeFooterControls == null ? "default" : "flush"}
    >
      {footerInlineControls}
      <Composer.FooterAction>{null}</Composer.FooterAction>
      <Composer.FooterControls ref={footerControlsResizeRef}>
        <Composer.FooterExpandingControls>
          <ComposerFooterRuntimeControls
            composerMode={composerMode}
            hotkeyWindowHomeFooterControls={hotkeyWindowHomeFooterControls}
            availableWidth={availableWidth}
            isAeonActive={isAeonActive}
            ideContext={{
              isAutoContextOn,
              setIsAutoContextOn: handleAutoContextChange,
              status: ideContextStatus,
            }}
          />
        </Composer.FooterExpandingControls>
        <Composer.FooterActions ref={footerActionsResizeRef}>
          {dictationButton}
          {null}
          {submitButton}
        </Composer.FooterActions>
      </Composer.FooterControls>
    </Composer.Footer>
  );

  if (isSingleLineLayout) {
    return (
      <Composer.Footer layout="single-line">
        {footerInlineControls}
        {composerInput}
        <Composer.FooterControls layout="single-line">
          <ComposerFooterRuntimeControls
            composerMode={composerMode}
            hotkeyWindowHomeFooterControls={hotkeyWindowHomeFooterControls}
            availableWidth={Number.MAX_SAFE_INTEGER}
            isAeonActive={isAeonActive}
            ideContext={{
              isAutoContextOn,
              setIsAutoContextOn: handleAutoContextChange,
              status: ideContextStatus,
            }}
          />
          {composerMode === "cloud" ? null : (
            <>
              <ComposerPermissionsMenu
                conversationId={conversationId}
                hostId={permissionsHostId}
                cwdOverride={permissionsCwdOverride}
                hideLabel
              />
              <ComposerFooterModeControls
                hasGoal={hasGoal}
                isGoalActionAvailable={isGoalActionAvailable}
                isAeonActive={isAeonActive}
                clearAeon={clearAeon}
                onClearGoal={onClearGoal}
                showDivider
              />
            </>
          )}
          {dictationButton}
          {null}
          {submitButton}
        </Composer.FooterControls>
      </Composer.Footer>
    );
  }

  return (
    <div className="contents">
      {composerInput}
      {footerBody}
    </div>
  );
}
