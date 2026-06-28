// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~appgen-publication-terms-route~remote-conversati~oykv7gy7-B4ar2dlW.js
// Workspace/file opening policy used by local conversation outputs and project sources.
import { once } from "../../runtime/commonjs-interop";
import {
  $N as initVscodeApiBridge,
  Aj as resolveWorkspacePathFromCwd,
  CS as initOpenFileOutcomeEventRuntime,
  DE as openFileOutcomeEvent,
  TS as logScopedProductEvent,
  UR as isAbsoluteOrWindowsPath,
  YN as sendHostRequest,
  a_ as initFileTypeDetectionHelpers,
  i_ as getPathExtension,
  kL as readFileContentSampleByteLimit,
  o_ as isMarkdownPreviewPath,
  r_ as getImagePreviewDisplayMode,
  Sj as getPathBasename,
  s_ as isPdfPreviewPath,
  wj as initArtifactPreviewRuntime,
  xL as isRemoteHostConfig,
  yR as isUrlLikePath,
} from "../../boundaries/current-ref/appg-thread-shared-producer";
import {
  getPublicationTermsSidePanelHandler,
  initPublicationTermsHandlerRegistryChunk,
} from "./handler-registry";

type HostConfigForResourceOpen = {
  id?: string;
  kind?: string | null;
};

type ScopeWithState = {
  get?: <TValue>(state: unknown, key?: unknown) => TValue;
};

type OpenFileRequest = {
  appPath?: string | null;
  column?: number | null;
  cwd?: string | null;
  hostId?: string | null;
  line?: number | null;
  openMode?: string | null;
  path: string;
  persistPreferredTargetPath?: string | null;
  target?: string | null;
};

export type WorkspaceResourceOpenRequest = OpenFileRequest & {
  artifactNavigationTarget?: unknown;
  browserSidebarEnabled?: boolean;
  endLine?: number | null;
  hostConfig?: HostConfigForResourceOpen | null;
  icon?: unknown;
  isPreview?: boolean;
  modifiedClick?: boolean;
  onBeforeOpenSidePanelTab?: (scope: unknown) => void;
  openFile?: (request: OpenFileRequest) => unknown;
  openInSidePanel?: boolean;
  scope?: ScopeWithState | unknown;
  title?: string | null;
};

type ReadFileMetadata = {
  contentKind?: FileContentKind;
  isFile: boolean;
};

export type McpCapabilityFileViewer = {
  extensions?: readonly string[];
  hostId?: string;
  icon?: unknown;
  server?: string;
  title?: string;
  tool?: { name?: string };
};

export type McpHostResourceReader = (resource: {
  _meta?: unknown;
  uri: string;
}) => Promise<Record<string, unknown> | null>;

type McpFileViewerReadContents = (
  representation: "auto" | "blob" | "text",
) => Promise<Record<string, unknown>> | Record<string, unknown>;

type FileContentKind =
  | "archive"
  | "audio"
  | "binary"
  | "image"
  | "pdf"
  | "text"
  | "video"
  | string;

const READ_FILE_SAMPLE_MAX_FILE_BYTES = 10 * 1024 * 1024;

const ARTIFACT_IMPORT_KIND_BY_EXTENSION = new Map([
  ["csv", "csv"],
  ["docx", "docx"],
  ["ipynb", "ipynb"],
  ["pdf", "pdf"],
  ["pptx", "pptx"],
  ["tex", "tex"],
  ["tsv", "tsv"],
  ["xlsm", "xlsx"],
  ["xlsx", "xlsx"],
]);

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

