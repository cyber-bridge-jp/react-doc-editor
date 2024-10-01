import { v as b, f as $, g as w, h as t, w as Y, i as y, j as e, L as F, a as k, F as B, c as W, d as K, P as U, e as G, T as z, S as H, D as q, B as J } from "./index-CP_DG8xS.js";
import { L as Q } from "./LexicalNestedComposer-fyOUBMoC.js";
import { useRef as M, useState as _, useCallback as O, useEffect as V, Suspense as X } from "react";
const D = /* @__PURE__ */ new Set();
function Z(l) {
  if (!D.has(l))
    throw new Promise((g) => {
      const s = new Image();
      s.src = l, s.onload = () => {
        D.add(l), g(null);
      };
    });
}
function ee({
  altText: l,
  className: g,
  imageRef: s,
  src: f,
  width: r,
  height: u,
  position: c
}) {
  return Z(f), /* @__PURE__ */ e.jsx(
    "img",
    {
      className: g || void 0,
      src: f,
      alt: l,
      ref: s,
      "data-position": c,
      style: {
        display: "block",
        height: u,
        width: r
      },
      draggable: "false"
    }
  );
}
function te({
  activeEditor: l,
  nodeKey: g,
  onClose: s
}) {
  const r = l.getEditorState().read(
    () => t.$getNodeByKey(g)
  ), [u, c] = _(r.getAltText()), [h, I] = _(r.getShowCaption()), [E, p] = _(r.getPosition()), C = (d) => {
    I(d.target.checked);
  }, i = (d) => {
    p(d.target.value);
  }, x = () => {
    const d = { altText: u, position: E, showCaption: h };
    r && l.update(() => {
      r.update(d);
    }), s();
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("div", { style: { marginBottom: "1em" }, children: /* @__PURE__ */ e.jsx(
      z,
      {
        label: "Alt Text",
        placeholder: "Descriptive alternative text",
        onChange: c,
        value: u,
        "data-test-id": "image-modal-alt-text-input"
      }
    ) }),
    /* @__PURE__ */ e.jsxs(
      H,
      {
        style: { marginBottom: "1em", width: "208px" },
        value: E,
        label: "Position",
        name: "position",
        id: "position-select",
        onChange: i,
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
          checked: h,
          onChange: C
        }
      ),
      /* @__PURE__ */ e.jsx("label", { htmlFor: "caption", children: "Show Caption" })
    ] }),
    /* @__PURE__ */ e.jsx(q, { children: /* @__PURE__ */ e.jsx(
      J,
      {
        "data-test-id": "image-modal-file-upload-btn",
        onClick: () => x(),
        children: "Confirm"
      }
    ) })
  ] });
}
function ae({
  src: l,
  altText: g,
  nodeKey: s,
  width: f,
  height: r,
  showCaption: u,
  caption: c,
  position: h
}) {
  const [I, E] = b(), p = M(null), C = M(null), [i, x, d] = $.useLexicalNodeSelection(s), [o] = w.useLexicalComposerContext(), [j, v] = _(null), L = M(null), S = O(
    (a) => {
      if (i && t.$isNodeSelection(t.$getSelection())) {
        a.preventDefault();
        const n = t.$getNodeByKey(s);
        if (Y(n))
          return n.remove(), !0;
      }
      return !1;
    },
    [i, s]
  ), R = O(
    (a) => {
      const m = t.$getSelection(), n = C.current;
      if (i && t.$isNodeSelection(m) && m.getNodes().length === 1) {
        if (u)
          return t.$setSelection(null), a.preventDefault(), c.focus(), !0;
        if (n !== null && n !== document.activeElement)
          return a.preventDefault(), n.focus(), !0;
      }
      return !1;
    },
    [c, i, u]
  ), A = O(
    (a) => L.current === c || C.current === a.target ? (t.$setSelection(null), o.update(() => {
      x(!0);
      const m = o.getRootElement();
      m !== null && m.focus();
    }), !0) : !1,
    [c, o, x]
  );
  V(() => {
    let a = !0;
    const m = y.mergeRegister(
      o.registerUpdateListener(({ editorState: n }) => {
        a && v(n.read(() => t.$getSelection()));
      }),
      o.registerCommand(
        t.SELECTION_CHANGE_COMMAND,
        (n, N) => (L.current = N, !1),
        t.COMMAND_PRIORITY_LOW
      ),
      o.registerCommand(
        t.CLICK_COMMAND,
        (n) => {
          const N = n;
          return N.target === p.current ? (N.shiftKey ? x(!i) : (d(), x(!0)), !0) : !1;
        },
        t.COMMAND_PRIORITY_LOW
      ),
      o.registerCommand(
        t.DRAGSTART_COMMAND,
        (n) => n.target === p.current ? (n.preventDefault(), !0) : !1,
        t.COMMAND_PRIORITY_LOW
      ),
      o.registerCommand(
        t.KEY_DELETE_COMMAND,
        S,
        t.COMMAND_PRIORITY_LOW
      ),
      o.registerCommand(
        t.KEY_BACKSPACE_COMMAND,
        S,
        t.COMMAND_PRIORITY_LOW
      ),
      o.registerCommand(t.KEY_ENTER_COMMAND, R, t.COMMAND_PRIORITY_LOW),
      o.registerCommand(
        t.KEY_ESCAPE_COMMAND,
        A,
        t.COMMAND_PRIORITY_LOW
      )
    );
    return () => {
      a = !1, m();
    };
  }, [
    d,
    o,
    i,
    s,
    S,
    R,
    A,
    x
  ]);
  const P = i && t.$isNodeSelection(j), T = i;
  return /* @__PURE__ */ e.jsxs(X, { fallback: null, children: [
    /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsxs("div", { draggable: P, children: [
        /* @__PURE__ */ e.jsx(
          "button",
          {
            className: "image-edit-button",
            ref: C,
            onClick: () => {
              E("Update Inline Image", (a) => /* @__PURE__ */ e.jsx(
                te,
                {
                  activeEditor: o,
                  nodeKey: s,
                  onClose: a
                }
              ));
            },
            children: "Edit"
          }
        ),
        /* @__PURE__ */ e.jsx(
          ee,
          {
            className: T ? `focused ${t.$isNodeSelection(j) ? "draggable" : ""}` : null,
            src: l,
            altText: g,
            imageRef: p,
            width: f,
            height: r,
            position: h
          }
        )
      ] }),
      u && /* @__PURE__ */ e.jsx("div", { className: "image-caption-container", children: /* @__PURE__ */ e.jsxs(Q.LexicalNestedComposer, { initialEditor: c, children: [
        /* @__PURE__ */ e.jsx(F.AutoFocusPlugin, {}),
        /* @__PURE__ */ e.jsx(k, {}),
        /* @__PURE__ */ e.jsx(B, {}),
        /* @__PURE__ */ e.jsx(
          W.RichTextPlugin,
          {
            contentEditable: /* @__PURE__ */ e.jsx(K.ContentEditable, { className: "InlineImageNode__contentEditable" }),
            placeholder: /* @__PURE__ */ e.jsx(U, { className: "InlineImageNode__placeholder", children: "Enter a caption..." }),
            ErrorBoundary: G
          }
        )
      ] }) })
    ] }),
    I
  ] });
}
export {
  te as UpdateInlineImageDialog,
  ae as default
};
