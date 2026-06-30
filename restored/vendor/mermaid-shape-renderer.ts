// Restored from ref/webview/assets/chunk-5FUZZQ4R-B4cKsdW4.js
// Chunk5FUZZQ4R chunk restored from the Codex webview bundle.
import { Src } from "./roughjs-geometry";
import rough from "roughjs";
import { chunkAGHRB4JFN, chunkAGHRB4JFR } from "./dayjs-core-alt";
import {
  _chunkICPOFSXXP,
  chunkICPOFSXXZ,
  _chunkICPOFSXXA,
  _chunkICPOFSXXB,
  chunkICPOFSXXJ,
  chunkICPOFSXXU,
  chunkICPOFSXXT,
  chunkICPOFSXXW,
} from "./chunk-icpofsxx";
import {
  chunk5PVQY5BWD,
  chunk5PVQY5BWF,
  chunk5PVQY5BWL,
} from "./chunk-5pvqy5bw";
import { chunkU2HBQHQKA, chunkU2HBQHQKR } from "./chunk-u2hbqhqk";
import { chunkZZ45TVLEN, chunkZZ45TVLET } from "./chunk-zz45tvle";
import {
  chunkX2U36JSPR,
  chunkX2U36JSPI,
  chunkX2U36JSPN,
  chunkX2U36JSPT,
} from "./chunk-x2u36jsp";
var chunk5FUZZQ4RS = chunkAGHRB4JFN(
    async (
      chunk5FUZZQ4RParam58,
      chunk5FUZZQ4RParam59,
      chunk5FUZZQ4RParam60,
    ) => {
      let chunk5FUZZQ4RValue465,
        chunk5FUZZQ4RValue466 =
          chunk5FUZZQ4RParam59.useHtmlLabels ||
          chunkICPOFSXXZ(_chunkICPOFSXXP()?.htmlLabels);
      chunk5FUZZQ4RValue465 = chunk5FUZZQ4RParam60 || "node default";
      let chunk5FUZZQ4RValue467 = chunk5FUZZQ4RParam58
          .insert("g")
          .attr("class", chunk5FUZZQ4RValue465)
          .attr("id", chunk5FUZZQ4RParam59.domId || chunk5FUZZQ4RParam59.id),
        chunk5FUZZQ4RValue468 = chunk5FUZZQ4RValue467
          .insert("g")
          .attr("class", "label")
          .attr("style", chunk5PVQY5BWF(chunk5FUZZQ4RParam59.labelStyle)),
        chunk5FUZZQ4RValue469;
      chunk5FUZZQ4RValue469 =
        chunk5FUZZQ4RParam59.label === undefined
          ? ""
          : typeof chunk5FUZZQ4RParam59.label == "string"
            ? chunk5FUZZQ4RParam59.label
            : chunk5FUZZQ4RParam59.label[0];
      let chunk5FUZZQ4RValue470 =
          !!chunk5FUZZQ4RParam59.icon || !!chunk5FUZZQ4RParam59.img,
        chunk5FUZZQ4RValue471 = chunk5FUZZQ4RParam59.labelType === "markdown",
        chunk5FUZZQ4RValue472 = await chunkU2HBQHQKA(
          chunk5FUZZQ4RValue468,
          chunkICPOFSXXJ(
            chunk5PVQY5BWD(chunk5FUZZQ4RValue469),
            _chunkICPOFSXXP(),
          ),
          {
            useHtmlLabels: chunk5FUZZQ4RValue466,
            width:
              chunk5FUZZQ4RParam59.width ||
              _chunkICPOFSXXP().flowchart?.wrappingWidth,
            classes: chunk5FUZZQ4RValue471 ? "markdown-node-label" : "",
            style: chunk5FUZZQ4RParam59.labelStyle,
            addSvgBackground: chunk5FUZZQ4RValue470,
            markdown: chunk5FUZZQ4RValue471,
          },
          _chunkICPOFSXXP(),
        ),
        chunk5FUZZQ4RValue473 = chunk5FUZZQ4RValue472.getBBox(),
        chunk5FUZZQ4RValue474 = (chunk5FUZZQ4RParam59?.padding ?? 0) / 2;
      if (chunk5FUZZQ4RValue466) {
        let chunk5FUZZQ4RValue1133 = chunk5FUZZQ4RValue472.children[0],
          chunk5FUZZQ4RValue1134 = Src(chunk5FUZZQ4RValue472);
        await chunkZZ45TVLET(chunk5FUZZQ4RValue1133, chunk5FUZZQ4RValue469);
        chunk5FUZZQ4RValue473 = chunk5FUZZQ4RValue1133.getBoundingClientRect();
        chunk5FUZZQ4RValue1134.attr("width", chunk5FUZZQ4RValue473.width);
        chunk5FUZZQ4RValue1134.attr("height", chunk5FUZZQ4RValue473.height);
      }
      return (
        chunk5FUZZQ4RValue466
          ? chunk5FUZZQ4RValue468.attr(
              "transform",
              "translate(" +
                -chunk5FUZZQ4RValue473.width / 2 +
                ", " +
                -chunk5FUZZQ4RValue473.height / 2 +
                ")",
            )
          : chunk5FUZZQ4RValue468.attr(
              "transform",
              "translate(0, " + -chunk5FUZZQ4RValue473.height / 2 + ")",
            ),
        chunk5FUZZQ4RParam59.centerLabel &&
          chunk5FUZZQ4RValue468.attr(
            "transform",
            "translate(" +
              -chunk5FUZZQ4RValue473.width / 2 +
              ", " +
              -chunk5FUZZQ4RValue473.height / 2 +
              ")",
          ),
        chunk5FUZZQ4RValue468.insert("rect", ":first-child"),
        {
          shapeSvg: chunk5FUZZQ4RValue467,
          bbox: chunk5FUZZQ4RValue473,
          halfPadding: chunk5FUZZQ4RValue474,
          label: chunk5FUZZQ4RValue468,
        }
      );
    },
    "labelHelper",
  ),
  chunk5FUZZQ4RValue1 = chunkAGHRB4JFN(
    async (
      chunk5FUZZQ4RParam126,
      chunk5FUZZQ4RParam127,
      chunk5FUZZQ4RParam128,
    ) => {
      let chunk5FUZZQ4RValue748 =
          chunk5FUZZQ4RParam128.useHtmlLabels ??
          chunkICPOFSXXT(_chunkICPOFSXXP()),
        chunk5FUZZQ4RValue749 = chunk5FUZZQ4RParam126
          .insert("g")
          .attr("class", "label")
          .attr("style", chunk5FUZZQ4RParam128.labelStyle || ""),
        chunk5FUZZQ4RValue750 = await chunkU2HBQHQKA(
          chunk5FUZZQ4RValue749,
          chunkICPOFSXXJ(
            chunk5PVQY5BWD(chunk5FUZZQ4RParam127),
            _chunkICPOFSXXP(),
          ),
          {
            useHtmlLabels: chunk5FUZZQ4RValue748,
            width:
              chunk5FUZZQ4RParam128.width ||
              _chunkICPOFSXXP()?.flowchart?.wrappingWidth,
            style: chunk5FUZZQ4RParam128.labelStyle,
            addSvgBackground:
              !!chunk5FUZZQ4RParam128.icon || !!chunk5FUZZQ4RParam128.img,
          },
        ),
        chunk5FUZZQ4RValue751 = chunk5FUZZQ4RValue750.getBBox(),
        chunk5FUZZQ4RValue752 = chunk5FUZZQ4RParam128.padding / 2;
      if (chunkICPOFSXXT(_chunkICPOFSXXP())) {
        let chunk5FUZZQ4RValue1153 = chunk5FUZZQ4RValue750.children[0],
          chunk5FUZZQ4RValue1154 = Src(chunk5FUZZQ4RValue750);
        chunk5FUZZQ4RValue751 = chunk5FUZZQ4RValue1153.getBoundingClientRect();
        chunk5FUZZQ4RValue1154.attr("width", chunk5FUZZQ4RValue751.width);
        chunk5FUZZQ4RValue1154.attr("height", chunk5FUZZQ4RValue751.height);
      }
      return (
        chunk5FUZZQ4RValue748
          ? chunk5FUZZQ4RValue749.attr(
              "transform",
              "translate(" +
                -chunk5FUZZQ4RValue751.width / 2 +
                ", " +
                -chunk5FUZZQ4RValue751.height / 2 +
                ")",
            )
          : chunk5FUZZQ4RValue749.attr(
              "transform",
              "translate(0, " + -chunk5FUZZQ4RValue751.height / 2 + ")",
            ),
        chunk5FUZZQ4RParam128.centerLabel &&
          chunk5FUZZQ4RValue749.attr(
            "transform",
            "translate(" +
              -chunk5FUZZQ4RValue751.width / 2 +
              ", " +
              -chunk5FUZZQ4RValue751.height / 2 +
              ")",
          ),
        chunk5FUZZQ4RValue749.insert("rect", ":first-child"),
        {
          shapeSvg: chunk5FUZZQ4RParam126,
          bbox: chunk5FUZZQ4RValue751,
          halfPadding: chunk5FUZZQ4RValue752,
          label: chunk5FUZZQ4RValue749,
        }
      );
    },
    "insertLabel",
  ),
  chunk5FUZZQ4RU = chunkAGHRB4JFN(
    (chunk5FUZZQ4RParam321, chunk5FUZZQ4RParam322) => {
      let chunk5FUZZQ4RValue1208 = chunk5FUZZQ4RParam322.node().getBBox();
      chunk5FUZZQ4RParam321.width = chunk5FUZZQ4RValue1208.width;
      chunk5FUZZQ4RParam321.height = chunk5FUZZQ4RValue1208.height;
    },
    "updateNodeBounds",
  ),
  chunk5FUZZQ4RValue2 = chunkAGHRB4JFN(
    (chunk5FUZZQ4RParam309, chunk5FUZZQ4RParam310) =>
      (chunk5FUZZQ4RParam309.look === "handDrawn" ? "rough-node" : "node") +
      " " +
      chunk5FUZZQ4RParam309.cssClasses +
      " " +
      (chunk5FUZZQ4RParam310 || ""),
    "getNodeClasses",
  );
function chunk5FUZZQ4RHelper1(chunk5FUZZQ4RParam314) {
  let chunk5FUZZQ4RValue1186 = chunk5FUZZQ4RParam314.map(
    (item, index) => `${index === 0 ? "M" : "L"}${item.x},${item.y}`,
  );
  return (chunk5FUZZQ4RValue1186.push("Z"), chunk5FUZZQ4RValue1186.join(" "));
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper1, "createPathFromPoints");
function chunk5FUZZQ4RHelper2(
  chunk5FUZZQ4RParam237,
  chunk5FUZZQ4RParam238,
  chunk5FUZZQ4RParam239,
  chunk5FUZZQ4RParam240,
  chunk5FUZZQ4RParam241,
  chunk5FUZZQ4RParam242,
) {
  let chunk5FUZZQ4RValue1049 = [],
    chunk5FUZZQ4RValue1050 = chunk5FUZZQ4RParam239 - chunk5FUZZQ4RParam237,
    chunk5FUZZQ4RValue1051 = chunk5FUZZQ4RParam240 - chunk5FUZZQ4RParam238,
    chunk5FUZZQ4RValue1052 = chunk5FUZZQ4RValue1050 / chunk5FUZZQ4RParam242,
    chunk5FUZZQ4RValue1053 = (2 * Math.PI) / chunk5FUZZQ4RValue1052,
    chunk5FUZZQ4RValue1054 = chunk5FUZZQ4RParam238 + chunk5FUZZQ4RValue1051 / 2;
  for (
    let chunk5FUZZQ4RValue1177 = 0;
    chunk5FUZZQ4RValue1177 <= 50;
    chunk5FUZZQ4RValue1177++
  ) {
    let chunk5FUZZQ4RValue1202 =
        chunk5FUZZQ4RParam237 +
        (chunk5FUZZQ4RValue1177 / 50) * chunk5FUZZQ4RValue1050,
      chunk5FUZZQ4RValue1203 =
        chunk5FUZZQ4RValue1054 +
        chunk5FUZZQ4RParam241 *
          Math.sin(
            chunk5FUZZQ4RValue1053 *
              (chunk5FUZZQ4RValue1202 - chunk5FUZZQ4RParam237),
          );
    chunk5FUZZQ4RValue1049.push({
      x: chunk5FUZZQ4RValue1202,
      y: chunk5FUZZQ4RValue1203,
    });
  }
  return chunk5FUZZQ4RValue1049;
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper2, "generateFullSineWavePoints");
function chunk5FUZZQ4RHelper3(
  chunk5FUZZQ4RParam250,
  chunk5FUZZQ4RParam251,
  chunk5FUZZQ4RParam252,
  chunk5FUZZQ4RParam253,
  chunk5FUZZQ4RParam254,
  chunk5FUZZQ4RParam255,
) {
  let chunk5FUZZQ4RValue1057 = [],
    chunk5FUZZQ4RValue1058 = (chunk5FUZZQ4RParam254 * Math.PI) / 180,
    chunk5FUZZQ4RValue1059 =
      ((chunk5FUZZQ4RParam255 * Math.PI) / 180 - chunk5FUZZQ4RValue1058) /
      (chunk5FUZZQ4RParam253 - 1);
  for (
    let chunk5FUZZQ4RValue1171 = 0;
    chunk5FUZZQ4RValue1171 < chunk5FUZZQ4RParam253;
    chunk5FUZZQ4RValue1171++
  ) {
    let chunk5FUZZQ4RValue1187 =
        chunk5FUZZQ4RValue1058 +
        chunk5FUZZQ4RValue1171 * chunk5FUZZQ4RValue1059,
      chunk5FUZZQ4RValue1188 =
        chunk5FUZZQ4RParam250 +
        chunk5FUZZQ4RParam252 * Math.cos(chunk5FUZZQ4RValue1187),
      chunk5FUZZQ4RValue1189 =
        chunk5FUZZQ4RParam251 +
        chunk5FUZZQ4RParam252 * Math.sin(chunk5FUZZQ4RValue1187);
    chunk5FUZZQ4RValue1057.push({
      x: -chunk5FUZZQ4RValue1188,
      y: -chunk5FUZZQ4RValue1189,
    });
  }
  return chunk5FUZZQ4RValue1057;
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper3, "generateCirclePoints");
function chunk5FUZZQ4RHelper4(chunk5FUZZQ4RParam133) {
  let chunk5FUZZQ4RValue772 = Array.from(
      chunk5FUZZQ4RParam133.childNodes,
    ).filter((item) => item.tagName === "path"),
    chunk5FUZZQ4RValue773 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path",
    ),
    chunk5FUZZQ4RValue774 = chunk5FUZZQ4RValue772
      .map((item) => item.getAttribute("d"))
      .filter((item) => item !== null)
      .join(" ");
  chunk5FUZZQ4RValue773.setAttribute("d", chunk5FUZZQ4RValue774);
  let chunk5FUZZQ4RValue775 = chunk5FUZZQ4RValue772.find(
      (item) => item.getAttribute("fill") !== "none",
    ),
    chunk5FUZZQ4RValue776 = chunk5FUZZQ4RValue772.find(
      (item) => item.getAttribute("stroke") !== "none",
    ),
    chunk5FUZZQ4RValue777 = chunkAGHRB4JFN(
      (chunk5FUZZQ4RParam420, chunk5FUZZQ4RParam421) =>
        chunk5FUZZQ4RParam420?.getAttribute(chunk5FUZZQ4RParam421) ?? undefined,
      "getAttr",
    );
  if (chunk5FUZZQ4RValue775) {
    let chunk5FUZZQ4RValue1150 = {
      fill: chunk5FUZZQ4RValue777(chunk5FUZZQ4RValue775, "fill"),
      "fill-opacity":
        chunk5FUZZQ4RValue777(chunk5FUZZQ4RValue775, "fill-opacity") ?? "1",
    };
    Object.entries(chunk5FUZZQ4RValue1150).forEach(
      ([chunk5FUZZQ4RParam383, chunk5FUZZQ4RParam384]) => {
        chunk5FUZZQ4RParam384 &&
          chunk5FUZZQ4RValue773.setAttribute(
            chunk5FUZZQ4RParam383,
            chunk5FUZZQ4RParam384,
          );
      },
    );
  }
  if (chunk5FUZZQ4RValue776) {
    let chunk5FUZZQ4RValue1083 = {
      stroke: chunk5FUZZQ4RValue777(chunk5FUZZQ4RValue776, "stroke"),
      "stroke-width":
        chunk5FUZZQ4RValue777(chunk5FUZZQ4RValue776, "stroke-width") ?? "1",
      "stroke-opacity":
        chunk5FUZZQ4RValue777(chunk5FUZZQ4RValue776, "stroke-opacity") ?? "1",
    };
    Object.entries(chunk5FUZZQ4RValue1083).forEach(
      ([chunk5FUZZQ4RParam385, chunk5FUZZQ4RParam386]) => {
        chunk5FUZZQ4RParam386 &&
          chunk5FUZZQ4RValue773.setAttribute(
            chunk5FUZZQ4RParam385,
            chunk5FUZZQ4RParam386,
          );
      },
    );
  }
  let chunk5FUZZQ4RValue778 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "g",
  );
  return (
    chunk5FUZZQ4RValue778.appendChild(chunk5FUZZQ4RValue773),
    chunk5FUZZQ4RValue778
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper4, "mergePaths");
var chunk5FUZZQ4RValue3 = chunkAGHRB4JFN(
    (chunk5FUZZQ4RParam198, chunk5FUZZQ4RParam199) => {
      var chunk5FUZZQ4RValue976 = chunk5FUZZQ4RParam198.x,
        chunk5FUZZQ4RValue977 = chunk5FUZZQ4RParam198.y,
        chunk5FUZZQ4RValue978 = chunk5FUZZQ4RParam199.x - chunk5FUZZQ4RValue976,
        chunk5FUZZQ4RValue979 = chunk5FUZZQ4RParam199.y - chunk5FUZZQ4RValue977,
        chunk5FUZZQ4RValue980 = chunk5FUZZQ4RParam198.width / 2,
        chunk5FUZZQ4RValue981 = chunk5FUZZQ4RParam198.height / 2,
        chunk5FUZZQ4RValue982,
        chunk5FUZZQ4RValue983;
      return (
        Math.abs(chunk5FUZZQ4RValue979) * chunk5FUZZQ4RValue980 >
        Math.abs(chunk5FUZZQ4RValue978) * chunk5FUZZQ4RValue981
          ? (chunk5FUZZQ4RValue979 < 0 &&
              (chunk5FUZZQ4RValue981 = -chunk5FUZZQ4RValue981),
            (chunk5FUZZQ4RValue982 =
              chunk5FUZZQ4RValue979 === 0
                ? 0
                : (chunk5FUZZQ4RValue981 * chunk5FUZZQ4RValue978) /
                  chunk5FUZZQ4RValue979),
            (chunk5FUZZQ4RValue983 = chunk5FUZZQ4RValue981))
          : (chunk5FUZZQ4RValue978 < 0 &&
              (chunk5FUZZQ4RValue980 = -chunk5FUZZQ4RValue980),
            (chunk5FUZZQ4RValue982 = chunk5FUZZQ4RValue980),
            (chunk5FUZZQ4RValue983 =
              chunk5FUZZQ4RValue978 === 0
                ? 0
                : (chunk5FUZZQ4RValue980 * chunk5FUZZQ4RValue979) /
                  chunk5FUZZQ4RValue978)),
        {
          x: chunk5FUZZQ4RValue976 + chunk5FUZZQ4RValue982,
          y: chunk5FUZZQ4RValue977 + chunk5FUZZQ4RValue983,
        }
      );
    },
    "intersectRect",
  ),
  chunk5FUZZQ4RR = chunkAGHRB4JFN(
    async (
      chunk5FUZZQ4RParam206,
      chunk5FUZZQ4RParam207,
      chunk5FUZZQ4RParam208,
      chunk5FUZZQ4RParam209 = false,
      chunk5FUZZQ4RParam210 = false,
    ) => {
      let chunk5FUZZQ4RValue1018 = chunk5FUZZQ4RParam207 || "";
      typeof chunk5FUZZQ4RValue1018 == "object" &&
        (chunk5FUZZQ4RValue1018 = chunk5FUZZQ4RValue1018[0]);
      let chunk5FUZZQ4RValue1019 = _chunkICPOFSXXP(),
        chunk5FUZZQ4RValue1020 = chunkICPOFSXXT(chunk5FUZZQ4RValue1019);
      return await chunkU2HBQHQKA(
        chunk5FUZZQ4RParam206,
        chunk5FUZZQ4RValue1018,
        {
          style: chunk5FUZZQ4RParam208,
          isTitle: chunk5FUZZQ4RParam209,
          useHtmlLabels: chunk5FUZZQ4RValue1020,
          markdown: false,
          isNode: chunk5FUZZQ4RParam210,
          width: 1 / 0,
        },
        chunk5FUZZQ4RValue1019,
      );
    },
    "createLabel",
  ),
  chunk5FUZZQ4RValue4 = chunkAGHRB4JFN(
    (
      chunk5FUZZQ4RParam184,
      chunk5FUZZQ4RParam185,
      chunk5FUZZQ4RParam186,
      chunk5FUZZQ4RParam187,
      chunk5FUZZQ4RParam188,
    ) =>
      [
        "M",
        chunk5FUZZQ4RParam184 + chunk5FUZZQ4RParam188,
        chunk5FUZZQ4RParam185,
        "H",
        chunk5FUZZQ4RParam184 + chunk5FUZZQ4RParam186 - chunk5FUZZQ4RParam188,
        "A",
        chunk5FUZZQ4RParam188,
        chunk5FUZZQ4RParam188,
        0,
        0,
        1,
        chunk5FUZZQ4RParam184 + chunk5FUZZQ4RParam186,
        chunk5FUZZQ4RParam185 + chunk5FUZZQ4RParam188,
        "V",
        chunk5FUZZQ4RParam185 + chunk5FUZZQ4RParam187 - chunk5FUZZQ4RParam188,
        "A",
        chunk5FUZZQ4RParam188,
        chunk5FUZZQ4RParam188,
        0,
        0,
        1,
        chunk5FUZZQ4RParam184 + chunk5FUZZQ4RParam186 - chunk5FUZZQ4RParam188,
        chunk5FUZZQ4RParam185 + chunk5FUZZQ4RParam187,
        "H",
        chunk5FUZZQ4RParam184 + chunk5FUZZQ4RParam188,
        "A",
        chunk5FUZZQ4RParam188,
        chunk5FUZZQ4RParam188,
        0,
        0,
        1,
        chunk5FUZZQ4RParam184,
        chunk5FUZZQ4RParam185 + chunk5FUZZQ4RParam187 - chunk5FUZZQ4RParam188,
        "V",
        chunk5FUZZQ4RParam185 + chunk5FUZZQ4RParam188,
        "A",
        chunk5FUZZQ4RParam188,
        chunk5FUZZQ4RParam188,
        0,
        0,
        1,
        chunk5FUZZQ4RParam184 + chunk5FUZZQ4RParam188,
        chunk5FUZZQ4RParam185,
        "Z",
      ].join(" "),
    "createRoundedRectPathD",
  ),
  chunk5FUZZQ4RValue5 = chunkAGHRB4JFN(async (chunk5FUZZQ4RParam23, event) => {
    chunkAGHRB4JFR.info("Creating subgraph rect for ", event.id, event);
    let chunk5FUZZQ4RValue243 = _chunkICPOFSXXP(),
      { themeVariables, handDrawnSeed } = chunk5FUZZQ4RValue243,
      { clusterBkg, clusterBorder } = themeVariables,
      { labelStyles, nodeStyles, borderStyles, backgroundStyles } =
        chunkX2U36JSPI(event),
      chunk5FUZZQ4RValue244 = chunk5FUZZQ4RParam23
        .insert("g")
        .attr("class", "cluster " + event.cssClasses)
        .attr("id", event.domId)
        .attr("data-look", event.look),
      chunk5FUZZQ4RValue245 = chunkICPOFSXXT(chunk5FUZZQ4RValue243),
      chunk5FUZZQ4RValue246 = chunk5FUZZQ4RValue244
        .insert("g")
        .attr("class", "cluster-label "),
      _chunk5FUZZQ4RS;
    _chunk5FUZZQ4RS =
      event.labelType === "markdown"
        ? await chunkU2HBQHQKA(chunk5FUZZQ4RValue246, event.label, {
            style: event.labelStyle,
            useHtmlLabels: chunk5FUZZQ4RValue245,
            isNode: true,
            width: event.width,
          })
        : await chunk5FUZZQ4RR(
            chunk5FUZZQ4RValue246,
            event.label,
            event.labelStyle || "",
            false,
            true,
          );
    let chunk5FUZZQ4RValue247 = _chunk5FUZZQ4RS.getBBox();
    if (chunkICPOFSXXT(chunk5FUZZQ4RValue243)) {
      let chunk5FUZZQ4RValue1155 = _chunk5FUZZQ4RS.children[0],
        chunk5FUZZQ4RValue1156 = Src(_chunk5FUZZQ4RS);
      chunk5FUZZQ4RValue247 = chunk5FUZZQ4RValue1155.getBoundingClientRect();
      chunk5FUZZQ4RValue1156.attr("width", chunk5FUZZQ4RValue247.width);
      chunk5FUZZQ4RValue1156.attr("height", chunk5FUZZQ4RValue247.height);
    }
    let _chunk5FUZZQ4RU =
      event.width <= chunk5FUZZQ4RValue247.width + event.padding
        ? chunk5FUZZQ4RValue247.width + event.padding
        : event.width;
    event.width <= chunk5FUZZQ4RValue247.width + event.padding
      ? (event.diff = (_chunk5FUZZQ4RU - event.width) / 2 - event.padding)
      : (event.diff = -event.padding);
    let chunk5FUZZQ4RValue248 = event.height,
      chunk5FUZZQ4RValue249 = event.x - _chunk5FUZZQ4RU / 2,
      chunk5FUZZQ4RValue250 = event.y - chunk5FUZZQ4RValue248 / 2;
    chunkAGHRB4JFR.trace("Data ", event, JSON.stringify(event));
    let chunk5FUZZQ4RValue251;
    if (event.look === "handDrawn") {
      let chunk5FUZZQ4RValue936 = rough.svg(chunk5FUZZQ4RValue244),
        chunk5FUZZQ4RValue937 = chunkX2U36JSPN(event, {
          roughness: 0.7,
          fill: clusterBkg,
          stroke: clusterBorder,
          fillWeight: 3,
          seed: handDrawnSeed,
        }),
        chunk5FUZZQ4RValue938 = chunk5FUZZQ4RValue936.path(
          chunk5FUZZQ4RValue4(
            chunk5FUZZQ4RValue249,
            chunk5FUZZQ4RValue250,
            _chunk5FUZZQ4RU,
            chunk5FUZZQ4RValue248,
            0,
          ),
          chunk5FUZZQ4RValue937,
        );
      chunk5FUZZQ4RValue251 = chunk5FUZZQ4RValue244.insert(
        () => (
          chunkAGHRB4JFR.debug("Rough node insert CXC", chunk5FUZZQ4RValue938),
          chunk5FUZZQ4RValue938
        ),
        ":first-child",
      );
      chunk5FUZZQ4RValue251
        .select("path:nth-child(2)")
        .attr("style", borderStyles.join(";"));
      chunk5FUZZQ4RValue251
        .select("path")
        .attr("style", backgroundStyles.join(";").replace("fill", "stroke"));
    } else {
      chunk5FUZZQ4RValue251 = chunk5FUZZQ4RValue244.insert(
        "rect",
        ":first-child",
      );
      chunk5FUZZQ4RValue251
        .attr("style", nodeStyles)
        .attr("rx", event.rx)
        .attr("ry", event.ry)
        .attr("x", chunk5FUZZQ4RValue249)
        .attr("y", chunk5FUZZQ4RValue250)
        .attr("width", _chunk5FUZZQ4RU)
        .attr("height", chunk5FUZZQ4RValue248);
    }
    let { subGraphTitleTopMargin } = chunkZZ45TVLEN(chunk5FUZZQ4RValue243);
    if (
      (chunk5FUZZQ4RValue246.attr(
        "transform",
        `translate(${event.x - chunk5FUZZQ4RValue247.width / 2}, ${event.y - event.height / 2 + subGraphTitleTopMargin})`,
      ),
      labelStyles)
    ) {
      let chunk5FUZZQ4RValue1220 = chunk5FUZZQ4RValue246.select("span");
      chunk5FUZZQ4RValue1220 &&
        chunk5FUZZQ4RValue1220.attr("style", labelStyles);
    }
    let chunk5FUZZQ4RValue252 = chunk5FUZZQ4RValue251.node().getBBox();
    return (
      (event.offsetX = 0),
      (event.width = chunk5FUZZQ4RValue252.width),
      (event.height = chunk5FUZZQ4RValue252.height),
      (event.offsetY = chunk5FUZZQ4RValue247.height - event.padding / 2),
      (event.intersect = function (chunk5FUZZQ4RParam415) {
        return chunk5FUZZQ4RValue3(event, chunk5FUZZQ4RParam415);
      }),
      {
        cluster: chunk5FUZZQ4RValue244,
        labelBBox: chunk5FUZZQ4RValue247,
      }
    );
  }, "rect"),
  chunk5FUZZQ4RValue6 = {
    rect: chunk5FUZZQ4RValue5,
    squareRect: chunk5FUZZQ4RValue5,
    roundedWithTitle: chunkAGHRB4JFN(async (chunk5FUZZQ4RParam13, event) => {
      let chunk5FUZZQ4RValue157 = _chunkICPOFSXXP(),
        { themeVariables, handDrawnSeed } = chunk5FUZZQ4RValue157,
        {
          altBackground,
          compositeBackground,
          compositeTitleBackground,
          nodeBorder,
        } = themeVariables,
        chunk5FUZZQ4RValue158 = chunk5FUZZQ4RParam13
          .insert("g")
          .attr("class", event.cssClasses)
          .attr("id", event.domId)
          .attr("data-id", event.id)
          .attr("data-look", event.look),
        chunk5FUZZQ4RValue159 = chunk5FUZZQ4RValue158.insert(
          "g",
          ":first-child",
        ),
        chunk5FUZZQ4RValue160 = chunk5FUZZQ4RValue158
          .insert("g")
          .attr("class", "cluster-label"),
        chunk5FUZZQ4RValue161 = chunk5FUZZQ4RValue158.append("rect"),
        chunk5FUZZQ4RValue162 = await chunk5FUZZQ4RR(
          chunk5FUZZQ4RValue160,
          event.label,
          event.labelStyle,
          undefined,
          true,
        ),
        chunk5FUZZQ4RValue163 = chunk5FUZZQ4RValue162.getBBox();
      if (chunkICPOFSXXT(chunk5FUZZQ4RValue157)) {
        let chunk5FUZZQ4RValue1146 = chunk5FUZZQ4RValue162.children[0],
          chunk5FUZZQ4RValue1147 = Src(chunk5FUZZQ4RValue162);
        chunk5FUZZQ4RValue163 = chunk5FUZZQ4RValue1146.getBoundingClientRect();
        chunk5FUZZQ4RValue1147.attr("width", chunk5FUZZQ4RValue163.width);
        chunk5FUZZQ4RValue1147.attr("height", chunk5FUZZQ4RValue163.height);
      }
      let chunk5FUZZQ4RValue164 = 0 * event.padding,
        chunk5FUZZQ4RValue165 = chunk5FUZZQ4RValue164 / 2,
        chunk5FUZZQ4RValue166 =
          (event.width <= chunk5FUZZQ4RValue163.width + event.padding
            ? chunk5FUZZQ4RValue163.width + event.padding
            : event.width) + chunk5FUZZQ4RValue164;
      event.width <= chunk5FUZZQ4RValue163.width + event.padding
        ? (event.diff =
            (chunk5FUZZQ4RValue166 - event.width) / 2 - event.padding)
        : (event.diff = -event.padding);
      let chunk5FUZZQ4RValue167 = event.height + chunk5FUZZQ4RValue164,
        _chunk5FUZZQ4RS =
          event.height +
          chunk5FUZZQ4RValue164 -
          chunk5FUZZQ4RValue163.height -
          6,
        chunk5FUZZQ4RValue168 = event.x - chunk5FUZZQ4RValue166 / 2,
        _chunk5FUZZQ4RU = event.y - chunk5FUZZQ4RValue167 / 2;
      event.width = chunk5FUZZQ4RValue166;
      let chunk5FUZZQ4RValue169 =
          event.y -
          event.height / 2 -
          chunk5FUZZQ4RValue165 +
          chunk5FUZZQ4RValue163.height +
          2,
        chunk5FUZZQ4RValue170;
      if (event.look === "handDrawn") {
        let chunk5FUZZQ4RValue871 = event.cssClasses.includes(
            "statediagram-cluster-alt",
          ),
          chunk5FUZZQ4RValue872 = rough.svg(chunk5FUZZQ4RValue158),
          chunk5FUZZQ4RValue873 =
            event.rx || event.ry
              ? chunk5FUZZQ4RValue872.path(
                  chunk5FUZZQ4RValue4(
                    chunk5FUZZQ4RValue168,
                    _chunk5FUZZQ4RU,
                    chunk5FUZZQ4RValue166,
                    chunk5FUZZQ4RValue167,
                    10,
                  ),
                  {
                    roughness: 0.7,
                    fill: compositeTitleBackground,
                    fillStyle: "solid",
                    stroke: nodeBorder,
                    seed: handDrawnSeed,
                  },
                )
              : chunk5FUZZQ4RValue872.rectangle(
                  chunk5FUZZQ4RValue168,
                  _chunk5FUZZQ4RU,
                  chunk5FUZZQ4RValue166,
                  chunk5FUZZQ4RValue167,
                  {
                    seed: handDrawnSeed,
                  },
                );
        chunk5FUZZQ4RValue170 = chunk5FUZZQ4RValue158.insert(
          () => chunk5FUZZQ4RValue873,
          ":first-child",
        );
        let chunk5FUZZQ4RValue874 = chunk5FUZZQ4RValue872.rectangle(
          chunk5FUZZQ4RValue168,
          chunk5FUZZQ4RValue169,
          chunk5FUZZQ4RValue166,
          _chunk5FUZZQ4RS,
          {
            fill: chunk5FUZZQ4RValue871 ? altBackground : compositeBackground,
            fillStyle: chunk5FUZZQ4RValue871 ? "hachure" : "solid",
            stroke: nodeBorder,
            seed: handDrawnSeed,
          },
        );
        chunk5FUZZQ4RValue170 = chunk5FUZZQ4RValue158.insert(
          () => chunk5FUZZQ4RValue873,
          ":first-child",
        );
        chunk5FUZZQ4RValue161 = chunk5FUZZQ4RValue158.insert(
          () => chunk5FUZZQ4RValue874,
        );
      } else {
        chunk5FUZZQ4RValue170 = chunk5FUZZQ4RValue159.insert(
          "rect",
          ":first-child",
        );
        chunk5FUZZQ4RValue170
          .attr("class", "outer")
          .attr("x", chunk5FUZZQ4RValue168)
          .attr("y", _chunk5FUZZQ4RU)
          .attr("width", chunk5FUZZQ4RValue166)
          .attr("height", chunk5FUZZQ4RValue167)
          .attr("data-look", event.look);
        chunk5FUZZQ4RValue161
          .attr("class", "inner")
          .attr("x", chunk5FUZZQ4RValue168)
          .attr("y", chunk5FUZZQ4RValue169)
          .attr("width", chunk5FUZZQ4RValue166)
          .attr("height", _chunk5FUZZQ4RS);
      }
      return (
        chunk5FUZZQ4RValue160.attr(
          "transform",
          `translate(${event.x - chunk5FUZZQ4RValue163.width / 2}, ${_chunk5FUZZQ4RU + 1 - (chunkICPOFSXXT(chunk5FUZZQ4RValue157) ? 0 : 3)})`,
        ),
        (event.height = chunk5FUZZQ4RValue170.node().getBBox().height),
        (event.offsetX = 0),
        (event.offsetY = chunk5FUZZQ4RValue163.height - event.padding / 2),
        (event.labelBBox = chunk5FUZZQ4RValue163),
        (event.intersect = function (chunk5FUZZQ4RParam387) {
          return chunk5FUZZQ4RValue3(event, chunk5FUZZQ4RParam387);
        }),
        {
          cluster: chunk5FUZZQ4RValue158,
          labelBBox: chunk5FUZZQ4RValue163,
        }
      );
    }, "roundedWithTitle"),
    noteGroup: chunkAGHRB4JFN(
      (chunk5FUZZQ4RParam175, chunk5FUZZQ4RParam176) => {
        let chunk5FUZZQ4RValue875 = chunk5FUZZQ4RParam175
            .insert("g")
            .attr("class", "note-cluster")
            .attr("id", chunk5FUZZQ4RParam176.domId),
          chunk5FUZZQ4RValue876 = chunk5FUZZQ4RValue875.insert(
            "rect",
            ":first-child",
          ),
          chunk5FUZZQ4RValue877 = 0 * chunk5FUZZQ4RParam176.padding,
          chunk5FUZZQ4RValue878 = chunk5FUZZQ4RValue877 / 2;
        chunk5FUZZQ4RValue876
          .attr("rx", chunk5FUZZQ4RParam176.rx)
          .attr("ry", chunk5FUZZQ4RParam176.ry)
          .attr(
            "x",
            chunk5FUZZQ4RParam176.x -
              chunk5FUZZQ4RParam176.width / 2 -
              chunk5FUZZQ4RValue878,
          )
          .attr(
            "y",
            chunk5FUZZQ4RParam176.y -
              chunk5FUZZQ4RParam176.height / 2 -
              chunk5FUZZQ4RValue878,
          )
          .attr("width", chunk5FUZZQ4RParam176.width + chunk5FUZZQ4RValue877)
          .attr("height", chunk5FUZZQ4RParam176.height + chunk5FUZZQ4RValue877)
          .attr("fill", "none");
        let chunk5FUZZQ4RValue879 = chunk5FUZZQ4RValue876.node().getBBox();
        return (
          (chunk5FUZZQ4RParam176.width = chunk5FUZZQ4RValue879.width),
          (chunk5FUZZQ4RParam176.height = chunk5FUZZQ4RValue879.height),
          (chunk5FUZZQ4RParam176.intersect = function (chunk5FUZZQ4RParam388) {
            return chunk5FUZZQ4RValue3(
              chunk5FUZZQ4RParam176,
              chunk5FUZZQ4RParam388,
            );
          }),
          {
            cluster: chunk5FUZZQ4RValue875,
            labelBBox: {
              width: 0,
              height: 0,
            },
          }
        );
      },
      "noteGroup",
    ),
    divider: chunkAGHRB4JFN((chunk5FUZZQ4RParam82, event) => {
      let { themeVariables, handDrawnSeed } = _chunkICPOFSXXP(),
        { nodeBorder } = themeVariables,
        chunk5FUZZQ4RValue579 = chunk5FUZZQ4RParam82
          .insert("g")
          .attr("class", event.cssClasses)
          .attr("id", event.domId)
          .attr("data-look", event.look),
        chunk5FUZZQ4RValue580 = chunk5FUZZQ4RValue579.insert(
          "g",
          ":first-child",
        ),
        chunk5FUZZQ4RValue581 = 0 * event.padding,
        chunk5FUZZQ4RValue582 = event.width + chunk5FUZZQ4RValue581;
      event.diff = -event.padding;
      let chunk5FUZZQ4RValue583 = event.height + chunk5FUZZQ4RValue581,
        chunk5FUZZQ4RValue584 = event.x - chunk5FUZZQ4RValue582 / 2,
        chunk5FUZZQ4RValue585 = event.y - chunk5FUZZQ4RValue583 / 2;
      event.width = chunk5FUZZQ4RValue582;
      let chunk5FUZZQ4RValue586;
      if (event.look === "handDrawn") {
        let chunk5FUZZQ4RValue1061 = rough
          .svg(chunk5FUZZQ4RValue579)
          .rectangle(
            chunk5FUZZQ4RValue584,
            chunk5FUZZQ4RValue585,
            chunk5FUZZQ4RValue582,
            chunk5FUZZQ4RValue583,
            {
              fill: "lightgrey",
              roughness: 0.5,
              strokeLineDash: [5],
              stroke: nodeBorder,
              seed: handDrawnSeed,
            },
          );
        chunk5FUZZQ4RValue586 = chunk5FUZZQ4RValue579.insert(
          () => chunk5FUZZQ4RValue1061,
          ":first-child",
        );
      } else {
        chunk5FUZZQ4RValue586 = chunk5FUZZQ4RValue580.insert(
          "rect",
          ":first-child",
        );
        let chunk5FUZZQ4RValue1028 = "outer";
        chunk5FUZZQ4RValue1028 = (event.look, "divider");
        chunk5FUZZQ4RValue586
          .attr("class", chunk5FUZZQ4RValue1028)
          .attr("x", chunk5FUZZQ4RValue584)
          .attr("y", chunk5FUZZQ4RValue585)
          .attr("width", chunk5FUZZQ4RValue582)
          .attr("height", chunk5FUZZQ4RValue583)
          .attr("data-look", event.look);
      }
      return (
        (event.height = chunk5FUZZQ4RValue586.node().getBBox().height),
        (event.offsetX = 0),
        (event.offsetY = 0),
        (event.intersect = function (chunk5FUZZQ4RParam389) {
          return chunk5FUZZQ4RValue3(event, chunk5FUZZQ4RParam389);
        }),
        {
          cluster: chunk5FUZZQ4RValue579,
          labelBBox: {},
        }
      );
    }, "divider"),
    kanbanSection: chunkAGHRB4JFN(async (chunk5FUZZQ4RParam20, event) => {
      chunkAGHRB4JFR.info("Creating subgraph rect for ", event.id, event);
      let chunk5FUZZQ4RValue217 = _chunkICPOFSXXP(),
        { themeVariables, handDrawnSeed } = chunk5FUZZQ4RValue217,
        { clusterBkg, clusterBorder } = themeVariables,
        { labelStyles, nodeStyles, borderStyles, backgroundStyles } =
          chunkX2U36JSPI(event),
        chunk5FUZZQ4RValue218 = chunk5FUZZQ4RParam20
          .insert("g")
          .attr("class", "cluster " + event.cssClasses)
          .attr("id", event.domId)
          .attr("data-look", event.look),
        chunk5FUZZQ4RValue219 = chunkICPOFSXXT(chunk5FUZZQ4RValue217),
        chunk5FUZZQ4RValue220 = chunk5FUZZQ4RValue218
          .insert("g")
          .attr("class", "cluster-label "),
        _chunk5FUZZQ4RS = await chunkU2HBQHQKA(
          chunk5FUZZQ4RValue220,
          event.label,
          {
            style: event.labelStyle,
            useHtmlLabels: chunk5FUZZQ4RValue219,
            isNode: true,
            width: event.width,
          },
        ),
        chunk5FUZZQ4RValue221 = _chunk5FUZZQ4RS.getBBox();
      if (chunkICPOFSXXT(chunk5FUZZQ4RValue217)) {
        let chunk5FUZZQ4RValue1148 = _chunk5FUZZQ4RS.children[0],
          chunk5FUZZQ4RValue1149 = Src(_chunk5FUZZQ4RS);
        chunk5FUZZQ4RValue221 = chunk5FUZZQ4RValue1148.getBoundingClientRect();
        chunk5FUZZQ4RValue1149.attr("width", chunk5FUZZQ4RValue221.width);
        chunk5FUZZQ4RValue1149.attr("height", chunk5FUZZQ4RValue221.height);
      }
      let _chunk5FUZZQ4RU =
        event.width <= chunk5FUZZQ4RValue221.width + event.padding
          ? chunk5FUZZQ4RValue221.width + event.padding
          : event.width;
      event.width <= chunk5FUZZQ4RValue221.width + event.padding
        ? (event.diff = (_chunk5FUZZQ4RU - event.width) / 2 - event.padding)
        : (event.diff = -event.padding);
      let chunk5FUZZQ4RValue222 = event.height,
        chunk5FUZZQ4RValue223 = event.x - _chunk5FUZZQ4RU / 2,
        chunk5FUZZQ4RValue224 = event.y - chunk5FUZZQ4RValue222 / 2;
      chunkAGHRB4JFR.trace("Data ", event, JSON.stringify(event));
      let chunk5FUZZQ4RValue225;
      if (event.look === "handDrawn") {
        let chunk5FUZZQ4RValue921 = rough.svg(chunk5FUZZQ4RValue218),
          chunk5FUZZQ4RValue922 = chunkX2U36JSPN(event, {
            roughness: 0.7,
            fill: clusterBkg,
            stroke: clusterBorder,
            fillWeight: 4,
            seed: handDrawnSeed,
          }),
          chunk5FUZZQ4RValue923 = chunk5FUZZQ4RValue921.path(
            chunk5FUZZQ4RValue4(
              chunk5FUZZQ4RValue223,
              chunk5FUZZQ4RValue224,
              _chunk5FUZZQ4RU,
              chunk5FUZZQ4RValue222,
              event.rx,
            ),
            chunk5FUZZQ4RValue922,
          );
        chunk5FUZZQ4RValue225 = chunk5FUZZQ4RValue218.insert(
          () => (
            chunkAGHRB4JFR.debug(
              "Rough node insert CXC",
              chunk5FUZZQ4RValue923,
            ),
            chunk5FUZZQ4RValue923
          ),
          ":first-child",
        );
        chunk5FUZZQ4RValue225
          .select("path:nth-child(2)")
          .attr("style", borderStyles.join(";"));
        chunk5FUZZQ4RValue225
          .select("path")
          .attr("style", backgroundStyles.join(";").replace("fill", "stroke"));
      } else {
        chunk5FUZZQ4RValue225 = chunk5FUZZQ4RValue218.insert(
          "rect",
          ":first-child",
        );
        chunk5FUZZQ4RValue225
          .attr("style", nodeStyles)
          .attr("rx", event.rx)
          .attr("ry", event.ry)
          .attr("x", chunk5FUZZQ4RValue223)
          .attr("y", chunk5FUZZQ4RValue224)
          .attr("width", _chunk5FUZZQ4RU)
          .attr("height", chunk5FUZZQ4RValue222);
      }
      let { subGraphTitleTopMargin } = chunkZZ45TVLEN(chunk5FUZZQ4RValue217);
      if (
        (chunk5FUZZQ4RValue220.attr(
          "transform",
          `translate(${event.x - chunk5FUZZQ4RValue221.width / 2}, ${event.y - event.height / 2 + subGraphTitleTopMargin})`,
        ),
        labelStyles)
      ) {
        let chunk5FUZZQ4RValue1215 = chunk5FUZZQ4RValue220.select("span");
        chunk5FUZZQ4RValue1215 &&
          chunk5FUZZQ4RValue1215.attr("style", labelStyles);
      }
      let _chunk5FUZZQ4RR = chunk5FUZZQ4RValue225.node().getBBox();
      return (
        (event.offsetX = 0),
        (event.width = _chunk5FUZZQ4RR.width),
        (event.height = _chunk5FUZZQ4RR.height),
        (event.offsetY = chunk5FUZZQ4RValue221.height - event.padding / 2),
        (event.intersect = function (chunk5FUZZQ4RParam390) {
          return chunk5FUZZQ4RValue3(event, chunk5FUZZQ4RParam390);
        }),
        {
          cluster: chunk5FUZZQ4RValue218,
          labelBBox: chunk5FUZZQ4RValue221,
        }
      );
    }, "kanbanSection"),
  },
  chunk5FUZZQ4RValue7 = new Map();
export const chunk5FUZZQ4RT = chunkAGHRB4JFN(() => {
  chunk5FUZZQ4RValue7 = new Map();
}, "clear");
export const chunk5FUZZQ4RI = chunkAGHRB4JFN(
  async (chunk5FUZZQ4RParam318, chunk5FUZZQ4RParam319) => {
    let chunk5FUZZQ4RValue1207 = await chunk5FUZZQ4RValue6[
      chunk5FUZZQ4RParam319.shape || "rect"
    ](chunk5FUZZQ4RParam318, chunk5FUZZQ4RParam319);
    return (
      chunk5FUZZQ4RValue7.set(chunk5FUZZQ4RParam319.id, chunk5FUZZQ4RValue1207),
      chunk5FUZZQ4RValue1207
    );
  },
  "insertCluster",
);
function chunk5FUZZQ4RHelper5(chunk5FUZZQ4RParam416, chunk5FUZZQ4RParam417) {
  return chunk5FUZZQ4RParam416.intersect(chunk5FUZZQ4RParam417);
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper5, "intersectNode");
var chunk5FUZZQ4RValue8 = chunk5FUZZQ4RHelper5;
function chunk5FUZZQ4RHelper6(
  chunk5FUZZQ4RParam233,
  chunk5FUZZQ4RParam234,
  chunk5FUZZQ4RParam235,
  chunk5FUZZQ4RParam236,
) {
  var chunk5FUZZQ4RValue1042 = chunk5FUZZQ4RParam233.x,
    chunk5FUZZQ4RValue1043 = chunk5FUZZQ4RParam233.y,
    chunk5FUZZQ4RValue1044 = chunk5FUZZQ4RValue1042 - chunk5FUZZQ4RParam236.x,
    chunk5FUZZQ4RValue1045 = chunk5FUZZQ4RValue1043 - chunk5FUZZQ4RParam236.y,
    chunk5FUZZQ4RValue1046 = Math.sqrt(
      chunk5FUZZQ4RParam234 *
        chunk5FUZZQ4RParam234 *
        chunk5FUZZQ4RValue1045 *
        chunk5FUZZQ4RValue1045 +
        chunk5FUZZQ4RParam235 *
          chunk5FUZZQ4RParam235 *
          chunk5FUZZQ4RValue1044 *
          chunk5FUZZQ4RValue1044,
    ),
    chunk5FUZZQ4RValue1047 = Math.abs(
      (chunk5FUZZQ4RParam234 * chunk5FUZZQ4RParam235 * chunk5FUZZQ4RValue1044) /
        chunk5FUZZQ4RValue1046,
    );
  chunk5FUZZQ4RParam236.x < chunk5FUZZQ4RValue1042 &&
    (chunk5FUZZQ4RValue1047 = -chunk5FUZZQ4RValue1047);
  var chunk5FUZZQ4RValue1048 = Math.abs(
    (chunk5FUZZQ4RParam234 * chunk5FUZZQ4RParam235 * chunk5FUZZQ4RValue1045) /
      chunk5FUZZQ4RValue1046,
  );
  return (
    chunk5FUZZQ4RParam236.y < chunk5FUZZQ4RValue1043 &&
      (chunk5FUZZQ4RValue1048 = -chunk5FUZZQ4RValue1048),
    {
      x: chunk5FUZZQ4RValue1042 + chunk5FUZZQ4RValue1047,
      y: chunk5FUZZQ4RValue1043 + chunk5FUZZQ4RValue1048,
    }
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper6, "intersectEllipse");
var chunk5FUZZQ4RValue9 = chunk5FUZZQ4RHelper6;
function chunk5FUZZQ4RHelper7(
  chunk5FUZZQ4RParam399,
  chunk5FUZZQ4RParam400,
  chunk5FUZZQ4RParam401,
) {
  return chunk5FUZZQ4RValue9(
    chunk5FUZZQ4RParam399,
    chunk5FUZZQ4RParam400,
    chunk5FUZZQ4RParam400,
    chunk5FUZZQ4RParam401,
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper7, "intersectCircle");
var chunk5FUZZQ4RValue10 = chunk5FUZZQ4RHelper7;
function chunk5FUZZQ4RHelper8(
  chunk5FUZZQ4RParam171,
  chunk5FUZZQ4RParam172,
  chunk5FUZZQ4RParam173,
  chunk5FUZZQ4RParam174,
) {
  {
    let chunk5FUZZQ4RValue880 =
        chunk5FUZZQ4RParam172.y - chunk5FUZZQ4RParam171.y,
      chunk5FUZZQ4RValue881 = chunk5FUZZQ4RParam171.x - chunk5FUZZQ4RParam172.x,
      chunk5FUZZQ4RValue882 =
        chunk5FUZZQ4RParam172.x * chunk5FUZZQ4RParam171.y -
        chunk5FUZZQ4RParam171.x * chunk5FUZZQ4RParam172.y,
      chunk5FUZZQ4RValue883 =
        chunk5FUZZQ4RValue880 * chunk5FUZZQ4RParam173.x +
        chunk5FUZZQ4RValue881 * chunk5FUZZQ4RParam173.y +
        chunk5FUZZQ4RValue882,
      chunk5FUZZQ4RValue884 =
        chunk5FUZZQ4RValue880 * chunk5FUZZQ4RParam174.x +
        chunk5FUZZQ4RValue881 * chunk5FUZZQ4RParam174.y +
        chunk5FUZZQ4RValue882;
    if (
      chunk5FUZZQ4RValue883 !== 0 &&
      chunk5FUZZQ4RValue884 !== 0 &&
      chunk5FUZZQ4RHelper9(chunk5FUZZQ4RValue883, chunk5FUZZQ4RValue884)
    )
      return;
    let chunk5FUZZQ4RValue886 =
        chunk5FUZZQ4RParam174.y - chunk5FUZZQ4RParam173.y,
      chunk5FUZZQ4RValue887 = chunk5FUZZQ4RParam173.x - chunk5FUZZQ4RParam174.x,
      chunk5FUZZQ4RValue888 =
        chunk5FUZZQ4RParam174.x * chunk5FUZZQ4RParam173.y -
        chunk5FUZZQ4RParam173.x * chunk5FUZZQ4RParam174.y,
      chunk5FUZZQ4RValue889 =
        chunk5FUZZQ4RValue886 * chunk5FUZZQ4RParam171.x +
        chunk5FUZZQ4RValue887 * chunk5FUZZQ4RParam171.y +
        chunk5FUZZQ4RValue888,
      chunk5FUZZQ4RValue890 =
        chunk5FUZZQ4RValue886 * chunk5FUZZQ4RParam172.x +
        chunk5FUZZQ4RValue887 * chunk5FUZZQ4RParam172.y +
        chunk5FUZZQ4RValue888;
    if (
      Math.abs(chunk5FUZZQ4RValue889) < 1e-6 &&
      Math.abs(chunk5FUZZQ4RValue890) < 1e-6 &&
      chunk5FUZZQ4RHelper9(chunk5FUZZQ4RValue889, chunk5FUZZQ4RValue890)
    )
      return;
    let chunk5FUZZQ4RValue891 =
      chunk5FUZZQ4RValue880 * chunk5FUZZQ4RValue887 -
      chunk5FUZZQ4RValue886 * chunk5FUZZQ4RValue881;
    if (chunk5FUZZQ4RValue891 === 0) return;
    let chunk5FUZZQ4RValue892 = Math.abs(chunk5FUZZQ4RValue891 / 2),
      chunk5FUZZQ4RValue893 =
        chunk5FUZZQ4RValue881 * chunk5FUZZQ4RValue888 -
        chunk5FUZZQ4RValue887 * chunk5FUZZQ4RValue882,
      chunk5FUZZQ4RValue894 =
        chunk5FUZZQ4RValue893 < 0
          ? (chunk5FUZZQ4RValue893 - chunk5FUZZQ4RValue892) /
            chunk5FUZZQ4RValue891
          : (chunk5FUZZQ4RValue893 + chunk5FUZZQ4RValue892) /
            chunk5FUZZQ4RValue891;
    return (
      (chunk5FUZZQ4RValue893 =
        chunk5FUZZQ4RValue886 * chunk5FUZZQ4RValue882 -
        chunk5FUZZQ4RValue880 * chunk5FUZZQ4RValue888),
      {
        x: chunk5FUZZQ4RValue894,
        y:
          chunk5FUZZQ4RValue893 < 0
            ? (chunk5FUZZQ4RValue893 - chunk5FUZZQ4RValue892) /
              chunk5FUZZQ4RValue891
            : (chunk5FUZZQ4RValue893 + chunk5FUZZQ4RValue892) /
              chunk5FUZZQ4RValue891,
      }
    );
  }
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper8, "intersectLine");
function chunk5FUZZQ4RHelper9(chunk5FUZZQ4RParam418, chunk5FUZZQ4RParam419) {
  return chunk5FUZZQ4RParam418 * chunk5FUZZQ4RParam419 > 0;
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper9, "sameSign");
var chunk5FUZZQ4RValue11 = chunk5FUZZQ4RHelper8;
function chunk5FUZZQ4RHelper10(
  chunk5FUZZQ4RParam151,
  chunk5FUZZQ4RParam152,
  chunk5FUZZQ4RParam153,
) {
  let chunk5FUZZQ4RValue832 = chunk5FUZZQ4RParam151.x,
    chunk5FUZZQ4RValue833 = chunk5FUZZQ4RParam151.y,
    chunk5FUZZQ4RValue834 = [],
    chunk5FUZZQ4RValue835 = 1 / 0,
    chunk5FUZZQ4RValue836 = 1 / 0;
  typeof chunk5FUZZQ4RParam152.forEach == "function"
    ? chunk5FUZZQ4RParam152.forEach(function (item) {
        chunk5FUZZQ4RValue835 = Math.min(chunk5FUZZQ4RValue835, item.x);
        chunk5FUZZQ4RValue836 = Math.min(chunk5FUZZQ4RValue836, item.y);
      })
    : ((chunk5FUZZQ4RValue835 = Math.min(
        chunk5FUZZQ4RValue835,
        chunk5FUZZQ4RParam152.x,
      )),
      (chunk5FUZZQ4RValue836 = Math.min(
        chunk5FUZZQ4RValue836,
        chunk5FUZZQ4RParam152.y,
      )));
  let chunk5FUZZQ4RValue837 =
      chunk5FUZZQ4RValue832 -
      chunk5FUZZQ4RParam151.width / 2 -
      chunk5FUZZQ4RValue835,
    chunk5FUZZQ4RValue838 =
      chunk5FUZZQ4RValue833 -
      chunk5FUZZQ4RParam151.height / 2 -
      chunk5FUZZQ4RValue836;
  for (
    let chunk5FUZZQ4RValue1130 = 0;
    chunk5FUZZQ4RValue1130 < chunk5FUZZQ4RParam152.length;
    chunk5FUZZQ4RValue1130++
  ) {
    let chunk5FUZZQ4RValue1157 = chunk5FUZZQ4RParam152[chunk5FUZZQ4RValue1130],
      chunk5FUZZQ4RValue1158 =
        chunk5FUZZQ4RParam152[
          chunk5FUZZQ4RValue1130 < chunk5FUZZQ4RParam152.length - 1
            ? chunk5FUZZQ4RValue1130 + 1
            : 0
        ],
      chunk5FUZZQ4RValue1159 = chunk5FUZZQ4RValue11(
        chunk5FUZZQ4RParam151,
        chunk5FUZZQ4RParam153,
        {
          x: chunk5FUZZQ4RValue837 + chunk5FUZZQ4RValue1157.x,
          y: chunk5FUZZQ4RValue838 + chunk5FUZZQ4RValue1157.y,
        },
        {
          x: chunk5FUZZQ4RValue837 + chunk5FUZZQ4RValue1158.x,
          y: chunk5FUZZQ4RValue838 + chunk5FUZZQ4RValue1158.y,
        },
      );
    chunk5FUZZQ4RValue1159 &&
      chunk5FUZZQ4RValue834.push(chunk5FUZZQ4RValue1159);
  }
  return chunk5FUZZQ4RValue834.length
    ? (chunk5FUZZQ4RValue834.length > 1 &&
        chunk5FUZZQ4RValue834.sort(
          function (chunk5FUZZQ4RParam265, chunk5FUZZQ4RParam266) {
            let chunk5FUZZQ4RValue1066 =
                chunk5FUZZQ4RParam265.x - chunk5FUZZQ4RParam153.x,
              chunk5FUZZQ4RValue1067 =
                chunk5FUZZQ4RParam265.y - chunk5FUZZQ4RParam153.y,
              chunk5FUZZQ4RValue1068 = Math.sqrt(
                chunk5FUZZQ4RValue1066 * chunk5FUZZQ4RValue1066 +
                  chunk5FUZZQ4RValue1067 * chunk5FUZZQ4RValue1067,
              ),
              chunk5FUZZQ4RValue1069 =
                chunk5FUZZQ4RParam266.x - chunk5FUZZQ4RParam153.x,
              chunk5FUZZQ4RValue1070 =
                chunk5FUZZQ4RParam266.y - chunk5FUZZQ4RParam153.y,
              chunk5FUZZQ4RValue1071 = Math.sqrt(
                chunk5FUZZQ4RValue1069 * chunk5FUZZQ4RValue1069 +
                  chunk5FUZZQ4RValue1070 * chunk5FUZZQ4RValue1070,
              );
            return chunk5FUZZQ4RValue1068 < chunk5FUZZQ4RValue1071
              ? -1
              : chunk5FUZZQ4RValue1068 === chunk5FUZZQ4RValue1071
                ? 0
                : 1;
          },
        ),
      chunk5FUZZQ4RValue834[0])
    : chunk5FUZZQ4RParam151;
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper10, "intersectPolygon");
var chunk5FUZZQ4RValue12 = {
  node: chunk5FUZZQ4RValue8,
  circle: chunk5FUZZQ4RValue10,
  ellipse: chunk5FUZZQ4RValue9,
  polygon: chunk5FUZZQ4RHelper10,
  rect: chunk5FUZZQ4RValue3,
};
function chunk5FUZZQ4RHelper11(chunk5FUZZQ4RParam180, chunk5FUZZQ4RParam181) {
  let { labelStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam181);
  chunk5FUZZQ4RParam181.labelStyle = labelStyles;
  let chunk5FUZZQ4RValue900 = chunk5FUZZQ4RValue2(chunk5FUZZQ4RParam181),
    chunk5FUZZQ4RValue901 = chunk5FUZZQ4RValue900;
  chunk5FUZZQ4RValue900 || (chunk5FUZZQ4RValue901 = "anchor");
  let chunk5FUZZQ4RValue902 = chunk5FUZZQ4RParam180
      .insert("g")
      .attr("class", chunk5FUZZQ4RValue901)
      .attr("id", chunk5FUZZQ4RParam181.domId || chunk5FUZZQ4RParam181.id),
    { cssStyles } = chunk5FUZZQ4RParam181,
    chunk5FUZZQ4RValue903 = rough.svg(chunk5FUZZQ4RValue902),
    chunk5FUZZQ4RValue904 = chunkX2U36JSPN(chunk5FUZZQ4RParam181, {
      fill: "black",
      stroke: "none",
      fillStyle: "solid",
    });
  chunk5FUZZQ4RParam181.look !== "handDrawn" &&
    (chunk5FUZZQ4RValue904.roughness = 0);
  let chunk5FUZZQ4RValue905 = chunk5FUZZQ4RValue903.circle(
      0,
      0,
      2,
      chunk5FUZZQ4RValue904,
    ),
    chunk5FUZZQ4RValue906 = chunk5FUZZQ4RValue902.insert(
      () => chunk5FUZZQ4RValue905,
      ":first-child",
    );
  return (
    chunk5FUZZQ4RValue906
      .attr("class", "anchor")
      .attr("style", chunk5PVQY5BWF(cssStyles)),
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam181, chunk5FUZZQ4RValue906),
    (chunk5FUZZQ4RParam181.intersect = function (chunk5FUZZQ4RParam345) {
      return (
        chunkAGHRB4JFR.info(
          "Circle intersect",
          chunk5FUZZQ4RParam181,
          1,
          chunk5FUZZQ4RParam345,
        ),
        chunk5FUZZQ4RValue12.circle(
          chunk5FUZZQ4RParam181,
          1,
          chunk5FUZZQ4RParam345,
        )
      );
    }),
    chunk5FUZZQ4RValue902
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper11, "anchor");
function chunk5FUZZQ4RHelper12(
  chunk5FUZZQ4RParam156,
  chunk5FUZZQ4RParam157,
  chunk5FUZZQ4RParam158,
  chunk5FUZZQ4RParam159,
  chunk5FUZZQ4RParam160,
  chunk5FUZZQ4RParam161,
  chunk5FUZZQ4RParam162,
) {
  let chunk5FUZZQ4RValue847 =
      (chunk5FUZZQ4RParam156 + chunk5FUZZQ4RParam158) / 2,
    chunk5FUZZQ4RValue848 = (chunk5FUZZQ4RParam157 + chunk5FUZZQ4RParam159) / 2,
    chunk5FUZZQ4RValue849 = Math.atan2(
      chunk5FUZZQ4RParam159 - chunk5FUZZQ4RParam157,
      chunk5FUZZQ4RParam158 - chunk5FUZZQ4RParam156,
    ),
    chunk5FUZZQ4RValue850 = (chunk5FUZZQ4RParam158 - chunk5FUZZQ4RParam156) / 2,
    chunk5FUZZQ4RValue851 = (chunk5FUZZQ4RParam159 - chunk5FUZZQ4RParam157) / 2,
    chunk5FUZZQ4RValue852 = chunk5FUZZQ4RValue850 / chunk5FUZZQ4RParam160,
    chunk5FUZZQ4RValue853 = chunk5FUZZQ4RValue851 / chunk5FUZZQ4RParam161,
    chunk5FUZZQ4RValue854 = Math.sqrt(
      chunk5FUZZQ4RValue852 ** 2 + chunk5FUZZQ4RValue853 ** 2,
    );
  if (chunk5FUZZQ4RValue854 > 1)
    throw Error(
      "The given radii are too small to create an arc between the points.",
    );
  let chunk5FUZZQ4RValue855 = Math.sqrt(1 - chunk5FUZZQ4RValue854 ** 2),
    chunk5FUZZQ4RValue856 =
      chunk5FUZZQ4RValue847 +
      chunk5FUZZQ4RValue855 *
        chunk5FUZZQ4RParam161 *
        Math.sin(chunk5FUZZQ4RValue849) *
        (chunk5FUZZQ4RParam162 ? -1 : 1),
    chunk5FUZZQ4RValue857 =
      chunk5FUZZQ4RValue848 -
      chunk5FUZZQ4RValue855 *
        chunk5FUZZQ4RParam160 *
        Math.cos(chunk5FUZZQ4RValue849) *
        (chunk5FUZZQ4RParam162 ? -1 : 1),
    chunk5FUZZQ4RValue858 = Math.atan2(
      (chunk5FUZZQ4RParam157 - chunk5FUZZQ4RValue857) / chunk5FUZZQ4RParam161,
      (chunk5FUZZQ4RParam156 - chunk5FUZZQ4RValue856) / chunk5FUZZQ4RParam160,
    ),
    chunk5FUZZQ4RValue859 =
      Math.atan2(
        (chunk5FUZZQ4RParam159 - chunk5FUZZQ4RValue857) / chunk5FUZZQ4RParam161,
        (chunk5FUZZQ4RParam158 - chunk5FUZZQ4RValue856) / chunk5FUZZQ4RParam160,
      ) - chunk5FUZZQ4RValue858;
  chunk5FUZZQ4RParam162 &&
    chunk5FUZZQ4RValue859 < 0 &&
    (chunk5FUZZQ4RValue859 += 2 * Math.PI);
  !chunk5FUZZQ4RParam162 &&
    chunk5FUZZQ4RValue859 > 0 &&
    (chunk5FUZZQ4RValue859 -= 2 * Math.PI);
  let chunk5FUZZQ4RValue860 = [];
  for (
    let chunk5FUZZQ4RValue1165 = 0;
    chunk5FUZZQ4RValue1165 < 20;
    chunk5FUZZQ4RValue1165++
  ) {
    let chunk5FUZZQ4RValue1181 =
        chunk5FUZZQ4RValue858 +
        (chunk5FUZZQ4RValue1165 / 19) * chunk5FUZZQ4RValue859,
      chunk5FUZZQ4RValue1182 =
        chunk5FUZZQ4RValue856 +
        chunk5FUZZQ4RParam160 * Math.cos(chunk5FUZZQ4RValue1181),
      chunk5FUZZQ4RValue1183 =
        chunk5FUZZQ4RValue857 +
        chunk5FUZZQ4RParam161 * Math.sin(chunk5FUZZQ4RValue1181);
    chunk5FUZZQ4RValue860.push({
      x: chunk5FUZZQ4RValue1182,
      y: chunk5FUZZQ4RValue1183,
    });
  }
  return chunk5FUZZQ4RValue860;
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper12, "generateArcPoints");
function chunk5FUZZQ4RHelper13(
  chunk5FUZZQ4RParam311,
  chunk5FUZZQ4RParam312,
  chunk5FUZZQ4RParam313,
) {
  let [chunk5FUZZQ4RValue1184, chunk5FUZZQ4RValue1185] = [
    chunk5FUZZQ4RParam312,
    chunk5FUZZQ4RParam313,
  ].sort(
    (chunk5FUZZQ4RParam426, chunk5FUZZQ4RParam427) =>
      chunk5FUZZQ4RParam427 - chunk5FUZZQ4RParam426,
  );
  return (
    chunk5FUZZQ4RValue1185 *
    (1 -
      Math.sqrt(1 - (chunk5FUZZQ4RParam311 / chunk5FUZZQ4RValue1184 / 2) ** 2))
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper13, "calculateArcSagitta");
async function chunk5FUZZQ4RHelper14(
  chunk5FUZZQ4RParam83,
  chunk5FUZZQ4RParam84,
) {
  let { labelStyles, nodeStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam84);
  chunk5FUZZQ4RParam84.labelStyle = labelStyles;
  let chunk5FUZZQ4RValue587 = chunk5FUZZQ4RParam84.padding ?? 0,
    chunk5FUZZQ4RValue588 =
      chunk5FUZZQ4RParam84.look === "neo" ? 16 : chunk5FUZZQ4RValue587,
    chunk5FUZZQ4RValue589 =
      chunk5FUZZQ4RParam84.look === "neo" ? 12 : chunk5FUZZQ4RValue587,
    chunk5FUZZQ4RValue590 = chunkAGHRB4JFN(
      (chunk5FUZZQ4RParam429) => chunk5FUZZQ4RParam429 + chunk5FUZZQ4RValue589,
      "calcTotalHeight",
    ),
    chunk5FUZZQ4RValue591 = chunkAGHRB4JFN((chunk5FUZZQ4RParam354) => {
      let chunk5FUZZQ4RValue1218 = chunk5FUZZQ4RParam354 / 2;
      return [
        chunk5FUZZQ4RValue1218 / (2.5 + chunk5FUZZQ4RParam354 / 50),
        chunk5FUZZQ4RValue1218,
      ];
    }, "calcEllipseRadius"),
    { shapeSvg, bbox } = await chunk5FUZZQ4RS(
      chunk5FUZZQ4RParam83,
      chunk5FUZZQ4RParam84,
      chunk5FUZZQ4RValue2(chunk5FUZZQ4RParam84),
    ),
    chunk5FUZZQ4RValue592 = chunk5FUZZQ4RValue590(
      chunk5FUZZQ4RParam84?.height ? chunk5FUZZQ4RParam84?.height : bbox.height,
    ),
    [chunk5FUZZQ4RValue593, chunk5FUZZQ4RValue594] = chunk5FUZZQ4RValue591(
      chunk5FUZZQ4RValue592,
    ),
    chunk5FUZZQ4RValue595 = chunk5FUZZQ4RHelper13(
      chunk5FUZZQ4RValue592,
      chunk5FUZZQ4RValue593,
      chunk5FUZZQ4RValue594,
    ),
    chunk5FUZZQ4RValue596 =
      (chunk5FUZZQ4RParam84?.width ? chunk5FUZZQ4RParam84?.width : bbox.width) +
      chunk5FUZZQ4RValue588 * 2 +
      chunk5FUZZQ4RValue595 -
      chunk5FUZZQ4RValue595,
    chunk5FUZZQ4RValue597 = chunk5FUZZQ4RValue592,
    { cssStyles } = chunk5FUZZQ4RParam84,
    chunk5FUZZQ4RValue598 = [
      {
        x: chunk5FUZZQ4RValue596 / 2,
        y: -chunk5FUZZQ4RValue597 / 2,
      },
      {
        x: -chunk5FUZZQ4RValue596 / 2,
        y: -chunk5FUZZQ4RValue597 / 2,
      },
      ...chunk5FUZZQ4RHelper12(
        -chunk5FUZZQ4RValue596 / 2,
        -chunk5FUZZQ4RValue597 / 2,
        -chunk5FUZZQ4RValue596 / 2,
        chunk5FUZZQ4RValue597 / 2,
        chunk5FUZZQ4RValue593,
        chunk5FUZZQ4RValue594,
        false,
      ),
      {
        x: chunk5FUZZQ4RValue596 / 2,
        y: chunk5FUZZQ4RValue597 / 2,
      },
      ...chunk5FUZZQ4RHelper12(
        chunk5FUZZQ4RValue596 / 2,
        chunk5FUZZQ4RValue597 / 2,
        chunk5FUZZQ4RValue596 / 2,
        -chunk5FUZZQ4RValue597 / 2,
        chunk5FUZZQ4RValue593,
        chunk5FUZZQ4RValue594,
        true,
      ),
    ],
    chunk5FUZZQ4RValue599 = rough.svg(shapeSvg),
    chunk5FUZZQ4RValue600 = chunkX2U36JSPN(chunk5FUZZQ4RParam84, {});
  chunk5FUZZQ4RParam84.look !== "handDrawn" &&
    ((chunk5FUZZQ4RValue600.roughness = 0),
    (chunk5FUZZQ4RValue600.fillStyle = "solid"));
  let chunk5FUZZQ4RValue601 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RValue598),
    chunk5FUZZQ4RValue602 = chunk5FUZZQ4RValue599.path(
      chunk5FUZZQ4RValue601,
      chunk5FUZZQ4RValue600,
    ),
    chunk5FUZZQ4RValue603 = shapeSvg.insert(
      () => chunk5FUZZQ4RValue602,
      ":first-child",
    );
  return (
    chunk5FUZZQ4RValue603.attr("class", "basic label-container outer-path"),
    cssStyles &&
      chunk5FUZZQ4RParam84.look !== "handDrawn" &&
      chunk5FUZZQ4RValue603.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunk5FUZZQ4RParam84.look !== "handDrawn" &&
      chunk5FUZZQ4RValue603.selectAll("path").attr("style", nodeStyles),
    chunk5FUZZQ4RValue603.attr(
      "transform",
      `translate(${chunk5FUZZQ4RValue593 / 2}, 0)`,
    ),
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam84, chunk5FUZZQ4RValue603),
    (chunk5FUZZQ4RParam84.intersect = function (chunk5FUZZQ4RParam358) {
      return chunk5FUZZQ4RValue12.polygon(
        chunk5FUZZQ4RParam84,
        chunk5FUZZQ4RValue598,
        chunk5FUZZQ4RParam358,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper14, "bowTieRect");
function chunk5FUZZQ4RHelper15(
  chunk5FUZZQ4RParam211,
  chunk5FUZZQ4RParam212,
  chunk5FUZZQ4RParam213,
  chunk5FUZZQ4RParam214,
) {
  return chunk5FUZZQ4RParam211
    .insert("polygon", ":first-child")
    .attr(
      "points",
      chunk5FUZZQ4RParam214
        .map(function (item) {
          return item.x + "," + item.y;
        })
        .join(" "),
    )
    .attr("class", "label-container")
    .attr(
      "transform",
      "translate(" +
        -chunk5FUZZQ4RParam212 / 2 +
        "," +
        chunk5FUZZQ4RParam213 / 2 +
        ")",
    );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper15, "insertPolygonShape");
async function chunk5FUZZQ4RHelper16(
  chunk5FUZZQ4RParam131,
  chunk5FUZZQ4RParam132,
) {
  let { labelStyles, nodeStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam132);
  chunk5FUZZQ4RParam132.labelStyle = labelStyles;
  let chunk5FUZZQ4RValue763 = chunk5FUZZQ4RParam132.padding ?? 0,
    chunk5FUZZQ4RValue764 =
      chunk5FUZZQ4RParam132.look === "neo" ? 28 : chunk5FUZZQ4RValue763,
    chunk5FUZZQ4RValue765 =
      chunk5FUZZQ4RParam132.look === "neo" ? 24 : chunk5FUZZQ4RValue763,
    { shapeSvg, bbox } = await chunk5FUZZQ4RS(
      chunk5FUZZQ4RParam131,
      chunk5FUZZQ4RParam132,
      chunk5FUZZQ4RValue2(chunk5FUZZQ4RParam132),
    ),
    chunk5FUZZQ4RValue766 =
      (chunk5FUZZQ4RParam132?.width ?? bbox.width) +
      (chunk5FUZZQ4RParam132.look === "neo"
        ? chunk5FUZZQ4RValue764 * 2
        : chunk5FUZZQ4RValue764 + 12),
    chunk5FUZZQ4RValue767 =
      (chunk5FUZZQ4RParam132?.height ?? bbox.height) +
      (chunk5FUZZQ4RParam132.look === "neo"
        ? chunk5FUZZQ4RValue765 * 2
        : chunk5FUZZQ4RValue765),
    chunk5FUZZQ4RValue768 = chunk5FUZZQ4RValue766,
    chunk5FUZZQ4RValue769 = -chunk5FUZZQ4RValue767,
    chunk5FUZZQ4RValue770 = [
      {
        x: 12,
        y: chunk5FUZZQ4RValue769,
      },
      {
        x: chunk5FUZZQ4RValue768,
        y: chunk5FUZZQ4RValue769,
      },
      {
        x: chunk5FUZZQ4RValue768,
        y: 0,
      },
      {
        x: 0,
        y: 0,
      },
      {
        x: 0,
        y: chunk5FUZZQ4RValue769 + 12,
      },
      {
        x: 12,
        y: chunk5FUZZQ4RValue769,
      },
    ],
    chunk5FUZZQ4RValue771,
    { cssStyles } = chunk5FUZZQ4RParam132;
  if (chunk5FUZZQ4RParam132.look === "handDrawn") {
    let chunk5FUZZQ4RValue1094 = rough.svg(shapeSvg),
      chunk5FUZZQ4RValue1095 = chunkX2U36JSPN(chunk5FUZZQ4RParam132, {}),
      chunk5FUZZQ4RValue1096 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RValue770),
      chunk5FUZZQ4RValue1097 = chunk5FUZZQ4RValue1094.path(
        chunk5FUZZQ4RValue1096,
        chunk5FUZZQ4RValue1095,
      );
    chunk5FUZZQ4RValue771 = shapeSvg
      .insert(() => chunk5FUZZQ4RValue1097, ":first-child")
      .attr(
        "transform",
        `translate(${-chunk5FUZZQ4RValue766 / 2}, ${chunk5FUZZQ4RValue767 / 2})`,
      );
    cssStyles && chunk5FUZZQ4RValue771.attr("style", cssStyles);
  } else
    chunk5FUZZQ4RValue771 = chunk5FUZZQ4RHelper15(
      shapeSvg,
      chunk5FUZZQ4RValue766,
      chunk5FUZZQ4RValue767,
      chunk5FUZZQ4RValue770,
    );
  return (
    nodeStyles && chunk5FUZZQ4RValue771.attr("style", nodeStyles),
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam132, chunk5FUZZQ4RValue771),
    (chunk5FUZZQ4RParam132.intersect = function (chunk5FUZZQ4RParam359) {
      return chunk5FUZZQ4RValue12.polygon(
        chunk5FUZZQ4RParam132,
        chunk5FUZZQ4RValue770,
        chunk5FUZZQ4RParam359,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper16, "card");
function chunk5FUZZQ4RHelper17(chunk5FUZZQ4RParam154, chunk5FUZZQ4RParam155) {
  let { nodeStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam155);
  chunk5FUZZQ4RParam155.label = "";
  let chunk5FUZZQ4RValue839 = chunk5FUZZQ4RParam154
      .insert("g")
      .attr("class", chunk5FUZZQ4RValue2(chunk5FUZZQ4RParam155))
      .attr("id", chunk5FUZZQ4RParam155.domId ?? chunk5FUZZQ4RParam155.id),
    { cssStyles } = chunk5FUZZQ4RParam155,
    chunk5FUZZQ4RValue840 = Math.max(28, chunk5FUZZQ4RParam155.width ?? 0),
    chunk5FUZZQ4RValue841 = [
      {
        x: 0,
        y: chunk5FUZZQ4RValue840 / 2,
      },
      {
        x: chunk5FUZZQ4RValue840 / 2,
        y: 0,
      },
      {
        x: 0,
        y: -chunk5FUZZQ4RValue840 / 2,
      },
      {
        x: -chunk5FUZZQ4RValue840 / 2,
        y: 0,
      },
    ],
    chunk5FUZZQ4RValue842 = rough.svg(chunk5FUZZQ4RValue839),
    chunk5FUZZQ4RValue843 = chunkX2U36JSPN(chunk5FUZZQ4RParam155, {});
  chunk5FUZZQ4RParam155.look !== "handDrawn" &&
    ((chunk5FUZZQ4RValue843.roughness = 0),
    (chunk5FUZZQ4RValue843.fillStyle = "solid"));
  let chunk5FUZZQ4RValue844 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RValue841),
    chunk5FUZZQ4RValue845 = chunk5FUZZQ4RValue842.path(
      chunk5FUZZQ4RValue844,
      chunk5FUZZQ4RValue843,
    ),
    chunk5FUZZQ4RValue846 = chunk5FUZZQ4RValue839.insert(
      () => chunk5FUZZQ4RValue845,
      ":first-child",
    );
  return (
    cssStyles &&
      chunk5FUZZQ4RParam155.look !== "handDrawn" &&
      chunk5FUZZQ4RValue846.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunk5FUZZQ4RParam155.look !== "handDrawn" &&
      chunk5FUZZQ4RValue846.selectAll("path").attr("style", nodeStyles),
    (chunk5FUZZQ4RParam155.width = 28),
    (chunk5FUZZQ4RParam155.height = 28),
    (chunk5FUZZQ4RParam155.intersect = function (chunk5FUZZQ4RParam360) {
      return chunk5FUZZQ4RValue12.polygon(
        chunk5FUZZQ4RParam155,
        chunk5FUZZQ4RValue841,
        chunk5FUZZQ4RParam360,
      );
    }),
    chunk5FUZZQ4RValue839
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper17, "choice");
async function chunk5FUZZQ4RHelper18(
  chunk5FUZZQ4RParam138,
  chunk5FUZZQ4RParam139,
  chunk5FUZZQ4RParam140,
) {
  let { labelStyles, nodeStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam139);
  chunk5FUZZQ4RParam139.labelStyle = labelStyles;
  let { shapeSvg, bbox, halfPadding } = await chunk5FUZZQ4RS(
      chunk5FUZZQ4RParam138,
      chunk5FUZZQ4RParam139,
      chunk5FUZZQ4RValue2(chunk5FUZZQ4RParam139),
    ),
    chunk5FUZZQ4RValue794 = chunk5FUZZQ4RParam140?.padding ?? halfPadding,
    chunk5FUZZQ4RValue795 =
      chunk5FUZZQ4RParam139.look === "neo"
        ? bbox.width / 2 + 32
        : bbox.width / 2 + chunk5FUZZQ4RValue794,
    chunk5FUZZQ4RValue796,
    { cssStyles } = chunk5FUZZQ4RParam139;
  if (chunk5FUZZQ4RParam139.look === "handDrawn") {
    let chunk5FUZZQ4RValue1127 = rough.svg(shapeSvg),
      chunk5FUZZQ4RValue1128 = chunkX2U36JSPN(chunk5FUZZQ4RParam139, {}),
      chunk5FUZZQ4RValue1129 = chunk5FUZZQ4RValue1127.circle(
        0,
        0,
        chunk5FUZZQ4RValue795 * 2,
        chunk5FUZZQ4RValue1128,
      );
    chunk5FUZZQ4RValue796 = shapeSvg.insert(
      () => chunk5FUZZQ4RValue1129,
      ":first-child",
    );
    chunk5FUZZQ4RValue796
      .attr("class", "basic label-container")
      .attr("style", chunk5PVQY5BWF(cssStyles));
  } else
    chunk5FUZZQ4RValue796 = shapeSvg
      .insert("circle", ":first-child")
      .attr("class", "basic label-container")
      .attr("style", nodeStyles)
      .attr("r", chunk5FUZZQ4RValue795)
      .attr("cx", 0)
      .attr("cy", 0);
  return (
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam139, chunk5FUZZQ4RValue796),
    (chunk5FUZZQ4RParam139.calcIntersect = function (
      chunk5FUZZQ4RParam348,
      chunk5FUZZQ4RParam349,
    ) {
      let chunk5FUZZQ4RValue1214 = chunk5FUZZQ4RParam348.width / 2;
      return chunk5FUZZQ4RValue12.circle(
        chunk5FUZZQ4RParam348,
        chunk5FUZZQ4RValue1214,
        chunk5FUZZQ4RParam349,
      );
    }),
    (chunk5FUZZQ4RParam139.intersect = function (chunk5FUZZQ4RParam346) {
      return (
        chunkAGHRB4JFR.info(
          "Circle intersect",
          chunk5FUZZQ4RParam139,
          chunk5FUZZQ4RValue795,
          chunk5FUZZQ4RParam346,
        ),
        chunk5FUZZQ4RValue12.circle(
          chunk5FUZZQ4RParam139,
          chunk5FUZZQ4RValue795,
          chunk5FUZZQ4RParam346,
        )
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper18, "circle");
function chunk5FUZZQ4RHelper19(chunk5FUZZQ4RParam200) {
  let chunk5FUZZQ4RValue989 = Math.cos(Math.PI / 4),
    chunk5FUZZQ4RValue990 = Math.sin(Math.PI / 4),
    chunk5FUZZQ4RValue991 = chunk5FUZZQ4RParam200 * 2,
    chunk5FUZZQ4RValue992 = {
      x: (chunk5FUZZQ4RValue991 / 2) * chunk5FUZZQ4RValue989,
      y: (chunk5FUZZQ4RValue991 / 2) * chunk5FUZZQ4RValue990,
    },
    chunk5FUZZQ4RValue993 = {
      x: -(chunk5FUZZQ4RValue991 / 2) * chunk5FUZZQ4RValue989,
      y: (chunk5FUZZQ4RValue991 / 2) * chunk5FUZZQ4RValue990,
    },
    chunk5FUZZQ4RValue994 = {
      x: -(chunk5FUZZQ4RValue991 / 2) * chunk5FUZZQ4RValue989,
      y: -(chunk5FUZZQ4RValue991 / 2) * chunk5FUZZQ4RValue990,
    },
    chunk5FUZZQ4RValue995 = {
      x: (chunk5FUZZQ4RValue991 / 2) * chunk5FUZZQ4RValue989,
      y: -(chunk5FUZZQ4RValue991 / 2) * chunk5FUZZQ4RValue990,
    };
  return `M ${chunk5FUZZQ4RValue993.x},${chunk5FUZZQ4RValue993.y} L ${chunk5FUZZQ4RValue995.x},${chunk5FUZZQ4RValue995.y}
                   M ${chunk5FUZZQ4RValue992.x},${chunk5FUZZQ4RValue992.y} L ${chunk5FUZZQ4RValue994.x},${chunk5FUZZQ4RValue994.y}`;
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper19, "createLine");
function chunk5FUZZQ4RHelper20(chunk5FUZZQ4RParam149, chunk5FUZZQ4RParam150) {
  let { labelStyles, nodeStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam150);
  chunk5FUZZQ4RParam150.labelStyle = labelStyles;
  chunk5FUZZQ4RParam150.label = "";
  let chunk5FUZZQ4RValue824 = chunk5FUZZQ4RParam149
      .insert("g")
      .attr("class", chunk5FUZZQ4RValue2(chunk5FUZZQ4RParam150))
      .attr("id", chunk5FUZZQ4RParam150.domId ?? chunk5FUZZQ4RParam150.id),
    chunk5FUZZQ4RValue825 = Math.max(30, chunk5FUZZQ4RParam150?.width ?? 0),
    { cssStyles } = chunk5FUZZQ4RParam150,
    chunk5FUZZQ4RValue826 = rough.svg(chunk5FUZZQ4RValue824),
    chunk5FUZZQ4RValue827 = chunkX2U36JSPN(chunk5FUZZQ4RParam150, {});
  chunk5FUZZQ4RParam150.look !== "handDrawn" &&
    ((chunk5FUZZQ4RValue827.roughness = 0),
    (chunk5FUZZQ4RValue827.fillStyle = "solid"));
  let chunk5FUZZQ4RValue828 = chunk5FUZZQ4RValue826.circle(
      0,
      0,
      chunk5FUZZQ4RValue825 * 2,
      chunk5FUZZQ4RValue827,
    ),
    chunk5FUZZQ4RValue829 = chunk5FUZZQ4RHelper19(chunk5FUZZQ4RValue825),
    chunk5FUZZQ4RValue830 = chunk5FUZZQ4RValue826.path(
      chunk5FUZZQ4RValue829,
      chunk5FUZZQ4RValue827,
    ),
    chunk5FUZZQ4RValue831 = chunk5FUZZQ4RValue824.insert(
      () => chunk5FUZZQ4RValue828,
      ":first-child",
    );
  return (
    chunk5FUZZQ4RValue831.insert(() => chunk5FUZZQ4RValue830),
    chunk5FUZZQ4RValue831.attr("class", "outer-path"),
    cssStyles &&
      chunk5FUZZQ4RParam150.look !== "handDrawn" &&
      chunk5FUZZQ4RValue831.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunk5FUZZQ4RParam150.look !== "handDrawn" &&
      chunk5FUZZQ4RValue831.selectAll("path").attr("style", nodeStyles),
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam150, chunk5FUZZQ4RValue831),
    (chunk5FUZZQ4RParam150.intersect = function (chunk5FUZZQ4RParam306) {
      return (
        chunkAGHRB4JFR.info("crossedCircle intersect", chunk5FUZZQ4RParam150, {
          radius: chunk5FUZZQ4RValue825,
          point: chunk5FUZZQ4RParam306,
        }),
        chunk5FUZZQ4RValue12.circle(
          chunk5FUZZQ4RParam150,
          chunk5FUZZQ4RValue825,
          chunk5FUZZQ4RParam306,
        )
      );
    }),
    chunk5FUZZQ4RValue824
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper20, "crossedCircle");
function chunk5FUZZQ4RHelper21(
  chunk5FUZZQ4RParam215,
  chunk5FUZZQ4RParam216,
  chunk5FUZZQ4RParam217,
  chunk5FUZZQ4RParam218 = 100,
  chunk5FUZZQ4RParam219 = 0,
  chunk5FUZZQ4RParam220 = 180,
) {
  let chunk5FUZZQ4RValue1033 = [],
    chunk5FUZZQ4RValue1034 = (chunk5FUZZQ4RParam219 * Math.PI) / 180,
    chunk5FUZZQ4RValue1035 =
      ((chunk5FUZZQ4RParam220 * Math.PI) / 180 - chunk5FUZZQ4RValue1034) /
      (chunk5FUZZQ4RParam218 - 1);
  for (
    let chunk5FUZZQ4RValue1172 = 0;
    chunk5FUZZQ4RValue1172 < chunk5FUZZQ4RParam218;
    chunk5FUZZQ4RValue1172++
  ) {
    let chunk5FUZZQ4RValue1190 =
        chunk5FUZZQ4RValue1034 +
        chunk5FUZZQ4RValue1172 * chunk5FUZZQ4RValue1035,
      chunk5FUZZQ4RValue1191 =
        chunk5FUZZQ4RParam215 +
        chunk5FUZZQ4RParam217 * Math.cos(chunk5FUZZQ4RValue1190),
      chunk5FUZZQ4RValue1192 =
        chunk5FUZZQ4RParam216 +
        chunk5FUZZQ4RParam217 * Math.sin(chunk5FUZZQ4RValue1190);
    chunk5FUZZQ4RValue1033.push({
      x: -chunk5FUZZQ4RValue1191,
      y: -chunk5FUZZQ4RValue1192,
    });
  }
  return chunk5FUZZQ4RValue1033;
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper21, "generateCirclePoints");
async function chunk5FUZZQ4RHelper22(
  chunk5FUZZQ4RParam40,
  chunk5FUZZQ4RParam41,
) {
  let { labelStyles, nodeStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam41);
  chunk5FUZZQ4RParam41.labelStyle = labelStyles;
  let { shapeSvg, bbox, label } = await chunk5FUZZQ4RS(
      chunk5FUZZQ4RParam40,
      chunk5FUZZQ4RParam41,
      chunk5FUZZQ4RValue2(chunk5FUZZQ4RParam41),
    ),
    chunk5FUZZQ4RValue337 =
      chunk5FUZZQ4RParam41.look === "neo"
        ? 18
        : (chunk5FUZZQ4RParam41.padding ?? 0),
    chunk5FUZZQ4RValue338 =
      chunk5FUZZQ4RParam41.look === "neo"
        ? 12
        : (chunk5FUZZQ4RParam41.padding ?? 0),
    chunk5FUZZQ4RValue339 = bbox.width + chunk5FUZZQ4RValue337,
    chunk5FUZZQ4RValue340 = bbox.height + chunk5FUZZQ4RValue338,
    chunk5FUZZQ4RValue341 = Math.max(5, chunk5FUZZQ4RValue340 * 0.1),
    { cssStyles } = chunk5FUZZQ4RParam41,
    chunk5FUZZQ4RValue342 = [
      ...chunk5FUZZQ4RHelper21(
        chunk5FUZZQ4RValue339 / 2,
        -chunk5FUZZQ4RValue340 / 2,
        chunk5FUZZQ4RValue341,
        30,
        -90,
        0,
      ),
      {
        x: -chunk5FUZZQ4RValue339 / 2 - chunk5FUZZQ4RValue341,
        y: chunk5FUZZQ4RValue341,
      },
      ...chunk5FUZZQ4RHelper21(
        chunk5FUZZQ4RValue339 / 2 + chunk5FUZZQ4RValue341 * 2,
        -chunk5FUZZQ4RValue341,
        chunk5FUZZQ4RValue341,
        20,
        -180,
        -270,
      ),
      ...chunk5FUZZQ4RHelper21(
        chunk5FUZZQ4RValue339 / 2 + chunk5FUZZQ4RValue341 * 2,
        chunk5FUZZQ4RValue341,
        chunk5FUZZQ4RValue341,
        20,
        -90,
        -180,
      ),
      {
        x: -chunk5FUZZQ4RValue339 / 2 - chunk5FUZZQ4RValue341,
        y: -chunk5FUZZQ4RValue340 / 2,
      },
      ...chunk5FUZZQ4RHelper21(
        chunk5FUZZQ4RValue339 / 2,
        chunk5FUZZQ4RValue340 / 2,
        chunk5FUZZQ4RValue341,
        20,
        0,
        90,
      ),
    ],
    chunk5FUZZQ4RValue343 = [
      {
        x: chunk5FUZZQ4RValue339 / 2,
        y: -chunk5FUZZQ4RValue340 / 2 - chunk5FUZZQ4RValue341,
      },
      {
        x: -chunk5FUZZQ4RValue339 / 2,
        y: -chunk5FUZZQ4RValue340 / 2 - chunk5FUZZQ4RValue341,
      },
      ...chunk5FUZZQ4RHelper21(
        chunk5FUZZQ4RValue339 / 2,
        -chunk5FUZZQ4RValue340 / 2,
        chunk5FUZZQ4RValue341,
        20,
        -90,
        0,
      ),
      {
        x: -chunk5FUZZQ4RValue339 / 2 - chunk5FUZZQ4RValue341,
        y: -chunk5FUZZQ4RValue341,
      },
      ...chunk5FUZZQ4RHelper21(
        chunk5FUZZQ4RValue339 / 2 + chunk5FUZZQ4RValue339 * 0.1,
        -chunk5FUZZQ4RValue341,
        chunk5FUZZQ4RValue341,
        20,
        -180,
        -270,
      ),
      ...chunk5FUZZQ4RHelper21(
        chunk5FUZZQ4RValue339 / 2 + chunk5FUZZQ4RValue339 * 0.1,
        chunk5FUZZQ4RValue341,
        chunk5FUZZQ4RValue341,
        20,
        -90,
        -180,
      ),
      {
        x: -chunk5FUZZQ4RValue339 / 2 - chunk5FUZZQ4RValue341,
        y: chunk5FUZZQ4RValue340 / 2,
      },
      ...chunk5FUZZQ4RHelper21(
        chunk5FUZZQ4RValue339 / 2,
        chunk5FUZZQ4RValue340 / 2,
        chunk5FUZZQ4RValue341,
        20,
        0,
        90,
      ),
      {
        x: -chunk5FUZZQ4RValue339 / 2,
        y: chunk5FUZZQ4RValue340 / 2 + chunk5FUZZQ4RValue341,
      },
      {
        x: chunk5FUZZQ4RValue339 / 2,
        y: chunk5FUZZQ4RValue340 / 2 + chunk5FUZZQ4RValue341,
      },
    ],
    chunk5FUZZQ4RValue344 = rough.svg(shapeSvg),
    chunk5FUZZQ4RValue345 = chunkX2U36JSPN(chunk5FUZZQ4RParam41, {
      fill: "none",
    });
  chunk5FUZZQ4RParam41.look !== "handDrawn" &&
    ((chunk5FUZZQ4RValue345.roughness = 0),
    (chunk5FUZZQ4RValue345.fillStyle = "solid"));
  let chunk5FUZZQ4RValue346 = chunk5FUZZQ4RHelper1(
      chunk5FUZZQ4RValue342,
    ).replace("Z", ""),
    chunk5FUZZQ4RValue347 = chunk5FUZZQ4RValue344.path(
      chunk5FUZZQ4RValue346,
      chunk5FUZZQ4RValue345,
    ),
    chunk5FUZZQ4RValue348 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RValue343),
    chunk5FUZZQ4RValue349 = chunk5FUZZQ4RValue344.path(chunk5FUZZQ4RValue348, {
      ...chunk5FUZZQ4RValue345,
    }),
    chunk5FUZZQ4RValue350 = shapeSvg.insert("g", ":first-child");
  return (
    chunk5FUZZQ4RValue350
      .insert(() => chunk5FUZZQ4RValue349, ":first-child")
      .attr("stroke-opacity", 0),
    chunk5FUZZQ4RValue350.insert(() => chunk5FUZZQ4RValue347, ":first-child"),
    chunk5FUZZQ4RValue350.attr("class", "text"),
    cssStyles &&
      chunk5FUZZQ4RParam41.look !== "handDrawn" &&
      chunk5FUZZQ4RValue350.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunk5FUZZQ4RParam41.look !== "handDrawn" &&
      chunk5FUZZQ4RValue350.selectAll("path").attr("style", nodeStyles),
    chunk5FUZZQ4RValue350.attr(
      "transform",
      `translate(${chunk5FUZZQ4RValue341}, 0)`,
    ),
    label.attr(
      "transform",
      `translate(${-chunk5FUZZQ4RValue339 / 2 + chunk5FUZZQ4RValue341 - (bbox.x - (bbox.left ?? 0))},${-chunk5FUZZQ4RValue340 / 2 + (chunk5FUZZQ4RParam41.padding ?? 0) / 2 - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam41, chunk5FUZZQ4RValue350),
    (chunk5FUZZQ4RParam41.intersect = function (chunk5FUZZQ4RParam361) {
      return chunk5FUZZQ4RValue12.polygon(
        chunk5FUZZQ4RParam41,
        chunk5FUZZQ4RValue343,
        chunk5FUZZQ4RParam361,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper22, "curlyBraceLeft");
function chunk5FUZZQ4RHelper23(
  chunk5FUZZQ4RParam227,
  chunk5FUZZQ4RParam228,
  chunk5FUZZQ4RParam229,
  chunk5FUZZQ4RParam230 = 100,
  chunk5FUZZQ4RParam231 = 0,
  chunk5FUZZQ4RParam232 = 180,
) {
  let chunk5FUZZQ4RValue1039 = [],
    chunk5FUZZQ4RValue1040 = (chunk5FUZZQ4RParam231 * Math.PI) / 180,
    chunk5FUZZQ4RValue1041 =
      ((chunk5FUZZQ4RParam232 * Math.PI) / 180 - chunk5FUZZQ4RValue1040) /
      (chunk5FUZZQ4RParam230 - 1);
  for (
    let chunk5FUZZQ4RValue1174 = 0;
    chunk5FUZZQ4RValue1174 < chunk5FUZZQ4RParam230;
    chunk5FUZZQ4RValue1174++
  ) {
    let chunk5FUZZQ4RValue1197 =
        chunk5FUZZQ4RValue1040 +
        chunk5FUZZQ4RValue1174 * chunk5FUZZQ4RValue1041,
      chunk5FUZZQ4RValue1198 =
        chunk5FUZZQ4RParam227 +
        chunk5FUZZQ4RParam229 * Math.cos(chunk5FUZZQ4RValue1197),
      chunk5FUZZQ4RValue1199 =
        chunk5FUZZQ4RParam228 +
        chunk5FUZZQ4RParam229 * Math.sin(chunk5FUZZQ4RValue1197);
    chunk5FUZZQ4RValue1039.push({
      x: chunk5FUZZQ4RValue1198,
      y: chunk5FUZZQ4RValue1199,
    });
  }
  return chunk5FUZZQ4RValue1039;
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper23, "generateCirclePoints");
async function chunk5FUZZQ4RHelper24(
  chunk5FUZZQ4RParam38,
  chunk5FUZZQ4RParam39,
) {
  let { labelStyles, nodeStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam39);
  chunk5FUZZQ4RParam39.labelStyle = labelStyles;
  let { shapeSvg, bbox, label } = await chunk5FUZZQ4RS(
      chunk5FUZZQ4RParam38,
      chunk5FUZZQ4RParam39,
      chunk5FUZZQ4RValue2(chunk5FUZZQ4RParam39),
    ),
    chunk5FUZZQ4RValue323 =
      chunk5FUZZQ4RParam39.look === "neo"
        ? 18
        : (chunk5FUZZQ4RParam39.padding ?? 0),
    chunk5FUZZQ4RValue324 =
      chunk5FUZZQ4RParam39.look === "neo"
        ? 12
        : (chunk5FUZZQ4RParam39.padding ?? 0),
    chunk5FUZZQ4RValue325 =
      bbox.width +
      (chunk5FUZZQ4RParam39.look === "neo"
        ? chunk5FUZZQ4RValue323 * 2
        : chunk5FUZZQ4RValue323),
    chunk5FUZZQ4RValue326 =
      bbox.height +
      (chunk5FUZZQ4RParam39.look === "neo"
        ? chunk5FUZZQ4RValue324 * 2
        : chunk5FUZZQ4RValue324),
    chunk5FUZZQ4RValue327 = Math.max(5, chunk5FUZZQ4RValue326 * 0.1),
    { cssStyles } = chunk5FUZZQ4RParam39,
    chunk5FUZZQ4RValue328 = [
      ...chunk5FUZZQ4RHelper23(
        chunk5FUZZQ4RValue325 / 2,
        -chunk5FUZZQ4RValue326 / 2,
        chunk5FUZZQ4RValue327,
        20,
        -90,
        0,
      ),
      {
        x: chunk5FUZZQ4RValue325 / 2 + chunk5FUZZQ4RValue327,
        y: -chunk5FUZZQ4RValue327,
      },
      ...chunk5FUZZQ4RHelper23(
        chunk5FUZZQ4RValue325 / 2 + chunk5FUZZQ4RValue327 * 2,
        -chunk5FUZZQ4RValue327,
        chunk5FUZZQ4RValue327,
        20,
        -180,
        -270,
      ),
      ...chunk5FUZZQ4RHelper23(
        chunk5FUZZQ4RValue325 / 2 + chunk5FUZZQ4RValue327 * 2,
        chunk5FUZZQ4RValue327,
        chunk5FUZZQ4RValue327,
        20,
        -90,
        -180,
      ),
      {
        x: chunk5FUZZQ4RValue325 / 2 + chunk5FUZZQ4RValue327,
        y: chunk5FUZZQ4RValue326 / 2,
      },
      ...chunk5FUZZQ4RHelper23(
        chunk5FUZZQ4RValue325 / 2,
        chunk5FUZZQ4RValue326 / 2,
        chunk5FUZZQ4RValue327,
        20,
        0,
        90,
      ),
    ],
    chunk5FUZZQ4RValue329 = [
      {
        x: -chunk5FUZZQ4RValue325 / 2,
        y: -chunk5FUZZQ4RValue326 / 2 - chunk5FUZZQ4RValue327,
      },
      {
        x: chunk5FUZZQ4RValue325 / 2,
        y: -chunk5FUZZQ4RValue326 / 2 - chunk5FUZZQ4RValue327,
      },
      ...chunk5FUZZQ4RHelper23(
        chunk5FUZZQ4RValue325 / 2,
        -chunk5FUZZQ4RValue326 / 2,
        chunk5FUZZQ4RValue327,
        20,
        -90,
        0,
      ),
      {
        x: chunk5FUZZQ4RValue325 / 2 + chunk5FUZZQ4RValue327,
        y: -chunk5FUZZQ4RValue327,
      },
      ...chunk5FUZZQ4RHelper23(
        chunk5FUZZQ4RValue325 / 2 + chunk5FUZZQ4RValue327 * 2,
        -chunk5FUZZQ4RValue327,
        chunk5FUZZQ4RValue327,
        20,
        -180,
        -270,
      ),
      ...chunk5FUZZQ4RHelper23(
        chunk5FUZZQ4RValue325 / 2 + chunk5FUZZQ4RValue327 * 2,
        chunk5FUZZQ4RValue327,
        chunk5FUZZQ4RValue327,
        20,
        -90,
        -180,
      ),
      {
        x: chunk5FUZZQ4RValue325 / 2 + chunk5FUZZQ4RValue327,
        y: chunk5FUZZQ4RValue326 / 2,
      },
      ...chunk5FUZZQ4RHelper23(
        chunk5FUZZQ4RValue325 / 2,
        chunk5FUZZQ4RValue326 / 2,
        chunk5FUZZQ4RValue327,
        20,
        0,
        90,
      ),
      {
        x: chunk5FUZZQ4RValue325 / 2,
        y: chunk5FUZZQ4RValue326 / 2 + chunk5FUZZQ4RValue327,
      },
      {
        x: -chunk5FUZZQ4RValue325 / 2,
        y: chunk5FUZZQ4RValue326 / 2 + chunk5FUZZQ4RValue327,
      },
    ],
    chunk5FUZZQ4RValue330 = rough.svg(shapeSvg),
    chunk5FUZZQ4RValue331 = chunkX2U36JSPN(chunk5FUZZQ4RParam39, {
      fill: "none",
    });
  chunk5FUZZQ4RParam39.look !== "handDrawn" &&
    ((chunk5FUZZQ4RValue331.roughness = 0),
    (chunk5FUZZQ4RValue331.fillStyle = "solid"));
  let chunk5FUZZQ4RValue332 = chunk5FUZZQ4RHelper1(
      chunk5FUZZQ4RValue328,
    ).replace("Z", ""),
    chunk5FUZZQ4RValue333 = chunk5FUZZQ4RValue330.path(
      chunk5FUZZQ4RValue332,
      chunk5FUZZQ4RValue331,
    ),
    chunk5FUZZQ4RValue334 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RValue329),
    chunk5FUZZQ4RValue335 = chunk5FUZZQ4RValue330.path(chunk5FUZZQ4RValue334, {
      ...chunk5FUZZQ4RValue331,
    }),
    chunk5FUZZQ4RValue336 = shapeSvg.insert("g", ":first-child");
  return (
    chunk5FUZZQ4RValue336
      .insert(() => chunk5FUZZQ4RValue335, ":first-child")
      .attr("stroke-opacity", 0),
    chunk5FUZZQ4RValue336.insert(() => chunk5FUZZQ4RValue333, ":first-child"),
    chunk5FUZZQ4RValue336.attr("class", "text"),
    cssStyles &&
      chunk5FUZZQ4RParam39.look !== "handDrawn" &&
      chunk5FUZZQ4RValue336.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunk5FUZZQ4RParam39.look !== "handDrawn" &&
      chunk5FUZZQ4RValue336.selectAll("path").attr("style", nodeStyles),
    chunk5FUZZQ4RValue336.attr(
      "transform",
      `translate(${-chunk5FUZZQ4RValue327}, 0)`,
    ),
    label.attr(
      "transform",
      `translate(${-chunk5FUZZQ4RValue325 / 2 + (chunk5FUZZQ4RParam39.padding ?? 0) / 2 - (bbox.x - (bbox.left ?? 0))},${-chunk5FUZZQ4RValue326 / 2 + (chunk5FUZZQ4RParam39.padding ?? 0) / 2 - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam39, chunk5FUZZQ4RValue336),
    (chunk5FUZZQ4RParam39.intersect = function (chunk5FUZZQ4RParam362) {
      return chunk5FUZZQ4RValue12.polygon(
        chunk5FUZZQ4RParam39,
        chunk5FUZZQ4RValue329,
        chunk5FUZZQ4RParam362,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper24, "curlyBraceRight");
function chunk5FUZZQ4RHelper25(
  chunk5FUZZQ4RParam221,
  chunk5FUZZQ4RParam222,
  chunk5FUZZQ4RParam223,
  chunk5FUZZQ4RParam224 = 100,
  chunk5FUZZQ4RParam225 = 0,
  chunk5FUZZQ4RParam226 = 180,
) {
  let chunk5FUZZQ4RValue1036 = [],
    chunk5FUZZQ4RValue1037 = (chunk5FUZZQ4RParam225 * Math.PI) / 180,
    chunk5FUZZQ4RValue1038 =
      ((chunk5FUZZQ4RParam226 * Math.PI) / 180 - chunk5FUZZQ4RValue1037) /
      (chunk5FUZZQ4RParam224 - 1);
  for (
    let chunk5FUZZQ4RValue1173 = 0;
    chunk5FUZZQ4RValue1173 < chunk5FUZZQ4RParam224;
    chunk5FUZZQ4RValue1173++
  ) {
    let chunk5FUZZQ4RValue1193 =
        chunk5FUZZQ4RValue1037 +
        chunk5FUZZQ4RValue1173 * chunk5FUZZQ4RValue1038,
      chunk5FUZZQ4RValue1194 =
        chunk5FUZZQ4RParam221 +
        chunk5FUZZQ4RParam223 * Math.cos(chunk5FUZZQ4RValue1193),
      chunk5FUZZQ4RValue1195 =
        chunk5FUZZQ4RParam222 +
        chunk5FUZZQ4RParam223 * Math.sin(chunk5FUZZQ4RValue1193);
    chunk5FUZZQ4RValue1036.push({
      x: -chunk5FUZZQ4RValue1194,
      y: -chunk5FUZZQ4RValue1195,
    });
  }
  return chunk5FUZZQ4RValue1036;
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper25, "generateCirclePoints");
async function chunk5FUZZQ4RHelper26(
  chunk5FUZZQ4RParam21,
  chunk5FUZZQ4RParam22,
) {
  let { labelStyles, nodeStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam22);
  chunk5FUZZQ4RParam22.labelStyle = labelStyles;
  let { shapeSvg, bbox, label } = await chunk5FUZZQ4RS(
      chunk5FUZZQ4RParam21,
      chunk5FUZZQ4RParam22,
      chunk5FUZZQ4RValue2(chunk5FUZZQ4RParam22),
    ),
    chunk5FUZZQ4RValue226 =
      chunk5FUZZQ4RParam22.look === "neo"
        ? 18
        : (chunk5FUZZQ4RParam22.padding ?? 0),
    chunk5FUZZQ4RValue227 =
      chunk5FUZZQ4RParam22.look === "neo"
        ? 12
        : (chunk5FUZZQ4RParam22.padding ?? 0),
    chunk5FUZZQ4RValue228 =
      bbox.width +
      (chunk5FUZZQ4RParam22.look === "neo"
        ? chunk5FUZZQ4RValue226 * 2
        : chunk5FUZZQ4RValue226),
    chunk5FUZZQ4RValue229 =
      bbox.height +
      (chunk5FUZZQ4RParam22.look === "neo"
        ? chunk5FUZZQ4RValue227 * 2
        : chunk5FUZZQ4RValue227),
    chunk5FUZZQ4RValue230 = Math.max(5, chunk5FUZZQ4RValue229 * 0.1),
    { cssStyles } = chunk5FUZZQ4RParam22,
    chunk5FUZZQ4RValue231 = [
      ...chunk5FUZZQ4RHelper25(
        chunk5FUZZQ4RValue228 / 2,
        -chunk5FUZZQ4RValue229 / 2,
        chunk5FUZZQ4RValue230,
        30,
        -90,
        0,
      ),
      {
        x: -chunk5FUZZQ4RValue228 / 2 - chunk5FUZZQ4RValue230,
        y: chunk5FUZZQ4RValue230,
      },
      ...chunk5FUZZQ4RHelper25(
        chunk5FUZZQ4RValue228 / 2 + chunk5FUZZQ4RValue230 * 2,
        -chunk5FUZZQ4RValue230,
        chunk5FUZZQ4RValue230,
        20,
        -180,
        -270,
      ),
      ...chunk5FUZZQ4RHelper25(
        chunk5FUZZQ4RValue228 / 2 + chunk5FUZZQ4RValue230 * 2,
        chunk5FUZZQ4RValue230,
        chunk5FUZZQ4RValue230,
        20,
        -90,
        -180,
      ),
      {
        x: -chunk5FUZZQ4RValue228 / 2 - chunk5FUZZQ4RValue230,
        y: -chunk5FUZZQ4RValue229 / 2,
      },
      ...chunk5FUZZQ4RHelper25(
        chunk5FUZZQ4RValue228 / 2,
        chunk5FUZZQ4RValue229 / 2,
        chunk5FUZZQ4RValue230,
        20,
        0,
        90,
      ),
    ],
    chunk5FUZZQ4RValue232 = [
      ...chunk5FUZZQ4RHelper25(
        -chunk5FUZZQ4RValue228 / 2 +
          chunk5FUZZQ4RValue230 +
          chunk5FUZZQ4RValue230 / 2,
        -chunk5FUZZQ4RValue229 / 2,
        chunk5FUZZQ4RValue230,
        20,
        -90,
        -180,
      ),
      {
        x: chunk5FUZZQ4RValue228 / 2 - chunk5FUZZQ4RValue230 / 2,
        y: chunk5FUZZQ4RValue230,
      },
      ...chunk5FUZZQ4RHelper25(
        -chunk5FUZZQ4RValue228 / 2 - chunk5FUZZQ4RValue230 / 2,
        -chunk5FUZZQ4RValue230,
        chunk5FUZZQ4RValue230,
        20,
        0,
        90,
      ),
      ...chunk5FUZZQ4RHelper25(
        -chunk5FUZZQ4RValue228 / 2 - chunk5FUZZQ4RValue230 / 2,
        chunk5FUZZQ4RValue230,
        chunk5FUZZQ4RValue230,
        20,
        -90,
        0,
      ),
      {
        x: chunk5FUZZQ4RValue228 / 2 - chunk5FUZZQ4RValue230 / 2,
        y: -chunk5FUZZQ4RValue230,
      },
      ...chunk5FUZZQ4RHelper25(
        -chunk5FUZZQ4RValue228 / 2 +
          chunk5FUZZQ4RValue230 +
          chunk5FUZZQ4RValue230 / 2,
        chunk5FUZZQ4RValue229 / 2,
        chunk5FUZZQ4RValue230,
        30,
        -180,
        -270,
      ),
    ],
    chunk5FUZZQ4RValue233 = [
      {
        x: chunk5FUZZQ4RValue228 / 2,
        y: -chunk5FUZZQ4RValue229 / 2 - chunk5FUZZQ4RValue230,
      },
      {
        x: -chunk5FUZZQ4RValue228 / 2,
        y: -chunk5FUZZQ4RValue229 / 2 - chunk5FUZZQ4RValue230,
      },
      ...chunk5FUZZQ4RHelper25(
        chunk5FUZZQ4RValue228 / 2,
        -chunk5FUZZQ4RValue229 / 2,
        chunk5FUZZQ4RValue230,
        20,
        -90,
        0,
      ),
      {
        x: -chunk5FUZZQ4RValue228 / 2 - chunk5FUZZQ4RValue230,
        y: -chunk5FUZZQ4RValue230,
      },
      ...chunk5FUZZQ4RHelper25(
        chunk5FUZZQ4RValue228 / 2 + chunk5FUZZQ4RValue230 * 2,
        -chunk5FUZZQ4RValue230,
        chunk5FUZZQ4RValue230,
        20,
        -180,
        -270,
      ),
      ...chunk5FUZZQ4RHelper25(
        chunk5FUZZQ4RValue228 / 2 + chunk5FUZZQ4RValue230 * 2,
        chunk5FUZZQ4RValue230,
        chunk5FUZZQ4RValue230,
        20,
        -90,
        -180,
      ),
      {
        x: -chunk5FUZZQ4RValue228 / 2 - chunk5FUZZQ4RValue230,
        y: chunk5FUZZQ4RValue229 / 2,
      },
      ...chunk5FUZZQ4RHelper25(
        chunk5FUZZQ4RValue228 / 2,
        chunk5FUZZQ4RValue229 / 2,
        chunk5FUZZQ4RValue230,
        20,
        0,
        90,
      ),
      {
        x: -chunk5FUZZQ4RValue228 / 2,
        y: chunk5FUZZQ4RValue229 / 2 + chunk5FUZZQ4RValue230,
      },
      {
        x:
          chunk5FUZZQ4RValue228 / 2 -
          chunk5FUZZQ4RValue230 -
          chunk5FUZZQ4RValue230 / 2,
        y: chunk5FUZZQ4RValue229 / 2 + chunk5FUZZQ4RValue230,
      },
      ...chunk5FUZZQ4RHelper25(
        -chunk5FUZZQ4RValue228 / 2 +
          chunk5FUZZQ4RValue230 +
          chunk5FUZZQ4RValue230 / 2,
        -chunk5FUZZQ4RValue229 / 2,
        chunk5FUZZQ4RValue230,
        20,
        -90,
        -180,
      ),
      {
        x: chunk5FUZZQ4RValue228 / 2 - chunk5FUZZQ4RValue230 / 2,
        y: chunk5FUZZQ4RValue230,
      },
      ...chunk5FUZZQ4RHelper25(
        -chunk5FUZZQ4RValue228 / 2 - chunk5FUZZQ4RValue230 / 2,
        -chunk5FUZZQ4RValue230,
        chunk5FUZZQ4RValue230,
        20,
        0,
        90,
      ),
      ...chunk5FUZZQ4RHelper25(
        -chunk5FUZZQ4RValue228 / 2 - chunk5FUZZQ4RValue230 / 2,
        chunk5FUZZQ4RValue230,
        chunk5FUZZQ4RValue230,
        20,
        -90,
        0,
      ),
      {
        x: chunk5FUZZQ4RValue228 / 2 - chunk5FUZZQ4RValue230 / 2,
        y: -chunk5FUZZQ4RValue230,
      },
      ...chunk5FUZZQ4RHelper25(
        -chunk5FUZZQ4RValue228 / 2 +
          chunk5FUZZQ4RValue230 +
          chunk5FUZZQ4RValue230 / 2,
        chunk5FUZZQ4RValue229 / 2,
        chunk5FUZZQ4RValue230,
        30,
        -180,
        -270,
      ),
    ],
    chunk5FUZZQ4RValue234 = rough.svg(shapeSvg),
    chunk5FUZZQ4RValue235 = chunkX2U36JSPN(chunk5FUZZQ4RParam22, {
      fill: "none",
    });
  chunk5FUZZQ4RParam22.look !== "handDrawn" &&
    ((chunk5FUZZQ4RValue235.roughness = 0),
    (chunk5FUZZQ4RValue235.fillStyle = "solid"));
  let chunk5FUZZQ4RValue236 = chunk5FUZZQ4RHelper1(
      chunk5FUZZQ4RValue231,
    ).replace("Z", ""),
    chunk5FUZZQ4RValue237 = chunk5FUZZQ4RValue234.path(
      chunk5FUZZQ4RValue236,
      chunk5FUZZQ4RValue235,
    ),
    chunk5FUZZQ4RValue238 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RValue232).replace(
      "Z",
      "",
    ),
    chunk5FUZZQ4RValue239 = chunk5FUZZQ4RValue234.path(
      chunk5FUZZQ4RValue238,
      chunk5FUZZQ4RValue235,
    ),
    chunk5FUZZQ4RValue240 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RValue233),
    chunk5FUZZQ4RValue241 = chunk5FUZZQ4RValue234.path(chunk5FUZZQ4RValue240, {
      ...chunk5FUZZQ4RValue235,
    }),
    chunk5FUZZQ4RValue242 = shapeSvg.insert("g", ":first-child");
  return (
    chunk5FUZZQ4RValue242
      .insert(() => chunk5FUZZQ4RValue241, ":first-child")
      .attr("stroke-opacity", 0),
    chunk5FUZZQ4RValue242.insert(() => chunk5FUZZQ4RValue237, ":first-child"),
    chunk5FUZZQ4RValue242.insert(() => chunk5FUZZQ4RValue239, ":first-child"),
    chunk5FUZZQ4RValue242.attr("class", "text"),
    cssStyles &&
      chunk5FUZZQ4RParam22.look !== "handDrawn" &&
      chunk5FUZZQ4RValue242.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunk5FUZZQ4RParam22.look !== "handDrawn" &&
      chunk5FUZZQ4RValue242.selectAll("path").attr("style", nodeStyles),
    chunk5FUZZQ4RValue242.attr(
      "transform",
      `translate(${chunk5FUZZQ4RValue230 - chunk5FUZZQ4RValue230 / 4}, 0)`,
    ),
    label.attr(
      "transform",
      `translate(${-chunk5FUZZQ4RValue228 / 2 + (chunk5FUZZQ4RParam22.padding ?? 0) / 2 - (bbox.x - (bbox.left ?? 0))},${-chunk5FUZZQ4RValue229 / 2 + (chunk5FUZZQ4RParam22.padding ?? 0) / 2 - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam22, chunk5FUZZQ4RValue242),
    (chunk5FUZZQ4RParam22.intersect = function (chunk5FUZZQ4RParam363) {
      return chunk5FUZZQ4RValue12.polygon(
        chunk5FUZZQ4RParam22,
        chunk5FUZZQ4RValue233,
        chunk5FUZZQ4RParam363,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper26, "curlyBraces");
async function chunk5FUZZQ4RHelper27(
  chunk5FUZZQ4RParam101,
  chunk5FUZZQ4RParam102,
) {
  let { labelStyles, nodeStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam102);
  chunk5FUZZQ4RParam102.labelStyle = labelStyles;
  let chunk5FUZZQ4RValue674 = chunk5FUZZQ4RParam102.padding ?? 0,
    chunk5FUZZQ4RValue675 =
      chunk5FUZZQ4RParam102.look === "neo" ? 16 : chunk5FUZZQ4RValue674,
    chunk5FUZZQ4RValue676 =
      chunk5FUZZQ4RParam102.look === "neo" ? 12 : chunk5FUZZQ4RValue674,
    { shapeSvg, bbox } = await chunk5FUZZQ4RS(
      chunk5FUZZQ4RParam101,
      chunk5FUZZQ4RParam102,
      chunk5FUZZQ4RValue2(chunk5FUZZQ4RParam102),
    ),
    chunk5FUZZQ4RValue677 = Math.max(
      20,
      (bbox.width + chunk5FUZZQ4RValue675 * 2) * 1.25,
      chunk5FUZZQ4RParam102?.width ?? 0,
    ),
    chunk5FUZZQ4RValue678 = Math.max(
      5,
      bbox.height + chunk5FUZZQ4RValue676 * 2,
      chunk5FUZZQ4RParam102?.height ?? 0,
    ),
    chunk5FUZZQ4RValue679 = chunk5FUZZQ4RValue678 / 2,
    { cssStyles } = chunk5FUZZQ4RParam102,
    chunk5FUZZQ4RValue680 = rough.svg(shapeSvg),
    chunk5FUZZQ4RValue681 = chunkX2U36JSPN(chunk5FUZZQ4RParam102, {});
  chunk5FUZZQ4RParam102.look !== "handDrawn" &&
    ((chunk5FUZZQ4RValue681.roughness = 0),
    (chunk5FUZZQ4RValue681.fillStyle = "solid"));
  let chunk5FUZZQ4RValue682 = chunk5FUZZQ4RValue677,
    chunk5FUZZQ4RValue683 = chunk5FUZZQ4RValue678,
    chunk5FUZZQ4RValue684 = chunk5FUZZQ4RValue682 - chunk5FUZZQ4RValue679,
    chunk5FUZZQ4RValue685 = chunk5FUZZQ4RValue683 / 4,
    chunk5FUZZQ4RValue686 = [
      {
        x: chunk5FUZZQ4RValue684,
        y: 0,
      },
      {
        x: chunk5FUZZQ4RValue685,
        y: 0,
      },
      {
        x: 0,
        y: chunk5FUZZQ4RValue683 / 2,
      },
      {
        x: chunk5FUZZQ4RValue685,
        y: chunk5FUZZQ4RValue683,
      },
      {
        x: chunk5FUZZQ4RValue684,
        y: chunk5FUZZQ4RValue683,
      },
      ...chunk5FUZZQ4RHelper3(
        -chunk5FUZZQ4RValue684,
        -chunk5FUZZQ4RValue683 / 2,
        chunk5FUZZQ4RValue679,
        50,
        270,
        90,
      ),
    ],
    chunk5FUZZQ4RValue687 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RValue686),
    chunk5FUZZQ4RValue688 = chunk5FUZZQ4RValue680.path(
      chunk5FUZZQ4RValue687,
      chunk5FUZZQ4RValue681,
    ),
    chunk5FUZZQ4RValue689 = shapeSvg.insert(
      () => chunk5FUZZQ4RValue688,
      ":first-child",
    );
  return (
    chunk5FUZZQ4RValue689.attr("class", "basic label-container outer-path"),
    cssStyles &&
      chunk5FUZZQ4RParam102.look !== "handDrawn" &&
      chunk5FUZZQ4RValue689.selectChildren("path").attr("style", cssStyles),
    nodeStyles &&
      chunk5FUZZQ4RParam102.look !== "handDrawn" &&
      chunk5FUZZQ4RValue689.selectChildren("path").attr("style", nodeStyles),
    chunk5FUZZQ4RValue689.attr(
      "transform",
      `translate(${-chunk5FUZZQ4RValue677 / 2}, ${-chunk5FUZZQ4RValue678 / 2})`,
    ),
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam102, chunk5FUZZQ4RValue689),
    (chunk5FUZZQ4RParam102.intersect = function (chunk5FUZZQ4RParam364) {
      return chunk5FUZZQ4RValue12.polygon(
        chunk5FUZZQ4RParam102,
        chunk5FUZZQ4RValue686,
        chunk5FUZZQ4RParam364,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper27, "curvedTrapezoid");
var _e = chunkAGHRB4JFN(
    (
      chunk5FUZZQ4RParam277,
      chunk5FUZZQ4RParam278,
      chunk5FUZZQ4RParam279,
      chunk5FUZZQ4RParam280,
      chunk5FUZZQ4RParam281,
      chunk5FUZZQ4RParam282,
    ) =>
      [
        `M${chunk5FUZZQ4RParam277},${chunk5FUZZQ4RParam278 + chunk5FUZZQ4RParam282}`,
        `a${chunk5FUZZQ4RParam281},${chunk5FUZZQ4RParam282} 0,0,0 ${chunk5FUZZQ4RParam279},0`,
        `a${chunk5FUZZQ4RParam281},${chunk5FUZZQ4RParam282} 0,0,0 ${-chunk5FUZZQ4RParam279},0`,
        `l0,${chunk5FUZZQ4RParam280}`,
        `a${chunk5FUZZQ4RParam281},${chunk5FUZZQ4RParam282} 0,0,0 ${chunk5FUZZQ4RParam279},0`,
        `l0,${-chunk5FUZZQ4RParam280}`,
      ].join(" "),
    "createCylinderPathD",
  ),
  chunk5FUZZQ4RValue14 = chunkAGHRB4JFN(
    (
      chunk5FUZZQ4RParam283,
      chunk5FUZZQ4RParam284,
      chunk5FUZZQ4RParam285,
      chunk5FUZZQ4RParam286,
      chunk5FUZZQ4RParam287,
      chunk5FUZZQ4RParam288,
    ) =>
      [
        `M${chunk5FUZZQ4RParam283},${chunk5FUZZQ4RParam284 + chunk5FUZZQ4RParam288}`,
        `M${chunk5FUZZQ4RParam283 + chunk5FUZZQ4RParam285},${chunk5FUZZQ4RParam284 + chunk5FUZZQ4RParam288}`,
        `a${chunk5FUZZQ4RParam287},${chunk5FUZZQ4RParam288} 0,0,0 ${-chunk5FUZZQ4RParam285},0`,
        `l0,${chunk5FUZZQ4RParam286}`,
        `a${chunk5FUZZQ4RParam287},${chunk5FUZZQ4RParam288} 0,0,0 ${chunk5FUZZQ4RParam285},0`,
        `l0,${-chunk5FUZZQ4RParam286}`,
      ].join(" "),
    "createOuterCylinderPathD",
  ),
  chunk5FUZZQ4RValue15 = chunkAGHRB4JFN(
    (
      chunk5FUZZQ4RParam327,
      chunk5FUZZQ4RParam328,
      chunk5FUZZQ4RParam329,
      chunk5FUZZQ4RParam330,
      chunk5FUZZQ4RParam331,
      chunk5FUZZQ4RParam332,
    ) =>
      [
        `M${chunk5FUZZQ4RParam327 - chunk5FUZZQ4RParam329 / 2},${-chunk5FUZZQ4RParam330 / 2}`,
        `a${chunk5FUZZQ4RParam331},${chunk5FUZZQ4RParam332} 0,0,0 ${chunk5FUZZQ4RParam329},0`,
      ].join(" "),
    "createInnerCylinderPathD",
  );
async function chunk5FUZZQ4RHelper28(
  chunk5FUZZQ4RParam32,
  chunk5FUZZQ4RParam33,
) {
  let { labelStyles, nodeStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam33);
  chunk5FUZZQ4RParam33.labelStyle = labelStyles;
  let chunk5FUZZQ4RValue276 = chunk5FUZZQ4RParam33.padding ?? 0,
    chunk5FUZZQ4RValue277 =
      chunk5FUZZQ4RParam33.look === "neo" ? 24 : chunk5FUZZQ4RValue276,
    chunk5FUZZQ4RValue278 =
      chunk5FUZZQ4RParam33.look === "neo" ? 24 : chunk5FUZZQ4RValue276;
  if (chunk5FUZZQ4RParam33.width || chunk5FUZZQ4RParam33.height) {
    let chunk5FUZZQ4RValue1114 = chunk5FUZZQ4RParam33.width ?? 0;
    chunk5FUZZQ4RParam33.width =
      (chunk5FUZZQ4RParam33.width ?? 0) - chunk5FUZZQ4RValue278;
    chunk5FUZZQ4RParam33.width < 8 && (chunk5FUZZQ4RParam33.width = 8);
    let chunk5FUZZQ4RValue1115 =
      chunk5FUZZQ4RValue1114 / 2 / (2.5 + chunk5FUZZQ4RValue1114 / 50);
    chunk5FUZZQ4RParam33.height =
      (chunk5FUZZQ4RParam33.height ?? 0) -
      chunk5FUZZQ4RValue277 -
      chunk5FUZZQ4RValue1115 * 3;
    chunk5FUZZQ4RParam33.height < 8 && (chunk5FUZZQ4RParam33.height = 8);
  }
  let { shapeSvg, bbox, label } = await chunk5FUZZQ4RS(
      chunk5FUZZQ4RParam32,
      chunk5FUZZQ4RParam33,
      chunk5FUZZQ4RValue2(chunk5FUZZQ4RParam33),
    ),
    chunk5FUZZQ4RValue279 =
      (chunk5FUZZQ4RParam33.width ? chunk5FUZZQ4RParam33.width : bbox.width) +
      chunk5FUZZQ4RValue278,
    chunk5FUZZQ4RValue280 = chunk5FUZZQ4RValue279 / 2,
    chunk5FUZZQ4RValue281 =
      chunk5FUZZQ4RValue280 / (2.5 + chunk5FUZZQ4RValue279 / 50),
    chunk5FUZZQ4RValue282 =
      (chunk5FUZZQ4RParam33.height
        ? chunk5FUZZQ4RParam33.height
        : bbox.height) +
      chunk5FUZZQ4RValue277 +
      chunk5FUZZQ4RValue281,
    chunk5FUZZQ4RValue283,
    { cssStyles: chunk5FUZZQ4RValue284 } = chunk5FUZZQ4RParam33;
  if (chunk5FUZZQ4RParam33.look === "handDrawn") {
    let chunk5FUZZQ4RValue997 = rough.svg(shapeSvg),
      chunk5FUZZQ4RValue998 = chunk5FUZZQ4RValue14(
        0,
        0,
        chunk5FUZZQ4RValue279,
        chunk5FUZZQ4RValue282,
        chunk5FUZZQ4RValue280,
        chunk5FUZZQ4RValue281,
      ),
      chunk5FUZZQ4RValue999 = chunk5FUZZQ4RValue15(
        0,
        chunk5FUZZQ4RValue281,
        chunk5FUZZQ4RValue279,
        chunk5FUZZQ4RValue282,
        chunk5FUZZQ4RValue280,
        chunk5FUZZQ4RValue281,
      ),
      chunk5FUZZQ4RValue1000 = chunkX2U36JSPN(chunk5FUZZQ4RParam33, {}),
      chunk5FUZZQ4RValue1001 = chunk5FUZZQ4RValue997.path(
        chunk5FUZZQ4RValue998,
        chunk5FUZZQ4RValue1000,
      ),
      chunk5FUZZQ4RValue1002 = chunk5FUZZQ4RValue997.path(
        chunk5FUZZQ4RValue999,
        chunkX2U36JSPN(chunk5FUZZQ4RParam33, {
          fill: "none",
        }),
      );
    chunk5FUZZQ4RValue283 = shapeSvg.insert(
      () => chunk5FUZZQ4RValue1002,
      ":first-child",
    );
    chunk5FUZZQ4RValue283 = shapeSvg.insert(
      () => chunk5FUZZQ4RValue1001,
      ":first-child",
    );
    chunk5FUZZQ4RValue283.attr("class", "basic label-container");
    chunk5FUZZQ4RValue284 &&
      chunk5FUZZQ4RValue283.attr("style", chunk5FUZZQ4RValue284);
  } else {
    let chunk5FUZZQ4RValue1121 = _e(
      0,
      0,
      chunk5FUZZQ4RValue279,
      chunk5FUZZQ4RValue282,
      chunk5FUZZQ4RValue280,
      chunk5FUZZQ4RValue281,
    );
    chunk5FUZZQ4RValue283 = shapeSvg
      .insert("path", ":first-child")
      .attr("d", chunk5FUZZQ4RValue1121)
      .attr("class", "basic label-container outer-path")
      .attr("style", chunk5PVQY5BWF(chunk5FUZZQ4RValue284))
      .attr("style", nodeStyles);
  }
  return (
    chunk5FUZZQ4RValue283.attr("label-offset-y", chunk5FUZZQ4RValue281),
    chunk5FUZZQ4RValue283.attr(
      "transform",
      `translate(${-chunk5FUZZQ4RValue279 / 2}, ${-(chunk5FUZZQ4RValue282 / 2 + chunk5FUZZQ4RValue281)})`,
    ),
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam33, chunk5FUZZQ4RValue283),
    label.attr(
      "transform",
      `translate(${-(bbox.width / 2) - (bbox.x - (bbox.left ?? 0))}, ${-(bbox.height / 2) + (chunk5FUZZQ4RParam33.padding ?? 0) / 1.5 - (bbox.y - (bbox.top ?? 0))})`,
    ),
    (chunk5FUZZQ4RParam33.intersect = function (chunk5FUZZQ4RParam191) {
      let chunk5FUZZQ4RValue932 = chunk5FUZZQ4RValue12.rect(
          chunk5FUZZQ4RParam33,
          chunk5FUZZQ4RParam191,
        ),
        chunk5FUZZQ4RValue933 =
          chunk5FUZZQ4RValue932.x - (chunk5FUZZQ4RParam33.x ?? 0);
      if (
        chunk5FUZZQ4RValue280 != 0 &&
        (Math.abs(chunk5FUZZQ4RValue933) <
          (chunk5FUZZQ4RParam33.width ?? 0) / 2 ||
          (Math.abs(chunk5FUZZQ4RValue933) ==
            (chunk5FUZZQ4RParam33.width ?? 0) / 2 &&
            Math.abs(chunk5FUZZQ4RValue932.y - (chunk5FUZZQ4RParam33.y ?? 0)) >
              (chunk5FUZZQ4RParam33.height ?? 0) / 2 - chunk5FUZZQ4RValue281))
      ) {
        let chunk5FUZZQ4RValue1137 =
          chunk5FUZZQ4RValue281 *
          chunk5FUZZQ4RValue281 *
          (1 -
            (chunk5FUZZQ4RValue933 * chunk5FUZZQ4RValue933) /
              (chunk5FUZZQ4RValue280 * chunk5FUZZQ4RValue280));
        chunk5FUZZQ4RValue1137 > 0 &&
          (chunk5FUZZQ4RValue1137 = Math.sqrt(chunk5FUZZQ4RValue1137));
        chunk5FUZZQ4RValue1137 = chunk5FUZZQ4RValue281 - chunk5FUZZQ4RValue1137;
        chunk5FUZZQ4RParam191.y - (chunk5FUZZQ4RParam33.y ?? 0) > 0 &&
          (chunk5FUZZQ4RValue1137 = -chunk5FUZZQ4RValue1137);
        chunk5FUZZQ4RValue932.y += chunk5FUZZQ4RValue1137;
      }
      return chunk5FUZZQ4RValue932;
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper28, "cylinder");
async function chunk5FUZZQ4RHelper29(
  chunk5FUZZQ4RParam91,
  chunk5FUZZQ4RParam92,
) {
  let { labelStyles, nodeStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam92);
  chunk5FUZZQ4RParam92.labelStyle = labelStyles;
  let chunk5FUZZQ4RValue637 =
      chunk5FUZZQ4RParam92.look === "neo"
        ? 16
        : (chunk5FUZZQ4RParam92.padding ?? 0),
    chunk5FUZZQ4RValue638 =
      chunk5FUZZQ4RParam92.look === "neo"
        ? 16
        : (chunk5FUZZQ4RParam92.padding ?? 0),
    { shapeSvg, bbox, label } = await chunk5FUZZQ4RS(
      chunk5FUZZQ4RParam91,
      chunk5FUZZQ4RParam92,
      chunk5FUZZQ4RValue2(chunk5FUZZQ4RParam92),
    ),
    chunk5FUZZQ4RValue639 = bbox.width + chunk5FUZZQ4RValue637,
    chunk5FUZZQ4RValue640 = bbox.height + chunk5FUZZQ4RValue638,
    chunk5FUZZQ4RValue641 = chunk5FUZZQ4RValue640 * 0.2,
    chunk5FUZZQ4RValue642 = -chunk5FUZZQ4RValue639 / 2,
    chunk5FUZZQ4RValue643 =
      -chunk5FUZZQ4RValue640 / 2 - chunk5FUZZQ4RValue641 / 2,
    { cssStyles } = chunk5FUZZQ4RParam92,
    chunk5FUZZQ4RValue644 = rough.svg(shapeSvg),
    chunk5FUZZQ4RValue645 = chunkX2U36JSPN(chunk5FUZZQ4RParam92, {});
  chunk5FUZZQ4RParam92.look !== "handDrawn" &&
    ((chunk5FUZZQ4RValue645.roughness = 0),
    (chunk5FUZZQ4RValue645.fillStyle = "solid"));
  let chunk5FUZZQ4RValue646 = [
      {
        x: chunk5FUZZQ4RValue642,
        y: chunk5FUZZQ4RValue643 + chunk5FUZZQ4RValue641,
      },
      {
        x: -chunk5FUZZQ4RValue642,
        y: chunk5FUZZQ4RValue643 + chunk5FUZZQ4RValue641,
      },
      {
        x: -chunk5FUZZQ4RValue642,
        y: -chunk5FUZZQ4RValue643,
      },
      {
        x: chunk5FUZZQ4RValue642,
        y: -chunk5FUZZQ4RValue643,
      },
      {
        x: chunk5FUZZQ4RValue642,
        y: chunk5FUZZQ4RValue643,
      },
      {
        x: -chunk5FUZZQ4RValue642,
        y: chunk5FUZZQ4RValue643,
      },
      {
        x: -chunk5FUZZQ4RValue642,
        y: chunk5FUZZQ4RValue643 + chunk5FUZZQ4RValue641,
      },
    ],
    chunk5FUZZQ4RValue647 = chunk5FUZZQ4RValue644.polygon(
      chunk5FUZZQ4RValue646.map((item) => [item.x, item.y]),
      chunk5FUZZQ4RValue645,
    ),
    chunk5FUZZQ4RValue648 = shapeSvg.insert(
      () => chunk5FUZZQ4RValue647,
      ":first-child",
    );
  return (
    chunk5FUZZQ4RValue648.attr("class", "basic label-container outer-path"),
    cssStyles &&
      chunk5FUZZQ4RParam92.look !== "handDrawn" &&
      chunk5FUZZQ4RValue648.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunk5FUZZQ4RParam92.look !== "handDrawn" &&
      chunk5FUZZQ4RValue648.selectAll("path").attr("style", nodeStyles),
    label.attr(
      "transform",
      `translate(${chunk5FUZZQ4RValue642 + (chunk5FUZZQ4RParam92.padding ?? 0) / 2 - (bbox.x - (bbox.left ?? 0))}, ${chunk5FUZZQ4RValue643 + chunk5FUZZQ4RValue641 + (chunk5FUZZQ4RParam92.padding ?? 0) / 2 - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam92, chunk5FUZZQ4RValue648),
    (chunk5FUZZQ4RParam92.intersect = function (chunk5FUZZQ4RParam402) {
      return chunk5FUZZQ4RValue12.rect(
        chunk5FUZZQ4RParam92,
        chunk5FUZZQ4RParam402,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper29, "dividedRectangle");
async function chunk5FUZZQ4RHelper30(
  chunk5FUZZQ4RParam76,
  chunk5FUZZQ4RParam77,
) {
  let { labelStyles, nodeStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam77),
    chunk5FUZZQ4RValue546 = chunk5FUZZQ4RParam77.look === "neo" ? 12 : 5;
  chunk5FUZZQ4RParam77.labelStyle = labelStyles;
  let chunk5FUZZQ4RValue547 = chunk5FUZZQ4RParam77.padding ?? 0,
    chunk5FUZZQ4RValue548 =
      chunk5FUZZQ4RParam77.look === "neo" ? 16 : chunk5FUZZQ4RValue547,
    { shapeSvg, bbox } = await chunk5FUZZQ4RS(
      chunk5FUZZQ4RParam76,
      chunk5FUZZQ4RParam77,
      chunk5FUZZQ4RValue2(chunk5FUZZQ4RParam77),
    ),
    chunk5FUZZQ4RValue549 =
      (chunk5FUZZQ4RParam77?.width
        ? chunk5FUZZQ4RParam77?.width / 2
        : bbox.width / 2) + (chunk5FUZZQ4RValue548 ?? 0),
    chunk5FUZZQ4RValue550 = chunk5FUZZQ4RValue549 - chunk5FUZZQ4RValue546,
    chunk5FUZZQ4RValue551,
    { cssStyles } = chunk5FUZZQ4RParam77;
  if (chunk5FUZZQ4RParam77.look === "handDrawn") {
    let chunk5FUZZQ4RValue984 = rough.svg(shapeSvg),
      chunk5FUZZQ4RValue985 = chunkX2U36JSPN(chunk5FUZZQ4RParam77, {
        roughness: 0.2,
        strokeWidth: 2.5,
      }),
      chunk5FUZZQ4RValue986 = chunkX2U36JSPN(chunk5FUZZQ4RParam77, {
        roughness: 0.2,
        strokeWidth: 1.5,
      }),
      chunk5FUZZQ4RValue987 = chunk5FUZZQ4RValue984.circle(
        0,
        0,
        chunk5FUZZQ4RValue549 * 2,
        chunk5FUZZQ4RValue985,
      ),
      chunk5FUZZQ4RValue988 = chunk5FUZZQ4RValue984.circle(
        0,
        0,
        chunk5FUZZQ4RValue550 * 2,
        chunk5FUZZQ4RValue986,
      );
    chunk5FUZZQ4RValue551 = shapeSvg.insert("g", ":first-child");
    chunk5FUZZQ4RValue551
      .attr("class", chunk5PVQY5BWF(chunk5FUZZQ4RParam77.cssClasses))
      .attr("style", chunk5PVQY5BWF(cssStyles));
    chunk5FUZZQ4RValue551.node()?.appendChild(chunk5FUZZQ4RValue987);
    chunk5FUZZQ4RValue551.node()?.appendChild(chunk5FUZZQ4RValue988);
  } else {
    chunk5FUZZQ4RValue551 = shapeSvg.insert("g", ":first-child");
    let chunk5FUZZQ4RValue939 = chunk5FUZZQ4RValue551.insert(
        "circle",
        ":first-child",
      ),
      chunk5FUZZQ4RValue940 = chunk5FUZZQ4RValue551.insert("circle");
    chunk5FUZZQ4RValue551
      .attr("class", "basic label-container")
      .attr("style", nodeStyles);
    chunk5FUZZQ4RValue939
      .attr("class", "outer-circle")
      .attr("style", nodeStyles)
      .attr("r", chunk5FUZZQ4RValue549)
      .attr("cx", 0)
      .attr("cy", 0);
    chunk5FUZZQ4RValue940
      .attr("class", "inner-circle")
      .attr("style", nodeStyles)
      .attr("r", chunk5FUZZQ4RValue550)
      .attr("cx", 0)
      .attr("cy", 0);
  }
  return (
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam77, chunk5FUZZQ4RValue551),
    (chunk5FUZZQ4RParam77.intersect = function (chunk5FUZZQ4RParam323) {
      return (
        chunkAGHRB4JFR.info(
          "DoubleCircle intersect",
          chunk5FUZZQ4RParam77,
          chunk5FUZZQ4RValue549,
          chunk5FUZZQ4RParam323,
        ),
        chunk5FUZZQ4RValue12.circle(
          chunk5FUZZQ4RParam77,
          chunk5FUZZQ4RValue549,
          chunk5FUZZQ4RParam323,
        )
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper30, "doublecircle");
function chunk5FUZZQ4RHelper31(
  chunk5FUZZQ4RParam147,
  chunk5FUZZQ4RParam148,
  { config: { themeVariables } },
) {
  let { labelStyles, nodeStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam148);
  chunk5FUZZQ4RParam148.label = "";
  chunk5FUZZQ4RParam148.labelStyle = labelStyles;
  let chunk5FUZZQ4RValue819 = chunk5FUZZQ4RParam147
      .insert("g")
      .attr("class", chunk5FUZZQ4RValue2(chunk5FUZZQ4RParam148))
      .attr("id", chunk5FUZZQ4RParam148.domId ?? chunk5FUZZQ4RParam148.id),
    { cssStyles } = chunk5FUZZQ4RParam148,
    chunk5FUZZQ4RValue820 = rough.svg(chunk5FUZZQ4RValue819),
    { nodeBorder } = themeVariables,
    chunk5FUZZQ4RValue821 = chunkX2U36JSPN(chunk5FUZZQ4RParam148, {
      fillStyle: "solid",
    });
  chunk5FUZZQ4RParam148.look !== "handDrawn" &&
    (chunk5FUZZQ4RValue821.roughness = 0);
  let chunk5FUZZQ4RValue822 = chunk5FUZZQ4RValue820.circle(
      0,
      0,
      14,
      chunk5FUZZQ4RValue821,
    ),
    chunk5FUZZQ4RValue823 = chunk5FUZZQ4RValue819.insert(
      () => chunk5FUZZQ4RValue822,
      ":first-child",
    );
  return (
    chunk5FUZZQ4RValue823
      .selectAll("path")
      .attr("style", `fill: ${nodeBorder} !important;`),
    cssStyles &&
      cssStyles.length > 0 &&
      chunk5FUZZQ4RParam148.look !== "handDrawn" &&
      chunk5FUZZQ4RValue823.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunk5FUZZQ4RParam148.look !== "handDrawn" &&
      chunk5FUZZQ4RValue823.selectAll("path").attr("style", nodeStyles),
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam148, chunk5FUZZQ4RValue823),
    (chunk5FUZZQ4RParam148.intersect = function (chunk5FUZZQ4RParam307) {
      return (
        chunkAGHRB4JFR.info("filledCircle intersect", chunk5FUZZQ4RParam148, {
          radius: 7,
          point: chunk5FUZZQ4RParam307,
        }),
        chunk5FUZZQ4RValue12.circle(
          chunk5FUZZQ4RParam148,
          7,
          chunk5FUZZQ4RParam307,
        )
      );
    }),
    chunk5FUZZQ4RValue819
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper31, "filledCircle");
async function chunk5FUZZQ4RHelper32(
  chunk5FUZZQ4RParam70,
  chunk5FUZZQ4RParam71,
) {
  let { labelStyles, nodeStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam71);
  chunk5FUZZQ4RParam71.labelStyle = labelStyles;
  let chunk5FUZZQ4RValue516 = chunk5FUZZQ4RParam71.padding ?? 0,
    chunk5FUZZQ4RValue517 =
      chunk5FUZZQ4RParam71.look === "neo"
        ? chunk5FUZZQ4RValue516 * 2
        : chunk5FUZZQ4RValue516;
  (chunk5FUZZQ4RParam71.width || chunk5FUZZQ4RParam71.height) &&
    ((chunk5FUZZQ4RParam71.height = chunk5FUZZQ4RParam71?.height ?? 0),
    chunk5FUZZQ4RParam71.height < 10 && (chunk5FUZZQ4RParam71.height = 10),
    (chunk5FUZZQ4RParam71.width =
      (chunk5FUZZQ4RParam71?.width ?? 0) -
      chunk5FUZZQ4RValue517 -
      chunk5FUZZQ4RValue517 / 2),
    chunk5FUZZQ4RParam71.width < 10 && (chunk5FUZZQ4RParam71.width = 10));
  let { shapeSvg, bbox, label } = await chunk5FUZZQ4RS(
      chunk5FUZZQ4RParam70,
      chunk5FUZZQ4RParam71,
      chunk5FUZZQ4RValue2(chunk5FUZZQ4RParam71),
    ),
    chunk5FUZZQ4RValue518 =
      (chunk5FUZZQ4RParam71?.width ? chunk5FUZZQ4RParam71?.width : bbox.width) +
      (chunk5FUZZQ4RValue517 ?? 0),
    chunk5FUZZQ4RValue519 = chunk5FUZZQ4RParam71?.height
      ? chunk5FUZZQ4RParam71?.height
      : chunk5FUZZQ4RValue518 + bbox.height,
    chunk5FUZZQ4RValue520 = chunk5FUZZQ4RValue519,
    chunk5FUZZQ4RValue521 = [
      {
        x: 0,
        y: -chunk5FUZZQ4RValue519,
      },
      {
        x: chunk5FUZZQ4RValue520,
        y: -chunk5FUZZQ4RValue519,
      },
      {
        x: chunk5FUZZQ4RValue520 / 2,
        y: 0,
      },
    ],
    { cssStyles } = chunk5FUZZQ4RParam71,
    chunk5FUZZQ4RValue522 = rough.svg(shapeSvg),
    chunk5FUZZQ4RValue523 = chunkX2U36JSPN(chunk5FUZZQ4RParam71, {});
  chunk5FUZZQ4RParam71.look !== "handDrawn" &&
    ((chunk5FUZZQ4RValue523.roughness = 0),
    (chunk5FUZZQ4RValue523.fillStyle = "solid"));
  let chunk5FUZZQ4RValue524 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RValue521),
    chunk5FUZZQ4RValue525 = chunk5FUZZQ4RValue522.path(
      chunk5FUZZQ4RValue524,
      chunk5FUZZQ4RValue523,
    ),
    chunk5FUZZQ4RValue526 = shapeSvg
      .insert(() => chunk5FUZZQ4RValue525, ":first-child")
      .attr(
        "transform",
        `translate(${-chunk5FUZZQ4RValue519 / 2}, ${chunk5FUZZQ4RValue519 / 2})`,
      )
      .attr("class", "outer-path");
  return (
    cssStyles &&
      chunk5FUZZQ4RParam71.look !== "handDrawn" &&
      chunk5FUZZQ4RValue526.selectChildren("path").attr("style", cssStyles),
    nodeStyles &&
      chunk5FUZZQ4RParam71.look !== "handDrawn" &&
      chunk5FUZZQ4RValue526.selectChildren("path").attr("style", nodeStyles),
    (chunk5FUZZQ4RParam71.width = chunk5FUZZQ4RValue518),
    (chunk5FUZZQ4RParam71.height = chunk5FUZZQ4RValue519),
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam71, chunk5FUZZQ4RValue526),
    label.attr(
      "transform",
      `translate(${-bbox.width / 2 - (bbox.x - (bbox.left ?? 0))}, ${-chunk5FUZZQ4RValue519 / 2 + (chunk5FUZZQ4RParam71.padding ?? 0) / 2 + (bbox.y - (bbox.top ?? 0))})`,
    ),
    (chunk5FUZZQ4RParam71.intersect = function (chunk5FUZZQ4RParam325) {
      return (
        chunkAGHRB4JFR.info(
          "Triangle intersect",
          chunk5FUZZQ4RParam71,
          chunk5FUZZQ4RValue521,
          chunk5FUZZQ4RParam325,
        ),
        chunk5FUZZQ4RValue12.polygon(
          chunk5FUZZQ4RParam71,
          chunk5FUZZQ4RValue521,
          chunk5FUZZQ4RParam325,
        )
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper32, "flippedTriangle");
function chunk5FUZZQ4RHelper33(
  chunk5FUZZQ4RParam129,
  chunk5FUZZQ4RParam130,
  { dir, config: { state, themeVariables } },
) {
  let { nodeStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam130);
  chunk5FUZZQ4RParam130.label = "";
  let chunk5FUZZQ4RValue753 = chunk5FUZZQ4RParam129
      .insert("g")
      .attr("class", chunk5FUZZQ4RValue2(chunk5FUZZQ4RParam130))
      .attr("id", chunk5FUZZQ4RParam130.domId ?? chunk5FUZZQ4RParam130.id),
    { cssStyles } = chunk5FUZZQ4RParam130,
    chunk5FUZZQ4RValue754 = Math.max(70, chunk5FUZZQ4RParam130?.width ?? 0),
    chunk5FUZZQ4RValue755 = Math.max(10, chunk5FUZZQ4RParam130?.height ?? 0);
  dir === "LR" &&
    ((chunk5FUZZQ4RValue754 = Math.max(10, chunk5FUZZQ4RParam130?.width ?? 0)),
    (chunk5FUZZQ4RValue755 = Math.max(70, chunk5FUZZQ4RParam130?.height ?? 0)));
  let chunk5FUZZQ4RValue756 = (-1 * chunk5FUZZQ4RValue754) / 2,
    chunk5FUZZQ4RValue757 = (-1 * chunk5FUZZQ4RValue755) / 2,
    chunk5FUZZQ4RValue758 = rough.svg(chunk5FUZZQ4RValue753),
    chunk5FUZZQ4RValue759 = chunkX2U36JSPN(chunk5FUZZQ4RParam130, {
      stroke: themeVariables.lineColor,
      fill: themeVariables.lineColor,
    });
  chunk5FUZZQ4RParam130.look !== "handDrawn" &&
    ((chunk5FUZZQ4RValue759.roughness = 0),
    (chunk5FUZZQ4RValue759.fillStyle = "solid"));
  let chunk5FUZZQ4RValue760 = chunk5FUZZQ4RValue758.rectangle(
      chunk5FUZZQ4RValue756,
      chunk5FUZZQ4RValue757,
      chunk5FUZZQ4RValue754,
      chunk5FUZZQ4RValue755,
      chunk5FUZZQ4RValue759,
    ),
    chunk5FUZZQ4RValue761 = chunk5FUZZQ4RValue753.insert(
      () => chunk5FUZZQ4RValue760,
      ":first-child",
    );
  cssStyles &&
    chunk5FUZZQ4RParam130.look !== "handDrawn" &&
    chunk5FUZZQ4RValue761.selectAll("path").attr("style", cssStyles);
  nodeStyles &&
    chunk5FUZZQ4RParam130.look !== "handDrawn" &&
    chunk5FUZZQ4RValue761.selectAll("path").attr("style", nodeStyles);
  chunk5FUZZQ4RU(chunk5FUZZQ4RParam130, chunk5FUZZQ4RValue761);
  let chunk5FUZZQ4RValue762 = state?.padding ?? 0;
  return (
    chunk5FUZZQ4RParam130.width &&
      chunk5FUZZQ4RParam130.height &&
      ((chunk5FUZZQ4RParam130.width += chunk5FUZZQ4RValue762 / 2 || 0),
      (chunk5FUZZQ4RParam130.height += chunk5FUZZQ4RValue762 / 2 || 0)),
    (chunk5FUZZQ4RParam130.intersect = function (chunk5FUZZQ4RParam403) {
      return chunk5FUZZQ4RValue12.rect(
        chunk5FUZZQ4RParam130,
        chunk5FUZZQ4RParam403,
      );
    }),
    chunk5FUZZQ4RValue753
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper33, "forkJoin");
async function chunk5FUZZQ4RHelper34(
  chunk5FUZZQ4RParam74,
  chunk5FUZZQ4RParam75,
) {
  let { labelStyles, nodeStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam75);
  chunk5FUZZQ4RParam75.labelStyle = labelStyles;
  let chunk5FUZZQ4RValue535 =
      chunk5FUZZQ4RParam75.look === "neo"
        ? 16
        : (chunk5FUZZQ4RParam75.padding ?? 0),
    chunk5FUZZQ4RValue536 =
      chunk5FUZZQ4RParam75.look === "neo"
        ? 12
        : (chunk5FUZZQ4RParam75.padding ?? 0);
  (chunk5FUZZQ4RParam75.width || chunk5FUZZQ4RParam75.height) &&
    ((chunk5FUZZQ4RParam75.height =
      (chunk5FUZZQ4RParam75?.height ?? 0) - chunk5FUZZQ4RValue536 * 2),
    chunk5FUZZQ4RParam75.height < 10 && (chunk5FUZZQ4RParam75.height = 10),
    (chunk5FUZZQ4RParam75.width =
      (chunk5FUZZQ4RParam75?.width ?? 0) - chunk5FUZZQ4RValue535 * 2),
    chunk5FUZZQ4RParam75.width < 15 && (chunk5FUZZQ4RParam75.width = 15));
  let { shapeSvg, bbox } = await chunk5FUZZQ4RS(
      chunk5FUZZQ4RParam74,
      chunk5FUZZQ4RParam75,
      chunk5FUZZQ4RValue2(chunk5FUZZQ4RParam75),
    ),
    chunk5FUZZQ4RValue537 =
      (chunk5FUZZQ4RParam75?.width
        ? chunk5FUZZQ4RParam75?.width
        : Math.max(15, bbox.width)) +
      chunk5FUZZQ4RValue535 * 2,
    chunk5FUZZQ4RValue538 =
      (chunk5FUZZQ4RParam75?.height
        ? chunk5FUZZQ4RParam75?.height
        : Math.max(10, bbox.height)) +
      chunk5FUZZQ4RValue536 * 2,
    chunk5FUZZQ4RValue539 = chunk5FUZZQ4RValue538 / 2,
    { cssStyles } = chunk5FUZZQ4RParam75,
    chunk5FUZZQ4RValue540 = rough.svg(shapeSvg),
    chunk5FUZZQ4RValue541 = chunkX2U36JSPN(chunk5FUZZQ4RParam75, {});
  chunk5FUZZQ4RParam75.look !== "handDrawn" &&
    ((chunk5FUZZQ4RValue541.roughness = 0),
    (chunk5FUZZQ4RValue541.fillStyle = "solid"));
  let chunk5FUZZQ4RValue542 = [
      {
        x: -chunk5FUZZQ4RValue537 / 2,
        y: -chunk5FUZZQ4RValue538 / 2,
      },
      {
        x: chunk5FUZZQ4RValue537 / 2 - chunk5FUZZQ4RValue539,
        y: -chunk5FUZZQ4RValue538 / 2,
      },
      ...chunk5FUZZQ4RHelper3(
        -chunk5FUZZQ4RValue537 / 2 + chunk5FUZZQ4RValue539,
        0,
        chunk5FUZZQ4RValue539,
        50,
        90,
        270,
      ),
      {
        x: chunk5FUZZQ4RValue537 / 2 - chunk5FUZZQ4RValue539,
        y: chunk5FUZZQ4RValue538 / 2,
      },
      {
        x: -chunk5FUZZQ4RValue537 / 2,
        y: chunk5FUZZQ4RValue538 / 2,
      },
    ],
    chunk5FUZZQ4RValue543 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RValue542),
    chunk5FUZZQ4RValue544 = chunk5FUZZQ4RValue540.path(
      chunk5FUZZQ4RValue543,
      chunk5FUZZQ4RValue541,
    ),
    chunk5FUZZQ4RValue545 = shapeSvg.insert(
      () => chunk5FUZZQ4RValue544,
      ":first-child",
    );
  return (
    chunk5FUZZQ4RValue545.attr("class", "basic label-container outer-path"),
    cssStyles &&
      chunk5FUZZQ4RParam75.look !== "handDrawn" &&
      chunk5FUZZQ4RValue545.selectChildren("path").attr("style", cssStyles),
    nodeStyles &&
      chunk5FUZZQ4RParam75.look !== "handDrawn" &&
      chunk5FUZZQ4RValue545.selectChildren("path").attr("style", nodeStyles),
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam75, chunk5FUZZQ4RValue545),
    (chunk5FUZZQ4RParam75.intersect = function (chunk5FUZZQ4RParam308) {
      return (
        chunkAGHRB4JFR.info("Pill intersect", chunk5FUZZQ4RParam75, {
          radius: chunk5FUZZQ4RValue539,
          point: chunk5FUZZQ4RParam308,
        }),
        chunk5FUZZQ4RValue12.polygon(
          chunk5FUZZQ4RParam75,
          chunk5FUZZQ4RValue542,
          chunk5FUZZQ4RParam308,
        )
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper34, "halfRoundedRectangle");
var chunk5FUZZQ4RValue19 = chunkAGHRB4JFN(
  (
    chunk5FUZZQ4RParam272,
    chunk5FUZZQ4RParam273,
    chunk5FUZZQ4RParam274,
    chunk5FUZZQ4RParam275,
    chunk5FUZZQ4RParam276,
  ) =>
    [
      `M${chunk5FUZZQ4RParam272 + chunk5FUZZQ4RParam276},${chunk5FUZZQ4RParam273}`,
      `L${chunk5FUZZQ4RParam272 + chunk5FUZZQ4RParam274 - chunk5FUZZQ4RParam276},${chunk5FUZZQ4RParam273}`,
      `L${chunk5FUZZQ4RParam272 + chunk5FUZZQ4RParam274},${chunk5FUZZQ4RParam273 - chunk5FUZZQ4RParam275 / 2}`,
      `L${chunk5FUZZQ4RParam272 + chunk5FUZZQ4RParam274 - chunk5FUZZQ4RParam276},${chunk5FUZZQ4RParam273 - chunk5FUZZQ4RParam275}`,
      `L${chunk5FUZZQ4RParam272 + chunk5FUZZQ4RParam276},${chunk5FUZZQ4RParam273 - chunk5FUZZQ4RParam275}`,
      `L${chunk5FUZZQ4RParam272},${chunk5FUZZQ4RParam273 - chunk5FUZZQ4RParam275 / 2}`,
      "Z",
    ].join(" "),
  "createHexagonPathD",
);
async function chunk5FUZZQ4RHelper35(
  chunk5FUZZQ4RParam95,
  chunk5FUZZQ4RParam96,
) {
  let { labelStyles, nodeStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam96),
    chunk5FUZZQ4RValue659 = chunk5FUZZQ4RParam96.look === "neo" ? 3.5 : 4;
  chunk5FUZZQ4RParam96.labelStyle = labelStyles;
  let chunk5FUZZQ4RValue660 = chunk5FUZZQ4RParam96.padding ?? 0,
    chunk5FUZZQ4RValue661 =
      chunk5FUZZQ4RParam96.look === "neo" ? 70 : chunk5FUZZQ4RValue660,
    chunk5FUZZQ4RValue662 =
      chunk5FUZZQ4RParam96.look === "neo" ? 32 : chunk5FUZZQ4RValue660;
  if (chunk5FUZZQ4RParam96.width || chunk5FUZZQ4RParam96.height) {
    let chunk5FUZZQ4RValue1196 =
      (chunk5FUZZQ4RParam96.height ?? 0) / chunk5FUZZQ4RValue659;
    chunk5FUZZQ4RParam96.width =
      (chunk5FUZZQ4RParam96?.width ?? 0) -
      2 * chunk5FUZZQ4RValue1196 -
      chunk5FUZZQ4RValue662;
    chunk5FUZZQ4RParam96.height =
      (chunk5FUZZQ4RParam96.height ?? 0) - chunk5FUZZQ4RValue661;
  }
  let { shapeSvg, bbox } = await chunk5FUZZQ4RS(
      chunk5FUZZQ4RParam95,
      chunk5FUZZQ4RParam96,
      chunk5FUZZQ4RValue2(chunk5FUZZQ4RParam96),
    ),
    chunk5FUZZQ4RValue663 =
      (chunk5FUZZQ4RParam96?.height
        ? chunk5FUZZQ4RParam96?.height
        : bbox.height) + chunk5FUZZQ4RValue661,
    chunk5FUZZQ4RValue664 = chunk5FUZZQ4RValue663 / chunk5FUZZQ4RValue659,
    chunk5FUZZQ4RValue665 =
      (chunk5FUZZQ4RParam96?.width ? chunk5FUZZQ4RParam96?.width : bbox.width) +
      2 * chunk5FUZZQ4RValue664 +
      chunk5FUZZQ4RValue662,
    chunk5FUZZQ4RValue666 = [
      {
        x: chunk5FUZZQ4RValue664,
        y: 0,
      },
      {
        x: chunk5FUZZQ4RValue665 - chunk5FUZZQ4RValue664,
        y: 0,
      },
      {
        x: chunk5FUZZQ4RValue665,
        y: -chunk5FUZZQ4RValue663 / 2,
      },
      {
        x: chunk5FUZZQ4RValue665 - chunk5FUZZQ4RValue664,
        y: -chunk5FUZZQ4RValue663,
      },
      {
        x: chunk5FUZZQ4RValue664,
        y: -chunk5FUZZQ4RValue663,
      },
      {
        x: 0,
        y: -chunk5FUZZQ4RValue663 / 2,
      },
    ],
    chunk5FUZZQ4RValue667,
    { cssStyles } = chunk5FUZZQ4RParam96;
  if (chunk5FUZZQ4RParam96.look === "handDrawn") {
    let chunk5FUZZQ4RValue1084 = rough.svg(shapeSvg),
      chunk5FUZZQ4RValue1085 = chunkX2U36JSPN(chunk5FUZZQ4RParam96, {}),
      chunk5FUZZQ4RValue1086 = chunk5FUZZQ4RValue19(
        0,
        0,
        chunk5FUZZQ4RValue665,
        chunk5FUZZQ4RValue663,
        chunk5FUZZQ4RValue664,
      ),
      chunk5FUZZQ4RValue1087 = chunk5FUZZQ4RValue1084.path(
        chunk5FUZZQ4RValue1086,
        chunk5FUZZQ4RValue1085,
      );
    chunk5FUZZQ4RValue667 = shapeSvg
      .insert(() => chunk5FUZZQ4RValue1087, ":first-child")
      .attr(
        "transform",
        `translate(${-chunk5FUZZQ4RValue665 / 2}, ${chunk5FUZZQ4RValue663 / 2})`,
      );
    cssStyles && chunk5FUZZQ4RValue667.attr("style", cssStyles);
  } else
    chunk5FUZZQ4RValue667 = chunk5FUZZQ4RHelper15(
      shapeSvg,
      chunk5FUZZQ4RValue665,
      chunk5FUZZQ4RValue663,
      chunk5FUZZQ4RValue666,
    );
  return (
    nodeStyles && chunk5FUZZQ4RValue667.attr("style", nodeStyles),
    (chunk5FUZZQ4RParam96.width = chunk5FUZZQ4RValue665),
    (chunk5FUZZQ4RParam96.height = chunk5FUZZQ4RValue663),
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam96, chunk5FUZZQ4RValue667),
    (chunk5FUZZQ4RParam96.intersect = function (chunk5FUZZQ4RParam365) {
      return chunk5FUZZQ4RValue12.polygon(
        chunk5FUZZQ4RParam96,
        chunk5FUZZQ4RValue666,
        chunk5FUZZQ4RParam365,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper35, "hexagon");
async function chunk5FUZZQ4RHelper36(
  chunk5FUZZQ4RParam134,
  chunk5FUZZQ4RParam135,
) {
  let { labelStyles, nodeStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam135);
  chunk5FUZZQ4RParam135.label = "";
  chunk5FUZZQ4RParam135.labelStyle = labelStyles;
  let { shapeSvg } = await chunk5FUZZQ4RS(
      chunk5FUZZQ4RParam134,
      chunk5FUZZQ4RParam135,
      chunk5FUZZQ4RValue2(chunk5FUZZQ4RParam135),
    ),
    chunk5FUZZQ4RValue779 = Math.max(30, chunk5FUZZQ4RParam135?.width ?? 0),
    chunk5FUZZQ4RValue780 = Math.max(30, chunk5FUZZQ4RParam135?.height ?? 0),
    { cssStyles } = chunk5FUZZQ4RParam135,
    chunk5FUZZQ4RValue781 = rough.svg(shapeSvg),
    chunk5FUZZQ4RValue782 = chunkX2U36JSPN(chunk5FUZZQ4RParam135, {});
  chunk5FUZZQ4RParam135.look !== "handDrawn" &&
    ((chunk5FUZZQ4RValue782.roughness = 0),
    (chunk5FUZZQ4RValue782.fillStyle = "solid"));
  let chunk5FUZZQ4RValue783 = [
      {
        x: 0,
        y: 0,
      },
      {
        x: chunk5FUZZQ4RValue779,
        y: 0,
      },
      {
        x: 0,
        y: chunk5FUZZQ4RValue780,
      },
      {
        x: chunk5FUZZQ4RValue779,
        y: chunk5FUZZQ4RValue780,
      },
    ],
    chunk5FUZZQ4RValue784 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RValue783),
    chunk5FUZZQ4RValue785 = chunk5FUZZQ4RValue781.path(
      chunk5FUZZQ4RValue784,
      chunk5FUZZQ4RValue782,
    ),
    chunk5FUZZQ4RValue786 = shapeSvg.insert(
      () => chunk5FUZZQ4RValue785,
      ":first-child",
    );
  return (
    chunk5FUZZQ4RValue786.attr("class", "basic label-container outer-path"),
    cssStyles &&
      chunk5FUZZQ4RParam135.look !== "handDrawn" &&
      chunk5FUZZQ4RValue786.selectChildren("path").attr("style", cssStyles),
    nodeStyles &&
      chunk5FUZZQ4RParam135.look !== "handDrawn" &&
      chunk5FUZZQ4RValue786.selectChildren("path").attr("style", nodeStyles),
    chunk5FUZZQ4RValue786.attr(
      "transform",
      `translate(${-chunk5FUZZQ4RValue779 / 2}, ${-chunk5FUZZQ4RValue780 / 2})`,
    ),
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam135, chunk5FUZZQ4RValue786),
    (chunk5FUZZQ4RParam135.intersect = function (chunk5FUZZQ4RParam320) {
      return (
        chunkAGHRB4JFR.info("Pill intersect", chunk5FUZZQ4RParam135, {
          points: chunk5FUZZQ4RValue783,
        }),
        chunk5FUZZQ4RValue12.polygon(
          chunk5FUZZQ4RParam135,
          chunk5FUZZQ4RValue783,
          chunk5FUZZQ4RParam320,
        )
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper36, "hourglass");
async function chunk5FUZZQ4RHelper37(
  chunk5FUZZQ4RParam11,
  chunk5FUZZQ4RParam12,
  { config: { themeVariables, flowchart } },
) {
  let { labelStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam12);
  chunk5FUZZQ4RParam12.labelStyle = labelStyles;
  let chunk5FUZZQ4RValue140 = chunk5FUZZQ4RParam12.assetHeight ?? 48,
    chunk5FUZZQ4RValue141 = chunk5FUZZQ4RParam12.assetWidth ?? 48,
    chunk5FUZZQ4RValue142 = Math.max(
      chunk5FUZZQ4RValue140,
      chunk5FUZZQ4RValue141,
    ),
    chunk5FUZZQ4RValue143 = flowchart?.wrappingWidth;
  chunk5FUZZQ4RParam12.width = Math.max(
    chunk5FUZZQ4RValue142,
    chunk5FUZZQ4RValue143 ?? 0,
  );
  let { shapeSvg, bbox, label } = await chunk5FUZZQ4RS(
      chunk5FUZZQ4RParam11,
      chunk5FUZZQ4RParam12,
      "icon-shape default",
    ),
    chunk5FUZZQ4RValue144 = chunk5FUZZQ4RParam12.pos === "t",
    chunk5FUZZQ4RValue145 = chunk5FUZZQ4RValue142,
    chunk5FUZZQ4RValue146 = chunk5FUZZQ4RValue142,
    { nodeBorder } = themeVariables,
    { stylesMap } = chunkX2U36JSPT(chunk5FUZZQ4RParam12),
    chunk5FUZZQ4RValue147 = -chunk5FUZZQ4RValue146 / 2,
    chunk5FUZZQ4RValue148 = -chunk5FUZZQ4RValue145 / 2,
    chunk5FUZZQ4RValue149 = chunk5FUZZQ4RParam12.label ? 8 : 0,
    chunk5FUZZQ4RValue150 = rough.svg(shapeSvg),
    chunk5FUZZQ4RValue151 = chunkX2U36JSPN(chunk5FUZZQ4RParam12, {
      stroke: "none",
      fill: "none",
    });
  chunk5FUZZQ4RParam12.look !== "handDrawn" &&
    ((chunk5FUZZQ4RValue151.roughness = 0),
    (chunk5FUZZQ4RValue151.fillStyle = "solid"));
  let chunk5FUZZQ4RValue152 = chunk5FUZZQ4RValue150.rectangle(
      chunk5FUZZQ4RValue147,
      chunk5FUZZQ4RValue148,
      chunk5FUZZQ4RValue146,
      chunk5FUZZQ4RValue145,
      chunk5FUZZQ4RValue151,
    ),
    chunk5FUZZQ4RValue153 = Math.max(chunk5FUZZQ4RValue146, bbox.width),
    _chunk5FUZZQ4RR =
      chunk5FUZZQ4RValue145 + bbox.height + chunk5FUZZQ4RValue149,
    chunk5FUZZQ4RValue154 = chunk5FUZZQ4RValue150.rectangle(
      -chunk5FUZZQ4RValue153 / 2,
      -_chunk5FUZZQ4RR / 2,
      chunk5FUZZQ4RValue153,
      _chunk5FUZZQ4RR,
      {
        ...chunk5FUZZQ4RValue151,
        fill: "transparent",
        stroke: "none",
      },
    ),
    chunk5FUZZQ4RValue155 = shapeSvg.insert(
      () => chunk5FUZZQ4RValue152,
      ":first-child",
    ),
    chunk5FUZZQ4RValue156 = shapeSvg.insert(() => chunk5FUZZQ4RValue154);
  if (chunk5FUZZQ4RParam12.icon) {
    let chunk5FUZZQ4RValue945 = shapeSvg.append("g");
    chunk5FUZZQ4RValue945.html(
      `<g>${await chunkU2HBQHQKR(chunk5FUZZQ4RParam12.icon, {
        height: chunk5FUZZQ4RValue142,
        width: chunk5FUZZQ4RValue142,
        fallbackPrefix: "",
      })}</g>`,
    );
    let chunk5FUZZQ4RValue946 = chunk5FUZZQ4RValue945.node().getBBox(),
      chunk5FUZZQ4RValue947 = chunk5FUZZQ4RValue946.width,
      chunk5FUZZQ4RValue948 = chunk5FUZZQ4RValue946.height,
      chunk5FUZZQ4RValue949 = chunk5FUZZQ4RValue946.x,
      chunk5FUZZQ4RValue950 = chunk5FUZZQ4RValue946.y;
    chunk5FUZZQ4RValue945.attr(
      "transform",
      `translate(${-chunk5FUZZQ4RValue947 / 2 - chunk5FUZZQ4RValue949},${chunk5FUZZQ4RValue144 ? bbox.height / 2 + chunk5FUZZQ4RValue149 / 2 - chunk5FUZZQ4RValue948 / 2 - chunk5FUZZQ4RValue950 : -bbox.height / 2 - chunk5FUZZQ4RValue149 / 2 - chunk5FUZZQ4RValue948 / 2 - chunk5FUZZQ4RValue950})`,
    );
    chunk5FUZZQ4RValue945.attr(
      "style",
      `color: ${stylesMap.get("stroke") ?? nodeBorder};`,
    );
  }
  return (
    label.attr(
      "transform",
      `translate(${-bbox.width / 2 - (bbox.x - (bbox.left ?? 0))},${chunk5FUZZQ4RValue144 ? -_chunk5FUZZQ4RR / 2 : _chunk5FUZZQ4RR / 2 - bbox.height})`,
    ),
    chunk5FUZZQ4RValue155.attr(
      "transform",
      `translate(0,${chunk5FUZZQ4RValue144 ? bbox.height / 2 + chunk5FUZZQ4RValue149 / 2 : -bbox.height / 2 - chunk5FUZZQ4RValue149 / 2})`,
    ),
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam12, chunk5FUZZQ4RValue156),
    (chunk5FUZZQ4RParam12.intersect = function (chunk5FUZZQ4RParam103) {
      if (
        (chunkAGHRB4JFR.info(
          "iconSquare intersect",
          chunk5FUZZQ4RParam12,
          chunk5FUZZQ4RParam103,
        ),
        !chunk5FUZZQ4RParam12.label)
      )
        return chunk5FUZZQ4RValue12.rect(
          chunk5FUZZQ4RParam12,
          chunk5FUZZQ4RParam103,
        );
      let chunk5FUZZQ4RValue690 = chunk5FUZZQ4RParam12.x ?? 0,
        chunk5FUZZQ4RValue691 = chunk5FUZZQ4RParam12.y ?? 0,
        chunk5FUZZQ4RValue692 = chunk5FUZZQ4RParam12.height ?? 0,
        chunk5FUZZQ4RValue693 = [];
      return (
        (chunk5FUZZQ4RValue693 = chunk5FUZZQ4RValue144
          ? [
              {
                x: chunk5FUZZQ4RValue690 - bbox.width / 2,
                y: chunk5FUZZQ4RValue691 - chunk5FUZZQ4RValue692 / 2,
              },
              {
                x: chunk5FUZZQ4RValue690 + bbox.width / 2,
                y: chunk5FUZZQ4RValue691 - chunk5FUZZQ4RValue692 / 2,
              },
              {
                x: chunk5FUZZQ4RValue690 + bbox.width / 2,
                y:
                  chunk5FUZZQ4RValue691 -
                  chunk5FUZZQ4RValue692 / 2 +
                  bbox.height +
                  chunk5FUZZQ4RValue149,
              },
              {
                x: chunk5FUZZQ4RValue690 + chunk5FUZZQ4RValue146 / 2,
                y:
                  chunk5FUZZQ4RValue691 -
                  chunk5FUZZQ4RValue692 / 2 +
                  bbox.height +
                  chunk5FUZZQ4RValue149,
              },
              {
                x: chunk5FUZZQ4RValue690 + chunk5FUZZQ4RValue146 / 2,
                y: chunk5FUZZQ4RValue691 + chunk5FUZZQ4RValue692 / 2,
              },
              {
                x: chunk5FUZZQ4RValue690 - chunk5FUZZQ4RValue146 / 2,
                y: chunk5FUZZQ4RValue691 + chunk5FUZZQ4RValue692 / 2,
              },
              {
                x: chunk5FUZZQ4RValue690 - chunk5FUZZQ4RValue146 / 2,
                y:
                  chunk5FUZZQ4RValue691 -
                  chunk5FUZZQ4RValue692 / 2 +
                  bbox.height +
                  chunk5FUZZQ4RValue149,
              },
              {
                x: chunk5FUZZQ4RValue690 - bbox.width / 2,
                y:
                  chunk5FUZZQ4RValue691 -
                  chunk5FUZZQ4RValue692 / 2 +
                  bbox.height +
                  chunk5FUZZQ4RValue149,
              },
            ]
          : [
              {
                x: chunk5FUZZQ4RValue690 - chunk5FUZZQ4RValue146 / 2,
                y: chunk5FUZZQ4RValue691 - chunk5FUZZQ4RValue692 / 2,
              },
              {
                x: chunk5FUZZQ4RValue690 + chunk5FUZZQ4RValue146 / 2,
                y: chunk5FUZZQ4RValue691 - chunk5FUZZQ4RValue692 / 2,
              },
              {
                x: chunk5FUZZQ4RValue690 + chunk5FUZZQ4RValue146 / 2,
                y:
                  chunk5FUZZQ4RValue691 -
                  chunk5FUZZQ4RValue692 / 2 +
                  chunk5FUZZQ4RValue145,
              },
              {
                x: chunk5FUZZQ4RValue690 + bbox.width / 2,
                y:
                  chunk5FUZZQ4RValue691 -
                  chunk5FUZZQ4RValue692 / 2 +
                  chunk5FUZZQ4RValue145,
              },
              {
                x: chunk5FUZZQ4RValue690 + bbox.width / 2 / 2,
                y: chunk5FUZZQ4RValue691 + chunk5FUZZQ4RValue692 / 2,
              },
              {
                x: chunk5FUZZQ4RValue690 - bbox.width / 2,
                y: chunk5FUZZQ4RValue691 + chunk5FUZZQ4RValue692 / 2,
              },
              {
                x: chunk5FUZZQ4RValue690 - bbox.width / 2,
                y:
                  chunk5FUZZQ4RValue691 -
                  chunk5FUZZQ4RValue692 / 2 +
                  chunk5FUZZQ4RValue145,
              },
              {
                x: chunk5FUZZQ4RValue690 - chunk5FUZZQ4RValue146 / 2,
                y:
                  chunk5FUZZQ4RValue691 -
                  chunk5FUZZQ4RValue692 / 2 +
                  chunk5FUZZQ4RValue145,
              },
            ]),
        chunk5FUZZQ4RValue12.polygon(
          chunk5FUZZQ4RParam12,
          chunk5FUZZQ4RValue693,
          chunk5FUZZQ4RParam103,
        )
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper37, "icon");
async function chunk5FUZZQ4RHelper38(
  chunk5FUZZQ4RParam46,
  chunk5FUZZQ4RParam47,
  { config: { themeVariables, flowchart } },
) {
  let { labelStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam47);
  chunk5FUZZQ4RParam47.labelStyle = labelStyles;
  let chunk5FUZZQ4RValue372 = chunk5FUZZQ4RParam47.assetHeight ?? 48,
    chunk5FUZZQ4RValue373 = chunk5FUZZQ4RParam47.assetWidth ?? 48,
    chunk5FUZZQ4RValue374 = Math.max(
      chunk5FUZZQ4RValue372,
      chunk5FUZZQ4RValue373,
    ),
    chunk5FUZZQ4RValue375 = flowchart?.wrappingWidth;
  chunk5FUZZQ4RParam47.width = Math.max(
    chunk5FUZZQ4RValue374,
    chunk5FUZZQ4RValue375 ?? 0,
  );
  let { shapeSvg, bbox, label } = await chunk5FUZZQ4RS(
      chunk5FUZZQ4RParam46,
      chunk5FUZZQ4RParam47,
      "icon-shape default",
    ),
    chunk5FUZZQ4RValue376 = chunk5FUZZQ4RParam47.label ? 8 : 0,
    chunk5FUZZQ4RValue377 = chunk5FUZZQ4RParam47.pos === "t",
    { nodeBorder: chunk5FUZZQ4RValue378, mainBkg } = themeVariables,
    { stylesMap } = chunkX2U36JSPT(chunk5FUZZQ4RParam47),
    chunk5FUZZQ4RValue379 = rough.svg(shapeSvg),
    chunk5FUZZQ4RValue380 = chunkX2U36JSPN(chunk5FUZZQ4RParam47, {});
  chunk5FUZZQ4RParam47.look !== "handDrawn" &&
    ((chunk5FUZZQ4RValue380.roughness = 0),
    (chunk5FUZZQ4RValue380.fillStyle = "solid"));
  chunk5FUZZQ4RValue380.stroke = stylesMap.get("fill") ?? mainBkg;
  let chunk5FUZZQ4RValue381 = shapeSvg.append("g");
  chunk5FUZZQ4RParam47.icon &&
    chunk5FUZZQ4RValue381.html(
      `<g>${await chunkU2HBQHQKR(chunk5FUZZQ4RParam47.icon, {
        height: chunk5FUZZQ4RValue374,
        width: chunk5FUZZQ4RValue374,
        fallbackPrefix: "",
      })}</g>`,
    );
  let chunk5FUZZQ4RValue382 = chunk5FUZZQ4RValue381.node().getBBox(),
    chunk5FUZZQ4RValue383 = chunk5FUZZQ4RValue382.width,
    chunk5FUZZQ4RValue384 = chunk5FUZZQ4RValue382.height,
    chunk5FUZZQ4RValue385 = chunk5FUZZQ4RValue382.x,
    _chunk5FUZZQ4RR = chunk5FUZZQ4RValue382.y,
    chunk5FUZZQ4RValue386 =
      Math.max(chunk5FUZZQ4RValue383, chunk5FUZZQ4RValue384) * Math.SQRT2 + 40,
    chunk5FUZZQ4RValue387 = chunk5FUZZQ4RValue379.circle(
      0,
      0,
      chunk5FUZZQ4RValue386,
      chunk5FUZZQ4RValue380,
    ),
    chunk5FUZZQ4RValue388 = Math.max(chunk5FUZZQ4RValue386, bbox.width),
    chunk5FUZZQ4RValue389 =
      chunk5FUZZQ4RValue386 + bbox.height + chunk5FUZZQ4RValue376,
    _chunk5FUZZQ4RI = chunk5FUZZQ4RValue379.rectangle(
      -chunk5FUZZQ4RValue388 / 2,
      -chunk5FUZZQ4RValue389 / 2,
      chunk5FUZZQ4RValue388,
      chunk5FUZZQ4RValue389,
      {
        ...chunk5FUZZQ4RValue380,
        fill: "transparent",
        stroke: "none",
      },
    ),
    _chunk5FUZZQ4RT = shapeSvg.insert(
      () => chunk5FUZZQ4RValue387,
      ":first-child",
    ),
    chunk5FUZZQ4RValue390 = shapeSvg.insert(() => _chunk5FUZZQ4RI);
  return (
    chunk5FUZZQ4RValue381.attr(
      "transform",
      `translate(${-chunk5FUZZQ4RValue383 / 2 - chunk5FUZZQ4RValue385},${chunk5FUZZQ4RValue377 ? bbox.height / 2 + chunk5FUZZQ4RValue376 / 2 - chunk5FUZZQ4RValue384 / 2 - _chunk5FUZZQ4RR : -bbox.height / 2 - chunk5FUZZQ4RValue376 / 2 - chunk5FUZZQ4RValue384 / 2 - _chunk5FUZZQ4RR})`,
    ),
    chunk5FUZZQ4RValue381.attr(
      "style",
      `color: ${stylesMap.get("stroke") ?? chunk5FUZZQ4RValue378};`,
    ),
    label.attr(
      "transform",
      `translate(${-bbox.width / 2 - (bbox.x - (bbox.left ?? 0))},${chunk5FUZZQ4RValue377 ? -chunk5FUZZQ4RValue389 / 2 : chunk5FUZZQ4RValue389 / 2 - bbox.height})`,
    ),
    _chunk5FUZZQ4RT.attr(
      "transform",
      `translate(0,${chunk5FUZZQ4RValue377 ? bbox.height / 2 + chunk5FUZZQ4RValue376 / 2 : -bbox.height / 2 - chunk5FUZZQ4RValue376 / 2})`,
    ),
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam47, chunk5FUZZQ4RValue390),
    (chunk5FUZZQ4RParam47.intersect = function (chunk5FUZZQ4RParam347) {
      return (
        chunkAGHRB4JFR.info(
          "iconSquare intersect",
          chunk5FUZZQ4RParam47,
          chunk5FUZZQ4RParam347,
        ),
        chunk5FUZZQ4RValue12.rect(chunk5FUZZQ4RParam47, chunk5FUZZQ4RParam347)
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper38, "iconCircle");
async function chunk5FUZZQ4RHelper39(
  chunk5FUZZQ4RParam7,
  chunk5FUZZQ4RParam8,
  { config: { themeVariables, flowchart } },
) {
  let { labelStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam8);
  chunk5FUZZQ4RParam8.labelStyle = labelStyles;
  let chunk5FUZZQ4RValue110 = chunk5FUZZQ4RParam8.assetHeight ?? 48,
    chunk5FUZZQ4RValue111 = chunk5FUZZQ4RParam8.assetWidth ?? 48,
    chunk5FUZZQ4RValue112 = Math.max(
      chunk5FUZZQ4RValue110,
      chunk5FUZZQ4RValue111,
    ),
    chunk5FUZZQ4RValue113 = flowchart?.wrappingWidth;
  chunk5FUZZQ4RParam8.width = Math.max(
    chunk5FUZZQ4RValue112,
    chunk5FUZZQ4RValue113 ?? 0,
  );
  let { shapeSvg, bbox, halfPadding, label } = await chunk5FUZZQ4RS(
      chunk5FUZZQ4RParam7,
      chunk5FUZZQ4RParam8,
      "icon-shape default",
    ),
    chunk5FUZZQ4RValue114 = chunk5FUZZQ4RParam8.pos === "t",
    chunk5FUZZQ4RValue115 = chunk5FUZZQ4RValue112 + halfPadding * 2,
    chunk5FUZZQ4RValue116 = chunk5FUZZQ4RValue112 + halfPadding * 2,
    { nodeBorder, mainBkg } = themeVariables,
    { stylesMap } = chunkX2U36JSPT(chunk5FUZZQ4RParam8),
    chunk5FUZZQ4RValue117 = -chunk5FUZZQ4RValue116 / 2,
    chunk5FUZZQ4RValue118 = -chunk5FUZZQ4RValue115 / 2,
    chunk5FUZZQ4RValue119 = chunk5FUZZQ4RParam8.label ? 8 : 0,
    chunk5FUZZQ4RValue120 = rough.svg(shapeSvg),
    chunk5FUZZQ4RValue121 = chunkX2U36JSPN(chunk5FUZZQ4RParam8, {});
  chunk5FUZZQ4RParam8.look !== "handDrawn" &&
    ((chunk5FUZZQ4RValue121.roughness = 0),
    (chunk5FUZZQ4RValue121.fillStyle = "solid"));
  chunk5FUZZQ4RValue121.stroke = stylesMap.get("fill") ?? mainBkg;
  let _chunk5FUZZQ4RR = chunk5FUZZQ4RValue120.path(
      chunk5FUZZQ4RValue4(
        chunk5FUZZQ4RValue117,
        chunk5FUZZQ4RValue118,
        chunk5FUZZQ4RValue116,
        chunk5FUZZQ4RValue115,
        5,
      ),
      chunk5FUZZQ4RValue121,
    ),
    chunk5FUZZQ4RValue122 = Math.max(chunk5FUZZQ4RValue116, bbox.width),
    chunk5FUZZQ4RValue123 =
      chunk5FUZZQ4RValue115 + bbox.height + chunk5FUZZQ4RValue119,
    chunk5FUZZQ4RValue124 = chunk5FUZZQ4RValue120.rectangle(
      -chunk5FUZZQ4RValue122 / 2,
      -chunk5FUZZQ4RValue123 / 2,
      chunk5FUZZQ4RValue122,
      chunk5FUZZQ4RValue123,
      {
        ...chunk5FUZZQ4RValue121,
        fill: "transparent",
        stroke: "none",
      },
    ),
    _chunk5FUZZQ4RI = shapeSvg
      .insert(() => _chunk5FUZZQ4RR, ":first-child")
      .attr("class", "icon-shape2"),
    _chunk5FUZZQ4RT = shapeSvg.insert(() => chunk5FUZZQ4RValue124);
  if (chunk5FUZZQ4RParam8.icon) {
    let chunk5FUZZQ4RValue951 = shapeSvg.append("g");
    chunk5FUZZQ4RValue951.html(
      `<g>${await chunkU2HBQHQKR(chunk5FUZZQ4RParam8.icon, {
        height: chunk5FUZZQ4RValue112,
        width: chunk5FUZZQ4RValue112,
        fallbackPrefix: "",
      })}</g>`,
    );
    let chunk5FUZZQ4RValue952 = chunk5FUZZQ4RValue951.node().getBBox(),
      chunk5FUZZQ4RValue953 = chunk5FUZZQ4RValue952.width,
      chunk5FUZZQ4RValue954 = chunk5FUZZQ4RValue952.height,
      chunk5FUZZQ4RValue955 = chunk5FUZZQ4RValue952.x,
      chunk5FUZZQ4RValue956 = chunk5FUZZQ4RValue952.y;
    chunk5FUZZQ4RValue951.attr(
      "transform",
      `translate(${-chunk5FUZZQ4RValue953 / 2 - chunk5FUZZQ4RValue955},${chunk5FUZZQ4RValue114 ? bbox.height / 2 + chunk5FUZZQ4RValue119 / 2 - chunk5FUZZQ4RValue954 / 2 - chunk5FUZZQ4RValue956 : -bbox.height / 2 - chunk5FUZZQ4RValue119 / 2 - chunk5FUZZQ4RValue954 / 2 - chunk5FUZZQ4RValue956})`,
    );
    chunk5FUZZQ4RValue951.attr(
      "style",
      `color: ${stylesMap.get("stroke") ?? nodeBorder};`,
    );
  }
  return (
    label.attr(
      "transform",
      `translate(${-bbox.width / 2 - (bbox.x - (bbox.left ?? 0))},${chunk5FUZZQ4RValue114 ? -chunk5FUZZQ4RValue123 / 2 : chunk5FUZZQ4RValue123 / 2 - bbox.height})`,
    ),
    _chunk5FUZZQ4RI.attr(
      "transform",
      `translate(0,${chunk5FUZZQ4RValue114 ? bbox.height / 2 + chunk5FUZZQ4RValue119 / 2 : -bbox.height / 2 - chunk5FUZZQ4RValue119 / 2})`,
    ),
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam8, _chunk5FUZZQ4RT),
    (chunk5FUZZQ4RParam8.intersect = function (chunk5FUZZQ4RParam104) {
      if (
        (chunkAGHRB4JFR.info(
          "iconSquare intersect",
          chunk5FUZZQ4RParam8,
          chunk5FUZZQ4RParam104,
        ),
        !chunk5FUZZQ4RParam8.label)
      )
        return chunk5FUZZQ4RValue12.rect(
          chunk5FUZZQ4RParam8,
          chunk5FUZZQ4RParam104,
        );
      let chunk5FUZZQ4RValue694 = chunk5FUZZQ4RParam8.x ?? 0,
        chunk5FUZZQ4RValue695 = chunk5FUZZQ4RParam8.y ?? 0,
        chunk5FUZZQ4RValue696 = chunk5FUZZQ4RParam8.height ?? 0,
        chunk5FUZZQ4RValue697 = [];
      return (
        (chunk5FUZZQ4RValue697 = chunk5FUZZQ4RValue114
          ? [
              {
                x: chunk5FUZZQ4RValue694 - bbox.width / 2,
                y: chunk5FUZZQ4RValue695 - chunk5FUZZQ4RValue696 / 2,
              },
              {
                x: chunk5FUZZQ4RValue694 + bbox.width / 2,
                y: chunk5FUZZQ4RValue695 - chunk5FUZZQ4RValue696 / 2,
              },
              {
                x: chunk5FUZZQ4RValue694 + bbox.width / 2,
                y:
                  chunk5FUZZQ4RValue695 -
                  chunk5FUZZQ4RValue696 / 2 +
                  bbox.height +
                  chunk5FUZZQ4RValue119,
              },
              {
                x: chunk5FUZZQ4RValue694 + chunk5FUZZQ4RValue116 / 2,
                y:
                  chunk5FUZZQ4RValue695 -
                  chunk5FUZZQ4RValue696 / 2 +
                  bbox.height +
                  chunk5FUZZQ4RValue119,
              },
              {
                x: chunk5FUZZQ4RValue694 + chunk5FUZZQ4RValue116 / 2,
                y: chunk5FUZZQ4RValue695 + chunk5FUZZQ4RValue696 / 2,
              },
              {
                x: chunk5FUZZQ4RValue694 - chunk5FUZZQ4RValue116 / 2,
                y: chunk5FUZZQ4RValue695 + chunk5FUZZQ4RValue696 / 2,
              },
              {
                x: chunk5FUZZQ4RValue694 - chunk5FUZZQ4RValue116 / 2,
                y:
                  chunk5FUZZQ4RValue695 -
                  chunk5FUZZQ4RValue696 / 2 +
                  bbox.height +
                  chunk5FUZZQ4RValue119,
              },
              {
                x: chunk5FUZZQ4RValue694 - bbox.width / 2,
                y:
                  chunk5FUZZQ4RValue695 -
                  chunk5FUZZQ4RValue696 / 2 +
                  bbox.height +
                  chunk5FUZZQ4RValue119,
              },
            ]
          : [
              {
                x: chunk5FUZZQ4RValue694 - chunk5FUZZQ4RValue116 / 2,
                y: chunk5FUZZQ4RValue695 - chunk5FUZZQ4RValue696 / 2,
              },
              {
                x: chunk5FUZZQ4RValue694 + chunk5FUZZQ4RValue116 / 2,
                y: chunk5FUZZQ4RValue695 - chunk5FUZZQ4RValue696 / 2,
              },
              {
                x: chunk5FUZZQ4RValue694 + chunk5FUZZQ4RValue116 / 2,
                y:
                  chunk5FUZZQ4RValue695 -
                  chunk5FUZZQ4RValue696 / 2 +
                  chunk5FUZZQ4RValue115,
              },
              {
                x: chunk5FUZZQ4RValue694 + bbox.width / 2,
                y:
                  chunk5FUZZQ4RValue695 -
                  chunk5FUZZQ4RValue696 / 2 +
                  chunk5FUZZQ4RValue115,
              },
              {
                x: chunk5FUZZQ4RValue694 + bbox.width / 2 / 2,
                y: chunk5FUZZQ4RValue695 + chunk5FUZZQ4RValue696 / 2,
              },
              {
                x: chunk5FUZZQ4RValue694 - bbox.width / 2,
                y: chunk5FUZZQ4RValue695 + chunk5FUZZQ4RValue696 / 2,
              },
              {
                x: chunk5FUZZQ4RValue694 - bbox.width / 2,
                y:
                  chunk5FUZZQ4RValue695 -
                  chunk5FUZZQ4RValue696 / 2 +
                  chunk5FUZZQ4RValue115,
              },
              {
                x: chunk5FUZZQ4RValue694 - chunk5FUZZQ4RValue116 / 2,
                y:
                  chunk5FUZZQ4RValue695 -
                  chunk5FUZZQ4RValue696 / 2 +
                  chunk5FUZZQ4RValue115,
              },
            ]),
        chunk5FUZZQ4RValue12.polygon(
          chunk5FUZZQ4RParam8,
          chunk5FUZZQ4RValue697,
          chunk5FUZZQ4RParam104,
        )
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper39, "iconRounded");
async function chunk5FUZZQ4RHelper40(
  chunk5FUZZQ4RParam9,
  chunk5FUZZQ4RParam10,
  { config: { themeVariables, flowchart } },
) {
  let { labelStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam10);
  chunk5FUZZQ4RParam10.labelStyle = labelStyles;
  let chunk5FUZZQ4RValue125 = chunk5FUZZQ4RParam10.assetHeight ?? 48,
    chunk5FUZZQ4RValue126 = chunk5FUZZQ4RParam10.assetWidth ?? 48,
    chunk5FUZZQ4RValue127 = Math.max(
      chunk5FUZZQ4RValue125,
      chunk5FUZZQ4RValue126,
    ),
    chunk5FUZZQ4RValue128 = flowchart?.wrappingWidth;
  chunk5FUZZQ4RParam10.width = Math.max(
    chunk5FUZZQ4RValue127,
    chunk5FUZZQ4RValue128 ?? 0,
  );
  let { shapeSvg, bbox, halfPadding, label } = await chunk5FUZZQ4RS(
      chunk5FUZZQ4RParam9,
      chunk5FUZZQ4RParam10,
      "icon-shape default",
    ),
    chunk5FUZZQ4RValue129 = chunk5FUZZQ4RParam10.pos === "t",
    chunk5FUZZQ4RValue130 = chunk5FUZZQ4RValue127 + halfPadding * 2,
    chunk5FUZZQ4RValue131 = chunk5FUZZQ4RValue127 + halfPadding * 2,
    { nodeBorder, mainBkg } = themeVariables,
    { stylesMap } = chunkX2U36JSPT(chunk5FUZZQ4RParam10),
    chunk5FUZZQ4RValue132 = -chunk5FUZZQ4RValue131 / 2,
    chunk5FUZZQ4RValue133 = -chunk5FUZZQ4RValue130 / 2,
    chunk5FUZZQ4RValue134 = chunk5FUZZQ4RParam10.label ? 8 : 0,
    chunk5FUZZQ4RValue135 = rough.svg(shapeSvg),
    chunk5FUZZQ4RValue136 = chunkX2U36JSPN(chunk5FUZZQ4RParam10, {});
  chunk5FUZZQ4RParam10.look !== "handDrawn" &&
    ((chunk5FUZZQ4RValue136.roughness = 0),
    (chunk5FUZZQ4RValue136.fillStyle = "solid"));
  chunk5FUZZQ4RValue136.stroke = stylesMap.get("fill") ?? mainBkg;
  let _chunk5FUZZQ4RR = chunk5FUZZQ4RValue135.path(
      chunk5FUZZQ4RValue4(
        chunk5FUZZQ4RValue132,
        chunk5FUZZQ4RValue133,
        chunk5FUZZQ4RValue131,
        chunk5FUZZQ4RValue130,
        0.1,
      ),
      chunk5FUZZQ4RValue136,
    ),
    chunk5FUZZQ4RValue137 = Math.max(chunk5FUZZQ4RValue131, bbox.width),
    chunk5FUZZQ4RValue138 =
      chunk5FUZZQ4RValue130 + bbox.height + chunk5FUZZQ4RValue134,
    chunk5FUZZQ4RValue139 = chunk5FUZZQ4RValue135.rectangle(
      -chunk5FUZZQ4RValue137 / 2,
      -chunk5FUZZQ4RValue138 / 2,
      chunk5FUZZQ4RValue137,
      chunk5FUZZQ4RValue138,
      {
        ...chunk5FUZZQ4RValue136,
        fill: "transparent",
        stroke: "none",
      },
    ),
    _chunk5FUZZQ4RI = shapeSvg.insert(() => _chunk5FUZZQ4RR, ":first-child"),
    _chunk5FUZZQ4RT = shapeSvg.insert(() => chunk5FUZZQ4RValue139);
  if (chunk5FUZZQ4RParam10.icon) {
    let chunk5FUZZQ4RValue957 = shapeSvg.append("g");
    chunk5FUZZQ4RValue957.html(
      `<g>${await chunkU2HBQHQKR(chunk5FUZZQ4RParam10.icon, {
        height: chunk5FUZZQ4RValue127,
        width: chunk5FUZZQ4RValue127,
        fallbackPrefix: "",
      })}</g>`,
    );
    let chunk5FUZZQ4RValue958 = chunk5FUZZQ4RValue957.node().getBBox(),
      chunk5FUZZQ4RValue959 = chunk5FUZZQ4RValue958.width,
      chunk5FUZZQ4RValue960 = chunk5FUZZQ4RValue958.height,
      chunk5FUZZQ4RValue961 = chunk5FUZZQ4RValue958.x,
      chunk5FUZZQ4RValue962 = chunk5FUZZQ4RValue958.y;
    chunk5FUZZQ4RValue957.attr(
      "transform",
      `translate(${-chunk5FUZZQ4RValue959 / 2 - chunk5FUZZQ4RValue961},${chunk5FUZZQ4RValue129 ? bbox.height / 2 + chunk5FUZZQ4RValue134 / 2 - chunk5FUZZQ4RValue960 / 2 - chunk5FUZZQ4RValue962 : -bbox.height / 2 - chunk5FUZZQ4RValue134 / 2 - chunk5FUZZQ4RValue960 / 2 - chunk5FUZZQ4RValue962})`,
    );
    chunk5FUZZQ4RValue957.attr(
      "style",
      `color: ${stylesMap.get("stroke") ?? nodeBorder};`,
    );
  }
  return (
    label.attr(
      "transform",
      `translate(${-bbox.width / 2 - (bbox.x - (bbox.left ?? 0))},${chunk5FUZZQ4RValue129 ? -chunk5FUZZQ4RValue138 / 2 : chunk5FUZZQ4RValue138 / 2 - bbox.height})`,
    ),
    _chunk5FUZZQ4RI.attr(
      "transform",
      `translate(0,${chunk5FUZZQ4RValue129 ? bbox.height / 2 + chunk5FUZZQ4RValue134 / 2 : -bbox.height / 2 - chunk5FUZZQ4RValue134 / 2})`,
    ),
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam10, _chunk5FUZZQ4RT),
    (chunk5FUZZQ4RParam10.intersect = function (chunk5FUZZQ4RParam105) {
      if (
        (chunkAGHRB4JFR.info(
          "iconSquare intersect",
          chunk5FUZZQ4RParam10,
          chunk5FUZZQ4RParam105,
        ),
        !chunk5FUZZQ4RParam10.label)
      )
        return chunk5FUZZQ4RValue12.rect(
          chunk5FUZZQ4RParam10,
          chunk5FUZZQ4RParam105,
        );
      let chunk5FUZZQ4RValue698 = chunk5FUZZQ4RParam10.x ?? 0,
        chunk5FUZZQ4RValue699 = chunk5FUZZQ4RParam10.y ?? 0,
        chunk5FUZZQ4RValue700 = chunk5FUZZQ4RParam10.height ?? 0,
        chunk5FUZZQ4RValue701 = [];
      return (
        (chunk5FUZZQ4RValue701 = chunk5FUZZQ4RValue129
          ? [
              {
                x: chunk5FUZZQ4RValue698 - bbox.width / 2,
                y: chunk5FUZZQ4RValue699 - chunk5FUZZQ4RValue700 / 2,
              },
              {
                x: chunk5FUZZQ4RValue698 + bbox.width / 2,
                y: chunk5FUZZQ4RValue699 - chunk5FUZZQ4RValue700 / 2,
              },
              {
                x: chunk5FUZZQ4RValue698 + bbox.width / 2,
                y:
                  chunk5FUZZQ4RValue699 -
                  chunk5FUZZQ4RValue700 / 2 +
                  bbox.height +
                  chunk5FUZZQ4RValue134,
              },
              {
                x: chunk5FUZZQ4RValue698 + chunk5FUZZQ4RValue131 / 2,
                y:
                  chunk5FUZZQ4RValue699 -
                  chunk5FUZZQ4RValue700 / 2 +
                  bbox.height +
                  chunk5FUZZQ4RValue134,
              },
              {
                x: chunk5FUZZQ4RValue698 + chunk5FUZZQ4RValue131 / 2,
                y: chunk5FUZZQ4RValue699 + chunk5FUZZQ4RValue700 / 2,
              },
              {
                x: chunk5FUZZQ4RValue698 - chunk5FUZZQ4RValue131 / 2,
                y: chunk5FUZZQ4RValue699 + chunk5FUZZQ4RValue700 / 2,
              },
              {
                x: chunk5FUZZQ4RValue698 - chunk5FUZZQ4RValue131 / 2,
                y:
                  chunk5FUZZQ4RValue699 -
                  chunk5FUZZQ4RValue700 / 2 +
                  bbox.height +
                  chunk5FUZZQ4RValue134,
              },
              {
                x: chunk5FUZZQ4RValue698 - bbox.width / 2,
                y:
                  chunk5FUZZQ4RValue699 -
                  chunk5FUZZQ4RValue700 / 2 +
                  bbox.height +
                  chunk5FUZZQ4RValue134,
              },
            ]
          : [
              {
                x: chunk5FUZZQ4RValue698 - chunk5FUZZQ4RValue131 / 2,
                y: chunk5FUZZQ4RValue699 - chunk5FUZZQ4RValue700 / 2,
              },
              {
                x: chunk5FUZZQ4RValue698 + chunk5FUZZQ4RValue131 / 2,
                y: chunk5FUZZQ4RValue699 - chunk5FUZZQ4RValue700 / 2,
              },
              {
                x: chunk5FUZZQ4RValue698 + chunk5FUZZQ4RValue131 / 2,
                y:
                  chunk5FUZZQ4RValue699 -
                  chunk5FUZZQ4RValue700 / 2 +
                  chunk5FUZZQ4RValue130,
              },
              {
                x: chunk5FUZZQ4RValue698 + bbox.width / 2,
                y:
                  chunk5FUZZQ4RValue699 -
                  chunk5FUZZQ4RValue700 / 2 +
                  chunk5FUZZQ4RValue130,
              },
              {
                x: chunk5FUZZQ4RValue698 + bbox.width / 2 / 2,
                y: chunk5FUZZQ4RValue699 + chunk5FUZZQ4RValue700 / 2,
              },
              {
                x: chunk5FUZZQ4RValue698 - bbox.width / 2,
                y: chunk5FUZZQ4RValue699 + chunk5FUZZQ4RValue700 / 2,
              },
              {
                x: chunk5FUZZQ4RValue698 - bbox.width / 2,
                y:
                  chunk5FUZZQ4RValue699 -
                  chunk5FUZZQ4RValue700 / 2 +
                  chunk5FUZZQ4RValue130,
              },
              {
                x: chunk5FUZZQ4RValue698 - chunk5FUZZQ4RValue131 / 2,
                y:
                  chunk5FUZZQ4RValue699 -
                  chunk5FUZZQ4RValue700 / 2 +
                  chunk5FUZZQ4RValue130,
              },
            ]),
        chunk5FUZZQ4RValue12.polygon(
          chunk5FUZZQ4RParam10,
          chunk5FUZZQ4RValue701,
          chunk5FUZZQ4RParam105,
        )
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper40, "iconSquare");
async function chunk5FUZZQ4RHelper41(
  chunk5FUZZQ4RParam5,
  chunk5FUZZQ4RParam6,
  { config: { flowchart } },
) {
  let chunk5FUZZQ4RValue91 = new Image();
  chunk5FUZZQ4RValue91.src = chunk5FUZZQ4RParam6?.img ?? "";
  await chunk5FUZZQ4RValue91.decode();
  let chunk5FUZZQ4RValue92 = Number(
      chunk5FUZZQ4RValue91.naturalWidth.toString().replace("px", ""),
    ),
    chunk5FUZZQ4RValue93 = Number(
      chunk5FUZZQ4RValue91.naturalHeight.toString().replace("px", ""),
    );
  chunk5FUZZQ4RParam6.imageAspectRatio =
    chunk5FUZZQ4RValue92 / chunk5FUZZQ4RValue93;
  let { labelStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam6);
  chunk5FUZZQ4RParam6.labelStyle = labelStyles;
  let chunk5FUZZQ4RValue94 = flowchart?.wrappingWidth;
  chunk5FUZZQ4RParam6.defaultWidth = flowchart?.wrappingWidth;
  let chunk5FUZZQ4RValue95 = Math.max(
      chunk5FUZZQ4RParam6.label ? (chunk5FUZZQ4RValue94 ?? 0) : 0,
      chunk5FUZZQ4RParam6?.assetWidth ?? chunk5FUZZQ4RValue92,
    ),
    chunk5FUZZQ4RValue96 =
      chunk5FUZZQ4RParam6.constraint === "on" &&
      chunk5FUZZQ4RParam6?.assetHeight
        ? chunk5FUZZQ4RParam6.assetHeight * chunk5FUZZQ4RParam6.imageAspectRatio
        : chunk5FUZZQ4RValue95,
    chunk5FUZZQ4RValue97 =
      chunk5FUZZQ4RParam6.constraint === "on"
        ? chunk5FUZZQ4RValue96 / chunk5FUZZQ4RParam6.imageAspectRatio
        : (chunk5FUZZQ4RParam6?.assetHeight ?? chunk5FUZZQ4RValue93);
  chunk5FUZZQ4RParam6.width = Math.max(
    chunk5FUZZQ4RValue96,
    chunk5FUZZQ4RValue94 ?? 0,
  );
  let { shapeSvg, bbox, label } = await chunk5FUZZQ4RS(
      chunk5FUZZQ4RParam5,
      chunk5FUZZQ4RParam6,
      "image-shape default",
    ),
    chunk5FUZZQ4RValue98 = chunk5FUZZQ4RParam6.pos === "t",
    chunk5FUZZQ4RValue99 = -chunk5FUZZQ4RValue96 / 2,
    chunk5FUZZQ4RValue100 = -chunk5FUZZQ4RValue97 / 2,
    chunk5FUZZQ4RValue101 = chunk5FUZZQ4RParam6.label ? 8 : 0,
    chunk5FUZZQ4RValue102 = rough.svg(shapeSvg),
    chunk5FUZZQ4RValue103 = chunkX2U36JSPN(chunk5FUZZQ4RParam6, {});
  chunk5FUZZQ4RParam6.look !== "handDrawn" &&
    ((chunk5FUZZQ4RValue103.roughness = 0),
    (chunk5FUZZQ4RValue103.fillStyle = "solid"));
  let chunk5FUZZQ4RValue104 = chunk5FUZZQ4RValue102.rectangle(
      chunk5FUZZQ4RValue99,
      chunk5FUZZQ4RValue100,
      chunk5FUZZQ4RValue96,
      chunk5FUZZQ4RValue97,
      chunk5FUZZQ4RValue103,
    ),
    chunk5FUZZQ4RValue105 = Math.max(chunk5FUZZQ4RValue96, bbox.width),
    chunk5FUZZQ4RValue106 =
      chunk5FUZZQ4RValue97 + bbox.height + chunk5FUZZQ4RValue101,
    chunk5FUZZQ4RValue107 = chunk5FUZZQ4RValue102.rectangle(
      -chunk5FUZZQ4RValue105 / 2,
      -chunk5FUZZQ4RValue106 / 2,
      chunk5FUZZQ4RValue105,
      chunk5FUZZQ4RValue106,
      {
        ...chunk5FUZZQ4RValue103,
        fill: "none",
        stroke: "none",
      },
    ),
    chunk5FUZZQ4RValue108 = shapeSvg.insert(
      () => chunk5FUZZQ4RValue104,
      ":first-child",
    ),
    chunk5FUZZQ4RValue109 = shapeSvg.insert(() => chunk5FUZZQ4RValue107);
  if (chunk5FUZZQ4RParam6.img) {
    let chunk5FUZZQ4RValue1092 = shapeSvg.append("image");
    chunk5FUZZQ4RValue1092.attr("href", chunk5FUZZQ4RParam6.img);
    chunk5FUZZQ4RValue1092.attr("width", chunk5FUZZQ4RValue96);
    chunk5FUZZQ4RValue1092.attr("height", chunk5FUZZQ4RValue97);
    chunk5FUZZQ4RValue1092.attr("preserveAspectRatio", "none");
    chunk5FUZZQ4RValue1092.attr(
      "transform",
      `translate(${-chunk5FUZZQ4RValue96 / 2},${chunk5FUZZQ4RValue98 ? chunk5FUZZQ4RValue106 / 2 - chunk5FUZZQ4RValue97 : -chunk5FUZZQ4RValue106 / 2})`,
    );
  }
  return (
    label.attr(
      "transform",
      `translate(${-bbox.width / 2 - (bbox.x - (bbox.left ?? 0))},${chunk5FUZZQ4RValue98 ? -chunk5FUZZQ4RValue97 / 2 - bbox.height / 2 - chunk5FUZZQ4RValue101 / 2 : chunk5FUZZQ4RValue97 / 2 - bbox.height / 2 + chunk5FUZZQ4RValue101 / 2})`,
    ),
    chunk5FUZZQ4RValue108.attr(
      "transform",
      `translate(0,${chunk5FUZZQ4RValue98 ? bbox.height / 2 + chunk5FUZZQ4RValue101 / 2 : -bbox.height / 2 - chunk5FUZZQ4RValue101 / 2})`,
    ),
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam6, chunk5FUZZQ4RValue109),
    (chunk5FUZZQ4RParam6.intersect = function (chunk5FUZZQ4RParam106) {
      if (
        (chunkAGHRB4JFR.info(
          "iconSquare intersect",
          chunk5FUZZQ4RParam6,
          chunk5FUZZQ4RParam106,
        ),
        !chunk5FUZZQ4RParam6.label)
      )
        return chunk5FUZZQ4RValue12.rect(
          chunk5FUZZQ4RParam6,
          chunk5FUZZQ4RParam106,
        );
      let chunk5FUZZQ4RValue702 = chunk5FUZZQ4RParam6.x ?? 0,
        chunk5FUZZQ4RValue703 = chunk5FUZZQ4RParam6.y ?? 0,
        chunk5FUZZQ4RValue704 = chunk5FUZZQ4RParam6.height ?? 0,
        chunk5FUZZQ4RValue705 = [];
      return (
        (chunk5FUZZQ4RValue705 = chunk5FUZZQ4RValue98
          ? [
              {
                x: chunk5FUZZQ4RValue702 - bbox.width / 2,
                y: chunk5FUZZQ4RValue703 - chunk5FUZZQ4RValue704 / 2,
              },
              {
                x: chunk5FUZZQ4RValue702 + bbox.width / 2,
                y: chunk5FUZZQ4RValue703 - chunk5FUZZQ4RValue704 / 2,
              },
              {
                x: chunk5FUZZQ4RValue702 + bbox.width / 2,
                y:
                  chunk5FUZZQ4RValue703 -
                  chunk5FUZZQ4RValue704 / 2 +
                  bbox.height +
                  chunk5FUZZQ4RValue101,
              },
              {
                x: chunk5FUZZQ4RValue702 + chunk5FUZZQ4RValue96 / 2,
                y:
                  chunk5FUZZQ4RValue703 -
                  chunk5FUZZQ4RValue704 / 2 +
                  bbox.height +
                  chunk5FUZZQ4RValue101,
              },
              {
                x: chunk5FUZZQ4RValue702 + chunk5FUZZQ4RValue96 / 2,
                y: chunk5FUZZQ4RValue703 + chunk5FUZZQ4RValue704 / 2,
              },
              {
                x: chunk5FUZZQ4RValue702 - chunk5FUZZQ4RValue96 / 2,
                y: chunk5FUZZQ4RValue703 + chunk5FUZZQ4RValue704 / 2,
              },
              {
                x: chunk5FUZZQ4RValue702 - chunk5FUZZQ4RValue96 / 2,
                y:
                  chunk5FUZZQ4RValue703 -
                  chunk5FUZZQ4RValue704 / 2 +
                  bbox.height +
                  chunk5FUZZQ4RValue101,
              },
              {
                x: chunk5FUZZQ4RValue702 - bbox.width / 2,
                y:
                  chunk5FUZZQ4RValue703 -
                  chunk5FUZZQ4RValue704 / 2 +
                  bbox.height +
                  chunk5FUZZQ4RValue101,
              },
            ]
          : [
              {
                x: chunk5FUZZQ4RValue702 - chunk5FUZZQ4RValue96 / 2,
                y: chunk5FUZZQ4RValue703 - chunk5FUZZQ4RValue704 / 2,
              },
              {
                x: chunk5FUZZQ4RValue702 + chunk5FUZZQ4RValue96 / 2,
                y: chunk5FUZZQ4RValue703 - chunk5FUZZQ4RValue704 / 2,
              },
              {
                x: chunk5FUZZQ4RValue702 + chunk5FUZZQ4RValue96 / 2,
                y:
                  chunk5FUZZQ4RValue703 -
                  chunk5FUZZQ4RValue704 / 2 +
                  chunk5FUZZQ4RValue97,
              },
              {
                x: chunk5FUZZQ4RValue702 + bbox.width / 2,
                y:
                  chunk5FUZZQ4RValue703 -
                  chunk5FUZZQ4RValue704 / 2 +
                  chunk5FUZZQ4RValue97,
              },
              {
                x: chunk5FUZZQ4RValue702 + bbox.width / 2 / 2,
                y: chunk5FUZZQ4RValue703 + chunk5FUZZQ4RValue704 / 2,
              },
              {
                x: chunk5FUZZQ4RValue702 - bbox.width / 2,
                y: chunk5FUZZQ4RValue703 + chunk5FUZZQ4RValue704 / 2,
              },
              {
                x: chunk5FUZZQ4RValue702 - bbox.width / 2,
                y:
                  chunk5FUZZQ4RValue703 -
                  chunk5FUZZQ4RValue704 / 2 +
                  chunk5FUZZQ4RValue97,
              },
              {
                x: chunk5FUZZQ4RValue702 - chunk5FUZZQ4RValue96 / 2,
                y:
                  chunk5FUZZQ4RValue703 -
                  chunk5FUZZQ4RValue704 / 2 +
                  chunk5FUZZQ4RValue97,
              },
            ]),
        chunk5FUZZQ4RValue12.polygon(
          chunk5FUZZQ4RParam6,
          chunk5FUZZQ4RValue705,
          chunk5FUZZQ4RParam106,
        )
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper41, "imageSquare");
async function chunk5FUZZQ4RHelper42(
  chunk5FUZZQ4RParam136,
  chunk5FUZZQ4RParam137,
) {
  let { labelStyles, nodeStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam137);
  chunk5FUZZQ4RParam137.labelStyle = labelStyles;
  let chunk5FUZZQ4RValue787 = chunk5FUZZQ4RParam137.padding ?? 0,
    chunk5FUZZQ4RValue788 = chunk5FUZZQ4RValue787,
    chunk5FUZZQ4RValue789 =
      chunk5FUZZQ4RParam137.look === "neo"
        ? chunk5FUZZQ4RValue787 * 2
        : chunk5FUZZQ4RValue787,
    { shapeSvg, bbox } = await chunk5FUZZQ4RS(
      chunk5FUZZQ4RParam136,
      chunk5FUZZQ4RParam137,
      chunk5FUZZQ4RValue2(chunk5FUZZQ4RParam137),
    ),
    chunk5FUZZQ4RValue790 = Math.max(
      bbox.width + (chunk5FUZZQ4RValue789 ?? 0) * 2,
      chunk5FUZZQ4RParam137?.width ?? 0,
    ),
    chunk5FUZZQ4RValue791 = Math.max(
      bbox.height + (chunk5FUZZQ4RValue788 ?? 0) * 2,
      chunk5FUZZQ4RParam137?.height ?? 0,
    ),
    chunk5FUZZQ4RValue792 = [
      {
        x: 0,
        y: 0,
      },
      {
        x: chunk5FUZZQ4RValue790,
        y: 0,
      },
      {
        x: chunk5FUZZQ4RValue790 + (3 * chunk5FUZZQ4RValue791) / 6,
        y: -chunk5FUZZQ4RValue791,
      },
      {
        x: (-3 * chunk5FUZZQ4RValue791) / 6,
        y: -chunk5FUZZQ4RValue791,
      },
    ],
    chunk5FUZZQ4RValue793,
    { cssStyles } = chunk5FUZZQ4RParam137;
  if (chunk5FUZZQ4RParam137.look === "handDrawn") {
    let chunk5FUZZQ4RValue1098 = rough.svg(shapeSvg),
      chunk5FUZZQ4RValue1099 = chunkX2U36JSPN(chunk5FUZZQ4RParam137, {}),
      chunk5FUZZQ4RValue1100 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RValue792),
      chunk5FUZZQ4RValue1101 = chunk5FUZZQ4RValue1098.path(
        chunk5FUZZQ4RValue1100,
        chunk5FUZZQ4RValue1099,
      );
    chunk5FUZZQ4RValue793 = shapeSvg
      .insert(() => chunk5FUZZQ4RValue1101, ":first-child")
      .attr(
        "transform",
        `translate(${-chunk5FUZZQ4RValue790 / 2}, ${chunk5FUZZQ4RValue791 / 2})`,
      );
    cssStyles && chunk5FUZZQ4RValue793.attr("style", cssStyles);
  } else
    chunk5FUZZQ4RValue793 = chunk5FUZZQ4RHelper15(
      shapeSvg,
      chunk5FUZZQ4RValue790,
      chunk5FUZZQ4RValue791,
      chunk5FUZZQ4RValue792,
    );
  return (
    nodeStyles && chunk5FUZZQ4RValue793.attr("style", nodeStyles),
    (chunk5FUZZQ4RParam137.width = chunk5FUZZQ4RValue790),
    (chunk5FUZZQ4RParam137.height = chunk5FUZZQ4RValue791),
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam137, chunk5FUZZQ4RValue793),
    (chunk5FUZZQ4RParam137.intersect = function (chunk5FUZZQ4RParam366) {
      return chunk5FUZZQ4RValue12.polygon(
        chunk5FUZZQ4RParam137,
        chunk5FUZZQ4RValue792,
        chunk5FUZZQ4RParam366,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper42, "inv_trapezoid");
async function chunk5FUZZQ4RHelper43(
  chunk5FUZZQ4RParam109,
  chunk5FUZZQ4RParam110,
  chunk5FUZZQ4RParam111,
) {
  let { labelStyles, nodeStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam110);
  chunk5FUZZQ4RParam110.labelStyle = labelStyles;
  let { shapeSvg, bbox } = await chunk5FUZZQ4RS(
      chunk5FUZZQ4RParam109,
      chunk5FUZZQ4RParam110,
      chunk5FUZZQ4RValue2(chunk5FUZZQ4RParam110),
    ),
    chunk5FUZZQ4RValue714 = Math.max(
      bbox.width + chunk5FUZZQ4RParam111.labelPaddingX * 2,
      chunk5FUZZQ4RParam110?.width || 0,
    ),
    chunk5FUZZQ4RValue715 = Math.max(
      bbox.height + chunk5FUZZQ4RParam111.labelPaddingY * 2,
      chunk5FUZZQ4RParam110?.height || 0,
    ),
    chunk5FUZZQ4RValue716 = -chunk5FUZZQ4RValue714 / 2,
    chunk5FUZZQ4RValue717 = -chunk5FUZZQ4RValue715 / 2,
    chunk5FUZZQ4RValue718,
    { rx, ry } = chunk5FUZZQ4RParam110,
    { cssStyles } = chunk5FUZZQ4RParam110;
  if (
    (chunk5FUZZQ4RParam111?.rx &&
      chunk5FUZZQ4RParam111.ry &&
      ((rx = chunk5FUZZQ4RParam111.rx), (ry = chunk5FUZZQ4RParam111.ry)),
    chunk5FUZZQ4RParam110.look === "handDrawn")
  ) {
    let chunk5FUZZQ4RValue1078 = rough.svg(shapeSvg),
      chunk5FUZZQ4RValue1079 = chunkX2U36JSPN(chunk5FUZZQ4RParam110, {}),
      chunk5FUZZQ4RValue1080 =
        rx || ry
          ? chunk5FUZZQ4RValue1078.path(
              chunk5FUZZQ4RValue4(
                chunk5FUZZQ4RValue716,
                chunk5FUZZQ4RValue717,
                chunk5FUZZQ4RValue714,
                chunk5FUZZQ4RValue715,
                rx || 0,
              ),
              chunk5FUZZQ4RValue1079,
            )
          : chunk5FUZZQ4RValue1078.rectangle(
              chunk5FUZZQ4RValue716,
              chunk5FUZZQ4RValue717,
              chunk5FUZZQ4RValue714,
              chunk5FUZZQ4RValue715,
              chunk5FUZZQ4RValue1079,
            );
    chunk5FUZZQ4RValue718 = shapeSvg.insert(
      () => chunk5FUZZQ4RValue1080,
      ":first-child",
    );
    chunk5FUZZQ4RValue718
      .attr("class", "basic label-container")
      .attr("style", chunk5PVQY5BWF(cssStyles));
  } else {
    chunk5FUZZQ4RValue718 = shapeSvg.insert("rect", ":first-child");
    chunk5FUZZQ4RValue718
      .attr("class", "basic label-container")
      .attr("style", nodeStyles)
      .attr("rx", chunk5PVQY5BWF(rx))
      .attr("ry", chunk5PVQY5BWF(ry))
      .attr("x", chunk5FUZZQ4RValue716)
      .attr("y", chunk5FUZZQ4RValue717)
      .attr("width", chunk5FUZZQ4RValue714)
      .attr("height", chunk5FUZZQ4RValue715);
  }
  return (
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam110, chunk5FUZZQ4RValue718),
    (chunk5FUZZQ4RParam110.calcIntersect = function (
      chunk5FUZZQ4RParam391,
      chunk5FUZZQ4RParam392,
    ) {
      return chunk5FUZZQ4RValue12.rect(
        chunk5FUZZQ4RParam391,
        chunk5FUZZQ4RParam392,
      );
    }),
    (chunk5FUZZQ4RParam110.intersect = function (chunk5FUZZQ4RParam404) {
      return chunk5FUZZQ4RValue12.rect(
        chunk5FUZZQ4RParam110,
        chunk5FUZZQ4RParam404,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper43, "drawRect");
async function chunk5FUZZQ4RHelper44(
  chunk5FUZZQ4RParam193,
  chunk5FUZZQ4RParam194,
) {
  let { shapeSvg, bbox, label } = await chunk5FUZZQ4RS(
      chunk5FUZZQ4RParam193,
      chunk5FUZZQ4RParam194,
      "label",
    ),
    chunk5FUZZQ4RValue941 = shapeSvg.insert("rect", ":first-child");
  return (
    chunk5FUZZQ4RValue941.attr("width", 0.1).attr("height", 0.1),
    shapeSvg.attr("class", "label edgeLabel"),
    label.attr(
      "transform",
      `translate(${-(bbox.width / 2) - (bbox.x - (bbox.left ?? 0))}, ${-(bbox.height / 2) - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam194, chunk5FUZZQ4RValue941),
    (chunk5FUZZQ4RParam194.intersect = function (chunk5FUZZQ4RParam405) {
      return chunk5FUZZQ4RValue12.rect(
        chunk5FUZZQ4RParam194,
        chunk5FUZZQ4RParam405,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper44, "labelRect");
async function chunk5FUZZQ4RHelper45(
  chunk5FUZZQ4RParam143,
  chunk5FUZZQ4RParam144,
) {
  let { labelStyles, nodeStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam144);
  chunk5FUZZQ4RParam144.labelStyle = labelStyles;
  let chunk5FUZZQ4RValue805 = chunk5FUZZQ4RParam144.padding ?? 0,
    chunk5FUZZQ4RValue806 = chunk5FUZZQ4RValue805,
    chunk5FUZZQ4RValue807 =
      chunk5FUZZQ4RParam144.look === "neo"
        ? chunk5FUZZQ4RValue805 * 2
        : chunk5FUZZQ4RValue805,
    { shapeSvg, bbox } = await chunk5FUZZQ4RS(
      chunk5FUZZQ4RParam143,
      chunk5FUZZQ4RParam144,
      chunk5FUZZQ4RValue2(chunk5FUZZQ4RParam144),
    ),
    chunk5FUZZQ4RValue808 =
      (chunk5FUZZQ4RParam144?.height ?? bbox.height) + chunk5FUZZQ4RValue806,
    chunk5FUZZQ4RValue809 =
      (chunk5FUZZQ4RParam144?.width ?? bbox.width) + chunk5FUZZQ4RValue807,
    chunk5FUZZQ4RValue810 = [
      {
        x: 0,
        y: 0,
      },
      {
        x: chunk5FUZZQ4RValue809 + (3 * chunk5FUZZQ4RValue808) / 6,
        y: 0,
      },
      {
        x: chunk5FUZZQ4RValue809,
        y: -chunk5FUZZQ4RValue808,
      },
      {
        x: -(3 * chunk5FUZZQ4RValue808) / 6,
        y: -chunk5FUZZQ4RValue808,
      },
    ],
    chunk5FUZZQ4RValue811,
    { cssStyles } = chunk5FUZZQ4RParam144;
  if (chunk5FUZZQ4RParam144.look === "handDrawn") {
    let chunk5FUZZQ4RValue1102 = rough.svg(shapeSvg),
      chunk5FUZZQ4RValue1103 = chunkX2U36JSPN(chunk5FUZZQ4RParam144, {}),
      chunk5FUZZQ4RValue1104 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RValue810),
      chunk5FUZZQ4RValue1105 = chunk5FUZZQ4RValue1102.path(
        chunk5FUZZQ4RValue1104,
        chunk5FUZZQ4RValue1103,
      );
    chunk5FUZZQ4RValue811 = shapeSvg
      .insert(() => chunk5FUZZQ4RValue1105, ":first-child")
      .attr(
        "transform",
        `translate(${-chunk5FUZZQ4RValue809 / 2}, ${chunk5FUZZQ4RValue808 / 2})`,
      );
    cssStyles && chunk5FUZZQ4RValue811.attr("style", cssStyles);
  } else
    chunk5FUZZQ4RValue811 = chunk5FUZZQ4RHelper15(
      shapeSvg,
      chunk5FUZZQ4RValue809,
      chunk5FUZZQ4RValue808,
      chunk5FUZZQ4RValue810,
    );
  return (
    nodeStyles && chunk5FUZZQ4RValue811.attr("style", nodeStyles),
    (chunk5FUZZQ4RParam144.width = chunk5FUZZQ4RValue809),
    (chunk5FUZZQ4RParam144.height = chunk5FUZZQ4RValue808),
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam144, chunk5FUZZQ4RValue811),
    (chunk5FUZZQ4RParam144.intersect = function (chunk5FUZZQ4RParam367) {
      return chunk5FUZZQ4RValue12.polygon(
        chunk5FUZZQ4RParam144,
        chunk5FUZZQ4RValue810,
        chunk5FUZZQ4RParam367,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper45, "lean_left");
async function chunk5FUZZQ4RHelper46(
  chunk5FUZZQ4RParam145,
  chunk5FUZZQ4RParam146,
) {
  let { labelStyles, nodeStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam146);
  chunk5FUZZQ4RParam146.labelStyle = labelStyles;
  let chunk5FUZZQ4RValue812 = chunk5FUZZQ4RParam146.padding ?? 0,
    chunk5FUZZQ4RValue813 = chunk5FUZZQ4RValue812,
    chunk5FUZZQ4RValue814 =
      chunk5FUZZQ4RParam146.look === "neo"
        ? chunk5FUZZQ4RValue812 * 2
        : chunk5FUZZQ4RValue812,
    { shapeSvg, bbox } = await chunk5FUZZQ4RS(
      chunk5FUZZQ4RParam145,
      chunk5FUZZQ4RParam146,
      chunk5FUZZQ4RValue2(chunk5FUZZQ4RParam146),
    ),
    chunk5FUZZQ4RValue815 =
      (chunk5FUZZQ4RParam146?.height ?? bbox.height) + chunk5FUZZQ4RValue813,
    chunk5FUZZQ4RValue816 =
      (chunk5FUZZQ4RParam146?.width ?? bbox.width) + chunk5FUZZQ4RValue814,
    chunk5FUZZQ4RValue817 = [
      {
        x: (-3 * chunk5FUZZQ4RValue815) / 6,
        y: 0,
      },
      {
        x: chunk5FUZZQ4RValue816,
        y: 0,
      },
      {
        x: chunk5FUZZQ4RValue816 + (3 * chunk5FUZZQ4RValue815) / 6,
        y: -chunk5FUZZQ4RValue815,
      },
      {
        x: 0,
        y: -chunk5FUZZQ4RValue815,
      },
    ],
    chunk5FUZZQ4RValue818,
    { cssStyles } = chunk5FUZZQ4RParam146;
  if (chunk5FUZZQ4RParam146.look === "handDrawn") {
    let chunk5FUZZQ4RValue1106 = rough.svg(shapeSvg),
      chunk5FUZZQ4RValue1107 = chunkX2U36JSPN(chunk5FUZZQ4RParam146, {}),
      chunk5FUZZQ4RValue1108 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RValue817),
      chunk5FUZZQ4RValue1109 = chunk5FUZZQ4RValue1106.path(
        chunk5FUZZQ4RValue1108,
        chunk5FUZZQ4RValue1107,
      );
    chunk5FUZZQ4RValue818 = shapeSvg
      .insert(() => chunk5FUZZQ4RValue1109, ":first-child")
      .attr(
        "transform",
        `translate(${-chunk5FUZZQ4RValue816 / 2}, ${chunk5FUZZQ4RValue815 / 2})`,
      );
    cssStyles && chunk5FUZZQ4RValue818.attr("style", cssStyles);
  } else
    chunk5FUZZQ4RValue818 = chunk5FUZZQ4RHelper15(
      shapeSvg,
      chunk5FUZZQ4RValue816,
      chunk5FUZZQ4RValue815,
      chunk5FUZZQ4RValue817,
    );
  return (
    nodeStyles && chunk5FUZZQ4RValue818.attr("style", nodeStyles),
    (chunk5FUZZQ4RParam146.width = chunk5FUZZQ4RValue816),
    (chunk5FUZZQ4RParam146.height = chunk5FUZZQ4RValue815),
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam146, chunk5FUZZQ4RValue818),
    (chunk5FUZZQ4RParam146.intersect = function (chunk5FUZZQ4RParam368) {
      return chunk5FUZZQ4RValue12.polygon(
        chunk5FUZZQ4RParam146,
        chunk5FUZZQ4RValue817,
        chunk5FUZZQ4RParam368,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper46, "lean_right");
function chunk5FUZZQ4RHelper47(chunk5FUZZQ4RParam124, chunk5FUZZQ4RParam125) {
  let { labelStyles, nodeStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam125);
  chunk5FUZZQ4RParam125.label = "";
  chunk5FUZZQ4RParam125.labelStyle = labelStyles;
  let chunk5FUZZQ4RValue739 = chunk5FUZZQ4RParam124
      .insert("g")
      .attr("class", chunk5FUZZQ4RValue2(chunk5FUZZQ4RParam125))
      .attr("id", chunk5FUZZQ4RParam125.domId ?? chunk5FUZZQ4RParam125.id),
    { cssStyles } = chunk5FUZZQ4RParam125,
    chunk5FUZZQ4RValue740 = Math.max(35, chunk5FUZZQ4RParam125?.width ?? 0),
    chunk5FUZZQ4RValue741 = Math.max(35, chunk5FUZZQ4RParam125?.height ?? 0),
    chunk5FUZZQ4RValue742 = [
      {
        x: chunk5FUZZQ4RValue740,
        y: 0,
      },
      {
        x: 0,
        y: chunk5FUZZQ4RValue741 + 3.5,
      },
      {
        x: chunk5FUZZQ4RValue740 - 14,
        y: chunk5FUZZQ4RValue741 + 3.5,
      },
      {
        x: 0,
        y: 2 * chunk5FUZZQ4RValue741,
      },
      {
        x: chunk5FUZZQ4RValue740,
        y: chunk5FUZZQ4RValue741 - 3.5,
      },
      {
        x: 14,
        y: chunk5FUZZQ4RValue741 - 3.5,
      },
    ],
    chunk5FUZZQ4RValue743 = rough.svg(chunk5FUZZQ4RValue739),
    chunk5FUZZQ4RValue744 = chunkX2U36JSPN(chunk5FUZZQ4RParam125, {});
  chunk5FUZZQ4RParam125.look !== "handDrawn" &&
    ((chunk5FUZZQ4RValue744.roughness = 0),
    (chunk5FUZZQ4RValue744.fillStyle = "solid"));
  let chunk5FUZZQ4RValue745 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RValue742),
    chunk5FUZZQ4RValue746 = chunk5FUZZQ4RValue743.path(
      chunk5FUZZQ4RValue745,
      chunk5FUZZQ4RValue744,
    ),
    chunk5FUZZQ4RValue747 = chunk5FUZZQ4RValue739.insert(
      () => chunk5FUZZQ4RValue746,
      ":first-child",
    );
  return (
    chunk5FUZZQ4RValue747.attr("class", "outer-path"),
    cssStyles &&
      chunk5FUZZQ4RParam125.look !== "handDrawn" &&
      chunk5FUZZQ4RValue747.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunk5FUZZQ4RParam125.look !== "handDrawn" &&
      chunk5FUZZQ4RValue747.selectAll("path").attr("style", nodeStyles),
    chunk5FUZZQ4RValue747.attr(
      "transform",
      `translate(-${chunk5FUZZQ4RValue740 / 2},${-chunk5FUZZQ4RValue741})`,
    ),
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam125, chunk5FUZZQ4RValue747),
    (chunk5FUZZQ4RParam125.intersect = function (chunk5FUZZQ4RParam324) {
      return (
        chunkAGHRB4JFR.info(
          "lightningBolt intersect",
          chunk5FUZZQ4RParam125,
          chunk5FUZZQ4RParam324,
        ),
        chunk5FUZZQ4RValue12.polygon(
          chunk5FUZZQ4RParam125,
          chunk5FUZZQ4RValue742,
          chunk5FUZZQ4RParam324,
        )
      );
    }),
    chunk5FUZZQ4RValue739
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper47, "lightningBolt");
var chunk5FUZZQ4RValue20 = chunkAGHRB4JFN(
    (
      chunk5FUZZQ4RParam243,
      chunk5FUZZQ4RParam244,
      chunk5FUZZQ4RParam245,
      chunk5FUZZQ4RParam246,
      chunk5FUZZQ4RParam247,
      chunk5FUZZQ4RParam248,
      chunk5FUZZQ4RParam249,
    ) =>
      [
        `M${chunk5FUZZQ4RParam243},${chunk5FUZZQ4RParam244 + chunk5FUZZQ4RParam248}`,
        `a${chunk5FUZZQ4RParam247},${chunk5FUZZQ4RParam248} 0,0,0 ${chunk5FUZZQ4RParam245},0`,
        `a${chunk5FUZZQ4RParam247},${chunk5FUZZQ4RParam248} 0,0,0 ${-chunk5FUZZQ4RParam245},0`,
        `l0,${chunk5FUZZQ4RParam246}`,
        `a${chunk5FUZZQ4RParam247},${chunk5FUZZQ4RParam248} 0,0,0 ${chunk5FUZZQ4RParam245},0`,
        `l0,${-chunk5FUZZQ4RParam246}`,
        `M${chunk5FUZZQ4RParam243},${chunk5FUZZQ4RParam244 + chunk5FUZZQ4RParam248 + chunk5FUZZQ4RParam249}`,
        `a${chunk5FUZZQ4RParam247},${chunk5FUZZQ4RParam248} 0,0,0 ${chunk5FUZZQ4RParam245},0`,
      ].join(" "),
    "createCylinderPathD",
  ),
  chunk5FUZZQ4RValue21 = chunkAGHRB4JFN(
    (
      chunk5FUZZQ4RParam256,
      chunk5FUZZQ4RParam257,
      chunk5FUZZQ4RParam258,
      chunk5FUZZQ4RParam259,
      chunk5FUZZQ4RParam260,
      chunk5FUZZQ4RParam261,
      chunk5FUZZQ4RParam262,
    ) =>
      [
        `M${chunk5FUZZQ4RParam256},${chunk5FUZZQ4RParam257 + chunk5FUZZQ4RParam261}`,
        `M${chunk5FUZZQ4RParam256 + chunk5FUZZQ4RParam258},${chunk5FUZZQ4RParam257 + chunk5FUZZQ4RParam261}`,
        `a${chunk5FUZZQ4RParam260},${chunk5FUZZQ4RParam261} 0,0,0 ${-chunk5FUZZQ4RParam258},0`,
        `l0,${chunk5FUZZQ4RParam259}`,
        `a${chunk5FUZZQ4RParam260},${chunk5FUZZQ4RParam261} 0,0,0 ${chunk5FUZZQ4RParam258},0`,
        `l0,${-chunk5FUZZQ4RParam259}`,
        `M${chunk5FUZZQ4RParam256},${chunk5FUZZQ4RParam257 + chunk5FUZZQ4RParam261 + chunk5FUZZQ4RParam262}`,
        `a${chunk5FUZZQ4RParam260},${chunk5FUZZQ4RParam261} 0,0,0 ${chunk5FUZZQ4RParam258},0`,
      ].join(" "),
    "createOuterCylinderPathD",
  ),
  chunk5FUZZQ4RValue22 = chunkAGHRB4JFN(
    (
      chunk5FUZZQ4RParam333,
      chunk5FUZZQ4RParam334,
      chunk5FUZZQ4RParam335,
      chunk5FUZZQ4RParam336,
      chunk5FUZZQ4RParam337,
      chunk5FUZZQ4RParam338,
    ) =>
      [
        `M${chunk5FUZZQ4RParam333 - chunk5FUZZQ4RParam335 / 2},${-chunk5FUZZQ4RParam336 / 2}`,
        `a${chunk5FUZZQ4RParam337},${chunk5FUZZQ4RParam338} 0,0,0 ${chunk5FUZZQ4RParam335},0`,
      ].join(" "),
    "createInnerCylinderPathD",
  );
async function chunk5FUZZQ4RHelper48(
  chunk5FUZZQ4RParam30,
  chunk5FUZZQ4RParam31,
) {
  let { labelStyles, nodeStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam31);
  chunk5FUZZQ4RParam31.labelStyle = labelStyles;
  let chunk5FUZZQ4RValue267 = chunk5FUZZQ4RParam31.padding ?? 0,
    chunk5FUZZQ4RValue268 =
      chunk5FUZZQ4RParam31.look === "neo" ? 16 : chunk5FUZZQ4RValue267,
    chunk5FUZZQ4RValue269 =
      chunk5FUZZQ4RParam31.look === "neo" ? 24 : chunk5FUZZQ4RValue267;
  if (chunk5FUZZQ4RParam31.width || chunk5FUZZQ4RParam31.height) {
    let chunk5FUZZQ4RValue1116 = chunk5FUZZQ4RParam31.width ?? 0;
    chunk5FUZZQ4RParam31.width =
      (chunk5FUZZQ4RParam31.width ?? 0) - chunk5FUZZQ4RValue268;
    chunk5FUZZQ4RParam31.width < 10 && (chunk5FUZZQ4RParam31.width = 10);
    let chunk5FUZZQ4RValue1117 =
      chunk5FUZZQ4RValue1116 / 2 / (2.5 + chunk5FUZZQ4RValue1116 / 50);
    chunk5FUZZQ4RParam31.height =
      (chunk5FUZZQ4RParam31.height ?? 0) -
      chunk5FUZZQ4RValue269 -
      chunk5FUZZQ4RValue1117 * 3;
    chunk5FUZZQ4RParam31.height < 10 && (chunk5FUZZQ4RParam31.height = 10);
  }
  let { shapeSvg, bbox, label } = await chunk5FUZZQ4RS(
      chunk5FUZZQ4RParam30,
      chunk5FUZZQ4RParam31,
      chunk5FUZZQ4RValue2(chunk5FUZZQ4RParam31),
    ),
    chunk5FUZZQ4RValue270 =
      (chunk5FUZZQ4RParam31?.width ? chunk5FUZZQ4RParam31?.width : bbox.width) +
      chunk5FUZZQ4RValue268 * 2,
    chunk5FUZZQ4RValue271 = chunk5FUZZQ4RValue270 / 2,
    chunk5FUZZQ4RValue272 =
      chunk5FUZZQ4RValue271 / (2.5 + chunk5FUZZQ4RValue270 / 50),
    chunk5FUZZQ4RValue273 =
      (chunk5FUZZQ4RParam31?.height
        ? chunk5FUZZQ4RParam31?.height
        : bbox.height) +
      chunk5FUZZQ4RValue272 +
      chunk5FUZZQ4RValue269 * 2,
    chunk5FUZZQ4RValue274 = chunk5FUZZQ4RValue273 * 0.1,
    chunk5FUZZQ4RValue275,
    { cssStyles } = chunk5FUZZQ4RParam31;
  if (chunk5FUZZQ4RParam31.look === "handDrawn") {
    let chunk5FUZZQ4RValue1003 = rough.svg(shapeSvg),
      chunk5FUZZQ4RValue1004 = chunk5FUZZQ4RValue21(
        0,
        0,
        chunk5FUZZQ4RValue270,
        chunk5FUZZQ4RValue273,
        chunk5FUZZQ4RValue271,
        chunk5FUZZQ4RValue272,
        chunk5FUZZQ4RValue274,
      ),
      chunk5FUZZQ4RValue1005 = chunk5FUZZQ4RValue22(
        0,
        chunk5FUZZQ4RValue272,
        chunk5FUZZQ4RValue270,
        chunk5FUZZQ4RValue273,
        chunk5FUZZQ4RValue271,
        chunk5FUZZQ4RValue272,
      ),
      chunk5FUZZQ4RValue1006 = chunkX2U36JSPN(chunk5FUZZQ4RParam31, {}),
      chunk5FUZZQ4RValue1007 = chunk5FUZZQ4RValue1003.path(
        chunk5FUZZQ4RValue1004,
        chunk5FUZZQ4RValue1006,
      ),
      chunk5FUZZQ4RValue1008 = chunk5FUZZQ4RValue1003.path(
        chunk5FUZZQ4RValue1005,
        chunk5FUZZQ4RValue1006,
      );
    shapeSvg
      .insert(() => chunk5FUZZQ4RValue1008, ":first-child")
      .attr("class", "line");
    chunk5FUZZQ4RValue275 = shapeSvg.insert(
      () => chunk5FUZZQ4RValue1007,
      ":first-child",
    );
    chunk5FUZZQ4RValue275.attr("class", "basic label-container");
    cssStyles && chunk5FUZZQ4RValue275.attr("style", cssStyles);
  } else {
    let chunk5FUZZQ4RValue1120 = chunk5FUZZQ4RValue20(
      0,
      0,
      chunk5FUZZQ4RValue270,
      chunk5FUZZQ4RValue273,
      chunk5FUZZQ4RValue271,
      chunk5FUZZQ4RValue272,
      chunk5FUZZQ4RValue274,
    );
    chunk5FUZZQ4RValue275 = shapeSvg
      .insert("path", ":first-child")
      .attr("d", chunk5FUZZQ4RValue1120)
      .attr("class", "basic label-container outer-path")
      .attr("style", chunk5PVQY5BWF(cssStyles))
      .attr("style", nodeStyles);
  }
  return (
    chunk5FUZZQ4RValue275.attr("label-offset-y", chunk5FUZZQ4RValue272),
    chunk5FUZZQ4RValue275.attr(
      "transform",
      `translate(${-chunk5FUZZQ4RValue270 / 2}, ${-(chunk5FUZZQ4RValue273 / 2 + chunk5FUZZQ4RValue272)})`,
    ),
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam31, chunk5FUZZQ4RValue275),
    label.attr(
      "transform",
      `translate(${-(bbox.width / 2) - (bbox.x - (bbox.left ?? 0))}, ${-(bbox.height / 2) + chunk5FUZZQ4RValue272 - (bbox.y - (bbox.top ?? 0))})`,
    ),
    (chunk5FUZZQ4RParam31.intersect = function (chunk5FUZZQ4RParam192) {
      let chunk5FUZZQ4RValue934 = chunk5FUZZQ4RValue12.rect(
          chunk5FUZZQ4RParam31,
          chunk5FUZZQ4RParam192,
        ),
        chunk5FUZZQ4RValue935 =
          chunk5FUZZQ4RValue934.x - (chunk5FUZZQ4RParam31.x ?? 0);
      if (
        chunk5FUZZQ4RValue271 != 0 &&
        (Math.abs(chunk5FUZZQ4RValue935) <
          (chunk5FUZZQ4RParam31.width ?? 0) / 2 ||
          (Math.abs(chunk5FUZZQ4RValue935) ==
            (chunk5FUZZQ4RParam31.width ?? 0) / 2 &&
            Math.abs(chunk5FUZZQ4RValue934.y - (chunk5FUZZQ4RParam31.y ?? 0)) >
              (chunk5FUZZQ4RParam31.height ?? 0) / 2 - chunk5FUZZQ4RValue272))
      ) {
        let chunk5FUZZQ4RValue1138 =
          chunk5FUZZQ4RValue272 *
          chunk5FUZZQ4RValue272 *
          (1 -
            (chunk5FUZZQ4RValue935 * chunk5FUZZQ4RValue935) /
              (chunk5FUZZQ4RValue271 * chunk5FUZZQ4RValue271));
        chunk5FUZZQ4RValue1138 > 0 &&
          (chunk5FUZZQ4RValue1138 = Math.sqrt(chunk5FUZZQ4RValue1138));
        chunk5FUZZQ4RValue1138 = chunk5FUZZQ4RValue272 - chunk5FUZZQ4RValue1138;
        chunk5FUZZQ4RParam192.y - (chunk5FUZZQ4RParam31.y ?? 0) > 0 &&
          (chunk5FUZZQ4RValue1138 = -chunk5FUZZQ4RValue1138);
        chunk5FUZZQ4RValue934.y += chunk5FUZZQ4RValue1138;
      }
      return chunk5FUZZQ4RValue934;
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper48, "linedCylinder");
async function chunk5FUZZQ4RHelper49(
  chunk5FUZZQ4RParam42,
  chunk5FUZZQ4RParam43,
) {
  let { labelStyles, nodeStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam43);
  chunk5FUZZQ4RParam43.labelStyle = labelStyles;
  let chunk5FUZZQ4RValue351 = chunk5FUZZQ4RParam43.padding ?? 0,
    chunk5FUZZQ4RValue352 =
      chunk5FUZZQ4RParam43.look === "neo" ? 16 : chunk5FUZZQ4RValue351,
    chunk5FUZZQ4RValue353 =
      chunk5FUZZQ4RParam43.look === "neo" ? 12 : chunk5FUZZQ4RValue351;
  (chunk5FUZZQ4RParam43.width || chunk5FUZZQ4RParam43.height) &&
    ((chunk5FUZZQ4RParam43.width =
      ((chunk5FUZZQ4RParam43.width ?? 0) * 10) / 11 -
      chunk5FUZZQ4RValue352 * 2),
    chunk5FUZZQ4RParam43.width < 10 && (chunk5FUZZQ4RParam43.width = 10),
    (chunk5FUZZQ4RParam43.height =
      (chunk5FUZZQ4RParam43?.height ?? 0) - chunk5FUZZQ4RValue353 * 2),
    chunk5FUZZQ4RParam43.height < 10 && (chunk5FUZZQ4RParam43.height = 10));
  let { shapeSvg, bbox, label } = await chunk5FUZZQ4RS(
      chunk5FUZZQ4RParam42,
      chunk5FUZZQ4RParam43,
      chunk5FUZZQ4RValue2(chunk5FUZZQ4RParam43),
    ),
    chunk5FUZZQ4RValue354 =
      (chunk5FUZZQ4RParam43?.width ? chunk5FUZZQ4RParam43?.width : bbox.width) +
      (chunk5FUZZQ4RValue352 ?? 0) * 2,
    chunk5FUZZQ4RValue355 =
      (chunk5FUZZQ4RParam43?.height
        ? chunk5FUZZQ4RParam43?.height
        : bbox.height) +
      (chunk5FUZZQ4RValue353 ?? 0) * 2,
    chunk5FUZZQ4RValue356 =
      chunk5FUZZQ4RParam43.look === "neo"
        ? chunk5FUZZQ4RValue355 / 4
        : chunk5FUZZQ4RValue355 / 8,
    chunk5FUZZQ4RValue357 = chunk5FUZZQ4RValue355 + chunk5FUZZQ4RValue356,
    { cssStyles } = chunk5FUZZQ4RParam43,
    chunk5FUZZQ4RValue358 = rough.svg(shapeSvg),
    chunk5FUZZQ4RValue359 = chunkX2U36JSPN(chunk5FUZZQ4RParam43, {});
  chunk5FUZZQ4RParam43.look !== "handDrawn" &&
    ((chunk5FUZZQ4RValue359.roughness = 0),
    (chunk5FUZZQ4RValue359.fillStyle = "solid"));
  let chunk5FUZZQ4RValue360 = [
      {
        x: -chunk5FUZZQ4RValue354 / 2 - (chunk5FUZZQ4RValue354 / 2) * 0.1,
        y: -chunk5FUZZQ4RValue357 / 2,
      },
      {
        x: -chunk5FUZZQ4RValue354 / 2 - (chunk5FUZZQ4RValue354 / 2) * 0.1,
        y: chunk5FUZZQ4RValue357 / 2,
      },
      ...chunk5FUZZQ4RHelper2(
        -chunk5FUZZQ4RValue354 / 2 - (chunk5FUZZQ4RValue354 / 2) * 0.1,
        chunk5FUZZQ4RValue357 / 2,
        chunk5FUZZQ4RValue354 / 2 + (chunk5FUZZQ4RValue354 / 2) * 0.1,
        chunk5FUZZQ4RValue357 / 2,
        chunk5FUZZQ4RValue356,
        0.8,
      ),
      {
        x: chunk5FUZZQ4RValue354 / 2 + (chunk5FUZZQ4RValue354 / 2) * 0.1,
        y: -chunk5FUZZQ4RValue357 / 2,
      },
      {
        x: -chunk5FUZZQ4RValue354 / 2 - (chunk5FUZZQ4RValue354 / 2) * 0.1,
        y: -chunk5FUZZQ4RValue357 / 2,
      },
      {
        x: -chunk5FUZZQ4RValue354 / 2,
        y: -chunk5FUZZQ4RValue357 / 2,
      },
      {
        x: -chunk5FUZZQ4RValue354 / 2,
        y: (chunk5FUZZQ4RValue357 / 2) * 1.1,
      },
      {
        x: -chunk5FUZZQ4RValue354 / 2,
        y: -chunk5FUZZQ4RValue357 / 2,
      },
    ],
    chunk5FUZZQ4RValue361 = chunk5FUZZQ4RValue358.polygon(
      chunk5FUZZQ4RValue360.map((item) => [item.x, item.y]),
      chunk5FUZZQ4RValue359,
    ),
    chunk5FUZZQ4RValue362 = shapeSvg.insert(
      () => chunk5FUZZQ4RValue361,
      ":first-child",
    );
  return (
    chunk5FUZZQ4RValue362.attr("class", "basic label-container outer-path"),
    cssStyles &&
      chunk5FUZZQ4RParam43.look !== "handDrawn" &&
      chunk5FUZZQ4RValue362.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunk5FUZZQ4RParam43.look !== "handDrawn" &&
      chunk5FUZZQ4RValue362.selectAll("path").attr("style", nodeStyles),
    chunk5FUZZQ4RValue362.attr(
      "transform",
      `translate(0,${-chunk5FUZZQ4RValue356 / 2})`,
    ),
    label.attr(
      "transform",
      `translate(${-chunk5FUZZQ4RValue354 / 2 + (chunk5FUZZQ4RParam43.padding ?? 0) + ((chunk5FUZZQ4RValue354 / 2) * 0.1) / 2 - (bbox.x - (bbox.left ?? 0))},${-chunk5FUZZQ4RValue355 / 2 + (chunk5FUZZQ4RParam43.padding ?? 0) - chunk5FUZZQ4RValue356 / 2 - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam43, chunk5FUZZQ4RValue362),
    (chunk5FUZZQ4RParam43.intersect = function (chunk5FUZZQ4RParam369) {
      return chunk5FUZZQ4RValue12.polygon(
        chunk5FUZZQ4RParam43,
        chunk5FUZZQ4RValue360,
        chunk5FUZZQ4RParam369,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper49, "linedWaveEdgedRect");
async function chunk5FUZZQ4RHelper50(
  chunk5FUZZQ4RParam36,
  chunk5FUZZQ4RParam37,
) {
  let { labelStyles, nodeStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam37);
  chunk5FUZZQ4RParam37.labelStyle = labelStyles;
  let chunk5FUZZQ4RValue305 = chunk5FUZZQ4RParam37.padding ?? 0,
    chunk5FUZZQ4RValue306 =
      chunk5FUZZQ4RParam37.look === "neo" ? 16 : chunk5FUZZQ4RValue305,
    chunk5FUZZQ4RValue307 =
      chunk5FUZZQ4RParam37.look === "neo" ? 12 : chunk5FUZZQ4RValue305,
    chunk5FUZZQ4RValue308 = chunk5FUZZQ4RParam37.look === "neo" ? 10 : 5;
  (chunk5FUZZQ4RParam37.width || chunk5FUZZQ4RParam37.height) &&
    ((chunk5FUZZQ4RParam37.width = Math.max(
      (chunk5FUZZQ4RParam37?.width ?? 0) -
        chunk5FUZZQ4RValue306 * 2 -
        2 * chunk5FUZZQ4RValue308,
      10,
    )),
    (chunk5FUZZQ4RParam37.height = Math.max(
      (chunk5FUZZQ4RParam37?.height ?? 0) -
        chunk5FUZZQ4RValue307 * 2 -
        2 * chunk5FUZZQ4RValue308,
      10,
    )));
  let { shapeSvg, bbox, label } = await chunk5FUZZQ4RS(
      chunk5FUZZQ4RParam36,
      chunk5FUZZQ4RParam37,
      chunk5FUZZQ4RValue2(chunk5FUZZQ4RParam37),
    ),
    chunk5FUZZQ4RValue309 =
      (chunk5FUZZQ4RParam37?.width ? chunk5FUZZQ4RParam37?.width : bbox.width) +
      chunk5FUZZQ4RValue306 * 2 +
      2 * chunk5FUZZQ4RValue308,
    chunk5FUZZQ4RValue310 =
      (chunk5FUZZQ4RParam37?.height
        ? chunk5FUZZQ4RParam37?.height
        : bbox.height) +
      chunk5FUZZQ4RValue307 * 2 +
      2 * chunk5FUZZQ4RValue308,
    chunk5FUZZQ4RValue311 = chunk5FUZZQ4RValue309 - 2 * chunk5FUZZQ4RValue308,
    chunk5FUZZQ4RValue312 = chunk5FUZZQ4RValue310 - 2 * chunk5FUZZQ4RValue308,
    chunk5FUZZQ4RValue313 = -chunk5FUZZQ4RValue311 / 2,
    chunk5FUZZQ4RValue314 = -chunk5FUZZQ4RValue312 / 2,
    { cssStyles } = chunk5FUZZQ4RParam37,
    chunk5FUZZQ4RValue315 = rough.svg(shapeSvg),
    chunk5FUZZQ4RValue316 = chunkX2U36JSPN(chunk5FUZZQ4RParam37, {}),
    chunk5FUZZQ4RValue317 = [
      {
        x: chunk5FUZZQ4RValue313 - chunk5FUZZQ4RValue308,
        y: chunk5FUZZQ4RValue314 + chunk5FUZZQ4RValue308,
      },
      {
        x: chunk5FUZZQ4RValue313 - chunk5FUZZQ4RValue308,
        y:
          chunk5FUZZQ4RValue314 + chunk5FUZZQ4RValue312 + chunk5FUZZQ4RValue308,
      },
      {
        x:
          chunk5FUZZQ4RValue313 + chunk5FUZZQ4RValue311 - chunk5FUZZQ4RValue308,
        y:
          chunk5FUZZQ4RValue314 + chunk5FUZZQ4RValue312 + chunk5FUZZQ4RValue308,
      },
      {
        x:
          chunk5FUZZQ4RValue313 + chunk5FUZZQ4RValue311 - chunk5FUZZQ4RValue308,
        y: chunk5FUZZQ4RValue314 + chunk5FUZZQ4RValue312,
      },
      {
        x: chunk5FUZZQ4RValue313 + chunk5FUZZQ4RValue311,
        y: chunk5FUZZQ4RValue314 + chunk5FUZZQ4RValue312,
      },
      {
        x: chunk5FUZZQ4RValue313 + chunk5FUZZQ4RValue311,
        y:
          chunk5FUZZQ4RValue314 + chunk5FUZZQ4RValue312 - chunk5FUZZQ4RValue308,
      },
      {
        x:
          chunk5FUZZQ4RValue313 + chunk5FUZZQ4RValue311 + chunk5FUZZQ4RValue308,
        y:
          chunk5FUZZQ4RValue314 + chunk5FUZZQ4RValue312 - chunk5FUZZQ4RValue308,
      },
      {
        x:
          chunk5FUZZQ4RValue313 + chunk5FUZZQ4RValue311 + chunk5FUZZQ4RValue308,
        y: chunk5FUZZQ4RValue314 - chunk5FUZZQ4RValue308,
      },
      {
        x: chunk5FUZZQ4RValue313 + chunk5FUZZQ4RValue308,
        y: chunk5FUZZQ4RValue314 - chunk5FUZZQ4RValue308,
      },
      {
        x: chunk5FUZZQ4RValue313 + chunk5FUZZQ4RValue308,
        y: chunk5FUZZQ4RValue314,
      },
      {
        x: chunk5FUZZQ4RValue313,
        y: chunk5FUZZQ4RValue314,
      },
      {
        x: chunk5FUZZQ4RValue313,
        y: chunk5FUZZQ4RValue314 + chunk5FUZZQ4RValue308,
      },
    ],
    chunk5FUZZQ4RValue318 = [
      {
        x: chunk5FUZZQ4RValue313,
        y: chunk5FUZZQ4RValue314 + chunk5FUZZQ4RValue308,
      },
      {
        x:
          chunk5FUZZQ4RValue313 + chunk5FUZZQ4RValue311 - chunk5FUZZQ4RValue308,
        y: chunk5FUZZQ4RValue314 + chunk5FUZZQ4RValue308,
      },
      {
        x:
          chunk5FUZZQ4RValue313 + chunk5FUZZQ4RValue311 - chunk5FUZZQ4RValue308,
        y: chunk5FUZZQ4RValue314 + chunk5FUZZQ4RValue312,
      },
      {
        x: chunk5FUZZQ4RValue313 + chunk5FUZZQ4RValue311,
        y: chunk5FUZZQ4RValue314 + chunk5FUZZQ4RValue312,
      },
      {
        x: chunk5FUZZQ4RValue313 + chunk5FUZZQ4RValue311,
        y: chunk5FUZZQ4RValue314,
      },
      {
        x: chunk5FUZZQ4RValue313,
        y: chunk5FUZZQ4RValue314,
      },
    ];
  chunk5FUZZQ4RParam37.look !== "handDrawn" &&
    ((chunk5FUZZQ4RValue316.roughness = 0),
    (chunk5FUZZQ4RValue316.fillStyle = "solid"));
  let chunk5FUZZQ4RValue319 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RValue317),
    chunk5FUZZQ4RValue320 = chunk5FUZZQ4RValue315.path(
      chunk5FUZZQ4RValue319,
      chunk5FUZZQ4RValue316,
    ),
    _chunk5FUZZQ4RR = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RValue318),
    chunk5FUZZQ4RValue321 = chunk5FUZZQ4RValue315.path(
      _chunk5FUZZQ4RR,
      chunk5FUZZQ4RValue316,
    );
  chunk5FUZZQ4RParam37.look !== "handDrawn" &&
    ((chunk5FUZZQ4RValue320 = chunk5FUZZQ4RHelper4(chunk5FUZZQ4RValue320)),
    (chunk5FUZZQ4RValue321 = chunk5FUZZQ4RHelper4(chunk5FUZZQ4RValue321)));
  let chunk5FUZZQ4RValue322 = shapeSvg.insert("g", ":first-child");
  return (
    chunk5FUZZQ4RValue322.insert(() => chunk5FUZZQ4RValue320),
    chunk5FUZZQ4RValue322.insert(() => chunk5FUZZQ4RValue321),
    chunk5FUZZQ4RValue322.attr("class", "basic label-container outer-path"),
    cssStyles &&
      chunk5FUZZQ4RParam37.look !== "handDrawn" &&
      chunk5FUZZQ4RValue322.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunk5FUZZQ4RParam37.look !== "handDrawn" &&
      chunk5FUZZQ4RValue322.selectAll("path").attr("style", nodeStyles),
    label.attr(
      "transform",
      `translate(${-(bbox.width / 2) - chunk5FUZZQ4RValue308 - (bbox.x - (bbox.left ?? 0))}, ${-(bbox.height / 2) + chunk5FUZZQ4RValue308 - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam37, chunk5FUZZQ4RValue322),
    (chunk5FUZZQ4RParam37.intersect = function (chunk5FUZZQ4RParam370) {
      return chunk5FUZZQ4RValue12.polygon(
        chunk5FUZZQ4RParam37,
        chunk5FUZZQ4RValue317,
        chunk5FUZZQ4RParam370,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper50, "multiRect");
async function $e(chunk5FUZZQ4RParam34, chunk5FUZZQ4RParam35) {
  let { labelStyles, nodeStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam35);
  chunk5FUZZQ4RParam35.labelStyle = labelStyles;
  let { shapeSvg, bbox, label } = await chunk5FUZZQ4RS(
      chunk5FUZZQ4RParam34,
      chunk5FUZZQ4RParam35,
      chunk5FUZZQ4RValue2(chunk5FUZZQ4RParam35),
    ),
    chunk5FUZZQ4RValue285 = chunk5FUZZQ4RParam35.padding ?? 0,
    chunk5FUZZQ4RValue286 =
      chunk5FUZZQ4RParam35.look === "neo" ? 16 : chunk5FUZZQ4RValue285,
    chunk5FUZZQ4RValue287 =
      chunk5FUZZQ4RParam35.look === "neo" ? 12 : chunk5FUZZQ4RValue285,
    chunk5FUZZQ4RValue288 = true;
  (chunk5FUZZQ4RParam35.width || chunk5FUZZQ4RParam35.height) &&
    ((chunk5FUZZQ4RValue288 = false),
    (chunk5FUZZQ4RParam35.width =
      (chunk5FUZZQ4RParam35?.width ?? 0) - chunk5FUZZQ4RValue286 * 2),
    (chunk5FUZZQ4RParam35.height =
      (chunk5FUZZQ4RParam35?.height ?? 0) - chunk5FUZZQ4RValue287 * 3));
  let chunk5FUZZQ4RValue289 =
      Math.max(bbox.width, chunk5FUZZQ4RParam35?.width ?? 0) +
      chunk5FUZZQ4RValue286 * 2,
    chunk5FUZZQ4RValue290 =
      Math.max(bbox.height, chunk5FUZZQ4RParam35?.height ?? 0) +
      chunk5FUZZQ4RValue287 * 3,
    chunk5FUZZQ4RValue291 =
      chunk5FUZZQ4RParam35.look === "neo"
        ? chunk5FUZZQ4RValue290 / 4
        : chunk5FUZZQ4RValue290 / 8,
    chunk5FUZZQ4RValue292 =
      chunk5FUZZQ4RValue290 +
      (chunk5FUZZQ4RValue288
        ? chunk5FUZZQ4RValue291 / 2
        : -chunk5FUZZQ4RValue291 / 2),
    chunk5FUZZQ4RValue293 = -chunk5FUZZQ4RValue289 / 2,
    chunk5FUZZQ4RValue294 = -chunk5FUZZQ4RValue292 / 2,
    { cssStyles } = chunk5FUZZQ4RParam35,
    chunk5FUZZQ4RValue295 = chunk5FUZZQ4RHelper2(
      chunk5FUZZQ4RValue293 - 10,
      chunk5FUZZQ4RValue294 + chunk5FUZZQ4RValue292 + 10,
      chunk5FUZZQ4RValue293 + chunk5FUZZQ4RValue289 - 10,
      chunk5FUZZQ4RValue294 + chunk5FUZZQ4RValue292 + 10,
      chunk5FUZZQ4RValue291,
      0.8,
    ),
    chunk5FUZZQ4RValue296 =
      chunk5FUZZQ4RValue295?.[chunk5FUZZQ4RValue295.length - 1],
    chunk5FUZZQ4RValue297 = [
      {
        x: chunk5FUZZQ4RValue293 - 10,
        y: chunk5FUZZQ4RValue294 + 10,
      },
      {
        x: chunk5FUZZQ4RValue293 - 10,
        y: chunk5FUZZQ4RValue294 + chunk5FUZZQ4RValue292 + 10,
      },
      ...chunk5FUZZQ4RValue295,
      {
        x: chunk5FUZZQ4RValue293 + chunk5FUZZQ4RValue289 - 10,
        y: chunk5FUZZQ4RValue296.y - 10,
      },
      {
        x: chunk5FUZZQ4RValue293 + chunk5FUZZQ4RValue289,
        y: chunk5FUZZQ4RValue296.y - 10,
      },
      {
        x: chunk5FUZZQ4RValue293 + chunk5FUZZQ4RValue289,
        y: chunk5FUZZQ4RValue296.y - 20,
      },
      {
        x: chunk5FUZZQ4RValue293 + chunk5FUZZQ4RValue289 + 10,
        y: chunk5FUZZQ4RValue296.y - 20,
      },
      {
        x: chunk5FUZZQ4RValue293 + chunk5FUZZQ4RValue289 + 10,
        y: chunk5FUZZQ4RValue294 - 10,
      },
      {
        x: chunk5FUZZQ4RValue293 + 10,
        y: chunk5FUZZQ4RValue294 - 10,
      },
      {
        x: chunk5FUZZQ4RValue293 + 10,
        y: chunk5FUZZQ4RValue294,
      },
      {
        x: chunk5FUZZQ4RValue293,
        y: chunk5FUZZQ4RValue294,
      },
      {
        x: chunk5FUZZQ4RValue293,
        y: chunk5FUZZQ4RValue294 + 10,
      },
    ],
    chunk5FUZZQ4RValue298 = [
      {
        x: chunk5FUZZQ4RValue293,
        y: chunk5FUZZQ4RValue294 + 10,
      },
      {
        x: chunk5FUZZQ4RValue293 + chunk5FUZZQ4RValue289 - 10,
        y: chunk5FUZZQ4RValue294 + 10,
      },
      {
        x: chunk5FUZZQ4RValue293 + chunk5FUZZQ4RValue289 - 10,
        y: chunk5FUZZQ4RValue296.y - 10,
      },
      {
        x: chunk5FUZZQ4RValue293 + chunk5FUZZQ4RValue289,
        y: chunk5FUZZQ4RValue296.y - 10,
      },
      {
        x: chunk5FUZZQ4RValue293 + chunk5FUZZQ4RValue289,
        y: chunk5FUZZQ4RValue294,
      },
      {
        x: chunk5FUZZQ4RValue293,
        y: chunk5FUZZQ4RValue294,
      },
    ],
    chunk5FUZZQ4RValue299 = rough.svg(shapeSvg),
    chunk5FUZZQ4RValue300 = chunkX2U36JSPN(chunk5FUZZQ4RParam35, {});
  chunk5FUZZQ4RParam35.look !== "handDrawn" &&
    ((chunk5FUZZQ4RValue300.roughness = 0),
    (chunk5FUZZQ4RValue300.fillStyle = "solid"));
  let _chunk5FUZZQ4RR = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RValue297),
    chunk5FUZZQ4RValue301 = chunk5FUZZQ4RValue299.path(
      _chunk5FUZZQ4RR,
      chunk5FUZZQ4RValue300,
    ),
    chunk5FUZZQ4RValue302 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RValue298),
    chunk5FUZZQ4RValue303 = chunk5FUZZQ4RValue299.path(
      chunk5FUZZQ4RValue302,
      chunk5FUZZQ4RValue300,
    ),
    chunk5FUZZQ4RValue304 = shapeSvg.insert(
      () => chunk5FUZZQ4RValue301,
      ":first-child",
    );
  return (
    chunk5FUZZQ4RValue304.insert(() => chunk5FUZZQ4RValue303),
    chunk5FUZZQ4RValue304.attr("class", "basic label-container outer-path"),
    cssStyles &&
      chunk5FUZZQ4RParam35.look !== "handDrawn" &&
      chunk5FUZZQ4RValue304.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunk5FUZZQ4RParam35.look !== "handDrawn" &&
      chunk5FUZZQ4RValue304.selectAll("path").attr("style", nodeStyles),
    chunk5FUZZQ4RValue304.attr(
      "transform",
      `translate(0,${-chunk5FUZZQ4RValue291 / 2})`,
    ),
    label.attr(
      "transform",
      `translate(${-(bbox.width / 2) - 10 - (bbox.x - (bbox.left ?? 0))}, ${-(bbox.height / 2) + 10 - chunk5FUZZQ4RValue291 / 2 - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam35, chunk5FUZZQ4RValue304),
    (chunk5FUZZQ4RParam35.intersect = function (chunk5FUZZQ4RParam371) {
      return chunk5FUZZQ4RValue12.polygon(
        chunk5FUZZQ4RParam35,
        chunk5FUZZQ4RValue297,
        chunk5FUZZQ4RParam371,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN($e, "multiWaveEdgedRectangle");
async function chunk5FUZZQ4RHelper51(
  chunk5FUZZQ4RParam107,
  chunk5FUZZQ4RParam108,
  { config: { themeVariables } },
) {
  let { labelStyles, nodeStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam108);
  chunk5FUZZQ4RParam108.labelStyle = labelStyles;
  chunk5FUZZQ4RParam108.useHtmlLabels ||
    chunkICPOFSXXT(chunkICPOFSXXW()) ||
    (chunk5FUZZQ4RParam108.centerLabel = true);
  let { shapeSvg, bbox, label } = await chunk5FUZZQ4RS(
      chunk5FUZZQ4RParam107,
      chunk5FUZZQ4RParam108,
      chunk5FUZZQ4RValue2(chunk5FUZZQ4RParam108),
    ),
    chunk5FUZZQ4RValue706 = Math.max(
      bbox.width + (chunk5FUZZQ4RParam108.padding ?? 0) * 2,
      chunk5FUZZQ4RParam108?.width ?? 0,
    ),
    chunk5FUZZQ4RValue707 = Math.max(
      bbox.height + (chunk5FUZZQ4RParam108.padding ?? 0) * 2,
      chunk5FUZZQ4RParam108?.height ?? 0,
    ),
    chunk5FUZZQ4RValue708 = -chunk5FUZZQ4RValue706 / 2,
    chunk5FUZZQ4RValue709 = -chunk5FUZZQ4RValue707 / 2,
    { cssStyles } = chunk5FUZZQ4RParam108,
    chunk5FUZZQ4RValue710 = rough.svg(shapeSvg),
    chunk5FUZZQ4RValue711 = chunkX2U36JSPN(chunk5FUZZQ4RParam108, {
      fill: themeVariables.noteBkgColor,
      stroke: themeVariables.noteBorderColor,
    });
  chunk5FUZZQ4RParam108.look !== "handDrawn" &&
    ((chunk5FUZZQ4RValue711.roughness = 0),
    (chunk5FUZZQ4RValue711.fillStyle = "solid"));
  let chunk5FUZZQ4RValue712 = chunk5FUZZQ4RValue710.rectangle(
      chunk5FUZZQ4RValue708,
      chunk5FUZZQ4RValue709,
      chunk5FUZZQ4RValue706,
      chunk5FUZZQ4RValue707,
      chunk5FUZZQ4RValue711,
    ),
    chunk5FUZZQ4RValue713 = shapeSvg.insert(
      () => chunk5FUZZQ4RValue712,
      ":first-child",
    );
  return (
    chunk5FUZZQ4RValue713.attr("class", "basic label-container outer-path"),
    label.attr("class", "label noteLabel"),
    cssStyles &&
      chunk5FUZZQ4RParam108.look !== "handDrawn" &&
      chunk5FUZZQ4RValue713.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunk5FUZZQ4RParam108.look !== "handDrawn" &&
      chunk5FUZZQ4RValue713.selectAll("path").attr("style", nodeStyles),
    label.attr(
      "transform",
      `translate(${-bbox.width / 2 - (bbox.x - (bbox.left ?? 0))}, ${-(bbox.height / 2) - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam108, chunk5FUZZQ4RValue713),
    (chunk5FUZZQ4RParam108.intersect = function (chunk5FUZZQ4RParam406) {
      return chunk5FUZZQ4RValue12.rect(
        chunk5FUZZQ4RParam108,
        chunk5FUZZQ4RParam406,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper51, "note");
var chunk5FUZZQ4RValue25 = chunkAGHRB4JFN(
  (chunk5FUZZQ4RParam295, chunk5FUZZQ4RParam296, chunk5FUZZQ4RParam297) =>
    [
      `M${chunk5FUZZQ4RParam295 + chunk5FUZZQ4RParam297 / 2},${chunk5FUZZQ4RParam296}`,
      `L${chunk5FUZZQ4RParam295 + chunk5FUZZQ4RParam297},${chunk5FUZZQ4RParam296 - chunk5FUZZQ4RParam297 / 2}`,
      `L${chunk5FUZZQ4RParam295 + chunk5FUZZQ4RParam297 / 2},${chunk5FUZZQ4RParam296 - chunk5FUZZQ4RParam297}`,
      `L${chunk5FUZZQ4RParam295},${chunk5FUZZQ4RParam296 - chunk5FUZZQ4RParam297 / 2}`,
      "Z",
    ].join(" "),
  "createDecisionBoxPathD",
);
async function chunk5FUZZQ4RHelper52(
  chunk5FUZZQ4RParam99,
  chunk5FUZZQ4RParam100,
) {
  let { labelStyles, nodeStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam100);
  chunk5FUZZQ4RParam100.labelStyle = labelStyles;
  let { shapeSvg, bbox } = await chunk5FUZZQ4RS(
      chunk5FUZZQ4RParam99,
      chunk5FUZZQ4RParam100,
      chunk5FUZZQ4RValue2(chunk5FUZZQ4RParam100),
    ),
    chunk5FUZZQ4RValue670 =
      bbox.width +
      (chunk5FUZZQ4RParam100.padding ?? 0) +
      (bbox.height + (chunk5FUZZQ4RParam100.padding ?? 0)),
    chunk5FUZZQ4RValue672 = [
      {
        x: chunk5FUZZQ4RValue670 / 2,
        y: 0,
      },
      {
        x: chunk5FUZZQ4RValue670,
        y: -chunk5FUZZQ4RValue670 / 2,
      },
      {
        x: chunk5FUZZQ4RValue670 / 2,
        y: -chunk5FUZZQ4RValue670,
      },
      {
        x: 0,
        y: -chunk5FUZZQ4RValue670 / 2,
      },
    ],
    chunk5FUZZQ4RValue673,
    { cssStyles } = chunk5FUZZQ4RParam100;
  if (chunk5FUZZQ4RParam100.look === "handDrawn") {
    let chunk5FUZZQ4RValue1088 = rough.svg(shapeSvg),
      chunk5FUZZQ4RValue1089 = chunkX2U36JSPN(chunk5FUZZQ4RParam100, {}),
      chunk5FUZZQ4RValue1090 = chunk5FUZZQ4RValue25(
        0,
        0,
        chunk5FUZZQ4RValue670,
      ),
      chunk5FUZZQ4RValue1091 = chunk5FUZZQ4RValue1088.path(
        chunk5FUZZQ4RValue1090,
        chunk5FUZZQ4RValue1089,
      );
    chunk5FUZZQ4RValue673 = shapeSvg
      .insert(() => chunk5FUZZQ4RValue1091, ":first-child")
      .attr(
        "transform",
        `translate(${-chunk5FUZZQ4RValue670 / 2 + 0.5}, ${chunk5FUZZQ4RValue670 / 2})`,
      );
    cssStyles && chunk5FUZZQ4RValue673.attr("style", cssStyles);
  } else {
    chunk5FUZZQ4RValue673 = chunk5FUZZQ4RHelper15(
      shapeSvg,
      chunk5FUZZQ4RValue670,
      chunk5FUZZQ4RValue670,
      chunk5FUZZQ4RValue672,
    );
    chunk5FUZZQ4RValue673.attr(
      "transform",
      `translate(${-chunk5FUZZQ4RValue670 / 2 + 0.5}, ${chunk5FUZZQ4RValue670 / 2})`,
    );
  }
  return (
    nodeStyles && chunk5FUZZQ4RValue673.attr("style", nodeStyles),
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam100, chunk5FUZZQ4RValue673),
    (chunk5FUZZQ4RParam100.calcIntersect = function (
      chunk5FUZZQ4RParam263,
      chunk5FUZZQ4RParam264,
    ) {
      let chunk5FUZZQ4RValue1063 = chunk5FUZZQ4RParam263.width,
        chunk5FUZZQ4RValue1064 = [
          {
            x: chunk5FUZZQ4RValue1063 / 2,
            y: 0,
          },
          {
            x: chunk5FUZZQ4RValue1063,
            y: -chunk5FUZZQ4RValue1063 / 2,
          },
          {
            x: chunk5FUZZQ4RValue1063 / 2,
            y: -chunk5FUZZQ4RValue1063,
          },
          {
            x: 0,
            y: -chunk5FUZZQ4RValue1063 / 2,
          },
        ],
        chunk5FUZZQ4RValue1065 = chunk5FUZZQ4RValue12.polygon(
          chunk5FUZZQ4RParam263,
          chunk5FUZZQ4RValue1064,
          chunk5FUZZQ4RParam264,
        );
      return {
        x: chunk5FUZZQ4RValue1065.x - 0.5,
        y: chunk5FUZZQ4RValue1065.y - 0.5,
      };
    }),
    (chunk5FUZZQ4RParam100.intersect = function (chunk5FUZZQ4RParam357) {
      return this.calcIntersect(chunk5FUZZQ4RParam100, chunk5FUZZQ4RParam357);
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper52, "question");
async function chunk5FUZZQ4RHelper53(
  chunk5FUZZQ4RParam85,
  chunk5FUZZQ4RParam86,
) {
  let { labelStyles, nodeStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam86);
  chunk5FUZZQ4RParam86.labelStyle = labelStyles;
  let chunk5FUZZQ4RValue604 = chunk5FUZZQ4RParam86.padding ?? 0,
    chunk5FUZZQ4RValue605 =
      chunk5FUZZQ4RParam86.look === "neo" ? 21 : (chunk5FUZZQ4RValue604 ?? 0),
    chunk5FUZZQ4RValue606 =
      chunk5FUZZQ4RParam86.look === "neo" ? 12 : (chunk5FUZZQ4RValue604 ?? 0),
    { shapeSvg, bbox, label } = await chunk5FUZZQ4RS(
      chunk5FUZZQ4RParam85,
      chunk5FUZZQ4RParam86,
      chunk5FUZZQ4RValue2(chunk5FUZZQ4RParam86),
    ),
    chunk5FUZZQ4RValue607 =
      (chunk5FUZZQ4RParam86?.width ?? bbox.width) +
      (chunk5FUZZQ4RParam86.look === "neo"
        ? chunk5FUZZQ4RValue605 * 2
        : chunk5FUZZQ4RValue605),
    chunk5FUZZQ4RValue608 =
      (chunk5FUZZQ4RParam86?.height ?? bbox.height) +
      (chunk5FUZZQ4RParam86.look === "neo"
        ? chunk5FUZZQ4RValue606 * 2
        : chunk5FUZZQ4RValue606),
    chunk5FUZZQ4RValue609 = -chunk5FUZZQ4RValue607 / 2,
    chunk5FUZZQ4RValue610 = -chunk5FUZZQ4RValue608 / 2,
    chunk5FUZZQ4RValue611 = chunk5FUZZQ4RValue610 / 2,
    chunk5FUZZQ4RValue612 = [
      {
        x: chunk5FUZZQ4RValue609 + chunk5FUZZQ4RValue611,
        y: chunk5FUZZQ4RValue610,
      },
      {
        x: chunk5FUZZQ4RValue609,
        y: 0,
      },
      {
        x: chunk5FUZZQ4RValue609 + chunk5FUZZQ4RValue611,
        y: -chunk5FUZZQ4RValue610,
      },
      {
        x: -chunk5FUZZQ4RValue609,
        y: -chunk5FUZZQ4RValue610,
      },
      {
        x: -chunk5FUZZQ4RValue609,
        y: chunk5FUZZQ4RValue610,
      },
    ],
    { cssStyles: chunk5FUZZQ4RValue613 } = chunk5FUZZQ4RParam86,
    chunk5FUZZQ4RValue614 = rough.svg(shapeSvg),
    chunk5FUZZQ4RValue615 = chunkX2U36JSPN(chunk5FUZZQ4RParam86, {});
  chunk5FUZZQ4RParam86.look !== "handDrawn" &&
    ((chunk5FUZZQ4RValue615.roughness = 0),
    (chunk5FUZZQ4RValue615.fillStyle = "solid"));
  let chunk5FUZZQ4RValue616 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RValue612),
    chunk5FUZZQ4RValue617 = chunk5FUZZQ4RValue614.path(
      chunk5FUZZQ4RValue616,
      chunk5FUZZQ4RValue615,
    ),
    chunk5FUZZQ4RValue618 = shapeSvg.insert(
      () => chunk5FUZZQ4RValue617,
      ":first-child",
    );
  return (
    chunk5FUZZQ4RValue618.attr("class", "basic label-container outer-path"),
    chunk5FUZZQ4RValue613 &&
      chunk5FUZZQ4RParam86.look !== "handDrawn" &&
      chunk5FUZZQ4RValue618
        .selectAll("path")
        .attr("style", chunk5FUZZQ4RValue613),
    nodeStyles &&
      chunk5FUZZQ4RParam86.look !== "handDrawn" &&
      chunk5FUZZQ4RValue618.selectAll("path").attr("style", nodeStyles),
    chunk5FUZZQ4RValue618.attr(
      "transform",
      `translate(${-chunk5FUZZQ4RValue611 / 2},0)`,
    ),
    label.attr(
      "transform",
      `translate(${-chunk5FUZZQ4RValue611 / 2 - bbox.width / 2 - (bbox.x - (bbox.left ?? 0))}, ${-(bbox.height / 2) - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam86, chunk5FUZZQ4RValue618),
    (chunk5FUZZQ4RParam86.intersect = function (chunk5FUZZQ4RParam372) {
      return chunk5FUZZQ4RValue12.polygon(
        chunk5FUZZQ4RParam86,
        chunk5FUZZQ4RValue612,
        chunk5FUZZQ4RParam372,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper53, "rect_left_inv_arrow");
async function chunk5FUZZQ4RHelper54(
  chunk5FUZZQ4RParam16,
  chunk5FUZZQ4RParam17,
) {
  let { labelStyles, nodeStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam17);
  chunk5FUZZQ4RParam17.labelStyle = labelStyles;
  let chunk5FUZZQ4RValue186;
  chunk5FUZZQ4RValue186 = chunk5FUZZQ4RParam17.cssClasses
    ? "node " + chunk5FUZZQ4RParam17.cssClasses
    : "node default";
  let chunk5FUZZQ4RValue187 = chunk5FUZZQ4RParam16
      .insert("g")
      .attr("class", chunk5FUZZQ4RValue186)
      .attr("id", chunk5FUZZQ4RParam17.domId || chunk5FUZZQ4RParam17.id),
    chunk5FUZZQ4RValue188 = chunk5FUZZQ4RValue187.insert("g"),
    chunk5FUZZQ4RValue189 = chunk5FUZZQ4RValue187
      .insert("g")
      .attr("class", "label")
      .attr("style", nodeStyles),
    chunk5FUZZQ4RValue190 = chunk5FUZZQ4RParam17.description,
    chunk5FUZZQ4RValue191 = chunk5FUZZQ4RParam17.label,
    chunk5FUZZQ4RValue192 = await chunk5FUZZQ4RR(
      chunk5FUZZQ4RValue189,
      chunk5FUZZQ4RValue191,
      chunk5FUZZQ4RParam17.labelStyle,
      true,
      true,
    ),
    chunk5FUZZQ4RValue193 = {
      width: 0,
      height: 0,
    };
  if (chunkICPOFSXXT(_chunkICPOFSXXP())) {
    let chunk5FUZZQ4RValue1166 = chunk5FUZZQ4RValue192.children[0],
      chunk5FUZZQ4RValue1167 = Src(chunk5FUZZQ4RValue192);
    chunk5FUZZQ4RValue193 = chunk5FUZZQ4RValue1166.getBoundingClientRect();
    chunk5FUZZQ4RValue1167.attr("width", chunk5FUZZQ4RValue193.width);
    chunk5FUZZQ4RValue1167.attr("height", chunk5FUZZQ4RValue193.height);
  }
  chunkAGHRB4JFR.info("Text 2", chunk5FUZZQ4RValue190);
  let chunk5FUZZQ4RValue194 = chunk5FUZZQ4RValue190 || [],
    chunk5FUZZQ4RValue195 = chunk5FUZZQ4RValue192.getBBox(),
    chunk5FUZZQ4RValue196 = await chunk5FUZZQ4RR(
      chunk5FUZZQ4RValue189,
      Array.isArray(chunk5FUZZQ4RValue194)
        ? chunk5FUZZQ4RValue194.join("<br/>")
        : chunk5FUZZQ4RValue194,
      chunk5FUZZQ4RParam17.labelStyle,
      true,
      true,
    ),
    chunk5FUZZQ4RValue197 = chunk5FUZZQ4RValue196.children[0],
    _chunk5FUZZQ4RS = Src(chunk5FUZZQ4RValue196);
  chunk5FUZZQ4RValue193 = chunk5FUZZQ4RValue197.getBoundingClientRect();
  _chunk5FUZZQ4RS.attr("width", chunk5FUZZQ4RValue193.width);
  _chunk5FUZZQ4RS.attr("height", chunk5FUZZQ4RValue193.height);
  let chunk5FUZZQ4RValue198 = (chunk5FUZZQ4RParam17.padding || 0) / 2;
  Src(chunk5FUZZQ4RValue196).attr(
    "transform",
    "translate( " +
      (chunk5FUZZQ4RValue193.width > chunk5FUZZQ4RValue195.width
        ? 0
        : (chunk5FUZZQ4RValue195.width - chunk5FUZZQ4RValue193.width) / 2) +
      ", " +
      (chunk5FUZZQ4RValue195.height + chunk5FUZZQ4RValue198 + 5) +
      ")",
  );
  Src(chunk5FUZZQ4RValue192).attr(
    "transform",
    "translate( " +
      (chunk5FUZZQ4RValue193.width < chunk5FUZZQ4RValue195.width
        ? 0
        : -(chunk5FUZZQ4RValue195.width - chunk5FUZZQ4RValue193.width) / 2) +
      ", 0)",
  );
  chunk5FUZZQ4RValue193 = chunk5FUZZQ4RValue189.node().getBBox();
  chunk5FUZZQ4RValue189.attr(
    "transform",
    "translate(" +
      -chunk5FUZZQ4RValue193.width / 2 +
      ", " +
      (-chunk5FUZZQ4RValue193.height / 2 - chunk5FUZZQ4RValue198 + 3) +
      ")",
  );
  let chunk5FUZZQ4RValue199 =
      chunk5FUZZQ4RValue193.width + (chunk5FUZZQ4RParam17.padding || 0),
    chunk5FUZZQ4RValue200 =
      chunk5FUZZQ4RValue193.height + (chunk5FUZZQ4RParam17.padding || 0),
    chunk5FUZZQ4RValue201 =
      -chunk5FUZZQ4RValue193.width / 2 - chunk5FUZZQ4RValue198,
    chunk5FUZZQ4RValue202 =
      -chunk5FUZZQ4RValue193.height / 2 - chunk5FUZZQ4RValue198,
    chunk5FUZZQ4RValue203,
    chunk5FUZZQ4RValue204;
  if (chunk5FUZZQ4RParam17.look === "handDrawn") {
    let chunk5FUZZQ4RValue928 = rough.svg(chunk5FUZZQ4RValue187),
      chunk5FUZZQ4RValue929 = chunkX2U36JSPN(chunk5FUZZQ4RParam17, {}),
      chunk5FUZZQ4RValue930 = chunk5FUZZQ4RValue928.path(
        chunk5FUZZQ4RValue4(
          chunk5FUZZQ4RValue201,
          chunk5FUZZQ4RValue202,
          chunk5FUZZQ4RValue199,
          chunk5FUZZQ4RValue200,
          chunk5FUZZQ4RParam17.rx || 0,
        ),
        chunk5FUZZQ4RValue929,
      ),
      chunk5FUZZQ4RValue931 = chunk5FUZZQ4RValue928.line(
        -chunk5FUZZQ4RValue193.width / 2 - chunk5FUZZQ4RValue198,
        -chunk5FUZZQ4RValue193.height / 2 -
          chunk5FUZZQ4RValue198 +
          chunk5FUZZQ4RValue195.height +
          chunk5FUZZQ4RValue198,
        chunk5FUZZQ4RValue193.width / 2 + chunk5FUZZQ4RValue198,
        -chunk5FUZZQ4RValue193.height / 2 -
          chunk5FUZZQ4RValue198 +
          chunk5FUZZQ4RValue195.height +
          chunk5FUZZQ4RValue198,
        chunk5FUZZQ4RValue929,
      );
    chunk5FUZZQ4RValue204 = chunk5FUZZQ4RValue187.insert(
      () => (
        chunkAGHRB4JFR.debug("Rough node insert CXC", chunk5FUZZQ4RValue930),
        chunk5FUZZQ4RValue931
      ),
      ":first-child",
    );
    chunk5FUZZQ4RValue203 = chunk5FUZZQ4RValue187.insert(
      () => (
        chunkAGHRB4JFR.debug("Rough node insert CXC", chunk5FUZZQ4RValue930),
        chunk5FUZZQ4RValue930
      ),
      ":first-child",
    );
  } else {
    chunk5FUZZQ4RValue203 = chunk5FUZZQ4RValue188.insert(
      "rect",
      ":first-child",
    );
    chunk5FUZZQ4RValue204 = chunk5FUZZQ4RValue188.insert("line");
    chunk5FUZZQ4RValue203
      .attr("class", "outer title-state")
      .attr("style", nodeStyles)
      .attr("x", -chunk5FUZZQ4RValue193.width / 2 - chunk5FUZZQ4RValue198)
      .attr("y", -chunk5FUZZQ4RValue193.height / 2 - chunk5FUZZQ4RValue198)
      .attr(
        "width",
        chunk5FUZZQ4RValue193.width + (chunk5FUZZQ4RParam17.padding || 0),
      )
      .attr(
        "height",
        chunk5FUZZQ4RValue193.height + (chunk5FUZZQ4RParam17.padding || 0),
      );
    chunk5FUZZQ4RValue204
      .attr("class", "divider")
      .attr("x1", -chunk5FUZZQ4RValue193.width / 2 - chunk5FUZZQ4RValue198)
      .attr("x2", chunk5FUZZQ4RValue193.width / 2 + chunk5FUZZQ4RValue198)
      .attr(
        "y1",
        -chunk5FUZZQ4RValue193.height / 2 -
          chunk5FUZZQ4RValue198 +
          chunk5FUZZQ4RValue195.height +
          chunk5FUZZQ4RValue198,
      )
      .attr(
        "y2",
        -chunk5FUZZQ4RValue193.height / 2 -
          chunk5FUZZQ4RValue198 +
          chunk5FUZZQ4RValue195.height +
          chunk5FUZZQ4RValue198,
      );
  }
  return (
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam17, chunk5FUZZQ4RValue203),
    (chunk5FUZZQ4RParam17.intersect = function (chunk5FUZZQ4RParam407) {
      return chunk5FUZZQ4RValue12.rect(
        chunk5FUZZQ4RParam17,
        chunk5FUZZQ4RParam407,
      );
    }),
    chunk5FUZZQ4RValue187
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper54, "rectWithTitle");
async function at(
  chunk5FUZZQ4RParam269,
  chunk5FUZZQ4RParam270,
  { config: { themeVariables } },
) {
  let chunk5FUZZQ4RValue1093 = themeVariables?.radius ?? 5;
  return chunk5FUZZQ4RHelper43(chunk5FUZZQ4RParam269, chunk5FUZZQ4RParam270, {
    rx: chunk5FUZZQ4RValue1093,
    ry: chunk5FUZZQ4RValue1093,
    classes: "",
    labelPaddingX: chunk5FUZZQ4RParam270?.padding ?? 0,
    labelPaddingY: chunk5FUZZQ4RParam270?.padding ?? 0,
  });
}
chunkAGHRB4JFN(at, "roundedRect");
async function chunk5FUZZQ4RHelper55(
  chunk5FUZZQ4RParam80,
  chunk5FUZZQ4RParam81,
) {
  let { labelStyles, nodeStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam81);
  chunk5FUZZQ4RParam81.labelStyle = labelStyles;
  let chunk5FUZZQ4RValue565 =
      chunk5FUZZQ4RParam81.look === "neo"
        ? 16
        : (chunk5FUZZQ4RParam81.padding ?? 0),
    chunk5FUZZQ4RValue566 =
      chunk5FUZZQ4RParam81.look === "neo"
        ? 12
        : (chunk5FUZZQ4RParam81.padding ?? 0),
    { shapeSvg, bbox, label } = await chunk5FUZZQ4RS(
      chunk5FUZZQ4RParam80,
      chunk5FUZZQ4RParam81,
      chunk5FUZZQ4RValue2(chunk5FUZZQ4RParam81),
    ),
    chunk5FUZZQ4RValue567 =
      (chunk5FUZZQ4RParam81?.width ?? bbox.width) +
      chunk5FUZZQ4RValue565 * 2 +
      (chunk5FUZZQ4RParam81.look === "neo" ? 8 : 16),
    chunk5FUZZQ4RValue568 =
      (chunk5FUZZQ4RParam81?.height ?? bbox.height) + chunk5FUZZQ4RValue566 * 2,
    chunk5FUZZQ4RValue569 = chunk5FUZZQ4RValue567 - 8,
    chunk5FUZZQ4RValue570 = chunk5FUZZQ4RValue568,
    chunk5FUZZQ4RValue571 = 8 - chunk5FUZZQ4RValue567 / 2,
    chunk5FUZZQ4RValue572 = -chunk5FUZZQ4RValue568 / 2,
    { cssStyles: chunk5FUZZQ4RValue573 } = chunk5FUZZQ4RParam81,
    chunk5FUZZQ4RValue574 = rough.svg(shapeSvg),
    chunk5FUZZQ4RValue575 = chunkX2U36JSPN(chunk5FUZZQ4RParam81, {});
  chunk5FUZZQ4RParam81.look !== "handDrawn" &&
    ((chunk5FUZZQ4RValue575.roughness = 0),
    (chunk5FUZZQ4RValue575.fillStyle = "solid"));
  let chunk5FUZZQ4RValue576 = [
      {
        x: chunk5FUZZQ4RValue571,
        y: chunk5FUZZQ4RValue572,
      },
      {
        x: chunk5FUZZQ4RValue571 + chunk5FUZZQ4RValue569,
        y: chunk5FUZZQ4RValue572,
      },
      {
        x: chunk5FUZZQ4RValue571 + chunk5FUZZQ4RValue569,
        y: chunk5FUZZQ4RValue572 + chunk5FUZZQ4RValue570,
      },
      {
        x: chunk5FUZZQ4RValue571 - 8,
        y: chunk5FUZZQ4RValue572 + chunk5FUZZQ4RValue570,
      },
      {
        x: chunk5FUZZQ4RValue571 - 8,
        y: chunk5FUZZQ4RValue572,
      },
      {
        x: chunk5FUZZQ4RValue571,
        y: chunk5FUZZQ4RValue572,
      },
      {
        x: chunk5FUZZQ4RValue571,
        y: chunk5FUZZQ4RValue572 + chunk5FUZZQ4RValue570,
      },
    ],
    chunk5FUZZQ4RValue577 = chunk5FUZZQ4RValue574.polygon(
      chunk5FUZZQ4RValue576.map((item) => [item.x, item.y]),
      chunk5FUZZQ4RValue575,
    ),
    chunk5FUZZQ4RValue578 = shapeSvg.insert(
      () => chunk5FUZZQ4RValue577,
      ":first-child",
    );
  return (
    chunk5FUZZQ4RValue578
      .attr("class", "basic label-container outer-path")
      .attr("style", chunk5PVQY5BWF(chunk5FUZZQ4RValue573)),
    nodeStyles &&
      chunk5FUZZQ4RParam81.look !== "handDrawn" &&
      chunk5FUZZQ4RValue578.selectAll("path").attr("style", nodeStyles),
    chunk5FUZZQ4RValue573 &&
      chunk5FUZZQ4RParam81.look !== "handDrawn" &&
      chunk5FUZZQ4RValue578.selectAll("path").attr("style", nodeStyles),
    label.attr(
      "transform",
      `translate(${4 - bbox.width / 2 - (bbox.x - (bbox.left ?? 0))}, ${-(bbox.height / 2) - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam81, chunk5FUZZQ4RValue578),
    (chunk5FUZZQ4RParam81.intersect = function (chunk5FUZZQ4RParam408) {
      return chunk5FUZZQ4RValue12.rect(
        chunk5FUZZQ4RParam81,
        chunk5FUZZQ4RParam408,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper55, "shadedProcess");
async function chunk5FUZZQ4RHelper56(
  chunk5FUZZQ4RParam68,
  chunk5FUZZQ4RParam69,
) {
  let { labelStyles, nodeStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam69);
  chunk5FUZZQ4RParam69.labelStyle = labelStyles;
  let chunk5FUZZQ4RValue500 = chunk5FUZZQ4RParam69.padding ?? 0,
    chunk5FUZZQ4RValue501 =
      chunk5FUZZQ4RParam69.look === "neo" ? 16 : chunk5FUZZQ4RValue500,
    chunk5FUZZQ4RValue502 =
      chunk5FUZZQ4RParam69.look === "neo" ? 12 : chunk5FUZZQ4RValue500;
  (chunk5FUZZQ4RParam69.width || chunk5FUZZQ4RParam69.height) &&
    ((chunk5FUZZQ4RParam69.width = Math.max(
      (chunk5FUZZQ4RParam69?.width ?? 0) - chunk5FUZZQ4RValue501 * 2,
      10,
    )),
    (chunk5FUZZQ4RParam69.height = Math.max(
      (chunk5FUZZQ4RParam69?.height ?? 0) / 1.5 - chunk5FUZZQ4RValue502 * 2,
      10,
    )));
  let { shapeSvg, bbox, label } = await chunk5FUZZQ4RS(
      chunk5FUZZQ4RParam68,
      chunk5FUZZQ4RParam69,
      chunk5FUZZQ4RValue2(chunk5FUZZQ4RParam69),
    ),
    chunk5FUZZQ4RValue503 =
      (chunk5FUZZQ4RParam69?.width ? chunk5FUZZQ4RParam69?.width : bbox.width) +
      chunk5FUZZQ4RValue501 * 2,
    chunk5FUZZQ4RValue504 =
      ((chunk5FUZZQ4RParam69?.height
        ? chunk5FUZZQ4RParam69?.height
        : bbox.height) +
        chunk5FUZZQ4RValue502 * 2) *
      1.5,
    chunk5FUZZQ4RValue505 = chunk5FUZZQ4RValue503,
    chunk5FUZZQ4RValue506 = chunk5FUZZQ4RValue504 / 1.5,
    chunk5FUZZQ4RValue507 = -chunk5FUZZQ4RValue505 / 2,
    chunk5FUZZQ4RValue508 = -chunk5FUZZQ4RValue506 / 2,
    { cssStyles: chunk5FUZZQ4RValue509 } = chunk5FUZZQ4RParam69,
    chunk5FUZZQ4RValue510 = rough.svg(shapeSvg),
    chunk5FUZZQ4RValue511 = chunkX2U36JSPN(chunk5FUZZQ4RParam69, {});
  chunk5FUZZQ4RParam69.look !== "handDrawn" &&
    ((chunk5FUZZQ4RValue511.roughness = 0),
    (chunk5FUZZQ4RValue511.fillStyle = "solid"));
  let chunk5FUZZQ4RValue512 = [
      {
        x: chunk5FUZZQ4RValue507,
        y: chunk5FUZZQ4RValue508,
      },
      {
        x: chunk5FUZZQ4RValue507,
        y: chunk5FUZZQ4RValue508 + chunk5FUZZQ4RValue506,
      },
      {
        x: chunk5FUZZQ4RValue507 + chunk5FUZZQ4RValue505,
        y: chunk5FUZZQ4RValue508 + chunk5FUZZQ4RValue506,
      },
      {
        x: chunk5FUZZQ4RValue507 + chunk5FUZZQ4RValue505,
        y: chunk5FUZZQ4RValue508 - chunk5FUZZQ4RValue506 / 2,
      },
    ],
    chunk5FUZZQ4RValue513 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RValue512),
    chunk5FUZZQ4RValue514 = chunk5FUZZQ4RValue510.path(
      chunk5FUZZQ4RValue513,
      chunk5FUZZQ4RValue511,
    ),
    chunk5FUZZQ4RValue515 = shapeSvg.insert(
      () => chunk5FUZZQ4RValue514,
      ":first-child",
    );
  return (
    chunk5FUZZQ4RValue515.attr("class", "basic label-container  outer-path"),
    chunk5FUZZQ4RValue509 &&
      chunk5FUZZQ4RParam69.look !== "handDrawn" &&
      chunk5FUZZQ4RValue515
        .selectChildren("path")
        .attr("style", chunk5FUZZQ4RValue509),
    nodeStyles &&
      chunk5FUZZQ4RParam69.look !== "handDrawn" &&
      chunk5FUZZQ4RValue515.selectChildren("path").attr("style", nodeStyles),
    chunk5FUZZQ4RValue515.attr(
      "transform",
      `translate(0, ${chunk5FUZZQ4RValue506 / 4})`,
    ),
    label.attr(
      "transform",
      `translate(${-chunk5FUZZQ4RValue505 / 2 + (chunk5FUZZQ4RParam69.padding ?? 0) - (bbox.x - (bbox.left ?? 0))}, ${-chunk5FUZZQ4RValue506 / 4 + (chunk5FUZZQ4RParam69.padding ?? 0) - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam69, chunk5FUZZQ4RValue515),
    (chunk5FUZZQ4RParam69.intersect = function (chunk5FUZZQ4RParam373) {
      return chunk5FUZZQ4RValue12.polygon(
        chunk5FUZZQ4RParam69,
        chunk5FUZZQ4RValue512,
        chunk5FUZZQ4RParam373,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper56, "slopedRect");
async function chunk5FUZZQ4RHelper57(
  chunk5FUZZQ4RParam267,
  chunk5FUZZQ4RParam268,
) {
  let chunk5FUZZQ4RValue1075 = chunk5FUZZQ4RParam268.padding ?? 0,
    chunk5FUZZQ4RValue1076 =
      chunk5FUZZQ4RParam268.look === "neo" ? 16 : chunk5FUZZQ4RValue1075 * 2,
    chunk5FUZZQ4RValue1077 =
      chunk5FUZZQ4RParam268.look === "neo" ? 12 : chunk5FUZZQ4RValue1075;
  return chunk5FUZZQ4RHelper43(chunk5FUZZQ4RParam267, chunk5FUZZQ4RParam268, {
    rx: 0,
    ry: 0,
    classes: "",
    labelPaddingX:
      chunk5FUZZQ4RParam268.labelPaddingX ?? chunk5FUZZQ4RValue1076,
    labelPaddingY: chunk5FUZZQ4RValue1077,
  });
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper57, "squareRect");
async function chunk5FUZZQ4RHelper58(
  chunk5FUZZQ4RParam112,
  chunk5FUZZQ4RParam113,
) {
  let { labelStyles, nodeStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam113);
  chunk5FUZZQ4RParam113.labelStyle = labelStyles;
  let chunk5FUZZQ4RValue719 = chunk5FUZZQ4RParam113.padding ?? 0,
    chunk5FUZZQ4RValue720 =
      chunk5FUZZQ4RParam113.look === "neo" ? 20 : chunk5FUZZQ4RValue719,
    chunk5FUZZQ4RValue721 =
      chunk5FUZZQ4RParam113.look === "neo" ? 12 : chunk5FUZZQ4RValue719,
    { shapeSvg, bbox } = await chunk5FUZZQ4RS(
      chunk5FUZZQ4RParam112,
      chunk5FUZZQ4RParam113,
      chunk5FUZZQ4RValue2(chunk5FUZZQ4RParam113),
    ),
    chunk5FUZZQ4RValue722 =
      bbox.height +
      (chunk5FUZZQ4RParam113.look === "neo"
        ? chunk5FUZZQ4RValue721 * 2
        : chunk5FUZZQ4RValue721),
    chunk5FUZZQ4RValue723 =
      bbox.width +
      chunk5FUZZQ4RValue722 / 4 +
      (chunk5FUZZQ4RParam113.look === "neo"
        ? chunk5FUZZQ4RValue720 * 2
        : chunk5FUZZQ4RValue720),
    chunk5FUZZQ4RValue724 = chunk5FUZZQ4RValue722 / 2,
    { cssStyles } = chunk5FUZZQ4RParam113,
    chunk5FUZZQ4RValue725 = rough.svg(shapeSvg),
    chunk5FUZZQ4RValue726 = chunkX2U36JSPN(chunk5FUZZQ4RParam113, {});
  chunk5FUZZQ4RParam113.look !== "handDrawn" &&
    ((chunk5FUZZQ4RValue726.roughness = 0),
    (chunk5FUZZQ4RValue726.fillStyle = "solid"));
  let chunk5FUZZQ4RValue727 = [
      {
        x: -chunk5FUZZQ4RValue723 / 2 + chunk5FUZZQ4RValue724,
        y: -chunk5FUZZQ4RValue722 / 2,
      },
      {
        x: chunk5FUZZQ4RValue723 / 2 - chunk5FUZZQ4RValue724,
        y: -chunk5FUZZQ4RValue722 / 2,
      },
      ...chunk5FUZZQ4RHelper3(
        -chunk5FUZZQ4RValue723 / 2 + chunk5FUZZQ4RValue724,
        0,
        chunk5FUZZQ4RValue724,
        50,
        90,
        270,
      ),
      {
        x: chunk5FUZZQ4RValue723 / 2 - chunk5FUZZQ4RValue724,
        y: chunk5FUZZQ4RValue722 / 2,
      },
      ...chunk5FUZZQ4RHelper3(
        chunk5FUZZQ4RValue723 / 2 - chunk5FUZZQ4RValue724,
        0,
        chunk5FUZZQ4RValue724,
        50,
        270,
        450,
      ),
    ],
    chunk5FUZZQ4RValue728 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RValue727),
    chunk5FUZZQ4RValue729 = chunk5FUZZQ4RValue725.path(
      chunk5FUZZQ4RValue728,
      chunk5FUZZQ4RValue726,
    ),
    chunk5FUZZQ4RValue730 = shapeSvg.insert(
      () => chunk5FUZZQ4RValue729,
      ":first-child",
    );
  return (
    chunk5FUZZQ4RValue730.attr("class", "basic label-container outer-path"),
    cssStyles &&
      chunk5FUZZQ4RParam113.look !== "handDrawn" &&
      chunk5FUZZQ4RValue730.selectChildren("path").attr("style", cssStyles),
    nodeStyles &&
      chunk5FUZZQ4RParam113.look !== "handDrawn" &&
      chunk5FUZZQ4RValue730.selectChildren("path").attr("style", nodeStyles),
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam113, chunk5FUZZQ4RValue730),
    (chunk5FUZZQ4RParam113.intersect = function (chunk5FUZZQ4RParam374) {
      return chunk5FUZZQ4RValue12.polygon(
        chunk5FUZZQ4RParam113,
        chunk5FUZZQ4RValue727,
        chunk5FUZZQ4RParam374,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper58, "stadium");
async function chunk5FUZZQ4RHelper59(
  chunk5FUZZQ4RParam304,
  chunk5FUZZQ4RParam305,
) {
  return chunk5FUZZQ4RHelper43(chunk5FUZZQ4RParam304, chunk5FUZZQ4RParam305, {
    rx: chunk5FUZZQ4RParam305.look === "neo" ? 3 : 5,
    ry: chunk5FUZZQ4RParam305.look === "neo" ? 3 : 5,
    classes: "flowchart-node",
  });
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper59, "state");
function chunk5FUZZQ4RHelper60(
  chunk5FUZZQ4RParam72,
  chunk5FUZZQ4RParam73,
  { config: { themeVariables } },
) {
  let { labelStyles, nodeStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam73);
  chunk5FUZZQ4RParam73.labelStyle = labelStyles;
  let { cssStyles } = chunk5FUZZQ4RParam73,
    { lineColor, stateBorder, nodeBorder, nodeShadow } = themeVariables;
  (chunk5FUZZQ4RParam73.width || chunk5FUZZQ4RParam73.height) &&
    ((chunk5FUZZQ4RParam73.width ?? 0) < 14 &&
      (chunk5FUZZQ4RParam73.width = 14),
    (chunk5FUZZQ4RParam73.height ?? 0) < 14 &&
      (chunk5FUZZQ4RParam73.height = 14));
  chunk5FUZZQ4RParam73.width ||= 14;
  chunk5FUZZQ4RParam73.height ||= 14;
  let chunk5FUZZQ4RValue527 = chunk5FUZZQ4RParam72
      .insert("g")
      .attr("class", "node default")
      .attr("id", chunk5FUZZQ4RParam73.domId ?? chunk5FUZZQ4RParam73.id),
    chunk5FUZZQ4RValue528 = rough.svg(chunk5FUZZQ4RValue527),
    chunk5FUZZQ4RValue529 = chunkX2U36JSPN(chunk5FUZZQ4RParam73, {});
  chunk5FUZZQ4RParam73.look !== "handDrawn" &&
    ((chunk5FUZZQ4RValue529.roughness = 0),
    (chunk5FUZZQ4RValue529.fillStyle = "solid"));
  let chunk5FUZZQ4RValue530 = chunk5FUZZQ4RValue528.circle(
      0,
      0,
      chunk5FUZZQ4RParam73.width,
      {
        ...chunk5FUZZQ4RValue529,
        stroke: lineColor,
        strokeWidth: 2,
      },
    ),
    chunk5FUZZQ4RValue531 = stateBorder ?? nodeBorder,
    chunk5FUZZQ4RValue532 = ((chunk5FUZZQ4RParam73.width ?? 0) * 5) / 14,
    chunk5FUZZQ4RValue533 = chunk5FUZZQ4RValue528.circle(
      0,
      0,
      chunk5FUZZQ4RValue532,
      {
        ...chunk5FUZZQ4RValue529,
        fill: chunk5FUZZQ4RValue531,
        stroke: chunk5FUZZQ4RValue531,
        strokeWidth: 2,
        fillStyle: "solid",
      },
    ),
    chunk5FUZZQ4RValue534 = chunk5FUZZQ4RValue527.insert(
      () => chunk5FUZZQ4RValue530,
      ":first-child",
    );
  if (
    (chunk5FUZZQ4RValue534.insert(() => chunk5FUZZQ4RValue533),
    chunk5FUZZQ4RParam73.look !== "handDrawn" &&
      chunk5FUZZQ4RValue534.attr("class", "outer-path"),
    cssStyles &&
      chunk5FUZZQ4RValue534.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunk5FUZZQ4RValue534.selectAll("path").attr("style", nodeStyles),
    chunk5FUZZQ4RParam73.width < 25 &&
      nodeShadow &&
      chunk5FUZZQ4RParam73.look !== "handDrawn")
  ) {
    let chunk5FUZZQ4RValue1160 =
        chunk5FUZZQ4RParam72.node()?.ownerSVGElement?.id ?? "",
      chunk5FUZZQ4RValue1161 = chunk5FUZZQ4RValue1160
        ? `${chunk5FUZZQ4RValue1160}-drop-shadow-small`
        : "drop-shadow-small";
    chunk5FUZZQ4RValue534.attr(
      "style",
      `filter:url(#${chunk5FUZZQ4RValue1161})`,
    );
  }
  return (
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam73, chunk5FUZZQ4RValue534),
    (chunk5FUZZQ4RParam73.intersect = function (chunk5FUZZQ4RParam355) {
      return chunk5FUZZQ4RValue12.circle(
        chunk5FUZZQ4RParam73,
        (chunk5FUZZQ4RParam73.width ?? 0) / 2,
        chunk5FUZZQ4RParam355,
      );
    }),
    chunk5FUZZQ4RValue527
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper60, "stateEnd");
function chunk5FUZZQ4RHelper61(
  chunk5FUZZQ4RParam97,
  chunk5FUZZQ4RParam98,
  { config: { themeVariables } },
) {
  let { lineColor, nodeShadow } = themeVariables;
  (chunk5FUZZQ4RParam98.width || chunk5FUZZQ4RParam98.height) &&
    ((chunk5FUZZQ4RParam98.width ?? 0) < 14 &&
      (chunk5FUZZQ4RParam98.width = 14),
    (chunk5FUZZQ4RParam98.height ?? 0) < 14 &&
      (chunk5FUZZQ4RParam98.height = 14));
  chunk5FUZZQ4RParam98.width ||= 14;
  chunk5FUZZQ4RParam98.height ||= 14;
  let chunk5FUZZQ4RValue668 = chunk5FUZZQ4RParam97
      .insert("g")
      .attr("class", "node default")
      .attr("id", chunk5FUZZQ4RParam98.domId || chunk5FUZZQ4RParam98.id),
    chunk5FUZZQ4RValue669;
  if (chunk5FUZZQ4RParam98.look === "handDrawn") {
    let chunk5FUZZQ4RValue1082 = rough
      .svg(chunk5FUZZQ4RValue668)
      .circle(0, 0, chunk5FUZZQ4RParam98.width, chunkX2U36JSPN(lineColor));
    chunk5FUZZQ4RValue669 = chunk5FUZZQ4RValue668.insert(
      () => chunk5FUZZQ4RValue1082,
    );
    chunk5FUZZQ4RValue669
      .attr("class", "state-start")
      .attr("r", (chunk5FUZZQ4RParam98.width ?? 7) / 2)
      .attr("width", chunk5FUZZQ4RParam98.width ?? 14)
      .attr("height", chunk5FUZZQ4RParam98.height ?? 14);
  } else {
    chunk5FUZZQ4RValue669 = chunk5FUZZQ4RValue668.insert(
      "circle",
      ":first-child",
    );
    chunk5FUZZQ4RValue669
      .attr("class", "state-start")
      .attr("r", (chunk5FUZZQ4RParam98.width ?? 7) / 2)
      .attr("width", chunk5FUZZQ4RParam98.width ?? 14)
      .attr("height", chunk5FUZZQ4RParam98.height ?? 14);
  }
  if (
    chunk5FUZZQ4RParam98.width < 25 &&
    nodeShadow &&
    chunk5FUZZQ4RParam98.look !== "handDrawn"
  ) {
    let chunk5FUZZQ4RValue1162 =
        chunk5FUZZQ4RParam97.node()?.ownerSVGElement?.id ?? "",
      chunk5FUZZQ4RValue1163 = chunk5FUZZQ4RValue1162
        ? `${chunk5FUZZQ4RValue1162}-drop-shadow-small`
        : "drop-shadow-small";
    chunk5FUZZQ4RValue669.attr(
      "style",
      `filter:url(#${chunk5FUZZQ4RValue1163})`,
    );
  }
  return (
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam98, chunk5FUZZQ4RValue669),
    (chunk5FUZZQ4RParam98.intersect = function (chunk5FUZZQ4RParam356) {
      return chunk5FUZZQ4RValue12.circle(
        chunk5FUZZQ4RParam98,
        (chunk5FUZZQ4RParam98.width ?? 7) / 2,
        chunk5FUZZQ4RParam356,
      );
    }),
    chunk5FUZZQ4RValue668
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper61, "stateStart");
async function chunk5FUZZQ4RHelper62(
  chunk5FUZZQ4RParam93,
  chunk5FUZZQ4RParam94,
) {
  let { labelStyles, nodeStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam94);
  chunk5FUZZQ4RParam94.labelStyle = labelStyles;
  let chunk5FUZZQ4RValue649 = chunk5FUZZQ4RParam94?.padding ?? 8,
    chunk5FUZZQ4RValue650 =
      chunk5FUZZQ4RParam94.look === "neo" ? 28 : chunk5FUZZQ4RValue649,
    chunk5FUZZQ4RValue651 =
      chunk5FUZZQ4RParam94.look === "neo" ? 12 : chunk5FUZZQ4RValue649,
    { shapeSvg, bbox } = await chunk5FUZZQ4RS(
      chunk5FUZZQ4RParam93,
      chunk5FUZZQ4RParam94,
      chunk5FUZZQ4RValue2(chunk5FUZZQ4RParam94),
    ),
    chunk5FUZZQ4RValue652 =
      (chunk5FUZZQ4RParam94?.width ?? bbox.width) + 16 + chunk5FUZZQ4RValue650,
    chunk5FUZZQ4RValue653 =
      (chunk5FUZZQ4RParam94?.height ?? bbox.height) + chunk5FUZZQ4RValue651,
    chunk5FUZZQ4RValue654 = chunk5FUZZQ4RValue652 - 16,
    chunk5FUZZQ4RValue655 = chunk5FUZZQ4RValue653,
    chunk5FUZZQ4RValue656 = -chunk5FUZZQ4RValue652 / 2,
    chunk5FUZZQ4RValue657 = -chunk5FUZZQ4RValue653 / 2,
    chunk5FUZZQ4RValue658 = [
      {
        x: 0,
        y: 0,
      },
      {
        x: chunk5FUZZQ4RValue654,
        y: 0,
      },
      {
        x: chunk5FUZZQ4RValue654,
        y: -chunk5FUZZQ4RValue655,
      },
      {
        x: 0,
        y: -chunk5FUZZQ4RValue655,
      },
      {
        x: 0,
        y: 0,
      },
      {
        x: -8,
        y: 0,
      },
      {
        x: chunk5FUZZQ4RValue654 + 8,
        y: 0,
      },
      {
        x: chunk5FUZZQ4RValue654 + 8,
        y: -chunk5FUZZQ4RValue655,
      },
      {
        x: -8,
        y: -chunk5FUZZQ4RValue655,
      },
      {
        x: -8,
        y: 0,
      },
    ];
  if (chunk5FUZZQ4RParam94.look === "handDrawn") {
    let chunk5FUZZQ4RValue963 = rough.svg(shapeSvg),
      chunk5FUZZQ4RValue964 = chunkX2U36JSPN(chunk5FUZZQ4RParam94, {}),
      chunk5FUZZQ4RValue965 = chunk5FUZZQ4RValue963.rectangle(
        chunk5FUZZQ4RValue656,
        chunk5FUZZQ4RValue657,
        chunk5FUZZQ4RValue654 + 16,
        chunk5FUZZQ4RValue655,
        chunk5FUZZQ4RValue964,
      ),
      chunk5FUZZQ4RValue966 = chunk5FUZZQ4RValue963.line(
        chunk5FUZZQ4RValue656 + 8,
        chunk5FUZZQ4RValue657,
        chunk5FUZZQ4RValue656 + 8,
        chunk5FUZZQ4RValue657 + chunk5FUZZQ4RValue655,
        chunk5FUZZQ4RValue964,
      ),
      chunk5FUZZQ4RValue967 = chunk5FUZZQ4RValue963.line(
        chunk5FUZZQ4RValue656 + 8 + chunk5FUZZQ4RValue654,
        chunk5FUZZQ4RValue657,
        chunk5FUZZQ4RValue656 + 8 + chunk5FUZZQ4RValue654,
        chunk5FUZZQ4RValue657 + chunk5FUZZQ4RValue655,
        chunk5FUZZQ4RValue964,
      );
    shapeSvg.insert(() => chunk5FUZZQ4RValue966, ":first-child");
    shapeSvg.insert(() => chunk5FUZZQ4RValue967, ":first-child");
    let chunk5FUZZQ4RValue968 = shapeSvg.insert(
        () => chunk5FUZZQ4RValue965,
        ":first-child",
      ),
      { cssStyles } = chunk5FUZZQ4RParam94;
    chunk5FUZZQ4RValue968
      .attr("class", "basic label-container")
      .attr("style", chunk5PVQY5BWF(cssStyles));
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam94, chunk5FUZZQ4RValue968);
  } else {
    let chunk5FUZZQ4RValue1219 = chunk5FUZZQ4RHelper15(
      shapeSvg,
      chunk5FUZZQ4RValue654,
      chunk5FUZZQ4RValue655,
      chunk5FUZZQ4RValue658,
    );
    nodeStyles && chunk5FUZZQ4RValue1219.attr("style", nodeStyles);
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam94, chunk5FUZZQ4RValue1219);
  }
  return (
    (chunk5FUZZQ4RParam94.intersect = function (chunk5FUZZQ4RParam375) {
      return chunk5FUZZQ4RValue12.polygon(
        chunk5FUZZQ4RParam94,
        chunk5FUZZQ4RValue658,
        chunk5FUZZQ4RParam375,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper62, "subroutine");
async function chunk5FUZZQ4RHelper63(
  chunk5FUZZQ4RParam56,
  chunk5FUZZQ4RParam57,
) {
  let { labelStyles, nodeStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam57);
  chunk5FUZZQ4RParam57.labelStyle = labelStyles;
  let chunk5FUZZQ4RValue446 = chunk5FUZZQ4RParam57.padding ?? 0,
    chunk5FUZZQ4RValue447 =
      chunk5FUZZQ4RParam57.look === "neo" ? 16 : chunk5FUZZQ4RValue446,
    chunk5FUZZQ4RValue448 =
      chunk5FUZZQ4RParam57.look === "neo" ? 12 : chunk5FUZZQ4RValue446;
  (chunk5FUZZQ4RParam57.width || chunk5FUZZQ4RParam57.height) &&
    ((chunk5FUZZQ4RParam57.height = Math.max(
      (chunk5FUZZQ4RParam57?.height ?? 0) - chunk5FUZZQ4RValue448 * 2,
      10,
    )),
    (chunk5FUZZQ4RParam57.width = Math.max(
      (chunk5FUZZQ4RParam57?.width ?? 0) -
        chunk5FUZZQ4RValue447 * 2 -
        0.2 * (chunk5FUZZQ4RParam57.height + chunk5FUZZQ4RValue448 * 2),
      10,
    )));
  let { shapeSvg, bbox } = await chunk5FUZZQ4RS(
      chunk5FUZZQ4RParam56,
      chunk5FUZZQ4RParam57,
      chunk5FUZZQ4RValue2(chunk5FUZZQ4RParam57),
    ),
    chunk5FUZZQ4RValue449 =
      (chunk5FUZZQ4RParam57?.height
        ? chunk5FUZZQ4RParam57?.height
        : bbox.height) +
      chunk5FUZZQ4RValue448 * 2,
    chunk5FUZZQ4RValue450 = 0.2 * chunk5FUZZQ4RValue449,
    chunk5FUZZQ4RValue451 = 0.2 * chunk5FUZZQ4RValue449,
    chunk5FUZZQ4RValue452 =
      (chunk5FUZZQ4RParam57?.width ? chunk5FUZZQ4RParam57?.width : bbox.width) +
      chunk5FUZZQ4RValue447 * 2 +
      chunk5FUZZQ4RValue450 -
      chunk5FUZZQ4RValue450,
    chunk5FUZZQ4RValue453 = chunk5FUZZQ4RValue449,
    chunk5FUZZQ4RValue454 = -chunk5FUZZQ4RValue452 / 2,
    chunk5FUZZQ4RValue455 = -chunk5FUZZQ4RValue453 / 2,
    { cssStyles: chunk5FUZZQ4RValue456 } = chunk5FUZZQ4RParam57,
    chunk5FUZZQ4RValue457 = rough.svg(shapeSvg),
    chunk5FUZZQ4RValue458 = chunkX2U36JSPN(chunk5FUZZQ4RParam57, {}),
    chunk5FUZZQ4RValue459 = [
      {
        x: chunk5FUZZQ4RValue454 - chunk5FUZZQ4RValue450 / 2,
        y: chunk5FUZZQ4RValue455,
      },
      {
        x:
          chunk5FUZZQ4RValue454 +
          chunk5FUZZQ4RValue452 +
          chunk5FUZZQ4RValue450 / 2,
        y: chunk5FUZZQ4RValue455,
      },
      {
        x:
          chunk5FUZZQ4RValue454 +
          chunk5FUZZQ4RValue452 +
          chunk5FUZZQ4RValue450 / 2,
        y: chunk5FUZZQ4RValue455 + chunk5FUZZQ4RValue453,
      },
      {
        x: chunk5FUZZQ4RValue454 - chunk5FUZZQ4RValue450 / 2,
        y: chunk5FUZZQ4RValue455 + chunk5FUZZQ4RValue453,
      },
    ],
    chunk5FUZZQ4RValue460 = [
      {
        x:
          chunk5FUZZQ4RValue454 +
          chunk5FUZZQ4RValue452 -
          chunk5FUZZQ4RValue450 / 2,
        y: chunk5FUZZQ4RValue455 + chunk5FUZZQ4RValue453,
      },
      {
        x:
          chunk5FUZZQ4RValue454 +
          chunk5FUZZQ4RValue452 +
          chunk5FUZZQ4RValue450 / 2,
        y: chunk5FUZZQ4RValue455 + chunk5FUZZQ4RValue453,
      },
      {
        x:
          chunk5FUZZQ4RValue454 +
          chunk5FUZZQ4RValue452 +
          chunk5FUZZQ4RValue450 / 2,
        y:
          chunk5FUZZQ4RValue455 + chunk5FUZZQ4RValue453 - chunk5FUZZQ4RValue451,
      },
    ];
  chunk5FUZZQ4RParam57.look !== "handDrawn" &&
    ((chunk5FUZZQ4RValue458.roughness = 0),
    (chunk5FUZZQ4RValue458.fillStyle = "solid"));
  let chunk5FUZZQ4RValue461 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RValue459),
    chunk5FUZZQ4RValue462 = chunk5FUZZQ4RValue457.path(
      chunk5FUZZQ4RValue461,
      chunk5FUZZQ4RValue458,
    ),
    chunk5FUZZQ4RValue463 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RValue460),
    chunk5FUZZQ4RValue464 = chunk5FUZZQ4RValue457.path(chunk5FUZZQ4RValue463, {
      ...chunk5FUZZQ4RValue458,
      fillStyle: "solid",
    }),
    _chunk5FUZZQ4RR = shapeSvg.insert(
      () => chunk5FUZZQ4RValue464,
      ":first-child",
    );
  return (
    _chunk5FUZZQ4RR.insert(() => chunk5FUZZQ4RValue462, ":first-child"),
    _chunk5FUZZQ4RR.attr("class", "basic label-container outer-path"),
    chunk5FUZZQ4RValue456 &&
      chunk5FUZZQ4RParam57.look !== "handDrawn" &&
      _chunk5FUZZQ4RR.selectAll("path").attr("style", chunk5FUZZQ4RValue456),
    nodeStyles &&
      chunk5FUZZQ4RParam57.look !== "handDrawn" &&
      _chunk5FUZZQ4RR.selectAll("path").attr("style", nodeStyles),
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam57, _chunk5FUZZQ4RR),
    (chunk5FUZZQ4RParam57.intersect = function (chunk5FUZZQ4RParam376) {
      return chunk5FUZZQ4RValue12.polygon(
        chunk5FUZZQ4RParam57,
        chunk5FUZZQ4RValue459,
        chunk5FUZZQ4RParam376,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper63, "taggedRect");
async function _t(chunk5FUZZQ4RParam48, chunk5FUZZQ4RParam49) {
  let { labelStyles, nodeStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam49);
  chunk5FUZZQ4RParam49.labelStyle = labelStyles;
  let { shapeSvg, bbox, label } = await chunk5FUZZQ4RS(
      chunk5FUZZQ4RParam48,
      chunk5FUZZQ4RParam49,
      chunk5FUZZQ4RValue2(chunk5FUZZQ4RParam49),
    ),
    chunk5FUZZQ4RValue391 = Math.max(
      bbox.width + (chunk5FUZZQ4RParam49.padding ?? 0) * 2,
      chunk5FUZZQ4RParam49?.width ?? 0,
    ),
    chunk5FUZZQ4RValue392 = Math.max(
      bbox.height + (chunk5FUZZQ4RParam49.padding ?? 0) * 2,
      chunk5FUZZQ4RParam49?.height ?? 0,
    ),
    chunk5FUZZQ4RValue393 = chunk5FUZZQ4RValue392 / 8,
    chunk5FUZZQ4RValue394 = 0.2 * chunk5FUZZQ4RValue391,
    chunk5FUZZQ4RValue395 = 0.2 * chunk5FUZZQ4RValue392,
    chunk5FUZZQ4RValue396 = chunk5FUZZQ4RValue392 + chunk5FUZZQ4RValue393,
    { cssStyles } = chunk5FUZZQ4RParam49,
    chunk5FUZZQ4RValue397 = rough.svg(shapeSvg),
    chunk5FUZZQ4RValue398 = chunkX2U36JSPN(chunk5FUZZQ4RParam49, {});
  chunk5FUZZQ4RParam49.look !== "handDrawn" &&
    ((chunk5FUZZQ4RValue398.roughness = 0),
    (chunk5FUZZQ4RValue398.fillStyle = "solid"));
  let chunk5FUZZQ4RValue399 = [
      {
        x: -chunk5FUZZQ4RValue391 / 2 - (chunk5FUZZQ4RValue391 / 2) * 0.1,
        y: chunk5FUZZQ4RValue396 / 2,
      },
      ...chunk5FUZZQ4RHelper2(
        -chunk5FUZZQ4RValue391 / 2 - (chunk5FUZZQ4RValue391 / 2) * 0.1,
        chunk5FUZZQ4RValue396 / 2,
        chunk5FUZZQ4RValue391 / 2 + (chunk5FUZZQ4RValue391 / 2) * 0.1,
        chunk5FUZZQ4RValue396 / 2,
        chunk5FUZZQ4RValue393,
        0.8,
      ),
      {
        x: chunk5FUZZQ4RValue391 / 2 + (chunk5FUZZQ4RValue391 / 2) * 0.1,
        y: -chunk5FUZZQ4RValue396 / 2,
      },
      {
        x: -chunk5FUZZQ4RValue391 / 2 - (chunk5FUZZQ4RValue391 / 2) * 0.1,
        y: -chunk5FUZZQ4RValue396 / 2,
      },
    ],
    chunk5FUZZQ4RValue400 =
      -chunk5FUZZQ4RValue391 / 2 + (chunk5FUZZQ4RValue391 / 2) * 0.1,
    chunk5FUZZQ4RValue401 =
      -chunk5FUZZQ4RValue396 / 2 - chunk5FUZZQ4RValue395 * 0.4,
    chunk5FUZZQ4RValue402 = [
      {
        x:
          chunk5FUZZQ4RValue400 + chunk5FUZZQ4RValue391 - chunk5FUZZQ4RValue394,
        y: (chunk5FUZZQ4RValue401 + chunk5FUZZQ4RValue392) * 1.3,
      },
      {
        x: chunk5FUZZQ4RValue400 + chunk5FUZZQ4RValue391,
        y:
          chunk5FUZZQ4RValue401 + chunk5FUZZQ4RValue392 - chunk5FUZZQ4RValue395,
      },
      {
        x: chunk5FUZZQ4RValue400 + chunk5FUZZQ4RValue391,
        y: (chunk5FUZZQ4RValue401 + chunk5FUZZQ4RValue392) * 0.9,
      },
      ...chunk5FUZZQ4RHelper2(
        chunk5FUZZQ4RValue400 + chunk5FUZZQ4RValue391,
        (chunk5FUZZQ4RValue401 + chunk5FUZZQ4RValue392) * 1.25,
        chunk5FUZZQ4RValue400 + chunk5FUZZQ4RValue391 - chunk5FUZZQ4RValue394,
        (chunk5FUZZQ4RValue401 + chunk5FUZZQ4RValue392) * 1.3,
        -chunk5FUZZQ4RValue392 * 0.02,
        0.5,
      ),
    ],
    chunk5FUZZQ4RValue403 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RValue399),
    chunk5FUZZQ4RValue404 = chunk5FUZZQ4RValue397.path(
      chunk5FUZZQ4RValue403,
      chunk5FUZZQ4RValue398,
    ),
    chunk5FUZZQ4RValue405 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RValue402),
    chunk5FUZZQ4RValue406 = chunk5FUZZQ4RValue397.path(chunk5FUZZQ4RValue405, {
      ...chunk5FUZZQ4RValue398,
      fillStyle: "solid",
    }),
    _chunk5FUZZQ4RR = shapeSvg.insert(
      () => chunk5FUZZQ4RValue406,
      ":first-child",
    );
  return (
    _chunk5FUZZQ4RR.insert(() => chunk5FUZZQ4RValue404, ":first-child"),
    _chunk5FUZZQ4RR.attr("class", "basic label-container outer-path"),
    cssStyles &&
      chunk5FUZZQ4RParam49.look !== "handDrawn" &&
      _chunk5FUZZQ4RR.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunk5FUZZQ4RParam49.look !== "handDrawn" &&
      _chunk5FUZZQ4RR.selectAll("path").attr("style", nodeStyles),
    _chunk5FUZZQ4RR.attr(
      "transform",
      `translate(0,${-chunk5FUZZQ4RValue393 / 2})`,
    ),
    label.attr(
      "transform",
      `translate(${-chunk5FUZZQ4RValue391 / 2 + (chunk5FUZZQ4RParam49.padding ?? 0) - (bbox.x - (bbox.left ?? 0))},${-chunk5FUZZQ4RValue392 / 2 + (chunk5FUZZQ4RParam49.padding ?? 0) - chunk5FUZZQ4RValue393 / 2 - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam49, _chunk5FUZZQ4RR),
    (chunk5FUZZQ4RParam49.intersect = function (chunk5FUZZQ4RParam377) {
      return chunk5FUZZQ4RValue12.polygon(
        chunk5FUZZQ4RParam49,
        chunk5FUZZQ4RValue399,
        chunk5FUZZQ4RParam377,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(_t, "taggedWaveEdgedRectangle");
async function chunk5FUZZQ4RHelper64(
  chunk5FUZZQ4RParam182,
  chunk5FUZZQ4RParam183,
) {
  let { labelStyles, nodeStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam183);
  chunk5FUZZQ4RParam183.labelStyle = labelStyles;
  let { shapeSvg, bbox } = await chunk5FUZZQ4RS(
      chunk5FUZZQ4RParam182,
      chunk5FUZZQ4RParam183,
      chunk5FUZZQ4RValue2(chunk5FUZZQ4RParam183),
    ),
    chunk5FUZZQ4RValue907 = Math.max(
      bbox.width + (chunk5FUZZQ4RParam183.padding ?? 0),
      chunk5FUZZQ4RParam183?.width || 0,
    ),
    chunk5FUZZQ4RValue908 = Math.max(
      bbox.height + (chunk5FUZZQ4RParam183.padding ?? 0),
      chunk5FUZZQ4RParam183?.height || 0,
    ),
    chunk5FUZZQ4RValue909 = -chunk5FUZZQ4RValue907 / 2,
    chunk5FUZZQ4RValue910 = -chunk5FUZZQ4RValue908 / 2,
    chunk5FUZZQ4RValue911 = shapeSvg.insert("rect", ":first-child");
  return (
    chunk5FUZZQ4RValue911
      .attr("class", "text")
      .attr("style", nodeStyles)
      .attr("rx", 0)
      .attr("ry", 0)
      .attr("x", chunk5FUZZQ4RValue909)
      .attr("y", chunk5FUZZQ4RValue910)
      .attr("width", chunk5FUZZQ4RValue907)
      .attr("height", chunk5FUZZQ4RValue908),
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam183, chunk5FUZZQ4RValue911),
    (chunk5FUZZQ4RParam183.intersect = function (chunk5FUZZQ4RParam409) {
      return chunk5FUZZQ4RValue12.rect(
        chunk5FUZZQ4RParam183,
        chunk5FUZZQ4RParam409,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper64, "text");
var chunk5FUZZQ4RValue29 = chunkAGHRB4JFN(
    (
      chunk5FUZZQ4RParam298,
      chunk5FUZZQ4RParam299,
      chunk5FUZZQ4RParam300,
      chunk5FUZZQ4RParam301,
      chunk5FUZZQ4RParam302,
      chunk5FUZZQ4RParam303,
    ) => `M${chunk5FUZZQ4RParam298},${chunk5FUZZQ4RParam299}
    a${chunk5FUZZQ4RParam302},${chunk5FUZZQ4RParam303} 0,0,1 0,${-chunk5FUZZQ4RParam301}
    l${chunk5FUZZQ4RParam300},0
    a${chunk5FUZZQ4RParam302},${chunk5FUZZQ4RParam303} 0,0,1 0,${chunk5FUZZQ4RParam301}
    M${chunk5FUZZQ4RParam300},${-chunk5FUZZQ4RParam301}
    a${chunk5FUZZQ4RParam302},${chunk5FUZZQ4RParam303} 0,0,0 0,${chunk5FUZZQ4RParam301}
    l${-chunk5FUZZQ4RParam300},0`,
    "createCylinderPathD",
  ),
  chunk5FUZZQ4RValue30 = chunkAGHRB4JFN(
    (
      chunk5FUZZQ4RParam289,
      chunk5FUZZQ4RParam290,
      chunk5FUZZQ4RParam291,
      chunk5FUZZQ4RParam292,
      chunk5FUZZQ4RParam293,
      chunk5FUZZQ4RParam294,
    ) =>
      [
        `M${chunk5FUZZQ4RParam289},${chunk5FUZZQ4RParam290}`,
        `M${chunk5FUZZQ4RParam289 + chunk5FUZZQ4RParam291},${chunk5FUZZQ4RParam290}`,
        `a${chunk5FUZZQ4RParam293},${chunk5FUZZQ4RParam294} 0,0,0 0,${-chunk5FUZZQ4RParam292}`,
        `l${-chunk5FUZZQ4RParam291},0`,
        `a${chunk5FUZZQ4RParam293},${chunk5FUZZQ4RParam294} 0,0,0 0,${chunk5FUZZQ4RParam292}`,
        `l${chunk5FUZZQ4RParam291},0`,
      ].join(" "),
    "createOuterCylinderPathD",
  ),
  chunk5FUZZQ4RValue31 = chunkAGHRB4JFN(
    (
      chunk5FUZZQ4RParam339,
      chunk5FUZZQ4RParam340,
      chunk5FUZZQ4RParam341,
      chunk5FUZZQ4RParam342,
      chunk5FUZZQ4RParam343,
      chunk5FUZZQ4RParam344,
    ) =>
      [
        `M${chunk5FUZZQ4RParam339 + chunk5FUZZQ4RParam341 / 2},${-chunk5FUZZQ4RParam342 / 2}`,
        `a${chunk5FUZZQ4RParam343},${chunk5FUZZQ4RParam344} 0,0,0 0,${chunk5FUZZQ4RParam342}`,
      ].join(" "),
    "createInnerCylinderPathD",
  );
async function chunk5FUZZQ4RHelper65(
  chunk5FUZZQ4RParam28,
  chunk5FUZZQ4RParam29,
) {
  let { labelStyles, nodeStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam29);
  chunk5FUZZQ4RParam29.labelStyle = labelStyles;
  let chunk5FUZZQ4RValue260 = chunk5FUZZQ4RParam29.padding ?? 0,
    chunk5FUZZQ4RValue261 =
      chunk5FUZZQ4RParam29.look === "neo" ? 12 : chunk5FUZZQ4RValue260 / 2;
  if (chunk5FUZZQ4RParam29.width || chunk5FUZZQ4RParam29.height) {
    let chunk5FUZZQ4RValue1118 = chunk5FUZZQ4RParam29.height ?? 0;
    chunk5FUZZQ4RParam29.height =
      (chunk5FUZZQ4RParam29.height ?? 0) - chunk5FUZZQ4RValue261;
    chunk5FUZZQ4RParam29.height < 5 && (chunk5FUZZQ4RParam29.height = 5);
    let chunk5FUZZQ4RValue1119 =
      chunk5FUZZQ4RValue1118 / 2 / (2.5 + chunk5FUZZQ4RValue1118 / 50);
    chunk5FUZZQ4RParam29.width =
      (chunk5FUZZQ4RParam29.width ?? 0) -
      chunk5FUZZQ4RValue261 -
      chunk5FUZZQ4RValue1119 * 3;
    chunk5FUZZQ4RParam29.width < 10 && (chunk5FUZZQ4RParam29.width = 10);
  }
  let { shapeSvg, bbox, label } = await chunk5FUZZQ4RS(
      chunk5FUZZQ4RParam28,
      chunk5FUZZQ4RParam29,
      chunk5FUZZQ4RValue2(chunk5FUZZQ4RParam29),
    ),
    chunk5FUZZQ4RValue262 =
      (chunk5FUZZQ4RParam29.height
        ? chunk5FUZZQ4RParam29.height
        : bbox.height) + chunk5FUZZQ4RValue261,
    chunk5FUZZQ4RValue263 = chunk5FUZZQ4RValue262 / 2,
    chunk5FUZZQ4RValue264 =
      chunk5FUZZQ4RValue263 / (2.5 + chunk5FUZZQ4RValue262 / 50),
    chunk5FUZZQ4RValue265 =
      (chunk5FUZZQ4RParam29.width ? chunk5FUZZQ4RParam29.width : bbox.width) +
      chunk5FUZZQ4RValue264 +
      chunk5FUZZQ4RValue261,
    { cssStyles } = chunk5FUZZQ4RParam29,
    chunk5FUZZQ4RValue266;
  if (chunk5FUZZQ4RParam29.look === "handDrawn") {
    let chunk5FUZZQ4RValue1011 = rough.svg(shapeSvg),
      chunk5FUZZQ4RValue1012 = chunk5FUZZQ4RValue30(
        0,
        0,
        chunk5FUZZQ4RValue265,
        chunk5FUZZQ4RValue262,
        chunk5FUZZQ4RValue264,
        chunk5FUZZQ4RValue263,
      ),
      chunk5FUZZQ4RValue1013 = chunk5FUZZQ4RValue31(
        0,
        0,
        chunk5FUZZQ4RValue265,
        chunk5FUZZQ4RValue262,
        chunk5FUZZQ4RValue264,
        chunk5FUZZQ4RValue263,
      ),
      chunk5FUZZQ4RValue1014 = chunk5FUZZQ4RValue1011.path(
        chunk5FUZZQ4RValue1012,
        chunkX2U36JSPN(chunk5FUZZQ4RParam29, {}),
      ),
      chunk5FUZZQ4RValue1015 = chunk5FUZZQ4RValue1011.path(
        chunk5FUZZQ4RValue1013,
        chunkX2U36JSPN(chunk5FUZZQ4RParam29, {
          fill: "none",
        }),
      );
    chunk5FUZZQ4RValue266 = shapeSvg.insert(
      () => chunk5FUZZQ4RValue1015,
      ":first-child",
    );
    chunk5FUZZQ4RValue266 = shapeSvg.insert(
      () => chunk5FUZZQ4RValue1014,
      ":first-child",
    );
    chunk5FUZZQ4RValue266.attr("class", "basic label-container");
    cssStyles && chunk5FUZZQ4RValue266.attr("style", cssStyles);
  } else {
    let chunk5FUZZQ4RValue996 = chunk5FUZZQ4RValue29(
      0,
      0,
      chunk5FUZZQ4RValue265,
      chunk5FUZZQ4RValue262,
      chunk5FUZZQ4RValue264,
      chunk5FUZZQ4RValue263,
    );
    chunk5FUZZQ4RValue266 = shapeSvg
      .insert("path", ":first-child")
      .attr("d", chunk5FUZZQ4RValue996)
      .attr("class", "basic label-container")
      .attr("style", chunk5PVQY5BWF(cssStyles))
      .attr("style", nodeStyles);
    chunk5FUZZQ4RValue266.attr("class", "basic label-container outer-path");
    cssStyles &&
      chunk5FUZZQ4RValue266.selectAll("path").attr("style", cssStyles);
    nodeStyles &&
      chunk5FUZZQ4RValue266.selectAll("path").attr("style", nodeStyles);
  }
  return (
    chunk5FUZZQ4RValue266.attr("label-offset-x", chunk5FUZZQ4RValue264),
    chunk5FUZZQ4RValue266.attr(
      "transform",
      `translate(${-chunk5FUZZQ4RValue265 / 2}, ${chunk5FUZZQ4RValue262 / 2} )`,
    ),
    label.attr(
      "transform",
      `translate(${-(bbox.width / 2) - chunk5FUZZQ4RValue264 - (bbox.x - (bbox.left ?? 0))}, ${-(bbox.height / 2) - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam29, chunk5FUZZQ4RValue266),
    (chunk5FUZZQ4RParam29.intersect = function (chunk5FUZZQ4RParam190) {
      let chunk5FUZZQ4RValue926 = chunk5FUZZQ4RValue12.rect(
          chunk5FUZZQ4RParam29,
          chunk5FUZZQ4RParam190,
        ),
        chunk5FUZZQ4RValue927 =
          chunk5FUZZQ4RValue926.y - (chunk5FUZZQ4RParam29.y ?? 0);
      if (
        chunk5FUZZQ4RValue263 != 0 &&
        (Math.abs(chunk5FUZZQ4RValue927) <
          (chunk5FUZZQ4RParam29.height ?? 0) / 2 ||
          (Math.abs(chunk5FUZZQ4RValue927) ==
            (chunk5FUZZQ4RParam29.height ?? 0) / 2 &&
            Math.abs(chunk5FUZZQ4RValue926.x - (chunk5FUZZQ4RParam29.x ?? 0)) >
              (chunk5FUZZQ4RParam29.width ?? 0) / 2 - chunk5FUZZQ4RValue264))
      ) {
        let chunk5FUZZQ4RValue1131 =
          chunk5FUZZQ4RValue264 *
          chunk5FUZZQ4RValue264 *
          (1 -
            (chunk5FUZZQ4RValue927 * chunk5FUZZQ4RValue927) /
              (chunk5FUZZQ4RValue263 * chunk5FUZZQ4RValue263));
        chunk5FUZZQ4RValue1131 != 0 &&
          (chunk5FUZZQ4RValue1131 = Math.sqrt(
            Math.abs(chunk5FUZZQ4RValue1131),
          ));
        chunk5FUZZQ4RValue1131 = chunk5FUZZQ4RValue264 - chunk5FUZZQ4RValue1131;
        chunk5FUZZQ4RParam190.x - (chunk5FUZZQ4RParam29.x ?? 0) > 0 &&
          (chunk5FUZZQ4RValue1131 = -chunk5FUZZQ4RValue1131);
        chunk5FUZZQ4RValue926.x += chunk5FUZZQ4RValue1131;
      }
      return chunk5FUZZQ4RValue926;
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper65, "tiltedCylinder");
async function chunk5FUZZQ4RHelper66(
  chunk5FUZZQ4RParam141,
  chunk5FUZZQ4RParam142,
) {
  let { labelStyles, nodeStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam142);
  chunk5FUZZQ4RParam142.labelStyle = labelStyles;
  let chunk5FUZZQ4RValue798 = chunk5FUZZQ4RParam142.padding ?? 0,
    chunk5FUZZQ4RValue799 = (chunk5FUZZQ4RParam142.look, chunk5FUZZQ4RValue798),
    chunk5FUZZQ4RValue800 =
      chunk5FUZZQ4RParam142.look === "neo"
        ? chunk5FUZZQ4RValue798 * 2
        : chunk5FUZZQ4RValue798,
    { shapeSvg, bbox } = await chunk5FUZZQ4RS(
      chunk5FUZZQ4RParam141,
      chunk5FUZZQ4RParam142,
      chunk5FUZZQ4RValue2(chunk5FUZZQ4RParam142),
    ),
    chunk5FUZZQ4RValue801 =
      (chunk5FUZZQ4RParam142?.height ?? bbox.height) + chunk5FUZZQ4RValue799,
    chunk5FUZZQ4RValue802 =
      (chunk5FUZZQ4RParam142?.width ?? bbox.width) + chunk5FUZZQ4RValue800,
    chunk5FUZZQ4RValue803 = [
      {
        x: (-3 * chunk5FUZZQ4RValue801) / 6,
        y: 0,
      },
      {
        x: chunk5FUZZQ4RValue802 + (3 * chunk5FUZZQ4RValue801) / 6,
        y: 0,
      },
      {
        x: chunk5FUZZQ4RValue802,
        y: -chunk5FUZZQ4RValue801,
      },
      {
        x: 0,
        y: -chunk5FUZZQ4RValue801,
      },
    ],
    chunk5FUZZQ4RValue804,
    { cssStyles } = chunk5FUZZQ4RParam142;
  if (chunk5FUZZQ4RParam142.look === "handDrawn") {
    let chunk5FUZZQ4RValue1110 = rough.svg(shapeSvg),
      chunk5FUZZQ4RValue1111 = chunkX2U36JSPN(chunk5FUZZQ4RParam142, {}),
      chunk5FUZZQ4RValue1112 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RValue803),
      chunk5FUZZQ4RValue1113 = chunk5FUZZQ4RValue1110.path(
        chunk5FUZZQ4RValue1112,
        chunk5FUZZQ4RValue1111,
      );
    chunk5FUZZQ4RValue804 = shapeSvg
      .insert(() => chunk5FUZZQ4RValue1113, ":first-child")
      .attr(
        "transform",
        `translate(${-chunk5FUZZQ4RValue802 / 2}, ${chunk5FUZZQ4RValue801 / 2})`,
      );
    cssStyles && chunk5FUZZQ4RValue804.attr("style", cssStyles);
  } else
    chunk5FUZZQ4RValue804 = chunk5FUZZQ4RHelper15(
      shapeSvg,
      chunk5FUZZQ4RValue802,
      chunk5FUZZQ4RValue801,
      chunk5FUZZQ4RValue803,
    );
  return (
    nodeStyles && chunk5FUZZQ4RValue804.attr("style", nodeStyles),
    (chunk5FUZZQ4RParam142.width = chunk5FUZZQ4RValue802),
    (chunk5FUZZQ4RParam142.height = chunk5FUZZQ4RValue801),
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam142, chunk5FUZZQ4RValue804),
    (chunk5FUZZQ4RParam142.intersect = function (chunk5FUZZQ4RParam378) {
      return chunk5FUZZQ4RValue12.polygon(
        chunk5FUZZQ4RParam142,
        chunk5FUZZQ4RValue803,
        chunk5FUZZQ4RParam378,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper66, "trapezoid");
async function chunk5FUZZQ4RHelper67(
  chunk5FUZZQ4RParam89,
  chunk5FUZZQ4RParam90,
) {
  let { labelStyles, nodeStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam90);
  chunk5FUZZQ4RParam90.labelStyle = labelStyles;
  let chunk5FUZZQ4RValue626 = chunk5FUZZQ4RParam90.padding ?? 0,
    chunk5FUZZQ4RValue627 =
      chunk5FUZZQ4RParam90.look === "neo" ? 16 : chunk5FUZZQ4RValue626,
    chunk5FUZZQ4RValue628 =
      chunk5FUZZQ4RParam90.look === "neo" ? 12 : chunk5FUZZQ4RValue626;
  (chunk5FUZZQ4RParam90.width || chunk5FUZZQ4RParam90.height) &&
    ((chunk5FUZZQ4RParam90.height =
      (chunk5FUZZQ4RParam90.height ?? 0) - chunk5FUZZQ4RValue628 * 2),
    chunk5FUZZQ4RParam90.height < 5 && (chunk5FUZZQ4RParam90.height = 5),
    (chunk5FUZZQ4RParam90.width =
      (chunk5FUZZQ4RParam90.width ?? 0) - chunk5FUZZQ4RValue627 * 2),
    chunk5FUZZQ4RParam90.width < 15 && (chunk5FUZZQ4RParam90.width = 15));
  let { shapeSvg, bbox } = await chunk5FUZZQ4RS(
      chunk5FUZZQ4RParam89,
      chunk5FUZZQ4RParam90,
      chunk5FUZZQ4RValue2(chunk5FUZZQ4RParam90),
    ),
    chunk5FUZZQ4RValue629 =
      (chunk5FUZZQ4RParam90?.width ? chunk5FUZZQ4RParam90?.width : bbox.width) +
      chunk5FUZZQ4RValue627 * 2,
    chunk5FUZZQ4RValue630 =
      (chunk5FUZZQ4RParam90?.height
        ? chunk5FUZZQ4RParam90?.height
        : bbox.height) +
      chunk5FUZZQ4RValue628 * 2,
    { cssStyles } = chunk5FUZZQ4RParam90,
    chunk5FUZZQ4RValue631 = rough.svg(shapeSvg),
    chunk5FUZZQ4RValue632 = chunkX2U36JSPN(chunk5FUZZQ4RParam90, {});
  chunk5FUZZQ4RParam90.look !== "handDrawn" &&
    ((chunk5FUZZQ4RValue632.roughness = 0),
    (chunk5FUZZQ4RValue632.fillStyle = "solid"));
  let chunk5FUZZQ4RValue633 = [
      {
        x: (-chunk5FUZZQ4RValue629 / 2) * 0.8,
        y: -chunk5FUZZQ4RValue630 / 2,
      },
      {
        x: (chunk5FUZZQ4RValue629 / 2) * 0.8,
        y: -chunk5FUZZQ4RValue630 / 2,
      },
      {
        x: chunk5FUZZQ4RValue629 / 2,
        y: (-chunk5FUZZQ4RValue630 / 2) * 0.6,
      },
      {
        x: chunk5FUZZQ4RValue629 / 2,
        y: chunk5FUZZQ4RValue630 / 2,
      },
      {
        x: -chunk5FUZZQ4RValue629 / 2,
        y: chunk5FUZZQ4RValue630 / 2,
      },
      {
        x: -chunk5FUZZQ4RValue629 / 2,
        y: (-chunk5FUZZQ4RValue630 / 2) * 0.6,
      },
    ],
    chunk5FUZZQ4RValue634 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RValue633),
    chunk5FUZZQ4RValue635 = chunk5FUZZQ4RValue631.path(
      chunk5FUZZQ4RValue634,
      chunk5FUZZQ4RValue632,
    ),
    chunk5FUZZQ4RValue636 = shapeSvg.insert(
      () => chunk5FUZZQ4RValue635,
      ":first-child",
    );
  return (
    chunk5FUZZQ4RValue636.attr("class", "basic label-container outer-path"),
    cssStyles &&
      chunk5FUZZQ4RParam90.look !== "handDrawn" &&
      chunk5FUZZQ4RValue636.selectChildren("path").attr("style", cssStyles),
    nodeStyles &&
      chunk5FUZZQ4RParam90.look !== "handDrawn" &&
      chunk5FUZZQ4RValue636.selectChildren("path").attr("style", nodeStyles),
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam90, chunk5FUZZQ4RValue636),
    (chunk5FUZZQ4RParam90.intersect = function (chunk5FUZZQ4RParam379) {
      return chunk5FUZZQ4RValue12.polygon(
        chunk5FUZZQ4RParam90,
        chunk5FUZZQ4RValue633,
        chunk5FUZZQ4RParam379,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper67, "trapezoidalPentagon");
async function chunk5FUZZQ4RHelper68(
  chunk5FUZZQ4RParam66,
  chunk5FUZZQ4RParam67,
) {
  let { labelStyles, nodeStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam67);
  chunk5FUZZQ4RParam67.labelStyle = labelStyles;
  let chunk5FUZZQ4RValue488 = chunk5FUZZQ4RParam67.padding ?? 0,
    chunk5FUZZQ4RValue489 =
      chunk5FUZZQ4RParam67.look === "neo"
        ? chunk5FUZZQ4RValue488 * 2
        : chunk5FUZZQ4RValue488;
  (chunk5FUZZQ4RParam67.width || chunk5FUZZQ4RParam67.height) &&
    ((chunk5FUZZQ4RParam67.width =
      ((chunk5FUZZQ4RParam67?.width ?? 0) - chunk5FUZZQ4RValue489) / 2),
    chunk5FUZZQ4RParam67.width < 10 && (chunk5FUZZQ4RParam67.width = 10),
    (chunk5FUZZQ4RParam67.height = chunk5FUZZQ4RParam67?.height ?? 0),
    chunk5FUZZQ4RParam67.height < 10 && (chunk5FUZZQ4RParam67.height = 10));
  let { shapeSvg, bbox, label } = await chunk5FUZZQ4RS(
      chunk5FUZZQ4RParam66,
      chunk5FUZZQ4RParam67,
      chunk5FUZZQ4RValue2(chunk5FUZZQ4RParam67),
    ),
    chunk5FUZZQ4RValue490 = chunkICPOFSXXZ(
      _chunkICPOFSXXP().flowchart?.htmlLabels,
    ),
    chunk5FUZZQ4RValue491 =
      (chunk5FUZZQ4RParam67?.width ? chunk5FUZZQ4RParam67?.width : bbox.width) +
      chunk5FUZZQ4RValue489,
    chunk5FUZZQ4RValue492 = chunk5FUZZQ4RParam67?.height
      ? chunk5FUZZQ4RParam67?.height
      : chunk5FUZZQ4RValue491 + bbox.height,
    chunk5FUZZQ4RValue493 = chunk5FUZZQ4RValue492,
    chunk5FUZZQ4RValue494 = [
      {
        x: 0,
        y: 0,
      },
      {
        x: chunk5FUZZQ4RValue493,
        y: 0,
      },
      {
        x: chunk5FUZZQ4RValue493 / 2,
        y: -chunk5FUZZQ4RValue492,
      },
    ],
    { cssStyles } = chunk5FUZZQ4RParam67,
    chunk5FUZZQ4RValue495 = rough.svg(shapeSvg),
    chunk5FUZZQ4RValue496 = chunkX2U36JSPN(chunk5FUZZQ4RParam67, {});
  chunk5FUZZQ4RParam67.look !== "handDrawn" &&
    ((chunk5FUZZQ4RValue496.roughness = 0),
    (chunk5FUZZQ4RValue496.fillStyle = "solid"));
  let chunk5FUZZQ4RValue497 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RValue494),
    chunk5FUZZQ4RValue498 = chunk5FUZZQ4RValue495.path(
      chunk5FUZZQ4RValue497,
      chunk5FUZZQ4RValue496,
    ),
    chunk5FUZZQ4RValue499 = shapeSvg
      .insert(() => chunk5FUZZQ4RValue498, ":first-child")
      .attr(
        "transform",
        `translate(${-chunk5FUZZQ4RValue492 / 2}, ${chunk5FUZZQ4RValue492 / 2})`,
      )
      .attr("class", "outer-path");
  return (
    cssStyles &&
      chunk5FUZZQ4RParam67.look !== "handDrawn" &&
      chunk5FUZZQ4RValue499.selectChildren("path").attr("style", cssStyles),
    nodeStyles &&
      chunk5FUZZQ4RParam67.look !== "handDrawn" &&
      chunk5FUZZQ4RValue499.selectChildren("path").attr("style", nodeStyles),
    (chunk5FUZZQ4RParam67.width = chunk5FUZZQ4RValue491),
    (chunk5FUZZQ4RParam67.height = chunk5FUZZQ4RValue492),
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam67, chunk5FUZZQ4RValue499),
    label.attr(
      "transform",
      `translate(${-bbox.width / 2 - (bbox.x - (bbox.left ?? 0))}, ${chunk5FUZZQ4RValue492 / 2 - (bbox.height + (chunk5FUZZQ4RParam67.padding ?? 0) / (chunk5FUZZQ4RValue490 ? 2 : 1) - (bbox.y - (bbox.top ?? 0)))})`,
    ),
    (chunk5FUZZQ4RParam67.intersect = function (chunk5FUZZQ4RParam326) {
      return (
        chunkAGHRB4JFR.info(
          "Triangle intersect",
          chunk5FUZZQ4RParam67,
          chunk5FUZZQ4RValue494,
          chunk5FUZZQ4RParam326,
        ),
        chunk5FUZZQ4RValue12.polygon(
          chunk5FUZZQ4RParam67,
          chunk5FUZZQ4RValue494,
          chunk5FUZZQ4RParam326,
        )
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper68, "triangle");
async function chunk5FUZZQ4RHelper69(
  chunk5FUZZQ4RParam52,
  chunk5FUZZQ4RParam53,
) {
  let { labelStyles, nodeStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam53);
  chunk5FUZZQ4RParam53.labelStyle = labelStyles;
  let chunk5FUZZQ4RValue421 = chunk5FUZZQ4RParam53.padding ?? 0,
    chunk5FUZZQ4RValue422 =
      chunk5FUZZQ4RParam53.look === "neo" ? 16 : chunk5FUZZQ4RValue421,
    chunk5FUZZQ4RValue423 =
      chunk5FUZZQ4RParam53.look === "neo" ? 12 : chunk5FUZZQ4RValue421,
    chunk5FUZZQ4RValue424 = true;
  (chunk5FUZZQ4RParam53.width || chunk5FUZZQ4RParam53.height) &&
    ((chunk5FUZZQ4RValue424 = false),
    (chunk5FUZZQ4RParam53.width =
      (chunk5FUZZQ4RParam53?.width ?? 0) - chunk5FUZZQ4RValue422 * 2),
    chunk5FUZZQ4RParam53.width < 10 && (chunk5FUZZQ4RParam53.width = 10),
    (chunk5FUZZQ4RParam53.height =
      (chunk5FUZZQ4RParam53?.height ?? 0) - chunk5FUZZQ4RValue423 * 2),
    chunk5FUZZQ4RParam53.height < 10 && (chunk5FUZZQ4RParam53.height = 10));
  let { shapeSvg, bbox, label } = await chunk5FUZZQ4RS(
      chunk5FUZZQ4RParam52,
      chunk5FUZZQ4RParam53,
      chunk5FUZZQ4RValue2(chunk5FUZZQ4RParam53),
    ),
    chunk5FUZZQ4RValue425 =
      (chunk5FUZZQ4RParam53?.width ? chunk5FUZZQ4RParam53?.width : bbox.width) +
      (chunk5FUZZQ4RValue422 ?? 0) * 2,
    chunk5FUZZQ4RValue426 =
      (chunk5FUZZQ4RParam53?.height
        ? chunk5FUZZQ4RParam53?.height
        : bbox.height) +
      (chunk5FUZZQ4RValue423 ?? 0) * 2,
    chunk5FUZZQ4RValue427 =
      chunk5FUZZQ4RParam53.look === "neo"
        ? chunk5FUZZQ4RValue426 / 4
        : chunk5FUZZQ4RValue426 / 8,
    chunk5FUZZQ4RValue428 =
      chunk5FUZZQ4RValue426 +
      (chunk5FUZZQ4RValue424 ? chunk5FUZZQ4RValue427 : -chunk5FUZZQ4RValue427),
    { cssStyles } = chunk5FUZZQ4RParam53,
    chunk5FUZZQ4RValue429 = 14 - chunk5FUZZQ4RValue425,
    chunk5FUZZQ4RValue430 =
      chunk5FUZZQ4RValue429 > 0 ? chunk5FUZZQ4RValue429 / 2 : 0,
    chunk5FUZZQ4RValue431 = rough.svg(shapeSvg),
    chunk5FUZZQ4RValue432 = chunkX2U36JSPN(chunk5FUZZQ4RParam53, {});
  chunk5FUZZQ4RParam53.look !== "handDrawn" &&
    ((chunk5FUZZQ4RValue432.roughness = 0),
    (chunk5FUZZQ4RValue432.fillStyle = "solid"));
  let chunk5FUZZQ4RValue433 = [
      {
        x: -chunk5FUZZQ4RValue425 / 2 - chunk5FUZZQ4RValue430,
        y: chunk5FUZZQ4RValue428 / 2,
      },
      ...chunk5FUZZQ4RHelper2(
        -chunk5FUZZQ4RValue425 / 2 - chunk5FUZZQ4RValue430,
        chunk5FUZZQ4RValue428 / 2,
        chunk5FUZZQ4RValue425 / 2 + chunk5FUZZQ4RValue430,
        chunk5FUZZQ4RValue428 / 2,
        chunk5FUZZQ4RValue427,
        0.8,
      ),
      {
        x: chunk5FUZZQ4RValue425 / 2 + chunk5FUZZQ4RValue430,
        y: -chunk5FUZZQ4RValue428 / 2,
      },
      {
        x: -chunk5FUZZQ4RValue425 / 2 - chunk5FUZZQ4RValue430,
        y: -chunk5FUZZQ4RValue428 / 2,
      },
    ],
    chunk5FUZZQ4RValue434 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RValue433),
    chunk5FUZZQ4RValue435 = chunk5FUZZQ4RValue431.path(
      chunk5FUZZQ4RValue434,
      chunk5FUZZQ4RValue432,
    ),
    chunk5FUZZQ4RValue436 = shapeSvg.insert(
      () => chunk5FUZZQ4RValue435,
      ":first-child",
    );
  return (
    chunk5FUZZQ4RValue436.attr("class", "basic label-container outer-path"),
    cssStyles &&
      chunk5FUZZQ4RParam53.look !== "handDrawn" &&
      chunk5FUZZQ4RValue436.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunk5FUZZQ4RParam53.look !== "handDrawn" &&
      chunk5FUZZQ4RValue436.selectAll("path").attr("style", nodeStyles),
    chunk5FUZZQ4RValue436.attr(
      "transform",
      `translate(0,${-chunk5FUZZQ4RValue427 / 2})`,
    ),
    label.attr(
      "transform",
      `translate(${-chunk5FUZZQ4RValue425 / 2 + (chunk5FUZZQ4RParam53.padding ?? 0) - (bbox.x - (bbox.left ?? 0))},${-chunk5FUZZQ4RValue426 / 2 + (chunk5FUZZQ4RParam53.padding ?? 0) - chunk5FUZZQ4RValue427 - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam53, chunk5FUZZQ4RValue436),
    (chunk5FUZZQ4RParam53.intersect = function (chunk5FUZZQ4RParam380) {
      return chunk5FUZZQ4RValue12.polygon(
        chunk5FUZZQ4RParam53,
        chunk5FUZZQ4RValue433,
        chunk5FUZZQ4RParam380,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper69, "waveEdgedRectangle");
async function chunk5FUZZQ4RHelper70(
  chunk5FUZZQ4RParam78,
  chunk5FUZZQ4RParam79,
) {
  let { labelStyles, nodeStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam79);
  chunk5FUZZQ4RParam79.labelStyle = labelStyles;
  let chunk5FUZZQ4RValue552 = chunk5FUZZQ4RParam79.padding ?? 0,
    chunk5FUZZQ4RValue553 =
      chunk5FUZZQ4RParam79.look === "neo" ? 16 : chunk5FUZZQ4RValue552,
    chunk5FUZZQ4RValue554 =
      chunk5FUZZQ4RParam79.look === "neo" ? 20 : chunk5FUZZQ4RValue552;
  if (chunk5FUZZQ4RParam79.width || chunk5FUZZQ4RParam79.height) {
    chunk5FUZZQ4RParam79.width = chunk5FUZZQ4RParam79?.width ?? 0;
    chunk5FUZZQ4RParam79.width < 20 && (chunk5FUZZQ4RParam79.width = 20);
    chunk5FUZZQ4RParam79.height = chunk5FUZZQ4RParam79?.height ?? 0;
    chunk5FUZZQ4RParam79.height < 10 && (chunk5FUZZQ4RParam79.height = 10);
    let chunk5FUZZQ4RValue1060 = Math.min(
      chunk5FUZZQ4RParam79.height * 0.2,
      chunk5FUZZQ4RParam79.height / 4,
    );
    chunk5FUZZQ4RParam79.height = Math.ceil(
      chunk5FUZZQ4RParam79.height -
        chunk5FUZZQ4RValue554 -
        2.2222222222222223 * chunk5FUZZQ4RValue1060,
    );
    chunk5FUZZQ4RParam79.width -= chunk5FUZZQ4RValue553 * 2;
  }
  let { shapeSvg, bbox } = await chunk5FUZZQ4RS(
      chunk5FUZZQ4RParam78,
      chunk5FUZZQ4RParam79,
      chunk5FUZZQ4RValue2(chunk5FUZZQ4RParam79),
    ),
    chunk5FUZZQ4RValue555 =
      (chunk5FUZZQ4RParam79?.width ? chunk5FUZZQ4RParam79?.width : bbox.width) +
      chunk5FUZZQ4RValue553 * 2,
    chunk5FUZZQ4RValue556 =
      (chunk5FUZZQ4RParam79?.height
        ? chunk5FUZZQ4RParam79?.height
        : bbox.height) + chunk5FUZZQ4RValue554,
    chunk5FUZZQ4RValue557 = chunk5FUZZQ4RValue556 / 8,
    chunk5FUZZQ4RValue558 = chunk5FUZZQ4RValue556 + chunk5FUZZQ4RValue557 * 2,
    { cssStyles } = chunk5FUZZQ4RParam79,
    chunk5FUZZQ4RValue559 = rough.svg(shapeSvg),
    chunk5FUZZQ4RValue560 = chunkX2U36JSPN(chunk5FUZZQ4RParam79, {});
  chunk5FUZZQ4RParam79.look !== "handDrawn" &&
    ((chunk5FUZZQ4RValue560.roughness = 0),
    (chunk5FUZZQ4RValue560.fillStyle = "solid"));
  let chunk5FUZZQ4RValue561 = [
      {
        x: -chunk5FUZZQ4RValue555 / 2,
        y: chunk5FUZZQ4RValue558 / 2,
      },
      ...chunk5FUZZQ4RHelper2(
        -chunk5FUZZQ4RValue555 / 2,
        chunk5FUZZQ4RValue558 / 2,
        chunk5FUZZQ4RValue555 / 2,
        chunk5FUZZQ4RValue558 / 2,
        chunk5FUZZQ4RValue557,
        1,
      ),
      {
        x: chunk5FUZZQ4RValue555 / 2,
        y: -chunk5FUZZQ4RValue558 / 2,
      },
      ...chunk5FUZZQ4RHelper2(
        chunk5FUZZQ4RValue555 / 2,
        -chunk5FUZZQ4RValue558 / 2,
        -chunk5FUZZQ4RValue555 / 2,
        -chunk5FUZZQ4RValue558 / 2,
        chunk5FUZZQ4RValue557,
        -1,
      ),
    ],
    chunk5FUZZQ4RValue562 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RValue561),
    chunk5FUZZQ4RValue563 = chunk5FUZZQ4RValue559.path(
      chunk5FUZZQ4RValue562,
      chunk5FUZZQ4RValue560,
    ),
    chunk5FUZZQ4RValue564 = shapeSvg.insert(
      () => chunk5FUZZQ4RValue563,
      ":first-child",
    );
  return (
    chunk5FUZZQ4RValue564.attr("class", "basic label-container"),
    cssStyles &&
      chunk5FUZZQ4RParam79.look !== "handDrawn" &&
      chunk5FUZZQ4RValue564.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunk5FUZZQ4RParam79.look !== "handDrawn" &&
      chunk5FUZZQ4RValue564.selectAll("path").attr("style", nodeStyles),
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam79, chunk5FUZZQ4RValue564),
    (chunk5FUZZQ4RParam79.intersect = function (chunk5FUZZQ4RParam381) {
      return chunk5FUZZQ4RValue12.polygon(
        chunk5FUZZQ4RParam79,
        chunk5FUZZQ4RValue561,
        chunk5FUZZQ4RParam381,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper70, "waveRectangle");
async function chunk5FUZZQ4RHelper71(
  chunk5FUZZQ4RParam50,
  chunk5FUZZQ4RParam51,
) {
  let { labelStyles, nodeStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam51);
  chunk5FUZZQ4RParam51.labelStyle = labelStyles;
  let chunk5FUZZQ4RValue407 =
      chunk5FUZZQ4RParam51.look === "neo"
        ? 16
        : (chunk5FUZZQ4RParam51.padding ?? 0),
    chunk5FUZZQ4RValue408 =
      chunk5FUZZQ4RParam51.look === "neo"
        ? 12
        : (chunk5FUZZQ4RParam51.padding ?? 0);
  (chunk5FUZZQ4RParam51.width || chunk5FUZZQ4RParam51.height) &&
    ((chunk5FUZZQ4RParam51.width = Math.max(
      (chunk5FUZZQ4RParam51?.width ?? 0) - chunk5FUZZQ4RValue407 * 2 - 10,
      10,
    )),
    (chunk5FUZZQ4RParam51.height = Math.max(
      (chunk5FUZZQ4RParam51?.height ?? 0) - chunk5FUZZQ4RValue408 * 2 - 10,
      10,
    )));
  let { shapeSvg, bbox, label } = await chunk5FUZZQ4RS(
      chunk5FUZZQ4RParam50,
      chunk5FUZZQ4RParam51,
      chunk5FUZZQ4RValue2(chunk5FUZZQ4RParam51),
    ),
    chunk5FUZZQ4RValue409 =
      (chunk5FUZZQ4RParam51?.width ? chunk5FUZZQ4RParam51?.width : bbox.width) +
      chunk5FUZZQ4RValue407 * 2 +
      10,
    chunk5FUZZQ4RValue410 =
      (chunk5FUZZQ4RParam51?.height
        ? chunk5FUZZQ4RParam51?.height
        : bbox.height) +
      chunk5FUZZQ4RValue408 * 2 +
      10,
    chunk5FUZZQ4RValue411 = chunk5FUZZQ4RValue409 - 10,
    chunk5FUZZQ4RValue412 = chunk5FUZZQ4RValue410 - 10,
    chunk5FUZZQ4RValue413 = -chunk5FUZZQ4RValue411 / 2,
    chunk5FUZZQ4RValue414 = -chunk5FUZZQ4RValue412 / 2,
    { cssStyles } = chunk5FUZZQ4RParam51,
    chunk5FUZZQ4RValue415 = rough.svg(shapeSvg),
    chunk5FUZZQ4RValue416 = chunkX2U36JSPN(chunk5FUZZQ4RParam51, {}),
    chunk5FUZZQ4RValue417 = [
      {
        x: chunk5FUZZQ4RValue413 - 10,
        y: chunk5FUZZQ4RValue414 - 10,
      },
      {
        x: chunk5FUZZQ4RValue413 - 10,
        y: chunk5FUZZQ4RValue414 + chunk5FUZZQ4RValue412,
      },
      {
        x: chunk5FUZZQ4RValue413 + chunk5FUZZQ4RValue411,
        y: chunk5FUZZQ4RValue414 + chunk5FUZZQ4RValue412,
      },
      {
        x: chunk5FUZZQ4RValue413 + chunk5FUZZQ4RValue411,
        y: chunk5FUZZQ4RValue414 - 10,
      },
    ],
    chunk5FUZZQ4RValue418 = `M${chunk5FUZZQ4RValue413 - 10},${chunk5FUZZQ4RValue414 - 10} L${chunk5FUZZQ4RValue413 + chunk5FUZZQ4RValue411},${chunk5FUZZQ4RValue414 - 10} L${chunk5FUZZQ4RValue413 + chunk5FUZZQ4RValue411},${chunk5FUZZQ4RValue414 + chunk5FUZZQ4RValue412} L${chunk5FUZZQ4RValue413 - 10},${chunk5FUZZQ4RValue414 + chunk5FUZZQ4RValue412} L${chunk5FUZZQ4RValue413 - 10},${chunk5FUZZQ4RValue414 - 10}
                M${chunk5FUZZQ4RValue413 - 10},${chunk5FUZZQ4RValue414} L${chunk5FUZZQ4RValue413 + chunk5FUZZQ4RValue411},${chunk5FUZZQ4RValue414}
                M${chunk5FUZZQ4RValue413},${chunk5FUZZQ4RValue414 - 10} L${chunk5FUZZQ4RValue413},${chunk5FUZZQ4RValue414 + chunk5FUZZQ4RValue412}`;
  chunk5FUZZQ4RParam51.look !== "handDrawn" &&
    ((chunk5FUZZQ4RValue416.roughness = 0),
    (chunk5FUZZQ4RValue416.fillStyle = "solid"));
  let chunk5FUZZQ4RValue419 = chunk5FUZZQ4RValue415.path(
      chunk5FUZZQ4RValue418,
      chunk5FUZZQ4RValue416,
    ),
    chunk5FUZZQ4RValue420 = shapeSvg.insert(
      () => chunk5FUZZQ4RValue419,
      ":first-child",
    );
  return (
    chunk5FUZZQ4RValue420.attr("transform", `translate(${5}, ${5})`),
    chunk5FUZZQ4RValue420.attr("class", "basic label-container outer-path"),
    cssStyles &&
      chunk5FUZZQ4RParam51.look !== "handDrawn" &&
      chunk5FUZZQ4RValue420.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunk5FUZZQ4RParam51.look !== "handDrawn" &&
      chunk5FUZZQ4RValue420.selectAll("path").attr("style", nodeStyles),
    label.attr(
      "transform",
      `translate(${-(bbox.width / 2) + 5 - (bbox.x - (bbox.left ?? 0))}, ${-(bbox.height / 2) + 5 - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam51, chunk5FUZZQ4RValue420),
    (chunk5FUZZQ4RParam51.intersect = function (chunk5FUZZQ4RParam382) {
      return chunk5FUZZQ4RValue12.polygon(
        chunk5FUZZQ4RParam51,
        chunk5FUZZQ4RValue417,
        chunk5FUZZQ4RParam382,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper71, "windowPane");
var chunk5FUZZQ4RValue37 = new Set(["redux-color", "redux-dark-color"]),
  chunk5FUZZQ4RValue38 = new Set([
    "redux",
    "redux-dark",
    "redux-color",
    "redux-dark-color",
  ]);
async function chunk5FUZZQ4RHelper72(chunk5FUZZQ4RParam1, chunk5FUZZQ4RParam2) {
  let chunk5FUZZQ4RValue43 = chunk5FUZZQ4RParam2;
  chunk5FUZZQ4RValue43.alias &&
    (chunk5FUZZQ4RParam2.label = chunk5FUZZQ4RValue43.alias);
  let { theme, themeVariables } = chunkICPOFSXXW(),
    { rowEven, rowOdd, nodeBorder, borderColorArray } = themeVariables;
  if (chunk5FUZZQ4RParam2.look === "handDrawn") {
    let { themeVariables: _themeVariables } = chunkICPOFSXXW(),
      { background } = _themeVariables;
    await chunk5FUZZQ4RHelper72(chunk5FUZZQ4RParam1, {
      ...chunk5FUZZQ4RParam2,
      id: chunk5FUZZQ4RParam2.id + "-background",
      domId:
        (chunk5FUZZQ4RParam2.domId || chunk5FUZZQ4RParam2.id) + "-background",
      look: "default",
      cssStyles: ["stroke: none", `fill: ${background}`],
    });
  }
  let chunk5FUZZQ4RValue44 = chunkICPOFSXXW();
  chunk5FUZZQ4RParam2.useHtmlLabels = chunk5FUZZQ4RValue44.htmlLabels;
  let chunk5FUZZQ4RValue45 = chunk5FUZZQ4RValue44.er?.diagramPadding ?? 10,
    chunk5FUZZQ4RValue46 = chunk5FUZZQ4RValue44.er?.entityPadding ?? 6,
    { cssStyles: chunk5FUZZQ4RValue47 } = chunk5FUZZQ4RParam2,
    { labelStyles, nodeStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam2);
  if (
    chunk5FUZZQ4RValue43.attributes.length === 0 &&
    chunk5FUZZQ4RParam2.label
  ) {
    let chunk5FUZZQ4RValue912 = {
      rx: 0,
      ry: 0,
      labelPaddingX: chunk5FUZZQ4RValue45,
      labelPaddingY: chunk5FUZZQ4RValue45 * 1.5,
      classes: "",
    };
    chunk5PVQY5BWL(chunk5FUZZQ4RParam2.label, chunk5FUZZQ4RValue44) +
      chunk5FUZZQ4RValue912.labelPaddingX * 2 <
      chunk5FUZZQ4RValue44.er.minEntityWidth &&
      (chunk5FUZZQ4RParam2.width = chunk5FUZZQ4RValue44.er.minEntityWidth);
    let chunk5FUZZQ4RValue913 = await chunk5FUZZQ4RHelper43(
      chunk5FUZZQ4RParam1,
      chunk5FUZZQ4RParam2,
      chunk5FUZZQ4RValue912,
    );
    if (theme != null && chunk5FUZZQ4RValue37.has(theme)) {
      let chunk5FUZZQ4RValue1210 = chunk5FUZZQ4RValue43.colorIndex ?? 0;
      chunk5FUZZQ4RValue913.attr(
        "data-color-id",
        `color-${chunk5FUZZQ4RValue1210 % borderColorArray.length}`,
      );
    }
    if (!chunkICPOFSXXZ(chunk5FUZZQ4RValue44.htmlLabels)) {
      let chunk5FUZZQ4RValue1178 = chunk5FUZZQ4RValue913.select("text"),
        chunk5FUZZQ4RValue1179 = chunk5FUZZQ4RValue1178.node()?.getBBox();
      chunk5FUZZQ4RValue1178.attr(
        "transform",
        `translate(${-chunk5FUZZQ4RValue1179.width / 2}, 0)`,
      );
    }
    return chunk5FUZZQ4RValue913;
  }
  chunk5FUZZQ4RValue44.htmlLabels ||
    ((chunk5FUZZQ4RValue45 *= 1.25), (chunk5FUZZQ4RValue46 *= 1.25));
  let chunk5FUZZQ4RValue48 = chunk5FUZZQ4RValue2(chunk5FUZZQ4RParam2);
  chunk5FUZZQ4RValue48 ||= "node default";
  let _chunk5FUZZQ4RS = chunk5FUZZQ4RParam1
      .insert("g")
      .attr("class", chunk5FUZZQ4RValue48)
      .attr("id", chunk5FUZZQ4RParam2.domId || chunk5FUZZQ4RParam2.id),
    chunk5FUZZQ4RValue49 = await chunk5FUZZQ4RHelper73(
      _chunk5FUZZQ4RS,
      chunk5FUZZQ4RParam2.label ?? "",
      chunk5FUZZQ4RValue44,
      0,
      0,
      ["name"],
      labelStyles,
    );
  chunk5FUZZQ4RValue49.height += chunk5FUZZQ4RValue46;
  let chunk5FUZZQ4RValue50 = 0,
    chunk5FUZZQ4RValue51 = [],
    chunk5FUZZQ4RValue52 = [],
    chunk5FUZZQ4RValue53 = 0,
    chunk5FUZZQ4RValue54 = 0,
    _chunk5FUZZQ4RR = 0,
    chunk5FUZZQ4RValue55 = 0,
    chunk5FUZZQ4RValue56 = true,
    chunk5FUZZQ4RValue57 = true;
  for (let chunk5FUZZQ4RValue914 of chunk5FUZZQ4RValue43.attributes) {
    let chunk5FUZZQ4RValue915 = await chunk5FUZZQ4RHelper73(
      _chunk5FUZZQ4RS,
      chunk5FUZZQ4RValue914.type,
      chunk5FUZZQ4RValue44,
      0,
      chunk5FUZZQ4RValue50,
      ["attribute-type"],
      labelStyles,
    );
    chunk5FUZZQ4RValue53 = Math.max(
      chunk5FUZZQ4RValue53,
      chunk5FUZZQ4RValue915.width + chunk5FUZZQ4RValue45,
    );
    let chunk5FUZZQ4RValue916 = await chunk5FUZZQ4RHelper73(
      _chunk5FUZZQ4RS,
      chunk5FUZZQ4RValue914.name,
      chunk5FUZZQ4RValue44,
      0,
      chunk5FUZZQ4RValue50,
      ["attribute-name"],
      labelStyles,
    );
    chunk5FUZZQ4RValue54 = Math.max(
      chunk5FUZZQ4RValue54,
      chunk5FUZZQ4RValue916.width + chunk5FUZZQ4RValue45,
    );
    let chunk5FUZZQ4RValue917 = await chunk5FUZZQ4RHelper73(
      _chunk5FUZZQ4RS,
      chunk5FUZZQ4RValue914.keys.join(),
      chunk5FUZZQ4RValue44,
      0,
      chunk5FUZZQ4RValue50,
      ["attribute-keys"],
      labelStyles,
    );
    _chunk5FUZZQ4RR = Math.max(
      _chunk5FUZZQ4RR,
      chunk5FUZZQ4RValue917.width + chunk5FUZZQ4RValue45,
    );
    let chunk5FUZZQ4RValue918 = await chunk5FUZZQ4RHelper73(
      _chunk5FUZZQ4RS,
      chunk5FUZZQ4RValue914.comment,
      chunk5FUZZQ4RValue44,
      0,
      chunk5FUZZQ4RValue50,
      ["attribute-comment"],
      labelStyles,
    );
    chunk5FUZZQ4RValue55 = Math.max(
      chunk5FUZZQ4RValue55,
      chunk5FUZZQ4RValue918.width + chunk5FUZZQ4RValue45,
    );
    let chunk5FUZZQ4RValue919 =
      Math.max(
        chunk5FUZZQ4RValue915.height,
        chunk5FUZZQ4RValue916.height,
        chunk5FUZZQ4RValue917.height,
        chunk5FUZZQ4RValue918.height,
      ) + chunk5FUZZQ4RValue46;
    chunk5FUZZQ4RValue52.push({
      yOffset: chunk5FUZZQ4RValue50,
      rowHeight: chunk5FUZZQ4RValue919,
    });
    chunk5FUZZQ4RValue50 += chunk5FUZZQ4RValue919;
  }
  let chunk5FUZZQ4RValue58 = 4;
  _chunk5FUZZQ4RR <= chunk5FUZZQ4RValue45 &&
    ((chunk5FUZZQ4RValue56 = false),
    (_chunk5FUZZQ4RR = 0),
    chunk5FUZZQ4RValue58--);
  chunk5FUZZQ4RValue55 <= chunk5FUZZQ4RValue45 &&
    ((chunk5FUZZQ4RValue57 = false),
    (chunk5FUZZQ4RValue55 = 0),
    chunk5FUZZQ4RValue58--);
  let _chunk5FUZZQ4RI = _chunk5FUZZQ4RS.node().getBBox();
  if (
    chunk5FUZZQ4RValue49.width +
      chunk5FUZZQ4RValue45 * 2 -
      (chunk5FUZZQ4RValue53 +
        chunk5FUZZQ4RValue54 +
        _chunk5FUZZQ4RR +
        chunk5FUZZQ4RValue55) >
    0
  ) {
    let chunk5FUZZQ4RValue1180 =
      chunk5FUZZQ4RValue49.width +
      chunk5FUZZQ4RValue45 * 2 -
      (chunk5FUZZQ4RValue53 +
        chunk5FUZZQ4RValue54 +
        _chunk5FUZZQ4RR +
        chunk5FUZZQ4RValue55);
    chunk5FUZZQ4RValue53 += chunk5FUZZQ4RValue1180 / chunk5FUZZQ4RValue58;
    chunk5FUZZQ4RValue54 += chunk5FUZZQ4RValue1180 / chunk5FUZZQ4RValue58;
    _chunk5FUZZQ4RR > 0 &&
      (_chunk5FUZZQ4RR += chunk5FUZZQ4RValue1180 / chunk5FUZZQ4RValue58);
    chunk5FUZZQ4RValue55 > 0 &&
      (chunk5FUZZQ4RValue55 += chunk5FUZZQ4RValue1180 / chunk5FUZZQ4RValue58);
  }
  let _chunk5FUZZQ4RT =
      chunk5FUZZQ4RValue53 +
      chunk5FUZZQ4RValue54 +
      _chunk5FUZZQ4RR +
      chunk5FUZZQ4RValue55,
    chunk5FUZZQ4RValue59 = rough.svg(_chunk5FUZZQ4RS),
    chunk5FUZZQ4RValue60 = chunkX2U36JSPN(chunk5FUZZQ4RParam2, {});
  chunk5FUZZQ4RParam2.look !== "handDrawn" &&
    ((chunk5FUZZQ4RValue60.roughness = 0),
    (chunk5FUZZQ4RValue60.fillStyle = "solid"));
  let chunk5FUZZQ4RValue61 = 0;
  chunk5FUZZQ4RValue52.length > 0 &&
    (chunk5FUZZQ4RValue61 = chunk5FUZZQ4RValue52.reduce(
      (accumulator, current) => accumulator + (current?.rowHeight ?? 0),
      0,
    ));
  let chunk5FUZZQ4RValue62 = Math.max(
      _chunk5FUZZQ4RI.width + chunk5FUZZQ4RValue45 * 2,
      chunk5FUZZQ4RParam2?.width || 0,
      _chunk5FUZZQ4RT,
    ),
    chunk5FUZZQ4RValue63 = Math.max(
      (chunk5FUZZQ4RValue61 ?? 0) + chunk5FUZZQ4RValue49.height,
      chunk5FUZZQ4RParam2?.height || 0,
    ),
    chunk5FUZZQ4RValue64 = -chunk5FUZZQ4RValue62 / 2,
    chunk5FUZZQ4RValue65 = -chunk5FUZZQ4RValue63 / 2;
  if (
    (_chunk5FUZZQ4RS
      .selectAll("g:not(:first-child)")
      .each(
        (
          chunk5FUZZQ4RParam177,
          chunk5FUZZQ4RParam178,
          chunk5FUZZQ4RParam179,
        ) => {
          let chunk5FUZZQ4RValue896 = Src(
              chunk5FUZZQ4RParam179[chunk5FUZZQ4RParam178],
            ),
            chunk5FUZZQ4RValue897 = chunk5FUZZQ4RValue896.attr("transform"),
            chunk5FUZZQ4RValue898 = 0,
            chunk5FUZZQ4RValue899 = 0;
          if (chunk5FUZZQ4RValue897) {
            let chunk5FUZZQ4RValue969 = RegExp(
              /translate\(([^,]+),([^)]+)\)/,
            ).exec(chunk5FUZZQ4RValue897);
            chunk5FUZZQ4RValue969 &&
              ((chunk5FUZZQ4RValue898 = parseFloat(chunk5FUZZQ4RValue969[1])),
              (chunk5FUZZQ4RValue899 = parseFloat(chunk5FUZZQ4RValue969[2])),
              chunk5FUZZQ4RValue896.attr("class").includes("attribute-name")
                ? (chunk5FUZZQ4RValue898 += chunk5FUZZQ4RValue53)
                : chunk5FUZZQ4RValue896.attr("class").includes("attribute-keys")
                  ? (chunk5FUZZQ4RValue898 +=
                      chunk5FUZZQ4RValue53 + chunk5FUZZQ4RValue54)
                  : chunk5FUZZQ4RValue896
                      .attr("class")
                      .includes("attribute-comment") &&
                    (chunk5FUZZQ4RValue898 +=
                      chunk5FUZZQ4RValue53 +
                      chunk5FUZZQ4RValue54 +
                      _chunk5FUZZQ4RR));
          }
          chunk5FUZZQ4RValue896.attr(
            "transform",
            `translate(${chunk5FUZZQ4RValue64 + chunk5FUZZQ4RValue45 / 2 + chunk5FUZZQ4RValue898}, ${chunk5FUZZQ4RValue899 + chunk5FUZZQ4RValue65 + chunk5FUZZQ4RValue49.height + chunk5FUZZQ4RValue46 / 2})`,
          );
        },
      ),
    _chunk5FUZZQ4RS
      .select(".name")
      .attr(
        "transform",
        "translate(" +
          -chunk5FUZZQ4RValue49.width / 2 +
          ", " +
          (chunk5FUZZQ4RValue65 + chunk5FUZZQ4RValue46 / 2) +
          ")",
      ),
    theme != null && chunk5FUZZQ4RValue37.has(theme))
  ) {
    let chunk5FUZZQ4RValue1212 = chunk5FUZZQ4RValue43.colorIndex ?? 0;
    _chunk5FUZZQ4RS.attr(
      "data-color-id",
      `color-${chunk5FUZZQ4RValue1212 % borderColorArray.length}`,
    );
  }
  let chunk5FUZZQ4RValue66 = chunk5FUZZQ4RValue59.rectangle(
      chunk5FUZZQ4RValue64,
      chunk5FUZZQ4RValue65,
      chunk5FUZZQ4RValue62,
      chunk5FUZZQ4RValue63,
      chunk5FUZZQ4RValue60,
    ),
    chunk5FUZZQ4RValue67 = _chunk5FUZZQ4RS
      .insert(() => chunk5FUZZQ4RValue66, ":first-child")
      .attr("class", "outer-path")
      .attr("style", chunk5FUZZQ4RValue47.join(""));
  chunk5FUZZQ4RValue51.push(0);
  for (let [
    chunk5FUZZQ4RValue1009,
    chunk5FUZZQ4RValue1010,
  ] of chunk5FUZZQ4RValue52.entries()) {
    let chunk5FUZZQ4RValue1024 =
        (chunk5FUZZQ4RValue1009 + 1) % 2 == 0 &&
        chunk5FUZZQ4RValue1010.yOffset !== 0,
      chunk5FUZZQ4RValue1025 = chunk5FUZZQ4RValue59.rectangle(
        chunk5FUZZQ4RValue64,
        chunk5FUZZQ4RValue49.height +
          chunk5FUZZQ4RValue65 +
          chunk5FUZZQ4RValue1010?.yOffset,
        chunk5FUZZQ4RValue62,
        chunk5FUZZQ4RValue1010?.rowHeight,
        {
          ...chunk5FUZZQ4RValue60,
          fill: chunk5FUZZQ4RValue1024 ? rowEven : rowOdd,
          stroke: nodeBorder,
        },
      );
    _chunk5FUZZQ4RS
      .insert(() => chunk5FUZZQ4RValue1025, "g.label")
      .attr("style", chunk5FUZZQ4RValue47.join(""))
      .attr("class", `row-rect-${chunk5FUZZQ4RValue1024 ? "even" : "odd"}`);
  }
  let chunk5FUZZQ4RValue69 = chunk5FUZZQ4RHelper74(
      chunk5FUZZQ4RValue64,
      chunk5FUZZQ4RValue49.height + chunk5FUZZQ4RValue65,
      chunk5FUZZQ4RValue62 + chunk5FUZZQ4RValue64,
      chunk5FUZZQ4RValue49.height + chunk5FUZZQ4RValue65,
      1e-4,
    ),
    chunk5FUZZQ4RValue70 = chunk5FUZZQ4RValue59.polygon(
      chunk5FUZZQ4RValue69.map((item) => [item.x, item.y]),
      chunk5FUZZQ4RValue60,
    );
  if (
    (_chunk5FUZZQ4RS
      .insert(() => chunk5FUZZQ4RValue70)
      .attr("class", "divider"),
    (chunk5FUZZQ4RValue69 = chunk5FUZZQ4RHelper74(
      chunk5FUZZQ4RValue53 + chunk5FUZZQ4RValue64,
      chunk5FUZZQ4RValue49.height + chunk5FUZZQ4RValue65,
      chunk5FUZZQ4RValue53 + chunk5FUZZQ4RValue64,
      chunk5FUZZQ4RValue63 + chunk5FUZZQ4RValue65,
      1e-4,
    )),
    (chunk5FUZZQ4RValue70 = chunk5FUZZQ4RValue59.polygon(
      chunk5FUZZQ4RValue69.map((item) => [item.x, item.y]),
      chunk5FUZZQ4RValue60,
    )),
    _chunk5FUZZQ4RS.insert(() => chunk5FUZZQ4RValue70).attr("class", "divider"),
    chunk5FUZZQ4RValue56)
  ) {
    let chunk5FUZZQ4RValue1126 =
      chunk5FUZZQ4RValue53 + chunk5FUZZQ4RValue54 + chunk5FUZZQ4RValue64;
    chunk5FUZZQ4RValue69 = chunk5FUZZQ4RHelper74(
      chunk5FUZZQ4RValue1126,
      chunk5FUZZQ4RValue49.height + chunk5FUZZQ4RValue65,
      chunk5FUZZQ4RValue1126,
      chunk5FUZZQ4RValue63 + chunk5FUZZQ4RValue65,
      1e-4,
    );
    chunk5FUZZQ4RValue70 = chunk5FUZZQ4RValue59.polygon(
      chunk5FUZZQ4RValue69.map((item) => [item.x, item.y]),
      chunk5FUZZQ4RValue60,
    );
    _chunk5FUZZQ4RS.insert(() => chunk5FUZZQ4RValue70).attr("class", "divider");
  }
  if (chunk5FUZZQ4RValue57) {
    let chunk5FUZZQ4RValue1125 =
      chunk5FUZZQ4RValue53 +
      chunk5FUZZQ4RValue54 +
      _chunk5FUZZQ4RR +
      chunk5FUZZQ4RValue64;
    chunk5FUZZQ4RValue69 = chunk5FUZZQ4RHelper74(
      chunk5FUZZQ4RValue1125,
      chunk5FUZZQ4RValue49.height + chunk5FUZZQ4RValue65,
      chunk5FUZZQ4RValue1125,
      chunk5FUZZQ4RValue63 + chunk5FUZZQ4RValue65,
      1e-4,
    );
    chunk5FUZZQ4RValue70 = chunk5FUZZQ4RValue59.polygon(
      chunk5FUZZQ4RValue69.map((item) => [item.x, item.y]),
      chunk5FUZZQ4RValue60,
    );
    _chunk5FUZZQ4RS.insert(() => chunk5FUZZQ4RValue70).attr("class", "divider");
  }
  for (let chunk5FUZZQ4RValue1122 of chunk5FUZZQ4RValue51) {
    let chunk5FUZZQ4RValue1132 =
      chunk5FUZZQ4RValue49.height +
      chunk5FUZZQ4RValue65 +
      chunk5FUZZQ4RValue1122;
    chunk5FUZZQ4RValue69 = chunk5FUZZQ4RHelper74(
      chunk5FUZZQ4RValue64,
      chunk5FUZZQ4RValue1132,
      chunk5FUZZQ4RValue62 + chunk5FUZZQ4RValue64,
      chunk5FUZZQ4RValue1132,
      1e-4,
    );
    chunk5FUZZQ4RValue70 = chunk5FUZZQ4RValue59.polygon(
      chunk5FUZZQ4RValue69.map((item) => [item.x, item.y]),
      chunk5FUZZQ4RValue60,
    );
    _chunk5FUZZQ4RS.insert(() => chunk5FUZZQ4RValue70).attr("class", "divider");
  }
  if (
    (chunk5FUZZQ4RU(chunk5FUZZQ4RParam2, chunk5FUZZQ4RValue67),
    nodeStyles && chunk5FUZZQ4RParam2.look !== "handDrawn")
  )
    if (theme != null && chunk5FUZZQ4RValue38.has(theme))
      _chunk5FUZZQ4RS.selectAll("path").attr("style", nodeStyles);
    else {
      let chunk5FUZZQ4RValue1081 = nodeStyles
        .split(";")
        ?.filter((chunk5FUZZQ4RParam425) =>
          chunk5FUZZQ4RParam425.includes("stroke"),
        )
        ?.map((chunk5FUZZQ4RParam428) => `${chunk5FUZZQ4RParam428}`)
        .join("; ");
      _chunk5FUZZQ4RS
        .selectAll("path")
        .attr("style", chunk5FUZZQ4RValue1081 ?? "");
      _chunk5FUZZQ4RS
        .selectAll(".row-rect-even path")
        .attr("style", nodeStyles);
    }
  return (
    (chunk5FUZZQ4RParam2.intersect = function (chunk5FUZZQ4RParam410) {
      return chunk5FUZZQ4RValue12.rect(
        chunk5FUZZQ4RParam2,
        chunk5FUZZQ4RParam410,
      );
    }),
    _chunk5FUZZQ4RS
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper72, "erBox");
async function chunk5FUZZQ4RHelper73(
  chunk5FUZZQ4RParam117,
  chunk5FUZZQ4RParam118,
  chunk5FUZZQ4RParam119,
  chunk5FUZZQ4RParam120 = 0,
  chunk5FUZZQ4RParam121 = 0,
  chunk5FUZZQ4RParam122 = [],
  chunk5FUZZQ4RParam123 = "",
) {
  let chunk5FUZZQ4RValue736 = chunk5FUZZQ4RParam117
    .insert("g")
    .attr("class", `label ${chunk5FUZZQ4RParam122.join(" ")}`)
    .attr(
      "transform",
      `translate(${chunk5FUZZQ4RParam120}, ${chunk5FUZZQ4RParam121})`,
    )
    .attr("style", chunk5FUZZQ4RParam123);
  chunk5FUZZQ4RParam118 !== _chunkICPOFSXXA(chunk5FUZZQ4RParam118) &&
    ((chunk5FUZZQ4RParam118 = _chunkICPOFSXXA(chunk5FUZZQ4RParam118)),
    (chunk5FUZZQ4RParam118 = chunk5FUZZQ4RParam118
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")));
  let chunk5FUZZQ4RValue737 = chunk5FUZZQ4RValue736.node().appendChild(
    await chunkU2HBQHQKA(
      chunk5FUZZQ4RValue736,
      chunk5FUZZQ4RParam118,
      {
        width:
          chunk5PVQY5BWL(chunk5FUZZQ4RParam118, chunk5FUZZQ4RParam119) + 100,
        style: chunk5FUZZQ4RParam123,
        useHtmlLabels: chunk5FUZZQ4RParam119.htmlLabels,
      },
      chunk5FUZZQ4RParam119,
    ),
  );
  if (
    chunk5FUZZQ4RParam118.includes("&lt;") ||
    chunk5FUZZQ4RParam118.includes("&gt;")
  ) {
    let chunk5FUZZQ4RValue1023 = chunk5FUZZQ4RValue737.children[0];
    for (
      chunk5FUZZQ4RValue1023.textContent = chunk5FUZZQ4RValue1023.textContent
        .replaceAll("&lt;", "<")
        .replaceAll("&gt;", ">");
      chunk5FUZZQ4RValue1023.childNodes[0];

    ) {
      chunk5FUZZQ4RValue1023 = chunk5FUZZQ4RValue1023.childNodes[0];
      chunk5FUZZQ4RValue1023.textContent = chunk5FUZZQ4RValue1023.textContent
        .replaceAll("&lt;", "<")
        .replaceAll("&gt;", ">");
    }
  }
  let chunk5FUZZQ4RValue738 = chunk5FUZZQ4RValue737.getBBox();
  if (chunkICPOFSXXZ(chunk5FUZZQ4RParam119.htmlLabels)) {
    let chunk5FUZZQ4RValue1135 = chunk5FUZZQ4RValue737.children[0];
    chunk5FUZZQ4RValue1135.style.textAlign = "start";
    let chunk5FUZZQ4RValue1136 = Src(chunk5FUZZQ4RValue737);
    chunk5FUZZQ4RValue738 = chunk5FUZZQ4RValue1135.getBoundingClientRect();
    chunk5FUZZQ4RValue1136.attr("width", chunk5FUZZQ4RValue738.width);
    chunk5FUZZQ4RValue1136.attr("height", chunk5FUZZQ4RValue738.height);
  }
  return chunk5FUZZQ4RValue738;
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper73, "addText");
function chunk5FUZZQ4RHelper74(
  chunk5FUZZQ4RParam201,
  chunk5FUZZQ4RParam202,
  chunk5FUZZQ4RParam203,
  chunk5FUZZQ4RParam204,
  chunk5FUZZQ4RParam205,
) {
  return chunk5FUZZQ4RParam201 === chunk5FUZZQ4RParam203
    ? [
        {
          x: chunk5FUZZQ4RParam201 - chunk5FUZZQ4RParam205 / 2,
          y: chunk5FUZZQ4RParam202,
        },
        {
          x: chunk5FUZZQ4RParam201 + chunk5FUZZQ4RParam205 / 2,
          y: chunk5FUZZQ4RParam202,
        },
        {
          x: chunk5FUZZQ4RParam203 + chunk5FUZZQ4RParam205 / 2,
          y: chunk5FUZZQ4RParam204,
        },
        {
          x: chunk5FUZZQ4RParam203 - chunk5FUZZQ4RParam205 / 2,
          y: chunk5FUZZQ4RParam204,
        },
      ]
    : [
        {
          x: chunk5FUZZQ4RParam201,
          y: chunk5FUZZQ4RParam202 - chunk5FUZZQ4RParam205 / 2,
        },
        {
          x: chunk5FUZZQ4RParam201,
          y: chunk5FUZZQ4RParam202 + chunk5FUZZQ4RParam205 / 2,
        },
        {
          x: chunk5FUZZQ4RParam203,
          y: chunk5FUZZQ4RParam204 + chunk5FUZZQ4RParam205 / 2,
        },
        {
          x: chunk5FUZZQ4RParam203,
          y: chunk5FUZZQ4RParam204 - chunk5FUZZQ4RParam205 / 2,
        },
      ];
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper74, "lineToPolygon");
async function chunk5FUZZQ4RHelper75(
  chunk5FUZZQ4RParam61,
  chunk5FUZZQ4RParam62,
  chunk5FUZZQ4RParam63,
  chunk5FUZZQ4RParam64,
  chunk5FUZZQ4RParam65 = chunk5FUZZQ4RParam63.class.padding ?? 12,
) {
  let chunk5FUZZQ4RValue475 = chunk5FUZZQ4RParam64 ? 0 : 3,
    chunk5FUZZQ4RValue476 = chunk5FUZZQ4RParam61
      .insert("g")
      .attr("class", chunk5FUZZQ4RValue2(chunk5FUZZQ4RParam62))
      .attr("id", chunk5FUZZQ4RParam62.domId || chunk5FUZZQ4RParam62.id),
    chunk5FUZZQ4RValue477 = null,
    chunk5FUZZQ4RValue478 = null,
    chunk5FUZZQ4RValue479 = null,
    chunk5FUZZQ4RValue480 = null,
    chunk5FUZZQ4RValue481 = 0,
    chunk5FUZZQ4RValue482 = 0,
    chunk5FUZZQ4RValue483 = 0;
  if (
    ((chunk5FUZZQ4RValue477 = chunk5FUZZQ4RValue476
      .insert("g")
      .attr("class", "annotation-group text")),
    chunk5FUZZQ4RParam62.annotations.length > 0)
  ) {
    let chunk5FUZZQ4RValue1200 = chunk5FUZZQ4RParam62.annotations[0];
    await chunk5FUZZQ4RHelper76(
      chunk5FUZZQ4RValue477,
      {
        text: `\xAB${chunk5FUZZQ4RValue1200}\xBB`,
      },
      0,
    );
    chunk5FUZZQ4RValue481 = chunk5FUZZQ4RValue477.node().getBBox().height;
  }
  chunk5FUZZQ4RValue478 = chunk5FUZZQ4RValue476
    .insert("g")
    .attr("class", "label-group text");
  await chunk5FUZZQ4RHelper76(chunk5FUZZQ4RValue478, chunk5FUZZQ4RParam62, 0, [
    "font-weight: bolder",
  ]);
  let chunk5FUZZQ4RValue484 = chunk5FUZZQ4RValue478.node().getBBox();
  chunk5FUZZQ4RValue482 = chunk5FUZZQ4RValue484.height;
  chunk5FUZZQ4RValue479 = chunk5FUZZQ4RValue476
    .insert("g")
    .attr("class", "members-group text");
  let chunk5FUZZQ4RValue485 = 0;
  for (let chunk5FUZZQ4RValue1205 of chunk5FUZZQ4RParam62.members) {
    let chunk5FUZZQ4RValue1216 = await chunk5FUZZQ4RHelper76(
      chunk5FUZZQ4RValue479,
      chunk5FUZZQ4RValue1205,
      chunk5FUZZQ4RValue485,
      [chunk5FUZZQ4RValue1205.parseClassifier()],
    );
    chunk5FUZZQ4RValue485 += chunk5FUZZQ4RValue1216 + chunk5FUZZQ4RValue475;
  }
  chunk5FUZZQ4RValue483 = chunk5FUZZQ4RValue479.node().getBBox().height;
  chunk5FUZZQ4RValue483 <= 0 &&
    (chunk5FUZZQ4RValue483 = chunk5FUZZQ4RParam65 / 2);
  chunk5FUZZQ4RValue480 = chunk5FUZZQ4RValue476
    .insert("g")
    .attr("class", "methods-group text");
  let chunk5FUZZQ4RValue486 = 0;
  for (let chunk5FUZZQ4RValue1206 of chunk5FUZZQ4RParam62.methods) {
    let chunk5FUZZQ4RValue1217 = await chunk5FUZZQ4RHelper76(
      chunk5FUZZQ4RValue480,
      chunk5FUZZQ4RValue1206,
      chunk5FUZZQ4RValue486,
      [chunk5FUZZQ4RValue1206.parseClassifier()],
    );
    chunk5FUZZQ4RValue486 += chunk5FUZZQ4RValue1217 + chunk5FUZZQ4RValue475;
  }
  let chunk5FUZZQ4RValue487 = chunk5FUZZQ4RValue476.node().getBBox();
  if (chunk5FUZZQ4RValue477 !== null) {
    let chunk5FUZZQ4RValue1211 = chunk5FUZZQ4RValue477.node().getBBox();
    chunk5FUZZQ4RValue477.attr(
      "transform",
      `translate(${-chunk5FUZZQ4RValue1211.width / 2})`,
    );
  }
  return (
    chunk5FUZZQ4RValue478.attr(
      "transform",
      `translate(${-chunk5FUZZQ4RValue484.width / 2}, ${chunk5FUZZQ4RValue481})`,
    ),
    (chunk5FUZZQ4RValue487 = chunk5FUZZQ4RValue476.node().getBBox()),
    chunk5FUZZQ4RValue479.attr(
      "transform",
      `translate(0, ${chunk5FUZZQ4RValue481 + chunk5FUZZQ4RValue482 + chunk5FUZZQ4RParam65 * 2})`,
    ),
    (chunk5FUZZQ4RValue487 = chunk5FUZZQ4RValue476.node().getBBox()),
    chunk5FUZZQ4RValue480.attr(
      "transform",
      `translate(0, ${chunk5FUZZQ4RValue481 + chunk5FUZZQ4RValue482 + (chunk5FUZZQ4RValue483 ? chunk5FUZZQ4RValue483 + chunk5FUZZQ4RParam65 * 4 : chunk5FUZZQ4RParam65 * 2)})`,
    ),
    (chunk5FUZZQ4RValue487 = chunk5FUZZQ4RValue476.node().getBBox()),
    {
      shapeSvg: chunk5FUZZQ4RValue476,
      bbox: chunk5FUZZQ4RValue487,
    }
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper75, "textHelper");
async function chunk5FUZZQ4RHelper76(
  chunk5FUZZQ4RParam24,
  chunk5FUZZQ4RParam25,
  chunk5FUZZQ4RParam26,
  chunk5FUZZQ4RParam27 = [],
) {
  let chunk5FUZZQ4RValue253 = chunk5FUZZQ4RParam24
      .insert("g")
      .attr("class", "label")
      .attr("style", chunk5FUZZQ4RParam27.join("; ")),
    chunk5FUZZQ4RValue254 = chunkICPOFSXXW(),
    chunk5FUZZQ4RValue255 =
      "useHtmlLabels" in chunk5FUZZQ4RParam25
        ? chunk5FUZZQ4RParam25.useHtmlLabels
        : (chunkICPOFSXXZ(chunk5FUZZQ4RValue254.htmlLabels) ?? true),
    chunk5FUZZQ4RValue256 = "";
  chunk5FUZZQ4RValue256 =
    "text" in chunk5FUZZQ4RParam25
      ? chunk5FUZZQ4RParam25.text
      : chunk5FUZZQ4RParam25.label;
  !chunk5FUZZQ4RValue255 &&
    chunk5FUZZQ4RValue256.startsWith("\\") &&
    (chunk5FUZZQ4RValue256 = chunk5FUZZQ4RValue256.substring(1));
  _chunkICPOFSXXB(chunk5FUZZQ4RValue256) && (chunk5FUZZQ4RValue255 = true);
  let chunk5FUZZQ4RValue257 = await chunkU2HBQHQKA(
      chunk5FUZZQ4RValue253,
      chunkICPOFSXXU(chunk5PVQY5BWD(chunk5FUZZQ4RValue256)),
      {
        width:
          chunk5PVQY5BWL(chunk5FUZZQ4RValue256, chunk5FUZZQ4RValue254) + 50,
        classes: "markdown-node-label",
        useHtmlLabels: chunk5FUZZQ4RValue255,
      },
      chunk5FUZZQ4RValue254,
    ),
    chunk5FUZZQ4RValue258,
    chunk5FUZZQ4RValue259 = 1;
  if (chunk5FUZZQ4RValue255) {
    let chunk5FUZZQ4RValue619 = chunk5FUZZQ4RValue257.children[0],
      chunk5FUZZQ4RValue620 = Src(chunk5FUZZQ4RValue257);
    chunk5FUZZQ4RValue259 =
      chunk5FUZZQ4RValue619.innerHTML.split("<br>").length;
    chunk5FUZZQ4RValue619.innerHTML.includes("</math>") &&
      (chunk5FUZZQ4RValue259 +=
        chunk5FUZZQ4RValue619.innerHTML.split("<mrow>").length - 1);
    let chunk5FUZZQ4RValue621 =
      chunk5FUZZQ4RValue619.getElementsByTagName("img");
    if (chunk5FUZZQ4RValue621) {
      let chunk5FUZZQ4RValue797 =
        chunk5FUZZQ4RValue256.replace(/<img[^>]*>/g, "").trim() === "";
      await Promise.all(
        [...chunk5FUZZQ4RValue621].map(
          (item) =>
            new Promise((chunk5FUZZQ4RParam166) => {
              function chunk5FUZZQ4RHelper84() {
                if (
                  ((item.style.display = "flex"),
                  (item.style.flexDirection = "column"),
                  chunk5FUZZQ4RValue797)
                ) {
                  let chunk5FUZZQ4RValue1055 =
                      chunk5FUZZQ4RValue254.fontSize?.toString() ??
                      window.getComputedStyle(document.body).fontSize,
                    chunk5FUZZQ4RValue1056 =
                      parseInt(chunk5FUZZQ4RValue1055, 10) * 5 + "px";
                  item.style.minWidth = chunk5FUZZQ4RValue1056;
                  item.style.maxWidth = chunk5FUZZQ4RValue1056;
                } else item.style.width = "100%";
                chunk5FUZZQ4RParam166(item);
              }
              chunkAGHRB4JFN(chunk5FUZZQ4RHelper84, "setupImage");
              setTimeout(() => {
                item.complete && chunk5FUZZQ4RHelper84();
              });
              item.addEventListener("error", chunk5FUZZQ4RHelper84);
              item.addEventListener("load", chunk5FUZZQ4RHelper84);
            }),
        ),
      );
    }
    chunk5FUZZQ4RValue258 = chunk5FUZZQ4RValue619.getBoundingClientRect();
    chunk5FUZZQ4RValue620.attr("width", chunk5FUZZQ4RValue258.width);
    chunk5FUZZQ4RValue620.attr("height", chunk5FUZZQ4RValue258.height);
  } else {
    chunk5FUZZQ4RParam27.includes("font-weight: bolder") &&
      Src(chunk5FUZZQ4RValue257).selectAll("tspan").attr("font-weight", "");
    chunk5FUZZQ4RValue259 = chunk5FUZZQ4RValue257.children.length;
    let chunk5FUZZQ4RValue920 = chunk5FUZZQ4RValue257.children[0];
    (chunk5FUZZQ4RValue257.textContent === "" ||
      chunk5FUZZQ4RValue257.textContent.includes("&gt")) &&
      ((chunk5FUZZQ4RValue920.textContent =
        chunk5FUZZQ4RValue256[0] +
        chunk5FUZZQ4RValue256
          .substring(1)
          .replaceAll("&gt;", ">")
          .replaceAll("&lt;", "<")
          .trim()),
      chunk5FUZZQ4RValue256[1] === " " &&
        (chunk5FUZZQ4RValue920.textContent =
          chunk5FUZZQ4RValue920.textContent[0] +
          " " +
          chunk5FUZZQ4RValue920.textContent.substring(1)));
    chunk5FUZZQ4RValue920.textContent === "undefined" &&
      (chunk5FUZZQ4RValue920.textContent = "");
    chunk5FUZZQ4RValue258 = chunk5FUZZQ4RValue257.getBBox();
  }
  return (
    chunk5FUZZQ4RValue253.attr(
      "transform",
      "translate(0," +
        (-chunk5FUZZQ4RValue258.height / (2 * chunk5FUZZQ4RValue259) +
          chunk5FUZZQ4RParam26) +
        ")",
    ),
    chunk5FUZZQ4RValue258.height
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper76, "addText");
async function chunk5FUZZQ4RHelper77(chunk5FUZZQ4RParam3, chunk5FUZZQ4RParam4) {
  let chunk5FUZZQ4RValue71 = _chunkICPOFSXXP(),
    { themeVariables } = chunk5FUZZQ4RValue71,
    { useGradient } = themeVariables,
    chunk5FUZZQ4RValue72 = chunk5FUZZQ4RValue71.class.padding ?? 12,
    chunk5FUZZQ4RValue73 = chunk5FUZZQ4RValue72,
    chunk5FUZZQ4RValue74 =
      chunk5FUZZQ4RParam4.useHtmlLabels ??
      chunkICPOFSXXZ(chunk5FUZZQ4RValue71.htmlLabels) ??
      true,
    chunk5FUZZQ4RValue75 = chunk5FUZZQ4RParam4;
  chunk5FUZZQ4RValue75.annotations = chunk5FUZZQ4RValue75.annotations ?? [];
  chunk5FUZZQ4RValue75.members = chunk5FUZZQ4RValue75.members ?? [];
  chunk5FUZZQ4RValue75.methods = chunk5FUZZQ4RValue75.methods ?? [];
  let { shapeSvg, bbox } = await chunk5FUZZQ4RHelper75(
      chunk5FUZZQ4RParam3,
      chunk5FUZZQ4RParam4,
      chunk5FUZZQ4RValue71,
      chunk5FUZZQ4RValue74,
      chunk5FUZZQ4RValue73,
    ),
    { labelStyles, nodeStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam4);
  chunk5FUZZQ4RParam4.labelStyle = labelStyles;
  chunk5FUZZQ4RParam4.cssStyles = chunk5FUZZQ4RValue75.styles || "";
  let chunk5FUZZQ4RValue76 =
    chunk5FUZZQ4RValue75.styles?.join(";") || nodeStyles || "";
  chunk5FUZZQ4RParam4.cssStyles ||= chunk5FUZZQ4RValue76
    .replaceAll("!important", "")
    .split(";");
  let chunk5FUZZQ4RValue77 =
      chunk5FUZZQ4RValue75.members.length === 0 &&
      chunk5FUZZQ4RValue75.methods.length === 0 &&
      !chunk5FUZZQ4RValue71.class?.hideEmptyMembersBox,
    chunk5FUZZQ4RValue78 = rough.svg(shapeSvg),
    chunk5FUZZQ4RValue79 = chunkX2U36JSPN(chunk5FUZZQ4RParam4, {});
  chunk5FUZZQ4RParam4.look !== "handDrawn" &&
    ((chunk5FUZZQ4RValue79.roughness = 0),
    (chunk5FUZZQ4RValue79.fillStyle = "solid"));
  let _chunk5FUZZQ4RS = Math.max(chunk5FUZZQ4RParam4.width ?? 0, bbox.width),
    chunk5FUZZQ4RValue80 = Math.max(
      chunk5FUZZQ4RParam4.height ?? 0,
      bbox.height,
    ),
    chunk5FUZZQ4RValue81 = (chunk5FUZZQ4RParam4.height ?? 0) > bbox.height;
  chunk5FUZZQ4RValue75.members.length === 0 &&
  chunk5FUZZQ4RValue75.methods.length === 0
    ? (chunk5FUZZQ4RValue80 += chunk5FUZZQ4RValue73)
    : chunk5FUZZQ4RValue75.members.length > 0 &&
      chunk5FUZZQ4RValue75.methods.length === 0 &&
      (chunk5FUZZQ4RValue80 += chunk5FUZZQ4RValue73 * 2);
  let chunk5FUZZQ4RValue82 = -_chunk5FUZZQ4RS / 2,
    chunk5FUZZQ4RValue83 = -chunk5FUZZQ4RValue80 / 2,
    chunk5FUZZQ4RValue84 = chunk5FUZZQ4RValue77
      ? chunk5FUZZQ4RValue72 * 2
      : chunk5FUZZQ4RValue75.members.length === 0 &&
          chunk5FUZZQ4RValue75.methods.length === 0
        ? -chunk5FUZZQ4RValue72
        : 0;
  chunk5FUZZQ4RValue81 && (chunk5FUZZQ4RValue84 = chunk5FUZZQ4RValue72 * 2);
  let chunk5FUZZQ4RValue85 = chunk5FUZZQ4RValue78.rectangle(
      chunk5FUZZQ4RValue82 - chunk5FUZZQ4RValue72,
      chunk5FUZZQ4RValue83 -
        chunk5FUZZQ4RValue72 -
        (chunk5FUZZQ4RValue77
          ? chunk5FUZZQ4RValue72
          : chunk5FUZZQ4RValue75.members.length === 0 &&
              chunk5FUZZQ4RValue75.methods.length === 0
            ? -chunk5FUZZQ4RValue72 / 2
            : 0),
      _chunk5FUZZQ4RS + 2 * chunk5FUZZQ4RValue72,
      chunk5FUZZQ4RValue80 + 2 * chunk5FUZZQ4RValue72 + chunk5FUZZQ4RValue84,
      chunk5FUZZQ4RValue79,
    ),
    chunk5FUZZQ4RValue86 = shapeSvg.insert(
      () => chunk5FUZZQ4RValue85,
      ":first-child",
    );
  chunk5FUZZQ4RValue86.attr("class", "basic label-container outer-path");
  let _chunk5FUZZQ4RR = chunk5FUZZQ4RValue86.node().getBBox(),
    chunk5FUZZQ4RValue87 =
      shapeSvg.select(".annotation-group").node().getBBox().height -
        (chunk5FUZZQ4RValue77 ? chunk5FUZZQ4RValue72 / 2 : 0) || 0,
    chunk5FUZZQ4RValue88 =
      shapeSvg.select(".label-group").node().getBBox().height -
        (chunk5FUZZQ4RValue77 ? chunk5FUZZQ4RValue72 / 2 : 0) || 0,
    chunk5FUZZQ4RValue89 =
      shapeSvg.select(".members-group").node().getBBox().height -
        (chunk5FUZZQ4RValue77 ? chunk5FUZZQ4RValue72 / 2 : 0) || 0,
    chunk5FUZZQ4RValue90 =
      (chunk5FUZZQ4RValue87 +
        chunk5FUZZQ4RValue88 +
        chunk5FUZZQ4RValue83 +
        chunk5FUZZQ4RValue72 -
        (chunk5FUZZQ4RValue83 -
          chunk5FUZZQ4RValue72 -
          (chunk5FUZZQ4RValue77
            ? chunk5FUZZQ4RValue72
            : chunk5FUZZQ4RValue75.members.length === 0 &&
                chunk5FUZZQ4RValue75.methods.length === 0
              ? -chunk5FUZZQ4RValue72 / 2
              : 0))) /
      2;
  if (
    (shapeSvg
      .selectAll(".text")
      .each(
        (
          chunk5FUZZQ4RParam114,
          chunk5FUZZQ4RParam115,
          chunk5FUZZQ4RParam116,
        ) => {
          let chunk5FUZZQ4RValue731 = Src(
              chunk5FUZZQ4RParam116[chunk5FUZZQ4RParam115],
            ),
            chunk5FUZZQ4RValue732 = chunk5FUZZQ4RValue731.attr("transform"),
            chunk5FUZZQ4RValue733 = 0;
          if (chunk5FUZZQ4RValue732) {
            let chunk5FUZZQ4RValue1201 = RegExp(
              /translate\(([^,]+),([^)]+)\)/,
            ).exec(chunk5FUZZQ4RValue732);
            chunk5FUZZQ4RValue1201 &&
              (chunk5FUZZQ4RValue733 = parseFloat(chunk5FUZZQ4RValue1201[2]));
          }
          let chunk5FUZZQ4RValue734 =
            chunk5FUZZQ4RValue733 +
            chunk5FUZZQ4RValue83 +
            chunk5FUZZQ4RValue72 -
            (chunk5FUZZQ4RValue77
              ? chunk5FUZZQ4RValue72
              : chunk5FUZZQ4RValue75.members.length === 0 &&
                  chunk5FUZZQ4RValue75.methods.length === 0
                ? -chunk5FUZZQ4RValue72 / 2
                : 0);
          if (chunk5FUZZQ4RValue731.attr("class").includes("methods-group")) {
            let chunk5FUZZQ4RValue1164 = Math.max(
              chunk5FUZZQ4RValue89,
              chunk5FUZZQ4RValue73 / 2,
            );
            chunk5FUZZQ4RValue734 = chunk5FUZZQ4RValue81
              ? Math.max(
                  chunk5FUZZQ4RValue90,
                  chunk5FUZZQ4RValue87 +
                    chunk5FUZZQ4RValue88 +
                    chunk5FUZZQ4RValue1164 +
                    chunk5FUZZQ4RValue83 +
                    chunk5FUZZQ4RValue73 * 2 +
                    chunk5FUZZQ4RValue72,
                ) +
                chunk5FUZZQ4RValue73 * 2
              : chunk5FUZZQ4RValue87 +
                chunk5FUZZQ4RValue88 +
                chunk5FUZZQ4RValue1164 +
                chunk5FUZZQ4RValue83 +
                chunk5FUZZQ4RValue73 * 4 +
                chunk5FUZZQ4RValue72;
          }
          chunk5FUZZQ4RValue75.members.length === 0 &&
            chunk5FUZZQ4RValue75.methods.length === 0 &&
            chunk5FUZZQ4RValue71.class?.hideEmptyMembersBox &&
            (chunk5FUZZQ4RValue734 =
              chunk5FUZZQ4RValue75.annotations.length > 0
                ? chunk5FUZZQ4RValue733 - chunk5FUZZQ4RValue73
                : chunk5FUZZQ4RValue733);
          chunk5FUZZQ4RValue74 || (chunk5FUZZQ4RValue734 -= 4);
          let chunk5FUZZQ4RValue735 = chunk5FUZZQ4RValue82;
          (chunk5FUZZQ4RValue731.attr("class").includes("label-group") ||
            chunk5FUZZQ4RValue731.attr("class").includes("annotation-group")) &&
            ((chunk5FUZZQ4RValue735 =
              -chunk5FUZZQ4RValue731.node()?.getBBox().width / 2 || 0),
            shapeSvg
              .selectAll("text")
              .each(
                function (
                  chunk5FUZZQ4RParam315,
                  chunk5FUZZQ4RParam316,
                  chunk5FUZZQ4RParam317,
                ) {
                  window.getComputedStyle(
                    chunk5FUZZQ4RParam317[chunk5FUZZQ4RParam316],
                  ).textAnchor === "middle" && (chunk5FUZZQ4RValue735 = 0);
                },
              ));
          chunk5FUZZQ4RValue731.attr(
            "transform",
            `translate(${chunk5FUZZQ4RValue735}, ${chunk5FUZZQ4RValue734})`,
          );
        },
      ),
    chunk5FUZZQ4RValue75.members.length > 0 ||
      chunk5FUZZQ4RValue75.methods.length > 0 ||
      chunk5FUZZQ4RValue77)
  ) {
    let chunk5FUZZQ4RValue1123 =
        chunk5FUZZQ4RValue87 +
        chunk5FUZZQ4RValue88 +
        chunk5FUZZQ4RValue83 +
        chunk5FUZZQ4RValue72,
      chunk5FUZZQ4RValue1124 = chunk5FUZZQ4RValue78.line(
        _chunk5FUZZQ4RR.x,
        chunk5FUZZQ4RValue1123,
        _chunk5FUZZQ4RR.x + _chunk5FUZZQ4RR.width,
        chunk5FUZZQ4RValue1123 + 0.001,
        chunk5FUZZQ4RValue79,
      );
    shapeSvg
      .insert(() => chunk5FUZZQ4RValue1124)
      .attr(
        "class",
        `divider${chunk5FUZZQ4RParam4.look === "neo" && !useGradient ? " neo-line" : ""}`,
      )
      .attr("style", chunk5FUZZQ4RValue76);
  }
  if (
    chunk5FUZZQ4RValue77 ||
    chunk5FUZZQ4RValue75.members.length > 0 ||
    chunk5FUZZQ4RValue75.methods.length > 0
  ) {
    let chunk5FUZZQ4RValue1026 =
        chunk5FUZZQ4RValue87 +
        chunk5FUZZQ4RValue88 +
        chunk5FUZZQ4RValue89 +
        chunk5FUZZQ4RValue83 +
        chunk5FUZZQ4RValue73 * 2 +
        chunk5FUZZQ4RValue72,
      chunk5FUZZQ4RValue1027 = chunk5FUZZQ4RValue78.line(
        _chunk5FUZZQ4RR.x,
        chunk5FUZZQ4RValue81
          ? Math.max(chunk5FUZZQ4RValue90, chunk5FUZZQ4RValue1026)
          : chunk5FUZZQ4RValue1026,
        _chunk5FUZZQ4RR.x + _chunk5FUZZQ4RR.width,
        (chunk5FUZZQ4RValue81
          ? Math.max(chunk5FUZZQ4RValue90, chunk5FUZZQ4RValue1026)
          : chunk5FUZZQ4RValue1026) + 0.001,
        chunk5FUZZQ4RValue79,
      );
    shapeSvg
      .insert(() => chunk5FUZZQ4RValue1027)
      .attr(
        "class",
        `divider${chunk5FUZZQ4RParam4.look === "neo" && !useGradient ? " neo-line" : ""}`,
      )
      .attr("style", chunk5FUZZQ4RValue76);
  }
  if (
    (chunk5FUZZQ4RValue75.look !== "handDrawn" &&
      shapeSvg.selectAll("path").attr("style", chunk5FUZZQ4RValue76),
    chunk5FUZZQ4RValue86
      .select(":nth-child(2)")
      .attr("style", chunk5FUZZQ4RValue76),
    shapeSvg
      .selectAll(".divider")
      .select("path")
      .attr("style", chunk5FUZZQ4RValue76),
    chunk5FUZZQ4RParam4.labelStyle
      ? shapeSvg.selectAll("span").attr("style", chunk5FUZZQ4RParam4.labelStyle)
      : shapeSvg.selectAll("span").attr("style", chunk5FUZZQ4RValue76),
    !chunk5FUZZQ4RValue74)
  ) {
    let chunk5FUZZQ4RValue1016 = RegExp(/color\s*:\s*([^;]*)/),
      chunk5FUZZQ4RValue1017 =
        chunk5FUZZQ4RValue1016.exec(chunk5FUZZQ4RValue76);
    if (chunk5FUZZQ4RValue1017) {
      let chunk5FUZZQ4RValue1209 = chunk5FUZZQ4RValue1017[0].replace(
        "color",
        "fill",
      );
      shapeSvg.selectAll("tspan").attr("style", chunk5FUZZQ4RValue1209);
    } else if (labelStyles) {
      let chunk5FUZZQ4RValue1170 = chunk5FUZZQ4RValue1016.exec(labelStyles);
      if (chunk5FUZZQ4RValue1170) {
        let chunk5FUZZQ4RValue1204 = chunk5FUZZQ4RValue1170[0].replace(
          "color",
          "fill",
        );
        shapeSvg.selectAll("tspan").attr("style", chunk5FUZZQ4RValue1204);
      }
    }
  }
  return (
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam4, chunk5FUZZQ4RValue86),
    (chunk5FUZZQ4RParam4.intersect = function (chunk5FUZZQ4RParam411) {
      return chunk5FUZZQ4RValue12.rect(
        chunk5FUZZQ4RParam4,
        chunk5FUZZQ4RParam411,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper77, "classBox");
async function chunk5FUZZQ4RHelper78(
  chunk5FUZZQ4RParam14,
  chunk5FUZZQ4RParam15,
) {
  let { labelStyles, nodeStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam15);
  chunk5FUZZQ4RParam15.labelStyle = labelStyles;
  let chunk5FUZZQ4RValue171 = chunk5FUZZQ4RParam15,
    chunk5FUZZQ4RValue172 = chunk5FUZZQ4RParam15,
    chunk5FUZZQ4RValue173 = "verifyMethod" in chunk5FUZZQ4RParam15,
    chunk5FUZZQ4RValue174 = chunk5FUZZQ4RValue2(chunk5FUZZQ4RParam15),
    { themeVariables } = _chunkICPOFSXXP(),
    { borderColorArray, requirementEdgeLabelBackground } = themeVariables,
    chunk5FUZZQ4RValue175 = chunk5FUZZQ4RParam14
      .insert("g")
      .attr("class", chunk5FUZZQ4RValue174)
      .attr("id", chunk5FUZZQ4RParam15.domId ?? chunk5FUZZQ4RParam15.id),
    chunk5FUZZQ4RValue176;
  chunk5FUZZQ4RValue176 = chunk5FUZZQ4RValue173
    ? await $(
        chunk5FUZZQ4RValue175,
        `&lt;&lt;${chunk5FUZZQ4RValue171.type}&gt;&gt;`,
        0,
        chunk5FUZZQ4RParam15.labelStyle,
      )
    : await $(
        chunk5FUZZQ4RValue175,
        "&lt;&lt;Element&gt;&gt;",
        0,
        chunk5FUZZQ4RParam15.labelStyle,
      );
  let chunk5FUZZQ4RValue177 = chunk5FUZZQ4RValue176,
    chunk5FUZZQ4RValue178 = await $(
      chunk5FUZZQ4RValue175,
      chunk5FUZZQ4RValue171.name,
      chunk5FUZZQ4RValue177,
      chunk5FUZZQ4RParam15.labelStyle + "; font-weight: bold;",
    );
  if (
    ((chunk5FUZZQ4RValue177 += chunk5FUZZQ4RValue178 + 20),
    chunk5FUZZQ4RValue173)
  ) {
    let chunk5FUZZQ4RValue942 = await $(
      chunk5FUZZQ4RValue175,
      `${chunk5FUZZQ4RValue171.requirementId ? `ID: ${chunk5FUZZQ4RValue171.requirementId}` : ""}`,
      chunk5FUZZQ4RValue177,
      chunk5FUZZQ4RParam15.labelStyle,
    );
    chunk5FUZZQ4RValue177 += chunk5FUZZQ4RValue942;
    let chunk5FUZZQ4RValue943 = await $(
      chunk5FUZZQ4RValue175,
      `${chunk5FUZZQ4RValue171.text ? `Text: ${chunk5FUZZQ4RValue171.text}` : ""}`,
      chunk5FUZZQ4RValue177,
      chunk5FUZZQ4RParam15.labelStyle,
    );
    chunk5FUZZQ4RValue177 += chunk5FUZZQ4RValue943;
    let chunk5FUZZQ4RValue944 = await $(
      chunk5FUZZQ4RValue175,
      `${chunk5FUZZQ4RValue171.risk ? `Risk: ${chunk5FUZZQ4RValue171.risk}` : ""}`,
      chunk5FUZZQ4RValue177,
      chunk5FUZZQ4RParam15.labelStyle,
    );
    chunk5FUZZQ4RValue177 += chunk5FUZZQ4RValue944;
    await $(
      chunk5FUZZQ4RValue175,
      `${chunk5FUZZQ4RValue171.verifyMethod ? `Verification: ${chunk5FUZZQ4RValue171.verifyMethod}` : ""}`,
      chunk5FUZZQ4RValue177,
      chunk5FUZZQ4RParam15.labelStyle,
    );
  } else {
    let chunk5FUZZQ4RValue1145 = await $(
      chunk5FUZZQ4RValue175,
      `${chunk5FUZZQ4RValue172.type ? `Type: ${chunk5FUZZQ4RValue172.type}` : ""}`,
      chunk5FUZZQ4RValue177,
      chunk5FUZZQ4RParam15.labelStyle,
    );
    chunk5FUZZQ4RValue177 += chunk5FUZZQ4RValue1145;
    await $(
      chunk5FUZZQ4RValue175,
      `${chunk5FUZZQ4RValue172.docRef ? `Doc Ref: ${chunk5FUZZQ4RValue172.docRef}` : ""}`,
      chunk5FUZZQ4RValue177,
      chunk5FUZZQ4RParam15.labelStyle,
    );
  }
  let chunk5FUZZQ4RValue179 =
      (chunk5FUZZQ4RValue175.node()?.getBBox().width ?? 200) + 20,
    chunk5FUZZQ4RValue180 =
      (chunk5FUZZQ4RValue175.node()?.getBBox().height ?? 200) + 20,
    chunk5FUZZQ4RValue181 = -chunk5FUZZQ4RValue179 / 2,
    _chunk5FUZZQ4RS = -chunk5FUZZQ4RValue180 / 2,
    chunk5FUZZQ4RValue182 = rough.svg(chunk5FUZZQ4RValue175),
    chunk5FUZZQ4RValue183 = chunkX2U36JSPN(chunk5FUZZQ4RParam15, {});
  chunk5FUZZQ4RParam15.look !== "handDrawn" &&
    ((chunk5FUZZQ4RValue183.roughness = 0),
    (chunk5FUZZQ4RValue183.fillStyle = "solid"));
  let chunk5FUZZQ4RValue184 = chunk5FUZZQ4RValue182.rectangle(
      chunk5FUZZQ4RValue181,
      _chunk5FUZZQ4RS,
      chunk5FUZZQ4RValue179,
      chunk5FUZZQ4RValue180,
      chunk5FUZZQ4RValue183,
    ),
    chunk5FUZZQ4RValue185 = chunk5FUZZQ4RValue175.insert(
      () => chunk5FUZZQ4RValue184,
      ":first-child",
    );
  if (
    (chunk5FUZZQ4RValue185
      .attr("class", "basic label-container outer-path")
      .attr("style", nodeStyles),
    borderColorArray?.length)
  ) {
    let chunk5FUZZQ4RValue1213 = chunk5FUZZQ4RParam15.colorIndex ?? 0;
    chunk5FUZZQ4RValue175.attr(
      "data-color-id",
      `color-${chunk5FUZZQ4RValue1213 % borderColorArray.length}`,
    );
  }
  if (
    (chunk5FUZZQ4RValue175
      .selectAll(".label")
      .each(
        (
          chunk5FUZZQ4RParam195,
          chunk5FUZZQ4RParam196,
          chunk5FUZZQ4RParam197,
        ) => {
          let chunk5FUZZQ4RValue970 = Src(
              chunk5FUZZQ4RParam197[chunk5FUZZQ4RParam196],
            ),
            chunk5FUZZQ4RValue971 = chunk5FUZZQ4RValue970.attr("transform"),
            chunk5FUZZQ4RValue972 = 0,
            chunk5FUZZQ4RValue973 = 0;
          if (chunk5FUZZQ4RValue971) {
            let chunk5FUZZQ4RValue1176 = RegExp(
              /translate\(([^,]+),([^)]+)\)/,
            ).exec(chunk5FUZZQ4RValue971);
            chunk5FUZZQ4RValue1176 &&
              ((chunk5FUZZQ4RValue972 = parseFloat(chunk5FUZZQ4RValue1176[1])),
              (chunk5FUZZQ4RValue973 = parseFloat(chunk5FUZZQ4RValue1176[2])));
          }
          let chunk5FUZZQ4RValue974 =
              chunk5FUZZQ4RValue973 - chunk5FUZZQ4RValue180 / 2,
            chunk5FUZZQ4RValue975 = chunk5FUZZQ4RValue181 + 10;
          (chunk5FUZZQ4RParam196 === 0 || chunk5FUZZQ4RParam196 === 1) &&
            (chunk5FUZZQ4RValue975 = chunk5FUZZQ4RValue972);
          chunk5FUZZQ4RValue970.attr(
            "transform",
            `translate(${chunk5FUZZQ4RValue975}, ${chunk5FUZZQ4RValue974 + 20})`,
          );
        },
      ),
    chunk5FUZZQ4RValue177 > chunk5FUZZQ4RValue176 + chunk5FUZZQ4RValue178 + 20)
  ) {
    let chunk5FUZZQ4RValue1021 =
        _chunk5FUZZQ4RS + chunk5FUZZQ4RValue176 + chunk5FUZZQ4RValue178 + 20,
      chunk5FUZZQ4RValue1022;
    if (chunk5FUZZQ4RParam15.look === "neo") {
      let chunk5FUZZQ4RValue1152 = [
        [chunk5FUZZQ4RValue181, chunk5FUZZQ4RValue1021],
        [chunk5FUZZQ4RValue181 + chunk5FUZZQ4RValue179, chunk5FUZZQ4RValue1021],
        [
          chunk5FUZZQ4RValue181 + chunk5FUZZQ4RValue179,
          chunk5FUZZQ4RValue1021 + 0.001,
        ],
        [chunk5FUZZQ4RValue181, chunk5FUZZQ4RValue1021 + 0.001],
      ];
      chunk5FUZZQ4RValue1022 = chunk5FUZZQ4RValue182.polygon(
        chunk5FUZZQ4RValue1152,
        chunk5FUZZQ4RValue183,
      );
    } else
      chunk5FUZZQ4RValue1022 = chunk5FUZZQ4RValue182.line(
        chunk5FUZZQ4RValue181,
        chunk5FUZZQ4RValue1021,
        chunk5FUZZQ4RValue181 + chunk5FUZZQ4RValue179,
        chunk5FUZZQ4RValue1021,
        chunk5FUZZQ4RValue183,
      );
    chunk5FUZZQ4RValue175
      .insert(() => chunk5FUZZQ4RValue1022)
      .attr("class", "divider");
  }
  return (
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam15, chunk5FUZZQ4RValue185),
    (chunk5FUZZQ4RParam15.intersect = function (chunk5FUZZQ4RParam412) {
      return chunk5FUZZQ4RValue12.rect(
        chunk5FUZZQ4RParam15,
        chunk5FUZZQ4RParam412,
      );
    }),
    nodeStyles &&
      chunk5FUZZQ4RParam15.look !== "handDrawn" &&
      (requirementEdgeLabelBackground || borderColorArray?.length) &&
      chunk5FUZZQ4RValue175.selectAll("path").attr("style", nodeStyles),
    chunk5FUZZQ4RValue175
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper78, "requirementBox");
async function $(
  chunk5FUZZQ4RParam167,
  chunk5FUZZQ4RParam168,
  chunk5FUZZQ4RParam169,
  chunk5FUZZQ4RParam170 = "",
) {
  if (chunk5FUZZQ4RParam168 === "") return 0;
  let chunk5FUZZQ4RValue864 = chunk5FUZZQ4RParam167
      .insert("g")
      .attr("class", "label")
      .attr("style", chunk5FUZZQ4RParam170),
    chunk5FUZZQ4RValue865 = _chunkICPOFSXXP(),
    chunk5FUZZQ4RValue866 = chunk5FUZZQ4RValue865.htmlLabels ?? true,
    chunk5FUZZQ4RValue867 = await chunkU2HBQHQKA(
      chunk5FUZZQ4RValue864,
      chunkICPOFSXXU(chunk5PVQY5BWD(chunk5FUZZQ4RParam168)),
      {
        width:
          chunk5PVQY5BWL(chunk5FUZZQ4RParam168, chunk5FUZZQ4RValue865) + 50,
        classes: "markdown-node-label",
        useHtmlLabels: chunk5FUZZQ4RValue866,
        style: chunk5FUZZQ4RParam170,
      },
      chunk5FUZZQ4RValue865,
    ),
    chunk5FUZZQ4RValue868;
  if (chunk5FUZZQ4RValue866) {
    let chunk5FUZZQ4RValue1168 = chunk5FUZZQ4RValue867.children[0],
      chunk5FUZZQ4RValue1169 = Src(chunk5FUZZQ4RValue867);
    chunk5FUZZQ4RValue868 = chunk5FUZZQ4RValue1168.getBoundingClientRect();
    chunk5FUZZQ4RValue1169.attr("width", chunk5FUZZQ4RValue868.width);
    chunk5FUZZQ4RValue1169.attr("height", chunk5FUZZQ4RValue868.height);
  } else {
    let chunk5FUZZQ4RValue1175 = chunk5FUZZQ4RValue867.children[0];
    for (let chunk5FUZZQ4RValue1221 of chunk5FUZZQ4RValue1175.children)
      chunk5FUZZQ4RParam170 &&
        chunk5FUZZQ4RValue1221.setAttribute("style", chunk5FUZZQ4RParam170);
    chunk5FUZZQ4RValue868 = chunk5FUZZQ4RValue867.getBBox();
    chunk5FUZZQ4RValue868.height += 6;
  }
  return (
    chunk5FUZZQ4RValue864.attr(
      "transform",
      `translate(${-chunk5FUZZQ4RValue868.width / 2},${-chunk5FUZZQ4RValue868.height / 2 + chunk5FUZZQ4RParam169})`,
    ),
    chunk5FUZZQ4RValue868.height
  );
}
chunkAGHRB4JFN($, "addText");
var chunk5FUZZQ4RValue39 = chunkAGHRB4JFN((chunk5FUZZQ4RParam271) => {
  switch (chunk5FUZZQ4RParam271) {
    case "Very High":
      return "red";
    case "High":
      return "orange";
    case "Medium":
      return null;
    case "Low":
      return "blue";
    case "Very Low":
      return "lightblue";
  }
}, "colorFromPriority");
async function chunk5FUZZQ4RHelper79(
  chunk5FUZZQ4RParam18,
  chunk5FUZZQ4RParam19,
  { config },
) {
  let { labelStyles, nodeStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam19);
  chunk5FUZZQ4RParam19.labelStyle = labelStyles || "";
  let chunk5FUZZQ4RValue205 = chunk5FUZZQ4RParam19.width;
  chunk5FUZZQ4RParam19.width = (chunk5FUZZQ4RParam19.width ?? 200) - 10;
  let { shapeSvg, bbox, label } = await chunk5FUZZQ4RS(
      chunk5FUZZQ4RParam18,
      chunk5FUZZQ4RParam19,
      chunk5FUZZQ4RValue2(chunk5FUZZQ4RParam19),
    ),
    chunk5FUZZQ4RValue206 = chunk5FUZZQ4RParam19.padding || 10,
    chunk5FUZZQ4RValue207 = "",
    chunk5FUZZQ4RValue208;
  "ticket" in chunk5FUZZQ4RParam19 &&
    chunk5FUZZQ4RParam19.ticket &&
    config?.kanban?.ticketBaseUrl &&
    ((chunk5FUZZQ4RValue207 = config?.kanban?.ticketBaseUrl.replace(
      "#TICKET#",
      chunk5FUZZQ4RParam19.ticket,
    )),
    (chunk5FUZZQ4RValue208 = shapeSvg
      .insert("svg:a", ":first-child")
      .attr("class", "kanban-ticket-link")
      .attr("xlink:href", chunk5FUZZQ4RValue207)
      .attr("target", "_blank")));
  let chunk5FUZZQ4RValue209 = {
      useHtmlLabels: chunk5FUZZQ4RParam19.useHtmlLabels,
      labelStyle: chunk5FUZZQ4RParam19.labelStyle || "",
      width: chunk5FUZZQ4RParam19.width,
      img: chunk5FUZZQ4RParam19.img,
      padding: chunk5FUZZQ4RParam19.padding || 8,
      centerLabel: false,
    },
    _label,
    _bbox;
  chunk5FUZZQ4RValue208
    ? ({ label: _label, bbox: _bbox } = await chunk5FUZZQ4RValue1(
        chunk5FUZZQ4RValue208,
        ("ticket" in chunk5FUZZQ4RParam19 && chunk5FUZZQ4RParam19.ticket) || "",
        chunk5FUZZQ4RValue209,
      ))
    : ({ label: _label, bbox: _bbox } = await chunk5FUZZQ4RValue1(
        shapeSvg,
        ("ticket" in chunk5FUZZQ4RParam19 && chunk5FUZZQ4RParam19.ticket) || "",
        chunk5FUZZQ4RValue209,
      ));
  let { label: __label, bbox: chunk5FUZZQ4RValue210 } =
    await chunk5FUZZQ4RValue1(
      shapeSvg,
      ("assigned" in chunk5FUZZQ4RParam19 && chunk5FUZZQ4RParam19.assigned) ||
        "",
      chunk5FUZZQ4RValue209,
    );
  chunk5FUZZQ4RParam19.width = chunk5FUZZQ4RValue205;
  let chunk5FUZZQ4RValue211 = chunk5FUZZQ4RParam19?.width || 0,
    chunk5FUZZQ4RValue212 =
      Math.max(_bbox.height, chunk5FUZZQ4RValue210.height) / 2,
    chunk5FUZZQ4RValue213 =
      Math.max(bbox.height + 20, chunk5FUZZQ4RParam19?.height || 0) +
      chunk5FUZZQ4RValue212,
    chunk5FUZZQ4RValue214 = -chunk5FUZZQ4RValue211 / 2,
    chunk5FUZZQ4RValue215 = -chunk5FUZZQ4RValue213 / 2;
  label.attr(
    "transform",
    "translate(" +
      (chunk5FUZZQ4RValue206 - chunk5FUZZQ4RValue211 / 2) +
      ", " +
      (-chunk5FUZZQ4RValue212 - bbox.height / 2) +
      ")",
  );
  _label.attr(
    "transform",
    "translate(" +
      (chunk5FUZZQ4RValue206 - chunk5FUZZQ4RValue211 / 2) +
      ", " +
      (-chunk5FUZZQ4RValue212 + bbox.height / 2) +
      ")",
  );
  __label.attr(
    "transform",
    "translate(" +
      (chunk5FUZZQ4RValue206 +
        chunk5FUZZQ4RValue211 / 2 -
        chunk5FUZZQ4RValue210.width -
        20) +
      ", " +
      (-chunk5FUZZQ4RValue212 + bbox.height / 2) +
      ")",
  );
  let chunk5FUZZQ4RValue216,
    { rx, ry } = chunk5FUZZQ4RParam19,
    { cssStyles: _chunk5FUZZQ4RR } = chunk5FUZZQ4RParam19;
  if (chunk5FUZZQ4RParam19.look === "handDrawn") {
    let chunk5FUZZQ4RValue1072 = rough.svg(shapeSvg),
      chunk5FUZZQ4RValue1073 = chunkX2U36JSPN(chunk5FUZZQ4RParam19, {}),
      chunk5FUZZQ4RValue1074 =
        rx || ry
          ? chunk5FUZZQ4RValue1072.path(
              chunk5FUZZQ4RValue4(
                chunk5FUZZQ4RValue214,
                chunk5FUZZQ4RValue215,
                chunk5FUZZQ4RValue211,
                chunk5FUZZQ4RValue213,
                rx || 0,
              ),
              chunk5FUZZQ4RValue1073,
            )
          : chunk5FUZZQ4RValue1072.rectangle(
              chunk5FUZZQ4RValue214,
              chunk5FUZZQ4RValue215,
              chunk5FUZZQ4RValue211,
              chunk5FUZZQ4RValue213,
              chunk5FUZZQ4RValue1073,
            );
    chunk5FUZZQ4RValue216 = shapeSvg.insert(
      () => chunk5FUZZQ4RValue1074,
      ":first-child",
    );
    chunk5FUZZQ4RValue216
      .attr("class", "basic label-container")
      .attr("style", _chunk5FUZZQ4RR || null);
  } else {
    chunk5FUZZQ4RValue216 = shapeSvg.insert("rect", ":first-child");
    chunk5FUZZQ4RValue216
      .attr("class", "basic label-container __APA__")
      .attr("style", nodeStyles)
      .attr("rx", rx ?? 5)
      .attr("ry", ry ?? 5)
      .attr("x", chunk5FUZZQ4RValue214)
      .attr("y", chunk5FUZZQ4RValue215)
      .attr("width", chunk5FUZZQ4RValue211)
      .attr("height", chunk5FUZZQ4RValue213);
    let chunk5FUZZQ4RValue895 =
      "priority" in chunk5FUZZQ4RParam19 && chunk5FUZZQ4RParam19.priority;
    if (chunk5FUZZQ4RValue895) {
      let chunk5FUZZQ4RValue1029 = shapeSvg.append("line"),
        chunk5FUZZQ4RValue1030 = chunk5FUZZQ4RValue214 + 2,
        chunk5FUZZQ4RValue1031 =
          chunk5FUZZQ4RValue215 + Math.floor((rx ?? 0) / 2),
        chunk5FUZZQ4RValue1032 =
          chunk5FUZZQ4RValue215 +
          chunk5FUZZQ4RValue213 -
          Math.floor((rx ?? 0) / 2);
      chunk5FUZZQ4RValue1029
        .attr("x1", chunk5FUZZQ4RValue1030)
        .attr("y1", chunk5FUZZQ4RValue1031)
        .attr("x2", chunk5FUZZQ4RValue1030)
        .attr("y2", chunk5FUZZQ4RValue1032)
        .attr("stroke-width", "4")
        .attr("stroke", chunk5FUZZQ4RValue39(chunk5FUZZQ4RValue895));
    }
  }
  return (
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam19, chunk5FUZZQ4RValue216),
    (chunk5FUZZQ4RParam19.height = chunk5FUZZQ4RValue213),
    (chunk5FUZZQ4RParam19.intersect = function (chunk5FUZZQ4RParam413) {
      return chunk5FUZZQ4RValue12.rect(
        chunk5FUZZQ4RParam19,
        chunk5FUZZQ4RParam413,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper79, "kanbanItem");
async function chunk5FUZZQ4RHelper80(
  chunk5FUZZQ4RParam44,
  chunk5FUZZQ4RParam45,
) {
  let { labelStyles, nodeStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam45);
  chunk5FUZZQ4RParam45.labelStyle = labelStyles;
  let { shapeSvg, bbox, halfPadding, label } = await chunk5FUZZQ4RS(
      chunk5FUZZQ4RParam44,
      chunk5FUZZQ4RParam45,
      chunk5FUZZQ4RValue2(chunk5FUZZQ4RParam45),
    ),
    chunk5FUZZQ4RValue363 = bbox.width + 10 * halfPadding,
    chunk5FUZZQ4RValue364 = bbox.height + 8 * halfPadding,
    chunk5FUZZQ4RValue365 = 0.15 * chunk5FUZZQ4RValue363,
    { cssStyles } = chunk5FUZZQ4RParam45,
    chunk5FUZZQ4RValue366 = bbox.width + 20,
    chunk5FUZZQ4RValue367 = bbox.height + 20,
    chunk5FUZZQ4RValue368 = Math.max(
      chunk5FUZZQ4RValue363,
      chunk5FUZZQ4RValue366,
    ),
    chunk5FUZZQ4RValue369 = Math.max(
      chunk5FUZZQ4RValue364,
      chunk5FUZZQ4RValue367,
    );
  label.attr("transform", `translate(${-bbox.width / 2}, ${-bbox.height / 2})`);
  let chunk5FUZZQ4RValue370,
    chunk5FUZZQ4RValue371 = `M0 0 
    a${chunk5FUZZQ4RValue365},${chunk5FUZZQ4RValue365} 1 0,0 ${chunk5FUZZQ4RValue368 * 0.25},${-1 * chunk5FUZZQ4RValue369 * 0.1}
    a${chunk5FUZZQ4RValue365},${chunk5FUZZQ4RValue365} 1 0,0 ${chunk5FUZZQ4RValue368 * 0.25},0
    a${chunk5FUZZQ4RValue365},${chunk5FUZZQ4RValue365} 1 0,0 ${chunk5FUZZQ4RValue368 * 0.25},0
    a${chunk5FUZZQ4RValue365},${chunk5FUZZQ4RValue365} 1 0,0 ${chunk5FUZZQ4RValue368 * 0.25},${chunk5FUZZQ4RValue369 * 0.1}

    a${chunk5FUZZQ4RValue365},${chunk5FUZZQ4RValue365} 1 0,0 ${chunk5FUZZQ4RValue368 * 0.15},${chunk5FUZZQ4RValue369 * 0.33}
    a${chunk5FUZZQ4RValue365 * 0.8},${chunk5FUZZQ4RValue365 * 0.8} 1 0,0 0,${chunk5FUZZQ4RValue369 * 0.34}
    a${chunk5FUZZQ4RValue365},${chunk5FUZZQ4RValue365} 1 0,0 ${-1 * chunk5FUZZQ4RValue368 * 0.15},${chunk5FUZZQ4RValue369 * 0.33}

    a${chunk5FUZZQ4RValue365},${chunk5FUZZQ4RValue365} 1 0,0 ${-1 * chunk5FUZZQ4RValue368 * 0.25},${chunk5FUZZQ4RValue369 * 0.15}
    a${chunk5FUZZQ4RValue365},${chunk5FUZZQ4RValue365} 1 0,0 ${-1 * chunk5FUZZQ4RValue368 * 0.25},0
    a${chunk5FUZZQ4RValue365},${chunk5FUZZQ4RValue365} 1 0,0 ${-1 * chunk5FUZZQ4RValue368 * 0.25},0
    a${chunk5FUZZQ4RValue365},${chunk5FUZZQ4RValue365} 1 0,0 ${-1 * chunk5FUZZQ4RValue368 * 0.25},${-1 * chunk5FUZZQ4RValue369 * 0.15}

    a${chunk5FUZZQ4RValue365},${chunk5FUZZQ4RValue365} 1 0,0 ${-1 * chunk5FUZZQ4RValue368 * 0.1},${-1 * chunk5FUZZQ4RValue369 * 0.33}
    a${chunk5FUZZQ4RValue365 * 0.8},${chunk5FUZZQ4RValue365 * 0.8} 1 0,0 0,${-1 * chunk5FUZZQ4RValue369 * 0.34}
    a${chunk5FUZZQ4RValue365},${chunk5FUZZQ4RValue365} 1 0,0 ${chunk5FUZZQ4RValue368 * 0.1},${-1 * chunk5FUZZQ4RValue369 * 0.33}
  H0 V0 Z`;
  if (chunk5FUZZQ4RParam45.look === "handDrawn") {
    let chunk5FUZZQ4RValue1139 = rough.svg(shapeSvg),
      chunk5FUZZQ4RValue1140 = chunkX2U36JSPN(chunk5FUZZQ4RParam45, {}),
      chunk5FUZZQ4RValue1141 = chunk5FUZZQ4RValue1139.path(
        chunk5FUZZQ4RValue371,
        chunk5FUZZQ4RValue1140,
      );
    chunk5FUZZQ4RValue370 = shapeSvg.insert(
      () => chunk5FUZZQ4RValue1141,
      ":first-child",
    );
    chunk5FUZZQ4RValue370
      .attr("class", "basic label-container")
      .attr("style", chunk5PVQY5BWF(cssStyles));
  } else
    chunk5FUZZQ4RValue370 = shapeSvg
      .insert("path", ":first-child")
      .attr("class", "basic label-container")
      .attr("style", nodeStyles)
      .attr("d", chunk5FUZZQ4RValue371);
  return (
    chunk5FUZZQ4RValue370.attr(
      "transform",
      `translate(${-chunk5FUZZQ4RValue368 / 2}, ${-chunk5FUZZQ4RValue369 / 2})`,
    ),
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam45, chunk5FUZZQ4RValue370),
    (chunk5FUZZQ4RParam45.calcIntersect = function (
      chunk5FUZZQ4RParam393,
      chunk5FUZZQ4RParam394,
    ) {
      return chunk5FUZZQ4RValue12.rect(
        chunk5FUZZQ4RParam393,
        chunk5FUZZQ4RParam394,
      );
    }),
    (chunk5FUZZQ4RParam45.intersect = function (chunk5FUZZQ4RParam351) {
      return (
        chunkAGHRB4JFR.info(
          "Bang intersect",
          chunk5FUZZQ4RParam45,
          chunk5FUZZQ4RParam351,
        ),
        chunk5FUZZQ4RValue12.rect(chunk5FUZZQ4RParam45, chunk5FUZZQ4RParam351)
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper80, "bang");
async function chunk5FUZZQ4RHelper81(
  chunk5FUZZQ4RParam54,
  chunk5FUZZQ4RParam55,
) {
  let { labelStyles, nodeStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam55);
  chunk5FUZZQ4RParam55.labelStyle = labelStyles;
  let { shapeSvg, bbox, halfPadding, label } = await chunk5FUZZQ4RS(
      chunk5FUZZQ4RParam54,
      chunk5FUZZQ4RParam55,
      chunk5FUZZQ4RValue2(chunk5FUZZQ4RParam55),
    ),
    chunk5FUZZQ4RValue437 = bbox.width + 2 * halfPadding,
    chunk5FUZZQ4RValue438 = bbox.height + 2 * halfPadding,
    chunk5FUZZQ4RValue439 = 0.15 * chunk5FUZZQ4RValue437,
    chunk5FUZZQ4RValue440 = 0.25 * chunk5FUZZQ4RValue437,
    chunk5FUZZQ4RValue441 = 0.35 * chunk5FUZZQ4RValue437,
    chunk5FUZZQ4RValue442 = 0.2 * chunk5FUZZQ4RValue437,
    { cssStyles: chunk5FUZZQ4RValue443 } = chunk5FUZZQ4RParam55,
    chunk5FUZZQ4RValue444,
    chunk5FUZZQ4RValue445 = `M0 0 
    a${chunk5FUZZQ4RValue439},${chunk5FUZZQ4RValue439} 0 0,1 ${chunk5FUZZQ4RValue437 * 0.25},${-1 * chunk5FUZZQ4RValue437 * 0.1}
    a${chunk5FUZZQ4RValue441},${chunk5FUZZQ4RValue441} 1 0,1 ${chunk5FUZZQ4RValue437 * 0.4},${-1 * chunk5FUZZQ4RValue437 * 0.1}
    a${chunk5FUZZQ4RValue440},${chunk5FUZZQ4RValue440} 1 0,1 ${chunk5FUZZQ4RValue437 * 0.35},${chunk5FUZZQ4RValue437 * 0.2}

    a${chunk5FUZZQ4RValue439},${chunk5FUZZQ4RValue439} 1 0,1 ${chunk5FUZZQ4RValue437 * 0.15},${chunk5FUZZQ4RValue438 * 0.35}
    a${chunk5FUZZQ4RValue442},${chunk5FUZZQ4RValue442} 1 0,1 ${-1 * chunk5FUZZQ4RValue437 * 0.15},${chunk5FUZZQ4RValue438 * 0.65}

    a${chunk5FUZZQ4RValue440},${chunk5FUZZQ4RValue439} 1 0,1 ${-1 * chunk5FUZZQ4RValue437 * 0.25},${chunk5FUZZQ4RValue437 * 0.15}
    a${chunk5FUZZQ4RValue441},${chunk5FUZZQ4RValue441} 1 0,1 ${-1 * chunk5FUZZQ4RValue437 * 0.5},0
    a${chunk5FUZZQ4RValue439},${chunk5FUZZQ4RValue439} 1 0,1 ${-1 * chunk5FUZZQ4RValue437 * 0.25},${-1 * chunk5FUZZQ4RValue437 * 0.15}

    a${chunk5FUZZQ4RValue439},${chunk5FUZZQ4RValue439} 1 0,1 ${-1 * chunk5FUZZQ4RValue437 * 0.1},${-1 * chunk5FUZZQ4RValue438 * 0.35}
    a${chunk5FUZZQ4RValue442},${chunk5FUZZQ4RValue442} 1 0,1 ${chunk5FUZZQ4RValue437 * 0.1},${-1 * chunk5FUZZQ4RValue438 * 0.65}
  H0 V0 Z`;
  if (chunk5FUZZQ4RParam55.look === "handDrawn") {
    let chunk5FUZZQ4RValue1142 = rough.svg(shapeSvg),
      chunk5FUZZQ4RValue1143 = chunkX2U36JSPN(chunk5FUZZQ4RParam55, {}),
      chunk5FUZZQ4RValue1144 = chunk5FUZZQ4RValue1142.path(
        chunk5FUZZQ4RValue445,
        chunk5FUZZQ4RValue1143,
      );
    chunk5FUZZQ4RValue444 = shapeSvg.insert(
      () => chunk5FUZZQ4RValue1144,
      ":first-child",
    );
    chunk5FUZZQ4RValue444
      .attr("class", "basic label-container")
      .attr("style", chunk5PVQY5BWF(chunk5FUZZQ4RValue443));
  } else
    chunk5FUZZQ4RValue444 = shapeSvg
      .insert("path", ":first-child")
      .attr("class", "basic label-container")
      .attr("style", nodeStyles)
      .attr("d", chunk5FUZZQ4RValue445);
  return (
    label.attr(
      "transform",
      `translate(${-bbox.width / 2}, ${-bbox.height / 2})`,
    ),
    chunk5FUZZQ4RValue444.attr(
      "transform",
      `translate(${-chunk5FUZZQ4RValue437 / 2}, ${-chunk5FUZZQ4RValue438 / 2})`,
    ),
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam55, chunk5FUZZQ4RValue444),
    (chunk5FUZZQ4RParam55.calcIntersect = function (
      chunk5FUZZQ4RParam395,
      chunk5FUZZQ4RParam396,
    ) {
      return chunk5FUZZQ4RValue12.rect(
        chunk5FUZZQ4RParam395,
        chunk5FUZZQ4RParam396,
      );
    }),
    (chunk5FUZZQ4RParam55.intersect = function (chunk5FUZZQ4RParam350) {
      return (
        chunkAGHRB4JFR.info(
          "Cloud intersect",
          chunk5FUZZQ4RParam55,
          chunk5FUZZQ4RParam350,
        ),
        chunk5FUZZQ4RValue12.rect(chunk5FUZZQ4RParam55, chunk5FUZZQ4RParam350)
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper81, "cloud");
async function chunk5FUZZQ4RHelper82(
  chunk5FUZZQ4RParam87,
  chunk5FUZZQ4RParam88,
) {
  let { labelStyles, nodeStyles } = chunkX2U36JSPI(chunk5FUZZQ4RParam88);
  chunk5FUZZQ4RParam88.labelStyle = labelStyles;
  let { shapeSvg, bbox, halfPadding, label } = await chunk5FUZZQ4RS(
      chunk5FUZZQ4RParam87,
      chunk5FUZZQ4RParam88,
      chunk5FUZZQ4RValue2(chunk5FUZZQ4RParam88),
    ),
    chunk5FUZZQ4RValue622 = bbox.width + 8 * halfPadding,
    chunk5FUZZQ4RValue623 = bbox.height + 2 * halfPadding,
    chunk5FUZZQ4RValue624 =
      chunk5FUZZQ4RParam88.look === "neo"
        ? `
    M${-chunk5FUZZQ4RValue622 / 2} ${chunk5FUZZQ4RValue623 / 2 - 5}
    v${-chunk5FUZZQ4RValue623 + 10}
    q0,-5 5,-5
    h${chunk5FUZZQ4RValue622 - 10}
    q5,0 5,5
    v${chunk5FUZZQ4RValue623 - 5}
    H${-chunk5FUZZQ4RValue622 / 2}
    Z
  `
        : `
    M${-chunk5FUZZQ4RValue622 / 2} ${chunk5FUZZQ4RValue623 / 2 - 5}
    v${-chunk5FUZZQ4RValue623 + 10}
    q0,-5 5,-5
    h${chunk5FUZZQ4RValue622 - 10}
    q5,0 5,5
    v${chunk5FUZZQ4RValue623 - 10}
    q0,5 -5,5
    h${-(chunk5FUZZQ4RValue622 - 10)}
    q-5,0 -5,-5
    Z
  `;
  if (!chunk5FUZZQ4RParam88.domId)
    throw Error(
      `defaultMindmapNode: node "${chunk5FUZZQ4RParam88.id}" is missing a domId \u2014 was render.ts domId prefixing skipped?`,
    );
  let chunk5FUZZQ4RValue625 = shapeSvg
    .append("path")
    .attr("id", chunk5FUZZQ4RParam88.domId)
    .attr("class", "node-bkg node-" + chunk5FUZZQ4RParam88.type)
    .attr("style", nodeStyles)
    .attr("d", chunk5FUZZQ4RValue624);
  return (
    shapeSvg
      .append("line")
      .attr("class", "node-line-")
      .attr("x1", -chunk5FUZZQ4RValue622 / 2)
      .attr("y1", chunk5FUZZQ4RValue623 / 2)
      .attr("x2", chunk5FUZZQ4RValue622 / 2)
      .attr("y2", chunk5FUZZQ4RValue623 / 2),
    label.attr(
      "transform",
      `translate(${-bbox.width / 2}, ${-bbox.height / 2})`,
    ),
    shapeSvg.append(() => label.node()),
    chunk5FUZZQ4RU(chunk5FUZZQ4RParam88, chunk5FUZZQ4RValue625),
    (chunk5FUZZQ4RParam88.calcIntersect = function (
      chunk5FUZZQ4RParam397,
      chunk5FUZZQ4RParam398,
    ) {
      return chunk5FUZZQ4RValue12.rect(
        chunk5FUZZQ4RParam397,
        chunk5FUZZQ4RParam398,
      );
    }),
    (chunk5FUZZQ4RParam88.intersect = function (chunk5FUZZQ4RParam414) {
      return chunk5FUZZQ4RValue12.rect(
        chunk5FUZZQ4RParam88,
        chunk5FUZZQ4RParam414,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper82, "defaultMindmapNode");
async function chunk5FUZZQ4RHelper83(
  chunk5FUZZQ4RParam352,
  chunk5FUZZQ4RParam353,
) {
  return chunk5FUZZQ4RHelper18(chunk5FUZZQ4RParam352, chunk5FUZZQ4RParam353, {
    padding: chunk5FUZZQ4RParam353.padding ?? 0,
  });
}
chunkAGHRB4JFN(chunk5FUZZQ4RHelper83, "mindmapCircle");
var chunk5FUZZQ4RValue40 = [
    {
      semanticName: "Process",
      name: "Rectangle",
      shortName: "rect",
      description: "Standard process shape",
      aliases: ["proc", "process", "rectangle"],
      internalAliases: ["squareRect"],
      handler: chunk5FUZZQ4RHelper57,
    },
    {
      semanticName: "Event",
      name: "Rounded Rectangle",
      shortName: "rounded",
      description: "Represents an event",
      aliases: ["event"],
      internalAliases: ["roundedRect"],
      handler: at,
    },
    {
      semanticName: "Terminal Point",
      name: "Stadium",
      shortName: "stadium",
      description: "Terminal point",
      aliases: ["terminal", "pill"],
      handler: chunk5FUZZQ4RHelper58,
    },
    {
      semanticName: "Subprocess",
      name: "Framed Rectangle",
      shortName: "fr-rect",
      description: "Subprocess",
      aliases: ["subprocess", "subproc", "framed-rectangle", "subroutine"],
      handler: chunk5FUZZQ4RHelper62,
    },
    {
      semanticName: "Database",
      name: "Cylinder",
      shortName: "cyl",
      description: "Database storage",
      aliases: ["db", "database", "cylinder"],
      handler: chunk5FUZZQ4RHelper28,
    },
    {
      semanticName: "Start",
      name: "Circle",
      shortName: "circle",
      description: "Starting point",
      aliases: ["circ"],
      handler: chunk5FUZZQ4RHelper18,
    },
    {
      semanticName: "Bang",
      name: "Bang",
      shortName: "bang",
      description: "Bang",
      aliases: ["bang"],
      handler: chunk5FUZZQ4RHelper80,
    },
    {
      semanticName: "Cloud",
      name: "Cloud",
      shortName: "cloud",
      description: "cloud",
      aliases: ["cloud"],
      handler: chunk5FUZZQ4RHelper81,
    },
    {
      semanticName: "Decision",
      name: "Diamond",
      shortName: "diam",
      description: "Decision-making step",
      aliases: ["decision", "diamond", "question"],
      handler: chunk5FUZZQ4RHelper52,
    },
    {
      semanticName: "Prepare Conditional",
      name: "Hexagon",
      shortName: "hex",
      description: "Preparation or condition step",
      aliases: ["hexagon", "prepare"],
      handler: chunk5FUZZQ4RHelper35,
    },
    {
      semanticName: "Data Input/Output",
      name: "Lean Right",
      shortName: "lean-r",
      description: "Represents input or output",
      aliases: ["lean-right", "in-out"],
      internalAliases: ["lean_right"],
      handler: chunk5FUZZQ4RHelper46,
    },
    {
      semanticName: "Data Input/Output",
      name: "Lean Left",
      shortName: "lean-l",
      description: "Represents output or input",
      aliases: ["lean-left", "out-in"],
      internalAliases: ["lean_left"],
      handler: chunk5FUZZQ4RHelper45,
    },
    {
      semanticName: "Priority Action",
      name: "Trapezoid Base Bottom",
      shortName: "trap-b",
      description: "Priority action",
      aliases: ["priority", "trapezoid-bottom", "trapezoid"],
      handler: chunk5FUZZQ4RHelper66,
    },
    {
      semanticName: "Manual Operation",
      name: "Trapezoid Base Top",
      shortName: "trap-t",
      description: "Represents a manual task",
      aliases: ["manual", "trapezoid-top", "inv-trapezoid"],
      internalAliases: ["inv_trapezoid"],
      handler: chunk5FUZZQ4RHelper42,
    },
    {
      semanticName: "Stop",
      name: "Double Circle",
      shortName: "dbl-circ",
      description: "Represents a stop point",
      aliases: ["double-circle"],
      internalAliases: ["doublecircle"],
      handler: chunk5FUZZQ4RHelper30,
    },
    {
      semanticName: "Text Block",
      name: "Text Block",
      shortName: "text",
      description: "Text block",
      handler: chunk5FUZZQ4RHelper64,
    },
    {
      semanticName: "Card",
      name: "Notched Rectangle",
      shortName: "notch-rect",
      description: "Represents a card",
      aliases: ["card", "notched-rectangle"],
      handler: chunk5FUZZQ4RHelper16,
    },
    {
      semanticName: "Lined/Shaded Process",
      name: "Lined Rectangle",
      shortName: "lin-rect",
      description: "Lined process shape",
      aliases: [
        "lined-rectangle",
        "lined-process",
        "lin-proc",
        "shaded-process",
      ],
      handler: chunk5FUZZQ4RHelper55,
    },
    {
      semanticName: "Start",
      name: "Small Circle",
      shortName: "sm-circ",
      description: "Small starting point",
      aliases: ["start", "small-circle"],
      internalAliases: ["stateStart"],
      handler: chunk5FUZZQ4RHelper61,
    },
    {
      semanticName: "Stop",
      name: "Framed Circle",
      shortName: "fr-circ",
      description: "Stop point",
      aliases: ["stop", "framed-circle"],
      internalAliases: ["stateEnd"],
      handler: chunk5FUZZQ4RHelper60,
    },
    {
      semanticName: "Fork/Join",
      name: "Filled Rectangle",
      shortName: "fork",
      description: "Fork or join in process flow",
      aliases: ["join"],
      internalAliases: ["forkJoin"],
      handler: chunk5FUZZQ4RHelper33,
    },
    {
      semanticName: "Collate",
      name: "Hourglass",
      shortName: "hourglass",
      description: "Represents a collate operation",
      aliases: ["hourglass", "collate"],
      handler: chunk5FUZZQ4RHelper36,
    },
    {
      semanticName: "Comment",
      name: "Curly Brace",
      shortName: "brace",
      description: "Adds a comment",
      aliases: ["comment", "brace-l"],
      handler: chunk5FUZZQ4RHelper22,
    },
    {
      semanticName: "Comment Right",
      name: "Curly Brace",
      shortName: "brace-r",
      description: "Adds a comment",
      handler: chunk5FUZZQ4RHelper24,
    },
    {
      semanticName: "Comment with braces on both sides",
      name: "Curly Braces",
      shortName: "braces",
      description: "Adds a comment",
      handler: chunk5FUZZQ4RHelper26,
    },
    {
      semanticName: "Com Link",
      name: "Lightning Bolt",
      shortName: "bolt",
      description: "Communication link",
      aliases: ["com-link", "lightning-bolt"],
      handler: chunk5FUZZQ4RHelper47,
    },
    {
      semanticName: "Document",
      name: "Document",
      shortName: "doc",
      description: "Represents a document",
      aliases: ["doc", "document"],
      handler: chunk5FUZZQ4RHelper69,
    },
    {
      semanticName: "Delay",
      name: "Half-Rounded Rectangle",
      shortName: "delay",
      description: "Represents a delay",
      aliases: ["half-rounded-rectangle"],
      handler: chunk5FUZZQ4RHelper34,
    },
    {
      semanticName: "Direct Access Storage",
      name: "Horizontal Cylinder",
      shortName: "h-cyl",
      description: "Direct access storage",
      aliases: ["das", "horizontal-cylinder"],
      handler: chunk5FUZZQ4RHelper65,
    },
    {
      semanticName: "Disk Storage",
      name: "Lined Cylinder",
      shortName: "lin-cyl",
      description: "Disk storage",
      aliases: ["disk", "lined-cylinder"],
      handler: chunk5FUZZQ4RHelper48,
    },
    {
      semanticName: "Display",
      name: "Curved Trapezoid",
      shortName: "curv-trap",
      description: "Represents a display",
      aliases: ["curved-trapezoid", "display"],
      handler: chunk5FUZZQ4RHelper27,
    },
    {
      semanticName: "Divided Process",
      name: "Divided Rectangle",
      shortName: "div-rect",
      description: "Divided process shape",
      aliases: ["div-proc", "divided-rectangle", "divided-process"],
      handler: chunk5FUZZQ4RHelper29,
    },
    {
      semanticName: "Extract",
      name: "Triangle",
      shortName: "tri",
      description: "Extraction process",
      aliases: ["extract", "triangle"],
      handler: chunk5FUZZQ4RHelper68,
    },
    {
      semanticName: "Internal Storage",
      name: "Window Pane",
      shortName: "win-pane",
      description: "Internal storage",
      aliases: ["internal-storage", "window-pane"],
      handler: chunk5FUZZQ4RHelper71,
    },
    {
      semanticName: "Junction",
      name: "Filled Circle",
      shortName: "f-circ",
      description: "Junction point",
      aliases: ["junction", "filled-circle"],
      handler: chunk5FUZZQ4RHelper31,
    },
    {
      semanticName: "Loop Limit",
      name: "Trapezoidal Pentagon",
      shortName: "notch-pent",
      description: "Loop limit step",
      aliases: ["loop-limit", "notched-pentagon"],
      handler: chunk5FUZZQ4RHelper67,
    },
    {
      semanticName: "Manual File",
      name: "Flipped Triangle",
      shortName: "flip-tri",
      description: "Manual file operation",
      aliases: ["manual-file", "flipped-triangle"],
      handler: chunk5FUZZQ4RHelper32,
    },
    {
      semanticName: "Manual Input",
      name: "Sloped Rectangle",
      shortName: "sl-rect",
      description: "Manual input step",
      aliases: ["manual-input", "sloped-rectangle"],
      handler: chunk5FUZZQ4RHelper56,
    },
    {
      semanticName: "Multi-Document",
      name: "Stacked Document",
      shortName: "docs",
      description: "Multiple documents",
      aliases: ["documents", "st-doc", "stacked-document"],
      handler: $e,
    },
    {
      semanticName: "Multi-Process",
      name: "Stacked Rectangle",
      shortName: "st-rect",
      description: "Multiple processes",
      aliases: ["procs", "processes", "stacked-rectangle"],
      handler: chunk5FUZZQ4RHelper50,
    },
    {
      semanticName: "Stored Data",
      name: "Bow Tie Rectangle",
      shortName: "bow-rect",
      description: "Stored data",
      aliases: ["stored-data", "bow-tie-rectangle"],
      handler: chunk5FUZZQ4RHelper14,
    },
    {
      semanticName: "Summary",
      name: "Crossed Circle",
      shortName: "cross-circ",
      description: "Summary",
      aliases: ["summary", "crossed-circle"],
      handler: chunk5FUZZQ4RHelper20,
    },
    {
      semanticName: "Tagged Document",
      name: "Tagged Document",
      shortName: "tag-doc",
      description: "Tagged document",
      aliases: ["tag-doc", "tagged-document"],
      handler: _t,
    },
    {
      semanticName: "Tagged Process",
      name: "Tagged Rectangle",
      shortName: "tag-rect",
      description: "Tagged process",
      aliases: ["tagged-rectangle", "tag-proc", "tagged-process"],
      handler: chunk5FUZZQ4RHelper63,
    },
    {
      semanticName: "Paper Tape",
      name: "Flag",
      shortName: "flag",
      description: "Paper tape",
      aliases: ["paper-tape"],
      handler: chunk5FUZZQ4RHelper70,
    },
    {
      semanticName: "Odd",
      name: "Odd",
      shortName: "odd",
      description: "Odd shape",
      internalAliases: ["rect_left_inv_arrow"],
      handler: chunk5FUZZQ4RHelper53,
    },
    {
      semanticName: "Lined Document",
      name: "Lined Document",
      shortName: "lin-doc",
      description: "Lined document",
      aliases: ["lined-document"],
      handler: chunk5FUZZQ4RHelper49,
    },
  ],
  chunk5FUZZQ4RValue41 = chunkAGHRB4JFN(() => {
    let chunk5FUZZQ4RValue869 = {
        state: chunk5FUZZQ4RHelper59,
        choice: chunk5FUZZQ4RHelper17,
        note: chunk5FUZZQ4RHelper51,
        rectWithTitle: chunk5FUZZQ4RHelper54,
        labelRect: chunk5FUZZQ4RHelper44,
        iconSquare: chunk5FUZZQ4RHelper40,
        iconCircle: chunk5FUZZQ4RHelper38,
        icon: chunk5FUZZQ4RHelper37,
        iconRounded: chunk5FUZZQ4RHelper39,
        imageSquare: chunk5FUZZQ4RHelper41,
        anchor: chunk5FUZZQ4RHelper11,
        kanbanItem: chunk5FUZZQ4RHelper79,
        mindmapCircle: chunk5FUZZQ4RHelper83,
        defaultMindmapNode: chunk5FUZZQ4RHelper82,
        classBox: chunk5FUZZQ4RHelper77,
        erBox: chunk5FUZZQ4RHelper72,
        requirementBox: chunk5FUZZQ4RHelper78,
      },
      chunk5FUZZQ4RValue870 = [
        ...Object.entries(chunk5FUZZQ4RValue869),
        ...chunk5FUZZQ4RValue40.flatMap((item) =>
          [
            item.shortName,
            ...("aliases" in item ? item.aliases : []),
            ...("internalAliases" in item ? item.internalAliases : []),
          ].map((_item) => [_item, item.handler]),
        ),
      ];
    return Object.fromEntries(chunk5FUZZQ4RValue870);
  }, "generateShapeMap")();
function chunk5FUZZQ4RO(chunk5FUZZQ4RParam422) {
  return chunk5FUZZQ4RParam422 in chunk5FUZZQ4RValue41;
}
chunkAGHRB4JFN(chunk5FUZZQ4RO, "isValidShape");
var chunk5FUZZQ4RValue42 = new Map();
async function chunk5FUZZQ4RA(
  chunk5FUZZQ4RParam163,
  chunk5FUZZQ4RParam164,
  chunk5FUZZQ4RParam165,
) {
  let chunk5FUZZQ4RValue861, chunk5FUZZQ4RValue862;
  chunk5FUZZQ4RParam164.shape === "rect" &&
    (chunk5FUZZQ4RParam164.rx && chunk5FUZZQ4RParam164.ry
      ? (chunk5FUZZQ4RParam164.shape = "roundedRect")
      : (chunk5FUZZQ4RParam164.shape = "squareRect"));
  let chunk5FUZZQ4RValue863 = chunk5FUZZQ4RParam164.shape
    ? chunk5FUZZQ4RValue41[chunk5FUZZQ4RParam164.shape]
    : undefined;
  if (!chunk5FUZZQ4RValue863)
    throw Error(
      `No such shape: ${chunk5FUZZQ4RParam164.shape}. Please check your syntax.`,
    );
  if (chunk5FUZZQ4RParam164.link) {
    let chunk5FUZZQ4RValue1062;
    chunk5FUZZQ4RParam165.config.securityLevel === "sandbox"
      ? (chunk5FUZZQ4RValue1062 = "_top")
      : chunk5FUZZQ4RParam164.linkTarget &&
        (chunk5FUZZQ4RValue1062 = chunk5FUZZQ4RParam164.linkTarget || "_blank");
    chunk5FUZZQ4RValue861 = chunk5FUZZQ4RParam163
      .insert("svg:a")
      .attr("xlink:href", chunk5FUZZQ4RParam164.link)
      .attr("target", chunk5FUZZQ4RValue1062 ?? null);
    chunk5FUZZQ4RValue862 = await chunk5FUZZQ4RValue863(
      chunk5FUZZQ4RValue861,
      chunk5FUZZQ4RParam164,
      chunk5FUZZQ4RParam165,
    );
  } else {
    chunk5FUZZQ4RValue862 = await chunk5FUZZQ4RValue863(
      chunk5FUZZQ4RParam163,
      chunk5FUZZQ4RParam164,
      chunk5FUZZQ4RParam165,
    );
    chunk5FUZZQ4RValue861 = chunk5FUZZQ4RValue862;
  }
  return (
    chunk5FUZZQ4RValue861.attr(
      "data-look",
      chunk5PVQY5BWF(chunk5FUZZQ4RParam164.look),
    ),
    chunk5FUZZQ4RParam164.tooltip &&
      chunk5FUZZQ4RValue862.attr("title", chunk5FUZZQ4RParam164.tooltip),
    chunk5FUZZQ4RValue42.set(chunk5FUZZQ4RParam164.id, chunk5FUZZQ4RValue861),
    chunk5FUZZQ4RParam164.haveCallback &&
      chunk5FUZZQ4RValue861.attr(
        "class",
        chunk5FUZZQ4RValue861.attr("class") + " clickable",
      ),
    chunk5FUZZQ4RValue861
  );
}
chunkAGHRB4JFN(chunk5FUZZQ4RA, "insertNode");
export const chunk5FUZZQ4RN = chunkAGHRB4JFN(() => {
  chunk5FUZZQ4RValue42.clear();
}, "clear");
export const chunk5FUZZQ4RL = chunkAGHRB4JFN(
  (chunk5FUZZQ4RParam423, chunk5FUZZQ4RParam424) => {
    chunk5FUZZQ4RValue42.set(chunk5FUZZQ4RParam424.id, chunk5FUZZQ4RParam423);
  },
  "setNodeElem",
);
export const chunk5FUZZQ4RC = chunkAGHRB4JFN((chunk5FUZZQ4RParam189) => {
  let chunk5FUZZQ4RValue924 = chunk5FUZZQ4RValue42.get(
    chunk5FUZZQ4RParam189.id,
  );
  chunkAGHRB4JFR.trace(
    "Transforming node",
    chunk5FUZZQ4RParam189.diff,
    chunk5FUZZQ4RParam189,
    "translate(" +
      (chunk5FUZZQ4RParam189.x - chunk5FUZZQ4RParam189.width / 2 - 5) +
      ", " +
      chunk5FUZZQ4RParam189.width / 2 +
      ")",
  );
  let chunk5FUZZQ4RValue925 = chunk5FUZZQ4RParam189.diff || 0;
  return (
    chunk5FUZZQ4RParam189.clusterNode
      ? chunk5FUZZQ4RValue924.attr(
          "transform",
          "translate(" +
            (chunk5FUZZQ4RParam189.x +
              chunk5FUZZQ4RValue925 -
              chunk5FUZZQ4RParam189.width / 2) +
            ", " +
            (chunk5FUZZQ4RParam189.y - chunk5FUZZQ4RParam189.height / 2 - 8) +
            ")",
        )
      : chunk5FUZZQ4RValue924.attr(
          "transform",
          "translate(" +
            chunk5FUZZQ4RParam189.x +
            ", " +
            chunk5FUZZQ4RParam189.y +
            ")",
        ),
    chunk5FUZZQ4RValue925
  );
}, "positionNode");
export function initChunk5FUZZQ4R(): void {}
export {
  chunk5FUZZQ4RA,
  chunk5FUZZQ4RO,
  chunk5FUZZQ4RR,
  chunk5FUZZQ4RS,
  chunk5FUZZQ4RU,
};
