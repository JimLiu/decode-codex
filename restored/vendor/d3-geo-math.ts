// Restored from ref/webview/assets/math-B6qc64Y3.js
// Math chunk restored from the Codex webview bundle.
var mathU = Math.PI,
  mathS = mathU / 2;
export const mathT = Math.abs;
export const mathP = 2 * mathU;
export const mathO = 1e-12;
export const mathL = Math.min;
export const mathI = Math.atan2;
export const mathF = Math.sqrt;
export const mathD = Math.sin;
export const mathC = Math.max;
export const mathA = Math.cos;
export function mathN(_mathT) {
  return _mathT > 1 ? 0 : _mathT < -1 ? mathU : Math.acos(_mathT);
}
export function mathR(_mathT) {
  return _mathT >= 1 ? mathS : _mathT <= -1 ? -mathS : Math.asin(_mathT);
}
export { mathS, mathU };
