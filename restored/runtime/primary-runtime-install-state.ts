// Restored from ref/webview/assets/primary-runtime-install-state-BkTYe0Xa.js
import { appScopeRoot, createAppScopeSignal } from "../boundaries/app-scope";
import { appServices } from "../boundaries/rpc.facade";
import { LOCAL_HOST_ID } from "../boundaries/use-host-config.facade";
import { vscodeApiH as vscodeLogger } from "../boundaries/vscode-api";
type PrimaryRuntimeRelease = "latest" | "latest-alpha" | string;
type PrimaryRuntimeInstallRequest = "install" | "finishInstall";
type PrimaryRuntimeInstallArgs = {
  hostId: string;
  release: PrimaryRuntimeRelease;
};
type PrimaryRuntimeInstallResult = {
  status?: string;
  bundleVersion?: string;
  [key: string]: unknown;
};
type PrimaryRuntimeService = {
  cancelInstall(args: { hostId: string }): unknown;
  install(
    args: PrimaryRuntimeInstallArgs,
  ): Promise<PrimaryRuntimeInstallResult>;
  finishInstall(
    args: PrimaryRuntimeInstallArgs,
  ): Promise<PrimaryRuntimeInstallResult>;
};
export type PrimaryRuntimeInstallStatus =
  | {
      phase?:
        | "ready"
        | "error"
        | "checking"
        | "downloading"
        | "verifying"
        | "extracting"
        | "validating"
        | "installed"
        | "configuring";
      [key: string]: unknown;
    }
  | null
  | undefined;
type PrimaryRuntimeInstallOptions = {
  hostId?: string;
  release?: PrimaryRuntimeRelease;
};
type RequestPrimaryRuntimeInstallOptions = {
  hostId: string;
  release: PrimaryRuntimeRelease;
  request: PrimaryRuntimeInstallRequest;
};
const FIRST_TURN_INSTALL_TIMEOUT_MS = 90_000;
const activeInstallRequests = new Map<
  string,
  Promise<PrimaryRuntimeInstallResult>
>();
let installRequestQueue: Promise<void> = Promise.resolve();
function getPrimaryRuntimeService(): PrimaryRuntimeService {
  const primaryRuntime = appServices.primaryRuntime as
    | PrimaryRuntimeService
    | undefined;
  if (primaryRuntime == null) {
    throw Error("Primary runtime is unavailable");
  }
  return primaryRuntime;
}
export function hasPendingPrimaryRuntimeInstall(): boolean {
  return activeInstallRequests.size > 0;
}
export function cancelPrimaryRuntimeInstall({
  hostId,
}: {
  hostId: string;
}): Promise<unknown> {
  try {
    return Promise.resolve(
      getPrimaryRuntimeService().cancelInstall({
        hostId,
      }),
    );
  } catch (error) {
    return Promise.reject(error);
  }
}
export function requestPrimaryRuntimeInstall({
  hostId,
  request,
  release,
}: RequestPrimaryRuntimeInstallOptions): Promise<PrimaryRuntimeInstallResult> {
  const requestKey = JSON.stringify({
    hostId,
    release,
  });
  const activeRequest = activeInstallRequests.get(requestKey);
  if (activeRequest != null) return activeRequest;
  const installPromise = installRequestQueue.then(() => {
    const primaryRuntime = getPrimaryRuntimeService();
    return primaryRuntime[request]({
      hostId,
      release,
    });
  });
  activeInstallRequests.set(requestKey, installPromise);
  installRequestQueue = installPromise.then(
    () => undefined,
    () => undefined,
  );
  installPromise
    .finally(() => {
      activeInstallRequests.delete(requestKey);
    })
    .catch(() => undefined);
  return installPromise;
}
export const primaryRuntimeInstallReleaseSignal = createAppScopeSignal(
  appScopeRoot,
  "latest",
);
export const primaryRuntimeInstallStatusSignal = createAppScopeSignal(
  appScopeRoot,
  null,
);

export function initPrimaryRuntimeInstallStateChunk(): void {}

export function isPrimaryRuntimeInstallProgressPhase(
  status: PrimaryRuntimeInstallStatus,
): boolean {
  switch (status?.phase) {
    case undefined:
    case "ready":
    case "error":
      return false;
    case "checking":
    case "downloading":
    case "verifying":
    case "extracting":
    case "validating":
    case "installed":
    case "configuring":
      return true;
  }
}
async function finishPrimaryRuntimeInstall({
  hostId = LOCAL_HOST_ID,
  release = "latest",
}: PrimaryRuntimeInstallOptions = {}): Promise<void> {
  await requestPrimaryRuntimeInstall({
    hostId,
    release,
    request: "finishInstall",
  });
}
export async function finishPrimaryRuntimeInstallBeforeFirstTurn({
  hostId = LOCAL_HOST_ID,
  release = "latest",
}: PrimaryRuntimeInstallOptions = {}): Promise<void> {
  const installPromise = finishPrimaryRuntimeInstall({
    hostId,
    release,
  });
  let timeoutId: number | undefined;
  try {
    const result = await Promise.race([
      installPromise.then(() => "ready" as const),
      new Promise<"timeout">((resolve) => {
        timeoutId = window.setTimeout(
          () => resolve("timeout"),
          FIRST_TURN_INSTALL_TIMEOUT_MS,
        );
      }),
    ]);
    if (result === "timeout") {
      vscodeLogger.warning(
        "Primary runtime install timed out before first turn",
        {
          safe: {
            timeoutMs: FIRST_TURN_INSTALL_TIMEOUT_MS,
          },
          sensitive: {},
        },
      );
      installPromise.catch((error) => {
        vscodeLogger.error(
          "Primary runtime install failed after first-turn timeout",
          {
            safe: {},
            sensitive: {
              error,
            },
          },
        );
      });
    }
  } catch (error) {
    vscodeLogger.error("Primary runtime install failed before first turn", {
      safe: {},
      sensitive: {
        error,
      },
    });
  } finally {
    if (timeoutId != null) window.clearTimeout(timeoutId);
  }
}
