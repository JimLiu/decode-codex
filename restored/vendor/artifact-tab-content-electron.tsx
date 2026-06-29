// Restored from ref/webview/assets/artifact-tab-content.electron-CggSRQ3S.js
// Electron artifact side-panel preview content
declare const dotnetSidecar: unknown;

const importScripts = (
  globalThis as typeof globalThis & {
    importScripts?: (...urls: string[]) => void;
  }
).importScripts;
const read = (
  globalThis as typeof globalThis & {
    read?: (path: string, encoding?: string) => string;
  }
).read;

const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "../runtime/node-external-browser-stub",
      "./rolldown-runtime-Czos8NxU.js",
      "../utils/workbook",
      "./workbook-DfQVQ3Vw.js",
      "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~dv5z3ftk-BhBbJNnt.js",
      "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~plugin-detail-page~new-~sfopfmmp-9J50_--p.js",
      "./presentation-CoztNq5K.js",
      "./app-initial~app-main~onboarding-page-BUwCKIcU.js",
      "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~bj5tp28r-Dcs9S3fj.js",
      "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~1je6c975-DGpPRr1D.js",
      "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~cf3a13zj-DZ7tupb9.js",
      "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~g5252vxb-CZkpVhg2.js",
      "./app-initial~app-main~remote-conversation-page~onboarding-page~projects-index-page~hotkey-wi~nek76pmq-C240EGR1.js",
      "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-page~remote-con~hih2jc2y-CWqOTUw4.js",
      "./app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~hotkey-win~fzw0jvy4-rg89odR_.js",
      "./app-initial~app-main~remote-conversation-page~projects-index-page~hotkey-window-thread-page~ki4n9fl3-zz_Wr7F0.js",
      "./app-initial~app-main~remote-conversation-page~projects-index-page~hotkey-window-thread-page~ki4n9fl3-sS9Dm_y9.css",
      "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf-DEE2TwPG.js",
      "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~chrf619l-Bf5oWcQG.js",
      "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf-9F1MU8ql.css",
      "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-page~remote-con~di269h6j-x1JD0lOF.js",
      "./app-initial~app-main~worktree-init-v2-page~appgen-publication-terms-route~remote-conversati~dg864qec-ISZMeMHq.js",
      "./app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~hotkey-win~fzw0jvy4-czZPzzcM.css",
      "./app-initial~app-main~remote-conversation-page~onboarding-page~hotkey-window-thread-page~thr~jv7rs281-Cvc3K8GC.js",
      "./app-initial~app-main~page~onboarding-page~skills-settings~plugins-settings~remote-connectio~c59x15mv-DDkvwlbO.js",
      "./app-initial~app-main~worktree-init-v2-page~appgen-page~remote-conversation-page~new-thread-~cudo26ta-w-TJZ3uo.js",
      "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~onboarding-page~hotkey-~fnaniary-xAHK9tNq.js",
      "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~onboarding-page~hotkey-~fnaniary-BhOGlSiR.css",
      "./app-initial~app-main~onboarding-page-DFdacs5s.css",
      "./address-utils-CS84EMiz.js",
      "./spreadsheet-S_ezKCuJ.js",
      "./src-CxdMHoe6.js",
      "./core-CCcWj3EO.js",
      "./isEmpty-DLFki7y7.js",
      "./_baseFor-BRFGaW29.js",
      "./reduce-CYbtueTs.js",
      "./merge-DKsDTUx2.js",
      "./lodash-CV0Sd7Vx.js",
      "../vendor/document-schema-entry",
      "./document-1gFz5aiQ.js",
      "../vendor/presentation-schema",
      "../vendor/spreadsheet-schema-entry",
      "../runtime/artifact-preview-panel-runtime",
      "./remote-text-edit-session-B1r-nLdc.js",
      "./remote-text-edit-session-CW-aJKLZ.css",
      "./feature-catalog-BWlM7gWG.js",
      "./PopcornPageNumberNavigation-2i17P54k.js",
      "../runtime/artifact-preview-panel-runtime",
      "./app-initial~app-main~remote-conversation-page~projects-index-page-14pJ3ozX.js",
      "./app-initial~app-main~projects-index-page~appearance-settings~general-settings-BpwP5uUa.js",
      "./app-initial~app-main~projects-index-page~remote-connections-settings~local-conversation-pag~goqedmh7-DWWP2MF3.js",
      "./app-initial~app-main~remote-conversation-page~onboarding-page~projects-index-page~hotkey-wi~jqxaf9bd-D06wdm98.js",
      "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~edtlcz4n-Ra05UQ4S.js",
      "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~edtlcz4n-DeNnfVpo.css",
      "./app-initial~app-main~remote-conversation-page~pull-requests-page~projects-index-page~hotkey~ek7ayrmo-CGSZn3BZ.js",
      "./app-initial~app-main~settings-page~projects-index-page~notebook-preview-panel~docx-preview-panel-BHOEvyvO.js",
      "./app-initial~app-main~appgen-page~remote-conversation-page~new-thread-panel-page~onboarding-~q51dlew8-DBFLWh48.js",
      "./app-initial~app-main~projects-index-page~hotkey-window-new-thread-page~hotkey-window-home-p~hswrsggc-CI5sWBpw.js",
      "./app-initial~app-main~worktree-init-v2-page~appgen-page~remote-conversation-page~plugin-deta~hb9r3lcf-Bl5shjph.js",
      "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~ovcriy74-BgNrphm6.js",
      "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~jolrh1c9-BEnPH27A.js",
      "./app-initial~app-main~remote-conversation-page~projects-index-page-Bj9zvK4d.css",
      "./popcorn-electron-surface-style-YXPnYoQ0.js",
      "./PopcornElectronPresentationPanel-pMDpowHW.css",
      "../runtime/artifact-preview-panel-runtime",
      "../runtime/artifact-preview-panel-runtime",
      "./artifact-analytics-DeyIRgFu.js",
      "./artifact-annotation-comment-C4rLnC0m.js",
      "./artifact-preview-status-Bog-waeI.js",
      "../runtime/artifact-preview-panel-runtime",
      "../runtime/artifact-preview-panel-runtime",
      "./pdf-preview-panel-BHPFKiOr.css",
    ]),
) => i.map((item) => d[item]);
import { once as e, toEsModule as t } from "../runtime/commonjs-interop";
import {
  artifactRouteScope as ee,
  getFallbackArtifactConversationId as re,
  initArtifactPanelRuntime as M,
  initArtifactRouteScopeRuntime as m,
} from "../boundaries/current-ref/artifact-tab-content-producer";
import { getRouteThreadId as u } from "../app-shell/app-view-route-helpers";
import { initXIcon as v, XIcon as g } from "../icons/x-icon";
import { Button as c, initButtonComponentPrimitives as y } from "../ui/button";
import {
  DropdownMenu as d,
  Dropdown as P,
  initDropdownMenuPrimitives as S,
} from "../ui/dropdown";
import {
  classNames as o,
  initClassNameRuntime as x,
} from "../utils/class-names";
import {
  initUseStableCallback as te,
  useStableCallback as ie,
} from "../utils/use-stable-callback";
import {
  FormattedMessage as L,
  initIntlRuntime as E,
  useIntl as O,
} from "./react-intl";
import {
  initReactQueryRuntime as a,
  useMutation as _,
  useQueryClient as R,
} from "../runtime/app-server-mutation-runtime";
import {
  initAppServerRequestRuntime as w,
  sendAppServerRequest as j,
} from "../runtime/app-server-request";
import { initScopeRuntime as r } from "../runtime/app-scope-runtime";
import {
  useScope as l,
  useScopedValue as b,
  useSignalValue as p,
} from "../runtime/app-scope-hooks";
import {
  initDynamicModulePreloadRuntime as D,
  preloadDynamicImport as i,
} from "../runtime/dynamic-module-preload";
import {
  initStatsigFeatureGateRuntime as f,
  useStatsigGate as F,
} from "../runtime/feature-gate-runtime";
import {
  initQueryDurationConstants as A,
  queryDurations as C,
  useHostQuery as ne,
} from "../runtime/host-query-runtime";
import { defineMessages as I } from "../runtime/intl-define-messages-runtime";
import {
  getChunkModuleExports as N,
  getJsxRuntime as s,
  initReactRuntime as h,
} from "../runtime/shared-utility-runtime";
import { initVscodeBridgeRuntime as n } from "../runtime/platform-content-runtime";
import {
  initVscodeMessageRuntime as T,
  vscodeMessageBridge as k,
} from "../runtime/vscode-message-runtime";
import {
  ei as _e,
  Ba as ae,
  oa as be,
  Ka as ce,
  sa as Ce,
  Xt as de,
  yd as Ee,
  Yr as fe,
  ai as ge,
  Zt as he,
  Va as le,
  Zr as me,
  Ga as oe,
  Yt as pe,
  Ha as se,
  ri as Se,
  vd as Te,
  Xr as ue,
  ii as ve,
  si as we,
  oi as xe,
  ni as ye,
  Jt as z,
} from "../boundaries/current-ref/projects-app-shared-producer";
import {
  ArtifactOpenButton,
  ArtifactPreviewDownloadButton,
  ArtifactPreviewHeader,
  ArtifactPreviewZoomControl,
  ArtifactPreviewZoomToFitLabel,
  artifactPreviewZoomOptions,
  initArtifactDropdownMenuRuntime,
  initArtifactPreviewControlsChunk,
  initArtifactPreviewZoomRuntime,
} from "../boundaries/current-ref/pull-request-thread-actions-producer";
import {
  xd as Be,
  bd as ze,
} from "../boundaries/current-ref/profile-page-producer";
import {
  ArtifactSourceIcon,
  initArtifactImportPresentationChunk as He,
  shouldParseArtifactPreviewForImportKind as Ve,
} from "../boundaries/current-ref/appgen-publication-terms-producer";
import { focusComposerInput } from "../composer/focus-composer";
import {
  initArtifactAnalyticsChunk as qe,
  trackArtifactAnnotationCanceled as Ue,
  trackArtifactAnnotationSaved as Ge,
  trackArtifactAnnotationStarted as Ke,
  trackArtifactAnnotationSubmitted as We,
} from "../features/artifact-analytics";
import {
  createArtifactAnnotationComment as $e,
  getArtifactAnnotationCommentsForPath as Xe,
  getNextArtifactAnnotationLine as Qe,
  getRemovedArtifactAnnotationIds as Ye,
  initArtifactAnnotationCommentChunk as Je,
  removeArtifactAnnotationCommentsForPath as Ze,
} from "../ui/artifact-annotation-comment";
import {
  ArtifactPreviewStatus as et,
  initArtifactPreviewStatusChunk as tt,
} from "../utils/artifact-preview-status";
function nt() {
  let [t, n] = it.useState(false),
    r,
    i;
  return (
    (r = () => {
      if (t) return;
      let e = requestAnimationFrame(() => {
        n(true);
      });
      return () => {
        cancelAnimationFrame(e);
      };
    }),
    (i = [t]),
    it.useEffect(r, i),
    t
  );
}
var rt,
  it,
  at = e(() => {
    rt = N();
    it = t(h(), 1);
  });
