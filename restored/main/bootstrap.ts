// Restored from ref/.vite/build/bootstrap.js
// Desktop bootstrap: app identity, DMG install flow, single-instance lock, and main handoff.
import { execFile, execFileSync } from "node:child_process";
import * as fs from "node:fs";
import * as path from "node:path";
import { setTimeout as delay } from "node:timers/promises";
import { promisify } from "node:util";
import { app, BrowserWindow, dialog, screen, shell } from "electron";
import { renderInstallerHtml } from "./bootstrap/installer-window-html";
import * as sharedRuntime from "./boundaries/shared-node-runtime.facade";
import {
  BuildFlavor,
  bundleIdentifierForBuildFlavor,
  type BuildFlavorValue,
} from "./logging/file-based-logger";
import {
  getCurrentAppBundlePath,
  getDesktopRuntimeState,
  getNativeIntl,
  getNativeIntlLoader,
  getRuntimeAppBrand,
  ignoreConsolePipeErrors,
  initializeOpenFileQueue,
  shouldUseSingleInstanceLock,
  verifyStateDatabaseAvailable,
} from "./workspace/workspace-root-drop-handler";

type StructuredLogger = {
  info(message: string, details?: unknown): void;
  warning(message: string, details?: unknown): void;
  error(message: string, details?: unknown): void;
};

type NativeIntl = {
  formatMessage(message: {
    messageId: string;
    defaultMessage: string;
    values?: Record<string, unknown>;
  }): string;
};

type InstallerStatus = "failed" | "openFailed" | "opening";
type InstallerWindow = {
  allowClose(): void;
  setStatus(status: InstallerStatus): Promise<void>;
};
type MountedDiskImage = {
  imagePath: string;
  mountPoints: string[];
};
type ParsedHdiutilInfo = {
  images?: Array<{
    "image-path"?: string;
    "system-entities"?: Array<{ "mount-point"?: string }>;
  }>;
};

const execFileAsync = promisify(execFile);
const logger = (
  sharedRuntime.getRootStructuredLogger as () => StructuredLogger
)();
const cloneProcessEnv = sharedRuntime.removeCrashReporterEnv as (
  env: NodeJS.ProcessEnv,
) => NodeJS.ProcessEnv;
const formatAppName = sharedRuntime.formatRuntimeAppName as (
  buildFlavor: BuildFlavorValue,
  brand: unknown,
) => string;

function isRunningTranslatedIntelOnAppleSilicon({
  environment,
  readProcessTranslated = readProcessTranslatedFlag,
}: {
  environment: { arch: string; isPackaged: boolean; platform: NodeJS.Platform };
  readProcessTranslated?: () => boolean;
}): boolean {
  return (
    environment.isPackaged &&
    environment.platform === "darwin" &&
    environment.arch === "x64" &&
    readProcessTranslated()
  );
}

async function confirmIntelBuildOnAppleSilicon({
  appName,
  environment,
  loadNativeIntl = loadConfiguredNativeIntl,
  readProcessTranslated = readProcessTranslatedFlag,
  showMessageBox = (options) => dialog.showMessageBox(options),
}: {
  appName: string;
  environment: { arch: string; isPackaged: boolean; platform: NodeJS.Platform };
  loadNativeIntl?: () => Promise<NativeIntl>;
  readProcessTranslated?: () => boolean;
  showMessageBox?: typeof dialog.showMessageBox;
}): Promise<boolean> {
  if (
    !isRunningTranslatedIntelOnAppleSilicon({
      environment,
      readProcessTranslated,
    })
  ) {
    return true;
  }

  try {
    const nativeIntl = await loadNativeIntl();
    const result = await showMessageBox({
      type: "warning",
      buttons: [
        nativeIntl.formatMessage({
          messageId: "desktop.intelLaunchWarning.quit",
          defaultMessage: "Quit",
        }),
        nativeIntl.formatMessage({
          messageId: "desktop.intelLaunchWarning.continue",
          defaultMessage: "Continue Anyway",
        }),
      ],
      defaultId: 0,
      cancelId: 0,
      noLink: true,
      message: nativeIntl.formatMessage({
        messageId: "desktop.intelLaunchWarning.message",
        defaultMessage:
          "{appName} is running the Intel build on an Apple Silicon Mac",
        values: { appName },
      }),
      detail: nativeIntl.formatMessage({
        messageId: "desktop.intelLaunchWarning.detail",
        defaultMessage:
          "This build works through Rosetta, but the Apple Silicon build launches faster and performs better. Quit now to install the Apple Silicon build, or continue with the Intel build",
      }),
    });
    return result.response === 1;
  } catch (error) {
    logger.warning("Failed to show Intel-on-Apple-Silicon launch warning", {
      safe: { errorName: error instanceof Error ? error.name : null },
    });
    return true;
  }
}

