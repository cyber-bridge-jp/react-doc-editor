import { u as r, j as i, L as l, a as c, E as x, K as d, b as u, c as j, d as m, P as h, e as p } from "./index-D6zAFZpw.js";
import { Suspense as g } from "react";
import { L as P } from "./LexicalNestedComposer-C2j4GrmY.js";
import { L } from "./LexicalHashtagPlugin-CZIR0MtZ.js";
function C({
  dataMention: e,
  label: t,
  value: s,
  data: a,
  step: n
}) {
  const { historyState: o } = r();
  return /* @__PURE__ */ i.jsx(g, { fallback: null, children: e !== "input" ? n === 3 ? /* @__PURE__ */ i.jsx("div", { children: a }) : n === 2 ? /* @__PURE__ */ i.jsx("div", { children: e === "after-auto" ? t : a }) : /* @__PURE__ */ i.jsx("div", { children: t }) : n !== 1 && s ? /* @__PURE__ */ i.jsxs("div", { className: "data-mention-input-container", "data-mention-input-step": n, children: [
    /* @__PURE__ */ i.jsx("b", { children: t }),
    /* @__PURE__ */ i.jsxs(P.LexicalNestedComposer, { initialEditor: s, children: [
      /* @__PURE__ */ i.jsx(l.AutoFocusPlugin, {}),
      /* @__PURE__ */ i.jsx(c, {}),
      /* @__PURE__ */ i.jsx(x, {}),
      /* @__PURE__ */ i.jsx(L.HashtagPlugin, {}),
      /* @__PURE__ */ i.jsx(d, {}),
      /* @__PURE__ */ i.jsx(u.HistoryPlugin, { externalHistoryState: o }),
      /* @__PURE__ */ i.jsx(
        j.RichTextPlugin,
        {
          contentEditable: /* @__PURE__ */ i.jsx(
            m.ContentEditable,
            {
              "data-mention-input-step": n,
              className: "DataMention__contentEditable"
            }
          ),
          placeholder: /* @__PURE__ */ i.jsxs(h, { className: "DataMention__placeholder", children: [
            "Enter a ",
            t,
            "..."
          ] }),
          ErrorBoundary: p
        }
      )
    ] })
  ] }) : /* @__PURE__ */ i.jsx("div", { children: t }) });
}
export {
  C as default
};
