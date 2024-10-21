import { h as le, i as ue, $ as h, k as ge, u as de, j as i, L as fe, a as me, b as pe, c as xe, d as Ee, e as Ce, f as he, P as Le, g as Re } from "./index-C8lGVrIl.js";
import { L as _e } from "./LexicalHashtagPlugin-B08pFRpW.js";
import { L as Ne } from "./LexicalNestedComposer-CzYTX5vH.js";
import { $isNodeSelection as L, $getSelection as T, $getNodeByKey as R, $setSelection as Q, SELECTION_CHANGE_COMMAND as je, COMMAND_PRIORITY_LOW as m, CLICK_COMMAND as ve, KEY_DELETE_COMMAND as Se, KEY_BACKSPACE_COMMAND as Me, KEY_ENTER_COMMAND as Ie, KEY_ESCAPE_COMMAND as De, createCommand as Pe } from "lexical";
import { useRef as _, useState as O, useEffect as z, useCallback as N, Suspense as ye } from "react";
import { I as be } from "./ImageResizer-BfDTIKJp.js";
const V = /* @__PURE__ */ new Set(), ke = Pe("RIGHT_CLICK_IMAGE_COMMAND");
function $(c, l) {
  const r = c.style;
  r.top = l.y + "px", r.left = l.x + "px";
}
function Ae(c) {
  if (!V.has(c))
    throw new Promise((l) => {
      const r = new Image();
      r.src = c, r.onload = () => {
        V.add(c), l(null);
      };
    });
}
function He({
  altText: c,
  className: l,
  imageRef: r,
  src: j,
  width: P,
  height: v,
  maxWidth: y
}) {
  return Ae(j), /* @__PURE__ */ i.jsx(
    "img",
    {
      className: l || void 0,
      src: j,
      alt: c,
      ref: r,
      style: {
        height: v,
        maxWidth: y,
        width: P
      },
      draggable: "false"
    }
  );
}
function Ge({
  src: c,
  altText: l,
  nodeKey: r,
  width: j,
  height: P,
  maxWidth: v,
  resizable: y,
  showCaption: p,
  caption: E,
  captionsEnabled: Z,
  isAbsolute: g,
  xOffset: S,
  yOffset: M
}) {
  const I = _(null), b = _(null), x = _(null), [a, u, D] = le.useLexicalNodeSelection(r), [C, B] = O(!1), [s] = ue.useLexicalComposerContext(), [k, ee] = O(null), G = _(null), [K, X] = O(!1), d = _({
    isDragging: !1,
    offsetX: 0,
    offsetY: 0,
    rootElementRect: null,
    x: 0,
    y: 0
  });
  z(() => {
    const t = d.current;
    t.x = S, t.y = M;
    const e = x.current;
    e !== null && $(e, t);
  }, [S, M]), z(() => {
    if (g) {
      const t = d.current;
      t.x = S, t.y = M;
      const e = x.current;
      e !== null && $(e, t);
    }
  }, [S, M, g]);
  const A = N(
    (t) => {
      if (a && L(T())) {
        t.preventDefault();
        const n = R(r);
        if (h(n))
          return n.remove(), !0;
      }
      return !1;
    },
    [a, r]
  ), w = N(
    (t) => {
      const e = T(), n = b.current;
      if (a && L(e) && e.getNodes().length === 1) {
        if (p)
          return Q(null), t.preventDefault(), E.focus(), !0;
        if (n !== null && n !== document.activeElement)
          return t.preventDefault(), n.focus(), !0;
      }
      return !1;
    },
    [E, a, p]
  ), F = N(
    (t) => G.current === E || b.current === t.target ? (Q(null), s.update(() => {
      u(!0);
      const e = s.getRootElement();
      e !== null && e.focus();
    }), !0) : !1,
    [E, s, u]
  ), H = N(
    (t) => {
      const e = t;
      return K && X(!1), C ? !0 : e.target === I.current ? (e.shiftKey ? u(!a) : (D(), u(!0)), !0) : !1;
    },
    [C, a, u, D]
  ), Y = N(
    (t) => {
      s.getEditorState().read(() => {
        t.target.tagName === "IMG" && t.target === I.current && s.isEditable() && (t.preventDefault(), t.shiftKey ? u(!a) : (D(), u(!0), X(!0)));
      });
    },
    [s]
  ), U = (t) => {
    const e = x.current, n = d.current, o = s.getRootElement();
    e && d.current.isDragging && t.target === e.firstChild && (d.current.isDragging = !1, t.preventDefault(), e.classList.remove("dragging"), s.update(() => {
      const f = R(r);
      h(f) && f.setPosition(n.x, n.y);
    })), o == null || o.removeEventListener("pointermove", W), o == null || o.removeEventListener("pointerup", U);
  }, W = (t) => {
    const e = x.current, n = d.current, o = n.rootElementRect;
    e !== null && n.isDragging && o !== null && (n.x = t.pageX - n.offsetX - o.left, n.y = t.pageY - n.offsetY - o.top, $(e, n));
  }, te = (t) => {
    var f;
    const e = x.current, n = d.current, o = s.getRootElement();
    if (e !== null && t.button !== 2 && g && t.target === (e == null ? void 0 : e.firstChild) && s.isEditable() && (n.rootElementRect = ((f = e.parentElement) == null ? void 0 : f.getBoundingClientRect()) || null, n.rootElementRect !== null)) {
      const { top: ae, left: ce } = e.getBoundingClientRect();
      n.isDragging = !0, n.offsetX = t.pageX - ce, n.offsetY = t.pageY - ae, e.classList.add("dragging"), o == null || o.addEventListener("pointermove", W), o == null || o.addEventListener("pointerup", U);
    }
  };
  z(() => {
    let t = !0;
    const e = s.getRootElement(), n = ge.mergeRegister(
      s.registerUpdateListener(({ editorState: o }) => {
        t && ee(o.read(() => T()));
      }),
      s.registerCommand(
        je,
        (o, f) => (G.current = f, !1),
        m
      ),
      s.registerCommand(
        ve,
        H,
        m
      ),
      s.registerCommand(
        ke,
        H,
        m
      ),
      s.registerCommand(
        Se,
        A,
        m
      ),
      s.registerCommand(
        Me,
        A,
        m
      ),
      s.registerCommand(Ie, w, m),
      s.registerCommand(
        De,
        F,
        m
      )
    );
    return e == null || e.addEventListener("contextmenu", Y), () => {
      t = !1, n(), e == null || e.removeEventListener("contextmenu", Y);
    };
  }, [
    D,
    s,
    C,
    a,
    r,
    A,
    w,
    F,
    H,
    Y,
    u
  ]);
  const q = (t = !0) => {
    s.update(() => {
      const e = R(r);
      h(e) && e.setShowCaption(t);
    });
  }, ne = (t, e) => {
    setTimeout(() => {
      B(!1);
    }, 200), s.update(() => {
      const n = R(r);
      h(n) && n.setWidthAndHeight(t, e);
    });
  }, se = (t) => {
    s.update(() => {
      const e = R(r);
      h(e) && e.setAbsolute(t.target.checked);
    });
  }, ie = () => {
    B(!0);
  }, { historyState: oe } = de(), re = a && L(k) && !C, J = a || C;
  return /* @__PURE__ */ i.jsx(ye, { fallback: null, children: /* @__PURE__ */ i.jsx(i.Fragment, { children: /* @__PURE__ */ i.jsxs(
    "div",
    {
      ref: x,
      draggable: !g && re,
      style: {
        position: g ? "absolute" : "initial",
        zIndex: g ? 1 : 0
      },
      onPointerDown: te,
      children: [
        /* @__PURE__ */ i.jsx(
          He,
          {
            className: J ? `focused ${L(k) ? "draggable" : ""}` : "",
            src: c,
            altText: l,
            imageRef: I,
            width: j,
            height: P,
            maxWidth: v
          }
        ),
        p && /* @__PURE__ */ i.jsx("div", { className: "image-caption-container", children: /* @__PURE__ */ i.jsxs(Ne.LexicalNestedComposer, { initialEditor: E, children: [
          /* @__PURE__ */ i.jsx(fe.AutoFocusPlugin, {}),
          /* @__PURE__ */ i.jsx(me, {}),
          /* @__PURE__ */ i.jsx(pe, {}),
          /* @__PURE__ */ i.jsx(_e.HashtagPlugin, {}),
          /* @__PURE__ */ i.jsx(xe, {}),
          /* @__PURE__ */ i.jsx(Ee.HistoryPlugin, { externalHistoryState: oe }),
          /* @__PURE__ */ i.jsx(
            Ce.RichTextPlugin,
            {
              contentEditable: /* @__PURE__ */ i.jsx(he.ContentEditable, { className: "ImageNode__contentEditable" }),
              placeholder: /* @__PURE__ */ i.jsx(Le, { className: "ImageNode__placeholder", children: "Enter a caption..." }),
              ErrorBoundary: Re
            }
          )
        ] }) }),
        K && /* @__PURE__ */ i.jsxs("div", { className: "image-context-menu", children: [
          /* @__PURE__ */ i.jsx("div", { children: /* @__PURE__ */ i.jsxs("label", { children: [
            /* @__PURE__ */ i.jsx(
              "input",
              {
                type: "checkbox",
                checked: g,
                onChange: se
              }
            ),
            "Absolute"
          ] }) }),
          /* @__PURE__ */ i.jsx("div", { children: /* @__PURE__ */ i.jsxs("label", { children: [
            /* @__PURE__ */ i.jsx(
              "input",
              {
                type: "checkbox",
                checked: p,
                onChange: () => q(!p)
              }
            ),
            "Show caption"
          ] }) })
        ] }),
        y && L(k) && J && s.isEditable() && /* @__PURE__ */ i.jsx(
          be,
          {
            showCaption: p,
            setShowCaption: q,
            editor: s,
            buttonRef: b,
            imageRef: I,
            maxWidth: v,
            onResizeStart: ie,
            onResizeEnd: ne,
            captionsEnabled: Z
          }
        )
      ]
    }
  ) }) });
}
export {
  ke as RIGHT_CLICK_IMAGE_COMMAND,
  Ge as default
};
