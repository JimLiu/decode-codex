import { afterEach, describe, expect, test } from "bun:test";
import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import {
  buildImportMappings,
  ensureProvenanceHeader,
  inferManualExportMap,
  promoteOrganized,
  relativeImport,
} from "./promote-organized.ts";
import type { ManifestFile } from "./build-import-graph.ts";

const tmpRoots: string[] = [];
function makeTmpRoot(): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "promote-org-"));
  tmpRoots.push(dir);
  return dir;
}
afterEach(() => {
  while (tmpRoots.length > 0) {
    fs.rmSync(tmpRoots.pop()!, { recursive: true, force: true });
  }
});

const ICON_CHECKPOINT = `// Restored from ref/webview/assets/download-Gh1jKl34.js
export const DownloadIcon = (props) => (
  <svg width={16} height={16} viewBox="0 0 16 16" {...props}>
    <path d="M1 1h14v14H1z" />
  </svg>
);
`;

const UTIL_CHECKPOINT = `// Restored from ref/webview/assets/format-thing-AbCdEf12.js
export function formatThing(value: string): string {
  return value.trim();
}
`;

const PANEL_CANDIDATE = `// Restored from ref/webview/assets/panel-Mn5oPq78.js
import { formatThing } from "./format-thing-AbCdEf12.js";

interface PanelProps {
  title: string;
}

export function Panel(props: PanelProps) {
  return formatThing(props.title);
}
`;

// A mechanical checkpoint that must fail the gate (untyped component props).
const JUNK_CHECKPOINT = `export function Junk(props) {
  return props.x;
}
`;

function org(
  domain: string,
  semanticPath: string,
  recipe: ManifestFile["organization"]["recipe"],
  classification: ManifestFile["organization"]["classification"],
): ManifestFile["organization"] {
  return {
    domain,
    semanticPath,
    recipe,
    classification,
    source: "heuristic",
    decidedAt: "2026-06-24T00:00:00.000Z",
  };
}

function setupTarget(): string {
  const target = makeTmpRoot();
  const fullDir = path.join(target, ".deobfuscate-javascript", "_full");
  fs.mkdirSync(path.join(fullDir, "checkpoints"), { recursive: true });
  fs.mkdirSync(path.join(fullDir, "files", "panel-Mn5oPq78"), {
    recursive: true,
  });
  fs.mkdirSync(path.join(fullDir, "locks"), { recursive: true });

  fs.writeFileSync(
    path.join(fullDir, "checkpoints", "download-Gh1jKl34.tsx"),
    ICON_CHECKPOINT,
  );
  fs.writeFileSync(
    path.join(fullDir, "checkpoints", "format-thing-AbCdEf12.tsx"),
    UTIL_CHECKPOINT,
  );
  fs.writeFileSync(
    path.join(fullDir, "checkpoints", "junk-Rs9tUv01.tsx"),
    JUNK_CHECKPOINT,
  );
  fs.writeFileSync(
    path.join(fullDir, "files", "panel-Mn5oPq78", "candidate.tsx"),
    PANEL_CANDIDATE,
  );

  const file = (
    basename: string,
    depth: number,
    organization: ManifestFile["organization"],
    extra: Partial<ManifestFile> = {},
  ): ManifestFile => ({
    path: `ref/webview/assets/${basename}.js`,
    basename,
    kind: "local",
    depth,
    stages: { organized: true },
    organization,
    exports: [{ exported: "t", local: "e", kind: "named" }],
    owner: null,
    claimedAt: null,
    lastUpdated: null,
    ...extra,
  });

  const manifest = {
    version: 1 as const,
    entry: "panel-Mn5oPq78",
    rootDir: "ref/webview/assets",
    targetDir: target,
    createdAt: "2026-06-24T00:00:00.000Z",
    updatedAt: "2026-06-24T00:00:00.000Z",
    files: {
      "download-Gh1jKl34": file(
        "download-Gh1jKl34",
        1,
        org("icons", "icons/download-icon.tsx", "icon", "icon"),
      ),
      "format-thing-AbCdEf12": file(
        "format-thing-AbCdEf12",
        1,
        org("utils", "utils/format-thing.ts", "manual", "single-util"),
      ),
      "junk-Rs9tUv01": file(
        "junk-Rs9tUv01",
        1,
        org("utils", "utils/junk.ts", "manual", "single-util"),
      ),
      "panel-Mn5oPq78": file(
        "panel-Mn5oPq78",
        0,
        org("ui", "ui/panel.tsx", "manual", "app-feature"),
        {
          imports: [
            {
              source: "./format-thing-AbCdEf12.js",
              target: "format-thing-AbCdEf12",
              kind: "local",
              specifiers: [
                { imported: "t", local: "formatThing", kind: "named" },
              ],
              reExport: false,
            },
          ],
        },
      ),
    },
    edges: [{ from: "panel-Mn5oPq78", to: "format-thing-AbCdEf12" }],
    unresolved: [],
  };
  fs.writeFileSync(
    path.join(fullDir, "manifest.json"),
    JSON.stringify(manifest, null, 2),
  );
  return target;
}

