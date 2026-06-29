// Restored from ref/webview/assets/app-main-DxUcMyo0.js
// Semantic app-main runtime bindings backed by the current app-main producer chunks.
import {
  CodexApp,
  appMainLogger,
  connectAppHostServices,
  findSingleMatchingCodexAppForPlugin,
  getCodexWindowChrome,
  hostMessageBridge,
  initAppFeatureRuntimeChunk,
  initAppHostServicesRuntimeChunk,
  initAppLoggingChunk,
  initAppPluginMatchingRuntime,
  initAppRuntimeChunk,
  initAutomationsRuntimeChunk,
  initAutomationsStateChunk,
  initCodexAppChunk,
  initErrorBoundaryRuntimeChunk,
  initRendererSentryRuntimeChunk,
  pluginMatchesCodexApp,
  readCompactWindowPreference,
} from "../vendor/app-main-current-runtime";
import type {
  CodexAppPluginMatchApp,
  CodexAppPluginMatchPlugin,
} from "../vendor/app-main-current-runtime";

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
  return readCompactWindowPreference();
}
