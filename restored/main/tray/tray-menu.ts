// Restored from ref/.vite/build/main-r5HnecX_.js
// Native tray menu item helpers.

import { Menu, type MenuItemConstructorOptions } from "electron";
import type {
  ChronicleSidecarControlState,
  NativeIntlBoundary,
  TrayMenuThreads,
  TrayThread,
} from "./tray-types";

export function createTrayThreadSection({
  label,
  moreLabel,
  onOpenThread,
  projectlessLabel,
  threads,
}: {
  label: string;
  moreLabel: string;
  projectlessLabel: string;
  threads: TrayThread[];
  onOpenThread(path: string): void;
}): MenuItemConstructorOptions[] {
  if (threads.length === 0) return [];
  const visibleThreads = threads.slice(0, 3);
  const overflowThreads = threads.slice(3);
  return [
    { label, enabled: false },
    ...visibleThreads.map((thread) =>
      createTrayThreadMenuItem({ onOpenThread, projectlessLabel, thread }),
    ),
    ...(overflowThreads.length > 0
      ? [
          {
            label: moreLabel,
            submenu: overflowThreads.map((thread) =>
              createTrayThreadMenuItem({
                onOpenThread,
                projectlessLabel,
                thread,
              }),
            ),
          },
        ]
      : []),
  ];
}

export function createTrayThreadMenuItem({
  onOpenThread,
  projectlessLabel,
  thread,
}: {
  thread: TrayThread;
  projectlessLabel: string;
  onOpenThread(path: string): void;
}): MenuItemConstructorOptions {
  const titleCharacters = Array.from(thread.title);
  return {
    label:
      titleCharacters.length <= 35
        ? thread.title
        : `${titleCharacters.slice(0, 34).join("").trimEnd()}...`,
    sublabel: thread.isProjectless ? projectlessLabel : thread.projectLabel,
    click: () => onOpenThread(thread.path),
  };
}

export function createTrayThreadMenuSections({
  menuThreads,
  moreLabel,
  nativeIntl,
  onOpenThread,
  projectlessLabel,
}: {
  menuThreads: TrayMenuThreads;
  moreLabel: string;
  nativeIntl: NativeIntlBoundary;
  projectlessLabel: string;
  onOpenThread(path: string): void;
}): MenuItemConstructorOptions[] {
  const sections = [
    createTrayThreadSection({
      label: nativeIntl.formatMessage({
        messageId: "trayMenu.runningThreads",
        defaultMessage: "Running",
      }),
      moreLabel,
      onOpenThread,
      projectlessLabel,
      threads: menuThreads.runningThreads,
    }),
    createTrayThreadSection({
      label: nativeIntl.formatMessage({
        messageId: "trayMenu.unreadThreads",
        defaultMessage: "Unread",
      }),
      moreLabel,
      onOpenThread,
      projectlessLabel,
      threads: menuThreads.unreadThreads,
    }),
    createTrayThreadSection({
      label: nativeIntl.formatMessage({
        messageId: "trayMenu.pinnedThreads",
        defaultMessage: "Pinned",
      }),
      moreLabel,
      onOpenThread,
      projectlessLabel,
      threads: menuThreads.pinnedThreads,
    }),
    createTrayThreadSection({
      label: nativeIntl.formatMessage({
        messageId: "trayMenu.recentThreads",
        defaultMessage: "Recent",
      }),
      moreLabel,
      onOpenThread,
      projectlessLabel,
      threads: menuThreads.recentThreads,
    }),
    process.platform !== "darwin" || menuThreads.usageLimits.length === 0
      ? []
      : [
          {
            label: nativeIntl.formatMessage({
              messageId: "trayMenu.usage",
              defaultMessage: "Usage",
            }),
            enabled: false,
          },
          ...menuThreads.usageLimits.map(({ label }) => ({
            label,
            enabled: false,
          })),
        ],
  ];
  return sections
    .filter((section) => section.length > 0)
    .flatMap((section, index) =>
      index === 0 ? section : [{ type: "separator" as const }, ...section],
    );
}

export function getChronicleTrayMenuLabel(
  state: ChronicleSidecarControlState,
): string {
  switch (state.state) {
    case "disabled":
    case "stopped":
      return "Resume Chronicle";
    case "running":
    case "restarting":
      return "Pause Chronicle";
    case "starting":
      return "Starting Chronicle...";
    case "stopping":
      return "Stopping Chronicle...";
  }
}

export function canToggleChronicleSidecar(
  state: ChronicleSidecarControlState,
): boolean {
  return state.state !== "starting" && state.state !== "stopping";
}

export function getQuitMenuItemLabel(appName: string): string {
  const menu = Menu.buildFromTemplate([{ role: "quit" }]);
  const item = (Array.isArray(menu) ? menu : menu.items)[0];
  return item?.label ?? `Quit ${appName}`;
}
