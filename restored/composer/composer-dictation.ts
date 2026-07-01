// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// Composer dictation subsystem. `useComposerDictation` is the orchestration hook
// layered over the core `useDictation` recorder: it wires push-to-talk hotkeys,
// surfaces transcription/start error toasts (localized), exposes voice-layout
// flags, and threads through the restricted-session state. `isComposerDictationTarget`
// is the focus predicate deciding whether the push-to-talk hotkey should apply.

import React from "react";
import { useDictation } from "../features/use-dictation/use-dictation";
import type {
  StopDictation,
  UseDictationOptions,
} from "../features/use-dictation/types";
import { isComposerFocusedForDictation } from "./composer-dictation-focus";
import { defineMessages, useIntl, type IntlShape } from "../vendor/react-intl";
import type { ToastController } from "../sidebar/project-hover-card-parts/types";
import {
  composerScope,
  formatKeyboardShortcut,
  HostRequestError,
  logger,
  toastControllerAtom,
  useEffectEvent,
  useFeatureGate,
  useKeyboardAccelerator,
  useNamedKeyboardShortcut,
  usePushToTalkHotkey,
  useScopeStore,
  useSessionState,
} from "../boundaries/onboarding-commons-externals.facade";

/** Realtime restricted-session lifecycle phase; `inactive` means no live session. */
export type RestrictedSessionPhase =
  | "inactive"
  | "starting"
  | "active"
  | "stopping";

/** Live realtime-voice thread nested inside a composer restricted session. */
export type ComposerRestrictedSessionThread = {
  isAvailable: boolean;
  isShowingFooter: boolean;
  isMuted: boolean;
  isMicrophoneMuted: boolean;
  ephemeralTranscript: string | null;
  recordingDurationMs: number;
  waveformCanvasRef: React.RefObject<HTMLCanvasElement | null>;
  phase: RestrictedSessionPhase;
  toggleMute: () => void;
  toggleMicrophoneMute: () => void;
  stop: () => Promise<void>;
};

/** Restricted-session (realtime voice) state exposed alongside dictation. */
export type ComposerRestrictedSession = {
  isStartAvailable: boolean;
  isSubmitStarting: boolean;
  startConversation: () => Promise<void>;
  thread: ComposerRestrictedSessionThread;
  visiblePhase: RestrictedSessionPhase | null;
};

/**
 * Imperative controller the hook drives when a realtime restricted session is
 * active. It is derived from the composer store in the full build but is not
 * wired up in this variant, so it resolves to `null` here.
 */
type RestrictedSessionController = {
  start: () => void;
  didStart: () => void;
  fail: () => void;
  sync: (state: { isDictating: boolean; isTranscribing: boolean }) => void;
};

/** Minimal shape read from the auth session when gating dictation. */
type DictationSessionState = {
  authMethod: string;
  isLoading: boolean;
};

export type UseComposerDictationOptions = {
  conversationId: string | null;
  executionTargetCwd: string;
  executionTargetHostId: string;
  isComposerInputVisible: boolean;
  onDictationTranscriptInsert: (transcript: string) => void;
  onDictationTranscriptSend: (transcript: string) => void;
  getDictationSurroundingText: () => string | null | undefined;
  shouldHandleDictation: (() => boolean) | null;
  onStartRestrictedSession?: (() => void) | undefined;
  onRestrictedSessionTextChange?: (text: string) => void;
};

export type UseComposerDictationResult = {
  abortDictation: () => void;
  canRetryDictation: boolean;
  dictationShortcutLabel: string | null;
  isDictating: boolean;
  isDictationButtonVisible: boolean;
  isDictationSupported: boolean;
  isTranscribing: boolean;
  isVoiceFooterVisible: boolean;
  isVoiceLayoutActive: boolean;
  recordingDurationMs: number;
  retryDictation: () => Promise<void>;
  startDictation: () => Promise<void>;
  stopDictation: StopDictation;
  restrictedSession: ComposerRestrictedSession;
  waveformCanvasRef: React.RefObject<HTMLCanvasElement | null>;
};

/** Command id whose keybinding is surfaced as the dictation shortcut hint. */
const DICTATION_START_COMMAND_ID = "composer.startDictation";
/** Statsig gate id (hashed) gating ChatGPT-account dictation. */
const DICTATION_CHATGPT_GATE_ID = "4100906017";

