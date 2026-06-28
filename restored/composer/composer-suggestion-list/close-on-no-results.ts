// Restored from ref/webview/assets/composer-suggestion-list-BQ2rPanH.js
import React from "react";
type UseCloseOnNoResultsOptions = {
  isActive?: boolean;
  isLoading: boolean;
  onRequestClose?: (query: string) => void;
  query: string;
  resultCount: number;
};
export function useCloseOnNoResults({
  isActive = true,
  isLoading,
  onRequestClose,
  query,
  resultCount,
}: UseCloseOnNoResultsOptions): void {
  const shouldClose =
    query.trim().length > 0 &&
    /\s/.test(query) &&
    !isLoading &&
    resultCount === 0;
  React.useEffect(() => {
    if (isActive && shouldClose) onRequestClose?.(query);
  }, [isActive, onRequestClose, query, shouldClose]);
}
