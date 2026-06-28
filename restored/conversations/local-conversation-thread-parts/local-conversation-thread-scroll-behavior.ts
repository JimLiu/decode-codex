// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Scroll restoration, older-history loading, and submit-placement behavior for local conversation frames.
import React from "react";
import { appLogger, initAppLoggerRuntime } from "../../runtime/app-logger";
import {
  initAppServerRequestRuntime,
  sendAppServerRequest,
} from "../../runtime/app-server-request";
import { useScopedValue } from "../../runtime/app-scope-hooks";
import { once } from "../../runtime/commonjs-interop";
import {
  conversationHistoryCompleteSignal,
  initConversationStateRuntime,
} from "../../runtime/conversation-state-runtime";
import { useStableCallback } from "../../utils/use-stable-callback";
import { refreshConversationHistorySignals } from "./local-conversation-state";
import { createLatestTurnSubmitPlacementSnapshot } from "./latest-turn-submit-placement";
import { shouldShowScrollToBottomButton } from "./scroll-to-bottom-state";

type ThreadRouteScope = {
  get<Value = unknown>(signal: unknown, key?: unknown): Value;
  set(signal: unknown, key: unknown, valueOrUpdater: unknown): void;
};

type ThreadScrollState = {
  distanceFromBottomPx?: number | null;
  latestTurn?: unknown;
  virtualizedTurnList?: unknown;
};

type ResponseSpacerState = {
  getHeightPx(): number;
  scrollToBottom(): void;
};

type LatestTurnSubmitPlacement = {
  distanceFromBottomPx: number;
  scrollHeightPx: number | null;
};

type ThreadScrollLayoutApi = {
  scrollToBottom(): void;
};

export type LocalConversationThreadScrollBehaviorOptions = {
  conversationId: string;
  hideThreadContent: boolean;
  isScrollToTopEnabled: boolean;
  scope: ThreadRouteScope;
  threadScrollStateSignal: unknown;
  visibleSubagentParentThreadId?: string | null;
};

