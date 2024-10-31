import { u as S, a as A, b as O, $ as h, L, j as e, E as I, K as $, J as k, D as y, c as v, d as B, e as F, f as K, h as W, x as H, P as Y, g as w, n as X, i as z, k as J, T as V, I as q, l as G, m as Q, o as U, p as Z } from "./index-DFnvazKF.js";
import _, { useCallback as g, useEffect as N, Suspense as ee } from "react";
import { d as te } from "./LexicalNestedComposer.prod-BNeZU1Jt.js";
import { c as ne } from "./LexicalHashtagPlugin.prod-CmtUhePN.js";
import { $getSelection as D, $getNodeByKey as b, $isNodeSelection as T, FORMAT_TEXT_COMMAND as re, COMMAND_PRIORITY_LOW as a, KEY_BACKSPACE_COMMAND as se, REMOVE_TEXT_COMMAND as ae, DELETE_LINE_COMMAND as ie, DELETE_WORD_COMMAND as oe, KEY_DELETE_COMMAND as le, CLICK_COMMAND as ce, RootNode as ue, TextNode as de, ParagraphNode as me, TabNode as xe } from "lexical";
function Ce({
  dataMention: p,
  label: m,
  value: x,
  data: j,
  step: i,
  nodeKey: o,
  error: u
}) {
  const { historyState: P } = S(), s = _.useRef(null), f = _.useRef(null), [d, E, C] = A(o), [r] = O(), M = g(
    (t) => t.target === s.current ? (C(), E(!0), !0) : !1,
    [E, C]
  ), l = g((t) => {
    const n = D(), c = b(o);
    return c && c.setSpanRef && c.setSpanRef(s.current), d && T(n) && (t.preventDefault(), h(c) && c.getKey() === o) ? (c.remove(), !0) : !1;
  }, [o, d]), R = g((t) => {
    if (d && T(D())) {
      const n = b(o);
      if (h(n))
        return n.toggleFormat(t), !0;
    }
    return !1;
  }, [d, o]);
  return N(() => {
    const t = L(
      r.registerCommand(
        ce,
        M,
        a
      ),
      r.registerCommand(
        le,
        l,
        a
      ),
      r.registerCommand(
        oe,
        l,
        a
      ),
      r.registerCommand(
        ie,
        l,
        a
      ),
      r.registerCommand(
        ae,
        l,
        a
      ),
      r.registerCommand(
        se,
        l,
        a
      ),
      r.registerCommand(
        re,
        R,
        a
      )
    );
    if (s.current) {
      const n = s.current.previousSibling || s.current.nextSibling;
      n && n.appendChild(s.current);
    }
    return x && i == 2 && r.update(() => {
      x.setEditable(!0);
    }), () => {
      t();
    };
  }, [r, M, l]), N(() => {
    if (f.current) {
      const t = f.current, n = t == null ? void 0 : t.nextElementSibling;
      n && t && (t.style.minWidth = `${n.clientWidth}px`);
    }
  }, []), /* @__PURE__ */ e.jsx(ee, { fallback: null, children: p !== "input" ? i === 3 ? /* @__PURE__ */ e.jsx("span", { "data-decorate": "true", children: j }) : i === 2 ? /* @__PURE__ */ e.jsx("span", { "data-decorate": "true", children: p === "after-auto" ? m : j }) : /* @__PURE__ */ e.jsx(
    "span",
    {
      "data-decorate": "true",
      ref: s,
      style: d ? { border: "1px solid blue" } : {},
      children: m
    }
  ) : i !== 1 && x ? /* @__PURE__ */ e.jsx("span", { className: "data-mention-input-container", "data-mention-input-step": i, children: /* @__PURE__ */ e.jsxs(
    te,
    {
      initialEditor: x,
      initialNodes: [ue, de, me, I, $, k, y, xe],
      children: [
        /* @__PURE__ */ e.jsx(v, {}),
        /* @__PURE__ */ e.jsx(B, {}),
        /* @__PURE__ */ e.jsx(ne, {}),
        /* @__PURE__ */ e.jsx(F, {}),
        /* @__PURE__ */ e.jsx(K, { externalHistoryState: P }),
        /* @__PURE__ */ e.jsx(
          W,
          {
            contentEditable: /* @__PURE__ */ e.jsx(
              H,
              {
                ref: (t) => {
                  f.current = t;
                },
                "data-mention-input-step": i,
                ...u !== null ? { "data-mention-input-error": u } : {},
                className: "DataMention__contentEditable"
              }
            ),
            placeholder: /* @__PURE__ */ e.jsx(
              Y,
              {
                className: u !== null ? "DataMention__placeholder_error" : "DataMention__placeholder",
                children: u || `${m}を入力してください`
              }
            ),
            ErrorBoundary: w
          }
        ),
        /* @__PURE__ */ e.jsx(X, {}),
        /* @__PURE__ */ e.jsx(z, { maxDepth: 7 }),
        /* @__PURE__ */ e.jsx(
          J,
          {
            hasCellMerge: !0,
            hasCellBackgroundColor: !0
          }
        ),
        /* @__PURE__ */ e.jsx(V, {}),
        /* @__PURE__ */ e.jsx(q, {}),
        /* @__PURE__ */ e.jsx(G, {}),
        /* @__PURE__ */ e.jsx(Q, {}),
        /* @__PURE__ */ e.jsx(U, { anchorElem: f.current || void 0 }),
        /* @__PURE__ */ e.jsx(Z, { cellMerge: !0 })
      ]
    }
  ) }) : /* @__PURE__ */ e.jsx("span", { "data-decorate": "true", children: /* @__PURE__ */ e.jsx("b", { children: m }) }) });
}
export {
  Ce as default
};
