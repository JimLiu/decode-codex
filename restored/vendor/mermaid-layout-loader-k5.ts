// Restored from ref/webview/assets/chunk-336JU56O-DNhqwrXr.js
// Mermaid layout loader registry for the K5 Mermaid runtime bundle.
import { PreloadHelper } from "../utils/preload-helper";
import {
  chunkAGHRB4JFN as nameFunction,
  chunkAGHRB4JFR as log,
} from "./dayjs-core-alt";
import {
  _chunkICPOFSXXS as common,
  chunkICPOFSXXY as getConfig,
} from "./chunk-icpofsxx";
import { chunk5PVQY5BWU as interpolateToCurve } from "./chunk-5pvqy5bw";
import {
  chunk5FUZZQ4RA as insertNode,
  chunk5FUZZQ4RI as insertCluster,
  chunk5FUZZQ4RS as labelHelper,
} from "./mermaid-shape-renderer";
import {
  chunkENJZ2VHEA as positionEdgeLabel,
  chunkENJZ2VHEI as insertMarkers,
  chunkENJZ2VHEN as insertEdge,
  chunkENJZ2VHER as insertEdgeLabel,
} from "./mermaid-edge-renderer-k5";

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
  config: {
    theme?: string;
    themeVariables: {
      gradientStart?: string;
      gradientStop?: string;
      useGradient?: boolean;
    };
  };
  diagramId?: string;
  layoutAlgorithm: string;
  nodes: Array<{
    domId?: string;
    id: string;
  }>;
};

type SvgSelection = {
  append(name: string): SvgSelection;
  attr(name: string): string;
  attr(name: string, value: unknown): SvgSelection;
};

