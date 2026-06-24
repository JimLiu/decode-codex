# Stage 2 — Restore to readable

Turn the deobfuscated/minified input into code a human can read. Stage 2 has two phases:

- **Phase A — Rename:** rename cryptic identifiers (`a`, `e`, `t`, `_0x4f3`, …) to meaningful names. This is the agent-judgment core — a TypeScript+Bun port of [humanify](https://github.com/jehna/humanify) where _you_ play the renamer instead of an external LLM API. **The hard bar lives here.**
- **Phase B — Polish:** mechanical scripts that undo bundler/compiler transforms (React Compiler `cache[N]`, `(0, fn)(...)` wrappers, backtick literals, JSX-runtime calls, aliased exports). Skip Phase B on non-React / plainly-minified code.

A well-named file out of Stage 2 (semantic filename + provenance header) is a valid **default-tier** deliverable; types and import resolution are [Stage 3](stage-3-finalize.md). Stage 2 runs _after_ [Stage 1](stage-1-deobfuscate.md) (if the input was obfuscated).

The default one-shot does Phase A's mechanical bulk + Phase B's reading-aid subset in one command: `polish.ts <file> --rename --fast --source <path> --out draft.tsx --format`. You then hand-name the residue.

← Back to [SKILL.md](../SKILL.md). Companions: [Stage 1 — Deobfuscate](stage-1-deobfuscate.md), [Stage 3 — Finalize](stage-3-finalize.md), [workspace](workspace.md).

---

# Phase A — Rename

## Step 0a — Check for a sourcemap (always)

```bash
bun <skill-dir>/scripts/sourcemap-check.ts <input.js>
```

If it prints `✓ sourcemap detected`, **stop and recover from the sourcemap instead** — it preserves original names, comments, and structure renaming can't recover (`npx source-map-explorer <input.js>`, or hand-decode the `.map`'s `sourcesContent`). If `✗ no sourcemap`, continue.

## Step 0b — Setup & archive (once)

Install deps if missing (`cd <skill-dir> && bun install`), then create the per-chunk workspace and archive the pristine input (renaming is judgment-driven; you may re-run). See [workspace convention](workspace.md):

```bash
WS=<target-dir>/.deobfuscate-javascript/$(basename <input.js> .js)
mkdir -p "$WS" && cp <input.js> "$WS/original.js"
```

The rest of this doc calls that workspace `$WS`.

## Step 0b.5 — Mechanical normalization with wakaru (readable tier: default-on)

