// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// Side-effect component wiring the required-plugin install session for the
// composer's context-file roots. Renders the plugin install session host so
// pending installs / required-app connections can surface while the composer
// is mounted.
import {
  openPluginDetailsAction,
  PluginInstallSessionHost,
  useAppConnectionsSession,
  useDispatchAppAction,
  usePluginInstallOrchestrator,
  useRequiredPluginReload,
  useStableCallback,
} from "../boundaries/onboarding-commons-externals.facade";

export interface ComposerContextFilesWatcherProps {
  hostId: string;
  onRequiredAppConnected?: (requiredApp: unknown) => void;
  roots: readonly string[];
}

export function ComposerContextFilesWatcher({
  hostId,
  onRequiredAppConnected,
  roots,
}: ComposerContextFilesWatcherProps) {
  const dispatchAppAction = useDispatchAppAction();
  const { session } = useAppConnectionsSession();
  const isSessionOpen = session.kind !== "closed";
  const { forceReload } = useRequiredPluginReload(hostId, roots, {
    enabled: isSessionOpen,
  });
  const {
    closePluginInstall,
    connectRequiredApp,
    handleRequiredAppConnected,
    handleRequiredAppOAuthStarted,
    installPlugin,
    isInstalling,
    session: pluginInstallSession,
  } = usePluginInstallOrchestrator({
    forceReloadPlugins: forceReload,
    hostId,
    onRequiredAppConnected,
  });

  const handleOpenChange = useStableCallback((isOpen: boolean) => {
    if (!isOpen) closePluginInstall();
  });
  const handleInstall = useStableCallback(
    async (plugin: unknown, options: unknown) => {
      await installPlugin(plugin, options);
    },
  );
  const handleConnectRequiredApp = useStableCallback(
    async (requiredApp: unknown) => {
      await connectRequiredApp(requiredApp);
    },
  );
  const handleViewDetails = (plugin: unknown): void => {
    dispatchAppAction(openPluginDetailsAction(plugin, { hostId }));
  };

  return (
    <PluginInstallSessionHost
      hostId={hostId}
      session={pluginInstallSession}
      isInstalling={isInstalling}
      onOpenChange={handleOpenChange}
      onInstall={handleInstall}
      onConnectRequiredApp={handleConnectRequiredApp}
      onRequiredAppConnected={handleRequiredAppConnected}
      onRequiredAppOAuthStarted={handleRequiredAppOAuthStarted}
      onViewDetails={handleViewDetails}
    />
  );
}
