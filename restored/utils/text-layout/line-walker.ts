// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Greedy line-breaking core for the text-layout engine. Walks a measured layout
// and counts (and optionally reports) the lines produced when the text is wrapped
// to a given width, handling breakable runs, soft hyphens, tabs and hard breaks.

import { getEngineConfig } from "./measure-cache";
import type { SegmentKind, TextChunk } from "./segmentation-types";

export interface TextLayout {
  widths: number[];
  lineEndFitAdvances: number[];
  lineEndPaintAdvances: number[];
  kinds: SegmentKind[];
  simpleLineWalkFastPath: boolean;
  segLevels: Int8Array | null;
  breakableWidths: (number[] | null)[];
  breakablePrefixWidths: (number[] | null)[];
  discretionaryHyphenWidth: number;
  tabStopAdvance: number;
  chunks: TextChunk[];
  segments?: string[];
}

interface LineInfo {
  startSegmentIndex: number;
  startGraphemeIndex: number;
  endSegmentIndex: number;
  endGraphemeIndex: number;
  width: number;
}

type LineCallback = (line: LineInfo) => void;

function isSkippableBreakKind(kind: SegmentKind): boolean {
  return (
    kind === "space" ||
    kind === "preserved-space" ||
    kind === "tab" ||
    kind === "zero-width-break" ||
    kind === "soft-hyphen"
  );
}

function skipLeadingBreaks(layout: TextLayout, index: number): number {
  while (index < layout.widths.length) {
    const kind = layout.kinds[index];
    if (
      kind !== "space" &&
      kind !== "zero-width-break" &&
      kind !== "soft-hyphen"
    )
      break;
    index++;
  }
  return index;
}

function tabAdvance(currentWidth: number, tabStopAdvance: number): number {
  if (tabStopAdvance <= 0) return 0;
  const remainder = currentWidth % tabStopAdvance;
  return Math.abs(remainder) <= 1e-6
    ? tabStopAdvance
    : tabStopAdvance - remainder;
}

function breakableGraphemeAdvance(
  widths: number[],
  prefixWidths: number[] | null,
  index: number,
  usePrefix: boolean,
): number {
  return !usePrefix || prefixWidths === null
    ? widths[index]
    : prefixWidths[index] - (index > 0 ? prefixWidths[index - 1] : 0);
}

function fitBreakableGraphemes(
  advances: number[],
  startWidth: number,
  maxWidth: number,
  epsilon: number,
  hyphenWidth: number,
  useAbsolute: boolean,
): { fitCount: number; fittedWidth: number } {
  let fitCount = 0;
  let fittedWidth = startWidth;
  while (fitCount < advances.length) {
    const candidateWidth = useAbsolute
      ? startWidth + advances[fitCount]
      : fittedWidth + advances[fitCount];
    if (
      (fitCount + 1 < advances.length
        ? candidateWidth + hyphenWidth
        : candidateWidth) >
      maxWidth + epsilon
    )
      break;
    fittedWidth = candidateWidth;
    fitCount++;
  }
  return { fitCount, fittedWidth };
}

function countWrappedLines(layout: TextLayout, maxWidth: number): number {
  return layout.simpleLineWalkFastPath
    ? walkFastPath(layout, maxWidth)
    : walkComplexLines(layout, maxWidth);
}

function walkFastPath(layout: TextLayout, maxWidth: number): number {
  return walkSimpleLines(layout, maxWidth);
}

