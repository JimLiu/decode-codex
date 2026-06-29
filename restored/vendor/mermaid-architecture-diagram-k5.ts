// Restored from ref/webview/assets/architectureDiagram-Q4EWVU46-mJ7dSian.js
// ArchitectureDiagramQ4EWVU46 chunk restored from the Codex webview bundle.
import { toEsModule } from "../runtime/commonjs-interop";
import { Src } from "./roughjs-geometry";
import cytoscape from "cytoscape";
import { loadCytoscapeFcose } from "./cytoscape-fcose";
import { chunkAGHRB4JFN, chunkAGHRB4JFR } from "./dayjs-core-alt";
import {
  _chunkICPOFSXXA,
  chunkICPOFSXXB,
  _chunkICPOFSXXC,
  chunkICPOFSXXD,
  _chunkICPOFSXXK,
  _chunkICPOFSXXL,
  chunkICPOFSXXUnderscore,
  chunkICPOFSXXV,
  _chunkICPOFSXXW,
  _chunkICPOFSXXY,
} from "./chunk-icpofsxx";
import { chunk426QAEUC } from "./chunk-426qaeuc";
import { chunk5PVQY5BWP, chunk5PVQY5BWR } from "./chunk-5pvqy5bw";
import {
  chunkU2HBQHQKA,
  chunkU2HBQHQKI,
  chunkU2HBQHQKN,
  chunkU2HBQHQKR,
} from "./chunk-u2hbqhqk";
import { populateCommonDb } from "../utils/chunk-4-bx2-vuab";
import { MermaidParserCore } from "./mermaid-parser-core-k5";
const _chunkICPOFSXXB = chunkICPOFSXXB,
  _chunkICPOFSXXV = chunkICPOFSXXV;
