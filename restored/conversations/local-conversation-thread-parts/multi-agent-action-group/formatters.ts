// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Formatting helpers for multi-agent action labels and state suffixes.

import type { IntlShape } from "../../../vendor/react-intl";
import {
  agentStateMessages,
  headerMessages,
  rowActionMessages,
  sendInputMessages,
} from "./messages";
import type {
  AgentState,
  MultiAgentActionItem,
  MultiAgentActionStatus,
  MultiAgentActionType,
} from "./types";

export function formatStateSuffix(
  state: AgentState | undefined,
  intl: IntlShape,
): string {
  if (state == null) return "";
  const label = formatAgentStateLabel({ status: state.status, intl });
  return state.message == null || state.message.trim().length === 0
    ? ` (${label})`
    : ` (${label}: ${state.message})`;
}

export function formatActionStateSuffix(
  action: MultiAgentActionItem,
  state: AgentState | undefined,
  intl: IntlShape,
): string {
  return action.action === "closeAgent" || action.action === "resumeAgent"
    ? ""
    : formatStateSuffix(state, intl);
}

export function formatHeaderLabel(input: {
  action: MultiAgentActionType;
  status: MultiAgentActionStatus;
  intl: IntlShape;
}): string {
  return input.intl.formatMessage(headerMessages[input.action][input.status]);
}

export function formatRowAction(input: {
  action: MultiAgentActionType;
  status: MultiAgentActionStatus;
  intl: IntlShape;
}): string {
  return input.intl.formatMessage(
    rowActionMessages[input.action][input.status],
  );
}

export function formatSendInputAction(input: {
  status: MultiAgentActionStatus;
  intl: IntlShape;
}): string {
  return input.intl.formatMessage(sendInputMessages[input.status]);
}

export function formatAgentStateLabel(input: {
  status: string | undefined;
  intl: IntlShape;
}): string {
  return input.intl.formatMessage(
    agentStateMessages[input.status as keyof typeof agentStateMessages],
  );
}
