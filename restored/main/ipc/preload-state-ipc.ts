// Restored from ref/.vite/build/main-r5HnecX_.js
// Synchronous preload-state IPC and native theme broadcasts for the webview.

import {
  BrowserWindow,
  ipcMain,
  nativeTheme,
  type IpcMainEvent,
  type WebContents,
} from "electron";

export const GET_SENTRY_INIT_OPTIONS_CHANNEL =
  "codex_desktop:get-sentry-init-options";
export const GET_BUILD_FLAVOR_CHANNEL = "codex_desktop:get-build-flavor";
export const GET_USES_OWL_APP_SHELL_CHANNEL =
  "codex_desktop:get-uses-owl-app-shell";
export const GET_SHARED_OBJECT_SNAPSHOT_CHANNEL =
  "codex_desktop:get-shared-object-snapshot";
export const GET_SYSTEM_THEME_VARIANT_CHANNEL =
  "codex_desktop:get-system-theme-variant";
export const SYSTEM_THEME_VARIANT_UPDATED_CHANNEL =
  "codex_desktop:system-theme-variant-updated";

export type DesktopThemeVariant = "dark" | "light";
export type SentryInitOptionsSnapshot = {
  codexAppSessionId?: string;
  [key: string]: unknown;
};
export type SharedObjectSnapshot = Record<string, unknown>;
export type TrustedSyncIpcEventPredicate = (event: IpcMainEvent) => boolean;
export type SharedObjectContext = {
  getSharedObjectSnapshot(): SharedObjectSnapshot;
};
export type DisposableIpcRegistration = () => void;

export function registerPreloadStateSyncIpcHandlers({
  buildFlavor,
  getContextForWebContents,
  isTrustedIpcEvent,
  sentryInitOptions,
  usesOwlAppShell,
}: {
  buildFlavor: unknown;
  sentryInitOptions: SentryInitOptionsSnapshot;
  usesOwlAppShell: boolean;
  isTrustedIpcEvent: TrustedSyncIpcEventPredicate;
  getContextForWebContents(
    webContents: WebContents,
  ): SharedObjectContext | null | undefined;
}): DisposableIpcRegistration {
  const handleGetSentryInitOptions = (event: IpcMainEvent) => {
    event.returnValue = isTrustedIpcEvent(event) ? sentryInitOptions : null;
  };
  const handleGetBuildFlavor = (event: IpcMainEvent) => {
    event.returnValue = isTrustedIpcEvent(event) ? buildFlavor : null;
  };
  const handleGetUsesOwlAppShell = (event: IpcMainEvent) => {
    event.returnValue = isTrustedIpcEvent(event) ? usesOwlAppShell : false;
  };
  const handleGetSharedObjectSnapshot = (event: IpcMainEvent) => {
    event.returnValue = isTrustedIpcEvent(event)
      ? (getContextForWebContents(event.sender)?.getSharedObjectSnapshot() ??
        {})
      : {};
  };

  ipcMain.on(GET_SENTRY_INIT_OPTIONS_CHANNEL, handleGetSentryInitOptions);
  ipcMain.on(GET_BUILD_FLAVOR_CHANNEL, handleGetBuildFlavor);
  ipcMain.on(GET_USES_OWL_APP_SHELL_CHANNEL, handleGetUsesOwlAppShell);
  ipcMain.on(GET_SHARED_OBJECT_SNAPSHOT_CHANNEL, handleGetSharedObjectSnapshot);

  return () => {
    ipcMain.off(GET_SENTRY_INIT_OPTIONS_CHANNEL, handleGetSentryInitOptions);
    ipcMain.off(GET_BUILD_FLAVOR_CHANNEL, handleGetBuildFlavor);
    ipcMain.off(GET_USES_OWL_APP_SHELL_CHANNEL, handleGetUsesOwlAppShell);
    ipcMain.off(
      GET_SHARED_OBJECT_SNAPSHOT_CHANNEL,
      handleGetSharedObjectSnapshot,
    );
  };
}

export function getCurrentSystemThemeVariant(): DesktopThemeVariant {
  return nativeTheme.shouldUseDarkColors ? "dark" : "light";
}

export function registerSystemThemeVariantIpcHandlers({
  getAllWindows = () => BrowserWindow.getAllWindows(),
  isTrustedIpcEvent,
  refreshWindowBackdrops,
}: {
  isTrustedIpcEvent: TrustedSyncIpcEventPredicate;
  refreshWindowBackdrops?(): void;
  getAllWindows?: () => Array<
    Pick<BrowserWindow, "isDestroyed" | "webContents">
  >;
}): DisposableIpcRegistration {
  const handleGetSystemThemeVariant = (event: IpcMainEvent) => {
    event.returnValue = isTrustedIpcEvent(event)
      ? getCurrentSystemThemeVariant()
      : "light";
  };
  const handleNativeThemeUpdated = () => {
    const themeVariant = getCurrentSystemThemeVariant();
    refreshWindowBackdrops?.();
    for (const browserWindow of getAllWindows()) {
      if (browserWindow.isDestroyed()) continue;
      browserWindow.webContents.send(
        SYSTEM_THEME_VARIANT_UPDATED_CHANNEL,
        themeVariant,
      );
    }
  };

  ipcMain.on(GET_SYSTEM_THEME_VARIANT_CHANNEL, handleGetSystemThemeVariant);
  nativeTheme.on("updated", handleNativeThemeUpdated);

  return () => {
    ipcMain.off(GET_SYSTEM_THEME_VARIANT_CHANNEL, handleGetSystemThemeVariant);
    nativeTheme.off("updated", handleNativeThemeUpdated);
  };
}
