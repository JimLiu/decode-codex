// Restored from ref/webview/assets/play-circle-CCp03g7O.js
// Also matches ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~lxml58r4-kB1QbLtZ.js.
// Semantic circle pause icon module with the legacy PlayCircleIcon2 alias.

import type { IconProps } from "./types";

export function CirclePauseIcon(props: IconProps): JSX.Element {
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
        d="M10.625 7.91667C10.625 7.57149 10.9048 7.29167 11.25 7.29167H12.0833C12.4285 7.29167 12.7083 7.57149 12.7083 7.91667V12.0833C12.7083 12.4285 12.4285 12.7083 12.0833 12.7083H11.25C10.9048 12.7083 10.625 12.4285 10.625 12.0833V7.91667Z"
        fill="currentColor"
      />
      <path
        d="M7.91667 7.29167C7.57149 7.29167 7.29167 7.57149 7.29167 7.91667V12.0833C7.29167 12.4285 7.57149 12.7083 7.91667 12.7083H8.75001C9.09518 12.7083 9.37501 12.4285 9.37501 12.0833V7.91667C9.37501 7.57149 9.09518 7.29167 8.75001 7.29167H7.91667Z"
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

export const PlayCircleIcon2 = CirclePauseIcon;

export default CirclePauseIcon;
