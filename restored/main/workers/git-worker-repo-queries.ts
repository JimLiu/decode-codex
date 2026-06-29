// Restored from ref/.vite/build/worker.js
// Stable Git repository metadata resolver.

import { runGitCommand } from "./git-worker-commands";
import type { WorkerExecutionHostClient } from "./worker-execution-host-client";

type StableGitMetadata = {
  commonDir: string;
  root: string;
};

export async function readStableMetadata({
  cwd,
  host,
  signal,
}: {
  cwd: string;
  host: WorkerExecutionHostClient;
  signal: AbortSignal;
}): Promise<StableGitMetadata | null> {
  const root = await readStableRoot(cwd, host, signal);
  if (root == null) return null;
  const commonDir = await readGitCommonDir(root, host, signal);
  return commonDir == null ? null : { commonDir, root };
}

async function readStableRoot(
  cwd: string,
  host: WorkerExecutionHostClient,
  signal: AbortSignal,
): Promise<string | null> {
  const result = await runGitCommand({
    allowedNonZeroExitCodes: [128],
    args: ["rev-parse", "--show-toplevel"],
    cwd,
    host,
    signal,
  });
  if (result.success && result.stdout) return result.stdout;
  if (
    isNotGitRepositoryError(result.stderr) ||
    isMissingPathText(result.stderr)
  ) {
    return null;
  }
  if (result.stderr === "Git is unavailable") return null;
  throw Error(
    `Failed to resolve git root: ${
      result.stderr || result.stdout || "Unknown error"
    }`,
  );
}

async function readGitCommonDir(
  root: string,
  host: WorkerExecutionHostClient,
  signal: AbortSignal,
): Promise<string | null> {
  const result = await runGitCommand({
    args: ["rev-parse", "--git-common-dir"],
    cwd: root,
    host,
    signal,
  });
  if (result.success && result.stdout) {
    const pathApi = await host.platformPath();
    return pathApi.isAbsolute(result.stdout)
      ? result.stdout
      : pathApi.resolve(root, result.stdout);
  }
  if (isNotGitRepositoryError(result.stderr)) return null;
  throw Error(
    `Failed to resolve git common dir: ${
      result.stderr || result.stdout || "Unknown error"
    }`,
  );
}

function isNotGitRepositoryError(stderr: string): boolean {
  return stderr.toLowerCase().includes("not a git repository");
}

function isMissingPathText(value: string): boolean {
  return (
    value.includes("ENOENT") ||
    value.includes("No such file") ||
    value.includes("cannot open") ||
    value.includes("not found")
  );
}
