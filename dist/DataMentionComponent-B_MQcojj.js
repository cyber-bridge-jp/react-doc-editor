import { q as $, b as k, u as I, R as P, C as E, w as S, v as R, N as v, y as w, K as r, k as y, z as T, A, E as H, e as L, r as F, j as e, G as W, H as z, I as B, J, M as q, O as G, Q as O, _ as Q, L as U, U as V, V as X, W as Y, h as Z, g as K, P as ee, x as te, X as se, Y as ne, Z as ae, a0 as re, a1 as ie, a2 as oe, a3 as le, a4 as ue, a5 as ce } from "./index-CSHQHh7d.js";
import _, { useCallback as g, useEffect as M, Suspense as de } from "react";
import { d as me } from "./LexicalNestedComposer.prod-Ct09ui7s.js";
import { c as xe } from "./LexicalHashtagPlugin.prod-CjEFK_nn.js";
function he({
  dataMention: j,
  label: m,
  value: x,
  data: p,
  step: i,
  nodeKey: o,
  error: c
}) {
  const { historyState: D } = $(), a = _.useRef(null), f = _.useRef(null), [d, h, C] = k(o), [n] = I(), b = g(
    (t) => t.target === a.current ? (C(), h(!0), !0) : !1,
    [h, C]
  ), l = g((t) => {
    const s = P(), u = E(o);
    return u && u.setSpanRef && u.setSpanRef(a.current), d && S(s) && (t.preventDefault(), R(u) && u.getKey() === o) ? (u.remove(), !0) : !1;
  }, [o, d]), N = g((t) => {
    if (d && S(P())) {
      const s = E(o);
      if (R(s))
        return s.toggleFormat(t), !0;
    }
    return !1;
  }, [d, o]);
  return M(() => {
    const t = v(
      n.registerCommand(
        F,
        b,
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
        A,
        l,
        r
      ),
      n.registerCommand(
        T,
        l,
        r
      ),
      n.registerCommand(
        y,
        l,
        r
      ),
      n.registerCommand(
        w,
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
  }, [n, b, l]), M(() => {
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
      initialNodes: [W, z, B, J, q, G, O, Q],
      children: [
        /* @__PURE__ */ e.jsx(U, {}),
        /* @__PURE__ */ e.jsx(V, {}),
        /* @__PURE__ */ e.jsx(xe, {}),
        /* @__PURE__ */ e.jsx(X, {}),
        /* @__PURE__ */ e.jsx(Y, { externalHistoryState: D }),
        /* @__PURE__ */ e.jsx(
          Z,
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
