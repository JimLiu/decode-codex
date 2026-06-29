// Restored from ref/.vite/build/workspace-root-drop-handler-DbDnwAf_.js
// Typed open boundary for the mixed workspace-root, updater, protocol, and Sentry chunk.
import { createHash, randomUUID } from "node:crypto";
import {
  createReadStream,
  existsSync,
  mkdirSync,
  readFileSync,
  renameSync,
  rmSync,
  type Stats,
  writeFileSync,
} from "node:fs";
import * as fsPromises from "node:fs/promises";
import { createRequire } from "node:module";
import * as path from "node:path";
import { Readable } from "node:stream";
import {
  app,
  dialog,
  ipcMain,
  nativeTheme,
  net,
  protocol,
  session,
} from "electron";
import * as sharedRuntime from "../boundaries/shared-node-runtime.facade";
import {
  BuildFlavor,
  createFileBasedLogger,
  readPackageMetadataField,
  type BuildFlavorValue,
  type LoggerSink,
  type NonFatalReporter,
} from "../logging/file-based-logger";

type KeyValueStore = {
  get(key: string): unknown;
  getStored?(key: string): unknown;
  set(key: string, value: unknown): void | Promise<void>;
  update?(
    key: string,
    updater: (value: unknown | null) => unknown | undefined,
  ): void | Promise<void>;
  delete?(key: string): void | Promise<void>;
  flush?(): Promise<void>;
  getStateFilePath?(): string;
};
type DesktopSettingHostStorage =
  | { kind: "configuration"; key: string }
  | { kind: "global-state"; key: string }
  | { kind: "persisted-atom"; key: string };
type DesktopSettingDefinition = {
  key: string;
  default?: unknown;
  hostStorage: DesktopSettingHostStorage;
  schema?: unknown;
};
type SettingsConfigClient = {
  readConfig(): Promise<unknown> | unknown;
  batchWriteConfigValues(request: {
    edits: Array<{
      keyPath: string;
      mergeStrategy: "replace";
      value: unknown;
    }>;
  }): Promise<void> | void;
};
type SettingsStoreBoundary = {
  getStateFilePath(): string;
  getDesktopConfig(): Record<string, unknown>;
  get(key: string): unknown;
  getEffective(key: string): unknown;
  set(key: string, value: unknown): void;
  flush(): Promise<void>;
  initialize(client: SettingsConfigClient): Promise<void>;
};
type UpdateLifecycleState =
  | "idle"
  | "checking"
  | "downloading"
  | "ready"
  | "installing";
type RelaunchNotice = {
  deadlineAtMs: number;
  dismissable: boolean;
  reportedAtMs: number;
};
type InstallUpdatesRequest = { quitImmediately?: boolean } | undefined;
type SparkleBridgeHandlers = {
  onDownloadProgressChanged?: (percent: number | null) => void;
  onInstallProgressChanged?: (percent: number | null) => void;
  onInstallUpdatesRequested?: (request?: InstallUpdatesRequest) => void;
  onRelaunchNoticeChanged?: (notice: RelaunchNotice | null) => void;
  onUpdateLifecycleStateChanged?: (state: UpdateLifecycleState) => void;
  onUpdateReadyChanged?: (isReady: boolean) => void;
  isTrustedIpcEvent?: (event: Electron.IpcMainInvokeEvent) => boolean;
};
type DesktopUpdater = {
  initialize?(): Promise<void>;
  hasUpdater?(): boolean;
  getUnavailableReason?(): string | null;
  getIsUpdateReady?(): boolean;
  checkForUpdates(): Promise<void>;
  installUpdatesIfAvailable(): Promise<void>;
};
type DesktopUpdateManager = {
  initialize(): Promise<void>;
  hasUpdater(): boolean;
  getUnavailableReason(): string | null;
  getIsUpdateReady(): boolean;
  getInstallProgressPercent(): number | null;
  getDownloadProgressPercent(): number | null;
  getUpdateLifecycleState(): UpdateLifecycleState;
  getRelaunchNotice(): RelaunchNotice | null;
  showRelaunchNoticeForDebug(): void;
  checkForUpdates(): Promise<void>;
  installUpdatesIfAvailable(): Promise<boolean>;
  setAutomaticBackgroundDownloadsEnabled(enabled: boolean): void;
};
type DesktopUpdateManagerOptions = {
  buildFlavor: BuildFlavorValue;
  enableUpdater: boolean;
  getInternalUpdateCdnRequestHeaders?: (
    feedUrl: string,
  ) => Promise<Record<string, string> | false> | Record<string, string> | false;
  isPackaged: boolean;
  isTrustedIpcEvent(event: Electron.IpcMainInvokeEvent): boolean;
  onDownloadProgressChanged?(percent: number | null): void;
  onInstallProgressChanged?(percent: number | null): void;
  onInstallUpdatesRequested?(request?: InstallUpdatesRequest): void;
  onRelaunchNoticeChanged?(notice: RelaunchNotice | null): void;
  onUpdateLifecycleStateChanged?(state: UpdateLifecycleState): void;
  onUpdateReadyChanged?(isReady: boolean): void;
  useInternalUpdateCdn: boolean;
};
type WindowsNativeUpdaterAddon = {
  activateStagedPackage(
    packagePath: string,
    onProgress: (percent: number) => void,
  ): Promise<void> | void;
  getCurrentPackageFamily(): string;
  stagePackage(packagePath: string): Promise<void> | void;
  trySilentDownloadAndInstallStoreUpdates?(
    onProgress: (percent: number, state: string) => void,
  ): Promise<WindowsStoreUpdateResult>;
  trySilentDownloadStoreUpdates?(): Promise<WindowsStoreUpdateResult>;
};
type WindowsStoreUpdateResult = {
  canSilentlyDownload: boolean;
  completed: boolean;
  hasUpdate: boolean;
  overallState: string;
};
type NativeIntl = {
  formatMessage(message: {
    messageId: string;
    defaultMessage: string;
    values?: Record<string, unknown>;
  }): string;
};
type NativeIntlLoader = {
  load(repoRoot: string): Promise<NativeIntl>;
  createDefault(): NativeIntl;
};
type DesktopRuntimeState = {
  startedAtMs: number;
  buildFlavor: BuildFlavorValue;
  desktopSentry: {
    captureException(error: unknown, context?: unknown): void;
  };
  sparkleManager: DesktopUpdateManager;
  queueSecondInstanceArgs(args: string[]): void;
  setSecondInstanceArgsHandler?(handler: (args: string[]) => void): void;
  setSparkleBridgeHandlers?(handlers: SparkleBridgeHandlers): void;
};
type WorkspaceRootState = {
  activeRoots: string[];
  roots: string[];
  labels: Record<string, string>;
};
type StructuredLogDetails = {
  safe?: Record<string, unknown>;
  sensitive?: Record<string, unknown>;
};
type DesktopStructuredLogger = {
  log(
    level: string,
    message: string,
    safeDetails?: Record<string, unknown>,
  ): void;
};
type StateDatabaseRecoveryOptions = {
  databasePath: string | ((error: unknown) => string | null);
  onBackfillWait?: () => void | Promise<void>;
  open(): void | Promise<void>;
  shouldHandleError?: (error: unknown) => boolean;
};
type BrowserWindowLike = {
  isDestroyed(): boolean;
};
type DeepLinkRoute =
  | { kind: "applyCodexAppConfig" }
  | { kind: "automations" }
  | {
      kind: "connectorOAuthCallback";
      fullRedirectUrl: string;
      returnTo: string | null;
    }
  | { kind: "launch" }
  | { kind: "localConversation"; [key: string]: unknown }
  | {
      kind: "localPluginDetail";
      hostId: string | null;
      marketplacePath: string;
      pluginName: string;
      openShareDialog: boolean;
    }
  | {
      kind: "newThread";
      originUrl?: string | null;
      path?: string | null;
      prompt?: string;
    }
  | {
      kind: "petInstall";
      description: string | null;
      imageUrl: string;
      name: string;
    }
  | {
      kind: "pluginDetail";
      hostId: string | null;
      pluginId: unknown;
      source: unknown;
    }
  | {
      kind: "pluginInstall";
      marketplaceName: string | undefined;
      pluginName: string;
    }
  | { kind: "settings"; section?: string; search?: string }
  | { kind: "skills" };
type DeepLinkCoordinatorOptions = {
  app: typeof app;
  isMacOS: boolean;
  ensurePrimaryWindowVisible(): Promise<unknown>;
  navigateToRoute(window: unknown, route: DeepLinkRoute): Promise<void>;
  initialArgv: string[];
  errorReporter: {
    reportNonFatal(error: Error, context: Record<string, unknown>): void;
  };
};
type DeepLinkCoordinator = {
  registerProtocolClient(): void;
  queueProcessArgs(args: string[]): boolean;
  flushPendingDeepLinks(): Promise<void>;
  queueCodexDeepLinkUrl(url: string, hostId?: string | null): boolean;
};
type RecoveryErrorPair = {
  originalError: unknown;
  recoveryError: unknown;
};
type OwlFeatureNameState = {
  enabledFeatureNames: string[];
  disabledFeatureNames: string[];
};
type OwlFeatureSettingsState = {
  activeFeatureNames: string[];
  activeDisabledFeatureNames: string[];
  pendingFeatureNames: string[];
  pendingDisabledFeatureNames: string[];
  restartRequired: boolean;
};
type OwlFeatureNativeBinding = {
  isOwlFeatureEnabled(name: string): boolean;
};
type ProcessWithLinkedBinding = NodeJS.Process & {
  _linkedBinding?: (name: string) => unknown;
};

const requireFromWorkspaceBoundary = createRequire(import.meta.url);
const loggerFactory = sharedRuntime.ni as (scope: string) => () => {
  error(message: string, details?: unknown): void;
  debug?(message: string, details?: unknown): void;
  info?(message: string, details?: unknown): void;
  warning(message: string, details?: unknown): void;
  log?(level: string, message: string, details?: unknown): void;
};
const runtimeLogger = loggerFactory("workspace-root-boundary");
const sparkleLogger = loggerFactory("sparkle");
const windowsUpdaterLogger = loggerFactory("windows-updater");
const windowsStoreUpdaterLogger = loggerFactory("windows-store-updater");
function logScopedMessage(
  logger: ReturnType<ReturnType<typeof loggerFactory>>,
  level: string,
  message: string,
  details?: unknown,
): void {
  if (typeof logger.log === "function") {
    logger.log(level, message, details);
    return;
  }
  if (level === "error") {
    logger.error(message, details);
    return;
  }
  if (level === "warning") {
    logger.warning(message, details);
    return;
  }
  if (typeof logger.info === "function") {
    logger.info(message, details);
    return;
  }
  logger.debug?.(message, details);
}
const parseAppBrand = sharedRuntime.xc as (
  value: string | undefined,
) => unknown;
const defaultBrand = (sharedRuntime.yc as { Codex?: unknown }).Codex;
const brandDisplayName = sharedRuntime.bc as (brand: unknown) => string;

const AVATAR_OVERLAY_OPEN_CHANNEL = "electron-avatar-overlay-open";
const LOCAL_REMOTE_CONTROL_INSTALLATION_ID_KEY =
  "electron-local-remote-control-installation-id";
const OPENAI_MCP_FORM_ELICITATIONS_ENABLED_KEY =
  "electron-openai-mcp-form-elicitations-enabled";
const PERSISTED_ATOM_STATE_KEY = "electron-persisted-atom-state";
const CHROME_EXTENSION_SYNC_MANAGED_PLUGIN_IDS_KEY =
  "electron-chrome-extension-sync-managed-plugin-ids";
const INTEGRITY_STATE_ENVELOPE_KEY = "electron-integrity-state-envelope";
const LOCAL_REMOTE_CONTROL_ENVIRONMENT_ID_KEY =
  "electron-local-remote-control-environment-id";
const REMOTE_CONTROL_CLIENT_ENROLLMENTS_KEY =
  "electron-remote-control-client-enrollments";
const BROWSER_DOWNLOAD_HISTORY_KEY = "electron-browser-download-history";
const AVATAR_OVERLAY_BOUNDS_KEY = "electron-avatar-overlay-bounds";
const WORKTREE_CLEANUP_BUFFER_START_MS_KEY =
  "electron-worktree-cleanup-buffer-start-ms";
const APP_PROTOCOL_ORIGIN = "app://-";
const APP_FILE_ORIGIN = "app://fs";
const APP_FILE_PATH_PREFIX = "/@fs";
const APP_INDEX_FILE = "index.html";
const OPEN_PROJECT_ARG = "--open-project";
const OWL_FEATURE_BOOTSTRAP_CACHE_FILE = "owl-feature-bootstrap-cache.json";
const OWL_FEATURES_LINKED_BINDING_NAME = "electron_common_owl_features";
const SETTINGS_SECTIONS = [
  "browser-use",
  "computer-use/google-chrome",
  "connections",
  "connections/computer",
  "connections/devices",
  "connections/ssh",
  "connections/ssh/add",
];
const PLUGIN_INSTALL_QUERY_KEYS = new Set(["marketplace"]);
const LOCAL_PLUGIN_DETAIL_QUERY_KEYS = new Set(["marketplacePath", "mode"]);
const SSH_ADD_QUERY_KEYS = new Set(["name"]);
const PET_INSTALL_QUERY_KEYS = new Set(["name", "description", "imageUrl"]);
const STATE_DATABASE_DIALOG_LABELS = {
  retry: "Retry",
  recover: "Back Up and Rebuild",
  quit: "Quit",
} as const;
const STATE_DATABASE_BACKUP_DIRECTORY = "db-backups";

const codexAppSessionId = randomUUID();
const desktopReleaseMetadata = {
  codexAppSessionId,
  buildFlavor: BuildFlavor.resolve(),
  buildNumber:
    process.env.CODEX_BUILD_NUMBER?.trim() ||
    readPackageMetadataField("codexBuildNumber"),
  appVersion: app.getVersion(),
};

let configuredNativeIntl: {
  repoRoot: string | null;
  nativeIntl: NativeIntl;
} | null = null;
let desktopRuntimeState: DesktopRuntimeState | null = null;
let queuedOpenPaths: string[] = [];
let openPathsHandler: ((paths: string[]) => void) | null = null;
let openFileListener: ((event: Event, filePath: string) => void) | null = null;
let owlBootstrapFeatureNames: string[] = [];

async function configureNativeIntl(repoRoot: string): Promise<void> {
  if (configuredNativeIntl?.repoRoot === repoRoot) return;
  try {
    configuredNativeIntl = {
      repoRoot,
      nativeIntl: await NativeIntlMessages.load(repoRoot),
    };
  } catch {
    configuredNativeIntl = {
      repoRoot: null,
      nativeIntl: NativeIntlMessages.createDefault(),
    };
  }
}

function getNativeIntl(): NativeIntl {
  if (configuredNativeIntl == null) {
    throw Error("NativeIntl has not been configured.");
  }
  return configuredNativeIntl.nativeIntl;
}

class NativeIntlMessages {
  constructor(readonly messages: Record<string, string>) {}

  static async load(repoRoot: string): Promise<NativeIntlMessages> {
    const locale = app.getLocale().replace(/_/g, "-");
    const [language] = locale.split("-");
    const localeRoot = app.isPackaged
      ? path.join(app.getAppPath(), "native-menu-locales")
      : path.join(repoRoot, "webview", "src", "locales");
    const candidates = [
      path.join(localeRoot, `${locale}.json`),
      language ? path.join(localeRoot, `${language}.json`) : null,
    ].filter((item): item is string => item != null);

    for (const candidate of candidates) {
      try {
        const fs = await import("node:fs/promises");
        return new NativeIntlMessages(
          JSON.parse(await fs.readFile(candidate, "utf8")),
        );
      } catch {}
    }

    return NativeIntlMessages.createDefault();
  }

  static createDefault(): NativeIntlMessages {
    return new NativeIntlMessages({});
  }

  formatMessage({
    defaultMessage,
    messageId,
    values = {},
  }: {
    messageId: string;
    defaultMessage: string;
    values?: Record<string, unknown>;
  }): string {
    const template = this.messages[messageId] ?? defaultMessage;
    return template.replace(/\{([^}]+)\}/g, (match, key: string) =>
      values[key] == null ? match : String(values[key]),
    );
  }
}

function getNativeIntlLoader(): NativeIntlLoader {
  return NativeIntlMessages;
}

function getRuntimeAppBrand(): unknown {
  return (
    readPackageMetadataField("codexAppBrand", { parse: parseAppBrand }) ??
    parseAppBrand(process.env.CODEX_APP_BRAND) ??
    defaultBrand
  );
}

function getRuntimeAppName(): string {
  return brandDisplayName(getRuntimeAppBrand());
}

function webviewRootFromModuleDir(moduleDir: string): string {
  return path.join(moduleDir, "..", "..", "webview");
}

function createWebviewAppUrl(
  initialRoute?: string | null,
  options?: { mcpAppSandboxDevtools?: boolean },
): string {
  const url = new URL(`${APP_PROTOCOL_ORIGIN}/${APP_INDEX_FILE}`);
  if (initialRoute) url.searchParams.set("initialRoute", initialRoute);
  if (options?.mcpAppSandboxDevtools) {
    url.searchParams.set("mcpAppSandboxDevtools", "1");
  }
  return url.toString();
}

function filePathFromAppFileUrl(value: string): string | null {
  try {
    const url = new URL(value);
    if (
      url.protocol !== "app:" ||
      url.host !== "fs" ||
      !url.pathname.startsWith(APP_FILE_PATH_PREFIX)
    ) {
      return null;
    }
    return decodeAppFilePathname(url.pathname);
  } catch {
    return null;
  }
}

function registerAppProtocolHandler(webviewRoot: string): void {
  registerAppSchemePrivileges();
  session.defaultSession.webRequest.onBeforeRequest(
    { urls: [`${APP_FILE_ORIGIN}/*`] },
    (details, callback) => {
      callback({ cancel: !isTrustedAppFileRequest(details) });
    },
  );
  protocol.handle("app", async (request) => {
    const filePath = resolveAppProtocolPath(request.url, webviewRoot);
    if (!filePath) return notFoundResponse();
    return isVideoFile(filePath)
      ? createVideoFileResponse(request, filePath)
      : createStaticFileResponse(filePath);
  });
}

function registerAppSchemePrivileges(): void {
  protocol.registerSchemesAsPrivileged([
    {
      scheme: "app",
      privileges: {
        standard: true,
        secure: true,
        stream: true,
        supportFetchAPI: true,
      },
    },
  ]);
}

function resolveAppProtocolPath(
  requestUrl: string,
  webviewRoot: string,
): string | null {
  const rawPath = extractAppUrlPath(requestUrl);
  if (!rawPath) return null;
  try {
    if (hasPathTraversal(normalizeBundlePath(decodeURIComponent(rawPath)))) {
      return null;
    }
  } catch {
    return null;
  }

  const url = new URL(requestUrl);
  if (url.protocol !== "app:") return null;
  if (url.pathname.startsWith(APP_FILE_PATH_PREFIX)) {
    return url.host === "fs" ? decodeAppFilePathname(url.pathname) : null;
  }
  if (url.host && url.host !== "-") return null;

  const normalizedPath = normalizeBundlePath(url.pathname || "/");
  const relativePath = normalizedPath.startsWith("/")
    ? normalizedPath.slice(1)
    : normalizedPath;
  const normalizedRelativePath = path.posix.normalize(relativePath);
  if (normalizedRelativePath === "." || normalizedRelativePath === "") {
    return path.join(webviewRoot, APP_INDEX_FILE);
  }
  if (
    normalizedRelativePath.startsWith("..") ||
    normalizedRelativePath.includes("/..")
  ) {
    return null;
  }

  const filePath = path.join(webviewRoot, ...normalizedRelativePath.split("/"));
  const relativeToRoot = path.relative(webviewRoot, filePath);
  return relativeToRoot.startsWith("..") || path.isAbsolute(relativeToRoot)
    ? null
    : filePath;
}

