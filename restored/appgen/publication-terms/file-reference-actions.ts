// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~appgen-publication-terms-route~remote-conversati~oykv7gy7-B4ar2dlW.js
// Workspace file-reference context menu and open-target helpers.
import { copyToClipboard } from "../../utils/copy-to-clipboard";
import {
  isRemoteHostConfig,
  isUrlLikePath,
  sendHostRequest,
} from "../../runtime/publication-terms-runtime";
import { openTargetContextMenuItems } from "../../utils/open-target-context-menu-items";
import { openWorkspaceResource } from "./resource-opener";
import type {
  FileContentKind,
  HostConfigForResourceOpen,
  OpenFileRequest,
  WorkspaceResourceOpenRequest,
} from "./resource-opener-types";

const ONE_MINUTE_MS = 60 * 1000;
const FIVE_SECONDS_MS = 5 * 1000;

type MessageDescriptor = {
  defaultMessage: string;
  description?: string;
  id: string;
};

export type OpenTarget = {
  appPath?: string;
  hidden?: boolean;
  icon?: unknown;
  id: string;
  kind?: string;
  label: string;
  target: string;
};

export type OpenInTargetsResult = {
  availableTargets?: string[];
  mode?: "editor" | "native" | string;
  preferredTarget?: string | null;
  targets?: OpenTarget[];
};

type QueryClientLike = {
  fetchQuery?: <TResult>(options: unknown) => Promise<TResult>;
  getQueryData?: <TResult>(queryKey: unknown) => TResult | undefined;
  prefetchQuery?: (options: unknown) => Promise<unknown> | unknown;
};

export type WorkspaceFileContextMenuScope = {
  get?: <TValue>(state: unknown, key?: unknown) => TValue;
  queryClient?: QueryClientLike;
};

export type ContextMenuItem = {
  enabled?: boolean;
  icon?: unknown;
  id: string;
  message?: MessageDescriptor;
  messageValues?: { target: string };
  onSelect?: () => void;
  submenu?: ContextMenuItem[];
  type?: "item" | "separator";
};

export const workspaceFileReferenceMessages = {
  openInTarget: {
    id: "markdown.fileReference.openInTarget",
    defaultMessage: "Open in {target}",
    description:
      "Context menu action to open a referenced file in the preferred app",
  },
  viewInCodexBrowser: {
    id: "markdown.fileReference.viewInCodexBrowser",
    defaultMessage: "View in browser",
    description:
      "Context menu action to open a referenced local HTML file in the Codex browser",
  },
  viewFile: {
    id: "markdown.fileReference.viewFile",
    defaultMessage: "Open file",
    description:
      "Context menu action to open a referenced local HTML file in the file viewer",
  },
  openWith: {
    id: "markdown.fileReference.openWith",
    defaultMessage: "Open with",
    description:
      "Context menu submenu label for choosing an app to open a referenced file",
  },
  openWithTarget: {
    id: "markdown.fileReference.openWithTarget",
    defaultMessage: "{target}",
    description:
      "Context menu action to open a referenced file in a specific app",
  },
  copyPath: {
    id: "markdown.fileReference.copyPath",
    defaultMessage: "Copy path",
    description: "Context menu item to copy a referenced file path",
  },
  copyFileContents: {
    id: "markdown.fileReference.copyFileContents",
    defaultMessage: "Copy file contents",
    description: "Context menu item to copy a referenced file's contents",
  },
  openInFinder: {
    id: "markdown.fileReference.openInFinder",
    defaultMessage: "Reveal in Finder",
    description: "Context menu item to reveal a referenced file in Finder",
  },
  openInExplorer: {
    id: "markdown.fileReference.openInExplorer",
    defaultMessage: "Open in Explorer",
    description:
      "Context menu item to reveal a referenced file in File Explorer",
  },
  openInFileManager: {
    id: "markdown.fileReference.openInFileManager",
    defaultMessage: "Open in File Manager",
    description:
      "Context menu item to reveal a referenced file in the system file manager",
  },
} satisfies Record<string, MessageDescriptor>;

export function initOpenFileCommandChunk(): void {}

export function initClipboardWriterChunk(): void {}

export function initOpenTargetContextMenuItemsChunk(): void {}

export function initOpenInTargetHelpersChunk(): void {}

export function initWorkspaceFileContextMenuChunk(): void {}

export function initFileReferenceActionMessagesChunk(): void {}

export function sendOpenFileCommand(params: OpenFileRequest) {
  return sendHostRequest("open-file", { params });
}

export function copyToClipboardPayload(
  payload: string | Record<string, string | Blob>,
  event?: Parameters<typeof copyToClipboard>[1],
) {
  return copyToClipboard(payload, event);
}

