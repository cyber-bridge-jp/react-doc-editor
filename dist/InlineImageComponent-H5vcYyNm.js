import { H as B, a as F, b as $, N as Y, L as K, j as e, r as U, c as G, O as H, h as W, x as z, P as Q, g as q, Q as J, S as V, R as X, B as Z } from "./index-BjrRzImk.js";
import { d as ee } from "./LexicalNestedComposer.prod-8ZzQRa_M.js";
import { $isNodeSelection as N, $getSelection as _, $getNodeByKey as w, $setSelection as T, KEY_ESCAPE_COMMAND as te, COMMAND_PRIORITY_LOW as f, KEY_ENTER_COMMAND as ne, KEY_BACKSPACE_COMMAND as ae, KEY_DELETE_COMMAND as se, DRAGSTART_COMMAND as oe, CLICK_COMMAND as le, SELECTION_CHANGE_COMMAND as re } from "lexical";
import { useRef as b, useState as S, useCallback as M, useEffect as ie, Suspense as ce } from "react";
const P = /* @__PURE__ */ new Set();
function ue(o) {
  if (!P.has(o))
    throw new Promise((m) => {
      const a = new Image();
      a.src = o, a.onload = () => {
        P.add(o), m(null);
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
    () => w(m)
  ), [c, i] = S(r.getAltText()), [C, v] = S(r.getShowCaption()), [E, p] = S(r.getPosition()), x = (u) => {
    v(u.target.checked);
  }, l = (u) => {
    p(u.target.value);
  }, g = () => {
    const u = { altText: c, position: E, showCaption: C };
    r && o.update(() => {
      r.update(u);
    }), a();
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("div", { style: { marginBottom: "1em" }, children: /* @__PURE__ */ e.jsx(
      J,
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
  src: o,
  altText: m,
  nodeKey: a,
  width: h,
  height: r,
  showCaption: c,
  caption: i,
  position: C
}) {
  const [v, E] = B(), p = b(null), x = b(null), [l, g, u] = F(a), [n] = $(), [A, k] = S(null), D = b(null), I = M(
    (s) => {
      if (l && N(_())) {
        s.preventDefault();
        const t = w(a);
        if (Y(t))
          return t.remove(), !0;
      }
      return !1;
    },
    [l, a]
  ), R = M(
    (s) => {
      const d = _(), t = x.current;
      if (l && N(d) && d.getNodes().length === 1) {
        if (c)
          return T(null), s.preventDefault(), i.focus(), !0;
        if (t !== null && t !== document.activeElement)
          return s.preventDefault(), t.focus(), !0;
      }
      return !1;
    },
    [i, l, c]
  ), O = M(
    (s) => D.current === i || x.current === s.target ? (T(null), n.update(() => {
      g(!0);
      const d = n.getRootElement();
      d !== null && d.focus();
    }), !0) : !1,
    [i, n, g]
  );
  ie(() => {
    let s = !0;
    const d = K(
      n.registerUpdateListener(({ editorState: t }) => {
        s && k(t.read(() => _()));
      }),
      n.registerCommand(
        re,
        (t, j) => (D.current = j, !1),
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
        oe,
        (t) => t.target === p.current ? (t.preventDefault(), !0) : !1,
        f
      ),
      n.registerCommand(
        se,
        I,
        f
      ),
      n.registerCommand(
        ae,
        I,
        f
      ),
      n.registerCommand(ne, R, f),
      n.registerCommand(
        te,
        O,
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
    I,
    R,
    O,
    g
  ]);
  const L = l && N(A), y = l;
  return /* @__PURE__ */ e.jsxs(ce, { fallback: null, children: [
    /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsxs("div", { draggable: L, children: [
        /* @__PURE__ */ e.jsx(
          "button",
          {
            className: "image-edit-button",
            ref: x,
            onClick: () => {
              E("Update Inline Image", (s) => /* @__PURE__ */ e.jsx(
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
            className: y ? `focused ${N(A) ? "draggable" : ""}` : null,
            src: o,
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
        /* @__PURE__ */ e.jsx(H, {}),
        /* @__PURE__ */ e.jsx(
          W,
          {
            contentEditable: /* @__PURE__ */ e.jsx(z, { className: "InlineImageNode__contentEditable" }),
            placeholder: /* @__PURE__ */ e.jsx(Q, { className: "InlineImageNode__placeholder", children: "Enter a caption..." }),
            ErrorBoundary: q
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
