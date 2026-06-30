// Restored from ref/webview/assets/wardleyDiagram-NUSXRM2D-DlElmt-K.js
// WardleyDiagramNUSXRM2D chunk restored from the Codex webview bundle.
import { chunkAGHRB4JFN, chunkAGHRB4JFR } from "./dayjs-core-alt";
import {
  _chunkICPOFSXXC,
  _chunkICPOFSXXA,
  chunkICPOFSXXB,
  _chunkICPOFSXXL,
  chunkICPOFSXXUnderscore,
  chunkICPOFSXXV,
  _chunkICPOFSXXW,
} from "./chunk-icpofsxx";
import { chunk426QAEUC } from "./chunk-426qaeuc";
import { populateCommonDb } from "../utils/chunk-4-bx2-vuab";
import { MermaidParserCore } from "./mermaid-parser-core-k5";
const _chunkICPOFSXXB = chunkICPOFSXXB,
  _chunkICPOFSXXV = chunkICPOFSXXV;
var wardleyDiagramNUSXRM2DValue1 = chunkAGHRB4JFN(
    (wardleyDiagramNUSXRM2DParam13, wardleyDiagramNUSXRM2DParam14) => {
      let wardleyDiagramNUSXRM2DValue166 =
        wardleyDiagramNUSXRM2DParam13 <= 1
          ? wardleyDiagramNUSXRM2DParam13 * 100
          : wardleyDiagramNUSXRM2DParam13;
      if (
        wardleyDiagramNUSXRM2DValue166 < 0 ||
        wardleyDiagramNUSXRM2DValue166 > 100
      )
        throw Error(
          `${wardleyDiagramNUSXRM2DParam14} must be between 0-1 (decimal) or 0-100 (percentage). Received: ${wardleyDiagramNUSXRM2DParam13}`,
        );
      return wardleyDiagramNUSXRM2DValue166;
    },
    "toPercent",
  ),
  wardleyDiagramNUSXRM2DValue2 = chunkAGHRB4JFN(
    (
      wardleyDiagramNUSXRM2DParam44,
      wardleyDiagramNUSXRM2DParam45,
      wardleyDiagramNUSXRM2DParam46,
    ) => ({
      x: wardleyDiagramNUSXRM2DValue1(
        wardleyDiagramNUSXRM2DParam45,
        `${wardleyDiagramNUSXRM2DParam46} evolution`,
      ),
      y: wardleyDiagramNUSXRM2DValue1(
        wardleyDiagramNUSXRM2DParam44,
        `${wardleyDiagramNUSXRM2DParam46} visibility`,
      ),
    }),
    "toCoordinates",
  ),
  wardleyDiagramNUSXRM2DValue3 = chunkAGHRB4JFN(
    (wardleyDiagramNUSXRM2DParam29) => {
      if (wardleyDiagramNUSXRM2DParam29) {
        if (wardleyDiagramNUSXRM2DParam29 === "+<>") return "bidirectional";
        if (wardleyDiagramNUSXRM2DParam29 === "+<") return "backward";
        if (wardleyDiagramNUSXRM2DParam29 === "+>") return "forward";
      }
    },
    "getFlowFromPort",
  ),
  wardleyDiagramNUSXRM2DValue4 = chunkAGHRB4JFN(
    (wardleyDiagramNUSXRM2DParam9) => {
      if (!wardleyDiagramNUSXRM2DParam9?.startsWith("+")) return {};
      let wardleyDiagramNUSXRM2DValue127 = /^\+'([^']*)'/.exec(
        wardleyDiagramNUSXRM2DParam9,
      )?.[1];
      return wardleyDiagramNUSXRM2DParam9.includes("<>")
        ? {
            flow: "bidirectional",
            label: wardleyDiagramNUSXRM2DValue127,
          }
        : wardleyDiagramNUSXRM2DParam9.includes("<")
          ? {
              flow: "backward",
              label: wardleyDiagramNUSXRM2DValue127,
            }
          : wardleyDiagramNUSXRM2DParam9.includes(">")
            ? {
                flow: "forward",
                label: wardleyDiagramNUSXRM2DValue127,
              }
            : {
                label: wardleyDiagramNUSXRM2DValue127,
              };
    },
    "extractFlowFromArrow",
  ),
  wardleyDiagramNUSXRM2DValue5 = chunkAGHRB4JFN(
    (wardleyDiagramNUSXRM2DParam5, wardleyDiagramNUSXRM2DParam6) => {
      if (
        (populateCommonDb(
          wardleyDiagramNUSXRM2DParam5,
          wardleyDiagramNUSXRM2DParam6,
        ),
        wardleyDiagramNUSXRM2DParam5.size &&
          wardleyDiagramNUSXRM2DParam6.setSize(
            wardleyDiagramNUSXRM2DParam5.size.width,
            wardleyDiagramNUSXRM2DParam5.size.height,
          ),
        wardleyDiagramNUSXRM2DParam5.evolution)
      ) {
        let wardleyDiagramNUSXRM2DValue118 =
            wardleyDiagramNUSXRM2DParam5.evolution.stages.map((item) =>
              item.secondName
                ? `${item.name.trim()} / ${item.secondName.trim()}`
                : item.name.trim(),
            ),
          wardleyDiagramNUSXRM2DValue119 =
            wardleyDiagramNUSXRM2DParam5.evolution.stages
              .filter((item) => item.boundary !== undefined)
              .map((item) => item.boundary);
        wardleyDiagramNUSXRM2DParam6.updateAxes({
          stages: wardleyDiagramNUSXRM2DValue118,
          stageBoundaries: wardleyDiagramNUSXRM2DValue119,
        });
      }
      if (
        (wardleyDiagramNUSXRM2DParam5.anchors.forEach((item) => {
          let wardleyDiagramNUSXRM2DValue189 = wardleyDiagramNUSXRM2DValue2(
            item.visibility,
            item.evolution,
            `Anchor "${item.name}"`,
          );
          wardleyDiagramNUSXRM2DParam6.addNode(
            item.name,
            item.name,
            wardleyDiagramNUSXRM2DValue189.x,
            wardleyDiagramNUSXRM2DValue189.y,
            "anchor",
          );
        }),
        wardleyDiagramNUSXRM2DParam5.components.forEach((item) => {
          let wardleyDiagramNUSXRM2DValue96 = wardleyDiagramNUSXRM2DValue2(
              item.visibility,
              item.evolution,
              `Component "${item.name}"`,
            ),
            wardleyDiagramNUSXRM2DValue97 = item.label
              ? (item.label.negX ? -1 : 1) * item.label.offsetX
              : undefined,
            wardleyDiagramNUSXRM2DValue98 = item.label
              ? (item.label.negY ? -1 : 1) * item.label.offsetY
              : undefined,
            wardleyDiagramNUSXRM2DValue99 = item.decorator?.strategy;
          wardleyDiagramNUSXRM2DParam6.addNode(
            item.name,
            item.name,
            wardleyDiagramNUSXRM2DValue96.x,
            wardleyDiagramNUSXRM2DValue96.y,
            "component",
            wardleyDiagramNUSXRM2DValue97,
            wardleyDiagramNUSXRM2DValue98,
            item.inertia,
            wardleyDiagramNUSXRM2DValue99,
          );
        }),
        wardleyDiagramNUSXRM2DParam5.notes.forEach((item) => {
          let wardleyDiagramNUSXRM2DValue195 = wardleyDiagramNUSXRM2DValue2(
            item.visibility,
            item.evolution,
            `Note "${item.text}"`,
          );
          wardleyDiagramNUSXRM2DParam6.addNote(
            item.text,
            wardleyDiagramNUSXRM2DValue195.x,
            wardleyDiagramNUSXRM2DValue195.y,
          );
        }),
        wardleyDiagramNUSXRM2DParam5.pipelines.forEach((item) => {
          let wardleyDiagramNUSXRM2DValue73 =
            wardleyDiagramNUSXRM2DParam6.getNode(item.parent);
          if (
            !wardleyDiagramNUSXRM2DValue73 ||
            typeof wardleyDiagramNUSXRM2DValue73.y != "number"
          )
            throw Error(
              `Pipeline "${item.parent}" must reference an existing component with coordinates.`,
            );
          let wardleyDiagramNUSXRM2DValue74 = wardleyDiagramNUSXRM2DValue73.y;
          wardleyDiagramNUSXRM2DParam6.startPipeline(item.parent);
          item.components.forEach((_item) => {
            let wardleyDiagramNUSXRM2DValue88 = `${item.parent}_${_item.name}`,
              wardleyDiagramNUSXRM2DValue89 = _item.label
                ? (_item.label.negX ? -1 : 1) * _item.label.offsetX
                : undefined,
              wardleyDiagramNUSXRM2DValue90 = _item.label
                ? (_item.label.negY ? -1 : 1) * _item.label.offsetY
                : undefined,
              wardleyDiagramNUSXRM2DValue91 = wardleyDiagramNUSXRM2DValue1(
                _item.evolution,
                `Pipeline component "${_item.name}" evolution`,
              );
            wardleyDiagramNUSXRM2DParam6.addNode(
              wardleyDiagramNUSXRM2DValue88,
              _item.name,
              wardleyDiagramNUSXRM2DValue91,
              wardleyDiagramNUSXRM2DValue74,
              "pipeline-component",
              wardleyDiagramNUSXRM2DValue89,
              wardleyDiagramNUSXRM2DValue90,
            );
            wardleyDiagramNUSXRM2DParam6.addPipelineComponent(
              item.parent,
              wardleyDiagramNUSXRM2DValue88,
            );
          });
        }),
        wardleyDiagramNUSXRM2DParam5.links.forEach((item) => {
          let wardleyDiagramNUSXRM2DValue135 =
              !!item.arrow &&
              (item.arrow.includes("-.->") || item.arrow.includes(".-.")),
            wardleyDiagramNUSXRM2DValue136 =
              wardleyDiagramNUSXRM2DValue3(item.fromPort) ??
              wardleyDiagramNUSXRM2DValue3(item.toPort),
            { flow, label } = wardleyDiagramNUSXRM2DValue4(item.arrow);
          !wardleyDiagramNUSXRM2DValue136 &&
            flow &&
            (wardleyDiagramNUSXRM2DValue136 = flow);
          let wardleyDiagramNUSXRM2DValue137 = item.linkLabel,
            wardleyDiagramNUSXRM2DValue138 =
              label ?? wardleyDiagramNUSXRM2DValue137;
          wardleyDiagramNUSXRM2DParam6.addLink(
            item.from,
            item.to,
            wardleyDiagramNUSXRM2DValue135,
            wardleyDiagramNUSXRM2DValue138,
            wardleyDiagramNUSXRM2DValue136,
          );
        }),
        wardleyDiagramNUSXRM2DParam5.evolves.forEach((item) => {
          let wardleyDiagramNUSXRM2DValue167 =
            wardleyDiagramNUSXRM2DParam6.getNode(item.component);
          if (wardleyDiagramNUSXRM2DValue167?.y !== undefined) {
            let wardleyDiagramNUSXRM2DValue191 = wardleyDiagramNUSXRM2DValue1(
              item.target,
              `Evolve target for "${item.component}"`,
            );
            wardleyDiagramNUSXRM2DParam6.addTrend(
              item.component,
              wardleyDiagramNUSXRM2DValue191,
              wardleyDiagramNUSXRM2DValue167.y,
            );
          }
        }),
        wardleyDiagramNUSXRM2DParam5.annotations.length > 0)
      ) {
        let wardleyDiagramNUSXRM2DValue192 =
            wardleyDiagramNUSXRM2DParam5.annotations[0],
          wardleyDiagramNUSXRM2DValue193 = wardleyDiagramNUSXRM2DValue2(
            wardleyDiagramNUSXRM2DValue192.x,
            wardleyDiagramNUSXRM2DValue192.y,
            "Annotations box",
          );
        wardleyDiagramNUSXRM2DParam6.setAnnotationsBox(
          wardleyDiagramNUSXRM2DValue193.x,
          wardleyDiagramNUSXRM2DValue193.y,
        );
      }
      wardleyDiagramNUSXRM2DParam5.annotation.forEach((item) => {
        let wardleyDiagramNUSXRM2DValue190 = wardleyDiagramNUSXRM2DValue2(
          item.x,
          item.y,
          `Annotation ${item.number}`,
        );
        wardleyDiagramNUSXRM2DParam6.addAnnotation(
          item.number,
          [
            {
              x: wardleyDiagramNUSXRM2DValue190.x,
              y: wardleyDiagramNUSXRM2DValue190.y,
            },
          ],
          item.text,
        );
      });
      wardleyDiagramNUSXRM2DParam5.accelerators.forEach((item) => {
        let wardleyDiagramNUSXRM2DValue196 = wardleyDiagramNUSXRM2DValue2(
          item.x,
          item.y,
          `Accelerator "${item.name}"`,
        );
        wardleyDiagramNUSXRM2DParam6.addAccelerator(
          item.name,
          wardleyDiagramNUSXRM2DValue196.x,
          wardleyDiagramNUSXRM2DValue196.y,
        );
      });
      wardleyDiagramNUSXRM2DParam5.deaccelerators.forEach((item) => {
        let wardleyDiagramNUSXRM2DValue194 = wardleyDiagramNUSXRM2DValue2(
          item.x,
          item.y,
          `Deaccelerator "${item.name}"`,
        );
        wardleyDiagramNUSXRM2DParam6.addDeaccelerator(
          item.name,
          wardleyDiagramNUSXRM2DValue194.x,
          wardleyDiagramNUSXRM2DValue194.y,
        );
      });
    },
    "populateDb",
  ),
  wardleyDiagramNUSXRM2DValue6 = {
    parser: {
      yy: undefined,
    },
    parse: chunkAGHRB4JFN(async (wardleyDiagramNUSXRM2DParam7) => {
      let wardleyDiagramNUSXRM2DValue92 = await MermaidParserCore(
        "wardley",
        wardleyDiagramNUSXRM2DParam7,
      );
      chunkAGHRB4JFR.debug(wardleyDiagramNUSXRM2DValue92);
      let wardleyDiagramNUSXRM2DValue93 =
        wardleyDiagramNUSXRM2DValue6.parser?.yy;
      if (
        !wardleyDiagramNUSXRM2DValue93 ||
        typeof wardleyDiagramNUSXRM2DValue93.addNode != "function"
      )
        throw Error(
          "parser.parser?.yy was not a WardleyDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.",
        );
      wardleyDiagramNUSXRM2DValue5(
        wardleyDiagramNUSXRM2DValue92,
        wardleyDiagramNUSXRM2DValue93,
      );
    }, "parse"),
  },
  wardleyDiagramNUSXRM2DValue7 = new (class {
    constructor() {
      this.nodes = new Map();
      this.links = [];
      this.trends = new Map();
      this.pipelines = new Map();
      this.annotations = [];
      this.notes = [];
      this.accelerators = [];
      this.deaccelerators = [];
      this.axes = {};
    }
    static {
      chunkAGHRB4JFN(this, "WardleyBuilder");
    }
    addNode(wardleyDiagramNUSXRM2DParam8) {
      let wardleyDiagramNUSXRM2DValue116 = this.nodes.get(
          wardleyDiagramNUSXRM2DParam8.id,
        ) ?? {
          id: wardleyDiagramNUSXRM2DParam8.id,
          label: wardleyDiagramNUSXRM2DParam8.label,
        },
        wardleyDiagramNUSXRM2DValue117 = {
          ...wardleyDiagramNUSXRM2DValue116,
          ...wardleyDiagramNUSXRM2DParam8,
          className:
            wardleyDiagramNUSXRM2DParam8.className ??
            wardleyDiagramNUSXRM2DValue116.className,
          labelOffsetX:
            wardleyDiagramNUSXRM2DParam8.labelOffsetX ??
            wardleyDiagramNUSXRM2DValue116.labelOffsetX,
          labelOffsetY:
            wardleyDiagramNUSXRM2DParam8.labelOffsetY ??
            wardleyDiagramNUSXRM2DValue116.labelOffsetY,
        };
      this.nodes.set(
        wardleyDiagramNUSXRM2DParam8.id,
        wardleyDiagramNUSXRM2DValue117,
      );
    }
    addLink(wardleyDiagramNUSXRM2DParam94) {
      this.links.push(wardleyDiagramNUSXRM2DParam94);
    }
    addTrend(wardleyDiagramNUSXRM2DParam76) {
      this.trends.set(
        wardleyDiagramNUSXRM2DParam76.nodeId,
        wardleyDiagramNUSXRM2DParam76,
      );
    }
    startPipeline(wardleyDiagramNUSXRM2DParam28) {
      this.pipelines.set(wardleyDiagramNUSXRM2DParam28, {
        nodeId: wardleyDiagramNUSXRM2DParam28,
        componentIds: [],
      });
      let wardleyDiagramNUSXRM2DValue174 = this.nodes.get(
        wardleyDiagramNUSXRM2DParam28,
      );
      wardleyDiagramNUSXRM2DValue174 &&
        (wardleyDiagramNUSXRM2DValue174.isPipelineParent = true);
    }
    addPipelineComponent(
      wardleyDiagramNUSXRM2DParam24,
      wardleyDiagramNUSXRM2DParam25,
    ) {
      let wardleyDiagramNUSXRM2DValue168 = this.pipelines.get(
        wardleyDiagramNUSXRM2DParam24,
      );
      wardleyDiagramNUSXRM2DValue168 &&
        wardleyDiagramNUSXRM2DValue168.componentIds.push(
          wardleyDiagramNUSXRM2DParam25,
        );
      let wardleyDiagramNUSXRM2DValue169 = this.nodes.get(
        wardleyDiagramNUSXRM2DParam25,
      );
      wardleyDiagramNUSXRM2DValue169 &&
        (wardleyDiagramNUSXRM2DValue169.inPipeline = true);
    }
    addAnnotation(wardleyDiagramNUSXRM2DParam67) {
      this.annotations.push(wardleyDiagramNUSXRM2DParam67);
    }
    addNote(wardleyDiagramNUSXRM2DParam95) {
      this.notes.push(wardleyDiagramNUSXRM2DParam95);
    }
    addAccelerator(wardleyDiagramNUSXRM2DParam64) {
      this.accelerators.push(wardleyDiagramNUSXRM2DParam64);
    }
    addDeaccelerator(wardleyDiagramNUSXRM2DParam62) {
      this.deaccelerators.push(wardleyDiagramNUSXRM2DParam62);
    }
    setAnnotationsBox(
      wardleyDiagramNUSXRM2DParam57,
      wardleyDiagramNUSXRM2DParam58,
    ) {
      this.annotationsBox = {
        x: wardleyDiagramNUSXRM2DParam57,
        y: wardleyDiagramNUSXRM2DParam58,
      };
    }
    setAxes(wardleyDiagramNUSXRM2DParam71) {
      this.axes = {
        ...this.axes,
        ...wardleyDiagramNUSXRM2DParam71,
      };
    }
    setSize(wardleyDiagramNUSXRM2DParam68, wardleyDiagramNUSXRM2DParam69) {
      this.size = {
        width: wardleyDiagramNUSXRM2DParam68,
        height: wardleyDiagramNUSXRM2DParam69,
      };
    }
    getNode(wardleyDiagramNUSXRM2DParam89) {
      return this.nodes.get(wardleyDiagramNUSXRM2DParam89);
    }
    build() {
      let wardleyDiagramNUSXRM2DValue75 = [];
      for (let wardleyDiagramNUSXRM2DValue165 of this.nodes.values()) {
        if (
          typeof wardleyDiagramNUSXRM2DValue165.x != "number" ||
          typeof wardleyDiagramNUSXRM2DValue165.y != "number"
        )
          throw Error(
            `Node "${wardleyDiagramNUSXRM2DValue165.label}" is missing coordinates`,
          );
        wardleyDiagramNUSXRM2DValue75.push(wardleyDiagramNUSXRM2DValue165);
      }
      return {
        nodes: wardleyDiagramNUSXRM2DValue75,
        links: [...this.links],
        trends: [...this.trends.values()],
        pipelines: [...this.pipelines.values()],
        annotations: [...this.annotations],
        notes: [...this.notes],
        accelerators: [...this.accelerators],
        deaccelerators: [...this.deaccelerators],
        annotationsBox: this.annotationsBox,
        axes: {
          ...this.axes,
        },
        size: this.size,
      };
    }
    clear() {
      this.nodes.clear();
      this.links = [];
      this.trends.clear();
      this.pipelines.clear();
      this.annotations = [];
      this.notes = [];
      this.accelerators = [];
      this.deaccelerators = [];
      this.annotationsBox = undefined;
      this.axes = {};
      this.size = undefined;
    }
  })();
