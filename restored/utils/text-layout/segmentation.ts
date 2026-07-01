// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Grapheme/word segmentation for the text-layout engine. Splits normalized text
// into typed runs (words, spaces, glue, tabs, soft hyphens, hard breaks) and
// applies a series of merge passes so that URLs, numbers, hyphenated terms, CJK
// punctuation and combining marks break the way browsers do.

import {
  CJK_CLOSING_PUNCTUATION,
  OPENING_PUNCTUATION,
  TERMINAL_PUNCTUATION,
  containsCJK,
  endsWithClosingQuote,
} from "./segmentation-rules";
import type {
  AnalyzedText,
  SegmentedText,
  SegmentKind,
  TextChunk,
  WhiteSpaceMode,
} from "./segmentation-types";

const WHITESPACE_RUN = /[ \t\n\r\f]+/g;
const COLLAPSIBLE_WHITESPACE = /[\t\n\r\f]| {2,}|^ | $/;
const ARABIC_SCRIPT = /\p{Script=Arabic}/u;
const COMBINING_MARK = /\p{M}/u;
const DECIMAL_DIGIT = /\p{Nd}/u;
const APOSTROPHES = new Set(["'", "’"]);
const COLON_LIKE_PUNCTUATION = new Set([":", ".", "،", "؛"]);
const MYANMAR_SECTION_MARK = new Set(["၏"]);
const URL_SCHEME_PATTERN = /^[A-Za-z][A-Za-z0-9+.-]*:$/;
const NUMERIC_CONNECTORS = new Set([
  ":",
  "-",
  "/",
  "×",
  ",",
  ".",
  "+",
  "–",
  "—",
]);
const WORD_WITH_TRAILING_PUNCTUATION = /^[A-Za-z0-9_]+[,:;]*$/;
const TRAILING_CLAUSE_PUNCTUATION = /[,:;]+$/;

let wordSegmenter: Intl.Segmenter | null = null;

function resolveWhiteSpaceMode(whiteSpace?: string): WhiteSpaceMode {
  const mode = whiteSpace ?? "normal";
  return mode === "pre-wrap"
    ? { mode, preserveOrdinarySpaces: true, preserveHardBreaks: true }
    : { mode, preserveOrdinarySpaces: false, preserveHardBreaks: false };
}

function collapseWhitespace(text: string): string {
  if (!COLLAPSIBLE_WHITESPACE.test(text)) return text;
  let collapsed = text.replace(WHITESPACE_RUN, " ");
  if (collapsed.charCodeAt(0) === 32) collapsed = collapsed.slice(1);
  if (collapsed.length > 0 && collapsed.charCodeAt(collapsed.length - 1) === 32)
    collapsed = collapsed.slice(0, -1);
  return collapsed;
}

function normalizeNewlines(text: string): string {
  return /[\r\f]/.test(text)
    ? text.replace(/\r\n/g, "\n").replace(/[\r\f]/g, "\n")
    : text.replace(/\r\n/g, "\n");
}

function getWordSegmenter(): Intl.Segmenter {
  if (wordSegmenter === null)
    wordSegmenter = new Intl.Segmenter(undefined, { granularity: "word" });
  return wordSegmenter;
}

function isArabic(text: string): boolean {
  return ARABIC_SCRIPT.test(text);
}

// Returns true when the run begins with terminal punctuation and is otherwise
// only combining marks (so it can attach to the preceding text segment).
function isTerminalPunctuationWithMarks(text: string): boolean {
  if (isPunctuationOnlyRun(text)) return true;
  let sawTerminal = false;
  for (const char of text) {
    if (TERMINAL_PUNCTUATION.has(char)) {
      sawTerminal = true;
      continue;
    }
    if (!(sawTerminal && COMBINING_MARK.test(char))) return false;
  }
  return sawTerminal;
}

function isCjkClosingOrTerminalRun(text: string): boolean {
  for (const char of text)
    if (!CJK_CLOSING_PUNCTUATION.has(char) && !TERMINAL_PUNCTUATION.has(char))
      return false;
  return text.length > 0;
}

// Run made up of opening punctuation, terminal punctuation, apostrophes and
// combining marks (used to glue stray punctuation onto adjacent words).
function isLeadingPunctuationRun(text: string): boolean {
  if (isPunctuationOnlyRun(text)) return true;
  for (const char of text)
    if (
      !OPENING_PUNCTUATION.has(char) &&
      !APOSTROPHES.has(char) &&
      !COMBINING_MARK.test(char)
    )
      return false;
  return text.length > 0;
}

