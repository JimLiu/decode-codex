// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~dv5z3ftk-BhBbJNnt.js
// Shared types for the lightweight React Query runtime.
export type QueryKey = readonly unknown[];
export type QueryStatus = "pending" | "success" | "error";
export type MutationStatus = "idle" | "pending" | "success" | "error";

export type QueryOptions<TData = unknown, TResult = TData> = {
  enabled?: boolean | ((query: unknown) => boolean);
  initialData?: TData;
  placeholderData?: TData;
  queryFn?: (context: { queryKey: QueryKey }) => TData | Promise<TData>;
  queryKey?: QueryKey;
  select?: (data: TData) => TResult;
  staleTime?: number | "static";
  subscribed?: boolean;
  suspense?: boolean;
  throwOnError?: boolean | ((error: unknown, query: unknown) => boolean);
};

export type QueryResult<TResult = unknown> = {
  data: TResult | undefined;
  error: unknown;
  fetchStatus: "idle" | "fetching";
  isError: boolean;
  isFetching: boolean;
  isLoading: boolean;
  isPending: boolean;
  isSuccess: boolean;
  promise: Promise<TResult | undefined>;
  refetch(): Promise<{ data: TResult | undefined }>;
  status: QueryStatus;
};

export type MutationOptions<TVariables = unknown, TResult = unknown> = {
  mutationFn?: (variables: TVariables) => TResult | Promise<TResult>;
  onError?: (error: unknown, variables: TVariables, context: unknown) => void;
  onMutate?: (variables: TVariables) => unknown | Promise<unknown>;
  onSettled?: (
    data: TResult | undefined,
    error: unknown,
    variables: TVariables,
    context: unknown,
  ) => void;
  onSuccess?: (data: TResult, variables: TVariables, context: unknown) => void;
  throwOnError?: boolean | ((error: unknown) => boolean);
};

export type MutationResult<TVariables = unknown, TResult = unknown> = {
  data: TResult | undefined;
  error: unknown;
  isError: boolean;
  isIdle: boolean;
  isPending: boolean;
  isSuccess: boolean;
  mutate(variables: TVariables): void;
  mutateAsync(variables: TVariables): Promise<TResult>;
  reset(): void;
  status: MutationStatus;
  variables: TVariables | undefined;
};

export type QueryCacheEntry = {
  data: unknown;
  error: unknown;
  promise?: Promise<unknown>;
  status: QueryStatus;
};

export type RuntimeQueryClient = {
  cancelQueries?(
    filters?: { queryKey?: QueryKey },
    options?: unknown,
  ): Promise<void>;
  fetchInfiniteQuery?<TData = unknown>(
    options: QueryOptions<TData>,
  ): Promise<TData>;
  fetchQuery?<TData = unknown>(options: QueryOptions<TData>): Promise<TData>;
  getQueryData?<TData = unknown>(queryKey: QueryKey): TData | undefined;
  invalidateQueries?(
    filters?: { queryKey?: QueryKey },
    options?: unknown,
  ): Promise<void>;
  isFetching?(filters?: { queryKey?: QueryKey }): number;
  mount?(): void;
  removeQueries?(filters?: { queryKey?: QueryKey }): void;
  setQueryData?<TData = unknown>(
    queryKey: QueryKey,
    value: TData | ((current: TData | undefined) => TData),
  ): TData | undefined;
  unmount?(): void;
};
