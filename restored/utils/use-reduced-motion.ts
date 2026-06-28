// Restored from ref/webview/assets/use-reduced-motion-Dx8ukPZm.js
// React hook for the app-scope reduced-motion signal.
import { _appScopeS } from "../boundaries/app-scope";
import { shouldReduceMotionSignal } from "./reduced-motion-preference";
function useReducedMotion() {
  return _appScopeS(shouldReduceMotionSignal) as boolean;
}
export { useReducedMotion };