export function openWorkspaceResource({
  scope,
  appPath,
  artifactNavigationTarget,
  browserSidebarEnabled = false,
  column,
  cwd,
  endLine,
  hostConfig,
  hostId,
  icon,
  isPreview,
  line,
  modifiedClick = false,
  onBeforeOpenSidePanelTab,
  openFile = sendOpenFileRequest,
  openInSidePanel = false,
  openMode,
  path,
  persistPreferredTargetPath,
  target,
  title,
}: WorkspaceResourceOpenRequest): void {
  const openFileRequest: OpenFileRequest = {
    path,
    cwd,
    target,
    appPath,
    line,
    column,
    openMode,
    persistPreferredTargetPath,
    hostId,
  };

  if (
    target != null ||
    openMode === "workspace" ||
    persistPreferredTargetPath != null
  ) {
    openFile(openFileRequest);
    return;
  }

  if (
    !modifiedClick &&
    shouldOpenFileUrlThroughWorkspace({
      browserSidebarEnabled,
      hostConfig,
      path,
    })
  ) {
    openFile({ path, cwd, hostId });
    return;
  }

  if (scope != null && openInSidePanel) {
    const openSidePanel = getPublicationTermsSidePanelHandler();
    if (openSidePanel == null) {
      openFile(openFileRequest);
      return;
    }

    const absolutePath =
      cwd == null ? path : resolveWorkspacePathFromCwd(cwd, path);
    const localHostConfig =
      hostConfig != null && !isRemoteHostConfig(hostConfig) ? hostConfig : null;
    const hasMcpCapabilityFileViewer =
      line == null &&
      endLine == null &&
      getMatchingMcpCapabilityFileViewer(scope, absolutePath, hostId) != null;
    const openSidePanelTarget = () => {
      onBeforeOpenSidePanelTab?.(scope);
      return openSidePanel(scope, absolutePath, {
        artifactNavigationTarget,
        hostId: hostId ?? undefined,
        line,
        endLine,
        icon,
        isPreview,
        title,
      });
    };
    const openForContentKind = (contentKind?: FileContentKind) => {
      if (
        shouldUseExternalFileManager({
          contentKind,
          hasMcpCapabilityFileViewer,
          hostConfig,
          modifiedClick,
          path,
        })
      ) {
        logOpenOutcome(scope, {
          contentKind,
          hasMcpCapabilityFileViewer,
          hostConfig,
          modifiedClick,
          path,
          windowType: "electron",
        });
        openFile({ ...openFileRequest, target: "fileManager" });
        return;
      }

      logOpenOutcome(scope, {
        contentKind,
        hasMcpCapabilityFileViewer,
        hostConfig,
        modifiedClick,
        openedSidePanelTarget: openSidePanelTarget(),
        path,
        windowType: "electron",
      });
    };

    if (
      localHostConfig != null &&
      line == null &&
      column == null &&
      endLine == null &&
      !isUrlLikePath(path) &&
      isAbsoluteOrWindowsPath(absolutePath)
    ) {
      void readFileMetadata({
        hostId: hostId ?? localHostConfig.id,
        path: absolutePath,
      })
        .then((metadata) => {
          if (metadata.isFile) {
            openForContentKind(metadata.contentKind);
            return;
          }
          openFile({ ...openFileRequest, target: "fileManager" });
        })
        .catch(() => {
          openForContentKind();
        });
      return;
    }

    openForContentKind();
    return;
  }

  openFile(openFileRequest);
}

function sendOpenFileRequest(params: OpenFileRequest) {
  return sendHostRequest("open-file", { params });
}

function shouldOpenFileUrlThroughWorkspace({
  browserSidebarEnabled,
  hostConfig,
  path,
}: {
  browserSidebarEnabled: boolean;
  hostConfig?: HostConfigForResourceOpen | null;
  path: string;
}) {
  return (
    browserSidebarEnabled &&
    hostConfig != null &&
    !isRemoteHostConfig(hostConfig) &&
    isUrlLikePath(path)
  );
}

function getMatchingMcpCapabilityFileViewer(
  scope: unknown,
  path: string,
  hostId: string | null | undefined,
) {
  const stateScope = scope as ScopeWithState;
  if (typeof stateScope.get !== "function") return null;

  try {
    const fileViewers = stateScope.get<unknown[] | null | undefined>(
      mcpCapabilityFileViewerState,
      hostId ?? "local",
    );
    return findMatchingMcpCapabilityFileViewer(path, fileViewers ?? []);
  } catch {
    return null;
  }
}

export function findMatchingMcpCapabilityFileViewer(
  path: string,
  fileViewers: readonly unknown[],
) {
  const normalizedPath = path.toLowerCase();
  let bestViewer: McpCapabilityFileViewer | null = null;
  let bestLength = 0;

  for (const fileViewer of fileViewers) {
    const extensions = getFileViewerExtensions(fileViewer);
    for (const extension of extensions) {
      const normalizedExtension = extension
        .trim()
        .replace(/^\.+/u, "")
        .toLowerCase();
      if (
        normalizedExtension.length > 0 &&
        normalizedPath.endsWith(`.${normalizedExtension}`) &&
        normalizedExtension.length > bestLength
      ) {
        bestViewer = fileViewer as McpCapabilityFileViewer;
        bestLength = normalizedExtension.length;
      }
    }
  }

  return bestViewer;
}

