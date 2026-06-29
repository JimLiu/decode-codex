// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Localized strings for the in-app browser right-click context menu and the
// page load-error screen.
import { defineMessages } from "../vendor/react-intl";

export const browserSidebarContextMenuMessages = defineMessages({
  hideFloatingComposer: {
    id: "thread.browser.options.hideFloatingComposer",
    defaultMessage: "Hide composer",
    description:
      "Menu item that hides the floating composer in the expanded browser panel",
  },
  showFloatingComposer: {
    id: "thread.browser.options.showFloatingComposer",
    defaultMessage: "Show composer",
    description:
      "Menu item that shows the floating composer in the expanded browser panel",
  },
  inspect: {
    id: "browserSidebar.contextMenu.inspect",
    defaultMessage: "Inspect",
    description:
      "In-app browser context menu action that opens Developer Tools for the browser view.",
  },
  contextMenuBack: {
    id: "browserSidebar.contextMenu.back",
    defaultMessage: "Back",
    description:
      "In-app browser context menu action that navigates the browser view back.",
  },
  contextMenuForward: {
    id: "browserSidebar.contextMenu.forward",
    defaultMessage: "Forward",
    description:
      "In-app browser context menu action that navigates the browser view forward.",
  },
  contextMenuReload: {
    id: "browserSidebar.contextMenu.reload",
    defaultMessage: "Reload",
    description:
      "In-app browser context menu action that reloads the current browser view.",
  },
  contextMenuOpenInBrowser: {
    id: "browserSidebar.contextMenu.openInBrowser",
    defaultMessage: "Open in browser",
    description:
      "In-app browser context menu action that opens the clicked link in the in-app browser.",
  },
  contextMenuOpenLinkInNewTab: {
    id: "browserSidebar.contextMenu.openLinkInNewTab",
    defaultMessage: "Open link in new tab",
    description:
      "In-app browser context menu action that opens the clicked link in a new in-app browser tab.",
  },
  contextMenuOpenExternalBrowser: {
    id: "browserSidebar.contextMenu.openExternalBrowser",
    defaultMessage: "Open in external browser",
    description:
      "In-app browser context menu action that opens the clicked link in the external browser.",
  },
  contextMenuCopyLink: {
    id: "browserSidebar.contextMenu.copyLink",
    defaultMessage: "Copy link address",
    description:
      "In-app browser context menu action that copies the clicked link URL.",
  },
  contextMenuCommentWithCodex: {
    id: "browserSidebar.contextMenu.commentWithCodex",
    defaultMessage: "Comment",
    description:
      "In-app browser context menu action that starts a Codex comment on the clicked element.",
  },
  loadErrorHeading: {
    id: "browserSidebar.loadError.heading",
    defaultMessage: "This site can't be reached",
    description:
      "Heading shown in the in-app browser when a web page fails to load.",
  },
  loadErrorTry: {
    id: "browserSidebar.loadError.try",
    defaultMessage: "Try:",
    description:
      "Label before troubleshooting suggestions in the in-app browser load error page.",
  },
  loadErrorCheckConnection: {
    id: "browserSidebar.loadError.checkConnection",
    defaultMessage: "Checking the connection",
    description:
      "Troubleshooting suggestion shown when the in-app browser fails to load a page.",
  },
  loadErrorCheckProxyFirewallDns: {
    id: "browserSidebar.loadError.checkProxyFirewallDns",
    defaultMessage: "Checking the proxy, firewall, and DNS configuration",
    description:
      "Troubleshooting suggestion shown when the in-app browser fails to load a page.",
  },
  loadErrorReload: {
    id: "browserSidebar.loadError.reload",
    defaultMessage: "Reload",
    description:
      "Button label that retries a failed page load in the in-app browser.",
  },
  loadErrorDnsSummary: {
    id: "browserSidebar.loadError.dnsSummary",
    defaultMessage: "{host}'s server IP address could not be found",
    description:
      "Summary shown when the in-app browser cannot resolve a page hostname.",
  },
  loadErrorOfflineSummary: {
    id: "browserSidebar.loadError.offlineSummary",
    defaultMessage:
      "{host} could not be loaded because the computer is offline",
    description:
      "Summary shown when the in-app browser cannot load a page because the computer is offline.",
  },
  loadErrorRefusedSummary: {
    id: "browserSidebar.loadError.refusedSummary",
    defaultMessage: "{host} refused to connect",
    description:
      "Summary shown when the in-app browser receives a connection refused error.",
  },
  loadErrorTimeoutSummary: {
    id: "browserSidebar.loadError.timeoutSummary",
    defaultMessage: "{host} took too long to respond",
    description:
      "Summary shown when the in-app browser times out loading a page.",
  },
  loadErrorCertificateSummary: {
    id: "browserSidebar.loadError.certificateSummary",
    defaultMessage: "{host}'s certificate could not be verified",
    description:
      "Summary shown when the in-app browser cannot verify a page certificate.",
  },
  loadErrorGenericSummary: {
    id: "browserSidebar.loadError.genericSummary",
    defaultMessage: "{host} could not be loaded",
    description:
      "Generic summary shown when the in-app browser fails to load a page.",
  },
  loadErrorInternetHeader: {
    id: "browserSidebar.loadError.internetHeader",
    defaultMessage: "Check your Internet connection",
    description:
      "Troubleshooting detail heading shown when the in-app browser fails to load a page.",
  },
  loadErrorInternetBody: {
    id: "browserSidebar.loadError.internetBody",
    defaultMessage:
      "Check any cables and restart any routers, modems, or other network devices you may be using",
    description:
      "Troubleshooting detail body shown when the in-app browser fails to load a page.",
  },
  loadErrorDnsHeader: {
    id: "browserSidebar.loadError.dnsHeader",
    defaultMessage: "Check your DNS settings",
    description:
      "Troubleshooting detail heading shown when the in-app browser fails to load a page.",
  },
  loadErrorDnsBody: {
    id: "browserSidebar.loadError.dnsBody",
    defaultMessage:
      "Contact your network administrator if you are not sure what this means",
    description:
      "Troubleshooting detail body shown when the in-app browser fails to load a page.",
  },
  loadErrorNetworkAccessHeader: {
    id: "browserSidebar.loadError.networkAccessHeader",
    defaultMessage:
      "Allow {appName} to access the network in your firewall or security settings",
    description:
      "Troubleshooting detail heading shown when the in-app browser fails to load a page.",
  },
  loadErrorNetworkAccessBody: {
    id: "browserSidebar.loadError.networkAccessBody",
    defaultMessage:
      "If {appName} is already listed as an allowed app, try removing it from the list and adding it again",
    description:
      "Troubleshooting detail body shown when the in-app browser fails to load a page.",
  },
  loadErrorProxyHeader: {
    id: "browserSidebar.loadError.proxyHeader",
    defaultMessage: "If you use a proxy server",
    description:
      "Troubleshooting detail heading shown when the in-app browser fails to load a page.",
  },
  loadErrorProxyBody: {
    id: "browserSidebar.loadError.proxyBody",
    defaultMessage:
      "Open your system network settings and check whether a proxy has been configured for the active network",
    description:
      "Troubleshooting detail body shown when the in-app browser fails to load a page.",
  },
});
