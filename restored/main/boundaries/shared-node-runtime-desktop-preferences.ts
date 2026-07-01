// Restored from ref/.vite/build/src-CoIhwwHr.js
// General desktop preference setting definitions.
import { desktopGlobalStateKeys } from "./shared-node-runtime-global-state";
import {
  booleanSchema,
  configurationSetting,
  enumSchema,
  globalStateSetting,
  nullableStringSchema,
  stringArraySchema,
} from "./shared-node-runtime-setting-schema";

function createDesktopPreferenceSettingDefinitions() {
  return {
    dictationDictionary: configurationSetting({
      agentAccess: "read-write",
      default: [],
      description: "Custom dictation dictionary entries",
      key: "dictationDictionary",
      schema: stringArraySchema(),
    }),
    followUpQueueMode: configurationSetting({
      agentAccess: "read-write",
      default: "steer",
      description: "How follow-up prompts behave while a turn is running",
      key: "followUpQueueMode",
      schema: enumSchema(["queue", "steer", "interrupt"] as const),
    }),
    composerEnterBehavior: configurationSetting({
      agentAccess: "read-write",
      default: "enter",
      description: "How Enter behaves in the composer",
      key: "composerEnterBehavior",
      schema: enumSchema(["enter", "shiftEnter"] as const),
    }),
    reviewDelivery: configurationSetting({
      agentAccess: "read-write",
      default: "inline",
      description: "How code review results are delivered",
      key: "reviewDelivery",
      schema: enumSchema(["inline", "detached"] as const),
    }),
    localeOverride: configurationSetting({
      agentAccess: "read-write",
      default: null,
      description: "Explicit locale override",
      key: "localeOverride",
      schema: nullableStringSchema,
    }),
    preventSleepWhileRunning: configurationSetting({
      agentAccess: "read-write",
      default: false,
      description: "Whether the machine stays awake while Codex is running",
      key: "preventSleepWhileRunning",
      schema: booleanSchema,
    }),
    keepRemoteControlAwakeWhilePluggedIn: configurationSetting({
      agentAccess: "read-write",
      default: false,
      description:
        "Whether remote control keeps this computer awake while plugged in",
      key: "keepRemoteControlAwakeWhilePluggedIn",
      schema: booleanSchema,
    }),
    integratedTerminalShell: configurationSetting({
      agentAccess: "read-write",
      default: undefined,
      description: "Preferred integrated terminal shell",
      key: "integratedTerminalShell",
      schema: enumSchema([
        "powershell",
        "commandPrompt",
        "gitBash",
        "wsl",
      ] as const),
    }),
    defaultTerminalLocation: configurationSetting({
      agentAccess: "read-write",
      default: "bottom",
      description: "Where terminal actions open terminal tabs by default",
      key: "defaultTerminalLocation",
      schema: enumSchema(["bottom", "right"] as const),
    }),
    runCodexInWsl: configurationSetting({
      agentAccess: "hidden",
      default: false,
      description: "Whether Codex runs inside WSL on Windows",
      key: "runCodexInWindowsSubsystemForLinux",
      schema: booleanSchema,
    }),
    hotkeyWindowProjectlessDefaultEnabled: globalStateSetting({
      agentAccess: "read-write",
      default: false,
      description:
        "Whether new popout-window chats default to projectless mode",
      key: desktopGlobalStateKeys.HOTKEY_WINDOW_PROJECTLESS_DEFAULT_ENABLED,
      schema: booleanSchema,
    }),
  };
}

export const desktopPreferenceSettingDefinitions =
  createDesktopPreferenceSettingDefinitions();
