// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Pull-request prompt copy, review-comment attachment state, and comment-card helpers.
import {
  Ba as pullRequestReviewCommentAttachmentsSignal,
  Ha as updatePullRequestReviewCommentAttachmentsRaw,
  Va as initPullRequestReviewCommentAttachmentStateChunkRaw,
} from "../vendor/projects-app-shared-runtime";
import {
  initPullRequestCommentCardChunk as initPullRequestCommentCardChunkRaw,
  PullRequestCommentCard,
} from "./pull-request-comment-card";
import {
  Qc as openPullRequestReviewCommentInReviewPanel,
  eu as getThreadBranchMismatchState,
  tu as initThreadBranchComparisonChunkRaw,
  yc as initPullRequestReviewCommentNavigationChunkRaw,
  Xc as initPullRequestCommentCardSupportChunkRaw,
} from "../vendor/profile-page-runtime";

const MY_REQUEST_PROMPT_HEADER = "## My request for Codex:";
const PULL_REQUEST_FIX_PROMPT_PREAMBLE = "## Pull request fix:";

type ReviewCommentAttachmentPosition = {
  line: number;
  path: string;
  side: "left" | "right" | string;
  start_line?: number | null;
  start_side?: "left" | "right" | string | null;
};

type ReviewCommentAttachmentContentItem = {
  content_type?: string | null;
  text?: string | null;
};

type ReviewCommentAttachmentKeyInput = {
  content: ReviewCommentAttachmentContentItem[];
  position: ReviewCommentAttachmentPosition;
};

function getReviewCommentAttachmentText(
  attachment: ReviewCommentAttachmentKeyInput,
): string {
  return attachment.content
    .map((item) => (item.content_type === "text" ? (item.text ?? "") : ""))
    .join("");
}

function formatReviewCommentSideLine(side: string, line: number): string {
  return `${side === "left" ? "L" : "R"}${line}`;
}

function formatReviewCommentLineRange(
  attachment: ReviewCommentAttachmentKeyInput,
): string {
  const { line: endLine, side: endSide } = attachment.position;
  const startLine = attachment.position.start_line ?? endLine;
  const startSide = attachment.position.start_side ?? endSide;

  if (startSide !== endSide) {
    return `${formatReviewCommentSideLine(
      startSide,
      startLine,
    )}-${formatReviewCommentSideLine(endSide, endLine)}`;
  }

  const firstLine = Math.min(startLine, endLine);
  const lastLine = Math.max(startLine, endLine);
  return firstLine === lastLine ? String(lastLine) : `${firstLine}-${lastLine}`;
}

function getReviewCommentAttachmentKeyValue(attachment: unknown): string {
  const reviewAttachment = attachment as ReviewCommentAttachmentKeyInput;
  return [
    reviewAttachment.position.path,
    reviewAttachment.position.side,
    formatReviewCommentLineRange(reviewAttachment),
    getReviewCommentAttachmentText(reviewAttachment),
  ].join("|");
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
  // Current restored prompt constants and attachment-key helpers are local.
}

export function initPullRequestReviewCommentAttachmentStateRuntime(): void {
  initPullRequestReviewCommentAttachmentStateChunkRaw();
}

export function initPullRequestCommentCardRuntime(): void {
  initPullRequestCommentCardChunkRaw();
  initPullRequestCommentCardSupportChunkRaw();
}

export function initPullRequestReviewCommentNavigationRuntime(): void {
  initPullRequestReviewCommentNavigationChunkRaw();
}

export function initThreadBranchComparisonRuntime(): void {
  initThreadBranchComparisonChunkRaw();
}
