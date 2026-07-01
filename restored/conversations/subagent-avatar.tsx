// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Seed-hashing picker for subagent avatar SVG glyphs.

import type { SVGProps } from "react";
import clsx from "clsx";
import { subagentAvatarGlyphs01To08 } from "./subagent-avatar-glyphs-01-08";
import { subagentAvatarGlyphs09To17 } from "./subagent-avatar-glyphs-09-17";
import { subagentAvatarGlyphs18To26 } from "./subagent-avatar-glyphs-18-26";
import { subagentAvatarGlyphs27To35 } from "./subagent-avatar-glyphs-27-35";

type SubagentAvatarGlyph = (props: SVGProps<SVGSVGElement>) => JSX.Element;

const subagentAvatars: SubagentAvatarGlyph[] = [
  ...subagentAvatarGlyphs01To08,
  ...subagentAvatarGlyphs09To17,
  ...subagentAvatarGlyphs18To26,
  ...subagentAvatarGlyphs27To35,
];

export function initSubagentAvatarChunk(): void {}

export function hashSeed(seed: string): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1)
    hash = (hash * 31 + seed.charCodeAt(i)) % 2147483647;
  return hash % subagentAvatars.length;
}

export interface SubagentAvatarProps extends SVGProps<SVGSVGElement> {
  seed: string;
  className?: string;
}

export function SubagentAvatar({
  seed,
  className,
  ...rest
}: SubagentAvatarProps) {
  const Avatar = subagentAvatars[hashSeed(seed)];
  return <Avatar className={clsx("size-3.5 shrink-0", className)} {...rest} />;
}

export { subagentAvatars };
