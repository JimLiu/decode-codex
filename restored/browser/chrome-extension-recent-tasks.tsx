// Restored from ref/webview/assets/header-CT44CGhD.js
// Recent task menu and inline task list for the Chrome extension header.
import React from "react";
import clsx from "clsx";
import { useRecentConversationsQuery } from "../app-server/app-server-manager-hooks";
import { useAuth } from "../auth/use-auth";
import { CheckMdIcon } from "../icons/check-md-icon";
import { FilterIcon } from "../icons/filter-icon";
import { TasksIcon } from "../icons/tasks-icon";
import { XIcon } from "../icons/x-icon";
import {
  useCloudEnvironmentsQuery,
  useTasksQuery,
  useWorkspaceEnvironmentSearchQuery,
} from "../runtime/codex-api";
import {
  usePendingWorktreeStore,
  usePendingWorktrees,
} from "../threads/pending-worktree-store";
import { Button } from "../ui/button";
import { Dropdown, DropdownMenu } from "../ui/dropdown";
import { Spinner } from "../ui/spinner";
import { Tooltip } from "../ui/tooltip-b";
import { useIsBackgroundSubagentsEnabled } from "../utils/use-is-background-subagents-enabled";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import { useLocation, useMatch, useNavigate } from "../vendor/react-router";
import { recentTaskMessages } from "./chrome-extension-header-messages";
import {
  filterLocalConversationsForQuery,
  filterRecentTasksForQuery,
  getEnvironmentId,
  isNotFoundError,
  isVisibleInlineRecentTask,
  mergeRecentTasks,
  shouldHideLocalConversation,
  useMergedRecentTasks,
} from "./chrome-extension-header-model";
import {
  LocalConversationRow,
  RecentTaskRow,
} from "./chrome-extension-task-rows";
import type {
  HeaderCloudTask,
  HeaderEnvironment,
  LocalConversation,
  QueryResult,
  RecentTask,
  RecentTaskFilter,
} from "./chrome-extension-header-types";

