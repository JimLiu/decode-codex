// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~kvpgbdy1-mhRp2VYQ.js
// Markdown-aware copy handling for conversation content selections.

const KATEX_SELECTOR = ".katex";
const KATEX_MATHML_SELECTOR = ".katex-mathml";
const KATEX_HTML_AFTER_MATHML_SELECTOR = ".katex-mathml + .katex-html";
const KATEX_DISPLAY_ANNOTATION_SELECTOR = ".katex-display annotation";
const TEX_ANNOTATION_SELECTOR = 'annotation[encoding="application/x-tex"]';
const MARKDOWN_RAW_LINK_LABEL_ATTR = "data-markdown-raw-link-label";
const MARKDOWN_RAW_LINK_SELECTOR = `[${MARKDOWN_RAW_LINK_LABEL_ATTR}]`;
const MARKDOWN_COPY_ATTR = "data-markdown-copy";
const MARKDOWN_COPY_TEXT_ATTR = "data-markdown-copy-text";
const MARKDOWN_COPY_SELECTOR = `[${MARKDOWN_COPY_ATTR}]`;
const XHTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
const INLINE_MATH_DELIMITERS = ["\\(", "\\)"] as const;
const DISPLAY_MATH_DELIMITERS = ["\\[\n", "\n\\]"] as const;

const BLOCK_TAGS = new Set([
  "BLOCKQUOTE",
  "DIV",
  "H1",
  "H2",
  "H3",
  "H4",
  "H5",
  "H6",
  "LI",
  "P",
  "PRE",
]);

const ALLOWED_HTML_ATTRIBUTES: Record<string, readonly string[]> = {
  A: ["href", "title"],
  BLOCKQUOTE: ["cite"],
  IMG: ["src", "srcset", "sizes", "alt", "title", "width", "height"],
  LI: ["value"],
  OL: ["start"],
  Q: ["cite"],
  TD: ["colspan", "rowspan"],
  TH: ["colspan", "rowspan"],
  TIME: ["datetime"],
};

type CopyPayload = {
  htmlText: string;
  plainText: string;
};

type MarkdownCopyMode = "exclude" | "inline-code" | "code-block";

export function initMarkdownCopyHelpers(): void {}

export function captureConversationCopy(
  event: ClipboardEvent,
  targetContainer: HTMLElement,
): void {
  if (event.defaultPrevented) return;
  if (writeSelectionToClipboard(targetContainer, event.clipboardData)) {
    event.preventDefault();
  }
}

function writeSelectionToClipboard(
  targetContainer: HTMLElement,
  clipboardData: DataTransfer | null,
  selection = targetContainer.ownerDocument.getSelection(),
): boolean {
  if (clipboardData == null) return false;
  const payload = getSelectionCopyPayload(targetContainer, selection);
  if (payload == null) return false;

  clipboardData.setData("text/html", payload.htmlText);
  clipboardData.setData("text/plain", payload.plainText);
  return true;
}

function getSelectionCopyPayload(
  targetContainer: HTMLElement,
  selection = targetContainer.ownerDocument.getSelection(),
): CopyPayload | null {
  if (
    selection == null ||
    selection.rangeCount === 0 ||
    selection.isCollapsed
  ) {
    return null;
  }

  const selectionRange = selection.getRangeAt(0);
  if (rangeIsContainedBy(selectionRange, targetContainer)) {
    return getRangeCopyPayload(targetContainer, selectionRange);
  }

  return targetContainer.contains(selectionRange.startContainer)
    ? getGenericRangeCopyPayload(selectionRange)
    : null;
}

function getRangeCopyPayload(
  targetContainer: HTMLElement,
  range: Range,
): CopyPayload | null {
  const copyRange = range.cloneRange();
  if (!rangeIsContainedBy(copyRange, targetContainer)) return null;

  expandRangeAroundClosest(copyRange, KATEX_SELECTOR);
  expandRangeAroundClosest(copyRange, MARKDOWN_RAW_LINK_SELECTOR);

  const copyWrapper = getSingleMarkdownCopyWrapper(copyRange, targetContainer);
  const copyMode = getMarkdownCopyMode(copyWrapper);
  if (copyMode === "exclude") return null;

  if (copyMode === "code-block") {
    const codeText =
      copyWrapper?.getAttribute(MARKDOWN_COPY_TEXT_ATTR) ??
      copyRange.toString();
    return {
      htmlText: createCodeBlock(targetContainer.ownerDocument, codeText)
        .outerHTML,
      plainText: codeText,
    };
  }

  const sanitizedFragment = sanitizeFragment(
    normalizeMathFragment(copyRange.cloneContents()),
  );
  if (copyMode === "inline-code") {
    wrapFragmentChildren(sanitizedFragment, "code");
  }

  const plainText = fragmentToPlainText(sanitizedFragment);
  return plainText.length === 0
    ? null
    : {
        htmlText: fragmentToHtml(sanitizedFragment),
        plainText,
      };
}

