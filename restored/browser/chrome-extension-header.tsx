// Restored from ref/webview/assets/header-CT44CGhD.js
// Chrome extension side-panel header.
import type { ReactNode } from "react";
import clsx from "clsx";
import { ChevronIcon } from "../icons/chevron-icon";
import { useRecentConversationsQuery } from "../app-server/app-server-manager-hooks";
import { useTasksQuery } from "../runtime/codex-api";
import { usePendingWorktrees } from "../threads/pending-worktree-store";
import { Button } from "../ui/button";
import { WithWindow } from "../utils/with-window";
import { useLocation } from "../vendor/react-router";
import {
  ChromeExtensionMoreActionsMenu,
  DockToggleButton,
  NewChatButton,
} from "./chrome-extension-header-actions";
import { useMergedRecentTasks } from "./chrome-extension-header-model";
import {
  HeaderBackButton,
  HeaderTitleFallback,
} from "./chrome-extension-header-title";
import {
  InlineRecentTasksList,
  RecentTasksMenuTrigger,
} from "./chrome-extension-recent-tasks";
import type {
  ChromeExtensionHeaderProps,
  HeaderCloudTask,
  LocalConversation,
  QueryResult,
} from "./chrome-extension-header-types";

export function initChromeExtensionHeaderChunk(): void {}

export function ChromeExtensionHeader({
  className,
  desktopDeepLinkConversationId,
  onBack,
  title,
  trailing,
}: ChromeExtensionHeaderProps): JSX.Element {
  const location = useLocation();
  const showBackButton = location.pathname !== "/";
  const recentConversationsQuery = useRecentConversationsQuery() as QueryResult<
    LocalConversation[]
  >;
  const cloudTasksQuery = useTasksQuery({
    taskFilter: "current",
    limit: 20,
    enabled: location.pathname === "/",
  }) as QueryResult<HeaderCloudTask[]>;
  const pendingWorktrees = usePendingWorktrees();
  const localConversations = recentConversationsQuery.data ?? [];
  const mergedTasks = useMergedRecentTasks({
    localConversations,
    pendingWorktrees,
    tasks: cloudTasksQuery.data ?? [],
  });

  return (
    <WithWindow browser chromeExtension extension>
      <header
        className={clsx(
          "draggable extension:px-panel border-token-border flex shrink-0 flex-col border-b",
          className,
        )}
      >
        <div className="electron:h-toolbar extension:py-row-y flex items-center justify-between">
          <div className="flex min-w-0 flex-1 items-center gap-1">
            {title ? (
              <HeaderTitleButton
                onBack={onBack}
                showBackButton={showBackButton}
                title={title}
              />
            ) : (
              <HeaderTitleFallback
                localConversations={localConversations}
                mergedTasks={mergedTasks}
                onBack={onBack}
                showBackButton={showBackButton}
              />
            )}
          </div>
          <div className="flex shrink-0 items-center gap-1">
            {trailing}
            <RecentTasksMenuTrigger
              localConversations={localConversations}
              mergedTasks={mergedTasks}
            />
            <ChromeExtensionMoreActionsMenu
              conversationId={desktopDeepLinkConversationId}
            />
            <DockToggleButton />
            <NewChatButton />
          </div>
        </div>
        {location.pathname === "/" ? <InlineRecentTasksList /> : null}
      </header>
    </WithWindow>
  );
}

function HeaderTitleButton({
  onBack,
  showBackButton,
  title,
}: {
  onBack?: () => void;
  showBackButton: boolean;
  title: ReactNode;
}): JSX.Element {
  return (
    <div className="flex min-w-0 items-center gap-1">
      {showBackButton ? <HeaderBackButton onBack={onBack} /> : null}
      <Button
        allowShrink
        color="ghost"
        size="default"
        className="min-w-0 px-1 font-medium text-token-foreground"
        onClick={openRecentTasksMenu}
      >
        <span className="min-w-0 truncate">{title}</span>
        <ChevronIcon className="icon-2xs text-token-text-tertiary" />
      </Button>
    </div>
  );
}

function openRecentTasksMenu(): void {
  window.dispatchEvent(new CustomEvent("open-recent-tasks-menu"));
}
