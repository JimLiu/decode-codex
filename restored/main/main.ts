// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Main Electron startup entry point and top-level app wiring.

import * as path from "node:path";
import { pathToFileURL } from "node:url";
import {
  app,
  BrowserWindow,
  type IpcMainEvent,
  type WebContents,
} from "electron";
import * as sharedRuntime from "./boundaries/shared-node-runtime.facade";
import {
  BuildFlavor,
  shouldUseOwlAppShell,
  type BuildFlavorValue,
} from "./logging/file-based-logger";
import {
  configureNativeIntl,
  createDesktopRuntimePaths,
  createWebviewAppUrl,
  getDesktopRuntimeState,
  getRuntimeAppBrand,
  registerAppProtocolHandler,
  webviewRootFromModuleDir,
} from "./workspace/workspace-root-drop-handler";
import {
  createComputerUseCaptureMainRpcHandler,
  createExecutionHostMainRpcHandler,
  createOpenInShortcutMainRpcHandler,
  invokeWorkerMainRpcHandler,
  isWorkerMainRpcRequest,
} from "./workers/worker-main-rpc";
import { DesktopTrayController } from "./tray/desktop-tray-controller";
import {
  canToggleChronicleSidecar,
  createTrayThreadMenuItem,
  createTrayThreadSection,
  getChronicleTrayMenuLabel,
  getQuitMenuItemLabel,
} from "./tray/tray-menu";
import { isTrayMenuThreadsChangedMessage } from "./tray/tray-types";
import {
  createChronicleRunningTrayIcon,
  getDarwinTrayTemplateIconNames,
  getWindowsTrayIconName,
  loadDesktopTrayIcons,
} from "./tray/tray-icons";
import {
  createQuitConfirmationDetail,
  createRecoverableChildProcessWarningKey,
  disposeDesktopRuntimeBeforeQuit,
  isRecoverableChromiumChildProcessGone,
  registerDesktopAppLifecycleHandlers,
  reportRecoverableChromiumChildProcessGone,
} from "./app/desktop-app-lifecycle";
import {
  createQuitStateController,
  type QuitStateController,
} from "./app/quit-state";
import {
  addWindowsRegistryValue,
  armWindowsCurrentProcessTermination,
  buildWindowsFolderContextMenuEntries,
  getWindowsUpdaterNativeAddon,
  killWindowsProcessDescendants,
  performUpdateInstallExit,
  registerWindowsFolderContextMenu,
} from "./platform/windows-shell-integration";
import {
  centerAboutDialogWindow,
  escapeHtml,
  fitAboutDialogWindowToContent,
  formatReleaseDateFromVersion,
  getDockIconAssetNames,
  getWindowIconBaseName,
  loadAboutDialogIcons,
  loadMacAppIconDataUrl,
  parseReleaseDateFromVersion,
  renderAboutDialogHtml,
  resolveMacBundleIconPath,
  showAboutDialog,
} from "./menus/about-dialog";
import {
  buildNativeContextMenuTemplate,
  registerShowApplicationMenuIpc,
  registerShowContextMenuIpc,
  resizeNativeContextMenuIcon,
  resolveNativeContextMenuIcon,
  SHOW_APPLICATION_MENU_CHANNEL,
  SHOW_CONTEXT_MENU_CHANNEL,
} from "./menus/native-menu-ipc";
import {
  AVATAR_OVERLAY_COMPOSITION_CONNECT_HOST_CHANNEL,
  CONNECT_APP_HOST_CHANNEL,
  createMessagePortRemoteMain,
  MessagePortStringTransport,
  registerAppHostConnectionIpc,
  registerAvatarOverlayCompositionSurfaceHostIpc,
} from "./ipc/app-host-connection-ipc";
import {
  GET_BUILD_FLAVOR_CHANNEL,
  GET_SENTRY_INIT_OPTIONS_CHANNEL,
  GET_SHARED_OBJECT_SNAPSHOT_CHANNEL,
  GET_SYSTEM_THEME_VARIANT_CHANNEL,
  GET_USES_OWL_APP_SHELL_CHANNEL,
  getCurrentSystemThemeVariant,
  registerPreloadStateSyncIpcHandlers,
  registerSystemThemeVariantIpcHandlers,
  SYSTEM_THEME_VARIANT_UPDATED_CHANNEL,
} from "./ipc/preload-state-ipc";
import {
  BROWSER_SIDEBAR_RUNTIME_MESSAGE_CHANNEL,
  GET_FAST_MODE_ROLLOUT_METRICS_CHANNEL,
  MESSAGE_FROM_VIEW_CHANNEL,
  registerBrowserSidebarRuntimeMessageIpcHandler,
  registerDesktopViewIpcHandlers,
  registerFastModeRolloutMetricsIpcHandler,
  registerSentryTestIpcHandler,
  registerViewMessageIpcHandler,
  TRIGGER_SENTRY_TEST_CHANNEL,
} from "./ipc/view-message-ipc";
import {
  createMainWorkerBusController,
  MainWorkerAppEventBus,
  MainWorkerThreadManager,
  WorkerBusMessageHandler,
  WorkerInvocationSampler,
  workerRequestChannel,
  workerResponseChannel,
} from "./workers/main-worker-bus";
import { createStartupTelemetryHelpers } from "./telemetry/startup-telemetry";

