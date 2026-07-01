// Restored from ref/webview/assets/pets-settings-CeDsTNTI.js
// Current pets settings backing bundle with restored dependency imports.

import { useCallback, useMemo, useState, type ReactElement } from "react";
import { once } from "../runtime/commonjs-interop";
import {
  currentAppInitialSharedCompatSlotUnderscore as initObjectRuntime,
  currentAppInitialSharedCompatSlotUpperD as initAppScopeRuntimeChunk,
  currentAppInitialSharedCompatSlotUpperE as appScopeRoot,
  currentAppInitialSharedCompatSlotLowerGLowerC as initReactCompilerRuntime,
  currentAppInitialSharedCompatSlotLowerI as sendHostRequest,
  currentAppInitialSharedCompatSlotUpperKLowerO as useRouteScopeContext,
  currentAppInitialSharedCompatSlotLowerQLowerO as useSignalValue,
  currentAppInitialSharedCompatSlotLowerU as useHostMutation,
  currentAppInitialSharedCompatSlotLowerV as nativeAppMessageBus,
  currentAppInitialSharedCompatSlotUpperVLowerO as initHotkeyWindowRoutingRuntime,
} from "../runtime/current-app-initial/current-app-initial-shared-runtime";
import {
  worktreeNewThreadQueryCompatSlotUpperDLowerM as LoadingSpinnerIcon,
  worktreeNewThreadQueryCompatSlotUpperDLowerN as OpenFolderIcon,
  worktreeNewThreadQueryCompatSlotUpperELowerM as initDialogLayoutRuntime,
  worktreeNewThreadQueryCompatSlotLowerGLowerP as toastControllerSignal,
  worktreeNewThreadQueryCompatSlotLowerHLowerH as initClassNameRuntime,
  worktreeNewThreadQueryCompatSlotLowerLLowerS as PlatformGate,
  worktreeNewThreadQueryCompatSlotLowerMLowerH as classNames,
  worktreeNewThreadQueryCompatSlotLowerMLowerP as initToastControllerRuntime,
  worktreeNewThreadQueryCompatSlotLowerMLowerR as useSkillForceReload,
  worktreeNewThreadQueryCompatSlotUpperOLowerM as initDialogShellRuntime,
  worktreeNewThreadQueryCompatSlotUpperOLowerN as initOpenFolderIconRuntime,
  worktreeNewThreadQueryCompatSlotLowerPLowerR as initSkillForceReloadRuntime,
  worktreeNewThreadQueryCompatSlotLowerQLowerU as formatSkillReference,
  worktreeNewThreadQueryCompatSlotUpperTLowerM as Button,
  worktreeNewThreadQueryCompatSlotLowerULowerS as initPlatformGateRuntime,
  worktreeNewThreadQueryCompatSlotUpperXLowerU as initSkillReferenceFormatterRuntime,
} from "../runtime/current-app-initial/worktree-new-thread-query-runtime";
import {
  currentAppInitialSharedMember0542 as localHostId,
  currentAppInitialSharedMember0097 as avatarOverlayProductEvent,
  analyticsMember0137 as analyticsSignal,
  intlFormatDateTimeRuntime as initIntlFormattingRuntime,
  remoteControlRefreshSourceEnum as initRemoteControlRefreshSourceRuntime,
  currentAppInitialSharedMember0654 as avatarOverlaySource,
  currentAppInitialSharedDisplayRuntime as initDisplayRuntime,
  remoteConnectionRuntime0298 as initRemoteConnectionRuntime,
  currentAppInitialSharedMember0342 as avatarOverlayAction,
  currentAppInitialSharedFunction0375 as useIntl,
  currentAppInitialSharedMember0924 as FormattedMessage,
} from "../runtime/current-app-initial/remote-projects-app-shared-runtime";
import {
  initAvatarOverlayOpenStateChunk as initAvatarOverlayAnalyticsRuntime,
  avatarOverlayAnalytics,
} from "./automations-page-current-runtime";
import { initCodexAvatarChunk, CodexAvatar } from "../utils/codex-avatar";
import {
  pullRequestNewThreadCompatSlotLowerBLowerN as useInvalidateQueryKey,
  pullRequestNewThreadCompatSlotLowerYLowerN as initInvalidateQueryKeyRuntime,
} from "../runtime/current-app-initial/pull-request-new-thread-runtime";
import {
  appMainCurrentCompatSlotUpperFLowerN as SettingsRow,
  appMainCurrentCompatSlotUpperILowerN as initSettingsRowRuntime,
} from "./app-main-current-runtime";
import {
  appgenLibraryHotDjo67r4nCompatSlotUpperH as initSettingsTitleRuntime,
  appgenLibraryHotDjo67r4nCompatSlotLowerILowerR as useStartThreadWithPrefill,
  appgenLibraryHotDjo67r4nCompatSlotLowerNLowerR as initStartThreadWithPrefillRuntime,
  appgenLibraryHotDjo67r4nCompatSlotUpperV as SettingsTitle,
} from "../runtime/current-app-initial/appgen-library-hot-djo67r4n-runtime";
import {
  initRecommendedSkillStatsigOverridesChunk,
  useRecommendedSkillStatsigOverrides,
  getRecommendedSkillStatsigOverride,
} from "../plugins/recommended-skill-statsig-overrides";
import {
  generalAppearanceCurrentCompatSlotLowerD as SettingsCard,
  generalAppearanceCurrentCompatSlotLowerF as initSettingsCardRuntime,
  generalAppearanceCurrentCompatSlotUpperJ as initGeneralAppearanceRuntime,
  generalAppearanceCurrentCompatSlotLowerL as initPathRuntime,
  generalAppearanceCurrentCompatSlotLowerQ as SettingsCardSection,
  generalAppearanceCurrentCompatSlotLowerU as joinPath,
} from "../runtime/current-app-initial/general-appearance-current-runtime";
import {
  initSettingsContentLayoutChunk,
  SettingsContentLayout,
} from "../runtime/current-app-initial/settings-section-layout-runtime";
import {
  DEFAULT_AVATARS,
  initDefaultAvatarDefinitionsChunk,
  useSelectedAvatar,
  initAvatarSelectionStateChunk,
  initCustomAvatarsQueryChunk,
  CUSTOM_AVATARS_QUERY_KEY,
} from "../features/custom-avatars-query";
import {
  avatarOverlayOpenSignal,
  initAvatarOverlayOpenStateChunk,
} from "../features/avatar-overlay-open-state";
import {
  initUseAvatarOptionsChunk,
  useAvatarOptions,
} from "../utils/use-avatar-options";

