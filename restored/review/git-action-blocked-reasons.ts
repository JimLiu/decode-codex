// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Pure logic that decides why each local git action (commit / push / create-PR) is
// blocked, which capabilities are currently allowed, the next workflow step to run,
// and the single blocked step that should be surfaced to the user.

import { LOCAL_GIT_ACTION_OPERATION_SOURCE } from "./git-action-workflow-types";
import type {
  CommitBlockedReason,
  CreatePullRequestBlockedReason,
  GhCliAvailability,
  GitActionBlockedStep,
  GitActionNextStep,
  GitWorkflowCapabilities,
  PushBlockedReason,
  PushStatus,
} from "./git-action-workflow-types";

export { LOCAL_GIT_ACTION_OPERATION_SOURCE } from "./git-action-workflow-types";
export type {
  CommitBlockedReason,
  CreatePullRequestBlockedReason,
  GhCliAvailability,
  GitActionBlockedStep,
  GitActionNextStep,
  GitWorkflowCapabilities,
  PushBlockedReason,
  PushStatus,
} from "./git-action-workflow-types";

interface GitActionOperationContext {
  cwd: string;
  hostConfig: { id: string };
}

export function buildGitActionOperationParams(
  context: GitActionOperationContext,
): {
  cwd: string;
  hostConfig: { id: string };
  operationSource: string;
} {
  return {
    cwd: context.cwd,
    hostConfig: context.hostConfig,
    operationSource: LOCAL_GIT_ACTION_OPERATION_SOURCE,
  };
}

export function buildPullRequestStatusParams(
  context: GitActionOperationContext,
  headBranch: string,
): {
  cwd: string;
  headBranch: string;
  hostId: string;
  operationSource: string;
} {
  return {
    cwd: context.cwd,
    headBranch,
    hostId: context.hostConfig.id,
    operationSource: LOCAL_GIT_ACTION_OPERATION_SOURCE,
  };
}

export function computeCommitBlockedReason({
  hasSomeUncommittedChanges,
  isChangesLoading,
  isChangesUnavailable,
}: {
  hasSomeUncommittedChanges: boolean;
  isChangesLoading: boolean;
  isChangesUnavailable: boolean;
}): CommitBlockedReason | null {
  switch (true) {
    case isChangesLoading:
      return "changes-loading";
    case isChangesUnavailable:
      return "changes-unavailable";
    case !hasSomeUncommittedChanges:
      return "no-changes";
    default:
      return null;
  }
}

export function computePushBlockedReason({
  pushStatus,
  ignoreNothingToPush = false,
}: {
  pushStatus: PushStatus | undefined | null;
  ignoreNothingToPush?: boolean;
}): PushBlockedReason | null {
  switch (true) {
    case !pushStatus:
      return "push-status-loading";
    case !pushStatus?.branch:
      return "branch-missing";
    case !ignoreNothingToPush && pushStatus?.commitsAhead === 0:
      return "nothing-to-push";
    default:
      return null;
  }
}

export function computeCreatePullRequestBlockedReason({
  ghCliAvailability,
  pushStatus,
  allowMissingUpstream = false,
  hasOpenPr,
  isLoadingPRStatus,
}: {
  ghCliAvailability: GhCliAvailability;
  pushStatus: PushStatus | undefined | null;
  allowMissingUpstream?: boolean;
  hasOpenPr: boolean;
  isLoadingPRStatus: boolean;
}): CreatePullRequestBlockedReason | null {
  switch (true) {
    case hasOpenPr:
      return "pull-request-exists";
    case isLoadingPRStatus:
      return "checking-existing-pr";
    case ghCliAvailability === "loading" || ghCliAvailability === "error":
      return "gh-status-loading";
    case ghCliAvailability === "missing":
      return "gh-cli-missing";
    case ghCliAvailability === "unauthenticated":
      return "gh-auth-required";
    case !pushStatus:
      return "push-status-loading";
    case !pushStatus?.gitRoot:
      return "no-git-repository";
    case !pushStatus?.defaultBranch:
      return "default-branch-missing";
    case !pushStatus?.branch:
      return "branch-missing";
    case pushStatus?.branch === pushStatus?.defaultBranch:
      return "default-branch-checked-out";
    case !allowMissingUpstream && !pushStatus?.upstreamRef:
      return "upstream-missing";
    default:
      return null;
  }
}

export function isBranchSetupResolvableBlockedReason(
  reason: CreatePullRequestBlockedReason | null,
): boolean {
  return (
    reason == null ||
    reason === "branch-missing" ||
    reason === "checking-existing-pr" ||
    reason === "default-branch-checked-out" ||
    reason === "push-status-loading"
  );
}

