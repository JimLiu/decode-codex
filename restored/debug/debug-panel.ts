// Restored from ref/webview/assets/use-debug-panel-Bp7WBTu3.js
// Debug panel source registry and local-conversation file summary helpers.
import React from "react";
import {
  appScopeRoot,
  createSignal,
  initAppScope,
  initReactRuntime,
  initScopeRuntime,
} from "../runtime/feature-support-runtime";
import {
  collectTurnFileArtifacts,
  initOutputArtifactRuntime,
} from "../conversations/output-artifact-runtime";
import { useSignalValue } from "../runtime/app-scope-hooks";
import { getBuildFlavor } from "../plugins/use-plugins/marketplace-constants";

export type DebugPanelSource = {
  lines: readonly unknown[];
  title: React.ReactNode;
};

export type RegisteredDebugPanelSource = {
  id: string;
  lines: readonly unknown[];
  titleText: string;
};

export type DebugPanelScope = {
  set<TValue>(
    signal: unknown,
    updater: (currentValue: readonly TValue[]) => readonly TValue[],
  ): void;
};

type TurnFileArtifacts = {
  editedFilePaths: readonly string[];
  referencedFilePaths: readonly string[];
};

type BuildFlavor = "agent" | "dev" | "internal-alpha" | "nightly" | string;

const INTERNAL_BUILD_FLAVORS = new Set<BuildFlavor>([
  "agent",
  "dev",
  "internal-alpha",
  "nightly",
]);

let debugPanelSourcesSignal: unknown;
let debugPanelSourceCounter = 0;

export function initDebugPanelRuntime(): void {
  initScopeRuntime();
  initReactRuntime();
  initAppScope();
  initOutputArtifactRuntime();
  if (debugPanelSourcesSignal == null) {
    debugPanelSourcesSignal = createSignal(appScopeRoot, []);
    debugPanelSourceCounter = 0;
  }
}

export function initDebugPanelSourceRuntime(): void {
  initOutputArtifactRuntime();
}

export function useDebugPanelSources(): readonly RegisteredDebugPanelSource[] {
  initDebugPanelRuntime();
  return useSignalValue<readonly RegisteredDebugPanelSource[]>(
    debugPanelSourcesSignal,
  );
}

export function useIsDebugPanelEnabled(): boolean {
  return INTERNAL_BUILD_FLAVORS.has(getBuildFlavor());
}

export function registerDebugPanelSource(
  scope: DebugPanelScope,
  sourceId: string,
  source: DebugPanelSource,
): void {
  initDebugPanelRuntime();
  const serializedSource = serializeDebugPanelSource(sourceId, source);
  scope.set<RegisteredDebugPanelSource>(
    debugPanelSourcesSignal,
    (currentSources) => [
      ...currentSources.filter(
        (currentSource) => currentSource.id !== sourceId,
      ),
      serializedSource,
    ],
  );
}

export function unregisterDebugPanelSource(
  scope: DebugPanelScope,
  sourceId: string,
): void {
  initDebugPanelRuntime();
  scope.set<RegisteredDebugPanelSource>(
    debugPanelSourcesSignal,
    (currentSources) =>
      currentSources.filter((currentSource) => currentSource.id !== sourceId),
  );
}

export function createDebugPanelSourceId(): string {
  if (
    typeof crypto !== "undefined" &&
    typeof crypto.randomUUID === "function"
  ) {
    return crypto.randomUUID();
  }
  const sourceId = debugPanelSourceCounter;
  debugPanelSourceCounter += 1;
  return `debug-panel-${sourceId}`;
}

export function getEditedFilesFromTurns(turns: readonly unknown[]): string[] {
  return collectUniqueTurnArtifactPaths(turns, "editedFilePaths");
}

export function getReferencedFilesFromTurns(
  turns: readonly unknown[],
): string[] {
  return collectUniqueTurnArtifactPaths(turns, "referencedFilePaths");
}

function serializeDebugPanelSource(
  sourceId: string,
  source: DebugPanelSource,
): RegisteredDebugPanelSource {
  let titleText = "[non-serializable title]";
  if (typeof source.title === "string") {
    titleText = source.title;
  } else if (React.isValidElement(source.title)) {
    titleText = "";
  }

  return {
    id: sourceId,
    lines: source.lines,
    titleText,
  };
}

function collectUniqueTurnArtifactPaths(
  turns: readonly unknown[],
  field: keyof TurnFileArtifacts,
): string[] {
  const paths: string[] = [];
  const seenPaths = new Set<string>();

  for (const turn of turns) {
    for (const path of collectTurnFileArtifacts<TurnFileArtifacts>(turn)[
      field
    ]) {
      if (!seenPaths.has(path)) {
        seenPaths.add(path);
        paths.push(path);
      }
    }
  }

  return paths;
}
