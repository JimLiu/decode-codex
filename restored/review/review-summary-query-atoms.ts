// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Review summary, branch diff stats, and display-path file-map atoms.

import {
  createComputedAtom,
  createGitQueryOptions,
  createScopedQueryAtom,
  disabledQueryResult,
  getHostKey,
  hideWhitespaceAtom,
  normalizeRequestCwd,
  pendingQueryResult,
  reviewMetadataScope,
  threadAtomScope,
  timeConstants,
} from "../boundaries/onboarding-commons-externals.facade";
import { toAbsoluteGitPath } from "../utils/git-relative-display-path";
import {
  reviewCwdAtom,
  reviewHostConfigAtom,
  reviewHostKeyAtom,
} from "./thread-review-context";
import { reviewGitMetadataQueryAtom } from "./review-git-metadata";
import { reviewCommitShaAtom } from "./review-diff-target-state";
import {
  reviewBaseBranchAtom,
  reviewBaseBranchQueryAtom,
} from "./review-branch-query-atoms";
import {
  isReviewDiffEnabledAtom,
  reviewDiffSourceAtom,
  reviewLocationKindAtom,
} from "./review-diff-mode-atoms";
import {
  buildReviewSummaryParams,
  buildReviewSummaryQueryParams,
  mergeQueryResults,
  REVIEW_SUMMARY_ERROR_REFETCH_MS,
  REVIEW_SUMMARY_FAILED_ERROR,
} from "./review-diff-store-helpers";
import type {
  ComputedAtomContext,
  GitMetadata,
  ReviewDiffFilter,
} from "./review-diff-store-types";

export const reviewSummaryQueryAtom = createScopedQueryAtom(
  reviewMetadataScope,
  (metadata: any) =>
    createGitQueryOptions(
      "review-summary",
      { commonDir: metadata.commonDir, root: metadata.root },
      {
        ...buildReviewSummaryQueryParams({
          cwd: metadata.cwd,
          hideWhitespace: metadata.hideWhitespace,
          source: metadata.source,
          baseBranch: metadata.baseBranch,
          commitSha: metadata.commitSha,
        }),
        includeUntrackedFiles: metadata.includeUntrackedFiles,
      },
      getHostKey(metadata.hostConfig),
      metadata.hostConfig,
      {
        enabled: metadata.enabled,
        refetchInterval: (query: any) =>
          query.state.data?.type === "error"
            ? REVIEW_SUMMARY_ERROR_REFETCH_MS
            : false,
        refetchIntervalInBackground: true,
        refetchOnMount:
          metadata.includeUntrackedFiles === false ? "always" : false,
        refetchOnWindowFocus: true,
        staleTime: timeConstants.FIVE_SECONDS,
      },
    ),
);

export const reviewBranchDiffStatsQueryFamily = createScopedQueryAtom(
  reviewMetadataScope,
  (metadata: any) =>
    createGitQueryOptions(
      "branch-diff-stats",
      { commonDir: metadata.commonDir, root: metadata.root },
      {
        cwd: normalizeRequestCwd(metadata.cwd),
        baseBranch: metadata.baseBranch ?? undefined,
        ...(metadata.hideWhitespace ? { hideWhitespace: true } : {}),
        includeUntrackedFiles: metadata.includeUntrackedFiles,
        operationSource: "review_model",
      },
      getHostKey(metadata.hostConfig),
      metadata.hostConfig,
      { enabled: metadata.enabled, staleTime: timeConstants.FIVE_SECONDS },
    ),
);

