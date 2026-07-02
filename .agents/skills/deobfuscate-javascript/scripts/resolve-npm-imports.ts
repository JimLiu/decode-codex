import * as fs from "node:fs";
import { parseArgs } from "node:util";
import * as parser from "@babel/parser";
import babelTraverse, { type NodePath } from "@babel/traverse";
import babelGenerator from "@babel/generator";
import * as t from "@babel/types";

const traverse = ((
  babelTraverse as unknown as { default?: typeof babelTraverse }
).default ?? babelTraverse) as typeof babelTraverse;
const generate = ((
  babelGenerator as unknown as { default?: typeof babelGenerator }
).default ?? babelGenerator) as typeof babelGenerator;

export const PARSER_PLUGINS: parser.ParserPlugin[] = [
  "jsx",
  "classProperties",
  "classPrivateProperties",
  "classPrivateMethods",
  "dynamicImport",
  "importMeta",
  "objectRestSpread",
  "topLevelAwait",
];

export function parseSource(source: string): t.File {
  return parser.parse(source, {
    sourceType: "unambiguous",
    errorRecovery: true,
    allowReturnOutsideFunction: true,
    allowAwaitOutsideFunction: true,
    allowImportExportEverywhere: true,
    allowUndeclaredExports: true,
    plugins: PARSER_PLUGINS,
  });
}

export type ImportStyle = "default" | "named" | "namespace";

type AliasRule = {
  package: string;
  style: ImportStyle;
  /** When the local binding name should change after resolving (e.g. `_React` → `React`). */
  renameLocalTo?: string;
  /** When the named-import name differs from the local binding (rare). */
  importedAs?: string;
};

type ChunkRule = {
  package: string;
  /** When the chunk has a default export — name to use if the local alias is unknown. */
  defaultName?: string;
  /** When `true`, *every* specifier from this chunk is a named import. */
  namedOnly?: boolean;
};

/**
 * Known npm chunks by basename. A chunk path like `./clsx-DDuZWq6Y.js`
 * gets its basename stripped of the 6–12-char hash suffix; the result is
 * looked up here. High confidence — the bundler names chunks after the
 * package's entry module.
 */
export const CHUNK_NAME_REGISTRY: Record<string, ChunkRule> = {
  clsx: { package: "clsx", defaultName: "clsx" },
  classnames: { package: "classnames", defaultName: "classnames" },
  tslib: { package: "tslib", namedOnly: true },
  // Some bundlers emit `tslib.es6-HASH.js` as the chunk name.
  "tslib.es6": { package: "tslib", namedOnly: true },
  react: { package: "react", defaultName: "React" },
  "react-dom": { package: "react-dom", defaultName: "ReactDOM" },
  "react-is": { package: "react-is", namedOnly: true },
  "jsx-runtime": { package: "react/jsx-runtime", namedOnly: true },
  "jsx-dev-runtime": { package: "react/jsx-dev-runtime", namedOnly: true },
  "use-sync-external-store-with-selector": {
    package: "use-sync-external-store/shim/with-selector",
    namedOnly: true,
  },
  // @dnd-kit/* chunks usually ship as `core.esm`, `sortable.esm`, `utilities.esm`.
  "core.esm": { package: "@dnd-kit/core", namedOnly: true },
  "sortable.esm": { package: "@dnd-kit/sortable", namedOnly: true },
  "utilities.esm": { package: "@dnd-kit/utilities", namedOnly: true },
  // framer-motion chunks
  AnimatePresence: { package: "framer-motion", namedOnly: true },
  proxy: { package: "framer-motion", namedOnly: true },
  // react-intl
  "react-intl": { package: "react-intl", namedOnly: true },
  // Jotai
  jotai: { package: "jotai", namedOnly: true },
  "jotai-react": { package: "jotai", namedOnly: true },
  // react-colorful
  "react-colorful": { package: "react-colorful", namedOnly: true },
  // markdown / parsers
  "marked.esm": { package: "marked", namedOnly: true },
  marked: { package: "marked", namedOnly: true },
  // Mermaid and search vendor chunks surfaced in Codex.app webview bundles.
  fuse: { package: "fuse.js", defaultName: "Fuse" },
  "rough.esm": { package: "roughjs", defaultName: "rough" },
  "cytoscape.esm": { package: "cytoscape", defaultName: "cytoscape" },
  // floating-ui — the common chunk basenames are dot-delimited.
  "floating-ui.react-dom": {
    package: "@floating-ui/react-dom",
    namedOnly: true,
  },
  "floating-ui.dom": { package: "@floating-ui/dom", namedOnly: true },
  "floating-ui.core": { package: "@floating-ui/core", namedOnly: true },
  "floating-ui.utils": { package: "@floating-ui/utils", namedOnly: true },
  "floating-ui.react": { package: "@floating-ui/react", namedOnly: true },
  // Statsig SDKs
  statsig: { package: "@statsig/js-client", namedOnly: true },
  // analytics.js / segment
  "ajs-destination": {
    package: "@segment/analytics.js-integration",
    namedOnly: true,
  },
};

