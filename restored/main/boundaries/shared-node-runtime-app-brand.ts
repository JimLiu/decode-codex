// Restored from ref/.vite/build/src-CoIhwwHr.js
// Runtime app brand and build-flavor helpers.

export const RuntimeAppBrands = {
  Codex: "codex",
  ChatGPT: "chatgpt",
} as const;

export type RuntimeAppBrand =
  (typeof RuntimeAppBrands)[keyof typeof RuntimeAppBrands];

export const BuildFlavors = {
  Dev: "dev",
  Agent: "agent",
  Nightly: "nightly",
  InternalAlpha: "internal-alpha",
  PublicBeta: "public-beta",
  Prod: "prod",
  values: ["dev", "agent", "nightly", "internal-alpha", "public-beta", "prod"],
  help: "dev, agent, nightly, internal-alpha, public-beta, prod",
  isValid(value: unknown): value is string {
    return typeof value === "string" && this.values.includes(value);
  },
  parse(value: string | undefined | null): string | null {
    const trimmed = value?.trim();
    return trimmed && this.isValid(trimmed) ? trimmed : null;
  },
  isInternal(value: string): boolean {
    return ["dev", "agent", "nightly", "internal-alpha"].includes(value);
  },
  allowDebugMenu(value: string): boolean {
    return this.isInternal(value);
  },
  supportsReactScan(value: string): boolean {
    return value === "dev" || value === "agent" || value === "nightly";
  },
};

export function getRuntimeAppBrandDisplayName(
  brand: unknown,
): string | undefined {
  switch (brand) {
    case RuntimeAppBrands.Codex:
      return "Codex";
    case RuntimeAppBrands.ChatGPT:
      return "ChatGPT";
    default:
      return undefined;
  }
}

export function parseRuntimeAppBrand(
  value: string | undefined,
): RuntimeAppBrand | null {
  const trimmed = value?.trim();
  return trimmed === RuntimeAppBrands.Codex ||
    trimmed === RuntimeAppBrands.ChatGPT
    ? trimmed
    : null;
}

function buildFlavorSuffix(buildFlavor: string): string | null {
  switch (buildFlavor) {
    case BuildFlavors.Dev:
      return "Dev";
    case BuildFlavors.Agent:
      return "Agent";
    case BuildFlavors.Nightly:
      return "Nightly";
    case BuildFlavors.InternalAlpha:
      return "Alpha";
    case BuildFlavors.PublicBeta:
      return "Beta";
    case BuildFlavors.Prod:
      return null;
    default:
      return null;
  }
}

export function formatRuntimeAppName(
  buildFlavor: string,
  brand: RuntimeAppBrand = RuntimeAppBrands.Codex,
): string {
  const suffix = buildFlavorSuffix(buildFlavor);
  const displayName = getRuntimeAppBrandDisplayName(brand) ?? "Codex";
  return suffix == null ? displayName : `${displayName} (${suffix})`;
}
