// Restored from ref/webview/assets/git-branch-switcher-BokkKYIT.js

import React from "react";
import {
  branchSettingKeys,
  buildDefaultBranchName,
  Button,
  CreateBranchDialogGraphic,
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogLayout,
  DialogSection,
  findFileDiffStats,
  FormattedMessage,
  mergeReviewSummaryStats,
  normalizeWorkspacePath,
  queryDurations,
  useGitOperationQuery,
  useGlobalSettingValue,
  useIntl,
} from "../../runtime/git-branch-switcher-runtime";
import { DiffStats } from "../git-review-primitives";
import { getChangedFileCount, orderPreferredBranches } from "./branch-helpers";
import { sanitizeGitBranchSearchInput } from "./branch-name";
import { useGitRecentBranchesQuery, useGitStatusSummaryQuery } from "./branch-queries";
import { BRANCH_SWITCHER_OPERATION_SOURCE } from "./constants";
import type { GitOperationResult, HostConfig } from "./types";

type ReviewSummary = {
  totalAdditions?: number;
  totalDeletions?: number;
};

type FileDiffStats = {
  linesAdded: number;
  linesRemoved: number;
};

export type CreateAndCheckoutBranchDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  conversationTitle: string | null | undefined;
  gitRoot: string;
  hostConfig: HostConfig;
  isPending: boolean;
  onSubmit: (branchName: string) => void;
};

export function CreateAndCheckoutBranchDialog({
  open,
  onOpenChange,
  conversationTitle,
  gitRoot,
  hostConfig,
  isPending,
  onSubmit,
}: CreateAndCheckoutBranchDialogProps): React.ReactElement {
  const intl = useIntl();
  const branchPrefix = useGlobalSettingValue(branchSettingKeys.branchPrefix);
  const initialBranchName = buildDefaultBranchName({
    branchPrefix,
    conversationTitle,
  });
  const [branchName, setBranchName] = React.useState(initialBranchName);
  const shouldLoadBranches = open && gitRoot != null;
  const {
    data: recentBranches = [],
    isLoading,
    isFetching,
    isError,
  } = useGitRecentBranchesQuery(gitRoot, hostConfig, BRANCH_SWITCHER_OPERATION_SOURCE, {
    enabled: shouldLoadBranches,
  });
  const orderedBranches = orderPreferredBranches({
    branches: recentBranches,
    currentBranch: "",
    defaultBranch: null,
  });
  const trimmedBranchName = branchName.trim();
  const hasTrailingSlash = trimmedBranchName.endsWith("/");
  const branchAlreadyExists = trimmedBranchName.length > 0 && orderedBranches.includes(trimmedBranchName);
  const repositoryHasNoCommits =
    !isLoading && !isFetching && !isError && recentBranches.length === 0;
  const canSubmit =
    !isPending &&
    !isLoading &&
    !isFetching &&
    !repositoryHasNoCommits &&
    trimmedBranchName.length > 0 &&
    !hasTrailingSlash &&
    !branchAlreadyExists &&
    gitRoot != null;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBranchName(sanitizeGitBranchSearchInput(event.target.value));
  };
  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") {
      return;
    }

    event.preventDefault();
    if (canSubmit) {
      onSubmit(trimmedBranchName);
    }
  };
  const closeDialog = () => {
    onOpenChange(false);
  };
  const submitBranch = () => {
    onSubmit(trimmedBranchName);
  };

  return (
    <DialogLayout size="feature" open={open} onOpenChange={onOpenChange}>
      <DialogBody data-codex-branch-create-dialog="">
        <DialogSection>
          <DialogHeader
            title={
              <FormattedMessage
                id="composer.footer.branchSwitch.createDialog.title"
                defaultMessage="Create and checkout branch"
                description="Title for dialog that creates and checks out a new branch from the composer footer"
              />
            }
          />
        </DialogSection>
        <DialogSection className="flex flex-col gap-2">
          <CreateBranchDialogGraphic />
          <input
            autoFocus={true}
            className="h-10 w-full rounded-xl border border-token-border bg-token-dropdown-background px-3 text-sm text-token-foreground outline-none placeholder:text-token-description-foreground"
            value={branchName}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            placeholder={intl.formatMessage({
              id: "composer.footer.branchSwitch.createDialog.placeholder",
              defaultMessage: "new-branch",
              description:
                "Placeholder for branch name input in the composer footer create-and-checkout dialog",
            })}
            aria-label={intl.formatMessage({
              id: "composer.footer.branchSwitch.createDialog.ariaLabel",
              defaultMessage: "Branch name",
              description:
                "Aria label for branch name input in the composer footer create-and-checkout dialog",
            })}
          />
          {hasTrailingSlash ? (
            <p className="text-xs text-token-error-foreground">
              <FormattedMessage
                id="composer.footer.branchSwitch.createDialog.trailingSlashError"
                defaultMessage={'Branch name cannot end with "/".'}
                description="Validation message shown in the create-and-checkout branch dialog when branch name ends with a slash"
              />
            </p>
          ) : branchAlreadyExists && !isPending ? (
            <p className="text-xs text-token-error-foreground">
              <FormattedMessage
                id="composer.footer.branchSwitch.createDialog.branchExistsError"
                defaultMessage="Branch already exists."
                description="Validation message shown in the create-and-checkout branch dialog when the entered branch already exists"
              />
            </p>
          ) : null}
        </DialogSection>
        <DialogSection>
          <DialogFooter>
            <Button color="secondary" onClick={closeDialog}>
              <FormattedMessage
                id="composer.footer.branchSwitch.createDialog.close"
                defaultMessage="Close"
                description="Secondary button label in create-and-checkout branch dialog shown from the composer footer"
              />
            </Button>
            <Button color="primary" disabled={!canSubmit} loading={isPending} onClick={submitBranch}>
              <FormattedMessage
                id="composer.footer.branchSwitch.createDialog.createAndCheckout"
                defaultMessage="Create and checkout"
                description="Primary button label in create-and-checkout branch dialog shown from the composer footer"
              />
            </Button>
          </DialogFooter>
        </DialogSection>
      </DialogBody>
    </DialogLayout>
  );
}

