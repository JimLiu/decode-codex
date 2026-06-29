// Restored from ref/.vite/build/main-r5HnecX_.js
// Browser sidebar runtime IPC validation and window-context dispatch.

import { BrowserWindow, ipcMain, type WebContents } from "electron";
import { BROWSER_SIDEBAR_RUNTIME_MESSAGE_CHANNEL } from "./channels";
import type {
  BrowserSidebarRuntimeMessageParser,
  DisposableIpcRegistration,
  StructuredLogger,
} from "./types";

export function registerBrowserSidebarRuntimeMessageIpcHandler<TMessage>({
  browserSidebarRuntimeMessageSchema,
  getContextForWebContents,
  logger,
}: {
  browserSidebarRuntimeMessageSchema: BrowserSidebarRuntimeMessageParser<TMessage>;
  getContextForWebContents(webContents: WebContents):
    | {
        handleMessage(
          sender: WebContents,
          message: TMessage,
        ): Promise<void> | void;
      }
    | null
    | undefined;
  logger: StructuredLogger;
}): DisposableIpcRegistration {
  ipcMain.handle(
    BROWSER_SIDEBAR_RUNTIME_MESSAGE_CHANNEL,
    async (event, rawMessage: unknown) => {
      const parseResult =
        browserSidebarRuntimeMessageSchema.safeParse(rawMessage);
      if (!parseResult.success) {
        logger.warning("Invalid browser sidebar runtime message received");
        return;
      }

      const ownerWindow = BrowserWindow.fromWebContents(event.sender);
      if (ownerWindow == null) {
        logger.warning(
          "Browser sidebar runtime message received without owner window",
        );
        return;
      }

      const windowContext = getContextForWebContents(ownerWindow.webContents);
      if (windowContext == null) {
        logger.warning(
          "Browser sidebar runtime message received for unknown window context",
        );
        return;
      }

      await windowContext.handleMessage(event.sender, parseResult.data);
    },
  );

  return () => {
    ipcMain.removeHandler(BROWSER_SIDEBAR_RUNTIME_MESSAGE_CHANNEL);
  };
}