function readProcessTranslatedFlag(): boolean {
  try {
    return (
      execFileSync("sysctl", ["-in", "sysctl.proc_translated"], {
        encoding: "utf8",
        env: cloneProcessEnv(process.env),
        stdio: ["ignore", "pipe", "ignore"],
      }).trim() === "1"
    );
  } catch {
    return false;
  }
}

async function loadConfiguredNativeIntl(): Promise<NativeIntl> {
  try {
    return getNativeIntl() as NativeIntl;
  } catch {
    const loader = getNativeIntlLoader();
    try {
      return (await loader.load("")) as NativeIntl;
    } catch {
      return loader.createDefault() as NativeIntl;
    }
  }
}

function parseChromiumSwitches({
  buildFlavor,
  env,
}: {
  buildFlavor: BuildFlavorValue;
  env: NodeJS.ProcessEnv;
}): Array<{ name: string; value?: string }> {
  const raw = env.CODEX_ELECTRON_CHROMIUM_SWITCHES?.trim();
  if (buildFlavor !== BuildFlavor.Dev || !raw) return [];

  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    throw Error("CODEX_ELECTRON_CHROMIUM_SWITCHES must be valid JSON");
  }
  if (typeof parsed !== "object" || parsed == null || Array.isArray(parsed)) {
    throw Error("CODEX_ELECTRON_CHROMIUM_SWITCHES must be a JSON object");
  }

  return Object.entries(parsed).map(([name, value]) => {
    if (name.length === 0) {
      throw Error(
        "CODEX_ELECTRON_CHROMIUM_SWITCHES contains an empty switch name",
      );
    }
    if (value != null && typeof value !== "string") {
      throw Error(
        `CODEX_ELECTRON_CHROMIUM_SWITCHES value for ${name} must be a string or null`,
      );
    }
    return value == null ? { name } : { name, value };
  });
}

function resolveUserDataPath({
  appDataPath,
  buildFlavor,
  env,
}: {
  appDataPath: string;
  buildFlavor: BuildFlavorValue;
  env: NodeJS.ProcessEnv;
}): string {
  const override = env.CODEX_ELECTRON_USER_DATA_PATH?.trim();
  if (override) return path.resolve(override);

  const flavorRoot = path.join(
    appDataPath,
    bundleIdentifierForBuildFlavor(buildFlavor),
  );
  const agentRunId = env.CODEX_ELECTRON_AGENT_RUN_ID?.trim() || null;
  return buildFlavor === "agent" && agentRunId != null
    ? path.join(flavorRoot, "agent", agentRunId)
    : flavorRoot;
}

