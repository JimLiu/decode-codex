// Restored from ref/webview/assets/inline-mention-content-CTO-ayBF.js
// inline-mention-content-CTO-ayBF chunk restored from the Codex webview bundle.
import clsx from "clsx";
import React from "react";
import type { ElementType, ReactElement, ReactNode } from "react";
import {
  inlineMentionBrandAwareClass,
  inlineMentionIconClass,
  inlineMentionIconWrapperClass,
  inlineMentionPaddingClass,
  mergeInlineMentionBrandStyle,
} from "./inline-mention-style";
type InlineMentionStyle = React.CSSProperties &
  Record<string, string | number | undefined>;
type InlineMentionIcon =
  | ElementType<{
      className?: string;
    }>
  | ReactElement<{
      className?: string;
    }>;
type InlineMentionContentProps = {
  brandColor?: string | null;
  className?: string;
  dataAttributes?: Record<string, string | number | boolean | undefined>;
  icon?: InlineMentionIcon | null;
  interactive?: boolean;
  style?: InlineMentionStyle;
  text: ReactNode;
  textClassName?: string;
  title?: string;
  underlineOnHover?: boolean;
};
export function InlineMentionContent({
  brandColor,
  className,
  dataAttributes,
  icon,
  interactive = false,
  style,
  text,
  textClassName,
  title,
  underlineOnHover = false,
}: InlineMentionContentProps) {
  const renderedIcon = renderInlineMentionIcon(icon);
  const rootClassName = clsx(
    inlineMentionPaddingClass,
    inlineMentionBrandAwareClass,
    underlineOnHover &&
      "group-hover/inline-mention:underline group-hover/inline-mention:decoration-current group-hover/inline-mention:decoration-dashed group-hover/inline-mention:decoration-[0.5px] group-hover/inline-mention:underline-offset-2",
    interactive && "cursor-interaction",
    className,
  );
  const mergedStyle = mergeInlineMentionBrandStyle({
    brandColor,
    style,
  });
  return (
    <span
      className={rootClassName}
      style={mergedStyle}
      title={title}
      {...dataAttributes}
    >
      {renderedIcon == null ? null : (
        <span className={inlineMentionIconWrapperClass}>{renderedIcon}</span>
      )}
      <span className={clsx("min-w-0 break-words", textClassName)}>{text}</span>
    </span>
  );
}
function renderInlineMentionIcon(icon: InlineMentionIcon | null | undefined) {
  if (icon == null) return null;
  if (
    React.isValidElement<{
      className?: string;
    }>(icon)
  ) {
    return React.cloneElement(icon, {
      className: clsx(inlineMentionIconClass, icon.props.className),
    });
  }
  const Icon = icon;
  return <Icon className={inlineMentionIconClass} />;
}