function extractAppUrlPath(value: string): string | null {
  if (!value.startsWith("app://")) return null;
  const withoutProtocol = value.slice("app://".length);
  const slashIndex = withoutProtocol.indexOf("/");
  return (
    (slashIndex >= 0 ? withoutProtocol.slice(slashIndex) : "/")
      .split("?")[0]
      ?.split("#")[0] ?? null
  );
}

function hasPathTraversal(value: string): boolean {
  return value.split("/").some((segment) => {
    return segment === ".." || /^\.\.[. ]+$/.test(segment);
  });
}

function normalizeBundlePath(value: string): string {
  const normalize = sharedRuntime.Ts as
    | ((pathValue: string) => string)
    | undefined;
  return typeof normalize === "function" ? normalize(value) : value;
}

function toNativeFilePath(value: string): string {
  const convert = sharedRuntime.Es as
    | ((pathValue: string) => string)
    | undefined;
  return typeof convert === "function" ? convert(value) : value;
}

function isSafeAbsoluteFilePath(value: string): boolean {
  const isSafe = sharedRuntime.Ss as
    | ((pathValue: string) => boolean)
    | undefined;
  if (typeof isSafe === "function") return isSafe(value);
  return path.posix.isAbsolute(value) || path.win32.isAbsolute(value);
}

function decodeAppFilePathname(pathname: string): string | null {
  const encodedPath = pathname.slice(APP_FILE_PATH_PREFIX.length);
  if (!encodedPath) return null;
  let decodedPath: string;
  try {
    decodedPath = decodeURIComponent(encodedPath);
  } catch {
    return null;
  }
  const normalizedPath = normalizeBundlePath(decodedPath);
  if (!isSafeAbsoluteFilePath(normalizedPath)) return null;
  const filePath = path.resolve(toNativeFilePath(normalizedPath));
  return isImageOrVideoFile(filePath) ? filePath : null;
}

async function createStaticFileResponse(filePath: string): Promise<Response> {
  let stats;
  try {
    stats = await fsPromises.stat(filePath);
  } catch {
    return notFoundResponse();
  }
  if (!stats.isFile()) return notFoundResponse();
  return new Response(readableStreamBody(createReadStream(filePath)), {
    headers: {
      "Content-Length": String(stats.size),
      "Content-Type": mimeTypeForPath(filePath),
    },
  });
}

function notFoundResponse(): Response {
  return new Response(null, {
    status: 404,
    statusText: "Not Found",
  });
}

function isVideoFile(filePath: string): boolean {
  return mimeTypeForPath(filePath).startsWith("video/");
}

function isImageOrVideoFile(filePath: string): boolean {
  const mimeType = mimeTypeForPath(filePath);
  return mimeType.startsWith("image/") || mimeType.startsWith("video/");
}

async function createVideoFileResponse(
  request: Request,
  filePath: string,
): Promise<Response> {
  let stats;
  try {
    stats = await fsPromises.stat(filePath);
  } catch {
    return notFoundResponse();
  }
  const headers = new Headers({
    "Accept-Ranges": "bytes",
    "Content-Type": mimeTypeForPath(filePath),
  });
  const rangeHeader = request.headers.get("range");
  if (!rangeHeader) {
    headers.set("Content-Length", String(stats.size));
    return new Response(readableStreamBody(createReadStream(filePath)), {
      headers,
    });
  }

  const range = parseHttpByteRange(rangeHeader, stats.size);
  if (!range) {
    headers.set("Content-Range", `bytes */${stats.size}`);
    return new Response(null, {
      status: 416,
      statusText: "Range Not Satisfiable",
      headers,
    });
  }

  headers.set("Content-Length", String(range.end - range.start + 1));
  headers.set(
    "Content-Range",
    `bytes ${range.start}-${range.end}/${stats.size}`,
  );
  return new Response(readableStreamBody(createReadStream(filePath, range)), {
    status: 206,
    statusText: "Partial Content",
    headers,
  });
}

function parseHttpByteRange(
  headerValue: string,
  fileSize: number,
): { start: number; end: number } | null {
  const match = /^bytes=(\d*)-(\d*)$/.exec(headerValue);
  if (!match) return null;
  const [, startText, endText] = match;
  if (startText === "" && endText === "") return null;
  if (startText === "") {
    const suffixLength = Number(endText);
    return suffixLength <= 0 || fileSize === 0
      ? null
      : { start: Math.max(fileSize - suffixLength, 0), end: fileSize - 1 };
  }
  const start = Number(startText);
  const requestedEnd = endText === "" ? fileSize - 1 : Number(endText);
  return start < 0 || requestedEnd < start || start >= fileSize
    ? null
    : { start, end: Math.min(requestedEnd, fileSize - 1) };
}

function readableStreamBody(
  stream: ReturnType<typeof createReadStream>,
): BodyInit {
  return Readable.toWeb(stream) as unknown as BodyInit;
}

function isTrustedAppFileRequest(details: {
  frame?: { url?: string | null } | null;
}): boolean {
  const frameOrigin = originFromUrl(details.frame?.url ?? null);
  return (
    frameOrigin === APP_PROTOCOL_ORIGIN || frameOrigin === rendererDevOrigin()
  );
}

function originFromUrl(value: string | null): string | null {
  if (value == null) return null;
  try {
    const url = new URL(value);
    return url.protocol === "app:" ? `app://${url.host}` : url.origin;
  } catch {
    return null;
  }
}

function rendererDevOrigin(): string | null {
  if (app.isPackaged) return null;
  const value = process.env.ELECTRON_RENDERER_URL;
  if (value == null || value.trim().length === 0) return null;
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:"
      ? url.origin
      : null;
  } catch {
    return null;
  }
}

function mimeTypeForPath(filePath: string): string {
  switch (path.extname(filePath).toLowerCase()) {
    case ".avif":
      return "image/avif";
    case ".css":
      return "text/css; charset=utf-8";
    case ".gif":
      return "image/gif";
    case ".html":
      return "text/html; charset=utf-8";
    case ".ico":
      return "image/x-icon";
    case ".jpeg":
    case ".jpg":
      return "image/jpeg";
    case ".js":
    case ".mjs":
      return "text/javascript; charset=utf-8";
    case ".json":
    case ".map":
      return "application/json; charset=utf-8";
    case ".mp4":
      return "video/mp4";
    case ".ogg":
    case ".ogv":
      return "video/ogg";
    case ".png":
      return "image/png";
    case ".svg":
      return "image/svg+xml; charset=utf-8";
    case ".txt":
      return "text/plain; charset=utf-8";
    case ".wasm":
      return "application/wasm";
    case ".webm":
      return "video/webm";
    case ".webp":
      return "image/webp";
    case ".woff":
      return "font/woff";
    case ".woff2":
      return "font/woff2";
    default:
      return "application/octet-stream";
  }
}

function applyOwlFeatureBootstrapCache(featureNames: string[] = []): void {
  owlBootstrapFeatureNames = normalizeOwlFeatureNames(featureNames);
  const pendingState = getPendingOwlFeatureState();
  const enabledFromCommandLine = readOwlCommandLineSwitch(
    "enable-features",
  ).filter(
    (featureName) => !pendingState.disabledFeatureNames.includes(featureName),
  );
  const disabledFromCommandLine = readOwlCommandLineSwitch(
    "disable-features",
  ).filter(
    (featureName) => !pendingState.enabledFeatureNames.includes(featureName),
  );
  writeOwlCommandLineSwitch("enable-features", [
    ...enabledFromCommandLine,
    ...pendingState.enabledFeatureNames,
  ]);
  writeOwlCommandLineSwitch("disable-features", [
    ...disabledFromCommandLine,
    ...pendingState.disabledFeatureNames,
  ]);
}

function createOwlFeatureSettingsApi(): {
  getState(): Promise<OwlFeatureSettingsState>;
  isOwlFeatureEnabled(name: string): Promise<boolean>;
  setFeatureNames(value: unknown): Promise<OwlFeatureSettingsState>;
} {
  return {
    async getState() {
      return getOwlFeatureSettingsState();
    },
    async isOwlFeatureEnabled(name) {
      return isOwlFeatureEnabled(name);
    },
    async setFeatureNames(value) {
      setPendingOwlFeatureState(value);
      return getOwlFeatureSettingsState();
    },
  };
}

function isOwlFeatureEnabled(name: string): boolean {
  const binding = getOwlFeatureNativeBinding();
  if (binding == null) return false;
  try {
    return binding.isOwlFeatureEnabled(name);
  } catch (error) {
    if (
      error instanceof Error &&
      error.message.startsWith("Unsupported Owl feature:")
    ) {
      return false;
    }
    throw error;
  }
}

function setPendingOwlFeatureState(value: unknown): void {
  const pendingState = normalizeOwlFeatureState(
    parseOwlFeatureNameState(value),
  );
  const cachePath = getOwlFeatureBootstrapCachePath();
  mkdirSync(path.dirname(cachePath), { recursive: true });
  writeFileAtomically(
    cachePath,
    JSON.stringify({
      enabledOwlFeatureNames: pendingState.enabledFeatureNames,
      disabledOwlFeatureNames: pendingState.disabledFeatureNames,
    }),
  );
}

function getOwlFeatureSettingsState(): OwlFeatureSettingsState {
  const activeFeatureNames = normalizeOwlFeatureNames(
    readOwlCommandLineSwitch("enable-features"),
  );
  const activeDisabledFeatureNames = normalizeOwlFeatureNames(
    readOwlCommandLineSwitch("disable-features"),
  ).filter((featureName) => !activeFeatureNames.includes(featureName));
  const pendingState = getPendingOwlFeatureState();
  return {
    activeFeatureNames,
    activeDisabledFeatureNames,
    pendingFeatureNames: pendingState.enabledFeatureNames,
    pendingDisabledFeatureNames: pendingState.disabledFeatureNames,
    restartRequired: !(
      sameFeatureNameSet(
        activeFeatureNames,
        pendingState.enabledFeatureNames,
      ) &&
      sameFeatureNameSet(
        activeDisabledFeatureNames,
        pendingState.disabledFeatureNames,
      )
    ),
  };
}

function getOwlFeatureNativeBinding(): OwlFeatureNativeBinding | null {
  const linkedBinding = (process as ProcessWithLinkedBinding)._linkedBinding;
  if (typeof linkedBinding !== "function") return null;
  let binding: unknown;
  try {
    binding = linkedBinding.call(process, OWL_FEATURES_LINKED_BINDING_NAME);
  } catch (error) {
    if (isMissingOwlFeatureBindingError(error)) return null;
    throw error;
  }
  return parseOwlFeatureNativeBinding(binding);
}

function getPendingOwlFeatureState(): OwlFeatureNameState {
  const cachedState = readCachedOwlFeatureState();
  return normalizeOwlFeatureState({
    enabledFeatureNames: [
      ...cachedState.enabledFeatureNames,
      ...owlBootstrapFeatureNames,
    ],
    disabledFeatureNames: cachedState.disabledFeatureNames,
  });
}

function readCachedOwlFeatureState(): OwlFeatureNameState {
  try {
    const value = JSON.parse(
      readFileSync(getOwlFeatureBootstrapCachePath(), "utf8"),
    );
    if (!isRecord(value)) throw Error("Invalid Owl feature cache");
    return normalizeOwlFeatureState({
      enabledFeatureNames: arrayOfStrings(value.enabledOwlFeatureNames),
      disabledFeatureNames: arrayOfStrings(value.disabledOwlFeatureNames),
    });
  } catch {
    return { enabledFeatureNames: [], disabledFeatureNames: [] };
  }
}

function parseOwlFeatureNameState(value: unknown): OwlFeatureNameState {
  if (!isRecord(value))
    return { enabledFeatureNames: [], disabledFeatureNames: [] };
  return {
    enabledFeatureNames: arrayOfStrings(value.enabledFeatureNames),
    disabledFeatureNames: arrayOfStrings(value.disabledFeatureNames),
  };
}

function normalizeOwlFeatureState(
  state: OwlFeatureNameState,
): OwlFeatureNameState {
  const enabledFeatureNames = normalizeOwlFeatureNames(
    state.enabledFeatureNames,
  );
  return {
    enabledFeatureNames,
    disabledFeatureNames: normalizeOwlFeatureNames(
      state.disabledFeatureNames,
    ).filter((featureName) => !enabledFeatureNames.includes(featureName)),
  };
}

function normalizeOwlFeatureNames(featureNames: unknown): string[] {
  const supportedFeatureNames = getSupportedOwlFeatureNames();
  const result: string[] = [];
  for (const featureName of arrayOfStrings(featureNames)) {
    if (
      supportedFeatureNames != null &&
      !supportedFeatureNames.includes(featureName)
    ) {
      continue;
    }
    if (!result.includes(featureName)) result.push(featureName);
  }
  return result;
}

function getSupportedOwlFeatureNames(): readonly string[] | null {
  return Array.isArray(sharedRuntime.qi)
    ? (sharedRuntime.qi as readonly string[])
    : null;
}

function readOwlCommandLineSwitch(name: string): string[] {
  return app.commandLine.getSwitchValue(name).split(",").filter(Boolean);
}

function writeOwlCommandLineSwitch(name: string, values: string[]): void {
  const normalizedValues = normalizeOwlFeatureNames(values);
  app.commandLine.removeSwitch(name);
  if (normalizedValues.length > 0) {
    app.commandLine.appendSwitch(name, normalizedValues.join(","));
  }
}

function sameFeatureNameSet(left: string[], right: string[]): boolean {
  const normalizedLeft = [...normalizeOwlFeatureNames(left)].sort();
  const normalizedRight = [...normalizeOwlFeatureNames(right)].sort();
  return (
    normalizedLeft.length === normalizedRight.length &&
    normalizedLeft.every(
      (featureName, index) => normalizedRight[index] === featureName,
    )
  );
}

function getOwlFeatureBootstrapCachePath(): string {
  return path.join(app.getPath("userData"), OWL_FEATURE_BOOTSTRAP_CACHE_FILE);
}

function isMissingOwlFeatureBindingError(error: unknown): boolean {
  return error instanceof Error
    ? error.message.includes(OWL_FEATURES_LINKED_BINDING_NAME) &&
        error.message.includes("No such binding was linked:")
    : false;
}

function parseOwlFeatureNativeBinding(value: unknown): OwlFeatureNativeBinding {
  if (isRecord(value) && typeof value.isOwlFeatureEnabled === "function") {
    return {
      isOwlFeatureEnabled: value.isOwlFeatureEnabled as (
        name: string,
      ) => boolean,
    };
  }
  throw Error("Invalid Owl feature native binding");
}

function writeFileAtomically(filePath: string, data: string): void {
  const tempPath = path.join(
    path.dirname(filePath),
    `.${path.basename(filePath)}.tmp-${Date.now()}-${randomUUID()}`,
  );
  try {
    writeFileSync(tempPath, data, "utf8");
    renameSync(tempPath, filePath);
  } catch (error) {
    rmSync(tempPath, { force: true });
    throw error;
  }
}

function arrayOfStrings(value: unknown): string[] {
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string")
    : [];
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value != null;
}

function loadWindowsUpdaterNativeAddon(): unknown {
  try {
    return requireFromWorkspaceBoundary(
      path.join(process.resourcesPath, "native", "windows-updater.node"),
    );
  } catch (error) {
    runtimeLogger().error("Failed to load native Windows updater addon", {
      safe: {},
      sensitive: { error },
    });
    return null;
  }
}

function applyNativeThemeSource(theme: string): void {
  nativeTheme.themeSource =
    theme === "light" || theme === "dark" ? theme : "system";
}

async function setInternalUpdateCdnEnabled(
  store: KeyValueStore,
  enabled: boolean,
): Promise<void> {
  store.set("electron-internal-update-cdn-enabled", enabled);
  await store.flush?.();
}

function createDesktopRuntimePaths({ moduleDir }: { moduleDir: string }): {
  codexHome: string;
  preloadPath: string;
  desktopRoot: string;
  repoRoot: string;
  globalState: KeyValueStore;
  settingsStore: SettingsStoreBoundary;
} {
  (sharedRuntime.Ar as (() => void) | undefined)?.();
  const codexHome = (sharedRuntime.Ur as () => string)();
  const desktopRoot = path.join(moduleDir, "..", "..");
  const repoRoot = path.join(desktopRoot, "..");
  const globalStatePath = path.join(codexHome, ".codex-global-state.json");
  const globalState = new FileBackedGlobalStateStore(globalStatePath);
  if (!existsSync(globalStatePath) && !existsSync(`${globalStatePath}.bak`)) {
    globalState.set(getDesktopFirstSeenAtMsKey(), Date.now());
  }
  const settingsStore = new FileBackedSettingsStoreBoundary(
    path.join(codexHome, "config.toml"),
    globalState,
  );
  const shouldSpawnInsideWsl =
    process.platform === "win32" &&
    process.env.WSL_DISTRO_NAME == null &&
    settingsStore.getEffective(getRunCodexInWslSettingKey()) === true &&
    (sharedRuntime.Kr as (() => unknown | null) | undefined)?.() != null;
  (sharedRuntime.Yr as ((callback: () => boolean) => void) | undefined)?.(
    () => shouldSpawnInsideWsl,
  );
  applyNativeThemeSource(
    String(
      settingsStore.getEffective(getAppearanceThemeSettingKey()) ?? "system",
    ),
  );
  return {
    codexHome,
    preloadPath: path.join(moduleDir, "preload.js"),
    desktopRoot,
    repoRoot,
    globalState,
    settingsStore,
  };
}

function getDesktopRuntimeState(
  buildFlavor = BuildFlavor.resolve(),
): DesktopRuntimeState {
  if (desktopRuntimeState) return desktopRuntimeState;
  const startedAtMs = Date.now();
  const queuedSecondInstanceArgs: string[][] = [];
  let secondInstanceArgsHandler: ((args: string[]) => void) | null = null;
  let onInstallUpdatesRequested = (_request?: InstallUpdatesRequest): void => {
    if (process.platform === "win32" && app.isPackaged) {
      app.exit(0);
      return;
    }
    app.quit();
  };
  let onUpdateLifecycleStateChanged = (
    _state: UpdateLifecycleState,
  ): void => {};
  let onRelaunchNoticeChanged = (_notice: RelaunchNotice | null): void => {};
  let onUpdateReadyChanged = (_isReady: boolean): void => {};
  let onInstallProgressChanged = (_percent: number | null): void => {};
  let onDownloadProgressChanged = (_percent: number | null): void => {};
  let isTrustedIpcEvent = (_event: Electron.IpcMainInvokeEvent): boolean =>
    false;

  desktopRuntimeState ??= {
    startedAtMs,
    buildFlavor,
    desktopSentry: {
      captureException() {},
    },
    sparkleManager: new DesktopUpdateManagerImpl({
      buildFlavor,
      enableUpdater:
        typeof BuildFlavor.shouldIncludeUpdater === "function"
          ? BuildFlavor.shouldIncludeUpdater(
              buildFlavor,
              process.platform,
              process.env,
            )
          : false,
      getInternalUpdateCdnRequestHeaders: undefined,
      isPackaged: app.isPackaged,
      isTrustedIpcEvent: (event) => isTrustedIpcEvent(event),
      onDownloadProgressChanged: (percent) => {
        onDownloadProgressChanged(percent);
      },
      onInstallProgressChanged: (percent) => {
        onInstallProgressChanged(percent);
      },
      onInstallUpdatesRequested: (request) => {
        onInstallUpdatesRequested(request);
      },
      onRelaunchNoticeChanged: (notice) => {
        onRelaunchNoticeChanged(notice);
      },
      onUpdateLifecycleStateChanged: (state) => {
        onUpdateLifecycleStateChanged(state);
      },
      onUpdateReadyChanged: (isReady) => {
        onUpdateReadyChanged(isReady);
      },
      useInternalUpdateCdn: false,
    }),
    queueSecondInstanceArgs(args: string[]): void {
      if (secondInstanceArgsHandler) {
        secondInstanceArgsHandler(args);
      } else {
        queuedSecondInstanceArgs.push(args);
      }
    },
    setSecondInstanceArgsHandler(handler: (args: string[]) => void): void {
      secondInstanceArgsHandler = handler;
      for (const args of queuedSecondInstanceArgs) handler(args);
      queuedSecondInstanceArgs.length = 0;
    },
    setSparkleBridgeHandlers(handlers: SparkleBridgeHandlers): void {
      if (handlers.onInstallUpdatesRequested) {
        onInstallUpdatesRequested = handlers.onInstallUpdatesRequested;
      }
      if (handlers.onUpdateLifecycleStateChanged) {
        onUpdateLifecycleStateChanged = handlers.onUpdateLifecycleStateChanged;
      }
      if (handlers.onRelaunchNoticeChanged) {
        onRelaunchNoticeChanged = handlers.onRelaunchNoticeChanged;
      }
      if (handlers.onUpdateReadyChanged) {
        onUpdateReadyChanged = handlers.onUpdateReadyChanged;
      }
      if (handlers.onInstallProgressChanged) {
        onInstallProgressChanged = handlers.onInstallProgressChanged;
      }
      if (handlers.onDownloadProgressChanged) {
        onDownloadProgressChanged = handlers.onDownloadProgressChanged;
      }
      if (handlers.isTrustedIpcEvent) {
        isTrustedIpcEvent = handlers.isTrustedIpcEvent;
      }
    },
  };
  return desktopRuntimeState;
}

