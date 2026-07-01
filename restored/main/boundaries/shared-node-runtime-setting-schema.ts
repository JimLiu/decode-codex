// Restored from ref/.vite/build/src-CoIhwwHr.js
// Minimal runtime schema helpers used by desktop setting definitions.

export type RuntimeSchema<T = unknown> = {
  parse(input: unknown): T;
  safeParse(input: unknown): { success: true; data: T } | { success: false };
};

export type DesktopSettingDefinition = {
  agentAccess: "hidden" | "read-only" | "read-write";
  default?: unknown;
  description: string;
  hostStorage:
    | { kind: "configuration"; key: string }
    | { kind: "global-state"; key: string }
    | { kind: "persisted-atom"; key: string };
  key: string;
  mirrors?: unknown;
  schema: RuntimeSchema;
  vscode?: unknown;
};

function schema<T>(
  validate: (value: unknown) => value is T,
  label = "value",
): RuntimeSchema<T> {
  return {
    parse(input) {
      if (!validate(input)) throw Error(`Invalid ${label}`);
      return input;
    },
    safeParse(input) {
      return validate(input)
        ? { success: true, data: input }
        : { success: false };
    },
  };
}

export const booleanSchema = schema<boolean>(
  (value): value is boolean => typeof value === "boolean",
  "boolean",
);

export const numberSchema = schema<number>(
  (value): value is number =>
    typeof value === "number" && Number.isFinite(value),
  "number",
);

export const stringSchema = schema<string>(
  (value): value is string => typeof value === "string",
  "string",
);

export const nullableStringSchema = schema<string | null>(
  (value): value is string | null =>
    value === null || typeof value === "string",
  "nullable string",
);

export function enumSchema<const T extends readonly string[]>(
  values: T,
): RuntimeSchema<T[number]> {
  const set = new Set<string>(values);
  return schema<T[number]>(
    (value): value is T[number] => typeof value === "string" && set.has(value),
    `one of ${values.join(", ")}`,
  );
}

export function stringArraySchema(): RuntimeSchema<string[]> {
  return schema<string[]>(
    (value): value is string[] =>
      Array.isArray(value) && value.every((item) => typeof item === "string"),
    "string array",
  );
}

export function configurationSetting(options: {
  agentAccess: DesktopSettingDefinition["agentAccess"];
  default?: unknown;
  description: string;
  key: string;
  schema: RuntimeSchema;
  vscode?: unknown;
}): DesktopSettingDefinition {
  return {
    ...options,
    hostStorage: { kind: "configuration", key: options.key },
  };
}

export function globalStateSetting(options: {
  agentAccess: DesktopSettingDefinition["agentAccess"];
  default?: unknown;
  description: string;
  key: string;
  schema: RuntimeSchema;
}): DesktopSettingDefinition {
  return {
    ...options,
    hostStorage: { kind: "global-state", key: options.key },
  };
}

export function persistedAtomSetting(options: {
  agentAccess: DesktopSettingDefinition["agentAccess"];
  default?: unknown;
  description: string;
  key: string;
  schema: RuntimeSchema;
}): DesktopSettingDefinition {
  return {
    ...options,
    hostStorage: { kind: "persisted-atom", key: options.key },
  };
}
