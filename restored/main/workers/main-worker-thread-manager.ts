// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Worker thread lifecycle and main-RPC bridge for Electron main.

import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { Worker } from "node:worker_threads";
import { app } from "electron";
import { createScopedStructuredLogger } from "../boundaries/shared-node-runtime.facade";
import {
  isWorkerMainRpcRequest,
  type WorkerMainRpcContext,
  type WorkerMainRpcHandler,
  type WorkerMainRpcRequest,
  type WorkerMainRpcResponse,
} from "./worker-main-rpc";
import type {
  MainWorkerThreadManagerOptions,
  SentryUser,
  WorkerId,
  WorkerInboundMessage,
  WorkerOutboundMessage,
  WorkerThreadLike,
} from "./main-worker-bus-types";

export class MainWorkerThreadManager {
  private readonly disposedWorkers = new WeakSet<WorkerThreadLike>();
  private readonly exitedWorkers = new WeakSet<WorkerThreadLike>();
  private readonly exitListeners = new Set<() => void>();
  private readonly listeners = new Set<
    (message: WorkerOutboundMessage) => void
  >();
  private latestAuthUser: SentryUser | null = null;
  private mainRpcHandler: WorkerMainRpcHandler | null = null;
  private worker: WorkerThreadLike | null = null;

  constructor(
    readonly id: WorkerId,
    private readonly options: MainWorkerThreadManagerOptions = {},
  ) {}

  dispose(): void {
    const worker = this.worker;
    if (worker == null) return;
    this.worker = null;
    this.disposedWorkers.add(worker);
    this.handleWorkerExit(worker);
    void worker.terminate();
  }

  addListener(listener: (message: WorkerOutboundMessage) => void): () => void {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  addExitListener(listener: () => void): () => void {
    this.exitListeners.add(listener);
    return () => {
      this.exitListeners.delete(listener);
    };
  }

  setMainRpcHandler(handler: WorkerMainRpcHandler): void {
    this.mainRpcHandler = handler;
  }

  postMessage(message: WorkerInboundMessage): void {
    this.ensureWorker().postMessage(message);
  }

  start(): void {
    this.ensureWorker();
  }

  setSentryUser(
    authMethod: string | null,
    userId?: string | null,
    email?: string | null,
    accountId?: string | null,
  ): void {
    this.latestAuthUser = { accountId, authMethod, email, userId };
    this.worker?.postMessage({
      type: "worker-sentry-user-update",
      authMethod,
      userId,
      email,
      accountId,
    });
  }

  emitAppEvent(event: unknown): void {
    this.worker?.postMessage({ type: "worker-app-event", event });
  }

  private ensureWorker(): WorkerThreadLike {
    if (this.worker != null) return this.worker;
    const logger = createScopedStructuredLogger("worker-manager");
    const workerScriptPath =
      this.options.workerScriptPath ??
      join(dirname(fileURLToPath(import.meta.url)), "worker.js");
    const appRoot =
      this.options.appPath ??
      ((this.options.isPackaged ?? app.isPackaged)
        ? app.getAppPath()
        : process.cwd());
    const workerData = {
      workerId: this.id,
      sentryInitOptions: this.options.sentryInitOptions ?? {},
      maxLogLevel: this.options.maxLogLevel,
      sentryRewriteFramesRoot: appRoot,
      spawnInsideWsl: this.options.spawnInsideWsl ?? false,
    };
    const worker =
      this.options.workerThreadFactory?.(workerScriptPath, {
        name: this.id,
        workerData,
      }) ??
      (new Worker(workerScriptPath, {
        name: this.id,
        workerData,
      }) as WorkerThreadLike);

    worker.on("message", (message: unknown) => {
      if (isWorkerMainRpcRequest(message)) {
        void this.handleMainRpcRequest(worker, message);
        return;
      }
      this.listeners.forEach((listener) => {
        listener(message as WorkerOutboundMessage);
      });
    });
    worker.on("error", (error: Error) => {
      logger.warning("Worker error", { safe: {}, sensitive: { error } });
    });
    worker.on("exit", (code: number) => {
      if (this.worker === worker) this.worker = null;
      this.handleWorkerExit(worker);
      if (code !== 0 && !this.disposedWorkers.has(worker)) {
        logger.warning("Worker exited", {
          safe: { code },
          sensitive: {},
        });
      }
    });
    worker.unref();
    this.worker = worker;
    if (this.latestAuthUser != null) {
      worker.postMessage({
        type: "worker-sentry-user-update",
        authMethod: this.latestAuthUser.authMethod,
        userId: this.latestAuthUser.userId,
        email: this.latestAuthUser.email,
        accountId: this.latestAuthUser.accountId,
      });
    }
    return worker;
  }

  private async handleMainRpcRequest(
    worker: WorkerThreadLike,
    request: WorkerMainRpcRequest,
  ): Promise<void> {
    const logger = createScopedStructuredLogger("worker-manager");
    if (request.workerId !== this.id) {
      logger.warning("Received main RPC request for wrong worker", {
        safe: {
          expectedWorkerId: this.id,
          workerId: request.workerId,
          method: request.method,
        },
      });
      return;
    }
    const handler = this.mainRpcHandler;
    if (handler == null) {
      worker.postMessage({
        type: "worker-main-rpc-response",
        workerId: this.id,
        requestId: request.requestId,
        method: request.method,
        result: {
          type: "error",
          error: {
            message: `No main RPC handler configured for worker '${this.id}'`,
          },
        },
      });
      return;
    }
    try {
      const value = await handler(
        request,
        this.createMainRpcHandlerContext(worker),
      );
      worker.postMessage({
        type: "worker-main-rpc-response",
        workerId: this.id,
        requestId: request.requestId,
        method: request.method,
        result: { type: "ok", value },
      });
    } catch (error) {
      worker.postMessage(
        createWorkerMainRpcErrorResponse(this.id, request, error),
      );
    }
  }

  private createMainRpcHandlerContext(
    worker: WorkerThreadLike,
  ): WorkerMainRpcContext {
    return {
      emitEvent: (event) => {
        worker.postMessage({
          type: "worker-main-rpc-event",
          workerId: this.id,
          method: event.method,
          params: event.params,
        });
      },
    };
  }

  private handleWorkerExit(worker: WorkerThreadLike): void {
    if (this.exitedWorkers.has(worker)) return;
    this.exitedWorkers.add(worker);
    this.exitListeners.forEach((listener) => listener());
    const handler = this.mainRpcHandler;
    if (handler == null) return;
    handler(
      {
        type: "worker-main-rpc-request",
        workerId: this.id,
        requestId: "worker-exit",
        method: "worker-exit",
        params: {},
      },
      this.createMainRpcHandlerContext(worker),
    ).catch((error) => {
      createScopedStructuredLogger("worker-manager").warning(
        "Worker exit cleanup failed",
        {
          safe: {},
          sensitive: { error },
        },
      );
    });
  }
}

function createWorkerMainRpcErrorResponse(
  workerId: string,
  request: WorkerMainRpcRequest,
  error: unknown,
): WorkerMainRpcResponse {
  const code =
    typeof error === "object" &&
    error != null &&
    "code" in error &&
    typeof error.code === "string"
      ? error.code
      : undefined;
  return {
    type: "worker-main-rpc-response",
    workerId,
    requestId: request.requestId,
    method: request.method,
    result: {
      type: "error",
      error: {
        ...(code == null ? {} : { code }),
        message:
          error instanceof Error
            ? error.message
            : `Failed to handle main RPC request: ${String(error)}`,
      },
    },
  };
}
