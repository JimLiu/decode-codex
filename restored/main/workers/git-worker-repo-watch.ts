// Restored from ref/.vite/build/worker.js
// Git repository watch lifecycle, git-init watching, and read-cache invalidation hooks.

import { randomUUID } from "node:crypto";
import type { posix, win32 } from "node:path";
import { runGitCommand } from "./git-worker-commands";
import type {
  WorkerExecutionHostClient,
  WorkerExecutionHostWatch,
} from "./worker-execution-host-client";

type PathApi = typeof posix | typeof win32;
type GitRepoChangeType =
  | "config"
  | "head"
  | "index"
  | "remote-refs"
  | "synced-branch"
  | "working-tree";

type GitRepoWatcherOptions = {
  commonDir: string;
  emit(event: unknown): Promise<void> | void;
  host: WorkerExecutionHostClient;
  root: string;
};

type GitWatchTarget = {
  changeType: GitRepoChangeType;
  path: string;
  recursive: boolean;
  session: WorkerExecutionHostWatch | null;
  sessionStartPromise: Promise<void> | null;
  shouldHandleChangedPath(path: string): boolean;
  watchPath: string;
};

type WatchRecord = {
  commonDir: string;
  refCount: number;
  startPromise: Promise<void>;
  watcher: GitRepoWatcher;
};

type GitOperationState = {
  cherryPickInProgress: boolean | null;
  mergeInProgress: boolean | null;
  rebaseInProgress: boolean | null;
  revertInProgress: boolean | null;
};

const repoChangeDebounceMs = 1_000;
const maxPendingWorkingTreePaths = 64;

export class GitWorkerRepoWatchManager {
  private gitInitWatch: {
    key: string;
    watcher: GitInitDirectoryWatcher;
  } | null = null;
  private readonly watchesByKey = new Map<string, WatchRecord>();

  constructor(private readonly options: { emit(event: unknown): void }) {}

  async resolveStableMetadataWatchState({
    cwd,
    host,
    metadata,
    watchForGitInit,
  }: {
    cwd: string;
    host: WorkerExecutionHostClient;
    metadata: { commonDir: string; root: string } | null;
    watchForGitInit: boolean | null;
  }): Promise<void> {
    if (metadata == null) {
      if (watchForGitInit === true)
        await this.ensureWatchingForGitInit(cwd, host);
      else if (watchForGitInit === false) this.disposeGitInitWatcher(cwd, host);
      return;
    }
    if (watchForGitInit != null) this.disposeGitInitWatcher(cwd, host);
  }

  invalidateStableMetadata(): void {
    // Stable metadata is currently resolved directly; this hook preserves the worker API.
  }

  async invalidateGitReadCaches({
    host,
    paths,
  }: {
    clearUntrackedPathsCache: boolean;
    host: WorkerExecutionHostClient;
    paths: string[] | null;
    root: string;
  }): Promise<void> {
    if (paths != null) await host.platformPath();
  }

  async ensureWatching({
    commonDir,
    host,
    root,
  }: {
    commonDir: string;
    host: WorkerExecutionHostClient;
    root: string;
  }): Promise<void> {
    const key = this.getWatchKey(root, host);
    const existing = this.watchesByKey.get(key);
    if (existing != null) {
      existing.refCount += 1;
      const startPromise = existing.startPromise;
      await startPromise;
      if (existing.refCount <= 0 || this.watchesByKey.get(key) !== existing) {
        return;
      }
      if (existing.startPromise !== startPromise) {
        await existing.startPromise;
        return;
      }
      existing.startPromise = existing.watcher.start();
      await existing.startPromise;
      return;
    }

    const watcher = new GitRepoWatcher({
      commonDir,
      emit: (event) => this.handleRepoWatcherEvent(event, host),
      host,
      root,
    });
    const record: WatchRecord = {
      commonDir,
      refCount: 1,
      startPromise: watcher.start(),
      watcher,
    };
    this.watchesByKey.set(key, record);
    try {
      await record.startPromise;
    } catch (error) {
      if (this.watchesByKey.get(key) === record) {
        watcher.dispose();
        this.watchesByKey.delete(key);
      }
      throw error;
    }
    if (record.refCount <= 0 || this.watchesByKey.get(key) !== record) {
      watcher.dispose();
      if (this.watchesByKey.get(key) === record) this.watchesByKey.delete(key);
    }
  }

