import * as fs from "node:fs";
import * as path from "node:path";
import { parseArgs } from "node:util";
import {
  writeJsonAtomic,
  type Manifest,
  type ManifestFile,
  type ManifestStages,
  type OrganizationClassification,
  type OrganizationRecipe,
} from "./build-import-graph.ts";
import {
  buildCrossFileBindings,
  type Ledger,
  type LedgerFile,
  type LedgerSymbol,
} from "./build-symbol-ledger.ts";
import { isLikelyAppChunk } from "./chunk-classification.ts";

export type StageName =
  | "extract"
  | "rename"
  | "polish"
  | "finalize"
  | "organize"
  | "promote";
const STAGES: StageName[] = [
  "extract",
  "rename",
  "polish",
  "finalize",
  "organize",
  "promote",
];
const STAGE_FIELD: Record<StageName, keyof ManifestStages> = {
  extract: "extracted",
  rename: "renamed",
  polish: "polished",
  finalize: "finalized",
  organize: "organized",
  promote: "promoted",
};

/** Exit code reserved for "lock already held by another agent". */
const EX_LOCKED = 75;

const NOW = (): string => new Date().toISOString();

export type LockInfo = {
  owner: string;
  pid: number;
  basename: string;
  stage: StageName;
  claimedAt: string;
};

export class LockHeldError extends Error {
  info: LockInfo;
  constructor(info: LockInfo) {
    super(
      `lock held by ${info.owner} (pid ${info.pid}) since ${info.claimedAt}`,
    );
    this.info = info;
    this.name = "LockHeldError";
  }
}

function lockPath(fullDir: string, basename: string, stage: StageName): string {
  return path.join(fullDir, "locks", `${basename}.${stage}.lock`);
}

function readLockFile(p: string): LockInfo | null {
  try {
    return JSON.parse(fs.readFileSync(p, "utf-8")) as LockInfo;
  } catch {
    return null;
  }
}

const STALE_LOCK_AGE_MS = 30 * 60 * 1000;

export function isStale(p: string): boolean {
  try {
    const stat = fs.statSync(p);
    return Date.now() - stat.mtimeMs > STALE_LOCK_AGE_MS;
  } catch {
    return false;
  }
}

/**
 * Acquire `(basename, stage)` lock with `O_EXCL`. Throws `LockHeldError`
 * when another agent holds it (and `--steal` was not requested).
 */
export function acquireLock(
  fullDir: string,
  basename: string,
  stage: StageName,
  owner: string,
  opts: { steal?: boolean } = {},
): LockInfo {
  const p = lockPath(fullDir, basename, stage);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  const info: LockInfo = {
    owner,
    pid: process.pid,
    basename,
    stage,
    claimedAt: NOW(),
  };
  const payload = JSON.stringify(info, null, 2) + "\n";
  try {
    fs.writeFileSync(p, payload, { flag: "wx" });
    return info;
  } catch (err) {
    const e = err as NodeJS.ErrnoException;
    if (e.code !== "EEXIST") throw err;
    const existing = readLockFile(p);
    if (existing && opts.steal && isStale(p)) {
      fs.unlinkSync(p);
      fs.writeFileSync(p, payload, { flag: "wx" });
      return info;
    }
    if (existing) throw new LockHeldError(existing);
    throw new LockHeldError({
      owner: "unknown",
      pid: 0,
      basename,
      stage,
      claimedAt: "unknown",
    });
  }
}

export function releaseLock(
  fullDir: string,
  basename: string,
  stage: StageName,
  opts: { force?: boolean; owner?: string } = {},
): boolean {
  const p = lockPath(fullDir, basename, stage);
  if (!fs.existsSync(p)) return false;
  if (!opts.force && opts.owner) {
    const existing = readLockFile(p);
    if (existing && existing.owner !== opts.owner) {
      throw new LockHeldError(existing);
    }
  }
  fs.unlinkSync(p);
  return true;
}

export type LedgerPaths = {
  fullDir: string;
  manifestPath: string;
  ledgerPath: string;
};

export function pathsForTarget(targetDir: string): LedgerPaths {
  const fullDir = path.join(targetDir, ".deobfuscate-javascript", "_full");
  return {
    fullDir,
    manifestPath: path.join(fullDir, "manifest.json"),
    ledgerPath: path.join(fullDir, "ledger.json"),
  };
}

