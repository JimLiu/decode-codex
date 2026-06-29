// Restored from ref/.vite/build/sandbox-preload.js
// sandbox-preload chunk restored from the Codex Electron main bundle.
// MCP app sandbox preload handshake and origin validation.

import { ipcRenderer } from "electron";

const SANDBOX_HOST = "web-sandbox.oaiusercontent.com";
const SANDBOX_HOST_SUFFIX = `.${SANDBOX_HOST}`;
const INIT_MESSAGE_TYPE = "init";
const MCP_SANDBOX_GUEST_MESSAGE_CHANNEL =
  "codex_desktop:mcp-app-sandbox-guest-message";

const SANDBOX_PORT_NAMES = [
  "navigate",
  "notifyMcpAppsHostContext",
  "notifyMcpAppsToolCancelled",
  "notifyMcpAppsToolInput",
  "notifyMcpAppsToolResult",
  "requestMcpAppsResourceTeardown",
  "runWidgetCode",
  "setAdditionalGlobals",
  "setSafeArea",
  "setTheme",
  "setWidgetData",
  "setWidgetView",
] as const;

type SandboxPortName = (typeof SANDBOX_PORT_NAMES)[number];
type SandboxPortMap = Record<SandboxPortName, MessagePort>;

function isSandboxHostname(hostname: string): boolean {
  return hostname === SANDBOX_HOST || hostname.endsWith(SANDBOX_HOST_SUFFIX);
}

function isInitId(value: string): boolean {
  return /^[A-Za-z0-9_-]{1,128}$/.test(value);
}

function parseUrl(value: string | null | undefined): URL | null {
  if (value == null) return null;
  try {
    return new URL(value);
  } catch {
    return null;
  }
}

function parseTrustedSandboxUrl(value: string | null | undefined): URL | null {
  const url = parseUrl(value);
  if (
    url == null ||
    url.protocol !== "https:" ||
    url.port !== "" ||
    url.username !== "" ||
    url.password !== "" ||
    !isSandboxHostname(url.hostname)
  ) {
    return null;
  }
  return url;
}

function hasSkybridgeSearchParams(url: URL): boolean {
  const requiredParams = [
    "app",
    "locale",
    "deviceType",
    "unsafeSkipTargetOriginCheck",
  ];
  const actualParams = Array.from(url.searchParams.keys());
  return (
    url.pathname === "/" &&
    actualParams.length === requiredParams.length &&
    requiredParams.every((param) => url.searchParams.has(param)) &&
    url.searchParams.get("app") === "skybridge" &&
    url.searchParams.get("locale") !== "" &&
    url.searchParams.get("deviceType") === "desktop" &&
    url.searchParams.get("unsafeSkipTargetOriginCheck") === "true"
  );
}

function getTrustedSandboxOrigin(
  value: string,
  { requireSkybridge = false } = {},
): string | null {
  const url = parseTrustedSandboxUrl(value);
  if (url == null || (requireSkybridge && !hasSkybridgeSearchParams(url))) {
    return null;
  }
  return url.origin;
}

function getInitId(value: string): string | null {
  const url = parseUrl(value);
  if (url == null || url.hash.length === 0) return null;

  const initId = new URLSearchParams(url.hash.slice(1)).get("initId");
  return initId != null && isInitId(initId) ? initId : null;
}

function isCurrentWindowTrustedSkybridge(): boolean {
  return (
    getTrustedSandboxOrigin(window.location.href, {
      requireSkybridge: true,
    }) === window.location.origin
  );
}

function isMessagePortLike(value: unknown): value is MessagePort {
  return (
    typeof value === "object" &&
    value !== null &&
    typeof (value as MessagePort).postMessage === "function" &&
    typeof (value as MessagePort).start === "function"
  );
}

let didForwardInit = false;

window.addEventListener("message", (event) => {
  if (
    event.source !== window ||
    !isCurrentWindowTrustedSkybridge() ||
    event.data == null ||
    typeof event.data !== "object" ||
    event.data.type !== INIT_MESSAGE_TYPE
  ) {
    return;
  }

  const { ports, replyPort } = event.data as {
    ports?: Partial<SandboxPortMap>;
    replyPort?: MessagePort;
  };
  if (
    typeof ports !== "object" ||
    ports == null ||
    !isMessagePortLike(replyPort) ||
    didForwardInit
  ) {
    return;
  }

  const initId = getInitId(window.location.href);
  if (initId == null) return;

  const portNames = [...SANDBOX_PORT_NAMES];
  const sandboxPorts = portNames.map((portName) => ports[portName]);
  if (sandboxPorts.some((port) => !isMessagePortLike(port))) return;

  didForwardInit = true;
  ipcRenderer.postMessage(
    MCP_SANDBOX_GUEST_MESSAGE_CHANNEL,
    {
      origin: window.location.origin,
      initId,
      portNames,
      type: INIT_MESSAGE_TYPE,
    },
    [...(sandboxPorts as MessagePort[]), replyPort],
  );
});
