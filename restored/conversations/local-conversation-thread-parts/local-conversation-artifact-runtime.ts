// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Conversation artifact rendering and output collection runtime helpers.
import {
  Hg as collectEndResourcePathsRaw,
  Nv as initConversationArtifactRuntimeRaw,
  Pv as renderConversationTurnForArtifactsRaw,
  Ug as collectAssistantOutputArtifactsRaw,
  Wg as initMarkdownResourceHelpersRaw,
} from "../../vendor/appg-thread-shared-runtime";
import {
  Dt as resolveVisibleGeneratedImageOutputsRaw,
  lt as initRenderedTurnOutputItemGroupingRaw,
  Ot as initVisibleGeneratedImageOutputChunkRaw,
  ut as collectRenderedTurnOutputItemsRaw,
} from "../../vendor/profile-page-runtime";

export type RenderConversationTurnOptions = {
  isBackgroundSubagentsEnabled?: boolean;
  preserveServerUserMessages?: boolean;
};

export type AssistantOutputArtifactsOptions = {
  assistantContent: string | null;
  isAppgenEndCardEnabled?: boolean;
  projectlessOutputDirectory?: string | null;
  turn: unknown;
};

export type RenderedTurnOutputItems = {
  assistantItem?: {
    content?: string | null;
    [key: string]: unknown;
  } | null;
  toolOutputItems: Array<{
    src?: string | null;
    [key: string]: unknown;
  }>;
};

export type VisibleGeneratedImageOutputOptions = {
  completedGeneratedImages: readonly unknown[];
  endResourcePaths: readonly string[];
  hasPendingGeneratedImages: boolean;
};

export type VisibleGeneratedImageOutputResult = {
  visibleCompletedGeneratedImages: Array<{
    src?: string | null;
    type?: string;
    [key: string]: unknown;
  }>;
};

export function renderConversationTurnForArtifacts<TTurn = unknown>(
  turn: unknown,
  requests: readonly unknown[] = [],
  options?: RenderConversationTurnOptions,
): TTurn {
  return (
    options === undefined
      ? renderConversationTurnForArtifactsRaw(turn, requests)
      : renderConversationTurnForArtifactsRaw(turn, requests, options)
  ) as TTurn;
}

export function renderLocalConversationTurn<TTurn = unknown>(
  turn: unknown,
  requests: readonly unknown[] = [],
  options?: RenderConversationTurnOptions,
): TTurn {
  return renderConversationTurnForArtifacts<TTurn>(turn, requests, options);
}

export function renderLocalConversationTurnForArtifacts<TTurn = unknown>(
  turn: unknown,
  requests: readonly unknown[] = [],
  options?: RenderConversationTurnOptions,
): TTurn {
  return renderLocalConversationTurn<TTurn>(turn, requests, options);
}

export function collectLocalAssistantOutputArtifacts<TArtifact = unknown>(
  options: AssistantOutputArtifactsOptions,
): TArtifact[] {
  return collectAssistantOutputArtifacts<TArtifact>(options);
}

export function collectAssistantOutputArtifacts<TArtifact = unknown>(
  options: AssistantOutputArtifactsOptions,
): TArtifact[] {
  return collectAssistantOutputArtifactsRaw(options) as TArtifact[];
}

export function collectLocalConversationEndResourcePaths(
  artifacts: readonly unknown[],
): string[] {
  return collectConversationEndResourcePaths(artifacts);
}

export function collectConversationEndResourcePaths(
  artifacts: readonly unknown[],
): string[] {
  return collectEndResourcePathsRaw(artifacts) as string[];
}

export function collectRenderedTurnOutputItems(
  items: readonly unknown[],
  status: string,
): RenderedTurnOutputItems {
  return collectRenderedTurnOutputItemsRaw(
    items,
    status,
  ) as RenderedTurnOutputItems;
}

export function resolveVisibleGeneratedImageOutputs(
  options: VisibleGeneratedImageOutputOptions,
): VisibleGeneratedImageOutputResult {
  return resolveVisibleGeneratedImageOutputsRaw(
    options,
  ) as VisibleGeneratedImageOutputResult;
}

export function initConversationArtifactRuntime(): void {
  initConversationArtifactRuntimeRaw();
}

export function initLocalConversationArtifactRuntime(): void {
  initConversationArtifactRuntime();
}

export function initMarkdownResourceRuntime(): void {
  initMarkdownResourceHelpersRaw();
}

export function initLocalConversationMarkdownResourceRuntime(): void {
  initMarkdownResourceRuntime();
}

export function initVisibleGeneratedImageOutputRuntime(): void {
  initVisibleGeneratedImageOutputChunkRaw();
  initRenderedTurnOutputItemGroupingRaw();
}
