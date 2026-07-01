// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Canvas-backed text measurement primitives for the text-layout engine: per-font
// caches of measured segment widths, grapheme/prefix width tables and emoji-width
// corrections, plus per-engine browser tuning.

import { containsCJK } from "./segmentation-rules";

export interface MeasuredSegment {
  width: number;
  containsCJK: boolean;
  graphemeWidths?: number[] | null;
  graphemePrefixWidths?: number[] | null;
  emojiCount?: number;
}

export type SegmentCache = Map<string, MeasuredSegment>;

export interface EngineConfig {
  lineFitEpsilon: number;
  carryCJKAfterClosingQuote: boolean;
  preferPrefixWidthsForBreakableRuns: boolean;
  preferEarlySoftHyphenBreak: boolean;
}

export interface FontContext {
  cache: SegmentCache;
  fontSize: number;
  emojiCorrection: number;
}

const EMOJI_PRESENTATION = /\p{Emoji_Presentation}/u;
const EMOJI_RELATED =
  /[\p{Emoji_Presentation}\p{Extended_Pictographic}\p{Regional_Indicator}️⃣]/u;

let sharedContext:
  | CanvasRenderingContext2D
  | OffscreenCanvasRenderingContext2D
  | null = null;
const fontCachesByFont = new Map<string, SegmentCache>();
let engineConfig: EngineConfig | null = null;
let graphemeSegmenter: Intl.Segmenter | null = null;
const emojiCorrectionByFont = new Map<string, number>();

function getMeasurementContext():
  | CanvasRenderingContext2D
  | OffscreenCanvasRenderingContext2D {
  if (sharedContext !== null) return sharedContext;
  if (typeof OffscreenCanvas < "u")
    return new OffscreenCanvas(1, 1).getContext(
      "2d",
    ) as OffscreenCanvasRenderingContext2D;
  if (typeof document < "u")
    return document
      .createElement("canvas")
      .getContext("2d") as CanvasRenderingContext2D;
  throw Error(
    "Text measurement requires OffscreenCanvas or a DOM canvas context.",
  );
}

function getFontCache(font: string): SegmentCache {
  let cache = fontCachesByFont.get(font);
  if (!cache) {
    cache = new Map();
    fontCachesByFont.set(font, cache);
  }
  return cache;
}

function measureSegment(text: string, cache: SegmentCache): MeasuredSegment {
  let measured = cache.get(text);
  if (measured === undefined) {
    measured = {
      width: getMeasurementContext().measureText(text).width,
      containsCJK: containsCJK(text),
    };
    cache.set(text, measured);
  }
  return measured;
}

function getEngineConfig(): EngineConfig {
  if (engineConfig !== null) return engineConfig;
  if (typeof navigator > "u")
    return {
      lineFitEpsilon: 0.005,
      carryCJKAfterClosingQuote: false,
      preferPrefixWidthsForBreakableRuns: false,
      preferEarlySoftHyphenBreak: false,
    };
  const userAgent = navigator.userAgent;
  const isSafari =
    navigator.vendor === "Apple Computer, Inc." &&
    userAgent.includes("Safari/") &&
    !userAgent.includes("Chrome/") &&
    !userAgent.includes("Chromium/") &&
    !userAgent.includes("CriOS/") &&
    !userAgent.includes("FxiOS/") &&
    !userAgent.includes("EdgiOS/");
  const isChromium =
    userAgent.includes("Chrome/") ||
    userAgent.includes("Chromium/") ||
    userAgent.includes("CriOS/") ||
    userAgent.includes("Edg/");
  return {
    lineFitEpsilon: isSafari ? 0.015625 : 0.005,
    carryCJKAfterClosingQuote: isChromium,
    preferPrefixWidthsForBreakableRuns: isSafari,
    preferEarlySoftHyphenBreak: isSafari,
  };
}

function parseFontSizePx(font: string): number {
  const match = font.match(/(\d+(?:\.\d+)?)\s*px/);
  return match ? parseFloat(match[1]) : 16;
}

function getGraphemeSegmenter(): Intl.Segmenter {
  if (graphemeSegmenter === null)
    graphemeSegmenter = new Intl.Segmenter(undefined, {
      granularity: "grapheme",
    });
  return graphemeSegmenter;
}

function isEmojiPresentation(grapheme: string): boolean {
  return EMOJI_PRESENTATION.test(grapheme) || grapheme.includes("\uFE0F");
}

