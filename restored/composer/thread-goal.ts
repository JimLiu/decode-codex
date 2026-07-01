// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// Thread-goal lifecycle helpers for the new-thread composer: parsing goal
// prompts, clearing prompt atoms on submit errors, cancelling/resuming the
// GoalResumePromptDialog, and saving the aeon start-target text attachment.
import {
  addSelectedTextAttachment,
  updateComposerViewStateField,
} from "./composer-view-state";
import { sendAppServerRequest } from "../boundaries/use-host-config.facade";
import type {
  ImageAttachment,
  PastedTextAttachment,
  ThreadGoalDraft,
} from "../threads/pending-worktree-store/types";
import type { ScopeStore } from "./composer-view-state/types";

// ---------------------------------------------------------------------------
// Private helpers for parseGoalSubmit
// ---------------------------------------------------------------------------

/** Matches `/goal`, `/goooal`, etc. (with optional easter-egg variants). */
const GOAL_PREFIX_REGEX = /^\/go+al(?=$| )/;
const STANDARD_GOAL_CMD = "/goal";

/**
 * Extracts the goal body from a raw prompt that begins with a `/goal` command.
 * Returns `null` when the prompt does not start with a recognised goal prefix.
 */
function parseGoalCommand(
  text: string,
  isEasterEggEnabled: boolean,
): string | null {
  const trimmed = text.trimStart();
  const match = trimmed.match(GOAL_PREFIX_REGEX)?.[0];
  if (match == null || (!isEasterEggEnabled && match !== STANDARD_GOAL_CMD)) {
    return null;
  }
  return trimmed.slice(match.length).trimStart();
}

/**
 * Unescapes the display-text portion of a Markdown link so that attachment
 * mentions like `[My Plugin\]\(](plugin://...)` become `[My Plugin](`.
 */
function unescapeMarkdownLinkText(text: string): string {
  return text
    .replaceAll("\\]\\(", "](")
    .replaceAll("\\]", "]")
    .replaceAll("\\\\", "\\");
}

// ---------------------------------------------------------------------------
// parseGoalSubmit
// ---------------------------------------------------------------------------

export interface ParseGoalSubmitOptions {
  /** A draft that was already confirmed by the replacement-confirmation dialog. */
  confirmedGoalReplacementDraft?: ThreadGoalDraft | null;
  /** Returns the current image attachments from the composer. */
  getImageAttachments: () => ImageAttachment[];
  /** Returns the current pasted-text attachments from the composer scope. */
  getPastedTextAttachments: () => PastedTextAttachment[];
  /** When true, allows extended `/gooo…al` easter-egg prefixes. */
  isEasterEggEnabled?: boolean;
  /** Whether the goal-action toolbar button is currently available. */
  isGoalActionAvailable: boolean;
  /** Whether the composer is in goal-mode (treats any text as the goal body). */
  isGoalModeActive: boolean;
  /** Raw text value from the composer editor. */
  promptRaw: string;
}

export type ParseGoalSubmitResult =
  | { status: "not-goal" }
  | { status: "empty" }
  | { status: "ready"; draft: ThreadGoalDraft };

/**
 * Determines whether the current composer content represents a thread-goal
 * submission and, if so, builds the draft.
 *
 * Returns `{ status: "not-goal" }` when the prompt is not a goal.
 * Returns `{ status: "empty" }` when the goal body is empty.
 * Returns `{ status: "ready", draft }` with the parsed draft otherwise.
 */
