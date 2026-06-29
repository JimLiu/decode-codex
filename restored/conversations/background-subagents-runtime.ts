// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Background subagent membership/status aggregation for conversation UI.
import { nb as getCachedConversationTurnsRaw } from "../../ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~bj5tp28r-Dcs9S3fj.js";
import { normalizeConversationId as normalizeConversationIdValue } from "../boundaries/src-l0hb-mz-p";
import { cs as backgroundAgentsSignal } from "../vendor/profile-page-runtime";
import { parseUnifiedDiffFileSummaries } from "../utils/unified-diff-file-summaries";
import { Fv as formatAgentPathDisplayNameRaw } from "../vendor/projects-app-shared-runtime";
import {
  getSubagentSourceMetadata,
  type SubagentSourceMetadata,
} from "./subagent-source-metadata-runtime";

export { backgroundAgentsSignal };

type RecordValue = Record<string, unknown>;

type ConversationTurn = {
  diff?: unknown;
  items?: readonly RecordValue[];
  status?: string | null;
  turnId?: string | null;
  turnStartedAtMs?: number | null;
};

type CachedConversation = {
  createdAt?: number | null;
  id: string;
  resumeState?: unknown;
  source?: unknown;
  threadRuntimeStatus?: ThreadRuntimeStatus | null;
};

type SourceLinkedThread = {
  agentRole?: string | null;
  createdAt?: number | string | null;
  id: string;
  source?: unknown;
  status?: ThreadStatus | null;
};

type ThreadStatus = {
  type?: string | null;
};

type ThreadRuntimeStatus = {
  type?: string | null;
};

type BackgroundAgentMembership = {
  conversationId: string;
  createdAtMs: number | null;
  displayName: string | null;
  showInlineActivity: boolean;
  thread: SourceLinkedThread | null;
};

type AgentReference = {
  agentState: RecordValue | null;
  parentTurnKey: string;
  spawnModel: unknown;
  thread: SourceLinkedThread | null;
  tool: string;
  usesThreadStatus: boolean;
};

type ChildConversation = {
  resumeState?: unknown;
  source?: unknown;
  threadRuntimeStatus?: ThreadRuntimeStatus | null;
  turns: readonly ConversationTurn[];
};

export type BackgroundAgentDiffStats = {
  linesAdded: number;
  linesRemoved: number;
};

export type BackgroundAgentSummary = {
  agentRole: string | null;
  conversationId: string;
  diffStats: BackgroundAgentDiffStats | null;
  displayName: string;
  parentTurnKey: string;
  showInlineActivity: boolean;
  spawnModel: unknown;
  status: "active" | "done" | "waiting";
  statusSummary: string | null;
};

export type BuildBackgroundAgentsOptions = {
  cachedConversations: readonly CachedConversation[];
  conversationTurns: readonly ConversationTurn[];
  getChildSource: (conversationId: string) => unknown;
  getChildTurns: (
    conversationId: string,
  ) => readonly ConversationTurn[] | null | undefined;
  parentConversationId: string;
  sourceLinkedThreads?: readonly SourceLinkedThread[] | null;
};

