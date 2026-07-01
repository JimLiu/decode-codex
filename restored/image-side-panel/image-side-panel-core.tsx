// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// The single-image side panel: comment mode, resize menu, download, and the
// image surface itself.
import { useState } from "react";
import type { MouseEvent } from "react";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import { ImageCommentSurface } from "./image-comment-surface";
import {
  startImageCommentDraft,
  cancelImageCommentDraft,
  commitImageCommentDraft,
  type ImageComment,
} from "./image-comment-draft-store";
import { downloadImage } from "./download-image";
import { getWorktreeSubmitToastMessage } from "./submit-toast-messages";
import { ResizeImageIcon } from "./aspect-ratio-icons";
import { ASPECT_RATIO_OPTIONS } from "./image-resize-options";
import { sendResizePrompt } from "./image-resize-prompt";
import { deriveDownloadFileName } from "./image-side-panel-download";
import type { ImageSidePanelProps } from "./image-side-panel-types";
import {
  useScope,
  appScopeAtom,
  composerScopeAtom,
  useComposerStateValue,
  imageCommentDraftAtom,
  composerModeAtom,
  useActiveConversationId,
  useQueryClient,
  useConversationAtomValue,
  conversationHostIdAtom,
  useHost,
  useConversationMeta,
  useActiveCollaborationMode,
  usePermissionSettings,
  useServiceTierSettings,
  generateId,
  getAbsoluteImageFilePath,
  toastControllerAtom,
  loadImageFileDataUrl,
  DownloadIcon,
  CommentIcon,
  Button,
  Dropdown,
  DropdownMenu,
  PlatformGate,
  OpenImageInButton,
} from "../boundaries/onboarding-commons-externals.facade";

