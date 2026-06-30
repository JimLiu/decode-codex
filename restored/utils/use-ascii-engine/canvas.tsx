// Restored from ref/webview/assets/use-ascii-engine-BJ-AIEdX.js
// use-ascii-engine-BJ-AIEdX chunk restored from the Codex webview bundle.
import React from "react";
import type { AsciiCanvasProps } from "./types";
import { DEFAULT_FONT_FAMILY, DEFAULT_FONT_SIZE } from "./types";
function noop() {}
function resolveCssColor(
  host: HTMLElement | null,
  value: string | undefined,
  property: "backgroundColor" | "color",
) {
  const resolveVariable = (cssValue: string) => {
    try {
      const probe = document.createElement("div");
      probe.style.display = "none";
      probe.style[property] = cssValue;
      document.body.appendChild(probe);
      const resolved = getComputedStyle(probe)[property] || "";
      probe.remove();
      return resolved;
    } catch {
      return "";
    }
  };
  if (value && value !== "") {
    if (value.trim().startsWith("var(")) {
      const resolved = resolveVariable(value);
      if (resolved) return resolved;
    }
    return value;
  }
  if (!host) return "";
  const hostStyle = getComputedStyle(host);
  let resolved =
    property === "color" ? hostStyle.color : hostStyle.backgroundColor;
  if (
    (resolved === "rgba(0, 0, 0, 0)" || resolved === "transparent") &&
    host.parentElement
  ) {
    const parentStyle = getComputedStyle(host.parentElement);
    resolved =
      property === "color" ? parentStyle.color : parentStyle.backgroundColor;
  }
  return resolved;
}
function measureCharacterCell(
  context: CanvasRenderingContext2D,
  fontSize: number,
  fontFamily: string,
) {
  context.font = `${fontSize}px ${fontFamily}`;
  const metrics = context.measureText("M");
  const width = Math.max(1, Math.round(metrics.width));
  const height = Math.max(
    1,
    Math.round(
      (metrics.actualBoundingBoxAscent || fontSize) +
        (metrics.actualBoundingBoxDescent || Math.ceil(fontSize * 0.3)),
    ),
  );
  return {
    height,
    width,
  };
}
function getCanvasScale({
  autoCover,
  columns,
  rows,
  characterHeight,
  characterWidth,
  wrapper,
}: {
  autoCover: boolean;
  columns: number;
  rows: number;
  characterHeight: number;
  characterWidth: number;
  wrapper: HTMLElement | null;
}) {
  if (!autoCover || !wrapper?.parentElement) return 1;
  try {
    const parentBounds = wrapper.parentElement.getBoundingClientRect();
    const unscaledWidth = Math.max(1, columns * characterWidth);
    const unscaledHeight = Math.max(1, rows * characterHeight);
    const coverScale = Math.max(
      parentBounds.width / unscaledWidth,
      parentBounds.height / unscaledHeight,
    );
    return Number.isFinite(coverScale) && coverScale > 0
      ? coverScale * 1.02
      : 1;
  } catch {
    return 1;
  }
}
function scheduleCanvasRedraw(redraw: () => void) {
  requestAnimationFrame(() => {
    requestAnimationFrame(redraw);
  });
}
export function AsciiCanvas({
  lines,
  columns,
  rows,
  scale = 0.75,
  foregroundColor = "var(--color-token-checkbox-border)",
  backgroundColor = "var(--color-token-side-bar-background)",
  autoCover = false,
}: AsciiCanvasProps) {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const wrapperRef = React.useRef<HTMLDivElement | null>(null);
  const lastLinesKeyRef = React.useRef("");
  const latestLinesRef = React.useRef(lines);
  const characterWidthRef = React.useRef(8);
  const characterHeightRef = React.useRef(16);
  const fontSizeRef = React.useRef(DEFAULT_FONT_SIZE);
  const fontFamilyRef = React.useRef(DEFAULT_FONT_FAMILY);
  const redrawRef = React.useRef(noop);
  const drawFrame = React.useCallback(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;
    canvas.style.borderRadius = autoCover ? "0px" : "10px";
    try {
      context.setTransform(1, 0, 0, 1, 0, 0);
    } catch {}
    const characterCell = measureCharacterCell(
      context,
      fontSizeRef.current,
      fontFamilyRef.current,
    );
    characterWidthRef.current = characterCell.width;
    characterHeightRef.current = characterCell.height;
    const coverScale = getCanvasScale({
      autoCover,
      columns,
      rows,
      characterHeight: characterCell.height,
      characterWidth: characterCell.width,
      wrapper,
    });
    const effectiveScale = autoCover ? coverScale : scale;
    const pixelRatio = Math.max(1, Math.floor(window.devicePixelRatio || 1));
    const cssWidth = Math.max(
      1,
      columns * characterCell.width * effectiveScale,
    );
    const cssHeight = Math.max(1, rows * characterCell.height * effectiveScale);
    const bitmapWidth = Math.max(1, Math.round(cssWidth * pixelRatio));
    const bitmapHeight = Math.max(1, Math.round(cssHeight * pixelRatio));
    if (canvas.width !== bitmapWidth || canvas.height !== bitmapHeight) {
      canvas.width = bitmapWidth;
      canvas.height = bitmapHeight;
    }
    canvas.style.width = `${cssWidth}px`;
    canvas.style.height = `${cssHeight}px`;
    if (wrapper) {
      wrapper.style.width = `${cssWidth}px`;
      wrapper.style.height = `${cssHeight}px`;
    }
    context.setTransform(
      pixelRatio * effectiveScale,
      0,
      0,
      pixelRatio * effectiveScale,
      0,
      0,
    );
    context.imageSmoothingEnabled = false;
    const drawingWidth = canvas.width / (pixelRatio * effectiveScale);
    const drawingHeight = canvas.height / (pixelRatio * effectiveScale);
    const background = resolveCssColor(
      wrapper,
      backgroundColor,
      "backgroundColor",
    );
    const foreground = resolveCssColor(wrapper, foregroundColor, "color");
    context.save();
    if (background) {
      context.fillStyle = background;
      context.fillRect(0, 0, drawingWidth, drawingHeight);
    }
    if (foreground) context.fillStyle = foreground;
    context.textBaseline = "top";
    context.font = `${fontSizeRef.current}px ${fontFamilyRef.current}`;
    const visibleRows = Math.min(rows, latestLinesRef.current.length);
    for (let rowIndex = 0; rowIndex < visibleRows; rowIndex += 1) {
      const line = latestLinesRef.current[rowIndex] ?? "";
      if (line) context.fillText(line, 0, rowIndex * characterCell.height);
    }
    context.restore();
  }, [autoCover, backgroundColor, columns, foregroundColor, rows, scale]);
  React.useEffect(() => {
    redrawRef.current = drawFrame;
  }, [drawFrame]);
  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        if (document?.fonts?.ready?.then) await document.fonts.ready;
      } catch {}
      if (!cancelled) redrawRef.current();
    })();
    return () => {
      cancelled = true;
    };
  }, []);
  React.useEffect(() => {
    latestLinesRef.current = lines;
    const linesKey = lines.join("\n");
    if (linesKey !== lastLinesKeyRef.current) {
      lastLinesKeyRef.current = linesKey;
      scheduleCanvasRedraw(() => redrawRef.current());
    }
  }, [lines]);
  React.useEffect(() => {
    scheduleCanvasRedraw(() => redrawRef.current());
  }, [backgroundColor, columns, foregroundColor, rows]);
  React.useEffect(() => {
    if (!autoCover) return;
    const handleResize = () => scheduleCanvasRedraw(() => redrawRef.current());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [autoCover]);
  const wrapperStyle = autoCover
    ? ({
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        transformOrigin: "center",
        display: "block",
      } satisfies React.CSSProperties)
    : ({
        transform: `scale(${scale})`,
        transformOrigin: "center",
        display: "inline-block",
      } satisfies React.CSSProperties);
  return (
    <div ref={wrapperRef} style={wrapperStyle}>
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          imageRendering: "crisp-edges",
          borderRadius: autoCover ? 0 : 10,
        }}
      />
    </div>
  );
}
