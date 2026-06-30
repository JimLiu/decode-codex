// Restored from ref/webview/assets/pdf-preview-panel-KZgIg0w6.js
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = ["./pdfjs-entry"]),
) => i.map((i) => d[i]);
import { once as e, toEsModule as t } from "../runtime/commonjs-interop";
import {
  D as n,
  E as r,
  Go as i,
  Ko as a,
  O as o,
  Vo as s,
  _ as c,
  _c as l,
  ar as u,
  dn as d,
  fn as f,
  gc as p,
  ir as m,
  lc as h,
  v as g,
} from "./current-app-initial-bnlvjk3w-shared-bundle";
import {
  aa as _,
  ac as v,
  bs as y,
  ic as b,
  oc as x,
  sa as S,
  ws as C,
} from "../boundaries/current-ref/current-app-initial-worktree-new-thread-orchestrator-runtime-producer";
import {
  $t as w,
  Dp as T,
  Em as E,
  Ep as D,
  Qt as O,
  Tm as k,
  Xt as A,
  Yt as j,
  Zt as M,
  hh as N,
  is as P,
  mh as F,
  nn as ee,
  ns as I,
  op as te,
  sn as L,
  sp as R,
  tn as z,
  xp as B,
  yp as ne,
} from "../boundaries/current-ref/current-app-initial-worktree-new-thread-query-runtime-producer";
import {
  Bl as re,
  Hi as V,
  Iy as H,
  Kp as U,
  Od as ie,
  Ri as ae,
  Rl as W,
  Vi as oe,
  Vy as se,
  ba as G,
  if as K,
  ya as ce,
  zy as le,
} from "../boundaries/current-ref/current-app-initial-remote-projects-app-shared-runtime-producer";
import {
  $u as ue,
  At as de,
  Ct as fe,
  Dd as q,
  Dt as pe,
  Ed as me,
  Et as he,
  Ft as ge,
  It as J,
  Lt as _e,
  Mt as ve,
  Nt as ye,
  Ot as be,
  Pt as xe,
  Qu as Se,
  St as Ce,
  Tt as we,
  jt as Te,
  kt as Ee,
  nd as De,
  rd as Oe,
  wt as ke,
} from "../boundaries/current-ref/app-main-current-producer";
import {
  n as Ae,
  t as je,
} from "../boundaries/current-ref/current-app-initial-renderer-error-boundary-runtime-producer";
import {
  i as Me,
  n as Ne,
  r as Pe,
  t as Fe,
} from "../boundaries/current-ref/current-artifact-analytics-producer";
import { n as Ie, t as Le } from "../boundaries/current-ref/current-artifact-preview-status-producer";
function Re(e) {
  let t = (0, He.c)(19),
    { containerRef: n, pageSelector: r, totalPages: i } = e,
    [a, o] = (0, Ue.useState)(1),
    s = (0, Ue.useRef)(null),
    c = (0, Ue.useRef)(null),
    l = Be(a, i),
    u,
    d;
  (t[0] !== n || t[1] !== r || t[2] !== i
    ? ((u = () => {
        let e = n.current;
        if (e == null || i < 1 || typeof IntersectionObserver > `u`) return;
        let t = ze(e, r);
        if (t.length === 0) return;
        let a = new Map(),
          l = new IntersectionObserver(
            (n) => {
              for (let e of n) a.set(e.target, e.intersectionRatio);
              let r = Ve({
                container: e,
                pageElements: t,
                pageVisibilityByElement: a,
              });
              r != null &&
                ((s.current != null && r !== s.current) ||
                  (r === s.current &&
                    ((s.current = null), c.current?.(), (c.current = null)),
                  o(r)));
            },
            { root: e, threshold: We },
          );
        for (let e of t) (a.set(e, 0), l.observe(e));
        let u = Ve({
          container: e,
          pageElements: t,
          pageVisibilityByElement: a,
        });
        return (
          u != null && o(u),
          () => {
            (l.disconnect(),
              (s.current = null),
              c.current?.(),
              (c.current = null));
          }
        );
      }),
      (d = [n, r, i]),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = u),
      (t[4] = d))
    : ((u = t[3]), (d = t[4])),
    (0, Ue.useEffect)(u, d));
  let f;
  t[5] !== n || t[6] !== r
    ? ((f = (e) => {
        let t = n.current;
        if (t == null) return;
        let i = ze(t, r).at(e - 1);
        if (i == null) return;
        (c.current?.(), (c.current = null), (s.current = e));
        let a = null,
          l = () => {
            (a != null && (clearTimeout(a), (a = null)),
              t.removeEventListener(`scroll`, d));
          },
          u = () => {
            if (s.current !== e) return;
            ((s.current = null), l());
            let n = Ve({
              container: t,
              pageElements: ze(t, r),
              pageVisibilityByElement: new Map(),
            });
            n != null && o(n);
          },
          d = () => {
            (a != null && clearTimeout(a), (a = setTimeout(u, Ge)));
          };
        ((c.current = l),
          i.scrollIntoView({ behavior: `smooth`, block: `start` }),
          o(e),
          d(),
          t.addEventListener(`scroll`, d));
      }),
      (t[5] = n),
      (t[6] = r),
      (t[7] = f))
    : (f = t[7]);
  let p = f,
    m;
  t[8] !== l || t[9] !== p
    ? ((m = () => {
        let e = l - 1;
        e < 1 || p(e);
      }),
      (t[8] = l),
      (t[9] = p),
      (t[10] = m))
    : (m = t[10]);
  let h = m,
    g;
  t[11] !== l || t[12] !== p || t[13] !== i
    ? ((g = () => {
        let e = l + 1;
        e > i || p(e);
      }),
      (t[11] = l),
      (t[12] = p),
      (t[13] = i),
      (t[14] = g))
    : (g = t[14]);
  let _ = g,
    v;
  return (
    t[15] !== l || t[16] !== _ || t[17] !== h
      ? ((v = { currentPage: l, goToNextPage: _, goToPreviousPage: h }),
        (t[15] = l),
        (t[16] = _),
        (t[17] = h),
        (t[18] = v))
      : (v = t[18]),
    v
  );
}
function ze(e, t) {
  return Array.from(e.querySelectorAll(t));
}
function Be(e, t) {
  return Math.min(Math.max(e, 1), Math.max(t, 1));
}
function Ve({ container: e, pageElements: t, pageVisibilityByElement: n }) {
  if (t.length === 0) return null;
  let r = 0,
    i = -1;
  for (let [e, a] of t.entries()) {
    let t = n.get(a) ?? 0;
    t > i && ((i = t), (r = e));
  }
  if (i > 0) return r + 1;
  let a = e.getBoundingClientRect().top,
    o = 0,
    s = 1 / 0;
  for (let [e, n] of t.entries()) {
    let t = Math.abs(n.getBoundingClientRect().top - a);
    t < s && ((s = t), (o = e));
  }
  return o + 1;
}
var He,
  Ue,
  We,
  Ge,
  Ke = e(() => {
    ((He = p()), (Ue = t(l(), 1)), (We = [0, 0.25, 0.5, 0.75, 1]), (Ge = 100));
  });
function qe(e) {
  let t = (0, Xe.c)(9),
    { fileDataUrl: n } = e,
    [r, i] = (0, Ze.useState)(null),
    [a, o] = (0, Ze.useState)(`loading`),
    [s, c] = (0, Ze.useState)(0),
    [l, u] = (0, Ze.useState)(null),
    [d, f] = (0, Ze.useState)(null),
    p,
    m;
  (t[0] === n
    ? ((p = t[1]), (m = t[2]))
    : ((p = () => {
        let e = !1,
          t = null;
        return (
          i(null),
          o(`loading`),
          c(0),
          u(null),
          f(null),
          (async function () {
            try {
              let r = await Je();
              if (e) return;
              let a = Ye(n);
              if (a == null) {
                o(`error`);
                return;
              }
              t = r.getDocument({ data: a });
              let s = await t.promise,
                l = (await s.getPage(1)).getViewport({ scale: 1 });
              if (e) {
                s.destroy();
                return;
              }
              (f(s),
                i(n),
                c(Math.max(s.numPages, 1)),
                u({ height: l.height, width: l.width }),
                o(`ready`));
            } catch {
              if (e) return;
              (f(null), i(null), c(0), u(null), o(`error`));
            }
          })(),
          () => {
            ((e = !0), t != null && !t.destroyed && t.destroy());
          }
        );
      }),
      (m = [n]),
      (t[0] = n),
      (t[1] = p),
      (t[2] = m)),
    (0, Ze.useEffect)(p, m));
  let h;
  return (
    t[3] !== a || t[4] !== r || t[5] !== s || t[6] !== l || t[7] !== d
      ? ((h = {
          loadedFileDataUrl: r,
          loadState: a,
          numPages: s,
          pageViewportSize: l,
          pdfDocument: d,
        }),
        (t[3] = a),
        (t[4] = r),
        (t[5] = s),
        (t[6] = l),
        (t[7] = d),
        (t[8] = h))
      : (h = t[8]),
    h
  );
}
async function Je() {
  if (typeof window > `u`)
    throw Error(`pdf.js can only be loaded in the browser`);
  $e ??= m(
    () => import(`./pdfjs-entry`),
    __vite__mapDeps([0]),
    import.meta.url,
  );
  let e = await $e;
  return (
    (!et || e.GlobalWorkerOptions.workerSrc !== Qe) &&
      ((e.GlobalWorkerOptions.workerSrc = Qe), (et = !0)),
    e
  );
}
function Ye(e) {
  let t = e.indexOf(`base64,`);
  if (!e.startsWith(`data:`) || t < 0) return null;
  let n;
  try {
    n = window.atob(e.slice(t + 7));
  } catch {
    return null;
  }
  let r = new Uint8Array(n.length);
  for (let e = 0; e < n.length; e += 1) r[e] = n.charCodeAt(e);
  return r;
}
var Xe,
  Ze,
  Qe,
  $e,
  et,
  tt = e(() => {
    ((Xe = p()),
      (Ze = t(l(), 1)),
      u(),
      (Qe = new URL(
        `` + new URL(`pdf.worker.min-qwK7q_zL.mjs`, import.meta.url).href,
        `` + import.meta.url,
      ).toString()),
      ($e = null),
      (et = !1));
  }),
  nt = e(() => {});
function rt(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `num` in e &&
    typeof e.num == `number` &&
    `gen` in e &&
    typeof e.gen == `number`
  );
}
var it,
  at = e(() => {
    it = class {
      isInPresentationMode;
      externalLinksEnabled = !0;
      constructor({
        linkNavigation: e,
        pageSelector: t,
        pdfDocument: n,
        scrollRootRef: r,
      }) {
        ((this.isInPresentationMode = e != null),
          (this.linkNavigation = e),
          (this.pageSelector = t),
          (this.pdfDocument = n),
          (this.scrollRootRef = r));
      }
      linkNavigation;
      pageSelector;
      pdfDocument;
      scrollRootRef;
      get pagesCount() {
        return this.pdfDocument.numPages;
      }
      set page(e) {
        this.scrollToPage(e);
      }
      get page() {
        return 1;
      }
      set rotation(e) {}
      get rotation() {
        return 0;
      }
      set externalLinkEnabled(e) {
        this.externalLinksEnabled = e;
      }
      get externalLinkEnabled() {
        return this.externalLinksEnabled;
      }
      async goToDestination(e) {
        let t =
            typeof e == `string` ? await this.pdfDocument.getDestination(e) : e,
          n = t == null ? null : await this.getDestinationPageNumber(t);
        n != null && this.scrollToPage(n);
      }
      goToPage(e) {
        let t = Number(e);
        Number.isInteger(t) && this.scrollToPage(t);
      }
      goToXY(e) {
        this.scrollToPage(e);
      }
      addLinkAttributes(e, t) {
        if (!t || !this.externalLinksEnabled) {
          ((e.href = ``), (e.onclick = null));
          return;
        }
        if (
          ((e.href = t),
          (e.title = t),
          (e.target = `_blank`),
          (e.rel = `noopener noreferrer nofollow`),
          this.linkNavigation?.onExternalLink == null)
        ) {
          e.onclick = null;
          return;
        }
        e.onclick = (e) => {
          (e.preventDefault(),
            e.stopPropagation(),
            this.linkNavigation?.onExternalLink?.(t, e));
        };
      }
      getDestinationHash(e) {
        return typeof e == `string` && e.length > 0
          ? this.getAnchorUrl(`#${window.encodeURIComponent(e)}`)
          : this.getAnchorUrl(``);
      }
      getAnchorUrl(e) {
        return typeof e == `string` ? e : ``;
      }
      setHash(e) {}
      executeNamedAction(e) {}
      executeSetOCGState(e) {}
      async getDestinationPageNumber(e) {
        let t = e[0];
        if (typeof t == `number` && Number.isInteger(t)) return t + 1;
        if (!rt(t)) return null;
        let n = this.pdfDocument.cachedPageNumber(t);
        if (n != null) return n;
        try {
          return (await this.pdfDocument.getPageIndex(t)) + 1;
        } catch {
          return null;
        }
      }
      scrollToPage(e) {
        if (!(e < 1 || e > this.pdfDocument.numPages)) {
          if (this.linkNavigation?.onPageChange != null) {
            this.linkNavigation.onPageChange(e);
            return;
          }
          (
            this.scrollRootRef.current?.querySelector(
              `${this.pageSelector}[data-page-number="${e}"]`,
            ) ?? null
          )?.scrollIntoView({ block: `start`, inline: `nearest` });
        }
      }
    };
  });
