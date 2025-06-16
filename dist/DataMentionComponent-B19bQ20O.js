import { jsx as e, jsxs as k } from "react/jsx-runtime";
import E, { useCallback as p, useEffect as D, Suspense as I } from "react";
import { d as T } from "./LexicalNestedComposer.prod-CUnPetiN.js";
import { an as v, Q as y, H, V as M, W as _, U as R, ao as $, Z as L, ap as j, a1 as i, a3 as w, aq as F, ar as A, as as B, a4 as W, a6 as z, at as G, au as J, av as q, aw as Q, ax as U, ay as V, az as Z, aA as O, a9 as X, aB as Y, aC as K, aD as ee, ab as ae, ac as te, ad as ne, ae as re, aE as se, aF as ie, aG as oe, aH as le, aI as ue, aJ as ce, aK as de, aL as me, aM as fe } from "./index-B1XK6w54.js";
import { c as ge } from "./LexicalHashtagPlugin.prod-lHicX4Ts.js";
function Se({
  dataMention: h,
  label: f,
  value: c,
  data: C,
  step: r,
  nodeKey: o,
  error: d
}) {
  const { historyState: N } = v(), s = E.useRef(null), g = E.useRef(null), [m, b, x] = y(o), [n] = H(), S = p(
    (a) => a.target === s.current ? (x(), b(!0), !0) : !1,
    [b, x]
  ), l = p((a) => {
    const t = M(), u = _(o);
    return u && u.setSpanRef && u.setSpanRef(s.current), m && R(t) && (a.preventDefault(), $(u) && u.getKey() === o) ? (u.remove(), !0) : !1;
  }, [o, m]), P = p((a) => {
    if (m && R(M())) {
      const t = _(o);
      if ($(t))
        return t.toggleFormat(a), !0;
    }
    return !1;
  }, [m, o]);
  return D(() => {
    const a = L(
      n.registerCommand(
        z,
        S,
        i
      ),
      n.registerCommand(
        W,
        l,
        i
      ),
      n.registerCommand(
        B,
        l,
        i
      ),
      n.registerCommand(
        A,
        l,
        i
      ),
      n.registerCommand(
        F,
        l,
        i
      ),
      n.registerCommand(
        w,
        l,
        i
      ),
      n.registerCommand(
        j,
        P,
        i
      )
    );
    if (s.current) {
      const t = s.current.previousSibling || s.current.nextSibling;
      t && t.appendChild(s.current);
    }
    return c && r == 2 && n.update(() => {
      c.setEditable(!0);
    }), () => {
      a();
    };
  }, [n, S, l, P, r, c]), D(() => {
    if (g.current) {
      const a = g.current, t = a == null ? void 0 : a.nextElementSibling;
      t && a && (a.style.minWidth = `${t.clientWidth}px`);
    }
  }, []), /* @__PURE__ */ e(I, { fallback: null, children: h !== "input" ? r === 3 ? /* @__PURE__ */ e("span", { "data-decorate": "true", children: C }) : r === 2 ? /* @__PURE__ */ e("span", { "data-decorate": "true", children: h === "after-auto" ? f : C }) : /* @__PURE__ */ e(
    "span",
    {
      "data-decorate": "true",
      ref: s,
      style: m ? { border: "1px solid blue" } : {},
      children: f
    }
  ) : r !== 1 && c ? /* @__PURE__ */ e("div", { className: "data-mention-input-container", "data-mention-input-step": r, children: /* @__PURE__ */ k(
    T,
    {
      initialEditor: c,
      initialNodes: [G, J, q, Q, U, V, Z, O],
      children: [
        /* @__PURE__ */ e(X, {}),
        /* @__PURE__ */ e(Y, {}),
        /* @__PURE__ */ e(ge, {}),
        /* @__PURE__ */ e(K, {}),
        /* @__PURE__ */ e(ee, { externalHistoryState: N }),
        /* @__PURE__ */ e(
          ae,
          {
            contentEditable: /* @__PURE__ */ e(
              re,
              {
                ref: (a) => {
                  g.current = a;
                },
                "data-mention-input-step": r,
                ...d !== null ? { "data-mention-input-error": d } : {},
                className: "DataMention__contentEditable"
              }
            ),
            placeholder: /* @__PURE__ */ e(
              ne,
              {
                className: d !== null ? "DataMention__placeholder_error" : "DataMention__placeholder",
                children: d || `${f}を入力してください`
              }
            ),
            ErrorBoundary: te
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
  ) }) : /* @__PURE__ */ e("span", { "data-decorate": "true", children: /* @__PURE__ */ e("b", { children: f }) }) });
}
export {
  Se as default
};
