import { a as $, b as M, u as U, w as b, R as w, C as y, $ as z, F as T, N as O, c as W, K as f, d as q, k as G, e as H, D as J, r as Q, t as V, j as e, o as X, L as Y, f as Z, h as K, g as ee, P as te, x as ne, T as ae, S as se, l as oe, B as le } from "./index-DwhukDPk.js";
import { d as re } from "./LexicalNestedComposer.prod-Dzez1nJj.js";
import { useRef as N, useState as S, useCallback as k, useEffect as ie, Suspense as ce } from "react";
const _ = /* @__PURE__ */ new Set();
function ue(o) {
  if (!_.has(o))
    throw new Promise((m) => {
      const a = new Image();
      a.src = o, a.onload = () => {
        _.add(o), m(null);
      };
    });
}
function de({
  altText: o,
  className: m,
  imageRef: a,
  src: h,
  width: r,
  height: c,
  position: i
}) {
  return ue(h), /* @__PURE__ */ e.jsx(
    "img",
    {
      className: m || void 0,
      src: h,
      alt: o,
      ref: a,
      "data-position": i,
      style: {
        display: "block",
        height: c,
        width: r
      },
      draggable: "false"
    }
  );
}
function me({
  activeEditor: o,
  nodeKey: m,
  onClose: a
}) {
  const r = o.getEditorState().read(
    () => y(m)
  ), [c, i] = S(r.getAltText()), [j, I] = S(r.getShowCaption()), [C, p] = S(r.getPosition()), x = (u) => {
    I(u.target.checked);
  }, l = (u) => {
    p(u.target.value);
  }, g = () => {
    const u = { altText: c, position: C, showCaption: j };
    r && o.update(() => {
      r.update(u);
    }), a();
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("div", { style: { marginBottom: "1em" }, children: /* @__PURE__ */ e.jsx(
      ae,
      {
        label: "Alt Text",
        placeholder: "Descriptive alternative text",
        onChange: i,
        value: c,
        "data-test-id": "image-modal-alt-text-input"
      }
    ) }),
    /* @__PURE__ */ e.jsxs(
      se,
      {
        style: { marginBottom: "1em", width: "208px" },
        value: C,
        label: "Position",
        name: "position",
        id: "position-select",
        onChange: l,
        children: [
          /* @__PURE__ */ e.jsx("option", { value: "left", children: "Left" }),
          /* @__PURE__ */ e.jsx("option", { value: "right", children: "Right" }),
          /* @__PURE__ */ e.jsx("option", { value: "full", children: "Full Width" })
        ]
      }
    ),
    /* @__PURE__ */ e.jsxs("div", { className: "Input__wrapper", children: [
      /* @__PURE__ */ e.jsx(
        "input",
        {
          id: "caption",
          type: "checkbox",
          checked: j,
          onChange: x
        }
      ),
      /* @__PURE__ */ e.jsx("label", { htmlFor: "caption", children: "Show Caption" })
    ] }),
    /* @__PURE__ */ e.jsx(oe, { children: /* @__PURE__ */ e.jsx(
      le,
      {
        "data-test-id": "image-modal-file-upload-btn",
        onClick: () => g(),
        children: "Confirm"
      }
    ) })
  ] });
}
function pe({
  src: o,
  altText: m,
  nodeKey: a,
  width: h,
  height: r,
  showCaption: c,
  caption: i,
  position: j
}) {
  const [I, C] = $(), p = N(null), x = N(null), [l, g, u] = M(a), [n] = U(), [R, B] = S(null), D = N(null), E = k(
    (s) => {
      if (l && b(w())) {
        s.preventDefault();
        const t = y(a);
        if (z(t))
          return t.remove(), !0;
      }
      return !1;
    },
    [l, a]
  ), F = k(
    (s) => {
      const d = w(), t = x.current;
      if (l && b(d) && d.getNodes().length === 1) {
        if (c)
          return T(null), s.preventDefault(), i.focus(), !0;
        if (t !== null && t !== document.activeElement)
          return s.preventDefault(), t.focus(), !0;
      }
      return !1;
    },
    [i, l, c]
  ), P = k(
    (s) => D.current === i || x.current === s.target ? (T(null), n.update(() => {
      g(!0);
      const d = n.getRootElement();
      d !== null && d.focus();
    }), !0) : !1,
    [i, n, g]
  );
  ie(() => {
    let s = !0;
    const d = O(
      n.registerUpdateListener(({ editorState: t }) => {
        s && B(t.read(() => w()));
      }),
      n.registerCommand(
        V,
        (t, v) => (D.current = v, !1),
        f
      ),
      n.registerCommand(
        Q,
        (t) => {
          const v = t;
          return v.target === p.current ? (v.shiftKey ? g(!l) : (u(), g(!0)), !0) : !1;
        },
        f
      ),
      n.registerCommand(
        J,
        (t) => t.target === p.current ? (t.preventDefault(), !0) : !1,
        f
      ),
      n.registerCommand(
        H,
        E,
        f
      ),
      n.registerCommand(
        G,
        E,
        f
      ),
      n.registerCommand(q, F, f),
      n.registerCommand(
        W,
        P,
        f
      )
    );
    return () => {
      s = !1, d();
    };
  }, [
    u,
    n,
    l,
    a,
    E,
    F,
    P,
    g
  ]);
  const L = l && b(R), A = l;
  return /* @__PURE__ */ e.jsxs(ce, { fallback: null, children: [
    /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsxs("div", { draggable: L, children: [
        /* @__PURE__ */ e.jsx(
          "button",
          {
            className: "image-edit-button",
            ref: x,
            onClick: () => {
              C("Update Inline Image", (s) => /* @__PURE__ */ e.jsx(
                me,
                {
                  activeEditor: n,
                  nodeKey: a,
                  onClose: s
                }
              ));
            },
            children: "Edit"
          }
        ),
        /* @__PURE__ */ e.jsx(
          de,
          {
            className: A ? `focused ${b(R) ? "draggable" : ""}` : null,
            src: o,
            altText: m,
            imageRef: p,
            width: h,
            height: r,
            position: j
          }
        )
      ] }),
      c && /* @__PURE__ */ e.jsx("div", { className: "image-caption-container", children: /* @__PURE__ */ e.jsxs(re, { initialEditor: i, children: [
        /* @__PURE__ */ e.jsx(X, {}),
        /* @__PURE__ */ e.jsx(Y, {}),
        /* @__PURE__ */ e.jsx(Z, {}),
        /* @__PURE__ */ e.jsx(
          K,
          {
            contentEditable: /* @__PURE__ */ e.jsx(ne, { className: "InlineImageNode__contentEditable" }),
            placeholder: /* @__PURE__ */ e.jsx(te, { className: "InlineImageNode__placeholder", children: "Enter a caption..." }),
            ErrorBoundary: ee
          }
        )
      ] }) })
    ] }),
    I
  ] });
}
export {
  me as UpdateInlineImageDialog,
  pe as default
};
