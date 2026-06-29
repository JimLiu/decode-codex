// Restored from ref/webview/assets/sectioned-page-BgyNiIIs.js
// Header and navigation controls for sectioned pages.
import type { ReactNode } from "react";
import clsx from "clsx";
import { Button } from "../button";
import type {
  SectionedPageNavOrientation,
  SectionedPageNavSection,
} from "./types";

export function SectionedPageHeader({ children }: { children?: ReactNode }) {
  return (
    <div className="mx-auto flex w-full max-w-[var(--thread-content-max-width)] flex-col gap-1 px-panel pt-panel">
      {children}
    </div>
  );
}

export function SectionedPageNav({
  activeSectionId,
  accessory,
  ariaLabel,
  footer,
  orientation,
  onSelectSection,
  sections,
}: {
  activeSectionId: string | null;
  accessory?: ReactNode;
  ariaLabel?: string;
  footer?: ReactNode;
  orientation: SectionedPageNavOrientation;
  onSelectSection: (sectionId: string) => void;
  sections: SectionedPageNavSection[];
}) {
  return (
    <nav
      aria-label={ariaLabel}
      className={
        orientation === "vertical" ? "hidden lg:block lg:self-start" : "w-full"
      }
    >
      {orientation === "vertical" ? (
        <div className="flex flex-col gap-1">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={clsx(
                "text-left text-lg leading-6 transition-colors",
                activeSectionId === section.id
                  ? "text-token-foreground"
                  : "text-token-text-secondary hover:text-token-foreground",
              )}
              onClick={(event) => {
                event.preventDefault();
                onSelectSection(section.id);
              }}
            >
              {section.title}
            </a>
          ))}
        </div>
      ) : (
        <div className="flex w-full flex-col gap-8">
          <div className="mx-auto flex w-full flex-col gap-8 px-panel lg:max-w-none">
            {footer}
            <div className="flex w-full min-w-0 flex-wrap items-center justify-center gap-3">
              {sections.map((section) => (
                <Button
                  key={section.id}
                  color={activeSectionId === section.id ? "secondary" : "ghost"}
                  size="toolbar"
                  onClick={() => {
                    onSelectSection(section.id);
                  }}
                  aria-pressed={activeSectionId === section.id}
                >
                  {section.title}
                </Button>
              ))}
              {accessory == null ? null : (
                <div className="flex items-center gap-3">
                  <div className="h-6 w-px bg-token-border-light" />
                  {accessory}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
