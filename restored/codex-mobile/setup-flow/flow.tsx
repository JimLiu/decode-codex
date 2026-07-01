// Restored from ref/webview/assets/codex-mobile-setup-flow-XFbY7C-Z.js
// Codex Mobile setup flow UI.
import { useEffect, useRef, useState } from "react";

import { once as runOnce } from "../../runtime/commonjs-interop";
import {
  currentAppInitialSharedCompatSlotDollarLowerS as initTypeScriptHelpersRuntime,
  currentAppInitialSharedCompatSlotUnderscoreLowerC as loadReactRuntime,
  currentAppInitialSharedCompatSlotUpperD as initAppScopeRuntime,
  currentAppInitialSharedCompatSlotUpperE as appScopeRoot,
  currentAppInitialSharedCompatSlotLowerGLowerC as initCurrentSharedCompatRuntime,
  currentAppInitialSharedCompatSlotUpperGLowerO as useScopedValue,
  currentAppInitialSharedCompatSlotUpperGLowerS as initScopedStateRuntime,
  currentAppInitialSharedCompatSlotUpperKLowerO as useRouteScopeContext,
  currentAppInitialSharedCompatSlotLowerLLowerC as initElementFactoryRuntime,
  currentAppInitialSharedCompatSlotLowerQLowerO as useQueryResult,
  currentAppInitialSharedCompatSlotLowerQLowerS as useAtomValueTuple,
  currentAppInitialSharedCompatSlotLowerTLowerC as useMutation,
  currentAppInitialSharedCompatSlotUpperVLowerO as initCurrentSharedRuntime,
} from "../../runtime/current-app-initial/current-app-initial-shared-runtime";
import {
  worktreeNewThreadOrchestratorCompatSlotLowerOLowerT as SetupPageHeader,
  worktreeNewThreadOrchestratorCompatSlotLowerSLowerT as initSetupPageHeaderRuntime,
} from "../../runtime/current-app-initial/worktree-new-thread-orchestrator-runtime";
import {
  worktreeNewThreadQueryCompatSlotLowerILowerS as openExternalUrl,
  worktreeNewThreadQueryCompatSlotLowerNLowerS as initOpenExternalUrlRuntime,
} from "../../runtime/current-app-initial/worktree-new-thread-query-runtime";
import {
  imagePickerSchemaCapabilities as logProductEvent,
  currentAppInitialSharedControlConnectConnectionRuntime as initRemoteControlConnectionRuntime,
  currentAppInitialSharedMember0542 as localRemoteControlHostId,
  parseWorkspaceRootPathList,
  intlFormatDateTimeRuntime as initIntlDateTimeRuntime,
  remoteControlRefreshSourceEnum as initRemoteControlRefreshSourceRuntime,
  currentAppInitialSharedFunction0722 as useLocalStorageSetting,
  currentAppInitialSharedMember0740 as remoteControlHostEnabledSignal,
  currentAppInitialSharedMember0279 as codexMobileSetupStepViewedEvent,
  currentAppInitialSharedDisplayRuntime as initCurrentSharedDisplayRuntime,
  remoteConnectionRuntime0298 as initRemoteConnectionRuntime,
  currentAppInitialSharedMember0781 as useFeatureFlag,
  currentAppInitialSharedRuntime0816 as initCurrentSharedRemoteRuntime,
  openAiNativeAppDefinition as initOpenAiNativeAppRuntime,
  currentAppInitialSharedMember0432 as codexMobileSetupActionEvent,
  currentAppInitialSharedMember0924 as FormattedMessage,
} from "../../runtime/current-app-initial/remote-projects-app-shared-runtime";
import {
  pullRequestNewThreadCompatSlotLowerBLowerT as ensureMfaSetupState,
  pullRequestNewThreadCompatSlotUpperSLowerT as mfaRequirementQuery,
  pullRequestNewThreadCompatSlotUnderscoreLowerT as enrolledRemoteControlClientQuery,
  pullRequestNewThreadCompatSlotLowerXLowerT as mfaSetupCompletedQuery,
  pullRequestNewThreadCompatSlotLowerYLowerT as initMfaRequirementRuntime,
} from "../../runtime/current-app-initial/pull-request-new-thread-runtime";
import {
  initAppgenProjectHeaderChunk,
  AppgenProjectHeader,
} from "../../appgen/project-header";
import {
  isHandledLocalRemoteControlEnableError,
  handleLocalRemoteControlEnableError,
  initLocalRemoteControlErrorHandlingChunk,
} from "../../runtime/current-app-initial/remote-connections-auth-state-runtime";
import {
  CodexMobileSetupBody,
  CodexMobileSetupDialog,
  codexMobileSetupStepDebugOverrideAtom,
  initCodexMobileSetupDialogArtChunk,
  initCodexMobileSetupDialogChunk,
  initCodexMobileSetupStepDebugOverrideChunk,
} from "../setup-dialog";
import { includesMfaSetupRequiredError, initMfaSetupFlowRuntime } from "./mfa";
import {
  filterRemoteControlClientsExceptCurrent,
  hasNewRemoteControlClient,
  initCodexMobileSetupFlowNoopChunk,
  initCodexMobileSetupFlowQueriesChunk,
  pollingRemoteControlClientsQuery,
  remoteControlClientsQuery,
} from "./queries";
import {
  enableRemoteControlForSetup,
  initRemoteControlEnableForSetupChunk,
} from "./remote-control";
import { getSetupStepForHostState } from "./status";
import type {
  CodexMobileSetupFlowProps,
  CodexMobileSetupStep,
  RemoteControlClient,
} from "./types";

