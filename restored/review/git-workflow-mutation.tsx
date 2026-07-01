// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Git workflow mutation atom plus the create-pull-request workflow runner used by
// the local conversation commit / create-PR command menus and toolbar actions.

import { FormattedMessage } from "../vendor/react-intl";
import {
  activeGitWorkflowAtom,
  analyticsAttributionAtom,
  appStoreScope,
  branchDisplayConfigAtom,
  cleanupGitWorkflowAbortSignal,
  commitAttributionConfigAtom,
  commitWorkflowChanges,
  conversationHeadBranchAtom,
  createGitWorkflowAbortSignal,
  createPullRequestBodyDraftAtom,
  createPullRequestIncludeLocalChangesAtom,
  createPullRequestRequest,
  createPullRequestTitleDraftAtom,
  createScopedMutationAtom,
  formatBranchForDisplay,
  generateCommitMessageMutationAtom,
  generatePullRequestMessageMutationAtom,
  includeUnstagedChangesAtom,
  openExternalLinkFromEvent,
  pushStatusAtom,
  pushWorkflowChanges,
  recordBranchPushed,
  refreshPushStatus,
  resolveCommitAttribution,
  runCommitWorkflow,
  setConversationBranch,
  setupWorkflowBranch,
  shouldRecordConversationBranchAtom,
  toastControllerAtom,
} from "../boundaries/onboarding-commons-externals.facade";

interface ScopedStore {
  get: (atom: unknown, params?: unknown) => any;
  set: (atom: unknown, params?: unknown, value?: unknown) => void;
}

interface GitWorkflowContext {
  cwd: string;
  hostConfig: { id: string };
  conversationId?: string | null;
  codexWorktree?: boolean;
  operationSource: string;
}

type CreatePullRequestNextStep =
  | "create-pr"
  | "commit-and-create-pr"
  | "commit-push-and-create-pr";

interface CreatePullRequestWorkflowRequest {
  kind: "create-pr";
  newBranch?: string | null;
  nextStep: CreatePullRequestNextStep;
  createPullRequestAsDraft?: boolean;
  openInBrowser?: boolean;
}