export function RecentTasksMenuTrigger({
  localConversations,
  mergedTasks,
}: {
  localConversations: LocalConversation[];
  mergedTasks: RecentTask[];
}): JSX.Element {
  const intl = useIntl();
  const { authMethod } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const localMatch = useMatch("/local/:conversationId");
  const remoteMatch = useMatch("/remote/:taskId");
  const activeLocalConversationId = localMatch?.params.conversationId ?? null;
  const activeRemoteTaskId = remoteMatch?.params.taskId ?? null;
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [filter, setFilter] = React.useState<RecentTaskFilter>("recent");
  const [environment, setEnvironment] =
    React.useState<HeaderEnvironment | null>(null);
  const pendingWorktrees = usePendingWorktrees();
  const pendingWorktreeStore = usePendingWorktreeStore();
  const cloudTasksQuery = useTasksQuery({
    taskFilter: "current",
    limit: 20,
    enabled: open && authMethod === "chatgpt",
  }) as QueryResult<HeaderCloudTask[]>;
  const menuTasks = useMergedRecentTasks({
    envForFilter: environment,
    localConversations,
    pendingWorktrees,
    tasks: cloudTasksQuery.data ?? [],
  });
  const normalizedQuery = query.trim().toLowerCase();
  const visibleRecentTasks = filterRecentTasksForQuery(
    filterTasksByKind(menuTasks, filter),
    normalizedQuery,
  );
  const visibleLocalConversations = filterLocalConversationsForQuery(
    localConversations,
    normalizedQuery,
  );
  const showLegacyLocalList =
    filter === "local" &&
    cloudTasksQuery.data == null &&
    menuTasks.length === 0;
  const progressCount = countActiveTasks(mergedTasks);
  const hasQuery = normalizedQuery.length > 0;
  const triggerLabel = intl.formatMessage(recentTaskMessages.trigger, {
    count: progressCount,
  });

  React.useEffect(() => {
    function handleOpenRecentTasksMenu(): void {
      setOpen(true);
    }
    window.addEventListener(
      "open-recent-tasks-menu",
      handleOpenRecentTasksMenu,
    );
    return () => {
      window.removeEventListener(
        "open-recent-tasks-menu",
        handleOpenRecentTasksMenu,
      );
    };
  }, []);

  React.useEffect(() => {
    if (open && authMethod === "chatgpt") {
      void cloudTasksQuery.refetch();
    }
  }, [authMethod, cloudTasksQuery, open]);

  function closeMenu(): void {
    setOpen(false);
  }

  function navigateTo(path: string): void {
    if (path !== location.pathname) navigate(path);
  }

  function archivePendingWorktree(pendingWorktreeId: string): void {
    pendingWorktreeStore.dismissPendingWorktree(pendingWorktreeId);
  }

  return (
    <DropdownMenu
      align="end"
      contentClassName="w-[min(420px,calc(100vw-24px))] overflow-hidden"
      contentWidth="auto"
      open={open}
      onOpenChange={setOpen}
      triggerButton={
        <Tooltip
          tooltipContent={
            <FormattedMessage {...recentTaskMessages.menuTooltip} />
          }
        >
          <Button color="ghost" size="icon" aria-label={triggerLabel}>
            <TasksIcon className="icon-xs" />
          </Button>
        </Tooltip>
      }
    >
      <div className="flex max-h-[min(560px,calc(100vh-96px))] flex-col">
        <div className="border-token-border border-b p-1">
          <Dropdown.SearchInput
            value={query}
            onChange={(event) => setQuery(event.currentTarget.value)}
            placeholder={intl.formatMessage(recentTaskMessages.search)}
            aria-label={intl.formatMessage(recentTaskMessages.search)}
            trailingContent={
              query ? (
                <Button
                  color="ghost"
                  size="iconSm"
                  aria-label={intl.formatMessage(
                    recentTaskMessages.clearSearch,
                  )}
                  onClick={() => setQuery("")}
                >
                  <XIcon className="icon-2xs" />
                </Button>
              ) : null
            }
          />
        </div>
        <div className="border-token-border flex items-center gap-1 border-b p-1">
          <FilterButton
            active={filter === "recent"}
            onClick={() => setFilter("recent")}
          >
            <FormattedMessage {...recentTaskMessages.allFilter} />
          </FilterButton>
          <FilterButton
            active={filter === "cloud"}
            onClick={() => setFilter("cloud")}
          >
            <FormattedMessage {...recentTaskMessages.cloudFilter} />
          </FilterButton>
          <FilterButton
            active={filter === "local"}
            onClick={() => setFilter("local")}
          >
            <FormattedMessage {...recentTaskMessages.localFilter} />
          </FilterButton>
          <div className="ml-auto">
            <EnvironmentFilterMenu
              selectedEnvironment={environment}
              onSelectEnvironment={setEnvironment}
            />
          </div>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto p-1">
          {cloudTasksQuery.isLoading || cloudTasksQuery.isPending ? (
            <RecentTasksLoading />
          ) : cloudTasksQuery.isError &&
            !isNotFoundError(cloudTasksQuery.error) &&
            filter !== "local" ? (
            <CloudTaskError onRetry={() => void cloudTasksQuery.refetch()} />
          ) : hasQuery && visibleRecentTasks.length === 0 ? (
            <RecentTasksSearchEmpty />
          ) : showLegacyLocalList ? (
            <LocalConversationList
              activeConversationId={activeLocalConversationId}
              conversations={visibleLocalConversations}
              onClose={closeMenu}
              onNavigate={navigateTo}
            />
          ) : visibleRecentTasks.length > 0 ? (
            <RecentTaskList
              activeLocalConversationId={activeLocalConversationId}
              activeRemoteTaskId={activeRemoteTaskId}
              onArchivePendingWorktree={archivePendingWorktree}
              onClose={closeMenu}
              onNavigate={navigateTo}
              tasks={visibleRecentTasks}
            />
          ) : (
            <RecentTasksEmpty />
          )}
        </div>
      </div>
    </DropdownMenu>
  );
}

export function InlineRecentTasksList(): JSX.Element | null {
  const { authMethod } = useAuth();
  const navigate = useNavigate();
  const isBackgroundSubagentsEnabled = useIsBackgroundSubagentsEnabled();
  const recentConversationsQuery = useRecentConversationsQuery() as QueryResult<
    LocalConversation[]
  >;
  const cloudTasksQuery = useTasksQuery({
    taskFilter: "current",
    limit: 20,
    enabled: authMethod === "chatgpt",
  }) as QueryResult<HeaderCloudTask[]>;
  const pendingWorktrees = usePendingWorktrees();
  const pendingWorktreeStore = usePendingWorktreeStore();
  const localConversations = (recentConversationsQuery.data ?? []).filter(
    (conversation) =>
      !shouldHideLocalConversation(conversation, isBackgroundSubagentsEnabled),
  );
  const mergedTasks = React.useMemo(
    () =>
      mergeRecentTasks({
        isBackgroundSubagentsEnabled,
        localConversations,
        pendingWorktrees,
        tasks: cloudTasksQuery.data ?? [],
      }).filter(isVisibleInlineRecentTask),
    [
      cloudTasksQuery.data,
      isBackgroundSubagentsEnabled,
      localConversations,
      pendingWorktrees,
    ],
  );

  if (mergedTasks.length === 0 && !cloudTasksQuery.isError) return null;

  return (
    <div className="extension:px-panel flex flex-col gap-1 pb-1">
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        <FormattedMessage
          {...recentTaskMessages.taskCount}
          values={{ count: countActiveTasks(mergedTasks) }}
        />
      </div>
      {cloudTasksQuery.isError && !isNotFoundError(cloudTasksQuery.error) ? (
        <CloudTaskError
          compact
          onRetry={() => void cloudTasksQuery.refetch()}
        />
      ) : null}
      {mergedTasks.slice(0, 4).map((task) => (
        <RecentTaskRow
          key={task.key}
          isActive={false}
          item={task}
          onArchivePendingWorktree={(id) =>
            pendingWorktreeStore.dismissPendingWorktree(id)
          }
          onClose={() => {}}
          onNavigate={navigate}
          useStableTrailingRail
        />
      ))}
    </div>
  );
}

