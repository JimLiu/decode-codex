// Restored from ref/webview/assets/codex-mobile-setup-flow-XFbY7C-Z.js
// Setup-step status helpers for Codex Mobile setup.
import type {
  CodexMobileSetupStep,
  InitialStepInput,
  RemoteControlStatus,
  ShouldShowSetupInput,
} from "./types";

export function getInitialCodexMobileSetupStep({
  isMfaSetupRequiredError,
  mfaSetupRequired,
  remoteControlStatus,
}: InitialStepInput): CodexMobileSetupStep | undefined {
  return isRemoteControlUnavailable(remoteControlStatus) ||
    isMfaSetupRequiredError
    ? "initial"
    : mfaSetupRequired
      ? "mfa-required"
      : undefined;
}

export function shouldShowCodexMobileSetupFlow({
  initialRemoteControlStatus,
  isMfaSetupRequiredError,
  mfaSetupRequired,
  remoteControlStatus,
  setupStepDebugOverride,
}: ShouldShowSetupInput): boolean {
  return (
    isMfaSetupRequiredError ||
    !!mfaSetupRequired ||
    isRemoteControlUnavailable(remoteControlStatus) ||
    isRemoteControlUnavailable(initialRemoteControlStatus) ||
    setupStepDebugOverride !== "auto"
  );
}

export function getSetupStepForHostState({
  remoteControlHostEnabled,
  hasEnrolledRemoteControlClient,
}: {
  hasEnrolledRemoteControlClient: boolean;
  remoteControlHostEnabled: boolean;
}): CodexMobileSetupStep {
  return remoteControlHostEnabled
    ? hasEnrolledRemoteControlClient
      ? "connected"
      : "waiting"
    : "initial";
}

function isRemoteControlUnavailable(status: RemoteControlStatus): boolean {
  switch (status) {
    case "disabled":
    case "errored":
      return true;
    case "connecting":
    case "connected":
      return false;
  }
}