/** Default (idle) restricted-session state when no realtime session exists. */
const DEFAULT_RESTRICTED_SESSION: ComposerRestrictedSession = {
  isStartAvailable: false,
  isSubmitStarting: false,
  startConversation: () => Promise.resolve(),
  thread: {
    isAvailable: false,
    isShowingFooter: false,
    isMuted: false,
    isMicrophoneMuted: false,
    ephemeralTranscript: null,
    recordingDurationMs: 0,
    waveformCanvasRef: { current: null },
    phase: "inactive",
    toggleMute: () => {},
    toggleMicrophoneMute: () => {},
    stop: () => Promise.resolve(),
  },
  visiblePhase: null,
};

const dictationErrorMessages = defineMessages({
  connectionError: {
    id: "dictation.error.connection",
    defaultMessage: "Check your connection and try again",
    description:
      "Toast text shown when dictation audio transcription fails because of a connection problem",
  },
  microphoneMissing: {
    id: "dictation.error.microphoneMissing",
    defaultMessage: "Connect a microphone to use dictation",
    description:
      "Toast text shown when dictation cannot find an available microphone",
  },
  microphonePermissionDenied: {
    id: "dictation.error.microphonePermissionDenied",
    defaultMessage: "Allow microphone access to use dictation",
    description:
      "Toast text shown when dictation cannot start because microphone permission was denied",
  },
  microphoneUnavailable: {
    id: "dictation.error.microphoneUnavailable",
    defaultMessage: "Close other apps using the microphone",
    description:
      "Toast text shown when dictation cannot start because the microphone is unavailable",
  },
  startError: {
    id: "composer.dictation.startError",
    defaultMessage: "Unable to start dictation",
    description: "Toast text shown when dictation could not be started",
  },
  transcribeError: {
    id: "composer.dictation.transcribeError",
    defaultMessage: "Unable to transcribe audio",
    description: "Toast text shown when dictation audio transcription fails",
  },
  unsupported: {
    id: "dictation.error.unsupported",
    defaultMessage: "Dictation is not available on this device",
    description:
      "Toast text shown when dictation is not supported on the current device",
  },
  composerUnsupported: {
    id: "composer.dictation.unsupported",
    defaultMessage: "Dictation is not available on this device",
    description:
      "Toast text shown when dictation is not supported on the current device",
  },
});

/** Which dictation phase an error came from — governs message selection. */
type DictationErrorKind = "start" | "transcription";
/** Localized error message plus whether the failed action can be retried. */
type DictationErrorOutcome = { message: string; canRetry: boolean };

/**
 * Map a dictation failure to a localized toast message and retry affordance,
 * distinguishing transcription/network/rate-limit failures from microphone
 * permission/hardware failures raised while starting capture.
 */
function resolveDictationErrorMessage(
  intl: IntlShape,
  kind: DictationErrorKind,
  error: unknown,
): DictationErrorOutcome {
  if (kind === "transcription") {
    if (error instanceof HostRequestError) {
      const requestError = error as { status?: number; message?: string };
      if (
        requestError.status === 429 &&
        typeof requestError.message === "string" &&
        requestError.message.length > 0
      ) {
        return { message: requestError.message, canRetry: false };
      }
      const normalizedMessage = (requestError.message ?? "").toLowerCase();
      if (
        requestError.status === 0 ||
        normalizedMessage.includes("fetch failed") ||
        normalizedMessage.includes("failed to fetch") ||
        normalizedMessage.includes("network")
      ) {
        return {
          message: intl.formatMessage(dictationErrorMessages.connectionError),
          canRetry: true,
        };
      }
    }
    return {
      message: intl.formatMessage(dictationErrorMessages.transcribeError),
      canRetry: true,
    };
  }

  let errorName: string | null = null;
  if (error instanceof Error) errorName = error.name;
  if (typeof DOMException !== "undefined" && error instanceof DOMException) {
    errorName = error.name;
  }
  switch (errorName) {
    case "NotAllowedError":
    case "SecurityError":
      return {
        message: intl.formatMessage(
          dictationErrorMessages.microphonePermissionDenied,
        ),
        canRetry: false,
      };
    case "NotFoundError":
    case "DevicesNotFoundError":
    case "OverconstrainedError":
    case "ConstraintNotSatisfiedError":
      return {
        message: intl.formatMessage(dictationErrorMessages.microphoneMissing),
        canRetry: false,
      };
    case "NotReadableError":
    case "TrackStartError":
      return {
        message: intl.formatMessage(
          dictationErrorMessages.microphoneUnavailable,
        ),
        canRetry: false,
      };
    case "NotSupportedError":
    case "TypeError":
      return {
        message: intl.formatMessage(dictationErrorMessages.unsupported),
        canRetry: false,
      };
    default:
      return {
        message: intl.formatMessage(dictationErrorMessages.startError),
        canRetry: false,
      };
  }
}

