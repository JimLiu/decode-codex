// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~bj5tp28r-Dcs9S3fj.js
// Thread review panel selection helpers backed by the current projects app bundle.
import { reviewBaseBranchOverrideKey } from "../boundaries/onboarding-commons-externals.facade";
import {
  setReviewBaseBranchOverride,
  setReviewDiffFilter,
} from "../review/review-diff-model";
import { revealReviewFile } from "../review/review-file-navigation";

type ThreadReviewPanelScope = {
  value?: unknown;
};

export type ThreadReviewPanelView =
  | "last-turn"
  | "branch"
  | "unstaged"
  | "staged";

export const THREAD_REVIEW_PANEL_TAB_ID = "diff";

export function selectThreadReviewBaseBranch(
  scope: ThreadReviewPanelScope,
  threadId: string | null,
  baseBranch: string,
): void {
  setReviewBaseBranchOverride(
    scope as never,
    getReviewBaseBranchOverrideKey(scope, threadId),
    baseBranch,
  );
}

export function selectThreadReviewView(
  scope: ThreadReviewPanelScope,
  view: ThreadReviewPanelView,
): void {
  setReviewDiffFilter(scope as never, view);
}

export function focusThreadReviewPath(
  scope: ThreadReviewPanelScope,
  path: string,
): void {
  revealReviewFile(scope as never, path);
}

function getReviewBaseBranchOverrideKey(
  scope: ThreadReviewPanelScope,
  threadId: string | null,
): unknown {
  return reviewBaseBranchOverrideKey(
    scope.value ??
      (threadId == null
        ? null
        : { routeKind: "local-thread", conversationId: threadId }),
  );
}
