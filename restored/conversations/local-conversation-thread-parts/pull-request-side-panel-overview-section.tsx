// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Pull request side-panel overview section and reviewer badges.
import type { ReactElement, SVGProps } from "react";
import { GitBranchIcon, initGitBranchIcon } from "../../icons/git-branch-icon";
import { initGitHubIcon } from "../../icons/github-mark-icon";
import { once } from "../../runtime/commonjs-interop";
import { initSpinnerComponent, Spinner } from "../../ui/spinner";
import { initTooltipPrimitives, Tooltip } from "../../ui/tooltip-b";
import { classNames, initClassNameRuntime } from "../../utils/class-names";
import { getGithubAvatarUrl } from "../../github/github-avatar-url";
import { PullRequestCheckStatusIcon as PullRequestMergeStatusIcon } from "../../github/pull-request-status";
import { XCircleFilledIcon as ErrorStatusIcon } from "../../icons/x-circle-filled-icon";
import {
  initPullRequestCommentIconChunk,
  PullRequestCommentIcon,
} from "../../icons/pull-request-comment-icon";
import {
  initPullRequestChecksStatusLabelChunk,
  PullRequestChecksSummary,
  pullRequestChecksStatusLabel,
} from "../../github/pull-request-checks-summary";
import { DiffStats, initDiffStatsChunk } from "../../git/git-review-primitives";
import { initTeamIconChunk, TeamIcon } from "../../icons/team-icon";
import { FormattedMessage, initIntlRuntime } from "../../vendor/react-intl";
import {
  initSummaryPanelRowChunk,
  SummaryPanelRow,
} from "../../utils/summary-panel-row";
import { getPullRequestCommentActivityItems } from "./pull-request-comment-activity-items";
import {
  initRequestPullRequestReviewersButtonChunk,
  RequestPullRequestReviewersButton,
} from "./pull-request-reviewer-request-button";

type PullRequestCiStatus = "failing" | "none" | "passing" | "pending";

type PullRequestCheck = {
  status: string;
};

type PullRequestChecksData = {
  checks: readonly PullRequestCheck[];
  ciStatus: PullRequestCiStatus;
};

type PullRequestActivityItem = {
  type: string;
};

type PullRequestReviewers = {
  approved: readonly string[];
  changesRequested: readonly string[];
  commented: readonly string[];
  requested: readonly string[];
  requestedTeams: readonly string[];
};

type PullRequestCommentData = {
  activityItems: readonly PullRequestActivityItem[];
  reviewers?: PullRequestReviewers | null;
};

type PullRequestBoardItem = {
  additions: number;
  baseBranch: string;
  cwd: string;
  deletions: number;
  headBranch: string;
  isAuthor: boolean;
  number: number;
  state?: string | null;
};

type PullRequestMergeBlocker = "conflicts" | "unknown" | null;

export type PullRequestSidePanelOverviewSectionProps = {
  checks?: PullRequestChecksData | null;
  checksAreLoading: boolean;
  checksHaveError: boolean;
  comments?: PullRequestCommentData | null;
  commentsAreLoading: boolean;
  commentsHaveError: boolean;
  hostId: string;
  item: PullRequestBoardItem;
  mergeBlocker: PullRequestMergeBlocker;
  repo: unknown;
};

