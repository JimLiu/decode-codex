// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Headless controller that registers the review diff search adapter: builds locally
// searchable file/hunk text + line spans, decides between local and host-side
// ("review-search" RPC) search, maps remote results back to diff locations, and wires
// scroll-to-file / scroll preservation for the active find session.

import { useEffect, useMemo, useRef } from "react";
import type { MutableRefObject } from "react";
import {
  useStore,
  useAtomValue,
  routeAtom,
  workspaceRootAtom,
  reviewHostIdAtom,
  reviewHostConfigAtom,
  reviewSearchableFileEntriesAtom,
  reviewCappedModeAtom,
  reviewRepositorySourceAtom,
  reviewBaseBranchAtom,
  reviewCommitShaAtom,
  reviewSummarySourceAtom,
  reviewGitMetadataQueryAtom,
  reviewSearchControllerAtom,
  useReviewGeneratedPaths,
  createDiffSearchController,
  setReviewActivePath,
  waitForNextFrame,
  getRpcClient,
  workspaceRootToCwd,
} from "../boundaries/onboarding-commons-externals.facade";
import {
  findFileContainer,
  preserveScrollBeforeResultClear,
  scheduleScrollRestore,
} from "./review-search-scroll";
import type { ReviewFileDiff, ReviewDiffHunk } from "./diff-patch-builder";

type AppScope = {
  get<TValue>(signal: unknown, key?: unknown): TValue;
  set(signal: unknown, value: unknown, key?: unknown): void;
};

interface SearchableFileEntry {
  path: string;
  gitPath: string;
  diff: ReviewFileDiff | null;
  diffLoadStatus: "loading" | "loaded" | "error" | string;
}

type LineSide = "additions" | "deletions";

interface LineSpanInput {
  lineNumber: number;
  side: LineSide;
  text: string;
}

interface LineSpan {
  start: number;
  end: number;
  lineStart: number;
  lineEnd: number;
  side: LineSide;
}

interface SearchReadinessArgs {
  cwd: string | null;
  fileEntries: SearchableFileEntry[];
  generatedPathsReady: boolean;
  hasUnhandledAttributesFiles: boolean;
  isCappedMode: boolean;
  repositorySource: string | null;
  reviewSummarySource: string | null;
}

function canSearchReviewLocally({
  cwd,
  fileEntries,
  generatedPathsReady,
  hasUnhandledAttributesFiles,
  isCappedMode,
  repositorySource,
  reviewSummarySource,
}: SearchReadinessArgs): boolean {
  if (
    repositorySource === "cloud" ||
    reviewSummarySource == null ||
    cwd == null
  ) {
    return true;
  }
  return (
    !isCappedMode &&
    generatedPathsReady &&
    !hasUnhandledAttributesFiles &&
    fileEntries.length > 0 &&
    fileEntries.every((entry) => entry.diffLoadStatus === "loaded")
  );
}

function formatSearchPathLabel(diff: ReviewFileDiff): string {
  const oldPath = (diff as { oldPath?: string }).oldPath;
  const newPath = (diff as { newPath?: string }).newPath;
  return oldPath === newPath ? (newPath ?? "") : `${oldPath} -> ${newPath}`;
}

function appendLineSpans(
  output: LineSpanInput[],
  lines: string[],
  startIndex: number,
  count: number,
  lineNumberStart: number,
  side: LineSide,
): void {
  for (let offset = 0; offset < count; offset += 1) {
    const text = lines[startIndex + offset];
    if (text != null) {
      output.push({ lineNumber: lineNumberStart + offset, side, text });
    }
  }
}

function mergeLineSpans(entries: LineSpanInput[]): {
  lineSpans: LineSpan[];
  text: string;
} {
  const texts: string[] = [];
  const spans: LineSpan[] = [];
  let offset = 0;
  entries.forEach((entry, index) => {
    const end = offset + entry.text.length;
    texts.push(entry.text);
    spans.push({
      start: offset,
      end,
      lineStart: entry.lineNumber,
      lineEnd: entry.lineNumber,
      side: entry.side,
    });
    offset = end + (index === entries.length - 1 ? 0 : 1);
  });
  return { lineSpans: spans, text: texts.join("\n") };
}

function buildHunkSearchText(
  diff: ReviewFileDiff,
  hunk: ReviewDiffHunk,
): { lineSpans: LineSpan[]; text: string } {
  const entries: LineSpanInput[] = [];
  let additionLine = hunk.additionStart ?? 0;
  let deletionLine = hunk.deletionStart ?? 0;
  for (const part of hunk.hunkContent) {
    if (part.type === "context") {
      appendLineSpans(
        entries,
        diff.metadata.additionLines,
        part.additionLineIndex,
        part.lines,
        additionLine,
        "additions",
      );
      additionLine += part.lines;
      deletionLine += part.lines;
      continue;
    }
    appendLineSpans(
      entries,
      diff.metadata.deletionLines,
      part.deletionLineIndex,
      part.deletions,
      deletionLine,
      "deletions",
    );
    deletionLine += part.deletions;
    appendLineSpans(
      entries,
      diff.metadata.additionLines,
      part.additionLineIndex,
      part.additions,
      additionLine,
      "additions",
    );
    additionLine += part.additions;
  }
  return mergeLineSpans(entries);
}

