import * as fs from "node:fs";
import * as path from "node:path";
import { parseArgs } from "node:util";
import {
  writeJsonAtomic,
  type Manifest,
  type ManifestFile,
  type OrganizationClassification,
  type OrganizationRecipe,
} from "./build-import-graph.ts";
import { pathsForTarget, setOrganization } from "./ledger.ts";
import {
  classifyBoundary,
  isKnownTerminalBoundaryChunk,
} from "./chunk-classification.ts";
import { kebabCase, semanticFinalize } from "./semantic-finalize.ts";

/**
 * plan-organize.ts — propose a semantic domain + public path for every restored
 * chunk, so the organize → promote phase has a drainable, editable worklist
 * instead of per-file eyeballing.
 *
 * The classification heuristics are deliberately *project-agnostic shape*
 * heuristics: icon-shaped → icons/, button-shaped → ui/, single-export → utils/,
 * known vendor/runtime → boundaries/. Everything else is an app-feature whose
 * domain a generic planner can't know — it is left `needs-review` for the agent
 * to assign (or for an optional external --domain-map to fill). It does NOT bake
 * in any project's domain layout.
 *
 * Output: an editable `_full/organize-plan.json`. `--apply` writes only
 * `status: "approved"` entries into `manifest.organization` + flips
 * `stages.organized` (idempotent; skips already-organized unless --rebuild).
 */

export type OrganizeStatus = "approved" | "needs-review";

export type OrganizePlanEntry = {
  basename: string;
  domain: string;
  semanticPath: string;
  recipe: OrganizationRecipe;
  classification: OrganizationClassification;
  status: OrganizeStatus;
  confidence: number;
  /** fallbackRenames / renames from auto-restore-report.json (triage signal). */
  fallbackRenameRatio: number | null;
  reason: string;
};

export type OrganizePlan = {
  version: 1;
  target: string;
  generatedAt?: string;
  summary: {
    total: number;
    byDomain: Record<string, number>;
    byRecipe: Record<string, number>;
    byStatus: Record<string, number>;
    needsReview: string[];
  };
  entries: Record<string, OrganizePlanEntry>;
};

export type AutoRestoreReportFile = {
  basename: string;
  renames?: number;
  fallbackRenames?: number;
};

export type ImportMapChunk = {
  restored?: string;
  status?: string;
  vendor?: string;
  note?: string;
  boundary?: boolean;
  dependencyBoundary?: string;
};

export type PlanOrganizeInputs = {
  manifest: Manifest;
  target: string;
  report?: { files?: AutoRestoreReportFile[] } | null;
  importMap?: { chunks?: Record<string, ImportMapChunk> } | null;
  /** Reads a chunk's checkpoint source for icon/button shape detection. */
  readCheckpoint?: (basename: string) => string | null;
  /** Optional external prefix→domain table; empty by default (generic core). */
  domainMap?: Record<string, string> | null;
  only?: Set<string> | null;
};

