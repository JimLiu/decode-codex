// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Renders the aggregated diff for a Codex turn: an in-progress "N files changed"
// affordance and the completed turn-diff card with per-file rows, undo/reapply, and
// review entry points.

import type { KeyboardEvent, MouseEvent, ReactNode } from "react";
import { useMemo, useRef, useState } from "react";
import {
  defineMessages,
  FormattedMessage,
  useIntl,
} from "../../vendor/react-intl";
import { classNames } from "../../utils/class-names";
import {
  exceedsInlineRenderBudget,
  isParsedFileDiffTooLarge,
  type ParsedFileDiff,
  summarizeTurnDiffStats,
  summarizeUnifiedDiff,
} from "./turn-diff-summaries";
import { DiffPreviewTooltip } from "./diff-preview-tooltip";
import {
  type PatchActionFailure,
  PatchFailureDialog,
} from "./patch-failure-dialog";
import {
  appStore,
  buildOpenFileContextMenuItems,
  buildScopedDiff,
  Button,
  ChevronDownIcon,
  ContextMenu,
  conversationHostIdAtom,
  DiffFileIcon,
  DiffLineStats,
  dismissTooltips,
  dispatchProductEvent,
  gitDirOriginsQueryAtom,
  joinPath,
  LinkArrowIcon,
  motion,
  nodePath,
  normalizePath,
  notifyDiffApplied,
  openFileInEditor,
  openReviewView,
  parseUnifiedDiff,
  PlatformVisibility,
  RedoIcon,
  refreshGitStatus,
  relativePath,
  requireConversationId,
  ResourceCardHeaderRow,
  resolveHostConfig,
  scrollElementIntoActivityView,
  ThreadResourceCard,
  toastControllerAtom,
  turnDiffActionsDisabledAtom,
  turnDiffRevertProductEvent,
  UndoIcon,
  uniq,
  useActivityScrollContainer,
  useAtomFamilyValue,
  useAtomValue,
  useHostRequest,
  useStore,
  basename,
} from "../../boundaries/onboarding-commons-externals.facade";

const MAX_VISIBLE_FILES = 3;

const IN_PROGRESS_TRANSITION = { duration: 0.15, ease: "easeOut" } as const;

const messages = defineMessages({
  filesChanged: {
    id: "codex.unifiedDiff.filesChanged",
    defaultMessage:
      "{fileCount, plural, one {# file changed} other {# files changed}}",
    description: "Label for the number of files changed in a Codex task",
  },
  linesAdded: {
    id: "codex.unifiedDiff.linesAdded",
    defaultMessage: "+{linesAdded}",
    description: "Label for the number of lines added in a Codex task",
  },
  linesDeleted: {
    id: "codex.unifiedDiff.linesDeleted",
    defaultMessage: "-{linesDeleted}",
    description: "Label for the number of lines deleted in a Codex task",
  },
  review: {
    id: "codex.unifiedDiff.viewDiffTooltip",
    defaultMessage: "Review",
    description:
      "Label for button that views the diff of a Codex task in an editor view",
  },
});

export type PatchAction = "undo" | "reapply";

export interface TurnDiffPatchBatch {
  cwd?: string | null;
  changes: unknown;
}

export interface TurnDiffItem {
  unifiedDiff: string;
  cwd?: string | null;
  patchBatches?: TurnDiffPatchBatch[] | null;
}

export interface TurnDiffProps {
  isInProgress: boolean;
  item: TurnDiffItem;
  showLeadingSeparator?: boolean;
  showRevertButton?: boolean;
  deferOffscreenRendering?: boolean;
  conversationId: string | null;
  cwd: string | null;
  hostId?: string;
}

export function TurnDiff({
  isInProgress,
  item,
  showLeadingSeparator = false,
  showRevertButton = true,
  deferOffscreenRendering = false,
  conversationId,
  cwd,
  hostId,
}: TurnDiffProps) {
  if (!conversationId) return null;
  const resolvedCwd = item.cwd ?? cwd ?? null;
  if (isInProgress) {
    return (
      <TurnDiffInProgress
        item={item}
        showLeadingSeparator={showLeadingSeparator}
        conversationId={conversationId}
        cwd={resolvedCwd}
      />
    );
  }
  return (
    <TurnDiffCompleted
      item={item}
      showRevertButton={showRevertButton}
      deferOffscreenRendering={deferOffscreenRendering}
      conversationId={conversationId}
      cwd={resolvedCwd}
      hostId={hostId}
    />
  );
}

