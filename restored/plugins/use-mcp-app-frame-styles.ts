// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Applies frame and webview DOM classes for MCP app surfaces.

import * as React from "react";
import { classNames } from "../utils/class-names";

interface UseMcpAppFrameStylesOptions {
  backgroundColor: string | null;
  frameElement: HTMLDivElement | null;
  fullSurface: boolean;
  isCardSurface: boolean;
  isFullScreen: boolean;
  prefersBorder: boolean;
  title: string;
  webviewElement: HTMLElement | null;
}

export function useMcpAppFrameStyles({
  backgroundColor,
  frameElement,
  fullSurface,
  isCardSurface,
  isFullScreen,
  prefersBorder,
  title,
  webviewElement,
}: UseMcpAppFrameStylesOptions): void {
  React.useLayoutEffect(() => {
    if (frameElement == null || webviewElement == null) return;
    frameElement.className = classNames(
      "group/mcp-app relative flex h-full min-h-0 min-w-0 w-full flex-col overflow-hidden bg-token-background",
      !isFullScreen &&
        (fullSurface
          ? "border-t border-token-border-light"
          : !isCardSurface &&
            prefersBorder &&
            "rounded-lg border border-token-border shadow-sm"),
    );
    webviewElement.className = classNames(
      "bg-token-background h-full min-h-0 min-w-0 w-full overflow-hidden",
      !isFullScreen && !fullSurface && !isCardSurface && "rounded-lg",
      isFullScreen && "min-h-0 flex-1",
    );
    webviewElement.style.backgroundColor = backgroundColor ?? "";
    (webviewElement as HTMLElement).title = title;
  }, [
    backgroundColor,
    fullSurface,
    frameElement,
    isCardSurface,
    isFullScreen,
    prefersBorder,
    webviewElement,
    title,
  ]);
}
