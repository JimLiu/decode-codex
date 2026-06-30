// Restored from ref/webview/assets/plugins-page-selectors-C14o5Dw0.js
// Search, dedupe, and bundled-plugin filtering for the plugins page.

import { getPluginSourceKey } from "../use-plugins";
import {
  getMarketplaceNameSuffix,
  isBundledMarketplaceName,
} from "../use-plugins/marketplace-constants";
import { sortConnectedPlugins, sortPluginsByDisabledState } from "./sorting";
import type { FilterPluginsOptions, PluginPageItem } from "./types";

export function filterPluginsForMarketplacePage({
  dedupeSearchResults = false,
  plugins,
  marketplaceFilterValue = null,
  query,
}: FilterPluginsOptions): PluginPageItem[] {
  const filteredPlugins = plugins.filter((item) => {
    if (!matchesSearchQuery(query, getPluginSearchFields(item))) return false;
    if (marketplaceFilterValue == null) return true;
    return (
      getPluginSourceKey(item) === marketplaceFilterValue &&
      (item.marketplaceDisplayName?.trim() || item.marketplaceName).trim()
        .length > 0
    );
  });

  if (!dedupeSearchResults) return sortPluginsByDisabledState(filteredPlugins);

  const pluginsByRemoteIdentity = new Map<string, PluginPageItem>();
  for (const item of filteredPlugins) {
    const remotePluginId =
      item.plugin.remotePluginId ?? item.plugin.shareContext?.remotePluginId;
    const dedupeKey =
      remotePluginId == null
        ? `plugin:${getPluginSourceKey(item)}:${item.plugin.id}`
        : `remote:${remotePluginId}`;
    const existingItem = pluginsByRemoteIdentity.get(dedupeKey);
    if (
      existingItem == null ||
      (!existingItem.plugin.installed && item.plugin.installed)
    ) {
      pluginsByRemoteIdentity.set(dedupeKey, item);
    }
  }

  return sortConnectedPlugins(Array.from(pluginsByRemoteIdentity.values()));
}

export function filterBundledBrowserPluginEntries(
  plugins: readonly PluginPageItem[],
): PluginPageItem[] {
  return plugins.filter((item) => {
    const marketplaceName = getMarketplaceNameSuffix(item.plugin.id);
    return (
      item.plugin.name !== "browser" ||
      marketplaceName == null ||
      !isBundledMarketplaceName(marketplaceName)
    );
  });
}

export function findBundledRecordAndReplayPlugin(
  plugins: readonly PluginPageItem[],
): PluginPageItem | null {
  return (
    plugins.find(
      (item) =>
        item.plugin.name === "record-and-replay" &&
        isBundledMarketplaceName(item.marketplaceName),
    ) ?? null
  );
}

function getPluginSearchFields(item: PluginPageItem): string[] {
  return [item.plugin.name, item.displayName ?? "", ...(item.keywords ?? [])];
}

function matchesSearchQuery(query: string, values: string[]): boolean {
  if (query.length === 0) return true;
  return normalizeSearchText(values.join(" ")).includes(
    normalizeSearchText(query),
  );
}

function normalizeSearchText(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}
