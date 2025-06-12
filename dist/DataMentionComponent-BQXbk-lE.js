import { t as $, b as T, u as k, M as S, S as P, T as E, v as M, L as I, y as v, I as r, k as y, z as H, A as L, C as w, w as A, r as F, j as e, G as W, H as z, J as B, K as G, N as J, Q, R as U, U as V, f as X, V as Y, W as Z, X as q, h as O, g as K, P as ee, x as te, Y as se, Z as ne, _ as ae, a0 as re, a1 as ie, a2 as oe, a3 as le, a4 as ue, a5 as ce } from "./index-woOfvq2D.js";
import R, { useCallback as g, useEffect as _, Suspense as de } from "react";
import { d as me } from "./LexicalNestedComposer.prod-snPYp0-8.js";
import { c as xe } from "./LexicalHashtagPlugin.prod-B8LMvJaj.js";
function he({
  dataMention: j,
  label: m,
  value: x,
  data: p,
  step: i,
  nodeKey: o,
  error: c
}) {
  const { historyState: D } = $(), a = R.useRef(null), f = R.useRef(null), [d, h, C] = T(o), [n] = k(), b = g(
    (t) => t.target === a.current ? (C(), h(!0), !0) : !1,
    [h, C]
  ), l = g((t) => {
    const s = S(), u = P(o);
    return u && u.setSpanRef && u.setSpanRef(a.current), d && E(s) && (t.preventDefault(), M(u) && u.getKey() === o) ? (u.remove(), !0) : !1;
  }, [o, d]), N = g((t) => {
    if (d && E(S())) {
      const s = P(o);
      if (M(s))
        return s.toggleFormat(t), !0;
    }
    return !1;
  }, [d, o]);
  return _(() => {
    const t = I(
      n.registerCommand(
        F,
        b,
        r
      ),
      n.registerCommand(
        A,
        l,
        r
      ),
      n.registerCommand(
        w,
        l,
        r
      ),
      n.registerCommand(
        L,
        l,
        r
      ),
      n.registerCommand(
        H,
        l,
        r
      ),
      n.registerCommand(
        y,
        l,
        r
      ),
      n.registerCommand(
        v,
        N,
        r
      )
    );
    if (a.current) {
      const s = a.current.previousSibling || a.current.nextSibling;
      s && s.appendChild(a.current);
    }
    return x && i == 2 && n.update(() => {
      x.setEditable(!0);
    }), () => {
      t();
    };
  }, [n, b, l]), _(() => {
    if (f.current) {
      const t = f.current, s = t == null ? void 0 : t.nextElementSibling;
      s && t && (t.style.minWidth = `${s.clientWidth}px`);
    }
  }, []), /* @__PURE__ */ e.jsx(de, { fallback: null, children: j !== "input" ? i === 3 ? /* @__PURE__ */ e.jsx("span", { "data-decorate": "true", children: p }) : i === 2 ? /* @__PURE__ */ e.jsx("span", { "data-decorate": "true", children: j === "after-auto" ? m : p }) : /* @__PURE__ */ e.jsx(
    "span",
    {
      "data-decorate": "true",
      ref: a,
      style: d ? { border: "1px solid blue" } : {},
      children: m
    }
  ) : i !== 1 && x ? /* @__PURE__ */ e.jsx("span", { className: "data-mention-input-container", "data-mention-input-step": i, children: /* @__PURE__ */ e.jsxs(
    me,
    {
      initialEditor: x,
      initialNodes: [W, z, B, G, J, Q, U, V],
      children: [
        /* @__PURE__ */ e.jsx(X, {}),
        /* @__PURE__ */ e.jsx(Y, {}),
        /* @__PURE__ */ e.jsx(xe, {}),
        /* @__PURE__ */ e.jsx(Z, {}),
        /* @__PURE__ */ e.jsx(q, { externalHistoryState: D }),
        /* @__PURE__ */ e.jsx(
          O,
          {
            contentEditable: /* @__PURE__ */ e.jsx(
              te,
              {
                ref: (t) => {
                  f.current = t;
                },
                "data-mention-input-step": i,
                ...c !== null ? { "data-mention-input-error": c } : {},
                className: "DataMention__contentEditable"
              }
            ),
            placeholder: /* @__PURE__ */ e.jsx(
              ee,
              {
                className: c !== null ? "DataMention__placeholder_error" : "DataMention__placeholder",
                children: c || `${m}を入力してください`
              }
            ),
            ErrorBoundary: K
          }
        ),
        /* @__PURE__ */ e.jsx(se, {}),
        /* @__PURE__ */ e.jsx(ne, { maxDepth: 7 }),
        /* @__PURE__ */ e.jsx(
          ae,
          {
            hasCellMerge: !0,
            hasCellBackgroundColor: !0
          }
        ),
        /* @__PURE__ */ e.jsx(re, {}),
        /* @__PURE__ */ e.jsx(ie, {}),
        /* @__PURE__ */ e.jsx(oe, {}),
        /* @__PURE__ */ e.jsx(le, {}),
        /* @__PURE__ */ e.jsx(ue, { anchorElem: f.current || void 0 }),
        /* @__PURE__ */ e.jsx(ce, { cellMerge: !0 })
      ]
    }
  ) }) : /* @__PURE__ */ e.jsx("span", { "data-decorate": "true", children: /* @__PURE__ */ e.jsx("b", { children: m }) }) });
}
export {
  he as default
};
