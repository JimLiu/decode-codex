// Restored from ref/.vite/build/main-r5HnecX_.js
// Host-side worker RPC handler for execution-host process, file, and watch APIs.

import { requireStringParam } from "./params";
import { unsupportedWorkerMainRpcMethod } from "./responses";
import type {
  ExecutionHostClientBoundary,
  ExecutionHostMainRpcBoundary,
  ExecutionHostProcessBoundary,
  ExecutionHostWatchBoundary,
  WorkerMainRpcContext,
  WorkerMainRpcHandler,
  WorkerMainRpcRequest,
} from "./types";
import { isRecord } from "./types";

type TrackedExecutionHostProcess = {
  process: ExecutionHostProcessBoundary;
  stdin: WritableStreamDefaultWriter<unknown>;
};

export function createExecutionHostMainRpcHandler({
  executionHosts,
}: {
  executionHosts: ExecutionHostMainRpcBoundary;
}): WorkerMainRpcHandler {
  const processes = new Map<string, Promise<TrackedExecutionHostProcess>>();
  const fileWatchDisposables = new Map<string, ExecutionHostWatchBoundary>();

  const disposeFileWatch = async (watchKey: string): Promise<void> => {
    const watch = fileWatchDisposables.get(watchKey);
    if (watch == null) return;
    fileWatchDisposables.delete(watchKey);
    await watch.dispose();
  };

  const cleanup = (): void => {
    processes.clear();
    for (const watch of fileWatchDisposables.values()) {
      void watch.dispose();
    }
    fileWatchDisposables.clear();
  };

  return async (request, context) => {
    switch (request.method) {
      case "worker-exit":
        cleanup();
        return {};
      case "worktree-cleanup-inputs":
        return executionHosts.getWorktreeCleanupInputsForHost(request.params);
      case "codex-home":
        return getExecutionHost(executionHosts, request.params).codexHome();
      case "platform-family":
        return getExecutionHost(
          executionHosts,
          request.params,
        ).platformFamily();
      case "platform-os":
        return getExecutionHost(executionHosts, request.params).platformOs();
      case "process-start":
        return handleExecutionHostProcessStart({
          context,
          executionHosts,
          processes,
          request,
        });
      case "process-write":
        return handleExecutionHostProcessWrite({ processes, request });
      case "process-resize":
        return handleExecutionHostProcessResize({ processes, request });
      case "process-terminate":
        return handleExecutionHostProcessTerminate({ processes, request });
      case "fs-read-file":
        return readReadableStreamToUint8Array(
          await getExecutionHost(executionHosts, request.params).readFile(
            requireStringParam(request.params, "path"),
          ),
        );
      case "fs-write-file":
        await getExecutionHost(executionHosts, request.params).writeFile(
          requireStringParam(request.params, "path"),
          request.params.contents,
        );
        return {};
      case "fs-create-directory":
        await getExecutionHost(executionHosts, request.params).createDirectory(
          requireStringParam(request.params, "path"),
          { recursive: request.params.recursive },
        );
        return {};
      case "fs-get-metadata":
        return serializeExecutionHostMetadata(
          await getExecutionHost(executionHosts, request.params).stat(
            requireStringParam(request.params, "path"),
            {
              bypassCache: request.params.bypassCache,
              followSymlinks: request.params.followSymlinks,
            },
          ),
        );
      case "fs-read-directory": {
        const entries = await getExecutionHost(
          executionHosts,
          request.params,
        ).readDirectory(requireStringParam(request.params, "path"));
        return entries.map(serializeExecutionHostDirectoryEntry);
      }
      case "fs-remove":
        await getExecutionHost(executionHosts, request.params).remove(
          requireStringParam(request.params, "path"),
          request.params,
        );
        return {};
      case "fs-copy":
        await getExecutionHost(executionHosts, request.params).copy(
          requireStringParam(request.params, "sourcePath"),
          requireStringParam(request.params, "destinationPath"),
          { recursive: request.params.recursive },
        );
        return {};
      case "fs-watch":
        return handleExecutionHostFileWatchStart({
          context,
          disposeFileWatch,
          executionHosts,
          fileWatchDisposables,
          request,
        });
      case "fs-unwatch":
        await disposeFileWatch(createFileWatchKey(request.params));
        return {};
      default:
        throw unsupportedWorkerMainRpcMethod(request.method);
    }
  };
}

