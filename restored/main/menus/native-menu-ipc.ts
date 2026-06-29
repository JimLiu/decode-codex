// Restored from ref/.vite/build/main-r5HnecX_.js
// Native application-menu and context-menu IPC handlers for the webview bridge.

import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import {
  BrowserWindow,
  Menu,
  ipcMain,
  nativeImage,
  type IpcMainInvokeEvent,
  type MenuItemConstructorOptions,
  type NativeImage,
} from "electron";

export const SHOW_APPLICATION_MENU_CHANNEL =
  "codex_desktop:show-application-menu";
export const SHOW_CONTEXT_MENU_CHANNEL = "codex_desktop:show-context-menu";

export type TrustedIpcEventPredicate = (event: IpcMainInvokeEvent) => boolean;
export type DisposableIpcRegistration = () => void;
export type ShowApplicationMenuRequest = {
  menuId: string;
  x: number;
  y: number;
};
export type NativeContextMenuResult = {
  id: string | null;
};
export type NativeContextMenuSeparatorItem = {
  type: "separator";
};
export type NativeContextMenuCommandItem = {
  id: string;
  type?: "normal" | "checkbox" | "radio" | "submenu";
  label?: string;
  role?: MenuItemConstructorOptions["role"];
  enabled?: boolean;
  icon?: string | null;
  toolTip?: string;
  submenu?: NativeContextMenuItem[];
};
export type NativeContextMenuItem =
  | NativeContextMenuSeparatorItem
  | NativeContextMenuCommandItem;

export function registerShowApplicationMenuIpc(
  isTrustedIpcEvent: TrustedIpcEventPredicate,
): DisposableIpcRegistration {
  ipcMain.handle(
    SHOW_APPLICATION_MENU_CHANNEL,
    async (event, request: ShowApplicationMenuRequest) => {
      if (!isTrustedIpcEvent(event)) return;
      const ownerWindow = BrowserWindow.fromWebContents(event.sender);
      const submenu = Menu.getApplicationMenu()?.getMenuItemById(
        request.menuId,
      )?.submenu;
      if (!submenu) return;
      return new Promise<void>((resolve) => {
        submenu.popup({
          window: ownerWindow ?? undefined,
          x: Math.round(request.x),
          y: Math.round(request.y),
          callback: resolve,
        });
      });
    },
  );

  return () => {
    ipcMain.removeHandler(SHOW_APPLICATION_MENU_CHANNEL);
  };
}

export function resizeNativeContextMenuIcon(icon: NativeImage): NativeImage {
  const { width, height } = icon.getSize();
  if (!width || !height || (width <= 16 && height <= 16)) return icon;
  return icon.resize({
    width: 16,
    height: 16,
    quality: "best",
  });
}

export function resolveNativeContextMenuIcon(
  iconSource: string | null | undefined,
  iconSearchRoots: readonly string[],
): NativeImage | undefined {
  if (!iconSource) return undefined;
  try {
    if (iconSource.startsWith("data:")) {
      return resizeNativeContextMenuIcon(
        nativeImage.createFromDataURL(iconSource),
      );
    }
    if (iconSource.startsWith("file://")) {
      return resizeNativeContextMenuIcon(
        nativeImage.createFromPath(fileURLToPath(iconSource)),
      );
    }
    if (iconSource.startsWith("/")) {
      return resizeNativeContextMenuIcon(
        nativeImage.createFromPath(iconSource),
      );
    }

    for (const iconSearchRoot of iconSearchRoots) {
      const candidatePath = new URL(
        iconSource,
        `file://${iconSearchRoot.endsWith("/") ? iconSearchRoot : `${iconSearchRoot}/`}`,
      ).pathname;
      if (!existsSync(candidatePath)) continue;
      const icon = nativeImage.createFromPath(candidatePath);
      if (!icon.isEmpty()) return resizeNativeContextMenuIcon(icon);
    }
  } catch {}
  return undefined;
}

export function buildNativeContextMenuTemplate({
  iconSearchRoots,
  items,
  onSelect,
}: {
  items: readonly NativeContextMenuItem[];
  iconSearchRoots: readonly string[];
  onSelect(id: string): void;
}): MenuItemConstructorOptions[] {
  return items.map((item) => {
    if (item.type === "separator") {
      return { type: "separator" };
    }
    return {
      id: item.id,
      label: item.label,
      role: item.role,
      enabled: item.enabled ?? true,
      icon: resolveNativeContextMenuIcon(item.icon, iconSearchRoots),
      toolTip: item.toolTip,
      click: () => {
        onSelect(item.id);
      },
      submenu: item.submenu
        ? buildNativeContextMenuTemplate({
            iconSearchRoots,
            items: item.submenu,
            onSelect,
          })
        : undefined,
    };
  });
}

export function registerShowContextMenuIpc(
  iconSearchRoots: readonly string[],
  isTrustedIpcEvent: TrustedIpcEventPredicate,
): DisposableIpcRegistration {
  ipcMain.handle(
    SHOW_CONTEXT_MENU_CHANNEL,
    async (
      event,
      items: readonly NativeContextMenuItem[],
    ): Promise<NativeContextMenuResult> => {
      if (!isTrustedIpcEvent(event)) {
        return { id: null };
      }

      const ownerWindow = BrowserWindow.fromWebContents(event.sender);
      return new Promise<NativeContextMenuResult>((resolve) => {
        let didResolve = false;
        const resolveOnce = (id: string | null) => {
          if (didResolve) return;
          didResolve = true;
          resolve({ id });
        };

        Menu.buildFromTemplate(
          buildNativeContextMenuTemplate({
            iconSearchRoots,
            items,
            onSelect: resolveOnce,
          }),
        ).popup({
          window: ownerWindow ?? undefined,
          callback: () => {
            resolveOnce(null);
          },
        });
      });
    },
  );

  return () => {
    ipcMain.removeHandler(SHOW_CONTEXT_MENU_CHANNEL);
  };
}
