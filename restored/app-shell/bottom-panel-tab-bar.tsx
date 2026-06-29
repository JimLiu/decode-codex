// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Pane-height tab bar for the bottom panel, wiring its after-list / sticky / empty
// state slots into the shared app-shell tab container.
import { AppShellTabs } from "./app-shell-tabs";
import { bottomAppShellTabController } from "./app-shell-tab-controller";
import {
  bottomPanelAfterListSignal,
  bottomPanelAfterListStickySignal,
  bottomPanelEmptyStateSignal,
  useSignalValue,
} from "../boundaries/onboarding-commons-externals.facade";

export function BottomPanelTabBar() {
  const afterList = useSignalValue(bottomPanelAfterListSignal);
  const afterListSticky = useSignalValue(bottomPanelAfterListStickySignal);
  const emptyState = useSignalValue(bottomPanelEmptyStateSignal);
  return (
    <AppShellTabs
      headerHeight="pane"
      afterList={afterList}
      afterListSticky={afterListSticky}
      emptyState={emptyState}
      controller={bottomAppShellTabController}
    />
  );
}
