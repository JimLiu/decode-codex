// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// Shared option and attachment helper types for composer attachment hooks.

import type {
  ComposerFileAttachment,
  ComposerPastedTextAttachment,
} from "./composer-attachment-atoms";

export type ComposerScopeStore = {
  get(atom: unknown, ...rest: unknown[]): any;
  set(atom: unknown, ...rest: unknown[]): void;
};

export type ComposerIntl = {
  formatMessage(descriptor: {
    id: string;
    defaultMessage: string;
    description?: string;
  }): string;
};

export type AttachmentSetter<Item> = (
  value: Item[] | ((previous: Item[]) => Item[]),
) => void;

export interface PendingFileAttachment {
  id: string;
  label: string;
}

export interface PendingPastedTextAttachment {
  id: string;
  preview: string | null;
}

export interface PastedTextFileAttachment extends ComposerPastedTextAttachment {
  characterCount: number;
  file: ComposerFileAttachment["file"] | { path: string };
  hostId?: string;
  preview?: string | null;
}
