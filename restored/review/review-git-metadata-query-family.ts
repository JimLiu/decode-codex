// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Git metadata keyed query-family builder for review and diff queries.

import {
  createScopedQueryAtom,
  createParametricAtom,
  reviewMetadataScope,
  disabledQueryResult,
  pendingQueryResult,
  createGitQueryOptions,
  getHostKey,
  gitMetadataReadinessAtom,
  gitMetadataFromCwdQuery,
} from "../boundaries/onboarding-commons-externals.facade";

interface GitMetadataQueryConfig {
  method: string;
  getParams: (metadata: any) => unknown;
  getOptions?: (metadata: any) => Record<string, unknown>;
}

// Builds a trio of scoped query atoms for a git operation keyed by repo metadata:
//   queryByMetadata$ - keyed directly by {commonDir, root}
//   fromMetadata$    - gated on git-metadata readiness before delegating to queryByMetadata$
//   fromCwd$         - resolves repo metadata from a cwd first, then delegates to fromMetadata$
export function createGitMetadataQueryFamily({
  method,
  getParams,
  getOptions,
}: GitMetadataQueryConfig) {
  const queryByMetadata = createScopedQueryAtom(
    reviewMetadataScope,
    (metadata: any) =>
      createGitQueryOptions(
        method,
        { commonDir: metadata.commonDir, root: metadata.root },
        getParams(metadata),
        getHostKey(metadata.hostConfig),
        metadata.hostConfig,
        { enabled: metadata.enabled, ...getOptions?.(metadata) },
      ),
    { excludeFieldsFromKey: ["operationSource"] },
  );

  const fromMetadata = createParametricAtom(
    reviewMetadataScope,
    (params: any, { get }: { get: (atom: unknown, arg?: unknown) => any }) => (
      get(
        get(gitMetadataReadinessAtom, {
          commonDir: params.commonDir,
          enabled: params.enabled,
          hostConfig: params.hostConfig,
          operationSource: params.operationSource,
          root: params.root,
        }),
      ),
      get(queryByMetadata, params)
    ),
    { excludeFieldsFromKey: ["operationSource"] },
  );

  return {
    fromCwd$: createParametricAtom(
      reviewMetadataScope,
      (
        params: any,
        { get }: { get: (atom: unknown, arg?: unknown) => any },
      ) => {
        if (!params.enabled || params.cwd == null) return disabledQueryResult();
        const cwdMetadataQuery = get(gitMetadataFromCwdQuery, {
          cwd: params.cwd,
          enabled: params.enabled,
          hostConfig: params.hostConfig,
          operationSource: params.operationSource,
          watchForGitInit: false,
        });
        const cwdMetadata = cwdMetadataQuery.data ?? null;
        if (cwdMetadata == null) return pendingQueryResult(cwdMetadataQuery);
        const { cwd, ...rest } = params;
        return get(fromMetadata, {
          ...rest,
          commonDir: cwdMetadata.commonDir,
          root: cwdMetadata.root,
        });
      },
      { excludeFieldsFromKey: ["operationSource"] },
    ),
    fromMetadata$: fromMetadata,
    queryByMetadata$: queryByMetadata,
  };
}
