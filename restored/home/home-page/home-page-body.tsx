// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Main home page body for extension, browser, and Electron shells.
import React, {
  Suspense,
  useCallback,
  useEffect,
  useEffectEvent,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useIntl } from "../../vendor/react-intl";
import { useAuth } from "../../auth/use-auth";
import {
  useLocation,
  useNavigate,
} from "../../conversations/local-conversation-route-runtime";
import { useOpenUpgradePlan } from "../../settings/upgrade-plan-entry";
import { useFeatureGate } from "../../boundaries/statsig.facade";
import { useWorkspaceOnboardingAutoLaunch } from "../../runtime/current-app-initial/onboarding-select-workspace-current-runtime";
import { ThreadAppShellChrome } from "../../app-shell/thread-app-shell-chrome";
import { HomeAnnouncements } from "../../app-shell/home-announcements";
import { HomeArtifactTemplates } from "../artifact-templates";
import { HomeConversationStarters } from "../home-conversation-starters";
import { HomePrefillArtifactPreview } from "../home-prefill-artifact-preview";
import {
  browserHostIdSignal,
  browserHostInfoSignal,
  buildDiffCommentsPayload,
  clsx as cn,
  currentRouteSignal,
  electronBridgeDispatch,
  EVERYDAY_WORK_DETAIL_LEVEL,
  HomeAmbientSuggestionsContent,
  HomeComposer,
  HomeHeader,
  HomeLogoIcon,
  HomeScrollContainerContext,
  HomeStartActionsBar,
  isHomeSidePanelExpandedSignal,
  isPullRequestSyncEnabledSignal,
  isRemoteProjectPendingSignal,
  isWorkspaceOnboardingExperimentArm,
  LocalConversationStateEffect,
  logWorkspaceOnboardingEvent,
  motionLayoutDiv as MotionDiv,
  motionTransitionConfig,
  normalizeWorkspaceRoot,
  onboardingDefaultProjectName,
  openRemoteProjectModal,
  PlatformGate,
  RemoteConversationStateEffect,
  setDraftConversationId,
  sidePanelSlots,
  threadFooterClassName,
  updateDiffComments,
  getPlanInfo,
  useAccountInfoQuery,
  useAccountsQuery,
  useCurrentUserQuery,
  useDetailLevel,
  useDraftLocation,
  useElectronMessageHandler,
  useGetPricingUrl,
  useHomeComposerKeyboardShortcuts,
  useIsElectron,
  useIsUpgradeEligible,
  useRegisterSidePanelAction,
  useRemoteProjects,
  useSignalValue,
  useStore,
  workspaceContextSignal,
  workspaceGroupsSignal,
  workspaceOnboardingNavigationEvent,
  workspaceRootsSignal,
} from "../../boundaries/onboarding-commons-externals.facade";
import { GetPlusButton } from "./get-plus-button";
import { HomeSwitchWorkspaceCommand } from "./home-switch-workspace-command";

export interface HomePageBodyProps {
  announcementStorybookOverride?: ReactNode;
  routeProjectId: string | null;
}

interface HomeWorkspaceGroup {
  projectId: string;
  projectKind?: string;
  isLocalProject?: boolean;
  repositoryData?: unknown;
  hostId?: string | null;
  label?: string | null;
  path?: string | null;
}

