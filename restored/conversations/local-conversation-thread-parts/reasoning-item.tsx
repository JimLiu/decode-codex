// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// ReasoningItem disclosure: streaming "Thinking" label + collapsible markdown reasoning body.

import * as React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { FormattedMessage } from "../../vendor/react-intl";
import {
  ActivityDisclosureLayout,
  ActivityDisclosureHeaderRow,
  AnimatedActivityLabel,
  AutoScrollingActivityList,
  ConversationMarkdown,
  useDisclosureContentHeight,
  activityDisclosureTransition,
  useInterval,
  parseMarkdown,
  mdastToText,
  stringifyMarkdown,
  formatElapsedDuration,
} from "../../boundaries/onboarding-commons-externals.facade";

export interface ReasoningItemData {
  content: string;
  completed: boolean;
}

export interface ReasoningItemProps {
  item: ReasoningItemData;
  conversationId: string;
  cwd: string | null;
  hideCodeBlocks?: boolean;
}

interface OrderedListGroupData {
  start: number;
  digits: number;
  items: React.ReactNode[];
}

export function orderedListPadding(count: number): string {
  return count <= 1 || count === 2
    ? "pl-8"
    : count === 3
      ? "pl-10"
      : count === 4
        ? "pl-12"
        : "pl-14";
}

export function groupOrderedListItems(
  children: React.ReactNode[],
  start = 1,
): OrderedListGroupData[] {
  const elements = children.filter((item) => React.isValidElement(item));
  const groups: OrderedListGroupData[] = [];
  elements.forEach((item, index) => {
    const position = start + index;
    const digits = String(position).length;
    const lastGroup = groups[groups.length - 1];
    if (!lastGroup || lastGroup.digits !== digits) {
      groups.push({ start: position, digits, items: [item] });
    } else {
      lastGroup.items.push(item);
    }
  });
  return groups;
}

export function stripReasoningHeadingPrefix(content: string): string {
  const trimmed = content.trimStart();
  const boldMatch = trimmed.match(/^\*\*[^\n]*?\*\*\s*/);
  if (boldMatch) return trimmed.slice(boldMatch[0].length).trim();

  const headingMatch = content.match(
    /^#{1,3}[ \t]+([^#\\*_[\]`<>&\r\n]+)(?:\r?\n|$)/,
  );
  if (headingMatch?.[1]?.trim()) {
    return content.slice(headingMatch[0].length).trim();
  }

  try {
    const [first, ...rest] = parseMarkdown(content).children ?? [];
    if (
      first?.type === "heading" ||
      (first?.type === "paragraph" &&
        Array.isArray(first.children) &&
        first.children.length === 1 &&
        first.children[0]?.type === "strong")
    ) {
      return stringifyMarkdown({ type: "root", children: rest }).trim();
    }
  } catch {
    return content;
  }
  return content;
}

export function extractReasoningHeading(content: string): string | null {
  try {
    const [first] = parseMarkdown(content).children;
    if (first?.type === "heading") return mdastToText(first).trim() || null;
    if (
      first?.type === "paragraph" &&
      first.children.length === 1 &&
      first.children[0]?.type === "strong"
    ) {
      const inner = mdastToText(first.children[0]).trim();
      return extractReasoningHeading(inner) ?? (inner || null);
    }
  } catch {
    return null;
  }
  return null;
}

export function stripBoldPrefix(content: string): string {
  const trimmed = content.trimStart();
  const boldMatch = trimmed.match(/^\*\*([^\n]*?)\*\*/);
  if (boldMatch) return trimmed.slice(boldMatch[0].length);
  return trimmed.startsWith("**") ? "" : trimmed;
}

export function renderThinkingLabel(
  isStreaming: boolean,
  elapsed: string | null,
) {
  if (isStreaming) {
    return (
      <FormattedMessage
        id="reasoningItem.thinking"
        defaultMessage="Thinking"
        description="Message shown when AI is currently thinking"
      />
    );
  }
  if (elapsed) {
    return (
      <FormattedMessage
        id="reasoningItem.thoughtWithElapsed"
        defaultMessage="Thought for {elapsed}"
        description="Message shown when AI has finished thinking, including elapsed time"
        values={{ elapsed }}
      />
    );
  }
  return (
    <FormattedMessage
      id="reasoningItem.thought"
      defaultMessage="Thought"
      description="Message shown when AI has finished thinking"
    />
  );
}

export function OrderedListGroup(props: OrderedListGroupData) {
  return (
    <ol
      key={`ol-${props.start}`}
      className={clsx("my-0 list-decimal", orderedListPadding(props.digits))}
      start={props.start}
    >
      {props.items}
    </ol>
  );
}

