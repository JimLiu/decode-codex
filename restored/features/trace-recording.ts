// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Toggles the host-side trace recording that backs the floating recording
// indicator button. Fired from the record/stop control in the app chrome.

import { hostMessageBridge } from "../boundaries/onboarding-commons-externals.facade";

export function toggleTraceRecording(): void {
  hostMessageBridge.dispatchMessage("toggle-trace-recording", {});
}
