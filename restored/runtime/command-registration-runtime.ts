// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// Command registration and keyboard modifier runtime helpers.
import {
  Ln as initKeyboardModifierStateRaw,
  Rn as useCommandRegistrationRaw,
} from "../vendor/projects-app-shared-runtime";

export type CommandRegistrationOptions = {
  contextHandler?: (context: unknown) => void;
  enabled?: boolean;
  isActive?: (context: unknown) => boolean;
  keyboardHandler?: (event: KeyboardEvent, context: unknown) => boolean | void;
  menuItem?: unknown;
};

export function initKeyboardModifierStateRuntime(): void {
  initKeyboardModifierStateRaw();
}

export function useCommandRegistration(
  commandId: string,
  handler: () => void,
  options?: CommandRegistrationOptions,
): void {
  useCommandRegistrationRaw(commandId, handler, options);
}