function readManifest(p: string): Manifest {
  return JSON.parse(fs.readFileSync(p, "utf-8")) as Manifest;
}

function readLedger(p: string): Ledger {
  return JSON.parse(fs.readFileSync(p, "utf-8")) as Ledger;
}

function recomputeTotals(file: LedgerFile): void {
  const totals = { pending: 0, claimed: 0, done: 0 };
  for (const s of file.symbols) totals[s.status]++;
  file.totals = totals;
}

/**
 * Suggest the next `(basename, stage)` to work on. Strategy:
 *   1. Prefer files whose dependencies (outgoing edges to local files) are
 *      already at-or-past the target stage (so consumers don't get stuck on
 *      half-done producers).
 *   2. Prefer deeper-depth files (leaves first).
 *   3. Prefer files with more pending symbols (bigger bang per claim).
 */
export type NextCandidate = {
  basename: string;
  stage: StageName;
  pending: number;
  depth: number;
  reason: string;
};

export function suggestNext(
  manifest: Manifest,
  ledger: Ledger,
  fullDir: string,
  opts: { stage?: StageName; skip?: Set<string> } = {},
): NextCandidate | null {
  const skip = opts.skip ?? new Set();
  const stages = opts.stage ? [opts.stage] : STAGES;

  type Row = {
    basename: string;
    stage: StageName;
    pending: number;
    depth: number;
    score: number;
    reason: string;
  };
  const rows: Row[] = [];

  for (const [basename, file] of Object.entries(manifest.files)) {
    // Only `local` files are restorable. `oversized-local`, `npm-leaf`, and
    // `external` are skipped — they live in the manifest as terminal nodes.
    // `faced` boundary chunks are terminal too (satisfied via their facade).
    if (file.kind !== "local") continue;
    if (file.stages.faced) continue;
    if (skip.has(basename)) continue;
    for (const stage of stages) {
      const field = STAGE_FIELD[stage];
      if (file.stages[field]) continue;
      const lock = lockPath(fullDir, basename, stage);
      if (fs.existsSync(lock) && !isStale(lock)) continue;

      const ledgerFile = ledger.files[basename];
      const pending = ledgerFile?.totals.pending ?? 0;

      // Dependency readiness: all outgoing local edges should have the same
      // stage already done (otherwise consumer is premature). Oversized and
      // npm-leaf deps are always considered ready (they're never restored); a
      // `faced` dep is satisfied at every stage via its facade.
      let unready = 0;
      for (const imp of file.imports ?? []) {
        if (imp.kind !== "local") continue;
        const dep = manifest.files[imp.target];
        if (!dep) continue;
        if (dep.kind !== "local") continue;
        if (!dep.stages[field] && !dep.stages.faced) unready++;
      }

      const score =
        // Larger = better. Penalize unready deps; reward depth and pending.
        file.depth * 100 + Math.min(pending, 1000) - unready * 10000;

      rows.push({
        basename,
        stage,
        pending,
        depth: file.depth,
        score,
        reason:
          unready > 0
            ? `${unready} dep(s) not yet ${stage}; deferred`
            : `${pending} symbol(s) pending`,
      });
    }
  }

  if (rows.length === 0) return null;
  rows.sort((a, b) => b.score - a.score);
  const best = rows[0]!;
  return {
    basename: best.basename,
    stage: best.stage,
    pending: best.pending,
    depth: best.depth,
    reason: best.reason,
  };
}

export type FrontierItem = {
  basename: string;
  stage: StageName;
  pending: number;
  depth: number;
};

/**
 * The restorable frontier: every local file that can be worked on right now —
 * not yet done at the stage, not locked, and with all local dependencies
 * already at-or-past that stage (or `faced`). This is the leaf-first batch a
 * fan-out loop should claim. `suggestNext` returns the single best of these;
 * `computeFrontier` returns the whole set (one entry per file, at its first
 * restorable stage), deepest first.
 */
