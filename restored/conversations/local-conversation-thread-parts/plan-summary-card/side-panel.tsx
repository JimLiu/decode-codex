// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Plan summary card for local conversation turns, including the side-panel "Plan" tab opener.
import React, { useId, useState } from "react";
import { motion } from "framer-motion";
import { classNames } from "../../../utils/class-names";
import { copyToClipboard } from "../../../utils/copy-to-clipboard";
import { FormattedMessage, useIntl } from "../../../vendor/react-intl";
import { Button } from "../../../ui/button";
import {
  ChevronDownIcon,
  ConversationCard,
  ConversationMarkdown,
  CopyButton,
  DownloadIcon,
  ExternalLinkIcon,
  IconButtonTooltip,
  PlanIcon,
  PlatformGate,
  ShareConversationButton,
  ShimmerText,
  SidePanelIcon,
  SidePanelTabId,
  appAtomScope,
  codexAnalyticsConfigAtom,
  createScopedAtom,
  defaultLayoutTransition,
  hostMessageBridge,
  planSidePanelEnabledAtom,
  sidePanelTabManager,
  useAppStore,
  useAtomValue,
} from "../../../boundaries/onboarding-commons-externals.facade";

export const planSidePanelTabKeyAtom = createScopedAtom<string | null>(
  appAtomScope,
  null,
);

export type AppStore = {
  get<TValue>(atom: unknown): TValue;
  set(atom: unknown, value: unknown): void;
};

type OpenPlanSidePanelTabOptions = {
  content: string;
  conversationId: string;
  cwd?: string | null;
  hideCodeBlocks?: boolean;
  key: string;
  title: string;
};

type PlanSummaryTabContentProps = {
  content: string;
  conversationId: string;
  cwd?: string | null;
  hideCodeBlocks?: boolean;
};

export function openPlanSummarySidePanelTab(
  store: AppStore,
  {
    content,
    conversationId,
    cwd,
    hideCodeBlocks,
    key,
    title,
  }: OpenPlanSidePanelTabOptions,
): void {
  store.set(planSidePanelTabKeyAtom, key);
  sidePanelTabManager.openTab(store, PlanSummaryTabContent, {
    icon: <PlanIcon className="icon-xs shrink-0" aria-hidden={true} />,
    id: SidePanelTabId.PLAN,
    onClose: (tabStore: AppStore) => {
      if (tabStore.get(planSidePanelTabKeyAtom) === key) {
        tabStore.set(planSidePanelTabKeyAtom, null);
      }
    },
    props: { content, conversationId, cwd, hideCodeBlocks },
    title,
  });
}

function PlanSummaryTabContent({
  content,
  conversationId,
  cwd,
  hideCodeBlocks,
}: PlanSummaryTabContentProps) {
  return (
    <div className="h-full min-h-0 overflow-y-auto px-1">
      <ConversationMarkdown
        markdown={content}
        conversationId={conversationId}
        cwd={cwd}
        hideCodeBlocks={hideCodeBlocks}
      />
    </div>
  );
}
