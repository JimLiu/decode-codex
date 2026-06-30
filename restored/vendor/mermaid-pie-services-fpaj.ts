// Restored from ref/webview/assets/chunk-T53DSG4Q-m0Nw3lHx.js
// Mermaid pie diagram service module restored from the Codex webview bundle.
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
var PieTokenBuilder = class extends chunkFPAJGGOCT {
    static {
      chunkFPAJGGOCF(this, "PieTokenBuilder");
    }
    constructor() {
      super(["pie", "showData"]);
    }
  },
  PieValueConverter = class extends chunkFPAJGGOCN {
    static {
      chunkFPAJGGOCF(this, "PieValueConverter");
    }
    runCustomConverter(token, text, context) {
      if (token.name === "PIE_SECTION_LABEL")
        return text.replace(/"/g, "").trim();
    }
  },
  pieServiceModule = {
    parser: {
      TokenBuilder: chunkFPAJGGOCF(
        () => new PieTokenBuilder(),
        "TokenBuilder",
      ),
      ValueConverter: chunkFPAJGGOCF(
        () => new PieValueConverter(),
        "ValueConverter",
      ),
    },
  };
function createPieServices(parserConfig = chunkFPAJGGOCP) {
  let sharedServices = chunkFPAJGGOCM(
      chunkFPAJGGOCG(parserConfig),
      chunkFPAJGGOCS,
    ),
    pieServices = chunkFPAJGGOCM(
      chunkFPAJGGOCH({
        shared: sharedServices,
      }),
      chunkFPAJGGOCL,
      pieServiceModule,
    );
  return (
    sharedServices.ServiceRegistry.register(pieServices),
    {
      shared: sharedServices,
      Pie: pieServices,
    }
  );
}
function initChunkT53DSG4Q(): void {
  // Restored ESM modules initialize eagerly; keep the current chunk init export compatible.
}
chunkFPAJGGOCF(createPieServices, "createPieServices");
export {
  createPieServices,
  createPieServices as chunkT53DSG4QN,
  initChunkT53DSG4Q,
  pieServiceModule,
  pieServiceModule as chunkT53DSG4QT,
};
