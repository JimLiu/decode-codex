// Restored from ref/.vite/build/src-CoIhwwHr.js
//
// Selective runtime facade for the mixed shared-node chunk. The original chunk
// also contains bundled Zod and third-party utilities; those remain excluded.
// The exports below cover the app-owned helpers consumed by restored/main.

import { execFileSync } from "node:child_process";
import { mkdirSync } from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import { createRequire } from "node:module";
import { inspect } from "node:util";

type StructuredLogDetails = {
  safe?: Record<string, unknown>;
  sensitive?: Record<string, unknown>;
};
type StructuredLogger = {
  trace(message: string, details?: StructuredLogDetails): void;
  debug(message: string, details?: StructuredLogDetails): void;
  info(message: string, details?: StructuredLogDetails): void;
  warning(message: string, details?: StructuredLogDetails): void;
  error(message: string, details?: StructuredLogDetails): void;
  log(level: string, message: string, details?: StructuredLogDetails): void;
  dispose(): void;
};
type RuntimeSchema<T = unknown> = {
  parse(input: unknown): T;
  safeParse(input: unknown): { success: true; data: T } | { success: false };
};
type DesktopSettingDefinition = {
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

export const threadFollowerRequestVersions = {
  "thread-stream-state-changed": 8,
  "thread-read-state-changed": 1,
  "thread-archived": 2,
  "thread-unarchived": 1,
  "thread-follower-start-turn": 1,
  "thread-follower-load-complete-history": 1,
  "thread-follower-compact-thread": 1,
  "thread-follower-steer-turn": 1,
  "thread-follower-interrupt-turn": 2,
  "thread-follower-update-thread-settings": 1,
  "thread-follower-edit-last-user-turn": 2,
  "thread-follower-command-approval-decision": 1,
  "thread-follower-file-approval-decision": 1,
  "thread-follower-permissions-request-approval-response": 1,
  "thread-follower-submit-user-input": 1,
  "thread-follower-submit-mcp-server-elicitation-response": 1,
  "thread-follower-set-queued-follow-ups-state": 1,
  "thread-queued-followups-changed": 1,
} as const;

export type ThreadFollowerRequestType =
  keyof typeof threadFollowerRequestVersions;

export function getThreadFollowerRequestVersion(requestType: string): number {
  return (
    threadFollowerRequestVersions[requestType as ThreadFollowerRequestType] ?? 0
  );
}

const requireFromFacade = createRequire(import.meta.url);

export const RuntimeAppBrands = {
  Codex: "codex",
  ChatGPT: "chatgpt",
} as const;

export type RuntimeAppBrand =
  (typeof RuntimeAppBrands)[keyof typeof RuntimeAppBrands];

export const BuildFlavors = {
  Dev: "dev",
  Agent: "agent",
  Nightly: "nightly",
  InternalAlpha: "internal-alpha",
  PublicBeta: "public-beta",
  Prod: "prod",
  values: ["dev", "agent", "nightly", "internal-alpha", "public-beta", "prod"],
  help: "dev, agent, nightly, internal-alpha, public-beta, prod",
  isValid(value: unknown): value is string {
    return typeof value === "string" && this.values.includes(value);
  },
  parse(value: string | undefined | null): string | null {
    const trimmed = value?.trim();
    return trimmed && this.isValid(trimmed) ? trimmed : null;
  },
  isInternal(value: string): boolean {
    return ["dev", "agent", "nightly", "internal-alpha"].includes(value);
  },
  allowDebugMenu(value: string): boolean {
    return this.isInternal(value);
  },
  supportsReactScan(value: string): boolean {
    return value === "dev" || value === "agent" || value === "nightly";
  },
};

export function getRuntimeAppBrandDisplayName(
  brand: unknown,
): string | undefined {
  switch (brand) {
    case RuntimeAppBrands.Codex:
      return "Codex";
    case RuntimeAppBrands.ChatGPT:
      return "ChatGPT";
    default:
      return undefined;
  }
}

export function parseRuntimeAppBrand(
  value: string | undefined,
): RuntimeAppBrand | null {
  const trimmed = value?.trim();
  return trimmed === RuntimeAppBrands.Codex ||
    trimmed === RuntimeAppBrands.ChatGPT
    ? trimmed
    : null;
}

function buildFlavorSuffix(buildFlavor: string): string | null {
  switch (buildFlavor) {
    case BuildFlavors.Dev:
      return "Dev";
    case BuildFlavors.Agent:
      return "Agent";
    case BuildFlavors.Nightly:
      return "Nightly";
    case BuildFlavors.InternalAlpha:
      return "Alpha";
    case BuildFlavors.PublicBeta:
      return "Beta";
    case BuildFlavors.Prod:
      return null;
    default:
      return null;
  }
}

export function formatRuntimeAppName(
  buildFlavor: string,
  brand: RuntimeAppBrand = RuntimeAppBrands.Codex,
): string {
  const suffix = buildFlavorSuffix(buildFlavor);
  const displayName = getRuntimeAppBrandDisplayName(brand) ?? "Codex";
  return suffix == null ? displayName : `${displayName} (${suffix})`;
}

function normalizeLogDetails(
  details?: StructuredLogDetails,
): Required<StructuredLogDetails> {
  return {
    safe: details?.safe ?? {},
    sensitive: details?.sensitive ?? {},
  };
}

class BufferedStructuredLogger implements StructuredLogger {
  private buffer: Array<{
    level: string;
    message: string;
    details: Required<StructuredLogDetails>;
  }> = [];
  private didDrop = false;
  maxBufferSize = 500;

  private push(
    level: string,
    message: string,
    details?: StructuredLogDetails,
  ): void {
    if (this.buffer.length >= this.maxBufferSize) {
      if (!this.didDrop) {
        this.didDrop = true;
        this.buffer.push({
          level: "warning",
          message:
            "Dropped buffered log message after maxBufferSize was reached",
          details: { safe: {}, sensitive: {} },
        });
      }
      return;
    }
    this.buffer.push({ level, message, details: normalizeLogDetails(details) });
  }

  trace(message: string, details?: StructuredLogDetails): void {
    this.push("trace", message, details);
  }
  debug(message: string, details?: StructuredLogDetails): void {
    this.push("debug", message, details);
  }
  info(message: string, details?: StructuredLogDetails): void {
    this.push("info", message, details);
  }
  warning(message: string, details?: StructuredLogDetails): void {
    this.push("warning", message, details);
  }
  error(message: string, details?: StructuredLogDetails): void {
    this.push("error", message, details);
  }
  log(level: string, message: string, details?: StructuredLogDetails): void {
    this.push(level, message, details);
  }
  flushTo(logger: StructuredLogger): void {
    for (const entry of this.buffer) {
      logger.log(entry.level, entry.message, entry.details);
    }
    this.buffer.length = 0;
  }
  dispose(): void {
    this.buffer.length = 0;
  }
}

let rootLogger: StructuredLogger = new BufferedStructuredLogger();
let loggerWasRegistered = false;

export function registerRootStructuredLogger(logger: StructuredLogger): void {
  if (
    loggerWasRegistered &&
    typeof process !== "undefined" &&
    process.env.NODE_ENV !== "test"
  ) {
    throw Error("Logger already set");
  }
  loggerWasRegistered = true;
  if (rootLogger instanceof BufferedStructuredLogger)
    rootLogger.flushTo(logger);
  rootLogger = logger;
}

export function getRootStructuredLogger(): StructuredLogger {
  return rootLogger;
}

export function formatStructuredLogDetails(
  details: Record<string, unknown>,
): string {
  const normalized: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(details)) {
    if (key === "error" && value instanceof Error) {
      normalized.errorName = value.name;
      normalized.errorMessage = value.message;
      normalized.errorStack = value.stack;
      if ("code" in value) normalized.errorCode = value.code;
      continue;
    }
    normalized[key] = value;
  }
  return Object.keys(normalized)
    .sort((left, right) => left.localeCompare(right))
    .map((key) => `${key}=${formatLogValue(normalized[key])}`)
    .join(" ");
}

