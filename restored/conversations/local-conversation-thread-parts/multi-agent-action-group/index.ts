// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Public barrel for multi-agent action group components, helpers, and messages.

export { ActionPromptPreview } from "./action-prompt-preview";
export type { ActionPromptPreviewProps } from "./action-prompt-preview";
export { AgentLink } from "./agent-link";
export type { AgentLinkProps } from "./agent-link";
export {
  aggregateStatus,
  buildAgentModelMap,
  buildThreadById,
  collectAgentIds,
  countAgents,
  mapAgentStatus,
  normalizeModel,
  resolveAgentDisplayName,
  resolveAgentRole,
  stripLeadingAt,
} from "./agent-model";
export {
  MultiAgentActionRows,
  buildActionRows,
  renderActionRow,
} from "./action-rows";
export type { MultiAgentActionRowsProps } from "./action-rows";
export {
  formatActionStateSuffix,
  formatAgentStateLabel,
  formatHeaderLabel,
  formatRowAction,
  formatSendInputAction,
  formatStateSuffix,
} from "./formatters";
export {
  agentStateMessages,
  headerMessages,
  messages,
  pickStatusMessages,
  rowActionMessages,
  sendInputMessages,
} from "./messages";
export { MultiAgentActionGroup } from "./multi-agent-action-group";
export type { MultiAgentActionGroupProps } from "./multi-agent-action-group";
export type {
  ActionRow,
  AgentState,
  AgentThread,
  MultiAgentActionItem,
  MultiAgentActionStatus,
  MultiAgentActionType,
  OpenAgentThreadHandler,
  OpenAgentThreadInput,
} from "./types";
