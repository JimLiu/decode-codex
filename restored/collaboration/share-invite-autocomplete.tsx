// Restored from ref/webview/assets/share-invite-autocomplete-C1_VemDe.js
// Shared multi-select autocomplete used by invite and reviewer search flows.
import type {
  ComponentType,
  HTMLAttributes,
  KeyboardEvent,
  ReactNode,
  Ref,
  SVGProps,
} from "react";
import clsx from "clsx";
import { CheckMdIcon } from "../icons/check-md-icon";
import { XIcon } from "../icons/x-icon";
import { Spinner } from "../ui/spinner";
import { ListNavigation } from "../utils/list-navigation";

type NavigationItemProps = HTMLAttributes<HTMLButtonElement> & {
  "data-list-navigation-item"?: "true";
};

type GetNavigationItemProps = (index: number) => NavigationItemProps;

export type ShareInviteAutocompleteOption = {
  chipLabel?: ReactNode;
  Icon?: ComponentType<SVGProps<SVGSVGElement>>;
  id: string;
  imageUrl?: string | null;
  label: ReactNode;
  secondaryLabel?: ReactNode;
};

export type ShareInviteAutocompleteSection = {
  id: string;
  label: ReactNode;
  options: readonly ShareInviteAutocompleteOption[];
};

export type ShareInviteAutocompleteProps = {
  ariaLabel: string;
  disabled?: boolean;
  emptyMessage: ReactNode;
  getRemoveLabel?: (option: ShareInviteAutocompleteOption) => string;
  leadingContent?: ReactNode;
  loadingLabel?: string;
  loadingSize?: "compact" | "default";
  options?: readonly ShareInviteAutocompleteOption[] | null;
  optionSections?: readonly ShareInviteAutocompleteSection[] | null;
  placeholder?: string;
  query: string;
  selectedOptionIds?: ReadonlySet<string>;
  selectedOptions?: readonly ShareInviteAutocompleteOption[];
  showLoadingDropdown?: boolean;
  trailingContent?: ReactNode;
  variant?: "field" | "menu";
  onEscape?: () => void;
  onQueryChange: (query: string) => void;
  onRemoveOption?: (option: ShareInviteAutocompleteOption) => void;
  onSelectOption: (option: ShareInviteAutocompleteOption) => void;
};

function ShareInviteAutocomplete({
  ariaLabel,
  disabled = false,
  emptyMessage,
  getRemoveLabel,
  leadingContent,
  loadingLabel,
  loadingSize = "default",
  options,
  optionSections,
  placeholder,
  query,
  selectedOptionIds,
  selectedOptions = [],
  showLoadingDropdown = true,
  trailingContent,
  variant = "field",
  onEscape,
  onQueryChange,
  onRemoveOption,
  onSelectOption,
}: ShareInviteAutocompleteProps) {
  const flatOptions = optionSections?.flatMap(getSectionOptions) ?? options;
  const trimmedQuery = query.trim();
  const shouldShowDropdown =
    variant === "menu"
      ? flatOptions != null || (showLoadingDropdown && trimmedQuery.length > 0)
      : !disabled &&
        trimmedQuery.length > 0 &&
        (showLoadingDropdown || flatOptions != null);
  const isNavigationActive = shouldShowDropdown && !disabled;

  const handleSelectOption = (option: ShareInviteAutocompleteOption) => {
    onSelectOption(option);
    onQueryChange("");
  };
  const handleEscape = () => {
    onQueryChange("");
    onEscape?.();
  };
  const { highlightedIndex, listRef, getInputProps, getItemProps } =
    ListNavigation<ShareInviteAutocompleteOption>({
      items: flatOptions,
      isActive: isNavigationActive,
      onSelect: handleSelectOption,
      onEscape: handleEscape,
    });

  const selectedChips =
    variant === "field"
      ? selectedOptions.map((option) => (
          <span
            key={option.id}
            className="inline-flex min-w-0 items-center gap-1 rounded-md bg-token-badge-background px-1 py-[1px] text-sm text-token-badge-foreground"
          >
            <span className="truncate">{option.chipLabel ?? option.label}</span>
            {getRemoveLabel != null && onRemoveOption != null ? (
              <button
                type="button"
                aria-label={getRemoveLabel(option)}
                className="cursor-interaction rounded-sm text-token-description-foreground hover:text-token-foreground"
                onClick={() => {
                  onRemoveOption(option);
                }}
              >
                <XIcon aria-hidden={true} className="icon-2xs" />
              </button>
            ) : null}
          </span>
        ))
      : null;

  const inputProps = getInputProps({
    onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => {
      if (shouldShowDropdown && event.key === "Enter") event.preventDefault();
    },
  });
  const itemPropsGetter = getItemProps as GetNavigationItemProps;
  const inputPlaceholder =
    variant === "menu" || selectedOptions.length === 0
      ? placeholder
      : undefined;

  const optionList = shouldShowDropdown ? (
    <div
      className={clsx(
        "w-full overflow-hidden bg-token-dropdown-background",
        variant === "field" &&
          "absolute z-10 mt-2 rounded-md border border-token-border shadow-sm",
      )}
    >
      <div
        ref={listRef as Ref<HTMLDivElement>}
        className={clsx(
          "flex max-h-64 flex-col overflow-y-auto p-1",
          flatOptions == null &&
            (loadingSize === "compact" ? "min-h-16" : "min-h-64"),
        )}
        role="listbox"
      >
        {flatOptions == null ? (
          <div
            aria-label={loadingLabel}
            className="flex flex-1 items-center justify-center text-token-description-foreground"
            role={loadingLabel == null ? undefined : "status"}
          >
            <Spinner className="icon-xs" />
          </div>
        ) : flatOptions.length === 0 ? (
          <div className="px-2 py-1.5 text-sm text-token-input-placeholder-foreground">
            {emptyMessage}
          </div>
        ) : optionSections == null ? (
          flatOptions.map((option, index) => (
            <ShareInviteAutocompleteOptionRow
              key={option.id}
              highlightedIndex={highlightedIndex}
              index={index}
              option={option}
              selected={selectedOptionIds?.has(option.id)}
              disabled={disabled}
              getItemProps={itemPropsGetter}
            />
          ))
        ) : (
          <ShareInviteAutocompleteOptionSections
            highlightedIndex={highlightedIndex}
            optionSections={optionSections}
            selectedOptionIds={selectedOptionIds}
            disabled={disabled}
            getItemProps={itemPropsGetter}
          />
        )}
      </div>
    </div>
  ) : null;

  return (
    <div className={clsx(variant === "field" && "relative")}>
      <div
        className={clsx(
          "flex w-full flex-wrap items-center gap-1 text-base text-token-input-foreground",
          variant === "field"
            ? "min-h-[30px] rounded-md border border-token-input-border bg-token-input-background px-2 py-1 focus-within:border-token-focus-border"
            : "h-11 border-b border-token-border px-3",
        )}
      >
        {leadingContent}
        {selectedChips}
        <input
          {...inputProps}
          aria-label={ariaLabel}
          className="min-w-36 flex-1 bg-transparent outline-none placeholder:text-token-input-placeholder-foreground"
          disabled={disabled}
          placeholder={inputPlaceholder}
          value={query}
          onChange={(event) => {
            onQueryChange(event.currentTarget.value);
          }}
        />
        {trailingContent}
      </div>
      {optionList}
    </div>
  );
}

