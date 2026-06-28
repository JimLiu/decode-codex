// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Pull request status detail rows plus chat-attachment helpers for PR checks, review comments, and merge conflicts.
import { once } from "../../runtime/commonjs-interop";
import { useScope, useScopedValue } from "../../runtime/app-scope-hooks";
import {
  composerScope,
  initComposerScopeRuntime,
} from "../../composer/composer-scope-runtime";
import {
  initConversationStateRuntime,
  storedThreadBranchSignal,
} from "../../runtime/conversation-state-runtime";
import {
  getThreadBranchMismatchState,
  getReviewCommentAttachmentKeyValue,
  initPullRequestCommentCardRuntime,
  initPullRequestReviewCommentAttachmentStateRuntime,
  initPullRequestReviewCommentNavigationRuntime,
  initPullRequestReviewCommentRuntime,
  initThreadBranchComparisonRuntime,
  openPullRequestReviewCommentInReviewPanel,
  PullRequestCommentCard,
  pullRequestReviewCommentAttachmentsSignal,
} from "./pull-request-prompt-runtime";
import { ChatIcon as CommentBubbleIcon } from "../../icons/chat-icon";
import { XCircleFilledIcon as PullRequestFailedCheckIcon } from "../../icons/x-circle-filled-icon";
import {
  PullRequestInlineActionButton,
  initPullRequestInlineActionButtonChunk,
} from "../../github/pull-request-actions";
import {
  initSummaryPanelRowChunk,
  SummaryPanelRow,
} from "../../utils/summary-panel-row";
import { FormattedMessage, initIntlRuntime } from "../../vendor/react-intl";
import {
  PullRequestChecksSummaryRow,
  PullRequestRichFlyout,
} from "./pull-request-checks-summary-detail-row";
import {
  attachPullRequestCommentsAndPromptFix,
  initPullRequestCommentFixHelpersChunk,
} from "./pull-request-comment-fix-actions";
import {
  attachFailingPullRequestChecksAndPromptFix,
  initPullRequestFailingChecksPromptChunk,
} from "./pull-request-check-fix-actions";
import {
  attachPullRequestMergeConflictAndPromptFix,
  initPullRequestFixActionHelpersChunk,
} from "./pull-request-merge-conflict-fix-actions";
import {
  getPullRequestCommentsFixDisabledReason,
  getPullRequestFixDisabledReason,
  initPullRequestFixDisabledTooltipChunk,
  PullRequestCommentsFixDisabledTooltip,
  PullRequestFixDisabledTooltip,
} from "./pull-request-fix-tooltips";

type Scope = {
  value?: {
    routeConversationId?: string | null;
  };
  get: (signal: unknown) => unknown;
};

type PullRequestCheckStatus =
  | "failing"
  | "passing"
  | "pending"
  | "skipped"
  | "unknown";

export type PullRequestCheck = {
  link?: string | null;
  name: string;
  status: PullRequestCheckStatus;
  workflow?: string | null;
};

type ReviewCommentAttachment = {
  reviewThreadId?: string | null;
  url?: string | null;
  position?: {
    path?: string | null;
  };
};

type PullRequestActivityItem = {
  authorAvatarUrl?: string | null;
  authorLogin?: string | null;
  createdAt?: string | null;
  reviewThreadId?: string | null;
  type: string;
};

type PullRequestStatus = {
  activityItems: PullRequestActivityItem[];
  boardItem?: {
    baseBranch?: string | null;
    headBranch?: string | null;
    url?: string | null;
  } | null;
  canMerge?: boolean | null;
  checks: PullRequestCheck[];
  ciStatus: "passing" | "none" | "failing" | "pending";
  commentAttachments: ReviewCommentAttachment[];
  hasOpenPr?: boolean | null;
  isDraft?: boolean | null;
  mergeBlocker?: "conflicts" | "unknown" | null;
  number?: number | null;
  repo?: string | null;
  url?: string | null;
};

export type PullRequestStatusDetailRowsProps = {
  conversationId?: string | null;
  headBranch?: string | null;
  pullRequestStatus?: PullRequestStatus | null;
};

export const initPullRequestStatusDetailRowsChunk = once(() => {
  initComposerScopeRuntime();
  initIntlRuntime();
  initConversationStateRuntime();
  initPullRequestReviewCommentAttachmentStateRuntime();
  initPullRequestReviewCommentRuntime();
  initPullRequestCommentCardRuntime();
  initPullRequestReviewCommentNavigationRuntime();
  initThreadBranchComparisonRuntime();
  initPullRequestCommentFixHelpersChunk();
  initPullRequestFixDisabledTooltipChunk();
  initPullRequestFailingChecksPromptChunk();
  initPullRequestInlineActionButtonChunk();
  initPullRequestFixActionHelpersChunk();
  (
    PullRequestChecksSummaryRow as typeof PullRequestChecksSummaryRow & {
      initChunk: () => void;
    }
  ).initChunk();
  initSummaryPanelRowChunk();
});

