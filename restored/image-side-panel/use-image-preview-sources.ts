// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Resolves the preview and download URLs for an image, handling asset pointers,
// local-host file references, and lazily-loaded data URLs.

import { useEffect, useState } from "react";
import {
  isImageAssetPointer,
  useImageAssetDownload,
  type ImageAssetResolver,
} from "./use-image-asset-download";
import {
  buildLocalFileSrc,
  conversationHostIdAtom,
  loadFileDataUrl,
  parseLocalFilePointer,
  resolveHostConfig,
  useAppStore,
  useAtomFamilyValue,
} from "../boundaries/onboarding-commons-externals.facade";

export interface UseImagePreviewSourcesParams {
  src: string;
  conversationId: string;
  imageAssetResolver: ImageAssetResolver | null;
  shouldLoadFileDataUrl: boolean;
}

export interface ImagePreviewSources {
  previewSrc: string | null;
  downloadSrc: string | null;
}

interface LoadedDataUrl {
  src: string;
  dataUrl: string | null;
}

export function useImagePreviewSources({
  src,
  conversationId,
  imageAssetResolver,
  shouldLoadFileDataUrl,
}: UseImagePreviewSourcesParams): ImagePreviewSources {
  const store = useAppStore();
  const hostId =
    useAtomFamilyValue(conversationHostIdAtom, conversationId) ?? "local";
  const hostConfig = resolveHostConfig(hostId);
  const [loaded, setLoaded] = useState<LoadedDataUrl | null>(null);

  const trimmedSrc = src.trim();
  const hasSrc = trimmedSrc.length > 0;
  const assetPointer = hasSrc && isImageAssetPointer(src) ? src : "";
  const { src: assetSrc } = useImageAssetDownload(
    assetPointer,
    imageAssetResolver,
  );

  const localFilePointer = hasSrc ? parseLocalFilePointer(src) : null;
  const localFileSrc =
    hostConfig.kind === "local" &&
    hostConfig.id === hostId &&
    localFilePointer != null
      ? buildLocalFileSrc(localFilePointer)
      : null;

  const loadedDataUrl = loaded?.src === src ? loaded.dataUrl : null;
  const previewSrc = hasSrc
    ? (assetSrc ??
      localFileSrc ??
      (localFilePointer == null && !assetPointer ? src : loadedDataUrl))
    : null;

  useEffect(() => {
    if (
      localFilePointer == null ||
      (localFileSrc != null && !shouldLoadFileDataUrl)
    ) {
      return;
    }
    let cancelled = false;
    setLoaded({ src, dataUrl: null });
    loadFileDataUrl(localFilePointer, hostId, store).then((value: string) => {
      if (!cancelled) setLoaded({ src, dataUrl: value });
    });
    return () => {
      cancelled = true;
    };
  }, [
    localFilePointer,
    localFileSrc,
    hostId,
    store,
    shouldLoadFileDataUrl,
    src,
  ]);

  const downloadSrc = loadedDataUrl ?? previewSrc;
  return { previewSrc, downloadSrc };
}
