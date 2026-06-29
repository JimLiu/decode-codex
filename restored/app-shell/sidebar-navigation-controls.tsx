// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// App-shell sidebar trigger plus back/forward navigation controls. The sidebar
// trigger toggles the sidebar (swapping its icon and surfacing an unread badge
// when collapsed), while the back/forward buttons run the navigation commands and
// are only shown inside the Electron/extension host.
import { useEffect, type ComponentType, type ReactNode } from "react";
import {
  FormattedMessage,
  defineMessages,
  useIntl,
} from "../vendor/react-intl";
import { Button } from "../ui/button";
import { Tooltip } from "../ui/tooltip-b";
import { runCommand } from "../utils/run-command";
import {
  canNavigateBackSignal,
  canNavigateForwardSignal,
} from "./navigation-history-signals";
import {
  ElectronExtensionGate,
  appStoreScope,
  keyboardShortcutRegistry,
  navigationBackChevronIcon,
  sidebarPanelClosedIcon,
  sidebarPanelOpenIcon,
  sidebarPeekActiveSignal,
  sidebarPeekHoverSignal,
  sidebarPeekLockedSignal,
  sidebarTriggerHoveredSignal,
  sidebarUnreadIcon,
  sidebarVisibleSignal,
  unreadActivityCountSignal,
  useAppScope,
  useCommandShortcut,
  useSignalValue,
} from "../boundaries/onboarding-commons-externals.facade";

type IconComponent = ComponentType<{ className?: string }>;

interface AppStore {
  get(signal: unknown, key?: unknown): unknown;
  set(signal: unknown, value: unknown): void;
}

const navigationCommandMessages = defineMessages({
  navigateBack: {
    id: "codex.command.navigateBack",
    defaultMessage: "Back",
    description: "Command menu item to navigate back",
  },
  navigateForward: {
    id: "codex.command.navigateForward",
    defaultMessage: "Forward",
    description: "Command menu item to navigate forward",
  },
});

function runNavigateForwardCommand() {
  return runCommand("navigateForward", "sidebar_forward");
}

function runNavigateBackCommand() {
  return runCommand("navigateBack", "sidebar_back");
}

interface NavigationIconButtonProps {
  ariaLabel: string;
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  onPointerEnter?: () => void;
  onPointerLeave?: () => void;
  shortcut?: ReactNode;
  tooltipContent?: ReactNode;
  tooltipDisabled?: boolean;
  viewTransitionName?: string;
}

function NavigationIconButton({
  ariaLabel,
  children,
  disabled = false,
  onClick,
  onPointerEnter,
  onPointerLeave,
  shortcut,
  tooltipContent,
  tooltipDisabled = false,
  viewTransitionName,
}: NavigationIconButtonProps) {
  const style = viewTransitionName == null ? undefined : { viewTransitionName };
  const button = (
    <Button
      aria-label={ariaLabel}
      color="ghost"
      disabled={disabled}
      style={style}
      size="toolbar"
      uniform
      onClick={onClick}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
    >
      {children}
    </Button>
  );
  return (
    <Tooltip
      disabled={tooltipDisabled}
      tooltipContent={tooltipContent}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      shortcut={shortcut}
    >
      {button}
    </Tooltip>
  );
}

export interface SidebarNavigationControlsProps {
  hideUnreadBadge?: boolean;
  onToggleSidebar?: () => void;
}

