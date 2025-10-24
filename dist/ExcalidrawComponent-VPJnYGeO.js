import { jsx as h, jsxs as D, Fragment as H } from "react/jsx-runtime";
import { ak as j, K as F, al as J, J as L, V as _, a3 as Q, am as V, Y as W, Q as g, an as Y, ao as I } from "./index-64JgSrCY.js";
import { useState as M, useEffect as k, useRef as C, useCallback as E, useMemo as q } from "react";
import { I as G } from "./ImageResizer-C3z1nz78.js";
const P = (e) => {
  var u;
  const o = (u = e == null ? void 0 : e.firstElementChild) == null ? void 0 : u.firstElementChild, c = e.getAttribute("viewBox");
  if (c != null) {
    const n = c.split(" ");
    e.setAttribute("width", n[2]), e.setAttribute("height", n[3]);
  }
  o && o.tagName === "style" && o.remove();
};
function U({
  elements: e,
  files: o,
  imageContainerRef: c,
  appState: u,
  rootClassName: n = null,
  width: l = "inherit",
  height: d = "inherit"
}) {
  const [a, b] = M(null);
  k(() => {
    (async () => {
      const s = await j({
        appState: u,
        elements: e,
        files: o
      });
      P(s), s.setAttribute("width", "100%"), s.setAttribute("height", "100%"), s.setAttribute("display", "block"), b(s);
    })();
  }, [e, o, u]);
  const f = {};
  return l !== "inherit" && (f.width = `${l}px`), d !== "inherit" && (f.height = `${d}px`), /* @__PURE__ */ h(
    "div",
    {
      ref: (m) => {
        m && c && (c.current = m);
      },
      className: n ?? "",
      style: f,
      dangerouslySetInnerHTML: { __html: (a == null ? void 0 : a.outerHTML) ?? "" }
    }
  );
}
function et({
  nodeKey: e,
  data: o,
  width: c,
  height: u
}) {
  const [n] = F(), l = J(), [d, a] = M(
    o === "[]" && n.isEditable()
  ), b = C(null), f = C(null), m = C(null), [s, N, S] = L(e), [w, R] = M(!1);
  k(() => {
    if (!l) {
      s && S();
      return;
    }
    return _(
      n.registerCommand(
        Q,
        (t) => {
          const r = f.current, i = t.target;
          return w ? !0 : r !== null && V(i) && r.contains(i) ? (t.shiftKey || S(), N(!s), t.detail > 1 && a(!0), !0) : !1;
        },
        W
      )
    );
  }, [S, n, s, w, N, l]);
  const v = E(() => (a(!1), n.update(() => {
    const t = g(e);
    t && t.remove();
  })), [n, e]), y = (t, r, i) => n.update(() => {
    const x = g(e);
    I(x) && (t && t.length > 0 || Object.keys(i).length > 0 ? x.setData(
      JSON.stringify({
        appState: r,
        elements: t,
        files: i
      })
    ) : x.remove());
  }), z = () => {
    R(!0);
  }, T = (t, r) => {
    setTimeout(() => {
      R(!1);
    }, 200), n.update(() => {
      const i = g(e);
      I(i) && (i.setWidth(t), i.setHeight(r));
    });
  }, $ = E(() => {
    a(!0);
  }, []), {
    elements: p = [],
    files: A = {},
    appState: O = {}
  } = q(() => JSON.parse(o), [o]), B = E(() => {
    a(!1), p.length === 0 && n.update(() => {
      const t = g(e);
      t && t.remove();
    });
  }, [n, e, p.length]);
  return /* @__PURE__ */ D(H, { children: [
    l && d && /* @__PURE__ */ h(
      Y,
      {
        initialElements: p,
        initialFiles: A,
        initialAppState: O,
        isShown: d,
        onDelete: v,
        onClose: B,
        onSave: (t, r, i) => {
          y(t, r, i), a(!1);
        },
        closeOnClickOutside: !1
      }
    ),
    p.length > 0 && /* @__PURE__ */ D(
      "button",
      {
        type: "button",
        ref: f,
        className: `excalidraw-button ${s ? "selected" : ""}`,
        children: [
          /* @__PURE__ */ h(
            U,
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
              onClick: $
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
              onResizeStart: z,
              onResizeEnd: T,
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
