// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Navigation and missing-conversation state helpers for local conversation threads.
import React from "react";
import { useScope } from "../../runtime/app-scope-hooks";
import { once } from "../../runtime/commonjs-interop";
import {
  getHotkeyWindowThreadPath,
  getLocalConversationPath,
  initLocalConversationNavigationRuntime,
  isHotkeyWindowRoute,
  localConversationRouteScope,
  toastSignal,
  useNavigate,
} from "../local-conversation-route-runtime";
import { initIntlRuntime, useIntl } from "../../vendor/react-intl";

type LocalConversationTurnItem = {
  mcpAppResourceUri?: string | null;
  type?: string | null;
};

type LocalConversationTurn = {
  error?: unknown | null;
  items: readonly LocalConversationTurnItem[];
  status?: string | null;
  turnId?: string | null;
};

type LocalConversationTurnEntry = {
  turn: {
    items: readonly LocalConversationTurnItem[];
  };
};

type MissingConversationRedirectOptions = {
  allowMissingConversation: boolean;
  hasConversation: boolean;
  isResuming: boolean | null | undefined;
  launcherFallbackPath: string;
  subagentParentThreadId: string | null | undefined;
  visibleSubagentParentThreadId: string | null | undefined;
};

export function turnHasMcpAppResource(
  entry: LocalConversationTurnEntry | null | undefined,
) {
  return (
    entry?.turn.items.some(
      (item) => item.type === "mcpToolCall" && item.mcpAppResourceUri != null,
    ) === true
  );
}

export function shouldShowEmptyResumingThreadState({
  conversationTurns,
  hasRenderableTurns,
  isResuming,
  isSubagentThread,
}: {
  conversationTurns: readonly LocalConversationTurn[];
  hasRenderableTurns: boolean;
  isResuming: boolean | null | undefined;
  isSubagentThread: boolean;
}) {
  return (
    !isSubagentThread &&
    isResuming &&
    (!hasRenderableTurns ||
      (conversationTurns.length === 1 &&
        conversationTurns[0]?.turnId == null &&
        conversationTurns[0]?.status === "completed" &&
        conversationTurns[0]?.error == null &&
        conversationTurns[0]?.items.length === 0))
  );
}

export function getConversationNavigationPath(conversationId: string) {
  return isHotkeyWindowRoute()
    ? getHotkeyWindowThreadPath(conversationId)
    : getLocalConversationPath(conversationId);
}

export function useMissingLocalConversationRedirect({
  allowMissingConversation,
  hasConversation,
  isResuming,
  launcherFallbackPath,
  subagentParentThreadId,
  visibleSubagentParentThreadId,
}: MissingConversationRedirectOptions) {
  let scope = useScope(localConversationRouteScope),
    intl = useIntl(),
    navigate = useNavigate(),
    hasSeenConversationRef = React.useRef(false),
    lastSubagentParentThreadIdRef = React.useRef<string | null>(null);

  React.useEffect(() => {
    visibleSubagentParentThreadId != null &&
      (lastSubagentParentThreadIdRef.current = visibleSubagentParentThreadId);
  }, [visibleSubagentParentThreadId]);

  React.useEffect(() => {
    if (!allowMissingConversation) {
      if (hasConversation) {
        hasSeenConversationRef.current = true;
        return;
      }
      if (!isResuming) {
        if (hasSeenConversationRef.current) {
          let lastSubagentParentThreadId =
            lastSubagentParentThreadIdRef.current;
          if (lastSubagentParentThreadId != null) {
            navigate(
              getConversationNavigationPath(lastSubagentParentThreadId),
              {
                replace: true,
              },
            );
            return;
          }
          navigate(isHotkeyWindowRoute() ? launcherFallbackPath : "/", {
            replace: true,
          });
          return;
        }
        scope.get(toastSignal).danger(
          intl.formatMessage({
            id: "localConversationPage.error.toast",
            defaultMessage: "Conversation not found",
            description:
              "Error message for when the local conversation is not found",
          }),
        );
      }
    }
  }, [
    allowMissingConversation,
    hasConversation,
    isResuming,
    subagentParentThreadId,
    launcherFallbackPath,
    scope,
    intl,
    navigate,
  ]);
}

export const initLocalConversationNavigationHelpers = once(() => {
  initLocalConversationNavigationRuntime();
  initIntlRuntime();
});
