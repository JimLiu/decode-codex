// Restored from ref/webview/assets/app-prefetch-impl-DeWg99La.js
// App prefetch implementation with restored dependency imports.
import { useEffect } from "react";

type PrefetchDependencyMapper = {
  (dependencyIndexes: number[]): string[];
  f?: string[];
};

const mapPrefetchDependencies: PrefetchDependencyMapper = (
  dependencyIndexes: number[],
  mapperState = mapPrefetchDependencies,
  dependencyPaths = mapperState.f ||
    (mapperState.f = [
      "./local-conversation-page-B5rs1it6.js",
      "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js",
      "./rolldown-runtime-Czos8NxU.js",
      "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js",
      "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js",
      "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js",
      "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~ozr5a6hk-DZC70s11.js",
      "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-Dlqz5rpw.css",
      "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-page~remote-con~di269h6j-DHWk0JvV.js",
      "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~o4ivuipr-BWGR4LZw.js",
      "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~appgen-publication-terms-ro~g0k1g2bt-B6jrUW_u.js",
      "./app-initial~app-main~worktree-init-v2-page~appgen-publication-terms-route~remote-conversati~miz7p5nt-CsT6xjQV.js",
      "./app-initial~app-main~remote-conversation-page~pull-requests-page~plugin-detail-page~new-thr~ny8xzqbh-ClcWSvU7.js",
      "./app-initial~app-main~worktree-init-v2-page~appgen-page~remote-conversation-page~pull-reques~l0drf339-C-9b569O.js",
      "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~jolrh1c9-UBdbdM9i.js",
      "./app-initial~app-main~worktree-init-v2-page~appgen-publication-terms-route~remote-conversati~cldi24d6-B1D9-E0F.js",
      "./app-initial~app-main~worktree-init-v2-page~appgen-page~remote-conversation-page~pull-reques~nkffpfmw-D-g_ABJu.js",
      "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-VB3xvGLa.css",
      "./app-initial~app-main~onboarding-page-CgNc-Bk2.js",
      "./app-initial~app-main~onboarding-page~mermaid-diagram~xychartDiagram-PRI3JC2R~timeline-defin~dcen2xty-ZWKQ4q6W.js",
      "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~onboarding-page~hotkey-~h422e2ym-Dd6oN7BA.js",
      "./app-initial~app-main~agent-settings-D9wGrgBN.js",
      "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~n1rtl5kd-C_XgdDHQ.js",
      "./app-initial~app-main~remote-conversation-page~onboarding-page~settings-page~hotkey-window-t~hw2afr7f-DWOAvpOn.js",
      "./app-initial~app-main~remote-conversation-page~onboarding-page~hotkey-window-thread-page~bro~cpd0gmdw-wUhQKbLV.js",
      "./app-initial~app-main~onboarding-page-IPvMcdBI.css",
      "./app-initial~app-main~remote-conversation-page~projects-index-page-px21igmO.js",
      "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js",
      "./app-initial~app-main~projects-index-page~local-conversation-page-HgUkvfGN.js",
      "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~settings-page~appgen-li~oiv69xe5-CLPVtyft.js",
      "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~fjhbmao5-BWbJojtu.js",
      "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~fjhbmao5-D3jrmUOb.css",
      "./app-initial~app-main~pets-settings~appearance-settings~general-settings-DKOJ5iv-.js",
      "./app-initial~app-main~remote-conversation-page~onboarding-page~hotkey-window-thread-page~app~c482ypdv-D1zCejbw.js",
      "./app-initial~app-main~pets-settings~appearance-settings~general-settings-H4NGgmRi.css",
      "./app-initial~app-main~local-conversation-page-D-F_r9ay.js",
      "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~mhwq036p-DS9KwK15.js",
      "./app-initial~app-main~onboarding-page~select-workspace-page-BQtGPtqt.js",
      "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~settings-page~appgen-li~h99fup20-DznNRiiU.js",
      "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~mubih9a1-DOO64ycY.js",
      "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-DEWBne1j.css",
      "./app-initial~app-main~remote-conversation-page~pull-requests-page~projects-index-page~hotkey~ek7ayrmo-CFM_IGPy.js",
      "./app-initial~app-main~remote-conversation-page~projects-index-page~hotkey-window-thread-page~n4ikpxgm-MU61VBEm.js",
      "./app-initial~app-main~appgen-page~remote-conversation-page~projects-index-page~appgen-librar~clc2xu64-CruLP2Hm.js",
      "./app-initial~app-main~remote-conversation-page~projects-index-page-Bj9zvK4d.css",
      "./app-initial~app-main~automations-page-Bc0ZtIBr.js",
      "./app-initial~app-main~page-CMEx4JDW.js",
      "./app-initial~app-main~home-ambient-suggestions-content-C1TXIiPK.js",
      "./app-initial~app-main~appgen-publication-terms-route~plugin-detail-page~skills-settings~plug~bpqstr7s-XDX4n0xi.js",
      "./app-initial~app-main~login-route~codex-mobile-page~remote-connections-settings-CsI-U3JO.js",
      "./app-initial~app-main~appgen-settings-page~appgen-page~appgen-library-page-hS325QiU.js",
      "./app-initial~app-main~hotkey-window-thread-page~automations-page~local-conversation-page-CnYocBk6.js",
      "./app-initial~app-main~pets-settings-CPYQX7qb.js",
      "./app-initial~app-main~pet-install-modal-host~avatar-overlay-page~avatar-overlay-native-page~~s9e72i2g-DsW4BsRC.js",
      "./app-initial~app-main~debug-window-page~agent-settings~debug-modal-Baq5IrGF.js",
      "./app-initial~app-main~remote-conversation-page~pull-requests-page~hotkey-window-thread-page~~b9vznyj4-Cs4hWsvd.js",
      "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~keyboard-shortcuts-~n7jwlpf0-BaxBxQFI.js",
      "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~thread-app-shell-ch~ecjwgenq-_p4PfxvN.js",
      "./app-initial~app-main~remote-conversation-page~local-conversation-page-Dj0nNLPv.js",
      "./app-initial~app-main~remote-conversation-page~hotkey-window-detail-layout~local-conversation-page-BnkJ2KOs.js",
      "./app-initial~app-main~personalization-settings~appearance-settings~general-settings-Qj6SXl5X.js",
      "./app-initial~app-main~remote-conversation-page~hotkey-window-worktree-init-page~hotkey-windo~kjl2gxhu-DXs0ueRP.js",
      "./app-initial~app-main~appgen-library-page-BfbI4bIH.js",
      "./app-initial~app-main~select-workspace-page-DMB-jExv.js",
      "./app-initial~app-main~remote-conversation-page~projects-index-page~hotkey-window-thread-page~o5l7nhuo-DnNHJk2m.js",
      "./app-initial~app-main~new-thread-panel-page-mHfWlM6S.js",
      "./app-initial~app-main~first-run~new-thread-panel-page-BZcGQjmi.js",
      "./app-initial~app-main~onboarding-page~pending-request-item-panel~home-ambient-suggestions-content-B1ROILfQ.js",
      "./app-initial~app-main~onboarding-page~pending-request-item-panel-B2KHEzKZ.js",
      "./app-initial~app-main~remote-conversation-page~thread-app-shell-chrome~local-conversation-page-BYNuwa4z.js",
      "./app-initial~app-main~onboarding-page~profile-CFRY9Eda.js",
      "./app-initial~app-main~settings-page~open-source-licenses-page~skills-settings~plugins-settin~cxbtmbfc-Bhanoo2P.js",
      "./app-initial~app-main~remote-conversation-page~appgen-library-page~local-conversation-page-DAngUxdy.js",
      "./app-initial~app-main~appgen-page~remote-conversation-page~projects-index-page~appgen-librar~i4jkvfhy-C3t3vyRs.js",
      "./app-initial~app-main~worktree-init-v2-page~hotkey-window-worktree-init-page~local-conversation-page-BwSKiuwm.js",
      "./app-initial~app-main~automations-page-DPOLxV_j.css",
      "./local-conversation-stream-role-product-event-Dx3HoaAZ.js",
      "./local-conversation-thread-BvhTyO40.js",
      "./artifact-file-preview-icon-tUwFASV6.js",
      "./share-invite-autocomplete-Bqz_EmsG.js",
      "./local-remote-dropdown-BT-TSjGN.js",
      "./git-branch-switcher-BtVZYs2f.js",
      "./git-submodule-paths-query-BqRPUZJD.js",
      "./use-codex-worktrees-DzKC3qS4.js",
      "./dock-BXG1fB9e.js",
      "./use-git-config-value-Bbxa9eSu.js",
      "./header-CF6ECAV2.js",
      "./pull-request-check-rows-D_pDNxZg.js",
      "./local-environments-utils-Y1qAyZiR.js",
      "./play-outline-DDngKAbi.js",
      "./star-DXYFsF9O.js",
      "./team-CK2eAy16.js",
      "./thread-overflow-menu-sWCLw7OA.js",
      "./thread-virtualizer-tFKjdFLY.js",
      "./thread-scroll-layout-lROgzP0x.js",
      "./thread-scroll-controller-context-value-C-Inw11x.js",
      "./use-debug-panel-CdyuStw9.js",
      "./thread-app-shell-chrome-CEI45G4c.js",
      "./use-media-query-BNTymZCj.js",
      "./worktree-init-v2-page-DUo6BdJ9.js",
      "./thread-side-panel-tabs-DDAJVj-n.js",
    ]),
) => dependencyIndexes.map((index) => dependencyPaths[index]);
import { once as runOnce } from "../runtime/commonjs-interop";
import {
  currentAppInitialSharedCompatSlotLowerALowerR,
  currentAppInitialSharedCompatSlotUpperDLowerT as isWorkspaceCwdEnabled,
  currentAppInitialSharedCompatSlotUpperFLowerN,
  currentAppInitialSharedCompatSlotUpperGLowerO as useCurrentAppInitialQuery,
  currentAppInitialSharedCompatSlotLowerH,
  currentAppInitialSharedCompatSlotUpperILowerR as preloadDynamicRoute,
  currentAppInitialSharedCompatSlotLowerM as prefetchStaleTimes,
  currentAppInitialSharedCompatSlotUpperO,
  currentAppInitialSharedCompatSlotLowerQLowerO as useCurrentSignalValue,
  currentAppInitialSharedCompatSlotUpperVLowerO,
} from "../runtime/current-app-initial/current-app-initial-shared-runtime";
import {
  worktreeNewThreadQueryCompatSlotUpperBLowerC as prefetchWorkspaceMarketplaceQuery,
  worktreeNewThreadQueryCompatSlotDollarLowerC as threadSidePanelPrefetchEnabledSignal,
  worktreeNewThreadQueryCompatSlotLowerCLowerL,
  worktreeNewThreadQueryCompatSlotLowerGLowerS,
  worktreeNewThreadQueryCompatSlotLowerHLowerS as workspaceAvailabilityQuerySignal,
  worktreeNewThreadQueryCompatSlotLowerILowerC,
  worktreeNewThreadQueryCompatSlotUpperILowerF,
  worktreeNewThreadQueryCompatSlotUpperJLowerF,
  worktreeNewThreadQueryCompatSlotUpperLLowerF as useAuthMethodQuery,
  worktreeNewThreadQueryCompatSlotUpperNLowerC,
  worktreeNewThreadQueryCompatSlotUpperNLowerF,
  worktreeNewThreadQueryCompatSlotUpperPLowerF as getWorktreeQueryScope,
  worktreeNewThreadQueryCompatSlotUpperQLowerC,
  worktreeNewThreadQueryCompatSlotLowerSLowerC as useWorkspaceDirectoryPrefetch,
  worktreeNewThreadQueryCompatSlotLowerSLowerL as workspacePreferencesQuerySignal,
  worktreeNewThreadQueryCompatSlotUpperYLowerF as pinnedWorktreeIdsSignal,
  worktreeNewThreadQueryCompatSlotLowerZLowerC as useWorkspaceMarketplacePrefetch,
} from "../runtime/current-app-initial/worktree-new-thread-query-runtime";
import {
  currentAppInitialSharedMember0051 as activeHostIdSignal,
  currentAppInitialSharedMember0124 as useAppgenProjectAccessQuery,
  workspaceWatchRepoUnwatchSignal,
  appServerErrorSchema,
  appServerDisconnectedAppServerSignal,
  currentAppInitialSharedMember0781 as useFeatureGateEnabled,
  currentAppInitialSharedRuntime0816,
  appgenProjectAccessSchemas,
  currentAppInitialSharedMember0403 as buildQueryStaleTimeOptions,
  workspaceCwdHostConfigFunction,
} from "../runtime/current-app-initial/remote-projects-app-shared-runtime";
import {
  pullRequestNewThreadCompatSlotUpperBLowerT,
  pullRequestNewThreadCompatSlotLowerDLowerN,
  pullRequestNewThreadCompatSlotUnderscoreLowerN as workspaceRootsQuerySignal,
  pullRequestNewThreadCompatSlotLowerNLowerN as pullRequestRepositoryQuerySignal,
  pullRequestNewThreadCompatSlotLowerQLowerT as pullRequestPreferencesQuerySignal,
  pullRequestNewThreadCompatSlotLowerRLowerN as workspaceCwdSignal,
  pullRequestNewThreadCompatSlotLowerULowerN as hostConfigQuerySignal,
  pullRequestNewThreadCompatSlotUpperWLowerT,
} from "../runtime/current-app-initial/pull-request-new-thread-runtime";
import {
  openThreadBrowserSidePanelTab,
  openThreadBrowserSidePanelTabWithPendingState,
  appMainCurrentCompatSlotUpperNLowerP,
  appMainCurrentCompatSlotUnderscoreLowerP,
  appMainCurrentCompatSlotUpperPLowerP,
  appMainCurrentCompatSlotUpperRLowerL,
  appMainCurrentCompatSlotLowerVLowerP,
  appMainCurrentCompatSlotLowerZLowerL,
} from "../vendor/app-main-current-runtime";
import {
  gitConfigValueCurrentCompatSlotLowerA,
  gitConfigValueCurrentCompatSlotLowerI,
} from "../runtime/current-app-initial/git-config-value-current-runtime";
import {
  initAppgenAccessQueryRuntimeChunk,
  appgenAccessStatusSignal,
} from "../runtime/current-app-initial/appgen-access-query-runtime";
import {
  useGitConfigValue,
  initUseGitConfigValueChunk,
} from "../utils/use-git-config-value";
import {
  initGitSubmodulePathsQueryChunk,
  gitSubmodulePathsQuerySignal,
} from "../github/git-submodule-paths-query";
function useGitSubmodulePathsPrefetch(
  cwd: string | null | undefined,
  hostConfig: unknown,
  operationSource: string,
  queryOptions: Record<string, unknown>,
) {
  const normalizedCwd = cwd ?? null;
  const staleTimeOptions = buildQueryStaleTimeOptions(
    queryOptions,
    prefetchStaleTimes.ONE_MINUTE,
  );
  const queryParams = {
    cwd: normalizedCwd,
    hostConfig,
    operationSource,
    ...staleTimeOptions,
  };
  return useCurrentAppInitialQuery(gitSubmodulePathsQuerySignal, queryParams);
}
const initGitSubmodulePrefetchRuntime = runOnce(() => {
    currentAppInitialSharedCompatSlotUpperVLowerO();
    currentAppInitialSharedCompatSlotLowerH();
    workspaceWatchRepoUnwatchSignal();
    initGitSubmodulePathsQueryChunk();
  }),
  initSyncedBranchPrefetchRuntime = runOnce(() => {
    currentAppInitialSharedCompatSlotLowerH();
    gitConfigValueCurrentCompatSlotLowerA();
    const syncedBranchConfig = gitConfigValueCurrentCompatSlotLowerI({
      method: "synced-branch",
      getParams: (request: { root: string; operationSource: string }) => ({
        cwd: request.root,
        operationSource: request.operationSource,
      }),
      getOptions: () => ({
        staleTime: prefetchStaleTimes.FIVE_SECONDS,
      }),
    });
    syncedBranchFromCwdQuerySignal = syncedBranchConfig.fromCwd$;
  });
