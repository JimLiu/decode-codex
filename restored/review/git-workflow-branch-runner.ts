// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Worktree/synced branch setup runner for local conversation git workflows.

import {
  intlAtom,
  setConversationBranch,
  toastControllerAtom,
} from "../boundaries/onboarding-commons-externals.facade";
import { showTerminalErrorToast } from "./terminal-error-toast";
import { gitActionMessages } from "./git-action-messages";
import { createAndCheckoutBranchMutationAtom } from "./git-mutations";
import type {
  IntlController,
  MutationResult,
  ScopedStore,
  ToastController,
} from "./git-workflow-runner-types";

export async function setupWorkflowBranch({
  scope,
  conversationId,
  cwd,
  hostConfig,
  operationSource,
  branch,
  mode,
  signal,
}: {
  scope: ScopedStore;
  conversationId?: string | null;
  cwd: string;
  hostConfig: { id: string };
  operationSource: string;
  branch: string;
  mode: "synced" | "worktree";
  signal?: AbortSignal;
}): Promise<boolean> {
  if (signal?.aborted) {
    return false;
  }
  const toaster = scope.get<ToastController>(toastControllerAtom);
  const intl = scope.get<IntlController>(intlAtom);
  const createBranchErrorTitle = intl.formatMessage(
    gitActionMessages.createBranchErrorTitle,
  );
  try {
    const result = await scope
      .get<{
        mutateAsync(variables: unknown): Promise<MutationResult>;
      }>(createAndCheckoutBranchMutationAtom, {
        cwd,
        hostConfig,
        operationSource,
      })
      .mutateAsync({ branch, failIfExists: true, mode, signal });
    switch (result.status) {
      case "success":
        if (conversationId != null) {
          setConversationBranch(conversationId, branch);
        }
        return !signal?.aborted;
      case "create-error":
        if (!signal?.aborted) {
          showTerminalErrorToast({
            toaster,
            title: createBranchErrorTitle,
            message: result.execOutput == null ? result.error : null,
            execOutput: result.execOutput,
          });
        }
        return false;
      case "checkout-error":
        if (!signal?.aborted) {
          showTerminalErrorToast({
            toaster,
            title: intl.formatMessage(
              gitActionMessages.checkoutBranchErrorTitle,
            ),
            message: result.execOutput == null ? result.error : null,
            execOutput: result.execOutput,
          });
        }
        return false;
      default:
        return false;
    }
  } catch {
    if (!signal?.aborted) {
      showTerminalErrorToast({
        toaster,
        title: createBranchErrorTitle,
        message: createBranchErrorTitle,
      });
    }
    return false;
  }
}
