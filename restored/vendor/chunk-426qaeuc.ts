// Restored from ref/webview/assets/chunk-426QAEUC-SBg7XJ-1.js
// Chunk426QAEUC chunk restored from the Codex webview bundle.
import { Src } from "./roughjs-geometry";
import { chunkAGHRB4JFN } from "./dayjs-core-alt";
import { _chunkICPOFSXXP } from "./chunk-icpofsxx";

type MermaidSecurityConfig = {
  securityLevel?: string;
};

const selectSvgElement = chunkAGHRB4JFN((diagramId: string) => {
  const { securityLevel } = _chunkICPOFSXXP() as MermaidSecurityConfig;
  let rootSelection = Src("body");

  if (securityLevel === "sandbox") {
    const sandboxDocument =
      Src(`#i${diagramId}`).node()?.contentDocument ?? document;
    rootSelection = Src(sandboxDocument.body);
  }

  return rootSelection.select(`#${diagramId}`);
}, "selectSvgElement");

export { selectSvgElement, selectSvgElement as chunk426QAEUC };

export function initChunk426QAEUC(): void {}
