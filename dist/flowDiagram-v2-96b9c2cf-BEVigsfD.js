import { f as o, p as a } from "./flowDb-956e92f1-CNm7IWgB.js";
import { f as t, a as e } from "./styles-c10674c1-CkPJAo-M.js";
import { x as s } from "./index-CfVnK_m8.js";
import "./graph-Bz0f0wTk.js";
import "./layout-DToAWxnO.js";
import "./index-DcXCVVN8.js";
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