interface CodexMobileSetupPageProps {
  onAllowHost: () => void;
  onFinishSetup: () => void;
  onSkip: () => void;
  onStartSetup: () => void;
  setupInProgress: boolean;
  showAllowHostError: boolean;
  showStartSetupError: boolean;
  step: CodexMobileSetupStep;
}

export function CodexMobileSetupFlow({
  initialStep,
  onClose,
  variant,
}: CodexMobileSetupFlowProps) {
  const routeScope = useRouteScopeContext(appScopeRoot);
  const navigate = parseWorkspaceRootPathList();
  const trackedStepRef = useRef<string | null>(null);
  const remoteControlHostEnabled = useScopedValue(
    remoteControlHostEnabledSignal,
    localRemoteControlHostId,
  );
  const [setupStepDebugOverride] = useAtomValueTuple(
    codexMobileSetupStepDebugOverrideAtom,
  );
  const enrolledRemoteControlClient = useQueryResult(
    enrolledRemoteControlClientQuery,
  );
  const [localRemoteControlClientId] = useLocalStorageSetting(
    "local_remote_control_client_id",
  );
  const [manualStep, setManualStep] = useState<CodexMobileSetupStep | null>(
    initialStep ?? null,
  );
  const [existingClientIds, setExistingClientIds] =
    useState<Set<string> | null>(null);
  const hostDerivedStep =
    manualStep ??
    getSetupStepForHostState({
      remoteControlHostEnabled,
      hasEnrolledRemoteControlClient: enrolledRemoteControlClient.data,
    });
  const pollingClientsResult = useScopedValue(
    pollingRemoteControlClientsQuery,
    hostDerivedStep === "waiting",
  );
  const remoteControlClients = filterRemoteControlClientsExceptCurrent(
    pollingClientsResult.data,
    localRemoteControlClientId,
  );
  const resolvedStep =
    hostDerivedStep === "waiting" &&
    (existingClientIds == null
      ? remoteControlClients?.length
      : hasNewRemoteControlClient(remoteControlClients, existingClientIds))
      ? "connected"
      : hostDerivedStep;
  const mfaRequirement = useQueryResult(mfaRequirementQuery);
  const mfaSetupCompleted = useQueryResult(mfaSetupCompletedQuery);
  const visibleStep =
    setupStepDebugOverride === "auto"
      ? hostDerivedStep === "mfa-required" && mfaSetupCompleted.data
        ? "allow-host"
        : resolvedStep
      : setupStepDebugOverride;
  const trackAction = (action: string) => {
    logProductEvent(routeScope, codexMobileSetupActionEvent, {
      action,
      step: visibleStep,
      surface: variant,
    });
  };

  useEffect(() => {
    const stepKey = `${variant}:${visibleStep}`;
    if (trackedStepRef.current === stepKey) return;
    trackedStepRef.current = stepKey;
    logProductEvent(routeScope, codexMobileSetupStepViewedEvent, {
      step: visibleStep,
      surface: variant,
    });
  }, [routeScope, variant, visibleStep]);

  const startSetupMutation = useMutation({
    mutationFn: () => ensureMfaSetupState(routeScope),
    onSuccess: (mfaRequired: boolean) => {
      setManualStep(mfaRequired ? "mfa-required" : "allow-host");
    },
  });
  const allowHostMutation = useMutation({
    mutationFn: async () => {
      await enableRemoteControlForSetup(
        routeScope,
        localRemoteControlHostId,
        true,
      );
      const clientsSnapshot = routeScope.query.snapshot(
        remoteControlClientsQuery,
      );
      await clientsSnapshot.invalidate({ exact: true, refetchType: "none" });
      return clientsSnapshot.fetch();
    },
    onSuccess: (clients: RemoteControlClient[]) => {
      setExistingClientIds(
        new Set(
          filterRemoteControlClientsExceptCurrent(
            clients,
            localRemoteControlClientId,
          )?.map(getRemoteControlClientId),
        ),
      );
      setManualStep("waiting");
    },
    onError: (error: unknown) => {
      handleLocalRemoteControlEnableError(routeScope, error);
    },
  });
  const hasMfaRequiredError = includesMfaSetupRequiredError([
    enrolledRemoteControlClient.error,
    pollingClientsResult.error,
    mfaRequirement.error,
    startSetupMutation.error,
    allowHostMutation.error,
  ]);

  useEffect(() => {
    if (hasMfaRequiredError) navigate("/login", { replace: true });
  }, [hasMfaRequiredError, navigate]);

  const setupInProgress =
    startSetupMutation.isPending ||
    allowHostMutation.isPending ||
    (mfaRequirement.data === "required" && mfaSetupCompleted.isLoading);
  const showAllowHostError =
    allowHostMutation.isError &&
    !isHandledLocalRemoteControlEnableError(allowHostMutation.error);

  if (
    (setupStepDebugOverride === "auto" &&
      manualStep == null &&
      remoteControlHostEnabled &&
      enrolledRemoteControlClient.isLoading) ||
    hasMfaRequiredError
  ) {
    return null;
  }

  const onAllowHost = () => {
    trackAction("allow_host");
    allowHostMutation.mutate();
  };
  const onSkip = () => {
    trackAction("skip");
    onClose();
  };
  const onStartSetup = () => {
    trackAction("start_setup");
    startSetupMutation.mutate();
  };

  if (variant === "dialog") {
    return (
      <CodexMobileSetupDialog
        open={true}
        showAllowHostError={showAllowHostError}
        showStartSetupError={startSetupMutation.isError}
        setupInProgress={setupInProgress}
        step={visibleStep}
        onAllowHost={onAllowHost}
        onOpenChange={(open) => {
          if (!open) onClose();
        }}
        onSkip={onSkip}
        onStartSetup={onStartSetup}
      />
    );
  }

  return (
    <CodexMobileSetupPage
      showAllowHostError={showAllowHostError}
      showStartSetupError={startSetupMutation.isError}
      setupInProgress={setupInProgress}
      step={visibleStep}
      onAllowHost={onAllowHost}
      onFinishSetup={onClose}
      onSkip={onSkip}
      onStartSetup={onStartSetup}
    />
  );
}

