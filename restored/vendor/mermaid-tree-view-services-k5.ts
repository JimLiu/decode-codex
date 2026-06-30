// Restored from ref/webview/assets/chunk-ORNJ4GCN-UdwLKAZZ.js
// Mermaid tree-view diagram service module restored from the Codex webview bundle.
import {
  chunkK5T4RW27D,
  chunkK5T4RW27G,
  chunkK5T4RW27H,
  chunkK5T4RW27M,
  chunkK5T4RW27N,
  chunkK5T4RW27S,
  chunkK5T4RW27T,
  chunkK5T4RW27Underscore,
  chunkK5T4RW27V,
} from "./mermaid-parser-runtime-k5";
var TreeViewValueConverter = class extends chunkK5T4RW27N {
    static {
      chunkK5T4RW27M(this, "TreeViewValueConverter");
    }
    runCustomConverter(token, text, context) {
      if (token.name === "INDENTATION") return text?.length || 0;
      if (token.name === "STRING2") return text.substring(1, text.length - 1);
    }
  },
  TreeViewTokenBuilder = class extends chunkK5T4RW27T {
    static {
      chunkK5T4RW27M(this, "TreeViewTokenBuilder");
    }
    constructor() {
      super(["treeView-beta"]);
    }
  },
  treeViewServiceModule = {
    parser: {
      TokenBuilder: chunkK5T4RW27M(
        () => new TreeViewTokenBuilder(),
        "TokenBuilder",
      ),
      ValueConverter: chunkK5T4RW27M(
        () => new TreeViewValueConverter(),
        "ValueConverter",
      ),
    },
  };
function createTreeViewServices(parserConfig = chunkK5T4RW27H) {
  let sharedServices = chunkK5T4RW27G(
      chunkK5T4RW27V(parserConfig),
      chunkK5T4RW27S,
    ),
    treeViewServices = chunkK5T4RW27G(
      chunkK5T4RW27Underscore({
        shared: sharedServices,
      }),
      chunkK5T4RW27D,
      treeViewServiceModule,
    );
  return (
    sharedServices.ServiceRegistry.register(treeViewServices),
    {
      shared: sharedServices,
      TreeView: treeViewServices,
    }
  );
}
function initChunkORNJ4GCN(): void {
  // Restored ESM modules initialize eagerly; keep the current chunk init export compatible.
}
chunkK5T4RW27M(createTreeViewServices, "createTreeViewServices");
export {
  createTreeViewServices,
  createTreeViewServices as chunkORNJ4GCNN,
  initChunkORNJ4GCN,
  treeViewServiceModule,
  treeViewServiceModule as chunkORNJ4GCNT,
};