function RecentTaskList({
  activeLocalConversationId,
  activeRemoteTaskId,
  onArchivePendingWorktree,
  onClose,
  onNavigate,
  tasks,
}: {
  activeLocalConversationId: string | null;
  activeRemoteTaskId: string | null;
  onArchivePendingWorktree: (pendingWorktreeId: string) => void;
  onClose: () => void;
  onNavigate: (path: string) => void;
  tasks: RecentTask[];
}): JSX.Element {
  return (
    <div className="flex flex-col gap-0.5">
      {tasks.map((task) => (
        <RecentTaskRow
          key={task.key}
          isActive={isActiveRecentTask(
            task,
            activeLocalConversationId,
            activeRemoteTaskId,
          )}
          item={task}
          onArchivePendingWorktree={onArchivePendingWorktree}
          onClose={onClose}
          onNavigate={onNavigate}
        />
      ))}
    </div>
  );
}

function LocalConversationList({
  activeConversationId,
  conversations,
  onClose,
  onNavigate,
}: {
  activeConversationId: string | null;
  conversations: LocalConversation[];
  onClose: () => void;
  onNavigate: (path: string) => void;
}): JSX.Element {
  if (conversations.length === 0) return <RecentTasksEmpty />;
  return (
    <div className="flex flex-col gap-0.5">
      {conversations.map((conversation) => (
        <LocalConversationRow
          key={conversation.id}
          conversation={conversation}
          isActive={conversation.id === activeConversationId}
          onClose={onClose}
          onNavigate={onNavigate}
        />
      ))}
    </div>
  );
}

function EnvironmentFilterMenu({
  onSelectEnvironment,
  selectedEnvironment,
}: {
  onSelectEnvironment: (environment: HeaderEnvironment | null) => void;
  selectedEnvironment: HeaderEnvironment | null;
}): JSX.Element {
  const intl = useIntl();
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const environmentsQuery = useCloudEnvironmentsQuery({
    enabled: open,
  }) as QueryResult<HeaderEnvironment[]>;
  const searchQuery = useWorkspaceEnvironmentSearchQuery(query, {
    enabled: open && query.trim().length > 0,
  }) as QueryResult<HeaderEnvironment[]>;
  const normalizedQuery = query.trim();
  const environments =
    normalizedQuery.length > 0
      ? (searchQuery.data ?? [])
      : (environmentsQuery.data ?? []);
  const currentEnvironmentId =
    selectedEnvironment == null ? null : getEnvironmentId(selectedEnvironment);

  return (
    <DropdownMenu
      align="end"
      open={open}
      onOpenChange={setOpen}
      contentClassName="w-72"
      contentWidth="auto"
      triggerButton={
        <Tooltip
          tooltipContent={
            <FormattedMessage {...recentTaskMessages.environmentTooltip} />
          }
        >
          <Button
            color={selectedEnvironment == null ? "ghost" : "ghostActive"}
            size="icon"
            aria-label={intl.formatMessage(
              recentTaskMessages.environmentTooltip,
            )}
          >
            <FilterIcon className="icon-xs" />
          </Button>
        </Tooltip>
      }
    >
      <Dropdown.Title>
        <FormattedMessage {...recentTaskMessages.environmentFilterTitle} />
      </Dropdown.Title>
      <Dropdown.SearchInput
        value={query}
        onChange={(event) => setQuery(event.currentTarget.value)}
        placeholder={intl.formatMessage(recentTaskMessages.environmentSearch)}
        aria-label={intl.formatMessage(recentTaskMessages.environmentSearch)}
      />
      <SelectableDropdownButton
        selected={selectedEnvironment == null}
        onSelect={() => {
          onSelectEnvironment(null);
          setOpen(false);
        }}
      >
        <FormattedMessage {...recentTaskMessages.environmentAll} />
      </SelectableDropdownButton>
      {environmentsQuery.isLoading || searchQuery.isLoading ? (
        <Dropdown.Message>
          <Spinner className="icon-xs" />
        </Dropdown.Message>
      ) : environmentsQuery.isError || searchQuery.isError ? (
        <Dropdown.Message>
          <FormattedMessage
            {...(searchQuery.isError
              ? recentTaskMessages.environmentSearchError
              : recentTaskMessages.environmentListError)}
          />
        </Dropdown.Message>
      ) : environments.length > 0 ? (
        environments.map((environment) => (
          <SelectableDropdownButton
            key={getEnvironmentId(environment)}
            selected={getEnvironmentId(environment) === currentEnvironmentId}
            onSelect={() => {
              onSelectEnvironment(environment);
              setOpen(false);
            }}
          >
            {environment.label}
          </SelectableDropdownButton>
        ))
      ) : (
        <Dropdown.Message>
          <FormattedMessage {...recentTaskMessages.environmentEmpty} />
        </Dropdown.Message>
      )}
    </DropdownMenu>
  );
}

