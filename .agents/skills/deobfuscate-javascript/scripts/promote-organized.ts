import * as fs from "node:fs";
import * as path from "node:path";
import { parseArgs } from "node:util";
import * as parser from "@babel/parser";
import babelTraverse from "@babel/traverse";
import * as t from "@babel/types";
import {
  writeJsonAtomic,
  type Manifest,
  type ManifestFile,
} from "./build-import-graph.ts";
import {
  acquireLock,
  computeFrontier,
  LockHeldError,
  pathsForTarget,
  releaseLock,
} from "./ledger.ts";
import {
  rewriteSemanticImports,
  semanticFinalize,
  type SemanticImportMapping,
} from "./semantic-finalize.ts";
import {
  analyzeSource,
  DEFAULT_OPTIONS,
  type QualityGateOptions,
} from "./quality-gate.ts";
import { formatPath } from "./format.ts";
import { Progress } from "./progress.ts";

const traverse = ((
  babelTraverse as unknown as { default?: typeof babelTraverse }
).default ?? babelTraverse) as typeof babelTraverse;

const PARSER_PLUGINS: parser.ParserPlugin[] = [
  "jsx",
  "typescript",
  "classProperties",
  "classPrivateProperties",
  "classPrivateMethods",
  "dynamicImport",
  "importMeta",
  "objectRestSpread",
  "topLevelAwait",
];

/**
 * promote-organized.ts — drain the promote frontier: for every organized chunk
 * whose local dependencies are already promoted, produce its typed deliverable
 * (semantic-finalize recipe, or the agent/checkpoint candidate), gate it through
 * the SAME quality gate promote-final uses, copy it to its semantic path, update
 * the shared IMPORT_MAP.json, and rewrite this chunk's imports of already-promoted
 * producers to their semantic names/paths.
 *
 * Resumable + fleet-safe: per-chunk promote lock, skip already-promoted, idempotent
 * IMPORT_MAP upsert, continue-on-gate-fail (one bad chunk never blocks the batch).
 * `--dry-run` previews every move + import-map change + gate verdict with no writes.
 */

type ImportMapEntry = {
  restored?: string;
  exports?: Record<string, string>;
  status?: string;
  [k: string]: unknown;
};
type ImportMap = {
  chunks?: Record<string, ImportMapEntry>;
  [k: string]: unknown;
};

type Ledger = {
  files?: Record<string, unknown>;
  crossFileBindings?: unknown[];
};

export type PromoteResult = {
  basename: string;
  promoted: boolean;
  semanticPath: string;
  reason: string;
  issues?: string[];
};

function readJson<T>(p: string): T | null {
  try {
    return JSON.parse(fs.readFileSync(p, "utf-8")) as T;
  } catch {
    return null;
  }
}

/** Relative, extension-less import specifier from one semantic file to another. */
export function relativeImport(
  fromSemanticPath: string,
  toSemanticPath: string,
): string {
  const fromDir = path.dirname(fromSemanticPath);
  const withoutExt = toSemanticPath.replace(/\.[cm]?[jt]sx?$/i, "");
  const toNoExt =
    path.posix.basename(withoutExt) === "index"
      ? path.posix.dirname(withoutExt)
      : withoutExt;
  let rel = path.relative(fromDir, toNoExt);
  if (rel === "") rel = ".";
  rel = rel.split(path.sep).join("/");
  if (!rel.startsWith(".")) rel = `./${rel}`;
  return rel;
}

/**
 * Build import rewrites for one chunk: (1) imports of already-promoted local
 * producers → their semantic relative path; (2) imports of bundled vendor-data
 * chunks (Shiki grammars/themes, data libs) → the bare npm specifier recorded on
 * the manifest, so a consumer's `./rust-XXXX.js` becomes `@shikijs/langs/rust`
 * instead of a dangling local import into a chunk we deliberately didn't restore.
 */
