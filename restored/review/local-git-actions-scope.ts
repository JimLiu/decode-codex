// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Compatibility entry for local conversation git actions: workflow-step setters
// and scoped availability/blocked-step derivations.

import {
  appStoreScope,
  createParametricAtom,
  createScopedAtom,
  pushStatusAtom,
} from "../boundaries/onboarding-commons-externals.facade";
import {
  type GitActionBlockedStep,
  type PushBlockedReason,
} from "./git-action-blocked-reasons";
import {
  commitBlockedReasonAtom,
  gitActionNextStepAtom,
  pushAfterCommitBlockedReasonAtom,
  pushBlockedReasonAtom,
} from "./git-action-availability-atoms";
import { LOCAL_GIT_ACTION_OPERATION_SOURCE } from "./git-action-workflow-types";
import {
  conversationIsDetachedHeadAtom,
  gitActionCurrentBranchQueryAtom,
  gitActionDefaultBranchQueryAtom,
  type GitActionContext,
} from "./local-git-action-branch-atoms";
import {
  createPullRequestIncludeLocalChangesAtom,
  type GitActionStep,
  type ScopedStore,
} from "./local-git-action-state";
import {
  gitActionsContextAtom,
  localConversationGitActionsScope,
  nextGitActionStepAtom,
  pendingGitActionStepAtom,
  scopedCommitBlockedReasonAtom,
} from "./local-git-action-scoped-context";

export {
  conversationDefaultBranchAtom,
  conversationHeadBranchAtom,
  conversationIsDetachedHeadAtom,
  computeBranchMismatch,
  defaultBranchFromCwdQueryFamily,
  gitActionCurrentBranchQueryAtom,
  gitActionDefaultBranchQueryAtom,
  hasOpenPullRequestForHeadAtom,
  pullRequestStatusForHeadAtom,
  shouldRecordConversationBranchAtom,
} from "./local-git-action-branch-atoms";
export type { GitActionContext } from "./local-git-action-branch-atoms";
export {
  activeGitWorkflowAtom,
  cancelGitWorkflowAbortSignal,
  cleanupGitWorkflowAbortSignal,
  commitMessageDraftAtom,
  createGitWorkflowAbortSignal,
  createPullRequestBodyDraftAtom,
  createPullRequestIncludeLocalChangesAtom,
  createPullRequestTitleDraftAtom,
  getGitActionMessageGenerationKey,
  gitActionMessageGenerationControllers,
  includeUnstagedChangesAtom,
  resetCreatePullRequestDrafts,
} from "./local-git-action-state";
export type {
  ActiveGitWorkflow,
  GitActionStep,
  HostScope,
  ScopedStore,
} from "./local-git-action-state";
export {
  activeGitWorkflowForScopeAtom,
  gitActionsContextAtom,
  localConversationGitActionsScope,
  nextGitActionStepAtom,
  pendingGitActionStepAtom,
  scopedCommitBlockedReasonAtom,
} from "./local-git-action-scoped-context";
export type { GitActionsScopeValue } from "./local-git-action-scoped-context";

type Getter = <TValue>(atom: unknown, params?: unknown) => TValue;

export function startCommitGitAction(scope: ScopedStore): void {
  if (scope.get(canCreateWorktreeBranchAtom)) {
    scope.set(pendingGitActionStepAtom, undefined, "commit");
    scope.set(nextGitActionStepAtom, undefined, "worktree-branch-setup");
    return;
  }
  scope.set(nextGitActionStepAtom, undefined, "commit");
}

export function startCreatePullRequestGitAction(scope: ScopedStore): void {
  if (scope.get(shouldOfferWorktreeBranchSetupAtom)) {
    scope.set(pendingGitActionStepAtom, undefined, "create-pr");
    scope.set(nextGitActionStepAtom, undefined, "worktree-branch-setup");
    return;
  }
  scope.set(nextGitActionStepAtom, undefined, "create-pr");
}

export function cancelGitActionBranchSetup(scope: ScopedStore): void {
  scope.set(pendingGitActionStepAtom, undefined, null);
  scope.set(nextGitActionStepAtom, undefined, "worktree-branch-setup");
}

export function resumeGitActionAfterBranchSetup(scope: ScopedStore): void {
  const pendingStep =
    scope.get<GitActionStep | null>(pendingGitActionStepAtom) ?? "commit";
  scope.set(pendingGitActionStepAtom, undefined, null);
  scope.set(nextGitActionStepAtom, undefined, pendingStep);
}

export type GitActionAvailability = "hidden" | "enabled" | "disabled";

