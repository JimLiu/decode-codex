// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// Composer compound component: the composer surface shell plus its layout
// sub-parts (Body, Attachments, Input, ExternalFooterSlot, and the Footer
// primitives). `Composer` is the callable drop-target shell; the sub-parts are
// attached as static members so consumers can write `<Composer.Body>` etc.
import {
  type DragEventHandler,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
  type Ref,
} from "react";
import {
  AnimatePresence,
  clsx,
  motion,
} from "../boundaries/onboarding-commons-externals.facade";
import { ComposerDropOverlay } from "./composer-drop-overlay";

type ComposerLayout = "multiline" | "single-line";
type ComposerSpacing = "default" | "flush";
type ComposerExternalFooterVariant = "default" | "home";

const COMPOSER_STYLES = {
  multilineSurface: "_multilineSurface_1u8sk_2",
  attachmentsDefault: "_attachmentsDefault_1u8sk_2",
  footer: "_footer_1u8sk_2",
  footerLabel: "_footerLabel_1u8sk_2",
};

const EXTERNAL_FOOTER_TRANSITION = {
  type: "spring",
  duration: 0.35,
  bounce: 0.1,
} as const;

interface ComposerSurfaceProps {
  children?: ReactNode;
  className?: string;
  externalFooterVariant?: ComposerExternalFooterVariant;
  inert?: boolean;
  isDragActive?: boolean;
  layout?: ComposerLayout;
  onDragEnter?: DragEventHandler<HTMLDivElement>;
  onDragLeave?: DragEventHandler<HTMLDivElement>;
  onDragOver?: DragEventHandler<HTMLDivElement>;
  onDrop?: DragEventHandler<HTMLDivElement>;
}

function ComposerSurface({
  children,
  className,
  externalFooterVariant = "default",
  inert,
  isDragActive = false,
  layout = "multiline",
  onDragEnter,
  onDragLeave,
  onDragOver,
  onDrop,
}: ComposerSurfaceProps) {
  const homeElevationClassName = externalFooterVariant === "home" && "z-10";
  const shapeClassName =
    layout === "single-line"
      ? "overflow-visible rounded-full"
      : COMPOSER_STYLES.multilineSurface;
  const dragActiveClassName = isDragActive && "bg-token-dropdown-background/50";
  const surfaceClassName = clsx(
    "composer-surface-chrome relative flex flex-col bg-token-input-background/90 backdrop-blur-lg electron:dark:bg-token-dropdown-background",
    homeElevationClassName,
    shapeClassName,
    dragActiveClassName,
    className,
  );
  return (
    <motion.div
      inert={inert}
      className={surfaceClassName}
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      {children}
    </motion.div>
  );
}

interface ComposerAttachmentsProps {
  children?: ReactNode;
  hasVisibleAttachments?: boolean;
  ref?: Ref<HTMLDivElement>;
  spacing?: ComposerSpacing;
}