export function computeFrontier(
  manifest: Manifest,
  ledger: Ledger,
  fullDir: string,
  opts: { stage?: StageName; skip?: Set<string> } = {},
): FrontierItem[] {
  const skip = opts.skip ?? new Set();
  const stages = opts.stage ? [opts.stage] : STAGES;
  const items: FrontierItem[] = [];

  for (const [basename, file] of Object.entries(manifest.files)) {
    if (file.kind !== "local") continue;
    if (file.stages.faced) continue;
    if (skip.has(basename)) continue;
    for (const stage of stages) {
      const field = STAGE_FIELD[stage];
      if (file.stages[field]) continue;
      const lock = lockPath(fullDir, basename, stage);
      if (fs.existsSync(lock) && !isStale(lock)) continue;

      let ready = true;
      for (const imp of file.imports ?? []) {
        if (imp.kind !== "local") continue;
        const dep = manifest.files[imp.target];
        if (!dep || dep.kind !== "local") continue;
        if (!dep.stages[field] && !dep.stages.faced) {
          ready = false;
          break;
        }
      }
      if (!ready) continue;

      const ledgerFile = ledger.files[basename];
      items.push({
        basename,
        stage,
        pending: ledgerFile?.totals.pending ?? 0,
        depth: file.depth,
      });
      break; // first restorable stage per file
    }
  }

  items.sort((a, b) => b.depth - a.depth || (a.basename < b.basename ? -1 : 1));
  return items;
}

export type StatusReport = {
  files: number;
  oversized: number;
  npmLeaves: number;
  byStage: Record<
    StageName,
    { done: number; pending: number; claimed: number }
  >;
  symbols: { pending: number; claimed: number; done: number };
  locks: LockInfo[];
};

export function computeStatus(
  manifest: Manifest,
  ledger: Ledger,
  fullDir: string,
): StatusReport {
  const byStage: StatusReport["byStage"] = {
    extract: { done: 0, pending: 0, claimed: 0 },
    rename: { done: 0, pending: 0, claimed: 0 },
    polish: { done: 0, pending: 0, claimed: 0 },
    finalize: { done: 0, pending: 0, claimed: 0 },
    organize: { done: 0, pending: 0, claimed: 0 },
    promote: { done: 0, pending: 0, claimed: 0 },
  };
  let files = 0;
  let oversized = 0;
  let npmLeaves = 0;
  for (const file of Object.values(manifest.files)) {
    if (file.kind === "oversized-local") {
      oversized++;
      continue;
    }
    if (file.kind === "npm-leaf") {
      npmLeaves++;
      continue;
    }
    if (file.kind !== "local") continue;
    files++;
    for (const stage of STAGES) {
      const field = STAGE_FIELD[stage];
      if (file.stages[field]) byStage[stage].done++;
      else byStage[stage].pending++;
    }
  }

  const locks: LockInfo[] = [];
  const locksDir = path.join(fullDir, "locks");
  if (fs.existsSync(locksDir)) {
    for (const name of fs.readdirSync(locksDir)) {
      if (!name.endsWith(".lock")) continue;
      const info = readLockFile(path.join(locksDir, name));
      if (info) {
        locks.push(info);
        if (byStage[info.stage]) byStage[info.stage].claimed++;
      }
    }
  }

  const sym = { pending: 0, claimed: 0, done: 0 };
  for (const f of Object.values(ledger.files)) {
    sym.pending += f.totals.pending;
    sym.claimed += f.totals.claimed;
    sym.done += f.totals.done;
  }

  return { files, oversized, npmLeaves, byStage, symbols: sym, locks };
}

/**
 * Apply a `renames.json` map (id → newName) to the file's ledger,
 * marking matched symbols as `done` with the new name.
 */
export function applyRenamesToLedger(
  ledgerFile: LedgerFile,
  renames: Record<string, string>,
  owner: string | null,
): { matched: number; unmatched: string[] } {
  const byId = new Map<string, LedgerSymbol>();
  for (const s of ledgerFile.symbols) byId.set(s.id, s);
  let matched = 0;
  const unmatched: string[] = [];
  for (const [id, newName] of Object.entries(renames)) {
    const sym = byId.get(id);
    if (!sym) {
      unmatched.push(id);
      continue;
    }
    sym.restoredName = newName;
    sym.status = "done";
    sym.owner = null;
    sym.completedAt = NOW();
    matched++;
  }
  recomputeTotals(ledgerFile);
  return { matched, unmatched };
}

