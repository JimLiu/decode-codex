// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~plugin-detail-page~new-~sfopfmmp-9J50_--p.js
// Electron app-main logging and host-message bridge runtime.
import { once } from "./commonjs-interop";
export {
  getChunkModuleExports,
  getJsxRuntime,
  initReactRuntime,
} from "./app-main-react-runtime";
export {
  findSingleMatchingCodexAppForPlugin,
  initAppPluginMatchingRuntime,
  pluginMatchesCodexApp,
} from "./app-main-plugin-matching";
export type {
  CodexAppPluginMatchApp,
  CodexAppPluginMatchPlugin,
} from "./app-main-plugin-matching";

type AppMainLogLevel = "trace" | "debug" | "info" | "warning" | "error";
type AppMainLogTags = {
  safe?: Record<string, unknown>;
  sensitive?: Record<string, unknown>;
};
type AppMainLogPayload = {
  level: AppMainLogLevel;
  message: string;
  tags?: {
    safe?: Record<string, unknown>;
    sensitive: Record<string, unknown>;
  };
};
type HostMessage = {
  type: string;
  [key: string]: unknown;
};
type HostMessageHandler = (
  message: HostMessage,
  dispatchMessage: (type: string, payload?: Record<string, unknown>) => void,
) => void;
type ElectronBridge = {
  sendMessageFromView?: (message: HostMessage) => Promise<unknown>;
};
type WindowWithElectronBridge = Window &
  typeof globalThis & {
    electronBridge?: ElectronBridge;
  };
type ForwardedCodexEvent = CustomEvent<HostMessage> & {
  __codexForwardedViaBridge?: boolean;
};
type HostMessageApi = {
  postMessage(message: HostMessage): void;
  getState(): unknown;
  setState(nextState: unknown): void;
};

const NULL_ORIGIN = "null";

let hostMessageApi: HostMessageApi | null;
let hostMessageApiState: unknown;
let dispatchLogToHost:
  | ((type: string, payload?: Record<string, unknown>) => void)
  | null;

export let appMainLogger: Record<
  AppMainLogLevel,
  (message: string, tags?: AppMainLogTags) => void
>;
export let hostMessageBridge: ElectronHostMessageBridge;

function isHostMessage(value: unknown): value is HostMessage {
  return (
    typeof value === "object" &&
    value != null &&
    typeof (value as HostMessage).type === "string"
  );
}

function parseWindowHostMessage(
  event: MessageEvent,
  targetWindow: Window = window,
): HostMessage | null {
  const messageSource = event.source;
  const targetOrigin = targetWindow.location.origin;

  if (
    !(messageSource == null || messageSource === targetWindow) ||
    (messageSource === targetWindow &&
      targetOrigin !== "" &&
      targetOrigin !== NULL_ORIGIN &&
      event.origin !== targetOrigin)
  ) {
    return null;
  }

  return isHostMessage(event.data) ? event.data : null;
}

function normalizeLogTags(tags?: AppMainLogTags): AppMainLogPayload["tags"] {
  return tags == null
    ? undefined
    : {
        ...tags,
        sensitive: tags.sensitive ?? {},
      };
}

function sendLogMessage(
  level: AppMainLogLevel,
  message: string,
  tags?: AppMainLogTags,
): void {
  dispatchLogToHost?.("log-message", {
    level,
    message,
    tags: normalizeLogTags(tags),
  });
}

function setHostLogDispatcher(
  dispatcher:
    | ((type: string, payload?: Record<string, unknown>) => void)
    | null,
): void {
  dispatchLogToHost = dispatcher;
}

function createAppMainLogger(): typeof appMainLogger {
  return {
    trace: (message, tags) => {
      sendLogMessage("trace", message, tags);
    },
    debug: (message, tags) => {
      sendLogMessage("debug", message, tags);
    },
    info: (message, tags) => {
      sendLogMessage("info", message, tags);
    },
    warning: (message, tags) => {
      sendLogMessage("warning", message, tags);
    },
    error: (message, tags) => {
      sendLogMessage("error", message, tags);
    },
  };
}

function initHostMessageApi(): void {
  hostMessageApi = {
    postMessage(message) {
      let forwardedViaBridge = false;
      const electronBridge = (window as WindowWithElectronBridge)
        .electronBridge;

      if (electronBridge?.sendMessageFromView != null) {
        const forwardedMessage = message;
        electronBridge.sendMessageFromView(forwardedMessage).catch((error) => {
          if (forwardedMessage.type !== "log-message") {
            appMainLogger.warning("Failed to send message from view", {
              safe: { type: forwardedMessage.type },
              sensitive: { error, message },
            });
          }
        });
        forwardedViaBridge = true;
      }

      const event = new CustomEvent("codex-message-from-view", {
        detail: message,
      }) as ForwardedCodexEvent;
      if (forwardedViaBridge) {
        event.__codexForwardedViaBridge = true;
      }
      window.dispatchEvent(event);
    },
    getState() {
      return hostMessageApiState;
    },
    setState(nextState) {
      hostMessageApiState = nextState;
    },
  };
}

export class ElectronHostMessageBridge {
  private static instance: ElectronHostMessageBridge | null = null;

  static getInstance(): ElectronHostMessageBridge {
    ElectronHostMessageBridge.instance ??= new ElectronHostMessageBridge();
    return ElectronHostMessageBridge.instance;
  }

  private readonly handlers = new Map<string, Set<HostMessageHandler>>();

  private constructor() {
    this.dispatchMessage = this.dispatchMessage.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    window.addEventListener("message", this.handleMessage);
  }

  dispatchMessage(type: string, payload: Record<string, unknown> = {}): void {
    if (hostMessageApi == null) throw Error("VS Code API is unavailable");
    hostMessageApi.postMessage({
      ...payload,
      type,
    });
  }

  deliverMessage(type: string, message: HostMessage): void {
    const handlers = this.handlers.get(type);
    if (handlers == null) return;

    const dispatchMessage = (
      nextType: string,
      payload?: Record<string, unknown>,
    ) => {
      this.dispatchMessage(nextType, payload);
    };
    for (const handler of handlers) {
      handler(message, dispatchMessage);
    }
  }

  dispatchHostMessage(message: HostMessage): void {
    this.deliverMessage(message.type, message);
  }

  handleMessage(event: MessageEvent): void {
    const message = parseWindowHostMessage(event);
    if (message != null) {
      this.deliverMessage(message.type, message);
    }
  }

  subscribe(type: string, handler: HostMessageHandler): () => void {
    const handlers = this.handlers.get(type) ?? new Set<HostMessageHandler>();
    handlers.add(handler);
    this.handlers.set(type, handlers);

    return () => {
      const currentHandlers = this.handlers.get(type);
      if (currentHandlers == null) return;
      currentHandlers.delete(handler);
      if (currentHandlers.size === 0) {
        this.handlers.delete(type);
      }
    };
  }
}

export const initAppLoggingChunk = once(() => {
  setHostLogDispatcher(null);
  appMainLogger = createAppMainLogger();
});

export const initAppRuntimeChunk = once(() => {
  initAppLoggingChunk();
  initHostMessageApi();
  hostMessageBridge = ElectronHostMessageBridge.getInstance();
  setHostLogDispatcher((type, payload) => {
    hostMessageBridge.dispatchMessage(type, payload);
  });
});
