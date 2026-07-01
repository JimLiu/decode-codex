// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// DOM positioning helper for portalled MCP app frames.

export function positionMcpAppFrame({
  frameElement,
  isFullScreen,
  targetFrameContainer,
  threadFrameContainer,
}: {
  frameElement: HTMLElement;
  isFullScreen: boolean;
  targetFrameContainer: HTMLElement;
  threadFrameContainer: HTMLElement;
}): void {
  const zoom = (threadFrameContainer as any).currentCSSZoom ?? 1;
  const targetRect = targetFrameContainer.getBoundingClientRect();
  if (isFullScreen) {
    frameElement.style.position = "fixed";
    const offsetRect = frameElement.offsetParent?.getBoundingClientRect();
    frameElement.style.top = `${(targetRect.top - (offsetRect?.top ?? 0)) / zoom}px`;
    frameElement.style.left = `${(targetRect.left - (offsetRect?.left ?? 0)) / zoom}px`;
    frameElement.style.width = `${targetRect.width / zoom}px`;
    frameElement.style.height = `${targetRect.height / zoom}px`;
    frameElement.style.zIndex = "43";
    return;
  }
  const threadRect = threadFrameContainer.getBoundingClientRect();
  frameElement.style.position = "absolute";
  frameElement.style.top = `${(targetRect.top - threadRect.top) / zoom + threadFrameContainer.scrollTop}px`;
  frameElement.style.left = `${(targetRect.left - threadRect.left) / zoom + threadFrameContainer.scrollLeft}px`;
  frameElement.style.width = `${targetRect.width / zoom}px`;
  frameElement.style.height = `${targetRect.height / zoom}px`;
  frameElement.style.zIndex = "1";
}