export function buildImportMappings(
  chunk: ManifestFile,
  semanticPath: string,
  importMap: ImportMap,
  manifest?: Manifest,
): SemanticImportMapping[] {
  const mappings: SemanticImportMapping[] = [];
  for (const imp of chunk.imports ?? []) {
    // Vendor data: redirect to the bare specifier regardless of the (stale)
    // edge kind recorded before the target's content was fingerprinted.
    const target = manifest?.files?.[imp.target];
    if (target?.kind === "npm-leaf" && target.vendorSpecifier) {
      mappings.push({
        source: imp.source,
        to: target.vendorSpecifier,
        exports: {},
      });
      continue;
    }
    if (imp.kind !== "local") continue;
    const producer = importMap.chunks?.[imp.target];
    if (!producer?.restored || producer.status !== "done") continue;
    mappings.push({
      source: imp.source,
      to: relativeImport(semanticPath, producer.restored),
      exports: producer.exports ?? {},
    });
  }
  return mappings;
}

type Built = {
  /** Deliverable files, paths relative to the target root. */
  files: Array<{ relPath: string; code: string }>;
  /** The path to remove on rollback (the file, or the chunk's directory). */
  promotionRoot: string;
  /** Actual public entry file recorded in IMPORT_MAP. */
  restoredPath: string;
  exportMap: Record<string, string>;
};

function toPosixPath(input: string): string {
  return input.split(path.sep).join("/");
}

function stripSourceExtension(input: string): string {
  return input.replace(/\.[cm]?[jt]sx?$/i, "");
}

function repoRelativeSourcePath(
  filePath: string | undefined,
  basename: string,
  rootDir?: string,
): string {
  const fromRoot = rootDir
    ? path.posix.join(toPosixPath(rootDir), `${basename}.js`)
    : `${basename}.js`;
  const raw = toPosixPath(filePath ?? fromRoot);
  const refIndex = raw.indexOf("ref/webview/assets/");
  if (refIndex >= 0) return raw.slice(refIndex);
  if (path.isAbsolute(filePath ?? "")) {
    const relative = toPosixPath(path.relative(process.cwd(), filePath!));
    if (!relative.startsWith("..")) return relative;
  }
  return fromRoot;
}

export function ensureProvenanceHeader(
  code: string,
  sourcePath: string,
  description: string,
): string {
  const normalized = `// Restored from ${sourcePath}`;
  if (code.startsWith("// Restored from ")) {
    return code.replace(/^\/\/ Restored from .*(?:\r?\n|$)/, `${normalized}\n`);
  }
  return `${normalized}\n// ${description}\n${code}`;
}

function exportedName(node: t.ExportSpecifier["exported"]): string {
  return t.isIdentifier(node) ? node.name : node.value;
}

export function inferManualExportMap(
  code: string,
  chunk: ManifestFile,
): Record<string, string> {
  const publicExports: string[] = [];
  try {
    const ast = parser.parse(code, {
      sourceType: "module",
      errorRecovery: true,
      allowImportExportEverywhere: true,
      allowReturnOutsideFunction: true,
      allowAwaitOutsideFunction: true,
      allowUndeclaredExports: true,
      plugins: PARSER_PLUGINS,
    });
    traverse(ast, {
      ExportNamedDeclaration(exportPath) {
        if (exportPath.node.source) return;
        const declaration = exportPath.node.declaration;
        if (t.isVariableDeclaration(declaration)) {
          for (const declarator of declaration.declarations) {
            if (t.isIdentifier(declarator.id)) {
              publicExports.push(declarator.id.name);
            }
          }
        } else if (
          (t.isFunctionDeclaration(declaration) ||
            t.isClassDeclaration(declaration)) &&
          declaration.id
        ) {
          publicExports.push(declaration.id.name);
        }
        for (const spec of exportPath.node.specifiers) {
          if (t.isExportSpecifier(spec))
            publicExports.push(exportedName(spec.exported));
        }
      },
      ExportDefaultDeclaration() {
        publicExports.push("default");
      },
    });
  } catch {
    return {};
  }

  const uniqueExports = [...new Set(publicExports)];
  const sourceExports = chunk.exports ?? [];
  const out: Record<string, string> = {};
  if (sourceExports.length === 1 && uniqueExports.length === 1) {
    out[sourceExports[0]!.exported] = uniqueExports[0]!;
    return out;
  }
  if (sourceExports.length === uniqueExports.length) {
    for (let index = 0; index < sourceExports.length; index += 1) {
      out[sourceExports[index]!.exported] = uniqueExports[index]!;
    }
    return out;
  }
  for (const sourceExport of sourceExports) {
    if (uniqueExports.includes(sourceExport.exported)) {
      out[sourceExport.exported] = sourceExport.exported;
    } else if (uniqueExports.includes(sourceExport.local)) {
      out[sourceExport.exported] = sourceExport.local;
    }
  }
  return out;
}

