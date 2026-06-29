// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Windows shell integration and updater-process control helpers.

import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { app } from "electron";
import { getRootStructuredLogger } from "../boundaries/shared-node-runtime.facade";

export type WindowsRegistryEntry = {
  key: string;
  name?: string;
  value: string;
};
export type WindowsUpdaterNativeAddon = {
  armTerminateCurrentProcess(delayMs: number): void;
  killProcessDescendants(pid: number): void;
};
export type WindowsUpdaterNativeAddonLoader = () =>
  | WindowsUpdaterNativeAddon
  | null
  | undefined;
export type QuitStateBoundary = {
  allowQuitTemporarilyForUpdateInstall(): void;
};

const execFileAsync = promisify(execFile);
const OPEN_PROJECT_REGISTRY_KEY =
  "HKCU\\Software\\Classes\\Directory\\shell\\OpenProjectInCodex";
const OPEN_PROJECT_COMMAND_REGISTRY_KEY = `${OPEN_PROJECT_REGISTRY_KEY}\\command`;

export function buildWindowsFolderContextMenuEntries(
  executablePath: string,
  appName: string = app.getName(),
): WindowsRegistryEntry[] {
  return [
    {
      key: OPEN_PROJECT_REGISTRY_KEY,
      value: `Open project in ${appName}`,
    },
    {
      key: OPEN_PROJECT_REGISTRY_KEY,
      name: "Icon",
      value: `"${executablePath}",0`,
    },
    {
      key: OPEN_PROJECT_COMMAND_REGISTRY_KEY,
      value: `"${executablePath}" --open-project "%1"`,
    },
  ];
}

export async function addWindowsRegistryValue({
  key,
  name,
  value,
}: WindowsRegistryEntry): Promise<void> {
  await execFileAsync(
    "reg.exe",
    ["add", key, ...(name ? ["/v", name] : ["/ve"]), "/d", value, "/f"],
    { windowsHide: true },
  );
}

export async function registerWindowsFolderContextMenu({
  appName = app.getName(),
  executablePath,
  isPackaged,
  isWindows,
}: {
  executablePath: string;
  isPackaged: boolean;
  isWindows: boolean;
  appName?: string;
}): Promise<void> {
  if (!isWindows || !isPackaged) return;
  try {
    await Promise.all(
      buildWindowsFolderContextMenuEntries(executablePath, appName).map(
        addWindowsRegistryValue,
      ),
    );
  } catch (error) {
    getRootStructuredLogger().warning(
      "Failed to register Windows folder context menu",
      {
        safe: {},
        sensitive: { error },
      },
    );
  }
}

export function performUpdateInstallExit({
  exitImmediately,
  exitImmediatelyForUpdateInstall,
  quitForUpdateInstall,
  quitState,
}: {
  exitImmediately: boolean;
  exitImmediatelyForUpdateInstall(): void;
  quitForUpdateInstall(): void;
  quitState: QuitStateBoundary;
}): void {
  if (exitImmediately) {
    exitImmediatelyForUpdateInstall();
    return;
  }
  quitState.allowQuitTemporarilyForUpdateInstall();
  quitForUpdateInstall();
}

export function killWindowsProcessDescendants({
  loadNativeAddon,
  pid = process.pid,
  platform = process.platform,
}: {
  loadNativeAddon: WindowsUpdaterNativeAddonLoader;
  pid?: number;
  platform?: NodeJS.Platform;
}): void {
  if (platform === "win32") {
    getWindowsUpdaterNativeAddon(loadNativeAddon).killProcessDescendants(pid);
  }
}

export function armWindowsCurrentProcessTermination({
  delayMs = 2_000,
  loadNativeAddon,
  platform = process.platform,
}: {
  loadNativeAddon: WindowsUpdaterNativeAddonLoader;
  delayMs?: number;
  platform?: NodeJS.Platform;
}): void {
  if (platform === "win32") {
    getWindowsUpdaterNativeAddon(loadNativeAddon).armTerminateCurrentProcess(
      delayMs,
    );
  }
}

export function getWindowsUpdaterNativeAddon(
  loadNativeAddon: WindowsUpdaterNativeAddonLoader,
): WindowsUpdaterNativeAddon {
  const nativeAddon = loadNativeAddon();
  if (nativeAddon == null) {
    throw Error("Failed to load Windows updater addon.");
  }
  return nativeAddon;
}
