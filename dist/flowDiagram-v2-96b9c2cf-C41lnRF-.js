import { f as o, p as a } from "./flowDb-956e92f1-D9QzAVfL.js";
import { f as t, a as e } from "./styles-c10674c1-4do8A1cz.js";
import { x as s } from "./index-B1Q0QXIG.js";
import "./graph-Cd4zJMRs.js";
import "./layout-Clm3Rvf6.js";
import "./index-C6GX-Z8i.js";
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
