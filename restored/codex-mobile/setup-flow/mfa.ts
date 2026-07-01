// Restored from ref/webview/assets/codex-mobile-setup-flow-XFbY7C-Z.js
// MFA setup error helpers for Codex Mobile setup.
import { once as runOnce } from "../../runtime/commonjs-interop";
import {
  pullRequestNewThreadCompatSlotUpperDLowerT as MfaSetupRequiredError,
  pullRequestNewThreadCompatSlotLowerKLowerT as initMfaSetupErrorRuntime,
} from "../../runtime/current-app-initial/pull-request-new-thread-runtime";

export const initMfaSetupFlowRuntime = runOnce(() => {
  initMfaSetupErrorRuntime();
});

export function includesMfaSetupRequiredError(errors: unknown[]): boolean {
  return errors.some((error) => error instanceof MfaSetupRequiredError);
}
