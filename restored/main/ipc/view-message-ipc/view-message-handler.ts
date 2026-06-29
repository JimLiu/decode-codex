// Restored from ref/.vite/build/main-r5HnecX_.js
// Main renderer message dispatcher for window routing and app state changes.

import { app, ipcMain, type WebContents } from "electron";
import { isTrayMenuThreadsChangedMessage } from "../../tray/tray-types";
import { MESSAGE_FROM_VIEW_CHANNEL } from "./channels";
import type {
  BrowserPanelMessage,
  BrowserWindowLike,
  DesktopFeatureAvailability,
  DesktopViewMessage,
  DisposableIpcRegistration,
  ElectronDesktopFeaturesChangedMessage,
  GlobalDictationMessageHandler,
  StructuredLogger,
  TrayOrDockMessageController,
  TrustedViewIpcEventPredicate,
  ViewMessageWindowContext,
} from "./types";

function isViewMessage(value: unknown): value is Record<string, unknown> & {
  type: string;
} {
  return (
    typeof value === "object" &&
    value != null &&
    "type" in value &&
    typeof value.type === "string"
  );
}

function showAndFocusWindow(browserWindow: BrowserWindowLike): void {
  if (browserWindow.isMinimized()) {
    browserWindow.restore();
  }
  browserWindow.show();
  browserWindow.focus();
}

function desktopFeaturesFromMessage(
  message: ElectronDesktopFeaturesChangedMessage,
): DesktopFeatureAvailability {
  return {
    ambientSuggestions: message.ambientSuggestions,
    appshotsEnabled: message.appshotsEnabled,
    avatarOverlayNativeStack: message.avatarOverlayNativeStack,
    inAppBrowserUse: message.inAppBrowserUse,
    inAppBrowserUseAllowed: message.inAppBrowserUseAllowed,
    defaultLinkOpenTargetPreference: message.defaultLinkOpenTargetPreference,
    linksDefaultInAppBrowser: message.linksDefaultInAppBrowser,
    localBackend: message.localBackend,
    browserPane: message.browserPane,
    externalBrowserUse: message.externalBrowserUse,
    externalBrowserUseAllowed: message.externalBrowserUseAllowed,
    computerUse: message.computerUse,
    computerUseNodeRepl: message.computerUseNodeRepl,
    recordAndReplay: message.recordAndReplay,
    sites: message.sites,
    control: message.control,
    dil: message.dil,
    multiBrowserTabs: message.multiBrowserTabs,
    multiWindow: message.multiWindow,
    openAIMcpFormElicitations: message.openAIMcpFormElicitations,
    processManager: message.processManager,
    remoteControlClientScopedEnvironments:
      message.remoteControlClientScopedEnvironments,
    webMcp: message.webMcp,
    visualize: message.visualize,
  };
}

