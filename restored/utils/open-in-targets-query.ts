// Restored from ref/webview/assets/open-in-targets-query-CrvqPdrF.js
// Open-in-targets query restored from the current Codex webview bundle.
import { _appScopeM } from "../boundaries/app-scope";
import { vscodeApiUnderscore, vscodeApiU } from "../boundaries/vscode-api";
export const openInTargetsQuery = vscodeApiUnderscore(
  _appScopeM,
  "open-in-targets",
  () => ({
    staleTime: vscodeApiU.ONE_MINUTE,
  }),
);
export function initOpenInTargetsQueryChunk(): void {}