class DesktopUpdateManagerImpl implements DesktopUpdateManager {
  private automaticBackgroundDownloadsEnabled = false;
  private downloadProgressPercent: number | null = null;
  private forcedUpdateInstallStarted = false;
  private forcedUpdateRetryAtMs: number | null = null;
  private forcedUpdateTimer: NodeJS.Timeout | null = null;
  private installProgressPercent: number | null = null;
  private isUpdateReady = false;
  private lastUnavailableReason: string | null = null;
  private owlUpdatePolicies: OwlUpdatePolicies | null = null;
  private relaunchNotice: RelaunchNotice | null = null;
  private setAutomaticBackgroundDownloadsEnabledForMac:
    | ((enabled: boolean) => void)
    | null = null;
  private updateDownloadedAtMs: number | null = null;
  private updateLifecycleState: UpdateLifecycleState = "idle";
  private updater: DesktopUpdater | null = null;
  private updateIpcRegistered = false;

  constructor(private readonly options: DesktopUpdateManagerOptions) {}

  async initialize(): Promise<void> {
    if (!this.options.enableUpdater) {
      this.lastUnavailableReason =
        process.platform !== "darwin" && process.platform !== "win32"
          ? "unsupported platform"
          : `disabled for build flavor (${this.options.buildFlavor})`;
      return;
    }

    try {
      if (process.platform === "win32") {
        await this.initializeWindowsUpdater();
      } else {
        await this.initializeMacSparkle();
      }
      this.registerCheckForUpdatesIpc();
      if (this.hasUpdater()) {
        this.observeRelaunchNotificationPolicy();
        return;
      }
      sparkleLogger().warning("Updater unavailable after init.", {
        safe: {
          platform: process.platform,
          packaged: this.options.isPackaged,
          reason: this.lastUnavailableReason,
        },
        sensitive: {},
      });
    } catch (error) {
      sparkleLogger().error("Failed to set up updater", {
        safe: {},
        sensitive: { error },
      });
      this.lastUnavailableReason = "updater initialization failed";
      this.updater = null;
    }
  }

  hasUpdater(): boolean {
    return this.updater != null;
  }

  getUnavailableReason(): string | null {
    return this.lastUnavailableReason;
  }

  getIsUpdateReady(): boolean {
    return this.isUpdateReady;
  }

  getInstallProgressPercent(): number | null {
    return this.installProgressPercent;
  }

  getDownloadProgressPercent(): number | null {
    return this.downloadProgressPercent;
  }

  getUpdateLifecycleState(): UpdateLifecycleState {
    return this.updateLifecycleState;
  }

  getRelaunchNotice(): RelaunchNotice | null {
    return this.relaunchNotice == null
      ? null
      : this.createRelaunchNotice(this.relaunchNotice.deadlineAtMs);
  }

  showRelaunchNoticeForDebug(): void {
    this.setRelaunchNotice(Date.now() + 5 * 60 * 60 * 1000);
  }

  async checkForUpdates(): Promise<void> {
    if (!this.updater) {
      sparkleLogger().warning(
        "Update check request ignored (updater unavailable).",
      );
      return;
    }

    try {
      await this.updater.checkForUpdates();
    } catch (error) {
      if (this.updateLifecycleState === "checking" && !this.isUpdateReady) {
        this.setUpdateLifecycleState("idle");
      }
      sparkleLogger().error("Failed to check for updates", {
        safe: {},
        sensitive: { error },
      });
    }
  }

  async installUpdatesIfAvailable(): Promise<boolean> {
    if (!this.updater) {
      sparkleLogger().warning(
        "Update install request ignored (updater unavailable).",
      );
      return false;
    }

    try {
      if (this.isUpdateReady && process.platform !== "darwin") {
        this.setUpdateLifecycleState("installing");
      }
      await this.updater.installUpdatesIfAvailable();
      return true;
    } catch (error) {
      this.setUpdateLifecycleState(this.isUpdateReady ? "ready" : "idle");
      sparkleLogger().error("Failed to install update", {
        safe: {},
        sensitive: { error },
      });
      return false;
    }
  }

  setAutomaticBackgroundDownloadsEnabled(enabled: boolean): void {
    if (this.automaticBackgroundDownloadsEnabled === enabled) return;
    this.automaticBackgroundDownloadsEnabled = enabled;
    this.setAutomaticBackgroundDownloadsEnabledForMac?.(enabled);
  }

  private registerCheckForUpdatesIpc(): void {
    if (this.updateIpcRegistered) return;
    this.updateIpcRegistered = true;
    try {
      ipcMain.handle("codex_desktop:check-for-updates", async (event) => {
        if (this.options.isTrustedIpcEvent(event)) {
          await this.checkForUpdates();
        }
      });
    } catch (error) {
      sparkleLogger().warning("Failed to register updater IPC handler", {
        safe: {},
        sensitive: { error },
      });
    }
  }

  private async initializeWindowsUpdater(): Promise<void> {
    const nativeAddon =
      loadWindowsUpdaterNativeAddon() as WindowsNativeUpdaterAddon | null;
    if (!nativeAddon) {
      this.lastUnavailableReason = "failed to load native windows updater";
      return;
    }

    const sharedOptions: WindowsUpdaterCallbacks = {
      checkIntervalMs: resolveUpdateCheckIntervalMs(),
      nativeAddon,
      onInstallProgressChanged: (percent) => {
        this.setInstallProgressPercent(percent);
      },
      onInstallUpdatesRequested: this.options.onInstallUpdatesRequested,
      onUpdateLifecycleStateChanged: (state) => {
        this.setUpdateLifecycleState(state);
      },
      onUpdateReadyChanged: (isReady) => {
        this.setUpdateReady(isReady);
      },
    };
    const storeConfig =
      typeof BuildFlavor.getWindowsStoreConfig === "function"
        ? BuildFlavor.getWindowsStoreConfig(this.options.buildFlavor)
        : null;
    const updater =
      storeConfig != null
        ? new WindowsStoreUpdater({
            ...sharedOptions,
            buildVersion: this.resolveWindowsStoreBuildVersion(),
            packageIdentity:
              readPackageMetadataField("codexWindowsPackageIdentity")?.trim() ??
              "",
            storeProductId: storeConfig.storeProductId,
            storeUpdateManifestUrl: storeConfig.storeUpdateManifestUrl,
          })
        : this.createWindowsMsixUpdater(sharedOptions);
    if (!updater) return;

    await updater.initialize?.();
    if (updater.hasUpdater?.() === false) {
      this.lastUnavailableReason = updater.getUnavailableReason?.() ?? null;
      return;
    }
    this.lastUnavailableReason = null;
    this.updater = updater;
    this.setUpdateReady(updater.getIsUpdateReady?.() === true);
    this.setInstallProgressPercent(null);
  }

  private createWindowsMsixUpdater(
    callbacks: WindowsUpdaterCallbacks,
  ): WindowsMsixUpdater | null {
    const manifestUrl = this.resolveWindowsUpdateUrl();
    if (!manifestUrl) return null;
    return new WindowsMsixUpdater({
      ...callbacks,
      buildVersion: this.resolveBuildVersion(),
      manifestUrl,
      packageIdentity:
        readPackageMetadataField("codexWindowsPackageIdentity")?.trim() ?? "",
      packagePublisher:
        readPackageMetadataField("codexWindowsPackagePublisher")?.trim() ?? "",
    });
  }

  private async initializeMacSparkle(): Promise<void> {
    if (process.platform !== "darwin") {
      this.lastUnavailableReason = "unsupported platform";
      return;
    }
    if (!this.options.isPackaged) {
      this.lastUnavailableReason = "dev build";
      return;
    }

    const publicFeedUrl = this.resolveMacSparkleFeedUrl();
    if (!publicFeedUrl) return;
    const internalFeedUrl = this.options.useInternalUpdateCdn
      ? this.resolveMacSparkleInternalCdnFeedUrl()
      : null;
    let feedUrl = internalFeedUrl ?? publicFeedUrl;
    let fallbackFeedUrl = internalFeedUrl ? publicFeedUrl : null;
    let requestHeaders = internalFeedUrl
      ? await this.getInternalUpdateCdnRequestHeaders(feedUrl)
      : undefined;
    if (requestHeaders === false) {
      feedUrl = publicFeedUrl;
      fallbackFeedUrl = null;
    }

    let nativeSparkle: NativeSparkleAddon | null = null;
    let loadError: unknown;
    try {
      nativeSparkle = requireFromWorkspaceBoundary(
        path.join(process.resourcesPath, "native", "sparkle.node"),
      ) as NativeSparkleAddon;
    } catch (error) {
      loadError = error;
    }
    if (!nativeSparkle) {
      sparkleLogger().error("Failed to load native Sparkle addon", {
        safe: {},
        sensitive: { error: loadError },
      });
      this.lastUnavailableReason = "failed to load native sparkle addon";
      return;
    }

    const hasLifecycleSink =
      typeof nativeSparkle.setUpdateLifecycleStateSink === "function";
    try {
      nativeSparkle.setLogSink?.((level, message) => {
        logScopedMessage(
          sparkleLogger(),
          this.decodeNativeLogLevel(level) ?? "info",
          message,
        );
      });
      nativeSparkle.setInstallUpdatesRequestedSink?.(() => {
        this.options.onInstallUpdatesRequested?.({ quitImmediately: false });
      });
      nativeSparkle.setDownloadProgressSink?.((percent) => {
        this.setDownloadProgressPercent(percent);
      });
      nativeSparkle.setUpdateReadySink?.((isReady) => {
        this.setUpdateReady(isReady);
      });
      nativeSparkle.setUpdateDownloadedSink?.((isDownloaded) => {
        this.setUpdateDownloaded(isDownloaded);
      });
      nativeSparkle.setUpdateLifecycleStateSink?.((state) => {
        this.setUpdateLifecycleState(state);
      });
      nativeSparkle.setAutomaticBackgroundDownloadsEnabled?.(
        this.automaticBackgroundDownloadsEnabled,
      );
      if (requestHeaders === false || requestHeaders === undefined) {
        nativeSparkle.init(feedUrl);
      } else if (fallbackFeedUrl) {
        nativeSparkle.init(feedUrl, requestHeaders, fallbackFeedUrl);
      } else {
        nativeSparkle.init(feedUrl, requestHeaders);
      }
      this.lastUnavailableReason = null;
    } catch (error) {
      sparkleLogger().error("Failed to initialize Sparkle addon", {
        safe: {},
        sensitive: { error },
      });
      this.lastUnavailableReason = "failed to initialize sparkle addon";
      return;
    }

    const checkInBackground = (): void => {
      try {
        if (
          hasLifecycleSink &&
          !this.isUpdateReady &&
          this.updateLifecycleState === "idle"
        ) {
          this.setUpdateLifecycleState("checking");
        }
        nativeSparkle.checkForUpdatesInBackground?.();
      } catch (error) {
        if (!this.isUpdateReady) this.setUpdateLifecycleState("idle");
        sparkleLogger().error("Failed to check for updates in background", {
          safe: {},
          sensitive: { error },
        });
      }
    };
    this.setAutomaticBackgroundDownloadsEnabledForMac = (enabled) => {
      nativeSparkle.setAutomaticBackgroundDownloadsEnabled?.(enabled);
      if (enabled) checkInBackground();
    };
    const thisManager = this;
    this.updater = {
      async checkForUpdates() {
        if (
          hasLifecycleSink &&
          !thisManager.isUpdateReady &&
          thisManager.updateLifecycleState === "idle"
        ) {
          thisManager.setUpdateLifecycleState("checking");
        }
        nativeSparkle.checkForUpdates();
      },
      async installUpdatesIfAvailable() {
        if (typeof nativeSparkle.installLatestUpdate === "function") {
          nativeSparkle.installLatestUpdate();
          return;
        }
        if (thisManager.isUpdateReady) {
          thisManager.options.onInstallUpdatesRequested?.();
        }
        nativeSparkle.installUpdatesIfAvailable?.();
      },
    };
    const intervalMs = resolveUpdateCheckIntervalMs();
    if (intervalMs > 0) setInterval(checkInBackground, intervalMs).unref();
    checkInBackground();
  }

  private resolveMacSparkleFeedUrl(): string | null {
    const value = readPackageMetadataField("codexSparkleFeedUrl")?.trim() ?? "";
    if (value) return value;
    this.lastUnavailableReason = "missing packaged sparkle feed url";
    return null;
  }

  private resolveMacSparkleInternalCdnFeedUrl(): string | null {
    const value =
      readPackageMetadataField("codexSparkleInternalCdnFeedUrl")?.trim() ?? "";
    if (!value) return null;
    try {
      if (new URL(value).protocol === "https:") return value;
    } catch {}
    sparkleLogger().warning("Ignoring invalid internal update CDN feed URL");
    return null;
  }

  private async getInternalUpdateCdnRequestHeaders(
    feedUrl: string,
  ): Promise<Record<string, string> | false> {
    if (!this.options.getInternalUpdateCdnRequestHeaders) {
      this.lastUnavailableReason = "sparkle update access is unavailable";
      return false;
    }
    try {
      const headers =
        await this.options.getInternalUpdateCdnRequestHeaders(feedUrl);
      if (headers) return headers;
      this.lastUnavailableReason = "sparkle update access was not authorized";
      return false;
    } catch (error) {
      sparkleLogger().error("Failed to authorize Sparkle update access", {
        safe: {},
        sensitive: { error },
      });
      this.lastUnavailableReason = "sparkle update access is unavailable";
      return false;
    }
  }

  private resolveWindowsUpdateUrl(): string | null {
    const value =
      readPackageMetadataField("codexWindowsUpdateUrl")?.trim() ?? "";
    if (!value) {
      this.lastUnavailableReason = "missing packaged windows update url";
      return null;
    }
    try {
      const url = new URL(value);
      if (url.protocol === "https:") return url.toString();
      this.lastUnavailableReason =
        "windows update url must use https transport";
      return null;
    } catch {
      this.lastUnavailableReason = "invalid packaged windows update url";
      return null;
    }
  }

  private resolveBuildVersion(): string {
    return (
      readPackageMetadataField("codexBuildNumber")?.trim() ?? app.getVersion()
    );
  }

  private resolveWindowsStoreBuildVersion(): string {
    const appVersion = app.getVersion().trim();
    const normalizeVersion = sharedRuntime.mc as
      | ((value: string) => string)
      | undefined;
    try {
      return normalizeVersion ? normalizeVersion(appVersion) : appVersion;
    } catch (error) {
      sparkleLogger().warning(
        "Failed to normalize Windows Store build version from app version; using raw app version.",
        {
          safe: { appVersion },
          sensitive: { error },
        },
      );
      return appVersion;
    }
  }

  private setUpdateReady(isReady: boolean): void {
    if (isReady) {
      this.setUpdateLifecycleState("ready");
    } else if (
      this.updateLifecycleState === "ready" ||
      this.updateLifecycleState === "installing"
    ) {
      this.setUpdateLifecycleState("idle");
    }

    if (this.isUpdateReady === isReady) return;
    this.isUpdateReady = isReady;
    if (isReady && process.platform !== "darwin") {
      this.setUpdateDownloaded(true);
    } else if (!isReady) {
      this.setUpdateDownloaded(false);
    }
    this.scheduleForcedUpdateInstall();
    this.options.onUpdateReadyChanged?.(isReady);
  }

  private setUpdateDownloaded(isDownloaded: boolean): void {
    if (isDownloaded) {
      if (this.updateDownloadedAtMs != null) return;
      this.updateDownloadedAtMs = Date.now();
    } else {
      if (this.updateDownloadedAtMs == null) return;
      this.updateDownloadedAtMs = null;
      this.forcedUpdateInstallStarted = false;
      this.forcedUpdateRetryAtMs = null;
    }
    this.scheduleForcedUpdateInstall();
  }

  private observeRelaunchNotificationPolicy(): void {
    this.owlUpdatePolicies = loadOwlUpdatePolicies();
    this.owlUpdatePolicies?.on("relaunch-notification-policy-changed", () => {
      this.scheduleForcedUpdateInstall();
    });
    if (this.owlUpdatePolicies) this.scheduleForcedUpdateInstall();
  }

  private scheduleForcedUpdateInstall(): void {
    if (this.forcedUpdateTimer) {
      clearTimeout(this.forcedUpdateTimer);
      this.forcedUpdateTimer = null;
    }
    const policy = this.getRelaunchNotificationPolicy();
    if (
      !this.isUpdateReady ||
      this.updateDownloadedAtMs == null ||
      policy?.relaunchNotification !== 2 ||
      this.forcedUpdateInstallStarted
    ) {
      this.setRelaunchNotice(null);
      return;
    }

    const deadlineAtMs = resolveRelaunchDeadline(
      this.updateDownloadedAtMs,
      policy,
    );
    const noticeAtMs =
      this.updateDownloadedAtMs +
      Math.ceil(Math.max(0, deadlineAtMs - this.updateDownloadedAtMs) / 3);
    this.setRelaunchNotice(Date.now() < noticeAtMs ? null : deadlineAtMs);
    this.scheduleForcedUpdateInstallAt(
      Math.max(deadlineAtMs, this.forcedUpdateRetryAtMs ?? deadlineAtMs),
      deadlineAtMs,
      noticeAtMs,
    );
  }

  private scheduleForcedUpdateInstallAt(
    installAtMs: number,
    deadlineAtMs: number,
    noticeAtMs: number,
  ): void {
    const nowMs = Date.now();
    const dayBeforeDeadlineMs = deadlineAtMs - 24 * 60 * 60 * 1000;
    const delayMs = Math.max(
      0,
      (nowMs < noticeAtMs
        ? Math.min(installAtMs, noticeAtMs)
        : nowMs < dayBeforeDeadlineMs
          ? Math.min(installAtMs, dayBeforeDeadlineMs)
          : installAtMs) - nowMs,
    );
    this.forcedUpdateTimer = setTimeout(
      () => {
        this.forcedUpdateTimer = null;
        const currentMs = Date.now();
        if (currentMs < installAtMs) {
          this.setRelaunchNotice(currentMs < noticeAtMs ? null : deadlineAtMs);
          this.scheduleForcedUpdateInstallAt(
            installAtMs,
            deadlineAtMs,
            noticeAtMs,
          );
          return;
        }
        void this.installForcedUpdate();
      },
      Math.min(delayMs, 2147483647),
    );
    this.forcedUpdateTimer.unref();
  }

