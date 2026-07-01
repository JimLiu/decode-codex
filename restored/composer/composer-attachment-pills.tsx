// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// Composer attachment-tray pill row: renders one pill per attached or pending
// item (images, app screenshots, comments, selections, files, pasted text, and
// pull-request context) inside a horizontally scrollable strip.

import type { ReactNode, SVGProps } from "react";

import { AppshotAttachment } from "../conversations/appshot-attachment";
import { ImageAttachment } from "../image-side-panel/image-attachment";
import {
  BrowserPageSelectionAttachmentPill,
  CommentAttachmentsTooltip,
  ContextAttachmentIcon,
  PullRequestAttachmentIcon,
  ShowInTextFieldIcon,
  canInlinePastedText,
  formatFileAttachmentLabel,
  getCommentAttachmentIcon,
  getCommentAttachmentKind,
  getFileAttachmentKey,
  isPreviewDisabledPath,
  motion,
  resolvePastedTextHostId,
  resolveSnapshotHeight,
  splitCommentAttachmentsByKind,
} from "../boundaries/onboarding-commons-externals.facade";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import { AttachmentPill } from "./attachment-pill";
import { CommentAttachmentPill } from "./comment-attachment-pill";
import { FileAttachmentPill } from "./file-attachment-pill";
import { SelectedTextAttachmentPill } from "./selected-text-attachment-pill";

type AttachmentLayout = "pill" | "card";

type ComposerPreviewItem = {
  alt?: string;
  src: string;
  accessibilityText?: string | null;
  id?: string;
};

interface ImageAttachmentDescriptor {
  id: string;
  filename?: string;
  uploadStatus?: string;
  src: string;
  previewSrc?: string | null;
}

interface ImageCommentDescriptor {
  id: string;
  text: string;
}

interface AppshotContextDescriptor {
  imageDataUrl?: string | null;
  imagePath?: string | null;
  transitionSnapshotDataUrl?: string | null;
  transitionSnapshotHeight?: number;
  axTree?: string | null;
  appName?: string | null;
  windowTitle?: string | null;
  bundleIdentifier?: string;
  imageName?: string | null;
}

interface PendingAppshotCaptureDescriptor {
  requestId: string;
  transitionSnapshotHeight?: number;
  transitionSnapshotHeightResolved?: boolean;
  transitionSpringDampingFraction?: number;
  transitionSpringResponse?: number;
}

interface FileAttachmentDescriptor {
  label: string;
  path?: string;
  fsPath?: string | null;
  startLine?: number | null;
  endLine?: number | null;
}

interface PendingFileAttachmentDescriptor {
  id: string;
  label: string;
}

interface PastedTextAttachmentDescriptor {
  preview: string;
  characterCount: number;
  file: { path: string };
}

interface PendingPastedTextAttachmentDescriptor {
  id: string;
  preview: string;
}

interface McpAppModelContextAttachment {
  id: string;
  title?: string;
  showInComposer?: boolean;
  composerLabel?: ReactNode;
  composerAttachmentLayout?: AttachmentLayout;
  imageAttachments: Array<{ src: string }>;
}

interface SelectedTextAttachmentDescriptor {
  text: string;
}

interface ChromeExtensionPageSelectionDescriptor {
  faviconUrl?: string | null;
  selectedText: string;
}

interface PullRequestCheckDescriptor {
  name: string;
}

interface PullRequestMergeConflictDescriptor {
  number: number;
}

type ComposerCommentAttachment = Record<string, unknown>;