var architectureDiagramQ4EWVU46Value1 = toEsModule(loadCytoscapeFcose(), 1),
  architectureDiagramQ4EWVU46Value2 = {
    L: "left",
    R: "right",
    T: "top",
    B: "bottom",
  },
  architectureDiagramQ4EWVU46Value3 = {
    L: chunkAGHRB4JFN(
      (architectureDiagramQ4EWVU46Param99) =>
        `${architectureDiagramQ4EWVU46Param99},${architectureDiagramQ4EWVU46Param99 / 2} 0,${architectureDiagramQ4EWVU46Param99} 0,0`,
      "L",
    ),
    R: chunkAGHRB4JFN(
      (architectureDiagramQ4EWVU46Param97) =>
        `0,${architectureDiagramQ4EWVU46Param97 / 2} ${architectureDiagramQ4EWVU46Param97},0 ${architectureDiagramQ4EWVU46Param97},${architectureDiagramQ4EWVU46Param97}`,
      "R",
    ),
    T: chunkAGHRB4JFN(
      (architectureDiagramQ4EWVU46Param100) =>
        `0,0 ${architectureDiagramQ4EWVU46Param100},0 ${architectureDiagramQ4EWVU46Param100 / 2},${architectureDiagramQ4EWVU46Param100}`,
      "T",
    ),
    B: chunkAGHRB4JFN(
      (architectureDiagramQ4EWVU46Param98) =>
        `${architectureDiagramQ4EWVU46Param98 / 2},0 ${architectureDiagramQ4EWVU46Param98},${architectureDiagramQ4EWVU46Param98} 0,${architectureDiagramQ4EWVU46Param98}`,
      "B",
    ),
  },
  architectureDiagramQ4EWVU46Value4 = {
    L: chunkAGHRB4JFN(
      (
        architectureDiagramQ4EWVU46Param104,
        architectureDiagramQ4EWVU46Param105,
      ) =>
        architectureDiagramQ4EWVU46Param104 -
        architectureDiagramQ4EWVU46Param105 +
        2,
      "L",
    ),
    R: chunkAGHRB4JFN(
      (
        architectureDiagramQ4EWVU46Param108,
        architectureDiagramQ4EWVU46Param109,
      ) => architectureDiagramQ4EWVU46Param108 - 2,
      "R",
    ),
    T: chunkAGHRB4JFN(
      (
        architectureDiagramQ4EWVU46Param106,
        architectureDiagramQ4EWVU46Param107,
      ) =>
        architectureDiagramQ4EWVU46Param106 -
        architectureDiagramQ4EWVU46Param107 +
        2,
      "T",
    ),
    B: chunkAGHRB4JFN(
      (
        architectureDiagramQ4EWVU46Param110,
        architectureDiagramQ4EWVU46Param111,
      ) => architectureDiagramQ4EWVU46Param110 - 2,
      "B",
    ),
  },
  architectureDiagramQ4EWVU46Value5 = chunkAGHRB4JFN(function (
    architectureDiagramQ4EWVU46Param79,
  ) {
    return architectureDiagramQ4EWVU46Value7(architectureDiagramQ4EWVU46Param79)
      ? architectureDiagramQ4EWVU46Param79 === "L"
        ? "R"
        : "L"
      : architectureDiagramQ4EWVU46Param79 === "T"
        ? "B"
        : "T";
  }, "getOppositeArchitectureDirection"),
  architectureDiagramQ4EWVU46Value6 = chunkAGHRB4JFN(function (
    architectureDiagramQ4EWVU46Param72,
  ) {
    let architectureDiagramQ4EWVU46Value163 =
      architectureDiagramQ4EWVU46Param72;
    return (
      architectureDiagramQ4EWVU46Value163 === "L" ||
      architectureDiagramQ4EWVU46Value163 === "R" ||
      architectureDiagramQ4EWVU46Value163 === "T" ||
      architectureDiagramQ4EWVU46Value163 === "B"
    );
  }, "isArchitectureDirection"),
  architectureDiagramQ4EWVU46Value7 = chunkAGHRB4JFN(function (
    architectureDiagramQ4EWVU46Param85,
  ) {
    let architectureDiagramQ4EWVU46Value167 =
      architectureDiagramQ4EWVU46Param85;
    return (
      architectureDiagramQ4EWVU46Value167 === "L" ||
      architectureDiagramQ4EWVU46Value167 === "R"
    );
  }, "isArchitectureDirectionX"),
  architectureDiagramQ4EWVU46Value8 = chunkAGHRB4JFN(function (
    architectureDiagramQ4EWVU46Param86,
  ) {
    let architectureDiagramQ4EWVU46Value168 =
      architectureDiagramQ4EWVU46Param86;
    return (
      architectureDiagramQ4EWVU46Value168 === "T" ||
      architectureDiagramQ4EWVU46Value168 === "B"
    );
  }, "isArchitectureDirectionY"),
  architectureDiagramQ4EWVU46Value9 = chunkAGHRB4JFN(function (
    architectureDiagramQ4EWVU46Param77,
    architectureDiagramQ4EWVU46Param78,
  ) {
    let architectureDiagramQ4EWVU46Value164 =
        architectureDiagramQ4EWVU46Value7(architectureDiagramQ4EWVU46Param77) &&
        architectureDiagramQ4EWVU46Value8(architectureDiagramQ4EWVU46Param78),
      architectureDiagramQ4EWVU46Value165 =
        architectureDiagramQ4EWVU46Value8(architectureDiagramQ4EWVU46Param77) &&
        architectureDiagramQ4EWVU46Value7(architectureDiagramQ4EWVU46Param78);
    return (
      architectureDiagramQ4EWVU46Value164 || architectureDiagramQ4EWVU46Value165
    );
  }, "isArchitectureDirectionXY"),
  architectureDiagramQ4EWVU46Value10 = chunkAGHRB4JFN(function (
    architectureDiagramQ4EWVU46Param70,
  ) {
    let architectureDiagramQ4EWVU46Value157 =
        architectureDiagramQ4EWVU46Param70[0],
      architectureDiagramQ4EWVU46Value158 =
        architectureDiagramQ4EWVU46Param70[1],
      architectureDiagramQ4EWVU46Value159 =
        architectureDiagramQ4EWVU46Value7(
          architectureDiagramQ4EWVU46Value157,
        ) &&
        architectureDiagramQ4EWVU46Value8(architectureDiagramQ4EWVU46Value158),
      architectureDiagramQ4EWVU46Value160 =
        architectureDiagramQ4EWVU46Value8(
          architectureDiagramQ4EWVU46Value157,
        ) &&
        architectureDiagramQ4EWVU46Value7(architectureDiagramQ4EWVU46Value158);
    return (
      architectureDiagramQ4EWVU46Value159 || architectureDiagramQ4EWVU46Value160
    );
  }, "isArchitecturePairXY"),
  architectureDiagramQ4EWVU46Value11 = chunkAGHRB4JFN(function (
    architectureDiagramQ4EWVU46Param82,
  ) {
    return (
      architectureDiagramQ4EWVU46Param82 !== "LL" &&
      architectureDiagramQ4EWVU46Param82 !== "RR" &&
      architectureDiagramQ4EWVU46Param82 !== "TT" &&
      architectureDiagramQ4EWVU46Param82 !== "BB"
    );
  }, "isValidArchitectureDirectionPair"),
  architectureDiagramQ4EWVU46Value12 = chunkAGHRB4JFN(function (
    architectureDiagramQ4EWVU46Param83,
    architectureDiagramQ4EWVU46Param84,
  ) {
    let architectureDiagramQ4EWVU46Value166 = `${architectureDiagramQ4EWVU46Param83}${architectureDiagramQ4EWVU46Param84}`;
    return architectureDiagramQ4EWVU46Value11(
      architectureDiagramQ4EWVU46Value166,
    )
      ? architectureDiagramQ4EWVU46Value166
      : undefined;
  }, "getArchitectureDirectionPair"),
  architectureDiagramQ4EWVU46Value13 = chunkAGHRB4JFN(function (
    [architectureDiagramQ4EWVU46Param52, architectureDiagramQ4EWVU46Param53],
    architectureDiagramQ4EWVU46Param54,
  ) {
    let architectureDiagramQ4EWVU46Value139 =
        architectureDiagramQ4EWVU46Param54[0],
      architectureDiagramQ4EWVU46Value140 =
        architectureDiagramQ4EWVU46Param54[1];
    return architectureDiagramQ4EWVU46Value7(
      architectureDiagramQ4EWVU46Value139,
    )
      ? architectureDiagramQ4EWVU46Value8(architectureDiagramQ4EWVU46Value140)
        ? [
            architectureDiagramQ4EWVU46Param52 +
              (architectureDiagramQ4EWVU46Value139 === "L" ? -1 : 1),
            architectureDiagramQ4EWVU46Param53 +
              (architectureDiagramQ4EWVU46Value140 === "T" ? 1 : -1),
          ]
        : [
            architectureDiagramQ4EWVU46Param52 +
              (architectureDiagramQ4EWVU46Value139 === "L" ? -1 : 1),
            architectureDiagramQ4EWVU46Param53,
          ]
      : architectureDiagramQ4EWVU46Value7(architectureDiagramQ4EWVU46Value140)
        ? [
            architectureDiagramQ4EWVU46Param52 +
              (architectureDiagramQ4EWVU46Value140 === "L" ? 1 : -1),
            architectureDiagramQ4EWVU46Param53 +
              (architectureDiagramQ4EWVU46Value139 === "T" ? 1 : -1),
          ]
        : [
            architectureDiagramQ4EWVU46Param52,
            architectureDiagramQ4EWVU46Param53 +
              (architectureDiagramQ4EWVU46Value139 === "T" ? 1 : -1),
          ];
  }, "shiftPositionByArchitectureDirectionPair"),
  architectureDiagramQ4EWVU46Value14 = chunkAGHRB4JFN(function (
    architectureDiagramQ4EWVU46Param68,
  ) {
    return architectureDiagramQ4EWVU46Param68 === "LT" ||
      architectureDiagramQ4EWVU46Param68 === "TL"
      ? [1, 1]
      : architectureDiagramQ4EWVU46Param68 === "BL" ||
          architectureDiagramQ4EWVU46Param68 === "LB"
        ? [1, -1]
        : architectureDiagramQ4EWVU46Param68 === "BR" ||
            architectureDiagramQ4EWVU46Param68 === "RB"
          ? [-1, -1]
          : [-1, 1];
  }, "getArchitectureDirectionXYFactors"),
  architectureDiagramQ4EWVU46Value15 = chunkAGHRB4JFN(function (
    architectureDiagramQ4EWVU46Param80,
    architectureDiagramQ4EWVU46Param81,
  ) {
    return architectureDiagramQ4EWVU46Value9(
      architectureDiagramQ4EWVU46Param80,
      architectureDiagramQ4EWVU46Param81,
    )
      ? "bend"
      : architectureDiagramQ4EWVU46Value7(architectureDiagramQ4EWVU46Param80)
        ? "horizontal"
        : "vertical";
  }, "getArchitectureDirectionAlignment"),
  architectureDiagramQ4EWVU46Value16 = chunkAGHRB4JFN(function (
    architectureDiagramQ4EWVU46Param94,
  ) {
    return architectureDiagramQ4EWVU46Param94.type === "service";
  }, "isArchitectureService"),
  architectureDiagramQ4EWVU46Value17 = chunkAGHRB4JFN(function (
    architectureDiagramQ4EWVU46Param92,
  ) {
    return architectureDiagramQ4EWVU46Param92.type === "junction";
  }, "isArchitectureJunction"),
  architectureDiagramQ4EWVU46Value18 = chunkAGHRB4JFN(
    (architectureDiagramQ4EWVU46Param112) =>
      architectureDiagramQ4EWVU46Param112.data(),
    "edgeData",
  ),
  architectureDiagramQ4EWVU46Value19 = chunkAGHRB4JFN(
    (architectureDiagramQ4EWVU46Param113) =>
      architectureDiagramQ4EWVU46Param113.data(),
    "nodeData",
  ),
  architectureDiagramQ4EWVU46Value20 = chunkICPOFSXXD.architecture,
  architectureDiagramQ4EWVU46Value21 = class {
    constructor() {
      this.nodes = {};
      this.groups = {};
      this.edges = [];
      this.registeredIds = {};
      this.elements = {};
      this.diagramId = "";
      this.setAccTitle = chunkICPOFSXXV;
      this.getAccTitle = _chunkICPOFSXXV;
      this.setDiagramTitle = _chunkICPOFSXXW;
      this.getDiagramTitle = _chunkICPOFSXXC;
      this.getAccDescription = chunkICPOFSXXUnderscore;
      this.setAccDescription = chunkICPOFSXXB;
      this.clear();
    }
    static {
      chunkAGHRB4JFN(this, "ArchitectureDB");
    }
    setDiagramId(architectureDiagramQ4EWVU46Param95) {
      this.diagramId = architectureDiagramQ4EWVU46Param95;
    }
    getDiagramId() {
      return this.diagramId;
    }
    clear() {
      this.nodes = {};
      this.groups = {};
      this.edges = [];
      this.registeredIds = {};
      this.dataStructures = undefined;
      this.elements = {};
      this.diagramId = "";
      _chunkICPOFSXXA();
    }
    addService({ id, icon, in: _in, title, iconText }) {
      if (this.registeredIds[id] !== undefined)
        throw Error(
          `The service id [${id}] is already in use by another ${this.registeredIds[id]}`,
        );
      if (_in !== undefined) {
        if (id === _in)
          throw Error(`The service [${id}] cannot be placed within itself`);
        if (this.registeredIds[_in] === undefined)
          throw Error(
            `The service [${id}]'s parent does not exist. Please make sure the parent is created before this service`,
          );
        if (this.registeredIds[_in] === "node")
          throw Error(`The service [${id}]'s parent is not a group`);
      }
      this.registeredIds[id] = "node";
      this.nodes[id] = {
        id,
        type: "service",
        icon,
        iconText,
        title,
        edges: [],
        in: _in,
      };
    }
    getServices() {
      return Object.values(this.nodes).filter(
        architectureDiagramQ4EWVU46Value16,
      );
    }
    addJunction({ id, in: _in }) {
      if (this.registeredIds[id] !== undefined)
        throw Error(
          `The junction id [${id}] is already in use by another ${this.registeredIds[id]}`,
        );
      if (_in !== undefined) {
        if (id === _in)
          throw Error(`The junction [${id}] cannot be placed within itself`);
        if (this.registeredIds[_in] === undefined)
          throw Error(
            `The junction [${id}]'s parent does not exist. Please make sure the parent is created before this junction`,
          );
        if (this.registeredIds[_in] === "node")
          throw Error(`The junction [${id}]'s parent is not a group`);
      }
      this.registeredIds[id] = "node";
      this.nodes[id] = {
        id,
        type: "junction",
        edges: [],
        in: _in,
      };
    }
    getJunctions() {
      return Object.values(this.nodes).filter(
        architectureDiagramQ4EWVU46Value17,
      );
    }
    getNodes() {
      return Object.values(this.nodes);
    }
    getNode(architectureDiagramQ4EWVU46Param91) {
      return this.nodes[architectureDiagramQ4EWVU46Param91] ?? null;
    }
    addGroup({ id, icon, in: _in, title }) {
      if (this.registeredIds?.[id] !== undefined)
        throw Error(
          `The group id [${id}] is already in use by another ${this.registeredIds[id]}`,
        );
      if (_in !== undefined) {
        if (id === _in)
          throw Error(`The group [${id}] cannot be placed within itself`);
        if (this.registeredIds?.[_in] === undefined)
          throw Error(
            `The group [${id}]'s parent does not exist. Please make sure the parent is created before this group`,
          );
        if (this.registeredIds?.[_in] === "node")
          throw Error(`The group [${id}]'s parent is not a group`);
      }
      this.registeredIds[id] = "group";
      this.groups[id] = {
        id,
        icon,
        title,
        in: _in,
      };
    }
    getGroups() {
      return Object.values(this.groups);
    }
    addEdge({
      lhsId,
      rhsId,
      lhsDir,
      rhsDir,
      lhsInto,
      rhsInto,
      lhsGroup,
      rhsGroup,
      title,
    }) {
      if (!architectureDiagramQ4EWVU46Value6(lhsDir))
        throw Error(
          `Invalid direction given for left hand side of edge ${lhsId}--${rhsId}. Expected (L,R,T,B) got ${String(lhsDir)}`,
        );
      if (!architectureDiagramQ4EWVU46Value6(rhsDir))
        throw Error(
          `Invalid direction given for right hand side of edge ${lhsId}--${rhsId}. Expected (L,R,T,B) got ${String(rhsDir)}`,
        );
      if (this.nodes[lhsId] === undefined && this.groups[lhsId] === undefined)
        throw Error(
          `The left-hand id [${lhsId}] does not yet exist. Please create the service/group before declaring an edge to it.`,
        );
      if (this.nodes[rhsId] === undefined && this.groups[rhsId] === undefined)
        throw Error(
          `The right-hand id [${rhsId}] does not yet exist. Please create the service/group before declaring an edge to it.`,
        );
      let architectureDiagramQ4EWVU46Value51 = this.nodes[lhsId].in,
        architectureDiagramQ4EWVU46Value52 = this.nodes[rhsId].in;
      if (
        lhsGroup &&
        architectureDiagramQ4EWVU46Value51 &&
        architectureDiagramQ4EWVU46Value52 &&
        architectureDiagramQ4EWVU46Value51 == architectureDiagramQ4EWVU46Value52
      )
        throw Error(
          `The left-hand id [${lhsId}] is modified to traverse the group boundary, but the edge does not pass through two groups.`,
        );
      if (
        rhsGroup &&
        architectureDiagramQ4EWVU46Value51 &&
        architectureDiagramQ4EWVU46Value52 &&
        architectureDiagramQ4EWVU46Value51 == architectureDiagramQ4EWVU46Value52
      )
        throw Error(
          `The right-hand id [${rhsId}] is modified to traverse the group boundary, but the edge does not pass through two groups.`,
        );
      let architectureDiagramQ4EWVU46Value53 = {
        lhsId,
        lhsDir,
        lhsInto,
        lhsGroup,
        rhsId,
        rhsDir,
        rhsInto,
        rhsGroup,
        title,
      };
      this.edges.push(architectureDiagramQ4EWVU46Value53);
      this.nodes[lhsId] &&
        this.nodes[rhsId] &&
        (this.nodes[lhsId].edges.push(this.edges[this.edges.length - 1]),
        this.nodes[rhsId].edges.push(this.edges[this.edges.length - 1]));
    }
    getEdges() {
      return this.edges;
    }
    getDataStructures() {
      if (this.dataStructures === undefined) {
        let architectureDiagramQ4EWVU46Value54 = {},
          architectureDiagramQ4EWVU46Value55 = Object.entries(
            this.nodes,
          ).reduce(
            (
              accumulator,
              [
                architectureDiagramQ4EWVU46Param30,
                architectureDiagramQ4EWVU46Param31,
              ],
            ) => (
              (accumulator[architectureDiagramQ4EWVU46Param30] =
                architectureDiagramQ4EWVU46Param31.edges.reduce(
                  (_accumulator, current) => {
                    let architectureDiagramQ4EWVU46Value104 = this.getNode(
                        current.lhsId,
                      )?.in,
                      architectureDiagramQ4EWVU46Value105 = this.getNode(
                        current.rhsId,
                      )?.in;
                    if (
                      architectureDiagramQ4EWVU46Value104 &&
                      architectureDiagramQ4EWVU46Value105 &&
                      architectureDiagramQ4EWVU46Value104 !==
                        architectureDiagramQ4EWVU46Value105
                    ) {
                      let architectureDiagramQ4EWVU46Value151 =
                        architectureDiagramQ4EWVU46Value15(
                          current.lhsDir,
                          current.rhsDir,
                        );
                      architectureDiagramQ4EWVU46Value151 !== "bend" &&
                        ((architectureDiagramQ4EWVU46Value54[
                          architectureDiagramQ4EWVU46Value104
                        ] ??= {}),
                        (architectureDiagramQ4EWVU46Value54[
                          architectureDiagramQ4EWVU46Value104
                        ][architectureDiagramQ4EWVU46Value105] =
                          architectureDiagramQ4EWVU46Value151),
                        (architectureDiagramQ4EWVU46Value54[
                          architectureDiagramQ4EWVU46Value105
                        ] ??= {}),
                        (architectureDiagramQ4EWVU46Value54[
                          architectureDiagramQ4EWVU46Value105
                        ][architectureDiagramQ4EWVU46Value104] =
                          architectureDiagramQ4EWVU46Value151));
                    }
                    if (current.lhsId === architectureDiagramQ4EWVU46Param30) {
                      let architectureDiagramQ4EWVU46Value161 =
                        architectureDiagramQ4EWVU46Value12(
                          current.lhsDir,
                          current.rhsDir,
                        );
                      architectureDiagramQ4EWVU46Value161 &&
                        (_accumulator[architectureDiagramQ4EWVU46Value161] =
                          current.rhsId);
                    } else {
                      let architectureDiagramQ4EWVU46Value162 =
                        architectureDiagramQ4EWVU46Value12(
                          current.rhsDir,
                          current.lhsDir,
                        );
                      architectureDiagramQ4EWVU46Value162 &&
                        (_accumulator[architectureDiagramQ4EWVU46Value162] =
                          current.lhsId);
                    }
                    return _accumulator;
                  },
                  {},
                )),
              accumulator
            ),
            {},
          ),
          architectureDiagramQ4EWVU46Value56 = Object.keys(
            architectureDiagramQ4EWVU46Value55,
          )[0],
          architectureDiagramQ4EWVU46Value57 = {
            [architectureDiagramQ4EWVU46Value56]: 1,
          },
          architectureDiagramQ4EWVU46Value58 = Object.keys(
            architectureDiagramQ4EWVU46Value55,
          ).reduce(
            (accumulator, current) =>
              current === architectureDiagramQ4EWVU46Value56
                ? accumulator
                : {
                    ...accumulator,
                    [current]: 1,
                  },
            {},
          ),
          architectureDiagramQ4EWVU46Value59 = chunkAGHRB4JFN(
            (architectureDiagramQ4EWVU46Param45) => {
              let architectureDiagramQ4EWVU46Value124 = {
                  [architectureDiagramQ4EWVU46Param45]: [0, 0],
                },
                architectureDiagramQ4EWVU46Value125 = [
                  architectureDiagramQ4EWVU46Param45,
                ];
              for (; architectureDiagramQ4EWVU46Value125.length > 0; ) {
                let architectureDiagramQ4EWVU46Value134 =
                  architectureDiagramQ4EWVU46Value125.shift();
                if (architectureDiagramQ4EWVU46Value134) {
                  architectureDiagramQ4EWVU46Value57[
                    architectureDiagramQ4EWVU46Value134
                  ] = 1;
                  delete architectureDiagramQ4EWVU46Value58[
                    architectureDiagramQ4EWVU46Value134
                  ];
                  let architectureDiagramQ4EWVU46Value148 =
                      architectureDiagramQ4EWVU46Value55[
                        architectureDiagramQ4EWVU46Value134
                      ],
                    [
                      architectureDiagramQ4EWVU46Value149,
                      architectureDiagramQ4EWVU46Value150,
                    ] =
                      architectureDiagramQ4EWVU46Value124[
                        architectureDiagramQ4EWVU46Value134
                      ];
                  Object.entries(architectureDiagramQ4EWVU46Value148).forEach(
                    ([
                      architectureDiagramQ4EWVU46Param75,
                      architectureDiagramQ4EWVU46Param76,
                    ]) => {
                      architectureDiagramQ4EWVU46Value57[
                        architectureDiagramQ4EWVU46Param76
                      ] ||
                        ((architectureDiagramQ4EWVU46Value124[
                          architectureDiagramQ4EWVU46Param76
                        ] = architectureDiagramQ4EWVU46Value13(
                          [
                            architectureDiagramQ4EWVU46Value149,
                            architectureDiagramQ4EWVU46Value150,
                          ],
                          architectureDiagramQ4EWVU46Param75,
                        )),
                        architectureDiagramQ4EWVU46Value125.push(
                          architectureDiagramQ4EWVU46Param76,
                        ));
                    },
                  );
                }
              }
              return architectureDiagramQ4EWVU46Value124;
            },
            "BFS",
          ),
          architectureDiagramQ4EWVU46Value60 = [
            architectureDiagramQ4EWVU46Value59(
              architectureDiagramQ4EWVU46Value56,
            ),
          ];
        for (; Object.keys(architectureDiagramQ4EWVU46Value58).length > 0; )
          architectureDiagramQ4EWVU46Value60.push(
            architectureDiagramQ4EWVU46Value59(
              Object.keys(architectureDiagramQ4EWVU46Value58)[0],
            ),
          );
        this.dataStructures = {
          adjList: architectureDiagramQ4EWVU46Value55,
          spatialMaps: architectureDiagramQ4EWVU46Value60,
          groupAlignments: architectureDiagramQ4EWVU46Value54,
        };
      }
      return this.dataStructures;
    }
    setElementForId(
      architectureDiagramQ4EWVU46Param88,
      architectureDiagramQ4EWVU46Param89,
    ) {
      this.elements[architectureDiagramQ4EWVU46Param88] =
        architectureDiagramQ4EWVU46Param89;
    }
    getElementById(architectureDiagramQ4EWVU46Param90) {
      return this.elements[architectureDiagramQ4EWVU46Param90];
    }
    getConfig() {
      return chunk5PVQY5BWP({
        ...architectureDiagramQ4EWVU46Value20,
        ..._chunkICPOFSXXY().architecture,
      });
    }
    getConfigField(architectureDiagramQ4EWVU46Param87) {
      return this.getConfig()[architectureDiagramQ4EWVU46Param87];
    }
  },
  architectureDiagramQ4EWVU46Value22 = chunkAGHRB4JFN(
    (
      architectureDiagramQ4EWVU46Param64,
      architectureDiagramQ4EWVU46Param65,
    ) => {
      populateCommonDb(
        architectureDiagramQ4EWVU46Param64,
        architectureDiagramQ4EWVU46Param65,
      );
      architectureDiagramQ4EWVU46Param64.groups.map((item) =>
        architectureDiagramQ4EWVU46Param65.addGroup(item),
      );
      architectureDiagramQ4EWVU46Param64.services.map((item) =>
        architectureDiagramQ4EWVU46Param65.addService({
          ...item,
          type: "service",
        }),
      );
      architectureDiagramQ4EWVU46Param64.junctions.map((item) =>
        architectureDiagramQ4EWVU46Param65.addJunction({
          ...item,
          type: "junction",
        }),
      );
      architectureDiagramQ4EWVU46Param64.edges.map((item) =>
        architectureDiagramQ4EWVU46Param65.addEdge(item),
      );
    },
    "populateDb",
  ),
  architectureDiagramQ4EWVU46Value23 = {
    parser: {
      yy: undefined,
    },
    parse: chunkAGHRB4JFN(async (architectureDiagramQ4EWVU46Param46) => {
      let architectureDiagramQ4EWVU46Value130 = await MermaidParserCore(
        "architecture",
        architectureDiagramQ4EWVU46Param46,
      );
      chunkAGHRB4JFR.debug(architectureDiagramQ4EWVU46Value130);
      let architectureDiagramQ4EWVU46Value131 =
        architectureDiagramQ4EWVU46Value23.parser?.yy;
      if (
        !(
          architectureDiagramQ4EWVU46Value131 instanceof
          architectureDiagramQ4EWVU46Value21
        )
      )
        throw Error(
          "parser.parser?.yy was not a ArchitectureDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.",
        );
      architectureDiagramQ4EWVU46Value22(
        architectureDiagramQ4EWVU46Value130,
        architectureDiagramQ4EWVU46Value131,
      );
    }, "parse"),
  },
  architectureDiagramQ4EWVU46Value24 = chunkAGHRB4JFN(
    (architectureDiagramQ4EWVU46Param40) => `
  .edge {
    stroke-width: ${architectureDiagramQ4EWVU46Param40.archEdgeWidth};
    stroke: ${architectureDiagramQ4EWVU46Param40.archEdgeColor};
    fill: none;
  }

  .arrow {
    fill: ${architectureDiagramQ4EWVU46Param40.archEdgeArrowColor};
  }

  .node-bkg {
    fill: none;
    stroke: ${architectureDiagramQ4EWVU46Param40.archGroupBorderColor};
    stroke-width: ${architectureDiagramQ4EWVU46Param40.archGroupBorderWidth};
    stroke-dasharray: 8;
  }
  .node-icon-text {
    display: flex; 
    align-items: center;
  }
  
  .node-icon-text > div {
    color: #fff;
    margin: 1px;
    height: fit-content;
    text-align: center;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
`,
    "getStyles",
  ),
  architectureDiagramQ4EWVU46Value25 = chunkAGHRB4JFN(
    (architectureDiagramQ4EWVU46Param71) =>
      `<g><rect width="80" height="80" style="fill: #087ebf; stroke-width: 0px;"/>${architectureDiagramQ4EWVU46Param71}</g>`,
    "wrapIcon",
  ),
  architectureDiagramQ4EWVU46Value26 = {
    prefix: "mermaid-architecture",
    height: 80,
    width: 80,
    icons: {
      database: {
        body: architectureDiagramQ4EWVU46Value25(
          '<path id="b" data-name="4" d="m20,57.86c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path id="c" data-name="3" d="m20,45.95c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path id="d" data-name="2" d="m20,34.05c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse id="e" data-name="1" cx="40" cy="22.14" rx="20" ry="7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="20" y1="57.86" x2="20" y2="22.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="60" y1="57.86" x2="60" y2="22.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>',
        ),
      },
      server: {
        body: architectureDiagramQ4EWVU46Value25(
          '<rect x="17.5" y="17.5" width="45" height="45" rx="2" ry="2" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="17.5" y1="32.5" x2="62.5" y2="32.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="17.5" y1="47.5" x2="62.5" y2="47.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><g><path d="m56.25,25c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: #fff; stroke-width: 0px;"/><path d="m56.25,25c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/></g><g><path d="m56.25,40c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: #fff; stroke-width: 0px;"/><path d="m56.25,40c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/></g><g><path d="m56.25,55c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: #fff; stroke-width: 0px;"/><path d="m56.25,55c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/></g><g><circle cx="32.5" cy="25" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="27.5" cy="25" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="22.5" cy="25" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/></g><g><circle cx="32.5" cy="40" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="27.5" cy="40" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="22.5" cy="40" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/></g><g><circle cx="32.5" cy="55" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="27.5" cy="55" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="22.5" cy="55" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/></g>',
        ),
      },
      disk: {
        body: architectureDiagramQ4EWVU46Value25(
          '<rect x="20" y="15" width="40" height="50" rx="1" ry="1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="24" cy="19.17" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="56" cy="19.17" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="24" cy="60.83" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="56" cy="60.83" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="40" cy="33.75" rx="14" ry="14.58" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="40" cy="33.75" rx="4" ry="4.17" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="m37.51,42.52l-4.83,13.22c-.26.71-1.1,1.02-1.76.64l-4.18-2.42c-.66-.38-.81-1.26-.33-1.84l9.01-10.8c.88-1.05,2.56-.08,2.09,1.2Z" style="fill: #fff; stroke-width: 0px;"/>',
        ),
      },
      internet: {
        body: architectureDiagramQ4EWVU46Value25(
          '<circle cx="40" cy="40" r="22.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="40" y1="17.5" x2="40" y2="62.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="17.5" y1="40" x2="62.5" y2="40" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="m39.99,17.51c-15.28,11.1-15.28,33.88,0,44.98" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="m40.01,17.51c15.28,11.1,15.28,33.88,0,44.98" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="19.75" y1="30.1" x2="60.25" y2="30.1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="19.75" y1="49.9" x2="60.25" y2="49.9" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>',
        ),
      },
      cloud: {
        body: architectureDiagramQ4EWVU46Value25(
          '<path d="m65,47.5c0,2.76-2.24,5-5,5H20c-2.76,0-5-2.24-5-5,0-1.87,1.03-3.51,2.56-4.36-.04-.21-.06-.42-.06-.64,0-2.6,2.48-4.74,5.65-4.97,1.65-4.51,6.34-7.76,11.85-7.76.86,0,1.69.08,2.5.23,2.09-1.57,4.69-2.5,7.5-2.5,6.1,0,11.19,4.38,12.28,10.17,2.14.56,3.72,2.51,3.72,4.83,0,.03,0,.07-.01.1,2.29.46,4.01,2.48,4.01,4.9Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>',
        ),
      },
      unknown: chunkU2HBQHQKA,
      blank: {
        body: architectureDiagramQ4EWVU46Value25(""),
      },
    },
  },
  architectureDiagramQ4EWVU46Value27 = chunkAGHRB4JFN(async function (
    architectureDiagramQ4EWVU46Param7,
    architectureDiagramQ4EWVU46Param8,
    architectureDiagramQ4EWVU46Param9,
    architectureDiagramQ4EWVU46Param10,
  ) {
    let architectureDiagramQ4EWVU46Value36 =
        architectureDiagramQ4EWVU46Param9.getConfigField("padding"),
      architectureDiagramQ4EWVU46Value37 =
        architectureDiagramQ4EWVU46Param9.getConfigField("iconSize"),
      architectureDiagramQ4EWVU46Value38 =
        architectureDiagramQ4EWVU46Value37 / 2,
      architectureDiagramQ4EWVU46Value39 =
        architectureDiagramQ4EWVU46Value37 / 6,
      architectureDiagramQ4EWVU46Value40 =
        architectureDiagramQ4EWVU46Value39 / 2;
    await Promise.all(
      architectureDiagramQ4EWVU46Param8.edges().map(async (item) => {
        let {
            source,
            sourceDir,
            sourceArrow,
            sourceGroup,
            target,
            targetDir,
            targetArrow,
            targetGroup,
            label: architectureDiagramQ4EWVU46Value41,
          } = architectureDiagramQ4EWVU46Value18(item),
          { x: _x, y: architectureDiagramQ4EWVU46Value42 } =
            item[0].sourceEndpoint(),
          { x: architectureDiagramQ4EWVU46Value43, y } = item[0].midpoint(),
          { x, y: _y } = item[0].targetEndpoint(),
          architectureDiagramQ4EWVU46Value44 =
            architectureDiagramQ4EWVU46Value36 + 4;
        if (
          (sourceGroup &&
            (architectureDiagramQ4EWVU46Value7(sourceDir)
              ? (_x +=
                  sourceDir === "L"
                    ? -architectureDiagramQ4EWVU46Value44
                    : architectureDiagramQ4EWVU46Value44)
              : (architectureDiagramQ4EWVU46Value42 +=
                  sourceDir === "T"
                    ? -architectureDiagramQ4EWVU46Value44
                    : architectureDiagramQ4EWVU46Value44 + 18)),
          targetGroup &&
            (architectureDiagramQ4EWVU46Value7(targetDir)
              ? (x +=
                  targetDir === "L"
                    ? -architectureDiagramQ4EWVU46Value44
                    : architectureDiagramQ4EWVU46Value44)
              : (_y +=
                  targetDir === "T"
                    ? -architectureDiagramQ4EWVU46Value44
                    : architectureDiagramQ4EWVU46Value44 + 18)),
          !sourceGroup &&
            architectureDiagramQ4EWVU46Param9.getNode(source)?.type ===
              "junction" &&
            (architectureDiagramQ4EWVU46Value7(sourceDir)
              ? (_x +=
                  sourceDir === "L"
                    ? architectureDiagramQ4EWVU46Value38
                    : -architectureDiagramQ4EWVU46Value38)
              : (architectureDiagramQ4EWVU46Value42 +=
                  sourceDir === "T"
                    ? architectureDiagramQ4EWVU46Value38
                    : -architectureDiagramQ4EWVU46Value38)),
          !targetGroup &&
            architectureDiagramQ4EWVU46Param9.getNode(target)?.type ===
              "junction" &&
            (architectureDiagramQ4EWVU46Value7(targetDir)
              ? (x +=
                  targetDir === "L"
                    ? architectureDiagramQ4EWVU46Value38
                    : -architectureDiagramQ4EWVU46Value38)
              : (_y +=
                  targetDir === "T"
                    ? architectureDiagramQ4EWVU46Value38
                    : -architectureDiagramQ4EWVU46Value38)),
          item[0]._private.rscratch)
        ) {
          let architectureDiagramQ4EWVU46Value45 =
            architectureDiagramQ4EWVU46Param7.insert("g");
          if (
            (architectureDiagramQ4EWVU46Value45
              .insert("path")
              .attr(
                "d",
                `M ${_x},${architectureDiagramQ4EWVU46Value42} L ${architectureDiagramQ4EWVU46Value43},${y} L${x},${_y} `,
              )
              .attr("class", "edge")
              .attr(
                "id",
                `${architectureDiagramQ4EWVU46Param10}-${chunk5PVQY5BWR(
                  source,
                  target,
                  {
                    prefix: "L",
                  },
                )}`,
              ),
            sourceArrow)
          ) {
            let architectureDiagramQ4EWVU46Value141 =
                architectureDiagramQ4EWVU46Value7(sourceDir)
                  ? architectureDiagramQ4EWVU46Value4[sourceDir](
                      _x,
                      architectureDiagramQ4EWVU46Value39,
                    )
                  : _x - architectureDiagramQ4EWVU46Value40,
              architectureDiagramQ4EWVU46Value142 =
                architectureDiagramQ4EWVU46Value8(sourceDir)
                  ? architectureDiagramQ4EWVU46Value4[sourceDir](
                      architectureDiagramQ4EWVU46Value42,
                      architectureDiagramQ4EWVU46Value39,
                    )
                  : architectureDiagramQ4EWVU46Value42 -
                    architectureDiagramQ4EWVU46Value40;
            architectureDiagramQ4EWVU46Value45
              .insert("polygon")
              .attr(
                "points",
                architectureDiagramQ4EWVU46Value3[sourceDir](
                  architectureDiagramQ4EWVU46Value39,
                ),
              )
              .attr(
                "transform",
                `translate(${architectureDiagramQ4EWVU46Value141},${architectureDiagramQ4EWVU46Value142})`,
              )
              .attr("class", "arrow");
          }
          if (targetArrow) {
            let architectureDiagramQ4EWVU46Value143 =
                architectureDiagramQ4EWVU46Value7(targetDir)
                  ? architectureDiagramQ4EWVU46Value4[targetDir](
                      x,
                      architectureDiagramQ4EWVU46Value39,
                    )
                  : x - architectureDiagramQ4EWVU46Value40,
              architectureDiagramQ4EWVU46Value144 =
                architectureDiagramQ4EWVU46Value8(targetDir)
                  ? architectureDiagramQ4EWVU46Value4[targetDir](
                      _y,
                      architectureDiagramQ4EWVU46Value39,
                    )
                  : _y - architectureDiagramQ4EWVU46Value40;
            architectureDiagramQ4EWVU46Value45
              .insert("polygon")
              .attr(
                "points",
                architectureDiagramQ4EWVU46Value3[targetDir](
                  architectureDiagramQ4EWVU46Value39,
                ),
              )
              .attr(
                "transform",
                `translate(${architectureDiagramQ4EWVU46Value143},${architectureDiagramQ4EWVU46Value144})`,
              )
              .attr("class", "arrow");
          }
          if (architectureDiagramQ4EWVU46Value41) {
            let architectureDiagramQ4EWVU46Value61 =
                architectureDiagramQ4EWVU46Value9(sourceDir, targetDir)
                  ? "XY"
                  : architectureDiagramQ4EWVU46Value7(sourceDir)
                    ? "X"
                    : "Y",
              architectureDiagramQ4EWVU46Value62 = 0;
            architectureDiagramQ4EWVU46Value62 =
              architectureDiagramQ4EWVU46Value61 === "X"
                ? Math.abs(_x - x)
                : architectureDiagramQ4EWVU46Value61 === "Y"
                  ? Math.abs(architectureDiagramQ4EWVU46Value42 - _y) / 1.5
                  : Math.abs(_x - x) / 2;
            let architectureDiagramQ4EWVU46Value63 =
              architectureDiagramQ4EWVU46Value45.append("g");
            if (
              (await chunkU2HBQHQKN(
                architectureDiagramQ4EWVU46Value63,
                architectureDiagramQ4EWVU46Value41,
                {
                  useHtmlLabels: false,
                  width: architectureDiagramQ4EWVU46Value62,
                  classes: "architecture-service-label",
                },
                _chunkICPOFSXXB(),
              ),
              architectureDiagramQ4EWVU46Value63
                .attr("dy", "1em")
                .attr("alignment-baseline", "middle")
                .attr("dominant-baseline", "middle")
                .attr("text-anchor", "middle"),
              architectureDiagramQ4EWVU46Value61 === "X")
            )
              architectureDiagramQ4EWVU46Value63.attr(
                "transform",
                "translate(" +
                  architectureDiagramQ4EWVU46Value43 +
                  ", " +
                  y +
                  ")",
              );
            else if (architectureDiagramQ4EWVU46Value61 === "Y")
              architectureDiagramQ4EWVU46Value63.attr(
                "transform",
                "translate(" +
                  architectureDiagramQ4EWVU46Value43 +
                  ", " +
                  y +
                  ") rotate(-90)",
              );
            else if (architectureDiagramQ4EWVU46Value61 === "XY") {
              let architectureDiagramQ4EWVU46Value106 =
                architectureDiagramQ4EWVU46Value12(sourceDir, targetDir);
              if (
                architectureDiagramQ4EWVU46Value106 &&
                architectureDiagramQ4EWVU46Value10(
                  architectureDiagramQ4EWVU46Value106,
                )
              ) {
                let architectureDiagramQ4EWVU46Value108 =
                    architectureDiagramQ4EWVU46Value63
                      .node()
                      .getBoundingClientRect(),
                  [
                    architectureDiagramQ4EWVU46Value109,
                    architectureDiagramQ4EWVU46Value110,
                  ] = architectureDiagramQ4EWVU46Value14(
                    architectureDiagramQ4EWVU46Value106,
                  );
                architectureDiagramQ4EWVU46Value63
                  .attr("dominant-baseline", "auto")
                  .attr(
                    "transform",
                    `rotate(${-1 * architectureDiagramQ4EWVU46Value109 * architectureDiagramQ4EWVU46Value110 * 45})`,
                  );
                let architectureDiagramQ4EWVU46Value111 =
                  architectureDiagramQ4EWVU46Value63
                    .node()
                    .getBoundingClientRect();
                architectureDiagramQ4EWVU46Value63.attr(
                  "transform",
                  `
                translate(${architectureDiagramQ4EWVU46Value43}, ${y - architectureDiagramQ4EWVU46Value108.height / 2})
                translate(${(architectureDiagramQ4EWVU46Value109 * architectureDiagramQ4EWVU46Value111.width) / 2}, ${(architectureDiagramQ4EWVU46Value110 * architectureDiagramQ4EWVU46Value111.height) / 2})
                rotate(${-1 * architectureDiagramQ4EWVU46Value109 * architectureDiagramQ4EWVU46Value110 * 45}, 0, ${architectureDiagramQ4EWVU46Value108.height / 2})
              `,
                );
              }
            }
          }
        }
      }),
    );
  }, "drawEdges"),
  architectureDiagramQ4EWVU46Value28 = chunkAGHRB4JFN(async function (
    architectureDiagramQ4EWVU46Param15,
    architectureDiagramQ4EWVU46Param16,
    architectureDiagramQ4EWVU46Param17,
    architectureDiagramQ4EWVU46Param18,
  ) {
    let architectureDiagramQ4EWVU46Value64 =
        architectureDiagramQ4EWVU46Param17.getConfigField("padding") * 0.75,
      architectureDiagramQ4EWVU46Value65 =
        architectureDiagramQ4EWVU46Param17.getConfigField("fontSize"),
      architectureDiagramQ4EWVU46Value66 =
        architectureDiagramQ4EWVU46Param17.getConfigField("iconSize") / 2;
    await Promise.all(
      architectureDiagramQ4EWVU46Param16.nodes().map(async (item) => {
        let architectureDiagramQ4EWVU46Value70 =
          architectureDiagramQ4EWVU46Value19(item);
        if (architectureDiagramQ4EWVU46Value70.type === "group") {
          let { h: _h, w, x1, y1 } = item.boundingBox(),
            architectureDiagramQ4EWVU46Value71 =
              architectureDiagramQ4EWVU46Param15.append("rect");
          architectureDiagramQ4EWVU46Value71
            .attr(
              "id",
              `${architectureDiagramQ4EWVU46Param18}-group-${architectureDiagramQ4EWVU46Value70.id}`,
            )
            .attr("x", x1 + architectureDiagramQ4EWVU46Value66)
            .attr("y", y1 + architectureDiagramQ4EWVU46Value66)
            .attr("width", w)
            .attr("height", _h)
            .attr("class", "node-bkg");
          let architectureDiagramQ4EWVU46Value72 =
              architectureDiagramQ4EWVU46Param15.append("g"),
            architectureDiagramQ4EWVU46Value73 = x1,
            architectureDiagramQ4EWVU46Value74 = y1;
          if (architectureDiagramQ4EWVU46Value70.icon) {
            let architectureDiagramQ4EWVU46Value129 =
              architectureDiagramQ4EWVU46Value72.append("g");
            architectureDiagramQ4EWVU46Value129.html(
              `<g>${await chunkU2HBQHQKR(
                architectureDiagramQ4EWVU46Value70.icon,
                {
                  height: architectureDiagramQ4EWVU46Value64,
                  width: architectureDiagramQ4EWVU46Value64,
                  fallbackPrefix: architectureDiagramQ4EWVU46Value26.prefix,
                },
              )}</g>`,
            );
            architectureDiagramQ4EWVU46Value129.attr(
              "transform",
              "translate(" +
                (architectureDiagramQ4EWVU46Value73 +
                  architectureDiagramQ4EWVU46Value66 +
                  1) +
                ", " +
                (architectureDiagramQ4EWVU46Value74 +
                  architectureDiagramQ4EWVU46Value66 +
                  1) +
                ")",
            );
            architectureDiagramQ4EWVU46Value73 +=
              architectureDiagramQ4EWVU46Value64;
            architectureDiagramQ4EWVU46Value74 +=
              architectureDiagramQ4EWVU46Value65 / 2 - 1 - 2;
          }
          if (architectureDiagramQ4EWVU46Value70.label) {
            let architectureDiagramQ4EWVU46Value107 =
              architectureDiagramQ4EWVU46Value72.append("g");
            await chunkU2HBQHQKN(
              architectureDiagramQ4EWVU46Value107,
              architectureDiagramQ4EWVU46Value70.label,
              {
                useHtmlLabels: false,
                width: w,
                classes: "architecture-service-label",
              },
              _chunkICPOFSXXB(),
            );
            architectureDiagramQ4EWVU46Value107
              .attr("dy", "1em")
              .attr("alignment-baseline", "middle")
              .attr("dominant-baseline", "start")
              .attr("text-anchor", "start");
            architectureDiagramQ4EWVU46Value107.attr(
              "transform",
              "translate(" +
                (architectureDiagramQ4EWVU46Value73 +
                  architectureDiagramQ4EWVU46Value66 +
                  4) +
                ", " +
                (architectureDiagramQ4EWVU46Value74 +
                  architectureDiagramQ4EWVU46Value66 +
                  2) +
                ")",
            );
          }
          architectureDiagramQ4EWVU46Param17.setElementForId(
            architectureDiagramQ4EWVU46Value70.id,
            architectureDiagramQ4EWVU46Value71,
          );
        }
      }),
    );
  }, "drawGroups"),
  architectureDiagramQ4EWVU46Value29 = chunkAGHRB4JFN(async function (
    architectureDiagramQ4EWVU46Param11,
    architectureDiagramQ4EWVU46Param12,
    architectureDiagramQ4EWVU46Param13,
    architectureDiagramQ4EWVU46Param14,
  ) {
    let architectureDiagramQ4EWVU46Value46 = _chunkICPOFSXXB();
    for (let architectureDiagramQ4EWVU46Value47 of architectureDiagramQ4EWVU46Param13) {
      let architectureDiagramQ4EWVU46Value48 =
          architectureDiagramQ4EWVU46Param12.append("g"),
        architectureDiagramQ4EWVU46Value49 =
          architectureDiagramQ4EWVU46Param11.getConfigField("iconSize");
      if (architectureDiagramQ4EWVU46Value47.title) {
        let architectureDiagramQ4EWVU46Value118 =
          architectureDiagramQ4EWVU46Value48.append("g");
        await chunkU2HBQHQKN(
          architectureDiagramQ4EWVU46Value118,
          architectureDiagramQ4EWVU46Value47.title,
          {
            useHtmlLabels: false,
            width: architectureDiagramQ4EWVU46Value49 * 1.5,
            classes: "architecture-service-label",
          },
          architectureDiagramQ4EWVU46Value46,
        );
        architectureDiagramQ4EWVU46Value118
          .attr("dy", "1em")
          .attr("alignment-baseline", "middle")
          .attr("dominant-baseline", "middle")
          .attr("text-anchor", "middle");
        architectureDiagramQ4EWVU46Value118.attr(
          "transform",
          "translate(" +
            architectureDiagramQ4EWVU46Value49 / 2 +
            ", " +
            architectureDiagramQ4EWVU46Value49 +
            ")",
        );
      }
      let architectureDiagramQ4EWVU46Value50 =
        architectureDiagramQ4EWVU46Value48.append("g");
      if (architectureDiagramQ4EWVU46Value47.icon)
        architectureDiagramQ4EWVU46Value50.html(
          `<g>${await chunkU2HBQHQKR(architectureDiagramQ4EWVU46Value47.icon, {
            height: architectureDiagramQ4EWVU46Value49,
            width: architectureDiagramQ4EWVU46Value49,
            fallbackPrefix: architectureDiagramQ4EWVU46Value26.prefix,
          })}</g>`,
        );
      else if (architectureDiagramQ4EWVU46Value47.iconText) {
        architectureDiagramQ4EWVU46Value50.html(
          `<g>${await chunkU2HBQHQKR("blank", {
            height: architectureDiagramQ4EWVU46Value49,
            width: architectureDiagramQ4EWVU46Value49,
            fallbackPrefix: architectureDiagramQ4EWVU46Value26.prefix,
          })}</g>`,
        );
        let architectureDiagramQ4EWVU46Value100 =
            architectureDiagramQ4EWVU46Value50
              .append("g")
              .append("foreignObject")
              .attr("width", architectureDiagramQ4EWVU46Value49)
              .attr("height", architectureDiagramQ4EWVU46Value49)
              .append("div")
              .attr("class", "node-icon-text")
              .attr("style", `height: ${architectureDiagramQ4EWVU46Value49}px;`)
              .append("div")
              .html(
                _chunkICPOFSXXL(
                  architectureDiagramQ4EWVU46Value47.iconText,
                  architectureDiagramQ4EWVU46Value46,
                ),
              ),
          architectureDiagramQ4EWVU46Value101 =
            parseInt(
              window
                .getComputedStyle(
                  architectureDiagramQ4EWVU46Value100.node(),
                  null,
                )
                .getPropertyValue("font-size")
                .replace(/\D/g, ""),
            ) ?? 16;
        architectureDiagramQ4EWVU46Value100.attr(
          "style",
          `-webkit-line-clamp: ${Math.floor((architectureDiagramQ4EWVU46Value49 - 2) / architectureDiagramQ4EWVU46Value101)};`,
        );
      } else
        architectureDiagramQ4EWVU46Value50
          .append("path")
          .attr("class", "node-bkg")
          .attr(
            "id",
            `${architectureDiagramQ4EWVU46Param14}-node-${architectureDiagramQ4EWVU46Value47.id}`,
          )
          .attr(
            "d",
            `M0,${architectureDiagramQ4EWVU46Value49} V5 Q0,0 5,0 H${architectureDiagramQ4EWVU46Value49 - 5} Q${architectureDiagramQ4EWVU46Value49},0 ${architectureDiagramQ4EWVU46Value49},5 V${architectureDiagramQ4EWVU46Value49} Z`,
          );
      architectureDiagramQ4EWVU46Value48
        .attr(
          "id",
          `${architectureDiagramQ4EWVU46Param14}-service-${architectureDiagramQ4EWVU46Value47.id}`,
        )
        .attr("class", "architecture-service");
      let { width, height } = architectureDiagramQ4EWVU46Value48
        .node()
        .getBBox();
      architectureDiagramQ4EWVU46Value47.width = width;
      architectureDiagramQ4EWVU46Value47.height = height;
      architectureDiagramQ4EWVU46Param11.setElementForId(
        architectureDiagramQ4EWVU46Value47.id,
        architectureDiagramQ4EWVU46Value48,
      );
    }
    return 0;
  }, "drawServices"),
  architectureDiagramQ4EWVU46Value30 = chunkAGHRB4JFN(function (
    architectureDiagramQ4EWVU46Param41,
    architectureDiagramQ4EWVU46Param42,
    architectureDiagramQ4EWVU46Param43,
    architectureDiagramQ4EWVU46Param44,
  ) {
    architectureDiagramQ4EWVU46Param43.forEach((item) => {
      let architectureDiagramQ4EWVU46Value126 =
          architectureDiagramQ4EWVU46Param42.append("g"),
        architectureDiagramQ4EWVU46Value127 =
          architectureDiagramQ4EWVU46Param41.getConfigField("iconSize");
      architectureDiagramQ4EWVU46Value126
        .append("g")
        .append("rect")
        .attr("id", `${architectureDiagramQ4EWVU46Param44}-node-${item.id}`)
        .attr("fill-opacity", "0")
        .attr("width", architectureDiagramQ4EWVU46Value127)
        .attr("height", architectureDiagramQ4EWVU46Value127);
      architectureDiagramQ4EWVU46Value126.attr(
        "class",
        "architecture-junction",
      );
      let { width, height } =
        architectureDiagramQ4EWVU46Value126._groups[0][0].getBBox();
      architectureDiagramQ4EWVU46Value126.width = width;
      architectureDiagramQ4EWVU46Value126.height = height;
      architectureDiagramQ4EWVU46Param41.setElementForId(
        item.id,
        architectureDiagramQ4EWVU46Value126,
      );
    });
  }, "drawJunctions");
