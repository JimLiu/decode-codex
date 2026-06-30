// Restored from ref/webview/assets/app-initial~app-main~appgen-page~remote-conversation-page~projects-index-page~appgen-librar~i4jkvfhy-C3t3vyRs.js
// Header chrome used while an Appgen pending client conversation is being prepared.
import type { ReactNode } from "react";
import {
  CloudThreadEnvIcon,
  LocalThreadEnvIcon,
  RemoteThreadEnvIcon,
  WorktreeThreadEnvIcon,
} from "../threads/thread-env-icon";

export type AppgenProjectHeaderEnvironment =
  | "cloud"
  | "local"
  | "remote"
  | "worktree"
  | string;

export type AppgenProjectHeaderHostConfig = {
  id: string;
};

export type AppgenProjectHeaderProps = {
  env?: AppgenProjectHeaderEnvironment | null;
  hostConfig?: AppgenProjectHeaderHostConfig | null;
  secondary?: ReactNode;
  start?: ReactNode;
  startActions?: ReactNode;
  trailing?: ReactNode;
};

export function initAppgenProjectHeaderChunk(): void {}

export function AppgenProjectHeader({
  env,
  hostConfig,
  secondary,
  start,
  startActions,
  trailing,
}: AppgenProjectHeaderProps) {
  const environmentIcon = renderEnvironmentIcon({ env, hostConfig });
  const startContent = start ? (
    <div className="max-w-[320px] min-w-0 truncate">{start}</div>
  ) : null;
  const secondaryContent = secondary ? (
    <div className="flex min-w-0 truncate leading-[18px] font-normal text-token-description-foreground">
      {secondary}
    </div>
  ) : null;

  return (
    <div className="draggable grid w-full min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 electron:h-toolbar extension:py-row-y">
      <div className="text-md flex min-w-0 items-center gap-2 truncate text-base electron:font-medium">
        {startContent}
        {environmentIcon}
        {secondaryContent}
        {startActions}
      </div>
      <div className="flex items-center justify-end gap-1.5">{trailing}</div>
    </div>
  );
}

function renderEnvironmentIcon({
  env,
  hostConfig,
}: {
  env?: AppgenProjectHeaderEnvironment | null;
  hostConfig?: AppgenProjectHeaderHostConfig | null;
}): ReactNode {
  if (env === "remote") {
    return hostConfig == null ? null : (
      <RemoteThreadEnvIcon hostId={hostConfig.id} />
    );
  }
  if (env === "worktree") return <WorktreeThreadEnvIcon />;
  if (env === "cloud") return <CloudThreadEnvIcon />;
  if (env) return <LocalThreadEnvIcon />;
  return null;
}
