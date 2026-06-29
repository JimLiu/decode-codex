// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Toolbar shown during in-app browser annotation takeover mode.

import type { SVGProps } from "react";
import { BrowserScreenshotButton } from "./browser-screenshot-button";
import { XIcon } from "../icons/x-icon";
import { TrashIcon } from "../icons/trash-icon";
import { Button } from "../ui/button";
import { Tooltip } from "../ui/tooltip-b";
import { classNames } from "../utils/class-names";
import { useIntl, FormattedMessage } from "../vendor/react-intl";

const ViewOriginalSideBySideIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M8.50195 17.5V16.498H6.5C5.81091 16.498 5.25395 16.4987 4.80371 16.4619C4.40303 16.4292 4.04237 16.364 3.70606 16.2197L3.56348 16.1533C3.04236 15.8878 2.60586 15.4841 2.30176 14.9883L2.17969 14.7705C1.98772 14.3937 1.90851 13.9873 1.87109 13.5293C1.83432 13.0791 1.83496 12.522 1.83496 11.833V8.16699C1.83496 7.478 1.83432 6.92091 1.87109 6.4707C1.90851 6.0127 1.98772 5.60625 2.17969 5.22949L2.30176 5.01172C2.60586 4.5159 3.04236 4.1122 3.56348 3.84668L3.70606 3.78027C4.04237 3.636 4.40303 3.57083 4.80371 3.53809C5.25395 3.5013 5.81091 3.50195 6.5 3.50195H8.50195V2.5C8.50195 2.13273 8.79972 1.83496 9.16699 1.83496C9.53411 1.83514 9.83203 2.13284 9.83203 2.5V17.5C9.83203 17.8672 9.53411 18.1649 9.16699 18.165C8.79972 18.165 8.50195 17.8673 8.50195 17.5ZM16.835 11.833V8.16699C16.835 7.4561 16.8341 6.96259 16.8027 6.5791C16.7797 6.29739 16.7428 6.1076 16.6914 5.96387L16.6348 5.83398C16.4808 5.53176 16.2466 5.27886 15.959 5.10254L15.833 5.03125C15.675 4.9508 15.4635 4.89397 15.0879 4.86328C14.7044 4.83195 14.211 4.83203 13.5 4.83203H12.5C12.1328 4.83203 11.8351 4.53411 11.835 4.16699C11.835 3.79972 12.1327 3.50195 12.5 3.50195H13.5C14.1891 3.50195 14.746 3.5013 15.1963 3.53809C15.6541 3.5755 16.0599 3.65483 16.4365 3.84668L16.6553 3.96875C17.1509 4.27282 17.5549 4.70856 17.8203 5.22949L17.8867 5.37207C18.0311 5.70855 18.0961 6.06979 18.1289 6.4707C18.1657 6.92091 18.165 7.478 18.165 8.16699V11.833C18.165 12.522 18.1657 13.0791 18.1289 13.5293C18.0961 13.9302 18.0311 14.2914 17.8867 14.6279L17.8203 14.7705C17.5549 15.2914 17.1509 15.7272 16.6553 16.0312L16.4365 16.1533C16.0599 16.3452 15.6541 16.4245 15.1963 16.4619C14.746 16.4987 14.1891 16.498 13.5 16.498H12.5C12.1327 16.498 11.835 16.2003 11.835 15.833C11.8351 15.4659 12.1328 15.168 12.5 15.168H13.5C14.211 15.168 14.7044 15.1681 15.0879 15.1367C15.4635 15.106 15.675 15.0492 15.833 14.9688L15.959 14.8975C16.2466 14.7211 16.4808 14.4682 16.6348 14.166L16.6914 14.0361C16.7428 13.8924 16.7797 13.7026 16.8027 13.4209C16.8341 13.0374 16.835 12.5439 16.835 11.833Z" />
  </svg>
);

const AnnotatePanelIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M8.50195 17.5V16.498H6.5C5.81091 16.498 5.25395 16.4987 4.80371 16.4619C4.40303 16.4292 4.04237 16.364 3.70606 16.2197L3.56348 16.1533C3.04236 15.8878 2.60586 15.4841 2.30176 14.9883L2.17969 14.7705C1.98772 14.3937 1.90851 13.9873 1.87109 13.5293C1.83432 13.0791 1.83496 12.522 1.83496 11.833V8.16699C1.83496 7.478 1.83432 6.92091 1.87109 6.4707C1.90851 6.0127 1.98772 5.60625 2.17969 5.22949L2.30176 5.01172C2.60586 4.5159 3.04236 4.1122 3.56348 3.84668L3.70606 3.78027C4.04237 3.636 4.40303 3.57083 4.80371 3.53809C5.25395 3.5013 5.81091 3.50195 6.5 3.50195H8.50195V2.5C8.50195 2.13273 8.79972 1.83496 9.16699 1.83496C9.53411 1.83514 9.83203 2.13284 9.83203 2.5V17.5C9.83203 17.8672 9.53411 18.1649 9.16699 18.165C8.79972 18.165 8.50195 17.8673 8.50195 17.5ZM16.835 11.833V8.16699C16.835 7.4561 16.8341 6.96259 16.8027 6.5791C16.7797 6.29739 16.7428 6.1076 16.6914 5.96387L16.6348 5.83398C16.4808 5.53176 16.2466 5.27886 15.959 5.10254L15.833 5.03125C15.675 4.9508 15.4635 4.89397 15.0879 4.86328C14.7044 4.83195 14.211 4.83203 13.5 4.83203H12.5C12.1328 4.83203 11.8351 4.53411 11.835 4.16699C11.835 3.79972 12.1327 3.50195 12.5 3.50195H13.5C14.1891 3.50195 14.746 3.5013 15.1963 3.53809C15.6541 3.5755 16.0599 3.65483 16.4365 3.84668L16.6553 3.96875C17.1509 4.27282 17.5549 4.70856 17.8203 5.22949L17.8867 5.37207C18.0311 5.70855 18.0961 6.06979 18.1289 6.4707C18.1657 6.92091 18.165 7.478 18.165 8.16699V11.833C18.165 12.522 18.1657 13.0791 18.1289 13.5293C18.0961 13.9302 18.0311 14.2914 17.8867 14.6279L17.8203 14.7705C17.5549 15.2914 17.1509 15.7272 16.6553 16.0312L16.4365 16.1533C16.0599 16.3452 15.6541 16.4245 15.1963 16.4619C14.746 16.4987 14.1891 16.498 13.5 16.498H12.5C12.1327 16.498 11.835 16.2003 11.835 15.833C11.8351 15.4659 12.1328 15.168 12.5 15.168H13.5C14.211 15.168 14.7044 15.1681 15.0879 15.1367C15.4635 15.106 15.675 15.0492 15.833 14.9688L15.959 14.8975C16.2466 14.7211 16.4808 14.4682 16.6348 14.166L16.6914 14.0361C16.7428 13.8924 16.7797 13.7026 16.8027 13.4209C16.8341 13.0374 16.835 12.5439 16.835 11.833ZM3.16504 11.833C3.16504 12.5439 3.16595 13.0374 3.19727 13.4209C3.22795 13.7965 3.28478 14.008 3.36524 14.166L3.43555 14.293C3.61186 14.5804 3.86488 14.8148 4.16699 14.9688L4.29688 15.0244C4.44065 15.0759 4.63016 15.1137 4.91211 15.1367C5.29563 15.1681 5.78896 15.168 6.5 15.168H8.50195V4.83203H6.5C5.78896 4.83203 5.29563 4.83195 4.91211 4.86328C4.63016 4.88632 4.44065 4.92413 4.29688 4.97559L4.16699 5.03125C3.86488 5.18518 3.61186 5.41959 3.43555 5.70703L3.36524 5.83398C3.28478 5.99198 3.22795 6.20352 3.19727 6.5791C3.16595 6.96259 3.16504 7.4561 3.16504 8.16699V11.833Z" />
  </svg>
);

