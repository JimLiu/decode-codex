// Restored from ref/webview/assets/selectable-list-row-CackmjJs.js
// Updated with exports from ref/webview/assets/selectable-list-row-Bm082MDr.js.
import clsx from "clsx";
import type {
  KeyboardEvent,
  MouseEvent,
  MouseEventHandler,
  ReactNode,
} from "react";
type SelectableListRowButtonOptions = {
  isDisabled?: boolean;
  onSelect?: () => void;
};
type SelectableListRowProps = {
  ariaDescribedBy?: string;
  ariaLabel?: string;
  className?: string;
  compactSecondLine?: boolean;
  hasInteractiveContent?: boolean;
  icon?: ReactNode;
  isSelected?: boolean;
  onContextMenu?: MouseEventHandler<HTMLDivElement>;
  onSelect?: () => void;
  rightText?: ReactNode;
  secondaryTitle?: ReactNode;
  secondLine?: ReactNode;
  secondLineRightText?: ReactNode;
  title?: ReactNode;
  titleAdornment?: ReactNode;
};
export function getSelectableListRowButtonProps({
  isDisabled = false,
  onSelect,
}: SelectableListRowButtonOptions) {
  const disabled = isDisabled || onSelect == null;
  return {
    role: "button",
    tabIndex: disabled ? -1 : 0,
    "aria-disabled": disabled,
    onClick: (event: MouseEvent<HTMLDivElement>) => {
      if (!disabled && !event.defaultPrevented) {
        onSelect?.();
      }
    },
    onKeyDown: (event: KeyboardEvent<HTMLDivElement>) => {
      if (
        !disabled &&
        !event.defaultPrevented &&
        event.currentTarget === event.target &&
        (event.key === "Enter" || event.key === " ")
      ) {
        event.preventDefault();
        onSelect?.();
      }
    },
  };
}
export function SelectableListRow({
  ariaDescribedBy,
  ariaLabel,
  className,
  compactSecondLine = false,
  hasInteractiveContent = false,
  icon,
  isSelected,
  onContextMenu,
  onSelect,
  rightText,
  secondaryTitle,
  secondLine,
  secondLineRightText,
  title,
  titleAdornment,
}: SelectableListRowProps) {
  const buttonProps = getSelectableListRowButtonProps({
    onSelect,
  });
  const iconElement = icon ? (
    <span className="flex min-h-6 shrink-0 items-center">{icon}</span>
  ) : null;
  const titleElement = (
    <span className="min-w-0 truncate text-token-foreground">{title}</span>
  );
  const secondaryTitleElement =
    secondaryTitle == null ? null : (
      <span className="max-w-48 shrink-0 truncate text-token-description-foreground">
        {secondaryTitle}
      </span>
    );
  const titleAdornmentElement =
    titleAdornment == null ? null : (
      <span className="flex min-w-0 shrink self-center">{titleAdornment}</span>
    );
  const titleRow = (
    <div className="flex min-w-0 flex-1 items-baseline gap-2 text-base leading-6">
      {titleElement}
      {secondaryTitleElement}
      {titleAdornmentElement}
    </div>
  );
  const rightTextElement =
    rightText == null ? null : (
      <div className="flex min-h-6 shrink-0 items-center text-base text-token-description-foreground">
        {rightText}
      </div>
    );
  const firstLine = (
    <div className="flex min-w-0 items-baseline gap-3">
      {titleRow}
      {rightTextElement}
    </div>
  );
  const secondLineElement = secondLine ? (
    <div className="flex min-w-0 items-center justify-between gap-3 text-sm leading-[22px] text-token-description-foreground">
      <div className="min-w-0 flex-1">{secondLine}</div>
      {secondLineRightText ? (
        <div className="flex min-h-[22px] shrink-0 items-center">
          {secondLineRightText}
        </div>
      ) : null}
    </div>
  ) : null;
  const contentColumn = (
    <div
      className={clsx(
        "flex min-w-0 flex-1 flex-col",
        compactSecondLine ? "gap-0" : "gap-1",
      )}
    >
      {firstLine}
      {secondLineElement}
    </div>
  );
  const content = (
    <div className="flex min-w-0 items-start gap-2">
      {iconElement}
      {contentColumn}
    </div>
  );
  const rootClassName = clsx(
    "group min-h-10 w-full cursor-interaction rounded-lg px-3 py-3 text-left text-base",
    isSelected
      ? "bg-token-list-active-selection-background"
      : "hover:bg-token-list-active-selection-background",
    className,
  );
  if (hasInteractiveContent) {
    return (
      <div
        className={clsx("relative", rootClassName)}
        onContextMenu={onContextMenu}
      >
        <button
          type="button"
          className="focus-visible:ring-token-border-focus absolute inset-0 cursor-interaction rounded-lg outline-none focus-visible:ring-2"
          aria-label={ariaLabel}
          aria-describedby={ariaDescribedBy}
          onClick={onSelect}
        />
        <div className="pointer-events-none relative">{content}</div>
      </div>
    );
  }
  return (
    <div
      aria-label={ariaLabel}
      className={rootClassName}
      onContextMenu={onContextMenu}
      {...buttonProps}
    >
      {content}
    </div>
  );
}
export function initSelectableListRowButtonPropsChunk(): void {}
export function initSelectableListRowChunk(): void {}
