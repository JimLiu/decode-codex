// Restored from ref/.vite/build/main-r5HnecX_.js
// Desktop tray controller and native tray menu assembly.

import { app, Menu, Tray, type MenuItemConstructorOptions } from "electron";
import type { DesktopTrayIcons } from "./tray-icons";
import {
  canToggleChronicleSidecar,
  createTrayThreadMenuSections,
  getChronicleTrayMenuLabel,
  getQuitMenuItemLabel,
} from "./tray-menu";
import {
  EMPTY_TRAY_MENU_THREADS,
  type ChronicleSidecarControlState,
  type NativeIntlBoundary,
  type TrayMenuThreadsChangedMessage,
} from "./tray-types";

export class DesktopTrayController {
  private chronicleTrayIconRefreshInterval: NodeJS.Timeout | null = null;
  private chronicleTrayIconState: "default" | "chronicle-running" = "default";
  private clearNativeTrayClickSuppressionTimeout: NodeJS.Timeout | null = null;
  private isNativeTrayMenuOpen = false;
  private nativeTrayClickSuppressionReason: "open" | "close" | null = null;
  private trayMenuThreads = EMPTY_TRAY_MENU_THREADS;

  constructor(
    private readonly tray: Tray,
    private readonly onTrayButtonClick: () => void,
    private readonly onTrayMenuOpenMainWindow: () => void,
    private readonly onTrayMenuOpenNewThread: () => void,
    private readonly onTrayMenuOpenRecentThread: (path: string) => void,
    private readonly getChronicleSidecarControlState:
      | (() => ChronicleSidecarControlState)
      | null,
    private readonly toggleChronicleSidecar:
      | (() => Promise<ChronicleSidecarControlState>)
      | null,
    private readonly trayIcons: DesktopTrayIcons,
    private readonly nativeIntl: NativeIntlBoundary,
    private readonly appName: string,
  ) {
    if (process.platform === "darwin") {
      this.tray.on("mouse-down", () => {
        this.clearPendingNativeTrayClickSuppression();
        if (this.isNativeTrayMenuOpen) {
          this.nativeTrayClickSuppressionReason = "close";
          return;
        }
        this.nativeTrayClickSuppressionReason = "open";
        this.openNativeTrayMenu();
      });
      this.tray.on("click", () => {
        if (!this.consumeIgnoredNativeTrayClick()) this.openNativeTrayMenu();
      });
      this.tray.on("right-click", () => {
        if (!this.consumeIgnoredNativeTrayClick()) this.openNativeTrayMenu();
      });
      if (
        this.getChronicleSidecarControlState != null &&
        this.trayIcons.chronicleRunningIcon != null
      ) {
        this.updateChronicleTrayIcon();
        this.chronicleTrayIconRefreshInterval = setInterval(() => {
          this.updateChronicleTrayIcon();
        }, 1_000);
        this.chronicleTrayIconRefreshInterval.unref?.();
      }
      return;
    }
    this.tray.on("click", () => this.onTrayButtonClick());
    this.tray.on("right-click", () => this.openNativeTrayMenu());
  }

  destroy(): void {
    if (this.chronicleTrayIconRefreshInterval != null) {
      clearInterval(this.chronicleTrayIconRefreshInterval);
      this.chronicleTrayIconRefreshInterval = null;
    }
    this.tray.destroy();
  }

  async handleMessage(message: TrayMenuThreadsChangedMessage): Promise<void> {
    switch (message.type) {
      case "tray-menu-threads-changed":
        this.trayMenuThreads = message.trayMenuThreads;
        return;
    }
  }

  openNativeTrayMenu(): void {
    this.updateChronicleTrayIcon();
    const menu = Menu.buildFromTemplate(this.getNativeTrayMenuItems());
    menu.once("menu-will-show", () => {
      this.isNativeTrayMenuOpen = true;
    });
    menu.once("menu-will-close", () => {
      this.isNativeTrayMenuOpen = false;
      this.handleNativeTrayMenuClosed();
    });
    this.tray.popUpContextMenu(menu);
  }