const TOOLBAR_BACKGROUND_CLASS =
  "bg-[color-mix(in_srgb,var(--color-token-main-surface-primary)_82%,var(--color-token-charts-blue)_18%)]";

const SEND_BUTTON_CLASS =
  "!border-transparent !bg-token-charts-blue !text-token-button-foreground enabled:hover:!bg-token-charts-blue/90 data-[state=open]:!bg-token-charts-blue/90";

interface BrowserAnnotationTakeoverToolbarProps {
  captureScreenshotLabel: string;
  conversationId: string;
  displayUrl: string;
  hasPendingAnnotations: boolean;
  hasQueuedTweaks: boolean;
  isAddModifierPressed: boolean;
  isOriginalViewEnabled: boolean;
  isScreenshotCaptureEnabled?: boolean;
  onAddToComposer: () => void;
  onDiscard: () => void;
  onExit: () => void;
  onOriginalViewBlur: React.FocusEventHandler<HTMLButtonElement>;
  onOriginalViewKeyDown: React.KeyboardEventHandler<HTMLButtonElement>;
  onOriginalViewKeyUp: React.KeyboardEventHandler<HTMLButtonElement>;
  onOriginalViewPointerCancel: React.PointerEventHandler<HTMLButtonElement>;
  onOriginalViewPointerDown: React.PointerEventHandler<HTMLButtonElement>;
  onOriginalViewPointerUp: React.PointerEventHandler<HTMLButtonElement>;
  onSubmit: () => void;
  pendingAnnotationCount: number;
}

