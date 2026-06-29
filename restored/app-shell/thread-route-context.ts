// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~bj5tp28r-Dcs9S3fj.js
// Route-scoped thread context helpers backed by the current app-view route host signal.
import { currentRouteHostIdSignal } from "../runtime/window-chrome-runtime";

type ThreadRouteScope = {
  get<TValue>(state: unknown, key?: unknown): TValue;
};

export function getActiveThreadHostId(
  scope: ThreadRouteScope,
): string | null | undefined {
  return scope.get<string | null | undefined>(currentRouteHostIdSignal);
}
