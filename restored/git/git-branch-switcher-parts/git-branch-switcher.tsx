// Restored from ref/webview/assets/git-branch-switcher-BokkKYIT.js

import React from "react";
import { once } from "../../runtime/commonjs-interop";
import {
  appScope,
  branchSwitchReviewTargetSignal,
  CommitChangesBeforeBranchSwitchPanel,
  currentGitBranchSignal,
  DropdownMenu,
  getChunkModuleExports,
  initAppDialog,
  initAppScope,
  initBranchSearchMenuMessages,
  initBranchSearchMenuRuntime,
  initBranchSwitchReviewPanelRuntime,
  initBranchSwitchReviewRuntime,
  initButtonComponentPrimitives,
  initCommitChangesBeforeBranchSwitchPanel,
  initCommitFlowRuntime,
  initConversationBranchOverrideRuntime,
  initConversationStateSelectors,
  initCurrentGitBranchSignal,
  initDefaultBranchNameRuntime,
  initDialogLayoutComponents,
  initDropdownMenuPrimitives,
  initGitBranchQueryRuntime,
  initIntlMessageRuntime,
  initIntlRuntime,
  initPlusIcon,
  initQueryDurationConstants,
  initReactRuntime,
  initScopeRuntime,
  initSwitchRuntime,
  initToastRuntime,
  initWorkspaceQueryRuntime,
  localConversationTitleSignal,
  normalizeWorkspacePath,
  setConversationBranchOverride,
  toastSignal,
  useIntl,
  useScope,
  useScopedValue,
} from "../../runtime/git-branch-switcher-runtime";
import { initDiffStatsChunk } from "../git-review-primitives";
import { CreateAndCheckoutBranchDialog, UncommittedChangesDialog } from "./branch-dialogs";
import {
  initCheckoutBranchMutation,
  initCreateBranchMutation,
  initGitBranchSearchQuery,
  initGitRecentBranchesQuery,
  initGitStatusSummaryQuery,
  useCheckoutBranchMutation,
  useCreateBranchMutation,
} from "./branch-queries";
import { initSanitizeGitBranchSearchInput } from "./branch-name";
import { GitBranchDropdownContent } from "./branch-dropdown";
import { BRANCH_SWITCHER_OPERATION_SOURCE } from "./constants";
import type {
  BranchSwitchNextAction,
  GitMutationResponse,
  GitOperationResult,
  HostConfig,
} from "./types";

type RenderControlInput = {
  currentBranch: string | null;
  disabled: boolean;
  isPending: boolean;
  switchTooltipText: string;
};

type RenderStaticBranchInput = {
  currentBranch: string;
};

export type GitBranchSwitcherProps = {
  gitRoot?: string | null;
  hostConfig: HostConfig;
  localConversationId?: string | null;
  shouldShow: boolean;
  side?: string;
  align?: string;
  renderStaticBranch?: (input: RenderStaticBranchInput) => React.ReactNode;
  renderControl: (input: RenderControlInput) => React.ReactNode;
  onOpenChange?: (open: boolean) => void;
};

type BlockedCheckoutInput = {
  errorType?: string;
  conflictedPaths?: string[];
  nextAction: BranchSwitchNextAction;
};

type CommitFlowStatus = "idle" | "success" | string;

function incrementVersion(version: number): number {
  return version + 1;
}

