import { describe, expect, test } from "bun:test";
import type { Manifest, ManifestFile } from "./build-import-graph.ts";
import { applyPlan, planOrganize } from "./plan-organize.ts";

function file(partial: Partial<ManifestFile> & { basename: string }): ManifestFile {
  return {
    kind: "local",
    depth: 1,
    stages: {},
    owner: null,
    claimedAt: null,
    lastUpdated: null,
    ...partial,
  };
}

function makeManifest(files: ManifestFile[]): Manifest {
  return {
    version: 1,
    entry: "entry-AaAaAaAa",
    rootDir: "assets",
    targetDir: "restored",
    createdAt: "2026-06-24T00:00:00.000Z",
    updatedAt: "2026-06-24T00:00:00.000Z",
    files: Object.fromEntries(files.map((f) => [f.basename, f])),
    edges: [],
    unresolved: [],
  };
}

const ICON_SOURCE = `// checkpoint
export const DownloadIcon = (props) => (
  <svg width={16} height={16} viewBox="0 0 16 16" {...props}>
    <path d="M1 1h14v14H1z" />
  </svg>
);
export default DownloadIcon;
`;

const LOTTIE_SOURCE = `// Restored from ref/webview/assets/automation-DUugu_pi.js
export const automation = {
  v: "5.7.0",
  ip: 0,
  op: 90,
  fr: 60,
  w: 500,
  h: 500,
  assets: [],
  layers: [],
};
export default automation;
`;

const LOTTIE_TOOLKIT_SOURCE = `// Restored from ref/webview/assets/web-search-icon-ZAHNQGC5.js
export const webSearchIcon = {
  nm: "250410_Search 2",
  h: 24,
  w: 24,
  meta: {
    g: "@lottiefiles/toolkit-js 0.63.0",
  },
  layers: [],
};
export default webSearchIcon;
`;

const LOCALE_SOURCE = `// Restored from ref/webview/assets/fr-FR-_l8AQa2a.js
var frFRGreeting = "Retour";
export const frFRDefault = {
  "CopyButton.copyTooltip": "Copier",
  "app.sidebar.hide": "Masquer la barre laterale",
};
export { frFRGreeting as greeting };
export default frFRDefault;
`;

const THEME_SOURCE = `// Restored from ref/webview/assets/absolutely-dark-Bxu0QJJD.js
const absolutelyDarkColors = {
  "editor.background": "#2d2d2b",
  "activityBar.background": "#373735",
};
export const absolutelyDarkDefault = {
  bg: "#2d2d2b",
  colors: absolutelyDarkColors,
  fg: "#f9f9f7",
  name: "Absolutely Dark",
  settings: [{ scope: ["comment"], settings: { foreground: "#b2b2b0" } }],
  type: "dark",
};
export { absolutelyDarkColors as colors };
export default absolutelyDarkDefault;
`;