export function PullRequestSidePanelOverviewSection({
  checks,
  checksAreLoading,
  checksHaveError,
  comments,
  commentsAreLoading,
  commentsHaveError,
  hostId,
  item,
  mergeBlocker,
  repo,
}: PullRequestSidePanelOverviewSectionProps) {
  let branchIcon = (
    <GitBranchIcon className="icon-sm shrink-0 text-token-text-tertiary" />
  );
  let branchArrow = (
    <span className="px-2 text-token-text-tertiary">{"→"}</span>
  );
  let branchLabel = (
    <span className="min-w-0 truncate">
      {item.headBranch}
      {branchArrow}
      {item.baseBranch}
    </span>
  );
  let diffStats = (
    <DiffStats
      className="ms-auto shrink-0 text-sm"
      linesAdded={item.additions}
      linesRemoved={item.deletions}
    />
  );
  let branchRow = (
    <SummaryPanelRow
      density="comfortable"
      icon={branchIcon}
      label={
        <>
          {branchLabel}
          {diffStats}
        </>
      }
      labelClassName="flex min-w-0 flex-1 items-center text-token-text-tertiary"
    />
  );
  let checksRow = (
    <PullRequestOverviewChecksRow
      data={checks}
      hasError={checksHaveError}
      loading={checksAreLoading}
    />
  );
  let mergeStatusState =
      mergeBlocker == null
        ? "ready"
        : mergeBlocker === "conflicts"
          ? "failing"
          : "in_progress",
    mergeStatusIcon = (
      <PullRequestMergeStatusIcon
        className="icon-sm shrink-0"
        state={mergeStatusState}
      />
    );
  let mergeStatusLabel = (
    <PullRequestOverviewMergeStatusLabel mergeBlocker={mergeBlocker} />
  );
  let mergeStatusRow = (
    <SummaryPanelRow
      density="comfortable"
      icon={mergeStatusIcon}
      label={mergeStatusLabel}
    />
  );
  let reviewers = comments?.reviewers ?? null,
    reviewersRow = (
      <PullRequestOverviewReviewersRow
        hostId={hostId}
        item={item}
        repo={repo}
        reviewers={reviewers}
      />
    );
  let commentsRow = (
    <PullRequestOverviewCommentsRow
      data={comments}
      hasError={commentsHaveError}
      loading={commentsAreLoading}
    />
  );
  return (
    <section className="flex flex-col border-b border-token-border pb-3">
      {branchRow}
      {checksRow}
      {mergeStatusRow}
      {reviewersRow}
      {commentsRow}
    </section>
  );
}

type PullRequestOverviewChecksRowProps = {
  data?: PullRequestChecksData | null;
  hasError: boolean;
  loading: boolean;
};

function PullRequestOverviewChecksRow({
  data,
  hasError,
  loading,
}: PullRequestOverviewChecksRowProps) {
  if (hasError) {
    return (
      <SummaryPanelRow
        density="comfortable"
        icon={
          <ErrorStatusIcon className="icon-sm shrink-0 text-token-charts-red" />
        }
        label={
          <FormattedMessage
            id="pullRequestSidePanel.overview.checks.error"
            defaultMessage="Couldn’t load checks"
            description="Checks error label in the pull request overview"
          />
        }
      />
    );
  }
  if (loading || data == null) {
    return (
      <SummaryPanelRow
        density="comfortable"
        icon={<Spinner className="icon-sm shrink-0" />}
        label={
          <FormattedMessage
            id="pullRequestSidePanel.overview.checks.loading"
            defaultMessage="Loading checks"
            description="Loading checks label in the pull request overview"
          />
        }
      />
    );
  }
  let checksStatusIcon = PullRequestChecksSummary(data);
  let checksStatusLabel = pullRequestChecksStatusLabel(data.ciStatus);
  return (
    <SummaryPanelRow
      density="comfortable"
      icon={checksStatusIcon}
      label={checksStatusLabel}
    />
  );
}

type PullRequestOverviewCommentsRowProps = {
  data?: PullRequestCommentData | null;
  hasError: boolean;
  loading: boolean;
};

function PullRequestOverviewCommentsRow({
  data,
  hasError,
  loading,
}: PullRequestOverviewCommentsRowProps) {
  if (hasError) {
    return (
      <SummaryPanelRow
        density="comfortable"
        icon={
          <ErrorStatusIcon className="icon-sm shrink-0 text-token-charts-red" />
        }
        label={
          <FormattedMessage
            id="pullRequestSidePanel.overview.comments.error"
            defaultMessage="Couldn’t load comments"
            description="Comments error label in the pull request overview"
          />
        }
      />
    );
  }
  if (loading || data == null) {
    return (
      <SummaryPanelRow
        density="comfortable"
        icon={<Spinner className="icon-sm shrink-0" />}
        label={
          <FormattedMessage
            id="pullRequestSidePanel.overview.comments.loading"
            defaultMessage="Loading comments"
            description="Loading comments label in the pull request overview"
          />
        }
      />
    );
  }
  let commentsIcon = (
    <PullRequestCommentIcon className="icon-sm shrink-0 text-token-text-tertiary" />
  );
  let commentActivityItems = getPullRequestCommentActivityItems(
    data.activityItems,
  );
  return (
    <SummaryPanelRow
      density="comfortable"
      icon={commentsIcon}
      label={
        <FormattedMessage
          id="pullRequestSidePanel.overview.comments"
          defaultMessage={
            "{count, plural, =0 {No comments} one {# comment} other {# comments}}"
          }
          description="Pull request comment count in the side panel overview"
          values={{
            count: commentActivityItems.length,
          }}
        />
      }
    />
  );
}

