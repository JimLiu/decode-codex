// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Chat attachment and prompt helpers for pull request review comments.
import { once } from "../../runtime/commonjs-interop";
import {
  getReviewCommentAttachmentKeyValue,
  initPullRequestReviewCommentAttachmentStateRuntime,
  initPullRequestReviewCommentRuntime,
  MY_REQUEST_PROMPT_HEADER,
  updatePullRequestReviewCommentAttachments,
} from "./pull-request-prompt-runtime";
import {
  focusComposerAfterPullRequestPrompt,
  initPullRequestComposerContextChunk,
  initPullRequestPromptActionsChunk,
  submitPullRequestPrompt,
} from "../../composer/pull-request-prompt-actions";

type ReviewCommentAttachment = {
  reviewThreadId?: string | null;
  url?: string | null;
  position?: {
    path?: string | null;
  };
};

function buildPullRequestCommentsFixPrompt({
  baseBranch,
  headBranch,
  number,
}: {
  baseBranch: string;
  headBranch: string;
  number: number;
}) {
  return [
    "## Pull request comments:",
    `Review ${`PR ${number}`}${` (${headBranch} -> ${baseBranch})`} and address the attached outstanding PR comments with the smallest safe changes.`,
    "Start from the attached unresolved review threads and comments.",
    "Address every actionable comment without asking the user which ones to handle.",
    "If a comment needs clarification, is already outdated, or should not be changed, explain that clearly instead of guessing.",
    MY_REQUEST_PROMPT_HEADER,
    "Address all actionable attached PR feedback.",
  ].join("\n");
}

export function setPullRequestCommentsAttached(
  scope: unknown,
  {
    attached,
    commentAttachments,
    conversationId,
  }: {
    attached: boolean;
    commentAttachments: ReviewCommentAttachment[];
    conversationId?: string | null;
  },
) {
  return conversationId == null || commentAttachments.length === 0
    ? false
    : (updatePullRequestReviewCommentAttachments(
        scope,
        conversationId,
        (currentAttachments: ReviewCommentAttachment[]) => {
          if (attached) {
            return appendMissingReviewCommentAttachments(
              currentAttachments,
              commentAttachments,
            );
          }
          let removedAttachmentKeys = new Set(
              commentAttachments.map(getReviewCommentAttachmentKeyValue),
            ),
            nextAttachments = currentAttachments.filter(
              (item) =>
                !removedAttachmentKeys.has(
                  getReviewCommentAttachmentKeyValue(item),
                ),
            );
          return nextAttachments.length === currentAttachments.length
            ? currentAttachments
            : nextAttachments;
        },
      ),
      true);
}

export function attachPullRequestCommentsAndPromptFix(
  scope: unknown,
  {
    baseBranch,
    commentAttachments,
    conversationId,
    focusComposer,
    headBranch,
    number,
  }: {
    baseBranch?: string | null;
    commentAttachments: ReviewCommentAttachment[];
    conversationId?: string | null;
    focusComposer: boolean;
    headBranch?: string | null;
    number?: number | null;
  },
) {
  return baseBranch == null ||
    conversationId == null ||
    headBranch == null ||
    number == null ||
    commentAttachments.length === 0
    ? false
    : (setPullRequestCommentsAttached(scope, {
        attached: true,
        commentAttachments,
        conversationId,
      }),
      submitPullRequestPrompt(
        scope,
        buildPullRequestCommentsFixPrompt({ baseBranch, headBranch, number }),
      ),
      focusComposer && focusComposerAfterPullRequestPrompt(),
      true);
}

function appendMissingReviewCommentAttachments(
  currentAttachments: ReviewCommentAttachment[],
  attachmentsToAdd: ReviewCommentAttachment[],
) {
  let nextAttachments = [...currentAttachments],
    existingAttachmentKeys = new Set(
      currentAttachments.map(getReviewCommentAttachmentKeyValue),
    ),
    didAppend = false;
  for (let attachment of attachmentsToAdd) {
    let attachmentKey = getReviewCommentAttachmentKeyValue(attachment);
    existingAttachmentKeys.has(attachmentKey) ||
      (existingAttachmentKeys.add(attachmentKey),
      nextAttachments.push(attachment),
      (didAppend = true));
  }
  return didAppend ? nextAttachments : currentAttachments;
}

export const initPullRequestCommentFixHelpersChunk = once(() => {
  initPullRequestReviewCommentAttachmentStateRuntime();
  initPullRequestComposerContextChunk();
  initPullRequestPromptActionsChunk();
  initPullRequestReviewCommentRuntime();
});
