// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Web-source collection helpers for the local conversation summary panel.
import { once } from "../../runtime/commonjs-interop";

export type ThreadSummaryWebSource =
  | {
      type: "search";
    }
  | {
      label: string;
      type: "page";
      url: string;
    };

type ConversationTurnWithItems = {
  items?: readonly unknown[] | null;
};

type WebSearchTurnItem = {
  action?: unknown;
  type: "webSearch";
};

export function collectConversationWebSources(
  turns: readonly ConversationTurnWithItems[],
): ThreadSummaryWebSource[] {
  let webSources: ThreadSummaryWebSource[] = [],
    seenUrls = new Set<string>(),
    sawWebSearch = false;

  for (let turnIndex = turns.length - 1; turnIndex >= 0; --turnIndex) {
    let items = turns[turnIndex]?.items ?? [];
    for (let itemIndex = items.length - 1; itemIndex >= 0; --itemIndex) {
      let item = items[itemIndex];
      if (!isWebSearchTurnItem(item)) continue;
      sawWebSearch = true;

      let webSource = getWebSourceFromBrowserAction(item.action);
      if (webSource == null || seenUrls.has(webSource.url)) continue;

      seenUrls.add(webSource.url);
      webSources.push(webSource);
    }
  }

  return webSources.length === 0 && sawWebSearch
    ? [
        {
          type: "search",
        },
      ]
    : webSources;
}

function isWebSearchTurnItem(item: unknown): item is WebSearchTurnItem {
  return (
    typeof item === "object" &&
    item != null &&
    (item as { type?: unknown }).type === "webSearch"
  );
}

function getWebSourceFromBrowserAction(
  action: unknown,
): Extract<ThreadSummaryWebSource, { type: "page" }> | null {
  if (typeof action !== "object" || action == null) return null;

  let { type, url: rawUrl } = action as {
    type?: unknown;
    url?: unknown;
  };
  if ((type !== "openPage" && type !== "findInPage") || rawUrl == null) {
    return null;
  }

  try {
    let url = new URL(String(rawUrl));
    return (url.protocol !== "http:" && url.protocol !== "https:") ||
      url.username !== "" ||
      url.password !== ""
      ? null
      : {
          label: `${url.host.replace(/^www\./u, "")}${url.pathname}`,
          type: "page",
          url: url.href,
        };
  } catch {
    return null;
  }
}

export const initThreadSummaryWebSourcesChunk = once(() => {});
