// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// LRU cache (in the app atom store) of downloaded image assets keyed by bundle + image name.

import {
  appAtomScope,
  atomFamily,
  listAtom,
} from "../boundaries/onboarding-commons-externals.facade";

const MAX_CACHED_IMAGE_ASSETS = 20;

export interface ImageAssetCacheEntry {
  bundleIdentifier: string;
  imageName: string | null;
}

interface ImageAssetCacheStore {
  get<T>(atom: unknown, param?: unknown): T;
  set(atom: unknown, param: unknown, value: unknown): void;
}

export function imageAssetCacheKey(entry: ImageAssetCacheEntry): string {
  return `${entry.bundleIdentifier}\0${entry.imageName ?? ""}`;
}

const cacheKeyOrderAtom = listAtom<ImageAssetCacheEntry>(appAtomScope, []);

const cachedImageAssetAtomFamily = atomFamily(
  appAtomScope,
  () => null,
  undefined,
  { key: imageAssetCacheKey },
);

export function cacheImageAsset(
  store: ImageAssetCacheStore,
  bundleIdentifier: string,
  imageName: string | null,
  value: unknown,
): void {
  if (value == null || imageName == null) return;
  const entry: ImageAssetCacheEntry = { bundleIdentifier, imageName };
  if (store.get(cachedImageAssetAtomFamily, entry) === value) return;
  store.set(cachedImageAssetAtomFamily, entry, value);
  const entryKey = imageAssetCacheKey(entry);
  const nextOrder = [
    ...store
      .get<ImageAssetCacheEntry[]>(cacheKeyOrderAtom)
      .filter((item) => imageAssetCacheKey(item) !== entryKey),
    entry,
  ];
  const evicted = nextOrder.slice(
    0,
    Math.max(0, nextOrder.length - MAX_CACHED_IMAGE_ASSETS),
  );
  for (const item of evicted) store.set(cachedImageAssetAtomFamily, item, null);
  store.set(cacheKeyOrderAtom, nextOrder.slice(evicted.length));
}
