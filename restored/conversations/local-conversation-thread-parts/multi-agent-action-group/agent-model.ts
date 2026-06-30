// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Normalizes agent identifiers, thread metadata, status labels, and model mapping.

import {
  formatAgentIdLabel,
  getThreadDisplayName,
  normalizeThreadId,
  parseAgentSource,
} from "../../../boundaries/onboarding-commons-externals.facade";
import type {
  AgentState,
  AgentThread,
  MultiAgentActionItem,
  MultiAgentActionStatus,
} from "./types";

export function collectAgentIds(action: MultiAgentActionItem): string[] {
  const threads = action.receiverThreads ?? [];
  const states = action.agentsStates ?? {};
  return Array.from(
    new Set([
      ...threads.map((item) => normalizeThreadId(item.threadId)),
      ...Object.keys(states).map(normalizeThreadId),
    ]),
  ).sort();
}

export function buildThreadById(
  action: MultiAgentActionItem,
): Map<string, unknown> {
  const threads = action.receiverThreads ?? [];
  return new Map(
    threads.map((item) => [normalizeThreadId(item.threadId), item.thread]),
  );
}

export function countAgents(items: MultiAgentActionItem[]): number {
  const ids = new Set<string>();
  for (const action of items) {
    for (const agentId of collectAgentIds(action)) ids.add(agentId);
  }
  return ids.size > 0 ? ids.size : items.length;
}

export function aggregateStatus(
  items: MultiAgentActionItem[],
): MultiAgentActionStatus {
  return items.some((item) => item.status === "inProgress")
    ? "inProgress"
    : items.some((item) => item.status === "failed")
      ? "failed"
      : "completed";
}

export function mapAgentStatus(state: AgentState | undefined): string {
  switch (state?.status) {
    case "pendingInit":
      return "waiting";
    case "running":
      return "active";
    case "completed":
    case "errored":
    case "interrupted":
    case "notFound":
    case "shutdown":
    case undefined:
      return "done";
    default:
      return "done";
  }
}

export function buildAgentModelMap(
  items: MultiAgentActionItem[],
  parentModel: string | null,
): Map<string, string> {
  const map = new Map<string, string>();
  const fallbackModel = normalizeModel(parentModel);
  for (const action of items) {
    const model = normalizeModel(action.model) ?? fallbackModel;
    if (action.action === "spawnAgent" && model != null) {
      for (const receiver of action.receiverThreads ?? []) {
        map.set(normalizeThreadId(receiver.threadId), model);
      }
    }
  }
  return map;
}

export function normalizeModel(
  value: string | null | undefined,
): string | null {
  return value == null || value.trim().length === 0 ? null : value;
}

export function resolveAgentDisplayName(
  agentId: string,
  thread: unknown,
): string {
  return stripLeadingAt(
    getThreadDisplayName(thread) ?? formatAgentIdLabel(agentId),
  );
}

export function stripLeadingAt(text: string): string {
  const trimmed = text.trim();
  return trimmed.startsWith("@") ? trimmed.slice(1) : trimmed;
}

export function resolveAgentRole(thread: unknown): string | null {
  const data = thread as AgentThread | null | undefined;
  const role = data?.agentRole ?? parseAgentSource(data?.source)?.agentRole;
  if (role == null) return null;
  const trimmed = role.trim();
  return trimmed.length === 0 || trimmed === "default" ? null : trimmed;
}
