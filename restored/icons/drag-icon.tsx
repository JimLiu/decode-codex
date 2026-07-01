// Restored from ref/webview/assets/drag-C_Ofnu-y.js
// Semantic icon module: named React component with JSX return value.

import type { SVGProps } from "react";
export type IconProps = SVGProps<SVGSVGElement>;

export function initDragIconChunk(): void {}

export function DragIcon(props: IconProps) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={9.5} cy={5.5} r={1.5} fill="currentColor" />
      <circle cx={9.5} cy={12} r={1.5} fill="currentColor" />
      <circle cx={9.5} cy={18.5} r={1.5} fill="currentColor" />
      <circle cx={14.5} cy={5.5} r={1.5} fill="currentColor" />
      <circle cx={14.5} cy={12} r={1.5} fill="currentColor" />
      <circle cx={14.5} cy={18.5} r={1.5} fill="currentColor" />
    </svg>
  );
}
export default DragIcon;
