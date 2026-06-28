// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// Path helpers shared by local conversation environment surfaces.
import {
  bF as initPathHelpersRaw,
  Dj as joinPathRaw,
} from "../boundaries/current-ref/appg-thread-shared-producer";

export function initPathHelpersRuntime(): void {
  initPathHelpersRaw();
}

export function joinPath(...parts: string[]): string {
  return joinPathRaw(...parts);
}
