// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Output resource open handlers for the local conversation summary panel.
import type { MouseEvent } from "react";
import { once } from "../../runtime/commonjs-interop";
import { isFileUrlLikeTarget } from "../output-artifact-runtime";
import {
  getImagePreviewDisplayMode,
  initResourceOpenRuntime,
  openInBrowserFromEvent,
  resolveInlineableLocalImagePath,
  toAppFsUrl,
} from "../../runtime/resource-open-runtime";
import { useStableCallback } from "../../utils/use-stable-callback";
import {
  initWorkspaceResourceOpenerChunk,
  openWorkspaceResource,
} from "../../appgen/publication-terms";

type HostConfigForOutputOpen = {
  id: string;
  kind?: string | null;
};

type OutputFileOpenRequest = {
  icon?: unknown;
  path: string;
  title?: string | null;
};

type FileOutputResource = OutputFileOpenRequest & {
  type: "file" | "generated-image";
};

type BrowserOutputResource =
  | {
      type: "google-drive";
      url: string;
    }
  | {
      type: "appgen-app";
      url: string;
    };

type WebsiteOutputResource = {
  target: string;
  type: "website";
};

export type ThreadSummaryOutputResource =
  | BrowserOutputResource
  | FileOutputResource
  | WebsiteOutputResource;

export type ThreadSummaryOutputOpenHandlersOptions = {
  browserSidebarEnabled: boolean;
  cwd: string | null;
  hostConfig: HostConfigForOutputOpen;
  openFile: (request: unknown) => unknown;
  scope: unknown;
};

export function useThreadSummaryOutputOpenHandlers({
  browserSidebarEnabled,
  cwd,
  hostConfig,
  openFile,
  scope,
}: ThreadSummaryOutputOpenHandlersOptions): {
  getImagePreviewSrc?: (generatedImagePath: string) => string | null;
  onOpenOutput: (
    resource: ThreadSummaryOutputResource,
    browserEvent: MouseEvent<HTMLElement>,
  ) => void;
} {
  let openOutputArtifact = useStableCallback(
      (artifact: OutputFileOpenRequest) => {
        let { icon, path, title } = artifact;
        openWorkspaceResource({
          scope,
          path,
          cwd,
          browserSidebarEnabled,
          hostConfig,
          hostId: hostConfig.id,
          icon,
          openFile,
          openInSidePanel: true,
          title,
        });
      },
    ),
    onOpenOutput = useStableCallback(
      (
        resource: ThreadSummaryOutputResource,
        browserEvent: MouseEvent<HTMLElement>,
      ) => {
        switch (resource.type) {
          case "file":
          case "generated-image":
            openOutputArtifact({
              path: resource.path,
            });
            return;
          case "google-drive":
          case "appgen-app":
            openInBrowserFromEvent({
              event: browserEvent,
              href: resource.url,
              originHostId: hostConfig.id,
              initiator: "mcp_app_resource",
            });
            return;
          case "website":
            if (isFileUrlLikeTarget(resource.target)) {
              openInBrowserFromEvent({
                event: browserEvent,
                href: resource.target,
                initiator: "mcp_app_resource",
                originHostId: hostConfig.id,
              });
              return;
            }
            openWorkspaceResource({
              path: resource.target,
              cwd,
              browserSidebarEnabled,
              hostConfig,
              hostId: hostConfig.id,
              openFile,
            });
        }
      },
    );

  return {
    getImagePreviewSrc:
      hostConfig.kind === "local" ? getGeneratedImagePreviewSrc : undefined,
    onOpenOutput,
  };
}

function getGeneratedImagePreviewSrc(generatedImagePath: string) {
  return getImagePreviewDisplayMode(generatedImagePath) !== "always" ||
    resolveInlineableLocalImagePath(generatedImagePath) == null
    ? null
    : toAppFsUrl(generatedImagePath);
}

export const initThreadSummaryOutputOpenHandlersChunk = once(() => {
  initResourceOpenRuntime();
  initWorkspaceResourceOpenerChunk();
});
