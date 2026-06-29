// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Open a host's config.toml in the user's preferred editor target.
import {
  openInEditor,
  sendHostRequest,
} from "../boundaries/onboarding-commons-externals.facade";

export interface OpenConfigInEditorOptions {
  hostId: string;
  path: string;
  range?: { start: { line: number; column: number } } | null;
}

async function resolvePreferredOpenTarget(
  hostId: string,
): Promise<string | undefined> {
  try {
    const response = await sendHostRequest("open-in-targets", {
      params: { cwd: null, hostId },
    });
    return response.preferredTarget;
  } catch {
    return undefined;
  }
}

export async function openConfigInEditor({
  hostId,
  path,
  range,
}: OpenConfigInEditorOptions): Promise<void> {
  openInEditor({
    path,
    cwd: null,
    hostId,
    target: await resolvePreferredOpenTarget(hostId),
    line: range?.start.line,
    column: range?.start.column,
  });
}
