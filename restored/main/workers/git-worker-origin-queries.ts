// Restored from ref/.vite/build/worker.js
// Read-only Git origin and root metadata queries.

import { runGitCommand } from "./git-worker-commands";
import { readStableMetadata } from "./git-worker-repo-queries";
import type { WorkerExecutionHostClient } from "./worker-execution-host-client";

export async function readGitOrigins({
  dirs,
  host,
  signal,
}: {
  dirs: string[];
  host: WorkerExecutionHostClient;
  signal: AbortSignal;
}): Promise<
  Array<{
    commonDir: string | null;
    dir: string;
    originUrl: string | null;
    root: string;
  }>
> {
  return Promise.all(
    uniquePaths(dirs).map(async (dir) => {
      try {
        const metadata = await readStableMetadata({ cwd: dir, host, signal });
        if (metadata == null) {
          return {
            commonDir: null,
            dir,
            originUrl: null,
            root: dir,
          };
        }
        return {
          commonDir: metadata.commonDir,
          dir,
          originUrl: await readOriginUrl(metadata.commonDir, host, signal),
          root: metadata.root,
        };
      } catch {
        return {
          commonDir: null,
          dir,
          originUrl: null,
          root: dir,
        };
      }
    }),
  );
}

async function readOriginUrl(
  commonDir: string,
  host: WorkerExecutionHostClient,
  signal: AbortSignal,
): Promise<string | null> {
  const result = await runGitCommand({
    args: ["config", "--get", "remote.origin.url"],
    cwd: commonDir,
    host,
    signal,
  });
  return result.success && result.stdout ? result.stdout : null;
}

function uniquePaths(paths: string[]): string[] {
  const seen = new Set<string>();
  const unique: string[] = [];
  for (const path of paths) {
    const trimmed = path.trim();
    if (!trimmed || seen.has(trimmed)) continue;
    seen.add(trimmed);
    unique.push(trimmed);
  }
  return unique;
}
