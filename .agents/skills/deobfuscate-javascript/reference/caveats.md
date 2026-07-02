# Notes, caveats & troubleshooting

Pitfalls, gotchas, and FAQ for each stage of the pipeline. Each stage doc links here for the specific section relevant to it.

← Back to [SKILL.md](../SKILL.md). Stage detail: [Stage 1](../stages/stage-1-deobfuscate.md), [Stage 2](../stages/stage-2-restore.md), [Stage 3](../stages/stage-3-finalize.md).

---

## Pipeline ordering (Stage 1) — critical

Each Stage 1 step has an _input shape_ the previous step produced. Running them out of order silently no-ops or, worse, mangles things:

- **`unpack` first** — packed input is one giant `CallExpression`; AST passes have nothing to chew on until it's unpacked. Layered packers re-detect after each pass.
- **`string-array` before `decode-strings`** — string-array literals are already-readable strings; decoding the giant array first wastes work, and inlining first lets `decode-strings` only walk _used_ literals.
- **`simplify` after `string-array` + `decode-strings`** — folding/inlining works on literals; needs string-array references resolved first. Running `simplify` first will split rotation IIFEs into separate statements that `string-array`'s pattern matcher won't recognize.
- **`control-flow-report` last** — opaque predicates fed to `simplify` get folded out; what's left is the real CFG worth reporting on.
- **Stage 1 before Stage 2** — `extract.ts` byte offsets are stable within a source, but invalid across Stage 1 rewrites. Always run Stage 1 to completion before `extract.ts`; `renames.json` ids from pre-deobfuscation code are invalid afterward.

## Stage 1 safety

- **`unpack.ts` evaluates JS** — Dean Edwards Packer arg parsing and AAEncode decoding use `new Function(...)`. Stderr warns before each eval. Use `--no-eval` to refuse — the script exits 0 with input unchanged and `evalRefused: true` in the result. Run on untrusted input only after you've eyeballed the wrapper.
- **`string-array.ts` decoder-indirection** — when arrays are accessed through a wrapper function rather than directly, the script collects the array but produces 0 replacements (`decoderIndirection: true`). Run `simplify` (which inlines small functions) first, then re-run.
- **`simplify.ts` `--no-inline`** — by default `simplify` inlines `var k = 5; … k` → `… 5` when the binding is constant. Pass `--no-inline` if you want to preserve binding names for Stage 2's renamer to handle.
- **Stage 1 invalidates sourcemaps** — if a `.map` exists, sourcemap recovery (`source-map-explorer`) is strictly better than Stage 1 + Stage 2. Run `sourcemap-check.ts` _before_ committing to Stage 1.

## Stage 2 rename

