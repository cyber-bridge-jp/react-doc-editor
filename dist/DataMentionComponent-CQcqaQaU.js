import { u as O, a as R, b as A, $ as N, L as T, j as e, E as b, K as L, o as P, c as $, d as k, e as y, f as B, h as I, x as K, P as F, g as Y } from "./index-BdUxaYdS.js";
import w, { useCallback as f, useEffect as H, Suspense as W } from "react";
import { d as X } from "./LexicalNestedComposer.prod-fcgchbTq.js";
import { c as v } from "./LexicalHashtagPlugin.prod-DfQ4YtO5.js";
import { $getSelection as M, $getNodeByKey as _, $isNodeSelection as h, FORMAT_TEXT_COMMAND as V, COMMAND_PRIORITY_LOW as s, KEY_BACKSPACE_COMMAND as q, REMOVE_TEXT_COMMAND as z, DELETE_LINE_COMMAND as G, DELETE_WORD_COMMAND as J, KEY_DELETE_COMMAND as Q, CLICK_COMMAND as U, RootNode as Z, TextNode as ee, LineBreakNode as te, ParagraphNode as re } from "lexical";
function de({
  dataMention: x,
  label: u,
  value: m,
  data: E,
  step: o,
  nodeKey: i,
  error: p
}) {
  const { historyState: D } = O(), r = w.useRef(null), [l, C, g] = R(i), [t] = A(), j = f(
    (n) => n.target === r.current ? (g(), C(!0), !0) : !1,
    [C, g]
  ), d = f((n) => {
    const a = M(), c = _(i);
    return c && c.setSpanRef && c.setSpanRef(r.current), l && h(a) && (n.preventDefault(), N(c) && c.getKey() === i) ? (c.remove(), !0) : !1;
  }, [i, l]), S = f((n) => {
    if (l && h(M())) {
      const a = _(i);
      if (N(a))
        return a.toggleFormat(n), !0;
    }
    return !1;
  }, [l, i]);
  return H(() => {
    const n = T(
      t.registerCommand(
        U,
        j,
        s
      ),
      t.registerCommand(
        Q,
        d,
        s
      ),
      t.registerCommand(
        J,
        d,
        s
      ),
      t.registerCommand(
        G,
        d,
        s
      ),
      t.registerCommand(
        z,
        d,
        s
      ),
      t.registerCommand(
        q,
        d,
        s
      ),
      t.registerCommand(
        V,
        S,
        s
      )
    );
    if (r.current) {
      const a = r.current.previousSibling || r.current.nextSibling;
      a && a.appendChild(r.current);
    }
    return m && o == 2 && t.update(() => {
      m.setEditable(!0);
    }), () => {
      n();
    };
  }, [t, j, d]), /* @__PURE__ */ e.jsx(W, { fallback: null, children: x !== "input" ? o === 3 ? /* @__PURE__ */ e.jsx("span", { "data-decorate": "true", children: E }) : o === 2 ? /* @__PURE__ */ e.jsx("span", { "data-decorate": "true", children: x === "after-auto" ? u : E }) : /* @__PURE__ */ e.jsx(
    "span",
    {
      "data-decorate": "true",
      ref: r,
      style: l ? { border: "1px solid blue" } : {},
      children: u
    }
  ) : o !== 1 && m ? /* @__PURE__ */ e.jsxs("span", { className: "data-mention-input-container", "data-mention-input-step": o, children: [
    /* @__PURE__ */ e.jsx("b", { children: u }),
    /* @__PURE__ */ e.jsxs(
      X,
      {
        initialEditor: m,
        initialNodes: [Z, ee, te, re, b, L],
        children: [
          /* @__PURE__ */ e.jsx(P, {}),
          /* @__PURE__ */ e.jsx($, {}),
          /* @__PURE__ */ e.jsx(k, {}),
          /* @__PURE__ */ e.jsx(v, {}),
          /* @__PURE__ */ e.jsx(y, {}),
          /* @__PURE__ */ e.jsx(B, { externalHistoryState: D }),
          /* @__PURE__ */ e.jsx(
            I,
            {
              contentEditable: /* @__PURE__ */ e.jsx(
                K,
                {
                  "data-mention-input-step": o,
                  ...p ? { "data-mention-input-error": p } : {},
                  className: "DataMention__contentEditable"
                }
              ),
              placeholder: /* @__PURE__ */ e.jsxs(F, { className: "DataMention__placeholder", children: [
                "Enter a ",
                u,
                "..."
              ] }),
              ErrorBoundary: Y
            }
          )
        ]
      }
    )
  ] }) : /* @__PURE__ */ e.jsx("span", { "data-decorate": "true", children: /* @__PURE__ */ e.jsx("b", { children: u }) }) });
}
export {
  de as default
};
