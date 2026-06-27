// Restored from ref/webview/assets/app-initial~app-main~register-app-actions-CgjL-zeV.js
// App-shell app action registration entry used by the Electron main window.
import { once } from "../runtime/commonjs-interop";
import {
  createWindowAppAction,
  createWindowAppActionRunMap,
  registerWindowsTabsOpenHandler,
  windowsTabsOpenAction,
} from "../runtime/windows-tabs-open";

export const initAppActionHelpersChunk = once(() => undefined);

export const initRegisterAppActionsChunk = once(() => {
  initAppActionHelpersChunk();
});

export {
  createWindowAppAction,
  createWindowAppActionRunMap,
  registerWindowsTabsOpenHandler,
  windowsTabsOpenAction,
};
