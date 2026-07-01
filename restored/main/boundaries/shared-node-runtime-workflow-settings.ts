// Restored from ref/.vite/build/src-CoIhwwHr.js
// Git, browser, and worktree desktop setting definitions.
import { desktopGlobalStateKeys } from "./shared-node-runtime-global-state";
import {
  booleanSchema,
  enumSchema,
  globalStateSetting,
  nullableStringSchema,
  numberSchema,
  stringSchema,
} from "./shared-node-runtime-setting-schema";

function createGitSettingDefinitions() {
  return {
    branchPrefix: globalStateSetting({
      agentAccess: "read-write",
      default: "codex/",
      description: "Prefix for branches Codex creates",
      key: desktopGlobalStateKeys.GIT_BRANCH_PREFIX,
      schema: stringSchema,
    }),
    alwaysForcePush: globalStateSetting({
      agentAccess: "read-write",
      default: false,
      description: "Whether Codex always force-pushes branches",
      key: desktopGlobalStateKeys.GIT_ALWAYS_FORCE_PUSH,
      schema: booleanSchema,
    }),
    createPullRequestAsDraft: globalStateSetting({
      agentAccess: "read-write",
      default: true,
      description: "Whether Codex creates pull requests as drafts",
      key: desktopGlobalStateKeys.GIT_CREATE_PULL_REQUEST_AS_DRAFT,
      schema: booleanSchema,
    }),
    pullRequestMergeMethod: globalStateSetting({
      agentAccess: "read-write",
      default: "merge",
      description: "Preferred pull request merge method",
      key: desktopGlobalStateKeys.GIT_PULL_REQUEST_MERGE_METHOD,
      schema: enumSchema(["merge", "squash"] as const),
    }),
    commitInstructions: globalStateSetting({
      agentAccess: "read-only",
      default: "",
      description: "Custom git commit instructions",
      key: desktopGlobalStateKeys.GIT_COMMIT_INSTRUCTIONS,
      schema: stringSchema,
    }),
    pullRequestInstructions: globalStateSetting({
      agentAccess: "read-only",
      default: "",
      description: "Custom pull request instructions",
      key: desktopGlobalStateKeys.GIT_PR_INSTRUCTIONS,
      schema: stringSchema,
    }),
  };
}

function createBrowserSettingDefinitions() {
  return {
    downloadDirectory: globalStateSetting({
      agentAccess: "hidden",
      default: null,
      description:
        "Folder where files downloaded by the in-app browser are saved",
      key: desktopGlobalStateKeys.BROWSER_DOWNLOAD_DIRECTORY,
      schema: nullableStringSchema,
    }),
    promptForDownloadLocation: globalStateSetting({
      agentAccess: "hidden",
      default: false,
      description:
        "Whether manual browser downloads ask where to save each file",
      key: desktopGlobalStateKeys.BROWSER_DOWNLOAD_PROMPT_ENABLED,
      schema: booleanSchema,
    }),
  };
}

function createWorktreeSettingDefinitions() {
  return {
    autoCleanupEnabled: globalStateSetting({
      agentAccess: "read-write",
      default: true,
      description: "Whether Codex automatically cleans up old worktrees",
      key: desktopGlobalStateKeys.WORKTREE_AUTO_CLEANUP_ENABLED,
      schema: booleanSchema,
    }),
    keepCount: globalStateSetting({
      agentAccess: "read-write",
      default: 15,
      description: "How many recent worktrees Codex keeps",
      key: desktopGlobalStateKeys.WORKTREE_KEEP_COUNT,
      schema: numberSchema,
    }),
  };
}

export const gitSettingDefinitions = createGitSettingDefinitions();
export const browserSettingDefinitions = createBrowserSettingDefinitions();
export const worktreeSettingDefinitions = createWorktreeSettingDefinitions();