function wardleyDiagramNUSXRM2DHelper1(wardleyDiagramNUSXRM2DParam63) {
  let wardleyDiagramNUSXRM2DValue204 = _chunkICPOFSXXB();
  return _chunkICPOFSXXL(
    wardleyDiagramNUSXRM2DParam63.trim(),
    wardleyDiagramNUSXRM2DValue204,
  );
}
chunkAGHRB4JFN(wardleyDiagramNUSXRM2DHelper1, "textSanitizer");
function wardleyDiagramNUSXRM2DHelper2() {
  return _chunkICPOFSXXB()["wardley-beta"];
}
chunkAGHRB4JFN(wardleyDiagramNUSXRM2DHelper2, "getConfig");
function wardleyDiagramNUSXRM2DHelper3(
  wardleyDiagramNUSXRM2DParam15,
  wardleyDiagramNUSXRM2DParam16,
  wardleyDiagramNUSXRM2DParam17,
  wardleyDiagramNUSXRM2DParam18,
  wardleyDiagramNUSXRM2DParam19,
  wardleyDiagramNUSXRM2DParam20,
  wardleyDiagramNUSXRM2DParam21,
  wardleyDiagramNUSXRM2DParam22,
  wardleyDiagramNUSXRM2DParam23,
) {
  wardleyDiagramNUSXRM2DValue7.addNode({
    id: wardleyDiagramNUSXRM2DParam15,
    label: wardleyDiagramNUSXRM2DHelper1(wardleyDiagramNUSXRM2DParam16),
    x: wardleyDiagramNUSXRM2DParam17,
    y: wardleyDiagramNUSXRM2DParam18,
    className: wardleyDiagramNUSXRM2DParam19,
    labelOffsetX: wardleyDiagramNUSXRM2DParam20,
    labelOffsetY: wardleyDiagramNUSXRM2DParam21,
    inertia: wardleyDiagramNUSXRM2DParam22,
    sourceStrategy: wardleyDiagramNUSXRM2DParam23,
  });
}
chunkAGHRB4JFN(wardleyDiagramNUSXRM2DHelper3, "addNode");
function wardleyDiagramNUSXRM2DHelper4(
  wardleyDiagramNUSXRM2DParam33,
  wardleyDiagramNUSXRM2DParam34,
  wardleyDiagramNUSXRM2DParam35 = false,
  wardleyDiagramNUSXRM2DParam36,
  wardleyDiagramNUSXRM2DParam37,
) {
  wardleyDiagramNUSXRM2DValue7.addLink({
    source: wardleyDiagramNUSXRM2DParam33,
    target: wardleyDiagramNUSXRM2DParam34,
    dashed: wardleyDiagramNUSXRM2DParam35,
    label: wardleyDiagramNUSXRM2DParam36,
    flow: wardleyDiagramNUSXRM2DParam37,
  });
}
chunkAGHRB4JFN(wardleyDiagramNUSXRM2DHelper4, "addLink");
function wardleyDiagramNUSXRM2DHelper5(
  wardleyDiagramNUSXRM2DParam47,
  wardleyDiagramNUSXRM2DParam48,
  wardleyDiagramNUSXRM2DParam49,
) {
  wardleyDiagramNUSXRM2DValue7.addTrend({
    nodeId: wardleyDiagramNUSXRM2DParam47,
    targetX: wardleyDiagramNUSXRM2DParam48,
    targetY: wardleyDiagramNUSXRM2DParam49,
  });
}
chunkAGHRB4JFN(wardleyDiagramNUSXRM2DHelper5, "addTrend");
function wardleyDiagramNUSXRM2DHelper6(
  wardleyDiagramNUSXRM2DParam39,
  wardleyDiagramNUSXRM2DParam40,
  wardleyDiagramNUSXRM2DParam41,
) {
  wardleyDiagramNUSXRM2DValue7.addAnnotation({
    number: wardleyDiagramNUSXRM2DParam39,
    coordinates: wardleyDiagramNUSXRM2DParam40,
    text: wardleyDiagramNUSXRM2DParam41
      ? wardleyDiagramNUSXRM2DHelper1(wardleyDiagramNUSXRM2DParam41)
      : undefined,
  });
}
chunkAGHRB4JFN(wardleyDiagramNUSXRM2DHelper6, "addAnnotation");
function wardleyDiagramNUSXRM2DHelper7(
  wardleyDiagramNUSXRM2DParam59,
  wardleyDiagramNUSXRM2DParam60,
  wardleyDiagramNUSXRM2DParam61,
) {
  wardleyDiagramNUSXRM2DValue7.addNote({
    text: wardleyDiagramNUSXRM2DHelper1(wardleyDiagramNUSXRM2DParam59),
    x: wardleyDiagramNUSXRM2DParam60,
    y: wardleyDiagramNUSXRM2DParam61,
  });
}
chunkAGHRB4JFN(wardleyDiagramNUSXRM2DHelper7, "addNote");
function wardleyDiagramNUSXRM2DHelper8(
  wardleyDiagramNUSXRM2DParam53,
  wardleyDiagramNUSXRM2DParam54,
  wardleyDiagramNUSXRM2DParam55,
) {
  wardleyDiagramNUSXRM2DValue7.addAccelerator({
    name: wardleyDiagramNUSXRM2DHelper1(wardleyDiagramNUSXRM2DParam53),
    x: wardleyDiagramNUSXRM2DParam54,
    y: wardleyDiagramNUSXRM2DParam55,
  });
}
chunkAGHRB4JFN(wardleyDiagramNUSXRM2DHelper8, "addAccelerator");
function wardleyDiagramNUSXRM2DHelper9(
  wardleyDiagramNUSXRM2DParam50,
  wardleyDiagramNUSXRM2DParam51,
  wardleyDiagramNUSXRM2DParam52,
) {
  wardleyDiagramNUSXRM2DValue7.addDeaccelerator({
    name: wardleyDiagramNUSXRM2DHelper1(wardleyDiagramNUSXRM2DParam50),
    x: wardleyDiagramNUSXRM2DParam51,
    y: wardleyDiagramNUSXRM2DParam52,
  });
}
chunkAGHRB4JFN(wardleyDiagramNUSXRM2DHelper9, "addDeaccelerator");
function wardleyDiagramNUSXRM2DHelper10(
  wardleyDiagramNUSXRM2DParam72,
  wardleyDiagramNUSXRM2DParam73,
) {
  wardleyDiagramNUSXRM2DValue7.setAnnotationsBox(
    wardleyDiagramNUSXRM2DParam72,
    wardleyDiagramNUSXRM2DParam73,
  );
}
chunkAGHRB4JFN(wardleyDiagramNUSXRM2DHelper10, "setAnnotationsBox");
function wardleyDiagramNUSXRM2DHelper11(
  wardleyDiagramNUSXRM2DParam92,
  wardleyDiagramNUSXRM2DParam93,
) {
  wardleyDiagramNUSXRM2DValue7.setSize(
    wardleyDiagramNUSXRM2DParam92,
    wardleyDiagramNUSXRM2DParam93,
  );
}
chunkAGHRB4JFN(wardleyDiagramNUSXRM2DHelper11, "setSize");
function wardleyDiagramNUSXRM2DHelper12(wardleyDiagramNUSXRM2DParam91) {
  wardleyDiagramNUSXRM2DValue7.startPipeline(wardleyDiagramNUSXRM2DParam91);
}
chunkAGHRB4JFN(wardleyDiagramNUSXRM2DHelper12, "startPipeline");
function wardleyDiagramNUSXRM2DHelper13(
  wardleyDiagramNUSXRM2DParam65,
  wardleyDiagramNUSXRM2DParam66,
) {
  wardleyDiagramNUSXRM2DValue7.addPipelineComponent(
    wardleyDiagramNUSXRM2DParam65,
    wardleyDiagramNUSXRM2DParam66,
  );
}
chunkAGHRB4JFN(wardleyDiagramNUSXRM2DHelper13, "addPipelineComponent");
function wardleyDiagramNUSXRM2DHelper14(wardleyDiagramNUSXRM2DParam12) {
  let wardleyDiagramNUSXRM2DValue134 = {};
  wardleyDiagramNUSXRM2DParam12.xLabel &&
    (wardleyDiagramNUSXRM2DValue134.xLabel = wardleyDiagramNUSXRM2DHelper1(
      wardleyDiagramNUSXRM2DParam12.xLabel,
    ));
  wardleyDiagramNUSXRM2DParam12.yLabel &&
    (wardleyDiagramNUSXRM2DValue134.yLabel = wardleyDiagramNUSXRM2DHelper1(
      wardleyDiagramNUSXRM2DParam12.yLabel,
    ));
  wardleyDiagramNUSXRM2DParam12.stages &&
    (wardleyDiagramNUSXRM2DValue134.stages =
      wardleyDiagramNUSXRM2DParam12.stages.map((item) =>
        wardleyDiagramNUSXRM2DHelper1(item),
      ));
  wardleyDiagramNUSXRM2DParam12.stageBoundaries &&
    (wardleyDiagramNUSXRM2DValue134.stageBoundaries =
      wardleyDiagramNUSXRM2DParam12.stageBoundaries);
  wardleyDiagramNUSXRM2DValue7.setAxes(wardleyDiagramNUSXRM2DValue134);
}
chunkAGHRB4JFN(wardleyDiagramNUSXRM2DHelper14, "updateAxes");
function wardleyDiagramNUSXRM2DHelper15(wardleyDiagramNUSXRM2DParam90) {
  return wardleyDiagramNUSXRM2DValue7.getNode(wardleyDiagramNUSXRM2DParam90);
}
chunkAGHRB4JFN(wardleyDiagramNUSXRM2DHelper15, "getNode");
function wardleyDiagramNUSXRM2DHelper16() {
  return wardleyDiagramNUSXRM2DValue7.build();
}
chunkAGHRB4JFN(wardleyDiagramNUSXRM2DHelper16, "getWardleyData");
function wardleyDiagramNUSXRM2DHelper17() {
  wardleyDiagramNUSXRM2DValue7.clear();
  _chunkICPOFSXXA();
}
chunkAGHRB4JFN(wardleyDiagramNUSXRM2DHelper17, "clear");
var wardleyDiagramNUSXRM2DValue8 = {
    getConfig: wardleyDiagramNUSXRM2DHelper2,
    addNode: wardleyDiagramNUSXRM2DHelper3,
    addLink: wardleyDiagramNUSXRM2DHelper4,
    addTrend: wardleyDiagramNUSXRM2DHelper5,
    addAnnotation: wardleyDiagramNUSXRM2DHelper6,
    addNote: wardleyDiagramNUSXRM2DHelper7,
    addAccelerator: wardleyDiagramNUSXRM2DHelper8,
    addDeaccelerator: wardleyDiagramNUSXRM2DHelper9,
    setAnnotationsBox: wardleyDiagramNUSXRM2DHelper10,
    setSize: wardleyDiagramNUSXRM2DHelper11,
    startPipeline: wardleyDiagramNUSXRM2DHelper12,
    addPipelineComponent: wardleyDiagramNUSXRM2DHelper13,
    updateAxes: wardleyDiagramNUSXRM2DHelper14,
    getNode: wardleyDiagramNUSXRM2DHelper15,
    getWardleyData: wardleyDiagramNUSXRM2DHelper16,
    clear: wardleyDiagramNUSXRM2DHelper17,
    setAccTitle: chunkICPOFSXXV,
    getAccTitle: _chunkICPOFSXXV,
    setDiagramTitle: _chunkICPOFSXXW,
    getDiagramTitle: _chunkICPOFSXXC,
    getAccDescription: chunkICPOFSXXUnderscore,
    setAccDescription: chunkICPOFSXXB,
  },
  wardleyDiagramNUSXRM2DValue9 = [
    "Genesis",
    "Custom Built",
    "Product",
    "Commodity",
  ],
  wardleyDiagramNUSXRM2DValue10 = chunkAGHRB4JFN(() => {
    let { themeVariables } = _chunkICPOFSXXB();
    return {
      backgroundColor:
        themeVariables.wardley?.backgroundColor ??
        themeVariables.background ??
        "#fff",
      axisColor: themeVariables.wardley?.axisColor ?? "#000",
      axisTextColor:
        themeVariables.wardley?.axisTextColor ??
        themeVariables.primaryTextColor ??
        "#222",
      gridColor:
        themeVariables.wardley?.gridColor ?? "rgba(100, 100, 100, 0.2)",
      componentFill: themeVariables.wardley?.componentFill ?? "#fff",
      componentStroke: themeVariables.wardley?.componentStroke ?? "#000",
      componentLabelColor:
        themeVariables.wardley?.componentLabelColor ??
        themeVariables.primaryTextColor ??
        "#222",
      linkStroke: themeVariables.wardley?.linkStroke ?? "#000",
      evolutionStroke: themeVariables.wardley?.evolutionStroke ?? "#dc3545",
      annotationStroke: themeVariables.wardley?.annotationStroke ?? "#000",
      annotationTextColor:
        themeVariables.wardley?.annotationTextColor ??
        themeVariables.primaryTextColor ??
        "#222",
      annotationFill:
        themeVariables.wardley?.annotationFill ??
        themeVariables.background ??
        "#fff",
    };
  }, "getTheme"),
  wardleyDiagramNUSXRM2DValue11 = chunkAGHRB4JFN(() => {
    let wardleyDiagramNUSXRM2DValue84 = _chunkICPOFSXXB()["wardley-beta"];
    return {
      width: wardleyDiagramNUSXRM2DValue84?.width ?? 900,
      height: wardleyDiagramNUSXRM2DValue84?.height ?? 600,
      padding: wardleyDiagramNUSXRM2DValue84?.padding ?? 48,
      nodeRadius: wardleyDiagramNUSXRM2DValue84?.nodeRadius ?? 6,
      nodeLabelOffset: wardleyDiagramNUSXRM2DValue84?.nodeLabelOffset ?? 8,
      axisFontSize: wardleyDiagramNUSXRM2DValue84?.axisFontSize ?? 12,
      labelFontSize: wardleyDiagramNUSXRM2DValue84?.labelFontSize ?? 10,
      showGrid: wardleyDiagramNUSXRM2DValue84?.showGrid ?? false,
      useMaxWidth: wardleyDiagramNUSXRM2DValue84?.useMaxWidth ?? true,
    };
  }, "getConfigValues");
