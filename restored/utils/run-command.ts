// Restored from ref/webview/assets/run-command-B0E8hx7Q.js
// run-command-B0E8hx7Q chunk restored from the Codex webview bundle.
import { vscodeApiF } from "../boundaries/vscode-api";
import {
  currentWindowId,
  dispatchWindowRpcAction,
} from "../boundaries/rpc.facade";
type BuiltInCommandHandler = (source?: unknown) => void;
type RegisteredCommandHandler = (
  keyboardEvent?: unknown,
  context?: unknown,
) => boolean | void;
type RegisteredCommandEntry = {
  handler: RegisteredCommandHandler;
  isActive: () => boolean;
};
const builtInCommandHandlers = new Map<string, BuiltInCommandHandler>([
  [
    "newThread",
    () => {
      dispatchWindowRpcAction({
        type: "windows.show_home",
        windowId: currentWindowId,
      });
    },
  ],
  [
    "quickChat",
    () => {
      vscodeApiF.dispatchHostMessage({
        type: "new-quick-chat",
      });
    },
  ],
  [
    "archiveThread",
    (source) => {
      vscodeApiF.dispatchHostMessage({
        type: "archive-thread",
        source,
      });
    },
  ],
  [
    "toggleThreadPin",
    () => {
      vscodeApiF.dispatchHostMessage({
        type: "toggle-thread-pin",
      });
    },
  ],
  [
    "openAvatarOverlay",
    () => {
      vscodeApiF.dispatchMessage("avatar-overlay-open", {});
    },
  ],
  [
    "settings",
    () => {
      vscodeApiF.dispatchHostMessage({
        type: "navigate-to-route",
        path: "/settings",
      });
    },
  ],
  [
    "mcpSettings",
    () => {
      vscodeApiF.dispatchHostMessage({
        type: "navigate-to-route",
        path: "/settings/mcp-settings",
      });
    },
  ],
  [
    "personalitySettings",
    () => {
      vscodeApiF.dispatchHostMessage({
        type: "navigate-to-route",
        path: "/settings/personalization",
      });
    },
  ],
  [
    "keyboardShortcuts",
    () => {
      vscodeApiF.dispatchHostMessage({
        type: "navigate-to-route",
        path: "/settings/keyboard-shortcuts",
      });
    },
  ],
  [
    "manageTasks",
    () => {
      vscodeApiF.dispatchHostMessage({
        type: "navigate-to-route",
        path: "/automations",
        state: {
          automationMode: "create",
        },
      });
    },
  ],
  [
    "openSkills",
    () => {
      vscodeApiF.dispatchHostMessage({
        type: "navigate-to-route",
        path: "/skills",
      });
    },
  ],
  [
    "openFolder",
    () => {
      vscodeApiF.dispatchMessage("electron-add-new-workspace-root-option", {});
    },
  ],
  [
    "toggleSidebar",
    () => {
      dispatchWindowRpcAction({
        type: "windows.sidebar.toggle",
        windowId: currentWindowId,
      });
    },
  ],
  [
    "toggleBottomPanel",
    () => {
      vscodeApiF.dispatchHostMessage({
        type: "toggle-bottom-panel",
      });
    },
  ],
  [
    "toggleTerminal",
    () => {
      dispatchWindowRpcAction({
        type: "windows.terminal.toggle",
        windowId: currentWindowId,
      });
    },
  ],
  [
    "openBrowserTab",
    () => {
      vscodeApiF.dispatchHostMessage({
        type: "open-browser-tab",
        source: "manual",
        initiator: "toggle_browser_command",
      });
    },
  ],
  [
    "toggleBrowserPanel",
    () => {
      vscodeApiF.dispatchHostMessage({
        type: "toggle-browser-panel",
        source: "manual",
        initiator: "toggle_browser_command",
      });
    },
  ],
  [
    "toggleSidePanel",
    () => {
      dispatchWindowRpcAction({
        type: "windows.review.toggle",
        windowId: currentWindowId,
      });
    },
  ],
  [
    "toggleFileTreePanel",
    () => {
      vscodeApiF.dispatchHostMessage({
        type: "toggle-file-tree-panel",
      });
    },
  ],
  [
    "findInThread",
    () => {
      vscodeApiF.dispatchHostMessage({
        type: "find-in-thread",
      });
    },
  ],
  [
    "navigateBack",
    () => {
      vscodeApiF.dispatchHostMessage({
        type: "navigate-back",
      });
    },
  ],
  [
    "navigateForward",
    () => {
      vscodeApiF.dispatchHostMessage({
        type: "navigate-forward",
      });
    },
  ],
  [
    "logOut",
    () => {
      vscodeApiF.dispatchHostMessage({
        type: "log-out",
      });
    },
  ],
]);
const registeredCommandHandlers = new Map<string, RegisteredCommandEntry[]>();
export function registerCommandHandler(
  commandId: string,
  handler: RegisteredCommandHandler,
  {
    isActive,
  }: {
    isActive: () => boolean;
  },
): () => void {
  const entry = {
    handler,
    isActive,
  };
  const handlers = registeredCommandHandlers.get(commandId) ?? [];
  handlers.push(entry);
  registeredCommandHandlers.set(commandId, handlers);
  return () => {
    const currentHandlers = registeredCommandHandlers.get(commandId);
    if (!currentHandlers) return;
    const index = currentHandlers.lastIndexOf(entry);
    if (index === -1) return;
    currentHandlers.splice(index, 1);
    if (currentHandlers.length === 0) {
      registeredCommandHandlers.delete(commandId);
    }
  };
}
export function runCommand(
  commandId: string,
  source?: unknown,
  context?: unknown,
): void {
  executeCommand(commandId, undefined, source, context);
}
export function runKeyboardCommand(
  commandId: string,
  keyboardEvent: unknown,
  context?: unknown,
): boolean {
  return executeCommand(commandId, keyboardEvent, "keyboard_shortcut", context);
}
export function hasBuiltInCommand(commandId: string): boolean {
  return getBuiltInCommandHandler(commandId) != null;
}
function executeCommand(
  commandId: string,
  keyboardEvent: unknown,
  source: unknown,
  context: unknown,
): boolean {
  const handlers = registeredCommandHandlers.get(commandId);
  for (let index = (handlers?.length ?? 0) - 1; index >= 0; index--) {
    const entry = handlers?.[index];
    if (entry != null && entry.isActive()) {
      return entry.handler(keyboardEvent, context) !== false;
    }
  }
  const builtInHandler = getBuiltInCommandHandler(commandId);
  if (builtInHandler == null) return false;
  builtInHandler(source);
  return true;
}
function getBuiltInCommandHandler(
  commandId: string,
): BuiltInCommandHandler | undefined {
  for (const [candidateCommandId, handler] of builtInCommandHandlers) {
    if (candidateCommandId === commandId) return handler;
  }
}
