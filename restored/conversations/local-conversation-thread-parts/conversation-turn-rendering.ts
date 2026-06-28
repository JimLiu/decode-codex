// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Semantic renderability and search-format helpers for local conversation turns.
import {
  isRenderableConversationTurn,
  normalizeMarkdownPlainText,
  type RenderableConversationTurnOptions,
} from "./conversation-content-runtime";
import {
  initLocalConversationArtifactRuntime,
  renderLocalConversationTurn,
} from "./local-conversation-artifact-runtime";

export type LocalRenderableConversationTurnOptions = {
  isBackgroundSubagentsEnabled: boolean;
} & RenderableConversationTurnOptions;

export function isRenderableLocalConversationTurn(
  turn: unknown,
  requests: readonly unknown[],
  options: LocalRenderableConversationTurnOptions,
): boolean {
  return isRenderableConversationTurn(turn, requests, options);
}

export function formatLocalConversationTurnForSearch<TItem = unknown>(
  turn: unknown,
  requests: readonly unknown[],
  options: LocalRenderableConversationTurnOptions,
): { items: TItem[] } {
  return renderLocalConversationTurn<{ items: TItem[] }>(
    turn,
    requests,
    options,
  );
}

export function normalizeConversationSearchMarkdown(text: string): string {
  return normalizeMarkdownPlainText(text);
}

export function initLocalConversationTurnRenderingRuntime(): void {
  initLocalConversationArtifactRuntime();
}
