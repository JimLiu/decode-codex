// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Latest-turn auto-follow wrapper for the local conversation virtualized turn list.
import React from "react";
import { once } from "../../runtime/commonjs-interop";
import {
  getScrollDistanceFromBottomPx,
  initReverseScrollUtilities,
} from "../../utils/reverse-scroll-distance";
import {
  initUseStableCallback,
  useStableCallback,
} from "../../utils/use-stable-callback";
import {
  initWindowZoomContext,
  useWindowZoom,
} from "../../utils/window-zoom-context";
import { useScope } from "../../runtime/app-scope-hooks";
import { appScopeRoot as appScope } from "../../runtime/app-scope-runtime";
import {
  animateSignalValue,
  createMotionSignal,
  initMotionSignalRuntime,
  motion,
} from "../../utils/motion-signal-runtime";
import { initThreadScrollLayoutStyleChunk } from "../../threads/thread-scroll-layout";
import {
  initThreadScrollControllerContextChunk,
  threadScrollControllerContext,
  useThreadScrollController,
} from "../../threads/thread-scroll-layout/scroll-controller-context";
import {
  createLatestTurnScrollState,
  type ConversationTurnItem,
  getLatestTurnIdentityKey,
  getLatestTurnPhase,
  isPassiveLatestTurnFollowMode,
  type LatestTurnPhase,
  reduceLatestTurnScrollState,
  type LatestTurnScrollState,
  type LatestTurnScrollStateEvent,
  type LatestTurnVisibleTurnEntry,
} from "./local-conversation-latest-turn-scroll-state";
import {
  adjustScrollForLatestTurnHeightDelta,
  createPersistedScrollStateSnapshot,
  getMaxResponseSpacerHeightPx,
  getResponseSpacerOverflowPx,
  getThreadScrollPaddingBottomPx,
  LATEST_TURN_PLACEMENT_DISTANCE_PX,
  measureLatestTurnFollowContentOverflow,
  RESPONSE_SPACER_INTERSECTION_THRESHOLDS,
  RESPONSE_SPACER_SPRING_TRANSITION,
} from "./local-conversation-response-spacer";
import {
  initLocalConversationTurnRowChunk,
  initLocalConversationTurnRowDependencies,
  LocalConversationTurnRow,
  type LocalConversationTurnRowProps,
} from "./local-conversation-turn-row";
import {
  initVirtualizedTurnListChunk,
  VirtualizedTurnList,
} from "./local-conversation-virtualized-turn-list";
import {
  initThreadScrollStateSignal,
  threadScrollStateSignal,
} from "./local-conversation-thread-scroll-state-signal";
import type { VirtualizedTurnListContracts } from "./local-conversation-virtualized-turn-list-types";

type LatestTurnHeightChange = VirtualizedTurnListContracts["heightChange"];
type VirtualizedTurnEntry = VirtualizedTurnListContracts["entry"];
type VirtualizedTurnListApi = VirtualizedTurnListContracts["api"];
type VirtualizedTurnListRestoreState =
  VirtualizedTurnListContracts["restoreState"];

type LatestTurnMotionContextValue = {
  turnKey: string | null;
  yPx: unknown;
};

type AppScopeController = {
  get<TValue = unknown>(signal: unknown, key?: unknown): TValue;
  set(signal: unknown, key: unknown, value: unknown): void;
};

type PersistedLatestTurnState = LatestTurnScrollState & {
  isLatestTurnInProgress?: boolean;
  latestTurnFollowContentHeightPx?: number | null;
  latestTurnHeightPx?: number | null;
  latestTurnPhase?: LatestTurnPhase;
  turnKey?: string | null;
};

type PersistedThreadScrollState = {
  distanceFromBottomPx?: number | null;
  latestTurn?: PersistedLatestTurnState | null;
  virtualizedTurnList?: VirtualizedTurnListRestoreState;
};

type PendingLatestTurnSubmitPlacement = {
  distanceFromBottomPx: number;
  scrollHeightPx?: number | null;
  shouldPlaceLatestTurn?: boolean;
};

type LocalConversationAutoFollowVirtualizedTurnListProps = {
  consumePendingLatestTurnSubmitPlacement?:
    | (() => PendingLatestTurnSubmitPlacement | null)
    | null;
  conversationId: string;
  entries: readonly VirtualizedTurnEntry[];
  initialScrollOffset?: number | null;
  initialVirtualizedTurnListRestoreState?: VirtualizedTurnListRestoreState;
  onApiChange?: ((api: VirtualizedTurnListApi | null) => void) | null;
  onResponseSpacerStateChange(
    state: { getHeightPx(): number; scrollToBottom(): void } | null,
  ): void;
  onVisibleContentReady?: (() => void) | null;
  onVirtualizedTurnListRestoreStateChange(
    state: VirtualizedTurnListRestoreState,
  ): void;
  synchronouslyMeasureLatestTurnUpdates?: boolean;
};

