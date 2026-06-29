// Restored from ref/webview/assets/use-element-in-view-lTZiz79I.js
// Tracks whether a target element intersects a scroll container.

import React from "react";
import { once } from "../runtime/commonjs-interop";
import {
  getChunkModuleExports,
  initReactRuntime,
} from "../runtime/shared-utility-runtime";

export type UseElementInViewOptions = {
  container: Element | null | undefined;
  target: Element | null | undefined;
};

const noopSubscribe = (): void => {};

export const initUseElementInViewChunk = once(() => {
  getChunkModuleExports();
  initReactRuntime();
});

export function useElementInView({
  container,
  target,
}: UseElementInViewOptions): boolean {
  const subscribe = (onStoreChange: () => void) => {
    if (!container || !target) return noopSubscribe;
    const notify = () => onStoreChange();
    container.addEventListener("scroll", notify, {
      passive: true,
    });
    const resizeObserver =
      typeof ResizeObserver === "undefined" ? null : new ResizeObserver(notify);
    resizeObserver?.observe(container);
    resizeObserver?.observe(target);
    return () => {
      container.removeEventListener("scroll", notify);
      resizeObserver?.disconnect();
    };
  };
  const getSnapshot = () => {
    if (!container || !target) return true;
    const containerRect = container.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    return (
      targetRect.bottom > containerRect.top &&
      targetRect.top < containerRect.bottom
    );
  };
  return React.useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}
