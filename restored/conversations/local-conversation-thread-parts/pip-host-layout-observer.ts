// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Remote-hosted picture-in-picture layout observer for local conversation threads.

import { useEffect } from "react";
import { useWindowZoom } from "../../utils/window-zoom-context";
import {
  createReviewSearchAnchorPlacement,
  type ViewportRectLike,
} from "./review-search-anchor-placement";

export const MAIN_THREAD_PIP_HOST_ID = "codex-main-thread";

const pipAnchorHostAttribute = "data-pip-anchor-host";
const pipObstacleAttribute = "data-pip-obstacle";
const mainThreadPipHostSelector = `[${pipAnchorHostAttribute}="${MAIN_THREAD_PIP_HOST_ID}"]`;
const pipObstacleSelector = `[${pipObstacleAttribute}]`;
const pipLayoutElementSelector = `${mainThreadPipHostSelector},${pipObstacleSelector}`;

type RemoteHostedPipLayout = {
  anchors: unknown;
  anchorRect: ViewportRectLike | null;
  animated: boolean;
  hostId: string;
  presentationScope: "thread";
};

export function startRemoteHostedPipHostLayoutObserver(
  windowZoom: number,
): () => void {
  let sendMessageFromView = window.electronBridge?.sendMessageFromView;
  if (sendMessageFromView == null || document.body == null) return () => {};
  let normalizedWindowZoom =
      Number.isFinite(windowZoom) && windowZoom > 0 ? windowZoom : 1,
    animationFrameId: number | null = null,
    previousLayout: RemoteHostedPipLayout | null = null,
    previousLayoutKey: string | null = null,
    resizeObserver = new ResizeObserver(scheduleLayoutMeasure),
    bodyMutationObserver = new MutationObserver((mutationRecords) => {
      mutationRecords.some(shouldRefreshPipLayoutObservers) &&
        (refreshObservedLayoutElements(), scheduleLayoutMeasure());
    }),
    layoutElementMutationObserver = new MutationObserver(scheduleLayoutMeasure);

  function publishLayoutIfChanged(layout: RemoteHostedPipLayout) {
    let layoutKey = serializePipHostLayout(layout);
    if (layoutKey === previousLayoutKey) return;
    let shouldAnimate =
        previousLayout?.anchorRect != null &&
        layout.anchorRect != null &&
        arePipRectsEqual(layout.anchorRect, previousLayout.anchorRect),
      nextLayout = {
        ...layout,
        animated: shouldAnimate,
      };
    previousLayout = nextLayout;
    previousLayoutKey = layoutKey;
    sendMessageFromView({
      layout: nextLayout,
      type: "remote-hosted-pip-host-layout-changed",
    });
  }

  function publishEmptyLayout() {
    publishLayoutIfChanged({
      anchors: null,
      anchorRect: null,
      animated: false,
      hostId: MAIN_THREAD_PIP_HOST_ID,
      presentationScope: "thread",
    });
  }

  function scheduleLayoutMeasure() {
    animationFrameId ??= window.requestAnimationFrame(() => {
      animationFrameId = null;
      measureAndPublishLayout();
    });
  }

  function measureAndPublishLayout() {
    let anchorHostElement = document.querySelector(mainThreadPipHostSelector);
    if (anchorHostElement == null) {
      publishEmptyLayout();
      return;
    }
    let hostRect = getScaledElementClientRect(
      anchorHostElement,
      normalizedWindowZoom,
    );
    if (hostRect == null) {
      publishEmptyLayout();
      return;
    }
    let obstacleRects: ViewportRectLike[] = [];
    for (let obstacleElement of document.querySelectorAll(
      pipObstacleSelector,
    )) {
      let obstacleRect = getScaledElementClientRect(
        obstacleElement,
        normalizedWindowZoom,
      );
      obstacleRect != null && obstacleRects.push(obstacleRect);
    }
    publishLayoutIfChanged(
      createReviewSearchAnchorPlacement({
        hostId: MAIN_THREAD_PIP_HOST_ID,
        hostRect,
        obstacleRects,
      }),
    );
  }

  function refreshObservedLayoutElements() {
    resizeObserver.disconnect();
    layoutElementMutationObserver.disconnect();
    for (let layoutElement of document.querySelectorAll(
      pipLayoutElementSelector,
    )) {
      resizeObserver.observe(layoutElement);
      layoutElementMutationObserver.observe(layoutElement, {
        attributeFilter: ["class", "hidden", "style"],
        attributes: true,
      });
    }
  }

  bodyMutationObserver.observe(document.body, {
    attributeFilter: [pipAnchorHostAttribute, pipObstacleAttribute],
    attributes: true,
    childList: true,
    subtree: true,
  });
  window.addEventListener("resize", scheduleLayoutMeasure);
  document.addEventListener("scroll", scheduleLayoutMeasure, true);
  refreshObservedLayoutElements();
  scheduleLayoutMeasure();

  return () => {
    animationFrameId != null && window.cancelAnimationFrame(animationFrameId);
    resizeObserver.disconnect();
    bodyMutationObserver.disconnect();
    layoutElementMutationObserver.disconnect();
    window.removeEventListener("resize", scheduleLayoutMeasure);
    document.removeEventListener("scroll", scheduleLayoutMeasure, true);
    publishEmptyLayout();
  };
}

function getScaledElementClientRect(
  element: Element,
  windowZoom: number,
): ViewportRectLike | null {
  if (!(element instanceof HTMLElement) || element.hidden) return null;
  let rect = element.getBoundingClientRect();
  return rect.width <= 0 || rect.height <= 0
    ? null
    : {
        height: rect.height / windowZoom,
        width: rect.width / windowZoom,
        x: rect.left / windowZoom,
        y: rect.top / windowZoom,
      };
}

function serializePipHostLayout(layout: RemoteHostedPipLayout): string {
  return JSON.stringify({
    anchors: layout.anchors,
    anchorRect: layout.anchorRect,
    hostId: layout.hostId,
    presentationScope: layout.presentationScope,
  });
}

function arePipRectsEqual(
  leftRect: ViewportRectLike,
  rightRect: ViewportRectLike,
): boolean {
  return (
    leftRect.x === rightRect.x &&
    leftRect.y === rightRect.y &&
    leftRect.width === rightRect.width &&
    leftRect.height === rightRect.height
  );
}

export function RefreshSummaryPanelObstaclesEffect() {
  let windowZoom = useWindowZoom();

  useEffect(
    () => startRemoteHostedPipHostLayoutObserver(windowZoom),
    [windowZoom],
  );

  return null;
}

function shouldRefreshPipLayoutObservers(mutationRecord: MutationRecord) {
  if (mutationRecord.type === "attributes") return true;
  for (let addedNode of mutationRecord.addedNodes)
    if (nodeContainsPipLayoutElement(addedNode)) return true;
  for (let removedNode of mutationRecord.removedNodes)
    if (nodeContainsPipLayoutElement(removedNode)) return true;
  return false;
}

function nodeContainsPipLayoutElement(node: Node): boolean {
  return (
    node instanceof HTMLElement &&
    (node.matches(pipLayoutElementSelector) ||
      node.querySelector(pipLayoutElementSelector) != null)
  );
}
