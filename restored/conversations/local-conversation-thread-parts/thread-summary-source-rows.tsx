// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Tool and web-source chips for the local conversation summary panel.
import type { ComponentType, MouseEvent, SVGProps } from "react";
import { GlobeIcon, initGlobeIcon } from "../../icons/globe-icon";
import { ConnectedAppsIcon as ConnectedNodesIcon } from "../../icons/connected-apps-icon";
import { once } from "../../runtime/commonjs-interop";
import { initTooltipPrimitives, Tooltip } from "../../ui/tooltip-b";
import {
  ConnectorAppIcon,
  getKnownAppIconById,
  initConnectorAppIconRuntime,
  initKnownAppIconRegistry,
} from "../../runtime/connector-app-icon-runtime";
import {
  initResourceOpenRuntime,
  openInBrowserFromEvent,
} from "../../runtime/resource-open-runtime";
import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import type { ThreadSummaryWebSource } from "./thread-summary-web-sources";

type ThreadSummaryToolSource = {
  id: string;
  logoUrl?: string | null;
  logoUrlDark?: string | null;
  mcpAppId?: string | null;
  name: string;
  pluginDisplayNames: readonly string[];
};

type ThreadSummarySourceItem =
  | {
      source: ThreadSummaryToolSource;
      type: "tool";
    }
  | {
      source: ThreadSummaryWebSource;
      type: "web";
    };

export type ThreadSummarySourceRowsProps = {
  onOpen?: (mcpAppId: string) => void;
  toolSources: readonly ThreadSummaryToolSource[];
  webSources: readonly ThreadSummaryWebSource[];
};

export function ThreadSummarySourceRows({
  onOpen,
  toolSources,
  webSources,
}: ThreadSummarySourceRowsProps) {
  let sourceItems: ThreadSummarySourceItem[] = [];
  for (let toolSource of toolSources)
    sourceItems.push({
      source: toolSource,
      type: "tool",
    });
  for (let webSource of webSources)
    sourceItems.push({
      source: webSource,
      type: "web",
    });

  let intl = useIntl(),
    listAriaLabel = intl.formatMessage({
      id: "codex.localConversation.sources.title",
      defaultMessage: "Sources",
      description: "Title for the thread summary side panel sources section",
    }),
    webSearchLabel = intl.formatMessage({
      id: "codex.localConversation.sources.webSearch",
      defaultMessage: "Web search",
      description:
        "Label for web search in the thread summary side panel sources section",
    });

  if (sourceItems.length === 0) {
    return (
      <div className="py-1 text-base text-token-description-foreground">
        <FormattedMessage
          id="codex.localConversation.sources.empty"
          defaultMessage="No sources yet"
          description="Empty state for the sources section in the thread summary side panel"
        />
      </div>
    );
  }

  let renderSourceItem = (sourceItem: ThreadSummarySourceItem) => {
    let sourceLabel =
      sourceItem.type === "tool"
        ? getToolSourceDisplayName(sourceItem.source)
        : sourceItem.source.type === "page"
          ? sourceItem.source.label
          : webSearchLabel;
    return (
      <li key={getThreadSummarySourceKey(sourceItem)} className="flex">
        <Tooltip tooltipContent={sourceLabel} side="left">
          <ThreadSummarySourceIconButton
            label={sourceLabel}
            onOpen={onOpen}
            source={sourceItem}
          />
        </Tooltip>
      </li>
    );
  };

  return (
    <ul aria-label={listAriaLabel} className="-ml-1 flex flex-wrap gap-0.5">
      {sourceItems.map(renderSourceItem)}
    </ul>
  );
}

type ThreadSummarySourceIconButtonProps = {
  label: string;
  onOpen?: (mcpAppId: string) => void;
  source: ThreadSummarySourceItem;
};

function ThreadSummarySourceIconButton({
  label,
  onOpen,
  source,
}: ThreadSummarySourceIconButtonProps) {
  let icon, mcpAppId: string | null | undefined, href: string | undefined;
  switch (source.type) {
    case "tool": {
      let ToolIcon = getToolSourceIcon(source.source);
      mcpAppId = source.source.mcpAppId;
      let fallbackIcon =
        ToolIcon == null ? (
          <ConnectedNodesIcon className="icon-xs shrink-0" />
        ) : (
          <ToolIcon aria-hidden={true} className="icon-xs shrink-0" />
        );
      icon = (
        <ConnectorAppIcon
          alt={label}
          className="icon-xs shrink-0 object-contain"
          fallback={fallbackIcon}
          logoDarkUrl={source.source.logoUrlDark}
          logoUrl={source.source.logoUrl}
        />
      );
      break;
    }
    case "web": {
      href = source.source.type === "page" ? source.source.url : undefined;
      icon = <GlobeIcon aria-hidden={true} className="icon-xs shrink-0" />;
      break;
    }
  }

  if ((mcpAppId != null && onOpen != null) || href != null) {
    let handleOpenSource = (event: MouseEvent<HTMLButtonElement>) => {
      href == null
        ? mcpAppId != null && onOpen?.(mcpAppId)
        : openInBrowserFromEvent({
            event,
            href,
            initiator: "markdown_link_click",
          });
    };
    return (
      <button
        aria-label={label}
        className="flex size-6 shrink-0 cursor-interaction items-center justify-center rounded-sm text-token-text-secondary hover:bg-token-list-hover-background hover:text-token-foreground"
        type="button"
        onClick={handleOpenSource}
      >
        {icon}
      </button>
    );
  }

  return (
    <span
      aria-label={label}
      className="flex size-6 shrink-0 items-center justify-center rounded-sm text-token-text-secondary"
      role="img"
    >
      {icon}
    </span>
  );
}

function getToolSourceDisplayName(source: ThreadSummaryToolSource) {
  return source.name.trim().length > 0
    ? source.name
    : source.pluginDisplayNames.length > 0
      ? source.pluginDisplayNames.join(", ")
      : source.name;
}

function getToolSourceIcon(source: ThreadSummaryToolSource) {
  for (let iconId of [source.id, source.name, ...source.pluginDisplayNames]) {
    let Icon = getKnownAppIconById(iconId) as
      | ComponentType<SVGProps<SVGSVGElement>>
      | null
      | undefined;
    if (Icon != null) return Icon;
  }
  return null;
}

function getThreadSummarySourceKey(sourceItem: ThreadSummarySourceItem) {
  switch (sourceItem.type) {
    case "tool":
      return sourceItem.source.id;
    case "web":
      return sourceItem.source.type === "page"
        ? sourceItem.source.url
        : "web-search";
  }
}

export const initThreadSummarySourceRowsChunk = once(() => {
  initKnownAppIconRegistry();
  initConnectorAppIconRuntime();
  initResourceOpenRuntime();
  initTooltipPrimitives();
  initGlobeIcon();
});
