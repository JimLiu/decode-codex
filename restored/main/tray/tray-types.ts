// Restored from ref/.vite/build/main-r5HnecX_.js
// Shared desktop tray protocol types.

export type NativeIntlBoundary = {
  formatMessage(message: {
    messageId: string;
    defaultMessage: string;
    values?: Record<string, unknown>;
  }): string;
};
export type ChronicleSidecarState =
  | "disabled"
  | "stopped"
  | "running"
  | "restarting"
  | "starting"
  | "stopping";
export type ChronicleSidecarControlState = {
  enabled: boolean;
  running: boolean;
  state: ChronicleSidecarState;
};
export type TrayThread = {
  title: string;
  path: string;
  isProjectless: boolean;
  projectLabel: string;
};
export type TrayUsageLimit = {
  label: string;
};
export type TrayMenuThreads = {
  runningThreads: TrayThread[];
  unreadThreads: TrayThread[];
  pinnedThreads: TrayThread[];
  recentThreads: TrayThread[];
  usageLimits: TrayUsageLimit[];
};
export type TrayMenuThreadsChangedMessage = {
  type: "tray-menu-threads-changed";
  trayMenuThreads: TrayMenuThreads;
};

export const EMPTY_TRAY_MENU_THREADS: TrayMenuThreads = {
  runningThreads: [],
  unreadThreads: [],
  pinnedThreads: [],
  recentThreads: [],
  usageLimits: [],
};

export function isTrayMenuThreadsChangedMessage(
  message: unknown,
): message is TrayMenuThreadsChangedMessage {
  return (
    typeof message === "object" &&
    message != null &&
    "type" in message &&
    message.type === "tray-menu-threads-changed"
  );
}
