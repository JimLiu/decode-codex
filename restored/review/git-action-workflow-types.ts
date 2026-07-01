// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Shared local git action workflow types and operation source constants.

export const LOCAL_GIT_ACTION_OPERATION_SOURCE =
  "local_conversation_git_actions";

export type CommitBlockedReason =
  | "changes-loading"
  | "changes-unavailable"
  | "no-changes";

export type PushBlockedReason =
  | "branch-missing"
  | "nothing-to-push"
  | "push-status-loading";

export type CreatePullRequestBlockedReason =
  | "branch-missing"
  | "checking-existing-pr"
  | "default-branch-checked-out"
  | "default-branch-missing"
  | "gh-auth-required"
  | "gh-cli-missing"
  | "gh-status-loading"
  | "no-git-repository"
  | "pull-request-exists"
  | "push-status-loading"
  | "upstream-missing";

export type GhCliAvailability =
  | "available"
  | "loading"
  | "error"
  | "missing"
  | "unauthenticated";

export interface PushStatus {
  branch?: string | null;
  defaultBranch?: string | null;
  gitRoot?: string | null;
  upstreamRef?: string | null;
  commitsAhead?: number;
}

export type GitActionNextStep =
  | "commit-push-and-create-pr"
  | "push-and-create-pr"
  | "create-pr";

export type GitActionBlockedStep =
  | { kind: "commit"; reason: CommitBlockedReason }
  | { kind: "push"; reason: PushBlockedReason }
  | { kind: "create-pr"; reason: CreatePullRequestBlockedReason };

export interface GitWorkflowCapabilities {
  canCommitPushAndCreatePullRequest: boolean;
  canCreatePullRequest: boolean;
  canPushAndCreatePullRequest: boolean;
}
