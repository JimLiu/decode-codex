// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Shared types for multi-agent conversation action disclosure rows.

import type { MessageDescriptor } from "../../../vendor/react-intl";
import type * as React from "react";

export type MultiAgentActionType =
  | "spawnAgent"
  | "sendInput"
  | "resumeAgent"
  | "closeAgent";

export type MultiAgentActionStatus = "inProgress" | "completed" | "failed";

export interface AgentState {
  status?: string;
  message?: string | null;
}

export interface AgentThread {
  agentRole?: string | null;
  source?: string | null;
}

export interface MultiAgentActionItem {
  id: string;
  action: MultiAgentActionType;
  status: MultiAgentActionStatus;
  prompt?: string | null;
  model?: string | null;
  receiverThreads?: { threadId: string; thread: unknown }[];
  agentsStates: Record<string, AgentState>;
}

export interface OpenAgentThreadInput {
  agentRole: string | null;
  conversationId: string;
  diffStats: null;
  displayName: string;
  spawnModel: string | null;
  status: string;
  statusSummary: string | null;
}

export type OpenAgentThreadHandler = (input: OpenAgentThreadInput) => void;

export interface ActionRow {
  key: string;
  node: React.ReactNode;
}

export interface StatusMessageGroup {
  inProgress: MessageDescriptor;
  completed: MessageDescriptor;
  failed: MessageDescriptor;
}
