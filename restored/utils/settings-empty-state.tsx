// Restored from ref/webview/assets/settings-empty-state-CM9NvhM7.js
// Shared empty-state container for settings pages.

import type { ReactNode } from "react";
import clsx from "clsx";
import { once } from "../runtime/commonjs-interop";
import {
  getChunkModuleExports,
  getJsxRuntime,
  initClassNameRuntime,
} from "../runtime/shared-utility-runtime";

export type SettingsEmptyStateProps = {
  children?: ReactNode;
  className?: string;
};

export const initSettingsEmptyStateChunk = once(() => {
  getChunkModuleExports();
  initClassNameRuntime();
  getJsxRuntime();
});

export function SettingsEmptyState({
  children,
  className,
}: SettingsEmptyStateProps): JSX.Element {
  return (
    <div
      className={clsx(
        "flex min-h-[62px] items-center justify-center px-4 text-center text-sm text-token-text-secondary",
        className,
      )}
    >
      {children}
    </div>
  );
}

export default SettingsEmptyState;
