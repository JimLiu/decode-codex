// Restored from ref/webview/assets/composer-view-state-BolUCsy-.js
import {
  appScopeC as createScopedComputedAtom,
  appScopeG as createScopedWritableAtom,
  appScopeT as appScopeRoot,
  appScopeUnderscore as createScopedAtomFamily,
} from "../../boundaries/app-scope";
import { useHostConfigYt as dedupeFileAttachments } from "../../boundaries/use-host-config.facade";
import {
  getPersistedAtomValue,
  setPersistedAtomItem,
} from "../../utils/persisted-atom-store";
import { createPersistedSignal } from "../../runtime/persisted-signal";
import {
  composerPromptScope,
  getPromptLocationKey,
  hasRestorableMentionOrPathLink,
} from "../prompt-text";
import { defaultComposerViewState } from "./default-state";
import type { ComposerViewState, ScopeStore } from "./types";
const COMPOSER_PROMPT_DRAFTS_KEY = "composer-prompt-drafts-v1";
const EMPTY_PROMPT_DRAFTS: Record<string, string> = {};
export const promptDraftsSignal = createPersistedSignal(
  COMPOSER_PROMPT_DRAFTS_KEY,
  EMPTY_PROMPT_DRAFTS,
);
export const pendingLocalComposerStateByConversationIdState =
  createScopedAtomFamily(appScopeRoot, () => undefined);
