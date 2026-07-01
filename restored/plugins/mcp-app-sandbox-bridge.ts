// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// MessageChannel-based RPC bridge between the host and an MCP app sandbox
// webview: handshakes the init message, wraps host API handlers as callable
// ports, and exposes the sandbox-side API (calls + async generators) to the host.

import {
  SANDBOX_PORT_NAMES,
  buildSandboxFrameSrc,
  isNonEmptyStringArray,
} from "../boundaries/onboarding-commons-externals.facade";

const RPC_CALL = "CALL";
const RPC_GENERATOR_GENERATE = "GENERATOR_GENERATE";
const RPC_REJECT = "REJECT";
const RPC_RESOLVE = "RESOLVE";
const INIT_TIMEOUT_MS = 1e4;
const DEFAULT_CALL_TIMEOUT_MS = 3e4;

function createAbortError(): Error {
  const error = new Error("MCP sandbox RPC aborted.");
  error.name = "AbortError";
  return error;
}

function createTimeoutError(): Error {
  const error = new Error("MCP sandbox RPC timed out.");
  error.name = "TimeoutError";
  return error;
}

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && !!value;
}

function isMessagePortLike(value: unknown): value is MessagePort {
  return isObject(value)
    ? typeof (value as MessagePort).postMessage === "function" &&
        typeof (value as MessagePort).start === "function"
    : false;
}

function collectSandboxPorts(
  portNames: string[],
  ports: readonly MessagePort[],
): Record<string, MessagePort> | null {
  const collected: Record<string, MessagePort> = {};
  for (const name of SANDBOX_PORT_NAMES as string[]) {
    const port = ports[portNames.indexOf(name)];
    if (!isMessagePortLike(port)) return null;
    collected[name] = port;
  }
  return collected;
}

function pickErrorFields(value: Record<string, unknown>): {
  code?: number;
  name?: string;
} {
  return {
    ...("code" in value && typeof value.code === "number"
      ? { code: value.code }
      : {}),
    ...("name" in value && typeof value.name === "string"
      ? { name: value.name }
      : {}),
  };
}

function serializeHostError(
  error: unknown,
): { message: string } & Record<string, unknown> {
  if (error instanceof Error) {
    return {
      ...pickErrorFields(error as unknown as Record<string, unknown>),
      message: error.message || "MCP sandbox host call failed.",
      name: error.name,
    };
  }
  if (
    typeof error === "object" &&
    error &&
    "message" in error &&
    typeof (error as { message: unknown }).message === "string" &&
    (error as { message: string }).message.length > 0
  ) {
    return {
      ...pickErrorFields(error as Record<string, unknown>),
      message: (error as { message: string }).message,
    };
  }
  return { message: "MCP sandbox host call failed." };
}

function createHostRpcEndpoint(
  handler: (...args: unknown[]) => unknown | Promise<unknown>,
): MessagePort {
  const { port1, port2 } = new MessageChannel();
  port1.onmessage = async (event: MessageEvent) => {
    const [tag, ...args] = event.data as [string, ...unknown[]];
    const [replyPort] = event.ports;
    if (tag !== RPC_CALL || replyPort == null) return;
    try {
      replyPort.postMessage([RPC_RESOLVE, await handler(...args)]);
    } catch (error) {
      replyPort.postMessage([RPC_REJECT, serializeHostError(error)]);
    } finally {
      replyPort.close();
    }
  };
  port1.start();
  return port2;
}

export interface SandboxCallerOptions {
  signal?: AbortSignal;
  timeoutMs?: number | null;
}