type AvatarOption = (typeof DEFAULT_AVATARS)[number] & {
  spritesheetUrl?: string;
};

type AnalyticsClient = {
  logProductEvent(eventName: unknown, payload: unknown): void;
};

type ToastController = {
  danger(message: unknown): void;
};

type AppRouteScope = {
  get<TValue>(signal: unknown): TValue;
};

type HostMutationResult = {
  mutate(payload: unknown): void;
};

type InstallRecommendedSkillResult = {
  destination?: string | null;
  error?: string | null;
  success: boolean;
};

type CustomPetsFolderSettingProps = {
  avatarDirectory: string;
};

type PetsSettingsContentProps = {
  avatarDirectory: string | null;
  avatarOptions?: AvatarOption[];
  isCreatingCustomAvatar?: boolean;
  isCustomAvatarLoadError?: boolean;
  isLoadingCustomAvatars?: boolean;
  onCreateCustomAvatar?: () => void;
  onRefreshCustomAvatars?: () => void;
};

type PetsSettingsListProps = Required<
  Pick<
    PetsSettingsContentProps,
    | "isCreatingCustomAvatar"
    | "isCustomAvatarLoadError"
    | "isLoadingCustomAvatars"
  >
> &
  Pick<
    PetsSettingsContentProps,
    | "avatarDirectory"
    | "avatarOptions"
    | "onCreateCustomAvatar"
    | "onRefreshCustomAvatars"
  >;

type AvatarSettingRowProps = {
  avatar: AvatarOption;
  isSelected: boolean;
  onSelectAvatar(avatar: AvatarOption): void;
};

const HATCH_PET_SKILL_ID = "hatch-pet";
const HATCH_PET_REPO_PATH = "skills/.curated/hatch-pet";

