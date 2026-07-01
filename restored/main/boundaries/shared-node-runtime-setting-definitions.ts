// Restored from ref/.vite/build/src-CoIhwwHr.js
// Aggregated desktop setting definition registry.
import type { DesktopSettingDefinition } from "./shared-node-runtime-setting-schema";
import {
  appearanceSettingDefinitions,
  desktopPreferenceSettingDefinitions,
  persistedAtomSettingDefinitions,
} from "./shared-node-runtime-preference-settings";
import {
  browserSettingDefinitions,
  gitSettingDefinitions,
  worktreeSettingDefinitions,
} from "./shared-node-runtime-workflow-settings";

export {
  desktopGlobalStateKeys,
  getDefaultGlobalStateValue,
} from "./shared-node-runtime-global-state";
export {
  appearanceSettingDefinitions,
  desktopPreferenceSettingDefinitions,
  persistedAtomSettingDefinitions,
} from "./shared-node-runtime-preference-settings";

export const desktopSettingDefinitions: DesktopSettingDefinition[] = [
  ...Object.values(appearanceSettingDefinitions),
  ...Object.values(desktopPreferenceSettingDefinitions),
  ...Object.values(persistedAtomSettingDefinitions),
  ...Object.values(gitSettingDefinitions),
  ...Object.values(browserSettingDefinitions),
  ...Object.values(worktreeSettingDefinitions),
];
