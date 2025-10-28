import { f as o, p as a } from "./flowDb-956e92f1-Dho-xzDl.js";
import { f as t, a as e } from "./styles-c10674c1-aSv7nH49.js";
import { x as s } from "./index-BmwGFIaS.js";
import "./graph-C-jSZ8AV.js";
import "./layout-R_KXXvQW.js";
import "./index-DkOhoJBQ.js";
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
