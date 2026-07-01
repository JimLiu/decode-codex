// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Pull-request creation runner for local conversation git workflows.

import {
  intlAtom,
  openExternalLink,
  toastControllerAtom,
} from "../boundaries/onboarding-commons-externals.facade";
import { showTerminalErrorToast } from "./terminal-error-toast";
import { gitActionMessages } from "./git-action-messages";
import { createPullRequestMutationAtom } from "./git-mutations";
import type { PushStatus } from "./git-action-blocked-reasons";
import type {
  IntlController,
  MutationResult,
  ScopedStore,
  ToastController,
} from "./git-workflow-runner-types";

export async function createPullRequestRequest({
  scope,
  conversationId,
  cwd,
  hostConfig,
  pushStatus,
  createPullRequestAsDraft,
  operationSource,
  openInBrowser = false,
  title,
  body,
  signal,
}: {
  scope: ScopedStore;
  conversationId?: string | null;
  cwd: string;
  hostConfig: { id: string };
  pushStatus: PushStatus | undefined | null;
  createPullRequestAsDraft?: boolean;
  operationSource: string;
  openInBrowser?: boolean;
  title?: string | null;
  body?: string | null;
  signal?: AbortSignal;
}): Promise<{ url: string | null | undefined } | null> {
  if (signal?.aborted) {
    return null;
  }
  const toaster = scope.get<ToastController>(toastControllerAtom);
  const intl = scope.get<IntlController>(intlAtom);
  if (pushStatus?.branch == null || pushStatus.defaultBranch == null) {
    showTerminalErrorToast({
      toaster,
      title: intl.formatMessage(gitActionMessages.createPullRequestErrorTitle),
      message: null,
    });
    return null;
  }
  try {
    const result = await scope
      .get<{
        mutateAsync(variables: unknown): Promise<MutationResult>;
      }>(createPullRequestMutationAtom, {
        cwd,
        hostId: hostConfig.id,
        operationSource,
      })
      .mutateAsync({
        cwd,
        headBranch: pushStatus.branch,
        baseBranch: pushStatus.defaultBranch,
        isDraft: createPullRequestAsDraft,
        openInBrowser,
        titleOverride: title,
        bodyOverride: body,
        conversationId,
        operationSource,
        signal,
      });
    if (signal?.aborted) {
      return null;
    }
    if (result.status === "success") {
      if (openInBrowser && result.url != null) {
        openExternalLink({
          href: result.url,
          initiator: "pull_request_link",
          openTarget: "external-browser",
        });
      }
      return { url: result.url };
    }
    showTerminalErrorToast({
      toaster,
      title: intl.formatMessage(gitActionMessages.createPullRequestErrorTitle),
      message: result.execOutput == null ? result.error : null,
      execOutput: result.execOutput,
    });
    return null;
  } catch {
    if (!signal?.aborted) {
      showTerminalErrorToast({
        toaster,
        title: intl.formatMessage(
          gitActionMessages.createPullRequestErrorTitle,
        ),
        message: null,
      });
    }
    return null;
  }
}
