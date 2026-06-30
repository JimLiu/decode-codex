// Restored from ref/webview/assets/app-scope-Cp_DWew0.js
// Lightweight app-scope signal/query runtime used by restored chunks.
import React from "react";
import { createPortal } from "react-dom";

type Signal<T = unknown> = {
  defaultValue?: T | (() => T);
  id: string;
  read?: (key: unknown, store: AppScopeStore) => T;
};
type QueryState<T = unknown> = {
  data?: T;
  error?: unknown;
  isError: boolean;
  isLoading: boolean;
  isPending: boolean;
};
type Snapshot<T = unknown> = {
  cancel(): Promise<void>;
  getData(): T | undefined;
  invalidate(): Promise<void>;
  queryKey: readonly unknown[];
  setData(data: T | undefined): void;
};

let nextSignalId = 0;

function signalKey(signal: unknown, key?: unknown): string {
  const id =
    typeof signal === "object" && signal !== null && "id" in signal
      ? String((signal as { id: unknown }).id)
      : String(signal);
  return key === undefined ? id : `${id}:${JSON.stringify(key)}`;
}

function resolveDefault<T>(signal: Signal<T>): T | undefined {
  return typeof signal.defaultValue === "function"
    ? (signal.defaultValue as () => T)()
    : signal.defaultValue;
}

class AppScopeStore {
  private readonly values = new Map<string, unknown>();
  readonly query = {
    snapshot: <T,>(query: unknown): Snapshot<T> => {
      const key = signalKey(query);
      return {
        cancel: async () => {},
        getData: () => this.values.get(key) as T | undefined,
        invalidate: async () => {},
        queryKey: [key],
        setData: (data: T | undefined) => {
          if (data === undefined) this.values.delete(key);
          else this.values.set(key, data);
        },
      };
    },
    setData: (query: unknown, keyOrValue: unknown, value?: unknown): void => {
      const key =
        value === undefined ? signalKey(query) : signalKey(query, keyOrValue);
      this.values.set(key, value === undefined ? keyOrValue : value);
    },
  };
  constructor(readonly value: unknown = null) {}
  get<T = unknown>(signal: unknown, key?: unknown): T {
    const typedSignal = signal as Signal<T>;
    if (typedSignal?.read) return typedSignal.read(key, this);
    const storageKey = signalKey(signal, key);
    if (this.values.has(storageKey)) return this.values.get(storageKey) as T;
    return resolveDefault(typedSignal) as T;
  }
  set(signal: unknown, keyOrUpdater: unknown, value?: unknown): void {
    const hasKey = value !== undefined || arguments.length >= 3;
    const key = hasKey ? keyOrUpdater : undefined;
    const nextValue = hasKey ? value : keyOrUpdater;
    const storageKey = signalKey(signal, key);
    const currentValue = this.values.get(storageKey);
    this.values.set(
      storageKey,
      typeof nextValue === "function"
        ? (nextValue as (current: unknown) => unknown)(currentValue)
        : nextValue,
    );
  }
  watch(callback: (store: AppScopeStore) => void): () => void {
    callback(this);
    return () => {};
  }
}

const rootStore = new AppScopeStore();

export const appScopeRoot = { id: "appScopeRoot" };
export const appScopeT = appScopeRoot;
export const _appScopeT = appScopeRoot;

export function createAppScopeSignal<T>(
  _scope: unknown,
  defaultValue?: T | (() => T),
): Signal<T> {
  return {
    defaultValue,
    id: `signal:${nextSignalId++}`,
  };
}

export const appScopeG = createAppScopeSignal;
export const _appScopeG = createAppScopeSignal;

export function appScopeUnderscore<T>(
  scope: unknown,
  defaultValue?: T | (() => T),
): Signal<T> {
  return createAppScopeSignal(scope, defaultValue);
}

export function appScopeL<T>(
  _scope: unknown,
  read: (key: unknown, store: AppScopeStore) => T,
): Signal<T> {
  return {
    id: `derived:${nextSignalId++}`,
    read,
  };
}

export function _appScopeC<T>(
  _scope: unknown,
  read: (store: AppScopeStore) => T,
): Signal<T> {
  return {
    id: `computed:${nextSignalId++}`,
    read: (_key, store) => read(store),
  };
}

export const appScopeC = _appScopeC;

export function _appScopeL<T>(
  _scope: unknown,
  read: (key: unknown, store: AppScopeStore) => T,
): Signal<T> {
  return appScopeL(_scope, read);
}

export function _appScopeM<T>(
  scope: unknown,
  queryFactory: (...args: unknown[]) => T,
): Signal<T> {
  return appScopeL(scope, (key) =>
    Array.isArray(key) ? queryFactory(...key) : queryFactory(key),
  );
}

export const appScopeM = _appScopeM;
export const appScopeP = _appScopeM;
export const _appScopeP = _appScopeM;

export function useAppScopeValue<T>(signal: unknown, key?: unknown): T {
  return rootStore.get<T>(signal, key);
}

export const _appScopeA = useAppScopeValue;
export const _appScopeS = useAppScopeValue;
export const appScopeA = useAppScopeValue;
export const appScopeS = useAppScopeValue;

export function _appScopeO(): AppScopeStore {
  return rootStore;
}

export const appScopeO = _appScopeO;
export const appScopeD = _appScopeO;

const queryClientContext = React.createContext<unknown>(undefined);

export function _appScopeN({
  children,
  queryClient,
}: {
  children: React.ReactNode;
  queryClient: {
    mount?: () => void;
    unmount?: () => void;
  };
}) {
  React.useEffect(() => {
    queryClient.mount?.();
    return () => {
      queryClient.unmount?.();
    };
  }, [queryClient]);

  return (
    <queryClientContext.Provider value={queryClient}>
      {children}
    </queryClientContext.Provider>
  );
}

export function appScopeH(name: string, value: unknown = null): AppScopeStore {
  return new AppScopeStore({ name, value });
}

export const createScopedScope = appScopeH;
export const _appScopeH = appScopeH;

export function appScopeU<T>(resolver: T): T {
  return resolver;
}

export function appScopeB<T>(value: T): T {
  return value;
}

export function _appScopeI<T>(value: T): T {
  return value;
}

export function _appScopeY<T>(value: T): T {
  return value;
}

export const appScopeX = React.createContext;
export const appScopeZ = React.useContext;
export const _appScopeX = appScopeX;
export const _appScopeZ = appScopeZ;
export { createPortal };
