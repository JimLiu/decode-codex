// Restored from ref/webview/assets/chunk-N4CR4FBY-D4A2k-Kw.js
// Mermaid layout loader registry for the FPAJ Mermaid runtime bundle.
import { PreloadHelper } from "../utils/preload-helper";
import { chunkS3R3BYOJU as interpolateToCurve } from "./chunk-s3r3byoj";
import {
  chunkAGHRB4JFN as nameFunction,
  chunkAGHRB4JFR as log,
} from "./dompurify";
import {
  _chunkABZYJK2DY as getConfig,
  chunkABZYJK2DS as common,
} from "./katex-auto-render";
import {
  chunkJZLCHNYAN as insertCluster,
  chunkJZLCHNYAR as labelHelper,
  chunkJZLCHNYAT as insertNode,
} from "./chunk-jzlchnya";
import {
  chunkQXUST7PYA as positionEdgeLabel,
  chunkQXUST7PYI as insertMarkers,
  chunkQXUST7PYN as insertEdge,
  chunkQXUST7PYR as insertEdgeLabel,
} from "./mermaid-edge-renderer";

type ViteDependencyMapper = ((dependencyIndexes: number[]) => string[]) & {
  f?: string[];
};

type LayoutLoader = {
  algorithm?: unknown;
  loader: () => Promise<LayoutRendererModule>;
  name: string;
};

type LayoutRendererModule = {
  render(
    diagram: LayoutDiagram,
    svg: SvgSelection,
    helpers: typeof rendererHelpers,
    options: { algorithm: unknown },
  ): unknown;
};

type LayoutDiagram = {
  layoutAlgorithm: string;
};

type SvgSelection = object;

const __vite__mapDeps: ViteDependencyMapper = ((
  dependencyIndexes: number[],
  mapDeps = __vite__mapDeps,
  dependencyPaths = mapDeps.f ||
    (mapDeps.f = [
      "./dagre-6UL2VRFP-CTBugNjf.js",
      "./rolldown-runtime-Czos8NxU.js",
      "./dagre-5oTtyBe6.js",
      "./graphlib-CU4GKOO2.js",
      "./isEmpty-BJ4mdsaY.js",
      "./merge-jSBXKSH5.js",
      "./lodash-BhBwOd7I.js",
      "./chunk-AGHRB4JF-DJZonIPK.js",
      "./chunk-ABZYJK2D-DPaXcbcL.js",
      "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js",
      "./dist-Dcs2yc8m.js",
      "./chunk-ATLVNIR6-CqT90CcJ.js",
      "./chunk-CVBHYZKI-CCA47Th3.js",
      "./chunk-HN2XXSSU-BJwKN-er.js",
      "./chunk-JA3XYJ7Z-DXPUiutJ.js",
      "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js",
      "./esm-CuAuNray.js",
      "./src-CTe_6Jg1.js",
      "./app-initial~app-main~onboarding-page~mermaid-diagram~xychartDiagram-PRI3JC2R~timeline-defin~dcen2xty-ZWKQ4q6W.js",
      "./src-BhkLFyc4.js",
      "./chunk-S3R3BYOJ-BBYtiirL.js",
      "./dist-CD74BDfk.js",
      "./chunk-JZLCHNYA-BB0008aK.js",
      "./rough.esm-BmcJJgrn.js",
      "./chunk-QXUST7PY-bOMzPJkM.js",
      "./cose-bilkent-S5V4N54A-DOa-Zu-d.js",
      "./cytoscape-cose-bilkent-Cew5xac-.js",
      "./cytoscape.esm-gCnb3XbU.js",
    ]),
) =>
  dependencyIndexes.map(
    (index) => dependencyPaths[index],
  )) as ViteDependencyMapper;

const rendererHelpers = {
  common,
  getConfig,
  insertCluster,
  insertEdge,
  insertEdgeLabel,
  insertMarkers,
  insertNode,
  interpolateToCurve,
  labelHelper,
  log,
  positionEdgeLabel,
};

const layoutLoaders: Record<string, LayoutLoader> = {};

export const chunkN4CR4FBYN = nameFunction((loaders: LayoutLoader[]) => {
  for (let layoutLoader of loaders)
    layoutLoaders[layoutLoader.name] = layoutLoader;
}, "registerLayoutLoaders");

const registerDefaultLayoutLoaders = nameFunction(() => {
  chunkN4CR4FBYN([
    {
      name: "dagre",
      loader: nameFunction(
        async () =>
          await PreloadHelper(
            () => import("./mermaid-dagre-renderer"),
            __vite__mapDeps([
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
              19, 20, 21, 22, 23, 24,
            ]),
            import.meta.url,
          ),
        "loader",
      ),
    },
    {
      name: "cose-bilkent",
      loader: nameFunction(
        async () =>
          await PreloadHelper(
            () => import("./cose-bilkent-s5-v4-n54-a"),
            __vite__mapDeps([25, 1, 26, 27, 17, 18, 19, 7]),
            import.meta.url,
          ),
        "loader",
      ),
    },
  ]);
}, "registerDefaultLayoutLoaders");

export function initMermaidLayoutLoaderFpajChunk(): void {
  registerDefaultLayoutLoaders();
}

export const chunkN4CR4FBYT = nameFunction(
  (layoutAlgorithm = "", { fallback = "dagre" } = {}) => {
    initMermaidLayoutLoaderFpajChunk();
    if (layoutAlgorithm in layoutLoaders) return layoutAlgorithm;
    if (fallback in layoutLoaders)
      return (
        log.warn(
          `Layout algorithm ${layoutAlgorithm} is not registered. Using ${fallback} as fallback.`,
        ),
        fallback
      );
    throw Error(
      `Both layout algorithms ${layoutAlgorithm} and ${fallback} are not registered.`,
    );
  },
  "getRegisteredLayoutAlgorithm",
);

export const chunkN4CR4FBYR = nameFunction(
  async (diagram: LayoutDiagram, svg: SvgSelection) => {
    initMermaidLayoutLoaderFpajChunk();
    if (!(diagram.layoutAlgorithm in layoutLoaders))
      throw Error(`Unknown layout algorithm: ${diagram.layoutAlgorithm}`);

    let layoutLoader = layoutLoaders[diagram.layoutAlgorithm];
    return (await layoutLoader.loader()).render(diagram, svg, rendererHelpers, {
      algorithm: layoutLoader.algorithm,
    });
  },
  "render",
);

// Current ref builds export render as alias `i`; older restored consumers use `r`.
export const chunkN4CR4FBYI = chunkN4CR4FBYR;
