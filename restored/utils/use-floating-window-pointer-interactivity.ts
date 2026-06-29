// Restored from ref/webview/assets/use-floating-window-pointer-interactivity-E5PfEveH.js
import React from "react";
import type { RefObject } from "react";
type Point = {
  x: number;
  y: number;
};
type UseEffectEvent = <Args extends unknown[], Return>(
  callback: (...args: Args) => Return,
) => (...args: Args) => Return;
type FloatingWindowPointerInteractivityOptions = {
  activationNonce?: unknown;
  floatingElementSelectors?: readonly string[];
  includeInteractiveRegion?: boolean;
  interactiveRegionRef: RefObject<HTMLElement | null>;
  isPaused?: () => boolean;
  onInteractiveChange: (isInteractive: boolean) => void;
  publishInitialNonInteractive?: boolean;
  regionElementSelectors?: readonly string[];
};
const useEffectEvent = (
  React as typeof React & {
    useEffectEvent: UseEffectEvent;
  }
).useEffectEvent;

export function initFloatingWindowPointerInteractivityChunk(): void {}

export function useFloatingWindowPointerInteractivity({
  activationNonce,
  floatingElementSelectors = [],
  includeInteractiveRegion = false,
  interactiveRegionRef,
  isPaused,
  onInteractiveChange,
  publishInitialNonInteractive = true,
  regionElementSelectors = [],
}: FloatingWindowPointerInteractivityOptions) {
  const [isPointerNonInteractive, setIsPointerNonInteractive] =
    React.useState(false);
  const getIsPaused = useEffectEvent(() => isPaused?.() ?? false);
  const publishInteractiveChange = useEffectEvent((isInteractive: boolean) => {
    setIsPointerNonInteractive(!isInteractive);
    onInteractiveChange(isInteractive);
  });
  const publishCleanupInteractive = useEffectEvent(() => {
    onInteractiveChange(true);
  });
  React.useEffect(() => {
    let lastPublishedInteractive: boolean | null = null;
    let lastMeasuredPoint: Point | null = null;
    let pendingPoint: Point | null = null;
    let animationFrameId: number | null = null;
    const publishInteractiveState = (isInteractive: boolean) => {
      if (lastPublishedInteractive === isInteractive) return;
      lastPublishedInteractive = isInteractive;
      publishInteractiveChange(isInteractive);
    };
    const isPointInteractive = (point: Point) => {
      const interactiveRegion = interactiveRegionRef.current;
      if (
        interactiveRegion == null ||
        (includeInteractiveRegion &&
          isPointInsideVisibleElement(point, interactiveRegion))
      ) {
        return true;
      }
      for (const selector of regionElementSelectors) {
        for (const element of interactiveRegion.querySelectorAll(selector)) {
          if (
            isVisibleInteractiveElement(element) &&
            isPointInsideVisibleElement(point, element)
          ) {
            return true;
          }
        }
      }
      for (const selector of floatingElementSelectors) {
        for (const element of document.querySelectorAll(selector)) {
          if (
            isVisibleInteractiveElement(element) &&
            isPointInsideVisibleElement(point, element)
          ) {
            return true;
          }
        }
      }
      return false;
    };
    const evaluatePendingPoint = () => {
      animationFrameId = null;
      if (pendingPoint == null || getIsPaused()) return;
      lastMeasuredPoint = pendingPoint;
      publishInteractiveState(isPointInteractive(pendingPoint));
    };
    const schedulePointEvaluation = () => {
      animationFrameId ??= requestAnimationFrame(evaluatePendingPoint);
    };
    const handleMouseMove = (event: MouseEvent) => {
      pendingPoint = {
        x: event.clientX,
        y: event.clientY,
      };
      lastMeasuredPoint = pendingPoint;
      schedulePointEvaluation();
    };
    const rescanLastPoint = () => {
      if (lastMeasuredPoint == null) return;
      pendingPoint = lastMeasuredPoint;
      schedulePointEvaluation();
    };
    const handleMouseLeave = () => {
      if (!getIsPaused()) publishInteractiveState(false);
    };
    const publishInitialState = () => {
      if (getIsPaused()) return;
      const initialInteractiveState = getHoveredInteractiveState({
        floatingElementSelectors,
        includeInteractiveRegion,
        interactiveRegion: interactiveRegionRef.current,
        regionElementSelectors,
      });
      if (
        initialInteractiveState != null &&
        (initialInteractiveState || publishInitialNonInteractive)
      ) {
        publishInteractiveState(initialInteractiveState);
      }
    };
    const observer = new MutationObserver(rescanLastPoint);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", rescanLastPoint);
    window.addEventListener("scroll", rescanLastPoint, true);
    window.addEventListener("mouseleave", handleMouseLeave);
    observer.observe(document.body, {
      attributeFilter: ["aria-hidden", "class", "hidden", "style"],
      attributes: true,
      childList: true,
      subtree: true,
    });
    publishInitialState();
    const initialStateFrameId = requestAnimationFrame(publishInitialState);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", rescanLastPoint);
      window.removeEventListener("scroll", rescanLastPoint, true);
      window.removeEventListener("mouseleave", handleMouseLeave);
      observer.disconnect();
      cancelAnimationFrame(initialStateFrameId);
      if (animationFrameId != null) cancelAnimationFrame(animationFrameId);
      lastPublishedInteractive = null;
      publishCleanupInteractive();
    };
  }, [
    activationNonce,
    floatingElementSelectors,
    includeInteractiveRegion,
    interactiveRegionRef,
    publishInitialNonInteractive,
    regionElementSelectors,
  ]);
  return isPointerNonInteractive;
}
function getHoveredInteractiveState({
  floatingElementSelectors,
  includeInteractiveRegion,
  interactiveRegion,
  regionElementSelectors,
}: {
  floatingElementSelectors: readonly string[];
  includeInteractiveRegion: boolean;
  interactiveRegion: HTMLElement | null;
  regionElementSelectors: readonly string[];
}) {
  if (interactiveRegion != null) {
    if (includeInteractiveRegion && interactiveRegion.matches(":hover")) {
      return true;
    }
    for (const selector of regionElementSelectors) {
      for (const element of interactiveRegion.querySelectorAll(selector)) {
        if (isVisibleInteractiveElement(element) && element.matches(":hover")) {
          return true;
        }
      }
    }
  }
  for (const selector of floatingElementSelectors) {
    for (const element of document.querySelectorAll(selector)) {
      if (isVisibleInteractiveElement(element) && element.matches(":hover")) {
        return true;
      }
    }
  }
  return document.documentElement.matches(":hover") ? false : null;
}
function isPointInsideVisibleElement(point: Point, element: Element) {
  if (!isPointInsideRect(point, element.getBoundingClientRect())) return false;
  return document
    .elementsFromPoint(point.x, point.y)
    .some(
      (hitElement) => hitElement === element || element.contains(hitElement),
    );
}
function isVisibleInteractiveElement(element: Element) {
  const style = window.getComputedStyle(element);
  if (
    style.display === "none" ||
    style.visibility === "hidden" ||
    style.pointerEvents === "none"
  ) {
    return false;
  }
  const rect = element.getBoundingClientRect();
  return rect.width > 0 && rect.height > 0;
}
function isPointInsideRect(point: Point, rect: DOMRect) {
  return (
    point.x >= rect.left &&
    point.x <= rect.right &&
    point.y >= rect.top &&
    point.y <= rect.bottom
  );
}