  async ensureWatchingForGitInit(
    cwd: string,
    host: WorkerExecutionHostClient,
  ): Promise<void> {
    const key = this.getGitInitWatchKey(cwd, host);
    if (this.gitInitWatch?.key === key) return;
    this.disposeGitInitWatcher();
    const watcher = new GitInitDirectoryWatcher({
      cwd,
      host,
      onGitInit: () => {
        this.handleGitInit(cwd, host, watcher).catch(() => {});
      },
    });
    this.gitInitWatch = { key, watcher };
    const started = await watcher.start();
    if (!started && this.gitInitWatch?.watcher === watcher) {
      this.gitInitWatch = null;
      watcher.dispose();
    }
  }

  disposeGitInitWatcher(cwd?: string, host?: WorkerExecutionHostClient): void {
    if (
      cwd != null &&
      host != null &&
      this.gitInitWatch?.key !== this.getGitInitWatchKey(cwd, host)
    ) {
      return;
    }
    this.gitInitWatch?.watcher.dispose();
    this.gitInitWatch = null;
  }

  unwatchRepo(root: string, host: WorkerExecutionHostClient): void {
    const key = this.getWatchKey(root, host);
    const record = this.watchesByKey.get(key);
    if (record == null) return;
    record.refCount -= 1;
    if (record.refCount > 0) return;

    const disposeIfStillUnused = (): void => {
      if (record.refCount > 0 || this.watchesByKey.get(key) !== record) return;
      record.watcher.dispose();
      this.watchesByKey.delete(key);
      this.options.emit({
        type: "git-repo-unwatched",
        commonDir: record.commonDir,
        hostId: host.id,
        root,
      });
    };
    record.startPromise.then(disposeIfStillUnused, disposeIfStillUnused);
  }

  private async handleGitInit(
    cwd: string,
    host: WorkerExecutionHostClient,
    watcher: GitInitDirectoryWatcher,
  ): Promise<void> {
    if (this.gitInitWatch?.watcher === watcher) this.gitInitWatch = null;
    const metadata = await readStableMetadataWithoutWatch(cwd, host);
    if (metadata == null) {
      await this.ensureWatchingForGitInit(cwd, host);
      return;
    }
    await this.ensureWatching({
      commonDir: metadata.commonDir,
      host,
      root: metadata.root,
    });
    this.options.emit({
      type: "git-repo-changed",
      changeType: "head",
      commonDir: metadata.commonDir,
      cwd,
      hostId: host.id,
      rebaseInProgress: null,
      root: metadata.root,
    });
  }

  private handleRepoWatcherEvent(
    event: unknown,
    _host: WorkerExecutionHostClient,
  ): void {
    this.options.emit(event);
  }

  private getWatchKey(root: string, host: WorkerExecutionHostClient): string {
    return `${host.id}|${root}`;
  }

  private getGitInitWatchKey(
    cwd: string,
    host: WorkerExecutionHostClient,
  ): string {
    return `${host.id}|${cwd}`;
  }
}

class GitInitDirectoryWatcher {
  private checkTimer: ReturnType<typeof setTimeout> | null = null;
  private disposed = false;
  private session: WorkerExecutionHostWatch | null = null;

  constructor(
    private readonly options: {
      cwd: string;
      host: WorkerExecutionHostClient;
      onGitInit(): void;
    },
  ) {}

