// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Confirmation dialogs shown when an MCP app asks to send a follow-up prompt:
// an editable-prompt dialog plus a wrapper that can target a new thread
// (running locally or in a fresh worktree) in a chosen project.

import * as React from "react";
import type { FormEvent, ReactNode } from "react";
import {
  defineMessages,
  FormattedMessage,
  useIntl,
} from "../vendor/react-intl";
import { Button } from "../ui/button";
import {
  DialogBody,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogLayout,
  DialogTitle,
} from "../ui/dialog-layout";
import { Dropdown, DropdownMenu } from "../ui/dropdown";
import { Checkbox } from "../utils/checkbox";
import { ChevronIcon } from "../icons/chevron-icon";
import { WorktreeIcon } from "../icons/worktree-icon";
import { LaptopIcon } from "../icons/laptop-icon";
import { CheckMdIcon } from "../icons/check-md-icon";
import {
  buildProjectDropdownOptions,
  ProjectDropdownOptions,
} from "../ui/project-dropdown-options";
import { normalizeProjectRoot } from "../boundaries/src-l0hb-mz-p";
import {
  useAtomValue,
  workspaceGroupsSignal,
} from "../boundaries/onboarding-commons-externals.facade";

const messages = defineMessages({
  workLocally: {
    id: "codex.mcpTool.confirmFollowUp.workLocally",
    defaultMessage: "Work locally",
    description:
      "Dropdown option for starting an MCP app follow-up thread in the selected local project",
  },
  newWorktree: {
    id: "codex.mcpTool.confirmFollowUp.newWorktree",
    defaultMessage: "New worktree",
    description:
      "Dropdown option for starting an MCP app follow-up thread in a new worktree",
  },
});

export interface FollowUpPromptConfirmation {
  canConfirm?: boolean;
  footerLeadingContent?: ReactNode;
  onCancel: () => void;
  onConfirm: (prompt: string) => void;
  prompt: string;
  title?: ReactNode;
}

export function FollowUpPromptDialog({
  confirmation,
}: {
  confirmation: FollowUpPromptConfirmation | null;
}) {
  if (confirmation == null) return null;
  return <FollowUpPromptDialogContent {...confirmation} />;
}

function FollowUpPromptDialogContent({
  canConfirm = true,
  footerLeadingContent,
  onCancel,
  onConfirm,
  prompt,
  title,
}: FollowUpPromptConfirmation) {
  const intl = useIntl();
  const [draft, setDraft] = React.useState(prompt);
  const trimmedDraft = draft.trim();
  const isConfirmDisabled = !canConfirm || trimmedDraft.length === 0;

  const handleOpenChange = (open: boolean) => {
    if (!open) onCancel();
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!isConfirmDisabled) onConfirm(trimmedDraft);
  };

  const titleContent = title ?? (
    <FormattedMessage
      id="codex.mcpTool.confirmFollowUp.title"
      defaultMessage="Send follow-up?"
      description="Title for a dialog asking whether an MCP app may send a follow-up prompt"
    />
  );
  const promptAriaLabel = intl.formatMessage({
    id: "codex.mcpTool.confirmFollowUp.promptAriaLabel",
    defaultMessage: "Prompt",
    description:
      "Aria label for the editable prompt field in the MCP app follow-up confirmation dialog",
  });

  return (
    <DialogLayout open onOpenChange={handleOpenChange} size="wide">
      <DialogBody className="gap-4" as="form" onSubmit={handleSubmit}>
        <DialogHeader
          title={<DialogTitle>{titleContent}</DialogTitle>}
          subtitle={
            <DialogDescription className="text-token-text-secondary">
              <FormattedMessage
                id="codex.mcpTool.confirmFollowUp.description"
                defaultMessage="An app wants to send this prompt"
                description="Description for a dialog asking whether an MCP app may send a follow-up prompt"
              />
            </DialogDescription>
          }
        />
        <textarea
          ref={focusPromptTextarea}
          className="max-h-60 min-h-32 resize-y rounded-md border border-token-border bg-token-bg-fog px-3 py-2 text-sm whitespace-pre-wrap text-token-text-primary outline-none focus:border-token-focus-border"
          aria-label={promptAriaLabel}
          autoFocus
          value={draft}
          onChange={(event) => {
            setDraft(event.target.value);
          }}
        />
        <DialogFooter className="justify-start gap-2">
          {footerLeadingContent ?? <div className="flex-1" />}
          <Button
            className="ml-auto"
            color="secondary"
            type="button"
            onClick={onCancel}
          >
            <FormattedMessage
              id="codex.mcpTool.confirmFollowUp.cancel"
              defaultMessage="Cancel"
              description="Cancel button for a dialog asking whether an MCP app may send a follow-up prompt"
            />
          </Button>
          <Button disabled={isConfirmDisabled} type="submit">
            <FormattedMessage
              id="codex.mcpTool.confirmFollowUp.confirm"
              defaultMessage="Send"
              description="Confirm button for a dialog asking whether an MCP app may send a follow-up prompt"
            />
          </Button>
        </DialogFooter>
      </DialogBody>
    </DialogLayout>
  );
}

