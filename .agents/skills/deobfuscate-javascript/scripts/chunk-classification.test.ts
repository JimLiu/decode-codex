import { describe, expect, test } from "bun:test";
import * as fs from "node:fs";
import * as path from "node:path";
import {
  classifyBoundary,
  classifyVendorDataChunk,
  isLikelyAppChunk,
  JS_GLOBALS,
} from "./chunk-classification.ts";

const ASSETS = path.join(
  import.meta.dir,
  "..",
  "..",
  "..",
  "..",
  "ref",
  "webview",
  "assets",
);
function findChunk(stem: string): string | null {
  if (!fs.existsSync(ASSETS)) return null;
  const f = fs
    .readdirSync(ASSETS)
    .find((n) => n.startsWith(`${stem}-`) && n.endsWith(".js"));
  return f ? path.join(ASSETS, f) : null;
}

describe("classifyVendorDataChunk", () => {
  test("recognises a Shiki TextMate grammar by fingerprint", () => {
    const grammar = `export default {displayName:"Rust",name:"rust",scopeName:"source.rust",patterns:[{include:"#comments"}],repository:{comments:{patterns:[]}}};`;
    const m = classifyVendorDataChunk("rust-A1b2C3d4", grammar);
    expect(m).not.toBeNull();
    expect(m!.reason).toBe("shiki-grammar");
    expect(m!.package).toBe("@shikijs/langs");
    expect(m!.specifier).toBe("@shikijs/langs/rust");
  });

  test("recognises a Shiki/VSCode theme by tokenColors", () => {
    const theme = `export default {name:"nord",type:"dark",colors:{"editor.background":"#2e3440"},tokenColors:[{scope:"comment",settings:{foreground:"#616e88"}}]};`;
    const m = classifyVendorDataChunk("nord-Ee55Ff66", theme);
    expect(m).not.toBeNull();
    expect(m!.reason).toBe("shiki-theme");
    expect(m!.specifier).toBe("@shikijs/themes/nord");
  });

  test("recognises a theme by colors + type when tokenColors is absent", () => {
    const theme = `export default {name:"github-dark",type:"dark",colors:{"editor.foreground":"#c9d1d9"}};`;
    const m = classifyVendorDataChunk("github-dark-Gg77Hh88", theme);
    expect(m).not.toBeNull();
    expect(m!.reason).toBe("shiki-theme");
    expect(m!.specifier).toBe("@shikijs/themes/github-dark");
  });

  test("recognises a known standalone data lib by stem", () => {
    const m = classifyVendorDataChunk(
      "3Dmol-Ck5hjXCs",
      "export const GLViewer=function(){};",
    );
    expect(m).not.toBeNull();
    expect(m!.reason).toBe("data-lib");
    expect(m!.specifier).toBe("3dmol");
  });

  test("does NOT match real app code", () => {
    const app = `import {useState} from "react";export function Composer(props){const [text,setText]=useState("");return <div>{text}</div>;}`;
    expect(classifyVendorDataChunk("composer-Ii99Jj00", app)).toBeNull();
    // a util that merely mentions "colors" but has no theme/grammar shape
    expect(
      classifyVendorDataChunk(
        "palette-Kk11Ll22",
        "export const colors=['red'];",
      ),
    ).toBeNull();
  });

  test("does NOT treat app-initial route chunks with Shiki keys as vendor data", () => {
    const appChunk = [
      `import { jsx } from "./jsx-runtime-AbCdEf12.js";`,
      `const embeddedGrammarPreview = { scopeName: "source.diff", patterns: [], repository: {} };`,
      `export function AppRoute() { return jsx("div", { children: embeddedGrammarPreview.scopeName }); }`,
    ].join("\n");

    expect(
      classifyVendorDataChunk(
        "app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~dv5z3ftk-BhBbJNnt",
        appChunk,
      ),
    ).toBeNull();
  });
});

