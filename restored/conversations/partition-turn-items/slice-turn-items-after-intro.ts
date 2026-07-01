// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Trims the leading turn intro items before rendering activity.
import type { TurnItem } from "./types";

export function initSliceTurnItemsAfterIntroChunk(): void {}

export function sliceTurnItemsAfterIntro(items: TurnItem[]): TurnItem[] {
  const workedForIndex = items.findIndex((item) => item.type === "worked-for");
  if (workedForIndex >= 0) return items.slice(workedForIndex + 1);
  const firstNonUserMessageIndex = items.findIndex(
    (item) => item.type !== "user-message",
  );
  if (firstNonUserMessageIndex < 0) return [];
  return firstNonUserMessageIndex === 0
    ? items
    : items.slice(firstNonUserMessageIndex);
}
