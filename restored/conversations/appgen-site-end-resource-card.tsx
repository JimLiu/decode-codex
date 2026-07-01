// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Appgen/Sites end-of-turn resource card.

import { useState, type MouseEvent } from "react";
import clsx from "clsx";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import { ThreadResourceCardHeader } from "../ui/thread-resource-card";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
import { ShareIcon } from "../icons/share-icon";
import {
  AppgenAccessStateIcon,
  getAppgenAccessStateMessage,
} from "../utils/appgen-access-state-messages";
import { summarizeAppgenAccessPolicy } from "../utils/appgen-access";
import {
  HOVER_REVEAL_CLASS_NAME,
  OVERLAY_BUTTON_CLASS_NAME,
} from "./end-resource-card-shared";
import {
  AppgenSiteIcon,
  OpenInTargetsHoverSubtitle,
  ResourceOverflowMenu,
  handleOpenResourceLink,
  openAppgenShareDialog,
  trackOpenInCodexBrowser,
  useAppgenProject,
  useModalController,
  useOpenTarget,
} from "../boundaries/onboarding-commons-externals.facade";

export interface AppgenAccessPolicySubtitleProps {
  accessPolicy: Parameters<typeof summarizeAppgenAccessPolicy>[0];
  isLoading: boolean;
}

export function AppgenAccessPolicySubtitle({
  accessPolicy,
  isLoading,
}: AppgenAccessPolicySubtitleProps) {
  if (isLoading) {
    return (
      <span className="inline-flex align-middle">
        <Spinner className="icon-2xs" />
      </span>
    );
  }
  const messageValues = summarizeAppgenAccessPolicy(accessPolicy);
  const descriptor = getAppgenAccessStateMessage(messageValues);
  return (
    <span className="flex items-center gap-1">
      <AppgenAccessStateIcon
        aria-hidden={true}
        accessPolicy={accessPolicy}
        className="icon-2xs shrink-0"
      />
      <FormattedMessage {...descriptor} values={messageValues} />
    </span>
  );
}

export interface AppgenSiteResource {
  type: "appgen-app";
  url: string;
  projectId: string;
  title?: string | null;
}

export interface AppgenSiteEndResourceCardProps {
  conversationId: string;
  cwd: string | null;
  hostId: string;
  resource: AppgenSiteResource;
}

export function AppgenSiteEndResourceCard({
  conversationId,
  cwd,
  hostId,
  resource,
}: AppgenSiteEndResourceCardProps) {
  const modalController = useModalController();
  const { data, isLoading } = useAppgenProject(resource.projectId);
  const intl = useIntl();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [shouldLoadTargets, setShouldLoadTargets] = useState(false);
  const accessPolicy = data?.access_policy ?? null;
  const isTitleLoading = isLoading && resource.title == null;
  const title =
    resource.title ??
    data?.title ??
    intl.formatMessage({
      id: "localConversation.endResource.appgenFallbackTitle",
      defaultMessage: "Site",
      description: "Fallback title for a Sites conversation resource card",
    });
  const openTarget = useOpenTarget({
    href: resource.url,
    openTargetIntent: "default",
  });
  const handleClick = (event: MouseEvent) => {
    handleOpenResourceLink({
      event,
      href: resource.url,
      initiator: "mcp_app_resource",
      openTarget,
    });
  };
  const handleOpenInCodexBrowser = () => {
    trackOpenInCodexBrowser({
      conversationId,
      url: resource.url,
      source: "manual",
      initiator: "mcp_app_resource",
    });
  };
  return (
    <div className="group/end-resource relative">
      <button
        aria-label={intl.formatMessage(
          {
            id: "localConversation.endResource.openAppgenSite",
            defaultMessage: "Open {title}",
            description:
              "Accessible label for opening a Sites conversation resource card",
          },
          { title },
        )}
        className={OVERLAY_BUTTON_CLASS_NAME}
        onClick={handleClick}
        onFocus={() => setShouldLoadTargets(true)}
        onMouseEnter={() => setShouldLoadTargets(true)}
        type="button"
      />
      <ThreadResourceCardHeader
        className={clsx(
          "pointer-events-none relative z-10",
          !isMenuOpen && HOVER_REVEAL_CLASS_NAME,
        )}
        icon={
          <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-token-bg-secondary">
            <AppgenSiteIcon className="icon-md" />
          </span>
        }
        title={isTitleLoading ? <Spinner className="icon-2xs" /> : title}
        titleTooltip={isTitleLoading ? undefined : title}
        subtitle={
          <>
            <span className="end-resource-default-subtitle">
              <AppgenAccessPolicySubtitle
                accessPolicy={accessPolicy}
                isLoading={isLoading}
              />
            </span>
            <span className="end-resource-hover-subtitle hidden items-center gap-1">
              <OpenInTargetsHoverSubtitle
                cwd={cwd}
                hostId={hostId}
                href={resource.url}
                openTarget={openTarget}
                shouldLoadTargets={shouldLoadTargets}
              />
            </span>
          </>
        }
        trailing={
          <div className="flex items-center gap-2">
            <ResourceOverflowMenu
              cwd={cwd}
              hostId={hostId}
              isOpen={isMenuOpen}
              onOpenChange={setMenuOpen}
              onOpenInCodexBrowser={handleOpenInCodexBrowser}
              openPath={resource.url}
            />
            <Button
              className="pointer-events-auto"
              color="primary"
              size="toolbar"
              onClick={() => {
                openAppgenShareDialog(modalController, resource.projectId);
              }}
            >
              <ShareIcon aria-hidden={true} className="icon-xs" />
              <FormattedMessage
                id="localConversation.endResource.shareAppgenSite"
                defaultMessage="Share"
                description="Button label for sharing a Sites conversation resource"
              />
            </Button>
          </div>
        }
      />
    </div>
  );
}
