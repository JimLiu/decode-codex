// Restored from ref/webview/assets/legacy-video-plugins-B3g7QTf7.js
export type LegacyVideoPluginTarget = {
  _plugins?: unknown;
};
export async function loadLegacyVideoPlugins(
  target: LegacyVideoPluginTarget,
): Promise<void> {
  const { default: analyticsVideoPlugins } = await import(
    "../vendor/analytics-video-plugins"
  );
  target._plugins = analyticsVideoPlugins;
}
