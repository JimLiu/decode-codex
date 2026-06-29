// Restored from ref/.vite/build/main-r5HnecX_.js
// Public main-process worker bus surface.

export {
  DEFAULT_WORKER_BUS_IDS,
  workerRequestChannel,
  workerResponseChannel,
} from "./main-worker-bus-types";
export type {
  ComputerUseCaptureEvent,
  DisposableSink,
  MainWorkerBusControllerOptions,
  MainWorkerThreadData,
  MainWorkerThreadManagerOptions,
  WebContentsLike,
  WorkerInboundMessage,
  WorkerOutboundMessage,
  WorkerRequestFromHost,
} from "./main-worker-bus-types";
export {
  MainWorkerAppEventBus,
  WorkerInvocationSampler,
} from "./main-worker-events";
export { MainWorkerThreadManager } from "./main-worker-thread-manager";
export { WorkerBusMessageHandler } from "./worker-bus-message-handler";
export { createMainWorkerBusController } from "./main-worker-bus-controller";