function getSectionOptions(section: ShareInviteAutocompleteSection) {
  return section.options;
}

function ShareInviteAutocompleteOptionSections({
  disabled,
  highlightedIndex,
  optionSections,
  selectedOptionIds,
  getItemProps,
}: {
  disabled: boolean;
  getItemProps: GetNavigationItemProps;
  highlightedIndex: number;
  optionSections: readonly ShareInviteAutocompleteSection[];
  selectedOptionIds?: ReadonlySet<string>;
}) {
  const sections = optionSections.flatMap((section, sectionIndex) => {
    if (section.options.length === 0) return [];
    const optionOffset = optionSections
      .slice(0, sectionIndex)
      .reduce(sumSectionOptions, 0);
    return [
      <div
        key={section.id}
        className="flex flex-col border-b border-token-border last:border-b-0"
      >
        <div className="px-2 pt-2 pb-1 text-xs font-medium text-token-description-foreground">
          {section.label}
        </div>
        {section.options.map((option, optionIndex) => (
          <ShareInviteAutocompleteOptionRow
            key={option.id}
            highlightedIndex={highlightedIndex}
            index={optionOffset + optionIndex}
            option={option}
            selected={selectedOptionIds?.has(option.id)}
            disabled={disabled}
            getItemProps={getItemProps}
          />
        ))}
      </div>,
    ];
  });
  return <>{sections}</>;
}

function sumSectionOptions(
  total: number,
  section: ShareInviteAutocompleteSection,
): number {
  return total + section.options.length;
}

function ShareInviteAutocompleteOptionRow({
  disabled,
  highlightedIndex,
  index,
  option,
  selected,
  getItemProps,
}: {
  disabled: boolean;
  getItemProps: GetNavigationItemProps;
  highlightedIndex: number;
  index: number;
  option: ShareInviteAutocompleteOption;
  selected?: boolean;
}) {
  const OptionIcon = option.Icon;
  const itemProps = getItemProps(index);
  const isHighlighted = index === highlightedIndex;
  const isSelectedOrHighlighted = selected ?? isHighlighted;
  const icon =
    option.imageUrl == null ? (
      OptionIcon == null ? null : (
        <OptionIcon aria-hidden={true} className="icon-sm mt-0.5 shrink-0" />
      )
    ) : (
      <img
        alt=""
        className="size-5 shrink-0 rounded-full object-cover"
        src={option.imageUrl}
      />
    );
  const secondaryLabel =
    option.secondaryLabel == null ? null : (
      <span className="text-sm text-token-description-foreground">
        {option.secondaryLabel}
      </span>
    );

  return (
    <button
      type="button"
      {...itemProps}
      aria-selected={isSelectedOrHighlighted}
      disabled={disabled}
      className={clsx(
        "cursor-interaction flex w-full items-start gap-2 rounded-sm px-2 py-1.5 text-left disabled:cursor-not-allowed",
        isHighlighted && "bg-token-list-hover-background",
      )}
      role="option"
    >
      {icon}
      <span className="flex min-w-0 flex-1 flex-col">
        <span className="text-sm text-token-foreground">{option.label}</span>
        {secondaryLabel}
      </span>
      {selected ? (
        <CheckMdIcon aria-hidden={true} className="icon-sm shrink-0" />
      ) : null}
    </button>
  );
}

function initShareInviteAutocompleteChunk() {}

export { initShareInviteAutocompleteChunk, ShareInviteAutocomplete };
