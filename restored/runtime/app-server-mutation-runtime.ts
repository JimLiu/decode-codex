// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~dv5z3ftk-BhBbJNnt.js
// React Query mutation helpers for app-server backed local features.
import * as React from "react";

import {
  initReactQueryRuntimeChunk,
  useMutation as useReactQueryMutation,
  useQueryClient as useReactQueryClient,
  type MutationOptions,
  type RuntimeQueryClient,
} from "./query-client/react-query-runtime";
import {
  initHostRequestRuntime,
  sendHostRequest,
} from "./host-request-runtime";
import { initVscodeBridgeRuntime } from "./platform-content-runtime";

export type AppServerMutationOptions<TData, TVariables> = {
  mutationKey?: readonly unknown[];
  onError?: (error: unknown, variables: TVariables, context: unknown) => void;
  onMutate?: (variables: TVariables) => unknown | Promise<unknown>;
  onSuccess?: (data: TData, variables: TVariables, context: unknown) => void;
  onSettled?: (
    data: TData | undefined,
    error: unknown,
    variables: TVariables,
    context: unknown,
  ) => void;
  source?: string;
  [key: string]: unknown;
};

export type AppServerMutation<
  TData = unknown,
  TVariables = Record<string, unknown>,
> = {
  data?: TData;
  error?: unknown;
  isError?: boolean;
  isPending: boolean;
  isSuccess?: boolean;
  mutate: (
    variables: TVariables,
    options?: AppServerMutationOptions<TData, TVariables>,
  ) => void;
  mutateAsync: (
    variables: TVariables,
    options?: AppServerMutationOptions<TData, TVariables>,
  ) => Promise<TData>;
  reset?: () => void;
};

export type AppServerQueryClient = RuntimeQueryClient & {
  invalidateQueries: (
    filters?: { queryKey?: unknown; [key: string]: unknown },
    options?: unknown,
  ) => Promise<unknown> | unknown;
};

export function initAppServerMutationRuntime(): void {
  initReactQueryRuntime();
  initHostRequestRuntime();
  initVscodeBridgeRuntime();
}

export function initReactQueryRuntime(): void {
  initReactQueryRuntimeChunk();
}

export function useAppServerMutation<
  TData = unknown,
  TVariables = Record<string, unknown>,
>(
  mutationName: string,
  options?: AppServerMutationOptions<TData, TVariables>,
): AppServerMutation<TData, TVariables> {
  const source = options?.source;
  const mutationFn = React.useCallback(
    (variables: TVariables) =>
      sendHostRequest<TData>(mutationName, {
        params: variables as Record<string, unknown>,
        source,
      }),
    [mutationName, source],
  );
  const mutationOptions = React.useMemo(
    () => ({
      mutationFn,
      ...options,
      networkMode: "always",
    }),
    [mutationFn, options],
  );

  return useReactQueryMutation(
    mutationOptions as MutationOptions<TVariables, TData>,
  ) as AppServerMutation<TData, TVariables>;
}

export function useMutation<
  TData = unknown,
  TVariables = Record<string, unknown>,
>(options: unknown): AppServerMutation<TData, TVariables> {
  return useReactQueryMutation(
    options as MutationOptions<TVariables, TData>,
  ) as AppServerMutation<TData, TVariables>;
}

export function createQueryKey(
  queryName: string,
  params?: Record<string, unknown> | null,
  cacheKey?: unknown[] | unknown,
): readonly unknown[] {
  return [
    "vscode",
    queryName,
    ...(cacheKey == null
      ? []
      : Array.isArray(cacheKey)
        ? cacheKey
        : [cacheKey]),
    params ? JSON.stringify(params) : undefined,
  ].filter((part) => part !== undefined);
}

export function useQueryClient<
  TQueryClient extends AppServerQueryClient = AppServerQueryClient,
>(): TQueryClient {
  return useReactQueryClient() as TQueryClient;
}
