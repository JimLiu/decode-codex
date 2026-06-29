// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Image attachment thumbnail with upload progress, remove control, and a preview lightbox.
import React, { useState } from "react";
import clsx from "clsx";
import { useIntl } from "../vendor/react-intl";
import { ProgressionDonutIcon } from "../icons/progression-donut-icon";
import {
  CloseIcon,
  ImagePreviewLightbox,
  ImageUploadSpinnerIcon,
} from "../boundaries/onboarding-commons-externals.facade";

type PreviewItem = { src: string; alt: string };

export type ImageAttachmentProps = {
  src: string;
  filename?: string;
  alt?: string;
  onRemove?: () => void;
  loading?: boolean;
  loadingPercentage?: number | null;
  previewEnabled?: boolean;
  previewPortalContainer?: HTMLElement | null;
  onPreviewCloseAutoFocus?: (event: Event) => void;
  onPreviewOpenChange?: (open: boolean) => void;
  previewItems?: PreviewItem[];
  previewIndex?: number;
  compact?: boolean;
};

export function ImageAttachment({
  src,
  filename,
  alt = "Attachment image",
  onRemove,
  loading = false,
  loadingPercentage,
  previewEnabled = true,
  previewPortalContainer,
  onPreviewCloseAutoFocus,
  onPreviewOpenChange,
  previewItems,
  previewIndex = 0,
  compact = false,
}: ImageAttachmentProps) {
  const intl = useIntl();
  const [previewOpen, setPreviewOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(previewIndex);

  const handleOpenChange = (open: boolean) => {
    if (open) setActiveIndex(previewIndex);
    setPreviewOpen(open);
    onPreviewOpenChange?.(open);
  };

  const defaultItem: PreviewItem = { alt, src };
  const items = previewItems ?? [defaultItem];
  const activeItem = items[activeIndex] ?? defaultItem;
  const previousIndex = activeIndex > 0 ? activeIndex - 1 : null;
  const nextIndex = activeIndex + 1 < items.length ? activeIndex + 1 : null;

  const displayName =
    filename ??
    intl.formatMessage({
      id: "imageAttachment.defaultName",
      defaultMessage: "image",
      description: "Default filename label for image attachment",
    });
  const isUploading = loading || loadingPercentage != null;
  const sizeClass = compact ? "size-[54px]" : "size-20";
  const cursorClass = previewEnabled ? "cursor-interaction" : "cursor-default";
  const containerClass = clsx(
    "composer-attachment-surface border-token-border-heavy relative inline-flex flex-shrink-0 overflow-visible rounded-lg border focus:outline-none focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:ring-inset",
    sizeClass,
    cursorClass,
  );

  const handleKeyDown = previewEnabled
    ? (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          handleOpenChange(true);
        }
      }
    : undefined;

  const uploadOverlay = isUploading && (
    <span
      className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/5 text-white backdrop-blur-xs"
      role="progressbar"
      aria-label={intl.formatMessage(
        {
          id: "imageAttachment.uploadingAriaLabel",
          defaultMessage: "Uploading {filename}",
          description: "Accessible label for image attachment upload progress",
        },
        { filename: displayName },
      )}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={loadingPercentage === 0 ? undefined : loadingPercentage}
    >
      {loadingPercentage == null || loadingPercentage === 0 ? (
        <ImageUploadSpinnerIcon className="size-6 text-token-text-secondary" />
      ) : (
        <ProgressionDonutIcon
          className="text-white"
          percent={loadingPercentage}
          size={24}
          strokeWidth={2}
        />
      )}
    </span>
  );

  const thumbnail = (
    <span className="composer-attachment-surface absolute inset-0 overflow-hidden rounded-lg">
      <img src={src} alt={alt} className="size-full object-cover" />
      {uploadOverlay}
    </span>
  );

  const card = (
    <div
      className={containerClass}
      role={previewEnabled ? "button" : undefined}
      aria-label={previewEnabled ? displayName : undefined}
      tabIndex={previewEnabled ? 0 : undefined}
      onKeyDown={handleKeyDown}
    >
      {thumbnail}
      {onRemove && (
        <AttachmentRemoveButton
          ariaLabel={intl.formatMessage(
            {
              id: "imageAttachment.removeAriaLabel",
              defaultMessage: "Remove {filename}",
              description: "Aria label for the remove image attachment button",
            },
            { filename: displayName },
          )}
          onRemove={onRemove}
        />
      )}
    </div>
  );

  if (!previewEnabled) return card;

  return (
    <ImagePreviewLightbox
      src={activeItem.src}
      alt={activeItem.alt}
      open={previewOpen}
      onOpenChange={handleOpenChange}
      downloadSrc={activeItem.src}
      imageDraggable={false}
      onCloseAutoFocus={onPreviewCloseAutoFocus}
      onPreviousImage={
        previousIndex == null ? undefined : () => setActiveIndex(previousIndex)
      }
      onNextImage={
        nextIndex == null ? undefined : () => setActiveIndex(nextIndex)
      }
      portalContainer={previewPortalContainer}
      triggerContent={card}
    />
  );
}

type AttachmentRemoveButtonProps = {
  ariaLabel: string;
  className?: string;
  onRemove: () => void;
};

function AttachmentRemoveButton({
  ariaLabel,
  className = "top-1 right-1",
  onRemove,
}: AttachmentRemoveButtonProps) {
  const buttonClass = clsx(
    "absolute flex size-4 cursor-interaction items-center justify-center rounded-full bg-token-foreground text-token-dropdown-background shadow-sm",
    className,
  );
  return (
    <button
      type="button"
      className={buttonClass}
      onPointerDown={stopPointerEvent}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        onRemove();
      }}
      aria-label={ariaLabel}
    >
      <CloseIcon className="icon-xxs" />
    </button>
  );
}

function stopPointerEvent(event: React.PointerEvent<HTMLButtonElement>): void {
  event.preventDefault();
  event.stopPropagation();
}
