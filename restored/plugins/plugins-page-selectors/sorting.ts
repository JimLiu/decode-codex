// Restored from ref/webview/assets/plugins-page-selectors-C14o5Dw0.js
// Stable plugin sort helpers for marketplace sections and search results.

import type { PluginPageItem, PluginWithShareContext } from "./types";

export function sortConnectedPlugins(
  plugins: PluginPageItem[],
): PluginPageItem[] {
  return plugins.sort((leftItem, rightItem) => {
    const leftDisabled = isDisabledByAdmin(leftItem.plugin);
    const rightDisabled = isDisabledByAdmin(rightItem.plugin);
    if (leftDisabled !== rightDisabled) return leftDisabled ? 1 : -1;
    if (
      leftDisabled ||
      leftItem.plugin.installed === rightItem.plugin.installed
    )
      return 0;
    return leftItem.plugin.installed ? 1 : -1;
  });
}

export function sortPluginsByDisabledState(
  plugins: PluginPageItem[],
): PluginPageItem[] {
  return plugins.sort((leftItem, rightItem) => {
    const leftDisabled = isDisabledByAdmin(leftItem.plugin);
    const rightDisabled = isDisabledByAdmin(rightItem.plugin);
    return leftDisabled === rightDisabled ? 0 : leftDisabled ? 1 : -1;
  });
}

function isDisabledByAdmin(plugin: PluginWithShareContext): boolean {
  return plugin.availability === "DISABLED_BY_ADMIN";
}
