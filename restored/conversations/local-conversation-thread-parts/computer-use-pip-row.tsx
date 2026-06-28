// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Computer Use picture-in-picture visibility control for the thread side panel.
import type { SVGProps } from "react";
import { FormattedMessage } from "../../vendor/react-intl";
import { SummaryPanelRow } from "../../utils/summary-panel-row";

export type ComputerUsePictureInPictureRowProps = {
  isVisible: boolean;
  onToggle: () => void;
  toggleLabel: string;
};

export function ComputerUsePictureInPictureRow({
  isVisible,
  onToggle,
  toggleLabel,
}: ComputerUsePictureInPictureRowProps) {
  return (
    <SummaryPanelRow
      aria-label={toggleLabel}
      icon={<ComputerUsePictureInPictureIcon className="icon-xs shrink-0" />}
      label={
        <FormattedMessage
          id="codex.localConversation.remoteHostedPip.computerUse"
          defaultMessage="Computer Use"
          description="Label for the Computer Use PiP visibility control in the thread summary side panel"
        />
      }
      onClick={onToggle}
      title={toggleLabel}
      trailing={<PictureInPictureVisibilityIndicator isVisible={isVisible} />}
      trailingVisible={true}
    />
  );
}

function ComputerUsePictureInPictureIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={29}
      height={16}
      viewBox="0 0 29 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 14.7754C0 14.4694 0.107422 14.209 0.322266 13.9941C0.537109 13.7728 0.797526 13.6621 1.10352 13.6621H3.24219V2.07031C3.24219 1.38672 3.42773 0.872396 3.79883 0.527344C4.17643 0.175781 4.6875 0 5.33203 0H22.832C23.5156 0 24.0332 0.175781 24.3848 0.527344C24.7428 0.872396 24.9219 1.38672 24.9219 2.07031V13.6621H27.0605C27.3665 13.6621 27.627 13.7728 27.8418 13.9941C28.0566 14.209 28.1641 14.4694 28.1641 14.7754C28.1641 15.0814 28.0566 15.3418 27.8418 15.5566C27.627 15.778 27.3665 15.8887 27.0605 15.8887H1.10352C0.797526 15.8887 0.537109 15.778 0.322266 15.5566C0.107422 15.3418 0 15.0814 0 14.7754ZM4.81445 13.6621H23.3496V2.50977C23.3496 2.19727 23.2715 1.96289 23.1152 1.80664C22.959 1.65039 22.7246 1.57227 22.4121 1.57227H5.75195C5.43945 1.57227 5.20508 1.65039 5.04883 1.80664C4.89258 1.96289 4.81445 2.19727 4.81445 2.50977V13.6621Z"
        fill="currentColor"
      />
    </svg>
  );
}

function PictureInPictureVisibilityIndicator({
  isVisible,
}: {
  isVisible: boolean;
}) {
  return (
    <span className="relative flex size-5 shrink-0 items-center justify-center text-token-text-tertiary">
      <svg
        aria-hidden={true}
        className="size-5"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.75 10C4.35 7.42 6.74 6.13 10 6.13C13.26 6.13 15.65 7.42 17.25 10C15.65 12.58 13.26 13.87 10 13.87C6.74 13.87 4.35 12.58 2.75 10Z"
          stroke="currentColor"
          strokeWidth={1.35}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx={10}
          cy={10}
          r={2.1}
          stroke="currentColor"
          strokeWidth={1.35}
        />
      </svg>
      {isVisible ? null : (
        <svg
          aria-hidden={true}
          className="absolute size-5"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 16L16 4"
            stroke="currentColor"
            strokeWidth={1.6}
            strokeLinecap="round"
          />
        </svg>
      )}
    </span>
  );
}
