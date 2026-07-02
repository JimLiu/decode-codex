# Stage 3 — Finalize (deep / production mode only)

> **Deep / production mode only.** Stage 3 turns a readable [Stage 2](stage-2-restore.md) checkpoint into _idiomatic typed_ TypeScript and verifies it. The **default (readable) tier does not require it**: a well-named file from Stage 2 (semantic filename + provenance header) is a valid deliverable. The naming-quality bar (no `buttonValue3` / `contextParam14`) applies in both tiers; everything below about types, `forwardRef`, `as const`, and import resolution is deep-mode finishing work.

Stage 3 has two phases:

- **Phase A — Semantic rewrite (D0–D7):** the host agent reads the Stage 2 checkpoint together with the original chunk, manifest/ledger, producer/consumer imports, and project conventions, then rewrites it into TypeScript a human would maintain — semantic filenames, typed `.tsx` surfaces, directory splits, repaired imports. This is allowed to be a rewrite, not a touch-up.
- **Phase B — Acceptance review (E1–E4):** the host agent reads every delivered file end-to-end against a four-category quality bar and iterates until each passes. **No sub-agent and no authorization required** (an independent reviewer sub-agent is optional).

← Back to [SKILL.md](../SKILL.md). Companions: [Stage 1 — Deobfuscate](stage-1-deobfuscate.md), [Stage 2 — Restore](stage-2-restore.md).

---

# Phase A — Semantic rewrite

After Stage 2, the output is a mechanical checkpoint — it may parse and format while still reading like `buttonValue3` output. Scripts provide recipes and pre-filters; the host agent owns the final code.

## D-1 — Whole-tree restores: drive Phase A from the organize plan + promote frontier

For a single chunk, work D0–D7 directly. For a **whole-tree** restore (the default scope), don't hand-walk hundreds of checkpoints — drive Phase A through the resumable worklist from [workflows/full-restoration.md → Step 4](../workflows/full-restoration.md):

1. `plan-organize.ts --target "$TARGET"` → proposes each chunk's domain + semantic kebab path + recipe into `_full/organize-plan.json`; review `needs-review` rows, `--apply`.
2. For `manual`/`split` chunks, do the D0–D7 rewrite on the chunk's candidate at `_full/files/<basename>/candidate.tsx` (the checkpoint is the input). `icon`/`button` chunks are produced typed by `semantic-finalize.ts` at promote time.
3. `promote-organized.ts --target "$TARGET"` drains the `promote` frontier (producers first): it runs the **same D7 gate** per chunk, copies passing deliverables into `restored/<domain>/`, repairs imports, and sets `stages.promoted`. Gate-fail → it rolls back and reports; fix the candidate and re-run.

This is **resumable and fleet-safe**: state lives on disk (`manifest.organization`, `stages.organized`/`promoted`), a cold restart just re-runs `promote-organized.ts` (it skips `promoted` chunks and re-derives the frontier), and multiple agents fan across the frontier via per-chunk `promote` locks. Per-chunk D0–D7 below is unchanged; it just runs inside the candidate rewrite (manual) or the recipe (icon/button).

## D0 — Did the rename and split actually finish?

> **Tier note.** In the **default tier** this gate is _advisory_ — only the naming-density checks matter (cryptic-reference density, cryptic params); the split / icon-type / Button-recipe checks are deep-mode requirements. Run `quality-gate.ts --allow-flat --allow-mechanical-names` for the naming signal only. In **deep mode** it's a hard pre-filter.

```bash
OUT="$WS/polished.tsx"   # or whatever Stage 2 wrote
bun <skill-dir>/scripts/quality-gate.ts "$OUT"
```

`quality-gate.ts` fails on: too many cryptic params (> 20) or bindings (> 80) → Stage 2 Pass 2/3 unfinished; dense one-letter refs (any short id > 50×); generated fallback names (`ImportedBinding1`, `callbackValue1`, `buttonValue3`, `buttonParam1`, `contextParam14`, `DistO`, …) → a mechanical rename mistaken for semantic; cryptic public export names; missing provenance header; stale runtime/compiler residue (`jsx-runtime`, `toESModule`, `sourceMappingURL`, cache slots); suspicious lowercase JSX tags (`<j>`); flat files that should split (> 1000 lines, > 2 exports, or a registry-object export). Pass `--allow-flat` only for an intentional single-file artifact; `--allow-mechanical-names` only for an intermediate checkpoint, never a public deliverable.