export interface ComposerAttachmentPillsProps {
  imageAttachments: readonly ImageAttachmentDescriptor[];
  imageComments?: readonly ImageCommentDescriptor[];
  appshotContexts?: readonly AppshotContextDescriptor[];
  pendingAppshotCaptures?: readonly PendingAppshotCaptureDescriptor[];
  pendingFileAttachments?: readonly PendingFileAttachmentDescriptor[];
  pendingPastedTextAttachments?: readonly PendingPastedTextAttachmentDescriptor[];
  fileAttachments: readonly FileAttachmentDescriptor[];
  pastedTextAttachments?: readonly PastedTextAttachmentDescriptor[];
  commentAttachments: readonly ComposerCommentAttachment[];
  mcpAppModelContextAttachments: readonly McpAppModelContextAttachment[];
  selectedTextAttachments: readonly SelectedTextAttachmentDescriptor[];
  chromeExtensionPageSelection?: ChromeExtensionPageSelectionDescriptor | null;
  pullRequestChecks: readonly PullRequestCheckDescriptor[];
  pullRequestMergeConflict?: PullRequestMergeConflictDescriptor | null;
  addedFiles: readonly FileAttachmentDescriptor[];
  priorConversation?: unknown;
  onRemoveImage: (id: string) => void;
  onRemoveAppshotContext: (index: number) => void;
  onRemoveFileAttachment: (index: number) => void;
  onRemovePastedTextAttachment?: (index: number) => void;
  onShowPastedTextInTextField?: (index: number) => void;
  onRemovePendingFileAttachment: (id: string) => void;
  onRemovePendingPastedTextAttachment?: (id: string) => void;
  onRemoveFile: (index: number) => void;
  onOpenFile: (descriptor: unknown, hostId?: string | null) => void;
  onRemoveAllPullRequestChecks: () => void;
  onRemovePullRequestMergeConflict: () => void;
  onRemoveAllBrowserCommentAttachments: () => void;
  onRemoveAllDiffCommentAttachments?: () => void;
  onRemoveAllImageComments: () => void;
  onRemoveAllMcpAppModelContextAttachments: () => void;
  onRemoveAllSelectedTextAttachments: () => void;
  onRemoveChromeExtensionPageSelection?: () => void;
  onRemovePriorConversation?: () => void;
  cwd?: string | null;
  hostId?: string | null;
  fileAttachmentHostId?: string | null;
}

