// Restored from ref/webview/assets/composer-external-footer-vmMFWT5Y.js
// Composer external footer controls from the Codex webview bundle.
import { once as e, toEsModule as t } from "../runtime/commonjs-interop";
import {
  $N as n,
  $P as r,
  AB as i,
  Al as a,
  Ao as o,
  BP as s,
  BV as c,
  DL as l,
  DN as u,
  Ev as d,
  FB as f,
  Ga as p,
  Gi as ee,
  Gj as m,
  Gu as h,
  Hh as g,
  IB as _,
  JV as v,
  KE as y,
  Ka as b,
  Ku as x,
  Mu as S,
  Nu as C,
  ON as w,
  Ol as T,
  Op as E,
  Ov as D,
  PB as O,
  QN as k,
  QP as A,
  Qh as j,
  SF as te,
  TM as M,
  Tm as ne,
  Tp as re,
  Uh as ie,
  VE as ae,
  VP as N,
  Wa as oe,
  XR as se,
  Xh as ce,
  Yh as le,
  Zi as ue,
  _m as de,
  aP as fe,
  bF as P,
  cm as pe,
  fV as F,
  gp as me,
  hM as I,
  iF as he,
  ko as ge,
  mv as L,
  oP as _e,
  om as ve,
  pI as ye,
  pM as R,
  qE as be,
  qV as z,
  qa as xe,
  qi as B,
  qj as Se,
  rF as Ce,
  sF as V,
  wM as H,
  wl as we,
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js";
import {
  Cn as U,
  Dd as Te,
  Gl as Ee,
  Od as De,
  Sn as Oe,
  So as ke,
  Wl as Ae,
  d as je,
  l as Me,
  wo as Ne,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~ovcriy74-KTK3czaX.js";
import {
  Ht as Pe,
  Ut as Fe,
  jn as W,
  kn as Ie,
} from "./app-initial~app-main~automations-page-bHJfYUGr.js";
import {
  Hs as Le,
  Ro as Re,
  Ss as ze,
  Vo as Be,
  Vs as Ve,
  cs as He,
  da as Ue,
  ns as We,
  on as Ge,
  ss as Ke,
  ua as qe,
  xs as Je,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~kvpgbdy1-mhRp2VYQ.js";
import {
  Bm as Ye,
  Bu as Xe,
  Hm as Ze,
  Rm as Qe,
  Vm as $e,
  Vu as et,
  nr as tt,
  rr as nt,
  zm as rt,
} from "./app-initial~app-main~onboarding-page~profile-QLPeiknY.js";
import {
  _ as it,
  v as at,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CIs8dplf.js";
import {
  initCreateGitRepositoryChunk as st,
  useCreateGitRepository as ot,
} from "../git/git-review-primitives";
import {
  a as ct,
  i as G,
  n as K,
  t as lt,
} from "./app-initial~app-main~projects-index-page~hotkey-window-new-thread-page~hotkey-window-home-p~hswrsggc-D-_P9low.js";
import { n as q, t as ut } from "./worktree-environment-dropdown-Bohd1-E0.js";
import {
  ComposerFooterBranchBadge as dt,
  ComposerFooterBranchSwitcher as mt,
  ComposerFooterInlineBranchSwitcher as ht,
  initComposerFooterBranchBadgeChunk as pt,
  initComposerFooterBranchSwitcherChunk as J,
  initComposerFooterInlineBranchSwitcherChunk as ft,
} from "./composer-footer-branch-switcher";
import {
  a as gt,
  c as _t,
  i as vt,
  n as yt,
  o as bt,
  r as xt,
  s as St,
  t as Ct,
} from "./local-remote-dropdown-BcmhHtfg.js";
function wt(e) {
  let { composerMode, setComposerMode } = e,
    i = f(we),
    a = _(Je),
    [o, s] = Y.useState(false),
    c = De(),
    { data, isLoading } = ie(
      c.cwd,
      c.hostConfig,
      "cloud_follow_up_local_remote_dropdown",
    ),
    d = data?.root != null,
    p = a?.type === "cloud" && a.hasAppliedCodeLocally,
    m,
    h;
  m = () => {
    p && He(i, "local");
  };
  h = [p, i];
  Y.useEffect(m, h);
  let g, v;
  g = () => {
    isLoading || d || He(i, "local");
  };
  v = [d, isLoading, i];
  Y.useEffect(g, v);
  let y = composerMode === "local" ? <V {...Z.local} /> : <V {...Z.cloud} />;
  let b = y,
    x = <V {...Z.tooltip} />;
  let S =
    composerMode === "cloud" ? (
      X.jsx(tt, {
        className: "icon-xs",
      })
    ) : (
      <Oe className="icon-xs" />
    );
  let C = (
    <R tooltipContent={x}>
      <G
        categoryLabel={null}
        collapse="xs"
        icon={S}
        indicator="chevron"
        value={b}
        valueClassName="max-w-40"
      />
    </R>
  );
  let w = (
    <B.Title>
      <V
        id="composer.mode.newTask.header"
        defaultMessage="Continue in"
        description="Header label above agent mode options"
      />
    </B.Title>
  );
  let T = composerMode === "local" ? H : undefined,
    E = () => {
      setComposerMode("local");
      s(false);
    };
  let D = <V {...Z.local} />;
  let O = (
    <B.Item LeftIcon={Oe} RightIcon={T} onClick={E}>
      {D}
    </B.Item>
  );
  let k = d ? (
    <B.Item
      LeftIcon={tt}
      RightIcon={composerMode === "cloud" ? H : undefined}
      onClick={() => {
        setComposerMode("cloud");
        s(false);
      }}
    >
      <V {...Z.cloud} />
    </B.Item>
  ) : null;
  let A = (
    <div className="flex w-44 flex-col">
      {w}
      {O}
      {k}
    </div>
  );
  return X.jsx(ee, {
    open: o,
    onOpenChange: s,
    triggerButton: C,
    children: A,
  });
}
var Tt,
  Y,
  X,
  Z,
  Et = e(() => {
    Tt = z();
    i();
    Y = t(v(), 1);
    he();
    ue();
    I();
    g();
    Te();
    M();
    nt();
    U();
    a();
    ct();
    ze();
    We();
    X = c();
    Z = Ce({
      local: {
        id: "composer.cloudFollowUp.local",
        defaultMessage: "Local",
        description: "Local follow-up option",
      },
      cloud: {
        id: "composer.cloudFollowUp.cloud",
        defaultMessage: "Cloud",
        description: "Cloud follow-up option",
      },
      tooltip: {
        id: "composer.cloudFollowUp.whereRun",
        defaultMessage: "Where should this follow-up run?",
        description: "Tooltip for choosing between local and cloud follow-ups",
      },
    });
  });
function Dt(e) {
  let { startingState, setStartingState } = e,
    [i, a] = At.useState(false),
    o =
      startingState === "working-tree" ? (
        <V {...jt.workingTree} />
      ) : (
        <V {...jt.directFollowUp} />
      );
  let s = o,
    c = (
      <div className="flex flex-col gap-2">
        <V
          id="composer.remote.startingPoint"
          defaultMessage="What code should this task start from?"
          description="Section label for remote starting point selector"
        />
      </div>
    );
  let l = (
    <V
      id="composer.followUpStartingState.footerCategory"
      defaultMessage="Starting from"
      description="Category label for the follow-up starting state control in the composer footer"
    />
  );
  let u = startingState === "working-tree",
    d = Q.jsx(ge, {
      className: "icon-xs",
    });
  let f = Q.jsx(dt, {
    borderColor: "border-token-side-bar-background",
    badgeEnabled: u,
    children: d,
  });
  let p = (
    <R tooltipContent={c}>
      <G
        categoryLabel={l}
        collapse="none"
        icon={f}
        indicator="chevron"
        value={s}
        valueClassName="max-[440px]:hidden"
      />
    </R>
  );
  let m = (
    <V
      id="composer.remote.currentEditsSuffix.followUp"
      defaultMessage="Create a new task that references this cloud task."
      description="Suffix text indicating the selection includes current edits"
    />
  );
  let h = startingState === "working-tree" ? H : undefined,
    g = () => {
      setStartingState("working-tree");
      a(false);
    };
  let _ = <V {...jt.workingTree} />;
  let v = (
    <R tooltipContent={m}>
      <B.Item LeftIcon={Ot} RightIcon={h} onClick={g}>
        {_}
      </B.Item>
    </R>
  );
  let y = startingState === "direct-follow-up" ? H : undefined,
    b = () => {
      setStartingState("direct-follow-up");
      a(false);
    };
  let x = <V {...jt.directFollowUp} />;
  let S = (
    <B.Item LeftIcon={ge} RightIcon={y} onClick={b}>
      {x}
    </B.Item>
  );
  let C = (
    <div className="flex flex-col gap-1 pt-1">
      {v}
      {S}
    </div>
  );
  return Q.jsx(ee, {
    open: i,
    onOpenChange: a,
    triggerButton: p,
    children: C,
  });
}
function Ot(e) {
  let { className } = e;
  return Q.jsx(dt, {
    borderColor: "border-token-dropdown-background",
    children: Q.jsx(ge, {
      className,
    }),
  });
}
var kt,
  At,
  Q,
  jt,
  Mt = e(() => {
    kt = z();
    At = t(v(), 1);
    he();
    pt();
    ue();
    I();
    o();
    M();
    Ge();
    ct();
    Q = c();
    jt = Ce({
      workingTree: {
        id: "composer.remote.localWorkingTree",
        defaultMessage: "Use local changes",
        description:
          "Label for local working tree selection in remote composer",
      },
      directFollowUp: {
        id: "composer.remote.directFollowUp",
        defaultMessage: "Don't use local changes",
        description: "Label for direct follow-up selection in remote composer",
      },
    });
  });
function Nt() {
  let { data } = _(It);
  if (!(data?.hasCustomCliExecutable ?? false)) return null;
  let n = (
    <V
      id="composer.customCliTooltip"
      defaultMessage="Using a custom CLI executable"
      description="Tooltip text shown when the user has set a custom Codex CLI executable in their VS Code settings."
    />
  );
  return (
    <R tooltipContent={n}>
      {Ft.jsx(u, {
        color: "ghost",
        size: "composerSm",
        uniform: true,
        className: "-mx-2",
        children: Ft.jsx(qe, {
          className: "icon-xs text-token-editor-warning-foreground",
        }),
      })}
    </R>
  );
}
var Pt,
  Ft,
  It,
  Lt = e(() => {
    Pt = z();
    i();
    he();
    w();
    I();
    Ue();
    r();
    _e();
    n();
    Ft = c();
    It = k(A, "has-custom-cli-executable", {
      staleTime: fe.FIVE_SECONDS,
    });
  });
function Rt(e) {
  let {
      variant,
      composerMode,
      setComposerMode,
      isResponseInProgress,
      worktreeEnvironmentHostId,
      worktreeEnvironmentWorkspaceRoot,
      codexHome,
      showRuntimeControls,
      hideRunLocationDropdown,
      showWorkspaceDropdown,
      gitRootForStartingState,
      showFooterBranchWhen,
      freeUpsellButton,
      remoteConfig,
      activeProjectIdOverride,
      localRemoteExecutionTarget,
    } = e,
    k = f(we),
    A = d(),
    j = D(),
    M = _(Je),
    ne = _(Re),
    ie = _(Be),
    ae = Le(),
    N = Ne();
  let ue = N,
    fe = composerMode !== "cloud" && M?.type !== "cloud",
    P = T(k);
  let F = P,
    I = O(re, F),
    he = F != null && !I,
    L = De(F),
    _e = O(pe, F),
    ve = O(de, F),
    R = O(Vt, F),
    z = M != null || R,
    xe = remoteConfig.currentHostId ?? "local",
    B = M?.type,
    Ce = at({
      composerMode,
      draftRemoteHostId: xe,
      followUpType: B,
      hasStartedBranchConversation: R,
    });
  let H = Ce,
    U = H ? xe : _e,
    Te = !H && U !== "local",
    Oe = O(me, F),
    { data } = x(se.THREAD_PROJECT_ASSIGNMENTS),
    Ae = ye(
      te({
        cwd: Oe,
        assignment: F == null ? undefined : data?.[F],
      }),
      C(L.hostId) ?? codexHome,
    ),
    Me = Se("2700454473"),
    Pe = variant === "home" && Me,
    Fe = Se("1115442235"),
    W = Ae,
    ze = O(Ee, F),
    Ve = be(),
    He = Ve.find((item) => item.hostId === U) ?? null;
  let Ue = He,
    We =
      U === "local"
        ? null
        : Te
          ? L.cwd
          : remoteConfig.getProjectPathForHostId(U);
  let Ge = We,
    qe = Ve.find((item) => item.hostId === remoteConfig.currentHostId) ?? null;
  let Ye = qe,
    Xe = remoteConfig.getProjectPathForHostId(remoteConfig.currentHostId);
  let Ze = Xe;
  Ue?.displayName;
  Ye?.displayName;
  let tt = U === "local" ? null : (Ue?.displayName ?? null),
    nt = {
      hostId: U,
      connectionDisplayName: tt,
      projectPath: Ge,
    };
  let it = Ye?.displayName ?? null,
    st = {
      hostId: remoteConfig.currentHostId,
      connectionDisplayName: it,
      projectPath: Ze,
    };
  let ct = {
    isAttachedToStartedTask: z,
    existingRemoteThreadState: nt,
    draftNewThreadRemoteSelectionState: st,
  };
  let G = ct,
    K = L.hostConfig,
    q =
      O(b, {
        hostConfig: K,
        operationSource: "composer_content",
      }).data?.available === true &&
      fe &&
      !he
        ? L.cwd
        : null,
    dt = {
      cwd: q,
      enabled: true,
      hostConfig: K,
      operationSource: "composer_content",
      watchForGitInit: false,
    };
  let J = O(le, dt),
    ft = {
      cwd: q,
      enabled: true,
      hostConfig: K,
      operationSource: "composer_content",
      watchForGitInit: false,
    };
  let pt = O(ce, ft),
    vt = {
      cwd: q,
      hostConfig: K,
      showErrorToast: true,
    };
  let { canCreateGitRepository, createGitRepository, isCreatingGitRepository } =
      ot(vt),
    Tt = q != null && J != null,
    Y = fe && Tt && J?.root == null,
    X = !canCreateGitRepository || isCreatingGitRepository || !Tt || pt,
    Z = Y ? null : freeUpsellButton,
    Et = composerMode === "worktree",
    Ot = Et ? worktreeEnvironmentWorkspaceRoot : null,
    kt = {
      hostId: worktreeEnvironmentHostId,
      workspaceRoot: Ot,
    };
  let { environments, isLoading, error, resolvedConfigPath, updateSelection } =
      je(kt),
    Ft =
      !M && Et
        ? $.jsx(ut, {
            environments,
            isLoading,
            hasError: error != null,
            selectedConfigPath: resolvedConfigPath,
            onSelectConfigPath: updateSelection,
            onOpenSettings: () => {
              et(k, worktreeEnvironmentHostId);
              j(
                Ie({
                  workspaceRoot: worktreeEnvironmentWorkspaceRoot,
                }),
                {
                  state: {
                    hostId: worktreeEnvironmentHostId,
                    returnTo: `${A.pathname}${A.search}${A.hash}`,
                  },
                },
              );
            },
          })
        : null;
  let It = Ft,
    Lt,
    Rt;
  Rt = Symbol.for("react.early_return_sentinel");
  bb0: {
    let e = s(
        "flex flex-nowrap items-center gap-1 overflow-hidden",
        variant === "home"
          ? s(
              "-mx-px -mt-4.5 rounded-b-2xl bg-token-side-bar-background px-2 pt-[25px] pb-2 dark:bg-token-bg-fog",
              Pe ? "electron:mx-4 electron:rounded-b-xl" : "electron:mx-0",
            )
          : "pr-2",
      ),
      o =
        !M && (composerMode === "cloud" || composerMode === "worktree")
          ? $.jsx(oe, {
              electron: true,
              browser: ae != null,
              children: $.jsx(mt, {
                startingState: ne,
                setStartingState: (e) => {
                  Ke(k, "asyncThreadStartingState", e);
                },
                hostConfig: K,
                gitRootOverride: gitRootForStartingState,
                branchSource:
                  composerMode === "worktree" ? "worktree" : "cloud",
              }),
            })
          : null;
    let c = o,
      d =
        Fe &&
        xt({
          isCompactWindow: ue,
        }) &&
        F != null &&
        L.cwd != null
          ? {
              conversationTitle: ze,
              cwd: l(L.cwd),
              isWorktreeConversation: Ae,
            }
          : null;
    let f = d,
      p = F != null && U !== "local" && ve?.role === "follower",
      _ =
        (showFooterBranchWhen === "always" || composerMode === "local") &&
        !p &&
        !he &&
        !pt;
    J?.root;
    let y =
      _ && !Y
        ? $.jsx(ht, {
            gitRoot: J?.root ?? null,
            hostConfig: K,
            localConversationId: F,
            shouldShow: true,
            align: "start",
          })
        : null;
    let b = y,
      x =
        M?.type === "cloud" ? (
          $.jsx(wt, {
            composerMode,
            setComposerMode,
          })
        ) : (
          <Ct
            composerMode={composerMode}
            setComposerMode={setComposerMode}
            conversationId={F}
            executionTargetOverride={localRemoteExecutionTarget}
            footerRemoteState={G}
            disabled={W}
            hideModeDropdown={hideRunLocationDropdown}
            allowWorktree={!M && !isResponseInProgress}
            threadHandoff={f}
            worktreeLabelOnly={W}
          />
        );
    let S = x,
      C =
        showWorkspaceDropdown && _t(composerMode) && !M
          ? $.jsx(oe, {
              electron: true,
              browser: true,
              children: $.jsx(lt, {
                activeProjectIdOverride,
                allowLocalProjectActions: true,
                variant: variant === "home" ? "home" : "default",
              }),
            })
          : null;
    let T = C,
      D = !!M || false;
    let O = D,
      A = O ? <Nt /> : null;
    let j = A,
      te =
        composerMode === "cloud" &&
        M?.type === "cloud" &&
        M.hasAppliedCodeLocally ? (
          <Dt
            startingState={ie}
            setStartingState={(e) => {
              Ke(k, "followUpCloudStartingState", e);
            }}
          />
        ) : null;
    let re = te,
      N = H
        ? G.draftNewThreadRemoteSelectionState
        : G.existingRemoteThreadState,
      se =
        _ && Y
          ? $.jsxs(u, {
              className: "px-0",
              color: "ghost",
              size: "composerSm",
              disabled: X,
              onClick: () => {
                X || createGitRepository();
              },
              children: [
                $.jsx(ge, {
                  className: "icon-xs",
                }),
                $.jsx(rt, {
                  collapse: "sm",
                  className: "max-w-40 truncate text-sm",
                  children: isCreatingGitRepository ? (
                    <V
                      id="codex.review.noDiff.gitInit.creating"
                      defaultMessage="Creating…"
                      description="Button label shown while git init is running from the diff empty state"
                    />
                  ) : (
                    <V
                      id="codex.review.noDiff.gitInit.createRepository"
                      defaultMessage="Create git repository"
                      description="Button label to create a git repository from the diff empty state"
                    />
                  ),
                }),
              ],
            })
          : null;
    let ce = se,
      le = composerMode === "local" && N.hostId != null && N.hostId !== "local",
      de = le ? (
        <div className="flex min-w-0 items-center gap-1">
          {$.jsx(zt, {
            hostId: N.hostId,
            connectionDisplayName: N.connectionDisplayName,
            projectPath: N.projectPath,
          })}
        </div>
      ) : null;
    let fe = de,
      P = showRuntimeControls && true,
      pe =
        composerMode === "cloud"
          ? $.jsx(oe, {
              electron: true,
              browser: true,
              children: $.jsx(gt, {
                composerMode,
                conversationId: F,
                disabled: W,
                setComposerMode,
              }),
            })
          : null;
    let me = pe,
      I =
        M?.type === "cloud" ? (
          <>
            {b}
            {re}
          </>
        ) : (
          <>
            {b}
            {me}
            {It}
            {c}
          </>
        );
    let _e = I,
      ye =
        M?.type === "cloud" ? (
          <>
            {variant === "home" ? b : null}
            {S}
            {variant === "default" ? b : null}
            {re}
          </>
        ) : (
          <>
            {S}
            {_e}
          </>
        );
    let R = ye,
      be = !!(fe || ce || Z || j),
      z = variant === "home" ? T : null,
      xe = P ? R : null,
      B = variant === "default" ? T : null,
      Se = (
        <>
          {z}
          {xe}
          {B}
        </>
      );
    let Ce = Se,
      we = P ? S : null,
      Te = P ? _e : null,
      Ee = (
        <>
          {we}
          {T}
          {Te}
        </>
      );
    let De = Ee,
      Oe =
        P && be ? (
          <div className="flex min-w-0 shrink-0 items-center gap-3">
            {fe}
            {ce}
            {Z}
            {j}
          </div>
        ) : null;
    let ke = Oe;
    if (Pe) {
      let n;
      n = (
        <div className="horizontal-scroll-fade-mask hide-scrollbar flex min-w-0 flex-1 flex-nowrap items-center gap-1 overflow-x-auto overflow-y-hidden pr-4 [--edge-fade-distance:1rem]">
          {De}
        </div>
      );
      Rt = (
        <Qe
          className={s(
            e,
            $e.homeExternalFooter,
            "flex-nowrap gap-2 overflow-hidden",
          )}
          responsive={false}
        >
          {n}
          {ke}
        </Qe>
      );
      break bb0;
    }
    Lt = (
      <Qe
        className={s(
          e,
          "flex-wrap gap-2 overflow-visible",
          variant === "default" && "pl-2",
        )}
      >
        <div className="flex min-w-0 flex-1 flex-nowrap items-center gap-1">
          {Ce}
        </div>
        {ke}
      </Qe>
    );
  }
  return Rt === Symbol.for("react.early_return_sentinel") ? Lt : Rt;
}
function zt(e) {
  let { hostId, connectionDisplayName, projectPath } = e;
  if (hostId == null) return null;
  let a = projectPath == null,
    o = connectionDisplayName ?? hostId,
    s = <span className="max-w-40 min-w-0 truncate">{o}</span>;
  let c = <Pe hostId={hostId} />;
  let l = $.jsxs(rt, {
    collapse: "sm",
    className: "flex min-w-0 items-center gap-1 text-sm",
    children: [s, c],
  });
  return (
    <R tooltipContent={projectPath} disabled={a}>
      {l}
    </R>
  );
}
var Bt, $, Vt;
e(() => {
  Bt = z();
  N();
  i();
  P();
  he();
  L();
  Fe();
  E();
  ke();
  w();
  I();
  p();
  xe();
  j();
  st();
  S();
  h();
  Te();
  o();
  Ae();
  Me();
  y();
  r();
  a();
  W();
  Xe();
  ae();
  m();
  Ve();
  J();
  bt();
  Et();
  Mt();
  ze();
  Ye();
  ft();
  St();
  We();
  Lt();
  vt();
  K();
  yt();
  it();
  q();
  Ze();
  $ = c();
  Vt = F(A, (e, { get }) => {
    let n = get(ne, e) ?? 0,
      r = get(ve, e) ?? 0;
    return n > 0 || r > 0;
  });
})();

const ComposerExternalFooter = Rt;

export { ComposerExternalFooter };
