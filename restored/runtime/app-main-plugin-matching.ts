// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~plugin-detail-page~new-~sfopfmmp-9J50_--p.js
// App/plugin name matching helpers shared by Appgen announcement and plugin surfaces.
import { once } from "./commonjs-interop";

export type CodexAppPluginMatchApp = {
  name: string;
  pluginDisplayNames?: string[];
};

export type CodexAppPluginMatchPlugin = {
  interface?: {
    displayName?: string | null;
  } | null;
  name: string;
};

export function pluginMatchesCodexApp(
  app: CodexAppPluginMatchApp,
  plugin: CodexAppPluginMatchPlugin,
): boolean {
  const pluginNames = getNormalizedPluginNames(plugin);
  return [app.name, ...(app.pluginDisplayNames ?? [])].some((name) =>
    pluginNames.has(normalizeAppPluginName(name)),
  );
}

export function findSingleMatchingCodexAppForPlugin<
  TApp extends CodexAppPluginMatchApp,
>(apps: TApp[], plugin: CodexAppPluginMatchPlugin): TApp | null {
  const pluginNames = getNormalizedPluginNames(plugin);
  const nameMatches = apps.filter((app) =>
    pluginNames.has(normalizeAppPluginName(app.name)),
  );
  if (nameMatches.length > 0) {
    return nameMatches.length === 1 ? (nameMatches[0] ?? null) : null;
  }
  const displayNameMatches = apps.filter((app) =>
    (app.pluginDisplayNames ?? []).some((displayName) =>
      pluginNames.has(normalizeAppPluginName(displayName)),
    ),
  );
  return displayNameMatches.length === 1
    ? (displayNameMatches[0] ?? null)
    : null;
}

function getNormalizedPluginNames(
  plugin: CodexAppPluginMatchPlugin,
): Set<string> {
  return new Set(
    [plugin.name, plugin.interface?.displayName ?? ""].map(
      normalizeAppPluginName,
    ),
  );
}

function normalizeAppPluginName(name: string): string {
  return name
    .trim()
    .toLowerCase()
    .replaceAll(/[^a-z0-9]+/g, "");
}

export const initAppPluginMatchingRuntime = once(() => {});
