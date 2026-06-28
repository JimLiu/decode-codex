// Restored from ref/webview/assets/command-keybindings-2FWPR3Ii.js
// Derived command keybinding signals and formatting helpers.
import { _appScopeC, _appScopeL, _appScopeT } from "../boundaries/app-scope";
import { _vscodeApiA, vscodeApiU } from "../boundaries/vscode-api";
import {
  formatAccelerator,
  getCodexCommand,
  getCommandKeybindings,
  getDefaultKeybindingsForCommand,
} from "./electron-menu-shortcuts";
import { platformSignal } from "../runtime/platform";
type CodexPlatform = "linux" | "macOS" | "windows" | string;
type KeymapState = {
  bindings: Array<{
    command: string;
    key?: string | null;
  }>;
};
type CommandKeybindingOption = {
  accelerator: string;
  label: string;
};
const THREAD_SLOT_COMMAND_IDS = [
  "thread1",
  "thread2",
  "thread3",
  "thread4",
  "thread5",
  "thread6",
  "thread7",
  "thread8",
  "thread9",
];
const commandKeymapStateQuery = _vscodeApiA(
  _appScopeT,
  "codex-command-keymap-state",
  {
    enabled: true,
    staleTime: vscodeApiU.ONE_MINUTE,
  },
);
const commandAcceleratorsSignal = _appScopeL(
  _appScopeT,
  (commandId: string, { get }) => {
    getCodexCommand(commandId);
    const platform = get(platformSignal);
    return [
      ...getCommandKeybindings({
        commandId,
        keymapState: get(commandKeymapStateQuery).data,
        isMacOS: platform === "macOS",
      }),
    ];
  },
);
const primaryCommandAcceleratorSignal = _appScopeL(
  _appScopeT,
  (commandId: string, { get }) =>
    get(commandAcceleratorsSignal, commandId)[0] ?? null,
);
const commandKeybindingLabelsSignal = _appScopeL(
  _appScopeT,
  (commandId: string, { get }) => {
    const platform = get(platformSignal);
    return get(commandAcceleratorsSignal, commandId).map((accelerator) =>
      formatAccelerator(
        accelerator,
        platform === "macOS",
        platform === "linux",
      ),
    );
  },
);
const primaryCommandKeybindingLabelSignal = _appScopeL(
  _appScopeT,
  (commandId: string, { get }) =>
    get(commandKeybindingLabelsSignal, commandId)[0] ?? null,
);
const threadSlotKeybindingLabelsSignal = _appScopeC(_appScopeT, ({ get }) =>
  THREAD_SLOT_COMMAND_IDS.map((commandId) =>
    get(primaryCommandKeybindingLabelSignal, commandId),
  ),
);
const hasCustomCommandKeybindingSignal = _appScopeL(
  _appScopeT,
  (commandId: string, { get }) =>
    get(commandKeymapStateQuery).data?.bindings.some(
      (binding) => binding.command === commandId,
    ) === true,
);
function hasDefaultCommandKeybinding(
  commandId: string,
  platform: CodexPlatform,
) {
  return (
    getDefaultKeybindingsForCommand({
      commandId,
      isMacOS: platform === "macOS",
    }).length > 0
  );
}
function getCommandKeybindingOptions(
  commandId: string,
  keymapState: KeymapState | null | undefined,
  platform: CodexPlatform,
): CommandKeybindingOption[] {
  return getCommandKeybindings({
    commandId,
    keymapState,
    isMacOS: platform === "macOS",
  }).map((accelerator) => ({
    accelerator,
    label: formatAccelerator(
      accelerator,
      platform === "macOS",
      platform === "linux",
    ),
  }));
}
export {
  primaryCommandKeybindingLabelSignal,
  hasDefaultCommandKeybinding,
  primaryCommandAcceleratorSignal,
  hasCustomCommandKeybindingSignal,
  threadSlotKeybindingLabelsSignal,
  commandKeymapStateQuery,
  getCommandKeybindingOptions,
  commandAcceleratorsSignal,
};
