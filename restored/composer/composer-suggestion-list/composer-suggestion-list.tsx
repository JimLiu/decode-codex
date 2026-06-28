// Restored from ref/webview/assets/composer-suggestion-list-BQ2rPanH.js
import React from "react";
import clsx from "clsx";
import { FormattedMessage } from "../../vendor/react-intl";
import { ListNavigation } from "../../utils/list-navigation";
import { useCloseOnNoResults } from "./close-on-no-results";
import {
  SuggestionListChrome,
  SuggestionListEmptyState,
  SuggestionListItem,
  SuggestionListScrollArea,
  SuggestionListSectionTitle,
} from "./layout";
import type {
  ComposerSuggestionItem,
  ComposerSuggestionListProps,
  ComposerSuggestionSection,
} from "./types";
import { useComposerTopMenuMaxHeightRef } from "./use-composer-top-menu-max-height-ref";
export function ComposerSuggestionList({
  chromeVariant = "default",
  className,
  isActive,
  isHomeMenu = false,
  keyboardEventTarget,
  noResults,
  onHighlight,
  onRequestClose,
  onSelect,
  query,
  sections,
}: ComposerSuggestionListProps) {
  const visibleSections = sections.filter(hasVisibleSectionContent);
  const navigationItems = visibleSections.flatMap(getEnabledSectionItems);
  const itemIndexByKey = new Map(
    navigationItems.map((item, index) => [item.key, index]),
  );
  const handleHighlight = React.useCallback(
    (item: ComposerSuggestionItem | null) => onHighlight?.(item),
    [onHighlight],
  );
  const handleSelect = React.useCallback(
    (item: ComposerSuggestionItem) => onSelect(item),
    [onSelect],
  );
  const { getItemProps, highlightedIndex, listRef } = ListNavigation({
    captureWindowKeydown: true,
    isActive: isActive && navigationItems.length > 0,
    items: navigationItems,
    keyboardEventTarget,
    onHighlight: handleHighlight,
    onSelect: handleSelect,
    preserveHighlightOnItemsChange: true,
  });
  const hasLoadingSection = sections.some(isLoadingSection);
  useCloseOnNoResults({
    isActive,
    isLoading: hasLoadingSection,
    onRequestClose,
    query,
    resultCount: navigationItems.length,
  });
  const topMenuContainerRef = useComposerTopMenuMaxHeightRef(
    isHomeMenu && isActive,
    "bottom",
  );
  if (!isActive) return null;
  const showSectionHeaders =
    visibleSections.length > 1 || visibleSections.some(shouldShowSectionTitle);
  const containerClassName = clsx(
    className,
    isHomeMenu ? "composer-home-top-menu" : "max-h-[320px]",
  );
  const containerRef = isHomeMenu ? topMenuContainerRef : undefined;
  const fadeMaskVariant = chromeVariant === "default" ? "both" : "bottom";
  const sectionNodes = visibleSections.map((section, sectionIndex) => (
    <div key={section.id}>
      {section.title != null && (showSectionHeaders || section.showTitle) ? (
        <SuggestionListSectionTitle
          className={sectionIndex === 0 ? undefined : "pt-2"}
          chromeVariant={chromeVariant}
        >
          {section.title}
        </SuggestionListSectionTitle>
      ) : null}

      {section.items.map((item) => {
        const itemIndex = itemIndexByKey.get(item.key);
        return itemIndex == null ? (
          <div
            key={item.key}
            aria-disabled="true"
            className="w-full shrink-0 px-row-x py-row-y text-left text-sm text-token-description-foreground opacity-50"
          >
            {item.content}
          </div>
        ) : (
          <SuggestionListItem
            key={item.key}
            getItemProps={getItemProps}
            highlighted={itemIndex === highlightedIndex}
            itemIndex={itemIndex}
          >
            {item.content}
          </SuggestionListItem>
        );
      })}

      {section.items.length === 0 && section.emptyState != null ? (
        <SuggestionListEmptyState>
          {section.emptyState}
        </SuggestionListEmptyState>
      ) : null}
    </div>
  ));
  const noResultsNode =
    visibleSections.length === 0 ? (
      <SuggestionListEmptyState>
        {noResults ?? (
          <FormattedMessage
            id="composer.suggestionList.noResults"
            defaultMessage="No results"
            description="Shown when no composer suggestions match the query"
          />
        )}
      </SuggestionListEmptyState>
    ) : null;
  const listBody = (
    <SuggestionListScrollArea
      fadeMaskVariant={fadeMaskVariant}
      listRef={listRef as React.Ref<HTMLDivElement>}
    >
      {sectionNodes}
      {noResultsNode}
    </SuggestionListScrollArea>
  );
  const loadingPulse = hasLoadingSection ? (
    <div
      aria-hidden="true"
      className="h-px w-full animate-pulse bg-token-foreground/20"
    />
  ) : null;
  return (
    <SuggestionListChrome
      className={containerClassName}
      chromeVariant={chromeVariant}
      containerRef={containerRef}
    >
      {listBody}
      {loadingPulse}
    </SuggestionListChrome>
  );
}
function hasVisibleSectionContent(section: ComposerSuggestionSection): boolean {
  return section.items.length > 0 || section.emptyState != null;
}
function isLoadingSection(section: ComposerSuggestionSection): boolean {
  return Boolean(section.isLoading);
}
function shouldShowSectionTitle(section: ComposerSuggestionSection): boolean {
  return Boolean(section.showTitle);
}
function getEnabledSectionItems(
  section: ComposerSuggestionSection,
): ComposerSuggestionItem[] {
  return section.items.filter((item) => !item.disabled);
}
