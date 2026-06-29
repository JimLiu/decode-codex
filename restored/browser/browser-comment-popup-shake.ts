// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Shake-animation + light-dismiss decision helpers for the floating browser comment popup.
import type { MutableRefObject } from "react";

const BROWSER_COMMENT_POPUP_SHAKE_CLASS = "browser-comment-popup-shake";

export function applyBrowserCommentPopupShake({
  animationFrameRef,
  animationWindow,
  editorWrapper,
}: {
  animationFrameRef: MutableRefObject<number | null>;
  animationWindow: Window;
  editorWrapper: HTMLElement | null;
}): void {
  if (editorWrapper == null) return;
  editorWrapper.classList.remove(BROWSER_COMMENT_POPUP_SHAKE_CLASS);
  if (animationFrameRef.current != null) {
    animationWindow.cancelAnimationFrame(animationFrameRef.current);
  }
  animationFrameRef.current = animationWindow.requestAnimationFrame(() => {
    animationFrameRef.current = null;
    editorWrapper.classList.add(BROWSER_COMMENT_POPUP_SHAKE_CLASS);
  });
}

export function resolveLightDismissBehavior({
  isLightDismissible,
  isLightDismissArmed,
}: {
  isLightDismissible: boolean;
  isLightDismissArmed: boolean;
}): "dismiss" | "shake" {
  return isLightDismissible || isLightDismissArmed ? "dismiss" : "shake";
}