export function computeWorkflowCapabilities({
  commitsAhead,
  commitBlockedReason,
  createPullRequestAfterPushBlockedReason,
  createPullRequestBlockedReason,
  createsBranch,
  pushAfterCommitBlockedReason,
  pushBlockedReason,
}: {
  commitsAhead: number;
  commitBlockedReason: CommitBlockedReason | null;
  createPullRequestAfterPushBlockedReason: CreatePullRequestBlockedReason | null;
  createPullRequestBlockedReason: CreatePullRequestBlockedReason | null;
  createsBranch: boolean;
  pushAfterCommitBlockedReason: PushBlockedReason | null;
  pushBlockedReason: PushBlockedReason | null;
}): GitWorkflowCapabilities {
  if (createsBranch) {
    return {
      canCommitPushAndCreatePullRequest:
        commitBlockedReason == null &&
        isBranchSetupResolvableBlockedReason(
          pushAfterCommitBlockedReason as CreatePullRequestBlockedReason | null,
        ) &&
        isBranchSetupResolvableBlockedReason(
          createPullRequestAfterPushBlockedReason,
        ),
      canCreatePullRequest: false,
      canPushAndCreatePullRequest:
        commitsAhead > 0 &&
        isBranchSetupResolvableBlockedReason(
          pushBlockedReason as CreatePullRequestBlockedReason | null,
        ) &&
        isBranchSetupResolvableBlockedReason(
          createPullRequestAfterPushBlockedReason,
        ),
    };
  }
  return {
    canCommitPushAndCreatePullRequest:
      commitBlockedReason == null &&
      pushAfterCommitBlockedReason == null &&
      createPullRequestAfterPushBlockedReason == null,
    canCreatePullRequest: createPullRequestBlockedReason == null,
    canPushAndCreatePullRequest:
      (pushBlockedReason == null ||
        (pushBlockedReason === "nothing-to-push" &&
          createPullRequestBlockedReason === "upstream-missing")) &&
      createPullRequestAfterPushBlockedReason == null,
  };
}

export function resolveWorkflowNextStep({
  canCommitPushAndCreatePullRequest,
  canCreatePullRequest,
  canPushAndCreatePullRequest,
  createsBranch,
  includeLocalChanges,
}: GitWorkflowCapabilities & {
  createsBranch: boolean;
  includeLocalChanges: boolean;
}): GitActionNextStep {
  if (includeLocalChanges) {
    if (canCommitPushAndCreatePullRequest) {
      return "commit-push-and-create-pr";
    }
    if (canPushAndCreatePullRequest) {
      return "push-and-create-pr";
    }
    if (canCreatePullRequest) {
      return "create-pr";
    }
    return "commit-push-and-create-pr";
  }
  return createsBranch ? "push-and-create-pr" : "create-pr";
}

export function resolveBlockedStep({
  canCommitPushAndCreatePullRequest,
  canCreatePullRequest,
  canPushAndCreatePullRequest,
  commitBlockedReason,
  createPullRequestAfterPushBlockedReason,
  createPullRequestBlockedReason,
  nextStep,
  pushAfterCommitBlockedReason,
  pushBlockedReason,
}: GitWorkflowCapabilities & {
  commitBlockedReason: CommitBlockedReason | null;
  createPullRequestAfterPushBlockedReason: CreatePullRequestBlockedReason | null;
  createPullRequestBlockedReason: CreatePullRequestBlockedReason | null;
  nextStep: GitActionNextStep;
  pushAfterCommitBlockedReason: PushBlockedReason | null;
  pushBlockedReason: PushBlockedReason | null;
}): GitActionBlockedStep | null {
  if (
    createPullRequestAfterPushBlockedReason === "gh-auth-required" ||
    createPullRequestAfterPushBlockedReason === "gh-cli-missing" ||
    createPullRequestAfterPushBlockedReason === "gh-status-loading"
  ) {
    return {
      kind: "create-pr",
      reason: createPullRequestAfterPushBlockedReason,
    };
  }
  switch (nextStep) {
    case "create-pr":
      return !canCreatePullRequest && createPullRequestBlockedReason != null
        ? { kind: "create-pr", reason: createPullRequestBlockedReason }
        : null;
    case "push-and-create-pr":
      if (canPushAndCreatePullRequest) {
        return null;
      }
      if (pushBlockedReason == null) {
        return createPullRequestAfterPushBlockedReason == null
          ? null
          : {
              kind: "create-pr",
              reason: createPullRequestAfterPushBlockedReason,
            };
      }
      return { kind: "push", reason: pushBlockedReason };
    case "commit-push-and-create-pr":
      if (canCommitPushAndCreatePullRequest) {
        return null;
      }
      if (commitBlockedReason == null) {
        if (pushAfterCommitBlockedReason == null) {
          return createPullRequestAfterPushBlockedReason == null
            ? null
            : {
                kind: "create-pr",
                reason: createPullRequestAfterPushBlockedReason,
              };
        }
        return { kind: "push", reason: pushAfterCommitBlockedReason };
      }
      return { kind: "commit", reason: commitBlockedReason };
  }
}
