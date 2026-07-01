// Restored from ref/webview/assets/automation-host-support-pSeSdr0l.js
import { _useHostConfigHt as localHostKind } from "../boundaries/use-host-config.facade";
type HostConfigSnapshot = {
  id?: string | null;
  kind?: string | null;
} | null;
type ElectronBridgeWindow = Window &
  typeof globalThis & {
    electronBridge?: {
      getSharedObjectSnapshotValue?: (key: string) => unknown;
    };
  };
export function isAutomationHostSupported(hostId: string): boolean {
  if (typeof window > "u") {
    return hostId === localHostKind;
  }
  const snapshot =
    ((
      window as ElectronBridgeWindow
    ).electronBridge?.getSharedObjectSnapshotValue?.(
      "host_config",
    ) as HostConfigSnapshot) ?? null;
  if (snapshot == null) {
    return hostId === localHostKind;
  }
  return snapshot.id === hostId && snapshot.kind === "local";
}

export function isLocalHost(hostId: string): boolean {
  return isAutomationHostSupported(hostId);
}

export function initLocalHostRuntimeChunk(): void {}