  async start(): Promise<boolean> {
    let gitDirPath: string;
    try {
      const pathApi = await this.options.host.platformPath();
      gitDirPath = pathApi.join(this.options.cwd, ".git");
      const session = await this.options.host.startFileWatch({
        path: this.options.cwd,
        recursive: false,
        watchId: `git-init-${randomUUID()}`,
        onChange: ({ changedPaths }) => {
          const paths = normalizeChangedPaths(changedPaths);
          if (paths.length === 0 || paths.includes(gitDirPath)) {
            this.scheduleGitDirectoryCheck(gitDirPath);
          }
        },
      });
      if (this.disposed) {
        await session.dispose();
        return false;
      }
      this.session = session;
      session.closed.then((event) => {
        if (this.session !== session) return;
        this.session = null;
        if (event.reason === "watch-error")
          this.scheduleGitDirectoryCheck(gitDirPath);
      });
    } catch {
      return false;
    }
    await this.checkForGitDirectory(gitDirPath);
    return !this.disposed && this.session != null;
  }

  dispose(): void {
    this.disposed = true;
    if (this.checkTimer != null) clearTimeout(this.checkTimer);
    this.checkTimer = null;
    const session = this.session;
    this.session = null;
    void session?.dispose();
  }

  private scheduleGitDirectoryCheck(gitDirPath: string): void {
    if (this.checkTimer != null) clearTimeout(this.checkTimer);
    this.checkTimer = setTimeout(() => {
      this.checkTimer = null;
      void this.checkForGitDirectory(gitDirPath);
    }, 250);
  }

  private async checkForGitDirectory(gitDirPath: string): Promise<void> {
    if (this.disposed) return;
    try {
      await this.options.host.stat(gitDirPath, { bypassCache: true });
    } catch {
      return;
    }
    if (this.disposed) return;
    this.dispose();
    this.options.onGitInit();
  }
}

class GitRepoWatcher {
  private readonly activeChangeEmissions = new Set<GitRepoChangeType>();
  private readonly changeTimers = new Map<
    GitRepoChangeType,
    ReturnType<typeof setTimeout>
  >();
  private disposed = false;
  private gitDir: string | null = null;
  private pathApi: PathApi | null = null;
  private pendingWorkingTreePaths: Set<string> | null = new Set();
  private readonly pendingChangeCounts: Record<GitRepoChangeType, number> = {
    config: 0,
    head: 0,
    index: 0,
    "remote-refs": 0,
    "synced-branch": 0,
    "working-tree": 0,
  };
  private readonly watchTargets: GitWatchTarget[] = [];

  constructor(private readonly options: GitRepoWatcherOptions) {}

  async start(): Promise<void> {
    if (this.watchTargets.length > 0) {
      await this.retryInactiveWatchTargets();
      return;
    }

    const pathApi = await this.options.host.platformPath();
    this.pathApi = pathApi;
    const [headPath, indexPath, syncedBranchPath, gitDir] = await Promise.all([
      readGitPath(this.options.root, "HEAD", this.options.host),
      readGitPath(this.options.root, "index", this.options.host),
      readGitPath(
        this.options.root,
        "codex-synced-branch.json",
        this.options.host,
      ),
      readGitDir(this.options.root, this.options.host),
    ]);
    this.gitDir = gitDir;

    await this.tryWatch(pathApi, headPath, "head");
    await this.tryWatch(pathApi, indexPath, "index");
    await this.tryWatch(
      pathApi,
      pathApi.join(this.options.commonDir, "FETCH_HEAD"),
      "remote-refs",
    );
    await this.tryWatch(
      pathApi,
      pathApi.join(this.options.commonDir, "packed-refs"),
      "remote-refs",
    );

    const headsDir = pathApi.join(this.options.commonDir, "refs", "heads");
    await this.tryWatchDirectory(headsDir, "head", (changedPath) =>
      isPathInside(pathApi, headsDir, changedPath),
    );
    await this.tryWatch(
      pathApi,
      pathApi.join(this.options.commonDir, "config"),
      "config",
    );
    if (gitDir != null) {
      await this.tryWatch(
        pathApi,
        pathApi.join(gitDir, "config.worktree"),
        "config",
      );
    }
    await this.tryWatch(pathApi, syncedBranchPath, "synced-branch");
    await this.tryWatchDirectory(
      this.options.root,
      "working-tree",
      (changedPath) => !this.isGitInternalPath(pathApi, changedPath),
    );
  }

