// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Comments section for the pull request side panel.
import type { ReactNode } from "react";
import { once } from "../../runtime/commonjs-interop";
import {
  Dropdown as MenuChrome,
  initDropdownMenuPrimitives,
} from "../../ui/dropdown";
import { useScope, useScopedValue } from "../../runtime/app-scope-hooks";
import {
  composerScope,
  initComposerScopeRuntime,
} from "../../composer/composer-scope-runtime";
import {
  getReviewCommentAttachmentKeyValue,
  initPullRequestCommentCardRuntime,
  initPullRequestReviewCommentAttachmentStateRuntime,
  initPullRequestReviewCommentRuntime,
  PullRequestCommentCard,
  pullRequestReviewCommentAttachmentsSignal,
} from "./pull-request-prompt-runtime";
import {
  PullRequestInlineActionButton,
  initPullRequestInlineActionButtonChunk,
} from "../../github/pull-request-actions";
import {
  FormattedMessage,
  useIntl,
  initIntlRuntime,
} from "../../vendor/react-intl";
import {
  attachPullRequestCommentsAndPromptFix,
  initPullRequestCommentFixHelpersChunk,
  setPullRequestCommentsAttached,
} from "./pull-request-comment-fix-actions";
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
import { getPullRequestCommentActivityItems } from "./pull-request-comment-activity-items";

type ReviewCommentAttachment = {
  reviewThreadId?: string | null;
  url?: string | null;
  position: {
    path?: string | null;
  };
};

type PullRequestActivityItem = {
  authorAvatarUrl?: string | null;
  authorLogin?: string | null;
  body?: ReactNode;
  createdAt?: string | null;
  id: string;
  path?: string | null;
  replies?: unknown;
  reviewThreadId?: string | null;
  type: string;
  url?: string | null;
};

type PullRequestCommentsData = {
  activityItems: PullRequestActivityItem[];
  commentAttachments?: ReviewCommentAttachment[];
};

type PullRequestBoardItem = {
  baseBranch?: string | null;
  headBranch?: string | null;
  number?: number | null;
};

export type PullRequestSidePanelCommentsSectionProps = {
  data?: PullRequestCommentsData | null;
  error?: ReactNode;
  fixDisabledReason?: PullRequestFixDisabledReason | null;
  item: PullRequestBoardItem;
  loading: boolean;
};

export function PullRequestSidePanelCommentsSection({
  data,
  error,
  fixDisabledReason,
  item,
  loading,
}: PullRequestSidePanelCommentsSectionProps) {
  let intl = useIntl(),
    scope = useScope(composerScope),
    conversationId = scope.value.routeConversationId,
    attachedCommentAttachments = useScopedValue(
      pullRequestReviewCommentAttachmentsSignal,
      conversationId,
    ) as ReviewCommentAttachment[],
    commentActivityItems =
      data == null
        ? null
        : getPullRequestCommentActivityItems(data.activityItems),
    commentAttachments = data?.commentAttachments,
    attachedCommentAttachmentKeys = new Set(
      attachedCommentAttachments.map(getReviewCommentAttachmentKeyValue),
    );
  let allCommentsAttached =
      commentAttachments != null &&
      commentAttachments.length > 0 &&
      commentAttachments.every((attachment) =>
        attachedCommentAttachmentKeys.has(
          getReviewCommentAttachmentKeyValue(attachment),
        ),
      ),
    fixDisabledTooltip =
      fixDisabledReason == null ? undefined : (
        <PullRequestFixDisabledTooltip reason={fixDisabledReason} />
      );
  let headerAction =
    commentAttachments != null && commentAttachments.length > 0 ? (
      <PullRequestInlineActionButton
        color="secondary"
        ariaLabel={intl.formatMessage(
          allCommentsAttached
            ? {
                id: "pullRequestSidePanel.comments.removeAllAccessible",
                defaultMessage: "Remove all",
                description:
                  "Accessible label for removing all pull request comments from the chat",
              }
            : {
                id: "pullRequestSidePanel.comments.fixAllAccessible",
                defaultMessage: "Fix all",
                description:
                  "Accessible label for fixing all pull request comments",
              },
        )}
        disabled={!allCommentsAttached && fixDisabledReason != null}
        inset={true}
        tooltipContent={allCommentsAttached ? undefined : fixDisabledTooltip}
        onClick={() => {
          if (allCommentsAttached) {
            setPullRequestCommentsAttached(scope, {
              attached: false,
              commentAttachments,
              conversationId,
            });
            return;
          }
          attachPullRequestCommentsAndPromptFix(scope, {
            baseBranch: item.baseBranch,
            commentAttachments,
            conversationId,
            focusComposer: true,
            headBranch: item.headBranch,
            number: item.number,
          });
        }}
      >
        {allCommentsAttached ? (
          <FormattedMessage
            id="pullRequestSidePanel.comments.removeAll"
            defaultMessage="Remove"
            description="Button label for removing all pull request comments from the chat"
          />
        ) : (
          <FormattedMessage
            id="pullRequestSidePanel.comments.fixAll"
            defaultMessage="Fix"
            description="Button label for fixing all pull request comments"
          />
        )}
      </PullRequestInlineActionButton>
    ) : null;
  return (
    <details open={true} className="group flex flex-col pb-8">
      <PullRequestSidePanelDetailsSummary action={headerAction}>
        <FormattedMessage
          id="pullRequestSidePanel.comments.title"
          defaultMessage="Comments"
          description="Comments section title in the pull request side panel"
        />
      </PullRequestSidePanelDetailsSummary>
      {error == null ? (
        loading || data == null ? (
          <PullRequestSidePanelLoadingState
            label={
              <FormattedMessage
                id="pullRequestSidePanel.comments.loading"
                defaultMessage="Loading comments"
                description="Loading label for pull request comments"
              />
            }
          />
        ) : commentActivityItems != null && commentActivityItems.length > 0 ? (
          <div className="flex flex-col gap-1">
            {commentActivityItems.map((activityItem) =>
              renderPullRequestCommentActivityItem({
                activityItem,
                attachedCommentAttachmentKeys,
                commentAttachments,
                conversationId,
                fixDisabledReason,
                fixDisabledTooltip,
                item,
                scope,
              }),
            )}
          </div>
        ) : (
          <MenuChrome.Message compact={true}>
            <FormattedMessage
              id="pullRequestSidePanel.comments.empty"
              defaultMessage="No comments"
              description="Empty pull request comments list"
            />
          </MenuChrome.Message>
        )
      ) : (
        <PullRequestSidePanelErrorMessage description={error} />
      )}
    </details>
  );
}