interface TurnDiffTelemetrySpanProps {
  name: string;
  attributes: Record<string, string>;
  children: ReactNode;
}

function TurnDiffTelemetrySpan({ children }: TurnDiffTelemetrySpanProps) {
  return <>{children}</>;
}

interface TurnDiffInProgressProps {
  item: TurnDiffItem;
  showLeadingSeparator: boolean;
  conversationId: string;
  cwd: string | null;
}

function TurnDiffInProgress({
  item,
  showLeadingSeparator,
  conversationId,
}: TurnDiffInProgressProps) {
  const store = useStore(appStore);
  const intl = useIntl();
  const parsedFiles = parseUnifiedDiff(item.unifiedDiff) as ParsedFileDiff[];
  const stats = summarizeTurnDiffStats(parsedFiles);
  if (!stats.hasChanges) return null;
  const { fileCount, linesAdded, linesDeleted } = stats;

  const openReview = () => {
    openReviewView(store, {
      conversationId: requireConversationId(conversationId),
    });
  };

  return (
    <TurnDiffTelemetrySpan
      name="TurnDiffContent"
      attributes={{ "codex.turn_diff.state": "in_progress" }}
    >
      <motion.div
        className="flex min-w-0 items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={IN_PROGRESS_TRANSITION}
      >
        {showLeadingSeparator ? (
          <span aria-hidden={true} className="text-token-text-secondary">
            <FormattedMessage
              id="codex.ui.bulletSeparator"
              defaultMessage="·"
              description="Middle dot separator used between inline items"
            />
          </span>
        ) : null}
        <button
          type="button"
          className="text-size-chat flex min-w-0 cursor-interaction items-center gap-1 rounded-sm text-token-text-secondary hover:text-token-foreground focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:outline-none"
          onClick={openReview}
        >
          <span className="block min-w-0 truncate">
            {intl.formatMessage(messages.filesChanged, { fileCount })}
          </span>
          <DiffLineStats
            className="text-size-chat-sm"
            linesAdded={linesAdded}
            linesRemoved={linesDeleted}
          />
        </button>
      </motion.div>
    </TurnDiffTelemetrySpan>
  );
}

interface TurnDiffCompletedProps {
  item: TurnDiffItem;
  showRevertButton: boolean;
  deferOffscreenRendering: boolean;
  conversationId: string;
  cwd: string | null;
  hostId?: string;
}

interface LastPatchAction {
  action: PatchAction;
  unifiedDiff: string;
}

