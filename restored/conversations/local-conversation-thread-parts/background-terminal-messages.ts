// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
import { defineMessages } from "../../vendor/react-intl";
import type { BackgroundTerminalStatus } from "./background-terminal-state";

export const backgroundTerminalMessages = defineMessages({
  actions: {
    id: "codex.localConversation.backgroundTerminals.actions",
    defaultMessage: "Background terminal actions",
    description:
      "Accessible label for the background terminal row actions menu in the thread summary panel",
  },
  defaultLabel: {
    id: "codex.localConversation.backgroundTerminals.defaultLabel",
    defaultMessage: "Background terminal",
    description:
      "Fallback row label for a running background terminal when the command text is unavailable",
  },
  notFoundStatus: {
    id: "codex.localConversation.backgroundTerminals.notFoundStatus",
    defaultMessage: "Not found",
    description:
      "Status shown when a background terminal row no longer maps to a live process",
  },
  openOutput: {
    id: "codex.localConversation.backgroundTerminals.openOutput",
    defaultMessage: "Open output",
    description:
      "Menu item that opens the background terminal output from the thread summary panel",
  },
  start: {
    id: "codex.localConversation.backgroundTerminals.start",
    defaultMessage: "Start",
    description:
      "Menu item that starts a stopped background terminal from the thread summary panel",
  },
  restart: {
    id: "codex.localConversation.backgroundTerminals.restart",
    defaultMessage: "Restart",
    description:
      "Menu item that restarts a background terminal from the thread summary panel",
  },
  restartMissingProcessTooltip: {
    id: "codex.localConversation.backgroundTerminals.restartMissingProcessTooltip",
    defaultMessage: "Restart needs a live process id",
    description:
      "Tooltip explaining why a background terminal cannot restart because it has no live process id",
  },
  restartMissingWorkspaceTooltip: {
    id: "codex.localConversation.backgroundTerminals.restartMissingWorkspaceTooltip",
    defaultMessage: "This task needs a workspace",
    description:
      "Tooltip explaining why a background terminal cannot be started from the thread summary panel",
  },
  restartStartingTooltip: {
    id: "codex.localConversation.backgroundTerminals.restartStartingTooltip",
    defaultMessage: "This task is already starting",
    description:
      "Tooltip explaining why a starting background terminal cannot be restarted from the thread summary panel",
  },
  restartStoppingTooltip: {
    id: "codex.localConversation.backgroundTerminals.restartStoppingTooltip",
    defaultMessage: "This task is stopping",
    description:
      "Tooltip explaining why a background terminal cannot restart while stopping",
  },
  runningStatus: {
    id: "codex.localConversation.backgroundTerminals.runningStatus",
    defaultMessage: "Running",
    description:
      "Status shown for a running background terminal in the thread summary panel",
  },
  startingStatus: {
    id: "codex.localConversation.backgroundTerminals.startingStatus",
    defaultMessage: "Starting…",
    description:
      "Status shown while a background terminal is starting from the thread summary panel",
  },
  stoppedStatus: {
    id: "codex.localConversation.backgroundTerminals.stoppedStatus",
    defaultMessage: "Stopped",
    description:
      "Status shown for a stopped background terminal in the thread summary panel",
  },
  stoppingStatus: {
    id: "codex.localConversation.backgroundTerminals.stoppingStatus",
    defaultMessage: "Stopping…",
    description:
      "Status shown while a background terminal is stopping from the thread summary panel",
  },
  stop: {
    id: "codex.localConversation.backgroundTerminals.stopTask",
    defaultMessage: "Stop",
    description:
      "Menu item that stops a background terminal from the thread summary panel",
  },
  stopMissingProcessTooltip: {
    id: "codex.localConversation.backgroundTerminals.stopMissingProcessTooltip",
    defaultMessage: "No running process was found for this task",
    description:
      "Tooltip explaining why a background terminal cannot be stopped from the thread summary panel",
  },
});

export function getBackgroundTerminalStatusMessageDescriptor(
  status: BackgroundTerminalStatus,
) {
  return status === "starting"
    ? backgroundTerminalMessages.startingStatus
    : status === "stopping"
      ? backgroundTerminalMessages.stoppingStatus
      : status === "stopped"
        ? backgroundTerminalMessages.stoppedStatus
        : status === "not-found"
          ? backgroundTerminalMessages.notFoundStatus
          : backgroundTerminalMessages.runningStatus;
}
