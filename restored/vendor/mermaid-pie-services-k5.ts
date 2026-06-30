// Restored from ref/webview/assets/chunk-AA7GKIK3-DYzvk-tv.js
// Mermaid pie diagram service module restored from the Codex webview bundle.
import {
  chunkK5T4RW27G,
  chunkK5T4RW27H,
  chunkK5T4RW27L,
  chunkK5T4RW27M,
  chunkK5T4RW27N,
  chunkK5T4RW27S,
  chunkK5T4RW27T,
  chunkK5T4RW27Underscore,
  chunkK5T4RW27V,
} from "./mermaid-parser-runtime-k5";
var PieTokenBuilder = class extends chunkK5T4RW27T {
    static {
      chunkK5T4RW27M(this, "PieTokenBuilder");
    }
    constructor() {
      super(["pie", "showData"]);
    }
  },
  PieValueConverter = class extends chunkK5T4RW27N {
    static {
      chunkK5T4RW27M(this, "PieValueConverter");
    }
    runCustomConverter(token, text, context) {
      if (token.name === "PIE_SECTION_LABEL")
        return text.replace(/"/g, "").trim();
    }
  },
  pieServiceModule = {
    parser: {
      TokenBuilder: chunkK5T4RW27M(
        () => new PieTokenBuilder(),
        "TokenBuilder",
      ),
      ValueConverter: chunkK5T4RW27M(
        () => new PieValueConverter(),
        "ValueConverter",
      ),
    },
  };
function createPieServices(parserConfig = chunkK5T4RW27H) {
  let sharedServices = chunkK5T4RW27G(
      chunkK5T4RW27V(parserConfig),
      chunkK5T4RW27S,
    ),
    pieServices = chunkK5T4RW27G(
      chunkK5T4RW27Underscore({
        shared: sharedServices,
      }),
      chunkK5T4RW27L,
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
function initChunkAA7GKIK3(): void {
  // Restored ESM modules initialize eagerly; keep the current chunk init export compatible.
}
chunkK5T4RW27M(createPieServices, "createPieServices");
export {
  createPieServices,
  createPieServices as chunkAA7GKIK3N,
  initChunkAA7GKIK3,
  pieServiceModule,
  pieServiceModule as chunkAA7GKIK3T,
};