function ComposerAttachments({
  children,
  hasVisibleAttachments = false,
  ref,
  spacing = "default",
}: ComposerAttachmentsProps) {
  const flushMarginClassName =
    spacing === "flush" && hasVisibleAttachments && "mb-[5px]";
  const defaultSpacingClassName =
    spacing === "default" && COMPOSER_STYLES.attachmentsDefault;
  const className = clsx(flushMarginClassName, defaultSpacingClassName);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

interface ComposerInputProps {
  children?: ReactNode;
  layout?: ComposerLayout;
  ref?: Ref<HTMLDivElement>;
  spacing?: ComposerSpacing;
}

function ComposerInput({
  children,
  layout = "multiline",
  ref,
  spacing = "default",
}: ComposerInputProps) {
  const layoutClassName =
    layout === "single-line" ? "min-w-0" : "mb-1 flex-grow overflow-y-auto";
  const paddingClassName =
    layout === "multiline" && (spacing === "flush" ? "px-0" : "px-3");
  const className = clsx(layoutClassName, paddingClassName);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

interface ComposerBodyProps {
  children?: ReactNode;
}

function ComposerBody({ children }: ComposerBodyProps) {
  return (
    <div className="relative z-10 flex min-h-0 flex-1 flex-col">{children}</div>
  );
}

interface ComposerExternalFooterSlotProps {
  children?: ReactNode;
  isVisible?: boolean;
  variant?: ComposerExternalFooterVariant;
}

function ComposerExternalFooterSlot({
  children,
  isVisible,
  variant,
}: ComposerExternalFooterSlotProps) {
  if (variant !== "home") {
    return isVisible ? <>{children}</> : null;
  }
  const homeFooter = isVisible ? (
    <motion.div
      key="home-external-footer"
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%", pointerEvents: "none" }}
      transition={EXTERNAL_FOOTER_TRANSITION}
      className="relative z-0 -mt-2"
    >
      {children}
    </motion.div>
  ) : null;
  return (
    <AnimatePresence initial={false} mode="popLayout">
      {homeFooter}
    </AnimatePresence>
  );
}

interface ComposerFooterProps {
  children?: ReactNode;
  layout?: ComposerLayout;
  responsive?: boolean;
  spacing?: ComposerSpacing;
}

function ComposerFooter({
  children,
  layout = "multiline",
  responsive = false,
  spacing = "default",
}: ComposerFooterProps) {
  if (layout === "single-line") {
    const responsiveClassName = responsive && COMPOSER_STYLES.footer;
    const className = clsx(
      responsiveClassName,
      "grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 px-2 py-1 select-none",
    );
    return <div className={className}>{children}</div>;
  }
  const responsiveClassName = responsive && COMPOSER_STYLES.footer;
  const marginClassName = spacing === "flush" ? "mb-0" : "mb-2";
  const paddingClassName = spacing === "flush" ? "px-0" : "px-2";
  const className = clsx(
    responsiveClassName,
    "grid grid-cols-[minmax(0,auto)_auto_minmax(0,1fr)] items-center gap-[5px] select-none",
    marginClassName,
    paddingClassName,
  );
  return <div className={className}>{children}</div>;
}

interface ComposerFooterActionProps {
  children?: ReactNode;
  ref?: Ref<HTMLDivElement>;
}

function ComposerFooterAction({ children, ref }: ComposerFooterActionProps) {
  return (
    <div
      ref={ref}
      className="flex items-center"
      onPointerDown={stopPointerDownPropagation}
    >
      {children}
    </div>
  );
}

function stopPointerDownPropagation(
  event: ReactPointerEvent<HTMLDivElement>,
): void {
  event.stopPropagation();
}

interface ComposerFooterActionsProps {
  children?: ReactNode;
  ref?: Ref<HTMLDivElement>;
}

function ComposerFooterActions({ children, ref }: ComposerFooterActionsProps) {
  return (
    <div ref={ref} className="flex shrink-0 items-center gap-2">
      {children}
    </div>
  );
}

interface ComposerFooterControlsProps {
  children?: ReactNode;
  layout?: ComposerLayout;
  ref?: Ref<HTMLDivElement>;
}

function ComposerFooterControlsGroup({
  children,
  layout,
  ref,
}: ComposerFooterControlsProps) {
  const layoutClassName =
    (layout ?? "multiline") === "multiline" ? "w-full" : "shrink-0 gap-2";
  const className = clsx(
    "flex min-w-0 items-center justify-end",
    layoutClassName,
  );
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

interface ComposerFooterInlineControlsProps {
  children?: ReactNode;
  gap?: "compact" | (string & {});
  ref?: Ref<HTMLDivElement>;
}

function ComposerFooterInlineControls({
  children,
  gap,
  ref,
}: ComposerFooterInlineControlsProps) {
  const gapClassName = (gap ?? "compact") === "compact" ? "gap-1" : "gap-[5px]";
  const className = clsx("flex min-w-0 items-center", gapClassName);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

interface ComposerFooterExpandingControlsProps {
  children?: ReactNode;
}

function ComposerFooterExpandingControls({
  children,
}: ComposerFooterExpandingControlsProps) {
  return <div className="flex min-w-0 flex-1 justify-end">{children}</div>;
}

function ComposerFooterDivider() {
  return <div className="h-4 w-px bg-token-border/70" />;
}

interface ComposerFooterLabelProps {
  children?: ReactNode;
  width?: "narrow" | "medium" | "wide";
}

function ComposerFooterLabel({ children, width }: ComposerFooterLabelProps) {
  const narrowClassName = width === "narrow" && "max-w-16";
  const mediumClassName = width === "medium" && "max-w-20";
  const wideClassName = width === "wide" && "max-w-28";
  const className = clsx(
    COMPOSER_STYLES.footerLabel,
    "truncate",
    narrowClassName,
    mediumClassName,
    wideClassName,
  );
  return <span className={className}>{children}</span>;
}

interface ComposerProps {
  blockReason?: string | null;
  children?: ReactNode;
  className?: string;
  externalFooterVariant?: ComposerExternalFooterVariant;
  hasDropTargetPortal?: boolean;
  isDragActive?: boolean;
  isSubmitting?: boolean;
  layout?: ComposerLayout;
  onDragEnter?: DragEventHandler<HTMLDivElement>;
  onDragLeave?: DragEventHandler<HTMLDivElement>;
  onDragOver?: DragEventHandler<HTMLDivElement>;
  onDrop?: DragEventHandler<HTMLDivElement>;
  showShiftOverlay?: boolean;
}

function ComposerShell({
  blockReason,
  children,
  className,
  hasDropTargetPortal,
  isDragActive,
  isSubmitting,
  onDragEnter,
  onDragLeave,
  onDragOver,
  onDrop,
  showShiftOverlay,
  ...rest
}: ComposerProps) {
  const isBlocked = blockReason != null;
  const allowDragInteractions = !isBlocked && !hasDropTargetPortal;
  const blockedClassName = isBlocked && "opacity-50";
  const surfaceClassName = clsx(className, blockedClassName);
  const inert = isSubmitting || isBlocked;
  const surfaceIsDragActive = !isBlocked && isDragActive;
  const dragEnter = allowDragInteractions ? onDragEnter : undefined;
  const dragLeave = allowDragInteractions ? onDragLeave : undefined;
  const dragOver = allowDragInteractions ? onDragOver : undefined;
  const drop = allowDragInteractions ? onDrop : undefined;
  const shiftOverlay =
    allowDragInteractions && showShiftOverlay ? (
      <ComposerDropOverlay className="rounded-2xl" />
    ) : null;
  return (
    <ComposerSurface
      {...rest}
      className={surfaceClassName}
      inert={inert}
      isDragActive={surfaceIsDragActive}
      onDragEnter={dragEnter}
      onDragLeave={dragLeave}
      onDragOver={dragOver}
      onDrop={drop}
    >
      {shiftOverlay}
      {children}
    </ComposerSurface>
  );
}

export const Composer = Object.assign(ComposerShell, {
  Attachments: ComposerAttachments,
  Body: ComposerBody,
  ExternalFooterSlot: ComposerExternalFooterSlot,
  Footer: ComposerFooter,
  FooterAction: ComposerFooterAction,
  FooterActions: ComposerFooterActions,
  FooterControls: ComposerFooterControlsGroup,
  FooterDivider: ComposerFooterDivider,
  FooterExpandingControls: ComposerFooterExpandingControls,
  FooterInlineControls: ComposerFooterInlineControls,
  FooterLabel: ComposerFooterLabel,
  Input: ComposerInput,
});
