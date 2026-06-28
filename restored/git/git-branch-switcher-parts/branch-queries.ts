// Restored from ref/webview/assets/git-branch-switcher-BokkKYIT.js

import { once } from "../../runtime/commonjs-interop";
import {
  appScope,
  createGitRootQueryOptions,
  createHostQueryOptions,
  createQuerySignalFamily,
  getChunkModuleExports,
  getHostCacheKey,
  initAppScope,
  initGitBranchQueryRuntime,
  initGitQueryKeyHelpers,
  initGitRootQueryRuntime,
  initHostQueryRuntime,
  initIntlMessageRuntime,
  initQueryDurationConstants,
  initReactQueryRuntime,
  initScopeRuntime,
  initVscodeApiBridge,
  normalizeWorkspacePath,
  queryDurations,
  updateGitMetadataCache,
  useAppServerMutation,
  useGitAvailabilityQuery,
  useGitOperationQuery,
  useQueryClient,
} from "../../runtime/git-branch-switcher-runtime";
import type {
  CheckoutBranchPayload,
  CreateBranchPayload,
  GitMutationResponse,
  GitOperationResult,
  HostConfig,
  MutationCallbacks,
  MutationResult,
  QueryOptions,
} from "./types";

type GitRootQueryRequest = {
  cwd?: string | null;
  enabled: boolean;
  hostConfig: HostConfig;
  operationSource: string;
};

type BranchSearchQueryRequest = GitRootQueryRequest & {
  query: string;
};

type QuerySignalContext = {
  get: (querySignal: unknown, request: GitRootQueryRequest) => GitOperationResult<{ root: string }>;
};

type BranchListResponse = {
  branches: string[];
};

type GitAvailability = {
  commonDir: string;
  root: string;
};

function serializeGitRootQueryKey({
  cwd,
  enabled,
  hostConfig,
  operationSource,
}: GitRootQueryRequest): string {
  return JSON.stringify({
    cwd: cwd ?? null,
    enabled,
    hostConfig,
    operationSource,
  });
}

function serializeBranchSearchQueryKey({
  cwd,
  enabled,
  hostConfig,
  operationSource,
  query,
}: BranchSearchQueryRequest): string {
  return JSON.stringify({
    cwd: cwd ?? null,
    enabled,
    hostConfig,
    operationSource,
    query,
  });
}

function selectBranches(response: BranchListResponse): string[] {
  return response.branches;
}

let currentGitRootQuery: unknown;
export let gitBranchSearchQuery: unknown;

export const initGitBranchSearchQuery = once(() => {
  initScopeRuntime();
  initAppScope();
  initQueryDurationConstants();
  initGitBranchQueryRuntime();
  initHostQueryRuntime();
  initGitRootQueryRuntime();

  currentGitRootQuery = createQuerySignalFamily(
    appScope,
    ({ cwd, enabled, hostConfig, operationSource }: GitRootQueryRequest) =>
      createGitRootQueryOptions(cwd, getHostCacheKey(hostConfig), hostConfig, operationSource, {
        enabled,
      }),
    {
      key: serializeGitRootQueryKey,
    },
  );

  gitBranchSearchQuery = createQuerySignalFamily(
    appScope,
    (
      { cwd, enabled, hostConfig, operationSource, query }: BranchSearchQueryRequest,
      { get }: QuerySignalContext,
    ) => {
      const gitRoot = get(currentGitRootQuery, {
        cwd,
        enabled,
        hostConfig,
        operationSource,
      }).data;

      return createHostQueryOptions(
        "search-branches",
        gitRoot,
        gitRoot == null
          ? null
          : {
              root: gitRoot.root,
              operationSource,
              query,
              limit: 20,
            },
        getHostCacheKey(hostConfig),
        hostConfig,
        {
          enabled,
          select: selectBranches,
          staleTime: queryDurations.FIVE_SECONDS,
        },
      );
    },
    {
      key: serializeBranchSearchQueryKey,
    },
  );
});

export const initGitStatusSummaryQuery = once(() => {
  getChunkModuleExports();
  initIntlMessageRuntime();
  initQueryDurationConstants();
  initGitBranchQueryRuntime();
});

export function useGitStatusSummaryQuery(
  cwd: string | null | undefined,
  hostConfig: HostConfig,
  operationSource: string,
  options: QueryOptions = {},
): GitOperationResult {
  const { staleTime, ...restOptions } = options;
  const normalizedCwd = normalizeWorkspacePath(String(cwd));
  const request = {
    cwd: normalizedCwd,
    operationSource,
  };

  return useGitOperationQuery(cwd, hostConfig, "status-summary", request, operationSource, {
    staleTime: staleTime ?? queryDurations.FIVE_SECONDS,
    ...restOptions,
  }) as GitOperationResult;
}

