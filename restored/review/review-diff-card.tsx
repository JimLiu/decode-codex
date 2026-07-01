// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// One review diff card: resolves the file's diff model (real diff, placeholder, or
// merge-conflict placeholder), wires viewed-state, comments, hunk/file patch actions,
// open-in-tab, word-wrap, and rich-preview, then renders the UnifiedFileDiffView.

import { createElement, memo, useCallback } from "react";
import type { MutableRefObject } from "react";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import {
  useStore,
  useAtomValue,
  useKeyedAtomValue,
  routeAtom,
  reviewCwdAtom,
  reviewHostConfigAtom,
  reviewFileDiffModelAtom,
  reviewRichPreviewEnabledAtom,
  reviewDiffWrapAtom,
  hideWhitespaceAtom,
  workspaceRootToCwd,
  parseUnifiedDiff,
  conversationIdFromRoute,
  buildEntrypointConversationId,
  reviewTestIds,
  reviewFilterSupportsGitActions,
  useReviewFindHighlight,
  retryReviewFileDiff,
  UnifiedFileDiffView,
  Checkbox,
  Tooltip,
} from "../boundaries/onboarding-commons-externals.facade";
import { reviewDiffFilterAtom } from "./review-diff-model";
import {
  buildViewedFileKey,
  isFileViewed,
  viewedFileRevisionAtomFamily,
} from "./viewed-file-atoms";
import { isApplyingPatchAtom } from "./patch-action-confirm-atoms";
import { startPatchAction } from "./patch-action-runner";
import { openFileTab } from "./open-file-tab";
import { usePullRequestComments } from "./use-pull-request-comments";
import type { ReviewFileDiff } from "./diff-patch-builder";

const PLACEHOLDER_REVIEW_PATH = "src/codex-review-placeholder.ts";

const PLACEHOLDER_REVIEW_DIFF = `diff --git a/${PLACEHOLDER_REVIEW_PATH} b/${PLACEHOLDER_REVIEW_PATH}
--- a/${PLACEHOLDER_REVIEW_PATH}
+++ b/${PLACEHOLDER_REVIEW_PATH}
@@ -0,0 +0,0 @@
`;

interface ReviewFileModel {
  diffRevision: string | null;
  diff: ReviewFileDiff | null;
  displayPath?: string;
  path: string;
  diffLoadStatus: "loading" | "loaded" | "error" | string;
  canApplyPatchActions: boolean;
  summary?: {
    changeKind?: string;
    additions?: number;
    deletions?: number;
  };
}

function buildPlaceholderDiff(file: ReviewFileModel): ReviewFileDiff {
  const parsed = parseUnifiedDiff(PLACEHOLDER_REVIEW_DIFF)[0];
  if (parsed == null)
    throw new Error("Failed to parse placeholder review diff");
  return {
    ...parsed,
    additions: file.summary?.additions ?? 0,
    deletions: file.summary?.deletions ?? 0,
  } as ReviewFileDiff;
}

function buildMergeConflictPlaceholderDiff(message: string): ReviewFileDiff {
  const parsed =
    parseUnifiedDiff(`diff --git a/${PLACEHOLDER_REVIEW_PATH} b/${PLACEHOLDER_REVIEW_PATH}
--- a/${PLACEHOLDER_REVIEW_PATH}
+++ b/${PLACEHOLDER_REVIEW_PATH}
@@ -0,0 +1 @@
+${message}
`)[0];
  if (parsed == null) {
    throw new Error("Failed to parse merge conflict placeholder review diff");
  }
  return parsed as ReviewFileDiff;
}

interface ReviewDiffCardProps {
  defaultOpen: boolean;
  diffMode: "split" | "unified" | string;
  diffRefs: MutableRefObject<Map<string, Element>>;
  isCappedMode: boolean;
  path: string;
  reviewDiffMetrics: unknown;
  showReviewGitActions: boolean;
  skipFindHighlight: boolean;
}