  private getRelaunchNotificationPolicy(): RelaunchPolicy | null {
    return this.owlUpdatePolicies
      ? parseRelaunchPolicy(
          this.owlUpdatePolicies.getRelaunchNotificationPolicy(),
        )
      : null;
  }

  private async installForcedUpdate(): Promise<void> {
    if (this.forcedUpdateInstallStarted || !this.isUpdateReady) return;
    this.forcedUpdateInstallStarted = true;
    this.setRelaunchNotice(null);
    sparkleLogger().info(
      "Installing update required by managed relaunch policy.",
    );
    if (!(await this.installUpdatesIfAvailable()) && this.isUpdateReady) {
      this.forcedUpdateInstallStarted = false;
      this.forcedUpdateRetryAtMs = Date.now() + 60_000;
      this.scheduleForcedUpdateInstall();
    }
  }

  private setInstallProgressPercent(percent: number | null): void {
    if (percent == null) {
      if (this.updateLifecycleState === "installing") {
        this.setUpdateLifecycleState(this.isUpdateReady ? "ready" : "idle");
      }
    } else {
      this.setUpdateLifecycleState("installing");
    }
    if (this.installProgressPercent === percent) return;
    this.installProgressPercent = percent;
    this.options.onInstallProgressChanged?.(percent);
  }

  private setDownloadProgressPercent(percent: number | null): void {
    if (this.downloadProgressPercent === percent) return;
    this.downloadProgressPercent = percent;
    this.options.onDownloadProgressChanged?.(percent);
  }

  private createRelaunchNotice(deadlineAtMs: number): RelaunchNotice {
    const reportedAtMs = Date.now();
    return {
      deadlineAtMs,
      dismissable: deadlineAtMs - reportedAtMs > 24 * 60 * 60 * 1000,
      reportedAtMs,
    };
  }

  private setRelaunchNotice(deadlineAtMs: number | null): void {
    if (deadlineAtMs == null) {
      if (this.relaunchNotice == null) return;
      this.relaunchNotice = null;
      this.options.onRelaunchNoticeChanged?.(null);
      return;
    }
    const notice = this.createRelaunchNotice(deadlineAtMs);
    if (
      this.relaunchNotice?.deadlineAtMs === notice.deadlineAtMs &&
      this.relaunchNotice.dismissable === notice.dismissable
    ) {
      return;
    }
    this.relaunchNotice = notice;
    this.options.onRelaunchNoticeChanged?.(notice);
  }

  private setUpdateLifecycleState(state: UpdateLifecycleState): void {
    if (this.updateLifecycleState === state) return;
    this.updateLifecycleState = state;
    if (state === "ready" && process.platform !== "darwin") {
      this.setUpdateDownloaded(true);
    } else if (state === "idle" && !this.isUpdateReady) {
      this.setUpdateDownloaded(false);
    }
    this.options.onUpdateLifecycleStateChanged?.(state);
  }

  private decodeNativeLogLevel(value: number): string | null {
    switch (value) {
      case 1:
        return "trace";
      case 2:
        return "debug";
      case 3:
        return "info";
      case 4:
        return "warning";
      case 5:
        return "error";
      default:
        return null;
    }
  }
}

type WindowsUpdaterCallbacks = {
  checkIntervalMs: number;
  nativeAddon: WindowsNativeUpdaterAddon;
  onInstallProgressChanged?(percent: number | null): void;
  onInstallUpdatesRequested?(request?: InstallUpdatesRequest): void;
  onUpdateLifecycleStateChanged?(state: UpdateLifecycleState): void;
  onUpdateReadyChanged?(isReady: boolean): void;
};
type WindowsMsixUpdateManifest = {
  buildVersion: string;
  length: number;
  packageIdentity: string;
  packagePublisher: string;
  packageUrl: string;
  sha256: string;
};
type WindowsMsixPreparedUpdate = {
  buildVersion: string;
  length: number;
  packagePath: string;
  sha256: string;
};
type WindowsMsixUpdaterOptions = WindowsUpdaterCallbacks & {
  buildVersion: string;
  manifestUrl: string;
  packageIdentity: string;
  packagePublisher: string;
};
type WindowsStoreUpdaterOptions = WindowsUpdaterCallbacks & {
  buildVersion: string;
  packageIdentity: string;
  storeProductId: string;
  storeUpdateManifestUrl: string;
};
type NativeSparkleAddon = {
  init(
    feedUrl: string,
    requestHeaders?: Record<string, string>,
    fallbackFeedUrl?: string,
  ): void;
  checkForUpdates(): void;
  checkForUpdatesInBackground?(): void;
  installLatestUpdate?(): void;
  installUpdatesIfAvailable?(): void;
  setAutomaticBackgroundDownloadsEnabled?(enabled: boolean): void;
  setDownloadProgressSink?(sink: (percent: number | null) => void): void;
  setInstallUpdatesRequestedSink?(sink: () => void): void;
  setLogSink?(sink: (level: number, message: string) => void): void;
  setUpdateDownloadedSink?(sink: (isDownloaded: boolean) => void): void;
  setUpdateLifecycleStateSink?(
    sink: (state: UpdateLifecycleState) => void,
  ): void;
  setUpdateReadySink?(sink: (isReady: boolean) => void): void;
};
type OwlUpdatePolicies = {
  getRelaunchNotificationPolicy(): unknown;
  on(eventName: string, listener: () => void): void;
};
type RelaunchWindowEntry = {
  duration_mins: number | null;
  start: {
    hour: number | null;
    minute: number | null;
  };
};
type RelaunchPolicy = {
  relaunchFastIfOutdatedDays: number | null;
  relaunchNotification: number | null;
  relaunchNotificationPeriodMs: number | null;
  relaunchWindow?: { entries?: RelaunchWindowEntry[] } | null;
};

class WindowsMsixUpdater implements DesktopUpdater {
  private inFlightCheck: Promise<"up-to-date" | "update-ready"> | null = null;
  private inFlightInstall: Promise<void> | null = null;
  private installProgressPercent: number | null = null;
  private isUpdateReady = false;
  private lastUnavailableReason: string | null = null;
  private stateRoot = "";

  constructor(private readonly options: WindowsMsixUpdaterOptions) {}

  async initialize(): Promise<void> {
    if (!app.isPackaged) {
      this.lastUnavailableReason = "dev build";
      return;
    }
    if (!this.options.manifestUrl.trim()) {
      this.lastUnavailableReason = "missing packaged windows update url";
      return;
    }
    if (!this.options.packageIdentity.trim()) {
      this.lastUnavailableReason = "missing packaged windows package identity";
      return;
    }
    if (!this.options.packagePublisher.trim()) {
      this.lastUnavailableReason = "missing packaged windows package publisher";
      return;
    }
    const packageFamily = this.options.nativeAddon
      .getCurrentPackageFamily()
      .trim();
    if (!packageFamily) {
      this.lastUnavailableReason = "missing current windows package family";
      return;
    }

    this.stateRoot = path.join(
      app.getPath("userData"),
      "windows-msix-updater",
      packageFamily,
    );
    await fsPromises.mkdir(this.stateRoot, { recursive: true });
    this.stateRoot = await fsPromises.realpath(this.stateRoot);
    await this.reconcileLocalPreparedState();
    if (this.options.checkIntervalMs > 0) {
      setInterval(() => {
        void this.checkForUpdatesInBackground();
      }, this.options.checkIntervalMs).unref();
    }
    void this.checkForUpdatesInBackground();
  }

  hasUpdater(): boolean {
    return this.lastUnavailableReason == null;
  }

  getUnavailableReason(): string | null {
    return this.lastUnavailableReason;
  }

  getIsUpdateReady(): boolean {
    return this.isUpdateReady;
  }

  async checkForUpdates(): Promise<void> {
    await this.runCheck({ manual: true }).catch(() => undefined);
  }

  async checkForUpdatesInBackground(): Promise<void> {
    await this.runCheck({ manual: false }).catch(() => undefined);
  }

  async installUpdatesIfAvailable(): Promise<void> {
    if (this.inFlightInstall) {
      await this.inFlightInstall;
      return;
    }
    const installPromise = this.installPreparedUpdate();
    this.inFlightInstall = installPromise;
    try {
      await installPromise;
    } catch (error) {
      this.setInstallProgressPercent(null);
      windowsUpdaterLogger().error(
        "Failed to install prepared Windows update",
        {
          safe: {},
          sensitive: { error },
        },
      );
      await this.showActionError({
        message: `Unable to install the ${app.getName()} update.`,
        detail: "Try checking for updates again.",
      });
    } finally {
      if (this.inFlightInstall === installPromise) this.inFlightInstall = null;
    }
  }

  private async runCheck({
    manual,
  }: {
    manual: boolean;
  }): Promise<"up-to-date" | "update-ready"> {
    const checkPromise = this.inFlightCheck ?? this.performCheck();
    this.inFlightCheck = checkPromise;
    try {
      const result = await checkPromise;
      if (manual) await this.showManualCheckResult(result);
      return result;
    } catch (error) {
      this.setUpdateLifecycleState(this.isUpdateReady ? "ready" : "idle");
      windowsUpdaterLogger().error("Failed to check for Windows updates", {
        safe: {},
        sensitive: { error },
      });
      if (manual) {
        await this.showActionError({
          message: `Unable to check for ${app.getName()} updates.`,
          detail: error instanceof Error ? error.message : String(error),
        });
      }
      throw error;
    } finally {
      if (this.inFlightCheck === checkPromise) this.inFlightCheck = null;
    }
  }

  private async fetchManifest(): Promise<WindowsMsixUpdateManifest> {
    const response = await net.fetch(this.options.manifestUrl);
    if (!response.ok) {
      throw Error(
        `Windows update manifest request failed (${response.status} ${response.statusText})`,
      );
    }
    this.assertFetchedHttpsUrl(
      response.url,
      this.options.manifestUrl,
      "manifest",
    );
    const parsed = JSON.parse(await response.text()) as Record<string, unknown>;
    if (
      typeof parsed.buildVersion !== "string" ||
      typeof parsed.packageIdentity !== "string" ||
      typeof parsed.packagePublisher !== "string"
    ) {
      throw Error("Windows update manifest is missing required fields.");
    }
    return {
      buildVersion: parsed.buildVersion.trim(),
      packageIdentity: parsed.packageIdentity.trim(),
      packagePublisher: parsed.packagePublisher.trim(),
      ...this.selectManifestPackage(parsed),
    };
  }

  private selectManifestPackage(
    manifest: Record<string, unknown>,
  ): Pick<WindowsMsixUpdateManifest, "length" | "packageUrl" | "sha256"> {
    if (Array.isArray(manifest.packages)) {
      const packageForArch = manifest.packages.find((item) => {
        return isRecord(item) && item.arch === process.arch;
      });
      if (packageForArch == null) {
        throw Error(
          `Windows update manifest is missing a package for ${process.arch}.`,
        );
      }
      return this.validateManifestPackage(packageForArch);
    }
    return this.validateManifestPackage(manifest);
  }

  private validateManifestPackage(
    manifestPackage: unknown,
  ): Pick<WindowsMsixUpdateManifest, "length" | "packageUrl" | "sha256"> {
    if (
      !isRecord(manifestPackage) ||
      typeof manifestPackage.packageUrl !== "string" ||
      typeof manifestPackage.sha256 !== "string" ||
      typeof manifestPackage.length !== "number"
    ) {
      throw Error("Windows update manifest is missing required fields.");
    }
    const packageUrl = new URL(manifestPackage.packageUrl.trim());
    if (packageUrl.protocol !== "https:") {
      throw Error("Windows update package URL must use https transport.");
    }
    return {
      length: manifestPackage.length,
      packageUrl: packageUrl.toString(),
      sha256: manifestPackage.sha256.trim().toLowerCase(),
    };
  }

  private async downloadUpdatePackage(
    manifest: Pick<
      WindowsMsixUpdateManifest,
      "length" | "packageUrl" | "sha256"
    >,
  ): Promise<string> {
    const packageUrl = manifest.packageUrl;
    const packageFilename = decodeURIComponent(
      path.posix.basename(new URL(packageUrl).pathname),
    ).trim();
    if (
      packageFilename === "" ||
      !packageFilename.toLowerCase().endsWith(".msix")
    ) {
      throw Error(`Invalid Windows update package URL '${packageUrl}'.`);
    }

    const packagePath = path.join(this.stateRoot, packageFilename);
    const downloadPath = `${packagePath}.download`;
    await this.cleanupDownloadedPackages(downloadPath);
    const response = await net.fetch(packageUrl);
    if (!response.ok || response.body == null) {
      throw Error(
        `Windows update download failed (${response.status} ${response.statusText})`,
      );
    }
    this.assertFetchedHttpsUrl(response.url, packageUrl, "package");

    const hash = createHash("sha256");
    let byteLength = 0;
    const bodyStream = Readable.fromWeb(response.body);
    const fileHandle = await fsPromises.open(downloadPath, "w");
    try {
      for await (const chunk of bodyStream) {
        const buffer = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
        byteLength += buffer.length;
        hash.update(buffer);
        await fileHandle.write(buffer);
      }
    } finally {
      await fileHandle.close();
    }

    const digest = hash.digest("hex").toLowerCase();
    if (byteLength !== manifest.length) {
      await fsPromises.rm(downloadPath, { force: true });
      throw Error(
        `Downloaded MSIX length mismatch (expected ${manifest.length}, got ${byteLength}).`,
      );
    }
    if (digest !== manifest.sha256) {
      await fsPromises.rm(downloadPath, { force: true });
      throw Error(
        `Downloaded MSIX checksum mismatch (expected ${manifest.sha256}, got ${digest}).`,
      );
    }

    await fsPromises.rename(downloadPath, packagePath);
    return packagePath;
  }

  private async installPreparedUpdate(): Promise<void> {
    const stagedUpdate = await this.readStageState();
    if (stagedUpdate == null) {
      throw Error("Install requested without a staged Windows update.");
    }
    this.setUpdateReady(false);
    this.setInstallProgressPercent(0);
    let installRequested = false;
    const notifyInstallRequested = (): void => {
      if (installRequested) return;
      installRequested = true;
      this.options.onInstallUpdatesRequested?.();
    };
    const activation = this.options.nativeAddon.activateStagedPackage(
      stagedUpdate.packagePath,
      (percent) => {
        this.setInstallProgressPercent(percent);
        if (percent > 0) notifyInstallRequested();
      },
    );
    try {
      await activation;
      notifyInstallRequested();
    } catch (error) {
      await this.runCheck({ manual: false }).catch((resyncError) => {
        windowsUpdaterLogger().error("Failed to resync Windows updater state", {
          safe: {},
          sensitive: { error: resyncError },
        });
      });
      this.setInstallProgressPercent(null);
      this.setUpdateLifecycleState(this.isUpdateReady ? "ready" : "idle");
      throw error;
    }
  }

  private async showManualCheckResult(
    result: "up-to-date" | "update-ready",
  ): Promise<void> {
    if (result === "update-ready") {
      await dialog.showMessageBox({
        type: "info",
        buttons: ["OK"],
        defaultId: 0,
        noLink: true,
        message: `${app.getName()} update is ready to install.`,
        detail: "Use the Update button to restart into the new version.",
      });
      return;
    }
    await dialog.showMessageBox({
      type: "info",
      buttons: ["OK"],
      defaultId: 0,
      noLink: true,
      message: `${app.getName()} is up to date.`,
    });
  }

  private async reconcileLocalPreparedState(): Promise<void> {
    const stagedUpdate = await this.readStageState();
    if (stagedUpdate == null) {
      this.setUpdateReady(false);
      return;
    }
    if (
      compareBuildVersions(
        stagedUpdate.buildVersion,
        this.options.buildVersion,
      ) <= 0
    ) {
      await this.discardPreparedUpdate();
      return;
    }
    this.setUpdateReady(true);
    this.setUpdateLifecycleState("ready");
  }

  private async readStageState(): Promise<WindowsMsixPreparedUpdate | null> {
    const statePath = this.getStageStatePath();
    try {
      const parsed = JSON.parse(
        await fsPromises.readFile(statePath, "utf8"),
      ) as Record<string, unknown>;
      if (
        typeof parsed.buildVersion !== "string" ||
        typeof parsed.length !== "number" ||
        typeof parsed.packagePath !== "string" ||
        typeof parsed.sha256 !== "string"
      ) {
        throw Error("missing required fields");
      }
      const packageName = decodeURIComponent(path.basename(parsed.packagePath));
      const packagePath = path.join(this.stateRoot, packageName);
      return {
        buildVersion: parsed.buildVersion.trim(),
        length: parsed.length,
        packagePath,
        sha256: parsed.sha256.trim().toLowerCase(),
      };
    } catch (error) {
      if (isNodeErrorCode(error, "ENOENT")) return null;
      windowsUpdaterLogger().warning(
        "Discarding invalid Windows updater staged state.",
        {
          safe: {},
          sensitive: { error, statePath },
        },
      );
      await fsPromises.rm(statePath, { force: true });
      return null;
    }
  }

  private async cleanupDownloadedPackages(keepPath?: string): Promise<void> {
    const entries = await fsPromises.readdir(this.stateRoot, {
      withFileTypes: true,
    });
    await Promise.all(
      entries
        .filter((entry) => {
          if (!entry.isFile()) return false;
          const name = entry.name.toLowerCase();
          return name.endsWith(".msix") || name.endsWith(".download");
        })
        .map((entry) => {
          const filePath = path.join(this.stateRoot, entry.name);
          if (keepPath != null && filePath === keepPath)
            return Promise.resolve();
          return fsPromises.rm(filePath, { force: true });
        }),
    );
  }

  private assertFetchedHttpsUrl(
    fetchedUrl: string,
    requestedUrl: string,
    resourceName: string,
  ): void {
    const resolvedUrl = fetchedUrl.trim() || requestedUrl;
    if (new URL(resolvedUrl).protocol !== "https:") {
      throw Error(
        `Windows update ${resourceName} URL must use https transport.`,
      );
    }
  }

  private async performCheck(): Promise<"up-to-date" | "update-ready"> {
    if (!this.isUpdateReady) this.setUpdateLifecycleState("checking");
    const manifest = await this.fetchManifest();
    if (manifest.packageIdentity !== this.options.packageIdentity) {
      throw Error(
        `Windows update manifest targets package identity '${manifest.packageIdentity}' instead of '${this.options.packageIdentity}'.`,
      );
    }
    if (manifest.packagePublisher !== this.options.packagePublisher) {
      throw Error(
        `Windows update manifest targets package publisher '${manifest.packagePublisher}' instead of '${this.options.packagePublisher}'.`,
      );
    }
    if (
      compareBuildVersions(manifest.buildVersion, this.options.buildVersion) <=
      0
    ) {
      await this.discardPreparedUpdate();
      this.setUpdateLifecycleState("idle");
      return "up-to-date";
    }

    const stagedUpdate = await this.readStageState();
    if (
      stagedUpdate != null &&
      stagedUpdate.buildVersion === manifest.buildVersion &&
      stagedUpdate.length === manifest.length &&
      stagedUpdate.sha256 === manifest.sha256
    ) {
      this.setUpdateReady(true);
      this.setUpdateLifecycleState("ready");
      return "update-ready";
    }
    if (stagedUpdate != null) await this.discardPreparedUpdate();
    this.setUpdateLifecycleState("downloading");
    const packagePath = await this.downloadUpdatePackage(manifest);
    await this.options.nativeAddon.stagePackage(packagePath);
    const statePath = this.getStageStatePath();
    await fsPromises.writeFile(
      `${statePath}.tmp`,
      JSON.stringify(
        {
          buildVersion: manifest.buildVersion,
          length: manifest.length,
          packagePath,
          sha256: manifest.sha256,
        },
        null,
        2,
      ),
    );
    await fsPromises.rename(`${statePath}.tmp`, statePath);
    this.setUpdateReady(true);
    this.setUpdateLifecycleState("ready");
    return "update-ready";
  }

