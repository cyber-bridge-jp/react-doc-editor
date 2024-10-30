import { u as T, a as L, b as $, $ as h, L as P, j as e, E as y, K as k, o as B, c as I, d as K, e as W, f as F, h as Y, x as w, P as H, g as X } from "./index-DsBLXs3w.js";
import j, { useCallback as x, useEffect as D, Suspense as v } from "react";
import { d as V } from "./LexicalNestedComposer.prod-DFbd-2wJ.js";
import { c as q } from "./LexicalHashtagPlugin.prod-D9IzEK68.js";
import { $getSelection as S, $getNodeByKey as R, $isNodeSelection as O, FORMAT_TEXT_COMMAND as z, COMMAND_PRIORITY_LOW as a, KEY_BACKSPACE_COMMAND as G, REMOVE_TEXT_COMMAND as J, DELETE_LINE_COMMAND as Q, DELETE_WORD_COMMAND as U, KEY_DELETE_COMMAND as Z, CLICK_COMMAND as ee, RootNode as te, TextNode as ne, LineBreakNode as re, ParagraphNode as ie } from "lexical";
function le({
  dataMention: E,
  label: f,
  value: m,
  data: C,
  step: o,
  nodeKey: c,
  error: l
}) {
  const { historyState: b } = T(), s = j.useRef(null), p = j.useRef(null), [u, g, _] = L(c), [i] = $(), M = x(
    (t) => t.target === s.current ? (_(), g(!0), !0) : !1,
    [g, _]
  ), d = x((t) => {
    const r = S(), n = R(c);
    return n && n.setSpanRef && n.setSpanRef(s.current), u && O(r) && (t.preventDefault(), h(n) && n.getKey() === c) ? (n.remove(), !0) : !1;
  }, [c, u]), A = x((t) => {
    if (u && O(S())) {
      const r = R(c);
      if (h(r))
        return r.toggleFormat(t), !0;
    }
    return !1;
  }, [u, c]);
  return D(() => {
    const t = P(
      i.registerCommand(
        ee,
        M,
        a
      ),
      i.registerCommand(
        Z,
        d,
        a
      ),
      i.registerCommand(
        U,
        d,
        a
      ),
      i.registerCommand(
        Q,
        d,
        a
      ),
      i.registerCommand(
        J,
        d,
        a
      ),
      i.registerCommand(
        G,
        d,
        a
      ),
      i.registerCommand(
        z,
        A,
        a
      )
    );
    if (s.current) {
      const r = s.current.previousSibling || s.current.nextSibling;
      r && r.appendChild(s.current);
    }
    return m && o == 2 && i.update(() => {
      m.setEditable(!0);
    }), () => {
      t();
    };
  }, [i, M, d]), D(() => {
    var t, r;
    if (p.current) {
      const n = p.current, N = (r = (t = n == null ? void 0 : n.nextSibling) == null ? void 0 : t.firstChild) == null ? void 0 : r.parentElement;
      N && n && (n.style.minWidth = `${N.offsetWidth}px`);
    }
  }, []), /* @__PURE__ */ e.jsx(v, { fallback: null, children: E !== "input" ? o === 3 ? /* @__PURE__ */ e.jsx("span", { "data-decorate": "true", children: C }) : o === 2 ? /* @__PURE__ */ e.jsx("span", { "data-decorate": "true", children: E === "after-auto" ? f : C }) : /* @__PURE__ */ e.jsx(
    "span",
    {
      "data-decorate": "true",
      ref: s,
      style: u ? { border: "1px solid blue" } : {},
      children: f
    }
  ) : o !== 1 && m ? /* @__PURE__ */ e.jsx("span", { className: "data-mention-input-container", "data-mention-input-step": o, children: /* @__PURE__ */ e.jsxs(
    V,
    {
      initialEditor: m,
      initialNodes: [te, ne, re, ie, y, k],
      children: [
        /* @__PURE__ */ e.jsx(B, {}),
        /* @__PURE__ */ e.jsx(I, {}),
        /* @__PURE__ */ e.jsx(K, {}),
        /* @__PURE__ */ e.jsx(q, {}),
        /* @__PURE__ */ e.jsx(W, {}),
        /* @__PURE__ */ e.jsx(F, { externalHistoryState: b }),
        /* @__PURE__ */ e.jsx(
          Y,
          {
            contentEditable: /* @__PURE__ */ e.jsx(
              w,
              {
                ref: (t) => {
                  p.current = t;
                },
                "data-mention-input-step": o,
                ...l !== null ? { "data-mention-input-error": l } : {},
                className: "DataMention__contentEditable"
              }
            ),
            placeholder: /* @__PURE__ */ e.jsx(
              H,
              {
                className: l !== null ? "DataMention__placeholder_error" : "DataMention__placeholder",
                children: l || `${f}を入力してください`
              }
            ),
            ErrorBoundary: X
          }
        )
      ]
    }
  ) }) : /* @__PURE__ */ e.jsx("span", { "data-decorate": "true", children: /* @__PURE__ */ e.jsx("b", { children: f }) }) });
}
export {
  le as default
};