function formatLogValue(value: unknown): string {
  if (typeof value === "string") {
    return value.length === 0 || /\s/.test(value)
      ? JSON.stringify(value)
      : value;
  }
  if (
    typeof value === "number" ||
    typeof value === "boolean" ||
    typeof value === "bigint"
  ) {
    return String(value);
  }
  if (value == null) return value === undefined ? "undefined" : "null";
  try {
    const json = JSON.stringify(value);
    if (json != null) return json;
  } catch {}
  return inspect(value);
}

export function createScopedStructuredLogger(scope: string): StructuredLogger {
  const prefix = `[${scope}] `;
  const write = (
    level: string,
    message: string,
    details?: StructuredLogDetails,
  ): void => {
    getRootStructuredLogger().log(
      level,
      `${prefix}${message}`,
      normalizeLogDetails(details),
    );
  };
  return {
    trace: (message, details) => write("trace", message, details),
    debug: (message, details) => write("debug", message, details),
    info: (message, details) => write("info", message, details),
    warning: (message, details) => write("warning", message, details),
    error: (message, details) => write("error", message, details),
    log: write,
    dispose: () => getRootStructuredLogger().dispose(),
  };
}

export function createLazyScopedStructuredLogger(
  scope: string,
): () => StructuredLogger {
  let logger: StructuredLogger | null = null;
  return () => {
    logger ??= createScopedStructuredLogger(scope);
    return logger;
  };
}

