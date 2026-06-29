// Restored from ref/webview/assets/file-diff-KtBt16gK.js
// Current Codex builds fold the file-diff renderer into the shared pull-request
// runtime chunk instead of shipping a standalone file-diff chunk.
// Vendored @pierre/diffs fork boundary.
//
// Codex bundles this renderer with local settings/theme integration
// (diff marker style, resolved code themes, and Codex surface CSS), so this is
// not a clean bare re-export of the published @pierre/diffs package.
import { parsePatchFile } from "../../features/parse-patch-files/parser";
import type {
  ParsedPatchFile,
  PatchFileSnapshot,
} from "../../features/parse-patch-files/types";

export type DiffFileSnapshot = PatchFileSnapshot & {
  cacheKey?: string;
  header?: string;
  lang?: string;
  name: string;
};

export type ParseDiffFromFilesOptions = {
  context?: number;
  ignoreNewlineAtEof?: boolean;
  ignoreWhitespace?: boolean;
  newlineIsToken?: boolean;
  stripTrailingCr?: boolean;
};

export type ParsedFileDiff = ParsedPatchFile & {
  lang?: string;
};

type DiffComponent = {
  added?: boolean;
  lines: string[];
  removed?: boolean;
};

type DiffPathComponent = {
  added: boolean;
  count: number;
  previousComponent?: DiffPathComponent;
  removed: boolean;
};

type DiffPath = {
  lastComponent?: DiffPathComponent;
  oldPosition: number;
};

type PatchHunk = {
  lines: string[];
  newLines: number;
  newStart: number;
  oldLines: number;
  oldStart: number;
};

export function parseDiffFromFiles(
  oldFile: DiffFileSnapshot,
  newFile: DiffFileSnapshot,
  options: ParseDiffFromFilesOptions = {},
  throwOnError = false,
): ParsedFileDiff {
  const patch = createUnifiedPatch(oldFile, newFile, options);
  const parsedPatchFile = parsePatchFile(patch, {
    cacheKey:
      oldFile.cacheKey != null && newFile.cacheKey != null
        ? `${oldFile.cacheKey}:${newFile.cacheKey}`
        : undefined,
    newFile,
    oldFile,
    throwOnError,
  });

  if (parsedPatchFile == null) {
    throw Error(
      "parseDiffFrom: FileInvalid diff -- probably need to fix something -- if the files are the same maybe?",
    );
  }

  const parsedFileDiff = parsedPatchFile as ParsedFileDiff;
  if (newFile.lang != null) {
    parsedFileDiff.lang = newFile.lang;
  }
  return parsedFileDiff;
}

function createUnifiedPatch(
  oldFile: DiffFileSnapshot,
  newFile: DiffFileSnapshot,
  options: ParseDiffFromFilesOptions,
): string {
  const patch = createStructuredPatch(oldFile, newFile, options);
  const lines: string[] = [];

  if (patch.oldFileName === patch.newFileName) {
    lines.push(`Index: ${patch.oldFileName}`);
  }
  lines.push(
    "===================================================================",
  );
  lines.push(
    `--- ${patch.oldFileName}${patch.oldHeader === undefined ? "" : `\t${patch.oldHeader}`}`,
  );
  lines.push(
    `+++ ${patch.newFileName}${patch.newHeader === undefined ? "" : `\t${patch.newHeader}`}`,
  );

  for (const hunk of patch.hunks) {
    const oldStart = hunk.oldLines === 0 ? hunk.oldStart - 1 : hunk.oldStart;
    const newStart = hunk.newLines === 0 ? hunk.newStart - 1 : hunk.newStart;
    lines.push(
      `@@ -${oldStart},${hunk.oldLines} +${newStart},${hunk.newLines} @@`,
    );
    lines.push(...hunk.lines);
  }

  return `${lines.join("\n")}\n`;
}

function createStructuredPatch(
  oldFile: DiffFileSnapshot,
  newFile: DiffFileSnapshot,
  options: ParseDiffFromFilesOptions,
): {
  hunks: PatchHunk[];
  newFileName: string;
  newHeader?: string;
  oldFileName: string;
  oldHeader?: string;
} {
  if (options.newlineIsToken) {
    throw Error(
      "newlineIsToken may not be used with patch-generation functions, only with diffing functions",
    );
  }

  const context = options.context ?? 4;
  const diffComponents = diffLineTokens(
    tokenizeLines(oldFile.contents, options),
    tokenizeLines(newFile.contents, options),
    options,
  );
  const hunks = buildPatchHunks(diffComponents, context);

  return {
    hunks,
    newFileName: newFile.name,
    newHeader: newFile.header,
    oldFileName: oldFile.name,
    oldHeader: oldFile.header,
  };
}

