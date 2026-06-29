// Restored from ref/.vite/build/avatar-overlay-composition-surface-preload.js
// avatar-overlay-composition-surface-preload chunk restored from the Codex Electron main bundle.
// Avatar overlay composition surface preload bridge.

import { ipcRenderer } from "electron";

const CONNECT_HOST_MESSAGE_TYPE =
  "connect-avatar-overlay-composition-surface-host";
const CONNECT_HOST_CHANNEL = "avatar-overlay-composition:connect-host";
const FOCUS_COMPOSER_CHANNEL = "avatar-overlay-composition:focus-composer";
const SURFACE_PREPARATION_UPDATED_CHANNEL =
  "avatar-overlay-composition:surface-preparation-updated";

window.addEventListener("message", (event) => {
  if (
    event.source !== window ||
    event.data?.type !== CONNECT_HOST_MESSAGE_TYPE
  ) {
    return;
  }
  const { port } = event.data as { port: MessagePort };
  ipcRenderer.postMessage(CONNECT_HOST_CHANNEL, undefined, [port]);
});

ipcRenderer.on(FOCUS_COMPOSER_CHANNEL, () => {
  window.dispatchEvent(new Event(FOCUS_COMPOSER_CHANNEL));
});

ipcRenderer.on(SURFACE_PREPARATION_UPDATED_CHANNEL, (_event, detail) => {
  window.dispatchEvent(
    new CustomEvent(SURFACE_PREPARATION_UPDATED_CHANNEL, { detail }),
  );
});
