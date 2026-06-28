// Restored from ref/webview/assets/app-main-DxUcMyo0.js
// Semantic app-main runtime bindings backed by the current app-main producer chunks.
import {
  D as initAppRuntimeChunk,
  M as initAppLoggingChunk,
  N as appMainLogger,
  O as hostMessageBridge,
} from "../../ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~plugin-detail-page~new-~sfopfmmp-9J50_--p.js";
import {
  Mb as refreshStatsigDiagnostics,
  jb as initProjectsAppEntryChunk,
} from "../../ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~bj5tp28r-Dcs9S3fj.js";
import {
  og as getCodexWindowChrome,
  sg as initAppFeatureRuntimeChunk,
} from "../../ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js";
import {
  _ as initRendererErrorBoundaryStateChunk,
  n as initProjectsSharedRuntimeChunk,
} from "../../ref/webview/assets/app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-page~remote-con~di269h6j-x1JD0lOF.js";
import { za as readCompactWindowPreference } from "../../ref/webview/assets/app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~hotkey-win~fzw0jvy4-rg89odR_.js";
import {
  a as CodexApp,
  o as initAutomationsRuntimeChunk,
  r as initAutomationsStateChunk,
  t as initCodexAppChunk,
} from "../../ref/webview/assets/app-initial~app-main~automations-page-BfqUlSo6.js";

export type CodexOs = "win32" | "darwin" | "linux" | "unknown";
export type RendererLogLevel = "error" | "info" | "warn";

export {
  CodexApp,
  initAppFeatureRuntimeChunk,
  initAppLoggingChunk,
  initAppRuntimeChunk,
  initAutomationsRuntimeChunk,
  initAutomationsStateChunk,
  initCodexAppChunk,
  initProjectsAppEntryChunk,
  initProjectsSharedRuntimeChunk,
  refreshStatsigDiagnostics,
};

export function initRendererErrorBoundaryState(): void {
  initRendererErrorBoundaryStateChunk();
}

export function logAppMainStatsigRenderRequest(): void {
  appMainLogger.info(
    "[statsig-refresh-diagnostics] React root render requested",
    {
      safe: { windowType: "electron" },
    },
  );
}

export function dispatchRendererLogMessage(
  level: RendererLogLevel,
  message: string,
): void {
  hostMessageBridge.dispatchMessage("log-message", {
    level,
    message,
  });
}

export function getElectronWindowChrome(codexOs: CodexOs): string {
  return getCodexWindowChrome("electron", codexOs);
}

export function isCompactWindowPreferred(): boolean {
  return readCompactWindowPreference();
}
