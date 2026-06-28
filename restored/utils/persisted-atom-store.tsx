// Restored from ref/webview/assets/persisted-atom-store-CN8swCI1.js
// persisted-atom-store-CN8swCI1 chunk restored from the Codex webview bundle.
const PERSISTED_ATOM_LOCAL_STORAGE_PREFIX = "codex:persisted-atom:";

type PersistedAtomStorage = Record<string, unknown>;
type PersistedAtomStorageWriter = (
  key: string,
  value: unknown | undefined,
) => void;
type PersistedAtomSubscription = {
  callback: (value: unknown) => void;
  fallback: unknown;
};

const persistedAtomValues = new Map<string, unknown>();
const persistedAtomSubscriptions = new Map<
  string,
  Set<PersistedAtomSubscription>
>();
let persistedAtomStorageWriter: PersistedAtomStorageWriter | null = null;

function requirePersistedAtomStorageWriter() {
  const writer = persistedAtomStorageWriter;
  if (writer) return writer;
  throw Error("Persisted atom store accessed before initialization");
}

function notifyPersistedAtomSubscribers(key: string) {
  const subscriptions = persistedAtomSubscriptions.get(key);
  if (!subscriptions) return;

  const hasValue = persistedAtomValues.has(key);
  const value = hasValue ? persistedAtomValues.get(key) : undefined;
  subscriptions.forEach((subscription) => {
    if (hasValue) {
      subscription.callback(value);
      return;
    }
    subscription.callback(subscription.fallback);
  });
}

function setPersistedAtomValue(
  key: string,
  value: unknown | undefined,
  shouldPersist: boolean,
) {
  const writer = requirePersistedAtomStorageWriter();
  if (value === undefined) persistedAtomValues.delete(key);
  else persistedAtomValues.set(key, value);
  if (shouldPersist) writer(key, value);
  notifyPersistedAtomSubscribers(key);
}

function getPersistedAtomValue(key: string, fallback: unknown) {
  return createPersistedAtomStore().getItem(key, fallback);
}

function clearPersistedAtomStore() {
  requirePersistedAtomStorageWriter();

  const keys = Array.from(persistedAtomValues.keys());
  persistedAtomValues.clear();

  const writer = persistedAtomStorageWriter;
  if (writer) {
    keys.forEach((key) => writer(key, undefined));
  }
  keys.forEach((key) => notifyPersistedAtomSubscribers(key));
  clearPersistedAtomLocalStorage();
}

function createPersistedAtomStore() {
  return {
    getItem: (key: string, fallback: unknown) => {
      requirePersistedAtomStorageWriter();
      return persistedAtomValues.has(key)
        ? persistedAtomValues.get(key)
        : fallback;
    },
    setItem: (key: string, value: unknown | undefined) => {
      requirePersistedAtomStorageWriter();
      if (value === undefined) {
        setPersistedAtomValue(key, undefined, true);
        return;
      }
      setPersistedAtomValue(key, value, true);
    },
    removeItem: (key: string) => {
      requirePersistedAtomStorageWriter();
      setPersistedAtomValue(key, undefined, true);
    },
    subscribe: (
      key: string,
      callback: (value: unknown) => void,
      fallback: unknown,
    ) => {
      requirePersistedAtomStorageWriter();

      const subscription = { callback, fallback };
      const subscriptions =
        persistedAtomSubscriptions.get(key) ??
        new Set<PersistedAtomSubscription>();
      subscriptions.add(subscription);
      persistedAtomSubscriptions.set(key, subscriptions);

      return () => {
        const currentSubscriptions = persistedAtomSubscriptions.get(key);
        if (currentSubscriptions) {
          currentSubscriptions.delete(subscription);
          if (currentSubscriptions.size === 0) {
            persistedAtomSubscriptions.delete(key);
          }
        }
      };
    },
  };
}

function setPersistedAtomItem(key: string, value: unknown | undefined) {
  createPersistedAtomStore().setItem(key, value);
}

function setPersistedAtomValueInMemory(
  key: string,
  value: unknown | undefined,
) {
  requirePersistedAtomStorageWriter();
  setPersistedAtomValue(key, value, false);
}

function initializePersistedAtomStore(
  storage: PersistedAtomStorage,
  writer: PersistedAtomStorageWriter,
) {
  const changedKeys = new Set([
    ...persistedAtomValues.keys(),
    ...Object.keys(storage),
  ]);

  persistedAtomValues.clear();
  Object.entries(storage).forEach(([key, value]) => {
    if (value !== undefined) persistedAtomValues.set(key, value);
  });
  persistedAtomStorageWriter = writer;
  changedKeys.forEach((key) => notifyPersistedAtomSubscribers(key));
}

function clearPersistedAtomLocalStorage() {
  if (typeof window > "u" || !window.localStorage) return;

  const keys: string[] = [];
  for (let index = 0; index < window.localStorage.length; index += 1) {
    const key = window.localStorage.key(index);
    if (key?.startsWith(PERSISTED_ATOM_LOCAL_STORAGE_PREFIX)) keys.push(key);
  }
  keys.forEach((key) => window.localStorage.removeItem(key));
}

function readPersistedAtomLocalStorage(prefix: string) {
  if (typeof window > "u" || !window.localStorage) return {};

  const storage: PersistedAtomStorage = {};
  for (let index = 0; index < window.localStorage.length; index += 1) {
    const key = window.localStorage.key(index);
    if (!key || !key.startsWith(prefix)) continue;

    const value = window.localStorage.getItem(key);
    if (value != null) {
      try {
        storage[key.replace(prefix, "")] = JSON.parse(value);
      } catch {
        window.localStorage.removeItem(key);
      }
    }
  }
  return storage;
}

function subscribePersistedAtomValue(
  key: string,
  fallback: unknown,
  callback: (value: unknown) => void,
) {
  const subscribe = createPersistedAtomStore().subscribe;
  if (subscribe == null) return () => {};
  const unsubscribe = subscribe(key, callback, fallback);
  return () => {
    unsubscribe?.();
  };
}

export {
  getPersistedAtomValue,
  clearPersistedAtomStore,
  createPersistedAtomStore,
  setPersistedAtomItem,
  setPersistedAtomValueInMemory,
  initializePersistedAtomStore,
  clearPersistedAtomLocalStorage,
  readPersistedAtomLocalStorage,
  PERSISTED_ATOM_LOCAL_STORAGE_PREFIX,
  subscribePersistedAtomValue,
};
