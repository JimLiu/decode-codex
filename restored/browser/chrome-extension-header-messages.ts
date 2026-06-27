// Restored from ref/webview/assets/header-CT44CGhD.js
// Message descriptors and constants used by the Chrome extension header.
import { defineMessages } from "../vendor/react-intl";

export const CHROME_EXTENSION_POPUP_PATH = "popup.html";
export const OPEN_IN_BROWSER_BRIDGE_INITIATOR = "open_in_browser_bridge";

export const headerMessages = defineMessages({
  appSettings: {
    id: "header.appSettings",
    defaultMessage: "App settings",
    description:
      "Menu item label for opening app settings in the Codex desktop app from the Chrome extension",
  },
  backButton: {
    id: "header.back",
    defaultMessage: "Back",
    description: "Back button label for returning to the previous screen",
  },
  chromeComputerUseSettings: {
    id: "header.chromeComputerUseSettings",
    defaultMessage: "Chrome computer use settings",
    description:
      "Menu item label for opening Chrome computer use settings in the Codex desktop app from the Chrome extension",
  },
  codexForChrome: {
    id: "header.codexForChrome",
    defaultMessage: "Codex for Chrome",
    description:
      "Footer label for the Chrome extension in the more actions menu",
  },
  extensionVersion: {
    id: "header.extensionVersion",
    defaultMessage: "v{version}",
    description:
      "Footer label for the Chrome extension version in the settings menu",
  },
  moreActionsTrigger: {
    id: "header.moreActionsTrigger",
    defaultMessage: "More actions",
    description:
      "Button label for opening more actions from the Chrome extension side panel header",
  },
  newChat: {
    id: "localConversationPage.newChat",
    defaultMessage: "New chat",
    description: "Label for starting a new chat",
  },
  openInApp: {
    id: "header.openInApp",
    defaultMessage: "Open in app",
    description:
      "Menu item label for opening the active Chrome extension thread in the Codex desktop app",
  },
  recentChats: {
    id: "header.recentChats",
    defaultMessage: "Tasks",
    description: "Header label for recent tasks",
  },
});

export const recentTaskMessages = defineMessages({
  allFilter: {
    id: "codex.recentTasksMenu.recent",
    defaultMessage: "All tasks",
    description: "Menu title for recent Codex tasks",
  },
  clearSearch: {
    id: "codex.recentTasksMenu.clearSearch",
    defaultMessage: "Clear search",
    description: "Button label to clear the recent tasks menu search input",
  },
  cloudFilter: {
    id: "codex.recentTasksMenu.cloud",
    defaultMessage: "Cloud tasks",
    description: "Menu title for cloud Codex tasks",
  },
  cloudInlineError: {
    id: "codex.recentTasksMenu.errorCloud.inline",
    defaultMessage: "Failed to load cloud tasks.",
    description: "Inline error indicator for cloud tasks in recent feed",
  },
  empty: {
    id: "codex.recentTasksMenu.empty",
    defaultMessage: "No chats yet",
    description: "Empty state for recent tasks menu",
  },
  environmentAll: {
    id: "codex.recentTasksMenu.filterAll",
    defaultMessage: "All",
    description: "All environments filter option",
  },
  environmentEmpty: {
    id: "codex.environments.noEnvironmentsFound",
    defaultMessage: "No environments found",
    description: "Message shown when no Codex environments were found",
  },
  environmentFilterTitle: {
    id: "codex.recentTasksMenu.filterCloudTasks",
    defaultMessage: "Filter cloud tasks",
    description: "Title for environment filter menu in recent tasks",
  },
  environmentListError: {
    id: "codex.environments.listError",
    defaultMessage: "Failed to load environments.",
    description: "Error shown when listing environments fails",
  },
  environmentSearch: {
    id: "composer.searchEnvironments",
    defaultMessage: "Search environments",
    description: "Search environments placeholder",
  },
  environmentSearchError: {
    id: "codex.environments.searchError",
    defaultMessage: "Failed to search environments.",
    description: "Error shown when environment search fails",
  },
  environmentTooltip: {
    id: "codex.recentTasksMenu.filterTooltip",
    defaultMessage: "Filter tasks by environment",
    description: "Tooltip explaining the environment filter button",
  },
  localFilter: {
    id: "codex.recentTasksMenu.local",
    defaultMessage: "Local tasks",
    description: "Menu title for local Codex tasks",
  },
  loadingWorktree: {
    id: "recentTasks.worktreeSettingUpTitle",
    defaultMessage: "Setting up worktree",
    description: "Worktree row title while init is pending",
  },
  menuTooltip: {
    id: "codex.recentTasksMenu.tooltip",
    defaultMessage: "Task history",
    description: "Tooltip text for recent tasks menu",
  },
  retry: {
    id: "codex.common.retry",
    defaultMessage: "Retry",
    description: "Retry button",
  },
  search: {
    id: "codex.recentTasksMenu.search",
    defaultMessage: "Search recent tasks",
    description: "Label for the recent tasks menu search input",
  },
  searchEmpty: {
    id: "codex.recentTasksMenu.searchEmpty",
    defaultMessage: "No result",
    description: "Empty state for recent tasks menu search results",
  },
  taskCount: {
    id: "codex.recentTasksMenu.count",
    defaultMessage:
      "{count, plural, =0 {No tasks in progress} one {# task in progress} other {# tasks in progress}}",
    description:
      "Live region text announcing in-progress task count for recent tasks trigger",
  },
  trigger: {
    id: "codex.recentTasksMenu.trigger",
    defaultMessage:
      "Recent tasks. {count, plural, one {# in progress} other {# in progress}}",
    description: "Accessible label for opening the recent tasks menu",
  },
  unknownTaskTitle: {
    id: "codex.taskRow.title",
    defaultMessage: "New chat",
    description: "Default title for a Codex thread that doesn't have a title",
  },
  worktreeFailed: {
    id: "recentTasks.worktreeInitFailedTitle",
    defaultMessage: "Worktree init failed",
    description: "Worktree row title when the init script fails",
  },
});
