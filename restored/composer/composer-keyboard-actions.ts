// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// Pure keyboard-intent resolvers for the composer. `resolveEscapeAction` maps the
// Escape key to an abort/stop/focus intent based on dictation, in-progress turn,
// and focus state; `resolveComposerKeyAction` handles the Backspace/Escape/Tab
// keymap entries (plan-mode exit, mention-menu escape, artifact/plan-mode toggle).

export type ComposerCollaborationModeSelection = "default" | "plan" | null;

export type ComposerEscapeAction =
  | "abort-dictation"
  | "stop-turn"
  | "confirm-stop-turn"
  | "focus-composer"
  | null;

interface StopFromEscapeInput {
  followUpType: "local" | "cloud" | undefined;
  isResponseInProgress: boolean;
  canStopFromEscape: boolean;
  isComposerFocused: boolean;
  hasActiveMentionMenu: boolean;
}

/** Whether pressing Escape should target the in-progress turn (stop/confirm). */
function canStopTurnOnEscape({
  followUpType,
  isResponseInProgress,
  canStopFromEscape,
  isComposerFocused,
  hasActiveMentionMenu,
}: StopFromEscapeInput): boolean {
  return (
    (followUpType === "local" || followUpType === "cloud") &&
    isResponseInProgress &&
    canStopFromEscape &&
    isComposerFocused &&
    !hasActiveMentionMenu
  );
}

export interface ResolveEscapeActionInput {
  isDictating: boolean;
  restrictedSessionPhase?: string | null;
  followUpType: "local" | "cloud" | undefined;
  isResponseInProgress: boolean;
  canStopFromEscape?: boolean;
  isComposerFocused: boolean;
  hasFocusedComposer?: boolean;
  hasActiveMentionMenu: boolean;
  isTerminalTarget?: boolean;
  hasActiveApprovalSurface?: boolean;
  isStopTurnConfirmationVisible: boolean;
}

/**
 * Resolve what an Escape keypress should do: abort active dictation, stop or
 * confirm-stop the running turn, refocus the composer, or nothing.
 */
export function resolveEscapeAction({
  isDictating,
  followUpType,
  isResponseInProgress,
  canStopFromEscape = false,
  isComposerFocused,
  hasFocusedComposer = false,
  hasActiveMentionMenu,
  isTerminalTarget = false,
  hasActiveApprovalSurface = false,
  isStopTurnConfirmationVisible,
}: ResolveEscapeActionInput): ComposerEscapeAction {
  if (isDictating) return "abort-dictation";
  if (
    canStopTurnOnEscape({
      followUpType,
      isResponseInProgress,
      canStopFromEscape,
      isComposerFocused,
      hasActiveMentionMenu,
    })
  ) {
    return isStopTurnConfirmationVisible ? "stop-turn" : "confirm-stop-turn";
  }
  if (hasFocusedComposer || isTerminalTarget || hasActiveApprovalSurface) {
    return null;
  }
  return "focus-composer";
}

interface TogglePlanModeInput {
  hasPlanMode: boolean;
  hasDefaultMode: boolean;
  isPlanMode: boolean;
  setSelectedMode: (mode: ComposerCollaborationModeSelection) => void;
}

/** Shift+Tab cycles plan mode on/off; returns whether it consumed the key. */
function togglePlanModeFromKey({
  hasPlanMode,
  hasDefaultMode,
  isPlanMode,
  setSelectedMode,
}: TogglePlanModeInput): boolean {
  if (!hasPlanMode) return false;
  if (isPlanMode) {
    setSelectedMode(hasDefaultMode ? "default" : null);
    return true;
  }
  setSelectedMode("plan");
  return true;
}

export interface ResolveComposerKeyActionInput {
  event: KeyboardEvent;
  isComposerFocused: boolean;
  hasActiveMentionMenu: boolean;
  activateArtifactPluginSuggestion?: (() => boolean) | undefined;
  hasPlanMode: boolean;
  hasDefaultMode: boolean;
  isPlanMode: boolean;
  isSelectionAtStart?: boolean;
  setSelectedMode: (mode: ComposerCollaborationModeSelection) => void;
  handleEscape?: () => void;
}

/**
 * Handle the Backspace/Escape/Tab keymap entries while the composer is focused:
 * Backspace at the start of an empty plan-mode line exits plan mode; Escape
 * closes the composer (unless a mention menu is open); Shift+Tab activates an
 * artifact-plugin suggestion or toggles plan mode. Returns whether the key was
 * consumed.
 */
export function resolveComposerKeyAction({
  event,
  isComposerFocused,
  hasActiveMentionMenu,
  activateArtifactPluginSuggestion,
  hasPlanMode,
  hasDefaultMode,
  isPlanMode,
  isSelectionAtStart = false,
  setSelectedMode,
  handleEscape,
}: ResolveComposerKeyActionInput): boolean {
  if (!isComposerFocused) return false;
  const hasNoModifier =
    !event.metaKey && !event.ctrlKey && !event.altKey && !event.shiftKey;

  if (
    event.key === "Backspace" &&
    hasNoModifier &&
    isPlanMode &&
    isSelectionAtStart
  ) {
    event.preventDefault();
    event.stopPropagation();
    setSelectedMode(hasDefaultMode ? "default" : null);
    return true;
  }

  if (event.key === "Escape" && hasNoModifier) {
    if (hasActiveMentionMenu) return false;
    event.preventDefault();
    event.stopPropagation();
    handleEscape?.();
    return true;
  }

  if (
    event.key === "Tab" &&
    event.shiftKey &&
    !event.metaKey &&
    !event.ctrlKey &&
    !event.altKey &&
    (activateArtifactPluginSuggestion?.() ||
      togglePlanModeFromKey({
        hasPlanMode,
        hasDefaultMode,
        isPlanMode,
        setSelectedMode,
      }))
  ) {
    event.preventDefault();
    event.stopPropagation();
    return true;
  }

  return false;
}
