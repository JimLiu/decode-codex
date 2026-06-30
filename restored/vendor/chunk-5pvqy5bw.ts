// Restored from ref/webview/assets/chunk-5PVQY5BW-CsieDbRK.js
// Chunk5PVQY5BW chunk restored from the Codex webview bundle.
import { baseForR } from "./lodash-base-for";
import { Src } from "./roughjs-geometry";
import { monotoneN, monotoneR, monotoneT } from "./d3-curve-monotone";
import {
  stepA,
  stepC,
  stepD,
  stepF,
  stepG,
  stepH,
  stepI,
  stepL,
  stepM,
  stepN,
  stepO,
  stepP,
  stepR,
  stepS,
  stepT,
  stepU,
  stepUnderscore,
} from "./d3-shape-curves";
import { mergeT } from "./lodash-merge";
import { dist } from "./entities-escape";
import { chunkAGHRB4JFN, chunkAGHRB4JFR } from "./dayjs-core-alt";
import {
  _chunkICPOFSXXW,
  _chunkICPOFSXXG,
  chunkICPOFSXXD,
  chunkICPOFSXXM,
  _chunkICPOFSXXO,
} from "./chunk-icpofsxx";
var chunk5PVQY5BWValue1 = dist(),
  chunk5PVQY5BWValue2 = {
    curveBasis: stepH,
    curveBasisClosed: stepM,
    curveBasisOpen: stepP,
    curveBumpX: stepG,
    curveBumpY: stepUnderscore,
    curveBundle: stepF,
    curveCardinalClosed: stepU,
    curveCardinalOpen: stepL,
    curveCardinal: stepD,
    curveCatmullRomClosed: stepS,
    curveCatmullRomOpen: stepO,
    curveCatmullRom: stepC,
    curveLinear: monotoneR,
    curveLinearClosed: stepA,
    curveMonotoneX: monotoneT,
    curveMonotoneY: monotoneN,
    curveNatural: stepI,
    curveStep: stepR,
    curveStepAfter: stepT,
    curveStepBefore: stepN,
  },
  chunk5PVQY5BWValue3 =
    /\s*(?:(\w+)(?=:):|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi,
  chunk5PVQY5BWValue4 = chunkAGHRB4JFN(function (
    chunk5PVQY5BWParam20,
    chunk5PVQY5BWParam21,
  ) {
    let chunk5PVQY5BWValue55 = chunk5PVQY5BWValue5(
        chunk5PVQY5BWParam20,
        /(?:init\b)|(?:initialize\b)/,
      ),
      chunk5PVQY5BWValue56 = {};
    if (Array.isArray(chunk5PVQY5BWValue55)) {
      let chunk5PVQY5BWValue93 = chunk5PVQY5BWValue55.map((item) => item.args);
      _chunkICPOFSXXG(chunk5PVQY5BWValue93);
      chunk5PVQY5BWValue56 = chunkICPOFSXXM(chunk5PVQY5BWValue56, [
        ...chunk5PVQY5BWValue93,
      ]);
    } else chunk5PVQY5BWValue56 = chunk5PVQY5BWValue55.args;
    if (!chunk5PVQY5BWValue56) return;
    let chunk5PVQY5BWValue57 = _chunkICPOFSXXW(
      chunk5PVQY5BWParam20,
      chunk5PVQY5BWParam21,
    );
    return (
      chunk5PVQY5BWValue56.config !== undefined &&
        (chunk5PVQY5BWValue57 === "flowchart-v2" &&
          (chunk5PVQY5BWValue57 = "flowchart"),
        (chunk5PVQY5BWValue56[chunk5PVQY5BWValue57] =
          chunk5PVQY5BWValue56.config),
        delete chunk5PVQY5BWValue56.config),
      chunk5PVQY5BWValue56
    );
  }, "detectInit"),
  chunk5PVQY5BWValue5 = chunkAGHRB4JFN(function (
    chunk5PVQY5BWParam3,
    chunk5PVQY5BWParam4 = null,
  ) {
    try {
      let chunk5PVQY5BWValue34 = RegExp(
        `[%]{2}(?![{]${chunk5PVQY5BWValue3.source})(?=[}][%]{2}).*
`,
        "ig",
      );
      chunk5PVQY5BWParam3 = chunk5PVQY5BWParam3
        .trim()
        .replace(chunk5PVQY5BWValue34, "")
        .replace(/'/gm, '"');
      chunkAGHRB4JFR.debug(
        `Detecting diagram directive${chunk5PVQY5BWParam4 === null ? "" : " type:" + chunk5PVQY5BWParam4} based on the text:${chunk5PVQY5BWParam3}`,
      );
      let chunk5PVQY5BWValue35,
        chunk5PVQY5BWValue36 = [];
      for (
        ;
        (chunk5PVQY5BWValue35 = chunkICPOFSXXD.exec(chunk5PVQY5BWParam3)) !==
        null;

      )
        if (
          (chunk5PVQY5BWValue35.index === chunkICPOFSXXD.lastIndex &&
            chunkICPOFSXXD.lastIndex++,
          (chunk5PVQY5BWValue35 && !chunk5PVQY5BWParam4) ||
            (chunk5PVQY5BWParam4 &&
              chunk5PVQY5BWValue35[1]?.match(chunk5PVQY5BWParam4)) ||
            (chunk5PVQY5BWParam4 &&
              chunk5PVQY5BWValue35[2]?.match(chunk5PVQY5BWParam4)))
        ) {
          let chunk5PVQY5BWValue80 = chunk5PVQY5BWValue35[1]
              ? chunk5PVQY5BWValue35[1]
              : chunk5PVQY5BWValue35[2],
            chunk5PVQY5BWValue81 = chunk5PVQY5BWValue35[3]
              ? chunk5PVQY5BWValue35[3].trim()
              : chunk5PVQY5BWValue35[4]
                ? JSON.parse(chunk5PVQY5BWValue35[4].trim())
                : null;
          chunk5PVQY5BWValue36.push({
            type: chunk5PVQY5BWValue80,
            args: chunk5PVQY5BWValue81,
          });
        }
      return chunk5PVQY5BWValue36.length === 0
        ? {
            type: chunk5PVQY5BWParam3,
            args: null,
          }
        : chunk5PVQY5BWValue36.length === 1
          ? chunk5PVQY5BWValue36[0]
          : chunk5PVQY5BWValue36;
    } catch (chunk5PVQY5BWValue79) {
      return (
        chunkAGHRB4JFR.error(
          `ERROR: ${chunk5PVQY5BWValue79.message} - Unable to parse directive type: '${chunk5PVQY5BWParam4}' based on the text: '${chunk5PVQY5BWParam3}'`,
        ),
        {
          type: undefined,
          args: null,
        }
      );
    }
  }, "detectDirective"),
  chunk5PVQY5BWValue6 = chunkAGHRB4JFN(function (
    chunk5PVQY5BWParam46,
    chunk5PVQY5BWParam47,
  ) {
    for (let [
      chunk5PVQY5BWValue95,
      chunk5PVQY5BWValue96,
    ] of chunk5PVQY5BWParam47.entries())
      if (chunk5PVQY5BWValue96.match(chunk5PVQY5BWParam46))
        return chunk5PVQY5BWValue95;
    return -1;
  }, "isSubstringInArray");
export const chunk5PVQY5BWM = chunkAGHRB4JFN(function (chunk5PVQY5BWParam67) {
  return chunk5PVQY5BWParam67.replace(chunkICPOFSXXD, "");
}, "removeDirectives");
function chunk5PVQY5BWU(chunk5PVQY5BWParam48, chunk5PVQY5BWParam49) {
  return chunk5PVQY5BWParam48
    ? (chunk5PVQY5BWValue2[
        `curve${chunk5PVQY5BWParam48.charAt(0).toUpperCase() + chunk5PVQY5BWParam48.slice(1)}`
      ] ?? chunk5PVQY5BWParam49)
    : chunk5PVQY5BWParam49;
}
chunkAGHRB4JFN(chunk5PVQY5BWU, "interpolateToCurve");
function chunk5PVQY5BWHelper1(chunk5PVQY5BWParam44, chunk5PVQY5BWParam45) {
  let chunk5PVQY5BWValue91 = chunk5PVQY5BWParam44.trim();
  if (chunk5PVQY5BWValue91)
    return chunk5PVQY5BWParam45.securityLevel === "loose"
      ? chunk5PVQY5BWValue91
      : chunk5PVQY5BWValue1.sanitizeUrl(chunk5PVQY5BWValue91);
}
chunkAGHRB4JFN(chunk5PVQY5BWHelper1, "formatUrl");
var chunk5PVQY5BWValue7 = chunkAGHRB4JFN(
  (chunk5PVQY5BWParam30, ...chunk5PVQY5BWParam31) => {
    let chunk5PVQY5BWValue68 = chunk5PVQY5BWParam30.split("."),
      chunk5PVQY5BWValue69 = chunk5PVQY5BWValue68.length - 1,
      chunk5PVQY5BWValue70 = chunk5PVQY5BWValue68[chunk5PVQY5BWValue69],
      chunk5PVQY5BWValue71 = window;
    for (
      let chunk5PVQY5BWValue88 = 0;
      chunk5PVQY5BWValue88 < chunk5PVQY5BWValue69;
      chunk5PVQY5BWValue88++
    )
      if (
        ((chunk5PVQY5BWValue71 =
          chunk5PVQY5BWValue71[chunk5PVQY5BWValue68[chunk5PVQY5BWValue88]]),
        !chunk5PVQY5BWValue71)
      ) {
        chunkAGHRB4JFR.error(
          `Function name: ${chunk5PVQY5BWParam30} not found in window`,
        );
        return;
      }
    chunk5PVQY5BWValue71[chunk5PVQY5BWValue70](...chunk5PVQY5BWParam31);
  },
  "runFunc",
);
function chunk5PVQY5BWHelper2(chunk5PVQY5BWParam51, chunk5PVQY5BWParam52) {
  return !chunk5PVQY5BWParam51 || !chunk5PVQY5BWParam52
    ? 0
    : Math.sqrt(
        (chunk5PVQY5BWParam52.x - chunk5PVQY5BWParam51.x) ** 2 +
          (chunk5PVQY5BWParam52.y - chunk5PVQY5BWParam51.y) ** 2,
      );
}
chunkAGHRB4JFN(chunk5PVQY5BWHelper2, "distance");
function chunk5PVQY5BWHelper3(chunk5PVQY5BWParam40) {
  let chunk5PVQY5BWValue89,
    chunk5PVQY5BWValue90 = 0;
  return (
    chunk5PVQY5BWParam40.forEach((item) => {
      chunk5PVQY5BWValue90 += chunk5PVQY5BWHelper2(item, chunk5PVQY5BWValue89);
      chunk5PVQY5BWValue89 = item;
    }),
    chunk5PVQY5BWValue9(chunk5PVQY5BWParam40, chunk5PVQY5BWValue90 / 2)
  );
}
chunkAGHRB4JFN(chunk5PVQY5BWHelper3, "traverseEdge");
function chunk5PVQY5BWHelper4(chunk5PVQY5BWParam66) {
  return chunk5PVQY5BWParam66.length === 1
    ? chunk5PVQY5BWParam66[0]
    : chunk5PVQY5BWHelper3(chunk5PVQY5BWParam66);
}
chunkAGHRB4JFN(chunk5PVQY5BWHelper4, "calcLabelPosition");
var chunk5PVQY5BWValue8 = chunkAGHRB4JFN(
    (chunk5PVQY5BWParam60, chunk5PVQY5BWParam61 = 2) => {
      let chunk5PVQY5BWValue94 = 10 ** chunk5PVQY5BWParam61;
      return (
        Math.round(chunk5PVQY5BWParam60 * chunk5PVQY5BWValue94) /
        chunk5PVQY5BWValue94
      );
    },
    "roundNumber",
  ),
  chunk5PVQY5BWValue9 = chunkAGHRB4JFN(
    (chunk5PVQY5BWParam13, chunk5PVQY5BWParam14) => {
      let chunk5PVQY5BWValue48,
        chunk5PVQY5BWValue49 = chunk5PVQY5BWParam14;
      for (let chunk5PVQY5BWValue54 of chunk5PVQY5BWParam13) {
        if (chunk5PVQY5BWValue48) {
          let chunk5PVQY5BWValue61 = chunk5PVQY5BWHelper2(
            chunk5PVQY5BWValue54,
            chunk5PVQY5BWValue48,
          );
          if (chunk5PVQY5BWValue61 === 0) return chunk5PVQY5BWValue48;
          if (chunk5PVQY5BWValue61 < chunk5PVQY5BWValue49)
            chunk5PVQY5BWValue49 -= chunk5PVQY5BWValue61;
          else {
            let chunk5PVQY5BWValue66 =
              chunk5PVQY5BWValue49 / chunk5PVQY5BWValue61;
            if (chunk5PVQY5BWValue66 <= 0) return chunk5PVQY5BWValue48;
            if (chunk5PVQY5BWValue66 >= 1)
              return {
                x: chunk5PVQY5BWValue54.x,
                y: chunk5PVQY5BWValue54.y,
              };
            if (chunk5PVQY5BWValue66 > 0 && chunk5PVQY5BWValue66 < 1)
              return {
                x: chunk5PVQY5BWValue8(
                  (1 - chunk5PVQY5BWValue66) * chunk5PVQY5BWValue48.x +
                    chunk5PVQY5BWValue66 * chunk5PVQY5BWValue54.x,
                  5,
                ),
                y: chunk5PVQY5BWValue8(
                  (1 - chunk5PVQY5BWValue66) * chunk5PVQY5BWValue48.y +
                    chunk5PVQY5BWValue66 * chunk5PVQY5BWValue54.y,
                  5,
                ),
              };
          }
        }
        chunk5PVQY5BWValue48 = chunk5PVQY5BWValue54;
      }
      throw Error("Could not find a suitable point for the given distance");
    },
    "calculatePoint",
  ),
  chunk5PVQY5BWValue10 = chunkAGHRB4JFN(
    (chunk5PVQY5BWParam22, chunk5PVQY5BWParam23, chunk5PVQY5BWParam24) => {
      chunkAGHRB4JFR.info(`our points ${JSON.stringify(chunk5PVQY5BWParam23)}`);
      chunk5PVQY5BWParam23[0] !== chunk5PVQY5BWParam24 &&
        (chunk5PVQY5BWParam23 = chunk5PVQY5BWParam23.reverse());
      let chunk5PVQY5BWValue62 = chunk5PVQY5BWValue9(chunk5PVQY5BWParam23, 25),
        chunk5PVQY5BWValue63 = chunk5PVQY5BWParam22 ? 10 : 5,
        chunk5PVQY5BWValue64 = Math.atan2(
          chunk5PVQY5BWParam23[0].y - chunk5PVQY5BWValue62.y,
          chunk5PVQY5BWParam23[0].x - chunk5PVQY5BWValue62.x,
        ),
        chunk5PVQY5BWValue65 = {
          x: 0,
          y: 0,
        };
      return (
        (chunk5PVQY5BWValue65.x =
          Math.sin(chunk5PVQY5BWValue64) * chunk5PVQY5BWValue63 +
          (chunk5PVQY5BWParam23[0].x + chunk5PVQY5BWValue62.x) / 2),
        (chunk5PVQY5BWValue65.y =
          -Math.cos(chunk5PVQY5BWValue64) * chunk5PVQY5BWValue63 +
          (chunk5PVQY5BWParam23[0].y + chunk5PVQY5BWValue62.y) / 2),
        chunk5PVQY5BWValue65
      );
    },
    "calcCardinalityPosition",
  );
function chunk5PVQY5BWHelper5(
  chunk5PVQY5BWParam5,
  chunk5PVQY5BWParam6,
  chunk5PVQY5BWParam7,
) {
  let chunk5PVQY5BWValue26 = structuredClone(chunk5PVQY5BWParam7);
  chunkAGHRB4JFR.info("our points", chunk5PVQY5BWValue26);
  chunk5PVQY5BWParam6 !== "start_left" &&
    chunk5PVQY5BWParam6 !== "start_right" &&
    chunk5PVQY5BWValue26.reverse();
  let chunk5PVQY5BWValue27 = chunk5PVQY5BWValue9(
      chunk5PVQY5BWValue26,
      25 + chunk5PVQY5BWParam5,
    ),
    chunk5PVQY5BWValue28 = 10 + chunk5PVQY5BWParam5 * 0.5,
    chunk5PVQY5BWValue29 = Math.atan2(
      chunk5PVQY5BWValue26[0].y - chunk5PVQY5BWValue27.y,
      chunk5PVQY5BWValue26[0].x - chunk5PVQY5BWValue27.x,
    ),
    chunk5PVQY5BWValue30 = {
      x: 0,
      y: 0,
    };
  return (
    chunk5PVQY5BWParam6 === "start_left"
      ? ((chunk5PVQY5BWValue30.x =
          Math.sin(chunk5PVQY5BWValue29 + Math.PI) * chunk5PVQY5BWValue28 +
          (chunk5PVQY5BWValue26[0].x + chunk5PVQY5BWValue27.x) / 2),
        (chunk5PVQY5BWValue30.y =
          -Math.cos(chunk5PVQY5BWValue29 + Math.PI) * chunk5PVQY5BWValue28 +
          (chunk5PVQY5BWValue26[0].y + chunk5PVQY5BWValue27.y) / 2))
      : chunk5PVQY5BWParam6 === "end_right"
        ? ((chunk5PVQY5BWValue30.x =
            Math.sin(chunk5PVQY5BWValue29 - Math.PI) * chunk5PVQY5BWValue28 +
            (chunk5PVQY5BWValue26[0].x + chunk5PVQY5BWValue27.x) / 2 -
            5),
          (chunk5PVQY5BWValue30.y =
            -Math.cos(chunk5PVQY5BWValue29 - Math.PI) * chunk5PVQY5BWValue28 +
            (chunk5PVQY5BWValue26[0].y + chunk5PVQY5BWValue27.y) / 2 -
            5))
        : chunk5PVQY5BWParam6 === "end_left"
          ? ((chunk5PVQY5BWValue30.x =
              Math.sin(chunk5PVQY5BWValue29) * chunk5PVQY5BWValue28 +
              (chunk5PVQY5BWValue26[0].x + chunk5PVQY5BWValue27.x) / 2 -
              5),
            (chunk5PVQY5BWValue30.y =
              -Math.cos(chunk5PVQY5BWValue29) * chunk5PVQY5BWValue28 +
              (chunk5PVQY5BWValue26[0].y + chunk5PVQY5BWValue27.y) / 2 -
              5))
          : ((chunk5PVQY5BWValue30.x =
              Math.sin(chunk5PVQY5BWValue29) * chunk5PVQY5BWValue28 +
              (chunk5PVQY5BWValue26[0].x + chunk5PVQY5BWValue27.x) / 2),
            (chunk5PVQY5BWValue30.y =
              -Math.cos(chunk5PVQY5BWValue29) * chunk5PVQY5BWValue28 +
              (chunk5PVQY5BWValue26[0].y + chunk5PVQY5BWValue27.y) / 2)),
    chunk5PVQY5BWValue30
  );
}
chunkAGHRB4JFN(chunk5PVQY5BWHelper5, "calcTerminalLabelPosition");
function chunk5PVQY5BWC(chunk5PVQY5BWParam32) {
  let chunk5PVQY5BWValue72 = "",
    chunk5PVQY5BWValue73 = "";
  for (let chunk5PVQY5BWValue82 of chunk5PVQY5BWParam32)
    chunk5PVQY5BWValue82 !== undefined &&
      (chunk5PVQY5BWValue82.startsWith("color:") ||
      chunk5PVQY5BWValue82.startsWith("text-align:")
        ? (chunk5PVQY5BWValue73 =
            chunk5PVQY5BWValue73 + chunk5PVQY5BWValue82 + ";")
        : (chunk5PVQY5BWValue72 =
            chunk5PVQY5BWValue72 + chunk5PVQY5BWValue82 + ";"));
  return {
    style: chunk5PVQY5BWValue72,
    labelStyle: chunk5PVQY5BWValue73,
  };
}
chunkAGHRB4JFN(chunk5PVQY5BWC, "getStylesFromArray");
var chunk5PVQY5BWValue11 = 0,
  chunk5PVQY5BWO = chunkAGHRB4JFN(
    () => (
      chunk5PVQY5BWValue11++,
      "id-" +
        Math.random().toString(36).substr(2, 12) +
        "-" +
        chunk5PVQY5BWValue11
    ),
    "generateId",
  );
function chunk5PVQY5BWHelper6(chunk5PVQY5BWParam38) {
  let chunk5PVQY5BWValue86 = "";
  for (
    let chunk5PVQY5BWValue92 = 0;
    chunk5PVQY5BWValue92 < chunk5PVQY5BWParam38;
    chunk5PVQY5BWValue92++
  )
    chunk5PVQY5BWValue86 += "0123456789abcdef".charAt(
      Math.floor(Math.random() * 16),
    );
  return chunk5PVQY5BWValue86;
}
chunkAGHRB4JFN(chunk5PVQY5BWHelper6, "makeRandomHex");
var chunk5PVQY5BWP = chunkAGHRB4JFN(
    (chunk5PVQY5BWParam77) => chunk5PVQY5BWHelper6(chunk5PVQY5BWParam77.length),
    "random",
  ),
  chunk5PVQY5BWValue12 = chunkAGHRB4JFN(function () {
    return {
      x: 0,
      y: 0,
      fill: undefined,
      anchor: "start",
      style: "#666",
      width: 100,
      height: 100,
      textMargin: 0,
      rx: 0,
      ry: 0,
      valign: undefined,
      text: "",
    };
  }, "getTextObj"),
  chunk5PVQY5BWValue13 = chunkAGHRB4JFN(function (
    chunk5PVQY5BWParam11,
    chunk5PVQY5BWParam12,
  ) {
    let chunk5PVQY5BWValue41 = chunk5PVQY5BWParam12.text.replace(
        _chunkICPOFSXXO.lineBreakRegex,
        " ",
      ),
      [, chunk5PVQY5BWValue42] = chunk5PVQY5BWF(chunk5PVQY5BWParam12.fontSize),
      chunk5PVQY5BWValue43 = chunk5PVQY5BWParam11.append("text");
    chunk5PVQY5BWValue43.attr("x", chunk5PVQY5BWParam12.x);
    chunk5PVQY5BWValue43.attr("y", chunk5PVQY5BWParam12.y);
    chunk5PVQY5BWValue43.style("text-anchor", chunk5PVQY5BWParam12.anchor);
    chunk5PVQY5BWValue43.style("font-family", chunk5PVQY5BWParam12.fontFamily);
    chunk5PVQY5BWValue43.style("font-size", chunk5PVQY5BWValue42);
    chunk5PVQY5BWValue43.style("font-weight", chunk5PVQY5BWParam12.fontWeight);
    chunk5PVQY5BWValue43.attr("fill", chunk5PVQY5BWParam12.fill);
    chunk5PVQY5BWParam12.class !== undefined &&
      chunk5PVQY5BWValue43.attr("class", chunk5PVQY5BWParam12.class);
    let chunk5PVQY5BWValue44 = chunk5PVQY5BWValue43.append("tspan");
    return (
      chunk5PVQY5BWValue44.attr(
        "x",
        chunk5PVQY5BWParam12.x + chunk5PVQY5BWParam12.textMargin * 2,
      ),
      chunk5PVQY5BWValue44.attr("fill", chunk5PVQY5BWParam12.fill),
      chunk5PVQY5BWValue44.text(chunk5PVQY5BWValue41),
      chunk5PVQY5BWValue43
    );
  }, "drawSimpleText"),
  chunk5PVQY5BWG = baseForR(
    (chunk5PVQY5BWParam8, chunk5PVQY5BWParam9, chunk5PVQY5BWParam10) => {
      if (
        !chunk5PVQY5BWParam8 ||
        ((chunk5PVQY5BWParam10 = Object.assign(
          {
            fontSize: 12,
            fontWeight: 400,
            fontFamily: "Arial",
            joinWith: "<br/>",
          },
          chunk5PVQY5BWParam10,
        )),
        _chunkICPOFSXXO.lineBreakRegex.test(chunk5PVQY5BWParam8))
      )
        return chunk5PVQY5BWParam8;
      let chunk5PVQY5BWValue31 = chunk5PVQY5BWParam8.split(" ").filter(Boolean),
        chunk5PVQY5BWValue32 = [],
        chunk5PVQY5BWValue33 = "";
      return (
        chunk5PVQY5BWValue31.forEach((item, index) => {
          let chunk5PVQY5BWValue59 = chunk5PVQY5BWN(
              `${item} `,
              chunk5PVQY5BWParam10,
            ),
            chunk5PVQY5BWValue60 = chunk5PVQY5BWN(
              chunk5PVQY5BWValue33,
              chunk5PVQY5BWParam10,
            );
          if (chunk5PVQY5BWValue59 > chunk5PVQY5BWParam9) {
            let { hyphenatedStrings, remainingWord } = chunk5PVQY5BWValue14(
              item,
              chunk5PVQY5BWParam9,
              "-",
              chunk5PVQY5BWParam10,
            );
            chunk5PVQY5BWValue32.push(
              chunk5PVQY5BWValue33,
              ...hyphenatedStrings,
            );
            chunk5PVQY5BWValue33 = remainingWord;
          } else
            chunk5PVQY5BWValue60 + chunk5PVQY5BWValue59 >= chunk5PVQY5BWParam9
              ? (chunk5PVQY5BWValue32.push(chunk5PVQY5BWValue33),
                (chunk5PVQY5BWValue33 = item))
              : (chunk5PVQY5BWValue33 = [chunk5PVQY5BWValue33, item]
                  .filter(Boolean)
                  .join(" "));
          index + 1 === chunk5PVQY5BWValue31.length &&
            chunk5PVQY5BWValue32.push(chunk5PVQY5BWValue33);
        }),
        chunk5PVQY5BWValue32
          .filter((item) => item !== "")
          .join(chunk5PVQY5BWParam10.joinWith)
      );
    },
    (chunk5PVQY5BWParam53, chunk5PVQY5BWParam54, chunk5PVQY5BWParam55) =>
      `${chunk5PVQY5BWParam53}${chunk5PVQY5BWParam54}${chunk5PVQY5BWParam55.fontSize}${chunk5PVQY5BWParam55.fontWeight}${chunk5PVQY5BWParam55.fontFamily}${chunk5PVQY5BWParam55.joinWith}`,
  ),
  chunk5PVQY5BWValue14 = baseForR(
    (
      chunk5PVQY5BWParam15,
      chunk5PVQY5BWParam16,
      chunk5PVQY5BWParam17 = "-",
      chunk5PVQY5BWParam18,
    ) => {
      chunk5PVQY5BWParam18 = Object.assign(
        {
          fontSize: 12,
          fontWeight: 400,
          fontFamily: "Arial",
          margin: 0,
        },
        chunk5PVQY5BWParam18,
      );
      let chunk5PVQY5BWValue50 = [...chunk5PVQY5BWParam15],
        chunk5PVQY5BWValue51 = [],
        chunk5PVQY5BWValue52 = "";
      return (
        chunk5PVQY5BWValue50.forEach((item, index) => {
          let chunk5PVQY5BWValue74 = `${chunk5PVQY5BWValue52}${item}`;
          if (
            chunk5PVQY5BWN(chunk5PVQY5BWValue74, chunk5PVQY5BWParam18) >=
            chunk5PVQY5BWParam16
          ) {
            let chunk5PVQY5BWValue83 = index + 1,
              chunk5PVQY5BWValue84 =
                chunk5PVQY5BWValue50.length === chunk5PVQY5BWValue83,
              chunk5PVQY5BWValue85 = `${chunk5PVQY5BWValue74}${chunk5PVQY5BWParam17}`;
            chunk5PVQY5BWValue51.push(
              chunk5PVQY5BWValue84
                ? chunk5PVQY5BWValue74
                : chunk5PVQY5BWValue85,
            );
            chunk5PVQY5BWValue52 = "";
          } else chunk5PVQY5BWValue52 = chunk5PVQY5BWValue74;
        }),
        {
          hyphenatedStrings: chunk5PVQY5BWValue51,
          remainingWord: chunk5PVQY5BWValue52,
        }
      );
    },
    (
      chunk5PVQY5BWParam56,
      chunk5PVQY5BWParam57,
      chunk5PVQY5BWParam58 = "-",
      chunk5PVQY5BWParam59,
    ) =>
      `${chunk5PVQY5BWParam56}${chunk5PVQY5BWParam57}${chunk5PVQY5BWParam58}${chunk5PVQY5BWParam59.fontSize}${chunk5PVQY5BWParam59.fontWeight}${chunk5PVQY5BWParam59.fontFamily}`,
  );
function chunk5PVQY5BWT(chunk5PVQY5BWParam68, chunk5PVQY5BWParam69) {
  return chunk5PVQY5BWValue15(chunk5PVQY5BWParam68, chunk5PVQY5BWParam69)
    .height;
}
chunkAGHRB4JFN(chunk5PVQY5BWT, "calculateTextHeight");
function chunk5PVQY5BWN(chunk5PVQY5BWParam70, chunk5PVQY5BWParam71) {
  return chunk5PVQY5BWValue15(chunk5PVQY5BWParam70, chunk5PVQY5BWParam71).width;
}
chunkAGHRB4JFN(chunk5PVQY5BWN, "calculateTextWidth");
var chunk5PVQY5BWValue15 = baseForR(
    (chunk5PVQY5BWParam1, chunk5PVQY5BWParam2) => {
      let {
        fontSize = 12,
        fontFamily = "Arial",
        fontWeight = 400,
      } = chunk5PVQY5BWParam2;
      if (!chunk5PVQY5BWParam1)
        return {
          width: 0,
          height: 0,
        };
      let [, chunk5PVQY5BWValue20] = chunk5PVQY5BWF(fontSize),
        chunk5PVQY5BWValue21 = ["sans-serif", fontFamily],
        chunk5PVQY5BWValue22 = chunk5PVQY5BWParam1.split(
          _chunkICPOFSXXO.lineBreakRegex,
        ),
        chunk5PVQY5BWValue23 = [],
        chunk5PVQY5BWValue24 = Src("body");
      if (!chunk5PVQY5BWValue24.remove)
        return {
          width: 0,
          height: 0,
          lineHeight: 0,
        };
      let chunk5PVQY5BWValue25 = chunk5PVQY5BWValue24.append("svg");
      for (let chunk5PVQY5BWValue37 of chunk5PVQY5BWValue21) {
        let chunk5PVQY5BWValue38 = 0,
          chunk5PVQY5BWValue39 = {
            width: 0,
            height: 0,
            lineHeight: 0,
          };
        for (let chunk5PVQY5BWValue40 of chunk5PVQY5BWValue22) {
          let chunk5PVQY5BWValue45 = chunk5PVQY5BWValue12();
          chunk5PVQY5BWValue45.text = chunk5PVQY5BWValue40 || "​";
          let chunk5PVQY5BWValue46 = chunk5PVQY5BWValue13(
              chunk5PVQY5BWValue25,
              chunk5PVQY5BWValue45,
            )
              .style("font-size", chunk5PVQY5BWValue20)
              .style("font-weight", fontWeight)
              .style("font-family", chunk5PVQY5BWValue37),
            chunk5PVQY5BWValue47 = (chunk5PVQY5BWValue46._groups ||
              chunk5PVQY5BWValue46)[0][0].getBBox();
          if (
            chunk5PVQY5BWValue47.width === 0 &&
            chunk5PVQY5BWValue47.height === 0
          )
            throw Error("svg element not in render tree");
          chunk5PVQY5BWValue39.width = Math.round(
            Math.max(chunk5PVQY5BWValue39.width, chunk5PVQY5BWValue47.width),
          );
          chunk5PVQY5BWValue38 = Math.round(chunk5PVQY5BWValue47.height);
          chunk5PVQY5BWValue39.height += chunk5PVQY5BWValue38;
          chunk5PVQY5BWValue39.lineHeight = Math.round(
            Math.max(chunk5PVQY5BWValue39.lineHeight, chunk5PVQY5BWValue38),
          );
        }
        chunk5PVQY5BWValue23.push(chunk5PVQY5BWValue39);
      }
      return (
        chunk5PVQY5BWValue25.remove(),
        chunk5PVQY5BWValue23[
          isNaN(chunk5PVQY5BWValue23[1].height) ||
          isNaN(chunk5PVQY5BWValue23[1].width) ||
          isNaN(chunk5PVQY5BWValue23[1].lineHeight) ||
          (chunk5PVQY5BWValue23[0].height > chunk5PVQY5BWValue23[1].height &&
            chunk5PVQY5BWValue23[0].width > chunk5PVQY5BWValue23[1].width &&
            chunk5PVQY5BWValue23[0].lineHeight >
              chunk5PVQY5BWValue23[1].lineHeight)
            ? 0
            : 1
        ]
      );
    },
    (chunk5PVQY5BWParam64, chunk5PVQY5BWParam65) =>
      `${chunk5PVQY5BWParam64}${chunk5PVQY5BWParam65.fontSize}${chunk5PVQY5BWParam65.fontWeight}${chunk5PVQY5BWParam65.fontFamily}`,
  ),
  chunk5PVQY5BWValue16 = class {
    constructor(chunk5PVQY5BWParam36 = false, chunk5PVQY5BWParam37) {
      this.count = 0;
      this.count = chunk5PVQY5BWParam37 ? chunk5PVQY5BWParam37.length : 0;
      this.next = chunk5PVQY5BWParam36 ? () => this.count++ : () => Date.now();
    }
    static {
      chunkAGHRB4JFN(this, "InitIDGenerator");
    }
  },
  chunk5PVQY5BWValue17,
  chunk5PVQY5BWValue18 = chunkAGHRB4JFN(function (chunk5PVQY5BWParam29) {
    return (
      (chunk5PVQY5BWValue17 ||= document.createElement("div")),
      (chunk5PVQY5BWParam29 = escape(chunk5PVQY5BWParam29)
        .replace(/%26/g, "&")
        .replace(/%23/g, "#")
        .replace(/%3B/g, ";")),
      (chunk5PVQY5BWValue17.innerHTML = chunk5PVQY5BWParam29),
      unescape(chunk5PVQY5BWValue17.textContent)
    );
  }, "entityDecode");
function chunk5PVQY5BWD(chunk5PVQY5BWParam75) {
  return "str" in chunk5PVQY5BWParam75;
}
chunkAGHRB4JFN(chunk5PVQY5BWD, "isDetailedError");
var chunk5PVQY5BWValue19 = chunkAGHRB4JFN(
    (
      chunk5PVQY5BWParam25,
      chunk5PVQY5BWParam26,
      chunk5PVQY5BWParam27,
      chunk5PVQY5BWParam28,
    ) => {
      if (!chunk5PVQY5BWParam28) return;
      let chunk5PVQY5BWValue67 = chunk5PVQY5BWParam25.node()?.getBBox();
      chunk5PVQY5BWValue67 &&
        chunk5PVQY5BWParam25
          .append("text")
          .text(chunk5PVQY5BWParam28)
          .attr("text-anchor", "middle")
          .attr("x", chunk5PVQY5BWValue67.x + chunk5PVQY5BWValue67.width / 2)
          .attr("y", -chunk5PVQY5BWParam27)
          .attr("class", chunk5PVQY5BWParam26);
    },
    "insertTitle",
  ),
  chunk5PVQY5BWF = chunkAGHRB4JFN((chunk5PVQY5BWParam33) => {
    if (typeof chunk5PVQY5BWParam33 == "number")
      return [chunk5PVQY5BWParam33, chunk5PVQY5BWParam33 + "px"];
    let chunk5PVQY5BWValue75 = parseInt(chunk5PVQY5BWParam33 ?? "", 10);
    return Number.isNaN(chunk5PVQY5BWValue75)
      ? [undefined, undefined]
      : chunk5PVQY5BWParam33 === String(chunk5PVQY5BWValue75)
        ? [chunk5PVQY5BWValue75, chunk5PVQY5BWParam33 + "px"]
        : [chunk5PVQY5BWValue75, chunk5PVQY5BWParam33];
  }, "parseFontSize");
function chunk5PVQY5BWR(chunk5PVQY5BWParam73, chunk5PVQY5BWParam74) {
  return mergeT({}, chunk5PVQY5BWParam73, chunk5PVQY5BWParam74);
}
chunkAGHRB4JFN(chunk5PVQY5BWR, "cleanAndMerge");
export const chunk5PVQY5BWS = chunkAGHRB4JFN(
  (
    chunk5PVQY5BWParam41,
    chunk5PVQY5BWParam42,
    { counter = 0, prefix, suffix },
    chunk5PVQY5BWParam43,
  ) =>
    chunk5PVQY5BWParam43 ||
    `${prefix ? `${prefix}_` : ""}${chunk5PVQY5BWParam41}_${chunk5PVQY5BWParam42}_${counter}${suffix ? `_${suffix}` : ""}`,
  "getEdgeId",
);
export const chunk5PVQY5BWI = chunkAGHRB4JFN(function (chunk5PVQY5BWParam50) {
  return chunk5PVQY5BWParam50
    .replace(/ﬂ°°/g, "&#")
    .replace(/ﬂ°/g, "&")
    .replace(/¶ß/g, ";");
}, "decodeEntities");
export const chunk5PVQY5BWH = {
  assignWithDepth: chunkICPOFSXXM,
  wrapLabel: chunk5PVQY5BWG,
  calculateTextHeight: chunk5PVQY5BWT,
  calculateTextWidth: chunk5PVQY5BWN,
  calculateTextDimensions: chunk5PVQY5BWValue15,
  cleanAndMerge: chunk5PVQY5BWR,
  detectInit: chunk5PVQY5BWValue4,
  detectDirective: chunk5PVQY5BWValue5,
  isSubstringInArray: chunk5PVQY5BWValue6,
  interpolateToCurve: chunk5PVQY5BWU,
  calcLabelPosition: chunk5PVQY5BWHelper4,
  calcCardinalityPosition: chunk5PVQY5BWValue10,
  calcTerminalLabelPosition: chunk5PVQY5BWHelper5,
  formatUrl: chunk5PVQY5BWHelper1,
  getStylesFromArray: chunk5PVQY5BWC,
  generateId: chunk5PVQY5BWO,
  random: chunk5PVQY5BWP,
  runFunc: chunk5PVQY5BWValue7,
  entityDecode: chunk5PVQY5BWValue18,
  insertTitle: chunk5PVQY5BWValue19,
  isLabelCoordinateInPath: $,
  parseFontSize: chunk5PVQY5BWF,
  InitIDGenerator: chunk5PVQY5BWValue16,
};
export const chunk5PVQY5BWA = chunkAGHRB4JFN(function (chunk5PVQY5BWParam19) {
  let chunk5PVQY5BWValue53 = chunk5PVQY5BWParam19;
  return (
    (chunk5PVQY5BWValue53 = chunk5PVQY5BWValue53.replace(
      /style.*:\S*#.*;/g,
      function (chunk5PVQY5BWParam62) {
        return chunk5PVQY5BWParam62.substring(
          0,
          chunk5PVQY5BWParam62.length - 1,
        );
      },
    )),
    (chunk5PVQY5BWValue53 = chunk5PVQY5BWValue53.replace(
      /classDef.*:\S*#.*;/g,
      function (chunk5PVQY5BWParam63) {
        return chunk5PVQY5BWParam63.substring(
          0,
          chunk5PVQY5BWParam63.length - 1,
        );
      },
    )),
    (chunk5PVQY5BWValue53 = chunk5PVQY5BWValue53.replace(
      /#\w+;/g,
      function (chunk5PVQY5BWParam39) {
        let chunk5PVQY5BWValue87 = chunk5PVQY5BWParam39.substring(
          1,
          chunk5PVQY5BWParam39.length - 1,
        );
        return /^\+?\d+$/.test(chunk5PVQY5BWValue87)
          ? "ﬂ°°" + chunk5PVQY5BWValue87 + "¶ß"
          : "ﬂ°" + chunk5PVQY5BWValue87 + "¶ß";
      },
    )),
    chunk5PVQY5BWValue53
  );
}, "encodeEntities");
function chunk5PVQY5BWL(chunk5PVQY5BWParam76) {
  return chunk5PVQY5BWParam76 ?? null;
}
chunkAGHRB4JFN(chunk5PVQY5BWL, "handleUndefinedAttr");
function $(chunk5PVQY5BWParam34, chunk5PVQY5BWParam35) {
  let chunk5PVQY5BWValue76 = Math.round(chunk5PVQY5BWParam34.x),
    chunk5PVQY5BWValue77 = Math.round(chunk5PVQY5BWParam34.y),
    chunk5PVQY5BWValue78 = chunk5PVQY5BWParam35.replace(
      /(\d+\.\d+)/g,
      (chunk5PVQY5BWParam72) =>
        Math.round(parseFloat(chunk5PVQY5BWParam72)).toString(),
    );
  return (
    chunk5PVQY5BWValue78.includes(chunk5PVQY5BWValue76.toString()) ||
    chunk5PVQY5BWValue78.includes(chunk5PVQY5BWValue77.toString())
  );
}
chunkAGHRB4JFN($, "isLabelCoordinateInPath");
export function initChunk5PVQY5BW(): void {}
export {
  chunk5PVQY5BWC,
  chunk5PVQY5BWD,
  chunk5PVQY5BWF,
  chunk5PVQY5BWG,
  chunk5PVQY5BWL,
  chunk5PVQY5BWN,
  chunk5PVQY5BWO,
  chunk5PVQY5BWP,
  chunk5PVQY5BWR,
  chunk5PVQY5BWT,
  chunk5PVQY5BWU,
};
