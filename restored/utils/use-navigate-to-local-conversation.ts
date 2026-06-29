// Restored from ref/webview/assets/use-navigate-to-local-conversation-iv7hbMgu.js
// use-navigate-to-local-conversation-iv7hbMgu chunk restored from the Codex webview bundle.
import { flushSync } from "react-dom";
import {
  createLocalConversationPath,
  normalizeConversationId,
} from "../boundaries/src-l0hb-mz-p";
import { useNavigate } from "../vendor/react-router";
import { useStableCallback } from "./use-stable-callback";
export type NavigateToLocalConversation = (conversationId: string) => void;
export function useNavigateToLocalConversation(): NavigateToLocalConversation {
  const navigate = useNavigate();
  return useStableCallback((conversationId: string) => {
    const normalizedConversationId = normalizeConversationId(conversationId);
    const localConversationPath = createLocalConversationPath(
      normalizedConversationId,
    );
    flushSync(() => {
      navigate(localConversationPath);
    });
  });
}

export function initNavigateToLocalConversationRuntimeChunk(): void {}
