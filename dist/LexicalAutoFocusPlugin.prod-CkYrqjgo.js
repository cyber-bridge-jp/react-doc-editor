import { K as l } from "./index-DkOhoJBQ.js";
import { useEffect as u } from "react";
function f({ defaultSelection: o }) {
  const [t] = l();
  return u(() => {
    t.focus(() => {
      const n = document.activeElement, e = t.getRootElement();
      e === null || n !== null && e.contains(n) || e.focus({ preventScroll: !0 });
    }, { defaultSelection: o });
  }, [o, t]), null;
}
export {
  f as o
};
