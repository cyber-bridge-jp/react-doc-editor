import { f as o, p as a } from "./flowDb-956e92f1-CThHcha2.js";
import { f as t, a as e } from "./styles-c10674c1-BMN5xt3Y.js";
import { x as s } from "./index-CF7m2yaQ.js";
import "./graph-Brk-cV74.js";
import "./layout-BJBm0gCu.js";
import "./index-m1vXOqHf.js";
const b = {
  parser: a,
  db: o,
  renderer: e,
  styles: t,
  init: (r) => {
    r.flowchart || (r.flowchart = {}), r.flowchart.arrowMarkerAbsolute = r.arrowMarkerAbsolute, s({ flowchart: { arrowMarkerAbsolute: r.arrowMarkerAbsolute } }), e.setConf(r.flowchart), o.clear(), o.setGen("gen-2");
  }
};
export {
  b as diagram
};