function TurnDiffCompleted({
  item,
  showRevertButton,
  deferOffscreenRendering,
  conversationId,
  cwd,
  hostId,
}: TurnDiffCompletedProps) {
  const store = useStore(appStore);
  const intl = useIntl();
  const diffActionsDisabled = useAtomValue(turnDiffActionsDisabledAtom);
  const scrollContainer = useActivityScrollContainer();
  const conversationHostId = useAtomFamilyValue(
    conversationHostIdAtom,
    requireConversationId(conversationId),
  );
  const resolvedHostId = hostId ?? conversationHostId;
  const hostConfig = resolveHostConfig(resolvedHostId);

  const requestedDirs = useMemo(
    () =>
      item.patchBatches == null
        ? []
        : uniq(
            item.patchBatches
              .map((batch) => batch.cwd ?? cwd)
              .filter((dir): dir is string => dir != null),
          ),
    [item.patchBatches, cwd],
  );
  const { data: gitDirOrigins, isFetching } = useAtomFamilyValue(
    gitDirOriginsQueryAtom,
    {
      params: { dirs: requestedDirs, hostId: hostConfig.id },
      source: "thread_diff",
    },
  );

  const [lastPatchAction, setLastPatchAction] =
    useState<LastPatchAction | null>(null);
  const [patchFailure, setPatchFailure] = useState<PatchActionFailure | null>(
    null,
  );
  const [showAllFiles, setShowAllFiles] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const scrollHeaderIntoView = () => {
    if (headerRef.current != null) {
      scrollElementIntoActivityView(headerRef.current, scrollContainer);
    }
  };
  const applyPatch = useHostRequest("apply-patch", { source: "thread_diff" });

  const projectScopedDiffs: {
    cwd: string;
    diff: string;
    gitRoot: string | null;
  }[] = [];
  for (const batch of item.patchBatches ?? []) {
    const batchCwd = batch.cwd ?? cwd;
    const gitRoot =
      gitDirOrigins?.origins.find(
        (origin: { dir: string }) => origin.dir === batchCwd,
      )?.root ?? null;
    const scopedDiff = buildScopedDiff(batch.changes, batchCwd, gitRoot);
    if (batchCwd == null || scopedDiff.length === 0) continue;
    projectScopedDiffs.push({ cwd: batchCwd, diff: scopedDiff, gitRoot });
  }
  if (
    projectScopedDiffs.length === 0 &&
    item.patchBatches == null &&
    item.unifiedDiff.length > 0 &&
    cwd != null
  ) {
    projectScopedDiffs.push({ cwd, diff: item.unifiedDiff, gitRoot: null });
  }

  const summary = useMemo(
    () => summarizeUnifiedDiff(item.unifiedDiff),
    [item.unifiedDiff],
  );
  const { fileCount, linesAdded, linesDeleted } = summary;
  const hasSmallFiles = summary.files.some(
    (file) =>
      !exceedsInlineRenderBudget(
        file.renderedLineEstimate,
        file.linesAdded,
        file.linesDeleted,
      ),
  );
  const parsedFiles = useMemo(
    () =>
      hasSmallFiles
        ? (parseUnifiedDiff(item.unifiedDiff) as ParsedFileDiff[])
        : [],
    [hasSmallFiles, item.unifiedDiff],
  );
  const singleFile = fileCount === 1 ? summary.files[0] : undefined;
  const singleParsedFile = singleFile == null ? undefined : parsedFiles[0];
  const previewableSingleFile =
    singleParsedFile == null || isParsedFileDiffTooLarge(singleParsedFile)
      ? undefined
      : singleParsedFile;
  const singleDisplayPath =
    singleFile == null
      ? ""
      : cwd == null
        ? singleFile.path
        : relativePath(singleFile.path, cwd);
  const title =
    singleFile == null
      ? intl.formatMessage(
          {
            id: "codex.unifiedDiff.editedFiles",
            defaultMessage:
              "{fileCount, plural, one {Edited a file} other {Edited # files}}",
            description:
              "Completed turn diff title shown when multiple files were edited",
          },
          { fileCount },
        )
      : intl.formatMessage(
          {
            id: "codex.unifiedDiff.editedFile",
            defaultMessage: "Edited {filename}",
            description:
              "Completed turn diff title shown when exactly one file was edited",
          },
          { filename: basename(singleFile.path) },
        );
  const visibleFiles = showAllFiles
    ? summary.files
    : summary.files.slice(0, MAX_VISIBLE_FILES);
  const hiddenFileCount = summary.files.length - visibleFiles.length;
  const hasMultipleFiles = fileCount > 1;

  if (!summary.hasChanges) return null;

  const canRevert =
    projectScopedDiffs.length > 0 && (item.patchBatches == null || !isFetching);
  let revertAction: PatchAction = "undo";
  if (lastPatchAction?.unifiedDiff === item.unifiedDiff) {
    revertAction = lastPatchAction.action === "undo" ? "reapply" : "undo";
  }

  const runPatchAction = async (action: PatchAction, event: MouseEvent) => {
    event.stopPropagation();
    if (
      applyPatch.isPending ||
      projectScopedDiffs.length === 0 ||
      (item.patchBatches != null && isFetching)
    ) {
      return;
    }
    if (action === "undo") {
      dispatchProductEvent(store, turnDiffRevertProductEvent, {
        source: "turn_diff",
      });
    }
    const orderedDiffs =
      action === "undo"
        ? [...projectScopedDiffs].reverse()
        : projectScopedDiffs;
    let didApply = false;
    try {
      for (const { cwd: diffCwd, diff } of orderedDiffs) {
        const result = await applyPatch.mutateAsync({
          diff,
          cwd: diffCwd,
          hostConfig,
          revert: action === "undo",
        });
        if (result.status !== "success") {
          if (
            result.status === "partial-success" ||
            result.appliedPaths.length > 0
          ) {
            didApply = true;
          }
          setPatchFailure({ action, result });
          return;
        }
        didApply = true;
      }
      setPatchFailure(null);
      setLastPatchAction({ action, unifiedDiff: item.unifiedDiff });
      store.get(toastControllerAtom).success(
        intl.formatMessage(
          action === "undo"
            ? {
                id: "codex.unifiedDiff.revertPatchSuccess",
                defaultMessage: "Changes reverted",
                description: "Toast shown when reverting a diff succeeds",
              }
            : {
                id: "codex.unifiedDiff.reapplyPatchSuccess",
                defaultMessage: "Changes reapplied",
                description: "Toast shown when reapplying a diff succeeds",
              },
        ),
        { id: "turnDiffPatchAction" },
      );
    } catch {
      store.get(toastControllerAtom).danger(
        intl.formatMessage(
          action === "undo"
            ? {
                id: "codex.unifiedDiff.revertPatchError",
                defaultMessage: "Failed to revert changes",
                description: "Toast shown when reverting a diff fails",
              }
            : {
                id: "codex.unifiedDiff.reapplyPatchError",
                defaultMessage: "Failed to reapply changes",
                description: "Toast shown when reapplying a diff fails",
              },
        ),
        { id: "turnDiffPatchAction" },
      );
    } finally {
      Promise.all(
        projectScopedDiffs.map(({ cwd: diffCwd }) =>
          refreshGitStatus({
            cwd: diffCwd,
            hostConfig,
            operationSource: "thread_diff",
            queryClient: store.queryClient,
          }),
        ),
      );
      if (didApply) notifyDiffApplied();
    }
  };

  const resolveAbsolutePath = (path: string) => {
    const batch = projectScopedDiffs.find(({ diff }) =>
      summarizeUnifiedDiff(diff).files.some((file) => file.path === path),
    );
    const root = batch?.gitRoot ?? batch?.cwd ?? cwd;
    return root == null ? path : joinPath(root, path);
  };
  const openReview = (path: string | undefined) => {
    dismissTooltips();
    openReviewView(store, {
      conversationId: requireConversationId(conversationId),
      path: path == null ? undefined : resolveAbsolutePath(path),
    });
  };
  const openFileInSidePanel = (path: string) => {
    dismissTooltips();
    openFileInEditor({
      cwd,
      hostConfig,
      hostId: resolvedHostId,
      modifiedClick: true,
      openInSidePanel: true,
      path: resolveAbsolutePath(path),
      scope: store,
    });
  };
  const openFileFromRow = (path: string, event: MouseEvent | KeyboardEvent) => {
    if (event.metaKey || event.ctrlKey) {
      openFileInSidePanel(path);
      return;
    }
    openReview(path);
  };

  const header = (
    <ThreadResourceCard className="mb-2 text-base [--turn-diff-row-padding-y:0.25rem]">
      <div
        ref={headerRef}
        className="group/turn-diff-header relative focus-within:[&_.turn-diff-default-subtitle]:hidden hover:[&_.turn-diff-default-subtitle]:hidden focus-within:[&_.turn-diff-hover-subtitle]:inline-flex hover:[&_.turn-diff-hover-subtitle]:inline-flex"
      >
        <PlatformVisibility
          chromeExtension={true}
          electron={true}
          extension={true}
        >
          <ReviewChangesOverlayButton
            onClick={() => openReview(singleFile?.path)}
          />
        </PlatformVisibility>
        <ResourceCardHeaderRow
          className="pointer-events-none relative z-10"
          icon={
            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-token-bg-secondary text-token-text-secondary">
              <DiffFileIcon className="size-6" />
            </span>
          }
          title={title}
          subtitle={
            <>
              <span className="turn-diff-default-subtitle inline-flex">
                <DiffLineStats
                  className="text-size-chat-sm"
                  linesAdded={linesAdded}
                  linesRemoved={linesDeleted}
                />
              </span>
              <span className="turn-diff-hover-subtitle hidden items-center gap-1">
                <FormattedMessage
                  id="codex.unifiedDiff.reviewChangesHover"
                  defaultMessage="Review changes"
                  description="Hover subtitle for opening the review view from a completed turn diff card"
                />
                <LinkArrowIcon aria-hidden={true} className="icon-2xs" />
              </span>
            </>
          }
          trailing={
            <div className="pointer-events-auto flex items-center gap-2">
              {showRevertButton ? (
                <Button
                  color="ghostActive"
                  disabled={!canRevert || applyPatch.isPending}
                  onClick={(event: MouseEvent) => {
                    runPatchAction(revertAction, event);
                  }}
                  size="toolbar"
                >
                  {revertAction === "undo" ? (
                    <FormattedMessage
                      id="codex.unifiedDiff.revertChangesTooltip"
                      defaultMessage="Undo"
                      description="Label for button that reverts the diff in a Codex task"
                    />
                  ) : (
                    <FormattedMessage
                      id="codex.unifiedDiff.reapplyChangesTooltip"
                      defaultMessage="Reapply"
                      description="Label for button that reapplies the diff in a Codex task"
                    />
                  )}
                  {revertAction === "undo" ? (
                    <UndoIcon className="icon-2xs" />
                  ) : (
                    <RedoIcon className="icon-2xs" />
                  )}
                </Button>
              ) : null}
              <PlatformVisibility
                chromeExtension={true}
                electron={true}
                extension={true}
              >
                <ReviewButton
                  onClick={(event: MouseEvent) => {
                    event.stopPropagation();
                    openReview(singleFile?.path);
                  }}
                />
              </PlatformVisibility>
            </div>
          }
        />
      </div>
      {hasMultipleFiles ? (
        <div className="flex flex-col border-t border-token-border [--codex-diffs-header-padding-x:var(--thread-resource-card-row-padding-x)] [--codex-diffs-header-padding-y:var(--turn-diff-row-padding-y)] [--codex-diffs-surface-override:color-mix(in_oklab,var(--color-token-dropdown-background)_50%,transparent)] extension:[--codex-diffs-surface-override:color-mix(in_oklab,var(--color-token-input-background)_50%,transparent)]">
          {visibleFiles.map((file, index) => {
            const parsed = parsedFiles[index];
            const displayPath =
              cwd == null ? file.path : relativePath(file.path, cwd);
            return parsed == null || isParsedFileDiffTooLarge(parsed) ? (
              <LargeFileDiffRow
                key={`${file.path}:${index}`}
                deferOffscreenRendering={deferOffscreenRendering}
                displayPath={displayPath}
                cwd={cwd}
                hostId={resolvedHostId}
                linesAdded={file.linesAdded}
                linesRemoved={file.linesDeleted}
                onOpen={(event) => {
                  openFileFromRow(file.path, event);
                }}
                path={file.path}
              />
            ) : (
              <div
                key={`${parsed.metadata.cacheKey ?? parsed.metadata.name}:${index}`}
                className={classNames(
                  deferOffscreenRendering && "thread-diff-virtualized",
                )}
              >
                <FileDiffRow
                  diff={parsed}
                  displayPath={displayPath}
                  cwd={cwd}
                  hostId={resolvedHostId}
                  linesAdded={file.linesAdded}
                  linesRemoved={file.linesDeleted}
                  disabled={diffActionsDisabled}
                  onOpen={(event) => {
                    openFileFromRow(file.path, event);
                  }}
                  path={file.path}
                />
              </div>
            );
          })}
          {hiddenFileCount > 0 ? (
            <ShowMoreFilesButton
              isExpanded={false}
              onClick={() => {
                scrollHeaderIntoView();
                setShowAllFiles(true);
              }}
            >
              <FormattedMessage
                id="codex.unifiedDiff.showMoreFiles"
                defaultMessage="{count, plural, one {Show # more file} other {Show # more files}}"
                description="Button label that expands hidden changed file rows in a completed turn diff"
                values={{ count: hiddenFileCount }}
              />
            </ShowMoreFilesButton>
          ) : showAllFiles && summary.files.length > MAX_VISIBLE_FILES ? (
            <ShowMoreFilesButton
              isExpanded={true}
              onClick={() => {
                scrollHeaderIntoView();
                setShowAllFiles(false);
              }}
            >
              <FormattedMessage
                id="codex.unifiedDiff.collapseFiles"
                defaultMessage="Collapse files"
                description="Button label that collapses expanded changed file rows in a completed turn diff"
              />
            </ShowMoreFilesButton>
          ) : null}
        </div>
      ) : null}
    </ThreadResourceCard>
  );

  return (
    <TurnDiffTelemetrySpan
      name="TurnDiffContent"
      attributes={{ "codex.turn_diff.state": "completed" }}
    >
      {previewableSingleFile != null && singleFile != null ? (
        <DiffPreviewTooltip
          diff={previewableSingleFile}
          disabled={diffActionsDisabled}
          displayPath={singleDisplayPath}
          linesAdded={singleFile.linesAdded}
          linesRemoved={singleFile.linesDeleted}
          onOpen={(event) => {
            openFileFromRow(singleFile.path, event);
          }}
        >
          {header}
        </DiffPreviewTooltip>
      ) : (
        header
      )}
      <PatchFailureDialog
        open={patchFailure != null}
        cwd={cwd}
        hostId={resolvedHostId}
        onOpenChange={(open) => {
          if (!open) setPatchFailure(null);
        }}
        failure={patchFailure}
      />
    </TurnDiffTelemetrySpan>
  );
}

