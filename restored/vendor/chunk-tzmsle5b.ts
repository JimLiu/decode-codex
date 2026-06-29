// Restored from ref/webview/assets/chunk-TZMSLE5B-DErk67ZI.js
// ChunkTZMSLE5B chunk restored from the Codex webview bundle.
import { chunkAGHRB4JFN } from "./dompurify";
import { _chunkABZYJK2DA } from "./katex-auto-render";
import { dist } from "./entities-escape";
var chunkTZMSLE5BValue1 = dist(),
  chunkTZMSLE5BI = chunkAGHRB4JFN(
    (chunkTZMSLE5BParam1, chunkTZMSLE5BParam2) => {
      let chunkTZMSLE5BValue2 = chunkTZMSLE5BParam1.append("rect");
      if (
        (chunkTZMSLE5BValue2.attr("x", chunkTZMSLE5BParam2.x),
        chunkTZMSLE5BValue2.attr("y", chunkTZMSLE5BParam2.y),
        chunkTZMSLE5BValue2.attr("fill", chunkTZMSLE5BParam2.fill),
        chunkTZMSLE5BValue2.attr("stroke", chunkTZMSLE5BParam2.stroke),
        chunkTZMSLE5BValue2.attr("width", chunkTZMSLE5BParam2.width),
        chunkTZMSLE5BValue2.attr("height", chunkTZMSLE5BParam2.height),
        chunkTZMSLE5BParam2.name &&
          chunkTZMSLE5BValue2.attr("name", chunkTZMSLE5BParam2.name),
        chunkTZMSLE5BParam2.rx &&
          chunkTZMSLE5BValue2.attr("rx", chunkTZMSLE5BParam2.rx),
        chunkTZMSLE5BParam2.ry &&
          chunkTZMSLE5BValue2.attr("ry", chunkTZMSLE5BParam2.ry),
        chunkTZMSLE5BParam2.attrs !== undefined)
      )
        for (let chunkTZMSLE5BValue4 in chunkTZMSLE5BParam2.attrs)
          chunkTZMSLE5BValue2.attr(
            chunkTZMSLE5BValue4,
            chunkTZMSLE5BParam2.attrs[chunkTZMSLE5BValue4],
          );
      return (
        chunkTZMSLE5BParam2.class &&
          chunkTZMSLE5BValue2.attr("class", chunkTZMSLE5BParam2.class),
        chunkTZMSLE5BValue2
      );
    },
    "drawRect",
  );
export const chunkTZMSLE5BT = chunkAGHRB4JFN(
  (chunkTZMSLE5BParam5, chunkTZMSLE5BParam6) => {
    chunkTZMSLE5BI(chunkTZMSLE5BParam5, {
      x: chunkTZMSLE5BParam6.startx,
      y: chunkTZMSLE5BParam6.starty,
      width: chunkTZMSLE5BParam6.stopx - chunkTZMSLE5BParam6.startx,
      height: chunkTZMSLE5BParam6.stopy - chunkTZMSLE5BParam6.starty,
      fill: chunkTZMSLE5BParam6.fill,
      stroke: chunkTZMSLE5BParam6.stroke,
      class: "rect",
    }).lower();
  },
  "drawBackgroundRect",
);
export const chunkTZMSLE5BS = chunkAGHRB4JFN(
  () => ({
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    "text-anchor": "start",
    style: "#666",
    textMargin: 0,
    rx: 0,
    ry: 0,
    tspan: true,
  }),
  "getTextObj",
);
export const chunkTZMSLE5BR = chunkAGHRB4JFN(
  (
    chunkTZMSLE5BParam10,
    chunkTZMSLE5BParam11,
    chunkTZMSLE5BParam12,
    _chunkTZMSLE5BI,
  ) => {
    let _chunkTZMSLE5BT = chunkTZMSLE5BParam10.append("image");
    _chunkTZMSLE5BT.attr("x", chunkTZMSLE5BParam11);
    _chunkTZMSLE5BT.attr("y", chunkTZMSLE5BParam12);
    let _chunkTZMSLE5BA = chunkTZMSLE5BValue1.sanitizeUrl(_chunkTZMSLE5BI);
    _chunkTZMSLE5BT.attr("xlink:href", _chunkTZMSLE5BA);
  },
  "drawImage",
);
export const chunkTZMSLE5BO = chunkAGHRB4JFN(
  () => ({
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    fill: "#EDF2AE",
    stroke: "#666",
    anchor: "start",
    rx: 0,
    ry: 0,
  }),
  "getNoteRect",
);
export const chunkTZMSLE5BN = chunkAGHRB4JFN(
  (
    chunkTZMSLE5BParam7,
    chunkTZMSLE5BParam8,
    chunkTZMSLE5BParam9,
    _chunkTZMSLE5BI,
  ) => {
    let _chunkTZMSLE5BT = chunkTZMSLE5BParam7.append("use");
    _chunkTZMSLE5BT.attr("x", chunkTZMSLE5BParam8);
    _chunkTZMSLE5BT.attr("y", chunkTZMSLE5BParam9);
    let _chunkTZMSLE5BA = chunkTZMSLE5BValue1.sanitizeUrl(_chunkTZMSLE5BI);
    _chunkTZMSLE5BT.attr("xlink:href", `#${_chunkTZMSLE5BA}`);
  },
  "drawEmbeddedImage",
);
export const chunkTZMSLE5BA = chunkAGHRB4JFN(
  (chunkTZMSLE5BParam3, chunkTZMSLE5BParam4) => {
    let chunkTZMSLE5BValue3 = chunkTZMSLE5BParam4.text.replace(
        _chunkABZYJK2DA,
        " ",
      ),
      _chunkTZMSLE5BI = chunkTZMSLE5BParam3.append("text");
    _chunkTZMSLE5BI.attr("x", chunkTZMSLE5BParam4.x);
    _chunkTZMSLE5BI.attr("y", chunkTZMSLE5BParam4.y);
    _chunkTZMSLE5BI.attr("class", "legend");
    _chunkTZMSLE5BI.style("text-anchor", chunkTZMSLE5BParam4.anchor);
    chunkTZMSLE5BParam4.class &&
      _chunkTZMSLE5BI.attr("class", chunkTZMSLE5BParam4.class);
    let _chunkTZMSLE5BT = _chunkTZMSLE5BI.append("tspan");
    return (
      _chunkTZMSLE5BT.attr(
        "x",
        chunkTZMSLE5BParam4.x + chunkTZMSLE5BParam4.textMargin * 2,
      ),
      _chunkTZMSLE5BT.text(chunkTZMSLE5BValue3),
      _chunkTZMSLE5BI
    );
  },
  "drawText",
);
export { chunkTZMSLE5BI };