type PullRequestOverviewMergeStatusLabelProps = {
  mergeBlocker: PullRequestMergeBlocker;
};

function PullRequestOverviewMergeStatusLabel({
  mergeBlocker,
}: PullRequestOverviewMergeStatusLabelProps) {
  switch (mergeBlocker) {
    case "conflicts": {
      return (
        <FormattedMessage
          id="pullRequestSidePanel.overview.conflicts"
          defaultMessage="Merge conflicts need to be resolved"
          description="Merge conflict status in the pull request overview"
        />
      );
    }
    case "unknown": {
      return (
        <FormattedMessage
          id="pullRequestSidePanel.overview.conflicts.unknown"
          defaultMessage="Checking for merge conflicts"
          description="Unknown merge conflict status in the pull request overview"
        />
      );
    }
    case null: {
      return (
        <FormattedMessage
          id="pullRequestSidePanel.overview.conflicts.none"
          defaultMessage="No merge conflicts"
          description="Clean merge status in the pull request overview"
        />
      );
    }
  }
}

type PullRequestOverviewReviewersRowProps = {
  hostId: string;
  item: PullRequestBoardItem;
  repo: unknown;
  reviewers?: PullRequestReviewers | null;
};

function PullRequestOverviewReviewersRow({
  hostId,
  item,
  repo,
  reviewers,
}: PullRequestOverviewReviewersRowProps) {
  let reviewerBadgeModels =
      reviewers == null ? [] : getPullRequestReviewerBadgeModels(reviewers),
    canRequestReviewers = item.isAuthor && item.state !== "merged";
  let icon = (
    <PullRequestReviewerPlaceholderIcon className="icon-sm shrink-0 text-token-text-tertiary" />
  );
  let labelPrefix = (
    <span className="shrink-0">
      <FormattedMessage
        id="pullRequestSidePanel.overview.reviewers"
        defaultMessage="Reviewers"
        description="Reviewer label in the pull request overview"
      />
    </span>
  );
  let reviewerBadges =
    reviewers != null &&
    (reviewerBadgeModels.length > 0 || canRequestReviewers) ? (
      <span className="hide-scrollbar flex min-w-0 flex-1 items-center gap-1 overflow-x-auto overflow-y-hidden py-0.5">
        {reviewerBadgeModels.map(renderPullRequestOverviewReviewerBadge)}
        {canRequestReviewers ? (
          <span className="shrink-0">
            <RequestPullRequestReviewersButton
              hostId={hostId}
              item={item}
              pendingReviewerLogins={reviewers.requested}
              repo={repo}
            />
          </span>
        ) : null}
      </span>
    ) : null;
  let label = (
    <span className="flex min-w-0 flex-1 items-center gap-2">
      {labelPrefix}
      {reviewerBadges}
    </span>
  );
  return (
    <SummaryPanelRow
      density="comfortable"
      icon={icon}
      label={label}
      labelClassName="flex min-w-0 flex-1 items-center text-token-text-tertiary"
    />
  );
}

type PullRequestReviewerBadgeModel = {
  kind: "team" | "user";
  label: string;
  status: "approved" | "changes_requested" | "waiting";
};

function getPullRequestReviewerBadgeModels(
  reviewers: PullRequestReviewers,
): PullRequestReviewerBadgeModel[] {
  return uniqueStrings([
    ...reviewers.requested,
    ...reviewers.requestedTeams,
    ...reviewers.approved,
    ...reviewers.changesRequested,
    ...reviewers.commented,
  ]).map((item) => ({
    kind: reviewers.requestedTeams.includes(item) ? "team" : "user",
    label: item,
    status: getPullRequestReviewerStatus(reviewers, item),
  }));
}

function uniqueStrings(items: readonly string[]): string[] {
  return Array.from(new Set(items));
}