  private getStageStatePath(): string {
    return path.join(this.stateRoot, "staged-msix.json");
  }

  private async discardPreparedUpdate(): Promise<void> {
    await fsPromises.rm(this.getStageStatePath(), { force: true });
    await this.cleanupDownloadedPackages();
    this.setUpdateReady(false);
  }

  private setUpdateReady(isReady: boolean): void {
    if (this.isUpdateReady === isReady) return;
    this.isUpdateReady = isReady;
    this.options.onUpdateReadyChanged?.(isReady);
  }

  private setUpdateLifecycleState(state: UpdateLifecycleState): void {
    this.options.onUpdateLifecycleStateChanged?.(state);
  }

  private setInstallProgressPercent(percent: number | null): void {
    if (this.installProgressPercent === percent) return;
    this.installProgressPercent = percent;
    this.options.onInstallProgressChanged?.(percent);
  }

  private async showActionError({
    message,
    detail,
  }: {
    message: string;
    detail: string;
  }): Promise<void> {
    await dialog.showMessageBox({
      type: "error",
      buttons: ["OK"],
      defaultId: 0,
      noLink: true,
      message,
      detail,
    });
  }
}

class WindowsStoreUpdater implements DesktopUpdater {
  private inFlightCheck: Promise<void> | null = null;
  private inFlightInstall: Promise<void> | null = null;
  private installProgressPercent: number | null = null;
  private isUpdateReady = false;
  private lastStoreDetectionAttemptAtMs: number | null = null;
  private lastUnavailableReason: string | null = null;

  constructor(private readonly options: WindowsStoreUpdaterOptions) {}

  async initialize(): Promise<void> {
    if (!app.isPackaged) {
      this.lastUnavailableReason = "dev build";
      return;
    }
    if (!this.options.storeProductId.trim()) {
      this.lastUnavailableReason = "missing windows store product id";
      return;
    }
    if (!this.options.storeUpdateManifestUrl.trim()) {
      this.lastUnavailableReason = "missing windows store update manifest url";
      return;
    }
    if (!this.options.packageIdentity.trim()) {
      this.lastUnavailableReason = "missing packaged windows package identity";
      return;
    }
    try {
      resolveStoreManifestUrl(this.options.storeUpdateManifestUrl);
    } catch {
      this.lastUnavailableReason = "invalid windows store update manifest url";
      return;
    }
    if (!this.options.nativeAddon.getCurrentPackageFamily().trim()) {
      this.lastUnavailableReason = "missing current windows package family";
      return;
    }
    if (this.options.checkIntervalMs > 0) {
      setInterval(() => {
        void this.checkForUpdatesInBackground();
      }, this.options.checkIntervalMs).unref();
    }
    void this.checkForUpdatesInBackground();
  }

  hasUpdater(): boolean {
    return this.lastUnavailableReason == null;
  }

  getUnavailableReason(): string | null {
    return this.lastUnavailableReason;
  }

  getIsUpdateReady(): boolean {
    return this.isUpdateReady;
  }

  async checkForUpdates(): Promise<void> {
    await this.runCheck().catch(() => undefined);
  }

  async checkForUpdatesInBackground(): Promise<void> {
    await this.checkForUpdates();
  }

  async installUpdatesIfAvailable(): Promise<void> {
    if (this.inFlightInstall) {
      await this.inFlightInstall;
      return;
    }
    const installPromise = this.performInstall();
    this.inFlightInstall = installPromise;
    try {
      await installPromise;
    } catch (error) {
      this.setInstallProgressPercent(null);
      windowsStoreUpdaterLogger().error(
        "Failed to install Windows Store update",
        {
          safe: {},
          sensitive: { error },
        },
      );
      await this.showActionError({
        message: `Unable to install the ${app.getName()} update.`,
        detail: "Try checking for updates again.",
      });
    } finally {
      if (this.inFlightInstall === installPromise) this.inFlightInstall = null;
    }
  }

  private async runCheck(): Promise<void> {
    const checkPromise = this.inFlightCheck ?? this.performCheck();
    this.inFlightCheck = checkPromise;
    try {
      await checkPromise;
    } catch (error) {
      this.setUpdateLifecycleState(this.isUpdateReady ? "ready" : "idle");
      windowsStoreUpdaterLogger().error(
        "Failed to check for Windows Store updates",
        {
          safe: {},
          sensitive: { error },
        },
      );
      throw error;
    } finally {
      if (this.inFlightCheck === checkPromise) this.inFlightCheck = null;
    }
  }

  private async performCheck(): Promise<void> {
    if (!this.isUpdateReady) this.setUpdateLifecycleState("checking");
    const manifest = await fetchWindowsStoreManifest({
      fetch: (url) => net.fetch(url),
      storeUpdateManifestUrl: this.options.storeUpdateManifestUrl,
    });
    if (!isBuildVersionComparable(this.options.buildVersion)) {
      windowsStoreUpdaterLogger().warning(
        "Local Windows Store build version is unavailable; bypassing manifest version gate.",
        {
          safe: {
            buildVersion: this.options.buildVersion,
            manifestBuildVersion: manifest?.buildVersion ?? null,
            packageIdentity: this.options.packageIdentity,
          },
          sensitive: {},
        },
      );
    }
    const state = resolveWindowsStoreUpdateState({
      buildVersion: this.options.buildVersion,
      isUpdateReady: this.isUpdateReady,
      lastStoreDetectionAttemptAtMs: this.lastStoreDetectionAttemptAtMs,
      manifest,
      nowMs: Date.now(),
      packageIdentity: this.options.packageIdentity,
      storeProductId: this.options.storeProductId,
    });
    if (state === "up-to-date") {
      this.setUpdateReady(false);
      this.setUpdateLifecycleState("idle");
      return;
    }
    if (state !== "should-check-store") {
      this.setUpdateLifecycleState(state === "update-ready" ? "ready" : "idle");
      return;
    }

    this.lastStoreDetectionAttemptAtMs = Date.now();
    windowsStoreUpdaterLogger().info?.(
      "Checking Windows Store for package updates",
      {
        safe: {
          buildVersion: this.options.buildVersion,
          manifestBuildVersion: manifest?.buildVersion ?? null,
          packageIdentity: this.options.packageIdentity,
        },
        sensitive: {},
      },
    );
    this.setUpdateLifecycleState("downloading");
    const result =
      await this.options.nativeAddon.trySilentDownloadStoreUpdates?.();
    if (result == null) {
      throw Error(
        "Windows Store updater native addon is missing download API.",
      );
    }
    windowsStoreUpdaterLogger().info?.(
      "Windows Store package update check completed",
      {
        safe: {
          canSilentlyDownload: result.canSilentlyDownload,
          completed: result.completed,
          hasUpdate: result.hasUpdate,
          overallState: result.overallState,
        },
        sensitive: {},
      },
    );
    if (!result.hasUpdate || !result.canSilentlyDownload) {
      this.setUpdateReady(false);
      this.setUpdateLifecycleState("idle");
      return;
    }
    if (!result.completed) {
      this.setUpdateReady(false);
      this.setUpdateLifecycleState("idle");
      throw Error(
        `Windows Store update download failed with state '${result.overallState}'.`,
      );
    }
    this.setUpdateReady(true);
    this.setUpdateLifecycleState("ready");
  }

  private async performInstall(): Promise<void> {
    if (!this.isUpdateReady) return;
    this.setUpdateReady(false);
    this.setInstallProgressPercent(0);
    let installRequested = false;
    const notifyInstallRequested = (): void => {
      if (installRequested) return;
      installRequested = true;
      this.options.onInstallUpdatesRequested?.();
    };
    const result =
      await this.options.nativeAddon.trySilentDownloadAndInstallStoreUpdates?.(
        (percent, state) => {
          this.setInstallProgressPercent(percent);
          if (state === "Deploying") notifyInstallRequested();
        },
      );
    if (result == null) {
      throw Error("Windows Store updater native addon is missing install API.");
    }
    this.setUpdateReady(result.hasUpdate);
    if (!result.hasUpdate || !result.canSilentlyDownload) {
      this.setInstallProgressPercent(null);
      return;
    }
    if (result.completed) {
      this.setUpdateReady(false);
      this.setInstallProgressPercent(100);
      notifyInstallRequested();
      return;
    }
    this.setInstallProgressPercent(null);
    throw Error(
      `Windows Store update install failed with state '${result.overallState}'.`,
    );
  }

  private setUpdateReady(isReady: boolean): void {
    if (this.isUpdateReady === isReady) return;
    this.isUpdateReady = isReady;
    this.options.onUpdateReadyChanged?.(isReady);
  }

  private setUpdateLifecycleState(state: UpdateLifecycleState): void {
    this.options.onUpdateLifecycleStateChanged?.(state);
  }

  private setInstallProgressPercent(percent: number | null): void {
    if (this.installProgressPercent === percent) return;
    this.installProgressPercent = percent;
    this.options.onInstallProgressChanged?.(percent);
  }

  private async showActionError({
    message,
    detail,
  }: {
    message: string;
    detail: string;
  }): Promise<void> {
    await dialog.showMessageBox({
      type: "error",
      buttons: ["OK"],
      defaultId: 0,
      noLink: true,
      message,
      detail,
    });
  }
}

function resolveUpdateCheckIntervalMs(): number {
  const value = process.env.SPARKLE_UPDATE_INTERVAL_MINUTES;
  if (!value) return 15 * 60 * 1000;
  const minutes = Number(value);
  return Number.isFinite(minutes)
    ? minutes <= 0
      ? 0
      : minutes * 60 * 1000
    : 15 * 60 * 1000;
}

function compareBuildVersions(left: string, right: string): number {
  const leftParts = parseBuildVersion(left);
  const rightParts = parseBuildVersion(right);
  const length = Math.max(leftParts.length, rightParts.length);
  for (let index = 0; index < length; index += 1) {
    const leftPart = leftParts[index] ?? 0;
    const rightPart = rightParts[index] ?? 0;
    if (leftPart !== rightPart) return leftPart - rightPart;
  }
  return 0;
}

function isBuildVersionComparable(value: string): boolean {
  const parts = value.trim().split(".");
  return parts.length > 1 && parts.every((part) => /^\d+$/.test(part));
}

function parseBuildVersion(value: string): number[] {
  const parts = value.trim().split(".");
  if (parts.some((part) => !/^\d+$/.test(part))) {
    throw Error(`Invalid build version '${value}'.`);
  }
  return parts.map((part) => Number.parseInt(part, 10));
}

function resolveStoreManifestUrl(storeUpdateManifestUrl: string): string {
  const url = new URL(storeUpdateManifestUrl.trim());
  if (url.protocol !== "https:") {
    throw Error("Windows Store update manifest URL must use https transport.");
  }
  return url.toString();
}

async function fetchWindowsStoreManifest({
  fetch,
  storeUpdateManifestUrl,
}: {
  fetch(url: string): Promise<Response>;
  storeUpdateManifestUrl: string;
}): Promise<{
  buildVersion: string;
  packageIdentity: string;
  schemaVersion: number;
  storeProductId: string;
} | null> {
  const manifestUrl = resolveStoreManifestUrl(storeUpdateManifestUrl);
  const response = await fetch(manifestUrl);
  if (response.status === 404) return null;
  if (!response.ok) {
    throw Error(
      `Windows Store update manifest request failed (${response.status} ${response.statusText})`,
    );
  }
  const resolvedUrl = response.url.trim() || manifestUrl;
  if (new URL(resolvedUrl).protocol !== "https:") {
    throw Error("Windows Store update manifest must use https transport.");
  }
  const parsed = JSON.parse(await response.text()) as Record<string, unknown>;
  if (
    typeof parsed.schemaVersion !== "number" ||
    typeof parsed.buildVersion !== "string" ||
    typeof parsed.storeProductId !== "string" ||
    typeof parsed.packageIdentity !== "string"
  ) {
    throw Error("Windows Store update manifest is missing required fields.");
  }
  return {
    buildVersion: parsed.buildVersion.trim(),
    packageIdentity: parsed.packageIdentity.trim(),
    schemaVersion: parsed.schemaVersion,
    storeProductId: parsed.storeProductId.trim(),
  };
}

function resolveWindowsStoreUpdateState({
  buildVersion,
  isUpdateReady,
  lastStoreDetectionAttemptAtMs,
  manifest,
  nowMs,
  packageIdentity,
  storeProductId,
}: {
  buildVersion: string;
  isUpdateReady: boolean;
  lastStoreDetectionAttemptAtMs: number | null;
  manifest: {
    buildVersion: string;
    packageIdentity: string;
    storeProductId: string;
  } | null;
  nowMs: number;
  packageIdentity: string;
  storeProductId: string;
}): "up-to-date" | "update-ready" | "waiting-for-store" | "should-check-store" {
  const hasComparableLocalVersion = isBuildVersionComparable(buildVersion);
  const recentlyCheckedStore =
    lastStoreDetectionAttemptAtMs != null &&
    nowMs - lastStoreDetectionAttemptAtMs < 30 * 60 * 1000;
  if (manifest == null) {
    return hasComparableLocalVersion
      ? "up-to-date"
      : isUpdateReady
        ? "update-ready"
        : recentlyCheckedStore
          ? "waiting-for-store"
          : "should-check-store";
  }
  if (manifest.storeProductId !== storeProductId) {
    throw Error(
      `Windows Store update manifest targets product '${manifest.storeProductId}' instead of '${storeProductId}'.`,
    );
  }
  if (manifest.packageIdentity !== packageIdentity) {
    throw Error(
      `Windows Store update manifest targets package identity '${manifest.packageIdentity}' instead of '${packageIdentity}'.`,
    );
  }
  if (!isBuildVersionComparable(manifest.buildVersion)) {
    throw Error(
      `Windows Store update manifest has invalid build version '${manifest.buildVersion}'.`,
    );
  }
  return hasComparableLocalVersion &&
    compareBuildVersions(manifest.buildVersion, buildVersion) <= 0
    ? "up-to-date"
    : isUpdateReady
      ? "update-ready"
      : recentlyCheckedStore
        ? "waiting-for-store"
        : "should-check-store";
}

function loadOwlUpdatePolicies(): OwlUpdatePolicies | null {
  const linkedBindingFactory = (process as ProcessWithLinkedBinding)
    ._linkedBinding;
  if (typeof linkedBindingFactory !== "function") return null;
  let linkedBinding: unknown;
  try {
    linkedBinding = linkedBindingFactory(
      "electron_browser_owl_update_policies",
    );
  } catch {
    return null;
  }
  if (!isRecord(linkedBinding) || !isRecord(linkedBinding.owlUpdatePolicies)) {
    return null;
  }
  const policies = linkedBinding.owlUpdatePolicies;
  return typeof policies.getRelaunchNotificationPolicy === "function" &&
    typeof policies.on === "function"
    ? (policies as OwlUpdatePolicies)
    : null;
}

function parseRelaunchPolicy(value: unknown): RelaunchPolicy | null {
  if (!isRecord(value)) return null;
  return {
    relaunchFastIfOutdatedDays: nullableInteger(
      value.relaunchFastIfOutdatedDays,
    ),
    relaunchNotification: nullableInteger(value.relaunchNotification),
    relaunchNotificationPeriodMs: nullableInteger(
      value.relaunchNotificationPeriodMs,
    ),
    relaunchWindow: isRecord(value.relaunchWindow)
      ? {
          entries: Array.isArray(value.relaunchWindow.entries)
            ? value.relaunchWindow.entries
                .map(parseRelaunchWindowEntry)
                .filter((entry): entry is RelaunchWindowEntry => entry != null)
            : [],
        }
      : null,
  };
}

function parseRelaunchWindowEntry(value: unknown): RelaunchWindowEntry | null {
  if (!isRecord(value) || !isRecord(value.start)) return null;
  return {
    duration_mins: nullableInteger(value.duration_mins),
    start: {
      hour: nullableInteger(value.start.hour),
      minute: nullableInteger(value.start.minute),
    },
  };
}

function nullableInteger(value: unknown): number | null {
  return typeof value === "number" && Number.isInteger(value) ? value : null;
}

function resolveRelaunchDeadline(
  downloadedAtMs: number,
  policy: RelaunchPolicy,
): number {
  return clampDeadlineToRelaunchWindow(
    downloadedAtMs + relaunchNotificationPeriodMs(policy),
    policy.relaunchWindow,
  );
}

function relaunchNotificationPeriodMs(policy: RelaunchPolicy): number {
  const configuredPeriodMs =
    policy.relaunchNotificationPeriodMs == null ||
    policy.relaunchNotificationPeriodMs < 60 * 60 * 1000
      ? 7 * 24 * 60 * 60 * 1000
      : policy.relaunchNotificationPeriodMs;
  return isCurrentBuildOlderThanDays(policy.relaunchFastIfOutdatedDays)
    ? Math.min(configuredPeriodMs, 2 * 60 * 60 * 1000)
    : configuredPeriodMs;
}

function isCurrentBuildOlderThanDays(days: number | null): boolean {
  if (days == null || days < 7) return false;
  const parseBuildDate = sharedRuntime.fc as
    | ((version: string) => Date | null)
    | undefined;
  const buildDate = parseBuildDate?.(app.getVersion()) ?? null;
  return buildDate
    ? Date.now() - buildDate.getTime() > days * 24 * 60 * 60 * 1000
    : false;
}

function clampDeadlineToRelaunchWindow(
  deadlineAtMs: number,
  relaunchWindow: RelaunchPolicy["relaunchWindow"],
): number {
  const window = firstValidRelaunchWindow(relaunchWindow);
  if (!window || window.durationMs >= 24 * 60 * 60 * 1000) return deadlineAtMs;
  const windowStartMs = relaunchWindowStartForDay(deadlineAtMs, window);
  const windowEndMs = windowStartMs + window.durationMs;
  if (deadlineAtMs >= windowStartMs && deadlineAtMs < windowEndMs) {
    return deadlineAtMs;
  }
  if (deadlineAtMs >= windowEndMs) {
    return randomTimeInsideRelaunchWindow(
      addDaysToTimestamp(windowStartMs, 1),
      window,
    );
  }
  if (
    deadlineAtMs <
    addDaysToTimestamp(windowStartMs, -1) + window.durationMs
  ) {
    return deadlineAtMs;
  }
  return randomTimeInsideRelaunchWindow(windowStartMs, window);
}

function firstValidRelaunchWindow(
  relaunchWindow: RelaunchPolicy["relaunchWindow"],
): { durationMs: number; hour: number; minute: number } | null {
  const entry = relaunchWindow?.entries?.[0];
  if (!entry) return null;
  const { hour, minute } = entry.start;
  const durationMins = entry.duration_mins;
  if (
    hour == null ||
    minute == null ||
    durationMins == null ||
    hour < 0 ||
    hour > 23 ||
    minute < 0 ||
    minute > 59 ||
    durationMins < 1 ||
    durationMins > 1440
  ) {
    return null;
  }
  return { durationMs: durationMins * 60 * 1000, hour, minute };
}

function relaunchWindowStartForDay(
  timestampMs: number,
  window: { hour: number; minute: number },
): number {
  const date = new Date(timestampMs);
  date.setHours(window.hour, window.minute, 0, 0);
  return date.getTime();
}

