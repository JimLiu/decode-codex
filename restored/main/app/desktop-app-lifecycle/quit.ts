// Restored from ref/.vite/build/main-r5HnecX_.js
// Quit-confirmation copy and immediate runtime disposal helpers.

import { app } from "electron";
import type { DesktopRuntimeDisposalOptions } from "./types";

export function disposeDesktopRuntimeBeforeQuit({
  disposables,
  flushAndDisposeContext,
  globalDictationLifecycleManager,
  hotkeyWindowLifecycleManager,
}: DesktopRuntimeDisposalOptions): void {
  hotkeyWindowLifecycleManager.dispose();
  globalDictationLifecycleManager.dispose();
  flushAndDisposeContext();
  disposables.dispose();
}

export function createQuitConfirmationDetail({
  appName = app.getName(),
  hasEnabledAutomations,
  hasInProgressLocalConversation,
}: {
  appName?: string;
  hasEnabledAutomations: boolean;
  hasInProgressLocalConversation: boolean;
}): string {
  if (hasInProgressLocalConversation && hasEnabledAutomations) {
    return `Active local threads on this machine will be interrupted and enabled automations won't run while ${appName} is closed`;
  }
  if (hasInProgressLocalConversation) {
    return "Active local threads on this machine will be interrupted";
  }
  return `Enabled automations won't run while ${appName} is closed`;
}
