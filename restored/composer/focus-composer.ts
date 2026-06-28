// Restored from ref/webview/assets/focus-composer-esygSDJO.js

import { _vscodeApiD as VscodeMessageBus } from "../boundaries/vscode-api";
type ComposerInputElement = HTMLElement & {
  focus(): void;
};
type ComposerController = {
  focus(): void;
  insertTextAtSelection(text: string): void;
};
type ComposerRegistration = {
  composerId: string;
  isPrimaryComposer: boolean;
};
type ComposerMessageHandler = (message: unknown) => void;
const OPEN_OVERLAY_SELECTOR = [
  `[role="dialog"][data-state="open"]`,
  `[role="menu"][data-state="open"]`,
  `[role="listbox"][data-state="open"]`,
].join(", ");
const TERMINAL_SELECTOR = "[data-codex-terminal]";
const INPUT_EXCLUSION_SELECTOR = [TERMINAL_SELECTOR, "dil-renderer"].join(", ");
const registeredComposers = new Map<
  ComposerInputElement,
  ComposerRegistration
>();
const keydownHandlersByComposer = new Map<
  ComposerInputElement,
  Set<(event: KeyboardEvent) => void>
>();
const pasteForwardingComposers = new Set<ComposerInputElement>();
const hostMessageSubscriptions = new Map<
  string,
  {
    handlersByComposerInput: Map<
      ComposerInputElement,
      Set<ComposerMessageHandler>
    >;
    unsubscribe: () => void;
  }
