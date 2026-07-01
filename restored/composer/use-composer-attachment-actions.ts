// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// Main attachment action hook: images, file mentions, local uploads, browser files.

import type {
  ComposerAddedFile,
  ComposerFileAttachment,
  ComposerImageAttachment,
} from "./composer-attachment-atoms";
import type {
  AttachmentSetter,
  ComposerIntl,
  ComposerScopeStore,
  PendingFileAttachment,
} from "./composer-attachment-hook-types";
import {
  bytesToBase64,
  deriveImageFilename,
  pickBrowserFiles,
} from "./composer-attachment-helpers";
import {
  composerImageCommentDraftAtom,
  generateId,
  getLocalPathForFile,
  invokeAppServerRequest,
  removeAllImageComments,
  showComposerToast,
} from "../boundaries/onboarding-commons-externals.facade";

export interface ComposerAttachmentActionsOptions {
  attachmentGeneration: { current: number };
  canceledPendingFileAttachmentIds: Set<string>;
  canCopyBrowserFileAttachments: boolean;
  composerMode: string;
  executionHostConfig: unknown;
  executionHostId: string;
  intl: ComposerIntl;
  notifyImageInputUnsupported: () => void;
  scope: ComposerScopeStore;
  setAddedFiles: AttachmentSetter<ComposerAddedFile>;
  setFileAttachments: AttachmentSetter<ComposerFileAttachment>;
  setImageAttachments: AttachmentSetter<ComposerImageAttachment>;
  setPendingFileAttachments: AttachmentSetter<PendingFileAttachment>;
  supportsImageInputs: boolean;
  uploadImageToCloud: (input: {
    dataUrl: unknown;
    filename: string;
  }) => Promise<Partial<ComposerImageAttachment>>;
  persistImageToTemp: (
    file: File,
    context: {
      composerMode: string;
      executionHostConfig: unknown;
      executionHostId: string;
    },
  ) => Promise<string | null>;
}

