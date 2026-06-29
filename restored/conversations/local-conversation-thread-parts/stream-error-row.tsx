// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Conversation row for a response-stream error, with reconnect progress and an expandable details section.
import type { ReactNode } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { FormattedMessage } from "../../vendor/react-intl";
import {
  ConversationSummaryRow,
  AnimatedNumber,
  DisclosureChevronIcon,
  useDisclosureContentHeight,
  activityDisclosureTransition,
} from "../../boundaries/onboarding-commons-externals.facade";

export interface StreamErrorItem {
  content: ReactNode;
  additionalDetails?: string | null;
  reconnectAttempt?: number | null;
  reconnectMaxAttempts?: number | null;
}

export interface StreamErrorRowProps {
  item: StreamErrorItem;
}

export function StreamErrorRow({ item }: StreamErrorRowProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { elementHeightPx, elementRef } = useDisclosureContentHeight();

  const details = item.additionalDetails;
  const hasDetails = details != null && details.trim().length > 0;
  const showDetails = hasDetails && isExpanded && details != null;

  const statusContent =
    item.reconnectAttempt == null || item.reconnectMaxAttempts == null ? (
      item.content
    ) : (
      <FormattedMessage
        id="localConversation.streamError.reconnecting"
        defaultMessage="Reconnecting {progress}"
        description="Status shown while a disconnected response stream is reconnecting. The values are the current retry attempt and maximum retry attempts."
        values={{
          progress: (
            <span
              key="progress"
              className="inline-flex items-baseline align-baseline leading-[inherit] text-[inherit] tabular-nums [--rolling-number-y-offset:0px]"
            >
              <AnimatedNumber value={item.reconnectAttempt} variant="inline" />
              <span>
                <FormattedMessage
                  id="localConversation.streamError.reconnectingProgressDenominator"
                  defaultMessage="/{maxAttempts}"
                  description="The denominator portion of reconnect retry progress, for example /5 in Reconnecting 1/5."
                  values={{ maxAttempts: item.reconnectMaxAttempts }}
                />
              </span>
            </span>
          ),
        }}
      />
    );

  const header = (
    <div
      className={clsx(
        "group flex min-w-0 items-start gap-1",
        hasDetails ? "cursor-interaction" : "cursor-default",
      )}
      onClick={() => {
        if (hasDetails) setIsExpanded((expanded) => !expanded);
      }}
    >
      <div className="text-size-chat min-w-0 whitespace-pre-wrap text-token-description-foreground/80">
        {statusContent}
      </div>
      {hasDetails && (
        <DisclosureChevronIcon
          className={clsx(
            "text-token-input-placeholder-foreground icon-2xs mt-0.5 flex-shrink-0 transition-[opacity,rotate] duration-300 opacity-0 group-hover:opacity-100",
            isExpanded && "opacity-100",
            isExpanded ? "rotate-180" : "",
          )}
        />
      )}
    </div>
  );

  const detailsBody = (
    <motion.div
      initial={false}
      animate={{
        height: showDetails ? elementHeightPx : 0,
        opacity: showDetails ? 1 : 0,
      }}
      transition={activityDisclosureTransition}
      className={clsx(showDetails ? "overflow-visible" : "overflow-hidden")}
      style={{ pointerEvents: showDetails ? "auto" : "none" }}
    >
      <div ref={showDetails ? elementRef : null}>
        {showDetails ? (
          <div className="mt-1 flex flex-col gap-1">
            <div className="text-size-chat whitespace-pre-wrap text-token-description-foreground/80">
              {details}
            </div>
          </div>
        ) : null}
      </div>
    </motion.div>
  );

  return (
    <ConversationSummaryRow>
      <div className="flex min-w-0 flex-col">
        {header}
        {detailsBody}
      </div>
    </ConversationSummaryRow>
  );
}
