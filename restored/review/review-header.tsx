// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Connected review toolbar header: wires review atoms to the source controls, diff option
// toolbar/menu, file-panel toggle and base-branch picker.
import { classNames } from "../utils/class-names";
import { useIntl } from "../vendor/react-intl";
import { Button } from "../ui/button";
import { Tooltip } from "../ui/tooltip-b";
import { JumpToFileButton } from "./jump-to-file-menu";
import { ReviewSourceControls } from "./review-source-controls";
import { BaseBranchPicker } from "./review-source-controls";
import { ReviewOptionsToolbar } from "./review-options-toolbar";
import { ReviewOptionsMenuCompact } from "./review-options-menu-compact";
import type { ReviewDiffControls } from "./review-options-menu-compact";
import {
  reviewDiffFilterAtom,
  setReviewDiffFilter,
  setReviewBaseBranchOverride,
  type ReviewDiffFilter,
} from "./review-diff-model";
import {
  useStore,
  useAtomValue,
  routeAtom,
  reviewGitMetadataQueryAtom,
  reviewCurrentBranchQueryAtom,
  reviewCwdAtom,
  reviewWorktreeInfoAtom,
  reviewHostConfigAtom,
  reviewDiffModeAtom,
  reviewExpandedAtom,
  reviewDiffWrapAtom,
  hideWhitespaceAtom,
  reviewRichPreviewEnabledAtom,
  reviewWordDiffsEnabledAtom,
  reviewLoadFullFilesEnabledAtom,
  reviewBaseBranchAtom,
  reviewCommitShaAtom,
  reviewDiffSourceAtom,
  reviewFileCountsAtom,
  reviewDiffMetricsAtom,
  reviewGitActionsAllowedAtom,
  reviewCanRefreshAtom,
  reviewSourceAtom,
  reviewBaseBranchQueryAtom,
  reviewFilesVisibleAtom,
  reviewBaseBranchOverrideKey,
  useReviewExpandedDiffs,
  resolveDefaultTargetBranch,
  getWorkspaceCwd,
  getHostBridge,
  setReviewFilesVisible,
  refetchReviewGitChanges,
  toastControllerAtom,
  GitActionsReviewToolbar,
  SidePanelIcon,
  SplitDiffModeIcon,
  UnifiedDiffModeIcon,
} from "../boundaries/onboarding-commons-externals.facade";

interface RouteStore {
  value: { routeKind: string; conversationId?: string | null };
  get(atom: unknown): any;
  set(atom: unknown, ...args: unknown[]): void;
}

interface ToolbarDiffControls extends ReviewDiffControls {
  diffMode: "unified" | "split";
  onSelectDiffMode: (side: "left" | "right") => void;
}

function DiffModeToggleButton({
  diffControls,
}: {
  diffControls: ToolbarDiffControls;
}) {
  const intl = useIntl();
  const isUnified = diffControls.diffMode === "unified";
  const label = isUnified
    ? intl.formatMessage({
        id: "codex.review.switchToSplit",
        defaultMessage: "Switch to split diff",
        description: "Button label to switch to split diff view",
      })
    : intl.formatMessage({
        id: "codex.review.switchToUnified",
        defaultMessage: "Switch to unified diff",
        description: "Button label to switch to unified diff view",
      });
  const handleClick = () =>
    diffControls.onSelectDiffMode(isUnified ? "right" : "left");
  const Icon = isUnified ? SplitDiffModeIcon : UnifiedDiffModeIcon;

  return (
    <Tooltip tooltipContent={label}>
      <Button
        aria-label={label}
        color="ghost"
        size="toolbar"
        uniform={true}
        onClick={handleClick}
      >
        <Icon className="icon-xs" />
      </Button>
    </Tooltip>
  );
}