function isCustomAvatar(avatar: AvatarOption): boolean {
  return avatar.id.startsWith("custom:");
}

function isDefaultAvatar(avatar: AvatarOption): boolean {
  return !avatar.id.startsWith("custom:");
}

function AvatarPreview({
  avatar,
  className,
  size = "md",
}: {
  avatar?: AvatarOption | null;
  className?: string;
  size?: "md" | "sm";
}): ReactElement {
  const previewSizeClassName = size === "sm" ? "size-8" : "size-16";
  const avatarScaleClassName = size === "sm" ? "scale-[0.42]" : "scale-75";
  const avatarId = avatar?.id ?? "default";

  return (
    <div
      className={classNames(
        "flex shrink-0 items-center justify-center overflow-hidden rounded-lg border border-token-border bg-token-bg-secondary",
        previewSizeClassName,
        className,
      )}
      data-avatar-id={avatarId}
    >
      <CodexAvatar
        assetRef={avatar?.assetRef}
        className={avatarScaleClassName}
        spritesheetUrl={avatar?.spritesheetUrl}
      />
    </div>
  );
}

const initAvatarPreviewRuntime = once(() => {
  initReactCompilerRuntime();
  initClassNameRuntime();
  initCodexAvatarChunk();
});

function CustomPetsFolderSetting({
  avatarDirectory,
}: CustomPetsFolderSettingProps): ReactElement {
  const routeScope = useRouteScopeContext(appScopeRoot) as AppRouteScope;
  const intl = useIntl();
  const showOpenFolderError = useCallback(() => {
    routeScope.get<ToastController>(toastControllerSignal).danger(
      intl.formatMessage({
        id: "settings.pets.custom.openFolderError",
        defaultMessage: "Unable to open pet folder",
        description: "Toast shown when opening the custom pet folder fails",
      }),
    );
  }, [intl, routeScope]);

  const { mutate } = useHostMutation("open-file", {
    onSuccess: (result: { success: boolean }) => {
      if (!result.success) {
        showOpenFolderError();
      }
    },
    onError: showOpenFolderError,
  }) as HostMutationResult;

  const handleOpenFolder = useCallback(() => {
    mutate({
      path: avatarDirectory,
      cwd: null,
      target: "fileManager",
      openMode: "workspace",
    });
  }, [avatarDirectory, mutate]);

  return (
    <SettingsRow
      label={
        <FormattedMessage
          id="settings.pets.custom.title"
          defaultMessage="Custom pets"
          description="Heading for custom pet settings"
        />
      }
      description={
        <span className="font-mono text-xs break-all">{avatarDirectory}</span>
      }
      control={
        <Button color="ghost" onClick={handleOpenFolder} size="toolbar">
          <FormattedMessage
            id="settings.pets.custom.openFolder"
            defaultMessage="Open folder"
            description="Button label to open the local custom pet folder"
          />
          <OpenFolderIcon className="icon-2xs" />
        </Button>
      }
    />
  );
}

const initCustomPetsFolderSettingRuntime = once(() => {
  initReactCompilerRuntime();
  initHotkeyWindowRoutingRuntime();
  initIntlFormattingRuntime();
  initDialogLayoutRuntime();
  initToastControllerRuntime();
  initOpenFolderIconRuntime();
  initAppScopeRuntimeChunk();
  initSettingsRowRuntime();
});

function PetsSettingsContent({
  avatarDirectory,
  avatarOptions = DEFAULT_AVATARS,
  isCreatingCustomAvatar = false,
  isCustomAvatarLoadError = false,
  isLoadingCustomAvatars = false,
  onCreateCustomAvatar,
  onRefreshCustomAvatars,
}: PetsSettingsContentProps): ReactElement {
  return (
    <PlatformGate electron>
      <PetsSettingsList
        avatarDirectory={avatarDirectory}
        avatarOptions={avatarOptions}
        isCreatingCustomAvatar={isCreatingCustomAvatar}
        isCustomAvatarLoadError={isCustomAvatarLoadError}
        isLoadingCustomAvatars={isLoadingCustomAvatars}
        onCreateCustomAvatar={onCreateCustomAvatar}
        onRefreshCustomAvatars={onRefreshCustomAvatars}
      />
    </PlatformGate>
  );
}

