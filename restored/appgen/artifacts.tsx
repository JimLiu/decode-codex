// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~kvpgbdy1-mhRp2VYQ.js
// Appgen artifact presentation helpers shared by local conversation surfaces.

import { SitesColorIcon } from "../icons/sites-color-icon";

export const AppgenAppIcon = SitesColorIcon;

export function getAppgenArtifactUrlLabel(url: string | null | undefined) {
  if (url == null) {
    return null;
  }

  let parsedUrl = new URL(url);
  return `${parsedUrl.host}${
    parsedUrl.pathname === "/" ? "" : parsedUrl.pathname
  }${parsedUrl.search}${parsedUrl.hash}`;
}

export function initAppgenArtifactUrlHelpers(): void {}

export function initAppgenArtifactIconChunk(): void {}
