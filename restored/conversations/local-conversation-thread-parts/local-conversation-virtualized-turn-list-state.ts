// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Viewport state helpers for the local conversation virtualized turn list.
import {
  buildThreadVirtualizerLayout,
  getRangeAnchoredAtTurn,
  getVisibleThreadRange,
} from "../../threads/thread-virtualizer";

export const DEFAULT_VIRTUAL_TURN_GAP_PX = 12;
export const DEFAULT_VIRTUAL_VIEWPORT_HEIGHT_PX = 800;
export const VIRTUAL_TURN_OVERSCAN_COUNT = 2;
export const EMPTY_TURN_HEIGHTS_BY_KEY: Record<string, number> = {};

type VirtualizedTurnEntry = {
  turnKey: string;
};

type VirtualizedTurnRange = {
  endIndex: number;
  startIndex: number;
};

type VirtualizedTurnListRestoreState = {
  renderedWindow?: {
    anchorKey: string;
    count: number;
  } | null;
  turnHeightsByKey?: Record<string, number> | null;
} | null;

type VirtualizedTurnListViewportState = {
  distanceFromBottomPx: number;
  renderedRange: VirtualizedTurnRange;
  turnKeys: readonly string[];
  viewportHeightPx: number;
};

type VirtualizedTurnLayout = ReturnType<typeof buildThreadVirtualizerLayout>;

export function createInitialVirtualizedTurnListState(
  entries: readonly VirtualizedTurnEntry[],
  distanceFromBottomPx: number,
  gapPx: number,
  initialRestoreState: VirtualizedTurnListRestoreState,
): VirtualizedTurnListViewportState {
  let layout = buildThreadVirtualizerLayout({
      entries,
      gapPx,
      measuredHeightsByKey:
        initialRestoreState?.turnHeightsByKey ?? EMPTY_TURN_HEIGHTS_BY_KEY,
    }),
    viewportHeightPx = DEFAULT_VIRTUAL_VIEWPORT_HEIGHT_PX,
    initialDistanceFromBottomPx = Math.min(
      distanceFromBottomPx,
      layout.totalHeightPx,
    ),
    defaultRenderedRange = getVisibleThreadRange({
      distanceFromBottomPx: initialDistanceFromBottomPx,
      layout,
      overscanCount: VIRTUAL_TURN_OVERSCAN_COUNT,
      viewportHeightPx,
    });

  return {
    distanceFromBottomPx: initialDistanceFromBottomPx,
    renderedRange:
      (initialRestoreState?.renderedWindow == null
        ? null
        : getRangeAnchoredAtTurn({
            anchorKey: initialRestoreState.renderedWindow.anchorKey,
            layout,
            previousRange: {
              startIndex: 0,
              endIndex: Math.min(
                initialRestoreState.renderedWindow.count,
                defaultRenderedRange.endIndex - defaultRenderedRange.startIndex,
              ),
            },
          })) ?? defaultRenderedRange,
    turnKeys: layout.turnKeys,
    viewportHeightPx,
  };
}

export function updateVirtualizedTurnListViewportState({
  current,
  distanceFromBottomPx,
  layout,
  viewportHeightPx,
}: {
  current: VirtualizedTurnListViewportState;
  distanceFromBottomPx: number;
  layout: VirtualizedTurnLayout;
  viewportHeightPx: number;
}): VirtualizedTurnListViewportState {
  let clampedDistanceFromBottomPx = Math.min(
      distanceFromBottomPx,
      layout.totalHeightPx,
    ),
    nextRenderedRange = getVisibleThreadRange({
      distanceFromBottomPx: clampedDistanceFromBottomPx,
      layout,
      overscanCount: VIRTUAL_TURN_OVERSCAN_COUNT,
      viewportHeightPx,
    }),
    renderedRange = rangeContainsRange(current.renderedRange, nextRenderedRange)
      ? current.renderedRange
      : nextRenderedRange;

  return current.distanceFromBottomPx === clampedDistanceFromBottomPx &&
    current.viewportHeightPx === viewportHeightPx &&
    current.renderedRange.startIndex === renderedRange.startIndex &&
    current.renderedRange.endIndex === renderedRange.endIndex &&
    areTurnKeyArraysEqual(current.turnKeys, layout.turnKeys)
    ? current
    : {
        distanceFromBottomPx: clampedDistanceFromBottomPx,
        renderedRange,
        turnKeys: layout.turnKeys,
        viewportHeightPx,
      };
}

export function findMeasuredAnchorKeyForViewportPreservation({
  distanceFromBottomPx,
  layout,
  measuredHeightsByKey,
  nextLayout,
  viewportHeightPx,
}: {
  distanceFromBottomPx: number;
  layout: VirtualizedTurnLayout;
  measuredHeightsByKey: Record<string, number>;
  nextLayout: VirtualizedTurnLayout;
  viewportHeightPx: number;
}): string | null {
  let visibleRange = getVisibleThreadRange({
    distanceFromBottomPx,
    layout,
    overscanCount: 0,
    viewportHeightPx,
  });

  for (
    let turnIndex = visibleRange.startIndex;
    turnIndex < visibleRange.endIndex;
    turnIndex += 1
  ) {
    let turnKey = layout.turnKeys[turnIndex];
    if (
      turnKey != null &&
      measuredHeightsByKey[turnKey] != null &&
      nextLayout.turnIndexByKey.has(turnKey)
    ) {
      return turnKey;
    }
  }

  return null;
}

export function areTurnKeyArraysEqual(
  leftTurnKeys: readonly string[],
  rightTurnKeys: readonly string[],
) {
  return (
    leftTurnKeys === rightTurnKeys ||
    (leftTurnKeys.length === rightTurnKeys.length &&
      leftTurnKeys.every((item, index) => item === rightTurnKeys[index]))
  );
}

export function createVirtualizedTurnListRestoreState(
  measuredHeightsByKey: Record<string, number>,
  turnKeys: readonly string[],
  renderedRange: VirtualizedTurnRange,
): VirtualizedTurnListRestoreState {
  let restoreHeightsByKey: Record<string, number> = {};
  for (let turnKey of turnKeys) {
    let heightPx = measuredHeightsByKey[turnKey];
    if (heightPx != null) restoreHeightsByKey[turnKey] = heightPx;
  }

  let anchorKey = turnKeys[renderedRange.startIndex];
  return Object.keys(restoreHeightsByKey).length === 0 || anchorKey == null
    ? null
    : {
        renderedWindow: {
          anchorKey,
          count: renderedRange.endIndex - renderedRange.startIndex,
        },
        turnHeightsByKey: restoreHeightsByKey,
      };
}

function rangeContainsRange(
  outerRange: VirtualizedTurnRange,
  innerRange: VirtualizedTurnRange,
) {
  return (
    outerRange.startIndex <= innerRange.startIndex &&
    outerRange.endIndex >= innerRange.endIndex
  );
}
