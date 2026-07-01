// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Public inline MCP app frame surfaces.

import * as React from "react";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import { classNames } from "../utils/class-names";
import {
  Callout,
  appRootScope,
  attachMcpAppPanelElement,
  detachMcpAppPanelElement,
  mcpAppEntryFamily,
  mcpAppFrameStateFamily,
  openMcpAppExpandedSurface,
  resolveMcpAppTabId,
  setMcpAppInlineExpanded,
  sidePanelTabController,
  useScopedStore,
  useScopedValue,
  useSignalFamilyValue,
} from "../boundaries/onboarding-commons-externals.facade";
import { mcpAppTabId } from "./mcp-app-tab";
import { updateMcpAppFrameState } from "./mcp-app-frame-state";
import {
  mcpAppStyleVariablesAtom,
  mcpAppSurfaceBackgroundColorAtom,
} from "./mcp-app-style-variables";
import {
  clampMcpFrameHeight,
  resolveMcpFrameHeight,
} from "./mcp-app-frame-height";
import type {
  McpAppExpandedSurfaceEffectProps,
  McpAppInlineFramePortalProps,
  McpAppInlineFrameProps,
} from "./mcp-app-inline-frame-types";

export function McpAppInlineFramePortal({
  isInlineExpanded,
  mcpAppId,
}: McpAppInlineFramePortalProps): null {
  const store = useScopedStore(appRootScope);
  React.useLayoutEffect(() => {
    setMcpAppInlineExpanded(store, mcpAppId, isInlineExpanded);
  }, [isInlineExpanded, mcpAppId, store]);
  return null;
}

export function McpAppExpandedSurfaceEffect(
  props: McpAppExpandedSurfaceEffectProps,
): null {
  const {
    conversationId,
    csp,
    error,
    fullSurface = false,
    hostId,
    hostedInThreadScrollLayout,
    html,
    isLoading,
    mcpAppId,
    mcpAppScope,
    mcpServerStatuses,
    overrideMcpRequest,
    prefersBorder,
    sandboxOriginScope,
    server,
    sidePanelIcon,
    sidePanelTitle,
    title,
    toolArguments,
    toolResult,
    widgetDomain,
  } = props;
  const store = useScopedStore(appRootScope);
  const styleVariables = useScopedValue(mcpAppStyleVariablesAtom);
  const surfaceBackgroundColor = useScopedValue(
    mcpAppSurfaceBackgroundColorAtom,
  );
  const tabs = useScopedValue(sidePanelTabController.tabs$) as {
    tabId: string;
  }[];
  const htmlSize = html == null ? 0 : new Blob([html]).size;
  const tabId = resolveMcpAppTabId(
    styleVariables,
    {
      conversationId,
      inlineFrameContainer: null,
      mcpAppId,
      mcpAppScope,
      sandboxOriginScope,
      server,
    },
    surfaceBackgroundColor,
  );
  const isTabOpen = tabs.some((tab) => tab.tabId === mcpAppTabId(tabId));

  React.useLayoutEffect(() => {
    if (
      error != null ||
      html == null ||
      htmlSize > 1e7 ||
      isLoading ||
      toolResult == null
    )
      return;
    if (isTabOpen)
      updateMcpAppFrameState(store, tabId as unknown as string, {
        isFullScreen: true,
      });
    openMcpAppExpandedSurface(store, {
      conversationId,
      csp,
      fullSurface,
      hostId,
      hostedInThreadScrollLayout,
      html,
      inlineFrameContainer: null,
      mcpAppId,
      mcpAppScope,
      mcpServerStatuses,
      prefersBorder,
      overrideMcpRequest,
      sandboxOriginScope,
      server,
      sidePanelIcon,
      sidePanelTitle,
      title,
      toolArguments,
      toolResult,
      widgetDomain,
    });
  }, [
    conversationId,
    csp,
    error,
    fullSurface,
    hostId,
    hostedInThreadScrollLayout,
    isTabOpen,
    html,
    htmlSize,
    isLoading,
    mcpAppId,
    tabId,
    mcpAppScope,
    mcpServerStatuses,
    overrideMcpRequest,
    prefersBorder,
    sandboxOriginScope,
    store,
    server,
    sidePanelIcon,
    sidePanelTitle,
    title,
    toolArguments,
    toolResult,
    widgetDomain,
  ]);
  return null;
}