// Fast path used when the text has no tabs, hard breaks, soft hyphens or other
// features that need the full walker.
function walkSimpleLines(
  layout: TextLayout,
  maxWidth: number,
  onLine?: LineCallback,
): number {
  const { widths, kinds, breakableWidths, breakablePrefixWidths } = layout;
  if (widths.length === 0) return 0;
  const config = getEngineConfig();
  const epsilon = config.lineFitEpsilon;
  let lineCount = 0;
  let currentWidth = 0;
  let hasLine = false;
  let lineStartSegment = 0;
  let lineStartGrapheme = 0;
  let lineEndSegment = 0;
  let lineEndGrapheme = 0;
  let lastBreakSegment = -1;
  let lastBreakWidth = 0;

  function resetBreak() {
    lastBreakSegment = -1;
    lastBreakWidth = 0;
  }
  function emitLine(
    endSegment = lineEndSegment,
    endGrapheme = lineEndGrapheme,
    width = currentWidth,
  ) {
    lineCount++;
    onLine?.({
      startSegmentIndex: lineStartSegment,
      startGraphemeIndex: lineStartGrapheme,
      endSegmentIndex: endSegment,
      endGraphemeIndex: endGrapheme,
      width,
    });
    currentWidth = 0;
    hasLine = false;
    resetBreak();
  }
  function beginLineFromSegment(segmentIndex: number, advance: number) {
    hasLine = true;
    lineStartSegment = segmentIndex;
    lineStartGrapheme = 0;
    lineEndSegment = segmentIndex + 1;
    lineEndGrapheme = 0;
    currentWidth = advance;
  }
  function beginLineFromGrapheme(
    segmentIndex: number,
    graphemeIndex: number,
    advance: number,
  ) {
    hasLine = true;
    lineStartSegment = segmentIndex;
    lineStartGrapheme = graphemeIndex;
    lineEndSegment = segmentIndex;
    lineEndGrapheme = graphemeIndex + 1;
    currentWidth = advance;
  }
  function extendLine(segmentIndex: number, advance: number) {
    if (!hasLine) {
      beginLineFromSegment(segmentIndex, advance);
      return;
    }
    currentWidth += advance;
    lineEndSegment = segmentIndex + 1;
    lineEndGrapheme = 0;
  }
  function noteBreakOpportunity(segmentIndex: number, advance: number) {
    if (isSkippableBreakKind(kinds[segmentIndex])) {
      lastBreakSegment = segmentIndex + 1;
      lastBreakWidth = currentWidth - advance;
    }
  }
  function layoutBreakable(segmentIndex: number) {
    layoutBreakableFrom(segmentIndex, 0);
  }
  function layoutBreakableFrom(segmentIndex: number, startGrapheme: number) {
    const runWidths = breakableWidths[segmentIndex] as number[];
    const runPrefix = breakablePrefixWidths[segmentIndex] ?? null;
    for (
      let graphemeIndex = startGrapheme;
      graphemeIndex < runWidths.length;
      graphemeIndex++
    ) {
      const advance = breakableGraphemeAdvance(
        runWidths,
        runPrefix,
        graphemeIndex,
        config.preferPrefixWidthsForBreakableRuns,
      );
      if (!hasLine) {
        beginLineFromGrapheme(segmentIndex, graphemeIndex, advance);
        continue;
      }
      if (currentWidth + advance > maxWidth + epsilon) {
        emitLine();
        beginLineFromGrapheme(segmentIndex, graphemeIndex, advance);
      } else {
        currentWidth += advance;
        lineEndSegment = segmentIndex;
        lineEndGrapheme = graphemeIndex + 1;
      }
    }
    if (
      hasLine &&
      lineEndSegment === segmentIndex &&
      lineEndGrapheme === runWidths.length
    ) {
      lineEndSegment = segmentIndex + 1;
      lineEndGrapheme = 0;
    }
  }

  let index = 0;
  for (
    ;
    index < widths.length &&
    !(
      !hasLine &&
      ((index = skipLeadingBreaks(layout, index)), index >= widths.length)
    );
  ) {
    const width = widths[index];
    const kind = kinds[index];
    if (!hasLine) {
      width > maxWidth && breakableWidths[index] !== null
        ? layoutBreakable(index)
        : beginLineFromSegment(index, width);
      noteBreakOpportunity(index, width);
      index++;
      continue;
    }
    if (currentWidth + width > maxWidth + epsilon) {
      if (isSkippableBreakKind(kind)) {
        extendLine(index, width);
        emitLine(index + 1, 0, currentWidth - width);
        index++;
        continue;
      }
      if (lastBreakSegment >= 0) {
        if (
          lineEndSegment > lastBreakSegment ||
          (lineEndSegment === lastBreakSegment && lineEndGrapheme > 0)
        ) {
          emitLine();
          continue;
        }
        emitLine(lastBreakSegment, 0, lastBreakWidth);
        continue;
      }
      if (width > maxWidth && breakableWidths[index] !== null) {
        emitLine();
        layoutBreakable(index);
        index++;
        continue;
      }
      emitLine();
      continue;
    }
    extendLine(index, width);
    noteBreakOpportunity(index, width);
    index++;
  }
  if (hasLine) emitLine();
  return lineCount;
}

