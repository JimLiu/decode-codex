// Restored from ref/.vite/build/src-CoIhwwHr.js
// Public desktop setting lookup and serialization helpers.
import type {
  DesktopSettingDefinition,
  RuntimeSchema,
} from "./shared-node-runtime-setting-schema";
import { desktopSettingDefinitions } from "./shared-node-runtime-setting-definitions";

export type {
  DesktopSettingDefinition,
  RuntimeSchema,
} from "./shared-node-runtime-setting-schema";
export {
  appearanceSettingDefinitions,
  desktopGlobalStateKeys,
  desktopPreferenceSettingDefinitions,
  desktopSettingDefinitions,
  getDefaultGlobalStateValue,
  persistedAtomSettingDefinitions,
} from "./shared-node-runtime-setting-definitions";

const settingsByKey = new Map(
  desktopSettingDefinitions.map((definition) => [definition.key, definition]),
);

export function getDesktopSettingDefinition(
  key: string,
): DesktopSettingDefinition | undefined {
  return settingsByKey.get(key);
}

export function getDesktopSettingSchema(
  key: string,
): RuntimeSchema | undefined {
  return getDesktopSettingDefinition(key)?.schema;
}

export function serializeSettingForToml(
  _schema: unknown,
  value: unknown,
): unknown {
  return serializeTomlCompatibleValue(value);
}

export function deserializeSettingFromToml(
  _schema: unknown,
  value: unknown,
): unknown {
  return value;
}

function serializeTomlCompatibleValue(value: unknown): unknown {
  if (value === undefined) return undefined;
  if (value == null || typeof value !== "object") return value;
  if (Array.isArray(value)) return value.map(serializeTomlCompatibleValue);
  return Object.fromEntries(
    Object.entries(value)
      .filter(([, item]) => item !== undefined)
      .map(([key, item]) => [key, serializeTomlCompatibleValue(item)]),
  );
}

export function readDefaultServiceTierAtom(
  atoms: Record<string, unknown>,
): unknown {
  if (!Object.prototype.hasOwnProperty.call(atoms, "default-service-tier")) {
    return null;
  }
  const value = atoms["default-service-tier"];
  return typeof value === "string" && value.length > 0 ? value : null;
}
