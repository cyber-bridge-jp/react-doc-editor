import { jsxs as M, jsx as c } from "react/jsx-runtime";
import { useRef as f } from "react";
function z(h, m, g) {
  return Math.min(Math.max(h, m), g);
}
const r = {
  east: 1,
  north: 8,
  south: 2,
  west: 4
};
function B({
  onResizeStart: h,
  onResizeEnd: m,
  buttonRef: g,
  imageRef: p,
  maxWidth: P,
  editor: v,
  showCaption: b,
  setShowCaption: W,
  captionsEnabled: E
}) {
  const w = f(null), d = f({
    priority: "",
    value: "default"
  }), y = f({
    currentHeight: 0,
    currentWidth: 0,
    direction: 0,
    isResizing: !1,
    ratio: 0,
    startHeight: 0,
    startWidth: 0,
    startX: 0,
    startY: 0
  }), a = v.getRootElement(), H = P || (a !== null ? a.getBoundingClientRect().width - 20 : 100), X = a !== null ? a.getBoundingClientRect().height - 20 : 100, x = 100, $ = 100, C = (t) => {
    const i = t === r.east || t === r.west, e = t === r.north || t === r.south, u = t & r.north && t & r.west || t & r.south && t & r.east, o = i ? "ew" : e ? "ns" : u ? "nwse" : "nesw";
    a !== null && a.style.setProperty(
      "cursor",
      `${o}-resize`,
      "important"
    ), document.body !== null && (document.body.style.setProperty(
      "cursor",
      `${o}-resize`,
      "important"
    ), d.current.value = document.body.style.getPropertyValue(
      "-webkit-user-select"
    ), d.current.priority = document.body.style.getPropertyPriority(
      "-webkit-user-select"
    ), document.body.style.setProperty(
      "-webkit-user-select",
      "none",
      "important"
    ));
  }, L = () => {
    a !== null && a.style.setProperty("cursor", "text"), document.body !== null && (document.body.style.setProperty("cursor", "default"), document.body.style.setProperty(
      "-webkit-user-select",
      d.current.value,
      d.current.priority
    ));
  }, l = (t, i) => {
    if (!v.isEditable())
      return;
    const e = p.current, u = w.current;
    if (e !== null && u !== null) {
      t.preventDefault();
      const { width: o, height: n } = e.getBoundingClientRect(), s = y.current;
      s.startWidth = o, s.startHeight = n, s.ratio = o / n, s.currentWidth = o, s.currentHeight = n, s.startX = t.clientX, s.startY = t.clientY, s.isResizing = !0, s.direction = i, C(i), h(), u.classList.add("image-control-wrapper--resizing"), e.style.height = `${n}px`, e.style.width = `${o}px`, document.addEventListener("pointermove", D), document.addEventListener("pointerup", R);
    }
  }, D = (t) => {
    const i = p.current, e = y.current, u = e.direction & (r.east | r.west), o = e.direction & (r.south | r.north);
    if (i !== null && e.isResizing)
      if (u && o) {
        let n = Math.floor(e.startX - t.clientX);
        n = e.direction & r.east ? -n : n;
        const s = z(
          e.startWidth + n,
          x,
          H
        ), N = s / e.ratio;
        i.style.width = `${s}px`, i.style.height = `${N}px`, e.currentHeight = N, e.currentWidth = s;
      } else if (o) {
        let n = Math.floor(e.startY - t.clientY);
        n = e.direction & r.south ? -n : n;
        const s = z(
          e.startHeight + n,
          $,
          X
        );
        i.style.height = `${s}px`, e.currentHeight = s;
      } else {
        let n = Math.floor(e.startX - t.clientX);
        n = e.direction & r.east ? -n : n;
        const s = z(
          e.startWidth + n,
          x,
          H
        );
        i.style.width = `${s}px`, e.currentWidth = s;
      }
  }, R = () => {
    const t = p.current, i = y.current, e = w.current;
    if (t !== null && e !== null && i.isResizing) {
      const u = i.currentWidth, o = i.currentHeight;
      i.startWidth = 0, i.startHeight = 0, i.ratio = 0, i.startX = 0, i.startY = 0, i.currentWidth = 0, i.currentHeight = 0, i.isResizing = !1, e.classList.remove("image-control-wrapper--resizing"), L(), m(u, o), document.removeEventListener("pointermove", D), document.removeEventListener("pointerup", R);
    }
  };
  return /* @__PURE__ */ M("div", { ref: w, children: [
    !b && E && W && /* @__PURE__ */ c(
      "button",
      {
        type: "button",
        className: "image-caption-button",
        ref: g,
        onClick: () => {
          W(!b);
        },
        children: "Add Caption"
      }
    ),
    /* @__PURE__ */ c(
      "div",
      {
        className: "image-resizer image-resizer-n",
        onPointerDown: (t) => {
          l(t, r.north);
        }
      }
    ),
    /* @__PURE__ */ c(
      "div",
      {
        className: "image-resizer image-resizer-ne",
        onPointerDown: (t) => {
          l(t, r.north | r.east);
        }
      }
    ),
    /* @__PURE__ */ c(
      "div",
      {
        className: "image-resizer image-resizer-e",
        onPointerDown: (t) => {
          l(t, r.east);
        }
      }
    ),
    /* @__PURE__ */ c(
      "div",
      {
        className: "image-resizer image-resizer-se",
        onPointerDown: (t) => {
          l(t, r.south | r.east);
        }
      }
    ),
    /* @__PURE__ */ c(
      "div",
      {
        className: "image-resizer image-resizer-s",
        onPointerDown: (t) => {
          l(t, r.south);
        }
      }
    ),
    /* @__PURE__ */ c(
      "div",
      {
        className: "image-resizer image-resizer-sw",
        onPointerDown: (t) => {
          l(t, r.south | r.west);
        }
      }
    ),
    /* @__PURE__ */ c(
      "div",
      {
        className: "image-resizer image-resizer-w",
        onPointerDown: (t) => {
          l(t, r.west);
        }
      }
    ),
    /* @__PURE__ */ c(
      "div",
      {
        className: "image-resizer image-resizer-nw",
        onPointerDown: (t) => {
          l(t, r.north | r.west);
        }
      }
    )
  ] });
}
export {
  B as I
};