function isPunctuationOnlyRun(text: string): boolean {
  let sawPunctuation = false;
  for (const char of text)
    if (!(char === "\\" || COMBINING_MARK.test(char))) {
      if (
        OPENING_PUNCTUATION.has(char) ||
        TERMINAL_PUNCTUATION.has(char) ||
        APOSTROPHES.has(char)
      ) {
        sawPunctuation = true;
        continue;
      }
      return false;
    }
  return sawPunctuation;
}

// Splits a run into the leading text portion and a trailing run of opening /
// apostrophe punctuation, or null when there is nothing to split.
function splitTrailingPunctuation(
  text: string,
): { head: string; tail: string } | null {
  const chars = Array.from(text);
  let boundary = chars.length;
  while (boundary > 0) {
    const char = chars[boundary - 1];
    if (COMBINING_MARK.test(char)) {
      boundary--;
      continue;
    }
    if (OPENING_PUNCTUATION.has(char) || APOSTROPHES.has(char)) {
      boundary--;
      continue;
    }
    break;
  }
  return boundary <= 0 || boundary === chars.length
    ? null
    : {
        head: chars.slice(0, boundary).join(""),
        tail: chars.slice(boundary).join(""),
      };
}

function allCharactersEqual(text: string, char: string): boolean {
  if (text.length === 0) return false;
  for (const current of text) if (current !== char) return false;
  return true;
}

function isArabicEndingWithColonLike(text: string): boolean {
  return !isArabic(text) || text.length === 0
    ? false
    : COLON_LIKE_PUNCTUATION.has(text[text.length - 1]);
}

function endsWithMyanmarSectionMark(text: string): boolean {
  return text.length === 0
    ? false
    : MYANMAR_SECTION_MARK.has(text[text.length - 1]);
}

function leadingSpaceWithMarks(
  text: string,
): { space: string; marks: string } | null {
  if (text.length < 2 || text[0] !== " ") return null;
  const marks = text.slice(1);
  return /^\p{M}+$/u.test(marks) ? { space: " ", marks } : null;
}

function classifySegmentKind(char: string, mode: WhiteSpaceMode): SegmentKind {
  if (mode.preserveOrdinarySpaces || mode.preserveHardBreaks) {
    if (char === " ") return "preserved-space";
    if (char === "\t") return "tab";
    if (mode.preserveHardBreaks && char === "\n") return "hard-break";
  }
  return char === " "
    ? "space"
    : char === "\u00A0" ||
        char === "\u202F" ||
        char === "\u2060" ||
        char === "\uFEFF"
      ? "glue"
      : char === "\u200B"
        ? "zero-width-break"
        : char === "\u00AD"
          ? "soft-hyphen"
          : "text";
}

function joinSegmentParts(parts: string[]): string {
  return parts.length === 1 ? parts[0] : parts.join("");
}

interface RawSegment {
  text: string;
  isWordLike: boolean;
  kind: SegmentKind;
  start: number;
}

// Splits a single word-segmenter chunk into typed runs, grouping consecutive
// characters of the same kind together.
function splitSegmentRun(
  graphemes: Iterable<string>,
  isWordLikeChunk: boolean,
  baseStart: number,
  mode: WhiteSpaceMode,
): RawSegment[] {
  const segments: RawSegment[] = [];
  let currentKind: SegmentKind | null = null;
  let currentParts: string[] = [];
  let currentStart = baseStart;
  let currentIsWordLike = false;
  let offset = 0;
  for (const grapheme of graphemes) {
    const kind = classifySegmentKind(grapheme, mode);
    const graphemeIsWordLike = kind === "text" && isWordLikeChunk;
    if (
      currentKind !== null &&
      kind === currentKind &&
      graphemeIsWordLike === currentIsWordLike
    ) {
      currentParts.push(grapheme);
      offset += grapheme.length;
      continue;
    }
    if (currentKind !== null)
      segments.push({
        text: joinSegmentParts(currentParts),
        isWordLike: currentIsWordLike,
        kind: currentKind,
        start: currentStart,
      });
    currentKind = kind;
    currentParts = [grapheme];
    currentStart = baseStart + offset;
    currentIsWordLike = graphemeIsWordLike;
    offset += grapheme.length;
  }
  if (currentKind !== null)
    segments.push({
      text: joinSegmentParts(currentParts),
      isWordLike: currentIsWordLike,
      kind: currentKind,
      start: currentStart,
    });
  return segments;
}