async function runCreatePullRequestWorkflow(
  scope: ScopedStore,
  context: GitWorkflowContext,
  request: CreatePullRequestWorkflowRequest,
): Promise<boolean> {
  const hostScope = { cwd: context.cwd, hostId: context.hostConfig.id };
  if (scope.get(activeGitWorkflowAtom, hostScope) != null) {
    return false;
  }

  const abortSignal = createGitWorkflowAbortSignal(hostScope);
  scope.set(activeGitWorkflowAtom, hostScope, {
    workflow: "create-pr",
    phase:
      request.nextStep === "commit-push-and-create-pr"
        ? "generating-commit-message"
        : "generating-pr-message",
  });

  try {
    const includeLocalChanges = scope.get(
      createPullRequestIncludeLocalChangesAtom,
      hostScope,
    );
    scope.set(includeUnstagedChangesAtom, includeLocalChanges);

    const initialPushResult = scope.get(pushStatusAtom, {
      cwd: context.cwd,
      hostConfig: context.hostConfig,
      operationSource: context.operationSource,
    });
    let pushStatus =
      initialPushResult.type === "success" ? initialPushResult.data : undefined;
    let branch = request.newBranch ?? pushStatus?.branch;

    const commitMessage =
      request.nextStep === "commit-push-and-create-pr"
        ? await scope
            .get(generateCommitMessageMutationAtom, {
              conversationId: context.conversationId,
              cwd: context.cwd,
              hostConfig: context.hostConfig,
            })
            .mutateAsync({ headBranch: request.newBranch, signal: abortSignal })
        : null;
    if (
      request.nextStep === "commit-push-and-create-pr" &&
      commitMessage == null
    ) {
      return false;
    }

    const messageResult =
      commitMessage ??
      (await scope
        .get(generatePullRequestMessageMutationAtom, {
          conversationId: context.conversationId,
          cwd: context.cwd,
          hostConfig: context.hostConfig,
        })
        .mutateAsync({
          body: scope.get(createPullRequestBodyDraftAtom, hostScope),
          headBranch: request.newBranch,
          signal: abortSignal,
          title: scope.get(createPullRequestTitleDraftAtom, hostScope),
        }));
    if (messageResult == null) {
      return false;
    }

    if (request.newBranch != null) {
      scope.set(activeGitWorkflowAtom, hostScope, {
        workflow: "create-pr",
        phase: "creating-branch",
      });
      const branchReady = await setupWorkflowBranch({
        scope,
        conversationId: context.conversationId,
        cwd: context.cwd,
        hostConfig: context.hostConfig,
        operationSource: context.operationSource,
        branch: request.newBranch,
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

    if (request.nextStep === "commit-push-and-create-pr") {
      if (
        request.newBranch == null &&
        context.conversationId != null &&
        scope.get(shouldRecordConversationBranchAtom, context)
      ) {
        const headBranch = scope.get(conversationHeadBranchAtom, context);
        if (headBranch.length > 0) {
          setConversationBranch(context.conversationId, headBranch);
        }
      }
      scope.set(activeGitWorkflowAtom, hostScope, {
        workflow: "create-pr",
        phase: "committing",
      });
      const committed = await commitWorkflowChanges({
        scope,
        cwd: context.cwd,
        hostConfig: context.hostConfig,
        resolveCommitMessage: async () => commitMessage?.message ?? null,
        commitAttribution: resolveCommitAttribution(
          scope.get(commitAttributionConfigAtom, {
            cwd: context.cwd,
            hostId: context.hostConfig.id,
          }).data,
        ),
        operationSource: context.operationSource,
        allowNothingToCommit: true,
        signal: abortSignal,
      });
      if (!committed) {
        return false;
      }
    }

    if (request.nextStep !== "create-pr") {
      scope.set(activeGitWorkflowAtom, hostScope, {
        workflow: "create-pr",
        phase: "pushing",
      });
      const latestPushResult = scope.get(pushStatusAtom, {
        cwd: context.cwd,
        hostConfig: context.hostConfig,
        operationSource: context.operationSource,
      });
      pushStatus =
        latestPushResult.type === "success" ? latestPushResult.data : undefined;
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
      recordBranchPushed(scope, {
        branch,
        cwd: context.cwd,
        hostConfig: context.hostConfig,
        operationSource: context.operationSource,
      });
      if (abortSignal.aborted) {
        return false;
      }
    }

    scope.set(activeGitWorkflowAtom, hostScope, {
      workflow: "create-pr",
      phase: "creating-pr",
    });
    const pullRequest = await createPullRequestRequest({
      scope,
      conversationId: context.conversationId,
      cwd: context.cwd,
      hostConfig: context.hostConfig,
      pushStatus,
      createPullRequestAsDraft: request.createPullRequestAsDraft,
      operationSource: context.operationSource,
      openInBrowser: request.openInBrowser,
      title: messageResult.title,
      body: messageResult.body,
      signal: abortSignal,
    });

    if (pullRequest == null || request.openInBrowser) {
      return pullRequest != null;
    }
    showCreatePullRequestSuccessToast(scope, branch, pullRequest.url);
    return true;
  } finally {
    cleanupGitWorkflowAbortSignal(hostScope, abortSignal);
    scope.set(activeGitWorkflowAtom, hostScope, null);
  }
}

function showCreatePullRequestSuccessToast(
  scope: ScopedStore,
  branch: string | null | undefined,
  url: string | null | undefined,
) {
  scope.get(toastControllerAtom).success(
    <FormattedMessage
      id="localConversationPage.createPullRequestSuccessToast"
      defaultMessage={"Created {prLabel} for {branch}"}
      description="Toast shown when creating a pull request succeeds"
      values={{
        branch: formatBranchForDisplay(
          scope.get(branchDisplayConfigAtom),
          branch,
        ),
        prLabel:
          url == null ? (
            "PR"
          ) : (
            <a
              href={url}
              className="cursor-interaction underline decoration-current decoration-[0.5px]"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => {
                openExternalLinkFromEvent({
                  event,
                  href: url,
                  initiator: "pull_request_link",
                });
              }}
            >
              {"PR"}
            </a>
          ),
      }}
    />,
  );
}

export const gitWorkflowMutationAtom = createScopedMutationAtom(
  appStoreScope,
  (params: GitWorkflowContext, { scope }: { scope: ScopedStore }) => ({
    mutationKey: ["local-git-workflow", params.cwd, params.hostConfig.id],
    mutationFn: (
      request: CreatePullRequestWorkflowRequest | { kind: "commit" },
    ) => {
      switch (request.kind) {
        case "commit":
          return runCommitWorkflow(scope, params, request);
        case "create-pr":
          return runCreatePullRequestWorkflow(scope, params, request);
      }
    },
    networkMode: "always",
  }),
);