describe("relativeImport / buildImportMappings", () => {
  test("ensureProvenanceHeader normalizes absolute restored paths", () => {
    const absolute = path.join(
      process.cwd(),
      "ref",
      "webview",
      "assets",
      "format-thing-AbCdEf12.js",
    );
    const source = `// Restored from ${absolute}\nexport const value = 1;\n`;
    expect(
      ensureProvenanceHeader(
        source,
        "ref/webview/assets/format-thing-AbCdEf12.js",
        "Format thing chunk restored from the Codex webview bundle.",
      ),
    ).toMatch(
      /^\/\/ Restored from ref\/webview\/assets\/format-thing-AbCdEf12\.js\n/,
    );
  });

  test("relativeImport produces an extension-less relative specifier", () => {
    expect(relativeImport("ui/panel.tsx", "utils/format-thing.ts")).toBe(
      "../utils/format-thing",
    );
    expect(relativeImport("ui/panel.tsx", "utils/search/index.ts")).toBe(
      "../utils/search",
    );
    expect(relativeImport("a/b/c.tsx", "a/b/d.ts")).toBe("./d");
  });

  test("buildImportMappings only maps producers already promoted", () => {
    const chunk: ManifestFile = {
      basename: "panel-Mn5oPq78",
      kind: "local",
      depth: 0,
      stages: {},
      owner: null,
      claimedAt: null,
      lastUpdated: null,
      imports: [
        {
          source: "./a-X1Y2Z3a.js",
          target: "a-X1Y2Z3a",
          kind: "local",
          specifiers: [],
          reExport: false,
        },
        {
          source: "./b-X1Y2Z3b.js",
          target: "b-X1Y2Z3b",
          kind: "local",
          specifiers: [],
          reExport: false,
        },
      ],
    };
    const mappings = buildImportMappings(chunk, "ui/panel.tsx", {
      chunks: {
        "a-X1Y2Z3a": {
          restored: "utils/a.ts",
          status: "done",
          exports: { t: "doA" },
        },
        "b-X1Y2Z3b": { restored: "utils/b.ts", status: "pending" }, // not done → skipped
      },
    });
    expect(mappings).toHaveLength(1);
    expect(mappings[0]!.to).toBe("../utils/a");
    expect(mappings[0]!.exports).toEqual({ t: "doA" });
  });

  test("buildImportMappings rewrites vendor-data imports to the bare specifier", () => {
    const chunk: ManifestFile = {
      basename: "highlighter-Aa11Bb22",
      kind: "local",
      depth: 0,
      stages: {},
      owner: null,
      claimedAt: null,
      lastUpdated: null,
      imports: [
        // Edge kind is the stale `local` recorded before the target was
        // fingerprinted as vendor data — the manifest lookup must override it.
        {
          source: "./rust-Cc33Dd44.js",
          target: "rust-Cc33Dd44",
          kind: "local",
          specifiers: [],
          reExport: false,
        },
      ],
    };
    const manifest = {
      files: {
        "rust-Cc33Dd44": {
          basename: "rust-Cc33Dd44",
          kind: "npm-leaf",
          vendorSpecifier: "@shikijs/langs/rust",
          depth: 1,
          stages: { skipped: true },
          owner: null,
          claimedAt: null,
          lastUpdated: null,
        },
      },
    } as unknown as import("./build-import-graph.ts").Manifest;
    const mappings = buildImportMappings(
      chunk,
      "syntax/highlighter.tsx",
      { chunks: {} },
      manifest,
    );
    expect(mappings).toHaveLength(1);
    expect(mappings[0]!.to).toBe("@shikijs/langs/rust");
  });

  test("inferManualExportMap maps original single-export aliases to public names", () => {
    const chunk = {
      basename: "format-thing-AbCdEf12",
      kind: "local",
      exports: [{ exported: "t", local: "e", kind: "named" }],
    } as ManifestFile;
    expect(inferManualExportMap(UTIL_CHECKPOINT, chunk)).toEqual({
      t: "formatThing",
    });
  });

  test("inferManualExportMap maps multi-export candidates by export order", () => {
    const chunk = {
      basename: "helpers-BDwSRLlu",
      kind: "local",
      exports: [
        { exported: "a", local: "a", kind: "named" },
        { exported: "b", local: "b", kind: "named" },
      ],
    } as ManifestFile;
    expect(
      inferManualExportMap(
        [
          "export function isString(value: unknown): value is string { return typeof value === 'string'; }",
          "export function isNumber(value: unknown): value is number { return typeof value === 'number'; }",
        ].join("\n"),
        chunk,
      ),
    ).toEqual({ a: "isString", b: "isNumber" });
  });
});

