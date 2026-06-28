// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Review-search highlight application and lazy thread-find navigation rail.

import React from "react";
import { once } from "../../runtime/commonjs-interop";
import {
  initDynamicModulePreloadRuntime,
  preloadDynamicImport,
} from "../../runtime/dynamic-module-preload";
import { useSignalValue } from "../../runtime/app-scope-hooks";
import { initAppScopeSignalRuntime } from "../../runtime/app-scope-runtime";
import {
  initStatsigFeatureGateRuntime,
  useStatsigGate,
} from "../../runtime/feature-gate-runtime";
import { initSearchIcon } from "../../ui/dropdown/search";
import {
  activeContentSearchMatchClassName,
  activeConversationSearchMatchSignal,
  clearContentSearchHighlights,
  conversationSearchResultSignal,
  createLazyNavigationRailComponent,
  groupConversationSearchMatchesByContentUnitKey,
  highlightContentSearchMatches,
  initConversationContentSearchRuntime,
  initLazyNavigationRailRuntime,
  setContentSearchMatchIdAttribute,
  shouldRefreshSearchHighlightMutations,
  type ContentSearchMatch,
} from "./conversation-search-runtime";
import { threadUserMessageNavigationRailDeps } from "./thread-user-message-navigation-rail-deps";

const REVIEW_SEARCH_HIGHLIGHT_MUTATION_DELAY_MS = 80;

type ReviewSearchHighlightsProps = {
  containerRef: React.RefObject<HTMLElement | null>;
  contextId: string | null;
};

type ThreadFindNavigationRailProps = {
  enabled?: boolean;
  getItems: () => readonly unknown[];
  onRevealItem: (item: unknown) => void;
};

type ConversationSearchRun = {
  contextId: string | null;
  matches: readonly ContentSearchMatch[];
  query: string;
  runId?: string | null;
};

type ActiveConversationSearchMatch = {
  id?: string | null;
};

function mapThreadUserMessageNavigationRailDeps(indexes: readonly number[]) {
  return indexes.map((index) => threadUserMessageNavigationRailDeps[index]);
}

function useReviewSearchHighlightScheduler(delayMs: number) {
  let timeoutIdRef = React.useRef<number | null>(null),
    schedule = (callback: () => void) => {
      timeoutIdRef.current ??= window.setTimeout(() => {
        timeoutIdRef.current = null;
        callback();
      }, delayMs);
    };
  let cancel = () => {
    timeoutIdRef.current != null &&
      (window.clearTimeout(timeoutIdRef.current),
      (timeoutIdRef.current = null));
  };
  return {
    schedule,
    cancel,
  };
}

export function useReviewSearchHighlights(props: ReviewSearchHighlightsProps) {
  let { containerRef, contextId } = props,
    reviewSearchRun = useSignalValue<ConversationSearchRun | null>(
      conversationSearchResultSignal,
    ),
    activeReviewSearchMatch =
      useSignalValue<ActiveConversationSearchMatch | null>(
        activeConversationSearchMatchSignal,
      ),
    activeReviewSearchRun =
      reviewSearchRun?.contextId === contextId ? reviewSearchRun : null,
    activeMatchId =
      activeReviewSearchRun == null
        ? null
        : (activeReviewSearchMatch?.id ?? null),
    activeMatchElementRef = React.useRef<Element | null>(null),
    { schedule, cancel } = useReviewSearchHighlightScheduler(
      REVIEW_SEARCH_HIGHLIGHT_MUTATION_DELAY_MS,
    ),
    applySearchHighlights = () => {
      let containerElement = containerRef.current;
      if (containerElement == null) return;
      clearContentSearchHighlights(containerElement, {
        includeShadowRoots: false,
      });
      let previousActiveMatchElement = activeMatchElementRef.current;
      if (
        (previousActiveMatchElement != null &&
          (previousActiveMatchElement.classList.remove(
            activeContentSearchMatchClassName,
          ),
          (activeMatchElementRef.current = null)),
        activeReviewSearchRun == null)
      )
        return;
      let matchesByContentUnitKey =
          groupConversationSearchMatchesByContentUnitKey(
            activeReviewSearchRun.matches,
          ),
        elementByMatchId = new Map();
      if (
        (containerElement
          .querySelectorAll("[data-content-search-unit-key]")
          .forEach((contentUnitElement) => {
            let contentUnitKey =
              contentUnitElement instanceof HTMLElement
                ? contentUnitElement.dataset.contentSearchUnitKey
                : null;
            if (contentUnitKey == null) return;
            let unitMatches = matchesByContentUnitKey.get(contentUnitKey);
            unitMatches == null ||
              unitMatches.length === 0 ||
              highlightContentSearchMatches({
                target: contentUnitElement,
                query: activeReviewSearchRun.query,
                maxMatches: unitMatches.length,
                includeShadowRoots: false,
              }).matches.forEach((matchElement, index) => {
                let unitMatch = unitMatches[index];
                unitMatch != null &&
                  (setContentSearchMatchIdAttribute({
                    element: matchElement,
                    matchId: unitMatch.id,
                  }),
                  elementByMatchId.set(unitMatch.id, matchElement));
              });
          }),
        activeMatchId == null)
      )
        return;
      let activeMatchElement = elementByMatchId.get(activeMatchId);
      activeMatchElement != null &&
        (activeMatchElement.classList.add(activeContentSearchMatchClassName),
        (activeMatchElementRef.current = activeMatchElement));
    };
  let applySearchHighlightsEffectEvent = React.useEffectEvent(
      applySearchHighlights,
    ),
    observeSearchHighlightMutations = () => {
      let containerElement = containerRef.current;
      if (
        containerElement == null ||
        (applySearchHighlightsEffectEvent(),
        activeReviewSearchRun?.runId == null)
      )
        return;
      let mutationObserver = new MutationObserver((mutationRecords) => {
        shouldRefreshSearchHighlightMutations(mutationRecords) &&
          schedule(applySearchHighlightsEffectEvent);
      });
      return (
        mutationObserver.observe(containerElement, {
          childList: true,
          subtree: true,
          characterData: true,
        }),
        () => {
          mutationObserver.disconnect();
          cancel();
        }
      );
    };
  let activeRunId = activeReviewSearchRun?.runId,
    observeSearchHighlightMutationDeps;
  observeSearchHighlightMutationDeps = [
    activeRunId,
    activeMatchId,
    cancel,
    containerRef,
    contextId,
    schedule,
  ];
  React.useEffect(
    observeSearchHighlightMutations,
    observeSearchHighlightMutationDeps,
  );
}

