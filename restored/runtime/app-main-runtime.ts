// Restored from ref/webview/assets/app-main-DxUcMyo0.js
// Semantic app-main runtime bindings backed by restored app-main producer chunks.
import { isCurrentCompactWindow } from "../features/is-compact-window-context";
import {
  CodexApp,
  initAutomationsRuntimeChunk,
  initAutomationsStateChunk,
  initCodexAppChunk,
} from "../vendor/automations-page-runtime";
import {
  connectAppHostServices,
  initAppHostServicesRuntimeChunk,
} from "./app-host-services-runtime";
import {
  appMainLogger,
  hostMessageBridge,
  initAppLoggingChunk,
  initAppRuntimeChunk,
} from "./app-main-host-runtime";
import {
  findSingleMatchingCodexAppForPlugin,
  initAppPluginMatchingRuntime,
  pluginMatchesCodexApp,
} from "./app-main-plugin-matching";
import type {
  CodexAppPluginMatchApp,
  CodexAppPluginMatchPlugin,
} from "./app-main-plugin-matching";
import {
  initErrorBoundaryRuntimeChunk,
  initRendererSentryRuntimeChunk,
} from "./renderer-error-boundary-runtime";
import {
  getCodexWindowChrome,
  initAppFeatureRuntimeChunk,
} from "./window-chrome-runtime";

export type CodexOs = "win32" | "darwin" | "linux" | "unknown";
export type RendererLogLevel = "error" | "info" | "warn";

export {
  CodexApp,
  initAppFeatureRuntimeChunk,
  initAppLoggingChunk,
  initAppRuntimeChunk,
  initAutomationsRuntimeChunk,
  initAutomationsStateChunk,
  initAppHostServicesRuntimeChunk,
  initCodexAppChunk,
  initErrorBoundaryRuntimeChunk,
  initRendererSentryRuntimeChunk,
  findSingleMatchingCodexAppForPlugin,
  initAppPluginMatchingRuntime,
  pluginMatchesCodexApp,
  appMainLogger,
  hostMessageBridge,
  connectAppHostServices,
};
export type { CodexAppPluginMatchApp, CodexAppPluginMatchPlugin };

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
  return isCurrentCompactWindow();
}
