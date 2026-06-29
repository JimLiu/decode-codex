// Restored from ref/.vite/build/main-r5HnecX_.js
// Aggregate registration for view-message, sidebar, metrics, and debug IPC.

import type { WebContents } from "electron";
import { registerBrowserSidebarRuntimeMessageIpcHandler } from "./browser-sidebar-runtime-message";
import {
  registerFastModeRolloutMetricsIpcHandler,
  registerSentryTestIpcHandler,
} from "./debug-ipc";
import type {
  BrowserSidebarRuntimeMessageParser,
  DesktopSentryReporter,
  DisposableIpcRegistration,
  StructuredLogger,
  TrustedViewIpcEventPredicate,
  ViewMessageWindowContext,
} from "./types";
import { registerViewMessageIpcHandler } from "./view-message-handler";

export function registerDesktopViewIpcHandlers<TBrowserSidebarRuntimeMessage>({
  browserSidebarRuntimeMessageSchema,
  codexHome,
  desktopSentry,
  getContextForWebContents,
  getFastModeRolloutMetrics,
  isTrustedIpcEvent,
  logger,
  ...viewMessageOptions
}: Omit<
  Parameters<typeof registerViewMessageIpcHandler>[0],
  "getContextForWebContents" | "isTrustedIpcEvent" | "logger"
> & {
  browserSidebarRuntimeMessageSchema: BrowserSidebarRuntimeMessageParser<TBrowserSidebarRuntimeMessage>;
  codexHome: string;
  desktopSentry: DesktopSentryReporter;
  getContextForWebContents(webContents: WebContents):
    | (ViewMessageWindowContext & {
        handleMessage(
          sender: WebContents,
          message: TBrowserSidebarRuntimeMessage | Record<string, unknown>,
        ): Promise<void> | void;
      })
    | null
    | undefined;
  getFastModeRolloutMetrics(input: {
    codexHome: string;
    params: unknown;
  }): Promise<unknown> | unknown;
  isTrustedIpcEvent: TrustedViewIpcEventPredicate;
  logger: StructuredLogger;
}): DisposableIpcRegistration {
  const disposables = [
    registerViewMessageIpcHandler({
      ...viewMessageOptions,
      getContextForWebContents,
      isTrustedIpcEvent,
      logger,
    }),
    registerBrowserSidebarRuntimeMessageIpcHandler({
      browserSidebarRuntimeMessageSchema,
      getContextForWebContents,
      logger,
    }),
    registerFastModeRolloutMetricsIpcHandler({
      codexHome,
      getFastModeRolloutMetrics,
      isTrustedIpcEvent,
    }),
    registerSentryTestIpcHandler({
      desktopSentry,
      isTrustedIpcEvent,
    }),
  ];

  return () => {
    for (const dispose of disposables.splice(0).reverse()) {
      dispose();
    }
  };
}