/**
 * After a producer file's renames land, push restored names into every
 * `crossFileBindings` row that references it. Optionally also auto-fill any
 * downstream consumer symbol whose `restoredName` is still null and whose
 * local alias matches the consumer-local in the binding.
 */
export function propagateCrossFile(
  ledger: Ledger,
  manifest: Manifest,
  opts: { from?: string; autoFillConsumers?: boolean } = {},
): { bindingsUpdated: number; consumersUpdated: number } {
  let bindingsUpdated = 0;
  let consumersUpdated = 0;

  const producerExportRestored = new Map<
    string,
    Map<string, { restoredName: string | null; symbolId: string | null }>
  >();
  for (const [basename, file] of Object.entries(ledger.files)) {
    const m = new Map<
      string,
      { restoredName: string | null; symbolId: string | null }
    >();
    for (const s of file.symbols) {
      if (s.isExport && s.exportedAs) {
        m.set(s.exportedAs, {
          restoredName: s.restoredName,
          symbolId: s.id,
        });
      }
    }
    producerExportRestored.set(basename, m);
  }

  for (const binding of ledger.crossFileBindings) {
    if (opts.from && binding.producer !== opts.from) continue;
    const map = producerExportRestored.get(binding.producer);
    const info = map?.get(binding.producerExportedAs);
    if (info) {
      if (
        binding.producerSymbolId !== info.symbolId ||
        binding.producerRestoredName !== info.restoredName
      ) {
        binding.producerSymbolId = info.symbolId;
        binding.producerRestoredName = info.restoredName;
        bindingsUpdated++;
      }
    }

    if (
      opts.autoFillConsumers &&
      binding.producerRestoredName &&
      binding.consumerSymbolId
    ) {
      const consumerFile = ledger.files[binding.consumer];
      if (!consumerFile) continue;
      const sym = consumerFile.symbols.find(
        (s) => s.id === binding.consumerSymbolId,
      );
      if (sym && !sym.restoredName && sym.status === "pending") {
        sym.restoredName = binding.producerRestoredName;
        sym.status = "done";
        sym.completedAt = NOW();
        consumersUpdated++;
        recomputeTotals(consumerFile);
      }
    }
  }

  // If the manifest has new edges since the ledger was built, refresh the
  // bindings list (idempotent).
  ledger.crossFileBindings = buildCrossFileBindings({
    manifest,
    ledgerFiles: ledger.files,
  });

  return { bindingsUpdated, consumersUpdated };
}

export const ORGANIZATION_RECIPES: OrganizationRecipe[] = [
  "icon",
  "button",
  "split",
  "manual",
];
export const ORGANIZATION_CLASSIFICATIONS: OrganizationClassification[] = [
  "app-feature",
  "data-asset",
  "icon",
  "single-util",
  "vendor-npm",
  "vendor-runtime",
  "boundary",
];

/**
 * Record a chunk's chosen domain + public path on its manifest entry and flip
 * `stages.organized`. The data-only half of the organize → promote phase; the
 * `promote` stage later writes the deliverable to `organization.semanticPath`.
 */
export function setOrganization(
  manifest: Manifest,
  basename: string,
  info: {
    domain: string;
    semanticPath: string;
    recipe?: OrganizationRecipe;
    classification: OrganizationClassification;
    source?: "heuristic" | "agent-override";
  },
): ManifestFile {
  const file = manifest.files[basename];
  if (!file) throw new Error(`unknown basename: ${basename}`);
  file.organization = {
    domain: info.domain,
    semanticPath: info.semanticPath,
    recipe: info.recipe,
    classification: info.classification,
    source: info.source ?? "agent-override",
    decidedAt: NOW(),
  };
  file.stages.organized = true;
  file.lastUpdated = NOW();
  return file;
}

// ---- CLI -------------------------------------------------------------------

