import * as fs from "node:fs";
import * as path from "node:path";
import { parseArgs } from "node:util";
import * as parser from "@babel/parser";
import babelTraverse from "@babel/traverse";
import * as t from "@babel/types";
import {
  CHUNK_NAME_REGISTRY,
  extractChunkBasename,
} from "./resolve-npm-imports.ts";
import { PARSER_PLUGINS } from "./extract.ts";
import { checkEntry, discoverEntry } from "./check-entry.ts";
import { classifyVendorDataChunk } from "./chunk-classification.ts";
import { Progress } from "./progress.ts";

const traverse = ((
  babelTraverse as unknown as { default?: typeof babelTraverse }
).default ?? babelTraverse) as typeof babelTraverse;

export type SpecifierKind = "named" | "default" | "namespace";

export type ImportSpec = {
  imported: string;
  local: string;
  kind: SpecifierKind;
};

export type ImportEdge = {
  source: string;
  target: string;
  kind: "local" | "npm-leaf" | "external";
  npmPackage?: string;
  specifiers: ImportSpec[];
  reExport: boolean;
};

export type ExportEntry = {
  exported: string;
  local: string;
  kind: SpecifierKind;
  /** True for `export … from "./other.js"` re-exports. */
  reExportFrom?: string;
};

export type FileKind = "local" | "oversized-local" | "npm-leaf" | "external";

export type ManifestStages = {
  extracted?: boolean;
  renamed?: boolean;
  polished?: boolean;
  finalized?: boolean;
  /**
   * A semantic domain + public path was decided for this chunk (via
   * `plan-organize.ts --apply` or `ledger.ts set-organization`). The choice is
   * recorded in `ManifestFile.organization`. This is the data-only "where does
   * it go" stage; it precedes `promoted`.
   */
  organized?: boolean;
  /**
   * The chunk's deliverable was written into the public restore root at its
   * semantic path (via `promote-organized.ts`). `restored/` is empty until
   * chunks reach this stage — the completion proof for a whole-tree restore is
   * every reachable local chunk `promoted` + an all-tree `quality-gate.ts` pass.
   */
  promoted?: boolean;
  /** For npm-leaf, external, and oversized-local nodes that aren't worked on. */
  skipped?: boolean;
  /**
   * A large vendored/runtime boundary chunk given a typed facade
   * (`make-facade.ts`) instead of a full restoration. Consumers treat it as a
   * satisfied dependency at every stage; the runtime is deep-restored only when
   * explicitly scoped. Set via `ledger.ts mark-faced`.
   */
  faced?: boolean;
};

/** How a chunk was classified for organization, and where it lands publicly. */
export type OrganizationRecipe = "icon" | "button" | "split" | "manual";
export type OrganizationClassification =
  | "app-feature"
  | "data-asset"
  | "icon"
  | "single-util"
  | "vendor-npm"
  | "vendor-runtime"
  | "boundary";
export type OrganizationInfo = {
  /** First path segment of the public deliverable (`icons`, `utils`, `boundaries`, …). */
  domain: string;
  /** Public deliverable path relative to the target root (`icons/download-icon.tsx`). */
  semanticPath: string;
  /** Finalize recipe that produces the typed deliverable, when one applies. */
  recipe?: OrganizationRecipe;
  classification: OrganizationClassification;
  /** Whether a heuristic proposed this or an agent overrode it. */
  source: "heuristic" | "agent-override";
  decidedAt: string;
};