export function HomePageBody({
  announcementStorybookOverride,
  routeProjectId,
}: HomePageBodyProps) {
  const currentRoute = useStore(currentRouteSignal);
  const intl = useIntl();
  const browserHostInfo = useSignalValue(browserHostInfoSignal) as {
    display_name: string;
  };
  const hostId = useSignalValue(browserHostIdSignal) as string;
  const { authMethod, email, planAtLogin } = useAuth();
  const { data: accountsData } = useAccountsQuery() as {
    data?: { accounts?: unknown[] };
  };
  const { data: currentUserData } = useCurrentUserQuery() as {
    data?: { plan_type?: string };
  };
  const isEverydayWorkMode = useDetailLevel() === EVERYDAY_WORK_DETAIL_LEVEL;
  const navigate = useNavigate();
  const isElectron = useIsElectron() as () => boolean;
  const location = useLocation() as {
    key: string;
    state?: {
      hideHomeSuggestionsForCurrentEntry?: boolean;
      pendingLocalProjectPreviousWorkspaceRoot?: string;
      pendingViewAction?: string;
      prefillArtifactPreviewFiles?: unknown[];
      prefillCwd?: string;
      sidebarOnboardingChecklistCompletionOnSubmit?: unknown;
    };
  };
  const locationState = location.state;
  const projectContext = useSignalValue(workspaceContextSignal) as {
    kind: string;
    cwd?: string | null;
  };
  const groups = useSignalValue(workspaceGroupsSignal) as HomeWorkspaceGroup[];
  const isRemoteProjectPending = useSignalValue(
    isRemoteProjectPendingSignal,
  ) as boolean;
  const rootsData = useSignalValue(workspaceRootsSignal) as {
    roots?: string[];
  };
  const isPRSyncEnabled = useSignalValue(
    isPullRequestSyncEnabledSignal,
  ) as boolean;
  const isSidePanelExpanded = useSignalValue(
    isHomeSidePanelExpandedSignal,
  ) as boolean;
  const { data: accountInfoData } = useAccountInfoQuery("account-info", {
    queryConfig: { enabled: authMethod === "chatgpt" },
  }) as { data?: { email?: string; plan?: string } };
  const {
    autoLaunchAction,
    isRemoteHost,
    setWorkspaceOnboardingAutoLaunchApplied,
    workspaceOnboardingExperimentArm,
  } = useWorkspaceOnboardingAutoLaunch() as {
    autoLaunchAction?: string;
    isRemoteHost?: boolean;
    setWorkspaceOnboardingAutoLaunchApplied: (applied: boolean) => void;
    workspaceOnboardingExperimentArm?: unknown;
  };
  const autoLaunchAppliedRef = useRef(false);
  const { isLoading, selectedRemoteProject, selectedRemoteProjectId } =
    useRemoteProjects() as {
      isLoading?: boolean;
      selectedRemoteProject?: {
        id?: string | null;
        hostId?: string | null;
        label?: string | null;
        remotePath?: string | null;
      } | null;
      selectedRemoteProjectId?: string | null;
    };

  const routeValue = currentRoute.value as
    | {
        routeKind?: string;
        projectContext?: { projectId?: string | null } | null;
        clientThreadId?: string | null;
      }
    | undefined;
  const routeContext =
    routeValue?.routeKind === "home" ? routeValue.projectContext : null;
  const pendingProjectId =
    selectedRemoteProjectId ??
    (locationState?.prefillCwd != null &&
    locationState?.pendingLocalProjectPreviousWorkspaceRoot !== undefined &&
    rootsData?.roots?.[0] ===
      locationState.pendingLocalProjectPreviousWorkspaceRoot
      ? locationState.prefillCwd
      : (rootsData?.roots?.[0] ?? null));
  const activeProjectId =
    routeContext?.projectId ?? routeProjectId ?? pendingProjectId;
  const isProjectSelectionPending =
    routeContext == null &&
    routeProjectId == null &&
    (isLoading || (selectedRemoteProjectId == null && isRemoteProjectPending));

  const activeGroup =
    groups.find((group) => group.projectId === activeProjectId) ?? null;
  const homeRunLocationRemoteProject =
    activeGroup?.projectKind === "remote" && activeGroup.hostId != null
      ? {
          id: activeGroup.projectId,
          hostId: activeGroup.hostId,
          label: activeGroup.label,
          remotePath: activeGroup.path,
        }
      : selectedRemoteProject?.id === activeProjectId
        ? selectedRemoteProject
        : null;
  const hasRunLocation =
    (activeGroup != null &&
    (activeGroup.projectKind !== "local" || !activeGroup.isLocalProject)
      ? activeGroup.repositoryData != null
      : projectContext.kind === "git") || homeRunLocationRemoteProject != null;

  const draftLocationId = useDraftLocation({ entrypoint: "home" }) as string;
  const browserConversationId = routeValue?.clientThreadId ?? null;
  const handleLocalConversationCreated = useCallback(
    async (conversationId: string, state: unknown) => {
      updateDiffComments(currentRoute, "diff_comments", (comments: unknown) =>
        buildDiffCommentsPayload({
          sourceConversationId: draftLocationId,
          targetConversationId: conversationId,
          diffComments: comments,
        }),
      );
      setDraftConversationId(currentRoute, {
        conversationId,
        draftThreadLocationId: draftLocationId,
      });
      if (isElectron()) await navigate(`/local/${conversationId}`, { state });
    },
    [currentRoute, draftLocationId, isElectron, navigate],
  );

  const plan =
    currentUserData?.plan_type ?? accountInfoData?.plan ?? planAtLogin;
  const keyboardShortcuts = useHomeComposerKeyboardShortcuts({
    authMethod,
    plan,
    currentAccount: currentUserData,
    accounts: accountsData?.accounts,
  }) as boolean;
  const pricePlan = getPlanInfo(plan)?.pricePlan ?? null;
  const openUpgradePlan = useOpenUpgradePlan();
  const getPricingUrl = useGetPricingUrl({ logExposure: true });
  const showArtifactTemplates =
    useFeatureGate("2425897452") &&
    (useIsUpgradeEligible({
      authMethod,
      email: accountInfoData?.email ?? email,
      plan,
    }) as boolean);
  const showArtifactTemplatesOrV2 =
    useFeatureGate("1857002365") || showArtifactTemplates;

  const workspaceRoot = isRemoteHost
    ? null
    : ((projectContext.cwd != null
        ? normalizeWorkspaceRoot(projectContext.cwd)
        : null) ?? normalizeWorkspaceRoot("~"));
  const showSuggestions =
    locationState?.sidebarOnboardingChecklistCompletionOnSubmit == null &&
    locationState?.hideHomeSuggestionsForCurrentEntry !== true;

  useEffect(() => {
    if (
      autoLaunchAppliedRef.current ||
      autoLaunchAction !== "home_open_picker_or_create_default"
    )
      return;
    autoLaunchAppliedRef.current = true;
    setWorkspaceOnboardingAutoLaunchApplied(true);
    electronBridgeDispatch(
      "electron-onboarding-pick-workspace-or-create-default",
      { defaultProjectName: onboardingDefaultProjectName },
    );
  }, [autoLaunchAction, setWorkspaceOnboardingAutoLaunchApplied]);

  useElectronMessageHandler(
    "electron-onboarding-pick-workspace-or-create-default-result",
    (result: { success: boolean }) => {
      if (!result.success) return;
      if (
        isWorkspaceOnboardingExperimentArm(workspaceOnboardingExperimentArm)
      ) {
        logWorkspaceOnboardingEvent(
          currentRoute,
          workspaceOnboardingNavigationEvent,
          {
            selectedWorkspacesCount: 1,
            totalWorkspacesCount: 0,
            autoNavigated: true,
            experimentArm: workspaceOnboardingExperimentArm,
          },
        );
      }
    },
  );

  const navigateReplacingState = useEffectEvent((state: unknown) => {
    navigate("/", { replace: true, state });
  });
  useEffect(() => {
    if (locationState?.pendingViewAction !== "open-create-remote-project-modal")
      return;
    openRemoteProjectModal({ setActive: true });
    const { pendingViewAction: _viewAction, ...rest } = locationState ?? {};
    navigateReplacingState(rest);
  }, [locationState, navigateReplacingState]);

  useRegisterSidePanelAction((action: unknown) => {
    import("../../app-shell/thread-side-panel-tabs").then(
      ({
        toggleThreadSidePanel,
      }: {
        toggleThreadSidePanel: (scope: unknown, action: unknown) => void;
      }) => {
        toggleThreadSidePanel(currentRoute, action);
      },
    );
  });

  const isSidePanelCollapsed = isPRSyncEnabled && isSidePanelExpanded;
  const upgradeCta = keyboardShortcuts ? (
    <GetPlusButton
      onClick={(event) =>
        openUpgradePlan({
          scope: currentRoute,
          currentPlan: pricePlan,
          defaultTab: "personal",
          event,
          getPricingUrl,
          source: "home_upgrade_cta",
        })
      }
    />
  ) : null;
  const announcement = announcementStorybookOverride ?? <HomeAnnouncements />;
  const [scrollContainer, setScrollContainer] = useState<HTMLElement | null>(
    null,
  );
  const placeholder = intl.formatMessage({
    id: "homePage.composer.placeholder.askAnything",
    defaultMessage: "Do anything",
    description: "Initial placeholder for the new home page composer",
  });

  const composerProps = {
    browserConversationId,
    homeRunLocationRemoteProject,
    onLocalConversationCreated: handleLocalConversationCreated,
    hideRunLocationDropdownOverride: !hasRunLocation,
    hideArtifactPluginSuggestions: true,
    showPlanKeywordSuggestion: false,
    placeholderText: placeholder,
  };

  return (
    <>
      <PlatformGate electron>
        <LocalConversationStateEffect />
        <RemoteConversationStateEffect lastTurnCwd={null} lastTurnDiff={null} />
      </PlatformGate>
      <PlatformGate electron>
        {locationState?.prefillArtifactPreviewFiles?.length > 0 && (
          <HomePrefillArtifactPreview
            hostId={hostId}
            locationKey={location.key}
            previewFiles={locationState.prefillArtifactPreviewFiles}
          />
        )}
      </PlatformGate>
      <PlatformGate extension>
        <HomeHeader />
      </PlatformGate>
      <PlatformGate extension>
        <HomeScrollContainerContext value={scrollContainer}>
          <div
            ref={setScrollContainer}
            className="relative flex h-full flex-col"
          >
            <div
              className="[container-type:size] relative flex w-full flex-1 flex-col items-center justify-center overflow-hidden [container-name:home-main-content]"
              role="main"
            >
              <div className="mx-auto flex w-full max-w-3xl flex-col gap-3 px-panel">
                <PlatformGate electron>
                  <HomeSwitchWorkspaceCommand />
                </PlatformGate>
                <HomeLogoIcon className="pointer-events-none fixed top-[calc(50%_-_55px)] left-1/2 -z-1 h-12 w-12 -translate-x-1/2 -translate-y-1/2 text-token-foreground/20 electron:hidden" />
              </div>
            </div>
            <div
              className={cn(
                threadFooterClassName,
                "relative z-10 -mt-[var(--thread-footer-overlap)] flex flex-col gap-2 pb-2",
              )}
            >
              <div className="home-banners mt-2 flex flex-col gap-2 empty:hidden">
                {announcement}
              </div>
              <PlatformGate extension>
                <HomeComposer
                  className="electron:hidden"
                  hideRunLocationDropdownOverride={
                    projectContext.kind !== "git"
                  }
                  placeholderText={placeholder}
                  hideArtifactPluginSuggestions
                  freeUpsellButton={upgradeCta}
                />
              </PlatformGate>
            </div>
          </div>
        </HomeScrollContainerContext>
      </PlatformGate>
      <PlatformGate browser electron>
        <HomeScrollContainerContext value={scrollContainer}>
          <HomeSwitchWorkspaceCommand />
          <div ref={setScrollContainer} className="relative min-h-0 flex-1">
            <sidePanelSlots.Header>
              <HomeStartActionsBar startActions={upgradeCta} />
            </sidePanelSlots.Header>
            <ThreadAppShellChrome
              browserHostDisplayName={browserHostInfo.display_name}
              conversationId={null}
              threadType="new"
            />
            <div className="h-full min-h-0">
              <div className="@container/left-panel relative flex h-full flex-col">
                <div
                  className={cn(
                    "[container-type:size] relative flex min-h-0 w-full flex-1 flex-col overflow-y-auto [container-name:home-main-content]",
                    false,
                    showArtifactTemplatesOrV2 &&
                      "[scrollbar-gutter:stable_both-edges] [&:has([data-home-artifact-templates])_[data-home-ambient-suggestions]]:hidden",
                  )}
                  role="main"
                >
                  <Suspense fallback={null}>
                    <div className="mx-auto flex h-[39%] w-[min(100%,var(--thread-content-max-width))] min-w-0 shrink-0 flex-col justify-end px-panel pb-6">
                      <HomeAmbientSuggestionsContent
                        activeProjectId={activeProjectId}
                        isEverydayWorkMode={isEverydayWorkMode}
                        isProjectSelectionPending={isProjectSelectionPending}
                        workspaceGroups={groups}
                        projectContext={projectContext}
                      />
                    </div>
                    <div className="sticky top-0 z-10 mx-auto flex w-[min(100%,var(--thread-content-max-width))] min-w-0 flex-col gap-2 px-panel pt-5 electron:bg-token-main-surface-primary">
                      {!isSidePanelCollapsed && (
                        <HomeComposer
                          className="w-full"
                          aboveComposerContent={
                            workspaceRoot == null &&
                            projectContext.cwd != null ? (
                              <HomeConversationStarters
                                activeWorkspaceRoot={projectContext.cwd}
                                hostId={hostId}
                                portalTarget={null}
                              />
                            ) : null
                          }
                          belowComposerContent={
                            showArtifactTemplatesOrV2
                              ? () => <HomeArtifactTemplates />
                              : undefined
                          }
                          externalFooterVariant="home"
                          {...composerProps}
                        />
                      )}
                    </div>
                  </Suspense>
                  {showSuggestions && (
                    <PlatformGate electron>
                      <div className="mx-auto w-[min(100%,var(--thread-content-max-width))] min-w-0 px-panel pt-2 pb-6">
                        <MotionDiv
                          data-home-ambient-suggestions
                          layout="position"
                          transition={motionTransitionConfig}
                          className="h-fit min-h-0 min-w-0 pt-2"
                        >
                          <HomeAmbientSuggestionsContent
                            generatedSuggestionsEnabled={showArtifactTemplates}
                            hostId={hostId}
                            onLocalConversationCreated={
                              handleLocalConversationCreated
                            }
                            plan={plan}
                            projectRoot={workspaceRoot}
                            routeEntryKey={location.key}
                          />
                        </MotionDiv>
                      </div>
                    </PlatformGate>
                  )}
                  <PlatformGate electron>
                    <div className="pointer-events-none absolute inset-x-0 bottom-6 z-20 flex justify-center">
                      <div className="flex w-[min(100%,var(--thread-content-max-width))] min-w-0 px-panel">
                        <div className="home-banners pointer-events-auto flex w-full min-w-0 flex-col gap-2 empty:hidden">
                          {announcement}
                        </div>
                      </div>
                    </div>
                  </PlatformGate>
                </div>
              </div>
            </div>
            {isSidePanelCollapsed && (
              <sidePanelSlots.Footer>
                <HomeComposer
                  composerLayoutMode="auto-single-line"
                  showWorkspaceDropdownInFooter={false}
                  surfaceClassName="electron:dark:bg-token-side-bar-background"
                  {...composerProps}
                />
              </sidePanelSlots.Footer>
            )}
          </div>
        </HomeScrollContainerContext>
      </PlatformGate>
    </>
  );
}
