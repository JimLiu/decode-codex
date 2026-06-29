// Restored from ref/webview/assets/app-main-DxUcMyo0.js
// Current Electron app-main producer facade. This keeps the app-main runtime off
// direct ref imports while the large producer chunks are restored incrementally.
export {
  appMainLogger,
  hostMessageBridge,
  initAppLoggingChunk,
  initAppRuntimeChunk,
} from "../runtime/app-main-host-runtime";
export {
  Mb as connectAppHostServices,
  jb as initProjectsAppEntryChunk,
} from "./projects-app-shared-runtime";
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