export const gitActionAvailabilityAtom = createParametricAtom(
  appStoreScope,
  (
    params: GitActionContext,
    { get }: { get: Getter },
  ): GitActionAvailability => {
    const currentBranchQuery = get<{
      isSuccess: boolean;
      data?: string | null;
    }>(gitActionCurrentBranchQueryAtom, params);
    if (!currentBranchQuery.isSuccess) {
      return "hidden";
    }
    const currentBranch = currentBranchQuery.data?.trim() ?? "";
    const createsBranch = currentBranch.length === 0;
    if (createsBranch) {
      const pushStatusResult = get<{
        type: string;
        data?: { commitsAhead?: number };
      }>(pushStatusAtom, {
        cwd: params.cwd,
        hostConfig: params.hostConfig,
        operationSource: LOCAL_GIT_ACTION_OPERATION_SOURCE,
      });
      const pushStatus =
        pushStatusResult.type === "success" ? pushStatusResult.data : null;
      if (
        get(commitBlockedReasonAtom, { ...params, includeUnstaged: true }) !=
          null &&
        (pushStatus?.commitsAhead ?? 0) === 0
      ) {
        return "hidden";
      }
    } else {
      const defaultBranch = get<{ data?: string | null }>(
        gitActionDefaultBranchQueryAtom,
        params,
      ).data;
      if (defaultBranch == null || currentBranch === defaultBranch) {
        return "hidden";
      }
    }
    return get<{ blockedStep: GitActionBlockedStep | null }>(
      gitActionNextStepAtom,
      {
        cwd: params.cwd,
        hostConfig: params.hostConfig,
        createsBranch,
        includeLocalChanges: get(createPullRequestIncludeLocalChangesAtom, {
          cwd: params.cwd,
          hostId: params.hostConfig.id,
        }),
      },
    ).blockedStep == null
      ? "enabled"
      : "disabled";
  },
);

export const scopedGitActionAvailabilityAtom = createScopedAtom(
  localConversationGitActionsScope,
  ({ get }: { get: Getter }): GitActionAvailability =>
    get(gitActionAvailabilityAtom, get(gitActionsContextAtom)),
);

export const canCreateWorktreeBranchAtom = createScopedAtom(
  localConversationGitActionsScope,
  ({ get }: { get: Getter }): boolean => {
    const context = get<GitActionContext>(gitActionsContextAtom);
    const pushStatusResult = get<{
      type: string;
      data?: { branch?: string | null; defaultBranch?: string | null };
    }>(pushStatusAtom, {
      cwd: context.cwd,
      hostConfig: context.hostConfig,
      operationSource: LOCAL_GIT_ACTION_OPERATION_SOURCE,
    });
    const pushStatus =
      pushStatusResult.type === "success" ? pushStatusResult.data : undefined;
    const currentBranchQuery = get<{
      isSuccess: boolean;
      data?: string | null;
    }>(gitActionCurrentBranchQueryAtom, context);
    const currentBranch = currentBranchQuery.isSuccess
      ? currentBranchQuery.data
      : pushStatus?.branch;
    return (
      Boolean(context.codexWorktree) &&
      pushStatus != null &&
      (!currentBranch || currentBranch === pushStatus.defaultBranch)
    );
  },
);

export const shouldOfferWorktreeBranchSetupAtom = createScopedAtom(
  localConversationGitActionsScope,
  ({ get }: { get: Getter }): boolean =>
    get(canCreateWorktreeBranchAtom) &&
    !get(conversationIsDetachedHeadAtom, get(gitActionsContextAtom)),
);

export const scopedPushBlockedReasonAtom = createScopedAtom(
  localConversationGitActionsScope,
  ({ get }: { get: Getter }): PushBlockedReason | null => {
    const context = get<GitActionContext>(gitActionsContextAtom);
    const scopedCommitBlockedReason = get(scopedCommitBlockedReasonAtom);
    const pushBlockedReason = get<PushBlockedReason | null>(
      pushBlockedReasonAtom,
      context,
    );
    const pushAfterCommitBlockedReason = get<PushBlockedReason | null>(
      pushAfterCommitBlockedReasonAtom,
      context,
    );
    return pushBlockedReason == null ||
      (scopedCommitBlockedReason == null &&
        pushAfterCommitBlockedReason == null) ||
      (get(canCreateWorktreeBranchAtom) && scopedCommitBlockedReason == null)
      ? null
      : pushBlockedReason;
  },
);

export const scopedGitActionBlockedStepAtom = createScopedAtom(
  localConversationGitActionsScope,
  ({ get }: { get: Getter }): GitActionBlockedStep | null => {
    const context = get<GitActionContext>(gitActionsContextAtom);
    return get<{ blockedStep: GitActionBlockedStep | null }>(
      gitActionNextStepAtom,
      {
        cwd: context.cwd,
        hostConfig: context.hostConfig,
        createsBranch:
          get(canCreateWorktreeBranchAtom) ||
          get(conversationIsDetachedHeadAtom, context),
        includeLocalChanges: get(createPullRequestIncludeLocalChangesAtom, {
          cwd: context.cwd,
          hostId: context.hostConfig.id,
        }),
      },
    ).blockedStep;
  },
);
