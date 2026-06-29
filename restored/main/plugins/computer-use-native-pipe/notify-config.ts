// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Windows Computer Use notify config installer/repairer.

import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { parseTomlConfig } from "../../boundaries/shared-node-runtime.facade";
import type { NotifyConfigStatus } from "./types";

const PREVIOUS_NOTIFY_ARG = "--previous-notify";
const TURN_ENDED_NOTIFY_EVENT = "turn-ended";
const WINDOWS_COMPUTER_USE_HELPER_EXE = "codex-computer-use.exe";

export async function ensureComputerUseNotifyConfig({
  codexHome,
  windowsHelperPath,
}: {
  codexHome: string;
  windowsHelperPath: string;
}): Promise<{ status: NotifyConfigStatus }> {
  const configPath = path.join(codexHome, "config.toml");
  const content = await readConfigText(configPath);
  const patched = patchComputerUseNotifyConfig(content, windowsHelperPath);
  if (patched.content === content) return { status: "already-present" };
  await mkdir(path.dirname(configPath), { recursive: true });
  await writeFile(configPath, patched.content, "utf8");
  return { status: patched.hadNotify ? "repaired" : "installed" };
}

export function patchComputerUseNotifyConfig(
  content: string,
  windowsHelperPath: string,
): { content: string; hadNotify: boolean } {
  const currentNotify = readNotifyConfig(content);
  const previousNotify = unwrapExistingComputerUseNotify(currentNotify);
  const notify = [windowsHelperPath, TURN_ENDED_NOTIFY_EVENT];
  if (previousNotify != null) {
    notify.push(PREVIOUS_NOTIFY_ARG, JSON.stringify(previousNotify));
  }
  return notifyArraysEqual(currentNotify, notify)
    ? { content, hadNotify: true }
    : {
        content: writeTopLevelNotifyConfig(
          content,
          serializeNotifyToml(notify),
        ),
        hadNotify: currentNotify != null,
      };
}

async function readConfigText(configPath: string): Promise<string> {
  try {
    return await readFile(configPath, "utf8");
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "ENOENT") {
      return "";
    }
    throw error;
  }
}

function readNotifyConfig(content: string): string[] | null {
  if (content.trim() === "") return null;
  const parsed = parseTomlConfig(content);
  if (parsed.notify == null) return null;
  if (!isStringArray(parsed.notify)) {
    throw Error("Codex notify config must be a string array");
  }
  return parsed.notify;
}

function unwrapExistingComputerUseNotify(
  notify: string[] | null,
): string[] | null {
  return notify == null
    ? null
    : isComputerUseNotify(notify)
      ? unwrapExistingComputerUseNotify(readPreviousNotify(notify))
      : notify;
}

function isComputerUseNotify(notify: string[]): boolean {
  const [command, event] = notify;
  return (
    event === TURN_ENDED_NOTIFY_EVENT &&
    command?.replaceAll("\\", "/").split("/").at(-1)?.toLowerCase() ===
      WINDOWS_COMPUTER_USE_HELPER_EXE
  );
}

function readPreviousNotify(notify: string[]): string[] | null {
  const previousNotify = notify[notify.indexOf(PREVIOUS_NOTIFY_ARG) + 1];
  if (previousNotify == null) return null;
  try {
    const parsed = JSON.parse(previousNotify);
    return isStringArray(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

function writeTopLevelNotifyConfig(
  content: string,
  notifyToml: string,
): string {
  const lines: string[] = [];
  let inTopLevel = true;
  let notifyBracketBalance = 0;

  for (const line of content.split(/\r?\n/)) {
    const trimmed = line.trimStart();
    const bracketBalance = line.split("[").length - line.split("]").length;
    if (inTopLevel && notifyBracketBalance === 0 && trimmed.startsWith("[")) {
      inTopLevel = false;
    }
    if (inTopLevel) {
      if (notifyBracketBalance > 0) {
        notifyBracketBalance += bracketBalance;
      } else if (/^notify\s*=/.test(trimmed)) {
        notifyBracketBalance = bracketBalance;
      } else {
        lines.push(line);
      }
    } else {
      lines.push(line);
    }
  }

  const firstSectionIndex = lines.findIndex((line) =>
    line.trimStart().startsWith("["),
  );
  const beforeSections =
    firstSectionIndex === -1 ? lines : lines.slice(0, firstSectionIndex);
  const sections =
    firstSectionIndex === -1 ? [] : lines.slice(firstSectionIndex);
  return `${[...beforeSections, notifyToml, ...sections].join("\n").trim()}\n`;
}

function serializeNotifyToml(notify: string[]): string {
  return `notify = ${JSON.stringify(notify)}`;
}

function notifyArraysEqual(first: string[] | null, second: string[]): boolean {
  return (
    first != null &&
    first.length === second.length &&
    first.every((value, index) => value === second[index])
  );
}

function isStringArray(value: unknown): value is string[] {
  return (
    Array.isArray(value) && value.every((item) => typeof item === "string")
  );
}
