// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~a~hqj10sd5-C_H_yI8D.js
// thread-layout-4YZWZt2v chunk restored from the Codex webview bundle.
// Also covers ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~a~hqj10sd5-DiinfLhP.js.
import React from "react";
import clsx from "clsx";
export const threadContentClassName = clsx(
  "mx-auto w-full max-w-(--thread-content-max-width)",
  "px-toolbar",
);
export type ThreadLayoutProps = React.HTMLAttributes<HTMLDivElement> & {
  header?: React.ReactNode;
  banner?: React.ReactNode;
  bodyClassName?: string;
  containerRef?: React.Ref<HTMLDivElement>;
};
export function initThreadLayoutChunk(): void {}

export function ThreadLayout({
  header,
  banner,
  children,
  className,
  bodyClassName,
  containerRef,
  tabIndex = 0,
  ...rest
}: ThreadLayoutProps): JSX.Element {
  const setContainerRef = React.useCallback(
    (element: HTMLDivElement | null) => {
      if (typeof containerRef === "function") {
        containerRef(element);
      } else if (containerRef != null) {
        containerRef.current = element;
      }
    },
    [containerRef],
  );
  return (
    <div
      ref={setContainerRef}
      className={clsx("relative flex h-full flex-col", className)}
      tabIndex={tabIndex}
      {...rest}
    >
      <div className="sticky top-0 z-10">{header}</div>
      <div className={clsx("flex min-h-0 flex-1 flex-col", bodyClassName)}>
        <div className="relative mx-auto flex min-h-0 w-full flex-1 flex-col">
          {banner}
          <div className="min-h-0 flex-1">{children}</div>
        </div>
      </div>
    </div>
  );
}
