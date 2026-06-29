// Restored from ref/webview/assets/sectioned-page-BgyNiIIs.js
// Primary layout component for pages split into navigable sections.
import React from "react";
import clsx from "clsx";
import { useSectionedPageNavigationState } from "./navigation-state";
import { SectionRegistryContext } from "./section-registry";
import { SectionedPageHeader, SectionedPageNav } from "./sectioned-page-nav";
import type { SectionedPageNavSection, SectionedPageProps } from "./types";

export function SectionedPage({
  ariaLabel,
  sections,
  children,
  className,
  contentInnerClassName,
  disableScrollFade = false,
  header,
  navOrientation = "vertical",
  navAccessory,
  navFooter,
  navSections,
  onSelectNavSection,
  showNav = true,
}: SectionedPageProps) {
  const scrollContainerRef = React.useRef<HTMLDivElement | null>(null);
  const [scrollContainer, setScrollContainer] =
    React.useState<HTMLDivElement | null>(null);
  const setScrollContainerRef = React.useCallback(
    (element: HTMLDivElement | null) => {
      if (scrollContainerRef.current !== element) {
        scrollContainerRef.current = element;
        setScrollContainer(element);
      }
    },
    [],
  );
  const sectionIds = sections.map(getSectionId);
  const { activeSectionId, scrollToSection, setSectionElement } =
    useSectionedPageNavigationState({
      container: scrollContainer,
      sectionIds,
    });
  const visibleNavSections = navSections ?? sections;
  const shouldShowNav = showNav && visibleNavSections.length > 0;
  return (
    <div
      className={clsx(
        "flex min-h-0 w-full flex-1 flex-col gap-8 [--sectioned-page-leading-inset:0.5rem]",
        className,
      )}
    >
      {header == null ? null : (
        <SectionedPageHeader>{header}</SectionedPageHeader>
      )}
      <div
        className={clsx(
          shouldShowNav
            ? navOrientation === "vertical"
              ? "flex min-h-0 w-full flex-1 flex-col gap-8 lg:grid lg:grid-cols-[theme(spacing.32)_minmax(0,1fr)] lg:items-start lg:gap-10"
              : "flex min-h-0 w-full flex-1 flex-col gap-8"
            : "flex min-h-0 w-full flex-1 flex-col",
        )}
      >
        {shouldShowNav ? (
          <SectionedPageNav
            activeSectionId={activeSectionId}
            accessory={navAccessory}
            ariaLabel={ariaLabel}
            footer={navFooter}
            orientation={navOrientation}
            onSelectSection={onSelectNavSection ?? scrollToSection}
            sections={visibleNavSections}
          />
        ) : null}
        <SectionRegistryContext.Provider
          value={{
            setSectionElement,
          }}
        >
          <div
            className={clsx(
              "relative min-h-0 w-full flex-1 overflow-y-auto [scrollbar-gutter:stable] lg:h-full",
              !disableScrollFade &&
                "vertical-scroll-fade-mask [--edge-fade-distance:1rem]",
            )}
            ref={setScrollContainerRef}
          >
            <div
              className={clsx(
                "mx-auto w-full max-w-[var(--thread-content-max-width)]",
                contentInnerClassName,
              )}
            >
              {children}
            </div>
          </div>
        </SectionRegistryContext.Provider>
      </div>
    </div>
  );
}

function getSectionId(section: SectionedPageNavSection) {
  return section.id;
}
