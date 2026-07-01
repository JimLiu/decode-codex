// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// use-sync-external-store selector runtime inlined by React Redux.
import {
  useDebugValue,
  useEffect,
  useMemo,
  useRef,
  useSyncExternalStore,
} from "react";

function isEqualSnapshot(left: unknown, right: unknown): boolean {
  return Object.is(left, right);
}

export function useSyncExternalStoreWithSelector<Snapshot, Selection>(
  subscribe: (listener: () => void) => () => void,
  getSnapshot: () => Snapshot,
  getServerSnapshot: (() => Snapshot) | undefined,
  selector: (snapshot: Snapshot) => Selection,
  isEqual?: (left: Selection, right: Selection) => boolean,
): Selection {
  const instanceRef = useRef<{ hasValue: boolean; value: Selection | null }>(
    null,
  );
  if (instanceRef.current === null) {
    instanceRef.current = { hasValue: false, value: null };
  }
  const instance = instanceRef.current;

  const [getSelection, getServerSelection] = useMemo(() => {
    let hasMemo = false;
    let memoizedSnapshot: Snapshot;
    let memoizedSelection: Selection;

    const memoizedSelector = (snapshot: Snapshot) => {
      if (!hasMemo) {
        hasMemo = true;
        memoizedSnapshot = snapshot;
        const nextSelection = selector(snapshot);
        if (isEqual !== undefined && instance.hasValue) {
          const currentSelection = instance.value as Selection;
          if (isEqual(currentSelection, nextSelection)) {
            memoizedSelection = currentSelection;
            return currentSelection;
          }
        }
        memoizedSelection = nextSelection;
        return nextSelection;
      }
      if (isEqualSnapshot(memoizedSnapshot, snapshot)) {
        return memoizedSelection;
      }
      const nextSelection = selector(snapshot);
      if (isEqual !== undefined && isEqual(memoizedSelection, nextSelection)) {
        memoizedSnapshot = snapshot;
        return memoizedSelection;
      }
      memoizedSnapshot = snapshot;
      memoizedSelection = nextSelection;
      return nextSelection;
    };

    const maybeGetServerSnapshot = getServerSnapshot ?? null;
    return [
      () => memoizedSelector(getSnapshot()),
      maybeGetServerSnapshot === null
        ? undefined
        : () => memoizedSelector(maybeGetServerSnapshot()),
    ] as const;
  }, [getServerSnapshot, getSnapshot, instance, isEqual, selector]);

  const selection = useSyncExternalStore(
    subscribe,
    getSelection,
    getServerSelection,
  );

  useEffect(() => {
    instance.hasValue = true;
    instance.value = selection;
  }, [instance, selection]);

  useDebugValue(selection);
  return selection;
}

export const useSyncExternalStoreWithSelectorRuntime = {
  useSyncExternalStoreWithSelector,
};

export function requireUseSyncExternalStoreWithSelectorRuntime(): typeof useSyncExternalStoreWithSelectorRuntime {
  return useSyncExternalStoreWithSelectorRuntime;
}
