// Restored from ref/webview/assets/sectioned-page-BgyNiIIs.js
// Section wrapper with optional sticky title and action area.
import React from "react";
import clsx from "clsx";
import { SectionRegistryContext } from "./section-registry";
import type { SectionedPageSectionProps } from "./types";

export function SectionedPageSection({
  id,
  title,
  action,
  stickyHeader = false,
  showDivider = true,
  children,
}: SectionedPageSectionProps) {
  const registry = React.useContext(SectionRegistryContext);
  const setSectionRef = React.useCallback(
    (element: HTMLElement | null) => {
      registry?.setSectionElement(id, element);
    },
    [id, registry],
  );
  return (
    <section className="flex flex-col gap-4" id={id} ref={setSectionRef}>
      <div
        className={clsx(
          "flex items-center justify-between gap-3 [padding-inline-start:var(--sectioned-page-leading-inset,0.5rem)] pr-0.5 pb-2",
          stickyHeader &&
            "relative sticky top-0 z-10 bg-token-main-surface-primary after:pointer-events-none after:absolute after:-inset-x-3 after:top-full after:h-2 after:bg-token-main-surface-primary after:content-['']",
          showDivider && "border-b border-token-border-light",
        )}
      >
        <div className="text-lg leading-6 font-medium text-token-foreground">
          {title}
        </div>
        {action ? <div className="shrink-0">{action}</div> : null}
      </div>
      {children}
    </section>
  );
}
