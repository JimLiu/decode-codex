// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// Scoped modal registry helpers.
import type { ComponentType } from "react";
import {
  Mi as initModalRegistrySignalRaw,
  Pi as openScopedModalRaw,
} from "../boundaries/current-ref/appg-thread-shared-producer";

export function initModalRuntime(): void {
  initModalRegistrySignalRaw();
}

export function openScopedModal<TProps extends object>(
  scope: unknown,
  component: ComponentType<TProps>,
  props: TProps,
): void {
  openScopedModalRaw(scope, component, props);
}