On non-obfuscated minified/transpiled input, run wakaru as a pre-rename normalizer. It is a Rust transpiler/minifier decompiler (`@wakaru/cli`) that recovers ES6 classes, async/await from generator state-machines, optional chaining, `??`, for-of, destructuring, TS enums, template literals, and more (~66 rules the skill's polish lacks) — so the renamer reads cleaner code and hand-fixes less.

```bash
bun <skill-dir>/scripts/wakaru-normalize.ts "$WS/original.js" -o "$WS/normalized.js" --level standard
```

- **Skip it when a usable `.map` exists** (Step 0a) — sourcemap recovery beats it. **On obfuscated input run Stage 1 first** — wakaru is not a deobfuscator.
- **Hard rule:** wakaru rewrites the AST, so byte offsets shift. From here on, **extract and rename from `$WS/normalized.js`, never `$WS/original.js`** (keep `--source` pointing at the original input for the provenance header). This is the same byte-invalidation rule as Stage 1.
- The wrapper **auto-skips** (passthrough copy + stderr note, exit 0) when the binary is unavailable, and always leaves a `$WS/normalized.js`, so the pipeline never breaks. `--level minimal` for fidelity-critical/untrusted code; `--level aggressive` only with verification; `--dce` opt-in.

## Step 0c — Optional: pre-split webpack bundles with webcrack

If the input is one giant webpack/browserify bundle (`{ 123: (e,t,n) => {…}, … }` shape or > ~500 KB), pre-split it so you can rename one module at a time:

```bash
npx webcrack <input.js> -o "$WS/webcracked/"
ls "$WS/webcracked/modules/"
```

Feed each interesting `modules/<id>.js` to the pipeline below as its own sub-restoration. Full recipe: [../workflows/webpack-bundle.md](../workflows/webpack-bundle.md).

## Step 1 — Extract symbols

```bash
bun <skill-dir>/scripts/extract.ts <input.js|-> [--out $WS/symbols.json] [--context-size 500] \
  [--top N] [--min-refs N] [--scope-kind Program|FunctionDeclaration|...] \
  [--name <regex>] [--only-cryptic] [--no-context] [--max-same-scope N] [--compact]
```

`<input.js>` may be `-` (stdin); without `--out` writes to stdout. **Filter flags** (essential for files > 200 KB / > 1000 symbols):

| Flag                 | Effect                                                                            |
| -------------------- | --------------------------------------------------------------------------------- |
| `--top N`            | Keep first N (post-sort, highest-scope-impact).                                   |
| `--min-refs N`       | Drop bindings with < N references (0/1-use are usually scratch).                  |
| `--scope-kind X`     | Keep only bindings in scope of AST type X (e.g. `Program`).                       |
| `--name <regex>`     | Keep only names matching the regex.                                               |
| `--only-cryptic`     | Keep `_0xNN…`, single/double-letter, letter+digit names; skip meaningful ones.    |
| `--no-context`       | Empty the `context` field — biggest size cut.                                     |
| `--max-same-scope N` | Cap `sameScopeBindings` length.                                                   |
| `--compact`          | `--no-context` + `--max-same-scope 10`. **Planning extracts only** — naming needs context. |

**Sizing:** a fully-extracted 1 MB / ~10k-symbol bundle with 500-char context ≈ 50 MB JSON; `--only-cryptic --min-refs 3 --top 200 --max-same-scope 5 --context-size 300` drops it to ~100 KB.

Output is an array sorted **largest-scope-first**. Each entry: `id` (`<name>@<offset>`, the renames.json key), `name`, `kind` (`var|let|const|param|hoisted|module|local`), `bindingPathType`, `scopeKind`, `scopeSize` (sort driver), `referenceCount` (1 = scratch, many = real concept), `constant`, `sameScopeBindings`, `context`.

## Step 2 — Decide names

Read `$WS/symbols.json`; for each symbol pick a replacement from its `context` and `kind`. Write the mapping with the `Write` tool (not a script):

```json
{ "a@9": "chunkString", "e@11": "input", "t@13": "chunkSize", "n@20": "chunks" }
```

**Naming rules** (mirror humanify): `camelCase` for vars/functions/params, `PascalCase` for classes/constructors; ASCII id chars only (apply normalises the rest); avoid reserved words (apply auto-prefixes `_`); **keep already-meaningful names** (omit, or map to self); prefer typed-generic (`callback`, `options`, `result`, `index`, `node`) over a confident wrong guess; read **uses** not just declarations (`e` only hitting `.preventDefault()` → `event`); try for file-unique targets (apply `_`-prefixes collisions).

**Batching:** ≤ ~100 → one pass; 100–1000 → one pass with `--only-cryptic --min-refs 2`; 1000+ → webcrack-split (0c) or the **plan-then-batch** flow:

```bash
bun <skill-dir>/scripts/extract.ts input.js --out $WS/symbols.json \
  --only-cryptic --min-refs 3 --top 200 --max-same-scope 5 --context-size 300
bun <skill-dir>/scripts/plan.ts $WS/symbols.json --out-dir $WS/plan --input input.js --batch-size 50
# Read $WS/plan/CHECKLIST.md; per unchecked batch: read batch-N.json → name → Write renames-N.json → tick [x]
cat $WS/plan/renames-*.json | jq -s 'add' > $WS/plan/renames.json
bun <skill-dir>/scripts/apply.ts input.js $WS/plan/renames.json --out output.js
```

`plan.ts` emits `CHECKLIST.md` (resumable progress), `plan.json` (every batch's `{index,scopeKind,scopeSize,symbolIds}`), and `batch-N.json` (the entries to name, `referenceCount`-desc). Batches are **largest-scope-first** — Batch 0 (usually `Program`) has the most leverage; stopping after Batch 0–2 gives ~80% of the readability win. Full flow: [../workflows/huge-single-file.md](../workflows/huge-single-file.md).

### Step 2.5 — **Don't stop at program scope**

The #1 rename failure: pass `--scope-kind Program`, rename the small clean top-level set, declare victory — leaving every function body still `let k = useIntl(), [A,M] = useState(false), N = !h, …` because those bindings live in `FunctionDeclaration` / `ArrowFunctionExpression` scopes the Program filter dropped.

**Run `smart-rename.ts` first, then hand-name the residue.** The mechanical renamer covers ~80% of the boring cases deterministically (component `props`, event handlers, `.map`/`.reduce` iteratees, promise handlers, hook returns, destructured-prop aliases); spend judgment only on what it can't reach (Program-scope domain nouns, lookup-table names, JSX intermediates). The default one-shot does this for you: `polish.ts <file> --rename --fast` runs `smart-rename` + `apply` + reading-aid polish in one command.

**The goal is an outcome, not a fixed pass count: rename until single-letter density is low** (the verify sweep measures it). Work outward from the highest-leverage scope:

| Pass                            | Filter                                                                       | Names                                                                                                                              |
| ------------------------------- | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **1 — Program**                 | `--scope-kind Program`                                                       | Exports, top-level helpers, module constants, registries. Highest leverage — every downstream ref sees these.                    |
| **2 — Function bodies**         | no `--scope-kind` + `--kind let,const,var,hoisted --only-cryptic --min-refs 2` | Hook results (`let A = useIntl()` → `intl`), JSX intermediates (`let H = <span…>` → `labelEl`), destructured props. Makes each component _body_ readable. |
| **3 — Params (incl. single-use)** | `--kind param --only-cryptic --min-refs 1`                                  | Component `props`, event handlers (`event`), iteratees (`(item,index)`), reducers (`(accumulator,current)`). Must be `--min-refs 1` (props/events used once via destructure). Mostly mechanical — run `smart-rename.ts` first. |
| **4 — Nested arrow/expr** (opt) | no filter + `--only-cryptic --min-refs 3`                                    | Deep callback/IIFE/switch-case locals. Diminishing returns.                                                                       |

A Program-only output looks fine on a skim, falls apart on a real read. Keep going into bodies and params until the density sweep is clean.

**Default flow — `smart-rename` first, one combined extract, one apply:**

```bash
# 1. ONE combined extract across all scopes, --min-refs 1 so single-use props params are in.
bun <skill-dir>/scripts/extract.ts "$WS/original.js" --out "$WS/symbols.json" --only-cryptic --min-refs 1 --context-size 400
# 2. Write "$WS/manual.json" with names ONLY for the residue smart-rename won't reach
#    (domain nouns, lookup tables, JSX intermediates). Skip props/events/iteratees/hook returns.
# 3. smart-rename merging your manual names (manual wins, smart fills the mechanical bulk):
bun <skill-dir>/scripts/smart-rename.ts "$WS/original.js" --merge "$WS/manual.json" --out "$WS/renames.json"
# 4. ONE apply.
bun <skill-dir>/scripts/apply.ts "$WS/original.js" "$WS/renames.json" --out "$WS/renamed.js"
```

(Or skip the plumbing: `polish.ts <file> --rename --fast --out "$WS/draft.tsx" --format` into the `$WS` staging dir, then hand-name the residue in the draft. The draft is a staged checkpoint, not the deliverable — promote it into `restored/` only after it reads cleanly.)

**Thorough flow (deep mode / when density stays high):** fall back to explicit per-pass runs, re-extracting between passes so each pass's `context` quotes the _renamed_ prior code (`let A = useIntl()` reads as `intl` immediately). For deep/full restoration, repeat Pass 2/3 until `quality-gate.ts` stops reporting `cryptic-params` / `cryptic-bindings` / `short-identifier-density`.

```bash
# Pass 1 — top-level
bun <skill-dir>/scripts/extract.ts "$WS/original.js" --out "$WS/symbols-program.json" --scope-kind Program --context-size 500
bun <skill-dir>/scripts/apply.ts "$WS/original.js" "$WS/renames-program.json" --out "$WS/pass1.js"
# Pass 2 — function-body let/const/var (extract from pass1 so context shows Pass-1 names)
bun <skill-dir>/scripts/extract.ts "$WS/pass1.js" --out "$WS/symbols-functions.json" --kind let,const,var,hoisted --only-cryptic --min-refs 2 --context-size 400
bun <skill-dir>/scripts/apply.ts "$WS/pass1.js" "$WS/renames-functions.json" --out "$WS/pass2.js"
# Pass 3 — params (auto-name first, then judgment-name the residue)
bun <skill-dir>/scripts/smart-rename.ts "$WS/pass2.js" --out "$WS/renames-smart.json"
bun <skill-dir>/scripts/extract.ts "$WS/pass2.js" --out "$WS/symbols-params.json" --kind param --only-cryptic --min-refs 1 --context-size 400
jq -s '.[0] * .[1]' "$WS/renames-smart.json" "$WS/renames-params.json" > "$WS/renames-pass3.json"
bun <skill-dir>/scripts/apply.ts "$WS/pass2.js" "$WS/renames-pass3.json" --out "$WS/renamed.js"
```

For ≥ 5 000 function-local bindings, batch Pass 2 via `plan.ts` ([huge-single-file.md](../workflows/huge-single-file.md)). **Naming shortcuts** (apply broadly): destructured prop alias `{ activatorRef: n }` → `activatorRef`; `let A = useX()` → name after the hook (`useIntl()`→`intl`); JSX intermediates → what they represent (`labelEl`, `closeButton`); loop counter → `index`, bound → `length`. The mechanical Pass-3 cases (props/events/iteratees/reducers/promise handlers/hook returns) are what `smart-rename.ts` automates — full table in [../reference/naming-heuristics.md](../reference/naming-heuristics.md).

## Step 3 — Apply

```bash
bun <skill-dir>/scripts/apply.ts <input.js|-> $WS/renames.json [--out <output.js>]
```

`-` reads stdin; without `--out` writes to stdout (`renamed N` → stderr). Output is reformatted by `@babel/generator`; Unicode identifiers round-trip as-is.

## Step 4 — Verify the rename

Read the output: no syntax errors, renames make sense, no `undefined` refs (missed binding), each export clearer than before. **Quantitative gate** — run both sweeps, then the executable gate:

```bash
# A. Lexical sweep — every cryptic *reference*.
grep -oE '\b[a-zA-Z_$][a-zA-Z0-9_$]*\b' "$WS/renamed.js" \
  | awk 'length($0) <= 2 && $0 !~ /^(as|js|id|if|do|to|on|in|of|or|at|is|be|el|fs|os|tx|bg)$/' \
  | sort | uniq -c | sort -rn | head
# B. Binding sweep — every cryptic *declaration* by kind.
bun <skill-dir>/scripts/extract.ts "$WS/renamed.js" --only-cryptic --no-context --compact \
  | jq -r '.[] | "\(.kind)\t\(.name)"' | sort | uniq -c | sort -rn | head -20
# Executable gate (--allow-flat: Stage 2 runs before the split step).
bun <skill-dir>/scripts/quality-gate.ts "$WS/renamed.js" --allow-flat
```

- **Sweep A** (single-letter references): any > 50 means Pass 2 was skipped. `e ~10–30, t ~10–30` is fine (legit template-tag params); `e 338, t 322` is Program-only output.
- **Sweep B** (cryptic declarations by kind): `param:e/t/n` in the dozens/hundreds → Pass 3 skipped (run `smart-rename.ts` + manual Pass 3); high `let:t`/`let:n` → Pass 2 hit the `--min-refs` wall.

If either fails for density, **go back to Step 2.5 and run the missing pass** before Phase B. A checkpoint with gate failures is valid workspace state but not a deliverable.

For Phase A caveats (scope-awareness, properties not renamed, sourcemap re-extract pitfalls), see [reference/caveats.md → Stage 2 rename](../reference/caveats.md#stage-2-rename).

---

# Phase B — Polish

Undo the bundler/compiler transforms that survive minification. Each pass is idempotent and skippable. **Skip Phase B unless** the bundle has React/JSX-runtime output, React Compiler `cache[N]` scaffolding, or `(0, x.y)(...)` / backtick string literals you want collapsed.

**If wakaru-normalize ran (Step 0b.5)**, several Phase B passes overlap it (`jsx-runtime` ≈ wakaru `un_jsx`; `simplify`'s `(0,fn)→fn` ≈ `un_indirect_call`; backtick→string ≈ `un_template_literal`; `normalize-exports` ≈ `un_export_rename`/`un_esm`) and will **largely no-op — that's expected, not a bug**. Still run Phase B: `strip-react-compiler` has **no** wakaru equivalent (React Compiler `cache[N]` survives), and re-check the lowercase-JSX-intrinsic-vs-component-alias hazard after wakaru's `un_jsx` exactly as you would after `jsx-runtime.ts`.

**Two profiles.** A **reading-aid subset** (strip-react-compiler, simplify, jsx-runtime, inline-defaults, normalize-exports) changes how code _reads_; an **import-resolution tail** (react-shim-elim, resolve-npm-imports, npm-cjs-shim-elim, dead-shim-elim) only makes imports resolve against `node_modules`. The **default tier** runs `polish.ts --fast` (the subset); the tail is **deep mode only** (drop `--fast`).

**Order matters.** `strip-react-compiler` first (exposes real control flow); `inline-defaults` after `simplify` (sees shorthand-restored destructures and folded `undefined`); the export/import passes last (touch only top-level declarations + imports).

## Strip React Compiler memoization

```bash
bun <skill-dir>/scripts/strip-react-compiler.ts <input.js|-> [--out output.js]
```

React Compiler wraps function bodies in a per-render cache (`let cache = react.c(N); cache[0] === props ? (read…) : (compute…, cache[0]=props, …)`). The script detects `let cache = expr.c(N)` (or `(0, expr.c)(N)`), keeps each conditional's compute branch (stripped of `cache[i] = …` writes), removes the dead cache var, then merges `let X; X = expr;` → `let X = expr;` and drops unused locals. Handles the `!==` reversed test, multi-cache functions, and sequence-expression compute branches. Run before `simplify`.

## Simplify (round 2)

```bash
bun <skill-dir>/scripts/simplify.ts <input.js|-> [--out output.js] [--max-passes 10] [--no-inline]
```

Same script as Stage 1's simplify; on renamed output the valuable passes are: `(0, fn)(args)` → `fn(args)` (Rollup's `this`-stripping wrapper — safe in typical bundles, but technically changes `this` from `undefined` to the receiver; `--no-inline` to skip if you rely on it); backtick-no-interpolation → `"…"`; `{a: a}` → `{a}` shorthand; `{true:"X",false:""}[c?"true":"false"]` → `c && "X"` (boolean-conditional class names; `false:"Y"` → `c ? "X" : "Y"`). Constant folding / dead-if / `obj["foo"]`→`obj.foo` also fire.

## JSX runtime un-transform

```bash
bun <skill-dir>/scripts/jsx-runtime.ts <input.js|-> [--out output.js]
```

Converts `<obj>.jsx/.jsxs/.jsxDEV(...)` and bare `jsx(...)` calls to JSX. 1st arg = type (string → intrinsic `<svg>`; identifier → component `<Button>`; member → `<Form.Field>`; `Fragment` → `<>…</>`). 2nd arg = props (keys → attributes, `children` → JSX children, spreads → `{...spread}`). 3rd arg = `key`. Unconvertible calls (non-string/identifier types, computed keys, kebab tags like `"my-element"`) are left intact and counted. **Detection is by name** (`.jsx`/`.jsxs`/`.jsxDEV`/`.Fragment`) regardless of receiver — a user-defined `.jsx` method would also convert; fix rare false positives by hand.

## Inline destructure defaults

```bash
bun <skill-dir>/scripts/inline-defaults.ts <input.js|-> [--out output.js]
```

Two transforms: **(a)** merge `let A, B; ({A,B} = expr);` → `let { A, B } = expr;` when names match; **(b)** inline `let X = p === undefined ? D : p` (or `p ?? D`) as a destructure default `{ p = D }`, replacing `X` refs with `p`. Safety: `D` must be side-effect-free; `p` must be a simple identifier bound in a same-scope destructure; an existing default must match exactly; `X` must be unshadowed. Note `??` also fires on `null` (destructure defaults don't) — inconsequential for React props, but audit deliberately `null`-tolerant props.

## Export normalization

```bash
bun <skill-dir>/scripts/normalize-exports.ts <input.js|-> [--out output.js] [--prefer exported|local]
```

Collapses single-use bindings aliased on export: `var X = expr; export { X as Y };` → `export const Y = expr;` (same for function/class; splits `var r=1, X=expr;`). Standalone defaults `--prefer exported` (the alias `Y`); `polish.ts` overrides to `--prefer local` since Phase A usually picks a more readable local (`ClockIcon` vs `t`). Only fires when the local has exactly one reference (the export specifier) and is top-level; re-exports from other modules are untouched.

## Collapse React namespace shims (deep-mode tail)

```bash
bun <skill-dir>/scripts/react-shim-elim.ts <input.tsx|-> [--out output.tsx] [--format]
```

Collapses the Rollup/Rolldown CJS shim `var ReactNamespace = toESM(loadReact(), 1); ReactNamespace.createContext(...)` → `import React from "react"; React.createContext(...)`, pruning the now-unused helper imports. Fires only when the initializer is a top-level `toESM(loadReact())` with the helper from a runtime-helper chunk and the loader from a `jsx-runtime` chunk.

## Resolve npm-package imports (deep-mode tail)

```bash
bun <skill-dir>/scripts/resolve-npm-imports.ts <input.js|-> [--out output.js] [--no-chunk-lookup] [--no-alias-lookup]
```

Rewrites vendored-npm chunk imports back to bare specifiers, two strategies in order:

- **Chunk-name lookup (high confidence):** strips the hash suffix off `../clsx-DDuZWq6Y.js` → `clsx`, looks it up in `CHUNK_NAME_REGISTRY`; if found, every specifier is rewritten. The registry knows clsx, classnames, tslib, react, react-dom, jsx-runtime, jsx-dev-runtime, `@dnd-kit/*`, framer-motion, react-intl, marked, `@floating-ui/*`, Statsig, and more.
- **Alias fallback:** when the basename isn't recognised (`./shared`), looks up each specifier's local binding in `ALIAS_REGISTRY` (React API, jsx helpers, clsx, tslib, etc.) and splits matching ones into a bare import.
- **Cross-file shim chains:** recognises `_React = toESM(React())` re-exported via `./shared`, rewrites consumers to `import React from "react"` and renames `_React.useState(…)` → `React.useState(…)`.

Never resolves already-bare specifiers; leaves a specifier alone on rename collision. `--no-chunk-lookup` / `--no-alias-lookup` disable a strategy. (Found a vendored package it missed? Add it to the registry — see the [self-improvement protocol](../SKILL.md#maintaining-this-skill-self-improvement-protocol).)

## Collapse npm CJS interop shims (deep-mode tail)

```bash
bun <skill-dir>/scripts/npm-cjs-shim-elim.ts <input.js|-> [--out output.js]
```

After `resolve-npm-imports`, replaces `var ns = toESModule(ReactDOM(), 1); ns.createPortal(...)` with the resolved default import (`ReactDOM.createPortal(...)`) and drops the empty var. Fires only on `toESModule(defaultImport(), …)`; local CJS helper factories are left for manual handling. `dead-shim-elim` (run last by `polish.ts`) then drops any dead top-level lazy-getter vars + their orphaned imports.

## Orchestrator (one-shot polish)

```bash
bun <skill-dir>/scripts/polish.ts <input.js|-> [--out output.js] [--report report.json] \
  [--rename] [--fast] [--skip step1,step2] [--stop-after step] [--no-inline] [--max-passes 10] \
  [--prefer local|exported] [--source <original-path>] [--description <one-line summary>] [--format]
```

Runs strip-react-compiler → simplify → jsx-runtime → inline-defaults → normalize-exports → react-shim-elim → resolve-npm-imports → npm-cjs-shim-elim → dead-shim-elim. Per-step try/catch; default `--prefer local`.

- **`--fast`** (default-tier / reading-aid): skips the import-resolution tail (`react-shim-elim`, `resolve-npm-imports`, `npm-cjs-shim-elim`, `dead-shim-elim`) — output won't resolve against `node_modules`, the right trade when readability beats compilability. Drop it in deep mode.
- **`--rename`**: runs `smart-rename` + `apply` (Phase A's mechanical bulk) _before_ the chain, so `polish.ts <file> --rename --fast --source <path> --out draft.tsx --format` is the default one-shot. Hand-name the residue after.
- **`--source <original-path>`**: prepends `// Restored from <original-path>` (use the _original_ bundle path, not `$WS/renamed.js`). **`--description`**: adds a second summary header line — write it _after_ reading the polished code.
- **`--format`** (requires `--out`): also runs `format.ts` (prettier) on the output. For directory-level formatting after a split, call `format.ts` separately.

Valid `--skip` / `--stop-after` names: `strip-react-compiler`, `simplify`, `jsx-runtime`, `inline-defaults`, `normalize-exports`, `react-shim-elim`, `resolve-npm-imports`, `npm-cjs-shim-elim`, `dead-shim-elim`.

## Prettier formatting (final)

```bash
bun <skill-dir>/scripts/format.ts <file-or-dir> [--check] [--glob '**/*.tsx']
```

Wraps `bunx prettier --write` (falls back to `npx`). Directory → every `.{ts,tsx,js,jsx,mjs,cjs}`; file → just that file; `--check` for a dry-run. Run **after** the multi-export split (otherwise the split overwrites prettier's work). Prettier is mandatory for hand-off — `@babel/generator` JSX spreads attributes across too many lines.

## What Phase B does NOT do (these stay agent work — see [Stage 3](stage-3-finalize.md))

- **TypeScript annotations** — type inference from minified code is judgment-heavy; do it manually.
- **Meaningful export names** — `normalize-exports` keeps the bundle alias unless you named the local in Phase A and passed `--prefer local`.
- **Semantic component APIs** — Phase B removes dead JSX runtime helpers but doesn't invent `IconProps`, split multi-icon chunks, or recover Button APIs (use [Stage 3](stage-3-finalize.md) / `semantic-finalize.ts`).
- **`.js` → `.tsx`** — extension is your call.

For Phase B caveats (idempotency, `.c()`/`.jsx` false positives, `??` semantics), see [reference/caveats.md → Stage 2 polish](../reference/caveats.md#stage-2-polish).
