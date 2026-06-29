// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Pull-request prompt copy, review-comment attachment state, and comment-card helpers.
import {
  Av as getReviewCommentAttachmentKeyValueRaw,
  Sv as initConversationPromptContextHelpers,
} from "../../ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~bj5tp28r-Dcs9S3fj.js";
import {
  Ba as pullRequestReviewCommentAttachmentsSignal,
  Ha as updatePullRequestReviewCommentAttachmentsRaw,
  Va as initPullRequestReviewCommentAttachmentStateChunkRaw,
} from "../vendor/projects-app-shared-runtime";
import {
  $ as initPullRequestCommentCardPrimitivesChunkRaw,
  a as PullRequestCommentCard,
  o as initPullRequestCommentCardChunkRaw,
} from "../vendor/pull-request-thread-actions-runtime";
import {
  Qc as openPullRequestReviewCommentInReviewPanel,
  eu as getThreadBranchMismatchState,
  tu as initThreadBranchComparisonChunkRaw,
  yc as initPullRequestReviewCommentNavigationChunkRaw,
  Xc as initPullRequestCommentCardSupportChunkRaw,
} from "../vendor/profile-page-runtime";

const MY_REQUEST_PROMPT_HEADER = "## My request for Codex:";
const PULL_REQUEST_FIX_PROMPT_PREAMBLE = "## Pull request fix:";

function getReviewCommentAttachmentKeyValue(attachment: unknown): string {
  initConversationPromptContextHelpers();
  return getReviewCommentAttachmentKeyValueRaw(attachment);
}

export {
  getThreadBranchMismatchState,
  getReviewCommentAttachmentKeyValue,
  MY_REQUEST_PROMPT_HEADER,
  openPullRequestReviewCommentInReviewPanel,
  PULL_REQUEST_FIX_PROMPT_PREAMBLE,
  PullRequestCommentCard,
  pullRequestReviewCommentAttachmentsSignal,
};

export type PullRequestReviewCommentAttachmentUpdater<TAttachment> = (
  currentAttachments: TAttachment[],
) => TAttachment[];

export function updatePullRequestReviewCommentAttachments<TAttachment>(
  scope: unknown,
  conversationId: string,
  updater: PullRequestReviewCommentAttachmentUpdater<TAttachment>,
): void {
  updatePullRequestReviewCommentAttachmentsRaw(scope, conversationId, updater);
}

export function initPullRequestReviewCommentRuntime(): void {
  initConversationPromptContextHelpers();
}

export function initPullRequestReviewCommentAttachmentStateRuntime(): void {
  initPullRequestReviewCommentAttachmentStateChunkRaw();
}

export function initPullRequestCommentCardRuntime(): void {
  initPullRequestCommentCardPrimitivesChunkRaw();
  initPullRequestCommentCardChunkRaw();
  initPullRequestCommentCardSupportChunkRaw();
}

export function initPullRequestReviewCommentNavigationRuntime(): void {
  initPullRequestReviewCommentNavigationChunkRaw();
}

export function initThreadBranchComparisonRuntime(): void {
  initThreadBranchComparisonChunkRaw();
}