export function buildBackgroundAgents({
  cachedConversations,
  conversationTurns,
  getChildSource,
  getChildTurns,
  parentConversationId,
  sourceLinkedThreads,
}: BuildBackgroundAgentsOptions): BackgroundAgentSummary[] {
  const parentMemberships =
    extractBackgroundAgentMemberships(conversationTurns);
  const latestTurn = conversationTurns.at(-1);
  const sourceMemberships =
    latestTurn?.status === "inProgress" &&
    extractBackgroundAgentMemberships([latestTurn]).length === 0
      ? []
      : findSourceBackgroundAgentMemberships({
          cachedConversations,
          hasSubAgentActivity: parentMemberships.some(
            (membership) => membership.showInlineActivity,
          ),
          parentConversationId,
          parentMemberships,
          sourceLinkedThreads,
        });
  const linkedThreadsById = new Map(
    (sourceLinkedThreads ?? []).map((thread) => [
      normalizeConversationId(thread.id),
      thread,
    ]),
  );
  const memberships = [...parentMemberships, ...sourceMemberships].map(
    (membership) => ({
      ...membership,
      thread:
        linkedThreadsById.get(membership.conversationId) ?? membership.thread,
    }),
  );
  const cachedConversationById = new Map(
    cachedConversations.map((conversation) => [conversation.id, conversation]),
  );
  const latestReferences = buildLatestAgentReferences({
    conversationTurns,
    memberships,
    sourceMemberships,
  });
  const currentParentTurnKey = getLatestParentTurnKey(conversationTurns);
  const inProgressParentTurnKeys = new Set(
    conversationTurns.flatMap((turn, index) =>
      turn.status === "inProgress" ? [getParentTurnKey(turn, index)] : [],
    ),
  );
  const summaries: BackgroundAgentSummary[] = [];

  for (const membership of memberships) {
    const cachedConversation =
      cachedConversationById.get(membership.conversationId) ?? null;
    const childTurns = getChildTurns(membership.conversationId);
    let childConversation: ChildConversation | null = null;

    if (childTurns == null && cachedConversation != null) {
      childConversation = {
        resumeState: cachedConversation.resumeState,
        source: cachedConversation.source,
        threadRuntimeStatus: cachedConversation.threadRuntimeStatus,
        turns: getCachedConversationTurns(cachedConversation),
      };
    } else if (childTurns != null) {
      childConversation = {
        resumeState: cachedConversation?.resumeState,
        source:
          getChildSource(membership.conversationId) ??
          cachedConversation?.source,
        threadRuntimeStatus: cachedConversation?.threadRuntimeStatus,
        turns: childTurns,
      };
    }

    const summary = summarizeBackgroundAgent({
      childConversation,
      currentParentTurnKey,
      inProgressParentTurnKeys,
      latestReference: latestReferences.get(membership.conversationId) ?? null,
      membership,
    });
    if (summary != null) summaries.push(summary);
  }

  return summaries;
}

function extractBackgroundAgentMemberships(
  conversationTurns: readonly ConversationTurn[],
): BackgroundAgentMembership[] {
  const membershipsByConversationId = new Map<
    string,
    BackgroundAgentMembership
  >();

  for (const turn of conversationTurns) {
    for (const item of turn.items ?? []) {
      if (item.type === "subAgentActivity") {
        const agentThreadId = readString(item.agentThreadId);
        if (agentThreadId == null) continue;
        const conversationId = normalizeConversationId(agentThreadId);
        if (membershipsByConversationId.has(conversationId)) continue;
        membershipsByConversationId.set(conversationId, {
          conversationId,
          createdAtMs: null,
          displayName: formatAgentPathDisplayName(item.agentPath),
          showInlineActivity: true,
          thread: null,
        });
        continue;
      }

      if (item.type !== "collabAgentToolCall" || item.tool !== "spawnAgent") {
        continue;
      }

      const receiverThreadsById = getReceiverThreadsById(item);
      for (const receiverThreadId of readStringArray(item.receiverThreadIds)) {
        const conversationId = normalizeConversationId(receiverThreadId);
        if (membershipsByConversationId.has(conversationId)) continue;
        membershipsByConversationId.set(conversationId, {
          conversationId,
          createdAtMs: null,
          displayName: null,
          showInlineActivity: false,
          thread: receiverThreadsById.get(receiverThreadId) ?? null,
        });
      }
    }
  }

  return Array.from(membershipsByConversationId.values());
}

