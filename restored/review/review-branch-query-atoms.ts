// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Base-branch, recent-branches, branch-commits, and index-info query atoms.

import {
  createComputedAtom,
  createComputedQueryAtom,
  createGitQueryOptions,
  createScopedQueryAtom,
  disabledQueryResult,
  getHostKey,
  normalizeRequestCwd,
  pendingQueryResult,
  reviewMetadataScope,
  threadAtomScope,
  timeConstants,
} from "../boundaries/onboarding-commons-externals.facade";
import {
  reviewCwdAtom,
  reviewHostConfigAtom,
  reviewHostKeyAtom,
} from "./thread-review-context";
import { reviewGitMetadataQueryAtom } from "./review-git-metadata";
import { reviewBaseBranchOverrideForScopeAtom } from "./review-diff-target-state";
import { isReviewIndexModeAtom } from "./review-diff-mode-atoms";
import {
  RECENT_BRANCHES_LIMIT,
  resolveReviewBaseBranch,
} from "./review-diff-store-helpers";
import type {
  ComputedAtomContext,
  GitMetadata,
} from "./review-diff-store-types";
import { reviewCurrentBranchAtom } from "./review-diff-mode-atoms";

export const reviewBaseBranchQueryFamily = createScopedQueryAtom(
  reviewMetadataScope,
  (metadata: any) =>
    createGitQueryOptions(
      "base-branch",
      { commonDir: metadata.commonDir, root: metadata.root },
      { operationSource: "review_model", root: metadata.root },
      getHostKey(metadata.hostConfig),
      metadata.hostConfig,
    ),
);

export const reviewBaseBranchQueryAtom = createComputedAtom(
  threadAtomScope,
  ({ get }: ComputedAtomContext) => {
    const metadataQuery = get(reviewGitMetadataQueryAtom);
    const metadata: GitMetadata | null = metadataQuery.data ?? null;
    return metadata == null
      ? pendingQueryResult(metadataQuery)
      : get(reviewBaseBranchQueryFamily, {
          commonDir: metadata.commonDir,
          hostConfig: get(reviewHostConfigAtom),
          root: metadata.root,
        });
  },
);

export { reviewCurrentBranchAtom };

export const reviewRecentBranchesQueryAtom = createComputedQueryAtom(
  threadAtomScope,
  ({ get }: ComputedAtomContext) => {
    const hostConfig = get(reviewHostConfigAtom);
    const hostKey = get(reviewHostKeyAtom);
    const metadata: GitMetadata | null =
      get(reviewGitMetadataQueryAtom).data ?? null;
    return createGitQueryOptions(
      "recent-branches",
      metadata,
      metadata == null
        ? null
        : {
            limit: RECENT_BRANCHES_LIMIT,
            operationSource: "review_model",
            root: metadata.root,
          },
      hostKey,
      hostConfig,
    );
  },
);

export const reviewBaseBranchAtom = createComputedAtom(
  threadAtomScope,
  ({ get }: ComputedAtomContext): string | null =>
    resolveReviewBaseBranch(
      get(reviewBaseBranchQueryAtom).data ?? null,
      get(reviewBaseBranchOverrideForScopeAtom),
    ),
);

export const reviewBranchCommitsQueryAtom = createComputedQueryAtom(
  threadAtomScope,
  ({ get }: ComputedAtomContext) => {
    const hostConfig = get(reviewHostConfigAtom);
    const hostKey = get(reviewHostKeyAtom);
    const metadata: GitMetadata | null =
      get(reviewGitMetadataQueryAtom).data ?? null;
    const baseBranch = get(reviewBaseBranchAtom);
    return createGitQueryOptions(
      "branch-commits",
      metadata,
      metadata == null
        ? null
        : {
            baseBranch: baseBranch ?? undefined,
            operationSource: "review_model",
            root: metadata.root,
          },
      hostKey,
      hostConfig,
      { staleTime: timeConstants.FIVE_SECONDS },
    );
  },
);

export const reviewIndexInfoQueryFamily = createScopedQueryAtom(
  reviewMetadataScope,
  (metadata: any) =>
    createGitQueryOptions(
      "index-info",
      { commonDir: metadata.commonDir, root: metadata.root },
      {
        cwd: normalizeRequestCwd(metadata.cwd),
        operationSource: "review_model",
      },
      getHostKey(metadata.hostConfig),
      metadata.hostConfig,
      { refetchOnWindowFocus: true, staleTime: timeConstants.FIVE_SECONDS },
    ),
);

export const reviewIndexInfoQueryAtom = createComputedAtom(
  threadAtomScope,
  ({ get }: ComputedAtomContext) => {
    const isIndexMode = get(isReviewIndexModeAtom);
    const cwd = get(reviewCwdAtom);
    if (!isIndexMode || cwd == null) return disabledQueryResult();
    const metadataQuery = get(reviewGitMetadataQueryAtom);
    const metadata: GitMetadata | null = metadataQuery.data ?? null;
    return metadata == null
      ? pendingQueryResult(metadataQuery)
      : get(reviewIndexInfoQueryFamily, {
          commonDir: metadata.commonDir,
          cwd,
          hostConfig: get(reviewHostConfigAtom),
          root: metadata.root,
        });
  },
);