function getFileViewerExtensions(fileViewer: unknown) {
  if (fileViewer == null || typeof fileViewer !== "object") return [];
  const extensions = (fileViewer as { extensions?: unknown }).extensions;
  return Array.isArray(extensions)
    ? extensions.filter(
        (extension): extension is string => typeof extension === "string",
      )
    : [];
}

export function createFileViewerToolArguments(
  path: string,
  resourceUri: string,
) {
  return { file: { name: getPathBasename(path), resourceUri } };
}

export function createMcpFileViewerHostResource({
  fileViewer,
  path,
  readContents,
  resourceUri,
}: {
  fileViewer: McpCapabilityFileViewer;
  path: string;
  readContents: McpFileViewerReadContents;
  resourceUri: string;
}): McpHostResourceReader {
  return async (resource) => {
    if (!isGeneratedMcpResourceUri(resource.uri, resourceUri)) return null;
    return {
      extension: getFileViewerExtensionForPath(path, fileViewer),
      ...(await readContents(parseMcpResourceRepresentation(resource._meta))),
    };
  };
}

function parseMcpResourceRepresentation(
  meta: unknown,
): "auto" | "blob" | "text" {
  const representation =
    meta != null && typeof meta === "object"
      ? (meta as { "openai/resource"?: { representation?: unknown } })[
          "openai/resource"
        ]?.representation
      : undefined;
  if (representation == null) return "auto";
  if (representation === "blob" || representation === "text")
    return representation;
  throw Object.assign(Error("Invalid MCP resource read params"), {
    code: -32602,
  });
}

function isGeneratedMcpResourceUri(uri: string, resourceUri: string) {
  return (
    resourceUri.startsWith("codex-resource://") &&
    (uri === resourceUri || uri.startsWith(`${resourceUri}/`))
  );
}

function getFileViewerExtensionForPath(
  path: string,
  fileViewer: McpCapabilityFileViewer,
) {
  const normalizedPath = path.toLowerCase();
  return (
    getFileViewerExtensions(fileViewer)
      .map((extension) => extension.trim().replace(/^\.+/u, "").toLowerCase())
      .filter((extension) => normalizedPath.endsWith(`.${extension}`))
      .sort((left, right) => right.length - left.length)[0] ?? ""
  );
}

function readFileMetadata({
  hostId,
  path,
}: {
  hostId?: string | null;
  path: string;
}) {
  return sendHostRequest("read-file-metadata", {
    params: {
      contentSampleByteLimit: readFileContentSampleByteLimit,
      contentSampleMaxFileBytes: READ_FILE_SAMPLE_MAX_FILE_BYTES,
      hostId,
      path,
    },
  }) as Promise<ReadFileMetadata>;
}

function logOpenOutcome(
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

export function getArtifactImportPresentation(path: string) {
  const extension = getPathExtension(path);
  const importKind =
    extension == null
      ? null
      : (ARTIFACT_IMPORT_KIND_BY_EXTENSION.get(extension) ?? null);
  if (importKind == null) return null;

  switch (importKind) {
    case "csv":
    case "tsv":
    case "xlsx":
      return { artifactType: "spreadsheet", importKind };
    case "docx":
      return { artifactType: "document", importKind };
    case "ipynb":
      return { artifactType: "notebook", importKind };
    case "pdf":
    case "tex":
      return { artifactType: "pdf", importKind };
    case "pptx":
      return { artifactType: "slides", importKind };
  }
}

function getReviewPreviewKind(path: string, contentKind?: FileContentKind) {
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

function getUnsupportedPreviewType(
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

function isPreviewableInSidePanel(path: string, contentKind?: FileContentKind) {
  return (
    getReviewPreviewKind(path, contentKind) != null ||
    getUnsupportedPreviewType(path, contentKind) == null ||
    getArtifactImportPresentation(path) != null
  );
}

function shouldUseExternalFileManager({
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

function lookupMimeType(path: string) {
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

export const mcpCapabilityFileViewerState = Symbol.for(
  "codex.restored.mcp-capability-file-viewers",
);

export const initWorkspaceResourceOpenerChunk = once(() => {
  initOpenFileOutcomeEventRuntime();
  initArtifactPreviewRuntime();
  initVscodeApiBridge();
  initFileTypeDetectionHelpers();
  initPublicationTermsHandlerRegistryChunk();
});