export type ManifestFile = {
  path?: string;
  basename: string;
  kind: FileKind;
  npmPackage?: string;
  /** For `npm-leaf` chunks detected as bundled vendor data: the bare specifier
   * consumers should import (`@shikijs/langs/rust`, `3dmol`). Lets promote rewrite
   * a consumer's `./rust-XXXX.js` to the package without a per-id name registry. */
  vendorSpecifier?: string;
  depth: number;
  size?: number;
  /** Newline count of the source. Populated for `local` and `oversized-local`. */
  lineCount?: number;
  imports?: ImportEdge[];
  exports?: ExportEntry[];
  stages: ManifestStages;
  /** Chosen domain + public path (set once organized). Preserved across rebuilds. */
  organization?: OrganizationInfo;
  owner: string | null;
  claimedAt: string | null;
  lastUpdated: string | null;
  /** Notes about specifiers we couldn't classify (dynamic imports, etc.). */
  unresolved?: string[];
};

export type ManifestEdge = {
  from: string;
  to: string;
};

export type Manifest = {
  version: 1;
  entry: string;
  rootDir: string;
  targetDir: string;
  createdAt: string;
  updatedAt: string;
  files: Record<string, ManifestFile>;
  edges: ManifestEdge[];
  unresolved: Array<{ from: string; reason: string; raw?: string }>;
};

const ASSET_EXT = new Set([
  ".css",
  ".scss",
  ".less",
  ".png",
  ".jpg",
  ".jpeg",
  ".gif",
  ".svg",
  ".webp",
  ".ico",
  ".woff",
  ".woff2",
  ".ttf",
  ".eot",
  ".otf",
  ".wasm",
  ".json",
  ".txt",
  ".md",
]);

function isAsset(source: string): boolean {
  const ext = path.extname(source).toLowerCase();
  return ASSET_EXT.has(ext);
}

function isRelative(source: string): boolean {
  return (
    source.startsWith("./") ||
    source.startsWith("../") ||
    source.startsWith("/")
  );
}

function basenameOf(filePath: string): string {
  return path.basename(filePath).replace(/\.[mc]?[jt]sx?$/i, "");
}

export function classifyTarget(
  source: string,
  treatAsNpm: Set<string>,
): { kind: FileKind; npmPackage?: string; chunkBasename?: string } {
  if (!isRelative(source)) {
    // Bare specifier — already an npm package.
    return { kind: "external" };
  }
  const chunkBasename = extractChunkBasename(source);
  if (!chunkBasename) {
    return { kind: "local" };
  }
  if (treatAsNpm.has(chunkBasename)) {
    return { kind: "npm-leaf", npmPackage: chunkBasename, chunkBasename };
  }
  const rule = CHUNK_NAME_REGISTRY[chunkBasename];
  if (rule) {
    return { kind: "npm-leaf", npmPackage: rule.package, chunkBasename };
  }
  return { kind: "local", chunkBasename };
}

function describeImportSpecifier(
  spec:
    | t.ImportSpecifier
    | t.ImportDefaultSpecifier
    | t.ImportNamespaceSpecifier,
): ImportSpec {
  if (t.isImportDefaultSpecifier(spec)) {
    return { imported: "default", local: spec.local.name, kind: "default" };
  }
  if (t.isImportNamespaceSpecifier(spec)) {
    return { imported: "*", local: spec.local.name, kind: "namespace" };
  }
  const imported = spec.imported;
  const importedName = t.isIdentifier(imported)
    ? imported.name
    : t.isStringLiteral(imported)
      ? imported.value
      : spec.local.name;
  return { imported: importedName, local: spec.local.name, kind: "named" };
}

export type ParsedImports = {
  imports: ImportEdge[];
  exports: ExportEntry[];
  unresolved: string[];
};

/**
 * Parse a JS/TS file's `import` / `export` statements into structured edges.
 * Pure: no I/O, no graph traversal.
 */
