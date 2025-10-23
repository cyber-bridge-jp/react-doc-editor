import { f as o, p as a } from "./flowDb-956e92f1-Dag1ol7j.js";
import { f as t, a as e } from "./styles-c10674c1-DyrleQx6.js";
import { x as s } from "./index-B7sTNY0Y.js";
import "./graph-BOQ86CgM.js";
import "./layout-D_Ny3kq_.js";
import "./index-CNvc0npE.js";
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