function ot(e) {
  let t = (0, st.c)(9),
    {
      deferMs: n,
      linkNavigation: r,
      page: i,
      pageSelector: a,
      pdfDocument: o,
      scrollRootRef: s,
    } = e,
    c = (0, ct.useRef)(null),
    l,
    u;
  (t[0] !== n ||
  t[1] !== r ||
  t[2] !== i ||
  t[3] !== a ||
  t[4] !== o ||
  t[5] !== s
    ? ((l = () => {
        let e = c.current;
        if (e == null) return;
        let t = e;
        t.innerHTML = ``;
        let l = !1,
          u = null,
          d = async function () {
            let e = await Je(),
              n = await i.getAnnotations();
            if (l || n.length === 0) return;
            let c = i.getViewport({ scale: 1 }),
              u = new it({
                linkNavigation: r,
                pageSelector: a,
                pdfDocument: o,
                scrollRootRef: s,
              });
            await new e.AnnotationLayer({
              accessibilityManager: void 0,
              annotationCanvasMap: void 0,
              annotationEditorUIManager: void 0,
              annotationStorage: void 0,
              commentManager: void 0,
              div: t,
              linkService: u,
              page: i,
              structTreeLayer: void 0,
              viewport: c,
            }).render({
              annotations: n,
              div: t,
              linkService: u,
              page: i,
              renderForms: !1,
              viewport: c,
            });
          };
        return (
          (u = setTimeout(() => {
            d();
          }, n)),
          () => {
            ((l = !0), u != null && clearTimeout(u), (t.innerHTML = ``));
          }
        );
      }),
      (u = [n, r, i, a, o, s]),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a),
      (t[4] = o),
      (t[5] = s),
      (t[6] = l),
      (t[7] = u))
    : ((l = t[6]), (u = t[7])),
    (0, ct.useEffect)(l, u));
  let d;
  return (
    t[8] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((d = (0, lt.jsx)(`div`, { ref: c, className: `annotationLayer` })),
        (t[8] = d))
      : (d = t[8]),
    d
  );
}
var st,
  ct,
  lt,
  ut = e(() => {
    ((st = p()), (ct = t(l(), 1)), tt(), at(), (lt = h()));
  });
