// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Props for public inline MCP app frame surfaces.

export interface McpAppInlineFramePortalProps {
  isInlineExpanded: boolean;
  mcpAppId: string;
}

export interface McpAppExpandedSurfaceEffectProps {
  conversationId: string;
  csp: unknown;
  error: Error | null;
  fullSurface?: boolean;
  hostId: string;
  hostedInThreadScrollLayout: boolean;
  html: string | null;
  isLoading: boolean;
  mcpAppId: string;
  mcpAppScope: unknown;
  mcpServerStatuses: unknown;
  overrideMcpRequest?: ((request: unknown) => unknown) | null;
  prefersBorder: boolean;
  sandboxOriginScope: unknown;
  server: string;
  sidePanelIcon?: unknown;
  sidePanelTitle?: string;
  title?: string;
  toolArguments: unknown;
  toolResult: unknown;
  widgetDomain: unknown;
}

export interface McpAppInlineFrameProps {
  error?: Error | null;
  fullSurface?: boolean;
  heightHint?: number | null;
  html?: string | null;
  inlineSurface?: "standalone" | "card";
  isLoading?: boolean;
  mcpAppId: string;
  minFrameHeight?: number | null;
}
