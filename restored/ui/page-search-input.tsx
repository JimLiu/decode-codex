// Restored from ref/webview/assets/page-search-input-Fp7_sG04.js
// Supersedes historical restore from ref/webview/assets/page-search-input-BoNxWh4n.js.
// Page search input component.
import type { KeyboardEventHandler, ReactNode, Ref } from "react";
import clsx from "clsx";
import { XCircleIcon } from "../icons/x-circle-icon";
import { once } from "../runtime/commonjs-interop";
import { DropdownSearchIcon } from "./dropdown";
import { useIntl } from "../vendor/react-intl";
type PageSearchInputVariant = "composer" | "default";
type PageSearchInputProps = {
  autoFocus?: boolean;
  className?: string;
  id: string;
  inputRef?: Ref<HTMLInputElement>;
  label: ReactNode;
  maxLength?: number;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  onSearchQueryChange: (searchQuery: string) => void;
  placeholder?: string;
  searchQuery: string;
  trailingControl?: ReactNode;
  variant?: PageSearchInputVariant;
};
export const initPageSearchInputChunk = once(() => {});
export function PageSearchInput({
  autoFocus,
  id,
  inputRef,
  className,
  label,
  maxLength,
  onKeyDown,
  onSearchQueryChange,
  placeholder,
  searchQuery,
  trailingControl,
  variant = "default",
}: PageSearchInputProps) {
  const intl = useIntl();
  const variantClassName =
    variant === "composer"
      ? "h-8 rounded-full bg-token-input-background/90 electron:dark:bg-token-dropdown-background"
      : "h-token-button-composer rounded-lg bg-token-input-background/75 shadow-sm";
  return (
    <div
      className={clsx(
        "no-drag flex items-center gap-2 border border-token-input-border px-2.5 py-0 text-base leading-[18px] backdrop-blur-sm",
        variantClassName,
        className,
      )}
    >
      <DropdownSearchIcon className="icon-sm text-token-text-secondary" />
      <label className="sr-only" htmlFor={id}>
        {label}
      </label>
      <input
        autoFocus={autoFocus}
        id={id}
        ref={inputRef}
        className="min-w-0 flex-1 bg-transparent text-base leading-[18px] text-token-input-foreground outline-none select-text placeholder:text-token-input-placeholder-foreground [&::placeholder]:select-none"
        maxLength={maxLength}
        type="text"
        value={searchQuery}
        onChange={(event) => onSearchQueryChange(event.target.value)}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
      />
      {searchQuery.length > 0 ? (
        <button
          aria-label={intl.formatMessage({
            id: "skills.pageSearchInput.clear",
            defaultMessage: "Clear search",
            description: "Accessible label for clearing a search field",
          })}
          className="flex shrink-0 cursor-interaction text-token-text-secondary hover:text-token-foreground"
          type="button"
          onClick={() => {
            onSearchQueryChange("");
          }}
        >
          <XCircleIcon className="icon-sm" />
        </button>
      ) : null}
      {trailingControl == null ? null : (
        <div className="flex shrink-0 items-center">{trailingControl}</div>
      )}
    </div>
  );
}
