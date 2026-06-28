// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Visible local conversation content: app-shell source registration, content search, thread-find rail, and turn-list wiring.
import React, { type ComponentType } from "react";
import { once } from "../../runtime/commonjs-interop";
import { useStableCallback } from "../../utils/use-stable-callback";
import {
  $j as initStatsigGateSignals,
  $p as modelProviderSignal,
  AB as initScopeRuntime,
  AP as motion,
  DL as normalizeWorkspacePath,
  FB as useScope,
  Gj as initStatsigFeatureGateHooks,
  IB as useSignalValue,
  Io as initConnectorAppsListQuery,
  M_ as localConversationRouteScope,
  Mi as initModalRegistrySignal,
  Np as conversationHistoryCompleteSignal,
  O_ as initConversationRouteSourceHelpers,
  Op as initConversationStateSelectors,
  OV as createAtomSignal,
  Ov as useNavigate,
  PB as useScopedValue,
  Pi as openScopedModal,
  Pp as responseInProgressSignal,
  Tp as hasConversationSignal,
  Up as conversationCollaborationModeSignal,
  Xj as useStatsigLayer,
  ak as initAppServerRequestBridge,
  bF as initPathHelpers,
  cM as initToastRuntime,
  cm as conversationHostIdSignal,
  ed as useConversationHostApi,
  fp as completedThreadGoalSignal,
  gp as conversationCwdSignal,
  iF as initIntlRuntime,
  ic as useConversationAgentMode,
  jm as conversationModeSignal,
  lF as useIntl,
  lm as conversationResumeStateSignal,
  mP as logger,
  nm as projectlessOutputDirectorySignal,
  ok as sendAppServerRequest,
  uM as toastSignal,
  vm as subagentParentThreadIdSignal,
  wV as useSignalState,
  zo as useAppsQuery,
} from "../../boundaries/current-ref/appg-thread-shared-producer";
import {
  P as recordForkedConversationSource,
  cs as focusThreadSourceFrame,
  ho as resolveServiceTierForModel,
  qo as diffSourceSignal,
  u as localConversationMessages,
  un as waitForThreadLayoutTick,
} from "../../boundaries/current-ref/projects-app-shared-producer";
import { useAutomationItems } from "../../utils/use-automation-history-items";
import {
  Kt as captureConversationCopy,
  Na as useAppgenEndCardEnabled,
} from "../../boundaries/current-ref/pull-request-thread-actions-producer";
import {
  Mt as registerContentSearchRevealHandler,
  Nt as scrollContentSearchItemIntoView,
  Pt as revealContentSearchItemElement,
  ct as updateCollapsedTurnsByConversation,
} from "../../boundaries/current-ref/profile-page-producer";
import type { LocalConversationThreadContentComponentProps } from "./local-conversation-thread-frame-types";
import {
  initLocalConversationAppShellSourceRegistrationChunk,
  LocalConversationAppShellSourceRegistration,
} from "./local-conversation-app-shell-source-registration";
import {
  ForkFromOlderTurnDialogController,
  initForkFromOlderTurnDialogControllerChunk,
} from "./local-conversation-fork-dialog";
import {
  getConversationNavigationPath,
  initLocalConversationNavigationHelpers,
  shouldShowEmptyResumingThreadState,
  turnHasMcpAppResource,
} from "./local-conversation-navigation";
import {
  createLocalConversationSearchSource,
  initConversationSearchUnitExtractor,
} from "./local-conversation-search-source";
import {
  initReviewSearchHighlighter,
  initThreadFindNavigationRail,
  ThreadFindNavigationRail,
  useReviewSearchHighlights,
} from "./review-search-highlights";
import {
  buildThreadFindItemsForVisibleTurns,
  initThreadFindItemsBuilder,
} from "./thread-find-items";
import {
  buildLocalConversationTurnListEntries,
  type LocalConversationTurnListEntry,
  type VisibleTurnEntryForTurnList,
} from "./local-conversation-turn-list-entries";
import type { VirtualizedTurnListContracts } from "./local-conversation-virtualized-turn-list-types";

type VirtualizedTurnListApi = VirtualizedTurnListContracts["api"];
type VirtualizedTurnListRestoreState =
  VirtualizedTurnListContracts["restoreState"];
type VirtualizedTurnListRowProps = VirtualizedTurnListContracts["rowProps"];

