# Worked examples

Nine end-to-end runs of the pipeline against representative inputs, from a 5 KB minified file all the way to a React-Compiler-output `Button` with cache scaffolding. Each example references the relevant workflow + stage docs — read those for step-level detail, then come back here for a concrete trace.

These traces show the **deep path** end-to-end (typed `.tsx` + Stage 3 acceptance reviewer-LOOP). The **default "readable restore" tier** stops earlier: Stage 1 (only if obfuscated) → Stage 2 rename → reading-aid polish (`polish.ts --rename --fast`) → format → **stage in `$WS`, organize, then promote** into `restored/` with a semantic filename + provenance, with naming quality as the only hard bar (never deliver raw script output straight into `restored/`). Treat the typed-`.tsx` and reviewer-LOOP steps below as deep mode.

← Back to [SKILL.md](../SKILL.md).

---

## Example 1: small minified file

**User:** "humanify this file" *(attaches a 5 KB minified script)*

1. `bun scripts/detect.ts user.min.js` → no Stage 1 techniques.
2. `bun scripts/sourcemap-check.ts user.min.js` → ✗ no sourcemap. Continue.
3. Set up workspace: `WS=<target-dir>/.deobfuscate-javascript/user.min && mkdir -p "$WS" && cp user.min.js "$WS/original.js"`.
4. `bun scripts/extract.ts "$WS/original.js" --out "$WS/symbols.json"`.
5. Read `$WS/symbols.json`, decide names, `Write` `$WS/renames.json`.
6. `bun scripts/apply.ts "$WS/original.js" "$WS/renames.json" --out "$WS/renamed.js"`.
7. Host-agent rewrite `$WS/renamed.js` into a semantic public file, pre-filter it, and run the Stage 3 acceptance review — the host agent reads it end-to-end against the quality bar, no sub-agent required. *(Default tier stops at the readable draft after `--fast` polish + naming; the semantic-rewrite + acceptance-review steps here are deep mode.)*
8. Report the accepted file and what it does.

Workflow: [small-minified.md](../workflows/small-minified.md).

## Example 2: webpack bundle, single module of interest

**User:** "Deobfuscate module 3658 from `og/bundle.js`, call it `treeGenerator`"

1. `bun scripts/sourcemap-check.ts og/bundle.js`. None.
2. Set up workspace: `WS=modules/.deobfuscate-javascript/bundle && mkdir -p "$WS" && cp og/bundle.js "$WS/original.js"`.
3. `npx webcrack "$WS/original.js" -o "$WS/webcracked/"` (one-time).
4. `bun scripts/extract.ts "$WS/webcracked/modules/3658.js" --out "$WS/symbols.json"`.
5. Decide names with a `treeGenerator` bent (top-level function = `treeGenerator`; helpers below that). Write `$WS/renames.json`.
6. `bun scripts/apply.ts "$WS/webcracked/modules/3658.js" "$WS/renames.json" --out modules/module_3658_treeGenerator.js`.
7. Report path back to user.

Workflow: [webpack-bundle.md](../workflows/webpack-bundle.md).

## Example 3: file has a sourcemap

**User:** "Make this readable" *(attaches `app.bundle.js`)*

1. `bun scripts/sourcemap-check.ts app.bundle.js` → ✓ found `app.bundle.js.map` with 47 original sources including `src/App.tsx`, `src/api/client.ts`, …
2. Stop. Tell the user: *"A sourcemap is available — recovering the original sources is lossless and much better than renaming. Want me to extract them with `source-map-explorer` or hand-decode the `sourcesContent` array?"*

## Example 4: file is already readable

**User:** "rename variables in this file" *(attaches a hand-written `utils.js` with names like `parseQueryString`, `cacheKey`)*

Don't run the pipeline. Tell the user the file already has meaningful names and ask what specifically they want changed.

## Example 5: composite Obfuscator.IO output (full Stage 1 + Stage 2 rename)

**User:** "I downloaded this from a malware sample, can you make sense of it?" *(attaches obfuscator.io output with `_0x...` arrays, hex strings, dead code, opaque predicates)*