export function filterOpenTargets({
  targets,
  availableTargets,
  includeHiddenTargets = false,
  mode = "editor",
}: {
  availableTargets: readonly string[];
  includeHiddenTargets?: boolean;
  mode?: string;
  targets: readonly OpenTarget[];
}) {
  const appTargets = targets.filter((target) => target.appPath != null);
  if (appTargets.length > 0) return appTargets;
  if (mode === "native") {
    return targets.filter(
      (target) =>
        target.target === "systemDefault" || target.target === "fileManager",
    );
  }

  const availableTargetSet = new Set(availableTargets);
  return targets.filter(
    (target) =>
      availableTargetSet.has(target.target) &&
      (includeHiddenTargets || !target.hidden),
  );
}

export function selectPrimaryOpenTarget({
  preferredTarget,
  targets,
  availableTargets,
  includeHiddenTargets = true,
  mode = "editor",
}: {
  availableTargets: readonly string[];
  includeHiddenTargets?: boolean;
  mode?: string;
  preferredTarget?: string | null;
  targets: readonly OpenTarget[];
}) {
  const visibleTargets = filterOpenTargets({
    targets,
    availableTargets,
    includeHiddenTargets,
    mode,
  });
  if (visibleTargets.length === 0) return null;
  return preferredTarget
    ? (visibleTargets.find((target) => target.target === preferredTarget) ??
        visibleTargets[0] ??
        null)
    : (visibleTargets[0] ?? null);
}

export function isEditorOpenTarget(
  target: Pick<OpenTarget, "appPath" | "kind">,
) {
  return target.appPath == null && target.kind === "editor";
}

export function buildOpenTargetContextMenuItems({
  idPrefix,
  messages,
  onOpenInTarget,
  primaryTarget,
  visibleTargets,
}: Parameters<typeof openTargetContextMenuItems>[0]) {
  return openTargetContextMenuItems({
    idPrefix,
    messages,
    onOpenInTarget,
    primaryTarget,
    visibleTargets,
  });
}

export function createOpenInTargetsQueryOptions({
  cwd,
  hostId,
  path,
}: {
  cwd?: string | null;
  hostId?: string | null;
  path: string;
}) {
  return {
    gcTime: Number.POSITIVE_INFINITY,
    queryKey: getOpenInTargetsQueryKey({ cwd, hostId, path }),
    queryFn: () =>
      sendHostRequest("open-in-targets", {
        params: { cwd, hostId, path },
      }),
    staleTime: ONE_MINUTE_MS,
  };
}

export function selectOpenInTargets(result?: OpenInTargetsResult | null) {
  const targets = result?.targets ?? [];
  const availableTargets = result?.availableTargets ?? [];
  return {
    primaryTarget: selectPrimaryOpenTarget({
      preferredTarget: result?.preferredTarget ?? null,
      targets,
      availableTargets,
      mode: result?.mode,
    }),
    visibleTargets: filterOpenTargets({
      targets,
      availableTargets,
      includeHiddenTargets: true,
      mode: result?.mode,
    }),
  };
}

export function prefetchOpenInTargets(
  scope: WorkspaceFileContextMenuScope,
  request: { cwd?: string | null; hostId?: string | null; path: string },
) {
  return scope.queryClient?.prefetchQuery?.(
    createOpenInTargetsQueryOptions(request),
  );
}

export function copyWorkspaceFileContents(
  queryClient: QueryClientLike,
  { hostId, path }: { hostId?: string | null; path: string },
) {
  const params = hostId == null ? { path } : { hostId, path };
  const queryKey = getReadFileQueryKey(params);
  const cached = queryClient.getQueryData?.<{ contents?: string }>(queryKey);
  if (cached?.contents != null) {
    void copyToClipboard(cached.contents);
    return;
  }

  void queryClient
    .fetchQuery?.<{ contents?: string }>({
      queryFn: () => sendHostRequest("read-file", { params }),
      queryKey,
      staleTime: FIVE_SECONDS_MS,
    })
    .then(({ contents }) => {
      if (contents != null) void copyToClipboard(contents);
    })
    .catch(() => undefined);
}

export function fetchWorkspaceFileContextMenuItems(
  scope: WorkspaceFileContextMenuScope,
  request: WorkspaceFileContextMenuRequest,
) {
  return scope.queryClient
    ?.fetchQuery?.(createOpenInTargetsQueryOptions(request))
    .catch(() => null)
    .then(() => buildWorkspaceFileContextMenuItems(scope, request));
}

export type WorkspaceFileContextMenuRequest = Pick<
  WorkspaceResourceOpenRequest,
  | "artifactNavigationTarget"
  | "column"
  | "cwd"
  | "endLine"
  | "hostId"
  | "line"
  | "openInSidePanel"
  | "path"