function findSourceBackgroundAgentMemberships({
  cachedConversations,
  hasSubAgentActivity,
  parentConversationId,
  parentMemberships,
  sourceLinkedThreads,
}: {
  cachedConversations: readonly CachedConversation[];
  hasSubAgentActivity: boolean;
  parentConversationId: string;
  parentMemberships: readonly BackgroundAgentMembership[];
  sourceLinkedThreads?: readonly SourceLinkedThread[] | null;
}): BackgroundAgentMembership[] {
  const seenConversationIds = new Set(
    parentMemberships.map((membership) => membership.conversationId),
  );
  const sourceMemberships: BackgroundAgentMembership[] = [];

  for (const conversation of cachedConversations) {
    if (seenConversationIds.has(conversation.id)) continue;
    if (
      getSubagentSourceMetadata(conversation.source)?.parentThreadId !==
      parentConversationId
    ) {
      continue;
    }
    sourceMemberships.push({
      conversationId: conversation.id,
      createdAtMs: conversation.createdAt ?? null,
      displayName: null,
      showInlineActivity: hasSubAgentActivity,
      thread: null,
    });
    seenConversationIds.add(conversation.id);
  }

  for (const thread of sourceLinkedThreads ?? []) {
    const conversationId = normalizeConversationId(thread.id);
    if (seenConversationIds.has(conversationId)) continue;
    sourceMemberships.push({
      conversationId,
      createdAtMs: Number(thread.createdAt) * 1000,
      displayName: null,
      showInlineActivity: hasSubAgentActivity,
      thread,
    });
    seenConversationIds.add(conversationId);
  }

  return sourceMemberships;
}

function buildLatestAgentReferences({
  conversationTurns,
  memberships,
  sourceMemberships,
}: {
  conversationTurns: readonly ConversationTurn[];
  memberships: readonly BackgroundAgentMembership[];
  sourceMemberships: readonly BackgroundAgentMembership[];
}): Map<string, AgentReference> {
  const membershipsByConversationId = new Map(
    memberships.map((membership) => [membership.conversationId, membership]),
  );
  const latestReferences = new Map<string, AgentReference>();

  for (let index = 0; index < conversationTurns.length; index += 1) {
    const turn = conversationTurns[index];
    if (turn == null) continue;
    const parentTurnKey = getParentTurnKey(turn, index);

    for (const item of turn.items ?? []) {
      if (item.type === "subAgentActivity") {
        const agentThreadId = readString(item.agentThreadId);
        if (agentThreadId == null) continue;
        const conversationId = normalizeConversationId(agentThreadId);
        const membership = membershipsByConversationId.get(conversationId);
        if (membership == null) continue;
        const threadStatus = membership.thread?.status ?? null;
        const usesThreadStatus =
          threadStatus != null && threadStatus.type !== "notLoaded";
        latestReferences.set(conversationId, {
          agentState: {
            message: null,
            status: usesThreadStatus
              ? agentStatusFromThreadStatus(threadStatus)
              : item.kind === "interrupted"
                ? "completed"
                : "running",
          },
          parentTurnKey,
          spawnModel: null,
          thread: membership.thread,
          tool: "spawnAgent",
          usesThreadStatus,
        });
        continue;
      }

      if (item.type !== "collabAgentToolCall") continue;
      const receiverThreadsById = getReceiverThreadsById(item);
      const agentStates = asRecord(item.agentsStates);
      const tool = readString(item.tool) ?? "";

      for (const receiverThreadId of readStringArray(item.receiverThreadIds)) {
        const conversationId = normalizeConversationId(receiverThreadId);
        const membership = membershipsByConversationId.get(conversationId);
        const currentReference = latestReferences.get(conversationId);
        if (membership == null) continue;
        latestReferences.set(conversationId, {
          agentState:
            asRecord(agentStates?.[receiverThreadId]) ??
            currentReference?.agentState ??
            null,
          parentTurnKey,
          spawnModel:
            tool === "spawnAgent"
              ? (item.model ?? currentReference?.spawnModel ?? null)
              : (currentReference?.spawnModel ?? null),
          thread:
            receiverThreadsById.get(receiverThreadId) ??
            currentReference?.thread ??
            membership.thread,
          tool: tool === "wait" ? (currentReference?.tool ?? tool) : tool,
          usesThreadStatus: false,
        });
      }
    }
  }

  for (const sourceMembership of sourceMemberships) {
    latestReferences.set(sourceMembership.conversationId, {
      agentState: {
        message: null,
        status:
          sourceMembership.thread == null
            ? "completed"
            : agentStatusFromThreadStatus(
                sourceMembership.thread.status ?? null,
              ),
      },
      parentTurnKey: getParentTurnKeyForCreatedAt(
        conversationTurns,
        sourceMembership.createdAtMs,
      ),
      spawnModel: null,
      thread: sourceMembership.thread,
      tool: "spawnAgent",
      usesThreadStatus: sourceMembership.thread != null,
    });
  }

  return latestReferences;
}

