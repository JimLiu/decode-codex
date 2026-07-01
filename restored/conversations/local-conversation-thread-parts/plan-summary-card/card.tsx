// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Plan summary card for local conversation turns, including the side-panel "Plan" tab opener.
import React, { useId, useState } from "react";
import { motion } from "framer-motion";
import { classNames } from "../../../utils/class-names";
import { copyToClipboard } from "../../../utils/copy-to-clipboard";
import { FormattedMessage, useIntl } from "../../../vendor/react-intl";
import { Button } from "../../../ui/button";
import {
  ChevronDownIcon,
  ConversationCard,
  ConversationMarkdown,
  CopyButton,
  DownloadIcon,
  ExternalLinkIcon,
  IconButtonTooltip,
  PlanIcon,
  PlatformGate,
  ShareConversationButton,
  ShimmerText,
  SidePanelIcon,
  SidePanelTabId,
  appAtomScope,
  codexAnalyticsConfigAtom,
  createScopedAtom,
  defaultLayoutTransition,
  hostMessageBridge,
  planSidePanelEnabledAtom,
  sidePanelTabManager,
  useAppStore,
  useAtomValue,
} from "../../../boundaries/onboarding-commons-externals.facade";
import type { AppStore } from "./side-panel";
import {
  openPlanSummarySidePanelTab,
  planSidePanelTabKeyAtom,
} from "./side-panel";
import type { PlanSummaryCardProps } from "./types";

const COLLAPSED_BODY_HEIGHT_PX = 320;
const PLAN_DOWNLOAD_FILENAME = "PLAN.md";

export function PlanSummaryCard(props: PlanSummaryCardProps) {
  if (props.showOpenButton === false) {
    return <PlanSummaryCardBase {...props} />;
  }
  return (
    <>
      <PlatformGate electron={true}>
        <PlanSummaryThreadPreview {...props} />
      </PlatformGate>
      <PlatformGate browser={true} chromeExtension={true} extension={true}>
        <PlanSummaryCardBase {...props} />
      </PlatformGate>
    </>
  );
}

function PlanSummaryThreadPreview(props: PlanSummaryCardProps) {
  const store = useAppStore() as AppStore;
  const activeTab = useAtomValue<{ tabId?: string } | null>(
    sidePanelTabManager.activeTab$,
  );
  const activeTabKey = useAtomValue<string | null>(planSidePanelTabKeyAtom);
  const isPlanSidePanelEnabled = useAtomValue<boolean>(
    planSidePanelEnabledAtom,
  );
  const generatedTurnId = useId();
  const turnId = props.turnId ?? generatedTurnId;
  const intl = useIntl();
  const title = intl.formatMessage({
    id: "localConversation.planSummary.title",
    defaultMessage: "Plan",
    description: "Title for the plan summary card header",
  });

  const openPlanTab = () => {
    openPlanSummarySidePanelTab(store, {
      content: props.item.content,
      conversationId: props.conversationId,
      cwd: props.cwd,
      hideCodeBlocks: props.hideCodeBlocks,
      key: turnId,
      title,
    });
  };

  const isOpenInSidePanel =
    props.item.completed &&
    isPlanSidePanelEnabled &&
    activeTabKey === turnId &&
    activeTab?.tabId === SidePanelTabId.PLAN;

  const toggleSidePanel = () => {
    if (isOpenInSidePanel) {
      sidePanelTabManager.closeTab(store, SidePanelTabId.PLAN);
      return;
    }
    openPlanTab();
  };

  const onOpenInSidePanel = props.item.completed ? toggleSidePanel : undefined;

  return (
    <PlanSummaryCardBase
      {...props}
      isThreadPreview={true}
      isThreadPreviewCollapsed={isOpenInSidePanel}
      onOpenInSidePanel={onOpenInSidePanel}
    />
  );
}

