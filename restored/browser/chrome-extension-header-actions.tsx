// Restored from ref/webview/assets/header-CT44CGhD.js
// Header action buttons for the Chrome extension side panel.
import { _appScopeA as useScopedAppValue } from "../boundaries/app-scope";
import { vscodeApiF as vscodeBridge } from "../boundaries/vscode-api";
import { ArrowUpRightLgIcon } from "../icons/arrow-up-right-lg-icon";
import { ComposeIcon } from "../icons/compose-icon";
import { DockIcon } from "../icons/dock-icon";
import { ThreeDotsIcon } from "../icons/three-dots-icon";
import { primaryCommandKeybindingLabelSignal } from "../utils/command-keybindings";
import { runCommand } from "../utils/run-command";
import { Button } from "../ui/button";
import { DropdownMenu, Dropdown } from "../ui/dropdown";
import { Tooltip } from "../ui/tooltip-b";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import {
  CHROME_EXTENSION_POPUP_PATH,
  OPEN_IN_BROWSER_BRIDGE_INITIATOR,
  headerMessages,
} from "./chrome-extension-header-messages";
import type { ChromeGlobal } from "./chrome-extension-header-types";

export function ChromeExtensionMoreActionsMenu({
  conversationId,
}: {
  conversationId?: string | null;
}): JSX.Element {
  const intl = useIntl();
  const extensionVersion = getChromeExtensionVersion();
  const codexForChromeLabel = intl.formatMessage(headerMessages.codexForChrome);
  const menuFooterLabel =
    extensionVersion == null
      ? codexForChromeLabel
      : `${codexForChromeLabel} ${intl.formatMessage(
          headerMessages.extensionVersion,
          { version: extensionVersion },
        )}`;
  const triggerLabel = intl.formatMessage(headerMessages.moreActionsTrigger);
  const trigger = (
    <Tooltip
      tooltipContent={
        <FormattedMessage {...headerMessages.moreActionsTrigger} />
      }
    >
      <Button color="ghost" size="icon" aria-label={triggerLabel}>
        <ThreeDotsIcon className="icon-xs" />
      </Button>
    </Tooltip>
  );

  return (
    <DropdownMenu
      align="end"
      contentWidth="menuBounded"
      triggerButton={trigger}
    >
      {conversationId ? (
        <Dropdown.Item
          RightIcon={ArrowUpRightLgIcon}
          onSelect={() =>
            openChromeExtensionHref(`codex://threads/${conversationId}`)
          }
        >
          <FormattedMessage {...headerMessages.openInApp} />
        </Dropdown.Item>
      ) : null}
      <Dropdown.Item
        RightIcon={ArrowUpRightLgIcon}
        onSelect={() => openChromeExtensionHref("codex://settings")}
      >
        <FormattedMessage {...headerMessages.appSettings} />
      </Dropdown.Item>
      <Dropdown.Item
        RightIcon={ArrowUpRightLgIcon}
        onSelect={() =>
          openChromeExtensionHref("codex://settings/computer-use/google-chrome")
        }
      >
        <FormattedMessage {...headerMessages.chromeComputerUseSettings} />
      </Dropdown.Item>
      <Dropdown.Item
        aria-label={menuFooterLabel}
        className="text-token-foreground/50 hover:!bg-transparent focus:!bg-transparent"
        onSelect={() => openChromeExtensionHref(getChromePopupUrl())}
      >
        <span className="flex w-full items-center justify-between gap-4">
          <FormattedMessage {...headerMessages.codexForChrome} />
          {extensionVersion ? (
            <span className="shrink-0">
              <FormattedMessage
                {...headerMessages.extensionVersion}
                values={{ version: extensionVersion }}
              />
            </span>
          ) : null}
        </span>
      </Dropdown.Item>
    </DropdownMenu>
  );
}

export function NewChatButton(): JSX.Element {
  const intl = useIntl();
  const shortcut = useScopedAppValue(
    primaryCommandKeybindingLabelSignal,
    "newThread",
  ) as string | null;
  const label = intl.formatMessage(headerMessages.newChat);

  return (
    <Tooltip
      tooltipContent={<FormattedMessage {...headerMessages.newChat} />}
      shortcut={shortcut}
    >
      <Button
        color="ghost"
        size="icon"
        onClick={(event) => {
          if (!event.defaultPrevented) startNewThreadFromHeader();
        }}
        aria-label={label}
      >
        <ComposeIcon className="icon-xs" />
      </Button>
    </Tooltip>
  );
}

export function DockToggleButton(): JSX.Element {
  const intl = useIntl();
  const label = intl.formatMessage({
    id: "header.toggleDock",
    defaultMessage: "Toggle dock",
    description: "Button label for toggling the dock from the extension header",
  });

  return (
    <Tooltip tooltipContent={label}>
      <Button
        color="ghost"
        size="icon"
        aria-label={label}
        onClick={() => runCommand("toggleSidebar", "header_dock_button")}
      >
        <DockIcon className="icon-xs" />
      </Button>
    </Tooltip>
  );
}

export function startNewThreadFromHeader(): void {
  runCommand("newThread", "header_new_thread");
}

function openChromeExtensionHref(href: string): void {
  vscodeBridge.dispatchMessage("open-in-browser", {
    initiator: OPEN_IN_BROWSER_BRIDGE_INITIATOR,
    source: "manual",
    url: href,
  });
}

function getChromePopupUrl(): string {
  return (
    (globalThis as ChromeGlobal).chrome?.runtime?.getURL?.(
      CHROME_EXTENSION_POPUP_PATH,
    ) ?? CHROME_EXTENSION_POPUP_PATH
  );
}

function getChromeExtensionVersion(): string | null {
  return (
    (globalThis as ChromeGlobal).chrome?.runtime?.getManifest?.().version ??
    null
  );
}