/**
 * Build a chunk's deliverable file set (contents + final relative paths) without
 * touching disk. icon/button use the typed semantic-finalize recipe; manual/split
 * use the agent candidate (files/<basename>/candidate.tsx|.ts or a
 * files/<basename>/candidate/ directory) if present, else the mechanical
 * checkpoint (which the gate rejects unless clean). The caller writes the files
 * at their final locations, gates them there (so relative imports to
 * already-promoted siblings resolve), and rolls back `promotionRoot` on failure.
 */
function buildCandidate(
  chunk: ManifestFile,
  args: {
    basename: string;
    semanticPath: string;
    recipe: string;
    fullDir: string;
    importMap: ImportMap;
    rootDir?: string;
    manifest?: Manifest;
  },
): Built {
  const { basename, semanticPath, recipe, fullDir } = args;
  // Provenance must be the repo-relative source path (`ref/webview/assets/<chunk>.js`),
  // not the manifest's absolute path — that's what the gate's header check expects.
  const sourcePath = repoRelativeSourcePath(chunk.path, basename, args.rootDir);
  const description = `${basename} chunk restored from the Codex webview bundle.`;
  const mappings = buildImportMappings(
    chunk,
    semanticPath,
    args.importMap,
    args.manifest,
  );
  const rewrite = (code: string) =>
    mappings.length > 0 ? rewriteSemanticImports(code, mappings) : code;

  if (recipe === "icon" || recipe === "button") {
    const checkpoint = readCheckpoint(fullDir, basename);
    if (checkpoint == null) {
      throw new Error(`no checkpoint to finalize for ${basename}`);
    }
    const result = semanticFinalize(checkpoint, {
      recipe: recipe === "icon" ? "icon" : "button",
      basename,
      sourcePath,
    });
    let files: Built["files"];
    if (result.layout === "single") {
      // One file lands at the planner's chosen path.
      files = [
        {
          relPath: semanticPath,
          code: ensureProvenanceHeader(
            rewrite(result.files[0]!.code),
            sourcePath,
            description,
          ),
        },
      ];
    } else {
      // Directory layout: place every file under the semanticPath directory,
      // dropping semantic-finalize's own top-level dir segment.
      files = result.files.map((f) => ({
        relPath: path.posix.join(
          semanticPath,
          f.path.split("/").slice(1).join("/"),
        ),
        code: ensureProvenanceHeader(rewrite(f.code), sourcePath, description),
      }));
    }
    return {
      files,
      promotionRoot: semanticPath,
      restoredPath: semanticPath,
      exportMap: result.exportMap,
    };
  }

  // manual / split: prefer an agent-rewritten candidate, else the checkpoint.
  const directoryCandidate = readCandidateDirectory(fullDir, basename);
  if (directoryCandidate) {
    const baseDir =
      path.posix.basename(stripSourceExtension(semanticPath)) === "index"
        ? path.posix.dirname(semanticPath)
        : stripSourceExtension(semanticPath);
    const files = directoryCandidate.files.map((f) => {
      const relPath = path.posix.join(baseDir, f.relPath);
      const perFileMappings = buildImportMappings(
        chunk,
        relPath,
        args.importMap,
        args.manifest,
      );
      const code =
        perFileMappings.length > 0
          ? rewriteSemanticImports(f.code, perFileMappings)
          : f.code;
      return {
        relPath,
        code: ensureProvenanceHeader(code, sourcePath, description),
      };
    });
    const entryRelPath = path.posix.join(baseDir, directoryCandidate.entry);
    return {
      files,
      promotionRoot: baseDir,
      restoredPath: entryRelPath,
      exportMap: inferManualExportMap(directoryCandidate.entrySource, chunk),
    };
  }

  const source =
    readCandidate(fullDir, basename) ?? readCheckpoint(fullDir, basename);
  if (source == null) {
    throw new Error(`no candidate or checkpoint for ${basename}`);
  }
  return {
    files: [
      {
        relPath: semanticPath,
        code: ensureProvenanceHeader(rewrite(source), sourcePath, description),
      },
    ],
    promotionRoot: semanticPath,
    restoredPath: semanticPath,
    exportMap: inferManualExportMap(source, chunk),
  };
}

