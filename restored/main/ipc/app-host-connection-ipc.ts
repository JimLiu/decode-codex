// Restored from ref/.vite/build/main-r5HnecX_.js
// MessagePort RPC transport and app-host connection IPC registration.

import {
  ipcMain,
  type IpcMainEvent,
  type MessagePortMain,
  type WebContents,
} from "electron";

export const CONNECT_APP_HOST_CHANNEL = "codex_desktop:connect-app-host";
export const AVATAR_OVERLAY_COMPOSITION_CONNECT_HOST_CHANNEL =
  "avatar-overlay-composition:connect-host";

export type DisposableIpcListener = () => void;
export type TrustedPortIpcEventPredicate = (event: IpcMainEvent) => boolean;

export type MessagePortRpcTransport = {
  send(message: string): Promise<void>;
  receive(): Promise<string>;
  abort(reason: unknown): void;
};

export type RemoteMainFactory = (
  transport: MessagePortRpcTransport,
  appHost: unknown,
  options?: Record<string, unknown>,
) => unknown;

export type AppHostWindowContext = {
  createAppHost(sender: WebContents): unknown;
  registerAppView(
    sender: WebContents,
    remoteMain: unknown,
  ): Promise<void> | void;
};

export type StructuredLogger = {
  warning(message: string, details?: unknown): void;
};

type MessagePortMessageEvent = {
  data?: unknown;
};

export class MessagePortStringTransport implements MessagePortRpcTransport {
  readonly #port: MessagePortMain;
  #pendingResolve: ((message: string) => void) | undefined;
  #pendingReject: ((reason: unknown) => void) | undefined;
  #messageQueue: string[] = [];
  #abortReason: unknown;

  constructor(port: MessagePortMain) {
    this.#port = port;
    port.start();
    port.on("message", (event: MessagePortMessageEvent) => {
      if (this.#abortReason) return;
      if (event.data == null) {
        this.#abort(Error("Peer closed MessagePort connection."));
        return;
      }
      if (typeof event.data !== "string") {
        this.#abort(TypeError("Received non-string message from MessagePort."));
        return;
      }
      if (this.#pendingResolve) {
        this.#pendingResolve(event.data);
        this.#pendingResolve = undefined;
        this.#pendingReject = undefined;
        return;
      }
      this.#messageQueue.push(event.data);
    });
    port.on("close", () => {
      this.#abort(Error("MessagePort message error."));
    });
  }

  async send(message: string): Promise<void> {
    if (this.#abortReason) throw this.#abortReason;
    this.#port.postMessage(message);
  }

  async receive(): Promise<string> {
    const queuedMessage = this.#messageQueue.shift();
    if (queuedMessage != null) return queuedMessage;
    if (this.#abortReason) throw this.#abortReason;
    return new Promise((resolve, reject) => {
      this.#pendingResolve = resolve;
      this.#pendingReject = reject;
    });
  }

  abort(reason: unknown): void {
    try {
      this.#port.postMessage(null);
    } catch {}
    this.#port.close();
    this.#abortReason ||= reason;
  }

  #abort(reason: unknown): void {
    if (this.#abortReason) return;
    this.#abortReason = reason;
    if (this.#pendingReject) {
      this.#pendingReject(reason);
      this.#pendingResolve = undefined;
      this.#pendingReject = undefined;
    }
  }
}

export function createMessagePortRemoteMain({
  appHost,
  createRemoteMain,
  options,
  port,
}: {
  appHost: unknown;
  createRemoteMain: RemoteMainFactory;
  options?: Record<string, unknown>;
  port: MessagePortMain;
}): unknown {
  return createRemoteMain(
    new MessagePortStringTransport(port),
    appHost,
    options,
  );
}

export function registerAppHostConnectionIpc({
  createRemoteMain,
  getContextForWebContents,
  isTrustedIpcEvent,
  logger,
}: {
  createRemoteMain: RemoteMainFactory;
  getContextForWebContents(
    webContents: WebContents,
  ): AppHostWindowContext | null | undefined;
  isTrustedIpcEvent: TrustedPortIpcEventPredicate;
  logger: StructuredLogger;
}): DisposableIpcListener {
  const onConnectAppHost = (event: IpcMainEvent) => {
    if (!isTrustedIpcEvent(event)) return;
    const [port] = event.ports;
    const windowContext = getContextForWebContents(event.sender);
    const appHost = windowContext?.createAppHost(event.sender);
    if (port == null) return;
    const remoteMain = createMessagePortRemoteMain({
      appHost,
      createRemoteMain,
      port,
    });
    Promise.resolve(
      windowContext?.registerAppView(event.sender, remoteMain),
    ).catch((error: unknown) => {
      logger.warning("Failed to register AppView RPC services", {
        safe: {},
        sensitive: { error },
      });
    });
  };

  ipcMain.on(CONNECT_APP_HOST_CHANNEL, onConnectAppHost);
  return () => {
    ipcMain.removeListener(CONNECT_APP_HOST_CHANNEL, onConnectAppHost);
  };
}

export function registerAvatarOverlayCompositionSurfaceHostIpc({
  createRemoteMain,
  getAvatarOverlayCompositionSurfaceHost,
  isTrustedIpcEvent,
}: {
  createRemoteMain: RemoteMainFactory;
  getAvatarOverlayCompositionSurfaceHost?(
    sender: WebContents,
  ): unknown | null | undefined;
  isTrustedIpcEvent: TrustedPortIpcEventPredicate;
}): DisposableIpcListener {
  const onConnectHost = (event: IpcMainEvent) => {
    if (!isTrustedIpcEvent(event)) return;
    const [port] = event.ports;
    const host = getAvatarOverlayCompositionSurfaceHost?.(event.sender);
    if (port != null && host != null) {
      createMessagePortRemoteMain({
        appHost: host,
        createRemoteMain,
        port,
      });
    }
  };

  ipcMain.on(AVATAR_OVERLAY_COMPOSITION_CONNECT_HOST_CHANNEL, onConnectHost);
  return () => {
    ipcMain.removeListener(
      AVATAR_OVERLAY_COMPOSITION_CONNECT_HOST_CHANNEL,
      onConnectHost,
    );
  };
}
