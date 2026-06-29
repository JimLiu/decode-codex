// Restored from ref/.vite/build/main-r5HnecX_.js
// Bundled plugin manifest comparison and installed-status recovery.

import {
  getBundledPluginCacheRoot,
  getBundledPluginCacheVersionRoot,
  isInsideExecutionHostRoot,
} from "./paths";
import type {
  BundledPluginManifest,
  ExecutionHostPath,
  InstalledBundledPluginStatus,
  InstalledMarketplacePlugin,
  ReadPluginManifest,
} from "./types";

export type InstalledPluginStatusInput = {
  bundledManifest: BundledPluginManifest;
  bundledPluginName: string;
  codexHome: string;
  executionHostPath: ExecutionHostPath;
  installedPlugin: InstalledMarketplacePlugin;
  marketplaceName: string;
  marketplaceRoot: string;
  readPluginManifest: ReadPluginManifest;
};

export function comparePluginManifests({
  bundledManifest,
  installedManifest,
}: {
  bundledManifest: BundledPluginManifest;
  installedManifest: BundledPluginManifest;
}): InstalledBundledPluginStatus {
  return bundledManifest.name === installedManifest.name &&
    bundledManifest.bundledContentVariant ===
      installedManifest.bundledContentVariant &&
    bundledManifest.version === installedManifest.version
    ? "current"
    : "outdated";
}

export async function resolveInstalledPluginStatus({
  bundledManifest,
  bundledPluginName,
  codexHome,
  executionHostPath,
  installedPlugin,
  marketplaceName,
  marketplaceRoot,
  readPluginManifest,
}: InstalledPluginStatusInput): Promise<InstalledBundledPluginStatus> {
  try {
    if (
      installedPlugin.source.type !== "local" ||
      installedPlugin.source.path == null
    ) {
      return "unknown";
    }

    const cacheRoot = getBundledPluginCacheRoot({
      bundledPluginName,
      codexHome,
      executionHostPath,
      marketplaceName,
    });

    if (
      isInsideExecutionHostRoot({
        executionHostPath,
        path: installedPlugin.source.path,
        root: cacheRoot,
      })
    ) {
      const installedManifest = await readPluginManifest(
        installedPlugin.source.path,
      );
      return comparePluginManifests({ bundledManifest, installedManifest });
    }

    if (
      isInsideExecutionHostRoot({
        executionHostPath,
        path: installedPlugin.source.path,
        root: marketplaceRoot,
      })
    ) {
      const installedManifest = await readPluginManifest(
        getBundledPluginCacheVersionRoot({
          bundledPluginName,
          codexHome,
          executionHostPath,
          marketplaceName,
          version: bundledManifest.version,
        }),
      );
      return comparePluginManifests({ bundledManifest, installedManifest });
    }

    const installedManifest = await readPluginManifest(
      installedPlugin.source.path,
    );
    return comparePluginManifests({ bundledManifest, installedManifest });
  } catch {
    return "unknown";
  }
}
