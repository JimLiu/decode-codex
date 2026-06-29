// Restored from ref/webview/assets/app-initial~app-main~automations-page-BfqUlSo6.js
// Project-site route builders used by appgen and settings routes.
export const PROJECT_SITE_ANALYTICS_ROUTE_PATTERN =
  "/sites/:projectId/analytics";
export const PROJECT_SITE_SETTINGS_ROUTE_PATTERN = "/sites/:projectId/settings";
export const PROJECT_SITES_LIBRARY_ROUTE = "/sites/library";

export function getProjectSiteAnalyticsRoute(projectId: string): string {
  return `/sites/${encodeURIComponent(projectId)}/analytics`;
}

export function getProjectSiteSettingsRoute(projectId: string): string {
  return `/sites/${encodeURIComponent(projectId)}/settings`;
}

export function initProjectSiteRoutesChunk(): void {}
