// Restored from ref/webview/assets/above-composer-panel-row-B4ykE4a7.js
// Composer tray wrappers and comment attachment grouping helpers.
import React, {
  createContext,
  useContext,
  useMemo,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import clsx from "clsx";
import { ComposerTopMenuShell } from "./top-menu-chrome";
import { isBrowserCommentAttachment } from "../boundaries/use-host-config.facade";
import {
  isArtifactAnnotationCommentAttachment,
  isPdfCommentAttachment,
} from "../boundaries/src-l0hb-mz-p";
type AboveComposerPanelContextValue = {
  expandedTopTray: boolean;
};
export type AboveComposerCommentAttachment = {
  localBrowserDesignChange?: unknown | null;
  [key: string]: unknown;
};
export type SplitCommentAttachmentsResult<
  TAttachment extends AboveComposerCommentAttachment,
> = {
  annotationCommentAttachments: TAttachment[];
  designTweakCommentAttachments: TAttachment[];
  diffCommentAttachments: TAttachment[];
};
export type AboveComposerPanelProps = HTMLAttributes<HTMLDivElement> & {
  expandedTopTray?: boolean;
};
export type AboveComposerPanelSurfaceProps = HTMLAttributes<HTMLDivElement>;
export type AboveComposerPanelRowProps = HTMLAttributes<HTMLDivElement> & {
  actions?: ReactNode;
  icon?: ReactNode;
  meta?: ReactNode;
  title?: ReactNode;
  titleClassName?: string;
  trailing?: ReactNode;
};
const AboveComposerPanelContext = createContext<AboveComposerPanelContextValue>(
  {
    expandedTopTray: false,
  },
);
export function AboveComposerPanel({
  className,
  expandedTopTray = false,
  children,
}: AboveComposerPanelProps) {
  const container = (
    <div className={clsx("order-2 flex min-w-0 flex-col", className)}>
      {children}
    </div>
  );
  const contextValue = useMemo(
    () => ({
      expandedTopTray,
    }),
    [expandedTopTray],
  );
  const panel = expandedTopTray ? (
    <ComposerTopMenuShell expandedTopTray inFlow>
      {container}
    </ComposerTopMenuShell>
  ) : (
    container
  );
  return (
    <AboveComposerPanelContext.Provider value={contextValue}>
      {panel}
    </AboveComposerPanelContext.Provider>
  );
}
export function splitCommentAttachments<
  TAttachment extends AboveComposerCommentAttachment,
>(
  commentAttachments: readonly TAttachment[],
): SplitCommentAttachmentsResult<TAttachment> {
  const annotationCommentAttachments: TAttachment[] = [];
  const designTweakCommentAttachments: TAttachment[] = [];
  const diffCommentAttachments: TAttachment[] = [];
  for (const commentAttachment of commentAttachments) {
    if (commentAttachment.localBrowserDesignChange != null) {
      designTweakCommentAttachments.push(commentAttachment);
      continue;
    }
    if (
      isArtifactAnnotationCommentAttachment(commentAttachment) ||
      isBrowserCommentAttachment(commentAttachment) ||
      isPdfCommentAttachment(commentAttachment)
    ) {
      annotationCommentAttachments.push(commentAttachment);
    } else {
      diffCommentAttachments.push(commentAttachment);
    }
  }
  return {
    annotationCommentAttachments,
    designTweakCommentAttachments,
    diffCommentAttachments,
  };
}
export function getDiffCommentAttachments<
  TAttachment extends AboveComposerCommentAttachment,
>(commentAttachments: readonly TAttachment[]): TAttachment[] {
  return splitCommentAttachments(commentAttachments).diffCommentAttachments;
}
export function AboveComposerPanelSurface({
  className,
  children,
}: AboveComposerPanelSurfaceProps) {
  const { expandedTopTray } = useContext(AboveComposerPanelContext);
  return (
    <div
      className={clsx(
        "relative min-w-0 overflow-clip text-token-foreground",
        !expandedTopTray &&
          "bg-token-input-background/70 border-token-border/80 border-x border-t backdrop-blur-sm",
        !expandedTopTray && "first:rounded-t-2xl",
        className,
      )}
    >
      {children}
    </div>
  );
}
export function getVisualCommentAttachments<
  TAttachment extends AboveComposerCommentAttachment,
>(commentAttachments: readonly TAttachment[]): TAttachment[] {
  const { annotationCommentAttachments, designTweakCommentAttachments } =
    splitCommentAttachments(commentAttachments);
  return [...annotationCommentAttachments, ...designTweakCommentAttachments];
}
export function AboveComposerPanelRow({
  actions,
  className,
  icon,
  meta,
  title,
  titleClassName,
  trailing,
  ...divProps
}: AboveComposerPanelRowProps) {
  const iconElement =
    icon == null ? null : (
      <span className="flex h-4 shrink-0 items-center justify-center">
        {icon}
      </span>
    );
  const metaElement =
    meta == null ? null : (
      <span className="ml-1 text-token-description-foreground">{meta}</span>
    );
  const trailingElement =
    trailing != null || actions != null ? (
      <div className="flex shrink-0 items-center gap-1">
        {trailing}
        {actions}
      </div>
    ) : null;
  return (
    <div
      {...divProps}
      className={clsx(
        "group flex min-w-0 items-center justify-between gap-2 py-0.5 text-sm",
        className,
      )}
    >
      <div className="flex min-w-0 flex-1 items-center gap-1.5">
        {iconElement}
        <div className={clsx("min-w-0 flex-1 leading-4", titleClassName)}>
          {title}
          {metaElement}
        </div>
      </div>
      {trailingElement}
    </div>
  );
}
