// Restored from ref/webview/assets/hotkey-window-thread-page-DGErqu4u.js
// Current hotkey window thread page backing bundle with restored dependency imports.

import type { ReactElement } from "react";
import { once } from "../runtime/commonjs-interop";
import {
  currentAppInitialSharedCompatSlotLowerGLowerC as initReactCompilerRuntime,
  currentAppInitialSharedCompatSlotUpperGLowerO as useScopedSignalValue,
  currentAppInitialSharedCompatSlotUpperJLowerT as buildHotkeyWindowConversationPath,
  currentAppInitialSharedCompatSlotUpperKLowerO as useRouteScopeContext,
  currentAppInitialSharedCompatSlotUpperO as initReactRuntime,
  currentAppInitialSharedCompatSlotLowerQLowerO as useQuery,
  currentAppInitialSharedCompatSlotUpperQLowerT as buildHotkeyWindowHomePath,
  currentAppInitialSharedCompatSlotUpperVLowerO as initHotkeyWindowRoutingRuntime,
} from "../runtime/current-app-initial/current-app-initial-shared-runtime";
import {
  worktreeNewThreadOrchestratorCompatSlotUpperRLowerF as initWorktreeNewThreadOrchestratorRuntime,
  worktreeNewThreadOrchestratorCompatSlotLowerZLowerF as localConversationTitleByIdSignal,
} from "../runtime/current-app-initial/worktree-new-thread-orchestrator-runtime";
import {
  currentAppInitialSharedMember0084 as Navigate,
  reactRouterRouteScopeParentRuntime as initReactRouterRouteScopeRuntime,
  intlFormatDateTimeRuntime as initIntlFormattingRuntime,
  currentAppInitialSharedMember0194 as useHotkeyThreadRouteParams,
  appServerDisconnectedAppServerSignal as initAppServerDisconnectedSignal,
  reactRouterMember0297 as reactRouterRouteScopeParent,
  currentAppInitialSharedFunction0375 as useIntl,
  currentAppInitialSharedMember0874 as conversationWorkspaceRootByIdSignal,
  openAiNativeAppDefinition as initOpenAiNativeAppDefinition,
} from "../runtime/current-app-initial/remote-projects-app-shared-runtime";
import {
  appgenLibraryHotDjo67r4nCompatSlotDollarLowerN as initWorkspaceRootLabelFormatterRuntime,
  appgenLibraryHotDjo67r4nCompatSlotUpperQLowerN as formatWorkspaceRootLabel,
} from "../runtime/current-app-initial/appgen-library-hot-djo67r4n-runtime";
import {
  launcherHotkeyStateQuery,
  initLauncherHotkeyStateChunk,
} from "../features/hotkey-window-state";
import {
  initHotkeyWindowDetailLayoutChunk,
  useHotkeyWindowDetailLayout,
} from "../utils/use-hotkey-window-detail-layout";
import {
  initLocalConversationHeartbeatAutomationThreadStateReporter,
  initLocalConversationStreamRoleProductEventReporter,
  LocalConversationHeartbeatAutomationThreadStateReporter,
  LocalConversationStreamRoleProductEventReporter,
} from "../conversations/local-conversation-stream-role-product-event";
import {
  initLocalConversationThreadChunk,
  usePinnedSummaryPanelLayout,
  initLocalConversationArtifacts,
  LocalConversationThread,
} from "../conversations/local-conversation-thread";

export function HotkeyWindowThreadPage(): ReactElement {
  const routeScope = useRouteScopeContext(reactRouterRouteScopeParent);
  const intl = useIntl();
  const { conversationId } = useHotkeyThreadRouteParams();
  const { data: launcherHotkeyState } = useQuery(launcherHotkeyStateQuery);
  const hasConfiguredHotkey =
    launcherHotkeyState == null || launcherHotkeyState.configuredHotkey != null;
  const homePath = buildHotkeyWindowHomePath(hasConfiguredHotkey);
  const conversationTitle = useScopedSignalValue(
    localConversationTitleByIdSignal,
    conversationId ?? null,
  );
  const conversationWorkspaceRoot = useScopedSignalValue(
    conversationWorkspaceRootByIdSignal,
    conversationId ?? null,
  );
  const workspaceLabel = formatWorkspaceRootLabel(
    conversationWorkspaceRoot ?? null,
  );

  usePinnedSummaryPanelLayout(routeScope);

  const detailLayout =
    conversationId == null
      ? null
      : {
          title: (
            <div className="flex max-w-full min-w-0 items-baseline gap-2">
              <div className="min-w-0 shrink-[999] truncate text-token-foreground">
                {conversationTitle ??
                  intl.formatMessage({
                    id: "hotkeyWindow.defaultTitle",
                    defaultMessage: "Codex",
                    description:
                      "Fallback title for hotkey window thread header",
                  })}
              </div>
              {workspaceLabel == null ? null : (
                <div className="flex shrink-0 items-center gap-1 whitespace-nowrap text-token-description-foreground">
                  <span className="truncate">{workspaceLabel}</span>
                </div>
              )}
            </div>
          ),
          mainWindowPath: buildHotkeyWindowConversationPath(conversationId),
        };
  useHotkeyWindowDetailLayout(detailLayout);

  if (!conversationId) {
    return <Navigate to={homePath} replace />;
  }

  return (
    <>
      <LocalConversationStreamRoleProductEventReporter
        conversationId={conversationId}
      />
      <LocalConversationHeartbeatAutomationThreadStateReporter
        conversationId={conversationId}
      />
      <div className="h-full [--padding-panel:calc(var(--padding-panel-base)/2)]">
        <LocalConversationThread
          conversationId={conversationId}
          allowMissingConversation={true}
          showExternalFooter={true}
        />
      </div>
    </>
  );
}

once(() => {
  initReactCompilerRuntime();
  initHotkeyWindowRoutingRuntime();
  initReactRuntime();
  initIntlFormattingRuntime();
  initOpenAiNativeAppDefinition();
  initAppServerDisconnectedSignal();
  initLocalConversationHeartbeatAutomationThreadStateReporter();
  initLocalConversationStreamRoleProductEventReporter();
  initLocalConversationThreadChunk();
  initWorktreeNewThreadOrchestratorRuntime();
  initReactRouterRouteScopeRuntime();
  initWorkspaceRootLabelFormatterRuntime();
  initLocalConversationArtifacts();
  initLauncherHotkeyStateChunk();
  initHotkeyWindowDetailLayoutChunk();
})();
