// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// App terminal controller facade for local conversation surfaces.
import {
  Fx as initEnvironmentTerminalControllerRaw,
  Ix as environmentTerminalControllerService,
  js as environmentTerminalControllerSignal,
} from "../boundaries/current-ref/appg-thread-shared-producer";

export type EnvironmentTerminalRunAction = {
  command: string;
  cwd: string;
  title?: string | null;
};

export type EnvironmentTerminalController = {
  addSessionForConversation(
    conversationId: string,
    sessionId?: string,
    options?: unknown,
  ): string;
  attach(options: unknown): void;
  create(options: unknown): string;
  getSessionForConversation(conversationId: string): string | null;
  runAction(sessionId: string, action: EnvironmentTerminalRunAction): void;
  runHeadlessAction(sessionId: string, action: EnvironmentTerminalRunAction): void;
};

export { environmentTerminalControllerService, environmentTerminalControllerSignal };

export function initEnvironmentTerminalRuntime(): void {
  initEnvironmentTerminalControllerRaw();
}
