// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Scheduled automation row for the local conversation summary panel.
import { once } from "../../runtime/commonjs-interop";
import { useScope } from "../../runtime/app-scope-hooks";
import {
  initLocalConversationRouteRuntime,
  localConversationRouteScope,
} from "../local-conversation-route-runtime";
import {
  formatAutomationScheduleSummary,
  initAutomationScheduleSummaryFormatter,
} from "../../automation/automation-schedule";
import {
  formatAutomationNextRunLabel,
  initAutomationRouteRuntime,
  openAutomationRoute,
} from "../../automation/automation-route-runtime";
import {
  HeartbeatAutomationIcon as AutomationIcon,
  initHeartbeatAutomationIconChunk,
} from "../../github/pull-request-checks-summary";
import {
  initSummaryPanelRowChunk,
  SummaryPanelRow,
} from "../../utils/summary-panel-row";
import { useIntl, initIntlRuntime } from "../../vendor/react-intl";

type ThreadSummaryAutomation = {
  id: string;
  name: string;
  nextRunAt?: unknown;
  rrule?: string | null;
  status?: string | null;
};

export type ThreadSummaryAutomationRowProps = {
  automation: ThreadSummaryAutomation;
};

export function ThreadSummaryAutomationRow({
  automation,
}: ThreadSummaryAutomationRowProps) {
  let intl = useIntl(),
    scope = useScope(localConversationRouteScope),
    nextRunLabel = formatAutomationNextRunLabel({
      intl,
      nextRunAt: automation.nextRunAt,
      status: automation.status,
    }),
    nextRunTooltip = intl.formatMessage(
      {
        id: "codex.localConversation.heartbeatAutomation.nextRun",
        defaultMessage: "Next run: {nextRunLabel}",
        description:
          "Tooltip shown on the heartbeat automation row in the thread summary panel",
      },
      {
        nextRunLabel,
      },
    ),
    scheduleSummary = formatAutomationScheduleSummary({
      rrule: automation.rrule,
      intl,
      fallbackMessage: intl.formatMessage({
        id: "settings.automations.rruleSummaryFallback",
        defaultMessage: "Custom schedule",
        description: "Fallback label when RRULE summary cannot be generated",
      }),
    }),
    rowAriaLabel = intl.formatMessage({
      id: "codex.localConversation.heartbeatAutomation.open",
      defaultMessage: "Open scheduled task",
      description:
        "Accessible label for opening the active scheduled task from the thread summary panel",
    }),
    label = (
      <>
        <span className="min-w-0 flex-1 truncate">{automation.name}</span>
        {scheduleSummary == null ? null : (
          <span className="text-size-chat max-w-48 shrink-0 truncate text-token-text-secondary">
            {scheduleSummary}
          </span>
        )}
      </>
    );

  return (
    <SummaryPanelRow
      aria-label={rowAriaLabel}
      icon={<AutomationIcon className="icon-xs shrink-0" />}
      label={label}
      labelClassName="flex min-w-0 flex-1 items-baseline gap-2"
      onClick={() => {
        openAutomationRoute({
          scope,
          automationId: automation.id,
          title: automation.name,
        });
      }}
      title={nextRunTooltip}
    />
  );
}

export const initThreadSummaryAutomationRowChunk = once(() => {
  initLocalConversationRouteRuntime();
  initIntlRuntime();
  initAutomationScheduleSummaryFormatter();
  initAutomationRouteRuntime();
  initHeartbeatAutomationIconChunk();
  initSummaryPanelRowChunk();
});
