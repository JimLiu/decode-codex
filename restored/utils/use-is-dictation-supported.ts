// Restored from ref/webview/assets/use-is-dictation-supported-BVXWfQC0.js
// Hook for checking whether dictation can be offered for the current host.
import {
  useGateValue,
  useStatsigLoading,
} from "../vendor/statsig-current-runtime";
import { useAuthForHost } from "../auth/use-auth";
const VOICE_INPUT_GATE = "4100906017";

export function initUseIsDictationSupportedChunk(): void {}

export function useIsDictationSupported(hostId: string): boolean | null {
  const authState = useAuthForHost(hostId);
  const isVoiceInputEnabled = useGateValue(VOICE_INPUT_GATE);
  const isStatsigLoading = useStatsigLoading();
  if (
    !isDictationRuntimeSupported() ||
    !navigator?.mediaDevices?.getUserMedia ||
    typeof MediaRecorder === "undefined"
  ) {
    return false;
  }
  if (authState == null || authState.isLoading || isStatsigLoading) {
    return null;
  }
  return isVoiceInputEnabled && authState.authMethod === "chatgpt";
}
function isDictationRuntimeSupported(): boolean {
  switch ("electron") {
    case "electron":
    case "chrome-extension":
    case "browser":
      return true;
    case "extension":
      return false;
  }
}
