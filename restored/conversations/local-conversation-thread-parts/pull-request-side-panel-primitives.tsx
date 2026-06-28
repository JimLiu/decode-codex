// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Shared pull request side-panel primitives and merge-conflict file rows.
import type { KeyboardEvent, MouseEvent, ReactNode, SVGProps } from "react";
import { ChevronIcon, initChevronDownIcon } from "../../icons/chevron-icon";
import { once } from "../../runtime/commonjs-interop";
import {
  Dropdown as MenuChrome,
  initDropdownMenuPrimitives,
} from "../../ui/dropdown";
import { initSpinnerComponent, Spinner } from "../../ui/spinner";

import {
  PullRequestMetadataRows,
  initPullRequestMetadataRowsChunk,
} from "../../github/pull-request-actions";
import { FormattedMessage, initIntlRuntime } from "../../vendor/react-intl";

export type PullRequestSidePanelErrorMessageProps = {
  description?: ReactNode;
};

export function PullRequestSidePanelErrorMessage({
  description,
}: PullRequestSidePanelErrorMessageProps) {
  let errorDescription = description ?? (
    <FormattedMessage
      id="pullRequestSidePanel.error.description"
      defaultMessage="Couldn’t load this pull request section"
      description="Fallback error description for pull request sections"
    />
  );

  return (
    <div className="px-2 py-3 text-base text-token-charts-red">
      {errorDescription}
    </div>
  );
}

export type PullRequestSidePanelDetailsSummaryProps = {
  action?: ReactNode;
  children: ReactNode;
};

export function PullRequestSidePanelDetailsSummary({
  action,
  children,
}: PullRequestSidePanelDetailsSummaryProps) {
  let titleNode = (
      <span className="flex min-w-0 items-center gap-1">
        {children}
        <ChevronIcon className="icon-2xs rotate-180 transition-transform group-open:rotate-0" />
      </span>
    ),
    actionNode =
      action == null ? null : (
        <span
          className="flex shrink-0"
          onClick={stopDetailsSummaryActionClick}
          onKeyDown={stopDetailsSummaryActionKeyDown}
        >
          {action}
        </span>
      );

  return (
    <summary className="flex min-h-9 cursor-interaction list-none items-center justify-between gap-2 text-base text-token-text-tertiary marker:hidden">
      {titleNode}
      {actionNode}
    </summary>
  );
}

function stopDetailsSummaryActionKeyDown(event: KeyboardEvent<HTMLElement>) {
  event.stopPropagation();
}

function stopDetailsSummaryActionClick(event: MouseEvent<HTMLElement>) {
  event.preventDefault();
  event.stopPropagation();
}

export type PullRequestSidePanelLoadingStateProps = {
  label: ReactNode;
};

export function PullRequestSidePanelLoadingState({
  label,
}: PullRequestSidePanelLoadingStateProps) {
  return (
    <div
      aria-busy="true"
      className="flex min-h-16 items-center justify-center text-token-text-tertiary"
    >
      <Spinner className="icon-sm" />
      <span className="sr-only">{label}</span>
    </div>
  );
}

function MergeConflictFileIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      fill="currentColor"
      viewBox="0 0 20 20"
      {...props}
    >
      <path d="M10 2.085a7.915 7.915 0 1 1 0 15.83 7.915 7.915 0 0 1 0-15.83Z" />
    </svg>
  );
}

export type PullRequestConflictFileRowsProps = {
  error?: ReactNode;
  files?: readonly string[] | null;
  hasError: boolean;
  loading: boolean;
  repository?: string | null;
};

export function PullRequestConflictFileRows({
  error,
  files,
  hasError,
  loading,
  repository,
}: PullRequestConflictFileRowsProps) {
  if (hasError) {
    return <PullRequestSidePanelErrorMessage description={error} />;
  }
  if (loading || files == null) {
    return (
      <PullRequestSidePanelLoadingState
        label={
          <FormattedMessage
            id="pullRequestSidePanel.conflicts.loading"
            defaultMessage="Loading changed files"
            description="Loading label for merge conflict files"
          />
        }
      />
    );
  }
  if (files.length === 0) {
    return (
      <MenuChrome.Message compact={true}>
        <FormattedMessage
          id="pullRequestSidePanel.conflicts.empty"
          defaultMessage="No changed files reported"
          description="Empty merge conflict file list"
        />
      </MenuChrome.Message>
    );
  }

  let rows = files.map((filePath) => ({
    icon: (
      <span className="inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center">
        <MergeConflictFileIcon className="icon-3xs text-token-text-tertiary" />
      </span>
    ),
    id: filePath,
    label: filePath,
    trailing:
      repository == null ? null : (
        <span className="max-w-52 truncate text-sm text-token-text-tertiary">
          {repository}
        </span>
      ),
  }));

  return (
    <PullRequestMetadataRows
      density="comfortable"
      items={rows}
      labelTone="primary"
    />
  );
}

export const initPullRequestSidePanelErrorMessageChunk = once(() => {
  initIntlRuntime();
});

export const initPullRequestSidePanelDetailsSummaryChunk = once(() => {
  initChevronDownIcon();
});

export const initPullRequestSidePanelLoadingStateChunk = once(() => {
  initSpinnerComponent();
});

export const initMergeConflictFileIconChunk = once(() => {});

export const initPullRequestConflictFileRowsChunk = once(() => {
  initIntlRuntime();
  initDropdownMenuPrimitives();
  initMergeConflictFileIconChunk();
  initPullRequestMetadataRowsChunk();
  initPullRequestSidePanelErrorMessageChunk();
  initPullRequestSidePanelLoadingStateChunk();
});
