// Restored from ref/.vite/build/worker.js
// Initializes a workspace Git repository from the worker request surface.

import { runGitCommand } from "./git-worker-commands";
import type { WorkerExecutionHostClient } from "./worker-execution-host-client";

type GitInitRepoResult = {
  success: true;
};

export async function initializeGitRepository({
  cwd,
  host,
  signal,
}: {
  cwd: string;
  host: WorkerExecutionHostClient;
  signal: AbortSignal;
}): Promise<GitInitRepoResult> {
  const root = cwd.trim();
  if (!root) throw Error("Workspace root is required");

  const result = await runGitCommand({
    args: ["init"],
    cwd: root,
    host,
    signal,
  });
  if (!result.success) {
    throw Error(result.stderr || result.stdout || "Failed to run git init");
  }

  return { success: true };
}
