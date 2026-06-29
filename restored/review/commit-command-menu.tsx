// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Command-menu dialog used to commit (and optionally push) local git changes from
// the local conversation page, including new-branch selection and diff summary.

import type { ComponentType, KeyboardEvent, ReactNode, SVGProps } from "react";
import { useState } from "react";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import { Spinner } from "../ui/spinner";
import { DiffStats } from "../git/git-review-primitives";
import { buildBranchName } from "../conversations/build-branch-name";
import {
  ActionMenu,
  ActionPopover,
  BranchIcon,
  branchExistsAtom,
  Checkbox,
  CheckIcon,
  ChevronDownIcon,
  CommandMenu,
  commitAndPushBlockedReasonAtom,
  commitBlockedReasonAtom,
  CommitBlockedReasonTooltip,
  CommitIcon,
  commitMessageDraftAtom,
  conversationTitleAtom,
  Dialog,
  diffSelectionSummaryAtom,
  formatKeyboardShortcut,
  gitWorkflowMutationAtom,
  headBranchAtom,
  includeUnstagedChangesAtom,
  activeGitWorkflowAtom,
  isDetachedHeadAtom,
  KeyboardShortcutHint,
  PlusIcon,
  pushBlockedReasonAtom,
  PushBlockedReasonTooltip,
  PushIcon,
  pushStatusAtom,
  appStoreScope,
  settingsAtoms,
  Tooltip,
  useDebouncedValue,
  useScopedQuery,
  useScopedStore,
  useScopedValue,
  useSetting,
  VisuallyHidden,
} from "../boundaries/onboarding-commons-externals.facade";

type GitCommitNextStep = "commit" | "commit-and-push" | "push";
type GitActionStatus = "loading" | "success" | "error";

interface DiffSelectionSummary {
  totalAdditions: number;
  totalDeletions: number;
}

function stopEnterPropagation(event: KeyboardEvent<HTMLElement>) {
  if (event.key === "Enter" && !event.metaKey && !event.ctrlKey) {
    event.stopPropagation();
  }
}