function focusPromptTextarea(element: HTMLTextAreaElement | null) {
  element?.setSelectionRange(element.value.length, element.value.length);
}

type ExecutionMode = "local" | "worktree";

export interface NewThreadFollowUpResult {
  executionMode: ExecutionMode;
  prompt: string;
  projectRoot: string;
  type: "new-thread";
}

export interface FollowUpConfirmation {
  onCancel: () => void;
  onConfirmCurrentThread: (prompt: string) => void;
  onConfirmNewThread: (result: NewThreadFollowUpResult) => void;
  prompt: string;
  title?: ReactNode;
}

type FollowUpWorkspaceGroup = {
  isCodexWorktree?: boolean;
  label: string;
  path?: string | null;
  projectKind?: string;
  repositoryData?: { rootFolder?: string | null } | null;
};

export function FollowUpConfirmationDialog({
  confirmation,
}: {
  confirmation: FollowUpConfirmation | null;
}) {
  if (confirmation == null) return null;
  return (
    <FollowUpConfirmationDialogWithWorkspaces confirmation={confirmation} />
  );
}

function FollowUpConfirmationDialogWithWorkspaces({
  confirmation,
}: {
  confirmation: FollowUpConfirmation;
}) {
  const workspaceGroups = useAtomValue(workspaceGroupsSignal) as
    | FollowUpWorkspaceGroup[]
    | null
    | undefined;
  return (
    <FollowUpConfirmationDialogContent
      confirmation={confirmation}
      supportsWorktrees
      workspaceGroups={workspaceGroups}
    />
  );
}

function FollowUpConfirmationDialogContent({
  confirmation,
  supportsWorktrees,
  workspaceGroups,
}: {
  confirmation: FollowUpConfirmation;
  supportsWorktrees: boolean;
  workspaceGroups?: FollowUpWorkspaceGroup[] | null;
}) {
  const {
    onCancel,
    onConfirmCurrentThread,
    onConfirmNewThread,
    prompt,
    title,
  } = confirmation;
  const intl = useIntl();
  const checkboxId = React.useId();
  const [createNewThread, setCreateNewThread] = React.useState(false);
  const [executionMode, setExecutionMode] =
    React.useState<ExecutionMode>("local");
  const [selectedProjectRoot, setSelectedProjectRoot] = React.useState<
    string | null
  >(null);

  const projectlessRoot = normalizeProjectRoot("~");
  const localOptions = buildProjectDropdownOptions({
    workspaceGroups,
    roots: [],
    formatRootLabel: identityRootLabel,
  });
  const worktreeOptions = buildProjectDropdownOptions({
    workspaceGroups: workspaceGroups?.filter(isLocalGitWorkspaceGroup),
    roots: [],
    formatRootLabel: identityRootLabel,
  });

  const resolvedLocalRoot =
    selectedProjectRoot === projectlessRoot
      ? projectlessRoot
      : (localOptions.find((item) => item.value === selectedProjectRoot)
          ?.value ?? projectlessRoot);
  const resolvedWorktreeRoot =
    worktreeOptions.find((item) => item.value === selectedProjectRoot)?.value ??
    worktreeOptions[0]?.value ??
    null;

  let effectiveProjectRoot: string | null = null;
  if (executionMode === "local") {
    effectiveProjectRoot = normalizeProjectRoot(resolvedLocalRoot);
  } else if (resolvedWorktreeRoot != null) {
    effectiveProjectRoot = normalizeProjectRoot(resolvedWorktreeRoot);
  }

  const canCreateWorktree = supportsWorktrees && worktreeOptions.length > 0;
  const canConfirm =
    !createNewThread ||
    (effectiveProjectRoot != null &&
      (executionMode === "local" || canCreateWorktree));

  const checkboxLabel = (
    <FormattedMessage
      id="codex.mcpTool.confirmFollowUp.createNewThread"
      defaultMessage="Create new thread"
      description="Checkbox label for sending an MCP app follow-up prompt to a new thread"
    />
  );
  const checkboxRow = (
    <div className="relative flex min-w-0 items-center gap-2">
      <Checkbox
        id={checkboxId}
        checked={createNewThread}
        onCheckedChange={setCreateNewThread}
      />
      <label
        className="cursor-interaction text-sm text-token-foreground"
        htmlFor={checkboxId}
      >
        {checkboxLabel}
      </label>
    </div>
  );

  const newThreadRow = createNewThread ? (
    <div className="flex min-w-0 items-center gap-2">
      <ExecutionModeDropdown
        canCreateWorktree={canCreateWorktree}
        mode={executionMode}
        supportsWorktrees={supportsWorktrees}
        onChange={setExecutionMode}
      />
      <span className="text-sm text-token-description-foreground">
        <FormattedMessage
          id="codex.mcpTool.confirmFollowUp.runsIn"
          defaultMessage="in"
          description="Short label before the project dropdown after the Create new thread checkbox in the MCP app follow-up confirmation dialog"
        />
      </span>
      <ProjectDropdownOptions
        className="max-w-56 shrink"
        selectedRoots={
          effectiveProjectRoot == null ? [] : [effectiveProjectRoot]
        }
        options={executionMode === "worktree" ? worktreeOptions : localOptions}
        placeholder={intl.formatMessage({
          id: "codex.mcpTool.confirmFollowUp.projectPlaceholder",
          defaultMessage: "Select project",
          description:
            "Placeholder text for the project dropdown in the MCP app follow-up confirmation dialog",
        })}
        includeChats={executionMode === "local"}
        localOnlyTooltip={intl.formatMessage({
          id: "codex.mcpTool.confirmFollowUp.localProjectsOnlyTooltip",
          defaultMessage:
            "Remote projects aren't available for new threads from MCP app follow-ups",
          description:
            "Tooltip explaining why MCP app follow-up new thread project options only include Chats and local projects when remote connections are connected",
        })}
        selectionMode="single"
        onChange={(roots) => {
          setSelectedProjectRoot(roots[0] ?? null);
        }}
      />
    </div>
  ) : null;

  const footerLeadingContent = (
    <div className="flex min-w-0 flex-1 flex-col items-start gap-2">
      {checkboxRow}
      {newThreadRow}
    </div>
  );

  const handleConfirm = (confirmedPrompt: string) => {
    if (!createNewThread) {
      onConfirmCurrentThread(confirmedPrompt);
      return;
    }
    if (effectiveProjectRoot == null || !canConfirm) return;
    onConfirmNewThread({
      executionMode,
      prompt: confirmedPrompt,
      projectRoot: effectiveProjectRoot,
      type: "new-thread",
    });
  };

  return (
    <FollowUpPromptDialog
      confirmation={{
        canConfirm,
        footerLeadingContent,
        onCancel,
        onConfirm: handleConfirm,
        prompt,
        title,
      }}
    />
  );
}

