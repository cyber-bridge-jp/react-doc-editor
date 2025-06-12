import { f as o, p as a } from "./flowDb-956e92f1-Dbv0A58d.js";
import { f as t, a as e } from "./styles-c10674c1-D9rU6nnq.js";
import { x as s } from "./index-js36tmam.js";
import "./graph-05ZN4S-9.js";
import "./layout-B_oqg82A.js";
import "./ExcalidrawComponent-Cn5IhdSe.js";
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
