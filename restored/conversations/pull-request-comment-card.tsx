// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~hotkey-win~fzw0jvy4-rg89odR_.js
// Pull-request review comment card.
import * as React from "react";
import clsx from "clsx";
import type { ReactNode } from "react";
import { PullRequestDescriptionMarkdown } from "./pull-request-description-markdown-renderer";
import { parsePullRequestDescriptionMarkdown } from "./pull-request-description-markdown-parser";

type PullRequestCommentPosition = {
  line?: number | null;
  path?: string | null;
  side?: "left" | "right" | string | null;
  start_line?: number | null;
  start_side?: "left" | "right" | string | null;
};

type PullRequestCommentLike = {
  authorAvatarUrl?: string | null;
  authorLogin?: string | null;
  body?: ReactNode;
  position?: PullRequestCommentPosition | null;
  text?: ReactNode;
  url?: string | null;
};

type PullRequestCommentReply = {
  authorAvatarUrl?: string | null;
  authorLogin?: string | null;
  body?: ReactNode;
  text?: ReactNode;
};

export interface PullRequestCommentCardProps {
  authorAvatarUrl?: string | null;
  authorLogin?: string | null;
  body?: ReactNode;
  bodyClassName?: string;
  bodyPreview?: boolean;
  className?: string;
  comment?: PullRequestCommentLike | null;
  createdAt?: string | null;
  defaultCollapsed?: boolean;
  metadataAccessory?: ReactNode;
  metadataAccessoryFlush?: boolean;
  metadataTooltipContent?: ReactNode;
  onOpenInReview?: () => void;
  replies?: PullRequestCommentReply[];
  showDiffLocation?: boolean;
  surface?: "plain" | "timeline" | string;
  url?: string | null;
}

type AvatarProps = {
  author: string;
  size: "small" | "normal";
  src?: string | null;
};

export function initPullRequestCommentCardChunk(): void {}

