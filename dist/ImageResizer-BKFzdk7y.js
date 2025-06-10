import { j as c } from "./index-CSHQHh7d.js";
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
function Y({
  onResizeStart: h,
  onResizeEnd: m,
  buttonRef: g,
  imageRef: p,
  maxWidth: x,
  editor: P,
  showCaption: v,
  setShowCaption: b,
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
  }), a = P.getRootElement(), W = x || (a !== null ? a.getBoundingClientRect().width - 20 : 100), N = a !== null ? a.getBoundingClientRect().height - 20 : 100, H = 100, X = 100, $ = (t) => {
    const s = t === r.east || t === r.west, e = t === r.north || t === r.south, u = t & r.north && t & r.west || t & r.south && t & r.east, o = s ? "ew" : e ? "ns" : u ? "nwse" : "nesw";
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
  }, C = () => {
    a !== null && a.style.setProperty("cursor", "text"), document.body !== null && (document.body.style.setProperty("cursor", "default"), document.body.style.setProperty(
      "-webkit-user-select",
      d.current.value,
      d.current.priority
    ));
  }, l = (t, s) => {
    if (!P.isEditable())
      return;
    const e = p.current, u = w.current;
    if (e !== null && u !== null) {
      t.preventDefault();
      const { width: o, height: i } = e.getBoundingClientRect(), n = y.current;
      n.startWidth = o, n.startHeight = i, n.ratio = o / i, n.currentWidth = o, n.currentHeight = i, n.startX = t.clientX, n.startY = t.clientY, n.isResizing = !0, n.direction = s, $(s), h(), u.classList.add("image-control-wrapper--resizing"), e.style.height = `${i}px`, e.style.width = `${o}px`, document.addEventListener("pointermove", R), document.addEventListener("pointerup", j);
    }
  }, R = (t) => {
    const s = p.current, e = y.current, u = e.direction & (r.east | r.west), o = e.direction & (r.south | r.north);
    if (s !== null && e.isResizing)
      if (u && o) {
        let i = Math.floor(e.startX - t.clientX);
        i = e.direction & r.east ? -i : i;
        const n = z(
          e.startWidth + i,
          H,
          W
        ), D = n / e.ratio;
        s.style.width = `${n}px`, s.style.height = `${D}px`, e.currentHeight = D, e.currentWidth = n;
      } else if (o) {
        let i = Math.floor(e.startY - t.clientY);
        i = e.direction & r.south ? -i : i;
        const n = z(
          e.startHeight + i,
          X,
          N
        );
        s.style.height = `${n}px`, e.currentHeight = n;
      } else {
        let i = Math.floor(e.startX - t.clientX);
        i = e.direction & r.east ? -i : i;
        const n = z(
          e.startWidth + i,
          H,
          W
        );
        s.style.width = `${n}px`, e.currentWidth = n;
      }
  }, j = () => {
    const t = p.current, s = y.current, e = w.current;
    if (t !== null && e !== null && s.isResizing) {
      const u = s.currentWidth, o = s.currentHeight;
      s.startWidth = 0, s.startHeight = 0, s.ratio = 0, s.startX = 0, s.startY = 0, s.currentWidth = 0, s.currentHeight = 0, s.isResizing = !1, e.classList.remove("image-control-wrapper--resizing"), C(), m(u, o), document.removeEventListener("pointermove", R), document.removeEventListener("pointerup", j);
    }
  };
  return /* @__PURE__ */ c.jsxs("div", { ref: w, children: [
    !v && E && b && /* @__PURE__ */ c.jsx(
      "button",
      {
        className: "image-caption-button",
        ref: g,
        onClick: () => {
          b(!v);
        },
        children: "Add Caption"
      }
    ),
    /* @__PURE__ */ c.jsx(
      "div",
      {
        className: "image-resizer image-resizer-n",
        onPointerDown: (t) => {
          l(t, r.north);
        }
      }
    ),
    /* @__PURE__ */ c.jsx(
      "div",
      {
        className: "image-resizer image-resizer-ne",
        onPointerDown: (t) => {
          l(t, r.north | r.east);
        }
      }
    ),
    /* @__PURE__ */ c.jsx(
      "div",
      {
        className: "image-resizer image-resizer-e",
        onPointerDown: (t) => {
          l(t, r.east);
        }
      }
    ),
    /* @__PURE__ */ c.jsx(
      "div",
      {
        className: "image-resizer image-resizer-se",
        onPointerDown: (t) => {
          l(t, r.south | r.east);
        }
      }
    ),
    /* @__PURE__ */ c.jsx(
      "div",
      {
        className: "image-resizer image-resizer-s",
        onPointerDown: (t) => {
          l(t, r.south);
        }
      }
    ),
    /* @__PURE__ */ c.jsx(
      "div",
      {
        className: "image-resizer image-resizer-sw",
        onPointerDown: (t) => {
          l(t, r.south | r.west);
        }
      }
    ),
    /* @__PURE__ */ c.jsx(
      "div",
      {
        className: "image-resizer image-resizer-w",
        onPointerDown: (t) => {
          l(t, r.west);
        }
      }
    ),
    /* @__PURE__ */ c.jsx(
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
  Y as I
};
