// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// Host-query hook and shared query duration constants.
import {
  ZN as createHostQuerySignalRaw,
  aP as QUERY_DURATIONS,
  eP as useHostQueryRaw,
  oP as initQueryDurationConstants,
} from "../vendor/appg-thread-shared-runtime";
import {
  fu as initTaskWorkspaceQueryRuntime,
  pu as useDebouncedValueRaw,
} from "../vendor/pull-request-thread-actions-runtime";

export { QUERY_DURATIONS };

export function initHostQueryRuntime(): void {
  initQueryDurationConstants();
}

export function initTaskWorkspaceHostQueryRuntime(): void {
  initTaskWorkspaceQueryRuntime();
}

export function createHostQuerySignal<TParams>(
  scope: unknown,
  queryName: string,
  getQueryOptions: (params: TParams) => unknown,
): unknown {
  return createHostQuerySignalRaw(scope, queryName, getQueryOptions);
}

export function useHostQuery<TResult = unknown>(
  queryName: string,
  options: unknown,
): TResult {
  return useHostQueryRaw(queryName, options) as TResult;
}

export function useDebouncedValue<TValue>(
  value: TValue,
  delayMs: number,
): TValue {
  return useDebouncedValueRaw(value, delayMs) as TValue;
}