const LatestTurnMotionContext =
  React.createContext<LatestTurnMotionContextValue | null>(null);
export function LocalConversationAutoFollowVirtualizedTurnList({
  conversationId,
  entries,
  initialScrollOffset,
  initialVirtualizedTurnListRestoreState,
  consumePendingLatestTurnSubmitPlacement,
  onResponseSpacerStateChange,
  onApiChange,
  onVisibleContentReady,
  onVirtualizedTurnListRestoreStateChange,
  synchronouslyMeasureLatestTurnUpdates = false,
}: LocalConversationAutoFollowVirtualizedTurnListProps) {
  let scope = useScope(appScope) as AppScopeController,
    windowZoom = useWindowZoom(),
    latestEntry = entries.at(-1),
    latestTurnSnapshot =
      latestEntry == null ? null : toLatestTurnVisibleEntry(latestEntry),
    latestTurnKey = latestEntry?.turnKey ?? null,
    latestTurnIdentityKey =
      latestTurnSnapshot == null
        ? null
        : getLatestTurnIdentityKey(latestTurnSnapshot),
    latestTurnPhase =
      latestTurnSnapshot == null
        ? "idle"
        : getLatestTurnPhase(latestTurnSnapshot.turn),
    isLatestTurnInProgress = latestEntry?.turn?.status === "inProgress",
    savedScrollState = scope.get<PersistedThreadScrollState | null>(
      threadScrollStateSignal,
      conversationId,
    ),
    savedLatestTurnState =
      savedScrollState?.latestTurn?.turnKey === latestTurnKey
        ? savedScrollState.latestTurn
        : null,
    responseSpacerHeightPx = createMotionSignal(0),
    latestTurnOffsetY = createMotionSignal(0),
    scrollController = useThreadScrollController(),
    scrollStateRef = React.useRef(
      createLatestTurnScrollState({
        followMode: savedLatestTurnState?.followMode ?? "static",
      }),
    ),
    restoredPassiveLatestTurnHeightRef = React.useRef(
      savedLatestTurnState != null &&
        isPassiveLatestTurnFollowMode(savedLatestTurnState.followMode)
        ? savedLatestTurnState.latestTurnHeightPx
        : null,
    ),
    latestTurnHeightRef = React.useRef(
      savedLatestTurnState?.latestTurnHeightPx ?? null,
    ),
    latestTurnFollowContentHeightRef = React.useRef(
      savedLatestTurnState?.latestTurnFollowContentHeightPx ?? null,
    ),
    hasRestoredInitialScrollRef = React.useRef(false),
    initialScrollOffsetRef = React.useRef(initialScrollOffset),
    restoreStateRef = React.useRef(initialVirtualizedTurnListRestoreState),
    responseSpacerElementRef = React.useRef<HTMLDivElement | null>(null),
    isResponseSpacerAtViewportBottomRef = React.useRef(false),
    latestTurnKeyRef = React.useRef(latestTurnKey),
    latestTurnIdentityKeyRef = React.useRef(latestTurnIdentityKey),
    previousLatestTurnPhaseRef = React.useRef(
      savedLatestTurnState?.latestTurnPhase ?? latestTurnPhase,
    ),
    latestTurnPhaseRef = React.useRef(latestTurnPhase),
    wasLatestTurnInProgressRef = React.useRef(
      savedLatestTurnState?.isLatestTurnInProgress ?? isLatestTurnInProgress,
    ),
    latestTurnInProgressRef = React.useRef(isLatestTurnInProgress),
    latestTurnMotionContext = React.useMemo(
      () => ({
        turnKey: latestEntry?.turnKey ?? null,
        yPx: latestTurnOffsetY,
      }),
      [latestEntry?.turnKey, latestTurnOffsetY],
    ),
    responseSpacerAdjustedScrollController = React.useMemo(() => {
      let toSpacerAdjustedDistance = (distanceFromBottomPx: number) =>
        Math.max(0, distanceFromBottomPx - responseSpacerHeightPx.get());
      return {
        ...scrollController,
        addScrollListener: (listener: (distanceFromBottomPx: number) => void) =>
          scrollController.addScrollListener((distanceFromBottomPx: number) => {
            listener(toSpacerAdjustedDistance(distanceFromBottomPx));
          }),
        addUserScrollListener: (
          listener: (
            distanceFromBottomPx: number,
            previousDistanceFromBottomPx?: number,
          ) => void,
        ) =>
          scrollController.addUserScrollListener(
            (
              distanceFromBottomPx: number,
              previousDistanceFromBottomPx?: number,
            ) => {
              listener(
                toSpacerAdjustedDistance(distanceFromBottomPx),
                previousDistanceFromBottomPx == null
                  ? undefined
                  : toSpacerAdjustedDistance(previousDistanceFromBottomPx),
              );
            },
          ),
        getLastScrollDistanceFromBottomPx: () =>
          toSpacerAdjustedDistance(
            scrollController.getLastScrollDistanceFromBottomPx(),
          ),
        scrollToDistanceFromBottomPx: (
          distanceFromBottomPx: number,
          behavior: ScrollBehavior,
        ) => {
          scrollController.scrollToDistanceFromBottomPx(
            distanceFromBottomPx + responseSpacerHeightPx.get(),
            behavior,
          );
        },
      };
    }, [responseSpacerHeightPx, scrollController]);

  latestTurnPhaseRef.current = latestTurnPhase;
  latestTurnInProgressRef.current = isLatestTurnInProgress;
  latestTurnKeyRef.current = latestTurnKey;

  let dispatchScrollStateEvent = useStableCallback(
      (event: LatestTurnScrollStateEvent, forceSync = false) => {
        let previousFollowMode = scrollStateRef.current.followMode;
        scrollStateRef.current = reduceLatestTurnScrollState(
          scrollStateRef.current,
          event,
        );
        let { followMode } = scrollStateRef.current;
        if (forceSync || followMode !== previousFollowMode) {
          scrollController.setFooterResizeViewportPreserveDisabled(
            latestTurnInProgressRef.current &&
              isPassiveLatestTurnFollowMode(followMode),
          );
        }
        return scrollStateRef.current;
      },
    ),
    syncFooterResizePreserveDisabled = useStableCallback(() => {
      let { followMode } = scrollStateRef.current;
      scrollController.setFooterResizeViewportPreserveDisabled(
        latestTurnInProgressRef.current &&
          isPassiveLatestTurnFollowMode(followMode),
      );
    }),
    getPendingInitialRestoreDistanceFromBottom = useStableCallback(() => {
      let initialScrollOffsetPx = initialScrollOffsetRef.current;
      return hasRestoredInitialScrollRef.current ||
        initialScrollOffsetPx == null ||
        scrollStateRef.current.followMode === "prework_follow"
        ? null
        : Math.max(0, initialScrollOffsetPx - responseSpacerHeightPx.get());
    }),
    restoreInitialScrollOffset = useStableCallback(() => {
      if (hasRestoredInitialScrollRef.current) return;
      let initialScrollOffsetPx = initialScrollOffsetRef.current;
      if (
        initialScrollOffsetPx == null ||
        scrollStateRef.current.followMode === "prework_follow"
      ) {
        hasRestoredInitialScrollRef.current = true;
        return;
      }
      let scrollElement = scrollController.getScrollElement();
      if (scrollElement != null) {
        if (
          Math.abs(
            getScrollDistanceFromBottomPx(scrollElement) -
              initialScrollOffsetPx,
          ) <= 24
        ) {
          hasRestoredInitialScrollRef.current = true;
          return;
        }
        scrollController.scrollToDistanceFromBottomPx(
          initialScrollOffsetPx,
          "instant",
        );
        if (
          Math.abs(
            getScrollDistanceFromBottomPx(scrollElement) -
              initialScrollOffsetPx,
          ) <= 24
        ) {
          hasRestoredInitialScrollRef.current = true;
        }
      }
    }),
    handleRestoreStateChange = useStableCallback(
      (restoreState: VirtualizedTurnListRestoreState) => {
        restoreStateRef.current = restoreState;
        onVirtualizedTurnListRestoreStateChange(restoreState);
      },
    );

  React.useLayoutEffect(
    () => (
      syncFooterResizePreserveDisabled(),
      () => {
        let persistedLatestTurnKey = latestTurnKeyRef.current,
          scrollElement = scrollController.getScrollElement(),
          persistedScrollSnapshot = createPersistedScrollStateSnapshot({
            distanceFromBottomPx:
              scrollElement == null
                ? scrollController.getLastScrollDistanceFromBottomPx()
                : getScrollDistanceFromBottomPx(scrollElement),
            latestTurnPhase: latestTurnPhaseRef.current,
            responseSpacerHeightPx: responseSpacerHeightPx.get(),
            scrollPaddingBottomPx:
              scrollElement == null
                ? 0
                : getThreadScrollPaddingBottomPx(scrollElement),
            scrollState: scrollStateRef.current,
          });
        scope.set(threadScrollStateSignal, conversationId, {
          distanceFromBottomPx: persistedScrollSnapshot.distanceFromBottomPx,
          latestTurn:
            persistedLatestTurnKey == null
              ? null
              : {
                  turnKey: persistedLatestTurnKey,
                  isLatestTurnInProgress: latestTurnInProgressRef.current,
                  latestTurnPhase: latestTurnPhaseRef.current,
                  ...persistedScrollSnapshot.scrollState,
                  latestTurnHeightPx: isPassiveLatestTurnFollowMode(
                    persistedScrollSnapshot.scrollState.followMode,
                  )
                    ? latestTurnHeightRef.current
                    : null,
                  latestTurnFollowContentHeightPx:
                    latestTurnFollowContentHeightRef.current,
                },
          virtualizedTurnList: restoreStateRef.current,
        });
        scrollController.setFooterResizeViewportPreserveDisabled(false);
      }
    ),
    [
      conversationId,
      responseSpacerHeightPx,
      scope,
      scrollController,
      syncFooterResizePreserveDisabled,
    ],
  );

  let clearResponseSpacer = useStableCallback(() => {
      responseSpacerHeightPx.stop();
      responseSpacerHeightPx.set(0);
      isResponseSpacerAtViewportBottomRef.current = false;
    }),
    scrollToBottomAndClearSpacer = useStableCallback(() => {
      hasRestoredInitialScrollRef.current = true;
      latestTurnOffsetY.stop();
      latestTurnOffsetY.set(0);
      clearResponseSpacer();
      onResponseSpacerStateChange(null);
      scrollController.scrollToDistanceFromBottomPx(0, "instant");
    }),
    scrollToLatestTurnBottom = useStableCallback(() => {
      hasRestoredInitialScrollRef.current = true;
      if (latestTurnInProgressRef.current) {
        latestTurnOffsetY.stop();
        latestTurnOffsetY.set(0);
        clearResponseSpacer();
        dispatchScrollStateEvent(
          {
            type: "scroll_to_bottom",
            latestTurnPhase: latestTurnPhaseRef.current,
          },
          true,
        );
        scrollController.scrollToDistanceFromBottomPx(0, "instant");
        return;
      }
      if (
        latestTurnPhaseRef.current === "idle" &&
        responseSpacerHeightPx.get() > 24
      ) {
        scrollToBottomAndClearSpacer();
        return;
      }
      scrollController.scrollToBottom();
    }),
    shrinkResponseSpacerToDistance = useStableCallback(
      (targetDistanceFromBottomPx: number) => {
        let currentSpacerHeightPx = responseSpacerHeightPx.get(),
          nextSpacerHeightPx =
            targetDistanceFromBottomPx <= 24
              ? 0
              : Math.min(currentSpacerHeightPx, targetDistanceFromBottomPx);
        if (currentSpacerHeightPx - nextSpacerHeightPx <= 24) return;
        let scrollElement = scrollController.getScrollElement(),
          currentDistanceFromBottomPx =
            scrollElement == null
              ? 0
              : getScrollDistanceFromBottomPx(scrollElement),
          spacerHeightDeltaPx = nextSpacerHeightPx - currentSpacerHeightPx;
        latestTurnOffsetY.stop();
        latestTurnOffsetY.set(0);
        responseSpacerHeightPx.stop();
        responseSpacerHeightPx.set(nextSpacerHeightPx);
        if (nextSpacerHeightPx <= 24) onResponseSpacerStateChange(null);
        if (scrollElement != null) {
          scrollController.scrollToDistanceFromBottomPx(
            Math.max(0, currentDistanceFromBottomPx + spacerHeightDeltaPx),
            "instant",
          );
        }
      },
    ),
    handleUserScroll = useStableCallback(
      (distanceFromBottomPx: number, previousDistanceFromBottomPx?: number) => {
        hasRestoredInitialScrollRef.current = true;
        let currentSpacerHeightPx = responseSpacerHeightPx.get();
        if (distanceFromBottomPx <= 24) {
          if (
            (currentSpacerHeightPx <= 24 ||
              isResponseSpacerAtViewportBottomRef.current) &&
            previousDistanceFromBottomPx != null &&
            previousDistanceFromBottomPx > 24 &&
            latestTurnInProgressRef.current
          ) {
            dispatchScrollStateEvent(
              {
                type: "scroll_to_bottom",
                latestTurnPhase: latestTurnPhaseRef.current,
              },
              true,
            );
            scrollController.scrollToDistanceFromBottomPx(0, "instant");
          }
          return;
        }
        if (
          !latestTurnInProgressRef.current &&
          latestTurnPhaseRef.current === "idle" &&
          currentSpacerHeightPx > 24
        ) {
          shrinkResponseSpacerToDistance(
            currentSpacerHeightPx - distanceFromBottomPx,
          );
          return;
        }
        if (
          latestTurnInProgressRef.current &&
          latestTurnPhaseRef.current === "prework" &&
          previousDistanceFromBottomPx != null &&
          distanceFromBottomPx > previousDistanceFromBottomPx &&
          currentSpacerHeightPx > 24 &&
          distanceFromBottomPx > currentSpacerHeightPx
        ) {
          let distanceAfterSpacerPx =
            distanceFromBottomPx - currentSpacerHeightPx;
          latestTurnOffsetY.stop();
          latestTurnOffsetY.set(0);
          clearResponseSpacer();
          scrollController.scrollToDistanceFromBottomPx(
            distanceAfterSpacerPx,
            "instant",
          );
        }
      },
    );

  React.useLayoutEffect(
    () => scrollController.addUserScrollListener(handleUserScroll),
    [handleUserScroll, scrollController],
  );

  React.useLayoutEffect(() => {
    let scrollElement = scrollController.getScrollElement(),
      responseSpacerElement = responseSpacerElementRef.current;
    if (
      scrollElement == null ||
      responseSpacerElement == null ||
      typeof IntersectionObserver > "u"
    )
      return;
    let intersectionObserver = new IntersectionObserver(
      (intersectionEntries) => {
        let lastIntersectionEntry =
          intersectionEntries[intersectionEntries.length - 1];
        if (lastIntersectionEntry == null) return;
        let intersectionHeightPx =
          lastIntersectionEntry.intersectionRect.height;
        if (latestTurnInProgressRef.current) {
          isResponseSpacerAtViewportBottomRef.current =
            Math.max(
              0,
              intersectionHeightPx -
                getThreadScrollPaddingBottomPx(scrollElement),
            ) <= 24;
          return;
        }
        shrinkResponseSpacerToDistance(
          Math.min(
            intersectionHeightPx,
            responseSpacerHeightPx.get() -
              getScrollDistanceFromBottomPx(scrollElement),
          ),
        );
      },
      {
        root: scrollElement,
        threshold: RESPONSE_SPACER_INTERSECTION_THRESHOLDS,
      },
    );
    intersectionObserver.observe(responseSpacerElement);
    return () => {
      intersectionObserver.disconnect();
    };
  }, [
    responseSpacerHeightPx,
    scrollController,
    shrinkResponseSpacerToDistance,
  ]);

  React.useLayoutEffect(() => {
    if (latestTurnIdentityKey == null) {
      onResponseSpacerStateChange(null);
      return;
    }
    onResponseSpacerStateChange({
      getHeightPx: () => responseSpacerHeightPx.get(),
      scrollToBottom: scrollToLatestTurnBottom,
    });
    return () => {
      onResponseSpacerStateChange(null);
    };
  }, [
    latestTurnIdentityKey,
    scrollToLatestTurnBottom,
    onResponseSpacerStateChange,
    responseSpacerHeightPx,
  ]);

  let clampResponseSpacerToViewport = useStableCallback(() => {
    let scrollElement = scrollController.getScrollElement();
    if (scrollElement == null) return;
    let maxSpacerHeightPx = getMaxResponseSpacerHeightPx({
        scrollElementHeightPx: scrollElement.clientHeight,
        scrollPaddingBottomPx: getThreadScrollPaddingBottomPx(scrollElement),
      }),
      currentSpacerHeightPx = responseSpacerHeightPx.get();
    if (currentSpacerHeightPx <= 24) return;
    let nextSpacerHeightPx = Math.min(currentSpacerHeightPx, maxSpacerHeightPx);
    if (Math.abs(nextSpacerHeightPx - currentSpacerHeightPx) <= 24) return;
    let spacerHeightDeltaPx = nextSpacerHeightPx - currentSpacerHeightPx;
    responseSpacerHeightPx.stop();
    responseSpacerHeightPx.set(nextSpacerHeightPx);
    if (nextSpacerHeightPx <= 24) onResponseSpacerStateChange(null);
    let currentDistanceFromBottomPx =
        getScrollDistanceFromBottomPx(scrollElement),
      nextDistanceFromBottomPx = Math.max(
        0,
        currentDistanceFromBottomPx + spacerHeightDeltaPx,
      );
    scrollController.scrollToDistanceFromBottomPx(
      nextDistanceFromBottomPx,
      "instant",
    );
  });

  React.useLayoutEffect(() => {
    let scrollElement = scrollController.getScrollElement();
    if (scrollElement == null) return;
    clampResponseSpacerToViewport();
    let resizeFrameId: number | null = null,
      scheduleClampResponseSpacer = () => {
        resizeFrameId ??= window.requestAnimationFrame(() => {
          resizeFrameId = null;
          clampResponseSpacerToViewport();
        });
      },
      resizeObserver =
        typeof ResizeObserver > "u"
          ? null
          : new ResizeObserver(scheduleClampResponseSpacer);
    resizeObserver?.observe(scrollElement);
    window.addEventListener("resize", scheduleClampResponseSpacer, {
      passive: true,
    });
    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener("resize", scheduleClampResponseSpacer);
      if (resizeFrameId != null) window.cancelAnimationFrame(resizeFrameId);
    };
  }, [clampResponseSpacerToViewport, scrollController]);

  let handleLatestTurnHeightChange = useStableCallback(
      ({
        heightDeltaPx,
        heightPx,
        bottomViewportOverflowPx,
        turnElement,
        followContentHeightPx,
      }: LatestTurnHeightChange) => {
        let scrollElement = scrollController.getScrollElement(),
          restoredPassiveHeightPx = restoredPassiveLatestTurnHeightRef.current;
        if (heightPx != null) {
          latestTurnHeightRef.current = heightPx;
          restoredPassiveLatestTurnHeightRef.current = null;
        }
        if (followContentHeightPx != null) {
          latestTurnFollowContentHeightRef.current = followContentHeightPx;
        }
        if (
          restoredPassiveHeightPx != null &&
          scrollElement != null &&
          heightPx != null &&
          Math.abs(heightPx - restoredPassiveHeightPx) > 24
        ) {
          let restoredHeightDeltaPx = heightPx - restoredPassiveHeightPx;
          if (initialScrollOffsetRef.current != null) {
            hasRestoredInitialScrollRef.current = false;
            initialScrollOffsetRef.current = Math.max(
              0,
              initialScrollOffsetRef.current + restoredHeightDeltaPx,
            );
          }
          adjustScrollForLatestTurnHeightDelta({
            allowResponseSpacerGrowth: latestTurnInProgressRef.current,
            distanceDeltaPx: restoredHeightDeltaPx,
            responseSpacerHeightPx,
            scrollController,
            scrollElement,
          });
        }
        if (scrollStateRef.current.followMode === "user_follow") {
          scrollController.scrollToDistanceFromBottomPx(0, "instant");
          return;
        }
        if (
          scrollStateRef.current.followMode === "prework_follow" &&
          latestTurnPhaseRef.current === "prework"
        ) {
          scrollController.scrollToDistanceFromBottomPx(0, "instant");
          return;
        }
        if (
          scrollElement != null &&
          restoredPassiveHeightPx == null &&
          heightDeltaPx != null &&
          heightDeltaPx !== 0 &&
          isPassiveLatestTurnFollowMode(scrollStateRef.current.followMode)
        ) {
          adjustScrollForLatestTurnHeightDelta({
            allowResponseSpacerGrowth: latestTurnInProgressRef.current,
            distanceDeltaPx: heightDeltaPx,
            responseSpacerHeightPx,
            scrollController,
            scrollElement,
          });
        }
        if (
          scrollStateRef.current.followMode === "static" ||
          latestTurnPhaseRef.current !== "prework" ||
          scrollStateRef.current.followMode !== "prework_watch" ||
          responseSpacerHeightPx.get() <= 24 ||
          scrollElement == null ||
          turnElement == null
        )
          return;

        let followContentOverflowPx =
            measureLatestTurnFollowContentOverflow({
              scrollElement,
              turnElement,
              fallbackBottomViewportOverflowPx: bottomViewportOverflowPx,
              windowZoom,
            }) + getThreadScrollPaddingBottomPx(scrollElement),
          previousScrollState = scrollStateRef.current,
          nextScrollState = dispatchScrollStateEvent({
            type: "latest_turn_follow_content_changed",
            followContentOverflowPx,
            latestTurnPhase: latestTurnPhaseRef.current,
          });
        if (
          previousScrollState.followMode !== "prework_follow" &&
          nextScrollState.followMode === "prework_follow"
        ) {
          latestTurnOffsetY.stop();
          latestTurnOffsetY.set(0);
          clearResponseSpacer();
          scrollController.scrollToDistanceFromBottomPx(0, "instant");
        }
      },
    ),
    handleScrollDistanceChanged = useStableCallback(
      (distanceFromBottomPx: number) => {
        if (distanceFromBottomPx <= 24) return;
        let currentSpacerHeightPx = responseSpacerHeightPx.get(),
          scrollElement = scrollController.getScrollElement(),
          scrollPaddingBottomPx =
            scrollElement == null
              ? 0
              : getThreadScrollPaddingBottomPx(scrollElement);
        if (
          latestTurnInProgressRef.current &&
          currentSpacerHeightPx > 24 &&
          getResponseSpacerOverflowPx({
            distanceFromBottomPx,
            responseSpacerHeightPx: currentSpacerHeightPx,
            scrollPaddingBottomPx,
          }) <= 24
        ) {
          isResponseSpacerAtViewportBottomRef.current = true;
        }
        dispatchScrollStateEvent({
          type: "scroll_distance_changed",
          distanceFromBottomPx,
          latestTurnPhase: latestTurnPhaseRef.current,
        });
      },
    );

  React.useLayoutEffect(
    () => scrollController.addScrollListener(handleScrollDistanceChanged),
    [handleScrollDistanceChanged, scrollController],
  );

  React.useLayoutEffect(() => {
    let previousLatestTurnIdentityKey = latestTurnIdentityKeyRef.current,
      previousLatestTurnPhase = previousLatestTurnPhaseRef.current,
      wasLatestTurnInProgress = wasLatestTurnInProgressRef.current;
    latestTurnIdentityKeyRef.current = latestTurnIdentityKey;
    previousLatestTurnPhaseRef.current = latestTurnPhase;
    wasLatestTurnInProgressRef.current = isLatestTurnInProgress;

    if (latestTurnIdentityKey == null) {
      dispatchScrollStateEvent(
        {
          type: "latest_turn_removed",
        },
        true,
      );
      latestTurnOffsetY.stop();
      latestTurnOffsetY.set(0);
      clearResponseSpacer();
      return;
    }

    let scrollElement = scrollController.getScrollElement();
    if (scrollElement == null) return;
    if (previousLatestTurnIdentityKey !== latestTurnIdentityKey) {
      let submitPlacement = consumePendingLatestTurnSubmitPlacement?.() ?? null;
      if (
        consumePendingLatestTurnSubmitPlacement != null &&
        submitPlacement == null
      )
        return;
      let shouldPlaceLatestTurn =
        submitPlacement?.shouldPlaceLatestTurn ?? true;
      dispatchScrollStateEvent(
        {
          type: "latest_turn_placed",
        },
        true,
      );
      if (!shouldPlaceLatestTurn) {
        latestTurnOffsetY.stop();
        latestTurnOffsetY.set(0);
        clearResponseSpacer();
        if (submitPlacement != null) {
          let scrollHeightDeltaPx =
            submitPlacement.scrollHeightPx == null
              ? 0
              : scrollElement.scrollHeight - submitPlacement.scrollHeightPx;
          scrollController.scrollToDistanceFromBottomPx(
            submitPlacement.distanceFromBottomPx + scrollHeightDeltaPx,
            "instant",
          );
        }
        return;
      }

      let maxSpacerHeightPx = getMaxResponseSpacerHeightPx({
          scrollElementHeightPx: scrollElement.clientHeight,
          scrollPaddingBottomPx: getThreadScrollPaddingBottomPx(scrollElement),
        }),
        currentSpacerHeightPx = responseSpacerHeightPx.get();
      responseSpacerHeightPx.stop();
      isResponseSpacerAtViewportBottomRef.current = false;
      latestTurnOffsetY.stop();
      latestTurnOffsetY.set(currentSpacerHeightPx);
      scrollController.scrollToDistanceFromBottomPx(
        LATEST_TURN_PLACEMENT_DISTANCE_PX,
        "instant",
      );
      animateSignalValue(
        latestTurnOffsetY,
        0,
        RESPONSE_SPACER_SPRING_TRANSITION,
      );
      if (currentSpacerHeightPx !== maxSpacerHeightPx) {
        animateSignalValue(
          responseSpacerHeightPx,
          maxSpacerHeightPx,
          RESPONSE_SPACER_SPRING_TRANSITION,
        );
      }
    }

    let previousScrollState = scrollStateRef.current;
    dispatchScrollStateEvent({
      type: "latest_turn_phase_changed",
      latestTurnPhase,
      previousLatestTurnPhase,
    });
    if (
      previousLatestTurnPhase === "prework" &&
      latestTurnPhase === "final_answer" &&
      previousScrollState.followMode === "prework_follow"
    ) {
      latestTurnOffsetY.stop();
      latestTurnOffsetY.set(0);
      clearResponseSpacer();
      scrollController.scrollToDistanceFromBottomPx(0, "instant");
    }
    if (wasLatestTurnInProgress && !isLatestTurnInProgress) {
      latestTurnOffsetY.stop();
      latestTurnOffsetY.set(0);
      responseSpacerHeightPx.stop();
    }
  }, [
    clearResponseSpacer,
    consumePendingLatestTurnSubmitPlacement,
    isLatestTurnInProgress,
    latestTurnOffsetY,
    latestTurnIdentityKey,
    latestTurnPhase,
    responseSpacerHeightPx,
    scrollController,
    dispatchScrollStateEvent,
  ]);

  return (
    <>
      <LatestTurnMotionContext.Provider value={latestTurnMotionContext}>
        <threadScrollControllerContext.Provider
          value={responseSpacerAdjustedScrollController}
        >
          <VirtualizedTurnList
            entries={entries}
            initialRestoreState={initialVirtualizedTurnListRestoreState}
            latestTurnSynchronousMeasurementKey={
              synchronouslyMeasureLatestTurnUpdates
                ? latestEntry?.turn?.items?.length
                : undefined
            }
            onApiChange={onApiChange}
            onVisibleContentReady={onVisibleContentReady}
            onLatestTurnHeightChange={handleLatestTurnHeightChange}
            onRestoreStateChange={handleRestoreStateChange}
            getPendingRestoreScrollDistanceFromBottomPx={
              getPendingInitialRestoreDistanceFromBottom
            }
            restoreScrollDistanceFromBottomPx={restoreInitialScrollOffset}
            RowComponent={LatestTurnAnimatedRow}
          />
        </threadScrollControllerContext.Provider>
      </LatestTurnMotionContext.Provider>
      <motion.div
        aria-hidden={true}
        className="shrink-0"
        ref={responseSpacerElementRef}
        style={{
          height: responseSpacerHeightPx,
        }}
      />
    </>
  );
}

