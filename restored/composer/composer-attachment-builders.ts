// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// Pure attachment/comment builders used by the composer submit path.
//
// `splitCommentsForSubmit` folds the image-comment overlay draft into the prompt
// text; `buildComposerImageInputItems` turns staged image attachments into the
// conversation input items the app-server expects; `normalizeConversationAttachments`
// de-duplicates the merged attachment list; `removeAllImageComments` clears the
// image-comment overlay for a composer scope. The image-item builder, the
// attachment normalizer, and the overlay reset resolve to the remote-projects /
// worktree new-thread bundles this chunk was code-split from; the comment→prompt
// folding is a pure helper reconstructed inline.
import { Og as buildComposerImageInputItemsImpl } from "../vendor/remote-projects-app-shared-current-bundle";
import { Ag as normalizeConversationAttachmentsImpl } from "../vendor/remote-projects-app-shared-current-bundle";
import { s as removeAllImageCommentsImpl } from "../vendor/worktree-new-thread-query-current-bundle";
import type { ComposerImageAttachment } from "./composer-attachment-atoms";

/** A positioned image comment carried by the image-comment overlay draft. */
export interface ComposerImageComment {
  readonly x: number;
  readonly y: number;
  readonly text: string;
}

/** A conversation input item / attachment sent with a start-thread or follow-up request. */
export interface ConversationInputAttachment {
  readonly type?: string;
  readonly [field: string]: unknown;
}

/** A composer scope store handle (only its identity is needed to reset overlay state). */
export interface ComposerScopeHandle {
  get(atom: unknown, ...args: unknown[]): unknown;
  set(atom: unknown, ...args: unknown[]): void;
  readonly [field: string]: unknown;
}

function formatCommentCoordinate(fraction: number): string {
  return `${(Math.min(Math.max(fraction, 0), 1) * 100).toFixed(1)}%`;
}

/**
 * Fold the image-comment overlay draft into the prompt: when there are comments,
 * render them as a numbered list of `(x%, y%) text` lines followed by the trimmed
 * prompt; otherwise return the prompt unchanged.
 */
export function splitCommentsForSubmit({
  comments,
  prompt,
}: {
  comments: readonly ComposerImageComment[];
  prompt: string;
}): string {
  if (comments.length === 0) return prompt;
  const lines = comments.map(
    (comment, index) =>
      `${index + 1}. (x: ${formatCommentCoordinate(
        comment.x,
      )}, y: ${formatCommentCoordinate(comment.y)}) ${comment.text}`,
  );
  const trimmedPrompt = prompt.trim();
  if (trimmedPrompt.length > 0) lines.push("", trimmedPrompt);
  return lines.join("\n");
}

/** Build conversation image input items from the composer's staged image attachments. */
export function buildComposerImageInputItems(
  imageAttachments: readonly ComposerImageAttachment[],
): ConversationInputAttachment[] {
  return buildComposerImageInputItemsImpl(imageAttachments);
}

/** De-duplicate / normalize a merged list of conversation input attachments. */
export function normalizeConversationAttachments(
  attachments: readonly ConversationInputAttachment[],
): ConversationInputAttachment[] {
  return normalizeConversationAttachmentsImpl(attachments);
}

/** Clear the image-comment overlay draft for the given composer scope. */
export function removeAllImageComments(scope: ComposerScopeHandle): void {
  removeAllImageCommentsImpl(scope);
}
