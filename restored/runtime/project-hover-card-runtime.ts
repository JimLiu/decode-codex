// Restored from ref/webview/assets/app-initial~app-main~projects-index-page~local-conversation-page-4SURv8Cr.js
// Boundary facade for project hover card parts and remote connection rows.
import {
  globalSettingKeys,
  normalizeWorkspacePath,
} from "../boundaries/src-l0hb-mz-p";
import { defineMessages } from "./intl-define-messages-runtime";
import { getPathBasename as normalizeTextForCompare } from "./path-basename-runtime";
import { initStringNormalizeRuntime } from "./string-normalize-runtime";

import { initIntlMessageRuntime } from "./intl-message-runtime";

import { initModalRuntime } from "./modal-runtime";

import { useHostConfigById } from "./host-config-runtime";
import { toastSignal as toastControllerSignal } from "./toast-runtime";
import {
  getGlobalStateValue,
  initGlobalStateQueryRuntime,
  setGlobalStateValue,
  useGlobalStateQuery as useGlobalStateQueryRuntime,
} from "./global-state-runtime";

import {
  initPersistentSignalRuntime,
  initReactRuntime,
  createPersistentSignal,
  getChunkModuleExports,
} from "./shared-utility-runtime";

import { initVscodeBridgeRuntime as initVscodeApiBridge } from "./platform-content-runtime";

import {
  initReactQueryRuntime,
  useAppServerMutation,
  useQueryClient,
} from "./app-server-mutation-runtime";
import {
  classNames,
  initAppDialog,
  initButtonComponentPrimitives,
  FormattedMessage,
  GlobeIcon,
  initClassNameRuntime,
  initDialogLayoutComponents,
  initGlobeIcon as initSignalHooksRuntime,
  initIntlRuntime as initReactIntlRuntime,
  initSettingsGearIcon,
  initSpinnerComponent,
  SettingsGearIcon as EditProjectIcon,
  Spinner as ActivityIcon,
  useIntl,
} from "../boundaries/current-ref/appg-thread-shared-producer";
import {
  initProjectHoverCardCurrentRefRuntime,
  LocalProjectFallbackIcon,
  openLocalProjectEditModal,
  ProjectAvatar,
  threadAttentionCountsSignal,
  updateWorkspaceRootLabel,
} from "../boundaries/current-ref/project-hover-card-producer";
import {
  initRemoteConnectionStateChunk,
  initRemoteProjectIconChunk,
  initWaitingStatusIconChunk,
  RemoteProjectIcon,
  useRemoteConnectionState,
  WaitingStatusIcon,
} from "../remote/remote-connection-runtime";
import {
  Gd as initProfileIconsChunk,
  Wd as RowActionChevronIcon,
} from "../vendor/profile-page-runtime";
import { useScope, useSignalValue, useScopedValue } from "./app-scope-hooks";
import { initAppScope, initScopeRuntime, appScope } from "./app-scope-runtime";
import { useRemoteHostConfigs as useSharedObjectRemoteHostConfigs } from "./shared-object-host-runtime";

export type ProjectWritableRoot = {
  kind?: "local";
  label?: string;
  path: string;
};

export type ProjectWritableRootsByProject = Record<
  string,
  ProjectWritableRoot[] | undefined
>;

export type ProjectWritableRootsDisplayOptions = {
  legacyRoot: string | null;
  projectId: string;
  projectWritableRoots: ProjectWritableRootsByProject;
};

function parseProjectWritableRoots(
  value: unknown,
): ProjectWritableRootsByProject {
  if (!isRecord(value)) return {};

  const writableRoots: ProjectWritableRootsByProject = {};
  for (const [projectId, roots] of Object.entries(value)) {
    if (!Array.isArray(roots)) return {};

    const parsedRoots: ProjectWritableRoot[] = [];
    for (const root of roots) {
      if (!isProjectWritableRoot(root)) return {};
      parsedRoots.push({
        kind: "local",
        path: root.path,
        ...(root.label === undefined ? {} : { label: root.label }),
      });
    }
    writableRoots[projectId] = parsedRoots;
  }

  return writableRoots;
}

function getProjectWritableRootsForDisplay(
  options: ProjectWritableRootsDisplayOptions,
): string[] {
  if (Object.hasOwn(options.projectWritableRoots, options.projectId)) {
    return (
      options.projectWritableRoots[options.projectId]?.map(
        (root) => root.path,
      ) ?? []
    );
  }

  return options.legacyRoot == null ? [] : [options.legacyRoot];
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return value != null && typeof value === "object" && !Array.isArray(value);
}

