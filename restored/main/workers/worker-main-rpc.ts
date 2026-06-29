// Restored from ref/.vite/build/main-r5HnecX_.js
// Public worker main-RPC surface re-exported for the Electron main process.

export { createComputerUseCaptureMainRpcHandler } from "./worker-main-rpc/computer-use-handler";
export { createExecutionHostMainRpcHandler } from "./worker-main-rpc/execution-host-handler";
export { createOpenInShortcutMainRpcHandler } from "./worker-main-rpc/shortcut-handler";
export {
  createNoMainRpcHandlerResponse,
  createWorkerMainRpcErrorResponse,
  createWorkerMainRpcResponse,
  invokeWorkerMainRpcHandler,
} from "./worker-main-rpc/responses";
export {
  isWorkerMainRpcMethod,
  isWorkerMainRpcRequest,
} from "./worker-main-rpc/types";
export type {
  ComputerUseServiceBoundary,
  ExecutionHostClientBoundary,
  ExecutionHostMainRpcBoundary,
  ExecutionHostProcessBoundary,
  ExecutionHostWatchBoundary,
  RpcResult,
  ShortcutLinkBoundary,
  ShortcutLinkReaderBoundary,
  WorkerMainRpcContext,
  WorkerMainRpcEventMethod,
  WorkerMainRpcHandler,
  WorkerMainRpcMethod,
  WorkerMainRpcRequest,
  WorkerMainRpcResponse,
} from "./worker-main-rpc/types";
