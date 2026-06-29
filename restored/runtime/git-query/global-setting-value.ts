// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~bj5tp28r-Dcs9S3fj.js
// Hook for reading a single global setting definition.
import { useGlobalStateQuery } from "../global-state-runtime";

export function useGlobalSettingValue<TValue = unknown>(setting: {
  default?: TValue;
  key: string;
}): TValue | undefined {
  const { data } = useGlobalStateQuery<TValue>(setting.key);
  return data ?? setting.default;
}