type MainStartupPhase = {
  key: string;
  sourceLines: string;
  responsibilities: readonly string[];
};

const DISABLED_CHRONICLE_SIDECAR_CONTROL_STATE = {
  enabled: false,
  running: false,
  state: "disabled",
} as const;

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
  onDownloadProgressChanged(): void;
  onInstallProgressChanged(): void;
  onInstallUpdatesRequested(request?: InstallUpdatesRequest): void;
  onRelaunchNoticeChanged(): void;
  onUpdateLifecycleStateChanged(): void;
  onUpdateReadyChanged(): void;
  isTrustedIpcEvent(event: unknown): boolean;
};
type SparkleManagerBoundary = {
  checkForUpdates(): Promise<void> | void;
  getDownloadProgressPercent(): number | null;
  getInstallProgressPercent(): number | null;
  getIsUpdateReady(): boolean;
  getRelaunchNotice(): RelaunchNotice | null;
  getUnavailableReason(): string | null;
  getUpdateLifecycleState(): UpdateLifecycleState;
  hasUpdater(): boolean;
  installUpdatesIfAvailable(): Promise<boolean> | Promise<void> | void;
  setAutomaticBackgroundDownloadsEnabled(enabled: boolean): void;
};
type AppUpdateViewState = {
  downloadProgressPercent: number | null;
  installProgressPercent: number | null;
  isUpdateReady: boolean;
  lifecycleState: UpdateLifecycleState;
  relaunchNotice: RelaunchNotice | null;
};
type AppQuitBoundary = {
  isPackaged?: boolean;
  quit(): void;
  exit(code: number): void;
};
type LoggerBoundary = {
  info(message: string, details?: unknown): void;
  warning(message: string, details?: unknown): void;
};
type DialogBoundary = {
  showMessageBox(options: {
    type: "info" | "warning";
    title?: string;
    message: string;
    detail?: string;
    buttons?: string[];
    defaultId?: number;
    cancelId?: number;
    noLink?: boolean;
  }): Promise<{ response: number }> | { response: number } | void;
};
type BrowserWindowBoundary = unknown;
type NativeIntlBoundary = {
  formatMessage(message: {
    messageId: string;
    defaultMessage: string;
    values?: Record<string, unknown>;
  }): string;
};
type StructuredRootLogger = {
  info(message: string, details?: unknown): void;
  warning(message: string, details?: unknown): void;
  error(message: string, details?: unknown): void;
  trace(message: string, details?: unknown): void;
};
type MainRuntimeContext = {
  createAppHost(sender: WebContents): unknown;
  getSharedObjectSnapshot(): Record<string, unknown>;
  handleMessage(sender: WebContents, message: unknown): Promise<void> | void;
  registerAppView(
    sender: WebContents,
    remoteMain: unknown,
  ): Promise<void> | void;
};
type MainWindowServices = {
  createFreshWindow(initialRoute?: string): Promise<BrowserWindow | null>;
  ensureWindow(): Promise<BrowserWindow | null>;
  getContextForWebContents(webContents: WebContents): MainRuntimeContext | null;
  getPrimaryWindow(): BrowserWindow | null;
  isTrustedIpcEvent(event: IpcMainEvent): boolean;
  refreshWindowBackdrops(): void;
};

