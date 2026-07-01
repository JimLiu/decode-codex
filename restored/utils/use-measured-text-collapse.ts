// Restored from ref/webview/assets/use-measured-text-collapse-BhNFLYvW.js
// use-measured-text-collapse-BhNFLYvW chunk restored from the Codex webview bundle.
import React from "react";
import { useResizeObserverRef } from "../utils/use-resize-observer";
type TextCollapseState = "uncollapsible" | "expanded" | "collapsed";
type TextMeasurement = {
  collapsedHeightPx: number | null;
  contentHeightPx: number;
  element: HTMLElement;
  fallbackFontSizePx: number;
  font: string;
  lineHeightPx: number;
  maxWidthPx: number;
};
type TextMeasurementOptions = {
  collapsedLineCount?: number | null;
  fallbackFontSizePx: number;
};
type MeasuredTextCollapseOptions = TextMeasurementOptions & {
  text: string;
};
const DEFAULT_LINE_HEIGHT_MULTIPLIER = 1.5;
const COLLAPSE_HEIGHT_TOLERANCE_PX = 1;

function initMeasuredTextCollapseRuntimeChunk(): void {}

function useMeasuredTextMeasurement({
  collapsedLineCount,
  fallbackFontSizePx,
}: TextMeasurementOptions) {
  const [textMeasurement, setTextMeasurement] =
    React.useState<TextMeasurement | null>(null);
  const updateMeasurement = React.useCallback(
    (element: HTMLElement, widthPx: number) => {
      setTextMeasurement((previousMeasurement) => {
        const nextMeasurement = measureTextElement(
          element,
          widthPx,
          collapsedLineCount,
          fallbackFontSizePx,
        );
        return areTextMeasurementsEqual(previousMeasurement, nextMeasurement)
          ? previousMeasurement
          : nextMeasurement;
      });
    },
    [collapsedLineCount, fallbackFontSizePx],
  );
  const resizeObserverRef = useResizeObserverRef((entry, element) => {
    updateMeasurement(element as HTMLElement, entry.contentRect.width);
  });
  const setTextMeasurementRef = React.useCallback(
    (element: HTMLElement | null) => {
      resizeObserverRef(element);
      if (element != null) updateMeasurement(element, element.clientWidth);
    },
    [resizeObserverRef, updateMeasurement],
  );
  return {
    setTextMeasurementRef,
    textMeasurement,
  };
}
function useMeasuredTextCollapse({
  text,
  collapsedLineCount,
  fallbackFontSizePx,
}: MeasuredTextCollapseOptions) {
  const [expandedText, setExpandedText] = React.useState<string | null>(null);
  const { setTextMeasurementRef, textMeasurement } = useMeasuredTextMeasurement(
    {
      collapsedLineCount,
      fallbackFontSizePx,
    },
  );
  const collapseState: TextCollapseState =
    textMeasurement == null ||
    textMeasurement.collapsedHeightPx == null ||
    textMeasurement.contentHeightPx <=
      textMeasurement.collapsedHeightPx + COLLAPSE_HEIGHT_TOLERANCE_PX
      ? "uncollapsible"
      : expandedText === text
        ? "expanded"
        : "collapsed";
  const handleToggleExpansion = React.useCallback(() => {
    setExpandedText((currentText) => (currentText === text ? null : text));
  }, [text]);
  return {
    setTextContentMeasurementRef: setTextMeasurementRef,
    collapseState,
    handleToggleExpansion,
  };
}
function measureTextElement(
  element: HTMLElement,
  widthPx: number,
  collapsedLineCount: number | null | undefined,
  fallbackFontSizePx: number,
): TextMeasurement | null {
  const maxWidthPx = Math.floor(widthPx);
  if (maxWidthPx <= 0) return null;
  const computedStyle = window.getComputedStyle(element);
  const fontSizePx = getFontSizePx(computedStyle, fallbackFontSizePx);
  const lineHeightPx = getLineHeightPx(computedStyle, fontSizePx);
  return {
    collapsedHeightPx:
      collapsedLineCount == null
        ? null
        : Math.ceil(lineHeightPx * collapsedLineCount),
    contentHeightPx: Math.ceil(element.scrollHeight),
    element,
    fallbackFontSizePx,
    font: getCanvasFont(computedStyle, fontSizePx),
    lineHeightPx,
    maxWidthPx,
  };
}
function areTextMeasurementsEqual(
  previousMeasurement: TextMeasurement | null,
  nextMeasurement: TextMeasurement | null,
) {
  return (
    previousMeasurement?.collapsedHeightPx ===
      nextMeasurement?.collapsedHeightPx &&
    previousMeasurement?.contentHeightPx === nextMeasurement?.contentHeightPx &&
    previousMeasurement?.font === nextMeasurement?.font &&
    previousMeasurement?.lineHeightPx === nextMeasurement?.lineHeightPx &&
    previousMeasurement?.maxWidthPx === nextMeasurement?.maxWidthPx &&
    previousMeasurement?.element === nextMeasurement?.element &&
    previousMeasurement?.fallbackFontSizePx ===
      nextMeasurement?.fallbackFontSizePx
  );
}
function getCanvasFont(computedStyle: CSSStyleDeclaration, fontSizePx: number) {
  return [
    computedStyle.fontStyle || "normal",
    computedStyle.fontVariant || "normal",
    computedStyle.fontWeight || "400",
    `${fontSizePx}px`,
    computedStyle.fontFamily || "sans-serif",
  ].join(" ");
}
function getFontSizePx(
  computedStyle: CSSStyleDeclaration,
  fallbackFontSizePx: number,
) {
  const fontSizePx = Number.parseFloat(computedStyle.fontSize);
  return Number.isFinite(fontSizePx) ? fontSizePx : fallbackFontSizePx;
}
function getLineHeightPx(
  computedStyle: CSSStyleDeclaration,
  fontSizePx: number,
) {
  const lineHeightPx = Number.parseFloat(computedStyle.lineHeight);
  return Number.isFinite(lineHeightPx)
    ? lineHeightPx
    : fontSizePx * DEFAULT_LINE_HEIGHT_MULTIPLIER;
}
export {
  initMeasuredTextCollapseRuntimeChunk,
  useMeasuredTextMeasurement,
  useMeasuredTextCollapse,
};
