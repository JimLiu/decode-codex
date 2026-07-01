// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// Drag/drop/paste handlers for the composer. Returns the handlers bound directly
// to the composer surface and, via a ResizeObserver-free effect, mirrors them
// onto the shared drop-target portal element so dropping anywhere over the
// composer overlay attaches images / file mentions (or forwards a dragged
// browser image to the Electron host).
import { useEffect, useEffectEvent } from "react";

import {
  dataTransferHasDirectoryEntries,
  dataTransferHasFiles,
  extractDroppedFiles,
} from "../boundaries/onboarding-commons-externals.facade";

interface ElectronBridge {
  sendMessageFromView?: (message: unknown) => void;
}

function getElectronBridge(): ElectronBridge | undefined {
  return (window as unknown as { electronBridge?: ElectronBridge })
    .electronBridge;
}

export interface UseComposerContextActionsInput {
  activeBrowserImageDragBrowserTabId?: string | null;
  addFileMentionsFromFiles?: (
    files: File[],
    dataTransfer?: DataTransfer | null,
  ) => void;
  addImages: (files: File[]) => void;
  directBrowserConversationId?: string | null;
  dragCounterRef: { current: number };
  dropTargetPortalTarget: HTMLElement | null;
  isDragActive: boolean;
  setIsDragActive: (value: boolean) => void;
  setShowShiftOverlay: (value: boolean) => void;
}

export interface ComposerContextActions {
  handleDragEnter: (event: DragEvent) => void;
  handleDragLeave: (event: DragEvent) => void;
  handleDragOver: (event: DragEvent) => void;
  handleDrop: (event: DragEvent) => void;
  handlePaste: (event: ClipboardEvent) => void;
}

export function useComposerContextActions({
  activeBrowserImageDragBrowserTabId = null,
  addFileMentionsFromFiles,
  addImages,
  directBrowserConversationId = null,
  dragCounterRef,
  dropTargetPortalTarget,
  isDragActive,
  setIsDragActive,
  setShowShiftOverlay,
}: UseComposerContextActionsInput): ComposerContextActions {
  const isSupportedDrag = (dataTransfer: DataTransfer | null): boolean =>
    activeBrowserImageDragBrowserTabId != null ||
    dataTransferHasFiles(dataTransfer) ||
    dataTransferHasDirectoryEntries(dataTransfer);

  const resetDragState = () => {
    dragCounterRef.current = 0;
    setIsDragActive(false);
    setShowShiftOverlay(false);
  };

  const handlePaste = (event: ClipboardEvent) => {
    if (event.defaultPrevented) return;
    const { imageFiles, otherFiles } = extractDroppedFiles(event.clipboardData);
    if (imageFiles.length === 0 && otherFiles.length === 0) return;
    event.preventDefault();
    if (imageFiles.length > 0) addImages(imageFiles);
    if (otherFiles.length > 0) addFileMentionsFromFiles?.(otherFiles);
  };

  const handleDragEnter = (event: DragEvent) => {
    const { dataTransfer } = event;
    if (dataTransfer == null || !isSupportedDrag(dataTransfer)) return;
    setShowShiftOverlay(!event.shiftKey);
    event.preventDefault();
    event.stopPropagation();
    dataTransfer.dropEffect = "copy";
    dragCounterRef.current += 1;
    setIsDragActive(true);
  };

  const handleDragOver = (event: DragEvent) => {
    const { dataTransfer } = event;
    if (dataTransfer == null || !isSupportedDrag(dataTransfer)) return;
    setShowShiftOverlay(!event.shiftKey);
    event.preventDefault();
    event.stopPropagation();
    dataTransfer.dropEffect = "copy";
    if (!isDragActive) setIsDragActive(true);
  };

  const handleDragLeave = (event: DragEvent) => {
    if (!isSupportedDrag(event.dataTransfer)) return;
    dragCounterRef.current = Math.max(0, dragCounterRef.current - 1);
    if (dragCounterRef.current === 0) {
      setIsDragActive(false);
      setShowShiftOverlay(false);
    }
  };

  const handleDrop = (event: DragEvent) => {
    resetDragState();
    const { imageFiles, otherFiles } = extractDroppedFiles(event.dataTransfer);
    const hasDirectoryEntries = dataTransferHasDirectoryEntries(
      event.dataTransfer,
    );
    if (
      imageFiles.length === 0 &&
      otherFiles.length === 0 &&
      !hasDirectoryEntries
    ) {
      if (dataTransferHasFiles(event.dataTransfer)) event.preventDefault();
      if (
        activeBrowserImageDragBrowserTabId != null &&
        directBrowserConversationId != null
      ) {
        event.preventDefault();
        getElectronBridge()?.sendMessageFromView?.({
          type: "browser-sidebar-attach-dragged-image",
          browserTabId: activeBrowserImageDragBrowserTabId,
          conversationId: directBrowserConversationId,
        });
      }
      return;
    }
    event.preventDefault();
    if (imageFiles.length > 0) addImages(imageFiles);
    if (
      otherFiles.length > 0 ||
      (hasDirectoryEntries && imageFiles.length === 0)
    ) {
      addFileMentionsFromFiles?.(otherFiles, event.dataTransfer);
    }
  };

  const onPortalDragEnter = useEffectEvent((event: DragEvent) => {
    handleDragEnter(event);
  });
  const onPortalDragOver = useEffectEvent((event: DragEvent) => {
    handleDragOver(event);
  });
  const onPortalDragLeave = useEffectEvent((event: DragEvent) => {
    handleDragLeave(event);
  });
  const onPortalDrop = useEffectEvent((event: DragEvent) => {
    handleDrop(event);
  });

  useEffect(() => {
    if (dropTargetPortalTarget == null) return;
    dropTargetPortalTarget.addEventListener(
      "dragenter",
      onPortalDragEnter,
      true,
    );
    dropTargetPortalTarget.addEventListener("dragover", onPortalDragOver, true);
    dropTargetPortalTarget.addEventListener(
      "dragleave",
      onPortalDragLeave,
      true,
    );
    dropTargetPortalTarget.addEventListener("drop", onPortalDrop, true);
    return () => {
      dropTargetPortalTarget.removeEventListener(
        "dragenter",
        onPortalDragEnter,
        true,
      );
      dropTargetPortalTarget.removeEventListener(
        "dragover",
        onPortalDragOver,
        true,
      );
      dropTargetPortalTarget.removeEventListener(
        "dragleave",
        onPortalDragLeave,
        true,
      );
      dropTargetPortalTarget.removeEventListener("drop", onPortalDrop, true);
    };
  }, [dropTargetPortalTarget]);

  return {
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
    handlePaste,
  };
}
