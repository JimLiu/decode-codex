// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Button used to cancel an in-flight git action, available as a small icon button
// or a toolbar button whose spinner swaps to a close icon on hover/focus.

import type { ReactNode } from "react";
import { useIntl } from "../vendor/react-intl";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
import { CloseIcon } from "../boundaries/onboarding-commons-externals.facade";

const ICON_BUTTON_CLASS_NAME =
  "cursor-interaction flex size-4 shrink-0 items-center justify-center border-0 bg-transparent p-0 text-token-text-tertiary hover:text-token-foreground focus:outline-none";

export interface CancelGitActionButtonProps {
  variant?: "icon" | "toolbar";
  children?: ReactNode;
  onCancel: () => void;
}

export function CancelGitActionButton({
  variant = "icon",
  children,
  onCancel,
}: CancelGitActionButtonProps) {
  const intl = useIntl();
  const label = intl.formatMessage({
    id: "localConversation.gitActions.cancel",
    defaultMessage: "Cancel git action",
    description: "Accessible label for canceling an active git action",
  });

  if (variant === "toolbar") {
    const icon = (
      <span className="relative size-3 shrink-0">
        <Spinner
          className="icon-xxs"
          containerClassName="absolute inset-0 group-hover:hidden group-focus-visible:hidden"
        />
        <CloseIcon className="icon-xxs absolute inset-0 hidden group-hover:block group-focus-visible:block" />
      </span>
    );
    return (
      <Button
        allowShrink={true}
        aria-label={label}
        className="group"
        color="outline"
        size="toolbar"
        onClick={onCancel}
      >
        {icon}
        {children}
      </Button>
    );
  }

  return (
    <button
      type="button"
      aria-label={label}
      className={ICON_BUTTON_CLASS_NAME}
      onClick={onCancel}
    >
      <CloseIcon className="icon-xs" />
    </button>
  );
}
