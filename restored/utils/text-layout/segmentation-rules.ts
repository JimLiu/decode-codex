// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Shared punctuation and script rules used by text segmentation and layout.

export const CJK_CLOSING_PUNCTUATION = new Set(
  "，.．.！.：.；.？.、.。.・.）.〕.〉.》.」.』.】.〗.〙.〛.ー.々.〻.ゝ.ゞ.ヽ.ヾ".split(
    ".",
  ),
);

export const OPENING_PUNCTUATION = new Set([
  '"',
  "(",
  "[",
  "{",
  "“",
  "‘",
  "«",
  "‹",
  "（",
  "〔",
  "〈",
  "《",
  "「",
  "『",
  "【",
  "〖",
  "〘",
  "〚",
]);

export const TERMINAL_PUNCTUATION = new Set(
  '.(,(!(?(:(;(،(؛(؟(।(॥(၊(။(၌(၍(၏()(](}(%("(”(’(»(›(…'.split("("),
);

const CLOSING_QUOTES = new Set([
  "”",
  "’",
  "»",
  "›",
  "」",
  "』",
  "】",
  "》",
  "〉",
  "〕",
  "）",
]);

export function containsCJK(text: string): boolean {
  for (const char of text) {
    const codePoint = char.codePointAt(0)!;
    if (
      (codePoint >= 19968 && codePoint <= 40959) ||
      (codePoint >= 13312 && codePoint <= 19903) ||
      (codePoint >= 131072 && codePoint <= 173791) ||
      (codePoint >= 173824 && codePoint <= 177983) ||
      (codePoint >= 177984 && codePoint <= 178207) ||
      (codePoint >= 178208 && codePoint <= 183983) ||
      (codePoint >= 183984 && codePoint <= 191471) ||
      (codePoint >= 196608 && codePoint <= 201551) ||
      (codePoint >= 63744 && codePoint <= 64255) ||
      (codePoint >= 194560 && codePoint <= 195103) ||
      (codePoint >= 12288 && codePoint <= 12351) ||
      (codePoint >= 12352 && codePoint <= 12447) ||
      (codePoint >= 12448 && codePoint <= 12543) ||
      (codePoint >= 44032 && codePoint <= 55215) ||
      (codePoint >= 65280 && codePoint <= 65519)
    )
      return true;
  }
  return false;
}

export function endsWithClosingQuote(text: string): boolean {
  for (let index = text.length - 1; index >= 0; index--) {
    const char = text[index];
    if (CLOSING_QUOTES.has(char)) return true;
    if (!TERMINAL_PUNCTUATION.has(char)) return false;
  }
  return false;
}
