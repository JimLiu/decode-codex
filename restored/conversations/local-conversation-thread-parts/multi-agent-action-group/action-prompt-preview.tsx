// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Overflow-aware inline preview for multi-agent prompts.

import { Tooltip } from "../../../boundaries/onboarding-commons-externals.facade";

export interface ActionPromptPreviewProps {
  prompt: string;
}

export function ActionPromptPreview({ prompt }: ActionPromptPreviewProps) {
  return (
    <Tooltip tooltipContent={prompt} openWhen="trigger-overflows">
      <span className="min-w-0 flex-1 truncate text-token-conversation-summary-trailing">
        {prompt}
      </span>
    </Tooltip>
  );
}
