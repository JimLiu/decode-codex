// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Validates the follow-up prompt payload an MCP app may request the host to send.

import * as zodRuntime from "../boundaries/src-l0hb-mz-p";

const INVALID_PARAMS_ERROR_CODE = -32602;

const followUpRequestSchema = zodRuntime
  .srcTa({
    prompt: zodRuntime.srcAa().trim().min(1),
    title: zodRuntime.srcAa().trim().min(1).max(250).optional(),
  })
  .strip();

export interface FollowUpRequest {
  prompt: string;
  title?: string;
}

export function parseFollowUpRequest(value: unknown): FollowUpRequest {
  const result = followUpRequestSchema.safeParse(value);
  if (!result.success) {
    throw Object.assign(new Error("Invalid follow-up message"), {
      code: INVALID_PARAMS_ERROR_CODE,
    });
  }
  return result.data;
}