export function parseImportsExports(
  source: string,
  treatAsNpm: Set<string> = new Set(),
): ParsedImports {
  const imports: ImportEdge[] = [];
  const exports: ExportEntry[] = [];
  const unresolved: string[] = [];

  let ast: t.File;
  try {
    ast = parser.parse(source, {
      sourceType: "unambiguous",
      errorRecovery: true,
      allowReturnOutsideFunction: true,
      allowAwaitOutsideFunction: true,
      allowImportExportEverywhere: true,
      allowUndeclaredExports: true,
      plugins: PARSER_PLUGINS,
    });
  } catch (err) {
    unresolved.push(`parse-error: ${(err as Error).message}`);
    return { imports, exports, unresolved };
  }

  const recordImport = (
    sourceStr: string,
    specifiers: ImportSpec[],
    reExport: boolean,
  ): void => {
    if (isAsset(sourceStr)) return;
    const target = isRelative(sourceStr) ? basenameOf(sourceStr) : sourceStr;
    const cls = classifyTarget(sourceStr, treatAsNpm);
    imports.push({
      source: sourceStr,
      target,
      kind: cls.kind,
      npmPackage: cls.npmPackage,
      specifiers,
      reExport,
    });
  };

  traverse(ast, {
    ImportDeclaration(path) {
      const node = path.node;
      const specs = node.specifiers.map(describeImportSpecifier);
      recordImport(node.source.value, specs, false);
    },
    ExportNamedDeclaration(path) {
      const node = path.node;
      if (node.source) {
        // `export { a } from "./other.js"` — also a graph edge.
        const specs: ImportSpec[] = node.specifiers
          .map((spec): ImportSpec | null => {
            if (t.isExportSpecifier(spec)) {
              // `ExportSpecifier.local` is always an Identifier; only
              // `.exported` can additionally be a StringLiteral
              // (the `export { x as "string-with-spaces" }` form).
              const importedName = spec.local.name;
              const exported = spec.exported;
              const exportedName = t.isIdentifier(exported)
                ? exported.name
                : t.isStringLiteral(exported)
                  ? exported.value
                  : importedName;
              exports.push({
                exported: exportedName,
                local: importedName,
                kind: "named",
                reExportFrom: node.source!.value,
              });
              return {
                imported: importedName,
                local: importedName,
                kind: "named",
              };
            }
            return null;
          })
          .filter((x): x is ImportSpec => x !== null);
        recordImport(node.source.value, specs, true);
        return;
      }
      // Plain `export { local as exported }` (no source).
      for (const spec of node.specifiers) {
        if (t.isExportSpecifier(spec)) {
          const localName = t.isIdentifier(spec.local)
            ? spec.local.name
            : "default";
          const exportedNode = spec.exported;
          const exportedName = t.isIdentifier(exportedNode)
            ? exportedNode.name
            : t.isStringLiteral(exportedNode)
              ? exportedNode.value
              : localName;
          exports.push({
            exported: exportedName,
            local: localName,
            kind: "named",
          });
        } else if (t.isExportDefaultSpecifier(spec)) {
          exports.push({
            exported: "default",
            local: spec.exported.name,
            kind: "default",
          });
        } else if (t.isExportNamespaceSpecifier(spec)) {
          exports.push({
            exported: spec.exported.name,
            local: "*",
            kind: "namespace",
          });
        }
      }
      // `export const X = …` / `export function X` / `export class X` — record bindings as exports.
      const decl = node.declaration;
      if (decl) {
        if (t.isVariableDeclaration(decl)) {
          for (const d of decl.declarations) {
            if (t.isIdentifier(d.id)) {
              exports.push({
                exported: d.id.name,
                local: d.id.name,
                kind: "named",
              });
            }
          }
        } else if (
          (t.isFunctionDeclaration(decl) || t.isClassDeclaration(decl)) &&
          decl.id
        ) {
          exports.push({
            exported: decl.id.name,
            local: decl.id.name,
            kind: "named",
          });
        }
      }
    },
    ExportAllDeclaration(path) {
      const node = path.node;
      // `export * from "./other.js"` — graph edge but no listable named exports.
      recordImport(node.source.value, [], true);
      exports.push({
        exported: "*",
        local: "*",
        kind: "namespace",
        reExportFrom: node.source.value,
      });
    },
    ExportDefaultDeclaration(path) {
      const decl = path.node.declaration;
      let local = "default";
      if (
        (t.isFunctionDeclaration(decl) || t.isClassDeclaration(decl)) &&
        decl.id
      ) {
        local = decl.id.name;
      } else if (t.isIdentifier(decl)) {
        local = decl.name;
      }
      exports.push({ exported: "default", local, kind: "default" });
    },
    CallExpression(path) {
      // Dynamic import("…").
      const callee = path.node.callee;
      if (callee.type === "Import") {
        const arg = path.node.arguments[0];
        if (arg && t.isStringLiteral(arg)) {
          recordImport(arg.value, [], false);
        } else if (
          arg &&
          t.isTemplateLiteral(arg) &&
          arg.expressions.length === 0 &&
          arg.quasis.length === 1
        ) {
          recordImport(
            arg.quasis[0]!.value.cooked ?? arg.quasis[0]!.value.raw,
            [],
            false,
          );
        } else {
          unresolved.push("dynamic-import-non-literal");
        }
      }
    },
  });

  return { imports, exports, unresolved };
}

