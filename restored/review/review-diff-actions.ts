// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Imperative review diff refresh and selection actions.

import {
  clearGitStatusCache,
  hideWhitespaceAtom,
  invalidateReviewDiffQueries,
  RequestAbortedError,
} from "../boundaries/onboarding-commons-externals.facade";
import {
  reviewCwdAtom,
  reviewHostConfigAtom,
  reviewHostKeyAtom,
} from "./thread-review-context";
import { reviewGitMetadataQueryAtom } from "./review-git-metadata";
import {
  refreshReviewDiff,
  reviewDiffFilterAtom,
  setReviewDiffFilter,
} from "./review-diff-model";
import {
  reviewCommitShaAtom,
  reviewDiffTargetPathAtom,
  reviewDiffTargetTextAtom,
} from "./review-diff-target-state";
import {
  isReviewDiffEnabledAtom,
  isReviewIndexModeAtom,
  reviewDiffSourceAtom,
} from "./review-diff-mode-atoms";
import {
  reviewBaseBranchAtom,
  reviewBaseBranchQueryAtom,
  reviewBranchCommitsQueryAtom,
  reviewIndexInfoQueryAtom,
} from "./review-branch-query-atoms";
import {
  reviewSummaryAtom,
  reviewSummaryQueryAtom,
} from "./review-summary-query-atoms";
import { reviewFileDiffQueryFamily } from "./review-file-diff-query";
import {
  buildReviewSummaryParams,
  toRepoRelativePaths,
} from "./review-diff-store-helpers";
import type {
  GitMetadata,
  ReviewDiffFilter,
  ReviewStore,
} from "./review-diff-store-types";

function resolveReviewSummaryQuery(
  store: ReviewStore,
  source: ReviewDiffFilter | null = store.get(reviewDiffSourceAtom),
) {
  const baseBranchQuery = store.get(reviewBaseBranchQueryAtom);
  const waitingForBaseBranch =
    source === "branch" &&
    baseBranchQuery.data == null &&
    baseBranchQuery.isFetching;
  const params = buildReviewSummaryParams({
    baseBranch: store.get(reviewBaseBranchAtom),
    commitSha: store.get(reviewCommitShaAtom),
    cwd: store.get(reviewCwdAtom),
    enabled: store.get(isReviewDiffEnabledAtom) && !waitingForBaseBranch,
    hideWhitespace: store.get(hideWhitespaceAtom),
    hostConfig: store.get(reviewHostConfigAtom),
    metadata: store.get(reviewGitMetadataQueryAtom).data ?? null,
    source,
  });
  return params == null
    ? null
    : store.query.snapshot(reviewSummaryQueryAtom, params);
}

async function refetchReviewSummaryQuery(store: ReviewStore): Promise<void> {
  const query = resolveReviewSummaryQuery(store);
  if (query == null || query.getOptions().enabled === false) return;
  await query.getOrFetch();
}

async function invalidateAndRefetchReviewDiff(
  store: ReviewStore,
  metadata: GitMetadata,
): Promise<void> {
  try {
    await Promise.all([
      invalidateReviewDiffQueries(store.queryClient, metadata, {
        hostKey: store.get(reviewHostKeyAtom),
      }),
      refetchReviewSummaryQuery(store),
    ]);
  } catch (error) {
    if (!(error instanceof RequestAbortedError)) throw error;
  }
}

export async function refetchReviewFileDiff(
  store: ReviewStore,
  path: string,
): Promise<void> {
  await store.get(reviewFileDiffQueryFamily, path).refetch();
}

export async function refreshReviewFilesForPaths(
  store: ReviewStore,
  paths: string[],
): Promise<void> {
  const metadata: GitMetadata | undefined = store.get(
    reviewGitMetadataQueryAtom,
  ).data;
  const cwd = store.get(reviewCwdAtom);
  const relativePaths = toRepoRelativePaths({
    cwd,
    gitRoot: metadata?.root ?? null,
    paths,
  });
  if (
    !(
      !store.get(isReviewDiffEnabledAtom) ||
      metadata == null ||
      cwd == null ||
      relativePaths.length === 0
    )
  ) {
    try {
      await clearGitStatusCache({
        clearUntrackedPathsCache: false,
        hostConfig: store.get(reviewHostConfigAtom),
        operationSource: "review_model",
        paths: relativePaths,
        root: metadata.root,
      });
    } catch {}
    await invalidateAndRefetchReviewDiff(store, metadata);
  }
}

export async function refreshReviewIndexInfo(
  store: ReviewStore,
): Promise<void> {
  if (store.get(isReviewIndexModeAtom))
    await store.get(reviewIndexInfoQueryAtom).refetch();
}

export function setReviewDiffTarget(
  store: ReviewStore,
  diffText: string | null,
  path: string | null,
): void {
  store.set(reviewDiffTargetTextAtom, diffText);
  store.set(reviewDiffTargetPathAtom, path);
}

export function selectReviewCommit(
  store: ReviewStore,
  commitSha: string | null,
): void {
  store.set(reviewCommitShaAtom, commitSha);
  setReviewDiffFilter(store, "commit");
}

export function watchReviewDiffEffect(store: ReviewStore): () => void {
  return store.watch((current) => {
    if (current.get(reviewDiffFilterAtom) === "commit") {
      const commitSha = current.get(reviewCommitShaAtom);
      if (commitSha == null) {
        setReviewDiffFilter(current, "branch");
        return;
      }
      const commits = current.get(reviewBranchCommitsQueryAtom).data?.commits;
      if (
        !(
          commits == null ||
          commits.some((commit: { sha: string }) => commit.sha === commitSha)
        )
      ) {
        current.set(reviewCommitShaAtom, null);
        setReviewDiffFilter(current, "branch");
        return;
      }
    }
    const source = current.get(reviewDiffSourceAtom);
    if (source === "branch") current.get(reviewBaseBranchAtom);
    if (
      current.get(reviewGitMetadataQueryAtom).data != null &&
      (current.get(reviewDiffTargetTextAtom) != null ||
        (current.get(isReviewDiffEnabledAtom) && source != null))
    )
      refreshReviewDiff(store);
  });
}
