// Restored from ref/webview/assets/permission-request-model-DtxJl8qA.js
// Permission request model restored from the current Codex webview bundle.
type FileSystemSpecialPath =
  | { kind: "root" }
  | { kind: "minimal" }
  | { kind: "project_roots"; subpath?: string | null }
  | { kind: "tmpdir" }
  | { kind: "slash_tmp" }
  | { kind: "unknown"; path: string; subpath?: string | null };

type FileSystemPermissionPath =
  | { type: "path"; path: string }
  | { type: "glob_pattern"; pattern: string }
  | { type: "special"; value: FileSystemSpecialPath };

type FileSystemPermissionEntry = {
  access: "read" | "write" | "deny";
  path: FileSystemPermissionPath;
};

type FileSystemPermissionRequest = {
  entries?: FileSystemPermissionEntry[] | null;
  read?: string[] | null;
  write?: string[] | null;
};

type PermissionRequest = {
  network?: unknown;
  fileSystem?: FileSystemPermissionRequest | null;
};

type PermissionModel =
  | { kind: "network" }
  | {
      kind: "fileSystem";
      access: "read" | "write" | "readWrite";
      paths: string[];
    };

export function permissionRequestModel(
  request: PermissionRequest,
): PermissionModel[] {
  const permissions: PermissionModel[] = [];
  if (request.network != null) {
    permissions.push({ kind: "network" });
  }
  if (request.fileSystem == null) {
    return permissions;
  }

  const readPaths = new Set<string>();
  const writePaths = new Set<string>();
  const fileSystem = request.fileSystem;

  if (fileSystem.entries != null) {
    for (const entry of fileSystem.entries) {
      const path = formatFileSystemPermissionPath(entry.path);
      switch (entry.access) {
        case "read":
          readPaths.add(path);
          break;
        case "write":
          writePaths.add(path);
          break;
        case "deny":
          break;
      }
    }
  } else {
    for (const path of fileSystem.read ?? []) {
      readPaths.add(path);
    }
    for (const path of fileSystem.write ?? []) {
      writePaths.add(path);
    }
  }

  const readablePaths = Array.from(readPaths);
  const writablePaths = Array.from(writePaths);
  const readWritePaths = readablePaths.filter((path) => writePaths.has(path));
  const readOnlyPaths = readablePaths.filter((path) => !writePaths.has(path));
  const writeOnlyPaths = writablePaths.filter((path) => !readPaths.has(path));

  if (readWritePaths.length > 0) {
    permissions.push({
      kind: "fileSystem",
      access: "readWrite",
      paths: readWritePaths,
    });
  }
  if (readOnlyPaths.length > 0) {
    permissions.push({
      kind: "fileSystem",
      access: "read",
      paths: readOnlyPaths,
    });
  }
  if (writeOnlyPaths.length > 0) {
    permissions.push({
      kind: "fileSystem",
      access: "write",
      paths: writeOnlyPaths,
    });
  }
  return permissions;
}

function formatFileSystemPermissionPath(
  path: FileSystemPermissionPath,
): string {
  switch (path.type) {
    case "path":
      return path.path;
    case "glob_pattern":
      return path.pattern;
    case "special":
      return formatSpecialPath(path.value);
  }
}

export function initPermissionRequestModelChunk(): void {}

function formatSpecialPath(path: FileSystemSpecialPath): string {
  switch (path.kind) {
    case "root":
      return "/";
    case "minimal":
      return ":minimal";
    case "project_roots":
      return path.subpath == null
        ? ":project_roots"
        : `:project_roots/${path.subpath}`;
    case "tmpdir":
      return ":tmpdir";
    case "slash_tmp":
      return "/tmp";
    case "unknown":
      return path.subpath == null ? path.path : `${path.path}/${path.subpath}`;
  }
}
