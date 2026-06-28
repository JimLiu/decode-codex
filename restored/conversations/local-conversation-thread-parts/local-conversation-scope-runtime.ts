// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Scope runtime helpers shared by local conversation thread state modules.
import {
  createAppScopedSignal,
  createAppScopedSignalFamily,
  initAppScopeSignalRuntime,
  type ScopedSignalFamilyInitializer,
  type ScopedSignalInitializer,
} from "../../runtime/app-scope-runtime";

export function initLocalConversationScopeRuntime(): void {
  initAppScopeSignalRuntime();
}

export function createLocalConversationScopedSignal<TKey, TValue>(
  initializer: ScopedSignalInitializer<TKey, TValue>,
): unknown {
  return createAppScopedSignal(initializer);
}

export function createLocalConversationScopedSignalFamily<TKey, TValue>(
  initializer: ScopedSignalFamilyInitializer<TKey, TValue>,
): unknown {
  return createAppScopedSignalFamily(initializer);
}
