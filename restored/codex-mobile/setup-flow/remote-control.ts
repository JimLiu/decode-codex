// Restored from ref/webview/assets/codex-mobile-setup-flow-XFbY7C-Z.js
// Remote-control enable flow used by Codex Mobile setup.
import { once as runOnce } from "../../runtime/commonjs-interop";
import {
  currentAppInitialSharedCompatSlotUnderscoreLowerC as loadReactRuntime,
  currentAppInitialSharedCompatSlotLowerI as invokeAppMethod,
} from "../../runtime/current-app-initial/current-app-initial-shared-runtime";
import {
  currentAppInitialSharedControlConnectConnectionRuntime as initRemoteControlConnectionRuntime,
  currentAppInitialSharedMember0593 as setRemoteControlPending,
  currentAppInitialSharedMember0454 as waitForRemoteControlConnectionReady,
  currentAppInitialSharedDisplayRuntime as initCurrentSharedDisplayRuntime,
} from "../../runtime/current-app-initial/remote-projects-app-shared-runtime";
import {
  setLocalRemoteControlEnabled,
  initLocalRemoteControlEnabledChunk,
  initSetRemoteControlEnabledForHostChunk,
  setRemoteControlEnabledForHost,
} from "../../runtime/current-app-initial/remote-connections-auth-state-runtime";
import type { RemoteControlHostKind } from "./types";

async function setRemoteControlEnabledForSetup(
  routeScope: any,
  hostKind: RemoteControlHostKind,
  enabled: boolean,
): Promise<unknown> {
  return hostKind === "local"
    ? (await invokeAppMethod("set-local-remote-control-enabled", {
        params: { enabled },
      }),
      setLocalRemoteControlEnabled(routeScope, enabled, { force: true }))
    : setRemoteControlEnabledForHost(routeScope, hostKind, enabled);
}

export async function enableRemoteControlForSetup(
  routeScope: any,
  hostKind: RemoteControlHostKind,
  waitForConnectionReady: boolean,
): Promise<unknown> {
  if (!waitForConnectionReady)
    return setRemoteControlEnabledForSetup(routeScope, hostKind, false);

  setRemoteControlPending(routeScope, hostKind, false);
  const connectionReady = waitForRemoteControlConnectionReady(
    routeScope,
    hostKind,
    { ignoreCurrentError: true },
  );

  try {
    const enableRemoteControl = setRemoteControlEnabledForSetup(
      routeScope,
      hostKind,
      true,
    );
    return await Promise.race([
      connectionReady,
      enableRemoteControl.then(() => connectionReady),
    ]);
  } catch (error) {
    setRemoteControlPending(routeScope, hostKind, true);
    throw error;
  }
}

export const initRemoteControlEnableForSetupChunk = runOnce(() => {
  initSetRemoteControlEnabledForHostChunk();
  initRemoteControlConnectionRuntime();
  initCurrentSharedDisplayRuntime();
  loadReactRuntime();
  initLocalRemoteControlEnabledChunk();
});
