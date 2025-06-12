import { jsxs as h, Fragment as L, jsx as e } from "react/jsx-runtime";
import { a as j, b as U, u as O, T as E, M as k, S as M, $ as z, E as y, L as W, c as q, I as f, d as G, k as H, w as J, O as Q, r as V, e as X, o as Y, f as Z, F as K, h as ee, g as te, P as ne, x as ae, j as oe, l as le, D as re, B as ie } from "./index-Bec-pY47.js";
import { d as se } from "./LexicalNestedComposer.prod-ClogiqCZ.js";
import { useRef as T, useState as x, useCallback as D, useEffect as ce, Suspense as ue } from "react";
const B = /* @__PURE__ */ new Set();
function de(l) {
  if (!B.has(l))
    throw new Promise((m) => {
      const a = new Image();
      a.src = l, a.onload = () => {
        B.add(l), m(null);
      };
    });
}
function me({
  altText: l,
  className: m,
  imageRef: a,
  src: p,
  width: i,
  height: c,
  position: s
}) {
  return de(p), /* @__PURE__ */ e(
    "img",
    {
      className: m || void 0,
      src: p,
      alt: l,
      ref: a,
      "data-position": s,
      style: {
        display: "block",
        height: c,
        width: i
      },
      draggable: "false"
    }
  );
}
function ge({
  activeEditor: l,
  nodeKey: m,
  onClose: a
}) {
  const i = l.getEditorState().read(
    () => M(m)
  ), [c, s] = x(i.getAltText()), [b, w] = x(i.getShowCaption()), [I, C] = x(i.getPosition()), v = (u) => {
    w(u.target.checked);
  }, r = (u) => {
    C(u.target.value);
  }, g = () => {
    const u = { altText: c, position: I, showCaption: b };
    i && l.update(() => {
      i.update(u);
    }), a();
  };
  return /* @__PURE__ */ h(L, { children: [
    /* @__PURE__ */ e("div", { style: { marginBottom: "1em" }, children: /* @__PURE__ */ e(
      oe,
      {
        label: "Alt Text",
        placeholder: "Descriptive alternative text",
        onChange: s,
        value: c,
        "data-test-id": "image-modal-alt-text-input"
      }
    ) }),
    /* @__PURE__ */ h(
      le,
      {
        style: { marginBottom: "1em", width: "208px" },
        value: I,
        label: "Position",
        name: "position",
        id: "position-select",
        onChange: r,
        children: [
          /* @__PURE__ */ e("option", { value: "left", children: "Left" }),
          /* @__PURE__ */ e("option", { value: "right", children: "Right" }),
          /* @__PURE__ */ e("option", { value: "full", children: "Full Width" })
        ]
      }
    ),
    /* @__PURE__ */ h("div", { className: "Input__wrapper", children: [
      /* @__PURE__ */ e(
        "input",
        {
          id: "caption",
          type: "checkbox",
          checked: b,
          onChange: v
        }
      ),
      /* @__PURE__ */ e("label", { htmlFor: "caption", children: "Show Caption" })
    ] }),
    /* @__PURE__ */ e(re, { children: /* @__PURE__ */ e(
      ie,
      {
        "data-test-id": "image-modal-file-upload-btn",
        onClick: () => g(),
        children: "Confirm"
      }
    ) })
  ] });
}
function be({
  src: l,
  altText: m,
  nodeKey: a,
  width: p,
  height: i,
  showCaption: c,
  caption: s,
  position: b
}) {
  const [w, I] = j(), C = T(null), v = T(null), [r, g, u] = U(a), [n] = O(), [P, A] = x(null), F = T(null), N = D(
    (o) => {
      if (r && E(k())) {
        o.preventDefault();
        const t = M(a);
        if (z(t))
          return t.remove(), !0;
      }
      return !1;
    },
    [r, a]
  ), R = D(
    (o) => {
      const d = k(), t = v.current;
      if (r && E(d) && d.getNodes().length === 1) {
        if (c)
          return y(null), o.preventDefault(), s.focus(), !0;
        if (t !== null && t !== document.activeElement)
          return o.preventDefault(), t.focus(), !0;
      }
      return !1;
    },
    [s, r, c]
  ), _ = D(
    (o) => F.current === s || v.current === o.target ? (y(null), n.update(() => {
      g(!0);
      const d = n.getRootElement();
      d !== null && d.focus();
    }), !0) : !1,
    [s, n, g]
  );
  ce(() => {
    let o = !0;
    const d = W(
      n.registerUpdateListener(({ editorState: t }) => {
        o && A(t.read(() => k()));
      }),
      n.registerCommand(
        X,
        (t, S) => (F.current = S, !1),
        f
      ),
      n.registerCommand(
        V,
        (t) => {
          const S = t;
          return S.target === C.current ? (S.shiftKey ? g(!r) : (u(), g(!0)), !0) : !1;
        },
        f
      ),
      n.registerCommand(
        Q,
        (t) => t.target === C.current ? (t.preventDefault(), !0) : !1,
        f
      ),
      n.registerCommand(
        J,
        N,
        f
      ),
      n.registerCommand(
        H,
        N,
        f
      ),
      n.registerCommand(G, R, f),
      n.registerCommand(
        q,
        _,
        f
      )
    );
    return () => {
      o = !1, d();
    };
  }, [
    u,
    n,
    r,
    a,
    N,
    R,
    _,
    g
  ]);
  const $ = r && E(P);
  return /* @__PURE__ */ h(ue, { fallback: null, children: [
    /* @__PURE__ */ h(L, { children: [
      /* @__PURE__ */ h("div", { draggable: $, children: [
        /* @__PURE__ */ e(
          "button",
          {
            className: "image-edit-button",
            ref: v,
            onClick: () => {
              I("Update Inline Image", (o) => /* @__PURE__ */ e(
                ge,
                {
                  activeEditor: n,
                  nodeKey: a,
                  onClose: o
                }
              ));
            },
            children: "Edit"
          }
        ),
        /* @__PURE__ */ e(
          me,
          {
            className: r ? `focused ${E(P) ? "draggable" : ""}` : null,
            src: l,
            altText: m,
            imageRef: C,
            width: p,
            height: i,
            position: b
          }
        )
      ] }),
      c && /* @__PURE__ */ e("div", { className: "image-caption-container", children: /* @__PURE__ */ h(se, { initialEditor: s, children: [
        /* @__PURE__ */ e(Y, {}),
        /* @__PURE__ */ e(Z, {}),
        /* @__PURE__ */ e(K, {}),
        /* @__PURE__ */ e(
          ee,
          {
            contentEditable: /* @__PURE__ */ e(ae, { className: "InlineImageNode__contentEditable" }),
            placeholder: /* @__PURE__ */ e(ne, { className: "InlineImageNode__placeholder", children: "Enter a caption..." }),
            ErrorBoundary: te
          }
        )
      ] }) })
    ] }),
    w
  ] });
}
export {
  ge as UpdateInlineImageDialog,
  be as default
};
