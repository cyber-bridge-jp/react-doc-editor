import { w as j, x as F, y as P, r as U, z as W, A as X, C as G, G as te, H as ne, g as re, u as ie, j as T, b as oe, I as ae, P as se, e as le, J as x } from "./index-Bb4kPwGF.js";
import { L as ce } from "./LexicalNestedComposer-c9_rjILw.js";
import z, { useLayoutEffect as ue, useEffect as w, useRef as b } from "react";
import V from "react-dom";
import J, { $getNodeByKey as N } from "lexical";
var $ = {}, L = {}, k;
function fe() {
  if (k) return L;
  k = 1;
  var R = j(), g = F(), a = P(), e = J;
  const u = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", f = u && "documentMode" in document ? document.documentMode : null, C = u && "InputEvent" in window && !f ? "getTargetRanges" in new window.InputEvent("input") : !1, E = u && /Version\/[\d.]+.*Safari/.test(navigator.userAgent), _ = u && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, O = u && /^(?=.*Chrome).*/i.test(navigator.userAgent), D = u && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !O;
  function m(t, r) {
    r.update(() => {
      if (t !== null) {
        const n = t instanceof KeyboardEvent ? null : t.clipboardData, o = e.$getSelection();
        if (o !== null && n != null) {
          t.preventDefault();
          const l = R.$getHtmlContent(r);
          l !== null && n.setData("text/html", l), n.setData("text/plain", o.getTextContent());
        }
      }
    });
  }
  function M(t, r) {
    t.preventDefault(), r.update(() => {
      const n = e.$getSelection(), {
        clipboardData: o
      } = t;
      o != null && e.$isRangeSelection(n) && R.$insertDataTransferForPlainText(o, n);
    }, {
      tag: "paste"
    });
  }
  function s(t, r) {
    m(t, r), r.update(() => {
      const n = e.$getSelection();
      e.$isRangeSelection(n) && n.removeText();
    });
  }
  function i(t) {
    return a.mergeRegister(t.registerCommand(e.DELETE_CHARACTER_COMMAND, (n) => {
      const o = e.$getSelection();
      return e.$isRangeSelection(o) ? (o.deleteCharacter(n), !0) : !1;
    }, e.COMMAND_PRIORITY_EDITOR), t.registerCommand(e.DELETE_WORD_COMMAND, (n) => {
      const o = e.$getSelection();
      return e.$isRangeSelection(o) ? (o.deleteWord(n), !0) : !1;
    }, e.COMMAND_PRIORITY_EDITOR), t.registerCommand(e.DELETE_LINE_COMMAND, (n) => {
      const o = e.$getSelection();
      return e.$isRangeSelection(o) ? (o.deleteLine(n), !0) : !1;
    }, e.COMMAND_PRIORITY_EDITOR), t.registerCommand(e.CONTROLLED_TEXT_INSERTION_COMMAND, (n) => {
      const o = e.$getSelection();
      if (!e.$isRangeSelection(o))
        return !1;
      if (typeof n == "string")
        o.insertText(n);
      else {
        const l = n.dataTransfer;
        if (l != null)
          R.$insertDataTransferForPlainText(l, o);
        else {
          const c = n.data;
          c && o.insertText(c);
        }
      }
      return !0;
    }, e.COMMAND_PRIORITY_EDITOR), t.registerCommand(e.REMOVE_TEXT_COMMAND, () => {
      const n = e.$getSelection();
      return e.$isRangeSelection(n) ? (n.removeText(), !0) : !1;
    }, e.COMMAND_PRIORITY_EDITOR), t.registerCommand(e.INSERT_LINE_BREAK_COMMAND, (n) => {
      const o = e.$getSelection();
      return e.$isRangeSelection(o) ? (o.insertLineBreak(n), !0) : !1;
    }, e.COMMAND_PRIORITY_EDITOR), t.registerCommand(e.INSERT_PARAGRAPH_COMMAND, () => {
      const n = e.$getSelection();
      return e.$isRangeSelection(n) ? (n.insertLineBreak(), !0) : !1;
    }, e.COMMAND_PRIORITY_EDITOR), t.registerCommand(e.KEY_ARROW_LEFT_COMMAND, (n) => {
      const o = e.$getSelection();
      if (!e.$isRangeSelection(o))
        return !1;
      const l = n, c = l.shiftKey;
      return g.$shouldOverrideDefaultCharacterSelection(o, !0) ? (l.preventDefault(), g.$moveCharacter(o, c, !0), !0) : !1;
    }, e.COMMAND_PRIORITY_EDITOR), t.registerCommand(e.KEY_ARROW_RIGHT_COMMAND, (n) => {
      const o = e.$getSelection();
      if (!e.$isRangeSelection(o))
        return !1;
      const l = n, c = l.shiftKey;
      return g.$shouldOverrideDefaultCharacterSelection(o, !1) ? (l.preventDefault(), g.$moveCharacter(o, c, !1), !0) : !1;
    }, e.COMMAND_PRIORITY_EDITOR), t.registerCommand(e.KEY_BACKSPACE_COMMAND, (n) => {
      const o = e.$getSelection();
      return e.$isRangeSelection(o) ? (n.preventDefault(), t.dispatchCommand(e.DELETE_CHARACTER_COMMAND, !0)) : !1;
    }, e.COMMAND_PRIORITY_EDITOR), t.registerCommand(e.KEY_DELETE_COMMAND, (n) => {
      const o = e.$getSelection();
      return e.$isRangeSelection(o) ? (n.preventDefault(), t.dispatchCommand(e.DELETE_CHARACTER_COMMAND, !1)) : !1;
    }, e.COMMAND_PRIORITY_EDITOR), t.registerCommand(e.KEY_ENTER_COMMAND, (n) => {
      const o = e.$getSelection();
      if (!e.$isRangeSelection(o))
        return !1;
      if (n !== null) {
        if ((_ || E || D) && C)
          return !1;
        n.preventDefault();
      }
      return t.dispatchCommand(e.INSERT_LINE_BREAK_COMMAND, !1);
    }, e.COMMAND_PRIORITY_EDITOR), t.registerCommand(e.SELECT_ALL_COMMAND, () => (e.$selectAll(), !0), e.COMMAND_PRIORITY_EDITOR), t.registerCommand(e.COPY_COMMAND, (n) => {
      const o = e.$getSelection();
      return e.$isRangeSelection(o) ? (m(n, t), !0) : !1;
    }, e.COMMAND_PRIORITY_EDITOR), t.registerCommand(e.CUT_COMMAND, (n) => {
      const o = e.$getSelection();
      return e.$isRangeSelection(o) ? (s(n, t), !0) : !1;
    }, e.COMMAND_PRIORITY_EDITOR), t.registerCommand(e.PASTE_COMMAND, (n) => {
      const o = e.$getSelection();
      return e.$isRangeSelection(o) ? (M(n, t), !0) : !1;
    }, e.COMMAND_PRIORITY_EDITOR), t.registerCommand(e.DROP_COMMAND, (n) => {
      const o = e.$getSelection();
      return e.$isRangeSelection(o) ? (n.preventDefault(), !0) : !1;
    }, e.COMMAND_PRIORITY_EDITOR), t.registerCommand(e.DRAGSTART_COMMAND, (n) => {
      const o = e.$getSelection();
      return e.$isRangeSelection(o) ? (n.preventDefault(), !0) : !1;
    }, e.COMMAND_PRIORITY_EDITOR));
  }
  return L.registerPlainText = i, L;
}
var h = {}, K;
function ge() {
  if (K) return h;
  K = 1;
  var R = j(), g = F(), a = P(), e = J;
  let u = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", f = u && "documentMode" in document ? document.documentMode : null, C = u && "InputEvent" in window && !f ? "getTargetRanges" in new window.InputEvent("input") : !1, E = u && /Version\/[\d.]+.*Safari/.test(navigator.userAgent), _ = u && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, O = u && /^(?=.*Chrome).*/i.test(navigator.userAgent), D = u && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !O;
  function m(i, t) {
    t.update(() => {
      if (i !== null) {
        let r = i instanceof KeyboardEvent ? null : i.clipboardData, n = e.$getSelection();
        if (n !== null && r != null) {
          i.preventDefault();
          let o = R.$getHtmlContent(t);
          o !== null && r.setData("text/html", o), r.setData("text/plain", n.getTextContent());
        }
      }
    });
  }
  function M(i, t) {
    i.preventDefault(), t.update(() => {
      let r = e.$getSelection(), { clipboardData: n } = i;
      n != null && e.$isRangeSelection(r) && R.$insertDataTransferForPlainText(n, r);
    }, { tag: "paste" });
  }
  function s(i, t) {
    m(i, t), t.update(() => {
      let r = e.$getSelection();
      e.$isRangeSelection(r) && r.removeText();
    });
  }
  return h.registerPlainText = function(i) {
    return a.mergeRegister(
      i.registerCommand(e.DELETE_CHARACTER_COMMAND, (t) => {
        const r = e.$getSelection();
        return e.$isRangeSelection(r) ? (r.deleteCharacter(t), !0) : !1;
      }, e.COMMAND_PRIORITY_EDITOR),
      i.registerCommand(e.DELETE_WORD_COMMAND, (t) => {
        const r = e.$getSelection();
        return e.$isRangeSelection(r) ? (r.deleteWord(t), !0) : !1;
      }, e.COMMAND_PRIORITY_EDITOR),
      i.registerCommand(e.DELETE_LINE_COMMAND, (t) => {
        const r = e.$getSelection();
        return e.$isRangeSelection(r) ? (r.deleteLine(t), !0) : !1;
      }, e.COMMAND_PRIORITY_EDITOR),
      i.registerCommand(e.CONTROLLED_TEXT_INSERTION_COMMAND, (t) => {
        const r = e.$getSelection();
        if (!e.$isRangeSelection(r)) return !1;
        if (typeof t == "string") r.insertText(t);
        else {
          const n = t.dataTransfer;
          n != null ? R.$insertDataTransferForPlainText(n, r) : (t = t.data) && r.insertText(t);
        }
        return !0;
      }, e.COMMAND_PRIORITY_EDITOR),
      i.registerCommand(e.REMOVE_TEXT_COMMAND, () => {
        const t = e.$getSelection();
        return e.$isRangeSelection(t) ? (t.removeText(), !0) : !1;
      }, e.COMMAND_PRIORITY_EDITOR),
      i.registerCommand(
        e.INSERT_LINE_BREAK_COMMAND,
        (t) => {
          const r = e.$getSelection();
          return e.$isRangeSelection(r) ? (r.insertLineBreak(t), !0) : !1;
        },
        e.COMMAND_PRIORITY_EDITOR
      ),
      i.registerCommand(e.INSERT_PARAGRAPH_COMMAND, () => {
        const t = e.$getSelection();
        return e.$isRangeSelection(t) ? (t.insertLineBreak(), !0) : !1;
      }, e.COMMAND_PRIORITY_EDITOR),
      i.registerCommand(e.KEY_ARROW_LEFT_COMMAND, (t) => {
        const r = e.$getSelection();
        if (!e.$isRangeSelection(r)) return !1;
        const n = t.shiftKey;
        return g.$shouldOverrideDefaultCharacterSelection(r, !0) ? (t.preventDefault(), g.$moveCharacter(
          r,
          n,
          !0
        ), !0) : !1;
      }, e.COMMAND_PRIORITY_EDITOR),
      i.registerCommand(e.KEY_ARROW_RIGHT_COMMAND, (t) => {
        const r = e.$getSelection();
        if (!e.$isRangeSelection(r)) return !1;
        const n = t.shiftKey;
        return g.$shouldOverrideDefaultCharacterSelection(r, !1) ? (t.preventDefault(), g.$moveCharacter(r, n, !1), !0) : !1;
      }, e.COMMAND_PRIORITY_EDITOR),
      i.registerCommand(e.KEY_BACKSPACE_COMMAND, (t) => {
        const r = e.$getSelection();
        return e.$isRangeSelection(r) ? (t.preventDefault(), i.dispatchCommand(e.DELETE_CHARACTER_COMMAND, !0)) : !1;
      }, e.COMMAND_PRIORITY_EDITOR),
      i.registerCommand(e.KEY_DELETE_COMMAND, (t) => {
        const r = e.$getSelection();
        return e.$isRangeSelection(r) ? (t.preventDefault(), i.dispatchCommand(e.DELETE_CHARACTER_COMMAND, !1)) : !1;
      }, e.COMMAND_PRIORITY_EDITOR),
      i.registerCommand(e.KEY_ENTER_COMMAND, (t) => {
        const r = e.$getSelection();
        if (!e.$isRangeSelection(r)) return !1;
        if (t !== null) {
          if ((_ || E || D) && C) return !1;
          t.preventDefault();
        }
        return i.dispatchCommand(e.INSERT_LINE_BREAK_COMMAND, !1);
      }, e.COMMAND_PRIORITY_EDITOR),
      i.registerCommand(e.SELECT_ALL_COMMAND, () => (e.$selectAll(), !0), e.COMMAND_PRIORITY_EDITOR),
      i.registerCommand(e.COPY_COMMAND, (t) => {
        const r = e.$getSelection();
        return e.$isRangeSelection(r) ? (m(t, i), !0) : !1;
      }, e.COMMAND_PRIORITY_EDITOR),
      i.registerCommand(e.CUT_COMMAND, (t) => {
        const r = e.$getSelection();
        return e.$isRangeSelection(r) ? (s(t, i), !0) : !1;
      }, e.COMMAND_PRIORITY_EDITOR),
      i.registerCommand(e.PASTE_COMMAND, (t) => {
        const r = e.$getSelection();
        return e.$isRangeSelection(r) ? (M(t, i), !0) : !1;
      }, e.COMMAND_PRIORITY_EDITOR),
      i.registerCommand(e.DROP_COMMAND, (t) => {
        const r = e.$getSelection();
        return e.$isRangeSelection(r) ? (t.preventDefault(), !0) : !1;
      }, e.COMMAND_PRIORITY_EDITOR),
      i.registerCommand(e.DRAGSTART_COMMAND, (t) => {
        const r = e.$getSelection();
        return e.$isRangeSelection(r) ? (t.preventDefault(), !0) : !1;
      }, e.COMMAND_PRIORITY_EDITOR)
    );
  }, h;
}
var v, B;
function Q() {
  return B || (B = 1, v = process.env.NODE_ENV === "development" ? fe() : ge()), v;
}
var q;
function Re() {
  if (q) return $;
  q = 1;
  var R = U(), g = W(), a = z, e = X(), u = P(), f = V, C = G(), E = Q(), D = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? a.useLayoutEffect : a.useEffect;
  function m(n) {
    return n.getEditorState().read(e.$canShowPlaceholderCurry(n.isComposing()));
  }
  function M(n) {
    const [o, l] = a.useState(() => m(n));
    return D(() => {
      function c() {
        const d = m(n);
        l(d);
      }
      return c(), u.mergeRegister(n.registerUpdateListener(() => {
        c();
      }), n.registerEditableListener(() => {
        c();
      }));
    }, [n]), o;
  }
  function s(n, o) {
    const [l, c] = a.useState(() => n.getDecorators());
    return D(() => n.registerDecoratorListener((d) => {
      f.flushSync(() => {
        c(d);
      });
    }), [n]), a.useEffect(() => {
      c(n.getDecorators());
    }, [n]), a.useMemo(() => {
      const d = [], I = Object.keys(l);
      for (let S = 0; S < I.length; S++) {
        const p = I[S], Z = /* @__PURE__ */ a.createElement(o, {
          onError: (ee) => n._onError(ee)
        }, /* @__PURE__ */ a.createElement(a.Suspense, {
          fallback: null
        }, l[p])), Y = n.getElementByKey(p);
        Y !== null && d.push(/* @__PURE__ */ f.createPortal(Z, Y, p));
      }
      return d;
    }, [o, l, n]);
  }
  function i(n) {
    D(() => u.mergeRegister(E.registerPlainText(n), C.registerDragonSupport(n)), [n]);
  }
  function t({
    contentEditable: n,
    placeholder: o,
    ErrorBoundary: l
  }) {
    const [c] = R.useLexicalComposerContext(), d = s(c, l);
    return i(c), /* @__PURE__ */ a.createElement(a.Fragment, null, n, /* @__PURE__ */ a.createElement(r, {
      content: o
    }), d);
  }
  function r({
    content: n
  }) {
    const [o] = R.useLexicalComposerContext(), l = M(o), c = g();
    return l ? typeof n == "function" ? n(c) : n : null;
  }
  return $.PlainTextPlugin = t, $;
}
var y = {}, H;
function Ce() {
  if (H) return y;
  H = 1;
  var R = U(), g = W(), a = z, e = X(), u = P(), f = V, C = G(), E = Q(), _ = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? a.useLayoutEffect : a.useEffect;
  function O(i) {
    return i.getEditorState().read(e.$canShowPlaceholderCurry(i.isComposing()));
  }
  function D(i) {
    let [t, r] = a.useState(() => O(i));
    return _(() => {
      function n() {
        let o = O(i);
        r(o);
      }
      return n(), u.mergeRegister(i.registerUpdateListener(() => {
        n();
      }), i.registerEditableListener(() => {
        n();
      }));
    }, [i]), t;
  }
  function m(i, t) {
    let [r, n] = a.useState(() => i.getDecorators());
    return _(() => i.registerDecoratorListener((o) => {
      f.flushSync(() => {
        n(o);
      });
    }), [i]), a.useEffect(() => {
      n(i.getDecorators());
    }, [i]), a.useMemo(() => {
      let o = [], l = Object.keys(r);
      for (let c = 0; c < l.length; c++) {
        let d = l[c], I = a.createElement(t, { onError: (p) => i._onError(p) }, a.createElement(a.Suspense, { fallback: null }, r[d])), S = i.getElementByKey(d);
        S !== null && o.push(f.createPortal(I, S, d));
      }
      return o;
    }, [t, r, i]);
  }
  function M(i) {
    _(() => u.mergeRegister(E.registerPlainText(i), C.registerDragonSupport(i)), [i]);
  }
  function s({ content: i }) {
    var [t] = R.useLexicalComposerContext();
    t = D(t);
    let r = g();
    return t ? typeof i == "function" ? i(r) : i : null;
  }
  return y.PlainTextPlugin = function({ contentEditable: i, placeholder: t, ErrorBoundary: r }) {
    let [n] = R.useLexicalComposerContext();
    return r = m(n, r), M(n), a.createElement(a.Fragment, null, i, a.createElement(s, { content: t }), r);
  }, y;
}
const de = process.env.NODE_ENV === "development" ? Re() : Ce();
var Ee = de;
const me = te ? ue : w, _e = {
  ...ne,
  paragraph: "st__paragraph"
};
function A(R, g) {
  const a = R.style, e = g.rootElementRect, u = e !== null ? e.left : 0, f = e !== null ? e.top : 0;
  a.top = f + g.y + "px", a.left = u + g.x + "px";
}
function pe({
  x: R,
  y: g,
  nodeKey: a,
  color: e,
  caption: u
}) {
  const [f] = re.useLexicalComposerContext(), C = b(null), E = b({
    isDragging: !1,
    offsetX: 0,
    offsetY: 0,
    rootElementRect: null,
    x: 0,
    y: 0
  });
  w(() => {
    const s = E.current;
    s.x = R, s.y = g;
    const i = C.current;
    i !== null && A(i, s);
  }, [R, g]), me(() => {
    const s = E.current, i = new ResizeObserver((n) => {
      for (let o = 0; o < n.length; o++) {
        const l = n[o], { target: c } = l;
        s.rootElementRect = c.getBoundingClientRect();
        const d = C.current;
        d !== null && A(d, s);
      }
    }), t = f.registerRootListener(
      (n, o) => {
        o !== null && i.unobserve(o), n !== null && i.observe(n);
      }
    ), r = () => {
      const n = f.getRootElement(), o = C.current;
      n !== null && o !== null && (s.rootElementRect = n.getBoundingClientRect(), A(o, s));
    };
    return window.addEventListener("resize", r), () => {
      window.removeEventListener("resize", r), t();
    };
  }, [f]), w(() => {
    const s = C.current;
    s !== null && setTimeout(() => {
      s.style.setProperty(
        "transition",
        "top 0.3s ease 0s, left 0.3s ease 0s"
      );
    }, 500);
  }, []);
  const _ = (s) => {
    const i = C.current, t = E.current, r = t.rootElementRect;
    i !== null && t.isDragging && r !== null && (t.x = s.pageX - t.offsetX - r.left, t.y = s.pageY - t.offsetY - r.top, A(i, t));
  }, O = (s) => {
    const i = C.current, t = E.current;
    i !== null && (t.isDragging = !1, i.classList.remove("dragging"), f.update(() => {
      const r = N(a);
      x(r) && r.setPosition(t.x, t.y);
    })), document.removeEventListener("pointermove", _), document.removeEventListener("pointerup", O);
  }, D = () => {
    f.update(() => {
      const s = N(a);
      x(s) && s.remove();
    });
  }, m = () => {
    f.update(() => {
      const s = N(a);
      x(s) && s.toggleColor();
    });
  }, { historyState: M } = ie();
  return /* @__PURE__ */ T.jsx("div", { ref: C, className: "sticky-note-container", children: /* @__PURE__ */ T.jsxs(
    "div",
    {
      className: `sticky-note ${e}`,
      onPointerDown: (s) => {
        const i = C.current;
        if (i == null || s.button === 2 || s.target !== i.firstChild)
          return;
        const t = i, r = E.current;
        if (t !== null && f.isEditable()) {
          const { top: n, left: o } = t.getBoundingClientRect();
          r.offsetX = s.clientX - o, r.offsetY = s.clientY - n, r.isDragging = !0, t.classList.add("dragging"), document.addEventListener("pointermove", _), document.addEventListener("pointerup", O), s.preventDefault();
        }
      },
      children: [
        /* @__PURE__ */ T.jsx(
          "button",
          {
            disabled: !f.isEditable(),
            onClick: D,
            className: "delete",
            "aria-label": "Delete sticky note",
            title: "Delete",
            children: "X"
          }
        ),
        /* @__PURE__ */ T.jsx(
          "button",
          {
            disabled: !f.isEditable(),
            onClick: m,
            className: "color",
            "aria-label": "Change sticky note color",
            title: "Color",
            children: /* @__PURE__ */ T.jsx("i", { className: "bucket" })
          }
        ),
        /* @__PURE__ */ T.jsxs(
          ce.LexicalNestedComposer,
          {
            initialEditor: u,
            initialTheme: _e,
            children: [
              /* @__PURE__ */ T.jsx(oe.HistoryPlugin, { externalHistoryState: M }),
              /* @__PURE__ */ T.jsx(
                Ee.PlainTextPlugin,
                {
                  contentEditable: /* @__PURE__ */ T.jsx(ae, { className: "StickyNode__contentEditable" }),
                  placeholder: /* @__PURE__ */ T.jsx(se, { className: "StickyNode__placeholder", children: "What's up?" }),
                  ErrorBoundary: le
                }
              )
            ]
          }
        )
      ]
    }
  ) });
}
export {
  pe as default,
  A as positionSticky
};
