// Restored from ref/webview/assets/composer-suggestion-list-BQ2rPanH.js
import {
  bundledPluginMarketplaceName,
  isBundledPluginMarketplaceName,
} from "../../boundaries/src-l0hb-mz-p";
import { parseSkillPathMetadata } from "../../boundaries/thread-context-inputs.facade";
import type { ComposerSuggestionItem } from "./types";
export function isSuggestionVisibleForPluginMarketplace(
  item: ComposerSuggestionItem,
  selectedMarketplaceName?: string | null,
): boolean {
  const itemMarketplaceName =
    item.path == null
      ? null
      : (parseSkillPathMetadata(item.path)?.pluginMarketplaceName ?? null);
  return (
    selectedMarketplaceName == null ||
    itemMarketplaceName == null ||
    !isBundledPluginMarketplaceName(itemMarketplaceName) ||
    itemMarketplaceName ===
      bundledPluginMarketplaceName(selectedMarketplaceName)
  );
}