function getRemoteControlClientId(client: RemoteControlClient): string {
  return client.clientId;
}

function CodexMobileSetupPage({
  onAllowHost,
  onFinishSetup,
  onSkip,
  onStartSetup,
  setupInProgress,
  showAllowHostError,
  showStartSetupError,
  step,
}: CodexMobileSetupPageProps) {
  const routeScope = useRouteScopeContext(appScopeRoot);
  const isRemoteBrandingEnabled = useFeatureFlag("824038554");
  const navigate = parseWorkspaceRootPathList();
  const trackAction = (action: string) => {
    logProductEvent(routeScope, codexMobileSetupActionEvent, {
      action,
      step,
      surface: "page",
    });
  };
  const pageHeader =
    step === "allow-host" || step === "mfa-required" || step === "waiting" ? (
      <SetupPageHeader.Header>
        <AppgenProjectHeader
          start={
            isRemoteBrandingEnabled ? (
              <FormattedMessage
                id="codexMobile.setupPage.remoteTitle"
                defaultMessage="Set up Remote"
                description="Toolbar title shown during Remote setup"
              />
            ) : (
              <FormattedMessage
                id="codexMobile.setupPage.title"
                defaultMessage="Set up Codex Mobile"
                description="Toolbar title shown during Codex mobile setup"
              />
            )
          }
        />
      </SetupPageHeader.Header>
    ) : null;

  return (
    <>
      {pageHeader}
      <CodexMobileSetupBody
        onAllowHost={onAllowHost}
        onContinueOnChatGPT={(event) => {
          trackAction("continue_on_chatgpt");
          openExternalUrl({
            event,
            href: "https://chatgpt.com/#settings/Security",
            initiator: "open_in_browser_bridge",
          });
        }}
        onFinishSetup={() => {
          trackAction("finish_setup");
          onFinishSetup();
        }}
        onManageConnections={() => {
          trackAction("manage_connections");
          navigate("/settings/connections");
        }}
        onSkip={onSkip}
        onStartSetup={onStartSetup}
        setupInProgress={setupInProgress}
        showAllowHostError={showAllowHostError}
        showStartSetupError={showStartSetupError}
        step={step}
        variant="page"
      />
    </>
  );
}

export const initCodexMobileSetupFlowChunk = runOnce(() => {
  initCurrentSharedCompatRuntime();
  initRemoteControlRefreshSourceRuntime();
  initTypeScriptHelpersRuntime();
  initScopedStateRuntime();
  initCurrentSharedRuntime();
  loadReactRuntime();
  initElementFactoryRuntime();
  initIntlDateTimeRuntime();
  initOpenAiNativeAppRuntime();
  initRemoteControlConnectionRuntime();
  initSetupPageHeaderRuntime();
  initOpenExternalUrlRuntime();
  initRemoteConnectionRuntime();
  initCodexMobileSetupFlowQueriesChunk();
  initCodexMobileSetupFlowNoopChunk();
  initLocalRemoteControlErrorHandlingChunk();
  initRemoteControlEnableForSetupChunk();
  initAppScopeRuntime();
  initCurrentSharedDisplayRuntime();
  initCurrentSharedRemoteRuntime();
  initAppgenProjectHeaderChunk();
  initCodexMobileSetupStepDebugOverrideChunk();
  initCodexMobileSetupDialogChunk();
  initMfaRequirementRuntime();
  initMfaSetupFlowRuntime();
  initCodexMobileSetupDialogArtChunk();
});