const MAIN_STARTUP_PHASES: readonly MainStartupPhase[] = [
  {
    key: "bootstrap-handoff",
    sourceLines: "109760-109866",
    responsibilities: [
      "read desktop bootstrap handoff",
      "derive build flags and updater/sparkle availability",
      "create desktop error reporter and Datadog log sink",
      "create startup tracer and root disposable set",
    ],
  },
  {
    key: "electron-ready-and-protocols",
    sourceLines: "109867-109898",
    responsibilities: [
      "wait for Electron app readiness",
      "load React devtools in development",
      "register the app:// protocol handler",
      "hydrate the shell environment",
      "create desktop runtime paths and configure feature defaults",
    ],
  },
  {
    key: "window-services-and-theme-ipc",
    sourceLines: "109899-109981",
    responsibilities: [
      "create avatar overlay integration",
      "create window services and trusted IPC predicate",
      "register system theme sync IPC",
      "install native theme update broadcasts",
      "prepare updater quit behavior",
    ],
  },
  {
    key: "worker-and-window-context",
    sourceLines: "109982-110153",
    responsibilities: [
      "create desktop worker manager",
      "create app window context and browser sidebar suppression",
      "wire Sparkle bridge callbacks",
      "configure deep links, application menu refresh, and worker main-RPC handlers",
      "register worker bus message handlers",
    ],
  },
  {
    key: "second-instance-dock-and-tray",
    sourceLines: "110154-110277",
    responsibilities: [
      "focus or create the primary window for second-instance launches",
      "route queued process arguments through deep links",
      "create macOS dock recent-thread controller",
      "set up tray controls and Chronicle sidecar toggles",
    ],
  },
  {
    key: "computer-use-and-bundled-plugins",
    sourceLines: "110278-110430",
    responsibilities: [
      "create Computer Use controller and analytics forwarding",
      "register turn-cleanup disposables",
      "create bundled plugin reconciler",
      "sync macOS Computer Use service bundle",
      "start internal node_repl host services when available",
      "create browser native-pipe feature controller",
    ],
  },
  {
    key: "feature-availability-and-ipc",
    sourceLines: "110431-110533",
    responsibilities: [
      "apply feature availability updates",
      "register desktop IPC handlers",
      "register quit confirmation and updater-exit handling",
      "wire native context menu icon search roots",
    ],
  },
  {
    key: "sqlite-config-and-settings",
    sourceLines: "110534-110626",
    responsibilities: [
      "apply Codex app config from disk",
      "open local app-server SQLite through recovery/backfill flow",
      "enable app-server SQLite recovery UX",
      "initialize desktop settings from the app-server connection",
      "replace the initial updater quit handler with the full cleanup path",
    ],
  },
  {
    key: "automation-window-context-and-first-window",
    sourceLines: "110627-110714",
    responsibilities: [
      "create automation scheduler and automation event controller",
      "register Windows folder context menu",
      "refresh the application menu",
      "wait for bundled plugin reconciliation",
      "ensure and focus the first window",
      "flush pending deep links and finish startup tracing",
    ],
  },
];

function createAppUpdateViewState(
  sparkleManager: SparkleManagerBoundary,
): AppUpdateViewState {
  return {
    downloadProgressPercent: sparkleManager.getDownloadProgressPercent(),
    installProgressPercent: sparkleManager.getInstallProgressPercent(),
    isUpdateReady: sparkleManager.getIsUpdateReady(),
    lifecycleState: sparkleManager.getUpdateLifecycleState(),
    relaunchNotice: sparkleManager.getRelaunchNotice(),
  };
}

