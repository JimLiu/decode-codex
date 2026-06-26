// Restored from ref/webview/assets/git-branch-switcher-BokkKYIT.js
// Git branch switching controls and queries from the Codex webview bundle.
import { once as e, toEsModule as t } from "../runtime/commonjs-interop";
import {
  $N as n,
  $P as r,
  $h as i,
  AB as a,
  AV as o,
  Ai as s,
  BV as c,
  DL as l,
  DN as u,
  Di as d,
  Ei as f,
  FB as p,
  GN as m,
  Gi as h,
  HF as g,
  Hh as _,
  JV as v,
  Lj as y,
  Nh as b,
  ON as x,
  Op as S,
  PB as C,
  QP as w,
  Rj as T,
  Ti as ee,
  Uh as E,
  VN as D,
  Vh as O,
  Zi as k,
  aP as te,
  bF as A,
  cM as j,
  eg as M,
  fu as N,
  gV as P,
  gg as F,
  hg as I,
  iF as L,
  jh as R,
  lF as ne,
  ng as z,
  oP as B,
  pu as re,
  qV as V,
  qi as ie,
  sF as H,
  tP as U,
  tg as W,
  uM as ae,
  va as G,
  wi as K,
  wm as q,
  xa as J,
  zV as Y,
  zh as oe,
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js";
import {
  Dl as se,
  Tl as ce,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~ovcriy74-KTK3czaX.js";
import {
  Dl as X,
  Jl as le,
  Kl as ue,
  Ol as de,
  Xl as fe,
  Yl as pe,
  Zl as me,
  au as he,
  bl as ge,
  cu as _e,
  ou as ve,
  ql as ye,
  ru as be,
  su as xe,
  yl as Se,
} from "./app-initial~app-main~onboarding-page~profile-QLPeiknY.js";
import {
  DiffStats as Ce,
  initDiffStatsChunk as we,
} from "./git-review-primitives";
function Te({ cwd, enabled, hostConfig, operationSource }) {
  return JSON.stringify({
    cwd: cwd ?? null,
    enabled,
    hostConfig,
    operationSource,
  });
}
function Ee({ cwd, enabled, hostConfig, operationSource, query }) {
  return JSON.stringify({
    cwd: cwd ?? null,
    enabled,
    hostConfig,
    operationSource,
    query,
  });
}
var De,
  Oe,
  ke = e(() => {
    a();
    r();
    B();
    b();
    z();
    M();
    De = P(
      w,
      ({ cwd, enabled, hostConfig, operationSource }) =>
        W(cwd, i(hostConfig), hostConfig, operationSource, {
          enabled,
        }),
      {
        key: Te,
      },
    );
    Oe = P(
      w,
      ({ cwd, enabled, hostConfig, operationSource, query }, { get }) => {
        let s = get(De, {
          cwd,
          enabled,
          hostConfig,
          operationSource,
        }).data;
        return R(
          "search-branches",
          s,
          s == null
            ? null
            : {
                root: s.root,
                operationSource,
                query,
                limit: 20,
              },
          i(hostConfig),
          hostConfig,
          {
            enabled,
            select: (e) => e.branches,
            staleTime: te.FIVE_SECONDS,
          },
        );
      },
      {
        key: Ee,
      },
    );
  });
function Ae(e, t, n, r) {
  let a = r === undefined ? {} : r;
  let { staleTime, ...rest } = a;
  let c = String(e),
    u = l(c);
  let d = {
    cwd: u,
    operationSource: n,
  };
  let f = staleTime ?? te.FIVE_SECONDS,
    p;
  return (
    (p = {
      staleTime: f,
      ...rest,
    }),
    O(e, t, "status-summary", d, n, p)
  );
}
var je,
  Me = e(() => {
    je = V();
    A();
    B();
    b();
  });
function Ne(e, t, n, r) {
  let a = (e) => {
    let { root } = e;
    return {
      operationSource: n,
      root,
      limit: 100,
    };
  };
  let o;
  return (
    (o = {
      select: Pe,
      staleTime: te.FIVE_SECONDS,
      ...r,
    }),
    O(e, t, "recent-branches", a, n, o)
  );
}
function Pe(e) {
  return e.branches;
}
var Fe,
  Ie = e(() => {
    Fe = V();
    B();
    b();
  });
function Le(e, t, n, r) {
  let o = Y(),
    { data } = E(e, t, n),
    c = i(t);
  let l = c,
    u = e ?? null,
    d = ["vscode", "git-checkout-branch", u, t.id];
  let f = async (e, t, n, i, a) => {
    data &&
      e?.status === "success" &&
      oe(
        o,
        {
          commonDir: data.commonDir,
          root: data.root,
        },
        {
          changeType: "head",
          hostKey: l,
        },
      );
    r?.onSettled && (await r.onSettled(e, t, n, i, a));
  };
  let p = {
    source: n,
    mutationKey: d,
    ...r,
    onSettled: f,
  };
  let m = U("git-checkout-branch", p),
    h,
    g;
  h = (e, n) => {
    m.mutate(
      {
        ...e,
        hostId: t.id,
      },
      n,
    );
  };
  g = (e, n) =>
    m.mutateAsync(
      {
        ...e,
        hostId: t.id,
      },
      n,
    );
  return {
    ...m,
    mutate: h,
    mutateAsync: g,
  };
}
var Re,
  ze = e(() => {
    Re = V();
    o();
    b();
    M();
    _();
    n();
  });
function Be(e, t, n, r) {
  let o = Y(),
    { data } = E(e, t, n),
    c = i(t);
  let l = c,
    u = e ?? null,
    d = ["vscode", "git-create-branch", u, t.id];
  let f = async (e, t, n, i, a) => {
    data &&
      oe(o, data, {
        changeType: n?.mode === "synced" ? "synced-branch" : "head",
        hostKey: l,
      });
    r?.onSettled && (await r.onSettled(e, t, n, i, a));
  };
  let p = {
    source: n,
    mutationKey: d,
    ...r,
    onSettled: f,
  };
  let m = U("git-create-branch", p),
    h,
    g;
  h = (e, n) => {
    m.mutate(
      {
        ...e,
        hostId: t.id,
      },
      n,
    );
  };
  g = (e, n) =>
    m.mutateAsync(
      {
        ...e,
        hostId: t.id,
      },
      n,
    );
  return {
    ...m,
    mutate: h,
    mutateAsync: g,
  };
}
var Ve,
  He = e(() => {
    Ve = V();
    o();
    b();
    M();
    _();
    n();
  });
function Ue(e) {
  return Array.from(e)
    .filter((item) => !/\s/u.test(item) && !We.has(item))
    .join("");
}
var We,
  Ge = e(() => {
    We = new Set(["~", "^", ":", "?", "*", "[", "]", "\\"]);
  });
function Ke(e) {
  let {
      gitRoot,
      hostConfig,
      localConversationId,
      shouldShow,
      side = "top",
      align = "end",
      renderStaticBranch,
      renderControl,
      onOpenChange,
    } = e,
    g = p(w),
    _ = ne(),
    [v, y] = Z.useState(false),
    [b, x] = Z.useState(false),
    [S, T] = Z.useState(false),
    [ee, E] = Z.useState(false),
    [D, O] = Z.useState(false),
    [k, te] = Z.useState(0),
    [A, j] = Z.useState(null),
    M = [];
  let [N, P] = Z.useState(M),
    [I, L] = Z.useState("idle"),
    R = {
      cwd: gitRoot,
      enabled: shouldShow,
      hostConfig,
      operationSource: $,
      refetchOnWindowFocus: "always",
      staleTime: null,
    };
  let z = C(ce, R),
    B = z.data?.trim() ?? "",
    re = shouldShow && B.length > 0,
    V = C(q, localConversationId),
    ie = D || I !== "idle",
    H = Le(gitRoot, hostConfig, $),
    U = Be(gitRoot, hostConfig, $),
    W = gitRoot == null ? null : l(gitRoot);
  let G = W,
    K =
      G == null
        ? null
        : {
            cwd: G,
            hostId: hostConfig.id,
          };
  let J = K,
    Y = H.isPending || U.isPending,
    oe = _.formatMessage({
      id: "composer.footer.branchSwitch.tooltip",
      defaultMessage: "Switch branch",
      description: "Tooltip shown for controls that switch git branches",
    }),
    se = () => {
      y(false);
    };
  let X = se,
    ue = (e) => {
      g.get(ae).danger(
        _.formatMessage(
          {
            id: "composer.footer.branchSwitch.checkoutError",
            defaultMessage: "Failed to switch branch: {message}",
            description:
              "Toast shown when switching local branches from the composer footer fails",
          },
          {
            message: e,
          },
        ),
      );
    };
  let de = ue,
    fe = (e) => {
      g.get(ae).danger(
        _.formatMessage(
          {
            id: "composer.footer.branchSwitch.createBranchError",
            defaultMessage: "Failed to create branch: {message}",
            description:
              "Toast shown when creating a branch from the composer footer fails",
          },
          {
            message: e,
          },
        ),
      );
    };
  let pe = fe,
    me = (e) => {
      let { errorType, conflictedPaths, nextAction } = e;
      return errorType === "blocked-by-working-tree-changes"
        ? (P(conflictedPaths ?? []),
          j(nextAction),
          X(),
          E(false),
          T(true),
          true)
        : false;
    };
  let he = me,
    ge = async (e) => {
      if (!(Y || gitRoot == null)) {
        if (e === B) {
          X();
          return;
        }
        try {
          let t = await H.mutateAsync({
            cwd: gitRoot,
            branch: e,
          });
          if (t.status === "error") {
            if (
              he({
                errorType: t.errorType,
                conflictedPaths: t.conflictedPaths,
                nextAction: {
                  type: "checkout",
                  branch: e,
                },
              })
            )
              return;
            de(t.error);
            return;
          }
          localConversationId != null && F(localConversationId, e);
          X();
        } catch (e) {
          let t = e;
          de(t instanceof Error ? t.message : String(t));
        }
      }
    },
    _e = async (e) => {
      if (!(Y || gitRoot == null))
        try {
          let t = await U.mutateAsync({
            cwd: gitRoot,
            branch: e,
            mode: "worktree",
            failIfExists: true,
          });
          if (t.status === "error") {
            pe(t.error);
            return;
          }
          let r = await H.mutateAsync({
            cwd: gitRoot,
            branch: e,
          });
          if (r.status === "error") {
            if (
              he({
                errorType: r.errorType,
                conflictedPaths: r.conflictedPaths,
                nextAction: {
                  type: "create-and-checkout",
                  branch: e,
                },
              })
            )
              return;
            de(r.error);
            E(false);
            return;
          }
          localConversationId != null && F(localConversationId, e);
          E(false);
        } catch (e) {
          let t = e;
          pe(t instanceof Error ? t.message : String(t));
        }
    };
  let ve = _e,
    ye = () => {
      O(false);
      L("idle");
      P([]);
      j(null);
    };
  let xe = ye,
    Se = (e) => {
      T(e);
      e || (P([]), j(null));
    };
  let Ce = Se,
    we = () => {
      J != null && (g.set(be, J, ""), L("idle"), te(qe), T(false), O(true));
    };
  let Te = we,
    Ee = (e) => {
      if (e === "success" && A != null) {
        let e = A;
        if ((xe(), e.type === "checkout")) {
          ge(e.branch);
          return;
        }
        ve(e.branch);
        return;
      }
      L(e);
    };
  let De = Ee;
  if (!re)
    return shouldShow && z.isSuccess
      ? renderControl({
          currentBranch: null,
          disabled: false,
          isPending: false,
          switchTooltipText: oe,
        })
      : null;
  if (gitRoot == null)
    return (
      renderStaticBranch?.({
        currentBranch: B,
      }) ?? null
    );
  let Oe = h,
    ke = (e) => {
      e && x(true);
      y(e);
      onOpenChange?.(e);
    };
  let Ae = renderControl({
      currentBranch: B,
      disabled: Y,
      isPending: Y,
      switchTooltipText: oe,
    }),
    je = b ? (
      <Je
        currentBranch={B}
        gitRoot={gitRoot}
        hostConfig={hostConfig}
        isOpen={v}
        disabled={Y}
        onCheckout={ge}
        onClose={X}
        onOpenCreate={() => {
          X();
          E(true);
        }}
      />
    ) : null;
  let Me = (
    <Oe side={side} open={v} align={align} onOpenChange={ke} triggerButton={Ae}>
      {je}
    </Oe>
  );
  let Ne = ee ? (
    <Ye
      open={ee}
      onOpenChange={E}
      conversationTitle={V}
      gitRoot={gitRoot}
      hostConfig={hostConfig}
      isPending={Y}
      onSubmit={ve}
    />
  ) : null;
  let Pe =
    S && gitRoot != null ? (
      <Xe
        open={S}
        onOpenChange={Ce}
        conflictFiles={N}
        gitRoot={gitRoot}
        hostConfig={hostConfig}
        targetBranch={A?.branch ?? null}
        onContinue={Te}
      />
    ) : null;
  let Fe =
    ie && G != null
      ? Q.jsx(
          le,
          {
            open: D,
            onOpenChange: O,
            conversationId: localConversationId,
            cwd: G,
            hostConfig,
            onStatusChange: De,
            onRequestReset: xe,
          },
          k,
        )
      : null;
  return (
    <>
      {Me}
      {Ne}
      {Pe}
      {Fe}
    </>
  );
}
function qe(e) {
  return e + 1;
}
function Je(e) {
  let {
      currentBranch,
      gitRoot,
      hostConfig,
      isOpen,
      disabled,
      onCheckout,
      onClose,
      onOpenCreate,
    } = e,
    u = ne(),
    [d, f] = Z.useState(""),
    p = re(d, 200),
    { data, refetch } = Ae(gitRoot, hostConfig, $),
    g = {
      enabled: true,
    };
  let {
      data: _ = [],
      isLoading,
      isFetching,
      isError,
      refetch: _refetch,
    } = Ne(gitRoot, hostConfig, $, g),
    T = {
      enabled: true,
    };
  let { data: _data, refetch: __refetch } = ye(gitRoot, hostConfig, $, T),
    D,
    O;
  D = () => {
    isOpen && Promise.all([_refetch(), __refetch(), refetch()]);
  };
  O = [isOpen, _refetch, __refetch, refetch];
  Z.useEffect(D, O);
  let k = d.trim();
  let te = k,
    A = p.trim();
  let j = A,
    M = te !== j,
    N = j.length > 0,
    P = {
      cwd: gitRoot,
      hostConfig,
      operationSource: $,
      query: j,
      enabled: N,
    };
  let {
      data: __data,
      isFetching: _isFetching,
      isError: _isError,
      refetch: ___refetch,
    } = C(Oe, P),
    z = Ze({
      branches: _,
      currentBranch,
      defaultBranch: _data,
    }),
    B = !isLoading && !isFetching && !isError && _.length === 0,
    V = $e(data),
    U = B
      ? u.formatMessage({
          id: "composer.footer.branchSwitch.createAndCheckout.disabledTooltip",
          defaultMessage: "Commit changes to create and checkout a new branch",
          description:
            "Tooltip shown when create-and-checkout branch action is disabled because the repository has no commits",
        })
      : undefined;
  let W = U,
    ae = isLoading || (isFetching && z.length === 0),
    G = M || _isFetching,
    K = () => {
      _refetch();
    };
  let q = () => {
    ___refetch();
  };
  let J = (e) =>
    e === currentBranch && V > 0 ? (
      <span className="inline-flex items-center gap-1 text-xs text-token-input-placeholder-foreground">
        <H
          id="composer.footer.branchSwitch.uncommittedSummaryPrefix"
          defaultMessage={
            "Uncommitted: {fileCount, plural, one {# file} other {# files}}"
          }
          description="Prefix shown under the active branch in the branch dropdown when there are uncommitted tracked changes"
          values={{
            fileCount: V,
          }}
        />
      </span>
    ) : null;
  let Y = (
    <Se
      branches={z}
      selectedBranch={currentBranch}
      disabled={disabled}
      isError={isError}
      isLoading={ae}
      isSearchError={_isError}
      isSearchLoading={G}
      onClose={onClose}
      onRetry={K}
      onRetrySearch={q}
      onSearchQueryChange={f}
      onSelectBranch={onCheckout}
      renderBranchSubText={J}
      searchedBranches={__data}
      searchQuery={d}
    />
  );
  let oe = Q.jsx(ie.Separator, {});
  let se = B || disabled,
    ce = (event) => {
      event.preventDefault();
      onOpenCreate();
    };
  let X = (
    <H
      id="composer.footer.branchSwitch.createAndCheckout"
      defaultMessage="Create and checkout new branch…"
      description="Dropdown action label in the composer footer branch switcher to create and checkout a new branch"
    />
  );
  let le = Q.jsx(ie.Item, {
    LeftIcon: y,
    disabled: se,
    tooltipText: W,
    onSelect: ce,
    children: X,
  });
  return (
    <>
      {Y}
      {oe}
      {le}
    </>
  );
}
function Ye(e) {
  let {
      open,
      onOpenChange,
      conversationTitle,
      gitRoot,
      hostConfig,
      isPending,
      onSubmit,
    } = e,
    l = ne(),
    p = m(g.branchPrefix),
    h = fe({
      branchPrefix: p,
      conversationTitle,
    });
  let [_, v] = Z.useState(h),
    y = open && gitRoot != null,
    b = {
      enabled: y,
    };
  let { data, isLoading, isFetching, isError } = Ne(gitRoot, hostConfig, $, b),
    T,
    E,
    D,
    O;
  {
    T = data === undefined ? [] : data;
    let e = Ze({
      branches: T,
      currentBranch: "",
      defaultBranch: null,
    });
    O = _.trim();
    E = O.endsWith("/");
    D = O.length > 0 && e.includes(O);
  }
  let k = D,
    te = !isLoading && !isFetching && !isError && T.length === 0,
    A =
      !isPending &&
      !isLoading &&
      !isFetching &&
      !te &&
      O.length > 0 &&
      !E &&
      !k &&
      gitRoot != null,
    j = Q.jsx(d, {
      children: Q.jsx(f, {
        title: (
          <H
            id="composer.footer.branchSwitch.createDialog.title"
            defaultMessage="Create and checkout branch"
            description="Title for dialog that creates and checks out a new branch from the composer footer"
          />
        ),
      }),
    });
  let M = <X />;
  let N = (event) => {
    v(Ue(event.target.value));
  };
  let P = (event) => {
    if (event.key === "Enter") {
      if ((event.preventDefault(), !A)) return;
      onSubmit(O);
    }
  };
  let F = l.formatMessage({
    id: "composer.footer.branchSwitch.createDialog.placeholder",
    defaultMessage: "new-branch",
    description:
      "Placeholder for branch name input in the composer footer create-and-checkout dialog",
  });
  let I = l.formatMessage({
    id: "composer.footer.branchSwitch.createDialog.ariaLabel",
    defaultMessage: "Branch name",
    description:
      "Aria label for branch name input in the composer footer create-and-checkout dialog",
  });
  let L = (
    <input
      autoFocus={true}
      className="h-10 w-full rounded-xl border border-token-border bg-token-dropdown-background px-3 text-sm text-token-foreground outline-none placeholder:text-token-description-foreground"
      value={_}
      onChange={N}
      onKeyDown={P}
      placeholder={F}
      aria-label={I}
    />
  );
  let R = E ? (
    <p className="text-xs text-token-error-foreground">
      <H
        id="composer.footer.branchSwitch.createDialog.trailingSlashError"
        defaultMessage="Branch name cannot end with “/”."
        description="Validation message shown in the create-and-checkout branch dialog when branch name ends with a slash"
      />
    </p>
  ) : k && !isPending ? (
    <p className="text-xs text-token-error-foreground">
      <H
        id="composer.footer.branchSwitch.createDialog.branchExistsError"
        defaultMessage="Branch already exists."
        description="Validation message shown in the create-and-checkout branch dialog when the entered branch already exists"
      />
    </p>
  ) : null;
  let z = Q.jsxs(d, {
    className: "flex flex-col gap-2",
    children: [M, L, R],
  });
  let B = () => {
    onOpenChange(false);
  };
  let re = (
    <H
      id="composer.footer.branchSwitch.createDialog.close"
      defaultMessage="Close"
      description="Secondary button label in create-and-checkout branch dialog shown from the composer footer"
    />
  );
  let V = Q.jsx(u, {
    color: "secondary",
    onClick: B,
    children: re,
  });
  let ie = !A,
    U = () => {
      onSubmit(O);
    };
  let W = (
    <H
      id="composer.footer.branchSwitch.createDialog.createAndCheckout"
      defaultMessage="Create and checkout"
      description="Primary button label in create-and-checkout branch dialog shown from the composer footer"
    />
  );
  let ae = Q.jsx(u, {
    color: "primary",
    disabled: ie,
    loading: isPending,
    onClick: U,
    children: W,
  });
  let q = Q.jsx(d, {
    children: Q.jsxs(ee, {
      children: [V, ae],
    }),
  });
  let J = (
    <K data-codex-branch-create-dialog="">
      {j}
      {z}
      {q}
    </K>
  );
  return (
    <G size="feature" open={open} onOpenChange={onOpenChange}>
      {J}
    </G>
  );
}
function Xe(e) {
  let {
      open,
      onOpenChange,
      conflictFiles,
      gitRoot,
      hostConfig,
      targetBranch,
      onContinue,
    } = e,
    p = ne(),
    { data } = Ae(gitRoot, hostConfig, $),
    h = l(gitRoot);
  let g = {
    cwd: h,
    includeUntrackedFiles: false,
    operationSource: $,
    source: "staged",
  };
  let _ = {
    enabled: open,
    staleTime: te.FIVE_SECONDS,
  };
  let { data: _data } = O(gitRoot, hostConfig, "review-summary", g, $, _),
    y = l(gitRoot);
  let b = {
    cwd: y,
    operationSource: $,
    source: "unstaged",
  };
  let x = {
    enabled: open,
    staleTime: te.FIVE_SECONDS,
  };
  let { data: __data } = O(gitRoot, hostConfig, "review-summary", b, $, x),
    C,
    w,
    T,
    E,
    D,
    k,
    A,
    j,
    M;
  {
    let e = [_data, __data],
      a = xe(e),
      o = a?.totalAdditions ?? 0,
      c = a?.totalDeletions ?? 0,
      l = o + c > 0,
      u = conflictFiles.length > 0,
      h = $e(data);
    let g = h,
      _ =
        targetBranch ??
        p.formatMessage({
          id: "composer.footer.branchSwitch.uncommittedDialog.targetBranchFallback",
          defaultMessage: "the selected branch",
          description:
            "Fallback branch label in the uncommitted changes dialog when the target branch name is unavailable",
        });
    let y = _;
    T = G;
    E = "feature";
    D = open;
    k = onOpenChange;
    w = K;
    M = Q.jsx(d, {
      children: Q.jsx(f, {
        title: (
          <H
            id="composer.footer.branchSwitch.uncommittedDialog.title"
            defaultMessage="Commit changes to switch branch"
            description="Title for dialog shown when branch switching is blocked by uncommitted changes"
          />
        ),
      }),
    });
    C = d;
    A = "text-token-description-foreground";
    j = u ? (
      <div className="flex flex-col gap-2 text-sm">
        <H
          id="composer.footer.branchSwitch.uncommittedDialog.conflict.bodyPrefix"
          defaultMessage="Your changes to the following files would be overwritten by checkout:"
          description="Message shown in the uncommitted changes dialog before listing files that block checkout"
        />
        <div className="flex flex-col gap-1">
          {conflictFiles.map((item, index) => {
            let r = ve(item, e);
            return (
              <div
                key={`${item}:${index}`}
                className="inline-flex items-center gap-1 text-token-foreground"
              >
                <span>{item}</span>
                {r == null ? null : (
                  <Ce
                    className="inline-flex align-middle"
                    linesAdded={r.linesAdded}
                    linesRemoved={r.linesRemoved}
                  />
                )}
              </div>
            );
          })}
        </div>
        <H
          id="composer.footer.branchSwitch.uncommittedDialog.conflict.bodySuffix"
          defaultMessage="Please commit your changes to continue"
          description="Message shown in the uncommitted changes dialog after listing files that block checkout"
        />
      </div>
    ) : l ? (
      <span className="inline-flex items-center gap-1 whitespace-nowrap">
        <H
          id="composer.footer.branchSwitch.uncommittedDialog.bodyPrefix.withDiff"
          defaultMessage="Commit"
          description="Body prefix in the uncommitted changes dialog before diff stats"
        />
        <Ce
          className="inline-flex align-middle"
          linesAdded={o}
          linesRemoved={c}
        />
        <H
          id="composer.footer.branchSwitch.uncommittedDialog.bodySuffix.withDiff"
          defaultMessage={
            "changes in {fileCount, plural, one {# file} other {# files}} to check out {branchName}."
          }
          description="Body suffix in the uncommitted changes dialog after diff stats, including file count and target branch"
          values={{
            fileCount: g,
            branchName: y,
          }}
        />
      </span>
    ) : (
      <H
        id="composer.footer.branchSwitch.uncommittedDialog.body.noDiff"
        defaultMessage={
          "Commit changes in {fileCount, plural, one {# file} other {# files}} to check out {branchName}."
        }
        description="Body text in the uncommitted changes dialog when diff stats are unavailable"
        values={{
          fileCount: g,
          branchName: y,
        }}
      />
    );
  }
  let N = <C className={A}>{j}</C>;
  let P = () => {
    onOpenChange(false);
  };
  let F = (
    <H
      id="composer.footer.branchSwitch.uncommittedDialog.cancel"
      defaultMessage="Cancel"
      description="Secondary button label in branch switching blocked dialog shown in the composer footer"
    />
  );
  let I = Q.jsx(u, {
    color: "secondary",
    onClick: P,
    children: F,
  });
  let L = (
    <H
      id="composer.footer.branchSwitch.uncommittedDialog.commit"
      defaultMessage="Commit and switch branch…"
      description="Primary button label in branch switching blocked dialog shown in the composer footer"
    />
  );
  let R = Q.jsx(u, {
    color: "primary",
    onClick: onContinue,
    children: L,
  });
  let z = Q.jsx(d, {
    children: Q.jsxs(ee, {
      children: [I, R],
    }),
  });
  let B = Q.jsxs(w, {
    children: [M, N, z],
  });
  return (
    <T size={E} open={D} onOpenChange={k}>
      {B}
    </T>
  );
}
function Ze({ branches, currentBranch, defaultBranch }) {
  let r = new Set(),
    i = [];
  return (
    Qe(defaultBranch, i, r),
    Qe(currentBranch, i, r),
    branches.forEach((item) => {
      Qe(item, i, r);
    }),
    i
  );
}
function Qe(e, t, n) {
  !e || n.has(e) || (n.add(e), t.push(e));
}
function $e(e) {
  return e?.type === "success"
    ? Math.max(e.stagedCount, e.unstagedCount) + e.untrackedCount
    : 0;
}
var et, Z, Q, $;
const tt = e(() => {
  et = V();
  a();
  A();
  Z = t(v(), 1);
  L();
  S();
  I();
  x();
  J();
  s();
  k();
  ge();
  j();
  we();
  b();
  ke();
  se();
  Ie();
  ue();
  Me();
  ze();
  He();
  T();
  pe();
  he();
  de();
  me();
  r();
  D();
  B();
  N();
  _e();
  Ge();
  Q = c();
  $ = "composer_branch_switcher";
});
const initGitRecentBranchesQuery = Ie;
const useGitStatusSummaryQuery = Ae;
const sanitizeGitBranchSearchInput = Ue;
const gitBranchSearchQuery = Oe;
const initGitBranchSwitcherChunk = tt;
const useGitRecentBranchesQuery = Ne;
const initSanitizeGitBranchSearchInput = Ge;
const initGitStatusSummaryQuery = Me;
const GitBranchSwitcher = Ke;
const initGitBranchSearchQuery = ke;

export {
  gitBranchSearchQuery,
  GitBranchSwitcher,
  initGitBranchSearchQuery,
  initGitBranchSwitcherChunk,
  initGitRecentBranchesQuery,
  initGitStatusSummaryQuery,
  initSanitizeGitBranchSearchInput,
  sanitizeGitBranchSearchInput,
  useGitRecentBranchesQuery,
  useGitStatusSummaryQuery,
};
