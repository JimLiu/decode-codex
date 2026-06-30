// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Builds and renders per-agent rows for multi-agent action disclosure content.

import * as React from "react";
import clsx from "clsx";
import { FormattedMessage, useIntl } from "../../../vendor/react-intl";
import {
  buildAgentModelMap,
  buildThreadById,
  collectAgentIds,
} from "./agent-model";
import { AgentLink } from "./agent-link";
import { ActionPromptPreview } from "./action-prompt-preview";
import {
  formatActionStateSuffix,
  formatRowAction,
  formatSendInputAction,
} from "./formatters";
import type {
  ActionRow,
  MultiAgentActionItem,
  OpenAgentThreadHandler,
} from "./types";
import type { IntlShape } from "../../../vendor/react-intl";

export function buildActionRows(
  items: MultiAgentActionItem[],
  parentModel: string | null,
  intl: IntlShape,
  onOpenAgentThread: OpenAgentThreadHandler,
): ActionRow[] {
  const rows: ActionRow[] = [];
  const agentModelMap = buildAgentModelMap(items, parentModel);
  const wrapRow = (chunks: React.ReactNode) => (
    <span className="flex min-w-0 items-baseline gap-1 overflow-hidden whitespace-nowrap">
      {chunks}
    </span>
  );

  for (const action of items) {
    const agentIds = collectAgentIds(action);
    const threadById = buildThreadById(action);
    const hasSpawnInstructions =
      action.action === "spawnAgent" &&
      action.status === "completed" &&
      action.prompt != null &&
      action.prompt.trim().length > 0;
    const hasSendInputPrompt =
      action.action === "sendInput" &&
      action.prompt != null &&
      action.prompt.trim().length > 0;

    if (agentIds.length === 0) {
      rows.push({
        key: `row-generic-${action.id}`,
        node: (
          <FormattedMessage
            id="localConversation.multiAgentAction.row.generic"
            defaultMessage={"{action}"}
            description="Fallback row when there are no known agent ids yet."
            values={{
              action: formatRowAction({
                action: action.action,
                status: action.status,
                intl,
              }),
            }}
          />
        ),
      });
    } else {
      for (const agentId of agentIds) {
        const agentLink = (
          <AgentLink
            agentId={agentId}
            model={agentModelMap.get(agentId) ?? null}
            onOpenAgentThread={onOpenAgentThread}
            state={action.agentsStates[agentId]}
            thread={threadById.get(agentId) ?? null}
          />
        );
        rows.push({
          key: `row-${action.id}-${agentId}`,
          node: hasSpawnInstructions ? (
            <FormattedMessage
              id="localConversation.multiAgentAction.row.spawn.createdWithInstructions"
              defaultMessage={
                "<row>Created {agent} with the instructions: {instructions}</row>"
              }
              description="Per-agent row for completed spawn actions when prompt instructions are present."
              values={{
                agent: agentLink,
                instructions: (
                  <ActionPromptPreview
                    key="instructions"
                    prompt={action.prompt ?? ""}
                  />
                ),
                row: wrapRow,
              }}
            />
          ) : hasSendInputPrompt ? (
            <FormattedMessage
              id="localConversation.multiAgentAction.row.sendInput.messagedWithPrompt"
              defaultMessage={"<row>{action} {agent}: {prompt}</row>"}
              description="Per-agent row for sendInput actions when prompt text is present."
              values={{
                action: formatSendInputAction({ status: action.status, intl }),
                agent: agentLink,
                prompt: (
                  <ActionPromptPreview
                    key="prompt"
                    prompt={action.prompt ?? ""}
                  />
                ),
                row: wrapRow,
              }}
            />
          ) : (
            <FormattedMessage
              id="localConversation.multiAgentAction.row.agent"
              defaultMessage={"{action} {agent}{stateSuffix}"}
              description="Per-agent row for multi-agent action events."
              values={{
                action: formatRowAction({
                  action: action.action,
                  status: action.status,
                  intl,
                }),
                agent: agentLink,
                stateSuffix: formatActionStateSuffix(
                  action,
                  action.agentsStates[agentId],
                  intl,
                ),
              }}
            />
          ),
        });
      }
    }

    if (
      !hasSpawnInstructions &&
      !hasSendInputPrompt &&
      action.prompt != null &&
      action.prompt.trim().length > 0
    ) {
      rows.push({
        key: `meta-prompt-${action.id}`,
        node: (
          <FormattedMessage
            id="localConversation.multiAgentAction.meta.prompt"
            defaultMessage={"Input: {prompt}"}
            description="Input prompt metadata for multi-agent actions."
            values={{
              prompt: (
                <span className="break-words whitespace-pre-wrap">
                  {action.prompt}
                </span>
              ),
            }}
          />
        ),
      });
    }
  }

  return rows;
}

export function renderActionRow(row: ActionRow): React.ReactNode {
  return (
    <div
      key={row.key}
      className={clsx(
        "text-token-conversation-body [&_*]:text-token-non-assistant-body-descendant",
        "text-size-chat min-w-0",
      )}
    >
      {row.node}
    </div>
  );
}

export interface MultiAgentActionRowsProps {
  items: MultiAgentActionItem[];
  parentModel: string | null;
  onOpenAgentThread: OpenAgentThreadHandler;
}

export const MultiAgentActionRows = React.memo(function MultiAgentActionRows({
  items,
  parentModel,
  onOpenAgentThread,
}: MultiAgentActionRowsProps) {
  const intl = useIntl();
  const rows = buildActionRows(items, parentModel, intl, onOpenAgentThread).map(
    renderActionRow,
  );
  return <>{rows}</>;
});
