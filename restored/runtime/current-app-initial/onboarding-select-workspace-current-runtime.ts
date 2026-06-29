// Restored from ref/webview/assets/app-initial~app-main~onboarding-page~select-workspace-page-BQtGPtqt.js
// Onboarding and workspace-onboarding state aliases for the select workspace flow.
import {
  initOnboardingStateChunk,
  initOnboardingStateStorageKeysChunk,
} from "../../onboarding/onboarding-state";
import { initWorkspaceOnboardingControllerChunk } from "../../onboarding/workspace-onboarding-controller";
import { initWorkspaceOnboardingExperimentChunk } from "../../onboarding/workspace-onboarding-experiment";
import { initUseIsRemoteHostChunk } from "../../utils/use-is-remote-host";

export {
  hasCompletedProjectlessOnboardingSignal,
  hideFirstNewThreadOnboardingPromosAtom,
  hideGoogleTilesDebugOverrideSignal,
  homepageOnboardingTilesDebugOverrideAtom,
  initOnboardingStateChunk,
  initOnboardingStateStorageKeysChunk,
  isBeforeWorkspaceExperimentCutoff,
  lastCompletedOnboardingAtom,
  lastCompletedOnboardingStorageKey,
  onboardingMailProviderDebugOverrideSignal,
  onboardingOverrideAtom,
  onboardingPluginChecklistActiveAtom,
  pluginSuggestionsV2EnabledAtCompletionAtom,
  primaryRuntimeInstallReadyAtom,
  primaryRuntimeInstallRequestedAtom,
  projectlessOnboardingCompletedAtom,
  projectlessOnboardingCompletedStorageKey,
  shouldHideFirstNewThreadOnboardingPromos,
  welcomeOnboardingPendingAtom,
  welcomeV2OnboardingStorageKey,
  welcomeV2RoleStateAtom,
  workspaceExperimentAssignmentAtom,
  workspaceOnboardingAutolaunchAppliedAtom,
} from "../../onboarding/onboarding-state";
export {
  getWorkspaceOnboardingPlaygroundName,
  shouldShowDirectWorkspacePicker,
  useTeenOnboardingEligibility,
  useWorkspaceOnboardingAutoLaunch,
  useWorkspaceOnboardingExperiment,
} from "../../onboarding/workspace-onboarding-controller";
export {
  initWorkspaceOnboardingExperimentChunk,
  isDirectFolderPickerArm,
  isModalCopyCtaPlaygroundArm,
  WORKSPACE_ONBOARDING_EXPERIMENT_ID,
  WORKSPACE_ONBOARDING_PLAYGROUND_NAME,
  WORKSPACE_ONBOARDING_V2_ARM,
} from "../../onboarding/workspace-onboarding-experiment";
export {
  initUseIsRemoteHostChunk,
  useIsRemoteHost,
} from "../../utils/use-is-remote-host";

export function initOnboardingSelectWorkspaceCurrentRuntimeChunk(): void {
  initOnboardingStateChunk();
  initWorkspaceOnboardingControllerChunk();
  initWorkspaceOnboardingExperimentChunk();
  initUseIsRemoteHostChunk();
  initOnboardingStateStorageKeysChunk();
}
