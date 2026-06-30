// Restored from ref/webview/assets/mermaid-parser.core-C7uxoPQv.js
// MermaidParserCore chunk restored from the Codex webview bundle.
const __vite__mapDeps = (
  _MermaidParserCore,
  mermaidParserCoreParam1 = __vite__mapDeps,
  mermaidParserCoreParam2 = mermaidParserCoreParam1.f ||
    (mermaidParserCoreParam1.f = [
      "./info-NVLQJR56-DYO81Ru7.js",
      "./rolldown-runtime-Czos8NxU.js",
      "./chunk-FPAJGGOC-DZQRrZBw.js",
      "./isEmpty-BmEACTde.js",
      "./merge-XflwQgWH.js",
      "./lodash-CsD3b1ni.js",
      "./isEmpty-DLFki7y7.js",
      "./_baseFor-BRFGaW29.js",
      "./reduce-CYbtueTs.js",
      "./main-0NVm2ZVJ.js",
      "./chunk-LBM3YZW2-CrUBqdFe.js",
      "./packet-BFZMPI3H-BXp3wJk9.js",
      "./chunk-76Q3JFCE-eYhmDldQ.js",
      "./pie-7BOR55EZ-BDq7x-wB.js",
      "./chunk-T53DSG4Q-DP2fFD_m.js",
      "./architecture-U656AL7Q-DwwG5n5O.js",
      "./chunk-O7ZBX7Z2-DYQIo95F.js",
      "./gitGraph-F6HP7TQM-fvR48z-j.js",
      "./chunk-S6J4BHB3-SF-cXrJ2.js",
      "./radar-NHE76QYJ-DLr-eYFz.js",
      "./chunk-LHMN2FUI-B5ppzfo9.js",
      "./treemap-KMMF4GRG-Bo7ISLpJ.js",
      "./chunk-FWNWRKHM-CrY4401d.js",
    ]),
) =>
  _MermaidParserCore.map(
    (__MermaidParserCore) => mermaidParserCoreParam2[__MermaidParserCore],
  );
