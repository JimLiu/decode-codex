// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Shared background-agent thread opening helper for local conversation frame surfaces.
import type { ComponentType } from "react";
import { openBackgroundAgentThreadTab } from "./local-conversation-background-agent-thread-tab";
import type {
  BackgroundAgent,
  BackgroundAgentOpenHandler,
  ThreadRouteScope,
} from "./local-conversation-thread-frame-types";

export function openBackgroundAgentFromThread(
  scope: ThreadRouteScope,
  hostId: string | null | undefined,
  backgroundAgent: BackgroundAgent,
  onOpenBackgroundAgent: BackgroundAgentOpenHandler | undefined,
  MainThreadComponent: ComponentType<Record<string, unknown>>,
) {
  if (onOpenBackgroundAgent != null) {
    onOpenBackgroundAgent(backgroundAgent);
    return;
  }
  if (backgroundAgent.showInlineActivity !== true) {
    openBackgroundAgentThreadTab(scope, {
      backgroundAgent,
      hostId,
      TabComponent: MainThreadComponent,
    });
  }
}
