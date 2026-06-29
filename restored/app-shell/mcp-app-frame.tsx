// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// MCP app frame overlay outlet and route-level app-shell frame signals.
import type { ComponentType } from "react";
import {
  nf as liveMcpAppFrameSignal,
  Zu as RawAppShellOverlayOutlet,
} from "../../ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js";
import { rightPanelFullscreenSignal as rightPanelFullWidthSignal } from "./app-shell-state";
import { AppShellElementContext } from "./app-shell-element-context";

export type AppShellOverlayOutletProps = {
  mcpAppId?: string;
};

export const AppShellOverlayOutlet =
  RawAppShellOverlayOutlet as ComponentType<AppShellOverlayOutletProps>;

export {
  AppShellElementContext,
  liveMcpAppFrameSignal,
  rightPanelFullWidthSignal,
};
