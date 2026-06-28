// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Observed row wrapper for local conversation virtualized turn list items.
import React from "react";
import { useStableCallback } from "../../utils/use-stable-callback";
import type { VirtualizedTurnListContracts } from "./local-conversation-virtualized-turn-list-types";

type VirtualizedTurnItemProps = VirtualizedTurnListContracts["itemProps"];

export function VirtualizedTurnItem({
  entry,
  latestTurnFollowContentRef,
  RowComponent,
  constrainedHeightPx,
  observeTurnElement,
}: VirtualizedTurnItemProps) {
  let { turnKey } = entry,
    observedElementRef = useStableCallback((element: HTMLElement | null) =>
      observeTurnElement(turnKey, element),
    ),
    constrainedStyle =
      constrainedHeightPx == null
        ? undefined
        : {
            height: constrainedHeightPx,
            overflow: "hidden",
          };

  return (
    <div style={constrainedStyle}>
      <div
        ref={observedElementRef}
        className="[&_[data-virtualized-turn-content]]:[content-visibility:visible]"
        data-turn-key={turnKey}
      >
        <RowComponent
          entry={entry}
          latestTurnFollowContentRef={latestTurnFollowContentRef}
        />
      </div>
    </div>
  );
}
