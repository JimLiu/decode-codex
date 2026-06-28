// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Disabled-state labels and reason helpers for pull request fix actions.
import { once } from "../../runtime/commonjs-interop";

import { FormattedMessage, initIntlRuntime } from "../../vendor/react-intl";

export type PullRequestFixDisabledReason =
  | "branch-mismatch"
  | "closed-pr"
  | "missing-branch-info"
  | "missing-conversation"
  | "missing-pr-info";

export type PullRequestCommentsFixDisabledReason =
  | "missing-conversation"
  | "missing-pr-info";

export function getPullRequestCommentsFixDisabledReason({
  baseBranch,
  conversationId,
  headBranch,
  prNumber,
}: {
  baseBranch?: string | null;
  conversationId?: string | null;
  headBranch?: string | null;
  prNumber?: number | null;
}): PullRequestCommentsFixDisabledReason | null {
  return (
    (conversationId == null ? "missing-conversation" : null) ??
    (baseBranch == null || headBranch == null ? "missing-pr-info" : null) ??
    (prNumber == null ? "missing-pr-info" : null)
  );
}

export function PullRequestCommentsFixDisabledTooltip({
  reason,
}: {
  reason?: PullRequestCommentsFixDisabledReason | null;
}) {
  if (reason == null) return null;
  switch (reason) {
    case "missing-conversation":
      return (
        <FormattedMessage
          id="localConversation.pullRequest.comments.missingConversation"
          defaultMessage="Addressing PR comments is only available in an active chat"
          description="Tooltip shown when the PR comments action is disabled because there is no active conversation"
        />
      );
    case "missing-pr-info":
      return (
        <FormattedMessage
          id="localConversation.pullRequest.comments.missingPullRequestInfo"
          defaultMessage="Failed to parse the pull request info needed to address comments"
          description="Tooltip shown when the PR comments action is disabled because required pull request information is unavailable"
        />
      );
  }
}

export function PullRequestFixDisabledTooltip({
  reason,
}: {
  reason?: PullRequestFixDisabledReason | null;
}) {
  if (reason == null) return null;
  switch (reason) {
    case "branch-mismatch":
      return (
        <FormattedMessage
          id="localConversation.pullRequest.fix.branchMismatch"
          defaultMessage="Switch back to the chat branch to use Fix"
          description="Tooltip shown when Fix is disabled because the checked out branch differs from the thread branch"
        />
      );
    case "closed-pr":
      return (
        <FormattedMessage
          id="localConversation.pullRequest.fix.closedPullRequest"
          defaultMessage="Fix is only available for open pull requests"
          description="Tooltip shown when Fix is disabled because the pull request is closed"
        />
      );
    case "missing-branch-info":
      return (
        <FormattedMessage
          id="localConversation.pullRequest.fix.missingBranchInfo"
          defaultMessage="Fix requires both the head and base branch"
          description="Tooltip shown when Fix is disabled because the pull request branch metadata is unavailable"
        />
      );
    case "missing-pr-info":
      return (
        <FormattedMessage
          id="localConversation.pullRequest.fix.missingPullRequestInfo"
          defaultMessage="Failed to parse the pull request info needed for Fix"
          description="Tooltip shown when Fix is disabled because required pull request information is unavailable"
        />
      );
    case "missing-conversation":
      return (
        <FormattedMessage
          id="localConversation.pullRequest.fix.missingConversation"
          defaultMessage="Fix is only available in an active chat"
          description="Tooltip shown when Fix is disabled because there is no active conversation"
        />
      );
  }
}

export const initPullRequestFixDisabledTooltipChunk = once(() => {
  initIntlRuntime();
});

export function getPullRequestFixDisabledReason({
  baseBranch,
  conversationId,
  fixDisabledReason,
  hasOpenPr,
  headBranch,
  prNumber,
}: {
  baseBranch?: string | null;
  conversationId?: string | null;
  fixDisabledReason?: PullRequestFixDisabledReason | null;
  hasOpenPr?: boolean | null;
  headBranch?: string | null;
  prNumber?: number | null;
}): PullRequestFixDisabledReason | null {
  return (
    (hasOpenPr === false ? "closed-pr" : fixDisabledReason) ??
    (conversationId == null ? "missing-conversation" : null) ??
    (baseBranch == null || headBranch == null ? "missing-branch-info" : null) ??
    (prNumber == null ? "missing-pr-info" : null)
  );
}
