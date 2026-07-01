// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// Composer @-mention / skill-mention autocomplete hooks. The composer's
// ProseMirror editor installs one "composer-suggestion-ui" plugin whose state
// tracks the open menu; these hooks subscribe to it (via the controller
// selector) and drive selection through the shared primitives in
// ./mention-autocomplete-internal. The React-Compiler memo cache from the
// source chunk is intentionally not reproduced — the callbacks are plain.

import { useCallback, useRef } from "react";

import { useComposerControllerSelector } from "./use-composer-controller";
import { openComposerReferencedFile } from "../boundaries/onboarding-commons-externals.facade";
import { zo as resolvePluginNavigationTarget } from "../vendor/worktree-new-thread-query-current-bundle";
import {
  applyMentionSelection,
  buildAtMentionSelection,
  closeSuggestionMenu,
  readAtMentionMenuState,
  readSkillMentionMenuState,
  readSuggestionMenuState,
  requestCloseSuggestionMenu,
  suggestionQueryStart,
  type AtMentionActionEvent,
  type AtMentionEntry,
  type AtMentionSuggestion,
  type ComposerController,
  type ProseMirrorEditorState,
  type SkillMentionSuggestion,
  type SuggestionMenuState,
} from "./mention-autocomplete-internal";

export type {
  AtMentionSuggestion,
  ComposerController,
  ProseMirrorEditorState,
  SkillMentionSuggestion,
  SuggestionMenuState,
} from "./mention-autocomplete-internal";

type AtMentionMenuEvent = AtMentionActionEvent | "close";
type SkillMentionMenuEvent = "submit";

// ── useAtMentionAutocomplete ────────────────────────────────────────────────

export interface AtMentionAutocomplete {
  ui: SuggestionMenuState | undefined;
  addMention(entry: AtMentionSuggestion): void;
  closeAutocomplete(query?: string | null): void;
  setSelectedMention(entry: AtMentionSuggestion | null): void;
  handleMentionEvent(event: AtMentionMenuEvent): void;
}

/** @-mention ("Add context") autocomplete menu state + selection handlers. */
export function useAtMentionAutocomplete(
  controller: ComposerController,
): AtMentionAutocomplete {
  const menuState: SuggestionMenuState | undefined =
    useComposerControllerSelector(controller, readAtMentionMenuState);
  const highlightedEntryRef = useRef<AtMentionSuggestion | null>(null);

  const applyEntry = (
    entry: AtMentionSuggestion,
    event: AtMentionActionEvent,
  ): void => {
    if (menuState?.range == null) return;
    void applyMentionSelection(
      buildAtMentionSelection(entry, event),
      {
        queryRange: {
          from: suggestionQueryStart(menuState),
          to: menuState.range.to,
        },
        replacementRange: menuState.range,
      },
      {
        clearReplacementRange: () => controller.clearSuggestion(menuState),
        insertMention: (mention) =>
          (mention as AtMentionEntry).insertMention({
            composerController: controller,
            mentionState: menuState,
          }),
        openSubmenu: (submenu) =>
          controller.setAtMentionSource(submenu, menuState),
        replaceQuery: (query) =>
          controller.completeSuggestionQuery(query, menuState),
      },
    );
  };

  const handleMentionEvent = (event: AtMentionMenuEvent): void => {
    if (event === "complete-query" || event === "insert-mention") {
      if (menuState != null && highlightedEntryRef.current != null) {
        applyEntry(highlightedEntryRef.current, event);
      } else if (event === "insert-mention") {
        closeSuggestionMenu(controller.view);
      }
    }
    highlightedEntryRef.current = null;
  };

  return {
    ui: menuState,
    addMention: (entry) => applyEntry(entry, "insert-mention"),
    closeAutocomplete: (query) => {
      if (requestCloseSuggestionMenu(controller.view, query)) {
        highlightedEntryRef.current = null;
      }
    },
    setSelectedMention: (entry) => {
      highlightedEntryRef.current = entry;
    },
    handleMentionEvent,
  };
}

// ── useSkillMentionAutocomplete ─────────────────────────────────────────────

export interface SkillMentionAutocomplete {
  ui: SuggestionMenuState | undefined;
  addMention(mention: SkillMentionSuggestion): void;
  closeAutocomplete(query?: string | null): void;
  setSelectedMention(mention: SkillMentionSuggestion | null): void;
  handleMentionEvent(event: SkillMentionMenuEvent): void;
}