export function useLocalConversationThreadScrollBehavior({
  conversationId,
  hideThreadContent,
  isScrollToTopEnabled,
  scope,
  threadScrollStateSignal,
  visibleSubagentParentThreadId,
}: LocalConversationThreadScrollBehaviorOptions) {
  let isConversationHistoryComplete =
      useScopedValue(conversationHistoryCompleteSignal, conversationId) ?? true,
    savedThreadScrollState = scope.get<ThreadScrollState | null>(
      threadScrollStateSignal,
      conversationId,
    ),
    initialScrollOffset = savedThreadScrollState?.distanceFromBottomPx ?? null,
    initialVirtualizedTurnListRestoreState =
      savedThreadScrollState?.virtualizedTurnList ?? null,
    [isScrolledFromBottom, setIsScrolledFromBottom] = React.useState(false),
    [scrollDistanceFromBottomPx, setScrollDistanceFromBottomPx] =
      React.useState(0),
    [responseSpacerState, setResponseSpacerState] =
      React.useState<ResponseSpacerState | null>(null),
    latestTurnSubmitPlacementRef = React.useRef<ReturnType<
      typeof createLatestTurnSubmitPlacementSnapshot
    > | null>(null),
    threadScrollLayoutApiRef = React.useRef<ThreadScrollLayoutApi | null>(null),
    loadOlderConversationHistoryPage = async () => {
      if (isConversationHistoryComplete) return "stop";
      try {
        await sendAppServerRequest("load-older-conversation-history-page", {
          conversationId,
          dependentConversationIds:
            visibleSubagentParentThreadId == null
              ? []
              : [visibleSubagentParentThreadId],
        });
        await refreshConversationHistorySignals();
        return (scope.get<boolean>(
          conversationHistoryCompleteSignal,
          conversationId,
        ) ?? true)
          ? "stop"
          : "continue";
      } catch (error) {
        appLogger.warning("Failed to load older thread history", {
          safe: {
            conversationId,
          },
          sensitive: {
            error,
          },
        });
        return "stop";
      }
    };

  let loadOlderConversationHistory = useStableCallback(
      loadOlderConversationHistoryPage,
    ),
    handleThreadScroll = (
      distanceFromBottomPx: number,
      isAtBottom: boolean,
    ) => {
      scope.set(
        threadScrollStateSignal,
        conversationId,
        (previousScrollState: ThreadScrollState | null | undefined) => ({
          distanceFromBottomPx,
          latestTurn: isScrollToTopEnabled
            ? (previousScrollState?.latestTurn ?? null)
            : null,
          virtualizedTurnList: previousScrollState?.virtualizedTurnList ?? null,
        }),
      );
      setScrollDistanceFromBottomPx(distanceFromBottomPx);
      setIsScrolledFromBottom(!isAtBottom);
    },
    onThreadScroll = useStableCallback(handleThreadScroll),
    handleVirtualizedTurnListRestoreStateChange = (
      virtualizedTurnListRestoreState: unknown,
    ) => {
      scope.set(
        threadScrollStateSignal,
        conversationId,
        (previousScrollState: ThreadScrollState | null | undefined) => ({
          distanceFromBottomPx: previousScrollState?.distanceFromBottomPx ?? 0,
          latestTurn: isScrollToTopEnabled
            ? (previousScrollState?.latestTurn ?? null)
            : null,
          virtualizedTurnList: virtualizedTurnListRestoreState,
        }),
      );
    },
    onVirtualizedTurnListRestoreStateChange = useStableCallback(
      handleVirtualizedTurnListRestoreStateChange,
    ),
    showScrollToBottomButton = shouldShowScrollToBottomButton({
      isScrollToTopEnabled,
      isScrolledFromBottom,
      responseSpacerHeightPx: responseSpacerState?.getHeightPx() ?? null,
      scrollDistanceFromBottomPx,
    }),
    scrollToBottom = () => {
      if (isScrollToTopEnabled && responseSpacerState != null) {
        responseSpacerState.scrollToBottom();
        return;
      }
      threadScrollLayoutApiRef.current?.scrollToBottom();
    },
    onScrollToBottom = useStableCallback(scrollToBottom),
    prepareLatestTurnSubmitPlacement = (
      placement: LatestTurnSubmitPlacement,
    ) => {
      let { distanceFromBottomPx, scrollHeightPx } = placement;
      if (hideThreadContent) return;
      latestTurnSubmitPlacementRef.current =
        createLatestTurnSubmitPlacementSnapshot({
          distanceFromBottomPx,
          responseSpacerHeightPx: responseSpacerState?.getHeightPx() ?? 0,
          scrollHeightPx,
        });
    },
    onPrepareLatestTurnSubmitPlacement = useStableCallback(
      prepareLatestTurnSubmitPlacement,
    ),
    consumePendingLatestTurnSubmitPlacement = () => {
      let placementSnapshot = latestTurnSubmitPlacementRef.current;
      latestTurnSubmitPlacementRef.current = null;
      return placementSnapshot;
    },
    onConsumePendingLatestTurnSubmitPlacement = useStableCallback(
      consumePendingLatestTurnSubmitPlacement,
    ),
    clearPendingLatestTurnSubmitPlacement = () => {
      latestTurnSubmitPlacementRef.current = null;
    },
    onClearPendingLatestTurnSubmitPlacement = useStableCallback(
      clearPendingLatestTurnSubmitPlacement,
    );

  React.useEffect(() => {
    if (hideThreadContent) onClearPendingLatestTurnSubmitPlacement();
  }, [hideThreadContent, onClearPendingLatestTurnSubmitPlacement]);

  return {
    initialScrollOffset,
    initialVirtualizedTurnListRestoreState,
    loadOlderConversationHistory,
    onClearPendingLatestTurnSubmitPlacement,
    onConsumePendingLatestTurnSubmitPlacement,
    onPrepareLatestTurnSubmitPlacement,
    onScrollToBottom,
    onThreadScroll,
    onVirtualizedTurnListRestoreStateChange,
    setResponseSpacerState,
    showScrollToBottomButton,
    threadScrollLayoutApiRef,
  };
}

export const initLocalConversationThreadScrollBehaviorChunk = once(() => {
  initConversationStateRuntime();
  initAppServerRequestRuntime();
  initAppLoggerRuntime();
});
