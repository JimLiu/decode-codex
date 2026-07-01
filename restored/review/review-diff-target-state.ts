// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Review diff target, commit, base-branch override, and refresh state atoms.

import {
  appAtomScope,
  createComputedAtom,
  createParametricStateAtom,
  createScopedAtom,
  reviewBaseBranchOverrideKey,
  reviewMetadataScope,
  threadAtomScope,
} from "../boundaries/onboarding-commons-externals.facade";
import type { ComputedAtomContext } from "./review-diff-store-types";

export const reviewDiffTargetTextAtom = createScopedAtom(threadAtomScope, null);
export const reviewDiffTargetPathAtom = createScopedAtom(threadAtomScope, null);
export const reviewCommitShaAtom = createScopedAtom(appAtomScope, null);

export const reviewDiffTargetPathReadonlyAtom = createComputedAtom(
  threadAtomScope,
  ({ get }: ComputedAtomContext) => get(reviewDiffTargetPathAtom),
);

export const reviewBaseBranchOverrideAtom = createParametricStateAtom(
  reviewMetadataScope,
  () => null,
);

export const reviewBaseBranchOverrideForScopeAtom = createComputedAtom(
  threadAtomScope,
  ({ get, scope }: ComputedAtomContext) =>
    get(reviewBaseBranchOverrideAtom, reviewBaseBranchOverrideKey(scope.value)),
);

export const isReviewRefreshingAtom = createScopedAtom(threadAtomScope, false);
