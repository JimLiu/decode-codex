// Restored from ref/webview/assets/codex-mobile-page-CB-Xg-VQ.js
// Semantic Codex Mobile page route body.
import { useCallback, useMemo, useState, type ReactElement } from "react";

import { once as runOnce } from "../runtime/commonjs-interop";
import {
  currentAppInitialSharedCompatSlotLowerALowerC as useQueryResult,
  currentAppInitialSharedCompatSlotUpperD as initAppScopeRuntimeChunk,
  currentAppInitialSharedCompatSlotUpperE as appScopeRoot,
  currentAppInitialSharedCompatSlotLowerGLowerC as initCurrentSharedCompatRuntime,
  currentAppInitialSharedCompatSlotUpperGLowerO as useScopedSignalValue,
  currentAppInitialSharedCompatSlotUpperGLowerS as initScopedSignalRuntime,
  currentAppInitialSharedCompatSlotUpperKLowerO as useRouteScopeContext,
  currentAppInitialSharedCompatSlotLowerQLowerS as useAtomState,
  currentAppInitialSharedCompatSlotDollarLowerS as initTypeScriptHelpersRuntime,
  currentAppInitialSharedCompatSlotUpperVLowerO as initCurrentSharedRuntime,
} from "../runtime/current-app-initial/current-app-initial-shared-runtime";
import {
  worktreeNewThreadOrchestratorCompatSlotLowerOLowerT as appShellLayout,
  worktreeNewThreadOrchestratorCompatSlotLowerSLowerT as initAppShellLayoutRuntime,
} from "../runtime/current-app-initial/worktree-new-thread-orchestrator-runtime";
import {
  currentAppInitialSharedMember0542 as localHostId,
  parseWorkspaceRootPathList as useNavigate,
  currentAppInitialSharedControlConnectConnectionRuntime as initRemoteControlConnectionRuntime,
  currentAppInitialSharedMember0686 as remoteControlStatusSignal,
  currentAppInitialSharedDisplayRuntime as initDisplayRuntime,
  openAiNativeAppDefinition as initOpenAiNativeAppDefinition,
} from "../runtime/current-app-initial/remote-projects-app-shared-runtime";
import {
  pullRequestNewThreadCompatSlotLowerVLowerT as createMfaSetupRequiredQuery,
  pullRequestNewThreadCompatSlotLowerYLowerT as initMfaSetupRequiredQueryRuntime,
} from "../runtime/current-app-initial/pull-request-new-thread-runtime";
import {
  CodexMobileReadyPage,
  codexMobileSetupStepDebugOverrideAtom,
  initCodexMobileSetupDialogArtChunk,
  initCodexMobileSetupStepDebugOverrideChunk,
} from "./setup-dialog";
import {
  CodexMobileSetupFlow,
  getInitialCodexMobileSetupStep,
  initCodexMobileSetupFlowChunk,
  initMfaSetupFlowRuntime,
  shouldShowCodexMobileSetupFlow,
} from "./setup-flow";
import type {
  CodexMobileSetupStepOverride,
  RemoteControlStatus,
} from "./setup-flow";

interface CodexMobileSetupContentProps {
  isMfaSetupRequiredError: boolean;
  isMfaSetupRequiredFetching: boolean;
  mfaSetupRequired: boolean;
  remoteControlStatus: RemoteControlStatus;
  setupStepDebugOverride: CodexMobileSetupStepOverride;
}

interface RemoteControlStatusSnapshot {
  status: RemoteControlStatus;
}

const MainContentLayout = appShellLayout.MainContentLayout;

export function CodexMobilePage(): ReactElement | null {
  const routeScope = useRouteScopeContext(appScopeRoot);
  const remoteControlStatus = useScopedSignalValue(
    remoteControlStatusSignal,
    localHostId,
  ) as RemoteControlStatusSnapshot | null;
  const [setupStepDebugOverride] = useAtomState(
    codexMobileSetupStepDebugOverrideAtom,
  );
  const mfaSetupRequiredQuery = useMemo(
    () => createMfaSetupRequiredQuery(routeScope),
    [routeScope],
  );
  const {
    data: mfaSetupRequired,
    isError: isMfaSetupRequiredError,
    isFetching: isMfaSetupRequiredFetching,
    isPending,
  } = useQueryResult(mfaSetupRequiredQuery);

  if (isPending || remoteControlStatus == null) {
    return null;
  }

  return (
    <CodexMobileSetupContent
      isMfaSetupRequiredError={isMfaSetupRequiredError}
      isMfaSetupRequiredFetching={isMfaSetupRequiredFetching}
      mfaSetupRequired={mfaSetupRequired}
      remoteControlStatus={remoteControlStatus.status}
      setupStepDebugOverride={setupStepDebugOverride}
    />
  );
}

function CodexMobileSetupContent({
  isMfaSetupRequiredError,
  isMfaSetupRequiredFetching,
  mfaSetupRequired,
  remoteControlStatus,
  setupStepDebugOverride,
}: CodexMobileSetupContentProps): ReactElement | null {
  const navigate = useNavigate();
  const [initialRemoteControlStatus] = useState(remoteControlStatus);
  const handleClose = useCallback(() => {
    navigate("/");
  }, [navigate]);
  const handleManageConnections = useCallback(() => {
    navigate("/settings/connections");
  }, [navigate]);

  if (isMfaSetupRequiredFetching) {
    return null;
  }

  if (
    shouldShowCodexMobileSetupFlow({
      isMfaSetupRequiredError,
      mfaSetupRequired,
      initialRemoteControlStatus,
      remoteControlStatus,
      setupStepDebugOverride,
    })
  ) {
    const initialStep = getInitialCodexMobileSetupStep({
      isMfaSetupRequiredError,
      mfaSetupRequired,
      remoteControlStatus,
    });

    return (
      <>
        <MainContentLayout layout="full-bleed" />
        <CodexMobileSetupFlow
          initialStep={initialStep}
          onClose={handleClose}
          variant="page"
        />
      </>
    );
  }

  return (
    <>
      <MainContentLayout layout="full-bleed" />
      <CodexMobileReadyPage onManageConnections={handleManageConnections} />
    </>
  );
}

const initCodexMobilePageChunk = runOnce(() => {
  initCurrentSharedCompatRuntime();
  initTypeScriptHelpersRuntime();
  initScopedSignalRuntime();
  initCurrentSharedRuntime();
  initOpenAiNativeAppDefinition();
  initRemoteControlConnectionRuntime();
  initAppShellLayoutRuntime();
  initAppScopeRuntimeChunk();
  initDisplayRuntime();
  initCodexMobileSetupStepDebugOverrideChunk();
  initCodexMobileSetupFlowChunk();
  initMfaSetupRequiredQueryRuntime();
  initMfaSetupFlowRuntime();
  initCodexMobileSetupDialogArtChunk();
});

initCodexMobilePageChunk();
