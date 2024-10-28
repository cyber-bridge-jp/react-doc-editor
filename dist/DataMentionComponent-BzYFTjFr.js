import { u as S, a as O, b as R, $ as j, L as A, j as e, E as T, K as L, o as b, c as P, d as $, e as k, f as y, h as B, x as I, P as K, g as v } from "./index-CbjfEjw5.js";
import F, { useCallback as m, useEffect as Y, Suspense as w } from "react";
import { d as H } from "./LexicalNestedComposer.prod-skWI8DXM.js";
import { c as W } from "./LexicalHashtagPlugin.prod-CNAzsfmi.js";
import { $getSelection as N, $getNodeByKey as M, $isNodeSelection as _, FORMAT_TEXT_COMMAND as X, COMMAND_PRIORITY_LOW as a, KEY_BACKSPACE_COMMAND as V, REMOVE_TEXT_COMMAND as q, DELETE_LINE_COMMAND as z, DELETE_WORD_COMMAND as G, KEY_DELETE_COMMAND as J, CLICK_COMMAND as Q, RootNode as U, TextNode as Z, LineBreakNode as ee, ParagraphNode as te } from "lexical";
function ie({
  dataMention: f,
  label: d,
  value: x,
  data: E,
  step: l,
  nodeKey: o
}) {
  const { historyState: h } = S(), r = F.useRef(null), [u, p, C] = O(o), [t] = R(), g = m(
    (n) => n.target === r.current ? (C(), p(!0), !0) : !1,
    [p, C]
  ), i = m((n) => {
    const s = N(), c = M(o);
    return c && c.setSpanRef && c.setSpanRef(r.current), u && _(s) && (n.preventDefault(), j(c) && c.getKey() === o) ? (c.remove(), !0) : !1;
  }, [o, u]), D = m((n) => {
    if (u && _(N())) {
      const s = M(o);
      if (j(s))
        return s.toggleFormat(n), !0;
    }
    return !1;
  }, [u, o]);
  return Y(() => {
    const n = A(
      t.registerCommand(
        Q,
        g,
        a
      ),
      t.registerCommand(
        J,
        i,
        a
      ),
      t.registerCommand(
        G,
        i,
        a
      ),
      t.registerCommand(
        z,
        i,
        a
      ),
      t.registerCommand(
        q,
        i,
        a
      ),
      t.registerCommand(
        V,
        i,
        a
      ),
      t.registerCommand(
        X,
        D,
        a
      )
    );
    if (r.current) {
      const s = r.current.previousSibling || r.current.nextSibling;
      s && s.appendChild(r.current);
    }
    return () => {
      n();
    };
  }, [t, g, i]), /* @__PURE__ */ e.jsx(w, { fallback: null, children: f !== "input" ? l === 3 ? /* @__PURE__ */ e.jsx("span", { "data-decorate": "true", children: E }) : l === 2 ? /* @__PURE__ */ e.jsx("span", { "data-decorate": "true", children: f === "after-auto" ? d : E }) : /* @__PURE__ */ e.jsx(
    "span",
    {
      "data-decorate": "true",
      ref: r,
      style: u ? { border: "1px solid blue" } : {},
      children: d
    }
  ) : l !== 1 && x ? /* @__PURE__ */ e.jsxs("span", { className: "data-mention-input-container", "data-mention-input-step": l, children: [
    /* @__PURE__ */ e.jsx("b", { children: d }),
    /* @__PURE__ */ e.jsxs(
      H,
      {
        initialEditor: x,
        initialNodes: [U, Z, ee, te, T, L],
        children: [
          /* @__PURE__ */ e.jsx(b, {}),
          /* @__PURE__ */ e.jsx(P, {}),
          /* @__PURE__ */ e.jsx($, {}),
          /* @__PURE__ */ e.jsx(W, {}),
          /* @__PURE__ */ e.jsx(k, {}),
          /* @__PURE__ */ e.jsx(y, { externalHistoryState: h }),
          /* @__PURE__ */ e.jsx(
            B,
            {
              contentEditable: /* @__PURE__ */ e.jsx(
                I,
                {
                  "data-mention-input-step": l,
                  className: "DataMention__contentEditable"
                }
              ),
              placeholder: /* @__PURE__ */ e.jsxs(K, { className: "DataMention__placeholder", children: [
                "Enter a ",
                d,
                "..."
              ] }),
              ErrorBoundary: v
            }
          )
        ]
      }
    )
  ] }) : /* @__PURE__ */ e.jsx("span", { "data-decorate": "true", children: /* @__PURE__ */ e.jsx("b", { children: d }) }) });
}
export {
  ie as default
};