function addDaysToTimestamp(timestampMs: number, days: number): number {
  const date = new Date(timestampMs);
  date.setDate(date.getDate() + days);
  return date.getTime();
}

function randomTimeInsideRelaunchWindow(
  windowStartMs: number,
  window: { durationMs: number },
): number {
  return windowStartMs + Math.floor(Math.random() * window.durationMs);
}

function isNodeErrorCode(error: unknown, code: string): boolean {
  return isRecord(error) && error.code === code;
}

function getCurrentAppBundlePath(): string {
  let current = process.execPath;
  for (;;) {
    if (path.extname(current) === ".app") return current;
    const parent = path.dirname(current);
    if (parent === current) return process.execPath;
    current = parent;
  }
}

function shouldUseSingleInstanceLock({
  isMacOS,
  isPackaged,
}: {
  isMacOS: boolean;
  isPackaged: boolean;
}): boolean {
  return isPackaged ? !isMacOS : false;
}

function ignoreConsolePipeErrors(
  streams: Array<
    NodeJS.WriteStream & { __codexIgnoreConsoleWriteErrors?: boolean }
  > = [process.stdout, process.stderr],
): void {
  for (const stream of streams) {
    if (stream.__codexIgnoreConsoleWriteErrors) continue;
    stream.__codexIgnoreConsoleWriteErrors = true;
    stream.on("error", (error) => {
      if (!isIgnoredConsoleWriteError(error)) throw error;
    });
  }
}

function installDesktopLogBridge(
  nonFatalReporter: NonFatalReporter,
  structuredLogger: DesktopStructuredLogger,
  appSessionId: string,
  enabledLevels: Iterable<string>,
): void {
  const fileLogger = createFileBasedLogger({ appSessionId, nonFatalReporter });
  const consoleLog = createConsoleLogWriter();
  const enabledLevelSet = new Set(enabledLevels);
  const shouldLog = (level: string) => {
    const runtimeShouldLog = sharedRuntime.h as
      | ((level: string, enabled: Iterable<string>) => boolean)
      | undefined;
    return typeof runtimeShouldLog === "function"
      ? runtimeShouldLog(level, enabledLevels)
      : enabledLevelSet.has(level);
  };
  const logAtLevel = (
    level: string,
    message: string,
    details?: StructuredLogDetails,
  ) => {
    if (!shouldLog(level)) return;
    const normalizedDetails = normalizeStructuredLogDetails(details);
    const flatDetails = {
      ...normalizedDetails.safe,
      ...normalizedDetails.sensitive,
    };
    const printableMessage =
      Object.keys(flatDetails).length === 0
        ? message
        : `${message} ${formatStructuredLogDetails(flatDetails)}`;
    consoleLog(level, printableMessage);
    writeFileLoggerLine(fileLogger, level, printableMessage);
    structuredLogger.log(level, message, normalizedDetails.safe);
  };
  const registeredLogger = {
    trace: (message: string, details?: StructuredLogDetails) =>
      logAtLevel("trace", message, details),
    debug: (message: string, details?: StructuredLogDetails) =>
      logAtLevel("debug", message, details),
    info: (message: string, details?: StructuredLogDetails) =>
      logAtLevel("info", message, details),
    warning: (message: string, details?: StructuredLogDetails) =>
      logAtLevel("warning", message, details),
    error: (message: string, details?: StructuredLogDetails) =>
      logAtLevel("error", message, details),
    log: (level: string, message: string, details?: StructuredLogDetails) =>
      logAtLevel(level, message, details),
    dispose() {},
  };
  const registerLogger = sharedRuntime.ii as
    | ((logger: typeof registeredLogger) => void)
    | undefined;
  registerLogger?.(registeredLogger);
}

function parseCodexDeepLink(value: string): DeepLinkRoute | null {
  if (!value.startsWith("codex://")) return null;
  let url: URL;
  try {
    url = new URL(value);
  } catch {
    return null;
  }
  if (url.protocol !== "codex:") return null;

  switch (url.host) {
    case "plugins":
      return (
        parsePluginInstallDeepLink(url) ??
        parseLocalPluginDetailDeepLink(url) ??
        parsePluginDetailDeepLink(url)
      );
    case "pets":
      return parsePetInstallDeepLink(url);
    case "automations":
      return { kind: "automations" };
    case "codex-app":
      return parseCodexAppDeepLink(url);
    case "connector":
      return parseConnectorDeepLink(url, value);
    case "launch":
      return deepLinkPathSegments(url).length === 0 ? { kind: "launch" } : null;
    case "new":
      return parseNewThreadDeepLink(url);
    case "settings":
      return parseSettingsDeepLink(url);
    case "skills":
      return { kind: "skills" };
    case "threads": {
      if (deepLinkPathSegments(url)[0] === "new") {
        return parseNewThreadDeepLink(url) ?? { kind: "newThread" };
      }
      const parseLocalConversation = sharedRuntime.ha as
        | ((
            url: URL,
            options: { allowExtraPathSegments: boolean },
          ) => object | null)
        | undefined;
      const route = parseLocalConversation?.(url, {
        allowExtraPathSegments: true,
      });
      return route == null ? null : { kind: "localConversation", ...route };
    }
    default:
      return null;
  }
}

function parseProcessDeepLinks(
  argv: string[],
  {
    allowBareWindowsProjectPathArg = false,
  }: { allowBareWindowsProjectPathArg?: boolean } = {},
): DeepLinkRoute[] {
  const routes: DeepLinkRoute[] = [];
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === OPEN_PROJECT_ARG) {
      const projectPath = argv[index + 1]?.trim();
      index += 1;
      if (projectPath) routes.push({ kind: "newThread", path: projectPath });
      continue;
    }
    if (arg.startsWith(`${OPEN_PROJECT_ARG}=`)) {
      const projectPath = arg.slice(`${OPEN_PROJECT_ARG}=`.length).trim();
      if (projectPath) routes.push({ kind: "newThread", path: projectPath });
      continue;
    }
    const deepLinkRoute = parseCodexDeepLink(arg);
    if (deepLinkRoute) {
      routes.push(deepLinkRoute);
      continue;
    }
    if (
      allowBareWindowsProjectPathArg &&
      index > 0 &&
      isWindowsProjectPath(arg)
    ) {
      routes.push({ kind: "newThread", path: arg });
    }
  }
  return routes;
}

function deepLinkPathSegments(url: URL): string[] {
  return url.pathname.split("/").filter(Boolean);
}

function deepLinkSearchParam(url: URL, name: string): string | null {
  const value = url.searchParams.get(name);
  return value == null || value.trim().length === 0 ? null : value;
}

function parseSettingsDeepLink(url: URL): DeepLinkRoute {
  const sectionPath = deepLinkPathSegments(url).join("/");
  const section = SETTINGS_SECTIONS.find(
    (candidate) => candidate === sectionPath,
  );
  if (section == null) return { kind: "settings" };
  if (section === "connections/ssh/add") {
    const name = deepLinkSearchParam(url, "name")?.trim();
    return name == null || !hasOnlyQueryKeys(url, SSH_ADD_QUERY_KEYS)
      ? { kind: "settings", section: "connections/ssh" }
      : {
          kind: "settings",
          section,
          search: `?name=${encodeURIComponent(name)}`,
        };
  }
  return { kind: "settings", section };
}

function parseCodexAppDeepLink(url: URL): DeepLinkRoute | null {
  const [action] = deepLinkPathSegments(url);
  return action === "apply-config" ? { kind: "applyCodexAppConfig" } : null;
}

function parseNewThreadDeepLink(url: URL): DeepLinkRoute | null {
  const prompt = deepLinkSearchParam(url, "prompt");
  const originUrl = deepLinkSearchParam(url, "originUrl");
  const projectPath = deepLinkSearchParam(url, "path");
  return prompt == null && originUrl == null && projectPath == null
    ? null
    : {
        kind: "newThread",
        prompt: prompt ?? undefined,
        originUrl,
        path: projectPath,
      };
}

function parsePluginInstallDeepLink(url: URL): DeepLinkRoute | null {
  const [action, encodedPluginName, extraSegment] = deepLinkPathSegments(url);
  if (action !== "install" || extraSegment != null) return null;
  const pluginName = decodeDeepLinkSegment(encodedPluginName);
  if (pluginName == null || !hasOnlyQueryKeys(url, PLUGIN_INSTALL_QUERY_KEYS)) {
    return null;
  }
  const marketplaceName = deepLinkSearchParam(url, "marketplace")?.trim();
  return isValidMarketplaceName(marketplaceName)
    ? { kind: "pluginInstall", marketplaceName, pluginName }
    : null;
}

function parseLocalPluginDetailDeepLink(url: URL): DeepLinkRoute | null {
  const [encodedPluginName, extraSegment] = deepLinkPathSegments(url);
  if (
    extraSegment != null ||
    !hasOnlyQueryKeys(url, LOCAL_PLUGIN_DETAIL_QUERY_KEYS)
  ) {
    return null;
  }
  const pluginName = decodeDeepLinkSegment(encodedPluginName);
  const marketplacePath = deepLinkSearchParam(url, "marketplacePath")?.trim();
  const mode = deepLinkSearchParam(url, "mode")?.trim();
  return pluginName == null ||
    marketplacePath == null ||
    (mode != null && mode !== "share") ||
    !isSafeMarketplacePath(marketplacePath)
    ? null
    : {
        kind: "localPluginDetail",
        hostId: null,
        marketplacePath,
        pluginName,
        openShareDialog: mode === "share",
      };
}

function parsePluginDetailDeepLink(url: URL): DeepLinkRoute | null {
  const [encodedPluginName, extraSegment] = deepLinkPathSegments(url);
  if (extraSegment != null) return null;
  const pluginName = decodeDeepLinkSegment(encodedPluginName);
  if (pluginName == null) return null;
  const toPluginId = sharedRuntime.da as
    | ((name: string) => unknown)
    | undefined;
  const pluginId = toPluginId?.(pluginName);
  if (pluginId == null) return null;
  return {
    kind: "pluginDetail",
    hostId: deepLinkSearchParam(url, "hostId"),
    pluginId,
    source:
      deepLinkSearchParam(url, "source") === "manage" ? sharedRuntime.aa : null,
  };
}

function parsePetInstallDeepLink(url: URL): DeepLinkRoute | null {
  const [action, extraSegment] = deepLinkPathSegments(url);
  if (
    action !== "install" ||
    extraSegment != null ||
    !hasOnlyQueryKeys(url, PET_INSTALL_QUERY_KEYS)
  ) {
    return null;
  }
  const name = deepLinkSearchParam(url, "name")?.trim();
  const description = deepLinkSearchParam(url, "description")?.trim() ?? null;
  const imageUrl = deepLinkSearchParam(url, "imageUrl");
  if (name == null || imageUrl == null) return null;
  try {
    const parsedImageUrl = new URL(imageUrl);
    return parsedImageUrl.protocol === "https:"
      ? {
          kind: "petInstall",
          name,
          description,
          imageUrl: parsedImageUrl.toString(),
        }
      : null;
  } catch {
    return null;
  }
}

function parseConnectorDeepLink(
  url: URL,
  fullRedirectUrl: string,
): DeepLinkRoute | null {
  const [action] = deepLinkPathSegments(url);
  return action === "oauth_callback"
    ? {
        kind: "connectorOAuthCallback",
        fullRedirectUrl,
        returnTo: deepLinkSearchParam(url, "returnTo"),
      }
    : null;
}

function hasOnlyQueryKeys(url: URL, allowedKeys: ReadonlySet<string>): boolean {
  for (const key of url.searchParams.keys()) {
    if (!allowedKeys.has(key)) return false;
  }
  return true;
}

function decodeDeepLinkSegment(value: string | undefined): string | null {
  if (value == null || value.trim().length === 0) return null;
  try {
    const decoded = decodeURIComponent(value).trim();
    return decoded.length > 0 ? decoded : null;
  } catch {
    return null;
  }
}

function isValidMarketplaceName(value: string | undefined): boolean {
  const validate = sharedRuntime.ma as
    | ((name: string | undefined) => boolean)
    | undefined;
  return typeof validate === "function" ? validate(value) : Boolean(value);
}

function isSafeMarketplacePath(value: string): boolean {
  const isSafePath = sharedRuntime.Ss as
    | ((pathValue: string) => boolean)
    | undefined;
  const isPluginPathBlocked = sharedRuntime.Cs as
    | ((pathValue: string) => boolean)
    | undefined;
  const safe =
    typeof isSafePath === "function" ? isSafePath(value) : value.length > 0;
  const blocked =
    typeof isPluginPathBlocked === "function"
      ? isPluginPathBlocked(value)
      : false;
  return safe && !blocked;
}

function isWindowsProjectPath(value: string): boolean {
  const trimmed = value.trim();
  return (
    trimmed.length > 0 &&
    (/^[a-zA-Z]:[\\/]/.test(trimmed) || trimmed.startsWith("\\\\"))
  );
}

function normalizeError(error: unknown): Error {
  if (error instanceof Error) return error;
  const convert = sharedRuntime.bs as ((error: unknown) => Error) | undefined;
  return typeof convert === "function" ? convert(error) : Error(String(error));
}

function createDeepLinkCoordinator({
  app: electronApp,
  ensurePrimaryWindowVisible,
  errorReporter,
  initialArgv,
  isMacOS,
  navigateToRoute,
}: DeepLinkCoordinatorOptions): DeepLinkCoordinator {
  const pendingRoutes: DeepLinkRoute[] = [];
  const logger =
    typeof sharedRuntime.ei === "function"
      ? (sharedRuntime.ei as () => ReturnType<typeof runtimeLogger>)()
      : runtimeLogger();

  async function flushPendingDeepLinks(): Promise<void> {
    if (pendingRoutes.length === 0 || !electronApp.isReady()) return;
    const targetWindow = await ensurePrimaryWindowVisible();
    if (!targetWindow) return;
    const route = pendingRoutes.at(-1);
    pendingRoutes.length = 0;
    if (route) await navigateToRoute(targetWindow, route);
  }

  function queueRoute(route: DeepLinkRoute): void {
    pendingRoutes.push(route);
    if (!electronApp.isReady()) return;
    flushPendingDeepLinks().catch((error) => {
      errorReporter.reportNonFatal(normalizeError(error), {
        kind: "flush-pending-deep-links",
      });
    });
  }

  function queueCodexDeepLinkUrl(url: string, hostId?: string | null): boolean {
    const route = parseCodexDeepLink(url);
    if (!route) return false;
    queueRoute(
      route.kind === "localPluginDetail" && hostId != null
        ? { ...route, hostId }
        : route,
    );
    return true;
  }

  const allowBareWindowsProjectPathArg = electronApp.isPackaged && !isMacOS;
  function queueInitialArgs(args: string[]): void {
    for (const route of parseProcessDeepLinks(args)) queueRoute(route);
  }

  function queueProcessArgs(args: string[]): boolean {
    const routes = parseProcessDeepLinks(args, {
      allowBareWindowsProjectPathArg,
    });
    for (const route of routes) queueRoute(route);
    return routes.length > 0;
  }

  function registerProtocolClient(): void {
    if (electronApp.isPackaged && process.platform !== "win32") return;
    try {
      if (!electronApp.setAsDefaultProtocolClient("codex")) {
        logger.warning("Failed to register codex:// protocol handler", {
          safe: { isPackaged: electronApp.isPackaged },
          sensitive: {},
        });
      }
    } catch (error) {
      logger.warning("Failed to register codex:// protocol handler", {
        safe: {},
        sensitive: { error },
      });
    }
  }

  if (isMacOS) {
    electronApp.on("open-url", (event, url) => {
      if (queueCodexDeepLinkUrl(url)) event.preventDefault();
    });
  }
  queueInitialArgs(initialArgv);

  return {
    registerProtocolClient,
    queueProcessArgs,
    flushPendingDeepLinks,
    queueCodexDeepLinkUrl,
  };
}

async function verifyStateDatabaseAvailable(): Promise<boolean> {
  const openSqliteDatabase = sharedRuntime.Ar as (() => unknown) | undefined;
  const database = openSqliteDatabase?.();
  if (database == null) {
    throw Error("SQLite is only available in the Electron app.");
  }
  verifySqliteReady(database);
  return true;
}

function extractStateDatabasePathFromError(error: unknown): string | null {
  const message = error instanceof Error ? error.message : String(error);
  return (
    /failed to initialize sqlite state db at (.*?): /.exec(message)?.[1] ?? null
  );
}

async function recoverStateDatabaseAccess({
  databasePath,
  open,
}: {
  databasePath?: string | ((error: unknown) => string | null);
  open(): void | Promise<void>;
}): Promise<boolean> {
  const pathFromError =
    databasePath ??
    ((error: unknown) => extractStateDatabasePathFromError(error));
  return openStateDatabaseWithRecovery({
    databasePath: pathFromError,
    open,
  });
}

async function openStateDatabaseWithRecovery({
  databasePath,
  onBackfillWait,
  open,
  shouldHandleError = () => true,
}: StateDatabaseRecoveryOptions): Promise<boolean> {
  const attemptedRecoveryPaths = new Set<string>();
  let waitedForBackfill = false;
  for (;;) {
    try {
      await open();
      return true;
    } catch (error) {
      if (!shouldHandleError(error)) throw error;
      if (
        !waitedForBackfill &&
        stateDatabaseErrorMessage(error)
          .toLowerCase()
          .includes("timed out waiting for state db backfill")
      ) {
        waitedForBackfill = true;
        await onBackfillWait?.();
        continue;
      }

      const resolvedDatabasePath = resolveRecoveryDatabasePath(
        databasePath,
        error,
      );
      let displayError: unknown = error;
      if (
        resolvedDatabasePath != null &&
        !attemptedRecoveryPaths.has(resolvedDatabasePath) &&
        (isCorruptStateDatabaseError(error, resolvedDatabasePath) ||
          (await databasePathCanBeRecovered(resolvedDatabasePath)))
      ) {
        attemptedRecoveryPaths.add(resolvedDatabasePath);
        try {
          await backUpStateDatabaseFiles(resolvedDatabasePath);
          continue;
        } catch (recoveryError) {
          displayError = { originalError: error, recoveryError };
        }
      }

      for (;;) {
        const action = await showStateDatabaseAccessDialog(
          resolvedDatabasePath,
          displayError,
        );
        if (action === "retry") break;
        if (action === "recover" && resolvedDatabasePath != null) {
          try {
            await backUpStateDatabaseFiles(resolvedDatabasePath);
            break;
          } catch (recoveryError) {
            displayError = {
              originalError: displayError,
              recoveryError,
            };
            continue;
          }
        }
        app.quit();
        return false;
      }
    }
  }
}

async function showStateDatabaseRebuiltDialog(
  databasePath: string,
  backupDirectory: string,
  ownerWindow?: BrowserWindowLike | null,
): Promise<void> {
  const options = {
    type: "info" as const,
    buttons: ["OK"],
    defaultId: 0,
    cancelId: 0,
    message: `${app.getName()} rebuilt its local database.`,
    detail: [
      "Codex detected a damaged local database, moved it into a backup folder, and will continue startup with a fresh database.",
      "",
      `Database path: ${databasePath}`,
      "",
      `Backup folder: ${backupDirectory}`,
    ].join("\n"),
    noLink: true,
  };
  if (ownerWindow == null || ownerWindow.isDestroyed()) {
    await dialog.showMessageBox(options);
    return;
  }
  await dialog.showMessageBox(ownerWindow as never, options);
}

function isSupportedDesktopOpenFile(filePath: string): boolean {
  return new Set([".csv", ".tsv", ".xls", ".xlsm", ".xlsx"]).has(
    path.extname(filePath).toLowerCase(),
  );
}