export type UncommittedChangesDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  conflictFiles: string[];
  gitRoot: string;
  hostConfig: HostConfig;
  targetBranch: string | null;
  onContinue: () => void;
};

export function UncommittedChangesDialog({
  open,
  onOpenChange,
  conflictFiles,
  gitRoot,
  hostConfig,
  targetBranch,
  onContinue,
}: UncommittedChangesDialogProps): React.ReactElement {
  const intl = useIntl();
  const { data: statusSummary } = useGitStatusSummaryQuery(
    gitRoot,
    hostConfig,
    BRANCH_SWITCHER_OPERATION_SOURCE,
  );
  const normalizedCwdForStaged = normalizeWorkspacePath(gitRoot);
  const { data: stagedSummary } = useGitOperationQuery(
    gitRoot,
    hostConfig,
    "review-summary",
    {
      cwd: normalizedCwdForStaged,
      includeUntrackedFiles: false,
      operationSource: BRANCH_SWITCHER_OPERATION_SOURCE,
      source: "staged",
    },
    BRANCH_SWITCHER_OPERATION_SOURCE,
    {
      enabled: open,
      staleTime: queryDurations.FIVE_SECONDS,
    },
  ) as GitOperationResult<ReviewSummary>;
  const normalizedCwdForUnstaged = normalizeWorkspacePath(gitRoot);
  const { data: unstagedSummary } = useGitOperationQuery(
    gitRoot,
    hostConfig,
    "review-summary",
    {
      cwd: normalizedCwdForUnstaged,
      operationSource: BRANCH_SWITCHER_OPERATION_SOURCE,
      source: "unstaged",
    },
    BRANCH_SWITCHER_OPERATION_SOURCE,
    {
      enabled: open,
      staleTime: queryDurations.FIVE_SECONDS,
    },
  ) as GitOperationResult<ReviewSummary>;
  const reviewSummaries = [stagedSummary, unstagedSummary];
  const mergedSummary = mergeReviewSummaryStats(reviewSummaries) as ReviewSummary | undefined;
  const totalAdditions = mergedSummary?.totalAdditions ?? 0;
  const totalDeletions = mergedSummary?.totalDeletions ?? 0;
  const hasDiffStats = totalAdditions + totalDeletions > 0;
  const hasConflictFiles = conflictFiles.length > 0;
  const changedFileCount = getChangedFileCount(statusSummary);
  const targetBranchLabel =
    targetBranch ??
    intl.formatMessage({
      id: "composer.footer.branchSwitch.uncommittedDialog.targetBranchFallback",
      defaultMessage: "the selected branch",
      description:
        "Fallback branch label in the uncommitted changes dialog when the target branch name is unavailable",
    });

  const closeDialog = () => {
    onOpenChange(false);
  };

  return (
    <DialogLayout size="feature" open={open} onOpenChange={onOpenChange}>
      <DialogBody>
        <DialogSection>
          <DialogHeader
            title={
              <FormattedMessage
                id="composer.footer.branchSwitch.uncommittedDialog.title"
                defaultMessage="Commit changes to switch branch"
                description="Title for dialog shown when branch switching is blocked by uncommitted changes"
              />
            }
          />
        </DialogSection>
        <DialogSection className="text-token-description-foreground">
          {hasConflictFiles ? (
            <div className="flex flex-col gap-2 text-sm">
              <FormattedMessage
                id="composer.footer.branchSwitch.uncommittedDialog.conflict.bodyPrefix"
                defaultMessage="Your changes to the following files would be overwritten by checkout:"
                description="Message shown in the uncommitted changes dialog before listing files that block checkout"
              />
              <div className="flex flex-col gap-1">
                {conflictFiles.map((filePath, index) => {
                  const fileStats = findFileDiffStats(filePath, reviewSummaries) as FileDiffStats | null;

                  return (
                    <div
                      key={`${filePath}:${index}`}
                      className="inline-flex items-center gap-1 text-token-foreground"
                    >
                      <span>{filePath}</span>
                      {fileStats == null ? null : (
                        <DiffStats
                          className="inline-flex align-middle"
                          linesAdded={fileStats.linesAdded}
                          linesRemoved={fileStats.linesRemoved}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
              <FormattedMessage
                id="composer.footer.branchSwitch.uncommittedDialog.conflict.bodySuffix"
                defaultMessage="Please commit your changes to continue"
                description="Message shown in the uncommitted changes dialog after listing files that block checkout"
              />
            </div>
          ) : hasDiffStats ? (
            <span className="inline-flex items-center gap-1 whitespace-nowrap">
              <FormattedMessage
                id="composer.footer.branchSwitch.uncommittedDialog.bodyPrefix.withDiff"
                defaultMessage="Commit"
                description="Body prefix in the uncommitted changes dialog before diff stats"
              />
              <DiffStats
                className="inline-flex align-middle"
                linesAdded={totalAdditions}
                linesRemoved={totalDeletions}
              />
              <FormattedMessage
                id="composer.footer.branchSwitch.uncommittedDialog.bodySuffix.withDiff"
                defaultMessage={
                  "changes in {fileCount, plural, one {# file} other {# files}} to check out {branchName}."
                }
                description="Body suffix in the uncommitted changes dialog after diff stats, including file count and target branch"
                values={{
                  fileCount: changedFileCount,
                  branchName: targetBranchLabel,
                }}
              />
            </span>
          ) : (
            <FormattedMessage
              id="composer.footer.branchSwitch.uncommittedDialog.body.noDiff"
              defaultMessage={
                "Commit changes in {fileCount, plural, one {# file} other {# files}} to check out {branchName}."
              }
              description="Body text in the uncommitted changes dialog when diff stats are unavailable"
              values={{
                fileCount: changedFileCount,
                branchName: targetBranchLabel,
              }}
            />
          )}
        </DialogSection>
        <DialogSection>
          <DialogFooter>
            <Button color="secondary" onClick={closeDialog}>
              <FormattedMessage
                id="composer.footer.branchSwitch.uncommittedDialog.cancel"
                defaultMessage="Cancel"
                description="Secondary button label in branch switching blocked dialog shown in the composer footer"
              />
            </Button>
            <Button color="primary" onClick={onContinue}>
              <FormattedMessage
                id="composer.footer.branchSwitch.uncommittedDialog.commit"
                defaultMessage="Commit and switch branch..."
                description="Primary button label in branch switching blocked dialog shown in the composer footer"
              />
            </Button>
          </DialogFooter>
        </DialogSection>
      </DialogBody>
    </DialogLayout>
  );
}
