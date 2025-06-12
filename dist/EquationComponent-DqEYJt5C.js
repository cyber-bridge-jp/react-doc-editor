import { jsxs as f, jsx as e, Fragment as h } from "react/jsx-runtime";
import { u as N, S as _, ab as S, L as v, c as $, ac as p, e as b, M as k, T as x, ad as C, ae as M } from "./index-C14StzBP.js";
import { forwardRef as B, useState as q, useRef as L, useCallback as T, useEffect as g } from "react";
function j({ equation: r, setEquation: l, inline: i }, t) {
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
const F = B(j);
function w({
  equation: r,
  inline: l,
  nodeKey: i
}) {
  const [t] = N(), [n, c] = q(r), [s, E] = q(!1), d = L(null), m = T(
    (o) => {
      E(!1), t.update(() => {
        const a = _(i);
        S(a) && (a.setEquation(n), o && a.selectNext(0, 0));
      });
    },
    [t, n, i]
  );
  return g(() => {
    !s && n !== r && c(r);
  }, [s, r, n]), g(() => s ? v(
    t.registerCommand(
      b,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (o) => {
        const a = document.activeElement;
        return d.current !== a && m(), !1;
      },
      p
    ),
    t.registerCommand(
      $,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (o) => {
        const a = document.activeElement;
        return d.current === a ? (m(!0), !0) : !1;
      },
      p
    )
  ) : t.registerUpdateListener(({ editorState: o }) => {
    o.read(() => {
      const u = k();
      return x(u) && u.has(i) && u.getNodes().length === 1;
    }) && E(!0);
  }), [t, i, m, s]), /* @__PURE__ */ e(h, { children: s ? /* @__PURE__ */ e(
    F,
    {
      equation: n,
      setEquation: c,
      inline: l,
      ref: d
    }
  ) : /* @__PURE__ */ e(C, { onError: (o) => t._onError(o), fallback: null, children: /* @__PURE__ */ e(
    M,
    {
      equation: n,
      inline: l,
      onDoubleClick: () => E(!0)
    }
  ) }) });
}
export {
  w as default
};