function PetsSettingsList({
  avatarDirectory,
  avatarOptions = DEFAULT_AVATARS,
  isCreatingCustomAvatar,
  isCustomAvatarLoadError,
  isLoadingCustomAvatars,
  onCreateCustomAvatar,
  onRefreshCustomAvatars,
}: PetsSettingsListProps): ReactElement {
  const isAvatarOverlayOpen = useSignalValue(avatarOverlayOpenSignal);
  const analytics = useSignalValue(analyticsSignal) as AnalyticsClient;
  const { selectedAvatar, setSelectedAvatarId } =
    useSelectedAvatar(avatarOptions);

  const defaultAvatars = useMemo(
    () => avatarOptions.filter(isDefaultAvatar),
    [avatarOptions],
  );
  const customAvatars = useMemo(
    () => avatarOptions.filter(isCustomAvatar),
    [avatarOptions],
  );

  const logAvatarOverlayAction = useCallback(
    (action: unknown, nextSelectedAvatar: AvatarOption) => {
      analytics.logProductEvent(
        avatarOverlayProductEvent,
        avatarOverlayAnalytics({
          action,
          selectedAvatar: nextSelectedAvatar,
          source: avatarOverlaySource.CODEX_AVATAR_OVERLAY_SOURCE_SETTINGS,
        }),
      );
    },
    [analytics],
  );

  const handleSelectAvatar = useCallback(
    (avatar: AvatarOption) => {
      setSelectedAvatarId(avatar.id);
      logAvatarOverlayAction(
        avatarOverlayAction.CODEX_AVATAR_OVERLAY_ACTION_PET_SELECTED,
        avatar,
      );
    },
    [logAvatarOverlayAction, setSelectedAvatarId],
  );

  const handleCreateCustomAvatar = useCallback(() => {
    if (!onCreateCustomAvatar) {
      return;
    }
    logAvatarOverlayAction(
      avatarOverlayAction.CODEX_AVATAR_OVERLAY_ACTION_CUSTOM_PET_CREATE_STARTED,
      selectedAvatar,
    );
    onCreateCustomAvatar();
  }, [logAvatarOverlayAction, onCreateCustomAvatar, selectedAvatar]);

  const handleToggleAvatarOverlay = useCallback(() => {
    logAvatarOverlayAction(
      isAvatarOverlayOpen
        ? avatarOverlayAction.CODEX_AVATAR_OVERLAY_ACTION_CLOSE_REQUESTED
        : avatarOverlayAction.CODEX_AVATAR_OVERLAY_ACTION_OPEN_REQUESTED,
      selectedAvatar,
    );
    nativeAppMessageBus.dispatchMessage("avatar-overlay-open", {});
  }, [isAvatarOverlayOpen, logAvatarOverlayAction, selectedAvatar]);

  const renderAvatarSettingRow = useCallback(
    (avatar: AvatarOption) => (
      <AvatarSettingRow
        key={avatar.id}
        avatar={avatar}
        isSelected={avatar.id === selectedAvatar.id}
        onSelectAvatar={handleSelectAvatar}
      />
    ),
    [handleSelectAvatar, selectedAvatar.id],
  );

  const customPetsFolderSetting =
    avatarDirectory == null ? null : (
      <CustomPetsFolderSetting avatarDirectory={avatarDirectory} />
    );

  return (
    <section className="flex flex-col gap-[var(--padding-panel)]">
      <SettingsCard>
        <SettingsCard.Content>
          <SettingsCardSection>
            <div className="flex flex-col divide-y divide-token-border bg-token-bg-secondary/20">
              <div className="flex justify-end gap-2 p-3">
                {onCreateCustomAvatar ? (
                  <Button
                    color="secondary"
                    loading={isCreatingCustomAvatar}
                    onClick={handleCreateCustomAvatar}
                    size="toolbar"
                  >
                    <FormattedMessage
                      id="settings.pets.custom.create.title"
                      defaultMessage="Create your own pet"
                      description="Button label for creating a custom Codex pet from settings"
                    />
                  </Button>
                ) : null}
                {onRefreshCustomAvatars ? (
                  <Button
                    color="secondary"
                    onClick={onRefreshCustomAvatars}
                    size="toolbar"
                  >
                    <FormattedMessage
                      id="settings.pets.refresh"
                      defaultMessage="Refresh"
                      description="Button label to refresh custom pets from local manifests"
                    />
                  </Button>
                ) : null}
                <Button
                  color="secondary"
                  onClick={handleToggleAvatarOverlay}
                  size="toolbar"
                >
                  {isAvatarOverlayOpen ? (
                    <FormattedMessage
                      id="settings.personalization.pets.tuckAwayPet"
                      defaultMessage="Tuck Away Pet"
                      description="Button that closes the floating pet overlay"
                    />
                  ) : (
                    <FormattedMessage
                      id="settings.personalization.pets.openPet"
                      defaultMessage="Wake Pet"
                      description="Button that opens the floating pet overlay"
                    />
                  )}
                </Button>
              </div>
              {isLoadingCustomAvatars ? (
                <div className="flex items-center gap-2 p-3 text-sm text-token-text-secondary">
                  <LoadingSpinnerIcon className="icon-xs" />
                  <FormattedMessage
                    id="settings.pets.loadingCustom"
                    defaultMessage="Loading custom pets"
                    description="Message shown while loading custom pet manifests"
                  />
                </div>
              ) : null}
              {isCustomAvatarLoadError ? (
                <div className="p-3 text-sm text-token-text-secondary">
                  <FormattedMessage
                    id="settings.pets.loadCustomError"
                    defaultMessage="Unable to load custom pets"
                    description="Message shown when custom pet manifests fail to load"
                  />
                </div>
              ) : null}
              {customAvatars.map(renderAvatarSettingRow)}
              {defaultAvatars.map(renderAvatarSettingRow)}
              {customPetsFolderSetting}
            </div>
          </SettingsCardSection>
        </SettingsCard.Content>
      </SettingsCard>
    </section>
  );
}

