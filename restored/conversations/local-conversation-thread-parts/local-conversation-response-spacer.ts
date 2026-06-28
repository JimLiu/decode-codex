// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Response-spacer constants and scroll measurement helpers for latest-turn follow mode.
import { getScrollDistanceFromBottomPx } from "../../utils/reverse-scroll-distance";
import { scaleCssPxByWindowZoom } from "../../utils/window-zoom-scale";
import {
  type LatestTurnPhase,
  type LatestTurnScrollState,
  reduceLatestTurnScrollState,
} from "./local-conversation-latest-turn-scroll-state";

export const LATEST_TURN_PLACEMENT_DISTANCE_PX = 1;
const MAX_RESPONSE_SPACER_VIEWPORT_RATIO = 2 / 3;
const RESPONSE_SPACER_VIEWPORT_RESERVE_PX = 240;
export const RESPONSE_SPACER_INTERSECTION_THRESHOLDS = Array.from(
  {
    length: 101,
  },
  (_unused, index) => index / 100,
);
export const RESPONSE_SPACER_SPRING_TRANSITION = {
  type: "spring",
  bounce: 0,
  duration: 0.5,
} as const;

type MotionNumberSignal = {
  get(): number;
  set(value: number): void;
};

type ScrollController = {
  scrollToDistanceFromBottomPx(
    distanceFromBottomPx: number,
    behavior: string,
  ): void;
};

export function adjustScrollForLatestTurnHeightDelta({
  allowResponseSpacerGrowth,
  behavior = "instant",
  distanceDeltaPx,
  responseSpacerHeightPx,
  scrollController,
  scrollElement,
}: {
  allowResponseSpacerGrowth: boolean;
  behavior?: string;
  distanceDeltaPx: number;
  responseSpacerHeightPx: MotionNumberSignal;
  scrollController: ScrollController;
  scrollElement: HTMLElement;
}) {
  let nextDistanceFromBottomPx =
    getScrollDistanceFromBottomPx(scrollElement) + distanceDeltaPx;
  if (allowResponseSpacerGrowth && nextDistanceFromBottomPx < 0) {
    responseSpacerHeightPx.set(
      responseSpacerHeightPx.get() - nextDistanceFromBottomPx,
    );
  }
  scrollController.scrollToDistanceFromBottomPx(
    Math.max(0, nextDistanceFromBottomPx),
    behavior,
  );
}

export function measureLatestTurnFollowContentOverflow({
  scrollElement,
  turnElement,
  fallbackBottomViewportOverflowPx,
  windowZoom,
}: {
  fallbackBottomViewportOverflowPx: number;
  scrollElement: HTMLElement | null;
  turnElement: HTMLElement | null;
  windowZoom: number;
}) {
  return scrollElement == null || turnElement == null
    ? fallbackBottomViewportOverflowPx
    : scaleCssPxByWindowZoom(
        turnElement.getBoundingClientRect().bottom -
          scrollElement.getBoundingClientRect().bottom,
        windowZoom,
      );
}

export function getMaxResponseSpacerHeightPx({
  scrollElementHeightPx,
  scrollPaddingBottomPx,
}: {
  scrollElementHeightPx: number;
  scrollPaddingBottomPx: number;
}) {
  let availableViewportHeightPx = Math.max(
    0,
    scrollElementHeightPx - scrollPaddingBottomPx,
  );
  return Math.max(
    0,
    Math.min(
      availableViewportHeightPx * MAX_RESPONSE_SPACER_VIEWPORT_RATIO,
      availableViewportHeightPx - RESPONSE_SPACER_VIEWPORT_RESERVE_PX,
    ),
  );
}

export function createPersistedScrollStateSnapshot({
  distanceFromBottomPx,
  latestTurnPhase,
  responseSpacerHeightPx,
  scrollPaddingBottomPx,
  scrollState,
}: {
  distanceFromBottomPx: number;
  latestTurnPhase: LatestTurnPhase;
  responseSpacerHeightPx: number;
  scrollPaddingBottomPx: number;
  scrollState: LatestTurnScrollState;
}) {
  return getResponseSpacerOverflowPx({
    distanceFromBottomPx,
    responseSpacerHeightPx,
    scrollPaddingBottomPx,
  }) > 24
    ? {
        distanceFromBottomPx: 0,
        scrollState: reduceLatestTurnScrollState(scrollState, {
          type: "scroll_to_bottom",
          latestTurnPhase,
        }),
      }
    : {
        distanceFromBottomPx: Math.max(
          0,
          distanceFromBottomPx - responseSpacerHeightPx,
        ),
        scrollState,
      };
}

export function getResponseSpacerOverflowPx({
  distanceFromBottomPx,
  responseSpacerHeightPx,
  scrollPaddingBottomPx,
}: {
  distanceFromBottomPx: number;
  responseSpacerHeightPx: number;
  scrollPaddingBottomPx: number;
}) {
  return Math.max(
    0,
    responseSpacerHeightPx - distanceFromBottomPx - scrollPaddingBottomPx,
  );
}

export function getThreadScrollPaddingBottomPx(scrollElement: HTMLElement) {
  let scrollPaddingBottomPx = Number.parseFloat(
    scrollElement.style.getPropertyValue("--thread-scroll-padding-bottom"),
  );
  return Number.isFinite(scrollPaddingBottomPx) ? scrollPaddingBottomPx : 0;
}
