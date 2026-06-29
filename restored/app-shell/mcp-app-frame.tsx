// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// MCP app frame overlay outlet and route-level app-shell frame signals.
import type { ComponentType } from "react";
import {
  jr as liveMcpAppFrameSignal,
  vn as RawAppShellOverlayOutlet,
} from "../vendor/projects-app-shared-runtime";
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
