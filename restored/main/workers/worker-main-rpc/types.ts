// Restored from ref/.vite/build/main-r5HnecX_.js
// Shared worker main-RPC request, response, and host boundary contracts.

export const WORKER_MAIN_RPC_METHODS = [
  "worktree-cleanup-inputs",
  "computer-use-invalidate-service-pid",
  "computer-use-service-pid",
  "codex-home",
  "read-shortcut-link",
  "platform-family",
  "platform-os",
  "process-start",
  "process-write",
  "process-resize",
  "process-terminate",
  "fs-read-file",
  "fs-write-file",
  "fs-create-directory",
  "fs-get-metadata",
  "fs-read-directory",
  "fs-remove",
  "fs-copy",
  "fs-watch",
  "fs-unwatch",
  "worker-exit",
] as const;

export type WorkerMainRpcMethod = (typeof WORKER_MAIN_RPC_METHODS)[number];

export const WORKER_MAIN_RPC_EVENT_METHODS = [
  "process-output-delta",
  "fs-watch-changed",
  "fs-watch-closed",
] as const;

export type WorkerMainRpcEventMethod =
  (typeof WORKER_MAIN_RPC_EVENT_METHODS)[number];

export type RpcResult =
  | { type: "ok"; value?: unknown }
  | { type: "error"; error: { message: string; code?: string } };

export type WorkerMainRpcRequest = {
  type: "worker-main-rpc-request";
  workerId: string;
  requestId: string;
  method: WorkerMainRpcMethod;
  params: Record<string, unknown>;
};

export type WorkerMainRpcResponse = {
  type: "worker-main-rpc-response";
  workerId: string;
  requestId: string;
  method: WorkerMainRpcMethod;
  result: RpcResult;
};

export type WorkerMainRpcContext = {
  emitEvent(event: {
    method: WorkerMainRpcEventMethod;
    params: Record<string, unknown>;
  }): void;
};

export type WorkerMainRpcHandler = (
  request: WorkerMainRpcRequest,
  context: WorkerMainRpcContext,
) => Promise<unknown> | unknown;

export type ShortcutLinkBoundary = {
  icon?: string | null;
  target?: string | null;
};

export type ShortcutLinkReaderBoundary = {
  readShortcutLink(path: string): ShortcutLinkBoundary;
};

export type ComputerUseServiceBoundary = {
  ensureManagedComputerUseService(): Promise<unknown> | unknown;
  invalidateManagedComputerUseService(
    processIdentifier: unknown,
  ): Promise<void> | void;
};

export type ExecutionHostProcessBoundary = {
  stdin: WritableStream<unknown>;
  stdout: ReadableStream<unknown>;
  stderr: ReadableStream<unknown>;
  kill(): void;
  resize(size: unknown): Promise<void> | void;
  wait(): Promise<unknown>;
};

export type ExecutionHostWatchBoundary = {
  path: string;
  closed: Promise<{ reason: string; error?: unknown }>;
  dispose(): Promise<void> | void;
};

export type ExecutionHostClientBoundary = {
  codexHome(): Promise<unknown> | unknown;
  copy(
    sourcePath: string,
    destinationPath: string,
    options?: { recursive?: unknown },
  ): Promise<void> | void;
  createDirectory(
    path: string,
    options?: { recursive?: unknown },
  ): Promise<void> | void;
  platformFamily(): Promise<unknown> | unknown;
  platformOs(): Promise<unknown> | unknown;
  readDirectory(path: string): Promise<Array<unknown>> | Array<unknown>;
  readFile(
    path: string,
  ): Promise<ReadableStream<unknown>> | ReadableStream<unknown>;
  remove(path: string, options?: Record<string, unknown>): Promise<void> | void;
  spawn(
    options: Record<string, unknown>,
  ): Promise<ExecutionHostProcessBoundary>;
  startFileWatch(options: {
    path: string;
    recursive?: unknown;
    watchId: string;
    onChange(event: { changedPaths: unknown }): void;
  }): Promise<ExecutionHostWatchBoundary>;
  stat(
    path: string,
    options?: { bypassCache?: unknown; followSymlinks?: unknown },
  ): Promise<{
    birthtimeMs: number;
    ctimeMs: number;
    ino: number;
    isDirectory(): boolean;
    isFile(): boolean;
    isSymbolicLink(): boolean;
    mtimeMs: number;
    size: number;
  }>;
  writeFile(
    path: string,
    contents: unknown,
    options?: Record<string, unknown>,
  ): Promise<void> | void;
};

export type ExecutionHostMainRpcBoundary = {
  getAppServerClientForHost(params: {
    hostId?: unknown;
  }): ExecutionHostClientBoundary | null;
  getWorktreeCleanupInputsForHost(
    params: Record<string, unknown>,
  ): Promise<unknown> | unknown;
};

const WORKER_MAIN_RPC_METHOD_SET = new Set<string>(WORKER_MAIN_RPC_METHODS);

export function isWorkerMainRpcMethod(
  method: unknown,
): method is WorkerMainRpcMethod {
  return typeof method === "string" && WORKER_MAIN_RPC_METHOD_SET.has(method);
}

export function isWorkerMainRpcRequest(
  value: unknown,
): value is WorkerMainRpcRequest {
  return (
    isRecord(value) &&
    value.type === "worker-main-rpc-request" &&
    typeof value.workerId === "string" &&
    typeof value.requestId === "string" &&
    isWorkerMainRpcMethod(value.method) &&
    isRecord(value.params)
  );
}

export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value != null;
}
