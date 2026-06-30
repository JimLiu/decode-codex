// Shared types for the restored plugins page selector helpers.

import type { PluginDisplayItem, PluginSummary } from "../use-plugins/types";

export type PluginWithShareContext = PluginSummary & {
  availability?: string | null;
  shareContext?: {
    remotePluginId?: string | null;
  } | null;
};

export type PluginPageItem = PluginDisplayItem & {
  plugin: PluginWithShareContext;
};

export type MarketplaceFilterOption = {
  label: string;
  subLabel: string | null;
  value: string;
};

export type PluginSection = {
  section: {
    id: string;
    title: string | null;
  };
  plugins: PluginPageItem[];
};

export type FilterPluginsOptions = {
  dedupeSearchResults?: boolean;
  plugins: PluginPageItem[];
  marketplaceFilterValue?: string | null;
  query: string;
};

export type SelectLocalMarketplaceOptions = {
  availablePlugins: PluginPageItem[];
  createdByMeRemotePlugins?: PluginPageItem[] | null;
  homeDirectory?: string | null;
  pluginShares?: RemotePluginShare[] | null;
  storefrontPlugins: PluginPageItem[];
};

export type RemotePluginShare = {
  localPluginPath?: string | null;
  plugin: PluginWithShareContext;
};

export type BuildPluginSectionsOptions = {
  categoryOrder?: string[];
  connectedPlugins?: PluginPageItem[];
  featuredPluginIds?: string[] | null;
  plugins: PluginPageItem[];
};
