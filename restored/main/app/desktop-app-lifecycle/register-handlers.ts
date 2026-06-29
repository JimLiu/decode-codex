// Restored from ref/.vite/build/main-r5HnecX_.js
// Electron app lifecycle event registration and coordinated quit draining.

import { app, BrowserWindow, dialog } from "electron";
import {
  isRecoverableChromiumChildProcessGone,
  reportRecoverableChromiumChildProcessGone,
} from "./child-process-gone";
import {
  createQuitConfirmationDetail,
  disposeDesktopRuntimeBeforeQuit,
} from "./quit";
import type {
  AppForegroundEventBus,
  ApplicationMenuManager,
  AppWindowLifecycleController,
  ChildProcessGoneDetails,
  DisposableRuntimeService,
  FatalErrorReporter,
  FlushableStore,
  PreventableElectronEvent,
  QuitStateController,
  StructuredLogger,
} from "./types";

export function registerDesktopAppLifecycleHandlers({
  appEvent,
  appInstance = app,
  applicationMenuManager,
  browserWindowApi = BrowserWindow,
  dialogService = dialog,
  disableQuitConfirmationPrompt,
  disposables,
  ensureWindow,
  errorReporter,
  flushAndDisposeContext,
  getHasEnabledAutomations,
  getHasInProgressLocalConversation,
  globalDictationLifecycleManager,
  globalState,
  hotkeyWindowLifecycleManager,
  isPrivacySettingsTerminationRequest = () => false,
  isWindows,
  logger,
  quitState,
  settingsStore,
  windows,
}: {
  appEvent: AppForegroundEventBus;
  appInstance?: {
    getName(): string;
    on(event: "activate", listener: () => void): void;
    on(
      event: "before-quit" | "will-quit",
      listener: (event: PreventableElectronEvent) => void,
    ): void;
    on(
      event: "browser-window-blur" | "browser-window-focus",
      listener: () => void,
    ): void;
    on(
      event: "child-process-gone",
      listener: (event: unknown, details: ChildProcessGoneDetails) => void,
    ): void;
    off(event: "activate", listener: () => void): void;
    off(
      event: "before-quit" | "will-quit",
      listener: (event: PreventableElectronEvent) => void,
    ): void;
    off(
      event: "browser-window-blur" | "browser-window-focus",
      listener: () => void,
    ): void;
    off(
      event: "child-process-gone",
      listener: (event: unknown, details: ChildProcessGoneDetails) => void,
    ): void;
    quit(): void;
  };
  applicationMenuManager: ApplicationMenuManager;
  browserWindowApi?: {
    getFocusedWindow(): unknown;
  };
  dialogService?: {
    showMessageBoxSync(options: {
      buttons: string[];
      cancelId: number;
      defaultId: number;
      detail: string;
      message: string;
      noLink: boolean;
      title: string;
      type: "warning";
    }): number;
  };
  disableQuitConfirmationPrompt: boolean;
  disposables: DisposableRuntimeService;
  ensureWindow(): Promise<unknown> | unknown;
  errorReporter: FatalErrorReporter;
  flushAndDisposeContext(): void;
  getHasEnabledAutomations(): boolean;
  getHasInProgressLocalConversation(): boolean;
  globalDictationLifecycleManager: DisposableRuntimeService;
  globalState: FlushableStore;
  hotkeyWindowLifecycleManager: DisposableRuntimeService;
  isPrivacySettingsTerminationRequest?(): boolean;
  isWindows: boolean;
  logger: StructuredLogger;
  quitState: QuitStateController;
  settingsStore: FlushableStore;
  windows: AppWindowLifecycleController;
}): () => void {
  let isDrainingBeforeQuit = false;
  let isAppQuitting = false;

  const handleBeforeQuit = (event: PreventableElectronEvent) => {
    if (isPrivacySettingsTerminationRequest()) {
      event.preventDefault();
      return;
    }

    const hasInProgressLocalConversation = getHasInProgressLocalConversation();
    const hasEnabledAutomations = getHasEnabledAutomations();
    if (
      isWindows ||
      quitState.canQuitWithoutPrompt() ||
      disableQuitConfirmationPrompt ||
      (!hasInProgressLocalConversation && !hasEnabledAutomations)
    ) {
      isAppQuitting = true;
      windows.markAppQuitting();
      return;
    }

    const appName = appInstance.getName();
    const response = dialogService.showMessageBoxSync({
      type: "warning",
      buttons: ["Quit", "Cancel"],
      defaultId: 0,
      cancelId: 1,
      noLink: true,
      title: `Quit ${appName}?`,
      message: `Quit ${appName}?`,
      detail: createQuitConfirmationDetail({
        appName,
        hasEnabledAutomations,
        hasInProgressLocalConversation,
      }),
    });
    if (response !== 0) {
      event.preventDefault();
      return;
    }

    quitState.markQuitApproved();
    isAppQuitting = true;
    windows.markAppQuitting();
  };

  const handleChildProcessGone = (
    _event: unknown,
    details: ChildProcessGoneDetails,
  ) => {
    if (details.reason === "clean-exit") return;
    if (isRecoverableChromiumChildProcessGone(details)) {
      reportRecoverableChromiumChildProcessGone({ details, logger });
      return;
    }
    errorReporter.reportFatal(Error(`Child process gone (${details.type})`), {
      tags: {
        errorType: "child-process-gone",
        processType: details.type,
        reason: details.reason,
      },
      extra: {
        exitCode: details.exitCode,
        name: details.name,
        serviceName: details.serviceName,
      },
    });
  };

  const handleActivate = () => {
    if (isAppQuitting) return;
    if (!windows.showLastActivePrimaryWindow()) {
      void ensureWindow();
    }
    applicationMenuManager.refresh();
  };

  const handleBrowserWindowBlur = () => {
    if (browserWindowApi.getFocusedWindow() == null) {
      appEvent.emit("background");
    }
  };

  const handleBrowserWindowFocus = () => {
    appEvent.emit("foreground");
    applicationMenuManager.refresh();
  };

  const handleWillQuit = (event: PreventableElectronEvent) => {
    isAppQuitting = true;
    if (isDrainingBeforeQuit) return;

    if (quitState.shouldSkipDrainBeforeQuit()) {
      disposeDesktopRuntimeBeforeQuit({
        hotkeyWindowLifecycleManager,
        globalDictationLifecycleManager,
        flushAndDisposeContext,
        disposables,
      });
      return;
    }

    event.preventDefault();
    isDrainingBeforeQuit = true;
    hotkeyWindowLifecycleManager.dispose();
    globalDictationLifecycleManager.dispose();
    Promise.all([globalState.flush(), settingsStore.flush()]).finally(() => {
      flushAndDisposeContext();
      disposables.dispose();
      appInstance.quit();
    });
  };

  appInstance.on("before-quit", handleBeforeQuit);
  appInstance.on("child-process-gone", handleChildProcessGone);
  appInstance.on("activate", handleActivate);
  appInstance.on("browser-window-blur", handleBrowserWindowBlur);
  appInstance.on("browser-window-focus", handleBrowserWindowFocus);
  appInstance.on("will-quit", handleWillQuit);

  return () => {
    appInstance.off("before-quit", handleBeforeQuit);
    appInstance.off("child-process-gone", handleChildProcessGone);
    appInstance.off("activate", handleActivate);
    appInstance.off("browser-window-blur", handleBrowserWindowBlur);
    appInstance.off("browser-window-focus", handleBrowserWindowFocus);
    appInstance.off("will-quit", handleWillQuit);
  };
}
