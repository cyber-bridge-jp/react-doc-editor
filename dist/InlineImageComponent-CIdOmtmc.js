import { jsxs as h, Fragment as M, jsx as e } from "react/jsx-runtime";
import { H as $, J as O, K as j, M as E, O as k, Q as A, $ as W, U as y, V as z, W as H, Y as f, Z as J, a0 as Q, a1 as V, a2 as Y, a3 as Z, a4 as q, a5 as G, a6 as X, a7 as K, a8 as ee, a9 as te, aa as ne, ab as ae, ac as oe, ad as le, ae as re } from "./index-Dm-mzxEZ.js";
import { o as ie } from "./LexicalAutoFocusPlugin.prod-CYkGdNe6.js";
import { d as se } from "./LexicalNestedComposer.prod-BbnOQMK_.js";
import { useRef as T, useState as x, useCallback as D, useEffect as ce, Suspense as ue } from "react";
const L = /* @__PURE__ */ new Set();
function de(l) {
  if (!L.has(l))
    throw new Promise((m) => {
      const a = new Image();
      a.src = l, a.onload = () => {
        L.add(l), m(null);
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
    () => A(m)
  ), [c, s] = x(i.getAltText()), [v, w] = x(i.getShowCaption()), [I, C] = x(i.getPosition()), b = (u) => {
    w(u.target.checked);
  }, r = (u) => {
    C(u.target.value);
  }, g = () => {
    const u = { altText: c, position: I, showCaption: v };
    i && l.update(() => {
      i.update(u);
    }), a();
  };
  return /* @__PURE__ */ h(M, { children: [
    /* @__PURE__ */ e("div", { style: { marginBottom: "1em" }, children: /* @__PURE__ */ e(
      ae,
      {
        label: "Alt Text",
        placeholder: "Descriptive alternative text",
        onChange: s,
        value: c,
        "data-test-id": "image-modal-alt-text-input"
      }
    ) }),
    /* @__PURE__ */ h(
      oe,
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
    /* @__PURE__ */ e(le, { children: /* @__PURE__ */ e(
      re,
      {
        "data-test-id": "image-modal-file-upload-btn",
        onClick: () => g(),
        children: "Confirm"
      }
    ) })
  ] });
}
function Ie({
  src: l,
  altText: m,
  nodeKey: a,
  width: p,
  height: i,
  showCaption: c,
  caption: s,
  position: v
}) {
  const [w, I] = $(), C = T(null), b = T(null), [r, g, u] = O(a), [n] = j(), [P, B] = x(null), F = T(null), N = D(
    (o) => {
      if (r && E(k())) {
        o.preventDefault();
        const t = A(a);
        if (W(t))
          return t.remove(), !0;
      }
      return !1;
    },
    [r, a]
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
    (o) => F.current === s || b.current === o.target ? (y(null), n.update(() => {
      g(!0);
      const d = n.getRootElement();
      d !== null && d.focus();
    }), !0) : !1,
    [s, n, g]
  );
  ce(() => {
    let o = !0;
    const d = z(
      n.registerUpdateListener(({ editorState: t }) => {
        o && B(t.read(() => k()));
      }),
      n.registerCommand(
        q,
        (t, S) => (F.current = S, !1),
        f
      ),
      n.registerCommand(
        Z,
        (t) => {
          const S = t;
          return S.target === C.current ? (S.shiftKey ? g(!r) : (u(), g(!0)), !0) : !1;
        },
        f
      ),
      n.registerCommand(
        Y,
        (t) => t.target === C.current ? (t.preventDefault(), !0) : !1,
        f
      ),
      n.registerCommand(
        V,
        N,
        f
      ),
      n.registerCommand(
        Q,
        N,
        f
      ),
      n.registerCommand(J, R, f),
      n.registerCommand(
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
    n,
    r,
    a,
    N,
    R,
    _,
    g
  ]);
  const U = r && E(P);
  return /* @__PURE__ */ h(ue, { fallback: null, children: [
    /* @__PURE__ */ h(M, { children: [
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
            position: v
          }
        )
      ] }),
      c && /* @__PURE__ */ e("div", { className: "image-caption-container", children: /* @__PURE__ */ h(se, { initialEditor: s, children: [
        /* @__PURE__ */ e(ie, {}),
        /* @__PURE__ */ e(G, {}),
        /* @__PURE__ */ e(X, {}),
        /* @__PURE__ */ e(
          K,
          {
            contentEditable: /* @__PURE__ */ e(ne, { className: "InlineImageNode__contentEditable" }),
            placeholder: /* @__PURE__ */ e(te, { className: "InlineImageNode__placeholder", children: "Enter a caption..." }),
            ErrorBoundary: ee
          }
        )
      ] }) })
    ] }),
    w
  ] });
}
export {
  ge as UpdateInlineImageDialog,
  Ie as default
};
