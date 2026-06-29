// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// App-shell tab container: pairs a tab strip with the active tab's panel, showing
// a provisioning placeholder until the workspace is ready and an error fallback
// when a panel fails to render. Tab content is pinned on first interaction.
import type { ReactNode } from "react";
import { createContext, memo, useContext } from "react";
import { FormattedMessage } from "../vendor/react-intl";
import { Button } from "../ui/button";
import { AppShellTabStrip } from "./app-shell-tab-strip";
import { projectPreviewTabs } from "./app-shell-tab-reorder";
import {
  appStoreScope,
  appShellPanelDragContext,
  useAppScope,
  useSignalValue,
  useAppShellTabState,
  TabPanelErrorBoundary,
  workspaceProvisioningStateSignal,
} from "../boundaries/onboarding-commons-externals.facade";
import type {
  AppShellStore,
  AppShellTabController,
  AppShellTabRecord,
} from "./app-shell-tab-controller/types";

export const appShellTabPanelContext = createContext<unknown>(null);

const TAB_PREVIEW_PIN_EXEMPT_ATTRIBUTE = "data-tab-preview-pin-exempt";

function isPinExemptEvent(event: Event): boolean {
  return event
    .composedPath()
    .some(
      (target) =>
        target instanceof Element &&
        target.hasAttribute(TAB_PREVIEW_PIN_EXEMPT_ATTRIBUTE),
    );
}

interface TabPanelRenderErrorProps {
  onRetry: () => void;
}

function TabPanelRenderError({ onRetry }: TabPanelRenderErrorProps) {
  return (
    <div className="flex h-full min-h-0 flex-col items-center justify-center gap-3 p-4 text-center text-sm text-token-text-secondary">
      <div className="font-medium text-token-text-primary">
        <FormattedMessage
          id="appShell.tabPanelRenderError.title"
          defaultMessage="Tab content couldn't render"
          description="Error message shown when an app shell tab panel fails to render"
        />
      </div>
      <Button color="secondary" size="default" onClick={onRetry}>
        <FormattedMessage
          id="appShell.tabPanelRenderError.retry"
          defaultMessage="Try again"
          description="Button label to retry rendering an app shell tab panel"
        />
      </Button>
    </div>
  );
}

interface AppShellTabPanelProps {
  controller: AppShellTabController;
  tab: AppShellTabRecord;
}

const AppShellTabPanel = memo(function AppShellTabPanel({
  controller,
  tab,
}: AppShellTabPanelProps) {
  const store = useAppScope(appStoreScope) as AppShellStore;
  useAppShellTabState(controller.tabStateById$, tab.tabId);
  const handlePinInteraction = (event: React.SyntheticEvent) => {
    if (isPinExemptEvent(event.nativeEvent)) return;
    if (tab.isPreview) controller.pinTab(store, tab.tabId);
  };
  return (
    <div
      role="tabpanel"
      aria-label={tab.title}
      data-app-shell-tab-panel-controller={controller.panelId}
      data-tab-id={tab.tabId}
      tabIndex={-1}
      onKeyDownCapture={handlePinInteraction}
      onPointerDownCapture={handlePinInteraction}
      className="relative min-h-0 flex-1 outline-none"
    >
      <TabPanelErrorBoundary
        name="AppShellTabPanel"
        resetKey={tab.tabId}
        fallback={(boundary: { resetError: () => void }) => (
          <TabPanelRenderError
            onRetry={() => {
              boundary.resetError();
            }}
          />
        )}
      >
        {tab.renderPanel(store, () => {
          controller.closeTab(store, tab.tabId);
        })}
      </TabPanelErrorBoundary>
    </div>
  );
});

export interface AppShellTabsProps {
  afterList?: ReactNode;
  afterListSticky?: ReactNode;
  beforeList?: ReactNode;
  emptyState?: ReactNode;
  headerHeight: "toolbar" | "pane";
  controller: AppShellTabController;
}

export function AppShellTabs({
  afterList,
  afterListSticky,
  beforeList,
  emptyState,
  headerHeight,
  controller,
}: AppShellTabsProps) {
  const tabs = useSignalValue<AppShellTabRecord[]>(controller.tabs$);
  const activeTab = useSignalValue<AppShellTabRecord | null>(
    controller.activeTab$,
  );
  const activeTabReactKey = useSignalValue<string>(
    controller.activeTabReactKey$,
  );
  const provisioningState = useSignalValue<string>(
    workspaceProvisioningStateSignal,
  );
  const dragState = useContext(appShellPanelDragContext)?.dragState ?? null;
  const previewTabs = projectPreviewTabs(tabs, controller, dragState);
  const isWorkspaceReady = provisioningState === "ready";
  const showActiveTab =
    activeTab != null &&
    (isWorkspaceReady || activeTab.requiresWorkspaceReady === false);
  const activeTabId = activeTab?.tabId ?? null;

  const strip = (
    <AppShellTabStrip
      height={headerHeight}
      activeTabId={activeTabId}
      after={afterList}
      afterSticky={afterListSticky}
      before={beforeList}
      controller={controller}
      tabs={previewTabs}
      workspaceReady={isWorkspaceReady}
    />
  );

  let panel: ReactNode;
  if (showActiveTab && activeTab != null) {
    panel = (
      <AppShellTabPanel
        key={activeTabReactKey}
        controller={controller}
        tab={activeTab}
      />
    );
  } else if (isWorkspaceReady) {
    panel = <div className="relative min-h-0 flex-1">{emptyState}</div>;
  } else {
    panel = (
      <div className="flex min-h-0 flex-1 items-center justify-center p-4 text-center text-sm text-token-text-secondary">
        <FormattedMessage
          id="appShell.tabPanel.worktreeProvisioning"
          defaultMessage="Available when the worktree is ready"
          description="Placeholder shown instead of tab content while a worktree is being provisioned"
        />
      </div>
    );
  }

  return (
    <div
      data-app-shell-tabs="true"
      className="isolate flex h-full min-h-0 flex-col bg-token-main-surface-primary [contain:layout_paint]"
    >
      {strip}
      {panel}
    </div>
  );
}
