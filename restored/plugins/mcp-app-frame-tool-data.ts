// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Tool input/output conversion for MCP app frames.

import { structuredContentSchema, textContentSchema } from "./mcp-app-schemas";

export function toMcpAppToolInput(
  toolArguments: unknown,
): Record<string, unknown> | null {
  return typeof toolArguments === "object" && toolArguments
    ? (toolArguments as Record<string, unknown>)
    : null;
}

export function toMcpAppToolOutput(selectedToolResult: {
  content: unknown[];
  structuredContent?: unknown;
}): Record<string, unknown> | null {
  const structured = structuredContentSchema.safeParse(
    selectedToolResult.structuredContent,
  );
  if (structured.success) return structured.data;
  if (selectedToolResult.content.length !== 1) return null;
  const [block] = selectedToolResult.content;
  const text = textContentSchema.safeParse(block);
  if (!text.success) return null;
  try {
    const parsed = JSON.parse(text.data.text);
    return typeof parsed === "object" && parsed ? parsed : null;
  } catch {
    return null;
  }
}