  updateChronicleTrayIcon(
    state = this.getChronicleSidecarControlState?.(),
  ): void {
    if (this.trayIcons.chronicleRunningIcon == null) return;
    const nextState = state?.running === true ? "chronicle-running" : "default";
    if (nextState === this.chronicleTrayIconState) return;
    this.chronicleTrayIconState = nextState;
    this.tray.setImage(
      nextState === "chronicle-running"
        ? this.trayIcons.chronicleRunningIcon
        : this.trayIcons.defaultIcon,
    );
  }

  private consumeIgnoredNativeTrayClick(): boolean {
    if (this.nativeTrayClickSuppressionReason == null) return false;
    this.clearNativeTrayClickSuppression();
    return true;
  }

  private handleNativeTrayMenuClosed(): void {
    if (this.nativeTrayClickSuppressionReason !== "close") {
      this.clearNativeTrayClickSuppression();
      return;
    }
    this.clearPendingNativeTrayClickSuppression();
    this.clearNativeTrayClickSuppressionTimeout = setTimeout(() => {
      if (this.nativeTrayClickSuppressionReason === "close") {
        this.clearNativeTrayClickSuppression();
      }
    }, 0);
    this.clearNativeTrayClickSuppressionTimeout.unref?.();
  }

  private clearPendingNativeTrayClickSuppression(): void {
    if (this.clearNativeTrayClickSuppressionTimeout != null) {
      clearTimeout(this.clearNativeTrayClickSuppressionTimeout);
      this.clearNativeTrayClickSuppressionTimeout = null;
    }
  }

  private clearNativeTrayClickSuppression(): void {
    this.clearPendingNativeTrayClickSuppression();
    this.nativeTrayClickSuppressionReason = null;
  }

  private getNativeTrayMenuItems(): MenuItemConstructorOptions[] {
    const projectlessLabel = this.nativeIntl.formatMessage({
      messageId: "trayMenu.projectlessThreads",
      defaultMessage: "Chats",
    });
    const moreLabel = this.nativeIntl.formatMessage({
      messageId: "trayMenu.more",
      defaultMessage: "More",
    });
    const threadMenuItems = createTrayThreadMenuSections({
      menuThreads: this.trayMenuThreads,
      moreLabel,
      nativeIntl: this.nativeIntl,
      onOpenThread: this.onTrayMenuOpenRecentThread,
      projectlessLabel,
    });
    const chronicleState = this.getChronicleSidecarControlState?.();
    const chronicleMenuItem =
      chronicleState?.enabled === true
        ? this.createChronicleMenuItem(chronicleState)
        : null;
    return [
      ...threadMenuItems,
      ...(threadMenuItems.length > 0 ? [{ type: "separator" as const }] : []),
      {
        label: this.nativeIntl.formatMessage({
          messageId: "trayMenu.newChat",
          defaultMessage: "New Chat",
        }),
        click: () => this.onTrayMenuOpenNewThread(),
      },
      ...(chronicleMenuItem == null ? [] : [chronicleMenuItem]),
      { type: "separator" },
      {
        label: this.nativeIntl.formatMessage({
          messageId: "trayMenu.openApp",
          defaultMessage: "Open {appName}",
          values: { appName: this.appName },
        }),
        click: () => this.onTrayMenuOpenMainWindow(),
      },
      { type: "separator" },
      {
        label: getQuitMenuItemLabel(this.appName),
        click: () => app.quit(),
      },
    ];
  }

  private createChronicleMenuItem(
    state: ChronicleSidecarControlState,
  ): MenuItemConstructorOptions {
    return {
      label: getChronicleTrayMenuLabel(state),
      enabled: canToggleChronicleSidecar(state),
      click: async (menuItem) => {
        if (this.toggleChronicleSidecar == null) return;
        menuItem.enabled = false;
        let nextState: ChronicleSidecarControlState | null = null;
        try {
          nextState = await this.toggleChronicleSidecar();
          this.updateChronicleTrayIcon(nextState);
          menuItem.label = getChronicleTrayMenuLabel(nextState);
        } finally {
          menuItem.enabled =
            nextState == null ? true : canToggleChronicleSidecar(nextState);
        }
      },
    };
  }
}
