// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Hover tooltip that previews a single file's diff, priming the syntax highlight
// cache on first hover and rendering the unified diff inside the tooltip surface.

import type { KeyboardEvent, MouseEvent, ReactNode } from "react";
import { useEffect, useState } from "react";
import { classNames } from "../../utils/class-names";
import type { ParsedFileDiff } from "./turn-diff-summaries";
import {
  DiffHighlighterScope,
  DiffLineStats,
  Tooltip,
  UnifiedFileDiffView,
  useDiffHighlighter,
} from "../../boundaries/onboarding-commons-externals.facade";

const DIFF_PREVIEW_HOVER_DELAY_MS = 800;
const DIFF_PREVIEW_MAX_WIDTH =
  "clamp(0px, calc(var(--radix-tooltip-trigger-width) - 64px), var(--radix-tooltip-content-available-width))";

const styles = {
  positioner: "_positioner_1mxvg_1",
  surface: "_surface_1mxvg_23",
};

export interface DiffPreviewTooltipProps {
  children: ReactNode;
  diff: ParsedFileDiff;
  disabled?: boolean;
  displayPath: string;
  linesAdded: number;
  linesRemoved: number;
  onOpen?: (event: MouseEvent | KeyboardEvent) => void;
}

export function DiffPreviewTooltip({
  children,
  diff,
  disabled = false,
  displayPath,
  linesAdded,
  linesRemoved,
  onOpen,
}: DiffPreviewTooltipProps) {
  const [shouldPrime, setShouldPrime] = useState(false);

  const primer = shouldPrime ? (
    <DiffHighlighterScope>
      <DiffHighlightPrimer fileDiff={diff.metadata} />
    </DiffHighlighterScope>
  ) : null;

  const surface = (
    <DiffPreviewSurface
      diff={diff}
      displayPath={displayPath}
      linesAdded={linesAdded}
      linesRemoved={linesRemoved}
      onOpen={onOpen}
    />
  );

  return (
    <>
      {primer}
      <Tooltip
        key={disabled ? "disabled" : "enabled"}
        align="center"
        closeOnTriggerBlur={false}
        delayDuration={DIFF_PREVIEW_HOVER_DELAY_MS}
        disabled={disabled}
        interactive={true}
        onPointerEnter={() => setShouldPrime(true)}
        side="top"
        sideOffset={0}
        skipDelayKey="diff-preview"
        tooltipBodyClassName="h-full"
        tooltipClassName={styles.positioner}
        tooltipMaxWidth={DIFF_PREVIEW_MAX_WIDTH}
        variant="unstyled"
        tooltipContent={surface}
      >
        {children}
      </Tooltip>
    </>
  );
}

function DiffHighlightPrimer({
  fileDiff,
}: {
  fileDiff: ParsedFileDiff["metadata"];
}) {
  const highlighter = useDiffHighlighter();
  useEffect(() => {
    if (fileDiff.cacheKey != null) {
      highlighter?.primeDiffHighlightCache(fileDiff);
    }
  }, [fileDiff, highlighter]);
  return null;
}

interface DiffPreviewSurfaceProps {
  diff: ParsedFileDiff;
  displayPath: string;
  linesAdded: number;
  linesRemoved: number;
  onOpen?: (event: MouseEvent | KeyboardEvent) => void;
}

function DiffPreviewSurface({
  diff,
  displayPath,
  linesAdded,
  linesRemoved,
  onOpen,
}: DiffPreviewSurfaceProps) {
  const [rendered, setRendered] = useState(false);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onOpen?.(event);
    }
  };

  const surfaceClassName = classNames(
    styles.surface,
    "border-token-border bg-token-dropdown-background flex flex-col overflow-hidden rounded-lg border shadow-xl focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:outline-none focus-visible:ring-inset",
    !rendered && "invisible",
    onOpen != null && "cursor-interaction",
  );

  const header = (
    <div className="text-size-chat flex h-9 w-full shrink-0 items-center gap-2 border-b border-token-border bg-token-dropdown-background px-4 py-[var(--turn-diff-row-padding-y)] text-left extension:bg-token-input-background">
      <span className="min-w-0 flex-1 truncate text-token-foreground">
        {displayPath}
      </span>
      <DiffLineStats linesAdded={linesAdded} linesRemoved={linesRemoved} />
    </div>
  );

  const body = (
    <div
      className="max-h-96 min-h-0 flex-1 overflow-y-auto [contain:layout_paint]"
      data-testid="diff-preview-scroll"
    >
      <UnifiedFileDiffView
        className="composer-diff-simple-line relative overflow-clip [contain:content]"
        diffStyle="unified"
        fileDiff={diff.metadata}
        hunkSeparators="simple"
        onPostRender={() => setRendered(true)}
      />
    </div>
  );

  return (
    <div
      className={surfaceClassName}
      onClick={onOpen}
      onKeyDown={onOpen == null ? undefined : handleKeyDown}
      role={onOpen == null ? undefined : "button"}
      tabIndex={onOpen == null ? undefined : 0}
    >
      {header}
      {body}
    </div>
  );
}
