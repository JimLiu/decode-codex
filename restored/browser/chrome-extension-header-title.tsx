// Restored from ref/webview/assets/header-CT44CGhD.js
// Title and back-button presentation for the Chrome extension header.
import type { ReactNode } from "react";
import { ArrowLeftIcon } from "../icons/arrow-left-icon";
import { useTaskQuery } from "../runtime/codex-api";
import { Button } from "../ui/button";
import { Tooltip } from "../ui/tooltip-b";
import { WithWindow } from "../utils/with-window";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import { useLocation, useMatch } from "../vendor/react-router";
import { headerMessages } from "./chrome-extension-header-messages";
import {
  getCloudTaskTitle,
  isNotFoundError,
} from "./chrome-extension-header-model";
import { LocalConversationTitle } from "./chrome-extension-task-rows";
import type {
  HeaderCloudTask,
  LocalConversation,
  QueryResult,
  RecentTask,
} from "./chrome-extension-header-types";

type RemoteTaskQueryData =
  | HeaderCloudTask
  | {
      task?: HeaderCloudTask | null;
    };

export function HeaderTitleFallback({
  localConversations,
  mergedTasks,
  onBack,
  showBackButton,
}: {
  localConversations: LocalConversation[];
  mergedTasks: RecentTask[];
  onBack?: () => void;
  showBackButton: boolean;
}): JSX.Element | null {
  const location = useLocation();
  const localMatch = useMatch("/local/:conversationId");
  const remoteMatch = useMatch("/remote/:taskId");
  const localConversationId = localMatch?.params.conversationId ?? null;
  const remoteTaskId = remoteMatch?.params.taskId ?? null;
  const remoteTaskQuery = useTaskQuery(
    remoteTaskId,
  ) as QueryResult<RemoteTaskQueryData>;
  const localConversation =
    localConversationId == null
      ? null
      : (localConversations.find(
          (conversation) => conversation.id === localConversationId,
        ) ?? null);
  const remoteTask = getRemoteTaskFromQueryData(remoteTaskQuery.data);
  const remoteTaskTitle =
    remoteTask == null ? null : getCloudTaskTitle(remoteTask);

  if (remoteTaskTitle) {
    return (
      <HeaderTitleWithOptionalBackButton
        onBack={onBack}
        showBackButton={showBackButton}
        title={remoteTaskTitle}
      />
    );
  }

  if (
    remoteTaskId &&
    remoteTaskQuery.isError &&
    !isNotFoundError(remoteTaskQuery.error)
  ) {
    return (
      <HeaderTitleWithOptionalBackButton
        onBack={onBack}
        showBackButton={showBackButton}
        title={<FormattedMessage {...headerMessages.recentChats} />}
      />
    );
  }

  if (localConversationId && localConversation) {
    return (
      <HeaderTitleWithOptionalBackButton
        onBack={onBack}
        showBackButton={showBackButton}
        title={<LocalConversationTitle conversation={localConversation} />}
      />
    );
  }

  if (location.pathname === "/" && mergedTasks.length > 0) {
    return <FormattedMessage {...headerMessages.recentChats} />;
  }

  return null;
}

export function HeaderTitleWithOptionalBackButton({
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
      <span className="min-w-0 truncate text-sm font-medium text-token-foreground">
        {title}
      </span>
    </div>
  );
}

export function HeaderBackButton({
  onBack,
}: {
  onBack?: () => void;
}): JSX.Element {
  const intl = useIntl();
  const label = intl.formatMessage(headerMessages.backButton);

  return (
    <WithWindow browser chromeExtension extension>
      <Tooltip
        tooltipContent={<FormattedMessage {...headerMessages.backButton} />}
      >
        <Button color="ghost" size="icon" aria-label={label} onClick={onBack}>
          <ArrowLeftIcon className="icon-xs" />
        </Button>
      </Tooltip>
    </WithWindow>
  );
}

function getRemoteTaskFromQueryData(
  data: RemoteTaskQueryData | undefined,
): HeaderCloudTask | null {
  if (data == null) return null;
  if ("task" in data) return data.task ?? null;
  return data;
}
