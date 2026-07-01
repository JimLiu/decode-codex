// Restored from ref/.vite/build/src-CoIhwwHr.js
// Desktop global-state keys and their default values.

export const desktopGlobalStateKeys = {
  DESKTOP_FIRST_SEEN_AT_MS: "desktop-first-seen-at-ms",
  WORKSPACE_ROOT_OPTIONS: "electron-saved-workspace-roots",
  WORKSPACE_ROOT_LABELS: "electron-workspace-root-labels",
  PERSISTED_ATOM_STATE: "persisted-atom-state",
  DOCK_ICON_PREFERENCE: "dock-icon-preference",
  REDUCED_MOTION_PREFERENCE: "reduced-motion-preference",
  BROWSER_DOWNLOAD_DIRECTORY: "browser-download-directory",
  BROWSER_DOWNLOAD_PROMPT_ENABLED: "browser-download-prompt-enabled",
  WORKTREE_AUTO_CLEANUP_ENABLED: "worktree-auto-cleanup-enabled",
  WORKTREE_KEEP_COUNT: "worktree-keep-count",
  AMBIENT_SUGGESTIONS_ENABLED: "ambient-suggestions-enabled",
  IA_WAITING_ON_USER_FOLLOWUP_SECONDS: "ia-waiting-on-user-followup-seconds",
  GLOBAL_DICTATION_KEEP_VISIBLE: "global-dictation-keep-visible",
  HOTKEY_WINDOW_PROJECTLESS_DEFAULT_ENABLED:
    "hotkey-window-projectless-default-enabled",
  CODEX_MOBILE_SETUP_COMPLETED: "codex-mobile-has-connected-device",
  ADDED_REMOTE_CONTROL_ENV_IDS: "added-remote-control-env-ids",
  PROJECT_APPEARANCES: "project-appearances",
  SIDEBAR_PROJECT_THREAD_ORDERS: "sidebar-project-thread-orders",
  GIT_ALWAYS_FORCE_PUSH: "git-always-force-push",
  GIT_CREATE_PULL_REQUEST_AS_DRAFT: "git-create-pull-request-as-draft",
  GIT_PULL_REQUEST_MERGE_METHOD: "git-pull-request-merge-method",
  GIT_BRANCH_PREFIX: "git-branch-prefix",
  GIT_COMMIT_INSTRUCTIONS: "git-commit-instructions",
  GIT_PR_INSTRUCTIONS: "git-pr-instructions",
};

const defaultGlobalStateValues: Record<string, unknown> = {
  [desktopGlobalStateKeys.GIT_ALWAYS_FORCE_PUSH]: false,
  [desktopGlobalStateKeys.GIT_CREATE_PULL_REQUEST_AS_DRAFT]: true,
  [desktopGlobalStateKeys.GIT_PULL_REQUEST_MERGE_METHOD]: "merge",
  [desktopGlobalStateKeys.GIT_BRANCH_PREFIX]: "codex/",
  [desktopGlobalStateKeys.GIT_COMMIT_INSTRUCTIONS]: "",
  [desktopGlobalStateKeys.GIT_PR_INSTRUCTIONS]: "",
  [desktopGlobalStateKeys.SIDEBAR_PROJECT_THREAD_ORDERS]: {},
  [desktopGlobalStateKeys.PROJECT_APPEARANCES]: {},
  [desktopGlobalStateKeys.ADDED_REMOTE_CONTROL_ENV_IDS]: [],
  [desktopGlobalStateKeys.CODEX_MOBILE_SETUP_COMPLETED]: false,
  [desktopGlobalStateKeys.AMBIENT_SUGGESTIONS_ENABLED]: true,
  [desktopGlobalStateKeys.IA_WAITING_ON_USER_FOLLOWUP_SECONDS]: 1800,
  [desktopGlobalStateKeys.HOTKEY_WINDOW_PROJECTLESS_DEFAULT_ENABLED]: false,
  [desktopGlobalStateKeys.GLOBAL_DICTATION_KEEP_VISIBLE]: false,
  [desktopGlobalStateKeys.WORKTREE_AUTO_CLEANUP_ENABLED]: true,
  [desktopGlobalStateKeys.WORKTREE_KEEP_COUNT]: 15,
  [desktopGlobalStateKeys.BROWSER_DOWNLOAD_DIRECTORY]: null,
  [desktopGlobalStateKeys.BROWSER_DOWNLOAD_PROMPT_ENABLED]: false,
  [desktopGlobalStateKeys.DOCK_ICON_PREFERENCE]: "app-default",
  [desktopGlobalStateKeys.REDUCED_MOTION_PREFERENCE]: "system",
};

export function getDefaultGlobalStateValue(key: string): unknown {
  return defaultGlobalStateValues[key];
}
