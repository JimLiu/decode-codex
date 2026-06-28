// Restored from ref/webview/assets/composer-view-state-BolUCsy-.js
import { appScopeO as useComposerScopeStore } from "../../boundaries/app-scope";
import { produceImmutableUpdate } from "../../boundaries/thread-context-inputs.facade";
import { uuidV4 } from "../../utils/uuid-v4";
import { composerPromptScope } from "../prompt-text";
import {
  queuedSelectedTextByConversationIdState,
  setPromptText,
  updateComposerViewState,
} from "./prompt-drafts";
import { composerAutoContextEnabledSignal } from "./default-state";
import type {
  ComposerViewState,
  McpAppModelContextAttachment,
  ScopeStore,
} from "./types";
export function resetComposerViewState(scopeStore: ScopeStore): void {
  setPromptText(scopeStore, "");
  updateComposerViewState(scopeStore, (state) => {
    state.pendingThreadGoalObjective = null;
    state.aeonStartTarget = null;
    state.imageAttachments = [];
    state.appshotContexts = [];
    state.fileAttachments = [];
    state.pastedTextAttachments = [];
    state.addedFiles = [];
    state.commentAttachments = [];
    state.mcpAppModelContextAttachments = [];
    state.selectedTextAttachments = [];
    state.pullRequestChecks = [];
    state.pullRequestMergeConflict = null;
  });
}
export function updateComposerViewStateField<
  Key extends keyof ComposerViewState,
>(
  scopeStore: ScopeStore,
  key: Key,
  valueOrUpdater:
    | ComposerViewState[Key]
    | ((value: ComposerViewState[Key]) => ComposerViewState[Key]),
): void {
  updateComposerViewState(scopeStore, (state) => {
    state[key] =
      typeof valueOrUpdater === "function"
        ? (
            valueOrUpdater as (
              value: ComposerViewState[Key],
            ) => ComposerViewState[Key]
          )(state[key])
        : valueOrUpdater;
  });
}
export function setComposerAutoContextEnabled(
  scopeStore: ScopeStore,
  enabled: boolean,
): void {
  scopeStore.set(composerAutoContextEnabledSignal, enabled);
  updateComposerViewState(scopeStore, (state) => {
    state.isAutoContextOn = enabled;
  });
}
export function addSelectedTextAttachment(
  scopeStore: ScopeStore,
  text: string,
  source?: unknown,
): void {
  const trimmedText = text.trim();
  if (trimmedText.length === 0) return;
  updateComposerViewState(scopeStore, (state) => {
    state.selectedTextAttachments.push({
      id: uuidV4(),
      text: source == null ? trimmedText : text,
      ...(source == null
        ? {}
        : {
            source,
          }),
    });
  });
}
export function queueLocalSelectedTextAttachment(
  scopeStore: ScopeStore,
  conversationId: string,
  text: string,
): void {
  const trimmedText = text.trim();
  if (trimmedText.length === 0) return;
  scopeStore.set(
    queuedSelectedTextByConversationIdState,
    conversationId,
    (queuedSelections: unknown[]) => [
      ...queuedSelections,
      {
        id: uuidV4(),
        text: trimmedText,
      },
    ],
  );
}
export function useAddLocalSelectedTextAttachment(conversationId: string) {
  const scopeStore = useComposerScopeStore(composerPromptScope) as ScopeStore;
  return (text: string) => {
    if (
      scopeStore.value.kind !== "local" ||
      scopeStore.value.conversationId !== conversationId
    ) {
      return;
    }
    addSelectedTextAttachment(scopeStore, text);
  };
}
export function useUpdateLocalMcpAppModelContextAttachment(
  conversationId: string,
) {
  const scopeStore = useComposerScopeStore(composerPromptScope) as ScopeStore;
  return (attachment: McpAppModelContextAttachment) => {
    if (
      scopeStore.value.kind !== "local" ||
      scopeStore.value.conversationId !== conversationId
    ) {
      return;
    }
    updateMcpAppModelContextAttachment(scopeStore, attachment);
  };
}
export function updateMcpAppModelContextAttachment(
  scopeStore: ScopeStore,
  attachment: McpAppModelContextAttachment,
): void {
  updateComposerViewState(scopeStore, (state) => {
    const attachmentIndex = state.mcpAppModelContextAttachments.findIndex(
      (item) => item.id === attachment.id,
    );
    const trimmedText = attachment.text?.trim() ?? "";
    if (trimmedText.length === 0 && attachment.imageAttachments.length === 0) {
      if (attachmentIndex !== -1) {
        state.mcpAppModelContextAttachments.splice(attachmentIndex, 1);
      }
      return;
    }
    const nextAttachment = {
      ...attachment,
      text: trimmedText.length > 0 ? trimmedText : null,
    };
    if (attachmentIndex === -1) {
      state.mcpAppModelContextAttachments.push(nextAttachment);
      return;
    }
    state.mcpAppModelContextAttachments[attachmentIndex] = nextAttachment;
  });
}
export function produceComposerViewState(
  state: ComposerViewState,
  updater: (state: ComposerViewState) => void,
): ComposerViewState {
  return produceImmutableUpdate(state, updater);
}