export const WardleyDiagramNUSXRM2D = {
  parser: wardleyDiagramNUSXRM2DValue6,
  db: wardleyDiagramNUSXRM2DValue8,
  renderer: {
    draw: chunkAGHRB4JFN(
      (
        wardleyDiagramNUSXRM2DParam1,
        wardleyDiagramNUSXRM2DParam2,
        wardleyDiagramNUSXRM2DParam3,
        wardleyDiagramNUSXRM2DParam4,
      ) => {
        chunkAGHRB4JFR.debug(
          "Rendering Wardley map\n" + wardleyDiagramNUSXRM2DParam1,
        );
        let wardleyDiagramNUSXRM2DValue12 = wardleyDiagramNUSXRM2DValue11(),
          wardleyDiagramNUSXRM2DValue13 = wardleyDiagramNUSXRM2DValue10(),
          wardleyDiagramNUSXRM2DValue14 =
            wardleyDiagramNUSXRM2DValue12.nodeRadius * 1.6,
          wardleyDiagramNUSXRM2DValue15 = wardleyDiagramNUSXRM2DParam4.db,
          wardleyDiagramNUSXRM2DValue16 =
            wardleyDiagramNUSXRM2DValue15.getWardleyData(),
          wardleyDiagramNUSXRM2DValue17 =
            wardleyDiagramNUSXRM2DValue15.getDiagramTitle(),
          wardleyDiagramNUSXRM2DValue18 =
            wardleyDiagramNUSXRM2DValue16.size?.width ??
            wardleyDiagramNUSXRM2DValue12.width,
          wardleyDiagramNUSXRM2DValue19 =
            wardleyDiagramNUSXRM2DValue16.size?.height ??
            wardleyDiagramNUSXRM2DValue12.height,
          wardleyDiagramNUSXRM2DValue20 = chunk426QAEUC(
            wardleyDiagramNUSXRM2DParam2,
          );
        wardleyDiagramNUSXRM2DValue20.selectAll("*").remove();
        _chunkICPOFSXXC(
          wardleyDiagramNUSXRM2DValue20,
          wardleyDiagramNUSXRM2DValue19,
          wardleyDiagramNUSXRM2DValue18,
          wardleyDiagramNUSXRM2DValue12.useMaxWidth,
        );
        wardleyDiagramNUSXRM2DValue20.attr(
          "viewBox",
          `0 0 ${wardleyDiagramNUSXRM2DValue18} ${wardleyDiagramNUSXRM2DValue19}`,
        );
        let wardleyDiagramNUSXRM2DValue21 = wardleyDiagramNUSXRM2DValue20
            .append("g")
            .attr("class", "wardley-map"),
          wardleyDiagramNUSXRM2DValue22 =
            wardleyDiagramNUSXRM2DValue20.append("defs");
        wardleyDiagramNUSXRM2DValue22
          .append("marker")
          .attr("id", `arrow-${wardleyDiagramNUSXRM2DParam2}`)
          .attr("viewBox", "0 0 10 10")
          .attr("refX", 9)
          .attr("refY", 5)
          .attr("markerWidth", 6)
          .attr("markerHeight", 6)
          .attr("orient", "auto-start-reverse")
          .append("path")
          .attr("d", "M 0 0 L 10 5 L 0 10 z")
          .attr("fill", wardleyDiagramNUSXRM2DValue13.evolutionStroke)
          .attr("stroke", "none");
        wardleyDiagramNUSXRM2DValue22
          .append("marker")
          .attr("id", `link-arrow-end-${wardleyDiagramNUSXRM2DParam2}`)
          .attr("viewBox", "0 0 10 10")
          .attr("refX", 9)
          .attr("refY", 5)
          .attr("markerWidth", 5)
          .attr("markerHeight", 5)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 0 0 L 10 5 L 0 10 z")
          .attr("fill", wardleyDiagramNUSXRM2DValue13.linkStroke)
          .attr("stroke", "none");
        wardleyDiagramNUSXRM2DValue22
          .append("marker")
          .attr("id", `link-arrow-start-${wardleyDiagramNUSXRM2DParam2}`)
          .attr("viewBox", "0 0 10 10")
          .attr("refX", 1)
          .attr("refY", 5)
          .attr("markerWidth", 5)
          .attr("markerHeight", 5)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 10 0 L 0 5 L 10 10 z")
          .attr("fill", wardleyDiagramNUSXRM2DValue13.linkStroke)
          .attr("stroke", "none");
        wardleyDiagramNUSXRM2DValue21
          .append("rect")
          .attr("class", "wardley-background")
          .attr("width", wardleyDiagramNUSXRM2DValue18)
          .attr("height", wardleyDiagramNUSXRM2DValue19)
          .attr("fill", wardleyDiagramNUSXRM2DValue13.backgroundColor);
        let wardleyDiagramNUSXRM2DValue23 =
            wardleyDiagramNUSXRM2DValue18 -
            wardleyDiagramNUSXRM2DValue12.padding * 2,
          wardleyDiagramNUSXRM2DValue24 =
            wardleyDiagramNUSXRM2DValue19 -
            wardleyDiagramNUSXRM2DValue12.padding * 2;
        wardleyDiagramNUSXRM2DValue17 &&
          wardleyDiagramNUSXRM2DValue21
            .append("text")
            .attr("class", "wardley-title")
            .attr("x", wardleyDiagramNUSXRM2DValue18 / 2)
            .attr("y", wardleyDiagramNUSXRM2DValue12.padding / 2)
            .attr("fill", wardleyDiagramNUSXRM2DValue13.axisTextColor)
            .attr(
              "font-size",
              wardleyDiagramNUSXRM2DValue12.axisFontSize * 1.05,
            )
            .attr("font-weight", "bold")
            .attr("text-anchor", "middle")
            .attr("dominant-baseline", "middle")
            .text(wardleyDiagramNUSXRM2DValue17);
        let wardleyDiagramNUSXRM2DValue25 = chunkAGHRB4JFN(
            (wardleyDiagramNUSXRM2DParam102) =>
              wardleyDiagramNUSXRM2DValue12.padding +
              (wardleyDiagramNUSXRM2DParam102 / 100) *
                wardleyDiagramNUSXRM2DValue23,
            "projectX",
          ),
          wardleyDiagramNUSXRM2DValue26 = chunkAGHRB4JFN(
            (wardleyDiagramNUSXRM2DParam100) =>
              wardleyDiagramNUSXRM2DValue19 -
              wardleyDiagramNUSXRM2DValue12.padding -
              (wardleyDiagramNUSXRM2DParam100 / 100) *
                wardleyDiagramNUSXRM2DValue24,
            "projectY",
          ),
          wardleyDiagramNUSXRM2DValue27 = wardleyDiagramNUSXRM2DValue21
            .append("g")
            .attr("class", "wardley-axes");
        wardleyDiagramNUSXRM2DValue27
          .append("line")
          .attr("x1", wardleyDiagramNUSXRM2DValue12.padding)
          .attr(
            "x2",
            wardleyDiagramNUSXRM2DValue18 -
              wardleyDiagramNUSXRM2DValue12.padding,
          )
          .attr(
            "y1",
            wardleyDiagramNUSXRM2DValue19 -
              wardleyDiagramNUSXRM2DValue12.padding,
          )
          .attr(
            "y2",
            wardleyDiagramNUSXRM2DValue19 -
              wardleyDiagramNUSXRM2DValue12.padding,
          )
          .attr("stroke", wardleyDiagramNUSXRM2DValue13.axisColor)
          .attr("stroke-width", 1);
        wardleyDiagramNUSXRM2DValue27
          .append("line")
          .attr("x1", wardleyDiagramNUSXRM2DValue12.padding)
          .attr("x2", wardleyDiagramNUSXRM2DValue12.padding)
          .attr("y1", wardleyDiagramNUSXRM2DValue12.padding)
          .attr(
            "y2",
            wardleyDiagramNUSXRM2DValue19 -
              wardleyDiagramNUSXRM2DValue12.padding,
          )
          .attr("stroke", wardleyDiagramNUSXRM2DValue13.axisColor)
          .attr("stroke-width", 1);
        let wardleyDiagramNUSXRM2DValue28 =
            wardleyDiagramNUSXRM2DValue16.axes.xLabel ?? "Evolution",
          wardleyDiagramNUSXRM2DValue29 =
            wardleyDiagramNUSXRM2DValue16.axes.yLabel ?? "Visibility";
        wardleyDiagramNUSXRM2DValue27
          .append("text")
          .attr("class", "wardley-axis-label wardley-axis-label-x")
          .attr(
            "x",
            wardleyDiagramNUSXRM2DValue12.padding +
              wardleyDiagramNUSXRM2DValue23 / 2,
          )
          .attr(
            "y",
            wardleyDiagramNUSXRM2DValue19 -
              wardleyDiagramNUSXRM2DValue12.padding / 4,
          )
          .attr("fill", wardleyDiagramNUSXRM2DValue13.axisTextColor)
          .attr("font-size", wardleyDiagramNUSXRM2DValue12.axisFontSize)
          .attr("font-weight", "bold")
          .attr("text-anchor", "middle")
          .text(wardleyDiagramNUSXRM2DValue28);
        wardleyDiagramNUSXRM2DValue27
          .append("text")
          .attr("class", "wardley-axis-label wardley-axis-label-y")
          .attr("x", wardleyDiagramNUSXRM2DValue12.padding / 3)
          .attr(
            "y",
            wardleyDiagramNUSXRM2DValue12.padding +
              wardleyDiagramNUSXRM2DValue24 / 2,
          )
          .attr("fill", wardleyDiagramNUSXRM2DValue13.axisTextColor)
          .attr("font-size", wardleyDiagramNUSXRM2DValue12.axisFontSize)
          .attr("font-weight", "bold")
          .attr("text-anchor", "middle")
          .attr(
            "transform",
            `rotate(-90 ${wardleyDiagramNUSXRM2DValue12.padding / 3} ${wardleyDiagramNUSXRM2DValue12.padding + wardleyDiagramNUSXRM2DValue24 / 2})`,
          )
          .text(wardleyDiagramNUSXRM2DValue29);
        let wardleyDiagramNUSXRM2DValue30 =
          wardleyDiagramNUSXRM2DValue16.axes.stages &&
          wardleyDiagramNUSXRM2DValue16.axes.stages.length > 0
            ? wardleyDiagramNUSXRM2DValue16.axes.stages
            : wardleyDiagramNUSXRM2DValue9;
        if (wardleyDiagramNUSXRM2DValue30.length > 0) {
          let wardleyDiagramNUSXRM2DValue54 = wardleyDiagramNUSXRM2DValue21
              .append("g")
              .attr("class", "wardley-stages"),
            wardleyDiagramNUSXRM2DValue55 =
              wardleyDiagramNUSXRM2DValue16.axes.stageBoundaries,
            wardleyDiagramNUSXRM2DValue56 = [];
          if (
            wardleyDiagramNUSXRM2DValue55 &&
            wardleyDiagramNUSXRM2DValue55.length ===
              wardleyDiagramNUSXRM2DValue30.length
          ) {
            let wardleyDiagramNUSXRM2DValue203 = 0;
            wardleyDiagramNUSXRM2DValue55.forEach((item) => {
              wardleyDiagramNUSXRM2DValue56.push({
                start: wardleyDiagramNUSXRM2DValue203,
                end: item,
              });
              wardleyDiagramNUSXRM2DValue203 = item;
            });
          } else {
            let wardleyDiagramNUSXRM2DValue201 =
              1 / wardleyDiagramNUSXRM2DValue30.length;
            wardleyDiagramNUSXRM2DValue30.forEach((item, index) => {
              wardleyDiagramNUSXRM2DValue56.push({
                start: index * wardleyDiagramNUSXRM2DValue201,
                end: (index + 1) * wardleyDiagramNUSXRM2DValue201,
              });
            });
          }
          wardleyDiagramNUSXRM2DValue30.forEach((item, index) => {
            let wardleyDiagramNUSXRM2DValue76 =
                wardleyDiagramNUSXRM2DValue56[index],
              wardleyDiagramNUSXRM2DValue77 =
                wardleyDiagramNUSXRM2DValue12.padding +
                wardleyDiagramNUSXRM2DValue76.start *
                  wardleyDiagramNUSXRM2DValue23,
              wardleyDiagramNUSXRM2DValue78 =
                (wardleyDiagramNUSXRM2DValue77 +
                  (wardleyDiagramNUSXRM2DValue12.padding +
                    wardleyDiagramNUSXRM2DValue76.end *
                      wardleyDiagramNUSXRM2DValue23)) /
                2;
            index > 0 &&
              wardleyDiagramNUSXRM2DValue54
                .append("line")
                .attr("x1", wardleyDiagramNUSXRM2DValue77)
                .attr("x2", wardleyDiagramNUSXRM2DValue77)
                .attr("y1", wardleyDiagramNUSXRM2DValue12.padding)
                .attr(
                  "y2",
                  wardleyDiagramNUSXRM2DValue19 -
                    wardleyDiagramNUSXRM2DValue12.padding,
                )
                .attr("stroke", "#000")
                .attr("stroke-width", 1)
                .attr("stroke-dasharray", "5 5")
                .attr("opacity", 0.8);
            wardleyDiagramNUSXRM2DValue54
              .append("text")
              .attr("class", "wardley-stage-label")
              .attr("x", wardleyDiagramNUSXRM2DValue78)
              .attr(
                "y",
                wardleyDiagramNUSXRM2DValue19 -
                  wardleyDiagramNUSXRM2DValue12.padding / 1.5,
              )
              .attr("fill", wardleyDiagramNUSXRM2DValue13.axisTextColor)
              .attr("font-size", wardleyDiagramNUSXRM2DValue12.axisFontSize - 2)
              .attr("text-anchor", "middle")
              .text(item);
          });
        }
        if (wardleyDiagramNUSXRM2DValue12.showGrid) {
          let wardleyDiagramNUSXRM2DValue79 = wardleyDiagramNUSXRM2DValue21
            .append("g")
            .attr("class", "wardley-grid");
          for (
            let wardleyDiagramNUSXRM2DValue81 = 1;
            wardleyDiagramNUSXRM2DValue81 < 4;
            wardleyDiagramNUSXRM2DValue81++
          ) {
            let wardleyDiagramNUSXRM2DValue82 =
                wardleyDiagramNUSXRM2DValue81 / 4,
              wardleyDiagramNUSXRM2DValue83 =
                wardleyDiagramNUSXRM2DValue12.padding +
                wardleyDiagramNUSXRM2DValue23 * wardleyDiagramNUSXRM2DValue82;
            wardleyDiagramNUSXRM2DValue79
              .append("line")
              .attr("x1", wardleyDiagramNUSXRM2DValue83)
              .attr("x2", wardleyDiagramNUSXRM2DValue83)
              .attr("y1", wardleyDiagramNUSXRM2DValue12.padding)
              .attr(
                "y2",
                wardleyDiagramNUSXRM2DValue19 -
                  wardleyDiagramNUSXRM2DValue12.padding,
              )
              .attr("stroke", wardleyDiagramNUSXRM2DValue13.gridColor)
              .attr("stroke-dasharray", "2 6");
            wardleyDiagramNUSXRM2DValue79
              .append("line")
              .attr("x1", wardleyDiagramNUSXRM2DValue12.padding)
              .attr(
                "x2",
                wardleyDiagramNUSXRM2DValue18 -
                  wardleyDiagramNUSXRM2DValue12.padding,
              )
              .attr(
                "y1",
                wardleyDiagramNUSXRM2DValue19 -
                  wardleyDiagramNUSXRM2DValue12.padding -
                  wardleyDiagramNUSXRM2DValue24 * wardleyDiagramNUSXRM2DValue82,
              )
              .attr(
                "y2",
                wardleyDiagramNUSXRM2DValue19 -
                  wardleyDiagramNUSXRM2DValue12.padding -
                  wardleyDiagramNUSXRM2DValue24 * wardleyDiagramNUSXRM2DValue82,
              )
              .attr("stroke", wardleyDiagramNUSXRM2DValue13.gridColor)
              .attr("stroke-dasharray", "2 6");
          }
        }
        let wardleyDiagramNUSXRM2DValue31 = new Map();
        if (
          (wardleyDiagramNUSXRM2DValue16.nodes.forEach((item) => {
            wardleyDiagramNUSXRM2DValue31.set(item.id, {
              x: wardleyDiagramNUSXRM2DValue25(item.x),
              y: wardleyDiagramNUSXRM2DValue26(item.y),
              node: item,
            });
          }),
          wardleyDiagramNUSXRM2DValue16.pipelines.length > 0)
        ) {
          let wardleyDiagramNUSXRM2DValue42 = wardleyDiagramNUSXRM2DValue21
              .append("g")
              .attr("class", "wardley-pipelines"),
            wardleyDiagramNUSXRM2DValue43 = wardleyDiagramNUSXRM2DValue21
              .append("g")
              .attr("class", "wardley-pipeline-links");
          wardleyDiagramNUSXRM2DValue16.pipelines.forEach((item) => {
            if (item.componentIds.length === 0) return;
            let wardleyDiagramNUSXRM2DValue49 = item.componentIds
              .map((_item) => ({
                id: _item,
                pos: wardleyDiagramNUSXRM2DValue31.get(_item),
                node: wardleyDiagramNUSXRM2DValue16.nodes.find(
                  (__item) => __item.id === _item,
                ),
              }))
              .filter((_item) => _item.pos && _item.node)
              .sort(
                (
                  wardleyDiagramNUSXRM2DParam96,
                  wardleyDiagramNUSXRM2DParam97,
                ) =>
                  wardleyDiagramNUSXRM2DParam96.node.x -
                  wardleyDiagramNUSXRM2DParam97.node.x,
              );
            for (
              let wardleyDiagramNUSXRM2DValue94 = 0;
              wardleyDiagramNUSXRM2DValue94 <
              wardleyDiagramNUSXRM2DValue49.length - 1;
              wardleyDiagramNUSXRM2DValue94++
            ) {
              let wardleyDiagramNUSXRM2DValue101 =
                  wardleyDiagramNUSXRM2DValue49[wardleyDiagramNUSXRM2DValue94],
                wardleyDiagramNUSXRM2DValue102 =
                  wardleyDiagramNUSXRM2DValue49[
                    wardleyDiagramNUSXRM2DValue94 + 1
                  ];
              wardleyDiagramNUSXRM2DValue43
                .append("line")
                .attr("class", "wardley-pipeline-evolution-link")
                .attr("x1", wardleyDiagramNUSXRM2DValue101.pos.x)
                .attr("y1", wardleyDiagramNUSXRM2DValue101.pos.y)
                .attr("x2", wardleyDiagramNUSXRM2DValue102.pos.x)
                .attr("y2", wardleyDiagramNUSXRM2DValue102.pos.y)
                .attr("stroke", wardleyDiagramNUSXRM2DValue13.linkStroke)
                .attr("stroke-width", 1)
                .attr("stroke-dasharray", "4 4");
            }
            let wardleyDiagramNUSXRM2DValue50 = 1 / 0,
              wardleyDiagramNUSXRM2DValue51 = -1 / 0,
              wardleyDiagramNUSXRM2DValue52 = 0;
            if (
              (item.componentIds.forEach((_item) => {
                let wardleyDiagramNUSXRM2DValue202 =
                  wardleyDiagramNUSXRM2DValue31.get(_item);
                wardleyDiagramNUSXRM2DValue202 &&
                  ((wardleyDiagramNUSXRM2DValue50 = Math.min(
                    wardleyDiagramNUSXRM2DValue50,
                    wardleyDiagramNUSXRM2DValue202.x,
                  )),
                  (wardleyDiagramNUSXRM2DValue51 = Math.max(
                    wardleyDiagramNUSXRM2DValue51,
                    wardleyDiagramNUSXRM2DValue202.x,
                  )),
                  (wardleyDiagramNUSXRM2DValue52 =
                    wardleyDiagramNUSXRM2DValue202.y));
              }),
              wardleyDiagramNUSXRM2DValue50 !== 1 / 0 &&
                wardleyDiagramNUSXRM2DValue51 !== -1 / 0)
            ) {
              let wardleyDiagramNUSXRM2DValue85 =
                  wardleyDiagramNUSXRM2DValue12.nodeRadius * 4,
                wardleyDiagramNUSXRM2DValue86 =
                  wardleyDiagramNUSXRM2DValue52 -
                  wardleyDiagramNUSXRM2DValue85 / 2,
                wardleyDiagramNUSXRM2DValue87 =
                  wardleyDiagramNUSXRM2DValue31.get(item.nodeId);
              wardleyDiagramNUSXRM2DValue87 &&
                ((wardleyDiagramNUSXRM2DValue87.x =
                  (wardleyDiagramNUSXRM2DValue50 +
                    wardleyDiagramNUSXRM2DValue51) /
                  2),
                (wardleyDiagramNUSXRM2DValue87.y =
                  wardleyDiagramNUSXRM2DValue86 -
                  wardleyDiagramNUSXRM2DValue14 / 6));
              wardleyDiagramNUSXRM2DValue42
                .append("rect")
                .attr("class", "wardley-pipeline-box")
                .attr("x", wardleyDiagramNUSXRM2DValue50 - 15)
                .attr("y", wardleyDiagramNUSXRM2DValue86)
                .attr(
                  "width",
                  wardleyDiagramNUSXRM2DValue51 -
                    wardleyDiagramNUSXRM2DValue50 +
                    30,
                )
                .attr("height", wardleyDiagramNUSXRM2DValue85)
                .attr("fill", "none")
                .attr("stroke", wardleyDiagramNUSXRM2DValue13.axisColor)
                .attr("stroke-width", 1.5)
                .attr("rx", 4)
                .attr("ry", 4);
            }
          });
        }
        let wardleyDiagramNUSXRM2DValue32 = wardleyDiagramNUSXRM2DValue21
            .append("g")
            .attr("class", "wardley-links"),
          wardleyDiagramNUSXRM2DValue33 = new Map();
        wardleyDiagramNUSXRM2DValue16.pipelines.forEach((item) => {
          wardleyDiagramNUSXRM2DValue33.set(
            item.nodeId,
            new Set(item.componentIds),
          );
        });
        let wardleyDiagramNUSXRM2DValue34 =
          wardleyDiagramNUSXRM2DValue16.links.filter(
            (item) =>
              !(
                !wardleyDiagramNUSXRM2DValue31.has(item.source) ||
                !wardleyDiagramNUSXRM2DValue31.has(item.target) ||
                wardleyDiagramNUSXRM2DValue33.get(item.target)?.has(item.source)
              ),
          );
        wardleyDiagramNUSXRM2DValue32
          .selectAll("line")
          .data(wardleyDiagramNUSXRM2DValue34)
          .enter()
          .append("line")
          .attr(
            "class",
            (wardleyDiagramNUSXRM2DParam56) =>
              `wardley-link${wardleyDiagramNUSXRM2DParam56.dashed ? " wardley-link--dashed" : ""}`,
          )
          .attr("x1", (event) => {
            let wardleyDiagramNUSXRM2DValue141 =
                wardleyDiagramNUSXRM2DValue31.get(event.source),
              wardleyDiagramNUSXRM2DValue142 =
                wardleyDiagramNUSXRM2DValue31.get(event.target),
              wardleyDiagramNUSXRM2DValue143 =
                wardleyDiagramNUSXRM2DValue16.nodes.find(
                  (item) => item.id === event.source,
                ).isPipelineParent
                  ? wardleyDiagramNUSXRM2DValue14 / Math.sqrt(2)
                  : wardleyDiagramNUSXRM2DValue12.nodeRadius,
              wardleyDiagramNUSXRM2DValue144 =
                wardleyDiagramNUSXRM2DValue142.x -
                wardleyDiagramNUSXRM2DValue141.x,
              wardleyDiagramNUSXRM2DValue145 =
                wardleyDiagramNUSXRM2DValue142.y -
                wardleyDiagramNUSXRM2DValue141.y,
              wardleyDiagramNUSXRM2DValue146 = Math.sqrt(
                wardleyDiagramNUSXRM2DValue144 *
                  wardleyDiagramNUSXRM2DValue144 +
                  wardleyDiagramNUSXRM2DValue145 *
                    wardleyDiagramNUSXRM2DValue145,
              );
            return (
              wardleyDiagramNUSXRM2DValue141.x +
              (wardleyDiagramNUSXRM2DValue144 /
                wardleyDiagramNUSXRM2DValue146) *
                wardleyDiagramNUSXRM2DValue143
            );
          })
          .attr("y1", (event) => {
            let wardleyDiagramNUSXRM2DValue147 =
                wardleyDiagramNUSXRM2DValue31.get(event.source),
              wardleyDiagramNUSXRM2DValue148 =
                wardleyDiagramNUSXRM2DValue31.get(event.target),
              wardleyDiagramNUSXRM2DValue149 =
                wardleyDiagramNUSXRM2DValue16.nodes.find(
                  (item) => item.id === event.source,
                ).isPipelineParent
                  ? wardleyDiagramNUSXRM2DValue14 / Math.sqrt(2)
                  : wardleyDiagramNUSXRM2DValue12.nodeRadius,
              wardleyDiagramNUSXRM2DValue150 =
                wardleyDiagramNUSXRM2DValue148.x -
                wardleyDiagramNUSXRM2DValue147.x,
              wardleyDiagramNUSXRM2DValue151 =
                wardleyDiagramNUSXRM2DValue148.y -
                wardleyDiagramNUSXRM2DValue147.y,
              wardleyDiagramNUSXRM2DValue152 = Math.sqrt(
                wardleyDiagramNUSXRM2DValue150 *
                  wardleyDiagramNUSXRM2DValue150 +
                  wardleyDiagramNUSXRM2DValue151 *
                    wardleyDiagramNUSXRM2DValue151,
              );
            return (
              wardleyDiagramNUSXRM2DValue147.y +
              (wardleyDiagramNUSXRM2DValue151 /
                wardleyDiagramNUSXRM2DValue152) *
                wardleyDiagramNUSXRM2DValue149
            );
          })
          .attr("x2", (event) => {
            let wardleyDiagramNUSXRM2DValue153 =
                wardleyDiagramNUSXRM2DValue31.get(event.source),
              wardleyDiagramNUSXRM2DValue154 =
                wardleyDiagramNUSXRM2DValue31.get(event.target),
              wardleyDiagramNUSXRM2DValue155 =
                wardleyDiagramNUSXRM2DValue16.nodes.find(
                  (item) => item.id === event.target,
                ).isPipelineParent
                  ? wardleyDiagramNUSXRM2DValue14 / Math.sqrt(2)
                  : wardleyDiagramNUSXRM2DValue12.nodeRadius,
              wardleyDiagramNUSXRM2DValue156 =
                wardleyDiagramNUSXRM2DValue153.x -
                wardleyDiagramNUSXRM2DValue154.x,
              wardleyDiagramNUSXRM2DValue157 =
                wardleyDiagramNUSXRM2DValue153.y -
                wardleyDiagramNUSXRM2DValue154.y,
              wardleyDiagramNUSXRM2DValue158 = Math.sqrt(
                wardleyDiagramNUSXRM2DValue156 *
                  wardleyDiagramNUSXRM2DValue156 +
                  wardleyDiagramNUSXRM2DValue157 *
                    wardleyDiagramNUSXRM2DValue157,
              );
            return (
              wardleyDiagramNUSXRM2DValue154.x +
              (wardleyDiagramNUSXRM2DValue156 /
                wardleyDiagramNUSXRM2DValue158) *
                wardleyDiagramNUSXRM2DValue155
            );
          })
          .attr("y2", (event) => {
            let wardleyDiagramNUSXRM2DValue159 =
                wardleyDiagramNUSXRM2DValue31.get(event.source),
              wardleyDiagramNUSXRM2DValue160 =
                wardleyDiagramNUSXRM2DValue31.get(event.target),
              wardleyDiagramNUSXRM2DValue161 =
                wardleyDiagramNUSXRM2DValue16.nodes.find(
                  (item) => item.id === event.target,
                ).isPipelineParent
                  ? wardleyDiagramNUSXRM2DValue14 / Math.sqrt(2)
                  : wardleyDiagramNUSXRM2DValue12.nodeRadius,
              wardleyDiagramNUSXRM2DValue162 =
                wardleyDiagramNUSXRM2DValue159.x -
                wardleyDiagramNUSXRM2DValue160.x,
              wardleyDiagramNUSXRM2DValue163 =
                wardleyDiagramNUSXRM2DValue159.y -
                wardleyDiagramNUSXRM2DValue160.y,
              wardleyDiagramNUSXRM2DValue164 = Math.sqrt(
                wardleyDiagramNUSXRM2DValue162 *
                  wardleyDiagramNUSXRM2DValue162 +
                  wardleyDiagramNUSXRM2DValue163 *
                    wardleyDiagramNUSXRM2DValue163,
              );
            return (
              wardleyDiagramNUSXRM2DValue160.y +
              (wardleyDiagramNUSXRM2DValue163 /
                wardleyDiagramNUSXRM2DValue164) *
                wardleyDiagramNUSXRM2DValue161
            );
          })
          .attr("stroke", wardleyDiagramNUSXRM2DValue13.linkStroke)
          .attr("stroke-width", 1)
          .attr("stroke-dasharray", (wardleyDiagramNUSXRM2DParam101) =>
            wardleyDiagramNUSXRM2DParam101.dashed ? "6 6" : null,
          )
          .attr("marker-end", (wardleyDiagramNUSXRM2DParam38) =>
            wardleyDiagramNUSXRM2DParam38.flow === "forward" ||
            wardleyDiagramNUSXRM2DParam38.flow === "bidirectional"
              ? `url(#link-arrow-end-${wardleyDiagramNUSXRM2DParam2})`
              : null,
          )
          .attr("marker-start", (wardleyDiagramNUSXRM2DParam32) =>
            wardleyDiagramNUSXRM2DParam32.flow === "backward" ||
            wardleyDiagramNUSXRM2DParam32.flow === "bidirectional"
              ? `url(#link-arrow-start-${wardleyDiagramNUSXRM2DParam2})`
              : null,
          );
        wardleyDiagramNUSXRM2DValue32
          .selectAll("text")
          .data(wardleyDiagramNUSXRM2DValue34.filter((item) => item.label))
          .enter()
          .append("text")
          .attr("class", "wardley-link-label")
          .attr("x", (event) => {
            let wardleyDiagramNUSXRM2DValue181 =
                wardleyDiagramNUSXRM2DValue31.get(event.source),
              wardleyDiagramNUSXRM2DValue182 =
                wardleyDiagramNUSXRM2DValue31.get(event.target),
              wardleyDiagramNUSXRM2DValue183 =
                (wardleyDiagramNUSXRM2DValue181.x +
                  wardleyDiagramNUSXRM2DValue182.x) /
                2,
              wardleyDiagramNUSXRM2DValue184 =
                wardleyDiagramNUSXRM2DValue182.y -
                wardleyDiagramNUSXRM2DValue181.y,
              wardleyDiagramNUSXRM2DValue185 =
                wardleyDiagramNUSXRM2DValue182.x -
                wardleyDiagramNUSXRM2DValue181.x;
            return (
              wardleyDiagramNUSXRM2DValue183 +
              (wardleyDiagramNUSXRM2DValue184 /
                Math.sqrt(
                  wardleyDiagramNUSXRM2DValue185 *
                    wardleyDiagramNUSXRM2DValue185 +
                    wardleyDiagramNUSXRM2DValue184 *
                      wardleyDiagramNUSXRM2DValue184,
                )) *
                8
            );
          })
          .attr("y", (event) => {
            let wardleyDiagramNUSXRM2DValue175 =
                wardleyDiagramNUSXRM2DValue31.get(event.source),
              wardleyDiagramNUSXRM2DValue176 =
                wardleyDiagramNUSXRM2DValue31.get(event.target),
              wardleyDiagramNUSXRM2DValue177 =
                (wardleyDiagramNUSXRM2DValue175.y +
                  wardleyDiagramNUSXRM2DValue176.y) /
                2,
              wardleyDiagramNUSXRM2DValue178 =
                wardleyDiagramNUSXRM2DValue176.x -
                wardleyDiagramNUSXRM2DValue175.x,
              wardleyDiagramNUSXRM2DValue179 =
                wardleyDiagramNUSXRM2DValue176.y -
                wardleyDiagramNUSXRM2DValue175.y,
              wardleyDiagramNUSXRM2DValue180 = Math.sqrt(
                wardleyDiagramNUSXRM2DValue178 *
                  wardleyDiagramNUSXRM2DValue178 +
                  wardleyDiagramNUSXRM2DValue179 *
                    wardleyDiagramNUSXRM2DValue179,
              );
            return (
              wardleyDiagramNUSXRM2DValue177 +
              (-wardleyDiagramNUSXRM2DValue178 /
                wardleyDiagramNUSXRM2DValue180) *
                8
            );
          })
          .attr("fill", wardleyDiagramNUSXRM2DValue13.axisTextColor)
          .attr("font-size", wardleyDiagramNUSXRM2DValue12.labelFontSize)
          .attr("text-anchor", "middle")
          .attr("dominant-baseline", "middle")
          .attr("transform", (event) => {
            let wardleyDiagramNUSXRM2DValue103 =
                wardleyDiagramNUSXRM2DValue31.get(event.source),
              wardleyDiagramNUSXRM2DValue104 =
                wardleyDiagramNUSXRM2DValue31.get(event.target),
              wardleyDiagramNUSXRM2DValue105 =
                (wardleyDiagramNUSXRM2DValue103.x +
                  wardleyDiagramNUSXRM2DValue104.x) /
                2,
              wardleyDiagramNUSXRM2DValue106 =
                (wardleyDiagramNUSXRM2DValue103.y +
                  wardleyDiagramNUSXRM2DValue104.y) /
                2,
              wardleyDiagramNUSXRM2DValue107 =
                wardleyDiagramNUSXRM2DValue104.x -
                wardleyDiagramNUSXRM2DValue103.x,
              wardleyDiagramNUSXRM2DValue108 =
                wardleyDiagramNUSXRM2DValue104.y -
                wardleyDiagramNUSXRM2DValue103.y,
              wardleyDiagramNUSXRM2DValue109 = Math.sqrt(
                wardleyDiagramNUSXRM2DValue107 *
                  wardleyDiagramNUSXRM2DValue107 +
                  wardleyDiagramNUSXRM2DValue108 *
                    wardleyDiagramNUSXRM2DValue108,
              ),
              wardleyDiagramNUSXRM2DValue110 =
                wardleyDiagramNUSXRM2DValue108 / wardleyDiagramNUSXRM2DValue109,
              wardleyDiagramNUSXRM2DValue111 =
                -wardleyDiagramNUSXRM2DValue107 /
                wardleyDiagramNUSXRM2DValue109,
              wardleyDiagramNUSXRM2DValue112 =
                wardleyDiagramNUSXRM2DValue105 +
                wardleyDiagramNUSXRM2DValue110 * 8,
              wardleyDiagramNUSXRM2DValue113 =
                wardleyDiagramNUSXRM2DValue106 +
                wardleyDiagramNUSXRM2DValue111 * 8,
              wardleyDiagramNUSXRM2DValue114 =
                (Math.atan2(
                  wardleyDiagramNUSXRM2DValue108,
                  wardleyDiagramNUSXRM2DValue107,
                ) *
                  180) /
                Math.PI;
            return (
              (wardleyDiagramNUSXRM2DValue114 > 90 ||
                wardleyDiagramNUSXRM2DValue114 < -90) &&
                (wardleyDiagramNUSXRM2DValue114 += 180),
              `rotate(${wardleyDiagramNUSXRM2DValue114} ${wardleyDiagramNUSXRM2DValue112} ${wardleyDiagramNUSXRM2DValue113})`
            );
          })
          .text(
            (wardleyDiagramNUSXRM2DParam125) =>
              wardleyDiagramNUSXRM2DParam125.label,
          );
        let wardleyDiagramNUSXRM2DValue35 = wardleyDiagramNUSXRM2DValue21
            .append("g")
            .attr("class", "wardley-trends"),
          wardleyDiagramNUSXRM2DValue36 = wardleyDiagramNUSXRM2DValue16.trends
            .map((item) => {
              let wardleyDiagramNUSXRM2DValue120 =
                wardleyDiagramNUSXRM2DValue31.get(item.nodeId);
              if (!wardleyDiagramNUSXRM2DValue120) return null;
              let wardleyDiagramNUSXRM2DValue121 =
                  wardleyDiagramNUSXRM2DValue25(item.targetX),
                wardleyDiagramNUSXRM2DValue122 = wardleyDiagramNUSXRM2DValue26(
                  item.targetY,
                ),
                wardleyDiagramNUSXRM2DValue123 =
                  wardleyDiagramNUSXRM2DValue121 -
                  wardleyDiagramNUSXRM2DValue120.x,
                wardleyDiagramNUSXRM2DValue124 =
                  wardleyDiagramNUSXRM2DValue122 -
                  wardleyDiagramNUSXRM2DValue120.y,
                wardleyDiagramNUSXRM2DValue125 = Math.sqrt(
                  wardleyDiagramNUSXRM2DValue123 *
                    wardleyDiagramNUSXRM2DValue123 +
                    wardleyDiagramNUSXRM2DValue124 *
                      wardleyDiagramNUSXRM2DValue124,
                ),
                wardleyDiagramNUSXRM2DValue126 =
                  wardleyDiagramNUSXRM2DValue12.nodeRadius + 2;
              return {
                origin: wardleyDiagramNUSXRM2DValue120,
                targetX: wardleyDiagramNUSXRM2DValue121,
                targetY: wardleyDiagramNUSXRM2DValue122,
                adjustedX2:
                  wardleyDiagramNUSXRM2DValue125 >
                  wardleyDiagramNUSXRM2DValue126
                    ? wardleyDiagramNUSXRM2DValue121 -
                      (wardleyDiagramNUSXRM2DValue123 /
                        wardleyDiagramNUSXRM2DValue125) *
                        wardleyDiagramNUSXRM2DValue126
                    : wardleyDiagramNUSXRM2DValue121,
                adjustedY2:
                  wardleyDiagramNUSXRM2DValue125 >
                  wardleyDiagramNUSXRM2DValue126
                    ? wardleyDiagramNUSXRM2DValue122 -
                      (wardleyDiagramNUSXRM2DValue124 /
                        wardleyDiagramNUSXRM2DValue125) *
                        wardleyDiagramNUSXRM2DValue126
                    : wardleyDiagramNUSXRM2DValue122,
              };
            })
            .filter((item) => item !== null);
        wardleyDiagramNUSXRM2DValue35
          .selectAll("line")
          .data(wardleyDiagramNUSXRM2DValue36)
          .enter()
          .append("line")
          .attr("class", "wardley-trend")
          .attr(
            "x1",
            (wardleyDiagramNUSXRM2DParam123) =>
              wardleyDiagramNUSXRM2DParam123.origin.x,
          )
          .attr(
            "y1",
            (wardleyDiagramNUSXRM2DParam124) =>
              wardleyDiagramNUSXRM2DParam124.origin.y,
          )
          .attr(
            "x2",
            (wardleyDiagramNUSXRM2DParam121) =>
              wardleyDiagramNUSXRM2DParam121.adjustedX2,
          )
          .attr(
            "y2",
            (wardleyDiagramNUSXRM2DParam122) =>
              wardleyDiagramNUSXRM2DParam122.adjustedY2,
          )
          .attr("stroke", wardleyDiagramNUSXRM2DValue13.evolutionStroke)
          .attr("stroke-width", 1)
          .attr("stroke-dasharray", "4 4")
          .attr("marker-end", `url(#arrow-${wardleyDiagramNUSXRM2DParam2})`);
        let wardleyDiagramNUSXRM2DValue37 = wardleyDiagramNUSXRM2DValue21
          .append("g")
          .attr("class", "wardley-nodes")
          .selectAll("g")
          .data(wardleyDiagramNUSXRM2DValue16.nodes)
          .enter()
          .append("g")
          .attr("class", (wardleyDiagramNUSXRM2DParam31) =>
            [
              "wardley-node",
              wardleyDiagramNUSXRM2DParam31.className
                ? `wardley-node--${wardleyDiagramNUSXRM2DParam31.className}`
                : "",
            ]
              .filter(Boolean)
              .join(" "),
          );
        wardleyDiagramNUSXRM2DValue37
          .filter((item) => item.sourceStrategy === "outsource")
          .append("circle")
          .attr("class", "wardley-outsource-overlay")
          .attr(
            "cx",
            (wardleyDiagramNUSXRM2DParam108) =>
              wardleyDiagramNUSXRM2DValue31.get(
                wardleyDiagramNUSXRM2DParam108.id,
              ).x,
          )
          .attr(
            "cy",
            (wardleyDiagramNUSXRM2DParam109) =>
              wardleyDiagramNUSXRM2DValue31.get(
                wardleyDiagramNUSXRM2DParam109.id,
              ).y,
          )
          .attr("r", wardleyDiagramNUSXRM2DValue12.nodeRadius * 2)
          .attr("fill", "#666")
          .attr("stroke", wardleyDiagramNUSXRM2DValue13.componentStroke)
          .attr("stroke-width", 1);
        wardleyDiagramNUSXRM2DValue37
          .filter((item) => item.sourceStrategy === "buy")
          .append("circle")
          .attr("class", "wardley-buy-overlay")
          .attr(
            "cx",
            (wardleyDiagramNUSXRM2DParam110) =>
              wardleyDiagramNUSXRM2DValue31.get(
                wardleyDiagramNUSXRM2DParam110.id,
              ).x,
          )
          .attr(
            "cy",
            (wardleyDiagramNUSXRM2DParam111) =>
              wardleyDiagramNUSXRM2DValue31.get(
                wardleyDiagramNUSXRM2DParam111.id,
              ).y,
          )
          .attr("r", wardleyDiagramNUSXRM2DValue12.nodeRadius * 2)
          .attr("fill", "#ccc")
          .attr("stroke", wardleyDiagramNUSXRM2DValue13.componentStroke)
          .attr("stroke-width", 1);
        wardleyDiagramNUSXRM2DValue37
          .filter((item) => item.sourceStrategy === "build")
          .append("circle")
          .attr("class", "wardley-build-overlay")
          .attr(
            "cx",
            (wardleyDiagramNUSXRM2DParam112) =>
              wardleyDiagramNUSXRM2DValue31.get(
                wardleyDiagramNUSXRM2DParam112.id,
              ).x,
          )
          .attr(
            "cy",
            (wardleyDiagramNUSXRM2DParam113) =>
              wardleyDiagramNUSXRM2DValue31.get(
                wardleyDiagramNUSXRM2DParam113.id,
              ).y,
          )
          .attr("r", wardleyDiagramNUSXRM2DValue12.nodeRadius * 2)
          .attr("fill", "#eee")
          .attr("stroke", "#000")
          .attr("stroke-width", 1);
        let wardleyDiagramNUSXRM2DValue38 =
          wardleyDiagramNUSXRM2DValue37.filter(
            (item) => item.sourceStrategy === "market",
          );
        wardleyDiagramNUSXRM2DValue38
          .append("circle")
          .attr("class", "wardley-market-overlay")
          .attr(
            "cx",
            (wardleyDiagramNUSXRM2DParam114) =>
              wardleyDiagramNUSXRM2DValue31.get(
                wardleyDiagramNUSXRM2DParam114.id,
              ).x,
          )
          .attr(
            "cy",
            (wardleyDiagramNUSXRM2DParam115) =>
              wardleyDiagramNUSXRM2DValue31.get(
                wardleyDiagramNUSXRM2DParam115.id,
              ).y,
          )
          .attr("r", wardleyDiagramNUSXRM2DValue12.nodeRadius * 2)
          .attr("fill", "white")
          .attr("stroke", wardleyDiagramNUSXRM2DValue13.componentStroke)
          .attr("stroke-width", 1);
        wardleyDiagramNUSXRM2DValue37
          .filter(
            (item) =>
              !item.isPipelineParent &&
              item.sourceStrategy !== "market" &&
              item.className !== "anchor",
          )
          .append("circle")
          .attr(
            "cx",
            (wardleyDiagramNUSXRM2DParam116) =>
              wardleyDiagramNUSXRM2DValue31.get(
                wardleyDiagramNUSXRM2DParam116.id,
              ).x,
          )
          .attr(
            "cy",
            (wardleyDiagramNUSXRM2DParam117) =>
              wardleyDiagramNUSXRM2DValue31.get(
                wardleyDiagramNUSXRM2DParam117.id,
              ).y,
          )
          .attr("r", wardleyDiagramNUSXRM2DValue12.nodeRadius)
          .attr("fill", wardleyDiagramNUSXRM2DValue13.componentFill)
          .attr("stroke", wardleyDiagramNUSXRM2DValue13.componentStroke)
          .attr("stroke-width", 1);
        let wardleyDiagramNUSXRM2DValue39 =
            wardleyDiagramNUSXRM2DValue12.nodeRadius * 0.7,
          wardleyDiagramNUSXRM2DValue40 =
            wardleyDiagramNUSXRM2DValue12.nodeRadius * 1.2;
        if (
          (wardleyDiagramNUSXRM2DValue38
            .append("line")
            .attr("class", "wardley-market-line")
            .attr(
              "x1",
              (wardleyDiagramNUSXRM2DParam118) =>
                wardleyDiagramNUSXRM2DValue31.get(
                  wardleyDiagramNUSXRM2DParam118.id,
                ).x,
            )
            .attr(
              "y1",
              (wardleyDiagramNUSXRM2DParam105) =>
                wardleyDiagramNUSXRM2DValue31.get(
                  wardleyDiagramNUSXRM2DParam105.id,
                ).y - wardleyDiagramNUSXRM2DValue40,
            )
            .attr(
              "x2",
              (wardleyDiagramNUSXRM2DParam77) =>
                wardleyDiagramNUSXRM2DValue31.get(
                  wardleyDiagramNUSXRM2DParam77.id,
                ).x -
                wardleyDiagramNUSXRM2DValue40 * Math.cos(Math.PI / 6),
            )
            .attr(
              "y2",
              (wardleyDiagramNUSXRM2DParam78) =>
                wardleyDiagramNUSXRM2DValue31.get(
                  wardleyDiagramNUSXRM2DParam78.id,
                ).y +
                wardleyDiagramNUSXRM2DValue40 * Math.sin(Math.PI / 6),
            )
            .attr("stroke", wardleyDiagramNUSXRM2DValue13.componentStroke)
            .attr("stroke-width", 1),
          wardleyDiagramNUSXRM2DValue38
            .append("line")
            .attr("class", "wardley-market-line")
            .attr(
              "x1",
              (wardleyDiagramNUSXRM2DParam79) =>
                wardleyDiagramNUSXRM2DValue31.get(
                  wardleyDiagramNUSXRM2DParam79.id,
                ).x -
                wardleyDiagramNUSXRM2DValue40 * Math.cos(Math.PI / 6),
            )
            .attr(
              "y1",
              (wardleyDiagramNUSXRM2DParam80) =>
                wardleyDiagramNUSXRM2DValue31.get(
                  wardleyDiagramNUSXRM2DParam80.id,
                ).y +
                wardleyDiagramNUSXRM2DValue40 * Math.sin(Math.PI / 6),
            )
            .attr(
              "x2",
              (wardleyDiagramNUSXRM2DParam81) =>
                wardleyDiagramNUSXRM2DValue31.get(
                  wardleyDiagramNUSXRM2DParam81.id,
                ).x +
                wardleyDiagramNUSXRM2DValue40 * Math.cos(Math.PI / 6),
            )
            .attr(
              "y2",
              (wardleyDiagramNUSXRM2DParam82) =>
                wardleyDiagramNUSXRM2DValue31.get(
                  wardleyDiagramNUSXRM2DParam82.id,
                ).y +
                wardleyDiagramNUSXRM2DValue40 * Math.sin(Math.PI / 6),
            )
            .attr("stroke", wardleyDiagramNUSXRM2DValue13.componentStroke)
            .attr("stroke-width", 1),
          wardleyDiagramNUSXRM2DValue38
            .append("line")
            .attr("class", "wardley-market-line")
            .attr(
              "x1",
              (wardleyDiagramNUSXRM2DParam83) =>
                wardleyDiagramNUSXRM2DValue31.get(
                  wardleyDiagramNUSXRM2DParam83.id,
                ).x +
                wardleyDiagramNUSXRM2DValue40 * Math.cos(Math.PI / 6),
            )
            .attr(
              "y1",
              (wardleyDiagramNUSXRM2DParam84) =>
                wardleyDiagramNUSXRM2DValue31.get(
                  wardleyDiagramNUSXRM2DParam84.id,
                ).y +
                wardleyDiagramNUSXRM2DValue40 * Math.sin(Math.PI / 6),
            )
            .attr(
              "x2",
              (wardleyDiagramNUSXRM2DParam119) =>
                wardleyDiagramNUSXRM2DValue31.get(
                  wardleyDiagramNUSXRM2DParam119.id,
                ).x,
            )
            .attr(
              "y2",
              (wardleyDiagramNUSXRM2DParam106) =>
                wardleyDiagramNUSXRM2DValue31.get(
                  wardleyDiagramNUSXRM2DParam106.id,
                ).y - wardleyDiagramNUSXRM2DValue40,
            )
            .attr("stroke", wardleyDiagramNUSXRM2DValue13.componentStroke)
            .attr("stroke-width", 1),
          wardleyDiagramNUSXRM2DValue38
            .append("circle")
            .attr("class", "wardley-market-dot")
            .attr(
              "cx",
              (wardleyDiagramNUSXRM2DParam120) =>
                wardleyDiagramNUSXRM2DValue31.get(
                  wardleyDiagramNUSXRM2DParam120.id,
                ).x,
            )
            .attr(
              "cy",
              (wardleyDiagramNUSXRM2DParam107) =>
                wardleyDiagramNUSXRM2DValue31.get(
                  wardleyDiagramNUSXRM2DParam107.id,
                ).y - wardleyDiagramNUSXRM2DValue40,
            )
            .attr("r", wardleyDiagramNUSXRM2DValue39)
            .attr("fill", "white")
            .attr("stroke", wardleyDiagramNUSXRM2DValue13.componentStroke)
            .attr("stroke-width", 2),
          wardleyDiagramNUSXRM2DValue38
            .append("circle")
            .attr("class", "wardley-market-dot")
            .attr(
              "cx",
              (wardleyDiagramNUSXRM2DParam85) =>
                wardleyDiagramNUSXRM2DValue31.get(
                  wardleyDiagramNUSXRM2DParam85.id,
                ).x -
                wardleyDiagramNUSXRM2DValue40 * Math.cos(Math.PI / 6),
            )
            .attr(
              "cy",
              (wardleyDiagramNUSXRM2DParam86) =>
                wardleyDiagramNUSXRM2DValue31.get(
                  wardleyDiagramNUSXRM2DParam86.id,
                ).y +
                wardleyDiagramNUSXRM2DValue40 * Math.sin(Math.PI / 6),
            )
            .attr("r", wardleyDiagramNUSXRM2DValue39)
            .attr("fill", "white")
            .attr("stroke", wardleyDiagramNUSXRM2DValue13.componentStroke)
            .attr("stroke-width", 2),
          wardleyDiagramNUSXRM2DValue38
            .append("circle")
            .attr("class", "wardley-market-dot")
            .attr(
              "cx",
              (wardleyDiagramNUSXRM2DParam87) =>
                wardleyDiagramNUSXRM2DValue31.get(
                  wardleyDiagramNUSXRM2DParam87.id,
                ).x +
                wardleyDiagramNUSXRM2DValue40 * Math.cos(Math.PI / 6),
            )
            .attr(
              "cy",
              (wardleyDiagramNUSXRM2DParam88) =>
                wardleyDiagramNUSXRM2DValue31.get(
                  wardleyDiagramNUSXRM2DParam88.id,
                ).y +
                wardleyDiagramNUSXRM2DValue40 * Math.sin(Math.PI / 6),
            )
            .attr("r", wardleyDiagramNUSXRM2DValue39)
            .attr("fill", "white")
            .attr("stroke", wardleyDiagramNUSXRM2DValue13.componentStroke)
            .attr("stroke-width", 2),
          wardleyDiagramNUSXRM2DValue37
            .filter((item) => item.isPipelineParent === true)
            .append("rect")
            .attr(
              "x",
              (wardleyDiagramNUSXRM2DParam103) =>
                wardleyDiagramNUSXRM2DValue31.get(
                  wardleyDiagramNUSXRM2DParam103.id,
                ).x -
                wardleyDiagramNUSXRM2DValue14 / 2,
            )
            .attr(
              "y",
              (wardleyDiagramNUSXRM2DParam104) =>
                wardleyDiagramNUSXRM2DValue31.get(
                  wardleyDiagramNUSXRM2DParam104.id,
                ).y -
                wardleyDiagramNUSXRM2DValue14 / 2,
            )
            .attr("width", wardleyDiagramNUSXRM2DValue14)
            .attr("height", wardleyDiagramNUSXRM2DValue14)
            .attr("fill", wardleyDiagramNUSXRM2DValue13.componentFill)
            .attr("stroke", wardleyDiagramNUSXRM2DValue13.componentStroke)
            .attr("stroke-width", 1),
          wardleyDiagramNUSXRM2DValue37
            .filter((item) => item.inertia === true)
            .append("line")
            .attr("class", "wardley-inertia")
            .attr("x1", (wardleyDiagramNUSXRM2DParam26) => {
              let wardleyDiagramNUSXRM2DValue170 =
                  wardleyDiagramNUSXRM2DValue31.get(
                    wardleyDiagramNUSXRM2DParam26.id,
                  ),
                wardleyDiagramNUSXRM2DValue171 =
                  wardleyDiagramNUSXRM2DParam26.isPipelineParent
                    ? wardleyDiagramNUSXRM2DValue14 / 2 + 15
                    : wardleyDiagramNUSXRM2DValue12.nodeRadius + 15;
              return (
                wardleyDiagramNUSXRM2DParam26.sourceStrategy &&
                  (wardleyDiagramNUSXRM2DValue171 +=
                    wardleyDiagramNUSXRM2DValue12.nodeRadius + 10),
                wardleyDiagramNUSXRM2DValue170.x +
                  wardleyDiagramNUSXRM2DValue171
              );
            })
            .attr("y1", (wardleyDiagramNUSXRM2DParam42) => {
              let wardleyDiagramNUSXRM2DValue197 =
                  wardleyDiagramNUSXRM2DValue31.get(
                    wardleyDiagramNUSXRM2DParam42.id,
                  ),
                wardleyDiagramNUSXRM2DValue198 =
                  wardleyDiagramNUSXRM2DParam42.isPipelineParent
                    ? wardleyDiagramNUSXRM2DValue14
                    : wardleyDiagramNUSXRM2DValue12.nodeRadius * 2;
              return (
                wardleyDiagramNUSXRM2DValue197.y -
                wardleyDiagramNUSXRM2DValue198 / 2
              );
            })
            .attr("x2", (wardleyDiagramNUSXRM2DParam27) => {
              let wardleyDiagramNUSXRM2DValue172 =
                  wardleyDiagramNUSXRM2DValue31.get(
                    wardleyDiagramNUSXRM2DParam27.id,
                  ),
                wardleyDiagramNUSXRM2DValue173 =
                  wardleyDiagramNUSXRM2DParam27.isPipelineParent
                    ? wardleyDiagramNUSXRM2DValue14 / 2 + 15
                    : wardleyDiagramNUSXRM2DValue12.nodeRadius + 15;
              return (
                wardleyDiagramNUSXRM2DParam27.sourceStrategy &&
                  (wardleyDiagramNUSXRM2DValue173 +=
                    wardleyDiagramNUSXRM2DValue12.nodeRadius + 10),
                wardleyDiagramNUSXRM2DValue172.x +
                  wardleyDiagramNUSXRM2DValue173
              );
            })
            .attr("y2", (wardleyDiagramNUSXRM2DParam43) => {
              let wardleyDiagramNUSXRM2DValue199 =
                  wardleyDiagramNUSXRM2DValue31.get(
                    wardleyDiagramNUSXRM2DParam43.id,
                  ),
                wardleyDiagramNUSXRM2DValue200 =
                  wardleyDiagramNUSXRM2DParam43.isPipelineParent
                    ? wardleyDiagramNUSXRM2DValue14
                    : wardleyDiagramNUSXRM2DValue12.nodeRadius * 2;
              return (
                wardleyDiagramNUSXRM2DValue199.y +
                wardleyDiagramNUSXRM2DValue200 / 2
              );
            })
            .attr("stroke", wardleyDiagramNUSXRM2DValue13.componentStroke)
            .attr("stroke-width", 6),
          wardleyDiagramNUSXRM2DValue37
            .append("text")
            .attr("x", (wardleyDiagramNUSXRM2DParam11) => {
              let wardleyDiagramNUSXRM2DValue131 =
                wardleyDiagramNUSXRM2DValue31.get(
                  wardleyDiagramNUSXRM2DParam11.id,
                );
              if (wardleyDiagramNUSXRM2DParam11.className === "anchor")
                return wardleyDiagramNUSXRM2DParam11.labelOffsetX === undefined
                  ? wardleyDiagramNUSXRM2DValue131.x
                  : wardleyDiagramNUSXRM2DValue131.x +
                      wardleyDiagramNUSXRM2DParam11.labelOffsetX;
              let wardleyDiagramNUSXRM2DValue132 =
                wardleyDiagramNUSXRM2DValue12.nodeLabelOffset;
              wardleyDiagramNUSXRM2DParam11.sourceStrategy &&
                wardleyDiagramNUSXRM2DParam11.labelOffsetX === undefined &&
                (wardleyDiagramNUSXRM2DValue132 += 10);
              let wardleyDiagramNUSXRM2DValue133 =
                wardleyDiagramNUSXRM2DParam11.labelOffsetX ??
                wardleyDiagramNUSXRM2DValue132;
              return (
                wardleyDiagramNUSXRM2DValue131.x +
                wardleyDiagramNUSXRM2DValue133
              );
            })
            .attr("y", (wardleyDiagramNUSXRM2DParam10) => {
              let wardleyDiagramNUSXRM2DValue128 =
                wardleyDiagramNUSXRM2DValue31.get(
                  wardleyDiagramNUSXRM2DParam10.id,
                );
              if (wardleyDiagramNUSXRM2DParam10.className === "anchor")
                return wardleyDiagramNUSXRM2DParam10.labelOffsetY === undefined
                  ? wardleyDiagramNUSXRM2DValue128.y - 3
                  : wardleyDiagramNUSXRM2DValue128.y +
                      wardleyDiagramNUSXRM2DParam10.labelOffsetY;
              let wardleyDiagramNUSXRM2DValue129 =
                -wardleyDiagramNUSXRM2DValue12.nodeLabelOffset;
              wardleyDiagramNUSXRM2DParam10.sourceStrategy &&
                wardleyDiagramNUSXRM2DParam10.labelOffsetY === undefined &&
                (wardleyDiagramNUSXRM2DValue129 -= 10);
              let wardleyDiagramNUSXRM2DValue130 =
                wardleyDiagramNUSXRM2DParam10.labelOffsetY ??
                wardleyDiagramNUSXRM2DValue129;
              return (
                wardleyDiagramNUSXRM2DValue128.y +
                wardleyDiagramNUSXRM2DValue130
              );
            })
            .attr("class", "wardley-node-label")
            .attr("fill", (wardleyDiagramNUSXRM2DParam30) =>
              wardleyDiagramNUSXRM2DParam30.className === "evolved"
                ? wardleyDiagramNUSXRM2DValue13.evolutionStroke
                : wardleyDiagramNUSXRM2DParam30.className === "anchor"
                  ? "#000"
                  : wardleyDiagramNUSXRM2DValue13.componentLabelColor,
            )
            .attr("font-size", wardleyDiagramNUSXRM2DValue12.labelFontSize)
            .attr("font-weight", (wardleyDiagramNUSXRM2DParam74) =>
              wardleyDiagramNUSXRM2DParam74.className === "anchor"
                ? "bold"
                : "normal",
            )
            .attr("text-anchor", (wardleyDiagramNUSXRM2DParam70) =>
              wardleyDiagramNUSXRM2DParam70.className === "anchor"
                ? "middle"
                : "start",
            )
            .attr("dominant-baseline", (wardleyDiagramNUSXRM2DParam75) =>
              wardleyDiagramNUSXRM2DParam75.className === "anchor"
                ? "middle"
                : "auto",
            )
            .text(
              (wardleyDiagramNUSXRM2DParam126) =>
                wardleyDiagramNUSXRM2DParam126.label,
            ),
          wardleyDiagramNUSXRM2DValue16.annotations.length > 0)
        ) {
          let wardleyDiagramNUSXRM2DValue41 = wardleyDiagramNUSXRM2DValue21
            .append("g")
            .attr("class", "wardley-annotations");
          if (
            (wardleyDiagramNUSXRM2DValue16.annotations.forEach((item) => {
              let wardleyDiagramNUSXRM2DValue53 = item.coordinates.map(
                (_item) => ({
                  x: wardleyDiagramNUSXRM2DValue25(_item.x),
                  y: wardleyDiagramNUSXRM2DValue26(_item.y),
                }),
              );
              if (wardleyDiagramNUSXRM2DValue53.length > 1)
                for (
                  let wardleyDiagramNUSXRM2DValue100 = 0;
                  wardleyDiagramNUSXRM2DValue100 <
                  wardleyDiagramNUSXRM2DValue53.length - 1;
                  wardleyDiagramNUSXRM2DValue100++
                )
                  wardleyDiagramNUSXRM2DValue41
                    .append("line")
                    .attr("class", "wardley-annotation-line")
                    .attr(
                      "x1",
                      wardleyDiagramNUSXRM2DValue53[
                        wardleyDiagramNUSXRM2DValue100
                      ].x,
                    )
                    .attr(
                      "y1",
                      wardleyDiagramNUSXRM2DValue53[
                        wardleyDiagramNUSXRM2DValue100
                      ].y,
                    )
                    .attr(
                      "x2",
                      wardleyDiagramNUSXRM2DValue53[
                        wardleyDiagramNUSXRM2DValue100 + 1
                      ].x,
                    )
                    .attr(
                      "y2",
                      wardleyDiagramNUSXRM2DValue53[
                        wardleyDiagramNUSXRM2DValue100 + 1
                      ].y,
                    )
                    .attr("stroke", wardleyDiagramNUSXRM2DValue13.axisColor)
                    .attr("stroke-width", 1.5)
                    .attr("stroke-dasharray", "4 4");
              wardleyDiagramNUSXRM2DValue53.forEach((_item) => {
                let wardleyDiagramNUSXRM2DValue80 =
                  wardleyDiagramNUSXRM2DValue41
                    .append("g")
                    .attr("class", "wardley-annotation");
                wardleyDiagramNUSXRM2DValue80
                  .append("circle")
                  .attr("cx", _item.x)
                  .attr("cy", _item.y)
                  .attr("r", 10)
                  .attr("fill", "white")
                  .attr("stroke", wardleyDiagramNUSXRM2DValue13.axisColor)
                  .attr("stroke-width", 1.5);
                wardleyDiagramNUSXRM2DValue80
                  .append("text")
                  .attr("x", _item.x)
                  .attr("y", _item.y)
                  .attr("text-anchor", "middle")
                  .attr("dominant-baseline", "central")
                  .attr("font-size", 10)
                  .attr("fill", wardleyDiagramNUSXRM2DValue13.axisTextColor)
                  .attr("font-weight", "bold")
                  .text(item.number);
              });
            }),
            wardleyDiagramNUSXRM2DValue16.annotationsBox)
          ) {
            let wardleyDiagramNUSXRM2DValue44 = wardleyDiagramNUSXRM2DValue25(
                wardleyDiagramNUSXRM2DValue16.annotationsBox.x,
              ),
              wardleyDiagramNUSXRM2DValue45 = wardleyDiagramNUSXRM2DValue26(
                wardleyDiagramNUSXRM2DValue16.annotationsBox.y,
              ),
              wardleyDiagramNUSXRM2DValue46 = wardleyDiagramNUSXRM2DValue41
                .append("g")
                .attr("class", "wardley-annotations-box"),
              wardleyDiagramNUSXRM2DValue47 = [
                ...wardleyDiagramNUSXRM2DValue16.annotations,
              ]
                .filter((item) => item.text)
                .sort(
                  (
                    wardleyDiagramNUSXRM2DParam98,
                    wardleyDiagramNUSXRM2DParam99,
                  ) =>
                    wardleyDiagramNUSXRM2DParam98.number -
                    wardleyDiagramNUSXRM2DParam99.number,
                ),
              wardleyDiagramNUSXRM2DValue48 = [];
            if (
              (wardleyDiagramNUSXRM2DValue47.forEach((item, index) => {
                let wardleyDiagramNUSXRM2DValue115 =
                  wardleyDiagramNUSXRM2DValue46
                    .append("text")
                    .attr("x", wardleyDiagramNUSXRM2DValue44 + 10)
                    .attr(
                      "y",
                      wardleyDiagramNUSXRM2DValue45 + 10 + (index + 1) * 16,
                    )
                    .attr("font-size", 11)
                    .attr("fill", wardleyDiagramNUSXRM2DValue13.axisTextColor)
                    .attr("text-anchor", "start")
                    .attr("dominant-baseline", "middle")
                    .text(`${item.number}. ${item.text}`);
                wardleyDiagramNUSXRM2DValue48.push(
                  wardleyDiagramNUSXRM2DValue115,
                );
              }),
              wardleyDiagramNUSXRM2DValue48.length > 0)
            ) {
              let wardleyDiagramNUSXRM2DValue65 = 0,
                wardleyDiagramNUSXRM2DValue66 = 0;
              wardleyDiagramNUSXRM2DValue48.forEach((item) => {
                let wardleyDiagramNUSXRM2DValue186 = item.node(),
                  wardleyDiagramNUSXRM2DValue187 =
                    wardleyDiagramNUSXRM2DValue186.getComputedTextLength();
                wardleyDiagramNUSXRM2DValue65 = Math.max(
                  wardleyDiagramNUSXRM2DValue65,
                  wardleyDiagramNUSXRM2DValue187,
                );
                let wardleyDiagramNUSXRM2DValue188 =
                  wardleyDiagramNUSXRM2DValue186.getBBox();
                wardleyDiagramNUSXRM2DValue66 = Math.max(
                  wardleyDiagramNUSXRM2DValue66,
                  wardleyDiagramNUSXRM2DValue188.height,
                );
              });
              let wardleyDiagramNUSXRM2DValue67 =
                  wardleyDiagramNUSXRM2DValue65 + 20 + 105,
                wardleyDiagramNUSXRM2DValue68 =
                  wardleyDiagramNUSXRM2DValue47.length * 16 +
                  20 +
                  wardleyDiagramNUSXRM2DValue66 / 2,
                wardleyDiagramNUSXRM2DValue69 =
                  wardleyDiagramNUSXRM2DValue12.padding,
                wardleyDiagramNUSXRM2DValue70 =
                  wardleyDiagramNUSXRM2DValue18 -
                  wardleyDiagramNUSXRM2DValue12.padding -
                  wardleyDiagramNUSXRM2DValue67,
                wardleyDiagramNUSXRM2DValue71 =
                  wardleyDiagramNUSXRM2DValue12.padding,
                wardleyDiagramNUSXRM2DValue72 =
                  wardleyDiagramNUSXRM2DValue19 -
                  wardleyDiagramNUSXRM2DValue12.padding -
                  wardleyDiagramNUSXRM2DValue68;
              wardleyDiagramNUSXRM2DValue44 = Math.max(
                wardleyDiagramNUSXRM2DValue69,
                Math.min(
                  wardleyDiagramNUSXRM2DValue44,
                  wardleyDiagramNUSXRM2DValue70,
                ),
              );
              wardleyDiagramNUSXRM2DValue45 = Math.max(
                wardleyDiagramNUSXRM2DValue71,
                Math.min(
                  wardleyDiagramNUSXRM2DValue45,
                  wardleyDiagramNUSXRM2DValue72,
                ),
              );
              wardleyDiagramNUSXRM2DValue48.forEach((item, index) => {
                item
                  .attr("x", wardleyDiagramNUSXRM2DValue44 + 10)
                  .attr(
                    "y",
                    wardleyDiagramNUSXRM2DValue45 + 10 + (index + 1) * 16,
                  );
              });
              wardleyDiagramNUSXRM2DValue46
                .insert("rect", "text")
                .attr("x", wardleyDiagramNUSXRM2DValue44)
                .attr("y", wardleyDiagramNUSXRM2DValue45)
                .attr("width", wardleyDiagramNUSXRM2DValue67)
                .attr("height", wardleyDiagramNUSXRM2DValue68)
                .attr("fill", "white")
                .attr("stroke", wardleyDiagramNUSXRM2DValue13.axisColor)
                .attr("stroke-width", 1.5)
                .attr("rx", 4)
                .attr("ry", 4);
            }
          }
        }
        if (wardleyDiagramNUSXRM2DValue16.notes.length > 0) {
          let wardleyDiagramNUSXRM2DValue95 = wardleyDiagramNUSXRM2DValue21
            .append("g")
            .attr("class", "wardley-notes");
          wardleyDiagramNUSXRM2DValue16.notes.forEach((item) => {
            let wardleyDiagramNUSXRM2DValue139 = wardleyDiagramNUSXRM2DValue25(
                item.x,
              ),
              wardleyDiagramNUSXRM2DValue140 = wardleyDiagramNUSXRM2DValue26(
                item.y,
              );
            wardleyDiagramNUSXRM2DValue95
              .append("text")
              .attr("x", wardleyDiagramNUSXRM2DValue139)
              .attr("y", wardleyDiagramNUSXRM2DValue140)
              .attr("text-anchor", "start")
              .attr("font-size", 11)
              .attr("fill", wardleyDiagramNUSXRM2DValue13.axisTextColor)
              .attr("font-weight", "bold")
              .text(item.text);
          });
        }
        if (wardleyDiagramNUSXRM2DValue16.accelerators.length > 0) {
          let wardleyDiagramNUSXRM2DValue57 = wardleyDiagramNUSXRM2DValue21
            .append("g")
            .attr("class", "wardley-accelerators");
          wardleyDiagramNUSXRM2DValue16.accelerators.forEach((item) => {
            let wardleyDiagramNUSXRM2DValue59 = wardleyDiagramNUSXRM2DValue25(
                item.x,
              ),
              wardleyDiagramNUSXRM2DValue60 = wardleyDiagramNUSXRM2DValue26(
                item.y,
              ),
              wardleyDiagramNUSXRM2DValue61 = `
        M ${wardleyDiagramNUSXRM2DValue59} ${wardleyDiagramNUSXRM2DValue60 - 15}
        L ${wardleyDiagramNUSXRM2DValue59 + 60 - 20} ${wardleyDiagramNUSXRM2DValue60 - 15}
        L ${wardleyDiagramNUSXRM2DValue59 + 60 - 20} ${wardleyDiagramNUSXRM2DValue60 - 15 - 8}
        L ${wardleyDiagramNUSXRM2DValue59 + 60} ${wardleyDiagramNUSXRM2DValue60}
        L ${wardleyDiagramNUSXRM2DValue59 + 60 - 20} ${wardleyDiagramNUSXRM2DValue60 + 15 + 8}
        L ${wardleyDiagramNUSXRM2DValue59 + 60 - 20} ${wardleyDiagramNUSXRM2DValue60 + 15}
        L ${wardleyDiagramNUSXRM2DValue59} ${wardleyDiagramNUSXRM2DValue60 + 15}
        Z
      `;
            wardleyDiagramNUSXRM2DValue57
              .append("path")
              .attr("d", wardleyDiagramNUSXRM2DValue61)
              .attr("fill", "white")
              .attr("stroke", wardleyDiagramNUSXRM2DValue13.componentStroke)
              .attr("stroke-width", 1);
            wardleyDiagramNUSXRM2DValue57
              .append("text")
              .attr("x", wardleyDiagramNUSXRM2DValue59 + 30)
              .attr("y", wardleyDiagramNUSXRM2DValue60 + 15 + 15)
              .attr("text-anchor", "middle")
              .attr("font-size", 10)
              .attr("fill", wardleyDiagramNUSXRM2DValue13.axisTextColor)
              .attr("font-weight", "bold")
              .text(item.name);
          });
        }
        if (wardleyDiagramNUSXRM2DValue16.deaccelerators.length > 0) {
          let wardleyDiagramNUSXRM2DValue58 = wardleyDiagramNUSXRM2DValue21
            .append("g")
            .attr("class", "wardley-deaccelerators");
          wardleyDiagramNUSXRM2DValue16.deaccelerators.forEach((item) => {
            let wardleyDiagramNUSXRM2DValue62 = wardleyDiagramNUSXRM2DValue25(
                item.x,
              ),
              wardleyDiagramNUSXRM2DValue63 = wardleyDiagramNUSXRM2DValue26(
                item.y,
              ),
              wardleyDiagramNUSXRM2DValue64 = `
        M ${wardleyDiagramNUSXRM2DValue62 + 60} ${wardleyDiagramNUSXRM2DValue63 - 15}
        L ${wardleyDiagramNUSXRM2DValue62 + 20} ${wardleyDiagramNUSXRM2DValue63 - 15}
        L ${wardleyDiagramNUSXRM2DValue62 + 20} ${wardleyDiagramNUSXRM2DValue63 - 15 - 8}
        L ${wardleyDiagramNUSXRM2DValue62} ${wardleyDiagramNUSXRM2DValue63}
        L ${wardleyDiagramNUSXRM2DValue62 + 20} ${wardleyDiagramNUSXRM2DValue63 + 15 + 8}
        L ${wardleyDiagramNUSXRM2DValue62 + 20} ${wardleyDiagramNUSXRM2DValue63 + 15}
        L ${wardleyDiagramNUSXRM2DValue62 + 60} ${wardleyDiagramNUSXRM2DValue63 + 15}
        Z
      `;
            wardleyDiagramNUSXRM2DValue58
              .append("path")
              .attr("d", wardleyDiagramNUSXRM2DValue64)
              .attr("fill", "white")
              .attr("stroke", wardleyDiagramNUSXRM2DValue13.componentStroke)
              .attr("stroke-width", 1);
            wardleyDiagramNUSXRM2DValue58
              .append("text")
              .attr("x", wardleyDiagramNUSXRM2DValue62 + 30)
              .attr("y", wardleyDiagramNUSXRM2DValue63 + 15 + 15)
              .attr("text-anchor", "middle")
              .attr("font-size", 10)
              .attr("fill", wardleyDiagramNUSXRM2DValue13.axisTextColor)
              .attr("font-weight", "bold")
              .text(item.name);
          });
        }
      },
      "draw",
    ),
  },
  styles: chunkAGHRB4JFN(() => "", "styles"),
};
