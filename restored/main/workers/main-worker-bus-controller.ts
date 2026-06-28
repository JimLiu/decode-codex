// Restored from ref/.vite/build/main--VWTbRdF.js
// Main worker bus controller wiring Git, OpenIn, and Computer Use workers.

import { ipcMain, shell } from "electron";
import type { WorkerMainRpcHandler } from "./worker-main-rpc";
import {
  DEFAULT_WORKER_BUS_IDS,
  workerRequestChannel,
  type ComputerUseCaptureEvent,
  type MainWorkerBusControllerOptions,
  type SentryUser,
  type WorkerRequestFromHost,
} from "./main-worker-bus-types";
import {
  MainWorkerAppEventBus,
  WorkerInvocationSampler,
} from "./main-worker-events";
import { WorkerBusMessageHandler } from "./worker-bus-message-handler";

export function createMainWorkerBusController({
  disposables,
  ipcMain: ipcMainDependency = ipcMain,
  isTrustedIpcEvent,
  maxLogLevel,
  sentryInitOptions,
  spawnInsideWsl,
  workerBusIds = DEFAULT_WORKER_BUS_IDS,
  workerScriptPath,
  workerThreadFactory,
}: MainWorkerBusControllerOptions): {
  appEvent: MainWorkerAppEventBus;
  gitWorkerInvocationSampler: WorkerInvocationSampler;
  requestComputerUseCaptureWorker(
    request: WorkerRequestFromHost,
  ): Promise<unknown>;
  requestGitWorker(request: WorkerRequestFromHost): Promise<unknown>;
  requestOpenInWorker(request: WorkerRequestFromHost): Promise<unknown>;
  registerWorkerBusMessageHandlers(): void;
  setComputerUseCaptureWorkerMainRpcHandler(
    handler: WorkerMainRpcHandler,
  ): void;
  setGitWorkerMainRpcHandler(handler: WorkerMainRpcHandler): void;
  subscribeComputerUseCaptureWorkerEvent(
    type: string,
    listener: (event: ComputerUseCaptureEvent) => void,
  ): () => void;
  subscribeGitWorkerEvent(
    type: string,
    listener: (event: Record<string, unknown>) => void,
  ): () => void;
  updateWorkerSentryUser(
    authMethod: string | null,
    userId?: string | null,
    email?: string | null,
    accountId?: string | null,
  ): void;
} {
  const workerOptions = {
    maxLogLevel,
    sentryInitOptions,
    spawnInsideWsl,
    workerScriptPath,
    workerThreadFactory,
  };
  const appEvent = new MainWorkerAppEventBus();
  const gitWorkerInvocationSampler = new WorkerInvocationSampler();
  const gitWorker = new WorkerBusMessageHandler("git", {
    ...workerOptions,
    onWorkerRequestSent: () => gitWorkerInvocationSampler.recordInvocation(),
  });
  const openInWorker = new WorkerBusMessageHandler("open-in", workerOptions);
  const shortcutCache = new Map<
    string,
    { icon?: string | null; target?: string | null }
  >();
  openInWorker.setMainRpcHandler(async (request) => {
    switch (request.method) {
      case "read-shortcut-link": {
        const path = String(request.params.path ?? "");
        let shortcut = shortcutCache.get(path);
        if (shortcut == null) {
          shortcut = shell.readShortcutLink(path);
          shortcutCache.set(path, shortcut);
        }
        return {
          icon: shortcut.icon,
          target: shortcut.target,
        };
      }
      case "worker-exit":
        return {};
    }
  });

  const computerUseEventListeners = new Set<
    (event: ComputerUseCaptureEvent) => void
  >();
  const transientComputerUseWorkers = new Map<
    WorkerBusMessageHandler,
    () => void
  >();
  const watchComputerUseWorkers = new Map<string, WorkerBusMessageHandler>();
  let computerUseMainRpcHandler: WorkerMainRpcHandler | null = null;
  let latestSentryUser: SentryUser | null = null;

  disposables.add(() => {
    transientComputerUseWorkers.forEach((dispose) => dispose());
  });

  const applyWorkerDefaults = (handler: WorkerBusMessageHandler): void => {
    if (computerUseMainRpcHandler != null) {
      handler.setMainRpcHandler(computerUseMainRpcHandler);
    }
    if (latestSentryUser != null) {
      handler.setSentryUser(
        latestSentryUser.authMethod,
        latestSentryUser.userId,
        latestSentryUser.email,
        latestSentryUser.accountId,
      );
    }
  };

  const registerAppEventWorker = (handler: WorkerBusMessageHandler): void => {
    disposables.add(handler);
    disposables.add(
      appEvent.subscribe((event) => {
        handler.emitAppEvent(event);
      }),
    );
  };

  const registerIpcWorker = (
    workerId: string,
    handler: WorkerBusMessageHandler,
  ): void => {
    registerAppEventWorker(handler);
    ipcMainDependency.handle(
      workerRequestChannel(workerId),
      (event, message) => {
        if (isTrustedIpcEvent(event)) {
          void handler.handleMessage(event.sender, message);
        }
      },
    );
  };

  return {
    appEvent,
    gitWorkerInvocationSampler,
    requestComputerUseCaptureWorker: async (request) => {
      const handler = new WorkerBusMessageHandler(
        "computer-use-capture",
        workerOptions,
      );
      applyWorkerDefaults(handler);
      const appEventSubscription = appEvent.subscribe((event) => {
        handler.emitAppEvent(event);
      });
      let disposed = false;
      const dispose = (): void => {
        if (disposed) return;
        disposed = true;
        appEventSubscription.dispose();
        transientComputerUseWorkers.delete(handler);
        handler.dispose();
      };
      transientComputerUseWorkers.set(handler, dispose);
      try {
        handler.startWorker();
        const value = await handler.requestFromHost(request);
        if (isStartedCaptureResult(value)) {
          startComputerUseCaptureWatch(value.requestId, request.signal);
        }
        return value;
      } finally {
        dispose();
      }
    },
    requestGitWorker: (request) => gitWorker.requestFromHost(request),
    requestOpenInWorker: (request) => openInWorker.requestFromHost(request),
    registerWorkerBusMessageHandlers: () => {
      registerAppEventWorker(openInWorker);
      for (const workerId of workerBusIds) {
        if (workerId === "git") {
          registerIpcWorker(workerId, gitWorker);
          continue;
        }
        if (workerId === "open-in") continue;
        registerIpcWorker(
          workerId,
          new WorkerBusMessageHandler(workerId, workerOptions),
        );
      }
    },
    setGitWorkerMainRpcHandler: (handler) => {
      gitWorker.setMainRpcHandler(handler);
    },
    setComputerUseCaptureWorkerMainRpcHandler: (handler) => {
      computerUseMainRpcHandler = handler;
      transientComputerUseWorkers.forEach((_dispose, worker) => {
        worker.setMainRpcHandler(handler);
      });
      watchComputerUseWorkers.forEach((worker) => {
        worker.setMainRpcHandler(handler);
      });
    },
    subscribeComputerUseCaptureWorkerEvent: (type, listener) => {
      const wrapped = (event: ComputerUseCaptureEvent): void => {
        if (event.type === type) listener(event);
      };
      computerUseEventListeners.add(wrapped);
      return () => {
        computerUseEventListeners.delete(wrapped);
      };
    },
    subscribeGitWorkerEvent: (type, listener) =>
      gitWorker.subscribeFromHost((message) => {
        if (message.type === "worker-event" && message.event?.type === type) {
          listener(message.event);
        }
      }),
    updateWorkerSentryUser: (authMethod, userId, email, accountId) => {
      latestSentryUser = { accountId, authMethod, email, userId };
      gitWorker.setSentryUser(authMethod, userId, email, accountId);
      openInWorker.setSentryUser(authMethod, userId, email, accountId);
      transientComputerUseWorkers.forEach((_dispose, worker) => {
        worker.setSentryUser(authMethod, userId, email, accountId);
      });
      watchComputerUseWorkers.forEach((worker) => {
        worker.setSentryUser(authMethod, userId, email, accountId);
      });
    },
  };

  function startComputerUseCaptureWatch(
    requestId: string,
    signal?: AbortSignal,
  ): void {
    if (watchComputerUseWorkers.has(requestId)) return;
    const handler = new WorkerBusMessageHandler(
      "computer-use-capture",
      workerOptions,
    );
    applyWorkerDefaults(handler);
    watchComputerUseWorkers.set(requestId, handler);
    const appEventSubscription = appEvent.subscribe((event) => {
      handler.emitAppEvent(event);
    });
    const unsubscribeEvents = handler.subscribeFromHost((message) => {
      if (message.type !== "worker-event") return;
      const event = message.event as ComputerUseCaptureEvent;
      computerUseEventListeners.forEach((listener) => listener(event));
      if (
        event.type === "update" &&
        event.requestId === requestId &&
        (event.update?.type === "completed" || event.update?.type === "failed")
      ) {
        cleanup();
      }
    });
    const unsubscribeExit = handler.subscribeWorkerExit(() => {
      if (!cleanedUp) {
        emitComputerUseCaptureFailure("update_worker_exited", requestId);
        cleanup();
      }
    });
    const abort = (): void => cleanup();
    signal?.addEventListener("abort", abort, { once: true });
    let cleanedUp = false;
    const cleanup = (): void => {
      if (cleanedUp) return;
      cleanedUp = true;
      unsubscribeEvents();
      unsubscribeExit();
      signal?.removeEventListener("abort", abort);
      appEventSubscription.dispose();
      watchComputerUseWorkers.delete(requestId);
      handler.dispose();
    };
    handler.startWorker();
    handler
      .requestFromHost({
        method: "watchUpdates",
        params: { requestId },
        signal,
      })
      .catch(() => {
        if (!cleanedUp) {
          emitComputerUseCaptureFailure("update_watch_failed", requestId);
          cleanup();
        }
      });
  }

  function emitComputerUseCaptureFailure(
    failureReason: string,
    requestId: string,
  ): void {
    computerUseEventListeners.forEach((listener) => {
      listener({
        type: "update",
        requestId,
        update: {
          type: "failed",
          failureReason,
        },
      });
    });
  }
}

function isStartedCaptureResult(
  value: unknown,
): value is { result: "started"; requestId: string } {
  return (
    typeof value === "object" &&
    value != null &&
    "result" in value &&
    value.result === "started" &&
    "requestId" in value &&
    typeof value.requestId === "string"
  );
}
