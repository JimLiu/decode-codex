// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// React Redux Provider runtime inlined into the current app-main aggregator.
import React, {
  createContext,
  useEffect,
  useLayoutEffect,
  useMemo,
} from "react";

type StoreListener = () => void;

interface ListenerCollection {
  clear(): void;
  notify(): void;
  subscribe(listener: StoreListener): () => void;
}

interface ReactReduxSubscription {
  addNestedSub(listener: StoreListener): () => void;
  handleChangeWrapper(): void;
  isSubscribed(): boolean;
  notifyNestedSubs(): void;
  onStateChange?: StoreListener;
  trySubscribe(): void;
  tryUnsubscribe(): void;
}

export interface ReactReduxStore {
  dispatch?: unknown;
  getState(): unknown;
  subscribe(listener: StoreListener): () => void;
}

interface ReactReduxContextValue {
  getServerState?: () => unknown;
  store: ReactReduxStore;
  subscription: ReactReduxSubscription;
}

export interface ReactReduxProviderProps {
  children?: React.ReactNode;
  context?: React.Context<ReactReduxContextValue | null>;
  serverState?: unknown;
  store: ReactReduxStore;
}

function createListenerCollection(): ListenerCollection {
  let listeners = new Set<StoreListener>();

  return {
    clear() {
      listeners.clear();
    },
    notify() {
      for (const listener of listeners) listener();
    },
    subscribe(listener) {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
  };
}

function createReactReduxSubscription(
  store: ReactReduxStore,
  parentSub?: ReactReduxSubscription | null,
): ReactReduxSubscription {
  let unsubscribe: (() => void) | undefined;
  let listeners = createListenerCollection();
  let subscriptionsAmount = 0;
  let selfSubscribed = false;

  const subscription: ReactReduxSubscription = {
    addNestedSub(listener) {
      subscription.trySubscribe();
      const removeListener = listeners.subscribe(listener);
      let removed = false;
      return () => {
        if (!removed) {
          removed = true;
          removeListener();
          subscription.tryUnsubscribe();
        }
      };
    },
    handleChangeWrapper() {
      subscription.onStateChange?.();
    },
    isSubscribed() {
      return selfSubscribed;
    },
    notifyNestedSubs() {
      listeners.notify();
    },
    trySubscribe() {
      subscriptionsAmount += 1;
      selfSubscribed = true;
      if (!unsubscribe) {
        unsubscribe = parentSub
          ? parentSub.addNestedSub(subscription.handleChangeWrapper)
          : store.subscribe(subscription.handleChangeWrapper);
        listeners = createListenerCollection();
      }
    },
    tryUnsubscribe() {
      subscriptionsAmount -= 1;
      if (unsubscribe && subscriptionsAmount <= 0) {
        unsubscribe();
        unsubscribe = undefined;
        selfSubscribed = false;
        subscriptionsAmount = 0;
        listeners.clear();
        listeners = createListenerCollection();
      }
    },
  };

  return subscription;
}

const reactReduxContextCache =
  typeof globalThis !== "undefined" ? globalThis : {};
const reactReduxContextSymbol = Symbol.for("react-redux-context");

function getReactReduxContext(): React.Context<ReactReduxContextValue | null> {
  const cacheHost = reactReduxContextCache as { [key: symbol]: unknown };
  let contextMap = cacheHost[reactReduxContextSymbol] as
    | Map<typeof createContext, React.Context<ReactReduxContextValue | null>>
    | undefined;
  if (!contextMap) {
    contextMap = new Map();
    cacheHost[reactReduxContextSymbol] = contextMap;
  }
  let context = contextMap.get(createContext);
  if (!context) {
    context = createContext<ReactReduxContextValue | null>(null);
    contextMap.set(createContext, context);
  }
  return context;
}

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" &&
  window.document !== undefined &&
  window.document.createElement !== undefined
    ? useLayoutEffect
    : useEffect;

export const ReactReduxContext = getReactReduxContext();

export function ReactReduxProvider({
  children,
  context,
  serverState,
  store,
}: ReactReduxProviderProps): React.ReactElement {
  const contextValue = useMemo<ReactReduxContextValue>(
    () => ({
      store,
      subscription: createReactReduxSubscription(store),
      getServerState: serverState ? () => serverState : undefined,
    }),
    [serverState, store],
  );
  const previousState = useMemo(() => store.getState(), [store]);

  useIsomorphicLayoutEffect(() => {
    const { subscription } = contextValue;
    subscription.onStateChange = subscription.notifyNestedSubs;
    subscription.trySubscribe();
    if (previousState !== store.getState()) subscription.notifyNestedSubs();
    return () => {
      subscription.tryUnsubscribe();
      subscription.onStateChange = undefined;
    };
  }, [contextValue, previousState, store]);

  const Context = context ?? ReactReduxContext;
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

export function initReactReduxProviderRuntimeChunk(): void {}
