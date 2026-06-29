// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Activity-stream renderers for the Codex settings read/write tool calls plus
// the descriptor entries that register them with the dynamic tool-call
// dispatcher (localConversation domain).
import type { ReactNode } from "react";
import clsx from "clsx";
import { FormattedMessage, defineMessages } from "../vendor/react-intl";
import {
  AnimatedActivityLabel,
  SettingsToolIcon,
  readSettingsToolName,
  writeSettingsToolName,
} from "../boundaries/onboarding-commons-externals.facade";
import { CODEX_APP_TOOL_NAMESPACE } from "./codex-app-tool-namespace";

type SettingsToolCallVariant = "row" | "summary-text" | "trailing";

type SettingsToolCallItem = {
  completed: boolean;
};

type SettingsToolCallLabelKey =
  | "readActive"
  | "readCompleted"
  | "writeActive"
  | "writeCompleted";

const settingsToolCallMessages = defineMessages({
  readActive: {
    id: "localConversation.settingsToolCall.read.active",
    defaultMessage: "Reading settings",
    description: "In-progress label for reading Codex settings.",
  },
  readCompleted: {
    id: "localConversation.settingsToolCall.read.completed",
    defaultMessage: "Read settings",
    description: "Completed label for reading Codex settings.",
  },
  writeActive: {
    id: "localConversation.settingsToolCall.write.active",
    defaultMessage: "Updating settings",
    description: "In-progress label for updating Codex settings.",
  },
  writeCompleted: {
    id: "localConversation.settingsToolCall.write.completed",
    defaultMessage: "Updated settings",
    description: "Completed label for updating Codex settings.",
  },
});

function renderSettingsToolCallLabel(
  item: SettingsToolCallItem,
  labelKey: SettingsToolCallLabelKey,
  variant: SettingsToolCallVariant,
): ReactNode {
  return (
    <span
      className={clsx(
        "text-size-chat min-w-0 items-center",
        variant === "summary-text" ? "inline" : "flex gap-2",
        variant === "row" && "my-1",
        variant === "row"
          ? "text-token-conversation-summary-leading"
          : "text-token-conversation-summary-trailing group-hover/activity-header:text-token-foreground",
      )}
    >
      {variant === "summary-text" ? null : (
        <SettingsToolIcon className="icon-xs shrink-0 text-token-text-secondary" />
      )}
      <AnimatedActivityLabel
        active={!item.completed}
        className={clsx(variant !== "summary-text" && "min-w-0 truncate")}
      >
        <FormattedMessage {...settingsToolCallMessages[labelKey]} />
      </AnimatedActivityLabel>
    </span>
  );
}

export function renderReadSettingsToolCall(
  item: SettingsToolCallItem,
  variant: SettingsToolCallVariant,
): ReactNode {
  return renderSettingsToolCallLabel(
    item,
    item.completed ? "readCompleted" : "readActive",
    variant,
  );
}

export function renderWriteSettingsToolCall(
  item: SettingsToolCallItem,
  variant: SettingsToolCallVariant,
): ReactNode {
  return renderSettingsToolCallLabel(
    item,
    item.completed ? "writeCompleted" : "writeActive",
    variant,
  );
}

export const settingsToolCallDescriptors = [
  {
    namespace: CODEX_APP_TOOL_NAMESPACE,
    render: renderReadSettingsToolCall,
    tool: readSettingsToolName,
  },
  {
    namespace: CODEX_APP_TOOL_NAMESPACE,
    render: renderWriteSettingsToolCall,
    tool: writeSettingsToolName,
  },
];