function createSandboxRpcCaller(
  port: MessagePort,
  options: SandboxCallerOptions = {},
): (payload: unknown) => Promise<unknown> {
  port.start();
  return (payload: unknown) =>
    new Promise((resolve, reject) => {
      const signal = options.signal;
      const timeoutMs =
        options.timeoutMs === undefined
          ? DEFAULT_CALL_TIMEOUT_MS
          : options.timeoutMs;
      if (signal?.aborted) {
        reject(createAbortError());
        return;
      }
      const { port1, port2 } = new MessageChannel();
      let timer: ReturnType<typeof setTimeout> | null = null;
      let settled = false;
      const cleanup = () => {
        if (timer != null) clearTimeout(timer);
        signal?.removeEventListener("abort", onAbort);
        port1.onmessage = null;
        port1.close();
      };
      const settle = (finish: (value: unknown) => void, value: unknown) => {
        if (settled) return;
        settled = true;
        cleanup();
        finish(value);
      };
      const onAbort = () => {
        settle(reject, createAbortError());
      };
      port1.onmessage = (event: MessageEvent) => {
        const data = event.data as [string, unknown];
        data[0] === RPC_RESOLVE
          ? settle(resolve, data[1])
          : settle(reject, data[1]);
      };
      signal?.addEventListener("abort", onAbort, { once: true });
      if (timeoutMs != null) {
        timer = setTimeout(() => {
          settle(reject, createTimeoutError());
        }, timeoutMs);
      }
      try {
        port.postMessage([RPC_CALL, payload], [port2]);
      } catch (error) {
        settle(reject, error);
      }
    });
}

function createSandboxGeneratorCaller(
  port: MessagePort,
  signal: AbortSignal,
): (input: unknown) => AsyncGenerator<unknown, unknown, unknown> {
  port.start();
  return async function* (input: unknown) {
    const dispose = new MessageChannel();
    const next = new MessageChannel();
    const ret = new MessageChannel();
    const err = new MessageChannel();
    const callDispose = createSandboxRpcCaller(dispose.port1);
    const callNext = createSandboxRpcCaller(next.port1, {
      signal,
      timeoutMs: null,
    });
    const callReturn = createSandboxRpcCaller(ret.port1);
    const callThrow = createSandboxRpcCaller(err.port1);
    port.postMessage(
      [
        RPC_GENERATOR_GENERATE,
        {
          asyncDispose: dispose.port2,
          next: next.port2,
          return: ret.port2,
          throw: err.port2,
        },
        input,
      ],
      [dispose.port2, next.port2, ret.port2, err.port2],
    );
    try {
      let step = (await callNext(undefined)) as {
        done: boolean;
        value: unknown;
      };
      while (!step.done) {
        yield step.value;
        step = (await callNext(undefined)) as {
          done: boolean;
          value: unknown;
        };
      }
      return step.value;
    } catch (error) {
      if (signal.aborted) return;
      throw (await callThrow(error).catch(() => {}), error);
    } finally {
      if (!signal.aborted) {
        await Promise.allSettled([
          callDispose(undefined),
          callReturn(undefined),
        ]);
      }
      [dispose.port1, next.port1, ret.port1, err.port1].forEach(
        (channelPort) => {
          channelPort.close();
        },
      );
    }
  };
}

function wrapHostHandlersForSandbox(
  handlers: Record<string, (...args: unknown[]) => unknown>,
): Record<string, MessagePort> {
  return {
    callMcp: createHostRpcEndpoint(handlers.callMcp),
    callTool: createHostRpcEndpoint(handlers.callTool),
    notifyBackgroundColor: createHostRpcEndpoint(
      handlers.notifyBackgroundColor,
    ),
    notifyEnvironmentError: createHostRpcEndpoint(
      handlers.notifyEnvironmentError,
    ),
    notifyIntrinsicHeight: createHostRpcEndpoint(
      handlers.notifyIntrinsicHeight,
    ),
    notifyIntrinsicWidth: createHostRpcEndpoint(handlers.notifyIntrinsicWidth),
    notifyNavigation: createHostRpcEndpoint(handlers.notifyNavigation),
    notifySecurityPolicyViolation: createHostRpcEndpoint(
      handlers.notifySecurityPolicyViolation,
    ),
    openExternal: createHostRpcEndpoint(handlers.openExternal),
    requestDisplayMode: createHostRpcEndpoint(handlers.requestDisplayMode),
    sendFollowUpMessage: createHostRpcEndpoint(handlers.sendFollowUpMessage),
    sendInstrument: createHostRpcEndpoint(handlers.sendInstrument),
    updateWidgetState: createHostRpcEndpoint(handlers.updateWidgetState),
  };
}

