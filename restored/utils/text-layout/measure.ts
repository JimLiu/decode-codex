// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Public surface of the text-layout engine. Turns a string + CSS font into a
// measured layout (segment widths, breakable run tables, bidi levels and hard-break
// chunks) and measures how many lines / how tall the text becomes at a given width.

import { mapSegmentBidiLevels } from "./bidi";
import { countWrappedLines, type TextLayout } from "./line-walker";
import {
  adjustWidthForEmoji,
  containsEmoji,
  createFontContext,
  getEngineConfig,
  getGraphemePrefixWidths,
  getGraphemeSegmenter,
  getGraphemeWidths,
  measureSegment,
} from "./measure-cache";
import { analyzeText } from "./segmentation";
import {
  CJK_CLOSING_PUNCTUATION,
  containsCJK,
  endsWithClosingQuote,
  OPENING_PUNCTUATION,
  TERMINAL_PUNCTUATION,
} from "./segmentation-rules";
import type { AnalyzedText, TextChunk } from "./segmentation-types";

interface TextLayoutOptions {
  whiteSpace?: string;
}

function emptyLayout(withSegments: boolean): TextLayout {
  return withSegments
    ? {
        widths: [],
        lineEndFitAdvances: [],
        lineEndPaintAdvances: [],
        kinds: [],
        simpleLineWalkFastPath: true,
        segLevels: null,
        breakableWidths: [],
        breakablePrefixWidths: [],
        discretionaryHyphenWidth: 0,
        tabStopAdvance: 0,
        chunks: [],
        segments: [],
      }
    : {
        widths: [],
        lineEndFitAdvances: [],
        lineEndPaintAdvances: [],
        kinds: [],
        simpleLineWalkFastPath: true,
        segLevels: null,
        breakableWidths: [],
        breakablePrefixWidths: [],
        discretionaryHyphenWidth: 0,
        tabStopAdvance: 0,
        chunks: [],
      };
}