chunkU2HBQHQKI([
  {
    name: architectureDiagramQ4EWVU46Value26.prefix,
    icons: architectureDiagramQ4EWVU46Value26,
  },
]);
cytoscape.use(architectureDiagramQ4EWVU46Value1.default);
function architectureDiagramQ4EWVU46Helper1(
  architectureDiagramQ4EWVU46Param47,
  architectureDiagramQ4EWVU46Param48,
  architectureDiagramQ4EWVU46Param49,
) {
  architectureDiagramQ4EWVU46Param47.forEach((item) => {
    architectureDiagramQ4EWVU46Param48.add({
      group: "nodes",
      data: {
        type: "service",
        id: item.id,
        icon: item.icon,
        label: item.title,
        parent: item.in,
        width: architectureDiagramQ4EWVU46Param49.getConfigField("iconSize"),
        height: architectureDiagramQ4EWVU46Param49.getConfigField("iconSize"),
      },
      classes: "node-service",
    });
  });
}
chunkAGHRB4JFN(architectureDiagramQ4EWVU46Helper1, "addServices");
function architectureDiagramQ4EWVU46Helper2(
  architectureDiagramQ4EWVU46Param55,
  architectureDiagramQ4EWVU46Param56,
  architectureDiagramQ4EWVU46Param57,
) {
  architectureDiagramQ4EWVU46Param55.forEach((item) => {
    architectureDiagramQ4EWVU46Param56.add({
      group: "nodes",
      data: {
        type: "junction",
        id: item.id,
        parent: item.in,
        width: architectureDiagramQ4EWVU46Param57.getConfigField("iconSize"),
        height: architectureDiagramQ4EWVU46Param57.getConfigField("iconSize"),
      },
      classes: "node-junction",
    });
  });
}
chunkAGHRB4JFN(architectureDiagramQ4EWVU46Helper2, "addJunctions");
function architectureDiagramQ4EWVU46Helper3(
  architectureDiagramQ4EWVU46Param58,
  architectureDiagramQ4EWVU46Param59,
) {
  architectureDiagramQ4EWVU46Param59.nodes().map((item) => {
    let architectureDiagramQ4EWVU46Value152 =
      architectureDiagramQ4EWVU46Value19(item);
    architectureDiagramQ4EWVU46Value152.type !== "group" &&
      ((architectureDiagramQ4EWVU46Value152.x = item.position().x),
      (architectureDiagramQ4EWVU46Value152.y = item.position().y),
      architectureDiagramQ4EWVU46Param58
        .getElementById(architectureDiagramQ4EWVU46Value152.id)
        .attr(
          "transform",
          "translate(" +
            (architectureDiagramQ4EWVU46Value152.x || 0) +
            "," +
            (architectureDiagramQ4EWVU46Value152.y || 0) +
            ")",
        ));
  });
}
chunkAGHRB4JFN(architectureDiagramQ4EWVU46Helper3, "positionNodes");
function architectureDiagramQ4EWVU46Helper4(
  architectureDiagramQ4EWVU46Param66,
  architectureDiagramQ4EWVU46Param67,
) {
  architectureDiagramQ4EWVU46Param66.forEach((item) => {
    architectureDiagramQ4EWVU46Param67.add({
      group: "nodes",
      data: {
        type: "group",
        id: item.id,
        icon: item.icon,
        label: item.title,
        parent: item.in,
      },
      classes: "node-group",
    });
  });
}
chunkAGHRB4JFN(architectureDiagramQ4EWVU46Helper4, "addGroups");
function architectureDiagramQ4EWVU46Helper5(
  architectureDiagramQ4EWVU46Param22,
  architectureDiagramQ4EWVU46Param23,
) {
  architectureDiagramQ4EWVU46Param22.forEach((item) => {
    let {
        lhsId,
        rhsId,
        lhsInto,
        lhsGroup,
        rhsInto,
        lhsDir,
        rhsDir,
        rhsGroup,
        title,
      } = item,
      architectureDiagramQ4EWVU46Value78 = architectureDiagramQ4EWVU46Value9(
        item.lhsDir,
        item.rhsDir,
      )
        ? "segments"
        : "straight",
      architectureDiagramQ4EWVU46Value79 = {
        id: `${lhsId}-${rhsId}`,
        label: title,
        source: lhsId,
        sourceDir: lhsDir,
        sourceArrow: lhsInto,
        sourceGroup: lhsGroup,
        sourceEndpoint:
          lhsDir === "L"
            ? "0 50%"
            : lhsDir === "R"
              ? "100% 50%"
              : lhsDir === "T"
                ? "50% 0"
                : "50% 100%",
        target: rhsId,
        targetDir: rhsDir,
        targetArrow: rhsInto,
        targetGroup: rhsGroup,
        targetEndpoint:
          rhsDir === "L"
            ? "0 50%"
            : rhsDir === "R"
              ? "100% 50%"
              : rhsDir === "T"
                ? "50% 0"
                : "50% 100%",
      };
    architectureDiagramQ4EWVU46Param23.add({
      group: "edges",
      data: architectureDiagramQ4EWVU46Value79,
      classes: architectureDiagramQ4EWVU46Value78,
    });
  });
}
chunkAGHRB4JFN(architectureDiagramQ4EWVU46Helper5, "addEdges");
function architectureDiagramQ4EWVU46Helper6(
  architectureDiagramQ4EWVU46Param19,
  architectureDiagramQ4EWVU46Param20,
  architectureDiagramQ4EWVU46Param21,
) {
  let architectureDiagramQ4EWVU46Value67 = chunkAGHRB4JFN(
      (
        architectureDiagramQ4EWVU46Param32,
        architectureDiagramQ4EWVU46Param33,
      ) =>
        Object.entries(architectureDiagramQ4EWVU46Param32).reduce(
          (
            accumulator,
            [
              architectureDiagramQ4EWVU46Param38,
              architectureDiagramQ4EWVU46Param39,
            ],
          ) => {
            let architectureDiagramQ4EWVU46Value102 = 0,
              architectureDiagramQ4EWVU46Value103 = Object.entries(
                architectureDiagramQ4EWVU46Param39,
              );
            if (architectureDiagramQ4EWVU46Value103.length === 1)
              return (
                (accumulator[architectureDiagramQ4EWVU46Param38] =
                  architectureDiagramQ4EWVU46Value103[0][1]),
                accumulator
              );
            for (
              let architectureDiagramQ4EWVU46Value114 = 0;
              architectureDiagramQ4EWVU46Value114 <
              architectureDiagramQ4EWVU46Value103.length - 1;
              architectureDiagramQ4EWVU46Value114++
            )
              for (
                let architectureDiagramQ4EWVU46Value117 =
                  architectureDiagramQ4EWVU46Value114 + 1;
                architectureDiagramQ4EWVU46Value117 <
                architectureDiagramQ4EWVU46Value103.length;
                architectureDiagramQ4EWVU46Value117++
              ) {
                let [
                    architectureDiagramQ4EWVU46Value120,
                    architectureDiagramQ4EWVU46Value121,
                  ] =
                    architectureDiagramQ4EWVU46Value103[
                      architectureDiagramQ4EWVU46Value114
                    ],
                  [
                    architectureDiagramQ4EWVU46Value122,
                    architectureDiagramQ4EWVU46Value123,
                  ] =
                    architectureDiagramQ4EWVU46Value103[
                      architectureDiagramQ4EWVU46Value117
                    ];
                if (
                  architectureDiagramQ4EWVU46Param21[
                    architectureDiagramQ4EWVU46Value120
                  ]?.[architectureDiagramQ4EWVU46Value122] ===
                  architectureDiagramQ4EWVU46Param33
                ) {
                  accumulator[architectureDiagramQ4EWVU46Param38] ??= [];
                  accumulator[architectureDiagramQ4EWVU46Param38] = [
                    ...accumulator[architectureDiagramQ4EWVU46Param38],
                    ...architectureDiagramQ4EWVU46Value121,
                    ...architectureDiagramQ4EWVU46Value123,
                  ];
                } else if (
                  architectureDiagramQ4EWVU46Value120 === "default" ||
                  architectureDiagramQ4EWVU46Value122 === "default"
                ) {
                  accumulator[architectureDiagramQ4EWVU46Param38] ??= [];
                  accumulator[architectureDiagramQ4EWVU46Param38] = [
                    ...accumulator[architectureDiagramQ4EWVU46Param38],
                    ...architectureDiagramQ4EWVU46Value121,
                    ...architectureDiagramQ4EWVU46Value123,
                  ];
                } else {
                  let architectureDiagramQ4EWVU46Value155 = `${architectureDiagramQ4EWVU46Param38}-${architectureDiagramQ4EWVU46Value102++}`;
                  accumulator[architectureDiagramQ4EWVU46Value155] =
                    architectureDiagramQ4EWVU46Value121;
                  let architectureDiagramQ4EWVU46Value156 = `${architectureDiagramQ4EWVU46Param38}-${architectureDiagramQ4EWVU46Value102++}`;
                  accumulator[architectureDiagramQ4EWVU46Value156] =
                    architectureDiagramQ4EWVU46Value123;
                }
              }
            return accumulator;
          },
          {},
        ),
      "flattenAlignments",
    ),
    [architectureDiagramQ4EWVU46Value68, architectureDiagramQ4EWVU46Value69] =
      architectureDiagramQ4EWVU46Param20
        .map((item) => {
          let architectureDiagramQ4EWVU46Value112 = {},
            architectureDiagramQ4EWVU46Value113 = {};
          return (
            Object.entries(item).forEach(
              ([
                architectureDiagramQ4EWVU46Param60,
                [
                  architectureDiagramQ4EWVU46Param61,
                  architectureDiagramQ4EWVU46Param62,
                ],
              ]) => {
                let architectureDiagramQ4EWVU46Value145 =
                  architectureDiagramQ4EWVU46Param19.getNode(
                    architectureDiagramQ4EWVU46Param60,
                  )?.in ?? "default";
                architectureDiagramQ4EWVU46Value112[
                  architectureDiagramQ4EWVU46Param62
                ] ??= {};
                architectureDiagramQ4EWVU46Value112[
                  architectureDiagramQ4EWVU46Param62
                ][architectureDiagramQ4EWVU46Value145] ??= [];
                architectureDiagramQ4EWVU46Value112[
                  architectureDiagramQ4EWVU46Param62
                ][architectureDiagramQ4EWVU46Value145].push(
                  architectureDiagramQ4EWVU46Param60,
                );
                architectureDiagramQ4EWVU46Value113[
                  architectureDiagramQ4EWVU46Param61
                ] ??= {};
                architectureDiagramQ4EWVU46Value113[
                  architectureDiagramQ4EWVU46Param61
                ][architectureDiagramQ4EWVU46Value145] ??= [];
                architectureDiagramQ4EWVU46Value113[
                  architectureDiagramQ4EWVU46Param61
                ][architectureDiagramQ4EWVU46Value145].push(
                  architectureDiagramQ4EWVU46Param60,
                );
              },
            ),
            {
              horiz: Object.values(
                architectureDiagramQ4EWVU46Value67(
                  architectureDiagramQ4EWVU46Value112,
                  "horizontal",
                ),
              ).filter((_item) => _item.length > 1),
              vert: Object.values(
                architectureDiagramQ4EWVU46Value67(
                  architectureDiagramQ4EWVU46Value113,
                  "vertical",
                ),
              ).filter((_item) => _item.length > 1),
            }
          );
        })
        .reduce(
          (
            [
              architectureDiagramQ4EWVU46Param73,
              architectureDiagramQ4EWVU46Param74,
            ],
            { horiz, vert },
          ) => [
            [...architectureDiagramQ4EWVU46Param73, ...horiz],
            [...architectureDiagramQ4EWVU46Param74, ...vert],
          ],
          [[], []],
        );
  return {
    horizontal: architectureDiagramQ4EWVU46Value68,
    vertical: architectureDiagramQ4EWVU46Value69,
  };
}
chunkAGHRB4JFN(architectureDiagramQ4EWVU46Helper6, "getAlignments");
function architectureDiagramQ4EWVU46Helper7(
  architectureDiagramQ4EWVU46Param24,
  architectureDiagramQ4EWVU46Param25,
) {
  let architectureDiagramQ4EWVU46Value75 = [],
    architectureDiagramQ4EWVU46Value76 = chunkAGHRB4JFN(
      (architectureDiagramQ4EWVU46Param101) =>
        `${architectureDiagramQ4EWVU46Param101[0]},${architectureDiagramQ4EWVU46Param101[1]}`,
      "posToStr",
    ),
    architectureDiagramQ4EWVU46Value77 = chunkAGHRB4JFN(
      (architectureDiagramQ4EWVU46Param96) =>
        architectureDiagramQ4EWVU46Param96
          .split(",")
          .map((item) => parseInt(item)),
      "strToPos",
    );
  return (
    architectureDiagramQ4EWVU46Param24.forEach((item) => {
      let architectureDiagramQ4EWVU46Value85 = Object.fromEntries(
          Object.entries(item).map(
            ([
              architectureDiagramQ4EWVU46Param102,
              architectureDiagramQ4EWVU46Param103,
            ]) => [
              architectureDiagramQ4EWVU46Value76(
                architectureDiagramQ4EWVU46Param103,
              ),
              architectureDiagramQ4EWVU46Param102,
            ],
          ),
        ),
        architectureDiagramQ4EWVU46Value86 = [
          architectureDiagramQ4EWVU46Value76([0, 0]),
        ],
        architectureDiagramQ4EWVU46Value87 = {},
        architectureDiagramQ4EWVU46Value88 = {
          L: [-1, 0],
          R: [1, 0],
          T: [0, 1],
          B: [0, -1],
        };
      for (; architectureDiagramQ4EWVU46Value86.length > 0; ) {
        let architectureDiagramQ4EWVU46Value115 =
          architectureDiagramQ4EWVU46Value86.shift();
        if (architectureDiagramQ4EWVU46Value115) {
          architectureDiagramQ4EWVU46Value87[
            architectureDiagramQ4EWVU46Value115
          ] = 1;
          let architectureDiagramQ4EWVU46Value119 =
            architectureDiagramQ4EWVU46Value85[
              architectureDiagramQ4EWVU46Value115
            ];
          if (architectureDiagramQ4EWVU46Value119) {
            let architectureDiagramQ4EWVU46Value128 =
              architectureDiagramQ4EWVU46Value77(
                architectureDiagramQ4EWVU46Value115,
              );
            Object.entries(architectureDiagramQ4EWVU46Value88).forEach(
              ([
                architectureDiagramQ4EWVU46Param50,
                architectureDiagramQ4EWVU46Param51,
              ]) => {
                let architectureDiagramQ4EWVU46Value132 =
                    architectureDiagramQ4EWVU46Value76([
                      architectureDiagramQ4EWVU46Value128[0] +
                        architectureDiagramQ4EWVU46Param51[0],
                      architectureDiagramQ4EWVU46Value128[1] +
                        architectureDiagramQ4EWVU46Param51[1],
                    ]),
                  architectureDiagramQ4EWVU46Value133 =
                    architectureDiagramQ4EWVU46Value85[
                      architectureDiagramQ4EWVU46Value132
                    ];
                architectureDiagramQ4EWVU46Value133 &&
                  !architectureDiagramQ4EWVU46Value87[
                    architectureDiagramQ4EWVU46Value132
                  ] &&
                  (architectureDiagramQ4EWVU46Value86.push(
                    architectureDiagramQ4EWVU46Value132,
                  ),
                  architectureDiagramQ4EWVU46Value75.push({
                    [architectureDiagramQ4EWVU46Value2[
                      architectureDiagramQ4EWVU46Param50
                    ]]: architectureDiagramQ4EWVU46Value133,
                    [architectureDiagramQ4EWVU46Value2[
                      architectureDiagramQ4EWVU46Value5(
                        architectureDiagramQ4EWVU46Param50,
                      )
                    ]]: architectureDiagramQ4EWVU46Value119,
                    gap:
                      1.5 *
                      architectureDiagramQ4EWVU46Param25.getConfigField(
                        "iconSize",
                      ),
                  }));
              },
            );
          }
        }
      }
    }),
    architectureDiagramQ4EWVU46Value75
  );
}
chunkAGHRB4JFN(architectureDiagramQ4EWVU46Helper7, "getRelativeConstraints");
function $(
  architectureDiagramQ4EWVU46Param1,
  architectureDiagramQ4EWVU46Param2,
  architectureDiagramQ4EWVU46Param3,
  architectureDiagramQ4EWVU46Param4,
  architectureDiagramQ4EWVU46Param5,
  { spatialMaps, groupAlignments },
) {
  return new Promise((architectureDiagramQ4EWVU46Param6) => {
    let architectureDiagramQ4EWVU46Value31 = Src("body")
        .append("div")
        .attr("id", "cy")
        .attr("style", "display:none"),
      architectureDiagramQ4EWVU46Value32 = cytoscape({
        container: document.getElementById("cy"),
        style: [
          {
            selector: "edge",
            style: {
              "curve-style": "straight",
              "source-endpoint": "data(sourceEndpoint)",
              "target-endpoint": "data(targetEndpoint)",
            },
          },
          {
            selector: "edge[label]",
            style: {
              label: "data(label)",
            },
          },
          {
            selector: "edge.segments",
            style: {
              "curve-style": "segments",
              "segment-weights": "0",
              "segment-distances": [0.5],
              "edge-distances": "endpoints",
              "source-endpoint": "data(sourceEndpoint)",
              "target-endpoint": "data(targetEndpoint)",
            },
          },
          {
            selector: "node",
            style: {
              "compound-sizing-wrt-labels": "include",
            },
          },
          {
            selector: "node[label]",
            style: {
              "text-valign": "bottom",
              "text-halign": "center",
              "font-size": `${architectureDiagramQ4EWVU46Param5.getConfigField("fontSize")}px`,
            },
          },
          {
            selector: ".node-service",
            style: {
              label: "data(label)",
              width: "data(width)",
              height: "data(height)",
            },
          },
          {
            selector: ".node-junction",
            style: {
              width: "data(width)",
              height: "data(height)",
            },
          },
          {
            selector: ".node-group",
            style: {
              padding: `${architectureDiagramQ4EWVU46Param5.getConfigField("padding")}px`,
            },
          },
        ],
        layout: {
          name: "grid",
          boundingBox: {
            x1: 0,
            x2: 100,
            y1: 0,
            y2: 100,
          },
        },
      });
    architectureDiagramQ4EWVU46Value31.remove();
    architectureDiagramQ4EWVU46Helper4(
      architectureDiagramQ4EWVU46Param3,
      architectureDiagramQ4EWVU46Value32,
    );
    architectureDiagramQ4EWVU46Helper1(
      architectureDiagramQ4EWVU46Param1,
      architectureDiagramQ4EWVU46Value32,
      architectureDiagramQ4EWVU46Param5,
    );
    architectureDiagramQ4EWVU46Helper2(
      architectureDiagramQ4EWVU46Param2,
      architectureDiagramQ4EWVU46Value32,
      architectureDiagramQ4EWVU46Param5,
    );
    architectureDiagramQ4EWVU46Helper5(
      architectureDiagramQ4EWVU46Param4,
      architectureDiagramQ4EWVU46Value32,
    );
    let architectureDiagramQ4EWVU46Value33 = architectureDiagramQ4EWVU46Helper6(
        architectureDiagramQ4EWVU46Param5,
        spatialMaps,
        groupAlignments,
      ),
      architectureDiagramQ4EWVU46Value34 = architectureDiagramQ4EWVU46Helper7(
        spatialMaps,
        architectureDiagramQ4EWVU46Param5,
      ),
      architectureDiagramQ4EWVU46Value35 =
        architectureDiagramQ4EWVU46Value32.layout({
          name: "fcose",
          quality: "proof",
          randomize:
            architectureDiagramQ4EWVU46Param5.getConfigField("randomize"),
          styleEnabled: false,
          animate: false,
          nodeDimensionsIncludeLabels: false,
          idealEdgeLength(architectureDiagramQ4EWVU46Param63) {
            let [
                architectureDiagramQ4EWVU46Value146,
                architectureDiagramQ4EWVU46Value147,
              ] = architectureDiagramQ4EWVU46Param63.connectedNodes(),
              { parent } = architectureDiagramQ4EWVU46Value19(
                architectureDiagramQ4EWVU46Value146,
              ),
              { parent: _parent } = architectureDiagramQ4EWVU46Value19(
                architectureDiagramQ4EWVU46Value147,
              );
            return parent === _parent
              ? 1.5 *
                  architectureDiagramQ4EWVU46Param5.getConfigField("iconSize")
              : 0.5 *
                  architectureDiagramQ4EWVU46Param5.getConfigField("iconSize");
          },
          edgeElasticity(architectureDiagramQ4EWVU46Param69) {
            let [
                architectureDiagramQ4EWVU46Value153,
                architectureDiagramQ4EWVU46Value154,
              ] = architectureDiagramQ4EWVU46Param69.connectedNodes(),
              { parent } = architectureDiagramQ4EWVU46Value19(
                architectureDiagramQ4EWVU46Value153,
              ),
              { parent: _parent } = architectureDiagramQ4EWVU46Value19(
                architectureDiagramQ4EWVU46Value154,
              );
            return parent === _parent ? 0.45 : 0.001;
          },
          alignmentConstraint: architectureDiagramQ4EWVU46Value33,
          relativePlacementConstraint: architectureDiagramQ4EWVU46Value34,
        });
    architectureDiagramQ4EWVU46Value35.one("layoutstop", () => {
      function architectureDiagramQ4EWVU46Helper8(
        architectureDiagramQ4EWVU46Param26,
        architectureDiagramQ4EWVU46Param27,
        architectureDiagramQ4EWVU46Param28,
        architectureDiagramQ4EWVU46Param29,
      ) {
        let architectureDiagramQ4EWVU46Value80,
          architectureDiagramQ4EWVU46Value81,
          { x, y } = architectureDiagramQ4EWVU46Param26,
          { x: _x, y: _y } = architectureDiagramQ4EWVU46Param27;
        architectureDiagramQ4EWVU46Value81 =
          (architectureDiagramQ4EWVU46Param29 -
            y +
            ((x - architectureDiagramQ4EWVU46Param28) * (y - _y)) / (x - _x)) /
          Math.sqrt(1 + ((y - _y) / (x - _x)) ** 2);
        architectureDiagramQ4EWVU46Value80 = Math.sqrt(
          (architectureDiagramQ4EWVU46Param29 - y) ** 2 +
            (architectureDiagramQ4EWVU46Param28 - x) ** 2 -
            architectureDiagramQ4EWVU46Value81 ** 2,
        );
        let architectureDiagramQ4EWVU46Value82 = Math.sqrt(
          (_x - x) ** 2 + (_y - y) ** 2,
        );
        architectureDiagramQ4EWVU46Value80 /=
          architectureDiagramQ4EWVU46Value82;
        let architectureDiagramQ4EWVU46Value83 =
          (_x - x) * (architectureDiagramQ4EWVU46Param29 - y) -
          (_y - y) * (architectureDiagramQ4EWVU46Param28 - x);
        switch (true) {
          case architectureDiagramQ4EWVU46Value83 >= 0:
            architectureDiagramQ4EWVU46Value83 = 1;
            break;
          case architectureDiagramQ4EWVU46Value83 < 0:
            architectureDiagramQ4EWVU46Value83 = -1;
            break;
        }
        let architectureDiagramQ4EWVU46Value84 =
          (_x - x) * (architectureDiagramQ4EWVU46Param28 - x) +
          (_y - y) * (architectureDiagramQ4EWVU46Param29 - y);
        switch (true) {
          case architectureDiagramQ4EWVU46Value84 >= 0:
            architectureDiagramQ4EWVU46Value84 = 1;
            break;
          case architectureDiagramQ4EWVU46Value84 < 0:
            architectureDiagramQ4EWVU46Value84 = -1;
            break;
        }
        return (
          (architectureDiagramQ4EWVU46Value81 =
            Math.abs(architectureDiagramQ4EWVU46Value81) *
            architectureDiagramQ4EWVU46Value83),
          (architectureDiagramQ4EWVU46Value80 *=
            architectureDiagramQ4EWVU46Value84),
          {
            distances: architectureDiagramQ4EWVU46Value81,
            weights: architectureDiagramQ4EWVU46Value80,
          }
        );
      }
      chunkAGHRB4JFN(architectureDiagramQ4EWVU46Helper8, "getSegmentWeights");
      architectureDiagramQ4EWVU46Value32.startBatch();
      for (let architectureDiagramQ4EWVU46Value116 of Object.values(
        architectureDiagramQ4EWVU46Value32.edges(),
      ))
        if (architectureDiagramQ4EWVU46Value116.data?.()) {
          let { x, y } = architectureDiagramQ4EWVU46Value116
              .source()
              .position(),
            { x: _x, y: _y } = architectureDiagramQ4EWVU46Value116
              .target()
              .position();
          if (x !== _x && y !== _y) {
            let architectureDiagramQ4EWVU46Value135 =
                architectureDiagramQ4EWVU46Value116.sourceEndpoint(),
              architectureDiagramQ4EWVU46Value136 =
                architectureDiagramQ4EWVU46Value116.targetEndpoint(),
              { sourceDir } = architectureDiagramQ4EWVU46Value18(
                architectureDiagramQ4EWVU46Value116,
              ),
              [
                architectureDiagramQ4EWVU46Value137,
                architectureDiagramQ4EWVU46Value138,
              ] = architectureDiagramQ4EWVU46Value8(sourceDir)
                ? [
                    architectureDiagramQ4EWVU46Value135.x,
                    architectureDiagramQ4EWVU46Value136.y,
                  ]
                : [
                    architectureDiagramQ4EWVU46Value136.x,
                    architectureDiagramQ4EWVU46Value135.y,
                  ],
              { weights, distances } = architectureDiagramQ4EWVU46Helper8(
                architectureDiagramQ4EWVU46Value135,
                architectureDiagramQ4EWVU46Value136,
                architectureDiagramQ4EWVU46Value137,
                architectureDiagramQ4EWVU46Value138,
              );
            architectureDiagramQ4EWVU46Value116.style(
              "segment-distances",
              distances,
            );
            architectureDiagramQ4EWVU46Value116.style(
              "segment-weights",
              weights,
            );
          }
        }
      architectureDiagramQ4EWVU46Value32.endBatch();
      architectureDiagramQ4EWVU46Value35.run();
    });
    architectureDiagramQ4EWVU46Value35.run();
    architectureDiagramQ4EWVU46Value32.ready(
      (architectureDiagramQ4EWVU46Param93) => {
        chunkAGHRB4JFR.info("Ready", architectureDiagramQ4EWVU46Param93);
        architectureDiagramQ4EWVU46Param6(architectureDiagramQ4EWVU46Value32);
      },
    );
  });
}
chunkAGHRB4JFN($, "layoutArchitecture");
export const ArchitectureDiagramQ4EWVU46 = {
  parser: architectureDiagramQ4EWVU46Value23,
  get db() {
    return new architectureDiagramQ4EWVU46Value21();
  },
  renderer: {
    draw: chunkAGHRB4JFN(
      async (
        architectureDiagramQ4EWVU46Param34,
        architectureDiagramQ4EWVU46Param35,
        architectureDiagramQ4EWVU46Param36,
        architectureDiagramQ4EWVU46Param37,
      ) => {
        let architectureDiagramQ4EWVU46Value89 =
          architectureDiagramQ4EWVU46Param37.db;
        architectureDiagramQ4EWVU46Value89.setDiagramId(
          architectureDiagramQ4EWVU46Param35,
        );
        let architectureDiagramQ4EWVU46Value90 =
            architectureDiagramQ4EWVU46Value89.getServices(),
          architectureDiagramQ4EWVU46Value91 =
            architectureDiagramQ4EWVU46Value89.getJunctions(),
          architectureDiagramQ4EWVU46Value92 =
            architectureDiagramQ4EWVU46Value89.getGroups(),
          architectureDiagramQ4EWVU46Value93 =
            architectureDiagramQ4EWVU46Value89.getEdges(),
          architectureDiagramQ4EWVU46Value94 =
            architectureDiagramQ4EWVU46Value89.getDataStructures(),
          architectureDiagramQ4EWVU46Value95 = chunk426QAEUC(
            architectureDiagramQ4EWVU46Param35,
          ),
          architectureDiagramQ4EWVU46Value96 =
            architectureDiagramQ4EWVU46Value95.append("g");
        architectureDiagramQ4EWVU46Value96.attr("class", "architecture-edges");
        let architectureDiagramQ4EWVU46Value97 =
          architectureDiagramQ4EWVU46Value95.append("g");
        architectureDiagramQ4EWVU46Value97.attr(
          "class",
          "architecture-services",
        );
        let architectureDiagramQ4EWVU46Value98 =
          architectureDiagramQ4EWVU46Value95.append("g");
        architectureDiagramQ4EWVU46Value98.attr("class", "architecture-groups");
        await architectureDiagramQ4EWVU46Value29(
          architectureDiagramQ4EWVU46Value89,
          architectureDiagramQ4EWVU46Value97,
          architectureDiagramQ4EWVU46Value90,
          architectureDiagramQ4EWVU46Param35,
        );
        architectureDiagramQ4EWVU46Value30(
          architectureDiagramQ4EWVU46Value89,
          architectureDiagramQ4EWVU46Value97,
          architectureDiagramQ4EWVU46Value91,
          architectureDiagramQ4EWVU46Param35,
        );
        let architectureDiagramQ4EWVU46Value99 = await $(
          architectureDiagramQ4EWVU46Value90,
          architectureDiagramQ4EWVU46Value91,
          architectureDiagramQ4EWVU46Value92,
          architectureDiagramQ4EWVU46Value93,
          architectureDiagramQ4EWVU46Value89,
          architectureDiagramQ4EWVU46Value94,
        );
        await architectureDiagramQ4EWVU46Value27(
          architectureDiagramQ4EWVU46Value96,
          architectureDiagramQ4EWVU46Value99,
          architectureDiagramQ4EWVU46Value89,
          architectureDiagramQ4EWVU46Param35,
        );
        await architectureDiagramQ4EWVU46Value28(
          architectureDiagramQ4EWVU46Value98,
          architectureDiagramQ4EWVU46Value99,
          architectureDiagramQ4EWVU46Value89,
          architectureDiagramQ4EWVU46Param35,
        );
        architectureDiagramQ4EWVU46Helper3(
          architectureDiagramQ4EWVU46Value89,
          architectureDiagramQ4EWVU46Value99,
        );
        _chunkICPOFSXXK(
          undefined,
          architectureDiagramQ4EWVU46Value95,
          architectureDiagramQ4EWVU46Value89.getConfigField("padding"),
          architectureDiagramQ4EWVU46Value89.getConfigField("useMaxWidth"),
        );
      },
      "draw",
    ),
  },
  styles: architectureDiagramQ4EWVU46Value24,
};
