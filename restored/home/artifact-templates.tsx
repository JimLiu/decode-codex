// Restored from ref/webview/assets/home-artifact-templates-DEAd_KXL.js
// home-artifact-templates-BqtjKj4m chunk restored from the Codex webview bundle.
import React from "react";
import {
  appScopeO as useAppScopeStore,
  appScopeT as appScopeStoreScope,
} from "../boundaries/app-scope";
import { defineMessage, FormattedMessage, useIntl } from "../vendor/react-intl";
import clsx from "clsx";
import { toastApiSignal } from "../ui/toast-signal";
import {
  HomeRowContent,
  HomeRowIcon,
  HomeRowLabel,
} from "../ui/home-row-layout";
import { ArrowLeftIcon } from "../icons/arrow-left-icon";
import {
  useComposerController,
  useComposerControllerSelector,
} from "../composer/use-composer-controller";
type ArtifactTemplateKind = "document" | "presentation" | "spreadsheet";
type ArtifactTemplate = {
  id: string;
  kind: ArtifactTemplateKind;
  title: ReturnType<typeof defineMessage>;
  filename: string;
  assetUrl: string;
  previewUrl: string;
};
type SkillMentionNode = {
  type: {
    name: string;
  };
  attrs: {
    path?: unknown;
  };
};
type ComposerDocument = {
  descendants: (visitor: (node: SkillMentionNode) => boolean) => void;
};
type HomeArtifactTemplatesProps = {
  backPrompt?: string | null;
  canUseTemplateAttachments: boolean;
  onAddFileAssetAttachment: (attachment: {
    assetUrl: string;
    label: string;
  }) => void | Promise<void>;
};
const budgetPlannerAssetUrl =
  "" + new URL("budget-planner-B_xX3PJl.xlsx", import.meta.url).href;
const contentCalendarAssetUrl =
  "" + new URL("content-calendar-D2hO7r4o.xlsx", import.meta.url).href;
const designReviewAssetUrl =
  "" + new URL("design-review-DfDJVwWu.pptx", import.meta.url).href;
const meetingNotesAssetUrl =
  "" + new URL("meeting-notes-hfgk-Kdr.docx", import.meta.url).href;
const monthlyBusinessReviewAssetUrl =
  "" + new URL("monthly-business-review-CqJbQRLF.pptx", import.meta.url).href;
const budgetPlannerPreviewUrl =
  "" + new URL("budget-planner-DdzCe8wU.png", import.meta.url).href;
const contentCalendarPreviewUrl =
  "" + new URL("content-calendar-Ct37j4gK.png", import.meta.url).href;
const designReviewPreviewUrl =
  "" + new URL("design-review-D5ZTsvgZ.png", import.meta.url).href;
const meetingNotesPreviewUrl =
  "" + new URL("meeting-notes-HtllKJ8V.png", import.meta.url).href;
const monthlyBusinessReviewPreviewUrl =
  "" + new URL("monthly-business-review-iy1-PqJc.png", import.meta.url).href;
const projectBriefPreviewUrl =
  "" + new URL("project-brief-bL95n3Ke.png", import.meta.url).href;
const projectTrackerPreviewUrl =
  "" + new URL("project-tracker-BsrXHgJI.png", import.meta.url).href;
const reportOutlinePreviewUrl =
  "" + new URL("report-outline-CQViP9Z5.png", import.meta.url).href;
const salesDiscoveryPreviewUrl =
  "" + new URL("sales-discovery-CFt_AKqR.png", import.meta.url).href;
const projectBriefAssetUrl =
  "" + new URL("project-brief-Dgi4V0mX.docx", import.meta.url).href;
const projectTrackerAssetUrl =
  "" + new URL("project-tracker-BL3pNzWv.xlsx", import.meta.url).href;
const reportOutlineAssetUrl =
  "" + new URL("report-outline-DUfNp9Wv.docx", import.meta.url).href;
const salesDiscoveryAssetUrl =
  "" + new URL("sales-discovery-DI8H6s1v.pptx", import.meta.url).href;
