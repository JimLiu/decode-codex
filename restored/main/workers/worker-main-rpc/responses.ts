// Restored from ref/.vite/build/main-r5HnecX_.js
// Worker main-RPC response wrappers and handler invocation.

import type {
  WorkerMainRpcContext,
  WorkerMainRpcHandler,
  WorkerMainRpcMethod,
  WorkerMainRpcRequest,
  WorkerMainRpcResponse,
} from "./types";
import { isRecord } from "./types";

export const OPEN_RESTORATION_BOUNDARY_CODE = "OPEN_RESTORATION_BOUNDARY";

export function createWorkerMainRpcResponse({
  request,
  value,
  workerId,
}: {
  request: WorkerMainRpcRequest;
  value: unknown;
  workerId: string;
}): WorkerMainRpcResponse {
  return {
    type: "worker-main-rpc-response",
    workerId,
    requestId: request.requestId,
    method: request.method,
    result: { type: "ok", value },
  };
}

export function createWorkerMainRpcErrorResponse({
  error,
  request,
  workerId,
}: {
  error: unknown;
  request: WorkerMainRpcRequest;
  workerId: string;
}): WorkerMainRpcResponse {
  const code = getErrorCode(error);
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

export function createNoMainRpcHandlerResponse(
  request: WorkerMainRpcRequest,
  workerId: string,
): WorkerMainRpcResponse {
  return {
    type: "worker-main-rpc-response",
    workerId,
    requestId: request.requestId,
    method: request.method,
    result: {
      type: "error",
      error: {
        message: `No main RPC handler configured for worker '${workerId}'`,
      },
    },
  };
}

export async function invokeWorkerMainRpcHandler({
  context,
  handler,
  request,
  workerId,
}: {
  context: WorkerMainRpcContext;
  handler: WorkerMainRpcHandler | null | undefined;
  request: WorkerMainRpcRequest;
  workerId: string;
}): Promise<WorkerMainRpcResponse> {
  if (!handler) return createNoMainRpcHandlerResponse(request, workerId);
  try {
    return createWorkerMainRpcResponse({
      request,
      value: await handler(request, context),
      workerId,
    });
  } catch (error) {
    return createWorkerMainRpcErrorResponse({ error, request, workerId });
  }
}

export function unsupportedWorkerMainRpcMethod(
  method: WorkerMainRpcMethod,
): Error {
  return Object.assign(
    Error(`Unsupported worker main RPC method '${method}'`),
    {
      code: OPEN_RESTORATION_BOUNDARY_CODE,
    },
  );
}

function getErrorCode(error: unknown): string | undefined {
  return isRecord(error) && typeof error.code === "string"
    ? error.code
    : undefined;
}