type AutomationDescriptionProps = {
  hostId: string | null;
  message: string;
  sentAtMs: number | null;
};

type EmptyStateProps = {
  debugName: string;
  fillParent?: boolean;
  showLogo?: boolean;
};

type PendingLatestTurnSubmitPlacement = {
  distanceFromBottomPx: number;
  scrollHeightPx?: number | null;
  shouldPlaceLatestTurn?: boolean;
};

type AutoFollowVirtualizedTurnListProps = {
  consumePendingLatestTurnSubmitPlacement?:
    | (() => PendingLatestTurnSubmitPlacement | null)
    | null;
  conversationId: string;
  entries: readonly LocalConversationTurnListEntry[];
  initialScrollOffset?: number | null;
  initialVirtualizedTurnListRestoreState?: VirtualizedTurnListRestoreState;
  onApiChange?: ((api: VirtualizedTurnListApi | null) => void) | null;
  onResponseSpacerStateChange(state: unknown): void;
  onVisibleContentReady?: (() => void) | null;
  onVirtualizedTurnListRestoreStateChange(
    state: VirtualizedTurnListRestoreState,
  ): void;
  synchronouslyMeasureLatestTurnUpdates?: boolean;
};

type VirtualizedTurnListComponentProps = Omit<
  VirtualizedTurnListContracts["props"],
  "entries" | "RowComponent"
> & {
  entries: readonly LocalConversationTurnListEntry[];
  RowComponent: ComponentType<VirtualizedTurnListRowProps>;
};

type VisibleTurnEntry = {
  turnId?: string | null;
  turnSearchKey: string;
  turn?: {
    status?: string;
    turnStartedAtMs?: number | null;
  } | null;
};

type LocalConversationTurnForResuming = {
  error?: unknown | null;
  items: readonly { mcpAppResourceUri?: string | null; type?: string | null }[];
  status?: string | null;
  turnId?: string | null;
};

type CompletedThreadGoal = {
  updatedAt: number;
};

type VisibleTurnEntriesState = {
  conversationTurns: readonly LocalConversationTurnForResuming[];
  hasInheritedParentTurns: boolean;
  hasRenderableTurns: boolean;
  hasUserMessage: boolean;
  latestVisibleTurnId: string | null;
  visibleTurnEntries: readonly VisibleTurnEntryForTurnList[];
};

type AutomationItem = {
  automationId?: string | null;
  description?: string | null;
  id?: string | null;
  readAt?: unknown;
  threadId?: string | null;
};

export type LocalConversationThreadContentCoreProps =
  LocalConversationThreadContentComponentProps & {
    AutomationDescriptionComponent: ComponentType<AutomationDescriptionProps>;
    AutoFollowVirtualizedTurnListComponent: ComponentType<AutoFollowVirtualizedTurnListProps>;
    EmptyStateComponent: ComponentType<EmptyStateProps>;
    TurnRowComponent: ComponentType<VirtualizedTurnListRowProps>;
    VirtualizedTurnListComponent: ComponentType<VirtualizedTurnListComponentProps>;
    localConversationVisibleTurnEntriesSignal: unknown;
  };

let EMPTY_RESOLVED_APPS: readonly unknown[];
let collapsedTurnsByConversationSignal: unknown;

function findCompletedTurnSearchKeyAtOrBefore(
  visibleTurnEntries: readonly VisibleTurnEntry[],
  timestampMs: number,
) {
  for (let index = visibleTurnEntries.length - 1; index >= 0; index -= 1) {
    let visibleTurnEntry = visibleTurnEntries[index];
    if (
      !(
        visibleTurnEntry.turn?.turnStartedAtMs != null &&
        visibleTurnEntry.turn.turnStartedAtMs > timestampMs
      )
    )
      return visibleTurnEntry.turn?.status === "completed"
        ? visibleTurnEntry.turnSearchKey
        : null;
  }
  return null;
}

