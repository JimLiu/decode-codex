// Restored from ref/.vite/build/src-CoIhwwHr.js
// File-backed ambient-suggestions state keyed by host, project root, and domain.

import { createHash, randomUUID } from "node:crypto";
import {
  existsSync,
  mkdirSync,
  readFileSync,
  renameSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { dirname, join } from "node:path";
import { resolveCodexHome } from "../../boundaries/shared-node-runtime.facade";
import type {
  AmbientSuggestion,
  AmbientSuggestionDomain,
  AmbientSuggestionStatus,
  AmbientSuggestionsFile,
} from "./types";

const AMBIENT_SUGGESTIONS_DIRECTORY = "ambient-suggestions";
const AMBIENT_SUGGESTIONS_FILE_NAME = "ambient-suggestions.json";

export const EMPTY_AMBIENT_SUGGESTIONS_FILE: AmbientSuggestionsFile = {
  projectRoot: "",
  generatedAtMs: null,
  currentSuggestionIds: [],
  suggestions: [],
};

export function getAmbientSuggestionsFilePath({
  codexHome = resolveCodexHome(),
  domain = null,
  hostId,
  projectRoot,
}: {
  codexHome?: string;
  domain?: AmbientSuggestionDomain;
  hostId: string;
  projectRoot: string;
}): string {
  const hash = createHash("sha1")
    .update(hostId)
    .update("\0")
    .update(projectRoot);
  if (domain != null) hash.update("\0").update(domain);
  return join(
    codexHome,
    AMBIENT_SUGGESTIONS_DIRECTORY,
    hash.digest("hex"),
    AMBIENT_SUGGESTIONS_FILE_NAME,
  );
}

export function readAmbientSuggestionsFile(
  hostId: string,
  projectRoot: string,
  domain: AmbientSuggestionDomain = null,
): AmbientSuggestionsFile {
  if (projectRoot.length === 0) return EMPTY_AMBIENT_SUGGESTIONS_FILE;
  const fallback = { ...EMPTY_AMBIENT_SUGGESTIONS_FILE, projectRoot };
  const filePath = getAmbientSuggestionsFilePath({
    domain,
    hostId,
    projectRoot,
  });
  if (!existsSync(filePath)) return fallback;

  let parsed: unknown;
  try {
    parsed = JSON.parse(readFileSync(filePath, "utf8"));
  } catch {
    return fallback;
  }
  return parseAmbientSuggestionsFile(parsed, projectRoot) ?? fallback;
}

export function writeAmbientSuggestionsFile(
  hostId: string,
  projectRoot: string,
  domain: AmbientSuggestionDomain,
  file: AmbientSuggestionsFile,
): void {
  if (projectRoot.length === 0) return;
  const filePath = getAmbientSuggestionsFilePath({
    domain,
    hostId,
    projectRoot,
  });
  mkdirSync(dirname(filePath), { recursive: true });
  const tempPath = join(
    dirname(filePath),
    `.${AMBIENT_SUGGESTIONS_FILE_NAME}.tmp-${Date.now()}-${randomUUID()}`,
  );
  writeFileSync(tempPath, `${JSON.stringify(file, null, 2)}\n`, "utf8");
  try {
    renameSync(tempPath, filePath);
  } catch {
    rmSync(filePath, { force: true });
    renameSync(tempPath, filePath);
  }
}

export function setAmbientSuggestionStatus({
  domain = null,
  hostId,
  projectRoot,
  status,
  suggestionId,
}: {
  domain?: AmbientSuggestionDomain;
  hostId: string;
  projectRoot: string;
  status: AmbientSuggestionStatus;
  suggestionId: string;
}): AmbientSuggestionsFile {
  const file = readAmbientSuggestionsFile(hostId, projectRoot, domain);
  const updatedAtMs = Date.now();
  let changed = false;
  const suggestions = file.suggestions.map((suggestion) => {
    if (suggestion.id !== suggestionId || suggestion.status === status) {
      return suggestion;
    }
    changed = true;
    return { ...suggestion, status, updatedAtMs };
  });
  if (!changed) return file;
  const nextFile = { ...file, suggestions };
  writeAmbientSuggestionsFile(hostId, projectRoot, domain, nextFile);
  return nextFile;
}

function parseAmbientSuggestionsFile(
  value: unknown,
  projectRoot: string,
): AmbientSuggestionsFile | null {
  if (!isRecord(value)) return null;
  const generatedAtMs =
    typeof value.generatedAtMs === "number" || value.generatedAtMs === null
      ? value.generatedAtMs
      : null;
  const currentSuggestionIds = Array.isArray(value.currentSuggestionIds)
    ? value.currentSuggestionIds.filter(
        (item): item is string => typeof item === "string",
      )
    : [];
  const suggestions = Array.isArray(value.suggestions)
    ? value.suggestions.flatMap((item) => {
        const suggestion = parseAmbientSuggestion(item);
        return suggestion == null ? [] : [suggestion];
      })
    : [];
  return { projectRoot, generatedAtMs, currentSuggestionIds, suggestions };
}

function parseAmbientSuggestion(value: unknown): AmbientSuggestion | null {
  if (!isRecord(value)) return null;
  if (
    typeof value.id !== "string" ||
    typeof value.title !== "string" ||
    typeof value.description !== "string" ||
    typeof value.prompt !== "string" ||
    !Array.isArray(value.appIds) ||
    !isAmbientSuggestionStatus(value.status) ||
    typeof value.createdAtMs !== "number" ||
    typeof value.updatedAtMs !== "number"
  ) {
    return null;
  }
  return {
    id: value.id,
    title: value.title,
    description: value.description,
    prompt: value.prompt,
    appIds: value.appIds.filter(
      (item): item is string => typeof item === "string",
    ),
    status: value.status,
    createdAtMs: value.createdAtMs,
    updatedAtMs: value.updatedAtMs,
  };
}

function isAmbientSuggestionStatus(
  value: unknown,
): value is AmbientSuggestionStatus {
  return value === "pending" || value === "accepted" || value === "dismissed";
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value != null && !Array.isArray(value);
}
