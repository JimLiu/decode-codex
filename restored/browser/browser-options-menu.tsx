// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// In-app browser options dropdown menu (zoom, reload, device toolbar, clear data, settings).
import * as React from "react";
import type { ComponentProps } from "react";
import {
  FormattedMessage,
  useIntl,
  defineMessages,
} from "../vendor/react-intl";
import { Button } from "../ui/button";
import { DropdownMenu, Dropdown } from "../ui/dropdown";
import { MinusIcon } from "../icons/minus-icon";
import { PlusIcon } from "../icons/plus-icon";
import {
  appStoreScope,
  useScopedStore,
  toastControllerToken,
  importBrowserProfiles,
  browserProfileImportDialogOpenAtom,
  useRouterNavigate,
  useBrowserSettingsAvailability,
  useSelectedBrowserHostId,
  clearBrowserBrowsingData,
  passwordManagerChromiumPageId,
  contactInfoChromiumPageId,
  historyChromiumPageId,
  downloadsChromiumPageId,
  extensionsChromiumPageId,
  ResetZoomIcon,
  BrowserOptionsIcon,
} from "../boundaries/onboarding-commons-externals.facade";

const messages = defineMessages({
  hideFloatingComposer: {
    id: "thread.browser.options.hideFloatingComposer",
    defaultMessage: "Hide composer",
    description:
      "Menu item that hides the floating composer in the expanded browser panel",
  },
  showFloatingComposer: {
    id: "thread.browser.options.showFloatingComposer",
    defaultMessage: "Show composer",
    description:
      "Menu item that shows the floating composer in the expanded browser panel",
  },
});

type BrowserOptionsMenuTriggerButtonProps = {
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  size?: ComponentProps<typeof Button>["size"];
  iconClassName?: string;
  uniform?: boolean;
} & Omit<ComponentProps<typeof Button>, "size" | "onClick" | "children">;

function BrowserOptionsMenuTriggerButton(
  props: BrowserOptionsMenuTriggerButtonProps,
) {
  const {
    label,
    onClick,
    size = "toolbar",
    iconClassName = "icon-xs",
    uniform = true,
    ...rest
  } = props;
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onClick?.(event);
  };
  return (
    <Button
      color="ghost"
      size={size}
      uniform={uniform}
      aria-label={label}
      {...rest}
      onClick={handleClick}
    >
      <BrowserOptionsIcon className={iconClassName} />
    </Button>
  );
}

function handleZoomButtonClick(
  event: React.MouseEvent<HTMLButtonElement>,
  callback: () => void,
) {
  event.preventDefault();
  event.stopPropagation();
  callback();
}

export type Props = {
  browserKnowledgeWorkerEnabled: boolean;
  browserProfileImportService: unknown;
  currentZoomPercent: number;
  onHardReload: () => void;
  onOpenChromiumPage: (pageId: string) => void;
  onOpenChange: (open: boolean) => void;
  pageActionsDisabled: boolean;
  isDeviceToolbarMenuItemVisible?: boolean;
  isDeviceToolbarVisible?: boolean;
  isFloatingComposerMenuItemVisible?: boolean;
  isFloatingComposerVisible?: boolean;
  isPrintMenuItemVisible?: boolean;
  onOpenFindInPage: () => void;
  onPrint?: () => void;
  onResetZoom: () => void;
  onToggleFloatingComposer: () => void;
  onToggleDeviceToolbar: () => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
  open: boolean;
};

