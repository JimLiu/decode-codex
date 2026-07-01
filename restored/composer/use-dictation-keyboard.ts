// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Push-to-talk dictation hook: wires the global dictation hotkey + in-app start/stop host messages.
import { useRef } from "react";
import { useDictationCommandAccelerator } from "./composer-command-keymap";
import {
  appMessenger,
  useFeatureGate,
  useHostMessageSubscription,
  usePushToTalkHotkey,
} from "../boundaries/onboarding-commons-externals.facade";

const DEFAULT_IGNORE_WITHIN_SELECTOR = "[data-codex-terminal]";
const DICTATION_HOLD_GATE = "1244621283";

export type DictationSessionMessage = { sessionId: string };

export type UseDictationKeyboardOptions = {
  enabled: boolean;
  isDictating: boolean;
  isTranscribing: boolean;
  startDictation: () => Promise<unknown>;
  stopDictation: (reason: "insert") => void;
  keyboardEventTarget?: Window | null;
  shouldHandleDictation?: () => boolean;
  ignoreWithin?: string;
};

export function initUseDictationKeyboardChunk(): void {}

export function useDictationKeyboard({
  enabled,
  isDictating,
  isTranscribing,
  startDictation,
  stopDictation,
  keyboardEventTarget,
  shouldHandleDictation,
  ignoreWithin,
}: UseDictationKeyboardOptions): void {
  const ignoreWithinSelector = ignoreWithin ?? DEFAULT_IGNORE_WITHIN_SELECTOR;
  const isHoldGateEnabled = useFeatureGate(DICTATION_HOLD_GATE);
  const accelerator = useDictationCommandAccelerator();
  const sessionIdRef = useRef<string | null>(null);
  const isHeldRef = useRef(false);
  const isStartingRef = useRef(false);

  const beginDictation = () => {
    isStartingRef.current = true;
    startDictation().finally(() => {
      isStartingRef.current = false;
    });
  };

  const canHandleDictation = () =>
    !enabled ||
    isTranscribing ||
    (ignoreWithinSelector != null &&
      isWithinIgnoredElement(keyboardEventTarget, ignoreWithinSelector))
      ? false
      : shouldHandleDictation == null || shouldHandleDictation();

  const handleGlobalStart = (message: DictationSessionMessage) => {
    if (!isHoldGateEnabled || !canHandleDictation()) return;
    sessionIdRef.current = message.sessionId;
    appMessenger.dispatchMessage("global-dictation-in-app-started", {
      sessionId: message.sessionId,
    });
    if (!(isDictating || isStartingRef.current)) beginDictation();
  };
  useHostMessageSubscription(
    "global-dictation-in-app-start",
    handleGlobalStart,
    [],
  );

  const handleGlobalStop = (message: DictationSessionMessage) => {
    if (!isHoldGateEnabled || sessionIdRef.current !== message.sessionId)
      return;
    sessionIdRef.current = null;
    stopDictation("insert");
  };
  useHostMessageSubscription(
    "global-dictation-in-app-stop",
    handleGlobalStop,
    [],
  );

  const acceleratorLabel = accelerator ?? "";
  const isHotkeyEnabled = enabled && accelerator != null;

  const onKeyDown = (event: KeyboardEvent) => {
    event.preventDefault();
    event.stopPropagation();
    if (!canHandleDictation() || isDictating || isStartingRef.current) {
      isHeldRef.current = false;
      return;
    }
    isHeldRef.current = true;
    beginDictation();
  };

  const onKeyUp = (event: KeyboardEvent) => {
    event.preventDefault();
    event.stopPropagation();
    if (isHeldRef.current && sessionIdRef.current == null) {
      isHeldRef.current = false;
      stopDictation("insert");
    }
  };

  usePushToTalkHotkey({
    accelerator: acceleratorLabel,
    enabled: isHotkeyEnabled,
    ignoreWithin: ignoreWithinSelector ?? undefined,
    keyboardEventTarget,
    onKeyDown,
    onKeyUp,
  });
}

function isWithinIgnoredElement(
  eventTarget: Window | null | undefined,
  selector: string,
): boolean {
  const ownerDocument =
    eventTarget?.document ??
    (typeof window === "undefined" ? null : window.document);
  if (ownerDocument == null) return false;
  const view = ownerDocument.defaultView;
  const activeElement = ownerDocument.activeElement;
  return (
    view != null &&
    activeElement instanceof view.Element &&
    activeElement.closest(selector) != null
  );
}