function ReviewButton({ onClick }: { onClick: (event: MouseEvent) => void }) {
  return (
    <Button color="outline" onClick={onClick} size="toolbar">
      <FormattedMessage {...messages.review} />
    </Button>
  );
}

function ReviewChangesOverlayButton({
  onClick,
}: {
  onClick: (event: MouseEvent) => void;
}) {
  const intl = useIntl();
  const label = intl.formatMessage({
    id: "codex.unifiedDiff.reviewChangedFiles",
    defaultMessage: "Review changed files",
    description:
      "Accessible label for opening the review view from a completed turn diff card",
  });
  return (
    <button
      aria-label={label}
      className="absolute inset-0 cursor-interaction bg-transparent group-hover/turn-diff-header:bg-token-list-hover-background/30 focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:outline-none focus-visible:ring-inset"
      onClick={onClick}
      type="button"
    />
  );
}

interface ShowMoreFilesButtonProps {
  children: ReactNode;
  isExpanded: boolean;
  onClick: () => void;
}

function ShowMoreFilesButton({
  children,
  isExpanded,
  onClick,
}: ShowMoreFilesButtonProps) {
  return (
    <button
      type="button"
      aria-expanded={isExpanded}
      className="text-size-chat flex h-9 w-full cursor-interaction items-center px-[var(--thread-resource-card-row-padding-x)] py-[var(--turn-diff-row-padding-y)] text-left text-token-text-primary hover:bg-token-list-hover-background/30 focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:outline-none focus-visible:ring-inset"
      onClick={onClick}
    >
      <span className="inline-flex min-w-0 items-center gap-2">
        <span className="truncate">{children}</span>
        <ChevronDownIcon
          className={classNames("icon-2xs", isExpanded && "rotate-180")}
        />
      </span>
    </button>
  );
}

