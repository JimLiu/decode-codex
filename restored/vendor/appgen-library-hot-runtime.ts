// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CFm41aDU.js
// Synced with ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CFm41aDU.js.
// Current-ref compatibility facade for the appgen-library hot-path aliases
// still consumed by restored app-shell/composer modules.
import { type ComponentType, type Context, type ReactNode } from "react";
import {
  M as rawThreadComposerContext,
  N as initRawThreadComposerContextChunk,
  n as initRawThreadComposerFooterChunk,
  t as RawThreadComposerFooter,
} from "../../ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CFm41aDU.js";
import { AppShellElementContext } from "../app-shell/app-shell-element-context";

type ThreadComposerFooterComponent = ComponentType<{
  [propName: string]: unknown;
  children?: ReactNode;
}>;

initRawThreadComposerContextChunk();

export const appShellElementContext = AppShellElementContext;

export const threadComposerContext =
  rawThreadComposerContext as Context<boolean>;

export const ThreadComposerFooter =
  RawThreadComposerFooter as ThreadComposerFooterComponent;

export function initAppShellElementContextChunk(): void {}

export function initThreadComposerContextChunk(): void {
  initRawThreadComposerContextChunk();
}

export function initThreadComposerFooterChunk(): void {
  initRawThreadComposerContextChunk();
  initRawThreadComposerFooterChunk();
}
