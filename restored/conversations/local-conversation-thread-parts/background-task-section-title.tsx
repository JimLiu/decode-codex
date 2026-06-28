// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Background-task section titles for the local conversation summary panel.
import { FormattedMessage } from "../../vendor/react-intl";

export type BackgroundTaskSectionType = "subagents" | "tasks";

export type BackgroundTaskSectionTitleProps = {
  type: BackgroundTaskSectionType;
};

export function BackgroundTaskSectionTitle({
  type,
}: BackgroundTaskSectionTitleProps) {
  switch (type) {
    case "subagents":
      return (
        <FormattedMessage
          id="codex.localConversation.backgroundTasks.title.subagents"
          defaultMessage="Subagents"
          description="Title for the background subagents section in the thread summary side panel"
        />
      );
    case "tasks":
      return (
        <FormattedMessage
          id="codex.localConversation.backgroundTasks.title.tasks"
          defaultMessage="Tasks"
          description="Title for the background tasks section in the thread summary side panel"
        />
      );
  }
}