export function BrowserOptionsMenu(props: Props) {
  const {
    browserKnowledgeWorkerEnabled,
    browserProfileImportService,
    currentZoomPercent,
    onHardReload,
    onOpenChromiumPage,
    onOpenChange,
    pageActionsDisabled,
    isDeviceToolbarMenuItemVisible = true,
    isDeviceToolbarVisible = false,
    isFloatingComposerMenuItemVisible = false,
    isFloatingComposerVisible = true,
    isPrintMenuItemVisible = false,
    onOpenFindInPage,
    onPrint,
    onResetZoom,
    onToggleFloatingComposer,
    onToggleDeviceToolbar,
    onZoomIn,
    onZoomOut,
    open,
  } = props;

  const store = useScopedStore(appStoreScope);
  const intl = useIntl();
  const navigate = useRouterNavigate();
  const [isClearingData, setIsClearingData] = React.useState(false);
  const { selectedHostId } = useSelectedBrowserHostId();
  const availability = useBrowserSettingsAvailability({
    hostId: selectedHostId,
  });

  const optionsLabel = intl.formatMessage({
    id: "thread.browser.options",
    defaultMessage: "Browser options",
    description: "Accessible label for the in-app browser options menu",
  });
  const zoomLabel = intl.formatMessage({
    id: "thread.browser.zoom",
    defaultMessage: "Zoom",
    description: "Label for in-app browser zoom controls",
  });
  const zoomOutLabel = intl.formatMessage({
    id: "browserSidebar.zoomBanner.zoomOut",
    defaultMessage: "Zoom out",
    description:
      "Accessible label for the zoom out action in the browser zoom banner",
  });
  const zoomInLabel = intl.formatMessage({
    id: "browserSidebar.zoomBanner.zoomIn",
    defaultMessage: "Zoom in",
    description:
      "Accessible label for the zoom in action in the browser zoom banner",
  });
  const resetLabel = intl.formatMessage({
    id: "browserSidebar.zoomBanner.reset",
    defaultMessage: "Reset",
    description: "Button label for the reset action in the browser zoom banner",
  });

  const clearBrowsingData = (dataType: "cookies" | "cache") => {
    if (isClearingData) return;
    setIsClearingData(true);
    clearBrowserBrowsingData([dataType]).then(
      () => {
        store.get(toastControllerToken).success(
          dataType === "cookies"
            ? intl.formatMessage({
                id: "settings.browserUse.browser.cookiesCleared",
                defaultMessage: "Browser cookies cleared",
                description: "Toast shown after clearing browser cookies",
              })
            : intl.formatMessage({
                id: "settings.browserUse.browser.cacheCleared",
                defaultMessage: "Browser cache cleared",
                description:
                  "Toast shown after clearing browser cached images and files",
              }),
        );
        setIsClearingData(false);
      },
      () => {
        store.get(toastControllerToken).danger(
          dataType === "cookies"
            ? intl.formatMessage({
                id: "settings.browserUse.browser.clearCookiesError",
                defaultMessage: "Unable to clear browser cookies",
                description: "Toast shown when clearing browser cookies fails",
              })
            : intl.formatMessage({
                id: "settings.browserUse.browser.clearCacheError",
                defaultMessage: "Unable to clear browser cache",
                description:
                  "Toast shown when clearing browser cached images and files fails",
              }),
        );
        setIsClearingData(false);
      },
    );
  };

  const triggerButton = (
    <BrowserOptionsMenuTriggerButton
      data-browser-sidebar-skip-address-commit="true"
      iconClassName="icon-xs rotate-90"
      label={optionsLabel}
      title={optionsLabel}
    />
  );

  const passwordsAndAutofillItem =
    availability.passwordManager.enabled || availability.contactInfo.enabled ? (
      <Dropdown.FlyoutSubmenuItem
        label={
          <FormattedMessage
            id="thread.browser.passwordsAndAutofill"
            defaultMessage="Passwords and autofill"
            description="Submenu containing the in-app browser password and autofill managers"
          />
        }
      >
        {availability.passwordManager.enabled ? (
          <Dropdown.Item
            onSelect={() => {
              onOpenChromiumPage(passwordManagerChromiumPageId);
            }}
          >
            <FormattedMessage
              id="thread.browser.passwordManager"
              defaultMessage="Password manager"
              description="Menu item that opens the in-app browser password manager"
            />
          </Dropdown.Item>
        ) : null}
        {availability.contactInfo.enabled ? (
          <Dropdown.Item
            onSelect={() => {
              onOpenChromiumPage(contactInfoChromiumPageId);
            }}
          >
            <FormattedMessage
              id="thread.browser.contactInfo"
              defaultMessage="Contact info"
              description="Menu item that opens the in-app browser contact info manager"
            />
          </Dropdown.Item>
        ) : null}
      </Dropdown.FlyoutSubmenuItem>
    ) : null;

  const importProfilesItem =
    browserKnowledgeWorkerEnabled && browserProfileImportService != null ? (
      <Dropdown.Item
        onSelect={() => {
          importBrowserProfiles(store, browserProfileImportService);
          store.set(browserProfileImportDialogOpenAtom, true);
        }}
      >
        <FormattedMessage
          id="thread.browser.importCookiesAndPasswords"
          defaultMessage="Import cookies and passwords…"
          description="Menu item that opens the browser profile import dialog"
        />
      </Dropdown.Item>
    ) : null;

  const historyItem = availability.history.enabled ? (
    <Dropdown.Item
      onSelect={() => {
        onOpenChromiumPage(historyChromiumPageId);
      }}
    >
      <FormattedMessage
        id="thread.browser.history"
        defaultMessage="History"
        description="Menu item that opens the in-app browser history"
      />
    </Dropdown.Item>
  ) : null;

  const downloadsItem =
    browserKnowledgeWorkerEnabled && availability.downloads.enabled ? (
      <Dropdown.Item
        onSelect={() => {
          onOpenChromiumPage(downloadsChromiumPageId);
        }}
      >
        <FormattedMessage
          id="thread.browser.downloads"
          defaultMessage="Downloads"
          description="Menu item that opens the global downloads manager"
        />
      </Dropdown.Item>
    ) : null;

  const extensionsItem = availability.extensions.enabled ? (
    <Dropdown.Item
      onSelect={() => {
        onOpenChromiumPage(extensionsChromiumPageId);
      }}
    >
      <FormattedMessage
        id="thread.browser.extensions"
        defaultMessage="Extensions"
        description="Menu item that opens the in-app browser extension manager"
      />
    </Dropdown.Item>
  ) : null;

  const clearBrowsingDataLabel = (
    <FormattedMessage
      id="thread.browser.clearBrowsingData"
      defaultMessage="Clear browsing data"
      description="Submenu containing actions to clear in-app browser data"
    />
  );
  const clearCookiesItem = (
    <Dropdown.Item
      disabled={isClearingData}
      onSelect={() => clearBrowsingData("cookies")}
    >
      <FormattedMessage
        id="thread.browser.clearCookies"
        defaultMessage="Clear cookies"
        description="Menu item that clears in-app browser cookies"
      />
    </Dropdown.Item>
  );
  const clearCacheItem = (
    <Dropdown.Item
      disabled={isClearingData}
      onSelect={() => clearBrowsingData("cache")}
    >
      <FormattedMessage
        id="thread.browser.clearCache"
        defaultMessage="Clear cache"
        description="Menu item that clears the in-app browser cache"
      />
    </Dropdown.Item>
  );
  const clearBrowsingDataSubmenu = (
    <Dropdown.FlyoutSubmenuItem
      disabled={isClearingData}
      label={clearBrowsingDataLabel}
    >
      {clearCookiesItem}
      {clearCacheItem}
    </Dropdown.FlyoutSubmenuItem>
  );

  const zoomSeparator = <Dropdown.Separator />;
  const zoomTitle = (
    <span className="min-w-0 flex-1 truncate">
      <FormattedMessage
        id="thread.browser.zoom"
        defaultMessage="Zoom"
        description="Label for in-app browser zoom controls"
      />
    </span>
  );
  const zoomOutButton = (
    <button
      type="button"
      aria-label={zoomOutLabel}
      title={zoomOutLabel}
      disabled={pageActionsDisabled}
      className="flex h-6 w-6 cursor-interaction items-center justify-center text-token-description-foreground outline-none hover:bg-token-list-hover-background focus:bg-token-list-hover-background disabled:cursor-not-allowed disabled:opacity-40"
      onClick={(event) => handleZoomButtonClick(event, onZoomOut)}
    >
      <MinusIcon className="icon-xs" />
    </button>
  );
  const zoomPercentDisplay = (
    <div className="w-11 border-x border-token-border py-0.5 text-center tabular-nums">
      <FormattedMessage
        id="thread.browser.zoomPercent"
        defaultMessage={"{zoomPercent}%"}
        description="Zoom percentage shown in in-app browser controls"
        values={{ zoomPercent: currentZoomPercent }}
      />
    </div>
  );
  const zoomInButton = (
    <button
      type="button"
      aria-label={zoomInLabel}
      title={zoomInLabel}
      disabled={pageActionsDisabled}
      className="flex h-6 w-6 cursor-interaction items-center justify-center text-token-description-foreground outline-none hover:bg-token-list-hover-background focus:bg-token-list-hover-background disabled:cursor-not-allowed disabled:opacity-40"
      onClick={(event) => handleZoomButtonClick(event, onZoomIn)}
    >
      <PlusIcon className="icon-xs" />
    </button>
  );
  const zoomControls = (
    <div className="flex shrink-0 items-center overflow-hidden rounded-md border border-token-border bg-token-foreground/5 text-xs">
      {zoomOutButton}
      {zoomPercentDisplay}
      {zoomInButton}
    </div>
  );
  const resetDisabled = pageActionsDisabled || currentZoomPercent === 100;
  const resetButton = (
    <button
      type="button"
      aria-label={resetLabel}
      title={resetLabel}
      disabled={resetDisabled}
      className="flex h-6 w-6 shrink-0 cursor-interaction items-center justify-center rounded-md text-token-description-foreground outline-none hover:bg-token-list-hover-background focus:bg-token-list-hover-background disabled:cursor-not-allowed disabled:opacity-40"
      onClick={(event) => handleZoomButtonClick(event, onResetZoom)}
    >
      <ResetZoomIcon className="icon-xs" />
    </button>
  );
  const zoomRow = (
    <div
      role="group"
      aria-label={zoomLabel}
      className="flex items-center gap-1 rounded-lg px-[var(--padding-row-x)] py-0.5 text-sm"
    >
      {zoomTitle}
      {zoomControls}
      {resetButton}
    </div>
  );

  const actionsSeparator = <Dropdown.Separator />;
  const hardReloadItem = (
    <Dropdown.Item disabled={pageActionsDisabled} onSelect={onHardReload}>
      <FormattedMessage
        id="thread.browser.hardReload"
        defaultMessage="Force reload"
        description="Menu item that reloads the current in-app browser page without using cache"
      />
    </Dropdown.Item>
  );
  const printItem =
    isPrintMenuItemVisible && onPrint != null ? (
      <Dropdown.Item disabled={pageActionsDisabled} onSelect={onPrint}>
        <FormattedMessage
          id="thread.browser.print"
          defaultMessage="Print"
          description="Menu item that opens the print dialog for the current in-app browser page"
        />
      </Dropdown.Item>
    ) : null;
  const findInPageItem = (
    <Dropdown.Item disabled={pageActionsDisabled} onSelect={onOpenFindInPage}>
      <FormattedMessage
        id="thread.browser.findInPage"
        defaultMessage="Find in page"
        description="Menu item that opens find in page for the in-app browser"
      />
    </Dropdown.Item>
  );
  const deviceToolbarItem = isDeviceToolbarMenuItemVisible ? (
    <Dropdown.Item
      disabled={pageActionsDisabled}
      onSelect={onToggleDeviceToolbar}
    >
      {isDeviceToolbarVisible ? (
        <FormattedMessage
          id="thread.browser.options.hideDeviceToolbar"
          defaultMessage="Hide device toolbar"
          description="Menu item that hides the browser device toolbar viewport controls"
        />
      ) : (
        <FormattedMessage
          id="thread.browser.options.showDeviceToolbar"
          defaultMessage="Show device toolbar"
          description="Menu item that shows the browser device toolbar viewport controls"
        />
      )}
    </Dropdown.Item>
  ) : null;
  const floatingComposerItem = isFloatingComposerMenuItemVisible ? (
    <Dropdown.Item onSelect={onToggleFloatingComposer}>
      {isFloatingComposerVisible ? (
        <FormattedMessage {...messages.hideFloatingComposer} />
      ) : (
        <FormattedMessage {...messages.showFloatingComposer} />
      )}
    </Dropdown.Item>
  ) : null;
  const settingsSeparator = <Dropdown.Separator />;
  const settingsItem = (
    <Dropdown.Item
      onSelect={() => {
        navigate("/settings/browser-use");
      }}
    >
      <FormattedMessage
        id="thread.browser.browserSettings"
        defaultMessage="Browser settings"
        description="Menu item that opens the in-app browser settings"
      />
    </Dropdown.Item>
  );

  return (
    <DropdownMenu
      align="end"
      contentWidth="menuWide"
      open={open}
      onOpenChange={onOpenChange}
      triggerButton={triggerButton}
    >
      {passwordsAndAutofillItem}
      {importProfilesItem}
      {historyItem}
      {downloadsItem}
      {extensionsItem}
      {clearBrowsingDataSubmenu}
      {zoomSeparator}
      {zoomRow}
      {actionsSeparator}
      {hardReloadItem}
      {printItem}
      {findInPageItem}
      {deviceToolbarItem}
      {floatingComposerItem}
      {settingsSeparator}
      {settingsItem}
    </DropdownMenu>
  );
}
