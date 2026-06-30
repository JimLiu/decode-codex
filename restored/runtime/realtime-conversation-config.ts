// Restored from ref/webview/assets/realtime-conversation-config-ldDeUVCM.js
// realtime-conversation-config-ldDeUVCM chunk restored from the Codex webview bundle.
import { useDynamicConfig } from "@statsig/react-bindings";
import { useAppScopeValue } from "../boundaries/app-scope";
import { createPersistedSignal } from "../runtime/persisted-signal";
import { getPersistedAtomValue } from "../utils/persisted-atom-store";
type RealtimeVoiceConfig = Record<string, unknown>;
type RealtimeVoiceConfigOverride = {
  config: string;
  enabled: boolean;
};
type RealtimeConfigResolution = {
  error: string | null;
  source: "local-override" | "statsig";
  value: RealtimeVoiceConfig;
};
type RealtimeConversationConfig = RealtimeConfigResolution & {
  canUseLocalOverride: boolean;
  isReady: boolean;
  override: RealtimeVoiceConfigOverride;
  statsigValue: RealtimeVoiceConfig;
};
const DEFAULT_REALTIME_VOICE_CONFIG_OVERRIDE: RealtimeVoiceConfigOverride = {
  enabled: false,
  config: "",
};
const realtimeVoiceConfigOverrideSignal = createPersistedSignal(
  "realtime-voice-config-override",
  DEFAULT_REALTIME_VOICE_CONFIG_OVERRIDE,
);
function useRealtimeConversationConfig(): RealtimeConversationConfig {
  const { value } = useDynamicConfig("1193530394") as {
    value: RealtimeVoiceConfig;
  };
  const override =
    (useAppScopeValue(realtimeVoiceConfigOverrideSignal) as
      | RealtimeVoiceConfigOverride
      | null
      | undefined) ??
    ((getPersistedAtomValue(
      "realtime-voice-config-override",
      DEFAULT_REALTIME_VOICE_CONFIG_OVERRIDE,
    ) ??
      DEFAULT_REALTIME_VOICE_CONFIG_OVERRIDE) as RealtimeVoiceConfigOverride);
  const resolved = resolveRealtimeVoiceConfig(value, {
    canUseLocalOverride: false,
    override,
  });
  return {
    ...resolved,
    canUseLocalOverride: false,
    isReady: true,
    override,
    statsigValue: value,
  };
}
function resolveRealtimeVoiceConfig(
  statsigValue: RealtimeVoiceConfig,
  {
    canUseLocalOverride,
    override,
  }: {
    canUseLocalOverride: boolean;
    override: RealtimeVoiceConfigOverride;
  },
): RealtimeConfigResolution {
  if (!canUseLocalOverride || !override.enabled) {
    return {
      error: null,
      source: "statsig",
      value: statsigValue,
    };
  }
  const localOverride = parseRealtimeVoiceConfigOverride(override.config);
  return localOverride == null
    ? {
        error: "Local realtime config override must be a valid JSON object.",
        source: "statsig",
        value: statsigValue,
      }
    : {
        error: null,
        source: "local-override",
        value: {
          ...statsigValue,
          ...localOverride,
        },
      };
}
function parseRealtimeVoiceConfigOverride(
  rawConfig: string,
): RealtimeVoiceConfig | null {
  try {
    const parsed = JSON.parse(rawConfig);
    return parsed != null &&
      typeof parsed === "object" &&
      !Array.isArray(parsed)
      ? (parsed as RealtimeVoiceConfig)
      : null;
  } catch {
    return null;
  }
}
export {
  DEFAULT_REALTIME_VOICE_CONFIG_OVERRIDE,
  realtimeVoiceConfigOverrideSignal,
  useRealtimeConversationConfig,
};
