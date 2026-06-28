// Restored from ref/webview/assets/electron-menu-shortcuts-j6UKqTX5.js
import {
  electronOnlyCommandDefinitions,
  vscodeOnlyCommandDefinitions,
} from "./runtime-command-definitions";
import { navigationAndSettingsCommandDefinitions } from "./navigation-and-settings-command-definitions";
import { slotAndAccountCommandDefinitions } from "./slot-and-account-command-definitions";
import { threadAndComposerCommandDefinitions } from "./thread-and-composer-command-definitions";
import { workspaceAndPanelCommandDefinitions } from "./workspace-and-panel-command-definitions";

function tagCommandDefinitions(commandDefinitions, kind) {
  return commandDefinitions.map((item) => ({
    ...item,
    kind,
  }));
}

const CODEX_COMMANDS = [
  ...tagCommandDefinitions(threadAndComposerCommandDefinitions, "webview"),
  ...tagCommandDefinitions(navigationAndSettingsCommandDefinitions, "webview"),
  ...tagCommandDefinitions(workspaceAndPanelCommandDefinitions, "webview"),
  ...tagCommandDefinitions(slotAndAccountCommandDefinitions, "webview"),
  ...tagCommandDefinitions(vscodeOnlyCommandDefinitions, "vscode-only"),
  ...tagCommandDefinitions(electronOnlyCommandDefinitions, "electron-only"),
];

export { CODEX_COMMANDS };