>();
let lastFocusedComposer: ComposerInputElement | null = null;
function focusComposerInput() {
  const composerInput = getActiveComposerInput();
  if (composerInput != null) {
    requestAnimationFrame(() => {
      composerInput.focus();
    });
  }
}
function registerComposerInput(
  composerInput: ComposerInputElement,
  { composerId, isPrimaryComposer }: ComposerRegistration,
) {
  const rememberFocusedComposer = () => {
    lastFocusedComposer = composerInput;
  };
  registeredComposers.set(composerInput, {
    composerId,
    isPrimaryComposer,
  });
  composerInput.addEventListener("focus", rememberFocusedComposer);
  if (document.activeElement === composerInput) {
    lastFocusedComposer = composerInput;
  }
  return () => {
    registeredComposers.delete(composerInput);
    composerInput.removeEventListener("focus", rememberFocusedComposer);
    if (lastFocusedComposer === composerInput) lastFocusedComposer = null;
  };
}
function registerComposerKeydownHandler(
  composerInput: ComposerInputElement,
  handler: (event: KeyboardEvent) => void,
) {
  const handlers = keydownHandlersByComposer.get(composerInput) ?? new Set();
  if (keydownHandlersByComposer.size === 0) {
    window.addEventListener("keydown", dispatchComposerKeydown, true);
  }
  handlers.add(handler);
  keydownHandlersByComposer.set(composerInput, handlers);
  return () => {
    handlers.delete(handler);
    if (handlers.size === 0) keydownHandlersByComposer.delete(composerInput);
    if (keydownHandlersByComposer.size === 0) {
      window.removeEventListener("keydown", dispatchComposerKeydown, true);
    }
  };
}
function registerComposerPasteForwarding(composerInput: ComposerInputElement) {
  if (pasteForwardingComposers.size === 0) {
    window.addEventListener("paste", forwardPasteToActiveComposer, true);
  }
  pasteForwardingComposers.add(composerInput);
  return () => {
    pasteForwardingComposers.delete(composerInput);
    if (pasteForwardingComposers.size === 0) {
      window.removeEventListener("paste", forwardPasteToActiveComposer, true);
    }
  };
}
function subscribeFocusedComposerHostEvent(
  eventType: string,
  composerInput: ComposerInputElement,
  handler: ComposerMessageHandler,
) {
  let subscription = hostMessageSubscriptions.get(eventType);
  if (subscription == null) {
    const handlersByComposerInput = new Map<
      ComposerInputElement,
      Set<ComposerMessageHandler>
    >();
    subscription = {
      handlersByComposerInput,
      unsubscribe: VscodeMessageBus.getInstance().subscribe(
        eventType,
        (message) => {
          const activeComposer = getActiveComposerInput();
          if (activeComposer != null) {
            for (const handler of handlersByComposerInput.get(activeComposer) ??
              []) {
              handler(message);
            }
          }
        },
      ),
    };
    hostMessageSubscriptions.set(eventType, subscription);
  }
  const handlers =
    subscription.handlersByComposerInput.get(composerInput) ?? new Set();
  handlers.add(handler);
  subscription.handlersByComposerInput.set(composerInput, handlers);
  return () => {
    handlers.delete(handler);
    if (handlers.size === 0) {
      subscription.handlersByComposerInput.delete(composerInput);
    }
    if (subscription.handlersByComposerInput.size === 0) {
      subscription.unsubscribe();
      hostMessageSubscriptions.delete(eventType);
    }
  };
}
function isActiveComposerInput(composerInput: ComposerInputElement) {
  return getActiveComposerInput() === composerInput;
}
function isFocusedComposerId(composerId: string) {
  const composerInput = getActiveComposerInput();
  return (
    composerInput != null &&
    registeredComposers.get(composerInput)?.composerId === composerId
  );
}
function focusTerminalTextarea(root: ParentNode = document) {
  root.querySelector(TERMINAL_SELECTOR)?.querySelector("textarea")?.focus();
}
function handleTypeToComposer({
  composerController,
  event,
}: {
  composerController: ComposerController;
  event: KeyboardEvent;
}) {
  if (isPrintableComposerKey(event) && !isTypingInsideInputSurface(event)) {
    event.preventDefault();
    composerController.focus();
    composerController.insertTextAtSelection(event.key);
  }
}
function dispatchComposerKeydown(event: KeyboardEvent) {
  if (document.querySelector(OPEN_OVERLAY_SELECTOR) != null) return;
  const composerInput = getActiveComposerInput();
  if (composerInput != null) {
    for (const handler of keydownHandlersByComposer.get(composerInput) ?? []) {
      handler(event);
    }
  }
}
function forwardPasteToActiveComposer(event: ClipboardEvent) {
  if (event.defaultPrevented || isTypingInsideInputSurface(event)) return;
  const composerInput = getActiveComposerInput();
  if (composerInput == null || !pasteForwardingComposers.has(composerInput)) {
    return;
  }
  event.preventDefault();
  composerInput.focus();
  const forwardedPaste = new Event("paste", {
    bubbles: true,
    cancelable: true,
    composed: true,
  });
  Object.defineProperty(forwardedPaste, "clipboardData", {
    value: event.clipboardData,
  });
  composerInput.dispatchEvent(forwardedPaste);
}
function getActiveComposerInput(): ComposerInputElement | null {
  if (
    lastFocusedComposer != null &&
    lastFocusedComposer.isConnected &&
    registeredComposers.has(lastFocusedComposer)
  ) {
    return lastFocusedComposer;
  }
  lastFocusedComposer = null;
  for (const [composerInput, { isPrimaryComposer }] of registeredComposers) {
    if (isPrimaryComposer && composerInput.isConnected) return composerInput;
  }
  for (const composerInput of registeredComposers.keys()) {
    if (composerInput.isConnected) return composerInput;
  }
  return document.querySelector("[data-codex-composer]");
}
function isPrintableComposerKey(event: KeyboardEvent) {
  return (
    !event.defaultPrevented &&
    !event.isComposing &&
    !event.metaKey &&
    !event.ctrlKey &&
    event.key !== " " &&
    event.key !== "\xA0" &&
    event.key.length === 1
  );
}
function isTypingInsideInputSurface(event: Event) {
  return (
    event
      .composedPath()
      .some(
        (target) =>
          target instanceof HTMLElement &&
          (isTextInputElement(target) ||
            target.closest(INPUT_EXCLUSION_SELECTOR) != null),
      ) || document.querySelector(OPEN_OVERLAY_SELECTOR) != null
  );
}
function isTextInputElement(element: HTMLElement | null) {
  if (element == null) return false;
  if (element.isContentEditable) return true;
  const tagName = element.tagName.toLowerCase();
  return tagName === "input" || tagName === "textarea" || tagName === "select"
    ? true
    : element.closest("[contenteditable='true']") != null;
}
export {
  registerComposerKeydownHandler,
  registerComposerInput,
  isActiveComposerInput,
  handleTypeToComposer,
  focusTerminalTextarea,
  subscribeFocusedComposerHostEvent,
  isFocusedComposerId,
  registerComposerPasteForwarding,
  focusComposerInput,
};
