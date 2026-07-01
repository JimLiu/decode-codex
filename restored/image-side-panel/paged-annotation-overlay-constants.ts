// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Shared style constants and cursor assets for paged annotation overlays.

import { svgToDataUri } from "../boundaries/onboarding-commons-externals.facade";

const ACCENT_COLOR = "#2563eb";

const CURSOR_SVG = `<svg
  width="26"
  height="25"
  viewBox="0 0 26 25"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12.6504 0.824799C6.21496 0.824799 0.825466 5.77554 0.825195 12.0885C0.825245 14.2375 1.46183 16.2421 2.55176 17.943L2.02148 20.235L1.99316 20.3756C1.77603 21.655 2.78945 22.7791 4.02832 22.7691L4.0791 22.8209L4.53418 22.7047L7.12305 22.0426C8.77593 22.8778 10.6577 23.3531 12.6504 23.3531C19.086 23.3531 24.4754 18.4014 24.4756 12.0885C24.4753 5.77554 19.0858 0.824799 12.6504 0.824799Z"
    fill="currentColor"
    stroke="white"
    stroke-width="1.65"
  />
</svg>
`;

const CURSOR_DATA_URI = svgToDataUri(
  CURSOR_SVG.replace("currentColor", ACCENT_COLOR),
);

export const EPSILON = 2.220446049250313e-16;
export const ANNOTATION_ACCENT_COLOR = ACCENT_COLOR;
export const RECT_GAP = 8;
export const PREVIEW_HEIGHT = 32;
export const PREVIEW_MAX_WIDTH = 294;
export const MARKER_SIZE = 30;
export const ACCENT_BORDER_COLOR = `var(--color-text-accent, var(--color-accent-blue, ${ACCENT_COLOR}))`;
export const ACCENT_FILL_COLOR = `color-mix(in srgb, var(--color-text-accent, var(--color-accent-blue, ${ACCENT_COLOR})) 20%, transparent)`;
export const HIGHLIGHT_TRANSITION =
  "top 0.2s cubic-bezier(0.165, 0.88, 0.44, 1), left 0.2s cubic-bezier(0.165, 0.88, 0.44, 1), width 0.2s cubic-bezier(0.165, 0.88, 0.44, 1), height 0.2s cubic-bezier(0.165, 0.88, 0.44, 1)";
export const FONT_FAMILY =
  '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro", "Segoe UI", sans-serif';
export const PREVIEW_BACKGROUND =
  "var(--color-token-dropdown-background, var(--color-token-main-surface-primary, white))";
export const PREVIEW_FOREGROUND =
  "var(--color-token-foreground, var(--color-token-text-primary, rgb(38, 38, 38)))";
export const PREVIEW_BORDER =
  "var(--color-token-border-default, var(--color-token-border-light, rgba(13, 13, 13, 0.08)))";
export const ANNOTATION_CROSSHAIR_CURSOR = `url("${CURSOR_DATA_URI}") 13 12, crosshair`;
export const ANNOTATION_EDITOR_ENTER_CLASS =
  "pointer-events-none absolute z-50 cursor-auto paged-annotation-editor-enter";