describe("planOrganize (shape heuristics)", () => {
  const manifest = makeManifest([
    file({ basename: "download-AbCdEf12", exports: [{ exported: "t", local: "DownloadIcon", kind: "named" }] }),
    file({ basename: "copy-to-clipboard-Gh1jKl34", exports: [{ exported: "t", local: "c", kind: "named" }] }),
    file({ basename: "vscode-api-Mn5oPq78", exports: [{ exported: "a", local: "x", kind: "named" }, { exported: "b", local: "y", kind: "named" }] }),
    file({ basename: "mystery-panel-Rs9tUv01", exports: [{ exported: "a", local: "x", kind: "named" }, { exported: "b", local: "y", kind: "named" }] }),
  ]);

  const checkpoints: Record<string, string> = {
    "download-AbCdEf12": ICON_SOURCE,
  };

  const plan = planOrganize({
    manifest,
    target: "restored",
    readCheckpoint: (b) => checkpoints[b] ?? null,
  });

  test("an SVG icon chunk → icons/ with the icon recipe", () => {
    const e = plan.entries["download-AbCdEf12"]!;
    expect(e.domain).toBe("icons");
    expect(e.recipe).toBe("icon");
    expect(e.classification).toBe("icon");
    expect(e.semanticPath).toBe("icons/download-icon.tsx");
    expect(e.status).toBe("approved");
  });

  test("a single-export chunk → utils/<kebab>.ts", () => {
    const e = plan.entries["copy-to-clipboard-Gh1jKl34"]!;
    expect(e.domain).toBe("utils");
    expect(e.classification).toBe("single-util");
    expect(e.semanticPath).toBe("utils/copy-to-clipboard.ts");
    expect(e.status).toBe("approved");
  });

  test("a Lottie animation data chunk → animations/<kebab>.ts", () => {
    const m = makeManifest([
      file({
        basename: "automation-DUugu_pi",
        exports: [{ exported: "default", local: "automation", kind: "named" }],
      }),
      file({
        basename: "web-search-icon-ZAHNQGC5",
        exports: [{ exported: "default", local: "webSearchIcon", kind: "named" }],
      }),
    ]);
    const p = planOrganize({
      manifest: m,
      target: "restored",
      readCheckpoint: (b) =>
        b === "automation-DUugu_pi"
          ? LOTTIE_SOURCE
          : b === "web-search-icon-ZAHNQGC5"
            ? LOTTIE_TOOLKIT_SOURCE
            : null,
    });
    const e = p.entries["automation-DUugu_pi"]!;
    expect(e.domain).toBe("animations");
    expect(e.classification).toBe("data-asset");
    expect(e.semanticPath).toBe("animations/automation.ts");
    expect(e.status).toBe("approved");

    const toolkit = p.entries["web-search-icon-ZAHNQGC5"]!;
    expect(toolkit.domain).toBe("animations");
    expect(toolkit.classification).toBe("data-asset");
    expect(toolkit.semanticPath).toBe("animations/web-search-icon.ts");
    expect(toolkit.status).toBe("approved");
  });

  test("a localized message catalog chunk → locales/<locale>.ts", () => {
    const m = makeManifest([
      file({
        basename: "fr-FR-_l8AQa2a",
        exports: [
          { exported: "default", local: "frFRDefault", kind: "named" },
          { exported: "greeting", local: "frFRGreeting", kind: "named" },
        ],
      }),
      file({
        basename: "sq-AL-C-n_ZmvG",
        exports: [
          { exported: "default", local: "sqALDefault", kind: "named" },
          { exported: "greeting", local: "sqALGreeting", kind: "named" },
        ],
      }),
    ]);
    const p = planOrganize({
      manifest: m,
      target: "restored",
      readCheckpoint: () => LOCALE_SOURCE,
    });
    const e = p.entries["fr-FR-_l8AQa2a"]!;
    expect(e.domain).toBe("locales");
    expect(e.classification).toBe("data-asset");
    expect(e.semanticPath).toBe("locales/fr-fr.ts");
    expect(e.status).toBe("approved");

    const withHyphenatedHash = p.entries["sq-AL-C-n_ZmvG"]!;
    expect(withHyphenatedHash.semanticPath).toBe("locales/sq-al.ts");
    expect(withHyphenatedHash.status).toBe("approved");
  });

  test("an editor theme data chunk → themes/<theme>.ts", () => {
    const m = makeManifest([
      file({
        basename: "absolutely-dark-Bxu0QJJD",
        exports: [
          { exported: "default", local: "absolutelyDarkDefault", kind: "named" },
          { exported: "colors", local: "absolutelyDarkColors", kind: "named" },
        ],
      }),
    ]);
    const p = planOrganize({
      manifest: m,
      target: "restored",
      readCheckpoint: () => THEME_SOURCE,
    });
    const e = p.entries["absolutely-dark-Bxu0QJJD"]!;
    expect(e.domain).toBe("themes");
    expect(e.classification).toBe("data-asset");
    expect(e.semanticPath).toBe("themes/absolutely-dark.ts");
    expect(e.status).toBe("approved");
  });

  test("a known vendor/runtime chunk → boundaries/, flagged needs-review (face it, don't promote raw)", () => {
    const e = plan.entries["vscode-api-Mn5oPq78"]!;
    expect(e.domain).toBe("boundaries");
    expect(e.classification).toBe("vendor-runtime");
    expect(e.status).toBe("needs-review");
    expect(e.reason).toContain("make-facade");
  });

  test("an ambiguous app-feature chunk → needs-review with no domain", () => {
    const e = plan.entries["mystery-panel-Rs9tUv01"]!;
    expect(e.classification).toBe("app-feature");
    expect(e.status).toBe("needs-review");
    expect(e.domain).toBe("");
    expect(plan.summary.needsReview).toContain("mystery-panel-Rs9tUv01");
  });

  test("npm-leaf and faced chunks are excluded from the plan", () => {
    const m = makeManifest([
      file({ basename: "react-CiQ1k8xo", kind: "npm-leaf", stages: { skipped: true } }),
      file({ basename: "zod-Faced123", stages: { faced: true } }),
      file({ basename: "download-AbCdEf12", exports: [{ exported: "t", local: "DownloadIcon", kind: "named" }] }),
    ]);
    const p = planOrganize({ manifest: m, target: "restored", readCheckpoint: (b) => checkpoints[b] ?? null });
    expect(Object.keys(p.entries)).toEqual(["download-AbCdEf12"]);
  });

  test("--domain-map assigns app chunks to a domain when provided", () => {
    const m = makeManifest([
      file({ basename: "mystery-panel-Rs9tUv01", exports: [{ exported: "a", local: "x", kind: "named" }, { exported: "b", local: "y", kind: "named" }] }),
    ]);
    const p = planOrganize({
      manifest: m,
      target: "restored",
      domainMap: { mystery: "mystery" },
    });
    const e = p.entries["mystery-panel-Rs9tUv01"]!;
    expect(e.domain).toBe("mystery");
    expect(e.status).toBe("approved");
    expect(e.semanticPath).toBe("mystery/mystery-panel.tsx");
  });

  test("two chunks targeting the same path are downgraded to needs-review", () => {
    const chevronRight = `export const ChevronIcon = (props) => (<svg viewBox="0 0 16 16" {...props}><path d="M1 1" /></svg>);`;
    const chevronLeft = `export const ChevronIcon = (props) => (<svg viewBox="0 0 16 16" {...props}><path d="M2 2" /></svg>);`;
    const m = makeManifest([
      file({ basename: "chevron-right-AbiZn0oU", exports: [{ exported: "t", local: "ChevronIcon", kind: "named" }] }),
      file({ basename: "chevron-left-Zy9xWv01", exports: [{ exported: "t", local: "ChevronIcon", kind: "named" }] }),
    ]);
    const p = planOrganize({
      manifest: m,
      target: "restored",
      readCheckpoint: (b) =>
        b === "chevron-right-AbiZn0oU"
          ? chevronRight
          : b === "chevron-left-Zy9xWv01"
            ? chevronLeft
            : null,
    });
    // Both resolve to icons/chevron-icon.tsx → both must be flagged.
    expect(p.entries["chevron-right-AbiZn0oU"]!.status).toBe("needs-review");
    expect(p.entries["chevron-left-Zy9xWv01"]!.status).toBe("needs-review");
    expect(p.entries["chevron-right-AbiZn0oU"]!.reason).toContain("collides");
  });

  test("an existing IMPORT_MAP mapping is reused", () => {
    const m = makeManifest([
      file({ basename: "copy-to-clipboard-Gh1jKl34", exports: [{ exported: "t", local: "c", kind: "named" }] }),
    ]);
    const p = planOrganize({
      manifest: m,
      target: "restored",
      importMap: {
        chunks: {
          "copy-to-clipboard-Gh1jKl34": { restored: "utils/copy-to-clipboard.ts", status: "done" },
        },
      },
    });
    const e = p.entries["copy-to-clipboard-Gh1jKl34"]!;
    expect(e.semanticPath).toBe("utils/copy-to-clipboard.ts");
    expect(e.confidence).toBe(1);
  });

  test("fallbackRenameRatio is surfaced from the auto-restore report", () => {
    const m = makeManifest([
      file({ basename: "copy-to-clipboard-Gh1jKl34", exports: [{ exported: "t", local: "c", kind: "named" }] }),
    ]);
    const p = planOrganize({
      manifest: m,
      target: "restored",
      report: { files: [{ basename: "copy-to-clipboard-Gh1jKl34", renames: 10, fallbackRenames: 8 }] },
    });
    expect(p.entries["copy-to-clipboard-Gh1jKl34"]!.fallbackRenameRatio).toBeCloseTo(0.8);
  });
});

