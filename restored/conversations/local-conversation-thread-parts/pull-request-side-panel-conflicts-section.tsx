// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Merge-conflict section for the pull request side panel.
import type { ReactNode } from "react";
import { once } from "../../runtime/commonjs-interop";
import { useScope, useSignalValue } from "../../runtime/app-scope-hooks";
import {
  composerScope,
  initComposerScopeRuntime,
} from "../../composer/composer-scope-runtime";
import { pullRequestMergeConflictState as pullRequestMergeConflictAttachmentSignal } from "../../composer/composer-view-state";
import { initPullRequestComposerContextChunk } from "../../composer/pull-request-prompt-actions";
import {
  PullRequestInlineActionButton,
  initPullRequestInlineActionButtonChunk,
} from "../../github/pull-request-actions";
import { FormattedMessage, initIntlRuntime } from "../../vendor/react-intl";
import {
  attachPullRequestMergeConflictAndPromptFix,
  initPullRequestFixActionHelpersChunk,
  setPullRequestMergeConflictAttachment,
} from "./pull-request-merge-conflict-fix-actions";
import {
  initPullRequestFixDisabledTooltipChunk,
  PullRequestFixDisabledTooltip,
  type PullRequestFixDisabledReason,
} from "./pull-request-fix-tooltips";
import {
  initPullRequestConflictFileRowsChunk,
  initPullRequestSidePanelDetailsSummaryChunk,
  PullRequestConflictFileRows,
  PullRequestSidePanelDetailsSummary,
} from "./pull-request-side-panel-primitives";

type PullRequestMergeConflictAttachment = {
  url?: string | null;
};

type PullRequestBoardItem = {
  baseBranch: string;
  headBranch: string;
  number: number;
  url: string;
};

export type PullRequestSidePanelConflictsSectionProps = {
  error?: ReactNode;
  files?: readonly string[] | null;
  fixDisabledReason?: PullRequestFixDisabledReason | null;
  hasError: boolean;
  item: PullRequestBoardItem;
  loading: boolean;
  repo?: string | null;
};

export function PullRequestSidePanelConflictsSection({
  error,
  files,
  fixDisabledReason,
  hasError,
  item,
  loading,
  repo,
}: PullRequestSidePanelConflictsSectionProps) {
  let scope = useScope(composerScope),
    attachedMergeConflict = useSignalValue(
      pullRequestMergeConflictAttachmentSignal,
    ) as PullRequestMergeConflictAttachment | null | undefined,
    conflictsAreAttached = attachedMergeConflict?.url === item.url,
    fixDisabledTooltip =
      fixDisabledReason == null ? undefined : (
        <PullRequestFixDisabledTooltip reason={fixDisabledReason} />
      );
  let actionDisabled = !conflictsAreAttached && fixDisabledReason != null,
    actionTooltip = conflictsAreAttached ? undefined : fixDisabledTooltip,
    handleToggleConflictsFix = () => {
      if (conflictsAreAttached) {
        setPullRequestMergeConflictAttachment(scope, null);
        return;
      }
      attachPullRequestMergeConflictAndPromptFix(scope, {
        baseBranch: item.baseBranch,
        headBranch: item.headBranch,
        number: item.number,
        repo,
        url: item.url,
      });
    };
  let actionLabel = conflictsAreAttached ? (
    <FormattedMessage
      id="pullRequestSidePanel.conflicts.remove"
      defaultMessage="Remove"
      description="Button label for removing pull request merge conflicts from the chat"
    />
  ) : (
    <FormattedMessage
      id="pullRequestSidePanel.conflicts.fix"
      defaultMessage="Fix"
      description="Button label for fixing pull request merge conflicts"
    />
  );
  let headerAction = (
    <PullRequestInlineActionButton
      color="secondary"
      disabled={actionDisabled}
      inset={true}
      tooltipContent={actionTooltip}
      onClick={handleToggleConflictsFix}
    >
      {actionLabel}
    </PullRequestInlineActionButton>
  );
  let title = (
    <FormattedMessage
      id="pullRequestSidePanel.conflicts.title"
      defaultMessage="Merge conflicts"
      description="Merge conflicts section title in the pull request side panel"
    />
  );
  let header = (
    <PullRequestSidePanelDetailsSummary action={headerAction}>
      {title}
    </PullRequestSidePanelDetailsSummary>
  );
  let body = (
    <div className="rounded-xl bg-token-main-surface-primary px-4 py-1 shadow-sm">
      <PullRequestConflictFileRows
        error={error}
        files={files}
        hasError={hasError}
        loading={loading}
        repository={repo}
      />
    </div>
  );
  return (
    <details open={true} className="group flex flex-col gap-2">
      {header}
      {body}
    </details>
  );
}

export const initPullRequestSidePanelConflictsSectionChunk = once(() => {
  initComposerScopeRuntime();
  initIntlRuntime();
  initPullRequestComposerContextChunk();
  initPullRequestFixDisabledTooltipChunk();
  initPullRequestInlineActionButtonChunk();
  initPullRequestFixActionHelpersChunk();
  initPullRequestConflictFileRowsChunk();
  initPullRequestSidePanelDetailsSummaryChunk();
});
