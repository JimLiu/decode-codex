// Restored from ref/webview/assets/use-ascii-engine-BJ-AIEdX.js
// use-ascii-engine-BJ-AIEdX chunk restored from the Codex webview bundle.
import type React from "react";
export type AsciiEngineMode = "noise" | "video" | "composite";
export type AsciiCanvasProps = {
  lines: string[];
  columns: number;
  rows: number;
  scale?: number;
  foregroundColor?: string;
  backgroundColor?: string;
  autoCover?: boolean;
};
export type UseAsciiEngineOptions = {
  initialMode?: AsciiEngineMode;
  initialColumns?: number;
  initialRows?: number;
  preferredVideoKeyword?: string;
};
export type UseAsciiEngineResult = {
  mode: AsciiEngineMode;
  setMode: React.Dispatch<React.SetStateAction<AsciiEngineMode>>;
  asciiChars: string;
  setAsciiChars: React.Dispatch<React.SetStateAction<string>>;
  columns: number;
  setColumns: React.Dispatch<React.SetStateAction<number>>;
  rows: number;
  setRows: React.Dispatch<React.SetStateAction<number>>;
  lines: string[];
  showControls: boolean;
  setShowControls: React.Dispatch<React.SetStateAction<boolean>>;
};
export const DEFAULT_ASCII_CHARS = "@%#*+=-:. ";
export const DEFAULT_COLUMNS = 50;
export const DEFAULT_ROWS = 30;
export const DEFAULT_FRAME_RATE = 20;
export const DEFAULT_FONT_SIZE = 12;
export const DEFAULT_FONT_FAMILY = "monospace";
export const ASCII_PALETTES = [
  "█▓▒░ ",
  "■□▲△●○◆◇",
  "⎺⎻⎼⎽⎾⎿",
  "o p e n a i ",
  "█▉▊▋▌▍▎▏",
  "█▓▒░-=:. ",
  "█▇▆▅▄▃▂▁",
  "C O D E X",
  "█■▲●◉○. ",
  "WMBRXVIl. ",
  "█#A*-. ",
  "●◉○· ",
] as const;