function getPullRequestReviewerStatus(
  reviewers: PullRequestReviewers,
  login: string,
): PullRequestReviewerBadgeModel["status"] {
  return reviewers.changesRequested.includes(login)
    ? "changes_requested"
    : reviewers.approved.includes(login)
      ? "approved"
      : "waiting";
}

function renderPullRequestOverviewReviewerBadge(
  reviewer: PullRequestReviewerBadgeModel,
): ReactElement {
  return (
    <Tooltip
      key={`${reviewer.kind}:${reviewer.label}`}
      tooltipContent={reviewer.label}
    >
      <span className="relative block size-5 shrink-0 rounded-full border border-token-bg-primary bg-token-bg-secondary">
        {reviewer.kind === "team" ? (
          <span
            aria-label={reviewer.label}
            className="flex size-full items-center justify-center text-token-text-secondary"
            role="img"
          >
            <TeamIcon aria-hidden={true} className="icon-xs" />
          </span>
        ) : (
          <img
            alt={reviewer.label}
            className="size-full rounded-full object-cover"
            src={getGithubAvatarUrl(reviewer.label, 40) ?? undefined}
          />
        )}
        <span
          className={classNames(
            "absolute end-[-2px] bottom-[-2px] size-2 rounded-full border border-token-bg-primary",
            reviewer.status === "approved" && "bg-token-charts-green",
            reviewer.status === "waiting" && "bg-token-charts-yellow",
            reviewer.status === "changes_requested" && "bg-token-charts-red",
          )}
        >
          <span className="sr-only">
            {reviewer.status === "approved" ? (
              <FormattedMessage
                id="pullRequestSidePanel.overview.reviewer.approved"
                defaultMessage="Approved"
                description="Accessible status for an approved pull request reviewer"
              />
            ) : reviewer.status === "changes_requested" ? (
              <FormattedMessage
                id="pullRequestSidePanel.overview.reviewer.changesRequested"
                defaultMessage="Requested changes"
                description="Accessible status for a pull request reviewer who requested changes"
              />
            ) : (
              <FormattedMessage
                id="pullRequestSidePanel.overview.reviewer.waiting"
                defaultMessage="Waiting for review"
                description="Accessible status for a pull request reviewer whose review is pending"
              />
            )}
          </span>
        </span>
      </span>
    </Tooltip>
  );
}

function PullRequestReviewerPlaceholderIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={21}
      height={21}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.4 2.63049C14.7714 2.63049 18.3151 6.1742 18.3151 10.5455C18.3151 14.9169 14.7714 18.4606 10.4 18.4606C6.02869 18.4606 2.48499 14.9169 2.48499 10.5455C2.48499 6.1742 6.02869 2.63049 10.4 2.63049ZM10.4 13.0455C8.52826 13.0455 6.84344 13.846 5.66858 15.1227C6.86576 16.36 8.54237 17.1305 10.4 17.1305C12.2574 17.1305 13.9333 16.3597 15.1305 15.1227C13.9557 13.8461 12.2716 13.0457 10.4 13.0455ZM10.4 6.37854C9.01942 6.37854 7.9002 7.49798 7.90002 8.87854C7.90002 10.2593 9.01931 11.3785 10.4 11.3785C11.7807 11.3785 12.9 10.2592 12.9 8.87854C12.8998 7.49799 11.7806 6.37855 10.4 6.37854Z"
        fill="currentColor"
      />
    </svg>
  );
}

const initPullRequestReviewerBadgeModelsChunk = once(() => {});

const initPullRequestReviewerPlaceholderIconChunk = once(() => {});

export const initPullRequestSidePanelOverviewSectionChunk = once(() => {
  initClassNameRuntime();
  initIntlRuntime();
  initSpinnerComponent();
  initTooltipPrimitives();
  initDiffStatsChunk();
  initGitBranchIcon();
  initPullRequestCommentIconChunk();
  initPullRequestReviewerPlaceholderIconChunk();
  initTeamIconChunk();
  initPullRequestChecksStatusLabelChunk();
  initGitHubIcon();
  initSummaryPanelRowChunk();
  initRequestPullRequestReviewersButtonChunk();
  initPullRequestReviewerBadgeModelsChunk();
});
