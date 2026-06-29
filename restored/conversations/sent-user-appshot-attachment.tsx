// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Appshot (app screenshot) attachment rendered on a sent user message in a local
// conversation. Resolves the screenshot data URL and the native app icon, then
// renders the thread-variant appshot card.
import { useIntl } from "../vendor/react-intl";
import { AppshotAttachment } from "./appshot-attachment";
import {
  useQueryClient,
  useScopedAtomValue,
  conversationHostIdAtom,
  appshotIconDataUrlAtomFamily,
  getAbsoluteImageFilePath,
  loadImageFileDataUrl,
  useQuery,
  useHostQuery,
  useNativeAppIcon,
  queryStaleTime,
  Spinner,
} from "../boundaries/onboarding-commons-externals.facade";

export interface AppshotAttachmentContext {
  bundleIdentifier: string;
  imageName?: string | null;
  imageDataUrl?: string | null;
  imagePath?: string | null;
  appIconDataUrl?: string | null;
  appName: string;
  axTree?: string | null;
  windowTitle?: string | null;
}

export interface SentUserAppshotAttachmentProps {
  appshotContext: AppshotAttachmentContext;
  conversationId: string | null;
}

export function SentUserAppshotAttachment({
  appshotContext,
  conversationId,
}: SentUserAppshotAttachmentProps) {
  const intl = useIntl();
  const queryClient = useQueryClient();
  const hostId =
    useScopedAtomValue(conversationHostIdAtom, conversationId) ?? "local";

  const cachedAppIconDataUrl = useScopedAtomValue(
    appshotIconDataUrlAtomFamily,
    {
      bundleIdentifier: appshotContext.bundleIdentifier,
      imageName: appshotContext.imageName,
    },
  );

  const rawScreenshotSrc =
    appshotContext.imageDataUrl ?? appshotContext.imagePath;
  const screenshotAssetPath = getAbsoluteImageFilePath(rawScreenshotSrc);

  const screenshotQuery = useQuery({
    queryKey: [
      "local-user-appshot-screenshot-data-url",
      hostId,
      screenshotAssetPath,
    ],
    queryFn: () =>
      loadImageFileDataUrl(screenshotAssetPath, hostId, queryClient),
    enabled: screenshotAssetPath != null,
    gcTime: Infinity,
    staleTime: queryStaleTime.INFINITE,
  });
  const screenshotSrc =
    screenshotAssetPath == null
      ? (rawScreenshotSrc ?? null)
      : (screenshotQuery.data ?? null);

  const hasBundleIdentifier = appshotContext.bundleIdentifier.length > 0;
  const nativeApp = useHostQuery("native-desktop-app-by-bundle-id", {
    params: { bundleId: appshotContext.bundleIdentifier },
    queryConfig: {
      enabled: hasBundleIdentifier,
      staleTime: queryStaleTime.INFINITE,
      refetchOnWindowFocus: false,
    },
    select: selectAppFromBundleResponse,
  });
  const { iconSmall } = useNativeAppIcon({
    appPath: nativeApp.data?.appPath ?? null,
  });

  const appIconSrc = appshotContext.appIconDataUrl ?? cachedAppIconDataUrl;
  const screenshotAlt = intl.formatMessage({
    id: "codex.localConversation.userAppshotAttachment",
    defaultMessage: "Appshot attachment",
    description: "Alt text for appshot attachment in local conversation",
  });

  if (screenshotSrc == null) {
    return rawScreenshotSrc == null ? null : (
      <div className="flex size-20 items-center justify-center rounded-lg border border-token-border-heavy">
        <Spinner className="icon-xs" />
      </div>
    );
  }

  return (
    <AppshotAttachment
      variant="thread"
      appName={appshotContext.appName}
      appIconSrc={appIconSrc ?? iconSmall}
      accessibilityText={appshotContext.axTree}
      screenshotAlt={screenshotAlt}
      screenshotSrc={screenshotSrc}
      windowTitle={appshotContext.windowTitle}
    />
  );
}

function selectAppFromBundleResponse(response: {
  app: { appPath?: string | null } | null;
}): { appPath?: string | null } | null {
  return response.app;
}
