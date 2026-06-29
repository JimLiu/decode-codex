// Restored from ref/.vite/build/preload.js
// preload chunk restored from the Codex Electron main bundle.
// Electron preload bridge for the main Codex webview.

import { contextBridge, ipcRenderer, webUtils } from "electron";

const WORKER_FROM_VIEW_CHANNEL_PREFIX = "codex_desktop:worker";
const MCP_SANDBOX_HOST_MESSAGE_CHANNEL =
  "codex_desktop:mcp-app-sandbox-host-message";
const SHOW_CONTEXT_MENU_CHANNEL = "codex_desktop:show-context-menu";
const SHOW_APPLICATION_MENU_CHANNEL = "codex_desktop:show-application-menu";
const GET_SENTRY_INIT_OPTIONS_CHANNEL = "codex_desktop:get-sentry-init-options";
const GET_BUILD_FLAVOR_CHANNEL = "codex_desktop:get-build-flavor";
const GET_USES_OWL_APP_SHELL_CHANNEL = "codex_desktop:get-uses-owl-app-shell";
const GET_SYSTEM_THEME_VARIANT_CHANNEL =
  "codex_desktop:get-system-theme-variant";
const GET_FAST_MODE_ROLLOUT_METRICS_CHANNEL =
  "codex_desktop:get-fast-mode-rollout-metrics";
const SYSTEM_THEME_VARIANT_UPDATED_CHANNEL =
  "codex_desktop:system-theme-variant-updated";
const TRIGGER_SENTRY_TEST_CHANNEL = "codex_desktop:trigger-sentry-test";
const CONNECT_APP_HOST_CHANNEL = "codex_desktop:connect-app-host";
const MESSAGE_FROM_VIEW_CHANNEL = "codex_desktop:message-from-view";
const MESSAGE_FOR_VIEW_CHANNEL = "codex_desktop:message-for-view";
const SHARED_OBJECT_SNAPSHOT_CHANNEL =
  "codex_desktop:get-shared-object-snapshot";

type SharedObjectSnapshot = Record<string, unknown>;
type WorkerMessageHandler = (message: unknown) => void;
type ThemeVariantListener = () => void;

type SentryInitOptions = {
  codexAppSessionId?: string;
  [key: string]: unknown;
};

function workerMessageFromViewChannel(workerId: string): string {
  return `${WORKER_FROM_VIEW_CHANNEL_PREFIX}:${workerId}:from-view`;
}

function workerMessageForViewChannel(workerId: string): string {
  return `${WORKER_FROM_VIEW_CHANNEL_PREFIX}:${workerId}:for-view`;
}

const sentryInitOptions = ipcRenderer.sendSync(
  GET_SENTRY_INIT_OPTIONS_CHANNEL,
) as SentryInitOptions;
const buildFlavor = ipcRenderer.sendSync(GET_BUILD_FLAVOR_CHANNEL);
const usesOwlAppShell =
  ipcRenderer.sendSync(GET_USES_OWL_APP_SHELL_CHANNEL) === true;
const sharedObjectSnapshot =
  (ipcRenderer.sendSync(SHARED_OBJECT_SNAPSHOT_CHANNEL) as
    | SharedObjectSnapshot
    | null
    | undefined) ?? {};

let systemThemeVariant = ipcRenderer.sendSync(GET_SYSTEM_THEME_VARIANT_CHANNEL);
const systemThemeVariantListeners = new Set<ThemeVariantListener>();
const workerMessageHandlers = new Map<string, Set<WorkerMessageHandler>>();
const workerIpcListeners = new Map<string, (...args: unknown[]) => void>();

function setSharedObjectValue(key: unknown, value: unknown): void {
  const propertyKey = String(key);
  if (value === undefined) {
    delete sharedObjectSnapshot[propertyKey];
    return;
  }
  sharedObjectSnapshot[propertyKey] = value;
}

ipcRenderer.on(SYSTEM_THEME_VARIANT_UPDATED_CHANNEL, (_event, nextVariant) => {
  systemThemeVariant = nextVariant;
  systemThemeVariantListeners.forEach((listener) => listener());
});

