// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Mark local conversations as read when visible and their read marker changes.
import React from "react";
import { useAppScopeValue } from "../../boundaries/app-scope";
import { once } from "../../runtime/commonjs-interop";
import { useStableCallback } from "../../utils/use-stable-callback";
import {
  Ep as conversationUnreadSignal,
  Kp as conversationReadStateSignal,
  Op as initConversationStateSelectors,
  PB as useScopedValue,
  Xp as latestConversationTurnSignal,
  ak as initAppServerRequestBridge,
  bM as initKeyboardShortcutLabel,
  ok as sendAppServerRequest,
  AB as initScopeRuntime,
} from "../../boundaries/current-ref/appg-thread-shared-producer";
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
  initScopeRuntime();
  initConversationStateSelectors();
  initAppServerRequestBridge();
  initWindowVisibilitySignal();
  initKeyboardShortcutLabel();
});