/**
 * Known aliases — when a specifier's *local* binding matches one of these,
 * it's resolved to the corresponding npm package. Used as a fallback when
 * the chunk basename is project-local (e.g. `./shared`).
 *
 * The `renameLocalTo` field is for cases like `_React` (Rollup's CJS-to-ESM
 * shim wrapper for React) — after resolving, references to `_React` in the
 * file should be rewritten to `React`.
 */
export const ALIAS_REGISTRY: Record<string, AliasRule> = {
  // React default — covers `_React = toESM(React())` shim chain.
  React: { package: "react", style: "default" },
  _React: { package: "react", style: "default", renameLocalTo: "React" },
  ReactDOM: { package: "react-dom", style: "default" },

  // React named — hooks
  useState: { package: "react", style: "named" },
  useEffect: { package: "react", style: "named" },
  useLayoutEffect: { package: "react", style: "named" },
  useMemo: { package: "react", style: "named" },
  useCallback: { package: "react", style: "named" },
  useRef: { package: "react", style: "named" },
  useContext: { package: "react", style: "named" },
  useReducer: { package: "react", style: "named" },
  useImperativeHandle: { package: "react", style: "named" },
  useId: { package: "react", style: "named" },
  useTransition: { package: "react", style: "named" },
  useDeferredValue: { package: "react", style: "named" },
  useSyncExternalStore: { package: "react", style: "named" },
  useInsertionEffect: { package: "react", style: "named" },
  useDebugValue: { package: "react", style: "named" },

  // React named — core API
  memo: { package: "react", style: "named" },
  forwardRef: { package: "react", style: "named" },
  createContext: { package: "react", style: "named" },
  createElement: { package: "react", style: "named" },
  cloneElement: { package: "react", style: "named" },
  isValidElement: { package: "react", style: "named" },
  Fragment: { package: "react", style: "named" },
  Suspense: { package: "react", style: "named" },
  StrictMode: { package: "react", style: "named" },
  Children: { package: "react", style: "named" },
  Component: { package: "react", style: "named" },
  PureComponent: { package: "react", style: "named" },
  lazy: { package: "react", style: "named" },
  startTransition: { package: "react", style: "named" },

  // react/jsx-runtime
  jsx: { package: "react/jsx-runtime", style: "named" },
  jsxs: { package: "react/jsx-runtime", style: "named" },
  jsxDEV: { package: "react/jsx-dev-runtime", style: "named" },

  // react-dom
  createPortal: { package: "react-dom", style: "named" },
  flushSync: { package: "react-dom", style: "named" },
  createRoot: { package: "react-dom/client", style: "named" },
  hydrateRoot: { package: "react-dom/client", style: "named" },

  // react-is
  isFragment: { package: "react-is", style: "named" },

  // use-sync-external-store
  useSyncExternalStoreWithSelector: {
    package: "use-sync-external-store/shim/with-selector",
    style: "named",
  },

  // react-colorful
  HexColorPicker: { package: "react-colorful", style: "named" },

  // clsx / classnames default exports
  clsx: { package: "clsx", style: "default" },
  classnames: { package: "classnames", style: "default" },

  // tslib — named helpers
  __extends: { package: "tslib", style: "named" },
  __assign: { package: "tslib", style: "named" },
  __rest: { package: "tslib", style: "named" },
  __decorate: { package: "tslib", style: "named" },
  __awaiter: { package: "tslib", style: "named" },
  __generator: { package: "tslib", style: "named" },
  __spread: { package: "tslib", style: "named" },
  __spreadArray: { package: "tslib", style: "named" },
  __values: { package: "tslib", style: "named" },

  // framer-motion
  motion: { package: "framer-motion", style: "named" },
  AnimatePresence: { package: "framer-motion", style: "named" },
  LazyMotion: { package: "framer-motion", style: "named" },
  domAnimation: { package: "framer-motion", style: "named" },
  useAnimation: { package: "framer-motion", style: "named" },
  useMotionValue: { package: "framer-motion", style: "named" },
  useTransform: { package: "framer-motion", style: "named" },

  // @dnd-kit/core
  DndContext: { package: "@dnd-kit/core", style: "named" },
  DragOverlay: { package: "@dnd-kit/core", style: "named" },
  PointerSensor: { package: "@dnd-kit/core", style: "named" },
  KeyboardSensor: { package: "@dnd-kit/core", style: "named" },
  MouseSensor: { package: "@dnd-kit/core", style: "named" },
  TouchSensor: { package: "@dnd-kit/core", style: "named" },
  useSensor: { package: "@dnd-kit/core", style: "named" },
  useSensors: { package: "@dnd-kit/core", style: "named" },
  useDroppable: { package: "@dnd-kit/core", style: "named" },
  useDraggable: { package: "@dnd-kit/core", style: "named" },
  closestCenter: { package: "@dnd-kit/core", style: "named" },
  closestCorners: { package: "@dnd-kit/core", style: "named" },
  pointerWithin: { package: "@dnd-kit/core", style: "named" },
  rectIntersection: { package: "@dnd-kit/core", style: "named" },

  // @dnd-kit/sortable
  SortableContext: { package: "@dnd-kit/sortable", style: "named" },
  useSortable: { package: "@dnd-kit/sortable", style: "named" },
  arrayMove: { package: "@dnd-kit/sortable", style: "named" },
  sortableKeyboardCoordinates: { package: "@dnd-kit/sortable", style: "named" },
  horizontalListSortingStrategy: {
    package: "@dnd-kit/sortable",
    style: "named",
  },
  verticalListSortingStrategy: { package: "@dnd-kit/sortable", style: "named" },
  rectSortingStrategy: { package: "@dnd-kit/sortable", style: "named" },
  rectSwappingStrategy: { package: "@dnd-kit/sortable", style: "named" },

  // react-intl
  FormattedMessage: { package: "react-intl", style: "named" },
  FormattedNumber: { package: "react-intl", style: "named" },
  FormattedDate: { package: "react-intl", style: "named" },
  FormattedTime: { package: "react-intl", style: "named" },
  IntlProvider: { package: "react-intl", style: "named" },
  useIntl: { package: "react-intl", style: "named" },
  defineMessages: { package: "react-intl", style: "named" },
  defineMessage: { package: "react-intl", style: "named" },

  // jotai
  useAtom: { package: "jotai", style: "named" },
  useAtomValue: { package: "jotai", style: "named" },
  useSetAtom: { package: "jotai", style: "named" },
};

