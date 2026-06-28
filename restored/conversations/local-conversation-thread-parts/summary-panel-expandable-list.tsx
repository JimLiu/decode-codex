// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Expandable list primitive shared by local conversation summary-panel sections.
import React from "react";
import { once } from "../../runtime/commonjs-interop";
import { Button } from "../../ui/button";
import { FormattedMessage } from "../../vendor/react-intl";

const DEFAULT_SUMMARY_PANEL_VISIBLE_ITEM_LIMIT = 6;

export type SummaryPanelExpandableListProps<Item> = {
  children: (item: Item, index: number) => React.ReactNode;
  empty?: React.ReactNode;
  getKey: (item: Item, index: number) => React.Key;
  items: readonly Item[];
  listClassName?: string | null;
  visibleItemLimit?: number;
};

export function SummaryPanelExpandableList<Item>({
  children,
  empty,
  getKey,
  items,
  listClassName,
  visibleItemLimit = DEFAULT_SUMMARY_PANEL_VISIBLE_ITEM_LIMIT,
}: SummaryPanelExpandableListProps<Item>) {
  let [isExpanded, setIsExpanded] = React.useState(false);
  if (items.length === 0) return empty ?? null;

  let hasHiddenItems = items.length > visibleItemLimit,
    visibleItems = isExpanded ? items : items.slice(0, visibleItemLimit),
    hiddenItemCount = items.length - visibleItems.length,
    renderedItems = visibleItems.map((item, index) => (
      <React.Fragment key={getKey(item, index)}>
        {children(item, index)}
      </React.Fragment>
    )),
    listNode =
      listClassName == null ? (
        renderedItems
      ) : (
        <div className={listClassName}>{renderedItems}</div>
      ),
    toggleButton = hasHiddenItems ? (
      <Button
        className="!px-0 !py-0 text-token-text-tertiary hover:text-token-text-secondary"
        color="ghostMuted"
        size="default"
        onClick={() => {
          setIsExpanded(toggleSummaryPanelExpandableListExpanded);
        }}
      >
        {isExpanded ? (
          <FormattedMessage
            id="codex.localConversation.summaryPanelExpandableList.showLess"
            defaultMessage="Show less"
            description="Button label that collapses a long list in the conversation summary panel"
          />
        ) : (
          <FormattedMessage
            id="codex.localConversation.summaryPanelExpandableList.showMore"
            defaultMessage="Show {count, number} more"
            description="Button label that expands a long list in the conversation summary panel"
            values={{
              count: hiddenItemCount,
            }}
          />
        )}
      </Button>
    ) : null;

  return (
    <>
      {listNode}
      {toggleButton}
    </>
  );
}

function toggleSummaryPanelExpandableListExpanded(isExpanded: boolean) {
  return !isExpanded;
}

export const initSummaryPanelExpandableList = once(() => {});
