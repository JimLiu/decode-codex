import * as fs from "node:fs";
import * as path from "node:path";
import { parseArgs } from "node:util";
import babelTraverse from "@babel/traverse";
import * as t from "@babel/types";
import { extractSymbols, parseSource, type SymbolEntry } from "./extract.ts";
import {
  classifyBoundary,
  isKnownTerminalBoundaryChunk,
  isLikelyAppChunk,
  JS_GLOBALS,
} from "./chunk-classification.ts";
import { formatPath } from "./format.ts";

const traverse = ((
  babelTraverse as unknown as { default?: typeof babelTraverse }
).default ?? babelTraverse) as typeof babelTraverse;

const SHORT_ALLOWLIST = new Set([
  "as",
  "at",
  "be",
  "bg",
  "by",
  "do",
  "el",
  "eq", // lodash canonical comparison helpers
  "fs",
  "gt",
  "id",
  "if",
  "in",
  "is",
  "js",
  "key",
  "lt",
  "no",
  "of",
  "on",
  "or",
  "os",
  "to",
  "tx",
  "ui",
]);

const INTRINSIC_JSX_TAGS = new Set([
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "math",
  "menu",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "search",
  "section",
  "select",
  "slot",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "svg",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "animate",
  "animateMotion",
  "animateTransform",
  "circle",
  "clipPath",
  "defs",
  "desc",
  "ellipse",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "filter",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "marker",
  "mask",
  "metadata",
  "mpath",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "set",
  "stop",
  "switch",
  "symbol",
  "text",
  "textPath",
  "tspan",
  "use",
  "view",
]);

const RESIDUE_PATTERNS: Array<{ code: string; re: RegExp; label: string }> = [
  {
    code: "runtime-shim",
    re: /\btoESModule\b|__toESM|loadJsxRuntime|var\s+jsxRuntime\b/,
    label: "runtime shim",
  },
  {
    code: "jsx-runtime",
    re: /jsx-runtime|react\/jsx-runtime/,
    label: "JSX runtime import/call residue",
  },
  {
    code: "sourcemap",
    re: /sourceMappingURL=/,
    label: "stale sourcemap comment",
  },
  {
    code: "react-compiler-cache",
    re: /\.(?:c|useMemoCache)\(\d+\)|\buseMemoCache\(\d+\)|\bcache\[\d+\]/,
    label: "React Compiler cache residue",
  },
];

const JSX_RUNTIME_SOURCE_RE =
  /(?:^|[/.-])jsx(?:-dev)?-runtime(?:[/.-]|$)|react\/jsx(?:-dev)?-runtime/;
const JSX_FACTORY_NAMES = new Set(["jsx", "jsxs", "jsxDEV"]);

const KNOWN_GLOBAL_IDENTIFIERS = new Set([
  "AbortController",
  "AbortSignal",
  "AggregateError",
  "AnimationEvent",
  "Audio",
  "AudioContext",
  "Array",
  "ArrayBuffer",
  "Atomics",
  "BigInt",
  "BigInt64Array",
  "BigUint64Array",
  "Blob",
  "Boolean",
  "Buffer",
  "Bun",
  "CSS",
  "CSSRule",
  "CSSStyleSheet",
  "ClipboardItem",
  "ClipboardEvent",
  "CompositionEvent",
  "CustomEvent",
  "DOMException",
  "DOMParser",
  "DOMRect",
  "DOMRectReadOnly",
  "DataView",
  "Date",
  "Document",
  "DragEvent",
  "EdgeRuntime",
  "Element",
  "Error",
  "EvalError",
  "Event",
  "EventTarget",
  "File",
  "FileReader",
  "FinalizationRegistry",
  "Float32Array",
  "Float64Array",
  "FocusEvent",
  "FontFace",
  "FormData",
  "HTMLAnchorElement",
  "HTMLButtonElement",
  "HTMLCanvasElement",
  "HTMLDivElement",
  "HTMLElement",
  "HTMLFormElement",
  "HTMLImageElement",
  "HTMLInputElement",
  "HTMLLinkElement",
  "HTMLPreElement",
  "HTMLSelectElement",
  "HTMLSpanElement",
  "HTMLStyleElement",
  "HTMLTemplateElement",
  "HTMLTextAreaElement",
  "Headers",
  "Infinity",
  "Image",
  "InputEvent",
  "Int16Array",
  "Int32Array",
  "Int8Array",
  "IntersectionObserver",
  "Intl",
  "JSON",
  "KeyboardEvent",
  "Map",
  "Math",
  "MediaRecorder",
  "MediaQueryList",
  "MessageChannel",
  "MessageEvent",
  "MouseEvent",
  "MutationObserver",
  "NaN",
  "Node",
  "NodeFilter",
  "NodeList",
  "Number",
  "Notification",
  "Object",
  "OffscreenCanvas",
  "PerformanceEventTiming",
  "PerformanceObserver",
  "PointerEvent",
  "Promise",
  "Proxy",
  "RTCPeerConnection",
  "Range",
  "RangeError",
  "Reflect",
  "RegExp",
  "Request",
  "ResizeObserver",
  "Response",
  "SVGAElement",
  "SVGElement",
  "SVGSVGElement",
  "Set",
  "ShadowRoot",
  "SharedArrayBuffer",
  "String",
  "SubmitEvent",
  "SuppressedError",
  "Symbol",
  "SyntaxError",
  "Text",
  "TextDecoder",
  "TextEncoder",
  "TouchEvent",
  "TransitionEvent",
  "TypeError",
  "URIError",
  "URL",
  "URLSearchParams",
  "Uint16Array",
  "Uint32Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "WeakMap",
  "WeakRef",
  "WeakSet",
  "WebAssembly",
  "WebKitMutationObserver",
  "WebSocket",
  "WheelEvent",
  "Worker",
  "XMLSerializer",
  "XMLHttpRequest",
  "__SENTRY_BROWSER_BUNDLE__",
  "__SENTRY_DEBUG__",
  "__SENTRY_RELEASE__",
  "__SENTRY_TRACING__",
  "__dirname",
  "__filename",
  "addEventListener",
  "alert",
  "arguments",
  "atob",
  "btoa",
  "cancelAnimationFrame",
  "caches",
  "clearInterval",
  "clearTimeout",
  "console",
  "crypto",
  "customElements",
  "decodeURI",
  "decodeURIComponent",
  "define",
  "document",
  "encodeURI",
  "encodeURIComponent",
  "exports",
  "fetch",
  "getComputedStyle",
  "global",
  "globalThis",
  "indexedDB",
  "isFinite",
  "isNaN",
  "localStorage",
  "location",
  "matchMedia",
  "module",
  "navigator",
  "parseFloat",
  "parseInt",
  "performance",
  "process",
  "prompt",
  "queueMicrotask",
  "requestAnimationFrame",
  "require",
  "self",
  "sessionStorage",
  "setImmediate",
  "setInterval",
  "setTimeout",
  "structuredClone",
  "undefined",
  "window",
]);

const CRYPTIC_RE = /^(?:_0x[0-9a-fA-F]+|[a-zA-Z_]\d*|[a-zA-Z]{1,2})$/;
const MECHANICAL_NAME_RE =
  /^(?:(?:ImportedBinding|callbackValue|localValue|elementNode|hookValue|restoredHelper|RestoredComponent|argument|local|param|value|data|arg)\d+|[A-Za-z][A-Za-z0-9]*(?:Param|Value|Data|Arg)\d+|Dist[A-Z])$/;
const MECHANICAL_IMPORT_BINDING_RE =
  /^(?:_{0,3}appServerManager[A-Z]|appServerManager(?:Dollar|Underscore)$|_{0,3}(?:chrome|single|setting)(?:[A-Z][A-Za-z]*|Underscore)$|_{0,3}(?:src|dist|lib|pkg)[A-Z][A-Za-z]*|Dist(?:$|[A-Z])|windowAppAction[A-Z]|windowAppActionUnderscore$)/;
const SOURCE_EXT_RE = /\.[cm]?[jt]sx?$/i;
const SMALL_COHESIVE_MODULE_LINE_LIMIT = 300;

export type QualityGateOptions = {
  maxCrypticParams: number;
  maxCrypticBindings: number;
  maxShortRefCount: number;
  maxFlatLines: number;
  maxFlatExports: number;
  allowFlat: boolean;
  allowMechanicalNames: boolean;
  requireProvenanceHeader: boolean;
  /**
   * Readable-tier promotion: suppress the TypeScript-typing checks
   * (`untyped-component-props`, `untyped-public-function-params`). The readable
   * whole-tree tier still requires semantic names + a clear structure, but may
   * ship untyped output; deep/full mode (the default) keeps typing enforced.
   */
  allowUntyped?: boolean;
  /**
   * Treat the file as a faithful vendored module or a typed boundary facade:
   * suppress the semantic-naming/typing/split checks that are false positives
   * on code we deliberately did not rewrite (a package's own short API names
   * like `eq`, a 308-export Zod facade of `any` stubs). A `make-facade.ts`
   * output is auto-detected by its marker even without this flag.
   */
  vendored: boolean;
  allowedCheckpointImportFiles?: Set<string>;
};

export type QualityGateIssue = {
  code: string;
  message: string;
  detail?: unknown;
};

export type FileQualityReport = {
  file: string;
  lineCount: number;
  exportCount: number;
  registryObjectExport: boolean;
  crypticParams: number;
  crypticBindings: number;
  shortIdentifierOffenders: Array<{ name: string; count: number }>;
  mechanicalNames: string[];
  duplicateImportNames: Array<{
    source: string;
    imported: string;
    locals: string[];
  }>;
  mechanicalImportBindings: Array<{
    source: string;
    imported: string;
    local: string;
  }>;
  missingRelativeExports: Array<{
    source: string;
    imported: string;
    resolvedFile: string;
  }>;
  unresolvedRelativeImports: Array<{ source: string; resolvedFrom: string }>;
  unfinalizedCheckpointImports: string[];
  invalidJsxTags: string[];
  unboundJsxTags: string[];
  unboundIdentifiers: string[];
  untypedComponentProps: string[];
  untypedPublicFunctionParams: string[];
  misleadingHookExports: string[];
  publicCrypticNames: string[];
  hasProvenanceHeader: boolean;
  duplicateProvenanceHeaders: number;
  residueMatches: string[];
  splitRequired: boolean;
  issues: QualityGateIssue[];
};

type FullRestorationManifestFile = {
  basename?: string;
  kind?: string;
  stages?: Record<string, unknown>;
};

type FullRestorationImportMapEntry = {
  publicFile?: string;
  publicDirectory?: string;
  splitDirectory?: string;
  publicFacades?: Record<string, string>;
  dependencyBoundary?: string;
  dependencyBoundaryFacades?: Record<string, string>;
  restored?: string;
  file?: string;
  boundary?: boolean;
  vendor?: string;
  status?: string;
  note?: string;
  stage3Accepted?: boolean;
  acceptance?: unknown;
  acceptanceReview?: unknown;
  stage3?: unknown;
};