const USAGE = `Usage: bun scripts/ledger.ts <subcommand> [args]

Subcommands:
  status                                  Print a one-line status summary.
  next [--stage rename] [--skip <list>]   Suggest the next (basename, stage).
  frontier [--stage rename] [--skip <list>]
                                          List every file restorable right now
                                          (deps done or faced), deepest first.
  claim <basename> <stage> --owner <id>   Acquire the (basename, stage) lock.
  release <basename> <stage>              Release a lock you hold.
  mark-done <basename> <stage> [--renames <renames.json>]
                                          Mark stage done; also flips matched
                                          symbol statuses to "done" when
                                          --renames is passed (rename stage).
  mark-faced <basename> [--force]         Mark a vendor/runtime boundary chunk as
                                          faced (given a typed facade); consumers
                                          treat it as satisfied at every stage.
                                          Refuses app/feature basenames unless
                                          --force — those must be restored, not faced.
  set-organization <basename> --domain <d> --semantic-path <p>
                    [--recipe icon|button|split|manual]
                    [--classification app-feature|icon|single-util|vendor-runtime|boundary]
                                          Record the chosen domain + public path and
                                          flip stages.organized. Usually written in bulk
                                          by plan-organize.ts --apply; use this to override
                                          one chunk's domain/path before promotion.
  propagate-cross-file [--from <basename>] [--auto-fill]
                                          Push producer restored names into
                                          downstream consumer bindings.
  reset <basename> [--stage rename]       Roll a file's stage back to pending,
                                          reset matching symbols to pending.

Common options:
  --target <dir>                          Target dir whose _full/ to operate on.
  --steal                                 (claim) Reclaim a stale (>30 min) lock.
  --owner <id>                            (claim/release) Agent identifier.

Exit codes: 0 success · 1 I/O · 2 parse · 64 usage · 75 lock held.
`;

function need(values: Record<string, string | undefined>, key: string): string {
  const v = values[key];
  if (!v) {
    console.error(`--${key} is required`);
    console.error(USAGE);
    process.exit(64);
  }
  return v!;
}

const KNOWN_SUBCOMMANDS = new Set([
  "status",
  "next",
  "frontier",
  "claim",
  "release",
  "mark-done",
  "mark-faced",
  "set-organization",
  "propagate-cross-file",
  "reset",
]);