function dt(e, t) {
  let n = e.currentTarget.getBoundingClientRect();
  return n.width <= 0 || n.height <= 0
    ? null
    : {
        x: Pt(((e.clientX - n.left) / n.width) * t.width, 0, t.width),
        y: Pt(((e.clientY - n.top) / n.height) * t.height, 0, t.height),
      };
}
function ft({ pageElement: e, pageSize: t }) {
  let n = e.querySelector(`.textLayer`),
    r = e.ownerDocument.getSelection();
  if (
    n == null ||
    r == null ||
    r.isCollapsed ||
    r.rangeCount === 0 ||
    !At(r, n)
  )
    return null;
  let i = Nt(r.toString());
  if (i.length === 0) return null;
  let a = r.getRangeAt(0);
  if (!n.contains(a.commonAncestorContainer)) return null;
  let o = Array.from(a.getClientRects()),
    s = St({ clientRects: o, pageElement: e, pageSize: t });
  if (s == null) return null;
  let c = Ct({ clientRects: o, pageElement: e, pageSize: t });
  return {
    askForEditAnchor:
      wt({ clientRects: o, pageElement: e, pageSize: t, selection: r }) ??
      void 0,
    kind: `region`,
    nearbyText: i,
    rect: s,
    selectedText: i,
    selectionKind: `text`,
    ...(c.length <= 1 ? {} : { selectionRects: c }),
  };
}
function pt({
  clientX: e,
  clientY: t,
  includePreviewMetadata: n,
  layerElement: r,
  pageElement: i,
  pageSize: a,
}) {
  for (let o of i.ownerDocument.elementsFromPoint?.(e, t) ?? []) {
    if (o === r || r.contains(o) || !i.contains(o)) continue;
    let e = vt({
      includePreviewMetadata: n,
      pageElement: i,
      pageSize: a,
      target: o,
    });
    if (e != null) return e;
  }
  return null;
}
function mt(e, t = !1) {
  let n = gt(e.start, e.current);
  return !t && n.width < Ft && n.height < Ft
    ? { kind: `point`, point: e.current }
    : { kind: `region`, rect: n };
}
function ht(e) {
  return (
    Math.abs(e.clientCurrent.x - e.clientStart.x) >= It ||
    Math.abs(e.clientCurrent.y - e.clientStart.y) >= It
  );
}
function gt(e, t) {
  return {
    x: Math.min(e.x, t.x),
    y: Math.min(e.y, t.y),
    width: Math.abs(e.x - t.x),
    height: Math.abs(e.y - t.y),
  };
}
function _t(e) {
  return ge(e);
}
function vt({
  includePreviewMetadata: e,
  pageElement: t,
  pageSize: n,
  target: r,
}) {
  let i = yt(r, t);
  if (i == null) return null;
  let a = St({
    clientRects: [i.element.getBoundingClientRect()],
    pageElement: t,
    pageSize: n,
  });
  if (a == null) return null;
  let o = e ? jt(i.element) : ``;
  return {
    kind: `region`,
    ...(o.length === 0 ? {} : { nearbyText: o }),
    rect: a,
    selectionKind: i.selectionKind,
    ...(i.selectionKind !== `text` || o.length === 0
      ? {}
      : { selectedText: o, selectionRects: [a] }),
  };
}
function yt(e, t) {
  let n = bt(e, t, xt);
  if (n != null) return { element: n, selectionKind: `text` };
  let r = bt(e, t, (e) =>
    e.matches(`.annotationLayer a, .annotationLayer .linkAnnotation`),
  );
  if (r != null) return { element: r, selectionKind: `link` };
  let i = bt(e, t, (e) => e.matches(`.annotationLayer section`));
  return i == null ? null : { element: i, selectionKind: `annotation` };
}
function bt(e, t, n) {
  let r = e;
  for (; r != null && r !== t; ) {
    if (n(r)) return r;
    r = r.parentElement;
  }
  return null;
}
function xt(e) {
  return (
    e.matches(`.textLayer span:not(.markedContent)`) &&
    e.getAttribute(`role`) !== `img`
  );
}
function St({ clientRects: e, pageElement: t, pageSize: n }) {
  let r = t.getBoundingClientRect();
  if (r.width <= 0 || r.height <= 0) return null;
  let i = Ot(e);
  if (i == null) return null;
  let a = Pt(((i.left - r.left) / r.width) * n.width, 0, n.width),
    o = Pt(((i.top - r.top) / r.height) * n.height, 0, n.height),
    s = Pt(((i.right - r.left) / r.width) * n.width, 0, n.width),
    c = Pt(((i.bottom - r.top) / r.height) * n.height, 0, n.height);
  return s <= a || c <= o ? null : { x: a, y: o, width: s - a, height: c - o };
}
function Ct({ clientRects: e, pageElement: t, pageSize: n }) {
  let r = [];
  for (let i of Et(e)) {
    let e = St({ clientRects: [i], pageElement: t, pageSize: n });
    e != null && r.push(e);
  }
  return r;
}
function wt({ clientRects: e, pageElement: t, pageSize: n, selection: r }) {
  let i = t.getBoundingClientRect();
  if (i.width <= 0 || i.height <= 0 || e.length === 0) return null;
  let a = Ot(e);
  if (a == null) return null;
  let o = kt(r),
    s = o ? e[e.length - 1] : e[0];
  if (s == null) return null;
  let c = s.top + s.height / 2,
    l = a.top + a.height / 2,
    u = s.top - 6 - 28 >= i.top,
    d = s.bottom + 6 + 28 <= i.bottom,
    f = c > l && d ? `below` : u ? `above` : `below`;
  return {
    placement: f,
    point: Tt({
      clientX: o ? s.right : s.left,
      clientY: f === `above` ? s.top : s.bottom,
      pageElement: t,
      pageSize: n,
    }),
  };
}
function Tt({ clientX: e, clientY: t, pageElement: n, pageSize: r }) {
  let i = n.getBoundingClientRect();
  return {
    x: Pt(((e - i.left) / i.width) * r.width, 0, r.width),
    y: Pt(((t - i.top) / i.height) * r.height, 0, r.height),
  };
}
function Et(e) {
  let t = [],
    n = e
      .filter((e) => e.width > 0 && e.height > 0)
      .sort((e, t) => e.top - t.top || e.left - t.left);
  for (let e of n) {
    let n = t.find((t) => Dt(t, e));
    if (n == null) {
      t.push({
        bottom: e.bottom,
        height: e.height,
        left: e.left,
        right: e.right,
        top: e.top,
        width: e.width,
      });
      continue;
    }
    ((n.left = Math.min(n.left, e.left)),
      (n.top = Math.min(n.top, e.top)),
      (n.right = Math.max(n.right, e.right)),
      (n.bottom = Math.max(n.bottom, e.bottom)),
      (n.width = n.right - n.left),
      (n.height = n.bottom - n.top));
  }
  return t;
}
function Dt(e, t) {
  return (
    Math.min(e.bottom, t.bottom) - Math.max(e.top, t.top) >=
    Math.min(e.height, t.height) * 0.5
  );
}
function Ot(e) {
  let t = 1 / 0,
    n = 1 / 0,
    r = -1 / 0,
    i = -1 / 0;
  for (let a of e)
    a.width <= 0 ||
      a.height <= 0 ||
      ((t = Math.min(t, a.left)),
      (n = Math.min(n, a.top)),
      (r = Math.max(r, a.right)),
      (i = Math.max(i, a.bottom)));
  return !Number.isFinite(t) ||
    !Number.isFinite(n) ||
    !Number.isFinite(r) ||
    !Number.isFinite(i)
    ? null
    : { bottom: i, height: i - n, left: t, right: r, top: n, width: r - t };
}
function kt(e) {
  if (e.anchorNode == null || e.focusNode == null) return !0;
  if (e.anchorNode === e.focusNode) return e.focusOffset >= e.anchorOffset;
  let t = e.anchorNode.compareDocumentPosition(e.focusNode);
  return t === Node.DOCUMENT_POSITION_FOLLOWING
    ? !0
    : t !== Node.DOCUMENT_POSITION_PRECEDING;
}
function At(e, t) {
  return (
    e.anchorNode != null &&
    e.focusNode != null &&
    t.contains(e.anchorNode) &&
    t.contains(e.focusNode)
  );
}
function jt(e) {
  let t = [];
  Mt(e, t);
  let n = Nt(t.join(` `));
  return n.length > 0
    ? n
    : Nt(
        (e instanceof HTMLAnchorElement ? e : e.querySelector(`a`))?.href ?? ``,
      );
}
function Mt(e, t) {
  if (e.nodeType === Node.TEXT_NODE) {
    let n = Nt(e.textContent ?? ``);
    n.length > 0 && t.push(n);
    return;
  }
  for (let n of e.childNodes) Mt(n, t);
}
function Nt(e) {
  return e.replace(/\s+/g, ` `).trim().slice(0, Lt);
}
function Pt(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
var Ft,
  It,
  Lt,
  Rt = e(() => {
    (J(), (Ft = 8), (It = 3), (Lt = 500));
  });
function zt({
  comments: e,
  isCommentMode: t,
  nextCommentNumber: n,
  onCommentsChange: i,
  onDraftActiveChange: o,
  conversationId: s,
  page: c,
  pageCount: l,
  pageNumber: u,
  pageSize: f,
  path: p,
  tabId: m,
  threadId: h,
  title: _,
}) {
  let v = a(r),
    y = se(),
    b = (0, Y.useRef)(null),
    x = (0, Y.useRef)(null),
    [S, C] = (0, Y.useState)(null),
    [w, T] = (0, Y.useState)(null),
    [E, D] = (0, Y.useState)(``),
    [O, k] = (0, Y.useState)(null),
    [A, j] = (0, Y.useState)(null),
    [M, N] = (0, Y.useState)(null),
    [P, ee] = (0, Y.useState)(null),
    [I, te] = (0, Y.useState)(null),
    [L, R] = (0, Y.useState)(!1),
    [z, B] = (0, Y.useState)(!1),
    ne = y.formatMessage({
      id: `artifactPdfPreview.commentInput`,
      defaultMessage: `PDF annotation comment`,
      description: `Aria label for the PDF annotation comment input`,
    }),
    V = y.formatMessage({
      id: `artifactAnnotationComment.placeholder`,
      defaultMessage: `Describe a change or ask a question`,
      description: `Placeholder text for an artifact annotation comment editor`,
    }),
    H = y.formatMessage({
      id: `artifactPdfPreview.askForEdit`,
      defaultMessage: `Ask Codex`,
      description: `Button label for starting a contextual PDF annotation from selected text`,
    }),
    U = (0, Y.useMemo)(
      () => e.filter((e) => e.localPdfContext?.pageNumber === u),
      [e, u],
    ),
    ae = I == null ? null : (U.find((e) => rn(e) === I) ?? null),
    W = P == null ? null : (U.find((e) => rn(e) === P) ?? null),
    oe = W == null ? null : Yt(W),
    G = w ?? oe,
    K = (0, Y.useMemo)(
      () =>
        w == null
          ? oe == null || W == null || P == null
            ? null
            : Kt({
                anchor: oe,
                body: Xt(W),
                conversationId: s,
                pageNumber: u,
                pageSize: f,
                path: p,
                target: { mode: `edit`, commentId: P },
                title: _,
              })
          : Kt({
              anchor: w,
              body: E,
              conversationId: s,
              pageNumber: u,
              pageSize: f,
              path: p,
              target: { mode: `create` },
              title: _,
            }),
      [s, w, E, oe, W, P, u, f, p, _],
    ),
    ce = G == null ? null : Zt({ anchor: G, layer: S, pageSize: f }),
    le = G != null,
    q = (0, Y.useCallback)(() => {
      (w != null && o?.(u, !1),
        T(null),
        j(null),
        N(null),
        D(``),
        ee(null),
        R(!1));
    }, [w, o, u]),
    pe = (0, Y.useCallback)((e) => {
      (D(e), R(!1));
    }, []),
    me = (0, Y.useCallback)(() => {
      typeof window > `u` ||
        ue({
          animationFrameRef: x,
          animationWindow: window,
          editorWrapper: b.current,
        });
    }, []),
    he = (0, Y.useCallback)(
      () =>
        K == null
          ? !1
          : K.target.mode === `create` && E.trim().length > 0
            ? L
              ? (q(), !0)
              : (R(!0), me(), !1)
            : (q(), !0),
      [K, q, E, L, me],
    ),
    ge = (0, Y.useEffectEvent)(() => {
      if (G == null) return;
      let e = Zt({ anchor: G, layer: S, pageSize: f });
      e != null && ve(b.current, e);
    });
  (0, Y.useEffect)(() => {
    if (!le || S == null) return;
    let e = S.ownerDocument,
      t = e.defaultView,
      n = () => {
        ge();
      };
    (e.addEventListener(`scroll`, n, { capture: !0 }),
      t?.addEventListener(`resize`, n));
    let r = typeof ResizeObserver > `u` ? null : new ResizeObserver(n);
    return (
      r?.observe(S),
      n(),
      () => {
        (e.removeEventListener(`scroll`, n, { capture: !0 }),
          t?.removeEventListener(`resize`, n),
          r?.disconnect());
      }
    );
  }, [le, S]);
  let J = (0, Y.useEffectEvent)((e) => {
    let t = e.target;
    (t instanceof Node && b.current?.contains(t)) ||
      (e.preventDefault(),
      e.stopPropagation(),
      he() &&
        (t instanceof Node ? t.ownerDocument : S?.ownerDocument)
          ?.getSelection()
          ?.removeAllRanges());
  });
  (0, Y.useEffect)(() => {
    if (t || K?.target.mode !== `create` || S == null) return;
    let e = S.ownerDocument,
      n = (e) => {
        J(e);
      };
    return (
      e.addEventListener(`pointerdown`, n, { capture: !0 }),
      () => {
        e.removeEventListener(`pointerdown`, n, { capture: !0 });
      }
    );
  }, [K?.target.mode, t, S]);
  let ye = (0, Y.useEffectEvent)(() => {
    if (t || S == null) return;
    let e = S.parentElement;
    if (e == null) return;
    let n = ft({ pageElement: e, pageSize: f });
    if (n == null) {
      j(null);
      return;
    }
    ((w != null || P != null) && !he()) ||
      (j(n), T(null), D(``), ee(null), te(null), N(null), R(!1));
  });
  (0, Y.useEffect)(() => {
    if (S == null || t) return;
    let e = S.parentElement;
    if (e == null) return;
    let n = () => {
      ye();
    };
    return (
      e.addEventListener(`mouseup`, n),
      e.addEventListener(`keyup`, n),
      () => {
        (e.removeEventListener(`mouseup`, n),
          e.removeEventListener(`keyup`, n));
      }
    );
  }, [t, S]);
  let be = (e, n, r) => {
      if (!t || S == null) return null;
      let i = S.parentElement;
      return i == null
        ? null
        : pt({
            clientX: e,
            clientY: n,
            includePreviewMetadata: r,
            layerElement: S,
            pageElement: i,
            pageSize: f,
          });
    },
    xe = (e, n) => {
      (Pe(
        v,
        {
          artifactTabId: m,
          artifactType: `pdf`,
          importKind: `pdf`,
          threadId: h,
        },
        { annotationModeEnabled: t, startSource: n },
      ),
        w ?? o?.(u, !0),
        T(e),
        j(null),
        N(null),
        D(``),
        ee(null),
        te(null),
        R(!1));
    },
    Se = (0, Y.useEffectEvent)((e, t) => {
      if (w != null || P != null || !_e(e)) return;
      let n =
        ft({ pageElement: t, pageSize: f }) ??
        (A?.selectionKind === `text` ? null : A);
      n != null &&
        (e.preventDefault(), e.stopPropagation(), xe(n, `ask_codex_shortcut`));
    });
  (0, Y.useEffect)(() => {
    if (S == null || t) return;
    let e = S.parentElement;
    if (e == null) return;
    let n = (t) => {
      Se(t, e);
    };
    return (
      e.ownerDocument.addEventListener(`keydown`, n, { capture: !0 }),
      () => {
        e.ownerDocument.removeEventListener(`keydown`, n, { capture: !0 });
      }
    );
  }, [t, S]);
  let Ee = (e) => {
      ((w != null || P != null) && !he()) || xe(e, `annotation_mode_pointer`);
    },
    Oe = (e) => {
      if (!t || !e.isPrimary || e.button !== 0) return;
      let n = dt(e, f);
      n != null &&
        (e.preventDefault(),
        e.stopPropagation(),
        e.currentTarget.ownerDocument.getSelection()?.removeAllRanges(),
        e.currentTarget.setPointerCapture(e.pointerId),
        j(null),
        N(null),
        te(null),
        k({
          pointerId: e.pointerId,
          start: n,
          current: n,
          clientStart: { x: e.clientX, y: e.clientY },
          clientCurrent: { x: e.clientX, y: e.clientY },
        }));
    },
    ke = (e) => {
      if (O == null) {
        if (w != null || P != null) {
          N(null);
          return;
        }
        N(be(e.clientX, e.clientY, !1));
        return;
      }
      if (e.pointerId !== O.pointerId) return;
      let t = dt(e, f);
      t != null &&
        (e.preventDefault(),
        e.stopPropagation(),
        k((n) =>
          n == null || n.pointerId !== e.pointerId
            ? n
            : {
                ...n,
                current: t,
                clientCurrent: { x: e.clientX, y: e.clientY },
              },
        ));
    },
    Ae = (e) => {
      if (O == null || e.pointerId !== O.pointerId) return;
      let t = dt(e, f) ?? O.current;
      (e.preventDefault(),
        e.stopPropagation(),
        e.currentTarget.hasPointerCapture(e.pointerId) &&
          e.currentTarget.releasePointerCapture(e.pointerId));
      let n = {
          ...O,
          current: t,
          clientCurrent: { x: e.clientX, y: e.clientY },
        },
        r = ht(n),
        i = mt(n, r);
      if (!r) {
        let t = be(e.clientX, e.clientY, !0);
        if (t != null) {
          (k(null), Ee(t));
          return;
        }
      }
      if (w != null && i.kind === `point`) {
        (he(), k(null));
        return;
      }
      (xe(i, `annotation_mode_pointer`), k(null));
    },
    je = async (e, { submitDirectly: r = !1 } = {}) => {
      let a = e.body.trim();
      if (P != null) {
        if (a.length === 0 || z) return;
        (i((e) =>
          e.map((e) =>
            rn(e) === P
              ? { ...e, content: [{ content_type: `text`, text: a }] }
              : e,
          ),
        ),
          q());
        return;
      }
      if (!(w == null || a.length === 0 || z))
        try {
          B(!0);
          let o = qt({ anchor: w, pageSize: f }),
            y = crypto.randomUUID(),
            b;
          try {
            b = await Qt({
              anchor: w,
              commentId: y,
              markerLabel: String(n),
              page: c,
              pageNumber: u,
              pageSize: f,
            });
          } catch {
            b = void 0;
          }
          let x = d({
            body: a,
            line: n,
            metadata: o,
            pageCount: l,
            pageNumber: u,
            path: p,
            screenshot: b,
            title: _,
          });
          (re(v, ie, {
            commentType: o.kind,
            submitMode: r ? `direct` : `saved`,
          }),
            Me(
              v,
              {
                artifactTabId: m,
                artifactType: `pdf`,
                importKind: `pdf`,
                threadId: h,
              },
              {
                annotationModeEnabled: t,
                annotationTargetKind: o.kind,
                submitMode: r ? `direct` : `saved`,
                submitSource: e.submitSource,
              },
            ),
            r
              ? g.dispatchHostMessage({
                  type: `pdf-direct-comment`,
                  body: a,
                  comment: x,
                  conversationId: s,
                  sessionId: y,
                })
              : i((e) => [...e, x]),
            q());
        } finally {
          B(!1);
        }
    };
  return (0, X.jsxs)(`div`, {
    ref: C,
    className: F(`absolute inset-0 z-[3]`, !t && `pointer-events-none`),
    "data-testid": `artifact-pdf-comment-layer`,
    style: t ? { cursor: de } : void 0,
    onPointerDown: Oe,
    onPointerMove: ke,
    onPointerUp: Ae,
    onPointerCancel: () => {
      (k(null), N(null));
    },
    onPointerLeave: () => N(null),
    children: [
      U.map((e) =>
        (0, X.jsx)(
          Bt,
          {
            comment: e,
            isSelected: rn(e) === P,
            onEdit: (e) => {
              (w != null && o?.(u, !1),
                T(null),
                j(null),
                N(null),
                D(``),
                R(!1),
                te(null),
                ee(e));
            },
            onPreviewChange: te,
          },
          rn(e),
        ),
      ),
      ae == null || P != null
        ? null
        : (0, X.jsx)(Vt, { comment: ae, layer: S }),
      M != null && w == null && P == null
        ? (0, X.jsx)(we, {
            paddingPx: 4,
            pageSize: f,
            rect: M.rect,
            testId: `artifact-pdf-element-hover-highlight`,
          })
        : null,
      A != null && w == null
        ? (0, X.jsx)(fe, {
            anchor: A.askForEditAnchor,
            label: H,
            pageSize: f,
            rect: A.rect,
            testId: `artifact-pdf-ask-for-edit-button`,
            onClick: () => xe(A, `ask_codex_button`),
          })
        : null,
      O == null
        ? null
        : (0, X.jsx)(Wt, { rect: gt(O.start, O.current), pageSize: f }),
      w == null ? null : (0, X.jsx)(Ht, { anchor: w, label: n, pageSize: f }),
      G == null || ce == null || K == null
        ? null
        : (0, X.jsx)(`div`, {
            ref: b,
            className: Ce,
            style: { left: ce.x, top: ce.y, height: Te, width: 294 },
            onPointerDown: (e) => e.stopPropagation(),
            children: (0, X.jsx)(
              De,
              {
                allowImageAttachments: !1,
                defaultCreateSubmitMode: `direct`,
                inputAriaLabel: ne,
                keyboardEventTarget: typeof window > `u` ? void 0 : window,
                placeholder: V,
                session: K,
                windowHeight: Te,
                onCancel: q,
                onDelete: (e) => {
                  (i((t) => t.filter((t) => rn(t) !== e)), q());
                },
                onDirectSubmit: (e) => {
                  je(e, { submitDirectly: !0 });
                },
                onEscape: q,
                onBodyChange: K.target.mode === `create` ? pe : void 0,
                onLightDismissibilityChange: sn,
                onMounted: sn,
                onSubmit: (e) => {
                  je(e);
                },
              },
              K.sessionId,
            ),
          }),
    ],
  });
}
function Bt(e) {
  let t = (0, on.c)(46),
    { comment: n, isSelected: r, onEdit: i, onPreviewChange: a } = e,
    o = se(),
    s = n.localPdfCommentMetadata;
  if (s == null) return null;
  let c;
  t[0] === n ? (c = t[1]) : ((c = rn(n)), (t[0] = n), (t[1] = c));
  let l = c,
    u;
  t[2] !== n.position.line || t[3] !== o
    ? ((u = o.formatMessage(
        {
          id: `artifactPdfPreview.commentMarkerLabel`,
          defaultMessage: `PDF annotation {commentNumber}`,
          description: `Accessible label for a placed PDF annotation marker`,
        },
        { commentNumber: n.position.line },
      )),
      (t[2] = n.position.line),
      (t[3] = o),
      (t[4] = u))
    : (u = t[4]);
  let d = u,
    f;
  t[5] !== l || t[6] !== a
    ? ((f = () => a(l)), (t[5] = l), (t[6] = a), (t[7] = f))
    : (f = t[7]);
  let p = f,
    m;
  t[8] === a ? (m = t[9]) : ((m = () => a(null)), (t[8] = a), (t[9] = m));
  let h = m;
  if (s.kind === `region`) {
    let e;
    t[10] !== s.nearbyText ||
    t[11] !== s.pageRect ||
    t[12] !== s.pageSize ||
    t[13] !== s.selectedText ||
    t[14] !== s.selectionKind ||
    t[15] !== s.selectionRects
      ? ((e =
          s.selectionKind == null
            ? (0, X.jsx)(Wt, { rect: s.pageRect, pageSize: s.pageSize })
            : (0, X.jsx)(Ut, {
                bordered: !0,
                anchor: {
                  kind: `region`,
                  nearbyText: s.nearbyText,
                  rect: s.pageRect,
                  selectedText: s.selectedText,
                  selectionKind: s.selectionKind,
                  selectionRects: s.selectionRects,
                },
                pageSize: s.pageSize,
                testId: `artifact-pdf-comment-region-outline`,
              })),
        (t[10] = s.nearbyText),
        (t[11] = s.pageRect),
        (t[12] = s.pageSize),
        (t[13] = s.selectedText),
        (t[14] = s.selectionKind),
        (t[15] = s.selectionRects),
        (t[16] = e))
      : (e = t[16]);
    let a = n.position.line,
      o;
    t[17] !== l || t[18] !== i
      ? ((o = () => i(l)), (t[17] = l), (t[18] = i), (t[19] = o))
      : (o = t[19]);
    let c;
    t[20] === s.pageRect
      ? (c = t[21])
      : ((c = _t(s.pageRect)), (t[20] = s.pageRect), (t[21] = c));
    let u;
    t[22] !== n.position.line ||
    t[23] !== d ||
    t[24] !== h ||
    t[25] !== r ||
    t[26] !== s.pageSize ||
    t[27] !== p ||
    t[28] !== o ||
    t[29] !== c
      ? ((u = (0, X.jsx)(Gt, {
          ariaLabel: d,
          isSelected: r,
          label: a,
          onClick: o,
          onPreviewHide: h,
          onPreviewShow: p,
          point: c,
          pageSize: s.pageSize,
        })),
        (t[22] = n.position.line),
        (t[23] = d),
        (t[24] = h),
        (t[25] = r),
        (t[26] = s.pageSize),
        (t[27] = p),
        (t[28] = o),
        (t[29] = c),
        (t[30] = u))
      : (u = t[30]);
    let f;
    return (
      t[31] !== e || t[32] !== u
        ? ((f = (0, X.jsxs)(X.Fragment, { children: [e, u] })),
          (t[31] = e),
          (t[32] = u),
          (t[33] = f))
        : (f = t[33]),
      f
    );
  }
  let g;
  t[34] !== l || t[35] !== i
    ? ((g = () => i(l)), (t[34] = l), (t[35] = i), (t[36] = g))
    : (g = t[36]);
  let _;
  return (
    t[37] !== n.position.line ||
    t[38] !== d ||
    t[39] !== h ||
    t[40] !== r ||
    t[41] !== s.pagePoint ||
    t[42] !== s.pageSize ||
    t[43] !== p ||
    t[44] !== g
      ? ((_ = (0, X.jsx)(Gt, {
          ariaLabel: d,
          isSelected: r,
          label: n.position.line,
          onClick: g,
          onPreviewHide: h,
          onPreviewShow: p,
          point: s.pagePoint,
          pageSize: s.pageSize,
        })),
        (t[37] = n.position.line),
        (t[38] = d),
        (t[39] = h),
        (t[40] = r),
        (t[41] = s.pagePoint),
        (t[42] = s.pageSize),
        (t[43] = p),
        (t[44] = g),
        (t[45] = _))
      : (_ = t[45]),
    _
  );
}
function Vt(e) {
  let t = (0, on.c)(9),
    { comment: n, layer: r } = e,
    i;
  t[0] === n ? (i = t[1]) : ((i = Jt(n)), (t[0] = n), (t[1] = i));
  let a = i,
    o;
  t[2] === n ? (o = t[3]) : ((o = Xt(n)), (t[2] = n), (t[3] = o));
  let s = o;
  if (a == null) return null;
  let c;
  return (
    t[4] !== a.pageSize || t[5] !== a.point || t[6] !== s || t[7] !== r
      ? ((c = (0, X.jsx)(ke, {
          body: s,
          layer: r,
          pageSize: a.pageSize,
          point: a.point,
          testId: `artifact-pdf-comment-preview`,
        })),
        (t[4] = a.pageSize),
        (t[5] = a.point),
        (t[6] = s),
        (t[7] = r),
        (t[8] = c))
      : (c = t[8]),
    c
  );
}
function Ht(e) {
  let t = (0, on.c)(16),
    { anchor: n, label: r, pageSize: i } = e;
  if (n.kind === `region`) {
    let e;
    t[0] !== n || t[1] !== i
      ? ((e =
          n.selectionKind == null
            ? (0, X.jsx)(Wt, { rect: n.rect, pageSize: i })
            : (0, X.jsx)(Ut, {
                bordered: !0,
                anchor: n,
                pageSize: i,
                testId: `artifact-pdf-comment-region-outline`,
              })),
        (t[0] = n),
        (t[1] = i),
        (t[2] = e))
      : (e = t[2]);
    let a;
    t[3] === n.rect
      ? (a = t[4])
      : ((a = _t(n.rect)), (t[3] = n.rect), (t[4] = a));
    let o;
    t[5] !== r || t[6] !== i || t[7] !== a
      ? ((o = (0, X.jsx)(Gt, { draft: !0, label: r, point: a, pageSize: i })),
        (t[5] = r),
        (t[6] = i),
        (t[7] = a),
        (t[8] = o))
      : (o = t[8]);
    let s;
    return (
      t[9] !== e || t[10] !== o
        ? ((s = (0, X.jsxs)(X.Fragment, { children: [e, o] })),
          (t[9] = e),
          (t[10] = o),
          (t[11] = s))
        : (s = t[11]),
      s
    );
  }
  let a;
  return (
    t[12] !== n.point || t[13] !== r || t[14] !== i
      ? ((a = (0, X.jsx)(Gt, {
          draft: !0,
          label: r,
          point: n.point,
          pageSize: i,
        })),
        (t[12] = n.point),
        (t[13] = r),
        (t[14] = i),
        (t[15] = a))
      : (a = t[15]),
    a
  );
}
function Ut(e) {
  let t = (0, on.c)(17),
    { anchor: n, bordered: r, pageSize: i, testId: a } = e,
    o = r === void 0 ? !1 : r;
  if (n.selectionKind === `text`) {
    let e;
    t[0] !== n.rect || t[1] !== n.selectionRects
      ? ((e =
          n.selectionRects == null || n.selectionRects.length === 0
            ? [n.rect]
            : n.selectionRects),
        (t[0] = n.rect),
        (t[1] = n.selectionRects),
        (t[2] = e))
      : (e = t[2]);
    let r = e,
      o;
    if (t[3] !== i || t[4] !== a || t[5] !== r) {
      let e;
      (t[7] !== i || t[8] !== a
        ? ((e = (e, t) =>
            (0, X.jsx)(
              we,
              { paddingX: 4, paddingY: 0, pageSize: i, rect: e, testId: a },
              `${e.x}:${e.y}:${e.width}:${e.height}:${t}`,
            )),
          (t[7] = i),
          (t[8] = a),
          (t[9] = e))
        : (e = t[9]),
        (o = r.map(e)),
        (t[3] = i),
        (t[4] = a),
        (t[5] = r),
        (t[6] = o));
    } else o = t[6];
    let s;
    return (
      t[10] === o
        ? (s = t[11])
        : ((s = (0, X.jsx)(X.Fragment, { children: o })),
          (t[10] = o),
          (t[11] = s)),
      s
    );
  }
  let s;
  return (
    t[12] !== n.rect || t[13] !== o || t[14] !== i || t[15] !== a
      ? ((s = (0, X.jsx)(we, {
          bordered: o,
          paddingPx: 4,
          pageSize: i,
          rect: n.rect,
          testId: a,
        })),
        (t[12] = n.rect),
        (t[13] = o),
        (t[14] = i),
        (t[15] = a),
        (t[16] = s))
      : (s = t[16]),
    s
  );
}
function Wt(e) {
  let t = (0, on.c)(3),
    { pageSize: n, rect: r } = e,
    i;
  return (
    t[0] !== n || t[1] !== r
      ? ((i = (0, X.jsx)(pe, {
          pageSize: n,
          rect: r,
          testId: `artifact-pdf-comment-region-outline`,
        })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i))
      : (i = t[2]),
    i
  );
}
function Gt(e) {
  let t = (0, on.c)(10),
    {
      ariaLabel: n,
      draft: r,
      isSelected: i,
      label: a,
      onClick: o,
      onPreviewHide: s,
      onPreviewShow: c,
      pageSize: l,
      point: u,
    } = e,
    d = r === void 0 ? !1 : r,
    f = i === void 0 ? !1 : i,
    p;
  return (
    t[0] !== n ||
    t[1] !== d ||
    t[2] !== f ||
    t[3] !== a ||
    t[4] !== o ||
    t[5] !== s ||
    t[6] !== c ||
    t[7] !== l ||
    t[8] !== u
      ? ((p = (0, X.jsx)(he, {
          ariaLabel: n,
          draft: d,
          draftTestId: `artifact-pdf-comment-draft-marker`,
          isSelected: f,
          label: a,
          pageSize: l,
          point: u,
          testId: `artifact-pdf-comment-marker`,
          onClick: o,
          onPreviewHide: s,
          onPreviewShow: c,
        })),
        (t[0] = n),
        (t[1] = d),
        (t[2] = f),
        (t[3] = a),
        (t[4] = o),
        (t[5] = s),
        (t[6] = c),
        (t[7] = l),
        (t[8] = u),
        (t[9] = p))
      : (p = t[9]),
    p
  );
}
function Kt({
  anchor: e,
  body: t,
  conversationId: n,
  pageNumber: r,
  pageSize: i,
  path: a,
  target: o,
  title: s,
}) {
  let c =
      e.kind === `region`
        ? e.rect
        : { x: e.point.x, y: e.point.y, width: 1, height: 1 },
    l =
      e.kind === `region`
        ? { x: e.rect.x + e.rect.width, y: e.rect.y }
        : e.point;
  return {
    sessionId:
      o.mode === `edit`
        ? `pdf-comment-edit:${o.commentId}`
        : e.kind === `region`
          ? [
              `pdf-comment`,
              r,
              `region`,
              e.rect.x,
              e.rect.y,
              e.rect.width,
              e.rect.height,
            ].join(`:`)
          : [`pdf-comment`, r, `point`, e.point.x, e.point.y].join(`:`),
    conversationId: n,
    target: o,
    anchorState: {
      anchor: {
        kind: `region`,
        pageUrl: a,
        frameUrl: null,
        title: s,
        elementPath: `pdf-page-${r}`,
        point: { xPercent: i.width === 0 ? 0 : (l.x / i.width) * 100, y: l.y },
        rect: c,
        isFixed: !1,
        role: null,
        name: null,
        selector: null,
        framePath: [],
        nearbyText: null,
      },
      viewportRect: c,
      viewportPoint: l,
      viewportSize: i,
    },
    body: t,
    cwd: null,
    placementStrategy: `anchored`,
    previewAlignment: `end`,
    surfaceMode: `editor`,
  };
}
function qt({ anchor: e, pageSize: t }) {
  return e.kind === `region`
    ? {
        kind: `region`,
        pageRect: e.rect,
        pageSize: t,
        nearbyText: e.nearbyText,
        selectedText: e.selectedText,
        selectionKind: e.selectionKind,
        selectionRects: e.selectionRects,
      }
    : { kind: `point`, pagePoint: e.point, pageSize: t };
}
function Jt(e) {
  let t = e.localPdfCommentMetadata;
  return t == null
    ? null
    : t.kind === `region`
      ? { pageSize: t.pageSize, point: _t(t.pageRect) }
      : { pageSize: t.pageSize, point: t.pagePoint };
}
function Yt(e) {
  let t = e.localPdfCommentMetadata;
  return t == null
    ? null
    : t.kind === `region`
      ? {
          kind: `region`,
          nearbyText: t.nearbyText,
          rect: t.pageRect,
          selectedText: t.selectedText,
          selectionKind: t.selectionKind,
          selectionRects: t.selectionRects,
        }
      : { kind: `point`, point: t.pagePoint };
}
function Xt(e) {
  return e.content.flatMap((e) => (e.content_type === `text` ? [e.text] : []))
    .join(`
`);
}
function Zt({ anchor: e, layer: t, pageSize: n }) {
  return e.kind === `region` && e.selectionKind != null
    ? ye({ layer: t, pageSize: n, rect: e.rect })
    : xe({
        layer: t,
        markerPoint: e.kind === `region` ? _t(e.rect) : e.point,
        pageSize: n,
      });
}
async function Qt({
  anchor: e,
  commentId: t,
  markerLabel: n,
  page: r,
  pageNumber: i,
  pageSize: a,
}) {
  let o = $t(e, a),
    s = Math.min(2, Math.max(1, 1200 / o.width)),
    c = document.createElement(`canvas`);
  if (
    ((c.width = Math.ceil(a.width * s)),
    (c.height = Math.ceil(a.height * s)),
    c.getContext(`2d`) == null)
  )
    throw Error(`Unable to create PDF screenshot canvas context`);
  await r.render({ canvas: c, viewport: r.getViewport({ scale: s }) }).promise;
  let l = document.createElement(`canvas`);
  ((l.width = Math.ceil(o.width * s)), (l.height = Math.ceil(o.height * s)));
  let u = l.getContext(`2d`);
  if (u == null) throw Error(`Unable to create PDF crop canvas context`);
  return (
    u.drawImage(
      c,
      o.x * s,
      o.y * s,
      o.width * s,
      o.height * s,
      0,
      0,
      l.width,
      l.height,
    ),
    tn({ anchor: e, context: u, crop: o, markerLabel: n, scale: s }),
    {
      commentId: t,
      dataUrl: l.toDataURL(`image/png`),
      height: l.height,
      pageNumber: i,
      width: l.width,
    }
  );
}
function $t(e, t) {
  if (e.kind === `region`) {
    let n = Math.max(
      24,
      Math.min(72, Math.min(e.rect.width, e.rect.height) * 0.25),
    );
    return en(
      {
        x: e.rect.x - n,
        y: e.rect.y - n,
        width: e.rect.width + n * 2,
        height: e.rect.height + n * 2,
      },
      t,
    );
  }
  return en(
    { x: e.point.x - 180, y: e.point.y - 120, width: 360, height: 240 },
    t,
  );
}
function en(e, t) {
  let n = Math.min(Math.max(e.width, 1), t.width),
    r = Math.min(Math.max(e.height, 1), t.height);
  return {
    x: an(e.x, 0, t.width - n),
    y: an(e.y, 0, t.height - r),
    width: n,
    height: r,
  };
}
function tn({ anchor: e, context: t, crop: n, markerLabel: r, scale: i }) {
  if (
    (t.save(),
    (t.strokeStyle = Ee),
    (t.fillStyle = Ee),
    (t.lineWidth = 3),
    (t.font = `bold 14px sans-serif`),
    (t.textAlign = `center`),
    (t.textBaseline = `middle`),
    e.kind === `region`)
  ) {
    let a = (e.rect.x - n.x) * i,
      o = (e.rect.y - n.y) * i,
      s = e.rect.width * i,
      c = e.rect.height * i;
    (t.strokeRect(a, o, s, c), nn(t, r, a + s, o));
  } else nn(t, r, (e.point.x - n.x) * i, (e.point.y - n.y) * i);
  t.restore();
}
function nn(e, t, n, r) {
  (e.beginPath(),
    e.arc(n, r, 11, 0, Math.PI * 2),
    e.fill(),
    (e.lineWidth = 2),
    (e.strokeStyle = `#fff`),
    e.stroke(),
    (e.fillStyle = `#fff`),
    e.fillText(t, n, r + 0.5));
}
function rn(e) {
  return `${e.localPdfContext?.path ?? ``}:${e.localPdfContext?.pageNumber ?? 0}:${e.position.line}:${e.content.map(
    (e) => (e.content_type === `text` ? e.text : ``),
  ).join(`
`)}`;
}
function an(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
var on,
  Y,
  X,
  sn,
  cn = e(() => {
    ((on = p()),
      U(),
      N(),
      s(),
      o(),
      (Y = t(l(), 1)),
      H(),
      Se(),
      Oe(),
      c(),
      W(),
      n(),
      Fe(),
      be(),
      J(),
      Rt(),
      (X = h()),
      (sn = () => {}));
  });
function ln(e) {
  let t = (0, un.c)(5),
    { deferMs: n, page: r } = e,
    i = (0, dn.useRef)(null),
    a,
    o;
  (t[0] !== n || t[1] !== r
    ? ((a = () => {
        let e = i.current;
        if (e == null) return;
        let t = e;
        t.innerHTML = ``;
        let a = !1,
          o = null,
          s = null,
          c = async function () {
            let e = await Je();
            if (a) return;
            o = new e.TextLayer({
              container: t,
              textContentSource: r.streamTextContent({
                includeMarkedContent: !0,
              }),
              viewport: r.getViewport({ scale: 1 }),
            });
            try {
              await o.render();
            } catch {
              return;
            }
            if (a) return;
            let n = document.createElement(`div`);
            ((n.className = `endOfContent`), t.append(n));
          };
        return (
          (s = setTimeout(() => {
            c();
          }, n)),
          () => {
            ((a = !0),
              s != null && clearTimeout(s),
              o?.cancel(),
              (t.innerHTML = ``));
          }
        );
      }),
      (o = [n, r]),
      (t[0] = n),
      (t[1] = r),
      (t[2] = a),
      (t[3] = o))
    : ((a = t[2]), (o = t[3])),
    (0, dn.useEffect)(a, o));
  let s;
  return (
    t[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((s = (0, fn.jsx)(`div`, { ref: i, className: `textLayer` })),
        (t[4] = s))
      : (s = t[4]),
    s
  );
}
var un,
  dn,
  fn,
  pn = e(() => {
    ((un = p()), (dn = t(l(), 1)), tt(), (fn = h()));
  });
function mn(e) {
  let t = (0, bn.c)(36),
    { onBeforeZoom: n, pageViewportSize: r, pageWidth: i } = e,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = { kind: `page-width` }), (t[0] = a))
    : (a = t[0]);
  let [o, s] = (0, xn.useState)(a),
    [c, l] = (0, xn.useState)(!1),
    [u, d] = (0, xn.useState)(0),
    f = (0, xn.useRef)(null),
    p = (0, xn.useRef)(0),
    m = (0, xn.useRef)(null),
    h;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = () => {
        (l(!0),
          f.current != null && window.clearTimeout(f.current),
          (f.current = window.setTimeout(() => {
            ((f.current = null), l(!1), d(hn));
          }, 120)));
      }),
      (t[1] = h))
    : (h = t[1]);
  let g = h,
    _,
    v;
  (t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = () => () => {
        (f.current != null && window.clearTimeout(f.current),
          m.current != null && window.clearTimeout(m.current));
      }),
      (v = []),
      (t[2] = _),
      (t[3] = v))
    : ((_ = t[2]), (v = t[3])),
    (0, xn.useEffect)(_, v));
  let y;
  t[4] === n
    ? (y = t[5])
    : ((y = (e) => {
        (n({ kind: `center` }), g(), s(e));
      }),
      (t[4] = n),
      (t[5] = y));
  let b = y,
    x;
  t[6] !== r || t[7] !== i
    ? ((x = (e) => gn({ pageViewportSize: r, pageWidth: i, resize: e })),
      (t[6] = r),
      (t[7] = i),
      (t[8] = x))
    : (x = t[8]);
  let S = x,
    C;
  t[9] === b
    ? (C = t[10])
    : ((C = () => {
        b({ kind: `page-width` });
      }),
      (t[9] = b),
      (t[10] = C));
  let w = C,
    T;
  t[11] === b
    ? (T = t[12])
    : ((T = (e) => {
        b({ kind: `percentage`, value: yn(e / 100) });
      }),
      (t[11] = b),
      (t[12] = T));
  let E = T,
    D;
  t[13] !== S || t[14] !== n
    ? ((D = () => {
        (n({ kind: `center` }),
          g(),
          s((e) => ({ kind: `percentage`, value: vn(S(e), `out`) })));
      }),
      (t[13] = S),
      (t[14] = n),
      (t[15] = D))
    : (D = t[15]);
  let O = D,
    k;
  t[16] !== S || t[17] !== n
    ? ((k = () => {
        (n({ kind: `center` }),
          g(),
          s((e) => ({ kind: `percentage`, value: vn(S(e), `in`) })));
      }),
      (t[16] = S),
      (t[17] = n),
      (t[18] = k))
    : (k = t[18]);
  let A = k,
    j;
  t[19] !== S || t[20] !== n
    ? ((j = (e) => {
        if (
          !e.ctrlKey ||
          (e.preventDefault(), e.deltaY === 0) ||
          (m.current != null && window.clearTimeout(m.current),
          (m.current = window.setTimeout(() => {
            ((p.current = 0), (m.current = null));
          }, Dn)),
          (p.current += e.deltaY),
          Math.abs(p.current) < En)
        )
          return;
        let t = p.current > 0 ? `out` : `in`;
        ((p.current = 0),
          n({ clientX: e.clientX, clientY: e.clientY, kind: `point` }),
          g(),
          s((e) => ({ kind: `percentage`, value: vn(S(e), t) })));
      }),
      (t[19] = S),
      (t[20] = n),
      (t[21] = j))
    : (j = t[21]);
  let M = j,
    N;
  t[22] !== S || t[23] !== o
    ? ((N = Math.round(S(o) * 100)), (t[22] = S), (t[23] = o), (t[24] = N))
    : (N = t[24]);
  let P;
  return (
    t[25] !== O ||
    t[26] !== w ||
    t[27] !== M ||
    t[28] !== A ||
    t[29] !== c ||
    t[30] !== o ||
    t[31] !== b ||
    t[32] !== E ||
    t[33] !== N ||
    t[34] !== u
      ? ((P = {
          beginScaleChange: g,
          decreaseZoom: O,
          fitToWidth: w,
          handleWheel: M,
          increaseZoom: A,
          isZooming: c,
          resize: o,
          setResize: b,
          setZoomPercent: E,
          zoomEndTick: u,
          zoomPercent: N,
        }),
        (t[25] = O),
        (t[26] = w),
        (t[27] = M),
        (t[28] = A),
        (t[29] = c),
        (t[30] = o),
        (t[31] = b),
        (t[32] = E),
        (t[33] = N),
        (t[34] = u),
        (t[35] = P))
      : (P = t[35]),
    P
  );
}
function hn(e) {
  return e + 1;
}
function gn({ pageViewportSize: e, pageWidth: t, resize: n }) {
  if (n.kind === `percentage`) return yn(n.value);
  let r = e?.width ?? Sn.width;
  return t == null || t <= 0 || r <= 0 ? 1 : yn(t / r);
}
function _n({ pageViewportSize: e, pageWidth: t, resize: n }) {
  let r = e ?? Sn,
    i = r.width / r.height,
    a =
      n.kind === `page-width` && t != null && t > 0
        ? t
        : r.width * gn({ pageViewportSize: e, pageWidth: t, resize: n });
  return { height: Math.round(a / i), width: Math.round(a) };
}
function vn(e, t) {
  let n = yn(e);
  if (t === `in`) {
    for (let e of On) if (e > n + Tn) return e;
    return On[On.length - 1];
  }
  for (let e = On.length - 1; e >= 0; --e) {
    let t = On[e];
    if (t < n - Tn) return t;
  }
  return On[0];
}
function yn(e) {
  return Math.min(wn, Math.max(Cn, e));
}
var bn,
  xn,
  Sn,
  Cn,
  wn,
  Tn,
  En,
  Dn,
  On,
  kn = e(() => {
    ((bn = p()),
      (xn = t(l(), 1)),
      (Sn = { height: 792, width: 612 }),
      (Cn = 0.3),
      (wn = 8),
      (Tn = 1e-4),
      (En = 5),
      (Dn = 200),
      (On = [
        Cn,
        0.4,
        0.5,
        0.67,
        0.75,
        0.9,
        1,
        1.1,
        1.25,
        1.5,
        1.75,
        2,
        2.5,
        3,
        4,
        5,
        6,
        7,
        wn,
      ]));
  });