/**
 * Formatted keyboard-shortcut hint for starting dictation, or `null` when no
 * binding is assigned. Reconstructed from the app-main `Dxe` helper (which is
 * defined outside this chunk) using shared keyboard-accelerator primitives.
 */
function useDictationShortcutLabel(): string | null {
  const accelerator = useKeyboardAccelerator(DICTATION_START_COMMAND_ID);
  return accelerator == null ? null : formatKeyboardShortcut(accelerator);
}

/**
 * Whether dictation is supported/enabled for the current environment and
 * account: `true` supported, `false` unsupported (hide the button), `null`
 * while the auth session is still resolving. Reconstructed from the app-main
 * `Pxe` helper (defined outside this chunk); the auth-session query and the
 * restriction sub-check are approximated via commons facade primitives.
 */
function useDictationAvailability(): boolean | null {
  const session = useSessionState() as DictationSessionState | null;
  const isChatGptDictationEnabled = useFeatureGate(DICTATION_CHATGPT_GATE_ID);
  if (
    typeof MediaRecorder === "undefined" ||
    navigator?.mediaDevices?.getUserMedia == null
  ) {
    return false;
  }
  if (session == null || session.isLoading) return null;
  return isChatGptDictationEnabled && session.authMethod === "chatgpt";
}

/**
 * Composer voice-input controller: owns push-to-talk wiring, dictation error
 * toasts, voice-layout flags, and restricted-session state on top of the core
 * `useDictation` recorder.
 */