function AvatarSettingRow({
  avatar,
  isSelected,
  onSelectAvatar,
}: AvatarSettingRowProps): ReactElement {
  const handleSelectAvatar = useCallback(() => {
    onSelectAvatar(avatar);
  }, [avatar, onSelectAvatar]);

  return (
    <SettingsRow
      icon={<AvatarPreview avatar={avatar} />}
      label={avatar.displayName}
      description={avatar.description}
      control={
        isSelected ? (
          <Button color="secondary" disabled size="toolbar">
            <FormattedMessage
              id="settings.personalization.avatars.selected"
              defaultMessage="Selected"
              description="Label for the selected avatar"
            />
          </Button>
        ) : (
          <Button color="secondary" size="toolbar" onClick={handleSelectAvatar}>
            <FormattedMessage
              id="settings.personalization.avatars.select"
              defaultMessage="Select"
              description="Button label to select an avatar"
            />
          </Button>
        )
      }
    />
  );
}

const initPetsSettingsListRuntime = once(() => {
  initReactCompilerRuntime();
  initRemoteControlRefreshSourceRuntime();
  initHotkeyWindowRoutingRuntime();
  initIntlFormattingRuntime();
  initAvatarPreviewRuntime();
  initAvatarOverlayAnalyticsRuntime();
  initAvatarOverlayOpenStateChunk();
  initDialogLayoutRuntime();
  initDialogShellRuntime();
  initPlatformGateRuntime();
  initObjectRuntime();
  initRemoteConnectionRuntime();
  initSettingsCardRuntime();
  initSettingsRowRuntime();
  initGeneralAppearanceRuntime();
  initDefaultAvatarDefinitionsChunk();
  initAvatarSelectionStateChunk();
  initCustomPetsFolderSettingRuntime();
});

async function installHatchPetSkill({
  forceReloadSkills,
  skillStatsigOverride,
}: {
  forceReloadSkills: () => Promise<unknown>;
  skillStatsigOverride?: string;
}): Promise<string> {
  const installResult = (await sendHostRequest("install-recommended-skill", {
    params: {
      forceReinstall: true,
      hostId: localHostId,
      installRoot: null,
      repoPath: HATCH_PET_REPO_PATH,
      skillId: HATCH_PET_SKILL_ID,
      skillStatsigOverride,
      source: "bundled",
    },
  })) as InstallRecommendedSkillResult;

  if (!installResult.success || installResult.destination == null) {
    throw Error(installResult.error ?? "Unable to install Hatch Pet");
  }

  await forceReloadSkills();

  return `${formatSkillReference({
    name: HATCH_PET_SKILL_ID,
    path: joinPath(installResult.destination, "SKILL.md"),
  })} create a pet based on what you know about me`;
}