1. Set up workspace: `WS=<target-dir>/.deobfuscate-javascript/sample && mkdir -p "$WS" && cp sample.js "$WS/original.js"`.
2. `bun scripts/detect.ts "$WS/original.js"` → reports `string-array` (0.85), `hex-encoding` (0.8), `opaque-predicates` (0.6), `dead-code-injection` (0.5).
3. `bun scripts/deobfuscate.ts "$WS/original.js" --out "$WS/stageA.js" --report "$WS/stageA.json"`. Read the report — confirm `string-array.referencesReplaced > 0`, `decode-strings.fromCharCode > 0`, `simplify.deadIfsRemoved > 0`, `control-flow-report` shows 0 flatteners. If there are flatteners, rewrite them now (see Example 6).
4. `Read $WS/stageA.js` — verify it looks like normal-shaped JS (no `_0x`, no hex escapes).
5. `bun scripts/extract.ts "$WS/stageA.js" --out "$WS/symbols.json"`.
6. Write `$WS/renames.json`.
7. `bun scripts/apply.ts "$WS/stageA.js" "$WS/renames.json" --out "$WS/renamed.js"`.
8. Host-agent rewrite `$WS/renamed.js` into a semantic public file, pre-filter it, and run the Stage 3 acceptance review — the host agent reads it end-to-end against the quality bar, no sub-agent required. *(Default tier stops at the readable draft after `--fast` polish + naming; the semantic-rewrite + acceptance-review steps here are deep mode.)*

Workflow: [full-obfuscation.md](../workflows/full-obfuscation.md).

## Example 6: control-flow flattening — read the report, manually rewrite

**User:** "this function is unreadable" *(attaches code containing `while(!![]){switch(_0x123){case 0: ...}}`)*

1. Set up workspace (`WS=<target-dir>/.deobfuscate-javascript/$(basename input.js .js)`, `mkdir -p "$WS"`, `cp input.js "$WS/original.js"`).
2. `bun scripts/deobfuscate.ts "$WS/original.js" --stop-after control-flow-report --report "$WS/control-flow-report.json"` (or run the report script standalone after Stage 1 finishes).
3. Read `$WS/control-flow-report.json`. For each `flatteners[i]`:
   - Note `dispatchVariable` (e.g. `_0x4f2`), `caseLabels` (the dispatch values in declaration order), and `containingFunction`.
4. Open the source at the reported `loc.start..loc.end`. For each case, identify what it does and what value it assigns to `dispatchVariable` next.
5. Hand-rewrite as a normal sequence: take the initial value, follow `case → next-state → next case`, inline statements. Skip cases that aren't reachable from the initial state.
6. Re-run `scripts/simplify.ts` on the rewritten code to clean up.

This is judgment work; tooling lays out the dispatch graph but you stitch it together.

## Example 7: huge bundle — plan-then-batch with a checklist

**User:** "deobfuscate this 1 MB main bundle" *(attaches a vite-built `app-main.js`)*

1. Set up workspace: `WS=<target-dir>/.deobfuscate-javascript/app-main && mkdir -p "$WS" && cp app-main.js "$WS/original.js"`.
2. `bun scripts/sourcemap-check.ts "$WS/original.js"`. None (or stop and recover from `.map` if present).
3. `bun scripts/detect.ts "$WS/original.js"`. If Stage 1 techniques exist, run `deobfuscate.ts` first; otherwise skip to step 4.
4. **Filtered extract** — a full extract of 9 000 symbols would be ~50 MB JSON; trim aggressively:
   ```bash
   bun scripts/extract.ts "$WS/original.js" --out "$WS/symbols.json" \
     --only-cryptic --min-refs 3 --top 200 --max-same-scope 5 --context-size 300
   ```
   Reports `extracted 200 symbol(s) (9474 filtered out of 9674) → $WS/symbols.json` (~100 KB).
5. **Plan**:
   ```bash
   bun scripts/plan.ts "$WS/symbols.json" --out-dir "$WS/plan" --input "$WS/original.js" --batch-size 50
   ```
   Generates `$WS/plan/CHECKLIST.md` with ~4 batches and `batch-0.json` … `batch-3.json`.
6. `Read $WS/plan/CHECKLIST.md` to see the overview. Work batches in order:
   - `Read $WS/plan/batch-0.json` → decide 50 names → `Write $WS/plan/renames-0.json`.
   - `Edit $WS/plan/CHECKLIST.md` to flip `- [ ] **Batch 0**` → `- [x] **Batch 0**`.
   - Repeat for batch 1, 2, 3.
