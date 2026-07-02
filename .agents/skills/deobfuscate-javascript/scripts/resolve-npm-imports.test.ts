import { describe, expect, test } from "bun:test";
import * as path from "node:path";
import { spawnSync } from "node:child_process";
import {
  extractChunkBasename,
  resolveNpmImports,
} from "./resolve-npm-imports.ts";

const SCRIPT = path.join(import.meta.dir, "resolve-npm-imports.ts");

function runCLI(
  args: string[],
  input?: string,
): { stdout: string; stderr: string; code: number } {
  const result = spawnSync("bun", [SCRIPT, ...args], {
    input,
    encoding: "utf-8",
  });
  return {
    stdout: result.stdout ?? "",
    stderr: result.stderr ?? "",
    code: result.status ?? 0,
  };
}

function normalize(code: string): string {
  return code.replace(/\s+/g, " ").trim();
}

describe("extractChunkBasename", () => {
  test("strips hash and extension", () => {
    expect(extractChunkBasename("../clsx-DDuZWq6Y.js")).toBe("clsx");
    expect(extractChunkBasename("./button-bq66r8jD.js")).toBe("button");
    expect(extractChunkBasename("./jsx-runtime-CiQ1k8xo.js")).toBe(
      "jsx-runtime",
    );
  });

  test("handles no-hash and bare extensions", () => {
    expect(extractChunkBasename("./shared")).toBe("shared");
    expect(extractChunkBasename("./shared.ts")).toBe("shared");
    expect(extractChunkBasename("./shared.tsx")).toBe("shared");
  });

  test("returns null for bare specifiers", () => {
    expect(extractChunkBasename("react")).toBe(null);
    expect(extractChunkBasename("@dnd-kit/core")).toBe(null);
  });

  test("preserves dotted chunk names", () => {
    expect(extractChunkBasename("../core.esm-By0M5Loj.js")).toBe("core.esm");
    expect(extractChunkBasename("../sortable.esm-DfydkXy3.js")).toBe(
      "sortable.esm",
    );
  });
});

describe("resolveNpmImports (chunk-name based)", () => {
  test("rewrites clsx chunk to bare specifier", () => {
    const src = `import { t as clsx } from "../clsx-DDuZWq6Y.js";\nclsx("a", "b");`;
    const out = resolveNpmImports(src);
    const n = normalize(out.code);
    expect(n).toContain('import clsx from "clsx"');
    expect(n).not.toContain("clsx-DDuZWq6Y");
    expect(out.stats.specifiersResolved).toBe(1);
  });

  test("rewrites @dnd-kit/core chunk with multiple named", () => {
    const src = `
      import { a as closestCenter, i as PointerSensor, t as DndContext } from "../core.esm-By0M5Loj.js";
      DndContext;
    `;
    const out = resolveNpmImports(src);
    const n = normalize(out.code);
    expect(n).toContain('from "@dnd-kit/core"');
    expect(n).toContain("closestCenter");
    expect(n).toContain("PointerSensor");
    expect(n).toContain("DndContext");
    expect(out.stats.specifiersResolved).toBe(3);
  });

  test("rewrites React companion runtime chunks to npm packages", () => {
    const src = `
      import { isFragment } from "../react-is-AbCdEf12.js";
      import { useSyncExternalStoreWithSelector } from "../use-sync-external-store-with-selector-IjKlMn34.js";
      isFragment; useSyncExternalStoreWithSelector;
    `;
    const out = resolveNpmImports(src);
    const n = normalize(out.code);
    expect(n).toContain('from "react-is"');
    expect(n).toContain('from "use-sync-external-store/shim/with-selector"');
    expect(n).not.toContain("react-is-AbCdEf12");
    expect(n).not.toContain("use-sync-external-store-with-selector-IjKlMn34");
    expect(out.stats.specifiersResolved).toBe(2);
  });

  test("rewrites Jotai chunk imports to the npm package", () => {
    const src = `
      import { u as useAtomValue, s as useSetAtom } from "../jotai-react-DpDsdUHx.js";
      useAtomValue; useSetAtom;
    `;
    const out = resolveNpmImports(src);
    const n = normalize(out.code);
    expect(n).toContain('from "jotai"');
    expect(n).toContain("useAtomValue");
    expect(n).toContain("useSetAtom");
    expect(n).not.toContain("jotai-react-DpDsdUHx");
    expect(out.stats.specifiersResolved).toBe(2);
  });

  test("rewrites react-colorful chunk imports to the npm package", () => {
    const src = `
      import { t as HexColorPicker } from "../react-colorful-AbCdEf12.js";
      HexColorPicker;
    `;
    const out = resolveNpmImports(src);
    const n = normalize(out.code);
    expect(n).toContain('from "react-colorful"');
    expect(n).toContain("HexColorPicker");
    expect(n).not.toContain("react-colorful-AbCdEf12");
    expect(out.stats.specifiersResolved).toBe(1);
  });

  test("rewrites tslib chunk as named-only", () => {
    const src = `import { a as __assign, b as __rest } from "../tslib-X.js";`;
    const out = resolveNpmImports(src);
    const n = normalize(out.code);
    expect(n).toContain('from "tslib"');
    expect(n).toContain("__assign");
    expect(n).toContain("__rest");
  });

  test("rewrites Codex webview vendor chunks to package imports", () => {
    const src = `
      import { t as FuseAlias } from "../fuse-BODhnlb2.js";
      import { t as RoughAlias } from "../rough.esm-tT7A6vdj.js";
      import { t as CytoscapeAlias } from "../cytoscape.esm-EFcka3gR.js";
      FuseAlias; RoughAlias; CytoscapeAlias;
    `;
    const out = resolveNpmImports(src);
    const n = normalize(out.code);
    expect(n).toContain('import Fuse from "fuse.js"');
    expect(n).toContain('import rough from "roughjs"');
    expect(n).toContain('import cytoscape from "cytoscape"');
    expect(n).not.toContain("fuse-BODhnlb2");
    expect(n).not.toContain("rough.esm-tT7A6vdj");
    expect(n).not.toContain("cytoscape.esm-EFcka3gR");
    expect(out.stats.specifiersResolved).toBe(3);
  });
});

