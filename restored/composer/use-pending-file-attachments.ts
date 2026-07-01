// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// Pending file attachment reconciliation when the execution host changes.

import { useEffect, useRef } from "react";
import type { ComposerFileAttachment } from "./composer-attachment-atoms";
import type {
  AttachmentSetter,
  PastedTextFileAttachment,
  PendingFileAttachment,
  PendingPastedTextAttachment,
} from "./composer-attachment-hook-types";
import { resolveAttachmentHostId } from "./composer-attachment-helpers";
import { useEvent } from "../boundaries/onboarding-commons-externals.facade";

export interface PendingFileAttachmentsOptions {
  executionHostId: string;
  fileAttachments: ComposerFileAttachment[];
  setFileAttachments: AttachmentSetter<ComposerFileAttachment>;
  setPendingFileAttachments: AttachmentSetter<PendingFileAttachment>;
  setPendingPastedTextAttachments: AttachmentSetter<PendingPastedTextAttachment>;
  setPastedTextAttachments: AttachmentSetter<PastedTextFileAttachment>;
  discardFileAttachments: (
    hostId: string,
    attachments: ComposerFileAttachment[],
  ) => void;
}

export function usePendingFileAttachments({
  executionHostId,
  fileAttachments,
  setFileAttachments,
  setPendingFileAttachments,
  setPendingPastedTextAttachments,
  setPastedTextAttachments,
  discardFileAttachments,
}: PendingFileAttachmentsOptions) {
  const attachmentGenRef = useRef(0);
  const canceledPendingFileAttachmentIdsRef = useRef<Set<string>>(new Set());
  const handleRemovePendingFileAttachment = useEvent((id: string): void => {
    canceledPendingFileAttachmentIdsRef.current.add(id);
    setPendingFileAttachments((previous) =>
      previous.filter((item) => item.id !== id),
    );
  });
  const previousHostIdRef = useRef(executionHostId);
  const discardAttachmentsForHost = useEvent((hostId: string): void => {
    discardFileAttachments(hostId, fileAttachments);
    setPastedTextAttachments((previous) =>
      previous.filter(
        (item) => resolveAttachmentHostId(item, hostId) !== hostId,
      ),
    );
  });
  useEffect(() => {
    const previousHostId = previousHostIdRef.current;
    if (previousHostId === executionHostId) return;
    discardAttachmentsForHost(previousHostId);
    previousHostIdRef.current = executionHostId;
    setFileAttachments([]);
    setPendingFileAttachments([]);
    setPendingPastedTextAttachments([]);
    canceledPendingFileAttachmentIdsRef.current.clear();
    attachmentGenRef.current += 1;
  }, [
    executionHostId,
    setFileAttachments,
    setPendingFileAttachments,
    setPendingPastedTextAttachments,
    discardAttachmentsForHost,
  ]);
  return {
    attachmentGenRef,
    canceledPendingFileAttachmentIdsRef,
    handleRemovePendingFileAttachment,
  };
}