function tokenizeLines(
  value: string,
  options: ParseDiffFromFilesOptions,
): string[] {
  const normalizedValue = options.stripTrailingCr
    ? value.replace(/\r\n/g, "\n")
    : value;
  const parts = normalizedValue.split(/(\n|\r\n)/);
  if (parts[parts.length - 1] === "") {
    parts.pop();
  }

  const lines: string[] = [];
  for (let index = 0; index < parts.length; index += 1) {
    const part = parts[index] ?? "";
    if (index % 2 === 1) {
      lines[lines.length - 1] = `${lines[lines.length - 1] ?? ""}${part}`;
    } else {
      lines.push(part);
    }
  }
  return lines;
}

function diffLineTokens(
  oldLines: string[],
  newLines: string[],
  options: ParseDiffFromFilesOptions,
): DiffComponent[] {
  const maxEditLength = oldLines.length + newLines.length;
  const paths: Array<DiffPath | undefined> = [
    { oldPosition: -1, lastComponent: undefined },
  ];

  const firstNewPosition = extractCommonPrefix(
    paths[0],
    newLines,
    oldLines,
    0,
    options,
  );
  if (
    paths[0] != null &&
    paths[0].oldPosition + 1 >= oldLines.length &&
    firstNewPosition + 1 >= newLines.length
  ) {
    return buildDiffComponents(paths[0].lastComponent, oldLines, newLines);
  }

  let minDiagonal = Number.NEGATIVE_INFINITY;
  let maxDiagonal = Number.POSITIVE_INFINITY;

  for (let editLength = 1; editLength <= maxEditLength; editLength += 1) {
    for (
      let diagonal = Math.max(minDiagonal, -editLength);
      diagonal <= Math.min(maxDiagonal, editLength);
      diagonal += 2
    ) {
      const removePath = paths[diagonal - 1];
      const addPath = paths[diagonal + 1];
      if (removePath != null) {
        paths[diagonal - 1] = undefined;
      }

      const canAdd =
        addPath != null &&
        addPath.oldPosition - diagonal >= 0 &&
        addPath.oldPosition - diagonal < newLines.length;
      const canRemove =
        removePath != null && removePath.oldPosition + 1 < oldLines.length;

      if (!canAdd && !canRemove) {
        paths[diagonal] = undefined;
        continue;
      }

      const nextPath =
        !canRemove ||
        (canAdd &&
          removePath != null &&
          addPath != null &&
          removePath.oldPosition < addPath.oldPosition)
          ? addToPath(addPath as DiffPath, true, false, 0)
          : addToPath(removePath as DiffPath, false, true, 1);

      const newPosition = extractCommonPrefix(
        nextPath,
        newLines,
        oldLines,
        diagonal,
        options,
      );

      if (
        nextPath.oldPosition + 1 >= oldLines.length &&
        newPosition + 1 >= newLines.length
      ) {
        return buildDiffComponents(nextPath.lastComponent, oldLines, newLines);
      }

      paths[diagonal] = nextPath;
      if (nextPath.oldPosition + 1 >= oldLines.length) {
        maxDiagonal = Math.min(maxDiagonal, diagonal - 1);
      }
      if (newPosition + 1 >= newLines.length) {
        minDiagonal = Math.max(minDiagonal, diagonal + 1);
      }
    }
  }

  return [
    { lines: oldLines, removed: true },
    { added: true, lines: newLines },
  ];
}

function extractCommonPrefix(
  path: DiffPath | undefined,
  newLines: string[],
  oldLines: string[],
  diagonal: number,
  options: ParseDiffFromFilesOptions,
): number {
  if (path == null) return -1;

  let oldPosition = path.oldPosition;
  let newPosition = oldPosition - diagonal;
  let commonCount = 0;

  while (
    newPosition + 1 < newLines.length &&
    oldPosition + 1 < oldLines.length &&
    linesEqual(
      oldLines[oldPosition + 1] ?? "",
      newLines[newPosition + 1] ?? "",
      options,
    )
  ) {
    newPosition += 1;
    oldPosition += 1;
    commonCount += 1;
  }

  if (commonCount > 0) {
    path.lastComponent = {
      added: false,
      count: commonCount,
      previousComponent: path.lastComponent,
      removed: false,
    };
  }
  path.oldPosition = oldPosition;
  return newPosition;
}

function linesEqual(
  oldLine: string,
  newLine: string,
  options: ParseDiffFromFilesOptions,
): boolean {
  if (options.ignoreWhitespace) {
    return oldLine.trim() === newLine.trim();
  }
  if (options.ignoreNewlineAtEof) {
    return trimFinalLineEnding(oldLine) === trimFinalLineEnding(newLine);
  }
  return oldLine === newLine;
}

function trimFinalLineEnding(value: string): string {
  return value.endsWith("\r\n")
    ? value.slice(0, -2)
    : value.endsWith("\n")
      ? value.slice(0, -1)
      : value;
}

