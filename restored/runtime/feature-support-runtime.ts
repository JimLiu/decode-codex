// Restored from ref/webview/assets/custom-avatars-query-Bodwj3U-.js
// Boundary facade for custom avatars, pet install state, and workspace dependency UI helpers.
import {
  WA as initAppServicesRuntime,
  yV as createSignal,
  YN as sendHostRequest,
} from "../vendor/appg-thread-shared-runtime";
import {
  getJsxRuntime,
  initReactRuntime,
  getChunkModuleExports,
} from "./shared-utility-runtime";

import { initVscodeBridgeRuntime as initPetInstallSignalRuntime } from "./platform-content-runtime";

import { initQueryDurationConstants } from "./host-query-runtime";
import {
  GlobeIcon as FallbackGlobeIcon,
  initClassNameRuntime,
  initGlobeIcon as initGlobeIconChunk,
} from "../boundaries/current-ref/appg-thread-shared-producer";
import {
  initAppScope,
  initScopeRuntime,
  appScopeRoot,
} from "./app-scope-runtime";

export {
  appScopeRoot,
  createSignal,
  FallbackGlobeIcon,
  getChunkModuleExports,
  getJsxRuntime,
  initAppScope,
  initAppServicesRuntime,
  initClassNameRuntime,
  initGlobeIconChunk,
  initPetInstallSignalRuntime,
  initQueryDurationConstants,
  initReactRuntime,
  initScopeRuntime,
  sendHostRequest,
};
