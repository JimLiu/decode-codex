// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Imperative command that opens (or focuses) a workspace "file source" tab in a
// split panel: resolves the target tab controller, builds the tab chrome
// (icon, title, tooltip, context menu, default state), and wires file-selection
// recursion so picking a file from the side panel re-opens it in the same panel.
//
// NOTE: store/controller/host helpers, atoms and tab utilities below are
// intra-chunk modules of the same Rolldown commons chunk, imported from the
// boundary facade with readable aliases until their dedicated modules are
// promoted into restored/. Wiring is provisional.
import { createElement } from "react";
import { FileSourceTab, type FileSourceTabProps } from "./file-source-tab";
import {
  useStore,
  routeAtom,
  intlAtom,
  resolveTabController,
  findTabPanelForTab,
  getWorkspaceCwd,
  getFileIconComponent,
  formatWorkspacePathTooltip,
  trackRecentlyOpenedFile,
  syncOpenTabs as syncOpenTabsForStore,
  buildFileTabContextMenuItems,
  defaultFileTabState,
  setFileTreeOpen,
  basename,
  FILE_TAB_KIND_PREFIX,
  type AppStore,
  type FileTabController,
} from "../boundaries/onboarding-commons-externals.facade";

interface FileTabState {
  scrollLeft?: number | null;
  scrollTop?: number | null;
}

interface SelectFileOptions {
  isPreview?: boolean;
}

type SelectFileHandler = (
  store: AppStore,
  path: string,
  options?: SelectFileOptions,
) => void;

export interface OpenFileTabOptions {
  activate?: boolean;
  controller?: FileTabController;
  endLine?: number | null;
  hostId?: string | null;
  icon?: React.ReactNode;
  isPreview?: boolean;
  line?: number | null;
  resetTabState?: boolean;
  syncOpenTabs?: boolean;
  target?: "left" | "right";
  tabId?: string;
  title?: string;
  workspaceRoot?: string | null;
}

interface FileSourceTabHostProps {
  cwd: string | null;
  hostId: string | null;
  initialEndLine?: number | null;
  initialLine?: number | null;
  onSelectFile: SelectFileHandler;
  path: string | null;
  setTabState?: FileSourceTabProps["setTabState"];
  tabId: string;
  tabState?: FileSourceTabProps["tabState"];
  workspaceRoot: string | null;
}

function FileSourceTabHost(props: FileSourceTabHostProps) {
  const {
    cwd,
    hostId,
    initialEndLine,
    initialLine,
    onSelectFile,
    path,
    setTabState,
    tabId,
    tabState,
    workspaceRoot,
  } = props;
  const store = useStore(routeAtom);
  const handleSelectFile = (
    selectedPath: string,
    options?: SelectFileOptions,
  ) => {
    onSelectFile(store, selectedPath, options);
  };
  return (
    <FileSourceTab
      cwd={cwd}
      hostId={hostId ?? undefined}
      initialEndLine={initialEndLine}
      initialLine={initialLine}
      onSelectFile={handleSelectFile}
      path={path}
      setTabState={setTabState}
      tabId={tabId}
      tabState={tabState}
      workspaceRoot={workspaceRoot}
    />
  );
}

export function openFileTab(
  store: AppStore,
  path: string | null,
  options: OpenFileTabOptions = {},
): void {
  const {
    activate = true,
    controller: providedController,
    endLine,
    hostId = "local",
    icon,
    isPreview,
    line,
    resetTabState = false,
    syncOpenTabs = true,
    target = "right",
    tabId,
    title,
    workspaceRoot,
  } = options;

  const resolvedTabId =
    tabId ??
    (hostId == null ? `file:${path ?? ""}` : `file:${hostId}:${path ?? ""}`);
  const controller =
    providedController ??
    resolveTabController(findTabPanelForTab(store, resolvedTabId) ?? target);
  const existingTab = store.get(controller.tabById$, resolvedTabId);
  const cwd = getWorkspaceCwd(store);
  const intl = store.get(intlAtom);
  const defaultTitle =
    title ??
    intl.formatMessage({
      id: "review.fileSource.browser.tabTitle",
      defaultMessage: "Open file",
      description:
        "Title for a workspace file tab before a file has been selected",
    });
  const FileIcon = getFileIconComponent(path ?? undefined);
  const tooltip =
    path == null ? defaultTitle : formatWorkspacePathTooltip({ cwd, path });

  if (path != null) {
    trackRecentlyOpenedFile(store, { cwd, hostId, path });
  }

  const handleClose = (closeStore: AppStore, panelId: string) => {
    syncOpenTabsForStore(closeStore, {
      excludeTab: { panelId, tabId: resolvedTabId },
    });
  };

  const buildHostProps = (
    tabController: FileTabController,
  ): FileSourceTabHostProps => ({
    cwd,
    path,
    hostId,
    tabId: resolvedTabId,
    workspaceRoot: workspaceRoot ?? null,
    onSelectFile: (selectStore, selectedPath, selectOptions) => {
      openFileTab(selectStore, selectedPath, {
        controller: tabController,
        hostId,
        isPreview: path == null ? false : selectOptions?.isPreview,
        workspaceRoot,
      });
      if (path == null) {
        tabController.closeTab(selectStore, resolvedTabId);
      }
    },
    initialLine: line,
    initialEndLine: endLine,
  });

  controller.openTab(store, FileSourceTabHost, {
    contextMenuItems:
      path == null
        ? undefined
        : (menuStore: AppStore) =>
            buildFileTabContextMenuItems(menuStore, { cwd, hostId, path }),
    defaultState: defaultFileTabState,
    icon: icon ?? createElement(FileIcon, { className: "icon-xs shrink-0" }),
    isPreview,
    kind: `${FILE_TAB_KIND_PREFIX}${hostId}`,
    onActivate:
      path == null
        ? (activateStore: AppStore) => {
            setFileTreeOpen(activateStore, true, { animate: false });
          }
        : undefined,
    props: buildHostProps(controller),
    resetState: (state: FileTabState) => ({
      ...state,
      scrollLeft: null,
      scrollTop: null,
    }),
    onMove: (_moveStore: AppStore, nextController: FileTabController) => ({
      props: buildHostProps(nextController),
      onClose: handleClose,
    }),
    onBeforeClose: existingTab?.onBeforeClose,
    onClose: handleClose,
    id: resolvedTabId,
    activate,
    title: path == null ? defaultTitle : (title ?? basename(path)),
    tooltip,
  });

  if (resetTabState) {
    controller.resetTabState(store, resolvedTabId);
  }
  if (path == null) {
    setFileTreeOpen(store, true, { animate: false });
  }
  if (syncOpenTabs) {
    syncOpenTabsForStore(store);
  }
}