function buildSandboxApi(
  ports: Record<string, MessagePort>,
  signal: AbortSignal,
) {
  return {
    navigate: createSandboxRpcCaller(ports.navigate),
    notifyMcpAppsHostContext: createSandboxRpcCaller(
      ports.notifyMcpAppsHostContext,
    ),
    notifyMcpAppsToolCancelled: createSandboxRpcCaller(
      ports.notifyMcpAppsToolCancelled,
    ),
    notifyMcpAppsToolInput: createSandboxRpcCaller(
      ports.notifyMcpAppsToolInput,
    ),
    notifyMcpAppsToolResult: createSandboxRpcCaller(
      ports.notifyMcpAppsToolResult,
    ),
    requestMcpAppsResourceTeardown: createSandboxRpcCaller(
      ports.requestMcpAppsResourceTeardown,
    ),
    runWidgetCode: createSandboxGeneratorCaller(ports.runWidgetCode, signal),
    setAdditionalGlobals: createSandboxRpcCaller(ports.setAdditionalGlobals),
    setSafeArea: createSandboxRpcCaller(ports.setSafeArea),
    setTheme: createSandboxRpcCaller(ports.setTheme),
    setWidgetData: createSandboxRpcCaller(ports.setWidgetData),
    setWidgetView: createSandboxRpcCaller(ports.setWidgetView),
  };
}

export type McpAppSandboxApi = ReturnType<typeof buildSandboxApi>;

export interface ConnectMcpAppSandboxParams {
  hostApiHandlers: Record<string, (...args: unknown[]) => unknown>;
  origin: string;
  sandboxId: unknown;
  signal: AbortSignal;
  sourceUrl: string;
  webview: Element;
}

export async function connectMcpAppSandbox({
  hostApiHandlers,
  origin,
  sandboxId,
  signal,
  sourceUrl,
  webview,
}: ConnectMcpAppSandboxParams): Promise<McpAppSandboxApi> {
  const initId = crypto.randomUUID();
  const { ports, replyPort } = await new Promise<{
    ports: Record<string, MessagePort>;
    replyPort: MessagePort;
  }>((resolve, reject) => {
    if (signal.aborted) {
      reject(createAbortError());
      return;
    }
    let timer: ReturnType<typeof setTimeout> | undefined;
    const cleanup = () => {
      window.removeEventListener("message", onMessage);
      signal.removeEventListener("abort", onAbort);
      if (timer != null) clearTimeout(timer);
    };
    const onMessage = (event: MessageEvent) => {
      const data = event.data;
      if (
        data?.type !== "init" ||
        data.origin !== origin ||
        data.sandboxId !== sandboxId ||
        data.initId !== initId ||
        !Array.isArray(data.portNames)
      )
        return;
      const portNames: string[] = data.portNames;
      if (
        !isNonEmptyStringArray(portNames) ||
        event.ports.length !== portNames.length + 1
      )
        return;
      const ports = collectSandboxPorts(portNames, event.ports);
      if (ports == null) return;
      const replyPort = event.ports[portNames.length];
      if (replyPort != null) {
        cleanup();
        resolve({ ports, replyPort });
      }
    };
    const onAbort = () => {
      cleanup();
      reject(createAbortError());
    };
    window.addEventListener("message", onMessage);
    signal.addEventListener("abort", onAbort, { once: true });
    timer = setTimeout(() => {
      cleanup();
      reject(createTimeoutError());
    }, INIT_TIMEOUT_MS);
    const frameSrc = buildSandboxFrameSrc({ initId, sourceUrl });
    if (webview.getAttribute("src") !== frameSrc)
      webview.setAttribute("src", frameSrc);
  });

  const hostApi = wrapHostHandlersForSandbox(hostApiHandlers);
  replyPort.postMessage(hostApi, Object.values(hostApi));
  replyPort.start();
  return buildSandboxApi(ports, signal);
}
