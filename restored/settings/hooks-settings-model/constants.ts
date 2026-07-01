// Restored from ref/webview/assets/hooks-settings-model-CesfUzEC.js
// hooks-settings-model-CesfUzEC chunk restored from the Codex webview bundle.
import type { HookEventName, HookSourceGroupId } from "./types";

const HOOK_SOURCE_GROUP_IDS: HookSourceGroupId[] = [
  "plugin",
  "user",
  "admin",
  "project",
  "sessionFlags",
  "unknown",
];
const UNKNOWN_PLUGIN_ID = "__unknown__";
const HOOK_EVENT_NAMES: HookEventName[] = [
  "preToolUse",
  "permissionRequest",
  "postToolUse",
  "preCompact",
  "postCompact",
  "sessionStart",
  "userPromptSubmit",
  "subagentStart",
  "subagentStop",
  "stop",
];

function initHooksSettingsModelConstantsChunk(): void {}

export {
  HOOK_EVENT_NAMES,
  HOOK_SOURCE_GROUP_IDS,
  UNKNOWN_PLUGIN_ID,
  initHooksSettingsModelConstantsChunk,
};
