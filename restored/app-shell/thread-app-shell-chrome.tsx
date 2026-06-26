// Restored from ref/webview/assets/thread-app-shell-chrome-D7ImdiWZ.js
// Thread app-shell chrome: right/bottom panel outlets, tab launchers, and browser tab title synchronization.
import { once as e, toEsModule as t } from "../runtime/commonjs-interop";
import {
  $N as n,
  $P as r,
  $i as i,
  $p as a,
  AB as o,
  AP as s,
  A_ as c,
  BP as l,
  BV as u,
  Ba as d,
  DL as f,
  DN as p,
  D_ as m,
  Es as h,
  FB as g,
  Gi as _,
  H_ as v,
  IB as y,
  I_ as b,
  JV as x,
  LN as S,
  La as C,
  Lj as w,
  Ln as T,
  MA as E,
  M_ as D,
  NA as O,
  ON as k,
  O_ as A,
  Op as j,
  PB as M,
  QP as N,
  Qi as P,
  RN as F,
  Ra as I,
  Rj as L,
  Rn as R,
  SP as ee,
  Sc as te,
  Sj as ne,
  T_ as re,
  Tp as ie,
  Ts as ae,
  Up as oe,
  VP as se,
  Xs as ce,
  Zi as le,
  Zs as ue,
  _c as de,
  bF as fe,
  bR as pe,
  bc as me,
  cM as he,
  cP as ge,
  cm as _e,
  dV as ve,
  hM as ye,
  iF as z,
  j_ as be,
  jm as xe,
  k_ as Se,
  lF as B,
  mP as Ce,
  nF as we,
  na as Te,
  pM as Ee,
  pP as De,
  qV as V,
  qi as H,
  rF as Oe,
  ra as ke,
  sF as U,
  tP as Ae,
  uM as je,
  uP as Me,
  vM as Ne,
  wj as Pe,
  yM as Fe,
  za as Ie,
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js";
import {
  $i as Le,
  $n as Re,
  $u as ze,
  As as Be,
  Bn as W,
  Ds as Ve,
  Er as He,
  Es as Ue,
  Il as We,
  Jl as Ge,
  Jt as Ke,
  Os as qe,
  Qn as Je,
  Rl as Ye,
  Sl as Xe,
  So as Ze,
  Ts as Qe,
  Ur as $e,
  Vn as et,
  Wr as tt,
  Xl as nt,
  Yi as G,
  Yl as rt,
  Yt as it,
  Zl as at,
  _c as ot,
  bc as st,
  cd as ct,
  ed as lt,
  er as ut,
  gc as dt,
  js as ft,
  ks as pt,
  mc as mt,
  n as ht,
  nd as gt,
  ql as _t,
  sd as vt,
  t as yt,
  tr as bt,
  wl as xt,
  wo as St,
  wr as Ct,
  xl as wt,
  yc as Tt,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~ovcriy74-KTK3czaX.js";
import {
  a as Et,
  an as Dt,
  o as Ot,
  on as kt,
} from "./app-initial~app-main~automations-page-bHJfYUGr.js";
import {
  d as At,
  u as jt,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~bj5tp28r-CQrj7g91.js";
import {
  Fi as Mt,
  Ii as Nt,
  Jr as Pt,
  Ni as Ft,
  Pi as It,
  _o as Lt,
  go as Rt,
  mo as zt,
  po as Bt,
  qr as Vt,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~kvpgbdy1-mhRp2VYQ.js";
import {
  $d as Ht,
  Xc as Ut,
  Xd as Wt,
  Zd as Gt,
  cl as Kt,
  el as qt,
  gm as Jt,
  hm as Yt,
  il as Xt,
  mt as Zt,
  ol as Qt,
  pt as $t,
  rl as en,
  sl as tn,
} from "./app-initial~app-main~onboarding-page~profile-QLPeiknY.js";
import {
  n as nn,
  t as rn,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-page~remote-con~kyb0i2zb-B27VQcu6.js";
import {
  P as an,
  V as on,
  _ as sn,
  m as cn,
  p as ln,
  v as un,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-publication-terms-route~remote-conversati~oykv7gy7-B4ar2dlW.js";
import {
  ArtifactFilePreviewIcon as fn,
  initArtifactFilePreviewIconChunk as dn,
} from "../utils/artifact-file-preview-icon";
import {
  initLocalConversationArtifactSignals as pn,
  initLocalConversationThreadChunk as mn,
  LocalConversationSideChatThread as hn,
  localConversationOutputArtifactsSignal as gn,
} from "../conversations/local-conversation-thread";
import { i as _n, r as vn } from "./thread-overflow-menu-CM-Eo7JH.js";
import {
  initUseMediaQueryChunk as bn,
  useMediaQuery as yn,
} from "../utils/use-media-query";
var xn,
  BottomPanelClosedIcon,
  initBottomPanelClosedIcon = e(() => {
    t(x());
    xn = u();
    BottomPanelClosedIcon = (e) => (
      <svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...e}
      >
        <path
          d="M13.334 12.2529C13.701 12.2533 13.999 12.5509 13.999 12.918C13.9988 13.2849 13.7008 13.5827 13.334 13.583H6.66699C6.29984 13.583 6.00215 13.2851 6.00195 12.918C6.00195 12.5507 6.29972 12.2529 6.66699 12.2529H13.334Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15 3.08594C16.748 3.08594 18.165 4.503 18.165 6.25098V13.751C18.165 15.499 16.748 16.916 15 16.916H5C3.25202 16.916 1.83496 15.499 1.83496 13.751V6.25098C1.83496 4.503 3.25202 3.08594 5 3.08594H15ZM5 4.41602C3.98656 4.41602 3.16504 5.23753 3.16504 6.25098V13.751C3.16504 14.7644 3.98656 15.5859 5 15.5859H15C16.0134 15.5859 16.835 14.7644 16.835 13.751V6.25098C16.835 5.23753 16.0134 4.41602 15 4.41602H5Z"
          fill="currentColor"
        />
      </svg>
    );
  }),
  wn,
  BottomPanelOpenIcon,
  initBottomPanelOpenIcon = e(() => {
    t(x());
    wn = u();
    BottomPanelOpenIcon = (e) => (
      <svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...e}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15 3.08594C16.748 3.08594 18.165 4.503 18.165 6.25098V13.751C18.165 15.499 16.748 16.916 15 16.916H5C3.25202 16.916 1.83496 15.499 1.83496 13.751V6.25098C1.83496 4.503 3.25202 3.08594 5 3.08594H15ZM5 4.41602C3.98656 4.41602 3.16504 5.23753 3.16504 6.25098V13.751C3.16504 14.7644 3.98656 15.5859 5 15.5859H15C16.0134 15.5859 16.835 14.7644 16.835 13.751V6.25098C16.835 5.23753 16.0134 4.41602 15 4.41602H5Z"
          fill="currentColor"
        />
        <path
          d="M3.16504 12.2529H16.835V13.583H3.16504V12.2529Z"
          fill="currentColor"
        />
      </svg>
    );
  }),
  initThreadAppShellLocalConversationDependency = e(() => {
    mn();
  });
function buildThreadPanelNewTabModel({ onClose, target }) {
  let n = g(D),
    r = B(),
    i = y(rt.tabs$),
    o = y(_t.tabs$),
    s = [...i, ...o],
    l = y(threadEntrypointMcpTabsSignal),
    u = y(h),
    p = y(v),
    m = te() === de,
    _ = y(Xe),
    b = y(xt),
    x = y(Ye),
    S = Ae("open-file"),
    C = re(n),
    w = n.value.routeKind === "local-thread" ? n.value.conversationId : null,
    T = M(xe, w);
  M(a, w);
  let E = M(_e, w),
    O = M(oe, w),
    k = M(G, "searchFiles"),
    A = M(G, "openSideChat"),
    j = M(G, "openBrowserTab"),
    N = M(G, "openReviewTab"),
    P = M(gn, w),
    F = T !== "projectless" && b != null,
    I = w != null && false,
    L = w != null && !St(),
    R = u && (p || !s.some((item) => Se(item))),
    ee =
      !m &&
      (_.kind === "git" || false) &&
      !s.some((item) => item.tabId === c.DIFF),
    ne = I && !s.some((item) => item.tabId === c.TIMELINE),
    ie = Qe(n),
    ae = _.kind === "git" ? null : P,
    se = ae != null && ae.length > 0,
    le = () => {
      w != null &&
        _n(n, hn, {
          sourceConversationId: w,
          cwd: _.cwd,
          hostId: E,
          collaborationMode: O,
          intl: r,
          target,
        })
          .then(() => {
            onClose?.();
          })
          .catch((error) => {
            Ce.error("Error opening side chat", {
              safe: {},
              sensitive: {
                error,
              },
            });
            n.get(je).danger(
              r.formatMessage({
                id: "thread.sidePanel.openSideChatError",
                defaultMessage: "Failed to open side chat",
                description:
                  "Error message shown when opening a side chat from the thread side panel fails",
              }),
            );
          });
    },
    ue = () => {
      en(n, true, target) && onClose?.();
    },
    fe = () => {
      qt(n, {
        browserConversationId: C ?? undefined,
        browserHostDisplayName: x.display_name,
        cwd: _.cwd,
        initiator: "side_panel_menu",
        source: "manual",
        target: p ? target : "right",
      }) != null && onClose?.();
    },
    me = () => {
      Xt(n, w, {
        target,
      }) && onClose?.();
    },
    he = () => {
      b != null &&
        (it(n, null, {
          hostId: x.id,
          target,
          workspaceRoot: b,
        }),
        onClose?.());
    },
    ge = () => {
      pt(n, target);
      onClose?.();
    },
    ve = (e, t, n) => {
      if (t == null) {
        d({
          href: e,
          initiator: "mcp_app_resource",
          originHostId: n,
        });
        return;
      }
      Ie({
        event: t,
        href: e,
        initiator: "mcp_app_resource",
        originHostId: n,
      });
    },
    ye = (event, t) => {
      switch (event.type) {
        case "file":
        case "generated-image":
          un({
            scope: n,
            path: event.path,
            cwd: b == null ? null : f(b),
            browserSidebarEnabled: u,
            hostConfig: x,
            hostId: x.id,
            openFile: S.mutate,
            openInSidePanel: true,
          });
          return;
        case "google-drive":
        case "appgen-app":
          ve(event.url, t, x.id);
          return;
        case "website":
          if (pe(event.target)) {
            ve(event.target, t);
            return;
          }
          un({
            scope: n,
            path: event.target,
            cwd: b == null ? null : f(b),
            browserSidebarEnabled: u,
            hostConfig: x,
            hostId: x.id,
            openFile: S.mutate,
          });
      }
    },
    z = [
      ...(F
        ? [
            {
              deferSelectionUntilDropdownClose: true,
              id: "open-file",
              Icon: $e,
              keyboardShortcut: k,
              onSelect: he,
              title: (
                <U
                  id="thread.sidePanel.openFile"
                  defaultMessage="Files"
                  description="Action label for opening the workspace file browser from the thread side panel"
                />
              ),
            },
          ]
        : []),
      ...(L
        ? [
            {
              id: "side-chat",
              Icon: yt,
              keyboardShortcut: A,
              onSelect: le,
              title: (
                <U
                  id="thread.sidePanel.openSideChat"
                  defaultMessage="Side chat"
                  description="Action label for opening a side chat from the thread side panel"
                />
              ),
            },
          ]
        : []),
      ...(R
        ? [
            {
              deferSelectionUntilDropdownClose: true,
              id: "browser",
              Icon: Te,
              keyboardShortcut: j,
              onSelect: fe,
              title: (
                <U
                  id="thread.sidePanel.openBrowserTab"
                  defaultMessage="Browser"
                  description="Action label for opening the browser tab from the thread side panel"
                />
              ),
            },
          ]
        : []),
      ...(ee
        ? [
            {
              id: "review",
              Icon: Wt,
              keyboardShortcut: N,
              onSelect: ue,
              title: (
                <U
                  id="thread.sidePanel.openReviewTab"
                  defaultMessage="Review"
                  description="Action label for opening the review tab from the thread side panel"
                />
              ),
            },
          ]
        : []),
      ...(ne
        ? [
            {
              id: "timeline",
              Icon: Yt,
              onSelect: me,
              title: (
                <U
                  id="thread.sidePanel.newTab.timeline.title"
                  defaultMessage="History"
                  description="Action label for opening History from the side panel New tab page. Short label."
                />
              ),
            },
          ]
        : []),
      ...[],
      ...(target === "right"
        ? l.map((item) => ({
            id: `${item.hostId}:${item.server}:${item.tool.name}`,
            Icon: ce,
            mcpServerIcon: item.icon,
            onSelect: () => {
              Ot(n, item) != null && onClose?.();
            },
            title: item.title,
          }))
        : []),
      ...(ie
        ? [
            {
              id: "terminal",
              Icon: Bt,
              onSelect: ge,
              title: (
                <U
                  id="thread.sidePanel.newTab.terminal.title"
                  defaultMessage="Terminal"
                  description="Action label for opening the terminal from a panel New tab page"
                />
              ),
            },
          ]
        : []),
    ];
  return {
    actions:
      _.kind === "git"
        ? [...z].sort(
            (e, t) =>
              (gitPanelActionSortOrder[e.id] ?? z.length) -
              (gitPanelActionSortOrder[t.id] ?? z.length),
          )
        : z,
    hasOutputArtifacts: se,
    onOpenArtifact: ye,
    outputArtifacts: ae,
  };
}
var K,
  threadEntrypointMcpTabsSignal,
  gitPanelActionSortOrder,
  jn = e(() => {
    o();
    fe();
    z();
    j();
    ae();
    Le();
    Ze();
    Ge();
    C();
    he();
    sn();
    ue();
    Ht();
    ht();
    Jt();
    Gt();
    tt();
    ke();
    zt();
    vn();
    initThreadAppShellLocalConversationDependency();
    an();
    Et();
    wt();
    Ke();
    r();
    b();
    We();
    me();
    pn();
    De();
    n();
    A();
    Ue();
    be();
    Ut();
    K = u();
    threadEntrypointMcpTabsSignal = ve(N, ({ get }) =>
      get(on).filter((item) => item.entrypoint === "thread"),
    );
    gitPanelActionSortOrder = {
      review: 0,
      terminal: 1,
      browser: 2,
      "open-file": 3,
    };
  });
function getArtifactStableKey(event) {
  switch (event.type) {
    case "file":
    case "generated-image":
      return `file:${event.path}`;
    case "google-drive":
      return `google-drive:${event.url}`;
    case "appgen-app":
      return `appgen-app:${event.projectId}`;
    case "website":
      return `website:${event.target}`;
  }
}
function getArtifactDisplayTitle(event) {
  switch (event.type) {
    case "file":
    case "generated-image":
      return ne(event.path);
    case "google-drive":
      return event.title;
    case "appgen-app":
      return event.title ?? Ft(event.url) ?? event.url;
    case "website":
      return formatWebsiteArtifactTarget(event.target);
  }
}
function getArtifactTooltipTitle(event) {
  switch (event.type) {
    case "file":
    case "generated-image":
      return event.path;
    case "google-drive":
      return event.url;
    case "appgen-app":
      return Ft(event.url) ?? event.url;
    case "website":
      return event.target;
  }
}
function formatWebsiteArtifactTarget(e) {
  try {
    let t = new URL(e);
    return `${t.host}${t.pathname === "/" ? "" : t.pathname}${t.search}`;
  } catch {
    return ne(e) || e;
  }
}
var In = e(() => {
  It();
  Pe();
});
function ThreadPanelArtifactIcon(e) {
  let { artifact, iconClassName, imageClassName } = e;
  switch (artifact.type) {
    case "file":
    case "generated-image": {
      let e;
      return q.jsx(fn, {
        iconClassName,
        imageClassName,
        path: artifact.path,
      });
    }
    case "google-drive": {
      let e;
      return q.jsx($t, {
        className: iconClassName,
        resourceKind: artifact.resourceKind,
      });
    }
    case "appgen-app": {
      let e;
      return <Mt className={iconClassName} />;
    }
    case "website": {
      let e;
      return <Te className={iconClassName} />;
    }
  }
}
var Rn,
  q,
  zn = e(() => {
    Rn = V();
    dn();
    ke();
    Nt();
    Zt();
    q = u();
  });
function ThreadPanelNewTabMenuContent(e) {
  let {
      actions,
      hasOutputArtifacts,
      onActionSelect,
      onOpenArtifact,
      outputArtifacts,
    } = e,
    s =
      hasOutputArtifacts &&
      outputArtifacts != null &&
      outputArtifacts.length > 0;
  if (actions.length === 0 && !s) {
    let e;
    return (
      <H.Message compact={true}>
        <U
          id="thread.sidePanel.newTab.empty"
          defaultMessage="No tabs are available for this thread"
          description="Empty message on the side panel New tab page when the current thread has no available side panel tab actions."
        />
      </H.Message>
    );
  }
  let c;
  {
    let e;
    e = (e) => (
      <H.Item
        key={e.id}
        LeftIcon={e.mcpServerIcon == null ? e.Icon : undefined}
        keyboardShortcut={e.keyboardShortcut}
        onSelect={() => onActionSelect(e)}
      >
        {e.mcpServerIcon == null ? null : (
          <H.ItemIcon>{Dt(e.mcpServerIcon)}</H.ItemIcon>
        )}
        {e.title}
      </H.Item>
    );
    c = actions.map(e);
  }
  let l = s ? (
    <>
      {actions.length > 0 ? <H.Separator /> : null}
      <H.SectionLabel>
        <U
          id="thread.sidePanel.newTab.suggested.heading"
          defaultMessage="Suggested"
          description="Heading for suggested artifacts shown on the side panel New tab page"
        />
      </H.SectionLabel>
      {outputArtifacts.map((item) => (
        <H.Item
          key={getArtifactStableKey(item)}
          onClickCapture={(event) => {
            I(event) &&
              (event.preventDefault(),
              event.stopPropagation(),
              onOpenArtifact(item, event));
          }}
          onSelect={() => onOpenArtifact(item)}
        >
          <H.ItemIcon>
            <ThreadPanelArtifactIcon
              artifact={item}
              iconClassName="icon-xs"
              imageClassName="size-[18px] rounded-sm"
            />
          </H.ItemIcon>
          {getArtifactDisplayTitle(item)}
        </H.Item>
      ))}
    </>
  ) : null;
  return (
    <>
      {c}
      {l}
    </>
  );
}
var Vn,
  J,
  Hn = e(() => {
    Vn = V();
    z();
    le();
    C();
    kt();
    In();
    zn();
    J = u();
  });
function HeaderPanelToggleButton(e) {
  let {
      children,
      disabled = false,
      label,
      onClick,
      color,
      pressed,
      shortcut,
    } = e,
    u =
      color === "outline"
        ? pressed
          ? "outlineActive"
          : "outline"
        : pressed
          ? "secondary"
          : "ghost",
    d = Gn.jsx(p, {
      size: "toolbar",
      color: u,
      "aria-label": label,
      "aria-pressed": pressed,
      disabled: disabled,
      title: label,
      onClick,
      uniform: true,
      children,
    });
  return (
    <Ee tooltipContent={label} shortcut={shortcut} delayOpen={true}>
      {d}
    </Ee>
  );
}
var Wn,
  Gn,
  Kn = e(() => {
    Wn = V();
    k();
    ye();
    Gn = u();
  });
function OpenPrimaryTargetButton(e) {
  let { cwd, hostConfig } = e,
    i = B(),
    a = yn("(max-width: 920px)"),
    o = te() === de,
    [s, c] = tr.useState(null),
    l = hostConfig?.id,
    u = {
      cwd,
      deferEnrichment: true,
      hostId: l,
    };
  let {
    canLoadTargets,
    preferredTarget,
    targets,
    availableTargets,
    hasLoadedTargets,
    open,
  } = At(u);
  if (!cwd || !canLoadTargets) return null;
  let _, v, y, b, x, S, C, w, T, E, D, O, k, A, j;
  C = Symbol.for("react.early_return_sentinel");
  bb0: {
    j = o ? targets.filter(isNonEditorTarget) : targets;
    v = ln({
      preferredTarget,
      targets: j,
      availableTargets,
      mode: "editor",
    });
    y = a || (v != null && preferredTarget === v.target);
    let e = v
        ? i.formatMessage(
            {
              id: "localConversationPage.openPrimaryTarget.tooltip",
              defaultMessage: "Open in {target}",
              description: "Tooltip for the primary open button",
            },
            {
              target: v.label,
            },
          )
        : undefined,
      t = !hasLoadedTargets || j.some(isTargetAvailabilityPending),
      n = j.filter(isVisibleAvailableTarget);
    if (!t && n.length === 0 && s == null) {
      C = null;
      break bb0;
    }
    _ = Vt;
    w = "outline";
    T = "toolbar";
    E = v == null;
    D = "end";
    O = "tall";
    k = "menuFixed";
    A = "pt-2";
    b = y ? nr.openPrimaryTarget : undefined;
    x = y ? e : undefined;
    S =
      n.length === 0 ? (
        <OpenTargetLoadingItem />
      ) : (
        n.map((item) => (
          <H.Item
            key={item.id}
            onSelect={() => {
              open(item.target, {
                appPath: item.appPath,
                openMode: "workspace",
                persistPreferred: true,
              });
            }}
          >
            <H.ItemIcon>
              <img
                alt=""
                onError={handleTargetIconError}
                src={
                  s == null
                    ? (item.resolvedIcon ?? item.icon)
                    : (s.get(item.id) ?? item.icon)
                }
                className="icon-sm"
              />
            </H.ItemIcon>
            <span className="truncate">{item.label}</span>
          </H.Item>
        ))
      );
  }
  if (C !== Symbol.for("react.early_return_sentinel")) return C;
  let M = (e) => {
    c(e ? new Map(j.map(readTargetIconCacheEntry)) : null);
  };
  let N =
    v == null
      ? undefined
      : () => {
          open(v.target, {
            appPath: v.appPath,
            openMode: "workspace",
            persistPreferred: false,
          });
        };
  let P = (
    <span className="icon-sm inline-flex shrink-0 items-center justify-center">
      {v == null ? (
        <span className="size-4 rounded bg-token-bg-tertiary" />
      ) : (
        <img
          alt={y ? v.label : ""}
          onError={handleTargetIconError}
          src={v.icon}
          className="icon-sm"
        />
      )}
    </span>
  );
  let F = y ? null : (
    <span className="truncate">
      <U {...nr.openPrimaryTarget} />
    </span>
  );
  let I = (
    <span className="flex items-center gap-1.5">
      {P}
      {F}
    </span>
  );
  return Y.jsx(_, {
    color: w,
    size: T,
    primaryDisabled: E,
    dropdownAlign: D,
    dropdownContentMaxHeight: O,
    dropdownContentWidth: k,
    dropdownContentClassName: A,
    primaryAriaLabel: b,
    tooltipContent: x,
    dropdownContent: S,
    onDropdownOpenChange: M,
    onClick: N,
    children: I,
  });
}
function readTargetIconCacheEntry(e) {
  return [e.id, e.resolvedIcon ?? e.icon];
}
function isVisibleAvailableTarget(e) {
  return !e.hidden && e.available === true;
}
function isTargetAvailabilityPending(e) {
  return e.available == null || e.resolvedIcon === undefined;
}
function isNonEditorTarget(e) {
  return e.kind !== "editor" && e.kind !== "terminal";
}
function OpenTargetLoadingItem() {
  return (
    <H.Item disabled={true} aria-hidden="true">
      <H.ItemIcon>
        <span className="size-4 rounded bg-token-bg-tertiary" />
      </H.ItemIcon>
      <span className="h-3 w-24 rounded bg-token-bg-tertiary" />
    </H.Item>
  );
}
function handleTargetIconError(event) {
  event.currentTarget.src = "apps/vscode.png";
}
var er,
  tr,
  Y,
  nr,
  rr = e(() => {
    er = V();
    tr = t(x(), 1);
    z();
    Pt();
    le();
    bn();
    me();
    cn();
    jt();
    Y = u();
    nr = Oe({
      openPrimaryTarget: {
        id: "localConversationPage.openPrimaryTarget",
        defaultMessage: "Open in",
        description: "Primary open button label",
      },
    });
  });
function LocalProjectHeaderAction(e) {
  let { conversationId } = e,
    r = y(Ye),
    i = y(Xe),
    a = M(ie, conversationId),
    o = i.cwd == null ? null : f(i.cwd);
  let s = o;
  if (s == null || !a || i.kind !== "git" || r.kind === "remote-control")
    return null;
  return (
    <W.HeaderAction
      actionId="thread-local-project-actions"
      align="end"
      order={100}
    >
      {or.jsx(OpenPrimaryTargetButton, {
        cwd: s,
        hostConfig: r,
      })}
    </W.HeaderAction>
  );
}
var ar,
  or,
  sr = e(() => {
    ar = V();
    o();
    fe();
    j();
    et();
    rr();
    wt();
    We();
    or = u();
  });
function RightPanelEmptyState(e) {
  let n = e === undefined ? {} : e;
  let { onClose } = n,
    i = {
      onClose,
      target: "right",
    };
  let { actions, onOpenArtifact, outputArtifacts } =
      buildThreadPanelNewTabModel(i),
    c = actions.find(isSideChatAction);
  let l = c,
    u = () => {
      l?.onSelect();
    };
  let d = l != null,
    f;
  f = {
    enabled: d,
  };
  R("openSideChat", u, f);
  return Z.jsx(ThreadPanelEmptyStateBody, {
    actions,
    onOpenArtifact,
    outputArtifacts,
  });
}
function isSideChatAction(e) {
  return e.id === "side-chat";
}
function ThreadPanelEmptyStateBody(e) {
  let { actions, onOpenArtifact, outputArtifacts } = e,
    a =
      outputArtifacts != null && outputArtifacts.length > 0
        ? outputArtifacts
        : null,
    o = y(F),
    [c, u] = gr.useState(null),
    [d, f] = gr.useState(false),
    [p, m] = nn(),
    h = o ? undefined : "open",
    g = o ? undefined : _r,
    _ = d && "shadow-sm",
    v = l(
      "sticky top-0 z-10 flex flex-col gap-6 bg-token-main-surface-primary",
      _,
    );
  let b =
    actions.length > 0 ? (
      Z.jsx(s.div, {
        className: "mx-auto flex w-full max-w-xl flex-col gap-1 px-panel",
        variants: o ? undefined : vr,
        children: actions.map(renderNewTabActionButton),
      })
    ) : (
      <div className="mx-auto w-full max-w-xl rounded-lg border border-token-border-default p-3 text-sm text-token-text-secondary">
        <U
          id="thread.sidePanel.newTab.empty"
          defaultMessage="No tabs are available for this thread"
          description="Empty message on the side panel New tab page when the current thread has no available side panel tab actions."
        />
      </div>
    );
  let x =
    a == null ? null : (
      <div className="mx-auto w-full max-w-xl px-panel pb-1">
        <h3 className="pl-2.5 text-sm font-normal text-token-text-secondary">
          <U
            id="thread.sidePanel.newTab.suggested.heading"
            defaultMessage="Suggested"
            description="Heading for suggested artifacts shown on the side panel New tab page"
          />
        </h3>
      </div>
    );
  let S = (
    <div ref={p} className={v}>
      {b}
      {x}
    </div>
  );
  let C =
    a == null ? null : (
      <>
        {Z.jsx(StickyHeaderCoverObserver, {
          headerHeight: m.height,
          root: c,
          onCoveredChange: f,
        })}
        {Z.jsx(SuggestedArtifactList, {
          artifacts: a,
          onOpen: onOpenArtifact,
        })}
      </>
    );
  return (
    <div
      ref={u}
      className="flex h-full min-h-0 flex-col overflow-x-hidden overflow-y-auto bg-token-main-surface-primary p-2 select-none"
    >
      {Z.jsxs(s.div, {
        animate: h,
        className: "flex w-full flex-1 flex-col justify-center",
        initial: false,
        variants: g,
        children: [S, C],
      })}
    </div>
  );
}
function renderNewTabActionButton(e) {
  return Z.jsx(
    NewTabActionButton,
    {
      icon:
        e.mcpServerIcon == null
          ? Z.jsx(e.Icon, {
              className: "icon-xs",
            })
          : Dt(e.mcpServerIcon),
      keyboardShortcut: e.keyboardShortcut,
      onSelect: e.onSelect,
      title: e.title,
    },
    e.id,
  );
}
function StickyHeaderCoverObserver(e) {
  let { headerHeight, root, onCoveredChange } = e,
    a =
      headerHeight == null
        ? "0px"
        : `-${Math.ceil(headerHeight)}px 0px 0px 0px`,
    o = (e) => {
      if (e == null || root == null) return;
      if (typeof IntersectionObserver > "u") {
        onCoveredChange(false);
        return;
      }
      let t = new IntersectionObserver(
        (e) => {
          let t = e[0];
          t != null && onCoveredChange(!t.isIntersecting);
        },
        {
          root,
          rootMargin: a,
        },
      );
      return (
        t.observe(e),
        () => {
          t.disconnect();
        }
      );
    };
  return <div key={a} aria-hidden={true} className="h-px" ref={o} />;
}
function NewTabActionButton(e) {
  let { icon, keyboardShortcut, onSelect, title } = e,
    o = l(
      "cursor-interaction flex min-h-10 items-center gap-2 rounded-md bg-token-bg-secondary px-2.5 py-2 text-left",
      "hover:bg-token-list-hover-background",
      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-token-border-xstrong",
      "w-full",
    );
  let c = (
    <span className="icon-xs flex shrink-0 items-center justify-center text-token-text-secondary">
      {icon}
    </span>
  );
  let u = (
    <span className="min-w-0 flex-1 truncate text-sm font-normal text-token-text-primary">
      {title}
    </span>
  );
  let d = keyboardShortcut ? (
    <span className="ml-auto shrink-0 pl-2 text-token-text-secondary">
      <Ne keysLabel={keyboardShortcut} />
    </span>
  ) : null;
  return Z.jsxs(s.button, {
    type: "button",
    className: o,
    variants: yr,
    onClick: onSelect,
    children: [c, u, d],
  });
}
function SuggestedArtifactList(e) {
  let { artifacts, onOpen } = e,
    [i, a] = gr.useState(null),
    o;
  {
    let e;
    e = (e, t) =>
      Z.jsx(
        SuggestedArtifactRow,
        {
          hideDivider: i === t || i === t + 1,
          artifact: e,
          onOpen,
          onActiveChange: (e) => a(e ? t : null),
        },
        getArtifactStableKey(e),
      );
    o = artifacts.map(e);
  }
  return (
    <ul className="mx-auto flex w-full max-w-xl flex-col px-panel">{o}</ul>
  );
}
function SuggestedArtifactRow(e) {
  let { artifact, hideDivider, onActiveChange, onOpen } = e,
    o = hideDivider && "after:hidden",
    s = l(
      "relative flex w-full after:absolute after:inset-x-3 after:bottom-0 after:h-px after:bg-token-border-light after:content-[''] last:after:hidden",
      o,
    );
  let c = getArtifactTooltipTitle(artifact);
  let u = l(
    "cursor-interaction relative min-h-10 w-full rounded-md px-2.5 py-2 text-left",
    "hover:bg-token-list-hover-background",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-token-border-xstrong",
  );
  let d, f, p, m;
  d = () => onActiveChange(false);
  f = () => onActiveChange(true);
  p = () => onActiveChange(true);
  m = () => onActiveChange(false);
  let h = (e) => onOpen(artifact, e);
  let g = (
    <span className="icon-xs flex shrink-0 items-center justify-center text-token-text-secondary">
      <ThreadPanelArtifactIcon
        artifact={artifact}
        iconClassName="icon-xs"
        imageClassName="size-full rounded"
      />
    </span>
  );
  let _ = getArtifactDisplayTitle(artifact);
  let v = (
    <span className="min-w-0 flex-1 truncate text-sm font-normal text-token-text-primary">
      {_}
    </span>
  );
  let y = (
    <span className="flex min-w-0 items-center gap-2">
      {g}
      {v}
    </span>
  );
  let b = (
    <button
      type="button"
      title={c}
      className={u}
      onBlur={d}
      onFocus={f}
      onMouseEnter={p}
      onMouseLeave={m}
      onClick={h}
    >
      {y}
    </button>
  );
  return <li className={s}>{b}</li>;
}
var X,
  gr,
  Z,
  _r,
  vr,
  yr,
  br = e(() => {
    X = V();
    se();
    ee();
    o();
    gr = t(x(), 1);
    z();
    T();
    Fe();
    kt();
    rn();
    S();
    i();
    In();
    zn();
    jn();
    Z = u();
    _r = {
      closed: {
        opacity: 0,
        y: -8,
        transition: {
          duration: 0.06,
          ease: P.ease,
          when: "afterChildren",
        },
      },
      open: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.09,
          ease: P.ease,
          when: "beforeChildren",
        },
      },
    };
    vr = {
      closed: {
        transition: {
          staggerChildren: 0.008,
          staggerDirection: -1,
        },
      },
      open: {
        transition: {
          delayChildren: 0.012,
          staggerChildren: 0.016,
        },
      },
    };
    yr = {
      closed: {
        opacity: 0,
        y: -6,
        transition: {
          duration: 0.045,
          ease: P.ease,
        },
      },
      open: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.075,
          ease: P.ease,
        },
      },
    };
  });
