// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// Attach fetched MCP/file-asset URLs as host file attachments.

import type { ComposerFileAttachment } from "./composer-attachment-atoms";
import type {
  AttachmentSetter,
  PendingFileAttachment,
} from "./composer-attachment-hook-types";
import { bytesToBase64 } from "./composer-attachment-helpers";
import {
  generateId,
  invokeAppServerRequest,
} from "../boundaries/onboarding-commons-externals.facade";

export interface ComposerFileAssetAttachmentOptions {
  attachmentGenRef: { current: number };
  canceledPendingFileAttachmentIds: Set<string>;
  executionHostId: string;
  setFileAttachments: AttachmentSetter<ComposerFileAttachment>;
  setPendingFileAttachments: AttachmentSetter<PendingFileAttachment>;
  discardFileAttachment: (hostId: string, path: string) => void;
}

export function useComposerFileAssetAttachment({
  attachmentGenRef,
  canceledPendingFileAttachmentIds,
  executionHostId,
  setFileAttachments,
  setPendingFileAttachments,
  discardFileAttachment,
}: ComposerFileAssetAttachmentOptions) {
  return async ({
    assetUrl,
    label,
  }: {
    assetUrl: string;
    label: string;
  }): Promise<void> => {
    const pendingId = generateId();
    const generationAtStart = attachmentGenRef.current;
    setPendingFileAttachments((previous) => [
      ...previous,
      { id: pendingId, label },
    ]);
    try {
      const response = await fetch(assetUrl);
      if (!response.ok) throw new Error("Unable to load attachment asset");
      const attachment = await invokeAppServerRequest(
        "create-file-attachment-for-host",
        {
          hostId: executionHostId,
          contentsBase64: bytesToBase64(
            new Uint8Array(await response.arrayBuffer()),
          ),
          label,
        },
      );
      if (
        attachmentGenRef.current !== generationAtStart ||
        canceledPendingFileAttachmentIds.has(pendingId)
      ) {
        discardFileAttachment(executionHostId, attachment.path);
        return;
      }
      setFileAttachments((previous) => [...previous, attachment]);
    } finally {
      setPendingFileAttachments((previous) =>
        previous.filter((item) => item.id !== pendingId),
      );
      canceledPendingFileAttachmentIds.delete(pendingId);
    }
  };
}
