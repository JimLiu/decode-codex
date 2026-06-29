// Restored from ref/.vite/build/main-r5HnecX_.js
// Shared types for renderer view-message IPC routing.

import type { BrowserWindow, IpcMainInvokeEvent, WebContents } from "electron";
import type { TrayMenuThreadsChangedMessage } from "../../tray/tray-types";

export type DisposableIpcRegistration = () => void;
export type TrustedViewIpcEventPredicate = (
  event: IpcMainInvokeEvent,
) => boolean;
export type DesktopFeatureAvailability = {
  ambientSuggestions: boolean;
  appshotsEnabled: boolean;
  avatarOverlayNativeStack: boolean;
  browserPane: boolean;
  computerUse: boolean;
  computerUseNodeRepl: boolean;
  control: boolean;
  defaultLinkOpenTargetPreference: unknown;
  dil: boolean;
  externalBrowserUse: boolean;
  externalBrowserUseAllowed: boolean;
  inAppBrowserUse: boolean;
  inAppBrowserUseAllowed: boolean;
  linksDefaultInAppBrowser: boolean;
  localBackend: boolean;
  multiBrowserTabs: boolean;
  multiWindow: boolean;
  openAIMcpFormElicitations: boolean;
  processManager: boolean;
  recordAndReplay: boolean;
  remoteControlClientScopedEnvironments: boolean;
  sites: boolean;
  visualize: boolean;
  webMcp: boolean;
};
export type BrowserWindowLike = Pick<
  BrowserWindow,
  "focus" | "isMinimized" | "restore" | "show" | "webContents"
>;
export type BrowserPanelMessage = {
  conversationId: string;
  type: string;
  [key: string]: unknown;
};
export type BrowserSidebarManagerBoundary = {
  getPreferredWindowStateForConversation(
    conversationId: string,
  ): { window?: BrowserWindowLike | null } | null | undefined;
};
export type ViewMessageWindowContext = {
  getBrowserSidebarManager(): BrowserSidebarManagerBoundary;
  handleMessage(
    sender: WebContents,
    message: Record<string, unknown>,
  ): Promise<void> | void;
  setChronicleConfig(config: unknown): void;
};
export type StructuredLogger = {
  warning(message: string, details?: unknown): void;
};
export type DesktopSentryReporter = {
  captureException(
    error: Error,
    context: { tags: Record<string, string> },
  ): void;
};
export type GlobalDictationMessageHandler = {
  handleMessage(
    event: IpcMainInvokeEvent,
    message: Record<string, unknown>,
  ): Promise<boolean> | boolean;
};
export type TrayOrDockMessageController = {
  handleMessage(message: TrayMenuThreadsChangedMessage): Promise<void> | void;
};
export type BrowserSidebarRuntimeMessageParser<TMessage> = {
  safeParse(
    value: unknown,
  ): { success: true; data: TMessage } | { success: false };
};
export type ElectronSparkleGatesChangedMessage = {
  type: "electron-sparkle-gates-changed";
  disableSparkleAutodownload: boolean;
  useInternalUpdateCdn: boolean;
};
export type ElectronDesktopFeaturesChangedMessage =
  DesktopFeatureAvailability & {
    type: "electron-desktop-features-changed";
    bundledPluginEligibilityReasons: unknown;
    codexChronicleConfig: unknown;
  };
export type DesktopViewMessage =
  | { type: "electron-avatar-overlay-restore-ready" }
  | {
      type: "remote-hosted-pip-active-thread-changed";
      conversationId: string | null;
    }
  | { type: "remote-hosted-pip-visibility-changed"; isVisible: boolean }
  | { type: "remote-hosted-pip-host-layout-changed"; layout: unknown }
  | {
      type: "electron-avatar-overlay-feedback-diagnostics-changed";
      enabled: boolean;
    }
  | ElectronSparkleGatesChangedMessage
  | ElectronDesktopFeaturesChangedMessage
  | { type: "mac-menu-bar-enabled-changed"; enabled: boolean }
  | { type: "reload-bundled-plugins" }
  | {
      type: "open-browser-in-main-window";
      path: string;
      browserPanel: BrowserPanelMessage;
    }
  | { type: "open-current-main-window"; stealFocus?: boolean }
  | { type: "open-in-main-window"; path: string }
  | { type: "open-in-new-window"; path: string }
  | { type: "show-settings"; section: string }
  | { type: "quit-app" };