function extractDesktopOpenFileArgs(
  argv: string[],
  platform: NodeJS.Platform | string = process.platform,
): string[] {
  return argv
    .slice(1)
    .filter(
      (arg) =>
        !arg.startsWith("-") && !arg.toLowerCase().startsWith("codex://"),
    )
    .map((arg) =>
      arg.toLowerCase().startsWith("file://") ? new URL(arg).pathname : arg,
    )
    .filter((arg) =>
      platform === "win32"
        ? path.win32.isAbsolute(arg)
        : path.posix.isAbsolute(arg),
    )
    .filter(isSupportedDesktopOpenFile);
}

function initializeOpenFileQueue(isMacOS: boolean): () => void {
  if (!isMacOS || openFileListener) return () => {};
  openFileListener = (event: Event, filePath: string) => {
    event.preventDefault();
    queueDesktopOpenPaths([filePath]);
  };
  app.on("open-file", openFileListener as never);
  return () => {
    if (!openFileListener) return;
    app.removeListener("open-file", openFileListener as never);
    openFileListener = null;
  };
}

function queueDesktopOpenPaths(pathsToOpen: string[]): boolean {
  if (pathsToOpen.length === 0) return false;
  if (openPathsHandler) {
    openPathsHandler(pathsToOpen);
  } else {
    queuedOpenPaths.push(...pathsToOpen);
  }
  return true;
}

function createDesktopOpenPathHandler({
  handlePaths,
}: {
  handlePaths?: (pathsToOpen: string[]) => void;
} = {}): () => void {
  openPathsHandler =
    handlePaths ?? ((pathsToOpen) => queuedOpenPaths.push(...pathsToOpen));
  const pending = queuedOpenPaths.splice(0, queuedOpenPaths.length);
  if (pending.length > 0) openPathsHandler(pending);
  return () => {
    openPathsHandler = null;
  };
}

function getRemoteWorkspaceRootsForHost(
  store: KeyValueStore,
  hostId: string,
): { roots: string[]; labels: Record<string, string> } {
  const projects = Array.isArray(store.get("REMOTE_PROJECTS"))
    ? (store.get("REMOTE_PROJECTS") as Array<Record<string, unknown>>)
    : [];
  const roots: string[] = [];
  const labels: Record<string, string> = {};
  const seen = new Set<string>();
  for (const project of projects) {
    if (project.hostId !== hostId || typeof project.remotePath !== "string")
      continue;
    const remotePath = project.remotePath.trim();
    if (!remotePath || seen.has(remotePath)) continue;
    roots.push(remotePath);
    seen.add(remotePath);
    if (typeof project.label === "string" && project.label.trim()) {
      labels[remotePath] = project.label.trim();
    }
  }
  return { roots, labels };
}

function readWorkspaceRootState(store: KeyValueStore): WorkspaceRootState {
  const activeRoots = filterStringArray(store.get("ACTIVE_WORKSPACE_ROOTS"));
  const roots = filterStringArray(store.get("WORKSPACE_ROOT_OPTIONS"));
  const labels = filterStringRecord(store.get("WORKSPACE_ROOT_LABELS"));
  return { activeRoots, roots, labels };
}

function getActiveWorkspaceRoots(store: KeyValueStore): string[] {
  return readWorkspaceRootState(store).activeRoots;
}

function getWorkspaceRootOptions(store: KeyValueStore): string[] {
  return readWorkspaceRootState(store).roots;
}

function getWorkspaceRootLabels(store: KeyValueStore): Record<string, string> {
  return readWorkspaceRootState(store).labels;
}

function setActiveWorkspaceRoots(store: KeyValueStore, roots: string[]): void {
  store.set("ACTIVE_WORKSPACE_ROOTS", roots);
}

function setWorkspaceRootOptions(store: KeyValueStore, roots: string[]): void {
  store.set("WORKSPACE_ROOT_OPTIONS", roots);
}

function pushProjectOrder(store: KeyValueStore, projectPath: string): void {
  const existing = filterStringArray(store.get("PROJECT_ORDER"));
  store.set("PROJECT_ORDER", [
    projectPath,
    ...existing.filter((item) => item !== projectPath),
  ]);
}

function updateWorkspaceRootOptions(
  store: KeyValueStore,
  update: (roots: unknown) => string[],
): string[] {
  const roots = update(store.get("WORKSPACE_ROOT_OPTIONS") ?? null);
  store.set("WORKSPACE_ROOT_OPTIONS", roots);
  return roots;
}

function updateWorkspaceRootLabels(
  store: KeyValueStore,
  update: (labels: unknown) => Record<string, string>,
): Record<string, string> {
  const labels = update(store.get("WORKSPACE_ROOT_LABELS") ?? null);
  store.set("WORKSPACE_ROOT_LABELS", labels);
  return labels;
}

function ensureInitialWorkspaceRootSelection(
  store: KeyValueStore,
  fallbackProjects?: Array<{ path: string; name: string }>,
): void {
  if (getActiveWorkspaceRoots(store).length > 0) return;
  const roots = getWorkspaceRootOptions(store);
  if (roots.length > 0) {
    setActiveWorkspaceRoots(store, [roots[0]]);
    return;
  }
  const fallbackRoots = Array.from(
    new Set(
      (fallbackProjects ?? [])
        .map((project) => project.path.trim())
        .filter(Boolean),
    ),
  );
  if (fallbackRoots.length === 0) return;
  setWorkspaceRootOptions(store, fallbackRoots);
  setActiveWorkspaceRoots(store, [fallbackRoots[0]]);
  updateWorkspaceRootLabels(store, (current) => ({
    ...filterStringRecord(current),
    ...Object.fromEntries(
      (fallbackProjects ?? [])
        .map((project) => [project.path, project.name.trim()] as const)
        .filter(([, name]) => Boolean(name)),
    ),
  }));
}

class FileBackedGlobalStateStore implements KeyValueStore {
  private readonly filePath: string;
  private readonly state: Map<string, unknown>;
  private persistQueued: Promise<void> = Promise.resolve();

  constructor(filePath: string) {
    this.filePath = filePath;
    this.state = loadGlobalStateMap(filePath);
  }

  getStateFilePath(): string {
    return this.filePath;
  }

  get(key: string): unknown {
    const storedValue = this.state.get(key);
    return storedValue !== undefined && storedValue != null
      ? storedValue
      : (getDefaultGlobalStateValue(key) ?? null);
  }

  getStored(key: string): unknown {
    return this.state.get(key);
  }

  set(key: string, value: unknown): void {
    if (value === undefined) this.state.delete(key);
    else this.state.set(key, value);
    this.persistForKey(key);
  }

  update(
    key: string,
    updater: (value: unknown | null) => unknown | undefined,
  ): void {
    const nextValue = updater(this.state.has(key) ? this.state.get(key) : null);
    if (nextValue === undefined) this.state.delete(key);
    else this.state.set(key, nextValue);
    this.persistForKey(key);
  }

  delete(key: string): void {
    this.state.delete(key);
    this.persistForKey(key);
  }

  flush(): Promise<void> {
    this.persistQueued = this.persistQueued
      .catch(() => undefined)
      .then(() => persistGlobalStateMap(this.filePath, this.state));
    return this.persistQueued;
  }

  private persistForKey(_key: string): void {
    this.persistQueued = this.persistQueued
      .catch(() => undefined)
      .then(() => persistGlobalStateMap(this.filePath, this.state));
    void this.persistQueued;
  }
}

class FileBackedSettingsStoreBoundary implements SettingsStoreBoundary {
  private readonly filePath: string;
  private readonly globalState: KeyValueStore;
  private state: Map<string, unknown>;
  private pendingLegacyMigrations = new Map<string, unknown>();
  private pendingWrites = new Map<string, unknown>();
  private desktopConfig: Record<string, unknown>;
  private configClient: SettingsConfigClient | null = null;
  private persistQueued: Promise<void> = Promise.resolve();

  constructor(filePath: string, globalState: KeyValueStore) {
    this.filePath = filePath;
    this.globalState = globalState;
    this.desktopConfig = loadDesktopConfigFromToml(filePath);
    this.state = parseDesktopSettings(this.desktopConfig);
    migrateLegacyDesktopSettings(
      this.state,
      this.pendingLegacyMigrations,
      this.globalState,
    );
  }

  getStateFilePath(): string {
    return this.filePath;
  }

  getDesktopConfig(): Record<string, unknown> {
    return this.desktopConfig;
  }

  async initialize(configClient: SettingsConfigClient): Promise<void> {
    this.configClient = configClient;
    this.desktopConfig = readDesktopConfigFromAppServer(
      await configClient.readConfig(),
    );
    const appServerState = parseDesktopSettings(this.desktopConfig);
    const migratedAwayKeys = new Set<string>();

    for (const definition of getDesktopSettingDefinitions()) {
      if (this.pendingWrites.has(definition.key)) continue;
      if (appServerState.has(definition.key)) {
        this.state.set(definition.key, appServerState.get(definition.key));
        if (this.pendingLegacyMigrations.delete(definition.key)) {
          migratedAwayKeys.add(definition.key);
        }
        continue;
      }
      if (!this.pendingLegacyMigrations.has(definition.key)) {
        this.state.delete(definition.key);
      }
    }

    this.migrateExistingUserFollowUpQueueMode();
    clearMigratedLegacySettings(migratedAwayKeys, this.globalState);
    await this.persistPendingSettings();
  }

  get(key: string): unknown {
    return this.state.get(key);
  }

  getEffective(key: string): unknown {
    return this.get(key) ?? getDefaultDesktopSettingValue(key);
  }

  set(key: string, value: unknown): void {
    const parsedValue = parseSettingInputValue(key, value);
    this.state.set(key, parsedValue);
    this.desktopConfig[key] = serializeDesktopSettingValue(key, parsedValue);
    this.pendingWrites.set(key, parsedValue);
    void this.persistPendingSettings();
  }

  flush(): Promise<void> {
    return this.persistQueued.then(() => this.persistPendingSettings());
  }

  private migrateExistingUserFollowUpQueueMode(): void {
    const followUpQueueModeKey = getFollowUpQueueModeSettingKey();
    if (this.state.has(followUpQueueModeKey)) return;
    const persistedAtoms = this.globalState.getStored?.(
      PERSISTED_ATOM_STATE_KEY,
    );
    const projectlessOnboardingCompleted =
      isRecord(persistedAtoms) &&
      persistedAtoms["electron:onboarding-projectless-completed"] === true;
    const hasWorkspaceRoots =
      arrayOfStrings(this.globalState.getStored?.(getWorkspaceRootOptionsKey()))
        .length > 0;
    if (!projectlessOnboardingCompleted && !hasWorkspaceRoots) return;

    this.state.set(followUpQueueModeKey, "queue");
    this.desktopConfig[followUpQueueModeKey] = serializeDesktopSettingValue(
      followUpQueueModeKey,
      "queue",
    );
    this.pendingWrites.set(followUpQueueModeKey, "queue");
  }

  private persistPendingSettings(): Promise<void> {
    if (this.configClient == null) return this.persistQueued;
    this.persistQueued = this.persistQueued
      .catch(() => undefined)
      .then(async () => {
        const legacyMigrationSnapshot = new Map(this.pendingLegacyMigrations);
        const writeSnapshot = new Map(this.pendingWrites);
        const editsByKey = new Map(legacyMigrationSnapshot);
        for (const [key, value] of writeSnapshot) editsByKey.set(key, value);
        if (editsByKey.size === 0) return;

        try {
          await this.configClient?.batchWriteConfigValues({
            edits: [...editsByKey.entries()].map(([key, value]) => ({
              keyPath: `desktop.${key}`,
              mergeStrategy: "replace",
              value: serializeDesktopSettingValue(key, value),
            })),
          });
          for (const [key, value] of legacyMigrationSnapshot) {
            if (this.pendingLegacyMigrations.get(key) === value) {
              this.pendingLegacyMigrations.delete(key);
            }
          }
          for (const [key, value] of writeSnapshot) {
            if (this.pendingWrites.get(key) === value) {
              this.pendingWrites.delete(key);
            }
          }
          clearMigratedLegacySettings(
            new Set(legacyMigrationSnapshot.keys()),
            this.globalState,
          );
        } catch (error) {
          settingsLogger().warning("Failed to persist desktop settings", {
            safe: {},
            sensitive: { error },
          });
        }
      });
    return this.persistQueued;
  }
}

const settingsLogger = loggerFactory("settings-store");

function loadDesktopConfigFromToml(filePath: string): Record<string, unknown> {
  if (!existsSync(filePath)) return {};
  try {
    const parseToml = sharedRuntime.zr as
      | ((text: string) => unknown)
      | undefined;
    if (typeof parseToml !== "function") return {};
    return sanitizeDesktopConfig(
      extractDesktopConfig(parseToml(readFileSync(filePath, "utf8"))),
    );
  } catch (error) {
    settingsLogger().warning(
      "Failed to load desktop settings from config.toml",
      {
        safe: {},
        sensitive: { error },
      },
    );
    return {};
  }
}

function readDesktopConfigFromAppServer(
  config: unknown,
): Record<string, unknown> {
  return sanitizeDesktopConfig(extractDesktopConfig(config));
}

function extractDesktopConfig(config: unknown): Record<string, unknown> {
  return isRecord(config) && isRecord(config.desktop) ? config.desktop : {};
}

function sanitizeDesktopConfig(
  config: Record<string, unknown>,
): Record<string, unknown> {
  const sanitized: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(config)) {
    if (!isJsonConfigValue(value)) {
      settingsLogger().warning("Dropping unsupported desktop config value", {
        safe: { key },
        sensitive: {},
      });
      continue;
    }
    sanitized[key] = value;
  }
  return sanitized;
}

function parseDesktopSettings(
  desktopConfig: Record<string, unknown>,
): Map<string, unknown> {
  const state = new Map<string, unknown>();
  for (const [key, rawValue] of Object.entries(desktopConfig)) {
    const definition = getDesktopSettingDefinition(key);
    if (definition == null) continue;
    const parsedValue = safeParseSettingValue(definition.key, rawValue, true);
    if (parsedValue.success) {
      state.set(definition.key, parsedValue.value);
      continue;
    }
    settingsLogger().warning("Dropping invalid desktop setting", {
      safe: { key },
      sensitive: {},
    });
  }
  return state;
}

function migrateLegacyDesktopSettings(
  state: Map<string, unknown>,
  pendingLegacyMigrations: Map<string, unknown>,
  globalState: KeyValueStore,
): void {
  const persistedAtoms = globalState.getStored?.(PERSISTED_ATOM_STATE_KEY);
  for (const definition of getDesktopSettingDefinitions()) {
    if (state.has(definition.key)) continue;
    const legacyValue = readLegacySettingValue(
      definition,
      globalState,
      persistedAtoms,
    );
    if (legacyValue === undefined) continue;
    const parsedValue = safeParseSettingValue(
      definition.key,
      legacyValue,
      false,
    );
    if (!parsedValue.success) {
      settingsLogger().warning("Dropping invalid migrated setting", {
        safe: { key: definition.key },
        sensitive: {},
      });
      continue;
    }
    state.set(definition.key, parsedValue.value);
    pendingLegacyMigrations.set(definition.key, parsedValue.value);
  }
}

function readLegacySettingValue(
  definition: DesktopSettingDefinition,
  globalState: KeyValueStore,
  persistedAtoms: unknown,
): unknown {
  switch (definition.hostStorage.kind) {
    case "configuration": {
      const storedValue = globalState.getStored?.(definition.hostStorage.key);
      if (storedValue !== undefined) return storedValue;
      if (
        definition.key === getComposerEnterBehaviorSettingKey() &&
        isRecord(persistedAtoms) &&
        Object.prototype.hasOwnProperty.call(persistedAtoms, "enter-behavior")
      ) {
        return persistedAtoms["enter-behavior"];
      }
      if (definition.key === getKeepRemoteControlAwakeSettingKey()) {
        return globalState.getStored?.(getPreventSleepWhileRunningSettingKey());
      }
      return undefined;
    }
    case "global-state":
      return globalState.getStored?.(definition.hostStorage.key);
    case "persisted-atom":
      if (
        !isRecord(persistedAtoms) ||
        !Object.prototype.hasOwnProperty.call(
          persistedAtoms,
          definition.hostStorage.key,
        )
      ) {
        return undefined;
      }
      if (definition.key === getDefaultServiceTierSettingKey()) {
        const readDefaultServiceTier = sharedRuntime.zi as
          | ((atoms: Record<string, unknown>) => unknown)
          | undefined;
        return readDefaultServiceTier?.(persistedAtoms) ?? undefined;
      }
      return persistedAtoms[definition.hostStorage.key];
  }
}

function clearMigratedLegacySettings(
  keys: Set<string>,
  globalState: KeyValueStore,
): void {
  if (keys.size === 0) return;
  const persistedAtoms = globalState.getStored?.(PERSISTED_ATOM_STATE_KEY);
  const nextPersistedAtoms = isRecord(persistedAtoms)
    ? { ...persistedAtoms }
    : null;
  let persistedAtomsChanged = false;

  for (const key of keys) {
    const definition = getDesktopSettingDefinition(key);
    if (definition == null) continue;
    if (
      key === getComposerEnterBehaviorSettingKey() &&
      nextPersistedAtoms != null &&
      Object.prototype.hasOwnProperty.call(nextPersistedAtoms, "enter-behavior")
    ) {
      delete nextPersistedAtoms["enter-behavior"];
      persistedAtomsChanged = true;
    }

    switch (definition.hostStorage.kind) {
      case "configuration":
      case "global-state":
        globalState.delete?.(definition.hostStorage.key);
        break;
      case "persisted-atom":
        if (
          nextPersistedAtoms != null &&
          Object.prototype.hasOwnProperty.call(
            nextPersistedAtoms,
            definition.hostStorage.key,
          )
        ) {
          delete nextPersistedAtoms[definition.hostStorage.key];
          persistedAtomsChanged = true;
        }
        break;
    }
  }

  if (persistedAtomsChanged) {
    globalState.set(
      PERSISTED_ATOM_STATE_KEY,
      Object.keys(nextPersistedAtoms ?? {}).length === 0
        ? undefined
        : (nextPersistedAtoms ?? undefined),
    );
  }
}

function parseSettingInputValue(key: string, value: unknown): unknown {
  const schema = getDesktopSettingSchema(key);
  if (schema == null || typeof schema !== "object") return value;
  const parser = schema as { parse?: (input: unknown) => unknown };
  return typeof parser.parse === "function" ? parser.parse(value) : value;
}

function safeParseSettingValue(
  key: string,
  value: unknown,
  fromToml: boolean,
): { success: true; value: unknown } | { success: false } {
  const schema = getDesktopSettingSchema(key);
  if (schema == null || typeof schema !== "object") {
    return { success: true, value };
  }
  const input = fromToml ? deserializeDesktopSettingValue(key, value) : value;
  const parsed = (
    schema as { safeParse?: (input: unknown) => unknown }
  ).safeParse?.(input);
  if (isRecord(parsed) && parsed.success === true) {
    return { success: true, value: parsed.data };
  }
  if (parsed == null) {
    const parser = schema as { parse?: (input: unknown) => unknown };
    if (typeof parser.parse !== "function") {
      return { success: true, value: input };
    }
    try {
      return {
        success: true,
        value: parser.parse(input),
      };
    } catch {
      return { success: false };
    }
  }
  return { success: false };
}

function serializeDesktopSettingValue(key: string, value: unknown): unknown {
  const schema = getDesktopSettingSchema(key);
  const serialize = sharedRuntime.Di as
    | ((schema: unknown, value: unknown) => unknown)
    | undefined;
  return typeof serialize === "function" && schema != null
    ? serialize(schema, value)
    : value;
}

