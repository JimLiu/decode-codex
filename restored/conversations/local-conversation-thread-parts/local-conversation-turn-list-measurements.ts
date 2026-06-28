// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Scroll padding and DOM measurement helpers for the local conversation turn list.
import { scaleCssPxByWindowZoom } from "../../utils/window-zoom-scale";

type TurnListLayout = {
  bottomOffsetsPx: readonly number[];
  heightsPx: readonly number[];
  turnIndexByKey: Map<string, number>;
};

export function getBottomScrollPaddingPxValue(
  getBottomScrollPaddingPx?: (() => number | null | undefined) | null,
) {
  return Math.max(0, getBottomScrollPaddingPx?.() ?? 0);
}

export function subtractBottomScrollPaddingPx(
  distanceFromBottomPx: number,
  bottomScrollPaddingPx: number,
) {
  return Math.max(0, distanceFromBottomPx - bottomScrollPaddingPx);
}

export function isAtBottomAfterPadding(
  distanceFromBottomPx: number,
  bottomScrollPaddingPx: number,
) {
  return distanceFromBottomPx <= (bottomScrollPaddingPx > 0 ? 0 : 24);
}

export function measureTurnBottomViewportOverflow({
  scrollElement,
  turnElement,
  windowZoom,
}: {
  scrollElement: HTMLElement | null | undefined;
  turnElement: HTMLElement | null | undefined;
  windowZoom: number;
}) {
  return scrollElement == null || turnElement == null
    ? 0
    : scaleCssPxByWindowZoom(
        turnElement.getBoundingClientRect().bottom -
          scrollElement.getBoundingClientRect().bottom,
        windowZoom,
      );
}

export function getDistanceFromBottomForTargetElement({
  layout,
  targetElement,
  turnElement,
  turnKey,
  windowZoom,
  viewportHeightPx,
}: {
  layout: TurnListLayout;
  targetElement: HTMLElement;
  turnElement: HTMLElement;
  turnKey: string;
  viewportHeightPx: number;
  windowZoom: number;
}) {
  let turnIndex = layout.turnIndexByKey.get(turnKey);
  if (turnIndex == null) return null;

  let turnRect = turnElement.getBoundingClientRect(),
    targetRect = targetElement.getBoundingClientRect(),
    targetOffsetFromTurnTop = scaleCssPxByWindowZoom(
      targetRect.top - turnRect.top,
      windowZoom,
    ),
    targetHeight = scaleCssPxByWindowZoom(targetRect.height, windowZoom);

  return Math.max(
    0,
    (layout.bottomOffsetsPx[turnIndex] ?? 0) +
      (layout.heightsPx[turnIndex] ?? 0) -
      targetOffsetFromTurnTop -
      targetHeight / 2 -
      viewportHeightPx / 2,
  );
}
