// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~onboarding-page~hotkey-window-thread-page~thr~b0jzjd62-JuRN2k_O.js
// Git review primitives, diff stats, and git-repository initialization helpers.
import { once as e, toEsModule as t } from "../runtime/commonjs-interop";
import {
  $N as n,
  $P as r,
  $h as i,
  AB as a,
  AN as o,
  AP as s,
  AV as c,
  Ai as l,
  BP as u,
  BV as d,
  DL as f,
  DN as p,
  FB as m,
  Ga as h,
  JO as g,
  JV as _,
  MV as v,
  ON as y,
  QP as b,
  SP as x,
  VP as S,
  Wa as C,
  XN as ee,
  YO as w,
  ag as T,
  bF as E,
  cM as D,
  eg as O,
  iF as k,
  kN as te,
  lF as A,
  og as j,
  qV as M,
  sF as N,
  sg as P,
  uM as F,
  wi as I,
  zV as L,
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js";
function R(e) {
  let { cwd = "", hostConfig, onErrorMessage, showErrorToast = false } = e,
    c = m(b),
    l = L(),
    u = A(),
    d = i(hostConfig);
  let p = d,
    g = ["git", "init-repo", p, cwd];
  let _ = async () => {
    if (cwd == null) throw Error("Missing git context");
    await P("git").request({
      method: "git-init-repo",
      params: {
        cwd: f(cwd),
        hostConfig,
        operationSource: "review_model",
      },
    });
  };
  let y = async () => {
    c.get(F).success(
      u.formatMessage({
        id: "codex.review.noDiff.gitInit.success",
        defaultMessage: "Git repository created",
        description:
          "Toast shown after creating a git repository from the diff empty state",
      }),
    );
    let e = [
      l.invalidateQueries({
        queryKey: ee("git-origins"),
      }),
    ];
    cwd != null &&
      e.push(
        l.invalidateQueries({
          queryKey: ["git", "metadata", p, cwd],
        }),
      );
    await Promise.all(e);
  };
  let x = (e) => {
    let t = e instanceof Error ? e.message : String(e);
    showErrorToast &&
      c.get(F).danger(
        u.formatMessage(
          {
            id: "codex.review.noDiff.gitInit.error",
            defaultMessage: "Git init failed: {message}",
            description:
              "Error text shown when git initialization fails from the diff empty state",
          },
          {
            message: t,
          },
        ),
      );
    onErrorMessage?.(t);
  };
  let S = {
    mutationKey: g,
    mutationFn: _,
    onSuccess: y,
    onError: x,
  };
  let C = v(S),
    w = async () => {
      if (!(cwd == null || C.isPending))
        try {
          await C.mutateAsync();
        } catch {
          return;
        }
    };
  let T = w,
    E = cwd != null;
  return {
    canCreateGitRepository: E,
    createGitRepository: T,
    isCreatingGitRepository: C.isPending,
  };
}
var z;
const ne = e(() => {
  z = M();
  c();
  a();
  E();
  k();
  D();
  T();
  O();
  r();
  n();
  j();
});
function B(e) {
  let { linesAdded, linesRemoved, variant = "color", className } = e,
    s = A(),
    c = u(
      "inline-flex items-center gap-1 disambiguated-digits tabular-nums tracking-tight",
      className,
    );
  let l =
      variant === "monochrome"
        ? "text-token-input-placeholder-foreground"
        : "text-token-git-decoration-added-resource-foreground",
    d = u("flex shrink-0 items-center", l);
  let f = s.formatNumber(linesAdded);
  let p = (
    <N
      id="wham.message.modal.repoAndDiffStats.linesAdded"
      defaultMessage={"+{linesAdded}"}
      description="Number of lines added"
      values={{
        linesAdded: f,
      }}
    />
  );
  let m = <span className={d}>{p}</span>;
  let h =
      variant === "monochrome"
        ? "text-token-input-placeholder-foreground"
        : "text-token-git-decoration-deleted-resource-foreground",
    g = u("flex shrink-0 items-center", h);
  let _ = s.formatNumber(linesRemoved);
  let v = (
    <N
      id="wham.message.modal.repoAndDiffStats.linesRemoved"
      defaultMessage={"-{linesRemoved}"}
      description="Number of lines removed"
      values={{
        linesRemoved: _,
      }}
    />
  );
  let y = <span className={g}>{v}</span>;
  return (
    <span data-thread-find-skip={true} className={c}>
      {m}
      {y}
    </span>
  );
}
function re(e) {
  let { linesAdded, linesRemoved, variant = "color", className } = e,
    s = u(
      "inline-flex items-center gap-1 disambiguated-digits tabular-nums tracking-tight",
      className,
    );
  let c =
      variant === "monochrome"
        ? "text-token-input-placeholder-foreground"
        : "text-token-git-decoration-added-resource-foreground",
    l = u("flex shrink-0 items-center", c);
  let d = (
    <N
      id="wham.message.modal.repoAndDiffStats.linesAdded"
      defaultMessage={"+{linesAdded}"}
      description="Number of lines added"
      values={{
        linesAdded: <V key="linesAdded" value={linesAdded} />,
      }}
    />
  );
  let f = <span className={l}>{d}</span>;
  let p =
      variant === "monochrome"
        ? "text-token-input-placeholder-foreground"
        : "text-token-git-decoration-deleted-resource-foreground",
    m = u("flex shrink-0 items-center", p);
  let h = (
    <N
      id="wham.message.modal.repoAndDiffStats.linesRemoved"
      defaultMessage={"-{linesRemoved}"}
      description="Number of lines removed"
      values={{
        linesRemoved: <V key="linesRemoved" value={linesRemoved} />,
      }}
    />
  );
  let g = <span className={m}>{h}</span>;
  return (
    <span data-thread-find-skip={true} className={s}>
      {f}
      {g}
    </span>
  );
}
function V(e) {
  let { value, variant = "diff-stat" } = e,
    a = A(),
    o;
  {
    let e = a.formatNumber(value, {
        useGrouping: false,
      }),
      r = Array.from(e),
      s = r.filter(H).length;
    o = (
      <span aria-label={e} className="diff-stat-rolling-number">
        {r.map((item, index) =>
          H(item) ? (
            (--s,
            W.jsx(
              ie,
              {
                digit: item,
                variant: variant,
              },
              `digit-${s}`,
            ))
          ) : (
            <span
              key={`separator-${index}`}
              aria-hidden="true"
              className="diff-stat-number-separator"
            >
              {item}
            </span>
          ),
        )}
      </span>
    );
  }
  return o;
}
function ie(e) {
  let { digit, variant } = e,
    i = K[digit],
    a = u("diff-stat-digit-stack", i);
  let o = G.map(ae);
  let s = <span className={a}>{o}</span>;
  let c = s,
    l = variant === "inline" && "diff-stat-digit-column-inline",
    d = u("diff-stat-digit-column", l);
  let f = <span className="diff-stat-digit-clip">{c}</span>;
  return (
    <span aria-hidden="true" className={d}>
      {f}
    </span>
  );
}
function ae(e) {
  return <span key={e}>{e}</span>;
}
function H(e) {
  return e >= "0" && e <= "9";
}
var U,
  W,
  G,
  K,
  q = e(() => {
    U = M();
    S();
    k();
    W = d();
    G = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    K = {
      0: "diff-stat-digit-stack-0",
      1: "diff-stat-digit-stack-1",
      2: "diff-stat-digit-stack-2",
      3: "diff-stat-digit-stack-3",
      4: "diff-stat-digit-stack-4",
      5: "diff-stat-digit-stack-5",
      6: "diff-stat-digit-stack-6",
      7: "diff-stat-digit-stack-7",
      8: "diff-stat-digit-stack-8",
      9: "diff-stat-digit-stack-9",
    };
  });
function oe(e) {
  let { children, className, ...rest } = e;
  let a = u("gap-3", className);
  return (
    <I {...rest} className={a}>
      {children}
    </I>
  );
}
function se(e) {
  let {
      icon,
      isRefreshing = false,
      iconBackgroundTone = "neutral",
      className,
    } = e,
    c = "bg-token-editor-background";
  iconBackgroundTone === "success" && (c = "bg-token-charts-green/20");
  iconBackgroundTone === "failure" && (c = "bg-token-charts-red/10");
  let l = u("flex items-start justify-between", className);
  let d = u("flex h-9 w-9 items-center justify-center rounded-xl", c);
  let f = <span className={d}>{icon}</span>;
  let p = isRefreshing
    ? Q.jsx(te, {
        className: "icon-xs mt-0.5 text-token-description-foreground",
      })
    : null;
  return (
    <div className={l}>
      {f}
      {p}
    </div>
  );
}
function ce(e) {
  let { children, className } = e,
    i = u("text-token-foreground heading-dialog font-semibold", className);
  return <div className={i}>{children}</div>;
}
function le(e) {
  let { children, className } = e,
    i = u("text-token-description-foreground flex flex-col gap-3", className);
  return <div className={i}>{children}</div>;
}
function ue(e) {
  let { left, right, className } = e,
    a,
    o,
    s,
    c,
    l;
  {
    let e = (t, n) => {
        if (!Z.isValidElement(t)) return t;
        if (t.type === p) {
          let e = t;
          return e.props.size == null
            ? Z.cloneElement(e, {
                size: n,
              })
            : e;
        }
        if (t.props.children == null) return t;
        let r = false,
          i = Z.Children.map(t.props.children, (t) => {
            let i = e(t, n);
            return (i !== t && (r = true), i);
          });
        if (!r) return t;
        let a = i;
        return (
          i != null && i.length === 1 && ([a] = i),
          Z.cloneElement(t, {
            children: a,
          })
        );
      },
      d = (t) => {
        let i = e(left, t),
          a = e(right, t);
        return (
          <>
            {i ?? null}
            {a}
          </>
        );
      };
    c = u("flex flex-1 items-center justify-between gap-2", className);
    l = <C electron={true}>{d("medium")}</C>;
    a = C;
    o = true;
    s = d("toolbar");
  }
  let d = Q.jsx(a, {
    extension: o,
    children: s,
  });
  return (
    <div className={c}>
      {l}
      {d}
    </div>
  );
}
function de(e) {
  let { left, label, right, className } = e,
    o = u(
      "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-6",
      className,
    );
  let s = (
    <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center">
      {left}
    </span>
  );
  let c = <span className="min-w-0">{label}</span>;
  let l = (
    <div className="flex min-w-0 items-center gap-2">
      {s}
      {c}
    </div>
  );
  let d = right ?? <span />;
  return (
    <div className={o}>
      {l}
      {d}
    </div>
  );
}
function J(e) {
  let { left, label, value, valueClassName, className } = e,
    s = u(
      "grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-6",
      className,
    );
  let c = (
    <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center">
      {left}
    </span>
  );
  let l = (
    <span className="flex items-center gap-2 whitespace-nowrap">
      {c}
      {label}
    </span>
  );
  let d = u("min-w-0 truncate text-right", valueClassName);
  let f = <div className={d}>{value}</div>;
  return (
    <div className={s}>
      {l}
      {f}
    </div>
  );
}
function fe(e) {
  let { children, ariaLabel, onClick, disabled, className } = e,
    s = u("rounded-lg p-2", className);
  return Q.jsx(p, {
    color: "secondary",
    size: "icon",
    "aria-label": ariaLabel,
    disabled,
    className: s,
    onClick,
    children,
  });
}
function Y(e) {
  let { file, workspaceRoot } = e,
    i,
    a;
  {
    let e = g(file.path, workspaceRoot),
      o = e.split("/");
    i = o.pop() ?? e;
    a = o.join("/");
  }
  let o = a,
    s = file.additions ?? 0,
    c = file.deletions ?? 0,
    l = file.additions != null || file.deletions != null,
    u = (
      <span className="flex-shrink-0 font-medium text-token-foreground">
        {i}
      </span>
    );
  let d =
    o.length > 0 ? (
      <span className="min-w-0 truncate text-token-description-foreground">
        {o}
      </span>
    ) : null;
  let f = (
    <div className="flex min-w-0 items-baseline gap-2 whitespace-nowrap">
      {u}
      {d}
    </div>
  );
  let p = l ? <B variant="color" linesAdded={s} linesRemoved={c} /> : <span />;
  return (
    <div
      className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-6"
      title={file.path}
    >
      {f}
      {p}
    </div>
  );
}
function pe(e) {
  let { title, files, workspaceRoot, className } = e,
    o = u("flex flex-col gap-2", className);
  let s = <div className="text-token-description-foreground">{title}</div>;
  let c;
  {
    let e;
    e = (e) => <Y key={e.path} file={e} workspaceRoot={workspaceRoot} />;
    c = files.map(e);
  }
  let l = <div className="flex flex-col gap-2">{c}</div>;
  return (
    <div className={o}>
      {s}
      {l}
    </div>
  );
}
function me(e) {
  let { expanded, children, className, scrollClassName } = e,
    o = expanded ? "open" : "collapsed",
    c = {
      open: {
        height: "auto",
        opacity: 1,
      },
      collapsed: {
        height: 0,
        opacity: 0,
      },
    };
  let l, d;
  l = {
    duration: 0.25,
    ease: [0.16, 1, 0.3, 1],
  };
  d = {
    overflow: "hidden",
  };
  let f = u(
    "vertical-scroll-fade-mask max-h-64 overflow-y-auto [--edge-fade-distance:2rem]",
    scrollClassName,
  );
  let p = <div className={f}>{children}</div>;
  return Q.jsx(s.div, {
    initial: false,
    animate: o,
    variants: c,
    transition: l,
    style: d,
    className,
    children: p,
  });
}
var X, Z, Q, $;
const he = e(() => {
  X = M();
  S();
  x();
  Z = t(_(), 1);
  y();
  l();
  o();
  h();
  q();
  w();
  Q = d();
  $ = {
    Root: oe,
    Header: se,
    Title: ce,
    RowContainer: le,
    Footer: ue,
    Row: de,
    KeyValueRow: J,
    IconButton: fe,
    FileRow: Y,
    FileSection: pe,
    Expanded: me,
  };
});
const DiffStats = B;
const useCreateGitRepository = R;
const RollingDiffStatNumber = V;
const initGitReviewPrimitivesChunk = he;
const initDiffStatsChunk = q;
const AnimatedDiffStats = re;
const initCreateGitRepositoryChunk = ne;
const GitReviewPrimitives = $;

export {
  AnimatedDiffStats,
  DiffStats,
  GitReviewPrimitives,
  initCreateGitRepositoryChunk,
  initDiffStatsChunk,
  initGitReviewPrimitivesChunk,
  RollingDiffStatNumber,
  useCreateGitRepository,
};
