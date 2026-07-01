// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Commit workflow orchestrator plus compatibility re-exports for local git step runners.

import {
  analyticsAttributionAtom,
  commitAttributionConfigAtom,
  intlAtom,
  pushStatusAtom,
  refreshPushStatus,
  setConversationBranch,
  toastControllerAtom,
} from "../boundaries/onboarding-commons-externals.facade";
import { gitActionMessages, resolveBranchLabel } from "./git-action-messages";
import {
  activeGitWorkflowAtom,
  cleanupGitWorkflowAbortSignal,
  commitMessageDraftAtom,
  conversationHeadBranchAtom,
  createGitWorkflowAbortSignal,
  shouldRecordConversationBranchAtom,
} from "./local-git-actions-scope";
import { generateCommitMessageMutationAtom } from "./git-action-message-mutations";
import type { PushStatus } from "./git-action-blocked-reasons";
import { LOCAL_GIT_ACTION_OPERATION_SOURCE } from "./git-action-workflow-types";
import { setupWorkflowBranch } from "./git-workflow-branch-runner";
import {
  commitWorkflowChanges,
  resolveCommitAttribution,
} from "./git-workflow-commit-runner";
import { pushWorkflowChanges } from "./git-workflow-push-runner";
import { refreshPushStatusAndPullRequest } from "./git-workflow-refresh";
import type {
  GitActionContext,
  IntlController,
  ScopedStore,
  ToastController,
} from "./git-workflow-runner-types";

export { setupWorkflowBranch } from "./git-workflow-branch-runner";
export {
  commitWorkflowChanges,
  resolveCommitAttribution,
} from "./git-workflow-commit-runner";
export { createPullRequestRequest } from "./git-workflow-pull-request-runner";
export { pushWorkflowChanges } from "./git-workflow-push-runner";
export { refreshPushStatusAndPullRequest } from "./git-workflow-refresh";
export type {
  GitActionContext,
  IntlController,
  MutationResult,
  ScopedStore,
  ToastController,
} from "./git-workflow-runner-types";

