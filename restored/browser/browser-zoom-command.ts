// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Zoom command math for the in-app browser: resolves the next rendered zoom percent
// for a zoom command and rewrites the command to account for device-toolbar viewport scaling.
import {
  BROWSER_ZOOM_LEVELS,
  MAX_BROWSER_ZOOM_PERCENT,
  clampBrowserZoomPercent,
} from "../boundaries/onboarding-commons-externals.facade";

export type BrowserZoomCommand =
  | { type: "step-zoom"; delta: number }
  | { type: "set-zoom-percent"; zoomPercent: number }
  | { type: "reset-zoom" };

export type ApplyZoomCommandInput = {
  command: BrowserZoomCommand;
  currentRenderedZoomPercent: number;
  viewportScale: number;
};

export type ApplyZoomCommandResult = {
  command: BrowserZoomCommand;
  renderedZoomPercent: number;
};

function scaleZoomToViewport(
  zoomPercent: number,
  viewportScale: number,
): number {
  return Math.round(zoomPercent * viewportScale);
}

function toCommandZoomPercent({
  renderedZoomPercent,
  viewportScale,
}: {
  renderedZoomPercent: number;
  viewportScale: number;
}): number {
  return clampBrowserZoomPercent(
    viewportScale <= 0
      ? renderedZoomPercent
      : Math.round(renderedZoomPercent / viewportScale),
  );
}

export function stepZoomPercent(
  currentZoomPercent: number,
  delta: number,
): number {
  if (delta > 0) {
    for (const level of BROWSER_ZOOM_LEVELS)
      if (level > currentZoomPercent) return level;
    return MAX_BROWSER_ZOOM_PERCENT;
  }
  for (let index = BROWSER_ZOOM_LEVELS.length - 1; index >= 0; --index) {
    const level = BROWSER_ZOOM_LEVELS[index];
    if (level < currentZoomPercent) return level;
  }
  return currentZoomPercent;
}

export function resolveRenderedZoomPercent(
  currentRenderedZoomPercent: number,
  command: BrowserZoomCommand,
): number {
  switch (command.type) {
    case "set-zoom-percent":
      return clampBrowserZoomPercent(command.zoomPercent);
    case "reset-zoom":
      return 100;
    case "step-zoom":
      return stepZoomPercent(currentRenderedZoomPercent, command.delta);
  }
}

export function applyZoomCommand({
  command,
  currentRenderedZoomPercent,
  viewportScale,
}: ApplyZoomCommandInput): ApplyZoomCommandResult {
  const renderedZoomPercent = resolveRenderedZoomPercent(
    currentRenderedZoomPercent,
    command,
  );
  if (viewportScale === 1) return { command, renderedZoomPercent };
  const commandZoomPercent = toCommandZoomPercent({
    renderedZoomPercent,
    viewportScale,
  });
  return {
    command: { type: "set-zoom-percent", zoomPercent: commandZoomPercent },
    renderedZoomPercent: scaleZoomToViewport(commandZoomPercent, viewportScale),
  };
}
