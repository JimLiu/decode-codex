// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// Conversation rendering helpers shared by local conversation thread modules.
import { getPathBasename as getPathBasenameRaw } from "../../runtime/path-basename-runtime";

import { initConversationPromptContextRuntime } from "../../runtime/conversation-prompt-context-runtime";
import { initArtifactPreviewRuntime as initThreadFindResourcePreviewRuntime } from "../../runtime/artifact-preview-runtime";

import { isAbsoluteOrWindowsPath as isAbsoluteOrWindowsPathValue } from "../../boundaries/src-l0hb-mz-p";
import {
  P as recordForkedConversationSourceRaw,
  cs as focusThreadSourceFrameRaw,
  ho as resolveServiceTierForModelRaw,
  qo as diffSourceSignal,
  u as localConversationMessages,
  Mv as isRenderableConversationTurnRaw,
  fh as initGitActionDirectiveRuntime,
  ph as parseGitActionDirectivesRaw,
} from "../../vendor/projects-app-shared-runtime";
import {
  it as initConversationTurnRendererChunkRaw,
  Mt as registerContentSearchRevealHandlerRaw,
  Nt as scrollContentSearchItemIntoViewRaw,
  Pt as revealContentSearchItemElementRaw,
  rt as ConversationTurnRenderer,
  ct as updateCollapsedTurnsByConversationRaw,
} from "../../vendor/profile-page-runtime";

export type RenderableConversationTurnOptions = {
  isBackgroundSubagentsEnabled?: boolean;
};

export type GitActionDirective = {
  branch?: string;
  cwd?: string;
  isDraft?: boolean;
  type: "commit" | "create-branch" | "create-pr" | "push" | "stage";
  url?: string;
};

export type ForkedConversationSource = {
  sourceConversationId: string;
  targetConversationId: string;
};

export type CollapsedTurnsUpdate = {
  collapsed: boolean;
  conversationId: string;
  current: unknown;
  turnId: string;
};

export type ContentSearchRevealRequest = {
  conversationId: string;
  itemId: string;
  turnKey: string;
};

export type ContentSearchRevealHandler = {
  revealItem(request: ContentSearchRevealRequest): Promise<void> | void;
};

export {
  ConversationTurnRenderer,
  diffSourceSignal,
  localConversationMessages,
};

export function initThreadFindPreviewRuntime(): void {
  initConversationPromptContextRuntime();
  initGitActionDirectiveRuntime();
  initThreadFindResourcePreviewRuntime();
}

export function initConversationTurnRendererRuntime(): void {
  initConversationTurnRendererChunkRaw();
}

export function isRenderableConversationTurn(
  turn: unknown,
  requests: readonly unknown[],
  options: RenderableConversationTurnOptions,
): boolean {
  return isRenderableConversationTurnRaw(turn, requests, options);
}

export function normalizeMarkdownPlainText(text: string): string {
  let current = text;
  for (;;) {
    const next = current
      .replace(/^\*\*(.+)\*\*$/u, "$1")
      .replace(/^__(.+)__$/u, "$1")
      .replace(/^\*(.+)\*$/u, "$1")
      .replace(/^_(.+)_$/u, "$1")
      .replace(/^`(.+)`$/u, "$1")
      .trim();
    if (next === current) return current;
    current = next;
  }
}

export function getPathBasename(path: string): string {
  return getPathBasenameRaw(path);
}

export function isAbsoluteOrWindowsPath(path: string): boolean {
  return isAbsoluteOrWindowsPathValue(path);
}

export function parseGitActionDirectives(
  assistantContent: string | null,
): GitActionDirective[] {
  return parseGitActionDirectivesRaw(
    assistantContent ?? "",
  ) as GitActionDirective[];
}

export function recordForkedConversationSource(
  scope: unknown,
  source: ForkedConversationSource,
): void {
  recordForkedConversationSourceRaw(scope, source);
}

export function focusThreadSourceFrame(
  scope: unknown,
  frameId: string,
  contextId: string,
): void {
  focusThreadSourceFrameRaw(scope, frameId, contextId);
}

export function resolveServiceTierForModel(
  scope: unknown,
  hostId: string,
  model: unknown,
): Promise<unknown> {
  return resolveServiceTierForModelRaw(
    scope,
    hostId,
    model,
  ) as Promise<unknown>;
}

export function waitForThreadLayoutTick(): Promise<void> {
  if (
    typeof window === "undefined" ||
    typeof window.requestAnimationFrame !== "function"
  ) {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => resolve());
    });
  });
}

export function registerContentSearchRevealHandler(
  scope: unknown,
  conversationId: string,
  handler: ContentSearchRevealHandler,
): () => void {
  return registerContentSearchRevealHandlerRaw(
    scope,
    conversationId,
    handler,
  ) as () => void;
}

export function scrollContentSearchItemIntoView(
  itemId: string,
  behavior: ScrollBehavior,
): boolean {
  return scrollContentSearchItemIntoViewRaw(itemId, behavior);
}

export function revealContentSearchItemElement(
  itemId: string,
  behavior: ScrollBehavior,
): Promise<void> | void {
  return revealContentSearchItemElementRaw(
    itemId,
    behavior,
  ) as Promise<void> | void;
}

export function updateCollapsedTurnsByConversation(
  update: CollapsedTurnsUpdate,
): unknown {
  return updateCollapsedTurnsByConversationRaw(update);
}