describe("classifyVendorDataChunk on the real bundle (skips if ref/ absent)", () => {
  // Guards the JSON-quoted-key fingerprint against regression. The real chunks
  // ship as `JSON.parse(`{"scopeName":...}`)`, so the keys are quoted — a bare
  // `scopeName:` regex (the first cut) silently missed all 200+ grammars.
  test("detects real Shiki grammars + themes, leaves app chunks alone", () => {
    const cases: Array<[string, "shiki-grammar" | "shiki-theme" | null]> = [
      ["rust", "shiki-grammar"],
      ["swift", "shiki-grammar"],
      ["nord", "shiki-theme"],
      ["github-dark", "shiki-theme"],
      ["app-shell", null],
      ["composer", null],
    ];
    let checked = 0;
    for (const [stem, expected] of cases) {
      const file = findChunk(stem);
      if (!file) continue; // ref/ not present on this machine
      checked++;
      const bn = path.basename(file, ".js");
      const m = classifyVendorDataChunk(bn, fs.readFileSync(file, "utf-8"));
      expect(m?.reason ?? null).toBe(expected);
    }
    expect(checked).toBeGreaterThanOrEqual(0); // a no-op when ref/ is absent
  });
});

describe("JS_GLOBALS", () => {
  test("covers the builtins the renamer must dodge", () => {
    for (const g of ["Array", "Object", "Map", "Set", "Promise", "Date"]) {
      expect(JS_GLOBALS.has(g)).toBe(true);
    }
    expect(JS_GLOBALS.has("composer")).toBe(false);
  });
});

describe("isLikelyAppChunk (unchanged behaviour)", () => {
  test("still treats app prefixes as app and vendor prefixes as not", () => {
    expect(isLikelyAppChunk("composer-AbCdEf12")).toBe(true);
    expect(
      isLikelyAppChunk(
        "app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~dv5z3ftk-BhBbJNnt",
      ),
    ).toBe(true);
    expect(isLikelyAppChunk("app-scope-AbCdEf12")).toBe(false);
  });
});

describe("classifyBoundary", () => {
  test("a recorded npm vendor → vendor-npm with a suggested specifier", () => {
    expect(classifyBoundary("isEqual-XX", { vendor: "lodash" })).toEqual({
      kind: "vendor-npm",
      specifier: "lodash",
    });
    expect(classifyBoundary("lib-XX", { vendor: "formatjs" }).specifier).toBe(
      "react-intl",
    );
    expect(classifyBoundary("jotai-react-XX", { vendor: "jotai" })).toEqual({
      kind: "vendor-npm",
      specifier: "jotai",
    });
    expect(classifyBoundary("react-is-XX", { vendor: "react-is" })).toEqual({
      kind: "vendor-npm",
      specifier: "react-is",
    });
    expect(
      classifyBoundary("react-colorful-XX", { vendor: "react-colorful" }),
    ).toEqual({
      kind: "vendor-npm",
      specifier: "react-colorful",
    });
    expect(classifyBoundary("dist-XX", { vendor: "cmdk" })).toEqual({
      kind: "vendor-npm",
      specifier: "cmdk",
    });
    expect(
      classifyBoundary("esm-XX", { vendor: "tanstack-react-form" }),
    ).toEqual({
      kind: "vendor-npm",
      specifier: "@tanstack/react-form",
    });
    expect(
      classifyBoundary("browser-XX", {
        vendor: "@lottiefiles/dotlottie-react",
      }),
    ).toEqual({
      kind: "vendor-npm",
      specifier: "@lottiefiles/dotlottie-react",
    });
    expect(classifyBoundary("dayjs-XX", { vendor: "dayjs" })).toEqual({
      kind: "vendor-npm",
      specifier: "dayjs",
    });
    expect(
      classifyBoundary("with-selector-XX", {
        vendor: "use-sync-external-store",
      }),
    ).toEqual({
      kind: "vendor-npm",
      specifier: "use-sync-external-store/shim/with-selector",
    });
  });

  test("the literal runtime marker → vendor-runtime", () => {
    expect(classifyBoundary("app-scope-XX", { vendor: "runtime" }).kind).toBe(
      "vendor-runtime",
    );
    expect(classifyBoundary("vscode-api-XX", {}).kind).toBe("vendor-runtime");
  });

  test("radix chunks are vendor-npm even without a vendor field", () => {
    expect(
      classifyBoundary("dist-XX", { note: "bundled Radix menu" }).kind,
    ).toBe("vendor-npm");
  });
});
