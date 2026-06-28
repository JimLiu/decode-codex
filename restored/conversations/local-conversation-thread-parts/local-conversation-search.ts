// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Conversation search adapter and searchable turn extraction.
import { once } from "../../runtime/commonjs-interop";
import {
  buildLocalConversationSearchSnippet,
  findLocalConversationTextMatches,
  getLocalConversationSearchMatchId,
  initLocalConversationSearchRuntime,
  scrollToLocalConversationSearchMatch,
} from "./local-conversation-search-runtime";
import { initThreadScrollLayoutStyleChunk } from "../../threads/thread-scroll-layout";

export type ConversationSearchLocation = {
  contextId: string;
  domain: "conversation";
  end: number;
  start: number;
  turnKey: string;
  unitId: string;
};

type ConversationSearchRequest = {
  contextId: string;
  domain: "conversation";
  query: string;
};

type ConversationSearchResult = {
  contextId: string;
  domain: "conversation";
  isCapped: boolean;
  matches: Array<{
    id: string;
    location: ConversationSearchLocation;
    ordinal: number;
    snippet: unknown;
  }>;
  query: string;
  totalMatches: number;
};

export type ConversationSearchScrollAdapter = {
  getTurnContainer: (turnKey: string) => Element | null;
  scrollToTurn: (
    turnKey: string,
    options?: { signal?: AbortSignal | null },
  ) => Promise<unknown> | unknown;
};

export type SearchableConversationTurn = {
  turnKey: string;
  units: ConversationSearchUnit[];
};

export type ConversationSearchUnit = {
  text: string;
  unitId: string;
};

let maxConversationSearchMatches = 250;

export const initLocalConversationSearchAdapterChunk = once(() => {
  initThreadScrollLayoutStyleChunk();
});

export function createLocalConversationSearchAdapter({
  contextId,
  getTurns,
  scrollAdapter,
}: {
  contextId: string;
  getTurns: () => SearchableConversationTurn[];
  scrollAdapter: ConversationSearchScrollAdapter;
}) {
  return {
    domain: "conversation" as const,
    contextId,
    async search(
      searchRequest: ConversationSearchRequest,
    ): Promise<ConversationSearchResult> {
      return searchConversationTurns(searchRequest, getTurns());
    },
    async ensureVisible(
      location: ConversationSearchLocation,
      options?: { signal?: AbortSignal | null },
    ) {
      if (
        location.domain !== "conversation" ||
        location.contextId !== contextId
      )
        return;

      let turnContainer = scrollAdapter.getTurnContainer(location.turnKey);
      if (turnContainer == null) {
        if (
          options?.signal?.aborted ||
          (options?.signal == null
            ? await scrollAdapter.scrollToTurn(location.turnKey)
            : await scrollAdapter.scrollToTurn(location.turnKey, {
                signal: options.signal,
              }),
          options?.signal?.aborted)
        )
          return;
        turnContainer = scrollAdapter.getTurnContainer(location.turnKey);
      }

      if (turnContainer != null)
        await scrollToLocalConversationSearchMatch({
          container: turnContainer,
          matchId: getLocalConversationSearchMatchId(location),
          includeShadowRoots: false,
          signal: options?.signal,
        });
    },
  };
}

function searchConversationTurns(
  searchRequest: ConversationSearchRequest,
  searchableTurns: SearchableConversationTurn[],
): ConversationSearchResult {
  let query = searchRequest.query.trim();
  if (query.length === 0)
    return {
      domain: searchRequest.domain,
      contextId: searchRequest.contextId,
      query,
      matches: [],
      totalMatches: 0,
      isCapped: false,
    };

  let matches: ConversationSearchResult["matches"] = [],
    totalMatchCount = 0,
    matchOrdinal = 0,
    isCapped = false;
  for (let searchableTurn of searchableTurns)
    for (let unit of searchableTurn.units) {
      let unitText = unit.text;
      if (unitText.length === 0) continue;
      let {
        offsets,
        totalMatches,
        isCapped: matchSearchIsCapped,
      } = findLocalConversationTextMatches(
        unitText,
        query,
        maxConversationSearchMatches - matches.length,
      );
      totalMatchCount += totalMatches;
      matchSearchIsCapped && (isCapped = true);
      for (let { start, end } of offsets) {
        matchOrdinal += 1;
        matches.push({
          id: `conversation:${searchableTurn.turnKey}:${unit.unitId}:${start}`,
          ordinal: matchOrdinal,
          location: {
            domain: "conversation",
            contextId: searchRequest.contextId,
            turnKey: searchableTurn.turnKey,
            unitId: unit.unitId,
            start,
            end,
          },
          snippet: buildLocalConversationSearchSnippet(unitText, start, end),
        });
      }
    }

  return {
    domain: searchRequest.domain,
    contextId: searchRequest.contextId,
    query,
    matches,
    totalMatches: totalMatchCount,
    isCapped,
  };
}

export const initConversationSearchHelpers = once(() => {
  initLocalConversationSearchRuntime();
  maxConversationSearchMatches = 250;
});