let syncedBranchFromCwdQuerySignal: unknown;

function useSyncedBranchPrefetch(
  cwd: string | null | undefined,
  hostConfig: unknown,
  operationSource: string,
) {
  const worktreeQueryScope = getWorktreeQueryScope();
  const normalizedCwd = cwd ?? null;
  const queryEnabled = isWorkspaceCwdEnabled(normalizedCwd, worktreeQueryScope);
  const queryParams = {
    cwd: normalizedCwd,
    enabled: queryEnabled,
    hostConfig,
    operationSource,
  };
  return useCurrentAppInitialQuery(syncedBranchFromCwdQuerySignal, queryParams);
}
const initSyncedBranchPrefetchHooks = runOnce(() => {
  currentAppInitialSharedCompatSlotUpperVLowerO();
  currentAppInitialSharedCompatSlotUpperO();
  worktreeNewThreadQueryCompatSlotUpperNLowerF();
  initSyncedBranchPrefetchRuntime();
});
export function appPrefetchImpl(): null {
  useEffect(() => {
    preloadDynamicRoute(
      () => import("../conversations/local-conversation-page"),
      mapPrefetchDependencies([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
        38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55,
        56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73,
        74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91,
        92, 93, 94, 95, 96, 97, 98, 99,
      ]),
      import.meta.url,
    ).catch(() => undefined);
  }, []);
  useCurrentSignalValue(threadSidePanelPrefetchEnabledSignal) &&
    preloadDynamicRoute(
      () => import("./thread-side-panel-tabs"),
      mapPrefetchDependencies([
        100, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25,
      ]),
      import.meta.url,
    ).catch(() => undefined);
  const activeHostId = useCurrentSignalValue(activeHostIdSignal);
  const { authMethod, isLoading } = useAuthMethodQuery();
  const hostConfig = useCurrentAppInitialQuery(
    hostConfigQuerySignal,
    activeHostId,
  );
  const isWorkspaceAvailable =
    useCurrentAppInitialQuery(workspaceAvailabilityQuerySignal, {
      hostConfig,
      operationSource: "startup_prefetch",
    }).data?.available === true;
  const workspaceRootsQuery = useCurrentAppInitialQuery(
    workspaceRootsQuerySignal,
    {
      hostId: activeHostId,
    },
  );
  const currentWorkspaceCwd = useCurrentSignalValue(workspaceCwdSignal);
  const prefetchableWorkspaceCwd = isWorkspaceCwdEnabled(
    currentWorkspaceCwd,
    getWorktreeQueryScope(),
  )
    ? currentWorkspaceCwd
    : null;
  useCurrentSignalValue(pinnedWorktreeIdsSignal);
  useCurrentSignalValue(appMainCurrentCompatSlotUnderscoreLowerP);
  useCurrentAppInitialQuery(workspacePreferencesQuerySignal, activeHostId);
  workspaceCwdHostConfigFunction(
    currentWorkspaceCwd,
    hostConfig,
    "startup_prefetch",
    {
      enabled: isWorkspaceAvailable,
      watchForGitInit: true,
    },
  );
  openThreadBrowserSidePanelTabWithPendingState(
    currentWorkspaceCwd,
    hostConfig,
    "startup_prefetch",
    {
      enabled: isWorkspaceAvailable,
    },
  );
  appMainCurrentCompatSlotLowerZLowerL(
    currentWorkspaceCwd,
    hostConfig,
    "startup_prefetch",
    {
      enabled: isWorkspaceAvailable,
    },
  );
  useGitSubmodulePathsPrefetch(
    currentWorkspaceCwd,
    hostConfig,
    "startup_prefetch",
    {
      enabled: isWorkspaceAvailable,
    },
  );
  useGitConfigValue(
    isWorkspaceAvailable ? prefetchableWorkspaceCwd : null,
    hostConfig,
    currentAppInitialSharedCompatSlotUpperFLowerN,
    "worktree",
    "startup_prefetch",
  );
  useSyncedBranchPrefetch(
    isWorkspaceAvailable ? prefetchableWorkspaceCwd : null,
    hostConfig,
    "startup_prefetch",
  );
  useCurrentAppInitialQuery(pullRequestNewThreadCompatSlotUpperBLowerT, {
    authMethod,
    hostId: activeHostId,
  });
  useCurrentAppInitialQuery(pullRequestPreferencesQuerySignal, activeHostId);
  appMainCurrentCompatSlotUpperPLowerP({
    hostId: activeHostId,
  });
  useCurrentAppInitialQuery(pullRequestRepositoryQuerySignal, activeHostId);
  useWorkspaceDirectoryPrefetch({
    hostId: activeHostId,
  });
  const workspaceRoots = workspaceRootsQuery.data?.roots ?? [];
  const rootsReady = !isLoading && workspaceRootsQuery.isFetched;
  useWorkspaceMarketplacePrefetch(activeHostId, workspaceRoots, {
    enabled: rootsReady,
  });
  const isSharedWithMePrefetchEnabled = useFeatureGateEnabled("1269116100");
  const marketplacePrefetchEnabled =
    rootsReady && isSharedWithMePrefetchEnabled;
  return (
    useWorkspaceMarketplacePrefetch(activeHostId, workspaceRoots, {
      enabled: marketplacePrefetchEnabled,
      additionalMarketplaceKinds: ["shared-with-me"],
    }),
    prefetchWorkspaceMarketplaceQuery({
      enabled: marketplacePrefetchEnabled,
      hostId: activeHostId,
      marketplaceKind: "shared-with-me",
    }),
    prefetchWorkspaceMarketplaceQuery({
      enabled: marketplacePrefetchEnabled,
      hostId: activeHostId,
      marketplaceKind: "workspace-directory",
    }),
    useAppgenProjectAccessQuery({
      enabled: useCurrentSignalValue(appgenAccessStatusSignal) === "available",
    }),
    null
  );
}
runOnce(() => {
  currentAppInitialSharedCompatSlotUpperVLowerO();
  currentAppInitialSharedCompatSlotUpperO();
  appServerDisconnectedAppServerSignal();
  initAppgenAccessQueryRuntimeChunk();
  appgenProjectAccessSchemas();
  worktreeNewThreadQueryCompatSlotUpperILowerF();
  worktreeNewThreadQueryCompatSlotUpperJLowerF();
  worktreeNewThreadQueryCompatSlotUpperQLowerC();
  worktreeNewThreadQueryCompatSlotLowerGLowerS();
  initUseGitConfigValueChunk();
  openThreadBrowserSidePanelTab();
  appMainCurrentCompatSlotUpperRLowerL();
  appServerErrorSchema();
  initGitSubmodulePrefetchRuntime();
  initSyncedBranchPrefetchHooks();
  worktreeNewThreadQueryCompatSlotUpperNLowerF();
  worktreeNewThreadQueryCompatSlotUpperNLowerC();
  worktreeNewThreadQueryCompatSlotLowerILowerC();
  appMainCurrentCompatSlotLowerVLowerP();
  pullRequestNewThreadCompatSlotUpperWLowerT();
  worktreeNewThreadQueryCompatSlotLowerCLowerL();
  appMainCurrentCompatSlotUpperNLowerP();
  pullRequestNewThreadCompatSlotLowerDLowerN();
  currentAppInitialSharedRuntime0816();
  currentAppInitialSharedCompatSlotLowerALowerR();
})();