const logLevelRank: Record<string, number> = {
  error: 0,
  warning: 1,
  info: 2,
  debug: 3,
  trace: 4,
};

export function isLogLevelEnabled(level: string, maxLevel: string): boolean {
  return (logLevelRank[level] ?? 99) <= (logLevelRank[maxLevel] ?? 99);
}

const crashReporterEnv = new Set([
  "BREAKPAD_DUMP_LOCATION",
  "CHROME_CRASHPAD_PIPE_NAME",
  "CRASHPAD_HANDLER_PID",
  "ELECTRON_CRASH_REPORTER_PROCESS_TYPE",
]);

export function removeCrashReporterEnv<
  T extends Record<string, string | undefined>,
>(env: T): T {
  const cloned = { ...env };
  for (const key of Object.keys(cloned)) {
    if (crashReporterEnv.has(key.toUpperCase())) delete cloned[key];
  }
  return cloned;
}

export const desktopGlobalStateKeys = {
  DESKTOP_FIRST_SEEN_AT_MS: "desktop-first-seen-at-ms",
  WORKSPACE_ROOT_OPTIONS: "electron-saved-workspace-roots",
  WORKSPACE_ROOT_LABELS: "electron-workspace-root-labels",
  PERSISTED_ATOM_STATE: "persisted-atom-state",
  DOCK_ICON_PREFERENCE: "dock-icon-preference",
  REDUCED_MOTION_PREFERENCE: "reduced-motion-preference",
  BROWSER_DOWNLOAD_DIRECTORY: "browser-download-directory",
  BROWSER_DOWNLOAD_PROMPT_ENABLED: "browser-download-prompt-enabled",
  WORKTREE_AUTO_CLEANUP_ENABLED: "worktree-auto-cleanup-enabled",
  WORKTREE_KEEP_COUNT: "worktree-keep-count",
  AMBIENT_SUGGESTIONS_ENABLED: "ambient-suggestions-enabled",
  IA_WAITING_ON_USER_FOLLOWUP_SECONDS: "ia-waiting-on-user-followup-seconds",
  GLOBAL_DICTATION_KEEP_VISIBLE: "global-dictation-keep-visible",
  HOTKEY_WINDOW_PROJECTLESS_DEFAULT_ENABLED:
    "hotkey-window-projectless-default-enabled",
  CODEX_MOBILE_SETUP_COMPLETED: "codex-mobile-has-connected-device",
  ADDED_REMOTE_CONTROL_ENV_IDS: "added-remote-control-env-ids",
  PROJECT_APPEARANCES: "project-appearances",
  SIDEBAR_PROJECT_THREAD_ORDERS: "sidebar-project-thread-orders",
  GIT_ALWAYS_FORCE_PUSH: "git-always-force-push",
  GIT_CREATE_PULL_REQUEST_AS_DRAFT: "git-create-pull-request-as-draft",
  GIT_PULL_REQUEST_MERGE_METHOD: "git-pull-request-merge-method",
  GIT_BRANCH_PREFIX: "git-branch-prefix",
  GIT_COMMIT_INSTRUCTIONS: "git-commit-instructions",
  GIT_PR_INSTRUCTIONS: "git-pr-instructions",
};

