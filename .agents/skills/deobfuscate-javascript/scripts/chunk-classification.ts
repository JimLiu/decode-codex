export type ChunkClassificationHint = {
  restored?: string;
  vendor?: string;
  note?: string;
  boundary?: boolean;
  dependencyBoundary?: string;
};

/**
 * JavaScript built-in globals a generated name must not collide with. Used both
 * to keep the renamer from emitting `_Array`/`__Array` (a stem that pascal-cases
 * onto a global gets underscore-prefixed by the collision-safe applier) and to
 * let the quality gate flag any `_Global` that still slipped through.
 */
export const JS_GLOBALS: ReadonlySet<string> = new Set([
  "Array",
  "Object",
  "String",
  "Number",
  "Boolean",
  "Symbol",
  "BigInt",
  "Function",
  "Promise",
  "Map",
  "Set",
  "WeakMap",
  "WeakSet",
  "Date",
  "RegExp",
  "Error",
  "TypeError",
  "RangeError",
  "JSON",
  "Math",
  "Reflect",
  "Proxy",
  "Iterator",
  "ArrayBuffer",
  "DataView",
  "Int8Array",
  "Uint8Array",
  "Float32Array",
  "Float64Array",
]);

export type VendorDataMatch = {
  /** npm package the bundled data belongs to. */
  package: string;
  /** Bare import specifier consumers should point at instead of the hash chunk. */
  specifier: string;
  /** Why we matched — for manifest notes / debugging. */
  reason: "shiki-grammar" | "shiki-theme" | "data-lib";
};

// Standalone data libraries that ship as one big single-export chunk. Keep this
// conservative — only well-known, unambiguously-vendored stems belong here.
const DATA_LIB_STEMS: Record<string, string> = {
  "3dmol": "3dmol",
  "3Dmol": "3dmol",
};

// These chunks ship as `JSON.parse(`{"scopeName":...}`)`, so keys are quoted
// (`"scopeName":`). Match the JSON-key form as well as a bare object-literal key
// (`scopeName:`) so both bundler shapes are recognised.
const SHIKI_GRAMMAR_SCOPE_RE = /(?:"scopeName"|\bscopeName)\s*:/;
const SHIKI_GRAMMAR_BODY_RE =
  /(?:"(?:patterns|repository)"|\b(?:patterns|repository))\s*:/;
