import { u as D, a as R, b, $ as C, L as A, j as e, E as O, K as P, o as T, c as $, d as L, e as k, f as y, h as B, x as K, P as v, g as F } from "./index-CtyEne-V.js";
import I, { useCallback as m, useEffect as Y, Suspense as w } from "react";
import { d as H } from "./LexicalNestedComposer.prod-Crz38R_d.js";
import { c as W } from "./LexicalHashtagPlugin.prod-D3xFC4Xt.js";
import { $getSelection as N, $getNodeByKey as E, $isNodeSelection as _, FORMAT_TEXT_COMMAND as X, COMMAND_PRIORITY_LOW as l, KEY_BACKSPACE_COMMAND as q, KEY_DELETE_COMMAND as z, CLICK_COMMAND as G, RootNode as J, TextNode as Q, LineBreakNode as U, ParagraphNode as V } from "lexical";
function se({
  dataMention: f,
  label: o,
  value: x,
  data: p,
  step: i,
  nodeKey: s
}) {
  const { historyState: M } = D(), t = I.useRef(null), [c, j, g] = R(s), [d] = b(), h = m(
    (r) => r.target === t.current ? (g(), j(!0), !0) : !1,
    [j, g]
  ), u = m((r) => {
    const n = N(), a = E(s);
    return a && a.setSpanRef && a.setSpanRef(t.current), c && _(n) && (r.preventDefault(), C(a) && a.getKey() === s) ? (a.remove(), !0) : !1;
  }, [s, c]), S = m((r) => {
    if (c && _(N())) {
      const n = E(s);
      if (C(n))
        return n.toggleFormat(r), !0;
    }
    return !1;
  }, [c, s]);
  return Y(() => {
    const r = A(
      d.registerCommand(
        G,
        h,
        l
      ),
      d.registerCommand(
        z,
        u,
        l
      ),
      d.registerCommand(
        q,
        u,
        l
      ),
      d.registerCommand(
        X,
        S,
        l
      )
    );
    if (t.current) {
      const n = t.current.previousSibling || t.current.nextSibling;
      n && n.appendChild(t.current);
    }
    return () => {
      r();
    };
  }, [d, h, u]), /* @__PURE__ */ e.jsx(w, { fallback: null, children: f !== "input" ? i === 3 ? /* @__PURE__ */ e.jsx("span", { "data-decorate": "true", children: p }) : i === 2 ? /* @__PURE__ */ e.jsx("span", { "data-decorate": "true", children: f === "after-auto" ? o : p }) : /* @__PURE__ */ e.jsx(
    "span",
    {
      "data-decorate": "true",
      ref: t,
      style: c ? { border: "1px solid blue" } : {},
      children: o
    }
  ) : i !== 1 && x ? /* @__PURE__ */ e.jsxs("span", { className: "data-mention-input-container", "data-mention-input-step": i, children: [
    /* @__PURE__ */ e.jsx("b", { children: o }),
    /* @__PURE__ */ e.jsxs(
      H,
      {
        initialEditor: x,
        initialNodes: [J, Q, U, V, O, P],
        children: [
          /* @__PURE__ */ e.jsx(T, {}),
          /* @__PURE__ */ e.jsx($, {}),
          /* @__PURE__ */ e.jsx(L, {}),
          /* @__PURE__ */ e.jsx(W, {}),
          /* @__PURE__ */ e.jsx(k, {}),
          /* @__PURE__ */ e.jsx(y, { externalHistoryState: M }),
          /* @__PURE__ */ e.jsx(
            B,
            {
              contentEditable: /* @__PURE__ */ e.jsx(
                K,
                {
                  "data-mention-input-step": i,
                  className: "DataMention__contentEditable"
                }
              ),
              placeholder: /* @__PURE__ */ e.jsxs(v, { className: "DataMention__placeholder", children: [
                "Enter a ",
                o,
                "..."
              ] }),
              ErrorBoundary: F
            }
          )
        ]
      }
    )
  ] }) : /* @__PURE__ */ e.jsx("span", { "data-decorate": "true", children: /* @__PURE__ */ e.jsx("b", { children: o }) }) });
}
export {
  se as default
};