export type ResolveStats = {
  importsRewritten: number;
  importsSplit: number;
  specifiersResolved: number;
  referencesRenamed: number;
};

export type ResolveResult = {
  code: string;
  stats: ResolveStats;
};

export type ResolveOptions = {
  /** Disable chunk-name based detection. */
  noChunkLookup?: boolean;
  /** Disable alias-based detection. */
  noAliasLookup?: boolean;
};

function emptyStats(): ResolveStats {
  return {
    importsRewritten: 0,
    importsSplit: 0,
    specifiersResolved: 0,
    referencesRenamed: 0,
  };
}

/**
 * Extract the chunk basename from an import path.
 *  `../clsx-DDuZWq6Y.js`   →  `clsx`
 *  `./jsx-runtime-X.js`    →  `jsx-runtime`
 *  `./shared`              →  `shared`
 *  `./button-bq66r8jD.js`  →  `button`
 */
export function extractChunkBasename(source: string): string | null {
  if (!source) return null;
  // Skip bare specifiers (already an npm import).
  if (!source.startsWith(".") && !source.startsWith("/")) return null;
  // Strip last path segment.
  const segments = source.split("/");
  let last = segments[segments.length - 1] ?? "";
  // Strip extension.
  last = last.replace(/\.[mc]?[jt]sx?$/i, "");
  // Strip Rollup/Vite hash suffix.
  //
  // Vite/Rolldown defaults to an 8-char base64url-ish hash (`[A-Za-z0-9_-]{8}`)
  // at the very end. We anchor to *exactly* 8 chars so that multi-word chunk
  // names like `react-dom-De86Q4ix` and `floating-ui.react-dom-n8i6eMZZ` are
  // stripped to `react-dom` and `floating-ui.react-dom` respectively, rather
  // than greedily eating the `-dom-XXXXXXXX` tail and collapsing them to
  // `react` / `floating-ui.react`.
  //
  // Slightly longer hashes (10/12 chars) used by older Vite configs are also
  // covered as a fallback, but only if the 8-char strip didn't already match.
  const original = last;
  last = last.replace(/-[A-Za-z0-9_-]{8}$/u, "");
  if (last === original) {
    last = last.replace(/-[A-Za-z0-9_-]{10,12}$/u, "");
  }
  return last || null;
}

