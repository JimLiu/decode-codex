// Restored from ref/webview/assets/play-circle-CCp03g7O.js
// Also matches ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~lxml58r4-kB1QbLtZ.js.
// Semantic circle play icon module with the legacy PlayCircleIcon alias.

import type { IconProps } from "./types";

export function CirclePlayIcon(props: IconProps): JSX.Element {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.96582 7.81836C7.96613 7.17202 8.68075 6.78163 9.22461 7.13086L12.6182 9.3125C13.1184 9.6343 13.1184 10.3657 12.6182 10.6875L9.22461 12.8691C8.68075 13.2184 7.96613 12.828 7.96582 12.1816V7.81836Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 2.08496C14.3713 2.08496 17.915 5.62867 17.915 10C17.915 14.3713 14.3713 17.915 10 17.915C5.62867 17.915 2.08496 14.3713 2.08496 10C2.08496 5.62867 5.62867 2.08496 10 2.08496ZM10 3.41504C6.3632 3.41504 3.41504 6.3632 3.41504 10C3.41504 13.6368 6.3632 16.585 10 16.585C13.6368 16.585 16.585 13.6368 16.585 10C16.585 6.3632 13.6368 3.41504 10 3.41504Z"
        fill="currentColor"
      />
    </svg>
  );
}

export const PlayCircleIcon = CirclePlayIcon;

export default CirclePlayIcon;
