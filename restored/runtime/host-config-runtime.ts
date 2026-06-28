// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// Host config helper initialization.
import {
  $h as getHostConfigKeyRaw,
  GE as initLocalHostConstantsRaw,
  HE as useHostConfigByIdRaw,
  VE as initHostConfigHelpersRaw,
} from "../boundaries/current-ref/appg-thread-shared-producer";

export type HostConfigRecord = {
  id: string;
  kind?: string;
} & Record<string, unknown>;

export function initHostConfigRuntime(): void {
  initHostConfigHelpersRaw();
}

export function initLocalHostConstantsRuntime(): void {
  initLocalHostConstantsRaw();
}

export function getHostConfigKey(hostConfig: HostConfigRecord): string {
  return getHostConfigKeyRaw(hostConfig);
}

export function useHostConfigById<THostConfig extends HostConfigRecord>(
  hostId: string,
): THostConfig {
  return useHostConfigByIdRaw(hostId) as THostConfig;
}