function createSparkleBridgeHandlers({
  broadcastAppUpdateState,
  isTrustedIpcEvent,
  isWindows,
  requestInstallUpdates,
}: {
  broadcastAppUpdateState(): void;
  isTrustedIpcEvent(event: unknown): boolean;
  isWindows: boolean;
  requestInstallUpdates(request?: InstallUpdatesRequest): void;
}): SparkleBridgeHandlers {
  return {
    onDownloadProgressChanged: broadcastAppUpdateState,
    onInstallProgressChanged: () => {
      if (isWindows) broadcastAppUpdateState();
    },
    onInstallUpdatesRequested: requestInstallUpdates,
    onRelaunchNoticeChanged: broadcastAppUpdateState,
    onUpdateLifecycleStateChanged: broadcastAppUpdateState,
    onUpdateReadyChanged: broadcastAppUpdateState,
    isTrustedIpcEvent,
  };
}

function createInitialUpdateInstallRequestHandler({
  app,
  quitState,
}: {
  app: Pick<AppQuitBoundary, "quit">;
  quitState: Pick<QuitStateController, "allowQuitTemporarilyForUpdateInstall">;
}): (request?: InstallUpdatesRequest) => void {
  return (request) => {
    quitState.allowQuitTemporarilyForUpdateInstall();
    if (request?.quitImmediately === false) return;
    app.quit();
  };
}

function createPostAppServerUpdateInstallRequestHandler({
  app,
  cleanupBeforeImmediateExit,
  isWindows,
  markAppQuitting,
  quitState,
}: {
  app: AppQuitBoundary;
  cleanupBeforeImmediateExit(): void;
  isWindows: boolean;
  markAppQuitting(): void;
  quitState: Pick<QuitStateController, "allowQuitTemporarilyForUpdateInstall">;
}): (request?: InstallUpdatesRequest) => void {
  return (request) => {
    if (request?.quitImmediately === false) {
      quitState.allowQuitTemporarilyForUpdateInstall({
        allowWithoutPrompt: true,
        skipDrainBeforeQuit: true,
      });
      return;
    }
    if (isWindows && app.isPackaged) {
      markAppQuitting();
      cleanupBeforeImmediateExit();
      app.exit(0);
      return;
    }
    quitState.allowQuitTemporarilyForUpdateInstall();
    app.quit();
  };
}

function applyElectronSparkleGateChange({
  disableSparkleAutodownload,
  setAutomaticBackgroundDownloadsEnabled,
}: {
  disableSparkleAutodownload: boolean;
  setAutomaticBackgroundDownloadsEnabled(enabled: boolean): void;
}): void {
  setAutomaticBackgroundDownloadsEnabled(!disableSparkleAutodownload);
}

function createCheckForUpdatesMenuItem({
  dialog,
  logger,
  sparkleManager,
}: {
  dialog: DialogBoundary;
  logger: LoggerBoundary;
  sparkleManager: Pick<
    SparkleManagerBoundary,
    "checkForUpdates" | "getUnavailableReason" | "hasUpdater"
  >;
}): { label: string; enabled: true; click(): void } {
  return {
    label: "Check for Updates...",
    enabled: true,
    click: () => {
      logger.info("Check for updates requested via menu.");
      if (!sparkleManager.hasUpdater()) {
        const reason = sparkleManager.getUnavailableReason() ?? "unknown";
        logger.warning("Desktop updater unavailable; init likely skipped.", {
          safe: { reason },
          sensitive: {},
        });
        void dialog.showMessageBox({
          type: "info",
          title: "Updates Unavailable",
          message: "Automatic updates are unavailable right now.",
          detail: `Updater initialization skipped: ${reason}`,
        });
        return;
      }
      void sparkleManager.checkForUpdates();
    },
  };
}

