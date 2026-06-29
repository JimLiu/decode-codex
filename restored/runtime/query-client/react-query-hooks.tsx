// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~dv5z3ftk-BhBbJNnt.js
// Query hooks compatible with the current bundled TanStack Query surface.
import * as React from "react";

import {
  getCachedData,
  isQueryEnabled,
  setCachedData,
  skipToken,
  useQueryClient,
} from "./react-query-context";
import type {
  QueryKey,
  QueryOptions,
  QueryResult,
  QueryStatus,
  RuntimeQueryClient,
} from "./react-query-types";

export function useQuery<TData = unknown, TResult = TData>(
  options: QueryOptions<TData, TResult>,
  queryClient?: RuntimeQueryClient,
): QueryResult<TResult> {
  const client = useQueryClient(queryClient);
  const initialData =
    getCachedData<TResult>(options.queryKey) ??
    (options.initialData as TResult | undefined) ??
    (options.placeholderData as unknown as TResult | undefined);
  const [result, setResult] = React.useState<QueryResult<TResult>>(() =>
    buildQueryResult(initialData, null, "idle"),
  );

  const execute = React.useCallback(async () => {
    if (!isQueryEnabled(options) || options.queryFn === skipToken) {
      return { data: getCachedData<TResult>(options.queryKey) };
    }

    setResult((current) => ({
      ...current,
      fetchStatus: "fetching",
      isFetching: true,
      isLoading: current.data === undefined,
      isPending: current.data === undefined,
      status: current.data === undefined ? "pending" : current.status,
    }));

    try {
      const data = client.fetchQuery
        ? await client.fetchQuery<TData>(options)
        : await options.queryFn?.({ queryKey: options.queryKey ?? [] });
      const selected =
        options.select && data !== undefined ? options.select(data) : data;
      setCachedData(options.queryKey, selected);
      setResult(buildQueryResult(selected as TResult, null, "idle"));
      return { data: selected as TResult | undefined };
    } catch (error) {
      setResult(buildQueryResult(undefined, error, "idle"));
      if (options.throwOnError === true) throw error;
      return { data: undefined };
    }
  }, [client, options]);

  React.useEffect(() => {
    if (
      isQueryEnabled(options) &&
      options.queryFn &&
      options.queryFn !== skipToken
    ) {
      void execute();
    }
  }, [execute, options]);

  return {
    ...result,
    promise: result.promise,
    refetch: execute,
  };
}

function buildQueryResult<TResult>(
  data: TResult | undefined,
  error: unknown,
  fetchStatus: "idle" | "fetching",
): QueryResult<TResult> {
  const status: QueryStatus =
    error != null ? "error" : data === undefined ? "pending" : "success";
  return {
    data,
    error,
    fetchStatus,
    isError: status === "error",
    isFetching: fetchStatus === "fetching",
    isLoading: status === "pending" && fetchStatus === "fetching",
    isPending: status === "pending",
    isSuccess: status === "success",
    promise: Promise.resolve(data),
    refetch: async () => ({ data }),
    status,
  };
}

export function useSuspenseQuery<TData = unknown, TResult = TData>(
  options: QueryOptions<TData, TResult>,
  queryClient?: RuntimeQueryClient,
): QueryResult<TResult> {
  const result = useQuery(options, queryClient);
  if (result.error) throw result.error;
  if (result.data === undefined) throw result.promise;
  return result;
}

export function useInfiniteQuery<TData = unknown, TResult = TData>(
  options: QueryOptions<TData, TResult>,
  queryClient?: RuntimeQueryClient,
) {
  const result = useQuery(options, queryClient);
  const fetchMore = React.useCallback(async () => {
    const data = await result.refetch();
    return data;
  }, [result]);

  return {
    ...result,
    fetchNextPage: fetchMore,
    fetchPreviousPage: fetchMore,
    hasNextPage: false,
    hasPreviousPage: false,
    isFetchNextPageError: false,
    isFetchPreviousPageError: false,
    isFetchingNextPage: false,
    isFetchingPreviousPage: false,
  };
}

export function useQueries<TResult = readonly QueryResult[]>({
  combine,
  queries,
}: {
  combine?: (results: readonly QueryResult[]) => TResult;
  queries: readonly QueryOptions[];
}): TResult | readonly QueryResult[] {
  const results = queries.map((query) => useQuery(query));
  return combine ? combine(results) : results;
}

export function useIsFetching(
  filters?: { queryKey?: QueryKey },
  queryClient?: RuntimeQueryClient,
): number {
  return useQueryClient(queryClient).isFetching?.(filters) ?? 0;
}
