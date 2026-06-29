// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Synthetic divider shown when a remote (Codex Cloud) task is created from a local conversation.
import { FormattedMessage } from "../../vendor/react-intl";
import { CloudIcon } from "../../icons/cloud-icon";
import { useNavigate } from "../../boundaries/onboarding-commons-externals.facade";

export interface RemoteTaskCreatedDividerProps {
  taskId: string;
}

export function RemoteTaskCreatedDivider({
  taskId,
}: RemoteTaskCreatedDividerProps) {
  const navigate = useNavigate();
  const openTask = () => {
    navigate(`/remote/${taskId}`);
  };

  const taskLink = (
    <button
      type="button"
      className="cursor-interaction border-0 bg-transparent p-0 text-token-text-link-foreground outline-none hover:underline focus:border-0 focus:!outline-none"
      onClick={openTask}
    >
      <FormattedMessage
        id="localConversation.remoteTaskCreated.task"
        defaultMessage="task"
        description="Link label for remote task created indicator"
      />
    </button>
  );

  return (
    <div className="text-size-chat my-2 flex items-center gap-2 text-token-description-foreground/80">
      <div className="flex-1 border-t border-current/30" />
      <div className="flex items-center gap-1 whitespace-nowrap">
        <CloudIcon className="icon-xs" />
        <FormattedMessage
          id="localConversation.remoteTaskCreated"
          defaultMessage="Created {taskLink} in Codex Cloud"
          description="Synthetic item shown when a remote task is created from a local conversation. taskLink is a url link to the task."
          values={{ taskLink }}
        />
      </div>
      <div className="flex-1 border-t border-current/30" />
    </div>
  );
}