function createAppUpdateActions({
  confirmInstallOnMac,
  dialog,
  getPrimaryWindow,
  intl,
  isMacOS,
  isQuitConfirmationRequired,
  runtimeAppName,
  sparkleManager,
}: {
  confirmInstallOnMac: boolean;
  dialog: DialogBoundary & {
    showMessageBox(
      window: BrowserWindowBoundary,
      options: Parameters<DialogBoundary["showMessageBox"]>[0],
    ): Promise<{ response: number }> | { response: number } | void;
  };
  getPrimaryWindow(): BrowserWindowBoundary | null;
  intl: NativeIntlBoundary;
  isMacOS: boolean;
  isQuitConfirmationRequired(): boolean;
  runtimeAppName: string;
  sparkleManager: Pick<
    SparkleManagerBoundary,
    "checkForUpdates" | "installUpdatesIfAvailable"
  >;
}): {
  checkForUpdates(): void;
  installUpdate(originWindow?: BrowserWindowBoundary | null): Promise<void>;
} {
  return {
    checkForUpdates: () => {
      void sparkleManager.checkForUpdates();
    },
    installUpdate: async (originWindow = null) => {
      if (isMacOS && confirmInstallOnMac && isQuitConfirmationRequired()) {
        const window = originWindow ?? getPrimaryWindow();
        const title = intl.formatMessage({
          messageId: "appHeader.installUpdate.confirmTitle",
          defaultMessage: "Update {appName} now?",
          values: { appName: runtimeAppName },
        });
        const options = {
          type: "warning" as const,
          buttons: [
            intl.formatMessage({
              messageId: "appHeader.installUpdate.confirmInstall",
              defaultMessage: "Update",
            }),
            intl.formatMessage({
              messageId: "appHeader.installUpdate.confirmCancel",
              defaultMessage: "Cancel",
            }),
          ],
          defaultId: 0,
          cancelId: 1,
          noLink: true,
          title,
          message: title,
          detail: intl.formatMessage({
            messageId: "appHeader.installUpdate.confirmSubtitle",
            defaultMessage:
              "{appName} will quit to install the update, which will interrupt active local sessions on this machine",
            values: { appName: runtimeAppName },
          }),
        };
        const result =
          window == null
            ? await dialog.showMessageBox(options)
            : await dialog.showMessageBox(window, options);
        if (result && result.response !== 0) return;
      }
      void sparkleManager.installUpdatesIfAvailable();
    },
  };
}

function shouldHandleStateDatabaseOpenError(error: unknown): boolean {
  const message = (
    error instanceof Error ? error.message : String(error)
  ).toLowerCase();
  return (
    message.includes("sqlite state db") ||
    message.includes("state db backfill") ||
    message.includes("sqlite") ||
    message.includes("database")
  );
}

class BasicMainWindowServices implements MainWindowServices {
  private primaryWindow: BrowserWindow | null = null;
  private readonly context: MainRuntimeContext = {
    createAppHost: () => ({}),
    getSharedObjectSnapshot: () => ({}),
    handleMessage: () => {},
    registerAppView: () => {},
  };

  constructor(
    private readonly options: {
      allowDevtools: boolean;
      moduleDir: string;
      preloadPath: string;
    },
  ) {}

  async ensureWindow(): Promise<BrowserWindow | null> {
    const existing = this.getPrimaryWindow();
    if (existing != null) {
      this.showWindow(existing);
      return existing;
    }
    return this.createFreshWindow("/");
  }

  async createFreshWindow(initialRoute = "/"): Promise<BrowserWindow | null> {
    const window = new BrowserWindow({
      width: 1280,
      height: 820,
      title: app.getName(),
      show: false,
      webPreferences: {
        contextIsolation: true,
        devTools: this.options.allowDevtools,
        nodeIntegration: false,
        preload: this.options.preloadPath,
        spellcheck: true,
      },
    });
    this.primaryWindow = window;
    window.on("closed", () => {
      if (this.primaryWindow === window) this.primaryWindow = null;
    });
    await window.loadURL(this.resolveInitialUrl(initialRoute));
    this.showWindow(window);
    return window.isDestroyed() ? null : window;
  }

  getContextForWebContents(
    webContents: WebContents,
  ): MainRuntimeContext | null {
    const window = this.getPrimaryWindow();
    return window?.webContents === webContents ? this.context : null;
  }

