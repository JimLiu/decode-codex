// Restored from ref/webview/assets/searchable-page-layout-6avbQSAH.js
// Shared layout for searchable settings-style pages.
import type { ComponentProps, ReactNode, Ref } from "react";
import clsx from "clsx";
import { once } from "../runtime/commonjs-interop";
import { PageSearchInput } from "./page-search-input";

type PageSearchInputProps = ComponentProps<typeof PageSearchInput>;

export interface SearchablePageLayoutProps {
  children?: ReactNode;
  contentClassName?: string;
  controls?: ReactNode;
  headerVariant?: "default" | "inset";
  scrollContainerRef?: Ref<HTMLDivElement>;
  search: PageSearchInputProps;
  subtitle?: ReactNode;
  title: ReactNode;
  titleRef?: Ref<HTMLHeadingElement>;
}

export interface SearchablePageControlsProps {
  children?: ReactNode;
}

export const initSearchablePageLayoutChunk = once(() => {});

export function SearchablePageLayout({
  children,
  contentClassName,
  controls,
  headerVariant = "default",
  scrollContainerRef,
  search,
  subtitle,
  title,
  titleRef,
}: SearchablePageLayoutProps) {
  const headerStackClassName = clsx(
    "flex flex-col",
    headerVariant === "inset" ? "gap-2 px-2" : "gap-1",
  );
  const searchClassName = clsx("w-full min-w-0", search.className);
  const contentContainerClassName = clsx(
    "mx-auto flex min-h-0 w-full max-w-[var(--thread-content-max-width)] flex-1 flex-col px-panel pt-5 pb-panel",
    contentClassName,
  );

  return (
    <div
      ref={scrollContainerRef}
      className="relative h-full min-h-0 flex-1 overflow-y-auto [scrollbar-gutter:stable]"
    >
      <div className="flex min-h-full w-full flex-col">
        <div className="mx-auto w-full max-w-[var(--thread-content-max-width)] px-panel pt-panel pb-4">
          <div className={headerStackClassName}>
            <h1
              ref={titleRef}
              className="heading-xl font-normal text-token-foreground"
            >
              {title}
            </h1>
            <div className="text-lg leading-6 text-token-text-secondary">
              {subtitle}
            </div>
          </div>
        </div>
        <div className="sticky top-0 z-30 bg-token-main-surface-primary after:pointer-events-none after:absolute after:top-full after:right-0 after:left-0 after:h-8 after:bg-linear-to-b after:from-token-main-surface-primary after:to-transparent after:content-['']">
          <div className="mx-auto w-full max-w-[var(--thread-content-max-width)] px-panel pb-2">
            <PageSearchInput
              {...search}
              className={searchClassName}
              variant="composer"
            />
          </div>
        </div>
        <div className={contentContainerClassName}>
          {controls}
          {children}
        </div>
      </div>
    </div>
  );
}

export function SearchablePageControls({
  children,
}: SearchablePageControlsProps) {
  return (
    <div className="flex items-center justify-between gap-4 px-3 pb-2">
      {children}
    </div>
  );
}
