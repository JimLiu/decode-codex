// Restored from ref/webview/assets/git-branch-switcher-BokkKYIT.js

import { once } from "../../runtime/commonjs-interop";

let forbiddenBranchNameCharacters: Set<string>;

export const initSanitizeGitBranchSearchInput = once(() => {
  forbiddenBranchNameCharacters = new Set(["~", "^", ":", "?", "*", "[", "]", "\\"]);
});

export function sanitizeGitBranchSearchInput(input: string): string {
  initSanitizeGitBranchSearchInput();

  return Array.from(input)
    .filter((character) => !/\s/u.test(character) && !forbiddenBranchNameCharacters.has(character))
    .join("");
}