type SpecKind = "named" | "default" | "namespace";

type SpecInfo = {
  kind: SpecKind;
  localName: string;
  /** For named specifiers, the original imported name (might equal `localName`). */
  importedName?: string;
};

function describeSpecifier(
  spec:
    | t.ImportSpecifier
    | t.ImportDefaultSpecifier
    | t.ImportNamespaceSpecifier,
): SpecInfo {
  if (t.isImportDefaultSpecifier(spec)) {
    return { kind: "default", localName: spec.local.name };
  }
  if (t.isImportNamespaceSpecifier(spec)) {
    return { kind: "namespace", localName: spec.local.name };
  }
  // ImportSpecifier
  const imported = spec.imported;
  const importedName = t.isIdentifier(imported)
    ? imported.name
    : t.isStringLiteral(imported)
      ? imported.value
      : spec.local.name;
  return {
    kind: "named",
    localName: spec.local.name,
    importedName,
  };
}

type Resolution = {
  packageName: string;
  /** How the new import should be shaped for this specifier. */
  style: ImportStyle;
  /** The local binding name to bind the import to. */
  localName: string;
  /** For named imports — the export name to import. */
  importedName?: string;
  /** Original specifier (kept for diagnostics). */
  source: SpecInfo;
};

/**
 * Decide how to resolve a single specifier given the chunk rule (if any)
 * and the alias rule (if any). Returns `null` to leave the specifier alone.
 *
 * Precedence:
 *   1. **Alias rule wins.** When a local binding name matches a known canonical
 *      npm export name, that's a stronger signal than the chunk basename — the
 *      bundler's `jsx-runtime-XXXX.js` chunk re-exports React's default *and*
 *      `react/jsx-runtime`'s namespace from the same file; only the alias name
 *      tells us which package each specifier belongs to.
 *   2. **Default-export chunks** (e.g. `clsx`, `react`) trust the chunk rule
 *      for un-aliased specifiers — the local binding name is irrelevant
 *      because everything resolves to the same default export.
 *   3. **Named-only chunks** (e.g. `@dnd-kit/core`, `react/jsx-runtime`) require
 *      a matching alias rule. Without one, we can't safely guess whether the
 *      local binding name is a real named export of the package, so we leave
 *      the specifier on the original chunk path for the Stage D agent to
 *      decide.
 */