function An() {}
var jn,
  Mn,
  Nn,
  Pn,
  Fn = e(() => {
    ((jn = p()),
      (Mn = t(l(), 1)),
      nt(),
      ut(),
      cn(),
      pn(),
      kn(),
      (Nn = h()),
      (Pn = (0, Mn.memo)(function (e) {
        let t = (0, jn.c)(55),
          {
            commentLayer: n,
            currentPage: r,
            linkNavigation: i,
            pageNumber: a,
            pageSelector: o,
            pageViewportSize: s,
            pageWidth: c,
            pdfDocument: l,
            resize: u,
            scrollRootRef: d,
            isZooming: f,
            onViewportReady: p,
            zoomEndTick: m,
          } = e,
          h = (0, Mn.useRef)(null),
          g = (0, Mn.useRef)(null),
          [_, v] = (0, Mn.useState)(null),
          [y, b] = (0, Mn.useState)(!1),
          x = _?.pdfDocument === l,
          S = x ? _.page : null,
          C = x ? _.viewportSize : null,
          w = C ?? s,
          T;
        t[0] !== c || t[1] !== u || t[2] !== w
          ? ((T = _n({ pageViewportSize: w, pageWidth: c, resize: u })),
            (t[0] = c),
            (t[1] = u),
            (t[2] = w),
            (t[3] = T))
          : (T = t[3]);
        let E = T,
          D = C != null && C.width > 0 ? E.width / C.width : 1,
          O = Math.abs(r - a),
          k = y || O <= 2,
          A = y || O <= 2,
          j = y ? 50 : 50 + O * 40,
          M = j + O * 60,
          N,
          P;
        (t[4] !== a || t[5] !== l
          ? ((N = () => {
              let e = !1;
              return (
                v(null),
                (async function () {
                  try {
                    let t = await l.getPage(a);
                    if (e) return;
                    let n = t.getViewport({ scale: 1 });
                    v({
                      page: t,
                      pdfDocument: l,
                      viewportSize: { height: n.height, width: n.width },
                    });
                  } catch {
                    e || v(null);
                  }
                })(),
                () => {
                  e = !0;
                }
              );
            }),
            (P = [a, l]),
            (t[4] = a),
            (t[5] = l),
            (t[6] = N),
            (t[7] = P))
          : ((N = t[6]), (P = t[7])),
          (0, Mn.useEffect)(N, P));
        let F, ee;
        (t[8] !== C || t[9] !== p
          ? ((F = () => {
              C != null && p?.();
            }),
            (ee = [C, p]),
            (t[8] = C),
            (t[9] = p),
            (t[10] = F),
            (t[11] = ee))
          : ((F = t[10]), (ee = t[11])),
          (0, Mn.useLayoutEffect)(F, ee));
        let I, te;
        (t[12] === d
          ? ((I = t[13]), (te = t[14]))
          : ((I = () => {
              let e = g.current;
              if (e == null) return;
              if (typeof IntersectionObserver > `u`) {
                b(!0);
                return;
              }
              let t = new IntersectionObserver(
                (e) => {
                  let t = e[0];
                  t != null && b(t.isIntersecting || t.intersectionRatio > 0);
                },
                { root: d.current, rootMargin: `200px 0px`, threshold: 0.01 },
              );
              return (
                t.observe(e),
                () => {
                  t.disconnect();
                }
              );
            }),
            (te = [d]),
            (t[12] = d),
            (t[13] = I),
            (t[14] = te)),
          (0, Mn.useEffect)(I, te));
        let L;
        t[15] !== E.height ||
        t[16] !== E.width ||
        t[17] !== f ||
        t[18] !== S ||
        t[19] !== k
          ? ((L = () => {
              let e = h.current;
              if (e == null) return;
              if (S == null || !k) {
                ((e.width = 0), (e.height = 0));
                return;
              }
              if (f) return;
              let t = S.getViewport({ scale: 1 });
              if (t.width <= 0 || E.width <= 0 || E.height <= 0) return;
              let n = null,
                r = window.devicePixelRatio || 1,
                i = Math.ceil(E.width * r),
                a = Math.ceil(E.height * r);
              ((e.width = i),
                (e.height = a),
                e.getContext(`2d`)?.clearRect(0, 0, i, a));
              try {
                ((n = S.render({
                  canvas: e,
                  viewport: S.getViewport({ scale: i / t.width }),
                })),
                  n.promise.catch(An));
              } catch {
                return;
              }
              return () => {
                n?.cancel();
              };
            }),
            (t[15] = E.height),
            (t[16] = E.width),
            (t[17] = f),
            (t[18] = S),
            (t[19] = k),
            (t[20] = L))
          : (L = t[20]);
        let R;
        (t[21] !== E.height ||
        t[22] !== E.width ||
        t[23] !== f ||
        t[24] !== S ||
        t[25] !== k ||
        t[26] !== m
          ? ((R = [E.height, E.width, f, S, k, m]),
            (t[21] = E.height),
            (t[22] = E.width),
            (t[23] = f),
            (t[24] = S),
            (t[25] = k),
            (t[26] = m),
            (t[27] = R))
          : (R = t[27]),
          (0, Mn.useEffect)(L, R));
        let z = C == null ? void 0 : ``,
          B = S?.userUnit ?? 1,
          ne;
        t[28] !== E.height || t[29] !== E.width || t[30] !== D || t[31] !== B
          ? ((ne = {
              "--scale-factor": D,
              "--user-unit": B,
              height: E.height,
              width: E.width,
            }),
            (t[28] = E.height),
            (t[29] = E.width),
            (t[30] = D),
            (t[31] = B),
            (t[32] = ne))
          : (ne = t[32]);
        let re = ne,
          V;
        t[33] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((V = (0, Nn.jsx)(`canvas`, {
              ref: h,
              className: `absolute inset-0 size-full`,
            })),
            (t[33] = V))
          : (V = t[33]);
        let H;
        t[34] !== M ||
        t[35] !== f ||
        t[36] !== i ||
        t[37] !== S ||
        t[38] !== o ||
        t[39] !== l ||
        t[40] !== d ||
        t[41] !== A ||
        t[42] !== j
          ? ((H =
              S == null || f || !A
                ? null
                : (0, Nn.jsxs)(Nn.Fragment, {
                    children: [
                      (0, Nn.jsx)(ln, { page: S, deferMs: j }),
                      (0, Nn.jsx)(ot, {
                        deferMs: M,
                        linkNavigation: i,
                        page: S,
                        pageSelector: o,
                        pdfDocument: l,
                        scrollRootRef: d,
                      }),
                    ],
                  })),
            (t[34] = M),
            (t[35] = f),
            (t[36] = i),
            (t[37] = S),
            (t[38] = o),
            (t[39] = l),
            (t[40] = d),
            (t[41] = A),
            (t[42] = j),
            (t[43] = H))
          : (H = t[43]);
        let U;
        t[44] !== n || t[45] !== C || t[46] !== S || t[47] !== a
          ? ((U =
              S == null || C == null || n == null
                ? null
                : (0, Nn.jsx)(
                    zt,
                    {
                      comments: n.comments,
                      conversationId: n.conversationId,
                      isCommentMode: n.isCommentMode,
                      nextCommentNumber: n.nextCommentNumber,
                      onCommentsChange: n.onCommentsChange,
                      onDraftActiveChange: n.onDraftActiveChange,
                      page: S,
                      pageCount: n.pageCount,
                      pageNumber: a,
                      pageSize: C,
                      path: n.path,
                      tabId: n.tabId,
                      threadId: n.threadId,
                      title: n.title,
                    },
                    n.isCommentMode ? `comment` : `browse`,
                  )),
            (t[44] = n),
            (t[45] = C),
            (t[46] = S),
            (t[47] = a),
            (t[48] = U))
          : (U = t[48]);
        let ie;
        return (
          t[49] !== a ||
          t[50] !== z ||
          t[51] !== re ||
          t[52] !== H ||
          t[53] !== U
            ? ((ie = (0, Nn.jsxs)(`div`, {
                ref: g,
                className: `pdfPreviewPage relative shrink-0 overflow-hidden border border-token-border-default bg-white shadow-sm`,
                "data-artifact-pdf-page": !0,
                "data-page-number": a,
                "data-page-viewport-ready": z,
                style: re,
                children: [V, H, U],
              })),
              (t[49] = a),
              (t[50] = z),
              (t[51] = re),
              (t[52] = H),
              (t[53] = U),
              (t[54] = ie))
            : (ie = t[54]),
          ie
        );
      })));
  });
