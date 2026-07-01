// Shared types for the restored Codex Mobile setup flow.
export type RemoteControlStatus =
  | "disabled"
  | "errored"
  | "connecting"
  | "connected";
export type CodexMobileSetupStep =
  | "initial"
  | "mfa-required"
  | "allow-host"
  | "waiting"
  | "connected"
  | "dismiss";
export type CodexMobileSetupStepOverride = CodexMobileSetupStep | "auto";
export type CodexMobileSetupSurface = "dialog" | "page";
export type RemoteControlHostKind = "local" | string;

export interface RemoteControlClient {
  clientId: string;
  [key: string]: unknown;
}

export interface CodexMobileSetupFlowProps {
  initialStep?: CodexMobileSetupStep | null;
  onClose: () => void;
  variant: CodexMobileSetupSurface;
}

export interface InitialStepInput {
  isMfaSetupRequiredError: boolean;
  mfaSetupRequired: boolean;
  remoteControlStatus: RemoteControlStatus;
}

export interface ShouldShowSetupInput extends InitialStepInput {
  initialRemoteControlStatus: RemoteControlStatus;
  setupStepDebugOverride: CodexMobileSetupStepOverride;
}

export interface ScopeQueryContext {
  get: (token: unknown, ...args: unknown[]) => any;
  queryClient?: {
    getQueryData: (key: unknown[]) => any;
    setQueryData: (key: unknown[], value: unknown) => void;
  };
}

export interface WaitForAddedClientQueryInput {
  existingClientIds: Set<string> | null;
  hostId: string | null;
  localRemoteControlClientId: string | null;
  waiting: boolean;
}