export function McpAppInlineFrame(props: McpAppInlineFrameProps) {
  const {
    error,
    fullSurface = false,
    heightHint = null,
    html = null,
    inlineSurface = "standalone",
    isLoading = false,
    mcpAppId,
    minFrameHeight = null,
  } = props;
  const store = useScopedStore(appRootScope);
  const intl = useIntl();
  const entry = useSignalFamilyValue(mcpAppEntryFamily, mcpAppId) as {
    inlineFrameContainer: HTMLElement | null;
  } | null;
  const frameState = useSignalFamilyValue(mcpAppFrameStateFamily, mcpAppId) as {
    intrinsicHeight: number | null;
    isFullScreen: boolean;
    sandboxError: Error | null;
  };
  const [surfaceElement, setSurfaceElement] =
    React.useState<HTMLDivElement | null>(null);
  const htmlSize = html == null ? 0 : new Blob([html]).size;
  const hasEntry = entry != null;
  const frameHeight = clampMcpFrameHeight(
    frameState.intrinsicHeight,
    heightHint,
    minFrameHeight,
  );
  const sandboxError = error ?? frameState.sandboxError;

  React.useLayoutEffect(() => {
    if (!hasEntry) return;
    attachMcpAppPanelElement(store, mcpAppId, surfaceElement);
    return () => {
      detachMcpAppPanelElement(store, mcpAppId, surfaceElement);
    };
  }, [surfaceElement, hasEntry, mcpAppId, store]);

  if (htmlSize > 1e7) {
    return (
      <Callout className="w-full" fullWidth level="danger">
        <div className="text-size-chat max-h-48 overflow-auto whitespace-pre-wrap">
          <FormattedMessage
            id="codex.mcpTool.mcpAppTooLarge"
            defaultMessage="Failed to load MCP app: HTML exceeds the maximum supported size."
            description="Error shown when an MCP app resource is too large to render"
          />
        </div>
      </Callout>
    );
  }

  if (isLoading) {
    const label = intl.formatMessage({
      id: "codex.mcpTool.mcpAppLoading",
      defaultMessage: "Loading MCP app",
      description: "Accessible label for the MCP app loading placeholder",
    });
    const surfaceClass = fullSurface
      ? "h-full border-t"
      : inlineSurface === "standalone" && "rounded-lg border";
    const className = classNames(
      "mcp-app-loading-pulse w-full overflow-hidden border-token-border-light",
      surfaceClass,
    );
    const height = fullSurface
      ? "100%"
      : resolveMcpFrameHeight(heightHint, minFrameHeight);
    return (
      <div
        role="status"
        aria-label={label}
        data-mcp-app-loading="true"
        className={className}
        style={{ height }}
      />
    );
  }

  if (sandboxError != null) {
    return (
      <Callout className="w-full" fullWidth level="danger">
        <div className="text-size-chat max-h-48 overflow-auto whitespace-pre-wrap">
          <FormattedMessage
            id="codex.mcpTool.mcpAppLoadFailed"
            defaultMessage={"Failed to load MCP app: {message}"}
            description="Error shown when an MCP app resource fails to load"
            values={{ message: sandboxError.message }}
          />
        </div>
      </Callout>
    );
  }

  if (html == null) {
    return (
      <p className="text-token-description-foreground/80">
        <FormattedMessage
          id="codex.mcpTool.mcpAppNoContent"
          defaultMessage="MCP app returned no HTML content"
          description="Message shown when an MCP app resource has no renderable HTML"
        />
      </p>
    );
  }

  const className = classNames(
    "w-full overflow-hidden",
    fullSurface && "h-full",
  );
  const height = frameState.isFullScreen
    ? 0
    : fullSurface
      ? "100%"
      : frameHeight;
  return (
    <div
      ref={setSurfaceElement}
      data-mcp-app-expanded="true"
      data-mcp-app-inline-surface={inlineSurface}
      className={className}
      style={{ height }}
    />
  );
}
