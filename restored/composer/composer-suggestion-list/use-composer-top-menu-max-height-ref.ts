// Restored from ref/webview/assets/composer-suggestion-list-BQ2rPanH.js
import React from "react";
import { useWindowZoom } from "../../utils/window-zoom-context";
const COMPOSER_TOP_MENU_VERTICAL_MARGIN_PX = 8;
const COMPOSER_TOP_MENU_OFFSET_PX = 46;
const COMPOSER_TOP_MENU_MAX_HEIGHT_PROPERTY = "--composer-top-menu-max-height";
type ComposerTopMenuPlacement = "top" | "bottom";
type UseComposerTopMenuMaxHeightOptions = {
  element: HTMLElement | null;
  isEnabled: boolean;
  placement?: ComposerTopMenuPlacement;
};
export function useComposerTopMenuMaxHeightRef(
  isEnabled: boolean,
  placement: ComposerTopMenuPlacement = "top",
): (element: HTMLDivElement | null) => void {
  const [element, setElement] = React.useState<HTMLDivElement | null>(null);
  useComposerTopMenuMaxHeight({
    element,
    isEnabled,
    placement,
  });
  return React.useCallback((nextElement: HTMLDivElement | null) => {
    setElement(nextElement);
  }, []);
}
function useComposerTopMenuMaxHeight({
  element,
  isEnabled,
  placement = "top",
}: UseComposerTopMenuMaxHeightOptions): void {
  const windowZoom = useWindowZoom();
  React.useLayoutEffect(() => {
    if (!isEnabled || element == null) return undefined;
    let frameId: number | null = null;
    let lastMaxHeight = "";
    const updateMaxHeight = () => {
      const rect = element.getBoundingClientRect();
      const availableHeight =
        placement === "top"
          ? (rect.height === 0 ? rect.top : rect.bottom) / windowZoom -
            COMPOSER_TOP_MENU_OFFSET_PX
          : (window.innerHeight - rect.top) / windowZoom;
      const nextMaxHeight = `${Math.max(0, Math.floor(availableHeight - COMPOSER_TOP_MENU_VERTICAL_MARGIN_PX))}px`;
      if (nextMaxHeight !== lastMaxHeight) {
        lastMaxHeight = nextMaxHeight;
        element.style.setProperty(
          COMPOSER_TOP_MENU_MAX_HEIGHT_PROPERTY,
          nextMaxHeight,
        );
      }
    };
    const scheduleUpdate = () => {
      frameId ??= window.requestAnimationFrame(() => {
        frameId = null;
        updateMaxHeight();
      });
    };
    updateMaxHeight();
    const resizeObserver =
      typeof ResizeObserver === "undefined"
        ? null
        : new ResizeObserver(scheduleUpdate);
    resizeObserver?.observe(element);
    if (typeof document !== "undefined") {
      resizeObserver?.observe(document.documentElement);
    }
    return () => {
      if (frameId != null) window.cancelAnimationFrame(frameId);
      resizeObserver?.disconnect();
      element.style.removeProperty(COMPOSER_TOP_MENU_MAX_HEIGHT_PROPERTY);
    };
  }, [element, isEnabled, placement, windowZoom]);
}