export function ComposerAttachmentPills({
  imageAttachments,
  imageComments = [],
  appshotContexts = [],
  pendingAppshotCaptures = [],
  pendingFileAttachments = [],
  pendingPastedTextAttachments = [],
  fileAttachments,
  pastedTextAttachments = [],
  commentAttachments,
  mcpAppModelContextAttachments,
  selectedTextAttachments,
  chromeExtensionPageSelection,
  pullRequestChecks,
  pullRequestMergeConflict = null,
  addedFiles,
  priorConversation,
  onRemoveImage,
  onRemoveAppshotContext,
  onRemoveFileAttachment,
  onRemovePastedTextAttachment,
  onShowPastedTextInTextField,
  onRemovePendingFileAttachment,
  onRemovePendingPastedTextAttachment,
  onRemoveFile,
  onOpenFile,
  onRemoveAllPullRequestChecks,
  onRemovePullRequestMergeConflict,
  onRemoveAllBrowserCommentAttachments,
  onRemoveAllDiffCommentAttachments,
  onRemoveAllImageComments,
  onRemoveAllMcpAppModelContextAttachments,
  onRemoveAllSelectedTextAttachments,
  onRemoveChromeExtensionPageSelection,
  onRemovePriorConversation,
  cwd,
  hostId,
  fileAttachmentHostId,
}: ComposerAttachmentPillsProps) {
  const intl = useIntl();
  const folderHostId =
    fileAttachmentHostId === undefined ? hostId : fileAttachmentHostId;

  const {
    annotationCommentAttachments,
    designTweakCommentAttachments,
    diffCommentAttachments,
  } = splitCommentAttachmentsByKind(commentAttachments);
  const browserCommentAttachments = [
    ...annotationCommentAttachments,
    ...designTweakCommentAttachments,
  ];
  const browserCommentKinds = browserCommentAttachments.map(
    getCommentAttachmentKind,
  );
  const previewEnabled =
    typeof window === "undefined" ||
    !isPreviewDisabledPath(window.location.pathname);

  const imagePreviewItems: ComposerPreviewItem[] = imageAttachments.map(
    toImageAttachmentPreviewItem,
  );
  const accessibleImagePreviewItems: ComposerPreviewItem[] =
    imageAttachments.map(toImageAttachmentPreviewItem);
  const visibleMcpAttachments = mcpAppModelContextAttachments.filter(
    isMcpAttachmentShownInComposer,
  );
  const mcpImagePreviewItems = visibleMcpAttachments.flatMap(
    toMcpImagePreviewItems,
  );

  for (const appshotContext of appshotContexts) {
    const src = appshotContext.imageDataUrl ?? appshotContext.imagePath;
    if (src != null) {
      imagePreviewItems.push({ alt: "User attachment", src });
      accessibleImagePreviewItems.push({
        alt: "User attachment",
        accessibilityText: appshotContext.axTree,
        src,
      });
    }
  }

  const mcpPreviewStartIndex = imagePreviewItems.length;
  imagePreviewItems.push(...mcpImagePreviewItems.map(toPlainPreviewItem));
  accessibleImagePreviewItems.push(
    ...mcpImagePreviewItems.map(toPlainPreviewItem),
  );

  const firstPullRequestCheck = pullRequestChecks[0];

  const hasCompactAttachments =
    priorConversation != null ||
    imageComments.length > 0 ||
    browserCommentAttachments.length > 0 ||
    diffCommentAttachments.length > 0 ||
    visibleMcpAttachments.length > 0 ||
    selectedTextAttachments.length > 0 ||
    chromeExtensionPageSelection != null ||
    pullRequestChecks.length > 0 ||
    pullRequestMergeConflict != null ||
    fileAttachments.length > 0 ||
    pendingFileAttachments.length > 0 ||
    pastedTextAttachments.length > 0 ||
    pendingPastedTextAttachments.length > 0 ||
    addedFiles.length > 0;

  if (
    !(
      imageAttachments.length > 0 ||
      appshotContexts.length > 0 ||
      pendingAppshotCaptures.length > 0 ||
      hasCompactAttachments
    )
  ) {
    return null;
  }

  const imagePills = imageAttachments.map((image, index) => (
    <ImageAttachment
      key={image.id}
      src={imagePreviewSrc(image)}
      filename={image.filename}
      alt="User attachment"
      loading={image.uploadStatus === "uploading"}
      previewEnabled={previewEnabled}
      previewIndex={index}
      previewItems={imagePreviewItems}
      compact={hasCompactAttachments}
      onRemove={() => onRemoveImage(image.id)}
    />
  ));

  const pendingAppshotCapturePills = pendingAppshotCaptures.map(
    renderPendingAppshotCapture,
  );

  const appshotContextPills = appshotContexts.map((appshotContext, index) => {
    const screenshotSrc =
      appshotContext.imageDataUrl ?? appshotContext.imagePath;
    if (screenshotSrc == null) return null;
    return (
      <AppshotAttachment
        key={`${appshotContext.bundleIdentifier}-${appshotContext.imageName ?? index}`}
        screenshotSrc={screenshotSrc}
        transitionSnapshotSrc={appshotContext.transitionSnapshotDataUrl}
        transitionSnapshotHeight={appshotContext.transitionSnapshotHeight}
        appName={appshotContext.appName}
        accessibilityText={appshotContext.axTree}
        windowTitle={appshotContext.windowTitle}
        previewEnabled={previewEnabled}
        previewIndex={
          imageAttachments.length +
          appshotContexts.slice(0, index).filter(hasAppshotImage).length
        }
        previewItems={accessibleImagePreviewItems}
        onRemove={() => onRemoveAppshotContext(index)}
      />
    );
  });

  const priorConversationPill = priorConversation ? (
    <AttachmentPill
      Icon={ContextAttachmentIcon}
      layout="card"
      onRemove={onRemovePriorConversation}
      onRemoveAriaLabel={
        onRemovePriorConversation
          ? intl.formatMessage({
              id: "composer.priorContext.removeAriaLabel",
              defaultMessage: "Remove previous context",
              description:
                "Aria label for removing a prior context attachment pill",
            })
          : undefined
      }
    >
      <FormattedMessage
        id="composer.priorContext.label"
        defaultMessage="Previous context"
        description="Attachment pill label for including the prior conversation context"
      />
    </AttachmentPill>
  ) : null;

  const browserCommentsPill =
    browserCommentAttachments.length > 0 ? (
      <CommentAttachmentPill
        count={browserCommentAttachments.length}
        attachmentKind="annotation"
        onRemove={onRemoveAllBrowserCommentAttachments}
        icon={getCommentAttachmentIcon(browserCommentKinds)}
        tooltipContent={
          <CommentAttachmentsTooltip
            commentAttachments={browserCommentAttachments}
            cwd={cwd}
            hostId={hostId}
          />
        }
      />
    ) : null;

  const imageCommentsPill =
    imageComments.length > 0 ? (
      <CommentAttachmentPill
        count={imageComments.length}
        attachmentKind="comment"
        icon="image-comment"
        onRemove={onRemoveAllImageComments}
        tooltipContent={
          <ol className="flex flex-col gap-2 text-sm">
            {imageComments.map(renderImageCommentSummaryItem)}
          </ol>
        }
      />
    ) : null;

  const diffCommentsPill =
    diffCommentAttachments.length > 0 ? (
      <CommentAttachmentPill
        count={diffCommentAttachments.length}
        attachmentKind="comment"
        onRemove={onRemoveAllDiffCommentAttachments}
        tooltipContent={
          <CommentAttachmentsTooltip
            commentAttachments={diffCommentAttachments}
            cwd={cwd}
            hostId={hostId}
          />
        }
      />
    ) : null;

  const selectedTextPill =
    selectedTextAttachments.length > 0 ? (
      <SelectedTextAttachmentPill
        selections={selectedTextAttachments.map(toSelectedTextValue)}
        onRemove={onRemoveAllSelectedTextAttachments}
      />
    ) : null;

  const browserPageSelectionPill =
    chromeExtensionPageSelection == null ? null : (
      <BrowserPageSelectionAttachmentPill
        faviconUrl={chromeExtensionPageSelection.faviconUrl}
        selectedText={chromeExtensionPageSelection.selectedText}
        onRemove={onRemoveChromeExtensionPageSelection}
      />
    );

  const mcpAppContextPill =
    visibleMcpAttachments.length > 0 ? (
      <AttachmentPill
        Icon={ContextAttachmentIcon}
        layout={mcpAttachmentLayout(visibleMcpAttachments)}
        onRemove={onRemoveAllMcpAppModelContextAttachments}
        onRemoveAriaLabel={intl.formatMessage({
          id: "composer.mcpAppModelContext.removeAriaLabel",
          defaultMessage: "Remove app context attachment",
          description:
            "Aria label for removing MCP app model context attachments",
        })}
      >
        {visibleMcpAttachments.length === 1 ? (
          (visibleMcpAttachments[0]?.composerLabel ?? (
            <FormattedMessage
              id="composer.mcpAppModelContext.singleLabel"
              defaultMessage="From {title}"
              description="Attachment pill label for one MCP app model context"
              values={{ title: visibleMcpAttachments[0]?.title }}
            />
          ))
        ) : (
          <FormattedMessage
            id="composer.mcpAppModelContext.multipleLabel"
            defaultMessage="{count} app updates"
            description="Attachment pill label for multiple MCP app model context attachments"
            values={{ count: visibleMcpAttachments.length }}
          />
        )}
      </AttachmentPill>
    ) : null;

  const mcpImagePills = mcpImagePreviewItems.map((image, index) => (
    <ImageAttachment
      key={image.id}
      src={image.src}
      alt={image.alt}
      previewEnabled={previewEnabled}
      previewIndex={mcpPreviewStartIndex + index}
      previewItems={imagePreviewItems}
    />
  ));

  const pullRequestChecksPill =
    firstPullRequestCheck == null ? null : (
      <FileAttachmentPill
        filename={intl.formatMessage(
          {
            id: "pullRequestChecksAttachments.numChecks",
            defaultMessage:
              "{count, plural, one {# failing check} other {# failing checks}}",
            description:
              "Number of failing pull request checks attached to the message",
          },
          { count: pullRequestChecks.length },
        )}
        Icon={PullRequestAttachmentIcon}
        onRemove={onRemoveAllPullRequestChecks}
        layout="card"
        subtitle={
          pullRequestChecks.length === 1
            ? firstPullRequestCheck.name
            : intl.formatMessage(
                {
                  id: "pullRequestChecksAttachments.subtitle",
                  defaultMessage: "{checkName} +{count} more",
                  description:
                    "Subtitle for failing pull request checks showing the first check name and how many other checks are attached",
                },
                {
                  checkName: firstPullRequestCheck.name,
                  count: pullRequestChecks.length - 1,
                },
              )
        }
        onRemoveAriaLabel={intl.formatMessage({
          id: "pullRequestChecksAttachments.removeAriaLabel",
          defaultMessage: "Remove failing checks attachment",
          description:
            "Aria label for removing the failing pull request checks attachment",
        })}
      />
    );

  const mergeConflictPill =
    pullRequestMergeConflict == null ? null : (
      <FileAttachmentPill
        filename={intl.formatMessage({
          id: "pullRequestMergeConflictAttachment.title",
          defaultMessage: "Merge conflicts",
          description:
            "Attachment pill label for a pull request merge conflict fix task",
        })}
        Icon={PullRequestAttachmentIcon}
        onRemove={onRemovePullRequestMergeConflict}
        layout="card"
        subtitle={
          <FormattedMessage
            id="pullRequestMergeConflictAttachment.subtitle"
            defaultMessage="PR {number}"
            description="Subtitle for a pull request merge conflict attachment"
            values={{ number: pullRequestMergeConflict.number }}
          />
        }
        onRemoveAriaLabel={intl.formatMessage({
          id: "pullRequestMergeConflictAttachment.removeAriaLabel",
          defaultMessage: "Remove merge conflict attachment",
          description:
            "Aria label for removing a pull request merge conflict attachment",
        })}
      />
    );

  const fileAttachmentPills = fileAttachments.map((file, index) => (
    <FileAttachmentPill
      key={`attachment-${getFileAttachmentKey(file)}`}
      filename={formatFileAttachmentLabel(file.label, fileLineInfo(file))}
      resourcePath={file.path}
      folderPath={file.fsPath}
      folderHostId={folderHostId}
      lineInfo={fileLineInfo(file)}
      onClick={() => onOpenFile(file, folderHostId)}
      onRemove={() => onRemoveFileAttachment(index)}
      layout="card"
    />
  ));

  const pastedTextPills = pastedTextAttachments.map((pastedText, index) => (
    <PastedTextAttachmentPill
      key={pastedText.file.path}
      preview={pastedText.preview}
      onClick={() =>
        onOpenFile(
          pastedText.file,
          resolvePastedTextHostId(pastedText, folderHostId),
        )
      }
      onRemove={
        onRemovePastedTextAttachment == null
          ? undefined
          : () => onRemovePastedTextAttachment(index)
      }
      onShowInTextField={
        onShowPastedTextInTextField != null &&
        canInlinePastedText(pastedText.characterCount)
          ? () => onShowPastedTextInTextField(index)
          : undefined
      }
    />
  ));

  const pendingPastedTextPills = pendingPastedTextAttachments.map(
    (pendingPastedText) => (
      <PastedTextAttachmentPill
        key={pendingPastedText.id}
        isPending
        preview={pendingPastedText.preview}
        onRemove={
          onRemovePendingPastedTextAttachment == null
            ? undefined
            : () => onRemovePendingPastedTextAttachment(pendingPastedText.id)
        }
      />
    ),
  );

  const pendingFilePills = pendingFileAttachments.map((pendingFile) => (
    <FileAttachmentPill
      key={pendingFile.id}
      filename={pendingFile.label}
      onRemove={() => onRemovePendingFileAttachment(pendingFile.id)}
      subtitle={
        <FormattedMessage
          id="composer.fileAttachment.uploading"
          defaultMessage="Uploading…"
          description="Subtitle shown while a local file is being copied to a remote host"
        />
      }
      layout="card"
    />
  ));

  const addedFilePills = addedFiles.map((file, index) => (
    <FileAttachmentPill
      key={`added-${getFileAttachmentKey(file)}`}
      filename={formatFileAttachmentLabel(file.label, fileLineInfo(file))}
      resourcePath={file.path}
      folderPath={file.fsPath}
      folderHostId={folderHostId}
      lineInfo={fileLineInfo(file)}
      onClick={() => onOpenFile(file, folderHostId)}
      onRemove={() => onRemoveFile(index)}
      layout="card"
    />
  ));

  return (
    <div
      className="hide-scrollbar w-full overflow-x-auto p-px"
      data-composer-attachments-row={true}
    >
      <div className="flex min-w-max items-end gap-2">
        {imagePills}
        {pendingAppshotCapturePills}
        {appshotContextPills}
        {priorConversationPill}
        {browserCommentsPill}
        {imageCommentsPill}
        {diffCommentsPill}
        {selectedTextPill}
        {browserPageSelectionPill}
        {mcpAppContextPill}
        {mcpImagePills}
        {pullRequestChecksPill}
        {mergeConflictPill}
        {fileAttachmentPills}
        {pastedTextPills}
        {pendingPastedTextPills}
        {pendingFilePills}
        {addedFilePills}
      </div>
    </div>
  );
}