function resolveSpecifier(
  info: SpecInfo,
  chunkRule: ChunkRule | null,
  aliasRule: AliasRule | null,
): Resolution | null {
  if (aliasRule) return resolveByAlias(info, aliasRule);
  if (chunkRule && (chunkRule.defaultName || !chunkRule.namedOnly)) {
    return resolveByChunk(info, chunkRule);
  }
  return null;
}

function resolveByChunk(info: SpecInfo, chunk: ChunkRule): Resolution {
  const packageName = chunk.package;
  // Default-export packages (clsx, classnames, react): the lone alias becomes
  // the default binding name.
  if (chunk.defaultName && info.kind !== "namespace") {
    return {
      packageName,
      style: "default",
      localName: chunk.defaultName,
      source: info,
    };
  }
  // Namespace import passes through as a namespace.
  if (info.kind === "namespace") {
    return {
      packageName,
      style: "namespace",
      localName: info.localName,
      source: info,
    };
  }
  // Named-only package: keep the local name as both the imported and local
  // name. (Stage B's job to have given it a sensible name.)
  return {
    packageName,
    style: "named",
    localName: info.localName,
    importedName: info.localName,
    source: info,
  };
}

function resolveByAlias(info: SpecInfo, alias: AliasRule): Resolution {
  const localName = alias.renameLocalTo ?? info.localName;
  if (alias.style === "default") {
    return {
      packageName: alias.package,
      style: "default",
      localName,
      source: info,
    };
  }
  if (alias.style === "namespace") {
    return {
      packageName: alias.package,
      style: "namespace",
      localName,
      source: info,
    };
  }
  return {
    packageName: alias.package,
    style: "named",
    localName,
    importedName: alias.importedAs ?? info.localName,
    source: info,
  };
}

/**
 * Build a fresh `import` statement for a group of resolutions targeting the
 * same package.
 */
function buildImport(
  packageName: string,
  group: Resolution[],
): t.ImportDeclaration {
  const specifiers: Array<
    t.ImportSpecifier | t.ImportDefaultSpecifier | t.ImportNamespaceSpecifier
  > = [];

  // At most one default + one namespace + many named per `import` decl.
  let defaultSpec: t.ImportDefaultSpecifier | null = null;
  let namespaceSpec: t.ImportNamespaceSpecifier | null = null;
  const namedSpecs: t.ImportSpecifier[] = [];

  for (const r of group) {
    if (r.style === "default") {
      if (!defaultSpec) {
        defaultSpec = t.importDefaultSpecifier(t.identifier(r.localName));
      }
      continue;
    }
    if (r.style === "namespace") {
      if (!namespaceSpec) {
        namespaceSpec = t.importNamespaceSpecifier(t.identifier(r.localName));
      }
      continue;
    }
    const importedName = r.importedName ?? r.localName;
    namedSpecs.push(
      t.importSpecifier(
        t.identifier(r.localName),
        importedName === r.localName
          ? t.identifier(importedName)
          : t.identifier(importedName),
      ),
    );
  }

  if (defaultSpec) specifiers.push(defaultSpec);
  if (namespaceSpec) specifiers.push(namespaceSpec);
  specifiers.push(...namedSpecs);

  return t.importDeclaration(specifiers, t.stringLiteral(packageName));
}

/**
 * Rename references to a binding in a program scope.
 *
 * Used when a resolution renames the local name (e.g. `_React` → `React`).
 * Renames every read of the binding; collisions are detected by the caller.
 */
function renameBinding(
  programPath: NodePath<t.Program>,
  oldName: string,
  newName: string,
  stats: ResolveStats,
): boolean {
  const binding = programPath.scope.getBinding(oldName);
  if (!binding) return false;
  // Refuse if the new name is already taken in the program scope.
  if (oldName !== newName && programPath.scope.hasBinding(newName)) {
    return false;
  }
  programPath.scope.rename(oldName, newName);
  // Babel's rename() updates references count automatically.
  stats.referencesRenamed += binding.references;
  return true;
}

