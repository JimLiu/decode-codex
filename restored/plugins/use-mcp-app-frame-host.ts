// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Host/webview DOM element lifecycle for an MCP app frame.

import * as React from "react";
import { serializeSandboxPartition } from "../boundaries/onboarding-commons-externals.facade";

interface UseMcpAppFrameHostOptions {
  mcpAppId: string;
  sandboxId: string;
  sandboxSourceUrl: string;
}

export function useMcpAppFrameHost({
  mcpAppId,
  sandboxId,
  sandboxSourceUrl,
}: UseMcpAppFrameHostOptions) {
  const [frameElement, setFrameElement] = React.useState<HTMLDivElement | null>(
    null,
  );
  const [webviewElement, setWebviewElement] =
    React.useState<HTMLElement | null>(null);
  const [isFramePlaced, setIsFramePlaced] = React.useState(false);

  React.useLayoutEffect(() => {
    const host = document.createElement("div");
    const webview = document.createElement("webview");
    webview.setAttribute("partition", serializeSandboxPartition(sandboxId));
    setFrameElement(host as unknown as HTMLDivElement);
    setWebviewElement(webview);
    return () => {
      host.remove();
      setFrameElement((current) =>
        (current as unknown as HTMLElement) === host ? null : current,
      );
      setWebviewElement((current) => (current === webview ? null : current));
      setIsFramePlaced(false);
    };
  }, [mcpAppId, sandboxSourceUrl, sandboxId]);

  return {
    frameElement,
    isFramePlaced,
    setIsFramePlaced,
    webviewElement,
  };
}