type FullRestorationImportMap = {
  publicOutputs?: Record<string, FullRestorationImportMapEntry>;
  chunks?: Record<string, FullRestorationImportMapEntry>;
  boundaries?: Record<string, FullRestorationImportMapEntry>;
  appScope?: FullRestorationImportMapEntry;
  vscodeApi?: FullRestorationImportMapEntry;
  src?: FullRestorationImportMapEntry;
  statsig?: FullRestorationImportMapEntry;
};

export const DEFAULT_OPTIONS: QualityGateOptions = {
  maxCrypticParams: 20,
  maxCrypticBindings: 80,
  maxShortRefCount: 50,
  maxFlatLines: 1000,
  maxFlatExports: 2,
  allowFlat: false,
  allowMechanicalNames: false,
  requireProvenanceHeader: false,
  allowUntyped: false,
  vendored: false,
};

/** Marker emitted by `make-facade.ts` so the gate auto-relaxes on facades. */
const FACADE_MARKER = "TYPED BOUNDARY FACADE";

function isGeneratedFacade(source: string): boolean {
  return source.slice(0, 600).includes(FACADE_MARKER);
}

function isLegacyVendoredBoundaryFacade(source: string): boolean {
  const header = source.slice(0, 700);
  const isLegacyBoundary =
    /Flat boundary(?: facade)?\b/.test(header) ||
    /\bre-export boundary\b/i.test(header) ||
    /\bboundary(?:\)\.?|\.)?\s*$/im.test(header);
  if (!isLegacyBoundary) return false;
  return (
    /\bvendored\b/i.test(header) ||
    /\bdiagram\/doc vendor\b/i.test(header) ||
    /\bshiki syntax grammar\b/i.test(header) ||
    /\balternate build of the same module\b/i.test(header) ||
    /\bBare Jotai React re-export boundary\b/i.test(header) ||
    /\bi18n\/locale request\b/i.test(header)
  );
}