  dispose(): void {
    this.disposed = true;
    for (const target of this.watchTargets) this.disposeSession(target);
    this.watchTargets.length = 0;
    for (const timer of this.changeTimers.values()) clearTimeout(timer);
    this.changeTimers.clear();
  }

  private async retryInactiveWatchTargets(): Promise<void> {
    await Promise.all(
      this.watchTargets.map(async (target) => {
        if (target.session == null)
          await this.tryStartWatchSession(target, false);
      }),
    );
  }

  private async tryWatch(
    pathApi: PathApi,
    path: string | null,
    changeType: GitRepoChangeType,
  ): Promise<void> {
    if (path == null) return;
    const target: GitWatchTarget = {
      changeType,
      path,
      recursive: false,
      session: null,
      sessionStartPromise: null,
      shouldHandleChangedPath: (changedPath) => changedPath === path,
      watchPath: pathApi.dirname(path),
    };
    this.watchTargets.push(target);
    await this.tryStartWatchSession(target, false);
  }

  private async tryWatchDirectory(
    path: string,
    changeType: GitRepoChangeType,
    shouldHandleChangedPath: (path: string) => boolean,
  ): Promise<void> {
    const target: GitWatchTarget = {
      changeType,
      path,
      recursive: true,
      session: null,
      sessionStartPromise: null,
      shouldHandleChangedPath,
      watchPath: path,
    };
    this.watchTargets.push(target);
    await this.tryStartWatchSession(target, false);
  }

  private async tryStartWatchSession(
    target: GitWatchTarget,
    retryOnFailure: boolean,
  ): Promise<void> {
    if (target.sessionStartPromise != null) {
      await target.sessionStartPromise;
      if (!this.disposed && retryOnFailure && target.session == null) {
        this.scheduleWatchSessionRetry(target);
      }
      return;
    }
    const promise = this.startWatchSession(target, retryOnFailure);
    target.sessionStartPromise = promise;
    try {
      await promise;
    } finally {
      if (target.sessionStartPromise === promise)
        target.sessionStartPromise = null;
    }
  }

  private async startWatchSession(
    target: GitWatchTarget,
    retryOnFailure: boolean,
  ): Promise<void> {
    try {
      const session = await this.options.host.startFileWatch({
        path: target.watchPath,
        recursive: target.recursive,
        watchId: `git-repo-${randomUUID()}`,
        onChange: ({ changedPaths }) => {
          const changedPathList = normalizeChangedPaths(changedPaths);
          const handledPaths = changedPathList.filter((path) =>
            target.shouldHandleChangedPath(path),
          );
          if (changedPathList.length > 0 && handledPaths.length === 0) return;
          this.handleFileWatchEvent(
            target,
            changedPathList.length === 0 ? undefined : handledPaths,
          );
        },
      });
      if (this.disposed || !this.watchTargets.includes(target)) {
        await session.dispose();
        return;
      }
      target.session = session;
      session.closed.then(() => {
        if (this.disposed || target.session !== session) return;
        target.session = null;
        void this.tryStartWatchSession(target, true);
      });
    } catch {
      if (!retryOnFailure || this.disposed) return;
      this.scheduleWatchSessionRetry(target);
    }
  }

  private scheduleWatchSessionRetry(target: GitWatchTarget): void {
    setTimeout(() => {
      if (!this.disposed && target.session == null) {
        void this.tryStartWatchSession(target, true);
      }
    }, 1_000);
  }

  private handleFileWatchEvent(
    target: GitWatchTarget,
    changedPaths: string[] | undefined,
  ): void {
    this.pendingChangeCounts[target.changeType] += 1;
    if (target.changeType === "working-tree") {
      if (changedPaths == null) this.pendingWorkingTreePaths = null;
      else if (this.pendingWorkingTreePaths != null) {
        for (const changedPath of changedPaths) {
          this.addPendingWorkingTreePath(changedPath);
          if (this.pendingWorkingTreePaths == null) break;
        }
      }
    }
    this.scheduleRepoChanged(target.changeType);
  }