export function resolveNpmImports(
  source: string,
  opts: ResolveOptions = {},
): ResolveResult {
  if (!source) return { code: "", stats: emptyStats() };
  const ast = parseSource(source);
  const stats = emptyStats();

  const importPaths: NodePath<t.ImportDeclaration>[] = [];
  let programPath: NodePath<t.Program> | null = null;
  traverse(ast, {
    Program(path) {
      programPath = path;
    },
    ImportDeclaration(path) {
      importPaths.push(path);
    },
  });
  if (!programPath) {
    const { code } = generate(ast, { retainLines: false, compact: false });
    return { code, stats };
  }

  // Pre-scan: for each ImportDeclaration, compute the per-package groups of
  // resolved specifiers and the remaining (unresolved) specifiers.
  type Plan = {
    path: NodePath<t.ImportDeclaration>;
    groups: Map<string, Resolution[]>;
    /** Specifiers that should stay on the original import source. */
    leftover: Array<
      t.ImportSpecifier | t.ImportDefaultSpecifier | t.ImportNamespaceSpecifier
    >;
    /** Renames to apply across the program (oldName → newName). */
    renames: Array<{ from: string; to: string }>;
    originalSpecifierCount: number;
  };

  const plans: Plan[] = [];
  for (const path of importPaths) {
    const node = path.node;
    const source = node.source.value;
    const basename = extractChunkBasename(source);
    const chunkRule =
      !opts.noChunkLookup && basename
        ? (CHUNK_NAME_REGISTRY[basename] ?? null)
        : null;

    const groups = new Map<string, Resolution[]>();
    const leftover: Plan["leftover"] = [];
    const renames: Plan["renames"] = [];

    for (const spec of node.specifiers) {
      const info = describeSpecifier(spec);
      const aliasRule = !opts.noAliasLookup
        ? (ALIAS_REGISTRY[info.localName] ?? null)
        : null;
      const res = resolveSpecifier(info, chunkRule, aliasRule);

      if (!res) {
        leftover.push(spec);
        continue;
      }

      // Skip resolution if the rename would collide with another binding.
      if (res.localName !== info.localName) {
        const programScope = programPath.scope;
        if (
          programScope.hasBinding(res.localName) &&
          res.localName !== info.localName
        ) {
          // Collision — leave specifier alone.
          leftover.push(spec);
          continue;
        }
        renames.push({ from: info.localName, to: res.localName });
      }

      const list = groups.get(res.packageName);
      if (list) list.push(res);
      else groups.set(res.packageName, [res]);
    }

    plans.push({
      path,
      groups,
      leftover,
      renames,
      originalSpecifierCount: node.specifiers.length,
    });
  }

  // Apply plans.
  for (const plan of plans) {
    if (plan.groups.size === 0) continue;

    const newImports: t.ImportDeclaration[] = [];
    for (const [pkg, group] of plan.groups) {
      newImports.push(buildImport(pkg, group));
    }

    // Apply renames first so the new import binds the right name.
    for (const { from, to } of plan.renames) {
      if (from === to) continue;
      renameBinding(programPath, from, to, stats);
    }

    // If there's leftover, keep the original import with the leftover specifiers.
    if (plan.leftover.length > 0) {
      plan.path.node.specifiers = plan.leftover;
      plan.path.insertBefore(newImports);
      stats.importsSplit++;
    } else {
      plan.path.replaceWithMultiple(newImports);
      stats.importsRewritten++;
    }

    stats.specifiersResolved +=
      plan.originalSpecifierCount - plan.leftover.length;
  }

  // Merge duplicate imports from the same package (e.g. multiple files re-exported `React`).
  mergeDuplicateImports(programPath, stats);

  const { code } = generate(ast, {
    retainLines: false,
    compact: false,
    concise: false,
    jsescOption: { minimal: true },
  });

  return {
    code: code.endsWith("\n") ? code : code + "\n",
    stats,
  };
}

/**
 * Walk the program body and merge consecutive `import` statements that
 * target the same module. Keeps default + namespace + named specifiers tidy.
 */
