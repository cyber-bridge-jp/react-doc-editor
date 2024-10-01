import { j as e, g, h as r, m as N, i as _, n as C, o as q } from "./index-CP_DG8xS.js";
import { forwardRef as h, useState as x, useRef as j, useCallback as S, useEffect as f } from "react";
function $({ equation: s, setEquation: c, inline: i }, t) {
  const n = (E) => {
    c(E.target.value);
  };
  return i && t instanceof HTMLInputElement ? /* @__PURE__ */ e.jsxs("span", { className: "EquationEditor_inputBackground", children: [
    /* @__PURE__ */ e.jsx("span", { className: "EquationEditor_dollarSign", children: "$" }),
    /* @__PURE__ */ e.jsx(
      "input",
      {
        className: "EquationEditor_inlineEditor",
        value: s,
        onChange: n,
        autoFocus: !0,
        ref: t
      }
    ),
    /* @__PURE__ */ e.jsx("span", { className: "EquationEditor_dollarSign", children: "$" })
  ] }) : /* @__PURE__ */ e.jsxs("div", { className: "EquationEditor_inputBackground", children: [
    /* @__PURE__ */ e.jsx("span", { className: "EquationEditor_dollarSign", children: `$$
` }),
    /* @__PURE__ */ e.jsx(
      "textarea",
      {
        className: "EquationEditor_blockEditor",
        value: s,
        onChange: n,
        ref: t
      }
    ),
    /* @__PURE__ */ e.jsx("span", { className: "EquationEditor_dollarSign", children: `
$$` })
  ] });
}
const M = h($);
function R({
  equation: s,
  inline: c,
  nodeKey: i
}) {
  const [t] = g.useLexicalComposerContext(), [n, E] = x(s), [l, d] = x(!1), m = j(null), p = S(
    (a) => {
      d(!1), t.update(() => {
        const o = r.$getNodeByKey(i);
        N(o) && (o.setEquation(n), a && o.selectNext(0, 0));
      });
    },
    [t, n, i]
  );
  return f(() => {
    !l && n !== s && E(s);
  }, [l, s, n]), f(() => l ? _.mergeRegister(
    t.registerCommand(
      r.SELECTION_CHANGE_COMMAND,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (a) => {
        const o = document.activeElement;
        return m.current !== o && p(), !1;
      },
      r.COMMAND_PRIORITY_HIGH
    ),
    t.registerCommand(
      r.KEY_ESCAPE_COMMAND,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (a) => {
        const o = document.activeElement;
        return m.current === o ? (p(!0), !0) : !1;
      },
      r.COMMAND_PRIORITY_HIGH
    )
  ) : t.registerUpdateListener(({ editorState: a }) => {
    a.read(() => {
      const u = r.$getSelection();
      return r.$isNodeSelection(u) && u.has(i) && u.getNodes().length === 1;
    }) && d(!0);
  }), [t, i, p, l]), /* @__PURE__ */ e.jsx(e.Fragment, { children: l ? /* @__PURE__ */ e.jsx(
    M,
    {
      equation: n,
      setEquation: E,
      inline: c,
      ref: m
    }
  ) : /* @__PURE__ */ e.jsx(C, { onError: (a) => t._onError(a), fallback: null, children: /* @__PURE__ */ e.jsx(
    q,
    {
      equation: n,
      inline: c,
      onDoubleClick: () => d(!0)
    }
  ) }) });
}
export {
  R as default
};