function addToPath(
  path: DiffPath,
  added: boolean,
  removed: boolean,
  oldPositionIncrement: number,
): DiffPath {
  const lastComponent = path.lastComponent;
  if (
    lastComponent != null &&
    lastComponent.added === added &&
    lastComponent.removed === removed
  ) {
    return {
      lastComponent: {
        ...lastComponent,
        count: lastComponent.count + 1,
      },
      oldPosition: path.oldPosition + oldPositionIncrement,
    };
  }

  return {
    lastComponent: {
      added,
      count: 1,
      previousComponent: lastComponent,
      removed,
    },
    oldPosition: path.oldPosition + oldPositionIncrement,
  };
}

function buildDiffComponents(
  lastComponent: DiffPathComponent | undefined,
  oldLines: string[],
  newLines: string[],
): DiffComponent[] {
  const linkedComponents: DiffPathComponent[] = [];
  for (
    let currentComponent: DiffPathComponent | undefined = lastComponent;
    currentComponent != null;
    currentComponent = currentComponent.previousComponent
  ) {
    linkedComponents.push(currentComponent);
  }
  linkedComponents.reverse();

  let oldIndex = 0;
  let newIndex = 0;
  const diffComponents: DiffComponent[] = [];

  for (const component of linkedComponents) {
    if (component.removed) {
      diffComponents.push({
        lines: oldLines.slice(oldIndex, oldIndex + component.count),
        removed: true,
      });
      oldIndex += component.count;
    } else if (component.added) {
      diffComponents.push({
        added: true,
        lines: newLines.slice(newIndex, newIndex + component.count),
      });
      newIndex += component.count;
    } else {
      diffComponents.push({
        lines: newLines.slice(newIndex, newIndex + component.count),
      });
      oldIndex += component.count;
      newIndex += component.count;
    }
  }

  return diffComponents;
}

function buildPatchHunks(
  diffComponents: DiffComponent[],
  context: number,
): PatchHunk[] {
  const componentsWithSentinel = [...diffComponents, { lines: [] }];
  const hunks: PatchHunk[] = [];
  let oldLineNumber = 1;
  let newLineNumber = 1;
  let hunkOldStart = 0;
  let hunkNewStart = 0;
  let hunkLines: string[] = [];

  for (let index = 0; index < componentsWithSentinel.length; index += 1) {
    const component = componentsWithSentinel[index] as DiffComponent;
    const lines = component.lines;

    if (component.added || component.removed) {
      if (hunkOldStart === 0) {
        const previousComponent = componentsWithSentinel[index - 1] as
          | DiffComponent
          | undefined;
        hunkOldStart = oldLineNumber;
        hunkNewStart = newLineNumber;

        if (previousComponent != null) {
          hunkLines =
            context > 0
              ? previousComponent.lines.slice(-context).map(toContextLine)
              : [];
          hunkOldStart -= hunkLines.length;
          hunkNewStart -= hunkLines.length;
        }
      }

      hunkLines.push(
        ...lines.map((line) => `${component.added ? "+" : "-"}${line}`),
      );
      if (component.added) {
        newLineNumber += lines.length;
      } else {
        oldLineNumber += lines.length;
      }
      continue;
    }

    if (hunkOldStart !== 0) {
      if (
        lines.length <= context * 2 &&
        index < componentsWithSentinel.length - 2
      ) {
        hunkLines.push(...lines.map(toContextLine));
      } else {
        const trailingContextLength = Math.min(lines.length, context);
        hunkLines.push(
          ...lines.slice(0, trailingContextLength).map(toContextLine),
        );
        hunks.push({
          lines: normalizeNoNewlineMarkers(hunkLines),
          newLines: newLineNumber - hunkNewStart + trailingContextLength,
          newStart: hunkNewStart,
          oldLines: oldLineNumber - hunkOldStart + trailingContextLength,
          oldStart: hunkOldStart,
        });
        hunkOldStart = 0;
        hunkNewStart = 0;
        hunkLines = [];
      }
    }

    oldLineNumber += lines.length;
    newLineNumber += lines.length;
  }

  return hunks;
}

function toContextLine(line: string): string {
  return ` ${line}`;
}

function normalizeNoNewlineMarkers(lines: string[]): string[] {
  const normalizedLines: string[] = [];
  for (const line of lines) {
    if (line.endsWith("\n")) {
      normalizedLines.push(line.slice(0, -1));
    } else {
      normalizedLines.push(line);
      normalizedLines.push("\\ No newline at end of file");
    }
  }
  return normalizedLines;
}

// The FileDiff custom element class is now internal to the folded renderer
// cluster; keep the historical export present without mapping it to the current
// chunk's unrelated short-name exports.
export const FileDiff = undefined;