/** Skill/plugin mention autocomplete: parallel to the @-mention hook, scoped
 *  to the "skill-mention" menu kind; every row resolves to a mention insert. */
export function useSkillMentionAutocomplete(
  controller: ComposerController,
): SkillMentionAutocomplete {
  const menuState: SuggestionMenuState | undefined =
    useComposerControllerSelector(controller, readSkillMentionMenuState);
  const highlightedMentionRef = useRef<SkillMentionSuggestion | null>(null);

  const applyMention = (mention: SkillMentionSuggestion): void => {
    if (menuState?.range == null) return;
    void applyMentionSelection(
      { type: "mention", mention },
      {
        queryRange: {
          from: suggestionQueryStart(menuState),
          to: menuState.range.to,
        },
        replacementRange: menuState.range,
      },
      {
        clearReplacementRange: () => controller.clearSuggestion(menuState),
        insertMention: (candidate) =>
          controller.insertMention(
            candidate as SkillMentionSuggestion,
            menuState,
          ),
        openSubmenu: (submenu) =>
          controller.setAtMentionSource(submenu, menuState),
        replaceQuery: (query) =>
          controller.completeSuggestionQuery(query, menuState),
      },
    );
  };

  const handleMentionEvent = (event: SkillMentionMenuEvent): void => {
    if (event === "submit") {
      const highlighted = highlightedMentionRef.current;
      if (menuState != null && highlighted != null) applyMention(highlighted);
      else closeSuggestionMenu(controller.view);
    }
    highlightedMentionRef.current = null;
  };

  return {
    ui: menuState,
    addMention: applyMention,
    closeAutocomplete: (query) => {
      if (requestCloseSuggestionMenu(controller.view, query)) {
        highlightedMentionRef.current = null;
      }
    },
    setSelectedMention: (mention) => {
      highlightedMentionRef.current = mention;
    },
    handleMentionEvent,
  };
}

// ── useMentionActivationHandler ─────────────────────────────────────────────

/** A mention the user activated (clicked/entered) from a rendered node. */
export type MentionActivationTarget =
  | {
      kind: "file";
      path: string;
      fsPath?: string | null;
      isFolder?: boolean;
      startLine?: number | null;
    }
  | { kind: "skill"; path: string }
  | { kind: "plugin"; path: string }
  | { kind: "app" }
  | { kind: "mcp-resource" }
  | { kind: "chatgpt-conversation" };

export interface MentionActivationHandlerOptions {
  scope: unknown;
  navigate: (destination: unknown) => void;
  openFile: (input: unknown) => void;
  hostConfig: unknown;
  hostId: string;
  cwd: string | null;
}

/** Build the composer input's `onMentionActivate` handler: open the referenced
 *  file/skill or navigate to the plugin route; returns whether it was handled. */
export function useMentionActivationHandler({
  scope,
  navigate,
  openFile,
  hostConfig,
  hostId,
  cwd,
}: MentionActivationHandlerOptions): (
  activation: MentionActivationTarget,
) => boolean {
  return useCallback(
    (activation: MentionActivationTarget): boolean => {
      switch (activation.kind) {
        case "file": {
          const filePath = activation.fsPath || activation.path;
          if (filePath.length === 0) return false;
          openComposerReferencedFile({
            scope,
            path: filePath,
            cwd,
            hostConfig,
            hostId,
            openFile,
            openInSidePanel: activation.isFolder !== true,
            ...(activation.isFolder === true ? { target: "fileManager" } : {}),
          });
          return true;
        }
        case "skill": {
          if (activation.path.length === 0) return false;
          openComposerReferencedFile({
            scope,
            path: activation.path,
            cwd: null,
            hostConfig,
            hostId,
            openFile,
            openInSidePanel: true,
          });
          return true;
        }
        case "plugin": {
          const pluginTarget = resolvePluginNavigationTarget(activation.path, {
            hostId,
          });
          if (pluginTarget == null) return false;
          navigate(pluginTarget);
          return true;
        }
        case "app":
        case "mcp-resource":
        case "chatgpt-conversation":
          return false;
      }
    },
    [scope, navigate, openFile, hostConfig, hostId, cwd],
  );
}

// ── hasActiveMentionMenu ────────────────────────────────────────────────────

/** Whether any composer suggestion menu is open for the given editor state. */
export function hasActiveMentionMenu(
  proseMirrorEditorState: ProseMirrorEditorState,
): boolean {
  return readSuggestionMenuState(proseMirrorEditorState)?.active === true;
}