// Full walker that also honours tabs, soft hyphens, discretionary hyphens and
// hard-break chunks.
function walkComplexLines(
  layout: TextLayout,
  maxWidth: number,
  onLine?: LineCallback,
): number {
  if (layout.simpleLineWalkFastPath)
    return walkSimpleLines(layout, maxWidth, onLine);
  const {
    widths,
    lineEndFitAdvances,
    lineEndPaintAdvances,
    kinds,
    breakableWidths,
    breakablePrefixWidths,
    discretionaryHyphenWidth,
    tabStopAdvance,
    chunks,
  } = layout;
  if (widths.length === 0 || chunks.length === 0) return 0;
  const config = getEngineConfig();
  const epsilon = config.lineFitEpsilon;
  let lineCount = 0;
  let currentWidth = 0;
  let hasLine = false;
  let lineStartSegment = 0;
  let lineStartGrapheme = 0;
  let lineEndSegment = 0;
  let lineEndGrapheme = 0;
  let breakSegment = -1;
  let breakFitWidth = 0;
  let breakPaintWidth = 0;
  let breakKind: SegmentKind | null = null;

  function resetBreak() {
    breakSegment = -1;
    breakFitWidth = 0;
    breakPaintWidth = 0;
    breakKind = null;
  }
  function emitLine(
    endSegment = lineEndSegment,
    endGrapheme = lineEndGrapheme,
    width = currentWidth,
  ) {
    lineCount++;
    onLine?.({
      startSegmentIndex: lineStartSegment,
      startGraphemeIndex: lineStartGrapheme,
      endSegmentIndex: endSegment,
      endGraphemeIndex: endGrapheme,
      width,
    });
    currentWidth = 0;
    hasLine = false;
    resetBreak();
  }
  function beginLineFromSegment(segmentIndex: number, advance: number) {
    hasLine = true;
    lineStartSegment = segmentIndex;
    lineStartGrapheme = 0;
    lineEndSegment = segmentIndex + 1;
    lineEndGrapheme = 0;
    currentWidth = advance;
  }
  function beginLineFromGrapheme(
    segmentIndex: number,
    graphemeIndex: number,
    advance: number,
  ) {
    hasLine = true;
    lineStartSegment = segmentIndex;
    lineStartGrapheme = graphemeIndex;
    lineEndSegment = segmentIndex;
    lineEndGrapheme = graphemeIndex + 1;
    currentWidth = advance;
  }
  function extendLine(segmentIndex: number, advance: number) {
    if (!hasLine) {
      beginLineFromSegment(segmentIndex, advance);
      return;
    }
    currentWidth += advance;
    lineEndSegment = segmentIndex + 1;
    lineEndGrapheme = 0;
  }
  function noteBreakOpportunity(segmentIndex: number, advance: number) {
    if (!isSkippableBreakKind(kinds[segmentIndex])) return;
    const fitAdvance =
      kinds[segmentIndex] === "tab" ? 0 : lineEndFitAdvances[segmentIndex];
    const paintAdvance =
      kinds[segmentIndex] === "tab"
        ? advance
        : lineEndPaintAdvances[segmentIndex];
    breakSegment = segmentIndex + 1;
    breakFitWidth = currentWidth - advance + fitAdvance;
    breakPaintWidth = currentWidth - advance + paintAdvance;
    breakKind = kinds[segmentIndex];
  }
  function layoutBreakable(segmentIndex: number) {
    layoutBreakableFrom(segmentIndex, 0);
  }
  function layoutBreakableFrom(segmentIndex: number, startGrapheme: number) {
    const runWidths = breakableWidths[segmentIndex] as number[];
    const runPrefix = breakablePrefixWidths[segmentIndex] ?? null;
    for (
      let graphemeIndex = startGrapheme;
      graphemeIndex < runWidths.length;
      graphemeIndex++
    ) {
      const advance = breakableGraphemeAdvance(
        runWidths,
        runPrefix,
        graphemeIndex,
        config.preferPrefixWidthsForBreakableRuns,
      );
      if (!hasLine) {
        beginLineFromGrapheme(segmentIndex, graphemeIndex, advance);
        continue;
      }
      if (currentWidth + advance > maxWidth + epsilon) {
        emitLine();
        beginLineFromGrapheme(segmentIndex, graphemeIndex, advance);
      } else {
        currentWidth += advance;
        lineEndSegment = segmentIndex;
        lineEndGrapheme = graphemeIndex + 1;
      }
    }
    if (
      hasLine &&
      lineEndSegment === segmentIndex &&
      lineEndGrapheme === runWidths.length
    ) {
      lineEndSegment = segmentIndex + 1;
      lineEndGrapheme = 0;
    }
  }
  function tryHyphenBreak(segmentIndex: number): boolean {
    if (breakKind !== "soft-hyphen") return false;
    const runWidths = breakableWidths[segmentIndex];
    if (runWidths === null) return false;
    const advances = config.preferPrefixWidthsForBreakableRuns
      ? (breakablePrefixWidths[segmentIndex] ?? runWidths)
      : runWidths;
    const { fitCount, fittedWidth } = fitBreakableGraphemes(
      advances,
      currentWidth,
      maxWidth,
      epsilon,
      discretionaryHyphenWidth,
      advances !== runWidths,
    );
    if (fitCount === 0) return false;
    currentWidth = fittedWidth;
    lineEndSegment = segmentIndex;
    lineEndGrapheme = fitCount;
    resetBreak();
    if (fitCount === runWidths.length) {
      lineEndSegment = segmentIndex + 1;
      lineEndGrapheme = 0;
      return true;
    }
    emitLine(segmentIndex, fitCount, fittedWidth + discretionaryHyphenWidth);
    layoutBreakableFrom(segmentIndex, fitCount);
    return true;
  }
  function emitHardBreakChunk(chunk: TextChunk) {
    lineCount++;
    onLine?.({
      startSegmentIndex: chunk.startSegmentIndex,
      startGraphemeIndex: 0,
      endSegmentIndex: chunk.consumedEndSegmentIndex,
      endGraphemeIndex: 0,
      width: 0,
    });
    resetBreak();
  }

  for (let chunkIndex = 0; chunkIndex < chunks.length; chunkIndex++) {
    const chunk = chunks[chunkIndex];
    if (chunk.startSegmentIndex === chunk.endSegmentIndex) {
      emitHardBreakChunk(chunk);
      continue;
    }
    hasLine = false;
    currentWidth = 0;
    lineStartSegment = chunk.startSegmentIndex;
    lineStartGrapheme = 0;
    lineEndSegment = chunk.startSegmentIndex;
    lineEndGrapheme = 0;
    resetBreak();
    let segmentIndex = chunk.startSegmentIndex;
    for (; segmentIndex < chunk.endSegmentIndex; ) {
      const kind = kinds[segmentIndex];
      const advance =
        kind === "tab"
          ? tabAdvance(currentWidth, tabStopAdvance)
          : widths[segmentIndex];
      if (kind === "soft-hyphen") {
        if (hasLine) {
          lineEndSegment = segmentIndex + 1;
          lineEndGrapheme = 0;
          breakSegment = segmentIndex + 1;
          breakFitWidth = currentWidth + discretionaryHyphenWidth;
          breakPaintWidth = currentWidth + discretionaryHyphenWidth;
          breakKind = kind;
        }
        segmentIndex++;
        continue;
      }
      if (!hasLine) {
        advance > maxWidth && breakableWidths[segmentIndex] !== null
          ? layoutBreakable(segmentIndex)
          : beginLineFromSegment(segmentIndex, advance);
        noteBreakOpportunity(segmentIndex, advance);
        segmentIndex++;
        continue;
      }
      if (currentWidth + advance > maxWidth + epsilon) {
        const lineFitWidth =
          currentWidth +
          (kind === "tab" ? 0 : lineEndFitAdvances[segmentIndex]);
        const linePaintWidth =
          currentWidth +
          (kind === "tab" ? advance : lineEndPaintAdvances[segmentIndex]);
        if (
          breakKind === "soft-hyphen" &&
          config.preferEarlySoftHyphenBreak &&
          breakFitWidth <= maxWidth + epsilon
        ) {
          emitLine(breakSegment, 0, breakPaintWidth);
          continue;
        }
        if (breakKind === "soft-hyphen" && tryHyphenBreak(segmentIndex)) {
          segmentIndex++;
          continue;
        }
        if (isSkippableBreakKind(kind) && lineFitWidth <= maxWidth + epsilon) {
          extendLine(segmentIndex, advance);
          emitLine(segmentIndex + 1, 0, linePaintWidth);
          segmentIndex++;
          continue;
        }
        if (breakSegment >= 0 && breakFitWidth <= maxWidth + epsilon) {
          if (
            lineEndSegment > breakSegment ||
            (lineEndSegment === breakSegment && lineEndGrapheme > 0)
          ) {
            emitLine();
            continue;
          }
          const breakAt = breakSegment;
          emitLine(breakAt, 0, breakPaintWidth);
          segmentIndex = breakAt;
          continue;
        }
        if (advance > maxWidth && breakableWidths[segmentIndex] !== null) {
          emitLine();
          layoutBreakable(segmentIndex);
          segmentIndex++;
          continue;
        }
        emitLine();
        continue;
      }
      extendLine(segmentIndex, advance);
      noteBreakOpportunity(segmentIndex, advance);
      segmentIndex++;
    }
    if (hasLine) {
      const width =
        breakSegment === chunk.consumedEndSegmentIndex
          ? breakPaintWidth
          : currentWidth;
      emitLine(chunk.consumedEndSegmentIndex, 0, width);
    }
  }
  return lineCount;
}

export { countWrappedLines };
