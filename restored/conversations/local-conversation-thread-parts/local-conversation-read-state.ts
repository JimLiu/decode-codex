// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Mark local conversations as read when visible and their read marker changes.
import React from "react";
import { useAppScopeValue } from "../../boundaries/app-scope";
import {
  initAppServerRequestRuntime,
  sendAppServerRequest,
} from "../../runtime/app-server-request";
import { initAppScopeSignalRuntime } from "../../runtime/app-scope-runtime";
import { useScopedValue } from "../../runtime/app-scope-hooks";
import { once } from "../../runtime/commonjs-interop";
import {
  conversationReadStateSignal,
  conversationUnreadSignal,
  initConversationStateRuntime,
  latestConversationTurnSignal,
} from "../../runtime/conversation-state-runtime";
import {
  initUseStableCallback,
  useStableCallback,
} from "../../utils/use-stable-callback";
import {
  initWindowVisibilitySignal,
  windowVisibleSignal,
} from "../../runtime/window-focus-state";

export function useMarkConversationReadOnVisibility(
  conversationId: string,
  hasConversation: boolean,
) {
  let isUnread =
      useScopedValue(conversationUnreadSignal, conversationId) ?? false,
    isWindowVisible = useAppScopeValue<boolean | null>(windowVisibleSignal),
    conversationReadMarker = useScopedValue(
      latestConversationTurnSignal,
      conversationId,
    ),
    conversationReadState = useScopedValue(
      conversationReadStateSignal,
      conversationId,
    ),
    lastMarkedConversationIdRef = React.useRef<string | null>(null),
    lastConversationReadStateRef = React.useRef<unknown>(null),
    lastConversationReadMarkerRef = React.useRef<unknown>(null),
    markConversationRead = () => {
      lastMarkedConversationIdRef.current = conversationId;
      lastConversationReadStateRef.current = conversationReadState;
      lastConversationReadMarkerRef.current = conversationReadMarker;
      if (hasConversation && isUnread) {
        sendAppServerRequest("mark-conversation-as-read", {
          conversationId,
        });
      }
    };

  let markConversationReadEvent = useStableCallback(markConversationRead),
    markConversationReadHandler = () => {
      markConversationReadEvent();
    },
    markConversationReadEffectEvent = React.useEffectEvent(
      markConversationReadHandler,
    ),
    markVisibleConversationReadEffect = () => {
      if (!hasConversation || isWindowVisible !== true) return;
      if (lastMarkedConversationIdRef.current !== conversationId) {
        markConversationReadEffectEvent();
        return;
      }
      if (
        lastConversationReadStateRef.current !== conversationReadState ||
        lastConversationReadMarkerRef.current !== conversationReadMarker
      ) {
        markConversationReadEffectEvent();
      }
    },
    markReadEffectDeps = [
      conversationId,
      hasConversation,
      isUnread,
      isWindowVisible,
      conversationReadState,
      conversationReadMarker,
    ];

  React.useEffect(markVisibleConversationReadEffect, markReadEffectDeps);

  return markConversationReadEvent;
}

export const initMarkConversationReadEffect = once(() => {
  initAppScopeSignalRuntime();
  initConversationStateRuntime();
  initAppServerRequestRuntime();
  initWindowVisibilitySignal();
  initUseStableCallback();
});
