import { j as t, b as N, w as _, L as g, y as q, z as j } from "./index-DwfkgjKA.js";
import { $getNodeByKey as h, KEY_ESCAPE_COMMAND as C, COMMAND_PRIORITY_HIGH as f, SELECTION_CHANGE_COMMAND as S, $getSelection as $, $isNodeSelection as v } from "lexical";
import { forwardRef as M, useState as p, useRef as k, useCallback as b, useEffect as x } from "react";
function A({ equation: a, setEquation: l, inline: s }, e) {
  const n = (c) => {
    l(c.target.value);
  };
  return s && e instanceof HTMLInputElement ? /* @__PURE__ */ t.jsxs("span", { className: "EquationEditor_inputBackground", children: [
    /* @__PURE__ */ t.jsx("span", { className: "EquationEditor_dollarSign", children: "$" }),
    /* @__PURE__ */ t.jsx(
      "input",
      {
        className: "EquationEditor_inlineEditor",
        value: a,
        onChange: n,
        autoFocus: !0,
        ref: e
      }
    ),
    /* @__PURE__ */ t.jsx("span", { className: "EquationEditor_dollarSign", children: "$" })
  ] }) : /* @__PURE__ */ t.jsxs("div", { className: "EquationEditor_inputBackground", children: [
    /* @__PURE__ */ t.jsx("span", { className: "EquationEditor_dollarSign", children: `$$
` }),
    /* @__PURE__ */ t.jsx(
      "textarea",
      {
        className: "EquationEditor_blockEditor",
        value: a,
        onChange: n,
        ref: e
      }
    ),
    /* @__PURE__ */ t.jsx("span", { className: "EquationEditor_dollarSign", children: `
$$` })
  ] });
}
const H = M(A);
function B({
  equation: a,
  inline: l,
  nodeKey: s
}) {
  const [e] = N(), [n, c] = p(a), [i, E] = p(!1), d = k(null), m = b(
    (r) => {
      E(!1), e.update(() => {
        const o = h(s);
        _(o) && (o.setEquation(n), r && o.selectNext(0, 0));
      });
    },
    [e, n, s]
  );
  return x(() => {
    !i && n !== a && c(a);
  }, [i, a, n]), x(() => i ? g(
    e.registerCommand(
      S,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (r) => {
        const o = document.activeElement;
        return d.current !== o && m(), !1;
      },
      f
    ),
    e.registerCommand(
      C,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (r) => {
        const o = document.activeElement;
        return d.current === o ? (m(!0), !0) : !1;
      },
      f
    )
  ) : e.registerUpdateListener(({ editorState: r }) => {
    r.read(() => {
      const u = $();
      return v(u) && u.has(s) && u.getNodes().length === 1;
    }) && E(!0);
  }), [e, s, m, i]), /* @__PURE__ */ t.jsx(t.Fragment, { children: i ? /* @__PURE__ */ t.jsx(
    H,
    {
      equation: n,
      setEquation: c,
      inline: l,
      ref: d
    }
  ) : /* @__PURE__ */ t.jsx(q, { onError: (r) => e._onError(r), fallback: null, children: /* @__PURE__ */ t.jsx(
    j,
    {
      equation: n,
      inline: l,
      onDoubleClick: () => E(!0)
    }
  ) }) });
}
export {
  B as default
};