function summarizeBackgroundAgent({
  childConversation,
  currentParentTurnKey,
  inProgressParentTurnKeys,
  latestReference,
  membership,
}: {
  childConversation: ChildConversation | null;
  currentParentTurnKey: string;
  inProgressParentTurnKeys: ReadonlySet<string>;
  latestReference: AgentReference | null;
  membership: BackgroundAgentMembership;
}): BackgroundAgentSummary | null {
  if (latestReference == null) return null;
  const status = normalizeAgentStatus(latestReference.agentState?.status);
  if (latestReference.tool === "closeAgent" || status === "hidden") return null;

  const childProgress = getChildConversationProgress(childConversation);
  const isCurrentParentTurn =
    latestReference.parentTurnKey === currentParentTurnKey;
  const isParentTurnInProgress = inProgressParentTurnKeys.has(
    latestReference.parentTurnKey,
  );
  const isActive =
    childProgress === "inProgress" ||
    (latestReference.usesThreadStatus && status === "active") ||
    (!latestReference.usesThreadStatus &&
      status === "active" &&
      isParentTurnInProgress) ||
    (status === "unknown" && isCurrentParentTurn && isParentTurnInProgress);
  const isWaiting = !isActive && status === "waiting";
  const shouldStayWaiting =
    isWaiting ||
    (!isActive && !isWaiting && isParentTurnInProgress && status !== "done");
  const isDone =
    !isActive &&
    !shouldStayWaiting &&
    (status === "done" ||
      (!latestReference.usesThreadStatus &&
        status === "active" &&
        !isParentTurnInProgress) ||
      childProgress === "notInProgress");

  if (!isActive && !shouldStayWaiting && !isDone) return null;

  const displayName = getBackgroundAgentDisplayName({
    childConversation,
    latestReference,
    membership,
  });
  const agentRole = getBackgroundAgentRole({
    childConversation,
    latestReference,
    membership,
  });
  const diffStats = getChildConversationDiffStats(childConversation);

  if (isDone) {
    return {
      agentRole,
      conversationId: membership.conversationId,
      diffStats,
      displayName,
      parentTurnKey: latestReference.parentTurnKey,
      showInlineActivity: membership.showInlineActivity,
      spawnModel: latestReference.spawnModel,
      status: "done",
      statusSummary: null,
    };
  }

  if (shouldStayWaiting) {
    return {
      agentRole,
      conversationId: membership.conversationId,
      diffStats,
      displayName,
      parentTurnKey: latestReference.parentTurnKey,
      showInlineActivity: membership.showInlineActivity,
      spawnModel: latestReference.spawnModel,
      status: "waiting",
      statusSummary: null,
    };
  }

  return {
    agentRole,
    conversationId: membership.conversationId,
    diffStats,
    displayName,
    parentTurnKey: latestReference.parentTurnKey,
    showInlineActivity: membership.showInlineActivity,
    spawnModel: latestReference.spawnModel,
    status: "active",
    statusSummary: getChildConversationStatusSummary(childConversation),
  };
}

function getReceiverThreadsById(
  item: RecordValue,
): Map<string, SourceLinkedThread> {
  return new Map(
    readRecordArray(item.receiverThreads).flatMap((receiverThread) => {
      const threadId = readString(receiverThread.threadId);
      const thread = asSourceLinkedThread(receiverThread.thread);
      return threadId == null || thread == null ? [] : [[threadId, thread]];
    }),
  );
}

function getLatestParentTurnKey(
  conversationTurns: readonly ConversationTurn[],
): string {
  if (conversationTurns.length === 0) return "0";
  const latestIndex = conversationTurns.length - 1;
  return getParentTurnKey(conversationTurns[latestIndex] ?? null, latestIndex);
}

