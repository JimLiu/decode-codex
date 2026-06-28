// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// React hooks for reading values from the app-scope signal runtime.
import {
  FB as useScopeRaw,
  IB as useSignalValueRaw,
  PB as useScopedValueRaw,
} from "../boundaries/current-ref/appg-thread-shared-producer";

export function useScope<TScope = unknown>(scope: unknown): TScope {
  return useScopeRaw(scope) as TScope;
}

export function useSignalValue<TValue = unknown>(signal: unknown): TValue {
  return useSignalValueRaw(signal) as TValue;
}

export function useScopedValue<TValue = unknown>(
  signal: unknown,
  key?: unknown,
): TValue {
  return (arguments.length === 1
    ? useScopedValueRaw(signal)
    : useScopedValueRaw(signal, key)) as TValue;
}
