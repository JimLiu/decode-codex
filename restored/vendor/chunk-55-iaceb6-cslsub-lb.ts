// Restored from ref/webview/assets/chunk-55IACEB6-CslsubLB.js
// Chunk55IACEB6 chunk restored from the Codex webview bundle.
import { Src } from "./roughjs-geometry";
import { chunkAGHRB4JFN } from "./dompurify";

const getDiagramElement = chunkAGHRB4JFN(
  (diagramId: string, securityLevel: string) => {
    if (securityLevel === "sandbox") {
      const sandboxFrameSelection = Src("#i" + diagramId);
      return Src(sandboxFrameSelection.nodes()[0].contentDocument.body).select(
        `[id="${diagramId}"]`,
      );
    }

    return Src("body").select(`[id="${diagramId}"]`);
  },
  "getDiagramElement",
);

export { getDiagramElement, getDiagramElement as chunk55IACEB6 };