// Matches semantic-finalize.ts's stripHashSuffix so plan + promote agree on stems.
const HASH_SUFFIX_RE = /^[A-Za-z0-9_-]{6,12}$/;
const ICON_SIGNAL =
  /jsx(?:DEV|s)?\s*\(\s*["']svg["']|<svg[\s/>]|viewBox\s*[:=]/;
const BUTTON_SIGNAL = /\bButton\b/;

function stripHashSuffix(basename: string): string {
  for (let index = basename.lastIndexOf("-"); index > 0; index = basename.lastIndexOf("-", index - 1)) {
    const suffix = basename.slice(index + 1);
    if (
      HASH_SUFFIX_RE.test(suffix) &&
      /[0-9_]/.test(suffix)
    ) {
      return basename.slice(0, index).replace(/-+$/, "");
    }
  }
  return basename;
}

type Shape = {
  recipe: "icon" | "button";
  semanticPath: string;
  layout: "single" | "directory";
};

/** Reuse semanticFinalize's own detection so the plan agrees with promote. */
function detectShape(source: string, basename: string): Shape | null {
  const hasIcon = ICON_SIGNAL.test(source);
  const hasButton = BUTTON_SIGNAL.test(source);
  if (!hasIcon && !hasButton) return null;
  try {
    const result = semanticFinalize(source, { recipe: "auto", basename });
    if (result.recipe === "icon") {
      const first = result.files[0]?.path ?? "";
      if (result.layout === "single") {
        return { recipe: "icon", layout: "single", semanticPath: `icons/${first}` };
      }
      const dir = first.split("/")[0] || kebabCase(stripHashSuffix(basename));
      return { recipe: "icon", layout: "directory", semanticPath: `icons/${dir}` };
    }
    if (result.recipe === "button") {
      return { recipe: "button", layout: "single", semanticPath: "ui/button.tsx" };
    }
  } catch {
    return null;
  }
  return null;
}

function isLottieAnimationData(source: string): boolean {
  const leadingData = source.slice(0, 8000);
  const hasLottieVersion =
    /\bv\s*:\s*["'`]5\.\d+\.\d+["'`]/.test(leadingData) &&
    /\b(?:ip|op)\s*:/.test(leadingData) &&
    /\bfr\s*:/.test(leadingData);
  const hasLottieToolkitMetadata =
    /@lottiefiles\/toolkit-js/.test(leadingData) &&
    /\bw\s*:/.test(leadingData) &&
    /\bh\s*:/.test(leadingData);
  return (hasLottieVersion || hasLottieToolkitMetadata) && /\blayers\s*:/.test(source);
}

function localeStemFromBasename(basename: string, stem: string): string | null {
  if (/^[a-z]{2,3}(?:-(?:[A-Z]{2}|[0-9]{3}|[A-Z][a-z]{3})){0,2}$/.test(stem)) {
    return stem;
  }
  const match = basename.match(
    /^([a-z]{2,3}(?:-(?:[A-Z]{2}|[0-9]{3}|[A-Z][a-z]{3})){0,2})(?:-|$)/,
  );
  return match?.[1] ?? null;
}

function isLocaleMessagesData(source: string): boolean {
  return (
    /\b(?:var|const)\s+[A-Za-z0-9_$]*Greeting\s*=/.test(source) &&
    /\bexport\s+const\s+[A-Za-z0-9_$]*Default\s*=\s*\{/.test(source) &&
    /["'`]CopyButton\.copyTooltip["'`]/.test(source)
  );
}

function isThemeData(source: string): boolean {
  return (
    /\bexport\s+const\s+[A-Za-z0-9_$]*Default\s*=\s*\{/.test(source) &&
    /\bbg\s*:/.test(source) &&
    /\bcolors\s*:/.test(source) &&
    /\bname\s*:/.test(source) &&
    /\bsettings\s*:/.test(source) &&
    /(?:\btype\s*:|\bchromeTheme\s*:)/.test(source) &&
    /editor\.background|activityBar\.background|tokenColors|scope\s*:/.test(
      source,
    )
  );
}

function matchDomain(
  domainMap: Record<string, string>,
  stem: string,
): string | null {
  // Longest matching prefix wins, so `local-conversation` beats `conversation`.
  let best: string | null = null;
  let bestLen = -1;
  for (const [prefix, domain] of Object.entries(domainMap)) {
    if (
      (stem === prefix || stem.startsWith(`${prefix}-`)) &&
      prefix.length > bestLen
    ) {
      best = domain;
      bestLen = prefix.length;
    }
  }
  return best;
}

function classify(
  basename: string,
  file: ManifestFile,
  ctx: {
    importChunk?: ImportMapChunk;
    fallbackRenameRatio: number | null;
    readCheckpoint?: (basename: string) => string | null;
    domainMap: Record<string, string> | null;
  },
): OrganizePlanEntry {
  const stem = stripHashSuffix(basename);
  const ratio = ctx.fallbackRenameRatio;
  const exportCount = (file.exports ?? []).length;
  const big = (file.lineCount ?? 0) > 1000 || exportCount > 2;

  const mk = (e: Omit<OrganizePlanEntry, "basename" | "fallbackRenameRatio">) =>
    ({ basename, fallbackRenameRatio: ratio, ...e }) satisfies OrganizePlanEntry;

  // 1) Reuse an existing IMPORT_MAP mapping (stable re-runs / delta restores).
  const mapped = ctx.importChunk?.restored;
  if (mapped) {
    return mk({
      domain: mapped.split("/")[0] ?? "",
      semanticPath: mapped,
      recipe: "manual",
      classification: isKnownTerminalBoundaryChunk(basename, ctx.importChunk)
        ? "vendor-runtime"
        : "app-feature",
      status: "approved",
      confidence: 1,
      reason: "reuse existing IMPORT_MAP mapping",
    });
  }

  // 2) Known vendor/runtime boundary → boundaries/, but NOT auto-promotable:
  //    a raw runtime checkpoint carries unresolved imports + bundler residue, so
  //    it must be re-exported (third-party npm), faced, or deep-restored — not
  //    mechanically copied. Flag it for the agent rather than approving.
  if (isKnownTerminalBoundaryChunk(basename, ctx.importChunk ?? {})) {
    const boundary = classifyBoundary(basename, ctx.importChunk ?? {});
    if (boundary.kind === "vendor-npm") {
      const spec = boundary.specifier ?? "<npm-specifier>";
      return mk({
        domain: "boundaries",
        semanticPath: `boundaries/${kebabCase(stem)}.ts`,
        recipe: "manual",
        classification: "vendor-npm",
        status: "needs-review",
        confidence: 0.4,
        reason:
          `third-party npm boundary — convert to a bare re-export shim: ` +
          `make-facade.ts <chunk> --reexport ${spec} ` +
          `(verify it is stock, not a Codex fork, and the specifier resolves)`,
      });
    }
    return mk({
      domain: "boundaries",
      semanticPath: `boundaries/${kebabCase(stem)}.ts`,
      recipe: "manual",
      classification: "vendor-runtime",
      status: "needs-review",
      confidence: 0.4,
      reason:
        "app/host runtime boundary — keep the typed facade (make-facade.ts) or " +
        "make-facade.ts --passthrough for a runnable interim; deep-restore to move it out of boundaries/",
    });
  }

  // 3) Shape: icon or button (reuse semanticFinalize's detection).
  const source = ctx.readCheckpoint?.(basename) ?? null;
  if (source) {
    const shape = detectShape(source, basename);
    if (shape?.recipe === "icon") {
      return mk({
        domain: "icons",
        semanticPath: shape.semanticPath,
        recipe: "icon",
        classification: "icon",
        status: "approved",
        confidence: 0.9,
        reason:
          shape.layout === "directory"
            ? "multi-icon SVG module"
            : "single SVG icon module",
      });
    }
    if (shape?.recipe === "button") {
      return mk({
        domain: "ui",
        semanticPath: "ui/button.tsx",
        recipe: "button",
        classification: "app-feature",
        status: "approved",
        confidence: 0.7,
        reason: "button/control module",
      });
    }
    if (isLottieAnimationData(source)) {
      const name = kebabCase(stem) || "animation";
      return mk({
        domain: "animations",
        semanticPath: `animations/${name}.ts`,
        recipe: "manual",
        classification: "data-asset",
        status: "approved",
        confidence: 0.85,
        reason: "Lottie animation data module",
      });
    }
    const localeStem = localeStemFromBasename(basename, stem);
    if (localeStem && isLocaleMessagesData(source)) {
      return mk({
        domain: "locales",
        semanticPath: `locales/${kebabCase(localeStem)}.ts`,
        recipe: "manual",
        classification: "data-asset",
        status: "approved",
        confidence: 0.85,
        reason: "localized message catalog",
      });
    }
    if (isThemeData(source)) {
      return mk({
        domain: "themes",
        semanticPath: `themes/${kebabCase(stem)}.ts`,
        recipe: "manual",
        classification: "data-asset",
        status: "approved",
        confidence: 0.85,
        reason: "editor theme data module",
      });
    }
  }

  // 4) Single-export utility → utils/<kebab>.ts (kebab file; the export keeps its
  //    own camelCase/PascalCase identifier — the gate requires kebab filenames).
  if (exportCount === 1) {
    const name = kebabCase(stem) || "restored";
    return mk({
      domain: "utils",
      semanticPath: `utils/${name}.ts`,
      recipe: "manual",
      classification: "single-util",
      status: "approved",
      confidence: 0.6,
      reason: "single-export utility",
    });
  }

  // 5) Optional external domain map (project profile may supply one).
  if (ctx.domainMap) {
    const domain = matchDomain(ctx.domainMap, stem);
    if (domain) {
      return mk({
        domain,
        semanticPath: `${domain}/${kebabCase(stem) || "restored"}.tsx`,
        recipe: big ? "split" : "manual",
        classification: "app-feature",
        status: "approved",
        confidence: 0.5,
        reason: `domain-map: ${domain}`,
      });
    }
  }

  // 6) App-feature / ambiguous: a generic planner can't pick the domain.
  return mk({
    domain: "",
    semanticPath: "",
    recipe: big ? "split" : "manual",
    classification: "app-feature",
    status: "needs-review",
    confidence: 0.2,
    reason: big
      ? "app-feature (large/multi-export) — assign a domain and split"
      : "app-feature — assign a domain",
  });
}

export function planOrganize(inputs: PlanOrganizeInputs): OrganizePlan {
  const fallbackRatio = new Map<string, number | null>();
  for (const f of inputs.report?.files ?? []) {
    const renames = f.renames ?? 0;
    fallbackRatio.set(
      f.basename,
      renames > 0 ? (f.fallbackRenames ?? 0) / renames : null,
    );
  }
  const importChunks = inputs.importMap?.chunks ?? {};

  const entries: Record<string, OrganizePlanEntry> = {};
  for (const [bn, file] of Object.entries(inputs.manifest.files)) {
    if (file.kind !== "local") continue; // only project-local chunks are organized
    if (file.stages?.faced) continue; // facade boundaries are terminal
    const basename = file.basename ?? bn;
    if (inputs.only && !inputs.only.has(basename)) continue;
    entries[basename] = classify(basename, file, {
      importChunk: importChunks[basename],
      fallbackRenameRatio: fallbackRatio.get(basename) ?? null,
      readCheckpoint: inputs.readCheckpoint,
      domainMap: inputs.domainMap ?? null,
    });
  }

  // Collision guard: two approved chunks must not target the same public path —
  // promote would silently overwrite one. Downgrade every colliding entry to
  // needs-review so the agent disambiguates (rename one, or split a directory).
  const pathOwners = new Map<string, string[]>();
  for (const entry of Object.values(entries)) {
    if (entry.status !== "approved" || !entry.semanticPath) continue;
    const key = entry.semanticPath.replace(/\/+$/, "");
    const owners = pathOwners.get(key) ?? [];
    owners.push(entry.basename);
    pathOwners.set(key, owners);
  }
  for (const [semanticPath, owners] of pathOwners) {
    if (owners.length < 2) continue;
    for (const basename of owners) {
      const entry = entries[basename]!;
      entry.status = "needs-review";
      entry.confidence = Math.min(entry.confidence, 0.3);
      entry.reason = `semanticPath ${semanticPath} collides with ${owners
        .filter((b) => b !== basename)
        .join(", ")} — disambiguate before promoting`;
    }
  }

  const byDomain: Record<string, number> = {};
  const byRecipe: Record<string, number> = {};
  const byStatus: Record<string, number> = {};
  const needsReview: string[] = [];
  for (const entry of Object.values(entries)) {
    const domainKey = entry.domain || "(needs-review)";
    byDomain[domainKey] = (byDomain[domainKey] ?? 0) + 1;
    byRecipe[entry.recipe] = (byRecipe[entry.recipe] ?? 0) + 1;
    byStatus[entry.status] = (byStatus[entry.status] ?? 0) + 1;
    if (entry.status === "needs-review") needsReview.push(entry.basename);
  }
  needsReview.sort();

  return {
    version: 1,
    target: inputs.target,
    summary: {
      total: Object.keys(entries).length,
      byDomain,
      byRecipe,
      byStatus,
      needsReview,
    },
    entries,
  };
}

/**
 * Write every `approved` plan entry into `manifest.organization` + flip
 * `stages.organized`. Idempotent: skips chunks already organized unless
 * `rebuild` is set. Returns counts.
 */
export function applyPlan(
  manifest: Manifest,
  plan: OrganizePlan,
  opts: { rebuild?: boolean } = {},
): { applied: number; skippedNeedsReview: number; skippedAlready: number } {
  let applied = 0;
  let skippedNeedsReview = 0;
  let skippedAlready = 0;
  for (const entry of Object.values(plan.entries)) {
    if (entry.status !== "approved" || !entry.domain || !entry.semanticPath) {
      skippedNeedsReview++;
      continue;
    }
    const file = manifest.files[entry.basename];
    if (!file) continue;
    if (file.stages?.organized && !opts.rebuild) {
      skippedAlready++;
      continue;
    }
    setOrganization(manifest, entry.basename, {
      domain: entry.domain,
      semanticPath: entry.semanticPath,
      recipe: entry.recipe,
      classification: entry.classification,
      source: "heuristic",
    });
    applied++;
  }
  return { applied, skippedNeedsReview, skippedAlready };
}

// ---- CLI -------------------------------------------------------------------

const USAGE = `Usage: bun scripts/plan-organize.ts --target <dir> [options]

Propose a semantic domain + public path for every restored chunk and write an
editable _full/organize-plan.json. Review/override entries (or edit them, or use
ledger.ts set-organization), then re-run with --apply to write approved entries
into the manifest.

Options:
  --target <dir>         Target restore root whose _full/ to read (required).
  --out <file>           Plan output path (default: _full/organize-plan.json).
  --apply                Write approved entries into manifest.organization.
  --rebuild              With --apply, overwrite already-organized chunks too.
  --only <list>          Comma-separated basenames to restrict the plan to.
  --domain-map <file>    Optional JSON { "<prefix>": "<domain>" } for app chunks.

Exit codes: 0 success · 1 I/O · 64 usage.
`;

function readJson<T>(p: string): T | null {
  try {
    return JSON.parse(fs.readFileSync(p, "utf-8")) as T;
  } catch {
    return null;
  }
}

async function main(): Promise<void> {
  let parsed;
  try {
    parsed = parseArgs({
      args: process.argv.slice(2),
      options: {
        target: { type: "string" },
        out: { type: "string" },
        apply: { type: "boolean", default: false },
        rebuild: { type: "boolean", default: false },
        only: { type: "string" },
        "domain-map": { type: "string" },
      },
      allowPositionals: true,
    });
  } catch (err) {
    console.error(USAGE);
    console.error((err as Error).message);
    process.exit(64);
  }
  const { values } = parsed;
  const target = values.target;
  if (!target) {
    console.error(USAGE);
    process.exit(64);
  }
  const paths = pathsForTarget(target);
  if (!fs.existsSync(paths.manifestPath)) {
    console.error(`manifest not found: ${paths.manifestPath}`);
    console.error("run scripts/build-import-graph.ts first");
    process.exit(1);
  }
  const manifest = readJson<Manifest>(paths.manifestPath);
  if (!manifest) {
    console.error(`failed to parse manifest: ${paths.manifestPath}`);
    process.exit(1);
  }
  const report = readJson<{ files?: AutoRestoreReportFile[] }>(
    path.join(paths.fullDir, "auto-restore-report.json"),
  );
  const importMap = readJson<{ chunks?: Record<string, ImportMapChunk> }>(
    path.join(target, "IMPORT_MAP.json"),
  );
  const domainMap = values["domain-map"]
    ? readJson<Record<string, string>>(values["domain-map"])
    : null;
  const only = values.only
    ? new Set(
        values.only
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
      )
    : null;
  const checkpointsDir = path.join(paths.fullDir, "checkpoints");
  const readCheckpoint = (basename: string): string | null => {
    for (const ext of [".tsx", ".ts", ".jsx", ".js"]) {
      const p = path.join(checkpointsDir, `${basename}${ext}`);
      if (fs.existsSync(p)) return fs.readFileSync(p, "utf-8");
    }
    return null;
  };

  const plan = planOrganize({
    manifest,
    target,
    report,
    importMap,
    readCheckpoint,
    domainMap,
    only,
  });
  plan.generatedAt = new Date().toISOString();

  const outPath = values.out ?? path.join(paths.fullDir, "organize-plan.json");
  writeJsonAtomic(outPath, plan);
  console.error(`plan-organize: wrote ${outPath}`);
  console.error(
    `  ${plan.summary.total} chunk(s) · ` +
      Object.entries(plan.summary.byStatus)
        .map(([k, v]) => `${k}=${v}`)
        .join(" · "),
  );
  console.error(
    `  domains: ` +
      Object.entries(plan.summary.byDomain)
        .sort((a, b) => b[1] - a[1])
        .map(([k, v]) => `${k}=${v}`)
        .join(" · "),
  );

  if (values.apply) {
    const result = applyPlan(manifest, plan, { rebuild: values.rebuild });
    manifest.updatedAt = new Date().toISOString();
    writeJsonAtomic(paths.manifestPath, manifest);
    console.error(
      `plan-organize: applied ${result.applied} · skipped ${result.skippedNeedsReview} needs-review · ${result.skippedAlready} already-organized`,
    );
  } else {
    console.error(
      `plan-organize: review ${outPath}, then re-run with --apply (or override with ledger.ts set-organization)`,
    );
  }
}

if (import.meta.main) {
  await main();
}
