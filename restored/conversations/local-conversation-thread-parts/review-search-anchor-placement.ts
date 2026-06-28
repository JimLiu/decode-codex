// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Picture-in-picture anchor placement helpers for review search highlights.

type AnchorAlignment =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

export interface ViewportRectLike {
  height: number;
  width: number;
  x: number;
  y: number;
}

interface PlacementRect {
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
}

interface CandidatePlacement {
  priority: number;
  rect: PlacementRect;
}

export interface ReviewSearchAnchorPlacementOptions {
  hostId: string;
  hostRect: ViewportRectLike;
  obstacleRects: readonly ViewportRectLike[];
}

const hostPadding = 24;
const obstaclePadding = 12;
const anchorSize = {
  height: 250,
  width: 250,
};
const maxPlacementIterations = 6;
const collisionPenalty = 1e9;
const collisionAreaWeight = 1e4;
const placementPriorityWeight = 1e6;
const anchorAlignments: readonly AnchorAlignment[] = [
  "top-left",
  "top-right",
  "bottom-left",
  "bottom-right",
];

export function createReviewSearchAnchorPlacement({
  hostId,
  hostRect,
  obstacleRects,
}: ReviewSearchAnchorPlacementOptions) {
  let relativeObstacles = obstacleRects.map((obstacleRect) =>
    toHostRelativeObstacleRect(hostRect, obstacleRect),
  );
  return {
    anchorRect: hostRect,
    anchors: anchorAlignments.map((alignment) =>
      placeAnchorForAlignment(alignment, hostRect, relativeObstacles),
    ),
    animated: false,
    hostId,
    presentationScope: "thread",
  };
}

function placeAnchorForAlignment(
  alignment: AnchorAlignment,
  hostRect: ViewportRectLike,
  obstacleRects: readonly PlacementRect[],
) {
  let sourceRect = getInitialAnchorRect(alignment, hostRect),
    currentRect = sourceRect;
  for (
    let iterationIndex = 0;
    iterationIndex < maxPlacementIterations;
    iterationIndex += 1
  ) {
    let collidingObstacle = findFirstIntersectingRect(
      currentRect,
      obstacleRects,
    );
    if (collidingObstacle == null) break;
    currentRect = chooseNextAnchorRect({
      alignment,
      hostRect,
      obstacle: collidingObstacle,
      obstacles: obstacleRects,
      rect: currentRect,
      sourceRect,
    });
  }
  return {
    alignment,
    point: getAnchorPoint(alignment, hostRect, currentRect),
  };
}

function getInitialAnchorRect(
  alignment: AnchorAlignment,
  hostRect: ViewportRectLike,
): PlacementRect {
  switch (alignment) {
    case "top-left":
      return createPlacementRect(hostPadding, hostPadding, anchorSize);
    case "top-right":
      return createPlacementRect(
        hostRect.width - anchorSize.width - hostPadding,
        hostPadding,
        anchorSize,
      );
    case "bottom-left":
      return createPlacementRect(
        hostPadding,
        hostRect.height - anchorSize.height - hostPadding,
        anchorSize,
      );
    case "bottom-right":
      return createPlacementRect(
        hostRect.width - anchorSize.width - hostPadding,
        hostRect.height - anchorSize.height - hostPadding,
        anchorSize,
      );
  }
}

function chooseNextAnchorRect({
  alignment,
  hostRect,
  obstacle,
  obstacles,
  rect,
  sourceRect,
}: {
  alignment: AnchorAlignment;
  hostRect: ViewportRectLike;
  obstacle: PlacementRect;
  obstacles: readonly PlacementRect[];
  rect: PlacementRect;
  sourceRect: PlacementRect;
}): PlacementRect {
  let candidates = getCandidateRectsForObstacle(alignment, rect, obstacle).map(
      (candidate) => ({
        priority: candidate.priority,
        rect: clampRectToHost(candidate.rect, hostRect),
      }),
    ),
    bestCandidate = candidates[0],
    bestScore =
      bestCandidate == null
        ? Number.POSITIVE_INFINITY
        : scoreAnchorCandidate(bestCandidate, obstacles, sourceRect);
  for (let candidate of candidates.slice(1)) {
    let score = scoreAnchorCandidate(candidate, obstacles, sourceRect);
    if (score < bestScore) {
      bestCandidate = candidate;
      bestScore = score;
    }
  }
  return bestCandidate?.rect ?? rect;
}