export async function parseGoalSubmit({
  confirmedGoalReplacementDraft,
  getImageAttachments,
  getPastedTextAttachments,
  isEasterEggEnabled = false,
  isGoalActionAvailable,
  isGoalModeActive,
  promptRaw,
}: ParseGoalSubmitOptions): Promise<ParseGoalSubmitResult> {
  if (confirmedGoalReplacementDraft != null) {
    return { status: "ready", draft: confirmedGoalReplacementDraft };
  }

  let goalText = isGoalActionAvailable
    ? parseGoalCommand(promptRaw, isEasterEggEnabled)
    : null;

  // In goal-mode every non-empty prompt is treated as the goal body.
  if (isGoalActionAvailable && goalText == null && isGoalModeActive) {
    goalText = promptRaw;
  }

  if (goalText == null) return { status: "not-goal" };

  // Strip plugin/app Markdown links down to their display text.
  goalText = goalText
    .replace(
      /\[((?:\\.|[^\]])+)\]\((?:plugin|app):\/\/(?:\\.|[^)])+\)/g,
      (_, t: string) => unescapeMarkdownLinkText(t),
    )
    .trim();

  const pastedTextAttachments = getPastedTextAttachments();
  const imageAttachments = getImageAttachments();

  if (
    goalText.length === 0 &&
    pastedTextAttachments.length === 0 &&
    imageAttachments.length === 0
  ) {
    return { status: "empty" };
  }

  return {
    status: "ready",
    draft: {
      objective: goalText,
      pastedTextAttachments: [...pastedTextAttachments],
      imageAttachments: imageAttachments.map(
        ({ src, localPath, filename }) => ({
          src,
          localPath,
          filename,
        }),
      ),
    },
  };
}

// ---------------------------------------------------------------------------
// clearGoalPromptAtomsRunner
// ---------------------------------------------------------------------------

/** Minimal shape required of each file-attachment entry. */
interface FileAttachmentLike {
  path: string;
}

function removeAttachmentFromHost(hostId: string, path: string): void {
  void sendAppServerRequest("remove-pasted-text-attachment-for-host", {
    hostId,
    path,
  }).catch(() => undefined);
}

/**
 * Fires fire-and-forget requests to remove every composer file attachment and
 * pasted-text attachment from the execution host.  Called on submit errors so
 * orphaned temp files are cleaned up.
 */
export function clearGoalPromptAtomsRunner(
  hostId: string,
  fileAttachments: FileAttachmentLike[],
  pastedTextAttachments: PastedTextAttachment[],
): void {
  for (const att of fileAttachments) {
    removeAttachmentFromHost(hostId, att.path);
  }
  for (const att of pastedTextAttachments) {
    removeAttachmentFromHost(att.hostId ?? hostId, att.file.path);
  }
}

// ---------------------------------------------------------------------------
// cancelThreadGoal / resumeThreadGoal
// ---------------------------------------------------------------------------

/**
 * Handles the "Cancel" action on the GoalResumePromptDialog.
 * Sets `pendingThreadGoalObjective` to `""` (dismissed state) in the composer
 * view state so the dialog is hidden without clearing the paused goal.
 */
export function cancelThreadGoal(
  scope: ScopeStore,
  _conversationId: string | null | undefined,
): void {
  updateComposerViewStateField(scope, "pendingThreadGoalObjective", "");
}

/**
 * Handles the "Resume" action on the GoalResumePromptDialog.
 * Clears `pendingThreadGoalObjective` from the composer state and, when an
 * active conversation is present, sends `clear-thread-goal` to the host so
 * that the paused state is dismissed server-side.
 */
export function resumeThreadGoal(
  scope: ScopeStore,
  conversationId: string | null | undefined,
): void {
  updateComposerViewStateField(scope, "pendingThreadGoalObjective", null);
  if (conversationId == null) return;
  void (async () => {
    try {
      await sendAppServerRequest("clear-thread-goal", {
        conversationId,
        hostId: "local",
      });
    } catch {
      // Silently ignore; the dialog is already dismissed client-side.
    }
  })();
}

// ---------------------------------------------------------------------------
// saveThreadStartTarget
// ---------------------------------------------------------------------------

/**
 * Appends the given selected text as a new `selectedTextAttachments` entry in
 * the composer view state (used by the `SelectedTextAction` overlay when the
 * user highlights text outside the composer on an active conversation).
 */
export function saveThreadStartTarget(scope: ScopeStore, text: string): void {
  addSelectedTextAttachment(scope, text);
}