interface BranchNameFieldProps {
  branchAlreadyExists: boolean;
  disabled: boolean;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

function BranchNameField({
  branchAlreadyExists,
  disabled,
  placeholder,
  value,
  onChange,
}: BranchNameFieldProps) {
  const intl = useIntl();
  const ariaLabel = intl.formatMessage({
    id: "localConversationPage.gitActions.branchNameLabel",
    defaultMessage: "Branch name",
    description: "Accessible label for a new Git action branch field",
  });

  const input = (
    <input
      autoFocus={true}
      className="w-full bg-transparent text-token-input-foreground outline-none placeholder:text-token-description-foreground"
      aria-label={ariaLabel}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      onKeyDown={stopEnterPropagation}
      onChange={(event) => onChange(event.target.value)}
    />
  );

  const error = branchAlreadyExists ? (
    <p className="text-xs text-token-error-foreground">
      <FormattedMessage
        id="localConversationPage.gitActions.branchExistsError"
        defaultMessage="Branch already exists"
        description="Validation message shown when a new Git action branch already exists"
      />
    </p>
  ) : null;

  return (
    <div className="flex flex-col gap-1 px-3 pt-2">
      {input}
      {error}
    </div>
  );
}

interface DiffSelectionSummaryLabelProps {
  isLoading: boolean;
  isUnavailable: boolean;
  selectionSummary: DiffSelectionSummary | null;
}

function DiffSelectionSummaryLabel({
  isLoading,
  isUnavailable,
  selectionSummary,
}: DiffSelectionSummaryLabelProps) {
  if (isLoading || isUnavailable) {
    return null;
  }
  return (
    <span className="flex shrink-0 items-center gap-1 text-token-description-foreground">
      {selectionSummary == null ? (
        <FormattedMessage
          id="localConversation.sync.modal.noChanges"
          defaultMessage="No changes"
          description="Label shown when there are no changes to sync"
        />
      ) : (
        <DiffStats
          variant="color"
          linesAdded={selectionSummary.totalAdditions}
          linesRemoved={selectionSummary.totalDeletions}
        />
      )}
    </span>
  );
}

interface CommitMenuOptionProps {
  children: ReactNode;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  disabled: boolean;
  loading: boolean;
  tooltipContent?: ReactNode;
  value: string;
  onSelect: () => void;
}

function CommitMenuOption({
  children,
  Icon,
  disabled,
  loading,
  tooltipContent,
  value,
  onSelect,
}: CommitMenuOptionProps) {
  const icon = loading ? (
    <Spinner className="icon-xs shrink-0" />
  ) : (
    <Icon className="icon-xs shrink-0" />
  );

  const item = (
    <CommandMenu.Item
      className="group"
      disabled={disabled}
      value={value}
      onSelect={onSelect}
    >
      <span className="flex w-full min-w-0 items-center gap-2">
        {icon}
        <span className="truncate">{children}</span>
        <span className="invisible ml-auto flex shrink-0 items-center opacity-80 group-aria-[selected=true]:visible group-data-[selected=true]:visible">
          <KeyboardShortcutHint
            keysLabel={formatKeyboardShortcut("CmdOrCtrl+Enter")}
            variant="button"
          />
        </span>
      </span>
    </CommandMenu.Item>
  );

  if (!disabled || tooltipContent == null) {
    return item;
  }
  return (
    <Tooltip tooltipContent={tooltipContent}>
      <div>{item}</div>
    </Tooltip>
  );
}

export interface CommitCommandMenuProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  conversationId?: string | null;
  cwd: string;
  hostConfig: { id: string };
  codexWorktree?: boolean;
  enablePushActions?: boolean;
  operationSource?: string;
  onStatusChange?: (status: GitActionStatus) => void;
  onRequestReset: () => void;
}

