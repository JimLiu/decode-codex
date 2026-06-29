// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Empty-state placeholder shown in the in-app browser sidebar when no page is open.
import { FormattedMessage } from "../vendor/react-intl";
import { BrowserPlaceholderIcon } from "../boundaries/onboarding-commons-externals.facade";

function BrowserPlaceholderArtwork() {
  return (
    <div className="flex justify-center">
      <BrowserPlaceholderIcon
        aria-hidden={true}
        className="h-18 w-auto text-token-input-placeholder-foreground"
      />
    </div>
  );
}

export function BrowserSidebarPlaceholder() {
  return (
    <div className="flex h-full w-full items-center justify-center px-6 py-8 text-center select-none">
      <div className="flex max-w-[280px] flex-col items-center gap-5 text-token-description-foreground">
        <BrowserPlaceholderArtwork />
        <div className="flex flex-col items-center gap-2">
          <div className="text-base font-medium text-token-foreground">
            <FormattedMessage
              id="thread.browser.emptyState.title"
              defaultMessage="Start browsing"
              description="Empty state title when the inline browser has no page open"
            />
          </div>
          <div className="text-sm">
            <FormattedMessage
              id="thread.browser.emptyState.description"
              defaultMessage="Enter a URL to open a page"
              description="Empty state description when the inline browser has no page open"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
