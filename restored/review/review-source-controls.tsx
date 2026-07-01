// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Review source control row: filter dropdown, commit subject, line stats,
// refresh indicator, base-branch picker, and static branch-range label.

import { useIntl } from "../vendor/react-intl";
import { Spinner } from "../ui/spinner";
import {
  useAtomValue,
  DiffLineStats as DiffLineStatsDisplay,
  isReviewRefreshingAtom,
} from "../boundaries/onboarding-commons-externals.facade";
import type { ReviewDiffFilter } from "./review-diff-model";
import {
  BaseBranchPicker,
  BranchRangeLabel,
} from "./review-branch-range-controls";
import { CommitSubjectLabel } from "./review-commit-filter-menu";
import { DiffFilterDropdown } from "./review-diff-filter-dropdown";
import type {
  ReviewSource,
  SnapshotMetrics,
} from "./review-source-control-types";

export {
  BaseBranchPicker,
  BranchRangeLabel,
  isNonNullable,
} from "./review-branch-range-controls";
export type {
  BaseBranchPickerProps,
  BranchRangeLabelProps,
} from "./review-branch-range-controls";
export {
  CommitFilterSubmenu,
  CommitFilterSubmenuContent,
  CommitSubjectLabel,
} from "./review-commit-filter-menu";
export type {
  CommitFilterSubmenuContentProps,
  CommitFilterSubmenuProps,
} from "./review-commit-filter-menu";
export {
  DiffFilterDropdown,
  renderDiffFilterLabelWithCount,
} from "./review-diff-filter-dropdown";
export type { DiffFilterDropdownProps } from "./review-diff-filter-dropdown";
export type {
  ReviewSource,
  SnapshotMetrics,
} from "./review-source-control-types";

export interface DiffLineStatsProps {
  additions: number;
  deletions: number;
}

export function DiffLineStats({ additions, deletions }: DiffLineStatsProps) {
  if (additions === 0 && deletions === 0) return null;
  return (
    <DiffLineStatsDisplay
      className="text-size-chat mr-1 shrink-0 select-none"
      linesAdded={additions}
      linesRemoved={deletions}
    />
  );
}

export function ReviewRefreshingIndicator() {
  const intl = useIntl();
  const isRefreshing = useAtomValue(isReviewRefreshingAtom);
  const label = intl.formatMessage({
    id: "codex.review.refreshGitQueries.inProgress",
    defaultMessage: "Refreshing changes",
    description: "Accessible status shown while review git data is refreshed",
  });
  if (!isRefreshing) return null;
  return (
    <span
      aria-label={label}
      className="mr-1 flex shrink-0 items-center text-token-description-foreground"
      role="status"
    >
      <Spinner className="icon-xs" />
    </span>
  );
}

export interface ReviewSourceControlsProps {
  availableDiffFilters?: ReviewDiffFilter[];
  baseBranchOptions: string[] | null | undefined;
  currentBranch: string | null;
  defaultTargetBranch?: string | null;
  diffFilter?: ReviewDiffFilter;
  isBaseBranchOptionsError?: boolean;
  isBaseBranchOptionsLoading?: boolean;
  isReviewExpanded: boolean;
  onRefetchBaseBranchOptions?: () => void;
  onSelectBaseBranch?: (branch: string) => void;
  onSelectDiffFilter?: (filter: ReviewDiffFilter) => void;
  reviewSource: ReviewSource;
  snapshotMetrics: SnapshotMetrics;
  stagedFileCount?: number;
  targetBranch: string | null | undefined;
  unstagedFileCount?: number;
}

export function ReviewSourceControls({
  availableDiffFilters,
  baseBranchOptions,
  currentBranch,
  defaultTargetBranch = null,
  diffFilter,
  isBaseBranchOptionsError = false,
  isBaseBranchOptionsLoading = false,
  isReviewExpanded,
  onRefetchBaseBranchOptions,
  onSelectBaseBranch,
  onSelectDiffFilter,
  reviewSource,
  stagedFileCount,
  targetBranch,
  unstagedFileCount,
  snapshotMetrics,
}: ReviewSourceControlsProps) {
  const isBranchDiff = reviewSource !== "cloud" && diffFilter === "branch";
  const showStaticBranchRange =
    isReviewExpanded &&
    isBranchDiff &&
    currentBranch != null &&
    onSelectBaseBranch == null;
  const showBaseBranchPicker =
    isReviewExpanded && isBranchDiff && onSelectBaseBranch != null;

  const filterDropdown = (
    <DiffFilterDropdown
      diffFilter={diffFilter}
      availableDiffFilters={availableDiffFilters}
      onSelectDiffFilter={onSelectDiffFilter}
      source={reviewSource}
      stagedFileCount={stagedFileCount}
      unstagedFileCount={unstagedFileCount}
    />
  );
  const commitSubject = diffFilter === "commit" ? <CommitSubjectLabel /> : null;
  const lineStats = (
    <DiffLineStats
      additions={snapshotMetrics.additions}
      deletions={snapshotMetrics.deletions}
    />
  );
  const refreshingIndicator = <ReviewRefreshingIndicator />;
  const baseBranchPicker = showBaseBranchPicker ? (
    <BaseBranchPicker
      baseBranchOptions={baseBranchOptions}
      currentBranch={currentBranch ?? "HEAD"}
      defaultTargetBranch={defaultTargetBranch}
      isBaseBranchOptionsError={isBaseBranchOptionsError}
      isBaseBranchOptionsLoading={isBaseBranchOptionsLoading}
      onRefetchBaseBranchOptions={onRefetchBaseBranchOptions}
      onSelectBaseBranch={onSelectBaseBranch}
      targetBranch={targetBranch}
    />
  ) : null;
  const branchRange = showStaticBranchRange ? (
    <BranchRangeLabel
      className="max-[1024px]:hidden"
      currentBranch={currentBranch as string}
      targetBranch={targetBranch ?? defaultTargetBranch ?? "main"}
    />
  ) : null;

  return (
    <div className="flex w-full min-w-0 flex-col overflow-hidden text-base">
      <div className="flex min-w-0 items-center gap-1 overflow-hidden">
        {filterDropdown}
        {commitSubject}
        {lineStats}
        {refreshingIndicator}
        {baseBranchPicker}
        {branchRange}
      </div>
    </div>
  );
}