function readCheckpoint(fullDir: string, basename: string): string | null {
  for (const ext of [".tsx", ".ts", ".jsx", ".js"]) {
    const p = path.join(fullDir, "checkpoints", `${basename}${ext}`);
    if (fs.existsSync(p)) return fs.readFileSync(p, "utf-8");
  }
  return null;
}

function readCandidate(fullDir: string, basename: string): string | null {
  for (const ext of [".tsx", ".ts"]) {
    const p = path.join(fullDir, "files", basename, `candidate${ext}`);
    if (fs.existsSync(p)) return fs.readFileSync(p, "utf-8");
  }
  return null;
}

function readCandidateDirectory(
  fullDir: string,
  basename: string,
): {
  files: Array<{ relPath: string; code: string }>;
  entry: string;
  entrySource: string;
} | null {
  const root = path.join(fullDir, "files", basename, "candidate");
  if (!fs.existsSync(root) || !fs.statSync(root).isDirectory()) return null;

  const files: Array<{ relPath: string; code: string }> = [];
  const visit = (dir: string): void => {
    for (const name of fs.readdirSync(dir).sort()) {
      const abs = path.join(dir, name);
      const stat = fs.statSync(abs);
      if (stat.isDirectory()) {
        visit(abs);
        continue;
      }
      if (!/\.[cm]?[jt]sx?$/i.test(name)) continue;
      files.push({
        relPath: toPosixPath(path.relative(root, abs)),
        code: fs.readFileSync(abs, "utf-8"),
      });
    }
  };
  visit(root);
  if (files.length === 0) return null;

  const entry =
    files.find((f) => /^index\.[cm]?[jt]sx?$/i.test(f.relPath))?.relPath ??
    files[0]!.relPath;
  const entrySource = files.find((f) => f.relPath === entry)!.code;
  return { files, entry, entrySource };
}

function qualityOptionsFor(
  classification: string | undefined,
  tier: "readable" | "deep",
): QualityGateOptions {
  if (classification === "vendor-runtime" || classification === "boundary") {
    return {
      ...DEFAULT_OPTIONS,
      vendored: true,
      allowFlat: true,
      allowMechanicalNames: true,
    };
  }
  if (classification === "data-asset") {
    return {
      ...DEFAULT_OPTIONS,
      allowFlat: true,
    };
  }
  // Readable tier ships organized-but-untyped output; deep tier enforces types.
  return { ...DEFAULT_OPTIONS, allowUntyped: tier === "readable" };
}

export type PromoteOrganizedOptions = {
  target: string;
  dryRun?: boolean;
  owner?: string;
  only?: Set<string> | null;
  limit?: number;
  /** "deep" (default) enforces TS types at promote; "readable" allows untyped. */
  tier?: "readable" | "deep";
  log?: (msg: string) => void;
  /** Emit a throttled progress line as the frontier drains (CLI sets this). */
  progress?: boolean;
};

