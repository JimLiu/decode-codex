// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js
// Scope-access hooks used by the composer: read the scope store for a scope token,
// derive the conversation id it represents, and read scoped queries / atoms. The
// store/query/atom hooks resolve through the app-scope hook wrappers; the
// conversation-id derivation is reconstructed inline.
import {
  useScope as useScopeStoreImpl,
  useScopedValue as useScopedQueryImpl,
  useSignalValue as useScopedAtomValueImpl,
} from "../runtime/app-scope-hooks";
import type { ScopeToken } from "../runtime/scope-signal-runtime";
import type { ComposerScopeValue, ScopeAtom } from "./composer-atoms";

/** Live scope store for a scope token: its current value plus atom accessors. */
export interface ScopeStore<Value> {
  readonly value: Value;
  readonly scope: ScopeToken<Value>;
  get<AtomValue>(atom: ScopeAtom<AtomValue>): AtomValue;
  set(atom: unknown, ...args: unknown[]): void;
  query(atom: unknown, arg?: unknown): unknown;
  watch(atom: unknown): unknown;
  when(atom: unknown, ...args: unknown[]): unknown;
}

/** Resolve and subscribe to the scope store for the given scope token. */
export function useScopeStore<Value>(
  scope: ScopeToken<Value>,
): ScopeStore<Value> {
  return useScopeStoreImpl<ScopeStore<Value>>(scope);
}

/** The conversation id represented by a composer scope, or `null` for new/other scopes. */
export function useScopeConversationId(
  scope: ScopeStore<ComposerScopeValue>,
): string | null {
  const value = scope.value;
  return value.kind === "local" ? value.conversationId : null;
}

/** Subscribe to the value of a scoped atom in the current scope. */
export function useScopedAtomValue<Value>(atom: ScopeAtom<Value>): Value {
  return useScopedAtomValueImpl<Value>(atom);
}

/** Subscribe to a scoped query family resolved for the given argument. */
export function useScopedQuery<Data>(
  queryFamily: unknown,
  arg?: unknown,
): Data {
  return useScopedQueryImpl<Data>(queryFamily, arg);
}
