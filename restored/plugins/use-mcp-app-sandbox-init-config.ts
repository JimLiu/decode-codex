// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Builds the sandbox init config reader for an MCP app frame.

import * as React from "react";
import { parseUrlOrigin } from "../boundaries/onboarding-commons-externals.facade";

interface UseMcpAppSandboxInitConfigOptions {
  csp: unknown;
  html: string;
  locale: string;
  sandboxSourceUrl: string;
}

export function useMcpAppSandboxInitConfig({
  csp,
  html,
  locale,
  sandboxSourceUrl,
}: UseMcpAppSandboxInitConfigOptions) {
  return React.useEffectEvent(() => {
    const origin = parseUrlOrigin(sandboxSourceUrl);
    return origin == null
      ? null
      : {
          csp,
          html,
          locale,
          sandboxOrigin: origin,
          sourceUrl: sandboxSourceUrl,
        };
  });
}
