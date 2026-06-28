// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Error fallback shown when the floating local conversation summary panel fails to render.
import { once } from "../../runtime/commonjs-interop";
import { Button } from "../../ui/button";
import { FormattedMessage } from "../../vendor/react-intl";

type SummaryPanelDisplayState = {
  shouldShow: boolean;
};

export type SummaryPanelErrorFallbackProps = {
  display: SummaryPanelDisplayState;
  onRetry: () => void;
};

export function SummaryPanelErrorFallback({
  display,
  onRetry,
}: SummaryPanelErrorFallbackProps) {
  if (!display.shouldShow) return null;
  let panelStyle = {
    width: 300,
  };
  let title = (
    <div className="mb-2 font-medium text-token-text-primary">
      <FormattedMessage
        id="localConversation.summaryPanelRenderError.title"
        defaultMessage="Summary panel couldn't render"
        description="Error message shown when the conversation summary panel fails to render"
      />
    </div>
  );
  let retryLabel = (
    <FormattedMessage
      id="localConversation.summaryPanelRenderError.retry"
      defaultMessage="Try again"
      description="Button label to retry rendering the conversation summary panel"
    />
  );
  return (
    <div className="pointer-events-none absolute top-(--thread-floating-content-top-inset) right-0 bottom-(--thread-floating-content-bottom-inset) z-40">
      <div className="relative flex max-h-full">
        <div className="max-h-full min-h-0 pe-4">
          <div
            data-pip-obstacle="thread-summary-panel"
            className="pointer-events-auto rounded-lg border border-token-border bg-token-main-surface-primary px-4 py-3 text-sm text-token-text-secondary shadow-lg"
            style={panelStyle}
          >
            {title}
            <Button color="secondary" size="default" onClick={onRetry}>
              {retryLabel}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export const initSummaryPanelErrorFallbackChunk = once(() => {});
