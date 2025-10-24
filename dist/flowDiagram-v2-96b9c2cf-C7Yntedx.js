import { f as o, p as a } from "./flowDb-956e92f1-DPR-djtF.js";
import { f as t, a as e } from "./styles-c10674c1-Bs3CI5Ij.js";
import { x as s } from "./index-BzLJNEG6.js";
import "./graph-BVVcimp6.js";
import "./layout-BDjW7efR.js";
import "./index-DqNz_ILi.js";
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