export function promoteOrganized(
  opts: PromoteOrganizedOptions,
): PromoteResult[] {
  const log = opts.log ?? (() => {});
  const paths = pathsForTarget(opts.target);
  const manifest = readJson<Manifest>(paths.manifestPath);
  if (!manifest) throw new Error(`manifest not found: ${paths.manifestPath}`);
  const ledger = readJson<Ledger>(paths.ledgerPath) ?? {
    files: {},
    crossFileBindings: [],
  };
  const importMapPath = path.join(opts.target, "IMPORT_MAP.json");
  const importMap = readJson<ImportMap>(importMapPath) ?? {};
  if (!importMap.chunks) importMap.chunks = {};

  const owner = opts.owner ?? `agent-${process.pid}`;
  const results: PromoteResult[] = [];
  // In dry-run we still write deliverables to disk (so a consumer's relative
  // imports to already-promoted siblings resolve during gating), then remove
  // them all at the end.
  const dryWritten: string[] = [];

  const writeBuilt = (built: Built): void => {
    for (const f of built.files) {
      const dest = path.join(opts.target, f.relPath);
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.writeFileSync(dest, f.code);
      // Format every deliverable with prettier BEFORE it is gated and copied,
      // so promoted files in restored/ are never raw @babel/generator output
      // (no blank lines, 400-char lines, multi-line JSX returns without parens).
      // Degrades gracefully when prettier is unavailable (format.ts probes it).
      if (/\.(tsx?|jsx?|mjs|cjs)$/.test(dest)) {
        const fmt = formatPath(dest);
        if (!fmt.ok && fmt.stderr) {
          log(`  prettier skipped for ${f.relPath}: ${fmt.stderr.trim()}`);
        }
      }
    }
  };
  const rollback = (promotionRoot: string): void => {
    const abs = path.join(opts.target, promotionRoot);
    fs.rmSync(abs, { recursive: true, force: true });
    const domain = path.dirname(abs);
    try {
      if (domain !== opts.target && fs.readdirSync(domain).length === 0) {
        fs.rmSync(domain, { recursive: true, force: true });
      }
    } catch {
      // best-effort
    }
  };

  let processed = 0;
  let promotedCount = 0;
  const pendingTotal = Object.values(manifest.files).filter(
    (f) => f.kind === "local" && f.organization && !f.stages?.promoted,
  ).length;
  const prog = opts.progress
    ? new Progress({ label: "promote", total: pendingTotal })
    : null;
  // Chunks we tried this run but couldn't promote (gate fail / lock / error) —
  // skip them so the loop drains instead of re-picking the same stuck chunk.
  const attempted = new Set<string>();
  // Drain the promote frontier: producers promote before consumers, so each
  // consumer's import rewrites point at already-promoted producer files.
  for (;;) {
    if (opts.limit !== undefined && processed >= opts.limit) break;
    const frontier = computeFrontier(manifest, ledger as never, paths.fullDir, {
      stage: "promote",
    });
    const next = frontier.find((item) => {
      const file = manifest.files[item.basename];
      if (!file?.organization?.semanticPath) return false;
      if (opts.only && !opts.only.has(item.basename)) return false;
      if (attempted.has(item.basename)) return false;
      return true;
    });
    if (!next) break;

    const basename = next.basename;
    const file = manifest.files[basename]!;
    const org = file.organization!;
    processed++;
    prog?.tick(1, `${promotedCount} promoted · ${attempted.size} blocked`);

    let lockHeld = false;
    try {
      if (!opts.dryRun) {
        acquireLock(paths.fullDir, basename, "promote", owner);
        lockHeld = true;
      }
      const built = buildCandidate(file, {
        basename,
        semanticPath: org.semanticPath,
        recipe: org.recipe ?? "manual",
        fullDir: paths.fullDir,
        importMap,
        rootDir: manifest.rootDir,
        manifest,
      });
      // Write at the FINAL location so relative imports to promoted siblings
      // resolve, gate in place, then keep or roll back.
      writeBuilt(built);
      const qopts = qualityOptionsFor(org.classification, opts.tier ?? "deep");
      const issues = [
        ...new Set(
          built.files.flatMap((f) =>
            analyzeSource(
              f.code,
              path.join(opts.target, f.relPath),
              qopts,
            ).issues.map((i) => i.code),
          ),
        ),
      ];

      if (issues.length > 0) {
        rollback(built.promotionRoot);
        log(`promote: FAIL ${basename} (${issues.join(", ")})`);
        results.push({
          basename,
          promoted: false,
          semanticPath: org.semanticPath,
          reason: "gate rejected candidate",
          issues,
        });
        attempted.add(basename);
        continue; // resumable: leave unpromoted, drain the rest
      }

      // Gate passed — record success in-memory (so downstream consumers see it).
      importMap.chunks![basename] = {
        ...(importMap.chunks![basename] ?? {}),
        restored: built.restoredPath,
        ...(Object.keys(built.exportMap).length > 0
          ? { exports: built.exportMap }
          : {}),
        status: "done",
      };
      file.stages.promoted = true;
      file.lastUpdated = new Date().toISOString();
      manifest.updatedAt = new Date().toISOString();

      if (opts.dryRun) {
        dryWritten.push(built.promotionRoot);
        log(`[dry] ${basename} → ${built.restoredPath}  PASS`);
        results.push({
          basename,
          promoted: false,
          semanticPath: built.restoredPath,
          reason: "would promote",
        });
      } else {
        writeJsonAtomic(importMapPath, importMap);
        writeJsonAtomic(paths.manifestPath, manifest);
        promotedCount++;
        log(`promote: ${basename} → ${built.restoredPath}`);
        results.push({
          basename,
          promoted: true,
          semanticPath: built.restoredPath,
          reason: "promoted",
        });
      }
    } catch (err) {
      if (err instanceof LockHeldError) {
        log(`promote: ${basename} locked by ${err.info.owner}; skipping`);
        attempted.add(basename); // another agent owns it this run
        results.push({
          basename,
          promoted: false,
          semanticPath: org.semanticPath,
          reason: "locked by another agent",
        });
        continue;
      }
      log(`promote: ERROR ${basename} ${(err as Error).message}`);
      results.push({
        basename,
        promoted: false,
        semanticPath: org.semanticPath,
        reason: (err as Error).message,
      });
      attempted.add(basename); // avoid re-picking a hard-failing chunk
    } finally {
      if (lockHeld) {
        try {
          releaseLock(paths.fullDir, basename, "promote", { force: true });
        } catch {
          // best-effort
        }
      }
    }
  }

  prog?.done(`${promotedCount} promoted · ${attempted.size} blocked`);
  // A dry run leaves no public files behind (deepest paths first).
  if (opts.dryRun) {
    for (const root of [...dryWritten].reverse()) rollback(root);
  }
  return results;
}