const electronBridge = {
  windowType: "electron",
  sendMessageFromView: async (message: {
    type?: string;
    key?: string;
    value?: unknown;
  }) => {
    if (message.type === "shared-object-set") {
      setSharedObjectValue(message.key, message.value);
    }
    await ipcRenderer.invoke(MESSAGE_FROM_VIEW_CHANNEL, message);
  },
  getPathForFile: (file: File) => webUtils.getPathForFile(file) || null,
  sendWorkerMessageFromView: async (workerId: string, message: unknown) => {
    await ipcRenderer.invoke(workerMessageFromViewChannel(workerId), message);
  },
  subscribeToWorkerMessages: (
    workerId: string,
    handler: WorkerMessageHandler,
  ) => {
    let handlers = workerMessageHandlers.get(workerId);
    if (!handlers) {
      handlers = new Set();
      workerMessageHandlers.set(workerId, handlers);
    }

    let ipcListener = workerIpcListeners.get(workerId);
    if (!ipcListener) {
      ipcListener = (_event, message) => {
        workerMessageHandlers.get(workerId)?.forEach((listener) => {
          listener(message);
        });
      };
      workerIpcListeners.set(workerId, ipcListener);
      ipcRenderer.on(workerMessageForViewChannel(workerId), ipcListener);
    }

    handlers.add(handler);
    return () => {
      const activeHandlers = workerMessageHandlers.get(workerId);
      if (!activeHandlers) return;
      activeHandlers.delete(handler);
      if (activeHandlers.size > 0) return;

      workerMessageHandlers.delete(workerId);
      const activeIpcListener = workerIpcListeners.get(workerId);
      if (activeIpcListener) {
        ipcRenderer.removeListener(
          workerMessageForViewChannel(workerId),
          activeIpcListener,
        );
      }
      workerIpcListeners.delete(workerId);
    };
  },
  showContextMenu: async (payload: unknown) =>
    ipcRenderer.invoke(SHOW_CONTEXT_MENU_CHANNEL, payload),
  showApplicationMenu: async (menuId: string, x: number, y: number) => {
    await ipcRenderer.invoke(SHOW_APPLICATION_MENU_CHANNEL, { menuId, x, y });
  },
  getFastModeRolloutMetrics: async (payload: unknown) =>
    ipcRenderer.invoke(GET_FAST_MODE_ROLLOUT_METRICS_CHANNEL, payload),
  getSharedObjectSnapshotValue: (key: string) => sharedObjectSnapshot[key],
  getSystemThemeVariant: () => systemThemeVariant,
  subscribeToSystemThemeVariant: (listener: ThemeVariantListener) => {
    systemThemeVariantListeners.add(listener);
    return () => {
      systemThemeVariantListeners.delete(listener);
    };
  },
  triggerSentryTestError: async () => {
    await ipcRenderer.invoke(TRIGGER_SENTRY_TEST_CHANNEL);
  },
  getSentryInitOptions: () => sentryInitOptions,
  getAppSessionId: () => sentryInitOptions.codexAppSessionId,
  getBuildFlavor: () => buildFlavor,
  isDeviceCheckSupported: () =>
    process.platform === "darwin" && process.arch === "arm64",
  isIntelMacBuild: () =>
    process.platform === "darwin" && process.arch === "x64",
  usesOwlAppShell: () => usesOwlAppShell,
};

ipcRenderer.on(MESSAGE_FOR_VIEW_CHANNEL, (_event, message) => {
  const maybeSharedObjectMessage = message as {
    type?: string;
    key?: string;
    value?: unknown;
  };
  if (maybeSharedObjectMessage.type === "shared-object-updated") {
    setSharedObjectValue(
      maybeSharedObjectMessage.key,
      maybeSharedObjectMessage.value,
    );
  }
  window.dispatchEvent(new MessageEvent("message", { data: message }));
});

ipcRenderer.on(MCP_SANDBOX_HOST_MESSAGE_CHANNEL, (event, message) => {
  const targetOrigin = window.location.origin;
  if (targetOrigin !== "null") {
    window.postMessage(message, targetOrigin, event.ports);
  }
});

contextBridge.exposeInMainWorld("codexWindowType", "electron");
contextBridge.exposeInMainWorld("electronBridge", electronBridge);

if (typeof window !== "undefined") {
  window.addEventListener("message", (event) => {
    if (event.source !== window || event.data?.type !== "connect-app-host") {
      return;
    }
    const { port } = event.data as { port: MessagePort };
    ipcRenderer.postMessage(CONNECT_APP_HOST_CHANNEL, undefined, [port]);
  });
}