function getGenericRangeCopyPayload(range: Range): CopyPayload | null {
  const copyRange = range.cloneRange();
  expandRangeAroundClosest(copyRange, KATEX_SELECTOR);

  const sanitizedFragment = sanitizeFragment(
    normalizeMathFragment(copyRange.cloneContents()),
  );
  const plainText = fragmentToPlainText(sanitizedFragment);
  return plainText.length === 0
    ? null
    : {
        htmlText: fragmentToHtml(sanitizedFragment),
        plainText,
      };
}

function getSingleMarkdownCopyWrapper(
  range: Range,
  targetContainer: HTMLElement,
): Element | null {
  const startWrapper = closestElement(
    range.startContainer,
    MARKDOWN_COPY_SELECTOR,
  );
  const endWrapper = closestElement(range.endContainer, MARKDOWN_COPY_SELECTOR);
  return startWrapper != null &&
    startWrapper === endWrapper &&
    targetContainer.contains(startWrapper)
    ? startWrapper
    : null;
}

function sanitizeFragment(fragment: DocumentFragment): DocumentFragment {
  const sanitizedFragment = fragment.ownerDocument.createDocumentFragment();
  for (const childNode of Array.from(fragment.childNodes)) {
    appendSanitizedNode(sanitizedFragment, childNode, fragment.ownerDocument);
  }
  return sanitizedFragment;
}

function appendSanitizedNode(
  parentNode: Node,
  sourceNode: Node,
  document: Document,
): void {
  if (sourceNode.nodeType === Node.TEXT_NODE) {
    parentNode.appendChild(
      document.createTextNode(sourceNode.textContent ?? ""),
    );
    return;
  }

  if (
    !(sourceNode instanceof Element) ||
    shouldSkipElementForCopy(sourceNode)
  ) {
    return;
  }

  const copyMode = getMarkdownCopyMode(sourceNode);
  if (copyMode === "exclude") return;

  const explicitCopyText = getElementCopyText(sourceNode);
  if (explicitCopyText != null) {
    parentNode.appendChild(document.createTextNode(explicitCopyText));
    return;
  }

  if (sourceNode.matches("button, [data-file-reference]")) {
    if (sourceNode.querySelector(MARKDOWN_RAW_LINK_SELECTOR) == null) {
      parentNode.appendChild(
        document.createTextNode(sourceNode.textContent ?? ""),
      );
      return;
    }
    for (const childNode of Array.from(sourceNode.childNodes)) {
      appendSanitizedNode(parentNode, childNode, document);
    }
    return;
  }

  if (copyMode === "code-block") {
    parentNode.appendChild(
      createCodeBlock(document, collectCopyText(sourceNode)),
    );
    return;
  }

  if (copyMode === "inline-code") {
    const codeElement = document.createElement("code");
    for (const childNode of Array.from(sourceNode.childNodes)) {
      appendSanitizedNode(codeElement, childNode, document);
    }
    parentNode.appendChild(codeElement);
    return;
  }

  if (sourceNode.namespaceURI !== XHTML_NAMESPACE) {
    appendNonHtmlElementText(parentNode, sourceNode, document);
    return;
  }

  const copiedElement = document.createElement(sourceNode.localName);
  for (const attribute of ALLOWED_HTML_ATTRIBUTES[sourceNode.tagName] ?? []) {
    const value = sourceNode.getAttribute(attribute);
    if (value != null) copiedElement.setAttribute(attribute, value);
  }
  for (const childNode of Array.from(sourceNode.childNodes)) {
    appendSanitizedNode(copiedElement, childNode, document);
  }
  parentNode.appendChild(copiedElement);
}

function appendNonHtmlElementText(
  parentNode: Node,
  sourceElement: Element,
  document: Document,
): void {
  const text = sourceElement.textContent;
  if (text != null && text.length > 0) {
    parentNode.appendChild(document.createTextNode(text));
  }
}

function shouldSkipElementForCopy(element: Element): boolean {
  return (
    element.classList.contains("sr-only") ||
    element.getAttribute("aria-hidden") === "true" ||
    (element.tagName === "IMG" && element.getAttribute("alt") === "")
  );
}

function getMarkdownCopyMode(element: Element | null): MarkdownCopyMode | null {
  const value = element?.getAttribute(MARKDOWN_COPY_ATTR);
  return value === "exclude" ||
    value === "inline-code" ||
    value === "code-block"
    ? value
    : null;
}

function getElementCopyText(element: Element): string | null {
  return element.getAttribute(MARKDOWN_RAW_LINK_LABEL_ATTR);
}

function collectCopyText(node: Node): string {
  if (node.nodeType === Node.TEXT_NODE) return node.textContent ?? "";
  if (!(node instanceof Element)) return "";
  return (
    node.getAttribute(MARKDOWN_COPY_TEXT_ATTR) ??
    (getMarkdownCopyMode(node) === "exclude"
      ? ""
      : Array.from(node.childNodes).map(collectCopyText).join(""))
  );
}