describe("resolveNpmImports (alias-based)", () => {
  test("rewrites _React shim to React default", () => {
    const src = `
      import { _React } from "./shared";
      _React.useState(false);
    `;
    const out = resolveNpmImports(src);
    const n = normalize(out.code);
    expect(n).toContain('import React from "react"');
    expect(n).toContain("React.useState(false)");
    expect(n).not.toContain("_React");
    expect(out.stats.specifiersResolved).toBe(1);
    expect(out.stats.referencesRenamed).toBeGreaterThan(0);
  });

  test("rewrites React named hooks", () => {
    const src = `
      import { useState, useEffect } from "./shared";
      useState(0);
      useEffect(() => {}, []);
    `;
    const out = resolveNpmImports(src);
    const n = normalize(out.code);
    expect(n).toContain('from "react"');
    expect(n).toContain("useState");
    expect(n).toContain("useEffect");
  });

  test("splits when shared has both npm and local exports", () => {
    const src = `
      import { _React, cssTemplate, useAppShellSlotRegistration } from "./shared";
      _React.memo(X);
      cssTemplate\`a\`;
      useAppShellSlotRegistration();
    `;
    const out = resolveNpmImports(src);
    const n = normalize(out.code);
    expect(n).toContain('import React from "react"');
    expect(n).toContain('from "./shared"');
    expect(n).toContain("cssTemplate");
    expect(n).toContain("useAppShellSlotRegistration");
    expect(out.stats.importsSplit).toBe(1);
  });
});

describe("resolveNpmImports (preservation)", () => {
  test("leaves project-local imports alone", () => {
    const src = `import { Header } from "./header";\nHeader();`;
    const out = resolveNpmImports(src);
    expect(out.code).toContain('from "./header"');
    expect(out.stats.specifiersResolved).toBe(0);
  });

  test("leaves chunks with unknown basename + unknown aliases alone", () => {
    const src = `import { a as foo, b as bar } from "../app-shell-state-XYZ.js";\nfoo;\nbar;`;
    const out = resolveNpmImports(src);
    expect(out.code).toContain('from "../app-shell-state-XYZ.js"');
    expect(out.stats.specifiersResolved).toBe(0);
  });

  test("idempotent: bare npm specifiers untouched", () => {
    const src = `import React from "react";\nimport { useState } from "react";\nReact;\nuseState;`;
    const first = resolveNpmImports(src);
    const second = resolveNpmImports(first.code);
    // After de-duplication, both Rs merge into a single import line.
    expect(normalize(first.code)).toContain(
      'import React, { useState } from "react"',
    );
    expect(normalize(second.code)).toContain(
      'import React, { useState } from "react"',
    );
  });
});

describe("resolveNpmImports (merging)", () => {
  test("merges duplicate package imports", () => {
    const src = `
      import { useState } from "./shared";
      import { useEffect } from "./shared";
      useState; useEffect;
    `;
    const out = resolveNpmImports(src);
    const n = normalize(out.code);
    // Should land as a single combined import.
    expect(n.match(/from "react"/g)?.length).toBe(1);
    expect(n).toContain("useState");
    expect(n).toContain("useEffect");
  });
});

describe("resolveNpmImports (CLI)", () => {
  test("reads stdin, writes stdout", () => {
    const res = runCLI(
      ["-"],
      `import { t as clsx } from "../clsx-X.js";\nclsx;`,
    );
    expect(res.code).toBe(0);
    expect(res.stdout).toContain('import clsx from "clsx"');
  });

  test("--no-chunk-lookup leaves chunk-name matches alone", () => {
    const res = runCLI(
      ["-", "--no-chunk-lookup"],
      `import { t as clsx } from "../clsx-X.js";\nclsx;`,
    );
    expect(res.code).toBe(0);
    // Alias-based fallback still fires because `clsx` is in ALIAS_REGISTRY.
    expect(res.stdout).toContain('import clsx from "clsx"');
  });

  test("--no-chunk-lookup --no-alias-lookup is a no-op", () => {
    const res = runCLI(
      ["-", "--no-chunk-lookup", "--no-alias-lookup"],
      `import { t as clsx } from "../clsx-X.js";\nclsx;`,
    );
    expect(res.code).toBe(0);
    expect(res.stdout).toContain('"../clsx-X.js"');
  });
});