const initInstallHatchPetSkillRuntime = once(() => {
  initPathRuntime();
  initDisplayRuntime();
  initSkillReferenceFormatterRuntime();
});

function PetsSettingsElectronContent(): ReactElement {
  return (
    <PlatformGate electron>
      <PetsSettingsDataSource />
    </PlatformGate>
  );
}

function PetsSettingsDataSource(): ReactElement {
  const routeScope = useRouteScopeContext(appScopeRoot) as AppRouteScope;
  const [isCreatingCustomAvatar, setIsCreatingCustomAvatar] = useState(false);
  const { avatarDirectory, avatarOptions, isError, isLoading } =
    useAvatarOptions();
  const invalidateQueryKey = useInvalidateQueryKey();
  const startThreadWithPrefill = useStartThreadWithPrefill();
  const { forceReload } = useSkillForceReload(undefined, localHostId) as {
    forceReload(): Promise<unknown>;
  };
  const recommendedSkillOverrides = useRecommendedSkillStatsigOverrides();

  const handleCreateCustomAvatar = useCallback(async () => {
    setIsCreatingCustomAvatar(true);
    try {
      startThreadWithPrefill({
        prefillPrompt: await installHatchPetSkill({
          forceReloadSkills: forceReload,
          skillStatsigOverride: getRecommendedSkillStatsigOverride(
            recommendedSkillOverrides,
            HATCH_PET_SKILL_ID,
          ),
        }),
      });
    } catch {
      routeScope
        .get<ToastController>(toastControllerSignal)
        .danger(
          <FormattedMessage
            id="settings.pets.createCustom.error"
            defaultMessage="Unable to start pet creation"
            description="Toast shown when the Hatch Pet skill cannot be installed"
          />,
        );
    } finally {
      setIsCreatingCustomAvatar(false);
    }
  }, [
    forceReload,
    recommendedSkillOverrides,
    routeScope,
    startThreadWithPrefill,
  ]);

  const handleRefreshCustomAvatars = useCallback(() => {
    void invalidateQueryKey(CUSTOM_AVATARS_QUERY_KEY);
  }, [invalidateQueryKey]);

  return (
    <PetsSettingsContent
      avatarDirectory={avatarDirectory}
      avatarOptions={avatarOptions}
      isCreatingCustomAvatar={isCreatingCustomAvatar}
      isCustomAvatarLoadError={isError}
      isLoadingCustomAvatars={isLoading}
      onCreateCustomAvatar={() => {
        void handleCreateCustomAvatar();
      }}
      onRefreshCustomAvatars={handleRefreshCustomAvatars}
    />
  );
}

const initPetsSettingsDataSourceRuntime = once(() => {
  initReactCompilerRuntime();
  initHotkeyWindowRoutingRuntime();
  initIntlFormattingRuntime();
  initToastControllerRuntime();
  initPlatformGateRuntime();
  initStartThreadWithPrefillRuntime();
  initInvalidateQueryKeyRuntime();
  initAppScopeRuntimeChunk();
  initDisplayRuntime();
  initRecommendedSkillStatsigOverridesChunk();
  initSkillForceReloadRuntime();
  initPetsSettingsListRuntime();
  initInstallHatchPetSkillRuntime();
  initCustomAvatarsQueryChunk();
  initUseAvatarOptionsChunk();
});

export function PetsSettings(): ReactElement {
  return (
    <SettingsContentLayout title={<SettingsTitle slug="pets" />}>
      <PetsSettingsElectronContent />
    </SettingsContentLayout>
  );
}

once(() => {
  initReactCompilerRuntime();
  initPetsSettingsDataSourceRuntime();
  initSettingsContentLayoutChunk();
  initSettingsTitleRuntime();
})();