async function installFromMountedDmgIfNeeded({
  clearPendingSourceDmgPath = clearPendingSourceDmgPathForCleanup,
  copyAppBundleToApplicationsFolder:
    copyBundleToApplications = copyAppBundleToApplicationsFolder,
  detachSourceDmg: detachMountedSourceDmg = detachSourceDmg,
  getCurrentAppBundlePath: readCurrentAppBundlePath = getCurrentAppBundlePath,
  getPendingSourceDmgPath = getPendingSourceDmgPathForCleanup,
  getSourceDmgPath: readSourceDmgPath = getSourceDmgPath,
  isApplicationsFolderWritable:
    canWriteApplicationsFolder = isApplicationsFolderWritable,
  isInApplicationsFolder = () =>
    isCurrentAppBundleInApplications({
      getCurrentAppBundlePath: readCurrentAppBundlePath,
    }),
  isPackaged = app.isPackaged,
  moveAppBundleToApplicationsFolder:
    moveBundleToApplications = moveAppBundleToApplicationsFolder,
  openInstalledAppBundle: openInstalledBundle = openInstalledAppBundle,
  platform = process.platform,
  quitCurrentApp = () => app.quit(),
  setPendingSourceDmgPath = setPendingSourceDmgPathForCleanup,
  showInstallerWindow: openInstallerWindow = showInstallerWindow,
  sourceDmgExists = fs.existsSync,
  trashItem = (filePath: string) => shell.trashItem(filePath),
}: {
  clearPendingSourceDmgPath?: () => void;
  copyAppBundleToApplicationsFolder?: (
    bundlePath: string,
  ) => Promise<string | null>;
  detachSourceDmg?: (sourceDmgPath: string) => boolean;
  getCurrentAppBundlePath?: () => string;
  getPendingSourceDmgPath?: () => string | null;
  getSourceDmgPath?: () => string | null;
  isApplicationsFolderWritable?: () => boolean;
  isInApplicationsFolder?: () => boolean;
  isPackaged?: boolean;
  moveAppBundleToApplicationsFolder?: (
    allowClose: () => void,
  ) => "moved" | "canceled" | "unavailable";
  openInstalledAppBundle?: (bundlePath: string) => Promise<boolean>;
  platform?: NodeJS.Platform;
  quitCurrentApp?: () => void;
  setPendingSourceDmgPath?: (sourceDmgPath: string) => void;
  showInstallerWindow?: () => Promise<InstallerWindow>;
  sourceDmgExists?: (sourceDmgPath: string) => boolean;
  trashItem?: (sourceDmgPath: string) => Promise<void>;
} = {}): Promise<boolean> {
  if (platform !== "darwin" || !isPackaged) return false;

  if (isInApplicationsFolder()) {
    await cleanupPendingSourceDmg({
      clearPendingSourceDmgPath,
      detachSourceDmg: detachMountedSourceDmg,
      getPendingSourceDmgPath,
      sourceDmgExists,
      trashItem,
    });
    return false;
  }

  const sourceDmgPath = safelyGetSourceDmgPath(readSourceDmgPath);
  if (sourceDmgPath == null) return false;

  const installerWindow = await openInstallerWindow();
  rememberPendingSourceDmgPath({ setPendingSourceDmgPath, sourceDmgPath });

  try {
    switch (moveBundleToApplications(installerWindow.allowClose)) {
      case "moved":
        return true;
      case "canceled":
        clearPendingSourceDmgPath();
        await installerWindow.setStatus("failed");
        return true;
      case "unavailable":
        break;
    }

    if (!canWriteApplicationsFolder()) {
      clearPendingSourceDmgPath();
      await installerWindow.setStatus("failed");
      return true;
    }

    const installedBundlePath = await copyBundleToApplications(
      readCurrentAppBundlePath(),
    );
    if (installedBundlePath == null) {
      clearPendingSourceDmgPath();
      await installerWindow.setStatus("failed");
      return true;
    }

    await installerWindow.setStatus("opening");
    if (await openInstalledBundle(installedBundlePath)) {
      quitCurrentApp();
      return true;
    }

    await installerWindow.setStatus("openFailed");
    return true;
  } catch (error) {
    clearPendingSourceDmgPath();
    logger.warning("Failed to install app in Applications folder", {
      safe: { errorType: error instanceof Error ? error.name : typeof error },
    });
    await installerWindow.setStatus("failed");
    return true;
  }
}

