// Restored from ref/webview/assets/primary-runtime-install-status-message-9X-UzhFS.js
import type { ReactElement } from "react";
import { FormattedMessage } from "../vendor/react-intl";

export type PrimaryRuntimeInstallPhase =
  | "checking"
  | "configuring"
  | "downloading"
  | "error"
  | "extracting"
  | "installed"
  | "ready"
  | "validating"
  | "verifying";

export type PrimaryRuntimeInstallStatus =
  | undefined
  | {
      downloadedBytes?: number | null;
      phase: PrimaryRuntimeInstallPhase;
      totalBytes?: number | null;
    };

export function primaryRuntimeInstallStatusMessage(
  status: PrimaryRuntimeInstallStatus,
  percent: number,
): ReactElement {
  switch (status?.phase) {
    case undefined:
    case "checking":
    case "downloading":
    case "error":
      return (
        <FormattedMessage
          id="localConversation.primaryRuntimeInstallStatus.downloading"
          defaultMessage="Setting up your workspace: {percent}%"
          description="Thread status shown while Codex downloads required local runtime tools before starting a response"
          values={{
            percent,
          }}
        />
      );
    case "extracting":
      return (
        <FormattedMessage
          id="localConversation.primaryRuntimeInstallStatus.extracting"
          defaultMessage="Preparing your workspace"
          description="Thread status shown while Codex extracts required local runtime tools before starting a response"
        />
      );
    case "verifying":
    case "validating":
    case "installed":
    case "configuring":
    case "ready":
      return (
        <FormattedMessage
          id="localConversation.primaryRuntimeInstallStatus.finalizing"
          defaultMessage="Finalizing your workspace"
          description="Thread status shown while Codex finalizes required local runtime tools before starting a response"
        />
      );
  }
}
export function primaryRuntimeInstallProgress(
  status: PrimaryRuntimeInstallStatus,
): number {
  if (status == null) {
    return 0;
  }
  switch (status.phase) {
    case "checking":
      return 0;
    case "downloading":
      return status.downloadedBytes == null || status.totalBytes == null
        ? 0
        : Math.floor(
            Math.min((status.downloadedBytes / status.totalBytes) * 100, 100),
          );
    case "verifying":
    case "extracting":
      return 98;
    case "validating":
    case "installed":
    case "configuring":
    case "ready":
      return 100;
    case "error":
      return 0;
  }
}