const artifactTemplates: ArtifactTemplate[] = [
  {
    id: "project-brief",
    kind: "document",
    title: defineMessage({
      id: "home.artifactTemplates.projectBrief",
      defaultMessage: "Project brief",
      description: "Title for a document template card",
    }),
    filename: "project-brief.docx",
    assetUrl: projectBriefAssetUrl,
    previewUrl: projectBriefPreviewUrl,
  },
  {
    id: "meeting-notes",
    kind: "document",
    title: defineMessage({
      id: "home.artifactTemplates.meetingNotes",
      defaultMessage: "Meeting notes",
      description: "Title for a document template card",
    }),
    filename: "meeting-notes.docx",
    assetUrl: meetingNotesAssetUrl,
    previewUrl: meetingNotesPreviewUrl,
  },
  {
    id: "report-outline",
    kind: "document",
    title: defineMessage({
      id: "home.artifactTemplates.reportOutline",
      defaultMessage: "Report outline",
      description: "Title for a document template card",
    }),
    filename: "report-outline.docx",
    assetUrl: reportOutlineAssetUrl,
    previewUrl: reportOutlinePreviewUrl,
  },
  {
    id: "monthly-business-review",
    kind: "presentation",
    title: defineMessage({
      id: "home.artifactTemplates.monthlyBusinessReview",
      defaultMessage: "Monthly Business Review",
      description: "Title for a presentation template card",
    }),
    filename: "monthly-business-review.pptx",
    assetUrl: monthlyBusinessReviewAssetUrl,
    previewUrl: monthlyBusinessReviewPreviewUrl,
  },
  {
    id: "sales-discovery",
    kind: "presentation",
    title: defineMessage({
      id: "home.artifactTemplates.salesDiscovery",
      defaultMessage: "Sales discovery",
      description: "Title for a presentation template card",
    }),
    filename: "sales-discovery.pptx",
    assetUrl: salesDiscoveryAssetUrl,
    previewUrl: salesDiscoveryPreviewUrl,
  },
  {
    id: "design-review",
    kind: "presentation",
    title: defineMessage({
      id: "home.artifactTemplates.designReview",
      defaultMessage: "Design review",
      description: "Title for a presentation template card",
    }),
    filename: "design-review.pptx",
    assetUrl: designReviewAssetUrl,
    previewUrl: designReviewPreviewUrl,
  },
  {
    id: "project-tracker",
    kind: "spreadsheet",
    title: defineMessage({
      id: "home.artifactTemplates.projectTracker",
      defaultMessage: "Project tracker",
      description: "Title for a spreadsheet template card",
    }),
    filename: "project-tracker.xlsx",
    assetUrl: projectTrackerAssetUrl,
    previewUrl: projectTrackerPreviewUrl,
  },
  {
    id: "budget-planner",
    kind: "spreadsheet",
    title: defineMessage({
      id: "home.artifactTemplates.budgetPlanner",
      defaultMessage: "Budget planner",
      description: "Title for a spreadsheet template card",
    }),
    filename: "budget-planner.xlsx",
    assetUrl: budgetPlannerAssetUrl,
    previewUrl: budgetPlannerPreviewUrl,
  },
  {
    id: "content-calendar",
    kind: "spreadsheet",
    title: defineMessage({
      id: "home.artifactTemplates.contentCalendar",
      defaultMessage: "Content calendar",
      description: "Title for a spreadsheet template card",
    }),
    filename: "content-calendar.xlsx",
    assetUrl: contentCalendarAssetUrl,
    previewUrl: contentCalendarPreviewUrl,
  },
];
const styles = {
  card: "_card_1bthu_1",
  homeArtifactTemplatesEnter: "_homeArtifactTemplatesEnter_1bthu_1",
};
export function HomeArtifactTemplates({
  backPrompt,
  canUseTemplateAttachments,
  onAddFileAssetAttachment,
}: HomeArtifactTemplatesProps) {
  const appScopeStore = useAppScopeStore(appScopeStoreScope);
  const composerController = useComposerController();
  const intl = useIntl();
  const requestedTemplateKind = useComposerControllerSelector(
    composerController,
    (controller: {
      view: {
        state: {
          doc: ComposerDocument;
        };
      };
    }) => getRequestedTemplateKind(controller.view.state.doc),
  );
  const matchingTemplates =
    requestedTemplateKind == null
      ? null
      : getTemplatesForKind(requestedTemplateKind);
  const [pendingTemplateId, setPendingTemplateId] = React.useState<
    string | null
  >(null);
  const isAttachingTemplate = pendingTemplateId != null;
  if (
    !canUseTemplateAttachments ||
    matchingTemplates == null ||
    matchingTemplates.length === 0
  ) {
    return null;
  }
  const isDocumentTemplateRequest = requestedTemplateKind === "document";
  async function attachTemplate(template: ArtifactTemplate) {
    setPendingTemplateId(template.id);
    try {
      await onAddFileAssetAttachment({
        assetUrl: template.assetUrl,
        label: template.filename,
      });
      composerController.focus();
    } catch {
      appScopeStore.get(toastApiSignal).danger(
        intl.formatMessage({
          id: "home.artifactTemplates.attachError",
          defaultMessage: "Unable to attach template",
          description:
            "Toast shown when attaching a document, presentation, or spreadsheet template fails",
        }),
      );
    } finally {
      setPendingTemplateId(null);
    }
  }
  return (
    <section
      data-home-artifact-templates={true}
      className="mx-auto mt-0.5 flex w-full max-w-3xl min-w-0 flex-col gap-1 pb-1"
    >
      <div className="flex min-w-0 items-center py-1.5">
        <div className="flex min-w-0 flex-1 py-row-y pr-1 pl-3.5 text-left">
          <HomeRowContent>
            <HomeRowLabel className="font-medium text-token-text-primary">
              <FormattedMessage
                id="home.artifactTemplates.title"
                defaultMessage="Start with a template"
                description="Section title for document, presentation, and spreadsheet template cards under the home composer"
              />
            </HomeRowLabel>
          </HomeRowContent>
        </div>
      </div>
      <div
        className={clsx(
          "grid grid-cols-1 gap-4 px-3",
          isDocumentTemplateRequest ? "sm:grid-cols-4" : "sm:grid-cols-3",
        )}
      >
        {matchingTemplates.map((template, index) => {
          const isPending = pendingTemplateId === template.id;
          return (
            <button
              key={template.id}
              type="button"
              className={clsx(
                styles.card,
                "group relative -m-1 flex min-w-0 cursor-interaction flex-col gap-2 rounded-2xl p-1 text-left outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-token-focus-border disabled:cursor-default disabled:opacity-70",
              )}
              style={{
                animationDelay: `calc(var(--transition-duration-basic) + ${index * 25}ms)`,
              }}
              aria-label={intl.formatMessage(
                {
                  id: "home.artifactTemplates.attach",
                  defaultMessage: "Attach {title}",
                  description:
                    "Accessible label for selecting a document, presentation, or spreadsheet template",
                },
                {
                  title: intl.formatMessage(template.title),
                },
              )}
              disabled={isAttachingTemplate}
              onClick={() => {
                attachTemplate(template);
              }}
            >
              <div
                className={clsx(
                  "overflow-hidden rounded-xl border border-token-border bg-token-main-surface-primary shadow-sm ring-4 ring-transparent group-hover:ring-token-border-light group-focus-visible:ring-token-focus-border",
                  isDocumentTemplateRequest ? "aspect-[4/5]" : "aspect-video",
                )}
              >
                <img
                  src={template.previewUrl}
                  alt=""
                  className={clsx(
                    "h-full w-full object-top",
                    isDocumentTemplateRequest
                      ? "object-contain"
                      : "object-cover",
                    isPending && "motion-safe:animate-pulse",
                  )}
                  draggable={false}
                />
              </div>
              <div className="min-w-0 -translate-y-0.5 truncate pr-2 pb-1 pl-0.5 text-sm leading-5 font-normal tracking-normal text-token-text-secondary group-hover:text-token-text-primary group-focus-visible:text-token-text-primary">
                <FormattedMessage {...template.title} />
              </div>
            </button>
          );
        })}
      </div>
      {backPrompt == null ? null : (
        <button
          type="button"
          className="flex w-fit min-w-0 cursor-interaction py-row-y text-left text-token-description-foreground outline-hidden enabled:hover:text-token-foreground enabled:focus:text-token-foreground disabled:cursor-default disabled:opacity-70"
          disabled={isAttachingTemplate}
          onClick={() => {
            composerController.setText(backPrompt);
            composerController.focus();
          }}
        >
          <HomeRowContent>
            <HomeRowIcon aria-hidden="true">
              <ArrowLeftIcon className="icon-xs shrink-0" />
            </HomeRowIcon>
            <HomeRowLabel>
              <FormattedMessage
                id="home.artifactTemplates.back"
                defaultMessage="Back"
                description="Button label for returning from artifact template cards to new chat suggestions"
              />
            </HomeRowLabel>
          </HomeRowContent>
        </button>
      )}
    </section>
  );
}
function getTemplatesForKind(kind: ArtifactTemplateKind) {
  return artifactTemplates.filter((template) => template.kind === kind);
}
function getRequestedTemplateKind(
  composerDocument: ComposerDocument,
): ArtifactTemplateKind | null {
  let requestedKind: ArtifactTemplateKind | null = null;
  composerDocument.descendants((node) => {
    if (
      requestedKind != null ||
      (node.type.name !== "skillMention" && node.type.name !== "pluginMention")
    ) {
      return true;
    }
    const kind = getTemplateKindFromMentionPath(
      typeof node.attrs.path === "string" ? node.attrs.path : "",
    );
    if (kind != null) requestedKind = kind;
    return true;
  });
  return requestedKind;
}
function getTemplateKindFromMentionPath(
  rawPath: string,
): ArtifactTemplateKind | null {
  const normalizedPath = rawPath.toLowerCase().replaceAll("\\", "/");
  if (normalizedPath.startsWith("plugin://")) {
    return getTemplateKindFromSkillName(
      normalizedPath.slice(9).split("@")[0] ?? "",
    );
  }
  const skillName = normalizedPath.match(
    /(?:^|\/)skills\/([^/]+)\/skill\.md$/,
  )?.[1];
  return skillName == null ? null : getTemplateKindFromSkillName(skillName);
}
function getTemplateKindFromSkillName(
  skillName: string,
): ArtifactTemplateKind | null {
  if (skillName === "documents") return "document";
  if (skillName === "presentations") return "presentation";
  if (skillName === "spreadsheets") return "spreadsheet";
  return null;
}