function wrapFragmentChildren(
  fragment: DocumentFragment,
  tagName: string,
): void {
  const wrapper = fragment.ownerDocument.createElement(tagName);
  wrapper.append(...Array.from(fragment.childNodes));
  fragment.append(wrapper);
}

function createCodeBlock(document: Document, codeText: string): HTMLElement {
  const preElement = document.createElement("pre");
  const codeElement = document.createElement("code");
  codeElement.textContent = codeText;
  preElement.append(codeElement);
  return preElement;
}

function rangeIsContainedBy(
  range: Range,
  targetContainer: HTMLElement,
): boolean {
  return (
    targetContainer.contains(range.startContainer) &&
    targetContainer.contains(range.endContainer)
  );
}

function expandRangeAroundClosest(range: Range, selector: string): void {
  const startElement = closestElement(range.startContainer, selector);
  if (startElement != null) range.setStartBefore(startElement);

  const endElement = closestElement(range.endContainer, selector);
  if (endElement != null) range.setEndAfter(endElement);
}

function closestElement(node: Node, selector: string): Element | null {
  return (
    (node instanceof Element ? node : node.parentElement)?.closest(selector) ??
    null
  );
}

function normalizeMathFragment(fragment: DocumentFragment): DocumentFragment {
  for (const element of Array.from(
    fragment.querySelectorAll(KATEX_HTML_AFTER_MATHML_SELECTOR),
  )) {
    element.remove();
  }
  for (const element of Array.from(
    fragment.querySelectorAll(KATEX_MATHML_SELECTOR),
  )) {
    const annotation = element.querySelector(TEX_ANNOTATION_SELECTOR);
    if (annotation != null) {
      annotation.textContent = `${INLINE_MATH_DELIMITERS[0]}${
        annotation.textContent ?? ""
      }${INLINE_MATH_DELIMITERS[1]}`;
      element.replaceWith(annotation);
    }
  }
  for (const element of Array.from(
    fragment.querySelectorAll(KATEX_DISPLAY_ANNOTATION_SELECTOR),
  )) {
    const text = element.textContent ?? "";
    element.textContent = `${DISPLAY_MATH_DELIMITERS[0]}${stripInlineMathDelimiters(
      text,
    )}${DISPLAY_MATH_DELIMITERS[1]}`;
  }
  flattenRemainingKatexNodes(fragment);
  return fragment;
}

function flattenRemainingKatexNodes(fragment: DocumentFragment): void {
  for (const selector of [".katex-display", KATEX_SELECTOR]) {
    for (const element of Array.from(fragment.querySelectorAll(selector))) {
      if (element.querySelector(KATEX_HTML_AFTER_MATHML_SELECTOR) == null) {
        element.replaceWith(
          fragment.ownerDocument.createTextNode(element.textContent ?? ""),
        );
      }
    }
  }
}

function stripInlineMathDelimiters(text: string): string {
  return text.startsWith(INLINE_MATH_DELIMITERS[0]) &&
    text.endsWith(INLINE_MATH_DELIMITERS[1])
    ? text.slice(
        INLINE_MATH_DELIMITERS[0].length,
        text.length - INLINE_MATH_DELIMITERS[1].length,
      )
    : text;
}

function fragmentToHtml(fragment: DocumentFragment): string {
  const wrapper = fragment.ownerDocument.createElement("div");
  wrapper.append(fragment.cloneNode(true));
  return wrapper.innerHTML;
}

function fragmentToPlainText(fragment: DocumentFragment): string {
  return Array.from(fragment.childNodes).map(nodeToPlainText).join("").trim();
}

function nodeToPlainText(node: Node): string {
  if (node.nodeType === Node.TEXT_NODE) return node.textContent ?? "";
  if (!(node instanceof Element)) return "";

  switch (node.tagName) {
    case "TABLE":
      return Array.from(node.querySelectorAll("tr"))
        .map(tableRowToText)
        .join("\n");
    case "TR":
      return `${tableRowToText(node)}\n`;
    case "THEAD":
    case "TBODY":
    case "TFOOT":
      return Array.from(node.children).map(nodeToPlainText).join("");
    case "BR":
      return "\n";
    default:
      return BLOCK_TAGS.has(node.tagName)
        ? `${childrenToPlainText(node)}\n`
        : childrenToPlainText(node);
  }
}

function childrenToPlainText(element: Element): string {
  return Array.from(element.childNodes).map(nodeToPlainText).join("");
}

function tableRowToText(element: Element): string {
  return Array.from(element.children)
    .filter((child) => child.tagName === "TH" || child.tagName === "TD")
    .map((child) => childrenToPlainText(child).trim())
    .join("\t");
}
