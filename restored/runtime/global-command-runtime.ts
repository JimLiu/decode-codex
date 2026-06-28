// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// Global command dispatch helpers.
import {
  Bn as initGlobalCommandHandlersRaw,
  R as initSlashIconRaw,
  Vn as dispatchGlobalCommandRaw,
} from "../vendor/projects-app-shared-runtime";

export function initGlobalCommandHandlersRuntime(): void {
  initGlobalCommandHandlersRaw();
}

export function initSlashIconRuntime(): void {
  initSlashIconRaw();
}

export function dispatchGlobalCommand(
  commandId: string,
  source?: string,
): void {
  dispatchGlobalCommandRaw(commandId, source);
}