export function ThreadAppShellChrome(e) {
  let n = g(D),
    r = y(Xe),
    i = y(xt),
    a = y(Ye),
    o = y(rt.activeTab$),
    s = B(),
    c = y(gt),
    l = y(He) === "ready",
    u = M(G, "toggleSidePanel"),
    d = `thread-${e.threadType}`,
    f =
      l && e.threadType === "remote" ? e.showReviewTab : l && r.kind === "git",
    p = kr.useRef(null),
    m,
    h;
  m = () => {
    let e = o?.tabId ?? null;
    if (!c) {
      p.current = e;
      return;
    }
    p.current !== e && ((p.current = e), at(n, o));
  };
  h = [o, c, n];
  kr.useEffect(m, h);
  let _ = () => en(n);
  let v;
  v = {
    enabled: f,
  };
  R("openReviewTab", _, v);
  let b, x;
  b = () => {
    !l ||
      e.threadType === "remote" ||
      i == null ||
      it(n, null, {
        hostId: a.id,
        workspaceRoot: i,
      });
  };
  x = [a.id, l, e.threadType, n, i];
  Me("toggle-file-tree-panel", b, x);
  return (
    <>
      {e.threadType === "remote" ? (
        <>
          <ThreadBottomPanelChrome actionIdPrefix={d} />
          <RemoteThreadRightPanelChrome />
          <W.HeaderAction
            actionId={`${d}-panel-toggles`}
            align="end"
            order={300}
            slotPosition="right"
          >
            <HeaderPanelToggleButton
              label={s.formatMessage(threadPanelMessages.toggleSidePanel)}
              disabled={!e.showReviewTab}
              pressed={c}
              shortcut={u}
              onClick={() => Qt(n)}
            >
              {c ? (
                <Je className="icon-sm rotate-180" />
              ) : (
                $.jsx(ut, {
                  className: "icon-sm rotate-180",
                })
              )}
            </HeaderPanelToggleButton>
          </W.HeaderAction>
        </>
      ) : (
        <>
          {l && e.threadType === "local" && e.conversationId != null
            ? $.jsx(LocalProjectHeaderAction, {
                conversationId: e.conversationId,
              })
            : null}
          <ThreadBottomPanelChrome actionIdPrefix={d} />
          <LocalThreadRightPanelChrome conversationId={e.conversationId} />
        </>
      )}
    </>
  );
}
function RemoteThreadRightPanelChrome() {
  let t = g(D),
    n = re(t);
  let r = n,
    i = <BrowserTabTitleSynchronizer browserConversationId={r} />;
  let a = (
    <W.RightPanelOutlet>
      <W.RightPanelTabs />
    </W.RightPanelOutlet>
  );
  return (
    <>
      {i}
      {a}
    </>
  );
}
function ThreadBottomPanelChrome(e) {
  let { actionIdPrefix } = e,
    r = g(D),
    i = B(),
    a = y(lt),
    o = y(ze) !== false,
    s = y(ft),
    c = M(G, "toggleBottomPanel"),
    l = y(_t.tabs$).length,
    u = y(He) === "ready",
    d = u && Qe(r);
  let f = d,
    m = () => {
      if (o) {
        if (a) {
          dt(r, "bottom");
          return;
        }
        if (l === 0 && f) {
          qe(r);
          scrollBottomPanelIntoView();
          return;
        }
        st(r, "bottom", {
          activateFallbackTab: true,
          allowEmpty: true,
        }) &&
          r.get(Be) &&
          scrollBottomPanelIntoView();
      }
    };
  let h = m;
  Me("toggle-bottom-panel", h);
  let _;
  _ = () => {
    f && Ve(r, undefined, s);
  };
  Me("toggle-terminal", _);
  R("toggleBottomPanel", h);
  let v;
  v = () => {
    f && Ve(r, undefined, s);
  };
  R("toggleTerminal", v);
  let b = <BottomPanelLauncherContextMenuItem />;
  let x = (
    <W.BottomPanelOutlet>
      <W.BottomPanelTabs />
    </W.BottomPanelOutlet>
  );
  let S = u ? (
    <W.BottomPanelTabListAfterSticky>
      {$.jsx(ThreadPanelOpenTabDropdown, {
        target: "bottom",
        title: i.formatMessage({
          id: "thread.bottomPanel.openTab",
          defaultMessage: "Open bottom panel tab",
          description:
            "Button label for opening another tab from the thread bottom panel",
        }),
      })}
    </W.BottomPanelTabListAfterSticky>
  ) : null;
  let C = i.formatMessage({
    id: "thread.bottomPanel.close",
    defaultMessage: "Close",
    description: "Button label for closing the thread bottom panel",
  });
  let w = () => dt(r, "bottom");
  let T = <E className="icon-xs" />;
  let O = (
    <W.BottomPanelTabListAfter>
      {$.jsx(p, {
        color: "ghost",
        size: "toolbar",
        uniform: true,
        title: C,
        onClick: w,
        children: T,
      })}
    </W.BottomPanelTabListAfter>
  );
  let k = o ? (
    <W.HeaderAction
      actionId={`${actionIdPrefix}-bottom-panel-toggle`}
      align="end"
      order={200}
      slotPosition="right"
    >
      <HeaderPanelToggleButton
        label={i.formatMessage({
          id: "threadPage.toggleBottomPanel",
          defaultMessage: "Toggle bottom panel",
          description: "Toggles the bottom panel visibility",
        })}
        pressed={a}
        shortcut={c}
        onClick={h}
      >
        {a ? (
          <BottomPanelOpenIcon className="icon-sm" />
        ) : (
          <BottomPanelClosedIcon className="icon-sm" />
        )}
      </HeaderPanelToggleButton>
    </W.HeaderAction>
  ) : null;
  return (
    <>
      {b}
      {x}
      {S}
      {O}
      {k}
    </>
  );
}
function ThreadPanelOpenTabDropdown(e) {
  let { target, title } = e,
    i = {
      target,
    };
  let { actions, hasOutputArtifacts, onOpenArtifact, outputArtifacts } =
      buildThreadPanelNewTabModel(i),
    l = ot(target);
  let u = y(l.tabs$).length,
    d = kr.useRef(null);
  if (target === "right" && u === 0) return null;
  let f = (event) => {
    let t = d.current;
    t != null && ((d.current = null), event.preventDefault(), t());
  };
  let m = $.jsx(w, {
    className: "icon-xs",
  });
  let h = $.jsx(p, {
    className:
      "data-[state=open]:!bg-token-foreground/5 data-[state=open]:!text-token-foreground",
    color: "ghost",
    size: "toolbar",
    title,
    uniform: true,
    children: m,
  });
  let g = (e) => {
    if (e.deferSelectionUntilDropdownClose === true) {
      d.current = e.onSelect;
      return;
    }
    e.onSelect();
  };
  let v = (
    <ThreadPanelNewTabMenuContent
      actions={actions}
      hasOutputArtifacts={hasOutputArtifacts}
      onActionSelect={g}
      onOpenArtifact={onOpenArtifact}
      outputArtifacts={outputArtifacts}
    />
  );
  return $.jsx(_, {
    align: "start",
    contentWidth: "panel",
    onCloseAutoFocus: f,
    triggerButton: h,
    children: v,
  });
}
function BottomPanelLauncherContextMenuItem() {
  let t = g(N),
    n = y(ze) !== false,
    r = we({
      id: "appShell.header.bottomPanel",
      defaultMessage: "Bottom panel",
      description:
        "Header context menu checkbox that toggles the bottom panel launcher button",
    });
  let i = () => {
    ct(t, !n);
  };
  return (
    <W.HeaderContextMenuItem
      checked={n}
      id="toggle-bottom-panel-launcher"
      message={r}
      type="checkbox"
      onSelect={i}
    />
  );
}
function LocalThreadRightPanelChrome(e) {
  let n = g(D),
    r = re(n);
  let i = r,
    a = B(),
    o = y(gt),
    s = y(He) === "ready",
    c = M(G, "toggleSidePanel"),
    l = <BrowserTabTitleSynchronizer browserConversationId={i} />;
  let f = (
    <W.RightPanelOutlet>
      <W.RightPanelTabs />
    </W.RightPanelOutlet>
  );
  let p = s ? (
    <>
      <W.RightPanelTabsEmptyState>
        {$.jsx(RightPanelEmptyState, {})}
      </W.RightPanelTabsEmptyState>
      <W.RightPanelTabListAfterSticky>
        {$.jsx(ThreadPanelOpenTabDropdown, {
          target: "right",
          title: a.formatMessage({
            id: "thread.sidePanel.openTab",
            defaultMessage: "Open side panel tab",
            description:
              "Button label for opening another tab from the thread side panel",
          }),
        })}
      </W.RightPanelTabListAfterSticky>
    </>
  ) : null;
  let m = a.formatMessage(threadPanelMessages.toggleSidePanel);
  let h = () => Qt(n);
  let _ = o ? (
    <Je className="icon-sm rotate-180" />
  ) : (
    $.jsx(ut, {
      className: "icon-sm rotate-180",
    })
  );
  let v = (
    <W.HeaderAction
      actionId="thread-side-panel-close"
      align="end"
      slotPosition="right"
      order={300}
    >
      <HeaderPanelToggleButton label={m} pressed={o} shortcut={c} onClick={h}>
        {_}
      </HeaderPanelToggleButton>
    </W.HeaderAction>
  );
  return (
    <>
      {l}
      {null}
      {null}
      {f}
      {p}
      {v}
    </>
  );
}
function BrowserTabTitleSynchronizer(e) {
  let { browserConversationId } = e,
    r = y(_t.tabs$),
    i = B(),
    a = y(rt.tabs$);
  if (browserConversationId == null) return null;
  let o = i.formatMessage({
    id: "thread.sidePanel.emptyBrowserTab",
    defaultMessage: "New tab",
    description: "Title for an empty browser tab in the thread side panel",
  });
  let s = o,
    c;
  {
    let e = {
      bottom: r,
      right: a,
    };
    c = mt.flatMap((item) =>
      e[item].map((_item) => {
        let r = m(_item, browserConversationId);
        return r == null
          ? null
          : $.jsx(
              tn,
              {
                browserTabId: r,
                browserConversationId,
                browserTabFallbackTitle: s,
                existingTabTitle: _item.title,
                target: item,
              },
              `${item}:${_item.tabId}`,
            );
      }),
    );
  }
  return <>{c}</>;
}
function scrollBottomPanelIntoView() {
  requestAnimationFrame(() => {
    let e = document.querySelector(BOTTOM_PANEL_TABPANEL_SELECTOR);
    e != null && Rt(e);
  });
}
var Q, kr, $, BOTTOM_PANEL_TABPANEL_SELECTOR, threadPanelMessages;
const initThreadAppShellChromeChunk = e(() => {
  Q = V();
  o();
  kr = t(x(), 1);
  z();
  Le();
  T();
  et();
  Ge();
  vt();
  k();
  le();
  Lt();
  initBottomPanelClosedIcon();
  initBottomPanelOpenIcon();
  L();
  bt();
  Re();
  O();
  ge();
  wt();
  Ke();
  r();
  b();
  We();
  Ct();
  A();
  Ue();
  Tt();
  jn();
  Hn();
  Kn();
  sr();
  br();
  Kt();
  nt();
  Ut();
  $ = u();
  BOTTOM_PANEL_TABPANEL_SELECTOR =
    '[role="tabpanel"][data-app-shell-tab-panel-controller="bottom"]';
  threadPanelMessages = Oe({
    toggleSidePanel: {
      id: "thread.sidePanel.toggle",
      defaultMessage: "Toggle side panel",
      description: "Toggles the thread side panel in a local or new thread",
    },
  });
});
export {
  initThreadAppShellChromeChunk,
  initThreadAppShellLocalConversationDependency,
  ThreadAppShellChrome,
};
