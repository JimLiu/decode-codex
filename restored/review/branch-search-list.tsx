// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Searchable branch picker list used by the review header base-branch dropdown.
import { type ReactNode, useState } from "react";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import { MenuChrome } from "../ui/dropdown";
import { Spinner } from "../ui/spinner";
import {
  BranchIcon,
  CheckmarkIcon,
} from "../boundaries/onboarding-commons-externals.facade";

export interface BranchSearchListProps {
  branches: string[] | null | undefined;
  selectedBranch: string | null | undefined;
  disabled?: boolean;
  isError?: boolean;
  isLoading?: boolean;
  isSearchError?: boolean;
  isSearchLoading?: boolean;
  onClose?: () => void;
  onRetry?: () => void;
  onRetrySearch?: () => void;
  onSearchQueryChange?: (query: string) => void;
  onSelectBranch: (branch: string) => void;
  renderBranchSubText?: (branch: string) => ReactNode;
  searchedBranches?: string[];
  searchQuery?: string;
}

interface BranchSearchListItemProps {
  branch: string;
  disabled?: boolean;
  onSelect: () => void;
  selected: boolean;
  subText: ReactNode;
}

function BranchSearchListItem({
  branch,
  disabled,
  onSelect,
  selected,
  subText,
}: BranchSearchListItemProps) {
  return (
    <MenuChrome.Item
      LeftIcon={BranchIcon}
      tooltipText={branch}
      tooltipSide="top"
      tooltipAlign="start"
      tooltipOpenWhen="trigger-overflows"
      disabled={disabled}
      RightIcon={selected ? CheckmarkIcon : undefined}
      subTextAllowWrap={true}
      SubText={subText}
      onSelect={onSelect}
    >
      {branch}
    </MenuChrome.Item>
  );
}

export function BranchSearchList({
  branches,
  selectedBranch,
  disabled = false,
  isError,
  isLoading,
  isSearchError = false,
  isSearchLoading = false,
  onClose,
  onRetry,
  onRetrySearch,
  onSearchQueryChange,
  onSelectBranch,
  renderBranchSubText,
  searchedBranches,
  searchQuery,
}: BranchSearchListProps) {
  const intl = useIntl();
  const [localQuery, setLocalQuery] = useState("");
  const query = searchQuery ?? localQuery;

  const normalizedQuery = query.trim().toLowerCase();
  const isSearching = normalizedQuery.length > 0;
  const filteredBranches =
    branches == null
      ? undefined
      : isSearching
        ? (searchedBranches ??
          branches.filter((branch) =>
            branch.toLowerCase().includes(normalizedQuery),
          ))
        : branches;
  const showLoading = isSearching ? isSearchLoading : isLoading;
  const showError = isSearching ? isSearchError : isError;
  const retry = isSearching ? onRetrySearch : onRetry;

  let listContent: ReactNode;
  if (showLoading) {
    listContent = (
      <MenuChrome.Item disabled={true}>
        <span className="inline-flex items-center gap-2">
          <Spinner className="icon-xxs" />
          <FormattedMessage
            id="localConversation.syncSetup.branchesLoading"
            defaultMessage="Loading branches…"
            description="Label shown while loading branches"
          />
        </span>
      </MenuChrome.Item>
    );
  } else if (showError) {
    listContent = (
      <MenuChrome.Section className="flex flex-col gap-1">
        <MenuChrome.SectionLabel>
          <FormattedMessage
            id="composer.reviewMode.branches.error"
            defaultMessage="Unable to load branches"
            description="Error message when branch list could not be loaded"
          />
        </MenuChrome.SectionLabel>
        {retry == null ? null : (
          <MenuChrome.Item
            onSelect={() => {
              retry();
            }}
          >
            <FormattedMessage
              id="composer.reviewMode.branches.retry"
              defaultMessage="Retry"
              description="Retry button for branch list error"
            />
          </MenuChrome.Item>
        )}
      </MenuChrome.Section>
    );
  } else if (filteredBranches == null || filteredBranches.length === 0) {
    listContent = (
      <MenuChrome.Item disabled={true}>
        <FormattedMessage
          id="localConversation.syncSetup.noBranches"
          defaultMessage="No branches found"
          description="Label shown when no branches are available"
        />
      </MenuChrome.Item>
    );
  } else {
    listContent = (
      <MenuChrome.Section className="flex flex-col">
        {filteredBranches.map((branch) => (
          <BranchSearchListItem
            key={branch}
            branch={branch}
            disabled={disabled}
            selected={branch === selectedBranch}
            subText={renderBranchSubText?.(branch) ?? null}
            onSelect={() => onSelectBranch(branch)}
          />
        ))}
      </MenuChrome.Section>
    );
  }

  const placeholder = intl.formatMessage({
    id: "codex.composer.searchBranches",
    defaultMessage: "Search branches",
    description: "Placeholder for the branch search input",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nextValue = event.currentTarget.value;
    setLocalQuery(nextValue);
    onSearchQueryChange?.(nextValue);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    if (!isSearching) {
      onClose?.();
      return;
    }
    if (disabled || showLoading || filteredBranches == null) return;
    const nextBranch =
      filteredBranches.find((branch) => branch !== selectedBranch) ??
      filteredBranches[0];
    if (nextBranch != null) onSelectBranch(nextBranch);
  };

  return (
    <div className="flex w-72 flex-col gap-1.5 overflow-hidden">
      <MenuChrome.SearchInput
        autoFocus={false}
        placeholder={placeholder}
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <div className="vertical-scroll-fade-mask flex h-[200px] flex-col gap-1.5 overflow-y-auto">
        <MenuChrome.SectionLabel>
          <FormattedMessage
            id="composer.remote.branchesSectionHeading"
            defaultMessage="Branches"
            description="Section heading for remote branch search results"
          />
        </MenuChrome.SectionLabel>
        {listContent}
      </div>
    </div>
  );
}