export function PullRequestStatusDetailRows({
  conversationId,
  headBranch,
  pullRequestStatus,
}: PullRequestStatusDetailRowsProps) {
  let scope = useScope(composerScope) as Scope,
    storedThreadBranch = useScopedValue(
      storedThreadBranchSignal,
      conversationId,
    ),
    reviewCommentAttachments = useScopedValue(
      pullRequestReviewCommentAttachmentsSignal,
      conversationId,
    ) as ReviewCommentAttachment[];
  if (pullRequestStatus == null || !pullRequestStatus.hasOpenPr) return null;
  let baseBranch = pullRequestStatus.boardItem?.baseBranch ?? null,
    pullRequestHeadBranch =
      pullRequestStatus.boardItem?.headBranch ?? headBranch,
    pullRequestNumber = pullRequestStatus.number,
    pullRequestUrl =
      pullRequestStatus.url ?? pullRequestStatus.boardItem?.url ?? null,
    existingReviewCommentKeySet = new Set(
      reviewCommentAttachments.map(getReviewCommentAttachmentKey),
    );
  let reviewCommentKeySet = existingReviewCommentKeySet,
    hasUnresolvedReviewComments;
  {
    let isNewCommentAttachment;
    isNewCommentAttachment = (commentAttachment: ReviewCommentAttachment) =>
      !reviewCommentKeySet.has(
        getReviewCommentAttachmentKeyValue(commentAttachment),
      );
    hasUnresolvedReviewComments = pullRequestStatus.commentAttachments.some(
      isNewCommentAttachment,
    );
  }
  let hasNewCommentAttachments = hasUnresolvedReviewComments,
    hasFailingChecks = pullRequestStatus.checks.some(
      isFailingPullRequestCheckStatus,
    );
  let canShowFailingChecksFix = hasFailingChecks,
    hasMergeConflicts = pullRequestStatus.mergeBlocker === "conflicts",
    hasCommentAttachments = pullRequestStatus.commentAttachments.length > 0,
    fixDisabledReason =
      canShowFailingChecksFix || hasMergeConflicts || hasNewCommentAttachments
        ? conversationId == null
          ? "missing-conversation"
          : getThreadBranchMismatchState({
                currentBranch: headBranch,
                storedThreadBranch,
              }).hasThreadBranchMismatch
            ? "branch-mismatch"
            : null
        : null,
    failingChecksFixDisabledReason = canShowFailingChecksFix
      ? getPullRequestFixDisabledReason({
          baseBranch,
          conversationId,
          fixDisabledReason,
          hasOpenPr: pullRequestStatus.hasOpenPr,
          headBranch: pullRequestHeadBranch,
          prNumber: pullRequestNumber,
        })
      : null;
  let checksFixDisabledReason = failingChecksFixDisabledReason,
    mergeConflictFixDisabledReason = hasMergeConflicts
      ? getPullRequestFixDisabledReason({
          baseBranch,
          conversationId,
          fixDisabledReason,
          hasOpenPr: pullRequestStatus.hasOpenPr,
          headBranch: pullRequestHeadBranch,
          prNumber: pullRequestUrl == null ? null : pullRequestNumber,
        })
      : null;
  let conflictFixDisabledReason = mergeConflictFixDisabledReason,
    commentsFixDisabledReason = hasNewCommentAttachments
      ? getPullRequestCommentsFixDisabledReason({
          baseBranch,
          conversationId,
          headBranch: pullRequestHeadBranch,
          prNumber: pullRequestNumber,
        })
      : null;
  let reviewCommentsFixDisabledReason = commentsFixDisabledReason,
    openMergeConflictsFix = () => {
      attachPullRequestMergeConflictAndPromptFix(
        scope,
        baseBranch == null ||
          pullRequestHeadBranch == null ||
          pullRequestNumber == null ||
          pullRequestUrl == null
          ? null
          : {
              baseBranch,
              headBranch: pullRequestHeadBranch,
              number: pullRequestNumber,
              repo: pullRequestStatus.repo,
              url: pullRequestUrl,
            },
      );
    };
  let handleFixMergeConflicts = openMergeConflictsFix,
    openReviewCommentsFix = () => {
      attachPullRequestCommentsAndPromptFix(scope, {
        baseBranch,
        commentAttachments: pullRequestStatus.commentAttachments,
        conversationId,
        focusComposer: true,
        headBranch: pullRequestHeadBranch,
        number: pullRequestNumber,
      });
    };
  let handleFixReviewComments = openReviewCommentsFix,
    canFixFailingChecks = checksFixDisabledReason == null,
    failingChecksTooltipContent =
      checksFixDisabledReason == null ? undefined : (
        <PullRequestFixDisabledTooltip reason={checksFixDisabledReason} />
      );
  let handleFixFailingChecks = (checks: PullRequestCheck[]) => {
    attachFailingPullRequestChecksAndPromptFix(scope, {
      baseBranch,
      checks,
      headBranch: pullRequestHeadBranch,
      number: pullRequestNumber,
    });
  };
  let checksRow = (
    <PullRequestChecksSummaryRow
      canFixFailingChecks={canFixFailingChecks}
      fixTooltipContent={failingChecksTooltipContent}
      onFixFailingChecks={handleFixFailingChecks}
      pullRequestStatus={pullRequestStatus}
    />
  );
  let mergeConflictsRow = hasMergeConflicts ? (
    <SummaryPanelRow
      actions={
        <PullRequestInlineActionButton
          color="ghostTertiary"
          disabled={conflictFixDisabledReason != null}
          tooltipContent={
            conflictFixDisabledReason == null ? undefined : (
              <PullRequestFixDisabledTooltip
                reason={conflictFixDisabledReason}
              />
            )
          }
          onClick={handleFixMergeConflicts}
        >
          <FormattedMessage
            id="codex.localConversation.gitSummary.fixMergeConflicts"
            defaultMessage="Fix"
            description="Summary panel row action label for resolving pull request merge conflicts"
          />
        </PullRequestInlineActionButton>
      }
      actionsVisible={true}
      icon={
        <span className="inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center">
          <PullRequestFailedCheckIcon className="icon-xs text-token-charts-red" />
        </span>
      }
      interactive={true}
      labelClassName="text-token-text-tertiary"
      label={
        <FormattedMessage
          id="codex.localConversation.gitSummary.mergeConflicts"
          defaultMessage="Merge conflicts"
          description="Summary panel row label when the pull request has merge conflicts"
        />
      }
    />
  ) : null;
  let commentsRow = hasCommentAttachments ? (
    <PullRequestRichFlyout.Tooltip
      triggerAsChild={true}
      content={
        <PullRequestRichFlyout.Content>
          <div className="flex flex-col gap-2 py-1">
            {pullRequestStatus.commentAttachments.map((item, index) => {
              let activityItem =
                item.reviewThreadId == null
                  ? null
                  : pullRequestStatus.activityItems.find(
                      (candidate) =>
                        candidate.type === "review_comment" &&
                        candidate.reviewThreadId === item.reviewThreadId,
                    );
              return (
                <PullRequestCommentCard
                  key={`${item.url ?? ""}-${index}`}
                  authorAvatarUrl={activityItem?.authorAvatarUrl}
                  authorLogin={activityItem?.authorLogin}
                  bodyPreview={true}
                  comment={item}
                  createdAt={activityItem?.createdAt}
                  onOpenInReview={() => {
                    openPullRequestReviewCommentInReviewPanel(scope, {
                      comment: item,
                    });
                  }}
                  url={item.url ?? null}
                />
              );
            })}
          </div>
        </PullRequestRichFlyout.Content>
      }
    >
      <SummaryPanelRow
        actions={
          hasNewCommentAttachments ? (
            <PullRequestInlineActionButton
              color="ghostTertiary"
              disabled={reviewCommentsFixDisabledReason != null}
              tooltipContent={
                reviewCommentsFixDisabledReason == null ? undefined : (
                  <PullRequestCommentsFixDisabledTooltip
                    reason={reviewCommentsFixDisabledReason}
                  />
                )
              }
              onClick={handleFixReviewComments}
            >
              <FormattedMessage
                id="codex.localConversation.gitSummary.fixComments"
                defaultMessage="Fix"
                description="Summary panel row action label for fixing pull request comments"
              />
            </PullRequestInlineActionButton>
          ) : undefined
        }
        actionsVisible={hasNewCommentAttachments}
        icon={
          <span className="inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center">
            <CommentBubbleIcon className="icon-xs text-token-text-tertiary" />
          </span>
        }
        interactive={true}
        labelClassName="text-token-text-tertiary"
        label={
          <FormattedMessage
            id="codex.localConversation.gitSummary.comments.count"
            defaultMessage={
              "{count, plural, one {# comment} other {# comments}}"
            }
            description="Summary panel row label for pull request comments"
            values={{
              count: pullRequestStatus.commentAttachments.length,
            }}
          />
        }
      />
    </PullRequestRichFlyout.Tooltip>
  ) : null;
  return (
    <>
      {checksRow}
      {mergeConflictsRow}
      {commentsRow}
    </>
  );
}

function isFailingPullRequestCheckStatus(check: PullRequestCheck) {
  return check.status === "failing";
}

function getReviewCommentAttachmentKey(
  commentAttachment: ReviewCommentAttachment,
) {
  return getReviewCommentAttachmentKeyValue(commentAttachment);
}