  private addPendingWorkingTreePath(changedPath: string): void {
    const pendingPaths = this.pendingWorkingTreePaths;
    const pathApi = this.pathApi;
    if (pendingPaths == null) return;
    if (
      pathApi != null &&
      [...pendingPaths].some((path) => isPathInside(pathApi, path, changedPath))
    ) {
      return;
    }
    if (pathApi != null) {
      for (const path of pendingPaths) {
        if (isPathInside(pathApi, changedPath, path)) pendingPaths.delete(path);
      }
    }
    pendingPaths.add(changedPath);
    if (pendingPaths.size <= maxPendingWorkingTreePaths) return;
    if (pathApi == null) {
      this.pendingWorkingTreePaths = null;
      return;
    }

    const topLevelPaths = new Set<string>();
    for (const path of pendingPaths) {
      const relativePath = pathApi.relative(this.options.root, path);
      if (
        relativePath === "" ||
        relativePath === ".." ||
        relativePath.startsWith(`..${pathApi.sep}`) ||
        pathApi.isAbsolute(relativePath)
      ) {
        this.pendingWorkingTreePaths = null;
        return;
      }
      topLevelPaths.add(
        pathApi.join(this.options.root, relativePath.split(pathApi.sep, 1)[0]),
      );
      if (topLevelPaths.size > maxPendingWorkingTreePaths) {
        this.pendingWorkingTreePaths = null;
        return;
      }
    }
    this.pendingWorkingTreePaths = topLevelPaths;
  }

  private scheduleRepoChanged(changeType: GitRepoChangeType): void {
    if (
      this.disposed ||
      this.activeChangeEmissions.has(changeType) ||
      this.changeTimers.has(changeType)
    ) {
      return;
    }
    this.changeTimers.set(
      changeType,
      setTimeout(() => {
        this.changeTimers.delete(changeType);
        void this.emitRepoChanged(changeType);
      }, repoChangeDebounceMs),
    );
  }

  private async emitRepoChanged(changeType: GitRepoChangeType): Promise<void> {
    this.activeChangeEmissions.add(changeType);
    const rawEventCount = this.pendingChangeCounts[changeType];
    this.pendingChangeCounts[changeType] = 0;
    const changedPaths =
      changeType === "working-tree" && this.pendingWorkingTreePaths != null
        ? [...this.pendingWorkingTreePaths]
        : null;
    if (changeType === "working-tree") this.pendingWorkingTreePaths = new Set();
    try {
      const operationState = await this.getGitOperationState();
      void rawEventCount;
      await this.options.emit({
        type: "git-repo-changed",
        changeType,
        commonDir: this.options.commonDir,
        hostId: this.options.host.id,
        rebaseInProgress: operationState.rebaseInProgress,
        root: this.options.root,
        ...(changedPaths == null ? {} : { changedPaths }),
      });
    } finally {
      this.activeChangeEmissions.delete(changeType);
      if (this.pendingChangeCounts[changeType] > 0) {
        this.scheduleRepoChanged(changeType);
      }
    }
  }

  private async getGitOperationState(): Promise<GitOperationState> {
    const pathApi = this.pathApi;
    const gitDir = this.gitDir;
    if (pathApi == null || gitDir == null) {
      return {
        cherryPickInProgress: null,
        mergeInProgress: null,
        rebaseInProgress: null,
        revertInProgress: null,
      };
    }

    const [
      cherryPickInProgress,
      mergeInProgress,
      rebaseHeadInProgress,
      rebaseMergeInProgress,
      rebaseApplyInProgress,
      revertInProgress,
    ] = await Promise.all([
      this.gitPathExists(pathApi.join(gitDir, "CHERRY_PICK_HEAD")),
      this.gitPathExists(pathApi.join(gitDir, "MERGE_HEAD")),
      this.gitPathExists(pathApi.join(gitDir, "REBASE_HEAD")),
      this.gitPathExists(pathApi.join(gitDir, "rebase-merge")),
      this.gitPathExists(pathApi.join(gitDir, "rebase-apply")),
      this.gitPathExists(pathApi.join(gitDir, "REVERT_HEAD")),
    ]);
    return {
      cherryPickInProgress,
      mergeInProgress,
      rebaseInProgress: combineNullableBooleans([
        rebaseHeadInProgress,
        rebaseMergeInProgress,
        rebaseApplyInProgress,
      ]),
      revertInProgress,
    };
  }