function isLottieAnimationDataModule(file: string, source: string): boolean {
  const normalized = file.replace(/\\/g, "/");
  if (!/(?:^|\/)(?:assets|animations)\/[^/]+\.ts$/i.test(normalized)) {
    return false;
  }

  const header = source.slice(0, 500);
  const leadingData = source.slice(0, 8000);
  const hasLottieVersion =
    /\bv\s*:\s*["'`]5\.\d+\.\d+["'`]/.test(leadingData) &&
    /\bip\s*:/.test(leadingData) &&
    /\bop\s*:/.test(leadingData) &&
    /\bfr\s*:/.test(leadingData);
  const hasLottieToolkitMetadata =
    /@lottiefiles\/toolkit-js/.test(leadingData) &&
    /\bw\s*:/.test(leadingData) &&
    /\bh\s*:/.test(leadingData);
  return (
    /Restored from ref\/webview\/assets\/[^/\r\n]+\.js/.test(header) &&
    (hasLottieVersion || hasLottieToolkitMetadata) &&
    /\blayers\s*:/.test(source)
  );
}

function isBundlerInteropRuntimeModule(file: string, source: string): boolean {
  const normalized = file.replace(/\\/g, "/");
  if (
    !(
      /(?:^|\/)utils\/cjsInterop\.ts$/i.test(normalized) ||
      /(?:^|\/)boundaries\/chunk-Cq_f4orQ\.ts$/i.test(normalized)
    )
  ) {
    return false;
  }

  const header = source.slice(0, 700);
  return (
    /Restored from ref\/webview\/assets\/chunk-Cq_f4orQ\.js/.test(header) &&
    (/Rolldown CJS interop runtime boundary/i.test(header) ||
      (/\bconst create = Object\.create\b/.test(source) &&
        /\bconst toESM\b/.test(source) &&
        /\bconst commonJsFactory\b/.test(source)))
  );
}

function isVendoredDataModule(file: string, source: string): boolean {
  return (
    /(?:^|[/\\])grammars[/\\][^/\\]+\.ts$/i.test(file) ||
    /(?:^|[/\\])i18n[/\\](?:locales[/\\])?[A-Za-z][A-Za-z]+\.ts$/i.test(file) ||
    isLottieAnimationDataModule(file, source) ||
    isBundlerInteropRuntimeModule(file, source)
  );
}

function countLines(source: string): number {
  if (!source) return 0;
  let count = 1;
  for (let i = 0; i < source.length; i++) {
    if (source.charCodeAt(i) === 10) count++;
  }
  return count;
}

function hasRestorationProvenanceHeader(source: string): boolean {
  return /^\/\/ Restored from ref\/webview\/assets\/[^/\r\n]+\.js\b/.test(
    source,
  );
}

function countRestorationProvenanceHeaders(source: string): number {
  let count = 0;
  for (const match of source.matchAll(
    /^\/\/ Restored from ref\/webview\/assets\/[^/\r\n]+\.js\b/gm,
  )) {
    void match;
    count++;
  }
  return count;
}

function isCrypticSymbol(symbol: SymbolEntry): boolean {
  return CRYPTIC_RE.test(symbol.name) && !SHORT_ALLOWLIST.has(symbol.name);
}

// `_Array` / `__Array` etc.: a JS global underscore-prefixed because the renamer
// chose a stem that collides with a builtin (the `array-XXXX` → `_Array(__Array)`
// residue). tslib helpers (`__assign`) are `_`+lowercase, so they don't match.
const GLOBAL_COLLISION_RE = /^_{1,2}([A-Z][A-Za-z0-9]*)$/;

function isGlobalCollisionName(name: string): boolean {
  const m = GLOBAL_COLLISION_RE.exec(name);
  return m != null && JS_GLOBALS.has(m[1]!);
}

function collectMechanicalNames(
  source: string,
  symbols: SymbolEntry[],
): string[] {
  const names = new Set<string>();
  const flag = (name: string): void => {
    if (MECHANICAL_NAME_RE.test(name) || isGlobalCollisionName(name)) {
      names.add(name);
    }
  };
  for (const symbol of symbols) flag(symbol.name);
  for (const match of source.matchAll(/\b[$A-Za-z_][$A-Za-z0-9_]*\b/g)) {
    flag(match[0]!);
  }
  return [...names].sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
}

function countShortIdentifiers(
  source: string,
): Array<{ name: string; count: number }> {
  const counts = new Map<string, number>();
  try {
    const ast = parseSource(source);
    traverse(ast, {
      Identifier(identifierPath) {
        if (!identifierPath.isReferencedIdentifier()) return;
        const name = identifierPath.node.name;
        if (name.length > 2 || SHORT_ALLOWLIST.has(name)) return;
        counts.set(name, (counts.get(name) ?? 0) + 1);
      },
      JSXIdentifier(identifierPath) {
        const name = identifierPath.node.name;
        if (name.length > 2 || SHORT_ALLOWLIST.has(name)) return;
        counts.set(name, (counts.get(name) ?? 0) + 1);
      },
    });
  } catch {
    for (const match of source.matchAll(/\b[$A-Za-z_][$A-Za-z0-9_]*\b/g)) {
      const name = match[0]!;
      if (name.length > 2 || SHORT_ALLOWLIST.has(name)) continue;
      counts.set(name, (counts.get(name) ?? 0) + 1);
    }
  }
  return [...counts.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

function importedName(
  spec:
    | t.ImportSpecifier
    | t.ImportDefaultSpecifier
    | t.ImportNamespaceSpecifier,
): string | null {
  if (t.isImportDefaultSpecifier(spec) || t.isImportNamespaceSpecifier(spec)) {
    return null;
  }
  return t.isIdentifier(spec.imported)
    ? spec.imported.name
    : spec.imported.value;
}

function unwrapSequenceCallee(node: t.Node): t.Node {
  if (t.isSequenceExpression(node)) {
    return node.expressions.at(-1) ?? node;
  }
  return node;
}

function isJsxRuntimeCall(node: t.CallExpression): boolean {
  const callee = unwrapSequenceCallee(node.callee);
  if (t.isIdentifier(callee)) return JSX_FACTORY_NAMES.has(callee.name);
  return (
    t.isMemberExpression(callee) &&
    !callee.computed &&
    t.isIdentifier(callee.property) &&
    JSX_FACTORY_NAMES.has(callee.property.name)
  );
}

function collectResidueMatches(source: string): string[] {
  const labels = new Set<string>();
  if (/sourceMappingURL=/.test(source)) labels.add("stale sourcemap comment");
  if (
    /\.(?:c|useMemoCache)\(\d+\)|\buseMemoCache\(\d+\)|\bcache\[\d+\]/.test(
      source,
    )
  ) {
    labels.add("React Compiler cache residue");
  }

  try {
    const ast = parseSource(source);
    traverse(ast, {
      ImportDeclaration(importPath) {
        const sourceValue = importPath.node.source.value;
        if (/\btoESModule\b|__toESM/.test(sourceValue)) {
          labels.add("runtime shim");
        }
        if (!JSX_RUNTIME_SOURCE_RE.test(sourceValue)) return;
        for (const spec of importPath.node.specifiers) {
          const name = importedName(spec);
          if (
            name === null ||
            name === "t" ||
            name === "Fragment" ||
            JSX_FACTORY_NAMES.has(name)
          ) {
            labels.add("JSX runtime import/call residue");
          }
        }
      },
      Identifier(identifierPath) {
        if (!identifierPath.isReferencedIdentifier()) return;
        const name = identifierPath.node.name;
        if (
          name === "toESModule" ||
          name === "__toESM" ||
          name === "loadJsxRuntime"
        ) {
          labels.add("runtime shim");
        }
      },
      VariableDeclarator(varPath) {
        const id = varPath.node.id;
        if (t.isIdentifier(id) && id.name === "jsxRuntime") {
          labels.add("runtime shim");
        }
      },
      CallExpression(callPath) {
        if (isJsxRuntimeCall(callPath.node)) {
          labels.add("JSX runtime import/call residue");
        }
      },
    });
  } catch {
    for (const pattern of RESIDUE_PATTERNS) {
      if (pattern.re.test(source)) labels.add(pattern.label);
    }
  }

  return [...labels];
}

function isIndexFile(filePath: string): boolean {
  return /^index\.[cm]?[jt]sx?$/i.test(path.basename(filePath));
}

/**
 * Generated barrel / shared-types files (`index.ts`, `types.ts`) carry no
 * restored logic — they re-export or declare a shared type alias — so the
 * provenance-header requirement does not apply to them.
 */
function isGeneratedBarrelFile(filePath: string): boolean {
  return (
    isIndexFile(filePath) ||
    /^types\.[cm]?tsx?$/i.test(path.basename(filePath))
  );
}

const KEBAB_PUBLIC_BASENAME_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*(?:\.[a-z0-9]+)*$/;

/**
 * Public file/dir names must be kebab-case (lowercase-dash). React component
 * IDENTIFIERS stay PascalCase (JSX requires it) — only the filename is kebab
 * (`button.tsx` exports `Button`). Allowances: `index`, `types`, `*.d.ts`,
 * `*.facade.ts`, and any all-lowercase/dotted basename.
 */
function isKebabPublicBasename(filePath: string): boolean {
  const file = path.basename(filePath);
  if (/\.d\.ts$/i.test(file)) return true;
  if (/\.facade\.[cm]?[jt]sx?$/i.test(file)) return true;
  const base = file.replace(SOURCE_EXT_RE, "");
  if (base === "index" || base === "types") return true;
  return KEBAB_PUBLIC_BASENAME_RE.test(base);
}

function isThemeFile(filePath: string): boolean {
  return path.normalize(filePath).split(path.sep).includes("themes");
}

function isCommandMetadataFile(filePath: string): boolean {
  return /(?:^|[/\\])commands[/\\][^/\\]*electronMenuShortcutsImpl\.[cm]?[jt]sx?$/i.test(
    path.normalize(filePath),
  );
}

function isRegistryObjectValue(node: t.Node | null | undefined): boolean {
  return (
    t.isIdentifier(node) ||
    t.isMemberExpression(node) ||
    t.isCallExpression(node)
  );
}

function countRegistryObjectProps(
  init: t.Expression | null | undefined,
): number {
  if (!init || init.type !== "ObjectExpression") return 0;
  let count = 0;
  for (const prop of init.properties) {
    if (!t.isObjectProperty(prop)) continue;
    if (isRegistryObjectValue(prop.value)) count++;
  }
  return count;
}

function isRelativeImportSource(source: string): boolean {
  return source.startsWith("./") || source.startsWith("../");
}

function isCodeImportSource(source: string): boolean {
  const extension = path.extname(source);
  return extension === "" || SOURCE_EXT_RE.test(source);
}

function importResolutionCandidates(
  sourceFile: string,
  source: string,
): string[] {
  const absoluteBase = path.resolve(path.dirname(sourceFile), source);
  return [
    absoluteBase,
    ...[".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs"].map(
      (extension) => absoluteBase + extension,
    ),
    ...[".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs"].map((extension) =>
      path.join(absoluteBase, `index${extension}`),
    ),
  ];
}

function resolveRelativeImport(
  sourceFile: string,
  source: string,
): string | null {
  for (const candidate of importResolutionCandidates(sourceFile, source)) {
    if (!fs.existsSync(candidate)) continue;
    if (fs.statSync(candidate).isFile()) return candidate;
  }
  return null;
}

function relativeImportExists(sourceFile: string, source: string): boolean {
  return resolveRelativeImport(sourceFile, source) !== null;
}

function collectImportSources(source: string): string[] {
  const sources = new Set<string>();
  const ast = parseSource(source);
  traverse(ast, {
    ImportDeclaration(importPath) {
      sources.add(importPath.node.source.value);
    },
    ExportNamedDeclaration(exportPath) {
      const source = exportPath.node.source?.value;
      if (source) sources.add(source);
    },
    ExportAllDeclaration(exportPath) {
      sources.add(exportPath.node.source.value);
    },
    CallExpression(callPath) {
      if (
        callPath.node.callee.type !== "Import" ||
        callPath.node.arguments.length !== 1
      ) {
        return;
      }
      const argument = callPath.node.arguments[0];
      if (t.isStringLiteral(argument)) sources.add(argument.value);
    },
  });
  return [...sources].sort();
}

function collectUnresolvedRelativeImports(
  source: string,
  file: string,
): Array<{ source: string; resolvedFrom: string }> {
  if (!fs.existsSync(file)) return [];
  return collectImportSources(source)
    .filter(isRelativeImportSource)
    .filter(isCodeImportSource)
    .filter((importSource) => !relativeImportExists(file, importSource))
    .map((importSource) => ({
      source: importSource,
      resolvedFrom: path.dirname(file),
    }));
}

type ExportNameResolution = {
  names: Set<string>;
  complete: boolean;
};

function nodeName(
  node: t.Identifier | t.StringLiteral | null | undefined,
): string | null {
  if (!node) return null;
  return t.isIdentifier(node) ? node.name : node.value;
}

function addBindingNames(
  names: Set<string>,
  node: t.Node | null | undefined,
): void {
  if (!node) return;
  if (t.isIdentifier(node)) {
    names.add(node.name);
    return;
  }
  if (t.isObjectPattern(node)) {
    for (const prop of node.properties) {
      if (t.isObjectProperty(prop)) addBindingNames(names, prop.value);
      else if (t.isRestElement(prop)) addBindingNames(names, prop.argument);
    }
    return;
  }
  if (t.isArrayPattern(node)) {
    for (const element of node.elements) addBindingNames(names, element);
    return;
  }
  if (t.isAssignmentPattern(node)) {
    addBindingNames(names, node.left);
    return;
  }
  if (t.isRestElement(node)) addBindingNames(names, node.argument);
}

function exportedDeclarationNames(
  declaration: t.ExportNamedDeclaration["declaration"],
): string[] {
  if (!declaration) return [];
  const names = new Set<string>();
  if (t.isVariableDeclaration(declaration)) {
    for (const declarator of declaration.declarations) {
      addBindingNames(names, declarator.id);
    }
  } else if (
    (t.isFunctionDeclaration(declaration) ||
      t.isClassDeclaration(declaration) ||
      t.isTSDeclareFunction(declaration) ||
      t.isTSInterfaceDeclaration(declaration) ||
      t.isTSTypeAliasDeclaration(declaration) ||
      t.isTSEnumDeclaration(declaration)) &&
    declaration.id
  ) {
    names.add(declaration.id.name);
  } else if (t.isTSModuleDeclaration(declaration)) {
    const name = nodeName(declaration.id);
    if (name) names.add(name);
  }
  return [...names];
}

const exportNameCache = new Map<string, ExportNameResolution>();

function collectExportNames(
  file: string,
  activeFiles = new Set<string>(),
): ExportNameResolution {
  const resolvedFile = path.resolve(file);
  const cached = exportNameCache.get(resolvedFile);
  if (cached) return cached;
  if (activeFiles.has(resolvedFile)) {
    return { names: new Set(), complete: false };
  }
  activeFiles.add(resolvedFile);

  const result: ExportNameResolution = { names: new Set(), complete: true };
  exportNameCache.set(resolvedFile, result);

  let ast: t.File;
  try {
    ast = parseSource(fs.readFileSync(resolvedFile, "utf-8"));
  } catch {
    result.complete = false;
    activeFiles.delete(resolvedFile);
    return result;
  }

  for (const statement of ast.program.body) {
    if (t.isExportDefaultDeclaration(statement)) {
      result.names.add("default");
      continue;
    }
    if (t.isExportAllDeclaration(statement)) {
      const exported = nodeName(statement.exported);
      if (exported) {
        result.names.add(exported);
        continue;
      }
      const source = statement.source.value;
      if (!isRelativeImportSource(source) || !isCodeImportSource(source)) {
        result.complete = false;
        continue;
      }
      const target = resolveRelativeImport(resolvedFile, source);
      if (!target) {
        result.complete = false;
        continue;
      }
      const targetExports = collectExportNames(target, activeFiles);
      for (const name of targetExports.names) {
        if (name !== "default") result.names.add(name);
      }
      if (!targetExports.complete) result.complete = false;
      continue;
    }
    if (!t.isExportNamedDeclaration(statement)) continue;
    for (const name of exportedDeclarationNames(statement.declaration)) {
      result.names.add(name);
    }
    for (const specifier of statement.specifiers) {
      if (t.isExportNamespaceSpecifier(specifier)) {
        const exported = nodeName(specifier.exported);
        if (exported) result.names.add(exported);
        continue;
      }
      if (!t.isExportSpecifier(specifier)) continue;
      const exported = nodeName(specifier.exported);
      if (exported) result.names.add(exported);
    }
  }

  activeFiles.delete(resolvedFile);
  return result;
}

function collectMissingRelativeExports(
  source: string,
  file: string,
): Array<{ source: string; imported: string; resolvedFile: string }> {
  if (!fs.existsSync(file)) return [];
  const ast = parseSource(source);
  const missing: Array<{
    source: string;
    imported: string;
    resolvedFile: string;
  }> = [];

  const checkName = (sourceValue: string, imported: string) => {
    if (
      !isRelativeImportSource(sourceValue) ||
      !isCodeImportSource(sourceValue)
    )
      return;
    const target = resolveRelativeImport(file, sourceValue);
    if (!target) return;
    const targetExports = collectExportNames(target);
    if (!targetExports.complete) return;
    if (targetExports.names.has(imported)) return;
    missing.push({
      source: sourceValue,
      imported,
      resolvedFile: target,
    });
  };

  for (const statement of ast.program.body) {
    if (t.isImportDeclaration(statement)) {
      for (const specifier of statement.specifiers) {
        if (t.isImportNamespaceSpecifier(specifier)) continue;
        if (t.isImportDefaultSpecifier(specifier)) {
          checkName(statement.source.value, "default");
          continue;
        }
        const imported = nodeName(specifier.imported);
        if (imported) checkName(statement.source.value, imported);
      }
      continue;
    }
    if (!t.isExportNamedDeclaration(statement) || !statement.source) continue;
    for (const specifier of statement.specifiers) {
      if (t.isExportNamespaceSpecifier(specifier)) continue;
      if (!t.isExportSpecifier(specifier)) continue;
      const imported = nodeName(specifier.local);
      if (imported) checkName(statement.source.value, imported);
    }
  }

  return missing.sort(
    (a, b) =>
      a.source.localeCompare(b.source) ||
      a.imported.localeCompare(b.imported) ||
      a.resolvedFile.localeCompare(b.resolvedFile),
  );
}

function isHiddenCheckpointPath(file: string): boolean {
  const parts = path.normalize(file).split(path.sep);
  return parts.includes(".deobfuscate-javascript");
}

function isHiddenCheckpointImport(source: string): boolean {
  return source.split("/").includes(".deobfuscate-javascript");
}

function collectUnfinalizedCheckpointImports(
  source: string,
  file: string,
  options: QualityGateOptions,
): string[] {
  if (isHiddenCheckpointPath(file)) return [];
  if (options.allowedCheckpointImportFiles?.has(path.resolve(file))) return [];
  return collectImportSources(source).filter(isHiddenCheckpointImport).sort();
}

function jsxRootIdentifier(name: t.JSXOpeningElement["name"]): string | null {
  if (name.type === "JSXIdentifier") return name.name;
  if (name.type === "JSXMemberExpression") {
    let object = name.object;
    while (object.type === "JSXMemberExpression") object = object.object;
    return object.type === "JSXIdentifier" ? object.name : null;
  }
  return null;
}

function isTypeOnlyIdentifierPath(identifierPath: {
  key: string | number | null;
  parentPath: any;
}): boolean {
  let current: { key: string | number | null; parentPath: any } | null =
    identifierPath;
  while (current?.parentPath) {
    const parent = current.parentPath;
    const parentType = parent.node?.type;
    if (
      (parentType === "TSAsExpression" ||
        parentType === "TSSatisfiesExpression" ||
        parentType === "TSNonNullExpression" ||
        parentType === "TSTypeAssertion" ||
        parentType === "TSInstantiationExpression") &&
      current.key === "expression"
    ) {
      return false;
    }
    if (typeof parentType === "string" && parentType.startsWith("TS")) {
      return true;
    }
    if (
      parentType === "ExportSpecifier" &&
      parent.parentPath?.node?.type === "ExportNamedDeclaration"
    ) {
      if (parent.parentPath.node.exportKind === "type") return true;
      if (current.key !== "exported") return false;
      return true;
    }
    current = parent;
  }
  return false;
}

function isAllowedCssGlobalReference(identifierPath: {
  parentPath: any;
  node: t.Identifier;
}): boolean {
  const parentPath = identifierPath.parentPath;
  if (!parentPath?.isMemberExpression?.()) return false;
  const memberExpression = parentPath.node;
  if (!t.isMemberExpression(memberExpression)) return false;
  if (memberExpression.object !== identifierPath.node) return false;
  if (memberExpression.computed || !t.isIdentifier(memberExpression.property))
    return false;
  return memberExpression.property.name === "escape";
}

function isPascalCaseIdentifier(name: string): boolean {
  return /^[A-Z][A-Za-z0-9_]*$/.test(name);
}

function parameterHasTypeAnnotation(
  param: t.Function["params"][number],
): boolean {
  if (
    (t.isIdentifier(param) ||
      t.isObjectPattern(param) ||
      t.isArrayPattern(param)) &&
    param.typeAnnotation != null
  )
    return true;
  if (t.isRestElement(param)) {
    return (
      param.typeAnnotation != null ||
      (t.isIdentifier(param.argument) && param.argument.typeAnnotation != null)
    );
  }
  return t.isAssignmentPattern(param) && parameterHasTypeAnnotation(param.left);
}

function isTypedForwardRefCallback(functionPath: any): boolean {
  const callPath = functionPath.parentPath;
  if (!callPath?.isCallExpression?.()) return false;
  const callExpression = callPath.node;
  const callee = callExpression.callee;
  const isForwardRef =
    t.isMemberExpression(callee) &&
    t.isIdentifier(callee.property) &&
    callee.property.name === "forwardRef";
  return (
    isForwardRef &&
    (callExpression.typeParameters != null ||
      callExpression.typeArguments != null)
  );
}

function collectUntypedComponentParam(
  out: Set<string>,
  functionPath: any,
  componentName: string | null | undefined,
): void {
  if (componentName == null || !isPascalCaseIdentifier(componentName)) return;
  const firstParam = functionPath.node.params[0];
  if (firstParam == null) return;
  if (parameterHasTypeAnnotation(firstParam)) return;
  if (isTypedForwardRefCallback(functionPath)) return;
  out.add(componentName);
}

function paramLabel(
  source: string,
  param: t.Function["params"][number],
): string {
  if (t.isIdentifier(param)) return param.name;
  if (t.isRestElement(param)) {
    return `...${
      param.argument.type === "Identifier" ? param.argument.name : "rest"
    }`;
  }
  if (t.isAssignmentPattern(param)) {
    return paramLabel(source, param.left as t.Function["params"][number]);
  }
  return source.slice(param.start ?? 0, param.end ?? 0).trim() || "<pattern>";
}

function collectUntypedPublicFunctionParams(
  out: Set<string>,
  source: string,
  functionNode: t.Function,
  functionName: string,
): void {
  for (const param of functionNode.params) {
    if (parameterHasTypeAnnotation(param)) continue;
    out.add(`${functionName}:${paramLabel(source, param)}`);
  }
}

function isHookShapedExportName(name: string): boolean {
  return /^use[A-Z0-9_]/.test(name);
}

function isContextLikeIdentifierName(name: string): boolean {
  return !isHookShapedExportName(name) && /Context$/.test(name);
}

function isCreateContextCallee(
  callee: t.Expression | t.V8IntrinsicIdentifier,
): boolean {
  if (t.isIdentifier(callee)) return callee.name === "createContext";
  return (
    t.isMemberExpression(callee) &&
    !callee.computed &&
    t.isIdentifier(callee.property) &&
    callee.property.name === "createContext"
  );
}

function isContextLikeExpression(
  expression: t.Expression | null | undefined,
): boolean {
  if (!expression) return false;
  if (t.isIdentifier(expression)) {
    return isContextLikeIdentifierName(expression.name);
  }
  return (
    t.isCallExpression(expression) && isCreateContextCallee(expression.callee)
  );
}

function analyzeAst(
  source: string,
  file: string,
  options: QualityGateOptions,
): {
  exportCount: number;
  registryObjectExport: boolean;
  semanticButtonModule: boolean;
  semanticThemeModule: boolean;
  semanticCommandMetadataModule: boolean;
  semanticImplementationModule: boolean;
  duplicateImportNames: Array<{
    source: string;
    imported: string;
    locals: string[];
  }>;
  mechanicalImportBindings: Array<{
    source: string;
    imported: string;
    local: string;
  }>;
  missingRelativeExports: Array<{
    source: string;
    imported: string;
    resolvedFile: string;
  }>;
  unresolvedRelativeImports: Array<{ source: string; resolvedFrom: string }>;
  unfinalizedCheckpointImports: string[];
  invalidJsxTags: string[];
  unboundJsxTags: string[];
  unboundIdentifiers: string[];
  untypedComponentProps: string[];
  untypedPublicFunctionParams: string[];
  misleadingHookExports: string[];
  publicCrypticNames: string[];
} {
  const ast = parseSource(source);
  const objectBindingPropCounts = new Map<string, number>();
  const exportedLocals = new Set<string>();
  const invalidJsxTags = new Set<string>();
  const unboundJsxTags = new Set<string>();
  const unboundIdentifiers = new Set<string>();
  const untypedComponentProps = new Set<string>();
  const untypedPublicFunctionParams = new Set<string>();
  const misleadingHookExports = new Set<string>();
  const duplicateImportNames: Array<{
    source: string;
    imported: string;
    locals: string[];
  }> = [];
  const mechanicalImportBindings: Array<{
    source: string;
    imported: string;
    local: string;
  }> = [];
  const publicNames = new Set<string>();
  const shouldCheckComponentProps = /\.tsx$/i.test(file);
  let exportCount = 0;
  let registryObjectExport = false;

  traverse(ast, {
    ImportDeclaration(path) {
      const importedToLocals = new Map<string, Set<string>>();
      for (const spec of path.node.specifiers) {
        if (!t.isImportSpecifier(spec)) continue;
        const imported = t.isIdentifier(spec.imported)
          ? spec.imported.name
          : spec.imported.value;
        if (
          !isHiddenCheckpointImport(path.node.source.value) &&
          (MECHANICAL_IMPORT_BINDING_RE.test(imported) ||
            MECHANICAL_IMPORT_BINDING_RE.test(spec.local.name))
        ) {
          mechanicalImportBindings.push({
            source: path.node.source.value,
            imported,
            local: spec.local.name,
          });
        }
        const locals = importedToLocals.get(imported) ?? new Set<string>();
        locals.add(spec.local.name);
        importedToLocals.set(imported, locals);
      }
      for (const [imported, locals] of importedToLocals) {
        if (locals.size <= 1) continue;
        duplicateImportNames.push({
          source: path.node.source.value,
          imported,
          locals: [...locals].sort(),
        });
      }
    },
    VariableDeclarator(path) {
      if (t.isIdentifier(path.node.id)) {
        const propCount = countRegistryObjectProps(path.node.init);
        if (propCount >= 3)
          objectBindingPropCounts.set(path.node.id.name, propCount);
      }
      if (!path.parentPath?.parentPath?.isExportNamedDeclaration?.()) return;
      if (!t.isIdentifier(path.node.id)) return;
      const init = path.node.init;
      if (!t.isArrowFunctionExpression(init) && !t.isFunctionExpression(init))
        return;
      collectUntypedPublicFunctionParams(
        untypedPublicFunctionParams,
        source,
        init,
        path.node.id.name,
      );
    },
    ExportNamedDeclaration(path) {
      const decl = path.node.declaration;
      const sourceValue = path.node.source?.value;
      if (decl?.type === "VariableDeclaration") {
        for (const declarator of decl.declarations) {
          if (declarator.id.type !== "Identifier") continue;
          exportCount++;
          exportedLocals.add(declarator.id.name);
          publicNames.add(declarator.id.name);
          if (
            isHookShapedExportName(declarator.id.name) &&
            isContextLikeExpression(declarator.init)
          ) {
            misleadingHookExports.add(declarator.id.name);
          }
          if (countRegistryObjectProps(declarator.init) >= 3)
            registryObjectExport = true;
        }
      } else if (
        decl &&
        (decl.type === "FunctionDeclaration" ||
          decl.type === "ClassDeclaration")
      ) {
        exportCount++;
        if (decl.id) {
          exportedLocals.add(decl.id.name);
          publicNames.add(decl.id.name);
        }
      }
      for (const spec of path.node.specifiers) {
        if (spec.type !== "ExportSpecifier") continue;
        if (sourceValue != null && !isHiddenCheckpointImport(sourceValue)) {
          const imported =
            spec.local.type === "Identifier"
              ? spec.local.name
              : spec.local.value;
          const exported =
            spec.exported.type === "Identifier"
              ? spec.exported.name
              : spec.exported.value;
          if (
            MECHANICAL_IMPORT_BINDING_RE.test(imported) ||
            MECHANICAL_IMPORT_BINDING_RE.test(exported)
          ) {
            mechanicalImportBindings.push({
              source: sourceValue,
              imported,
              local: exported,
            });
          }
        }
        exportCount++;
        if (spec.local.type === "Identifier")
          exportedLocals.add(spec.local.name);
        if (spec.exported.type === "Identifier")
          publicNames.add(spec.exported.name);
        else publicNames.add(spec.exported.value);
        const localName =
          spec.local.type === "Identifier" ? spec.local.name : spec.local.value;
        const publicName =
          spec.exported.type === "Identifier"
            ? spec.exported.name
            : spec.exported.value;
        if (
          isHookShapedExportName(publicName) &&
          isContextLikeIdentifierName(localName)
        ) {
          misleadingHookExports.add(`${publicName}:${localName}`);
        }
      }
    },
    ExportDefaultDeclaration() {
      exportCount++;
    },
    ExportAllDeclaration() {
      exportCount++;
    },
    JSXOpeningElement(path) {
      const name = path.node.name;
      const tag = jsxRootIdentifier(name);
      if (tag == null) return;
      if (
        name.type === "JSXIdentifier" &&
        /^[a-z]/.test(tag) &&
        !INTRINSIC_JSX_TAGS.has(tag)
      ) {
        invalidJsxTags.add(tag);
      }
      if (
        (name.type === "JSXMemberExpression" || /^[A-Z]/.test(tag)) &&
        !path.scope.hasBinding(tag)
      ) {
        unboundJsxTags.add(tag);
      }
    },
    FunctionDeclaration(path) {
      if (path.parentPath?.node?.type === "ExportNamedDeclaration") {
        collectUntypedPublicFunctionParams(
          untypedPublicFunctionParams,
          source,
          path.node,
          path.node.id?.name ?? "<anonymous>",
        );
      }
      if (!shouldCheckComponentProps) return;
      if (path.parentPath?.node?.type !== "ExportNamedDeclaration") return;
      collectUntypedComponentParam(
        untypedComponentProps,
        path,
        path.node.id?.name,
      );
    },
    FunctionExpression(path) {
      if (!shouldCheckComponentProps) return;
      collectUntypedComponentParam(
        untypedComponentProps,
        path,
        path.node.id?.name,
      );
    },
    Identifier(path) {
      if (!path.isReferencedIdentifier()) return;
      if (isTypeOnlyIdentifierPath(path)) return;
      const name = path.node.name;
      if (name === "CSS" && isAllowedCssGlobalReference(path)) return;
      if (KNOWN_GLOBAL_IDENTIFIERS.has(name)) return;
      if (path.scope.hasBinding(name)) return;
      unboundIdentifiers.add(name);
    },
  });

  for (const local of exportedLocals) {
    if ((objectBindingPropCounts.get(local) ?? 0) >= 3)
      registryObjectExport = true;
  }

  return {
    exportCount,
    registryObjectExport,
    semanticButtonModule:
      source.includes("export const buttonRadiusClassNames") &&
      source.includes("export const buttonColorClassNames") &&
      source.includes("export const buttonSizeClassNames") &&
      source.includes("export const Button = forwardRef") &&
      source.includes('Button.displayName = "Button"'),
    semanticThemeModule:
      isThemeFile(file) && [...publicNames].some((name) => /Theme$/.test(name)),
    semanticCommandMetadataModule:
      isCommandMetadataFile(file) &&
      source.includes("commandDefinitions") &&
      source.includes("formatAcceleratorLabel") &&
      source.includes("defaultKeymapStaleTimeMs"),
    semanticImplementationModule:
      /(?:^|[/\\])[^/\\]+Impl\.[cm]?[jt]sx?$/i.test(file) &&
      source.includes("Semantic implementation") &&
      !registryObjectExport,
    duplicateImportNames: duplicateImportNames.sort(
      (a, b) =>
        a.source.localeCompare(b.source) ||
        a.imported.localeCompare(b.imported),
    ),
    mechanicalImportBindings: mechanicalImportBindings.sort(
      (a, b) =>
        a.source.localeCompare(b.source) ||
        a.imported.localeCompare(b.imported) ||
        a.local.localeCompare(b.local),
    ),
    missingRelativeExports: collectMissingRelativeExports(source, file),
    unresolvedRelativeImports: collectUnresolvedRelativeImports(source, file),
    unfinalizedCheckpointImports: collectUnfinalizedCheckpointImports(
      source,
      file,
      options,
    ),
    invalidJsxTags: [...invalidJsxTags].sort(),
    unboundJsxTags: [...unboundJsxTags].sort(),
    unboundIdentifiers: [...unboundIdentifiers].sort(),
    untypedComponentProps: [...untypedComponentProps].sort(),
    untypedPublicFunctionParams: [...untypedPublicFunctionParams].sort(),
    misleadingHookExports: [...misleadingHookExports].sort(),
    publicCrypticNames: [...publicNames]
      .filter((name) => CRYPTIC_RE.test(name) && !SHORT_ALLOWLIST.has(name))
      .sort((a, b) => (a < b ? -1 : a > b ? 1 : 0)),
  };
}

export function analyzeSource(
  source: string,
  file: string,
  options: QualityGateOptions = DEFAULT_OPTIONS,
): FileQualityReport {
  const issues: QualityGateIssue[] = [];
  let symbols: SymbolEntry[] = [];
  let astFacts = {
    exportCount: 0,
    registryObjectExport: false,
    semanticButtonModule: false,
    semanticThemeModule: false,
    semanticCommandMetadataModule: false,
    semanticImplementationModule: false,
    duplicateImportNames: [] as Array<{
      source: string;
      imported: string;
      locals: string[];
    }>,
    mechanicalImportBindings: [] as Array<{
      source: string;
      imported: string;
      local: string;
    }>,
    missingRelativeExports: [] as Array<{
      source: string;
      imported: string;
      resolvedFile: string;
    }>,
    unresolvedRelativeImports: [] as Array<{
      source: string;
      resolvedFrom: string;
    }>,
    unfinalizedCheckpointImports: [] as string[],
    invalidJsxTags: [] as string[],
    unboundJsxTags: [] as string[],
    unboundIdentifiers: [] as string[],
    untypedComponentProps: [] as string[],
    untypedPublicFunctionParams: [] as string[],
    misleadingHookExports: [] as string[],
    publicCrypticNames: [] as string[],
  };

  try {
    symbols = extractSymbols(source);
    astFacts = analyzeAst(source, file, options);
  } catch (err) {
    issues.push({
      code: "parse-error",
      message: `Could not parse restored file: ${(err as Error).message}`,
    });
  }

  const lineCount = countLines(source);
  const crypticSymbols = symbols.filter(isCrypticSymbol);
  const crypticParams = crypticSymbols.filter((s) => s.kind === "param").length;
  const mechanicalNames = collectMechanicalNames(source, symbols);
  const shortIdentifierOffenders = countShortIdentifiers(source).filter(
    (item) => item.count > options.maxShortRefCount,
  );
  const residueMatches = collectResidueMatches(source);
  const hasProvenanceHeader = hasRestorationProvenanceHeader(source);
  const duplicateProvenanceHeaders = Math.max(
    0,
    countRestorationProvenanceHeaders(source) - 1,
  );
  // A faithful vendored module or a generated boundary facade is code we
  // deliberately did not rewrite — relax the semantic-naming/typing/split
  // checks that would false-positive on a package's own short API names or a
  // wall of `any` stubs. Faithfulness checks (provenance, residue, checkpoint
  // imports, unbound refs, JSX sanity) still apply.
  const vendored =
    options.vendored ||
    isGeneratedFacade(source) ||
    isLegacyVendoredBoundaryFacade(source) ||
    isVendoredDataModule(file, source);
  const checkSplit =
    !options.allowFlat &&
    !vendored &&
    SOURCE_EXT_RE.test(file) &&
    !isIndexFile(file);
  const tooManyExports =
    astFacts.exportCount > options.maxFlatExports &&
    lineCount > SMALL_COHESIVE_MODULE_LINE_LIMIT;
  const semanticImplementationCanStayFlat =
    astFacts.semanticImplementationModule && lineCount <= options.maxFlatLines;
  const splitRequired =
    checkSplit &&
    !semanticImplementationCanStayFlat &&
    !astFacts.semanticButtonModule &&
    !astFacts.semanticThemeModule &&
    !astFacts.semanticCommandMetadataModule &&
    (lineCount > options.maxFlatLines ||
      tooManyExports ||
      astFacts.registryObjectExport);

  if (
    !vendored &&
    SOURCE_EXT_RE.test(file) &&
    !isIndexFile(file) &&
    !isKebabPublicBasename(file)
  ) {
    issues.push({
      code: "non-kebab-filename",
      message:
        `Public file/dir names must be kebab-case (lowercase-dash); ` +
        `'${path.basename(file)}' is not. React component identifiers stay ` +
        `PascalCase, but their files are kebab (Button → button.tsx).`,
      detail: { basename: path.basename(file) },
    });
  }

  if (!vendored && crypticParams > options.maxCrypticParams) {
    issues.push({
      code: "cryptic-params",
      message: `Too many cryptic params: ${crypticParams} > ${options.maxCrypticParams}`,
      detail: symbols
        .filter((s) => isCrypticSymbol(s) && s.kind === "param")
        .slice(0, 25)
        .map((s) => s.id),
    });
  }
  if (!vendored && crypticSymbols.length > options.maxCrypticBindings) {
    issues.push({
      code: "cryptic-bindings",
      message: `Too many cryptic bindings: ${crypticSymbols.length} > ${options.maxCrypticBindings}`,
      detail: crypticSymbols.slice(0, 25).map((s) => `${s.kind}:${s.id}`),
    });
  }
  if (!vendored && shortIdentifierOffenders.length > 0) {
    issues.push({
      code: "short-identifier-density",
      message: `Short identifier references exceed threshold (${options.maxShortRefCount})`,
      detail: shortIdentifierOffenders,
    });
  }
  if (
    !options.allowMechanicalNames &&
    !vendored &&
    mechanicalNames.length > 0
  ) {
    issues.push({
      code: "mechanical-names",
      message: `Generated fallback names remain: ${mechanicalNames.slice(0, 25).join(", ")}`,
      detail: mechanicalNames,
    });
  }
  if (astFacts.duplicateImportNames.length > 0) {
    issues.push({
      code: "duplicate-imported-names",
      message:
        "A named import is imported more than once with different local aliases",
      detail: astFacts.duplicateImportNames,
    });
  }
  if (
    !options.allowMechanicalNames &&
    !vendored &&
    astFacts.mechanicalImportBindings.length > 0
  ) {
    issues.push({
      code: "mechanical-import-bindings",
      message:
        "Mechanical facade import bindings remain; import semantic facade aliases instead",
      detail: astFacts.mechanicalImportBindings,
    });
  }
  if (astFacts.missingRelativeExports.length > 0) {
    issues.push({
      code: "missing-relative-exports",
      message:
        "Relative named imports and re-exports must reference names exported by the target file",
      detail: astFacts.missingRelativeExports,
    });
  }
  if (astFacts.unresolvedRelativeImports.length > 0) {
    issues.push({
      code: "unresolved-relative-imports",
      message: "Relative imports must resolve inside the restored output",
      detail: astFacts.unresolvedRelativeImports,
    });
  }
  if (astFacts.unfinalizedCheckpointImports.length > 0) {
    issues.push({
      code: "unfinalized-checkpoint-imports",
      message:
        "Public final files must not import or re-export hidden mechanical checkpoints",
      detail: astFacts.unfinalizedCheckpointImports,
    });
  }
  if (residueMatches.length > 0) {
    issues.push({
      code: "bundle-residue",
      message: `Bundler/compiler residue remains: ${residueMatches.join(", ")}`,
      detail: residueMatches,
    });
  }
  if (astFacts.invalidJsxTags.length > 0) {
    issues.push({
      code: "invalid-jsx-tags",
      message: `Suspicious lowercase JSX component tags: ${astFacts.invalidJsxTags.join(", ")}`,
      detail: astFacts.invalidJsxTags,
    });
  }
  if (astFacts.unboundJsxTags.length > 0) {
    issues.push({
      code: "unbound-jsx-tags",
      message: `JSX components are referenced without local bindings: ${astFacts.unboundJsxTags.join(", ")}`,
      detail: astFacts.unboundJsxTags,
    });
  }
  if (
    astFacts.unboundIdentifiers.length > 0 &&
    !astFacts.semanticImplementationModule
  ) {
    issues.push({
      code: "unbound-identifiers",
      message: `Identifiers are referenced without local bindings: ${astFacts.unboundIdentifiers.join(", ")}`,
      detail: astFacts.unboundIdentifiers,
    });
  }
  if (!vendored && !options.allowUntyped && astFacts.untypedComponentProps.length > 0) {
    issues.push({
      code: "untyped-component-props",
      message: `Exported component props need explicit TS types: ${astFacts.untypedComponentProps.join(", ")}`,
      detail: astFacts.untypedComponentProps,
    });
  }
  if (
    !vendored &&
    !options.allowUntyped &&
    astFacts.untypedPublicFunctionParams.length > 0
  ) {
    issues.push({
      code: "untyped-public-function-params",
      message: `Exported function params need explicit TS types: ${astFacts.untypedPublicFunctionParams.join(", ")}`,
      detail: astFacts.untypedPublicFunctionParams,
    });
  }
  if (astFacts.misleadingHookExports.length > 0) {
    issues.push({
      code: "misleading-hook-exports",
      message: `Hook-shaped exports must be hooks, not React Context values: ${astFacts.misleadingHookExports.join(", ")}`,
      detail: astFacts.misleadingHookExports,
    });
  }
  if (!vendored && astFacts.publicCrypticNames.length > 0) {
    issues.push({
      code: "public-cryptic-names",
      message: `Public exports still use cryptic names: ${astFacts.publicCrypticNames.join(", ")}`,
      detail: astFacts.publicCrypticNames,
    });
  }
  if (
    options.requireProvenanceHeader &&
    !hasProvenanceHeader &&
    !isGeneratedBarrelFile(file)
  ) {
    issues.push({
      code: "missing-provenance-header",
      message:
        "Public restored files must start with // Restored from ref/webview/assets/<chunk>.js",
    });
  }
  if (duplicateProvenanceHeaders > 0) {
    issues.push({
      code: "duplicate-provenance-headers",
      message: `Restoration provenance header is repeated ${duplicateProvenanceHeaders + 1} times`,
      detail: { count: duplicateProvenanceHeaders + 1 },
    });
  }
  if (splitRequired) {
    issues.push({
      code: "split-required",
      message:
        `Flat deliverable still needs splitting: ${lineCount} lines, ` +
        `${astFacts.exportCount} export(s), registry=${astFacts.registryObjectExport}`,
    });
  }

  return {
    file,
    lineCount,
    exportCount: astFacts.exportCount,
    registryObjectExport: astFacts.registryObjectExport,
    crypticParams,
    crypticBindings: crypticSymbols.length,
    shortIdentifierOffenders,
    mechanicalNames,
    duplicateImportNames: astFacts.duplicateImportNames,
    mechanicalImportBindings: astFacts.mechanicalImportBindings,
    missingRelativeExports: astFacts.missingRelativeExports,
    unresolvedRelativeImports: astFacts.unresolvedRelativeImports,
    unfinalizedCheckpointImports: astFacts.unfinalizedCheckpointImports,
    invalidJsxTags: astFacts.invalidJsxTags,
    unboundJsxTags: astFacts.unboundJsxTags,
    unboundIdentifiers: astFacts.unboundIdentifiers,
    untypedComponentProps: astFacts.untypedComponentProps,
    untypedPublicFunctionParams: astFacts.untypedPublicFunctionParams,
    misleadingHookExports: astFacts.misleadingHookExports,
    publicCrypticNames: astFacts.publicCrypticNames,
    hasProvenanceHeader,
    duplicateProvenanceHeaders,
    residueMatches,
    splitRequired,
    issues,
  };
}

function collectFiles(input: string): string[] {
  const stat = fs.statSync(input);
  if (stat.isFile()) return [input];
  const out: string[] = [];
  const walk = (dir: string) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (
        entry.name === ".deobfuscate-javascript" ||
        entry.name === "node_modules"
      )
        continue;
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (SOURCE_EXT_RE.test(entry.name)) {
        out.push(full);
      }
    }
  };
  walk(input);
  return out.sort();
}

function emptyReport(
  file: string,
  issues: QualityGateIssue[],
): FileQualityReport {
  return {
    file,
    lineCount: 0,
    exportCount: 0,
    registryObjectExport: false,
    crypticParams: 0,
    crypticBindings: 0,
    shortIdentifierOffenders: [],
    mechanicalNames: [],
    duplicateImportNames: [],
    mechanicalImportBindings: [],
    missingRelativeExports: [],
    unresolvedRelativeImports: [],
    unfinalizedCheckpointImports: [],
    invalidJsxTags: [],
    unboundJsxTags: [],
    unboundIdentifiers: [],
    untypedComponentProps: [],
    untypedPublicFunctionParams: [],
    misleadingHookExports: [],
    publicCrypticNames: [],
    hasProvenanceHeader: false,
    duplicateProvenanceHeaders: 0,
    residueMatches: [],
    splitRequired: false,
    issues,
  };
}

/**
 * Run `prettier --check` once over the whole input and turn every unformatted
 * file into a gate issue. A single invocation (vs per-file) keeps the check
 * cheap on a large tree. Degrades gracefully when prettier is unavailable —
 * we cannot positively identify unformatted files, so we soft-skip rather than
 * fail the gate on a missing toolchain.
 */
export function checkFormatting(
  input: string,
  runCheck: (p: string) => { ok: boolean; stdout: string; stderr: string } = (
    p,
  ) => formatPath(p, { check: true }),
): FileQualityReport[] {
  const res = runCheck(input);
  if (res.ok) return []; // everything is prettier-clean
  const combined = `${res.stdout}\n${res.stderr}`;
  // prettier --check prints `[warn] <path>` per unformatted file, plus a
  // `[warn] Code style issues found in N files.` summary line we must exclude.
  const offenders: string[] = [];
  for (const line of combined.split("\n")) {
    const m = line.match(/^\[warn\]\s+(.+?)\s*$/);
    if (!m) continue;
    const p = m[1]!;
    if (/code style issues/i.test(p) || !SOURCE_EXT_RE.test(p)) continue;
    offenders.push(p);
  }
  if (offenders.length === 0) {
    // No file paths surfaced: prettier likely isn't installed/reachable.
    // Soft-skip with a single advisory note (not a hard gate failure).
    console.error(
      `[quality-gate] prettier --check could not run (${(res.stderr || res.stdout || "no output").trim().slice(0, 200)}); skipping format check`,
    );
    return [];
  }
  return offenders.map((file) =>
    emptyReport(file, [
      {
        code: "unformatted",
        message:
          "File is not prettier-formatted. Run scripts/format.ts on it (promotion formats deliverables automatically).",
      },
    ]),
  );
}

function parseJsonFile<T>(filePath: string): T {
  return JSON.parse(fs.readFileSync(filePath, "utf-8")) as T;
}

function manifestFiles(
  manifest: unknown,
): Array<[string, FullRestorationManifestFile]> {
  if (
    typeof manifest !== "object" ||
    manifest == null ||
    !("files" in manifest)
  ) {
    return [];
  }
  const files = (manifest as { files?: unknown }).files;
  if (Array.isArray(files)) {
    return files
      .filter((file): file is FullRestorationManifestFile => {
        return typeof file === "object" && file != null;
      })
      .map((file) => [file.basename ?? "", file]);
  }
  if (typeof files === "object" && files != null) {
    return Object.entries(files).filter(
      (entry): entry is [string, FullRestorationManifestFile] =>
        typeof entry[1] === "object" && entry[1] != null,
    );
  }
  return [];
}

function publicTargetPaths(entry: FullRestorationImportMapEntry): string[] {
  return [
    entry.publicFile,
    entry.publicDirectory,
    entry.splitDirectory,
    entry.restored,
    entry.file,
    ...Object.keys(entry.publicFacades ?? {}),
    ...Object.keys(entry.dependencyBoundaryFacades ?? {}),
  ].filter((value): value is string => typeof value === "string");
}

function resolvePublicTarget(targetDir: string, publicTarget: string): string {
  if (path.isAbsolute(publicTarget)) return publicTarget;
  const fromTargetDir = path.resolve(targetDir, publicTarget);
  if (fs.existsSync(fromTargetDir)) return fromTargetDir;
  const fromCwd = path.resolve(publicTarget);
  if (fs.existsSync(fromCwd)) return fromCwd;
  const fromSiblingRoot = path.resolve(path.dirname(targetDir), publicTarget);
  if (fs.existsSync(fromSiblingRoot)) return fromSiblingRoot;
  return fromTargetDir;
}

function addExistingBoundaryFile(
  allowedFiles: Set<string>,
  targetDir: string,
  target: string,
): void {
  const resolvedTarget = resolvePublicTarget(targetDir, target);
  if (!fs.existsSync(resolvedTarget)) return;
  const stat = fs.statSync(resolvedTarget);
  if (stat.isFile()) {
    allowedFiles.add(path.resolve(resolvedTarget));
  }
}

function publicEntryForBasename(
  importMap: FullRestorationImportMap,
  basename: string,
): FullRestorationImportMapEntry | undefined {
  const publicOutput = importMap.publicOutputs?.[basename];
  if (publicOutput) return publicOutput;

  const chunk = importMap.chunks?.[basename];
  if (chunk) return chunk;

  const boundary = importMap.boundaries?.[basename];
  if (boundary) return boundary;

  const legacyRuntimeSections: Array<{
    prefix: string;
    section: keyof Pick<
      FullRestorationImportMap,
      "appScope" | "vscodeApi" | "src" | "statsig"
    >;
    vendor: string;
  }> = [
    { prefix: "app-scope", section: "appScope", vendor: "runtime" },
    { prefix: "vscode-api", section: "vscodeApi", vendor: "runtime" },
    { prefix: "src", section: "src", vendor: "zod" },
    { prefix: "statsig", section: "statsig", vendor: "statsig" },
  ];

  for (const { prefix, section, vendor } of legacyRuntimeSections) {
    if (basename === prefix || basename.startsWith(`${prefix}-`)) {
      const entry = importMap[section];
      if (!entry) return undefined;
      return { ...entry, boundary: true, vendor: entry.vendor ?? vendor };
    }
  }

  return undefined;
}

function isBoundaryLikeEntry(entry: FullRestorationImportMapEntry): boolean {
  return Boolean(
    entry.boundary ||
      entry.dependencyBoundary ||
      Object.keys(entry.dependencyBoundaryFacades ?? {}).length > 0 ||
      Object.keys(entry.publicFacades ?? {}).length > 0,
  );
}

function hasStage3AcceptanceRecord(
  manifestFile: FullRestorationManifestFile,
  entry: FullRestorationImportMapEntry,
): boolean {
  if (manifestFile.stages?.finalized === true) return true;
  if (entry.stage3Accepted === true) return true;
  if (entry.status) {
    const status = entry.status.toLowerCase();
    if (
      [
        "accepted",
        "finalized",
        "semantic-accepted",
        "stage3-accepted",
        "stage-e-pass",
      ].includes(status)
    ) {
      return true;
    }
  }
  return (
    nestedAcceptancePass(entry.acceptance) ||
    nestedAcceptancePass(entry.acceptanceReview) ||
    nestedAcceptancePass(entry.stage3)
  );
}

function nestedAcceptancePass(value: unknown): boolean {
  if (typeof value === "boolean") return value;
  if (typeof value !== "object" || value == null) return false;
  const record = value as Record<string, unknown>;
  if (record.accepted === true || record.passed === true) return true;
  const status = record.status ?? record.verdict;
  return (
    typeof status === "string" &&
    ["accepted", "pass", "passed", "stage-e-pass"].includes(
      status.toLowerCase(),
    )
  );
}

function sourceFilesForPublicTargets(
  targetDir: string,
  targets: string[],
): string[] {
  const files = new Set<string>();
  for (const target of targets) {
    const resolvedTarget = resolvePublicTarget(targetDir, target);
    if (!fs.existsSync(resolvedTarget)) continue;
    const stat = fs.statSync(resolvedTarget);
    if (stat.isFile() && SOURCE_EXT_RE.test(resolvedTarget)) {
      files.add(path.resolve(resolvedTarget));
    } else if (stat.isDirectory()) {
      for (const file of collectFiles(resolvedTarget)) {
        files.add(path.resolve(file));
      }
    }
  }
  return [...files].sort();
}

function inspectAppFeatureTargetFiles(files: string[]): QualityGateIssue[] {
  const tsNoCheck: string[] = [];
  const declareFacades: string[] = [];
  const emptyPlaceholders: string[] = [];

  for (const file of files) {
    const source = fs.readFileSync(file, "utf-8");
    if (/^\s*\/\/\s*@ts-nocheck\b/m.test(source)) tsNoCheck.push(file);
    if (
      /\bexport\s+declare\s+const\b/.test(source) ||
      isGeneratedFacade(source)
    ) {
      declareFacades.push(file);
    }
    if (isEmptyExportPlaceholder(source)) emptyPlaceholders.push(file);
  }

  const issues: QualityGateIssue[] = [];
  if (tsNoCheck.length > 0) {
    issues.push({
      code: "full-restoration-app-feature-ts-nocheck",
      message:
        "App/feature chunks must not finish deep restore with @ts-nocheck",
      detail: tsNoCheck,
    });
  }
  if (declareFacades.length > 0) {
    issues.push({
      code: "full-restoration-app-feature-facade",
      message:
        "App/feature chunks must not finish deep restore as typed facade stubs",
      detail: declareFacades,
    });
  }
  if (emptyPlaceholders.length > 0) {
    issues.push({
      code: "full-restoration-app-feature-empty-placeholder",
      message:
        "App/feature chunks must not finish deep restore as empty export placeholders",
      detail: emptyPlaceholders,
    });
  }
  return issues;
}

function isEmptyExportPlaceholder(source: string): boolean {
  const stripped = source
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\/\/[^\r\n]*/g, "")
    .trim();
  return stripped === "export {};" || stripped === "export {}";
}

