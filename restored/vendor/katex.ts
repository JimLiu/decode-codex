// Restored from ref/webview/assets/katex-BvHNzFYT.js
// Current-ref KaTeX adapter: initializes the bundled runtime and exposes the KaTeX surface.

import {
  worktreeNewThreadOrchestratorCompatSlotLowerCLowerG as bundledKatex,
  worktreeNewThreadOrchestratorCompatSlotLowerSLowerG as initializeBundledKatex,
} from "../runtime/current-app-initial/worktree-new-thread-orchestrator-runtime";
type KatexFunction = (...args: unknown[]) => unknown;
type KatexParseErrorConstructor = new (
  message: string,
  token?: unknown,
) => Error;
interface KatexPublicApi {
  version: string;
  render: KatexFunction;
  renderToString: (...args: unknown[]) => string;
  ParseError: KatexParseErrorConstructor;
  SETTINGS_SCHEMA: Record<string, unknown>;
  __parse: KatexFunction;
  __renderToDomTree: KatexFunction;
  __renderToHTMLTree: KatexFunction;
  __setFontMetrics: KatexFunction;
  __defineSymbol: KatexFunction;
  __defineFunction: KatexFunction;
  __defineMacro: KatexFunction;
  __domTree: Record<string, unknown>;
}
initializeBundledKatex();
export const katexC = bundledKatex as KatexPublicApi;
export const katexA = katexC.__defineMacro;
export const katexD = katexC.__renderToHTMLTree;
export const katexF = katexC.renderToString;
export const katexI = katexC.__defineFunction;
export const katexL = katexC.render;
export const katexM = katexC.version;
export const katexN = katexC.SETTINGS_SCHEMA;
export const katexO = katexC.__defineSymbol;
export const katexP = katexC.__setFontMetrics;
export const katexR = katexC.__domTree;
export const katexS = katexC.__parse;
export const katexT = katexC.ParseError;
export const katexU = katexC.__renderToDomTree;
export default katexC;
