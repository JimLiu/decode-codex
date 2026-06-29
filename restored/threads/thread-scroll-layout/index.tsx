// Restored from ref/webview/assets/thread-scroll-layout-mKm5Xueq.js
// Also covers ref/webview/assets/thread-scroll-layout-DsxWR6SP.js.
import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { threadContentClassName } from "../thread-layout";
import { threadScrollControllerContext } from "./scroll-controller-context";
import { useThreadScrollLayoutController } from "./controller";
import {
  getThreadScrollViewportClassName,
  threadScrollContainerClassName,
  timelineScrollAttributes,
  useWideBlockInlineShift,
} from "./utils";
import type { ThreadContentStyle, ThreadScrollLayoutProps } from "./types";

export function initThreadScrollLayoutChunk(): void {}

export function initThreadScrollLayoutStyleChunk(): void {}

export function ThreadScrollLayout({
  contentX,
  children,
  footer,
  hasLiveMcpAppFrame = false,
  onScroll,
  onUserScrollToTop,
  ref,
  initialOffset = 0,
  remoteHostedPIPAnchorHostId,
}: ThreadScrollLayoutProps): JSX.Element {
  const wideBlockInlineShift = useWideBlockInlineShift(contentX);
  const { controller, footerResizeRef, setScrollElement } =
    useThreadScrollLayoutController({
      initialOffset,
      onScroll,
      onUserScrollToTop,
      ref,
    });

  const viewportClassName =
    getThreadScrollViewportClassName(hasLiveMcpAppFrame);
  const contentStyle: ThreadContentStyle | undefined =
    contentX == null
      ? undefined
      : {
          x: contentX,
          "--thread-wide-block-inline-shift": wideBlockInlineShift,
        };
  const contentClassName = clsx(
    threadContentClassName,
    "relative flex flex-1 shrink-0 flex-col pb-8",
  );

  return (
    <threadScrollControllerContext.Provider value={controller}>
      <div className={viewportClassName}>
        <div
          ref={setScrollElement}
          data-pip-anchor-host={remoteHostedPIPAnchorHostId}
          {...timelineScrollAttributes}
          tabIndex={0}
          className={threadScrollContainerClassName}
        >
          <motion.div
            style={contentStyle}
            className="flex min-h-full shrink-0 flex-col justify-start"
          >
            <div data-mcp-app-portal-target="true" className={contentClassName}>
              {children}
            </div>
            {footer ? (
              <div
                data-thread-scroll-footer="true"
                ref={footerResizeRef}
                className="sticky bottom-0 z-10 mt-auto w-full pb-4"
              >
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 flex h-full w-full justify-center pt-4">
                  <div className="z-0 h-full w-full bg-gradient-to-t from-token-main-surface-primary via-token-main-surface-primary extension:from-token-bg-primary extension:via-token-bg-primary" />
                </div>
                <div
                  data-pip-obstacle="thread-footer"
                  className={clsx(
                    "relative z-10 flex flex-col",
                    threadContentClassName,
                  )}
                >
                  {footer}
                </div>
              </div>
            ) : null}
          </motion.div>
        </div>
      </div>
    </threadScrollControllerContext.Provider>
  );
}
