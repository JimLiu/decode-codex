// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Per-file review diff query family and parsed external diff target atom.

import {
  buildReviewDiffQueryKey,
  createComputedAtom,
  createScopedQueryAtom,
  hideWhitespaceAtom,
  threadAtomScope,
  timeConstants,
} from "../boundaries/onboarding-commons-externals.facade";
import { requestReviewFileDiff } from "./review-diff-request-batcher";
import {
  reviewCwdAtom,
  reviewHostConfigAtom,
  reviewHostKeyAtom,
} from "./thread-review-context";
import { reviewGitMetadataQueryAtom } from "./review-git-metadata";
import {
  reviewCommitShaAtom,
  reviewDiffTargetTextAtom,
} from "./review-diff-target-state";
import { reviewBaseBranchAtom } from "./review-branch-query-atoms";
import { isReviewDiffEnabledAtom } from "./review-diff-mode-atoms";
import {
  reviewFilesByDisplayPathAtom,
  reviewSummaryAtom,
} from "./review-summary-query-atoms";
import {
  buildReviewSummaryQueryParams,
  parseReviewDiff,
  queryKeysShareBaseExceptLast,
  reviewDiffRetryDelay,
  shouldRetryReviewDiff,
} from "./review-diff-store-helpers";
import type { ComputedAtomContext } from "./review-diff-store-types";

export const reviewFileDiffQueryFamily = createScopedQueryAtom(
  threadAtomScope,
  (path: string, { get }: { get: (atom: unknown, arg?: unknown) => any }) => {
    const metadata = get(reviewGitMetadataQueryAtom).data;
    const summary = get(reviewSummaryAtom).data;
    const fileEntry = get(reviewFilesByDisplayPathAtom)?.get(path) ?? null;
    const cwd = get(reviewCwdAtom);
    const baseBranch = get(reviewBaseBranchAtom);
    const commitSha = get(reviewCommitShaAtom);
    const hostConfig = get(reviewHostConfigAtom);
    const hostKey = get(reviewHostKeyAtom);
    const hideWhitespace = get(hideWhitespaceAtom);
    const queryKey =
      metadata != null &&
      summary?.type === "success" &&
      fileEntry != null &&
      cwd != null
        ? [
            ...buildReviewDiffQueryKey({
              metadata,
              method: "review-diff",
              params: {
                ...buildReviewSummaryQueryParams({
                  cwd,
                  hideWhitespace,
                  source: summary.source,
                  baseBranch,
                  commitSha,
                }),
                files: [
                  {
                    path,
                    changeKind: fileEntry.changeKind,
                    previousPath: fileEntry.previousPath ?? undefined,
                  },
                ],
              },
              hostKey,
            }),
            fileEntry.revision,
          ]
        : ["git", "disabled", "review-diff", path];
    return {
      queryKey,
      queryFn: async ({ signal }: { signal: AbortSignal }) => {
        if (summary?.type !== "success" || fileEntry == null || cwd == null)
          throw Error("Missing review diff metadata");
        return requestReviewFileDiff({
          baseBranch,
          commitSha,
          changeKind: fileEntry.changeKind,
          cwd,
          hideWhitespace,
          hostConfig,
          path,
          previousPath: fileEntry.previousPath,
          signal,
          source: summary.source,
        });
      },
      enabled:
        get(isReviewDiffEnabledAtom) &&
        metadata != null &&
        summary?.type === "success" &&
        fileEntry != null &&
        cwd != null,
      refetchOnWindowFocus: true,
      retry: shouldRetryReviewDiff,
      retryDelay: reviewDiffRetryDelay,
      staleTime: timeConstants.FIVE_SECONDS,
      placeholderData: (
        previous: unknown,
        previousQuery: { queryKey: unknown[] } | null,
      ) => {
        if (
          !(
            previousQuery == null ||
            !queryKeysShareBaseExceptLast(queryKey, previousQuery.queryKey)
          )
        )
          return previous;
      },
    };
  },
);

export const reviewDiffTargetParsedAtom = createComputedAtom(
  threadAtomScope,
  ({ get }: ComputedAtomContext) =>
    parseReviewDiff(get(reviewDiffTargetTextAtom)),
);
