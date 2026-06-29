// Restored from ref/webview/assets/app-initial~app-main~automations-page-BfqUlSo6.js
// Gift credits browser action, feature gate, and menu icon.

import type { SVGProps } from "react";
import { vscodeApiF as vscodeBridge } from "../boundaries/vscode-api";

export const GIFT_CREDITS_FEATURE_GATE = "1728613635";
export const GIFT_CREDITS_URL = "https://chatgpt.com/gifts/credits";

export type GiftCreditsIconProps = SVGProps<SVGSVGElement>;

export function openGiftCreditsInBrowser(): void {
  vscodeBridge.dispatchMessage("open-in-browser", {
    url: GIFT_CREDITS_URL,
  });
}

export function initGiftCreditsLinkChunk(): void {}

export function GiftCreditsIcon(props: GiftCreditsIconProps) {
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
        d="M3.333 8.333h13.334v8.334H3.333V8.333Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <path
        d="M2.5 5.833h15v2.5h-15v-2.5Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <path
        d="M10 5.833v10.834"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <path
        d="M10 5.833H7.917A2.083 2.083 0 1 1 10 3.75v2.083Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <path
        d="M10 5.833h2.083A2.083 2.083 0 1 0 10 3.75v2.083Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function initGiftCreditsIconChunk(): void {}