export function SidebarNavigationControls(
  props?: SidebarNavigationControlsProps,
) {
  const { hideUnreadBadge = false, onToggleSidebar } = props ?? {};
  const store = useAppScope(appStoreScope) as AppStore;
  const intl = useIntl();
  const isSidebarVisible = useSignalValue(sidebarVisibleSignal) as boolean;
  const isPeekActive = useSignalValue(sidebarPeekActiveSignal) as boolean;
  const isPeekLocked = useSignalValue(sidebarPeekLockedSignal) as boolean;
  const unreadCount = useSignalValue(unreadActivityCountSignal) as number;
  const canNavigateBack = useSignalValue(canNavigateBackSignal) as boolean;
  const canNavigateForward = useSignalValue(
    canNavigateForwardSignal,
  ) as boolean;
  const toggleSidebarShortcut = useCommandShortcut(
    keyboardShortcutRegistry,
    "toggleSidebar",
  ) as ReactNode;
  const navigateBackShortcut = useCommandShortcut(
    keyboardShortcutRegistry,
    "navigateBack",
  ) as ReactNode;
  const navigateForwardShortcut = useCommandShortcut(
    keyboardShortcutRegistry,
    "navigateForward",
  ) as ReactNode;

  const toggleSidebarLabel = isSidebarVisible
    ? intl.formatMessage({
        id: "app.sidebar.hide",
        defaultMessage: "Hide sidebar",
        description: "Accessible label to collapse the sidebar chrome",
      })
    : intl.formatMessage({
        id: "app.sidebar.show",
        defaultMessage: "Show sidebar",
        description: "Accessible label to expand the sidebar chrome",
      });

  let toggleSidebarIcon: IconComponent = isSidebarVisible
    ? (sidebarPanelOpenIcon as IconComponent)
    : (sidebarPanelClosedIcon as IconComponent);
  if (!hideUnreadBadge && !isSidebarVisible && unreadCount > 0) {
    toggleSidebarIcon = sidebarUnreadIcon as IconComponent;
  }

  useEffect(
    () => () => {
      store.set(sidebarTriggerHoveredSignal, false);
      store.set(sidebarPeekHoverSignal, false);
      store.set(sidebarPeekLockedSignal, false);
    },
    [store],
  );

  const toggleTooltip = (
    <FormattedMessage
      id="app.sidebar.tooltip"
      defaultMessage="Toggle sidebar"
      description="Tooltip for the sidebar trigger button"
    />
  );
  const isToggleTooltipDisabled = isPeekActive || isPeekLocked;
  const handleToggleSidebar = () => {
    store.set(sidebarPeekLockedSignal, true);
    if (onToggleSidebar != null) {
      onToggleSidebar();
      return;
    }
    runCommand("toggleSidebar", "sidebar_trigger");
  };
  const handleTriggerPointerEnter = () => {
    store.set(sidebarTriggerHoveredSignal, true);
  };
  const handleTriggerPointerLeave = () => {
    store.set(sidebarTriggerHoveredSignal, false);
    store.set(sidebarPeekHoverSignal, false);
    store.set(sidebarPeekLockedSignal, false);
  };

  const ToggleSidebarIcon = toggleSidebarIcon;
  const sidebarTrigger = (
    <NavigationIconButton
      ariaLabel={toggleSidebarLabel}
      shortcut={toggleSidebarShortcut}
      tooltipContent={toggleTooltip}
      tooltipDisabled={isToggleTooltipDisabled}
      viewTransitionName="sidebar-trigger"
      onClick={handleToggleSidebar}
      onPointerEnter={handleTriggerPointerEnter}
      onPointerLeave={handleTriggerPointerLeave}
    >
      <ToggleSidebarIcon className="icon-xs" />
    </NavigationIconButton>
  );

  const BackChevronIcon = navigationBackChevronIcon as IconComponent;
  const navigateBackButton = (
    <NavigationIconButton
      ariaLabel={intl.formatMessage(navigationCommandMessages.navigateBack)}
      disabled={!canNavigateBack}
      shortcut={navigateBackShortcut}
      tooltipContent={
        <FormattedMessage {...navigationCommandMessages.navigateBack} />
      }
      onClick={runNavigateBackCommand}
    >
      <BackChevronIcon className="icon-xs" />
    </NavigationIconButton>
  );
  const navigateForwardButton = (
    <NavigationIconButton
      ariaLabel={intl.formatMessage(navigationCommandMessages.navigateForward)}
      disabled={!canNavigateForward}
      shortcut={navigateForwardShortcut}
      tooltipContent={
        <FormattedMessage {...navigationCommandMessages.navigateForward} />
      }
      onClick={runNavigateForwardCommand}
    >
      <BackChevronIcon className="icon-xs -scale-x-100" />
    </NavigationIconButton>
  );

  const navigationButtons = (
    <ElectronExtensionGate electron extension>
      <>
        {navigateBackButton}
        {navigateForwardButton}
      </>
    </ElectronExtensionGate>
  );

  return (
    <div className="flex items-center gap-1">
      {sidebarTrigger}
      {navigationButtons}
    </div>
  );
}
