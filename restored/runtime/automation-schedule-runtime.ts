// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~projects-i~easvi6ps-Cs84X9Ip.js
// Boundary facade for automation schedule analytics and query state.
import { createVscodeQueryOptions } from "../boundaries/vscode-api";
import { initVscodeBridgeRuntime as initVscodeApiBridge } from "./platform-content-runtime";

import {
  initQueryDurationConstants,
  queryDurations,
} from "./host-query-runtime";
import {
  Cu as automationStatusValues,
  gu as executionEnvironmentValues,
  vu as automationKindValues,
  xu as scheduleFrequencyValues,
  yu as reasoningEffortValues,
} from "../vendor/projects-app-shared-runtime";
import {
  initAppScope as initAppScopeRuntime,
  appScopeRoot,
} from "./app-scope-runtime";

export {
  appScopeRoot,
  automationKindValues,
  automationStatusValues,
  createVscodeQueryOptions,
  executionEnvironmentValues,
  initAppScopeRuntime,
  initQueryDurationConstants,
  initVscodeApiBridge,
  queryDurations,
  reasoningEffortValues,
  scheduleFrequencyValues,
};
