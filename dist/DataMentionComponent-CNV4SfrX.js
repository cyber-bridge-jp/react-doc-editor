import { jsx as e, jsxs as T } from "react/jsx-runtime";
import P, { useCallback as p, useEffect as E, Suspense as k } from "react";
import { d as I } from "./LexicalNestedComposer.prod-DKAEazrd.js";
import { q as v, b as y, u as j, M, S as _, T as D, t as R, L as H, v as L, I as s, k as w, y as A, z as F, A as W, w as z, r as B, C as G, G as J, H as q, J as Q, K as U, N as V, Q as X, R as Y, f as Z, U as O, V as K, W as ee, h as te, g as ne, P as ae, x as re, X as se, Y as ie, Z as oe, _ as le, a0 as ue, a1 as ce, a2 as de, a3 as me, a4 as fe } from "./index-C14StzBP.js";
import { c as ge } from "./LexicalHashtagPlugin.prod-CdO4I89r.js";
function xe({
  dataMention: h,
  label: m,
  value: f,
  data: C,
  step: i,
  nodeKey: o,
  error: c
}) {
  const { historyState: N } = v(), r = P.useRef(null), g = P.useRef(null), [d, b, S] = y(o), [a] = j(), x = p(
    (t) => t.target === r.current ? (S(), b(!0), !0) : !1,
    [b, S]
  ), l = p((t) => {
    const n = M(), u = _(o);
    return u && u.setSpanRef && u.setSpanRef(r.current), d && D(n) && (t.preventDefault(), R(u) && u.getKey() === o) ? (u.remove(), !0) : !1;
  }, [o, d]), $ = p((t) => {
    if (d && D(M())) {
      const n = _(o);
      if (R(n))
        return n.toggleFormat(t), !0;
    }
    return !1;
  }, [d, o]);
  return E(() => {
    const t = H(
      a.registerCommand(
        B,
        x,
        s
      ),
      a.registerCommand(
        z,
        l,
        s
      ),
      a.registerCommand(
        W,
        l,
        s
      ),
      a.registerCommand(
        F,
        l,
        s
      ),
      a.registerCommand(
        A,
        l,
        s
      ),
      a.registerCommand(
        w,
        l,
        s
      ),
      a.registerCommand(
        L,
        $,
        s
      )
    );
    if (r.current) {
      const n = r.current.previousSibling || r.current.nextSibling;
      n && n.appendChild(r.current);
    }
    return f && i == 2 && a.update(() => {
      f.setEditable(!0);
    }), () => {
      t();
    };
  }, [a, x, l]), E(() => {
    if (g.current) {
      const t = g.current, n = t == null ? void 0 : t.nextElementSibling;
      n && t && (t.style.minWidth = `${n.clientWidth}px`);
    }
  }, []), /* @__PURE__ */ e(k, { fallback: null, children: h !== "input" ? i === 3 ? /* @__PURE__ */ e("span", { "data-decorate": "true", children: C }) : i === 2 ? /* @__PURE__ */ e("span", { "data-decorate": "true", children: h === "after-auto" ? m : C }) : /* @__PURE__ */ e(
    "span",
    {
      "data-decorate": "true",
      ref: r,
      style: d ? { border: "1px solid blue" } : {},
      children: m
    }
  ) : i !== 1 && f ? /* @__PURE__ */ e("span", { className: "data-mention-input-container", "data-mention-input-step": i, children: /* @__PURE__ */ T(
    I,
    {
      initialEditor: f,
      initialNodes: [G, J, q, Q, U, V, X, Y],
      children: [
        /* @__PURE__ */ e(Z, {}),
        /* @__PURE__ */ e(O, {}),
        /* @__PURE__ */ e(ge, {}),
        /* @__PURE__ */ e(K, {}),
        /* @__PURE__ */ e(ee, { externalHistoryState: N }),
        /* @__PURE__ */ e(
          te,
          {
            contentEditable: /* @__PURE__ */ e(
              re,
              {
                ref: (t) => {
                  g.current = t;
                },
                "data-mention-input-step": i,
                ...c !== null ? { "data-mention-input-error": c } : {},
                className: "DataMention__contentEditable"
              }
            ),
            placeholder: /* @__PURE__ */ e(
              ae,
              {
                className: c !== null ? "DataMention__placeholder_error" : "DataMention__placeholder",
                children: c || `${m}を入力してください`
              }
            ),
            ErrorBoundary: ne
          }
        ),
        /* @__PURE__ */ e(se, {}),
        /* @__PURE__ */ e(ie, { maxDepth: 7 }),
        /* @__PURE__ */ e(
          oe,
          {
            hasCellMerge: !0,
            hasCellBackgroundColor: !0
          }
        ),
        /* @__PURE__ */ e(le, {}),
        /* @__PURE__ */ e(ue, {}),
        /* @__PURE__ */ e(ce, {}),
        /* @__PURE__ */ e(de, {}),
        /* @__PURE__ */ e(me, { anchorElem: g.current || void 0 }),
        /* @__PURE__ */ e(fe, { cellMerge: !0 })
      ]
    }
  ) }) : /* @__PURE__ */ e("span", { "data-decorate": "true", children: /* @__PURE__ */ e("b", { children: m }) }) });
}
export {
  xe as default
};
