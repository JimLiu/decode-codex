// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// Composer attachment state: the scope atoms that hold the pending attachments a
// composer surface has staged for its next message — images, files, pasted-text
// blobs, browser design comments, selected-text captures, the image-comment
// draft overlay, @-mention added files, MCP app model-context attachments, and
// the per-conversation working-directory override.
//
// The djo67r4n composer body reads these through `useAtomValue` /
// `useAtomFamily`; the atoms themselves are shared composer-scope state that
// live in the worktree new-thread query/orchestrator and remote-projects app
// bundles this chunk was code-split from. They are re-exported here under
// semantic names with the value shapes the composer body relies on.
import {
  jl as composerImageInputsAtomImpl,
  Ul as composerSelectedTextAttachmentsAtomImpl,
  Ll as composerPastedTextAttachmentsAtomImpl,
  Ml as composerImageCommentDraftAtomImpl,
  wl as composerAddedFilesAtomImpl,
  Pl as composerMcpAppModelContextAtomImpl,
  kl as composerFileAttachmentsAtomImpl,
} from "../vendor/worktree-new-thread-query-current-bundle";
import { ic as composerCommentAttachmentsAtomImpl } from "../vendor/worktree-new-thread-orchestrator-current-bundle";
import { x as composerCwdOverrideAtomImpl } from "../vendor/remote-projects-app-shared-current-bundle";
import type { ScopeAtom } from "./composer-atoms";

/** A composer-scope atom family keyed by a conversation id (or `null` for the home draft). */
export interface ScopeAtomFamily<Value, Param> {
  readonly __composerScopeAtomFamilyValue?: Value;
  readonly __composerScopeAtomFamilyParam?: Param;
}

/** A staged image attachment (drag/drop, paste, or picked file rendered inline). */
export interface ComposerImageAttachment {
  readonly id: string;
  readonly src: string;
  readonly localPath?: string;
  readonly previewSrc?: string;
  readonly filename?: string;
  readonly uploadStatus?: string;
  readonly [field: string]: unknown;
}

/** A staged file attachment uploaded/copied to the execution host. */
export interface ComposerFileAttachment {
  readonly id: string;
  readonly path: string;
  readonly name?: string;
  readonly size?: number;
  readonly uploadStatus?: string;
  readonly [field: string]: unknown;
}

/** A large pasted-text blob promoted to an attachment instead of inline text. */
export interface ComposerPastedTextAttachment {
  readonly id: string;
  readonly text?: string;
  readonly path?: string;
  readonly [field: string]: unknown;
}

/** A browser design comment / annotation staged against an image or the page. */
export interface ComposerCommentAttachment {
  readonly text: string;
  readonly x?: number;
  readonly y?: number;
  readonly localBrowserDesignChange?: unknown;
  readonly [field: string]: unknown;
}

/** A selected-text capture staged from the in-app browser or an editor. */
export interface ComposerSelectedTextAttachment {
  readonly text: string;
  readonly [field: string]: unknown;
}

/** The in-progress image-comment overlay: the target image plus its draft comments. */
export interface ComposerImageCommentDraft {
  readonly attachmentId: string;
  readonly comments: readonly ComposerCommentAttachment[];
  readonly [field: string]: unknown;
}

/** An MCP app model-context attachment (may itself carry images). */
export interface ComposerMcpAppModelContext {
  readonly imageAttachments: readonly ComposerImageAttachment[];
  readonly [field: string]: unknown;
}

/** A file descriptor added as an `@`-mention reference rather than an upload. */
export interface ComposerAddedFile {
  readonly path: string;
  readonly [field: string]: unknown;
}

/** Staged image inputs for the current composer scope. */
export const composerImageInputsAtom: ScopeAtom<ComposerImageAttachment[]> =
  composerImageInputsAtomImpl;

/** Staged file attachments for the current composer scope. */
export const composerFileAttachmentsAtom: ScopeAtom<ComposerFileAttachment[]> =
  composerFileAttachmentsAtomImpl;

/** Staged pasted-text attachments for the current composer scope. */
export const composerPastedTextAttachmentsAtom: ScopeAtom<
  ComposerPastedTextAttachment[]
> = composerPastedTextAttachmentsAtomImpl;

/** Staged browser/design comment attachments for the current composer scope. */
export const composerCommentAttachmentsAtom: ScopeAtom<
  ComposerCommentAttachment[]
> = composerCommentAttachmentsAtomImpl;

/** Staged selected-text attachments for the current composer scope. */
export const composerSelectedTextAttachmentsAtom: ScopeAtom<
  ComposerSelectedTextAttachment[]
> = composerSelectedTextAttachmentsAtomImpl;

/** The in-progress image-comment draft overlay, or `null` when none is open. */
export const composerImageCommentDraftAtom: ScopeAtom<ComposerImageCommentDraft | null> =
  composerImageCommentDraftAtomImpl;

/** File descriptors added as `@`-mention references for the current scope. */
export const composerAddedFilesAtom: ScopeAtom<ComposerAddedFile[]> =
  composerAddedFilesAtomImpl;

/** MCP app model-context attachments staged for the current composer scope. */
export const composerMcpAppModelContextAtom: ScopeAtom<
  ComposerMcpAppModelContext[]
> = composerMcpAppModelContextAtomImpl;

/**
 * Per-conversation working-directory override family (keyed by conversation id,
 * `null` for the home draft). `"~"` denotes a projectless/home working directory.
 */
export const composerCwdOverrideAtom: ScopeAtomFamily<
  string | null,
  string | null
> = composerCwdOverrideAtomImpl;
