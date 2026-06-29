// Restored from ref/webview/assets/sectioned-page-BgyNiIIs.js
// Shared types for the sectioned page layout chunk.
import type { ReactNode } from "react";

export type SectionedPageNavOrientation = "vertical" | "horizontal";

export type SectionedPageNavSection = {
  id: string;
  title: ReactNode;
};

export type SectionedPageProps = {
  ariaLabel?: string;
  children?: ReactNode;
  className?: string;
  contentInnerClassName?: string;
  disableScrollFade?: boolean;
  header?: ReactNode;
  navAccessory?: ReactNode;
  navFooter?: ReactNode;
  navOrientation?: SectionedPageNavOrientation;
  navSections?: SectionedPageNavSection[];
  onSelectNavSection?: (sectionId: string) => void;
  sections: SectionedPageNavSection[];
  showNav?: boolean;
};

export type SectionedPageSectionProps = {
  action?: ReactNode;
  children?: ReactNode;
  id: string;
  showDivider?: boolean;
  stickyHeader?: boolean;
  title: ReactNode;
};

export type SectionRegistry = Record<string, HTMLElement | null | undefined>;

export type SectionRegistryContextValue = {
  setSectionElement: (sectionId: string, element: HTMLElement | null) => void;
};
