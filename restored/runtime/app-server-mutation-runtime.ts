// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// React Query mutation helpers for app-server backed local features.
import {
  AV as initReactQueryRuntimeRaw,
  MV as useMutationRaw,
  tP as useAppServerMutationRaw,
  XN as createQueryKeyRaw,
  zV as useQueryClientRaw,
} from "../vendor/appg-thread-shared-runtime";
import { initVscodeBridgeRuntime } from "./platform-content-runtime";

export type AppServerMutationOptions<TData, TVariables> = {
  onError?: (error: unknown, variables: TVariables, context: unknown) => void;
  onSuccess?: (data: TData, variables: TVariables, context: unknown) => void;
  onSettled?: (
    data: TData | undefined,
    error: unknown,
    variables: TVariables,
    context: unknown,
  ) => void;
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

export type AppServerQueryClient = {
  invalidateQueries: (
    filters?: { queryKey?: unknown; [key: string]: unknown },
    options?: unknown,
  ) => Promise<unknown> | unknown;
};

export function initAppServerMutationRuntime(): void {
  initReactQueryRuntime();
  initVscodeBridgeRuntime();
}

export function initReactQueryRuntime(): void {
  initReactQueryRuntimeRaw();
}

export function useAppServerMutation<
  TData = unknown,
  TVariables = Record<string, unknown>,
>(
  mutationName: string,
  options?: unknown,
): AppServerMutation<TData, TVariables> {
  return (
    options === undefined
      ? useAppServerMutationRaw(mutationName)
      : useAppServerMutationRaw(mutationName, options)
  ) as AppServerMutation<TData, TVariables>;
}

export function useMutation<
  TData = unknown,
  TVariables = Record<string, unknown>,
>(options: unknown): AppServerMutation<TData, TVariables> {
  return useMutationRaw(options) as AppServerMutation<TData, TVariables>;
}

export function createQueryKey(
  queryName: string,
  params?: Record<string, unknown> | null,
): readonly unknown[] {
  return createQueryKeyRaw(queryName, params) as readonly unknown[];
}

export function useQueryClient<
  TQueryClient extends AppServerQueryClient = AppServerQueryClient,
>(): TQueryClient {
  return useQueryClientRaw() as TQueryClient;
}
