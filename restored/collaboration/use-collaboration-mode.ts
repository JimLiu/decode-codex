// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Composer collaboration-mode selection (plan/default/...) bound to a conversation or draft.
import { useEffect } from "react";
import { useAtom } from "jotai";
import {
  appScopeA as useAppScopeFamilyValue,
  appScopeX as createAtom,
} from "../boundaries/app-scope";
import { sendAppServerRequest } from "../boundaries/use-host-config.facade";
import { useModelSettingsController } from "../composer/use-model-settings";
import { collaborationModesQuerySignalFamily } from "./collaboration-mode-queries";
import {
  DEFAULT_COLLABORATION_MODE,
  dismissActivePopover,
  logger,
  threadSettingsByIdSignal,
  useEffectEvent,
  useThreadHostContext,
} from "../boundaries/onboarding-commons-externals.facade";

interface CollaborationModeSettings {
  model: string;
  reasoning_effort: string | null;
  developer_instructions: string | null;
}

export interface CollaborationMode {
  mode: string | null;
  settings: CollaborationModeSettings;
}

interface RawCollaborationMode {
  mode: string | null;
  model: string;
  reasoning_effort: string | null;
}

export interface UseCollaborationModeResult {
  modes: CollaborationMode[];
  activeMode: CollaborationMode;
  selectedMode: string;
  getModeForSelection: (mode: string | null) => CollaborationMode;
  setSelectedMode: (mode: string) => void;
  isLoading: boolean;
}

const draftCollaborationModeAtom = createAtom<string | null>(null);

export function useCollaborationMode(
  conversationId?: string | null,
  explicitMode?: CollaborationMode | null,
): UseCollaborationModeResult {
  const resolvedConversationId =
    conversationId === undefined ? null : conversationId;
  const explicit = explicitMode === undefined ? null : explicitMode;

  const threadSettings = useAppScopeFamilyValue(
    threadSettingsByIdSignal,
    resolvedConversationId,
  ) as CollaborationMode | null;
  const threadHostContext = useThreadHostContext(resolvedConversationId);
  const { modelSettings } = useModelSettingsController(resolvedConversationId);
  const [draftMode, setDraftMode] = useAtom(draftCollaborationModeAtom);
  const hostId = threadHostContext.getHostId();
  const { data: collaborationModes, isFetching } = useAppScopeFamilyValue(
    collaborationModesQuerySignalFamily,
    hostId,
  ) as { data: RawCollaborationMode[] | undefined; isFetching: boolean };

  const fallbackMode: CollaborationMode = {
    mode: DEFAULT_COLLABORATION_MODE,
    settings: {
      model: modelSettings.model,
      reasoning_effort: modelSettings.reasoningEffort,
      developer_instructions: null,
    },
  };
  const isReady = !isFetching && !modelSettings.isLoading;
  const selectedMode = threadSettings?.mode ?? draftMode ?? "default";

  const modes: CollaborationMode[] = (collaborationModes ?? []).flatMap(
    (mode) => {
      if (mode.mode == null) return [];
      return [
        {
          mode: mode.mode,
          settings: {
            model: modelSettings.model,
            reasoning_effort: modelSettings.reasoningEffort,
            developer_instructions: null,
          },
        },
      ];
    },
  );
  const activeModeBase =
    explicit ??
    threadSettings ??
    modes.find((item) => item.mode === selectedMode) ??
    fallbackMode;

  const getModeForSelection = (mode: string | null): CollaborationMode =>
    (mode ? modes.find((item) => item.mode === mode) : null) ?? fallbackMode;

  const setSelectedMode = (mode: string) => {
    dismissActivePopover();
    if (resolvedConversationId) {
      try {
        sendAppServerRequest("update-thread-settings-for-next-turn", {
          conversationId: resolvedConversationId,
          threadSettings: { collaborationMode: getModeForSelection(mode) },
        }).catch((error: unknown) => {
          logger.error("Failed to set collaboration mode", {
            safe: { conversationId: resolvedConversationId },
            sensitive: { error },
          });
        });
      } catch (error) {
        logger.error("Failed to set collaboration mode", {
          safe: { conversationId: resolvedConversationId },
          sensitive: { error },
        });
      }
      return;
    }
    setDraftMode(mode);
  };

  const ensureValidSelection = () => {
    const nextMode =
      modes.find((item) => item.mode === selectedMode)?.mode ?? "default";
    if (nextMode !== selectedMode) setSelectedMode(nextMode);
  };
  const ensureValidSelectionEvent = useEffectEvent(ensureValidSelection);
  useEffect(() => {
    if (isReady && modes.length > 0) ensureValidSelectionEvent();
  }, [modes, isReady]);

  const activeMode: CollaborationMode = {
    ...activeModeBase,
    settings: {
      ...activeModeBase.settings,
      model: modelSettings.model,
      reasoning_effort: modelSettings.reasoningEffort,
    },
  };

  return {
    modes,
    activeMode,
    selectedMode,
    getModeForSelection,
    setSelectedMode,
    isLoading: !isReady,
  };
}