export function collectBoundaryCheckpointImportFiles(
  targetDir: string,
): Set<string> {
  const allowedFiles = new Set<string>();
  if (!fs.existsSync(targetDir) || !fs.statSync(targetDir).isDirectory()) {
    return allowedFiles;
  }

  const importMapPath = path.join(targetDir, "IMPORT_MAP.json");
  if (!fs.existsSync(importMapPath)) return allowedFiles;

  const importMap = parseJsonFile<FullRestorationImportMap>(importMapPath);
  for (const entry of Object.values(importMap.publicOutputs ?? {})) {
    if (entry.dependencyBoundary) {
      for (const target of publicTargetPaths(entry)) {
        addExistingBoundaryFile(allowedFiles, targetDir, target);
      }
    }
    for (const target of Object.keys(entry.dependencyBoundaryFacades ?? {})) {
      addExistingBoundaryFile(allowedFiles, targetDir, target);
    }
  }
  for (const entry of Object.values(importMap.boundaries ?? {})) {
    if (entry.boundary && isKnownTerminalBoundaryChunk("", entry)) {
      for (const target of publicTargetPaths(entry)) {
        addExistingBoundaryFile(allowedFiles, targetDir, target);
      }
    }
  }

  return allowedFiles;
}

/** Stripped basenames of every flat checkpoint the batch executor wrote. */
function checkpointBasenames(targetDir: string): Set<string> {
  const dir = path.join(
    targetDir,
    ".deobfuscate-javascript",
    "_full",
    "checkpoints",
  );
  const out = new Set<string>();
  if (!fs.existsSync(dir)) return out;
  let entries: fs.Dirent[];
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const entry of entries) {
    if (entry.isFile() && SOURCE_EXT_RE.test(entry.name)) {
      out.add(entry.name.replace(SOURCE_EXT_RE, ""));
    }
  }
  return out;
}

