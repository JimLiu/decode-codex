// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Address-bar button that surfaces the current site's security state and opens the
// site information / permissions panel for the in-app browser.
import {
  type MouseEvent as ReactMouseEvent,
  type SVGProps,
  type SyntheticEvent,
} from "react";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import { classNames } from "../utils/class-names";
import {
  BrowserSiteSettingsIcon,
  browserHostServices,
  getBrowserSitePermissionsOrigin,
} from "../boundaries/onboarding-commons-externals.facade";

const NotSecureIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.505 3.645c.657-1.147 2.333-1.147 2.99 0l6.025 10.526c.64 1.119-.176 2.504-1.495 2.504H3.975c-1.319 0-2.135-1.385-1.495-2.504L8.505 3.645Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
    <path
      d="M10 7.083v3.334"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <path
      d="M10 13.333h.008"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
);

function preventDefaultPointerHandler(
  event: SyntheticEvent<HTMLButtonElement>,
) {
  event.preventDefault();
  event.stopPropagation();
}

export type BrowserSecurityState = "certificate-error" | (string & {});

export type BrowserAddressSecurityIndicatorProps = {
  browserTabId: string;
  conversationId: string;
  currentUrl: string;
  isOwlPermissionsEnabled: boolean;
  isAddressEditing: boolean;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  securityState: BrowserSecurityState;
  shouldAnimateAddressExpansion: boolean;
};

export function BrowserAddressSecurityIndicator({
  browserTabId,
  conversationId,
  currentUrl,
  isOwlPermissionsEnabled,
  isAddressEditing,
  isOpen,
  onOpenChange,
  securityState,
  shouldAnimateAddressExpansion,
}: BrowserAddressSecurityIndicatorProps) {
  const intl = useIntl();
  const viewSiteInfoLabel = intl.formatMessage({
    id: "thread.browser.viewSiteInformation",
    defaultMessage: "View site information",
    description:
      "Accessible label for the browser address bar button that opens current-site permissions and settings",
  });
  const notSecureSiteInfoLabel = intl.formatMessage({
    id: "thread.browser.notSecureSiteInformation",
    defaultMessage: "Not secure, view site information",
    description:
      "Accessible label for the browser address bar button when the current HTTPS page has a certificate error.",
  });

  const hasCertificateError = securityState === "certificate-error";
  const isIndicatorVisible =
    isOwlPermissionsEnabled &&
    getBrowserSitePermissionsOrigin(currentUrl) != null;
  const showNotSecure = isIndicatorVisible && hasCertificateError;
  const buttonLabel = hasCertificateError
    ? notSecureSiteInfoLabel
    : viewSiteInfoLabel;

  let containerWidthClass = "w-7";
  if (isAddressEditing) containerWidthClass = "w-0";
  else if (showNotSecure) containerWidthClass = "w-[104px]";
  const containerTransitionClass = shouldAnimateAddressExpansion
    ? "transition-[width] duration-150 motion-reduce:transition-none"
    : "transition-none";
  const containerClass = classNames(
    "shrink-0 overflow-hidden",
    containerTransitionClass,
    containerWidthClass,
  );

  if (!isIndicatorVisible)
    return <div aria-hidden={true} className={containerClass} />;

  const handleClick = (event: ReactMouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    const siteInfo = browserHostServices?.browserSiteInfo;
    if (siteInfo == null) return;
    const anchorRect = event.currentTarget.getBoundingClientRect();
    onOpenChange(true);
    siteInfo
      .open({
        anchorBounds: {
          height: anchorRect.height,
          width: anchorRect.width,
          x: anchorRect.x,
          y: anchorRect.y,
        },
        browserTabId,
        conversationId,
        siteUrl: currentUrl,
      })
      .then(
        (didOpen: boolean) => {
          if (!didOpen) onOpenChange(false);
        },
        () => onOpenChange(false),
      );
  };

  const buttonStateClass = isOpen && "bg-token-foreground/5";
  const buttonLayoutClass = showNotSecure
    ? "w-[104px] gap-1.5 px-2 text-xs font-medium whitespace-nowrap text-token-error-foreground"
    : "w-7 text-token-description-foreground";
  const buttonClass = classNames(
    "flex h-[28px] cursor-interaction items-center justify-center overflow-hidden rounded-l-[10px] transition-[background-color] outline-none hover:bg-token-foreground/5 focus-visible:bg-token-foreground/5",
    buttonStateClass,
    buttonLayoutClass,
  );

  const buttonContent = showNotSecure ? (
    <>
      <NotSecureIcon className="icon-xs shrink-0" />
      <span className="min-w-0 truncate">
        <FormattedMessage
          id="thread.browser.notSecure"
          defaultMessage="Not secure"
          description="Security status text shown in the browser address bar when the current HTTPS page has a certificate error."
        />
      </span>
    </>
  ) : (
    <BrowserSiteSettingsIcon
      className={classNames(
        "icon-xs",
        isOpen
          ? "opacity-100"
          : "delay-0 opacity-0 transition-opacity duration-0 group-hover/address-bar:delay-75 group-hover/address-bar:opacity-100 group-focus-within/address-bar:delay-0 group-focus-within/address-bar:opacity-100 motion-reduce:transition-none",
      )}
    />
  );

  return (
    <div className={containerClass}>
      <button
        type="button"
        title={buttonLabel}
        data-browser-sidebar-skip-address-commit="true"
        aria-label={buttonLabel}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        onPointerDown={preventDefaultPointerHandler}
        onMouseDown={preventDefaultPointerHandler}
        onClick={handleClick}
        className={buttonClass}
      >
        {buttonContent}
      </button>
    </div>
  );
}
