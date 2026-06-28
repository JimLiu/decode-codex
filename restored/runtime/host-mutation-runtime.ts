// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// Host-scoped mutation hook facade.
import {
  Bh as useHostMutationRaw,
} from "../vendor/projects-app-shared-runtime";

export type HostMutationOptions<TData, TVariables> = {
  onError?: (error: unknown, variables: TVariables, context: unknown) => void;
  onSuccess?: (data: TData, variables: TVariables, context: unknown) => void;
  onSettled?: (
    data: TData | undefined,
    error: unknown,
    variables: TVariables,
    context: unknown,
  ) => void;
};

export type HostMutation<
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
    options?: HostMutationOptions<TData, TVariables>,
  ) => void;
  mutateAsync: (
    variables: TVariables,
    options?: HostMutationOptions<TData, TVariables>,
  ) => Promise<TData>;
  reset?: () => void;
};

export function useHostMutation<
  TData = unknown,
  TVariables = Record<string, unknown>,
>(
  method: string,
  hostConfig: unknown,
  options?: HostMutationOptions<TData, TVariables>,
): HostMutation<TData, TVariables> {
  return useHostMutationRaw(method, hostConfig, options) as HostMutation<
    TData,
    TVariables
  >;
}
