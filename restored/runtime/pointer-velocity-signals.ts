// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Pointer velocity tracking: derives a velocity sample from successive pointer
// positions, and exposes app-scoped signals for the latest position, viewport
// size, and projected velocity / inset values.
import {
  appStoreScope,
  createScopedAtom,
  createScopedSelector,
} from "../boundaries/onboarding-commons-externals.facade";
import {
  EMPTY_POINTER_VELOCITY_SAMPLE,
  type PointerVelocitySample,
} from "./pointer-velocity-state";

export function computePointerVelocity(
  previous: PointerVelocitySample,
  x: number,
  y: number,
  updatedAt: number,
): PointerVelocitySample {
  if (previous.x == null || previous.y == null || previous.updatedAt == null) {
    return {
      x,
      y,
      hasKnownVelocity: false,
      updatedAt,
      velocityX: 0,
      velocityY: 0,
      speed: 0,
    };
  }
  const elapsedSeconds = (updatedAt - previous.updatedAt) / 1e3;
  if (elapsedSeconds <= 0) {
    return {
      x,
      y,
      hasKnownVelocity: false,
      updatedAt,
      velocityX: 0,
      velocityY: 0,
      speed: 0,
    };
  }
  const velocityX = (x - previous.x) / elapsedSeconds;
  const velocityY = (y - previous.y) / elapsedSeconds;
  return {
    x,
    y,
    hasKnownVelocity: true,
    updatedAt,
    velocityX,
    velocityY,
    speed: Math.hypot(velocityX, velocityY),
  };
}

export const pointerVelocitySignal = createScopedAtom(
  appStoreScope,
  EMPTY_POINTER_VELOCITY_SAMPLE,
);

export const viewportSizeSignal = createScopedAtom(appStoreScope, {
  width: window.innerWidth,
  height: window.innerHeight,
});

export const pointerVelocityProjections = {
  px$: createScopedSelector(
    appStoreScope,
    ({ get }: { get: <T>(signal: unknown) => T }) =>
      get<PointerVelocitySample>(pointerVelocitySignal).x,
  ),
  py$: createScopedSelector(
    appStoreScope,
    ({ get }: { get: <T>(signal: unknown) => T }) =>
      get<PointerVelocitySample>(pointerVelocitySignal).y,
  ),
  hasKnownVelocity$: createScopedSelector(
    appStoreScope,
    ({ get }: { get: <T>(signal: unknown) => T }) =>
      get<PointerVelocitySample>(pointerVelocitySignal).hasKnownVelocity,
  ),
  vx$: createScopedSelector(
    appStoreScope,
    ({ get }: { get: <T>(signal: unknown) => T }) =>
      get<PointerVelocitySample>(pointerVelocitySignal).velocityX,
  ),
  vy$: createScopedSelector(
    appStoreScope,
    ({ get }: { get: <T>(signal: unknown) => T }) =>
      get<PointerVelocitySample>(pointerVelocitySignal).velocityY,
  ),
  speed$: createScopedSelector(
    appStoreScope,
    ({ get }: { get: <T>(signal: unknown) => T }) =>
      get<PointerVelocitySample>(pointerVelocitySignal).speed,
  ),
  bottomInset$: createScopedSelector(
    appStoreScope,
    ({ get }: { get: <T>(signal: unknown) => T }) => {
      const { height } = get<{ height: number }>(viewportSizeSignal);
      const y = get<PointerVelocitySample>(pointerVelocitySignal).y;
      return y == null ? null : height - y;
    },
  ),
  rightInset$: createScopedSelector(
    appStoreScope,
    ({ get }: { get: <T>(signal: unknown) => T }) => {
      const { width } = get<{ width: number }>(viewportSizeSignal);
      const x = get<PointerVelocitySample>(pointerVelocitySignal).x;
      return x == null ? null : width - x;
    },
  ),
};