function PlanSummaryCardBase({
  item,
  conversationId,
  cwd,
  hideCodeBlocks = false,
  defaultCollapsed = false,
  hasArtifacts = false,
  reportEntityType = "thread",
  showOpenButton = true,
  turnId,
  isThreadPreview = false,
  isThreadPreviewCollapsed = false,
  onOpenInSidePanel,
}: PlanSummaryCardProps) {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  const intl = useIntl();
  const analyticsConfig = useAtomValue<{
    submitCodexAnalyticsEvent?: (event: unknown) => void;
  }>(codexAnalyticsConfigAtom);

  const canShowOpenButton = showOpenButton && item.completed;
  const hasCopyableContent = item.completed && item.content.trim().length > 0;
  const canReportAnalytics =
    turnId != null && analyticsConfig.submitCodexAnalyticsEvent != null;
  const showInlineShareButton = canReportAnalytics;

  const downloadLabel = intl.formatMessage({
    id: "localConversation.planSummary.download",
    defaultMessage: "Download plan",
    description: "Tooltip text for button that downloads the plan markdown",
  });
  const openInSidePanelLabel = intl.formatMessage({
    id: "localConversation.planSummary.openInSidePanel",
    defaultMessage: "Open plan in side panel",
    description:
      "Tooltip text for button that opens the plan in the side panel",
  });
  const closeSidePanelLabel = intl.formatMessage({
    id: "localConversation.planSummary.closeSidePanel",
    defaultMessage: "Close plan side panel",
    description:
      "Accessible label for the collapsed plan card that closes the plan side panel",
  });
  const collapseToggleLabel = isCollapsed
    ? intl.formatMessage({
        id: "localConversation.planSummary.expand",
        defaultMessage: "Expand plan summary",
        description:
          "Aria label for button that expands a collapsed plan summary",
      })
    : intl.formatMessage({
        id: "localConversation.planSummary.collapse",
        defaultMessage: "Collapse plan summary",
        description:
          "Aria label for button that collapses the plan summary content",
      });

  const openInNewWindow = () => {
    hostMessageBridge.dispatchMessage("show-plan-summary", {
      planContent: item.content,
      conversationId,
    });
  };

  const downloadPlan = () => {
    const blob = new Blob([item.content], {
      type: "text/markdown;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = PLAN_DOWNLOAD_FILENAME;
    anchor.click();
    URL.revokeObjectURL(url);
  };

  const handleCopy = (event: unknown) => {
    if (turnId != null) {
      analyticsConfig.submitCodexAnalyticsEvent?.({
        action: "copy",
        eventKind: "action",
        metadata: { surface: "plan_summary" },
        threadId: conversationId,
        turnId,
      });
    }
    copyToClipboard(item.content, event);
  };

  const previewCardClassName = isThreadPreview
    ? "max-h-[200px] cursor-default border border-token-border !bg-token-dropdown-background/50 select-none extension:!bg-token-input-background/50"
    : undefined;

  const previewClickOverlay =
    isThreadPreview &&
    !isThreadPreviewCollapsed &&
    onOpenInSidePanel != null ? (
      <button
        type="button"
        aria-hidden={true}
        tabIndex={-1}
        className="absolute inset-0 z-10 cursor-interaction"
        onClick={onOpenInSidePanel}
      />
    ) : null;

  const collapsedOpenOverlay =
    isThreadPreviewCollapsed && onOpenInSidePanel != null ? (
      <button
        type="button"
        aria-label={closeSidePanelLabel}
        className="absolute inset-0 z-10 flex cursor-interaction items-center justify-end px-3 text-token-text-tertiary focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:outline-none focus-visible:ring-inset"
        onClick={onOpenInSidePanel}
      >
        <span className="flex size-6 items-center justify-center rounded-full hover:bg-token-list-hover-background electron:rounded-md">
          <ExpandPlanPanelIcon className="icon-sm" aria-hidden={true} />
        </span>
      </button>
    ) : null;

  const titleClassName = classNames(
    "text-base leading-tight",
    isThreadPreview
      ? "inline-flex items-center gap-2 font-normal text-token-text-tertiary"
      : "font-semibold text-token-foreground",
  );
  const titleIcon = isThreadPreview ? (
    <PlanIcon className="icon-xs shrink-0" aria-hidden={true} />
  ) : null;
  const titleText = item.completed ? (
    <FormattedMessage
      id="localConversation.planSummary.title"
      defaultMessage="Plan"
      description="Title for the plan summary card header"
    />
  ) : (
    <ShimmerText>
      <FormattedMessage
        id="localConversation.planSummary.titleWriting"
        defaultMessage="Writing plan"
        description="Title for the plan summary card header while the plan is still being written"
      />
    </ShimmerText>
  );
  const header = (
    <span className={titleClassName}>
      {titleIcon}
      {titleText}
    </span>
  );

  const headerActionsClassName = classNames(
    "relative z-20 flex items-center gap-1",
    isThreadPreviewCollapsed && "hidden",
  );

  const openButtonGroup = canShowOpenButton ? (
    <PlatformGate extension={true}>
      <div className="flex items-center gap-1">
        {hasCopyableContent ? (
          <IconButtonTooltip tooltipContent={downloadLabel}>
            <Button
              color="ghost"
              size="icon"
              aria-label={downloadLabel}
              onClick={downloadPlan}
            >
              <DownloadIcon className="icon-2xs" />
            </Button>
          </IconButtonTooltip>
        ) : null}
        {hasCopyableContent ? (
          <CopyButton
            iconOnly={true}
            iconClassName="icon-2xs"
            onCopy={handleCopy}
          />
        ) : null}
        {false ? (
          <ShareConversationButton
            hasArtifacts={hasArtifacts}
            reportEntityType={reportEntityType}
            threadId={conversationId}
            turnId={turnId}
          />
        ) : null}
        <IconButtonTooltip
          tooltipContent={
            <FormattedMessage
              id="localConversation.planSummary.openInNewWindow.tooltip"
              defaultMessage="Open in new window"
              description="Tooltip text for button that opens the plan summary in a new window"
            />
          }
        >
          <Button className="gap-1" color="outline" onClick={openInNewWindow}>
            <FormattedMessage
              id="localConversation.planSummary.openInNewWindow"
              defaultMessage="Open"
              description="Button label to open the plan summary in a new window"
            />
            <ExternalLinkIcon className="icon-2xs" />
          </Button>
        </IconButtonTooltip>
      </div>
    </PlatformGate>
  ) : null;

  const downloadButton = hasCopyableContent ? (
    <IconButtonTooltip tooltipContent={downloadLabel}>
      <Button
        color="ghost"
        size="icon"
        aria-label={downloadLabel}
        onClick={downloadPlan}
      >
        <DownloadIcon className="icon-2xs" />
      </Button>
    </IconButtonTooltip>
  ) : null;

  const copyButton = hasCopyableContent ? (
    <CopyButton iconOnly={true} iconClassName="icon-2xs" onCopy={handleCopy} />
  ) : null;

  const shareButton = showInlineShareButton ? (
    <ShareConversationButton
      hasArtifacts={hasArtifacts}
      reportEntityType={reportEntityType}
      threadId={conversationId}
      turnId={turnId}
    />
  ) : null;

  const openSidePanelButton =
    onOpenInSidePanel == null ? null : (
      <IconButtonTooltip tooltipContent={openInSidePanelLabel}>
        <Button
          color="ghost"
          size="icon"
          aria-label={openInSidePanelLabel}
          onClick={onOpenInSidePanel}
        >
          <SidePanelIcon className="icon-2xs" />
        </Button>
      </IconButtonTooltip>
    );

  const collapseToggleButton = isThreadPreview ? null : (
    <IconButtonTooltip
      tooltipContent={
        isCollapsed ? (
          <FormattedMessage
            id="localConversation.planSummary.expandTooltip"
            defaultMessage="Expand"
            description="Tooltip text for button that expands a collapsed plan summary"
          />
        ) : (
          <FormattedMessage
            id="localConversation.planSummary.collapseTooltip"
            defaultMessage="Collapse"
            description="Tooltip text for button that collapses the plan summary content"
          />
        )
      }
    >
      <Button
        color="ghost"
        size="icon"
        aria-label={collapseToggleLabel}
        onClick={() => {
          setIsCollapsed(toggleCollapsed);
        }}
      >
        <ChevronDownIcon
          className={classNames(
            "icon-2xs transition-transform",
            isCollapsed ? "rotate-180" : "rotate-0",
          )}
        />
      </Button>
    </IconButtonTooltip>
  );

  const headerActions = (
    <div
      aria-hidden={isThreadPreviewCollapsed}
      className={headerActionsClassName}
    >
      {openButtonGroup}
      {downloadButton}
      {copyButton}
      {shareButton}
      {openSidePanelButton}
      {collapseToggleButton}
    </div>
  );

  const headerRow = (
    <div className="relative flex h-10 flex-wrap items-center justify-between gap-2 px-3 py-2">
      {collapsedOpenOverlay}
      {header}
      {headerActions}
    </div>
  );

  const bodyClassName = classNames(
    "relative overflow-hidden",
    isThreadPreview &&
      !isThreadPreviewCollapsed &&
      "[mask-image:linear-gradient(to_bottom,black_calc(100%_-_4rem),transparent)]",
  );
  const bodyAnimate = isThreadPreview
    ? {
        maxHeight: isThreadPreviewCollapsed ? 0 : 160,
        opacity: isThreadPreviewCollapsed ? 0 : 1,
      }
    : { height: isCollapsed ? COLLAPSED_BODY_HEIGHT_PX : "auto" };

  const isStreaming = !item.completed;
  const body = (
    <ConversationMarkdown
      markdown={item.content}
      conversationId={conversationId}
      hideCodeBlocks={hideCodeBlocks}
      isStreaming={isStreaming}
      cwd={cwd}
    />
  );
  const expandOverlay =
    !isThreadPreview && isCollapsed ? (
      <>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-token-input-background to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-3 flex justify-center">
          <Button
            className="pointer-events-auto"
            color="primary"
            onClick={() => {
              setIsCollapsed(false);
            }}
          >
            <FormattedMessage
              id="localConversation.planSummary.viewPlan"
              defaultMessage="Expand plan"
              description="Button label to expand a collapsed plan summary"
            />
          </Button>
        </div>
      </>
    ) : null;

  const bodyContainer = (
    <motion.div
      aria-hidden={isThreadPreviewCollapsed || undefined}
      className={bodyClassName}
      inert={isThreadPreviewCollapsed || undefined}
      initial={false}
      animate={bodyAnimate}
      transition={defaultLayoutTransition}
    >
      {body}
      {expandOverlay}
    </motion.div>
  );

  return (
    <ConversationCard className={previewCardClassName}>
      {previewClickOverlay}
      {headerRow}
      {bodyContainer}
    </ConversationCard>
  );
}

function toggleCollapsed(collapsed: boolean): boolean {
  return !collapsed;
}

function ExpandPlanPanelIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M7.33496 16V12.665H4C3.63273 12.665 3.33496 12.3673 3.33496 12C3.33496 11.6327 3.63273 11.335 4 11.335H8C8.36727 11.335 8.66504 11.6327 8.66504 12V16C8.66504 16.3673 8.36727 16.665 8 16.665C7.63273 16.665 7.33496 16.3673 7.33496 16ZM11.335 4C11.335 3.63273 11.6327 3.33496 12 3.33496C12.3673 3.33496 12.665 3.63273 12.665 4V7.33496H16L16.1338 7.34863C16.4369 7.41057 16.665 7.67857 16.665 8C16.665 8.32143 16.4369 8.58943 16.1338 8.65137L16 8.66504H12C11.6327 8.66504 11.335 8.36727 11.335 8V4Z" />
    </svg>
  );
}
