// Restored from ref/webview/assets/mermaid-parser.core-DurnYtle.js
// MermaidParserCore chunk restored from the Codex webview bundle.
const __vite__mapDeps = (
  _MermaidParserCore,
  mermaidParserCoreParam1 = __vite__mapDeps,
  mermaidParserCoreParam2 = mermaidParserCoreParam1.f ||
    (mermaidParserCoreParam1.f = [
      "./info-OMHHGYJF-Bma7TJz9.js",
      "./rolldown-runtime-Czos8NxU.js",
      "./chunk-K5T4RW27-BasTmxaS.js",
      "./isEmpty-DLFki7y7.js",
      "./_baseFor-BRFGaW29.js",
      "./reduce-CYbtueTs.js",
      "./main-0NVm2ZVJ.js",
      "./chunk-KGLVRYIC-DIYgUndE.js",
      "./packet-4T2RLAQJ-46S0xDQR.js",
      "./chunk-FOC6F5B3-DtpZceIN.js",
      "./pie-ZZUOXDRM-C-GbAKjj.js",
      "./chunk-AA7GKIK3-BiHWd-2t.js",
      "./treeView-SZITEDCU-B3M3Gal-.js",
      "./chunk-ORNJ4GCN-CZ8XwNI-.js",
      "./architecture-YZFGNWBL-XT_h85co.js",
      "./chunk-7N4EOEYR-D_8ZJ0D8.js",
      "./gitGraph-7Q5UKJZL-BeodP2Yk.js",
      "./chunk-67CJDMHE-Vupntdzx.js",
      "./radar-PYXPWWZC-Bf7n2C1b.js",
      "./chunk-2KRD3SAO-B08eh9qW.js",
      "./treemap-W4RFUUIX-nKU19kUU.js",
      "./chunk-LIHQZDEY-B1YOF2u3.js",
      "./wardley-RL74JXVD-Um4aCywM.js",
      "./chunk-CIAEETIT-BaS23YN5.js",
    ]),
) =>
  _MermaidParserCore.map(
    (__MermaidParserCore) => mermaidParserCoreParam2[__MermaidParserCore],
  );
import { PreloadHelper } from "../utils/preload-helper";
import { chunkK5T4RW27M } from "./mermaid-parser-runtime-k5";
var mermaidParserCoreValue1 = {},
  mermaidParserCoreValue2 = {
    info: chunkK5T4RW27M(async () => {
      let { createInfoServices } = await PreloadHelper(
        async () => {
          let { createInfoServices: _createInfoServices } = await import(
            "./mermaid-info-definition-k5"
          );
          return {
            createInfoServices: _createInfoServices,
          };
        },
        __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7]),
        import.meta.url,
      );
      mermaidParserCoreValue1.info =
        createInfoServices().Info.parser.LangiumParser;
    }, "info"),
    packet: chunkK5T4RW27M(async () => {
      let { createPacketServices } = await PreloadHelper(
        async () => {
          let { createPacketServices: _createPacketServices } = await import(
            "./mermaid-packet-definition-k5"
          );
          return {
            createPacketServices: _createPacketServices,
          };
        },
        __vite__mapDeps([8, 1, 2, 3, 4, 5, 6, 9]),
        import.meta.url,
      );
      mermaidParserCoreValue1.packet =
        createPacketServices().Packet.parser.LangiumParser;
    }, "packet"),
    pie: chunkK5T4RW27M(async () => {
      let { createPieServices } = await PreloadHelper(
        async () => {
          let { createPieServices: _createPieServices } = await import(
            "./mermaid-pie-definition-k5"
          );
          return {
            createPieServices: _createPieServices,
          };
        },
        __vite__mapDeps([10, 1, 2, 3, 4, 5, 6, 11]),
        import.meta.url,
      );
      mermaidParserCoreValue1.pie =
        createPieServices().Pie.parser.LangiumParser;
    }, "pie"),
    treeView: chunkK5T4RW27M(async () => {
      let { createTreeViewServices } = await PreloadHelper(
        async () => {
          let { createTreeViewServices: _createTreeViewServices } =
            await import("./mermaid-tree-view-definition-k5");
          return {
            createTreeViewServices: _createTreeViewServices,
          };
        },
        __vite__mapDeps([12, 1, 2, 3, 4, 5, 6, 13]),
        import.meta.url,
      );
      mermaidParserCoreValue1.treeView =
        createTreeViewServices().TreeView.parser.LangiumParser;
    }, "treeView"),
    architecture: chunkK5T4RW27M(async () => {
      let { createArchitectureServices } = await PreloadHelper(
        async () => {
          let { createArchitectureServices: _createArchitectureServices } =
            await import("./mermaid-architecture-definition-k5");
          return {
            createArchitectureServices: _createArchitectureServices,
          };
        },
        __vite__mapDeps([14, 1, 2, 3, 4, 5, 6, 15]),
        import.meta.url,
      );
      mermaidParserCoreValue1.architecture =
        createArchitectureServices().Architecture.parser.LangiumParser;
    }, "architecture"),
    gitGraph: chunkK5T4RW27M(async () => {
      let { createGitGraphServices } = await PreloadHelper(
        async () => {
          let { createGitGraphServices: _createGitGraphServices } =
            await import("./mermaid-git-graph-definition-k5");
          return {
            createGitGraphServices: _createGitGraphServices,
          };
        },
        __vite__mapDeps([16, 1, 2, 3, 4, 5, 6, 17]),
        import.meta.url,
      );
      mermaidParserCoreValue1.gitGraph =
        createGitGraphServices().GitGraph.parser.LangiumParser;
    }, "gitGraph"),
    radar: chunkK5T4RW27M(async () => {
      let { createRadarServices } = await PreloadHelper(
        async () => {
          let { createRadarServices: _createRadarServices } = await import(
            "./mermaid-radar-definition-k5"
          );
          return {
            createRadarServices: _createRadarServices,
          };
        },
        __vite__mapDeps([18, 1, 2, 3, 4, 5, 6, 19]),
        import.meta.url,
      );
      mermaidParserCoreValue1.radar =
        createRadarServices().Radar.parser.LangiumParser;
    }, "radar"),
    treemap: chunkK5T4RW27M(async () => {
      let { createTreemapServices } = await PreloadHelper(
        async () => {
          let { createTreemapServices: _createTreemapServices } = await import(
            "./mermaid-treemap-definition-k5"
          );
          return {
            createTreemapServices: _createTreemapServices,
          };
        },
        __vite__mapDeps([20, 1, 2, 3, 4, 5, 6, 21]),
        import.meta.url,
      );
      mermaidParserCoreValue1.treemap =
        createTreemapServices().Treemap.parser.LangiumParser;
    }, "treemap"),
    wardley: chunkK5T4RW27M(async () => {
      let { createWardleyServices } = await PreloadHelper(
        async () => {
          let { createWardleyServices: _createWardleyServices } = await import(
            "./mermaid-wardley-definition-k5"
          );
          return {
            createWardleyServices: _createWardleyServices,
          };
        },
        __vite__mapDeps([22, 1, 2, 3, 4, 5, 6, 23]),
        import.meta.url,
      );
      mermaidParserCoreValue1.wardley =
        createWardleyServices().Wardley.parser.LangiumParser;
    }, "wardley"),
  };