When the gate fails, these probes diagnose which phase to revisit:

```bash
# cryptic-reference density (> 50 single-letter idents → Pass 2 skipped)
grep -oE '\b[a-zA-Z_$][a-zA-Z0-9_$]*\b' "$OUT" | awk 'length($0)<=2 && $0 !~ /^(as|js|id|if|do|to|on|in|of|or|at|is|be|el|fs|os|tx|bg)$/' | sort | uniq -c | sort -rn | awk '$1>50' | head
# cryptic *params* (> 20 → Pass 3 skipped; components still `function Foo(e)`)
bun <skill-dir>/scripts/extract.ts "$OUT" --only-cryptic --kind param --no-context --compact | jq 'length'
# generated fallback names (any hit → renamer stopped at a placeholder)
grep -oE '\b((ImportedBinding|callbackValue|localValue|elementNode|hookValue|restoredHelper|RestoredComponent|param|value)[0-9]+|[a-z][A-Za-z0-9]*(Param|Value)[0-9]+|Dist[A-Z])\b' "$OUT" | sort -u | head
# also grep OUT as needed for: registry-export-not-split · `compilerCache.c(` count · `SVGProps<SVGSVGElement>` + icon residue · `<spinnerT|function Button(props)`
```

Remediation: density → [Stage 2 Step 2.5](stage-2-restore.md#step-25--dont-stop-at-program-scope) Pass 2; cryptic params → `smart-rename.ts` + Pass 3; registry not split → [multi-export-bundle.md](../workflows/multi-export-bundle.md); fallback names → replace with domain names from call sites / exports / JSX shape (no new placeholders); React Compiler cache left → hand-strip the worst pattern (keep the compute branch only); icon residue / unsplit multi-icon → `semantic-finalize.ts --recipe icon` (two independent SVG exports must become a directory + barrel, even for tiny files); mechanical Button → `semantic-finalize.ts --recipe button` or the Button recipe by hand.

**Don't send a file to Phase B that hasn't passed D0** (unless you intend to review a known partial) — typing a half-renamed file just commits the half-rename. Re-run `quality-gate.ts` (exit 0) before promoting or marking `finalized`.

## D0.5 — Semantic public filenames

Checkpoints may keep source basenames (`button-bq66r8jD.tsx`); public deliverables must not. Rename final files/dirs to meaningful **kebab-case** names (`button.tsx`, `app-shell/`) — only the filename is kebab; the React component identifier stays PascalCase (`button.tsx` exports `Button`) — and keep the chunk identity in the provenance header + import map/report. For full-restoration trees, rewrite imports between finalized files to semantic public paths; a hashed path is acceptable only as a temporary, report-visible boundary.

## D1 — Provenance header (two lines)

Pass `--source <original-path>` to `polish.ts` for `// Restored from <original-path>`, then add a second summary line (via `--description` or by editing):

```
// Restored from ref/webview/assets/button-bq66r8jD.js
// Semantic button component: named variants, typed props, and direct JSX.
```

A good description: ≤ 80 chars, names the component/utility, hints at the API shape ("named variants", "ref-forwarding", "fetch wrapper with retry"), reads like a comment a teammate would want. Write it _after_ understanding the code, not upfront.

## D2 — Import paths: preserve local, resolve npm

The renamer changes binding names but never import strings. Stage 2's `resolve-npm-imports.ts` / `react-shim-elim.ts` automate the npm + React-shim cases. Stage 3 does the judgment work:

- **Checkpoint local code — keep the source path** (`import { t as Spinner } from "./spinner-D37df5tU.js"` — the hash is the trace back to the chunk).
- **Public final code — semantic paths between finalized files.** Once `spinner-D37df5tU.js` → `spinner.tsx` (exporting `Spinner`), rewrite consumers to that path and record the mapping in the import map. A hashed local import may remain only when it points at an unfinalized boundary.
- **Unrecognised npm packages.** If `resolve-npm-imports.ts` missed a vendored lib (e.g. `./react-hook-form-XXXX.js`), rewrite by hand or — better — add the basename to `CHUNK_NAME_REGISTRY` so the next bundle benefits. When unsure, leave the local path (reversible; a wrong npm rewrite isn't). This is one case of the [self-improvement protocol](../SKILL.md#maintaining-this-skill-self-improvement-protocol) — register it and commit the skill change.
- **Boundary chunks — pick the terminal state, never leave a permanent `any`-facade.** A `boundaries/*.ts` chunk that is a recognised npm package (the bundler renamed it after an internal module, so `CHUNK_NAME_REGISTRY` missed it) becomes a bare re-export shim: `make-facade.ts <chunk> --reexport <specifier> [--name-map alias→real.json]` — it resolves to real `@types` and is done. `ref/node_modules` and `ref/package.json` are useful confirmation, not a veto: if identity is high-confidence from package fingerprints, the registry, or the Codex package table, keep the npm-backed shim and add an ambient declaration/package-install note when the extracted dependency is absent. Never replace a confirmed third-party package such as `react-intl`/FormatJS with a hand-written compatibility layer merely because it is missing from `ref/node_modules`. A genuine app/host runtime stays a typed `any`-facade (type-check only) or `make-facade.ts --passthrough <ref-relpath>` (runnable `@ts-nocheck`+`// TODO` interim), and is **not** done until deep-restored out of `boundaries/`. See [SKILL.md → Boundary lifecycle](../SKILL.md#boundary-lifecycle--three-terminal-states-never-a-permanent-any-facade) and [reference/codex-ref.md](../reference/codex-ref.md) (incl. the fork caveat).
- **Separate type-only imports.** Lift type imports into `import type { … }` (e.g. `import type { ButtonHTMLAttributes, ForwardedRef } from "react"` apart from `import { forwardRef } from "react"`).

## D3 — Delete dead runtime stubs

`dead-shim-elim` (in `polish.ts`) auto-deletes top-level `var X = lazyY()` whose binding has zero refs and whose callee is an unused import specifier, pruning the orphaned imports. Verify the imports section shows no `import { t as loadJsxRuntime } …` + `var jsxRuntime = loadJsxRuntime();`. It leaves alone: callees with other references, callees resolving outside the module, anything with side effects beyond the simple `Identifier()` no-arg pattern. Delete leftover edge cases (multi-arg calls, property accesses) by hand and drop their imports.

## D4 — Drop dangling sourcemap comments

`polish.ts` strips a trailing `//# sourceMappingURL=…` on finalize. A surviving one mid-file (e.g. inside a string literal) was correctly preserved; otherwise no manual action needed.

## D5 — TypeScript types and the `.tsx` recipe

> **Deep / production mode only.** The default tier ships untyped code — `function Button(props) { … }` with meaningful names and clear JSX is acceptable. Everything here (the `Props` interface, `forwardRef` + `displayName`, `as const`, `keyof typeof`, `IconProps`, type-only imports) is the deep-tier shape.

**Pure SVG icon modules.** For a chunk whose public surface is only `<svg>` components:

```bash
bun <skill-dir>/scripts/semantic-finalize.ts "$WS/polished.tsx" --recipe icon --source "$INPUT" --out "$TARGET"
```

Required output: no `jsx-runtime` / `__toESM` / lazy-getter / `cache[…]` / sourcemap residue; `import type { SVGProps } from "react"` + `export type IconProps = SVGProps<SVGSVGElement>`; single icon → one kebab file (`download-icon.tsx`) with `export function DownloadIcon(props: IconProps)` + `export default`; multiple icons → kebab dir `<basename>/types.ts` + one kebab `*-icon.tsx` per icon (e.g. `expand-icon.tsx`, `collapse-icon.tsx`, exporting `ExpandIcon` / `CollapseIcon`) + `index.ts` barrel (mandatory even for tiny files like `expand-XXXX.js` — a flat file with `ExpandIcon` + `CollapseIcon` is not final); exact SVG path data preserved, `{...props}` spread onto `<svg>`. File/dir names are kebab-case; component identifiers stay PascalCase.

**Button/control components.** Prefer the recipe when it applies:

```bash
bun <skill-dir>/scripts/semantic-finalize.ts "$WS/polished.tsx" --recipe button --source "$INPUT" --out "$TARGET"
```

The patterns, in order (each assumes the previous is done):

1. **Name lookup tables semantically + freeze with `as const`** — `buttonColorClassNames`, not `radiusBySize` / `buttonValue3`. `as const` makes TS infer literal types (needed for step 2).
2. **Export `keyof typeof` unions** for any prop whose values come from a table: `export type ButtonColor = keyof typeof buttonColorClassNames;`. Now `color?: ButtonColor` autocompletes to exactly those keys.
3. **Define a `Props` interface extending the matching DOM attrs type** (`ButtonHTMLAttributes<HTMLButtonElement>`, `HTMLAttributes<HTMLDivElement>`, `AnchorHTMLAttributes<HTMLAnchorElement>`, `SVGProps<SVGSVGElement>`). Declare only the props _your_ component adds (the base type covers `onClick`/`disabled`/`aria-*`/`className`/…); mark variant props optional.
4. **Recover `forwardRef` + `displayName` + `export default`** — wrap `function ButtonRender({…}: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) { … return <button ref={ref} …> }` as `export const Button = forwardRef<HTMLButtonElement, ButtonProps>(ButtonRender)`, set `Button.displayName = "Button"`, then `export default Button` (keep the named export too). Defaulting any leaf UI component to this shape is safe — it strictly adds capability.
5. **Rename function-locals by what they hold** once you understand the component (`mergedClassName` → `buttonClassName`, `isInteractionDisabled` → `isDisabled`, `spinnerElement` → `loadingIndicator`, `rest` → `buttonProps`). Subjective — apply judgment, don't churn.
6. **Prefer ternary over `&&` for nullable JSX children** (`loading ? <Spinner /> : null` — `ReactElement | null` beats `| false`). Only for genuine "sometimes empty" slots.
7. **Don't add inferable types** — skip return-type annotations on render functions and event-handler param types the prop type already carries. Type only what documents or constrains something a reader can't deduce.

These are judgment work — match the project's existing style; the list is the _typical_ idiomatic-React shape, not the only one.

## D6 — Final prettier pass

```bash
bun <skill-dir>/scripts/format.ts <target-dir-or-file>
```

Directory for a multi-file split, file otherwise (skip if you already passed `--format` to `polish.ts`, but still run the directory after a `multi-export-bundle` split). Verify with `git diff` — prettier should only change whitespace/wrapping; if it reorders imports etc., check the project `.prettierrc`.

## D7 — Final executable gate

```bash
bun <skill-dir>/scripts/quality-gate.ts <target-file-or-dir>
```

Requires a provenance header (`--allow-missing-provenance` only for a pre-D1 candidate). Exit 0 required before Phase B (not final acceptance). For a split directory it walks every `.ts/.tsx/.js/.jsx` and ignores `.deobfuscate-javascript/`. For scripted promotion:

```bash
bun <skill-dir>/scripts/promote-final.ts "$WS/candidate" "<target-dir>/<basename>" --report "$WS/final-quality-report.json"
```

`promote-final.ts` runs the gate first; on failure writes the report and leaves the target untouched; on success replaces it. It does not run Phase B, so the acceptance review still follows.

---

# Phase B — Acceptance review

After the script gates pass, the deep deliverable is **not done** until every delivered file has been read end-to-end against the four-category bar and any `NEEDS_FIX` repaired. **The host agent performs this review itself — no sub-agent and no authorization required.** (In the default tier this whole phase reduces to an _optional_ single naming-only pass against E1.)

## Who reviews — host agent by default, sub-agent optional

The review is a careful end-to-end read of each delivered file against E1–E4. **By default the host agent (the one running the skill) does it** — re-read each file as if seeing it cold, resist rubber-stamping your own output, apply the checklist, repair, re-read until clean. This path needs no other tool and no authorization, so it always runs.

**Optional independence:** if the runtime offers a reviewer/sub-agent tool _and_ the user has authorized delegation, you may hand the read to one or more reviewer agents for independent eyes — pass [scripts/acceptance-checklist.md](../scripts/acceptance-checklist.md) as the prompt with 5–10 inlined files per call (or a `prepare-stage-e-review.ts` packet). This is an enhancement, never a requirement: never ask the user for authorization to finish, never block on sub-agent availability, and never report "reviewer unavailable" as though the phase could not run — fall back to host self-review and proceed.

## Why this phase exists

The script gates ([`quality-gate.ts`](../scripts/quality-gate.ts), [`promote-final.ts`](../scripts/promote-final.ts)) are threshold/regex scans. They prove a file is _not catastrophically broken_ but cannot judge whether a name is _semantically meaningful_, a `Props` interface is present, `forwardRef` + `displayName` are wired, or a parameter name matches its role. Real shipped output proves the gap: `restored/button-bq66r8jD.tsx` passed the gates yet shipped `buttonValue3` / `buttonParam1`, no `Props`, no `forwardRef`; `restored/context-menu-TJfRSX1h.tsx` shipped `contextValue6…65` and `DistO` placeholders. Only reading the file end-to-end and weighing each binding against the value it holds catches that grammatical-but-meaningless class.

## The four-category checklist

Verbatim spec below; the long form the reviewer reads is [scripts/acceptance-checklist.md](../scripts/acceptance-checklist.md) — keep the two in lock-step. **E1 (Naming) is the shared readability bar used in both tiers; E2–E4 are deep-mode criteria.**

### E1 — Naming

- No identifiers matching `*Param\d+`, `*Value\d+`, `paramN`, `valueN`, `callbackValueN`, `localValueN`, `ImportedBindingN`, `restoredHelperN`, `elementNodeN`, `hookValueN`, `RestoredComponentN`, or `DistA` / `DistO` / `DistT`-style placeholders.
- Lookup tables / records have descriptive names matching their role (`buttonColorClassNames`, not `buttonValue3`).
- Function and component parameters have call-site-appropriate names (`props`, `event`, `index`, `disabled`).
- React components are `PascalCase` and end in a noun phrase; hooks start with `use`.
- Sibling-imported aliases the producer already named semantically appear under their semantic name in the consumer.
- Public final file and directory names are semantic, kebab-case, and do not retain source chunk hashes (React component identifiers remain PascalCase).

### E2 — Readability (idiomatic TSX)

- Every exported React component has a `Props` interface or `type Props =`.
- DOM-wrapping components that receive a `ref` use `forwardRef<…>(...)` and set `displayName`.
- Pure SVG icons use `SVGProps<SVGSVGElement>` / the local `IconProps`, are named `*Icon`, and default-export when the file contains a single icon.
- Lookup tables use `as const`; their key unions are exposed via `keyof typeof`.
- No bundler residue: no `jsxRuntime.jsx(...)`, no `(0, fn)(...)`, no React Compiler `cache[N]` scaffolding, no `__toESM` / `loadJsxRuntime` / `toESModule` shims, no trailing `//# sourceMappingURL=…`.
- A provenance header is present (`// Restored from ref/.../<basename>.js`).

### E3 — Formatting

- `bunx prettier --check <file>` (or `npx prettier --check`) exits 0.
- JSX component tags that reference user-defined components are capitalized; lowercase tags are restricted to HTML intrinsics.
- Long ternaries / nested calls left by Phase B are collapsed or extracted.

### E4 — Other (structure, imports, exports)

- Vendored npm dependencies use bare specifiers (`import clsx from "clsx"`).
- Finalized local sibling imports use semantic public paths. Hashed local paths are acceptable only in hidden checkpoints or at an unfinalized original boundary.
- A `default export` is present where the file has a single primary exported component.
- Re-exported aliases are collapsed (`export const Foo = expr`).
- Dead helpers and unused imports are removed.

## The LOOP

Repeat until every file passes. The host agent runs it (delegating the read to a sub-agent only as the optional independence step above).

1. **Pre-filter** — `bun <skill-dir>/scripts/quality-gate.ts <target-dir>`. Exit 0 → review-ready. Exit ≠0 → fix the script-detectable failures via the D0 remediation list first; don't spend the read on what the regex already catches.
2. **Review** — read each file end-to-end against E1–E4. For large trees, `bun <skill-dir>/scripts/prepare-stage-e-review.ts <target-dir>` writes batch packets under the hidden workspace (`--verify` checks they still cover the public tree exactly once) — useful whether you read them yourself or hand them to a sub-agent.
3. **Repair** — for each `NEEDS_FIX` file, apply the cheapest fix:

   | Finding shape                                                      | Repair                                                                                          |
   | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
   | Pure SVG icon residue, missing `IconProps`, missing default export | `bun scripts/semantic-finalize.ts --recipe icon <file>`                                         |
   | Button/control missing `Props` + `forwardRef` + lookup-table shape | `bun scripts/semantic-finalize.ts --recipe button <file>`                                       |
   | Mechanical fallback names (`buttonValue3`, `contextParam14`)       | Propose semantic names, update `_full/ledger.json` via `ledger.ts mark-done`, re-run `apply.ts` |
   | Missing TypeScript types on a non-recipe file                      | Hand-edit. Add `Props` interface, function signature annotations.                               |
   | Missing `forwardRef` / `displayName` on a DOM-wrapping component   | Hand-edit. Wrap render function; assign `Foo.displayName = "Foo"`.                              |
   | Prettier-check fails                                               | `bunx prettier --write <file>` (or `npx prettier --write`)                                      |
   | Leftover bundler residue (rare — the gate should catch it)         | Re-run `bun scripts/polish.ts` on the upstream `$WS/renamed.js`; re-promote                     |

4. **Re-read changed files only** — don't re-review what already passed (borderline cases can be stochastic; passing once is the contract). If a finding repeats and you cannot make progress, report the blocker; don't label the file complete.

When a sub-agent does the read, it returns one strict block per file (`=== FILE: <path> === / VERDICT: PASS` or `VERDICT: NEEDS_FIX / ISSUES: - <category>:<...>`) so the result can be machine-checked. Save replies under `<target-dir>/.deobfuscate-javascript/_stage-e/results/batch-XX.md` and run `bun <skill-dir>/scripts/verify-stage-e-results.ts <target-dir>` to confirm every indexed file has exactly one `PASS`. (Host self-review needs no results files; its record is the completion summary below.)

## No TODO-header fallback

There is no "ship with TODO" success path. A TODO header may live inside a checkpoint, but **deep-mode** public completion requires every delivered file to actually pass E1–E4. If a file is still flagged after multiple rewrites, the deep restoration is partial/blocked, not done — surface the per-file blocker list. (The default readable tier has no pass requirement — deliver the well-named readable file and note deep mode is available.)

## Completion record

Emit one summary block, and only when no file is blocked/partial:

```
Stage 3 acceptance complete.
  Files reviewed: 187
  Passed clean:   174
  Passed after rewrite: 13
  Blocked/partial: 0
```

For a full-restoration run, `promote-organized.ts` already set `manifest.stages.promoted = true` on each promoted chunk; for deep mode, also set each accepted app-feature file's `manifest.stages.finalized = true` in `_full/manifest.json`, then run the final target-level gate:

```bash
bun <skill-dir>/scripts/quality-gate.ts <target-dir>
```

That final run is required because Stage 3 acceptance proves the files you reviewed are good, but full/deep completion also requires the manifest/import-map coverage to be complete. The gate reads `_full/manifest.json` plus current and legacy import maps and fails app-feature chunks that remain missing, `oversized-local`, `mechanical-readable-restored`, `@ts-nocheck`, typed facades, empty `export {}`, boundary placeholders, or without finalized/acceptance evidence — **and** the stall checks (`full-restoration-checkpoints-not-drained` / `-organize-incomplete` / `-public-file-in-hash-dir`). Do not report completion from a `boundaries/` scan or `IMPORT_MAP.status === "done"` alone. The completion test is: this gate exits 0 · every reachable local chunk is `stages.promoted` (deep: + `stages.finalized`) · `ledger.ts frontier --stage promote` is empty. If any file is blocked/partial, report the findings and the rewrites still needed instead.

> In **deep mode**, shipping after `promote-final.ts` exits 0 _without the acceptance review_ is a fail mode at the same severity as skipping the D0 gate. Because the review is always runnable by the host agent, "no sub-agent available" is never a reason to skip it or declare the phase blocked.

## Caveats

- **The reviewer (host or sub-agent) issues verdicts only; it never edits.** All edits happen in the repair step, where rewrite history and provenance are tracked.
- **Don't re-review files that already passed.**
- **A failing `bunx prettier --check` is itself a `NEEDS_FIX` (formatting)** — it should not leak past Phase B, but if it does, fix and re-read.
- **Single-file _deep_ restorations also run the review** — the same E1–E4 pass applies to one delivered `.tsx` exactly as to a 200-file `_full/` graph. (A single-file _default_-tier restore uses the optional naming-only self-review instead.)