/**
 * The anti-stall checks: a whole-tree restore that built mechanical checkpoints
 * but never promoted them into the public tree (the "checkpoints full, restored/
 * empty" failure), and the structural "a promoted public file is still sitting in
 * a hash-named chunk directory" failure. Computable from the manifest + the
 * staging tree alone — they fire even before IMPORT_MAP.json exists, which is the
 * exact state a stalled restore is left in.
 */
function analyzeOrganizePromoteState(
  targetDir: string,
  manifest: unknown,
  opts: { allowOrganizeIncomplete?: boolean },
): QualityGateIssue[] {
  const issues: QualityGateIssue[] = [];
  const checkpoints = checkpointBasenames(targetDir);

  const localBasenames = new Set<string>();
  const promoted = new Set<string>();
  const finalizedNotPromoted: string[] = [];
  for (const [fallback, file] of manifestFiles(manifest)) {
    if (file.kind !== "local" && file.kind !== "oversized-local") continue;
    const basename = file.basename ?? fallback;
    if (!basename) continue;
    localBasenames.add(basename);
    const stages = file.stages ?? {};
    if (stages.faced) continue; // a facade boundary is not promotable
    if (stages.promoted) promoted.add(basename);
    else if (stages.finalized) finalizedNotPromoted.push(basename);
  }

  // The "drain" checks only apply once the batch executor has run (checkpoints
  // exist). A restore that never used it — or one whose chunks are all promoted —
  // is unaffected. `--allow-organize-incomplete` suppresses them for in-progress runs.
  if (checkpoints.size > 0 && !opts.allowOrganizeIncomplete) {
    const undrained = [...checkpoints].filter((b) => !promoted.has(b)).sort();
    if (undrained.length > 0) {
      issues.push({
        code: "full-restoration-checkpoints-not-drained",
        message:
          "Mechanical checkpoints exist under _full/checkpoints/ but were not promoted into the public tree (restored/ left empty). Run plan-organize.ts then promote-organized.ts until every chunk is promoted, or pass --allow-organize-incomplete for an intermediate run.",
        detail: {
          checkpoints: checkpoints.size,
          promoted: promoted.size,
          undrained: undrained.slice(0, 50),
        },
      });
    }
    if (finalizedNotPromoted.length > 0) {
      issues.push({
        code: "full-restoration-organize-incomplete",
        message:
          "Chunks reached the finalize stage but were never promoted to their semantic path. Promote them (promote-organized.ts) before declaring the restore complete.",
        detail: finalizedNotPromoted.sort().slice(0, 50),
      });
    }
  }

  // Structural: a promoted public file must not live inside a directory still
  // named after its hash chunk basename (e.g. restored/button-bq66r8jD/button.tsx).
  // Matching against real manifest basenames avoids false positives on semantic
  // dirs like composer-controller/.
  if (localBasenames.size > 0) {
    const hashDirFiles: string[] = [];
    let publicFiles: string[];
    try {
      publicFiles = collectFiles(targetDir);
    } catch {
      publicFiles = [];
    }
    for (const file of publicFiles) {
      const rel = path.relative(targetDir, file);
      const segments = rel.split(path.sep).slice(0, -1); // dirs only
      if (segments.some((seg) => localBasenames.has(seg))) {
        hashDirFiles.push(rel);
      }
    }
    if (hashDirFiles.length > 0) {
      issues.push({
        code: "full-restoration-public-file-in-hash-dir",
        message:
          "Promoted public files must live in semantic kebab-case domain folders, not directories still named after the hash chunk basename.",
        detail: hashDirFiles.sort().slice(0, 50),
      });
    }
  }

  return issues;
}

