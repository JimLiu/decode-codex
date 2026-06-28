// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Data model for the local conversation summary panel.
import { once } from "../../runtime/commonjs-interop";
import {
  useScope,
  useScopedValue,
  useSignalValue,
} from "../../runtime/app-scope-hooks";
import {
  createDerivedSignal,
  initAppScopeSignalRuntime,
} from "../../runtime/app-scope-runtime";
import { initBrowserFeatureAvailabilityRuntime } from "../../runtime/browser-feature-runtime";
import {
  initConfigQueryRuntime,
  mcpServersQuerySignal,
} from "../../runtime/config-query-runtime";
import {
  initConnectorAppsRuntime,
  useAppsQuery,
} from "../../runtime/connector-apps-runtime";
import {
  conversationCwdSignal,
  conversationTurnsSignal,
  initConversationStateRuntime,
  localResponseInProgressSignal,
} from "../../runtime/conversation-state-runtime";
import {
  formatConversationTitleText,
  initConversationTitleRuntime,
  toConversationId,
} from "./conversation-title-runtime";
import { initStatsigFeatureGateRuntime } from "../../runtime/feature-gate-runtime";
import {
  initConversationRouteSourceRuntime,
  initLocalConversationRouteRuntime,
  localConversationRouteScope,
} from "../local-conversation-route-runtime";
import {
  backgroundAgentsSignal,
  formatCommandExecutionItemCommand,
  hostConfigSignal,
  initThreadSummaryPanelModelRuntime,
  installedMcpAppIdsSignal,
} from "./thread-summary-panel-runtime";
import { conversationTitleSignal } from "./local-conversation-state";
import { rightPanelTabsStore } from "../../app-shell/thread-panel-tabs-store";
import { useIsBackgroundSubagentsEnabled as isBackgroundSubagentsEnabled } from "../../utils/use-is-background-subagents-enabled";
import {
  collectConversationProcessRows,
  initActiveConversationProcessRowsChunk,
  initThreadSummaryPanelSignalsChunk,
} from "../../app-shell/thread-background-processes";
import {
  collectConversationWebSources,
  initThreadSummaryWebSourcesChunk,
} from "./thread-summary-web-sources";
import {
  initThreadSummaryBrowserUseModelChunk,
  useThreadSummaryBrowserUseSummaries,
} from "./thread-summary-browser-use-model";
import {
  initLocalConversationArtifactSignals,
  localConversationSummaryArtifactsSignal,
} from "./local-conversation-artifact-signals";
import {
  collectConversationMcpToolSources,
  initLocalConversationSummaryPanelMcpSources,
  type McpToolSourceSummary,
} from "./local-conversation-summary-panel-mcp-sources";

type ConversationId = string | null;

type ConversationTurnItem = {
  cwd?: string | null;
  id: string;
  processId?: string | null;
  server?: string;
  status?: string;
  tool?: string;
  type: string;
  [key: string]: unknown;
};

type ConversationTurn = {
  commandExecutionStartedAtMsById?: Record<string, number | null>;
  firstTurnWorkItemStartedAtMs?: number | null;
  interruptedCommandExecutionItemIds?: string[];
  items: ConversationTurnItem[];
  status?: string;
  turnId?: string | null;
  turnStartedAtMs?: number | null;
};

type HostConfig = {
  id: string;
};

type ConversationForRestoredProcesses = {
  cwd: string | null | undefined;
  hostId: string;
  id: string;
  title: string | null | undefined;
  turns: readonly ConversationTurn[];
};

type BackgroundTerminalSummary = {
  command: string;
  cwd: string | null;
  id: string;
  processId: string | null | undefined;
  startedAtMs: number | null;
  turnId: string | null | undefined;
};

type SideChatSummary = {
  conversationId: string;
  isResponseInProgress: boolean;
  tabId: string;
  title: string;
};

