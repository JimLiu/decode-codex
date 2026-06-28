// Restored from ref/webview/assets/composer-view-state-BolUCsy-.js
import {
  appScopeC as createScopedComputedAtom,
  appScopeT as appScopeRoot,
} from "../../boundaries/app-scope";
import { persistedAtom } from "../../utils/persisted-atom";
import { createPersistedSignal } from "../../runtime/persisted-signal";
import { getEnvironmentPrimaryRepoMetadata } from "../../utils/use-environment";
import { composerPromptScope } from "../prompt-text";
import { cloudComposerContextState } from "./remote-state";
import type {
  ComposerMode,
  ComposerThreadContext,
  ComposerViewState,
} from "./types";
export const lastUsedContinueInModeAtom = persistedAtom(
  "last-used-continue-in-mode",
  "local",
);
export const lastUsedContinueInModeSignal = createPersistedSignal(
  "last-used-continue-in-mode",
  "local",
);
export const selectedEnvironmentSignal = createPersistedSignal(
  "environment",
  null,
);
export const composerAutoContextEnabledSignal = createPersistedSignal(
  "composer-auto-context-enabled",
  true,
);
export const composerThreadContextState = createScopedComputedAtom(
  composerPromptScope,
  ({
    get,
    scope,
  }: {
    get: (...args: unknown[]) => any;
    scope: {
      value: {
        conversationId?: string;
        kind: string;
      };
    };
  }): ComposerThreadContext => {
    switch (scope.value.kind) {
      case "local":
        return {
          type: "local",
          localConversationId: scope.value.conversationId ?? "",
        };
      case "cloud":
        return get(cloudComposerContextState);
      case "new":
      case "other":
        return;
    }
  },
);
export const defaultComposerViewState = createScopedComputedAtom(
  composerPromptScope,
  ({ get }: { get: (...args: unknown[]) => any }): ComposerViewState => {
    const environment = get(selectedEnvironmentSignal) ?? null;
    let composerMode = normalizeComposerMode(
      (get(lastUsedContinueInModeSignal) ?? "local") as ComposerMode,
    );
    const defaultBranch =
      (
        getEnvironmentPrimaryRepoMetadata(environment) as {
          default_branch?: string | null;
        } | null
      )?.default_branch ?? "main";
    const threadContext = get(composerThreadContextState) as
      | ComposerThreadContext
      | undefined;
    if (threadContext != null && composerMode === "worktree") {
      composerMode = "local";
    } else if (
      threadContext?.type === "cloud" &&
      !threadContext.hasAppliedCodeLocally
    ) {
      composerMode = "cloud";
    } else if (threadContext?.type === "local") {
      composerMode = "local";
    }
    return {
      pendingThreadGoalObjective: null,
      composerMode,
      aeonStartTarget: null,
      isAutoContextOn: get(composerAutoContextEnabledSignal) ?? true,
      imageAttachments: [],
      appshotContexts: [],
      fileAttachments: [],
      pastedTextAttachments: [],
      addedFiles: [],
      commentAttachments: [],
      mcpAppModelContextAttachments: [],
      selectedTextAttachments: [],
      pullRequestChecks: [],
      pullRequestMergeConflict: null,
      asyncThreadStartingState: {
        type: defaultBranch ? "branch" : "working-tree",
        branchName: defaultBranch ?? "main",
      },
      followUpCloudStartingState: "direct-follow-up",
      defaultBranchSnapshot: defaultBranch,
    };
  },
);
function normalizeComposerMode(composerMode: ComposerMode): ComposerMode {
  return composerMode === "remote" ? "local" : composerMode;
}
