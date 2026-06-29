// Restored from ref/webview/assets/chunk-FWNWRKHM-CrY4401d.js
// ChunkFWNWRKHM chunk restored from the Codex webview bundle.
import {
  chunkFPAJGGOCD,
  chunkFPAJGGOCF,
  chunkFPAJGGOCG,
  chunkFPAJGGOCH,
  chunkFPAJGGOCM,
  chunkFPAJGGOCN,
  chunkFPAJGGOCP,
  chunkFPAJGGOCS,
  chunkFPAJGGOCT,
} from "./mermaid-parser-runtime-fpajggoc";
var chunkFWNWRKHMValue1 = class extends chunkFPAJGGOCT {
    static {
      chunkFPAJGGOCF(this, "TreemapTokenBuilder");
    }
    constructor() {
      super(["treemap"]);
    }
  },
  chunkFWNWRKHMValue2 = /classDef\s+([A-Z_a-z]\w+)(?:\s+([^\n\r;]*))?;?/,
  chunkFWNWRKHMValue3 = class extends chunkFPAJGGOCN {
    static {
      chunkFPAJGGOCF(this, "TreemapValueConverter");
    }
    runCustomConverter(
      chunkFWNWRKHMParam1,
      chunkFWNWRKHMParam2,
      chunkFWNWRKHMParam3,
    ) {
      if (chunkFWNWRKHMParam1.name === "NUMBER2")
        return parseFloat(chunkFWNWRKHMParam2.replace(/,/g, ""));
      if (
        chunkFWNWRKHMParam1.name === "SEPARATOR" ||
        chunkFWNWRKHMParam1.name === "STRING2"
      )
        return chunkFWNWRKHMParam2.substring(1, chunkFWNWRKHMParam2.length - 1);
      if (chunkFWNWRKHMParam1.name === "INDENTATION")
        return chunkFWNWRKHMParam2.length;
      if (chunkFWNWRKHMParam1.name === "ClassDef") {
        if (typeof chunkFWNWRKHMParam2 != "string") return chunkFWNWRKHMParam2;
        let chunkFWNWRKHMValue7 = chunkFWNWRKHMValue2.exec(chunkFWNWRKHMParam2);
        if (chunkFWNWRKHMValue7)
          return {
            $type: "ClassDefStatement",
            className: chunkFWNWRKHMValue7[1],
            styleText: chunkFWNWRKHMValue7[2] || undefined,
          };
      }
    }
  };
function chunkFWNWRKHMHelper1(chunkFWNWRKHMParam6) {
  let chunkFWNWRKHMValue8 = chunkFWNWRKHMParam6.validation.TreemapValidator,
    chunkFWNWRKHMValue9 = chunkFWNWRKHMParam6.validation.ValidationRegistry;
  if (chunkFWNWRKHMValue9) {
    let chunkFWNWRKHMValue12 = {
      Treemap: chunkFWNWRKHMValue8.checkSingleRoot.bind(chunkFWNWRKHMValue8),
    };
    chunkFWNWRKHMValue9.register(chunkFWNWRKHMValue12, chunkFWNWRKHMValue8);
  }
}
chunkFPAJGGOCF(chunkFWNWRKHMHelper1, "registerValidationChecks");
var chunkFWNWRKHMValue4 = class {
    static {
      chunkFPAJGGOCF(this, "TreemapValidator");
    }
    checkSingleRoot(chunkFWNWRKHMParam4, chunkFWNWRKHMParam5) {
      let chunkFWNWRKHMValue5;
      for (let chunkFWNWRKHMValue6 of chunkFWNWRKHMParam4.TreemapRows)
        chunkFWNWRKHMValue6.item &&
          (chunkFWNWRKHMValue5 === undefined &&
          chunkFWNWRKHMValue6.indent === undefined
            ? (chunkFWNWRKHMValue5 = 0)
            : (chunkFWNWRKHMValue6.indent === undefined ||
                (chunkFWNWRKHMValue5 !== undefined &&
                  chunkFWNWRKHMValue5 >=
                    parseInt(chunkFWNWRKHMValue6.indent, 10))) &&
              chunkFWNWRKHMParam5(
                "error",
                "Multiple root nodes are not allowed in a treemap.",
                {
                  node: chunkFWNWRKHMValue6,
                  property: "item",
                },
              ));
    }
  },
  chunkFWNWRKHMT = {
    parser: {
      TokenBuilder: chunkFPAJGGOCF(
        () => new chunkFWNWRKHMValue1(),
        "TokenBuilder",
      ),
      ValueConverter: chunkFPAJGGOCF(
        () => new chunkFWNWRKHMValue3(),
        "ValueConverter",
      ),
    },
    validation: {
      TreemapValidator: chunkFPAJGGOCF(
        () => new chunkFWNWRKHMValue4(),
        "TreemapValidator",
      ),
    },
  };
function chunkFWNWRKHMN(chunkFWNWRKHMParam7 = chunkFPAJGGOCP) {
  let chunkFWNWRKHMValue10 = chunkFPAJGGOCM(
      chunkFPAJGGOCG(chunkFWNWRKHMParam7),
      chunkFPAJGGOCS,
    ),
    chunkFWNWRKHMValue11 = chunkFPAJGGOCM(
      chunkFPAJGGOCH({
        shared: chunkFWNWRKHMValue10,
      }),
      chunkFPAJGGOCD,
      chunkFWNWRKHMT,
    );
  return (
    chunkFWNWRKHMValue10.ServiceRegistry.register(chunkFWNWRKHMValue11),
    chunkFWNWRKHMHelper1(chunkFWNWRKHMValue11),
    {
      shared: chunkFWNWRKHMValue10,
      Treemap: chunkFWNWRKHMValue11,
    }
  );
}
chunkFPAJGGOCF(chunkFWNWRKHMN, "createTreemapServices");
export { chunkFWNWRKHMN, chunkFWNWRKHMT };
