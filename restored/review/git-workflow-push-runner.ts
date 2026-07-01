// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Push-step runner for local conversation git workflows.

import {
  intlAtom,
  toastControllerAtom,
} from "../boundaries/onboarding-commons-externals.facade";
import { showTerminalErrorToast } from "./terminal-error-toast";
import { gitActionMessages } from "./git-action-messages";
import { pushMutationAtom } from "./git-mutations";
import type { PushStatus } from "./git-action-blocked-reasons";
import type {
  IntlController,
  MutationResult,
  ScopedStore,
  ToastController,
} from "./git-workflow-runner-types";

export async function pushWorkflowChanges({
  scope,
  cwd,
  hostConfig,
  pushStatus,
  analyticsAttribution,
  operationSource,
  forcePush = false,
  signal,
}: {
  scope: ScopedStore;
  cwd: string;
  hostConfig: { id: string };
  pushStatus: PushStatus | undefined | null;
  analyticsAttribution?: Record<string, unknown> | null;
  operationSource: string;
  forcePush?: boolean;
  signal?: AbortSignal;
}): Promise<boolean> {
  if (signal?.aborted) {
    return false;
  }
  const toaster = scope.get<ToastController>(toastControllerAtom);
  const intl = scope.get<IntlController>(intlAtom);
  const errorTitle = intl.formatMessage(
    forcePush
      ? gitActionMessages.forcePushErrorTitle
      : gitActionMessages.pushErrorTitle,
  );
  if (pushStatus == null) {
    showTerminalErrorToast({ toaster, title: errorTitle, message: null });
    return false;
  }
  const pushVariables: {
    cwd: string;
    force: boolean;
    refspec?: string;
    setUpstream?: boolean;
  } = { cwd, force: forcePush };
  if (!pushStatus.upstreamRef && pushStatus.branch) {
    pushVariables.refspec = `HEAD:refs/heads/${pushStatus.branch}`;
    pushVariables.setUpstream = true;
  }
  try {
    const result = await scope
      .get<{
        mutateAsync(variables: unknown): Promise<MutationResult>;
      }>(pushMutationAtom, { cwd, hostConfig, operationSource })
      .mutateAsync({
        ...pushVariables,
        analyticsAttribution,
        operationSource,
        signal,
      });
    if (result.status === "error") {
      if (!signal?.aborted) {
        showTerminalErrorToast({
          toaster,
          title: errorTitle,
          message:
            result.execOutput == null
              ? intl.formatMessage(gitActionMessages.pushErrorTitle)
              : null,
          execOutput: result.execOutput,
        });
      }
      return false;
    }
  } catch {
    if (!signal?.aborted) {
      showTerminalErrorToast({ toaster, title: errorTitle, message: null });
    }
    return false;
  }
  return true;
}
