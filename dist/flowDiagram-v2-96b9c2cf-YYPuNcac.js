import { f as o, p as a } from "./flowDb-956e92f1-BRv44cCL.js";
import { f as t, a as e } from "./styles-c10674c1-rYihVbev.js";
import { x as s } from "./index-qFalY49p.js";
import "./graph-CqCdyM5y.js";
import "./layout-gulZTrbb.js";
import "./index-Djob6_a0.js";
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
