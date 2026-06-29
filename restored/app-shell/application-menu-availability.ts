// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Determines whether the in-app application menu bar (Windows/Linux desktop) should
// be rendered: only when the window chrome is in application-menu mode and the
// Electron bridge exposes a way to open the native application menu.
import { isApplicationMenuWindowChrome } from "../runtime/use-window-controls-safe-area";

type ElectronBridgeWithApplicationMenu = {
  showApplicationMenu?: (
    menuId: string,
    x: number,
    y: number,
  ) => Promise<void> | void;
};

type WindowWithElectronBridge = Window &
  typeof globalThis & {
    electronBridge?: ElectronBridgeWithApplicationMenu;
  };

export function shouldShowApplicationMenu(): boolean {
  return (
    isApplicationMenuWindowChrome() &&
    (window as WindowWithElectronBridge).electronBridge?.showApplicationMenu !=
      null
  );
}
