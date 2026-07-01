// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Active MCP app frame host.

import {
  mcpAppEntryFamily,
  mcpAppFrameStateFamily,
  mcpAppSidePanelOpenFamily,
  useSignalFamilyValue,
} from "../boundaries/onboarding-commons-externals.facade";
import { McpAppFrameContent } from "./mcp-app-frame-content";
import type { McpAppFrameContentProps } from "./mcp-app-frame-types";

interface ActiveMcpAppFrameProps {
  mcpAppId: string;
}

export function ActiveMcpAppFrame({ mcpAppId }: ActiveMcpAppFrameProps) {
  const entry = useSignalFamilyValue(mcpAppEntryFamily, mcpAppId) as {
    inlineFrameContainer: HTMLElement | null;
    inlineFrameContent: McpAppFrameContentProps;
    sidePanelFrameContent?: McpAppFrameContentProps;
    mcpAppId: string;
  } | null;
  const frameState = useSignalFamilyValue(mcpAppFrameStateFamily, mcpAppId) as {
    isFullScreen: boolean;
    isInlineExpanded: boolean;
  };
  const isSidePanelOpen = useSignalFamilyValue(
    mcpAppSidePanelOpenFamily,
    mcpAppId,
  ) as boolean;
  if (
    entry == null ||
    (!frameState.isInlineExpanded &&
      !frameState.isFullScreen &&
      !isSidePanelOpen)
  )
    return null;
  const frameContent =
    frameState.isFullScreen ||
    (!frameState.isInlineExpanded &&
      entry.inlineFrameContainer?.isConnected !== true &&
      isSidePanelOpen)
      ? (entry.sidePanelFrameContent ?? entry.inlineFrameContent)
      : entry.inlineFrameContent;
  return (
    <McpAppFrameContent
      {...frameContent}
      inlineFrameContainer={entry.inlineFrameContainer}
      mcpAppId={entry.mcpAppId}
      frameState={frameState}
    />
  );
}
