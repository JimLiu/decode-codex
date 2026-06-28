// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Scroll button visibility helper for local conversation thread state.

const responseSpacerScrollThresholdPx = 24;

export interface ScrollToBottomButtonState {
  isScrollToTopEnabled: boolean;
  isScrolledFromBottom: boolean;
  responseSpacerHeightPx: number | null;
  scrollDistanceFromBottomPx: number | null;
}

export function shouldShowScrollToBottomButton({
  isScrollToTopEnabled,
  isScrolledFromBottom,
  responseSpacerHeightPx,
  scrollDistanceFromBottomPx,
}: ScrollToBottomButtonState): boolean {
  return !isScrollToTopEnabled || responseSpacerHeightPx == null
    ? isScrolledFromBottom
    : scrollDistanceFromBottomPx != null &&
        scrollDistanceFromBottomPx >
          responseSpacerHeightPx + responseSpacerScrollThresholdPx;
}
