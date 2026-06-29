// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~dv5z3ftk-BhBbJNnt.js
// Scope and signal primitives used by Codex app state factories.
import * as React from "react";

import {
  createAppScopeSignal,
  useAppScopeValue,
} from "../boundaries/app-scope";
import type { RuntimeQueryClient } from "./query-client/react-query-runtime";
import {
  useMutation,
  useQuery,
  type MutationOptions,
  type QueryOptions,
} from "./query-client/react-query-runtime";

export type ScopeToken<TValue = unknown> = {
  __scopeBrand: string;
  getKey?: (value: TValue) => string;
  id: symbol;
  parent?: ScopeToken;
  retain?: { max?: number };
};

export type ScopeContext<TValue = unknown> = {
  queryClient?: RuntimeQueryClient;
  scope: ScopeToken<TValue>;
  value: TValue;
};

export type Signal<TValue = unknown> = {
  defaultValue?: TValue | (() => TValue);
  debugLabel?: string;
  id: string;
  kind: "signal" | "derived" | "query" | "mutation" | "family";
  read?: (scope: ScopeContext, key?: unknown) => TValue;
};

export type SignalFamily<TValue = unknown, TArg = unknown> = {
  debugLabel?: string;
  kind: string;
  resolve(scope: ScopeContext, arg: TArg): Signal<TValue>;
  scope: ScopeToken;
};

const scopeContext = React.createContext<ScopeContext | undefined>(undefined);
let nextSignalId = 0;

function createSignalRecord<TValue>(
  kind: Signal<TValue>["kind"],
  defaultValue?: TValue | (() => TValue),
  read?: (scope: ScopeContext, key?: unknown) => TValue,
): Signal<TValue> {
  return {
    defaultValue,
    id: `${kind}:${nextSignalId++}`,
    kind,
    read,
  };
}

function resolveDefault<TValue>(signal: Signal<TValue>): TValue | undefined {
  return typeof signal.defaultValue === "function"
    ? (signal.defaultValue as () => TValue)()
    : signal.defaultValue;
}

export function createScope<TValue = unknown>(
  brand: string,
  options: {
    key?: (value: TValue) => string;
    parent?: ScopeToken;
    retain?: { max?: number };
  } = {},
): ScopeToken<TValue> {
  return {
    __scopeBrand: brand,
    getKey: options.key,
    id: Symbol(brand),
    parent: options.parent,
    retain: options.retain,
  };
}

export function createSignal<TValue>(
  scope: ScopeToken,
  defaultValue: TValue | (() => TValue),
): Signal<TValue> {
  const signal = createAppScopeSignal(scope, defaultValue) as Signal<TValue>;
  signal.kind = "signal";
  return signal;
}

export function createDerived<TValue>(
  scope: ScopeToken,
  read: (context: ScopeContext) => TValue,
): Signal<TValue> {
  return createSignalRecord("derived", undefined, read);
}

export function createFamily<TValue, TArg>(
  scope: ScopeToken,
  factory: (arg: TArg, helpers: { scope: ScopeContext }) => Signal<TValue>,
): SignalFamily<TValue, TArg> {
  const cache = new Map<string, Signal<TValue>>();
  return {
    kind: "readable-family",
    resolve(scopeContext, arg) {
      const key = JSON.stringify(arg);
      let signal = cache.get(key);
      if (!signal) {
        signal = factory(arg, { scope: scopeContext });
        cache.set(key, signal);
      }
      return signal;
    },
    scope,
  };
}

export function createSignalFamily<TValue, TArg>(
  scope: ScopeToken,
  defaultValue:
    | TValue
    | ((arg: TArg, helpers: { scope: ScopeContext }) => TValue),
): SignalFamily<TValue, TArg> {
  return createFamily(scope, (arg, helpers) =>
    createSignal(
      scope,
      typeof defaultValue === "function"
        ? (
            defaultValue as (
              arg: TArg,
              helpers: { scope: ScopeContext },
            ) => TValue
          )(arg, helpers)
        : defaultValue,
    ),
  );
}

export function createDerivedFamily<TValue, TArg>(
  scope: ScopeToken,
  read: (arg: TArg, helpers: ScopeContext) => TValue,
): SignalFamily<TValue, TArg> {
  return createFamily(scope, (arg) =>
    createDerived(scope, (context) => read(arg, context)),
  );
}

