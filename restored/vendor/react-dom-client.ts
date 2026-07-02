// Restored from ref/webview/assets/client-C1mrATqU.js
// React DOM client npm shim for the bundled namespace helper.
import * as reactDomClient from "react-dom/client";

export { createRoot, hydrateRoot } from "react-dom/client";
export type { HydrationOptions, Root, RootOptions } from "react-dom/client";

export type ReactDomClientModule = typeof reactDomClient;

export function loadReactDomClient(): typeof reactDomClient {
  return reactDomClient;
}
