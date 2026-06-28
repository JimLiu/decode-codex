// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Latest-turn submit placement snapshot helper for conversation scrolling.

const latestTurnPlacementThresholdPx = 300;

export interface LatestTurnSubmitPlacementInput {
  distanceFromBottomPx: number;
  responseSpacerHeightPx: number;
  scrollHeightPx: number | null;
}

export interface LatestTurnSubmitPlacementSnapshot {
  distanceFromBottomPx: number;
  scrollHeightPx: number | null;
  shouldPlaceLatestTurn: boolean;
}

export function createLatestTurnSubmitPlacementSnapshot({
  distanceFromBottomPx,
  responseSpacerHeightPx,
  scrollHeightPx,
}: LatestTurnSubmitPlacementInput): LatestTurnSubmitPlacementSnapshot {
  return {
    distanceFromBottomPx,
    scrollHeightPx,
    shouldPlaceLatestTurn:
      distanceFromBottomPx - responseSpacerHeightPx <=
      latestTurnPlacementThresholdPx,
  };
}
