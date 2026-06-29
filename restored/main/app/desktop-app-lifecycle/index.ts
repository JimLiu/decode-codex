// Restored from ref/.vite/build/main-r5HnecX_.js
// Public desktop app lifecycle helper surface.

export {
  createRecoverableChildProcessWarningKey,
  isRecoverableChromiumChildProcessGone,
  reportRecoverableChromiumChildProcessGone,
} from "./child-process-gone";
export {
  createQuitConfirmationDetail,
  disposeDesktopRuntimeBeforeQuit,
} from "./quit";
export { registerDesktopAppLifecycleHandlers } from "./register-handlers";
export type {
  AppForegroundEventBus,
  ApplicationMenuManager,
  AppWindowLifecycleController,
  ChildProcessGoneDetails,
  DesktopRuntimeDisposalOptions,
  DisposableRuntimeService,
  FatalErrorReporter,
  FlushableStore,
  PreventableElectronEvent,
  QuitStateController,
  StructuredLogger,
} from "./types";