function identityRootLabel(root: string): string {
  return root;
}

function isLocalGitWorkspaceGroup(group: FollowUpWorkspaceGroup): boolean {
  return group.projectKind === "local" && group.repositoryData != null;
}

function ExecutionModeDropdown({
  canCreateWorktree,
  mode,
  supportsWorktrees,
  onChange,
}: {
  canCreateWorktree: boolean;
  mode: ExecutionMode;
  supportsWorktrees: boolean;
  onChange: (mode: ExecutionMode) => void;
}) {
  const intl = useIntl();
  const TriggerIcon = mode === "worktree" ? WorktreeIcon : LaptopIcon;
  const worktreeDisabledTooltip = supportsWorktrees
    ? intl.formatMessage({
        id: "codex.mcpTool.confirmFollowUp.newWorktreeRequiresGitProject",
        defaultMessage: "New worktree requires a local git project",
        description:
          "Tooltip for a disabled MCP app follow-up worktree option when no local git project is available",
      })
    : intl.formatMessage({
        id: "codex.mcpTool.confirmFollowUp.newWorktreeDesktopOnly",
        defaultMessage:
          "New worktree is only available in the Codex desktop app",
        description:
          "Tooltip for a disabled MCP app follow-up worktree option outside the Codex desktop app",
      });

  const triggerButton = (
    <Button className="min-w-0" color="ghost" size="composerSm">
      <TriggerIcon className="icon-2xs shrink-0" />
      <span className="truncate text-left text-token-foreground">
        {mode === "worktree" ? (
          <FormattedMessage {...messages.newWorktree} />
        ) : (
          <FormattedMessage {...messages.workLocally} />
        )}
      </span>
      <ChevronIcon className="icon-2xs shrink-0 text-token-input-placeholder-foreground" />
    </Button>
  );

  return (
    <DropdownMenu contentWidth="menuNarrow" triggerButton={triggerButton}>
      <Dropdown.Item
        LeftIcon={LaptopIcon}
        RightIcon={mode === "local" ? CheckMdIcon : undefined}
        onSelect={() => {
          onChange("local");
        }}
      >
        <FormattedMessage {...messages.workLocally} />
      </Dropdown.Item>
      <Dropdown.Item
        LeftIcon={WorktreeIcon}
        RightIcon={mode === "worktree" ? CheckMdIcon : undefined}
        disabled={!canCreateWorktree}
        tooltipText={canCreateWorktree ? undefined : worktreeDisabledTooltip}
        onSelect={() => {
          onChange("worktree");
        }}
      >
        <FormattedMessage {...messages.newWorktree} />
      </Dropdown.Item>
    </DropdownMenu>
  );
}
