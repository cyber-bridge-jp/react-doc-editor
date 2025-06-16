import { jsxs as f, jsx as e, Fragment as h } from "react/jsx-runtime";
import { H as _, W as N, aY as S, Z as $, a0 as v, aZ as p, a7 as k, V as x, U as C, a_ as b, a$ as B } from "./index-B1XK6w54.js";
import { forwardRef as H, useState as q, useRef as L, useCallback as M, useEffect as g } from "react";
function V({ equation: r, setEquation: l, inline: i }, t) {
  const n = (c) => {
    l(c.target.value);
  };
  return i && t instanceof HTMLInputElement ? /* @__PURE__ */ f("span", { className: "EquationEditor_inputBackground", children: [
    /* @__PURE__ */ e("span", { className: "EquationEditor_dollarSign", children: "$" }),
    /* @__PURE__ */ e(
      "input",
      {
        className: "EquationEditor_inlineEditor",
        value: r,
        onChange: n,
        autoFocus: !0,
        ref: t
      }
    ),
    /* @__PURE__ */ e("span", { className: "EquationEditor_dollarSign", children: "$" })
  ] }) : /* @__PURE__ */ f("div", { className: "EquationEditor_inputBackground", children: [
    /* @__PURE__ */ e("span", { className: "EquationEditor_dollarSign", children: `$$
` }),
    /* @__PURE__ */ e(
      "textarea",
      {
        className: "EquationEditor_blockEditor",
        value: r,
        onChange: n,
        ref: t
      }
    ),
    /* @__PURE__ */ e("span", { className: "EquationEditor_dollarSign", children: `
$$` })
  ] });
}
const j = H(V);
function U({
  equation: r,
  inline: l,
  nodeKey: i
}) {
  const [t] = _(), [n, c] = q(r), [s, E] = q(!1), d = L(null), m = M(
    (o) => {
      E(!1), t.update(() => {
        const a = N(i);
        S(a) && (a.setEquation(n), o && a.selectNext(0, 0));
      });
    },
    [t, n, i]
  );
  return g(() => {
    !s && n !== r && c(r);
  }, [s, r, n]), g(() => s ? $(
    t.registerCommand(
      k,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (o) => {
        const a = document.activeElement;
        return d.current !== a && m(), !1;
      },
      p
    ),
    t.registerCommand(
      v,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (o) => {
        const a = document.activeElement;
        return d.current === a ? (m(!0), !0) : !1;
      },
      p
    )
  ) : t.registerUpdateListener(({ editorState: o }) => {
    o.read(() => {
      const u = x();
      return C(u) && u.has(i) && u.getNodes().length === 1;
    }) && E(!0);
  }), [t, i, m, s]), /* @__PURE__ */ e(h, { children: s ? /* @__PURE__ */ e(
    j,
    {
      equation: n,
      setEquation: c,
      inline: l,
      ref: d
    }
  ) : /* @__PURE__ */ e(b, { onError: (o) => t._onError(o), fallback: null, children: /* @__PURE__ */ e(
    B,
    {
      equation: n,
      inline: l,
      onDoubleClick: () => E(!0)
    }
  ) }) });
}
export {
  U as default
};