async function main(): Promise<void> {
  const argv = process.argv.slice(2);
  if (argv.length === 0) {
    console.error(USAGE);
    process.exit(64);
  }
  const sub = argv[0]!;
  if (!KNOWN_SUBCOMMANDS.has(sub)) {
    console.error(`unknown subcommand: ${sub}`);
    console.error(USAGE);
    process.exit(64);
  }
  const rest = argv.slice(1);
  let parsed;
  try {
    parsed = parseArgs({
      args: rest,
      options: {
        target: { type: "string" },
        owner: { type: "string" },
        stage: { type: "string" },
        skip: { type: "string" },
        steal: { type: "boolean", default: false },
        force: { type: "boolean", default: false },
        renames: { type: "string" },
        from: { type: "string" },
        "auto-fill": { type: "boolean", default: false },
        domain: { type: "string" },
        "semantic-path": { type: "string" },
        recipe: { type: "string" },
        classification: { type: "string" },
      },
      allowPositionals: true,
    });
  } catch (err) {
    console.error(USAGE);
    console.error((err as Error).message);
    process.exit(64);
  }
  const { values, positionals } = parsed;
  const targetDir = values.target ?? ".";
  const paths = pathsForTarget(targetDir);
  if (!fs.existsSync(paths.manifestPath)) {
    console.error(`manifest not found: ${paths.manifestPath}`);
    console.error("run scripts/build-import-graph.ts first");
    process.exit(1);
  }
  const manifest = readManifest(paths.manifestPath);
  const ledger = fs.existsSync(paths.ledgerPath)
    ? readLedger(paths.ledgerPath)
    : ({
        version: 1,
        manifest: "manifest.json",
        createdAt: NOW(),
        updatedAt: NOW(),
        files: {},
        crossFileBindings: [],
      } satisfies Ledger);

  switch (sub) {
    case "status": {
      const report = computeStatus(manifest, ledger, paths.fullDir);
      const tags: string[] = [`${report.files} local`];
      if (report.oversized > 0)
        tags.push(`${report.oversized} oversized-local (skipped)`);
      if (report.npmLeaves > 0) tags.push(`${report.npmLeaves} npm-leaf`);
      console.log(`files: ${tags.join(" · ")}`);
      for (const stage of STAGES) {
        const s = report.byStage[stage];
        console.log(
          `  ${stage.padEnd(8)} done=${s.done} pending=${s.pending} claimed=${s.claimed}`,
        );
      }
      console.log(
        `symbols: pending=${report.symbols.pending} claimed=${report.symbols.claimed} done=${report.symbols.done}`,
      );

      // Completion overview — the deep/whole-tree restore is done only when
      // every local chunk is promoted. Surface organized/promoted counts, the
      // promote frontier (chunks whose deps are ready), and the actionable
      // "blocked" list: organized chunks in the frontier with no agent candidate
      // yet (write files/<basename>/candidate.tsx, then re-run promote-organized).
      const organized = report.byStage.organize.done;
      const promoted = report.byStage.promote.done;
      const totalLocal = report.files;
      const pctPromoted =
        totalLocal > 0 ? Math.floor((promoted / totalLocal) * 100) : 0;
      const promoteFrontier = computeFrontier(manifest, ledger, paths.fullDir, {
        stage: "promote",
      });
      const hasCandidate = (basename: string): boolean =>
        [".tsx", ".ts"].some((ext) =>
          fs.existsSync(
            path.join(paths.fullDir, "files", basename, `candidate${ext}`),
          ),
        );
      const blocked = promoteFrontier
        .map((f) => f.basename)
        .filter((b) => {
          const file = manifest.files[b];
          return (
            file?.kind === "local" &&
            file.organization?.semanticPath &&
            !file.stages?.promoted &&
            !hasCandidate(b)
          );
        });
      console.log(
        `completion: ${promoted}/${totalLocal} promoted (${pctPromoted}%) · ${organized} organized · ${promoteFrontier.length} ready-to-promote`,
      );
      if (blocked.length > 0) {
        console.log(
          `  ${blocked.length} ready chunk(s) need an agent candidate (write files/<basename>/candidate.tsx, then promote-organized):`,
        );
        for (const b of blocked.slice(0, 15)) console.log(`    ${b}`);
        if (blocked.length > 15)
          console.log(`    … and ${blocked.length - 15} more`);
      } else if (promoted < totalLocal) {
        console.log(
          `  no chunk is candidate-ready right now — run promote-organized to drain auto-promotable chunks, or check 'frontier --stage organize'`,
        );
      }

      if (report.locks.length > 0) {
        console.log(`active locks: ${report.locks.length}`);
        for (const l of report.locks) {
          console.log(
            `  ${l.basename}.${l.stage} ← ${l.owner} (${l.claimedAt})`,
          );
        }
      }
      break;
    }
    case "next": {
      const skip = new Set(
        (values.skip ?? "")
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
      );
      const stage = values.stage as StageName | undefined;
      if (stage && !STAGES.includes(stage)) {
        console.error(
          `unknown --stage ${stage}; expected one of: ${STAGES.join(", ")}`,
        );
        process.exit(64);
      }
      const cand = suggestNext(manifest, ledger, paths.fullDir, {
        stage,
        skip,
      });
      if (!cand) {
        console.log("(no work pending)");
        break;
      }
      console.log(
        `${cand.basename}\t${cand.stage}\tdepth=${cand.depth}\tpending=${cand.pending}\t${cand.reason}`,
      );
      break;
    }
    case "frontier": {
      const skip = new Set(
        (values.skip ?? "")
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
      );
      const stage = values.stage as StageName | undefined;
      if (stage && !STAGES.includes(stage)) {
        console.error(
          `unknown --stage ${stage}; expected one of: ${STAGES.join(", ")}`,
        );
        process.exit(64);
      }
      const frontier = computeFrontier(manifest, ledger, paths.fullDir, {
        stage,
        skip,
      });
      if (frontier.length === 0) {
        console.log("(frontier empty)");
        break;
      }
      for (const item of frontier) {
        console.log(
          `${item.basename}\t${item.stage}\tdepth=${item.depth}\tpending=${item.pending}`,
        );
      }
      console.error(`frontier: ${frontier.length} file(s) restorable now`);
      break;
    }
    case "claim": {
      const basename = positionals[0];
      const stage = positionals[1] as StageName | undefined;
      if (!basename || !stage || !STAGES.includes(stage)) {
        console.error(`Usage: bun scripts/ledger.ts claim <basename> <stage>`);
        process.exit(64);
      }
      const owner = values.owner ?? `agent-${process.pid}`;
      try {
        const info = acquireLock(paths.fullDir, basename, stage, owner, {
          steal: values.steal,
        });
        const ledgerFile = ledger.files[basename];
        if (ledgerFile) {
          ledgerFile.totals.claimed = (ledgerFile.totals.claimed ?? 0) + 0; // touch
        }
        const file = manifest.files[basename];
        if (file) {
          file.owner = owner;
          file.claimedAt = info.claimedAt;
          file.lastUpdated = NOW();
        }
        manifest.updatedAt = NOW();
        writeJsonAtomic(paths.manifestPath, manifest);
        console.log(`claimed ${basename}.${stage} as ${owner}`);
      } catch (err) {
        if (err instanceof LockHeldError) {
          console.error(
            `lock held: ${err.info.owner} since ${err.info.claimedAt}`,
          );
          process.exit(EX_LOCKED);
        }
        throw err;
      }
      break;
    }
    case "release": {
      const basename = positionals[0];
      const stage = positionals[1] as StageName | undefined;
      if (!basename || !stage || !STAGES.includes(stage)) {
        console.error(
          `Usage: bun scripts/ledger.ts release <basename> <stage>`,
        );
        process.exit(64);
      }
      try {
        const ok = releaseLock(paths.fullDir, basename, stage, {
          force: values.force,
          owner: values.owner,
        });
        const file = manifest.files[basename];
        if (file) {
          file.owner = null;
          file.claimedAt = null;
          file.lastUpdated = NOW();
        }
        manifest.updatedAt = NOW();
        writeJsonAtomic(paths.manifestPath, manifest);
        console.log(ok ? `released ${basename}.${stage}` : `(no lock held)`);
      } catch (err) {
        if (err instanceof LockHeldError) {
          console.error(`refusing to release lock held by ${err.info.owner}`);
          console.error("pass --force to override");
          process.exit(EX_LOCKED);
        }
        throw err;
      }
      break;
    }
    case "mark-done": {
      const basename = positionals[0];
      const stage = positionals[1] as StageName | undefined;
      if (!basename || !stage || !STAGES.includes(stage)) {
        console.error(
          `Usage: bun scripts/ledger.ts mark-done <basename> <stage>`,
        );
        process.exit(64);
      }
      const file = manifest.files[basename];
      if (!file) {
        console.error(`unknown basename: ${basename}`);
        process.exit(1);
      }
      const field = STAGE_FIELD[stage];
      file.stages[field] = true;
      file.owner = null;
      file.claimedAt = null;
      file.lastUpdated = NOW();
      manifest.updatedAt = NOW();

      if (values.renames && fs.existsSync(values.renames)) {
        const renames = JSON.parse(
          fs.readFileSync(values.renames, "utf-8"),
        ) as Record<string, string>;
        const ledgerFile = ledger.files[basename];
        if (ledgerFile) {
          const result = applyRenamesToLedger(ledgerFile, renames, null);
          console.log(
            `renames: ${result.matched} matched · ${result.unmatched.length} unmatched`,
          );
        } else {
          console.error(
            `no ledger entry for ${basename}; skipping renames apply`,
          );
        }
        propagateCrossFile(ledger, manifest, { from: basename });
      }
      ledger.updatedAt = NOW();

      writeJsonAtomic(paths.manifestPath, manifest);
      writeJsonAtomic(paths.ledgerPath, ledger);

      try {
        releaseLock(paths.fullDir, basename, stage, { force: true });
      } catch {
        // best-effort
      }
      console.log(`${basename}.${stage} → done`);
      break;
    }
    case "mark-faced": {
      const basename = positionals[0];
      if (!basename) {
        console.error(
          `Usage: bun scripts/ledger.ts mark-faced <basename> [--force]`,
        );
        process.exit(64);
      }
      const file = manifest.files[basename];
      if (!file) {
        console.error(`unknown basename: ${basename}`);
        process.exit(1);
      }
      if (isLikelyAppChunk(basename) && !values.force) {
        console.error(
          `refusing to face "${basename}": it looks like project/app code (an app entry ` +
            `or a feature chunk), not a third-party vendor/runtime boundary.\n` +
            `Deep/full restoration recurses the whole project-local import graph — app/feature ` +
            `chunks must be restored, not faced. Restore it (and everything it transitively imports).\n` +
            `If you have confirmed this chunk is genuinely vendor/runtime, re-run with --force.`,
        );
        process.exit(64);
      }
      file.stages.faced = true;
      file.lastUpdated = NOW();
      manifest.updatedAt = NOW();
      writeJsonAtomic(paths.manifestPath, manifest);
      console.error(
        `note: a facade is an OPEN boundary — the deep/full restore is incomplete until ` +
          `${basename} is restored or the user explicitly scopes it out. Report it in the import map/README.`,
      );
      console.log(`${basename} → faced (boundary facade)`);
      break;
    }
    case "set-organization": {
      const basename = positionals[0];
      if (!basename) {
        console.error(
          `Usage: bun scripts/ledger.ts set-organization <basename> --domain <d> --semantic-path <p>`,
        );
        process.exit(64);
      }
      if (!manifest.files[basename]) {
        console.error(`unknown basename: ${basename}`);
        process.exit(1);
      }
      const domain = need(values, "domain");
      const semanticPath = need(values, "semantic-path");
      const recipe = values.recipe as OrganizationRecipe | undefined;
      if (recipe && !ORGANIZATION_RECIPES.includes(recipe)) {
        console.error(
          `unknown --recipe ${recipe}; expected one of: ${ORGANIZATION_RECIPES.join(", ")}`,
        );
        process.exit(64);
      }
      const classification =
        (values.classification as OrganizationClassification | undefined) ??
        "app-feature";
      if (!ORGANIZATION_CLASSIFICATIONS.includes(classification)) {
        console.error(
          `unknown --classification ${classification}; expected one of: ${ORGANIZATION_CLASSIFICATIONS.join(", ")}`,
        );
        process.exit(64);
      }
      setOrganization(manifest, basename, {
        domain,
        semanticPath,
        recipe,
        classification,
        source: "agent-override",
      });
      manifest.updatedAt = NOW();
      writeJsonAtomic(paths.manifestPath, manifest);
      console.log(`${basename} → organized (${semanticPath})`);
      break;
    }
    case "propagate-cross-file": {
      const out = propagateCrossFile(ledger, manifest, {
        from: values.from,
        autoFillConsumers: values["auto-fill"],
      });
      ledger.updatedAt = NOW();
      writeJsonAtomic(paths.ledgerPath, ledger);
      console.log(
        `bindings updated: ${out.bindingsUpdated} · auto-filled consumers: ${out.consumersUpdated}`,
      );
      break;
    }
    case "reset": {
      const basename = positionals[0];
      if (!basename) {
        console.error(
          `Usage: bun scripts/ledger.ts reset <basename> [--stage rename]`,
        );
        process.exit(64);
      }
      const stage = (values.stage as StageName | undefined) ?? "rename";
      if (!STAGES.includes(stage)) {
        console.error(`unknown --stage ${stage}`);
        process.exit(64);
      }
      const file = manifest.files[basename];
      if (!file) {
        console.error(`unknown basename: ${basename}`);
        process.exit(1);
      }
      const field = STAGE_FIELD[stage];
      file.stages[field] = false;
      file.lastUpdated = NOW();
      const ledgerFile = ledger.files[basename];
      let reset = 0;
      if (ledgerFile && stage === "rename") {
        for (const sym of ledgerFile.symbols) {
          if (sym.status === "done") {
            sym.status = "pending";
            sym.restoredName = null;
            sym.completedAt = null;
            reset++;
          }
        }
        recomputeTotals(ledgerFile);
      }
      manifest.updatedAt = NOW();
      ledger.updatedAt = NOW();
      writeJsonAtomic(paths.manifestPath, manifest);
      writeJsonAtomic(paths.ledgerPath, ledger);
      try {
        releaseLock(paths.fullDir, basename, stage, { force: true });
      } catch {
        // ignore
      }
      console.log(`reset ${basename}.${stage} (${reset} symbol(s) → pending)`);
      break;
    }
    default:
      console.error(USAGE);
      process.exit(64);
  }
}

if (import.meta.main) {
  await main();
}