function LatestTurnAnimatedRow({
  entry,
  latestTurnFollowContentRef,
}: VirtualizedTurnListRowProps) {
  let latestTurnMotionContext = React.useContext(LatestTurnMotionContext),
    latestTurnY =
      latestTurnMotionContext?.turnKey === entry.turnKey
        ? latestTurnMotionContext.yPx
        : 0;

  return (
    <motion.div
      style={{
        y: latestTurnY,
      }}
    >
      <LocalConversationTurnRow
        entry={entry as LocalConversationTurnRowProps["entry"]}
        latestTurnFollowContentRef={latestTurnFollowContentRef}
      />
    </motion.div>
  );
}

function toLatestTurnVisibleEntry(
  entry: VirtualizedTurnEntry,
): LatestTurnVisibleTurnEntry {
  let turn = entry.turn;
  return {
    turnKey: entry.turnKey,
    turn: {
      finalAssistantStartedAtMs: turn?.finalAssistantStartedAtMs ?? null,
      firstTurnWorkItemStartedAtMs: turn?.firstTurnWorkItemStartedAtMs ?? null,
      items: coerceConversationTurnItems(turn?.items),
      status: turn?.status ?? "idle",
    },
  };
}

function coerceConversationTurnItems(
  items: readonly unknown[] | undefined,
): readonly ConversationTurnItem[] {
  return (items ?? []).map((item) => {
    if (item == null || typeof item !== "object") return {};
    let record = item as Record<string, unknown>,
      restoreMessage = record.restoreMessage;
    return {
      phase: typeof record.phase === "string" ? record.phase : null,
      restoreMessage:
        restoreMessage != null && typeof restoreMessage === "object"
          ? {
              id:
                typeof (restoreMessage as { id?: unknown }).id === "string"
                  ? (restoreMessage as { id: string }).id
                  : "",
            }
          : null,
      type: typeof record.type === "string" ? record.type : null,
    };
  });
}

export const initAutoFollowVirtualizedTurnListChunk = once(() => {
  initMotionSignalRuntime();
  initWindowZoomContext();
  initThreadScrollLayoutStyleChunk();
  initThreadScrollControllerContextChunk();
  initReverseScrollUtilities();
  initUseStableCallback();
  initThreadScrollStateSignal();
  initLocalConversationTurnRowDependencies();
  initLocalConversationTurnRowChunk();
  initVirtualizedTurnListChunk();
});