function containsEmoji(text: string): boolean {
  return EMOJI_RELATED.test(text);
}

// Measures how much wider the canvas renders an emoji than the DOM, so wrapped
// line widths can be corrected per emoji.
function measureEmojiCorrection(font: string, fontSize: number): number {
  const cached = emojiCorrectionByFont.get(font);
  if (cached !== undefined) return cached;
  const context = getMeasurementContext();
  context.font = font;
  const canvasEmojiWidth = context.measureText("😀").width;
  let correction = 0;
  if (
    canvasEmojiWidth > fontSize + 0.5 &&
    typeof document < "u" &&
    document.body !== null
  ) {
    const span = document.createElement("span");
    span.style.font = font;
    span.style.display = "inline-block";
    span.style.visibility = "hidden";
    span.style.position = "absolute";
    span.textContent = "😀";
    document.body.appendChild(span);
    const domEmojiWidth = span.getBoundingClientRect().width;
    document.body.removeChild(span);
    if (canvasEmojiWidth - domEmojiWidth > 0.5)
      correction = canvasEmojiWidth - domEmojiWidth;
  }
  emojiCorrectionByFont.set(font, correction);
  return correction;
}

function countEmoji(text: string): number {
  let count = 0;
  const segmenter = getGraphemeSegmenter();
  for (const grapheme of segmenter.segment(text))
    if (isEmojiPresentation(grapheme.segment)) count++;
  return count;
}

function getCachedEmojiCount(text: string, measured: MeasuredSegment): number {
  if (measured.emojiCount === undefined) measured.emojiCount = countEmoji(text);
  return measured.emojiCount;
}

// Width of a segment, corrected for the per-emoji canvas/DOM discrepancy.
function adjustWidthForEmoji(
  text: string,
  measured: MeasuredSegment,
  emojiCorrection: number,
): number {
  return emojiCorrection === 0
    ? measured.width
    : measured.width - getCachedEmojiCount(text, measured) * emojiCorrection;
}

// Per-grapheme widths for a word (lazily computed, cached on the measurement).
function getGraphemeWidths(
  text: string,
  measured: MeasuredSegment,
  cache: SegmentCache,
  emojiCorrection: number,
): number[] | null {
  if (measured.graphemeWidths !== undefined) return measured.graphemeWidths;
  const widths: number[] = [];
  const segmenter = getGraphemeSegmenter();
  for (const grapheme of segmenter.segment(text)) {
    const graphemeMeasured = measureSegment(grapheme.segment, cache);
    widths.push(
      adjustWidthForEmoji(grapheme.segment, graphemeMeasured, emojiCorrection),
    );
  }
  measured.graphemeWidths = widths.length > 1 ? widths : null;
  return measured.graphemeWidths;
}

// Cumulative prefix widths for a word.
function getGraphemePrefixWidths(
  text: string,
  measured: MeasuredSegment,
  cache: SegmentCache,
  emojiCorrection: number,
): number[] | null {
  if (measured.graphemePrefixWidths !== undefined)
    return measured.graphemePrefixWidths;
  const prefixWidths: number[] = [];
  const segmenter = getGraphemeSegmenter();
  let prefix = "";
  for (const grapheme of segmenter.segment(text)) {
    prefix += grapheme.segment;
    const prefixMeasured = measureSegment(prefix, cache);
    prefixWidths.push(
      adjustWidthForEmoji(prefix, prefixMeasured, emojiCorrection),
    );
  }
  measured.graphemePrefixWidths = prefixWidths.length > 1 ? prefixWidths : null;
  return measured.graphemePrefixWidths;
}

function createFontContext(
  font: string,
  withEmojiCorrection: boolean,
): FontContext {
  const context = getMeasurementContext();
  context.font = font;
  const cache = getFontCache(font);
  const fontSize = parseFontSizePx(font);
  return {
    cache,
    fontSize,
    emojiCorrection: withEmojiCorrection
      ? measureEmojiCorrection(font, fontSize)
      : 0,
  };
}

export {
  getMeasurementContext,
  getFontCache,
  measureSegment,
  getEngineConfig,
  parseFontSizePx,
  getGraphemeSegmenter,
  isEmojiPresentation,
  containsEmoji,
  measureEmojiCorrection,
  countEmoji,
  getCachedEmojiCount,
  adjustWidthForEmoji,
  getGraphemeWidths,
  getGraphemePrefixWidths,
  createFontContext,
};
