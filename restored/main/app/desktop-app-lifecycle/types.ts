// Restored from ref/.vite/build/main-r5HnecX_.js
// Shared types for desktop app lifecycle and quit handling.

export type { QuitStateController } from "../quit-state";

export type PreventableElectronEvent = {
  preventDefault(): void;
};

export type ChildProcessGoneDetails = {
  exitCode?: number;
  name?: string;
  reason: string;
  serviceName?: string;
  type: string;
};

export type StructuredLogger = {
  warning(message: string, details?: unknown): void;
};

export type FatalErrorReporter = {
  reportFatal(error: Error, context: unknown): void;
};

export type AppWindowLifecycleController = {
  markAppQuitting(): void;
  showLastActivePrimaryWindow(): boolean;
};

export type ApplicationMenuManager = {
  refresh(): void;
};

export type DisposableRuntimeService = {
  dispose(): void;
};

export type FlushableStore = {
  flush(): Promise<void> | void;
};

export type AppForegroundEventBus = {
  emit(event: "background" | "foreground"): void;
};

export type DesktopRuntimeDisposalOptions = {
  disposables: DisposableRuntimeService;
  flushAndDisposeContext(): void;
  globalDictationLifecycleManager: DisposableRuntimeService;
  hotkeyWindowLifecycleManager: DisposableRuntimeService;
};