// Builds a measured layout from analyzed text. Splits CJK runs at their natural
// per-character break points and records the data the line walker needs.
function buildLayout(
  analyzed: AnalyzedText,
  font: string,
  withSegments: boolean,
): TextLayout {
  const graphemeSegmenter = getGraphemeSegmenter();
  const config = getEngineConfig();
  const { cache, emojiCorrection } = createFontContext(
    font,
    containsEmoji(analyzed.normalized),
  );
  const discretionaryHyphenWidth = adjustWidthForEmoji(
    "-",
    measureSegment("-", cache),
    emojiCorrection,
  );
  const tabStopAdvance =
    adjustWidthForEmoji(" ", measureSegment(" ", cache), emojiCorrection) * 8;
  if (analyzed.len === 0) return emptyLayout(withSegments);

  const widths: number[] = [];
  const lineEndFitAdvances: number[] = [];
  const lineEndPaintAdvances: number[] = [];
  const kinds: TextLayout["kinds"] = [];
  let simpleFastPath = analyzed.chunks.length <= 1;
  const charIndices: number[] | null = withSegments ? [] : null;
  const breakableWidthsList: (number[] | null)[] = [];
  const breakablePrefixWidthsList: (number[] | null)[] = [];
  const segmentsList: string[] | null = withSegments ? [] : null;
  const chunkStartMap: number[] = Array.from({ length: analyzed.len });
  const chunkEndMap: number[] = Array.from({ length: analyzed.len });

  function pushSegment(
    segmentText: string,
    width: number,
    fitAdvance: number,
    paintAdvance: number,
    kind: TextLayout["kinds"][number],
    charIndex: number,
    runWidths: number[] | null,
    runPrefixWidths: number[] | null,
  ) {
    if (kind !== "text" && kind !== "space" && kind !== "zero-width-break")
      simpleFastPath = false;
    widths.push(width);
    lineEndFitAdvances.push(fitAdvance);
    lineEndPaintAdvances.push(paintAdvance);
    kinds.push(kind);
    charIndices?.push(charIndex);
    breakableWidthsList.push(runWidths);
    breakablePrefixWidthsList.push(runPrefixWidths);
    if (segmentsList !== null) segmentsList.push(segmentText);
  }

  for (let segmentIndex = 0; segmentIndex < analyzed.len; segmentIndex++) {
    chunkStartMap[segmentIndex] = widths.length;
    const text = analyzed.texts[segmentIndex];
    const isWordLike = analyzed.isWordLike[segmentIndex];
    const kind = analyzed.kinds[segmentIndex];
    const start = analyzed.starts[segmentIndex];
    if (kind === "soft-hyphen") {
      pushSegment(
        text,
        0,
        discretionaryHyphenWidth,
        discretionaryHyphenWidth,
        kind,
        start,
        null,
        null,
      );
      chunkEndMap[segmentIndex] = widths.length;
      continue;
    }
    if (kind === "hard-break") {
      pushSegment(text, 0, 0, 0, kind, start, null, null);
      chunkEndMap[segmentIndex] = widths.length;
      continue;
    }
    if (kind === "tab") {
      pushSegment(text, 0, 0, 0, kind, start, null, null);
      chunkEndMap[segmentIndex] = widths.length;
      continue;
    }
    const measured = measureSegment(text, cache);
    if (kind === "text" && measured.containsCJK) {
      let cluster = "";
      let clusterStart = 0;
      for (const grapheme of graphemeSegmenter.segment(text)) {
        const graphemeText = grapheme.segment;
        if (cluster.length === 0) {
          cluster = graphemeText;
          clusterStart = grapheme.index;
          continue;
        }
        if (
          OPENING_PUNCTUATION.has(cluster) ||
          CJK_CLOSING_PUNCTUATION.has(graphemeText) ||
          TERMINAL_PUNCTUATION.has(graphemeText) ||
          (config.carryCJKAfterClosingQuote &&
            containsCJK(graphemeText) &&
            endsWithClosingQuote(cluster))
        ) {
          cluster += graphemeText;
          continue;
        }
        const clusterMeasured = measureSegment(cluster, cache);
        const clusterWidth = adjustWidthForEmoji(
          cluster,
          clusterMeasured,
          emojiCorrection,
        );
        pushSegment(
          cluster,
          clusterWidth,
          clusterWidth,
          clusterWidth,
          "text",
          start + clusterStart,
          null,
          null,
        );
        cluster = graphemeText;
        clusterStart = grapheme.index;
      }
      if (cluster.length > 0) {
        const clusterMeasured = measureSegment(cluster, cache);
        const clusterWidth = adjustWidthForEmoji(
          cluster,
          clusterMeasured,
          emojiCorrection,
        );
        pushSegment(
          cluster,
          clusterWidth,
          clusterWidth,
          clusterWidth,
          "text",
          start + clusterStart,
          null,
          null,
        );
      }
      chunkEndMap[segmentIndex] = widths.length;
      continue;
    }
    const width = adjustWidthForEmoji(text, measured, emojiCorrection);
    const fitAdvance =
      kind === "space" ||
      kind === "preserved-space" ||
      kind === "zero-width-break"
        ? 0
        : width;
    const paintAdvance =
      kind === "space" || kind === "zero-width-break" ? 0 : width;
    isWordLike && text.length > 1
      ? pushSegment(
          text,
          width,
          fitAdvance,
          paintAdvance,
          kind,
          start,
          getGraphemeWidths(text, measured, cache, emojiCorrection),
          config.preferPrefixWidthsForBreakableRuns
            ? getGraphemePrefixWidths(text, measured, cache, emojiCorrection)
            : null,
        )
      : pushSegment(
          text,
          width,
          fitAdvance,
          paintAdvance,
          kind,
          start,
          null,
          null,
        );
    chunkEndMap[segmentIndex] = widths.length;
  }

  const chunks = remapChunkIndices(analyzed.chunks, chunkStartMap, chunkEndMap);
  const segLevels =
    charIndices === null
      ? null
      : mapSegmentBidiLevels(analyzed.normalized, charIndices);
  return segmentsList === null
    ? {
        widths,
        lineEndFitAdvances,
        lineEndPaintAdvances,
        kinds,
        simpleLineWalkFastPath: simpleFastPath,
        segLevels,
        breakableWidths: breakableWidthsList,
        breakablePrefixWidths: breakablePrefixWidthsList,
        discretionaryHyphenWidth,
        tabStopAdvance,
        chunks,
      }
    : {
        widths,
        lineEndFitAdvances,
        lineEndPaintAdvances,
        kinds,
        simpleLineWalkFastPath: simpleFastPath,
        segLevels,
        breakableWidths: breakableWidthsList,
        breakablePrefixWidths: breakablePrefixWidthsList,
        discretionaryHyphenWidth,
        tabStopAdvance,
        chunks,
        segments: segmentsList,
      };
}

// Maps the original chunk segment indices onto the expanded layout indices.
function remapChunkIndices(
  chunks: TextChunk[],
  startMap: number[],
  endMap: number[],
): TextChunk[] {
  const remapped: TextChunk[] = [];
  for (let index = 0; index < chunks.length; index++) {
    const chunk = chunks[index];
    const startSegmentIndex =
      chunk.startSegmentIndex < startMap.length
        ? startMap[chunk.startSegmentIndex]
        : (endMap[endMap.length - 1] ?? 0);
    const endSegmentIndex =
      chunk.endSegmentIndex < startMap.length
        ? startMap[chunk.endSegmentIndex]
        : (endMap[endMap.length - 1] ?? 0);
    const consumedEndSegmentIndex =
      chunk.consumedEndSegmentIndex < startMap.length
        ? startMap[chunk.consumedEndSegmentIndex]
        : (endMap[endMap.length - 1] ?? 0);
    remapped.push({
      startSegmentIndex,
      endSegmentIndex,
      consumedEndSegmentIndex,
    });
  }
  return remapped;
}

function layoutText(
  text: string,
  font: string,
  withSegments: boolean,
  options?: TextLayoutOptions,
): TextLayout {
  return buildLayout(
    analyzeText(text, getEngineConfig(), options?.whiteSpace),
    font,
    withSegments,
  );
}

function layoutPlainText(
  text: string,
  font: string,
  options?: TextLayoutOptions,
): TextLayout {
  return layoutText(text, font, false, options);
}

// Measures wrapped text: how many lines it occupies at maxWidth and the total
// height given a line height in pixels.
function measureWrappedText(
  layout: TextLayout,
  maxWidth: number,
  lineHeightPx: number,
): { lineCount: number; height: number } {
  const lineCount = countWrappedLines(layout, maxWidth);
  return { lineCount, height: lineCount * lineHeightPx };
}