const SHIKI_THEME_TOKENCOLORS_RE = /(?:"tokenColors"|\btokenColors)\s*:/;
const SHIKI_THEME_TYPE_RE = /(?:"type"|\btype)\s*:\s*["'](?:light|dark)["']/;
const SHIKI_THEME_COLORS_RE = /(?:"colors"|\bcolors)\s*:/;

/**
 * Recognise a chunk whose *content* is bundled vendor data rather than app code:
 * a Shiki TextMate language grammar, a Shiki/VSCode color theme, or a known
 * standalone data library. These are deliberately NOT restored as app code —
 * `build-import-graph.ts` marks them terminal `npm-leaf` and consumers import the
 * bare specifier (`@shikijs/langs/<id>`, `@shikijs/themes/<id>`, `3dmol`).
 *
 * `source` is the chunk's (minified) body. The grammar/theme fingerprints survive
 * minification because they are string object keys. The id half of the specifier
 * comes from the chunk stem (`rust-A1b2c3` → `rust`), which the bundler names
 * after the source module.
 */
export function classifyVendorDataChunk(
  basename: string,
  source: string,
): VendorDataMatch | null {
  if (isLikelyAppChunk(basename)) return null;

  const stem = stripHashSuffix(basename);
  const libPackage = DATA_LIB_STEMS[stem] ?? DATA_LIB_STEMS[stem.toLowerCase()];
  if (libPackage) {
    return { package: libPackage, specifier: libPackage, reason: "data-lib" };
  }
  if (
    SHIKI_GRAMMAR_SCOPE_RE.test(source) &&
    SHIKI_GRAMMAR_BODY_RE.test(source)
  ) {
    return {
      package: "@shikijs/langs",
      specifier: `@shikijs/langs/${stem}`,
      reason: "shiki-grammar",
    };
  }
  if (
    SHIKI_THEME_TOKENCOLORS_RE.test(source) ||
    (SHIKI_THEME_COLORS_RE.test(source) && SHIKI_THEME_TYPE_RE.test(source))
  ) {
    return {
      package: "@shikijs/themes",
      specifier: `@shikijs/themes/${stem}`,
      reason: "shiki-theme",
    };
  }
  return null;
}

function stripHashSuffix(basename: string): string {
  // Anchor to Vite/Rolldown's 8-char hash first so multi-word stems survive
  // (`github-dark-Gg77Hh88` → `github-dark`); fall back to 10–12-char hashes.
  const stripped = basename.replace(/-[A-Za-z0-9_-]{8}$/u, "");
  if (stripped !== basename) return stripped;
  return basename.replace(/-[A-Za-z0-9_-]{10,12}$/u, "");
}

const APP_PREFIXES = [
  "app-initial",
  "app-main",
  "app-shell",
  "app-prefetch",
  "app-preloader",
  "app-root",
  "app-server",
  "appgen",
  "automation",
  "automations",
  "browser-sidebar",
  "browser-use",
  "composer",
  "conversation",
  "local-conversation",
  "mcp",
  "native-app",
  "native-apps",
  "pets-settings",
  "plugin",
  "plugins",
  "project",
  "projects",
  "review",
  "settings",
  "thread",
];

const APP_SEGMENT_RE = /(?:^|[-_~])(?:page|panel|view|dialog)(?:[-_~]|$)/;

const VENDOR_PREFIXES = ["app-scope", "src", "statsig", "vscode-api", "zod"];

/**
 * Heuristic: does this chunk basename look like project/app code that deep/full
 * restoration must recursively restore rather than face as a dependency wall?
 *
 * Keep this conservative and product-biased. The explicit vendor prefixes below
 * are excluded first so runtime chunks such as `app-scope-*` do not get caught by
 * broad `app-*` matching.
 */
export function isLikelyAppChunk(basename: string): boolean {
  const normalized = basename.toLowerCase();
  if (VENDOR_PREFIXES.some((prefix) => hasChunkPrefix(normalized, prefix))) {
    return false;
  }
  return (
    APP_PREFIXES.some((prefix) => hasChunkPrefix(normalized, prefix)) ||
    APP_SEGMENT_RE.test(normalized)
  );
}

export function isKnownTerminalBoundaryChunk(
  basename: string,
  hint: ChunkClassificationHint = {},
): boolean {
  const normalized = basename.toLowerCase();
  const vendor = (hint.vendor ?? "").toLowerCase();
  const note = (hint.note ?? "").toLowerCase();
  const restored = (hint.restored ?? "").toLowerCase();
  const boundary = (hint.dependencyBoundary ?? "").toLowerCase();
  const text = `${vendor} ${note} ${restored} ${boundary}`;

  if (hasChunkPrefix(normalized, "app-scope")) return true;
  if (hasChunkPrefix(normalized, "src")) return true;
  if (hasChunkPrefix(normalized, "statsig")) return true;
  if (hasChunkPrefix(normalized, "vscode-api")) return true;
  if (text.includes("@pierre/")) return true;
  if (text.includes("codemirror")) return true;
  if (text.includes("prosemirror")) return true;
  if (text.includes("react-dom runtime")) return true;
  if (text.includes("rrule")) return true;
  if (text.includes("xterm")) return true;
  if (text.includes("zod")) return true;
  if (text.includes("statsig")) return true;
  if (text.includes("vscode") || text.includes("webview bridge")) return true;
  if (text.includes("dotlottie") || text.includes("@lottiefiles")) return true;
  if (restored.endsWith("assets/browser.ts") && vendor === "npm") return true;
  if (restored.includes("processbrowsershim")) return true;
  if (note.includes("bundler runtime") || note.includes("vite bundler")) {
    return true;
  }

  return false;
}

function hasChunkPrefix(basename: string, prefix: string): boolean {
  return (
    basename === prefix ||
    basename.startsWith(`${prefix}-`) ||
    basename.startsWith(`${prefix}~`)
  );
}

/**
 * A boundary chunk is one of two kinds:
 *   vendor-npm     — a recognised third-party package. The deliverable is a thin
 *                    bare re-export shim (`make-facade --reexport <specifier>`);
 *                    it resolves to real `@types` and is DONE.
 *   vendor-runtime — genuine app/host runtime (app-scope, vscode bridge, rpc…).
 *                    Stays a typed facade or an opt-in ref-passthrough until it is
 *                    deep-restored OUT of boundaries/.
 *
 * The `vendor` field recorded in IMPORT_MAP is the primary signal: anything other
 * than the literal "runtime" marker names a real npm family.
 */
export type BoundaryKind = "vendor-npm" | "vendor-runtime";

/**
 * Vendor 'family' (as recorded in IMPORT_MAP `vendor`) → the npm specifier a
 * re-export shim should point at. Identity where the family already is the
 * package; a representative entry-point where it is a family the agent confirms.
 * Treat as a hint — verify the bundled chunk is stock (not a Codex fork) and the
 * specifier resolves before relying on it.
 */
export const VENDOR_NPM_SPECIFIERS: Record<string, string> = {
  lodash: "lodash",
  "react-router": "react-router",
  "react-colorful": "react-colorful",
  "react-is": "react-is",
  "use-sync-external-store": "use-sync-external-store/shim/with-selector",
  formatjs: "react-intl",
  "react-intl": "react-intl",
  "mdast-util": "mdast-util-to-markdown",
  mdast: "mdast-util-to-markdown",
  "@pierre/diffs": "@pierre/diffs",
  zod: "zod",
  "framer-motion": "framer-motion",
  motion: "framer-motion",
  jotai: "jotai",
  "dnd-kit": "@dnd-kit/core",
  "@dnd-kit/core": "@dnd-kit/core",
  "@dnd-kit/sortable": "@dnd-kit/sortable",
  "@dnd-kit/utilities": "@dnd-kit/utilities",
  analytics: "@segment/analytics-next",
  segment: "@segment/analytics-next",
  // @radix-ui resolves per-primitive (@radix-ui/react-menu, …) — agent picks.
};

export function classifyBoundary(
  basename: string,
  hint: ChunkClassificationHint = {},
): { kind: BoundaryKind; specifier?: string } {
  const vendor = (hint.vendor ?? "").toLowerCase().trim();
  if (vendor && vendor !== "runtime") {
    return { kind: "vendor-npm", specifier: VENDOR_NPM_SPECIFIERS[vendor] };
  }
  const text =
    `${hint.note ?? ""} ${hint.restored ?? ""} ${hint.dependencyBoundary ?? ""}`.toLowerCase();
  // Radix primitives are bundled @radix-ui even when no vendor field is set.
  if (/\bradix\b/.test(text) || /radix/.test(basename.toLowerCase())) {
    return { kind: "vendor-npm" };
  }
  return { kind: "vendor-runtime" };
}
