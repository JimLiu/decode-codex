// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Drives the open/close animation of a collapsible app-shell panel. The panel is
// kept mounted while its animation value is non-zero so the collapse transition
// can play out, and exposes the interpolated size / opacity motion values.
import { useState } from "react";
import {
  useMotionValueEvent,
  useMotionTransform,
  type MotionValue,
} from "../boundaries/onboarding-commons-externals.facade";

export interface PanelAnimationArgs {
  size: MotionValue<number>;
  animation: MotionValue<number>;
  isVisible: boolean;
}

export interface PanelAnimationResult {
  isMounted: boolean;
  animatedSize: MotionValue<number>;
  opacity: MotionValue<number>;
  progress: MotionValue<number>;
}

function projectAnimatedSize(values: [number, number]): number {
  const [progress, size] = values;
  return Math.max(0, Math.min(1, progress)) * size;
}

function incrementRemountCounter(value: number): number {
  return value + 1;
}

export function usePanelAnimation({
  size,
  animation,
  isVisible,
}: PanelAnimationArgs): PanelAnimationResult {
  const [, forceRemount] = useState(0);
  useMotionValueEvent(animation, "animationComplete", () => {
    if (animation.get() > 0) return;
    forceRemount(incrementRemountCounter);
  });
  const animatedSize = useMotionTransform(
    [animation, size],
    projectAnimatedSize,
  );
  const isMounted = isVisible || animation.get() > 0;
  return {
    isMounted,
    animatedSize,
    opacity: animation,
    progress: animation,
  };
}
