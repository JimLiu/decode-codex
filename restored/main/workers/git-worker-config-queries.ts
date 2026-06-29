// Restored from ref/.vite/build/worker.js
// Read-only Git config and submodule queries.

import { runGitCommand } from "./git-worker-commands";
import type { WorkerExecutionHostClient } from "./worker-execution-host-client";

export async function readConfigValueForScope({
  host,
  key,
  root,
  scope,
  signal,
}: {
  host: WorkerExecutionHostClient;
  key: string;
  root: string;
  scope: string | null;
  signal: AbortSignal;
}): Promise<string | null> {
  const result = await runGitCommand({
    args: [
      "config",
      scope === "local" ? "--local" : "--worktree",
      "--get",
      key,
    ],
    cwd: root,
    host,
    signal,
  });
  return result.success && result.stdout ? result.stdout : null;
}

export async function readSubmodulePaths({
  host,
  root,
  signal,
}: {
  host: WorkerExecutionHostClient;
  root: string;
  signal: AbortSignal;
}): Promise<string[]> {
  const result = await runGitCommand({
    allowedNonZeroExitCodes: [1],
    args: ["config", "--file", ".gitmodules", "--get-regexp", "path"],
    cwd: root,
    host,
    signal,
  });
  if (!result.success || !result.stdout) return [];
  const paths = result.stdout
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .map((line) => line.split(/\s+/).at(-1)?.trim() ?? "")
    .filter((path) => path.length > 0);
  return Array.from(new Set(paths));
}
