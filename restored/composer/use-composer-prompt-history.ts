// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// Prompt-history navigation for the composer: ArrowUp/ArrowDown at the end of an
// empty input cycles through the persisted per-conversation prompt history, and
// `appendPromptToHistory` records a sent prompt. The current selection is cleared
// whenever the editor text diverges from the selected history entry.
import { useEffect, useRef } from "react";

import {
  DEFAULT_PROMPT_HISTORY_KEY,
  appendPromptToHistoryList,
  isPromptDraftTextValue,
  registerComposerArrowKeymap,
  selectPromptHistoryForConversation,
  subscribeComposerEditorUpdates,
  useComposerPromptHistoryStore,
} from "../boundaries/onboarding-commons-externals.facade";

interface PromptHistoryComposerController {
  view: unknown;
  getPersistedText: () => string;
  setText: (text: string) => void;
  setPromptText: (text: unknown) => void;
  focus: () => void;
  isCursorAtEnd: () => boolean;
}

type HistoryNavigationDirection = "up" | "down";

function hasModifierKey(event: KeyboardEvent): boolean {
  return event.altKey || event.ctrlKey || event.metaKey || event.shiftKey;
}

export interface ComposerPromptHistory {
  appendPromptToHistory: (prompt: unknown) => void;
  resetHistorySelection: () => void;
}

export function useComposerPromptHistory(
  composerController: PromptHistoryComposerController,
  conversationId: string | null,
  editMostRecentMessage?: () => boolean,
): ComposerPromptHistory {
  const [historyState, setHistoryState] = useComposerPromptHistoryStore();
  const conversationKey = conversationId ?? DEFAULT_PROMPT_HISTORY_KEY;
  const history: string[] = selectPromptHistoryForConversation(
    historyState,
    conversationKey,
  );
  const selectedIndexRef = useRef<number | null>(null);

  useEffect(
    () =>
      subscribeComposerEditorUpdates(composerController.view, () => {
        const selectedIndex = selectedIndexRef.current;
        if (
          selectedIndex != null &&
          history[selectedIndex] !== composerController.getPersistedText()
        ) {
          selectedIndexRef.current = null;
        }
      }),
    [composerController, history],
  );

  useEffect(() => {
    const applyEntry = (index: number) => {
      const entry = history[index];
      if (entry == null) return;
      selectedIndexRef.current = index;
      if (isPromptDraftTextValue(entry))
        composerController.setPromptText(entry);
      else composerController.setText(entry);
      composerController.focus();
    };

    const navigate = (direction: HistoryNavigationDirection): boolean => {
      if (history.length === 0) return false;
      const current = selectedIndexRef.current;
      if (current == null) {
        if (
          composerController.getPersistedText().trim().length > 0 ||
          direction === "down"
        ) {
          return false;
        }
        applyEntry(history.length - 1);
        return true;
      }
      if (direction === "down" && current === history.length - 1) {
        selectedIndexRef.current = null;
        composerController.setText("");
        composerController.focus();
        return true;
      }
      applyEntry(
        (current + (direction === "up" ? -1 : 1) + history.length) %
          history.length,
      );
      return true;
    };

    const isPlainArrow = (event: KeyboardEvent): boolean =>
      !hasModifierKey(event) && composerController.isCursorAtEnd();

    return registerComposerArrowKeymap(composerController.view, {
      ArrowUp: (event: KeyboardEvent) => {
        if (!isPlainArrow(event)) return false;
        if (editMostRecentMessage?.()) {
          event.preventDefault();
          event.stopPropagation();
          return true;
        }
        const handled = navigate("up");
        if (handled) {
          event.preventDefault();
          event.stopPropagation();
        }
        return handled;
      },
      ArrowDown: (event: KeyboardEvent) => {
        if (!isPlainArrow(event)) return false;
        const handled = navigate("down");
        if (handled) {
          event.preventDefault();
          event.stopPropagation();
        }
        return handled;
      },
    });
  }, [composerController, history, editMostRecentMessage]);

  const appendPromptToHistory = (prompt: unknown) => {
    setHistoryState(
      appendPromptToHistoryList(historyState, conversationKey, prompt),
    );
  };
  const resetHistorySelection = () => {
    selectedIndexRef.current = null;
  };

  return { appendPromptToHistory, resetHistorySelection };
}
