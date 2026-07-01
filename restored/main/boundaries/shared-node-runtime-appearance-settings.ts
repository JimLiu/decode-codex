// Restored from ref/.vite/build/src-CoIhwwHr.js
// Appearance-related desktop setting definitions.
import { desktopGlobalStateKeys } from "./shared-node-runtime-global-state";
import {
  configurationSetting,
  enumSchema,
  globalStateSetting,
} from "./shared-node-runtime-setting-schema";

function createAppearanceSettingDefinitions() {
  return {
    theme: configurationSetting({
      agentAccess: "read-write",
      default: "system",
      description: "Preferred app appearance mode",
      key: "appearanceTheme",
      schema: enumSchema(["system", "light", "dark"] as const),
    }),
    dockIconPreference: globalStateSetting({
      agentAccess: "read-write",
      default: "app-default",
      description: "Preferred macOS Dock icon",
      key: desktopGlobalStateKeys.DOCK_ICON_PREFERENCE,
      schema: enumSchema(["app-default", "codex-light", "codex-dark"] as const),
    }),
    reducedMotionPreference: globalStateSetting({
      agentAccess: "read-write",
      default: "system",
      description: "Whether Codex reduces interface motion",
      key: desktopGlobalStateKeys.REDUCED_MOTION_PREFERENCE,
      schema: enumSchema(["system", "on", "off"] as const),
    }),
  };
}

export const appearanceSettingDefinitions =
  createAppearanceSettingDefinitions();
