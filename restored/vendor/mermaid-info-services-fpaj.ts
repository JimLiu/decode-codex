// Restored from ref/webview/assets/chunk-LBM3YZW2-CrUBqdFe.js
// ChunkLBM3YZW2 chunk restored from the Codex webview bundle.
import {
  chunkFPAJGGOCF,
  chunkFPAJGGOCG,
  chunkFPAJGGOCH,
  chunkFPAJGGOCI,
  chunkFPAJGGOCM,
  chunkFPAJGGOCO,
  chunkFPAJGGOCP,
  chunkFPAJGGOCS,
  chunkFPAJGGOCT,
} from "./mermaid-parser-runtime-fpajggoc";
var chunkLBM3YZW2Value1 = class extends chunkFPAJGGOCT {
    static {
      chunkFPAJGGOCF(this, "InfoTokenBuilder");
    }
    constructor() {
      super(["info", "showInfo"]);
    }
  },
  chunkLBM3YZW2T = {
    parser: {
      TokenBuilder: chunkFPAJGGOCF(
        () => new chunkLBM3YZW2Value1(),
        "TokenBuilder",
      ),
      ValueConverter: chunkFPAJGGOCF(
        () => new chunkFPAJGGOCI(),
        "ValueConverter",
      ),
    },
  };
function chunkLBM3YZW2N(chunkLBM3YZW2Param1 = chunkFPAJGGOCP) {
  let chunkLBM3YZW2Value2 = chunkFPAJGGOCM(
      chunkFPAJGGOCG(chunkLBM3YZW2Param1),
      chunkFPAJGGOCS,
    ),
    chunkLBM3YZW2Value3 = chunkFPAJGGOCM(
      chunkFPAJGGOCH({
        shared: chunkLBM3YZW2Value2,
      }),
      chunkFPAJGGOCO,
      chunkLBM3YZW2T,
    );
  return (
    chunkLBM3YZW2Value2.ServiceRegistry.register(chunkLBM3YZW2Value3),
    {
      shared: chunkLBM3YZW2Value2,
      Info: chunkLBM3YZW2Value3,
    }
  );
}
chunkFPAJGGOCF(chunkLBM3YZW2N, "createInfoServices");
export { chunkLBM3YZW2N, chunkLBM3YZW2T };