7. **Merge + apply**:
   ```bash
   cat $WS/plan/renames-*.json | jq -s 'add' > "$WS/plan/renames.json"
   bun scripts/apply.ts "$WS/original.js" "$WS/plan/renames.json" --out "$WS/renamed.js"
   # "$WS/renamed.js" is a checkpoint, not the final deliverable.
   ```
8. Host-agent rewrite the checkpoint into semantic public files, pre-filter, and run Stage 3. Top-level concepts should now be readable; nested scratch bindings can remain only when the reviewer accepts them as intentionally local and harmless. *(Default tier stops at the readable checkpoint after `--fast` polish + naming; the semantic-rewrite + reviewer-LOOP steps here are deep mode.)*

You can pause after step 7 with just batches 0–2 done — the top-level Program-scope renames usually give the biggest readability win, and you can resume any time by reading the checklist's unchecked boxes. Do not call it complete until Stage 3 returns `PASS`.

Workflow: [huge-single-file.md](../workflows/huge-single-file.md).

## Example 8: React/Vite icon chunk — rename + polish to recover JSX

**User:** *attaches `clock-BdccdK2N.js` from a Vite `dist/assets/` folder, asks "make this readable"*

Input (671 bytes, Rollup-shaped, JSX compiled to `jsx-runtime`):

```js
import { s as e } from "./chunk-Bj-mKKzh.js";
import { n as t, t as n } from "./jsx-runtime-CiQ1k8xo.js";
e(t());
var r = n(),
  i = (e) =>
    (0, r.jsx)(`svg`, {
      width: 18, height: 18, viewBox: `0 0 18 18`, fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      ...e,
      children: (0, r.jsx)(`path`, { fill: `currentColor`, d: `M9 1.5a7.5 …` }),
    });
export { i as t };
//# sourceMappingURL=clock-BdccdK2N.js.map
```

1. Set up workspace: `INPUT=ref/.../clock-BdccdK2N.js && WS=<target-dir>/.deobfuscate-javascript/$(basename "$INPUT" .js) && mkdir -p "$WS" && cp "$INPUT" "$WS/original.js"`.
2. `bun scripts/sourcemap-check.ts "$WS/original.js"`. The URL is referenced but the `.map` file is missing — no recovery possible, proceed with rename.
3. `bun scripts/detect.ts "$WS/original.js"` → no obfuscation. Skip Stage 1.
4. `bun scripts/extract.ts "$WS/original.js" --out "$WS/symbols.json"`. Six symbols: `e@14, t@60, n@68, r@118, i@129, e@134`.
5. Read the context. Decide names — note that `i` is the export's local binding; give it the name you want to appear in the final `.tsx`. Write `$WS/renames.json`:
   ```json
   {
     "e@14": "toESM",
     "t@60": "requireReact",
     "n@68": "requireJsxRuntime",
     "r@118": "jsxRuntime",
     "i@129": "ClockIcon",
     "e@134": "props"
   }
   ```
6. `bun scripts/apply.ts "$WS/original.js" "$WS/renames.json" --out "$WS/renamed.js"`.
7. **Stage 2 polish** — recover JSX, drop the bundler artifacts, lift the export, stamp the provenance header:
   ```bash
   bun scripts/polish.ts "$WS/renamed.js" \
     --source "$INPUT" \
     --description "Clock icon — single-path SVG with spread-through SVG attributes." \
     --out "$WS/polished.tsx" \
     --report "$WS/polish-report.json"
   ```
   The stderr report shows `strip-react-compiler: 0 conds (none present)`, `simplify: 2 (0,fn) stripped, 7 tpl→str`, `jsx-runtime: 2 calls converted`, `inline-defaults: 0 defaults inlined (none present)`, `normalize-exports: 1 inlined`. (Polish defaults to `--prefer local`, so the local `ClockIcon` binding wins over the bundle alias `t`. The `--source` and `--description` flags stamp a two-line provenance header at the top of the output.)
