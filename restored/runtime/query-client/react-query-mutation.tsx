// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~dv5z3ftk-BhBbJNnt.js
// Mutation hook compatible with the current bundled TanStack Query surface.
import * as React from "react";

import type {
  MutationOptions,
  MutationResult,
  MutationStatus,
} from "./react-query-types";

export function useMutation<TVariables = unknown, TResult = unknown>(
  options: MutationOptions<TVariables, TResult>,
): MutationResult<TVariables, TResult> {
  const [state, setState] = React.useState<{
    data: TResult | undefined;
    error: unknown;
    status: MutationStatus;
    variables: TVariables | undefined;
  }>({
    data: undefined,
    error: null,
    status: "idle",
    variables: undefined,
  });

  const reset = React.useCallback(() => {
    setState({
      data: undefined,
      error: null,
      status: "idle",
      variables: undefined,
    });
  }, []);

  const mutateAsync = React.useCallback(
    async (variables: TVariables) => {
      const context = await options.onMutate?.(variables);
      setState({
        data: undefined,
        error: null,
        status: "pending",
        variables,
      });
      try {
        const data = (await options.mutationFn?.(variables)) as TResult;
        setState({ data, error: null, status: "success", variables });
        options.onSuccess?.(data, variables, context);
        options.onSettled?.(data, null, variables, context);
        return data;
      } catch (error) {
        setState({
          data: undefined,
          error,
          status: "error",
          variables,
        });
        options.onError?.(error, variables, context);
        options.onSettled?.(undefined, error, variables, context);
        throw error;
      }
    },
    [options],
  );

  const mutate = React.useCallback(
    (variables: TVariables) => {
      void mutateAsync(variables);
    },
    [mutateAsync],
  );

  return {
    ...state,
    isError: state.status === "error",
    isIdle: state.status === "idle",
    isPending: state.status === "pending",
    isSuccess: state.status === "success",
    mutate,
    mutateAsync,
    reset,
  };
}
