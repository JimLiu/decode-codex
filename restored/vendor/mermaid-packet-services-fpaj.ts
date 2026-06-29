// Restored from ref/webview/assets/chunk-76Q3JFCE-eYhmDldQ.js
// Chunk76Q3JFCE chunk restored from the Codex webview bundle.
import {
  chunkFPAJGGOCC,
  chunkFPAJGGOCF,
  chunkFPAJGGOCG,
  chunkFPAJGGOCH,
  chunkFPAJGGOCI,
  chunkFPAJGGOCM,
  chunkFPAJGGOCP,
  chunkFPAJGGOCS,
  chunkFPAJGGOCT,
} from "./mermaid-parser-runtime-fpajggoc";
var chunk76Q3JFCEValue1 = class extends chunkFPAJGGOCT {
    static {
      chunkFPAJGGOCF(this, "PacketTokenBuilder");
    }
    constructor() {
      super(["packet"]);
    }
  },
  chunk76Q3JFCET = {
    parser: {
      TokenBuilder: chunkFPAJGGOCF(
        () => new chunk76Q3JFCEValue1(),
        "TokenBuilder",
      ),
      ValueConverter: chunkFPAJGGOCF(
        () => new chunkFPAJGGOCI(),
        "ValueConverter",
      ),
    },
  };
function chunk76Q3JFCEN(chunk76Q3JFCEParam1 = chunkFPAJGGOCP) {
  let chunk76Q3JFCEValue2 = chunkFPAJGGOCM(
      chunkFPAJGGOCG(chunk76Q3JFCEParam1),
      chunkFPAJGGOCS,
    ),
    chunk76Q3JFCEValue3 = chunkFPAJGGOCM(
      chunkFPAJGGOCH({
        shared: chunk76Q3JFCEValue2,
      }),
      chunkFPAJGGOCC,
      chunk76Q3JFCET,
    );
  return (
    chunk76Q3JFCEValue2.ServiceRegistry.register(chunk76Q3JFCEValue3),
    {
      shared: chunk76Q3JFCEValue2,
      Packet: chunk76Q3JFCEValue3,
    }
  );
}
chunkFPAJGGOCF(chunk76Q3JFCEN, "createPacketServices");
export { chunk76Q3JFCEN, chunk76Q3JFCET };
