// Restored from ref/.vite/build/file-based-logger-7hbAyAYH.js
// file-based-logger-7hbAyAYH chunk restored from the Codex Electron main bundle.
import * as fs from "node:fs";
import * as path from "node:path";
import type { PackageMetadataOptions } from "./types";

function packageMetadataCandidates(): string[] {
  const cwd = process.cwd();
  const candidates: string[] = [];
  if (process.resourcesPath) {
    candidates.push(
      path.join(process.resourcesPath, "app.asar", "package.json"),
    );
  }
  candidates.push(path.join(cwd, "package.json"));
  candidates.push(path.join(cwd, "electron", "package.json"));
  return candidates;
}

function readPackageMetadataField<T = string>(
  field: string,
  {
    candidates = packageMetadataCandidates(),
    parse,
  }: PackageMetadataOptions<T> = {},
): T | string | null {
  for (const candidate of candidates) {
    if (!fs.existsSync(candidate)) continue;
    const packageJson = JSON.parse(
      fs.readFileSync(candidate, "utf8"),
    ) as Record<string, unknown>;
    const rawValue =
      typeof packageJson[field] === "string" ? packageJson[field].trim() : "";
    if (!rawValue) continue;
    const parsed = parse ? parse(rawValue) : rawValue;
    if (parsed != null) return parsed;
  }
  return null;
}

export { readPackageMetadataField };
