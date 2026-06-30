// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~dv5z3ftk-BhBbJNnt.js
// Current shared runtime facade for React Query hooks, Jotai hooks, Codex scope/signal helpers, and the small host/runtime utilities that still live in the same shared chunk.
import { initGlobalSettingsRuntime } from "../runtime/project-hover-card-runtime";
export {
  generalSettingDefinitions,
  isArtifactAnnotationCommentAttachment,
  isPdfCommentAttachment,
  normalizeGitRoot,
  normalizePersonality,
} from "../boundaries/src-l0hb-mz-p";
export {
  _vscodeApiC as VscodeApiError,
  initVscodeApiRuntime,
  vscodeApiL as VscodeFetchBridge,
} from "../boundaries/vscode-api";
export { CODEX_BASE64_HEADER } from "../utils/base64";

export {
  initReactQueryRuntimeChunk,
  QueryClient,
  QueryClientProvider,
  skipToken,
  useInfiniteQuery,
  useIsFetching,
  useMutation,
  useQueries,
  useQuery,
  useQueryClient,
  useSuspenseQuery,
} from "../runtime/query-client/react-query-runtime";

export {
  createAtom,
  JotaiProvider,
  useAtom,
  useAtomValue,
  useSetAtom,
  useStore,
} from "../vendor/jotai-runtime";

export {
  createDerived,
  createDerivedFamily,
  createFamily,
  createMutationFamily,
  createMutationSignal,
  createQueryFamily,
  createQuerySignal,
  createScope,
  createSignal,
  createSignalFamily,
  initScopeRuntimeChunk,
  resolveScopedFamily,
  ScopeProvider,
  ScopeQueryClientProvider,
  useScope,
  useScopedFamilyValue,
  useSignalValue,
} from "../runtime/scope-signal-runtime";

export {
  createQueryKey,
  initReactQueryRuntime as initAppServerQueryRuntime,
  useAppServerMutation,
} from "../runtime/app-server-mutation-runtime";

export {
  createHostQuerySignal,
  initQueryDurationConstants,
  queryDurations,
  useHostQuery,
} from "../runtime/host-query-runtime";

export { initSignalStateRuntime } from "../runtime/signal-state-runtime";

export { sendHostRequest } from "../runtime/host-request-runtime";

export {
  initDynamicModulePreloadRuntime,
  preloadDynamicImport,
} from "../runtime/dynamic-module-preload";

export {
  initZodRuntimeChunk,
  zodEnumSchema,
  zodObjectSchema,
  zodStringSchema,
} from "../boundaries/src-l0hb/zod-runtime";

export { parseQuotedGitPath } from "../utils/parse-diff/git-paths";

export {
  isRemoteHostConfig,
  isUrlLikePath,
  readFileContentSampleByteLimit,
} from "../runtime/publication-terms-runtime";

export { normalizeRemoteConnectionToHostConfig } from "../runtime/shared-object-host-runtime";

export { isEqualT } from "../vendor/lodash-is-equal";

export {
  globalSettingKeys,
  getProjectWritableRootsForDisplay,
  parseProjectWritableRoots,
} from "../runtime/project-hover-card-runtime";

export function initSharedAppMainRuntimeChunk(): void {
  initGlobalSettingsRuntime();
}

export { isPathInCodexWorktree } from "../vendor/worktree-path-runtime";

export { branchSettingKeys } from "../runtime/git-branch-switcher-runtime";

export { isFileUrlLikeTarget } from "../conversations/output-artifact-runtime";