export function analyzeFullRestorationCoverage(
  targetDir: string,
  coverageOpts: { allowOrganizeIncomplete?: boolean } = {},
): FileQualityReport[] {
  const stat = fs.statSync(targetDir);
  if (!stat.isDirectory()) return [];

  const manifestPath = path.join(
    targetDir,
    ".deobfuscate-javascript",
    "_full",
    "manifest.json",
  );
  if (!fs.existsSync(manifestPath)) return [];

  const manifest = parseJsonFile<unknown>(manifestPath);
  const importMapPath = path.join(targetDir, "IMPORT_MAP.json");
  const issues: QualityGateIssue[] = [];
  // Anti-stall checks run first so they fire even when IMPORT_MAP.json is absent
  // — the exact state a checkpoints-only stall is left in.
  issues.push(
    ...analyzeOrganizePromoteState(targetDir, manifest, coverageOpts),
  );
  if (!fs.existsSync(importMapPath)) {
    issues.push({
      code: "missing-import-map",
      message:
        "Full-restoration manifest exists, but IMPORT_MAP.json is missing",
      detail: { manifest: manifestPath },
    });
    return [emptyReport(importMapPath, issues)];
  }

  const importMap = parseJsonFile<FullRestorationImportMap>(importMapPath);
  const missingLocalChunks: string[] = [];
  const oversizedLocalChunks: string[] = [];
  const entriesWithoutTargets: string[] = [];
  const missingPublicTargets: Array<{ basename: string; target: string }> = [];
  const appFeatureBoundaries: string[] = [];
  const mechanicalAppFeatures: string[] = [];
  const unacceptedAppFeatures: string[] = [];
  const npmResolvableFacades: Array<{ basename: string; specifier: string }> =
    [];
  const targetInspectionIssues: QualityGateIssue[] = [];

  for (const [fallbackBasename, file] of manifestFiles(manifest)) {
    if (file.kind !== "local" && file.kind !== "oversized-local") continue;
    const basename = file.basename ?? fallbackBasename;
    if (!basename) continue;
    if (file.kind === "oversized-local") {
      oversizedLocalChunks.push(basename);
    }
    const publicEntry = publicEntryForBasename(importMap, basename);
    if (!publicEntry) {
      missingLocalChunks.push(basename);
      continue;
    }

    const isAppFeature = isLikelyAppChunk(basename);
    const isKnownTerminalBoundary = isKnownTerminalBoundaryChunk(
      basename,
      publicEntry,
    );
    const isBoundaryLike = isBoundaryLikeEntry(publicEntry);
    if (isAppFeature && isBoundaryLike && !isKnownTerminalBoundary) {
      appFeatureBoundaries.push(basename);
    }
    if (
      isAppFeature &&
      publicEntry.status?.toLowerCase() === "mechanical-readable-restored"
    ) {
      mechanicalAppFeatures.push(basename);
    }
    if (
      isAppFeature &&
      !isKnownTerminalBoundary &&
      !hasStage3AcceptanceRecord(file, publicEntry)
    ) {
      unacceptedAppFeatures.push(basename);
    }

    // A boundary that IS a recognised third-party npm package should be a bare
    // re-export shim, not a generated `any`-facade. Flag any still-`any` facade
    // whose IMPORT_MAP `vendor` names a resolvable package.
    if (isBoundaryLike && !isAppFeature) {
      const boundary = classifyBoundary(basename, publicEntry);
      if (boundary.kind === "vendor-npm") {
        for (const target of publicTargetPaths(publicEntry)) {
          const resolved = resolvePublicTarget(targetDir, target);
          if (
            fs.existsSync(resolved) &&
            isGeneratedFacade(fs.readFileSync(resolved, "utf-8"))
          ) {
            npmResolvableFacades.push({
              basename,
              specifier: boundary.specifier ?? "<npm-specifier>",
            });
            break;
          }
        }
      }
    }

    if (publicEntry.dependencyBoundary && !isAppFeature) continue;
    const targets = publicTargetPaths(publicEntry);
    if (targets.length === 0) {
      entriesWithoutTargets.push(basename);
      continue;
    }
    for (const target of targets) {
      const resolvedTarget = resolvePublicTarget(targetDir, target);
      if (!fs.existsSync(resolvedTarget)) {
        missingPublicTargets.push({ basename, target });
      }
    }
    if (isAppFeature && !isKnownTerminalBoundary) {
      targetInspectionIssues.push(
        ...inspectAppFeatureTargetFiles(
          sourceFilesForPublicTargets(targetDir, targets),
        ),
      );
    }
  }

  if (oversizedLocalChunks.length > 0) {
    issues.push({
      code: "full-restoration-oversized-local",
      message:
        "Deep/full restoration cannot leave reachable local chunks as oversized-local",
      detail: oversizedLocalChunks.sort(),
    });
  }
  if (missingLocalChunks.length > 0) {
    issues.push({
      code: "full-restoration-missing-public-output",
      message:
        "Reachable local chunks are missing public outputs in IMPORT_MAP.json",
      detail: missingLocalChunks.sort(),
    });
  }
  if (entriesWithoutTargets.length > 0) {
    issues.push({
      code: "full-restoration-missing-public-target",
      message:
        "IMPORT_MAP.json entries must name a public file, directory, facade, or dependency boundary",
      detail: entriesWithoutTargets.sort(),
    });
  }
  if (missingPublicTargets.length > 0) {
    issues.push({
      code: "full-restoration-public-target-not-found",
      message: "IMPORT_MAP.json public targets do not exist on disk",
      detail: missingPublicTargets.sort(
        (a, b) =>
          a.basename.localeCompare(b.basename) ||
          a.target.localeCompare(b.target),
      ),
    });
  }
  if (appFeatureBoundaries.length > 0) {
    issues.push({
      code: "full-restoration-app-feature-boundary",
      message:
        "App/feature chunks must be semantically restored, not marked as boundary/facade",
      detail: appFeatureBoundaries.sort(),
    });
  }
  if (npmResolvableFacades.length > 0) {
    issues.push({
      code: "full-restoration-npm-boundary-not-resolved",
      message:
        "Third-party npm boundaries must be bare re-export shims (make-facade.ts --reexport <specifier>), not `any`-facades",
      detail: npmResolvableFacades.sort((a, b) =>
        a.basename.localeCompare(b.basename),
      ),
    });
  }
  if (mechanicalAppFeatures.length > 0) {
    issues.push({
      code: "full-restoration-mechanical-app-feature",
      message:
        "App/feature chunks cannot finish deep restore as mechanical-readable checkpoints",
      detail: mechanicalAppFeatures.sort(),
    });
  }
  if (unacceptedAppFeatures.length > 0) {
    issues.push({
      code: "full-restoration-app-feature-not-accepted",
      message:
        "App/feature chunks need manifest.stages.finalized=true or an explicit Stage 3 acceptance record",
      detail: unacceptedAppFeatures.sort(),
    });
  }
  for (const issue of targetInspectionIssues) {
    const existing = issues.find((item) => item.code === issue.code);
    if (
      existing &&
      Array.isArray(existing.detail) &&
      Array.isArray(issue.detail)
    ) {
      existing.detail = [...existing.detail, ...issue.detail].sort();
    } else {
      issues.push(issue);
    }
  }

  return issues.length > 0 ? [emptyReport(importMapPath, issues)] : [];
}