describe("promoteOrganized", () => {
  test("dry-run writes nothing", () => {
    const target = setupTarget();
    const before = fs.readdirSync(target).sort();
    const results = promoteOrganized({ target, dryRun: true });
    const after = fs.readdirSync(target).sort();
    expect(after).toEqual(before); // no public dirs created
    expect(fs.existsSync(path.join(target, "IMPORT_MAP.json"))).toBe(false);
    expect(results.some((r) => r.basename === "download-Gh1jKl34")).toBe(true);
  });

  test("promotes recipes + manual candidate, updates IMPORT_MAP, rewrites imports", () => {
    const target = setupTarget();
    const results = promoteOrganized({ target });

    // Icon promoted as a typed module.
    const iconPath = path.join(target, "icons", "download-icon.tsx");
    expect(fs.existsSync(iconPath)).toBe(true);
    const iconSrc = fs.readFileSync(iconPath, "utf-8");
    expect(iconSrc).toContain("SVGProps<SVGSVGElement>");
    expect(iconSrc).toContain("IconProps");

    // Util promoted from its clean checkpoint.
    expect(fs.existsSync(path.join(target, "utils", "format-thing.ts"))).toBe(
      true,
    );

    // Consumer promoted with its hashed import rewritten to the semantic path.
    const panelSrc = fs.readFileSync(
      path.join(target, "ui", "panel.tsx"),
      "utf-8",
    );
    expect(panelSrc).toContain('from "../utils/format-thing"');
    expect(panelSrc).not.toContain("format-thing-AbCdEf12.js");

    // IMPORT_MAP updated with done entries.
    const importMap = JSON.parse(
      fs.readFileSync(path.join(target, "IMPORT_MAP.json"), "utf-8"),
    );
    expect(importMap.chunks["format-thing-AbCdEf12"].restored).toBe(
      "utils/format-thing.ts",
    );
    expect(importMap.chunks["format-thing-AbCdEf12"].exports).toEqual({
      t: "formatThing",
    });
    expect(importMap.chunks["format-thing-AbCdEf12"].status).toBe("done");
    expect(importMap.chunks["panel-Mn5oPq78"].status).toBe("done");

    // manifest stages.promoted set on the successful chunks.
    const manifest = JSON.parse(
      fs.readFileSync(
        path.join(target, ".deobfuscate-javascript", "_full", "manifest.json"),
        "utf-8",
      ),
    );
    expect(manifest.files["panel-Mn5oPq78"].stages.promoted).toBe(true);

    // The gate-failing junk chunk is NOT promoted and does not block the batch.
    expect(fs.existsSync(path.join(target, "utils", "junk.ts"))).toBe(false);
    const junk = results.find((r) => r.basename === "junk-Rs9tUv01");
    expect(junk?.promoted).toBe(false);
    expect(junk?.issues && junk.issues.length).toBeGreaterThan(0);

    // Three of four promoted (icon, util, panel); junk failed.
    expect(
      results
        .filter((r) => r.promoted)
        .map((r) => r.basename)
        .sort(),
    ).toEqual(["download-Gh1jKl34", "format-thing-AbCdEf12", "panel-Mn5oPq78"]);
  });

  test("promotes a split directory candidate and records its index entry", () => {
    const target = makeTmpRoot();
    const fullDir = path.join(target, ".deobfuscate-javascript", "_full");
    const candidateDir = path.join(
      fullDir,
      "files",
      "score-query-match-AbCdEf12",
      "candidate",
    );
    fs.mkdirSync(candidateDir, { recursive: true });
    fs.mkdirSync(path.join(fullDir, "checkpoints"), { recursive: true });
    fs.mkdirSync(path.join(fullDir, "locks"), { recursive: true });
    fs.writeFileSync(
      path.join(candidateDir, "index.ts"),
      [
        'import { scoreQueryMatch } from "./matcher";',
        "export { scoreQueryMatch };",
        "",
      ].join("\n"),
    );
    fs.writeFileSync(
      path.join(candidateDir, "matcher.ts"),
      [
        "export function scoreQueryMatch(candidate: string, query: string): number {",
        "  return candidate.includes(query) ? 1 : 0;",
        "}",
        "",
      ].join("\n"),
    );

    const manifest = {
      version: 1 as const,
      entry: "score-query-match-AbCdEf12",
      rootDir: "ref/webview/assets",
      targetDir: target,
      createdAt: "2026-06-24T00:00:00.000Z",
      updatedAt: "2026-06-24T00:00:00.000Z",
      files: {
        "score-query-match-AbCdEf12": {
          path: "ref/webview/assets/score-query-match-AbCdEf12.js",
          basename: "score-query-match-AbCdEf12",
          kind: "local",
          depth: 0,
          stages: { organized: true },
          organization: org(
            "utils",
            "utils/score-query-match.ts",
            "split",
            "single-util",
          ),
          exports: [{ exported: "t", local: "s", kind: "named" }],
          owner: null,
          claimedAt: null,
          lastUpdated: null,
        },
      },
      edges: [],
      unresolved: [],
    };
    fs.writeFileSync(
      path.join(fullDir, "manifest.json"),
      JSON.stringify(manifest, null, 2),
    );

    const results = promoteOrganized({ target });

    expect(results[0]!.promoted).toBe(true);
    expect(
      fs.existsSync(path.join(target, "utils", "score-query-match", "index.ts")),
    ).toBe(true);
    expect(
      fs.existsSync(
        path.join(target, "utils", "score-query-match", "matcher.ts"),
      ),
    ).toBe(true);
    const importMap = JSON.parse(
      fs.readFileSync(path.join(target, "IMPORT_MAP.json"), "utf-8"),
    );
    expect(importMap.chunks["score-query-match-AbCdEf12"].restored).toBe(
      "utils/score-query-match/index.ts",
    );
    expect(importMap.chunks["score-query-match-AbCdEf12"].exports).toEqual({
      t: "scoreQueryMatch",
    });
  });

  test("promotes a large flat data asset without requiring a split", () => {
    const target = makeTmpRoot();
    const fullDir = path.join(target, ".deobfuscate-javascript", "_full");
    fs.mkdirSync(path.join(fullDir, "checkpoints"), { recursive: true });
    fs.mkdirSync(path.join(fullDir, "locks"), { recursive: true });
    const entries = Array.from(
      { length: 1005 },
      (_, index) => `  "message.${index}": "value ${index}",`,
    ).join("\n");
    fs.writeFileSync(
      path.join(fullDir, "checkpoints", "locale-FrFrAa11.tsx"),
      `// Restored from ref/webview/assets/locale-FrFrAa11.js\nexport const localeMessages = {\n${entries}\n};\n`,
    );
    const manifest = {
      version: 1 as const,
      entry: "locale-FrFrAa11",
      rootDir: "ref/webview/assets",
      targetDir: target,
      createdAt: "2026-06-24T00:00:00.000Z",
      updatedAt: "2026-06-24T00:00:00.000Z",
      files: {
        "locale-FrFrAa11": {
          path: "ref/webview/assets/locale-FrFrAa11.js",
          basename: "locale-FrFrAa11",
          kind: "local",
          depth: 0,
          stages: { organized: true },
          organization: org(
            "locales",
            "locales/fr-fr.ts",
            "manual",
            "data-asset",
          ),
          exports: [{ exported: "t", local: "localeMessages", kind: "named" }],
          owner: null,
          claimedAt: null,
          lastUpdated: null,
        },
      },
      edges: [],
      unresolved: [],
    };
    fs.writeFileSync(
      path.join(fullDir, "manifest.json"),
      JSON.stringify(manifest, null, 2),
    );

    const results = promoteOrganized({ target });

    expect(results[0]!.promoted).toBe(true);
    expect(fs.existsSync(path.join(target, "locales", "fr-fr.ts"))).toBe(true);
  });

  test("is idempotent: a second run promotes nothing new", () => {
    const target = setupTarget();
    promoteOrganized({ target });
    const second = promoteOrganized({ target });
    expect(second.filter((r) => r.promoted)).toHaveLength(0);
  });

  function setupUntypedUtil(): string {
    const target = makeTmpRoot();
    const fullDir = path.join(target, ".deobfuscate-javascript", "_full");
    fs.mkdirSync(path.join(fullDir, "checkpoints"), { recursive: true });
    fs.mkdirSync(path.join(fullDir, "locks"), { recursive: true });
    fs.writeFileSync(
      path.join(fullDir, "checkpoints", "slugify-AbCdEf12.tsx"),
      "// Restored from ref/webview/assets/slugify-AbCdEf12.js\nexport function slugify(value) {\n  return value.toLowerCase();\n}\n",
    );
    const f = (b: string, o: ManifestFile["organization"]): ManifestFile => ({
      path: `ref/webview/assets/${b}.js`,
      basename: b,
      kind: "local",
      depth: 1,
      stages: { organized: true },
      organization: o,
      owner: null,
      claimedAt: null,
      lastUpdated: null,
    });
    const manifest = {
      version: 1 as const,
      entry: "slugify-AbCdEf12",
      rootDir: "r",
      targetDir: target,
      createdAt: "x",
      updatedAt: "x",
      files: {
        "slugify-AbCdEf12": f(
          "slugify-AbCdEf12",
          org("utils", "utils/slugify.ts", "manual", "single-util"),
        ),
      },
      edges: [],
      unresolved: [],
    };
    fs.writeFileSync(
      path.join(fullDir, "manifest.json"),
      JSON.stringify(manifest, null, 2),
    );
    return target;
  }

  test("deep tier rejects an untyped util; readable tier promotes it", () => {
    const deepTarget = setupUntypedUtil();
    const deep = promoteOrganized({ target: deepTarget, tier: "deep" });
    expect(deep[0]!.promoted).toBe(false);
    expect(deep[0]!.issues).toContain("untyped-public-function-params");
    expect(fs.existsSync(path.join(deepTarget, "utils", "slugify.ts"))).toBe(
      false,
    );

    const readableTarget = setupUntypedUtil();
    const readable = promoteOrganized({
      target: readableTarget,
      tier: "readable",
    });
    expect(readable[0]!.promoted).toBe(true);
    expect(
      fs.existsSync(path.join(readableTarget, "utils", "slugify.ts")),
    ).toBe(true);
  });
});