export type BuildOptions = {
  rootDir: string;
  targetDir: string;
  treatAsNpm?: Set<string>;
  /** Existing manifest to merge into (preserves stage status). */
  prior?: Manifest;
  /**
   * Files exceeding this many lines are marked `oversized-local` and not
   * descended into. The entry is always exempt. Defaults to 0, which disables
   * the heuristic so full restoration follows every local sibling by default.
   */
  maxLines?: number;
  /**
   * Basenames the user explicitly wants restored even if they exceed
   * `maxLines`. Always includes the entry.
   */
  forceInclude?: Set<string>;
  /** Optional progress reporter; the CLI passes one, tests omit it. */
  progress?: Progress | null;
};

export const DEFAULT_MAX_LINES = 0;

function countLines(source: string): number {
  if (!source) return 0;
  let count = 1;
  for (let i = 0; i < source.length; i++) {
    if (source.charCodeAt(i) === 10) count++;
  }
  return count;
}

const NOW = (): string => new Date().toISOString();

export function buildImportGraph(
  entryPath: string,
  opts: BuildOptions,
): Manifest {
  const treatAsNpm = opts.treatAsNpm ?? new Set<string>();
  const progress = opts.progress ?? null;
  const forceInclude = new Set(opts.forceInclude ?? []);
  const maxLines =
    opts.maxLines === undefined ? DEFAULT_MAX_LINES : opts.maxLines;
  const entryBasename = basenameOf(entryPath);
  forceInclude.add(entryBasename);

  const prior = opts.prior;
  const files: Record<string, ManifestFile> = {};
  const edges: ManifestEdge[] = [];
  const unresolved: Manifest["unresolved"] = [];
  const seen = new Set<string>();
  const queue: Array<{ basename: string; absPath: string; depth: number }> = [];

  const enqueueLocal = (
    basename: string,
    absPath: string,
    depth: number,
  ): void => {
    if (seen.has(basename)) return;
    seen.add(basename);
    queue.push({ basename, absPath, depth });
  };

  enqueueLocal(entryBasename, entryPath, 0);

  while (queue.length > 0) {
    const job = queue.shift()!;
    const { basename, absPath, depth } = job;
    let source: string;
    let size = 0;
    try {
      const stat = fs.statSync(absPath);
      size = stat.size;
      source = fs.readFileSync(absPath, "utf-8");
    } catch (err) {
      unresolved.push({
        from: basename,
        reason: "read-error",
        raw: (err as Error).message,
      });
      const entry: ManifestFile = {
        path: absPath,
        basename,
        kind: "local",
        depth,
        stages: { extracted: false },
        owner: null,
        claimedAt: null,
        lastUpdated: NOW(),
      };
      files[basename] = entry;
      continue;
    }

    const parsed = parseImportsExports(source, treatAsNpm);
    const lineCount = countLines(source);

    // Bundled vendor DATA (Shiki grammars/themes, standalone data libs) is not
    // app code — make it a terminal npm-leaf so it never gets staged, organized,
    // or promoted into restored/. Consumers import the bare specifier instead.
    // The entry is always app code, never faced this way.
    const vendor =
      basename === entryBasename
        ? null
        : classifyVendorDataChunk(basename, source);
    if (vendor) {
      files[basename] = {
        path: absPath,
        basename,
        kind: "npm-leaf",
        npmPackage: vendor.package,
        vendorSpecifier: vendor.specifier,
        depth,
        size,
        lineCount,
        stages: { skipped: true },
        owner: null,
        claimedAt: null,
        lastUpdated: NOW(),
      };
      progress?.tick(1, `${basename} → ${vendor.specifier}`);
      continue; // terminal: don't BFS into vendor data
    }

    // Decide: oversized-local vs local. The entry and any forceInclude basename
    // is always restored regardless of size.
    const oversized =
      maxLines > 0 && lineCount > maxLines && !forceInclude.has(basename);

    const fileEntry: ManifestFile = {
      path: absPath,
      basename,
      kind: oversized ? "oversized-local" : "local",
      depth,
      size,
      lineCount,
      imports: parsed.imports,
      exports: parsed.exports,
      stages:
        prior?.files?.[basename]?.stages ??
        (oversized
          ? { skipped: true }
          : {
              extracted: false,
              renamed: false,
              polished: false,
              finalized: false,
            }),
      organization: prior?.files?.[basename]?.organization,
      owner: prior?.files?.[basename]?.owner ?? null,
      claimedAt: prior?.files?.[basename]?.claimedAt ?? null,
      lastUpdated: NOW(),
      unresolved: parsed.unresolved.length > 0 ? parsed.unresolved : undefined,
    };
    files[basename] = fileEntry;
    progress?.tick(1, basename);

    // Don't BFS into oversized files — we won't restore them, so their
    // downstream npm-leaf/local edges aren't part of this restoration tree.
    if (oversized) continue;

    for (const imp of parsed.imports) {
      edges.push({ from: basename, to: imp.target });
      if (imp.kind === "npm-leaf") {
        if (!files[imp.target]) {
          files[imp.target] = {
            basename: imp.target,
            kind: "npm-leaf",
            npmPackage: imp.npmPackage,
            depth: depth + 1,
            stages: { skipped: true },
            owner: null,
            claimedAt: null,
            lastUpdated: NOW(),
          };
        }
        continue;
      }
      if (imp.kind === "external") {
        if (!files[imp.target]) {
          files[imp.target] = {
            basename: imp.target,
            kind: "external",
            depth: depth + 1,
            stages: { skipped: true },
            owner: null,
            claimedAt: null,
            lastUpdated: NOW(),
          };
        }
        continue;
      }
      // local → resolve to a sibling file under rootDir
      const resolved = resolveLocalSource(absPath, imp.source, opts.rootDir);
      if (!resolved) {
        unresolved.push({
          from: basename,
          reason: "unresolved-local-import",
          raw: imp.source,
        });
        continue;
      }
      enqueueLocal(imp.target, resolved, depth + 1);
    }
  }

  const createdAt = prior?.createdAt ?? NOW();
  return {
    version: 1,
    entry: entryBasename,
    rootDir: opts.rootDir,
    targetDir: opts.targetDir,
    createdAt,
    updatedAt: NOW(),
    files,
    edges,
    unresolved,
  };
}

