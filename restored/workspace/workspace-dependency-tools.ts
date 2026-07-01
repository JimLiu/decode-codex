// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Backing logic for the "load workspace dependencies" agent tool: gates the tool
// to local desktop threads that have the workspace_dependencies experiment
// enabled, then loads and formats the bundled runtime dependency instructions.

import { z } from "zod";
import { appLogger } from "../runtime/app-logger";
import { appServices } from "../boundaries/rpc.facade";
import { hasWorkspaceDependenciesFeature } from "../features/workspace-dependencies";
import { sendAppServerRequest } from "../boundaries/use-host-config.facade";
import { isLocalHost } from "../utils/automation-host-support";
import {
  buildToolErrorResult,
  loadWorkspaceDependenciesToolName,
} from "../boundaries/onboarding-commons-externals.facade";

const WORKSPACE_DEPENDENCY_FEATURES_PAGE_LIMIT = 100;
const EMPTY_TOOL_ARGUMENTS_SCHEMA = z.object({}).strict();

const WORKSPACE_DEPENDENCIES_DESKTOP_ONLY_MESSAGE =
  "Workspace dependency tools are only available in the Codex desktop app.";
const WORKSPACE_DEPENDENCIES_LOCAL_ONLY_MESSAGE =
  "Workspace dependency tools are only supported for local threads.";
const WORKSPACE_DEPENDENCIES_NONE_CONFIGURED_MESSAGE =
  "No bundled workspace runtime dependencies are configured yet.";
const WORKSPACE_DEPENDENCIES_DISABLED_MESSAGE =
  "Workspace dependency tools are disabled in Codex settings.";

export interface WorkspaceDependencyToolRequest {
  argumentsValue: unknown;
  hostId: string;
}

interface WorkspaceDependencyRuntimeResult {
  installed: boolean;
  instructions: string | null;
}

async function hasWorkspaceDependenciesExperiment(
  hostId: string,
): Promise<boolean> {
  const readPage = async (cursor: string | null): Promise<boolean> => {
    const page = (await sendAppServerRequest("list-experimental-features", {
      cursor,
      hostId,
      limit: WORKSPACE_DEPENDENCY_FEATURES_PAGE_LIMIT,
    })) as { data: unknown; nextCursor: string | null };
    if (hasWorkspaceDependenciesFeature(page.data as never)) return true;
    return page.nextCursor == null ? false : readPage(page.nextCursor);
  };
  return readPage(null);
}

function validateWorkspaceDependencyRequest({
  argumentsValue,
  hostId,
  toolName,
}: WorkspaceDependencyToolRequest & { toolName: string }): unknown {
  if (!isLocalHost(hostId)) {
    return buildToolErrorResult(WORKSPACE_DEPENDENCIES_LOCAL_ONLY_MESSAGE);
  }
  return EMPTY_TOOL_ARGUMENTS_SCHEMA.safeParse(argumentsValue).success
    ? null
    : buildToolErrorResult(`${toolName} takes no arguments.`);
}

function formatWorkspaceDependencyResult(
  result: WorkspaceDependencyRuntimeResult,
): unknown {
  if (!result.installed || result.instructions == null) {
    return buildToolErrorResult(WORKSPACE_DEPENDENCIES_NONE_CONFIGURED_MESSAGE);
  }
  return {
    contentItems: [
      {
        type: "inputText",
        text: [
          "Workspace dependencies are available for this local desktop thread.",
          result.instructions,
        ].join("\n\n"),
      },
    ],
    success: true,
  };
}

export async function getWorkspaceDependenciesToolResult({
  argumentsValue,
  hostId,
}: WorkspaceDependencyToolRequest): Promise<unknown> {
  const validationError = validateWorkspaceDependencyRequest({
    argumentsValue,
    hostId,
    toolName: loadWorkspaceDependenciesToolName,
  });
  if (validationError != null) return validationError;

  try {
    if (!(await hasWorkspaceDependenciesExperiment(hostId))) {
      return buildToolErrorResult(WORKSPACE_DEPENDENCIES_DISABLED_MESSAGE);
    }
    const primaryRuntime = appServices.primaryRuntime;
    if (primaryRuntime == null) {
      return buildToolErrorResult(WORKSPACE_DEPENDENCIES_DESKTOP_ONLY_MESSAGE);
    }
    return formatWorkspaceDependencyResult(
      await primaryRuntime.loadDependencies({ hostId }),
    );
  } catch (error) {
    appLogger.error("Failed to load workspace dependencies", {
      safe: { tool: loadWorkspaceDependenciesToolName },
      sensitive: { error },
    });
    return buildToolErrorResult(
      "Failed to load workspace dependency runtime details.",
    );
  }
}
