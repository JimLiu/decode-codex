// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// Internal plumbing for the composer mention autocomplete: the ProseMirror /
// controller surface types, the "composer-suggestion-ui" plugin-state readers,
// and the shared `applyMentionSelection` primitive that the @-mention and
// skill-mention hooks (see ./mention-autocomplete) build on.

import { lo as suggestionMenuPluginKey } from "../vendor/worktree-new-thread-orchestrator-current-bundle";

// ── ProseMirror / controller surface (minimal local interfaces) ─────────────

interface ProseMirrorTransaction {
  setMeta(key: unknown, value: unknown): ProseMirrorTransaction;
}
/** The subset of ProseMirror's `EditorState` this subsystem reads. */
export interface ProseMirrorEditorState {
  readonly tr: ProseMirrorTransaction;
}
export interface ProseMirrorEditorView {
  readonly state: ProseMirrorEditorState;
  dispatch(transaction: ProseMirrorTransaction): void;
}
interface SuggestionMenuPluginKey {
  getState(state: ProseMirrorEditorState): SuggestionMenuState | undefined;
}

/** Composer controller methods the mention hooks call. */
export interface ComposerController {
  readonly view: ProseMirrorEditorView;
  clearSuggestion(menuState: SuggestionMenuState): void;
  completeSuggestionQuery(query: string, menuState: SuggestionMenuState): void;
  setAtMentionSource(source: unknown, menuState: SuggestionMenuState): void;
  insertMention(
    mention: SkillMentionSuggestion,
    menuState: SuggestionMenuState,
  ): void;
}

// ── Suggestion plugin state & items ─────────────────────────────────────────

export interface DocumentRange {
  from: number;
  to: number;
}
export type SuggestionMenuKind =
  | "at-mention"
  | "skill-mention"
  | "slash-command";
/** `typed` = user typed the trigger char (so it sits before the query). */
export type SuggestionMenuActivation = "typed" | "synthetic";

/** State the suggestion plugin publishes for the currently-open menu. */
export interface SuggestionMenuState {
  active: boolean;
  activation: SuggestionMenuActivation | null;
  anchorPos: number | null;
  dismissedMatch: unknown;
  kind: SuggestionMenuKind | null;
  query: string;
  range: DocumentRange | null;
  source: unknown;
  trigger: string | null;
}

/** A concrete @-mention entry that knows how to insert itself. */
export interface AtMentionEntry {
  type: "mention";
  completionQuery?: string | null;
  insertMention(context: {
    composerController: ComposerController;
    mentionState: SuggestionMenuState;
  }): void;
}
export type AtMentionSuggestion =
  | AtMentionEntry
  | { type: "action"; action: () => void | Promise<void> }
  | { type: "submenu"; submenu: unknown };
/** Opaque skill/plugin mention descriptor built by the suggestion list. */
export type SkillMentionSuggestion = { readonly [field: string]: unknown };

export type MentionSelection =
  | { type: "action"; run: () => void | Promise<void> }
  | { type: "mention"; mention: AtMentionEntry | SkillMentionSuggestion }
  | { type: "query-completion"; query: string }
  | { type: "submenu"; submenu: unknown };
export interface MentionSelectionHandlers {
  clearReplacementRange(range: DocumentRange): void;
  insertMention(
    mention: AtMentionEntry | SkillMentionSuggestion,
    range: DocumentRange,
  ): void;
  replaceQuery(query: string, range: DocumentRange): void;
  openSubmenu(submenu: unknown): void;
}
export type AtMentionActionEvent = "complete-query" | "insert-mention";

// ── Suggestion-plugin state readers ─────────────────────────────────────────

const typedSuggestionMenuKey =
  suggestionMenuPluginKey as unknown as SuggestionMenuPluginKey;

export function readSuggestionMenuState(
  state: ProseMirrorEditorState,
): SuggestionMenuState | undefined {
  return typedSuggestionMenuKey.getState(state);
}
export function readAtMentionMenuState(
  controller: ComposerController,
): SuggestionMenuState | undefined {
  const menuState = readSuggestionMenuState(controller.view.state);
  return menuState?.kind === "at-mention" ? menuState : undefined;
}
export function readSkillMentionMenuState(
  controller: ComposerController,
): SuggestionMenuState | undefined {
  const menuState = readSuggestionMenuState(controller.view.state);
  return menuState?.kind === "skill-mention" ? menuState : undefined;
}

// ── Menu dismissal & selection primitives ───────────────────────────────────

/** Close the menu outright (after inserting with no live match). */
export function closeSuggestionMenu(view: ProseMirrorEditorView): void {
  view.dispatch(
    view.state.tr.setMeta(suggestionMenuPluginKey, { type: "close" }),
  );
}

/** Dismiss the menu but keep the typed text; only when the query still matches. */
export function requestCloseSuggestionMenu(
  view: ProseMirrorEditorView,
  query: string | null | undefined,
): boolean {
  const menuState = readSuggestionMenuState(view.state);
  if (
    menuState?.active !== true ||
    (query != null && !menuState.query.startsWith(query))
  ) {
    return false;
  }
  view.dispatch(
    view.state.tr.setMeta(suggestionMenuPluginKey, { type: "dismiss" }),
  );
  return true;
}

/** Apply a resolved selection descriptor through the provided handlers. */
export async function applyMentionSelection(
  selection: MentionSelection,
  ranges: { queryRange: DocumentRange; replacementRange: DocumentRange },
  handlers: MentionSelectionHandlers,
): Promise<void> {
  switch (selection.type) {
    case "action":
      handlers.clearReplacementRange(ranges.replacementRange);
      await selection.run();
      return;
    case "mention":
      handlers.insertMention(selection.mention, ranges.replacementRange);
      return;
    case "query-completion":
      handlers.replaceQuery(selection.query, ranges.queryRange);
      return;
    case "submenu":
      handlers.openSubmenu(selection.submenu);
      return;
  }
}

/** Map an @-mention row + event to the concrete selection to apply. */
export function buildAtMentionSelection(
  entry: AtMentionSuggestion,
  event: AtMentionActionEvent,
): MentionSelection {
  switch (entry.type) {
    case "action":
      return { type: "action", run: entry.action };
    case "submenu":
      return { type: "submenu", submenu: entry.submenu };
    case "mention":
      return event === "complete-query" && entry.completionQuery != null
        ? { type: "query-completion", query: entry.completionQuery }
        : { type: "mention", mention: entry };
  }
}

/** Typed-trigger offset: skip the trigger char only for `typed` menus. */
export function suggestionQueryStart(menuState: SuggestionMenuState): number {
  const range = menuState.range;
  if (range == null) return 0;
  return menuState.activation === "typed" ? range.from + 1 : range.from;
}
