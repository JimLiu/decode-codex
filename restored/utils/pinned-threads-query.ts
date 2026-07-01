// Restored from ref/webview/assets/pinned-threads-query-BicPYERW.js
// PinnedThreadsQuery chunk restored from the Codex webview bundle.
import { _appScopeM } from "../boundaries/app-scope";
import { vscodeApiA, vscodeApiU } from "../boundaries/vscode-api";

export function initPinnedThreadsQueryChunk(): void {}

export const pinnedThreadsQuery = vscodeApiA(
  _appScopeM,
  "list-pinned-threads",
  {
    refetchOnWindowFocus: "always",
    staleTime: vscodeApiU.FIVE_SECONDS,
  },
);