interface PastedTextAttachmentPillProps {
  isPending?: boolean;
  onClick?: () => void;
  onRemove?: () => void;
  onShowInTextField?: () => void;
  preview: string;
}

function PastedTextAttachmentPill({
  isPending = false,
  onClick,
  onRemove,
  onShowInTextField,
  preview,
}: PastedTextAttachmentPillProps) {
  const intl = useIntl();
  const filename =
    preview.length > 0
      ? preview
      : intl.formatMessage({
          id: "composer.pastedTextAttachment.title",
          defaultMessage: "Pasted text",
          description:
            "Title for an attached large text paste without displayable text",
        });
  const removeAriaLabel =
    onRemove == null
      ? undefined
      : intl.formatMessage({
          id: "composer.pastedTextAttachment.removeAriaLabel",
          defaultMessage: "Remove pasted text attachment",
          description: "Aria label for removing an attached large text paste",
        });
  return (
    <FileAttachmentPill
      filename={filename}
      Icon={PastedTextIcon}
      layout="card"
      onClick={onClick}
      onRemove={onRemove}
      onRemoveAriaLabel={removeAriaLabel}
      subtitle={renderPastedTextSubtitle({ isPending, onShowInTextField })}
    />
  );
}

function renderPastedTextSubtitle({
  isPending,
  onShowInTextField,
}: {
  isPending: boolean;
  onShowInTextField?: () => void;
}): ReactNode {
  if (isPending) {
    return (
      <FormattedMessage
        id="composer.pastedTextAttachment.adding"
        defaultMessage="Adding pasted text…"
        description="Subtitle shown while a large text paste is becoming an attachment"
      />
    );
  }
  if (onShowInTextField == null) {
    return (
      <FormattedMessage
        id="composer.pastedTextAttachment.identity"
        defaultMessage="Pasted text"
        description="Subtitle identifying a large text paste attachment"
      />
    );
  }
  return (
    <button
      type="button"
      className="pointer-events-auto inline-flex cursor-interaction items-center gap-0.5 text-token-text-secondary underline underline-offset-2 hover:text-token-foreground"
      onClick={onShowInTextField}
    >
      <FormattedMessage
        id="composer.pastedTextAttachment.showInTextField"
        defaultMessage="Show in text field"
        description="Action that restores an attached large text paste into the composer editor"
      />
      <ShowInTextFieldIcon className="icon-2xs shrink-0" aria-hidden={true} />
    </button>
  );
}