export function PullRequestCommentCard({
  authorAvatarUrl,
  authorLogin,
  body,
  bodyClassName,
  bodyPreview = false,
  className,
  comment,
  createdAt,
  defaultCollapsed = false,
  metadataAccessory,
  metadataAccessoryFlush = false,
  metadataTooltipContent,
  onOpenInReview,
  replies = [],
  showDiffLocation = false,
  surface = "plain",
  url,
}: PullRequestCommentCardProps) {
  const [collapsed, setCollapsed] = React.useState(defaultCollapsed);
  const resolvedAuthor =
    authorLogin ?? comment?.authorLogin ?? "Unknown author";
  const resolvedAvatarUrl = authorAvatarUrl ?? comment?.authorAvatarUrl ?? null;
  const resolvedBody = reactNodeToText(comment?.text ?? comment?.body ?? body);
  const resolvedUrl = url ?? comment?.url ?? null;
  const compact = surface === "timeline";
  const locationLabel =
    showDiffLocation && comment?.position != null
      ? formatCommentLocation(comment.position)
      : null;
  const cardTitle =
    typeof metadataTooltipContent === "string"
      ? metadataTooltipContent
      : undefined;

  if (bodyPreview) {
    return (
      <div className={clsx("flex min-w-0 gap-2 py-1", className)}>
        <PullRequestCommentAvatar
          author={resolvedAuthor}
          size="normal"
          src={resolvedAvatarUrl}
        />
        <div className="flex min-w-0 flex-1 flex-col gap-0.5">
          <PullRequestDescriptionMarkdown
            allowBasicHtml={true}
            className="line-clamp-3 text-base break-words text-token-foreground [&_img]:hidden [&_p]:my-0 [&_strong]:font-normal"
            cwd={null}
          >
            {parsePullRequestDescriptionMarkdown(resolvedBody)}
          </PullRequestDescriptionMarkdown>
          <PullRequestCommentPreviewMetadata
            createdAt={createdAt}
            onOpenInReview={onOpenInReview}
            path={comment?.position?.path}
            url={resolvedUrl}
          />
        </div>
      </div>
    );
  }

  if (resolvedAuthor == null && createdAt == null) {
    return (
      <PullRequestDescriptionMarkdown
        allowBasicHtml={true}
        className={clsx(
          "text-size-chat break-words text-token-foreground [&_details]:mt-3 [&_p]:leading-6",
          bodyClassName,
          className,
        )}
        cwd={null}
      >
        {parsePullRequestDescriptionMarkdown(resolvedBody)}
      </PullRequestDescriptionMarkdown>
    );
  }

  const markdown = collapsed ? null : (
    <div className={clsx("min-w-0", bodyClassName)}>
      <PullRequestDescriptionMarkdown
        allowBasicHtml={true}
        className={clsx(
          compact
            ? "px-3 py-2 text-base [&_p]:leading-5"
            : "text-size-chat px-3 py-2.5 [&_p]:leading-6",
          "break-words text-token-foreground [&_details]:mt-3 [&_details]:rounded-[14px] [&_details]:border [&_details]:border-token-border/16 [&_details]:bg-token-bg-primary/28 [&_details]:px-3.5 [&_details]:py-3 [&_summary]:cursor-pointer [&_summary]:font-medium [&_summary]:text-token-foreground",
        )}
        cwd={null}
      >
        {parsePullRequestDescriptionMarkdown(resolvedBody)}
      </PullRequestDescriptionMarkdown>
      {replies.length > 0 ? (
        <div className="flex flex-col border-t border-token-border/24 bg-token-bg-primary/20">
          {replies.map((reply, index) => (
            <PullRequestCommentReplyRow
              key={index}
              index={index}
              reply={reply}
            />
          ))}
        </div>
      ) : null}
    </div>
  );

  return (
    <article
      className={clsx(
        "group/comment min-w-0 overflow-hidden border-token-border/24",
        compact
          ? "rounded-lg border bg-token-bg-primary/30"
          : "rounded-xl border bg-token-bg-primary/20",
        className,
      )}
      title={cardTitle}
    >
      <button
        aria-expanded={!collapsed}
        aria-label={collapsed ? "Expand comment" : "Collapse comment"}
        className={clsx(
          "flex w-full min-w-0 items-start gap-2 text-left",
          compact ? "px-3 py-2" : "px-3 py-2.5",
        )}
        type="button"
        onClick={() => setCollapsed((value) => !value)}
      >
        <PullRequestCommentAvatar
          author={resolvedAuthor}
          size={compact ? "small" : "normal"}
          src={resolvedAvatarUrl}
        />
        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <div className="flex min-w-0 items-center gap-2">
            <span className="min-w-0 truncate font-medium text-token-foreground">
              {resolvedAuthor}
            </span>
            {createdAt == null ? null : (
              <span className="shrink-0 text-token-description-foreground">
                {formatCommentDate(createdAt)}
              </span>
            )}
            {resolvedUrl == null ? null : (
              <a
                aria-label="Open comment on GitHub"
                className="ml-auto shrink-0 text-token-description-foreground hover:text-token-foreground"
                href={resolvedUrl}
                rel="noreferrer"
                target="_blank"
                onClick={stopHeaderActionClick}
              >
                Open
              </a>
            )}
          </div>
          {locationLabel == null && metadataAccessory == null ? null : (
            <div className="flex min-w-0 items-center gap-2 text-xs leading-4 text-token-description-foreground">
              {locationLabel == null ? null : (
                <span className="min-w-0 truncate">{locationLabel}</span>
              )}
              {metadataAccessory}
            </div>
          )}
        </div>
      </button>
      {markdown}
      {!collapsed && metadataAccessory != null && !compact ? (
        <div
          className={clsx(
            "border-t border-token-border/24",
            metadataAccessoryFlush ? "" : "px-3 py-2",
          )}
        >
          {metadataAccessory}
        </div>
      ) : null}
    </article>
  );
}

