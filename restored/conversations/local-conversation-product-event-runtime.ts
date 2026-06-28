// Restored from ref/webview/assets/local-conversation-stream-role-product-event-DHQpO55W.js
// Runtime bindings for local conversation stream-role and heartbeat host events.
import { gE as streamRoleProductEvent } from "../vendor/appg-thread-shared-runtime";
import {
  initStatsigFeatureGateRuntime as initStatsigFeatureGateHooks,
  useStatsigGate,
} from "../runtime/feature-gate-runtime";
import {
  initReactRuntime,
  initProductEventRuntime,
  getChunkModuleExports,
} from "../runtime/shared-utility-runtime";

import {
  initVscodeMessageRuntime as initVscodeMessageBridge,
  vscodeMessageBridge,
} from "../runtime/vscode-message-runtime";

import {
  appScope,
  initAppScope,
  initScopeRuntime,
} from "../runtime/app-scope-runtime";
import {
  useScope,
  useScopedValue,
  useSignalValue,
} from "../runtime/app-scope-hooks";
import {
  CS as initThreadStateSignalRuntime,
  I_ as initRouteScope,
  Jp as conversationPermissionConfigSignal,
  M_ as localConversationRouteScope,
  Op as initConversationStateSelectors,
  TS as setProductEventProperties,
  Up as conversationCollaborationModeSignal,
  Xp as latestConversationTurnSignal,
  _m as conversationStreamRoleSignal,
} from "../vendor/projects-app-shared-runtime";

export {
  appScope,
  conversationCollaborationModeSignal,
  conversationPermissionConfigSignal,
  conversationStreamRoleSignal,
  getChunkModuleExports,
  initAppScope,
  initConversationStateSelectors,
  initProductEventRuntime,
  initReactRuntime,
  initRouteScope,
  initScopeRuntime,
  initStatsigFeatureGateHooks,
  initThreadStateSignalRuntime,
  initVscodeMessageBridge,
  latestConversationTurnSignal,
  localConversationRouteScope,
  setProductEventProperties,
  streamRoleProductEvent,
  useScope,
  useScopedValue,
  useSignalValue,
  useStatsigGate,
  vscodeMessageBridge,
};