export async function runCommitWorkflow(
  scope: ScopedStore,
  context: GitActionContext,
  plan: { newBranch?: string | null; nextStep: "commit" | "push" | string },
): Promise<boolean> {
  const hostScope = { cwd: context.cwd, hostId: context.hostConfig.id };
  if (scope.get(activeGitWorkflowAtom, hostScope) != null) {
    return false;
  }
  const abortSignal = createGitWorkflowAbortSignal(hostScope);
  scope.set(activeGitWorkflowAtom, hostScope, {
    workflow: "commit",
    phase:
      plan.newBranch == null
        ? plan.nextStep === "push"
          ? "pushing"
          : "committing"
        : "creating-branch",
  });
  try {
    const pushStatusResult = scope.get<{ type: string; data?: PushStatus }>(
      pushStatusAtom,
      {
        cwd: context.cwd,
        hostConfig: context.hostConfig,
        operationSource: context.operationSource,
      },
    );
    const initialPushStatus =
      pushStatusResult.type === "success" ? pushStatusResult.data : undefined;
    let branch = plan.newBranch ?? initialPushStatus?.branch;
    let preGeneratedMessage: string | null | undefined;
    if (
      plan.newBranch != null &&
      plan.nextStep !== "push" &&
      scope.get<string>(commitMessageDraftAtom, hostScope).trim().length === 0
    ) {
      preGeneratedMessage = await scope
        .get<{ mutateAsync(variables: unknown): Promise<string | null> }>(
          generateCommitMessageMutationAtom,
          {
            conversationId: context.conversationId,
            cwd: context.cwd,
            hostConfig: context.hostConfig,
          },
        )
        .mutateAsync({ signal: abortSignal });
      if (preGeneratedMessage == null) {
        return false;
      }
    }
    if (plan.newBranch != null) {
      const branchReady = await setupWorkflowBranch({
        scope,
        conversationId: context.conversationId,
        cwd: context.cwd,
        hostConfig: context.hostConfig,
        operationSource: context.operationSource,
        branch: plan.newBranch,
        mode: context.codexWorktree ? "synced" : "worktree",
        signal: abortSignal,
      });
      if (!branchReady) {
        return false;
      }
      await refreshPushStatus(scope, {
        cwd: context.cwd,
        hostConfig: context.hostConfig,
        operationSource: context.operationSource,
      });
    }
    if (plan.nextStep !== "push") {
      if (
        plan.newBranch == null &&
        context.operationSource === LOCAL_GIT_ACTION_OPERATION_SOURCE &&
        context.conversationId != null &&
        scope.get(shouldRecordConversationBranchAtom, context)
      ) {
        const headBranch = scope.get<string>(
          conversationHeadBranchAtom,
          context,
        );
        if (headBranch.length > 0) {
          setConversationBranch(context.conversationId, headBranch);
        }
      }
      scope.set(activeGitWorkflowAtom, hostScope, {
        workflow: "commit",
        phase: "committing",
      });
      const committed = await commitWorkflowChanges({
        scope,
        cwd: context.cwd,
        hostConfig: context.hostConfig,
        resolveCommitMessage: async () => {
          if (preGeneratedMessage != null) {
            return preGeneratedMessage;
          }
          const draftMessage = scope
            .get<string>(commitMessageDraftAtom, hostScope)
            .trim();
          return draftMessage.length > 0
            ? draftMessage
            : scope
                .get<{
                  mutateAsync(variables: unknown): Promise<string | null>;
                }>(generateCommitMessageMutationAtom, {
                  conversationId: context.conversationId,
                  cwd: context.cwd,
                  hostConfig: context.hostConfig,
                })
                .mutateAsync({ signal: abortSignal });
        },
        commitAttribution: resolveCommitAttribution(
          scope.get<{ data?: Record<string, unknown> }>(
            commitAttributionConfigAtom,
            { cwd: context.cwd, hostId: context.hostConfig.id },
          ).data,
        ),
        operationSource: context.operationSource,
        signal: abortSignal,
      });
      if (!committed) {
        return false;
      }
    }
    if (plan.nextStep !== "commit") {
      scope.set(activeGitWorkflowAtom, hostScope, {
        workflow: "commit",
        phase: "pushing",
      });
      const latestPushStatusResult = scope.get<{
        type: string;
        data?: PushStatus;
      }>(pushStatusAtom, {
        cwd: context.cwd,
        hostConfig: context.hostConfig,
        operationSource: context.operationSource,
      });
      const pushStatus =
        latestPushStatusResult.type === "success"
          ? latestPushStatusResult.data
          : undefined;
      branch = pushStatus?.branch ?? branch;
      const pushed = await pushWorkflowChanges({
        scope,
        cwd: context.cwd,
        hostConfig: context.hostConfig,
        pushStatus,
        analyticsAttribution: scope.get(analyticsAttributionAtom),
        operationSource: context.operationSource,
        signal: abortSignal,
      });
      if (!pushed) {
        return false;
      }
      refreshPushStatusAndPullRequest(scope, {
        branch,
        cwd: context.cwd,
        hostConfig: context.hostConfig,
        operationSource: context.operationSource,
      });
      if (abortSignal.aborted) {
        return false;
      }
    }
    const intl = scope.get<IntlController>(intlAtom);
    scope
      .get<ToastController>(toastControllerAtom)
      .success(
        intl.formatMessage(
          plan.nextStep === "commit"
            ? gitActionMessages.commitSuccess
            : gitActionMessages.pushSuccess,
          { branch: resolveBranchLabel(intl, branch) },
        ),
      );
    return true;
  } finally {
    cleanupGitWorkflowAbortSignal(hostScope, abortSignal);
    scope.set(activeGitWorkflowAtom, hostScope, null);
  }
}
