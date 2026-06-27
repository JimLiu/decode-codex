// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Checks section for the pull request side panel.
import type { ReactNode } from "react";
import { once } from "../../runtime/commonjs-interop";
import {
  AB as initScopeRuntime,
  FB as useScope,
  Gi as initDropdownMenuPrimitives,
  IB as useSignalValue,
  iF as initIntlRuntime,
  qi as MenuChrome,
  wl as composerScope,
  Al as initComposerScope,
} from "../../boundaries/current-ref/appg-thread-shared-producer";
import {
  Qo as attachedPullRequestChecksSignal,
  ns as initPullRequestComposerContextChunk,
} from "../../boundaries/current-ref/pull-request-thread-actions-producer";
import {
  C as PullRequestInlineActionButton,
  n as initPullRequestCheckRowsChunk,
  t as PullRequestCheckRows,
  w as initPullRequestInlineActionButtonChunk,
} from "../../boundaries/current-ref/pull-request-check-rows-producer";
import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import {
  attachFailingPullRequestChecksAndPromptFix,
  getPullRequestCheckAttachmentKey,
  initPullRequestFailingChecksPromptChunk,
  setPullRequestFailingChecksAttached,
} from "./pull-request-check-fix-actions";
import {
  initPullRequestFixDisabledTooltipChunk,
  PullRequestFixDisabledTooltip,
  type PullRequestFixDisabledReason,
} from "./pull-request-fix-tooltips";
import {
  initPullRequestSidePanelDetailsSummaryChunk,
  initPullRequestSidePanelErrorMessageChunk,
  initPullRequestSidePanelLoadingStateChunk,
  PullRequestSidePanelDetailsSummary,
  PullRequestSidePanelErrorMessage,
  PullRequestSidePanelLoadingState,
} from "./pull-request-side-panel-primitives";

type PullRequestCheck = {
  link?: string | null;
  name: string;
  status: "failing" | "passing" | "pending" | "skipped" | "unknown";
  workflow?: string | null;
};

type PullRequestChecksData = {
  checks: PullRequestCheck[];
};

type PullRequestBoardItem = {
  baseBranch?: string | null;
  headBranch?: string | null;
  number?: number | null;
};

export type PullRequestSidePanelChecksSectionProps = {
  data?: PullRequestChecksData | null;
  error?: ReactNode;
  fixDisabledReason?: PullRequestFixDisabledReason | null;
  item: PullRequestBoardItem;
  loading: boolean;
};

