// Restored from ref/webview/assets/git-branch-switcher-Cb06tz5G.js

import { ws as createQuerySignalFamily } from "../../ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~dv5z3ftk-BhBbJNnt.js";
import {
  Button,
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogLayout,
  DialogSection,
  Dropdown,
  DropdownMenu,
  FormattedMessage,
  initAppDialog,
  initButtonComponentPrimitives,
  initDialogLayoutComponents,
  initDropdownMenuPrimitives,
  initIntlRuntime,
  useIntl,
} from "../boundaries/current-ref/appg-thread-shared-producer";
import {
  gitSettingDefinitions as branchSettingKeys,
  normalizeWorkspacePath,
} from "../boundaries/src-l0hb-mz-p";
import { initPlusIcon, PlusIcon } from "../icons/plus-icon";
import { localConversationTitleSignal } from "../threads/local-conversation-title-signals";
import {
  initReactQueryRuntime,
  useAppServerMutation,
  useQueryClient,
} from "./app-server-mutation-runtime";
import { appScope, initAppScope, initScopeRuntime } from "./app-scope-runtime";
import { useScope, useScopedValue } from "./app-scope-hooks";
import { initConversationStateRuntime as initConversationStateSelectors } from "./conversation-state-runtime";
import {
  initConversationBranchOverrideRuntime,
  setConversationBranchOverride,
} from "./git-query/conversation-branch-override";
import { useGlobalSettingValue } from "./git-query/global-setting-value";
import {
  updateGitMetadataCache,
  useGitOperationQuery,
} from "./git-query/operation-query";
import {
  createHostQueryOptions,
  createGitRootQueryOptions,
  initGitRootQueryRuntime,
} from "./git-query/query-options";
import { getHostCacheKey } from "./git-query/query-keys";
import {
  initGitBranchQueryRuntime,
  initGitQueryKeyHelpers,
  useGitAvailabilityQuery,
} from "./git-query-runtime";
import {
  initHostQueryRuntime,
  initQueryDurationConstants,
  queryDurations,
  useDebouncedValue,
} from "./host-query-runtime";
import { initIntlMessageRuntime } from "./intl-message-runtime";
import { initVscodeBridgeRuntime as initVscodeApiBridge } from "./platform-content-runtime";
import {
  getChunkModuleExports,
  initReactRuntime,
} from "./shared-utility-runtime";
import { initToastRuntime, toastSignal } from "./toast-runtime";

export function initSwitchRuntime(): void {}

export function initWorkspaceQueryRuntime(): void {
  // Current git-branch-switcher initializes workspace/git queries through the specific query runtimes below.
}

export {
  appScope,
  branchSettingKeys,
  Button,
  createGitRootQueryOptions,
  createHostQueryOptions,
  createQuerySignalFamily,
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogLayout,
  DialogSection,
  Dropdown,
  DropdownMenu,
  FormattedMessage,
  getChunkModuleExports,
  getHostCacheKey,
  initAppDialog,
  initAppScope,
  initButtonComponentPrimitives,
  initConversationBranchOverrideRuntime,
  initConversationStateSelectors,
  initDialogLayoutComponents,
  initDropdownMenuPrimitives,
  initGitBranchQueryRuntime,
  initGitQueryKeyHelpers,
  initGitRootQueryRuntime,
  initHostQueryRuntime,
  initIntlMessageRuntime,
  initIntlRuntime,
  initPlusIcon,
  initQueryDurationConstants,
  initReactQueryRuntime,
  initReactRuntime,
  initScopeRuntime,
  initToastRuntime,
  initVscodeApiBridge,
  localConversationTitleSignal,
  normalizeWorkspacePath,
  PlusIcon,
  queryDurations,
  setConversationBranchOverride,
  toastSignal,
  updateGitMetadataCache,
  useAppServerMutation,
  useDebouncedValue,
  useGitAvailabilityQuery,
  useGitOperationQuery,
  useGlobalSettingValue,
  useIntl,
  useQueryClient,
  useScope,
  useScopedValue,
};

export {
  Dl as initCurrentGitBranchSignal,
  Tl as currentGitBranchSignal,
} from "../vendor/projects-app-shared-runtime";

export {
  Dl as CreateBranchDialogGraphic,
  Jl as CommitChangesBeforeBranchSwitchPanel,
  Kl as initCommitChangesBeforeBranchSwitchPanel,
  Ol as initBranchSwitchReviewPanelRuntime,
  Xl as buildDefaultBranchName,
  Yl as initDefaultBranchNameRuntime,
  Zl as initBranchSearchMenuMessages,
  au as initBranchSearchMenuRuntime,
  bl as initBranchSwitchReviewRuntime,
  cu as initCommitFlowRuntime,
  ou as findFileDiffStats,
  ql as useDefaultBranchQuery,
  ru as branchSwitchReviewTargetSignal,
  su as mergeReviewSummaryStats,
  yl as BranchSearchMenu,
} from "../vendor/profile-page-runtime";
