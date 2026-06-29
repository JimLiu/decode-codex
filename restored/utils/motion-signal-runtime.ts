// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Motion values, animation helpers, and reduced-motion signal facade.
import {
  JC as initReducedMotionPreference,
  YC as reducedMotionPreferenceSignal,
} from "../../ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~bj5tp28r-Dcs9S3fj.js";
import {
  _u as createMotionSignal,
  du as initMotionRuntime,
  fu as animateSignalValue,
  vu as useMotionValueEvent,
  yu as motion,
} from "../../ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf-DEE2TwPG.js";
import {
  createScopedSignal as createSignal,
  initAppScopeSignalRuntime,
} from "../runtime/app-scope-runtime";

export {
  animateSignalValue,
  createMotionSignal,
  createSignal,
  initMotionRuntime,
  motion,
  reducedMotionPreferenceSignal,
  useMotionValueEvent,
};

export function initMotionSignalRuntime(): void {
  initAppScopeSignalRuntime();
  initMotionRuntime();
  initReducedMotionPreference();
}
