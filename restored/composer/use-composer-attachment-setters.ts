// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// Scoped setter and remove-handler hook for composer attachments.

import type {
  ComposerAddedFile,
  ComposerFileAttachment,
  ComposerImageAttachment,
  ComposerPastedTextAttachment,
} from "./composer-attachment-atoms";
import type { AttachmentSetter } from "./composer-attachment-hook-types";
import { mergeFileAttachments } from "../boundaries/onboarding-commons-externals.facade";

export interface ComposerAttachmentSettersOptions {
  setComposerStateField: (field: string, value: unknown) => void;
}

export function useComposerAttachmentSetters({
  setComposerStateField,
}: ComposerAttachmentSettersOptions) {
  const setImageAttachments: AttachmentSetter<ComposerImageAttachment> = (
    value,
  ) => setComposerStateField("imageAttachments", value);
  const setAppshotContexts: AttachmentSetter<unknown> = (value) =>
    setComposerStateField("appshotContexts", value);
  const setFileAttachments: AttachmentSetter<ComposerFileAttachment> = (
    value,
  ) =>
    setComposerStateField(
      "fileAttachments",
      (previous: ComposerFileAttachment[]) =>
        mergeFileAttachments(
          typeof value === "function" ? value(previous) : value,
        ),
    );
  const setAddedFiles: AttachmentSetter<ComposerAddedFile> = (value) =>
    setComposerStateField("addedFiles", (previous: ComposerAddedFile[]) =>
      mergeFileAttachments(
        typeof value === "function" ? value(previous) : value,
      ),
    );
  const setPastedTextAttachments: AttachmentSetter<
    ComposerPastedTextAttachment
  > = (value) => setComposerStateField("pastedTextAttachments", value);
  const handleRemoveImage = (id: string): void =>
    setImageAttachments((previous) =>
      previous.filter((item) => item.id !== id),
    );
  const handleRemoveFile = (index: number): void =>
    setAddedFiles((previous) =>
      previous.filter((_item, position) => position !== index),
    );
  const handleRemoveAppshotContext = (index: number): void =>
    setAppshotContexts((previous) =>
      previous.filter((_item, position) => position !== index),
    );
  return {
    handleRemoveFile,
    handleRemoveImage,
    handleRemoveAppshotContext,
    setAddedFiles,
    setFileAttachments,
    setPastedTextAttachments,
    setImageAttachments,
    setAppshotContexts,
  };
}
