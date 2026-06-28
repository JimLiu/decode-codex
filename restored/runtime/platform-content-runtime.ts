// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// Platform-content gate and VS Code bridge initialization helpers.
import {
  $N as initVscodeApiBridge,
} from "../vendor/appg-thread-shared-runtime";
import {
  Ga as initElectronPlatformContent,
  Wa as PlatformContentGate,
} from "../vendor/pull-request-thread-actions-runtime";

export { PlatformContentGate };

export function initPlatformContentRuntime(): void {
  initElectronPlatformContent();
}

export function initVscodeBridgeRuntime(): void {
  initVscodeApiBridge();
}
