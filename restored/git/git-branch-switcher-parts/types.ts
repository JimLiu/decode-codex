// Restored from ref/webview/assets/git-branch-switcher-BokkKYIT.js

export type HostConfig = {
  id: string;
  [key: string]: unknown;
};

export type QueryOptions = Record<string, unknown>;

export type GitOperationResult<TData = unknown> = {
  data?: TData;
  isError?: boolean;
  isFetching?: boolean;
  isLoading?: boolean;
  isPending?: boolean;
  isSuccess?: boolean;
  refetch?: () => Promise<unknown> | unknown;
};

export type MutationCallbacks<TPayload = unknown, TResult = unknown> = {
  onSettled?: (
    result: TResult,
    error: unknown,
    variables: TPayload | undefined,
    context: unknown,
    mutation: unknown,
  ) => Promise<void> | void;
  [key: string]: unknown;
};

export type MutationResult<TPayload = unknown, TResult = unknown> = {
  isPending?: boolean;
  mutate: (payload: TPayload, options?: unknown) => void;
  mutateAsync: (payload: TPayload, options?: unknown) => Promise<TResult>;
  [key: string]: unknown;
};

export type CheckoutBranchPayload = {
  cwd: string;
  branch: string;
  hostId?: string;
};

export type CreateBranchPayload = {
  cwd: string;
  branch: string;
  mode: "synced" | "worktree";
  failIfExists?: boolean;
  hostId?: string;
};

export type GitMutationResponse =
  | {
      status: "success";
      [key: string]: unknown;
    }
  | {
      status: "error";
      error: string;
      errorType?: string;
      conflictedPaths?: string[];
      [key: string]: unknown;
    };

export type BranchSwitchNextAction =
  | {
      type: "checkout";
      branch: string;
    }
  | {
      type: "create-and-checkout";
      branch: string;
    };
