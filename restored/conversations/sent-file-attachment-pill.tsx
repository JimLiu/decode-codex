// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// File attachment pill shown on a sent user message in a local conversation,
// wrapping the base file pill with an open-in-editor click handler and a file
// reference hover card.
import {
  useAppStore,
  appScopeAtom,
  useHostRequest,
  openFileAtLine,
  getFileExtension,
  FileReferenceHoverCard,
} from "../boundaries/onboarding-commons-externals.facade";
import { FileAttachmentPill } from "../composer/user-message-attachment-pills";
import { stripAttachmentLineLabel } from "./strip-attachment-line-label";

export interface SentFileAttachment {
  label: string;
  path: string;
  fsPath?: string | null;
  startLine?: number | null;
  endLine?: number | null;
}

export interface SentFileAttachmentPillProps {
  attachment: SentFileAttachment;
  cwd: string | null;
  hostId: string | null;
}

export function SentFileAttachmentPill({
  attachment,
  cwd,
  hostId,
}: SentFileAttachmentPillProps) {
  const appStore = useAppStore(appScopeAtom);
  const openFileRequest = useHostRequest("open-file");
  const lineInfo = formatAttachmentLineRange(attachment);
  const filePath = attachment.fsPath || attachment.path;

  const handleClick = () => {
    if (!filePath) {
      return;
    }
    const startLine = attachment.startLine;
    openFileAtLine({
      path: filePath,
      line: startLine,
      column: startLine == null ? undefined : 1,
      cwd,
      hostId,
      openFile: openFileRequest.mutate,
      openInSidePanel: getFileExtension(filePath) === "pptx",
      scope: appStore,
    });
  };

  const pill = (
    <FileAttachmentPill
      filename={stripAttachmentLineLabel(attachment.label, lineInfo)}
      resourcePath={attachment.path}
      lineInfo={lineInfo}
      onClick={filePath ? handleClick : undefined}
    />
  );

  if (!filePath) {
    return pill;
  }

  return (
    <FileReferenceHoverCard
      cwd={cwd}
      endLine={attachment.endLine}
      hostId={hostId}
      line={attachment.startLine}
      path={filePath}
    >
      <span className="inline-flex max-w-full">{pill}</span>
    </FileReferenceHoverCard>
  );
}

function formatAttachmentLineRange(
  attachment: SentFileAttachment,
): string | undefined {
  if (attachment.startLine != null) {
    return attachment.endLine != null &&
      attachment.endLine !== attachment.startLine
      ? `${attachment.startLine}-${attachment.endLine}`
      : `${attachment.startLine}`;
  }
  return undefined;
}
