// Restored from ref/webview/assets/app-initial~app-main~automations-page-bHJfYUGr.js
// Opens workspace resources into the app-shell side panel for publication terms/resource links.
import { once } from "../../runtime/commonjs-interop";
import {
  Kr as openArtifactPanelTab,
  Yt as openWorkspaceFilePanelTab,
  dn as createReadFileContents,
} from "../../boundaries/current-ref/projects-app-shared-producer";
import {
  createFileViewerToolArguments,
  createMcpFileViewerHostResource,
  getArtifactImportPresentation,
  initWorkspaceResourceOpenerChunk,
} from "./resource-opener";
import {
  findExistingWorkspaceFilePanelTab,
  findMcpCapabilityFileViewerForPathInScope,
  getCurrentPanelTabPlacement,
  openMcpCapabilityPanelTab,
  type PublicationTermsSidePanelOpenResult,
} from "./side-panel-tabs";
import type {
  PublicationTermsSidePanelHandler,
  PublicationTermsSidePanelOptions,
} from "./handler-registry";

export const initPublicationTermsSidePanelHandlerChunk = once(() => {
  initWorkspaceResourceOpenerChunk();
});

export function openPublicationTermsSidePanelResource(
  scope: unknown,
  path: string,
  options: PublicationTermsSidePanelOptions = {},
): PublicationTermsSidePanelOpenResult | null {
  const {
    artifactNavigationTarget,
    endLine,
    hostId,
    icon,
    isPreview,
    line,
    target = "right",
    title,
  } = options;
  const resolvedHostId = hostId ?? "local";
  const artifactTabId = `artifact:${resolvedHostId}:${path}`;

  if (artifactNavigationTarget != null) {
    const previousPlacement = getCurrentPanelTabPlacement(scope, artifactTabId);
    if (
      openArtifactPanelTab(scope, path, {
        artifactNavigationTarget,
        hostId: resolvedHostId,
        icon,
        isPreview,
        target: options.target,
        title,
      })
    ) {
      return {
        placement: getCurrentPanelTabPlacement(scope, artifactTabId) ?? target,
        status: previousPlacement == null ? "opened" : "existing",
        viewer: "artifact",
      };
    }
  }

  const fileViewer =
    line == null && endLine == null
      ? findMcpCapabilityFileViewerForPathInScope(scope, path, resolvedHostId)
      : null;
  if (fileViewer != null) {
    const resourceUri = `codex-resource://${crypto.randomUUID()}`;
    const tabId = `mcp-capability:file-viewer:file:${resolvedHostId}:${path}`;
    const previousPlacement = getCurrentPanelTabPlacement(scope, tabId);
    if (
      openMcpCapabilityPanelTab(scope, fileViewer, {
        instanceId: resourceUri,
        readHostResource: createMcpFileViewerHostResource({
          fileViewer,
          path,
          readContents: createReadFileContents({
            hostId: resolvedHostId,
            path,
          }),
          resourceUri,
        }),
        isPreview,
        tabId,
        target: options.target,
        title,
        toolArguments: createFileViewerToolArguments(path, resourceUri),
      }) != null
    ) {
      return {
        placement: getCurrentPanelTabPlacement(scope, tabId) ?? target,
        status: previousPlacement == null ? "opened" : "existing",
        viewer: "mcpCapabilityFileViewer",
      };
    }
  }

  getCurrentPanelTabPlacement(scope, `text-editor:${resolvedHostId}:${path}`);
  const existingFileTab =
    artifactNavigationTarget == null && line == null && endLine == null
      ? findExistingWorkspaceFilePanelTab(
          scope,
          path,
          hostId,
          isPreview,
          target,
        )
      : null;
  if (existingFileTab != null) return existingFileTab;

  const previousArtifactPlacement = getCurrentPanelTabPlacement(
    scope,
    artifactTabId,
  );
  if (
    artifactNavigationTarget == null &&
    getArtifactImportPresentation(path) != null &&
    openArtifactPanelTab(scope, path, {
      hostId: resolvedHostId,
      icon,
      isPreview,
      target: options.target,
      title,
    })
  ) {
    return {
      placement: getCurrentPanelTabPlacement(scope, artifactTabId) ?? target,
      status: previousArtifactPlacement == null ? "opened" : "existing",
      viewer: "artifact",
    };
  }

  const fileTabId = hostId == null ? `file:${path}` : `file:${hostId}:${path}`;
  const previousFilePlacement = getCurrentPanelTabPlacement(scope, fileTabId);
  openWorkspaceFilePanelTab(scope, path, {
    endLine,
    hostId,
    icon,
    line,
    resetTabState: line != null || endLine != null,
    isPreview,
    target: options.target,
    title,
  });
  return {
    placement: getCurrentPanelTabPlacement(scope, fileTabId) ?? target,
    status: previousFilePlacement == null ? "opened" : "existing",
    viewer: "reviewFileSource",
  };
}

export function appgenPublicationTermsSidePanelHandler(
  scope: unknown,
  path: string,
  options: PublicationTermsSidePanelOptions = {},
): ReturnType<PublicationTermsSidePanelHandler> {
  return openPublicationTermsSidePanelResource(scope, path, options)?.viewer;
}

export type { PublicationTermsSidePanelOpenResult };
