// Restored from ref/webview/assets/list-navigation-BZovQ6sO.js
// list-navigation-BZovQ6sO chunk restored from the Codex webview bundle.
import React from "react";
import { useStableCallback } from "./use-stable-callback";
type UseEffectEvent = <Args extends unknown[], Return>(
  callback: (...args: Args) => Return,
) => (...args: Args) => Return;
type NavigationKeyboardEvent = {
  key: string;
  preventDefault?: () => void;
  stopPropagation?: () => void;
};
type KeyboardEventTarget = {
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
type InputProps<Event extends NavigationKeyboardEvent> = {
  onKeyDown?: (event: Event) => void;
};
type ItemProps<ClickEvent, MouseMoveEvent> = {
  onClick?: (event: ClickEvent) => void;
  onMouseMove?: (event: MouseMoveEvent) => void;
};
type ListNavigationOptions<Item> = {
  autoHighlightFirst?: boolean;
  captureWindowKeydown?: boolean;
  isActive: boolean;
  items?: readonly Item[] | null;
  keyboardEventTarget?: KeyboardEventTarget | null;
  onEscape?: () => void;
  onHighlight?: (item: Item | null, index: number) => void;
  onSelect: (item: Item, index: number) => void;
  preserveHighlightOnItemsChange?: boolean;
};
const useEffectEvent = (
  React as typeof React & {
    useEffectEvent: UseEffectEvent;
  }
).useEffectEvent;
export function ListNavigation<Item>({
  autoHighlightFirst = true,
  captureWindowKeydown = false,
  isActive,
  items,
  keyboardEventTarget,
  onEscape,
  onHighlight,
  onSelect,
  preserveHighlightOnItemsChange = false,
}: ListNavigationOptions<Item>) {
  const notifyHighlight = useEffectEvent((item: Item | null, index: number) => {
    onHighlight?.(item, index);
  });
  const listRef = React.useRef<HTMLElement | null>(null);
  const previousItemsRef = React.useRef<readonly Item[] | null | undefined>(
    null,
  );
  const itemCount = items == null ? 0 : items.length;
  const [highlightedIndex, setHighlightedIndex] = React.useState(
    autoHighlightFirst && itemCount > 0 ? 0 : -1,
  );
  React.useEffect(() => {
    const previousItems = previousItemsRef.current;
    const didItemsChange =
      previousItems != null &&
      (items == null ||
        previousItems.length !== itemCount ||
        previousItems.some((item, index) => item !== items[index]));
    previousItemsRef.current = items;
    if (!isActive || itemCount === 0) {
      setHighlightedIndex(-1);
      return;
    }
    setHighlightedIndex((currentIndex) =>
      currentIndex >= 0 &&
      currentIndex < itemCount &&
      (preserveHighlightOnItemsChange || !didItemsChange)
        ? currentIndex
        : autoHighlightFirst
          ? 0
          : -1,
    );
  }, [
    autoHighlightFirst,
    isActive,
    itemCount,
    items,
    preserveHighlightOnItemsChange,
  ]);
  React.useEffect(() => {
    if (!isActive || highlightedIndex < 0 || highlightedIndex >= itemCount) {
      notifyHighlight(null, -1);
      return;
    }
    notifyHighlight(items?.[highlightedIndex] ?? null, highlightedIndex);
  }, [highlightedIndex, isActive, itemCount, items, notifyHighlight]);
  React.useEffect(() => {
    if (!isActive || highlightedIndex < 0 || highlightedIndex >= itemCount) {
      return;
    }
    listRef.current
      ?.querySelectorAll('[data-list-navigation-item="true"]')
      .item(highlightedIndex)
      ?.scrollIntoView({
        block: "nearest",
      });
  }, [highlightedIndex, isActive, itemCount]);
  const selectIndex = useStableCallback((index: number) => {
    const item =
      items != null && index >= 0 && index < itemCount
        ? items[index]
        : undefined;
    if (!item) return;
    setHighlightedIndex(index);
    onSelect(item, index);
  });
  const moveHighlight = (delta: number) => {
    setHighlightedIndex((currentIndex) =>
      itemCount === 0
        ? -1
        : currentIndex < 0
          ? delta >= 0
            ? 0
            : itemCount - 1
          : wrapIndex(currentIndex + delta, itemCount),
    );
  };
  const handleKeyDown = (event: NavigationKeyboardEvent) => {
    if (!isActive) return false;
    const { key } = event;
    if (itemCount === 0) {
      if (key === "Escape" && onEscape) {
        onEscape();
        consumeKeyboardEvent(event);
        return true;
      }
      return false;
    }
    if (key === "ArrowDown") {
      moveHighlight(1);
      consumeKeyboardEvent(event);
      return true;
    }
    if (key === "ArrowUp") {
      moveHighlight(-1);
      consumeKeyboardEvent(event);
      return true;
    }
    if (key === "Enter") {
      const indexToSelect =
        highlightedIndex >= 0 ? highlightedIndex : autoHighlightFirst ? 0 : -1;
      if (indexToSelect >= 0 && indexToSelect < itemCount) {
        selectIndex(indexToSelect);
        consumeKeyboardEvent(event);
        return true;
      }
      return false;
    }
    if (key === "Escape" && onEscape) {
      onEscape();
      consumeKeyboardEvent(event);
      return true;
    }
    return false;
  };
  React.useEffect(() => {
    if (!captureWindowKeydown || !isActive) return undefined;
    const target = keyboardEventTarget ?? window;
    const onWindowKeyDown = (event: KeyboardEvent) => {
      handleKeyDown(event);
    };
    target.addEventListener("keydown", onWindowKeyDown, true);
    return () => {
      target.removeEventListener("keydown", onWindowKeyDown, true);
    };
  }, [captureWindowKeydown, handleKeyDown, isActive, keyboardEventTarget]);
  return {
    highlightedIndex,
    setHighlightedIndex,
    listRef,
    handleKeyDown,
    getInputProps<Event extends NavigationKeyboardEvent>(
      props: InputProps<Event> = {},
    ) {
      return {
        onKeyDown: (event: Event) => {
          if (!handleKeyDown(event)) props.onKeyDown?.(event);
        },
      };
    },
    getItemProps<ClickEvent = unknown, MouseMoveEvent = unknown>(
      index: number,
      props: ItemProps<ClickEvent, MouseMoveEvent> = {},
    ) {
      return {
        onClick: (event: ClickEvent) => {
          selectIndex(index);
          props.onClick?.(event);
        },
        onMouseMove: (event: MouseMoveEvent) => {
          if (isActive && index >= 0 && index < itemCount) {
            setHighlightedIndex(index);
          }
          props.onMouseMove?.(event);
        },
        "data-list-navigation-item": "true" as const,
      };
    },
  };
}
function wrapIndex(index: number, itemCount: number) {
  if (itemCount <= 0) return -1;
  const wrappedIndex = index % itemCount;
  return wrappedIndex < 0 ? wrappedIndex + itemCount : wrappedIndex;
}
function consumeKeyboardEvent(event: NavigationKeyboardEvent) {
  event.preventDefault?.();
  event.stopPropagation?.();
}