describe("applyPlan", () => {
  test("writes only approved entries into manifest.organization", () => {
    const manifest = makeManifest([
      file({ basename: "download-AbCdEf12", exports: [{ exported: "t", local: "DownloadIcon", kind: "named" }] }),
      file({ basename: "copy-to-clipboard-Gh1jKl34", exports: [{ exported: "t", local: "c", kind: "named" }] }),
      file({ basename: "vscode-api-Mn5oPq78", exports: [{ exported: "a", local: "x", kind: "named" }] }),
      file({ basename: "mystery-panel-Rs9tUv01", exports: [{ exported: "a", local: "x", kind: "named" }, { exported: "b", local: "y", kind: "named" }] }),
    ]);
    const plan = planOrganize({
      manifest,
      target: "restored",
      readCheckpoint: (b) => (b === "download-AbCdEf12" ? ICON_SOURCE : null),
    });
    const result = applyPlan(manifest, plan);
    // icon + util approved; vendor (needs facade) + ambiguous app-feature are needs-review.
    expect(result.applied).toBe(2);
    expect(result.skippedNeedsReview).toBe(2);

    expect(manifest.files["download-AbCdEf12"]!.stages.organized).toBe(true);
    expect(manifest.files["download-AbCdEf12"]!.organization?.semanticPath).toBe(
      "icons/download-icon.tsx",
    );
    // needs-review chunk is left unorganized
    expect(manifest.files["mystery-panel-Rs9tUv01"]!.stages.organized).toBeFalsy();
    expect(manifest.files["mystery-panel-Rs9tUv01"]!.organization).toBeUndefined();
  });

  test("is idempotent: a second apply skips already-organized chunks", () => {
    const manifest = makeManifest([
      file({ basename: "copy-to-clipboard-Gh1jKl34", exports: [{ exported: "t", local: "c", kind: "named" }] }),
    ]);
    const plan = planOrganize({ manifest, target: "restored" });
    expect(applyPlan(manifest, plan).applied).toBe(1);
    const second = applyPlan(manifest, plan);
    expect(second.applied).toBe(0);
    expect(second.skippedAlready).toBe(1);
  });
});