export function useComposerAttachmentActions({
  attachmentGeneration,
  canceledPendingFileAttachmentIds,
  canCopyBrowserFileAttachments,
  composerMode,
  executionHostConfig,
  executionHostId,
  intl,
  notifyImageInputUnsupported,
  scope,
  setAddedFiles,
  setFileAttachments,
  setImageAttachments,
  setPendingFileAttachments,
  supportsImageInputs,
  uploadImageToCloud,
  persistImageToTemp,
}: ComposerAttachmentActionsOptions) {
  const uploadImageAttachment = (
    attachment: ComposerImageAttachment,
    generation: number,
  ): void => {
    uploadImageToCloud({
      dataUrl: attachment.uploadSrc ?? attachment.src,
      filename: attachment.filename ?? `image-${attachment.id}.png`,
    })
      .then((uploaded) => {
        if (attachmentGeneration.current === generation)
          setImageAttachments((previous) =>
            previous.map((item) =>
              item.id === attachment.id ? { ...item, ...uploaded } : item,
            ),
          );
      })
      .catch(() => {
        if (attachmentGeneration.current !== generation) return;
        showComposerToast(
          scope,
          intl.formatMessage({
            id: "composer.imageUploadFailed",
            defaultMessage: "Failed to upload image",
            description: "Toast shown when an image fails to upload",
          }),
        );
        if (
          scope.get(composerImageCommentDraftAtom)?.attachmentId ===
          attachment.id
        )
          removeAllImageComments(scope);
        else
          setImageAttachments((previous) =>
            previous.filter((item) => item.id !== attachment.id),
          );
      });
  };

  const appendImageAttachment = ({
    src,
    localPath,
    filename,
    generation,
  }: {
    src: string;
    localPath?: string;
    filename: string;
    generation: number;
  }): string => {
    const id = generateId();
    const attachment: ComposerImageAttachment = {
      id,
      src,
      localPath,
      filename,
      uploadStatus: composerMode === "cloud" ? "uploading" : "idle",
    };
    setImageAttachments((previous) => [...previous, attachment]);
    if (composerMode === "cloud") uploadImageAttachment(attachment, generation);
    return id;
  };

  const addImages = (files: File[]): boolean => {
    if (!supportsImageInputs) {
      notifyImageInputUnsupported();
      return false;
    }
    if (files.length === 0) return true;
    const generation = attachmentGeneration.current;
    for (const file of files) {
      const reader = new FileReader();
      const filename = deriveImageFilename(file);
      reader.onload = (event) => {
        if (attachmentGeneration.current !== generation) return;
        const dataUrl = event.target?.result;
        if (typeof dataUrl !== "string") return;
        const id = appendImageAttachment({
          src: dataUrl,
          filename,
          generation,
        });
        persistImageToTemp(file, {
          composerMode,
          executionHostConfig,
          executionHostId,
        })
          .then((localPath) => {
            if (
              attachmentGeneration.current === generation &&
              localPath != null
            )
              setImageAttachments((previous) =>
                previous.map((item) =>
                  item.id === id ? { ...item, localPath } : item,
                ),
              );
          })
          .catch(() => {});
      };
      reader.readAsDataURL(file);
    }
    return true;
  };

  const addImageDataUrls = (
    items: { dataUrl: string; localPath?: string; filename: string }[],
  ): void => {
    if (items.length === 0) return;
    const generation = attachmentGeneration.current;
    for (const item of items)
      appendImageAttachment({
        src: item.dataUrl,
        localPath: item.localPath,
        filename: item.filename,
        generation,
      });
  };

  const addFileDescriptorsAsMentions = (
    descriptors: ComposerAddedFile[],
  ): void => {
    if (descriptors.length === 0) return;
    setAddedFiles((previous) => {
      let next = previous;
      for (const descriptor of descriptors)
        if (
          !next.some(
            (existing) =>
              existing.fsPath === descriptor.fsPath &&
              existing.startLine === descriptor.startLine &&
              existing.endLine === descriptor.endLine,
          )
        )
          next = [...next, descriptor];
      return next;
    });
  };

  const copyBrowserFilesToAttachments = (
    files: File[],
  ): Promise<ComposerFileAttachment[]> =>
    Promise.all(
      files.map(async (file) => {
        const label = file.name.trim() || "attachment";
        const contentsBase64 = bytesToBase64(
          new Uint8Array(await file.arrayBuffer()),
        );
        return invokeAppServerRequest("create-file-attachment-for-host", {
          hostId: "local",
          contentsBase64,
          label,
        });
      }),
    );

  const uploadLocalFileAttachments = async (
    descriptors: ComposerAddedFile[],
  ): Promise<void> => {
    if (executionHostId === "local") {
      setFileAttachments((previous) => [
        ...previous,
        ...(descriptors as unknown as ComposerFileAttachment[]),
      ]);
      return;
    }
    if (descriptors.length === 0) return;
    const placeholders = descriptors.map((descriptor) => ({
      id: generateId(),
      label: String(descriptor.label ?? descriptor.path),
    }));
    const generation = attachmentGeneration.current;
    setPendingFileAttachments((previous) => [...previous, ...placeholders]);
    try {
      const uploaded: ComposerFileAttachment[] = await invokeAppServerRequest(
        "upload-local-file-attachments-for-host",
        { hostId: executionHostId, attachments: descriptors },
      );
      if (attachmentGeneration.current !== generation) return;
      const accepted = uploaded.filter((_attachment, position) => {
        const placeholder = placeholders[position];
        return (
          placeholder != null &&
          !canceledPendingFileAttachmentIds.has(placeholder.id)
        );
      });
      if (accepted.length > 0)
        setFileAttachments((previous) => [...previous, ...accepted]);
    } catch {
      showComposerToast(
        scope,
        intl.formatMessage({
          id: "composer.fileAttachment.uploadError",
          defaultMessage: "Unable to upload file",
          description:
            "Toast shown when copying a local file to a remote host fails",
        }),
      );
    } finally {
      const placeholderIds = new Set(placeholders.map((item) => item.id));
      setPendingFileAttachments((previous) =>
        previous.filter((item) => !placeholderIds.has(item.id)),
      );
      for (const id of placeholderIds)
        canceledPendingFileAttachmentIds.delete(id);
    }
  };

  const addFileMentionsFromFiles = (
    files: File[],
    buildMentions: (files: File[]) => ComposerAddedFile[],
  ): void => {
    const mentions = buildMentions(files);
    const copyable = canCopyBrowserFileAttachments
      ? files.filter(
          (file) => file.size > 0 && getLocalPathForFile(file) == null,
        )
      : [];
    if (copyable.length > 0) {
      void copyBrowserFilesToAttachments(copyable)
        .then((attachments) => {
          if (mentions.length > 0) addFileDescriptorsAsMentions(mentions);
          setFileAttachments((previous) => [...previous, ...attachments]);
        })
        .catch(() =>
          showComposerToast(
            scope,
            intl.formatMessage({
              id: "composer.fileAttachment.browserFileCopyError",
              defaultMessage: "Unable to attach file",
              description:
                "Toast shown when copying a browser-selected file to a local attachment path fails",
            }),
          ),
        );
      return;
    }
    if (executionHostId !== "local") {
      void uploadLocalFileAttachments(mentions);
      return;
    }
    addFileDescriptorsAsMentions(mentions);
  };

  const pickBrowserFileDescriptors = async ({
    imagesOnly,
  }: {
    imagesOnly?: boolean;
  }): Promise<ComposerFileAttachment[]> =>
    copyBrowserFilesToAttachments(await pickBrowserFiles({ imagesOnly }));

  return {
    addFileDescriptorsAsMentions,
    addFileMentionsFromFiles,
    addImageDataUrls,
    addImages,
    pickBrowserFileDescriptors,
    uploadImageAttachment,
    uploadLocalFileAttachments,
  };
}
