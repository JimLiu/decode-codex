// Restored from ref/.vite/build/main-r5HnecX_.js
// Native About dialog HTML renderer.

import type { AboutDialogHtmlOptions } from "./about-dialog-types";

const ABOUT_DIALOG_ICON_SIZE = 72;

const DARK_THEME_VARIABLES = `      --background: #202020;
      --border: #3a3a3a;
      --button-background: #2d2d2d;
      --button-background-hover: #383838;
      --button-border: #6b6b6b;
      --button-text: #f5f5f5;
      --footer-background: #252525;
      --muted-text: #c8c8c8;
      --selection: #005a9e;
      --text: #f5f5f5;`;

const LIGHT_THEME_VARIABLES = `      --background: #ffffff;
      --border: #d8d8d8;
      --button-background: #f3f3f3;
      --button-background-hover: #e9e9e9;
      --button-border: #8a8a8a;
      --button-text: #1f1f1f;
      --footer-background: #f5f5f5;
      --muted-text: #4f4f4f;
      --selection: #0078d4;
      --text: #1f1f1f;`;

const FOOTER_CSS = `    .footer {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      min-height: 56px;
      padding: 12px 14px 14px;
      border-top: 1px solid var(--border);
      background: var(--footer-background);
    }

    button {
      min-width: 76px;
      height: 28px;
      padding: 0 18px;
      border: 1px solid var(--button-border);
      border-radius: 2px;
      background: var(--button-background);
      color: var(--button-text);
      font: inherit;
      user-select: none;
      -webkit-user-select: none;
    }

    button:hover {
      background: var(--button-background-hover);
    }

    button:focus-visible {
      outline: 2px solid var(--selection);
      outline-offset: 1px;
    }`;

export function renderAboutDialogHtml({
  appDisplayName,
  buildInfoLabel,
  buildInfoText,
  iconDataUrl,
  isDark,
  okLabel,
  title,
}: AboutDialogHtmlOptions): string {
  const iconHtml =
    iconDataUrl == null
      ? ""
      : `<img class="app-icon" src="${escapeHtml(iconDataUrl)}" alt="">`;
  const footerHtml =
    okLabel == null
      ? ""
      : `    <footer class="footer">
      <button id="ok" type="button" autofocus>${escapeHtml(okLabel)}</button>
    </footer>`;
  const buttonHandlerScript =
    okLabel == null
      ? ""
      : '\n    document.getElementById("ok").addEventListener("click", closeDialog);';

  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src data:; style-src 'unsafe-inline'; script-src 'unsafe-inline'">
  <title>${escapeHtml(title)}</title>
  <style>
    :root {
      color-scheme: ${isDark ? "dark" : "light"};
${isDark ? DARK_THEME_VARIABLES : LIGHT_THEME_VARIABLES}
    }

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      width: 100vw;
      overflow: hidden;
      background: var(--background);
      color: var(--text);
      font-family: "Segoe UI", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
      font-size: 12px;
    }

    ::selection {
      background: var(--selection);
      color: #ffffff;
    }

    .dialog {
      display: flex;
      flex-direction: column;
    }

    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: ${okLabel == null ? "32px" : "32px 32px 22px"};
      text-align: center;
    }

    .app-icon {
      width: ${ABOUT_DIALOG_ICON_SIZE}px;
      height: ${ABOUT_DIALOG_ICON_SIZE}px;
      object-fit: contain;
      margin-bottom: 14px;
      user-select: none;
      -webkit-user-drag: none;
    }

    .app-name {
      margin-bottom: 18px;
      font-size: 17px;
      line-height: 1.25;
      font-weight: 600;
    }

    .build-info {
      width: 100%;
      margin: 0;
      line-height: 1.45;
      color: var(--muted-text);
      white-space: pre-wrap;
      overflow-wrap: anywhere;
      border: 0;
      background: transparent;
      font: inherit;
    }

    .app-name,
    .build-info,
    .copyright {
      cursor: text;
      user-select: text;
      -webkit-user-select: text;
    }

    .copyright {
      margin-top: 14px;
      color: var(--muted-text);
    }

${okLabel == null ? "" : FOOTER_CSS}
  </style>
</head>
<body>
  <main class="dialog">
    <section class="content" aria-labelledby="app-name">
      ${iconHtml}
      <div class="app-name" id="app-name">${escapeHtml(appDisplayName)}</div>
      <pre class="build-info" aria-label="${escapeHtml(buildInfoLabel)}">${escapeHtml(buildInfoText)}</pre>
      <div class="copyright">&copy; OpenAI</div>
    </section>
${footerHtml}
  </main>
  <script>
    const closeDialog = () => window.close();${buttonHandlerScript}
    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeDialog();
      }
    });
  <\/script>
</body>
</html>`;
}

export function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    switch (character) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "'":
        return "&#39;";
      default:
        return character;
    }
  });
}