function ot() {
  return F("839469903");
}
var st = e(() => {
    f();
  }),
  ct,
  lt,
  ut,
  dt,
  ft = e(() => {
    ct = "Walnut";
    lt = {
      hash: "sha256-LtuhDQQsdVVtQ22mvvEbDi4+1Qaq7EweT82Jfj2Jn4g=",
      fingerprinting: {
        "DocumentFormat.OpenXml.Framework.0btjfjhalm.wasm":
          "DocumentFormat.OpenXml.Framework.wasm",
        "DocumentFormat.OpenXml.55d3ow6vdi.wasm": "DocumentFormat.OpenXml.wasm",
        "Google.Protobuf.ze35jf5cfr.wasm": "Google.Protobuf.wasm",
        "System.Collections.Concurrent.ldchavd19c.wasm":
          "System.Collections.Concurrent.wasm",
        "System.Collections.NonGeneric.hwlrzf12lo.wasm":
          "System.Collections.NonGeneric.wasm",
        "System.Collections.Specialized.4zuiaj1jfx.wasm":
          "System.Collections.Specialized.wasm",
        "System.Collections.7z41aqr4wq.wasm": "System.Collections.wasm",
        "System.ComponentModel.Primitives.metloa6mf6.wasm":
          "System.ComponentModel.Primitives.wasm",
        "System.ComponentModel.TypeConverter.pt2mirik28.wasm":
          "System.ComponentModel.TypeConverter.wasm",
        "System.ComponentModel.1361c7vb8q.wasm": "System.ComponentModel.wasm",
        "System.Console.zevyqgdjei.wasm": "System.Console.wasm",
        "System.Diagnostics.DiagnosticSource.atgcpdiswi.wasm":
          "System.Diagnostics.DiagnosticSource.wasm",
        "System.IO.Compression.e2q4qnrk6t.wasm": "System.IO.Compression.wasm",
        "System.IO.Packaging.ejb20qp7p2.wasm": "System.IO.Packaging.wasm",
        "System.Linq.Expressions.wtffzpkofr.wasm":
          "System.Linq.Expressions.wasm",
        "System.Linq.6envannok7.wasm": "System.Linq.wasm",
        "System.Memory.7egqecd4qd.wasm": "System.Memory.wasm",
        "System.Net.Http.fu810kwcis.wasm": "System.Net.Http.wasm",
        "System.Net.Primitives.75lp42aqqu.wasm": "System.Net.Primitives.wasm",
        "System.ObjectModel.r33abj1vz2.wasm": "System.ObjectModel.wasm",
        "System.Private.CoreLib.lkbfrurw5d.wasm": "System.Private.CoreLib.wasm",
        "System.Private.Uri.7o7vx0f6mc.wasm": "System.Private.Uri.wasm",
        "System.Private.Xml.Linq.lb5q3wlfjx.wasm":
          "System.Private.Xml.Linq.wasm",
        "System.Private.Xml.7j8euw80pw.wasm": "System.Private.Xml.wasm",
        "System.Runtime.InteropServices.JavaScript.axh2kvyj3w.wasm":
          "System.Runtime.InteropServices.JavaScript.wasm",
        "System.Security.Cryptography.bwdbunr2xr.wasm":
          "System.Security.Cryptography.wasm",
        "System.Text.RegularExpressions.3stxv8wbt1.wasm":
          "System.Text.RegularExpressions.wasm",
        "System.sal18ehrzx.wasm": "System.wasm",
        "System.Xml.Linq.2igp66i6bh.wasm": "System.Xml.Linq.wasm",
        "Walnut.z4btz0l975.wasm": "Walnut.wasm",
        "dotnet.native.mp1m61iod5.js": "dotnet.native.js",
        "dotnet.native.j2z0p1bhpb.wasm": "dotnet.native.wasm",
        "dotnet.js": "dotnet.js",
        "dotnet.runtime.opaiwunc3t.js": "dotnet.runtime.js",
      },
      jsModuleNative: {
        "dotnet.native.mp1m61iod5.js":
          "sha256-KjyKtbRsXu8t0O05ni9voif3uiOqascumCESYBxbz6E=",
      },
      jsModuleRuntime: {
        "dotnet.runtime.opaiwunc3t.js":
          "sha256-vM4cfmuAtxs/dLoxiTCzPyPCyNkwOJu14cp6lXv3Sak=",
      },
      wasmNative: {
        "dotnet.native.j2z0p1bhpb.wasm":
          "sha256-dQGXa5cNrmmrJAeBx/+rv3gw8EBelfE9fakDGn/T4EI=",
      },
      coreAssembly: {
        "System.Private.CoreLib.lkbfrurw5d.wasm":
          "sha256-qzS6B4gVTTL597dye8VcczE0aDgH+U5Fr9tapXV2+ak=",
        "System.Runtime.InteropServices.JavaScript.axh2kvyj3w.wasm":
          "sha256-Phf+KWkVZBI3PVulXvlkD1MiRgPlMWO64kO6ZrDXT2A=",
      },
      assembly: {
        "DocumentFormat.OpenXml.Framework.0btjfjhalm.wasm":
          "sha256-HEYEwaFfI98KDyV5FcTpcJAfwd10vLQn+SjWqLLFXWs=",
        "DocumentFormat.OpenXml.55d3ow6vdi.wasm":
          "sha256-t+LYTwCiJOmOQ0VO/mZMbGRF5Kb9ceo92+dwaAE5wKs=",
        "Google.Protobuf.ze35jf5cfr.wasm":
          "sha256-i38brCJSYmpsUEG3n34uEuDFfLxkrlECq4wIOMlpBiY=",
        "System.Collections.Concurrent.ldchavd19c.wasm":
          "sha256-6Y7hC7AIbYYA5/NpJ7aJn+cbvxPS1VFRtEScQZI3gzg=",
        "System.Collections.NonGeneric.hwlrzf12lo.wasm":
          "sha256-oda0kRYpLv1uY8p9mWGVNUbNlbrX3s4xM9S5+WqAOic=",
        "System.Collections.Specialized.4zuiaj1jfx.wasm":
          "sha256-ULO4fsXpiHk1UAv++yiNcx0esrXGMCbyW6cxyNFJRYE=",
        "System.Collections.7z41aqr4wq.wasm":
          "sha256-jY4i+NcygI/AzpIJML31SQxlvgB1Bra/+uITbMOnxUM=",
        "System.ComponentModel.Primitives.metloa6mf6.wasm":
          "sha256-4hdUWNfZEEKjaK+16Wpc/VVzAFqyy7VgEI4gbtq0Khk=",
        "System.ComponentModel.TypeConverter.pt2mirik28.wasm":
          "sha256-M4qVDLosAczfVvfJbntirsIUFlxrhWDnhOGMMzCL92Y=",
        "System.ComponentModel.1361c7vb8q.wasm":
          "sha256-DY3uXP3Vs/4c+cECffoMlBIX27Y+hAdTawZg6YIydUo=",
        "System.Console.zevyqgdjei.wasm":
          "sha256-i/3VP3CK0OUnYN/3Jzu3RASk6gVPE22QeeKmnCdwNlY=",
        "System.Diagnostics.DiagnosticSource.atgcpdiswi.wasm":
          "sha256-Hg3qT4KdPb1uKkZxVTFFlFIk9kLPdBY/0I/roG/s+Xc=",
        "System.IO.Compression.e2q4qnrk6t.wasm":
          "sha256-Ct1/B8ViZ2OXZAA+FBdmYsTOWrlYHQ7ihpL4teubKng=",
        "System.IO.Packaging.ejb20qp7p2.wasm":
          "sha256-FmH8uRx5Ltr4iImKrvn8KFhC0qZ863olZEkXoHrw1Ak=",
        "System.Linq.Expressions.wtffzpkofr.wasm":
          "sha256-5EQ0wmJVV0F29EeERS4bjGS0fKIGg96ijGImJRLik8s=",
        "System.Linq.6envannok7.wasm":
          "sha256-Lv6LqGsVK8tIjxLMMO8rUTvfbMs7xdxon3N2O2s3FCE=",
        "System.Memory.7egqecd4qd.wasm":
          "sha256-fyPkou2T02Batj93NNyNCsf5ojuZUmsfrUbzNaYrpwQ=",
        "System.Net.Http.fu810kwcis.wasm":
          "sha256-+UwbNbiPj4rvyTPeQf2kKOVLLOfZjNRZHquuVUhtskM=",
        "System.Net.Primitives.75lp42aqqu.wasm":
          "sha256-SyOJAigc3HsrOUtBC5sxPNUIn8DzkJb0Is+Js1Fv3ao=",
        "System.ObjectModel.r33abj1vz2.wasm":
          "sha256-yepQ5BNQzZyO7gISF8K8g9JyEx2Xq/EWyGdwT7be3wQ=",
        "System.Private.Uri.7o7vx0f6mc.wasm":
          "sha256-l2lx4BeqkLFhUeRMyuf8FOHjpl30lKHVK/2DI5PZXiM=",
        "System.Private.Xml.Linq.lb5q3wlfjx.wasm":
          "sha256-cRDN8qL//CxG5UvXr8bvTb/HL4TETX/ef5pGtvXOuLU=",
        "System.Private.Xml.7j8euw80pw.wasm":
          "sha256-swCB6D4KGGZPA0Jsw9rVWFdDuKUK1pxuoLAL6bZL7kY=",
        "System.Security.Cryptography.bwdbunr2xr.wasm":
          "sha256-G+Ut0KzHIZcVx4+1waky6JewrPIW1WMziCBWpOYmOJw=",
        "System.Text.RegularExpressions.3stxv8wbt1.wasm":
          "sha256-/Yuod/3LZgX3DyZzDjSkjVKQ/qDADPEASsA83FnNgXk=",
        "System.sal18ehrzx.wasm":
          "sha256-7A2VUL5SS7XF9SMTD/1ZoA+DNXtehpDAPs15R9lyz3A=",
        "System.Xml.Linq.2igp66i6bh.wasm":
          "sha256-NqKQOd+AR2KOJS87B7IZDx6rPHXGtUIl3brm/o04I7I=",
        "Walnut.z4btz0l975.wasm":
          "sha256-o3AdQs4VSndVKEkUzkxNETPlfs+j+3reYpZGOHYmg2c=",
      },
    };
    ut = "invariant";
    dt = {
      mainAssemblyName: ct,
      resources: lt,
      debugLevel: 0,
      linkerEnabled: true,
      globalizationMode: ut,
    };
  });
