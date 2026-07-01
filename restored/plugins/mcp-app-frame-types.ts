// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Shared MCP app frame content types.

export interface McpAppFrameContentProps {
  conversationId: string;
  csp: {
    baseUriDomains: unknown;
    connectDomains: unknown;
    frameDomains: unknown;
    resourceDomains: unknown;
  } | null;
  fullSurface: boolean;
  hostId: string;
  html: string;
  inlineFrameContainer: HTMLElement | null;
  mcpAppId: string;
  mcpAppScope: unknown;
  mcpServerStatuses: unknown;
  prefersBorder: boolean;
  overrideMcpRequest?: ((request: unknown) => unknown) | null;
  sandboxOriginScope: unknown;
  server: string;
  sidePanelIcon?: {
    alt: string;
    logoUrl?: string;
    logoDarkUrl?: string;
  };
  sidePanelTitle?: string;
  title: string;
  toolArguments: unknown;
  toolResult: unknown;
  widgetDomain: unknown;
  frameState: { isFullScreen: boolean };
}

export interface PendingMcpAppFollowUp {
  prompt: string;
  reject: (error: unknown) => void;
  resolve: (result: any) => void;
  title?: string;
}
