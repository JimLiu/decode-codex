// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Imperative commands that open the Review (diff) tab in the thread side panel.
import { createElement } from "react";
import {
  reviewSourceAtom,
  reviewTargetConversationIdAtom,
  focusSidePanelTab,
  SidePanelTabKind,
  getSidePanelTabControllerForTarget,
  ReviewSidePanelTabContent,
  reviewSidePanelTabDefaultState,
  ReviewTabIcon,
  intlControllerAtom,
  navigateToReviewFilePath,
} from "../boundaries/onboarding-commons-externals.facade";

interface AppStore {
  get(atom: unknown): any;
  set(atom: unknown, value: unknown): void;
}

type SidePanelTarget = string;

function shouldResetReviewSourceToLastTurn(_store: AppStore): boolean {
  return false;
}

function openReviewSidePanelTab(
  store: AppStore,
  activate: boolean,
  target: SidePanelTarget,
): void {
  getSidePanelTabControllerForTarget(target).openTab(
    store,
    ReviewSidePanelTabContent,
    {
      defaultState: reviewSidePanelTabDefaultState,
      icon: createElement(ReviewTabIcon, { className: "icon-xs shrink-0" }),
      id: SidePanelTabKind.DIFF,
      props: {},
      title: store.get(intlControllerAtom).formatMessage({
        id: "thread.sidePanel.diffTab",
        defaultMessage: "Review",
        description: "Title for the review tab in the thread side panel",
      }),
      activate,
    },
  );
}

export function openReviewTab(
  store: AppStore,
  activate: boolean = true,
  target: SidePanelTarget = "right",
): boolean {
  if (shouldResetReviewSourceToLastTurn(store)) {
    store.set(reviewSourceAtom, "last-turn");
  }
  openReviewSidePanelTab(store, false, target);
  return !activate || focusSidePanelTab(store, target, SidePanelTabKind.DIFF);
}

export interface OpenReviewTabForConversationOptions {
  conversationId?: string | null;
  path?: string | null;
}

export function openReviewTabForConversation(
  store: AppStore,
  options: OpenReviewTabForConversationOptions = {},
): boolean {
  store.set(reviewTargetConversationIdAtom, options.conversationId ?? null);
  store.set(reviewSourceAtom, "last-turn");
  const focused = openReviewTab(store);
  if (options.path != null) navigateToReviewFilePath(store, options.path);
  return focused;
}
