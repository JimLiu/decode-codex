// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Renderer-to-worker bus bridge.

import { randomUUID } from "node:crypto";
import { createScopedStructuredLogger } from "../boundaries/shared-node-runtime.facade";
import type { WorkerMainRpcHandler } from "./worker-main-rpc";
import {
  workerResponseChannel,
  type MainWorkerThreadManagerOptions,
  type PendingHostRequest,
  type WebContentsLike,
  type WorkerId,
  type WorkerInboundMessage,
  type WorkerOutboundMessage,
  type WorkerRequest,
  type WorkerRequestFromHost,
  type WorkerResponseMessage,
} from "./main-worker-bus-types";
import { MainWorkerThreadManager } from "./main-worker-thread-manager";

export class WorkerBusMessageHandler {
  private readonly hostListeners = new Set<
    (message: WorkerOutboundMessage) => void
  >();
  private readonly knownWebContents = new Set<WebContentsLike>();
  private readonly logger = createScopedStructuredLogger(
    "worker-bus-message-handler",
  );
  private readonly onWorkerRequestSent: (() => void) | null;
  private readonly pending = new Map<string, WebContentsLike>();
  private readonly pendingRequestFromHost = new Map<
    string,
    PendingHostRequest
  >();
  private readonly workerManager: MainWorkerThreadManager;
  private readonly workerId: WorkerId;

  constructor(
    workerId: WorkerId,
    options: MainWorkerThreadManagerOptions & {
      onWorkerRequestSent?: (() => void) | null;
    } = {},
  ) {
    this.workerId = workerId;
    this.onWorkerRequestSent = options.onWorkerRequestSent ?? null;
    this.workerManager = new MainWorkerThreadManager(workerId, options);
    this.workerManager.addListener((message) => {
      this.handleWorkerMessage(message);
    });
  }

  async handleMessage(
    webContents: WebContentsLike,
    message: WorkerInboundMessage,
  ): Promise<void> {
    this.trackLifecycle(webContents);
    if (message.workerId !== this.workerId) {
      this.logger.warning("Received worker message for wrong worker", {
        safe: {
          expectedWorkerId: this.workerId,
          workerId: message.workerId,
          type: message.type,
        },
      });
      return;
    }
    switch (message.type) {
      case "worker-request":
        this.pending.set(message.request.id, webContents);
        this.onWorkerRequestSent?.();
        this.workerManager.postMessage(message);
        return;
      case "worker-request-cancel":
        this.pending.delete(message.id);
        break;
    }
    this.workerManager.postMessage(message);
  }

  dispose(): void {
    const error = Error(`Worker bus disposed for '${this.workerId}'`);
    for (const pending of this.pendingRequestFromHost.values()) {
      pending.reject(error);
    }
    this.pendingRequestFromHost.clear();
    this.workerManager.dispose();
  }

  requestFromHost(request: WorkerRequestFromHost): Promise<unknown> {
    if (request.signal?.aborted) {
      return Promise.reject(new DOMException("Aborted", "AbortError"));
    }
    const requestId = `main-${randomUUID()}`;
    const workerRequest: WorkerRequest = {
      id: requestId,
      method: request.method,
      params: request.params,
    };
    const promise = new Promise((resolve, reject) => {
      this.pendingRequestFromHost.set(requestId, {
        method: request.method,
        resolve,
        reject,
      });
    });
    try {
      this.onWorkerRequestSent?.();
      this.workerManager.postMessage({
        type: "worker-request",
        workerId: this.workerId,
        request: workerRequest,
      });
    } catch (error) {
      this.pendingRequestFromHost.delete(requestId);
      return Promise.reject(
        error instanceof Error
          ? error
          : Error(`Failed to post worker request: ${String(error)}`),
      );
    }

    const signal = request.signal;
    if (signal != null) {
      const abort = (): void => {
        signal.removeEventListener("abort", abort);
        const pending = this.pendingRequestFromHost.get(requestId);
        if (pending == null) return;
        this.pendingRequestFromHost.delete(requestId);
        this.workerManager.postMessage({
          type: "worker-request-cancel",
          workerId: this.workerId,
          id: requestId,
        });
        pending.reject(new DOMException("Aborted", "AbortError"));
      };
      signal.addEventListener("abort", abort);
      const removeAbortListener = (): void => {
        signal.removeEventListener("abort", abort);
      };
      promise.then(removeAbortListener, removeAbortListener);
    }
    return promise;
  }

  subscribeFromHost(
    listener: (message: WorkerOutboundMessage) => void,
  ): () => void {
    this.hostListeners.add(listener);
    return () => {
      this.hostListeners.delete(listener);
    };
  }

  subscribeWorkerExit(listener: () => void): () => void {
    return this.workerManager.addExitListener(listener);
  }

  setSentryUser(
    authMethod: string | null,
    userId?: string | null,
    email?: string | null,
    accountId?: string | null,
  ): void {
    this.workerManager.setSentryUser(authMethod, userId, email, accountId);
  }

  emitAppEvent(event: unknown): void {
    this.workerManager.emitAppEvent(event);
  }

  setMainRpcHandler(handler: WorkerMainRpcHandler): void {
    this.workerManager.setMainRpcHandler(handler);
  }

  startWorker(): void {
    this.workerManager.start();
  }

  private trackLifecycle(webContents: WebContentsLike): void {
    if (this.knownWebContents.has(webContents)) return;
    this.knownWebContents.add(webContents);
    webContents.once("destroyed", () => {
      this.knownWebContents.delete(webContents);
      this.cleanupOrigin(webContents);
    });
  }

  private cleanupOrigin(webContents: WebContentsLike): void {
    for (const [requestId, requestWebContents] of this.pending.entries()) {
      if (requestWebContents !== webContents) continue;
      this.pending.delete(requestId);
      this.workerManager.postMessage({
        type: "worker-request-cancel",
        workerId: this.workerId,
        id: requestId,
      });
    }
  }

  private handleWorkerMessage(message: WorkerOutboundMessage): void {
    if (message.workerId !== this.workerId) {
      this.logger.warning("Received worker message for wrong worker", {
        safe: {
          expectedWorkerId: this.workerId,
          workerId: message.workerId,
          type: message.type,
        },
      });
      return;
    }
    if (message.type === "worker-response") {
      this.handleWorkerResponse(message);
      return;
    }
    this.hostListeners.forEach((listener) => listener(message));
    this.broadcast(message);
  }

  private handleWorkerResponse(message: WorkerResponseMessage): void {
    const pendingHostRequest = this.pendingRequestFromHost.get(
      message.response.id,
    );
    if (pendingHostRequest != null) {
      this.pendingRequestFromHost.delete(message.response.id);
      if (pendingHostRequest.method !== message.response.method) {
        pendingHostRequest.reject(Error("Mismatched worker response method"));
        return;
      }
      if (message.response.result.type === "ok") {
        pendingHostRequest.resolve(message.response.result.value);
        return;
      }
      pendingHostRequest.reject(Error(message.response.result.error.message));
      return;
    }
    const webContents = this.pending.get(message.response.id);
    if (webContents == null) return;
    this.pending.delete(message.response.id);
    this.send(webContents, message);
  }

  private send(
    webContents: WebContentsLike,
    message: WorkerOutboundMessage,
  ): void {
    if (!webContents.isDestroyed()) {
      webContents.send(workerResponseChannel(this.workerId), message);
    }
  }

  private broadcast(message: WorkerOutboundMessage): void {
    this.knownWebContents.forEach((webContents) => {
      this.send(webContents, message);
    });
  }
}