export function registerViewMessageIpcHandler({
  appInstance = app,
  createFreshWindow,
  ensureWindow,
  getContextForWebContents,
  getDockMenuController,
  getPrimaryWindow,
  getTrayController,
  globalDictationLifecycleManager,
  hasBrowserPaneEnabled,
  hotkeyWindowLifecycleManager,
  isTrustedIpcEvent,
  isValidAppRoute,
  logger,
  navigateToRoute,
  reloadBundledPlugins,
  restoreAvatarOverlayOpenState,
  sendMessageToWindow,
  setAutomaticBackgroundDownloadsEnabled,
  setAvatarOverlayFeedbackDiagnosticsEnabled,
  setDesktopFeatureAvailability,
  setInternalUpdateCdnEnabled,
  setMacMenuBarEnabled,
  setRemoteHostedPIPActiveThreadID,
  setRemoteHostedPIPHostLayout,
  setRemoteHostedPIPVisible,
  showPrimaryWindow,
}: {
  appInstance?: Pick<typeof app, "quit">;
  createFreshWindow(
    path: string,
  ): Promise<BrowserWindowLike | null> | BrowserWindowLike | null;
  ensureWindow(): Promise<BrowserWindowLike | null> | BrowserWindowLike | null;
  getContextForWebContents(
    webContents: WebContents,
  ): ViewMessageWindowContext | null | undefined;
  getDockMenuController?(): TrayOrDockMessageController | null | undefined;
  getPrimaryWindow(): BrowserWindowLike | null | undefined;
  getTrayController(): TrayOrDockMessageController | null | undefined;
  globalDictationLifecycleManager: GlobalDictationMessageHandler;
  hasBrowserPaneEnabled(): boolean;
  hotkeyWindowLifecycleManager: { hide(): void };
  isTrustedIpcEvent: TrustedViewIpcEventPredicate;
  isValidAppRoute(path: string): boolean;
  logger: StructuredLogger;
  navigateToRoute(browserWindow: BrowserWindowLike, path: string): void;
  reloadBundledPlugins?(): Promise<void> | void;
  restoreAvatarOverlayOpenState(webContents: WebContents): Promise<void> | void;
  sendMessageToWindow(
    browserWindow: BrowserWindowLike,
    message: BrowserPanelMessage,
  ): void;
  setAutomaticBackgroundDownloadsEnabled(enabled: boolean): void;
  setAvatarOverlayFeedbackDiagnosticsEnabled(enabled: boolean): void;
  setDesktopFeatureAvailability(
    availability: DesktopFeatureAvailability,
    bundledPluginEligibilityReasons: unknown,
  ): void;
  setInternalUpdateCdnEnabled(enabled: boolean): Promise<void> | void;
  setMacMenuBarEnabled(enabled: boolean): Promise<void> | void;
  setRemoteHostedPIPActiveThreadID?(
    sender: WebContents,
    conversationId: string | null,
  ): void;
  setRemoteHostedPIPHostLayout?(sender: WebContents, layout: unknown): void;
  setRemoteHostedPIPVisible?(isVisible: boolean): void;
  showPrimaryWindow(options: { stealFocus: true }): void;
}): DisposableIpcRegistration {
  let avatarOverlayRestoreHandled = false;

  ipcMain.handle(
    MESSAGE_FROM_VIEW_CHANNEL,
    async (event, rawMessage: unknown) => {
      if (!isTrustedIpcEvent(event) || !isViewMessage(rawMessage)) return;
      const message = rawMessage as DesktopViewMessage;

      if (message.type === "electron-avatar-overlay-restore-ready") {
        if (!avatarOverlayRestoreHandled) {
          avatarOverlayRestoreHandled = true;
          await restoreAvatarOverlayOpenState(event.sender);
        }
        return;
      }

      if (message.type === "remote-hosted-pip-active-thread-changed") {
        setRemoteHostedPIPActiveThreadID?.(
          event.sender,
          message.conversationId,
        );
        return;
      }

      if (message.type === "remote-hosted-pip-visibility-changed") {
        setRemoteHostedPIPVisible?.(message.isVisible);
        return;
      }

      if (message.type === "remote-hosted-pip-host-layout-changed") {
        setRemoteHostedPIPHostLayout?.(event.sender, message.layout);
        return;
      }

      if (
        message.type === "electron-avatar-overlay-feedback-diagnostics-changed"
      ) {
        setAvatarOverlayFeedbackDiagnosticsEnabled(message.enabled);
        return;
      }

      if (message.type === "electron-sparkle-gates-changed") {
        setAutomaticBackgroundDownloadsEnabled(
          !message.disableSparkleAutodownload,
        );
        await setInternalUpdateCdnEnabled(message.useInternalUpdateCdn);
        return;
      }

      if (message.type === "electron-desktop-features-changed") {
        getContextForWebContents(event.sender)?.setChronicleConfig(
          message.codexChronicleConfig,
        );
        setDesktopFeatureAvailability(
          desktopFeaturesFromMessage(message),
          message.bundledPluginEligibilityReasons,
        );
        return;
      }

      if (message.type === "mac-menu-bar-enabled-changed") {
        await setMacMenuBarEnabled(message.enabled);
        return;
      }

      if (message.type === "reload-bundled-plugins") {
        await reloadBundledPlugins?.();
        return;
      }

      if (message.type === "open-browser-in-main-window") {
        if (!hasBrowserPaneEnabled() || !isValidAppRoute(message.path)) return;
        hotkeyWindowLifecycleManager.hide();
        const preferredWindow =
          getContextForWebContents(event.sender)
            ?.getBrowserSidebarManager()
            .getPreferredWindowStateForConversation(
              message.browserPanel.conversationId,
            )?.window ?? getPrimaryWindow();
        const shouldNavigateExistingWindow = preferredWindow != null;
        const targetWindow =
          preferredWindow ?? (await createFreshWindow(message.path));
        if (targetWindow == null) return;
        showAndFocusWindow(targetWindow);
        sendMessageToWindow(targetWindow, message.browserPanel);
        if (shouldNavigateExistingWindow) {
          navigateToRoute(targetWindow, message.path);
        }
        return;
      }

      if (
        message.type === "open-current-main-window" ||
        message.type === "open-in-main-window"
      ) {
        const targetPath =
          message.type === "open-current-main-window" ? null : message.path;
        if (targetPath != null && !isValidAppRoute(targetPath)) return;
        hotkeyWindowLifecycleManager.hide();
        const primaryWindow = getPrimaryWindow();
        const targetWindow =
          primaryWindow != null || targetPath == null
            ? await ensureWindow()
            : await createFreshWindow(targetPath);
        if (targetWindow == null) return;
        if (
          message.type === "open-current-main-window" &&
          message.stealFocus === true
        ) {
          showPrimaryWindow({ stealFocus: true });
        } else {
          showAndFocusWindow(targetWindow);
        }
        if (primaryWindow != null && targetPath != null) {
          navigateToRoute(targetWindow, targetPath);
        }
        return;
      }

      if (message.type === "open-in-new-window") {
        if (!isValidAppRoute(message.path)) return;
        hotkeyWindowLifecycleManager.hide();
        const targetWindow = await createFreshWindow(message.path);
        if (targetWindow != null) {
          showAndFocusWindow(targetWindow);
        }
        return;
      }

      if (message.type === "show-settings") {
        hotkeyWindowLifecycleManager.hide();
        const targetWindow = await ensureWindow();
        if (targetWindow == null) return;
        showAndFocusWindow(targetWindow);
        navigateToRoute(targetWindow, `/settings/${message.section}`);
        return;
      }

      if (message.type === "quit-app") {
        appInstance.quit();
        return;
      }

      if (isTrayMenuThreadsChangedMessage(message)) {
        await Promise.all([
          getTrayController()?.handleMessage(message),
          getDockMenuController?.()?.handleMessage(message),
        ]);
        return;
      }

      if (
        await globalDictationLifecycleManager.handleMessage(event, rawMessage)
      ) {
        return;
      }

      const windowContext = getContextForWebContents(event.sender);
      if (windowContext == null) {
        logger.warning("Message received for unknown window context");
        return;
      }
      await windowContext.handleMessage(event.sender, rawMessage);
    },
  );

  return () => {
    ipcMain.removeHandler(MESSAGE_FROM_VIEW_CHANNEL);
  };
}