interface LargeFileDiffRowProps {
  cwd: string | null;
  deferOffscreenRendering: boolean;
  displayPath: string;
  hostId: string;
  linesAdded: number;
  linesRemoved: number;
  onOpen: (event: MouseEvent | KeyboardEvent) => void;
  path: string;
}

function LargeFileDiffRow({
  cwd,
  deferOffscreenRendering,
  displayPath,
  hostId,
  linesAdded,
  linesRemoved,
  onOpen,
  path,
}: LargeFileDiffRowProps) {
  return (
    <div
      className={classNames(
        deferOffscreenRendering && "thread-diff-virtualized",
      )}
    >
      <FileOpenContextMenu cwd={cwd} hostId={hostId} path={path}>
        <button
          className="text-size-chat flex h-9 w-full cursor-interaction items-center gap-2 bg-token-main-surface-primary/70 px-[var(--thread-resource-card-row-padding-x)] py-[var(--turn-diff-row-padding-y)] text-left hover:bg-token-list-hover-background/60 focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:outline-none focus-visible:ring-inset extension:bg-token-input-background/70 extension:hover:bg-token-list-hover-background/60"
          onClick={onOpen}
          type="button"
        >
          <FilePathLabel displayPath={displayPath} />
          <DiffLineStats linesAdded={linesAdded} linesRemoved={linesRemoved} />
          <span className="text-token-description-foreground/80 max-[720px]:hidden">
            <FormattedMessage
              id="codex.unifiedDiff.inlineLargeFile"
              defaultMessage="Too large to render inline"
              description="Label shown when a file diff is too large to render inline in the thread view"
            />
          </span>
        </button>
      </FileOpenContextMenu>
    </div>
  );
}