function PullRequestCommentAvatar({ author, size, src }: AvatarProps) {
  const [failedSrc, setFailedSrc] = React.useState<string | null>(null);
  const showImage = src != null && src !== failedSrc;
  const sizeClassName =
    size === "small" ? "size-4 text-[10px]" : "size-6 text-xs";
  if (showImage) {
    return (
      <img
        alt={`${author} avatar`}
        className={clsx(
          "shrink-0 rounded-full bg-white object-cover",
          sizeClassName,
        )}
        src={src}
        onError={() => setFailedSrc(src)}
      />
    );
  }

  return (
    <span
      className={clsx(
        "flex shrink-0 items-center justify-center rounded-full bg-white font-semibold text-token-foreground",
        sizeClassName,
      )}
    >
      {author.slice(0, 1).toUpperCase()}
    </span>
  );
}

function PullRequestCommentPreviewMetadata({
  createdAt,
  onOpenInReview,
  path,
  url,
}: {
  createdAt?: string | null;
  onOpenInReview?: () => void;
  path?: string | null;
  url?: string | null;
}) {
  const filename = path == null ? null : (path.split("/").at(-1) ?? path);
  const content =
    filename == null && createdAt == null ? null : (
      <>
        {filename == null ? null : (
          <span className="min-w-0 truncate text-token-text-tertiary">
            {filename}
          </span>
        )}
        {createdAt == null ? null : (
          <span className="shrink-0 text-token-text-tertiary">
            {formatCommentDate(createdAt)}
          </span>
        )}
      </>
    );

  if (content == null) return null;

  if (onOpenInReview != null) {
    return (
      <button
        aria-label="Open comment in review"
        className="group flex min-w-0 cursor-pointer items-center justify-between gap-2 text-base"
        type="button"
        onClick={onOpenInReview}
      >
        {content}
      </button>
    );
  }

  if (url != null) {
    return (
      <a
        aria-label="Open comment on GitHub"
        className="group flex min-w-0 cursor-pointer items-center justify-between gap-2 text-base"
        href={url}
        rel="noreferrer"
        target="_blank"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="flex min-w-0 items-center justify-between gap-2 text-base">
      {content}
    </div>
  );
}

function PullRequestCommentReplyRow({
  index,
  reply,
}: {
  index: number;
  reply: PullRequestCommentReply;
}) {
  const replyText = reactNodeToText(reply.text ?? reply.body);
  return (
    <div className="flex gap-2 px-3 py-2" data-reply-index={index}>
      <PullRequestCommentAvatar
        author={reply.authorLogin ?? "Unknown author"}
        size="small"
        src={reply.authorAvatarUrl}
      />
      <PullRequestDescriptionMarkdown
        allowBasicHtml={true}
        className="text-size-chat break-words text-token-foreground [&_p]:leading-6"
        cwd={null}
      >
        {parsePullRequestDescriptionMarkdown(replyText)}
      </PullRequestDescriptionMarkdown>
    </div>
  );
}

function formatCommentLocation(
  position: PullRequestCommentPosition,
): string | null {
  if (position.line == null || position.side == null) return null;
  const side = position.side === "left" ? "L" : "R";
  const startLine = position.start_line ?? position.line;
  if (startLine === position.line)
    return `Comment on line ${side}${position.line}`;
  return `Comment on lines ${side}${startLine} to ${side}${position.line}`;
}

function formatCommentDate(dateString: string): string {
  const date = new Date(dateString);
  if (!Number.isFinite(date.getTime())) return dateString;
  return new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

function reactNodeToText(node: ReactNode): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(reactNodeToText).join("");
  if (React.isValidElement<{ children?: ReactNode }>(node)) {
    return reactNodeToText(node.props.children);
  }
  return "";
}

function stopHeaderActionClick(
  event: React.MouseEvent<HTMLAnchorElement>,
): void {
  event.stopPropagation();
}
