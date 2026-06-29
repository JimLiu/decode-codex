// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Install-loop failure records and plugin-set helpers for bundled marketplace reconciliation.

import { categorizeBundledPluginReconcileError } from "./errors";
import {
  getBundledPluginSourcePathDetails,
  type BundledPluginSourcePathDetails,
} from "./install-helpers";
import type {
  BundledMarketplace,
  BundledMarketplacePlugin,
  BundledPluginInstallReason,
  InstalledBundledMarketplace,
  InstalledBundledPluginStatus,
  StructuredLogger,
} from "./types";

export type BundledPluginInstallPhase =
  | "copy_chrome_plugin_app_server_codex_runtime"
  | "install_plugin"
  | "read_bundled_manifest"
  | "read_chrome_extension_config"
  | "read_installed_manifest"
  | "reconcile_chrome_native_host"
  | "restore_disabled_config"
  | "stop_chrome_native_host"
  | "sync_chrome_extension_state"
  | "write_chrome_extension_sync_marker";

export type BundledPluginInstallFailureSafeDetails =
  BundledPluginSourcePathDetails & {
    installPhase: BundledPluginInstallPhase;
    installReason?: BundledPluginInstallReason;
    installedPluginStatus?: InstalledBundledPluginStatus;
    pluginCount: number;
    pluginIndex: number;
    pluginName: string;
  };

export type BundledPluginInstallFailureSensitiveDetails = {
  bundledPluginSourcePath: string;
  installedPluginCacheRoot?: string;
  marketplacePath: string;
};

export type BundledPluginInstallFailure = {
  error: unknown;
  safe: BundledPluginInstallFailureSafeDetails;
  sensitive: BundledPluginInstallFailureSensitiveDetails;
};

export function selectReconcileMarketplacePlugins({
  marketplace,
  reconcilePluginNames,
}: {
  marketplace: BundledMarketplace;
  reconcilePluginNames: ReadonlySet<string>;
}): BundledMarketplacePlugin[] {
  return marketplace.plugins.filter((plugin) =>
    reconcilePluginNames.has(plugin.name),
  );
}

export function createInstalledBundledPluginNameSet({
  installedBundledMarketplace,
  marketplace,
}: {
  installedBundledMarketplace: InstalledBundledMarketplace | null | undefined;
  marketplace: BundledMarketplace;
}): Set<string> {
  const bundledPluginNames = new Set(
    marketplace.plugins.map((plugin) => plugin.name),
  );
  return new Set(
    installedBundledMarketplace?.plugins
      .filter(
        (plugin) => plugin.installed && bundledPluginNames.has(plugin.name),
      )
      .map((plugin) => plugin.name) ?? [],
  );
}

export function createBundledPluginInstallFailure({
  error,
  installPhase,
  installReason,
  installedPluginCacheRoot,
  installedPluginStatus,
  marketplacePath,
  pluginCount,
  pluginIndex,
  pluginName,
  sourcePath,
}: {
  error: unknown;
  installPhase: BundledPluginInstallPhase;
  installReason?: BundledPluginInstallReason | null;
  installedPluginCacheRoot?: string | null;
  installedPluginStatus?: InstalledBundledPluginStatus | null;
  marketplacePath: string;
  pluginCount: number;
  pluginIndex: number;
  pluginName: string;
  sourcePath: string;
}): BundledPluginInstallFailure {
  return {
    error,
    safe: {
      ...getBundledPluginSourcePathDetails(sourcePath),
      installPhase,
      ...(installReason != null ? { installReason } : {}),
      ...(installedPluginStatus != null ? { installedPluginStatus } : {}),
      pluginCount,
      pluginIndex,
      pluginName,
    },
    sensitive: {
      bundledPluginSourcePath: sourcePath,
      ...(installedPluginCacheRoot != null ? { installedPluginCacheRoot } : {}),
      marketplacePath,
    },
  };
}

export function logBundledPluginInstallFailure({
  failure,
  logger,
  marketplaceName,
  marketplaceRoot,
  platformFamily,
}: {
  failure: BundledPluginInstallFailure;
  logger: StructuredLogger;
  marketplaceName: string;
  marketplaceRoot: string;
  platformFamily: string;
}): void {
  logger.warning("bundled_plugins_marketplace_install_failed", {
    safe: {
      errorCategory: categorizeBundledPluginReconcileError({
        error: failure.error,
        platformFamily,
      }),
      marketplaceName,
      platformFamily,
      ...failure.safe,
    },
    sensitive: {
      error: failure.error,
      marketplaceRoot,
      ...failure.sensitive,
    },
  });
}
