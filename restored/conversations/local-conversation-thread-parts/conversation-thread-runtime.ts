// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Low-level initialization helpers for the local conversation thread chunk.
import { lA as initThreadAuxiliaryRuntimeRaw } from "../../vendor/appg-thread-shared-runtime";
import { getChunkModuleExports as getChunkModuleExportsRaw } from "../../runtime/shared-utility-runtime";

import {
  Rv as initMarkdownUtilityNoopRaw,
  Ux as initAgentMentionMapRaw,
  Zu as initThreadInternalStateRaw,
} from "../../vendor/projects-app-shared-runtime";

export function getChunkModuleExports(chunkName?: string): unknown {
  return chunkName === undefined
    ? getChunkModuleExportsRaw()
    : getChunkModuleExportsRaw(chunkName);
}

export function initAgentMentionMap(): void {
  initAgentMentionMapRaw();
}

export function initMarkdownUtilityNoop(): void {
  initMarkdownUtilityNoopRaw();
}

export function initThreadInternalStateRuntime(): void {
  initThreadInternalStateRaw();
}

export function initThreadAuxiliaryRuntime(): void {
  initThreadAuxiliaryRuntimeRaw();
}