function In(e) {
  let t = (0, zn.c)(70),
    {
      initialPage: n,
      numPages: r,
      onClose: i,
      onOpenExternalLink: a,
      pageViewportSize: o,
      pdfDocument: s,
      title: c,
    } = e,
    l = se(),
    u = (0, Bn.useRef)(null),
    d;
  t[0] !== n || t[1] !== r
    ? ((d = Rn(n, r)), (t[0] = n), (t[1] = r), (t[2] = d))
    : (d = t[2]);
  let [f, p] = (0, Bn.useState)(d),
    [m, h] = (0, Bn.useState)(null),
    g;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (e) => {
        h({
          height: Math.floor(e.contentRect.height),
          width: Math.floor(e.contentRect.width),
        });
      }),
      (t[3] = g))
    : (g = t[3]);
  let _ = S(g),
    v;
  t[4] === _
    ? (v = t[5])
    : ((v = (e) => {
        ((u.current = e), _(e));
      }),
      (t[4] = _),
      (t[5] = v));
  let y = v,
    b;
  t[6] === r
    ? (b = t[7])
    : ((b = (e) => {
        p(Rn(e, r));
      }),
      (t[6] = r),
      (t[7] = b));
  let x = b,
    C;
  t[8] !== x || t[9] !== a
    ? ((C = { onExternalLink: a, onPageChange: x }),
      (t[8] = x),
      (t[9] = a),
      (t[10] = C))
    : (C = t[10]);
  let w = C,
    T;
  t[11] === l
    ? (T = t[12])
    : ((T = l.formatMessage({
        id: `artifactTab.preview.previousPage`,
        defaultMessage: `Previous page`,
        description: `Tooltip for navigating to the previous page in an artifact preview`,
      })),
      (t[11] = l),
      (t[12] = T));
  let E = T,
    O;
  t[13] === l
    ? (O = t[14])
    : ((O = l.formatMessage({
        id: `artifactTab.preview.nextPage`,
        defaultMessage: `Next page`,
        description: `Tooltip for navigating to the next page in an artifact preview`,
      })),
      (t[13] = l),
      (t[14] = O));
  let A = O,
    j = Rn(f, r),
    M;
  t[15] !== j || t[16] !== x
    ? ((M = () => {
        x(j - 1);
      }),
      (t[15] = j),
      (t[16] = x),
      (t[17] = M))
    : (M = t[17]);
  let N = M,
    P;
  t[18] !== j || t[19] !== x
    ? ((P = () => {
        x(j + 1);
      }),
      (t[18] = j),
      (t[19] = x),
      (t[20] = P))
    : (P = t[20]);
  let F = P,
    ee;
  t[21] !== F || t[22] !== x || t[23] !== N || t[24] !== r || t[25] !== i
    ? ((ee = (e) => {
        if (e.key === `Escape`) {
          (e.preventDefault(), i());
          return;
        }
        if (e.key === `ArrowLeft` || e.key === `PageUp`) {
          (e.preventDefault(), N());
          return;
        }
        if (e.key === `ArrowRight` || e.key === `PageDown` || e.key === ` `) {
          (e.preventDefault(), F());
          return;
        }
        if (e.key === `Home`) {
          (e.preventDefault(), x(1));
          return;
        }
        e.key === `End` && (e.preventDefault(), x(r));
      }),
      (t[21] = F),
      (t[22] = x),
      (t[23] = N),
      (t[24] = r),
      (t[25] = i),
      (t[26] = ee))
    : (ee = t[26]);
  let I = ee,
    L;
  t[27] !== F || t[28] !== N
    ? ((L = (e) => {
        if (
          e.defaultPrevented ||
          (e.target instanceof Element &&
            e.target.closest(
              `a,button,input,select,textarea,[role='button']`,
            ) != null)
        )
          return;
        let t = e.currentTarget.getBoundingClientRect();
        e.clientX < t.left + t.width / 2 ? N() : F();
      }),
      (t[27] = F),
      (t[28] = N),
      (t[29] = L))
    : (L = t[29]);
  let R = L,
    z;
  t[30] !== o || t[31] !== m
    ? ((z = Ln({ pageViewportSize: o, presentationSize: m })),
      (t[30] = o),
      (t[31] = m),
      (t[32] = z))
    : (z = t[32]);
  let B;
  t[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = { kind: `page-width` }), (t[33] = B))
    : (B = t[33]);
  let ne;
  t[34] !== j || t[35] !== w || t[36] !== o || t[37] !== s || t[38] !== z
    ? ((ne = (0, Z.jsx)(`div`, {
        className: `flex min-h-0 flex-1 items-center justify-center px-8 py-10`,
        children: (0, Z.jsx)(Pn, {
          currentPage: j,
          isZooming: !1,
          linkNavigation: w,
          pageNumber: j,
          pageSelector: `[data-artifact-pdf-page]`,
          pageViewportSize: o,
          pageWidth: z,
          pdfDocument: s,
          resize: B,
          scrollRootRef: u,
          zoomEndTick: 0,
        }),
      })),
      (t[34] = j),
      (t[35] = w),
      (t[36] = o),
      (t[37] = s),
      (t[38] = z),
      (t[39] = ne))
    : (ne = t[39]);
  let re = j <= 1,
    V;
  t[40] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (0, Z.jsx)(D, { className: `icon-2xs rotate-180` })), (t[40] = V))
    : (V = t[40]);
  let H;
  t[41] !== N || t[42] !== E || t[43] !== re
    ? ((H = (0, Z.jsx)(k, {
        "aria-label": E,
        color: `ghost`,
        disabled: re,
        size: `toolbar`,
        uniform: !0,
        className: `text-white hover:text-white`,
        onClick: N,
        children: V,
      })),
      (t[41] = N),
      (t[42] = E),
      (t[43] = re),
      (t[44] = H))
    : (H = t[44]);
  let U;
  t[45] !== j || t[46] !== r
    ? ((U = (0, Z.jsx)(`span`, {
        className: `min-w-14 px-2 text-center text-sm tabular-nums`,
        children: (0, Z.jsx)(le, {
          id: `artifactTab.preview.pageIndicator`,
          defaultMessage: `{current}/{total}`,
          description: `Current page indicator in an artifact preview header`,
          values: { current: j, total: r },
        }),
      })),
      (t[45] = j),
      (t[46] = r),
      (t[47] = U))
    : (U = t[47]);
  let ie = j >= r,
    ae;
  t[48] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ae = (0, Z.jsx)(D, { className: `icon-2xs` })), (t[48] = ae))
    : (ae = t[48]);
  let W;
  t[49] !== F || t[50] !== A || t[51] !== ie
    ? ((W = (0, Z.jsx)(k, {
        "aria-label": A,
        color: `ghost`,
        disabled: ie,
        size: `toolbar`,
        uniform: !0,
        className: `text-white hover:text-white`,
        onClick: F,
        children: ae,
      })),
      (t[49] = F),
      (t[50] = A),
      (t[51] = ie),
      (t[52] = W))
    : (W = t[52]);
  let oe;
  t[53] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((oe = (0, Z.jsx)(`div`, { className: `mx-1 h-4 w-px bg-white/25` })),
      (t[53] = oe))
    : (oe = t[53]);
  let G, K;
  t[54] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = (0, Z.jsx)(te, { className: `icon-2xs` })),
      (K = (0, Z.jsx)(le, {
        id: `artifactTab.preview.exitPresentation`,
        defaultMessage: `Exit`,
        description: `Button label that exits PDF presentation mode`,
      })),
      (t[54] = G),
      (t[55] = K))
    : ((G = t[54]), (K = t[55]));
  let ce;
  t[56] === i
    ? (ce = t[57])
    : ((ce = (0, Z.jsxs)(k, {
        color: `ghost`,
        size: `toolbar`,
        className: `gap-1 px-2 text-white hover:text-white`,
        onClick: i,
        children: [G, K],
      })),
      (t[56] = i),
      (t[57] = ce));
  let ue;
  t[58] !== H || t[59] !== U || t[60] !== W || t[61] !== ce
    ? ((ue = (0, Z.jsx)(`div`, {
        className: `pointer-events-none absolute right-6 bottom-6 left-6 flex justify-center`,
        children: (0, Z.jsxs)(`div`, {
          className: `pointer-events-auto flex items-center gap-1 rounded-md bg-black/75 px-2 py-1 text-white shadow-lg`,
          children: [H, U, W, oe, ce],
        }),
      })),
      (t[58] = H),
      (t[59] = U),
      (t[60] = W),
      (t[61] = ce),
      (t[62] = ue))
    : (ue = t[62]);
  let de;
  return (
    t[63] !== R ||
    t[64] !== I ||
    t[65] !== y ||
    t[66] !== ne ||
    t[67] !== ue ||
    t[68] !== c
      ? ((de = (0, Z.jsxs)(`div`, {
          ref: y,
          "aria-label": c,
          autoFocus: !0,
          className: `relative flex h-full min-h-0 flex-col overflow-hidden bg-black text-white outline-none`,
          "data-testid": `artifact-pdf-presentation`,
          onClick: R,
          onKeyDown: I,
          tabIndex: -1,
          children: [ne, ue],
        })),
        (t[63] = R),
        (t[64] = I),
        (t[65] = y),
        (t[66] = ne),
        (t[67] = ue),
        (t[68] = c),
        (t[69] = de))
      : (de = t[69]),
    de
  );
}
function Ln({ pageViewportSize: e, presentationSize: t }) {
  let n = e?.width ?? 612,
    r = e?.height ?? 792;
  if (t == null || n <= 0 || r <= 0) return n;
  let i = Math.max(1, t.width - 64),
    a = Math.max(1, t.height - 112);
  return Math.floor(Math.min(i, (n / r) * a));
}
function Rn(e, t) {
  return Math.min(Math.max(e, 1), Math.max(t, 1));
}
var zn,
  Bn,
  Z,
  Vn = e(() => {
    ((zn = p()), (Bn = t(l(), 1)), H(), E(), T(), R(), _(), Fn(), (Z = h()));
  });
