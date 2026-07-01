// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Preview-tab wrapper that switches between a single image and generated-image
// strip viewer while keeping the tab title in sync.
import { ImageSidePanel } from "./image-side-panel-core";
import { ImageSidePanelViewer } from "./generated-image-viewer";
import type {
  GeneratedImage,
  ImageSidePanelProps,
} from "./image-side-panel-types";
import {
  useScope,
  appScopeAtom,
  getPreviewTabPanel,
  findPreviewTabPanelSide,
} from "../boundaries/onboarding-commons-externals.facade";

export interface ImagePreviewTabContentProps extends ImageSidePanelProps {
  generatedImages?: GeneratedImage[];
  imageAssetResolver?: unknown;
  initialImageId?: string;
  tabId: string;
}

export function ImagePreviewTabContent({
  alt,
  attachmentSrc,
  downloadSrc,
  generatedImages,
  imageAssetResolver,
  initialImageId,
  referrerPolicy,
  src,
  tabId,
}: ImagePreviewTabContentProps) {
  const appScope = useScope(appScopeAtom);

  if (generatedImages != null && initialImageId != null) {
    return (
      <ImageSidePanelViewer
        fallbackImage={{ alt, attachmentSrc, downloadSrc, referrerPolicy, src }}
        images={generatedImages}
        imageAssetResolver={imageAssetResolver}
        initialImageId={initialImageId}
        onActiveImageChange={(image) => {
          getPreviewTabPanel(
            findPreviewTabPanelSide(appScope, tabId) ?? "right",
          ).updateTab(appScope, tabId, {
            title: image.tabTitle,
            tooltip: image.tabTitle,
          });
        }}
      />
    );
  }

  return (
    <ImageSidePanel
      alt={alt}
      attachmentSrc={attachmentSrc}
      downloadSrc={downloadSrc}
      referrerPolicy={referrerPolicy}
      src={src}
    />
  );
}
