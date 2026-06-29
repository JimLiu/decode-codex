// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~dv5z3ftk-BhBbJNnt.js
// Minimal Jotai-compatible atom runtime used by restored current bundle boundaries.
import * as React from "react";

export type Atom<Value = unknown> = {
  debugLabel?: string;
  init?: Value;
  read(get: Getter): Value;
  toString(): string;
  write?: (
    get: Getter,
    set: Setter,
    value: Value | ((current: Value) => Value),
  ) => void;
};

export type Getter = <Value>(atom: Atom<Value>) => Value;
export type Setter = <Value>(
  atom: Atom<Value>,
  value: Value | ((current: Value) => Value),
) => void;

export type AtomStore = {
  get: Getter;
  set: Setter;
  sub(atom: Atom, listener: () => void): () => void;
};

let nextAtomId = 0;

function resolveAtomDefault<Value>(atom: Atom<Value>): Value {
  if ("init" in atom) return atom.init as Value;
  return atom.read(store.get);
}

const values = new WeakMap<Atom, unknown>();
const listeners = new WeakMap<Atom, Set<() => void>>();

const store: AtomStore = {
  get<Value>(atom: Atom<Value>): Value {
    if (!values.has(atom)) values.set(atom, resolveAtomDefault(atom));
    return values.get(atom) as Value;
  },
  set<Value>(atom: Atom<Value>, value: Value | ((current: Value) => Value)) {
    if (atom.write) {
      atom.write(store.get, store.set, value);
      return;
    }
    const current = store.get(atom);
    const next =
      typeof value === "function"
        ? (value as (current: Value) => Value)(current)
        : value;
    values.set(atom, next);
    listeners.get(atom)?.forEach((listener) => listener());
  },
  sub(atom, listener) {
    let atomListeners = listeners.get(atom);
    if (!atomListeners) {
      atomListeners = new Set();
      listeners.set(atom, atomListeners);
    }
    atomListeners.add(listener);
    return () => {
      atomListeners?.delete(listener);
    };
  },
};

const storeContext = React.createContext<AtomStore>(store);

export function createAtom<Value>(
  initialValue: Value,
  write?: Atom<Value>["write"],
): Atom<Value>;
export function createAtom<Value>(
  read: (get: Getter) => Value,
  write?: Atom<Value>["write"],
): Atom<Value>;
export function createAtom<Value>(
  readOrInitialValue: Value | ((get: Getter) => Value),
  write?: Atom<Value>["write"],
): Atom<Value> {
  const id = `atom${++nextAtomId}`;
  const atomRecord: Atom<Value> = {
    read:
      typeof readOrInitialValue === "function"
        ? (readOrInitialValue as (get: Getter) => Value)
        : () => readOrInitialValue,
    toString: () => id,
    write,
  };

  if (typeof readOrInitialValue !== "function") {
    atomRecord.init = readOrInitialValue;
  }

  return atomRecord;
}

export type JotaiProviderProps = {
  children: React.ReactNode;
  store?: AtomStore;
};

export function JotaiProvider({
  children,
  store: providedStore = store,
}: JotaiProviderProps) {
  return (
    <storeContext.Provider value={providedStore}>
      {children}
    </storeContext.Provider>
  );
}

export function useStore(options?: { store?: AtomStore }): AtomStore {
  return options?.store ?? React.useContext(storeContext);
}

export function useAtomValue<Value>(
  atom: Atom<Value>,
  options?: { store?: AtomStore },
): Value {
  const activeStore = useStore(options);
  const [value, setValue] = React.useState(() => activeStore.get(atom));

  React.useEffect(
    () =>
      activeStore.sub(atom, () => {
        setValue(activeStore.get(atom));
      }),
    [activeStore, atom],
  );

  return value;
}

export function useSetAtom<Value>(
  atom: Atom<Value>,
  options?: { store?: AtomStore },
): (value: Value | ((current: Value) => Value)) => void {
  const activeStore = useStore(options);
  return React.useCallback(
    (value) => {
      activeStore.set(atom, value);
    },
    [activeStore, atom],
  );
}

export function useAtom<Value>(
  atom: Atom<Value>,
  options?: { store?: AtomStore },
): [Value, (value: Value | ((current: Value) => Value)) => void] {
  return [useAtomValue(atom, options), useSetAtom(atom, options)];
}

export function initJotaiRuntimeChunk(): void {}