function getCandidateRectsForObstacle(
  alignment: AnchorAlignment,
  rect: PlacementRect,
  obstacle: PlacementRect,
): CandidatePlacement[] {
  let belowObstacle = createPlacementRect(rect.left, obstacle.bottom, rect),
    aboveObstacle = createPlacementRect(
      rect.left,
      obstacle.top - rect.height,
      rect,
    ),
    rightOfObstacle = createPlacementRect(obstacle.right, rect.top, rect),
    leftOfObstacle = createPlacementRect(
      obstacle.left - rect.width,
      rect.top,
      rect,
    );
  switch (alignment) {
    case "top-left":
      return [
        {
          priority: 0,
          rect: belowObstacle,
        },
        {
          priority: 1,
          rect: rightOfObstacle,
        },
        {
          priority: 2,
          rect: leftOfObstacle,
        },
        {
          priority: 3,
          rect: aboveObstacle,
        },
      ];
    case "top-right":
      return [
        {
          priority: 0,
          rect: belowObstacle,
        },
        {
          priority: 1,
          rect: leftOfObstacle,
        },
        {
          priority: 2,
          rect: rightOfObstacle,
        },
        {
          priority: 3,
          rect: aboveObstacle,
        },
      ];
    case "bottom-left":
      return [
        {
          priority: 0,
          rect: aboveObstacle,
        },
        {
          priority: 1,
          rect: rightOfObstacle,
        },
        {
          priority: 2,
          rect: leftOfObstacle,
        },
        {
          priority: 3,
          rect: belowObstacle,
        },
      ];
    case "bottom-right":
      return [
        {
          priority: 0,
          rect: aboveObstacle,
        },
        {
          priority: 1,
          rect: leftOfObstacle,
        },
        {
          priority: 2,
          rect: rightOfObstacle,
        },
        {
          priority: 3,
          rect: belowObstacle,
        },
      ];
  }
}

function scoreAnchorCandidate(
  candidate: CandidatePlacement,
  obstacles: readonly PlacementRect[],
  sourceRect: PlacementRect,
): number {
  let collisionArea = obstacles.reduce(
    (totalArea, obstacle) =>
      totalArea + getIntersectionArea(candidate.rect, obstacle),
    0,
  );
  return (
    (collisionArea > 0 ? collisionPenalty : 0) +
    collisionArea * collisionAreaWeight +
    candidate.priority * placementPriorityWeight +
    (candidate.rect.left - sourceRect.left) ** 2 +
    (candidate.rect.top - sourceRect.top) ** 2
  );
}

function findFirstIntersectingRect(
  rect: PlacementRect,
  obstacles: readonly PlacementRect[],
): PlacementRect | null {
  for (let obstacle of obstacles)
    if (getIntersectionArea(rect, obstacle) > 0) return obstacle;
  return null;
}

function toHostRelativeObstacleRect(
  hostRect: ViewportRectLike,
  obstacleRect: ViewportRectLike,
): PlacementRect {
  return createPlacementRectFromEdges({
    bottom: obstacleRect.y - hostRect.y + obstacleRect.height + obstaclePadding,
    left: obstacleRect.x - hostRect.x - obstaclePadding,
    right: obstacleRect.x - hostRect.x + obstacleRect.width + obstaclePadding,
    top: obstacleRect.y - hostRect.y - obstaclePadding,
  });
}

function getAnchorPoint(
  alignment: AnchorAlignment,
  hostRect: ViewportRectLike,
  rect: PlacementRect,
) {
  switch (alignment) {
    case "top-left":
      return {
        x: hostRect.x + rect.left,
        y: hostRect.y + rect.top,
      };
    case "top-right":
      return {
        x: hostRect.x + rect.right,
        y: hostRect.y + rect.top,
      };
    case "bottom-left":
      return {
        x: hostRect.x + rect.left,
        y: hostRect.y + rect.bottom,
      };
    case "bottom-right":
      return {
        x: hostRect.x + rect.right,
        y: hostRect.y + rect.bottom,
      };
  }
}

function clampRectToHost(
  rect: PlacementRect,
  hostRect: ViewportRectLike,
): PlacementRect {
  return createPlacementRect(
    clamp(
      rect.left,
      hostPadding,
      Math.max(hostPadding, hostRect.width - rect.width - hostPadding),
    ),
    clamp(
      rect.top,
      hostPadding,
      Math.max(hostPadding, hostRect.height - rect.height - hostPadding),
    ),
    rect,
  );
}

function createPlacementRect(
  left: number,
  top: number,
  size: {
    height: number;
    width: number;
  },
): PlacementRect {
  return {
    bottom: top + size.height,
    height: size.height,
    left,
    right: left + size.width,
    top,
    width: size.width,
  };
}

function createPlacementRectFromEdges({
  bottom,
  left,
  right,
  top,
}: {
  bottom: number;
  left: number;
  right: number;
  top: number;
}): PlacementRect {
  return {
    bottom,
    height: bottom - top,
    left,
    right,
    top,
    width: right - left,
  };
}

function getIntersectionArea(
  firstRect: PlacementRect,
  secondRect: PlacementRect,
): number {
  let intersectionWidth =
      Math.min(firstRect.right, secondRect.right) -
      Math.max(firstRect.left, secondRect.left),
    intersectionHeight =
      Math.min(firstRect.bottom, secondRect.bottom) -
      Math.max(firstRect.top, secondRect.top);
  return intersectionWidth <= 0 || intersectionHeight <= 0
    ? 0
    : intersectionWidth * intersectionHeight;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
