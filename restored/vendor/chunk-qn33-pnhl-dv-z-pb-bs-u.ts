// Restored from ref/webview/assets/chunk-QN33PNHL-AbzhC4my.js
// ChunkQN33PNHL chunk restored from the Codex webview bundle.
import { chunkAGHRB4JFN, chunkAGHRB4JFR } from "./dompurify";
import { _chunkABZYJK2DN } from "./katex-auto-render";
var chunkQN33PNHLValue1 = chunkAGHRB4JFN(
    (chunkQN33PNHLParam4, chunkQN33PNHLParam5) => {
      let chunkQN33PNHLValue4 = chunkQN33PNHLParam4.node()?.getBBox() || {
        width: 0,
        height: 0,
        x: 0,
        y: 0,
      };
      return {
        width: chunkQN33PNHLValue4.width + chunkQN33PNHLParam5 * 2,
        height: chunkQN33PNHLValue4.height + chunkQN33PNHLParam5 * 2,
        x: chunkQN33PNHLValue4.x,
        y: chunkQN33PNHLValue4.y,
      };
    },
    "calculateDimensionsWithPadding",
  ),
  chunkQN33PNHLValue2 = chunkAGHRB4JFN(
    (
      chunkQN33PNHLParam6,
      chunkQN33PNHLParam7,
      chunkQN33PNHLParam8,
      _chunkQN33PNHL,
      chunkQN33PNHLParam9,
    ) =>
      `${chunkQN33PNHLParam6 - chunkQN33PNHLParam9} ${chunkQN33PNHLParam7 - chunkQN33PNHLParam9} ${chunkQN33PNHLParam8} ${_chunkQN33PNHL}`,
    "createViewBox",
  );
export const chunkQN33PNHL = chunkAGHRB4JFN(
  (
    chunkQN33PNHLParam1,
    _chunkQN33PNHL,
    chunkQN33PNHLParam2,
    chunkQN33PNHLParam3,
  ) => {
    chunkQN33PNHLParam1.attr("class", chunkQN33PNHLParam2);
    let { width, height, x, y } = chunkQN33PNHLValue1(
      chunkQN33PNHLParam1,
      _chunkQN33PNHL,
    );
    _chunkABZYJK2DN(chunkQN33PNHLParam1, height, width, chunkQN33PNHLParam3);
    let chunkQN33PNHLValue3 = chunkQN33PNHLValue2(
      x,
      y,
      width,
      height,
      _chunkQN33PNHL,
    );
    chunkQN33PNHLParam1.attr("viewBox", chunkQN33PNHLValue3);
    chunkAGHRB4JFR.debug(
      `viewBox configured: ${chunkQN33PNHLValue3} with padding: ${_chunkQN33PNHL}`,
    );
  },
  "setupViewPortForSVG",
);