8. `npx prettier --write "$WS/polished.tsx"` for multi-line JSX formatting.
9. **Stage 3 rewrite — manual finishing touches** *(deep mode — the default tier stops at the readable draft above; the typed `.tsx` steps below are deep mode)* (see [Stage 3](../stages/stage-3-finalize.md) for the full guidance). Write the cleaned-up file to `<target-dir>/clock.tsx` (alongside `$WS/`, not inside it):
   - Delete the now-dead `toESM(requireReact())` line and `var jsxRuntime = requireJsxRuntime();` (their only remaining reference disappeared when `jsxRuntime.jsx` became `<svg>`).
   - Delete the dangling `//# sourceMappingURL=…` comment.
   - The chunk-import `import { s as toESM } from "./chunk-Bj-mKKzh.js"` was dead — drop it. (If you'd kept it, keep the path exactly: `./chunk-Bj-mKKzh.js`. Don't pretty-rename to `./chunk.js`.)
   - Add the TypeScript type annotation: `export const ClockIcon: React.FC<React.SVGProps<SVGSVGElement>> = props => …`.

Resulting `clock.tsx`:

```tsx
export const ClockIcon: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M9 1.5a7.5 …" />
  </svg>
);
```

The polish pipeline handled the mechanical parts (`(0, r.jsx)("svg", {...props})` → `<svg {...props}>`, backtick string literals → double-quoted, `export { ClockIcon as t }` → `export const ClockIcon = …`). The remaining work — picking the type, deleting dead Vite-shim lines, dropping the sourcemap comment — is one-shot agent judgment that the skill deliberately doesn't automate.

Workflow: [react-vite.md](../workflows/react-vite.md).

## Example 9: React-Compiler-output Button — strip cache, inline defaults, recover JSX

**User:** *attaches a Vite/Rollup chunk for a `Button` component compiled with the React Compiler memoizer (`let cache = react.c(25); cache[0] === props ? ((children = cache[1]), ...) : (({ children, className, ... } = props), (cache[0] = props), …);`), asks "make this readable as TSX"*

1. Set up workspace: `INPUT=ref/.../button-XXXX.js && WS=<target-dir>/.deobfuscate-javascript/$(basename "$INPUT" .js) && mkdir -p "$WS" && cp "$INPUT" "$WS/original.js"`.
2. `bun scripts/sourcemap-check.ts "$WS/original.js"`. The `.map` is missing — proceed with rename.
3. `bun scripts/detect.ts "$WS/original.js"` → no obfuscation. Skip Stage 1.
4. `bun scripts/extract.ts "$WS/original.js" --out "$WS/symbols.json"` → ~30 symbols (function locals, top-level lookup tables, imports).
5. Read context. The destructured props are `f, p, m, h, g, _, d, l, u`; the resolved variables are `v, y, b, x, S, C, w, T, E, D, O, k, A`. Pick meaningful names — for the destructured prop and its resolved value, give the *destructured* one the prop name (e.g. `uniform`) and the resolved one a longer name (e.g. `isUniform`) so inline-defaults can collapse them. Write `$WS/renames.json`.
6. `bun scripts/apply.ts "$WS/original.js" "$WS/renames.json" --out "$WS/renamed.js"`.
7. **Stage 2 polish** — strip the cache, simplify, recover JSX, inline defaults, lift the export, stamp the two-line provenance header:
   ```bash
   bun scripts/polish.ts "$WS/renamed.js" \
     --source "$INPUT" \
     --description "Semantic button component: named variants, typed props, and direct JSX." \
     --out "$WS/polished.tsx" \
     --report "$WS/polish-report.json"
   ```
   The stderr report shows `strip-react-compiler: 4 conds, 1 cache vars, 2 merged, 1 unused`, `simplify: 2p, 8 folded, 2 (0,fn), 34 tpl→str, 8 short, 1 bool-obj`, `jsx-runtime: 2 calls`, `inline-defaults: 1 merged, 6 defaults, 6 aliases`, `normalize-exports: 1 inlined`. The output begins with both header lines.
