// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~dv5z3ftk-BhBbJNnt.js
// Query client context and memory-backed fallback cache.
import * as React from "react";

import type {
  QueryCacheEntry,
  QueryKey,
  QueryOptions,
  RuntimeQueryClient,
} from "./react-query-types";

const queryClientContext = React.createContext<RuntimeQueryClient | undefined>(
  undefined,
);
const queryCache = new Map<string, QueryCacheEntry>();
const skipTokenSymbol = Symbol("skipToken");

export const skipToken = skipTokenSymbol;

export function queryKeyToString(queryKey: QueryKey | undefined): string {
  return JSON.stringify(queryKey ?? []);
}

export function isQueryEnabled<TData, TResult>(
  options: QueryOptions<TData, TResult>,
): boolean {
  return typeof options.enabled === "function"
    ? options.enabled(undefined) !== false
    : options.enabled !== false;
}

export function getCachedData<TResult>(queryKey: QueryKey | undefined) {
  return queryCache.get(queryKeyToString(queryKey))?.data as
    | TResult
    | undefined;
}

export function setCachedData(
  queryKey: QueryKey | undefined,
  data: unknown,
): void {
  queryCache.set(queryKeyToString(queryKey), {
    data,
    error: null,
    status: "success",
  });
}

const fallbackQueryClient: RuntimeQueryClient = {
  async cancelQueries() {},
  async fetchInfiniteQuery(options) {
    return this.fetchQuery ? this.fetchQuery(options) : undefined;
  },
  async fetchQuery(options) {
    if (!options.queryFn) return getCachedData(options.queryKey);
    const data = await options.queryFn({
      queryKey: options.queryKey ?? [],
    });
    setCachedData(options.queryKey, data);
    return data;
  },
  getQueryData(queryKey) {
    return getCachedData(queryKey);
  },
  async invalidateQueries() {},
  isFetching() {
    return 0;
  },
  removeQueries(filters) {
    if (!filters?.queryKey) queryCache.clear();
    else queryCache.delete(queryKeyToString(filters.queryKey));
  },
  setQueryData(queryKey, value) {
    const current = getCachedData(queryKey);
    const next =
      typeof value === "function"
        ? (value as (current: unknown) => unknown)(current)
        : value;
    setCachedData(queryKey, next);
    return next;
  },
};

export type QueryClientProviderProps = {
  children: React.ReactNode;
  client: RuntimeQueryClient;
};

export function QueryClientProvider({
  children,
  client,
}: QueryClientProviderProps) {
  React.useEffect(() => {
    client.mount?.();
    return () => {
      client.unmount?.();
    };
  }, [client]);

  return (
    <queryClientContext.Provider value={client}>
      {children}
    </queryClientContext.Provider>
  );
}

export function useQueryClient(
  queryClient?: RuntimeQueryClient,
): RuntimeQueryClient {
  return (
    queryClient ?? React.useContext(queryClientContext) ?? fallbackQueryClient
  );
}