const defaultGlobalStateValues: Record<string, unknown> = {
  [desktopGlobalStateKeys.GIT_ALWAYS_FORCE_PUSH]: false,
  [desktopGlobalStateKeys.GIT_CREATE_PULL_REQUEST_AS_DRAFT]: true,
  [desktopGlobalStateKeys.GIT_PULL_REQUEST_MERGE_METHOD]: "merge",
  [desktopGlobalStateKeys.GIT_BRANCH_PREFIX]: "codex/",
  [desktopGlobalStateKeys.GIT_COMMIT_INSTRUCTIONS]: "",
  [desktopGlobalStateKeys.GIT_PR_INSTRUCTIONS]: "",
  [desktopGlobalStateKeys.SIDEBAR_PROJECT_THREAD_ORDERS]: {},
  [desktopGlobalStateKeys.PROJECT_APPEARANCES]: {},
  [desktopGlobalStateKeys.ADDED_REMOTE_CONTROL_ENV_IDS]: [],
  [desktopGlobalStateKeys.CODEX_MOBILE_SETUP_COMPLETED]: false,
  [desktopGlobalStateKeys.AMBIENT_SUGGESTIONS_ENABLED]: true,
  [desktopGlobalStateKeys.IA_WAITING_ON_USER_FOLLOWUP_SECONDS]: 1800,
  [desktopGlobalStateKeys.HOTKEY_WINDOW_PROJECTLESS_DEFAULT_ENABLED]: false,
  [desktopGlobalStateKeys.GLOBAL_DICTATION_KEEP_VISIBLE]: false,
  [desktopGlobalStateKeys.WORKTREE_AUTO_CLEANUP_ENABLED]: true,
  [desktopGlobalStateKeys.WORKTREE_KEEP_COUNT]: 15,
  [desktopGlobalStateKeys.BROWSER_DOWNLOAD_DIRECTORY]: null,
  [desktopGlobalStateKeys.BROWSER_DOWNLOAD_PROMPT_ENABLED]: false,
  [desktopGlobalStateKeys.DOCK_ICON_PREFERENCE]: "app-default",
  [desktopGlobalStateKeys.REDUCED_MOTION_PREFERENCE]: "system",
};

export function getDefaultGlobalStateValue(key: string): unknown {
  return defaultGlobalStateValues[key];
}

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

const unknownSchema = schema<unknown>((_value): _value is unknown => true);
const booleanSchema = schema<boolean>(
  (value): value is boolean => typeof value === "boolean",
  "boolean",
);
const numberSchema = schema<number>(
  (value): value is number =>
    typeof value === "number" && Number.isFinite(value),
  "number",
);
const stringSchema = schema<string>(
  (value): value is string => typeof value === "string",
  "string",
);
const nullableStringSchema = schema<string | null>(
  (value): value is string | null =>
    value === null || typeof value === "string",
  "nullable string",
);

function enumSchema<const T extends readonly string[]>(
  values: T,
): RuntimeSchema<T[number]> {
  const set = new Set<string>(values);
  return schema<T[number]>(
    (value): value is T[number] => typeof value === "string" && set.has(value),
    `one of ${values.join(", ")}`,
  );
}

function stringArraySchema(): RuntimeSchema<string[]> {
  return schema<string[]>(
    (value): value is string[] =>
      Array.isArray(value) && value.every((item) => typeof item === "string"),
    "string array",
  );
}