function isBreakKind(kind: SegmentKind): boolean {
  return (
    kind === "space" ||
    kind === "preserved-space" ||
    kind === "zero-width-break" ||
    kind === "hard-break"
  );
}

function looksLikeUrlScheme(segmented: SegmentedText, index: number): boolean {
  const text = segmented.texts[index];
  return text.startsWith("www.")
    ? true
    : URL_SCHEME_PATTERN.test(text) &&
        index + 1 < segmented.len &&
        segmented.kinds[index + 1] === "text" &&
        segmented.texts[index + 1] === "//";
}

function looksLikeUrlWithQuery(text: string): boolean {
  return (
    text.includes("?") && (text.includes("://") || text.startsWith("www."))
  );
}

// Merges scheme + host + path runs so that a URL is treated as one breakable
// token instead of fragmenting at punctuation.
function mergeUrlSegments(segmented: SegmentedText): SegmentedText {
  const texts = segmented.texts.slice();
  const isWordLike = segmented.isWordLike.slice();
  const kinds = segmented.kinds.slice();
  const starts = segmented.starts.slice();
  for (let index = 0; index < segmented.len; index++) {
    if (kinds[index] !== "text" || !looksLikeUrlScheme(segmented, index))
      continue;
    const parts = [texts[index]];
    let scan = index + 1;
    for (; scan < segmented.len && !isBreakKind(kinds[scan]); ) {
      parts.push(texts[scan]);
      isWordLike[index] = true;
      const hasQuery = texts[scan].includes("?");
      kinds[scan] = "text";
      texts[scan] = "";
      scan++;
      if (hasQuery) break;
    }
    texts[index] = joinSegmentParts(parts);
  }
  let write = 0;
  for (let index = 0; index < texts.length; index++) {
    const text = texts[index];
    if (text.length !== 0) {
      if (write !== index) {
        texts[write] = text;
        isWordLike[write] = isWordLike[index];
        kinds[write] = kinds[index];
        starts[write] = starts[index];
      }
      write++;
    }
  }
  texts.length = write;
  isWordLike.length = write;
  kinds.length = write;
  starts.length = write;
  return { len: write, texts, isWordLike, kinds, starts };
}

// Joins the query-string tail onto a URL token so it stays unbreakable.
function mergeQueryTailSegments(segmented: SegmentedText): SegmentedText {
  const texts: string[] = [];
  const isWordLike: boolean[] = [];
  const kinds: SegmentKind[] = [];
  const starts: number[] = [];
  for (let index = 0; index < segmented.len; index++) {
    const text = segmented.texts[index];
    texts.push(text);
    isWordLike.push(segmented.isWordLike[index]);
    kinds.push(segmented.kinds[index]);
    starts.push(segmented.starts[index]);
    if (!looksLikeUrlWithQuery(text)) continue;
    const tailStart = index + 1;
    if (tailStart >= segmented.len || isBreakKind(segmented.kinds[tailStart]))
      continue;
    const tailParts: string[] = [];
    const tailStartOffset = segmented.starts[tailStart];
    let scan = tailStart;
    for (; scan < segmented.len && !isBreakKind(segmented.kinds[scan]); ) {
      tailParts.push(segmented.texts[scan]);
      scan++;
    }
    if (tailParts.length > 0) {
      texts.push(joinSegmentParts(tailParts));
      isWordLike.push(true);
      kinds.push("text");
      starts.push(tailStartOffset);
      index = scan - 1;
    }
  }
  return { len: texts.length, texts, isWordLike, kinds, starts };
}

function hasDigit(text: string): boolean {
  for (const char of text) if (DECIMAL_DIGIT.test(char)) return true;
  return false;
}

function isNumericLike(text: string): boolean {
  if (text.length === 0) return false;
  for (const char of text)
    if (!(DECIMAL_DIGIT.test(char) || NUMERIC_CONNECTORS.has(char)))
      return false;
  return true;
}

// Merges consecutive numeric-like runs (e.g. "1,234.56", "12:30") into a single
// unbreakable token.
function mergeNumericRuns(segmented: SegmentedText): SegmentedText {
  const texts: string[] = [];
  const isWordLike: boolean[] = [];
  const kinds: SegmentKind[] = [];
  const starts: number[] = [];
  for (let index = 0; index < segmented.len; index++) {
    const text = segmented.texts[index];
    const kind = segmented.kinds[index];
    if (kind === "text" && isNumericLike(text) && hasDigit(text)) {
      const parts = [text];
      let scan = index + 1;
      for (
        ;
        scan < segmented.len &&
        segmented.kinds[scan] === "text" &&
        isNumericLike(segmented.texts[scan]);
      ) {
        parts.push(segmented.texts[scan]);
        scan++;
      }
      texts.push(joinSegmentParts(parts));
      isWordLike.push(true);
      kinds.push("text");
      starts.push(segmented.starts[index]);
      index = scan - 1;
      continue;
    }
    texts.push(text);
    isWordLike.push(segmented.isWordLike[index]);
    kinds.push(kind);
    starts.push(segmented.starts[index]);
  }
  return { len: texts.length, texts, isWordLike, kinds, starts };
}