export function ImageSidePanel({
  alt,
  attachmentSrc,
  referrerPolicy,
  src,
  downloadSrc = src,
}: ImageSidePanelProps) {
  const appScope = useScope(appScopeAtom);
  const composerScope = useScope(composerScopeAtom);
  const imageCommentDraft = useComposerStateValue(imageCommentDraftAtom);
  const composerMode = useComposerStateValue(composerModeAtom);
  const conversationId = useActiveConversationId(appScope.value);
  const queryClient = useQueryClient();
  const intl = useIntl();
  const hostId =
    useConversationAtomValue(conversationHostIdAtom, conversationId) ?? "local";
  const host = useHost(hostId);
  const conversation = useConversationMeta(conversationId);
  const { activeMode } = useActiveCollaborationMode(conversationId);
  const { agentMode, permissionProfileId, shouldSendPermissionOverrides } =
    usePermissionSettings({ conversationId, hostId: conversation.hostId });
  const { serviceTierSettings } = useServiceTierSettings(conversationId);
  const [isResizing, setIsResizing] = useState(false);
  const [commentAttachmentId, setCommentAttachmentId] = useState(() =>
    generateId(),
  );

  const canResize =
    attachmentSrc.trim().length > 0 &&
    conversationId != null &&
    conversation.cwd != null;
  const downloadFileName = deriveDownloadFileName(src, alt);
  const absoluteImageFilePath = getAbsoluteImageFilePath(attachmentSrc);
  const showOpenInButton =
    host.kind === "local" &&
    host.id === hostId &&
    absoluteImageFilePath != null;
  const isCloudComposer = composerMode === "cloud";
  const comments: ImageComment[] = imageCommentDraft?.comments ?? [];
  const isCommentMode =
    imageCommentDraft != null &&
    imageCommentDraft.attachmentSrc === attachmentSrc;
  const attachmentId = isCommentMode
    ? imageCommentDraft.attachmentId
    : commentAttachmentId;

  const onUploadFailure = () => {
    appScope.get(toastControllerAtom).danger(
      intl.formatMessage({
        id: "imageSidePanel.commentUploadFailure",
        defaultMessage: "Failed to add image comment",
        description:
          "Error shown when the image required for a comment could not be attached to the composer.",
      }),
    );
    commitComments([]);
  };

  const commitComments = (nextComments: ImageComment[]) => {
    commitImageCommentDraft(
      {
        absoluteImageFilePath,
        attachmentId,
        attachmentSrc,
        composerScope,
        downloadFileName,
        downloadSrc,
        hostId,
        isCloudComposer,
        onUploadFailure,
        queryClient,
        src,
      },
      nextComments,
    );
  };

  const applyResize = async (aspectRatio: string) => {
    if (!canResize || conversationId == null || conversation.cwd == null)
      return;
    setIsResizing(true);
    try {
      await sendResizePrompt({
        scope: appScope,
        conversationId,
        hostId: conversation.hostId,
        attachmentSrc,
        cwd: conversation.cwd,
        agentMode,
        permissionProfileId,
        serviceTier: serviceTierSettings.serviceTierForRequest,
        shouldSendPermissionOverrides,
        activeCollaborationMode: activeMode,
        prompt: intl.formatMessage(
          {
            id: "imageSidePanel.resizePrompt",
            defaultMessage: "Make the aspect ratio {aspectRatio}",
            description:
              "Instruction sent when the user resizes an image from the image side panel.",
          },
          { aspectRatio },
        ),
      });
    } catch (error) {
      appScope
        .get(toastControllerAtom)
        .danger(getWorktreeSubmitToastMessage(error, intl));
    } finally {
      setIsResizing(false);
    }
  };

  const onDownloadFailure = () => {
    appScope.get(toastControllerAtom).danger(
      intl.formatMessage({
        id: "imageSidePanel.downloadFailure",
        defaultMessage: "Could not download image",
        description: "Error shown when the image toolbar download fails.",
      }),
    );
  };

  const handleDownload = async (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (absoluteImageFilePath == null) {
      if (
        await downloadImage({
          downloadSrc,
          suggestedFilename: downloadFileName,
        })
      )
        return;
      onDownloadFailure();
      return;
    }
    const dataUrl = await loadImageFileDataUrl(
      absoluteImageFilePath,
      hostId,
      queryClient,
    );
    if (dataUrl == null) {
      onDownloadFailure();
      return;
    }
    if (
      !(await downloadImage({
        downloadSrc: dataUrl,
        suggestedFilename: downloadFileName,
      }))
    ) {
      onDownloadFailure();
    }
  };

  const downloadLink = (
    <a
      className="no-drag flex aspect-square h-token-button-composer-sm cursor-interaction items-center justify-center gap-1 rounded-full border border-token-border border-transparent p-0 whitespace-nowrap !text-token-foreground select-none visited:!text-token-foreground hover:bg-token-list-hover-background hover:!text-token-foreground focus:!text-token-foreground focus:outline-none"
      href={downloadSrc}
      download={downloadFileName}
      aria-label={intl.formatMessage({
        id: "imageSidePanel.download",
        defaultMessage: "Download",
        description: "Toolbar action that downloads the current image.",
      })}
      onClick={handleDownload}
    >
      <DownloadIcon className="icon-xs" />
    </a>
  );

  return (
    <div className="flex h-full min-h-0 flex-col bg-token-bg-primary pb-[var(--right-panel-composer-overlay-reserve,0px)]">
      {isCommentMode ? (
        <div className="flex shrink-0 flex-col items-center gap-2 px-4 pt-4">
          <div className="flex w-fit items-center gap-0.5 rounded-full bg-token-editor-background/95 p-0.5 shadow-md ring-1 ring-token-border-light backdrop-blur-sm">
            <span className="px-1.5 text-base leading-[18px] text-token-charts-blue">
              <FormattedMessage
                id="imageSidePanel.commentCount"
                defaultMessage="{count, plural, one {# comment} other {# comments}}"
                description="Count of comments attached to the image while image comment mode is active."
                values={{ count: comments.length }}
              />
            </span>
            <Button
              className="!text-base"
              color="ghostActive"
              size="composerSm"
              onClick={() => {
                cancelImageCommentDraft(composerScope, attachmentSrc);
              }}
            >
              <FormattedMessage
                id="imageSidePanel.cancelCommentMode"
                defaultMessage="Cancel"
                description="Toolbar action that exits image comment mode."
              />
            </Button>
          </div>
          {comments.length === 0 ? (
            <p className="text-center text-sm text-token-text-tertiary">
              <FormattedMessage
                id="imageSidePanel.commentHelperDesktop"
                defaultMessage="Click on the image to add comments"
                description="Helper text shown in image comment mode before the user has added any comments on desktop."
              />
            </p>
          ) : null}
        </div>
      ) : (
        <div className="@container relative flex shrink-0 justify-center gap-2 px-4 pt-4">
          <div className="flex w-fit items-center gap-0.5 rounded-full bg-token-editor-background/95 p-0.5 shadow-md ring-1 ring-token-border-light backdrop-blur-sm">
            <Button
              className="!text-base"
              color="ghostActive"
              size="composerSm"
              onClick={() => {
                setCommentAttachmentId(generateId());
                startImageCommentDraft(
                  composerScope,
                  commentAttachmentId,
                  attachmentSrc,
                );
              }}
            >
              <CommentIcon className="icon-xs" />
              <FormattedMessage
                id="imageSidePanel.comment"
                defaultMessage="Comment"
                description="Toolbar action that enters image comment mode."
              />
            </Button>
            <Dropdown
              align="center"
              contentWidth="xs"
              side="bottom"
              triggerButton={
                <Button
                  className="!text-base"
                  color="ghostActive"
                  disabled={!canResize}
                  loading={isResizing}
                  size="composerSm"
                >
                  <ResizeImageIcon className="icon-xs" />
                  <FormattedMessage
                    id="imageSidePanel.resize"
                    defaultMessage="Resize"
                    description="Toolbar action that resizes the current image."
                  />
                </Button>
              }
            >
              {ASPECT_RATIO_OPTIONS.map(({ icon, label, ratio }) => (
                <DropdownMenu.Item
                  key={ratio}
                  LeftIcon={icon}
                  onSelect={() => {
                    applyResize(ratio);
                  }}
                >
                  <span className="flex w-full items-center justify-between gap-4">
                    <FormattedMessage {...label} />
                    <span className="text-token-text-tertiary">{ratio}</span>
                  </span>
                </DropdownMenu.Item>
              ))}
            </Dropdown>
            {downloadLink}
          </div>
          <PlatformGate electron>
            {showOpenInButton ? (
              <div className="absolute right-4 [@container_(max-width:360px)]:static">
                <OpenImageInButton
                  hostId={hostId}
                  path={absoluteImageFilePath}
                  showLabel
                />
              </div>
            ) : null}
          </PlatformGate>
        </div>
      )}
      {isCommentMode ? (
        <ImageCommentSurface
          alt={alt}
          comments={comments}
          referrerPolicy={referrerPolicy}
          src={src}
          onDeleteComment={(commentId) => {
            commitComments(
              comments.filter((comment) => comment.id !== commentId),
            );
          }}
          onSubmitComment={(comment) => {
            const nextComment = { ...comment, id: comment.id ?? generateId() };
            commitComments(
              comment.id == null
                ? [...comments, nextComment]
                : comments.map((existing) =>
                    existing.id === comment.id ? nextComment : existing,
                  ),
            );
          }}
        />
      ) : (
        <div className="flex min-h-0 flex-1 items-center justify-center p-4">
          <img
            alt={alt}
            className="max-h-full max-w-full rounded-xl object-contain"
            referrerPolicy={referrerPolicy}
            src={src}
          />
        </div>
      )}
    </div>
  );
}
