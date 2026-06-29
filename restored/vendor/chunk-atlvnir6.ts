// Restored from ref/webview/assets/chunk-ATLVNIR6-DShFhP4G.js
// ChunkATLVNIR6 chunk restored from the Codex webview bundle.
import { chunkAGHRB4JFN } from "./dompurify";
import { _chunkABZYJK2DL } from "./katex-auto-render";
var chunkATLVNIR6T = chunkAGHRB4JFN((chunkATLVNIR6Param6) => {
    let chunkATLVNIR6Value6 = chunkATLVNIR6Value1([
      ...(chunkATLVNIR6Param6.cssCompiledStyles || []),
      ...(chunkATLVNIR6Param6.cssStyles || []),
      ...(chunkATLVNIR6Param6.labelStyle || []),
    ]);
    return {
      stylesMap: chunkATLVNIR6Value6,
      stylesArray: [...chunkATLVNIR6Value6],
    };
  }, "compileStyles"),
  chunkATLVNIR6Value1 = chunkAGHRB4JFN((chunkATLVNIR6Param7) => {
    let chunkATLVNIR6Value7 = new Map();
    return (
      chunkATLVNIR6Param7.forEach((item) => {
        let [_chunkATLVNIR6R, _chunkATLVNIR6T] = item.split(":");
        chunkATLVNIR6Value7.set(
          _chunkATLVNIR6R.trim(),
          _chunkATLVNIR6T?.trim(),
        );
      }),
      chunkATLVNIR6Value7
    );
  }, "styles2Map"),
  chunkATLVNIR6N = chunkAGHRB4JFN(
    (chunkATLVNIR6Param3) =>
      chunkATLVNIR6Param3 === "color" ||
      chunkATLVNIR6Param3 === "font-size" ||
      chunkATLVNIR6Param3 === "font-family" ||
      chunkATLVNIR6Param3 === "font-weight" ||
      chunkATLVNIR6Param3 === "font-style" ||
      chunkATLVNIR6Param3 === "text-decoration" ||
      chunkATLVNIR6Param3 === "text-align" ||
      chunkATLVNIR6Param3 === "text-transform" ||
      chunkATLVNIR6Param3 === "line-height" ||
      chunkATLVNIR6Param3 === "letter-spacing" ||
      chunkATLVNIR6Param3 === "word-spacing" ||
      chunkATLVNIR6Param3 === "text-shadow" ||
      chunkATLVNIR6Param3 === "text-overflow" ||
      chunkATLVNIR6Param3 === "white-space" ||
      chunkATLVNIR6Param3 === "word-wrap" ||
      chunkATLVNIR6Param3 === "word-break" ||
      chunkATLVNIR6Param3 === "overflow-wrap" ||
      chunkATLVNIR6Param3 === "hyphens",
    "isLabelStyle",
  ),
  chunkATLVNIR6Value2 = chunkAGHRB4JFN((chunkATLVNIR6Param4) => {
    if (!chunkATLVNIR6Param4) return [0, 0];
    let chunkATLVNIR6Value5 = chunkATLVNIR6Param4
      .trim()
      .split(/\s+/)
      .map(Number);
    if (chunkATLVNIR6Value5.length === 1) {
      let chunkATLVNIR6Value8 = isNaN(chunkATLVNIR6Value5[0])
        ? 0
        : chunkATLVNIR6Value5[0];
      return [chunkATLVNIR6Value8, chunkATLVNIR6Value8];
    }
    return [
      isNaN(chunkATLVNIR6Value5[0]) ? 0 : chunkATLVNIR6Value5[0],
      isNaN(chunkATLVNIR6Value5[1]) ? 0 : chunkATLVNIR6Value5[1],
    ];
  }, "getStrokeDashArray");
export const chunkATLVNIR6R = chunkAGHRB4JFN((chunkATLVNIR6Param5) => {
  let { handDrawnSeed: _chunkATLVNIR6R } = _chunkABZYJK2DL();
  return {
    fill: chunkATLVNIR6Param5,
    hachureAngle: 120,
    hachureGap: 4,
    fillWeight: 2,
    roughness: 0.7,
    stroke: chunkATLVNIR6Param5,
    seed: _chunkATLVNIR6R,
  };
}, "solidStateFill");
export const chunkATLVNIR6I = chunkAGHRB4JFN((chunkATLVNIR6Param1) => {
  let { stylesArray } = chunkATLVNIR6T(chunkATLVNIR6Param1),
    _chunkATLVNIR6R = [],
    chunkATLVNIR6Value3 = [],
    _chunkATLVNIR6I = [],
    _chunkATLVNIR6A = [];
  return (
    stylesArray.forEach((item) => {
      let chunkATLVNIR6Value4 = item[0];
      chunkATLVNIR6N(chunkATLVNIR6Value4)
        ? _chunkATLVNIR6R.push(item.join(":") + " !important")
        : (chunkATLVNIR6Value3.push(item.join(":") + " !important"),
          chunkATLVNIR6Value4.includes("stroke") &&
            _chunkATLVNIR6I.push(item.join(":") + " !important"),
          chunkATLVNIR6Value4 === "fill" &&
            _chunkATLVNIR6A.push(item.join(":") + " !important"));
    }),
    {
      labelStyles: _chunkATLVNIR6R.join(";"),
      nodeStyles: chunkATLVNIR6Value3.join(";"),
      stylesArray,
      borderStyles: _chunkATLVNIR6I,
      backgroundStyles: _chunkATLVNIR6A,
    }
  );
}, "styles2String");
export const chunkATLVNIR6A = chunkAGHRB4JFN(
  (chunkATLVNIR6Param2, _chunkATLVNIR6R) => {
    let { themeVariables, handDrawnSeed: _chunkATLVNIR6N } = _chunkABZYJK2DL(),
      { nodeBorder: _chunkATLVNIR6I, mainBkg: _chunkATLVNIR6A } =
        themeVariables,
      { stylesMap } = chunkATLVNIR6T(chunkATLVNIR6Param2);
    return Object.assign(
      {
        roughness: 0.7,
        fill: stylesMap.get("fill") || _chunkATLVNIR6A,
        fillStyle: "hachure",
        fillWeight: 4,
        hachureGap: 5.2,
        stroke: stylesMap.get("stroke") || _chunkATLVNIR6I,
        seed: _chunkATLVNIR6N,
        strokeWidth: stylesMap.get("stroke-width")?.replace("px", "") || 1.3,
        fillLineDash: [0, 0],
        strokeLineDash: chunkATLVNIR6Value2(stylesMap.get("stroke-dasharray")),
      },
      _chunkATLVNIR6R,
    );
  },
  "userNodeOverrides",
);
export { chunkATLVNIR6N, chunkATLVNIR6T };