export const reviewDiffStatsAtom = createComputedAtom(
  threadAtomScope,
  ({ get }: ComputedAtomContext) => {
    const metadataQuery = get(reviewGitMetadataQueryAtom);
    const metadata: GitMetadata | null = metadataQuery.data ?? null;
    const cwd = get(reviewCwdAtom);
    const baseBranchQuery = get(reviewBaseBranchQueryAtom);
    const waitingForBaseBranch =
      baseBranchQuery.data == null && baseBranchQuery.isFetching;
    if (metadata == null) return pendingQueryResult(metadataQuery);
    if (cwd == null || get(reviewLocationKindAtom) === "cloud")
      return disabledQueryResult();
    const sharedParams = {
      baseBranch: get(reviewBaseBranchAtom),
      commonDir: metadata.commonDir,
      cwd,
      enabled: !waitingForBaseBranch,
      hideWhitespace: get(hideWhitespaceAtom),
      hostConfig: get(reviewHostConfigAtom),
      includeUntrackedFiles: true,
      root: metadata.root,
    };
    const trackedStats = get(reviewBranchDiffStatsQueryFamily, {
      ...sharedParams,
      includeUntrackedFiles: false,
    });
    const allStats = get(reviewBranchDiffStatsQueryFamily, sharedParams);
    const trackedData =
      trackedStats.data != null && trackedStats.data.fileCount > 0
        ? trackedStats.data
        : undefined;
    return mergeQueryResults(
      trackedStats,
      allStats,
      ((allStats.isFetching && !trackedStats.isFetching) || allStats.isError
        ? trackedData
        : (allStats.data ?? trackedData)) ??
        (allStats.isPending ? undefined : null),
    );
  },
);

export const reviewSummaryAtom = createComputedAtom(
  threadAtomScope,
  ({ get }: ComputedAtomContext) => {
    const metadataQuery = get(reviewGitMetadataQueryAtom);
    const metadata: GitMetadata | null = metadataQuery.data ?? null;
    const source: ReviewDiffFilter | null = get(reviewDiffSourceAtom);
    const baseBranchQuery = get(reviewBaseBranchQueryAtom);
    const waitingForBaseBranch =
      source === "branch" &&
      baseBranchQuery.data == null &&
      baseBranchQuery.isFetching;
    const params = buildReviewSummaryParams({
      baseBranch: get(reviewBaseBranchAtom),
      commitSha: get(reviewCommitShaAtom),
      cwd: get(reviewCwdAtom),
      enabled: get(isReviewDiffEnabledAtom) && !waitingForBaseBranch,
      hideWhitespace: get(hideWhitespaceAtom),
      hostConfig: get(reviewHostConfigAtom),
      metadata,
      source,
    });
    if (params == null)
      return metadata == null
        ? pendingQueryResult(metadataQuery)
        : disabledQueryResult();
    if (source !== "branch" && source !== "unstaged")
      return get(reviewSummaryQueryAtom, params);
    const summaryWithUntracked = get(reviewSummaryQueryAtom, params);
    if (
      summaryWithUntracked.data?.type === "success" &&
      !summaryWithUntracked.isError
    )
      return summaryWithUntracked;
    const summaryTrackedOnly = get(reviewSummaryQueryAtom, {
      ...params,
      includeUntrackedFiles: false,
    });
    return mergeQueryResults(
      summaryTrackedOnly,
      summaryWithUntracked,
      summaryWithUntracked.isPending &&
        (summaryTrackedOnly.data?.type !== "success" ||
          summaryTrackedOnly.data.files.length === 0)
        ? undefined
        : summaryTrackedOnly.data,
      summaryWithUntracked.data?.type === "error"
        ? REVIEW_SUMMARY_FAILED_ERROR
        : null,
    );
  },
);

export const reviewFilesByDisplayPathAtom = createComputedAtom(
  threadAtomScope,
  ({ get }: ComputedAtomContext): Map<string, any> | null => {
    const summary = get(reviewSummaryAtom).data;
    if (summary?.type !== "success") return null;
    const gitRoot = get(reviewGitMetadataQueryAtom).data?.root ?? null;
    const filesByPath = new Map<string, any>();
    for (const file of summary.files) {
      const absolutePath = toAbsoluteGitPath({ gitRoot, gitPath: file.path });
      if (!filesByPath.has(absolutePath)) filesByPath.set(absolutePath, file);
    }
    return filesByPath;
  },
);
