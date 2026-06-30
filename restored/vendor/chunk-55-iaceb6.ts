// Restored from ref/webview/assets/chunk-55IACEB6-W9i3ByIr.js
// Chunk55IACEB6 chunk restored from the Codex webview bundle.
import { Src } from "./roughjs-geometry";
import { chunkAGHRB4JFN } from "./dayjs-core-alt";
export const chunk55IACEB6 = chunkAGHRB4JFN(
  (chunk55IACEB6Param1, _chunk55IACEB6) => {
    let chunk55IACEB6Value1;
    return (
      _chunk55IACEB6 === "sandbox" &&
        (chunk55IACEB6Value1 = Src("#i" + chunk55IACEB6Param1)),
      Src(
        _chunk55IACEB6 === "sandbox"
          ? chunk55IACEB6Value1.nodes()[0].contentDocument.body
          : "body",
      ).select(`[id="${chunk55IACEB6Param1}"]`)
    );
  },
  "getDiagramElement",
);
export function initChunk55IACEB6(): void {}
