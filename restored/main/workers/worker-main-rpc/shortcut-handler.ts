// Restored from ref/.vite/build/main-r5HnecX_.js
// Host-side worker RPC handler for Windows shortcut-link inspection.

import { requireStringParam } from "./params";
import { unsupportedWorkerMainRpcMethod } from "./responses";
import type {
  ShortcutLinkBoundary,
  ShortcutLinkReaderBoundary,
  WorkerMainRpcHandler,
} from "./types";

export function createOpenInShortcutMainRpcHandler({
  shell,
}: {
  shell: ShortcutLinkReaderBoundary;
}): WorkerMainRpcHandler {
  const shortcuts = new Map<string, ShortcutLinkBoundary>();
  return async (request) => {
    switch (request.method) {
      case "read-shortcut-link": {
        const path = requireStringParam(request.params, "path");
        let shortcut = shortcuts.get(path);
        if (shortcut == null) {
          shortcut = shell.readShortcutLink(path);
          shortcuts.set(path, shortcut);
        }
        return {
          icon: shortcut.icon ?? null,
          target: shortcut.target ?? null,
        };
      }
      case "worker-exit":
        shortcuts.clear();
        return {};
      default:
        throw unsupportedWorkerMainRpcMethod(request.method);
    }
  };
}
