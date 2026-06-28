// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Conversation search, highlight, and lazy navigation rail helpers.
import type { ComponentType } from "react";
import {
  Bo as conversationSearchResultSignal,
  Cs as setContentSearchMatchIdAttributeRaw,
  Di as groupConversationSearchMatchesByContentUnitKeyRaw,
  Ho as activeConversationSearchMatchSignal,
  Oi as initContentSearchMatchAttributeRuntimeRaw,
  Ss as initContentSearchRuntimeRaw,
  _s as activeContentSearchMatchClassName,
  bs as joinThreadFindItemIdRaw,
  cn as initConversationSearchMatcherRaw,
  gs as initConversationSearchSnippetBuilderRaw,
  hs as findConversationTextMatchesRaw,
  ln as scrollToConversationSearchMatchRaw,
  ms as buildConversationSearchSnippetRaw,
  ts as initConversationSearchSignalsRaw,
  vs as clearContentSearchHighlightsRaw,
  ws as shouldRefreshSearchHighlightMutationsRaw,
  xs as highlightContentSearchMatchesRaw,
  ys as getConversationSearchMatchIdRaw,
} from "../../vendor/projects-app-shared-runtime";
import {
  createLazyNavigationRailComponent as createLazyNavigationRailComponentRaw,
  initLazyNavigationRailRuntime as initLazyNavigationRailRuntimeRaw,
} from "../../threads/lazy-navigation-rail";

export type ContentSearchMatch = {
  id: string;
};

export type ContentSearchHighlightResult = {
  matches: Element[];
};

export type ConversationSearchLocationLike = {
  contextId: string;
  domain: "conversation";
  end: number;
  start: number;
  turnKey: string;
  unitId: string;
};

export type ConversationTextMatchResult = {
  isCapped: boolean;
  offsets: Array<{ end: number; start: number }>;
  totalMatches: number;
};

export {
  activeContentSearchMatchClassName,
  activeConversationSearchMatchSignal,
  conversationSearchResultSignal,
};

export function initConversationContentSearchRuntime(): void {
  initContentSearchRuntimeRaw();
  initConversationSearchSignalsRaw();
  initContentSearchMatchAttributeRuntimeRaw();
}

export function initLocalConversationSearchRuntime(): void {
  initContentSearchRuntimeRaw();
  initConversationSearchMatcherRaw();
  initConversationSearchSnippetBuilderRaw();
}

export function initLazyNavigationRailRuntime(): void {
  initLazyNavigationRailRuntimeRaw();
}

export function initThreadFindItemIdRuntime(): void {
  initContentSearchRuntimeRaw();
}

export function clearContentSearchHighlights(
  target: Element,
  options: { includeShadowRoots: boolean },
): void {
  clearContentSearchHighlightsRaw(target, options);
}

export function groupConversationSearchMatchesByContentUnitKey(
  matches: readonly ContentSearchMatch[],
): Map<string, ContentSearchMatch[]> {
  return groupConversationSearchMatchesByContentUnitKeyRaw(matches) as Map<
    string,
    ContentSearchMatch[]
  >;
}

export function highlightContentSearchMatches(options: {
  includeShadowRoots: boolean;
  maxMatches: number;
  query: string;
  target: Element;
}): ContentSearchHighlightResult {
  return highlightContentSearchMatchesRaw(
    options,
  ) as ContentSearchHighlightResult;
}

export function setContentSearchMatchIdAttribute(options: {
  element: Element;
  matchId: string;
}): void {
  setContentSearchMatchIdAttributeRaw(options);
}

export function shouldRefreshSearchHighlightMutations(
  mutationRecords: readonly MutationRecord[],
): boolean {
  return shouldRefreshSearchHighlightMutationsRaw(mutationRecords);
}

export function createLazyNavigationRailComponent<TProps>(
  loader: () => Promise<ComponentType<TProps>>,
): ComponentType<TProps> {
  return createLazyNavigationRailComponentRaw(loader) as ComponentType<TProps>;
}

export function findLocalConversationTextMatches(
  text: string,
  query: string,
  maxMatches: number,
): ConversationTextMatchResult {
  return findConversationTextMatchesRaw(
    text,
    query,
    maxMatches,
  ) as ConversationTextMatchResult;
}

export function buildLocalConversationSearchSnippet(
  text: string,
  start: number,
  end: number,
): unknown {
  return buildConversationSearchSnippetRaw(text, start, end);
}

export function getLocalConversationSearchMatchId(
  location: ConversationSearchLocationLike,
): string {
  return getConversationSearchMatchIdRaw(location);
}

export function scrollToLocalConversationSearchMatch(options: {
  container: Element;
  includeShadowRoots: boolean;
  matchId: string;
  signal?: AbortSignal | null;
}): Promise<unknown> | unknown {
  return scrollToConversationSearchMatchRaw(options);
}

export function joinThreadFindItemId(
  turnSearchKey: string,
  itemKey: string,
): string {
  return joinThreadFindItemIdRaw(turnSearchKey, itemKey);
}