function renderImageCommentSummaryItem(
  comment: ImageCommentDescriptor,
  index: number,
): ReactNode {
  return (
    <li key={comment.id} className="flex min-w-0 gap-2">
      <span className="shrink-0 text-token-text-tertiary">
        <FormattedMessage
          id="attachmentsRow.imageCommentSummaryNumber"
          defaultMessage="{commentNumber}."
          description="Ordinal label for an image comment in the composer attachment summary."
          values={{ commentNumber: index + 1 }}
        />
      </span>
      <span className="min-w-0 break-words">{comment.text}</span>
    </li>
  );
}

function renderPendingAppshotCapture(
  capture: PendingAppshotCaptureDescriptor,
): ReactNode {
  const resolvedHeight = capture.transitionSnapshotHeightResolved
    ? resolveSnapshotHeight(capture.transitionSnapshotHeight)
    : 0;
  const transition = appshotSpringTransition(capture);
  return (
    <motion.div
      key={`pending-appshot-capture-${capture.requestId}`}
      aria-hidden="true"
      className="composer-attachment-surface relative flex-shrink-0 overflow-hidden rounded-2xl"
      data-pending-appshot-capture-request-id={capture.requestId}
      initial={{ height: 0, marginRight: -8, width: 0 }}
      animate={{ height: resolvedHeight, marginRight: 0, width: 232 }}
      transition={{
        height: transition,
        marginRight: transition,
        width: transition,
      }}
      data-pending-appshot-capture={true}
    />
  );
}