- **Scope-aware**: two different `e` bindings in different functions are renamed independently. Shadowed variables (same name, nested scopes) each get their own entry.
- **Properties are not renamed**: `obj.foo` stays `obj.foo` — only declarations and their references. This is correct: you don't know what callers expect.
- **Class method names are not renamed** for the same reason (they're properties, not bindings).
- **Module imports are renameable** — references update automatically.
- **Collisions**: same target name across unrelated scopes → second is `_`-prefixed (matches humanify behaviour).
- **Reserved words**: auto-`_`-prefixed (`static` → `_static`).
- **Large bundles**: up to ~10 MB parse cleanly; the bottleneck is your token budget for the rename JSON. Use webcrack ([webpack-bundle.md](../workflows/webpack-bundle.md)) past that point.
- **Source maps are non-deterministic across builds** — if the user's bundle has a `.map` from a different commit, recovered originals may not match runtime behaviour. Sanity-check.
- **Don't re-rename a renamed file** — `id` offsets shift after generator reformatting, so re-running extract on an already-renamed file gives fresh ids that won't match a prior `renames.json`. (Pass 2 of the multi-pass workflow is the exception: you _do_ extract from `pass1.js`, but you build a _new_ `renames.json` from those new ids — not re-use the old one.)
- **`--scope-kind Program` is a Pass-1 filter, not the whole pass.** Running extract with `--scope-kind Program` and stopping after one apply leaves every function body un-renamed — see [stage-2-restore.md → Step 2.5](../stages/stage-2-restore.md#step-25--dont-stop-at-program-scope) and run Pass 2.

## Stage 2 polish

- **Missing `ref/node_modules` is not a reason to reimplement npm packages.**
  Extracted app snapshots can omit dependencies that were bundled into webview
  chunks. When package identity is high-confidence from fingerprints,
  `CHUNK_NAME_REGISTRY`, or the Codex package table (`react-intl`/FormatJS,
  `react-router`, `framer-motion`, Segment, etc.), keep the boundary as a bare
  npm re-export and record the dependency/ambient-declaration requirement. A
  hand-written compatibility layer is only acceptable for a genuinely
  app-specific fork or runtime bridge, not for a stock third-party package.

- **Tier note**: the default "readable restore" tier runs `polish.ts --fast` — the reading-aid subset only (`strip-react-compiler`, `simplify`, `jsx-runtime`, `inline-defaults`, `normalize-exports`). The import-resolution tail (`react-shim-elim`, `resolve-npm-imports`, `npm-cjs-shim-elim`, `dead-shim-elim`) only makes imports resolve against `node_modules` and runs in **deep mode** (drop `--fast`).
- **Idempotent**: running `polish.ts` twice on the same input changes nothing on the second pass. Safe to re-run if you tweak one of `--prefer` / `--skip` / `--stop-after`.
- **`strip-react-compiler` detection is by callee name**: any `let X = expr.c(N)` or `let X = (0, expr.c)(N)` with a numeric literal arg is treated as a React Compiler cache. A user-defined `.c()` method that happens to match this shape would also be stripped — extremely rare in practice but possible. If you hit a false positive, run polish with `--skip strip-react-compiler` and handle the React Compiler bundle manually.
- **`(0, fn)(args)` → `fn(args)` is a `this`-affecting rewrite**: Rollup emits the IIFE wrapper specifically to set the call's `this` to `undefined` (otherwise `obj.method()` binds `obj` as `this`). The replacement makes the receiver `this` again. This is fine for the overwhelming majority of bundled output (React's `jsx`-runtime, Lodash, etc. don't read `this`) but technically observable. Pass `--skip simplify` if you have a transform that genuinely depends on `this`-stripping. **wakaru's `un_indirect_call` does the same rewrite** — if you ran wakaru-normalize (Step 0b.5) the unwrap may already be done; use `--level minimal` when this `this`-stripping matters.
- **`jsx-runtime` detection is by name, not by binding**: any `.jsx`, `.jsxs`, `.jsxDEV`, `.Fragment` reference is treated as JSX-runtime. False positives are rare (these names are reserved by convention) but possible. If you have a user-defined `.jsx` method, the script will rewrite the call — re-check after polish.
- **`inline-defaults` treats `??` as a destructure default**: a destructure default fires only on `undefined`; `??` fires on `null` _and_ `undefined`. The script applies the transform anyway because React component props almost never carry `null`. If you have a `null`-tolerant prop, audit after polish or `--skip inline-defaults`.
- **`polish.ts` defaults to `--prefer local`** (the bundle's alias gets replaced with the local rename, e.g. `export const ClockIcon = …` not `export const t = …`). Pass `--prefer exported` if you want to keep the bundle's alias. The standalone `normalize-exports.ts` script still defaults to `--prefer exported` (its old behaviour) for backwards compatibility — the override is only on `polish.ts`.
- **Provenance header via `--source`**: polish only prepends the `// Restored from <path>` header when you explicitly pass `--source` (it has no way to know the original chunk path otherwise — its input is usually `$WS/renamed.js`). Re-running polish on already-headered code will _duplicate_ the header — don't pipe polish through itself.
- **Header description via `--description`**: pass `--description "<text>"` to add a second `// <text>` line under the source line. Use this for a one-sentence summary of what the file does (`"Semantic button component: named variants, typed props, and direct JSX."`). The description is agent judgment — write it _after_ you've understood the polished code. The flag also works standalone (without `--source`) and just emits the description line on its own.
- **Sourcemap comments survive polish**: a dangling `//# sourceMappingURL=…` will pass through to the output. Delete by hand or post-process with `sed`/`prettier` if needed.
- **Dead Vite/Rollup runtime stubs survive polish**: after `jsx-runtime` un-transform and `strip-react-compiler`, lines like `var jsxRuntime = requireJsxRuntime();`, `var react = requireReact();` and `toESM(requireReact());` may become unreferenced. The skill does not auto-delete them because static side-effect analysis isn't reliable on arbitrary calls — confirm and remove by hand.

## Formatting

- **Prettier 3 honours `.gitignore` by default — and restore deliverables are often gitignored.** Many projects gitignore the whole restore root (this repo gitignores `restored/` and `ref/`). Because Prettier 3 defaults `--ignore-path` to `[".gitignore", ".prettierignore"]`, a plain `prettier --write restored/` (or `bunx prettier`) **silently skips every file** and reports "All matched files use Prettier code style!" — the classic "format ran, changed nothing, looks done" trap. `scripts/format.ts` pins `--ignore-path .prettierignore` so `.gitignore` is bypassed; if you ever invoke prettier directly on a deliverable, pass the same flag. Symptom of the bug: a deliverable with 400-char lines and un-parenthesized multi-line JSX returns that prettier insists is already clean — copy it outside the gitignored tree and `prettier --check` will flag it.
- **`promote-organized.ts` formats each deliverable as it lands** (via `format.ts`), so promoted files in `restored/` are never raw `@babel/generator` output (un-wrapped lines, no blank lines, `return <jsx>…</jsx>;` without parens). The multi-line-JSX-return-without-parens shape compiles, but prettier wraps it in `return ( … )` — run formatting rather than hand-inserting parens.
- **`quality-gate.ts --check-format`** runs `prettier --check` (same `.gitignore` bypass) and fails unformatted files; it soft-skips with a stderr note when prettier is unreachable. `format.ts` prefers a `prettier` already on `PATH` (offline-safe) before `bunx`/`npx`.

## Mechanical normalization (wakaru) — caveats

`wakaru-normalize.ts` wraps the external `@wakaru/cli` (Rust) decompiler as a pre-rename pass (Stage 2 Step 0b.5). It is default-on in the readable tier.

- **Byte offsets shift** — wakaru rewrites the AST, so symbol ids / `renames.json` `name@offset` captured before it are stale. Extract and rename from the normalized output (`$WS/normalized.js`), never `original.js`. Same rule as Stage 1; the order is `sourcemap-check → detect → (Stage 1) → wakaru → extract`.
- **Sourcemap first** — if a usable `.map` exists, recover via `source-map-explorer` and skip wakaru entirely; running it rewrites the bytes the `.map` indexes.
- **Not a deobfuscator** — wakaru recovers transpiler/minifier output, not Obfuscator.IO / Packer / AAEncode / control-flow flattening. Run Stage 1 first on obfuscated input.
- **Not a semantic renamer** — its `smart_rename` is the same deterministic heuristic as `smart-rename.ts`. wakaru never produces meaningful names; the skill's rename remains the hard bar.
- **`--unpack` forks the restore root** — only ever `--unpack` a single scope-hoisted bundle. On an already-split chunk tree it re-derives its own filenames matching nothing in the manifest/ledger/`CHUNK_NAME_REGISTRY`. In full-restoration, normalize chunk _bodies_ only and rebuild the graph from the real chunk files afterward; never let wakaru's `un_esm` substitute for `resolve-npm-imports.ts`.
- **Fidelity at `aggressive` / `--dce`** — default is `--level standard` (no `--dce`). `--level minimal` for fidelity-critical/untrusted code; `aggressive` only with a re-read + behavioral sanity check; `--dce` can drop side-effecting code, so opt in only when you've audited.
- **Double-transform with Phase B** — overlapping passes (`un_jsx`/`jsx-runtime`, `un_indirect_call`/`simplify`, `un_template_literal`, `un_export_rename`/`normalize-exports`) make Phase B largely no-op afterward — expected. `strip-react-compiler` has no wakaru equivalent, so Phase B must still run.
- **Availability / version** — invoked via `npx @wakaru/cli@1.5.0` (pinned) or a global `wakaru`. When unavailable the wrapper passes the input through unchanged (stderr note, exit 0) so offline/CI runs don't break — surfaced as `skipped`. A genuine wakaru parse error surfaces as exit 2 with a usable passthrough output left in place.

## Troubleshooting

### "unpack says no packer detected but I see `eval(function(p,a,c,k,e,d){...})`"

The detector requires the exact `(p, a, c, k, e, d|r)` parameter signature. If the wrapper is custom or the parameters were renamed, the regex won't match. Either rename the wrapper params to match the standard signature, or paste the inner `function(p,a,c,k,e,d){...}('...', N, ...)` body into a JS REPL and execute it manually.

### "string-array replaced 0 references"

Check stderr for `decoder-indirection`. If true, the obfuscator wraps array access behind a function. Run `bun scripts/simplify.ts <input>` first (it inlines small constant functions), then re-run `string-array`. If it's still 0, the array might be rotated _and_ the rotation pattern is non-standard — file a fixture and we can extend the matcher.

### "simplify inlined too aggressively, I lost a name I wanted"

Pass `--no-inline`. Constant-folding and dead-code removal still happen; only literal variable inlining is skipped.

### "control-flow-report shows N flatteners — how do I rewrite?"

See [Example 6](examples.md#example-6-control-flow-flattening--read-the-report-manually-rewrite). The report gives you the dispatch graph; you trace it and inline. Automatic CFG reconstruction is unreliable; agent-driven rewrite is the right tradeoff for this skill's no-external-LLM philosophy.

### "deobfuscate orchestrator says step X errored but kept going"

By design — one failing AST pass doesn't abort the rest. Read the `--report` JSON for the error, fix the input (often a syntax error from a previous step's mangling), or `--skip` that step and continue.

### "sourceMappingURL detected" warning during extract

`extract.ts` saw a sourcemap reference but you skipped step 0a. Run `sourcemap-check.ts` — if a sourcemap is recoverable, abandon renaming.

### Output has lots of `_foo`, `__foo` names

You picked the same target for many bindings within a _single_ scope, or those targets collided with existing names visible in that scope. `apply.ts` tracks "taken" names per scope (not globally), so reusing the same target name across _unrelated_ function scopes — e.g. naming many local `routeScope` bindings — is fine and does NOT cause `_`-prefixing. If you still see chains of underscores (`____routeScope`), the bindings are actually shadowing each other (same scope or parent/child relationship) — pick a more specific name or accept the prefixes.

### Top-level exports got semantic names but function bodies are still `e, t, n, k, A, M, N, …`

Pass 1 (Program scope) ran, Pass 2 (function bodies) didn't. Re-extract from the Pass-1 output with `--only-cryptic --min-refs 2` (drop the `--scope-kind` filter), decide names for the function-local bindings, then `apply.ts` again. See [stage-2-restore.md → Step 2.5](../stages/stage-2-restore.md#step-25--dont-stop-at-program-scope). The [Stage 3 D0 gate](../stages/stage-3-finalize.md#d0--did-the-rename-and-split-actually-finish) catches this if you remember to run it.

### Some references didn't update

Babel's `scope.rename` updates references that resolve through normal scope chains. References inside strings (`eval`, `Function(...)`, dynamic property access like `window['a']`) are NOT updated — they're not real references from the parser's perspective. If you spot stale names in strings, fix manually.

### Parse error

Source uses syntax the parser doesn't recognise. Scripts run with `errorRecovery: true` so they try to limp through, but truly broken code (or non-JS like TypeScript types) won't parse. If the input is `.ts`, add `'typescript'` to the parser `plugins` array in the affected script.

### `extract.ts` produced a 50 MB symbols.json on a 1 MB input

Expected for an unfiltered extract on a huge bundle (10 000+ symbols × 500-char context). Always pass filter flags on inputs > 500 KB: `--only-cryptic --min-refs 3 --top 200 --max-same-scope 5 --context-size 300` typically drops the JSON to ~100 KB. See [huge-single-file.md](../workflows/huge-single-file.md).

### I can't possibly rename 5 000 symbols in one pass

Don't. Use `scripts/plan.ts` to group them into batches and walk the checklist. Each batch is one focused rename session. See [huge-single-file.md](../workflows/huge-single-file.md) and [Example 7](examples.md#example-7-huge-bundle--plan-then-batch-with-a-checklist).

### Apply renames 0 symbols but renames.json has entries

The `id` strings in `renames.json` don't match what `extract.ts` produced this run. Re-run extract first, then make sure renames.json uses the fresh ids (the `@<offset>` part is what changes). This frequently happens after a Stage 1 pass — _always_ re-run `extract.ts` after Stage 1.

### webcrack errored / left files unsplit

webcrack handles webpack-shaped bundles best. For non-webpack bundles (rollup, esbuild, vite), the output may be unchanged — just feed the original file into extract/apply. For multi-export ESM chunks specifically, see [multi-export-bundle.md](../workflows/multi-export-bundle.md).

### Output still contains `(0, jsxRuntime.jsx)("svg", { ... })` calls / backtick string literals after rename

You skipped Stage 2's polish phase. Run `bun scripts/polish.ts <renamed.js> --out <polished.js>` to convert JSX-runtime calls back to JSX, strip the `(0, fn)` IIFE wrapper, and collapse interpolation-free template literals. See [react-vite.md](../workflows/react-vite.md) and [Example 8](examples.md#example-8-reactvite-icon-chunk--rename--polish-to-recover-jsx).

### Output still contains `cache[N]` references or a `let cache = react.c(N)` declaration

You skipped `strip-react-compiler` (or you ran `polish.ts` with `--skip strip-react-compiler` / `--stop-after` upstream of it). Re-run `bun scripts/polish.ts <renamed.js>` without that skip — the strip pass is the first Stage 2 polish step. The cache scaffolding is React Compiler output; see [Example 9](examples.md#example-9-react-compiler-output-button--strip-cache-inline-defaults-recover-jsx).

### After polish I still see `let X = p === undefined ? D : p` declarations

The source destructure `p` wasn't found in the same function scope (or it isn't a simple identifier — e.g. it's nested like `{ foo: { p } }`). Inline-defaults only collapses defaults when the source binding is a flat destructure property of the form `{ p }` or `{ p = D }`. Hand-edit those cases.

### Polish converted `X = p ?? D` to a destructure default but my prop accepts `null`

Inline-defaults treats `??` and `=== undefined` the same way because React props rarely carry `null`. If your prop legitimately distinguishes `null` from `undefined`, run polish with `--skip inline-defaults` and inline the rest by hand, or revert that specific declaration after polish.

### `jsx-runtime.ts` reports `N unconvertible`

The script can only rewrite calls where (a) the type is a string literal that's a valid JS identifier, an identifier, or a `Foo.Bar` member expression, and (b) the props is a literal `ObjectExpression`. Unconvertible cases: kebab-case string tags (`"my-element"`), the second arg is a variable (`jsx("div", props)` where `props` is a free variable), computed/method properties in the props object. Either rewrite by hand, or pre-simplify so the props become a literal object.

### Polish output still has `export { ClockIcon as t };`

`normalize-exports` only collapses bindings with exactly one reference. If the local name (`ClockIcon`) is referenced anywhere else in the module besides the export specifier, the export stays as-is. Find and remove the extra reference, or accept the aliased export.

### Polish gave me `export const t = …` but I wanted `export const ClockIcon = …`

Default behaviour is `--prefer exported` (use the bundle's export alias). Rerun with `--prefer local` to keep the binding name you assigned in Stage 2's `renames.json`.

### After polish, `var jsxRuntime = requireJsxRuntime();` is still there but unused

Expected. The skill doesn't auto-delete unreferenced var declarations whose init is an arbitrary call (it can't prove no side effects). Delete the line manually once you've confirmed `jsxRuntime` has no remaining references.

### The output has no `// Restored from <path>` header

You didn't pass `--source <original-path>` to `polish.ts`. The header is opt-in because polish doesn't reliably know the original chunk path — its input is usually `$WS/renamed.js`. Re-run with `--source ref/.../<original.js>`, or add the header by hand as the file's first line. See [Stage 3 D1](../stages/stage-3-finalize.md#d1--provenance-header-two-lines).

### The output has two `// Restored from <path>` headers

You ran `polish.ts --source` twice on the same code. Polish doesn't deduplicate — it always prepends. Either run polish only once per chunk, or delete the duplicate by hand. The library function `polish()` has the same behaviour for `sourcePath`.

### My output renamed `./spinner-D37df5tU.js` to `./spinner.js` and now imports are broken

You shouldn't rewrite local import paths — even if the hash suffix looks ugly, it's the real file name on disk. Only resolve a path to a bare npm specifier (e.g. `"clsx"`) when you're certain the binding _is_ a vendored copy of that package. See [Stage 3 D2](../stages/stage-3-finalize.md#d2--import-paths-preserve-local-resolve-npm).
