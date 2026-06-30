// Restored from ref/webview/assets/use-git-config-value-Bnyud4Db.js
// Also matches ref/webview/assets/use-git-config-value-Bbxa9eSu.js.
// use-git-config-value-Bnyud4Db chunk restored from the Codex webview bundle.
import { useMemo } from "react";
import { _appScopeA as useScopedSignalValue } from "../boundaries/app-scope";
import { resolveGitQueryOptions } from "../boundaries/thread-context-inputs.facade";
import { gitConfigValueQuerySignal } from "../github/git-config-value-query-b-kg-flj-zw";

type GitQueryOptions = {
  enabled?: boolean;
  refetchOnMount?: "always" | unknown;
  refetchOnWindowFocus?: boolean;
  staleTime?: number | null;
};

export function initUseGitConfigValueChunk() {}

export function useGitConfigValue(
  cwd: string | null | undefined,
  hostConfig: unknown,
  key: string,
  scope: unknown,
  operationSource: string,
  options?: GitQueryOptions,
) {
  const cwdOrNull = cwd ?? null;
  const resolvedQueryOptions = useMemo(
    () => resolveGitQueryOptions(options, null),
    [options],
  );
  const queryParams = useMemo(
    () => ({
      cwd: cwdOrNull,
      hostConfig,
      key,
      operationSource,
      scope,
      ...resolvedQueryOptions,
    }),
    [cwdOrNull, hostConfig, key, operationSource, scope, resolvedQueryOptions],
  );
  return useScopedSignalValue(gitConfigValueQuerySignal, queryParams);
}