// Merges word-with-trailing-punctuation runs ("foo," "bar;") so each word keeps
// its trailing clause punctuation attached.
function mergeWordsWithTrailingPunctuation(
  segmented: SegmentedText,
): SegmentedText {
  const texts: string[] = [];
  const isWordLike: boolean[] = [];
  const kinds: SegmentKind[] = [];
  const starts: number[] = [];
  for (let index = 0; index < segmented.len; index++) {
    const text = segmented.texts[index];
    const kind = segmented.kinds[index];
    const wordLike = segmented.isWordLike[index];
    if (
      kind === "text" &&
      wordLike &&
      WORD_WITH_TRAILING_PUNCTUATION.test(text)
    ) {
      const parts = [text];
      let continues = TRAILING_CLAUSE_PUNCTUATION.test(text);
      let scan = index + 1;
      for (
        ;
        continues &&
        scan < segmented.len &&
        segmented.kinds[scan] === "text" &&
        segmented.isWordLike[scan] &&
        WORD_WITH_TRAILING_PUNCTUATION.test(segmented.texts[scan]);
      ) {
        const nextText = segmented.texts[scan];
        parts.push(nextText);
        continues = TRAILING_CLAUSE_PUNCTUATION.test(nextText);
        scan++;
      }
      texts.push(joinSegmentParts(parts));
      isWordLike.push(true);
      kinds.push("text");
      starts.push(segmented.starts[index]);
      index = scan - 1;
      continue;
    }
    texts.push(text);
    isWordLike.push(wordLike);
    kinds.push(kind);
    starts.push(segmented.starts[index]);
  }
  return { len: texts.length, texts, isWordLike, kinds, starts };
}

// Splits hyphenated alphanumeric runs ("foo-bar-baz") into per-component tokens
// that may break after each hyphen.
function splitHyphenatedRuns(segmented: SegmentedText): SegmentedText {
  const texts: string[] = [];
  const isWordLike: boolean[] = [];
  const kinds: SegmentKind[] = [];
  const starts: number[] = [];
  for (let index = 0; index < segmented.len; index++) {
    const text = segmented.texts[index];
    if (segmented.kinds[index] === "text" && text.includes("-")) {
      const parts = text.split("-");
      let splittable = parts.length > 1;
      for (let part = 0; part < parts.length; part++) {
        const component = parts[part];
        if (!splittable) break;
        if (
          component.length === 0 ||
          !hasDigit(component) ||
          !isNumericLike(component)
        )
          splittable = false;
      }
      if (splittable) {
        let offset = 0;
        for (let part = 0; part < parts.length; part++) {
          const component = parts[part];
          const piece = part < parts.length - 1 ? `${component}-` : component;
          texts.push(piece);
          isWordLike.push(true);
          kinds.push("text");
          starts.push(segmented.starts[index] + offset);
          offset += piece.length;
        }
        continue;
      }
    }
    texts.push(text);
    isWordLike.push(segmented.isWordLike[index]);
    kinds.push(segmented.kinds[index]);
    starts.push(segmented.starts[index]);
  }
  return { len: texts.length, texts, isWordLike, kinds, starts };
}

