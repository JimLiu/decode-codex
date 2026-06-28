// Restored from ref/webview/assets/use-global-state-C0LjG8WG.js
// use-global-state-C0LjG8WG chunk restored from the Codex webview bundle.
import { _appScopeA as useScopedSignalValue } from "../boundaries/app-scope";
import { globalStateSignal } from "../boundaries/thread-context-inputs.facade";
export function useGlobalState<TValue = unknown>(scope?: unknown): TValue {
  return useScopedSignalValue(globalStateSignal, scope);
}
