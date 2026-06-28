// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// Host app-server request bridge used by conversation feature modules.
import {
  ak as initAppServerRequestBridge,
  ok as sendAppServerRequestRaw,
} from "../boundaries/current-ref/appg-thread-shared-producer";

export type AppServerRequestParams = Record<string, unknown>;

export function initAppServerRequestRuntime(): void {
  initAppServerRequestBridge();
}

export function sendAppServerRequest<TResponse = unknown>(
  method: string,
  params?: AppServerRequestParams,
): Promise<TResponse> {
  return (params === undefined
    ? sendAppServerRequestRaw(method)
    : sendAppServerRequestRaw(method, params)) as Promise<TResponse>;
}
