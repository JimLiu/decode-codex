// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Computer Use config.toml cleanup after migrating local plugin installs.

import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { parseTomlConfig } from "../../boundaries/shared-node-runtime.facade";
import { COMPUTER_USE_PLUGIN_NAME, PREVIOUS_NOTIFY_ARG } from "./constants";
import { isPathInsideRoot } from "./paths";
import type { LocalMigrationLogger } from "./types";

export async function removeComputerUseLocalPluginConfig({
  codexHome,
  localPluginPath,
  logger,
}: {
  codexHome: string;
  localPluginPath: string;
  logger: LocalMigrationLogger;
}): Promise<void> {
  const configPath = join(codexHome, "config.toml");
  try {
    const content = await readFile(configPath, "utf8").catch((error) => {
      if (isNodeErrorCode(error, "ENOENT")) return null;
      throw error;
    });
    if (content == null) return;
    const nextContent = removeComputerUseLocalPluginConfigFromText({
      content,
      localPluginPath,
    });
    if (nextContent === content) return;
    await writeFile(configPath, nextContent, "utf8");
    logger.info("computer_use_local_to_bundled_migration_removed_config", {
      safe: {},
      sensitive: { configPath },
    });
  } catch (error) {
    logger.warning(
      "computer_use_local_to_bundled_migration_config_cleanup_failed",
      {
        safe: {},
        sensitive: { configPath, error },
      },
    );
  }
}

export function removeComputerUseLocalPluginConfigFromText({
  content,
  localPluginPath,
}: {
  content: string;
  localPluginPath: string;
}): string {
  const config = parseTomlConfig(content);
  let nextContent = content;
  if (hasLocalComputerUseMcpServer({ config, localPluginPath })) {
    nextContent = removeSectionsByPredicate(
      nextContent,
      isComputerUseMcpServerSection,
    );
  }
  const notify = getNotifyReplacement({ config, localPluginPath });
  if (notify.changed) {
    nextContent = replaceTopLevelNotify(nextContent, notify.notify);
  }
  return ensureTrailingNewlineUnlessEmpty(nextContent);
}

function hasLocalComputerUseMcpServer({
  config,
  localPluginPath,
}: {
  config: Record<string, unknown>;
  localPluginPath: string;
}): boolean {
  const mcpServers = asRecord(config.mcp_servers);
  const computerUseServer = asRecord(mcpServers?.[COMPUTER_USE_PLUGIN_NAME]);
  const command = computerUseServer?.command;
  return (
    typeof command === "string" && isPathInsideRoot(command, localPluginPath)
  );
}

function getNotifyReplacement({
  config,
  localPluginPath,
}: {
  config: Record<string, unknown>;
  localPluginPath: string;
}): { changed: boolean; notify?: string[] | null } {
  return isStringArray(config.notify)
    ? removeLocalNotifyWrapper({
        localPluginPath,
        notify: config.notify,
      })
    : { changed: false };
}

function removeLocalNotifyWrapper({
  localPluginPath,
  notify,
}: {
  localPluginPath: string;
  notify: string[];
}): { changed: boolean; notify: string[] | null } {
  const command = notify[0];
  if (command == null || !isPathInsideRoot(command, localPluginPath)) {
    return { changed: false, notify };
  }
  const previousNotify = readPreviousNotify(notify);
  if (previousNotify == null) return { changed: true, notify: null };
  const nested = removeLocalNotifyWrapper({
    localPluginPath,
    notify: previousNotify,
  });
  return {
    changed: true,
    notify: nested.changed ? nested.notify : previousNotify,
  };
}

function readPreviousNotify(notify: string[]): string[] | null {
  const index = notify.indexOf(PREVIOUS_NOTIFY_ARG);
  if (index < 0 || index + 1 >= notify.length) return null;
  try {
    const previousNotify = JSON.parse(notify[index + 1] ?? "");
    return isStringArray(previousNotify) ? previousNotify : null;
  } catch {
    return null;
  }
}

function removeSectionsByPredicate(
  content: string,
  shouldRemoveSection: (line: string) => boolean,
): string {
  const lines = content.split(/\r?\n/);
  const kept: string[] = [];
  let removing = false;
  for (const line of lines) {
    if (isTomlSectionHeader(line)) {
      removing = shouldRemoveSection(line);
      if (removing) continue;
    }
    if (!removing) kept.push(line);
  }
  return kept.join("\n");
}

function replaceTopLevelNotify(
  content: string,
  notify: string[] | null | undefined,
): string {
  const lines = removeTopLevelNotify(content.split(/\r?\n/));
  if (notify == null) return lines.join("\n");
  const notifyLine = `notify = ${JSON.stringify(notify)}`;
  const sectionIndex = lines.findIndex(isTomlSectionHeader);
  if (sectionIndex < 0) return [...lines, notifyLine].join("\n");
  const nextLines = [...lines];
  nextLines.splice(sectionIndex, 0, notifyLine);
  if (
    sectionIndex + 1 < nextLines.length &&
    nextLines[sectionIndex + 1]?.trim() !== ""
  ) {
    nextLines.splice(sectionIndex + 1, 0, "");
  }
  return nextLines.join("\n");
}

function removeTopLevelNotify(lines: string[]): string[] {
  const kept: string[] = [];
  let skippingNotifyArray = false;
  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index] ?? "";
    if (isTomlSectionHeader(line)) {
      kept.push(...lines.slice(index));
      return kept;
    }
    if (skippingNotifyArray) {
      if (line.includes("]")) skippingNotifyArray = false;
      continue;
    }
    if (isTopLevelNotifyLine(line)) {
      if (line.includes("[") && !line.includes("]")) {
        skippingNotifyArray = true;
      }
      continue;
    }
    kept.push(line);
  }
  return kept;
}

function isComputerUseMcpServerSection(line: string): boolean {
  return /^\s*\[\s*mcp_servers\s*\.\s*(?:"computer-use"|computer-use)\s*\]\s*$/.test(
    line,
  );
}

function isTomlSectionHeader(line: string): boolean {
  return /^\s*\[/.test(line);
}

function isTopLevelNotifyLine(line: string): boolean {
  const trimmed = line.trimStart();
  return trimmed.startsWith("notify ") || trimmed.startsWith("notify=");
}

function ensureTrailingNewlineUnlessEmpty(content: string): string {
  const trimmed = content.trimEnd();
  return trimmed === "" ? "" : `${trimmed}\n`;
}

function isStringArray(value: unknown): value is string[] {
  return (
    Array.isArray(value) && value.every((item) => typeof item === "string")
  );
}

function asRecord(value: unknown): Record<string, unknown> | null {
  return typeof value === "object" && value != null && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null;
}

function isNodeErrorCode(error: unknown, code: string): boolean {
  return (
    typeof error === "object" &&
    error != null &&
    "code" in error &&
    error.code === code
  );
}