export const ReviewDiffCard = memo(function ReviewDiffCard({
  defaultOpen,
  diffMode,
  diffRefs,
  isCappedMode,
  path,
  reviewDiffMetrics,
  showReviewGitActions,
  skipFindHighlight,
}: ReviewDiffCardProps) {
  const store = useStore(routeAtom);
  const intl = useIntl();
  const workspaceRoot = useAtomValue<string | null>(reviewCwdAtom);
  const hostConfig = useAtomValue<{ id: string }>(reviewHostConfigAtom);
  const reviewFilter = useAtomValue<string>(reviewDiffFilterAtom);
  const fileModel = useKeyedAtomValue<ReviewFileModel | null>(
    reviewFileDiffModelAtom,
    path,
  );
  const viewedKey = buildViewedFileKey(hostConfig.id, path);
  const viewedRevision = useKeyedAtomValue<string | null>(
    viewedFileRevisionAtomFamily,
    viewedKey,
  );
  const isApplyingPatch = useAtomValue<boolean>(isApplyingPatchAtom);
  const richPreviewEnabled = useAtomValue<boolean>(
    reviewRichPreviewEnabledAtom,
  );
  const ignoreWhitespace = useAtomValue<boolean>(hideWhitespaceAtom);
  const wordWrap = useAtomValue<boolean>(reviewDiffWrapAtom);
  const conversationId = conversationIdFromRoute(store.value);
  const localConversationId =
    store.value.routeKind === "local-thread"
      ? store.value.conversationId
      : null;
  const { commentProps } = usePullRequestComments({
    conversationId:
      conversationId ?? buildEntrypointConversationId({ entrypoint: "home" }),
    enablePullRequestComments: reviewFilter !== "last-turn",
    localConversationId,
  });
  const diffViewWrap = isCappedMode ? false : wordWrap;
  const onPostRender = useReviewFindHighlight({ path, skipFindHighlight });

  const assignDiffRef = useCallback(
    (element: Element | null) => {
      if (element) {
        diffRefs.current.set(path, element);
        return;
      }
      diffRefs.current.delete(path);
    },
    [diffRefs, path],
  );

  if (fileModel == null) return null;

  const diffRevision = fileModel.diffRevision;
  const isViewed =
    reviewFilter === "branch" && isFileViewed(viewedRevision, diffRevision);
  const isUnmerged = fileModel.summary?.changeKind === "unmerged";
  const showGitActions =
    reviewFilterSupportsGitActions(reviewFilter) &&
    !isUnmerged &&
    showReviewGitActions;
  const diff = isUnmerged
    ? buildMergeConflictPlaceholderDiff(
        intl.formatMessage({
          id: "review.fileDiff.mergeConflicts",
          defaultMessage: "File has merge conflicts",
          description:
            "Message shown in the review diff when a file has unresolved Git merge conflicts",
        }),
      )
    : (fileModel.diff ?? buildPlaceholderDiff(fileModel));
  const open = defaultOpen && !isViewed && diff.metadata.type !== "deleted";
  const hasLoadError = !isUnmerged && fileModel.diffLoadStatus === "error";
  const openLine =
    diff.metadata.type === "deleted"
      ? ((diff as { firstDeletionLine?: number }).firstDeletionLine ?? 1)
      : ((diff as { firstAdditionLine?: number }).firstAdditionLine ?? 1);

  return (
    <div
      {...reviewTestIds.reviewFile(path)}
      data-thread-find-skip={skipFindHighlight ? "" : undefined}
      ref={assignDiffRef}
    >
      {createElement(UnifiedFileDiffView, {
        ...commentProps,
        key: open ? "open" : "closed",
        containerClassName: "codex-review-diff-card extension:rounded-lg",
        conversationId: conversationId ?? undefined,
        cwd:
          workspaceRoot == null ? undefined : workspaceRootToCwd(workspaceRoot),
        defaultOpen: open,
        displayPathOverride: fileModel.displayPath,
        diff,
        diffViewWrap,
        expandScope: "review",
        fullContentNextFallbackToDisk:
          reviewFilter === "unstaged" || reviewFilter === "last-turn",
        fullContentIgnoreWhitespace: ignoreWhitespace,
        headerEndContent:
          reviewFilter === "branch" ? (
            <Tooltip
              tooltipContent={
                isViewed
                  ? intl.formatMessage({
                      id: "codex.review.fileDiff.unviewed.tooltip",
                      defaultMessage: "Mark file as unviewed",
                      description:
                        "Tooltip for marking a changed review file as unviewed",
                    })
                  : intl.formatMessage({
                      id: "codex.review.fileDiff.viewed.tooltip",
                      defaultMessage: "Mark file as viewed",
                      description:
                        "Tooltip for marking a changed review file as viewed",
                    })
              }
            >
              <label className="relative flex cursor-interaction items-center">
                <Checkbox
                  checked={isViewed}
                  disabled={diffRevision == null}
                  onCheckedChange={
                    diffRevision == null
                      ? undefined
                      : (checked: boolean) => {
                          store.set(
                            viewedFileRevisionAtomFamily,
                            viewedKey,
                            checked ? diffRevision : null,
                          );
                        }
                  }
                />
                <span className="sr-only">
                  <FormattedMessage
                    id="codex.review.fileDiff.viewed"
                    defaultMessage="Viewed"
                    description="Label for marking a changed review file as viewed"
                  />
                </span>
              </label>
            </Tooltip>
          ) : undefined,
        headerEndContentOpenOnClick:
          diffRevision == null ? undefined : isViewed,
        headerVariant: "full-review",
        hostConfig,
        hunkActionsVariant: reviewFilter === "staged" ? "staged" : "unstaged",
        hunkSeparators: diff.metadata.additionLines ? "line-info" : "metadata",
        headerOpenAction: {
          ariaLabel: intl.formatMessage({
            id: "review.fileDiff.openInTab.ariaLabel",
            defaultMessage: "Open in",
            description:
              "Accessible label for opening a review file in an app tab",
          }),
          onClick: () => {
            openFileTab(store, fileModel.path, {
              hostId: hostConfig.id,
              line: openLine,
              resetTabState: true,
            });
          },
          tooltip: intl.formatMessage({
            id: "review.fileDiff.openInTab.tooltip",
            defaultMessage: "Open file in a tab",
            description:
              "Tooltip for opening a review file in an app tab instead of an external editor",
          }),
        },
        isLoading: !isUnmerged && fileModel.diffLoadStatus === "loading",
        fileActionsDisabled: !fileModel.canApplyPatchActions || isApplyingPatch,
        loadFullContent: !isUnmerged && fileModel.diff != null,
        onHunkAction: (action: unknown) =>
          startPatchAction(store, action as never),
        onLoadRetry: hasLoadError
          ? () => {
              retryReviewFileDiff(store, path);
            }
          : undefined,
        onPostRender,
        onToggleWrap: () => {
          if (!isCappedMode) store.set(reviewDiffWrapAtom, !wordWrap);
        },
        metrics: reviewDiffMetrics,
        openFilePathOverride: fileModel.path,
        richPreviewEnabled,
        roundedCorners: false,
        showFileActions: showGitActions,
        showHunkActions:
          showGitActions && fileModel.canApplyPatchActions && !isApplyingPatch,
        showLoadError: hasLoadError,
        stickyHeader: !isCappedMode,
        viewType: diffMode,
      })}
    </div>
  );
});
