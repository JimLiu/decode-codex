// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Drag-and-drop reordering helpers for app-shell tab strips: committing a moved
// tab back to its source, reordering within a controller, tracking the live drop
// preview, and projecting the previewed tab order during a drag.
import { arrayMove } from "../vendor/dnd-kit-sortable";
import { getTabInsertionIndex } from "./app-shell-tab-controller";
import type {
  AppShellStore,
  AppShellTabController,
  AppShellTabInsertionPlacement,
  AppShellTabRecord,
} from "./app-shell-tab-controller/types";

interface CommitTabToSourcePayload {
  sourceController: AppShellTabController;
  tabId: string;
  sourceIndex: number;
  wasDraggedTabActive: boolean;
}

export function commitTabToSourceIndex(
  store: AppShellStore,
  payload: CommitTabToSourcePayload,
): void {
  const tabIds = store.get<string[]>(payload.sourceController.tabIds$);
  const currentIndex = tabIds.indexOf(payload.tabId);
  if (currentIndex === -1) return;
  if (currentIndex !== payload.sourceIndex) {
    store.set(
      payload.sourceController.tabIds$,
      arrayMove(tabIds, currentIndex, payload.sourceIndex),
    );
  }
  if (payload.wasDraggedTabActive) {
    payload.sourceController.activateTab(store, payload.tabId);
  }
}

export function reorderTabWithinController(
  store: AppShellStore,
  controller: AppShellTabController,
  fromTabId: string,
  toTabId: string,
): void {
  const tabIds = store.get<string[]>(controller.tabIds$);
  const fromIndex = tabIds.indexOf(fromTabId);
  const toIndex = tabIds.indexOf(toTabId);
  if (fromIndex === -1 || toIndex === -1 || fromIndex === toIndex) return;
  store.set(controller.tabIds$, arrayMove(tabIds, fromIndex, toIndex));
}

export interface TabDropPreviewState {
  previewController: AppShellTabController;
  overTabId: string;
  insertionPlacement: AppShellTabInsertionPlacement;
}

export function withDropPreview<T extends TabDropPreviewState>(
  state: T,
  previewController: AppShellTabController,
  overTabId: string,
  insertionPlacement: AppShellTabInsertionPlacement,
): T {
  return state.previewController === previewController &&
    state.overTabId === overTabId &&
    state.insertionPlacement === insertionPlacement
    ? state
    : {
        ...state,
        insertionPlacement,
        overTabId,
        previewController,
      };
}

export function resolveInsertionPlacement(
  pointerPosition: number | null | undefined,
  edgeStart: number,
  size: number,
): AppShellTabInsertionPlacement {
  return pointerPosition != null && pointerPosition >= edgeStart + size / 2
    ? "after"
    : "before";
}

interface TabDragState {
  sourceController: AppShellTabController;
  previewController: AppShellTabController;
  draggedTab: AppShellTabRecord;
  overTabId: string;
  insertionPlacement: AppShellTabInsertionPlacement;
}

export function projectPreviewTabs(
  tabs: AppShellTabRecord[],
  controller: AppShellTabController,
  dragState: TabDragState | null,
): AppShellTabRecord[] {
  if (
    dragState == null ||
    dragState.previewController === dragState.sourceController
  ) {
    return tabs;
  }
  if (controller === dragState.sourceController) {
    return tabs.filter((tab) => tab.tabId !== dragState.draggedTab.tabId);
  }
  if (controller !== dragState.previewController) return tabs;
  const insertionIndex = getTabInsertionIndex(
    tabs.map((tab) => tab.tabId),
    dragState.overTabId,
    dragState.insertionPlacement,
  );
  const previewTabs = [...tabs];
  previewTabs.splice(insertionIndex, 0, dragState.draggedTab);
  return previewTabs;
}
