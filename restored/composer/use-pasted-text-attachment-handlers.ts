// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// Hooks for large pasted-text attachments and restoring them into the editor.

import { useLayoutEffect, useRef } from "react";
import type { ComposerFileAttachment } from "./composer-attachment-atoms";
import type {
  AttachmentSetter,
  ComposerScopeStore,
  PastedTextFileAttachment,
  PendingPastedTextAttachment,
} from "./composer-attachment-hook-types";
import {
  firstNonEmptyLine,
  resolveAttachmentHostId,
} from "./composer-attachment-helpers";
import {
  composerScope,
  generateId,
  showComposerToast,
  useComposerIntl,
  useEvent,
  useScopeStore,
} from "../boundaries/onboarding-commons-externals.facade";

export interface PastedTextAttachmentHandlersOptions {
  canceledPendingFileAttachmentIds: Set<string>;
  conversationId: string | null;
  executionHostId: string;
  fileAttachments: ComposerFileAttachment[];
  getAttachmentGen: () => number;
  insertTextAtSelection: (text: string) => void;
  pastedTextAttachments: PastedTextFileAttachment[];
  setFileAttachments: AttachmentSetter<ComposerFileAttachment>;
  setPastedTextAttachments: AttachmentSetter<PastedTextFileAttachment>;
  setPendingPastedTextAttachments: AttachmentSetter<PendingPastedTextAttachment>;
  writePastedTextFile: (options: {
    executionHostId: string;
    label: string;
    text: string;
    shouldDiscard: () => boolean;
  }) => Promise<{ path: string } | null>;
  readPastedTextFile: (
    attachment: PastedTextFileAttachment,
    hostId: string,
  ) => Promise<string>;
  discardFileAttachment: (hostId: string, path: string) => void;
  adjustPendingEditCount: (
    scope: ComposerScopeStore,
    conversationId: string | null,
    delta: number,
  ) => void;
}

export function usePastedTextAttachmentHandlers({
  canceledPendingFileAttachmentIds,
  conversationId,
  executionHostId,
  fileAttachments,
  getAttachmentGen,
  insertTextAtSelection,
  pastedTextAttachments,
  setFileAttachments,
  setPastedTextAttachments,
  setPendingPastedTextAttachments,
  writePastedTextFile,
  readPastedTextFile,
  discardFileAttachment,
  adjustPendingEditCount,
}: PastedTextAttachmentHandlersOptions) {
  const intl = useComposerIntl();
  const scope = useScopeStore(composerScope);
  const shownPathsRef = useRef<Set<string>>(new Set());
  const restoredPathsRef = useRef<Set<string>>(new Set());
  useLayoutEffect(() => {
    const shownPaths = shownPathsRef.current;
    const restoredPaths = restoredPathsRef.current;
    return () => {
      for (const path of shownPaths) restoredPaths.add(path);
    };
  }, [executionHostId]);

  const handleRemoveFileAttachment = useEvent((index: number): void => {
    const attachment = fileAttachments[index];
    setFileAttachments((previous) =>
      previous.filter((_item, position) => position !== index),
    );
    if (attachment != null)
      discardFileAttachment(executionHostId, attachment.path);
  });
  const handleRemovePastedTextAttachment = useEvent((index: number): void => {
    const attachment = pastedTextAttachments[index];
    setPastedTextAttachments((previous) =>
      previous.filter((_item, position) => position !== index),
    );
    if (attachment == null) return;
    const path = attachment.file.path;
    if (shownPathsRef.current.has(path)) restoredPathsRef.current.add(path);
    discardFileAttachment(
      resolveAttachmentHostId(attachment, executionHostId),
      path,
    );
  });
  const handleRemovePendingPastedTextAttachment = useEvent(
    (id: string): void => {
      canceledPendingFileAttachmentIds.add(id);
      setPendingPastedTextAttachments((previous) =>
        previous.filter((item) => item.id !== id),
      );
    },
  );
  const handlePastedText = useEvent(async (text: string): Promise<void> => {
    const label = intl.formatMessage({
      id: "composer.fileAttachment.pastedTextLabel",
      defaultMessage: "Pasted text.txt",
      description: "Label for a large text paste attached as a text file",
    });
    const pendingId = generateId();
    const generationAtStart = getAttachmentGen();
    const preview =
      firstNonEmptyLine(text) ??
      intl.formatMessage({
        id: "composer.pastedTextAttachment.title",
        defaultMessage: "Pasted text",
        description:
          "Title for an attached large text paste without displayable text",
      });
    adjustPendingEditCount(scope, conversationId, 1);
    setPendingPastedTextAttachments((previous) => [
      ...previous,
      { id: pendingId, preview },
    ]);
    try {
      const file = await writePastedTextFile({
        executionHostId,
        label,
        text,
        shouldDiscard: () =>
          getAttachmentGen() !== generationAtStart ||
          canceledPendingFileAttachmentIds.has(pendingId),
      });
      if (file != null)
        setPastedTextAttachments((previous) => [
          ...previous,
          {
            characterCount: text.length,
            file,
            hostId: executionHostId,
            preview,
          },
        ]);
    } catch {
      showComposerToast(
        scope,
        intl.formatMessage({
          id: "composer.fileAttachment.pastedTextError",
          defaultMessage: "Large pasted text could not be attached",
          description:
            "Toast shown when writing a large text paste as a file attachment fails",
        }),
      );
    } finally {
      adjustPendingEditCount(scope, conversationId, -1);
      setPendingPastedTextAttachments((previous) =>
        previous.filter((item) => item.id !== pendingId),
      );
      canceledPendingFileAttachmentIds.delete(pendingId);
    }
  });
  const handleShowPastedTextInTextField = useEvent(
    async (index: number): Promise<void> => {
      const attachment = pastedTextAttachments[index];
      if (attachment == null || attachment.characterCount <= 0) return;
      const path = attachment.file.path;
      const hostId = resolveAttachmentHostId(attachment, executionHostId);
      if (shownPathsRef.current.has(path)) return;
      const generationAtStart = getAttachmentGen();
      shownPathsRef.current.add(path);
      try {
        const contents = await readPastedTextFile(attachment, executionHostId);
        if (
          getAttachmentGen() !== generationAtStart ||
          restoredPathsRef.current.has(path)
        )
          return;
        insertTextAtSelection(
          contents.replace(/^```text\r?\n([\s\S]*?)\r?\n```\r?\n?$/, "$1"),
        );
        setPastedTextAttachments((previous) =>
          previous.filter((item) => item.file.path !== path),
        );
        discardFileAttachment(hostId, path);
      } catch {
        if (
          getAttachmentGen() !== generationAtStart ||
          restoredPathsRef.current.has(path)
        )
          return;
        showComposerToast(
          scope,
          intl.formatMessage({
            id: "composer.fileAttachment.pastedTextRestoreError",
            defaultMessage: "Pasted text could not be restored",
            description:
              "Toast shown when restoring an attached large text paste into the composer fails",
          }),
        );
      } finally {
        shownPathsRef.current.delete(path);
        restoredPathsRef.current.delete(path);
      }
    },
  );
  return {
    handlePastedText,
    handleRemoveFileAttachment,
    handleRemovePendingPastedTextAttachment,
    handleRemovePastedTextAttachment,
    handleShowPastedTextInTextField,
  };
}
