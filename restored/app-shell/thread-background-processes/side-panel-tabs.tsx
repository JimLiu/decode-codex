// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~thread-app-shell-ch~ou5otpha-1Hh4BDD9.js
// Thread side-panel tab registry and registration hook.
import { useEffect, useMemo } from "react";

import {
  _appScopeO as useAppScopeStore,
  _appScopeC as createAppScopeSelector,
  appScopeRoot,
  createAppScopeSignal,
} from "../../boundaries/app-scope";
import type { ThreadSidePanelTabDefinition } from "./types";

export const threadSidePanelTabDefinitionsSignal = createAppScopeSignal(
  appScopeRoot,
  [] as ThreadSidePanelTabDefinition[],
);
export const threadCommandMenuEntriesSignal =
  threadSidePanelTabDefinitionsSignal;

export const enabledThreadSidePanelTabsSignal = createAppScopeSelector(
  appScopeRoot,
  ({ get }: { get<Value>(signal: unknown): Value }) =>
    get<ThreadSidePanelTabDefinition[]>(threadSidePanelTabDefinitionsSignal)
      .filter(isThreadSidePanelTabEnabled)
      .sort(compareThreadSidePanelTabs),
);

const registeredThreadSidePanelTabs = new Map<
  string,
  ThreadSidePanelTabDefinition
>();

export function registerThreadSidePanelTab(
  definition: ThreadSidePanelTabDefinition,
) {
  const appScopeStore = useAppScopeStore() as {
    set(
      signal: unknown,
      updater: (
        currentDefinitions: readonly ThreadSidePanelTabDefinition[] | undefined,
      ) => readonly ThreadSidePanelTabDefinition[],
    ): void;
  };
  const dependencyKey = useMemo(
    () =>
      definition.dependencies == null
        ? ""
        : definition.dependencies.map(normalizeDependencyKey).join("|"),
    [definition.dependencies],
  );

  useEffect(() => {
    appScopeStore.set(threadSidePanelTabDefinitionsSignal, (current = []) =>
      upsertThreadSidePanelTab(current, definition),
    );
    registeredThreadSidePanelTabs.set(definition.id, definition);
    return () => {
      appScopeStore.set(threadSidePanelTabDefinitionsSignal, (current = []) =>
        current.filter((tab) => tab.id !== definition.id),
      );
      registeredThreadSidePanelTabs.delete(definition.id);
    };
  }, [appScopeStore, definition, dependencyKey]);
}

export const useRegisterThreadCommandMenuEntry = registerThreadSidePanelTab;

export function getRegisteredThreadSidePanelTabs() {
  return Array.from(registeredThreadSidePanelTabs.values())
    .filter(isThreadSidePanelTabEnabled)
    .sort(compareThreadSidePanelTabs);
}

export function getThreadSidePanelTabId(tab: ThreadSidePanelTabDefinition) {
  return tab.id;
}

export function getThreadSidePanelTabOrder(tab: ThreadSidePanelTabDefinition) {
  return tab.order ?? 0;
}

function isThreadSidePanelTabEnabled(tab: ThreadSidePanelTabDefinition) {
  return tab.enabled !== false;
}

function compareThreadSidePanelTabs(
  leftTab: ThreadSidePanelTabDefinition,
  rightTab: ThreadSidePanelTabDefinition,
) {
  return (
    getThreadSidePanelTabOrder(leftTab) -
      getThreadSidePanelTabOrder(rightTab) ||
    getThreadSidePanelTabId(leftTab).localeCompare(
      getThreadSidePanelTabId(rightTab),
    )
  );
}

function normalizeDependencyKey(value: unknown) {
  return value == null ? "" : String(value);
}

function upsertThreadSidePanelTab(
  currentDefinitions: readonly ThreadSidePanelTabDefinition[],
  definition: ThreadSidePanelTabDefinition,
) {
  let didReplace = false;
  const nextDefinitions = currentDefinitions.map((tab) => {
    if (tab.id !== definition.id) return tab;
    didReplace = true;
    return definition;
  });
  if (!didReplace) nextDefinitions.push(definition);
  return nextDefinitions
    .filter(isThreadSidePanelTabEnabled)
    .sort(compareThreadSidePanelTabs);
}

export function initThreadSidePanelTabRegistryChunk() {}
export const initThreadCommandMenuEntryRegistryChunk =
  initThreadSidePanelTabRegistryChunk;