function pt(e, t) {
  let n = null,
    r = new Promise(function (r, i) {
      n = {
        isDone: false,
        promise: null,
        resolve: (t) => {
          n.isDone || ((n.isDone = true), r(t), e && e());
        },
        reject: (e) => {
          n.isDone || ((n.isDone = true), i(e), t && t());
        },
      };
    });
  n.promise = r;
  let i = r;
  return (
    (i[En] = n),
    {
      promise: i,
      promise_control: n,
    }
  );
}
function mt(e) {
  return e[En];
}
function ht(e) {
  (e &&
    (function (e) {
      return e[En] !== undefined;
    })(e)) ||
    H(false, "Promise is not controllable");
}
function gt(e) {
  Mn = e;
}
function B(e) {
  if (J.diagnosticTracing) {
    let t = typeof e == "function" ? e() : e;
    console.debug(kn + t);
  }
}
function _t(e, ...t) {
  console.info(kn + e, ...t);
}
function vt(e, ...t) {
  console.info(e, ...t);
}
function yt(e, ...t) {
  console.warn(kn + e, ...t);
}
function bt(e, ...t) {
  if (t && t.length > 0 && t[0] && typeof t[0] == "object") {
    if (t[0].silent) return;
    if (t[0].toString) return void console.error(kn + e, t[0].toString());
  }
  console.error(kn + e, ...t);
}
function xt(e, t, n) {
  return function (...r) {
    try {
      let i = r[0];
      if (i === undefined) i = "undefined";
      else if (i === null) i = "null";
      else if (typeof i == "function") i = i.toString();
      else if (typeof i != "string")
        try {
          i = JSON.stringify(i);
        } catch {
          i = i.toString();
        }
      t(
        n
          ? JSON.stringify({
              method: e,
              payload: i,
              arguments: r.slice(1),
            })
          : [e + i, ...r.slice(1)],
      );
    } catch (e) {
      jn.error(`proxyConsole failed: ${e}`);
    }
  };
}
function St(e, t, n) {
  An = t;
  Mn = e;
  jn = {
    ...t,
  };
  let r = `${n}/console`
    .replace("https://", "wss://")
    .replace("http://", "ws://");
  W = new WebSocket(r);
  W.addEventListener("error", Tt);
  W.addEventListener("close", Et);
  (function () {
    for (let e of On) An[e] = xt(`console.${e}`, wt, true);
  })();
}
function Ct(e) {
  let t = 30,
    n = () => {
      W
        ? W.bufferedAmount == 0 || t == 0
          ? (e && vt(e),
            (function () {
              for (let e of On) An[e] = xt(`console.${e}`, jn.log, false);
            })(),
            W.removeEventListener("error", Tt),
            W.removeEventListener("close", Et),
            W.close(1e3, e),
            (W = undefined))
          : (t--, globalThis.setTimeout(n, 100))
        : e && jn && jn.log(e);
    };
  n();
}
function wt(e) {
  W && W.readyState === WebSocket.OPEN ? W.send(e) : jn.log(e);
}
function Tt(e) {
  jn.error(`[${Mn}] proxy console websocket error: ${e}`, e);
}
function Et(e) {
  jn.debug(`[${Mn}] proxy console websocket closed: ${e}`, e);
}
function Dt() {
  let e = Object.values(Fn),
    t = Object.values(Pn),
    n = jt(e),
    r = jt(t),
    i = n + r;
  if (i === 0) return;
  let a = K ? "%c" : "",
    o = K
      ? [
          "background: purple; color: white; padding: 1px 3px; border-radius: 3px;",
          "font-weight: bold;",
          "font-weight: normal;",
        ]
      : [],
    s = J.config.linkerEnabled
      ? ""
      : "\nThis application was built with linking (tree shaking) disabled. \nPublished applications will be significantly smaller if you install wasm-tools workload. \nSee also https://aka.ms/dotnet-wasm-features";
  console.groupCollapsed(
    `${a}dotnet${a} Loaded ${Mt(i)} resources${a}${s}`,
    ...o,
  );
  e.length &&
    (console.groupCollapsed(`Loaded ${Mt(n)} resources from cache`),
    console.table(Fn),
    console.groupEnd());
  t.length &&
    (console.groupCollapsed(`Loaded ${Mt(r)} resources from network`),
    console.table(Pn),
    console.groupEnd());
  console.groupEnd();
}
async function Ot() {
  let e = In;
  if (e) {
    let t = (await e.keys()).map(async (item) => {
      item.url in Nn || (await e.delete(item));
    });
    await Promise.all(t);
  }
}
function kt(e) {
  return `${e.resolvedUrl}.${e.hash}`;
}
async function At() {
  In = await (async function (e) {
    if (
      !J.config.cacheBootResources ||
      globalThis.caches === undefined ||
      globalThis.document === undefined ||
      false === globalThis.isSecureContext
    )
      return null;
    let t = `dotnet-resources-${globalThis.document.baseURI.substring(globalThis.document.location.origin.length)}`;
    try {
      return (await caches.open(t)) || null;
    } catch {
      return null;
    }
  })();
}
function jt(e) {
  return e.reduce(
    (accumulator, current) => accumulator + (current.responseBytes || 0),
    0,
  );
}
function Mt(e) {
  return `${(e / 1048576).toFixed(2)} MB`;
}
function Nt() {
  J.preferredIcuAsset = Pt(J.config);
  let e = J.config.globalizationMode == "invariant";
  if (!e)
    if (J.preferredIcuAsset)
      J.diagnosticTracing &&
        B("ICU data archive(s) available, disabling invariant mode");
    else {
      if (
        J.config.globalizationMode === "custom" ||
        J.config.globalizationMode === "all" ||
        J.config.globalizationMode === "sharded"
      ) {
        throw (
          bt(
            `ERROR: ${"invariant globalization mode is inactive and no ICU data archives are available"}`,
          ),
          Error(
            "invariant globalization mode is inactive and no ICU data archives are available",
          )
        );
      }
      J.diagnosticTracing &&
        B(
          "ICU data archive(s) not available, using invariant globalization mode",
        );
      e = true;
      J.preferredIcuAsset = null;
    }
  let r = J.config.environmentVariables;
  if (
    (r.DOTNET_SYSTEM_GLOBALIZATION_HYBRID === undefined &&
    J.config.globalizationMode === "hybrid"
      ? (r.DOTNET_SYSTEM_GLOBALIZATION_HYBRID = "1")
      : r.DOTNET_SYSTEM_GLOBALIZATION_INVARIANT === undefined &&
        e &&
        (r.DOTNET_SYSTEM_GLOBALIZATION_INVARIANT = "1"),
    r.TZ === undefined)
  )
    try {
      let e = Intl.DateTimeFormat().resolvedOptions().timeZone || null;
      e && (r.TZ = e);
    } catch {
      _t("failed to detect timezone, will fallback to UTC");
    }
}
function Pt(e) {
  if (e.resources?.icu && e.globalizationMode != "invariant") {
    let t =
        e.applicationCulture ||
        (K
          ? globalThis.navigator &&
            globalThis.navigator.languages &&
            globalThis.navigator.languages[0]
          : Intl.DateTimeFormat().resolvedOptions().locale),
      n = Object.keys(e.resources.icu),
      r = {};
    for (let t = 0; t < n.length; t++) {
      let i = n[t];
      e.resources.fingerprinting ? (r[Wt(i)] = i) : (r[i] = i);
    }
    let i = null;
    if (e.globalizationMode === "custom") {
      if (n.length >= 1) return n[0];
    } else
      e.globalizationMode === "hybrid"
        ? (i = "icudt_hybrid.dat")
        : t && e.globalizationMode !== "all"
          ? e.globalizationMode === "sharded" &&
            (i = (function (e) {
              let t = e.split("-")[0];
              return t === "en" ||
                [
                  "fr",
                  "fr-FR",
                  "it",
                  "it-IT",
                  "de",
                  "de-DE",
                  "es",
                  "es-ES",
                ].includes(e)
                ? "icudt_EFIGS.dat"
                : ["zh", "ko", "ja"].includes(t)
                  ? "icudt_CJK.dat"
                  : "icudt_no_CJK.dat";
            })(t))
          : (i = "icudt.dat");
    if (i && r[i]) return r[i];
  }
  return ((e.globalizationMode = "invariant"), null);
}
async function Ft(e, t) {
  try {
    let n = typeof globalThis.fetch == "function";
    if (sr) {
      let r = e.startsWith("file://");
      if (!r && n)
        return globalThis.fetch(
          e,
          t || {
            credentials: "same-origin",
          },
        );
      Ln ||= ((Rn = pr.require("url")), pr.require("fs"));
      r && (e = Rn.fileURLToPath(e));
      let i = await Ln.promises.readFile(e);
      return {
        ok: true,
        headers: {
          length: 0,
          get: () => null,
        },
        url: e,
        arrayBuffer: () => i,
        json: () => JSON.parse(i),
        text: () => {
          throw Error("NotImplementedException");
        },
      };
    }
    if (n)
      return globalThis.fetch(
        e,
        t || {
          credentials: "same-origin",
        },
      );
    if (typeof read == "function")
      return {
        ok: true,
        url: e,
        headers: {
          length: 0,
          get: () => null,
        },
        arrayBuffer: () => new Uint8Array(read(e, "binary")),
        json: () => JSON.parse(read(e, "utf8")),
        text: () => read(e, "utf8"),
      };
  } catch (t) {
    return {
      ok: false,
      url: e,
      status: 500,
      headers: {
        length: 0,
        get: () => null,
      },
      statusText: "ERR28: " + t,
      arrayBuffer: () => {
        throw t;
      },
      json: () => {
        throw t;
      },
      text: () => {
        throw t;
      },
    };
  }
  throw Error("No fetch implementation available");
}
function It(e) {
  return (
    typeof e != "string" && H(false, "url must be a string"),
    !Lt(e) &&
      e.indexOf("./") !== 0 &&
      e.indexOf("../") !== 0 &&
      globalThis.URL &&
      globalThis.document &&
      globalThis.document.baseURI &&
      (e = new URL(e, globalThis.document.baseURI).toString()),
    e
  );
}
function Lt(e) {
  return sr || ur
    ? e.startsWith("/") ||
        e.startsWith("\\") ||
        e.indexOf("///") !== -1 ||
        Vn.test(e)
    : Bn.test(e);
}
function Rt(e) {
  return !(e.behavior == "icu" && e.name != J.preferredIcuAsset);
}
function zt(e, t, n) {
  let r = Object.keys(t || {});
  H(r.length == 1, `Expect to have one ${n} asset in resources`);
  let i = r[0],
    a = {
      name: i,
      hash: t[i],
      behavior: n,
    };
  return (Bt(a), e.push(a), a);
}
function Bt(e) {
  Jn[e.behavior] && Gn.set(e.behavior, e);
}
function Vt(e) {
  let t = (function (e) {
    H(Jn[e], `Unknown single asset behavior ${e}`);
    let t = Gn.get(e);
    return (H(t, `Single asset for ${e} not found`), t);
  })(e);
  if (!t.resolvedUrl) {
    if (((t.resolvedUrl = J.locateFile(t.name)), Kn[t.behavior])) {
      let e = Zt(t);
      e
        ? (typeof e != "string" &&
            H(
              false,
              "loadBootResource response for 'dotnetjs' type should be a URL string",
            ),
          (t.resolvedUrl = e))
        : (t.resolvedUrl = Yt(t.resolvedUrl, t.behavior));
    } else if (t.behavior !== "dotnetwasm")
      throw Error(`Unknown single asset behavior ${e}`);
  }
  return t;
}
async function Ht() {
  if (!er) {
    er = true;
    J.diagnosticTracing && B("mono_download_assets");
    try {
      let e = [],
        t = [],
        n = (e, t) => {
          !Qn[e.behavior] && Rt(e) && J.expected_instantiated_assets_count++;
          !Xn[e.behavior] &&
            Rt(e) &&
            (J.expected_downloaded_assets_count++, t.push(Kt(e)));
        };
      for (let t of Wn) n(t, e);
      for (let e of G) n(e, t);
      J.allDownloadsQueued.promise_control.resolve();
      Promise.all([...e, ...t])
        .then(() => {
          J.allDownloadsFinished.promise_control.resolve();
        })
        .catch((error) => {
          throw (
            J.err("Error in mono_download_assets: " + error),
            U(1, error),
            error
          );
        });
      await J.runtimeModuleLoaded.promise;
      let r = async (e) => {
          let t = await e;
          if (t.buffer) {
            if (!Qn[t.behavior]) {
              (t.buffer && typeof t.buffer == "object") ||
                H(
                  false,
                  "asset buffer must be array-like or buffer-like or promise of these",
                );
              typeof t.resolvedUrl != "string" &&
                H(false, "resolvedUrl must be string");
              let e = t.resolvedUrl,
                n = await t.buffer,
                r = new Uint8Array(n);
              Qt(t);
              await q.beforeOnRuntimeInitialized.promise;
              q.instantiate_asset(t, e, r);
            }
          } else
            Zn[t.behavior]
              ? (t.behavior === "symbols"
                  ? (await q.instantiate_symbols_asset(t), Qt(t))
                  : t.behavior === "segmentation-rules" &&
                    (await q.instantiate_segmentation_rules_asset(t), Qt(t)),
                Zn[t.behavior] && ++J.actual_downloaded_assets_count)
              : (t.isOptional ||
                  H(false, "Expected asset to have the downloaded buffer"),
                !Xn[t.behavior] &&
                  Rt(t) &&
                  J.expected_downloaded_assets_count--,
                !Qn[t.behavior] &&
                  Rt(t) &&
                  J.expected_instantiated_assets_count--);
        },
        i = [],
        a = [];
      for (let t of e) i.push(r(t));
      for (let e of t) a.push(r(e));
      Promise.all(i)
        .then(() => {
          lr || q.coreAssetsInMemory.promise_control.resolve();
        })
        .catch((error) => {
          throw (
            J.err("Error in mono_download_assets: " + error),
            U(1, error),
            error
          );
        });
      Promise.all(a)
        .then(async () => {
          lr ||
            (await q.coreAssetsInMemory.promise,
            q.allAssetsInMemory.promise_control.resolve());
        })
        .catch((error) => {
          throw (
            J.err("Error in mono_download_assets: " + error),
            U(1, error),
            error
          );
        });
    } catch (e) {
      throw (J.err("Error in mono_download_assets: " + e), e);
    }
  }
}
function Ut() {
  if (tr) return;
  tr = true;
  let e = J.config,
    t = [];
  if (e.assets)
    for (let t of e.assets) {
      typeof t != "object" &&
        H(false, `asset must be object, it was ${typeof t} : ${t}`);
      typeof t.behavior != "string" &&
        H(false, "asset behavior must be known string");
      typeof t.name != "string" && H(false, "asset name must be string");
      t.resolvedUrl &&
        typeof t.resolvedUrl != "string" &&
        H(false, "asset resolvedUrl could be string");
      t.hash &&
        typeof t.hash != "string" &&
        H(false, "asset resolvedUrl could be string");
      t.pendingDownload &&
        typeof t.pendingDownload != "object" &&
        H(false, "asset pendingDownload could be object");
      t.isCore ? Wn.push(t) : G.push(t);
      Bt(t);
    }
  else if (e.resources) {
    let n = e.resources;
    n.wasmNative || H(false, "resources.wasmNative must be defined");
    n.jsModuleNative || H(false, "resources.jsModuleNative must be defined");
    n.jsModuleRuntime || H(false, "resources.jsModuleRuntime must be defined");
    zt(G, n.wasmNative, "dotnetwasm");
    zt(t, n.jsModuleNative, "js-module-native");
    zt(t, n.jsModuleRuntime, "js-module-runtime");
    e.globalizationMode == "hybrid" &&
      zt(t, n.jsModuleGlobalization, "js-module-globalization");
    let r = (e, t) => {
      !n.fingerprinting ||
        (e.behavior != "assembly" &&
          e.behavior != "pdb" &&
          e.behavior != "resource") ||
        (e.virtualPath = Wt(e.name));
      t ? ((e.isCore = true), Wn.push(e)) : G.push(e);
    };
    if (n.coreAssembly)
      for (let e in n.coreAssembly)
        r(
          {
            name: e,
            hash: n.coreAssembly[e],
            behavior: "assembly",
          },
          true,
        );
    if (n.assembly)
      for (let e in n.assembly)
        r(
          {
            name: e,
            hash: n.assembly[e],
            behavior: "assembly",
          },
          !n.coreAssembly,
        );
    if (e.debugLevel != 0) {
      if (n.corePdb)
        for (let e in n.corePdb)
          r(
            {
              name: e,
              hash: n.corePdb[e],
              behavior: "pdb",
            },
            true,
          );
      if (n.pdb)
        for (let e in n.pdb)
          r(
            {
              name: e,
              hash: n.pdb[e],
              behavior: "pdb",
            },
            !n.corePdb,
          );
    }
    if (e.loadAllSatelliteResources && n.satelliteResources)
      for (let e in n.satelliteResources)
        for (let t in n.satelliteResources[e])
          r(
            {
              name: t,
              hash: n.satelliteResources[e][t],
              behavior: "resource",
              culture: e,
            },
            !n.coreAssembly,
          );
    if (n.coreVfs)
      for (let e in n.coreVfs)
        for (let t in n.coreVfs[e])
          r(
            {
              name: t,
              hash: n.coreVfs[e][t],
              behavior: "vfs",
              virtualPath: e,
            },
            true,
          );
    if (n.vfs)
      for (let e in n.vfs)
        for (let t in n.vfs[e])
          r(
            {
              name: t,
              hash: n.vfs[e][t],
              behavior: "vfs",
              virtualPath: e,
            },
            !n.coreVfs,
          );
    let i = Pt(e);
    if (i && n.icu)
      for (let e in n.icu)
        e === i
          ? G.push({
              name: e,
              hash: n.icu[e],
              behavior: "icu",
              loadRemote: true,
            })
          : e.startsWith("segmentation-rules") &&
            e.endsWith(".json") &&
            G.push({
              name: e,
              hash: n.icu[e],
              behavior: "segmentation-rules",
            });
    if (n.wasmSymbols)
      for (let e in n.wasmSymbols)
        Wn.push({
          name: e,
          hash: n.wasmSymbols[e],
          behavior: "symbols",
        });
  }
  if (e.appsettings)
    for (let t = 0; t < e.appsettings.length; t++) {
      let n = e.appsettings[t],
        r = $t(n);
      (r !== "appsettings.json" &&
        r !== `appsettings.${e.applicationEnvironment}.json`) ||
        G.push({
          name: n,
          behavior: "vfs",
          noCache: true,
          useCredentials: true,
        });
    }
  e.assets = [...Wn, ...G, ...t];
}
function Wt(e) {
  let t = J.config.resources?.fingerprinting;
  return t && t[e] ? t[e] : e;
}
async function Gt(e) {
  let t = await Kt(e);
  return (await t.pendingDownloadInternal.response, t.buffer);
}
async function Kt(e) {
  try {
    return await qt(e);
  } catch (t) {
    if (
      !J.enableDownloadRetry ||
      ur ||
      sr ||
      (e.pendingDownload && e.pendingDownloadInternal == e.pendingDownload) ||
      (e.resolvedUrl && e.resolvedUrl.indexOf("file://") != -1) ||
      (t && t.status == 404)
    )
      throw t;
    e.pendingDownloadInternal = undefined;
    await J.allDownloadsQueued.promise;
    try {
      return (
        J.diagnosticTracing && B(`Retrying download '${e.name}'`),
        await qt(e)
      );
    } catch {
      return (
        (e.pendingDownloadInternal = undefined),
        await new Promise((e) => globalThis.setTimeout(e, 100)),
        J.diagnosticTracing &&
          B(`Retrying download (2) '${e.name}' after delay`),
        await qt(e)
      );
    }
  }
}
async function qt(e) {
  for (; Hn; ) await Hn.promise;
  try {
    ++Un;
    Un == J.maxParallelDownloads &&
      (J.diagnosticTracing && B("Throttling further parallel downloads"),
      (Hn = pt()));
    let t = await (async function (e) {
      if (
        (e.pendingDownload && (e.pendingDownloadInternal = e.pendingDownload),
        e.pendingDownloadInternal && e.pendingDownloadInternal.response)
      )
        return e.pendingDownloadInternal.response;
      if (e.buffer) {
        let t = await e.buffer;
        return (
          (e.resolvedUrl ||= "undefined://" + e.name),
          (e.pendingDownloadInternal = {
            url: e.resolvedUrl,
            name: e.name,
            response: Promise.resolve({
              ok: true,
              arrayBuffer: () => t,
              json: () => JSON.parse(new TextDecoder("utf-8").decode(t)),
              text: () => {
                throw Error("NotImplementedException");
              },
              headers: {
                get: () => {},
              },
            }),
          }),
          e.pendingDownloadInternal.response
        );
      }
      let t =
          e.loadRemote && J.config.remoteSources
            ? J.config.remoteSources
            : [""],
        n;
      for (let r of t) {
        r = r.trim();
        r === "./" && (r = "");
        let t = Jt(e, r);
        e.name === t
          ? J.diagnosticTracing && B(`Attempting to download '${t}'`)
          : J.diagnosticTracing &&
            B(`Attempting to download '${t}' for ${e.name}`);
        try {
          e.resolvedUrl = t;
          let r = Xt(e);
          if (
            ((e.pendingDownloadInternal = r),
            (n = await r.response),
            !n || !n.ok)
          )
            continue;
          return n;
        } catch (e) {
          n ||= {
            ok: false,
            url: t,
            status: 0,
            statusText: "" + e,
          };
          continue;
        }
      }
      let r =
        e.isOptional ||
        (e.name.match(/\.pdb$/) && J.config.ignorePdbLoadErrors);
      if ((n || H(false, `Response undefined ${e.name}`), !r)) {
        let t = Error(
          `download '${n.url}' for ${e.name} failed ${n.status} ${n.statusText}`,
        );
        throw ((t.status = n.status), t);
      }
      _t(
        `optional download '${n.url}' for ${e.name} failed ${n.status} ${n.statusText}`,
      );
    })(e);
    return (
      t &&
        (Zn[e.behavior] ||
          ((e.buffer = await t.arrayBuffer()),
          ++J.actual_downloaded_assets_count)),
      e
    );
  } finally {
    if ((--Un, Hn && Un == J.maxParallelDownloads - 1)) {
      J.diagnosticTracing && B("Resuming more parallel downloads");
      let e = Hn;
      Hn = undefined;
      e.promise_control.resolve();
    }
  }
}
function Jt(e, t) {
  let n;
  return (
    t ?? H(false, `sourcePrefix must be provided for ${e.name}`),
    e.resolvedUrl
      ? (n = e.resolvedUrl)
      : ((n =
          t === ""
            ? e.behavior === "assembly" || e.behavior === "pdb"
              ? e.name
              : e.behavior === "resource" && e.culture && e.culture !== ""
                ? `${e.culture}/${e.name}`
                : e.name
            : t + e.name),
        (n = Yt(J.locateFile(n), e.behavior))),
    (n && typeof n == "string") ||
      H(false, "attemptUrl need to be path or url string"),
    n
  );
}
function Yt(e, t) {
  return (J.modulesUniqueQuery && Yn[t] && (e += J.modulesUniqueQuery), e);
}
function Xt(e) {
  try {
    e.resolvedUrl || H(false, "Request's resolvedUrl must be set");
    let t = (async function (e) {
        let t = await (async function (e) {
          let t = In;
          if (!t || e.noCache || !e.hash || e.hash.length === 0) return;
          let n = kt(e),
            r;
          Nn[n] = true;
          try {
            r = await t.match(n);
          } catch {}
          if (!r) return;
          let i = parseInt(r.headers.get("content-length") || "0");
          return (
            (Fn[e.name] = {
              responseBytes: i,
            }),
            r
          );
        })(e);
        return (
          t ||
            ((t = await (function (e) {
              let t = e.resolvedUrl;
              if (J.loadBootResource) {
                let n = Zt(e);
                if (n instanceof Promise) return n;
                typeof n == "string" && (t = n);
              }
              let n = {};
              return (
                J.config.disableNoCacheFetch || (n.cache = "no-cache"),
                e.useCredentials
                  ? (n.credentials = "include")
                  : !J.config.disableIntegrityCheck &&
                    e.hash &&
                    (n.integrity = e.hash),
                J.fetch_like(t, n)
              );
            })(e)),
            (function (e, t) {
              let n = In;
              if (!n || e.noCache || !e.hash || e.hash.length === 0) return;
              let r = t.clone();
              setTimeout(() => {
                let t = kt(e);
                (async function (e, t, n, r) {
                  let i = await r.arrayBuffer(),
                    a = (function (e) {
                      if (typeof performance < "u")
                        return performance.getEntriesByName(e)[0];
                    })(r.url),
                    o = (a && a.encodedBodySize) || undefined;
                  Pn[t] = {
                    responseBytes: o,
                  };
                  let s = new Response(i, {
                    headers: {
                      "content-type": r.headers.get("content-type") || "",
                      "content-length": (
                        o ||
                        r.headers.get("content-length") ||
                        ""
                      ).toString(),
                    },
                  });
                  try {
                    await e.put(n, s);
                  } catch {}
                })(n, e.name, t, r);
              }, 0);
            })(e, t)),
          t
        );
      })(e),
      n = {
        name: e.name,
        url: e.resolvedUrl,
        response: t,
      };
    return (
      rr.add(e.name),
      n.response.then(() => {
        e.behavior == "assembly" && J.loadedAssemblies.push(e.name);
        nr++;
        J.onDownloadResourceProgress &&
          J.onDownloadResourceProgress(nr, rr.size);
      }),
      n
    );
  } catch (t) {
    let n = {
      ok: false,
      url: e.resolvedUrl,
      status: 500,
      statusText: "ERR29: " + t,
      arrayBuffer: () => {
        throw t;
      },
      json: () => {
        throw t;
      },
    };
    return {
      name: e.name,
      url: e.resolvedUrl,
      response: Promise.resolve(n),
    };
  }
}
function Zt(e) {
  if (J.loadBootResource) {
    let t = e.hash ?? "",
      n = e.resolvedUrl,
      r = ir[e.behavior];
    if (r) {
      let i = J.loadBootResource(r, e.name, n, t, e.behavior);
      return typeof i == "string" ? It(i) : i;
    }
  }
}
function Qt(e) {
  e.pendingDownloadInternal = null;
  e.pendingDownload = null;
  e.buffer = null;
  e.moduleExports = null;
}
function $t(e) {
  let t = e.lastIndexOf("/");
  return (t >= 0 && t++, e.substring(t));
}
async function en(e) {
  if (!e) return;
  let t = Object.keys(e);
  await Promise.all(
    t.map((item) =>
      (async function (e) {
        try {
          let t = Yt(J.locateFile(e), "js-module-library-initializer");
          J.diagnosticTracing && B(`Attempting to import '${t}' for ${e}`);
          let n = await i(() => import(t), [], import.meta.url);
          J.libraryInitializers.push({
            scriptName: e,
            exports: n,
          });
        } catch (t) {
          yt(`Failed to import library initializer '${e}': ${t}`);
        }
      })(item),
    ),
  );
}
async function tn(e, t) {
  if (!J.libraryInitializers) return;
  let n = [];
  for (let r = 0; r < J.libraryInitializers.length; r++) {
    let i = J.libraryInitializers[r];
    i.exports[e] && n.push(nn(i.scriptName, e, () => i.exports[e](...t)));
  }
  await Promise.all(n);
}
async function nn(e, t, n) {
  try {
    await n();
  } catch (n) {
    throw (
      yt(`Failed to invoke '${t}' on library initializer '${e}': ${n}`),
      U(1, n),
      n
    );
  }
}
function V(e, t) {
  if (e === t) return e;
  let n = {
    ...t,
  };
  return (
    n.assets !== undefined &&
      n.assets !== e.assets &&
      (n.assets = [...(e.assets || []), ...(n.assets || [])]),
    n.resources !== undefined &&
      (n.resources = an(
        e.resources || {
          assembly: {},
          jsModuleNative: {},
          jsModuleRuntime: {},
          wasmNative: {},
        },
        n.resources,
      )),
    n.environmentVariables !== undefined &&
      (n.environmentVariables = {
        ...(e.environmentVariables || {}),
        ...(n.environmentVariables || {}),
      }),
    n.runtimeOptions !== undefined &&
      n.runtimeOptions !== e.runtimeOptions &&
      (n.runtimeOptions = [
        ...(e.runtimeOptions || []),
        ...(n.runtimeOptions || []),
      ]),
    Object.assign(e, n)
  );
}
function rn(e, t) {
  if (e === t) return e;
  let n = {
    ...t,
  };
  return (
    (n.config &&= ((e.config ||= {}), V(e.config, n.config))),
    Object.assign(e, n)
  );
}
function an(e, t) {
  if (e === t) return e;
  let n = {
    ...t,
  };
  return (
    n.assembly !== undefined &&
      (n.assembly = {
        ...(e.assembly || {}),
        ...(n.assembly || {}),
      }),
    n.lazyAssembly !== undefined &&
      (n.lazyAssembly = {
        ...(e.lazyAssembly || {}),
        ...(n.lazyAssembly || {}),
      }),
    n.pdb !== undefined &&
      (n.pdb = {
        ...(e.pdb || {}),
        ...(n.pdb || {}),
      }),
    n.jsModuleWorker !== undefined &&
      (n.jsModuleWorker = {
        ...(e.jsModuleWorker || {}),
        ...(n.jsModuleWorker || {}),
      }),
    n.jsModuleNative !== undefined &&
      (n.jsModuleNative = {
        ...(e.jsModuleNative || {}),
        ...(n.jsModuleNative || {}),
      }),
    n.jsModuleGlobalization !== undefined &&
      (n.jsModuleGlobalization = {
        ...(e.jsModuleGlobalization || {}),
        ...(n.jsModuleGlobalization || {}),
      }),
    n.jsModuleRuntime !== undefined &&
      (n.jsModuleRuntime = {
        ...(e.jsModuleRuntime || {}),
        ...(n.jsModuleRuntime || {}),
      }),
    n.wasmSymbols !== undefined &&
      (n.wasmSymbols = {
        ...(e.wasmSymbols || {}),
        ...(n.wasmSymbols || {}),
      }),
    n.wasmNative !== undefined &&
      (n.wasmNative = {
        ...(e.wasmNative || {}),
        ...(n.wasmNative || {}),
      }),
    n.icu !== undefined &&
      (n.icu = {
        ...(e.icu || {}),
        ...(n.icu || {}),
      }),
    n.satelliteResources !== undefined &&
      (n.satelliteResources = on(
        e.satelliteResources || {},
        n.satelliteResources || {},
      )),
    n.modulesAfterConfigLoaded !== undefined &&
      (n.modulesAfterConfigLoaded = {
        ...(e.modulesAfterConfigLoaded || {}),
        ...(n.modulesAfterConfigLoaded || {}),
      }),
    n.modulesAfterRuntimeReady !== undefined &&
      (n.modulesAfterRuntimeReady = {
        ...(e.modulesAfterRuntimeReady || {}),
        ...(n.modulesAfterRuntimeReady || {}),
      }),
    n.extensions !== undefined &&
      (n.extensions = {
        ...(e.extensions || {}),
        ...(n.extensions || {}),
      }),
    n.vfs !== undefined && (n.vfs = on(e.vfs || {}, n.vfs || {})),
    Object.assign(e, n)
  );
}
function on(e, t) {
  if (e === t) return e;
  for (let n in t)
    e[n] = {
      ...e[n],
      ...t[n],
    };
  return e;
}
function sn() {
  let e = J.config;
  if (
    ((e.environmentVariables = e.environmentVariables || {}),
    (e.runtimeOptions = e.runtimeOptions || []),
    (e.resources = e.resources || {
      assembly: {},
      jsModuleNative: {},
      jsModuleGlobalization: {},
      jsModuleWorker: {},
      jsModuleRuntime: {},
      wasmNative: {},
      vfs: {},
      satelliteResources: {},
    }),
    e.assets)
  ) {
    J.diagnosticTracing &&
      B("config.assets is deprecated, use config.resources instead");
    for (let t of e.assets) {
      let n = {};
      n[t.name] = t.hash || "";
      let r = {};
      switch (t.behavior) {
        case "assembly":
          r.assembly = n;
          break;
        case "pdb":
          r.pdb = n;
          break;
        case "resource":
          r.satelliteResources = {};
          r.satelliteResources[t.culture] = n;
          break;
        case "icu":
          r.icu = n;
          break;
        case "symbols":
          r.wasmSymbols = n;
          break;
        case "vfs":
          r.vfs = {};
          r.vfs[t.virtualPath] = n;
          break;
        case "dotnetwasm":
          r.wasmNative = n;
          break;
        case "js-module-threads":
          r.jsModuleWorker = n;
          break;
        case "js-module-globalization":
          r.jsModuleGlobalization = n;
          break;
        case "js-module-runtime":
          r.jsModuleRuntime = n;
          break;
        case "js-module-native":
          r.jsModuleNative = n;
          break;
        case "js-module-dotnet":
          break;
        default:
          throw Error(`Unexpected behavior ${t.behavior} of asset ${t.name}`);
      }
      an(e.resources, r);
    }
  }
  e.debugLevel === undefined && ar === "Debug" && (e.debugLevel = -1);
  e.cachedResourcesPurgeDelay === undefined &&
    (e.cachedResourcesPurgeDelay = 1e4);
  e.applicationCulture &&
    (e.environmentVariables.LANG = `${e.applicationCulture}.UTF-8`);
  q.diagnosticTracing = J.diagnosticTracing = !!e.diagnosticTracing;
  q.waitForDebugger = e.waitForDebugger;
  q.enablePerfMeasure =
    !!e.browserProfilerOptions &&
    globalThis.performance &&
    typeof globalThis.performance.measure == "function";
  J.maxParallelDownloads = e.maxParallelDownloads || J.maxParallelDownloads;
  J.enableDownloadRetry =
    e.enableDownloadRetry === undefined
      ? J.enableDownloadRetry
      : e.enableDownloadRetry;
}
async function cn(e) {
  if (or) return void (await J.afterConfigLoaded.promise);
  let t;
  try {
    if (
      (e.configSrc ||
        (J.config &&
          Object.keys(J.config).length !== 0 &&
          (J.config.assets || J.config.resources)) ||
        (e.configSrc = "./blazor.boot.json"),
      (t = e.configSrc),
      (or = true),
      t &&
        (J.diagnosticTracing && B("mono_wasm_load_config"),
        await (async function (e) {
          let t = J.locateFile(e.configSrc),
            n =
              J.loadBootResource === undefined
                ? a(t)
                : J.loadBootResource(
                    "manifest",
                    "blazor.boot.json",
                    t,
                    "",
                    "manifest",
                  ),
            r = n
              ? typeof n == "string"
                ? await a(It(n))
                : await n
              : await a(Yt(t, "manifest"));
          let i = await (async function (e) {
            let t = J.config,
              n = await e.json();
            t.applicationEnvironment ||
              (n.applicationEnvironment =
                e.headers.get("Blazor-Environment") ||
                e.headers.get("DotNet-Environment") ||
                "Production");
            n.environmentVariables ||= {};
            let r = e.headers.get("DOTNET-MODIFIABLE-ASSEMBLIES");
            r && (n.environmentVariables.DOTNET_MODIFIABLE_ASSEMBLIES = r);
            let i = e.headers.get("ASPNETCORE-BROWSER-TOOLS");
            return (
              i && (n.environmentVariables.__ASPNETCORE_BROWSER_TOOLS = i),
              n
            );
          })(r);
          function a(e) {
            return J.fetch_like(e, {
              method: "GET",
              credentials: "include",
              cache: "no-cache",
            });
          }
          V(J.config, i);
        })(e)),
      sn(),
      await en(J.config.resources?.modulesAfterConfigLoaded),
      await tn("onRuntimeConfigLoaded", [J.config]),
      e.onConfigLoaded)
    )
      try {
        await e.onConfigLoaded(J.config, fr);
        sn();
      } catch (e) {
        throw (bt("onConfigLoaded() failed", e), e);
      }
    sn();
    J.afterConfigLoaded.promise_control.resolve(J.config);
  } catch (n) {
    let r = `Failed to load config file ${t} ${n} ${n?.stack}`;
    throw (
      (J.config = e.config =
        Object.assign(J.config, {
          message: r,
          error: n,
          isError: true,
        })),
      U(1, Error(r)),
      n
    );
  }
}
function H(e, t) {
  if (e) return;
  let n = "Assert failed: " + (typeof t == "function" ? t() : t),
    r = Error(n);
  bt(n, r);
  q.nativeAbort(r);
}
function ln() {
  return J.exitCode !== undefined;
}
function un() {
  return q.runtimeReady && !ln();
}
function dn() {
  ln() &&
    H(
      false,
      `.NET runtime already exited with ${J.exitCode} ${J.exitReason}. You can use runtime.runMain() which doesn't exit the runtime.`,
    );
  q.runtimeReady ||
    H(
      false,
      ".NET runtime didn't start yet. Please call dotnet.create() first.",
    );
}
function fn() {
  K &&
    (globalThis.addEventListener("unhandledrejection", gn),
    globalThis.addEventListener("error", _n));
}
function pn(e) {
  _r && _r(e);
  U(e, J.exitReason);
}
function mn(e) {
  gr && gr(e || J.exitReason);
  U(1, e || J.exitReason);
}
function U(e, n) {
  var r, a;
  let o = n && typeof n == "object";
  e = o && typeof n.status == "number" ? n.status : e === undefined ? -1 : e;
  let s = o && typeof n.message == "string" ? n.message : "" + n;
  (n = o
    ? n
    : q.ExitStatus
      ? (function (e, t) {
          let n = new q.ExitStatus(e);
          return ((n.message = t), (n.toString = () => t), n);
        })(e, s)
      : Error("Exit with code " + e + " " + s)).status = e;
  n.message ||= s;
  let c = "" + (n.stack || Error().stack);
  try {
    Object.defineProperty(n, "stack", {
      get: () => c,
    });
  } catch {}
  let l = !!n.silent;
  if (((n.silent = true), ln()))
    J.diagnosticTracing && B("mono_exit called after exit");
  else {
    try {
      X.onAbort == mn && (X.onAbort = gr);
      X.onExit == pn && (X.onExit = _r);
      K &&
        (globalThis.removeEventListener("unhandledrejection", gn),
        globalThis.removeEventListener("error", _n));
      q.runtimeReady
        ? (q.jiterpreter_dump_stats && q.jiterpreter_dump_stats(false),
          e === 0 &&
            (r = J.config) != null &&
            r.interopCleanupOnExit &&
            q.forceDisposeProxies(true, true),
          Cn &&
            e !== 0 &&
            ((a = J.config) == null || a.dumpThreadsOnNonZeroExit))
        : (J.diagnosticTracing && B(`abort_startup, reason: ${n}`),
          (function (e) {
            J.allDownloadsQueued.promise_control.reject(e);
            J.allDownloadsFinished.promise_control.reject(e);
            J.afterConfigLoaded.promise_control.reject(e);
            J.wasmCompilePromise.promise_control.reject(e);
            J.runtimeModuleLoaded.promise_control.reject(e);
            q.dotnetReady &&
              (q.dotnetReady.promise_control.reject(e),
              q.afterInstantiateWasm.promise_control.reject(e),
              q.beforePreInit.promise_control.reject(e),
              q.afterPreInit.promise_control.reject(e),
              q.afterPreRun.promise_control.reject(e),
              q.beforeOnRuntimeInitialized.promise_control.reject(e),
              q.afterOnRuntimeInitialized.promise_control.reject(e),
              q.afterPostRun.promise_control.reject(e));
          })(n));
    } catch (e) {
      yt("mono_exit A failed", e);
    }
    try {
      l ||
        ((function (e, t) {
          if (e !== 0 && t) {
            let e = q.ExitStatus && t instanceof q.ExitStatus ? B : bt;
            typeof t == "string"
              ? e(t)
              : (t.stack === undefined && (t.stack = Error().stack + ""),
                t.message
                  ? e(
                      q.stringify_as_error_with_stack
                        ? q.stringify_as_error_with_stack(
                            t.message + "\n" + t.stack,
                          )
                        : t.message + "\n" + t.stack,
                    )
                  : e(JSON.stringify(t)));
          }
          !lr &&
            J.config &&
            (J.config.logExitCode
              ? J.config.forwardConsoleLogsToWS
                ? Ct("WASM EXIT " + e)
                : vt("WASM EXIT " + e)
              : J.config.forwardConsoleLogsToWS && Ct());
        })(e, n),
        (function (e) {
          if (
            K &&
            !lr &&
            J.config &&
            J.config.appendElementOnExit &&
            document
          ) {
            let t = document.createElement("label");
            t.id = "tests_done";
            e !== 0 && (t.style.background = "red");
            t.innerHTML = "" + e;
            document.body.appendChild(t);
          }
        })(e));
    } catch (e) {
      yt("mono_exit B failed", e);
    }
    J.exitCode = e;
    J.exitReason ||= n;
    !lr && q.runtimeReady && X.runtimeKeepalivePop();
  }
  if (J.config && J.config.asyncFlushOnExit && e === 0)
    throw (
      (async () => {
        try {
          await (async function () {
            try {
              let e = await i(
                  () =>
                    import("../runtime/node-external-browser-stub").then(
                      (value) => t(value.default),
                    ),
                  __vite__mapDeps([0, 1]),
                  import.meta.url,
                ),
                n = (e) =>
                  new Promise((t, n) => {
                    e.on("error", n);
                    e.end("", "utf8", t);
                  }),
                r = n(e.stderr),
                a = n(e.stdout),
                o,
                s = new Promise((e) => {
                  o = setTimeout(() => e("timeout"), 1e3);
                });
              await Promise.race([Promise.all([a, r]), s]);
              clearTimeout(o);
            } catch (e) {
              bt(`flushing std* streams failed: ${e}`);
            }
          })();
        } finally {
          hn(e, n);
        }
      })(),
      n
    );
  hn(e, n);
}
function hn(e, t) {
  if (q.runtimeReady && q.nativeExit)
    try {
      q.nativeExit(e);
    } catch (e) {
      !q.ExitStatus ||
        e instanceof q.ExitStatus ||
        yt("set_exit_code_and_quit_now failed: " + e.toString());
    }
  if (e !== 0 || !K)
    throw (sr && pr.process ? pr.process.exit(e) : q.quit && q.quit(e, t), t);
}
function gn(e) {
  vn(e, e.reason, "rejection");
}
function _n(e) {
  vn(e, e.error, "error");
}
function vn(event, t, n) {
  event.preventDefault();
  try {
    t ||= Error("Unhandled " + n);
    t.stack === undefined && (t.stack = Error().stack);
    t.stack += "";
    t.silent || (bt("Unhandled error:", t), U(1, t));
  } catch {}
}
async function yn(e) {
  if (!xr) {
    if (
      ((xr = true),
      K &&
        J.config.forwardConsoleLogsToWS &&
        globalThis.WebSocket !== undefined &&
        St("main", globalThis.console, globalThis.location.origin),
      X || H(false, "Null moduleConfig"),
      J.config || H(false, "Null moduleConfig.config"),
      typeof e == "function")
    ) {
      let t = e(hr.api);
      if (t.ready) throw Error("Module.ready couldn't be redefined.");
      Object.assign(X, t);
      rn(X, t);
    } else {
      if (typeof e != "object")
        throw Error(
          "Can't use moduleFactory callback of createDotnetRuntime function.",
        );
      rn(X, e);
    }
    await (async function (e) {
      if (sr) {
        let e = await i(
          () =>
            import("../runtime/node-external-browser-stub").then((value) =>
              t(value.default),
            ),
          __vite__mapDeps([0, 1]),
          import.meta.url,
        );
        if (e.versions.node.split(".")[0] < 14)
          throw Error(
            `NodeJS at '${e.execPath}' has too low version '${e.versions.node}', please use at least 14. See also https://aka.ms/dotnet-wasm-features`,
          );
      }
      let n = import.meta.url,
        r = n.indexOf("?");
      var a;
      if (
        (r > 0 && (J.modulesUniqueQuery = n.substring(r)),
        (J.scriptUrl = n.replace(/\\/g, "/").replace(/[?#].*/, "")),
        (J.scriptDirectory =
          (a = J.scriptUrl).slice(0, a.lastIndexOf("/")) + "/"),
        (J.locateFile = (e) =>
          "URL" in globalThis && globalThis.URL !== zn
            ? new URL(e, J.scriptDirectory).toString()
            : Lt(e)
              ? e
              : J.scriptDirectory + e),
        (J.fetch_like = Ft),
        (J.out = console.log),
        (J.err = console.error),
        (J.onDownloadResourceProgress = e.onDownloadResourceProgress),
        K && globalThis.navigator)
      ) {
        let e = globalThis.navigator,
          t = e.userAgentData && e.userAgentData.brands;
        t && t.length > 0
          ? (J.isChromium = t.some(
              (item) =>
                item.brand === "Google Chrome" ||
                item.brand === "Microsoft Edge" ||
                item.brand === "Chromium",
            ))
          : e.userAgent &&
            ((J.isChromium = e.userAgent.includes("Chrome")),
            (J.isFirefox = e.userAgent.includes("Firefox")));
      }
      pr.require = sr
        ? await i(
            () =>
              import("../runtime/node-external-browser-stub")
                .then((value) => t(value.default))
                .then((value) => value.createRequire(import.meta.url)),
            __vite__mapDeps([0, 1]),
            import.meta.url,
          )
        : Promise.resolve(() => {
            throw Error("require not supported");
          });
      globalThis.URL === undefined && (globalThis.URL = zn);
    })(X);
  }
}
async function bn(e) {
  return (
    await yn(e),
    (gr = X.onAbort),
    (_r = X.onExit),
    (X.onAbort = mn),
    (X.onExit = pn),
    X.ENVIRONMENT_IS_PTHREAD
      ? (async function () {
          (function () {
            let e = new MessageChannel(),
              t = e.port1,
              n = e.port2;
            t.addEventListener(
              "message",
              (e) => {
                var r = JSON.parse(e.data.config),
                  i = JSON.parse(e.data.monoThreadInfo);
                br
                  ? J.diagnosticTracing && B("mono config already received")
                  : (V(J.config, r),
                    (q.monoThreadInfo = i),
                    sn(),
                    J.diagnosticTracing && B("mono config received"),
                    (br = true),
                    J.afterConfigLoaded.promise_control.resolve(J.config),
                    K &&
                      r.forwardConsoleLogsToWS &&
                      globalThis.WebSocket !== undefined &&
                      J.setup_proxy_console(
                        "worker-idle",
                        console,
                        globalThis.location.origin,
                      ));
                t.close();
                n.close();
              },
              {
                once: true,
              },
            );
            t.start();
            self.postMessage(
              {
                [Dn]: {
                  monoCmd: "preload",
                  port: n,
                },
              },
              [n],
            );
          })();
          await J.afterConfigLoaded.promise;
          (function () {
            let e = J.config;
            e.assets || H(false, "config.assets must be defined");
            for (let t of e.assets) {
              Bt(t);
              $n[t.behavior] && G.push(t);
            }
          })();
          setTimeout(async () => {
            try {
              await Ht();
            } catch (e) {
              U(1, e);
            }
          }, 0);
          let e = xn();
          return (await Sn(await Promise.all(e)), X);
        })()
      : (async function () {
          await cn(X);
          Ut();
          let e = xn();
          return (
            await At(),
            (async function () {
              try {
                let e = Vt("dotnetwasm");
                await Kt(e);
                (e &&
                  e.pendingDownloadInternal &&
                  e.pendingDownloadInternal.response) ||
                  H(false, "Can't load dotnet.native.wasm");
                let t = await e.pendingDownloadInternal.response,
                  n =
                    t.headers && t.headers.get
                      ? t.headers.get("Content-Type")
                      : undefined,
                  r;
                if (
                  typeof WebAssembly.compileStreaming == "function" &&
                  n === "application/wasm"
                )
                  r = await WebAssembly.compileStreaming(t);
                else {
                  K &&
                    n !== "application/wasm" &&
                    yt(
                      'WebAssembly resource does not have the expected content type "application/wasm", so falling back to slower ArrayBuffer instantiation.',
                    );
                  let e = await t.arrayBuffer();
                  J.diagnosticTracing && B("instantiate_wasm_module buffered");
                  r = ur
                    ? await Promise.resolve(new WebAssembly.Module(e))
                    : await WebAssembly.compile(e);
                }
                e.pendingDownloadInternal = null;
                e.pendingDownload = null;
                e.buffer = null;
                e.moduleExports = null;
                J.wasmCompilePromise.promise_control.resolve(r);
              } catch (e) {
                J.wasmCompilePromise.promise_control.reject(e);
              }
            })(),
            setTimeout(async () => {
              try {
                Nt();
                await Ht();
              } catch (e) {
                U(1, e);
              }
            }, 0),
            await Sn(await Promise.all(e)),
            await q.dotnetReady.promise,
            await en(J.config.resources?.modulesAfterRuntimeReady),
            await tn("onRuntimeReady", [hr.api]),
            fr
          );
        })()
  );
}
function xn() {
  let e = Vt("js-module-runtime"),
    t = Vt("js-module-native");
  return (
    (vr && yr) ||
      (typeof e.moduleExports == "object"
        ? (vr = e.moduleExports)
        : (J.diagnosticTracing &&
            B(`Attempting to import '${e.resolvedUrl}' for ${e.name}`),
          (vr = i(() => import(e.resolvedUrl), [], import.meta.url))),
      typeof t.moduleExports == "object"
        ? (yr = t.moduleExports)
        : (J.diagnosticTracing &&
            B(`Attempting to import '${t.resolvedUrl}' for ${t.name}`),
          (yr = i(() => import(t.resolvedUrl), [], import.meta.url)))),
    [vr, yr]
  );
}
async function Sn(e) {
  let {
      initializeExports,
      initializeReplacements,
      configureRuntimeStartup,
      configureEmscriptenStartup,
      configureWorkerStartup,
      setRuntimeGlobals,
      passEmscriptenInternals,
    } = e[0],
    { default: _default } = e[1];
  if (
    (setRuntimeGlobals(hr),
    initializeExports(hr),
    J.config.globalizationMode === "hybrid")
  ) {
    let { initHybrid } = await (async function () {
      let e,
        t = Vt("js-module-globalization");
      return (
        typeof t.moduleExports == "object"
          ? (e = t.moduleExports)
          : (B(`Attempting to import '${t.resolvedUrl}' for ${t.name}`),
            (e = i(() => import(t.resolvedUrl), [], import.meta.url))),
        await e
      );
    })();
    initHybrid(dr, q);
  }
  await configureRuntimeStartup(X);
  J.runtimeModuleLoaded.promise_control.resolve();
  _default(
    (e) => (
      Object.assign(X, {
        ready: e.ready,
        __dotnet_runtime: {
          initializeReplacements,
          configureEmscriptenStartup,
          configureWorkerStartup,
          passEmscriptenInternals,
        },
      }),
      X
    ),
  ).catch((error) => {
    throw error.message && error.message.toLowerCase().includes("out of memory")
      ? Error(
          ".NET runtime has failed to start, because too much memory was requested. Please decrease the memory by adjusting EmccMaximumHeapSize. See also https://aka.ms/dotnet-wasm-features",
        )
      : error;
  });
}
var Cn,
  wn,
  Tn,
  En,
  Dn,
  On,
  kn,
  W,
  An,
  jn,
  Mn,
  Nn,
  Pn,
  Fn,
  In,
  Ln,
  Rn,
  zn,
  Bn,
  Vn,
  Hn,
  Un,
  Wn,
  G,
  Gn,
  Kn,
  qn,
  Jn,
  Yn,
  Xn,
  Zn,
  Qn,
  $n,
  er,
  tr,
  nr,
  rr,
  ir,
  ar,
  or,
  sr,
  cr,
  lr,
  K,
  ur,
  q,
  dr,
  J,
  fr,
  pr,
  mr,
  Y,
  X,
  hr,
  gr,
  _r,
  vr,
  yr,
  br,
  xr,
  Sr,
  Cr = e(() => {
    D();
    Cn = false;
    wn = async () =>
      WebAssembly.validate(
        new Uint8Array([
          0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 8, 1,
          6, 0, 6, 64, 25, 11, 11,
        ]),
      );
    Tn = async () =>
      WebAssembly.validate(
        new Uint8Array([
          0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10,
          10, 1, 8, 0, 65, 0, 253, 15, 253, 98, 11,
        ]),
      );
    En = Symbol.for("wasm promise_control");
    Dn = "__mono_message__";
    On = ["debug", "log", "trace", "warn", "info", "error"];
    kn = "MONO_WASM: ";
    new Date().valueOf();
    Nn = {};
    Pn = {};
    Fn = {};
    zn = class {
      constructor(e) {
        this.url = e;
      }
      toString() {
        return this.url;
      }
    };
    Bn = /^[a-zA-Z][a-zA-Z\d+\-.]*?:\/\//;
    Vn = /[a-zA-Z]:[\\/]/;
    Un = 0;
    Wn = [];
    G = [];
    Gn = new Map();
    Kn = {
      "js-module-threads": true,
      "js-module-globalization": true,
      "js-module-runtime": true,
      "js-module-dotnet": true,
      "js-module-native": true,
    };
    qn = {
      ...Kn,
      "js-module-library-initializer": true,
    };
    Jn = {
      ...Kn,
      dotnetwasm: true,
      heap: true,
      manifest: true,
    };
    Yn = {
      ...qn,
      manifest: true,
    };
    Xn = {
      ...qn,
      dotnetwasm: true,
    };
    Zn = {
      dotnetwasm: true,
      symbols: true,
      "segmentation-rules": true,
    };
    Qn = {
      ...qn,
      dotnetwasm: true,
      symbols: true,
      "segmentation-rules": true,
    };
    $n = {
      symbols: true,
      "segmentation-rules": true,
    };
    er = false;
    tr = false;
    nr = 0;
    rr = new Set();
    ir = {
      resource: "assembly",
      assembly: "assembly",
      pdb: "pdb",
      icu: "globalization",
      vfs: "configuration",
      manifest: "manifest",
      dotnetwasm: "dotnetwasm",
      "js-module-dotnet": "dotnetjs",
      "js-module-native": "dotnetjs",
      "js-module-runtime": "dotnetjs",
      "js-module-threads": "dotnetjs",
    };
    ar = "Release";
    or = false;
    typeof importScripts != "function" ||
      globalThis.onmessage ||
      (globalThis.dotnetSidecar = true);
    sr =
      typeof process == "object" &&
      typeof process.versions == "object" &&
      typeof process.versions.node == "string";
    cr = typeof importScripts == "function";
    lr = cr && !(cr && typeof dotnetSidecar < "u");
    K = typeof window == "object" || (cr && !sr);
    ur = !K && !sr;
    q = {};
    dr = {};
    J = {};
    fr = {};
    pr = {};
    mr = false;
    Y = {};
    X = {
      config: Y,
    };
    hr = {
      mono: {},
      binding: {},
      internal: pr,
      module: X,
      loaderHelpers: J,
      runtimeHelpers: q,
      globalizationHelpers: dr,
      api: fr,
    };
    (function (e) {
      if (mr) throw Error("Loader module already loaded");
      mr = true;
      q = e.runtimeHelpers;
      dr = e.globalizationHelpers;
      J = e.loaderHelpers;
      fr = e.api;
      pr = e.internal;
      Object.assign(fr, {
        INTERNAL: pr,
        invokeLibraryInitializers: tn,
      });
      Object.assign(e.module, {
        config: V(Y, {
          environmentVariables: {},
        }),
      });
      let t = {
          mono_wasm_bindings_is_ready: false,
          config: e.module.config,
          diagnosticTracing: false,
          nativeAbort: (e) => {
            throw e || Error("abort");
          },
          nativeExit: (e) => {
            throw Error("exit:" + e);
          },
        },
        n = {
          gitHash: "f2c8152eed158e72950025393fde498c90a57a6b",
          config: e.module.config,
          diagnosticTracing: false,
          maxParallelDownloads: 16,
          enableDownloadRetry: true,
          _loaded_files: [],
          loadedFiles: [],
          loadedAssemblies: [],
          libraryInitializers: [],
          workerNextNumber: 1,
          actual_downloaded_assets_count: 0,
          actual_instantiated_assets_count: 0,
          expected_downloaded_assets_count: 0,
          expected_instantiated_assets_count: 0,
          afterConfigLoaded: pt(),
          allDownloadsQueued: pt(),
          allDownloadsFinished: pt(),
          wasmCompilePromise: pt(),
          runtimeModuleLoaded: pt(),
          loadingWorkers: pt(),
          is_exited: ln,
          is_runtime_running: un,
          assert_runtime_running: dn,
          mono_exit: U,
          createPromiseController: pt,
          getPromiseController: mt,
          assertIsControllablePromise: ht,
          mono_download_assets: Ht,
          resolve_single_asset_path: Vt,
          setup_proxy_console: St,
          set_thread_prefix: gt,
          logDownloadStatsToConsole: Dt,
          purgeUnusedCacheEntriesAsync: Ot,
          installUnhandledErrorHandler: fn,
          retrieve_asset_download: Gt,
          invokeLibraryInitializers: tn,
          exceptions: wn,
          simd: Tn,
        };
      Object.assign(q, t);
      Object.assign(J, n);
    })(hr);
    br = false;
    xr = false;
    Sr = new (class {
      withModuleConfig(e) {
        try {
          return (rn(X, e), this);
        } catch (e) {
          throw (U(1, e), e);
        }
      }
      withOnConfigLoaded(e) {
        try {
          return (
            rn(X, {
              onConfigLoaded: e,
            }),
            this
          );
        } catch (e) {
          throw (U(1, e), e);
        }
      }
      withConsoleForwarding() {
        try {
          return (
            V(Y, {
              forwardConsoleLogsToWS: true,
            }),
            this
          );
        } catch (e) {
          throw (U(1, e), e);
        }
      }
      withExitOnUnhandledError() {
        try {
          return (
            V(Y, {
              exitOnUnhandledError: true,
            }),
            fn(),
            this
          );
        } catch (e) {
          throw (U(1, e), e);
        }
      }
      withAsyncFlushOnExit() {
        try {
          return (
            V(Y, {
              asyncFlushOnExit: true,
            }),
            this
          );
        } catch (e) {
          throw (U(1, e), e);
        }
      }
      withExitCodeLogging() {
        try {
          return (
            V(Y, {
              logExitCode: true,
            }),
            this
          );
        } catch (e) {
          throw (U(1, e), e);
        }
      }
      withElementOnExit() {
        try {
          return (
            V(Y, {
              appendElementOnExit: true,
            }),
            this
          );
        } catch (e) {
          throw (U(1, e), e);
        }
      }
      withInteropCleanupOnExit() {
        try {
          return (
            V(Y, {
              interopCleanupOnExit: true,
            }),
            this
          );
        } catch (e) {
          throw (U(1, e), e);
        }
      }
      withDumpThreadsOnNonZeroExit() {
        try {
          return (
            V(Y, {
              dumpThreadsOnNonZeroExit: true,
            }),
            this
          );
        } catch (e) {
          throw (U(1, e), e);
        }
      }
      withWaitingForDebugger(e) {
        try {
          return (
            V(Y, {
              waitForDebugger: e,
            }),
            this
          );
        } catch (e) {
          throw (U(1, e), e);
        }
      }
      withInterpreterPgo(e, t) {
        try {
          return (
            V(Y, {
              interpreterPgo: e,
              interpreterPgoSaveDelay: t,
            }),
            Y.runtimeOptions
              ? Y.runtimeOptions.push("--interp-pgo-recording")
              : (Y.runtimeOptions = ["--interp-pgo-recording"]),
            this
          );
        } catch (e) {
          throw (U(1, e), e);
        }
      }
      withConfig(e) {
        try {
          return (V(Y, e), this);
        } catch (e) {
          throw (U(1, e), e);
        }
      }
      withConfigSrc(e) {
        try {
          return (
            (e && typeof e == "string") || H(false, "must be file path or URL"),
            rn(X, {
              configSrc: e,
            }),
            this
          );
        } catch (e) {
          throw (U(1, e), e);
        }
      }
      withVirtualWorkingDirectory(e) {
        try {
          return (
            (e && typeof e == "string") || H(false, "must be directory path"),
            V(Y, {
              virtualWorkingDirectory: e,
            }),
            this
          );
        } catch (e) {
          throw (U(1, e), e);
        }
      }
      withEnvironmentVariable(e, t) {
        try {
          let n = {};
          return (
            (n[e] = t),
            V(Y, {
              environmentVariables: n,
            }),
            this
          );
        } catch (e) {
          throw (U(1, e), e);
        }
      }
      withEnvironmentVariables(e) {
        try {
          return (
            (e && typeof e == "object") ||
              H(false, "must be dictionary object"),
            V(Y, {
              environmentVariables: e,
            }),
            this
          );
        } catch (e) {
          throw (U(1, e), e);
        }
      }
      withDiagnosticTracing(e) {
        try {
          return (
            typeof e != "boolean" && H(false, "must be boolean"),
            V(Y, {
              diagnosticTracing: e,
            }),
            this
          );
        } catch (e) {
          throw (U(1, e), e);
        }
      }
      withDebugging(e) {
        try {
          return (
            (e != null && typeof e == "number") || H(false, "must be number"),
            V(Y, {
              debugLevel: e,
            }),
            this
          );
        } catch (e) {
          throw (U(1, e), e);
        }
      }
      withApplicationArguments(...e) {
        try {
          return (
            (e && Array.isArray(e)) || H(false, "must be array of strings"),
            V(Y, {
              applicationArguments: e,
            }),
            this
          );
        } catch (e) {
          throw (U(1, e), e);
        }
      }
      withRuntimeOptions(e) {
        try {
          return (
            (e && Array.isArray(e)) || H(false, "must be array of strings"),
            Y.runtimeOptions
              ? Y.runtimeOptions.push(...e)
              : (Y.runtimeOptions = e),
            this
          );
        } catch (e) {
          throw (U(1, e), e);
        }
      }
      withMainAssembly(e) {
        try {
          return (
            V(Y, {
              mainAssemblyName: e,
            }),
            this
          );
        } catch (e) {
          throw (U(1, e), e);
        }
      }
      withApplicationArgumentsFromQuery() {
        try {
          if (!globalThis.window)
            throw Error("Missing window to the query parameters from");
          if (globalThis.URLSearchParams === undefined)
            throw Error("URLSearchParams is supported");
          let e = new URLSearchParams(globalThis.window.location.search).getAll(
            "arg",
          );
          return this.withApplicationArguments(...e);
        } catch (e) {
          throw (U(1, e), e);
        }
      }
      withApplicationEnvironment(e) {
        try {
          return (
            V(Y, {
              applicationEnvironment: e,
            }),
            this
          );
        } catch (e) {
          throw (U(1, e), e);
        }
      }
      withApplicationCulture(e) {
        try {
          return (
            V(Y, {
              applicationCulture: e,
            }),
            this
          );
        } catch (e) {
          throw (U(1, e), e);
        }
      }
      withResourceLoader(e) {
        try {
          return ((J.loadBootResource = e), this);
        } catch (e) {
          throw (U(1, e), e);
        }
      }
      async download() {
        try {
          await (async function () {
            yn(X);
            await cn(X);
            Ut();
            await At();
            Nt();
            Ht();
            await J.allDownloadsFinished.promise;
          })();
        } catch (e) {
          throw (U(1, e), e);
        }
      }
      async create() {
        try {
          return (
            (this.instance ||= await (async function () {
              return (await bn(X), hr.api);
            })()),
            this.instance
          );
        } catch (e) {
          throw (U(1, e), e);
        }
      }
      async run() {
        try {
          return (
            X.config || H(false, "Null moduleConfig.config"),
            this.instance || (await this.create()),
            this.instance.runMainAndExit()
          );
        } catch (e) {
          throw (U(1, e), e);
        }
      }
    })();
    ur ||
      typeof globalThis.URL == "function" ||
      H(
        false,
        "This browser/engine doesn't support URL API. Please use a modern version. See also https://aka.ms/dotnet-wasm-features",
      );
    typeof globalThis.BigInt64Array != "function" &&
      H(
        false,
        "This browser/engine doesn't support BigInt64Array API. Please use a modern version. See also https://aka.ms/dotnet-wasm-features",
      );
  });
function wr() {
  return (
    (Er ??= Tr().catch((error) => {
      throw ((Er = null), error);
    })),
    Er
  );
}
async function Tr() {
  let e = await Sr.withConfig(Dr)
      .withResourceLoader((e, t, n, r) => {
        if (e === "dotnetjs") return n;
        let i = new URL(n, location.href);
        return i.origin === location.origin
          ? i.href
          : fetch(i.href, {
              credentials: "omit",
              integrity: r,
            });
      })
      .create(),
    t = e.getConfig().mainAssemblyName;
  if (!t) throw Error("Walnut reader assembly unavailable");
  return await e.getAssemblyExports(t);
}
var Er,
  Dr,
  Or = e(() => {
    ft();
    Cr();
    Er = null;
    Dr = {
      ...dt,
    };
  });
async function kr(e, t) {
  switch (t) {
    case "csv":
      return Ar(e);
    case "tsv":
      return Ar(e, "\t");
    case "docx":
      return jr(e);
    case "pptx":
      return Mr(e);
    case "xlsx":
      return Nr(e);
    case "ipynb":
      throw Error("Notebook preview should use NotebookPreviewPanel");
    case "pdf":
    case "tex":
      throw Error("PDF preview should use PdfPreviewPanel");
  }
}
async function Ar(e, t) {
  let { Workbook } = await i(
    async () => {
      let { Workbook: _Workbook } = await import("../utils/workbook");
      return {
        Workbook: _Workbook,
      };
    },
    __vite__mapDeps([
      2, 3, 1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
    ]),
    import.meta.url,
  );
  return {
    kind: "spreadsheet",
    proto: (
      await Workbook.fromCSV(
        new TextDecoder().decode(e),
        t == null
          ? undefined
          : {
              separator: t,
            },
      )
    ).toProto(),
  };
}
async function jr(e) {
  let [{ Document: t }, n] = await Promise.all([
    i(
      () => import("../vendor/document-schema-entry"),
      __vite__mapDeps([38, 39, 1, 6, 30]),
      import.meta.url,
    ),
    wr(),
  ]);
  return {
    kind: "document",
    proto: t.decode(n.DocxReader.ExtractDocxProto(e, false)),
  };
}
async function Mr(e) {
  let [{ Presentation: t }, n] = await Promise.all([
    i(
      () => import("../vendor/presentation-schema"),
      __vite__mapDeps([40, 6, 1]),
      import.meta.url,
    ),
    wr(),
  ]);
  return {
    kind: "presentation",
    proto: t.decode(n.PptxReader.ExtractSlidesProto(e, false)),
  };
}
async function Nr(e) {
  let [{ Workbook: t }, n] = await Promise.all([
    i(
      () => import("../vendor/spreadsheet-schema-entry"),
      __vite__mapDeps([41, 30, 1, 6]),
      import.meta.url,
    ),
    wr(),
  ]);
  return {
    kind: "spreadsheet",
    proto: t.decode(n.XlsxReader.ExtractXlsxProto(e, false)),
  };
}
var Pr = e(() => {
  Or();
  D();
});
export function Fr({
  artifactType,
  chromeMode = "default",
  hostId,
  importKind,
  path,
  tabId,
  title,
}) {
  let s = l(ee),
    c = u(s.value),
    d = nt(),
    f = ot(),
    p = Se(artifactType),
    m = p
      ? () => {
          if (s.value.routeKind === "local-thread")
            return j("ignore-open-file-change-events", {
              conversationId: s.value.conversationId,
              hostId,
              path,
            });
        }
      : undefined,
    h = importKind === "docx" && !f,
    g = Q.useRef(null),
    [_, v] = Q.useState(null),
    y = ie((e) => {
      g.current = e;
      e != null && tabId != null && fe(tabId);
    }),
    b = Wr({
      hostId,
      importKind,
      path,
    }),
    x = Q.useMemo(() => ["manual-artifact-preview", b], [b]),
    { data, isError, isLoading } = ne("read-file-metadata", {
      params: {
        hostId,
        path,
      },
      queryConfig: {
        enabled: d,
        ...(p
          ? {
              cacheKey: x,
              refetchOnMount: "always",
              refetchOnWindowFocus: false,
              staleTime: C.INFINITE,
            }
          : {}),
      },
    }),
    T =
      d &&
      data?.isFile === true &&
      (artifactType === "pdf" ||
        data.sizeBytes == null ||
        data.sizeBytes <= Zr),
    re = importKind === "tex",
    E = T && artifactType !== "pdf" && artifactType !== "notebook" && !h,
    {
      data: _data,
      isError: _isError,
      isLoading: _isLoading,
    } = ne(re ? "compile-latex-artifact" : "read-file-binary", {
      params: {
        hostId,
        path,
      },
      queryConfig: {
        enabled: T,
        ...(p
          ? {
              cacheKey: x,
              refetchOnMount: "always",
              refetchOnWindowFocus: false,
              staleTime: C.INFINITE,
            }
          : {}),
      },
    }),
    { isParsing, parseError, parsedArtifact, previewVersion } = Ir({
      cacheKey: b,
      contentsBase64: _data?.contentsBase64,
      hasBinaryResponse: _data != null,
      importKind,
      shouldParseArtifactPreview: E,
    }),
    F =
      artifactType === "pdf" && _data?.contentsBase64 != null
        ? `data:application/pdf;base64,${_data.contentsBase64}`
        : null,
    I = Q.useMemo(
      () =>
        !h || _data?.contentsBase64 == null ? null : Jr(_data.contentsBase64),
      [_data?.contentsBase64, h],
    ),
    L = Q.useMemo(() => (I == null ? null : Yr(I)), [I]),
    R = ie((e) => {
      if (e.artifactKind === "document") {
        let t = g.current;
        return h
          ? (t?.navigateToPage(e.pageNumber), t != null)
          : parsedArtifact?.kind === "document"
            ? (v({
                requestId: globalThis.crypto.randomUUID(),
                target: e,
              }),
              true)
            : false;
      }
      return e.artifactKind === "presentation"
        ? parsedArtifact?.kind !== "presentation" || e.slideNumber == null
          ? false
          : (v({
              requestId: globalThis.crypto.randomUUID(),
              target: e,
            }),
            true)
        : parsedArtifact?.kind !== "spreadsheet" || !("range" in e)
          ? false
          : (v({
              requestId: globalThis.crypto.randomUUID(),
              target: e,
            }),
            true);
    });
  Q.useEffect(() => {
    if (tabId != null) return me(tabId, R);
  }, [R, tabId]);
  let ae = h ? I != null : parsedArtifact != null;
  Q.useEffect(() => {
    tabId == null || !ae || fe(tabId);
  }, [ae, tabId]);
  let oe = Ve(importKind) ? (
      <Hr hostId={hostId} path={path} tabId={tabId} title={title} />
    ) : null,
    se = (
      <Lr
        artifactType={artifactType}
        hostId={hostId}
        importKind={importKind}
        path={path}
        queryCacheKey={x}
        tabId={tabId}
      />
    );
  return d ? (
    data == null ? (
      <Z isError={isError} isLoading={isLoading} />
    ) : data.isFile ? (
      artifactType !== "pdf" &&
      data.sizeBytes != null &&
      data.sizeBytes > Zr ? (
        <Ur
          chromeMode={chromeMode}
          hostId={hostId}
          path={path}
          sizeBytes={data.sizeBytes}
        />
      ) : artifactType === "pdf" ? (
        _isLoading ? (
          <Z isError={false} isLoading={true} />
        ) : _isError || F == null ? (
          importKind === "tex" ? (
            $.jsx(de, {
              hostId,
              onSelectFile: (e) => {
                pe(s, e, {
                  hostId,
                });
              },
              path,
            })
          ) : (
            <section className="flex h-full min-h-0 flex-col bg-token-side-bar-background">
              <ArtifactPreviewHeader
                artifactType="PDF"
                centerContent={null}
                hideMetadata={chromeMode === "standalone"}
                rightContent={
                  chromeMode === "default" ? (
                    <ArtifactPreviewDownloadButton
                      hostId={hostId}
                      path={path}
                      sizeBytes={data.sizeBytes}
                    />
                  ) : null
                }
                title={title}
              />
              {et("error")}
            </section>
          )
        ) : (
          $.jsx(zr, {
            refreshButton: se,
            children: (
              <Q.Suspense fallback={<Z isError={false} isLoading={true} />}>
                {$.jsx(si, {
                  chromeMode,
                  fileDataUrl: F,
                  headerRightContent: oe,
                  hostId,
                  onBeforeOpen: m,
                  path,
                  sizeBytes: data.sizeBytes,
                  tabId,
                  title,
                })}
              </Q.Suspense>
            ),
          })
        )
      ) : artifactType === "notebook" ? (
        _isLoading ? (
          <Z isError={false} isLoading={true} />
        ) : _isError || _data?.contentsBase64 == null ? (
          <Z isError={true} isLoading={false} />
        ) : (
          <Q.Suspense fallback={<Z isError={false} isLoading={true} />}>
            {$.jsx(
              oi,
              {
                contentsBase64: _data.contentsBase64,
                headerRightContent: oe,
                hostId,
                path,
                title,
              },
              `${path}:${_data.contentsBase64.length}`,
            )}
          </Q.Suspense>
        )
      ) : parseError || _isError ? (
        <Z isError={true} isLoading={false} />
      ) : h ? (
        _isLoading ? (
          <Z isError={false} isLoading={true} />
        ) : _data?.contentsBase64 == null ? (
          <Z isError={true} isLoading={false} />
        ) : I == null ? (
          <Z isError={false} isLoading={true} />
        ) : (
          $.jsx(zr, {
            refreshButton: se,
            children: (
              <Q.Suspense fallback={<Z isError={false} isLoading={true} />}>
                {$.jsx(
                  ai,
                  {
                    ref: y,
                    bytes: I,
                    chromeMode,
                    hostId,
                    onBeforeOpen: m,
                    path,
                    tabId,
                    title,
                  },
                  `${path}:${L ?? 0}`,
                )}
              </Q.Suspense>
            ),
          })
        )
      ) : isParsing || _isLoading || parsedArtifact == null ? (
        <Z isError={false} isLoading={true} />
      ) : (
        <Rr
          key={`${path}:${previewVersion}`}
          chromeMode={chromeMode}
          headerRightContent={oe}
          hostId={hostId}
          importKind={importKind}
          navigationRequest={_}
          onBeforeOpen={m}
          path={path}
          parsedArtifact={parsedArtifact}
          refreshButton={se}
          tabId={tabId}
          threadId={c}
          title={title}
        />
      )
    ) : (
      <Z isError={true} isLoading={false} />
    )
  ) : (
    <Z isError={false} isLoading={true} />
  );
}
function Ir(e) {
  let {
      cacheKey,
      contentsBase64,
      hasBinaryResponse,
      importKind,
      shouldParseArtifactPreview,
    } = e,
    s = Q.useRef(null),
    [c, l] = Q.useState(false),
    [u, d] = Q.useState(null),
    [f, p] = Q.useState(null),
    [m, h] = Q.useState(0),
    g = u != null,
    _,
    ee;
  _ = () => {
    if (!shouldParseArtifactPreview) {
      s.current = null;
      d(null);
      p(null);
      l(false);
      return;
    }
    if (!contentsBase64) {
      s.current = null;
      d(null);
      p(null);
      l(hasBinaryResponse);
      return;
    }
    let e = Jr(contentsBase64),
      t = Yr(e),
      c = Gr(cacheKey, e);
    if (c != null) {
      qr(t, s, h);
      d(null);
      p(c);
      l(false);
      return;
    }
    l(false);
    d({
      cacheKey,
      contentsChecksum: t,
      contentsBytes: e,
      importKind,
    });
  };
  ee = [
    cacheKey,
    contentsBase64,
    hasBinaryResponse,
    importKind,
    shouldParseArtifactPreview,
  ];
  Q.useEffect(_, ee);
  let v, y;
  v = () => {
    if (u == null) return;
    let e = false;
    return (
      kr(u.contentsBytes, u.importKind)
        .then((value) => {
          e ||
            (Kr(u.cacheKey, u.contentsBytes, value),
            qr(u.contentsChecksum, s, h),
            p(value),
            l(false),
            d(null));
        })
        .catch(() => {
          e || (p(null), l(true), d(null));
        }),
      () => {
        e = true;
      }
    );
  };
  y = [u];
  Q.useEffect(v, y);
  return {
    isParsing: g,
    parseError: c,
    parsedArtifact: f,
    previewVersion: m,
  };
}
function Lr(e) {
  let { artifactType, hostId, importKind, path, queryCacheKey, tabId } = e,
    d = l(ee),
    f = R(),
    p = O(),
    m = _e({
      hostId,
      path,
    });
  let h = b(we, m),
    v = () =>
      xe({
        cacheKey: queryCacheKey,
        openFiles: [
          {
            hostId,
            path,
          },
        ],
        queryClient: f,
        throwOnError: true,
      });
  let y, x;
  y = () => {
    ve(d, {
      hostId,
      path,
    });
  };
  x = () => {
    ge(d, {
      hostId,
      path,
    });
  };
  let S = {
    mutationFn: v,
    onError: y,
    onSuccess: x,
  };
  let C = _(S);
  if (!h) return null;
  let w = p.formatMessage(ei.refreshForLatest);
  let te = C.isPending,
    T = () => {
      Ue(d, {
        artifactTabId: tabId,
        artifactType,
        importKind,
        threadId: u(d.value),
      });
      C.mutate();
    };
  let ne = C.isPending ? "animate-spin" : null,
    re = o("size-3.5", ne);
  let E = $.jsx(ze, {
    className: re,
  });
  let D = (
    <span>
      <L {...ei.refreshForLatest} />
    </span>
  );
  let k = (
    <button
      type="button"
      aria-label={w}
      className="flex h-full cursor-interaction items-center gap-1.5 px-2"
      disabled={te}
      onClick={T}
    >
      {E}
      {D}
    </button>
  );
  let A = <div className="h-full w-px bg-white/20" />;
  let j = p.formatMessage({
    id: "artifactTab.dismissRefreshForLatest",
    defaultMessage: "Dismiss refresh prompt",
    description:
      "Accessible label for dismissing the artifact preview refresh prompt",
  });
  let M = () => {
    ge(d, {
      hostId,
      path,
    });
  };
  let N = $.jsx(g, {
    className: "size-3.5",
  });
  let P = (
    <button
      type="button"
      aria-label={j}
      className="flex h-full w-6 cursor-interaction items-center justify-center"
      disabled={C.isPending}
      onClick={M}
    >
      {N}
    </button>
  );
  return (
    <div
      className="flex h-7 items-center overflow-hidden rounded-full bg-token-charts-blue text-xs font-medium text-white shadow-md"
      data-testid="artifact-refresh-for-latest"
    >
      {k}
      {A}
      {P}
    </div>
  );
}
function Rr(e) {
  let {
      chromeMode = "default",
      disableAnnotations = false,
      disableFileActions = false,
      headerRightContent,
      hostId,
      importKind,
      navigationRequest,
      onBeforeOpen,
      path,
      parsedArtifact,
      refreshButton,
      tabId: _,
      threadId,
      title,
    } = e,
    w = l(ee),
    te = u(w.value);
  let T = te,
    ne = <Z isError={false} isLoading={true} />;
  let E = ne,
    D =
      chromeMode === "default" && !disableFileActions ? (
        <>
          <ArtifactPreviewDownloadButton hostId={hostId} path={path} />
          <ArtifactOpenButton
            analyticsContext={{
              threadId: T ?? null,
              turnId: null,
              inputMessageId: null,
              messageId: null,
            }}
            hostId={hostId}
            onBeforeOpen={onBeforeOpen}
            path={path}
            showLabel={true}
          />
        </>
      ) : null;
  let O = (
    <>
      {D}
      {headerRightContent}
    </>
  );
  let A = O,
    j =
      chromeMode === "default" && !disableFileActions ? (
        <>
          <ArtifactPreviewDownloadButton hostId={hostId} path={path} />
          <ArtifactOpenButton
            analyticsContext={{
              threadId: T ?? null,
              turnId: null,
              inputMessageId: null,
              messageId: null,
            }}
            hostId={hostId}
            onBeforeOpen={onBeforeOpen}
            path={path}
          />
        </>
      ) : null;
  let M = (
    <>
      {j}
      {headerRightContent}
    </>
  );
  let N = M,
    P = p(Ee),
    F = p(Ce),
    I =
      T ??
      re({
        entrypoint: "home",
      });
  let L = I,
    R = b(ae, L),
    oe = (e) => {
      se(w, L, e);
    };
  let z = ie(oe),
    ce = Q.useRef(null),
    le = Q.useRef(null),
    ue = Xe(R, path);
  let de = ue,
    fe = Br(parsedArtifact);
  let pe = fe,
    me = {
      artifactTabId: _,
      artifactType: pe,
      importKind,
      threadId,
    };
  let he = me,
    ge = Qe(de);
  let _e = ge,
    ve,
    ye;
  ve = () => {
    let e = le.current;
    if (((le.current = R), e != null))
      for (let t of Ye({
        previousComments: e,
        currentComments: R,
        path,
      }))
        ce.current?.dismissAnnotation(t);
  };
  ye = [R, path];
  Q.useEffect(ve, ye);
  let be, xe;
  be = () => () => {
    z((e) => Ze(e, path));
  };
  xe = [path, z];
  Q.useEffect(be, xe);
  let Se, we, Te;
  Se = (e, t) => {
    let { annotationMode } = t;
    Ke(w, he, {
      annotationModeEnabled: annotationMode,
      startSource: e,
    });
  };
  we = () => {
    Ge(w, he);
  };
  Te = (event, t, n, r) => {
    let { annotationMode } = r;
    We(w, he, {
      annotationModeEnabled: annotationMode,
      annotationTargetKind: event.target.type,
      submitMode: t,
      submitSource: n,
    });
  };
  let Oe = (e) => {
    let t = $e({
      line: _e,
      path,
      payload: e,
      title,
    });
    t != null && (z((e) => [...e, t]), focusComposerInput());
  };
  let Ae = (e) => {
    let t = $e({
      line: _e,
      path,
      payload: e,
      title,
    });
    t != null &&
      k.dispatchHostMessage({
        type: "artifact-direct-comment",
        body: e.body,
        comment: t,
        conversationId: L,
        sessionId: e.annotationId,
      });
  };
  let je = (e) => {
    z((t) => {
      let n = false,
        r = t.map((item) => {
          if (
            item.localArtifactAnnotationContext?.path !== path ||
            item.localArtifactAnnotationContext.annotationId !== e.annotationId
          )
            return item;
          let r = $e({
            line: item.position.line,
            path,
            payload: e,
            title,
          });
          return r == null ? item : ((n = true), r);
        });
      return n ? r : t;
    });
  };
  let Me = (e) => {
    z((t) => {
      let n = t.filter(
        (item) =>
          item.localArtifactAnnotationContext?.path !== path ||
          item.localArtifactAnnotationContext.annotationId !== e,
      );
      return n.length === t.length ? t : n;
    });
  };
  let Ne = {
    annotation: {
      enabled: true,
      handleRef: ce,
      onStart: Se,
      onModeEnabled: we,
      onSubmitted: Te,
      onSubmit: Oe,
      onDirectSubmit: Ae,
      onUpdate: je,
      onDismiss: Me,
    },
  };
  let Pe = Ne,
    Fe;
  bb0: switch (parsedArtifact.kind) {
    case "document": {
      let e =
          navigationRequest?.target.artifactKind === "document"
            ? navigationRequest.target
            : null,
        n = e == null ? undefined : navigationRequest?.requestId,
        r = e == null ? undefined : e.pageNumber - 1,
        i = chromeMode === "standalone" ? "" : title,
        a;
      a = (
        <Q.Suspense fallback={E}>
          {$.jsx(
            ni,
            {
              bottomScrollReservePx: F,
              className: "h-full min-h-0",
              enablePageNavigation: false,
              headerRightContent: A,
              initialDocumentProto: parsedArtifact.proto,
              initialPageIndex: r,
              renderHeaderZoomControl: Vr,
              title: i,
            },
            n,
          )}
        </Q.Suspense>
      );
      Fe = a;
      break bb0;
    }
    case "presentation": {
      let e =
          navigationRequest?.target.artifactKind === "presentation" &&
          navigationRequest.target.slideNumber != null
            ? navigationRequest.target.slideNumber - 1
            : undefined,
        n = e == null ? undefined : navigationRequest?.requestId,
        r =
          P &&
          "[&_.popcorn-presentation-main-panel]:h-[calc(100%_-_var(--right-panel-composer-overlay-reserve,0px))] [&_.popcorn-presentation-main-panel]:self-start",
        i = o(
          "h-full min-h-0",
          "[&_[data-testid='popcorn-file-title']]:hidden",
          "[&_.popcorn-presentation-editor-shell]:min-w-[689px]",
          r,
        );
      let a = !disableAnnotations,
        s = disableAnnotations ? undefined : Pe,
        c = $.jsx(ArtifactPreviewZoomToFitLabel, {});
      let l;
      l = (
        <Q.Suspense fallback={E}>
          {$.jsx(
            ri,
            {
              className: i,
              enablePageNavigation: false,
              headerRightContent: A,
              hideSpeakerNotes: P,
              initialPresentationProto: parsedArtifact.proto,
              initialSelectedSlideIdx: e,
              annotationsEnabled: a,
              renderHeaderZoomControl: Vr,
              reviewTools: s,
              title,
              zoomToFitLabel: c,
            },
            n,
          )}
        </Q.Suspense>
      );
      Fe = l;
      break bb0;
    }
    case "spreadsheet": {
      let e =
          navigationRequest?.target.artifactKind === "workbook" &&
          "range" in navigationRequest.target
            ? navigationRequest.target
            : null,
        n = e == null ? undefined : navigationRequest?.requestId,
        r = e?.range.split(":")[0];
      let i = !disableAnnotations,
        a = disableAnnotations ? undefined : Pe,
        o = chromeMode === "standalone" ? "" : title,
        s;
      s = (
        <Q.Suspense fallback={E}>
          {$.jsx(
            ii,
            {
              bottomScrollReservePx: F,
              className: "h-full min-h-0",
              headerRightContent: N,
              initialSelectedAddress: r,
              initialWorkbookProto: parsedArtifact.proto,
              annotationsEnabled: i,
              renderHeaderZoomControl: Vr,
              reviewTools: a,
              title: o,
            },
            n,
          )}
        </Q.Suspense>
      );
      Fe = s;
    }
  }
  let Le = parsedArtifact.kind === "spreadsheet" ? "top-[88px]" : "top-12";
  return $.jsx(zr, {
    refreshButton,
    topClassName: Le,
    children: Fe,
  });
}
function zr(e) {
  let { children, refreshButton, topClassName = "top-12" } = e,
    s =
      refreshButton == null ? null : (
        <div
          className={o(
            "pointer-events-none absolute left-1/2 z-50 -translate-x-1/2",
            topClassName,
          )}
        >
          <div className="pointer-events-auto">{refreshButton}</div>
        </div>
      );
  return (
    <div className="relative h-full min-h-0">
      {children}
      {s}
    </div>
  );
}
function Br(e) {
  switch (e.kind) {
    case "document":
      return "document";
    case "presentation":
      return "slides";
    case "spreadsheet":
      return "spreadsheet";
  }
}
function Vr(e) {
  let { fitOption, onZoomPercentChange, triggerTestId, zoomPercent } = e;
  return (
    <ArtifactPreviewZoomControl
      fitOption={fitOption}
      onZoomPercentChange={onZoomPercentChange}
      triggerTestId={triggerTestId}
      zoomOptions={artifactPreviewZoomOptions}
      zoomPercent={zoomPercent}
    />
  );
}
function Hr(e) {
  let { hostId, path, tabId, title } = e,
    o = l(ee),
    s = O(),
    [u, f] = Q.useState(false),
    p = s.formatMessage({
      id: "artifactTab.sourceOptions",
      defaultMessage: "Artifact viewer options",
      description: "Aria label for the artifact preview options menu",
    });
  let m = p,
    h = function (event) {
      event.preventDefault();
      pe(o, path, {
        hostId,
        tabId,
        title,
      });
      f(false);
    };
  let g = h,
    _ = $.jsx(oe, {
      className: "icon-xs",
    });
  let v = $.jsx(c, {
    "aria-label": m,
    color: "ghost",
    size: "toolbar",
    uniform: true,
    children: _,
  });
  let y = (
    <L
      id="artifactTab.sourceOptions.viewSource"
      defaultMessage="View source"
      description="Menu item that opens the current artifact file in source view"
    />
  );
  let b = (
    <P.Item onSelect={g} LeftIcon={ArtifactSourceIcon}>
      {y}
    </P.Item>
  );
  return $.jsx(d, {
    open: u,
    onOpenChange: f,
    align: "end",
    contentWidth: "menu",
    triggerButton: v,
    children: b,
  });
}
function Z(e) {
  let { isError, isLoading } = e,
    i = isLoading ? "loading" : isError ? "error" : "ready",
    a = et(i);
  return <div className={$r}>{a}</div>;
}
function Ur(e) {
  let { chromeMode, hostId, path, sizeBytes } = e,
    s,
    c;
  s = o($r, "flex-col gap-3");
  c = (
    <L
      id="artifactTab.previewTooLarge"
      defaultMessage="This file is too large to preview in the side panel"
      description="State shown when an artifact exceeds the size limit for side panel previews"
    />
  );
  let l = chromeMode === "default" && (
    <ArtifactPreviewDownloadButton
      hostId={hostId}
      path={path}
      sizeBytes={sizeBytes}
    />
  );
  return (
    <div className={s}>
      {c}
      {l}
    </div>
  );
}
function Wr({ hostId, importKind, path }) {
  return `${hostId}:${importKind}:${path}`;
}
function Gr(e, t) {
  let n = ti.get(e);
  if (n == null || n.contentsBytes.length !== t.length) return null;
  for (let e = 0; e < t.length; e += 1)
    if (n.contentsBytes[e] !== t[e]) return null;
  return (ti.delete(e), ti.set(e, n), n.parsedArtifact);
}
function Kr(e, t, n) {
  for (
    ti.delete(e),
      ti.set(e, {
        contentsBytes: t,
        parsedArtifact: n,
      });
    ti.size > Qr;

  ) {
    let e = ti.keys().next().value;
    if (e == null) return;
    ti.delete(e);
  }
}
function qr(e, t, n) {
  t.current !== e && ((t.current = e), n((e) => e + 1));
}
function Jr(e) {
  let t = atob(e),
    n = new Uint8Array(t.length);
  for (let e = 0; e < t.length; e += 1) n[e] = t.charCodeAt(e);
  return n;
}
function Yr(e) {
  let t = 0;
  for (let n = 0; n < e.length; n += 1) t = (t * 31 + e[n]) % 4294967296;
  return `${e.length}:${t.toString(16)}`;
}
var Xr, Q, $, Zr, Qr, $r, ei, ti, ni, ri, ii, ai, oi, si;
e(() => {
  Xr = N();
  a();
  x();
  r();
  Q = t(h(), 1);
  E();
  w();
  qe();
  Je();
  He();
  at();
  le();
  Te();
  y();
  S();
  initArtifactDropdownMenuRuntime();
  M();
  st();
  Be();
  initArtifactPreviewControlsChunk();
  ce();
  v();
  T();
  he();
  z();
  ye();
  m();
  be();
  A();
  te();
  n();
  ue();
  initArtifactPreviewZoomRuntime();
  Pr();
  tt();
  $ = s();
  D();
  Zr = 41943040;
  Qr = 5;
  $r =
    "flex h-full items-center justify-center px-6 text-center text-sm text-token-text-tertiary";
  ei = I({
    refreshForLatest: {
      id: "artifactTab.refreshForLatest",
      defaultMessage: "Refresh for latest",
      description:
        "Button label shown when an artifact preview is stale and can be refreshed",
    },
  });
  ti = new Map();
  ni = Q.lazy(async () => {
    let { PopcornElectronDocumentPanel } = await i(
      async () => {
        let { PopcornElectronDocumentPanel: _PopcornElectronDocumentPanel } =
          await import("../runtime/artifact-preview-panel-runtime");
        return {
          PopcornElectronDocumentPanel: _PopcornElectronDocumentPanel,
        };
      },
      __vite__mapDeps([
        42, 1, 6, 43, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
        44, 45, 46, 39,
      ]),
      import.meta.url,
    );
    return {
      default: PopcornElectronDocumentPanel,
    };
  });
  ri = Q.lazy(async () => {
    let { PopcornElectronPresentationPanel } = await i(
      async () => {
        let {
          PopcornElectronPresentationPanel: _PopcornElectronPresentationPanel,
        } = await import("../runtime/artifact-preview-panel-runtime");
        return {
          PopcornElectronPresentationPanel: _PopcornElectronPresentationPanel,
        };
      },
      __vite__mapDeps([
        47, 1, 7, 8, 4, 5, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
        22, 23, 24, 25, 26, 27, 28, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58,
        59, 60, 61, 62, 43, 3, 6, 29, 30, 31, 32, 33, 34, 35, 36, 37, 44, 46,
        63,
      ]),
      import.meta.url,
    );
    return {
      default: PopcornElectronPresentationPanel,
    };
  });
  ii = Q.lazy(async () => {
    let { PopcornElectronWorkbookPanel } = await i(
      async () => {
        let { PopcornElectronWorkbookPanel: _PopcornElectronWorkbookPanel } =
          await import("../runtime/artifact-preview-panel-runtime");
        return {
          PopcornElectronWorkbookPanel: _PopcornElectronWorkbookPanel,
        };
      },
      __vite__mapDeps([
        64, 8, 1, 4, 5, 9, 10, 11, 12, 7, 13, 14, 15, 16, 17, 18, 19, 20, 21,
        22, 23, 24, 25, 26, 27, 28, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58,
        59, 60, 61, 62, 43, 3, 6, 29, 30, 31, 32, 33, 34, 35, 36, 37, 44, 45,
      ]),
      import.meta.url,
    );
    return {
      default: PopcornElectronWorkbookPanel,
    };
  });
  ai = Q.lazy(async () => {
    let { DocxPreviewPanel } = await i(
      async () => {
        let { DocxPreviewPanel: _DocxPreviewPanel } = await import(
          "../runtime/artifact-preview-panel-runtime"
        );
        return {
          DocxPreviewPanel: _DocxPreviewPanel,
        };
      },
      __vite__mapDeps([
        65, 8, 1, 4, 5, 9, 10, 11, 12, 7, 13, 14, 15, 16, 17, 18, 19, 20, 21,
        22, 23, 24, 25, 26, 27, 28, 66, 67, 68, 55,
      ]),
      import.meta.url,
    );
    return {
      default: DocxPreviewPanel,
    };
  });
  oi = Q.lazy(async () => {
    let { NotebookPreviewPanel } = await i(
      async () => {
        let { NotebookPreviewPanel: _NotebookPreviewPanel } = await import(
          "../runtime/artifact-preview-panel-runtime"
        );
        return {
          NotebookPreviewPanel: _NotebookPreviewPanel,
        };
      },
      __vite__mapDeps([
        69, 1, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
        22, 23, 24, 25, 26, 27, 28, 68, 55,
      ]),
      import.meta.url,
    );
    return {
      default: NotebookPreviewPanel,
    };
  });
  si = Q.lazy(async () => {
    let { PdfPreviewPanel } = await i(
      async () => {
        let { PdfPreviewPanel: _PdfPreviewPanel } = await import(
          "../runtime/artifact-preview-panel-runtime"
        );
        return {
          PdfPreviewPanel: _PdfPreviewPanel,
        };
      },
      __vite__mapDeps([
        70, 8, 1, 4, 5, 9, 10, 11, 12, 7, 13, 14, 15, 16, 17, 18, 19, 20, 21,
        22, 23, 24, 25, 26, 27, 28, 66, 68, 71,
      ]),
      import.meta.url,
    );
    return {
      default: PdfPreviewPanel,
    };
  });
})();
