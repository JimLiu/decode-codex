// Restored from ref/webview/assets/electron-menu-shortcuts-j6UKqTX5.js
import { CODEX_COMMANDS } from "./command-definitions";
import { commandsById, equivalentCommandIdGroups } from "./command-groups";
import { formatAccelerator, isMacOSPlatform } from "./formatting";

CODEX_COMMANDS.flatMap((item) => {
  const electronConfig = getElectronCommandConfig(item);
  return electronConfig?.menuTitle == null ||
    electronConfig.menuTitleIntlId == null
    ? []
    : [electronConfig.menuTitleIntlId];
});

CODEX_COMMANDS.flatMap((item) => {
  if (!("vscodeCommand" in item) || item.vscodeCommand == null) return [];
  const { commandId = "chatgpt." + item.id, ...vscodeCommand } =
    item.vscodeCommand;
  return [
    {
      commandId,
      ...vscodeCommand,
    },
  ];
});

function getCodexCommand(commandId) {
  return commandsById.get(commandId) ?? null;
}

function isKnownCodexCommand(commandId) {
  return commandsById.has(commandId);
}

function isCommandMenuCommand(command) {
  return (
    command.kind === "webview" &&
    "commandMenu" in command &&
    command.commandMenu === true
  );
}

function isCommandAvailableInHost(command, host) {
  return command.availableIn?.includes(host) ?? true;
}

function isElectronRuntimeCommand(command) {
  return !isVscodeOnlyCommand(command);
}

function commandHasDescription(command) {
  return "descriptionIntlId" in command;
}

function allowsBareModifierGlobalShortcut(command) {
  return (
    "shortcutScope" in command &&
    command.shortcutScope === "os-global" &&
    "allowsBareModifiers" in command &&
    command.allowsBareModifiers === true
  );
}

function isOsGlobalShortcutCommand(command) {
  return "shortcutScope" in command && command.shortcutScope === "os-global";
}

function isMouseNavigationKey(key) {
  return key === "MouseBack" || key === "MouseForward";
}

function areEquivalentCommandIds(firstCommandId, secondCommandId) {
  return firstCommandId === secondCommandId
    ? true
    : equivalentCommandIdGroups.some(
        (group) =>
          group.includes(firstCommandId) && group.includes(secondCommandId),
      );
}

function getPrimaryDefaultKeybindingForCommand({ commandId, isMacOS }) {
  return getDefaultKeybindingsForCommand({ commandId, isMacOS })[0] ?? null;
}

function getDefaultKeybindingsForCommand({ commandId, isMacOS }) {
  const command = getCodexCommand(commandId);
  if (command == null || !isElectronRuntimeCommand(command)) return [];

  const electronConfig = getElectronCommandConfig(command);
  if (electronConfig == null) return [];

  if (
    isMacOS === true &&
    electronConfig.platformDefaultKeybindings?.macOS != null
  ) {
    return electronConfig.platformDefaultKeybindings.macOS.map(
      (item) => item.key,
    );
  }
  if (
    isMacOS === false &&
    electronConfig.platformDefaultKeybindings?.default != null
  ) {
    return electronConfig.platformDefaultKeybindings.default.map(
      (item) => item.key,
    );
  }
  return electronConfig.defaultKeybindings == null
    ? []
    : electronConfig.defaultKeybindings.map((item) => item.key);
}

function getCommandKeybindings({ commandId, keymapState, isMacOS }) {
  const command = getCodexCommand(commandId);
  if (command == null || !isElectronRuntimeCommand(command)) return [];

  const matchingBindings = keymapState?.bindings.filter(
    (binding) => binding.command === commandId,
  );
  if (matchingBindings != null && matchingBindings.length > 0) {
    const boundKeys = [];
    for (const binding of matchingBindings) {
      if (binding.key == null) return [];
      boundKeys.push(binding.key);
    }
    return boundKeys;
  }

  return getDefaultKeybindingsForCommand({ commandId, isMacOS });
}

function getElectronCommandConfig(command) {
  return command == null || !("electron" in command) || command.electron == null
    ? null
    : command.electron;
}

function isVscodeOnlyCommand(command) {
  return command.kind === "vscode-only";
}

function getCommandShortcutLabel(commandId, isMacOS = isMacOSPlatform()) {
  const defaultKeybinding = getPrimaryDefaultKeybindingForCommand({
    commandId,
    isMacOS,
  });
  return defaultKeybinding == null
    ? null
    : formatAccelerator(defaultKeybinding, isMacOS);
}

export {
  allowsBareModifierGlobalShortcut,
  areEquivalentCommandIds,
  commandHasDescription,
  getCodexCommand,
  getCommandKeybindings,
  getCommandShortcutLabel,
  getDefaultKeybindingsForCommand,
  isCommandAvailableInHost,
  isCommandMenuCommand,
  isElectronRuntimeCommand,
  isKnownCodexCommand,
  isMouseNavigationKey,
  isOsGlobalShortcutCommand,
};