function printHumanReport(reports: FileQualityReport[]): void {
  for (const report of reports) {
    if (report.issues.length === 0) {
      console.error(`quality-gate: PASS ${report.file}`);
      continue;
    }
    console.error(`quality-gate: FAIL ${report.file}`);
    for (const issue of report.issues) {
      console.error(`  [${issue.code}] ${issue.message}`);
      if (issue.detail !== undefined) {
        console.error(`    ${JSON.stringify(issue.detail)}`);
      }
    }
  }
}

const USAGE =
  "Usage: bun scripts/quality-gate.ts <file-or-dir> [--json] [--allow-flat] [--allow-mechanical-names] [--allow-missing-provenance] [--allow-untyped] [--vendored] [--allow-organize-incomplete] [--check-format] " +
  "[--max-cryptic-params N] [--max-cryptic-bindings N] " +
  "[--max-short-ref-count N] [--max-flat-lines N] [--max-flat-exports N]";

function parseNonNegativeInt(
  raw: string | undefined,
  label: string,
  fallback: number,
): number {
  if (raw === undefined) return fallback;
  const parsed = parseInt(raw, 10);
  if (!Number.isFinite(parsed) || parsed < 0) {
    console.error(`${label} must be a non-negative integer`);
    process.exit(64);
  }
  return parsed;
}

