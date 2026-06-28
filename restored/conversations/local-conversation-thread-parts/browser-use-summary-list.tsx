// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Browser-use summary list for the local conversation side panel.
import clsx from "clsx";
import { WebSearchFaviconIcon } from "../../browser/web-search-favicon-icon";
import { GlobeIcon } from "../../icons/globe-icon";
import { Spinner } from "../../ui/spinner";
import { SummaryPanelRow } from "../../utils/summary-panel-row";
import type { BrowserUseSummary } from "./browser-use-summary";

export type BrowserUseSummaryOpenHandler = (
  browserUseSummary: BrowserUseSummary,
) => void;

export type BrowserUseSummaryListProps = {
  browserUseSummaries: readonly BrowserUseSummary[];
  onOpen: BrowserUseSummaryOpenHandler;
};

export function BrowserUseSummaryList({
  browserUseSummaries,
  onOpen,
}: BrowserUseSummaryListProps) {
  return (
    <div className="flex flex-col gap-1">
      {browserUseSummaries.map((browserUseSummary) => (
        <BrowserUseSummaryRow
          key={browserUseSummary.browserTabId}
          browserUseSummary={browserUseSummary}
          onOpen={onOpen}
        />
      ))}
    </div>
  );
}

function BrowserUseSummaryRow({
  browserUseSummary,
  onOpen,
}: {
  browserUseSummary: BrowserUseSummary;
  onOpen: BrowserUseSummaryOpenHandler;
}) {
  const secondaryLabel =
    browserUseSummary.displayUrl == null ||
    browserUseSummary.displayUrl === browserUseSummary.title
      ? null
      : browserUseSummary.displayUrl;
  const ariaLabel =
    secondaryLabel == null
      ? browserUseSummary.title
      : `${browserUseSummary.title} ${secondaryLabel}`;
  const tooltipTitle =
    browserUseSummary.url.length === 0
      ? browserUseSummary.title
      : `${browserUseSummary.title}\n${browserUseSummary.url}`;

  return (
    <SummaryPanelRow
      aria-label={ariaLabel}
      icon={<BrowserUseFavicon browserUseSummary={browserUseSummary} />}
      label={
        <BrowserUseSummaryLabel
          browserUseSummary={browserUseSummary}
          secondaryLabel={secondaryLabel}
        />
      }
      labelClassName={clsx(
        "min-w-0 flex-1",
        !browserUseSummary.isAgentWorking && "flex items-baseline gap-2",
      )}
      onClick={() => {
        onOpen(browserUseSummary);
      }}
      title={tooltipTitle}
    />
  );
}

function BrowserUseFavicon({
  browserUseSummary,
}: {
  browserUseSummary: BrowserUseSummary;
}) {
  const iconClassName = clsx(
    "size-full",
    browserUseSummary.isAgentWorking && "opacity-30",
  );

  return (
    <span
      aria-hidden={true}
      className="icon-xs relative flex shrink-0 items-center justify-center overflow-visible"
    >
      {browserUseSummary.faviconUrl == null ? (
        <GlobeIcon className={iconClassName} />
      ) : (
        <WebSearchFaviconIcon
          className={iconClassName}
          src={browserUseSummary.faviconUrl}
        />
      )}
      {browserUseSummary.isAgentWorking ? (
        <span className="pointer-events-none absolute inset-0 z-10 flex size-full items-center justify-center">
          <Spinner className="size-4" />
        </span>
      ) : null}
    </span>
  );
}

function BrowserUseSummaryLabel({
  browserUseSummary,
  secondaryLabel,
}: {
  browserUseSummary: BrowserUseSummary;
  secondaryLabel: string | null;
}) {
  const primaryLabel = (
    <span className="max-w-[60%] min-w-0 shrink truncate">
      {browserUseSummary.title}
    </span>
  );
  const secondaryLabelNode =
    secondaryLabel == null ? null : (
      <span
        className={clsx(
          "max-w-[40%] min-w-0 shrink truncate text-sm",
          !browserUseSummary.isAgentWorking && "text-token-text-secondary",
        )}
      >
        {secondaryLabel}
      </span>
    );

  if (browserUseSummary.isAgentWorking) {
    return (
      <span className="loading-shimmer-pure-text w-full max-w-full min-w-0">
        <span className="flex min-w-0 items-baseline gap-2">
          {primaryLabel}
          {secondaryLabelNode}
        </span>
      </span>
    );
  }

  return (
    <>
      {primaryLabel}
      {secondaryLabelNode}
    </>
  );
}