interface FileDiffRowProps {
  cwd: string | null;
  disabled: boolean;
  diff: ParsedFileDiff;
  displayPath: string;
  hostId: string;
  linesAdded: number;
  linesRemoved: number;
  onOpen: (event: MouseEvent | KeyboardEvent) => void;
  path: string;
}

function FileDiffRow({
  cwd,
  disabled,
  diff,
  displayPath,
  hostId,
  linesAdded,
  linesRemoved,
  onOpen,
  path,
}: FileDiffRowProps) {
  return (
    <DiffPreviewTooltip
      disabled={disabled}
      diff={diff}
      displayPath={displayPath}
      linesAdded={linesAdded}
      linesRemoved={linesRemoved}
      onOpen={onOpen}
    >
      <FileOpenContextMenu cwd={cwd} hostId={hostId} path={path}>
        <button
          className="text-size-chat flex h-9 w-full cursor-interaction items-center gap-2 bg-token-main-surface-primary/70 px-[var(--thread-resource-card-row-padding-x)] py-[var(--turn-diff-row-padding-y)] text-left hover:bg-token-list-hover-background/60 focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:outline-none focus-visible:ring-inset extension:bg-token-input-background/70 extension:hover:bg-token-list-hover-background/60"
          onClick={onOpen}
          type="button"
        >
          <FilePathLabel displayPath={displayPath} />
          <DiffLineStats linesAdded={linesAdded} linesRemoved={linesRemoved} />
        </button>
      </FileOpenContextMenu>
    </DiffPreviewTooltip>
  );
}

