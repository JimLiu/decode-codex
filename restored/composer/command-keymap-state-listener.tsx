// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Headless listener that keeps the command keymap modifier state in sync with keyboard events.
import { useEffect } from "react";
import {
  appStoreScope,
  resetCommandKeymapState,
  updateCommandKeymapState,
  useScopedStore,
} from "../boundaries/onboarding-commons-externals.facade";

export type CommandKeymapStateListenerProps = {
  keyboardEventTarget?: Window | null;
};

export function CommandKeymapStateListener({
  keyboardEventTarget,
}: CommandKeymapStateListenerProps): null {
  const store = useScopedStore(appStoreScope);
  useEffect(() => {
    const target =
      keyboardEventTarget ?? (typeof window === "undefined" ? null : window);
    if (target == null) return;
    const handleKey = (event: KeyboardEvent) => {
      updateCommandKeymapState(store, event);
    };
    const handleBlur = () => {
      resetCommandKeymapState(store);
    };
    target.addEventListener("keydown", handleKey, true);
    target.addEventListener("keyup", handleKey, true);
    target.addEventListener("blur", handleBlur);
    return () => {
      target.removeEventListener("keydown", handleKey, true);
      target.removeEventListener("keyup", handleKey, true);
      target.removeEventListener("blur", handleBlur);
      resetCommandKeymapState(store);
    };
  }, [keyboardEventTarget, store]);
  return null;
}
