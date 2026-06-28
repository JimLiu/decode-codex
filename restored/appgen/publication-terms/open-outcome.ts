// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~appgen-publication-terms-route~remote-conversati~oykv7gy7-B4ar2dlW.js
// Artifact presentation and open-outcome analytics for publication-terms resources.
import {
  getImagePreviewDisplayMode,
  getPathExtension,
  isMarkdownPreviewPath,
  isPdfPreviewPath,
  isRemoteHostConfig,
  logScopedProductEvent,
  openFileOutcomeEvent,
} from "../../runtime/publication-terms-runtime";
import { getArtifactImportPresentation } from "./artifact-presentation";
import type {
  FileContentKind,
  HostConfigForResourceOpen,
} from "./resource-opener-types";

export const READ_FILE_SAMPLE_MAX_FILE_BYTES = 10 * 1024 * 1024;

const UNSUPPORTED_PREVIEW_TYPE_BY_EXTENSION = new Map([
  ["doc", "word-document"],
  ["docx", "word-document"],
  ["key", "keynote-deck"],
  ["numbers", "numbers-spreadsheet"],
  ["odp", "opendocument-presentation"],
  ["ods", "opendocument-spreadsheet"],
  ["odt", "opendocument-text"],
  ["pages", "pages-document"],
  ["ppt", "powerpoint-deck"],
  ["pptx", "powerpoint-deck"],
  ["rtf", "rich-text-document"],
  ["xls", "excel-spreadsheet"],
  ["xlsm", "excel-spreadsheet"],
  ["xlsx", "excel-spreadsheet"],
]);

export function logOpenOutcome(
  scope: unknown,
  {
    contentKind,
    hasMcpCapabilityFileViewer = false,
    hostConfig,
    modifiedClick,
    openedSidePanelTarget,
    path,
    windowType,
  }: {
    contentKind?: FileContentKind;
    hasMcpCapabilityFileViewer?: boolean;
    hostConfig?: HostConfigForResourceOpen | null;
    modifiedClick: boolean;
    openedSidePanelTarget?: string | null;
    path: string;
    windowType: "electron";
  },
) {
  try {
    const artifactPresentation = getArtifactImportPresentation(path);
    const reviewPreviewKind = getReviewPreviewKind(path, contentKind);
    const unsupportedPreviewType = getUnsupportedPreviewType(path, contentKind);

    logScopedProductEvent(scope, openFileOutcomeEvent, {
      artifactImportKind: artifactPresentation?.importKind ?? "none",
      artifactType: artifactPresentation?.artifactType ?? "none",
      extension: getPathExtension(path) ?? "none",
      hostKind: getHostKind(hostConfig),
      mimeType: lookupMimeType(path),
      modifiedClick,
      outcome: getOpenOutcome({
        artifactPresentationExists: artifactPresentation != null,
        hasMcpCapabilityFileViewer,
        hostConfig,
        modifiedClick,
        openedSidePanelTarget,
        path,
        reviewPreviewKind,
        contentKind,
        unsupportedPreviewType,
      }),
      reviewPreviewKind: reviewPreviewKind ?? "none",
      unsupportedPreviewType: unsupportedPreviewType ?? "none",
      windowType,
    });
  } catch {}
}

export function shouldUseExternalFileManager({
  contentKind,
  hasMcpCapabilityFileViewer,
  hostConfig,
  modifiedClick,
  path,
}: {
  contentKind?: FileContentKind;
  hasMcpCapabilityFileViewer: boolean;
  hostConfig?: HostConfigForResourceOpen | null;
  modifiedClick: boolean;
  path: string;
}) {
  return (
    hostConfig != null &&
    !isRemoteHostConfig(hostConfig) &&
    !modifiedClick &&
    !hasMcpCapabilityFileViewer &&
    !isPreviewableInSidePanel(path, contentKind)
  );
}

export function getReviewPreviewKind(
  path: string,
  contentKind?: FileContentKind,
) {
  return contentKind === "image"
    ? "image"
    : contentKind === "pdf"
      ? "pdf"
      : contentKind != null && contentKind !== "text"
        ? null
        : contentKind == null && getImagePreviewDisplayMode(path) !== "none"
          ? "image"
          : isPdbPath(path)
            ? "pdb"
            : isMarkdownPreviewPath(path)
              ? "markdown"
              : contentKind == null && isPdfPreviewPath(path)
                ? "pdf"
                : null;
}