export function LocalConversationThreadContentCore({
  AutomationDescriptionComponent,
  AutoFollowVirtualizedTurnListComponent,
  EmptyStateComponent,
  TurnRowComponent,
  VirtualizedTurnListComponent,
  consumePendingLatestTurnSubmitPlacement,
  conversationId,
  initialScrollOffset,
  initialVirtualizedTurnListRestoreState,
  isBackgroundSubagentsEnabled,
  isReadOnly,
  isResuming,
  isScrollToTopEnabled,
  localConversationVisibleTurnEntriesSignal,
  onResponseSpacerStateChange,
  onVisibleThreadContentReady,
  onVirtualizedTurnListRestoreStateChange,
  showInProgressFixedContent,
}: LocalConversationThreadContentCoreProps) {
  let scope = useScope(localConversationRouteScope),
    navigate = useNavigate(),
    isAppgenEndCardEnabled = useAppgenEndCardEnabled(),
    hasConversation = useScopedValue<boolean>(
      hasConversationSignal,
      conversationId,
    );

  let modelProvider = useScopedValue(modelProviderSignal, conversationId),
    cwd = useScopedValue<string | null>(conversationCwdSignal, conversationId),
    hostId = useScopedValue<string | null>(
      conversationHostIdSignal,
      conversationId,
    ),
    conversationResumeState =
      useScopedValue<string>(conversationResumeStateSignal, conversationId) ??
      "needs_resume",
    isConversationHistoryComplete =
      useScopedValue<boolean>(
        conversationHistoryCompleteSignal,
        conversationId,
      ) ?? false,
    isResponseInProgress = useScopedValue<boolean>(
      responseInProgressSignal,
      conversationId,
    ),
    completedThreadGoal = useScopedValue<CompletedThreadGoal | null>(
      completedThreadGoalSignal,
      conversationId,
    ),
    isProjectlessConversation =
      useScopedValue(conversationModeSignal, conversationId) === "projectless",
    projectlessOutputDirectory = useScopedValue<string | null>(
      projectlessOutputDirectorySignal,
      conversationId,
    ),
    collaborationMode = useScopedValue(
      conversationCollaborationModeSignal,
      conversationId,
    ),
    {
      conversationTurns,
      hasInheritedParentTurns,
      hasRenderableTurns,
      hasUserMessage,
      latestVisibleTurnId,
      visibleTurnEntries,
    } = useScopedValue<VisibleTurnEntriesState>(
      localConversationVisibleTurnEntriesSignal,
      {
        conversationId,
        isBackgroundSubagentsEnabled,
      },
    );

  visibleTurnEntries.at(-1)?.turn;
  let completedThreadGoalTurnKey =
      completedThreadGoal == null
        ? null
        : findCompletedTurnSearchKeyAtOrBefore(
            visibleTurnEntries,
            completedThreadGoal.updatedAt * 1e3,
          ),
    conversationHostApi = useConversationHostApi(conversationId),
    { data: resolvedApps = EMPTY_RESOLVED_APPS } = useAppsQuery({
      hostId,
    }),
    renderMcpApps = useStatsigLayer("2138468235").get("enable_mcp_apps", false),
    subagentParentThreadId = useScopedValue<string | null>(
      subagentParentThreadIdSignal,
      conversationId,
    ),
    visibleSubagentParentThreadId = isBackgroundSubagentsEnabled
      ? subagentParentThreadId
      : null,
    [collapsedTurnsByConversationId, setCollapsedTurnsByConversationId] =
      useSignalState<Record<string, Record<string, boolean | undefined>>>(
        collapsedTurnsByConversationSignal,
      ),
    { items, markRead } = useAutomationItems(),
    matchingAutomationItem = hasConversation
      ? ((items as readonly AutomationItem[]).find(
          (item) => item.threadId === conversationId,
        ) ?? null)
      : null,
    automationDescription = matchingAutomationItem?.description ?? null,
    shouldShowAutomationDescription =
      matchingAutomationItem?.automationId != null &&
      automationDescription != null &&
      automationDescription.trim().length > 0;

  React.useEffect(() => {
    if (
      matchingAutomationItem?.id != null &&
      matchingAutomationItem.readAt == null
    )
      markRead(matchingAutomationItem.id);
  }, [matchingAutomationItem?.id, matchingAutomationItem?.readAt, markRead]);

  let intl = useIntl(),
    { agentMode } = useConversationAgentMode({
      conversationId,
      hostId,
    }),
    resolvedCwd = cwd ? normalizeWorkspacePath(cwd) : null,
    collapsedTurnsById = React.useMemo(
      () => collapsedTurnsByConversationId[conversationId] ?? {},
      [collapsedTurnsByConversationId, conversationId],
    ),
    lastLatestVisibleTurnIdRef = React.useRef<string | null>(null),
    currentConversationIdRef = React.useRef(conversationId),
    previousTurnEntriesRef = React.useRef<
      readonly LocalConversationTurnListEntry[]
    >([]),
    contentContainerRef = React.useRef<HTMLElement | null>(null),
    virtualizedTurnListApiRef = React.useRef<VirtualizedTurnListApi | null>(
      null,
    );

  if (currentConversationIdRef.current !== conversationId) {
    currentConversationIdRef.current = conversationId;
    lastLatestVisibleTurnIdRef.current = null;
  }

  let canEditLastTurnMessage = hasConversation && !isResponseInProgress,
    isSubagentThread = visibleSubagentParentThreadId != null,
    showEmptyResumingState = shouldShowEmptyResumingThreadState({
      conversationTurns,
      hasRenderableTurns,
      isResuming,
      isSubagentThread,
    }),
    hasConversationRef = React.useRef(hasConversation),
    conversationTurnsRef = React.useRef(conversationTurns),
    isBackgroundSubagentsEnabledRef = React.useRef(
      isBackgroundSubagentsEnabled,
    );

  hasConversationRef.current = hasConversation;
  conversationTurnsRef.current = conversationTurns;
  isBackgroundSubagentsEnabledRef.current = isBackgroundSubagentsEnabled;

  let diffSource = useSignalValue(diffSourceSignal),
    routeContextId =
      conversationId == null ? "unavailable" : `conversation:${conversationId}`;

  useReviewSearchHighlights({
    containerRef: contentContainerRef,
    contextId: routeContextId,
  });

  let handleCopyCapture = useStableCallback((event: ClipboardEvent) => {
      let containerElement = contentContainerRef.current;
      if (containerElement != null)
        captureConversationCopy(event, containerElement);
    }),
    setContentContainerRef = React.useCallback(
      (nextContainer: HTMLElement | null) => {
        let previousContainer = contentContainerRef.current;
        if (previousContainer === nextContainer) return;
        previousContainer?.ownerDocument.removeEventListener(
          "copy",
          handleCopyCapture,
          true,
        );
        contentContainerRef.current = nextContainer;
        nextContainer?.ownerDocument.addEventListener(
          "copy",
          handleCopyCapture,
          true,
        );
      },
      [handleCopyCapture],
    ),
    editLastTurnMessage = useStableCallback(
      async (turnEntry: LocalConversationTurnListEntry, message: string) => {
        try {
          await sendAppServerRequest("edit-last-user-turn-for-host", {
            hostId: conversationHostApi.getHostId(),
            conversationId,
            turnId: turnEntry.turnId,
            message,
            agentMode,
            serviceTier: await resolveServiceTierForModel(
              scope,
              conversationHostApi.getHostId(),
              getTurnEntryModel(turnEntry),
            ),
          });
        } catch (error) {
          scope.get(toastSignal).danger(
            intl.formatMessage({
              id: "localConversation.editLastMessageFailed",
              defaultMessage: "Failed to edit message",
              description:
                "Toast shown when editing the previous user message fails",
            }),
          );
          throw error;
        }
      },
    ),
    forkConversationFromTurn = useStableCallback(
      async (targetTurnId: string) => {
        if (!hasConversation) return;
        try {
          let forkedConversationId = await sendAppServerRequest(
            "fork-conversation-from-turn",
            {
              conversationId,
              targetTurnId,
              cwd,
              workspaceRoots: cwd == null ? undefined : [cwd],
              collaborationMode,
            },
          );
          recordForkedConversationSource(scope, {
            sourceConversationId: conversationId,
            targetConversationId: forkedConversationId,
          });
          navigate(getConversationNavigationPath(forkedConversationId), {
            state: {
              focusComposerNonce: Date.now(),
            },
          });
        } catch (error) {
          logger.error("Error forking conversation from turn", {
            safe: {},
            sensitive: {
              error,
            },
          });
          scope
            .get(toastSignal)
            .danger(
              intl.formatMessage(localConversationMessages.forkThreadError),
            );
          throw error;
        }
      },
    ),
    handleForkTurnMessage = useStableCallback(
      (turnEntry: LocalConversationTurnListEntry) => {
        if (!hasConversation || turnEntry.turnId == null) return;
        if (turnEntry.turnId === latestVisibleTurnId) {
          forkConversationFromTurn(turnEntry.turnId);
          return;
        }
        let turnIdForFork = turnEntry.turnId;
        openScopedModal(scope, ForkFromOlderTurnDialogController, {
          conversationCwd: cwd,
          conversationId,
          conversationLatestCollaborationMode: collaborationMode,
          hostId,
          onForkIntoLocal: () => forkConversationFromTurn(turnIdForFork),
          turnId: turnIdForFork,
        });
      },
    ),
    setTurnCollapsed = useStableCallback(
      (turnId: string, collapsed: boolean) => {
        setCollapsedTurnsByConversationId((currentCollapsedTurns: unknown) =>
          updateCollapsedTurnsByConversation({
            current: currentCollapsedTurns,
            conversationId,
            turnId,
            collapsed,
          }),
        );
      },
    ),
    turnListEntries = buildLocalConversationTurnListEntries({
      collapsedTurnsById,
      completedThreadGoal,
      completedThreadGoalTurnKey,
      conversationId,
      cwd: resolvedCwd,
      hasInheritedParentTurns,
      hostId: hostId ?? null,
      isBackgroundSubagentsEnabled,
      isProjectlessConversation,
      isReadOnly,
      modelProvider,
      projectlessOutputDirectory,
      onEditLastTurnMessage:
        !isReadOnly && canEditLastTurnMessage ? editLastTurnMessage : undefined,
      onForkTurnMessage:
        !isReadOnly && hasConversation ? handleForkTurnMessage : undefined,
      onSetCollapsedForTurn: setTurnCollapsed,
      previousEntries: previousTurnEntriesRef.current,
      renderMcpApps,
      resolvedApps,
      showInProgressFixedContent,
      visibleSubagentParentThreadId,
      visibleTurnEntries,
    });

  previousTurnEntriesRef.current = turnListEntries;

  let turnKeyBySearchKey = React.useMemo(() => {
      let turnKeyMap = new Map<string, string>();
      for (let entry of turnListEntries)
        if (!turnKeyMap.has(entry.turnSearchKey))
          turnKeyMap.set(entry.turnSearchKey, entry.turnKey);
      return turnKeyMap;
    }, [turnListEntries]),
    searchScrollAdapter = React.useMemo(
      () => ({
        scrollToTurn: async (
          turnKey: string,
          options?: { signal?: AbortSignal | null },
        ) => {
          if (
            options?.signal?.aborted ||
            (collapsedTurnsById[turnKey] === true &&
              setCollapsedTurnsByConversationId(
                (currentCollapsedTurns: unknown) =>
                  updateCollapsedTurnsByConversation({
                    current: currentCollapsedTurns,
                    conversationId,
                    turnId: turnKey,
                    collapsed: false,
                  }),
              ),
            await waitForThreadLayoutTick(),
            options?.signal?.aborted)
          )
            return;
          let virtualizedTurnListApi = virtualizedTurnListApiRef.current;
          if (virtualizedTurnListApi == null)
            throw Error(
              "Local conversation search scroll requested before VirtualizedTurnList API was ready",
            );
          await virtualizedTurnListApi.scrollToKey(
            turnKeyBySearchKey.get(turnKey) ?? turnKey,
          );
          if (!options?.signal?.aborted) await waitForThreadLayoutTick();
        },
        getTurnContainer: (turnSearchKey: string) => {
          let containerElement = contentContainerRef.current;
          return containerElement == null
            ? null
            : (containerElement.querySelector(
                `[data-content-search-turn-key="${turnSearchKey}"]`,
              ) ?? null);
        },
      }),
      [
        collapsedTurnsById,
        conversationId,
        turnKeyBySearchKey,
        setCollapsedTurnsByConversationId,
      ],
    ),
    conversationSource = React.useMemo(
      () =>
        createLocalConversationSearchSource({
          getConversationState: () =>
            hasConversationRef.current
              ? {
                  turns: conversationTurnsRef.current,
                }
              : null,
          getIsBackgroundSubagentsEnabled: () =>
            isBackgroundSubagentsEnabledRef.current,
          routeContextId,
          scrollAdapter: searchScrollAdapter,
        }),
      [searchScrollAdapter, routeContextId],
    ),
    getThreadFindItems = () =>
      buildThreadFindItemsForVisibleTurns({
        isConversationHistoryComplete,
        isAppgenEndCardEnabled,
        isBackgroundSubagentsEnabled,
        modelProvider,
        projectlessOutputDirectory,
        visibleTurnEntries,
      }),
    revealThreadFindItem = useStableCallback(
      async ({ id: contentUnitId, turnKey }: ThreadFindRevealRequest) => {
        let virtualizedTurnListApi = virtualizedTurnListApiRef.current;
        if (virtualizedTurnListApi == null)
          throw Error(
            "Local conversation prompt rail scroll requested before VirtualizedTurnList API was ready",
          );
        await virtualizedTurnListApi.scrollToKey(
          turnKeyBySearchKey.get(turnKey) ?? turnKey,
          (turnContainer: Element) => {
            for (let contentUnit of turnContainer.querySelectorAll(
              "[data-content-search-unit-key]",
            ))
              if (
                (contentUnit as HTMLElement).dataset.contentSearchUnitKey ===
                contentUnitId
              )
                return contentUnit;
            return null;
          },
        );
      },
    ),
    revealContentSearchItem = useStableCallback(
      async ({
        conversationId: targetConversationId,
        itemId,
        turnKey,
      }: ContentSearchRevealRequest) => {
        if (targetConversationId !== conversationId) return;
        if (scrollContentSearchItemIntoView(itemId, "smooth")) return;
        setCollapsedTurnsByConversationId((currentCollapsedTurns: unknown) =>
          updateCollapsedTurnsByConversation({
            current: currentCollapsedTurns,
            conversationId,
            turnId: turnKey,
            collapsed: false,
          }),
        );
        await waitForThreadLayoutTick();
        if (!scrollContentSearchItemIntoView(itemId, "smooth")) {
          await searchScrollAdapter.scrollToTurn(turnKey);
          await revealContentSearchItemElement(itemId, "auto");
        }
      },
    );

  React.useEffect(
    () =>
      registerContentSearchRevealHandler(scope, conversationId, {
        revealItem: revealContentSearchItem,
      }),
    [conversationId, revealContentSearchItem, scope],
  );

  React.useEffect(() => {
    let previousLatestVisibleTurnId = lastLatestVisibleTurnIdRef.current,
      previousLatestVisibleEntry = visibleTurnEntries.find(
        (item) => item.turnId === previousLatestVisibleTurnId,
      ),
      turnIdsToCollapse = new Set<string>();
    if (
      previousLatestVisibleTurnId != null &&
      previousLatestVisibleTurnId !== latestVisibleTurnId &&
      !turnHasMcpAppResource(previousLatestVisibleEntry)
    )
      turnIdsToCollapse.add(previousLatestVisibleTurnId);

    let fourthFromLatestEntry = visibleTurnEntries.at(-4);
    if (
      previousLatestVisibleTurnId != null &&
      previousLatestVisibleTurnId !== latestVisibleTurnId &&
      fourthFromLatestEntry?.turnId != null &&
      turnHasMcpAppResource(fourthFromLatestEntry)
    )
      turnIdsToCollapse.add(fourthFromLatestEntry.turnId);

    if (turnIdsToCollapse.size > 0)
      setCollapsedTurnsByConversationId((currentCollapsedTurns: unknown) => {
        let nextCollapsedTurns = currentCollapsedTurns;
        for (let turnId of turnIdsToCollapse)
          nextCollapsedTurns = updateCollapsedTurnsByConversation({
            current: nextCollapsedTurns,
            conversationId,
            turnId,
            collapsed: true,
          });
        return nextCollapsedTurns;
      });
    lastLatestVisibleTurnIdRef.current = latestVisibleTurnId;
  }, [
    conversationId,
    latestVisibleTurnId,
    setCollapsedTurnsByConversationId,
    visibleTurnEntries,
  ]);

  let notifyVisibleContentReady = useStableCallback(() => {
      setTimeout(() => {
        onVisibleThreadContentReady?.(conversationTurns.length);
      });
    }),
    handleVirtualizedTurnListApiChange = useStableCallback(
      (virtualizedTurnListApi: VirtualizedTurnListApi | null) => {
        virtualizedTurnListApiRef.current = virtualizedTurnListApi;
      },
    ),
    visibleContentReadyHandler =
      conversationResumeState === "resumed" &&
      onVisibleThreadContentReady != null
        ? notifyVisibleContentReady
        : undefined;

  if (!hasConversation)
    return (
      <EmptyStateComponent
        fillParent
        debugName="LocalConversationThread.state"
      />
    );
  if (isSubagentThread && !hasRenderableTurns)
    return (
      <EmptyStateComponent
        fillParent
        debugName="LocalConversationThread.subagentTurns"
      />
    );
  if (showEmptyResumingState)
    return (
      <EmptyStateComponent
        fillParent
        showLogo={false}
        debugName="LocalConversationThread.resume"
      />
    );

  return (
    <>
      <LocalConversationAppShellSourceRegistration
        conversationId={conversationId}
        conversationSource={conversationSource}
        diffSource={diffSource}
        routeScopeValue={scope.value}
      />
      <motion.div
        ref={setContentContainerRef}
        data-thread-find-target="conversation"
        className="relative flex flex-col gap-3 electron:[--color-token-description-foreground:color-mix(in_srgb,var(--color-token-foreground)_70%,transparent)]"
        onMouseDownCapture={() => {
          focusThreadSourceFrame(
            scope,
            "conversation",
            conversationSource.contextId,
          );
        }}
        onFocusCapture={() => {
          focusThreadSourceFrame(
            scope,
            "conversation",
            conversationSource.contextId,
          );
        }}
      >
        <ThreadFindNavigationRail
          enabled={isConversationHistoryComplete}
          getItems={getThreadFindItems}
          onRevealItem={revealThreadFindItem}
        />
        {!hasUserMessage && shouldShowAutomationDescription ? (
          <AutomationDescriptionComponent
            message={automationDescription ?? ""}
            sentAtMs={null}
            hostId={hostId}
          />
        ) : null}
        {isScrollToTopEnabled ? (
          <AutoFollowVirtualizedTurnListComponent
            key={conversationId}
            conversationId={conversationId}
            entries={turnListEntries}
            initialScrollOffset={initialScrollOffset}
            initialVirtualizedTurnListRestoreState={
              initialVirtualizedTurnListRestoreState
            }
            consumePendingLatestTurnSubmitPlacement={
              consumePendingLatestTurnSubmitPlacement
            }
            onResponseSpacerStateChange={onResponseSpacerStateChange}
            onApiChange={handleVirtualizedTurnListApiChange}
            onVisibleContentReady={visibleContentReadyHandler}
            onVirtualizedTurnListRestoreStateChange={
              onVirtualizedTurnListRestoreStateChange
            }
            synchronouslyMeasureLatestTurnUpdates={false}
          />
        ) : (
          <VirtualizedTurnListComponent
            key={conversationId}
            entries={turnListEntries}
            initialRestoreState={initialVirtualizedTurnListRestoreState}
            onApiChange={handleVirtualizedTurnListApiChange}
            onVisibleContentReady={visibleContentReadyHandler}
            onRestoreStateChange={onVirtualizedTurnListRestoreStateChange}
            preserveMeasuredTurnViewport
            RowComponent={TurnRowComponent}
          />
        )}
      </motion.div>
    </>
  );
}

type ThreadFindRevealRequest = {
  id: string;
  turnKey: string;
};

type ContentSearchRevealRequest = {
  conversationId: string;
  itemId: string;
  turnKey: string;
};

function getTurnEntryModel(turnEntry: LocalConversationTurnListEntry) {
  return turnEntry.turn.params?.model ?? null;
}

export const initLocalConversationThreadContentChunk = once(() => {
  initScopeRuntime();
  initPathHelpers();
  initIntlRuntime();
  initConversationStateSelectors();
  initAppServerRequestBridge();
  initToastRuntime();
  initModalRegistrySignal();
  initStatsigGateSignals();
  initStatsigFeatureGateHooks();
  initConnectorAppsListQuery();
  initConversationRouteSourceHelpers();
  initLocalConversationNavigationHelpers();
  initLocalConversationAppShellSourceRegistrationChunk();
  initReviewSearchHighlighter();
  initThreadFindNavigationRail();
  initThreadFindItemsBuilder();
  initConversationSearchUnitExtractor();
  initForkFromOlderTurnDialogControllerChunk();
  EMPTY_RESOLVED_APPS = [];
  collapsedTurnsByConversationSignal = createAtomSignal({});
});