import { PreloadHelper } from "../utils/preload-helper";
import { chunkFPAJGGOCF } from "./mermaid-parser-runtime-fpajggoc";
var mermaidParserCoreValue1 = {},
  mermaidParserCoreValue2 = {
    info: chunkFPAJGGOCF(async () => {
      let { createInfoServices } = await PreloadHelper(
        async () => {
          let { createInfoServices: _createInfoServices } = await import(
            "./mermaid-info-definition-fpaj"
          );
          return {
            createInfoServices: _createInfoServices,
          };
        },
        __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
        import.meta.url,
      );
      mermaidParserCoreValue1.info =
        createInfoServices().Info.parser.LangiumParser;
    }, "info"),
    packet: chunkFPAJGGOCF(async () => {
      let { createPacketServices } = await PreloadHelper(
        async () => {
          let { createPacketServices: _createPacketServices } = await import(
            "./mermaid-packet-definition-fpaj"
          );
          return {
            createPacketServices: _createPacketServices,
          };
        },
        __vite__mapDeps([11, 1, 2, 3, 4, 5, 6, 7, 8, 9, 12]),
        import.meta.url,
      );
      mermaidParserCoreValue1.packet =
        createPacketServices().Packet.parser.LangiumParser;
    }, "packet"),
    pie: chunkFPAJGGOCF(async () => {
      let { createPieServices } = await PreloadHelper(
        async () => {
          let { createPieServices: _createPieServices } = await import(
            "./mermaid-pie-definition-fpaj"
          );
          return {
            createPieServices: _createPieServices,
          };
        },
        __vite__mapDeps([13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 14]),
        import.meta.url,
      );
      mermaidParserCoreValue1.pie =
        createPieServices().Pie.parser.LangiumParser;
    }, "pie"),
    architecture: chunkFPAJGGOCF(async () => {
      let { createArchitectureServices } = await PreloadHelper(
        async () => {
          let { createArchitectureServices: _createArchitectureServices } =
            await import("./mermaid-architecture-definition-fpaj");
          return {
            createArchitectureServices: _createArchitectureServices,
          };
        },
        __vite__mapDeps([15, 1, 2, 3, 4, 5, 6, 7, 8, 9, 16]),
        import.meta.url,
      );
      mermaidParserCoreValue1.architecture =
        createArchitectureServices().Architecture.parser.LangiumParser;
    }, "architecture"),
    gitGraph: chunkFPAJGGOCF(async () => {
      let { createGitGraphServices } = await PreloadHelper(
        async () => {
          let { createGitGraphServices: _createGitGraphServices } =
            await import("./mermaid-git-graph-definition-fpaj");
          return {
            createGitGraphServices: _createGitGraphServices,
          };
        },
        __vite__mapDeps([17, 1, 2, 3, 4, 5, 6, 7, 8, 9, 18]),
        import.meta.url,
      );
      mermaidParserCoreValue1.gitGraph =
        createGitGraphServices().GitGraph.parser.LangiumParser;
    }, "gitGraph"),
    radar: chunkFPAJGGOCF(async () => {
      let { createRadarServices } = await PreloadHelper(
        async () => {
          let { createRadarServices: _createRadarServices } = await import(
            "./mermaid-radar-definition-fpaj"
          );
          return {
            createRadarServices: _createRadarServices,
          };
        },
        __vite__mapDeps([19, 1, 2, 3, 4, 5, 6, 7, 8, 9, 20]),
        import.meta.url,
      );
      mermaidParserCoreValue1.radar =
        createRadarServices().Radar.parser.LangiumParser;
    }, "radar"),
    treemap: chunkFPAJGGOCF(async () => {
      let { createTreemapServices } = await PreloadHelper(
        async () => {
          let { createTreemapServices: _createTreemapServices } = await import(
            "./mermaid-treemap-definition-fpaj"
          );
          return {
            createTreemapServices: _createTreemapServices,
          };
        },
        __vite__mapDeps([21, 1, 2, 3, 4, 5, 6, 7, 8, 9, 22]),
        import.meta.url,
      );
      mermaidParserCoreValue1.treemap =
        createTreemapServices().Treemap.parser.LangiumParser;
    }, "treemap"),
  };
async function MermaidParserCore(
  mermaidParserCoreParam3,
  mermaidParserCoreParam4,
) {
  let _MermaidParserCore = mermaidParserCoreValue2[mermaidParserCoreParam3];
  if (!_MermaidParserCore)
    throw Error(`Unknown diagram type: ${mermaidParserCoreParam3}`);
  mermaidParserCoreValue1[mermaidParserCoreParam3] ||
    (await _MermaidParserCore());
  let mermaidParserCoreValue4 = mermaidParserCoreValue1[
    mermaidParserCoreParam3
  ].parse(mermaidParserCoreParam4);
  if (
    mermaidParserCoreValue4.lexerErrors.length > 0 ||
    mermaidParserCoreValue4.parserErrors.length > 0
  )
    throw new mermaidParserCoreValue3(mermaidParserCoreValue4);
  return mermaidParserCoreValue4.value;
}
chunkFPAJGGOCF(MermaidParserCore, "parse");
var mermaidParserCoreValue3 = class extends Error {
  constructor(mermaidParserCoreParam5) {
    let mermaidParserCoreValue5 = mermaidParserCoreParam5.lexerErrors
        .map((item) => item.message)
        .join("\n"),
      mermaidParserCoreValue6 = mermaidParserCoreParam5.parserErrors
        .map((item) => item.message)
        .join("\n");
    super(
      `Parsing failed: ${mermaidParserCoreValue5} ${mermaidParserCoreValue6}`,
    );
    this.result = mermaidParserCoreParam5;
  }
  static {
    chunkFPAJGGOCF(this, "MermaidParseError");
  }
};
export function initMermaidParserCoreFpajChunk(): void {}
export { MermaidParserCore };
