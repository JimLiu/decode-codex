// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~appgen-publication-terms-route~remote-conversati~oykv7gy7-B4ar2dlW.js
// Artifact import presentation detection for publication-terms resources.
import { getPathExtension } from "../../runtime/publication-terms-runtime";

const ARTIFACT_IMPORT_KIND_BY_EXTENSION = new Map([
  ["csv", "csv"],
  ["docx", "docx"],
  ["ipynb", "ipynb"],
  ["pdf", "pdf"],
  ["pptx", "pptx"],
  ["tex", "tex"],
  ["tsv", "tsv"],
  ["xlsm", "xlsx"],
  ["xlsx", "xlsx"],
]);

export function initArtifactImportPresentationChunk(): void {}

export function getArtifactImportKindForPath(path: string): string | null {
  const extension = getPathExtension(path);
  return extension == null
    ? null
    : (ARTIFACT_IMPORT_KIND_BY_EXTENSION.get(extension) ?? null);
}

export function shouldParseArtifactPreviewForImportKind(
  importKind: string,
): boolean {
  switch (importKind) {
    case "csv":
    case "ipynb":
    case "tex":
    case "tsv":
      return true;
    case "docx":
    case "pdf":
    case "pptx":
    case "xlsx":
      return false;
    default:
      return false;
  }
}

export function getArtifactImportPresentation(path: string) {
  const importKind = getArtifactImportKindForPath(path);
  if (importKind == null) return null;

  switch (importKind) {
    case "csv":
    case "tsv":
    case "xlsx":
      return { artifactType: "spreadsheet", importKind };
    case "docx":
      return { artifactType: "document", importKind };
    case "ipynb":
      return { artifactType: "notebook", importKind };
    case "pdf":
    case "tex":
      return { artifactType: "pdf", importKind };
    case "pptx":
      return { artifactType: "slides", importKind };
  }
}
