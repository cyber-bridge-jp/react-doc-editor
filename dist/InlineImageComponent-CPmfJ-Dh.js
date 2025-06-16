import { jsxs as h, Fragment as A, jsx as e } from "react/jsx-runtime";
import { O as $, Q as O, H as j, U as E, V as k, W as B, $ as W, Y as y, Z as z, a0 as H, a1 as f, a2 as Q, a3 as V, a4 as Y, a5 as Z, a6 as q, a7 as G, a8 as J, a9 as X, aa as K, ab as ee, ac as te, ad as ae, ae as ne, af as oe, ag as le, ah as re, ai as ie } from "./index-B-hVvLl3.js";
import { d as se } from "./LexicalNestedComposer.prod-BXFMiEJe.js";
import { useRef as T, useState as x, useCallback as D, useEffect as ce, Suspense as ue } from "react";
const L = /* @__PURE__ */ new Set();
function de(l) {
  if (!L.has(l))
    throw new Promise((m) => {
      const n = new Image();
      n.src = l, n.onload = () => {
        L.add(l), m(null);
      };
    });
}
function me({
  altText: l,
  className: m,
  imageRef: n,
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
      ref: n,
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
  onClose: n
}) {
  const i = l.getEditorState().read(
    () => B(m)
  ), [c, s] = x(i.getAltText()), [v, w] = x(i.getShowCaption()), [I, C] = x(i.getPosition()), b = (u) => {
    w(u.target.checked);
  }, r = (u) => {
    C(u.target.value);
  }, g = () => {
    const u = { altText: c, position: I, showCaption: v };
    i && l.update(() => {
      i.update(u);
    }), n();
  };
  return /* @__PURE__ */ h(A, { children: [
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
          checked: v,
          onChange: b
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
function ve({
  src: l,
  altText: m,
  nodeKey: n,
  width: p,
  height: i,
  showCaption: c,
  caption: s,
  position: v
}) {
  const [w, I] = $(), C = T(null), b = T(null), [r, g, u] = O(n), [a] = j(), [P, M] = x(null), F = T(null), N = D(
    (o) => {
      if (r && E(k())) {
        o.preventDefault();
        const t = B(n);
        if (W(t))
          return t.remove(), !0;
      }
      return !1;
    },
    [r, n]
  ), R = D(
    (o) => {
      const d = k(), t = b.current;
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
    (o) => F.current === s || b.current === o.target ? (y(null), a.update(() => {
      g(!0);
      const d = a.getRootElement();
      d !== null && d.focus();
    }), !0) : !1,
    [s, a, g]
  );
  ce(() => {
    let o = !0;
    const d = z(
      a.registerUpdateListener(({ editorState: t }) => {
        o && M(t.read(() => k()));
      }),
      a.registerCommand(
        G,
        (t, S) => (F.current = S, !1),
        f
      ),
      a.registerCommand(
        q,
        (t) => {
          const S = t;
          return S.target === C.current ? (S.shiftKey ? g(!r) : (u(), g(!0)), !0) : !1;
        },
        f
      ),
      a.registerCommand(
        Z,
        (t) => t.target === C.current ? (t.preventDefault(), !0) : !1,
        f
      ),
      a.registerCommand(
        Y,
        N,
        f
      ),
      a.registerCommand(
        V,
        N,
        f
      ),
      a.registerCommand(Q, R, f),
      a.registerCommand(
        H,
        _,
        f
      )
    );
    return () => {
      o = !1, d();
    };
  }, [
    u,
    a,
    r,
    n,
    N,
    R,
    _,
    g
  ]);
  const U = r && E(P);
  return /* @__PURE__ */ h(ue, { fallback: null, children: [
    /* @__PURE__ */ h(A, { children: [
      /* @__PURE__ */ h("div", { draggable: U, children: [
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: "image-edit-button",
            ref: b,
            onClick: () => {
              I("Update Inline Image", (o) => /* @__PURE__ */ e(
                ge,
                {
                  activeEditor: a,
                  nodeKey: n,
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
            position: v
          }
        )
      ] }),
      c && /* @__PURE__ */ e("div", { className: "image-caption-container", children: /* @__PURE__ */ h(se, { initialEditor: s, children: [
        /* @__PURE__ */ e(J, {}),
        /* @__PURE__ */ e(X, {}),
        /* @__PURE__ */ e(K, {}),
        /* @__PURE__ */ e(
          ee,
          {
            contentEditable: /* @__PURE__ */ e(ne, { className: "InlineImageNode__contentEditable" }),
            placeholder: /* @__PURE__ */ e(ae, { className: "InlineImageNode__placeholder", children: "Enter a caption..." }),
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
  ve as default
};
