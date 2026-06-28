// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Output artifact list for the local conversation summary panel.
import type { MouseEvent, SVGProps } from "react";
import { GlobeIcon, initGlobeIcon } from "../../icons/globe-icon";
import {
  ExternalLinkIcon,
  initExternalLinkIconChunk,
} from "../../icons/external-link-icon";
import { GoogleDriveIcon } from "../../icons/google-drive-icon";
import { once } from "../../runtime/commonjs-interop";
import {
  getPathBasename,
  initThreadFindPreviewRuntime,
} from "./conversation-content-runtime";
import { useScope } from "../../runtime/app-scope-hooks";
import {
  initLocalConversationRouteRuntime,
  localConversationRouteScope,
} from "../local-conversation-route-runtime";
import {
  initOutputArtifactRuntime,
  isFileUrlLikeTarget,
} from "../output-artifact-runtime";
import {
  getImagePreviewDisplayMode,
  initGeneratedImagePreviewRuntime,
  initResourceOpenRuntime,
  openGeneratedImagePreviewTab,
} from "../../runtime/resource-open-runtime";
import {
  AppgenAppIcon,
  getAppgenArtifactUrlLabel,
  initAppgenArtifactIconChunk,
  initAppgenArtifactUrlHelpers,
} from "../../appgen/artifacts";
import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import {
  ArtifactFilePreviewIcon,
  initArtifactFilePreviewIconChunk,
} from "../../utils/artifact-file-preview-icon";
import {
  initSummaryPanelRowChunk,
  SummaryPanelRow,
} from "../../utils/summary-panel-row";
import {
  formatArtifactTargetLabel,
  getGeneratedImagePreviewArtifactPaths,
  getLocalConversationArtifactKey,
  isGeneratedImageArtifact,
  type LocalConversationOutputArtifact,
} from "./artifact-summary";
import {
  initSummaryPanelExpandableList,
  SummaryPanelExpandableList,
} from "./summary-panel-expandable-list";

export type SummaryPanelArtifact = LocalConversationOutputArtifact;

type GeneratedImagePreviewItem = {
  alt: string;
  id: string;
  previewSrc: string;
  src: string;
  tabTitle: string;
};

type GoogleDriveResourceIconProps = SVGProps<SVGSVGElement> & {
  resourceKind?: unknown;
};

function GoogleDriveResourceIcon({
  resourceKind: _resourceKind,
  ...props
}: GoogleDriveResourceIconProps) {
  return <GoogleDriveIcon {...props} />;
}

export type SummaryPanelArtifactsListProps = {
  artifacts: readonly SummaryPanelArtifact[];
  conversationTitle?: string | null;
  getImagePreviewSrc?: (path: string) => string | null | undefined;
  onOpen: (
    artifact: SummaryPanelArtifact,
    event: MouseEvent<HTMLElement>,
  ) => void;
};

