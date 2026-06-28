// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
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
  Bo as conversationSearchResultSignal,
  Cs as setContentSearchMatchIdAttribute,
  Di as groupConversationSearchMatchesByContentUnitKey,
  Ho as activeConversationSearchMatchSignal,
  Oi as initContentSearchMatchAttributeRuntime,
  Ss as initContentSearchRuntime,
  _s as activeContentSearchMatchClassName,
  ts as initConversationSearchSignals,
  vs as clearContentSearchHighlights,
  ws as shouldRefreshSearchHighlightMutations,
  xs as highlightContentSearchMatches,
} from "../../boundaries/current-ref/projects-app-shared-producer";
import {
  Dr as createLazyNavigationRailComponent,
  Er as initLazyNavigationRailRuntime,
} from "../../boundaries/current-ref/appgen-library-hot-producer";

const REVIEW_SEARCH_HIGHLIGHT_MUTATION_DELAY_MS = 80;

const threadUserMessageNavigationRailDeps = [
  "../utils/thread-user-message-navigation-rail",
  "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js",
  "./rolldown-runtime-Czos8NxU.js",
  "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-Dlqz5rpw.css",
  "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~ovcriy74-KTK3czaX.js",
  "./app-initial~app-main~worktree-init-v2-page~appgen-publication-terms-route~remote-conversati~oykv7gy7-B4ar2dlW.js",
  "./app-initial~app-main~remote-conversation-page~onboarding-page~hotkey-window-thread-page~thr~jv7rs281-DxRnxRkd.js",
  "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~bj5tp28r-CQrj7g91.js",
  "./app-initial~app-main~worktree-init-v2-page~page~remote-conversation-page~pull-requests-page~iwrno211-6533k2dw.js",
  "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~kvpgbdy1-mhRp2VYQ.js",
  "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-page~remote-con~kyb0i2zb-B27VQcu6.js",
  "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~kvpgbdy1-WQSs2b8C.css",
  "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~ovcriy74-Cm9kT9_E.css",
  "./app-initial~app-main~onboarding-page~profile-QLPeiknY.js",
  "./app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~projects-i~easvi6ps-Cs84X9Ip.js",
  "./app-initial~app-main~home-ambient-suggestions-content-CGzLiN5i.js",
  "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~d8kqmdjz-CVODqLRv.js",
  "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~o4yhvtva-CaqfCcJP.js",
  "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~o4yhvtva-BI3OQbB8.css",
  "./app-initial~app-main~remote-conversation-page~onboarding-page~projects-index-page~hotkey-wi~l5ab2ey0-8q2fQ40X.js",
  "./app-initial~app-main~remote-conversation-page~onboarding-page~hotkey-window-thread-page~thr~b0jzjd62-JuRN2k_O.js",
  "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~lxml58r4-kB1QbLtZ.js",
  "./app-initial~app-main~remote-conversation-page~onboarding-page~projects-index-page~hotkey-wi~hngpswmm-DIEMgkYM.js",
  "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~onboarding-page~plan-su~hu7x0wyd-DpdAZZiY.js",
  "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~onboarding-page~plan-su~hu7x0wyd-BhOGlSiR.css",
  "./app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~hotkey-win~bgpm80n3-Br-I5tHC.js",
  "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ozpabocf-B_lr_-Fk.js",
  "./app-initial~app-main~onboarding-page~profile-XXCan5-r.css",
  "./thread-scroll-controller-context-value-Cl6S6mDJ.js",
  "./thread-user-message-navigation-rail-CX3TkeeC.css",
] as const;

type ReviewSearchHighlightsProps = {
  containerRef: React.RefObject<HTMLElement | null>;
  contextId: string | null;
};

type ThreadFindNavigationRailProps = {
  enabled?: boolean;
  getItems: () => readonly unknown[];
  onRevealItem: (item: unknown) => void;
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
    reviewSearchRun = useSignalValue(conversationSearchResultSignal),
    activeReviewSearchMatch = useSignalValue(
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
  initContentSearchRuntime();
  initSearchIcon();
  initConversationSearchSignals();
  initContentSearchMatchAttributeRuntime();
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
              "../../utils/thread-user-message-navigation-rail"
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
