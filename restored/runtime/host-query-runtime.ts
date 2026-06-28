// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// Host-query hook and shared query duration constants.
import {
  aP as QUERY_DURATIONS,
  eP as useHostQueryRaw,
  oP as initQueryDurationConstants,
} from "../boundaries/current-ref/appg-thread-shared-producer";

export { QUERY_DURATIONS };

export function initHostQueryRuntime(): void {
  initQueryDurationConstants();
}

export function useHostQuery<TResult = unknown>(
  queryName: string,
  options: unknown,
): TResult {
  return useHostQueryRaw(queryName, options) as TResult;
}