export function SummaryPanelArtifactsList({
  artifacts,
  conversationTitle = null,
  getImagePreviewSrc,
  onOpen,
}: SummaryPanelArtifactsListProps) {
  let scope = useScope(localConversationRouteScope),
    intl = useIntl(),
    generatedImageArtifactPaths = artifacts.flatMap((artifact) =>
      getGeneratedImagePreviewArtifactPaths(artifact, getPathBasename),
    ),
    hasGeneratedImageArtifacts = artifacts.some(isGeneratedImageArtifact),
    generatedImageNumberByPath = new Map(
      generatedImageArtifactPaths.map((path, index) => [
        path,
        hasGeneratedImageArtifacts
          ? generatedImageArtifactPaths.length - index
          : index + 1,
      ]),
    ),
    generatedImagePreviews = artifacts
      .slice()
      .reverse()
      .flatMap((artifact): GeneratedImagePreviewItem[] => {
        if (
          (artifact.type !== "file" && artifact.type !== "generated-image") ||
          getImagePreviewDisplayMode(artifact.path) !== "always"
        ) {
          return [];
        }

        let fileName = getPathBasename(artifact.path),
          imageNumber = generatedImageNumberByPath.get(artifact.path),
          previewAlt =
            imageNumber == null
              ? fileName
              : intl.formatMessage(
                  {
                    id: "codex.localConversation.artifacts.generatedImage",
                    defaultMessage: "Generated image {imageNumber}",
                    description:
                      "Label for a generated image artifact in the thread summary side panel",
                  },
                  {
                    imageNumber,
                  },
                ),
          tabTitle =
            imageNumber == null || conversationTitle == null
              ? previewAlt
              : intl.formatMessage(
                  {
                    id: "codex.localConversation.generatedImageTabTitle",
                    defaultMessage:
                      "{conversationTitle} - Generated image {imageNumber}",
                    description:
                      "Title for a generated image preview tab, prefixed by the conversation title",
                  },
                  {
                    conversationTitle,
                    imageNumber,
                  },
                );

        return [
          {
            alt: previewAlt,
            id: artifact.path,
            previewSrc: getImagePreviewSrc?.(artifact.path) ?? artifact.path,
            src: artifact.path,
            tabTitle,
          },
        ];
      }),
    emptyArtifactsNode = (
      <div className="py-1 text-base text-token-description-foreground">
        <FormattedMessage
          id="codex.localConversation.artifacts.empty"
          defaultMessage="No artifacts yet"
          description="Empty state for the artifacts section in the thread summary side panel"
        />
      </div>
    ),
    renderArtifactRow = (artifact: SummaryPanelArtifact) => {
      switch (artifact.type) {
        case "website": {
          let targetLabel = formatArtifactTargetLabel(
            artifact.target,
            isFileUrlLikeTarget,
            getPathBasename,
          );
          return (
            <SummaryPanelRow
              icon={<GlobeIcon className="icon-sm shrink-0" />}
              label={
                targetLabel ?? (
                  <FormattedMessage
                    id="codex.localConversation.artifacts.website"
                    defaultMessage="Web preview"
                    description="Label for a website artifact in the thread summary side panel"
                  />
                )
              }
              onClick={(event) => onOpen(artifact, event)}
              title={artifact.target}
            />
          );
        }
        case "google-drive":
          return (
            <SummaryPanelRow
              icon={
                <GoogleDriveResourceIcon
                  className="icon-sm shrink-0"
                  resourceKind={artifact.resourceKind}
                />
              }
              label={artifact.title}
              onClick={(event) => onOpen(artifact, event)}
              title={artifact.url}
            />
          );
        case "appgen-app":
          return (
            <SummaryPanelRow
              icon={<AppgenAppIcon className="icon-sm shrink-0" />}
              label={
                <span className="flex min-w-0 items-center gap-1">
                  <span className="truncate">
                    {artifact.title ??
                      getAppgenArtifactUrlLabel(artifact.url) ??
                      artifact.url}
                  </span>
                  <ExternalLinkIcon
                    className="icon-xs shrink-0 opacity-0 group-hover/summary-panel-row:opacity-100 group-focus-visible/summary-panel-row:opacity-100"
                    href={artifact.url}
                  />
                </span>
              }
              labelClassName="min-w-0"
              onClick={(event) => onOpen(artifact, event)}
              title={artifact.url}
            />
          );
        case "file":
        case "generated-image": {
          let fileName = getPathBasename(artifact.path),
            imageNumber = generatedImageNumberByPath.get(artifact.path),
            label =
              imageNumber == null ? (
                fileName
              ) : (
                <FormattedMessage
                  id="codex.localConversation.artifacts.generatedImage"
                  defaultMessage="Generated image {imageNumber}"
                  description="Label for a generated image artifact in the thread summary side panel"
                  values={{
                    imageNumber,
                  }}
                />
              );
          return (
            <SummaryPanelRow
              icon={
                <ArtifactFilePreviewIcon
                  getImagePreviewSrc={getImagePreviewSrc}
                  iconClassName="icon-sm"
                  imageClassName="size-5 rounded-sm border border-token-border"
                  path={artifact.path}
                />
              }
              label={label}
              onClick={(event) => {
                let previewItem = generatedImagePreviews.find(
                  (item) => item.id === artifact.path,
                );
                (previewItem != null &&
                  openGeneratedImagePreviewTab(scope, {
                    alt: previewItem.alt,
                    attachmentSrc: artifact.path,
                    downloadSrc: previewItem.previewSrc,
                    generatedImages: generatedImagePreviews,
                    initialImageId: previewItem.id,
                    referrerPolicy: "no-referrer",
                    src: previewItem.previewSrc,
                    title: previewItem.tabTitle,
                  })) ||
                  onOpen(artifact, event);
              }}
              title={artifact.path}
            />
          );
        }
      }
    };

  return (
    <SummaryPanelExpandableList
      items={artifacts}
      getKey={getLocalConversationArtifactKey}
      listClassName="-mx-2 flex max-h-[28rem] flex-col gap-0.5 overflow-y-auto px-2"
      empty={emptyArtifactsNode}
    >
      {renderArtifactRow}
    </SummaryPanelExpandableList>
  );
}

export const initSummaryPanelArtifactsListChunk = once(() => {
  initLocalConversationRouteRuntime();
  initThreadFindPreviewRuntime();
  initOutputArtifactRuntime();
  initResourceOpenRuntime();
  initAppgenArtifactUrlHelpers();
  initArtifactFilePreviewIconChunk();
  initExternalLinkIconChunk();
  initGeneratedImagePreviewRuntime();
  initGlobeIcon();
  initAppgenArtifactIconChunk();
  initSummaryPanelExpandableList();
  initSummaryPanelRowChunk();
});