function appshotSpringTransition({
  transitionSpringDampingFraction,
  transitionSpringResponse,
}: PendingAppshotCaptureDescriptor): {
  type: "spring";
  visualDuration: number;
  bounce: number;
  delay: number;
} {
  return {
    type: "spring",
    visualDuration: transitionSpringResponse ?? 0.35,
    bounce: 1 - (transitionSpringDampingFraction ?? 0.73),
    delay: 0.15,
  };
}

function imagePreviewSrc(image: ImageAttachmentDescriptor): string {
  return image.previewSrc ?? image.src;
}

function toImageAttachmentPreviewItem(
  image: ImageAttachmentDescriptor,
): ComposerPreviewItem {
  return { alt: "User attachment", src: imagePreviewSrc(image) };
}

function toPlainPreviewItem(item: ComposerPreviewItem): ComposerPreviewItem {
  const { alt, src } = item;
  return { alt, src };
}

function toMcpImagePreviewItems(
  attachment: McpAppModelContextAttachment,
): ComposerPreviewItem[] {
  return attachment.imageAttachments.map((item, index) => ({
    alt: attachment.title,
    id: `${attachment.id}-${index}`,
    src: item.src,
  }));
}

function isMcpAttachmentShownInComposer(
  attachment: McpAppModelContextAttachment,
): boolean {
  return attachment.showInComposer !== false;
}