export const initReviewSearchHighlighter = once(() => {
  initAppScopeSignalRuntime();
  initConversationContentSearchRuntime();
  initSearchIcon();
});

let LazyThreadUserMessageNavigationRail: React.ComponentType<{
  items: readonly unknown[];
  onRevealItem: (item: unknown) => void;
}>;

export function ThreadFindNavigationRail(props: ThreadFindNavigationRailProps) {
  let { enabled = true, getItems, onRevealItem } = props,
    [shouldRenderLazyRail, setShouldRenderLazyRail] = React.useState(false),
    railFeatureEnabled = useStatsigGate("2551582477") && enabled,
    scheduleLazyRailRender,
    lazyRailEffectDeps;
  if (
    ((scheduleLazyRailRender = () => {
      if (!railFeatureEnabled || shouldRenderLazyRail) return;
      let revealNavigationRail = () => {
          setShouldRenderLazyRail(true);
        },
        requestIdleCallback = window.requestIdleCallback?.bind(window),
        cancelIdleCallback = window.cancelIdleCallback?.bind(window);
      if (requestIdleCallback && cancelIdleCallback) {
        let idleCallbackId = requestIdleCallback(revealNavigationRail, {
          timeout: 2e3,
        });
        return () => {
          cancelIdleCallback(idleCallbackId);
        };
      }
      let timeoutId = globalThis.setTimeout(revealNavigationRail, 0);
      return () => {
        globalThis.clearTimeout(timeoutId);
      };
    }),
    (lazyRailEffectDeps = [railFeatureEnabled, shouldRenderLazyRail]),
    React.useEffect(scheduleLazyRailRender, lazyRailEffectDeps),
    !railFeatureEnabled || !shouldRenderLazyRail)
  )
    return null;
  let navigationItems = getItems();
  return (
    <LazyThreadUserMessageNavigationRail
      items={navigationItems}
      onRevealItem={onRevealItem}
    />
  );
}

export const initThreadFindNavigationRail = once(() => {
  initLazyNavigationRailRuntime();
  initStatsigFeatureGateRuntime();
  initDynamicModulePreloadRuntime();
  LazyThreadUserMessageNavigationRail = createLazyNavigationRailComponent(
    async () =>
      (
        await preloadDynamicImport(
          async () => {
            let { ThreadUserMessageNavigationRail } = await import(
              "../../threads/thread-user-message-navigation-rail"
            );
            return {
              ThreadUserMessageNavigationRail,
            };
          },
          mapThreadUserMessageNavigationRailDeps([
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
            19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
          ]),
          import.meta.url,
        )
      ).ThreadUserMessageNavigationRail,
  );
});

export const initThreadFindNavigationRailNoopChunk = once(() => {});
