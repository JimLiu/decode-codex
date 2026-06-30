// Restored from ref/webview/assets/index-BloiNxW7.js
// Browser-side entry point for the Codex webview bundle.
import { once } from "../runtime/commonjs-interop";
import {
  initDynamicModulePreloadRuntime,
  preloadDynamicImport,
} from "../runtime/dynamic-module-preload";
import { installModulepreloadPolyfill } from "../runtime/modulepreload-polyfill";

const PRELOAD_MANIFEST = [
  "./rpc-CoQWhzCy.js",
  "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js",
  "./rolldown-runtime-Czos8NxU.js",
  "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js",
  "./app-main-Dq9Zdi1c.js",
  "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js",
  "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js",
  "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~ozr5a6hk-DZC70s11.js",
  "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-Dlqz5rpw.css",
  "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-page~remote-con~di269h6j-DHWk0JvV.js",
  "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~o4ivuipr-BWGR4LZw.js",
  "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~appgen-publication-terms-ro~g0k1g2bt-B6jrUW_u.js",
  "./app-initial~app-main~worktree-init-v2-page~appgen-publication-terms-route~remote-conversati~miz7p5nt-CsT6xjQV.js",
  "./app-initial~app-main~remote-conversation-page~pull-requests-page~plugin-detail-page~new-thr~ny8xzqbh-ClcWSvU7.js",
  "./app-initial~app-main~worktree-init-v2-page~appgen-page~remote-conversation-page~pull-reques~l0drf339-C-9b569O.js",
  "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~jolrh1c9-UBdbdM9i.js",
  "./app-initial~app-main~worktree-init-v2-page~appgen-publication-terms-route~remote-conversati~cldi24d6-B1D9-E0F.js",
  "./app-initial~app-main~worktree-init-v2-page~appgen-page~remote-conversation-page~pull-reques~nkffpfmw-D-g_ABJu.js",
  "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-VB3xvGLa.css",
  "./app-initial~app-main~automations-page-Bc0ZtIBr.js",
  "./app-initial~app-main~onboarding-page-CgNc-Bk2.js",
  "./app-initial~app-main~onboarding-page~mermaid-diagram~xychartDiagram-PRI3JC2R~timeline-defin~dcen2xty-ZWKQ4q6W.js",
  "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~onboarding-page~hotkey-~h422e2ym-Dd6oN7BA.js",
  "./app-initial~app-main~agent-settings-D9wGrgBN.js",
  "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~n1rtl5kd-C_XgdDHQ.js",
  "./app-initial~app-main~remote-conversation-page~onboarding-page~settings-page~hotkey-window-t~hw2afr7f-DWOAvpOn.js",
  "./app-initial~app-main~remote-conversation-page~onboarding-page~hotkey-window-thread-page~bro~cpd0gmdw-wUhQKbLV.js",
  "./app-initial~app-main~onboarding-page-IPvMcdBI.css",
  "./app-initial~app-main~remote-conversation-page~projects-index-page-px21igmO.js",
  "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js",
  "./app-initial~app-main~projects-index-page~local-conversation-page-HgUkvfGN.js",
  "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~settings-page~appgen-li~oiv69xe5-CLPVtyft.js",
  "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~fjhbmao5-BWbJojtu.js",
  "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~fjhbmao5-D3jrmUOb.css",
  "./app-initial~app-main~pets-settings~appearance-settings~general-settings-DKOJ5iv-.js",
  "./app-initial~app-main~remote-conversation-page~onboarding-page~hotkey-window-thread-page~app~c482ypdv-D1zCejbw.js",
  "./app-initial~app-main~pets-settings~appearance-settings~general-settings-H4NGgmRi.css",
  "./app-initial~app-main~local-conversation-page-D-F_r9ay.js",
  "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~mhwq036p-DS9KwK15.js",
  "./app-initial~app-main~onboarding-page~select-workspace-page-BQtGPtqt.js",
  "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~settings-page~appgen-li~h99fup20-DznNRiiU.js",
  "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~mubih9a1-DOO64ycY.js",
  "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-DEWBne1j.css",
  "./app-initial~app-main~remote-conversation-page~pull-requests-page~projects-index-page~hotkey~ek7ayrmo-CFM_IGPy.js",
  "./app-initial~app-main~remote-conversation-page~projects-index-page~hotkey-window-thread-page~n4ikpxgm-MU61VBEm.js",
  "./app-initial~app-main~appgen-page~remote-conversation-page~projects-index-page~appgen-librar~clc2xu64-CruLP2Hm.js",
  "./app-initial~app-main~remote-conversation-page~projects-index-page-Bj9zvK4d.css",
  "./app-initial~app-main~page-CMEx4JDW.js",
  "./app-initial~app-main~home-ambient-suggestions-content-C1TXIiPK.js",
  "./app-initial~app-main~appgen-publication-terms-route~plugin-detail-page~skills-settings~plug~bpqstr7s-XDX4n0xi.js",
  "./app-initial~app-main~login-route~codex-mobile-page~remote-connections-settings-CsI-U3JO.js",
  "./app-initial~app-main~appgen-settings-page~appgen-page~appgen-library-page-hS325QiU.js",
  "./app-initial~app-main~hotkey-window-thread-page~automations-page~local-conversation-page-CnYocBk6.js",
  "./app-initial~app-main~pets-settings-CPYQX7qb.js",
  "./app-initial~app-main~pet-install-modal-host~avatar-overlay-page~avatar-overlay-native-page~~s9e72i2g-DsW4BsRC.js",
  "./app-initial~app-main~debug-window-page~agent-settings~debug-modal-Baq5IrGF.js",
  "./app-initial~app-main~remote-conversation-page~pull-requests-page~hotkey-window-thread-page~~b9vznyj4-Cs4hWsvd.js",
  "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~keyboard-shortcuts-~n7jwlpf0-BaxBxQFI.js",
  "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~thread-app-shell-ch~ecjwgenq-_p4PfxvN.js",
  "./app-initial~app-main~remote-conversation-page~local-conversation-page-Dj0nNLPv.js",
  "./app-initial~app-main~remote-conversation-page~hotkey-window-detail-layout~local-conversation-page-BnkJ2KOs.js",
  "./app-initial~app-main~personalization-settings~appearance-settings~general-settings-Qj6SXl5X.js",
  "./app-initial~app-main~remote-conversation-page~hotkey-window-worktree-init-page~hotkey-windo~kjl2gxhu-DXs0ueRP.js",
  "./app-initial~app-main~appgen-library-page-BfbI4bIH.js",
  "./app-initial~app-main~select-workspace-page-DMB-jExv.js",
  "./app-initial~app-main~remote-conversation-page~projects-index-page~hotkey-window-thread-page~o5l7nhuo-DnNHJk2m.js",
  "./app-initial~app-main~new-thread-panel-page-mHfWlM6S.js",
  "./app-initial~app-main~first-run~new-thread-panel-page-BZcGQjmi.js",
  "./app-initial~app-main~onboarding-page~pending-request-item-panel~home-ambient-suggestions-content-B1ROILfQ.js",
  "./app-initial~app-main~onboarding-page~pending-request-item-panel-B2KHEzKZ.js",
  "./app-initial~app-main~remote-conversation-page~thread-app-shell-chrome~local-conversation-page-BYNuwa4z.js",
  "./app-initial~app-main~onboarding-page~profile-CFRY9Eda.js",
  "./app-initial~app-main~settings-page~open-source-licenses-page~skills-settings~plugins-settin~cxbtmbfc-Bhanoo2P.js",
  "./app-initial~app-main~remote-conversation-page~appgen-library-page~local-conversation-page-DAngUxdy.js",
  "./app-initial~app-main~appgen-page~remote-conversation-page~projects-index-page~appgen-librar~i4jkvfhy-C3t3vyRs.js",
  "./app-initial~app-main~worktree-init-v2-page~hotkey-window-worktree-init-page~local-conversation-page-BwSKiuwm.js",
  "./app-initial~app-main~automations-page-DPOLxV_j.css",
  "./app-initial~app-main~register-app-actions-CTTYxHO5.js",
  "./app-BwRVouQs.js",
  "./app-jOJotR-N.css",
] as const;

const RPC_PRELOAD_INDEXES = [0, 1, 2, 3] as const;
const APP_MAIN_PRELOAD_INDEXES = [
  4, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
] as const;

const initEmptyWebviewEntryChunk = once(() => {});

function mapPreloadDependencies(indexes: readonly number[]): string[] {
  return indexes.map((index) => PRELOAD_MANIFEST[index]);
}

async function preloadRpcAndAppMain(): Promise<void> {
  initDynamicModulePreloadRuntime();
  await preloadDynamicImport(
    () => import("../runtime/rpc-b-ugf-axq"),
    mapPreloadDependencies(RPC_PRELOAD_INDEXES),
    import.meta.url,
  );
  await preloadDynamicImport(
    () => import("./app-main"),
    mapPreloadDependencies(APP_MAIN_PRELOAD_INDEXES),
    import.meta.url,
  );
}

export async function bootstrapCodexWebview(): Promise<void> {
  installModulepreloadPolyfill();
  initEmptyWebviewEntryChunk();
  await preloadRpcAndAppMain();
}

await bootstrapCodexWebview();