function FilterButton({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}): JSX.Element {
  return (
    <Button
      color={active ? "ghostActive" : "ghost"}
      size="default"
      className="text-xs"
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

function SelectableDropdownButton({
  children,
  onSelect,
  selected,
}: {
  children: React.ReactNode;
  onSelect: () => void;
  selected: boolean;
}): JSX.Element {
  return (
    <Dropdown.Item onSelect={onSelect}>
      <span className="flex min-w-0 flex-1 items-center gap-2">
        <span
          className={clsx(
            "flex size-4 shrink-0 items-center justify-center",
            !selected && "opacity-0",
          )}
        >
          <CheckMdIcon className="icon-2xs" />
        </span>
        <span className="min-w-0 truncate">{children}</span>
      </span>
    </Dropdown.Item>
  );
}

function RecentTasksLoading(): JSX.Element {
  return (
    <Dropdown.Message>
      <Spinner className="icon-xs" />
    </Dropdown.Message>
  );
}

function CloudTaskError({
  compact = false,
  onRetry,
}: {
  compact?: boolean;
  onRetry: () => void;
}): JSX.Element {
  if (compact) {
    return (
      <div className="text-token-description-foreground flex items-center gap-2 px-[var(--padding-row-x)] py-[var(--padding-row-y)] text-xs">
        <FormattedMessage {...recentTaskMessages.cloudInlineError} />
        <Button
          color="ghost"
          size="default"
          className="text-xs"
          onClick={onRetry}
        >
          <FormattedMessage {...recentTaskMessages.retry} />
        </Button>
      </div>
    );
  }
  return (
    <Dropdown.Message>
      <span className="flex w-full items-center justify-between gap-2">
        <FormattedMessage {...recentTaskMessages.cloudInlineError} />
        <Button
          color="ghost"
          size="default"
          className="text-xs"
          onClick={onRetry}
        >
          <FormattedMessage {...recentTaskMessages.retry} />
        </Button>
      </span>
    </Dropdown.Message>
  );
}

function RecentTasksEmpty(): JSX.Element {
  return (
    <Dropdown.Message>
      <FormattedMessage {...recentTaskMessages.empty} />
    </Dropdown.Message>
  );
}

function RecentTasksSearchEmpty(): JSX.Element {
  return (
    <Dropdown.Message>
      <FormattedMessage {...recentTaskMessages.searchEmpty} />
    </Dropdown.Message>
  );
}

function filterTasksByKind(
  tasks: RecentTask[],
  filter: RecentTaskFilter,
): RecentTask[] {
  if (filter === "recent") return tasks;
  if (filter === "cloud") {
    return tasks.filter((task) => task.kind === "remote");
  }
  return tasks.filter(
    (task) => task.kind === "local" || task.kind === "pending-worktree",
  );
}

function isActiveRecentTask(
  task: RecentTask,
  activeLocalConversationId: string | null,
  activeRemoteTaskId: string | null,
): boolean {
  if (task.kind === "remote") {
    return getTaskRecordId(task.task) === activeRemoteTaskId;
  }
  if (task.kind === "local") {
    return task.conversation.id === activeLocalConversationId;
  }
  return false;
}

function countActiveTasks(tasks: RecentTask[]): number {
  return tasks.filter(
    (task) => task.kind === "pending-worktree" || task.kind === "remote",
  ).length;
}

function getTaskRecordId(task: HeaderCloudTask): string | null {
  return task.id ?? task.task_id ?? null;
}
