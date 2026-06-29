// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// In-app menu bar (File/Edit/View/Help) rendered on Windows/Linux desktop builds
// where the native window chrome is replaced by an application menu. Clicking a
// menu opens the corresponding native menu via the Electron bridge.
import { useRef, useState } from "react";
import { FormattedMessage, defineMessages } from "../vendor/react-intl";
import clsx from "clsx";
import { useIntl } from "../vendor/react-intl";
import { shouldShowApplicationMenu } from "./application-menu-availability";
import { applicationMenuIds } from "../boundaries/onboarding-commons-externals.facade";

type ApplicationMenuId = string;

type WindowWithElectronBridge = Window &
  typeof globalThis & {
    electronBridge?: {
      showApplicationMenu?: (
        menuId: ApplicationMenuId,
        x: number,
        y: number,
      ) => Promise<void> | void;
    };
  };

const menuBarMessages = defineMessages({
  file: {
    id: "windowsMenuBar.file",
    defaultMessage: "File",
    description: "Label for the File menu in the desktop application menu bar",
  },
  edit: {
    id: "windowsMenuBar.edit",
    defaultMessage: "Edit",
    description: "Label for the Edit menu in the desktop application menu bar",
  },
  view: {
    id: "windowsMenuBar.view",
    defaultMessage: "View",
    description: "Label for the View menu in the desktop application menu bar",
  },
  help: {
    id: "windowsMenuBar.help",
    defaultMessage: "Help",
    description: "Label for the Help menu in the desktop application menu bar",
  },
});

const menuBarItems = [
  { id: applicationMenuIds.file, message: menuBarMessages.file },
  { id: applicationMenuIds.edit, message: menuBarMessages.edit },
  { id: applicationMenuIds.view, message: menuBarMessages.view },
  { id: applicationMenuIds.help, message: menuBarMessages.help },
];

export function WindowsMenuBar() {
  const intl = useIntl();
  const [openMenuId, setOpenMenuId] = useState<ApplicationMenuId | null>(null);
  const requestCounter = useRef(0);
  if (!shouldShowApplicationMenu()) return null;

  const openMenu = async (
    menuId: ApplicationMenuId,
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    const showApplicationMenu = (window as WindowWithElectronBridge)
      .electronBridge?.showApplicationMenu;
    if (!showApplicationMenu) return;
    const requestId = requestCounter.current + 1;
    requestCounter.current = requestId;
    setOpenMenuId(menuId);
    const anchorRect = event.currentTarget.getBoundingClientRect();
    try {
      await showApplicationMenu(
        menuId,
        Math.round(anchorRect.left),
        Math.round(anchorRect.bottom),
      );
    } finally {
      if (requestCounter.current === requestId) setOpenMenuId(null);
    }
  };

  return (
    <div className="flex items-center gap-0.5 pr-2 pl-1">
      {menuBarItems.map(({ id, message }) => (
        <button
          key={id}
          type="button"
          aria-expanded={openMenuId === id}
          aria-haspopup="menu"
          aria-label={intl.formatMessage(message)}
          className={clsx(
            "no-drag rounded-md border border-transparent px-2.5 py-1 text-base font-normal leading-none outline-none transition-colors",
            openMenuId === id
              ? "bg-[var(--color-token-menubar-selection-background)] text-[var(--color-token-menubar-selection-foreground)]"
              : "text-token-text-tertiary hover:bg-token-foreground/5 hover:text-token-description-foreground focus-visible:bg-token-foreground/5 focus-visible:text-token-description-foreground",
          )}
          onClick={(event) => {
            void openMenu(id, event);
          }}
        >
          <FormattedMessage {...message} />
        </button>
      ))}
    </div>
  );
}