const __vite__mapDeps: ViteDependencyMapper = ((
  dependencyIndexes: number[],
  mapDeps = __vite__mapDeps,
  dependencyPaths = mapDeps.f ||
    (mapDeps.f = [
      "./dagre-KV5264BT-DW4I2eVN.js",
      "./rolldown-runtime-Czos8NxU.js",
      "./dagre-BqhzN4_p.js",
      "./graphlib-ichArG6F.js",
      "./isEmpty-ld3eWiRn.js",
      "./_baseFor-B4uXGLdC.js",
      "./reduce-ont_GNl7.js",
      "./merge-Mpnm7bAs.js",
      "./lodash-osfEN9vD.js",
      "./chunk-AGHRB4JF-DVNPU_Qo.js",
      "./chunk-ICPOFSXX-CeJdw7BH.js",
      "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js",
      "./dist-Dcs2yc8m.js",
      "./chunk-5FUZZQ4R-B3jI2rZu.js",
      "./src-CTe_6Jg1.js",
      "./app-initial~app-main~onboarding-page~mermaid-diagram~xychartDiagram-PRI3JC2R~timeline-defin~dcen2xty-ZWKQ4q6W.js",
      "./src-BhkLFyc4.js",
      "./chunk-5PVQY5BW-MckrTAit.js",
      "./dist-CD74BDfk.js",
      "./chunk-U2HBQHQK-BfxUGRAz.js",
      "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js",
      "./esm-CuAuNray.js",
      "./chunk-X2U36JSP-sSeN7Tix.js",
      "./chunk-ZZ45TVLE-DzHSn4eK.js",
      "./rough.esm-BmcJJgrn.js",
      "./chunk-BSJP7CBP-CrJpo2xF.js",
      "./chunk-ENJZ2VHE-Hl7g56sN.js",
      "./cose-bilkent-S5V4N54A-o3JY66ky.js",
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

export const chunk336JU56ON = nameFunction((loaders: LayoutLoader[]) => {
  for (let layoutLoader of loaders)
    layoutLoaders[layoutLoader.name] = layoutLoader;
}, "registerLayoutLoaders");

const registerDefaultLayoutLoaders = nameFunction(() => {
  chunk336JU56ON([
    {
      name: "dagre",
      loader: nameFunction(
        async () =>
          await PreloadHelper(
            () => import("./mermaid-dagre-renderer-k5"),
            __vite__mapDeps([
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
              19, 20, 21, 22, 23, 24, 25, 26,
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
            () => import("./cose-bilkent-s5-v4-n54-a-bl-vt-osyx"),
            __vite__mapDeps([27, 1, 28, 29, 14, 15, 16, 9]),
            import.meta.url,
          ),
        "loader",
      ),
    },
  ]);
}, "registerDefaultLayoutLoaders");

export function initMermaidLayoutLoaderK5Chunk(): void {
  registerDefaultLayoutLoaders();
}

export const chunk336JU56OT = nameFunction(
  (layoutAlgorithm = "", { fallback = "dagre" } = {}) => {
    initMermaidLayoutLoaderK5Chunk();
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

function prefixNodeDomIds(diagram: LayoutDiagram) {
  if (!diagram.diagramId) return;
  for (let node of diagram.nodes) {
    let baseDomId = node.domId || node.id;
    node.domId = `${diagram.diagramId}-${baseDomId}`;
  }
}

function appendDropShadowFilters(svg: SvgSelection, theme?: string) {
  let svgId = svg.attr("id");
  svg
    .append("defs")
    .append("filter")
    .attr("id", `${svgId}-drop-shadow`)
    .attr("height", "130%")
    .attr("width", "130%")
    .append("feDropShadow")
    .attr("dx", "4")
    .attr("dy", "4")
    .attr("stdDeviation", 0)
    .attr("flood-opacity", "0.06")
    .attr("flood-color", `${theme?.includes("dark") ? "#FFFFFF" : "#000000"}`);

  svg
    .append("defs")
    .append("filter")
    .attr("id", `${svgId}-drop-shadow-small`)
    .attr("height", "150%")
    .attr("width", "150%")
    .append("feDropShadow")
    .attr("dx", "2")
    .attr("dy", "2")
    .attr("stdDeviation", 0)
    .attr("flood-opacity", "0.06")
    .attr("flood-color", `${theme?.includes("dark") ? "#FFFFFF" : "#000000"}`);
}

function appendGradient(
  svg: SvgSelection,
  gradientStart?: string,
  gradientStop?: string,
) {
  let gradient = svg
    .append("linearGradient")
    .attr("id", svg.attr("id") + "-gradient")
    .attr("gradientUnits", "objectBoundingBox")
    .attr("x1", "0%")
    .attr("y1", "0%")
    .attr("x2", "100%")
    .attr("y2", "0%");

  gradient
    .append("svg:stop")
    .attr("offset", "0%")
    .attr("stop-color", gradientStart)
    .attr("stop-opacity", 1);

  gradient
    .append("svg:stop")
    .attr("offset", "100%")
    .attr("stop-color", gradientStop)
    .attr("stop-opacity", 1);
}

export const chunk336JU56OR = nameFunction(
  async (diagram: LayoutDiagram, svg: SvgSelection) => {
    initMermaidLayoutLoaderK5Chunk();
    if (!(diagram.layoutAlgorithm in layoutLoaders))
      throw Error(`Unknown layout algorithm: ${diagram.layoutAlgorithm}`);

    prefixNodeDomIds(diagram);

    let layoutLoader = layoutLoaders[diagram.layoutAlgorithm];
    let layoutRenderer = await layoutLoader.loader();
    let { theme, themeVariables } = diagram.config;
    let { useGradient, gradientStart, gradientStop } = themeVariables;

    appendDropShadowFilters(svg, theme);
    if (useGradient) appendGradient(svg, gradientStart, gradientStop);

    return layoutRenderer.render(diagram, svg, rendererHelpers, {
      algorithm: layoutLoader.algorithm,
    });
  },
  "render",
);

// Current ref builds export render as alias `i`; older restored consumers use `r`.
export const chunk336JU56OI = chunk336JU56OR;
