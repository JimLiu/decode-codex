// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Resume local conversations, including retry and user-visible failure handling.
import React from "react";
import { once } from "../../runtime/commonjs-interop";
import {
  $P as initAppScope,
  AB as initScopeRuntime,
  Dp as conversationRemoteHostIdSignal,
  FB as useScope,
  IB as useSignalValue,
  Op as initConversationStateSelectors,
  PB as useScopedValue,
  QP as appScope,
  Rf as workspaceRootsSignal,
  Uf as initHostWorkspaceQueries,
  VE as initHostConfigHelpers,
  ak as initAppServerRequestBridge,
  cM as initToastRuntime,
  cP as initVscodeMessageBridge,
  cm as conversationHostIdSignal,
  iF as initIntlRuntime,
  lF as useIntl,
  lP as vscodeMessageBridge,
  mP as logger,
  ok as sendAppServerRequest,
  pP as initLoggerRuntime,
  pp as shouldResumeConversationSignal,
  uM as toastSignal,
  vm as subagentParentThreadIdSignal,
} from "../../boundaries/current-ref/appg-thread-shared-producer";
import {
  ho as resolveConversationServiceTier,
  mo as initProjectsAppSharedProducer,
} from "../../boundaries/current-ref/projects-app-shared-producer";
import {
  initThreadFindNavigationRail as initProfilePageProducer,
  Nf as useProfileConversationAgentMode,
} from "../../boundaries/current-ref/profile-page-producer";
import {
  formatResumeConversationError,
  shouldAutoRetryResumeError,
  shouldShowResumeErrorToast,
} from "./local-conversation-resume-errors";

type ConversationId = string | null | undefined;

type ScopeSnapshot = {
  get<TValue = unknown>(signal: unknown, key?: unknown): TValue;
};

type ScopeRuntime = ScopeSnapshot & {
  watch(callback: (snapshot: ScopeSnapshot) => void): () => void;
};

type ActiveConversationMode = {
  settings: {
    model?: unknown | null;
  };
};

type WorkspaceRootsQueryResult = {
  data?: {
    roots?: readonly unknown[] | null;
  } | null;
};

export type LocalConversationResumeState = {
  isResuming: boolean | null | undefined;
};