function renderPullRequestCommentActivityItem({
  activityItem,
  attachedCommentAttachmentKeys,
  commentAttachments,
  conversationId,
  fixDisabledReason,
  fixDisabledTooltip,
  item,
  scope,
}: {
  activityItem: PullRequestActivityItem;
  attachedCommentAttachmentKeys: Set<unknown>;
  commentAttachments?: ReviewCommentAttachment[];
  conversationId?: string | null;
  fixDisabledReason?: PullRequestFixDisabledReason | null;
  fixDisabledTooltip?: ReactNode;
  item: PullRequestBoardItem;
  scope: unknown;
}) {
  let commentAttachment = findCommentAttachmentForActivityItem(
      activityItem,
      commentAttachments,
    ),
    commentIsAttached =
      commentAttachment != null &&
      attachedCommentAttachmentKeys.has(
        getReviewCommentAttachmentKeyValue(commentAttachment),
      );
  return (
    <PullRequestCommentCard
      key={activityItem.id}
      authorAvatarUrl={activityItem.authorAvatarUrl}
      authorLogin={activityItem.authorLogin}
      body={activityItem.body}
      createdAt={activityItem.createdAt}
      defaultCollapsed={true}
      metadataAccessory={
        commentAttachment == null ? null : (
          <PullRequestInlineActionButton
            disabled={!commentIsAttached && fixDisabledReason != null}
            inset={true}
            tooltipContent={commentIsAttached ? undefined : fixDisabledTooltip}
            onClick={() => {
              if (!commentIsAttached) {
                attachPullRequestCommentsAndPromptFix(scope, {
                  baseBranch: item.baseBranch,
                  commentAttachments: [commentAttachment],
                  conversationId,
                  focusComposer: true,
                  headBranch: item.headBranch,
                  number: item.number,
                });
                return;
              }
              setPullRequestCommentsAttached(scope, {
                attached: false,
                commentAttachments: [commentAttachment],
                conversationId,
              });
            }}
          >
            {commentIsAttached ? (
              <FormattedMessage
                id="pullRequestSidePanel.comments.removeFromChat"
                defaultMessage="Remove"
                description="Button label for removing a pull request comment from the chat"
              />
            ) : (
              <FormattedMessage
                id="pullRequestSidePanel.comments.fixComment"
                defaultMessage="Fix"
                description="Button label for fixing an individual pull request comment"
              />
            )}
          </PullRequestInlineActionButton>
        )
      }
      metadataTooltipContent={
        activityItem.path ?? commentAttachment?.position.path
      }
      replies={activityItem.replies}
      surface="timeline"
      url={activityItem.url}
    />
  );
}

function findCommentAttachmentForActivityItem(
  activityItem: PullRequestActivityItem,
  commentAttachments?: ReviewCommentAttachment[],
) {
  return (
    commentAttachments?.find(
      (attachment) =>
        (activityItem.reviewThreadId != null &&
          attachment.reviewThreadId === activityItem.reviewThreadId) ||
        (activityItem.url != null && attachment.url === activityItem.url),
    ) ?? null
  );
}

export const initPullRequestSidePanelCommentsSectionChunk = once(() => {
  initComposerScopeRuntime();
  initIntlRuntime();
  initPullRequestReviewCommentAttachmentStateRuntime();
  initDropdownMenuPrimitives();
  initPullRequestReviewCommentRuntime();
  initPullRequestCommentFixHelpersChunk();
  initPullRequestFixDisabledTooltipChunk();
  initPullRequestInlineActionButtonChunk();
  initPullRequestCommentCardRuntime();
  initPullRequestSidePanelErrorMessageChunk();
  initPullRequestSidePanelDetailsSummaryChunk();
  initPullRequestSidePanelLoadingStateChunk();
});
