// Restored from ref/webview/assets/git-query-signal--KCsTEIa.js
// git-query-signal--KCsTEIa chunk restored from the Codex webview bundle.
import {
  _appScopeL as createComputedSignalFamily,
  _appScopeP as createQuerySignalFamily,
  appScopeRoot,
} from "../boundaries/app-scope";
import {
  createGitQueryOptions,
  disabledGitQueryResult,
  gitRepositoryWatcherSignal,
  gitStableMetadataQuery,
  normalizeHostConfigForWorktreeKey,
  pendingGitQueryResult,
} from "../boundaries/thread-context-inputs.facade";
type AppScopeGetter = {
  get<TValue = unknown>(signal: unknown, params?: unknown): TValue;
};
type GitQueryMetadata = {
  commonDir: string;
  enabled: boolean;
  hostConfig: unknown;
  operationSource: string;
  root: string;
};
type GitQueryFromCwdParams = Omit<GitQueryMetadata, "commonDir" | "root"> & {
  cwd?: string | null;
};
type GitStableMetadata = {
  commonDir: string;
  root: string;
};
type QueryResultLike<TData> = {
  data?: TData | null;
};
type GitQueryFactoryConfig<TMetadata extends GitQueryMetadata> = {
  getOptions?: (metadata: TMetadata) => Record<string, unknown> | undefined;
  getParams: (metadata: TMetadata) => unknown;
  method: string;
};
export function gitQuerySignal<TMetadata extends GitQueryMetadata>({
  getOptions,
  getParams,
  method,
}: GitQueryFactoryConfig<TMetadata>) {
  const queryByMetadata$ = createQuerySignalFamily(
    appScopeRoot,
    (metadata: TMetadata) =>
      createGitQueryOptions(
        method,
        {
          commonDir: metadata.commonDir,
          root: metadata.root,
        },
        getParams(metadata),
        normalizeHostConfigForWorktreeKey(metadata.hostConfig),
        metadata.hostConfig,
        {
          enabled: metadata.enabled,
          ...getOptions?.(metadata),
        },
      ),
    {
      excludeFieldsFromKey: ["operationSource"],
    },
  );
  const fromMetadata$ = createComputedSignalFamily(
    appScopeRoot,
    (metadata: TMetadata, { get }: AppScopeGetter) => {
      get(
        get(gitRepositoryWatcherSignal, {
          commonDir: metadata.commonDir,
          enabled: metadata.enabled,
          hostConfig: metadata.hostConfig,
          operationSource: metadata.operationSource,
          root: metadata.root,
        }),
      );
      return get(queryByMetadata$, metadata);
    },
    {
      excludeFieldsFromKey: ["operationSource"],
    },
  );
  return {
    fromCwd$: createComputedSignalFamily(
      appScopeRoot,
      (params: GitQueryFromCwdParams, { get }: AppScopeGetter) => {
        if (!params.enabled || params.cwd == null) {
          return disabledGitQueryResult();
        }
        const metadataQuery = get<QueryResultLike<GitStableMetadata>>(
          gitStableMetadataQuery,
          {
            cwd: params.cwd,
            enabled: params.enabled,
            hostConfig: params.hostConfig,
            operationSource: params.operationSource,
            watchForGitInit: false,
          },
        );
        const metadata = metadataQuery.data ?? null;
        if (metadata == null) {
          return pendingGitQueryResult(metadataQuery);
        }
        const { cwd: _cwd, ...metadataParams } = params;
        return get(fromMetadata$, {
          ...metadataParams,
          commonDir: metadata.commonDir,
          root: metadata.root,
        } as TMetadata);
      },
      {
        excludeFieldsFromKey: ["operationSource"],
      },
    ),
    fromMetadata$,
    queryByMetadata$,
  };
}