// Attaches non-breaking glue runs to the surrounding text so glued spans stay on
// the same line.
function mergeGlueSegments(segmented: SegmentedText): SegmentedText {
  const texts: string[] = [];
  const isWordLike: boolean[] = [];
  const kinds: SegmentKind[] = [];
  const starts: number[] = [];
  let index = 0;
  while (index < segmented.len) {
    const parts = [segmented.texts[index]];
    let wordLike = segmented.isWordLike[index];
    let kind = segmented.kinds[index];
    let start = segmented.starts[index];
    if (kind === "glue") {
      const glueParts = [parts[0]];
      const glueStart = start;
      for (
        index++;
        index < segmented.len && segmented.kinds[index] === "glue";
      ) {
        glueParts.push(segmented.texts[index]);
        index++;
      }
      const glueText = joinSegmentParts(glueParts);
      if (index < segmented.len && segmented.kinds[index] === "text") {
        parts[0] = glueText;
        parts.push(segmented.texts[index]);
        wordLike = segmented.isWordLike[index];
        kind = "text";
        start = glueStart;
        index++;
      } else {
        texts.push(glueText);
        isWordLike.push(false);
        kinds.push("glue");
        starts.push(glueStart);
        continue;
      }
    } else index++;
    if (kind === "text")
      for (; index < segmented.len && segmented.kinds[index] === "glue"; ) {
        const trailingGlue: string[] = [];
        for (; index < segmented.len && segmented.kinds[index] === "glue"; ) {
          trailingGlue.push(segmented.texts[index]);
          index++;
        }
        const glueText = joinSegmentParts(trailingGlue);
        if (index < segmented.len && segmented.kinds[index] === "text") {
          parts.push(glueText, segmented.texts[index]);
          wordLike ||= segmented.isWordLike[index];
          index++;
          continue;
        }
        parts.push(glueText);
      }
    texts.push(joinSegmentParts(parts));
    isWordLike.push(wordLike);
    kinds.push(kind);
    starts.push(start);
  }
  return { len: texts.length, texts, isWordLike, kinds, starts };
}

// Moves trailing opening/apostrophe punctuation across a CJK boundary so it stays
// with the following CJK text run.
function reorderCjkTrailingPunctuation(
  segmented: SegmentedText,
): SegmentedText {
  const texts = segmented.texts.slice();
  const isWordLike = segmented.isWordLike.slice();
  const kinds = segmented.kinds.slice();
  const starts = segmented.starts.slice();
  for (let index = 0; index < texts.length - 1; index++) {
    if (
      kinds[index] !== "text" ||
      kinds[index + 1] !== "text" ||
      !containsCJK(texts[index]) ||
      !containsCJK(texts[index + 1])
    )
      continue;
    const split = splitTrailingPunctuation(texts[index]);
    if (split !== null) {
      texts[index] = split.head;
      texts[index + 1] = split.tail + texts[index + 1];
      starts[index + 1] = starts[index] + split.head.length;
    }
  }
  return { len: texts.length, texts, isWordLike, kinds, starts };
}

