// Restored from ref/webview/assets/electron-menu-shortcuts-j6UKqTX5.js
import { CODEX_COMMANDS } from "./command-definitions";

const equivalentCommandIdGroups = [
  ["closeTab", "closeWindow"],
  ["nextTab", "nextThread"],
  ["nextTab", "nextRecentThread"],
  ["previousTab", "previousThread"],
  ["previousTab", "previousRecentThread"],
];

const commandsById = new Map();

const COMMAND_MENU_GROUP_ORDER = [
  "thread",
  "navigation",
  "panels",
  "workspace",
  "skills",
  "configure",
  "app",
];

for (const command of CODEX_COMMANDS) {
  if (commandsById.has(command.id)) {
    throw Error("Duplicate Codex command id: " + command.id);
  }
  commandsById.set(command.id, command);
}

const ENVIRONMENT_ACTION_COMMAND_IDS = CODEX_COMMANDS.filter(
  (item) => item.kind === "webview" && /^environmentAction[1-9]$/.test(item.id),
).map((item) => item.id);

const THREAD_SLOT_COMMAND_IDS = CODEX_COMMANDS.filter(
  (item) => item.kind === "webview" && /^thread[1-9]$/.test(item.id),
).map((item) => item.id);

export {
  COMMAND_MENU_GROUP_ORDER,
  ENVIRONMENT_ACTION_COMMAND_IDS,
  THREAD_SLOT_COMMAND_IDS,
  commandsById,
  equivalentCommandIdGroups,
};
