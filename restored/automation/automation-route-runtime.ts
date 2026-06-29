// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Automation route helpers bridged from the current profile-page runtime.
import {
  Ar as initAutomationRouteHelpersRaw,
  Fr as formatAutomationNextRunLabelRaw,
  Ir as initAutomationNextRunLabelChunkRaw,
  jr as openAutomationRouteRaw,
} from "../vendor/profile-page-runtime";

export type OpenAutomationRouteRequest = {
  automationId: string;
  scope: unknown;
  title?: string | null;
};

type AutomationNextRunIntl = {
  formatDate(value: Date, options?: Intl.DateTimeFormatOptions): string;
  formatMessage(
    descriptor: {
      defaultMessage: string;
      description?: string;
      id: string;
    },
    values?: Record<string, unknown>,
  ): string;
};

export type AutomationNextRunLabelRequest = {
  intl: AutomationNextRunIntl;
  nextRunAt?: unknown;
  status?: string | null;
};

export function openAutomationRoute(request: OpenAutomationRouteRequest): void {
  openAutomationRouteRaw(request);
}

export function formatAutomationNextRunLabel(
  request: AutomationNextRunLabelRequest,
): string {
  return formatAutomationNextRunLabelRaw(request);
}

export function initAutomationRouteRuntime(): void {
  initAutomationNextRunLabelChunkRaw();
  initAutomationRouteHelpersRaw();
}
