// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~appgen-publication-terms-route~remote-conversati~oykv7gy7-B4ar2dlW.js
// Semantic surface for the appgen publication-terms shared producer.
export {
  getPublicationTermsSidePanelHandler,
  initPublicationTermsHandlerRegistryChunk,
  registerPublicationTermsSidePanelHandler,
  type PublicationTermsSidePanelHandler,
  type PublicationTermsSidePanelOptions,
} from "./handler-registry";
export {
  getMcpServerLogo,
  initMcpServerLogoHelpers,
  type McpServerInfoWithIcons,
  type McpServerLogo,
} from "./mcp-server-logo";
export {
  createFileViewerToolArguments,
  createMcpFileViewerHostResource,
  findMatchingMcpCapabilityFileViewer,
  initMcpResourceReadParamsChunk,
} from "./mcp-file-viewers";
export {
  getArtifactImportKindForPath,
  getArtifactImportPresentation,
  initArtifactImportPresentationChunk,
  shouldParseArtifactPreviewForImportKind,
} from "./artifact-presentation";
export {
  collectMcpCapabilityEntrypoints,
  collectMcpCapabilityFileViewers,
  globalMcpCapabilityEntryPointsState,
  initMcpCapabilityCatalogChunk,
  localMcpCapabilityCatalogState,
  localMcpCapabilityFileViewersState,
  localMcpCapabilityMentionServersState,
  mcpCapabilityEntryPointsState,
  mcpCapabilityFileViewersByHostState,
  mcpCapabilityMentionServersByHostState,
  readMcpCapabilityCatalog,
  readMcpCapabilityMentionServers,
  type McpCapabilityEntrypoint,
  type McpCapabilityMentionServer,
} from "./mcp-capability-catalog";
export {
  createMimeTypesModule,
  getMimeCharset,
  getMimeContentType,
  getMimeExtension,
  lookupMimeType,
} from "./mime-types";
export {
  READ_FILE_SAMPLE_MAX_FILE_BYTES,
  getResourcePreviewParseMode,
  getReviewPreviewKind,
  getUnsupportedPreviewType,
  initReadFileMetadataLimitsChunk,
  initUnsupportedPreviewTypeChunk,
  isPreviewableInSidePanel,
  lookupMimeType as lookupWorkspaceResourceMimeType,
} from "./open-outcome";
export {
  buildOpenTargetContextMenuItems,
  buildWorkspaceFileContextMenuItems,
  copyToClipboardPayload,
  copyWorkspaceFileContents,
  createOpenInTargetsQueryOptions,
  fetchWorkspaceFileContextMenuItems,
  filterOpenTargets,
  initClipboardWriterChunk,
  initFileReferenceActionMessagesChunk,
  initOpenFileCommandChunk,
  initOpenInTargetHelpersChunk,
  initOpenTargetContextMenuItemsChunk,
  initWorkspaceFileContextMenuChunk,
  isEditorOpenTarget,
  prefetchOpenInTargets,
  selectOpenInTargets,
  selectPrimaryOpenTarget,
  sendOpenFileCommand,
  workspaceFileReferenceMessages,
  type ContextMenuItem,
  type OpenInTargetsResult,
  type OpenTarget,
  type WorkspaceFileContextMenuRequest,
  type WorkspaceFileContextMenuScope,
} from "./file-reference-actions";
export {
  initWorkspaceResourceOpenerChunk,
  openWorkspaceResource,
} from "./resource-opener";
export {
  type McpCapabilityFileViewer,
  type McpHostResourceReader,
  type WorkspaceResourceOpenRequest,
} from "./resource-opener-types";
export {
  appgenPublicationTermsSidePanelHandler,
  initPublicationTermsSidePanelHandlerChunk,
  openPublicationTermsSidePanelResource,
  type PublicationTermsSidePanelOpenResult,
} from "./side-panel-handler";
