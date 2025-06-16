import { jsx as h, jsxs as D, Fragment as B } from "react/jsx-runtime";
import { aP as j, H as F, aQ as L, Q as _, Z as J, a6 as Q, aR as W, a1 as P, W as g, aS as Z, aT as I } from "./index-B1XK6w54.js";
import { useState as R, useEffect as v, useRef as C, useCallback as E, useMemo as q } from "react";
import { I as G } from "./ImageResizer-C8Cf15hU.js";
const U = (e) => {
  var u;
  const a = (u = e == null ? void 0 : e.firstElementChild) == null ? void 0 : u.firstElementChild, c = e.getAttribute("viewBox");
  if (c != null) {
    const n = c.split(" ");
    e.setAttribute("width", n[2]), e.setAttribute("height", n[3]);
  }
  a && a.tagName === "style" && a.remove();
};
function V({
  elements: e,
  files: a,
  imageContainerRef: c,
  appState: u,
  rootClassName: n = null,
  width: l = "inherit",
  height: d = "inherit"
}) {
  const [o, b] = R(null);
  v(() => {
    (async () => {
      const s = await j({
        appState: u,
        elements: e,
        files: a
      });
      U(s), s.setAttribute("width", "100%"), s.setAttribute("height", "100%"), s.setAttribute("display", "block"), b(s);
    })();
  }, [e, a, u]);
  const f = {};
  return l !== "inherit" && (f.width = `${l}px`), d !== "inherit" && (f.height = `${d}px`), /* @__PURE__ */ h(
    "div",
    {
      ref: (m) => {
        m && c && (c.current = m);
      },
      className: n ?? "",
      style: f,
      dangerouslySetInnerHTML: { __html: (o == null ? void 0 : o.outerHTML) ?? "" }
    }
  );
}
function et({
  nodeKey: e,
  data: a,
  width: c,
  height: u
}) {
  const [n] = F(), l = L(), [d, o] = R(
    a === "[]" && n.isEditable()
  ), b = C(null), f = C(null), m = C(null), [s, M, S] = _(e), [w, N] = R(!1);
  v(() => {
    if (!l) {
      s && S();
      return;
    }
    return J(
      n.registerCommand(
        Q,
        (t) => {
          const r = f.current, i = t.target;
          return w ? !0 : r !== null && W(i) && r.contains(i) ? (t.shiftKey || S(), M(!s), t.detail > 1 && o(!0), !0) : !1;
        },
        P
      )
    );
  }, [S, n, s, w, M, l]);
  const T = E(() => (o(!1), n.update(() => {
    const t = g(e);
    t && t.remove();
  })), [n, e]), k = (t, r, i) => n.update(() => {
    const x = g(e);
    I(x) && (t && t.length > 0 || Object.keys(i).length > 0 ? x.setData(
      JSON.stringify({
        appState: r,
        elements: t,
        files: i
      })
    ) : x.remove());
  }), y = () => {
    N(!0);
  }, z = (t, r) => {
    setTimeout(() => {
      N(!1);
    }, 200), n.update(() => {
      const i = g(e);
      I(i) && (i.setWidth(t), i.setHeight(r));
    });
  }, H = E(() => {
    o(!0);
  }, []), {
    elements: p = [],
    files: A = {},
    appState: O = {}
  } = q(() => JSON.parse(a), [a]), $ = E(() => {
    o(!1), p.length === 0 && n.update(() => {
      const t = g(e);
      t && t.remove();
    });
  }, [n, e, p.length]);
  return /* @__PURE__ */ D(B, { children: [
    l && d && /* @__PURE__ */ h(
      Z,
      {
        initialElements: p,
        initialFiles: A,
        initialAppState: O,
        isShown: d,
        onDelete: T,
        onClose: $,
        onSave: (t, r, i) => {
          k(t, r, i), o(!1);
        },
        closeOnClickOutside: !1
      }
    ),
    p.length > 0 && /* @__PURE__ */ D(
      "button",
      {
        ref: f,
        className: `excalidraw-button ${s ? "selected" : ""}`,
        children: [
          /* @__PURE__ */ h(
            V,
            {
              imageContainerRef: b,
              className: "image",
              elements: p,
              files: A,
              appState: O,
              width: c,
              height: u
            }
          ),
          s && l && /* @__PURE__ */ h(
            "div",
            {
              className: "image-edit-button",
              role: "button",
              tabIndex: 0,
              onMouseDown: (t) => t.preventDefault(),
              onClick: H
            }
          ),
          (s || w) && l && /* @__PURE__ */ h(
            G,
            {
              buttonRef: m,
              showCaption: !0,
              setShowCaption: () => null,
              imageRef: b,
              editor: n,
              onResizeStart: y,
              onResizeEnd: z,
              captionsEnabled: !0
            }
          )
        ]
      }
    )
  ] });
}
export {
  et as default
};
