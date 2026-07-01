// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Review diff-filter dropdown for local/cloud review sources.

import type { ReactNode } from "react";
import { FormattedMessage } from "../vendor/react-intl";
import { Button } from "../ui/button";
import { DropdownMenu, MenuChrome } from "../ui/dropdown";
import { Badge } from "../utils/badge";
import type { ReviewDiffFilter } from "./review-diff-model";
import { CommitFilterSubmenu } from "./review-commit-filter-menu";
import type { ReviewSource } from "./review-source-control-types";
import {
  CheckmarkIcon,
  ChevronDownIcon,
} from "../boundaries/onboarding-commons-externals.facade";

export function renderDiffFilterLabelWithCount(
  label: ReactNode,
  count: number | null | undefined,
): ReactNode {
  if (count == null || count <= 0) return label;
  return (
    <span className="flex items-center gap-1.5">
      <span>{label}</span>
      <Badge className="disambiguated-digits px-1.5 py-0.5 text-xs font-medium">
        {count}
      </Badge>
    </span>
  );
}

interface DiffFilterOption {
  id: ReviewDiffFilter;
  renderedLabel: ReactNode;
}

export interface DiffFilterDropdownProps {
  availableDiffFilters?: ReviewDiffFilter[];
  diffFilter?: ReviewDiffFilter;
  onSelectDiffFilter?: (filter: ReviewDiffFilter) => void;
  source: ReviewSource;
  stagedFileCount?: number;
  unstagedFileCount?: number;
}

export function DiffFilterDropdown({
  availableDiffFilters,
  diffFilter,
  onSelectDiffFilter,
  source,
  stagedFileCount,
  unstagedFileCount,
}: DiffFilterDropdownProps) {
  if (source === "cloud") {
    return (
      <span className="text-token-foreground">
        <FormattedMessage
          id="codex.review.source.cloud"
          defaultMessage="Cloud changes"
          description="Label for cloud task reviews"
        />
      </span>
    );
  }

  const options: DiffFilterOption[] = (
    [
      {
        id: "unstaged",
        renderedLabel: renderDiffFilterLabelWithCount(
          <FormattedMessage
            id="codex.review.stageFilter.unstaged"
            defaultMessage="Unstaged"
            description="Show unstaged changes when there are none"
          />,
          unstagedFileCount,
        ),
      },
      {
        id: "staged",
        renderedLabel: renderDiffFilterLabelWithCount(
          <FormattedMessage
            id="codex.review.stageFilter.staged"
            defaultMessage="Staged"
            description="Show staged changes when there are none"
          />,
          stagedFileCount,
        ),
      },
      {
        id: "commit",
        renderedLabel: (
          <FormattedMessage
            id="codex.review.source.local.commit"
            defaultMessage="Commit"
            description="Dropdown label in the Codex review header for viewing one commit's changes. Keep it short for a compact menu item."
          />
        ),
      },
      {
        id: "branch",
        renderedLabel: (
          <FormattedMessage
            id="codex.review.source.local.all"
            defaultMessage="Branch"
            description="Dropdown label in the Codex review header for viewing branch changes. Keep it short for a compact menu item."
          />
        ),
      },
      {
        id: "last-turn",
        renderedLabel: (
          <FormattedMessage
            id="codex.review.source.local.lastTurn"
            defaultMessage="Last turn"
            description="Dropdown label in the Codex review header for showing only the most recent assistant turn's diff. Keep it short for a compact menu item."
          />
        ),
      },
    ] satisfies DiffFilterOption[]
  ).filter((option) => availableDiffFilters?.includes(option.id) ?? true);

  const selectedOption =
    options.find((option) => option.id === diffFilter) ?? options[0];
  if (selectedOption == null) return <></>;

  if (!diffFilter || !onSelectDiffFilter || options.length === 1) {
    return (
      <span className="text-token-foreground">
        {selectedOption.renderedLabel}
      </span>
    );
  }

  const triggerButton = (
    <Button
      color="ghostActive"
      size="toolbar"
      className="w-fit max-w-[320px] shrink-0 border-transparent px-1.5"
    >
      <span className="flex max-w-full min-w-0 items-center gap-1.5 truncate">
        {selectedOption.renderedLabel}
      </span>
      <ChevronDownIcon className="icon-2xs" />
    </Button>
  );

  const items = options.map((option) =>
    option.id === "commit" ? (
      <CommitFilterSubmenu key={option.id} diffFilter={diffFilter}>
        {option.renderedLabel}
      </CommitFilterSubmenu>
    ) : (
      <MenuChrome.Item
        key={option.id}
        onSelect={() => onSelectDiffFilter(option.id)}
        RightIcon={selectedOption.id === option.id ? CheckmarkIcon : undefined}
      >
        {option.renderedLabel}
      </MenuChrome.Item>
    ),
  );

  return (
    <DropdownMenu triggerButton={triggerButton} contentWidth="menuBounded">
      {items}
    </DropdownMenu>
  );
}
