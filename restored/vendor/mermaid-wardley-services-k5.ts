// Restored from ref/webview/assets/chunk-CIAEETIT-Ch0jAfU2.js
// Mermaid Wardley diagram service module restored from the Codex webview bundle.
import {
  chunkK5T4RW27G,
  chunkK5T4RW27H,
  chunkK5T4RW27M,
  chunkK5T4RW27N,
  chunkK5T4RW27P,
  chunkK5T4RW27S,
  chunkK5T4RW27Underscore,
  chunkK5T4RW27V,
} from "./mermaid-parser-runtime-k5";
var WardleyValueConverter = class extends chunkK5T4RW27N {
    static {
      chunkK5T4RW27M(this, "WardleyValueConverter");
    }
    runCustomConverter(token, text, context) {
      switch (token.name.toUpperCase()) {
        case "LINK_LABEL":
          return text.substring(1).trim();
        default:
          return;
      }
    }
  },
  wardleyServiceModule = {
    parser: {
      ValueConverter: chunkK5T4RW27M(
        () => new WardleyValueConverter(),
        "ValueConverter",
      ),
    },
  };
function createWardleyServices(parserConfig = chunkK5T4RW27H) {
  let sharedServices = chunkK5T4RW27G(
      chunkK5T4RW27V(parserConfig),
      chunkK5T4RW27S,
    ),
    wardleyServices = chunkK5T4RW27G(
      chunkK5T4RW27Underscore({
        shared: sharedServices,
      }),
      chunkK5T4RW27P,
      wardleyServiceModule,
    );
  return (
    sharedServices.ServiceRegistry.register(wardleyServices),
    {
      shared: sharedServices,
      Wardley: wardleyServices,
    }
  );
}
function initChunkCIAEETIT(): void {
  // Restored ESM modules initialize eagerly; keep the current chunk init export compatible.
}
chunkK5T4RW27M(createWardleyServices, "createWardleyServices");
export {
  createWardleyServices,
  createWardleyServices as chunkCIAEETITN,
  initChunkCIAEETIT,
  wardleyServiceModule,
  wardleyServiceModule as chunkCIAEETITT,
};
