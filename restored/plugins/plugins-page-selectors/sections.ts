// Restored from ref/webview/assets/plugins-page-selectors-C14o5Dw0.js
// Connected, featured, and category section builders for the plugins page.

import { BUNDLED_FEATURED_PLUGIN_IDS } from "./constants";
import { normalizeLabel } from "./marketplace-labels";
import { sortConnectedPlugins, sortPluginsByDisabledState } from "./sorting";
import type {
  BuildPluginSectionsOptions,
  PluginPageItem,
  PluginSection,
} from "./types";

export function mergeInstalledPluginSources({
  installedPlugins,
  sharedWithYouPlugins,
  workspacePlugins,
}: {
  installedPlugins: PluginPageItem[];
  sharedWithYouPlugins: PluginPageItem[];
  workspacePlugins: PluginPageItem[];
}): PluginPageItem[] {
  const pluginsById = new Map(
    installedPlugins.map((item) => [item.plugin.id, item]),
  );
  for (const item of [...sharedWithYouPlugins, ...workspacePlugins]) {
    if (item.plugin.installed && !pluginsById.has(item.plugin.id)) {
      pluginsById.set(item.plugin.id, item);
    }
  }
  return Array.from(pluginsById.values());
}

export function buildPluginSections({
  categoryOrder = [],
  plugins,
  connectedPlugins = plugins,
  featuredPluginIds,
}: BuildPluginSectionsOptions): PluginSection[] {
  const connectedPluginSection = sortConnectedPlugins(
    connectedPlugins.filter((item) => item.plugin.installed),
  );
  const featuredPlugins =
    featuredPluginIds == null
      ? []
      : selectPluginsById(
          plugins,
          uniqueValues([...BUNDLED_FEATURED_PLUGIN_IDS, ...featuredPluginIds]),
        );
  const categorySections = buildCategorySections(plugins, categoryOrder);

  return [
    ...(connectedPluginSection.length > 0
      ? [
          {
            section: {
              id: "plugins-connected",
              title: null,
            },
            plugins: connectedPluginSection,
          },
        ]
      : []),
    ...(featuredPlugins.length > 0
      ? [
          {
            section: {
              id: "plugins-featured",
              title: "Featured",
            },
            plugins: featuredPlugins,
          },
        ]
      : []),
    ...categorySections,
  ];
}

function buildCategorySections(
  plugins: readonly PluginPageItem[],
  categoryOrder: readonly string[],
): PluginSection[] {
  const pluginsByCategory = new Map<string, PluginPageItem[]>();
  for (const item of plugins) {
    const category = getPluginCategory(item);
    const categoryPlugins = pluginsByCategory.get(category);
    if (categoryPlugins == null) {
      pluginsByCategory.set(category, [item]);
      continue;
    }
    categoryPlugins.push(item);
  }

  const categoryPriority = new Map(
    categoryOrder.map((category, index) => [normalizeLabel(category), index]),
  );
  return Array.from(pluginsByCategory.entries())
    .sort(([leftCategory], [rightCategory]) => {
      const leftPriority =
        categoryPriority.get(normalizeLabel(leftCategory)) ??
        categoryOrder.length;
      const rightPriority =
        categoryPriority.get(normalizeLabel(rightCategory)) ??
        categoryOrder.length;
      return leftPriority === rightPriority
        ? leftCategory.localeCompare(rightCategory)
        : leftPriority - rightPriority;
    })
    .map(([category, categoryPlugins]) => ({
      section: {
        id: `plugins-${normalizeLabel(category).replaceAll(" ", "-")}`,
        title: category,
      },
      plugins: sortPluginsByDisabledState(categoryPlugins),
    }));
}

function selectPluginsById(
  plugins: readonly PluginPageItem[],
  pluginIds: readonly string[],
): PluginPageItem[] {
  const pluginsById = new Map(plugins.map((item) => [item.plugin.id, item]));
  return pluginIds.flatMap((pluginId) => {
    const item = pluginsById.get(pluginId);
    return item == null ? [] : [item];
  });
}

function getPluginCategory(item: PluginPageItem): string {
  const category = item.plugin.interface?.category;
  return typeof category === "string" && category.trim().length > 0
    ? category
    : "Other";
}

function uniqueValues<TValue>(values: readonly TValue[]): TValue[] {
  return Array.from(new Set(values));
}
