// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// App-shell navigation-history chrome state: whether the back/forward affordances
// are enabled, plus the measured bounds of the navigation chrome region.
import {
  appStoreScope,
  createScopedAtom,
} from "../boundaries/onboarding-commons-externals.facade";
import type { VisibleRect } from "../utils/measure-visible-rect";

export const canNavigateBackSignal = createScopedAtom(appStoreScope, false);

export const canNavigateForwardSignal = createScopedAtom(appStoreScope, false);

export const navigationChromeRectSignal = createScopedAtom(
  appStoreScope,
  null as VisibleRect | null,
);
