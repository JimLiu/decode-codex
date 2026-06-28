// Restored from ref/.vite/build/main--VWTbRdF.js
// Shared protocol types for the main-process worker bus.

import type { IpcMainInvokeEvent } from "electron";
import type {
  RpcResult,
  WorkerMainRpcRequest,
  WorkerMainRpcResponse,
} from "./worker-main-rpc";

export const DEFAULT_WORKER_BUS_IDS = [
  "git",
  "open-in",
  "computer-use-capture",
] as const;

export type WorkerId = (typeof DEFAULT_WORKER_BUS_IDS)[number] | string;
export type WorkerRequest = {
  id: string;
  method: string;
  params?: unknown;
};
export type WorkerRequestMessage = {
  type: "worker-request";
  workerId: string;
  request: WorkerRequest;
};
export type WorkerRequestCancelMessage = {
  type: "worker-request-cancel";
  workerId: string;
  id: string;
};
export type WorkerSentryUserMessage = {
  type: "worker-sentry-user-update";
  authMethod: string | null;
  userId?: string | null;
  email?: string | null;
  accountId?: string | null;
};
export type WorkerAppEventMessage = {
  type: "worker-app-event";
  event: unknown;
};
export type WorkerInboundMessage =
  | WorkerRequestMessage
  | WorkerRequestCancelMessage
  | WorkerSentryUserMessage
  | WorkerAppEventMessage
  | WorkerMainRpcResponse
  | (Record<string, unknown> & {
      type?: string;
      workerId?: string;
    });
export type WorkerResponseMessage = {
  type: "worker-response";
  workerId: string;
  response: {
    id: string;
    method: string;
    result: RpcResult;
  };
};
export type WorkerEventMessage = {
  type: "worker-event";
  workerId: string;
  event: Record<string, unknown>;
};
export type WorkerOutboundMessage =
  | WorkerResponseMessage
  | WorkerEventMessage
  | WorkerMainRpcRequest
  | (Record<string, unknown> & {
      type?: string;
      workerId?: string;
      event?: Record<string, unknown>;
    });
export type WebContentsLike = {
  isDestroyed(): boolean;
  once(event: "destroyed", listener: () => void): unknown;
  send(channel: string, message: WorkerOutboundMessage): void;
};
export type IpcMainLike = {
  handle(
    channel: string,
    listener: (
      event: IpcMainInvokeEvent,
      message: WorkerInboundMessage,
    ) => void,
  ): void;
};
export type DisposableLike = { dispose(): void };
export type DisposableSink = {
  add(disposable: (() => void) | DisposableLike): void;
};
export type MainWorkerThreadData = {
  workerId: string;
  sentryInitOptions: Record<string, unknown>;
  maxLogLevel?: string;
  sentryRewriteFramesRoot: string;
  spawnInsideWsl: boolean;
};
export type WorkerThreadFactoryOptions = {
  name: string;
  workerData: MainWorkerThreadData;
};
export type WorkerThreadLike = {
  on(event: "message", listener: (message: unknown) => void): WorkerThreadLike;
  on(event: "error", listener: (error: Error) => void): WorkerThreadLike;
  on(event: "exit", listener: (code: number) => void): WorkerThreadLike;
  postMessage(message: WorkerInboundMessage | WorkerMainRpcResponse): void;
  terminate(): Promise<number> | void;
  unref(): void;
};
export type WorkerThreadFactory = (
  path: string,
  options: WorkerThreadFactoryOptions,
) => WorkerThreadLike;
export type SentryUser = {
  authMethod: string | null;
  userId?: string | null;
  email?: string | null;
  accountId?: string | null;
};
export type PendingHostRequest = {
  method: string;
  resolve(value: unknown): void;
  reject(error: unknown): void;
};
export type WorkerRequestFromHost = {
  method: string;
  params?: unknown;
  signal?: AbortSignal;
};
export type MainWorkerThreadManagerOptions = {
  appPath?: string;
  isPackaged?: boolean;
  maxLogLevel?: string;
  sentryInitOptions?: Record<string, unknown>;
  spawnInsideWsl?: boolean;
  workerScriptPath?: string;
  workerThreadFactory?: WorkerThreadFactory;
};
export type MainWorkerBusControllerOptions = {
  disposables: DisposableSink;
  ipcMain?: IpcMainLike;
  isTrustedIpcEvent(event: IpcMainInvokeEvent): boolean;
  maxLogLevel?: string;
  sentryInitOptions?: Record<string, unknown>;
  spawnInsideWsl?: boolean;
  workerBusIds?: readonly string[];
  workerScriptPath?: string;
  workerThreadFactory?: WorkerThreadFactory;
};
export type ComputerUseCaptureEvent = Record<string, unknown> & {
  type: string;
  requestId?: string;
  update?: { type?: string; failureReason?: string };
};

export function workerRequestChannel(workerId: string): string {
  return `codex_desktop:worker:${workerId}:from-view`;
}

export function workerResponseChannel(workerId: string): string {
  return `codex_desktop:worker:${workerId}:for-view`;
}