type LocalConversationSummaryPanelModel = {
  artifacts: readonly unknown[];
  backgroundAgents: readonly unknown[];
  backgroundTerminals: BackgroundTerminalSummary[];
  browserUseSummaries: readonly unknown[];
  plan: {
    content: string;
    key: string;
    title: string | null;
  } | null;
  restoredBackgroundProcesses: readonly unknown[];
  sideChats: readonly SideChatSummary[];
  toolSources: McpToolSourceSummary[];
  webSources: readonly unknown[];
};

let localConversationSideChatSummariesSignal: unknown;

const EMPTY_SUMMARY_PANEL_TURNS: readonly ConversationTurn[] = [];
const SIDE_CHAT_TAB_ID_PREFIX = "sidechat:";

function collectBackgroundTerminalRowsFromTurns(
  turns: readonly ConversationTurn[],
): BackgroundTerminalSummary[] {
  let latestTurnIndex = turns.length - 1,
    backgroundTerminalRows: BackgroundTerminalSummary[] = [];

  for (let turnIndex = latestTurnIndex; turnIndex >= 0; --turnIndex) {
    let turn = turns[turnIndex];
    if (
      turn == null ||
      (turnIndex === latestTurnIndex && turn.status === "inProgress")
    ) {
      continue;
    }

    for (let item of turn.items ?? []) {
      if (
        item == null ||
        item.type !== "commandExecution" ||
        item.status !== "inProgress" ||
        turn.interruptedCommandExecutionItemIds?.includes(item.id)
      ) {
        continue;
      }

      backgroundTerminalRows.push({
        id: item.id,
        command: formatCommandExecutionItemCommand(item),
        cwd: item.cwd ?? null,
        processId: item.processId,
        startedAtMs:
          turn.commandExecutionStartedAtMsById?.[item.id] ??
          turn.firstTurnWorkItemStartedAtMs ??
          turn.turnStartedAtMs ??
          null,
        turnId: turn.turnId,
      });
    }
  }

  return backgroundTerminalRows;
}

function collectRestoredBackgroundProcessRows(
  conversation: ConversationForRestoredProcesses | null,
): readonly unknown[] {
  return conversation == null
    ? []
    : collectConversationProcessRows([conversation]).filter(
        (item: { source?: string }) => item.source === "restored-process",
      );
}