  private async gitPathExists(path: string): Promise<boolean | null> {
    try {
      await this.options.host.stat(path);
      return true;
    } catch (error) {
      return isMissingPathError(error) ? false : null;
    }
  }

  private isGitInternalPath(pathApi: PathApi, path: string): boolean {
    return (
      isPathInside(pathApi, this.options.commonDir, path) ||
      isPathInside(pathApi, pathApi.join(this.options.root, ".git"), path)
    );
  }

  private disposeSession(target: GitWatchTarget): void {
    const session = target.session;
    target.session = null;
    target.sessionStartPromise = null;
    void session?.dispose();
  }
}

async function readStableMetadataWithoutWatch(
  cwd: string,
  host: WorkerExecutionHostClient,
): Promise<{ commonDir: string; root: string } | null> {
  const root = await readGitRoot(cwd, host);
  if (root == null) return null;
  const commonDir = await readGitCommonDir(root, host);
  return commonDir == null ? null : { commonDir, root };
}

async function readGitRoot(
  cwd: string,
  host: WorkerExecutionHostClient,
): Promise<string | null> {
  const result = await runGitCommand({
    allowedNonZeroExitCodes: [128],
    args: ["rev-parse", "--show-toplevel"],
    cwd,
    host,
  });
  return result.success && result.stdout ? result.stdout : null;
}

async function readGitCommonDir(
  root: string,
  host: WorkerExecutionHostClient,
): Promise<string | null> {
  const result = await runGitCommand({
    args: ["rev-parse", "--git-common-dir"],
    cwd: root,
    host,
  });
  if (!result.success || !result.stdout) return null;
  const pathApi = await host.platformPath();
  return pathApi.isAbsolute(result.stdout)
    ? result.stdout
    : pathApi.resolve(root, result.stdout);
}

async function readGitDir(
  root: string,
  host: WorkerExecutionHostClient,
): Promise<string | null> {
  const result = await runGitCommand({
    args: ["rev-parse", "--git-dir"],
    cwd: root,
    host,
  });
  if (!result.success || !result.stdout) return null;
  const pathApi = await host.platformPath();
  return pathApi.isAbsolute(result.stdout)
    ? result.stdout
    : pathApi.join(root, result.stdout);
}

async function readGitPath(
  root: string,
  path: string,
  host: WorkerExecutionHostClient,
): Promise<string | null> {
  const result = await runGitCommand({
    args: ["rev-parse", "--git-path", path],
    cwd: root,
    host,
  });
  if (!result.success || !result.stdout) return null;
  const pathApi = await host.platformPath();
  if (pathApi.isAbsolute(result.stdout)) return result.stdout;
  if (result.stdout.startsWith(".git/"))
    return pathApi.join(root, result.stdout);
  const gitDir = await readGitDir(root, host);
  return gitDir == null ? null : pathApi.join(gitDir, result.stdout);
}

function normalizeChangedPaths(value: unknown): string[] {
  return Array.isArray(value)
    ? value.filter((path): path is string => typeof path === "string")
    : [];
}

function isPathInside(
  pathApi: PathApi,
  parent: string,
  candidate: string,
): boolean {
  const relative = pathApi.relative(parent, candidate);
  return (
    relative === "" ||
    (relative !== ".." &&
      !relative.startsWith(`..${pathApi.sep}`) &&
      !pathApi.isAbsolute(relative))
  );
}

function combineNullableBooleans(
  values: Array<boolean | null>,
): boolean | null {
  if (values.some((value) => value === true)) return true;
  if (values.some((value) => value == null)) return null;
  return false;
}

function isMissingPathError(error: unknown): boolean {
  if (
    typeof error === "object" &&
    error != null &&
    "code" in error &&
    error.code === "ENOENT"
  ) {
    return true;
  }
  const message = error instanceof Error ? error.message : String(error);
  return (
    message.includes("ENOENT") ||
    message.includes("No such file") ||
    message.includes("not found")
  );
}
