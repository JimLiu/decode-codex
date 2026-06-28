// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// Local conversation route scope, path, navigation, and toast helpers.
import {
  AB as initScopeRuntime,
  AI as getLocalConversationPathRaw,
  Ev as useLocationRaw,
  I_ as initRouteScope,
  M_ as localConversationRouteScope,
  O_ as initConversationRouteSourceHelpers,
  OI as getHotkeyWindowThreadPathRaw,
  Ov as useNavigateRaw,
  bF as initConversationPromptContextRuntime,
  cM as initToastRuntime,
  uM as toastSignal,
} from "../boundaries/current-ref/appg-thread-shared-producer";

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

export { localConversationRouteScope, toastSignal };

export function getLocalConversationPath(conversationId: string): string {
  return getLocalConversationPathRaw(conversationId);
}

export function getHotkeyWindowThreadPath(conversationId: string): string {
  return getHotkeyWindowThreadPathRaw(conversationId);
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
