// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Toolbar button that captures a screenshot of the current in-app browser page.
import { type SVGProps, useState } from "react";
import { classNames } from "../utils/class-names";
import { useSystemPrefersReducedMotion } from "../utils/reduced-motion-preference";
import { Button } from "../ui/button";
import { Tooltip } from "../ui/tooltip-b";
import { vscodeApiF } from "../boundaries/vscode-api";
import {
  appStoreScope,
  browserToolbarActionEvent,
  browserToolbarActionType,
  getDefaultBrowserTabId,
  trackScopedAnalyticsEvent,
  useScopedStore,
} from "../boundaries/onboarding-commons-externals.facade";

const ScreenshotIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M3.33301 12.668C3.70018 12.668 3.99788 12.9659 3.99805 13.333V14.166C3.99805 15.1794 4.81968 16.0008 5.83301 16.001H6.66602L6.80078 16.0146C7.10343 16.0768 7.33076 16.3451 7.33105 16.666C7.33105 16.9872 7.10357 17.2552 6.80078 17.3174L6.66602 17.3311H5.83301C4.08514 17.3309 2.66797 15.9139 2.66797 14.166V13.333C2.66813 12.966 2.96595 12.6681 3.33301 12.668Z" />
    <path d="M16.666 12.668C17.0332 12.668 17.3309 12.9659 17.3311 13.333V14.166C17.3311 15.914 15.914 17.3311 14.166 17.3311H13.333C12.9659 17.3309 12.668 17.0332 12.668 16.666C12.6683 16.2991 12.9661 16.0011 13.333 16.001H14.166C15.1795 16.001 16.001 15.1795 16.001 14.166V13.333C16.0011 12.9661 16.2991 12.6683 16.666 12.668Z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 6.83496C11.748 6.83496 13.165 8.25202 13.165 10C13.165 11.748 11.748 13.165 10 13.165C8.25202 13.165 6.83496 11.748 6.83496 10C6.83496 8.25202 8.25202 6.83496 10 6.83496ZM10 8.16504C8.98656 8.16504 8.16504 8.98656 8.16504 10C8.16504 11.0134 8.98656 11.835 10 11.835C11.0134 11.835 11.835 11.0134 11.835 10C11.835 8.98656 11.0134 8.16504 10 8.16504Z"
    />
    <path d="M6.80078 2.68164C7.1035 2.74379 7.33091 3.01193 7.33105 3.33301C7.33105 3.65422 7.1036 3.9222 6.80078 3.98438L6.66602 3.99805H5.83301C4.81978 3.99818 3.99821 4.81979 3.99805 5.83301V6.66602C3.99805 7.03329 3.70028 7.33105 3.33301 7.33105C2.96585 7.33092 2.66797 7.0332 2.66797 6.66602V5.83301C2.66813 4.08525 4.08524 2.6681 5.83301 2.66797H6.66602L6.80078 2.68164Z" />
    <path d="M14.166 2.66797C15.9139 2.66797 17.3309 4.08517 17.3311 5.83301V6.66602C17.3311 7.03329 17.0333 7.33105 16.666 7.33105C16.299 7.33075 16.001 7.03309 16.001 6.66602V5.83301C16.0008 4.81971 15.1794 3.99805 14.166 3.99805H13.333C12.9659 3.99791 12.668 3.7002 12.668 3.33301C12.6681 2.96596 12.966 2.6681 13.333 2.66797H14.166Z" />
  </svg>
);

function incrementScreenshotAnimationKey(previous: number | null): number {
  return (previous ?? 0) + 1;
}

export type BrowserScreenshotButtonProps = {
  browserTabId?: string | null;
  captureScreenshotLabel: string;
  conversationId: string;
  disabled?: boolean;
  hasBrowserPage: boolean;
  isCommentMode: boolean;
  reserveSpaceWhenHidden?: boolean;
};

export function BrowserScreenshotButton({
  browserTabId,
  captureScreenshotLabel,
  conversationId,
  disabled = false,
  hasBrowserPage,
  isCommentMode,
  reserveSpaceWhenHidden = false,
}: BrowserScreenshotButtonProps) {
  const store = useScopedStore(appStoreScope);
  const prefersReducedMotion = useSystemPrefersReducedMotion();
  const resolvedBrowserTabId =
    browserTabId ?? getDefaultBrowserTabId(conversationId);
  const [animationKey, setAnimationKey] = useState<number | null>(null);

  const isContainerHidden = !hasBrowserPage || isCommentMode;
  const hiddenStateClass =
    !hasBrowserPage &&
    (reserveSpaceWhenHidden
      ? "pointer-events-none max-w-8 overflow-hidden opacity-0"
      : "pointer-events-none max-w-0 scale-95 overflow-hidden opacity-0");
  const commentModeClass =
    hasBrowserPage &&
    isCommentMode &&
    "pointer-events-none max-w-0 translate-x-1 scale-90 overflow-hidden opacity-0";
  const visibleStateClass =
    hasBrowserPage &&
    !isCommentMode &&
    "max-w-8 translate-x-0 scale-100 overflow-visible opacity-100";
  const containerClass = classNames(
    "ease-basic origin-right transition-[max-width,opacity,transform] duration-150 motion-reduce:transition-none",
    hiddenStateClass,
    commentModeClass,
    visibleStateClass,
  );

  const isTooltipDisabled = isCommentMode || disabled || !hasBrowserPage;
  const isButtonDisabled = disabled || !hasBrowserPage;
  const buttonTabIndex = isCommentMode ? -1 : undefined;

  const handleClick = () => {
    trackScopedAnalyticsEvent(store, browserToolbarActionEvent, {
      action:
        browserToolbarActionType.CODEX_IN_APP_BROWSER_TOOLBAR_ACTION_TYPE_CAPTURE_SCREENSHOT_CLICKED,
    });
    if (!prefersReducedMotion) setAnimationKey(incrementScreenshotAnimationKey);
    vscodeApiF.dispatchMessage("browser-sidebar-command", {
      conversationId,
      browserTabId: resolvedBrowserTabId,
      command: {
        type: "capture-screenshot",
      },
    });
  };

  const animationContainerKey = `screenshot-icon-${animationKey ?? 0}`;
  const clickAnimationClass =
    animationKey != null && "browser-sidebar-screenshot-click";
  const iconWrapperClass = classNames(
    "inline-flex items-center justify-center",
    clickAnimationClass,
  );
  const lingerColorClass =
    animationKey != null && "browser-sidebar-screenshot-color-linger";

  const iconNode = (
    <span key={animationContainerKey} className={iconWrapperClass}>
      <span
        className={classNames(lingerColorClass)}
        onAnimationEnd={() => {
          setAnimationKey(null);
        }}
      >
        <ScreenshotIcon className="icon-sm" />
      </span>
    </span>
  );

  const button = (
    <Button
      color="ghost"
      size="toolbar"
      uniform={true}
      data-browser-sidebar-skip-address-commit="true"
      disabled={isButtonDisabled}
      aria-label={captureScreenshotLabel}
      title={captureScreenshotLabel}
      tabIndex={buttonTabIndex}
      onClick={handleClick}
    >
      {iconNode}
    </Button>
  );

  return (
    <div aria-hidden={isContainerHidden} className={containerClass}>
      <Tooltip
        tooltipContent={captureScreenshotLabel}
        disabled={isTooltipDisabled}
      >
        {button}
      </Tooltip>
    </div>
  );
}
