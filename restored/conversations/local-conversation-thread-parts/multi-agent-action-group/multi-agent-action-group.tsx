// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Disclosure group for multi-agent conversation actions.

import * as React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { FormattedMessage, useIntl } from "../../../vendor/react-intl";
import {
  ActivityDisclosureHeaderRow,
  ActivityDisclosureLayout,
  AnimatedActivityLabel,
  SubagentInlineActivityContext,
  activityDisclosureTransition,
  useConversationParentModel,
  useDisclosureContentHeight,
  useMultiAgentActionsEnabled,
} from "../../../boundaries/onboarding-commons-externals.facade";
import { PeopleGroupIcon } from "../../../icons/people-group-icon";
import { aggregateStatus, countAgents } from "./agent-model";
import { MultiAgentActionRows } from "./action-rows";
import { formatHeaderLabel } from "./formatters";
import type { MultiAgentActionItem, OpenAgentThreadHandler } from "./types";

export interface MultiAgentActionGroupProps {
  conversationId: string;
  items: MultiAgentActionItem[];
}

export function MultiAgentActionGroup({
  conversationId,
  items,
}: MultiAgentActionGroupProps) {
  const inlineActivity = React.useContext(SubagentInlineActivityContext);
  const enabled = useMultiAgentActionsEnabled();
  const intl = useIntl();
  const firstItem = items[0];
  const parentModel = useConversationParentModel(conversationId);
  const [expanded, setExpanded] = React.useState(false);
  const status = aggregateStatus(items);
  const isInProgress = status === "inProgress";
  const { elementHeightPx, elementRef } = useDisclosureContentHeight();
  const agentCount = countAgents(items);
  const onOpenAgentThread: OpenAgentThreadHandler = (input) => {
    inlineActivity?.(input);
  };

  if (!enabled) return null;

  const disclosure = {
    expanded,
    onToggle: () => setExpanded((value) => !value),
  };

  const icon = (
    <PeopleGroupIcon
      aria-hidden
      className="icon-xs shrink-0 text-token-input-placeholder-foreground"
    />
  );

  const headerLabel = formatHeaderLabel({
    action: firstItem.action,
    status,
    intl,
  });
  const headerAction = (
    <AnimatedActivityLabel
      key="action"
      active={isInProgress}
      className="text-token-conversation-summary-leading group-hover/activity-header:text-token-foreground"
    >
      {headerLabel}
    </AnimatedActivityLabel>
  );
  const countLabel =
    agentCount > 0
      ? intl.formatMessage(
          {
            id: "localConversation.multiAgentAction.header.count",
            defaultMessage: " {count, plural, one {an agent} other {# agents}}",
            description: "Agent count suffix shown for multi-agent actions.",
          },
          { count: agentCount },
        )
      : "";
  const headerValues = { action: headerAction, countLabel };

  const headerTrailing = (
    <span className="text-size-chat truncate text-token-conversation-summary-trailing">
      <FormattedMessage
        id="localConversation.multiAgentAction.header"
        defaultMessage={"{action}{countLabel}"}
        description="Header row for multi-agent action events."
        values={headerValues}
      />
    </span>
  );

  const header = (
    <ActivityDisclosureHeaderRow
      disclosure={disclosure}
      testId="multi-agent-action-header"
    >
      {icon}
      {headerTrailing}
    </ActivityDisclosureHeaderRow>
  );

  const animate = {
    height: expanded ? elementHeightPx : 0,
    opacity: expanded ? 1 : 0,
  };
  const overflowClassName = clsx(
    expanded ? "overflow-visible" : "overflow-hidden",
  );
  const bodyStyle = {
    pointerEvents: expanded ? ("auto" as const) : ("none" as const),
    visibility: expanded ? ("visible" as const) : ("hidden" as const),
  };

  const rows = (
    <MultiAgentActionRows
      items={items}
      parentModel={parentModel}
      onOpenAgentThread={onOpenAgentThread}
    />
  );
  const body = (
    <motion.div
      initial={false}
      animate={animate}
      transition={activityDisclosureTransition}
      className={overflowClassName}
      style={bodyStyle}
    >
      <div
        ref={expanded ? elementRef : null}
        className="flex flex-col gap-0.5"
        data-testid="multi-agent-action-rows"
      >
        {rows}
      </div>
    </motion.div>
  );

  return <ActivityDisclosureLayout header={header} body={body} />;
}
