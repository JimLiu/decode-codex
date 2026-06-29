// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Shape and zero value for a sampled pointer-velocity reading.

export interface PointerVelocitySample {
  x: number | null;
  y: number | null;
  hasKnownVelocity: boolean;
  updatedAt: number | null;
  velocityX: number;
  velocityY: number;
  speed: number;
}

export const EMPTY_POINTER_VELOCITY_SAMPLE: PointerVelocitySample = {
  x: null,
  y: null,
  hasKnownVelocity: false,
  updatedAt: null,
  velocityX: 0,
  velocityY: 0,
  speed: 0,
};
