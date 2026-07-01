// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Branch range label and base-branch picker for review source controls.

import { classNames } from "../utils/class-names";
import { FormattedMessage } from "../vendor/react-intl";
import { Button } from "../ui/button";
import { Tooltip } from "../ui/tooltip-b";
import { DropdownMenu } from "../ui/dropdown";
import { BranchSearchList } from "./branch-search-list";
import {
  ChevronDownIcon,
  TruncatedBranchName,
} from "../boundaries/onboarding-commons-externals.facade";

export function isNonNullable<Value>(
  value: Value | null | undefined,
): value is Value {
  return value != null;
}

export interface BranchRangeLabelProps {
  className?: string;
  currentBranch: string;
  targetBranch: string;
}

export function BranchRangeLabel({
  className,
  currentBranch,
  targetBranch,
}: BranchRangeLabelProps) {
  return (
    <span
      className={classNames(
        "flex min-w-0 items-center gap-1 truncate text-base font-normal text-token-description-foreground select-none",
        className,
      )}
    >
      <span className="min-w-0 select-text">
        <TruncatedBranchName
          branchName={currentBranch}
          suffixCharacterCount={18}
        />
      </span>
      <span aria-hidden={true} className="shrink-0">
        <FormattedMessage
          id="codex.review.source.local.branchRangeSeparator"
          defaultMessage="→"
          description="Arrow separator shown between the current branch and base branch in the review header"
        />
      </span>
      <span className="shrink-0">{targetBranch}</span>
    </span>
  );
}

export interface BaseBranchPickerProps {
  baseBranchOptions: string[] | null | undefined;
  className?: string;
  currentBranch?: string;
  defaultTargetBranch: string | null | undefined;
  isBaseBranchOptionsError?: boolean;
  isBaseBranchOptionsLoading?: boolean;
  onRefetchBaseBranchOptions?: () => void;
  onSelectBaseBranch: (branch: string) => void;
  targetBranch: string | null | undefined;
}

export function BaseBranchPicker({
  baseBranchOptions,
  className,
  currentBranch = "HEAD",
  defaultTargetBranch,
  isBaseBranchOptionsError,
  isBaseBranchOptionsLoading,
  onRefetchBaseBranchOptions,
  onSelectBaseBranch,
  targetBranch,
}: BaseBranchPickerProps) {
  const selectedBaseBranch = targetBranch ?? defaultTargetBranch;
  if (
    selectedBaseBranch == null &&
    !isBaseBranchOptionsLoading &&
    !isBaseBranchOptionsError &&
    (baseBranchOptions == null || baseBranchOptions.length === 0)
  ) {
    return null;
  }

  const branchOptions =
    baseBranchOptions == null
      ? undefined
      : Array.from(
          new Set([
            selectedBaseBranch,
            defaultTargetBranch,
            ...baseBranchOptions,
          ]),
        ).filter(isNonNullable);

  const currentBranchLabel = (
    <Tooltip
      tooltipContent={currentBranch}
      tooltipBodyClassName="break-all"
      tooltipMaxWidth="min(520px, 80vw)"
      openWhen="trigger-overflows"
    >
      <span className="flex h-token-button-composer min-w-0 flex-[0_2_auto] items-center px-1.5 text-base font-normal select-text">
        <TruncatedBranchName
          branchName={currentBranch}
          suffixCharacterCount={18}
        />
      </span>
    </Tooltip>
  );

  const separator = (
    <span
      aria-hidden={true}
      className="flex-shrink-0 text-sm text-token-description-foreground"
    >
      <FormattedMessage
        id="codex.review.source.local.branchRangeSeparator"
        defaultMessage="→"
        description="Arrow separator shown between the current branch and base branch in the review header"
      />
    </span>
  );

  const baseBranchTriggerLabel = (
    <span className="min-w-0">
      {selectedBaseBranch == null ? (
        <FormattedMessage
          id="codex.review.source.local.selectBaseBranch"
          defaultMessage="Select branch"
          description="Placeholder shown in the review header base branch picker when no base branch is selected"
        />
      ) : (
        <TruncatedBranchName
          branchName={selectedBaseBranch}
          suffixCharacterCount={28}
        />
      )}
    </span>
  );

  const baseBranchTrigger = (
    <Tooltip
      tooltipContent={selectedBaseBranch ?? false}
      tooltipBodyClassName="break-all"
      tooltipMaxWidth="min(520px, 80vw)"
      openWhen="trigger-overflows"
    >
      <Button
        color="ghostMuted"
        size="toolbar"
        className="max-w-full min-w-0 overflow-hidden px-1.5 font-normal"
      >
        <span className="flex max-w-full min-w-0 items-center gap-1">
          {baseBranchTriggerLabel}
          <ChevronDownIcon className="icon-2xs shrink-0 text-token-description-foreground" />
        </span>
      </Button>
    </Tooltip>
  );

  const dropdown = (
    <DropdownMenu triggerButton={baseBranchTrigger} contentWidth="menuBounded">
      <BranchSearchList
        branches={branchOptions}
        selectedBranch={selectedBaseBranch}
        isError={isBaseBranchOptionsError}
        isLoading={isBaseBranchOptionsLoading}
        onRetry={onRefetchBaseBranchOptions}
        onSelectBranch={onSelectBaseBranch}
      />
    </DropdownMenu>
  );

  return (
    <div
      className={classNames(
        "flex min-w-0 flex-1 items-center gap-1 overflow-hidden text-token-description-foreground select-none",
        className,
      )}
    >
      {currentBranchLabel}
      {separator}
      {dropdown}
    </div>
  );
}