function configurationSetting(options: {
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

function globalStateSetting(options: {
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

function persistedAtomSetting(options: {
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

export const appearanceSettingDefinitions = {
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

export const desktopPreferenceSettingDefinitions = {
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
    description: "Whether new popout-window chats default to projectless mode",
    key: desktopGlobalStateKeys.HOTKEY_WINDOW_PROJECTLESS_DEFAULT_ENABLED,
    schema: booleanSchema,
  }),
};

export const persistedAtomSettingDefinitions = {
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

const gitSettings = {
  branchPrefix: globalStateSetting({
    agentAccess: "read-write",
    default: "codex/",
    description: "Prefix for branches Codex creates",
    key: desktopGlobalStateKeys.GIT_BRANCH_PREFIX,
    schema: stringSchema,
  }),
  alwaysForcePush: globalStateSetting({
    agentAccess: "read-write",
    default: false,
    description: "Whether Codex always force-pushes branches",
    key: desktopGlobalStateKeys.GIT_ALWAYS_FORCE_PUSH,
    schema: booleanSchema,
  }),
  createPullRequestAsDraft: globalStateSetting({
    agentAccess: "read-write",
    default: true,
    description: "Whether Codex creates pull requests as drafts",
    key: desktopGlobalStateKeys.GIT_CREATE_PULL_REQUEST_AS_DRAFT,
    schema: booleanSchema,
  }),
  pullRequestMergeMethod: globalStateSetting({
    agentAccess: "read-write",
    default: "merge",
    description: "Preferred pull request merge method",
    key: desktopGlobalStateKeys.GIT_PULL_REQUEST_MERGE_METHOD,
    schema: enumSchema(["merge", "squash"] as const),
  }),
  commitInstructions: globalStateSetting({
    agentAccess: "read-only",
    default: "",
    description: "Custom git commit instructions",
    key: desktopGlobalStateKeys.GIT_COMMIT_INSTRUCTIONS,
    schema: stringSchema,
  }),
  pullRequestInstructions: globalStateSetting({
    agentAccess: "read-only",
    default: "",
    description: "Custom pull request instructions",
    key: desktopGlobalStateKeys.GIT_PR_INSTRUCTIONS,
    schema: stringSchema,
  }),
};

const browserSettings = {
  downloadDirectory: globalStateSetting({
    agentAccess: "hidden",
    default: null,
    description:
      "Folder where files downloaded by the in-app browser are saved",
    key: desktopGlobalStateKeys.BROWSER_DOWNLOAD_DIRECTORY,
    schema: nullableStringSchema,
  }),
  promptForDownloadLocation: globalStateSetting({
    agentAccess: "hidden",
    default: false,
    description: "Whether manual browser downloads ask where to save each file",
    key: desktopGlobalStateKeys.BROWSER_DOWNLOAD_PROMPT_ENABLED,
    schema: booleanSchema,
  }),
};

const worktreeSettings = {
  autoCleanupEnabled: globalStateSetting({
    agentAccess: "read-write",
    default: true,
    description: "Whether Codex automatically cleans up old worktrees",
    key: desktopGlobalStateKeys.WORKTREE_AUTO_CLEANUP_ENABLED,
    schema: booleanSchema,
  }),
  keepCount: globalStateSetting({
    agentAccess: "read-write",
    default: 15,
    description: "How many recent worktrees Codex keeps",
    key: desktopGlobalStateKeys.WORKTREE_KEEP_COUNT,
    schema: numberSchema,
  }),
};

export const desktopSettingDefinitions: DesktopSettingDefinition[] = [
  ...Object.values(appearanceSettingDefinitions),
  ...Object.values(desktopPreferenceSettingDefinitions),
  ...Object.values(persistedAtomSettingDefinitions),
  ...Object.values(gitSettings),
  ...Object.values(browserSettings),
  ...Object.values(worktreeSettings),
];

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

export function normalizePathSeparators(value: string): string {
  return value.replace(/\\/g, "/");
}

const windowsDrivePath = /^[A-Za-z]:[\\/]/;
const slashPrefixedWindowsDrivePath = /^\/[A-Za-z]:[\\/]/;
const windowsUncPath = /^\\\\[^\\]+\\[^\\]+/;
const posixUncPath = /^\/\/[^/]+\/[^/]+/;

export function isUncPath(value: string): boolean {
  return windowsUncPath.test(value) || posixUncPath.test(value);
}

export function isAbsoluteFilePath(value: string): boolean {
  return (
    (value.startsWith("/") && !value.startsWith("//")) ||
    windowsDrivePath.test(value) ||
    isUncPath(value)
  );
}

export function stripLeadingSlashFromWindowsDrivePath(value: string): string {
  return slashPrefixedWindowsDrivePath.test(value) ? value.slice(1) : value;
}

export function toError(error: unknown): Error {
  if (error instanceof Error) return error;
  if (typeof error === "string") return Error(error);
  if (
    typeof error === "object" &&
    error != null &&
    "message" in error &&
    typeof error.message === "string"
  ) {
    return Error(error.message);
  }
  try {
    return Error(JSON.stringify(error));
  } catch {
    return Error(String(error));
  }
}

export const pluginManagePermission = "manage";

const pluginIdPattern =
  /^(plugins_[0-9a-f]{32}|(?:plugins~)?Plugin_[0-9a-f]{32}|plugin_[A-Za-z0-9][A-Za-z0-9_-]{0,247})$/;

export function parsePluginIdentifier(pluginName: string): string | null {
  return pluginIdPattern.test(pluginName) ? pluginName : null;
}

export function isSafePathSegment(value: string | undefined): boolean {
  return (
    value != null &&
    value.length > 0 &&
    !value.includes("/") &&
    !value.includes("\\") &&
    value !== "." &&
    value !== ".."
  );
}

export function parseCodexThreadDeepLink(
  input: URL | string,
  { allowExtraPathSegments = false }: { allowExtraPathSegments?: boolean } = {},
): {
  conversationId: string;
  openReview?: boolean;
  reviewDiffFilter?: "branch" | "last-turn";
  reviewPath?: string;
} | null {
  let url: URL;
  try {
    url = typeof input === "string" ? new URL(input) : input;
  } catch {
    return null;
  }
  const [conversationId, ...extraPathSegments] = url.pathname
    .split("/")
    .filter(Boolean);
  if (
    url.protocol !== "codex:" ||
    url.host !== "threads" ||
    !conversationId ||
    (!allowExtraPathSegments && extraPathSegments.length > 0)
  ) {
    return null;
  }
  if (url.searchParams.get("view") !== "review") return { conversationId };
  const diffFilter = url.searchParams.get("diffFilter");
  if (diffFilter == null) {
    return { conversationId, openReview: true };
  }
  if (diffFilter !== "branch" && diffFilter !== "last-turn") return null;
  return {
    conversationId,
    openReview: true,
    reviewDiffFilter: diffFilter,
    reviewPath: url.searchParams.get("path") ?? undefined,
  };
}

let shouldSpawnInsideWsl: (() => boolean) | null = null;
let cachedWslDistro: string | null | undefined;

export function registerShouldSpawnInsideWsl(callback: () => boolean): void {
  if (shouldSpawnInsideWsl != null) {
    throw Error("shouldSpawnInsideWsl already set");
  }
  shouldSpawnInsideWsl = callback;
}

export function resolveDefaultWslDistro(force = false): string | null {
  if (process.platform !== "win32") return null;
  if (!force && cachedWslDistro !== undefined) return cachedWslDistro;
  try {
    execFileSync("wsl.exe", ["--status"], {
      env: removeCrashReporterEnv(process.env),
      timeout: 3000,
      windowsHide: true,
    });
    const verbose = decodeCommandOutput(
      execFileSync("wsl.exe", ["--list", "--verbose"], {
        env: removeCrashReporterEnv(process.env),
        timeout: 3000,
        windowsHide: true,
      }),
    );
    const quiet = decodeCommandOutput(
      execFileSync("wsl.exe", ["--list", "--quiet"], {
        env: removeCrashReporterEnv(process.env),
        timeout: 3000,
        windowsHide: true,
      }),
    );
    cachedWslDistro =
      parseDefaultWslDistro(verbose) ??
      quiet
        .split("\n")
        .map((item) => item.trim())
        .find((item) => item.toLowerCase().startsWith("ubuntu")) ??
      null;
    return cachedWslDistro;
  } catch (error) {
    getRootStructuredLogger().error("[wsl] error retrieving eligible distro", {
      safe: { error: String(error) },
      sensitive: {},
    });
    cachedWslDistro = null;
    return null;
  }
}

function parseDefaultWslDistro(listOutput: string): string | null {
  const line = listOutput
    .split("\n")
    .map((item) => item.trim())
    .find((item) => item.startsWith("*"));
  return (
    line
      ?.slice(1)
      .trim()
      .split(/\s{2,}|\t+/)[0] || null
  );
}

function decodeCommandOutput(output: Buffer | string): string {
  if (typeof output === "string") return output.trim();
  if (output.length === 0) return "";
  if (output.length >= 2 && output[0] === 255 && output[1] === 254) {
    return output
      .slice(2)
      .toString("utf16le")
      .replace(/^\uFEFF/, "")
      .trim();
  }
  if (
    output.length >= 3 &&
    output[0] === 239 &&
    output[1] === 187 &&
    output[2] === 191
  ) {
    return output.slice(3).toString("utf8").trim();
  }
  return output
    .toString("utf8")
    .replace(/^\uFEFF/, "")
    .trim();
}

export function resolveCodexHome({
  preferWsl = false,
}: { preferWsl?: boolean } = {}): string {
  if (preferWsl && process.platform === "win32") {
    const resolved = resolveCodexHomeFromWsl();
    if (resolved) return resolved;
    getRootStructuredLogger().info(
      "[resolveCodexHome] Falling back to host home directory because WSL CODEX_HOME could not be resolved",
    );
  }
  return process.env.CODEX_HOME ?? path.join(os.homedir(), ".codex");
}

function resolveCodexHomeFromWsl(): string | null {
  try {
    const output = decodeCommandOutput(
      execFileSync(
        "wsl.exe",
        [
          "/usr/bin/env",
          "bash",
          "-lc",
          'printf %s "${CODEX_HOME:-$HOME/.codex}"',
        ],
        { env: removeCrashReporterEnv(process.env), windowsHide: true },
      ),
    );
    if (!output) return null;
    if (/^[a-zA-Z]:[\\/]/.test(output) || output.startsWith("\\\\")) {
      return output.replace(/\//g, "\\");
    }
    const translated = decodeCommandOutput(
      execFileSync("wsl.exe", ["wslpath", "-w", output], {
        env: removeCrashReporterEnv(process.env),
        windowsHide: true,
      }),
    );
    return translated ? translated.replace(/\//g, "\\") : null;
  } catch {
    return null;
  }
}

export const owlFeatureNames = [
  "OwlAutofillAndPasswords",
  "OwlAuth",
  "OwlDownloads",
  "OwlExtensions",
  "OwlHistory",
  "OwlOpenAIGoLinks",
  "OwlPermissions",
  "OwlPrinting",
  "OwlWebViewEnhancements",
];

const semanticVersionPattern =
  /^(?<major>0|[1-9]\d*)\.(?<minor>0|[1-9]\d*)\.(?<patch>0|[1-9]\d*)(?<suffix>(?:-[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?(?:\+[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?)$/;

export function dateFromDateEncodedBuildVersion(version: string): Date | null {
  let parsed;
  try {
    parsed = parseSemanticVersion(version).version;
  } catch {
    return null;
  }
  if (!isDateEncodedBuildVersion(parsed)) return null;
  const monthDay = parseMonthDay(String(parsed.minor));
  if (monthDay == null) return null;
  const patch = String(parsed.patch);
  const dayOffset = Number(patch.slice(0, -4));
  const hour = Number(patch.slice(-4, -2));
  const minute = Number(patch.slice(-2));
  if (
    !Number.isInteger(dayOffset) ||
    !Number.isInteger(hour) ||
    !Number.isInteger(minute) ||
    dayOffset < 1 ||
    hour > 23 ||
    minute > 59
  ) {
    return null;
  }
  return new Date(
    Date.UTC(
      2000 + parsed.major,
      monthDay.month - 1,
      monthDay.day + dayOffset - 1,
      hour + 8,
      minute,
    ),
  );
}

export function windowsVersionFromBuildVersion(version: string): string {
  const parsed = parseSemanticVersion(version);
  if (!isDateEncodedBuildVersion(parsed.version)) {
    return `${formatVersion(parsed.version)}.0`;
  }
  const patch = String(parsed.version.patch);
  const dayOffset = Number(patch.slice(0, -4));
  const hour = Number(patch.slice(-4, -2));
  const minute = Number(patch.slice(-2));
  const windowsRevision = (dayOffset - 1) * 1440 + hour * 60 + minute;
  return `${parsed.version.major}.${parsed.version.minor}.${windowsRevision}.0`;
}

function parseSemanticVersion(version: string): {
  suffix: string;
  version: { major: number; minor: number; patch: number };
} {
  const match = semanticVersionPattern.exec(version);
  if (match?.groups == null)
    throw Error(`Invalid semantic version: ${version}`);
  return {
    suffix: match.groups.suffix,
    version: {
      major: Number(match.groups.major),
      minor: Number(match.groups.minor),
      patch: Number(match.groups.patch),
    },
  };
}

function formatVersion(version: {
  major: number;
  minor: number;
  patch: number;
}): string {
  return `${version.major}.${version.minor}.${version.patch}`;
}

function isDateEncodedBuildVersion(version: {
  major: number;
  minor: number;
  patch: number;
}): boolean {
  return (
    version.patch >= 10000 &&
    isValidMonthDay(version.major, String(version.minor))
  );
}

function isValidMonthDay(yearOffset: number, value: string): boolean {
  const monthDay = parseMonthDay(value);
  if (monthDay == null) return false;
  const year = 2000 + yearOffset;
  const daysInMonth = new Date(Date.UTC(year, monthDay.month, 0)).getUTCDate();
  return monthDay.day <= daysInMonth;
}

function parseMonthDay(value: string): { day: number; month: number } | null {
  if (!/^[0-9]{3,4}$/.test(value)) return null;
  const monthText = value.length === 3 ? value.slice(0, 1) : value.slice(0, 2);
  const dayText = value.length === 3 ? value.slice(1) : value.slice(2);
  const month = Number(monthText);
  const day = Number(dayText);
  return month < 1 || month > 12 || day < 1 || day > 31 ? null : { day, month };
}

let stateDatabase: unknown = null;

export function openDesktopStateDatabase(options?: {
  databaseFileName?: string;
}): unknown {
  if (!process.versions.electron) return null;
  if (stateDatabase != null) return stateDatabase;
  const Database = requireFromFacade("better-sqlite3");
  const databaseFileName =
    options?.databaseFileName ??
    (process.env.BUILD_FLAVOR === "prod" ||
    (!process.env.BUILD_FLAVOR && process.env.NODE_ENV === "production")
      ? "codex.db"
      : "codex-dev.db");
  const databasePath = path.join(
    resolveCodexHome(),
    "sqlite",
    databaseFileName,
  );
  mkdirSync(path.dirname(databasePath), { recursive: true });
  stateDatabase = new Database(databasePath);
  return stateDatabase;
}

export function parseTomlConfig(text: string): Record<string, unknown> {
  const root: Record<string, unknown> = {};
  let current = root;
  for (const rawLine of text.split(/\r?\n/)) {
    const line = stripTomlComment(rawLine).trim();
    if (!line) continue;
    if (line.startsWith("[") && line.endsWith("]")) {
      const tablePath = line.slice(1, -1).trim();
      current = ensureTomlObjectPath(root, splitTomlKey(tablePath));
      continue;
    }
    const equalsIndex = findTomlEquals(line);
    if (equalsIndex < 0) continue;
    const keyPath = splitTomlKey(line.slice(0, equalsIndex).trim());
    const value = parseTomlValue(line.slice(equalsIndex + 1).trim());
    setTomlPath(current, keyPath, value);
  }
  return root;
}

function stripTomlComment(line: string): string {
  let quote: '"' | "'" | null = null;
  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    if (char === "\\" && quote === '"') {
      index += 1;
      continue;
    }
    if ((char === '"' || char === "'") && quote == null) {
      quote = char;
      continue;
    }
    if (char === quote) {
      quote = null;
      continue;
    }
    if (char === "#" && quote == null) return line.slice(0, index);
  }
  return line;
}

function findTomlEquals(line: string): number {
  let quote: '"' | "'" | null = null;
  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    if (char === "\\" && quote === '"') {
      index += 1;
      continue;
    }
    if ((char === '"' || char === "'") && quote == null) {
      quote = char;
      continue;
    }
    if (char === quote) {
      quote = null;
      continue;
    }
    if (char === "=" && quote == null) return index;
  }
  return -1;
}

function splitTomlKey(key: string): string[] {
  return key
    .split(".")
    .map((part) => part.trim().replace(/^["']|["']$/g, ""))
    .filter(Boolean);
}

function ensureTomlObjectPath(
  root: Record<string, unknown>,
  keyPath: string[],
): Record<string, unknown> {
  let current = root;
  for (const key of keyPath) {
    const next = current[key];
    if (typeof next === "object" && next != null && !Array.isArray(next)) {
      current = next as Record<string, unknown>;
      continue;
    }
    const created: Record<string, unknown> = {};
    current[key] = created;
    current = created;
  }
  return current;
}

function setTomlPath(
  root: Record<string, unknown>,
  keyPath: string[],
  value: unknown,
): void {
  if (keyPath.length === 0) return;
  const parent = ensureTomlObjectPath(root, keyPath.slice(0, -1));
  parent[keyPath[keyPath.length - 1]] = value;
}

function parseTomlValue(value: string): unknown {
  if (value === "true") return true;
  if (value === "false") return false;
  if (value.startsWith('"') && value.endsWith('"')) {
    return JSON.parse(value);
  }
  if (value.startsWith("'") && value.endsWith("'")) {
    return value.slice(1, -1);
  }
  if (value.startsWith("[") && value.endsWith("]")) {
    return parseTomlArray(value.slice(1, -1));
  }
  if (/^[+-]?\d+$/.test(value)) return Number.parseInt(value, 10);
  if (/^[+-]?\d+\.\d+$/.test(value)) return Number.parseFloat(value);
  return value;
}

function parseTomlArray(value: string): unknown[] {
  const items: string[] = [];
  let quote: '"' | "'" | null = null;
  let start = 0;
  for (let index = 0; index < value.length; index += 1) {
    const char = value[index];
    if (char === "\\" && quote === '"') {
      index += 1;
      continue;
    }
    if ((char === '"' || char === "'") && quote == null) {
      quote = char;
      continue;
    }
    if (char === quote) {
      quote = null;
      continue;
    }
    if (char === "," && quote == null) {
      items.push(value.slice(start, index).trim());
      start = index + 1;
    }
  }
  const tail = value.slice(start).trim();
  if (tail) items.push(tail);
  return items.map(parseTomlValue);
}

export function colorNumberForDeviceStatus(status: string): number | undefined {
  switch (status) {
    case "working":
      return 3166206;
    case "unread":
      return 65356;
    case "idle":
      return 16777215;
    case "awaiting-approval":
    case "awaiting-response":
      return 16739584;
    case "error":
      return 16711731;
    case "off":
      return 0;
    default:
      return undefined;
  }
}
