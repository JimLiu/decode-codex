// Restored from ref/webview/assets/external-link-source-CIes3-Y_.js
// external-link-source-CIes3-Y_ chunk restored from the Codex webview bundle.
type ExternalLinkSource = {
  appId: string;
  hostnames: string[];
};

const EXTERNAL_LINK_SOURCES: ExternalLinkSource[] = [
  { appId: "google-calendar", hostnames: ["calendar.google.com"] },
  { appId: "google-drive", hostnames: ["docs.google.com"] },
  { appId: "google-drive", hostnames: ["drive.google.com"] },
  { appId: "figma", hostnames: ["figma.com"] },
  { appId: "github", hostnames: ["github.com"] },
  { appId: "linear", hostnames: ["linear.app"] },
  { appId: "gmail", hostnames: ["mail.google.com"] },
  { appId: "notion", hostnames: ["app.notion.com", "notion.so"] },
  { appId: "google-drive", hostnames: ["sheets.google.com"] },
  { appId: "slack", hostnames: ["slack.com"] },
  { appId: "google-drive", hostnames: ["slides.google.com"] },
];

export function externalLinkSource(url: string): ExternalLinkSource | null {
  let hostname: string;
  try {
    hostname = new URL(url).hostname.toLowerCase();
  } catch {
    return null;
  }

  for (const source of EXTERNAL_LINK_SOURCES) {
    if (
      source.hostnames.some(
        (sourceHostname) =>
          hostname === sourceHostname ||
          hostname.endsWith(`.${sourceHostname}`),
      )
    ) {
      return source;
    }
  }
  return null;
}
