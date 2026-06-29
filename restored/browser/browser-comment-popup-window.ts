// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Helpers that open and prepare the detached browser-comment popup window, mirroring
// the host document's theme/stylesheets so the popup renders consistently.
import {
  appWindowKind,
  buildBrowserCommentPopupFrameName,
} from "../boundaries/onboarding-commons-externals.facade";

export const COMMENT_POPUP_ROOT_ID = "browser-sidebar-comment-popup-root";

const COMMENT_POPUP_STYLE_MARKER_ATTR = "data-browser-sidebar-comment-popup";
const COMPACT_WINDOW_CLASS = "compact-window";

export type CommentPopupHandle = {
  frameName: string;
  window: Window;
};

export type OpenCommentPopupOptions = {
  browserTabId: string;
  conversationId: string;
  openerWindow: Window;
  existingPopup: CommentPopupHandle | null;
  message: {
    session: { sessionId: string };
    overlayWindowBounds: {
      x: number;
      y: number;
      width: number;
      height: number;
    };
  };
};

export function openCommentPopup({
  browserTabId,
  conversationId,
  openerWindow,
  existingPopup,
  message,
}: OpenCommentPopupOptions): CommentPopupHandle | null {
  const frameName = buildBrowserCommentPopupFrameName({
    windowId: appWindowKind.BROWSER_COMMENT_POPUP,
    browserTabId,
    conversationId,
    sessionId: message.session.sessionId,
  });
  if (
    existingPopup != null &&
    !existingPopup.window.closed &&
    existingPopup.frameName === frameName
  )
    return existingPopup;
  const { x, y, width, height } = message.overlayWindowBounds;
  const popupWindow = openerWindow.open(
    "about:blank",
    frameName,
    [
      "popup=yes",
      `left=${Math.round(x)}`,
      `top=${Math.round(y)}`,
      `width=${Math.round(width)}`,
      `height=${Math.round(height)}`,
    ].join(","),
  );
  return popupWindow == null ? null : { frameName, window: popupWindow };
}

export function ensureCommentPopupRoot(
  popupWindow: Window,
  sourceDocument: Document,
  windowTitle: string,
): HTMLElement {
  const popupDocument = popupWindow.document;
  popupDocument.title = windowTitle;
  copyDocumentChrome(popupDocument, sourceDocument);
  let root = popupDocument.getElementById(COMMENT_POPUP_ROOT_ID);
  if (root == null) {
    copyPopupStylesheets(popupDocument, sourceDocument);
    popupDocument.body.textContent = "";
    root = popupDocument.createElement("div");
    root.id = COMMENT_POPUP_ROOT_ID;
    popupDocument.body.appendChild(root);
  }
  root.style.width = "100vw";
  root.style.height = "100vh";
  root.style.overflow = "hidden";
  root.style.background = "transparent";
  return root;
}

function copyDocumentChrome(
  targetDocument: Document,
  sourceDocument: Document,
): void {
  const targetRoot = targetDocument.documentElement;
  const sourceRoot = sourceDocument.documentElement;
  targetRoot.className = sourceRoot.className;
  targetRoot.setAttribute("style", sourceRoot.getAttribute("style") ?? "");
  for (const attribute of Array.from(targetRoot.attributes))
    if (attribute.name.startsWith("data-"))
      targetRoot.removeAttribute(attribute.name);
  for (const attribute of Array.from(sourceRoot.attributes))
    if (attribute.name.startsWith("data-"))
      targetRoot.setAttribute(attribute.name, attribute.value);
  targetRoot.classList.add(COMPACT_WINDOW_CLASS);
  targetRoot.style.background = "transparent";
  targetRoot.style.backgroundColor = "transparent";
  targetDocument.body.className = sourceDocument.body.className;
  targetDocument.body.setAttribute(
    "style",
    sourceDocument.body.getAttribute("style") ?? "",
  );
  targetDocument.body.style.margin = "0";
  targetDocument.body.style.overflow = "hidden";
  targetDocument.body.style.background = "transparent";
  targetDocument.body.style.backgroundColor = "transparent";
}

function copyPopupStylesheets(
  targetDocument: Document,
  sourceDocument: Document,
): void {
  for (const existing of targetDocument.head.querySelectorAll(
    `[${COMMENT_POPUP_STYLE_MARKER_ATTR}]`,
  ))
    existing.remove();
  for (const styleNode of sourceDocument.head.querySelectorAll(
    'link[rel="stylesheet"], style',
  )) {
    const clone = styleNode.cloneNode(true);
    const sourceHtmlElement = sourceDocument.defaultView?.HTMLElement;
    if (sourceHtmlElement != null && clone instanceof sourceHtmlElement)
      clone.setAttribute(COMMENT_POPUP_STYLE_MARKER_ATTR, "true");
    targetDocument.head.appendChild(clone);
  }
}
