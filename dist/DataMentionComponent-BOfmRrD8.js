import { u as r, j as i, E as l, K as d, L as c, a as x, b as u, c as j, d as m, e as h, f as p, P as g, g as P } from "./index-DA3fcQye.js";
import { Suspense as L } from "react";
import { L as E } from "./LexicalNestedComposer-CwF1u6Cr.js";
import { L as N } from "./LexicalHashtagPlugin-BmxFbhBr.js";
import { RootNode as f, TextNode as _, LineBreakNode as y, ParagraphNode as C } from "lexical";
function k({
  dataMention: a,
  label: e,
  value: n,
  data: s,
  step: t
}) {
  const { historyState: o } = r();
  return /* @__PURE__ */ i.jsx(L, { fallback: null, children: a !== "input" ? t === 3 ? /* @__PURE__ */ i.jsx("div", { children: s }) : t === 2 ? /* @__PURE__ */ i.jsx("div", { children: a === "after-auto" ? e : s }) : /* @__PURE__ */ i.jsx("div", { children: e }) : t !== 1 && n ? /* @__PURE__ */ i.jsxs("div", { className: "data-mention-input-container", "data-mention-input-step": t, children: [
    /* @__PURE__ */ i.jsx("b", { children: e }),
    /* @__PURE__ */ i.jsxs(
      E.LexicalNestedComposer,
      {
        initialEditor: n,
        initialNodes: [f, _, y, C, l, d],
        children: [
          /* @__PURE__ */ i.jsx(c.AutoFocusPlugin, {}),
          /* @__PURE__ */ i.jsx(x, {}),
          /* @__PURE__ */ i.jsx(u, {}),
          /* @__PURE__ */ i.jsx(N.HashtagPlugin, {}),
          /* @__PURE__ */ i.jsx(j, {}),
          /* @__PURE__ */ i.jsx(m.HistoryPlugin, { externalHistoryState: o }),
          /* @__PURE__ */ i.jsx(
            h.RichTextPlugin,
            {
              contentEditable: /* @__PURE__ */ i.jsx(
                p.ContentEditable,
                {
                  "data-mention-input-step": t,
                  className: "DataMention__contentEditable"
                }
              ),
              placeholder: /* @__PURE__ */ i.jsxs(g, { className: "DataMention__placeholder", children: [
                "Enter a ",
                e,
                "..."
              ] }),
              ErrorBoundary: P
            }
          )
        ]
      }
    )
  ] }) : /* @__PURE__ */ i.jsx("div", { children: /* @__PURE__ */ i.jsx("b", { children: e }) }) });
}
export {
  k as default
};
