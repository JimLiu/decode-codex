// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~dv5z3ftk-BhBbJNnt.js
// AppScope root is restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~onboarding-page~projects-index-page~hotkey-wi~nek76pmq-C240EGR1.js.
// App-scope signal primitives shared by restored conversation/runtime modules.
import {
  Ao as initScopeRuntimeRaw,
  Ds as createScopedSignalRaw,
  Os as createScopedSignalFamilyRaw,
  ys as createDerivedSignalRaw,
} from "../../ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~dv5z3ftk-BhBbJNnt.js";
import {
  _ as initAppScopeRaw,
  g as appScopeRoot,
} from "../../ref/webview/assets/app-initial~app-main~remote-conversation-page~onboarding-page~projects-index-page~hotkey-wi~nek76pmq-C240EGR1.js";

export type ScopedSignalGetter = {
  get<TValue = unknown>(signal: unknown, key?: unknown): TValue;
};

export type ScopedSignalInitializer<TKey, TValue> = (key: TKey) => TValue;

export type ScopedSignalFamilyInitializer<TKey, TValue> = (
  key: TKey,
  context: ScopedSignalGetter,
) => TValue;

export { appScopeRoot };
export const appScope = appScopeRoot;

export function initScopeRuntime(): void {
  initScopeRuntimeRaw();
}

export function initAppScope(): void {
  initAppScopeRaw();
}

export function initAppScopeSignalRuntime(): void {
  initScopeRuntime();
  initAppScope();
}

export function createAppScopedSignal<TKey, TValue>(
  initializer: ScopedSignalInitializer<TKey, TValue>,
): unknown {
  return createScopedSignal(appScopeRoot, initializer);
}

export function createScopedSignal<TKey, TValue>(
  scope: unknown,
  initializer: ScopedSignalInitializer<TKey, TValue>,
): unknown {
  return createScopedSignalRaw(scope, initializer);
}

export function createAppScopedSignalFamily<TKey, TValue>(
  initializer: ScopedSignalFamilyInitializer<TKey, TValue>,
): unknown {
  return createScopedSignalFamilyRaw(appScopeRoot, initializer);
}

export function createDerivedSignal<TValue>(
  scope: unknown,
  derive: (context: ScopedSignalGetter) => TValue,
): unknown {
  return createDerivedSignalRaw(scope, derive);
}