function deserializeDesktopSettingValue(key: string, value: unknown): unknown {
  const schema = getDesktopSettingSchema(key);
  const deserialize = sharedRuntime.Ei as
    | ((schema: unknown, value: unknown) => unknown)
    | undefined;
  return typeof deserialize === "function" && schema != null
    ? deserialize(schema, value)
    : value;
}

function getDesktopSettingDefinitions(): DesktopSettingDefinition[] {
  const definitions = sharedRuntime.Oi as unknown;
  return Array.isArray(definitions)
    ? definitions.filter(isDesktopSettingDefinition)
    : [];
}

function getDesktopSettingDefinition(
  key: string,
): DesktopSettingDefinition | null {
  const getDefinition = sharedRuntime.Si as
    | ((key: string) => unknown)
    | undefined;
  const definition = getDefinition?.(key);
  return isDesktopSettingDefinition(definition) ? definition : null;
}

function getDesktopSettingSchema(key: string): unknown {
  const getSchema = sharedRuntime.Ci as ((key: string) => unknown) | undefined;
  return getSchema?.(key) ?? getDesktopSettingDefinition(key)?.schema;
}

function isDesktopSettingDefinition(
  value: unknown,
): value is DesktopSettingDefinition {
  return (
    isRecord(value) &&
    typeof value.key === "string" &&
    isRecord(value.hostStorage) &&
    typeof value.hostStorage.kind === "string" &&
    typeof value.hostStorage.key === "string"
  );
}

function isJsonConfigValue(value: unknown): boolean {
  if (
    value == null ||
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean"
  ) {
    return true;
  }
  if (Array.isArray(value)) return value.every(isJsonConfigValue);
  if (!isRecord(value)) return false;
  return Object.values(value).every(isJsonConfigValue);
}

function loadGlobalStateMap(filePath: string): Map<string, unknown> {
  if (!existsSync(filePath)) return new Map();
  const primary = readGlobalStateMap(filePath);
  if (primary != null) return primary;
  const backup = readGlobalStateMap(`${filePath}.bak`);
  if (backup == null) return new Map();
  runtimeLogger().warning("Loaded global state from backup", {
    safe: {},
    sensitive: {},
  });
  return backup;
}

function readGlobalStateMap(filePath: string): Map<string, unknown> | null {
  if (!existsSync(filePath)) return null;
  try {
    const parsed = JSON.parse(readFileSync(filePath, "utf8"));
    if (!isRecord(parsed))
      throw Error("Expected global state to be a JSON object");
    return new Map(Object.entries(parsed));
  } catch (error) {
    runtimeLogger().warning("Failed to load global state", {
      safe: {},
      sensitive: { error },
    });
    return null;
  }
}

function persistGlobalStateMap(
  filePath: string,
  state: Map<string, unknown>,
): void {
  try {
    const serialized = JSON.stringify(Object.fromEntries(state));
    writeFileAtomically(filePath, serialized);
    writeFileAtomically(`${filePath}.bak`, serialized);
  } catch (error) {
    runtimeLogger().warning("Failed to persist global state", {
      safe: {},
      sensitive: { error },
    });
  }
}

function getDefaultGlobalStateValue(key: string): unknown {
  const getDefault = sharedRuntime.Os as
    | ((key: string) => unknown | null | undefined)
    | undefined;
  return getDefault?.(key) ?? null;
}

function getDefaultDesktopSettingValue(key: string): unknown {
  const getSettingDefinition = sharedRuntime.Si as
    | ((key: string) => { default?: unknown } | null | undefined)
    | undefined;
  return getSettingDefinition?.(key)?.default;
}

function getDesktopFirstSeenAtMsKey(): string {
  const desktopStateKeys = sharedRuntime.Ds as
    | { DESKTOP_FIRST_SEEN_AT_MS?: string }
    | undefined;
  return (
    desktopStateKeys?.DESKTOP_FIRST_SEEN_AT_MS ?? "desktop-first-seen-at-ms"
  );
}

function getWorkspaceRootOptionsKey(): string {
  const desktopStateKeys = sharedRuntime.Ds as
    | { WORKSPACE_ROOT_OPTIONS?: string }
    | undefined;
  return (
    desktopStateKeys?.WORKSPACE_ROOT_OPTIONS ?? "electron-saved-workspace-roots"
  );
}

function getAppearanceThemeSettingKey(): string {
  const appearanceSettings = sharedRuntime.Li as
    | { theme?: { key?: string } }
    | undefined;
  return appearanceSettings?.theme?.key ?? "appearanceTheme";
}

function getRunCodexInWslSettingKey(): string {
  const composerSettings = sharedRuntime.Pi as
    | { runCodexInWsl?: { key?: string } }
    | undefined;
  return (
    composerSettings?.runCodexInWsl?.key ?? "runCodexInWindowsSubsystemForLinux"
  );
}

function getFollowUpQueueModeSettingKey(): string {
  const composerSettings = sharedRuntime.Pi as
    | { followUpQueueMode?: { key?: string } }
    | undefined;
  return composerSettings?.followUpQueueMode?.key ?? "followUpQueueMode";
}

function getComposerEnterBehaviorSettingKey(): string {
  const composerSettings = sharedRuntime.Pi as
    | { composerEnterBehavior?: { key?: string } }
    | undefined;
  return (
    composerSettings?.composerEnterBehavior?.key ?? "composerEnterBehavior"
  );
}

function getKeepRemoteControlAwakeSettingKey(): string {
  const composerSettings = sharedRuntime.Pi as
    | { keepRemoteControlAwakeWhilePluggedIn?: { key?: string } }
    | undefined;
  return (
    composerSettings?.keepRemoteControlAwakeWhilePluggedIn?.key ??
    "keepRemoteControlAwakeWhilePluggedIn"
  );
}

function getPreventSleepWhileRunningSettingKey(): string {
  const composerSettings = sharedRuntime.Pi as
    | { preventSleepWhileRunning?: { key?: string } }
    | undefined;
  return (
    composerSettings?.preventSleepWhileRunning?.key ??
    "preventSleepWhileRunning"
  );
}

function getDefaultServiceTierSettingKey(): string {
  const serviceTierSettings = sharedRuntime.ji as
    | { defaultServiceTier?: { key?: string } }
    | undefined;
  return serviceTierSettings?.defaultServiceTier?.key ?? "default-service-tier";
}

function filterStringArray(value: unknown): string[] {
  return Array.isArray(value)
    ? value.filter((item) => typeof item === "string")
    : [];
}

function filterStringRecord(value: unknown): Record<string, string> {
  if (typeof value !== "object" || value == null || Array.isArray(value))
    return {};
  return Object.fromEntries(
    Object.entries(value).filter(([, item]) => typeof item === "string"),
  ) as Record<string, string>;
}

function isIgnoredConsoleWriteError(error: unknown): boolean {
  return (
    typeof error === "object" &&
    error != null &&
    "code" in error &&
    (error.code === "EPIPE" ||
      error.code === "ERR_STREAM_DESTROYED" ||
      error.code === "EBADF")
  );
}

function createConsoleLogWriter(): (level: string, message: string) => void {
  let consoleIsClosed = false;
  return (level, message) => {
    if (consoleIsClosed) return;
    try {
      switch (level) {
        case "error":
          console.error(message);
          break;
        case "warning":
          console.warn(message);
          break;
        case "info":
          console.info(message);
          break;
        case "debug":
          console.debug(message);
          break;
        default:
          console.log(message);
      }
    } catch (error) {
      if (!isIgnoredConsoleWriteError(error)) throw error;
      consoleIsClosed = true;
    }
  };
}

function normalizeStructuredLogDetails(
  details: StructuredLogDetails | null | undefined,
): Required<StructuredLogDetails> {
  return {
    safe: details?.safe ?? {},
    sensitive: details?.sensitive ?? {},
  };
}

function formatStructuredLogDetails(details: Record<string, unknown>): string {
  const runtimeFormatter = sharedRuntime.$r as
    | ((details: Record<string, unknown>) => string)
    | undefined;
  if (typeof runtimeFormatter === "function") return runtimeFormatter(details);
  return JSON.stringify(details);
}

function writeFileLoggerLine(
  fileLogger: LoggerSink,
  level: string,
  message: string,
): void {
  fileLogger.logLine(`${new Date().toISOString()} ${level} ${message}`);
}

function verifySqliteReady(database: unknown): void {
  const candidate = database as {
    prepare?(sql: string): { get(): Record<string, unknown> | undefined };
  };
  if (typeof candidate.prepare !== "function") {
    throw Error("SQLite database handle does not expose prepare().");
  }
  if (
    typeof candidate.prepare("PRAGMA user_version").get()?.user_version !==
    "number"
  ) {
    throw Error("SQLite readiness query returned an unexpected result.");
  }
}

function resolveRecoveryDatabasePath(
  databasePath: StateDatabaseRecoveryOptions["databasePath"],
  error: unknown,
): string | null {
  const value =
    typeof databasePath === "function" ? databasePath(error) : databasePath;
  return value != null &&
    (path.posix.isAbsolute(value) || path.win32.isAbsolute(value))
    ? value
    : null;
}

async function showStateDatabaseAccessDialog(
  databasePath: string | null,
  error: unknown,
): Promise<keyof typeof STATE_DATABASE_DIALOG_LABELS> {
  const actions =
    databasePath == null
      ? (["retry", "quit"] as const)
      : (["retry", "recover", "quit"] as const);
  const response = await dialog.showMessageBox({
    type: "error",
    buttons: actions.map((action) => STATE_DATABASE_DIALOG_LABELS[action]),
    defaultId: 0,
    cancelId: actions.length - 1,
    message: `${app.getName()} cannot access its local database.`,
    detail: [
      "The app cannot finish launching until its SQLite database is accessible.",
      "",
      `Database path: ${databasePath ?? "unavailable in app-server startup error"}`,
      "",
      databasePath == null
        ? `Close other ${app.getName()} applications, then click Retry to check whether access has been restored.`
        : `Close other ${app.getName()} applications, then click Retry to check whether access has been restored. If the database cannot be opened, Back Up and Rebuild moves it aside so the app can create a fresh one.`,
      "",
      `Error: ${stateDatabaseErrorMessage(error)}`,
    ].join("\n"),
    noLink: true,
  });
  return actions[response.response] ?? "quit";
}

async function backUpStateDatabaseFiles(databasePath: string): Promise<string> {
  const databaseDirectory = path.dirname(databasePath);
  const directoryStats = await statOrNull(databaseDirectory);
  if (directoryStats?.isFile())
    return backUpDatabaseDirectory(databaseDirectory);

  const backupDirectory =
    await createDatabaseBackupDirectory(databaseDirectory);
  for (const candidatePath of stateDatabaseFilePaths(databasePath)) {
    if (await pathExists(candidatePath)) {
      await fsPromises.rename(
        candidatePath,
        path.join(backupDirectory, path.basename(candidatePath)),
      );
    }
  }
  await showStateDatabaseRebuiltDialog(databasePath, backupDirectory);
  return backupDirectory;
}

async function backUpDatabaseDirectory(
  databaseDirectory: string,
): Promise<string> {
  const backupDirectory = await createUniqueDirectory(
    path.join(
      path.dirname(databaseDirectory),
      `${path.basename(databaseDirectory)}.${STATE_DATABASE_BACKUP_DIRECTORY}`,
    ),
  );
  await fsPromises.rename(
    databaseDirectory,
    path.join(backupDirectory, path.basename(databaseDirectory)),
  );
  await fsPromises.mkdir(databaseDirectory, { recursive: true });
  await showStateDatabaseRebuiltDialog(databaseDirectory, backupDirectory);
  return backupDirectory;
}

function stateDatabaseFilePaths(databasePath: string): string[] {
  return [databasePath, `${databasePath}-wal`, `${databasePath}-shm`];
}

async function createDatabaseBackupDirectory(
  databaseDirectory: string,
): Promise<string> {
  return createUniqueDirectory(
    path.join(databaseDirectory, STATE_DATABASE_BACKUP_DIRECTORY),
  );
}

async function createUniqueDirectory(parentDirectory: string): Promise<string> {
  await fsPromises.mkdir(parentDirectory, { recursive: true });
  for (let index = 0; ; index += 1) {
    const candidate = path.join(
      parentDirectory,
      `sqlite-${Math.floor(Date.now() / 1000)}-${index}`,
    );
    try {
      await fsPromises.mkdir(candidate, { recursive: false });
      return candidate;
    } catch (error) {
      if (!hasNodeErrorCode(error, "EEXIST")) throw error;
    }
  }
}

async function pathExists(candidatePath: string): Promise<boolean> {
  try {
    await fsPromises.stat(candidatePath);
    return true;
  } catch (error) {
    if (hasNodeErrorCode(error, "ENOENT")) return false;
    throw error;
  }
}

async function databasePathCanBeRecovered(
  databasePath: string,
): Promise<boolean> {
  if ((await statOrNull(path.dirname(databasePath)))?.isFile()) return true;
  return (await statOrNull(databasePath))?.isDirectory() ?? false;
}

async function statOrNull(candidatePath: string): Promise<Stats | null> {
  try {
    return await fsPromises.stat(candidatePath);
  } catch (error) {
    if (hasNodeErrorCode(error, "ENOENT")) return null;
    throw error;
  }
}

function isCorruptStateDatabaseError(
  error: unknown,
  databasePath: string,
): boolean {
  const message = stateDatabaseErrorMessage(error)
    .replaceAll(databasePath, "")
    .toLowerCase();
  return (
    message.includes("database disk image is malformed") ||
    message.includes("file is not a database") ||
    message.includes("malformed") ||
    message.includes("sqlite_corrupt") ||
    message.includes("sqlite_notadb") ||
    message.includes("code: 11") ||
    message.includes("code: 26")
  );
}

function stateDatabaseErrorMessage(error: unknown): string {
  if (isRecoveryErrorPair(error)) {
    return [
      stateDatabaseErrorMessage(error.originalError),
      "",
      `Recovery failed: ${stateDatabaseErrorMessage(error.recoveryError)}`,
    ].join("\n");
  }
  return error instanceof Error && error.message.length > 0
    ? error.message
    : String(error);
}

function isRecoveryErrorPair(error: unknown): error is RecoveryErrorPair {
  return (
    typeof error === "object" &&
    error != null &&
    "originalError" in error &&
    "recoveryError" in error
  );
}

function hasNodeErrorCode(error: unknown, code: string): boolean {
  return (
    typeof error === "object" &&
    error != null &&
    "code" in error &&
    error.code === code
  );
}

export {
  configureNativeIntl,
  AVATAR_OVERLAY_OPEN_CHANNEL,
  loadWindowsUpdaterNativeAddon,
  createDeepLinkCoordinator,
  setInternalUpdateCdnEnabled,
  createDesktopRuntimePaths,
  LOCAL_REMOTE_CONTROL_INSTALLATION_ID_KEY,
  isOwlFeatureEnabled,
  desktopReleaseMetadata,
  OPENAI_MCP_FORM_ELICITATIONS_ENABLED_KEY,
  createWebviewAppUrl,
  applyOwlFeatureBootstrapCache,
  PERSISTED_ATOM_STATE_KEY,
  CHROME_EXTENSION_SYNC_MANAGED_PLUGIN_IDS_KEY,
  INTEGRITY_STATE_ENVELOPE_KEY,
  applyNativeThemeSource,
  LOCAL_REMOTE_CONTROL_ENVIRONMENT_ID_KEY,
  NativeIntlMessages,
  REMOTE_CONTROL_CLIENT_ENROLLMENTS_KEY,
  getCurrentAppBundlePath,
  getDesktopRuntimeState,
  codexAppSessionId,
  createOwlFeatureSettingsApi,
  filePathFromAppFileUrl,
  webviewRootFromModuleDir,
  registerAppProtocolHandler,
  showStateDatabaseRebuiltDialog,
  getRemoteWorkspaceRootsForHost,
  ignoreConsolePipeErrors,
  pushProjectOrder,
  setWorkspaceRootOptions,
  getNativeIntl,
  getNativeIntlLoader,
  updateWorkspaceRootLabels,
  extractStateDatabasePathFromError,
  extractDesktopOpenFileArgs,
  getActiveWorkspaceRoots,
  BROWSER_DOWNLOAD_HISTORY_KEY,
  AVATAR_OVERLAY_BOUNDS_KEY,
  ensureInitialWorkspaceRootSelection,
  isSupportedDesktopOpenFile,
  initializeOpenFileQueue,
  getRuntimeAppName,
  getWorkspaceRootLabels,
  updateWorkspaceRootOptions,
  recoverStateDatabaseAccess,
  createDesktopOpenPathHandler,
  getWorkspaceRootOptions,
  queueDesktopOpenPaths,
  getRuntimeAppBrand,
  setActiveWorkspaceRoots,
  verifyStateDatabaseAvailable,
  installDesktopLogBridge,
  openStateDatabaseWithRecovery,
  shouldUseSingleInstanceLock,
  WORKTREE_CLEANUP_BUFFER_START_MS_KEY,
  configureNativeIntl as $,
  AVATAR_OVERLAY_OPEN_CHANNEL as A,
  loadWindowsUpdaterNativeAddon as B,
  createDeepLinkCoordinator as C,
  setInternalUpdateCdnEnabled as D,
  createDesktopRuntimePaths as E,
  LOCAL_REMOTE_CONTROL_INSTALLATION_ID_KEY as F,
  isOwlFeatureEnabled as G,
  desktopReleaseMetadata as H,
  OPENAI_MCP_FORM_ELICITATIONS_ENABLED_KEY as I,
  createWebviewAppUrl as J,
  applyOwlFeatureBootstrapCache as K,
  PERSISTED_ATOM_STATE_KEY as L,
  CHROME_EXTENSION_SYNC_MANAGED_PLUGIN_IDS_KEY as M,
  INTEGRITY_STATE_ENVELOPE_KEY as N,
  applyNativeThemeSource as O,
  LOCAL_REMOTE_CONTROL_ENVIRONMENT_ID_KEY as P,
  NativeIntlMessages as Q,
  REMOTE_CONTROL_CLIENT_ENROLLMENTS_KEY as R,
  getCurrentAppBundlePath as S,
  getDesktopRuntimeState as T,
  codexAppSessionId as U,
  desktopReleaseMetadata as V,
  createOwlFeatureSettingsApi as W,
  filePathFromAppFileUrl as X,
  webviewRootFromModuleDir as Y,
  registerAppProtocolHandler as Z,
  showStateDatabaseRebuiltDialog as _,
  getRemoteWorkspaceRootsForHost as a,
  ignoreConsolePipeErrors as b,
  pushProjectOrder as c,
  setWorkspaceRootOptions as d,
  getNativeIntl as et,
  updateWorkspaceRootLabels as f,
  extractStateDatabasePathFromError as g,
  extractDesktopOpenFileArgs as h,
  getActiveWorkspaceRoots as i,
  BROWSER_DOWNLOAD_HISTORY_KEY as j,
  AVATAR_OVERLAY_BOUNDS_KEY as k,
  ensureInitialWorkspaceRootSelection as l,
  isSupportedDesktopOpenFile as m,
  initializeOpenFileQueue as n,
  getRuntimeAppName as nt,
  getWorkspaceRootLabels as o,
  updateWorkspaceRootOptions as p,
  recoverStateDatabaseAccess as q,
  createDesktopOpenPathHandler as r,
  getWorkspaceRootOptions as s,
  queueDesktopOpenPaths as t,
  getRuntimeAppBrand as tt,
  setActiveWorkspaceRoots as u,
  verifyStateDatabaseAvailable as v,
  shouldUseSingleInstanceLock as w,
  installDesktopLogBridge as x,
  openStateDatabaseWithRecovery as y,
  WORKTREE_CLEANUP_BUFFER_START_MS_KEY as z,
};