export function PullRequestSidePanelChecksSection({
  data,
  error,
  fixDisabledReason,
  item,
  loading,
}: PullRequestSidePanelChecksSectionProps) {
  let intl = useIntl(),
    scope = useScope(composerScope),
    attachedChecks = useSignalValue(attachedPullRequestChecksSignal) as
      | PullRequestCheck[]
      | undefined,
    failingChecks = data?.checks.filter(isFailingPullRequestCheck),
    attachedCheckKeys = new Set(
      (attachedChecks ?? []).map(getPullRequestCheckAttachmentKey),
    ),
    allFailingChecksAttached =
      failingChecks != null &&
      failingChecks.length > 0 &&
      failingChecks.every((check) =>
        attachedCheckKeys.has(getPullRequestCheckAttachmentKey(check)),
      );
  let fixDisabledTooltip =
      fixDisabledReason == null ? undefined : (
        <PullRequestFixDisabledTooltip reason={fixDisabledReason} />
      ),
    headerAction =
      failingChecks != null && failingChecks.length > 0 ? (
        <PullRequestInlineActionButton
          color="secondary"
          ariaLabel={intl.formatMessage(
            allFailingChecksAttached
              ? {
                  id: "pullRequestSidePanel.checks.removeAllAccessible",
                  defaultMessage: "Remove all",
                  description:
                    "Accessible label for removing all failing pull request checks from the chat",
                }
              : {
                  id: "pullRequestSidePanel.checks.fixAllAccessible",
                  defaultMessage: "Fix all",
                  description:
                    "Accessible label for fixing all failing pull request checks",
                },
          )}
          disabled={!allFailingChecksAttached && fixDisabledReason != null}
          inset={true}
          tooltipContent={
            allFailingChecksAttached ? undefined : fixDisabledTooltip
          }
          onClick={() => {
            if (allFailingChecksAttached) {
              setPullRequestFailingChecksAttached(scope, {
                attached: false,
                checks: failingChecks,
              });
              return;
            }
            attachFailingPullRequestChecksAndPromptFix(scope, {
              baseBranch: item.baseBranch,
              checks: failingChecks,
              headBranch: item.headBranch,
              number: item.number,
            });
          }}
        >
          {allFailingChecksAttached ? (
            <FormattedMessage
              id="pullRequestSidePanel.checks.removeAll"
              defaultMessage="Remove"
              description="Button label for removing all failing pull request checks from the chat"
            />
          ) : (
            <FormattedMessage
              id="pullRequestSidePanel.checks.fixAll"
              defaultMessage="Fix"
              description="Button label for fixing all failing pull request checks"
            />
          )}
        </PullRequestInlineActionButton>
      ) : null;
  let header = (
    <PullRequestSidePanelDetailsSummary action={headerAction}>
      <FormattedMessage
        id="pullRequestSidePanel.checks.title"
        defaultMessage="Checks"
        description="Checks section title in the pull request side panel"
      />
    </PullRequestSidePanelDetailsSummary>
  );
  let body = (
    <div className="rounded-xl bg-token-main-surface-primary py-1 ps-4 shadow-sm">
      {error == null ? (
        loading || data == null ? (
          <PullRequestSidePanelLoadingState
            label={
              <FormattedMessage
                id="pullRequestSidePanel.checks.loading"
                defaultMessage="Loading checks"
                description="Loading label for pull request checks"
              />
            }
          />
        ) : data.checks.length > 0 ? (
          <PullRequestCheckRows
            canFix={fixDisabledReason == null}
            checks={data.checks}
            density="comfortable"
            fixTooltipContent={fixDisabledTooltip}
            insetFixButtons={true}
            labelTone="primary"
            isCheckAttached={(check: PullRequestCheck) =>
              attachedCheckKeys.has(getPullRequestCheckAttachmentKey(check))
            }
            onFixCheck={(check: PullRequestCheck) => {
              attachFailingPullRequestChecksAndPromptFix(scope, {
                baseBranch: item.baseBranch,
                checks: [check],
                headBranch: item.headBranch,
                number: item.number,
              });
            }}
            onRemoveCheck={(check: PullRequestCheck) => {
              setPullRequestFailingChecksAttached(scope, {
                attached: false,
                checks: [check],
              });
            }}
          />
        ) : (
          <MenuChrome.Message compact={true}>
            <FormattedMessage
              id="pullRequestSidePanel.checks.empty"
              defaultMessage="No checks reported"
              description="Empty pull request checks list"
            />
          </MenuChrome.Message>
        )
      ) : (
        <PullRequestSidePanelErrorMessage description={error} />
      )}
    </div>
  );
  return (
    <details open={true} className="group flex flex-col gap-1">
      {header}
      {body}
    </details>
  );
}

function isFailingPullRequestCheck(check: PullRequestCheck) {
  return check.status === "failing";
}

export const initPullRequestSidePanelChecksSectionChunk = once(() => {
  initScopeRuntime();
  initIntlRuntime();
  initDropdownMenuPrimitives();
  initPullRequestComposerContextChunk();
  initPullRequestFixDisabledTooltipChunk();
  initPullRequestInlineActionButtonChunk();
  initPullRequestFailingChecksPromptChunk();
  initPullRequestCheckRowsChunk();
  initComposerScope();
  initPullRequestSidePanelErrorMessageChunk();
  initPullRequestSidePanelDetailsSummaryChunk();
  initPullRequestSidePanelLoadingStateChunk();
});
