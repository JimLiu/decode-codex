// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Measures an element's bounding rect, returning null when the element is not
// currently visible (i.e. has a zero width or height).

export interface VisibleRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export function measureVisibleRect(element: Element): VisibleRect | null {
  const { x, y, width, height } = element.getBoundingClientRect();
  return width > 0 && height > 0 ? { x, y, width, height } : null;
}