export const initGitRecentBranchesQuery = once(() => {
  getChunkModuleExports();
  initQueryDurationConstants();
  initGitBranchQueryRuntime();
});

export function useGitRecentBranchesQuery(
  cwd: string | null | undefined,
  hostConfig: HostConfig,
  operationSource: string,
  options: QueryOptions = {},
): GitOperationResult<string[]> {
  const buildRecentBranchesRequest = ({ root }: { root: string }) => ({
    operationSource,
    root,
    limit: 100,
  });

  return useGitOperationQuery(cwd, hostConfig, "recent-branches", buildRecentBranchesRequest, operationSource, {
    select: selectBranches,
    staleTime: queryDurations.FIVE_SECONDS,
    ...options,
  }) as GitOperationResult<string[]>;
}

export const initCheckoutBranchMutation = once(() => {
  getChunkModuleExports();
  initReactQueryRuntime();
  initGitBranchQueryRuntime();
  initGitRootQueryRuntime();
  initGitQueryKeyHelpers();
  initVscodeApiBridge();
});

export function useCheckoutBranchMutation(
  cwd: string | null | undefined,
  hostConfig: HostConfig,
  operationSource: string,
  callbacks?: MutationCallbacks<CheckoutBranchPayload, GitMutationResponse>,
): MutationResult<CheckoutBranchPayload, GitMutationResponse> {
  const queryClient = useQueryClient();
  const { data: availability } = useGitAvailabilityQuery(cwd, hostConfig, operationSource) as GitOperationResult<GitAvailability>;
  const hostKey = getHostCacheKey(hostConfig);
  const mutationKey = ["vscode", "git-checkout-branch", cwd ?? null, hostConfig.id];

  const onSettled = async (
    result: GitMutationResponse,
    error: unknown,
    variables: CheckoutBranchPayload | undefined,
    context: unknown,
    mutation: unknown,
  ) => {
    if (availability != null && result?.status === "success") {
      updateGitMetadataCache(
        queryClient,
        {
          commonDir: availability.commonDir,
          root: availability.root,
        },
        {
          changeType: "head",
          hostKey,
        },
      );
    }

    await callbacks?.onSettled?.(result, error, variables, context, mutation);
  };

  const mutation = useAppServerMutation("git-checkout-branch", {
    source: operationSource,
    mutationKey,
    ...callbacks,
    onSettled,
  }) as MutationResult<CheckoutBranchPayload, GitMutationResponse>;

  return {
    ...mutation,
    mutate(payload: CheckoutBranchPayload, options?: unknown) {
      mutation.mutate(
        {
          ...payload,
          hostId: hostConfig.id,
        },
        options,
      );
    },
    mutateAsync(payload: CheckoutBranchPayload, options?: unknown) {
      return mutation.mutateAsync(
        {
          ...payload,
          hostId: hostConfig.id,
        },
        options,
      );
    },
  };
}

export const initCreateBranchMutation = once(() => {
  getChunkModuleExports();
  initReactQueryRuntime();
  initGitBranchQueryRuntime();
  initGitRootQueryRuntime();
  initGitQueryKeyHelpers();
  initVscodeApiBridge();
});

export function useCreateBranchMutation(
  cwd: string | null | undefined,
  hostConfig: HostConfig,
  operationSource: string,
  callbacks?: MutationCallbacks<CreateBranchPayload, GitMutationResponse>,
): MutationResult<CreateBranchPayload, GitMutationResponse> {
  const queryClient = useQueryClient();
  const { data: availability } = useGitAvailabilityQuery(cwd, hostConfig, operationSource) as GitOperationResult<GitAvailability>;
  const hostKey = getHostCacheKey(hostConfig);
  const mutationKey = ["vscode", "git-create-branch", cwd ?? null, hostConfig.id];

  const onSettled = async (
    result: GitMutationResponse,
    error: unknown,
    variables: CreateBranchPayload | undefined,
    context: unknown,
    mutation: unknown,
  ) => {
    if (availability != null) {
      updateGitMetadataCache(queryClient, availability, {
        changeType: variables?.mode === "synced" ? "synced-branch" : "head",
        hostKey,
      });
    }

    await callbacks?.onSettled?.(result, error, variables, context, mutation);
  };

  const mutation = useAppServerMutation("git-create-branch", {
    source: operationSource,
    mutationKey,
    ...callbacks,
    onSettled,
  }) as MutationResult<CreateBranchPayload, GitMutationResponse>;

  return {
    ...mutation,
    mutate(payload: CreateBranchPayload, options?: unknown) {
      mutation.mutate(
        {
          ...payload,
          hostId: hostConfig.id,
        },
        options,
      );
    },
    mutateAsync(payload: CreateBranchPayload, options?: unknown) {
      return mutation.mutateAsync(
        {
          ...payload,
          hostId: hostConfig.id,
        },
        options,
      );
    },
  };
}
