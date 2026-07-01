// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Review location, enablement, source-mode, metadata readiness, and root atoms.

import {
  buildGitMetadataQueryOptions,
  createComputedAtom,
  createComputedQueryAtom,
  threadAtomScope,
} from "../boundaries/onboarding-commons-externals.facade";
import {
  reviewCwdAtom,
  reviewHostConfigAtom,
  reviewHostKeyAtom,
} from "./thread-review-context";
import {
  reviewCurrentBranchQueryAtom,
  workspaceReviewContextAtom,
} from "./review-git-metadata";
import { reviewDiffFilterAtom } from "./review-diff-model";
import {
  reviewCommitShaAtom,
  reviewDiffTargetPathAtom,
} from "./review-diff-target-state";
import { isIndexDiffFilter } from "./review-diff-store-helpers";
import type {
  ComputedAtomContext,
  ReviewDiffFilter,
} from "./review-diff-store-types";

export const reviewLocationKindAtom = createComputedAtom(
  threadAtomScope,
  ({ get, scope }: ComputedAtomContext): "cloud" | "worktree" | "local" =>
    scope.value.routeKind === "remote-thread"
      ? "cloud"
      : get(workspaceReviewContextAtom).isCodexWorktree
        ? "worktree"
        : "local",
);

export const isReviewDiffEnabledAtom = createComputedAtom(
  threadAtomScope,
  ({ get }: ComputedAtomContext): boolean => {
    const filter: ReviewDiffFilter = get(reviewDiffFilterAtom);
    return (
      get(reviewCwdAtom) != null &&
      get(reviewLocationKindAtom) !== "cloud" &&
      filter !== "last-turn" &&
      (filter !== "commit" || get(reviewCommitShaAtom) != null)
    );
  },
);

export const reviewDiffSourceAtom = createComputedAtom(
  threadAtomScope,
  ({ get }: ComputedAtomContext): ReviewDiffFilter | null => {
    const filter: ReviewDiffFilter = get(reviewDiffFilterAtom);
    return filter === "last-turn" ||
      (filter === "commit" && get(reviewCommitShaAtom) == null)
      ? null
      : filter;
  },
);

export const isReviewBranchModeAtom = createComputedAtom(
  threadAtomScope,
  ({ get }: ComputedAtomContext): boolean =>
    get(isReviewDiffEnabledAtom) && get(reviewDiffFilterAtom) === "branch",
);

export const isReviewIndexModeAtom = createComputedAtom(
  threadAtomScope,
  ({ get }: ComputedAtomContext): boolean =>
    get(isReviewDiffEnabledAtom) &&
    isIndexDiffFilter(get(reviewDiffFilterAtom)),
);

export const reviewGitMetadataReadinessQueryAtom = createComputedQueryAtom(
  threadAtomScope,
  ({ get }: ComputedAtomContext) =>
    buildGitMetadataQueryOptions(
      get(reviewDiffTargetPathAtom),
      get(reviewHostKeyAtom),
      get(reviewHostConfigAtom),
      "review_model",
      { watchForGitInit: true },
    ),
);

export const reviewRootAtom = createComputedAtom(
  threadAtomScope,
  ({ get }: ComputedAtomContext): string | null =>
    get(reviewGitMetadataReadinessQueryAtom).data?.root ??
    get(reviewDiffTargetPathAtom),
);

export const reviewCurrentBranchAtom = reviewCurrentBranchQueryAtom;