function isProjectWritableRoot(value: unknown): value is ProjectWritableRoot {
  if (!isRecord(value)) return false;
  if (value.kind !== "local") return false;
  if (typeof value.path !== "string") return false;
  return value.label === undefined || typeof value.label === "string";
}

function useRemoteHostConfigs(): unknown[] {
  return (useSharedObjectRemoteHostConfigs() ?? []) as unknown[];
}

function initKeyboardShortcutRuntime(): void {
  // Current ProjectHoverCard no longer initializes the old keyboard-shortcut runtime.
}

function getGlobalSettingValue<TData = unknown>(
  get: unknown,
  key: unknown,
): TData | undefined {
  return getGlobalStateValue<TData>(get, key);
}

async function setGlobalSettingValue(
  scope: unknown,
  key: unknown,
  value: unknown,
  options?: unknown,
): Promise<void> {
  await setGlobalStateValue(scope, key, value, options);
}

function useGlobalStateQuery<TData = unknown>(key: unknown, options?: unknown) {
  return useGlobalStateQueryRuntime<TData>(key, options);
}

function initGlobalSettingsRuntime(): void {
  initGlobalStateQueryRuntime();
}

function initCodexAppFrameRuntime(): void {
  // Current ProjectHoverCard chunk no longer has a separate app-frame initializer.
}

function initButtonRuntime(): void {
  initButtonComponentPrimitives();
}

function initClassNamesRuntime(): void {
  initClassNameRuntime();
}

function initDialogRuntime(): void {
  initAppDialog();
  initDialogLayoutComponents();
}

function initInlinePopoverRuntime(): void {
  initClassNameRuntime();
}

function initLocalProjectActionsRuntime(): void {
  initProjectHoverCardCurrentRefRuntime();
}

function initNotificationRuntime(): void {
  // Current project hover card uses the app-scope toast controller directly.
}

function initPanelRuntime(): void {
  // Current project hover card no longer has a separate panel primitive chunk.
}

function initSvgIconRuntime(): void {
  // SVG icons are restored as plain React components.
}

function initWorkspaceRootLabelRuntime(): void {
  initSettingsGearIcon();
  initProjectHoverCardCurrentRefRuntime();
}

export {
  ActivityIcon,
  appScope,
  classNames,
  createPersistentSignal,
  defineMessages,
  EditProjectIcon,
  FormattedMessage,
  getChunkModuleExports,
  getGlobalSettingValue,
  getProjectWritableRootsForDisplay,
  globalSettingKeys,
  GlobeIcon,
  initAppScope,
  initButtonRuntime,
  initClassNamesRuntime,
  initCodexAppFrameRuntime,
  initDialogRuntime,
  initGlobalSettingsRuntime,
  initGlobalStateQueryRuntime,
  initInlinePopoverRuntime,
  initIntlMessageRuntime,
  initKeyboardShortcutRuntime,
  initLocalProjectActionsRuntime,
  initModalRuntime,
  initNotificationRuntime,
  initPanelRuntime,
  initPersistentSignalRuntime,
  initProfileIconsChunk,
  initReactIntlRuntime,
  initReactQueryRuntime,
  initReactRuntime,
  initRemoteProjectIconChunk as initRemoteConnectionActionsChunk,
  initRemoteConnectionStateChunk,
  initWaitingStatusIconChunk as initRemoteProjectIconChunk,
  initScopeRuntime,
  initSignalHooksRuntime,
  initSpinnerComponent,
  initStringNormalizeRuntime,
  initSvgIconRuntime,
  initVscodeApiBridge,
  initWorkspaceRootLabelRuntime,
  LocalProjectFallbackIcon,
  normalizeTextForCompare,
  normalizeWorkspacePath,
  openLocalProjectEditModal,
  parseProjectWritableRoots,
  ProjectAvatar,
  RemoteProjectIcon,
  RowActionChevronIcon,
  setGlobalSettingValue,
  threadAttentionCountsSignal,
  toastControllerSignal,
  updateWorkspaceRootLabel,
  useAppServerMutation,
  useGlobalStateQuery,
  useHostConfigById,
  useIntl,
  useQueryClient,
  useRemoteConnectionState,
  useRemoteHostConfigs,
  useScope,
  useScopedValue,
  useSignalValue,
  WaitingStatusIcon,
};
