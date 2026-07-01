// Restored from ref/webview/assets/settings-row-FLzCWFCC.js
// settings-row-FLzCWFCC chunk restored from the Codex webview bundle.
import type { MouseEventHandler, ReactNode } from "react";
import clsx from "clsx";
type SettingsControlRowProps = {
  className?: string;
  control?: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  id?: string;
  label?: ReactNode;
  variant?: "default" | "nested";
};
type SettingsButtonRowProps = {
  actions?: ReactNode;
  ariaLabel?: string;
  className?: string;
  description?: ReactNode;
  disabled?: boolean;
  icon?: ReactNode;
  label?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
type SettingsKeyValueRowProps = {
  children?: ReactNode;
  compactLabelInset?: boolean;
  label?: ReactNode;
  valueAlignment?: "start" | "end";
  variant?: "default" | "compact";
};
function SettingsKeyValueRow({
  children,
  compactLabelInset = true,
  label,
  valueAlignment = "start",
  variant = "default",
}: SettingsKeyValueRowProps) {
  const rowClassName = clsx(
    "grid items-center",
    variant === "compact"
      ? "h-[1.875rem] w-full grid-cols-[auto_minmax(0,1fr)] gap-x-6 overflow-x-hidden rounded-lg text-base leading-[18px] text-token-foreground electron:opacity-75"
      : "min-h-14 gap-1 px-4 py-2 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-6",
  );
  const labelClassName = clsx(
    "min-w-0",
    variant === "compact"
      ? clsx("flex items-center pr-2 text-left", compactLabelInset && "pl-1")
      : "text-sm text-token-text-secondary",
  );
  const valueClassName = clsx(
    "min-w-0",
    variant === "compact"
      ? "flex items-center justify-end justify-self-stretch overflow-hidden"
      : clsx(
          "break-words whitespace-normal text-sm text-token-text-primary",
          valueAlignment === "end" && "text-right",
        ),
  );
  return (
    <div className={rowClassName}>
      <div className={labelClassName}>{label}</div>
      <div className={valueClassName}>{children}</div>
    </div>
  );
}
function SettingsControlRow({
  label,
  description,
  control,
  icon,
  className,
  id,
  variant = "default",
}: SettingsControlRowProps) {
  const hasLabelContent = label != null || description != null || icon != null;
  const rowClassName = clsx(
    variant === "nested"
      ? "flex min-h-10 items-center justify-between gap-3 px-4 py-0.5 max-sm:min-h-0 max-sm:flex-col max-sm:items-stretch"
      : "flex items-center justify-between gap-4 p-3",
    className,
  );
  const controlClassName = clsx(
    variant === "nested"
      ? "flex min-w-0 flex-1 items-center justify-end max-sm:justify-stretch"
      : "flex shrink-0 items-center gap-2",
  );
  return (
    <div id={id} className={rowClassName}>
      {hasLabelContent ? (
        <div className="flex min-w-0 items-center gap-3">
          {icon == null ? null : <span className="shrink-0">{icon}</span>}
          <div className="flex min-w-0 flex-col gap-1">
            <div className="min-w-0 text-sm text-token-text-primary">
              {label}
            </div>
            {description ? (
              <div
                className={clsx(
                  "text-token-text-secondary min-w-0",
                  variant === "nested" ? "text-xs" : "text-sm",
                )}
              >
                {description}
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
      <div className={controlClassName}>{control}</div>
    </div>
  );
}
function SettingsButtonRow({
  actions,
  ariaLabel,
  className,
  description,
  disabled,
  icon,
  label,
  onClick,
}: SettingsButtonRowProps) {
  const rowClassName = clsx(
    "group flex w-full items-center",
    !disabled &&
      "hover:bg-token-list-hover-background focus-within:bg-token-list-hover-background",
  );
  const buttonClassName = clsx(
    "focus-visible:outline-token-focus flex min-w-0 flex-1 cursor-interaction items-center gap-4 p-3 text-left disabled:cursor-default disabled:opacity-60",
    className,
  );
  return (
    <div className={rowClassName}>
      <button
        aria-label={ariaLabel}
        className={buttonClassName}
        disabled={disabled}
        onClick={onClick}
        type="button"
      >
        <div className="flex min-w-0 items-center gap-3">
          {icon == null ? null : <span className="shrink-0">{icon}</span>}
          <div className="flex min-w-0 flex-col gap-1">
            <div className="min-w-0 text-sm text-token-text-primary">
              {label}
            </div>
            {description ? (
              <div className="min-w-0 text-sm text-token-text-secondary">
                {description}
              </div>
            ) : null}
          </div>
        </div>
      </button>
      {!disabled && actions != null ? (
        <div className="flex shrink-0 items-center gap-1 pr-3">{actions}</div>
      ) : null}
    </div>
  );
}

function initSettingsControlRowChunk(): void {}

export {
  SettingsKeyValueRow,
  SettingsControlRow,
  SettingsButtonRow,
  initSettingsControlRowChunk,
};
