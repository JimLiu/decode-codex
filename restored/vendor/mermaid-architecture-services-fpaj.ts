// Restored from ref/webview/assets/chunk-O7ZBX7Z2-DYQIo95F.js
// ChunkO7ZBX7Z2 chunk restored from the Codex webview bundle.
import {
  chunkFPAJGGOCF,
  chunkFPAJGGOCG,
  chunkFPAJGGOCH,
  chunkFPAJGGOCM,
  chunkFPAJGGOCN,
  chunkFPAJGGOCP,
  chunkFPAJGGOCR,
  chunkFPAJGGOCS,
  chunkFPAJGGOCT,
} from "./mermaid-parser-runtime-fpajggoc";
var chunkO7ZBX7Z2Value1 = class extends chunkFPAJGGOCT {
    static {
      chunkFPAJGGOCF(this, "ArchitectureTokenBuilder");
    }
    constructor() {
      super(["architecture"]);
    }
  },
  chunkO7ZBX7Z2Value2 = class extends chunkFPAJGGOCN {
    static {
      chunkFPAJGGOCF(this, "ArchitectureValueConverter");
    }
    runCustomConverter(
      chunkO7ZBX7Z2Param1,
      chunkO7ZBX7Z2Param2,
      chunkO7ZBX7Z2Param3,
    ) {
      if (chunkO7ZBX7Z2Param1.name === "ARCH_ICON")
        return chunkO7ZBX7Z2Param2.replace(/[()]/g, "").trim();
      if (chunkO7ZBX7Z2Param1.name === "ARCH_TEXT_ICON")
        return chunkO7ZBX7Z2Param2.replace(/["()]/g, "");
      if (chunkO7ZBX7Z2Param1.name === "ARCH_TITLE")
        return chunkO7ZBX7Z2Param2.replace(/[[\]]/g, "").trim();
    }
  },
  chunkO7ZBX7Z2T = {
    parser: {
      TokenBuilder: chunkFPAJGGOCF(
        () => new chunkO7ZBX7Z2Value1(),
        "TokenBuilder",
      ),
      ValueConverter: chunkFPAJGGOCF(
        () => new chunkO7ZBX7Z2Value2(),
        "ValueConverter",
      ),
    },
  };
function chunkO7ZBX7Z2N(chunkO7ZBX7Z2Param4 = chunkFPAJGGOCP) {
  let chunkO7ZBX7Z2Value3 = chunkFPAJGGOCM(
      chunkFPAJGGOCG(chunkO7ZBX7Z2Param4),
      chunkFPAJGGOCS,
    ),
    chunkO7ZBX7Z2Value4 = chunkFPAJGGOCM(
      chunkFPAJGGOCH({
        shared: chunkO7ZBX7Z2Value3,
      }),
      chunkFPAJGGOCR,
      chunkO7ZBX7Z2T,
    );
  return (
    chunkO7ZBX7Z2Value3.ServiceRegistry.register(chunkO7ZBX7Z2Value4),
    {
      shared: chunkO7ZBX7Z2Value3,
      Architecture: chunkO7ZBX7Z2Value4,
    }
  );
}
chunkFPAJGGOCF(chunkO7ZBX7Z2N, "createArchitectureServices");
export { chunkO7ZBX7Z2N, chunkO7ZBX7Z2T };
