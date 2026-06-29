// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~dv5z3ftk-BhBbJNnt.js
// Host message request bridge for webview-to-host commands.
import {
  a as sendHostRequestRaw,
  l as initHostRequestRuntimeRaw,
} from "../../ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~dv5z3ftk-BhBbJNnt.js";

export type HostRequestParams = Record<string, unknown>;

export function initHostRequestRuntime(): void {
  initHostRequestRuntimeRaw();
}

export function sendHostRequest<TResponse = unknown>(
  method: string,
  params?: HostRequestParams,
): Promise<TResponse> {
  return (
    params === undefined
      ? sendHostRequestRaw(method)
      : sendHostRequestRaw(method, params)
  ) as Promise<TResponse>;
}