function collectSearchableFiles(
  fileEntries: SearchableFileEntry[],
  generatedPaths: Set<string>,
) {
  return fileEntries.flatMap((entry) => {
    if (generatedPaths.has(entry.gitPath)) return [];
    const diff = entry.diff;
    if (diff == null) return [];
    return {
      path: entry.path,
      hunks: [
        {
          hunkId: "path",
          lineEnd: 1,
          lineStart: 1,
          text: formatSearchPathLabel(diff),
        },
        ...diff.metadata.hunks.map((hunk, index) => {
          const additionStart = hunk.additionStart ?? 0;
          const deletionStart = hunk.deletionStart ?? 0;
          const lineStart = Math.min(additionStart, deletionStart);
          const additionEnd =
            additionStart + Math.max(hunk.additionCount ?? 0, 0) - 1;
          const deletionEnd =
            deletionStart + Math.max(hunk.deletionCount ?? 0, 0) - 1;
          const lineEnd = Math.max(lineStart, additionEnd, deletionEnd);
          const spans = buildHunkSearchText(diff, hunk);
          return {
            hunkId: `${index}`,
            lineEnd,
            lineSpans: spans.lineSpans,
            lineStart,
            text: spans.text,
          };
        }),
      ],
    };
  });
}

interface RemoteSearchResponse {
  type: "success" | "error" | string;
  query: string;
  matches: Array<{
    path: string;
    hunkId: string;
    lineStart: number;
    lineEnd: number;
    start: number;
    end: number;
    snippet: unknown;
  }>;
  totalMatches: number;
  isCapped: boolean;
}

function mapRemoteSearchResults(
  query: { contextId: string; query: string },
  response: RemoteSearchResponse,
  fileEntries: SearchableFileEntry[],
) {
  if (response.type === "error") {
    return {
      domain: "diff",
      contextId: query.contextId,
      query: query.query.trim(),
      matches: [],
      totalMatches: 0,
      isCapped: false,
    };
  }
  const byGitPath = new Map(fileEntries.map((entry) => [entry.gitPath, entry]));
  return {
    domain: "diff",
    contextId: query.contextId,
    query: response.query,
    matches: response.matches.map((match, index) => {
      const displayPath = byGitPath.get(match.path)?.path ?? match.path;
      return {
        id: `diff:${displayPath}:${match.hunkId}:${match.start}`,
        ordinal: index + 1,
        location: {
          domain: "diff",
          contextId: query.contextId,
          path: displayPath,
          hunkId: match.hunkId,
          lineStart: match.lineStart,
          lineEnd: match.lineEnd,
          start: match.start,
          end: match.end,
        },
        snippet: match.snippet,
      };
    }),
    totalMatches: response.totalMatches,
    isCapped: response.isCapped,
  };
}

interface ReviewSearchControllerProps {
  diffRefs: MutableRefObject<Map<string, Element>>;
  scrollContainerRef: MutableRefObject<HTMLElement | null>;
  setSelectedPathWithoutScroll: (path: string) => void;
}