export function createQuerySignal<TData, TResult = TData>(
  scope: ScopeToken,
  getOptions: (context: ScopeContext) => QueryOptions<TData, TResult>,
): Signal<QueryOptions<TData, TResult>> {
  return createSignalRecord("query", undefined, getOptions);
}

export function createQueryFamily<TData, TResult = TData, TArg = unknown>(
  scope: ScopeToken,
  getOptions: (
    arg: TArg,
    context: ScopeContext,
  ) => QueryOptions<TData, TResult>,
): SignalFamily<QueryOptions<TData, TResult>, TArg> {
  return createFamily(scope, (arg) =>
    createQuerySignal(scope, (context) => getOptions(arg, context)),
  );
}

export function createMutationSignal<TVariables, TResult>(
  scope: ScopeToken,
  getOptions: (context: ScopeContext) => MutationOptions<TVariables, TResult>,
): Signal<MutationOptions<TVariables, TResult>> {
  return createSignalRecord("mutation", undefined, getOptions);
}

export function createMutationFamily<TVariables, TResult, TArg = unknown>(
  scope: ScopeToken,
  getOptions: (
    arg: TArg,
    context: ScopeContext,
  ) => MutationOptions<TVariables, TResult>,
): SignalFamily<MutationOptions<TVariables, TResult>, TArg> {
  return createFamily(scope, (arg) =>
    createMutationSignal(scope, (context) => getOptions(arg, context)),
  );
}

export type ScopeProviderProps<TValue = unknown> = {
  children: React.ReactNode;
  queryClient?: RuntimeQueryClient;
  scope: ScopeToken<TValue>;
  value?: TValue;
};

export function ScopeProvider<TValue = unknown>({
  children,
  queryClient,
  scope,
  value,
}: ScopeProviderProps<TValue>) {
  const parent = React.useContext(scopeContext);
  const context = React.useMemo<ScopeContext<TValue>>(
    () => ({
      queryClient: queryClient ?? parent?.queryClient,
      scope,
      value: value as TValue,
    }),
    [parent?.queryClient, queryClient, scope, value],
  );

  return (
    <scopeContext.Provider value={context}>{children}</scopeContext.Provider>
  );
}

export function ScopeQueryClientProvider({
  children,
  queryClient,
}: {
  children: React.ReactNode;
  queryClient: RuntimeQueryClient;
}) {
  const parent = React.useContext(scopeContext);
  const context = React.useMemo<ScopeContext>(
    () => ({
      queryClient,
      scope: parent?.scope ?? createScope("root"),
      value: parent?.value,
    }),
    [parent, queryClient],
  );

  return (
    <scopeContext.Provider value={context}>{children}</scopeContext.Provider>
  );
}

export function useScope<TValue = unknown>(
  scope?: ScopeToken<TValue>,
): ScopeContext<TValue> {
  const context = React.useContext(scopeContext);
  return {
    queryClient: context?.queryClient,
    scope:
      scope ?? (context?.scope as ScopeToken<TValue>) ?? createScope("root"),
    value: context?.value as TValue,
  };
}

export function resolveScopedFamily<TValue, TArg>(
  family: SignalFamily<TValue, TArg>,
  arg: TArg,
): Signal<TValue> {
  return family.resolve(useScope(family.scope), arg);
}

export function useSignalValue<TValue>(
  signal: Signal<TValue>,
  key?: unknown,
): TValue | undefined {
  const context = useScope();
  if (signal.kind === "query" && signal.read) {
    const query = useQuery(signal.read(context, key) as QueryOptions);
    return query.data as TValue | undefined;
  }
  if (signal.kind === "mutation" && signal.read) {
    return useMutation(signal.read(context, key) as MutationOptions) as TValue;
  }
  if (signal.read) return signal.read(context, key);
  return useAppScopeValue<TValue>(signal, key) ?? resolveDefault(signal);
}

export function useScopedFamilyValue<TValue, TArg>(
  family: SignalFamily<TValue, TArg>,
  arg: TArg,
  key?: unknown,
): TValue | undefined {
  return useSignalValue(family.resolve(useScope(family.scope), arg), key);
}

export function initScopeRuntimeChunk(): void {}
