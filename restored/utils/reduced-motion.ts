// Restored from ref/webview/assets/reduced-motion-GGHfH0hr.js
// reduced-motion-GGHfH0hr chunk restored from the Codex webview bundle.
export const isBrowser = typeof window !== "undefined";
export const hasInitializedReducedMotion = {
  current: false,
};
export const prefersReducedMotion = {
  current: null as boolean | null,
};

export function initializeReducedMotionPreference(): void {
  hasInitializedReducedMotion.current = true;
  if (!isBrowser) return;
  if (window.matchMedia) {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion)");
    const updatePreference = () => {
      prefersReducedMotion.current = mediaQuery.matches;
    };
    mediaQuery.addEventListener("change", updatePreference);
    updatePreference();
  } else {
    prefersReducedMotion.current = false;
  }
}
