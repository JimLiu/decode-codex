// Restored from ref/webview/assets/chunk-T53DSG4Q-DP2fFD_m.js
// ChunkT53DSG4Q chunk restored from the Codex webview bundle.
import {
  chunkFPAJGGOCF,
  chunkFPAJGGOCG,
  chunkFPAJGGOCH,
  chunkFPAJGGOCL,
  chunkFPAJGGOCM,
  chunkFPAJGGOCN,
  chunkFPAJGGOCP,
  chunkFPAJGGOCS,
  chunkFPAJGGOCT,
} from "./mermaid-parser-runtime-fpajggoc";
var chunkT53DSG4QValue1 = class extends chunkFPAJGGOCT {
    static {
      chunkFPAJGGOCF(this, "PieTokenBuilder");
    }
    constructor() {
      super(["pie", "showData"]);
    }
  },
  chunkT53DSG4QValue2 = class extends chunkFPAJGGOCN {
    static {
      chunkFPAJGGOCF(this, "PieValueConverter");
    }
    runCustomConverter(
      chunkT53DSG4QParam2,
      chunkT53DSG4QParam3,
      chunkT53DSG4QParam4,
    ) {
      if (chunkT53DSG4QParam2.name === "PIE_SECTION_LABEL")
        return chunkT53DSG4QParam3.replace(/"/g, "").trim();
    }
  },
  chunkT53DSG4QT = {
    parser: {
      TokenBuilder: chunkFPAJGGOCF(
        () => new chunkT53DSG4QValue1(),
        "TokenBuilder",
      ),
      ValueConverter: chunkFPAJGGOCF(
        () => new chunkT53DSG4QValue2(),
        "ValueConverter",
      ),
    },
  };
function chunkT53DSG4QN(chunkT53DSG4QParam1 = chunkFPAJGGOCP) {
  let chunkT53DSG4QValue3 = chunkFPAJGGOCM(
      chunkFPAJGGOCG(chunkT53DSG4QParam1),
      chunkFPAJGGOCS,
    ),
    chunkT53DSG4QValue4 = chunkFPAJGGOCM(
      chunkFPAJGGOCH({
        shared: chunkT53DSG4QValue3,
      }),
      chunkFPAJGGOCL,
      chunkT53DSG4QT,
    );
  return (
    chunkT53DSG4QValue3.ServiceRegistry.register(chunkT53DSG4QValue4),
    {
      shared: chunkT53DSG4QValue3,
      Pie: chunkT53DSG4QValue4,
    }
  );
}
chunkFPAJGGOCF(chunkT53DSG4QN, "createPieServices");
export { chunkT53DSG4QN, chunkT53DSG4QT };