export function ReviewSearchController({
  diffRefs,
  scrollContainerRef,
  setSelectedPathWithoutScroll,
}: ReviewSearchControllerProps) {
  const store = useStore(routeAtom) as AppScope & { value: unknown };
  const cwd = useAtomValue<string | null>(workspaceRootAtom);
  const hostId = useAtomValue<string>(reviewHostIdAtom);
  const hostConfig = useAtomValue<unknown>(reviewHostConfigAtom);
  const fileEntries = useAtomValue<SearchableFileEntry[]>(
    reviewSearchableFileEntriesAtom,
  );
  const isCappedMode = useAtomValue<boolean>(reviewCappedModeAtom);
  const repositorySource = useAtomValue<string | null>(
    reviewRepositorySourceAtom,
  );
  const baseBranch = useAtomValue<string | null>(reviewBaseBranchAtom);
  const commitSha = useAtomValue<string | null>(reviewCommitShaAtom);
  const reviewSummarySource = useAtomValue<string | null>(
    reviewSummarySourceAtom,
  );
  const gitMetadata = useAtomValue<{
    data?: { commonDir?: string | null; root?: string | null };
  }>(reviewGitMetadataQueryAtom);
  const gitPaths = useMemo(
    () => fileEntries.map((entry) => entry.gitPath),
    [fileEntries],
  );
  const {
    hasUnhandledAttributesFiles,
    isReady: generatedPathsReady,
    paths: generatedPaths,
  } = useReviewGeneratedPaths({
    cwd,
    gitCommonDir: gitMetadata.data?.commonDir ?? null,
    gitRoot: gitMetadata.data?.root ?? null,
    hostId,
    paths: gitPaths,
  });

  const fileEntriesRef = useRef(fileEntries);
  const hasUnhandledAttributesFilesRef = useRef(hasUnhandledAttributesFiles);
  const generatedPathsRef = useRef(generatedPaths);
  const generatedPathsReadyRef = useRef(generatedPathsReady);
  const isCappedModeRef = useRef(isCappedMode);
  const repositorySourceRef = useRef(repositorySource);
  const baseBranchRef = useRef(baseBranch);
  const commitShaRef = useRef(commitSha);
  const reviewSummarySourceRef = useRef(reviewSummarySource);
  const cwdRef = useRef(cwd);
  const hostConfigRef = useRef(hostConfig);
  const restoreScrollRef = useRef<(() => void) | null>(null);

  fileEntriesRef.current = fileEntries;
  hasUnhandledAttributesFilesRef.current = hasUnhandledAttributesFiles;
  generatedPathsRef.current = generatedPaths;
  generatedPathsReadyRef.current = generatedPathsReady;
  isCappedModeRef.current = isCappedMode;
  repositorySourceRef.current = repositorySource;
  baseBranchRef.current = baseBranch;
  commitShaRef.current = commitSha;
  reviewSummarySourceRef.current = reviewSummarySource;
  cwdRef.current = cwd;
  hostConfigRef.current = hostConfig;

  const contextId = `review:${reviewSummarySource ?? "unavailable"}`;

  const scrollAdapter = useMemo(
    () => ({
      scrollToFile: async (
        path: string,
        options?: { signal?: AbortSignal },
      ) => {
        if (options?.signal?.aborted) return;
        setReviewActivePath(store, path);
        setSelectedPathWithoutScroll(path);
        await waitForNextFrame();
        if (!options?.signal?.aborted) {
          findFileContainer({
            diffRefs,
            path,
            scrollContainerRef,
          })?.scrollIntoView({ behavior: "auto", block: "center" });
          await waitForNextFrame();
        }
      },
      getFileContainer: (path: string) =>
        findFileContainer({ diffRefs, path, scrollContainerRef }),
    }),
    [diffRefs, scrollContainerRef, store, setSelectedPathWithoutScroll],
  );

  const baseController = useMemo(
    () =>
      createDiffSearchController({
        contextId,
        getFiles: () =>
          collectSearchableFiles(
            fileEntriesRef.current,
            generatedPathsRef.current,
          ),
        scrollAdapter,
        preserveScrollBeforeResultClear: (location: {
          domain?: string;
          path: string;
        }) => {
          restoreScrollRef.current?.();
          restoreScrollRef.current = null;
          const restore = preserveScrollBeforeResultClear({
            diffRefs,
            location,
            scrollContainerRef,
          });
          if (restore != null) {
            restoreScrollRef.current = scheduleScrollRestore({
              restoreSearchScroll: restore,
            });
          }
        },
      }),
    [contextId, diffRefs, scrollAdapter, scrollContainerRef],
  );

  const controller = useMemo(
    () => ({
      ...baseController,
      async search(
        query: { contextId: string; query: string },
        options?: { signal?: AbortSignal },
      ) {
        const source = reviewSummarySourceRef.current;
        const repository = repositorySourceRef.current;
        const cwdValue = cwdRef.current;
        const entries = fileEntriesRef.current;
        return canSearchReviewLocally({
          cwd: cwdValue,
          fileEntries: entries,
          generatedPathsReady: generatedPathsReadyRef.current,
          hasUnhandledAttributesFiles: hasUnhandledAttributesFilesRef.current,
          isCappedMode: isCappedModeRef.current,
          repositorySource: repository,
          reviewSummarySource: source,
        }) ||
          cwdValue == null ||
          source == null
          ? baseController.search(query, options)
          : mapRemoteSearchResults(
              query,
              await getRpcClient("git").request({
                method: "review-search",
                params: {
                  cwd: workspaceRootToCwd(cwdValue),
                  hostConfig: hostConfigRef.current,
                  operationSource: "review_search",
                  query: query.query,
                  source,
                  ...(source === "branch" && baseBranchRef.current != null
                    ? { baseBranch: baseBranchRef.current }
                    : {}),
                  ...(source === "commit" && commitShaRef.current != null
                    ? { commitSha: commitShaRef.current }
                    : {}),
                },
                signal: options?.signal,
              }),
              entries,
            );
      },
    }),
    [baseController],
  );

  useEffect(() => {
    store.set(reviewSearchControllerAtom, controller);
    return () => {
      if (store.get(reviewSearchControllerAtom) === controller) {
        store.set(reviewSearchControllerAtom, null);
      }
    };
  }, [controller, store]);

  useEffect(
    () => () => {
      restoreScrollRef.current?.();
      restoreScrollRef.current = null;
    },
    [],
  );

  return <></>;
}
