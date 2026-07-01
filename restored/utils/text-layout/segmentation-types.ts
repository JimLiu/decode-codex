// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Shared types for the text-layout segmentation and line-walking pipeline.

export type SegmentKind =
  | "text"
  | "space"
  | "preserved-space"
  | "tab"
  | "hard-break"
  | "glue"
  | "zero-width-break"
  | "soft-hyphen";

export interface SegmentedText {
  len: number;
  texts: string[];
  isWordLike: boolean[];
  kinds: SegmentKind[];
  starts: number[];
}

export interface WhiteSpaceMode {
  mode: string;
  preserveOrdinarySpaces: boolean;
  preserveHardBreaks: boolean;
}

export interface AnalyzedText extends SegmentedText {
  normalized: string;
  chunks: TextChunk[];
}

export interface TextChunk {
  startSegmentIndex: number;
  endSegmentIndex: number;
  consumedEndSegmentIndex: number;
}