export const queuedSelectedTextByConversationIdState = createScopedAtomFamily(
  appScopeRoot,
  () => [],
);
export const promptDraftsState = createScopedComputedAtom(
  appScopeRoot,
  ({ get }: { get: (...args: unknown[]) => any }) =>
    get(promptDraftsSignal) ??
    getPersistedAtomValue(COMPOSER_PROMPT_DRAFTS_KEY, EMPTY_PROMPT_DRAFTS),
);
export const restoredLocalComposerStateState = createScopedWritableAtom(
  composerPromptScope,
  ({ scope }: { scope: ScopeStore }): ComposerViewState | undefined => {
    if (scope.value.kind !== "local") return;
    const pendingState = scope.get(
      pendingLocalComposerStateByConversationIdState,
      scope.value.conversationId,
    ) as ComposerViewState | undefined;
    return pendingState == null ? undefined : cloneComposerState(pendingState);
  },
  {
    onMount(
      setValue: (value: ComposerViewState | undefined) => void,
      scopeStore: ScopeStore,
    ) {
      if (scopeStore.value.kind !== "local") return;
      const { conversationId } = scopeStore.value;
      const pendingState = scopeStore.get(
        pendingLocalComposerStateByConversationIdState,
        conversationId,
      ) as ComposerViewState | undefined;
      if (pendingState != null) {
        setValue(cloneComposerState(pendingState));
        persistPromptDraft(scopeStore, pendingState.prompt ?? "");
        scopeStore.set(
          pendingLocalComposerStateByConversationIdState,
          conversationId,
          undefined,
        );
      }
      return scopeStore.watch(({ get }) => {
        const queuedSelections = get(
          queuedSelectedTextByConversationIdState,
          conversationId,
        ) as unknown[];
        if (queuedSelections.length !== 0) {
          updateComposerViewState(scopeStore, (state) => {
            state.selectedTextAttachments.push(...queuedSelections);
          });
          scopeStore.set(
            queuedSelectedTextByConversationIdState,
            conversationId,
            [],
          );
        }
      });
    },
  },
);
export const baseComposerViewState = createScopedComputedAtom(
  composerPromptScope,
  ({ get, scope }: { get: (...args: unknown[]) => any; scope: ScopeStore }) => {
    const defaultState = get(defaultComposerViewState) as ComposerViewState;
    const restoredState = get(restoredLocalComposerStateState) as
      | Partial<ComposerViewState>
      | undefined;
    const implicitAttachment =
      scope.value.kind === "new" && scope.value.entrypoint === "library-preview"
        ? scope.value.implicitAttachment
        : null;
    const state = {
      ...defaultState,
      ...restoredState,
    };
    if (implicitAttachment == null || typeof implicitAttachment !== "object") {
      return state;
    }
    const attachment = implicitAttachment as {
      file?: unknown;
      image?: {
        id: string;
      };
      kind?: string;
    };
    switch (attachment.kind) {
      case "file":
        return {
          ...state,
          fileAttachments: dedupeFileAttachments([
            ...state.fileAttachments,
            attachment.file,
          ]),
        };
      case "image": {
        const { image } = attachment;
        return {
          ...state,
          imageAttachments: [
            ...state.imageAttachments.filter(
              (item: any) => item.id !== image?.id,
            ),
            image,
          ],
        };
      }
      default:
        return state;
    }
  },
);
export const promptTextState = createScopedComputedAtom(
  composerPromptScope,
  ({ get, scope }: { get: (...args: unknown[]) => any; scope: ScopeStore }) => {
    if (scope.value.kind === "local") {
      const pendingState = get(
        pendingLocalComposerStateByConversationIdState,
        scope.value.conversationId,
      ) as
        | {
            prompt?: string;
          }
        | undefined;
      if (pendingState != null) return pendingState.prompt;
    }
    return (
      (get(promptDraftsState) as Record<string, string>)[
        getPromptLocationKey(scope.value)
      ] ?? ""
    );
  },
);
export const composerViewStateWithPromptState = createScopedComputedAtom(
  composerPromptScope,
  ({ get }: { get: (...args: unknown[]) => any }) => ({
    ...(get(baseComposerViewState) as ComposerViewState),
    prompt: get(promptTextState) as string,
  }),
);
export const hasRestorablePromptState = createScopedComputedAtom(
  composerPromptScope,
  ({ get }: { get: (...args: unknown[]) => any }) =>
    hasRestorableMentionOrPathLink(get(promptTextState) as string),
);
export function setPromptText(
  scopeStore: ScopeStore,
  promptOrUpdater: string | ((prompt: string) => string),
): void {
  const currentPrompt = scopeStore.get(promptTextState) as string;
  const nextPrompt =
    typeof promptOrUpdater === "function"
      ? promptOrUpdater(currentPrompt)
      : promptOrUpdater;
  if (!Object.is(currentPrompt, nextPrompt)) {
    persistPromptDraft(scopeStore, nextPrompt);
  }
}
export function persistPromptDraft(
  scopeStore: ScopeStore,
  prompt: string,
): void {
  const drafts = scopeStore.get(promptDraftsState) as Record<string, string>;
  const locationKey = getPromptLocationKey(scopeStore.value);
  if (prompt.length > 0) {
    const nextDrafts = {
      ...drafts,
      [locationKey]: prompt,
    };
    setPersistedAtomItem(COMPOSER_PROMPT_DRAFTS_KEY, nextDrafts);
    scopeStore.set(promptDraftsSignal, nextDrafts);
    return;
  }
  if (drafts[locationKey] == null) return;
  const nextDrafts = {
    ...drafts,
  };
  delete nextDrafts[locationKey];
  setPersistedAtomItem(COMPOSER_PROMPT_DRAFTS_KEY, nextDrafts);
  scopeStore.set(promptDraftsSignal, nextDrafts);
}
export function cloneComposerState(
  state: ComposerViewState,
): ComposerViewState {
  return {
    pendingThreadGoalObjective: state.pendingThreadGoalObjective,
    composerMode: state.composerMode,
    aeonStartTarget: state.aeonStartTarget,
    isAutoContextOn: state.isAutoContextOn,
    imageAttachments: state.imageAttachments,
    appshotContexts: state.appshotContexts,
    fileAttachments: state.fileAttachments,
    pastedTextAttachments: state.pastedTextAttachments,
    addedFiles: state.addedFiles,
    commentAttachments: state.commentAttachments,
    mcpAppModelContextAttachments: state.mcpAppModelContextAttachments,
    selectedTextAttachments: state.selectedTextAttachments,
    pullRequestChecks: state.pullRequestChecks,
    pullRequestMergeConflict: state.pullRequestMergeConflict,
    asyncThreadStartingState: state.asyncThreadStartingState,
    followUpCloudStartingState: state.followUpCloudStartingState,
    defaultBranchSnapshot: state.defaultBranchSnapshot,
  };
}
export function updateComposerViewState(
  scopeStore: ScopeStore,
  updater: (state: ComposerViewState) => void,
): void {
  const currentState = scopeStore.get(
    baseComposerViewState,
  ) as ComposerViewState;
  const nextState = produceComposerState(currentState, updater);
  if (nextState !== currentState) {
    scopeStore.set(restoredLocalComposerStateState, nextState);
  }
}
function produceComposerState(
  state: ComposerViewState,
  updater: (state: ComposerViewState) => void,
): ComposerViewState {
  const nextState = {
    ...state,
    imageAttachments: [...state.imageAttachments],
    appshotContexts: [...state.appshotContexts],
    fileAttachments: [...state.fileAttachments],
    pastedTextAttachments: [...state.pastedTextAttachments],
    addedFiles: [...state.addedFiles],
    commentAttachments: [...state.commentAttachments],
    mcpAppModelContextAttachments: [...state.mcpAppModelContextAttachments],
    selectedTextAttachments: [...state.selectedTextAttachments],
    pullRequestChecks: [...state.pullRequestChecks],
  };
  updater(nextState);
  return nextState;
}
