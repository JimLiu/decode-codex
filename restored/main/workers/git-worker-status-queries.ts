// Restored from ref/.vite/build/worker.js
// Read-only Git status summary and index metadata queries.

import { runGitCommand } from "./git-worker-commands";
import { readStableMetadata } from "./git-worker-repo-queries";
import type { WorkerExecutionHostClient } from "./worker-execution-host-client";

type StatusSummary =
  | {
      type: "success";
      stagedCount: number;
      unstagedCount: number;
      untrackedCount: number;
    }
  | { type: "error" };

export async function readStatusSummary({
  cwd,
  host,
  signal,
}: {
  cwd: string;
  host: WorkerExecutionHostClient;
  signal: AbortSignal;
}): Promise<StatusSummary> {
  const metadata = await readStableMetadata({ cwd, host, signal });
  if (metadata == null) return { type: "error" };

  const result = await runGitCommand({
    args: ["status", "--porcelain=v1", "-z"],
    cwd: metadata.root,
    host,
    signal,
    trim: false,
  });
  if (!result.success) return { type: "error" };
  return parseStatusSummary(result.stdout);
}

export async function readIndexInfo({
  cwd,
  host,
  signal,
}: {
  cwd: string;
  host: WorkerExecutionHostClient;
  signal: AbortSignal;
}): Promise<{ lastModified: number }> {
  const metadata = await readStableMetadata({ cwd, host, signal });
  if (metadata == null) return { lastModified: 0 };

  const gitDir = await readGitDir(metadata.root, host, signal);
  if (gitDir == null) return { lastModified: 0 };
  const pathApi = await host.platformPath();
  try {
    const stat = await host.stat(pathApi.join(gitDir, "index"));
    return {
      lastModified:
        typeof stat.mtimeMs === "number" && Number.isFinite(stat.mtimeMs)
          ? stat.mtimeMs
          : 0,
    };
  } catch {
    return { lastModified: 0 };
  }
}

async function readGitDir(
  root: string,
  host: WorkerExecutionHostClient,
  signal: AbortSignal,
): Promise<string | null> {
  const result = await runGitCommand({
    args: ["rev-parse", "--git-dir"],
    cwd: root,
    host,
    signal,
  });
  if (!result.success || !result.stdout) return null;
  const pathApi = await host.platformPath();
  return pathApi.isAbsolute(result.stdout)
    ? result.stdout
    : pathApi.join(root, result.stdout);
}

function parseStatusSummary(stdout: string): StatusSummary {
  let stagedCount = 0;
  let unstagedCount = 0;
  let untrackedCount = 0;
  let offset = 0;
  while (offset < stdout.length && offset + 1 < stdout.length) {
    const indexStatus = stdout[offset];
    const worktreeStatus = stdout[offset + 1];
    if (indexStatus === "?" && worktreeStatus === "?") {
      untrackedCount += 1;
    } else {
      if (indexStatus !== " ") stagedCount += 1;
      if (worktreeStatus !== " ") unstagedCount += 1;
    }

    const pathEnd = stdout.indexOf("\0", offset);
    if (pathEnd === -1) break;
    offset = pathEnd + 1;
    if (
      indexStatus === "R" ||
      indexStatus === "C" ||
      worktreeStatus === "R" ||
      worktreeStatus === "C"
    ) {
      const secondPathEnd = stdout.indexOf("\0", offset);
      if (secondPathEnd === -1) break;
      offset = secondPathEnd + 1;
    }
  }
  return { type: "success", stagedCount, unstagedCount, untrackedCount };
}
