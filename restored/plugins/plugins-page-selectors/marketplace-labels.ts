// Restored from ref/webview/assets/plugins-page-selectors-C14o5Dw0.js
// Marketplace display-name normalization and OpenAI marketplace detection.

import { isBuiltInMarketplaceName } from "../use-plugins";
import type { PluginPageItem } from "./types";

export function normalizeLabel(value: string): string {
  return value.trim().toLowerCase();
}

export function normalizeMarketplaceLabel(value: string): string {
  return normalizeLabel(value).replace(/[_-]+/g, " ");
}

export function formatMarketplaceDisplayName(marketplaceName: string): string {
  return isBuiltInMarketplaceName(marketplaceName)
    ? "Built by OpenAI"
    : marketplaceName;
}

export function hasOpenAICuratedMarketplace(
  plugins: readonly PluginPageItem[],
): boolean {
  return plugins.some(
    (item) =>
      isOpenAICuratedMarketplaceLabel(item.marketplaceName) ||
      (item.marketplaceDisplayName != null &&
        isOpenAICuratedMarketplaceLabel(item.marketplaceDisplayName)),
  );
}

export function isPluginFromBuiltInMarketplace(item: PluginPageItem): boolean {
  return (
    isBuiltInMarketplaceName(item.marketplaceName) ||
    (item.marketplaceDisplayName != null &&
      isBuiltInMarketplaceName(item.marketplaceDisplayName))
  );
}

function isOpenAICuratedMarketplaceLabel(value: string): boolean {
  switch (normalizeMarketplaceLabel(value)) {
    case "codex official":
    case "openai curated":
    case "openai curated remote":
      return true;
    default:
      return false;
  }
}
