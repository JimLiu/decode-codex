// Restored from ref/.vite/build/main-r5HnecX_.js
// Shared types for bundled plugin marketplace reconciliation.

export type StructuredLogDetails = {
  safe?: Record<string, unknown>;
  sensitive?: Record<string, unknown>;
};

export type StructuredLogger = {
  info(message: string, details?: StructuredLogDetails): void;
  warning(message: string, details?: StructuredLogDetails): void;
};

export type ExecutionHostPath = {
  join(...segments: string[]): string;
};

export type BundledPluginManifest = {
  bundledContentVariant?: string;
  name: string;
  version: string;
};

export type InstalledMarketplacePlugin = {
  enabled?: boolean;
  id: string;
  installed: boolean;
  name: string;
  source: { type: string; path?: string };
};

export type BundledMarketplacePlugin = {
  name: string;
  source: { path: string; source?: string };
};

export type ChromeExtensionSyncDecision =
  | "keep_installed"
  | "install_missing"
  | "uninstall_managed"
  | "keep_user_managed"
  | "keep_missing";

export type InstalledBundledPluginStatus =
  | "current"
  | "missing"
  | "outdated"
  | "unknown";

export type BundledPluginInstallReason =
  | "forced"
  | "missing"
  | "outdated"
  | "unknown";

export type ChromeExtensionManagedPluginStore = {
  getManagedPluginIds(): Set<string>;
  setManagedPluginId(pluginId: string, managed: boolean): void;
};

export type ReadPluginManifest = (
  pluginRoot: string,
) => Promise<BundledPluginManifest>;