export function getResourcePreviewParseMode(
  path: string,
  contentKind?: FileContentKind,
) {
  if (contentKind === "image" || contentKind === "pdf") return "always";
  if (contentKind != null && contentKind !== "text") return "none";

  const imagePreviewMode = getImagePreviewDisplayMode(path);
  if (contentKind == null && imagePreviewMode === "always") return "always";
  if (
    (contentKind == null && imagePreviewMode === "toggle") ||
    isMarkdownPreviewPath(path) ||
    isPdbPath(path)
  )
    return "toggle";
  return contentKind == null && isPdfPreviewPath(path) ? "always" : "none";
}

export function getUnsupportedPreviewType(
  path: string,
  contentKind?: FileContentKind,
) {
  if (contentKind === "image" || contentKind === "pdf") return null;

  const extension = getPathExtension(path);
  const unsupportedType =
    extension == null
      ? null
      : (UNSUPPORTED_PREVIEW_TYPE_BY_EXTENSION.get(extension) ?? null);
  if (
    unsupportedType != null &&
    (contentKind == null ||
      contentKind === "archive" ||
      contentKind === "binary" ||
      (contentKind === "text" && extension === "rtf"))
  )
    return unsupportedType;

  if (contentKind == null) return null;
  switch (contentKind) {
    case "archive":
    case "audio":
    case "binary":
    case "video":
      return contentKind;
    case "text":
      return null;
  }

  return null;
}

export function isPreviewableInSidePanel(
  path: string,
  contentKind?: FileContentKind,
) {
  return (
    getReviewPreviewKind(path, contentKind) != null ||
    getUnsupportedPreviewType(path, contentKind) == null ||
    getArtifactImportPresentation(path) != null
  );
}

function getHostKind(hostConfig?: HostConfigForResourceOpen | null) {
  return hostConfig == null
    ? "unknown"
    : isRemoteHostConfig(hostConfig)
      ? "remote"
      : "local";
}

function getOpenOutcome({
  artifactPresentationExists,
  hasMcpCapabilityFileViewer,
  hostConfig,
  modifiedClick,
  openedSidePanelTarget,
  path,
  reviewPreviewKind,
  contentKind,
  unsupportedPreviewType,
}: {
  artifactPresentationExists: boolean;
  hasMcpCapabilityFileViewer: boolean;
  hostConfig?: HostConfigForResourceOpen | null;
  modifiedClick: boolean;
  openedSidePanelTarget?: string | null;
  path: string;
  reviewPreviewKind: string | null;
  contentKind?: FileContentKind;
  unsupportedPreviewType: string | null;
}) {
  return shouldUseExternalFileManager({
    contentKind,
    hasMcpCapabilityFileViewer,
    hostConfig,
    modifiedClick,
    path,
  })
    ? "external_file_manager"
    : openedSidePanelTarget === "mcpCapabilityFileViewer"
      ? "review_rich_preview"
      : openedSidePanelTarget === "artifact"
        ? "artifact_renderer"
        : openedSidePanelTarget === "textFileEditor"
          ? "plain_text"
          : hasMcpCapabilityFileViewer && openedSidePanelTarget == null
            ? "review_rich_preview"
            : artifactPresentationExists && openedSidePanelTarget == null
              ? "artifact_renderer"
              : unsupportedPreviewType == null
                ? reviewPreviewKind == null
                  ? "plain_text"
                  : "review_rich_preview"
                : "unsupported_message";
}

function isPdbPath(path: string) {
  const normalizedPath = path.toLowerCase();
  const lastSlashIndex = Math.max(
    normalizedPath.lastIndexOf("/"),
    normalizedPath.lastIndexOf("\\"),
  );
  const basename =
    lastSlashIndex >= 0
      ? normalizedPath.slice(lastSlashIndex + 1)
      : normalizedPath;
  const dotIndex = basename.lastIndexOf(".");
  return dotIndex > 0 && basename.slice(dotIndex + 1) === "pdb";
}

export function lookupMimeType(path: string) {
  const extension = getPathExtension(path);
  if (extension == null) return "unknown";
  switch (extension) {
    case "css":
      return "text/css";
    case "csv":
      return "text/csv";
    case "gif":
      return "image/gif";
    case "html":
    case "htm":
      return "text/html";
    case "jpeg":
    case "jpg":
      return "image/jpeg";
    case "js":
    case "mjs":
      return "text/javascript";
    case "json":
      return "application/json";
    case "md":
    case "markdown":
      return "text/markdown";
    case "pdf":
      return "application/pdf";
    case "png":
      return "image/png";
    case "svg":
      return "image/svg+xml";
    case "ts":
      return "text/typescript";
    case "txt":
      return "text/plain";
    case "webp":
      return "image/webp";
    default:
      return "unknown";
  }
}

export function initReadFileMetadataLimitsChunk(): void {}

export function initUnsupportedPreviewTypeChunk(): void {}
