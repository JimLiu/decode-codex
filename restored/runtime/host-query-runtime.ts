// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~dv5z3ftk-BhBbJNnt.js
// Host-query hook and shared query duration constants.
import * as React from "react";

import {
  fu as initTaskWorkspaceQueryRuntime,
  pu as useDebouncedValueRaw,
} from "../vendor/pull-request-thread-actions-runtime";
import { createQueryKey } from "./app-server-mutation-runtime";
import {
  initReactQueryRuntimeChunk,
  useQuery,
  type QueryOptions,
  type QueryResult,
} from "./query-client/react-query-runtime";
import { createQueryFamily, type ScopeToken } from "./scope-signal-runtime";
import {
  initHostRequestRuntime,
  sendHostRequest,
} from "./host-request-runtime";

export const QUERY_DURATIONS = {
  FIVE_SECONDS: 5_000,
  FIFTEEN_SECONDS: 15_000,
  THIRTY_SECONDS: 30_000,
  ONE_MINUTE: 60_000,
  FIVE_MINUTES: 5 * 60_000,
  TEN_MINUTES: 10 * 60_000,
  SIX_HOURS: 360 * 60_000,
  INFINITE: Infinity,
} as const;
export const queryDurations = QUERY_DURATIONS;

type HostQueryCacheKey = readonly unknown[] | unknown;

type HostQueryConfig<TData, TResult> = Omit<
  QueryOptions<TData, TResult>,
  "queryFn" | "queryKey" | "select"
> & {
  cacheKey?: HostQueryCacheKey;
  gcTime?: number;
  intervalMs?: number | false;
  refetchInterval?: number | false;
  refetchIntervalInBackground?: boolean;
  refetchOnMount?: boolean | "always";
  refetchOnWindowFocus?: boolean | "always";
  retry?: boolean | number;
  structuralSharing?: boolean | ((oldData: unknown, newData: TData) => TResult);
};

export type HostQueryOptions<
  TParams = unknown,
  TData = unknown,
  TResult = TData,
> = {
  params?: TParams;
  placeholderData?: TData;
  queryConfig?: HostQueryConfig<TData, TResult>;
  select?: (data: TData) => TResult;
  source?: string;
};

type HostQuerySignalOptions<TParams, TData, TResult> = HostQueryConfig<
  TData,
  TResult
> & {
  cacheKey?: HostQueryCacheKey;
  params?: TParams;
  select?: (data: TData) => TResult;
  source?: string;
};

export function initHostQueryRuntime(): void {
  initQueryDurationConstants();
  initReactQueryRuntimeChunk();
  initHostRequestRuntime();
}

export function initQueryDurationConstants(): void {}

export function initTaskWorkspaceHostQueryRuntime(): void {
  initTaskWorkspaceQueryRuntime();
}

export function createHostQuerySignal<
  TParams,
  TData = unknown,
  TResult = TData,
>(
  scope: ScopeToken,
  queryName: string,
  getQueryOptions: (
    params: TParams,
  ) => HostQuerySignalOptions<TParams, TData, TResult> | undefined,
): unknown {
  return createQueryFamily<TData, TResult, TParams>(scope, (params) =>
    buildHostQuerySignalOptions(queryName, params, getQueryOptions),
  );
}

export function useHostQuery<TResult = unknown>(
  queryName: string,
  options: HostQueryOptions<unknown, unknown, TResult>,
): QueryResult<TResult> {
  const queryOptions = useStableHostQueryOptions(queryName, options);
  return useQuery<unknown, TResult>(queryOptions);
}

export function useDebouncedValue<TValue>(
  value: TValue,
  delayMs: number,
): TValue {
  return useDebouncedValueRaw(value, delayMs) as TValue;
}

function useStableHostQueryOptions<TData = unknown, TResult = TData>(
  queryName: string,
  options: HostQueryOptions<unknown, TData, TResult>,
): QueryOptions<TData, TResult> {
  const queryConfig = options.queryConfig ?? {};
  const paramsKey = stableJson(options.params);
  const cacheKey = stableJson(queryConfig.cacheKey);

  return React.useMemo(
    () => buildHostQueryOptions(queryName, options),
    [
      queryName,
      paramsKey,
      cacheKey,
      options.placeholderData,
      options.select,
      options.source,
      queryConfig.enabled,
      queryConfig.gcTime,
      queryConfig.initialData,
      queryConfig.intervalMs,
      queryConfig.refetchInterval,
      queryConfig.refetchIntervalInBackground,
      queryConfig.refetchOnMount,
      queryConfig.refetchOnWindowFocus,
      queryConfig.retry,
      queryConfig.staleTime,
      queryConfig.structuralSharing,
      queryConfig.subscribed,
      queryConfig.suspense,
      queryConfig.throwOnError,
    ],
  );
}

function buildHostQueryOptions<TParams, TData = unknown, TResult = TData>(
  queryName: string,
  options: HostQueryOptions<TParams, TData, TResult>,
): QueryOptions<TData, TResult> {
  const {
    cacheKey,
    intervalMs,
    staleTime = QUERY_DURATIONS.FIVE_SECONDS,
    ...queryConfig
  } = options.queryConfig ?? {};

  return {
    ...queryConfig,
    placeholderData: options.placeholderData,
    queryFn: () =>
      sendHostRequest<TData>(queryName, {
        params: options.params as Record<string, unknown>,
        source: options.source,
      }),
    queryKey: createQueryKey(
      queryName,
      options.params as Record<string, unknown> | null | undefined,
      cacheKey,
    ),
    refetchInterval: intervalMs ?? queryConfig.refetchInterval,
    select: options.select,
    staleTime,
  } as QueryOptions<TData, TResult>;
}

function buildHostQuerySignalOptions<TParams, TData = unknown, TResult = TData>(
  queryName: string,
  params: TParams,
  getQueryOptions: (
    params: TParams,
  ) => HostQuerySignalOptions<TParams, TData, TResult> | undefined,
): QueryOptions<TData, TResult> {
  const rawOptions = getQueryOptions(params);
  const {
    cacheKey,
    params: explicitParams,
    select,
    source,
    ...queryOptions
  } = rawOptions ?? {};
  const requestParams =
    rawOptions != null && "params" in rawOptions ? explicitParams : params;

  return {
    ...queryOptions,
    queryFn: () =>
      sendHostRequest<TData>(queryName, {
        params: requestParams as Record<string, unknown>,
        source,
      }),
    queryKey: createQueryKey(
      queryName,
      requestParams as Record<string, unknown> | null | undefined,
      cacheKey,
    ),
    select,
  } as QueryOptions<TData, TResult>;
}

function stableJson(value: unknown): string {
  if (value === undefined) return "";
  try {
    return JSON.stringify(value);
  } catch {
    return String(value);
  }
}