// Core word/grapheme segmentation, followed by the merge pipeline.
function segmentText(
  text: string,
  config: { carryCJKAfterClosingQuote: boolean },
  mode: WhiteSpaceMode,
): SegmentedText {
  const segmenter = getWordSegmenter();
  let count = 0;
  const texts: string[] = [];
  const isWordLike: boolean[] = [];
  const kinds: SegmentKind[] = [];
  const starts: number[] = [];
  for (const wordSegment of segmenter.segment(text))
    for (const part of splitSegmentRun(
      wordSegment.segment,
      wordSegment.isWordLike ?? false,
      wordSegment.index,
      mode,
    )) {
      const isText = part.kind === "text";
      if (
        (config.carryCJKAfterClosingQuote &&
          isText &&
          count > 0 &&
          kinds[count - 1] === "text" &&
          containsCJK(part.text) &&
          containsCJK(texts[count - 1]) &&
          endsWithClosingQuote(texts[count - 1])) ||
        (isText &&
          count > 0 &&
          kinds[count - 1] === "text" &&
          isCjkClosingOrTerminalRun(part.text) &&
          containsCJK(texts[count - 1])) ||
        (isText &&
          count > 0 &&
          kinds[count - 1] === "text" &&
          endsWithMyanmarSectionMark(texts[count - 1]))
      ) {
        texts[count - 1] += part.text;
        isWordLike[count - 1] = isWordLike[count - 1] || part.isWordLike;
      } else if (
        isText &&
        count > 0 &&
        kinds[count - 1] === "text" &&
        part.isWordLike &&
        isArabic(part.text) &&
        isArabicEndingWithColonLike(texts[count - 1])
      ) {
        texts[count - 1] += part.text;
        isWordLike[count - 1] = true;
      } else if (
        (isText &&
          !part.isWordLike &&
          count > 0 &&
          kinds[count - 1] === "text" &&
          part.text.length === 1 &&
          part.text !== "-" &&
          part.text !== "—" &&
          allCharactersEqual(texts[count - 1], part.text)) ||
        (isText &&
          !part.isWordLike &&
          count > 0 &&
          kinds[count - 1] === "text" &&
          (isTerminalPunctuationWithMarks(part.text) ||
            (part.text === "-" && isWordLike[count - 1])))
      ) {
        texts[count - 1] += part.text;
      } else {
        texts[count] = part.text;
        isWordLike[count] = part.isWordLike;
        kinds[count] = part.kind;
        starts[count] = part.start;
        count++;
      }
    }

  for (let index = 1; index < count; index++)
    kinds[index] === "text" &&
      !isWordLike[index] &&
      isPunctuationOnlyRun(texts[index]) &&
      kinds[index - 1] === "text" &&
      ((texts[index - 1] += texts[index]),
      (isWordLike[index - 1] = isWordLike[index - 1] || isWordLike[index]),
      (texts[index] = ""));

  for (let index = count - 2; index >= 0; index--)
    if (
      kinds[index] === "text" &&
      !isWordLike[index] &&
      isLeadingPunctuationRun(texts[index])
    ) {
      let next = index + 1;
      for (; next < count && texts[next] === ""; ) next++;
      next < count &&
        kinds[next] === "text" &&
        ((texts[next] = texts[index] + texts[next]),
        (starts[next] = starts[index]),
        (texts[index] = ""));
    }

  let write = 0;
  for (let index = 0; index < count; index++) {
    const text = texts[index];
    if (text.length !== 0) {
      if (write !== index) {
        texts[write] = text;
        isWordLike[write] = isWordLike[index];
        kinds[write] = kinds[index];
        starts[write] = starts[index];
      }
      write++;
    }
  }
  texts.length = write;
  isWordLike.length = write;
  kinds.length = write;
  starts.length = write;

  const result = reorderCjkTrailingPunctuation(
    mergeWordsWithTrailingPunctuation(
      splitHyphenatedRuns(
        mergeNumericRuns(
          mergeQueryTailSegments(
            mergeUrlSegments(
              mergeGlueSegments({
                len: write,
                texts,
                isWordLike,
                kinds,
                starts,
              }),
            ),
          ),
        ),
      ),
    ),
  );

  for (let index = 0; index < result.len - 1; index++) {
    const split = leadingSpaceWithMarks(result.texts[index]);
    split !== null &&
      ((result.kinds[index] !== "space" &&
        result.kinds[index] !== "preserved-space") ||
        result.kinds[index + 1] !== "text" ||
        !isArabic(result.texts[index + 1]) ||
        ((result.texts[index] = split.space),
        (result.isWordLike[index] = false),
        (result.kinds[index] =
          result.kinds[index] === "preserved-space"
            ? "preserved-space"
            : "space"),
        (result.texts[index + 1] = split.marks + result.texts[index + 1]),
        (result.starts[index + 1] =
          result.starts[index] + split.space.length)));
  }
  return result;
}

// Splits the segmented text into hard-break chunks (one chunk when hard breaks
// are not preserved).
function splitIntoChunks(
  segmented: SegmentedText,
  mode: WhiteSpaceMode,
): TextChunk[] {
  if (segmented.len === 0) return [];
  if (!mode.preserveHardBreaks)
    return [
      {
        startSegmentIndex: 0,
        endSegmentIndex: segmented.len,
        consumedEndSegmentIndex: segmented.len,
      },
    ];
  const chunks: TextChunk[] = [];
  let start = 0;
  for (let index = 0; index < segmented.len; index++)
    segmented.kinds[index] === "hard-break" &&
      (chunks.push({
        startSegmentIndex: start,
        endSegmentIndex: index,
        consumedEndSegmentIndex: index + 1,
      }),
      (start = index + 1));
  start < segmented.len &&
    chunks.push({
      startSegmentIndex: start,
      endSegmentIndex: segmented.len,
      consumedEndSegmentIndex: segmented.len,
    });
  return chunks;
}

// Entry point: normalize, segment and chunk a string for layout.
function analyzeText(
  text: string,
  config: { carryCJKAfterClosingQuote: boolean },
  whiteSpace: string = "normal",
): AnalyzedText {
  const mode = resolveWhiteSpaceMode(whiteSpace);
  const normalized =
    mode.mode === "pre-wrap"
      ? normalizeNewlines(text)
      : collapseWhitespace(text);
  if (normalized.length === 0)
    return {
      normalized,
      chunks: [],
      len: 0,
      texts: [],
      isWordLike: [],
      kinds: [],
      starts: [],
    };
  const segmented = segmentText(normalized, config, mode);
  return {
    normalized,
    chunks: splitIntoChunks(segmented, mode),
    ...segmented,
  };
}

export { analyzeText };
