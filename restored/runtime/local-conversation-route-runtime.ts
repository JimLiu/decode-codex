// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// Local conversation route scope, path, navigation, and toast helpers.
import {
  AB as initScopeRuntime,
  AI as getLocalConversationPathRaw,
  Dl as createLocalConversationRouteTargetRaw,
  Ev as useLocationRaw,
  I_ as initRouteScope,
  M_ as localConversationRouteScope,
  O_ as initConversationRouteSourceHelpers,
  OI as getHotkeyWindowThreadPathRaw,
  PI as getHotkeyWindowFallbackPathRaw,
  Ov as useNavigateRaw,
  bF as initConversationPromptContextRuntime,
  cM as initToastRuntime,
  uM as toastSignal,
  yv as Navigate,
} from "../vendor/appg-thread-shared-runtime";
import { Ja as isHotkeyWindowRouteRaw } from "../vendor/profile-page-runtime";

export type NavigateOptions = {
  replace?: boolean;
  state?: unknown;
};

export type Navigate = (to: string, options?: NavigateOptions) => void;
export type RouteLocation = {
  hash: string;
  pathname: string;
  search: string;
  state?: unknown;
};

export { localConversationRouteScope, Navigate, toastSignal };

export function createLocalConversationRouteTarget(
  conversationId: string,
  surface: "main" | "side" | string,
  sourceConversationId?: string | null,
): unknown {
  return createLocalConversationRouteTargetRaw(
    conversationId,
    surface,
    sourceConversationId,
  );
}

export function getLocalConversationPath(conversationId: string): string {
  return getLocalConversationPathRaw(conversationId);
}

export function getHotkeyWindowThreadPath(conversationId: string): string {
  return getHotkeyWindowThreadPathRaw(conversationId);
}

export function getHotkeyWindowFallbackPath(
  hasConfiguredLauncherHotkey: boolean,
): string {
  return getHotkeyWindowFallbackPathRaw(hasConfiguredLauncherHotkey);
}

export function isHotkeyWindowRoute(): boolean {
  return isHotkeyWindowRouteRaw();
}

export function useNavigate(): Navigate {
  return useNavigateRaw() as Navigate;
}

export function useLocation(): RouteLocation {
  return useLocationRaw() as RouteLocation;
}

export function initLocalConversationRouteRuntime(): void {
  initScopeRuntime();
  initRouteScope();
}

export function initToastSignalRuntime(): void {
  initToastRuntime();
}

export function initConversationRouteSourceRuntime(): void {
  initConversationRouteSourceHelpers();
}

export function initLocalConversationNavigationRuntime(): void {
  initLocalConversationRouteRuntime();
  initConversationPromptContextRuntime();
  initToastRuntime();
}
