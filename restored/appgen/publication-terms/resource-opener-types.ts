// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~appgen-publication-terms-route~remote-conversati~oykv7gy7-B4ar2dlW.js
// Shared types for publication-terms resource opening.
export type HostConfigForResourceOpen = {
  id?: string;
  kind?: string | null;
};

export type ScopeWithState = {
  get?: <TValue>(state: unknown, key?: unknown) => TValue;
};

export type OpenFileRequest = {
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

export type FileContentKind =
  | "archive"
  | "audio"
  | "binary"
  | "image"
  | "pdf"
  | "text"
  | "video"
  | string;

export type ReadFileMetadata = {
  contentKind?: FileContentKind;
  isFile: boolean;
};

export type McpCapabilityFileViewer = {
  extensions?: readonly string[];
  hostId?: string;
  icon?: unknown;
  resourceUri?: string;
  server?: string;
  serverTools?: unknown[];
  title?: string;
  tool?: { name?: string } | unknown;
};

export type McpHostResourceReader = (resource: {
  _meta?: unknown;
  uri: string;
}) => Promise<Record<string, unknown> | null>;

export type McpFileViewerReadContents = (
  representation: "auto" | "blob" | "text",
) => Promise<Record<string, unknown>> | Record<string, unknown>;
