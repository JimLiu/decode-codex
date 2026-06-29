// Restored from ref/webview/assets/chunk-EXTU4WIE-fqByunxs.js
// ChunkEXTU4WIE chunk restored from the Codex webview bundle.
import { Src } from "./roughjs-geometry";
import { chunkAGHRB4JFN } from "./dompurify";
import { _chunkABZYJK2DL } from "./katex-auto-render";
export const chunkEXTU4WIE = chunkAGHRB4JFN((chunkEXTU4WIEParam1) => {
  let { securityLevel: _chunkEXTU4WIE } = _chunkABZYJK2DL(),
    chunkEXTU4WIEValue1 = Src("body");
  return (
    _chunkEXTU4WIE === "sandbox" &&
      (chunkEXTU4WIEValue1 = Src(
        (Src(`#i${chunkEXTU4WIEParam1}`).node()?.contentDocument ?? document)
          .body,
      )),
    chunkEXTU4WIEValue1.select(`#${chunkEXTU4WIEParam1}`)
  );
}, "selectSvgElement");