8. `npx prettier --write "$WS/polished.tsx"` for multi-line JSX formatting.
9. **Stage 3 rewrite — manual finishing touches** *(deep mode — the default tier stops at the readable draft above; the typed `.tsx` steps below are deep mode)* (see [Stage 3](../stages/stage-3-finalize.md) for the full guidance and recipe). Write the cleaned-up file to `<target-dir>/button.tsx`:
   - **D2 imports** — separate type imports (`import type { ButtonHTMLAttributes, ForwardedRef } from "react"`) from value imports (`import { forwardRef } from "react"`). Resolve `clsx` to its npm package: `import { t as clsx } from "./clsx-DDuZWq6Y.js"` → `import clsx from "clsx"`. Leave the `Spinner` import path untouched: `import { t as Spinner } from "./spinner-D37df5tU.js"` (project-local; the hash is the trace back to the original chunk).
   - **D3 dead stubs** — delete `var react = requireReact()`, `var jsxRuntime = requireJsxRuntime()`, and their feeding `import { … } from "./jsx-runtime-XXXX.js"` / `import { … } from "./setting-storage-XXXX.js"` lines (the cache strip ate `react.c(N)`; the JSX un-transform ate `jsxRuntime.jsx`).
   - **D4 sourcemap** — drop the dangling `//# sourceMappingURL=…` comment.
   - **D5 TypeScript** — apply the full recipe:
     1. Rename lookup tables: `radiusBySize` → `buttonRadiusClassNames`, `colorClasses` → `buttonColorClassNames`, `sizeClasses` → `buttonSizeClassNames`. Tag each `as const`.
     2. Export `keyof typeof` aliases: `export type ButtonColor = keyof typeof buttonColorClassNames`, same for `ButtonSize`.
     3. Define `interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>` with the four optional variant props (`color`, `loading`, `size`, `uniform`).
     4. Wrap in `forwardRef`: write `function ButtonRender({…}: ButtonProps, ref: ForwardedRef<HTMLButtonElement>)` and `export const Button = forwardRef<HTMLButtonElement, ButtonProps>(ButtonRender)`. Add `Button.displayName = "Button"` and `export default Button`.
     5. Rename function-locals for clarity: `mergedClassName` → `buttonClassName`, `isInteractionDisabled` → `isDisabled`, `spinnerElement` → `loadingIndicator`, `rest` → `buttonProps`.
     6. Swap `loading && <Spinner …/>` for `loading ? <Spinner …/> : null` (stricter type, explicit empty case).

After polish + Stage 3 rewrite, the file looks like idiomatic hand-authored React (~85 lines from ~150 lines of cache scaffolding):

```tsx
// Restored from ref/webview/assets/button-bq66r8jD.js
// Semantic button component: named variants, typed props, and direct JSX.

import type { ButtonHTMLAttributes, ForwardedRef } from "react"
import { forwardRef } from "react"
import clsx from "clsx"
import { t as Spinner } from "./spinner-D37df5tU.js"

export const buttonRadiusClassNames = {
  default: "rounded-full",
  icon: "rounded-full electron:rounded-md",
  // …
} as const

export const buttonColorClassNames = {
  danger: "bg-token-charts-red/10 …",
  primary: "bg-token-foreground …",
  // …
} as const

export const buttonSizeClassNames = {
  default: "px-2 py-0.5 text-sm leading-[18px]",
  large: "px-5 py-2 text-base leading-[18px]",
  // …
} as const

export type ButtonColor = keyof typeof buttonColorClassNames
export type ButtonSize = keyof typeof buttonSizeClassNames

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor
  loading?: boolean
  size?: ButtonSize
  uniform?: boolean
}

function ButtonRender(
  {
    children,
    className,
    color = "primary",
    disabled = false,
    loading = false,
    size = "default",
    type = "button",
    uniform = false,
    ...buttonProps
  }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  const buttonClassName = clsx(
    "border-token-border user-select-none no-drag …",
    buttonRadiusClassNames[size],
    buttonColorClassNames[color],
    buttonSizeClassNames[size],
    uniform && "aspect-square items-center justify-center !px-0",
    className,
  )
  const isDisabled = disabled || loading
  const loadingIndicator = loading ? <Spinner className="icon-xxs" /> : null

  return (
    <button ref={ref} type={type} className={buttonClassName} disabled={isDisabled} {...buttonProps}>
      {loadingIndicator}
      {children}
    </button>
  )
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(ButtonRender)
Button.displayName = "Button"

export default Button
```

The polish pipeline turned ~150 lines of cache scaffolding + 13 manually-resolved defaults + jsx-runtime calls into the structure above. Stage 3 rewrite layered on the TypeScript types, the `forwardRef` wrapper, the semantic renames, and the dead-import removal — none of which can be automated reliably, all of which are one-shot judgment calls when you understand what the component is.

Workflow: [react-vite.md](../workflows/react-vite.md).