export function useThinkingDuration(isStreaming: boolean): string | null {
  const [now, setNow] = React.useState(() => Date.now());
  const [startTime, setStartTime] = React.useState<number | null>(() =>
    isStreaming ? Date.now() : null,
  );
  const [finalElapsedMs, setFinalElapsedMs] = React.useState<number | null>(
    null,
  );
  const wasStreamingRef = React.useRef(isStreaming);

  const onStart = React.useEffectEvent((timestamp: number) => {
    setStartTime(timestamp);
    setFinalElapsedMs(null);
    setNow(timestamp);
  });
  const onStop = React.useEffectEvent((start: number) => {
    const stopTime = Date.now();
    setFinalElapsedMs(stopTime - start);
    setNow(stopTime);
    setStartTime(null);
  });

  React.useEffect(() => {
    const wasStreaming = wasStreamingRef.current;
    if (!wasStreaming && isStreaming) onStart(Date.now());
    if (
      wasStreaming &&
      !isStreaming &&
      startTime != null &&
      finalElapsedMs == null
    ) {
      onStop(startTime);
    }
    wasStreamingRef.current = isStreaming;
  }, [finalElapsedMs, isStreaming, startTime]);

  useInterval(
    () => {
      if (isStreaming) setNow(Date.now());
    },
    isStreaming ? 1000 : null,
  );

  const elapsedMs =
    finalElapsedMs ??
    (startTime != null && now >= startTime ? now - startTime : 0);
  if (elapsedMs <= 0) return null;
  return formatElapsedDuration(elapsedMs);
}

export function ReasoningItem(props: ReasoningItemProps) {
  const { item, conversationId, cwd, hideCodeBlocks } = props;
  const isStreaming = !item.completed;
  const elapsed = useThinkingDuration(isStreaming);
  const strippedContent = stripReasoningHeadingPrefix(item.content);
  const label = renderThinkingLabel(isStreaming, elapsed);
  const [expanded, setExpanded] = React.useState(isStreaming);
  const hasPreview = !isStreaming && !!strippedContent;
  const streamingContent = stripBoldPrefix(item.content).trimStart();
  const shouldShowBody = isStreaming ? !!streamingContent : expanded;
  const bodyContent = isStreaming ? streamingContent : strippedContent;
  const { elementHeightPx, elementRef } = useDisclosureContentHeight();

  const collapseWhenIdle = React.useEffectEvent((value: boolean) =>
    setExpanded(value),
  );
  React.useEffect(() => {
    if (!isStreaming) collapseWhenIdle(false);
  }, [isStreaming]);

  const bodyHeight = shouldShowBody ? elementHeightPx : 0;
  const markdownClassName = clsx(
    "text-token-conversation-body [&_*]:text-token-non-assistant-body-descendant",
    "break-words text-size-chat [&_*]:text-size-chat [&>h1]:mt-2 [&>h2]:mt-2 [&>h3]:mt-2 [&>h1+*]:mt-1 [&>h2+*]:mt-1 [&>h3+*]:mt-1 [&>p+p]:mt-1",
  );

  const markdownComponents = {
    p: ({ children }: { children?: React.ReactNode }) => (
      <p className="m-0 has-[.inline-markdown]:py-0.5">{children}</p>
    ),
    h1: ({ children }: { children?: React.ReactNode }) => (
      <h1 className="m-0 font-semibold">{children}</h1>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="m-0 font-semibold">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="m-0 font-semibold">{children}</h3>
    ),
    ul: ({ children }: { children?: React.ReactNode }) => (
      <ul className="my-0 list-disc pl-4">{children}</ul>
    ),
    ol: ({
      children,
      start,
    }: {
      children?: React.ReactNode;
      start?: number;
    }) => (
      <>
        {groupOrderedListItems(React.Children.toArray(children), start).map(
          OrderedListGroup,
        )}
      </>
    ),
    li: ({ children }: { children?: React.ReactNode }) => (
      <li className="m-0">{children}</li>
    ),
  };

  const markdownNode = (
    <ConversationMarkdown
      className={markdownClassName}
      cwd={cwd}
      hideCodeBlocks={hideCodeBlocks}
      isStreaming={isStreaming}
      conversationId={conversationId}
      components={markdownComponents}
    >
      {bodyContent}
    </ConversationMarkdown>
  );

  const disclosure = hasPreview
    ? { expanded, onToggle: () => setExpanded((value) => !value) }
    : undefined;

  const headerClassName = clsx(
    "text-token-conversation-header",
    "text-size-chat truncate group-hover/activity-header:text-token-foreground",
  );
  const headerRow = (
    <ActivityDisclosureHeaderRow disclosure={disclosure}>
      <AnimatedActivityLabel active={isStreaming} className={headerClassName}>
        {label}
      </AnimatedActivityLabel>
    </ActivityDisclosureHeaderRow>
  );

  const animateStyle = { height: bodyHeight, opacity: shouldShowBody ? 1 : 0 };
  const overflowClassName = clsx(
    shouldShowBody ? "overflow-visible" : "overflow-hidden",
  );
  const bodyStyle: React.CSSProperties = {
    pointerEvents: shouldShowBody ? "auto" : "none",
  };

  const activityList = shouldShowBody ? (
    <AutoScrollingActivityList
      items={[{ key: "reasoning-markdown", node: markdownNode }]}
      autoScrollToBottom={isStreaming}
      contentClassName="gap-0"
      maxHeightByState={{
        preview: "8.75rem",
        expanded: "8.75rem",
        collapsed: "0px",
      }}
      viewState="expanded"
      className="[--edge-fade-distance:1rem]"
    />
  ) : null;

  const body = (
    <motion.div
      initial={false}
      animate={animateStyle}
      transition={activityDisclosureTransition}
      className={overflowClassName}
      style={bodyStyle}
    >
      <div ref={shouldShowBody ? elementRef : null} className="pb-0">
        {activityList}
      </div>
    </motion.div>
  );

  return <ActivityDisclosureLayout header={headerRow} body={body} />;
}