// ---- CLI -------------------------------------------------------------------

const USAGE = `Usage: bun scripts/promote-organized.ts --target <dir> [options]

Drain the promote frontier: build each organized chunk's typed deliverable, gate
it, copy it to its semantic path, update IMPORT_MAP.json, and rewrite imports.

Options:
  --target <dir>     Target restore root whose _full/ to operate on (required).
  --dry-run          Preview every move + gate verdict; write nothing.
  --owner <id>       Lock owner identifier (default: agent-<pid>).
  --only <list>      Comma-separated basenames to restrict promotion to.
  --limit <n>        Promote at most n chunks this run.
  --tier <t>         deep (default, enforces TS types) | readable (allows untyped).

Exit codes: 0 success · 1 I/O · 64 usage.
`;

async function main(): Promise<void> {
  let parsed;
  try {
    parsed = parseArgs({
      args: process.argv.slice(2),
      options: {
        target: { type: "string" },
        "dry-run": { type: "boolean", default: false },
        owner: { type: "string" },
        only: { type: "string" },
        limit: { type: "string" },
        tier: { type: "string" },
      },
      allowPositionals: true,
    });
  } catch (err) {
    console.error(USAGE);
    console.error((err as Error).message);
    process.exit(64);
  }
  const { values } = parsed;
  if (!values.target) {
    console.error(USAGE);
    process.exit(64);
  }
  const only = values.only
    ? new Set(
        values.only
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
      )
    : null;
  const limit = values.limit ? parseInt(values.limit, 10) : undefined;
  const tier = values.tier === "readable" ? "readable" : "deep";

  try {
    const results = promoteOrganized({
      target: values.target,
      dryRun: values["dry-run"],
      owner: values.owner,
      only,
      limit,
      tier,
      progress: true,
      log: (msg) => console.error(msg),
    });
    const promoted = results.filter((r) => r.promoted).length;
    const failed = results.filter((r) => !r.promoted && r.issues).length;
    console.error(
      `promote-organized: ${promoted} promoted · ${failed} gate-failed · ${results.length} considered`,
    );
  } catch (err) {
    console.error((err as Error).message);
    process.exit(1);
  }
}

if (import.meta.main) {
  await main();
}