export function ReviewHeader() {
  const store = useStore(routeAtom) as RouteStore;
  const intl = useIntl();

  const diffFilter = useAtomValue(reviewDiffFilterAtom);
  const gitMetadataQuery = useAtomValue(reviewGitMetadataQueryAtom);
  const currentBranchQuery = useAtomValue(reviewCurrentBranchQueryAtom);
  const cwdSource = useAtomValue(reviewCwdAtom);
  const conversationId =
    store.value.routeKind === "local-thread"
      ? (store.value.conversationId ?? null)
      : null;
  const resolvedCwd = cwdSource == null ? null : getWorkspaceCwd(cwdSource);
  const worktreeInfo = useAtomValue(reviewWorktreeInfoAtom);
  const hostConfig = useAtomValue(reviewHostConfigAtom);
  const diffMode = useAtomValue(reviewDiffModeAtom);
  const isReviewExpanded = useAtomValue(reviewExpandedAtom);
  const wrap = useAtomValue(reviewDiffWrapAtom);
  const hideWhitespace = useAtomValue(hideWhitespaceAtom);
  const richPreviewEnabled = useAtomValue(reviewRichPreviewEnabledAtom);
  const wordDiffsEnabled = useAtomValue(reviewWordDiffsEnabledAtom);
  const loadFullFilesEnabled = useAtomValue(reviewLoadFullFilesEnabledAtom);
  const { expandedDiffs, toggleExpandedDiffs } = useReviewExpandedDiffs();
  const baseBranchOverride = useAtomValue(reviewBaseBranchAtom);
  const commitSha = useAtomValue(reviewCommitShaAtom);
  const diffSource = useAtomValue(reviewDiffSourceAtom);
  const fileCounts = useAtomValue(reviewFileCountsAtom);
  const snapshotMetrics = useAtomValue(reviewDiffMetricsAtom);
  const gitActionsAllowed = useAtomValue(reviewGitActionsAllowedAtom);
  const canRefresh = useAtomValue(reviewCanRefreshAtom);
  const reviewSource = useAtomValue(reviewSourceAtom);
  const canCopyGitApply = gitActionsAllowed && diffSource != null;
  const currentBranch = currentBranchQuery.data ?? null;
  const baseBranchQuery = useAtomValue(reviewBaseBranchQueryAtom);
  const gitMetadata = gitMetadataQuery.data ?? null;
  const defaultTargetBranch = resolveDefaultTargetBranch(gitMetadata);
  const targetBranch = baseBranchOverride ?? defaultTargetBranch;
  const baseBranchOptions: string[] | undefined =
    baseBranchQuery.data?.branches.filter(
      (branch: string) => branch !== currentBranch,
    );
  const needsBaseBranchRow =
    !isReviewExpanded &&
    reviewSource !== "cloud" &&
    diffFilter === "branch" &&
    (targetBranch != null ||
      baseBranchQuery.isLoading ||
      baseBranchQuery.isError ||
      (baseBranchOptions != null && baseBranchOptions.length > 0));

  const handleSelectDiffMode = (side: "left" | "right") => {
    store.set(reviewDiffModeAtom, side === "left" ? "unified" : "split");
  };
  const handleToggleWrap = () => {
    store.set(reviewDiffWrapAtom, !wrap);
  };
  const handleToggleHideWhitespace = () => {
    store.set(hideWhitespaceAtom, !hideWhitespace);
  };
  const handleToggleRichPreview = () => {
    store.set(reviewRichPreviewEnabledAtom, !richPreviewEnabled);
  };
  const handleToggleWordDiffs = () => {
    store.set(reviewWordDiffsEnabledAtom, !wordDiffsEnabled);
  };
  const handleToggleLoadFullFiles = () => {
    store.set(reviewLoadFullFilesEnabledAtom, !loadFullFilesEnabled);
  };

  const diffControls: ToolbarDiffControls = {
    diffMode,
    onSelectDiffMode: handleSelectDiffMode,
    wrap,
    onToggleWrap: handleToggleWrap,
    hideWhitespace,
    onToggleHideWhitespace: handleToggleHideWhitespace,
    expanded: expandedDiffs,
    onToggleExpanded: toggleExpandedDiffs,
    richPreviewEnabled,
    onToggleRichPreview: handleToggleRichPreview,
    wordDiffsEnabled,
    onToggleWordDiffs: handleToggleWordDiffs,
    loadFullFilesEnabled,
    onToggleLoadFullFiles: handleToggleLoadFullFiles,
  };

  const handleSelectBaseBranch = (branch: string) => {
    setReviewBaseBranchOverride(
      store as never,
      reviewBaseBranchOverrideKey(store.value),
      branch,
    );
  };

  const handleCopyGitApplyCommand = () => {
    if (!gitActionsAllowed || cwdSource == null || diffSource == null) return;
    void (async () => {
      const response = await getHostBridge("git").request({
        method: "review-patch",
        params: {
          cwd: getWorkspaceCwd(cwdSource),
          source: diffSource,
          operationSource: "review_model",
          ...(diffSource === "branch" && baseBranchOverride != null
            ? { baseBranch: baseBranchOverride }
            : {}),
          ...(diffSource === "commit" && commitSha != null
            ? { commitSha }
            : {}),
          hostConfig,
        },
      });
      if (response.diff.type === "success") {
        await navigator.clipboard.writeText(
          ` (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF'
${response.diff.unifiedDiff} \nEOF
)`,
        );
        store.get(toastControllerAtom).success(
          intl.formatMessage({
            id: "codex.review.copyGitApplyCommand.toast",
            defaultMessage: "Copied git apply command to the clipboard",
            description: "Toast shown after copying a git apply command",
          }),
        );
      }
    })();
  };

  const handleRefreshGitQueries = () => {
    refetchReviewGitChanges(store);
  };

  const filesVisible = useAtomValue(reviewFilesVisibleAtom);
  const filesToggleLabel = filesVisible
    ? intl.formatMessage({
        id: "codex.review.header.hideFiles",
        defaultMessage: "Hide files",
        description: "Tooltip for the review header button that hides files",
      })
    : intl.formatMessage({
        id: "codex.review.header.showFiles",
        defaultMessage: "Show files",
        description: "Tooltip for the review header button that shows files",
      });

  const headerClassName = classNames(
    "grid [container-name:review-header] [container-type:inline-size] grid-cols-[minmax(0,1fr)_auto] gap-1 border-b border-token-border-default px-2 text-token-description-foreground",
    needsBaseBranchRow
      ? "min-h-[68px] items-start py-1"
      : "h-toolbar-pane items-center",
  );

  const sourceDiffFilter: ReviewDiffFilter | undefined =
    reviewSource === "cloud" ? undefined : diffFilter;
  const handleRefetchBaseBranchOptions = () => {
    baseBranchQuery.refetch();
  };
  const handleSelectDiffFilter =
    reviewSource === "cloud"
      ? undefined
      : (filter: ReviewDiffFilter) =>
          setReviewDiffFilter(store as never, filter);

  const sourceControls = (
    <ReviewSourceControls
      availableDiffFilters={undefined}
      snapshotMetrics={snapshotMetrics}
      baseBranchOptions={baseBranchOptions}
      targetBranch={targetBranch}
      currentBranch={currentBranch}
      defaultTargetBranch={defaultTargetBranch}
      diffFilter={sourceDiffFilter}
      isBaseBranchOptionsError={baseBranchQuery.isError}
      isBaseBranchOptionsLoading={baseBranchQuery.isLoading}
      isReviewExpanded={isReviewExpanded}
      onRefetchBaseBranchOptions={handleRefetchBaseBranchOptions}
      onSelectBaseBranch={handleSelectBaseBranch}
      onSelectDiffFilter={handleSelectDiffFilter}
      reviewSource={reviewSource}
      stagedFileCount={fileCounts.stagedFileCount}
      unstagedFileCount={fileCounts.unstagedFileCount}
    />
  );

  const optionControls = isReviewExpanded ? (
    <ReviewOptionsToolbar
      copyGitApplyCommandDisabled={!canCopyGitApply}
      diffControls={diffControls}
      onClickCopyGitApplyCommand={handleCopyGitApplyCommand}
      onRefreshGitQueries={handleRefreshGitQueries}
      refreshGitQueriesDisabled={!canRefresh}
      showCopyGitApplyCommand={true}
      showRefreshGitQueries={reviewSource !== "cloud"}
    />
  ) : (
    <>
      <ReviewOptionsMenuCompact
        copyGitApplyCommandDisabled={!canCopyGitApply}
        diffControls={diffControls}
        onClickCopyGitApplyCommand={handleCopyGitApplyCommand}
        onRefreshGitQueries={handleRefreshGitQueries}
        refreshGitQueriesDisabled={!canRefresh}
        showCopyGitApplyCommand={true}
        showRefreshGitQueries={reviewSource !== "cloud"}
      />
      <JumpToFileButton />
      <DiffModeToggleButton diffControls={diffControls} />
    </>
  );

  const handleToggleFiles = () => {
    setReviewFilesVisible(store, !filesVisible);
  };
  const filesToggleButton = (
    <Tooltip tooltipContent={filesToggleLabel} delayOpen={true}>
      <Button
        key="open-files-button"
        aria-label={filesToggleLabel}
        color={filesVisible ? "secondary" : "ghost"}
        size="toolbar"
        uniform={true}
        onClick={handleToggleFiles}
      >
        <SidePanelIcon className="icon-sm" />
      </Button>
    </Tooltip>
  );

  const sideToolbar = resolvedCwd && (
    <GitActionsReviewToolbar
      key={resolvedCwd}
      conversationId={conversationId}
      cwd={resolvedCwd}
      codexWorktree={worktreeInfo.isCodexWorktree}
      surface="review-toolbar"
      reviewToolbarCompact={!isReviewExpanded}
    />
  );

  const rightSection = (
    <div className="flex min-w-0 items-center gap-1.5">
      {optionControls}
      {filesToggleButton}
      {sideToolbar}
    </div>
  );

  const baseBranchRow = needsBaseBranchRow ? (
    <BaseBranchPicker
      baseBranchOptions={baseBranchOptions}
      className="col-span-2 w-full pr-1.5 pl-[2px]"
      currentBranch={currentBranch ?? "HEAD"}
      defaultTargetBranch={defaultTargetBranch}
      isBaseBranchOptionsError={baseBranchQuery.isError}
      isBaseBranchOptionsLoading={baseBranchQuery.isLoading}
      onRefetchBaseBranchOptions={() => {
        baseBranchQuery.refetch();
      }}
      onSelectBaseBranch={handleSelectBaseBranch}
      targetBranch={targetBranch}
    />
  ) : null;

  return (
    <div className={headerClassName}>
      {sourceControls}
      {rightSection}
      {baseBranchRow}
    </div>
  );
}
