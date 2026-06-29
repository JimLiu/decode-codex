// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Identity helper for the built-in "codex_apps" MCP server backing Codex apps/widgets.

export const CODEX_APPS_SERVER_NAME = "codex_apps";

export function isCodexAppsServer(server: string | null | undefined): boolean {
  return server === CODEX_APPS_SERVER_NAME;
}
