// Restored from ref/webview/assets/app-initial~app-main~automations-page-bHJfYUGr.js
// App-shell side-panel tab helpers used by publication terms/resource links.
import {
  F_ as readRouteScopeValue,
  MD as renderMcpCapabilityIcon,
} from "../../boundaries/current-ref/appg-thread-shared-producer";
import {
  _c as getSidePanelController,
  bc as activateSidePanelPlacement,
  mc as sidePanelPlacements,
  pn as mcpCapabilityPanelTab,
  ti as getWorkspaceFilePanelTabSource,
  vc as getPanelTabPlacement,
} from "../../boundaries/current-ref/projects-app-shared-producer";
import {
  findMatchingMcpCapabilityFileViewer,
  mcpCapabilityFileViewerState,
  type McpCapabilityFileViewer,
} from "./resource-opener";

type ScopeWithState = {
  get?: <TValue>(state: unknown, key?: unknown) => TValue;
  value?: unknown;
};

export type SidePanelPlacement = string;

type SidePanelOpenStatus = "existing" | "opened";

export type PublicationTermsSidePanelOpenResult = {
  placement: SidePanelPlacement;
  status: SidePanelOpenStatus;
  viewer: "artifact" | "mcpCapabilityFileViewer" | "reviewFileSource";
};

type McpCapabilityTabOptions = {
  activate?: boolean;
  instanceId?: string;
  isPreview?: boolean;
  readHostResource?: unknown;
  tabId?: string;
  target?: SidePanelPlacement;
  title?: string | null;
  toolArguments?: unknown;
};

export function openMcpCapabilityPanelTab(
  scope: unknown,
  view: McpCapabilityFileViewer,
  {
    activate = true,
    instanceId = crypto.randomUUID(),
    isPreview,
    readHostResource,
    tabId = getMcpCapabilityPanelTabId(view, instanceId),
    target = "right",
    title = view.title,
    toolArguments,
  }: McpCapabilityTabOptions = {},
): string | null {
  const stateScope = scope as ScopeWithState;
  if (readRouteScopeValue(stateScope.value) == null) return null;

  const placement = getCurrentPanelTabPlacement(scope, tabId) ?? target;
  getSidePanelController(placement).openTab(scope, mcpCapabilityPanelTab, {
    icon: renderMcpCapabilityIcon(view.icon, "icon-xs shrink-0"),
    id: tabId,
    props: { instanceId, readHostResource, toolArguments, view },
    title,
    activate,
    isPreview,
  });
  if (activate) activateSidePanelPlacement(scope, placement);
  return tabId;
}

export function findMcpCapabilityFileViewerForPathInScope(
  scope: unknown,
  path: string,
  hostId: string,
): McpCapabilityFileViewer | null {
  const stateScope = scope as ScopeWithState;
  if (typeof stateScope.get !== "function") return null;

  try {
    const fileViewers = stateScope.get<unknown[] | null | undefined>(
      mcpCapabilityFileViewerState,
      hostId,
    );
    return findMatchingMcpCapabilityFileViewer(path, fileViewers ?? []);
  } catch {
    return null;
  }
}

export function findExistingWorkspaceFilePanelTab(
  scope: unknown,
  path: string,
  hostId: string | undefined,
  isPreview: boolean | undefined,
  target: SidePanelPlacement,
): PublicationTermsSidePanelOpenResult | null {
  const placements = [
    target,
    ...getSidePanelPlacements().filter((placement) => placement !== target),
  ];
  const stateScope = scope as ScopeWithState;
  if (typeof stateScope.get !== "function") return null;

  for (const placement of placements) {
    const controller = getSidePanelController(placement);
    const tab = stateScope
      .get<unknown[]>(controller.tabs$)
      ?.find((candidate) => {
        const source = getWorkspaceFilePanelTabSource(candidate);
        return source?.hostId === (hostId ?? "local") && source.path === path;
      });
    if (tab != null) {
      const tabId = (tab as { tabId: string }).tabId;
      if (isPreview !== true) controller.pinTab(scope, tabId);
      controller.resetTabState(scope, tabId);
      controller.activateTab(scope, tabId);
      activateSidePanelPlacement(scope, placement);
      return {
        placement,
        status: "existing",
        viewer:
          getWorkspaceFilePanelTabSource(tab)?.refreshMode === "manual"
            ? "artifact"
            : "reviewFileSource",
      };
    }
  }

  return null;
}

export function getCurrentPanelTabPlacement(
  scope: unknown,
  tabId: string,
): SidePanelPlacement | null {
  return getPanelTabPlacement(scope, tabId) ?? null;
}

function getMcpCapabilityPanelTabId(
  view: McpCapabilityFileViewer,
  instanceId: string,
) {
  return `mcp-capability:${view.hostId}:${view.server}:${view.tool?.name}:${instanceId}`;
}

function getSidePanelPlacements() {
  return [...(sidePanelPlacements as readonly SidePanelPlacement[])];
}