export function CommitCommandMenu({
  open,
  onOpenChange,
  conversationId = null,
  cwd,
  hostConfig,
  codexWorktree = false,
  enablePushActions = false,
  operationSource = "commit_modal",
  onStatusChange,
  onRequestReset,
}: CommitCommandMenuProps) {
  const store = useScopedStore(appStoreScope);
  const intl = useIntl();
  const [commitToNewBranch, setCommitToNewBranch] = useState<boolean | null>(
    null,
  );
  const [branchNameInput, setBranchNameInput] = useState<string | null>(null);

  const hostScope = { cwd, hostId: hostConfig.id };
  const branchPrefix = useSetting(settingsAtoms.branchPrefix);
  const conversationTitle = useScopedQuery(
    conversationTitleAtom,
    conversationId,
  );
  const includeUnstagedChanges = useScopedValue(includeUnstagedChangesAtom);
  const commitMessage = useScopedQuery(commitMessageDraftAtom, hostScope);

  const workflowScope = { codexWorktree, conversationId, cwd, hostConfig };
  const headBranch = useScopedQuery(headBranchAtom, workflowScope);
  const isDetachedHead = useScopedQuery(isDetachedHeadAtom, workflowScope);
  const pushBlockedReason = useScopedQuery(pushBlockedReasonAtom, {
    cwd,
    hostConfig,
  });
  const commitAndPushBlockedReason = useScopedQuery(
    commitAndPushBlockedReasonAtom,
    { cwd, hostConfig },
  );
  const gitWorkflow = useScopedQuery(gitWorkflowMutationAtom, {
    ...workflowScope,
    operationSource,
  });

  const pushStatusResult = useScopedQuery(pushStatusAtom, {
    cwd,
    hostConfig,
    operationSource,
  });
  const pushStatus =
    pushStatusResult.type === "success" ? pushStatusResult.data : undefined;
  const activeWorkflow = useScopedQuery(activeGitWorkflowAtom, hostScope);
  const isWorkflowPending = gitWorkflow.isPending || activeWorkflow != null;

  const diffSelectionSummary = useScopedQuery(diffSelectionSummaryAtom, {
    cwd,
    hostConfig,
    includeUnstaged: includeUnstagedChanges,
  });
  const commitBlockedReason = useScopedQuery(commitBlockedReasonAtom, {
    cwd,
    hostConfig,
    includeUnstaged: includeUnstagedChanges,
  });
  const commitBlockedReasonAllChanges = useScopedQuery(
    commitBlockedReasonAtom,
    {
      cwd,
      hostConfig,
      includeUnstaged: true,
    },
  );

  let currentBranch: string | null = null;
  if (pushStatus) {
    currentBranch = pushStatus.branch ?? pushStatus.upstreamRef ?? null;
  }
  const commitTargetBranch =
    !isDetachedHead && headBranch?.trim()
      ? headBranch.trim()
      : isDetachedHead
        ? null
        : currentBranch;

  const isCommittingToNewBranch =
    enablePushActions && (commitToNewBranch ?? isDetachedHead);
  const suggestedBranchName = buildBranchName({
    branchPrefix,
    conversationTitle,
  });
  const branchNameValue = branchNameInput ?? suggestedBranchName;
  const branchName = branchNameValue.trim();
  const debouncedBranchName = useDebouncedValue(branchName, 200);
  const branchCheckEnabled =
    open &&
    isCommittingToNewBranch &&
    debouncedBranchName.length > 0 &&
    !debouncedBranchName.endsWith("/");
  const { data: branchExists } = useScopedQuery(branchExistsAtom, {
    branch: debouncedBranchName,
    cwd,
    enabled: branchCheckEnabled,
    hostConfig,
    operationSource,
  });
  const branchAlreadyExists =
    debouncedBranchName === branchName && branchExists === true;
  const isBranchSelectionBlocked =
    isCommittingToNewBranch &&
    (branchName.length === 0 ||
      branchName.endsWith("/") ||
      branchAlreadyExists);

  const hasChangesToCommit =
    commitBlockedReasonAllChanges == null ||
    commitBlockedReasonAllChanges === "changes-loading";
  const canCommit =
    commitBlockedReason == null &&
    !isWorkflowPending &&
    !isBranchSelectionBlocked;
  const canPush =
    !isWorkflowPending &&
    !isBranchSelectionBlocked &&
    (isCommittingToNewBranch
      ? (pushStatus?.commitsAhead ?? 0) > 0
      : pushBlockedReason == null);
  const canCommitAndPush =
    canCommit &&
    (isCommittingToNewBranch || commitAndPushBlockedReason == null);

  const title = enablePushActions
    ? intl.formatMessage({
        id: "review.commit.form.commitAndPushTitle",
        defaultMessage: "Commit or push",
        description:
          "Title for the commit modal when commit and push actions are available",
      })
    : intl.formatMessage({
        id: "review.commit.form.commitTitle",
        defaultMessage: "Commit",
        description: "Title for the commit modal when only commit is available",
      });

  const runWorkflow = (nextStep: GitCommitNextStep) => {
    if (
      isWorkflowPending ||
      isBranchSelectionBlocked ||
      (nextStep !== "push" && commitBlockedReason != null)
    ) {
      return;
    }
    onOpenChange(false);
    onStatusChange?.("loading");
    const variables = isCommittingToNewBranch
      ? { kind: "commit", newBranch: branchName, nextStep }
      : { kind: "commit", nextStep };
    gitWorkflow.mutate(variables, {
      onSuccess: (succeeded: boolean) => {
        onStatusChange?.(succeeded ? "success" : "error");
      },
      onSettled: onRequestReset,
    });
  };

  const handleOpenChange = (nextOpen: boolean) => {
    if (!nextOpen && !isWorkflowPending) {
      onRequestReset();
      return;
    }
    onOpenChange(nextOpen);
  };

  const hiddenTitle = (
    <VisuallyHidden className="sr-only">{title}</VisuallyHidden>
  );

  const branchTargetRow = (
    <span className="flex min-w-0 items-center gap-2 text-token-description-foreground">
      {enablePushActions ? (
        <ActionPopover
          align="start"
          contentWidth="xs"
          disabled={isWorkflowPending}
          triggerButton={
            <button
              type="button"
              className="flex min-w-0 cursor-interaction items-center gap-2 text-token-description-foreground"
            >
              <BranchIcon className="icon-xs shrink-0" />
              <span className="truncate">
                {isCommittingToNewBranch ? (
                  <FormattedMessage
                    id="review.commit.branchTarget.newBranch"
                    defaultMessage="New branch"
                    description="Label for selecting a new commit branch"
                  />
                ) : (
                  (commitTargetBranch ?? (
                    <FormattedMessage
                      id="review.commit.form.commitTo.none"
                      defaultMessage="-"
                      description="Placeholder shown when no commit target is available"
                    />
                  ))
                )}
              </span>
              <ChevronDownIcon className="icon-2xs shrink-0" />
            </button>
          }
        >
          <ActionMenu.SectionLabel>
            <FormattedMessage
              id="review.commit.branchTarget.title"
              defaultMessage="Commit to"
              description="Heading for commit branch target options"
            />
          </ActionMenu.SectionLabel>
          {commitTargetBranch == null ? null : (
            <ActionMenu.Item
              LeftIcon={BranchIcon}
              RightIcon={isCommittingToNewBranch ? undefined : CheckIcon}
              onSelect={() => setCommitToNewBranch(false)}
            >
              {commitTargetBranch}
            </ActionMenu.Item>
          )}
          <ActionMenu.Item
            LeftIcon={PlusIcon}
            RightIcon={isCommittingToNewBranch ? CheckIcon : undefined}
            onSelect={() => setCommitToNewBranch(true)}
          >
            <FormattedMessage
              id="review.commit.branchTarget.newBranch"
              defaultMessage="New branch"
              description="Label for selecting a new commit branch"
            />
          </ActionMenu.Item>
        </ActionPopover>
      ) : (
        <>
          <BranchIcon className="icon-xs shrink-0" />
          <span className="truncate">
            {currentBranch ?? (
              <FormattedMessage
                id="review.commit.form.commitTo.none"
                defaultMessage="-"
                description="Placeholder shown when no commit target is available"
              />
            )}
          </span>
        </>
      )}
    </span>
  );

  const diffSummaryRow = hasChangesToCommit ? (
    <span className="flex shrink-0 items-center gap-2">
      <span className="inline-flex size-4 shrink-0 items-center justify-center">
        {diffSelectionSummary.isLoading || diffSelectionSummary.isFetching ? (
          <Spinner className="icon-xs text-token-description-foreground" />
        ) : null}
      </span>
      <DiffSelectionSummaryLabel
        isLoading={diffSelectionSummary.isLoading}
        isUnavailable={diffSelectionSummary.isUnavailable}
        selectionSummary={diffSelectionSummary.selectionSummary}
      />
    </span>
  ) : null;

  const header = (
    <div className="flex h-9 items-center justify-between gap-3 px-3">
      {branchTargetRow}
      {diffSummaryRow}
    </div>
  );

  const branchNameField = isCommittingToNewBranch ? (
    <BranchNameField
      branchAlreadyExists={branchAlreadyExists}
      disabled={isWorkflowPending}
      placeholder={branchPrefix?.trim()}
      value={branchNameValue}
      onChange={setBranchNameInput}
    />
  ) : null;

  const commitMessageEditor = hasChangesToCommit ? (
    <>
      <textarea
        autoFocus={!isCommittingToNewBranch}
        rows={3}
        className="h-20 w-full resize-none bg-transparent px-3 py-2 text-token-input-foreground outline-none"
        aria-label={intl.formatMessage({
          id: "review.commit.messageLabel",
          defaultMessage: "Commit message",
          description: "Label for commit message textarea",
        })}
        placeholder={intl.formatMessage({
          id: "review.commit.autoGeneratePlaceholder",
          defaultMessage: "Commit message (leave blank to generate)…",
          description:
            "Placeholder for commit message fields that can be generated automatically",
        })}
        value={commitMessage}
        disabled={isWorkflowPending}
        onKeyDown={stopEnterPropagation}
        onChange={(event) => {
          store.set(commitMessageDraftAtom, hostScope, event.target.value);
        }}
      />
      <div className="relative flex items-center gap-2 px-3 pt-2 pb-3">
        <Checkbox
          id="commit-include-unstaged-changes"
          checked={includeUnstagedChanges}
          disabled={isWorkflowPending}
          onCheckedChange={(checked: boolean) => {
            store.set(includeUnstagedChangesAtom, checked);
          }}
        />
        <label
          htmlFor="commit-include-unstaged-changes"
          className="text-token-foreground"
        >
          <FormattedMessage
            id="review.commit.selection.includeUnstagedChanges"
            defaultMessage="Include unstaged changes"
            description="Label for selecting unstaged changes in the commit modal"
          />
        </label>
      </div>
    </>
  ) : null;

  const commitOption = (
    <CommitMenuOption
      Icon={CommitIcon}
      disabled={!canCommit}
      loading={isWorkflowPending}
      tooltipContent={
        <CommitBlockedReasonTooltip reason={commitBlockedReason} />
      }
      value="commit"
      onSelect={() => runWorkflow("commit")}
    >
      <FormattedMessage
        id="review.commit.nextSteps.commit"
        defaultMessage="Commit"
        description="Label for the commit-only option"
      />
    </CommitMenuOption>
  );

  const commitAndPushOption = enablePushActions ? (
    <CommitMenuOption
      Icon={PushIcon}
      disabled={!canCommitAndPush}
      loading={false}
      tooltipContent={
        commitBlockedReason == null ? (
          <PushBlockedReasonTooltip reason={commitAndPushBlockedReason} />
        ) : (
          <CommitBlockedReasonTooltip reason={commitBlockedReason} />
        )
      }
      value="commit-and-push"
      onSelect={() => runWorkflow("commit-and-push")}
    >
      <FormattedMessage
        id="review.commit.nextSteps.commitAndPush"
        defaultMessage="Commit and push"
        description="Label for the commit and push option"
      />
    </CommitMenuOption>
  ) : null;

  const pushOption = enablePushActions ? (
    <CommitMenuOption
      Icon={PushIcon}
      disabled={!canPush}
      loading={false}
      tooltipContent={<PushBlockedReasonTooltip reason={pushBlockedReason} />}
      value="push"
      onSelect={() => runWorkflow("push")}
    >
      <FormattedMessage
        id="review.commit.nextSteps.push"
        defaultMessage="Push"
        description="Label for the push-only option"
      />
    </CommitMenuOption>
  ) : null;

  const optionsList = (
    <div className="border-t border-token-border-default py-1">
      <CommandMenu.List>
        <div className="flex flex-col gap-1">
          {commitOption}
          {commitAndPushOption}
          {pushOption}
        </div>
      </CommandMenu.List>
    </div>
  );

  const dialogBody = (
    <div className="command-menu-dialog contents">
      <CommandMenu
        data-codex-shortcut-capture={true}
        className="w-[420px] max-w-[92vw]"
        label={title}
        shouldFilter={false}
        loop={true}
      >
        {header}
        {branchNameField}
        {commitMessageEditor}
        {optionsList}
      </CommandMenu>
    </div>
  );

  return (
    <Dialog
      open={open}
      showDialogClose={false}
      unstyledContent={true}
      onOpenChange={handleOpenChange}
    >
      {hiddenTitle}
      {dialogBody}
    </Dialog>
  );
}
