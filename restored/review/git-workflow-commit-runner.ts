// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Commit-step runner and commit-attribution resolver for local git workflows.

import {
  intlAtom,
  readConfigBooleanFlag,
  toastControllerAtom,
} from "../boundaries/onboarding-commons-externals.facade";
import { showTerminalErrorToast } from "./terminal-error-toast";
import { gitActionMessages } from "./git-action-messages";
import { commitMutationAtom } from "./git-mutations";
import type {
  IntlController,
  MutationResult,
  ScopedStore,
  ToastController,
} from "./git-workflow-runner-types";

export function resolveCommitAttribution(
  config: Record<string, unknown> | undefined,
): string | null | undefined {
  if (readConfigBooleanFlag(config, "codex_git_commit") !== true) {
    return null;
  }
  const attribution = config?.commit_attribution;
  if (attribution == null) {
    return attribution as null | undefined;
  }
  if (typeof attribution !== "string") {
    return undefined;
  }
  const trimmed = attribution.trim();
  return trimmed.length > 0 ? trimmed : null;
}

export async function commitWorkflowChanges({
  scope,
  cwd,
  hostConfig,
  resolveCommitMessage,
  commitAttribution,
  operationSource,
  allowNothingToCommit = false,
  signal,
}: {
  scope: ScopedStore;
  cwd: string;
  hostConfig: { id: string };
  resolveCommitMessage: () => Promise<string | null>;
  commitAttribution?: string | null;
  operationSource: string;
  allowNothingToCommit?: boolean;
  signal?: AbortSignal;
}): Promise<boolean> {
  if (signal?.aborted) {
    return false;
  }
  const toaster = scope.get<ToastController>(toastControllerAtom);
  const intl = scope.get<IntlController>(intlAtom);
  const commitMessage = await resolveCommitMessage();
  if (signal?.aborted || commitMessage == null) {
    return false;
  }
  const trimmedMessage = commitMessage.trim();
  if (trimmedMessage.length === 0) {
    toaster.danger(intl.formatMessage(gitActionMessages.commitMessageEmpty));
    return false;
  }
  try {
    const result = await scope
      .get<{
        mutateAsync(variables: unknown): Promise<MutationResult>;
      }>(commitMutationAtom, { cwd, hostConfig, operationSource })
      .mutateAsync({
        message: trimmedMessage,
        commitAttribution,
        operationSource,
        signal,
      });
    if (signal?.aborted) {
      return false;
    }
    if (result.status === "error") {
      if (allowNothingToCommit && result.errorType === "nothing-to-commit") {
        return true;
      }
      showTerminalErrorToast({
        toaster,
        title: intl.formatMessage(gitActionMessages.commitErrorTitle),
        message: result.execOutput == null ? result.error : null,
        execOutput: result.execOutput,
      });
      return false;
    }
  } catch {
    if (!signal?.aborted) {
      showTerminalErrorToast({
        toaster,
        title: intl.formatMessage(gitActionMessages.commitErrorTitle),
        message: null,
      });
    }
    return false;
  }
  return true;
}
