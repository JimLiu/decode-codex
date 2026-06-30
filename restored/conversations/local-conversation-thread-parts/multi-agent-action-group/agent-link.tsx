// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Clickable agent name used in multi-agent action rows.

import {
  Tooltip,
  formatModelLabel,
} from "../../../boundaries/onboarding-commons-externals.facade";
import {
  mapAgentStatus,
  normalizeModel,
  resolveAgentDisplayName,
  resolveAgentRole,
} from "./agent-model";
import type { AgentState, OpenAgentThreadHandler } from "./types";

export interface AgentLinkProps {
  agentId: string;
  model: string | null;
  onOpenAgentThread: OpenAgentThreadHandler;
  state: AgentState | undefined;
  thread: unknown;
}

export function AgentLink({
  agentId,
  model,
  onOpenAgentThread,
  state,
  thread,
}: AgentLinkProps) {
  const agentRole = resolveAgentRole(thread);
  const roleSuffix = agentRole == null ? null : ` (${agentRole})`;
  const displayName = resolveAgentDisplayName(agentId, thread);
  const status = mapAgentStatus(state);
  const normalizedModel = normalizeModel(model);
  return (
    <span key="agent">
      <Tooltip
        disabled={normalizedModel == null}
        tooltipContent={
          normalizedModel == null
            ? null
            : `Uses ${formatModelLabel(normalizedModel)}`
        }
      >
        <button
          type="button"
          className="cursor-interaction bg-transparent p-0 align-baseline font-medium"
          onClick={() => {
            onOpenAgentThread({
              agentRole,
              conversationId: agentId,
              diffStats: null,
              displayName,
              spawnModel: model,
              status,
              statusSummary: state?.message ?? null,
            });
          }}
        >
          {displayName}
        </button>
      </Tooltip>
      {roleSuffix == null ? null : <span>{roleSuffix}</span>}
    </span>
  );
}
