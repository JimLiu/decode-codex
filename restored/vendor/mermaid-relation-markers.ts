// Restored from ref/webview/assets/chunk-HN2XXSSU-BPyoUjyB.js
// ChunkHN2XXSSU chunk restored from the Codex webview bundle.
import { chunkAGHRB4JFN } from "./dompurify";
var chunkHN2XXSSUN = {
  aggregation: 17.25,
  extension: 17.25,
  composition: 17.25,
  dependency: 6,
  lollipop: 13.5,
  arrow_point: 4,
};
export const chunkHN2XXSSUR = {
  arrow_point: 9,
  arrow_cross: 12.5,
  arrow_circle: 12.5,
};
function chunkHN2XXSSUHelper1(chunkHN2XXSSUParam5, _chunkHN2XXSSUN) {
  if (chunkHN2XXSSUParam5 === undefined || _chunkHN2XXSSUN === undefined)
    return {
      angle: 0,
      deltaX: 0,
      deltaY: 0,
    };
  chunkHN2XXSSUParam5 = chunkHN2XXSSUValue1(chunkHN2XXSSUParam5);
  _chunkHN2XXSSUN = chunkHN2XXSSUValue1(_chunkHN2XXSSUN);
  let [_chunkHN2XXSSUR, chunkHN2XXSSUValue18] = [
      chunkHN2XXSSUParam5.x,
      chunkHN2XXSSUParam5.y,
    ],
    [_chunkHN2XXSSUT, chunkHN2XXSSUValue19] = [
      _chunkHN2XXSSUN.x,
      _chunkHN2XXSSUN.y,
    ],
    chunkHN2XXSSUValue20 = _chunkHN2XXSSUT - _chunkHN2XXSSUR,
    chunkHN2XXSSUValue21 = chunkHN2XXSSUValue19 - chunkHN2XXSSUValue18;
  return {
    angle: Math.atan(chunkHN2XXSSUValue21 / chunkHN2XXSSUValue20),
    deltaX: chunkHN2XXSSUValue20,
    deltaY: chunkHN2XXSSUValue21,
  };
}
chunkAGHRB4JFN(chunkHN2XXSSUHelper1, "calculateDeltaAndAngle");
var chunkHN2XXSSUValue1 = chunkAGHRB4JFN(
  (chunkHN2XXSSUParam6) =>
    Array.isArray(chunkHN2XXSSUParam6)
      ? {
          x: chunkHN2XXSSUParam6[0],
          y: chunkHN2XXSSUParam6[1],
        }
      : chunkHN2XXSSUParam6,
  "pointTransformer",
);
export const chunkHN2XXSSUT = chunkAGHRB4JFN(
  (_chunkHN2XXSSUR) => ({
    x: chunkAGHRB4JFN(function (
      chunkHN2XXSSUParam3,
      _chunkHN2XXSSUT,
      chunkHN2XXSSUParam4,
    ) {
      let chunkHN2XXSSUValue10 = 0,
        chunkHN2XXSSUValue11 =
          chunkHN2XXSSUValue1(chunkHN2XXSSUParam4[0]).x <
          chunkHN2XXSSUValue1(
            chunkHN2XXSSUParam4[chunkHN2XXSSUParam4.length - 1],
          ).x
            ? "left"
            : "right";
      if (
        _chunkHN2XXSSUT === 0 &&
        Object.hasOwn(chunkHN2XXSSUN, _chunkHN2XXSSUR.arrowTypeStart)
      ) {
        let { angle, deltaX } = chunkHN2XXSSUHelper1(
          chunkHN2XXSSUParam4[0],
          chunkHN2XXSSUParam4[1],
        );
        chunkHN2XXSSUValue10 =
          chunkHN2XXSSUN[_chunkHN2XXSSUR.arrowTypeStart] *
          Math.cos(angle) *
          (deltaX >= 0 ? 1 : -1);
      } else if (
        _chunkHN2XXSSUT === chunkHN2XXSSUParam4.length - 1 &&
        Object.hasOwn(chunkHN2XXSSUN, _chunkHN2XXSSUR.arrowTypeEnd)
      ) {
        let { angle, deltaX } = chunkHN2XXSSUHelper1(
          chunkHN2XXSSUParam4[chunkHN2XXSSUParam4.length - 1],
          chunkHN2XXSSUParam4[chunkHN2XXSSUParam4.length - 2],
        );
        chunkHN2XXSSUValue10 =
          chunkHN2XXSSUN[_chunkHN2XXSSUR.arrowTypeEnd] *
          Math.cos(angle) *
          (deltaX >= 0 ? 1 : -1);
      }
      let chunkHN2XXSSUValue12 = Math.abs(
          chunkHN2XXSSUValue1(chunkHN2XXSSUParam3).x -
            chunkHN2XXSSUValue1(
              chunkHN2XXSSUParam4[chunkHN2XXSSUParam4.length - 1],
            ).x,
        ),
        chunkHN2XXSSUValue13 = Math.abs(
          chunkHN2XXSSUValue1(chunkHN2XXSSUParam3).y -
            chunkHN2XXSSUValue1(
              chunkHN2XXSSUParam4[chunkHN2XXSSUParam4.length - 1],
            ).y,
        ),
        chunkHN2XXSSUValue14 = Math.abs(
          chunkHN2XXSSUValue1(chunkHN2XXSSUParam3).x -
            chunkHN2XXSSUValue1(chunkHN2XXSSUParam4[0]).x,
        ),
        chunkHN2XXSSUValue15 = Math.abs(
          chunkHN2XXSSUValue1(chunkHN2XXSSUParam3).y -
            chunkHN2XXSSUValue1(chunkHN2XXSSUParam4[0]).y,
        ),
        chunkHN2XXSSUValue16 = chunkHN2XXSSUN[_chunkHN2XXSSUR.arrowTypeStart],
        chunkHN2XXSSUValue17 = chunkHN2XXSSUN[_chunkHN2XXSSUR.arrowTypeEnd];
      if (
        chunkHN2XXSSUValue12 < chunkHN2XXSSUValue17 &&
        chunkHN2XXSSUValue12 > 0 &&
        chunkHN2XXSSUValue13 < chunkHN2XXSSUValue17
      ) {
        let chunkHN2XXSSUValue22 =
          chunkHN2XXSSUValue17 + 1 - chunkHN2XXSSUValue12;
        chunkHN2XXSSUValue22 *= chunkHN2XXSSUValue11 === "right" ? -1 : 1;
        chunkHN2XXSSUValue10 -= chunkHN2XXSSUValue22;
      }
      if (
        chunkHN2XXSSUValue14 < chunkHN2XXSSUValue16 &&
        chunkHN2XXSSUValue14 > 0 &&
        chunkHN2XXSSUValue15 < chunkHN2XXSSUValue16
      ) {
        let chunkHN2XXSSUValue23 =
          chunkHN2XXSSUValue16 + 1 - chunkHN2XXSSUValue14;
        chunkHN2XXSSUValue23 *= chunkHN2XXSSUValue11 === "right" ? -1 : 1;
        chunkHN2XXSSUValue10 += chunkHN2XXSSUValue23;
      }
      return chunkHN2XXSSUValue1(chunkHN2XXSSUParam3).x + chunkHN2XXSSUValue10;
    }, "x"),
    y: chunkAGHRB4JFN(function (
      chunkHN2XXSSUParam1,
      _chunkHN2XXSSUT,
      chunkHN2XXSSUParam2,
    ) {
      let chunkHN2XXSSUValue2 = 0,
        chunkHN2XXSSUValue3 =
          chunkHN2XXSSUValue1(chunkHN2XXSSUParam2[0]).y <
          chunkHN2XXSSUValue1(
            chunkHN2XXSSUParam2[chunkHN2XXSSUParam2.length - 1],
          ).y
            ? "down"
            : "up";
      if (
        _chunkHN2XXSSUT === 0 &&
        Object.hasOwn(chunkHN2XXSSUN, _chunkHN2XXSSUR.arrowTypeStart)
      ) {
        let { angle, deltaY } = chunkHN2XXSSUHelper1(
          chunkHN2XXSSUParam2[0],
          chunkHN2XXSSUParam2[1],
        );
        chunkHN2XXSSUValue2 =
          chunkHN2XXSSUN[_chunkHN2XXSSUR.arrowTypeStart] *
          Math.abs(Math.sin(angle)) *
          (deltaY >= 0 ? 1 : -1);
      } else if (
        _chunkHN2XXSSUT === chunkHN2XXSSUParam2.length - 1 &&
        Object.hasOwn(chunkHN2XXSSUN, _chunkHN2XXSSUR.arrowTypeEnd)
      ) {
        let { angle, deltaY } = chunkHN2XXSSUHelper1(
          chunkHN2XXSSUParam2[chunkHN2XXSSUParam2.length - 1],
          chunkHN2XXSSUParam2[chunkHN2XXSSUParam2.length - 2],
        );
        chunkHN2XXSSUValue2 =
          chunkHN2XXSSUN[_chunkHN2XXSSUR.arrowTypeEnd] *
          Math.abs(Math.sin(angle)) *
          (deltaY >= 0 ? 1 : -1);
      }
      let chunkHN2XXSSUValue4 = Math.abs(
          chunkHN2XXSSUValue1(chunkHN2XXSSUParam1).y -
            chunkHN2XXSSUValue1(
              chunkHN2XXSSUParam2[chunkHN2XXSSUParam2.length - 1],
            ).y,
        ),
        chunkHN2XXSSUValue5 = Math.abs(
          chunkHN2XXSSUValue1(chunkHN2XXSSUParam1).x -
            chunkHN2XXSSUValue1(
              chunkHN2XXSSUParam2[chunkHN2XXSSUParam2.length - 1],
            ).x,
        ),
        chunkHN2XXSSUValue6 = Math.abs(
          chunkHN2XXSSUValue1(chunkHN2XXSSUParam1).y -
            chunkHN2XXSSUValue1(chunkHN2XXSSUParam2[0]).y,
        ),
        chunkHN2XXSSUValue7 = Math.abs(
          chunkHN2XXSSUValue1(chunkHN2XXSSUParam1).x -
            chunkHN2XXSSUValue1(chunkHN2XXSSUParam2[0]).x,
        ),
        chunkHN2XXSSUValue8 = chunkHN2XXSSUN[_chunkHN2XXSSUR.arrowTypeStart],
        chunkHN2XXSSUValue9 = chunkHN2XXSSUN[_chunkHN2XXSSUR.arrowTypeEnd];
      if (
        chunkHN2XXSSUValue4 < chunkHN2XXSSUValue9 &&
        chunkHN2XXSSUValue4 > 0 &&
        chunkHN2XXSSUValue5 < chunkHN2XXSSUValue9
      ) {
        let chunkHN2XXSSUValue24 =
          chunkHN2XXSSUValue9 + 1 - chunkHN2XXSSUValue4;
        chunkHN2XXSSUValue24 *= chunkHN2XXSSUValue3 === "up" ? -1 : 1;
        chunkHN2XXSSUValue2 -= chunkHN2XXSSUValue24;
      }
      if (
        chunkHN2XXSSUValue6 < chunkHN2XXSSUValue8 &&
        chunkHN2XXSSUValue6 > 0 &&
        chunkHN2XXSSUValue7 < chunkHN2XXSSUValue8
      ) {
        let chunkHN2XXSSUValue25 =
          chunkHN2XXSSUValue8 + 1 - chunkHN2XXSSUValue6;
        chunkHN2XXSSUValue25 *= chunkHN2XXSSUValue3 === "up" ? -1 : 1;
        chunkHN2XXSSUValue2 += chunkHN2XXSSUValue25;
      }
      return chunkHN2XXSSUValue1(chunkHN2XXSSUParam1).y + chunkHN2XXSSUValue2;
    }, "y"),
  }),
  "getLineFunctionsWithOffset",
);
export { chunkHN2XXSSUN };