function isCurrentAppBundleInApplications({
  getCurrentAppBundlePath,
}: {
  getCurrentAppBundlePath: () => string;
}): boolean {
  try {
    if ("isInApplicationsFolder" in app) {
      return (
        app as typeof app & { isInApplicationsFolder(): boolean }
      ).isInApplicationsFolder();
    }
  } catch (error) {
    logger.warning("Failed to check app Applications folder status", {
      safe: { errorType: error instanceof Error ? error.name : typeof error },
    });
  }

  try {
    return isPathInside(getCurrentAppBundlePath(), "/Applications");
  } catch {
    return false;
  }
}

function moveAppBundleToApplicationsFolder(
  allowClose: () => void,
): "moved" | "canceled" | "unavailable" {
  if (!("moveToApplicationsFolder" in app)) return "unavailable";

  app.releaseSingleInstanceLock();
  allowClose();
  try {
    const moved = (
      app as typeof app & { moveToApplicationsFolder(): boolean }
    ).moveToApplicationsFolder();
    if (!moved) app.requestSingleInstanceLock();
    return moved ? "moved" : "canceled";
  } catch (error) {
    app.requestSingleInstanceLock();
    throw error;
  }
}

function isApplicationsFolderWritable(): boolean {
  try {
    fs.accessSync("/Applications", fs.constants.W_OK);
    return true;
  } catch {
    return false;
  }
}

async function copyAppBundleToApplicationsFolder(
  sourceBundlePath: string,
): Promise<string | null> {
  if (!isPathInside(process.execPath, sourceBundlePath)) return null;

  const targetBundlePath = path.join(
    "/Applications",
    path.basename(sourceBundlePath),
  );
  const stagingBundlePath = path.join(
    "/Applications",
    `.${path.basename(sourceBundlePath)}.codex-installing-${process.pid}`,
  );

  try {
    fs.rmSync(stagingBundlePath, { force: true, recursive: true });
    await execFileAsync("ditto", [sourceBundlePath, stagingBundlePath]);
    if (fs.existsSync(targetBundlePath))
      await shell.trashItem(targetBundlePath);
    fs.renameSync(stagingBundlePath, targetBundlePath);
    return targetBundlePath;
  } catch (error) {
    removeStagingBundle(stagingBundlePath);
    logger.warning("Failed to copy app bundle to Applications folder", {
      safe: { errorType: error instanceof Error ? error.name : typeof error },
    });
    return null;
  }
}

async function openInstalledAppBundle(bundlePath: string): Promise<boolean> {
  try {
    app.releaseSingleInstanceLock();
    await execFileAsync("open", ["-n", bundlePath]);
    return true;
  } catch (error) {
    logger.warning("Failed to launch installed app bundle", {
      safe: { errorType: error instanceof Error ? error.name : typeof error },
    });
    return false;
  }
}

async function showInstallerWindow(): Promise<InstallerWindow> {
  let canClose = false;
  const window = new BrowserWindow({
    width: 420,
    height: 176,
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    closable: false,
    show: false,
    title: `Installing ${app.getName()}`,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
      spellcheck: false,
      devTools: false,
    },
  });
  const allowClose = () => {
    canClose = true;
    window.setClosable(true);
  };

  window.setMenuBarVisibility(false);
  window.on("close", (event) => {
    if (!canClose) event.preventDefault();
  });
  window.on("closed", () => {
    if (canClose) app.quit();
  });
  window.webContents.setWindowOpenHandler(() => ({ action: "deny" }));
  window.webContents.on("will-navigate", (event) => event.preventDefault());
  await window.loadURL(
    `data:text/html;charset=utf-8,${encodeURIComponent(renderInstallerHtml(app.getName()))}`,
  );

  if (!window.isDestroyed()) {
    positionInstallerWindow(window);
    window.show();
    window.focus();
  }

  return {
    allowClose,
    async setStatus(status) {
      if (window.isDestroyed()) return;
      allowClose();
      await window.webContents.executeJavaScript(
        `window.setInstallerStatus(${JSON.stringify(status)})`,
      );
    },
  };
}

