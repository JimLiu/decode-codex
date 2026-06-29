// Restored from ref/.vite/build/main-r5HnecX_.js
// Debug and rollout metrics IPC handlers exposed through the webview bridge.

import { ipcMain } from "electron";
import {
  GET_FAST_MODE_ROLLOUT_METRICS_CHANNEL,
  TRIGGER_SENTRY_TEST_CHANNEL,
} from "./channels";
import type {
  DesktopSentryReporter,
  DisposableIpcRegistration,
  TrustedViewIpcEventPredicate,
} from "./types";

export function registerFastModeRolloutMetricsIpcHandler({
  codexHome,
  getFastModeRolloutMetrics,
  isTrustedIpcEvent,
}: {
  codexHome: string;
  getFastModeRolloutMetrics(input: {
    codexHome: string;
    params: unknown;
  }): Promise<unknown> | unknown;
  isTrustedIpcEvent: TrustedViewIpcEventPredicate;
}): DisposableIpcRegistration {
  ipcMain.handle(
    GET_FAST_MODE_ROLLOUT_METRICS_CHANNEL,
    async (event, params: unknown) =>
      isTrustedIpcEvent(event)
        ? getFastModeRolloutMetrics({ codexHome, params })
        : null,
  );

  return () => {
    ipcMain.removeHandler(GET_FAST_MODE_ROLLOUT_METRICS_CHANNEL);
  };
}

export function registerSentryTestIpcHandler({
  desktopSentry,
  isTrustedIpcEvent,
}: {
  desktopSentry: DesktopSentryReporter;
  isTrustedIpcEvent: TrustedViewIpcEventPredicate;
}): DisposableIpcRegistration {
  ipcMain.handle(TRIGGER_SENTRY_TEST_CHANNEL, (event) => {
    if (!isTrustedIpcEvent(event)) return;
    desktopSentry.captureException(
      Error("Desktop Sentry test error (debug button)"),
      {
        tags: {
          trigger: "debug-button",
        },
      },
    );
  });

  return () => {
    ipcMain.removeHandler(TRIGGER_SENTRY_TEST_CHANNEL);
  };
}
