// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Focus/event containment checks for deciding whether a keyboard or pointer event
// belongs to the in-app browser sidebar surface.
import { APP_SHELL_FOCUS_AREA_ATTR } from "../boundaries/onboarding-commons-externals.facade";

const APP_SHELL_FOCUS_AREA_SELECTOR = "[data-app-shell-focus-area]";

const INTERACTIVE_ELEMENT_SELECTOR =
  "input,textarea,select,[contenteditable='true'],[data-codex-composer],[data-codex-terminal]";

export type BrowserSidebarSurfaceKind = "browser-web-contents" | (string & {});

export function isEventWithinElement(
  event: Event,
  element: HTMLElement | null,
  surfaceKind?: BrowserSidebarSurfaceKind,
): boolean {
  if (event.defaultPrevented || element == null) return false;
  if (surfaceKind === "browser-web-contents") return true;
  const target = event.target;
  return target instanceof Node && element.contains(target)
    ? true
    : isElementFocusWithin(element);
}

export function isElementFocusWithin(element: HTMLElement | null): boolean {
  if (element == null) return false;
  const activeElement = document.activeElement;
  if (
    activeElement == null ||
    activeElement === document.body ||
    element.contains(activeElement)
  )
    return true;
  if (activeElement.closest(INTERACTIVE_ELEMENT_SELECTOR) != null) return false;
  const focusArea = element
    .closest(`[${APP_SHELL_FOCUS_AREA_ATTR}]`)
    ?.getAttribute(APP_SHELL_FOCUS_AREA_ATTR);
  return (
    focusArea != null &&
    activeElement
      .closest(APP_SHELL_FOCUS_AREA_SELECTOR)
      ?.getAttribute(APP_SHELL_FOCUS_AREA_ATTR) === focusArea
  );
}
