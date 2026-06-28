// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// App logger facade used by restored conversation modules.
import {
  mP as appLogger,
  pP as initLoggerRuntimeRaw,
} from "../boundaries/current-ref/appg-thread-shared-producer";

export type AppLogger = {
  debug(
    message: string,
    fields?: {
      safe?: Record<string, unknown>;
      sensitive?: Record<string, unknown>;
    },
  ): void;
  error(
    message: string,
    fields?: {
      safe?: Record<string, unknown>;
      sensitive?: Record<string, unknown>;
    },
  ): void;
  warning(
    message: string,
    fields?: {
      safe?: Record<string, unknown>;
      sensitive?: Record<string, unknown>;
    },
  ): void;
  info(
    message: string,
    fields?: {
      safe?: Record<string, unknown>;
      sensitive?: Record<string, unknown>;
    },
  ): void;
};

export function initAppLoggerRuntime(): void {
  initLoggerRuntimeRaw();
}

export { appLogger };