  getPrimaryWindow(): BrowserWindow | null {
    return this.primaryWindow != null && !this.primaryWindow.isDestroyed()
      ? this.primaryWindow
      : null;
  }

  isTrustedIpcEvent(event: IpcMainEvent): boolean {
    return this.getContextForWebContents(event.sender) != null;
  }

  refreshWindowBackdrops(): void {}

  private showWindow(window: BrowserWindow): void {
    if (window.isDestroyed()) return;
    if (window.isMinimized()) window.restore();
    window.show();
    window.focus();
  }

  private resolveInitialUrl(initialRoute: string): string {
    if (!app.isPackaged && process.env.ELECTRON_RENDERER_URL) {
      const url = new URL(process.env.ELECTRON_RENDERER_URL);
      if (initialRoute !== "/")
        url.searchParams.set("initialRoute", initialRoute);
      return url.toString();
    }
    const indexPath = path.join(
      webviewRootFromModuleDir(this.options.moduleDir),
      "index.html",
    );
    try {
      return createWebviewAppUrl(initialRoute === "/" ? null : initialRoute);
    } catch {
      return pathToFileURL(indexPath).toString();
    }
  }
}

function createDesktopErrorReporter(desktopSentry: {
  captureException(error: unknown, context?: unknown): void;
}) {
  return {
    reportFatal(error: unknown, details: Record<string, unknown>): void {
      desktopSentry.captureException(error, {
        level: "fatal",
        ...(details ?? {}),
      });
    },
    reportNonFatal(error: unknown, details: Record<string, unknown>): void {
      desktopSentry.captureException(error, {
        level: "error",
        ...(details ?? {}),
      });
    },
  };
}

function registerMainIpcHandlers({
  buildFlavor,
  desktopSentry,
  disposables,
  isTrustedIpcEvent,
  logger,
  paths,
  usesOwlAppShell,
  windows,
}: {
  buildFlavor: BuildFlavorValue;
  desktopSentry: { captureException(error: unknown, context?: unknown): void };
  disposables: { add(dispose: () => void): void };
  isTrustedIpcEvent(event: IpcMainEvent): boolean;
  logger: StructuredRootLogger;
  paths: ReturnType<typeof createDesktopRuntimePaths>;
  usesOwlAppShell: boolean;
  windows: MainWindowServices;
}): void {
  disposables.add(
    registerPreloadStateSyncIpcHandlers({
      buildFlavor,
      getContextForWebContents: (webContents) =>
        windows.getContextForWebContents(webContents),
      isTrustedIpcEvent,
      sentryInitOptions: {},
      usesOwlAppShell,
    }),
  );
  disposables.add(
    registerSystemThemeVariantIpcHandlers({
      isTrustedIpcEvent,
      refreshWindowBackdrops: () => windows.refreshWindowBackdrops(),
    }),
  );
  disposables.add(registerShowApplicationMenuIpc(isTrustedIpcEvent));
  disposables.add(
    registerShowContextMenuIpc(
      [
        path.join(paths.repoRoot, "webview", "public"),
        path.join(paths.desktopRoot, "webview"),
      ],
      isTrustedIpcEvent,
    ),
  );
  disposables.add(
    registerSentryTestIpcHandler({
      desktopSentry,
      isTrustedIpcEvent,
    }),
  );
  disposables.add(
    registerFastModeRolloutMetricsIpcHandler({
      codexHome: paths.codexHome,
      getFastModeRolloutMetrics: () => null,
      isTrustedIpcEvent,
    }),
  );
  disposables.add(
    registerAppHostConnectionIpc({
      createRemoteMain: () => ({}),
      getContextForWebContents: (webContents) =>
        windows.getContextForWebContents(webContents),
      isTrustedIpcEvent,
      logger,
    }),
  );
}

