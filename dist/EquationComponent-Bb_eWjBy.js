import { j as t, u as q, C as g, ac as j, N as h, c as N, ad as f, t as _, R as $, w as v, ae as C, af as S } from "./index-DwhukDPk.js";
import { forwardRef as k, useState as p, useRef as b, useCallback as R, useEffect as x } from "react";
function w({ equation: s, setEquation: l, inline: o }, e) {
  const n = (c) => {
    l(c.target.value);
  };
  return o && e instanceof HTMLInputElement ? /* @__PURE__ */ t.jsxs("span", { className: "EquationEditor_inputBackground", children: [
    /* @__PURE__ */ t.jsx("span", { className: "EquationEditor_dollarSign", children: "$" }),
    /* @__PURE__ */ t.jsx(
      "input",
      {
        className: "EquationEditor_inlineEditor",
        value: s,
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
        value: s,
        onChange: n,
        ref: e
      }
    ),
    /* @__PURE__ */ t.jsx("span", { className: "EquationEditor_dollarSign", children: `
$$` })
  ] });
}
const B = k(w);
function L({
  equation: s,
  inline: l,
  nodeKey: o
}) {
  const [e] = q(), [n, c] = p(s), [i, E] = p(!1), d = b(null), m = R(
    (r) => {
      E(!1), e.update(() => {
        const a = g(o);
        j(a) && (a.setEquation(n), r && a.selectNext(0, 0));
      });
    },
    [e, n, o]
  );
  return x(() => {
    !i && n !== s && c(s);
  }, [i, s, n]), x(() => i ? h(
    e.registerCommand(
      _,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (r) => {
        const a = document.activeElement;
        return d.current !== a && m(), !1;
      },
      f
    ),
    e.registerCommand(
      N,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (r) => {
        const a = document.activeElement;
        return d.current === a ? (m(!0), !0) : !1;
      },
      f
    )
  ) : e.registerUpdateListener(({ editorState: r }) => {
    r.read(() => {
      const u = $();
      return v(u) && u.has(o) && u.getNodes().length === 1;
    }) && E(!0);
  }), [e, o, m, i]), /* @__PURE__ */ t.jsx(t.Fragment, { children: i ? /* @__PURE__ */ t.jsx(
    B,
    {
      equation: n,
      setEquation: c,
      inline: l,
      ref: d
    }
  ) : /* @__PURE__ */ t.jsx(C, { onError: (r) => e._onError(r), fallback: null, children: /* @__PURE__ */ t.jsx(
    S,
    {
      equation: n,
      inline: l,
      onDoubleClick: () => E(!0)
    }
  ) }) });
}
export {
  L as default
};
