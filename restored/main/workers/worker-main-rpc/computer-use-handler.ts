// Restored from ref/.vite/build/main-r5HnecX_.js
// Host-side worker RPC handler for the managed Computer Use capture service.

import { unsupportedWorkerMainRpcMethod } from "./responses";
import type { ComputerUseServiceBoundary, WorkerMainRpcHandler } from "./types";

export function createComputerUseCaptureMainRpcHandler({
  computerUse,
}: {
  computerUse: ComputerUseServiceBoundary;
}): WorkerMainRpcHandler {
  return async (request) => {
    switch (request.method) {
      case "computer-use-invalidate-service-pid":
        await computerUse.invalidateManagedComputerUseService(
          request.params.processIdentifier,
        );
        return {};
      case "computer-use-service-pid":
        return computerUse.ensureManagedComputerUseService();
      case "worker-exit":
        return {};
      default:
        throw unsupportedWorkerMainRpcMethod(request.method);
    }
  };
}
