// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Transcript item that renders a request_user_input turn: a collapsible "Asked N
// questions" summary with the questions and the user's answers.

import { useState } from "react";
import { FormattedMessage } from "../../vendor/react-intl";
import { classNames } from "../../utils/class-names";
import {
  ActivityDisclosurePaddedRegion,
  activityDisclosureTransition,
  ChevronRightIcon,
  ConversationStatusRow,
  motion,
  useDisclosureContentHeight,
} from "../../boundaries/onboarding-commons-externals.facade";

const QUESTION_CLASS_NAME = "text-size-chat text-token-conversation-body";
const ANSWER_CLASS_NAME = "text-size-chat text-token-conversation-header";

export interface UserInputQuestionAndAnswer {
  id: string;
  question: string;
  answers: string[];
}

export interface UserInputRequestItem {
  requestId: string;
  completed: boolean;
  questionsAndAnswers: UserInputQuestionAndAnswer[];
}

export function UserInputRequestItem({ item }: { item: UserInputRequestItem }) {
  const [openRequestId, setOpenRequestId] = useState<string | null>(null);
  const hasQuestions = item.questionsAndAnswers.length > 0;
  const isOpen = openRequestId === item.requestId;
  const isExpanded = hasQuestions && isOpen;
  const { elementHeightPx, elementRef } = useDisclosureContentHeight();
  const contentHeight = isExpanded ? elementHeightPx : 0;

  if (!item.completed) {
    return (
      <ActivityDisclosurePaddedRegion padding="offset">
        <ConversationStatusRow
          className="text-token-conversation-header"
          message={
            <FormattedMessage
              id="localConversation.userInputRequest.inProgress"
              defaultMessage="Asking {count, plural, one {question} other {questions}}"
              description="Label shown while the assistant is waiting for user input"
              values={{ count: item.questionsAndAnswers.length }}
            />
          }
        />
      </ActivityDisclosurePaddedRegion>
    );
  }

  const toggle = () => {
    if (hasQuestions) {
      setOpenRequestId((current) =>
        current === item.requestId ? null : item.requestId,
      );
    }
  };

  const askedLabel = (
    <span className="text-token-conversation-summary-leading group-hover:text-token-foreground">
      <FormattedMessage
        id="localConversation.userInputRequest.summary.asked"
        defaultMessage="Asked"
        description="Verb prefix shown before the question count in completed request_user_input items"
      />
    </span>
  );

  const summary = (
    <span className="truncate">
      <FormattedMessage
        id="localConversation.userInputRequest.summary"
        defaultMessage="{label} {counts}"
        description="Summary shown for completed request_user_input items"
        values={{
          label: askedLabel,
          counts: (
            <span className="text-token-conversation-summary-trailing group-hover:text-token-foreground">
              <FormattedMessage
                id="localConversation.userInputRequest.summary.count"
                defaultMessage="{count, plural, one {# question} other {# questions}}"
                description="Question count shown in completed request_user_input summary"
                values={{ count: item.questionsAndAnswers.length }}
              />
            </span>
          ),
        }}
      />
    </span>
  );

  const chevron = hasQuestions ? (
    <ChevronRightIcon
      className={classNames(
        "text-token-input-placeholder-foreground group-hover:text-token-foreground icon-2xs flex-shrink-0 transition-[color,opacity,rotate] duration-500 opacity-0 group-hover:opacity-100",
        isOpen && "opacity-100",
        isOpen && "rotate-90",
      )}
    />
  ) : null;

  const trigger = (
    <button
      type="button"
      className={classNames(
        "group flex min-w-0 items-center gap-1.5 text-left",
        hasQuestions ? "cursor-interaction" : "cursor-default",
      )}
      onClick={toggle}
    >
      {summary}
      {chevron}
    </button>
  );

  const expandedContent = (
    <motion.div
      initial={false}
      animate={{ height: contentHeight, opacity: isExpanded ? 1 : 0 }}
      transition={activityDisclosureTransition}
      className={classNames(
        isExpanded ? "mt-1.5 overflow-visible" : "overflow-hidden",
      )}
      style={{ pointerEvents: isExpanded ? "auto" : "none" }}
    >
      <div
        ref={isExpanded ? elementRef : null}
        className="flex flex-col gap-3 pt-1 pb-0.5"
      >
        {item.questionsAndAnswers.map((entry) => (
          <UserInputQuestionRow key={entry.id} entry={entry} />
        ))}
      </div>
    </motion.div>
  );

  return (
    <ActivityDisclosurePaddedRegion padding="offset">
      <div className="flex flex-col">
        {trigger}
        {expandedContent}
      </div>
    </ActivityDisclosurePaddedRegion>
  );
}

function UserInputQuestionRow({
  entry,
}: {
  entry: UserInputQuestionAndAnswer;
}) {
  return (
    <div className="flex flex-col gap-1">
      <span className={QUESTION_CLASS_NAME}>{entry.question}</span>
      <span className={ANSWER_CLASS_NAME}>
        {entry.answers.length > 0 ? (
          entry.answers.join(", ")
        ) : (
          <FormattedMessage
            id="localConversation.userInputRequest.noAnswer"
            defaultMessage="No answer provided"
            description="Placeholder shown when a user input question has no answer"
          />
        )}
      </span>
    </div>
  );
}
