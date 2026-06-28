// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// Connector apps list query hooks.
import {
  Io as initConnectorAppsListQueryRaw,
  zo as useAppsQueryRaw,
} from "../vendor/projects-app-shared-runtime";

export type ConnectorAppsQueryResult<TApp = unknown> = {
  data?: TApp[];
  error?: unknown;
  isFetching?: boolean;
  isLoading?: boolean;
};

export function initConnectorAppsRuntime(): void {
  initConnectorAppsListQueryRaw();
}

export function useAppsQuery<TApp = unknown>(
  options?: unknown,
): ConnectorAppsQueryResult<TApp> {
  return useAppsQueryRaw(options) as ConnectorAppsQueryResult<TApp>;
}