export function useResumeLocalConversation(
  conversationId: ConversationId,
): LocalConversationResumeState {
  let scope = useScope(appScope) as ScopeRuntime,
    intl = useIntl(),
    { activeMode } = useProfileConversationAgentMode(conversationId) as {
      activeMode?: ActiveConversationMode | null;
    },
    { data } = useSignalValue(
      workspaceRootsSignal,
    ) as WorkspaceRootsQueryResult,
    workspaceRoots = data?.roots,
    shouldResumeConversation = useScopedValue(
      shouldResumeConversationSignal,
      conversationId,
    ) as boolean | null | undefined;
  useScopedValue(conversationHostIdSignal, conversationId);
  let [isResuming, setIsResuming] = React.useState(shouldResumeConversation),
    activeResumeConversationIdRef = React.useRef<ConversationId>(null),
    retryTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null),
    hasShownResumeErrorRef = React.useRef(false),
    blockedAutoRetryConversationIdRef = React.useRef<ConversationId>(null),
    [retryTick, setRetryTick] = React.useState(0),
    resumeConversation = React.useEffectEvent(
      async (resumeConversationId: string) => {
        try {
          setIsResuming(true);
          activeResumeConversationIdRef.current = resumeConversationId;
          let resumeHostId = scope.get(
            conversationHostIdSignal,
            resumeConversationId,
          );
          await sendAppServerRequest("maybe-resume-conversation", {
            hostId: resumeHostId,
            conversationId: resumeConversationId,
            model: null,
            serviceTier: await resolveConversationServiceTier(
              scope,
              resumeHostId,
              activeMode?.settings.model ?? null,
            ),
            reasoningEffort: null,
            workspaceRoots: workspaceRoots ?? [],
            collaborationMode: activeMode,
            showThreadGoalResumeConfirmation: false,
          });
        } catch (error) {
          if (
            (logger.error("Failed to resume conversation", {
              safe: {},
              sensitive: {
                conversationId: resumeConversationId,
                error,
              },
            }),
            activeResumeConversationIdRef.current !== resumeConversationId)
          )
            return;
          let hostId = scope.get(
              conversationRemoteHostIdSignal,
              resumeConversationId,
            ),
            isArchiving =
              hostId == null
                ? false
                : await sendAppServerRequest(
                    "get-is-conversation-archiving-for-host",
                    {
                      hostId,
                      conversationId: resumeConversationId,
                    },
                  );
          if (
            hostId == null ||
            isArchiving ||
            !scope.get(shouldResumeConversationSignal, resumeConversationId)
          ) {
            hasShownResumeErrorRef.current = false;
            return;
          }
          let isSubagentChildThread =
              scope.get(subagentParentThreadIdSignal, resumeConversationId) !=
              null,
            shouldAutoRetry = shouldAutoRetryResumeError(error);
          shouldAutoRetry ||
            (blockedAutoRetryConversationIdRef.current = resumeConversationId);
          shouldShowResumeErrorToast({
            hasShownResumeError: hasShownResumeErrorRef.current,
            isSubagentChildThread,
            shouldAutoRetry,
          }) &&
            (scope
              .get(toastSignal)
              .danger(formatResumeConversationError(intl, error), {
                id: `resume-task-error-${resumeConversationId}`,
              }),
            (hasShownResumeErrorRef.current = true));
          shouldAutoRetry &&
            retryTimerRef.current == null &&
            (retryTimerRef.current = setTimeout(() => {
              retryTimerRef.current = null;
              setRetryTick((currentRetryTick) => currentRetryTick + 1);
            }, 750));
        } finally {
          activeResumeConversationIdRef.current === resumeConversationId &&
            ((activeResumeConversationIdRef.current = null),
            setIsResuming(false));
        }
      },
    );
  return (
    React.useEffect(() => {
      shouldResumeConversation ||
        ((activeResumeConversationIdRef.current = null),
        (hasShownResumeErrorRef.current = false),
        blockedAutoRetryConversationIdRef.current === conversationId &&
          (blockedAutoRetryConversationIdRef.current = null),
        retryTimerRef.current != null &&
          (clearTimeout(retryTimerRef.current),
          (retryTimerRef.current = null)));
    }, [conversationId, shouldResumeConversation]),
    React.useEffect(() => {
      blockedAutoRetryConversationIdRef.current = null;
    }, [conversationId]),
    React.useEffect(() => {
      if (conversationId != null)
        return scope.watch(({ get }) => {
          let hostId = get(conversationRemoteHostIdSignal, conversationId);
          hostId != null &&
            get(subagentParentThreadIdSignal, conversationId) != null &&
            vscodeMessageBridge.dispatchMessage("subagent-thread-opened", {
              hostId,
              conversationId: conversationId,
            });
        });
    }, [conversationId, scope]),
    React.useEffect(() => {
      conversationId &&
        shouldResumeConversation &&
        conversationId !== activeResumeConversationIdRef.current &&
        conversationId !== blockedAutoRetryConversationIdRef.current &&
        resumeConversation(conversationId);
    }, [shouldResumeConversation, conversationId, retryTick]),
    React.useEffect(
      () => () => {
        retryTimerRef.current != null &&
          (clearTimeout(retryTimerRef.current), (retryTimerRef.current = null));
      },
      [],
    ),
    {
      isResuming: shouldResumeConversation && isResuming,
    }
  );
}

export const initResumeLocalConversationChunk = once(() => {
  initScopeRuntime();
  initIntlRuntime();
  initConversationStateSelectors();
  initAppServerRequestBridge();
  initProjectsAppSharedProducer();
  initToastRuntime();
  initProfilePageProducer();
  initVscodeMessageBridge();
  initAppScope();
  initHostWorkspaceQueries();
  initHostConfigHelpers();
  initLoggerRuntime();
});