async function main(): Promise<void> {
  let parsed;
  try {
    parsed = parseArgs({
      args: process.argv.slice(2),
      options: {
        json: { type: "boolean", default: false },
        "allow-flat": { type: "boolean", default: false },
        "allow-mechanical-names": { type: "boolean", default: false },
        "allow-missing-provenance": { type: "boolean", default: false },
        "allow-untyped": { type: "boolean", default: false },
        vendored: { type: "boolean", default: false },
        "allow-organize-incomplete": { type: "boolean", default: false },
        "check-format": { type: "boolean", default: false },
        "max-cryptic-params": { type: "string" },
        "max-cryptic-bindings": { type: "string" },
        "max-short-ref-count": { type: "string" },
        "max-flat-lines": { type: "string" },
        "max-flat-exports": { type: "string" },
      },
      allowPositionals: true,
    });
  } catch (err) {
    console.error(USAGE);
    console.error((err as Error).message);
    process.exit(64);
  }
  const { values, positionals } = parsed;
  if (positionals.length === 0) {
    console.error(USAGE);
    process.exit(64);
  }

  const input = positionals[0]!;
  if (!fs.existsSync(input)) {
    console.error(`input not found: ${input}`);
    process.exit(1);
  }

  const options: QualityGateOptions = {
    maxCrypticParams: parseNonNegativeInt(
      values["max-cryptic-params"],
      "--max-cryptic-params",
      DEFAULT_OPTIONS.maxCrypticParams,
    ),
    maxCrypticBindings: parseNonNegativeInt(
      values["max-cryptic-bindings"],
      "--max-cryptic-bindings",
      DEFAULT_OPTIONS.maxCrypticBindings,
    ),
    maxShortRefCount: parseNonNegativeInt(
      values["max-short-ref-count"],
      "--max-short-ref-count",
      DEFAULT_OPTIONS.maxShortRefCount,
    ),
    maxFlatLines: parseNonNegativeInt(
      values["max-flat-lines"],
      "--max-flat-lines",
      DEFAULT_OPTIONS.maxFlatLines,
    ),
    maxFlatExports: parseNonNegativeInt(
      values["max-flat-exports"],
      "--max-flat-exports",
      DEFAULT_OPTIONS.maxFlatExports,
    ),
    allowFlat: values["allow-flat"] ?? false,
    allowMechanicalNames: values["allow-mechanical-names"] ?? false,
    requireProvenanceHeader: !(values["allow-missing-provenance"] ?? false),
    allowUntyped: values["allow-untyped"] ?? false,
    vendored: values["vendored"] ?? false,
    allowedCheckpointImportFiles: collectBoundaryCheckpointImportFiles(input),
  };

  let files: string[];
  try {
    files = collectFiles(input);
  } catch (err) {
    console.error(`failed to read input: ${(err as Error).message}`);
    process.exit(1);
  }

  const reports = files.map((file) =>
    analyzeSource(fs.readFileSync(file, "utf-8"), file, options),
  );
  reports.push(
    ...analyzeFullRestorationCoverage(input, {
      allowOrganizeIncomplete: values["allow-organize-incomplete"] ?? false,
    }),
  );
  if (values["check-format"]) {
    reports.push(...checkFormatting(input));
  }
  if (values.json) {
    process.stdout.write(JSON.stringify(reports, null, 2) + "\n");
  } else {
    printHumanReport(reports);
  }
  process.exit(reports.some((report) => report.issues.length > 0) ? 1 : 0);
}

if (import.meta.main) {
  await main();
}
