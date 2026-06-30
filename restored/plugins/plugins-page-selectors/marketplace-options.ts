// Restored from ref/webview/assets/plugins-page-selectors-C14o5Dw0.js
// Marketplace filter option construction and duplicate-label disambiguation.

import { getPluginSourceKey } from "../use-plugins";
import {
  AGENTS_PLUGIN_MARKETPLACE_SUFFIX,
  MARKETPLACE_MANIFEST_SUFFIX,
} from "./constants";
import {
  formatMarketplaceDisplayName,
  normalizeMarketplaceLabel,
} from "./marketplace-labels";
import type { MarketplaceFilterOption, PluginPageItem } from "./types";

export function buildMarketplaceFilterOptions(
  plugins: readonly PluginPageItem[],
): MarketplaceFilterOption[] {
  const seenSourceKeys = new Set<string>();
  const sourceOptions: Array<
    MarketplaceFilterOption & { subLabelSource: string | null }
  > = [];

  for (const item of plugins) {
    const sourceKey = getPluginSourceKey(item);
    const displayName =
      item.marketplaceDisplayName?.trim() || item.marketplaceName;
    if (displayName.trim().length === 0 || seenSourceKeys.has(sourceKey)) {
      continue;
    }

    seenSourceKeys.add(sourceKey);
    sourceOptions.push({
      label: formatMarketplaceDisplayName(displayName),
      subLabel: null,
      subLabelSource:
        item.marketplacePath == null
          ? item.remoteMarketplaceName
          : stripMarketplaceManifestPath(item.marketplacePath),
      value: sourceKey,
    });
  }

  const duplicateLabels = groupOptionsByLabel(sourceOptions);
  const disambiguatingLabels = new Map<string, string>();
  for (const options of duplicateLabels.values()) {
    if (options.length <= 1) continue;
    const labels = shortestUniquePathSuffixes(
      options.map((option) => option.subLabelSource ?? ""),
    );
    for (const [index, option] of options.entries()) {
      disambiguatingLabels.set(option.value, labels[index] ?? "");
    }
  }

  return sourceOptions
    .sort((leftOption, rightOption) => {
      const priority =
        getMarketplaceLabelSortPriority(leftOption.label) -
        getMarketplaceLabelSortPriority(rightOption.label);
      return (
        priority ||
        leftOption.label.localeCompare(rightOption.label) ||
        (disambiguatingLabels.get(leftOption.value) ?? "").localeCompare(
          disambiguatingLabels.get(rightOption.value) ?? "",
        )
      );
    })
    .map((option) => ({
      label: option.label,
      subLabel: disambiguatingLabels.get(option.value) ?? null,
      value: option.value,
    }));
}

function groupOptionsByLabel<TOption extends { label: string }>(
  options: readonly TOption[],
): Map<string, TOption[]> {
  const optionsByLabel = new Map<string, TOption[]>();
  for (const option of options) {
    const matchingOptions = optionsByLabel.get(option.label);
    if (matchingOptions == null) {
      optionsByLabel.set(option.label, [option]);
      continue;
    }
    matchingOptions.push(option);
  }
  return optionsByLabel;
}

function stripMarketplaceManifestPath(marketplacePath: string): string {
  const normalizedPath = normalizePathForDisplay(marketplacePath).replace(
    /\/+$/,
    "",
  );
  if (normalizedPath.endsWith(AGENTS_PLUGIN_MARKETPLACE_SUFFIX)) {
    return normalizedPath.slice(0, -AGENTS_PLUGIN_MARKETPLACE_SUFFIX.length);
  }
  if (normalizedPath.endsWith(MARKETPLACE_MANIFEST_SUFFIX)) {
    return normalizedPath.slice(0, -MARKETPLACE_MANIFEST_SUFFIX.length);
  }
  return normalizedPath;
}

function shortestUniquePathSuffixes(paths: readonly string[]): string[] {
  const pathSegments = paths.map((path) =>
    normalizePathForDisplay(path)
      .replace(/\/+$/, "")
      .split("/")
      .filter(Boolean),
  );
  const maxSegmentCount = Math.max(
    1,
    ...pathSegments.map((segments) => segments.length),
  );

  for (let length = 1; length <= maxSegmentCount; length += 1) {
    const labels = pathSegments.map((segments) =>
      formatPathSuffix(segments, length),
    );
    if (new Set(labels).size === labels.length) return labels;
  }

  return paths.map((path) => normalizePathForDisplay(path));
}

function formatPathSuffix(segments: readonly string[], length: number): string {
  const suffix = segments.slice(-length).join("/");
  if (suffix.length === 0) return "";
  if (length === 1) return suffix;
  return segments.length > length ? `.../${suffix}` : suffix;
}

function getMarketplaceLabelSortPriority(label: string): number {
  switch (normalizeMarketplaceLabel(label)) {
    case "built by openai":
      return 0;
    case "chatgpt official":
      return 1;
    default:
      return 2;
  }
}

function normalizePathForDisplay(path: string): string {
  return path.replace(/\\/g, "/");
}
