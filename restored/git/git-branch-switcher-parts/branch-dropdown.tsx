// Restored from ref/webview/assets/git-branch-switcher-BokkKYIT.js

import React from "react";
import {
  BranchSearchMenu,
  Dropdown,
  FormattedMessage,
  PlusIcon,
  useDebouncedValue,
  useDefaultBranchQuery,
  useIntl,
  useScopedValue,
} from "../../runtime/git-branch-switcher-runtime";
import { getChangedFileCount, orderPreferredBranches } from "./branch-helpers";
import {
  gitBranchSearchQuery,
  useGitRecentBranchesQuery,
  useGitStatusSummaryQuery,
} from "./branch-queries";
import { BRANCH_SWITCHER_OPERATION_SOURCE } from "./constants";
import type { GitOperationResult, HostConfig } from "./types";

export type GitBranchDropdownContentProps = {
  currentBranch: string;
  gitRoot: string;
  hostConfig: HostConfig;
  isOpen: boolean;
  disabled: boolean;
  onCheckout: (branchName: string) => void;
  onClose: () => void;
  onOpenCreate: () => void;
};

export function GitBranchDropdownContent({
  currentBranch,
  gitRoot,
  hostConfig,
  isOpen,
  disabled,
  onCheckout,
  onClose,
  onOpenCreate,
}: GitBranchDropdownContentProps): React.ReactElement {
  const intl = useIntl();
  const [searchQuery, setSearchQuery] = React.useState("");
  const debouncedSearchQuery = useDebouncedValue(searchQuery, 200);
  const { data: statusSummary, refetch: refetchStatusSummary } = useGitStatusSummaryQuery(
    gitRoot,
    hostConfig,
    BRANCH_SWITCHER_OPERATION_SOURCE,
  );
  const {
    data: recentBranches = [],
    isLoading: isRecentLoading,
    isFetching: isRecentFetching,
    isError: isRecentError,
    refetch: refetchRecentBranches,
  } = useGitRecentBranchesQuery(gitRoot, hostConfig, BRANCH_SWITCHER_OPERATION_SOURCE, {
    enabled: true,
  });
  const {
    data: defaultBranch,
    refetch: refetchDefaultBranch,
  } = useDefaultBranchQuery(gitRoot, hostConfig, BRANCH_SWITCHER_OPERATION_SOURCE, {
    enabled: true,
  }) as GitOperationResult<string | null>;

  React.useEffect(() => {
    if (isOpen) {
      Promise.all([refetchRecentBranches?.(), refetchDefaultBranch?.(), refetchStatusSummary?.()]);
    }
  }, [isOpen, refetchRecentBranches, refetchDefaultBranch, refetchStatusSummary]);

  const trimmedSearchQuery = searchQuery.trim();
  const settledSearchQuery = String(debouncedSearchQuery).trim();
  const isSearchSettling = trimmedSearchQuery !== settledSearchQuery;
  const hasSettledSearch = settledSearchQuery.length > 0;
  const branchSearch = useScopedValue(gitBranchSearchQuery, {
    cwd: gitRoot,
    hostConfig,
    operationSource: BRANCH_SWITCHER_OPERATION_SOURCE,
    query: settledSearchQuery,
    enabled: hasSettledSearch,
  }) as GitOperationResult<string[]>;
  const orderedBranches = orderPreferredBranches({
    branches: recentBranches,
    currentBranch,
    defaultBranch,
  });
  const repositoryHasNoCommits =
    !isRecentLoading && !isRecentFetching && !isRecentError && recentBranches.length === 0;
  const changedFileCount = getChangedFileCount(statusSummary);
  const createDisabledTooltip = repositoryHasNoCommits
    ? intl.formatMessage({
        id: "composer.footer.branchSwitch.createAndCheckout.disabledTooltip",
        defaultMessage: "Commit changes to create and checkout a new branch",
        description:
          "Tooltip shown when create-and-checkout branch action is disabled because the repository has no commits",
      })
    : undefined;
  const isListLoading = isRecentLoading || (isRecentFetching && orderedBranches.length === 0);
  const isSearchLoading = isSearchSettling || branchSearch.isFetching;

  const retryRecentBranches = () => {
    refetchRecentBranches?.();
  };
  const retryBranchSearch = () => {
    branchSearch.refetch?.();
  };
  const renderBranchSubText = (branchName: string) =>
    branchName === currentBranch && changedFileCount > 0 ? (
      <span className="inline-flex items-center gap-1 text-xs text-token-input-placeholder-foreground">
        <FormattedMessage
          id="composer.footer.branchSwitch.uncommittedSummaryPrefix"
          defaultMessage={"Uncommitted: {fileCount, plural, one {# file} other {# files}}"}
          description="Prefix shown under the active branch in the branch dropdown when there are uncommitted tracked changes"
          values={{
            fileCount: changedFileCount,
          }}
        />
      </span>
    ) : null;

  const handleCreateBranchSelect = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    onOpenCreate();
  };

  return (
    <>
      <BranchSearchMenu
        branches={orderedBranches}
        selectedBranch={currentBranch}
        disabled={disabled}
        isError={isRecentError}
        isLoading={isListLoading}
        isSearchError={branchSearch.isError}
        isSearchLoading={isSearchLoading}
        onClose={onClose}
        onRetry={retryRecentBranches}
        onRetrySearch={retryBranchSearch}
        onSearchQueryChange={setSearchQuery}
        onSelectBranch={onCheckout}
        renderBranchSubText={renderBranchSubText}
        searchedBranches={branchSearch.data}
        searchQuery={searchQuery}
      />
      <Dropdown.Separator />
      <Dropdown.Item
        LeftIcon={PlusIcon}
        disabled={repositoryHasNoCommits || disabled}
        tooltipText={createDisabledTooltip}
        onSelect={handleCreateBranchSelect}
      >
        <FormattedMessage
          id="composer.footer.branchSwitch.createAndCheckout"
          defaultMessage="Create and checkout new branch..."
          description="Dropdown action label in the composer footer branch switcher to create and checkout a new branch"
        />
      </Dropdown.Item>
    </>
  );
}