export function BrowserAnnotationTakeoverToolbar({
  captureScreenshotLabel,
  conversationId,
  displayUrl,
  hasPendingAnnotations,
  hasQueuedTweaks,
  isAddModifierPressed,
  isOriginalViewEnabled,
  isScreenshotCaptureEnabled = true,
  onAddToComposer,
  onDiscard,
  onExit,
  onOriginalViewBlur,
  onOriginalViewKeyDown,
  onOriginalViewKeyUp,
  onOriginalViewPointerCancel,
  onOriginalViewPointerDown,
  onOriginalViewPointerUp,
  onSubmit,
  pendingAnnotationCount,
}: BrowserAnnotationTakeoverToolbarProps) {
  const intl = useIntl();
  const originalViewLabel = intl.formatMessage({
    id: "thread.browser.tweaks.holdToViewOriginal",
    defaultMessage: "Hold to view original",
    description:
      "Tooltip and aria label for the button that shows the original page without tweaks applied while pressed",
  });
  const discardLabel = intl.formatMessage({
    id: "thread.browser.tweaks.discardAnnotations",
    defaultMessage: "Discard annotations",
    description:
      "Tooltip and aria label for discarding pending in-app browser annotations",
  });
  const exitLabel = intl.formatMessage({
    id: "thread.browser.tweaks.exitAnnotations",
    defaultMessage: "Exit annotation mode",
    description:
      "Tooltip and aria label for exiting annotation mode while keeping pending annotations queued",
  });

  const OriginalViewIcon = isOriginalViewEnabled
    ? ViewOriginalSideBySideIcon
    : AnnotatePanelIcon;

  const sendAriaLabel = pendingAnnotationCount
    ? intl.formatMessage(
        {
          id: "thread.browser.tweaks.sendPendingAnnotationCount",
          defaultMessage:
            "Send {count, plural, one {# pending annotation} other {# pending annotations}}",
          description:
            "Accessible label for the in-app browser annotation toolbar send button when annotations are pending",
        },
        { count: pendingAnnotationCount },
      )
    : undefined;

  const containerClassName = classNames(
    "draggable grid h-full min-w-0 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-3 text-token-foreground",
    TOOLBAR_BACKGROUND_CLASS,
  );

  const exitButton = (
    <Tooltip tooltipContent={exitLabel}>
      <Button
        aria-label={exitLabel}
        color="ghost"
        size="toolbar"
        uniform
        onClick={onExit}
      >
        <XIcon className="icon-sm" />
      </Button>
    </Tooltip>
  );

  const discardButton = (
    <Tooltip tooltipContent={discardLabel}>
      <Button
        aria-label={discardLabel}
        color="ghost"
        size="toolbar"
        uniform
        disabled={!hasPendingAnnotations}
        onClick={onDiscard}
      >
        <TrashIcon className="icon-sm" />
      </Button>
    </Tooltip>
  );

  const leadingControls = (
    <div className="no-drag flex items-center gap-1.5">
      {exitButton}
      {discardButton}
    </div>
  );

  const centerTitle = (
    <div className="min-w-0 truncate text-center text-sm leading-[18px]">
      {isOriginalViewEnabled ? (
        <FormattedMessage
          id="thread.browser.tweaks.originalTitle"
          defaultMessage={"Original • {url}"}
          description="Centered title in the in-app browser tweaks toolbar while the original page preview is active"
          values={{ url: displayUrl }}
        />
      ) : (
        <FormattedMessage
          id="thread.browser.tweaks.title"
          defaultMessage={"Annotating • {url}"}
          description="Centered title in the in-app browser tweaks toolbar"
          values={{ url: displayUrl }}
        />
      )}
    </div>
  );

  const screenshotButton = isScreenshotCaptureEnabled ? (
    <BrowserScreenshotButton
      captureScreenshotLabel={captureScreenshotLabel}
      conversationId={conversationId}
      hasBrowserPage={true}
      isCommentMode={false}
    />
  ) : null;

  const originalViewIconWrapperClassName = classNames(
    "inline-flex items-center justify-center transition-transform duration-100 motion-reduce:transition-none",
    isOriginalViewEnabled && "scale-[0.8]",
  );

  const originalViewButton = (
    <Tooltip tooltipContent={originalViewLabel}>
      <Button
        aria-label={originalViewLabel}
        aria-pressed={isOriginalViewEnabled}
        color={isOriginalViewEnabled ? "ghostActive" : "ghost"}
        size="toolbar"
        title={originalViewLabel}
        uniform
        disabled={!hasQueuedTweaks}
        onBlur={onOriginalViewBlur}
        onKeyDown={onOriginalViewKeyDown}
        onKeyUp={onOriginalViewKeyUp}
        onPointerCancel={onOriginalViewPointerCancel}
        onPointerDown={onOriginalViewPointerDown}
        onPointerUp={onOriginalViewPointerUp}
      >
        <span className={originalViewIconWrapperClassName}>
          <OriginalViewIcon className="icon-sm" />
        </span>
      </Button>
    </Tooltip>
  );

  const handleSend = isAddModifierPressed ? onAddToComposer : onSubmit;

  const pendingCountBadge = sendAriaLabel && (
    <span className="disambiguated-digits ml-0.5 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-black/25 px-1 text-[10px] leading-4 font-semibold text-token-button-foreground">
      {pendingAnnotationCount}
    </span>
  );

  const sendButton = (
    <Button
      aria-label={sendAriaLabel}
      color="primary"
      className={SEND_BUTTON_CLASS}
      size="toolbar"
      disabled={!hasPendingAnnotations}
      onClick={handleSend}
    >
      <FormattedMessage
        id="thread.browser.tweaks.send"
        defaultMessage="Send"
        description="Send button in the in-app browser tweaks toolbar"
      />
      {pendingCountBadge}
    </Button>
  );

  const trailingControls = (
    <div className="no-drag flex items-center gap-3 justify-self-end">
      {screenshotButton}
      {originalViewButton}
      {sendButton}
    </div>
  );

  return (
    <div className={containerClassName}>
      {leadingControls}
      {centerTitle}
      {trailingControls}
    </div>
  );
}