function positionInstallerWindow(window: BrowserWindow): void {
  const cursorPoint = screen.getCursorScreenPoint();
  const { workArea } = screen.getDisplayNearestPoint(cursorPoint);
  const { width, height } = window.getBounds();
  const maxX = workArea.x + Math.max(0, workArea.width - width);
  const maxY = workArea.y + Math.max(0, workArea.height - height);
  const x = Math.min(
    maxX,
    Math.max(workArea.x, Math.round(cursorPoint.x - width / 2)),
  );
  const y = Math.min(
    maxY,
    Math.max(workArea.y, Math.round(cursorPoint.y - height / 2)),
  );
  window.setPosition(x, y, false);
}

function removeStagingBundle(stagingBundlePath: string): void {
  try {
    fs.rmSync(stagingBundlePath, { force: true, recursive: true });
  } catch (error) {
    logger.warning("Failed to remove staging app bundle", {
      safe: { errorType: error instanceof Error ? error.name : typeof error },
    });
  }
}

async function cleanupPendingSourceDmg({
  clearPendingSourceDmgPath,
  detachSourceDmg,
  getPendingSourceDmgPath,
  sourceDmgExists,
  trashItem,
}: {
  clearPendingSourceDmgPath: () => void;
  detachSourceDmg: (sourceDmgPath: string) => boolean;
  getPendingSourceDmgPath: () => string | null;
  sourceDmgExists: (sourceDmgPath: string) => boolean;
  trashItem: (sourceDmgPath: string) => Promise<void>;
}): Promise<void> {
  const pendingSourceDmgPath = getPendingSourceDmgPath();
  if (
    pendingSourceDmgPath != null &&
    (await detachAndTrashSourceDmg({
      detachSourceDmg,
      sourceDmgExists,
      sourceDmgPath: pendingSourceDmgPath,
      trashItem,
    }))
  ) {
    clearPendingSourceDmgPath();
  }
}

function safelyGetSourceDmgPath(
  getSourceDmgPath: () => string | null,
): string | null {
  try {
    return getSourceDmgPath();
  } catch (error) {
    logger.warning("Failed to find app source DMG", {
      safe: { errorType: error instanceof Error ? error.name : typeof error },
    });
    return null;
  }
}

function rememberPendingSourceDmgPath({
  setPendingSourceDmgPath,
  sourceDmgPath,
}: {
  setPendingSourceDmgPath: (sourceDmgPath: string) => void;
  sourceDmgPath: string;
}): void {
  try {
    setPendingSourceDmgPath(sourceDmgPath);
  } catch (error) {
    logger.warning("Failed to remember app source DMG for cleanup", {
      safe: { errorType: error instanceof Error ? error.name : typeof error },
    });
  }
}

async function detachAndTrashSourceDmg({
  detachSourceDmg,
  sourceDmgExists,
  sourceDmgPath,
  trashItem,
}: {
  detachSourceDmg: (sourceDmgPath: string) => boolean;
  sourceDmgExists: (sourceDmgPath: string) => boolean;
  sourceDmgPath: string;
  trashItem: (sourceDmgPath: string) => Promise<void>;
}): Promise<boolean> {
  if (!sourceDmgExists(sourceDmgPath)) return true;

  let detached = false;
  for (let attempt = 1; attempt <= 25; attempt += 1) {
    try {
      if (detachSourceDmg(sourceDmgPath)) {
        detached = true;
        break;
      }
    } catch {}
    if (attempt < 25) await delay(250);
  }

  if (!detached) {
    logger.warning("Failed to detach app source DMG after retries");
    return false;
  }

  try {
    await trashItem(sourceDmgPath);
    return true;
  } catch (error) {
    logger.warning("Failed to move app source DMG to Trash", {
      safe: { errorType: error instanceof Error ? error.name : typeof error },
    });
    return false;
  }
}

function getPendingSourceDmgPathForCleanup(): string | null {
  const filePath = pendingSourceDmgCleanupPath();
  if (!fs.existsSync(filePath)) return null;
  try {
    return parsePendingSourceDmgCleanup(
      JSON.parse(fs.readFileSync(filePath, "utf8")),
    ).sourceDmgPath;
  } catch (error) {
    logger.warning("Failed to read pending app source DMG cleanup", {
      safe: { errorType: error instanceof Error ? error.name : typeof error },
    });
    return null;
  }
}