export function GitBranchSwitcher({
  gitRoot,
  hostConfig,
  localConversationId,
  shouldShow,
  side = "top",
  align = "end",
  renderStaticBranch,
  renderControl,
  onOpenChange,
}: GitBranchSwitcherProps): React.ReactElement | null {
  const scope = useScope(appScope);
  const intl = useIntl();
  const [isDropdownOpen, setDropdownOpen] = React.useState(false);
  const [hasOpenedDropdown, setHasOpenedDropdown] = React.useState(false);
  const [isUncommittedDialogOpen, setUncommittedDialogOpenState] = React.useState(false);
  const [isCreateDialogOpen, setCreateDialogOpen] = React.useState(false);
  const [isCommitFlowOpen, setCommitFlowOpen] = React.useState(false);
  const [commitFlowResetNonce, setCommitFlowResetNonce] = React.useState(0);
  const [pendingBlockedAction, setPendingBlockedAction] = React.useState<BranchSwitchNextAction | null>(null);
  const [conflictFiles, setConflictFiles] = React.useState<string[]>([]);
  const [commitFlowStatus, setCommitFlowStatus] = React.useState<CommitFlowStatus>("idle");
  const currentBranchRequest = {
    cwd: gitRoot,
    enabled: shouldShow,
    hostConfig,
    operationSource: BRANCH_SWITCHER_OPERATION_SOURCE,
    refetchOnWindowFocus: "always",
    staleTime: null,
  };
  const currentBranchQuery = useScopedValue(
    currentGitBranchSignal,
    currentBranchRequest,
  ) as GitOperationResult<string>;
  const currentBranch = currentBranchQuery.data?.trim() ?? "";
  const shouldRenderSwitcher = shouldShow && currentBranch.length > 0;
  const conversationTitle = useScopedValue(localConversationTitleSignal, localConversationId) as
    | string
    | null
    | undefined;
  const checkoutBranchMutation = useCheckoutBranchMutation(
    gitRoot,
    hostConfig,
    BRANCH_SWITCHER_OPERATION_SOURCE,
  );
  const createBranchMutation = useCreateBranchMutation(
    gitRoot,
    hostConfig,
    BRANCH_SWITCHER_OPERATION_SOURCE,
  );
  const normalizedCwd = gitRoot == null ? null : normalizeWorkspacePath(gitRoot);
  const reviewTarget =
    normalizedCwd == null
      ? null
      : {
          cwd: normalizedCwd,
          hostId: hostConfig.id,
        };
  const isPending = Boolean(checkoutBranchMutation.isPending || createBranchMutation.isPending);
  const switchTooltipText = intl.formatMessage({
    id: "composer.footer.branchSwitch.tooltip",
    defaultMessage: "Switch branch",
    description: "Tooltip shown for controls that switch git branches",
  });

  const closeDropdown = () => {
    setDropdownOpen(false);
  };
  const showCheckoutError = (message: string) => {
    scope.get(toastSignal).danger(
      intl.formatMessage(
        {
          id: "composer.footer.branchSwitch.checkoutError",
          defaultMessage: "Failed to switch branch: {message}",
          description:
            "Toast shown when switching local branches from the composer footer fails",
        },
        {
          message,
        },
      ),
    );
  };
  const showCreateError = (message: string) => {
    scope.get(toastSignal).danger(
      intl.formatMessage(
        {
          id: "composer.footer.branchSwitch.createBranchError",
          defaultMessage: "Failed to create branch: {message}",
          description:
            "Toast shown when creating a branch from the composer footer fails",
        },
        {
          message,
        },
      ),
    );
  };
  const handleBlockedCheckout = ({
    errorType,
    conflictedPaths,
    nextAction,
  }: BlockedCheckoutInput): boolean => {
    if (errorType !== "blocked-by-working-tree-changes") {
      return false;
    }

    setConflictFiles(conflictedPaths ?? []);
    setPendingBlockedAction(nextAction);
    closeDropdown();
    setCreateDialogOpen(false);
    setUncommittedDialogOpenState(true);
    return true;
  };
  const checkoutBranch = async (branchName: string) => {
    if (isPending || gitRoot == null) {
      return;
    }

    if (branchName === currentBranch) {
      closeDropdown();
      return;
    }

    try {
      const response = await checkoutBranchMutation.mutateAsync({
        cwd: gitRoot,
        branch: branchName,
      });

      if (response.status === "error") {
        if (
          handleBlockedCheckout({
            errorType: response.errorType,
            conflictedPaths: response.conflictedPaths,
            nextAction: {
              type: "checkout",
              branch: branchName,
            },
          })
        ) {
          return;
        }

        showCheckoutError(response.error);
        return;
      }

      if (localConversationId != null) {
        setConversationBranchOverride(localConversationId, branchName);
      }
      closeDropdown();
    } catch (error) {
      showCheckoutError(error instanceof Error ? error.message : String(error));
    }
  };
  const createAndCheckoutBranch = async (branchName: string) => {
    if (isPending || gitRoot == null) {
      return;
    }

    try {
      const createResponse = await createBranchMutation.mutateAsync({
        cwd: gitRoot,
        branch: branchName,
        mode: "worktree",
        failIfExists: true,
      });

      if (createResponse.status === "error") {
        showCreateError(createResponse.error);
        return;
      }

      const checkoutResponse = await checkoutBranchMutation.mutateAsync({
        cwd: gitRoot,
        branch: branchName,
      });

      if (checkoutResponse.status === "error") {
        if (
          handleBlockedCheckout({
            errorType: checkoutResponse.errorType,
            conflictedPaths: checkoutResponse.conflictedPaths,
            nextAction: {
              type: "create-and-checkout",
              branch: branchName,
            },
          })
        ) {
          return;
        }

        showCheckoutError(checkoutResponse.error);
        setCreateDialogOpen(false);
        return;
      }

      if (localConversationId != null) {
        setConversationBranchOverride(localConversationId, branchName);
      }
      setCreateDialogOpen(false);
    } catch (error) {
      showCreateError(error instanceof Error ? error.message : String(error));
    }
  };
  const resetBlockedCheckoutState = () => {
    setCommitFlowOpen(false);
    setCommitFlowStatus("idle");
    setConflictFiles([]);
    setPendingBlockedAction(null);
  };
  const setUncommittedDialogOpen = (open: boolean) => {
    setUncommittedDialogOpenState(open);
    if (!open) {
      setConflictFiles([]);
      setPendingBlockedAction(null);
    }
  };
  const openCommitFlow = () => {
    if (reviewTarget == null) {
      return;
    }

    scope.set(branchSwitchReviewTargetSignal, reviewTarget, "");
    setCommitFlowStatus("idle");
    setCommitFlowResetNonce(incrementVersion);
    setUncommittedDialogOpenState(false);
    setCommitFlowOpen(true);
  };
  const handleCommitFlowStatus = (status: GitMutationResponse["status"] | CommitFlowStatus) => {
    if (status === "success" && pendingBlockedAction != null) {
      const action = pendingBlockedAction;
      resetBlockedCheckoutState();

      if (action.type === "checkout") {
        void checkoutBranch(action.branch);
        return;
      }

      void createAndCheckoutBranch(action.branch);
      return;
    }

    setCommitFlowStatus(status);
  };

  if (!shouldRenderSwitcher) {
    return shouldShow && currentBranchQuery.isSuccess
      ? (renderControl({
          currentBranch: null,
          disabled: false,
          isPending: false,
          switchTooltipText,
        }) as React.ReactElement | null)
      : null;
  }

  if (gitRoot == null) {
    return (
      (renderStaticBranch?.({
        currentBranch,
      }) as React.ReactElement | null) ?? null
    );
  }

  const handleDropdownOpenChange = (open: boolean) => {
    if (open) {
      setHasOpenedDropdown(true);
    }

    setDropdownOpen(open);
    onOpenChange?.(open);
  };
  const triggerButton = renderControl({
    currentBranch,
    disabled: isPending,
    isPending,
    switchTooltipText,
  });
  const shouldRenderCommitFlow = isCommitFlowOpen || commitFlowStatus !== "idle";

  return (
    <>
      <DropdownMenu
        side={side}
        open={isDropdownOpen}
        align={align}
        onOpenChange={handleDropdownOpenChange}
        triggerButton={triggerButton}
      >
        {hasOpenedDropdown ? (
          <GitBranchDropdownContent
            currentBranch={currentBranch}
            gitRoot={gitRoot}
            hostConfig={hostConfig}
            isOpen={isDropdownOpen}
            disabled={isPending}
            onCheckout={checkoutBranch}
            onClose={closeDropdown}
            onOpenCreate={() => {
              closeDropdown();
              setCreateDialogOpen(true);
            }}
          />
        ) : null}
      </DropdownMenu>
      {isCreateDialogOpen ? (
        <CreateAndCheckoutBranchDialog
          open={isCreateDialogOpen}
          onOpenChange={setCreateDialogOpen}
          conversationTitle={conversationTitle}
          gitRoot={gitRoot}
          hostConfig={hostConfig}
          isPending={isPending}
          onSubmit={createAndCheckoutBranch}
        />
      ) : null}
      {isUncommittedDialogOpen ? (
        <UncommittedChangesDialog
          open={isUncommittedDialogOpen}
          onOpenChange={setUncommittedDialogOpen}
          conflictFiles={conflictFiles}
          gitRoot={gitRoot}
          hostConfig={hostConfig}
          targetBranch={pendingBlockedAction?.branch ?? null}
          onContinue={openCommitFlow}
        />
      ) : null}
      {shouldRenderCommitFlow && normalizedCwd != null ? (
        <CommitChangesBeforeBranchSwitchPanel
          key={commitFlowResetNonce}
          open={isCommitFlowOpen}
          onOpenChange={setCommitFlowOpen}
          conversationId={localConversationId}
          cwd={normalizedCwd}
          hostConfig={hostConfig}
          onStatusChange={handleCommitFlowStatus}
          onRequestReset={resetBlockedCheckoutState}
        />
      ) : null}
    </>
  );
}

export const initGitBranchSwitcherChunk = once(() => {
  getChunkModuleExports();
  initScopeRuntime();
  initIntlMessageRuntime();
  initReactRuntime();
  initIntlRuntime();
  initConversationStateSelectors();
  initConversationBranchOverrideRuntime();
  initButtonComponentPrimitives();
  initAppDialog();
  initDialogLayoutComponents();
  initDropdownMenuPrimitives();
  initBranchSwitchReviewRuntime();
  initToastRuntime();
  initDiffStatsChunk();
  initGitBranchQueryRuntime();
  initGitBranchSearchQuery();
  initCurrentGitBranchSignal();
  initGitRecentBranchesQuery();
  initCommitChangesBeforeBranchSwitchPanel();
  initGitStatusSummaryQuery();
  initCheckoutBranchMutation();
  initCreateBranchMutation();
  initPlusIcon();
  initDefaultBranchNameRuntime();
  initBranchSearchMenuRuntime();
  initBranchSwitchReviewPanelRuntime();
  initBranchSearchMenuMessages();
  initAppScope();
  initSwitchRuntime();
  initQueryDurationConstants();
  initWorkspaceQueryRuntime();
  initCommitFlowRuntime();
  initSanitizeGitBranchSearchInput();
});