function mergeDuplicateImports(
  programPath: NodePath<t.Program>,
  _stats: ResolveStats,
): void {
  const body = programPath.node.body;
  // Map source-string → first ImportDeclaration we saw.
  const byPackage = new Map<string, t.ImportDeclaration>();
  const toRemove = new Set<number>();
  for (let i = 0; i < body.length; i++) {
    const node = body[i]!;
    if (!t.isImportDeclaration(node)) continue;
    const src = node.source.value;
    const existing = byPackage.get(src);
    if (!existing) {
      byPackage.set(src, node);
      continue;
    }
    // Merge: dedupe by (localName, importedName, kind).
    const seen = new Set<string>();
    const keyOf = (
      s:
        | t.ImportSpecifier
        | t.ImportDefaultSpecifier
        | t.ImportNamespaceSpecifier,
    ): string => {
      if (t.isImportDefaultSpecifier(s)) return `default:${s.local.name}`;
      if (t.isImportNamespaceSpecifier(s)) return `ns:${s.local.name}`;
      const imp = t.isIdentifier(s.imported) ? s.imported.name : "";
      return `named:${imp}:${s.local.name}`;
    };
    for (const s of existing.specifiers) seen.add(keyOf(s));
    for (const s of node.specifiers) {
      const k = keyOf(s);
      if (seen.has(k)) continue;
      seen.add(k);
      existing.specifiers.push(s);
    }
    toRemove.add(i);
  }
  if (toRemove.size > 0) {
    programPath.node.body = body.filter((_, i) => !toRemove.has(i));
  }
  // Reorder specifiers per declaration: default → namespace → named (alphabetical by local).
  for (const node of byPackage.values()) {
    const def = node.specifiers.filter((s): s is t.ImportDefaultSpecifier =>
      t.isImportDefaultSpecifier(s),
    );
    const ns = node.specifiers.filter((s): s is t.ImportNamespaceSpecifier =>
      t.isImportNamespaceSpecifier(s),
    );
    const named = node.specifiers
      .filter((s): s is t.ImportSpecifier => t.isImportSpecifier(s))
      .sort((a, b) => a.local.name.localeCompare(b.local.name));
    node.specifiers = [...def, ...ns, ...named];
  }
}

const USAGE =
  "Usage: bun scripts/resolve-npm-imports.ts <input.js|-> [--out output.js] " +
  "[--no-chunk-lookup] [--no-alias-lookup]";

async function readInput(inputPath: string): Promise<string> {
  if (inputPath === "-") return await Bun.stdin.text();
  return fs.readFileSync(inputPath, "utf-8");
}

async function main(): Promise<void> {
  let parsed;
  try {
    parsed = parseArgs({
      args: process.argv.slice(2),
      options: {
        out: { type: "string", short: "o" },
        "no-chunk-lookup": { type: "boolean", default: false },
        "no-alias-lookup": { type: "boolean", default: false },
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

  const inputPath = positionals[0]!;
  let source: string;
  try {
    source = await readInput(inputPath);
  } catch (err) {
    console.error(`failed to read input: ${(err as Error).message}`);
    process.exit(1);
  }

  let result: ResolveResult;
  try {
    result = resolveNpmImports(source, {
      noChunkLookup: values["no-chunk-lookup"],
      noAliasLookup: values["no-alias-lookup"],
    });
  } catch (err) {
    console.error(`parse error: ${(err as Error).message}`);
    process.exit(2);
  }

  if (values.out) {
    try {
      fs.writeFileSync(values.out, result.code);
    } catch (err) {
      console.error(`failed to write output: ${(err as Error).message}`);
      process.exit(1);
    }
  } else {
    process.stdout.write(result.code);
  }

  console.error(
    `resolve-npm-imports: ${result.stats.importsRewritten} rewritten, ` +
      `${result.stats.importsSplit} split, ${result.stats.specifiersResolved} specifiers, ` +
      `${result.stats.referencesRenamed} refs renamed`,
  );
}

if (import.meta.main) {
  await main();
}