function hasAppshotImage(context: AppshotContextDescriptor): boolean {
  return (context.imageDataUrl ?? context.imagePath) != null;
}

function mcpAttachmentLayout(
  attachments: readonly McpAppModelContextAttachment[],
): AttachmentLayout {
  return attachments.length === 1
    ? (attachments[0]?.composerAttachmentLayout ?? "card")
    : "card";
}

function fileLineInfo(file: FileAttachmentDescriptor): string | undefined {
  if (file.startLine == null) return undefined;
  return file.endLine != null && file.endLine !== file.startLine
    ? `${file.startLine}-${file.endLine}`
    : `${file.startLine}`;
}

function toSelectedTextValue(
  selection: SelectedTextAttachmentDescriptor,
): string {
  return selection.text;
}

function PastedTextIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.66803 6.66694C2.66803 7.03421 2.9658 7.33198 3.33307 7.33198C3.70034 7.33198 3.99811 7.03421 3.99811 6.66694C3.99811 5.84915 4.00379 5.57038 4.06061 5.35834L4.09576 5.24116C4.29229 4.66455 4.76489 4.22052 5.35846 4.06147L5.53717 4.02729C5.74323 4.00174 6.05312 3.99897 6.66607 3.99897C7.03323 3.99897 7.33094 3.70105 7.33111 3.33393C7.33111 2.96666 7.03334 2.66889 6.66607 2.66889C6.02574 2.66889 5.56566 2.66429 5.17682 2.7392L5.01373 2.77631C3.98983 3.05071 3.17582 3.81772 2.83697 4.81244L2.77545 5.01459C2.66196 5.43834 2.66803 5.93492 2.66803 6.66694ZM16.001 6.66694C16.001 7.0341 16.299 7.3318 16.6661 7.33198C17.0333 7.33198 17.3311 7.03421 17.3311 6.66694C17.3311 6.02609 17.3359 5.56574 17.2608 5.1767L17.2237 5.01459C16.9493 3.99067 16.1823 3.17672 15.1876 2.83784L14.9854 2.77631C14.6677 2.6912 14.309 2.67359 13.8409 2.66987L13.3331 2.66889L13.1993 2.68256C12.8962 2.74452 12.668 3.01252 12.668 3.33393C12.6682 3.70105 12.9659 3.99897 13.3331 3.99897L13.8526 3.99994C14.2859 4.00421 14.4826 4.01886 14.6417 4.06147L14.7588 4.09662C15.3353 4.29313 15.7794 4.76499 15.9385 5.35834L15.9727 5.53705C15.9983 5.74315 16.001 6.05313 16.001 6.66694ZM10.8331 8.99897L10.9669 8.9853C11.2699 8.92341 11.498 8.65524 11.4981 8.33393C11.4981 8.01252 11.27 7.74452 10.9669 7.68256L10.8331 7.66889L7.50006 7.66889C7.13279 7.66889 6.83502 7.96666 6.83502 8.33393C6.8352 8.70105 7.1329 8.99897 7.50006 8.99897L10.8331 8.99897ZM12.5001 12.332L12.6338 12.3183C12.9368 12.2563 13.1651 11.9883 13.1651 11.6669C13.1651 11.3456 12.9368 11.0776 12.6338 11.0156L12.5001 11.0019H7.50006C7.13279 11.0019 6.83502 11.2997 6.83502 11.6669C6.83502 12.0342 7.13279 12.332 7.50006 12.332H12.5001ZM2.66803 13.3339C2.66803 14.0659 2.66191 14.5625 2.77545 14.9863L2.83697 15.1884C3.17589 16.183 3.98989 16.9502 5.01373 17.2246L5.17682 17.2617C5.56565 17.3366 6.02577 17.332 6.66607 17.332C7.03334 17.332 7.33111 17.0342 7.33111 16.6669C7.33111 16.2997 7.03334 16.0019 6.66607 16.0019C6.05316 16.0019 5.74323 15.9991 5.53717 15.9736L5.35846 15.9394C4.76469 15.7803 4.29217 15.3356 4.09576 14.7587L4.06061 14.6415C4.00387 14.4296 3.99811 14.1511 3.99811 13.3339C3.99811 12.9667 3.70034 12.6689 3.33307 12.6689C2.9658 12.6689 2.66803 12.9667 2.66803 13.3339ZM16.001 13.3339C16.001 13.9469 15.9983 14.2568 15.9727 14.4628L15.9385 14.6415C15.7795 15.2351 15.3354 15.7077 14.7588 15.9042L14.6417 15.9394C14.4826 15.982 14.2859 15.9957 13.8526 15.9999L13.3331 16.0019L13.1993 16.0156C12.8961 16.0775 12.668 16.3455 12.668 16.6669C12.668 17.0342 12.9658 17.332 13.3331 17.332L13.8409 17.331C14.309 17.3273 14.6677 17.3096 14.9854 17.2246L15.1876 17.163C16.1823 16.8242 16.9493 16.0102 17.2237 14.9863L17.2608 14.8232C17.3357 14.4343 17.3311 13.9743 17.3311 13.3339C17.3311 12.9667 17.0333 12.6689 16.6661 12.6689C16.299 12.6691 16.001 12.9668 16.001 13.3339Z"
        fill="currentColor"
      />
    </svg>
  );
}