> & {
  browserSidebarEnabled?: boolean;
  hostConfig?: HostConfigForResourceOpen | null;
  platform?: string | null;
};

export function buildWorkspaceFileContextMenuItems(
  scope: WorkspaceFileContextMenuScope,
  {
    artifactNavigationTarget,
    browserSidebarEnabled = false,
    column,
    cwd,
    endLine,
    hostConfig = null,
    hostId,
    line,
    openInSidePanel = false,
    path,
    platform,
  }: WorkspaceFileContextMenuRequest,
) {
  const openInTargets = selectOpenInTargets(
    scope.queryClient?.getQueryData?.<OpenInTargetsResult>(
      getOpenInTargetsQueryKey({ cwd, hostId, path }),
    ),
  );
  const items: ContextMenuItem[] = [];
  const columnForLine = line == null ? undefined : (column ?? 1);
  const shouldOfferBrowserTarget =
    browserSidebarEnabled &&
    hostConfig != null &&
    !isRemoteHostConfig(hostConfig) &&
    isUrlLikePath(path);
  const openInSidePanelForUrl = openInSidePanel;

  const openTarget = (target?: string, appPath?: string) => {
    openWorkspaceResource({
      scope,
      artifactNavigationTarget,
      path,
      line,
      column: columnForLine,
      cwd,
      hostConfig,
      hostId,
      target,
      appPath,
    });
  };

  if (shouldOfferBrowserTarget) {
    items.push({
      id: openInSidePanelForUrl
        ? "workspace-file-view-file"
        : "workspace-file-view-browser",
      message: openInSidePanelForUrl
        ? workspaceFileReferenceMessages.viewFile
        : workspaceFileReferenceMessages.viewInCodexBrowser,
      onSelect: openInSidePanelForUrl
        ? () => {
            openWorkspaceResource({
              scope,
              artifactNavigationTarget,
              path,
              line,
              column: columnForLine,
              cwd,
              hostConfig,
              hostId,
              endLine,
              openInSidePanel,
            });
          }
        : () => {
            openWorkspaceResource({
              path,
              cwd,
              hostConfig,
              hostId,
              browserSidebarEnabled,
              modifiedClick: true,
            });
          },
    });
  }

  if (openInTargets.primaryTarget != null) {
    if (shouldOfferBrowserTarget) {
      items.push({
        id: "workspace-file-open-targets",
        message: workspaceFileReferenceMessages.openWith,
        submenu: openInTargets.visibleTargets.map((target) => ({
          id: `workspace-file-open-target-${target.id}`,
          message: workspaceFileReferenceMessages.openWithTarget,
          messageValues: { target: target.label },
          icon: target.icon,
          onSelect: () => openTarget(target.target, target.appPath),
        })),
      });
    } else {
      items.push(
        ...(buildOpenTargetContextMenuItems({
          idPrefix: "workspace-file-open",
          messages: {
            openInTarget: workspaceFileReferenceMessages.openInTarget,
            openIn: workspaceFileReferenceMessages.openWith,
            openInTargetSubmenu: workspaceFileReferenceMessages.openWithTarget,
          },
          onOpenInTarget: openTarget,
          primaryTarget: openInTargets.primaryTarget,
          visibleTargets: openInTargets.visibleTargets,
        }) as ContextMenuItem[]),
      );
    }

    items.push({
      id: "workspace-file-open-target-separator",
      type: "separator",
    });
  }

  items.push({
    id: "workspace-file-copy-path",
    message: workspaceFileReferenceMessages.copyPath,
    onSelect: () => {
      void copyToClipboard(path);
    },
  });
  items.push({
    id: "workspace-file-copy-contents",
    message: workspaceFileReferenceMessages.copyFileContents,
    onSelect: () => {
      if (scope.queryClient != null) {
        copyWorkspaceFileContents(scope.queryClient, { hostId, path });
      }
    },
  });

  if (hostConfig == null || !isRemoteHostConfig(hostConfig)) {
    items.push({
      id: "workspace-file-reveal-path",
      message: getRevealInFileManagerMessage(platform),
      onSelect: () => openTarget("fileManager"),
    });
  }

  return items;
}

function getOpenInTargetsQueryKey({
  cwd,
  hostId,
  path,
}: {
  cwd?: string | null;
  hostId?: string | null;
  path: string;
}) {
  return ["open-in-targets", { cwd, hostId, path }] as const;
}

function getReadFileQueryKey(params: { hostId?: string | null; path: string }) {
  return ["read-file", params] as const;
}

function getRevealInFileManagerMessage(platform?: string | null) {
  return platform === "darwin"
    ? workspaceFileReferenceMessages.openInFinder
    : platform === "win32"
      ? workspaceFileReferenceMessages.openInExplorer
      : workspaceFileReferenceMessages.openInFileManager;
}
