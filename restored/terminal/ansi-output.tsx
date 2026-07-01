// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Renders a string containing ANSI escape codes as styled <code> output.
import anser from "anser";
import clsx from "clsx";
import type { CSSProperties, ReactNode } from "react";

interface AnsiOutputProps {
  children: string;
  className?: string;
}

interface AnsiSegment {
  content: string;
  fg: string | null;
  bg: string | null;
  decoration: string | null;
}

const BACKSPACE_PATTERN = new RegExp("[^\\n]\b", "gm");

function stripBackspaces(text: string): string {
  let previous = text;
  let next = previous;
  do {
    previous = next;
    next = previous.replace(BACKSPACE_PATTERN, "");
  } while (next.length < previous.length);
  return previous;
}

function normalizeCarriageReturns(text: string): string {
  if (!text) return "";
  if (!/\r/.test(text)) return text;
  let normalized = text.replace(/\r+\n/gm, "\n");
  while (/\r./.test(normalized)) {
    normalized = normalized.replace(
      /^([^\r\n]*)\r+([^\r\n]+)/gm,
      (_match, head: string, tail: string) => tail + head.slice(tail.length),
    );
  }
  return normalized;
}

function ansiDecorationStyle(entry: AnsiSegment): CSSProperties | undefined {
  const decorations = entry.decoration == null ? [] : [entry.decoration];
  if (decorations.length === 0) return undefined;
  const style: CSSProperties = {};
  const textDecorationLines: string[] = [];
  if (decorations.includes("bold")) style.fontWeight = "bold";
  if (decorations.includes("dim")) style.opacity = "0.5";
  if (decorations.includes("italic")) style.fontStyle = "italic";
  if (decorations.includes("hidden")) style.visibility = "hidden";
  if (decorations.includes("underline")) textDecorationLines.push("underline");
  if (decorations.includes("strikethrough"))
    textDecorationLines.push("line-through");
  if (textDecorationLines.length > 0)
    style.textDecorationLine = textDecorationLines.join(" ");
  return style;
}

function renderAnsiSegment(entry: AnsiSegment, index: number): ReactNode {
  return (
    <span
      key={`${index}-${entry.content}`}
      className={clsx(
        entry.fg != null && `${entry.fg}-fg`,
        entry.bg != null && `${entry.bg}-bg`,
      )}
      style={ansiDecorationStyle(entry)}
    >
      {entry.content}
    </span>
  );
}

export function AnsiOutput({ children, className }: AnsiOutputProps) {
  const segments = anser.ansiToJson(
    normalizeCarriageReturns(stripBackspaces(children)),
    {
      json: true,
      remove_empty: true,
      use_classes: true,
    },
  );
  return <code className={className}>{segments.map(renderAnsiSegment)}</code>;
}

export function initAnsiOutputChunk() {}
