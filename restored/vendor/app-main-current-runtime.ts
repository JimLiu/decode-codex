// Restored from ref/webview/assets/app-main-DxUcMyo0.js
// Current Electron app-main producer facade. This keeps the app-main runtime off
// direct ref imports while the large producer chunks are restored incrementally.
export {
  appMainLogger,
  findSingleMatchingCodexAppForPlugin,
  hostMessageBridge,
  initAppLoggingChunk,
  initAppPluginMatchingRuntime,
  initAppRuntimeChunk,
  pluginMatchesCodexApp,
} from "../runtime/app-main-host-runtime";
export type {
  CodexAppPluginMatchApp,
  CodexAppPluginMatchPlugin,
} from "../runtime/app-main-host-runtime";
export {
  connectAppHostServices,
  initAppHostServicesRuntimeChunk,
} from "../runtime/app-host-services-runtime";
export {
  getCodexWindowChrome,
  initAppFeatureRuntimeChunk,
} from "../runtime/window-chrome-runtime";
export {
  initErrorBoundaryRuntimeChunk,
  initRendererSentryRuntimeChunk,
} from "../runtime/renderer-error-boundary-runtime";
export { isCurrentCompactWindow as readCompactWindowPreference } from "../features/is-compact-window-context";
export {
  CodexApp,
  initAutomationsRuntimeChunk,
  initAutomationsStateChunk,
  initCodexAppChunk,
} from "./automations-page-runtime";