function getParentTurnKey(
  turn: ConversationTurn | null,
  index: number,
): string {
  return turn?.turnId == null ? `${index + 1}` : turn.turnId;
}

function getParentTurnKeyForCreatedAt(
  conversationTurns: readonly ConversationTurn[],
  createdAtMs: number | null,
): string {
  if (createdAtMs == null || !Number.isFinite(createdAtMs)) {
    return getLatestParentTurnKey(conversationTurns);
  }

  for (let index = conversationTurns.length - 1; index >= 0; index -= 1) {
    const turn = conversationTurns[index];
    const turnStartedAtMs = turn?.turnStartedAtMs;
    if (
      turn != null &&
      turnStartedAtMs != null &&
      turnStartedAtMs <= createdAtMs
    ) {
      return getParentTurnKey(turn, index);
    }
  }

  return "0";
}

function getBackgroundAgentDisplayName({
  childConversation,
  latestReference,
  membership,
}: {
  childConversation: ChildConversation | null;
  latestReference: AgentReference;
  membership: BackgroundAgentMembership;
}): string {
  return trimDisplayName(
    membership.displayName ??
      getThreadDisplayName(latestReference.thread) ??
      getThreadDisplayName(membership.thread) ??
      getSubagentSourceMetadata(childConversation?.source)?.agentNickname ??
      membership.conversationId,
  );
}

function getBackgroundAgentRole({
  childConversation,
  latestReference,
  membership,
}: {
  childConversation: ChildConversation | null;
  latestReference: AgentReference;
  membership: BackgroundAgentMembership;
}): string | null {
  const role =
    readString(latestReference.thread?.agentRole) ??
    readString(membership.thread?.agentRole) ??
    getSubagentSourceMetadata(childConversation?.source)?.agentRole ??
    null;
  const trimmedRole = role?.trim();
  return trimmedRole == null ||
    trimmedRole.length === 0 ||
    trimmedRole === "default"
    ? null
    : trimmedRole;
}

function trimDisplayName(displayName: string): string {
  const trimmedName = displayName.trim();
  return trimmedName.startsWith("@") ? trimmedName.slice(1) : trimmedName;
}

function getChildConversationProgress(
  childConversation: ChildConversation | null,
): "inProgress" | "notInProgress" | "unknown" {
  if (
    childConversation?.resumeState === "needs_resume" &&
    childConversation.threadRuntimeStatus?.type === "active"
  ) {
    return "inProgress";
  }
  if (childConversation == null || childConversation.turns.length === 0) {
    return "unknown";
  }
  return childConversation.turns.at(-1)?.status === "inProgress"
    ? "inProgress"
    : "notInProgress";
}

function normalizeAgentStatus(
  status: unknown,
): "active" | "done" | "hidden" | "unknown" | "waiting" {
  switch (status) {
    case "pendingInit":
      return "waiting";
    case "running":
      return "active";
    case "completed":
      return "done";
    case "interrupted":
    case "errored":
    case "shutdown":
    case "notFound":
      return "hidden";
    case null:
    case undefined:
      return "unknown";
    default:
      return "unknown";
  }
}

function getChildConversationStatusSummary(
  childConversation: ChildConversation | null,
): string | null {
  const latestTurn = childConversation?.turns.at(-1) ?? null;
  if (latestTurn?.status !== "inProgress") return null;

  const items = latestTurn.items ?? [];
  for (let itemIndex = items.length - 1; itemIndex >= 0; itemIndex -= 1) {
    const item = items[itemIndex];
    if (item?.type !== "reasoning") continue;
    const summaryItems = readStringArray(item.summary);
    for (
      let summaryIndex = summaryItems.length - 1;
      summaryIndex >= 0;
      summaryIndex -= 1
    ) {
      const summary = cleanReasoningSummary(summaryItems[summaryIndex]);
      if (summary != null) return summary;
    }
  }

  return null;
}