export function useComposerDictation(
  options: UseComposerDictationOptions,
): UseComposerDictationResult {
  const {
    isComposerInputVisible,
    onDictationTranscriptInsert,
    onDictationTranscriptSend,
    getDictationSurroundingText,
    shouldHandleDictation,
  } = options;

  const store = useScopeStore(composerScope);
  const intl = useIntl();
  const restrictedSession = DEFAULT_RESTRICTED_SESSION;
  const dictationAvailability = useDictationAvailability();

  const hasStartedPushToTalkRef = React.useRef(false);
  const isPushToTalkStartingRef = React.useRef(false);
  const stopRequestedWhileStartingRef = React.useRef(false);

  // Realtime restricted-session controller: derived from the store in the full
  // build, but not wired up in this variant (resolves to null here).
  const restrictedSessionController: RestrictedSessionController | null = null;

  const failPushToTalk = () => {
    hasStartedPushToTalkRef.current = false;
    restrictedSessionController?.fail();
  };

  const isDictationEnabled =
    isComposerInputVisible && dictationAvailability === true;

  const showDictationErrorToast = (message: string) => {
    store.get<ToastController>(toastControllerAtom).danger(message);
  };

  const handleStartError = (error: unknown) => {
    failPushToTalk();
    showDictationErrorToast(
      resolveDictationErrorMessage(intl, "start", error).message,
    );
    logger.error("[Composer] unable to start dictation", {
      safe: {},
      sensitive: { error },
    });
  };

  const handleTranscribeError = (error: unknown) => {
    failPushToTalk();
    showDictationErrorToast(
      resolveDictationErrorMessage(intl, "transcription", error).message,
    );
    logger.error("[Composer] dictation failed", {
      safe: {},
      sensitive: { error },
    });
  };

  const handleUnsupported = () => {
    failPushToTalk();
    showDictationErrorToast(
      intl.formatMessage(dictationErrorMessages.composerUnsupported),
    );
  };

  const dictationOptions: UseDictationOptions = {
    enabled: isDictationEnabled,
    onTranscriptInsert: onDictationTranscriptInsert,
    onTranscriptSend: onDictationTranscriptSend,
    getSurroundingText: getDictationSurroundingText,
    onStartError: handleStartError,
    onTranscribeError: handleTranscribeError,
    onUnsupported: handleUnsupported,
  };

  const {
    abortDictation,
    isDictating,
    isTranscribing,
    canRetryDictation,
    recordingDurationMs,
    retryDictation,
    waveformCanvasRef,
    startDictation,
    stopDictation,
  } = useDictation(dictationOptions);

  React.useEffect(() => {
    restrictedSessionController?.sync({ isDictating, isTranscribing });
  }, [restrictedSessionController, isDictating, isTranscribing]);

  React.useEffect(
    () => () => {
      restrictedSessionController?.fail();
    },
    [restrictedSessionController],
  );

  const stopDictationAndInsert = useEffectEvent(() => {
    stopDictation("insert");
  });
  React.useEffect(() => {
    if (!isComposerInputVisible && isDictating) stopDictationAndInsert();
  }, [isComposerInputVisible, isDictating]);

  const dictationShortcutLabel = useDictationShortcutLabel();

  const restrictedVisiblePhase = restrictedSession.visiblePhase;
  const isVoiceFooterVisible =
    restrictedSession.thread.isShowingFooter && restrictedVisiblePhase != null;
  const isVoiceLayoutActive =
    isComposerInputVisible &&
    (restrictedVisiblePhase != null || isDictating || isTranscribing);
  const isPushToTalkEnabled =
    isComposerInputVisible &&
    dictationAvailability === true &&
    restrictedSession.thread.phase === "inactive";

  usePushToTalkHotkey({
    enabled: isPushToTalkEnabled,
    isDictating,
    isTranscribing,
    startDictation,
    stopDictation,
    shouldHandleDictation,
    ignoreWithin: null,
  });

  const handlePushToTalkStart = () => {
    if (
      !isComposerInputVisible ||
      dictationAvailability !== true ||
      restrictedSession.thread.phase !== "inactive" ||
      isDictating ||
      isTranscribing ||
      isPushToTalkStartingRef.current ||
      (shouldHandleDictation != null && !shouldHandleDictation())
    ) {
      return;
    }
    restrictedSessionController?.start();
    hasStartedPushToTalkRef.current = true;
    isPushToTalkStartingRef.current = true;
    stopRequestedWhileStartingRef.current = false;
    startDictation()
      .then(() => {
        if (hasStartedPushToTalkRef.current) {
          restrictedSessionController?.didStart();
        }
      })
      .finally(() => {
        isPushToTalkStartingRef.current = false;
        if (stopRequestedWhileStartingRef.current) {
          hasStartedPushToTalkRef.current = false;
          stopRequestedWhileStartingRef.current = false;
          stopDictation("insert");
        }
      });
  };
  useNamedKeyboardShortcut(
    "codex-micro-push-to-talk-start",
    handlePushToTalkStart,
    [
      isComposerInputVisible,
      dictationAvailability,
      isDictating,
      isTranscribing,
      restrictedSessionController,
      startDictation,
      stopDictation,
      restrictedSession.thread.phase,
    ],
  );

  const handlePushToTalkStop = () => {
    if (!hasStartedPushToTalkRef.current) return;
    if (isPushToTalkStartingRef.current) {
      stopRequestedWhileStartingRef.current = true;
      return;
    }
    hasStartedPushToTalkRef.current = false;
    if (isDictating) stopDictation("insert");
  };
  useNamedKeyboardShortcut(
    "codex-micro-push-to-talk-stop",
    handlePushToTalkStop,
    [isDictating, stopDictation],
  );

  const isDictationButtonVisible = dictationAvailability !== false;
  const isDictationSupported = dictationAvailability === true;

  return {
    abortDictation,
    canRetryDictation,
    dictationShortcutLabel,
    isDictating,
    isDictationButtonVisible,
    isDictationSupported,
    isTranscribing,
    isVoiceFooterVisible,
    isVoiceLayoutActive,
    recordingDurationMs,
    retryDictation,
    startDictation,
    stopDictation,
    restrictedSession,
    waveformCanvasRef,
  };
}

/** Arguments for {@link isComposerDictationTarget}. */
export type ComposerDictationTargetArgs = {
  composerInput: HTMLElement;
  focusedElement: HTMLElement | null;
  isActiveComposer?: boolean;
};

/**
 * Whether the push-to-talk hotkey should target this composer: true when focus
 * is inside the composer input or not inside any other text field. Thin wrapper
 * over `isComposerFocusedForDictation`; `isActiveComposer` defaults to true for
 * the two-argument composer-body call site.
 */
export function isComposerDictationTarget({
  composerInput,
  focusedElement,
  isActiveComposer = true,
}: ComposerDictationTargetArgs): boolean {
  return isComposerFocusedForDictation({
    composerInput,
    focusedElement,
    isActiveComposer,
  });
}