async function handleExecutionHostProcessStart({
  context,
  executionHosts,
  processes,
  request,
}: {
  context: WorkerMainRpcContext;
  executionHosts: ExecutionHostMainRpcBoundary;
  processes: Map<string, Promise<TrackedExecutionHostProcess>>;
  request: WorkerMainRpcRequest;
}): Promise<unknown> {
  const processHandle = requireStringParam(request.params, "processHandle");
  const {
    hostId: _hostId,
    processHandle: _processHandle,
    ...spawnOptions
  } = request.params;
  const trackedProcess = getExecutionHost(executionHosts, request.params)
    .spawn(spawnOptions)
    .then((process) => ({
      process,
      stdin: process.stdin.getWriter(),
    }));
  processes.set(processHandle, trackedProcess);
  try {
    const { process } = await trackedProcess;
    const [exitResult] = await Promise.all([
      process.wait(),
      emitProcessOutputDeltas({
        context,
        processHandle,
        stream: process.stdout,
        streamName: "stdout",
      }),
      emitProcessOutputDeltas({
        context,
        processHandle,
        stream: process.stderr,
        streamName: "stderr",
      }),
    ]);
    return exitResult;
  } finally {
    if (processes.get(processHandle) === trackedProcess) {
      processes.delete(processHandle);
    }
  }
}

async function handleExecutionHostProcessWrite({
  processes,
  request,
}: {
  processes: Map<string, Promise<TrackedExecutionHostProcess>>;
  request: WorkerMainRpcRequest;
}): Promise<Record<string, never>> {
  const processHandle = requireStringParam(request.params, "processHandle");
  const { stdin } = await requireTrackedProcess(processes, processHandle);
  if ("delta" in request.params && request.params.delta != null) {
    await stdin.write(request.params.delta);
  }
  if (request.params.closeStdin === true) await stdin.close();
  return {};
}

async function handleExecutionHostProcessResize({
  processes,
  request,
}: {
  processes: Map<string, Promise<TrackedExecutionHostProcess>>;
  request: WorkerMainRpcRequest;
}): Promise<Record<string, never>> {
  const { process } = await requireTrackedProcess(
    processes,
    requireStringParam(request.params, "processHandle"),
  );
  await process.resize(request.params.size);
  return {};
}

async function handleExecutionHostProcessTerminate({
  processes,
  request,
}: {
  processes: Map<string, Promise<TrackedExecutionHostProcess>>;
  request: WorkerMainRpcRequest;
}): Promise<Record<string, never>> {
  const { process } = await requireTrackedProcess(
    processes,
    requireStringParam(request.params, "processHandle"),
  );
  process.kill();
  return {};
}

async function emitProcessOutputDeltas({
  context,
  processHandle,
  stream,
  streamName,
}: {
  context: WorkerMainRpcContext;
  processHandle: string;
  stream: ReadableStream<unknown>;
  streamName: "stderr" | "stdout";
}): Promise<void> {
  const reader = stream.getReader();
  try {
    for (;;) {
      const chunk = await reader.read();
      if (chunk.done) return;
      context.emitEvent({
        method: "process-output-delta",
        params: { chunk: chunk.value, processHandle, stream: streamName },
      });
    }
  } finally {
    reader.releaseLock();
  }
}