function Hn({ anchor: e, container: t, pageSelector: n }) {
  let r = t.getBoundingClientRect(),
    i = e.kind === `point` ? e.clientX : r.left + r.width / 2,
    a = e.kind === `point` ? e.clientY : r.top + r.height / 2,
    o = Wn({
      anchorClientX: i,
      anchorClientY: a,
      container: t,
      pageSelector: n,
    });
  if (o == null) return null;
  let s = Number(o.dataset.pageNumber);
  if (!Number.isFinite(s)) return null;
  let c = o.getBoundingClientRect();
  return c.width <= 0 || c.height <= 0
    ? null
    : {
        anchorContainerOffsetX: i - r.left,
        anchorContainerOffsetY: a - r.top,
        pageNumber: s,
        ratioX: Jn((i - c.left) / c.width),
        ratioY: Jn((a - c.top) / c.height),
      };
}
function Un({ anchorState: e, container: t, pageSelector: n }) {
  let r = Gn({ container: t, pageNumber: e.pageNumber, pageSelector: n });
  if (r == null) return !1;
  let i = t.getBoundingClientRect(),
    a = r.getBoundingClientRect(),
    o = a.left + a.width * e.ratioX,
    s = a.top + a.height * e.ratioY,
    c = i.left + e.anchorContainerOffsetX,
    l = i.top + e.anchorContainerOffsetY;
  return ((t.scrollLeft += o - c), (t.scrollTop += s - l), !0);
}
function Wn({
  anchorClientX: e,
  anchorClientY: t,
  container: n,
  pageSelector: r,
}) {
  let i = document.elementFromPoint(e, t),
    a = i instanceof HTMLElement ? i.closest(r) : null;
  if (a != null && n.contains(a)) return a;
  let o = null,
    s = 1 / 0;
  for (let i of Kn(n, r)) {
    let n = i.getBoundingClientRect(),
      r =
        qn({ max: n.bottom, min: n.top, value: t }) +
        qn({ max: n.right, min: n.left, value: e });
    r < s && ((s = r), (o = i));
  }
  return o;
}
function Gn({ container: e, pageNumber: t, pageSelector: n }) {
  return Kn(e, n).find((e) => Number(e.dataset.pageNumber) === t) ?? null;
}
function Kn(e, t) {
  return Array.from(e.querySelectorAll(t));
}
function qn({ max: e, min: t, value: n }) {
  return n < t ? t - n : n > e ? n - e : 0;
}
function Jn(e) {
  return Number.isFinite(e) ? Math.min(1, Math.max(0, e)) : 0;
}
var Yn = e(() => {});
function Xn(e) {
  let t = (0, rr.c)(14),
    {
      chromeMode: n,
      fileDataUrl: r,
      headerRightContent: i,
      hostId: a,
      onBeforeOpen: o,
      path: s,
      sizeBytes: c,
      tabId: l,
      title: u,
    } = e,
    d = n === void 0 ? `default` : n,
    f;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, $.jsx)(`section`, {
        className: `flex h-full min-h-0 flex-col bg-token-side-bar-background`,
        children: Ie(`error`),
      })),
      (t[0] = f))
    : (f = t[0]);
  let p;
  t[1] !== d ||
  t[2] !== r ||
  t[3] !== i ||
  t[4] !== a ||
  t[5] !== o ||
  t[6] !== s ||
  t[7] !== c ||
  t[8] !== l ||
  t[9] !== u
    ? ((p = (0, $.jsx)(Zn, {
        chromeMode: d,
        fileDataUrl: r,
        headerRightContent: i,
        hostId: a,
        onBeforeOpen: o,
        path: s,
        sizeBytes: c,
        tabId: l,
        title: u,
      })),
      (t[1] = d),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s),
      (t[7] = c),
      (t[8] = l),
      (t[9] = u),
      (t[10] = p))
    : (p = t[10]);
  let m;
  return (
    t[11] !== r || t[12] !== p
      ? ((m = (0, $.jsx)(je, {
          name: `PdfPreviewPanel`,
          resetKey: r,
          fallback: f,
          children: p,
        })),
        (t[11] = r),
        (t[12] = p),
        (t[13] = m))
      : (m = t[13]),
    m
  );
}
function Zn(e) {
  let t = (0, rr.c)(125),
    {
      chromeMode: n,
      fileDataUrl: r,
      headerRightContent: o,
      hostId: s,
      onBeforeOpen: c,
      path: l,
      sizeBytes: u,
      tabId: d,
      title: p,
    } = e,
    m = a(ae),
    h = se(),
    g = (0, Q.useRef)(null),
    _ = (0, Q.useRef)(null),
    v = (0, Q.useRef)(!1),
    C = (0, Q.useRef)(null),
    T = (0, Q.useRef)(r),
    E = (0, Q.useRef)(null),
    D;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = new Set()), (t[0] = D))
    : (D = t[0]);
  let k = (0, Q.useRef)(D),
    [N, F] = (0, Q.useState)(!1),
    [I, te] = (0, Q.useState)(!1),
    [L, R] = (0, Q.useState)(null),
    z;
  t[1] === m.value
    ? (z = t[2])
    : ((z = oe(m.value)), (t[1] = m.value), (t[2] = z));
  let B = z,
    V;
  t[3] === B
    ? (V = t[4])
    : ((V = B ?? ce({ entrypoint: `home` })), (t[3] = B), (t[4] = V));
  let H = V,
    U = i(b, H),
    ie;
  t[5] !== H || t[6] !== m
    ? ((ie = (e) => {
        x(m, H, e);
      }),
      (t[5] = H),
      (t[6] = m),
      (t[7] = ie))
    : (ie = t[7]);
  let W = ie,
    G;
  if (t[8] !== U || t[9] !== l) {
    let e;
    (t[11] === l
      ? (e = t[12])
      : ((e = (e) => f(e) && e.localPdfContext?.path === l),
        (t[11] = l),
        (t[12] = e)),
      (G = U.filter(e)),
      (t[8] = U),
      (t[9] = l),
      (t[10] = G));
  } else G = t[10];
  let le = G,
    ue;
  t[13] === le
    ? (ue = t[14])
    : ((ue = Math.max(0, ...le.map(tr))), (t[13] = le), (t[14] = ue));
  let de = ue + 1,
    fe,
    q;
  (t[15] !== l || t[16] !== W
    ? ((fe = () => () => {
        W((e) => {
          let t = e.filter((e) => !(f(e) && e.localPdfContext?.path === l));
          return t.length === e.length ? e : t;
        });
      }),
      (q = [l, W]),
      (t[15] = l),
      (t[16] = W),
      (t[17] = fe),
      (t[18] = q))
    : ((fe = t[17]), (q = t[18])),
    (0, Q.useEffect)(fe, q));
  let pe;
  t[19] === r
    ? (pe = t[20])
    : ((pe = { fileDataUrl: r }), (t[19] = r), (t[20] = pe));
  let {
      loadedFileDataUrl: he,
      loadState: ge,
      numPages: J,
      pageViewportSize: _e,
      pdfDocument: ve,
    } = qe(pe),
    ye;
  t[21] === J
    ? (ye = t[22])
    : ((ye = {
        containerRef: _,
        pageSelector: `[data-artifact-pdf-page]`,
        totalPages: J,
      }),
      (t[21] = J),
      (t[22] = ye));
  let { currentPage: be, goToNextPage: xe, goToPreviousPage: Se } = Re(ye),
    Ce;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ce = (e) => {
        let t = _.current;
        if (t == null) {
          C.current = null;
          return;
        }
        C.current = Hn({
          anchor: e,
          container: t,
          pageSelector: `[data-artifact-pdf-page]`,
        });
      }),
      (t[23] = Ce))
    : (Ce = t[23]);
  let we = Ce,
    Te;
  t[24] !== _e || t[25] !== L
    ? ((Te = { onBeforeZoom: we, pageViewportSize: _e, pageWidth: L }),
      (t[24] = _e),
      (t[25] = L),
      (t[26] = Te))
    : (Te = t[26]);
  let {
      beginScaleChange: Ee,
      fitToWidth: De,
      handleWheel: Oe,
      isZooming: ke,
      resize: Ae,
      setZoomPercent: je,
      zoomPercent: Me,
      zoomEndTick: Pe,
    } = mn(Te),
    Fe;
  t[27] !== be || t[28] !== De || t[29] !== Ae
    ? ((Fe = () => {
        let e =
          Ae.kind === `page-width`
            ? null
            : _.current?.querySelector(
                `[data-artifact-pdf-page][data-page-number="${be}"]`,
              );
        (De(),
          e != null &&
            window.requestAnimationFrame(() => {
              e.scrollIntoView({ block: `center`, inline: `center` });
            }));
      }),
      (t[27] = be),
      (t[28] = De),
      (t[29] = Ae),
      (t[30] = Fe))
    : (Fe = t[30]);
  let Le = Fe,
    ze;
  t[31] === Ee
    ? (ze = t[32])
    : ((ze = (e) => {
        if (e.contentRect.width <= 0) return;
        let t = Math.max(0, Math.floor(e.contentRect.width) - 48),
          n = E.current;
        n !== t &&
          (n != null && (we({ kind: `center` }), Ee()), (E.current = t), R(t));
      }),
      (t[31] = Ee),
      (t[32] = ze));
  let Be = S(ze),
    Ve;
  t[33] !== J || t[34] !== ve
    ? ((Ve = () => {
        let e = C.current,
          t = _.current;
        e == null ||
          t == null ||
          ve == null ||
          J < 1 ||
          (Un({
            anchorState: { ...e, pageNumber: Math.min(e.pageNumber, J) },
            container: t,
            pageSelector: `[data-artifact-pdf-page][data-page-viewport-ready]`,
          }) &&
            (C.current = null));
      }),
      (t[33] = J),
      (t[34] = ve),
      (t[35] = Ve))
    : (Ve = t[35]);
  let He = Ve,
    Ue;
  t[36] === He
    ? (Ue = t[37])
    : ((Ue = () => {
        He();
      }),
      (t[36] = He),
      (t[37] = Ue));
  let We;
  (t[38] !== _e || t[39] !== L || t[40] !== Ae || t[41] !== He
    ? ((We = [_e, L, Ae, He]),
      (t[38] = _e),
      (t[39] = L),
      (t[40] = Ae),
      (t[41] = He),
      (t[42] = We))
    : (We = t[42]),
    (0, Q.useLayoutEffect)(Ue, We));
  let Ge, Ke;
  (t[43] === r
    ? ((Ge = t[44]), (Ke = t[45]))
    : ((Ge = () => {
        T.current !== r && ((T.current = r), we({ kind: `center` }));
      }),
      (Ke = [we, r]),
      (t[43] = r),
      (t[44] = Ge),
      (t[45] = Ke)),
    (0, Q.useLayoutEffect)(Ge, Ke));
  let Je;
  t[46] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Je = () => {
        ((v.current = !1), F(!1), te(!1));
      }),
      (t[46] = Je))
    : (Je = t[46]);
  let Ye;
  (t[47] === r ? (Ye = t[48]) : ((Ye = [r]), (t[47] = r), (t[48] = Ye)),
    (0, Q.useEffect)(Je, Ye));
  let Xe, Ze;
  (t[49] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Xe = () => {
        let e = () => {
          document.fullscreenElement !== g.current && F(!1);
        };
        return (
          document.addEventListener(`fullscreenchange`, e),
          () => {
            document.removeEventListener(`fullscreenchange`, e);
          }
        );
      }),
      (Ze = []),
      (t[49] = Xe),
      (t[50] = Ze))
    : ((Xe = t[49]), (Ze = t[50])),
    (0, Q.useEffect)(Xe, Ze));
  let Qe;
  t[51] === Oe
    ? (Qe = t[52])
    : ((Qe = (e) => {
        let t = _.current;
        t !== e &&
          (t?.removeEventListener(`wheel`, Oe),
          (_.current = e),
          e?.addEventListener(`wheel`, Oe, { passive: !1 }));
      }),
      (t[51] = Oe),
      (t[52] = Qe));
  let $e = Qe,
    et = ge === `ready` && ve != null,
    tt = et && he === r,
    nt = et ? ve : null,
    rt;
  t[53] !== J || t[54] !== m
    ? ((rt = () => {
        ((v.current = !0), re(m, K, { pageCount: J }));
      }),
      (t[53] = J),
      (t[54] = m),
      (t[55] = rt))
    : (rt = t[55]);
  let it = (0, Q.useEffectEvent)(rt),
    at;
  t[56] !== it || t[57] !== tt
    ? ((at = () => {
        !tt || v.current || it();
      }),
      (t[56] = it),
      (t[57] = tt),
      (t[58] = at))
    : (at = t[58]);
  let ot;
  (t[59] === tt ? (ot = t[60]) : ((ot = [tt]), (t[59] = tt), (t[60] = ot)),
    (0, Q.useEffect)(at, ot));
  let st;
  t[61] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((st = () => {
        (F(!1),
          document.fullscreenElement === g.current &&
            document.exitFullscreen().catch(er));
      }),
      (t[61] = st))
    : (st = t[61]);
  let ct = st,
    lt;
  t[62] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((lt = (e, t) => {
        (F(!1),
          (document.fullscreenElement === g.current
            ? document.exitFullscreen()
            : Promise.resolve()
          )
            .catch($n)
            .finally(() => {
              P({ event: t, href: e, initiator: `open_in_browser_bridge` });
            }));
      }),
      (t[62] = lt))
    : (lt = t[62]);
  let ut = lt,
    dt;
  t[63] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((dt = (e, t) => {
        if (t) {
          k.current.add(e);
          return;
        }
        k.current.delete(e);
      }),
      (t[63] = dt))
    : (dt = t[63]);
  let ft = dt,
    pt,
    mt;
  (t[64] !== I || t[65] !== N
    ? ((pt = () => {
        if (!I || N) {
          k.current.clear();
          return;
        }
        let e = (e) => {
          e.defaultPrevented ||
            e.key !== `Escape` ||
            k.current.size > 0 ||
            (e.preventDefault(), e.stopPropagation(), te(!1));
        };
        return (
          window.addEventListener(`keydown`, e),
          () => {
            window.removeEventListener(`keydown`, e);
          }
        );
      }),
      (mt = [I, N]),
      (t[64] = I),
      (t[65] = N),
      (t[66] = pt),
      (t[67] = mt))
    : ((pt = t[66]), (mt = t[67])),
    (0, Q.useEffect)(pt, mt));
  let ht;
  t[68] === h
    ? (ht = t[69])
    : ((ht = h.formatMessage({
        id: `artifactPdfPreview.annotate`,
        defaultMessage: `Annotate`,
        description: `Tooltip text for the PDF annotation button`,
      })),
      (t[68] = h),
      (t[69] = ht));
  let gt = ht,
    _t;
  t[70] === h
    ? (_t = t[71])
    : ((_t = h.formatMessage({
        id: `artifactPdfPreview.annotationMode`,
        defaultMessage: `Annotating`,
        description: `Label shown when PDF annotation mode is active`,
      })),
      (t[70] = h),
      (t[71] = _t));
  let vt = _t,
    [yt, bt] = (0, Q.useState)(!1),
    xt;
  t[72] !== I || t[73] !== m || t[74] !== d || t[75] !== B
    ? ((xt = () => {
        (bt(!1),
          I ||
            Ne(m, {
              artifactTabId: d,
              artifactType: `pdf`,
              importKind: `pdf`,
              threadId: B,
            }),
          te(Qn));
      }),
      (t[72] = I),
      (t[73] = m),
      (t[74] = d),
      (t[75] = B),
      (t[76] = xt))
    : (xt = t[76]);
  let St;
  t[77] !== gt || t[78] !== vt || t[79] !== I || t[80] !== xt
    ? ((St = (0, $.jsx)(me, {
        active: I,
        activeLabel: vt,
        label: gt,
        onClick: xt,
      })),
      (t[77] = gt),
      (t[78] = vt),
      (t[79] = I),
      (t[80] = xt),
      (t[81] = St))
    : (St = t[81]);
  let Ct = St,
    wt;
  t[82] !== H ||
  t[83] !== I ||
  t[84] !== de ||
  t[85] !== J ||
  t[86] !== l ||
  t[87] !== le ||
  t[88] !== W ||
  t[89] !== d ||
  t[90] !== B ||
  t[91] !== p
    ? ((wt = {
        comments: le,
        conversationId: H,
        isCommentMode: I,
        nextCommentNumber: de,
        onCommentsChange: W,
        onDraftActiveChange: ft,
        pageCount: J,
        path: l,
        tabId: d,
        threadId: B,
        title: p,
      }),
      (t[82] = H),
      (t[83] = I),
      (t[84] = de),
      (t[85] = J),
      (t[86] = l),
      (t[87] = le),
      (t[88] = W),
      (t[89] = d),
      (t[90] = B),
      (t[91] = p),
      (t[92] = wt))
    : (wt = t[92]);
  let Tt = wt,
    Et;
  return (
    t[93] !== gt ||
    t[94] !== Ct ||
    t[95] !== n ||
    t[96] !== Tt ||
    t[97] !== be ||
    t[98] !== Le ||
    t[99] !== xe ||
    t[100] !== Se ||
    t[101] !== o ||
    t[102] !== s ||
    t[103] !== yt ||
    t[104] !== I ||
    t[105] !== N ||
    t[106] !== et ||
    t[107] !== ke ||
    t[108] !== ge ||
    t[109] !== J ||
    t[110] !== c ||
    t[111] !== Be ||
    t[112] !== _e ||
    t[113] !== L ||
    t[114] !== l ||
    t[115] !== nt ||
    t[116] !== Ae ||
    t[117] !== He ||
    t[118] !== $e ||
    t[119] !== je ||
    t[120] !== u ||
    t[121] !== p ||
    t[122] !== Pe ||
    t[123] !== Me
      ? ((Et = (0, $.jsx)(`section`, {
          ref: g,
          className: `flex h-full min-h-0 flex-col bg-token-side-bar-background`,
          children:
            N && nt != null
              ? (0, $.jsx)(In, {
                  initialPage: be,
                  numPages: J,
                  onClose: ct,
                  onOpenExternalLink: ut,
                  pageViewportSize: _e,
                  pdfDocument: nt,
                  title: p,
                })
              : (0, $.jsxs)($.Fragment, {
                  children: [
                    et
                      ? (0, $.jsx)(A, {
                          artifactType: `PDF`,
                          hideMetadata: n === `standalone`,
                          title: nr(p),
                          centerContent: (0, $.jsx)(O, {
                            currentPage: be,
                            onNextPage: xe,
                            onPreviousPage: Se,
                            totalPages: J,
                          }),
                          rightContent: (0, $.jsxs)(`div`, {
                            className: `flex min-w-0 items-center gap-1 overflow-hidden [@container_(max-width:300px)]:gap-0.5`,
                            children: [
                              (0, $.jsx)(ne, {
                                tooltipContent: gt,
                                open: !I && yt,
                                onOpenChange: (e) => {
                                  I || bt(e);
                                },
                                children: Ct,
                              }),
                              (0, $.jsx)(w, {
                                triggerTestId: `pdf-preview-zoom-trigger`,
                                zoomPercent: Me,
                                zoomOptions: ee,
                                onZoomPercentChange: je,
                                fitOption: {
                                  selected: Ae.kind === `page-width`,
                                  onSelect: Le,
                                },
                              }),
                              n === `default`
                                ? (0, $.jsxs)($.Fragment, {
                                    children: [
                                      (0, $.jsx)(j, {
                                        hostId: s,
                                        path: l,
                                        sizeBytes: u,
                                      }),
                                      (0, $.jsx)(M, {
                                        hostId: s,
                                        onBeforeOpen: c,
                                        path: l,
                                        showLabel: !0,
                                      }),
                                    ],
                                  })
                                : null,
                              o,
                            ],
                          }),
                        })
                      : null,
                    (0, $.jsx)(`div`, {
                      ref: $e,
                      "aria-label": p,
                      className: et
                        ? `min-h-0 flex-1 overflow-auto bg-token-side-bar-background`
                        : `hidden`,
                      "data-testid": `artifact-pdf-preview-panel`,
                      children: (0, $.jsx)(`div`, {
                        ref: Be,
                        className: `min-h-full pt-6`,
                        style: { paddingBottom: y },
                        children: (0, $.jsx)(`div`, {
                          className: `flex min-h-full w-max min-w-full flex-col items-center gap-6 px-6`,
                          children:
                            nt == null
                              ? null
                              : Array.from({ length: J }, (e, t) => {
                                  let n = t + 1;
                                  return (0, $.jsx)(
                                    Pn,
                                    {
                                      commentLayer: Tt,
                                      currentPage: be,
                                      isZooming: ke,
                                      onViewportReady: He,
                                      pdfDocument: nt,
                                      pageSelector: `[data-artifact-pdf-page]`,
                                      pageViewportSize: _e,
                                      pageNumber: n,
                                      pageWidth: L,
                                      resize: Ae,
                                      scrollRootRef: _,
                                      zoomEndTick: Pe,
                                    },
                                    n,
                                  );
                                }),
                        }),
                      }),
                    }),
                    Ie(ge),
                  ],
                }),
        })),
        (t[93] = gt),
        (t[94] = Ct),
        (t[95] = n),
        (t[96] = Tt),
        (t[97] = be),
        (t[98] = Le),
        (t[99] = xe),
        (t[100] = Se),
        (t[101] = o),
        (t[102] = s),
        (t[103] = yt),
        (t[104] = I),
        (t[105] = N),
        (t[106] = et),
        (t[107] = ke),
        (t[108] = ge),
        (t[109] = J),
        (t[110] = c),
        (t[111] = Be),
        (t[112] = _e),
        (t[113] = L),
        (t[114] = l),
        (t[115] = nt),
        (t[116] = Ae),
        (t[117] = He),
        (t[118] = $e),
        (t[119] = je),
        (t[120] = u),
        (t[121] = p),
        (t[122] = Pe),
        (t[123] = Me),
        (t[124] = Et))
      : (Et = t[124]),
    Et
  );
}
function Qn(e) {
  return !e;
}
function $n() {}
function er() {}
function tr(e) {
  return e.position.line;
}
function nr(e) {
  return e.replace(/\.pdf$/i, ``);
}
var rr, Q, $;
e(() => {
  ((rr = p()),
    U(),
    s(),
    o(),
    (Q = t(l(), 1)),
    H(),
    v(),
    q(),
    Ae(),
    I(),
    B(),
    G(),
    W(),
    _(),
    V(),
    C(),
    Fe(),
    z(),
    Ke(),
    Le(),
    L(),
    tt(),
    Fn(),
    Vn(),
    Yn(),
    kn(),
    ($ = h()));
})();
export { Xn as PdfPreviewPanel };
