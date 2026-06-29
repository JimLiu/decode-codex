// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Persistence + clamping for the app-shell bottom panel height. The height is
// kept between a fixed minimum and half of the available main-content height,
// and is stored under a dedicated settings key.
import {
  readStoredNumber,
  writeStoredValue,
} from "../boundaries/onboarding-commons-externals.facade";

const DEFAULT_BOTTOM_PANEL_HEIGHT = 280;
const BOTTOM_PANEL_HEIGHT_STORAGE_KEY = "app-shell:bottom-panel-height";

export function clampBottomPanelHeight(
  height: number,
  availableHeight: number,
): number {
  return Number.isFinite(height)
    ? Math.max(160, Math.min(height, availableHeight * 0.5))
    : DEFAULT_BOTTOM_PANEL_HEIGHT;
}

export function readBottomPanelHeight(availableHeight: number): number {
  return clampBottomPanelHeight(
    readStoredNumber(
      BOTTOM_PANEL_HEIGHT_STORAGE_KEY,
      DEFAULT_BOTTOM_PANEL_HEIGHT,
    ),
    availableHeight,
  );
}

export function writeBottomPanelHeight(
  height: number,
  availableHeight: number,
): void {
  writeStoredValue(
    BOTTOM_PANEL_HEIGHT_STORAGE_KEY,
    clampBottomPanelHeight(height, availableHeight),
  );
}
