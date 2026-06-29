// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Panel tab snapshot helpers used when moving or forking conversations.
import {
  isAbsoluteFilesystemPath,
  normalizeFilesystemPath,
} from "../boundaries/rpc.facade";

export {
  activeAppShellFocusAreaSignal as focusAreaStateKey,
  bottomPanelOpenSignal as bottomPanelOpenStateKey,
  rightPanelFullscreenSignal as rightPanelFullWidthStateKey,
  rightPanelOpenSignal as rightPanelOpenStateKey,
} from "../app-shell/app-shell-state";

export {
  bottomPanelTabsStore as bottomPanelTabsDescriptor,
  rightPanelTabsStore as rightPanelTabsDescriptor,
} from "../app-shell/thread-panel-tabs-store";

export {
  browserTabIdForConversation,
  browserTabSnapshotStore,
  deriveBrowserConversationId,
  getActiveBrowserTabId,
  getAllBrowserTabIdsForConversation,
  getBrowserTabIdForPanelTab,
  getConversationPanelLayoutSnapshot,
  terminalSessionSnapshotStore,
} from "../vendor/app-main-current-runtime";

export { normalizeFilesystemPath };

export function isWindowsStyleAbsolutePath(path: string): boolean {
  return /^[a-z]:[\\/]/i.test(path);
}

export function isUncPath(path: string): boolean {
  return /^[/\\]{2}[^/\\]+[/\\]/.test(path);
}

export function isWorkspaceFilePath(path: string): boolean {
  return isAbsoluteFilesystemPath(path);
}

export function terminalTabIdForSession(sessionId: unknown): string {
  return `terminal:${String(sessionId)}`;
}