async function handleExecutionHostFileWatchStart({
  context,
  disposeFileWatch,
  executionHosts,
  fileWatchDisposables,
  request,
}: {
  context: WorkerMainRpcContext;
  disposeFileWatch(watchKey: string): Promise<void>;
  executionHosts: ExecutionHostMainRpcBoundary;
  fileWatchDisposables: Map<string, ExecutionHostWatchBoundary>;
  request: WorkerMainRpcRequest;
}): Promise<{ path: string }> {
  const watchKey = createFileWatchKey(request.params);
  await disposeFileWatch(watchKey);
  const hostId = request.params.hostId;
  const watchId = requireStringParam(request.params, "watchId");
  const watch = await getExecutionHost(
    executionHosts,
    request.params,
  ).startFileWatch({
    path: requireStringParam(request.params, "path"),
    recursive: request.params.recursive,
    watchId,
    onChange: (event) => {
      context.emitEvent({
        method: "fs-watch-changed",
        params: { changedPaths: event.changedPaths, hostId, watchId },
      });
    },
  });
  fileWatchDisposables.set(watchKey, watch);
  watch.closed
    .then((event) => {
      if (fileWatchDisposables.get(watchKey) !== watch) return;
      fileWatchDisposables.delete(watchKey);
      context.emitEvent({
        method: "fs-watch-closed",
        params: {
          error: event.error,
          hostId,
          reason: event.reason,
          watchId,
        },
      });
    })
    .catch((error) => {
      if (fileWatchDisposables.get(watchKey) !== watch) return;
      fileWatchDisposables.delete(watchKey);
      context.emitEvent({
        method: "fs-watch-closed",
        params: { error, hostId, reason: "watch-error", watchId },
      });
    });
  return { path: watch.path };
}

function getExecutionHost(
  executionHosts: ExecutionHostMainRpcBoundary,
  params: Record<string, unknown>,
): ExecutionHostClientBoundary {
  const host = executionHosts.getAppServerClientForHost({
    hostId: params.hostId,
  });
  if (host == null) {
    throw Error(`Execution host ${String(params.hostId)} not found`);
  }
  return host;
}

async function requireTrackedProcess(
  processes: Map<string, Promise<TrackedExecutionHostProcess>>,
  processHandle: string,
): Promise<TrackedExecutionHostProcess> {
  const process = processes.get(processHandle);
  if (process == null) throw Error(`Process ${processHandle} not found`);
  return process;
}

function createFileWatchKey(params: Record<string, unknown>): string {
  return JSON.stringify([params.hostId, params.watchId]);
}

function serializeExecutionHostMetadata(metadata: {
  birthtimeMs: number;
  ctimeMs: number;
  ino: number;
  isDirectory(): boolean;
  isFile(): boolean;
  isSymbolicLink(): boolean;
  mtimeMs: number;
  size: number;
}): Record<string, unknown> {
  return {
    birthtimeMs: metadata.birthtimeMs,
    ctimeMs: metadata.ctimeMs,
    ino: metadata.ino,
    isDirectory: metadata.isDirectory(),
    isFile: metadata.isFile(),
    isSymbolicLink: metadata.isSymbolicLink(),
    mtimeMs: metadata.mtimeMs,
    size: metadata.size,
  };
}

function serializeExecutionHostDirectoryEntry(
  entry: unknown,
): Record<string, unknown> {
  if (!isRecord(entry)) {
    return {
      name: "",
      isDirectory: false,
      isFile: false,
      isSymbolicLink: false,
    };
  }
  return {
    name: typeof entry.name === "string" ? entry.name : "",
    isDirectory:
      typeof entry.isDirectory === "function" ? entry.isDirectory() : false,
    isFile: typeof entry.isFile === "function" ? entry.isFile() : false,
    isSymbolicLink:
      typeof entry.isSymbolicLink === "function"
        ? entry.isSymbolicLink()
        : false,
  };
}

async function readReadableStreamToUint8Array(
  stream: ReadableStream<unknown>,
): Promise<Uint8Array> {
  return new Uint8Array(
    await new Response(stream as ReadableStream<Uint8Array>).arrayBuffer(),
  );
}
