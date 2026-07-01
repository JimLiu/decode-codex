// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Generated-image side-panel viewer with an active image and thumbnail strip.
import { useRef, useState } from "react";
import type { KeyboardEvent as ReactKeyboardEvent, UIEvent } from "react";
import { ImageSidePanel } from "./image-side-panel-core";
import type {
  GeneratedImage,
  ImageSidePanelProps,
} from "./image-side-panel-types";
import {
  useScope,
  appScopeAtom,
  useActiveConversationId,
  useImagePreviewSources,
  MotionButton,
} from "../boundaries/onboarding-commons-externals.facade";

const THUMBNAIL_SIZE = 46;
const THUMBNAIL_SLOT_SIZE = 54;
const THUMBNAIL_MASK =
  "linear-gradient(180deg, transparent 0%, black 20%, black 80%, transparent 100%)";

export interface ImageSidePanelViewerProps {
  fallbackImage: ImageSidePanelProps;
  images: GeneratedImage[];
  imageAssetResolver: unknown;
  initialImageId: string;
  onActiveImageChange?: (image: GeneratedImage) => void;
}

export function ImageSidePanelViewer({
  fallbackImage,
  images,
  imageAssetResolver,
  initialImageId,
  onActiveImageChange,
}: ImageSidePanelViewerProps) {
  const appScope = useScope(appScopeAtom);
  const conversationId = useActiveConversationId(appScope.value);
  const [activeImageId, setActiveImageId] = useState(initialImageId);
  const activeImage =
    images.find((image) => image.id === activeImageId) ?? images[0];

  if (conversationId == null || activeImage == null) {
    return <ImageSidePanel {...fallbackImage} />;
  }

  const selectImage = (image: GeneratedImage) => {
    if (image.id !== activeImage.id) {
      setActiveImageId(image.id);
      onActiveImageChange?.(image);
    }
  };

  const thumbnailStrip =
    images.length > 1 ? (
      <ImageThumbnailStrip
        activeId={activeImage.id}
        images={images}
        conversationId={conversationId}
        imageAssetResolver={imageAssetResolver}
        onSelect={selectImage}
      />
    ) : null;

  return (
    <div className="flex h-full min-h-0 bg-token-bg-primary">
      {thumbnailStrip}
      <div className="min-w-0 flex-1">
        <ActiveGeneratedImage
          key={activeImage.id}
          activeImage={activeImage}
          conversationId={conversationId}
          imageAssetResolver={imageAssetResolver}
        />
      </div>
    </div>
  );
}

interface ImageThumbnailStripProps {
  activeId: string;
  images: GeneratedImage[];
  conversationId: string;
  imageAssetResolver: unknown;
  onSelect: (image: GeneratedImage) => void;
}

function ImageThumbnailStrip({
  activeId,
  images,
  conversationId,
  imageAssetResolver,
  onSelect,
}: ImageThumbnailStripProps) {
  const activeIndex = Math.max(
    images.findIndex((image) => image.id === activeId),
    0,
  );
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollToIndex = (index: number) => {
    const image = images[index];
    if (image != null) {
      onSelect(image);
      scrollContainerRef.current?.scrollTo({
        top: index * THUMBNAIL_SLOT_SIZE,
      });
    }
  };

  const containerRefCallback = (element: HTMLDivElement | null) => {
    if (element == null || scrollContainerRef.current != null) return;
    element.scrollTop = activeIndex * THUMBNAIL_SLOT_SIZE;
    scrollContainerRef.current = element;
  };

  const handleScroll = (event: UIEvent<HTMLDivElement>) => {
    const image =
      images[Math.round(event.currentTarget.scrollTop / THUMBNAIL_SLOT_SIZE)];
    if (image != null && image.id !== activeId) onSelect(image);
  };

  const spacerStyle = { height: `calc(50% - ${THUMBNAIL_SIZE / 2}px)` };

  return (
    <div
      ref={containerRefCallback}
      className="h-full w-24 shrink-0 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      style={{ maskImage: THUMBNAIL_MASK, WebkitMaskImage: THUMBNAIL_MASK }}
      onScroll={handleScroll}
    >
      <div style={spacerStyle} />
      {images.map((image, index) => {
        const isActive = image.id === activeId;
        return (
          <MotionButton
            key={image.id}
            type="button"
            animate={{
              opacity: isActive ? 1 : 0.34,
              scale: isActive ? 1.2 : 0.95,
            }}
            aria-current={isActive ? "true" : undefined}
            aria-label={image.alt}
            className="mx-auto mb-2 flex cursor-interaction overflow-hidden rounded-lg border border-black/10 bg-token-bg-tertiary focus:outline-none focus-visible:ring-1 focus-visible:ring-token-foreground focus-visible:ring-offset-1 dark:border-white/10"
            style={{ height: THUMBNAIL_SIZE, width: THUMBNAIL_SIZE }}
            transition={{ duration: 0.12 }}
            onClick={() => {
              scrollToIndex(index);
            }}
            onKeyDown={(event: ReactKeyboardEvent<HTMLButtonElement>) => {
              const delta =
                event.key === "ArrowUp" || event.key === "ArrowLeft"
                  ? -1
                  : event.key === "ArrowDown" || event.key === "ArrowRight"
                    ? 1
                    : 0;
              if (delta !== 0) {
                event.preventDefault();
                scrollToIndex(
                  Math.min(Math.max(activeIndex + delta, 0), images.length - 1),
                );
              }
            }}
          >
            <ImageThumbnail
              image={image}
              conversationId={conversationId}
              imageAssetResolver={imageAssetResolver}
            />
          </MotionButton>
        );
      })}
      <div style={spacerStyle} />
    </div>
  );
}

interface ActiveGeneratedImageProps {
  activeImage: GeneratedImage;
  conversationId: string;
  imageAssetResolver: unknown;
}

function ActiveGeneratedImage({
  activeImage,
  conversationId,
  imageAssetResolver,
}: ActiveGeneratedImageProps) {
  const { downloadSrc, previewSrc } = useImagePreviewSources({
    src: activeImage.src,
    conversationId,
    imageAssetResolver,
    shouldLoadFileDataUrl: false,
  });
  const resolvedDownloadSrc = downloadSrc ?? previewSrc ?? activeImage.src;
  const resolvedSrc = previewSrc ?? activeImage.src;

  return (
    <ImageSidePanel
      alt={activeImage.alt}
      attachmentSrc={activeImage.src}
      downloadSrc={resolvedDownloadSrc}
      referrerPolicy="no-referrer"
      src={resolvedSrc}
    />
  );
}

interface ImageThumbnailProps {
  image: GeneratedImage;
  conversationId: string;
  imageAssetResolver: unknown;
}

function ImageThumbnail({
  image,
  conversationId,
  imageAssetResolver,
}: ImageThumbnailProps) {
  const { previewSrc } = useImagePreviewSources({
    src: image.previewSrc,
    conversationId,
    imageAssetResolver,
    shouldLoadFileDataUrl: false,
  });
  return (
    <img
      alt=""
      className="size-full rounded-lg object-cover"
      decoding="async"
      loading="lazy"
      referrerPolicy="no-referrer"
      src={previewSrc ?? image.previewSrc}
    />
  );
}
