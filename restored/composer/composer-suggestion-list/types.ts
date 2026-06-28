// Restored from ref/webview/assets/composer-suggestion-list-BQ2rPanH.js
import type { ReactNode } from "react";
export type ComposerSuggestionChromeVariant =
  | "default"
  | "expandedTopTray"
  | "embeddedExpandedTopTray";
export type ComposerSuggestionItem = {
  key: string;
  content: ReactNode;
  disabled?: boolean;
  path?: string | null;
};
export type ComposerSuggestionSection = {
  id: string;
  title?: ReactNode | null;
  items: readonly ComposerSuggestionItem[];
  emptyState?: ReactNode | null;
  showTitle?: boolean;
  isLoading?: boolean;
};
export type ComposerSuggestionKeyboardTarget = {
  addEventListener(
    type: "keydown",
    listener: (event: KeyboardEvent) => void,
    options?: boolean,
  ): void;
  removeEventListener(
    type: "keydown",
    listener: (event: KeyboardEvent) => void,
    options?: boolean,
  ): void;
};
export type ComposerSuggestionListProps = {
  chromeVariant?: ComposerSuggestionChromeVariant;
  className?: string;
  isActive: boolean;
  isHomeMenu?: boolean;
  keyboardEventTarget?: ComposerSuggestionKeyboardTarget | null;
  noResults?: ReactNode;
  onHighlight?: (item: ComposerSuggestionItem | null) => void;
  onRequestClose?: (query: string) => void;
  onSelect: (item: ComposerSuggestionItem) => void;
  query: string;
  sections: readonly ComposerSuggestionSection[];
};
