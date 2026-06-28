// Restored from ref/webview/assets/get-file-icon-CWBPd1m7.js
// get-file-icon-CWBPd1m7 chunk restored from the Codex webview bundle.
import type { ComponentType, SVGProps } from "react";
import { MimeTypes } from "../mime-types";
import fileTypeIcons from "./file-type-icons";
type FileIconComponent = ComponentType<SVGProps<SVGSVGElement>>;
const mimeTypes = MimeTypes();
const FILE_ICON_COMPONENTS: Record<string, FileIconComponent> = fileTypeIcons;
const DocumentTextIcon = FILE_ICON_COMPONENTS.document;
const ImageFileIcon = FILE_ICON_COMPONENTS.image;
const FILE_NAME_ICON_KEYS: Record<string, string> = {
  "skill.md": "skill",
};
const EXTENSION_ICON_KEYS: Record<string, string> = Object.fromEntries(
  [
    {
      key: "typescript",
      extensions: ["ts"],
    },
    {
      key: "react",
      extensions: ["tsx", "jsx"],
    },
    {
      key: "javascript",
      extensions: ["js", "mjs", "cjs", "hs"],
    },
    {
      key: "python",
      extensions: ["py"],
    },
    {
      key: "java",
      extensions: ["java"],
    },
    {
      key: "rust",
      extensions: ["rs"],
    },
    {
      key: "php",
      extensions: ["php"],
    },
    {
      key: "css",
      extensions: ["css", "scss", "less", "sass"],
    },
    {
      key: "cplusplus",
      extensions: ["cpp", "cxx", "cc", "c", "hpp", "hh", "h"],
    },
    {
      key: "code",
      extensions: ["rb", "go", "kt", "swift", "m", "mm", "cs", "sql"],
    },
    {
      key: "json",
      extensions: ["json", "jsonc"],
    },
    {
      key: "document",
      extensions: ["md", "mdx", "markdown", "mkd", "mdown"],
    },
    {
      key: "html",
      extensions: ["html", "htm"],
    },
    {
      key: "yaml",
      extensions: ["yaml", "yml"],
    },
    {
      key: "toml",
      extensions: ["toml"],
    },
    {
      key: "document",
      extensions: ["xml"],
    },
    {
      key: "spreadsheet",
      extensions: ["csv", "tsv", "xls", "xlsm", "xlsx"],
    },
    {
      key: "artifactDocument",
      extensions: ["doc", "docx"],
    },
    {
      key: "notebook",
      extensions: ["ipynb"],
    },
    {
      key: "presentation",
      extensions: ["ppt", "pptx"],
    },
    {
      key: "shell",
      extensions: ["sh", "bash", "zsh", "fish", "ps1"],
    },
    {
      key: "terminal",
      extensions: ["dockerfile"],
    },
    {
      key: "document",
      extensions: ["env", "dotenv", "gitignore", "lock"],
    },
    {
      key: "image",
      extensions: ["png", "jpg", "jpeg", "gif", "webp", "bmp", "svg", "ico"],
    },
    {
      key: "build",
      extensions: [
        "build",
        "bazel",
        "bzl",
        "ninja",
        "gradle",
        "mk",
        "makefile",
      ],
    },
    {
      key: "hashes",
      extensions: ["sha", "sha1", "sha256", "md5", "checksum", "sum"],
    },
    {
      key: "pdf",
      extensions: ["pdf"],
    },
    {
      key: "folder",
      extensions: ["zip", "gz", "tgz", "tar"],
    },
  ].flatMap(({ key, extensions }) => extensions.map((item) => [item, key])),
);
const MIME_TYPE_ICON_PREFIXES: Array<{
  prefix: string;
  key: string;
}> = [
  {
    prefix: "image/",
    key: "image",
  },
  {
    prefix: "text/",
    key: "document",
  },
  {
    prefix: "application/pdf",
    key: "pdf",
  },
  {
    prefix: "application/zip",
    key: "folder",
  },
  {
    prefix: "application/gzip",
    key: "folder",
  },
];
function getFileExtension(filePath: string) {
  const baseFileName = getBaseFileName(filePath);
  const dotIndex = baseFileName.lastIndexOf(".");
  return dotIndex > 0 && dotIndex < baseFileName.length - 1
    ? baseFileName.slice(dotIndex + 1)
    : dotIndex === 0 && baseFileName.length > 1
      ? baseFileName.slice(1)
      : dotIndex === -1
        ? baseFileName
        : null;
}
function getFileIconKey(
  filePath?: string | null,
  mimeType?: string | false | null,
): string {
  if (!filePath && !mimeType) return "file";
  if (filePath) {
    if (/[\\/]$/.test(filePath)) return "folder";
    const nameIconKey = FILE_NAME_ICON_KEYS[getBaseFileName(filePath)];
    if (nameIconKey) return nameIconKey;
    const extension = getFileExtension(filePath);
    if (extension) {
      const extensionIconKey = EXTENSION_ICON_KEYS[extension];
      if (extensionIconKey) return extensionIconKey;
    }
  }
  const resolvedMimeType =
    mimeType ?? (filePath ? mimeTypes.lookup(filePath) : false);
  if (typeof resolvedMimeType == "string") {
    const mimePrefixMatch = MIME_TYPE_ICON_PREFIXES.find(({ prefix }) =>
      resolvedMimeType.startsWith(prefix),
    );
    if (mimePrefixMatch) return mimePrefixMatch.key;
  }
  return "file";
}
function getBaseFileName(filePath: string) {
  const normalizedPath = filePath.toLowerCase();
  const separatorIndex = Math.max(
    normalizedPath.lastIndexOf("/"),
    normalizedPath.lastIndexOf("\\"),
  );
  return separatorIndex >= 0
    ? normalizedPath.slice(separatorIndex + 1)
    : normalizedPath;
}
function getFileIcon(
  filePath?: string | null,
  mimeType?: string | false | null,
): FileIconComponent {
  return FILE_ICON_COMPONENTS[getFileIconKey(filePath, mimeType)];
}
export {
  DocumentTextIcon,
  ImageFileIcon,
  getFileIcon,
  getFileIconKey,
  FILE_ICON_COMPONENTS,
};
