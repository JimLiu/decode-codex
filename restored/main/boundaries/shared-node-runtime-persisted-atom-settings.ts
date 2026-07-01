// Restored from ref/.vite/build/src-CoIhwwHr.js
// Persisted atom-backed desktop setting definitions.
import {
  nullableStringSchema,
  persistedAtomSetting,
} from "./shared-node-runtime-setting-schema";

function createPersistedAtomSettingDefinitions() {
  return {
    defaultServiceTier: persistedAtomSetting({
      agentAccess: "read-write",
      default: null,
      description: "Preferred model speed tier",
      key: "default-service-tier",
      schema: nullableStringSchema,
    }),
    selectedAvatarId: persistedAtomSetting({
      agentAccess: "read-write",
      default: null,
      description: "Selected Codex avatar",
      key: "selected-avatar-id",
      schema: nullableStringSchema,
    }),
  };
}

export const persistedAtomSettingDefinitions =
  createPersistedAtomSettingDefinitions();
