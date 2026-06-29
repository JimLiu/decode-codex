// Restored from ref/webview/assets/plan-pricing-L0fVJY25.js
// Also matches ref/webview/assets/plan-pricing-dtn4oxxh.js.
import { once } from "../runtime/commonjs-interop";

type IntlNumberFormatter = {
  formatNumber(value: number, options: Intl.NumberFormatOptions): string;
  formatNumberToParts(
    value: number,
    options: Intl.NumberFormatOptions,
  ): Intl.NumberFormatPart[];
};

type PlanPriceInput = {
  intl: IntlNumberFormatter;
  amount: number | null;
  currencyCode: string;
  minorUnitExponent?: number | null;
};

export const initPlanPricingChunk = once(() => {});

export function formatPlanPriceParts({
  intl,
  amount,
  currencyCode,
  minorUnitExponent,
}: PlanPriceInput): {
  currencyCodeLabel: string | null;
  formatted: string;
  parts: Intl.NumberFormatPart[];
} | null {
  if (amount == null) return null;
  let currencyCodeLabel: string | null = currencyCode;
  let parts = intl.formatNumberToParts(
    amount,
    currencyFormatOptions(currencyCode, minorUnitExponent, "symbol"),
  );
  if (
    parts.some(
      ({ type, value }) => type === "currency" && value === currencyCode,
    )
  ) {
    const fallbackParts = intl.formatNumberToParts(
      amount,
      currencyFormatOptions(currencyCode, minorUnitExponent),
    );
    if (
      fallbackParts.some(
        ({ type, value }) => type === "currency" && value !== currencyCode,
      )
    ) {
      parts = fallbackParts;
    } else {
      currencyCodeLabel = null;
    }
  }
  return {
    currencyCodeLabel,
    formatted: parts.map(({ value }) => value).join(""),
    parts,
  };
}

export function formatPlanPrice({
  intl,
  amount,
  currencyCode,
  minorUnitExponent,
}: PlanPriceInput): string | null {
  return amount == null
    ? null
    : intl.formatNumber(
        amount,
        currencyFormatOptions(currencyCode, minorUnitExponent),
      );
}

function currencyFormatOptions(
  currency: string,
  minorUnitExponent?: number | null,
  currencyDisplay: "narrowSymbol" | "symbol" = "narrowSymbol",
): Intl.NumberFormatOptions {
  return {
    style: "currency",
    currency,
    currencyDisplay,
    trailingZeroDisplay: "stripIfInteger",
    minimumFractionDigits: minorUnitExponent ?? undefined,
    maximumFractionDigits: minorUnitExponent ?? undefined,
  };
}
