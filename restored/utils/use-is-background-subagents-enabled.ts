// Restored from ref/webview/assets/use-is-background-subagents-enabled-dspIC_V1.js
// use-is-background-subagents-enabled-dspIC_V1 chunk restored from the Codex webview bundle.
import { useGateValue } from "@statsig/react-bindings";

const BACKGROUND_SUBAGENTS_GATE = "1221508807";

export function useIsBackgroundSubagentsEnabled(): boolean {
  return useGateValue(BACKGROUND_SUBAGENTS_GATE);
}