function FilePathLabel({ displayPath }: { displayPath: string }) {
  const { base, dir } = nodePath.posix.parse(normalizePath(displayPath));
  return (
    <>
      <span className="sr-only">{displayPath}</span>
      <span aria-hidden={true} className="flex min-w-0 flex-1 items-center">
        {dir.length > 0 ? (
          <span className="min-w-0 truncate text-token-description-foreground">
            {dir}
            {nodePath.posix.sep}
          </span>
        ) : null}
        <span className="max-w-full shrink-0 truncate text-token-foreground">
          {base}
        </span>
      </span>
    </>
  );
}

interface FileOpenContextMenuProps {
  children: ReactNode;
  column?: number;
  cwd: string | null;
  endLine?: number;
  hostId: string;
  line?: number;
  openInSidePanel?: boolean;
  path: string;
}

function FileOpenContextMenu({
  children,
  column,
  cwd,
  endLine,
  hostId,
  line,
  openInSidePanel = false,
  path,
}: FileOpenContextMenuProps) {
  const store = useStore(appStore);
  const params = { column, cwd, endLine, hostId, line, openInSidePanel, path };
  return (
    <ContextMenu getItems={() => buildOpenFileContextMenuItems(store, params)}>
      {children}
    </ContextMenu>
  );
}
