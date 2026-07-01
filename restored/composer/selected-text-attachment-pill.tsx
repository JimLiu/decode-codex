// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Selected text attachment pill and tooltip.

import { FormattedMessage, useIntl } from "../vendor/react-intl";

import { MessageSquareIcon } from "./message-square-icon";
import { PopoverAttachmentPill } from "./popover-attachment-pill";

export interface SelectedTextAttachmentPillProps {
  selections: string[];
  onRemove?: () => void;
}

export function SelectedTextAttachmentPill({
  selections,
  onRemove,
}: SelectedTextAttachmentPillProps) {
  const intl = useIntl();
  if (selections.length === 0) return null;
  const label = intl.formatMessage(
    {
      id: "selectedTextAttachments.numSelections",
      defaultMessage: "{count, plural, one {# selection} other {# selections}}",
      description: "Number of selected text snippets attached to the message",
    },
    { count: selections.length },
  );
  const removeAriaLabel =
    onRemove == null
      ? undefined
      : intl.formatMessage({
          id: "selectedTextAttachments.removeAriaLabel",
          defaultMessage: "Remove selected text attachment",
          description: "Aria label for removing the selected text attachment",
        });
  return (
    <PopoverAttachmentPill
      Icon={MessageSquareIcon}
      label={label}
      onRemove={onRemove}
      onRemoveAriaLabel={removeAriaLabel}
      popoverClassName="w-fit gap-2 px-2 py-1"
      popoverContent={<SelectedTextTooltip selections={selections} />}
      popoverStyle={{
        maxWidth:
          "min(20rem, var(--radix-popover-content-available-width), calc(100vw - 16px))",
      }}
    />
  );
}

export interface SelectedTextTooltipProps {
  selections: string[];
}

export function SelectedTextTooltip({ selections }: SelectedTextTooltipProps) {
  return (
    <div className="flex max-h-56 flex-col gap-1 overflow-y-auto text-left text-sm">
      {selections.map((snippet, index) => (
        <span key={`${index}-${snippet}`} className="line-clamp-3 break-words">
          <FormattedMessage
            id="selectedTextAttachments.tooltipSnippet"
            defaultMessage={"“{text}”"}
            description="Selected text snippet shown inside the selected text attachment tooltip"
            values={{ text: snippet }}
          />
        </span>
      ))}
    </div>
  );
}

export function initSelectedTextAttachmentPillChunk(): void {}
