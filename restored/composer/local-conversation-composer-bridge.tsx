// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Local conversation composer bridge and host connection signals.
import { appServerConnectionStateSignal as hostConnectionStatusSignal } from "../boundaries/thread-context-inputs.facade";
import { LOCAL_HOST_ID } from "../boundaries/use-host-config.facade";
import { backgroundAgentsSignal } from "../conversations/background-subagents-runtime";
import { useSystemPrefersReducedMotion } from "../utils/reduced-motion-preference";

import {
  initThreadComposerFooterChunk,
  threadComposerContext,
  ThreadComposerFooter,
} from "./thread-composer-footer";
export type {
  ThreadComposerFooterProps,
  ThreadComposerFooterSideConversationRequest,
} from "./thread-composer-footer";

export {
  backgroundAgentsSignal,
  hostConnectionStatusSignal,
  LOCAL_HOST_ID,
  threadComposerContext,
  ThreadComposerFooter,
};

export function initLocalConversationComposerRuntime(): void {
  initThreadComposerFooterChunk();
}

export function useLocalConversationComposerRuntime(): void {
  useSystemPrefersReducedMotion();
}

export function initThreadComposerFooterRuntime(): void {
  initThreadComposerFooterChunk();
}