async function MermaidParserCore(
  mermaidParserCoreParam4,
  mermaidParserCoreParam5,
) {
  let _MermaidParserCore = mermaidParserCoreValue2[mermaidParserCoreParam4];
  if (!_MermaidParserCore)
    throw Error(`Unknown diagram type: ${mermaidParserCoreParam4}`);
  mermaidParserCoreValue1[mermaidParserCoreParam4] ||
    (await _MermaidParserCore());
  let mermaidParserCoreValue6 = mermaidParserCoreValue1[
    mermaidParserCoreParam4
  ].parse(mermaidParserCoreParam5);
  if (
    mermaidParserCoreValue6.lexerErrors.length > 0 ||
    mermaidParserCoreValue6.parserErrors.length > 0
  )
    throw new mermaidParserCoreValue3(mermaidParserCoreValue6);
  return mermaidParserCoreValue6.value;
}
export function initMermaidParserCoreK5Chunk(): void {}
chunkK5T4RW27M(MermaidParserCore, "parse");
var mermaidParserCoreValue3 = class extends Error {
  constructor(mermaidParserCoreParam3) {
    let mermaidParserCoreValue4 = mermaidParserCoreParam3.lexerErrors
        .map(
          (item) =>
            `Lexer error on line ${item.line !== undefined && !isNaN(item.line) ? item.line : "?"}, column ${item.column !== undefined && !isNaN(item.column) ? item.column : "?"}: ${item.message}`,
        )
        .join("\n"),
      mermaidParserCoreValue5 = mermaidParserCoreParam3.parserErrors
        .map(
          (item) =>
            `Parse error on line ${item.token.startLine !== undefined && !isNaN(item.token.startLine) ? item.token.startLine : "?"}, column ${item.token.startColumn !== undefined && !isNaN(item.token.startColumn) ? item.token.startColumn : "?"}: ${item.message}`,
        )
        .join("\n");
    super(
      `Parsing failed: ${mermaidParserCoreValue4} ${mermaidParserCoreValue5}`,
    );
    this.result = mermaidParserCoreParam3;
  }
  static {
    chunkK5T4RW27M(this, "MermaidParseError");
  }
};
export { MermaidParserCore };
