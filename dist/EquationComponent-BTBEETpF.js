import { j as e, i as g, n as N, k as _, o as q, p as C } from "./index-DA3fcQye.js";
import { $getNodeByKey as j, SELECTION_CHANGE_COMMAND as h, COMMAND_PRIORITY_HIGH as p, KEY_ESCAPE_COMMAND as S, $getSelection as $, $isNodeSelection as v } from "lexical";
import { forwardRef as k, useState as x, useRef as M, useCallback as L, useEffect as f } from "react";
function R({ equation: s, setEquation: u, inline: a }, t) {
  const n = (c) => {
    u(c.target.value);
  };
  return a && t instanceof HTMLInputElement ? /* @__PURE__ */ e.jsxs("span", { className: "EquationEditor_inputBackground", children: [
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
const A = k(R);
function b({
  equation: s,
  inline: u,
  nodeKey: a
}) {
  const [t] = g.useLexicalComposerContext(), [n, c] = x(s), [i, E] = x(!1), d = M(null), m = L(
    (r) => {
      E(!1), t.update(() => {
        const o = j(a);
        N(o) && (o.setEquation(n), r && o.selectNext(0, 0));
      });
    },
    [t, n, a]
  );
  return f(() => {
    !i && n !== s && c(s);
  }, [i, s, n]), f(() => i ? _.mergeRegister(
    t.registerCommand(
      h,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (r) => {
        const o = document.activeElement;
        return d.current !== o && m(), !1;
      },
      p
    ),
    t.registerCommand(
      S,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (r) => {
        const o = document.activeElement;
        return d.current === o ? (m(!0), !0) : !1;
      },
      p
    )
  ) : t.registerUpdateListener(({ editorState: r }) => {
    r.read(() => {
      const l = $();
      return v(l) && l.has(a) && l.getNodes().length === 1;
    }) && E(!0);
  }), [t, a, m, i]), /* @__PURE__ */ e.jsx(e.Fragment, { children: i ? /* @__PURE__ */ e.jsx(
    A,
    {
      equation: n,
      setEquation: c,
      inline: u,
      ref: d
    }
  ) : /* @__PURE__ */ e.jsx(q, { onError: (r) => t._onError(r), fallback: null, children: /* @__PURE__ */ e.jsx(
    C,
    {
      equation: n,
      inline: u,
      onDoubleClick: () => E(!0)
    }
  ) }) });
}
export {
  b as default
};
