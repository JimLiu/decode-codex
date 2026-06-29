// Restored from ref/webview/assets/thread-virtualizer-j4nMuJ6u.js
// thread-virtualizer-BihN83qB chunk restored from the Codex webview bundle.
const DEFAULT_TURN_HEIGHT_PX = 280;

type ThreadVirtualizerEntry = {
  estimatedHeightPx?: number;
  turnKey: string;
};

type ThreadVirtualizerLayout = {
  bottomOffsetsPx: number[];
  heightsPx: number[];
  topOffsetsPx: number[];
  totalHeightPx: number;
  turnIndexByKey: Map<string, number>;
  turnKeys: string[];
};

type ThreadVirtualizerRange = {
  endIndex: number;
  startIndex: number;
};

export function initThreadVirtualizerChunk() {}

export function getRangeAnchoredAtTurn({
  anchorKey,
  layout,
  previousRange,
}: {
  anchorKey: string;
  layout: ThreadVirtualizerLayout;
  previousRange: ThreadVirtualizerRange;
}) {
  const turnIndex = layout.turnIndexByKey.get(anchorKey);
  if (turnIndex == null) return null;

  return {
    startIndex: turnIndex,
    endIndex: Math.min(
      layout.turnKeys.length,
      turnIndex + previousRange.endIndex - previousRange.startIndex,
    ),
  };
}

export function getDistanceFromBottomForCenteredTurn({
  layout,
  turnKey,
  viewportHeightPx,
}: {
  layout: ThreadVirtualizerLayout;
  turnKey: string;
  viewportHeightPx: number;
}) {
  const turnIndex = layout.turnIndexByKey.get(turnKey);
  if (turnIndex == null) return null;

  return Math.max(
    0,
    (layout.bottomOffsetsPx[turnIndex] ?? 0) -
      viewportHeightPx / 2 +
      (layout.heightsPx[turnIndex] ?? 0) / 2,
  );
}

export function getDistanceFromBottomForPreservedAnchor({
  anchorKey,
  distanceFromBottomPx,
  nextLayout,
  previousLayout,
}: {
  anchorKey: string;
  distanceFromBottomPx: number;
  nextLayout: ThreadVirtualizerLayout;
  previousLayout: ThreadVirtualizerLayout;
}) {
  const previousTurnIndex = previousLayout.turnIndexByKey.get(anchorKey);
  const nextTurnIndex = nextLayout.turnIndexByKey.get(anchorKey);
  if (previousTurnIndex == null || nextTurnIndex == null) return null;

  const previousBottomEdgePx =
    (previousLayout.bottomOffsetsPx[previousTurnIndex] ?? 0) +
    (previousLayout.heightsPx[previousTurnIndex] ?? 0);
  const nextBottomEdgePx =
    (nextLayout.bottomOffsetsPx[nextTurnIndex] ?? 0) +
    (nextLayout.heightsPx[nextTurnIndex] ?? 0);

  return Math.max(
    0,
    distanceFromBottomPx + nextBottomEdgePx - previousBottomEdgePx,
  );
}

export function getVisibleThreadRange({
  distanceFromBottomPx,
  layout,
  overscanCount,
  viewportHeightPx,
}: {
  distanceFromBottomPx: number;
  layout: ThreadVirtualizerLayout;
  overscanCount: number;
  viewportHeightPx: number;
}) {
  if (layout.turnKeys.length === 0) {
    return { startIndex: 0, endIndex: 0 };
  }

  const viewportBottom = Math.min(
    Math.max(0, distanceFromBottomPx),
    layout.totalHeightPx,
  );
  const viewportTop = Math.min(
    viewportBottom + Math.max(0, viewportHeightPx),
    layout.totalHeightPx,
  );
  const firstVisibleIndex = findFirstBottomOffsetBelow(
    layout.bottomOffsetsPx,
    viewportTop,
  );
  const lastVisibleIndex = findLastVisibleItem(
    layout.bottomOffsetsPx,
    layout.heightsPx,
    viewportBottom,
  );

  return {
    startIndex: Math.max(0, firstVisibleIndex - overscanCount),
    endIndex: Math.min(
      layout.turnKeys.length,
      Math.max(lastVisibleIndex, firstVisibleIndex + 1) + overscanCount,
    ),
  };
}

export function buildThreadVirtualizerLayout({
  entries,
  gapPx,
  measuredHeightsByKey,
}: {
  entries: ThreadVirtualizerEntry[];
  gapPx: number;
  measuredHeightsByKey: Record<string, number | undefined>;
}): ThreadVirtualizerLayout {
  const heightsPx: number[] = [];
  const topOffsetsPx: number[] = [];
  const turnIndexByKey = new Map<string, number>();
  const turnKeys: string[] = [];
  let totalHeightPx = 0;

  for (const [index, entry] of entries.entries()) {
    const turnKey = entry.turnKey;
    const heightPx =
      measuredHeightsByKey[turnKey] ??
      entry.estimatedHeightPx ??
      DEFAULT_TURN_HEIGHT_PX;

    turnIndexByKey.set(turnKey, index);
    turnKeys.push(turnKey);
    topOffsetsPx.push(totalHeightPx);
    heightsPx.push(heightPx);
    totalHeightPx += heightPx;
    if (index < entries.length - 1) totalHeightPx += gapPx;
  }

  return {
    bottomOffsetsPx: topOffsetsPx.map(
      (offset, index) => totalHeightPx - offset - (heightsPx[index] ?? 0),
    ),
    heightsPx,
    topOffsetsPx,
    totalHeightPx,
    turnIndexByKey,
    turnKeys,
  };
}

function findFirstBottomOffsetBelow(
  bottomOffsetsPx: number[],
  threshold: number,
) {
  let start = 0;
  let end = bottomOffsetsPx.length;

  while (start < end) {
    const middle = Math.floor((start + end) / 2);
    if ((bottomOffsetsPx[middle] ?? 0) < threshold) end = middle;
    else start = middle + 1;
  }

  return start;
}

function findLastVisibleItem(
  bottomOffsetsPx: number[],
  heightsPx: number[],
  threshold: number,
) {
  let start = 0;
  let end = bottomOffsetsPx.length;

  while (start < end) {
    const middle = Math.floor((start + end) / 2);
    if (
      (bottomOffsetsPx[middle] ?? 0) + (heightsPx[middle] ?? 0) <=
      threshold
    ) {
      end = middle;
    } else {
      start = middle + 1;
    }
  }

  return start;
}
