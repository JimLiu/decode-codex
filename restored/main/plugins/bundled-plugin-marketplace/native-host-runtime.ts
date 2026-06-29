// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Chrome native-host runtime copy helpers used before bundled plugin install.

import { resolve } from "node:path";
import {
  createBundledPluginInstallFailure,
  type BundledPluginInstallFailure,
} from "./install-failures";
import {
  readBundledPluginManifest,
  readChromeExtensionIdConfig,
} from "./manifest-io";
import {
  assertPathInsideMarketplaceRoot,
  getBundledPluginCacheVersionRoot,
  getBundledPluginLatestCacheRoot,
} from "./paths";
import type {
  BundledMarketplacePlugin,
  BundledPluginManifest,
  ExecutionHostPath,
} from "./types";

export type NativeHostNameForPlugin = (pluginName: string) => string | null;

export type CopyChromePluginAppServerCodexRuntime = (options: {
  codexHome: string;
  devRuntimeRepoRoot?: string | null;
  nativeHostName: string;
  resourcesPath?: string | null;
}) => Promise<void> | void;

export type ActivateBundledPluginCacheVersion = (options: {
  latestRoot: string;
  versionRoot: string;
}) => Promise<void> | void;

export type WaitForBundledPluginCacheVersion = (options: {
  latestRoot: string;
  versionRoot: string;
  waitForVersionRoot: boolean;
}) => Promise<void> | void;

export type SyncChromeNativeHost = (options: {
  codexHome: string;
  devRuntimeRepoRoot?: string | null;
  extensionId: string;
  nativeHostName: string;
  pluginRoot: string;
  pluginVersion: string;
  resourcesPath: string;
}) => Promise<void> | void;

export async function copyChromePluginAppServerCodexRuntimes({
  codexHome,
  copyAppServerCodexRuntime,
  devRuntimeRepoRoot,
  marketplacePath,
  nativeHostNameForPlugin,
  plugins,
  resourcesPath,
}: {
  codexHome: string;
  copyAppServerCodexRuntime: CopyChromePluginAppServerCodexRuntime;
  devRuntimeRepoRoot?: string | null;
  marketplacePath: string;
  nativeHostNameForPlugin: NativeHostNameForPlugin;
  plugins: readonly BundledMarketplacePlugin[];
  resourcesPath?: string | null;
}): Promise<BundledPluginInstallFailure | null> {
  const pluginCount = plugins.length;
  const failures = await Promise.all(
    plugins.map(async (plugin, pluginIndex) => {
      const nativeHostName = nativeHostNameForPlugin(plugin.name);
      if (nativeHostName == null) return null;

      try {
        await copyAppServerCodexRuntime({
          codexHome,
          devRuntimeRepoRoot,
          nativeHostName,
          resourcesPath,
        });
        return null;
      } catch (error) {
        return createBundledPluginInstallFailure({
          error,
          installPhase: "copy_chrome_plugin_app_server_codex_runtime",
          marketplacePath,
          pluginCount,
          pluginIndex,
          pluginName: plugin.name,
          sourcePath: plugin.source.path,
        });
      }
    }),
  );

  return failures.find((failure) => failure != null) ?? null;
}

export function resolveLocalBundledPluginRoot({
  bundledPlugin,
  localMarketplaceRoot,
}: {
  bundledPlugin: BundledMarketplacePlugin;
  localMarketplaceRoot: string;
}): string {
  const pluginRoot = resolve(localMarketplaceRoot, bundledPlugin.source.path);
  assertPathInsideMarketplaceRoot({
    label: "bundled plugin source",
    path: pluginRoot,
    root: localMarketplaceRoot,
  });
  return pluginRoot;
}

export async function reconcileChromeNativeHostForBundledPlugin({
  activateBundledPluginCacheVersion,
  bundledPlugin,
  codexHome,
  devRuntimeRepoRoot,
  executionHostPath,
  localMarketplaceRoot,
  marketplaceName,
  nativeHostNameForPlugin,
  resourcesPath,
  syncChromeNativeHost,
}: {
  activateBundledPluginCacheVersion: ActivateBundledPluginCacheVersion;
  bundledPlugin: BundledMarketplacePlugin;
  codexHome: string;
  devRuntimeRepoRoot?: string | null;
  executionHostPath: ExecutionHostPath;
  localMarketplaceRoot: string;
  marketplaceName: string;
  nativeHostNameForPlugin: NativeHostNameForPlugin;
  resourcesPath: string;
  syncChromeNativeHost: SyncChromeNativeHost;
}): Promise<void> {
  const nativeHostName = nativeHostNameForPlugin(bundledPlugin.name);
  if (nativeHostName == null) return;

  const versionRoot = resolveLocalBundledPluginRoot({
    bundledPlugin,
    localMarketplaceRoot,
  });
  const latestRoot = getBundledPluginLatestCacheRoot({
    bundledPluginName: bundledPlugin.name,
    codexHome,
    executionHostPath,
    marketplaceName,
  });

  await activateBundledPluginCacheVersion({ latestRoot, versionRoot });
  const [chromeExtensionConfig, bundledManifest] = await Promise.all([
    readChromeExtensionIdConfig(latestRoot),
    readBundledPluginManifest(latestRoot),
  ]);

  await syncChromeNativeHost({
    codexHome,
    devRuntimeRepoRoot,
    extensionId: chromeExtensionConfig.extensionId,
    nativeHostName,
    pluginRoot: latestRoot,
    pluginVersion: bundledManifest.version,
    resourcesPath,
  });
}

export async function ensureChromeNativeHostCacheVersion({
  codexHome,
  executionHostPath,
  getBundledManifest,
  marketplaceName,
  nativeHostNameForPlugin,
  pluginName,
  waitForBundledPluginCacheVersion,
}: {
  codexHome: string;
  executionHostPath: ExecutionHostPath;
  getBundledManifest(): Promise<BundledPluginManifest>;
  marketplaceName: string;
  nativeHostNameForPlugin: NativeHostNameForPlugin;
  pluginName: string;
  waitForBundledPluginCacheVersion: WaitForBundledPluginCacheVersion;
}): Promise<void> {
  if (nativeHostNameForPlugin(pluginName) == null) return;

  const bundledManifest = await getBundledManifest();
  await waitForBundledPluginCacheVersion({
    latestRoot: getBundledPluginLatestCacheRoot({
      bundledPluginName: pluginName,
      codexHome,
      executionHostPath,
      marketplaceName,
    }),
    versionRoot: getBundledPluginCacheVersionRoot({
      bundledPluginName: pluginName,
      codexHome,
      executionHostPath,
      marketplaceName,
      version: bundledManifest.version,
    }),
    waitForVersionRoot: false,
  });
}