async function runMainAppStartup(): Promise<void> {
  const runtime = getDesktopRuntimeState();
  const buildFlavor = runtime.buildFlavor as BuildFlavorValue;
  const rootLogger = (
    sharedRuntime.getRootStructuredLogger as () => StructuredRootLogger
  )();
  const startupLogger = (
    sharedRuntime.createScopedStructuredLogger as (
      scope: string,
    ) => StructuredRootLogger
  )("startup");
  const errorReporter = createDesktopErrorReporter(runtime.desktopSentry);
  const telemetry = createStartupTelemetryHelpers({
    errorReporter,
    rootLogger,
    startedAtMs: runtime.startedAtMs,
    startupLogger,
  });

  const enableSparkle = BuildFlavor.shouldIncludeSparkle(
    buildFlavor,
    process.platform,
    process.env,
  );
  const enableUpdater = BuildFlavor.shouldIncludeUpdater(
    buildFlavor,
    process.platform,
    process.env,
  );
  const allowDevtools = BuildFlavor.allowDevtools(buildFlavor);
  const allowInspectElement =
    buildFlavor === BuildFlavor.Dev || buildFlavor === BuildFlavor.Agent;
  const allowDebugMenu = BuildFlavor.allowDebugMenu(buildFlavor);
  telemetry.logLaunch({
    agentRunId: process.env.CODEX_ELECTRON_AGENT_RUN_ID?.trim() || null,
    allowDebugMenu,
    allowDevtools,
    allowInspectElement,
    buildFlavor,
    enableSparkle,
    enableUpdater,
    nodeEnv: process.env.NODE_ENV,
    packaged: app.isPackaged,
    platform: process.platform,
  });

  let phaseStartedAtMs = Date.now();
  await app.whenReady();
  telemetry.traceStartupPhase("main app.whenReady resolved", phaseStartedAtMs);

  phaseStartedAtMs = Date.now();
  registerAppProtocolHandler(webviewRootFromModuleDir(__dirname));
  telemetry.traceStartupPhase("registered app protocol", phaseStartedAtMs);

  phaseStartedAtMs = Date.now();
  const paths = createDesktopRuntimePaths({ moduleDir: __dirname });
  await configureNativeIntl(paths.repoRoot);
  telemetry.traceStartupPhase(
    "desktop runtime paths initialized",
    phaseStartedAtMs,
  );

  const disposables = new Set<() => void>();
  const addDisposable = (dispose: () => void): void => {
    disposables.add(dispose);
  };
  const disposeAll = (): void => {
    for (const dispose of Array.from(disposables).reverse()) {
      try {
        dispose();
      } catch (error) {
        rootLogger.warning("Main startup disposable failed", {
          safe: {},
          sensitive: { error },
        });
      }
    }
    disposables.clear();
  };
  app.once("before-quit", disposeAll);

  const windowServices = new BasicMainWindowServices({
    allowDevtools,
    moduleDir: __dirname,
    preloadPath: paths.preloadPath,
  });
  const isTrustedIpcEvent = (event: IpcMainEvent): boolean =>
    windowServices.isTrustedIpcEvent(event);
  runtime.setSparkleBridgeHandlers(
    createSparkleBridgeHandlers({
      broadcastAppUpdateState: () => {},
      isTrustedIpcEvent,
      isWindows: process.platform === "win32",
      requestInstallUpdates: createInitialUpdateInstallRequestHandler({
        app,
        quitState: createQuitStateController(),
      }),
    }),
  );
  registerMainIpcHandlers({
    buildFlavor,
    desktopSentry: runtime.desktopSentry,
    disposables: { add: addDisposable },
    isTrustedIpcEvent,
    logger: rootLogger,
    paths,
    usesOwlAppShell: shouldUseOwlAppShell(),
    windows: windowServices,
  });
  runtime.setSecondInstanceArgsHandler(() => {
    void windowServices.ensureWindow();
  });

  phaseStartedAtMs = Date.now();
  const window = await windowServices.ensureWindow();
  telemetry.traceStartupPhase("window ensured", phaseStartedAtMs, {
    windowVisible: window?.isVisible() ?? false,
  });
  telemetry.traceStartupPhase("startup complete", runtime.startedAtMs, {
    appBrand: String(getRuntimeAppBrand() ?? "codex"),
  });
}

export { runMainAppStartup };