function getLatestCompletedTurnPlanSummary(turns: readonly ConversationTurn[]) {
  for (let turnIndex = turns.length - 1; turnIndex >= 0; --turnIndex) {
    let turn = turns[turnIndex];
    if (turn == null || turn.status === "inProgress") continue;

    for (let itemIndex = turn.items.length - 1; itemIndex >= 0; --itemIndex) {
      let item = turn.items[itemIndex];
      if (item == null || item.type !== "plan" || typeof item.text !== "string")
        continue;

      let headingTitle = item.text.match(/^#\s+(.+)$/m)?.[1]?.trim();
      return {
        content: item.text,
        key: turn.turnId ?? item.id,
        title:
          headingTitle == null
            ? null
            : formatConversationTitleText(headingTitle),
      };
    }
  }

  return null;
}

function collectSideChatTabSummaries(
  tabs: Array<{ tabId: string; title: string }>,
  isConversationResponseInProgress: (conversationId: string) => boolean,
): SideChatSummary[] {
  return tabs.flatMap((item) => {
    if (!item.tabId.startsWith(SIDE_CHAT_TAB_ID_PREFIX)) return [];

    let conversationId = toConversationId(
      item.tabId.slice(SIDE_CHAT_TAB_ID_PREFIX.length),
    );
    return [
      {
        conversationId,
        isResponseInProgress: isConversationResponseInProgress(conversationId),
        tabId: item.tabId,
        title: item.title,
      },
    ];
  });
}

function turnHasExternalMcpToolCall(turn: ConversationTurn) {
  return turn.items.some(isExternalMcpToolCallItem);
}

function isExternalMcpToolCallItem(item: ConversationTurnItem) {
  return item.type === "mcpToolCall" && item.server !== "node_repl";
}

export function useLocalConversationSummaryPanelModel(
  includeBackgroundActivity: boolean = true,
): LocalConversationSummaryPanelModel {
  let routeSnapshot = useScope(localConversationRouteScope),
    conversationId: ConversationId =
      routeSnapshot.value.routeKind === "local-thread"
        ? routeSnapshot.value.conversationId
        : null;

  let host = useSignalValue(hostConfigSignal) as HostConfig,
    turns =
      (useScopedValue(conversationTurnsSignal, conversationId) as
        | readonly ConversationTurn[]
        | null
        | undefined) ?? EMPTY_SUMMARY_PANEL_TURNS,
    cwd = useScopedValue(conversationCwdSignal, conversationId) as
      | string
      | null
      | undefined,
    title = useScopedValue(conversationTitleSignal, conversationId) as
      | string
      | null
      | undefined,
    backgroundTerminals = includeBackgroundActivity
      ? collectBackgroundTerminalRowsFromTurns(turns)
      : [],
    restoredBackgroundProcesses = includeBackgroundActivity
      ? collectRestoredBackgroundProcessRows(
          conversationId == null
            ? null
            : {
                cwd,
                hostId: host.id,
                id: conversationId,
                title,
                turns,
              },
        )
      : [];

  let artifacts = useScopedValue(
      localConversationSummaryArtifactsSignal,
      conversationId,
    ) as readonly unknown[],
    sideChats = useSignalValue(
      localConversationSideChatSummariesSignal,
    ) as readonly SideChatSummary[],
    installedMcpAppIds = useSignalValue(installedMcpAppIdsSignal) as
      | Set<string>
      | null
      | undefined,
    browserUseSummaries = useThreadSummaryBrowserUseSummaries(routeSnapshot);

  let hasExternalMcpToolCalls = turns.some(turnHasExternalMcpToolCall),
    mcpAppsQueryInput = {
      enabled: hasExternalMcpToolCalls,
      hostId: host.id,
    };

  let { data: apps = [] } = useAppsQuery(mcpAppsQueryInput),
    { data: mcpServersQuery } = useScopedValue(
      mcpServersQuerySignal,
      host.id,
    ) as {
      data?: { data?: Array<{ name: string; serverInfo?: unknown }> };
    },
    toolSources = collectConversationMcpToolSources(
      turns,
      apps,
      installedMcpAppIds,
      mcpServersQuery,
    ),
    webSources = collectConversationWebSources(turns),
    plan = getLatestCompletedTurnPlanSummary(turns),
    backgroundAgents = useScopedValue(
      backgroundAgentsSignal,
      isBackgroundSubagentsEnabled() ? conversationId : null,
    ) as readonly unknown[];

  return {
    artifacts,
    sideChats,
    toolSources,
    webSources,
    backgroundAgents,
    backgroundTerminals,
    browserUseSummaries,
    restoredBackgroundProcesses,
    plan,
  };
}

export const initLocalConversationSummaryPanelSignals = once(() => {
  initAppScopeSignalRuntime();
  initConversationStateRuntime();
  initBrowserFeatureAvailabilityRuntime();
  initThreadSummaryPanelModelRuntime();
  initStatsigFeatureGateRuntime();
  initThreadSummaryPanelSignalsChunk();
  initConnectorAppsRuntime();
  initConfigQueryRuntime();
  initLocalConversationRouteRuntime();
  initConversationRouteSourceRuntime();
  initLocalConversationArtifactSignals();
  initActiveConversationProcessRowsChunk();
  initConversationTitleRuntime();
  initLocalConversationSummaryPanelMcpSources();
  initThreadSummaryWebSourcesChunk();
  initThreadSummaryBrowserUseModelChunk();
  localConversationSideChatSummariesSignal = createDerivedSignal(
    localConversationRouteScope,
    ({ get }: { get: (signal: unknown, key?: unknown) => unknown }) =>
      collectSideChatTabSummaries(
        get(rightPanelTabsStore.tabs$) as Array<{
          tabId: string;
          title: string;
        }>,
        (conversationId) =>
          (get(localResponseInProgressSignal, conversationId) as
            | boolean
            | null) ?? false,
      ),
  );
});
