// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Image attachments rendered on a sent user message in a local conversation:
// a single thumbnail that opens a lightbox, and a group wrapper that wires up
// previous/next navigation across multiple thumbnails.
import { useEffect, useState } from "react";
import { useIntl, FormattedMessage } from "../vendor/react-intl";
import {
  useAppStore,
  appScopeAtom,
  useQueryClient,
  useScopedAtomValue,
  conversationHostIdAtom,
  useResolvedImageSrc,
  getAbsoluteImageFilePath,
  loadImageFileDataUrl,
  ImagePreviewLightbox,
  isDisplayableImageSrc,
  handleImageAttachmentActivation,
  Spinner,
} from "../boundaries/onboarding-commons-externals.facade";

export interface SentUserImageAttachmentProps {
  src: string;
  conversationId: string | null;
  imageAssetResolver?: ((src: string) => string) | undefined;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  onPreviousImage?: () => void;
  onNextImage?: () => void;
  disableOpenAnimation?: boolean;
}

export function SentUserImageAttachment({
  src,
  conversationId,
  imageAssetResolver,
  open,
  onOpenChange,
  onPreviousImage,
  onNextImage,
  disableOpenAnimation,
}: SentUserImageAttachmentProps) {
  const intl = useIntl();
  const appStore = useAppStore(appScopeAtom);
  const queryClient = useQueryClient();
  const hostId =
    useScopedAtomValue(conversationHostIdAtom, conversationId) ?? "local";
  const displayableSrc = isDisplayableImageSrc(src) ? src : "";
  const { isError, src: resolvedAssetSrc } = useResolvedImageSrc(
    displayableSrc,
    imageAssetResolver,
  );

  const [internalOpen, setInternalOpen] = useState(false);
  const effectiveOpen = open ?? internalOpen;
  const setOpen = onOpenChange ?? setInternalOpen;

  const computeInitialFallbackSrc = () =>
    displayableSrc.length > 0 || getAbsoluteImageFilePath(src) != null
      ? null
      : src;
  const [fallbackSrc, setFallbackSrc] = useState(computeInitialFallbackSrc);
  const resolvedSrc =
    displayableSrc.length > 0 ? resolvedAssetSrc : fallbackSrc;

  const failedAltText = intl.formatMessage({
    id: "codex.localConversation.userImageAttachmentFailed",
    defaultMessage: "Image failed to load",
    description:
      "Alt text for a user image attachment that could not be loaded in local conversation",
  });
  const altText = intl.formatMessage({
    id: "codex.localConversation.userImageAttachment",
    defaultMessage: "User attachment",
    description: "Alt text for user image attachment in local conversation",
  });
  const closeAriaLabel = intl.formatMessage({
    id: "codex.localConversation.closeImagePreview",
    defaultMessage: "Close image preview",
    description:
      "Aria label for closing the image preview dialog in local conversation",
  });

  useEffect(() => {
    if (displayableSrc.length > 0) {
      return;
    }
    const assetPath = getAbsoluteImageFilePath(src);
    if (assetPath == null) {
      setFallbackSrc(src);
      return;
    }
    let cancelled = false;
    setFallbackSrc(null);
    loadImageFileDataUrl(assetPath, hostId, queryClient).then((value) => {
      if (!cancelled) {
        setFallbackSrc(value);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [hostId, displayableSrc, queryClient, src]);

  if (displayableSrc.length > 0 && isError) {
    return (
      <div
        className="flex size-16 items-center justify-center rounded-lg border border-token-error-foreground/20 bg-token-input-validation-error-background/20 px-1 text-center text-[10px] leading-3 text-token-error-foreground"
        role="img"
        aria-label={failedAltText}
      >
        <FormattedMessage
          id="codex.localConversation.userImageAttachmentFailedShort"
          defaultMessage="Failed"
          description="Short visible text for a user image attachment that could not be loaded in local conversation"
        />
      </div>
    );
  }

  if (resolvedSrc == null) {
    return (
      <div className="flex size-20 items-center justify-center rounded-lg border border-token-border-heavy">
        <Spinner className="icon-xs" />
      </div>
    );
  }

  const handleActivate = (event?: { preventDefault: () => void }) => {
    if (
      handleImageAttachmentActivation(appStore, {
        alt: altText,
        attachmentSrc: src,
        downloadSrc: resolvedSrc,
        referrerPolicy: "no-referrer",
        src: resolvedSrc,
        title: altText,
      })
    ) {
      event?.preventDefault();
      return;
    }
    event ?? setOpen(true);
  };

  const trigger = (
    <div
      className="size-20 cursor-interaction rounded-lg border border-token-border-heavy focus:outline-none focus-visible:ring-1 focus-visible:ring-token-focus-border"
      role="button"
      tabIndex={0}
      aria-label={altText}
      onClick={() => handleActivate()}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          handleActivate();
        }
      }}
    >
      <img
        src={resolvedSrc}
        className="h-full w-full rounded-md object-cover"
        referrerPolicy="no-referrer"
        alt={altText}
      />
    </div>
  );

  return (
    <ImagePreviewLightbox
      src={resolvedSrc}
      alt={altText}
      open={effectiveOpen}
      onOpenChange={setOpen}
      onPreviousImage={onPreviousImage}
      onNextImage={onNextImage}
      disableOpenAnimation={disableOpenAnimation}
      closeAriaLabel={closeAriaLabel}
      imageReferrerPolicy="no-referrer"
      triggerContent={trigger}
    />
  );
}

export interface SentUserImageAttachmentGroupProps {
  srcs: string[];
  conversationId: string | null;
}

export function SentUserImageAttachmentGroup({
  srcs,
  conversationId,
}: SentUserImageAttachmentGroupProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      {srcs.map((src, index) => (
        <SentUserImageAttachment
          key={index}
          src={src}
          conversationId={conversationId}
          open={activeIndex === index}
          onOpenChange={(open) => {
            setActiveIndex(open ? index : null);
          }}
          onPreviousImage={
            index === 0
              ? undefined
              : () => {
                  setActiveIndex(index - 1);
                }
          }
          onNextImage={
            index === srcs.length - 1
              ? undefined
              : () => {
                  setActiveIndex(index + 1);
                }
          }
          disableOpenAnimation={true}
        />
      ))}
    </>
  );
}