function resolveLocalSource(
  fromAbsPath: string,
  importSource: string,
  rootDir: string,
): string | null {
  let candidate: string;
  if (path.isAbsolute(importSource)) {
    candidate = importSource;
  } else {
    candidate = path.resolve(path.dirname(fromAbsPath), importSource);
  }
  // Try as-is, then with .js extension if missing.
  if (fs.existsSync(candidate)) return candidate;
  const withExt = /\.[mc]?[jt]sx?$/i.test(candidate) ? null : candidate + ".js";
  if (withExt && fs.existsSync(withExt)) return withExt;
  // Fall back to rootDir lookup by basename.
  const stripped = path.basename(candidate);
  const inRoot = path.resolve(rootDir, stripped);
  if (fs.existsSync(inRoot)) return inRoot;
  return null;
}

const USAGE =
  "Usage: bun scripts/build-import-graph.ts [<entry.js>] --target <dir> [--root <dir>] " +
  "[--out <manifest.json>] [--treat-as-npm name,name,...] " +
  "[--max-lines 0] [--include basename1,basename2,...] " +
  "[--index <index.html>] [--discover] [--no-entry-check]\n" +
  "  The entry is optional when --root is given: it is auto-discovered from index.html.";

async function main(): Promise<void> {
  let parsed;
  try {
    parsed = parseArgs({
      args: process.argv.slice(2),
      options: {
        target: { type: "string" },
        root: { type: "string" },
        out: { type: "string" },
        "treat-as-npm": { type: "string" },
        "max-lines": { type: "string" },
        include: { type: "string" },
        rebuild: { type: "boolean", default: false },
        index: { type: "string" },
        discover: { type: "boolean", default: false },
        "no-entry-check": { type: "boolean", default: false },
      },
      allowPositionals: true,
    });
  } catch (err) {
    console.error(USAGE);
    console.error((err as Error).message);
    process.exit(64);
  }
  const { values, positionals } = parsed;
  if (!values.target) {
    console.error(USAGE);
    process.exit(64);
  }

  // Entry is optional: when omitted (or --discover is passed) and --root is
  // given, auto-discover it from index.html so the whole-tree restore is the
  // default — no hand-globbing app-main-*.
  let entry: string;
  let discovered = false;
  if (positionals.length === 0 || values.discover) {
    if (!values.root) {
      console.error(USAGE);
      console.error(
        "auto-discovery needs --root <assets-dir> (or pass an explicit <entry.js>)",
      );
      process.exit(64);
    }
    const result = discoverEntry(values.root, { indexHtml: values.index });
    if (!result.chosen?.resolvedFile) {
      console.error(`could not auto-discover an entry: ${result.reason}`);
      process.exit(1);
    }
    entry = result.chosen.resolvedFile;
    discovered = true;
    console.error(`auto-discovered entry: ${entry}`);
    console.error(`  ${result.reason}`);
  } else {
    entry = positionals[0]!;
  }
  if (!fs.existsSync(entry)) {
    console.error(`entry not found: ${entry}`);
    process.exit(1);
  }
  const targetDir = values.target!;
  const rootDir = values.root ?? path.dirname(entry);
  const fullDir = path.join(targetDir, ".deobfuscate-javascript", "_full");
  const out = values.out ?? path.join(fullDir, "manifest.json");

  // Entry sanity check: warn (don't block) if the entry looks like a transitive
  // vendor leaf rather than an app entry, so we don't silently restore a tiny
  // dependency closure and call it complete. Skip with --no-entry-check.
  if (!values["no-entry-check"] && !discovered) {
    try {
      const verdict = checkEntry(entry, {
        rootDir,
        indexHtml: values.index,
      });
      if (verdict.suspicious) {
        console.error(
          "\n⚠  build-import-graph: the chosen entry looks like a DEPENDENCY, not an app entry.",
        );
        console.error(`   ${verdict.recommendation}`);
        console.error(
          "   Continuing anyway — pass --no-entry-check to silence, or re-run from the real entry.\n",
        );
      }
    } catch {
      // never let the advisory check abort the graph build
    }
  }

  const treatAsNpm = new Set(
    (values["treat-as-npm"] ?? "")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean),
  );
  const forceInclude = new Set(
    (values.include ?? "")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean),
  );
  let maxLines = DEFAULT_MAX_LINES;
  if (values["max-lines"] !== undefined) {
    const parsed = parseInt(values["max-lines"], 10);
    if (!Number.isFinite(parsed) || parsed < 0) {
      console.error("--max-lines must be a non-negative integer");
      process.exit(64);
    }
    maxLines = parsed;
  }

  let prior: Manifest | undefined;
  if (!values.rebuild && fs.existsSync(out)) {
    try {
      prior = JSON.parse(fs.readFileSync(out, "utf-8")) as Manifest;
    } catch {
      prior = undefined;
    }
  }

  const progress = new Progress({ label: "graph" });
  const manifest = buildImportGraph(entry, {
    rootDir,
    targetDir,
    treatAsNpm,
    prior,
    maxLines,
    forceInclude,
    progress,
  });
  progress.done("graph built");

  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.mkdirSync(path.join(fullDir, "files"), { recursive: true });
  fs.mkdirSync(path.join(fullDir, "locks"), { recursive: true });

  // Stage local-file workspaces (copy original.js once if absent).
  // Oversized-local files do NOT get a workspace — we won't restore them.
  for (const file of Object.values(manifest.files)) {
    if (file.kind !== "local" || !file.path) continue;
    const ws = path.join(fullDir, "files", file.basename);
    fs.mkdirSync(ws, { recursive: true });
    const archive = path.join(ws, "original.js");
    if (!fs.existsSync(archive)) {
      try {
        fs.copyFileSync(file.path, archive);
      } catch (err) {
        console.error(
          `warning: failed to copy ${file.path} → ${archive}: ${(err as Error).message}`,
        );
      }
    }
  }

  writeJsonAtomic(out, manifest);

  const localCount = Object.values(manifest.files).filter(
    (f) => f.kind === "local",
  ).length;
  const oversizedCount = Object.values(manifest.files).filter(
    (f) => f.kind === "oversized-local",
  ).length;
  const npmCount = Object.values(manifest.files).filter(
    (f) => f.kind === "npm-leaf",
  ).length;
  const vendorDataCount = Object.values(manifest.files).filter(
    (f) => f.vendorSpecifier,
  ).length;
  const parts = [`${localCount} local`];
  if (oversizedCount > 0)
    parts.push(`${oversizedCount} oversized-local (skipped)`);
  parts.push(`${npmCount} npm-leaf`);
  if (vendorDataCount > 0)
    parts.push(`${vendorDataCount} vendor-data (not restored)`);
  parts.push(`${manifest.edges.length} edges`);
  console.error(`manifest: ${parts.join(" · ")} → ${out}`);
  if (oversizedCount > 0) {
    const oversized = Object.values(manifest.files)
      .filter((f) => f.kind === "oversized-local")
      .sort((a, b) => (b.lineCount ?? 0) - (a.lineCount ?? 0));
    console.error(
      `  oversized-local (partial restore boundary; rerun with --max-lines 0 or --include <basename> for deep restore):`,
    );
    for (const f of oversized.slice(0, 10)) {
      console.error(`    ${f.basename}  ${f.lineCount ?? "?"} lines`);
    }
    if (oversized.length > 10) {
      console.error(`    … and ${oversized.length - 10} more`);
    }
  }
  if (manifest.unresolved.length > 0) {
    console.error(`  ${manifest.unresolved.length} unresolved import(s):`);
    for (const u of manifest.unresolved.slice(0, 10)) {
      console.error(`    ${u.from} → ${u.reason}${u.raw ? `: ${u.raw}` : ""}`);
    }
  }
}

export function writeJsonAtomic(filePath: string, value: unknown): void {
  const tmp = `${filePath}.tmp.${process.pid}`;
  fs.writeFileSync(tmp, JSON.stringify(value, null, 2) + "\n");
  fs.renameSync(tmp, filePath);
}

if (import.meta.main) {
  await main();
}