function setPendingSourceDmgPathForCleanup(sourceDmgPath: string): void {
  const filePath = pendingSourceDmgCleanupPath();
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${JSON.stringify({ sourceDmgPath })}\n`, "utf8");
}

function clearPendingSourceDmgPathForCleanup(): void {
  fs.rmSync(pendingSourceDmgCleanupPath(), { force: true });
}

function pendingSourceDmgCleanupPath(): string {
  return path.join(app.getPath("userData"), "pending-source-dmg-cleanup.json");
}

function parsePendingSourceDmgCleanup(value: unknown): {
  sourceDmgPath: string;
} {
  if (
    typeof value === "object" &&
    value != null &&
    typeof (value as { sourceDmgPath?: unknown }).sourceDmgPath === "string"
  ) {
    return {
      sourceDmgPath: (value as { sourceDmgPath: string }).sourceDmgPath,
    };
  }
  throw Error("Invalid pending source DMG cleanup state");
}

function getSourceDmgPath(): string | null {
  const currentBundlePath = getCurrentAppBundlePath();
  return currentBundlePath.startsWith("/Volumes/")
    ? findSourceDmgForMountedBundle(currentBundlePath, listMountedDiskImages())
    : null;
}

function findSourceDmgForMountedBundle(
  bundlePath: string,
  diskImages: MountedDiskImage[],
): string | null {
  let bestMatch: MountedDiskImage | null = null;
  let bestMountPoint = "";

  for (const diskImage of diskImages) {
    if (path.extname(diskImage.imagePath).toLowerCase() !== ".dmg") continue;
    for (const mountPoint of diskImage.mountPoints) {
      if (
        isPathInside(bundlePath, mountPoint) &&
        mountPoint.length > bestMountPoint.length
      ) {
        bestMatch = diskImage;
        bestMountPoint = mountPoint;
      }
    }
  }

  return bestMatch?.imagePath ?? null;
}

function listMountedDiskImages(): MountedDiskImage[] {
  const hdiutilJson = execFileSync(
    "plutil",
    ["-convert", "json", "-o", "-", "-"],
    {
      encoding: "utf8",
      input: execFileSync("hdiutil", ["info", "-plist"]),
    },
  );
  const parsed = parseHdiutilInfo(JSON.parse(hdiutilJson));
  return (parsed.images ?? []).flatMap((image) => {
    if (image["image-path"] == null) return [];
    const mountPoints = (image["system-entities"] ?? []).flatMap((entity) =>
      entity["mount-point"] == null ? [] : [entity["mount-point"]],
    );
    return mountPoints.length === 0
      ? []
      : [{ imagePath: image["image-path"], mountPoints }];
  });
}

function parseHdiutilInfo(value: unknown): ParsedHdiutilInfo {
  if (typeof value === "object" && value != null) {
    return value as ParsedHdiutilInfo;
  }
  throw Error("Invalid hdiutil info");
}

function detachSourceDmg(sourceDmgPath: string): boolean {
  for (const diskImage of listMountedDiskImages()) {
    if (path.resolve(diskImage.imagePath) !== path.resolve(sourceDmgPath))
      continue;
    for (const mountPoint of diskImage.mountPoints) {
      if (!detachMountPoint(mountPoint)) return false;
    }
  }
  return true;
}

function detachMountPoint(mountPoint: string): boolean {
  try {
    execFileSync("hdiutil", ["detach", mountPoint]);
    return true;
  } catch {
    return false;
  }
}

function isPathInside(candidatePath: string, parentPath: string): boolean {
  const relativePath = path.relative(parentPath, candidatePath);
  return (
    relativePath === "" ||
    (!!relativePath &&
      !relativePath.startsWith("..") &&
      !path.isAbsolute(relativePath))
  );
}

function registerWindowLifecycleQuitBehavior(): void {
  app.on("window-all-closed", () => {
    if (
      (process.platform === "darwin" && !app.isPackaged) ||
      (process.platform !== "darwin" && process.platform !== "win32")
    ) {
      app.quit();
    }
  });
}

const startupFailureActions = {
  "install-update": "Install Update",
  "check-for-updates": "Check for Updates",
  quit: "Quit",
} as const;

async function showStartupFailureDialog(error: unknown): Promise<void> {
  const { sparkleManager } = getDesktopRuntimeState();
  const actions = sparkleManager.getIsUpdateReady()
    ? (["install-update", "quit"] as const)
    : sparkleManager.hasUpdater()
      ? (["check-for-updates", "quit"] as const)
      : (["quit"] as const);

  const result = await dialog.showMessageBox({
    type: "error",
    buttons: actions.map((action) => startupFailureActions[action]),
    defaultId: 0,
    cancelId: actions.length - 1,
    message: `${app.getName()} failed to start.`,
    detail:
      error instanceof Error
        ? error.message
        : "The main desktop app failed during startup.",
    noLink: true,
  });

  switch (actions[result.response] ?? "quit") {
    case "install-update":
      await sparkleManager.installUpdatesIfAvailable();
      return;
    case "check-for-updates":
      await sparkleManager.checkForUpdates();
      return;
    case "quit":
      app.quit();
      return;
  }
}

const isMacOS = process.platform === "darwin";
const buildFlavor = BuildFlavor.resolve();
const appBrand = getRuntimeAppBrand();

for (const chromiumSwitch of parseChromiumSwitches({
  buildFlavor,
  env: process.env,
})) {
  app.commandLine.appendSwitch(chromiumSwitch.name, chromiumSwitch.value);
}

ignoreConsolePipeErrors();
initializeOpenFileQueue(isMacOS);
registerWindowLifecycleQuitBehavior();
app.setName(formatAppName(buildFlavor, appBrand));
app.setPath(
  "userData",
  resolveUserDataPath({
    appDataPath: app.getPath("appData"),
    buildFlavor,
    env: process.env,
  }),
);
if (process.platform === "win32") {
  app.setAppUserModelId(bundleIdentifierForBuildFlavor(buildFlavor));
}

const shouldRequestSingleInstanceLock = shouldUseSingleInstanceLock({
  isMacOS,
  isPackaged: app.isPackaged,
});

if (shouldRequestSingleInstanceLock && !app.requestSingleInstanceLock()) {
  logger.info("Exiting second desktop instance", {
    safe: {
      packaged: app.isPackaged,
      platform: process.platform,
    },
  });
  app.exit(0);
} else {
  const desktopRuntime = getDesktopRuntimeState(buildFlavor);
  if (shouldRequestSingleInstanceLock) {
    app.on("second-instance", (_event, argv) => {
      desktopRuntime.queueSecondInstanceArgs(argv);
    });
  }

  app.whenReady().then(async () => {
    const { desktopSentry, sparkleManager } = desktopRuntime;
    const shouldContinue = await confirmIntelBuildOnAppleSilicon({
      appName: app.getName(),
      environment: {
        arch: process.arch,
        isPackaged: app.isPackaged,
        platform: process.platform,
      },
    });
    if (!shouldContinue) {
      app.quit();
      return;
    }

    if (
      !(await installFromMountedDmgIfNeeded()) &&
      (await verifyStateDatabaseAvailable())
    ) {
      await sparkleManager.initialize();
      try {
        const { runMainAppStartup } = await import("./main");
        await runMainAppStartup();
      } catch (error) {
        for (const window of BrowserWindow.getAllWindows()) {
          if (!window.isDestroyed()) window.destroy();
        }
        logger.error("Desktop bootstrap failed to start the main app", {
          safe: { phase: "bootstrap-import-main" },
        });
        desktopSentry.captureException(error, {
          tags: { phase: "bootstrap-import-main" },
        });
        await showStartupFailureDialog(error);
      }
    }
  });
}
