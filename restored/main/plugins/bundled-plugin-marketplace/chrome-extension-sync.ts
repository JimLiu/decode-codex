// Restored from ref/.vite/build/main-r5HnecX_.js
// Chrome extension backed bundled-plugin install/uninstall decisions.

import type {
  BundledPluginInstallReason,
  ChromeExtensionManagedPluginStore,
  ChromeExtensionSyncDecision,
  InstalledBundledPluginStatus,
  InstalledMarketplacePlugin,
  StructuredLogger,
} from "./types";

export type ChromeExtensionSyncInput = {
  extensionId: string;
  installedPlugin: InstalledMarketplacePlugin | null | undefined;
  installedPluginStatus: InstalledBundledPluginStatus;
  isExtensionInstalled: boolean;
  managedPluginIds: Set<string>;
  pluginName: string;
};

export type ApplyChromeExtensionSyncInput = ChromeExtensionSyncInput & {
  chromeExtensionSyncManagedPluginStore: ChromeExtensionManagedPluginStore;
  logger: StructuredLogger;
  marketplaceName: string;
  nativeHostPluginName: string | null;
  removeChromeNativeHost(options: {
    marketplaceName: string;
    pluginName: string;
  }): Promise<void> | void;
  uninstallPlugin(pluginId: string): Promise<void> | void;
};

export function decideChromeExtensionSync({
  installedPlugin,
  isExtensionInstalled,
  managedPluginIds,
}: ChromeExtensionSyncInput): ChromeExtensionSyncDecision {
  const isPluginInstalled = installedPlugin?.installed === true;
  const isPluginSyncManaged =
    installedPlugin != null && managedPluginIds.has(installedPlugin.id);

  if (isExtensionInstalled) {
    return isPluginInstalled ? "keep_installed" : "install_missing";
  }

  if (!isPluginInstalled) return "keep_missing";
  return isPluginSyncManaged ? "uninstall_managed" : "keep_user_managed";
}

export async function applyChromeExtensionSyncDecision({
  chromeExtensionSyncManagedPluginStore,
  extensionId,
  installedPlugin,
  installedPluginStatus,
  isExtensionInstalled,
  logger,
  managedPluginIds,
  marketplaceName,
  nativeHostPluginName,
  pluginName,
  removeChromeNativeHost,
  uninstallPlugin,
}: ApplyChromeExtensionSyncInput): Promise<{
  installWhenMissing: boolean;
  shouldWriteManagedMarkerAfterInstall: boolean;
  uninstalledManagedPlugin: boolean;
}> {
  const decision = decideChromeExtensionSync({
    extensionId,
    installedPlugin,
    installedPluginStatus,
    isExtensionInstalled,
    managedPluginIds,
    pluginName,
  });
  const isPluginInstalled = installedPlugin?.installed === true;
  const isPluginSyncManaged =
    installedPlugin != null && managedPluginIds.has(installedPlugin.id);

  logger.info("bundled_plugin_chrome_extension_sync_decision", {
    safe: {
      chromeExtensionSyncAction: decision,
      extensionId,
      installedPluginId: installedPlugin?.id ?? null,
      installedPluginStatus,
      isExtensionInstalled,
      isPluginInstalled,
      isPluginSyncManaged,
      pluginName,
    },
    sensitive: {},
  });

  if (decision === "uninstall_managed" && installedPlugin != null) {
    logger.info("bundled_plugin_uninstall_requested", {
      safe: {
        pluginId: installedPlugin.id,
        pluginName: installedPlugin.name,
        reason: "chrome_extension_uninstalled",
      },
      sensitive: {},
    });
    await uninstallPlugin(installedPlugin.id);
    if (nativeHostPluginName != null) {
      await removeChromeNativeHost({ marketplaceName, pluginName });
    }
    chromeExtensionSyncManagedPluginStore.setManagedPluginId(
      installedPlugin.id,
      false,
    );
    return {
      installWhenMissing: false,
      shouldWriteManagedMarkerAfterInstall: false,
      uninstalledManagedPlugin: true,
    };
  }

  if (decision === "keep_user_managed" && installedPlugin != null) {
    logger.info("bundled_plugin_uninstall_skipped_user_managed", {
      safe: {
        pluginId: installedPlugin.id,
        pluginName: installedPlugin.name,
        reason: "chrome_extension_uninstalled",
      },
      sensitive: {},
    });
  }

  return {
    installWhenMissing: isExtensionInstalled,
    shouldWriteManagedMarkerAfterInstall:
      isExtensionInstalled && (!isPluginInstalled || isPluginSyncManaged),
    uninstalledManagedPlugin: false,
  };
}

export function getBundledPluginInstallReason({
  forceInstall,
  installWhenMissing,
  installedPluginStatus,
}: {
  forceInstall: boolean;
  installWhenMissing: boolean;
  installedPluginStatus: InstalledBundledPluginStatus;
}): BundledPluginInstallReason | null {
  if (forceInstall && installedPluginStatus === "current") return "forced";
  if (installedPluginStatus === "missing") {
    return installWhenMissing ? "missing" : null;
  }
  return installedPluginStatus === "current" ? null : installedPluginStatus;
}
