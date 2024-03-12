import { t as y, f as B, g as $, v as Y, h as K, j as e, L as U, a as G, F as W, c as z, d as H, P as q, e as J, T as Q, S as V, D as X, B as Z } from "./index-OsErVNU-.js";
import { L as ee } from "./LexicalNestedComposer-DUjfi4tu.js";
import { $isNodeSelection as N, $getSelection as I, $getNodeByKey as O, $setSelection as R, SELECTION_CHANGE_COMMAND as te, COMMAND_PRIORITY_LOW as x, CLICK_COMMAND as ne, DRAGSTART_COMMAND as oe, KEY_DELETE_COMMAND as se, KEY_BACKSPACE_COMMAND as ae, KEY_ENTER_COMMAND as le, KEY_ESCAPE_COMMAND as ie } from "lexical";
import { useRef as L, useState as S, useCallback as b, useEffect as re, Suspense as ce } from "react";
const T = /* @__PURE__ */ new Set();
function ue(a) {
  if (!T.has(a))
    throw new Promise((m) => {
      const o = new Image();
      o.src = a, o.onload = () => {
        T.add(a), m(null);
      };
    });
}
function de({
  altText: a,
  className: m,
  imageRef: o,
  src: f,
  width: i,
  height: c,
  position: r
}) {
  return ue(f), /* @__PURE__ */ e.jsx(
    "img",
    {
      className: m || void 0,
      src: f,
      alt: a,
      ref: o,
      "data-position": r,
      style: {
        display: "block",
        height: c,
        width: i
      },
      draggable: "false"
    }
  );
}
function me({
  activeEditor: a,
  nodeKey: m,
  onClose: o
}) {
  const i = a.getEditorState().read(
    () => O(m)
  ), [c, r] = S(i.getAltText()), [C, _] = S(i.getShowCaption()), [E, p] = S(i.getPosition()), h = (u) => {
    _(u.target.checked);
  }, l = (u) => {
    p(u.target.value);
  }, g = () => {
    const u = { altText: c, position: E, showCaption: C };
    i && a.update(() => {
      i.update(u);
    }), o();
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("div", { style: { marginBottom: "1em" }, children: /* @__PURE__ */ e.jsx(
      Q,
      {
        label: "Alt Text",
        placeholder: "Descriptive alternative text",
        onChange: r,
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
          onChange: h
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
function he({
  src: a,
  altText: m,
  nodeKey: o,
  width: f,
  height: i,
  showCaption: c,
  caption: r,
  position: C
}) {
  const [_, E] = y(), p = L(null), h = L(null), [l, g, u] = B.useLexicalNodeSelection(o), [n] = $.useLexicalComposerContext(), [A, w] = S(null), D = L(null), v = b(
    (s) => {
      if (l && N(I())) {
        s.preventDefault();
        const t = O(o);
        if (Y(t))
          return t.remove(), !0;
      }
      return !1;
    },
    [l, o]
  ), M = b(
    (s) => {
      const d = I(), t = h.current;
      if (l && N(d) && d.getNodes().length === 1) {
        if (c)
          return R(null), s.preventDefault(), r.focus(), !0;
        if (t !== null && t !== document.activeElement)
          return s.preventDefault(), t.focus(), !0;
      }
      return !1;
    },
    [r, l, c]
  ), P = b(
    (s) => D.current === r || h.current === s.target ? (R(null), n.update(() => {
      g(!0);
      const d = n.getRootElement();
      d !== null && d.focus();
    }), !0) : !1,
    [r, n, g]
  );
  re(() => {
    let s = !0;
    const d = K.mergeRegister(
      n.registerUpdateListener(({ editorState: t }) => {
        s && w(t.read(() => I()));
      }),
      n.registerCommand(
        te,
        (t, j) => (D.current = j, !1),
        x
      ),
      n.registerCommand(
        ne,
        (t) => {
          const j = t;
          return j.target === p.current ? (j.shiftKey ? g(!l) : (u(), g(!0)), !0) : !1;
        },
        x
      ),
      n.registerCommand(
        oe,
        (t) => t.target === p.current ? (t.preventDefault(), !0) : !1,
        x
      ),
      n.registerCommand(
        se,
        v,
        x
      ),
      n.registerCommand(
        ae,
        v,
        x
      ),
      n.registerCommand(le, M, x),
      n.registerCommand(
        ie,
        P,
        x
      )
    );
    return () => {
      s = !1, d();
    };
  }, [
    u,
    n,
    l,
    o,
    v,
    M,
    P,
    g
  ]);
  const F = l && N(A), k = l;
  return /* @__PURE__ */ e.jsxs(ce, { fallback: null, children: [
    /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsxs("div", { draggable: F, children: [
        /* @__PURE__ */ e.jsx(
          "button",
          {
            className: "image-edit-button",
            ref: h,
            onClick: () => {
              E("Update Inline Image", (s) => /* @__PURE__ */ e.jsx(
                me,
                {
                  activeEditor: n,
                  nodeKey: o,
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
            className: k ? `focused ${N(A) ? "draggable" : ""}` : null,
            src: a,
            altText: m,
            imageRef: p,
            width: f,
            height: i,
            position: C
          }
        )
      ] }),
      c && /* @__PURE__ */ e.jsx("div", { className: "image-caption-container", children: /* @__PURE__ */ e.jsxs(ee.LexicalNestedComposer, { initialEditor: r, children: [
        /* @__PURE__ */ e.jsx(U.AutoFocusPlugin, {}),
        /* @__PURE__ */ e.jsx(G, {}),
        /* @__PURE__ */ e.jsx(W, {}),
        /* @__PURE__ */ e.jsx(
          z.RichTextPlugin,
          {
            contentEditable: /* @__PURE__ */ e.jsx(H.ContentEditable, { className: "InlineImageNode__contentEditable" }),
            placeholder: /* @__PURE__ */ e.jsx(q, { className: "InlineImageNode__placeholder", children: "Enter a caption..." }),
            ErrorBoundary: J
          }
        )
      ] }) })
    ] }),
    _
  ] });
}
export {
  me as UpdateInlineImageDialog,
  he as default
};