function cleanReasoningSummary(summary: string | null): string | null {
  if (summary == null) return null;
  let trimmed = summary
    .replace(/^\s*(?:>\s*|#{1,6}\s+|(?:[-*+]|\d+\.)\s+)*/u, "")
    .replace(/\*/gu, "")
    .replace(/\s+/gu, " ")
    .trim();
  trimmed = unwrapMarkdownFormatting(trimmed);
  trimmed = trimmed.replace(/^(?:i['’]m|i am)\s+/iu, "");
  trimmed = trimmed.replace(/[.!?;,:]+$/u, "").trim();
  trimmed = trimmed.replace(/[*_`]/gu, "").trim();
  if (trimmed.length === 0) return null;
  if (/^\p{Lu}\p{Ll}/u.test(trimmed)) {
    trimmed = `${trimmed[0]?.toLowerCase() ?? ""}${trimmed.slice(1)}`;
  }
  return trimmed;
}

function unwrapMarkdownFormatting(value: string): string {
  let current = value;
  for (;;) {
    const next = current
      .replace(/^\*\*(.+)\*\*$/u, "$1")
      .replace(/^__(.+)__$/u, "$1")
      .replace(/^\*(.+)\*$/u, "$1")
      .replace(/^_(.+)_$/u, "$1")
      .replace(/^`(.+)`$/u, "$1")
      .trim();
    if (next === current) return current;
    current = next;
  }
}

function getChildConversationDiffStats(
  childConversation: ChildConversation | null,
): BackgroundAgentDiffStats | null {
  const diff = readString(childConversation?.turns.at(-1)?.diff);
  if (diff == null) return null;
  let linesAdded = 0;
  let linesRemoved = 0;

  try {
    for (const file of parseUnifiedDiffFileSummaries(diff)) {
      linesAdded += file.additions;
      linesRemoved += file.deletions;
    }
  } catch {
    for (const line of diff.split(/\r?\n/)) {
      if (line.startsWith("+++") || line.startsWith("---")) continue;
      if (line.startsWith("+")) linesAdded += 1;
      if (line.startsWith("-")) linesRemoved += 1;
    }
  }

  return linesAdded === 0 && linesRemoved === 0
    ? null
    : { linesAdded, linesRemoved };
}

function agentStatusFromThreadStatus(status: ThreadStatus | null): string {
  switch (status?.type) {
    case "active":
      return "running";
    case "idle":
      return "completed";
    case "notLoaded":
      return "pendingInit";
    case "systemError":
      return "errored";
    default:
      return "pendingInit";
  }
}

function getThreadDisplayName(
  thread: SourceLinkedThread | null,
): string | null {
  const metadata = getSubagentSourceMetadata(thread?.source);
  return (
    readString((thread as RecordValue | null)?.displayName) ??
    readString((thread as RecordValue | null)?.agentNickname) ??
    metadata?.agentNickname ??
    null
  );
}

function getCachedConversationTurns(
  conversation: CachedConversation,
): readonly ConversationTurn[] {
  return getCachedConversationTurnsRaw(
    conversation,
  ) as readonly ConversationTurn[];
}

function formatAgentPathDisplayName(agentPath: unknown): string | null {
  const path = readString(agentPath);
  return path == null ? null : formatAgentPathDisplayNameRaw(path);
}

function normalizeConversationId(value: unknown): string {
  return normalizeConversationIdValue(value);
}

function asSourceLinkedThread(value: unknown): SourceLinkedThread | null {
  return asRecord(value) as SourceLinkedThread | null;
}

function asRecord(value: unknown): RecordValue | null {
  return value != null && typeof value === "object"
    ? (value as RecordValue)
    : null;
}

function readRecordArray(value: unknown): RecordValue[] {
  return Array.isArray(value)
    ? value.flatMap((item) => asRecord(item) ?? [])
    : [];
}

function readString(value: unknown): string | null {
  return typeof value === "string" ? value : null;
}

function readStringArray(value: unknown): string[] {
  return Array.isArray(value)
    ? value.flatMap((item) => (typeof item === "string" ? [item] : []))
    : [];
}
