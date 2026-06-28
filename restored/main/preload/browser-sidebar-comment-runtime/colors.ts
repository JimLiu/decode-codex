// Restored from ref/.vite/build/comment-preload.js
// CSS color normalization helpers for browser sidebar element metadata.

import { clampNumber } from "./geometry";

type BrowserSidebarRgbColor = {
  red: number;
  green: number;
  blue: number;
  alpha: number | null;
};

export function normalizeCssColorValue(colorValue: string): string {
  const trimmedColor = colorValue.trim();
  const normalizedHexColor = normalizeHexColor(trimmedColor);
  if (normalizedHexColor != null) return normalizedHexColor;

  const rgbColor = parseCssRgbColor(trimmedColor);
  return rgbColor == null
    ? trimmedColor
    : `#${colorByteToHex(rgbColor.red)}${colorByteToHex(
        rgbColor.green,
      )}${colorByteToHex(rgbColor.blue)}${
        rgbColor.alpha == null ? "" : colorByteToHex(rgbColor.alpha)
      }`;
}

function normalizeHexColor(colorValue: string): string | null {
  const hexBody = colorValue.match(
    /^#([0-9a-f]{3}|[0-9a-f]{4}|[0-9a-f]{6}|[0-9a-f]{8})$/i,
  )?.[1];
  if (hexBody == null) return null;
  return hexBody.length === 3 || hexBody.length === 4
    ? `#${Array.from(hexBody)
        .map((hexDigit) => hexDigit + hexDigit)
        .join("")
        .toUpperCase()}`
    : `#${hexBody.toUpperCase()}`;
}

function parseCssRgbColor(colorValue: string): BrowserSidebarRgbColor | null {
  const colorBody = colorValue.match(/^rgba?\((.*)\)$/i)?.[1];
  if (colorBody == null) return null;

  const [rgbBody, slashAlpha] = colorBody
    .split("/")
    .map((colorPart) => colorPart.trim());
  const rgbParts = rgbBody.includes(",")
    ? rgbBody.split(",").map((colorPart) => colorPart.trim())
    : rgbBody.split(/\s+/);
  const alphaPart = slashAlpha ?? rgbParts[3];
  const red = Number.parseFloat(rgbParts[0] ?? "");
  const green = Number.parseFloat(rgbParts[1] ?? "");
  const blue = Number.parseFloat(rgbParts[2] ?? "");

  return [red, green, blue].some(Number.isNaN)
    ? null
    : {
        alpha: alphaPart == null ? null : parseCssAlphaChannel(alphaPart),
        blue,
        green,
        red,
      };
}

function parseCssAlphaChannel(alphaPart: string): number {
  return alphaPart.endsWith("%")
    ? (Number.parseFloat(alphaPart) / 100) * 255
    : Number.parseFloat(alphaPart) * 255;
}

function colorByteToHex(colorByte: number): string {
  return Math.round(clampNumber(colorByte, 0, 255))
    .toString(16)
    .padStart(2, "0")
    .toUpperCase();
}
