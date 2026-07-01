// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
import type { ReactElement, ReactNode } from "react";
import { useIntl } from "../../vendor/react-intl";
import { classNames } from "../../utils/class-names";
import { Badge } from "../../utils/badge";

export interface AutomationDetailRowProps {
  label: ReactNode;
  children: ReactNode;
  compactLabelInset?: boolean;
  valueAlignment?: "start" | "end";
  variant?: "default" | "compact";
}

export function AutomationDetailRow({
  children,
  compactLabelInset = true,
  label,
  valueAlignment = "start",
  variant = "default",
}: AutomationDetailRowProps): ReactElement {
  const compact = variant === "compact";
  return (
    <div
      className={classNames(
        "grid items-center",
        compact
          ? "h-[1.875rem] w-full grid-cols-[auto_minmax(0,1fr)] gap-x-6 overflow-x-hidden rounded-lg text-base leading-[18px] text-token-foreground electron:opacity-75"
          : "min-h-14 gap-1 px-4 py-2 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-6",
      )}
    >
      <div
        className={classNames(
          "min-w-0",
          compact
            ? "flex items-center pr-2 text-left"
            : "text-sm text-token-text-secondary",
          compact && compactLabelInset && "pl-1",
        )}
      >
        {label}
      </div>
      <div
        className={classNames(
          "min-w-0",
          compact
            ? "flex items-center justify-end justify-self-stretch overflow-hidden"
            : "break-words whitespace-normal text-sm text-token-text-primary",
          valueAlignment === "end" && "text-right",
        )}
      >
        {children}
      </div>
    </div>
  );
}

export function initAutomationDetailRowChunk(): void {
  void AutomationDetailRow;
}

export interface AutomationDetailSectionProps {
  actions?: ReactNode;
  children: ReactNode;
  title: ReactNode;
}

export function AutomationDetailSection({
  actions,
  children,
  title,
}: AutomationDetailSectionProps): ReactElement {
  return (
    <section className="flex min-h-0 flex-col">
      <div className="flex h-8 shrink-0 items-center justify-between gap-2 px-1 text-base text-token-input-placeholder-foreground">
        <span className="opacity-75">{title}</span>
        {actions}
      </div>
      <div className="flex min-h-0 flex-col">{children}</div>
    </section>
  );
}

export function initAutomationDetailSectionChunk(): void {
  void AutomationDetailSection;
}

export function AutomationStatusBadge({
  status,
}: {
  status: string;
}): ReactElement {
  const intl = useIntl();
  let dotClassName = "";
  let label = "";
  switch (status) {
    case "ACTIVE":
      dotClassName = "bg-token-charts-green";
      label = intl.formatMessage({
        id: "inbox.automations.status.active",
        defaultMessage: "Active",
        description: "Label for active automation status",
      });
      break;
    case "PAUSED":
      dotClassName = "bg-token-charts-orange";
      label = intl.formatMessage({
        id: "inbox.automations.status.paused",
        defaultMessage: "Paused",
        description: "Label for paused automation status",
      });
      break;
    case "DELETED":
      dotClassName = "bg-token-charts-red";
      label = intl.formatMessage({
        id: "inbox.automations.status.deleted",
        defaultMessage: "Deleted",
        description: "Label for deleted automation status",
      });
      break;
  }
  return (
    <Badge className="gap-2 rounded-full px-2.5 py-1 text-base">
      <span className={classNames("size-2 rounded-full", dotClassName)} />
      {label}
    </Badge>
  );
}

export function AutomationDetailPill({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return (
    <Badge className="rounded-full px-2.5 py-1 text-base">{children}</Badge>
  );
}
