// Restored from ref/webview/assets/plugins-page-selectors-C14o5Dw0.js
// Local marketplace source selection and remote-share reconciliation.

import { getPluginSourceKey, resolvePluginIconPaths } from "../use-plugins";
import { getMarketplaceNameSuffix } from "../use-plugins/marketplace-constants";
import { isPluginMarketplaceManifestPath } from "../plugin-detail-page-utils";
import type {
  PluginPageItem,
  RemotePluginShare,
  SelectLocalMarketplaceOptions,
} from "./types";

export function selectLocalMarketplacePlugins({
  availablePlugins,
  createdByMeRemotePlugins,
  homeDirectory,
  pluginShares,
  storefrontPlugins,
}: SelectLocalMarketplaceOptions): {
  marketplaceFilterValue: string | null;
  plugins: PluginPageItem[];
  remotePlugins: PluginPageItem[];
} {
  const localMarketplacePlugin = availablePlugins.find((item) =>
    isPluginMarketplaceManifestPath(homeDirectory, item.marketplacePath),
  );
  const marketplaceFilterValue =
    localMarketplacePlugin == null
      ? null
      : getPluginSourceKey(localMarketplacePlugin);
  const storefrontPluginsForMarketplace = storefrontPlugins.filter(
    (item) =>
      marketplaceFilterValue != null &&
      getPluginSourceKey(item) === marketplaceFilterValue,
  );
  const remotePlugins = collectRemotePluginsForLocalMarketplace(
    createdByMeRemotePlugins,
    pluginShares,
    storefrontPluginsForMarketplace,
  );

  return {
    marketplaceFilterValue,
    plugins: [...storefrontPluginsForMarketplace, ...remotePlugins],
    remotePlugins,
  };
}

function collectRemotePluginsForLocalMarketplace(
  createdByMeRemotePlugins: readonly PluginPageItem[] | null | undefined,
  pluginShares: readonly RemotePluginShare[] | null | undefined,
  storefrontPlugins: readonly PluginPageItem[],
): PluginPageItem[] {
  const seenRemotePluginIds = new Set([
    ...storefrontPlugins.flatMap((item) => {
      const remotePluginId = item.plugin.shareContext?.remotePluginId;
      return remotePluginId == null ? [] : [remotePluginId];
    }),
    ...(pluginShares?.flatMap(({ localPluginPath, plugin }) => {
      if (localPluginPath == null) return [];
      if (plugin.remotePluginId == null) {
        throw Error(
          `remote plugin share ${plugin.id} is missing remotePluginId`,
        );
      }
      return [plugin.remotePluginId];
    }) ?? []),
  ]);
  const remotePlugins: PluginPageItem[] = [];

  for (const item of createdByMeRemotePlugins ?? []) {
    const remotePluginId = item.plugin.remotePluginId;
    if (remotePluginId == null) {
      throw Error(
        `created by me remote plugin ${item.plugin.id} is missing remotePluginId`,
      );
    }
    if (!seenRemotePluginIds.has(remotePluginId)) {
      seenRemotePluginIds.add(remotePluginId);
      remotePlugins.push(item);
    }
  }

  if (pluginShares == null) return remotePlugins;

  for (const { plugin } of pluginShares) {
    const remotePluginId = plugin.remotePluginId;
    if (remotePluginId == null) {
      throw Error(`remote plugin share ${plugin.id} is missing remotePluginId`);
    }
    if (seenRemotePluginIds.has(remotePluginId)) continue;

    const marketplaceName = getMarketplaceNameSuffix(plugin.id);
    if (marketplaceName == null) {
      throw Error(
        `remote plugin share ${plugin.id} is missing marketplace name`,
      );
    }

    seenRemotePluginIds.add(remotePluginId);
    remotePlugins.push({
      ...resolvePluginIconPaths(plugin),
      description: plugin.interface?.shortDescription ?? null,
      displayName: plugin.interface?.displayName ?? null,
      marketplaceDisplayName: null,
      marketplaceName,
      marketplacePath: null,
      plugin,
      keywords: plugin.keywords,
      remoteMarketplaceName: marketplaceName,
    });
  }

  return remotePlugins;
}
