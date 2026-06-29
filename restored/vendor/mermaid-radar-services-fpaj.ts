// Restored from ref/webview/assets/chunk-LHMN2FUI-B5ppzfo9.js
// ChunkLHMN2FUI chunk restored from the Codex webview bundle.
import {
  chunkFPAJGGOCF,
  chunkFPAJGGOCG,
  chunkFPAJGGOCH,
  chunkFPAJGGOCI,
  chunkFPAJGGOCM,
  chunkFPAJGGOCP,
  chunkFPAJGGOCS,
  chunkFPAJGGOCT,
  chunkFPAJGGOCU,
} from "./mermaid-parser-runtime-fpajggoc";
var chunkLHMN2FUIValue1 = class extends chunkFPAJGGOCT {
    static {
      chunkFPAJGGOCF(this, "RadarTokenBuilder");
    }
    constructor() {
      super(["radar-beta"]);
    }
  },
  chunkLHMN2FUIT = {
    parser: {
      TokenBuilder: chunkFPAJGGOCF(
        () => new chunkLHMN2FUIValue1(),
        "TokenBuilder",
      ),
      ValueConverter: chunkFPAJGGOCF(
        () => new chunkFPAJGGOCI(),
        "ValueConverter",
      ),
    },
  };
function chunkLHMN2FUIN(chunkLHMN2FUIParam1 = chunkFPAJGGOCP) {
  let chunkLHMN2FUIValue2 = chunkFPAJGGOCM(
      chunkFPAJGGOCG(chunkLHMN2FUIParam1),
      chunkFPAJGGOCS,
    ),
    chunkLHMN2FUIValue3 = chunkFPAJGGOCM(
      chunkFPAJGGOCH({
        shared: chunkLHMN2FUIValue2,
      }),
      chunkFPAJGGOCU,
      chunkLHMN2FUIT,
    );
  return (
    chunkLHMN2FUIValue2.ServiceRegistry.register(chunkLHMN2FUIValue3),
    {
      shared: chunkLHMN2FUIValue2,
      Radar: chunkLHMN2FUIValue3,
    }
  );
}
chunkFPAJGGOCF(chunkLHMN2FUIN, "createRadarServices");
export { chunkLHMN2FUIN, chunkLHMN2FUIT };
