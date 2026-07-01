// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Scoped context atoms for local conversation git actions.

import {
  createScopedAtom,
  createScopedStateAtom,
  defineScope,
  gitActionsParentScope,
  hostConfigByIdAtom,
} from "../boundaries/onboarding-commons-externals.facade";
import { commitBlockedReasonAtom } from "./git-action-availability-atoms";
import type { GitActionContext } from "./local-git-action-branch-atoms";
import {
  activeGitWorkflowAtom,
  type ActiveGitWorkflow,
  type GitActionStep,
} from "./local-git-action-state";

type Getter = <TValue>(atom: unknown, params?: unknown) => TValue;

export interface GitActionsScopeValue {
  cwd: string;
  hostId: string;
  conversationId?: string | null;
  codexWorktree?: boolean;
}

export function initLocalGitActionScopedContextChunk(): void {}

export const localConversationGitActionsScope = defineScope(
  "LocalGitActionsScope",
  {
    key: ({ cwd, hostId }: GitActionsScopeValue) =>
      JSON.stringify([hostId, cwd]),
    parent: gitActionsParentScope,
  },
);

export const nextGitActionStepAtom = createScopedStateAtom<
  "commit" | "create-pr" | "worktree-branch-setup" | null
>(localConversationGitActionsScope, null);

export const pendingGitActionStepAtom =
  createScopedStateAtom<GitActionStep | null>(
    localConversationGitActionsScope,
    null,
  );

export const gitActionsContextAtom = createScopedAtom(
  localConversationGitActionsScope,
  ({
    get,
    scope,
  }: {
    get: Getter;
    scope: { value: GitActionsScopeValue };
  }): GitActionContext => ({
    codexWorktree: scope.value.codexWorktree,
    conversationId: scope.value.conversationId,
    cwd: scope.value.cwd,
    hostConfig: get(hostConfigByIdAtom, scope.value.hostId),
  }),
);

export const activeGitWorkflowForScopeAtom = createScopedAtom(
  localConversationGitActionsScope,
  ({
    get,
    scope,
  }: {
    get: Getter;
    scope: { value: GitActionsScopeValue };
  }): ActiveGitWorkflow =>
    get(activeGitWorkflowAtom, {
      cwd: scope.value.cwd,
      hostId: scope.value.hostId,
    }),
);

export const scopedCommitBlockedReasonAtom = createScopedAtom(
  localConversationGitActionsScope,
  ({ get }: { get: Getter }) =>
    get(commitBlockedReasonAtom, {
      ...get<GitActionContext>(gitActionsContextAtom),
      includeUnstaged: true,
    }),
);
