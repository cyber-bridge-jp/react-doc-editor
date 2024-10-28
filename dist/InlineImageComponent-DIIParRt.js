import { w as F, a as B, b as $, y as Y, L as K, j as e, o as U, c as G, F as W, h as z, x as H, P as q, g as J, T as Q, S as V, D as X, B as Z } from "./index-Bgo7UAXJ.js";
import { d as ee } from "./LexicalNestedComposer.prod-Bx6VK7ie.js";
import { $isNodeSelection as S, $getSelection as _, $getNodeByKey as w, $setSelection as O, KEY_ESCAPE_COMMAND as te, COMMAND_PRIORITY_LOW as f, KEY_ENTER_COMMAND as ne, KEY_BACKSPACE_COMMAND as ae, KEY_DELETE_COMMAND as oe, DRAGSTART_COMMAND as se, CLICK_COMMAND as le, SELECTION_CHANGE_COMMAND as re } from "lexical";
import { useRef as b, useState as N, useCallback as D, useEffect as ie, Suspense as ce } from "react";
const P = /* @__PURE__ */ new Set();
function ue(s) {
  if (!P.has(s))
    throw new Promise((m) => {
      const a = new Image();
      a.src = s, a.onload = () => {
        P.add(s), m(null);
      };
    });
}
function de({
  altText: s,
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
      alt: s,
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
  activeEditor: s,
  nodeKey: m,
  onClose: a
}) {
  const r = s.getEditorState().read(
    () => w(m)
  ), [c, i] = N(r.getAltText()), [C, v] = N(r.getShowCaption()), [E, p] = N(r.getPosition()), x = (u) => {
    v(u.target.checked);
  }, l = (u) => {
    p(u.target.value);
  }, g = () => {
    const u = { altText: c, position: E, showCaption: C };
    r && s.update(() => {
      r.update(u);
    }), a();
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("div", { style: { marginBottom: "1em" }, children: /* @__PURE__ */ e.jsx(
      Q,
      {
        label: "Alt Text",
        placeholder: "Descriptive alternative text",
        onChange: i,
        value: c,
        "data-test-id": "image-modal-alt-text-input"
      }
    ) }),
    /* @__PURE__ */ e.jsxs(
      V,
      {
        style: { marginBottom: "1em", width: "208px" },
        value: E,
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
          checked: C,
          onChange: x
        }
      ),
      /* @__PURE__ */ e.jsx("label", { htmlFor: "caption", children: "Show Caption" })
    ] }),
    /* @__PURE__ */ e.jsx(X, { children: /* @__PURE__ */ e.jsx(
      Z,
      {
        "data-test-id": "image-modal-file-upload-btn",
        onClick: () => g(),
        children: "Confirm"
      }
    ) })
  ] });
}
function xe({
  src: s,
  altText: m,
  nodeKey: a,
  width: h,
  height: r,
  showCaption: c,
  caption: i,
  position: C
}) {
  const [v, E] = F(), p = b(null), x = b(null), [l, g, u] = B(a), [n] = $(), [M, k] = N(null), A = b(null), I = D(
    (o) => {
      if (l && S(_())) {
        o.preventDefault();
        const t = w(a);
        if (Y(t))
          return t.remove(), !0;
      }
      return !1;
    },
    [l, a]
  ), T = D(
    (o) => {
      const d = _(), t = x.current;
      if (l && S(d) && d.getNodes().length === 1) {
        if (c)
          return O(null), o.preventDefault(), i.focus(), !0;
        if (t !== null && t !== document.activeElement)
          return o.preventDefault(), t.focus(), !0;
      }
      return !1;
    },
    [i, l, c]
  ), R = D(
    (o) => A.current === i || x.current === o.target ? (O(null), n.update(() => {
      g(!0);
      const d = n.getRootElement();
      d !== null && d.focus();
    }), !0) : !1,
    [i, n, g]
  );
  ie(() => {
    let o = !0;
    const d = K(
      n.registerUpdateListener(({ editorState: t }) => {
        o && k(t.read(() => _()));
      }),
      n.registerCommand(
        re,
        (t, j) => (A.current = j, !1),
        f
      ),
      n.registerCommand(
        le,
        (t) => {
          const j = t;
          return j.target === p.current ? (j.shiftKey ? g(!l) : (u(), g(!0)), !0) : !1;
        },
        f
      ),
      n.registerCommand(
        se,
        (t) => t.target === p.current ? (t.preventDefault(), !0) : !1,
        f
      ),
      n.registerCommand(
        oe,
        I,
        f
      ),
      n.registerCommand(
        ae,
        I,
        f
      ),
      n.registerCommand(ne, T, f),
      n.registerCommand(
        te,
        R,
        f
      )
    );
    return () => {
      o = !1, d();
    };
  }, [
    u,
    n,
    l,
    a,
    I,
    T,
    R,
    g
  ]);
  const L = l && S(M), y = l;
  return /* @__PURE__ */ e.jsxs(ce, { fallback: null, children: [
    /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsxs("div", { draggable: L, children: [
        /* @__PURE__ */ e.jsx(
          "button",
          {
            className: "image-edit-button",
            ref: x,
            onClick: () => {
              E("Update Inline Image", (o) => /* @__PURE__ */ e.jsx(
                me,
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
        /* @__PURE__ */ e.jsx(
          de,
          {
            className: y ? `focused ${S(M) ? "draggable" : ""}` : null,
            src: s,
            altText: m,
            imageRef: p,
            width: h,
            height: r,
            position: C
          }
        )
      ] }),
      c && /* @__PURE__ */ e.jsx("div", { className: "image-caption-container", children: /* @__PURE__ */ e.jsxs(ee, { initialEditor: i, children: [
        /* @__PURE__ */ e.jsx(U, {}),
        /* @__PURE__ */ e.jsx(G, {}),
        /* @__PURE__ */ e.jsx(W, {}),
        /* @__PURE__ */ e.jsx(
          z,
          {
            contentEditable: /* @__PURE__ */ e.jsx(H, { className: "InlineImageNode__contentEditable" }),
            placeholder: /* @__PURE__ */ e.jsx(q, { className: "InlineImageNode__placeholder", children: "Enter a caption..." }),
            ErrorBoundary: J
          }
        )
      ] }) })
    ] }),
    v
  ] });
}
export {
  me as UpdateInlineImageDialog,
  xe as default
};
